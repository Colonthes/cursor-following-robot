import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { makeRobot } from './model.js';
import { createMotion } from './motion.js';
const instances=new WeakMap(),clamp=THREE.MathUtils.clamp;
function init(el) {
  if(instances.has(el))return instances.get(el);
  const reduce=matchMedia('(prefers-reduced-motion:reduce)'),mouse=matchMedia('(hover:hover) and (pointer:fine)');
  if(reduce.matches||!mouse.matches)return null;
  const mount=el.querySelector('.cursor-robot__canvas');if(!mount)return null;
  const accent=/^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(el.dataset.accent||'')?el.dataset.accent:'#06b6d4';
  let renderer;
  try{renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});}catch{el.dataset.status='fallback';return null;}
  el.dataset.initialized='true';
  renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.5));renderer.setClearColor(0,0);
  renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.domElement.setAttribute('aria-hidden','true');mount.appendChild(renderer.domElement);
  const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(-2.3,2.3,2.3,-2.3,0.1,50);
  camera.position.set(0,0.50,7);camera.lookAt(0,0.40,0);
  const studio=new RoomEnvironment(),pmrem=new THREE.PMREMGenerator(renderer),environment=pmrem.fromScene(studio,0.035);
  scene.environment=environment.texture;scene.environmentIntensity=0.65;studio.dispose();pmrem.dispose();
  scene.add(new THREE.HemisphereLight(0xcde8ff,0x1a2330,1.2));
  for(const [color,power,pos] of [[0xe9f5ff,2.8,[-3,5,4]],[0x7fd9ff,2.7,[3,2,-2]],[0xffffff,0.9,[2,0,3]]]){const l=new THREE.DirectionalLight(color,power);l.position.set(...pos);scene.add(l);}
  const robot=makeRobot(accent);scene.add(robot.root);el.dataset.modelReady='true';
  const motion=createMotion(robot,el.dataset.idle!=='false');
  const ray=new THREE.Raycaster(),ndc=new THREE.Vector2();
  const zone=el.dataset.tracking==='section'?(el.closest('[data-robot-tracking-area],.avia-section')||el):null;
  let targetX=0,targetY=0,visible=false,disposed=false,contextLost=false,raf=0,last=0,renderCount=0;
  let bounds=el.getBoundingClientRect(),pointerPos=null,hover=null,state={};
  const cleanups=[],button=el.querySelector('.cursor-robot__chat');
  const allowed=()=>!reduce.matches&&mouse.matches;
  const chat=()=>el.dataset.chatActive==='true';
  const on=(target,event,fn,options)=>{target.addEventListener(event,fn,options);cleanups.push(()=>target.removeEventListener(event,fn,options));};
  function project(object,point=[0,0,0]) {
    object.updateWorldMatrix(true,false);const v=new THREE.Vector3(...point);object.localToWorld(v);v.project(camera);
    return {x:bounds.left+(v.x+1)*bounds.width/2,y:bounds.top+(1-v.y)*bounds.height/2};
  }
  function pick(x,y) {
    if(x<bounds.left||x>bounds.right||y<bounds.top||y>bounds.bottom)return null;
    scene.updateMatrixWorld(true);ndc.set((x-bounds.left)/bounds.width*2-1,-(y-bounds.top)/bounds.height*2+1);
    ray.setFromCamera(ndc,camera);
    // Nearest surface wins, including non-interactive arms in front of the torso.
    for(const hit of ray.intersectObject(robot.root,true)) {
      if(!hit.object.visible)continue;
      let object=hit.object,hidden=false,part=null;
      while(object&&object!==scene){if(!object.visible)hidden=true;if(!part&&object.userData.part)part=object.userData.part;object=object.parent;}
      if(hidden)continue;
      return part;
    }
    return null;
  }
  function points() {
    return {head:project(robot.head,[0,0.43,0.36]),torso:project(robot.torso,[0,0.69,0.36]),left:project(robot.arms[0].wrist,[0,-0.10,0.05]),right:project(robot.arms[1].wrist,[0,-0.10,0.05]),legLeft:project(robot.legs[0].hip,[0,-0.65,0.20]),legRight:project(robot.legs[1].hip,[0,-0.65,0.20])};
  }
  function updateButton() {
    if(!button)return;
    const tl=project(robot.torso,[-0.47,1.12,0.34]),br=project(robot.torso,[0.47,0.05,0.34]);
    Object.assign(button.style,{left:Math.min(tl.x,br.x)-bounds.left+'px',top:Math.min(tl.y,br.y)-bounds.top+'px',width:Math.abs(br.x-tl.x)+'px',height:Math.abs(br.y-tl.y)+'px'});
  }
  function draw(){renderer.render(scene,camera);renderCount++;el.dataset.rendered='true';updateButton();}
  function pose(dt) {
    const p=points(),proximity={left:0,right:0};
    if(pointerPos){for(const side of ['left','right'])proximity[side]=1-clamp(Math.hypot(pointerPos.x-p[side].x,pointerPos.y-p[side].y)/60,0,1);}
    state=motion.pose(dt,{targetX,targetY,chat:chat(),speaking:el.dataset.replyActive==='true',hover,focus:document.activeElement===button,proximity,accent});
    el.dataset.mood=state.mood;el.dataset.reaction=state.reaction||'';el.dataset.mouthVisible=String(robot.mouth.visible);
    if(el.hasAttribute('data-pr-debug')){
      el.dataset.prPoints=JSON.stringify(points());el.dataset.prState=JSON.stringify({...state,targetX,targetY,renderCount});
    }
  }
  function resize(){if(disposed)return;bounds=el.getBoundingClientRect();const w=Math.max(1,bounds.width),h=Math.max(1,bounds.height),aspect=w/h,viewH=Math.max(4.65,3.8/aspect);camera.left=-viewH*aspect/2;camera.right=viewH*aspect/2;camera.top=viewH/2;camera.bottom=-viewH/2;camera.updateProjectionMatrix();renderer.setSize(w,h,false);if(allowed()&&visible&&!contextLost)draw();}
  function center(){targetX=0;targetY=0;pointerPos=null;hover=null;delete el.dataset.hover;}
  function pointer(e){
    if(e.pointerType==='touch'||!visible||!allowed())return;
    if(zone){const z=zone.getBoundingClientRect();if(e.clientX<z.left||e.clientX>z.right||e.clientY<z.top||e.clientY>z.bottom){center();return;}}
    pointerPos={x:e.clientX,y:e.clientY};
    hover=el.contains(e.target)?pick(e.clientX,e.clientY):null;
    el.dataset.hover=hover||'';
    const h=project(robot.head,[0,0.43,0]);
    targetX=clamp((e.clientX-h.x)/Math.max(120,bounds.width*0.55),-1,1);targetY=clamp((e.clientY-h.y)/Math.max(120,bounds.height*0.55),-1,1);
  }
  function click(e){
    if(e.button!==0||e.defaultPrevented||!allowed()||!visible||contextLost)return;
    if(e.detail===0)return; // The native torso button handles keyboard activation.
    if(e.target.closest('a,input,textarea,select')||e.target.closest('button')&&e.target.closest('button')!==button)return;
    bounds=el.getBoundingClientRect();const part=pick(e.clientX,e.clientY);
    if(!part)return;
    if(part==='torso'){motion.cancel();window.CursorRobotChat?.open(el);}
    else if(motion.hit(part)){el.dataset.lastHit=part;el.dataset.hitCount=String(Number(el.dataset.hitCount||0)+1);}
  }
  function shouldRun(){return !disposed&&visible&&allowed()&&!document.hidden&&!contextLost;}
  function frame(now){raf=0;if(!el.isConnected){destroy();return;}if(!shouldRun())return;if(!last||now-last>=1000/30){const dt=last?Math.min((now-last)/1000,0.08):1/30;last=now;pose(dt);draw();}raf=requestAnimationFrame(frame);}
  function sync(){if(disposed)return;el.dataset.status=contextLost?'fallback':!allowed()?'static':visible&&!document.hidden?'playing':'suspended';if(shouldRun()){if(!raf){last=0;raf=requestAnimationFrame(frame);}}else{cancelAnimationFrame(raf);raf=0;last=0;}}
  function destroy(){if(disposed)return;disposed=true;cancelAnimationFrame(raf);cleanups.forEach(fn=>fn());const geos=new Set(),mats=new Set(),textures=new Set();scene.traverse(o=>{if(o.geometry)geos.add(o.geometry);if(o.material)mats.add(o.material);});mats.forEach(m=>{if(m.map)textures.add(m.map);if(m.emissiveMap)textures.add(m.emissiveMap);});geos.forEach(g=>g.dispose());mats.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());environment.dispose();renderer.dispose();renderer.domElement.remove();delete el.dataset.initialized;delete el.dataset.rendered;delete el.dataset.modelReady;instances.delete(el);}
  on(document,'pointermove',pointer,{passive:true});on(el,'click',click);
  on(document.documentElement,'pointerleave',center);on(window,'blur',center);
  on(window,'scroll',()=>{bounds=el.getBoundingClientRect();center();},{passive:true,capture:true});
  on(document,'visibilitychange',sync);on(reduce,'change',()=>{center();motion.cancel();sync();});on(mouse,'change',()=>{center();motion.cancel();sync();});
  let previouslyChatting=chat();
  on(el,'cursor-robot:state',()=>{if(chat()&&!previouslyChatting)motion.cancel();previouslyChatting=chat();sync();});
  on(renderer.domElement,'webglcontextlost',e=>{e.preventDefault();contextLost=true;delete el.dataset.rendered;sync();});
  on(renderer.domElement,'webglcontextrestored',()=>{contextLost=false;resize();sync();});
  if('ResizeObserver'in window){const ro=new ResizeObserver(resize);ro.observe(el);cleanups.push(()=>ro.disconnect());}else on(window,'resize',resize);
  if('IntersectionObserver'in window){const io=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:0});io.observe(el);cleanups.push(()=>io.disconnect());}else visible=true;
  pose(0);resize();sync();const api={destroy,getState:()=>({...state,targetX,targetY,renderCount,visible,status:el.dataset.status})};instances.set(el,api);return api;
}
window.CursorRobot={init};
