import * as THREE from 'three';


export function makeRobot(accent) {
  const root = new THREE.Group();
  const upper = new THREE.Group();
  root.add(upper);
  const torso=new THREE.Group(); upper.add(torso); torso.userData.part="torso";
  const shell = new THREE.MeshPhysicalMaterial({color:0x131b25, metalness:0.78, roughness:0.31, clearcoat:0.65, clearcoatRoughness:0.23});
  const dark = new THREE.MeshStandardMaterial({color:0x080d15, metalness:0.73, roughness:0.27});
  const chrome = new THREE.MeshStandardMaterial({color:0x627487, metalness:0.92, roughness:0.31});
  const rubber = new THREE.MeshStandardMaterial({color:0x111820, metalness:0.25, roughness:0.6});
  const glow = new THREE.MeshBasicMaterial({color:accent, toneMapped:false});
  const sphereGeo = new THREE.SphereGeometry(1, 32, 20);
  const boxGeo = new THREE.BoxGeometry(1,1,1);
  const cylinderGeo = new THREE.CylinderGeometry(1,1,1,24);
  function mesh(parent, geo, mat, pos, scale) {
    const obj = new THREE.Mesh(geo, mat);
    obj.position.set(...pos);
    if (scale) obj.scale.set(...scale);
    parent.add(obj);
    return obj;
  }
  const orb = (parent, mat, pos, scale) => mesh(parent,sphereGeo,mat,pos,scale);
  const box = (parent, mat, pos, scale) => mesh(parent,boxGeo,mat,pos,scale);
  const cyl = (parent, mat, pos, scale) => mesh(parent,cylinderGeo,mat,pos,scale);
  function band(parent, radius, tube, pos, mat=chrome) {
    return mesh(parent,new THREE.TorusGeometry(radius,tube,10,40),mat,pos);
  }

  // The head has a separate pivot at the neck, not at its bounding-box center.
  const head = new THREE.Group();
  head.position.set(0,1.24,0);
  upper.add(head); head.userData.part="head";
  cyl(upper,chrome,[0,1.22,0],[0.115,0.24,0.115]);
  cyl(upper,dark,[0,1.16,0],[0.175,0.07,0.175]);
  orb(head,shell,[0,0.43,0],[0.37,0.425,0.33]);
  orb(head,dark,[0,0.44,0.257],[0.315,0.33,0.137]);
  // A restrained illuminated visor makes gaze direction legible.
  const eyes=[orb(head,glow,[-0.119,0.47,0.384],[0.071,0.014,0.009]),orb(head,glow,[0.119,0.47,0.384],[0.071,0.014,0.009])];
  for (const side of [-1,1]) {
    const ear = cyl(head,chrome,[side*0.348,0.43,0],[0.155,0.06,0.155]);
    ear.rotation.z = Math.PI/2;
    const inset = cyl(head,dark,[side*0.383,0.43,0],[0.119,0.025,0.119]);
    inset.rotation.z = Math.PI/2;
    const rim = band(head,0.09,0.011,[side*0.399,0.43,0],glow);
    rim.rotation.y = Math.PI/2;
  }

  // Lathed shells provide actual volume and a tapered chest.
  const chestProfile = [[0.25,0],[0.29,0.02],[0.35,0.16],[0.40,0.43],[0.53,0.79],[0.59,0.99],[0.55,1.07],[0.37,1.18],[0,1.20]];
  const chestGeo = new THREE.LatheGeometry(chestProfile.map(p=>new THREE.Vector2(...p)),48);
  const chestMaterial=shell.clone();
  mesh(torso,chestGeo,chestMaterial,[0,0.02,0],[1,1,0.64]);
  // Recessed lower-chest vents leave the upper shell plain.
  for (let i=0;i<3;i++) box(torso,rubber,[0,0.30-i*0.057,0.267-i*0.012],[0.18,0.014,0.016]);
  for (const side of [-1,1]) {
    const seam = mesh(torso,new THREE.CapsuleGeometry(0.008,0.31,3,8),chrome,[side*0.385,0.78,0.28]);
    seam.rotation.z = side*-0.32;
  }

  const arms = [];
  for (const side of [-1,1]) {
    const shoulder = new THREE.Group();
    shoulder.position.set(side*0.65,1.00,0);
    upper.add(shoulder);
    orb(shoulder,chrome,[0,0,0],[0.19,0.19,0.19]);
    orb(shoulder,shell,[side*0.06,-0.21,0.005],[0.205,0.37,0.215]);
    cyl(shoulder,dark,[0,-0.53,0],[0.10,0.19,0.10]);
    const elbow = new THREE.Group();
    elbow.position.set(0,-0.66,0);
    shoulder.add(elbow);
    orb(elbow,chrome,[0,0,0],[0.136,0.136,0.136]);
    const elbowHub=cyl(elbow,dark,[side*0.13,0,0],[0.10,0.025,0.10]);
    elbowHub.rotation.z = Math.PI/2;
    orb(elbow,shell,[0,-0.24,0.015],[0.18,0.30,0.185]);
    cyl(elbow,chrome,[0,-0.47,0],[0.095,0.10,0.095]);
    const wrist = new THREE.Group();
    wrist.position.y=-0.53;
    elbow.add(wrist); wrist.userData.part=side<0?"hand-left":"hand-right";
    orb(wrist,dark,[0,-0.085,0],[0.135,0.15,0.08]);
    orb(wrist,shell,[0,-0.08,0.047],[0.126,0.123,0.047]);
    for (let f=0;f<4;f++) {
      const fingerX=(f-1.5)*0.057;
      orb(wrist,chrome,[fingerX,-0.205,0.019],[0.024,0.056,0.029]);
      orb(wrist,dark,[fingerX,-0.262,0.036],[0.023,0.037,0.027]);
    }
    const thumb=orb(wrist,chrome,[-side*0.143,-0.105,0.043],[0.029,0.084,0.035]);
    thumb.rotation.z=side*-0.35;
    arms.push({side,shoulder,elbow,wrist});
  }

  // Hip and knee pivots keep the original geometry while enabling small flinches.
  const legs=[];
  cyl(root,chrome,[0,-0.11,0],[0.15,0.23,0.15]);
  orb(root,dark,[0,-0.29,0],[0.40,0.21,0.22]);
  for (const side of [-1,1]) {
    const hip=new THREE.Group(); hip.position.set(side*0.30,-0.30,0); root.add(hip);
    hip.userData.part=side<0?'leg-left':'leg-right';
    orb(hip,chrome,[side*0.01,0,0],[0.18,0.19,0.18]);
    cyl(hip,rubber,[0,-0.26,0],[0.135,0.28,0.135]);
    orb(hip,shell,[0,-0.68,0],[0.21,0.49,0.23]);
    const knee=new THREE.Group(); knee.position.y=-1.10; hip.add(knee);
    orb(knee,chrome,[0,0,0],[0.16,0.16,0.16]);
    orb(knee,shell,[0,-0.28,0],[0.18,0.33,0.19]);
    legs.push({side,hip,knee});
  }
  // Cyan display features follow the curved visor and remain hidden at rest.
  const face=new THREE.Group(); head.add(face);
  const mouth=new THREE.Group(); mouth.position.set(0,0.30,0.401); face.add(mouth); mouth.visible=false;
  const ring=mesh(mouth,new THREE.TorusGeometry(0.051,0.006,8,40),glow,[0,0,0]);
  const smile=mesh(mouth,new THREE.TubeGeometry(new THREE.QuadraticBezierCurve3(new THREE.Vector3(-0.066,0.006,0),new THREE.Vector3(0,-0.032,0),new THREE.Vector3(0.066,0.006,0)),24,0.005,6,false),glow,[0,0,0]);
  const wince=mesh(mouth,new THREE.TubeGeometry(new THREE.CatmullRomCurve3([-2,-1,0,1,2].map((v,i)=>new THREE.Vector3(v*0.027,(i%2?0.012:-0.005),0))),24,0.005,6,false),glow,[0,0,0]);
  const squints=new THREE.Group(); head.add(squints); squints.visible=false;
  for(const side of [-1,1]) for(const sign of [-1,1]) {
    const line=box(squints,glow,[side*0.116-side*0.012,0.47+sign*0.019,0.399],[0.067,0.009,0.008]);
    line.rotation.z=side*sign*0.58;
  }
  const brows=[];
  for(const side of [-1,1]) {const brow=box(face,glow,[side*0.119,0.555,0.390],[0.075,0.006,0.006]);brow.rotation.z=-side*0.20;brows.push(brow);brow.visible=false;}
  return {root,upper,torso,head,arms,legs,eyes,mouth,ring,smile,wince,squints,brows,chestMaterial};
}

