import * as THREE from 'three';
const clamp=THREE.MathUtils.clamp;
const smooth=(a,b,x)=>THREE.MathUtils.smoothstep(x,a,b);
const down=new THREE.Vector3(0,-1,0);
const lerp=THREE.MathUtils.lerp;

// Solve shoulder + elbow together. The pole keeps elbows outside the torso.
export function reach(arm,target,weight,wristRotation=[0,0,0]) {
  if(weight<=0)return;
  const start=arm.shoulder.position;
  const offset=new THREE.Vector3(...target).sub(start);
  const distance=clamp(offset.length(),0.17,1.185);
  const direction=offset.normalize();
  const pole=new THREE.Vector3(arm.side*0.70,-0.40,0.30);
  pole.addScaledVector(direction,-pole.dot(direction)).normalize();
  const along=(0.66**2-0.53**2+distance**2)/(2*distance);
  const elbow=start.clone().addScaledVector(direction,along).addScaledVector(pole,Math.sqrt(Math.max(0,0.66**2-along**2)));
  const end=start.clone().addScaledVector(direction,distance);
  const shoulderQ=new THREE.Quaternion().setFromUnitVectors(down,elbow.clone().sub(start).normalize());
  const forearmQ=new THREE.Quaternion().setFromUnitVectors(down,end.sub(elbow).normalize());
  const elbowQ=shoulderQ.clone().invert().multiply(forearmQ);
  const wristQ=forearmQ.clone().invert().multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(...wristRotation)));
  arm.shoulder.quaternion.slerp(shoulderQ,weight);
  arm.elbow.quaternion.slerp(elbowQ,weight);
  arm.wrist.quaternion.slerp(wristQ,weight);
}

export function createMotion(robot,idle=true) {
  let time=0,aimX=0,aimY=0,chatBlend=0,speechBlend=0,hoverBlend=0,reaction=null;
  let mouthOpen=0,mood='neutral',lastSide=1;
  function hit(part) {
    if(reaction)return false;
    if(!/^(head|hand-(left|right)|leg-(left|right))$/.test(part))return false;
    const side=part.endsWith('left')?-1:part.endsWith('right')?1:(lastSide*=-1);
    reaction={part,side,age:0,duration:part.startsWith('hand')?3.25:part==='head'?2.25:1.8};
    return true;
  }
  function pose(dt,input={}) {
    time+=dt;
    const a=1-Math.exp(-7*dt);
    chatBlend=lerp(chatBlend,input.chat?1:0,a);
    speechBlend=lerp(speechBlend,input.chat&&input.speaking?1:0,1-Math.exp(-9*dt));
    hoverBlend=lerp(hoverBlend,input.hover==='torso'||input.focus?1:0,a);
    const tx=reaction||input.chat?0:input.targetX||0,ty=reaction||input.chat?0:input.targetY||0;
    aimX=lerp(aimX,tx,a);aimY=lerp(aimY,ty,a);
    robot.root.position.set(0,0,0);robot.root.rotation.set(0,0,0);
    robot.head.rotation.set(aimY*0.36,aimX*0.66,-aimX*0.045,'YXZ');
    robot.upper.rotation.set(0,aimX*0.055*(1-chatBlend),-aimX*0.010*(1-chatBlend));
    robot.upper.position.y=idle?Math.sin(time*1.15)*0.004*(1-chatBlend):0;
    for(const arm of robot.arms) {
      const {side,shoulder,elbow,wrist}=arm;
      shoulder.rotation.set(-0.065,0,side*0.23);
      elbow.rotation.set(-0.44,0,side*0.06);
      wrist.rotation.set(0,side*0.16,0);
      // Local wrist motion only; hands do not flee from the pointer.
      const near=input.proximity?.[side<0?'left':'right']||0;
      wrist.rotation.z=side*near*0.028*(1-chatBlend);
      if(speechBlend>0.01&&!reaction) {
        const emphasis=(Math.sin(time*1.10+side*1.3)+1)/2;
        reach(arm,[side*(0.60+0.025*Math.sin(time*0.9)),0.18+0.14*emphasis,0.58+0.04*Math.cos(time)],speechBlend*(0.56+0.30*emphasis),[-0.90,side*0.30,side*0.18]);
      }
    }
    for(const leg of robot.legs){leg.hip.rotation.set(0,0,0);leg.knee.rotation.set(0,0,0);}
    mood=input.chat?'listening':'neutral';
    mouthOpen=0;robot.squints.visible=false;robot.eyes.forEach(eye=>eye.visible=true);
    const blink=(time%5.4>5.23)?0.2:1;
    robot.eyes.forEach(eye=>{eye.scale.y=0.014*blink*(1+chatBlend*0.18);eye.rotation.z=0;});
    robot.brows.forEach(b=>b.visible=false);
    robot.mouth.visible=!!input.chat||speechBlend>0.015;
    robot.ring.visible=speechBlend>0.07;robot.smile.visible=!robot.ring.visible;robot.wince.visible=false;
    if(speechBlend>0.07) {
      mood='speaking';
      mouthOpen=speechBlend*(0.17+0.58*Math.abs(Math.sin(time*9.3))*Math.abs(Math.sin(time*5.8+0.9)));
      robot.ring.scale.set(1.13+Math.sin(time*7)*0.13,Math.max(0.12,mouthOpen),1);
    }
    if(reaction) {
      reaction.age+=dt;
      const {part,side,age,duration}=reaction;
      const enter=smooth(0,0.16,age),exit=1-smooth(duration-0.60,duration,age);
      const weight=enter*exit;
      const flinch=Math.sin(Math.min(1,age/0.44)*Math.PI)*(1-smooth(0.32,0.50,age));
      robot.head.rotation.x=-0.15*flinch;
      robot.head.rotation.z=side*0.10*weight;
      robot.root.position.z=-0.055*flinch;
      robot.upper.rotation.z=side*0.026*weight;
      robot.mouth.visible=weight>0.01;
      robot.ring.visible=age<0.34;robot.smile.visible=false;robot.wince.visible=age>=0.34;
      robot.ring.scale.set(0.78,0.78,1);mouthOpen=age<0.34?0.78:0.1;
      robot.squints.visible=age>=0.17&&exit>0.3;
      robot.eyes.forEach(eye=>{eye.visible=!robot.squints.visible;eye.scale.y=0.014*(1+1.2*flinch);});
      robot.brows.forEach(b=>b.visible=exit>0.3);
      mood=age<0.34?'surprised':'wince';
      if(part.startsWith('hand')) {
        const meet=smooth(0.22,0.90,age)*exit;
        const rub=smooth(0.85,1.10,age)*(1-smooth(2.25,2.55,age));
        const injured=robot.arms.find(a=>a.side===side),helper=robot.arms.find(a=>a.side!==side);
        reach(injured,[side*0.035,0.43,0.57],meet,[0.10,side*0.15,side*0.15]);
        reach(helper,[side*0.035+Math.sin(age*12)*0.020*rub,0.46+Math.cos(age*12)*0.027*rub,0.735],meet,[-0.10,Math.PI,side*0.08]);
        robot.head.rotation.x=0.12*meet;
        robot.head.rotation.y=side*0.07*meet;
      } else if(part==='head') {
        const hand=robot.arms.find(a=>a.side===side);
        reach(hand,[side*0.34,1.62+0.018*Math.sin(age*11),0.37],smooth(0.20,0.68,age)*exit,[0,side*1.25,side*-0.2]);
      } else {
        const leg=robot.legs.find(l=>l.side===side);
        leg.hip.rotation.x=-0.13*weight;leg.knee.rotation.x=0.23*weight;
        robot.upper.rotation.z=-side*0.07*weight;
        robot.head.rotation.x=0.18*weight;robot.head.rotation.y=side*0.12*weight;
      }
      if(age>=duration)reaction=null;
    }
    robot.chestMaterial.emissive.set(input.accent||'#06b6d4');
    robot.chestMaterial.emissiveIntensity=0.075*hoverBlend;
    return {aimX,aimY,mood,mouthOpen,reaction:reaction?.part||null,reactionAge:reaction?.age||0,chat:!!input.chat,speaking:!!input.chat&&!!input.speaking};
  }
  return {pose,hit,cancel:()=>{reaction=null;}};
}
