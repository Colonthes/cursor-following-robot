(()=>{var Mc=0,ko=1,Sc=2;var Os=1,bc=2,Wi=3,Wn=0,we=1,gn=2,_n=0,Xi=1,Vo=2,Go=3,Ho=4,Tc=5;var ri=100,wc=101,Ec=102,Ac=103,Rc=104,Cc=200,Ic=201,Pc=202,Lc=203,Wo=204,Xo=205,Uc=206,Nc=207,Dc=208,Fc=209,Oc=210,Bc=211,zc=212,kc=213,Vc=214,br=0,Tr=1,wr=2,Ci=3,Er=4,Ar=5,Rr=6,Cr=7,aa=0,Gc=1,Hc=2,rn=0,Yo=1,qo=2,Jo=3,Bs=4,Zo=5,Ko=6,$o=7;var jo=300,Xn=301,ai=302,oa=303,la=304,zs=306,Ir=1e3,un=1001,Pr=1002,Me=1003,Wc=1004;var ks=1005;var Te=1006,ca=1007;var Yn=1008;var ze=1009,Qo=1010,tl=1011,Yi=1012,ha=1013,an=1014,Ze=1015,on=1016,ua=1017,da=1018,qi=1020,el=35902,nl=35899,il=1021,sl=1022,Ke=1023,dn=1026,qn=1027,fa=1028,pa=1029,Jn=1030,ma=1031;var ga=1033,Vs=33776,Gs=33777,Hs=33778,Ws=33779,_a=35840,xa=35841,va=35842,ya=35843,Ma=36196,Sa=37492,ba=37496,Ta=37488,wa=37489,Xs=37490,Ea=37491,Aa=37808,Ra=37809,Ca=37810,Ia=37811,Pa=37812,La=37813,Ua=37814,Na=37815,Da=37816,Fa=37817,Oa=37818,Ba=37819,za=37820,ka=37821,Va=36492,Ga=36494,Ha=36495,Wa=36283,Xa=36284,Ys=36285,Ya=36286;var us=2300,Lr=2301,yr=2302,Po=2303,Lo=2400,Uo=2401,No=2402;var Xc=3200;var qs=0,Yc=1,Rn="",be="srgb",ds="srgb-linear",fs="linear",jt="srgb";var Mr=7680;var qc=519,Jc=512,Zc=513,Kc=514,qa=515,$c=516,jc=517,Ja=518,Qc=519,th=35044;var rl="300 es",nn=2e3,Ii=2001;function Jh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Zh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Pi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function eh(){let i=Pi("canvas");return i.style.display="block",i}var Xl={},Li=null;function al(...i){let t="THREE."+i.shift();Li?Li("log",t,...i):console.log(t,...i)}function nh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ft(...i){i=nh(i);let t="THREE."+i.shift();if(Li)Li("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ot(...i){i=nh(i);let t="THREE."+i.shift();if(Li)Li("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ti(...i){let t=i.join(" ");t in Xl||(Xl[t]=!0,Ft(...i))}function ih(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var sh={[br]:Tr,[wr]:Rr,[Er]:Cr,[Ci]:Ar,[Tr]:br,[Rr]:wr,[Cr]:Er,[Ar]:Ci},fn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yl=1234567,os=Math.PI/180,Ui=180/Math.PI;function Ji(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Ht(i,t,e){return Math.max(t,Math.min(e,i))}function ol(i,t){return(i%t+t)%t}function Kh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function $h(i,t,e){return i!==t?(e-i)/(t-i):0}function ls(i,t,e){return(1-e)*i+e*t}function jh(i,t,e,n){return ls(i,t,1-Math.exp(-e*n))}function Qh(i,t=1){return t-Math.abs(ol(i,t*2)-t)}function tu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function eu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function nu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function iu(i,t){return i+Math.random()*(t-i)}function su(i){return i*(.5-Math.random())}function ru(i){i!==void 0&&(Yl=i);let t=Yl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function au(i){return i*os}function ou(i){return i*Ui}function lu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function cu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function uu(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),p=r((t-n)/2),h=a((t-n)/2),d=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*p,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*p,o*c);break;case"ZXZ":i.set(l*p,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*x,l*d,o*c);break;case"YXY":i.set(l*d,o*u,l*x,o*c);break;case"ZYZ":i.set(l*x,l*d,o*u,o*c);break;default:Ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ai(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var xn={DEG2RAD:os,RAD2DEG:Ui,generateUUID:Ji,clamp:Ht,euclideanModulo:ol,mapLinear:Kh,inverseLerp:$h,lerp:ls,damp:jh,pingpong:Qh,smoothstep:tu,smootherstep:eu,randInt:nu,randFloat:iu,randFloatSpread:su,seededRandom:ru,degToRad:au,radToDeg:ou,isPowerOfTwo:lu,ceilPowerOfTwo:cu,floorPowerOfTwo:hu,setQuaternionFromProperEuler:uu,normalize:Ue,denormalize:Ai},fl=class fl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fl.prototype.isVector2=!0;var Tt=fl,Oe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],p=n[s+3],h=r[a+0],d=r[a+1],x=r[a+2],M=r[a+3];if(p!==M||l!==h||c!==d||u!==x){let m=l*h+c*d+u*x+p*M;m<0&&(h=-h,d=-d,x=-x,M=-M,m=-m);let f=1-o;if(m<.9995){let w=Math.acos(m),A=Math.sin(w);f=Math.sin(f*w)/A,o=Math.sin(o*w)/A,l=l*f+h*o,c=c*f+d*o,u=u*f+x*o,p=p*f+M*o}else{l=l*f+h*o,c=c*f+d*o,u=u*f+x*o,p=p*f+M*o;let w=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=w,c*=w,u*=w,p*=w}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],p=r[a],h=r[a+1],d=r[a+2],x=r[a+3];return t[e]=o*x+u*p+l*d-c*h,t[e+1]=l*x+u*h+c*p-o*d,t[e+2]=c*x+u*d+o*h-l*p,t[e+3]=u*x-o*p-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),p=o(r/2),h=l(n/2),d=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=h*u*p+c*d*x,this._y=c*d*p-h*u*x,this._z=c*u*x+h*d*p,this._w=c*u*p-h*d*x;break;case"YXZ":this._x=h*u*p+c*d*x,this._y=c*d*p-h*u*x,this._z=c*u*x-h*d*p,this._w=c*u*p+h*d*x;break;case"ZXY":this._x=h*u*p-c*d*x,this._y=c*d*p+h*u*x,this._z=c*u*x+h*d*p,this._w=c*u*p-h*d*x;break;case"ZYX":this._x=h*u*p-c*d*x,this._y=c*d*p+h*u*x,this._z=c*u*x-h*d*p,this._w=c*u*p+h*d*x;break;case"YZX":this._x=h*u*p+c*d*x,this._y=c*d*p+h*u*x,this._z=c*u*x-h*d*p,this._w=c*u*p-h*d*x;break;case"XZY":this._x=h*u*p-c*d*x,this._y=c*d*p-h*u*x,this._z=c*u*x+h*d*p,this._w=c*u*p+h*d*x;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],p=e[10],h=n+o+p;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>p){let d=2*Math.sqrt(1+n-o-p);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-n-p);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+p-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ht(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},pl=class pl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ql.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ql.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*c+a*p-o*u,this.y=n+l*u+o*c-r*p,this.z=s+l*p+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ao.copy(this).projectOnVector(t),this.sub(ao)}reflect(t){return this.sub(ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pl.prototype.isVector3=!0;var P=pl,ao=new P,ql=new Oe,ml=class ml{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],p=n[7],h=n[2],d=n[5],x=n[8],M=s[0],m=s[3],f=s[6],w=s[1],A=s[4],y=s[7],b=s[2],S=s[5],R=s[8];return r[0]=a*M+o*w+l*b,r[3]=a*m+o*A+l*S,r[6]=a*f+o*y+l*R,r[1]=c*M+u*w+p*b,r[4]=c*m+u*A+p*S,r[7]=c*f+u*y+p*R,r[2]=h*M+d*w+x*b,r[5]=h*m+d*A+x*S,r[8]=h*f+d*y+x*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=u*a-o*c,h=o*l-u*r,d=c*r-a*l,x=e*p+n*h+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return t[0]=p*M,t[1]=(s*c-u*n)*M,t[2]=(o*n-s*a)*M,t[3]=h*M,t[4]=(u*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=d*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ti("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(oo.makeScale(t,e)),this}rotate(t){return ti("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(oo.makeRotation(-t)),this}translate(t,e){return ti("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(oo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ml.prototype.isMatrix3=!0;var Bt=ml,oo=new Bt,Jl=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zl=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function du(){let i={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===jt&&(s.r=En(s.r),s.g=En(s.g),s.b=En(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===jt&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Rn?fs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ti("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ti("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ds]:{primaries:t,whitePoint:n,transfer:fs,toXYZ:Jl,fromXYZ:Zl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:t,whitePoint:n,transfer:jt,toXYZ:Jl,fromXYZ:Zl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:be}}}),i}var Jt=du();function En(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ri(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var di,Ur=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{di===void 0&&(di=Pi("canvas")),di.width=t.width,di.height=t.height;let s=di.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=di}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Pi("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=En(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(En(e[n]/255)*255):e[n]=En(e[n]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},fu=0,Ni=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Ji(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(lo(s[a].image)):r.push(lo(s[a]))}else r=lo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function lo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ur.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}var pu=0,co=new P,De=class i extends fn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=un,s=un,r=Te,a=Yn,o=Ke,l=ze,c=i.DEFAULT_ANISOTROPY,u=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Ji(),this.name="",this.source=new Ni(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(co).x}get height(){return this.source.getSize(co).y}get depth(){return this.source.getSize(co).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ir:t.x=t.x-Math.floor(t.x);break;case un:t.x=t.x<0?0:1;break;case Pr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ir:t.y=t.y-Math.floor(t.y);break;case un:t.y=t.y<0?0:1;break;case Pr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=jo;De.DEFAULT_ANISOTROPY=1;var gl=class gl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],p=l[8],h=l[1],d=l[5],x=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(p-M)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+M)<.1&&Math.abs(x+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,y=(d+1)/2,b=(f+1)/2,S=(u+h)/4,R=(p+M)/4,_=(x+m)/4;return A>y&&A>b?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=S/n,r=R/n):y>b?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=S/s,r=_/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=R/r,s=_/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-x)*(m-x)+(p-M)*(p-M)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-x)/w,this.y=(p-M)/w,this.z=(h-u)/w,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this.w=Ht(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this.w=Ht(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gl.prototype.isVector4=!0;var ce=gl,Nr=class extends fn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Te,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new De(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Te,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ni(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Be=class extends Nr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ps=class extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Me,this.minFilter=Me,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Dr=class extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Me,this.minFilter=Me,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ra=class ra{constructor(t,e,n,s,r,a,o,l,c,u,p,h,d,x,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,p,h,d,x,M,m)}set(t,e,n,s,r,a,o,l,c,u,p,h,d,x,M,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=p,f[14]=h,f[3]=d,f[7]=x,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ra().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/fi.setFromMatrixColumn(t,0).length(),r=1/fi.setFromMatrixColumn(t,1).length(),a=1/fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let h=a*u,d=a*p,x=o*u,M=o*p;e[0]=l*u,e[4]=-l*p,e[8]=c,e[1]=d+x*c,e[5]=h-M*c,e[9]=-o*l,e[2]=M-h*c,e[6]=x+d*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,d=l*p,x=c*u,M=c*p;e[0]=h+M*o,e[4]=x*o-d,e[8]=a*c,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=d*o-x,e[6]=M+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,d=l*p,x=c*u,M=c*p;e[0]=h-M*o,e[4]=-a*p,e[8]=x+d*o,e[1]=d+x*o,e[5]=a*u,e[9]=M-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,d=a*p,x=o*u,M=o*p;e[0]=l*u,e[4]=x*c-d,e[8]=h*c+M,e[1]=l*p,e[5]=M*c+h,e[9]=d*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,d=a*c,x=o*l,M=o*c;e[0]=l*u,e[4]=M-h*p,e[8]=x*p+d,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*p+x,e[10]=h-M*p}else if(t.order==="XZY"){let h=a*l,d=a*c,x=o*l,M=o*c;e[0]=l*u,e[4]=-p,e[8]=c*u,e[1]=h*p+M,e[5]=a*u,e[9]=d*p-x,e[2]=x*p-d,e[6]=o*u,e[10]=M*p+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mu,t,gu)}lookAt(t,e,n){let s=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),Ln.crossVectors(n,ke),Ln.lengthSq()===0&&(Math.abs(n.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),Ln.crossVectors(n,ke)),Ln.normalize(),tr.crossVectors(ke,Ln),s[0]=Ln.x,s[4]=tr.x,s[8]=ke.x,s[1]=Ln.y,s[5]=tr.y,s[9]=ke.y,s[2]=Ln.z,s[6]=tr.z,s[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],p=n[5],h=n[9],d=n[13],x=n[2],M=n[6],m=n[10],f=n[14],w=n[3],A=n[7],y=n[11],b=n[15],S=s[0],R=s[4],_=s[8],T=s[12],C=s[1],N=s[5],L=s[9],O=s[13],I=s[2],k=s[6],W=s[10],Y=s[14],et=s[3],q=s[7],Q=s[11],tt=s[15];return r[0]=a*S+o*C+l*I+c*et,r[4]=a*R+o*N+l*k+c*q,r[8]=a*_+o*L+l*W+c*Q,r[12]=a*T+o*O+l*Y+c*tt,r[1]=u*S+p*C+h*I+d*et,r[5]=u*R+p*N+h*k+d*q,r[9]=u*_+p*L+h*W+d*Q,r[13]=u*T+p*O+h*Y+d*tt,r[2]=x*S+M*C+m*I+f*et,r[6]=x*R+M*N+m*k+f*q,r[10]=x*_+M*L+m*W+f*Q,r[14]=x*T+M*O+m*Y+f*tt,r[3]=w*S+A*C+y*I+b*et,r[7]=w*R+A*N+y*k+b*q,r[11]=w*_+A*L+y*W+b*Q,r[15]=w*T+A*O+y*Y+b*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],p=t[6],h=t[10],d=t[14],x=t[3],M=t[7],m=t[11],f=t[15],w=l*d-c*h,A=o*d-c*p,y=o*h-l*p,b=a*d-c*u,S=a*h-l*u,R=a*p-o*u;return e*(M*w-m*A+f*y)-n*(x*w-m*b+f*S)+s*(x*A-M*b+f*R)-r*(x*y-M*S+m*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=t[9],h=t[10],d=t[11],x=t[12],M=t[13],m=t[14],f=t[15],w=e*o-n*a,A=e*l-s*a,y=e*c-r*a,b=n*l-s*o,S=n*c-r*o,R=s*c-r*l,_=u*M-p*x,T=u*m-h*x,C=u*f-d*x,N=p*m-h*M,L=p*f-d*M,O=h*f-d*m,I=w*O-A*L+y*N+b*C-S*T+R*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/I;return t[0]=(o*O-l*L+c*N)*k,t[1]=(s*L-n*O-r*N)*k,t[2]=(M*R-m*S+f*b)*k,t[3]=(h*S-p*R-d*b)*k,t[4]=(l*C-a*O-c*T)*k,t[5]=(e*O-s*C+r*T)*k,t[6]=(m*y-x*R-f*A)*k,t[7]=(u*R-h*y+d*A)*k,t[8]=(a*L-o*C+c*_)*k,t[9]=(n*C-e*L-r*_)*k,t[10]=(x*S-M*y+f*w)*k,t[11]=(p*y-u*S-d*w)*k,t[12]=(o*T-a*N-l*_)*k,t[13]=(e*N-n*T+s*_)*k,t[14]=(M*A-x*b-m*w)*k,t[15]=(u*b-p*A+h*w)*k,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,p=o+o,h=r*c,d=r*u,x=r*p,M=a*u,m=a*p,f=o*p,w=l*c,A=l*u,y=l*p,b=n.x,S=n.y,R=n.z;return s[0]=(1-(M+f))*b,s[1]=(d+y)*b,s[2]=(x-A)*b,s[3]=0,s[4]=(d-y)*S,s[5]=(1-(h+f))*S,s[6]=(m+w)*S,s[7]=0,s[8]=(x+A)*R,s[9]=(m-w)*R,s[10]=(1-(h+M))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=fi.set(s[0],s[1],s[2]).length(),o=fi.set(s[4],s[5],s[6]).length(),l=fi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),je.copy(this);let c=1/a,u=1/o,p=1/l;return je.elements[0]*=c,je.elements[1]*=c,je.elements[2]*=c,je.elements[4]*=u,je.elements[5]*=u,je.elements[6]*=u,je.elements[8]*=p,je.elements[9]*=p,je.elements[10]*=p,e.setFromRotationMatrix(je),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=nn,l=!1){let c=this.elements,u=2*r/(e-t),p=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s),x,M;if(l)x=r/(a-r),M=a*r/(a-r);else if(o===nn)x=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ii)x=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=nn,l=!1){let c=this.elements,u=2/(e-t),p=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s),x,M;if(l)x=1/(a-r),M=a/(a-r);else if(o===nn)x=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ii)x=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ra.prototype.isMatrix4=!0;var ie=ra,fi=new P,je=new ie,mu=new P(0,0,0),gu=new P(1,1,1),Ln=new P,tr=new P,ke=new P,Kl=new ie,$l=new Oe,qe=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],p=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ht(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $l.setFromEuler(this),this.setFromQuaternion($l,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qe.DEFAULT_ORDER="XYZ";var Di=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},_u=0,jl=new P,pi=new Oe,Mn=new ie,er=new P,es=new P,xu=new P,vu=new Oe,Ql=new P(1,0,0),tc=new P(0,1,0),ec=new P(0,0,1),nc={type:"added"},yu={type:"removed"},mi={type:"childadded",child:null},ho={type:"childremoved",child:null},Se=class i extends fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new qe,n=new Oe,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Bt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Di,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.multiply(pi),this}rotateOnWorldAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.premultiply(pi),this}rotateX(t){return this.rotateOnAxis(Ql,t)}rotateY(t){return this.rotateOnAxis(tc,t)}rotateZ(t){return this.rotateOnAxis(ec,t)}translateOnAxis(t,e){return jl.copy(t).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ql,t)}translateY(t){return this.translateOnAxis(tc,t)}translateZ(t){return this.translateOnAxis(ec,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?er.copy(t):er.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(es,er,this.up):Mn.lookAt(er,es,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),pi.setFromRotationMatrix(Mn),this.quaternion.premultiply(pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ot("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nc),mi.child=t,this.dispatchEvent(mi),mi.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yu),ho.child=t,this.dispatchEvent(ho),ho.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nc),mi.child=t,this.dispatchEvent(mi),mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,t,xu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,vu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),p=a(t.shapes),h=a(t.skeletons),d=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Se.DEFAULT_UP=new P(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ge=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mu={type:"move"},Fi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,n),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=u.position.distanceTo(p.position),d=.02,x=.005;c.inputState.pinching&&h>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},nr={h:0,s:0,l:0};function uo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=ol(t,1),e=Ht(e,0,1),n=Ht(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=uo(a,r,t+1/3),this.g=uo(a,r,t),this.b=uo(a,r,t-1/3)}return Jt.colorSpaceToWorking(this,s),this}setStyle(t,e=be){function n(r){r!==void 0&&parseFloat(r)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){let n=rh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}copyLinearToSRGB(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return Jt.workingToColorSpace(Ce.copy(this),t),Math.round(Ht(Ce.r*255,0,255))*65536+Math.round(Ht(Ce.g*255,0,255))*256+Math.round(Ht(Ce.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(Ce.copy(this),e);let n=Ce.r,s=Ce.g,r=Ce.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=u<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=be){Jt.workingToColorSpace(Ce.copy(this),t);let e=Ce.r,n=Ce.g,s=Ce.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Un),this.setHSL(Un.h+t,Un.s+e,Un.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Un),t.getHSL(nr);let n=ls(Un.h,nr.h,e),s=ls(Un.s,nr.s,e),r=ls(Un.l,nr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ce=new Vt;Vt.NAMES=rh;var ei=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qe,this.environmentIntensity=1,this.environmentRotation=new qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Qe=new P,Sn=new P,fo=new P,bn=new P,gi=new P,_i=new P,ic=new P,po=new P,mo=new P,go=new P,_o=new ce,xo=new ce,vo=new ce,On=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qe.subVectors(t,e),s.cross(Qe);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qe.subVectors(s,e),Sn.subVectors(n,e),fo.subVectors(t,e);let a=Qe.dot(Qe),o=Qe.dot(Sn),l=Qe.dot(fo),c=Sn.dot(Sn),u=Sn.dot(fo),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let h=1/p,d=(c*l-o*u)*h,x=(a*u-o*l)*h;return r.set(1-d-x,x,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bn.x),l.addScaledVector(a,bn.y),l.addScaledVector(o,bn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return _o.setScalar(0),xo.setScalar(0),vo.setScalar(0),_o.fromBufferAttribute(t,e),xo.fromBufferAttribute(t,n),vo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(_o,r.x),a.addScaledVector(xo,r.y),a.addScaledVector(vo,r.z),a}static isFrontFacing(t,e,n,s){return Qe.subVectors(n,e),Sn.subVectors(t,e),Qe.cross(Sn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),Qe.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;gi.subVectors(s,n),_i.subVectors(r,n),po.subVectors(t,n);let l=gi.dot(po),c=_i.dot(po);if(l<=0&&c<=0)return e.copy(n);mo.subVectors(t,s);let u=gi.dot(mo),p=_i.dot(mo);if(u>=0&&p<=u)return e.copy(s);let h=l*p-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(gi,a);go.subVectors(t,r);let d=gi.dot(go),x=_i.dot(go);if(x>=0&&d<=x)return e.copy(r);let M=d*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(_i,o);let m=u*x-d*p;if(m<=0&&p-u>=0&&d-x>=0)return ic.subVectors(r,s),o=(p-u)/(p-u+(d-x)),e.copy(s).addScaledVector(ic,o);let f=1/(m+M+h);return a=M*f,o=h*f,e.copy(n).addScaledVector(gi,a).addScaledVector(_i,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,tn):tn.fromBufferAttribute(r,a),tn.applyMatrix4(t.matrixWorld),this.expandByPoint(tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ir.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ir.copy(n.boundingBox)),ir.applyMatrix4(t.matrixWorld),this.union(ir)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ns),sr.subVectors(this.max,ns),xi.subVectors(t.a,ns),vi.subVectors(t.b,ns),yi.subVectors(t.c,ns),Nn.subVectors(vi,xi),Dn.subVectors(yi,vi),Kn.subVectors(xi,yi);let e=[0,-Nn.z,Nn.y,0,-Dn.z,Dn.y,0,-Kn.z,Kn.y,Nn.z,0,-Nn.x,Dn.z,0,-Dn.x,Kn.z,0,-Kn.x,-Nn.y,Nn.x,0,-Dn.y,Dn.x,0,-Kn.y,Kn.x,0];return!yo(e,xi,vi,yi,sr)||(e=[1,0,0,0,1,0,0,0,1],!yo(e,xi,vi,yi,sr))?!1:(rr.crossVectors(Nn,Dn),e=[rr.x,rr.y,rr.z],yo(e,xi,vi,yi,sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Tn=[new P,new P,new P,new P,new P,new P,new P,new P],tn=new P,ir=new pn,xi=new P,vi=new P,yi=new P,Nn=new P,Dn=new P,Kn=new P,ns=new P,sr=new P,rr=new P,$n=new P;function yo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){$n.fromArray(i,r);let o=s.x*Math.abs($n.x)+s.y*Math.abs($n.y)+s.z*Math.abs($n.z),l=t.dot($n),c=e.dot($n),u=n.dot($n);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var me=new P,ar=new Tt,Su=0,Ge=class extends fn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Su++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=th,this.updateRanges=[],this.gpuType=Ze,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ar.fromBufferAttribute(this,e),ar.applyMatrix3(t),this.setXY(e,ar.x,ar.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ms=class extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var gs=class extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Qt=class extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}},bu=new pn,is=new P,Mo=new P,Bn=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):bu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;is.subVectors(t,this.center);let e=is.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(is,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(is.copy(t.center).add(Mo)),this.expandByPoint(is.copy(t.center).sub(Mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Tu=0,Ye=new ie,So=new Se,Mi=new P,Ve=new pn,ss=new pn,ye=new P,Ie=class i extends fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jh(t)?gs:ms)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return So.lookAt(t),So.updateMatrix(),this.applyMatrix4(So.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ss.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(Ve.min,ss.min),Ve.expandByPoint(ye),ye.addVectors(Ve.max,ss.max),Ve.expandByPoint(ye)):(Ve.expandByPoint(ss.min),Ve.expandByPoint(ss.max))}Ve.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ye));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ye.fromBufferAttribute(o,c),l&&(Mi.fromBufferAttribute(t,c),ye.add(Mi)),s=Math.max(s,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ge(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new P,l[_]=new P;let c=new P,u=new P,p=new P,h=new Tt,d=new Tt,x=new Tt,M=new P,m=new P;function f(_,T,C){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,T),p.fromBufferAttribute(n,C),h.fromBufferAttribute(r,_),d.fromBufferAttribute(r,T),x.fromBufferAttribute(r,C),u.sub(c),p.sub(c),d.sub(h),x.sub(h);let N=1/(d.x*x.y-x.x*d.y);isFinite(N)&&(M.copy(u).multiplyScalar(x.y).addScaledVector(p,-d.y).multiplyScalar(N),m.copy(p).multiplyScalar(d.x).addScaledVector(u,-x.x).multiplyScalar(N),o[_].add(M),o[T].add(M),o[C].add(M),l[_].add(m),l[T].add(m),l[C].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let _=0,T=w.length;_<T;++_){let C=w[_],N=C.start,L=C.count;for(let O=N,I=N+L;O<I;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let A=new P,y=new P,b=new P,S=new P;function R(_){b.fromBufferAttribute(s,_),S.copy(b);let T=o[_];A.copy(T),A.sub(b.multiplyScalar(b.dot(T))).normalize(),y.crossVectors(S,T);let N=y.dot(l[_])<0?-1:1;a.setXYZW(_,A.x,A.y,A.z,N)}for(let _=0,T=w.length;_<T;++_){let C=w[_],N=C.start,L=C.count;for(let O=N,I=N+L;O<I;O+=3)R(t.getX(O+0)),R(t.getX(O+1)),R(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,p=new P;if(t)for(let h=0,d=t.count;h<d;h+=3){let x=t.getX(h+0),M=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,p=o.normalized,h=new c.constructor(l.length*u),d=0,x=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*u;for(let f=0;f<u;f++)h[x++]=c[d++]}return new Ge(h,u,p)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,p=c.length;u<p;u++){let h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let p=0,h=c.length;p<h;p++){let d=c[p];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],p=r[c];for(let h=0,d=p.length;h<d;h++)u.push(p[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var bo=new P,wu=new P,Eu=new Bt,en=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=bo.subVectors(n,e).cross(wu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(bo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Eu.getNormalMatrix(t),s=this.coplanarPoint(bo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Au=0,An=class extends fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=Xi,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=Xo,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Vt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new en().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Tt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Tt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var wn=new P,To=new P,or=new P,lr=new P,_s=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){To.copy(t).add(e).multiplyScalar(.5),or.copy(e).sub(t).normalize(),lr.copy(this.origin).sub(To);let r=t.distanceTo(e)*.5,a=-this.direction.dot(or),o=lr.dot(this.direction),l=-lr.dot(or),c=lr.lengthSq(),u=Math.abs(1-a*a),p,h,d,x;if(u>0)if(p=a*l-o,h=a*o-l,x=r*u,p>=0)if(h>=-x)if(h<=x){let M=1/u;p*=M,h*=M,d=p*(p+a*h+2*o)+h*(a*p+h+2*l)+c}else h=r,p=Math.max(0,-(a*h+o)),d=-p*p+h*(h+2*l)+c;else h=-r,p=Math.max(0,-(a*h+o)),d=-p*p+h*(h+2*l)+c;else h<=-x?(p=Math.max(0,-(-a*r+o)),h=p>0?-r:Math.min(Math.max(-r,-l),r),d=-p*p+h*(h+2*l)+c):h<=x?(p=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(p=Math.max(0,-(a*r+o)),h=p>0?r:Math.min(Math.max(-r,-l),r),d=-p*p+h*(h+2*l)+c);else h=a>0?-r:r,p=Math.max(0,-(a*h+o)),d=-p*p+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(To).addScaledVector(or,h),d}intersectSphere(t,e){if(t.radius<0)return null;wn.subVectors(t.center,this.origin);let n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-h.z)*p,l=(t.max.z-h.z)*p):(o=(t.max.z-h.z)*p,l=(t.min.z-h.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,p=t.x-a.x,h=t.y-a.y,d=t.z-a.z,x=e.x-a.x,M=e.y-a.y,m=e.z-a.z,f=n.x-a.x,w=n.y-a.y,A=n.z-a.z,y=Math.abs(l),b=Math.abs(c),S=Math.abs(u),R,_,T,C,N,L,O,I,k,W,Y,et;if(y>=b&&y>=S?(T=l,L=p,k=x,et=f,l>=0?(R=c,_=u,C=h,N=d,O=M,I=m,W=w,Y=A):(R=u,_=c,C=d,N=h,O=m,I=M,W=A,Y=w)):b>=S?(T=c,L=h,k=M,et=w,c>=0?(R=u,_=l,C=d,N=p,O=m,I=x,W=A,Y=f):(R=l,_=u,C=p,N=d,O=x,I=m,W=f,Y=A)):(T=u,L=d,k=m,et=A,u>=0?(R=l,_=c,C=p,N=h,O=x,I=M,W=f,Y=w):(R=c,_=l,C=h,N=p,O=M,I=x,W=w,Y=f)),T===0)return null;let q=R/T,Q=_/T,tt=1/T,It=C-q*L,St=N-Q*L,qt=O-q*k,it=I-Q*k,at=W-q*et,z=Y-Q*et,J=at*it-z*qt,st=It*z-St*at,Ut=qt*St-it*It;if(s){if(J<0||st<0||Ut<0)return null}else if((J<0||st<0||Ut<0)&&(J>0||st>0||Ut>0))return null;let ft=J+st+Ut;if(ft===0)return null;let zt=tt*(J*L+st*k+Ut*et);return(ft>0?zt<0:zt>0)?null:this.at(zt/ft,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ni=class extends An{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},sc=new ie,jn=new _s,cr=new Bn,rc=new P,hr=new P,ur=new P,dr=new P,wo=new P,fr=new P,ac=new P,pr=new P,he=class extends Se{constructor(t=new Ie,e=new ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){fr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],p=r[l];u!==0&&(wo.fromBufferAttribute(p,t),a?fr.addScaledVector(wo,u):fr.addScaledVector(wo.sub(e),u))}e.add(fr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(r),jn.copy(t.ray).recast(t.near),!(cr.containsPoint(jn.origin)===!1&&(jn.intersectSphere(cr,rc)===null||jn.origin.distanceToSquared(rc)>(t.far-t.near)**2))&&(sc.copy(r).invert(),jn.copy(t.ray).applyMatrix4(sc),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,jn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=h.length;x<M;x++){let m=h[x],f=a[m.materialIndex],w=Math.max(m.start,d.start),A=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=w,b=A;y<b;y+=3){let S=o.getX(y),R=o.getX(y+1),_=o.getX(y+2);s=mr(this,f,t,n,c,u,p,S,R,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let m=x,f=M;m<f;m+=3){let w=o.getX(m),A=o.getX(m+1),y=o.getX(m+2);s=mr(this,a,t,n,c,u,p,w,A,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=h.length;x<M;x++){let m=h[x],f=a[m.materialIndex],w=Math.max(m.start,d.start),A=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=w,b=A;y<b;y+=3){let S=y,R=y+1,_=y+2;s=mr(this,f,t,n,c,u,p,S,R,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let m=x,f=M;m<f;m+=3){let w=m,A=m+1,y=m+2;s=mr(this,a,t,n,c,u,p,w,A,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Ru(i,t,e,n,s,r,a,o){let l;if(t.side===we?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Wn,o),l===null)return null;pr.copy(o),pr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(pr);return c<e.near||c>e.far?null:{distance:c,point:pr.clone(),object:i}}function mr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,hr),i.getVertexPosition(l,ur),i.getVertexPosition(c,dr);let u=Ru(i,t,e,n,hr,ur,dr,ac);if(u){let p=new P;On.getBarycoord(ac,hr,ur,dr,p),s&&(u.uv=On.getInterpolatedAttribute(s,o,l,c,p,new Tt)),r&&(u.uv1=On.getInterpolatedAttribute(r,o,l,c,p,new Tt)),a&&(u.normal=On.getInterpolatedAttribute(a,o,l,c,p,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new P,materialIndex:0};On.getNormal(hr,ur,dr,h.normal),u.face=h,u.barycoord=p}return u}var xs=class extends De{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Me,u=Me,p,h){super(null,a,o,l,c,u,s,r,p,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vs=class extends Ge{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Si=new ie,oc=new ie,gr=[],lc=new pn,Cu=new ie,rs=new he,as=new Bn,ys=class extends he{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cu)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new pn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Si),lc.copy(t.boundingBox).applyMatrix4(Si),this.boundingBox.union(lc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Si),as.copy(t.boundingSphere).applyMatrix4(Si),this.boundingSphere.union(as)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(rs.geometry=this.geometry,rs.material=this.material,rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),as.copy(this.boundingSphere),as.applyMatrix4(n),t.ray.intersectsSphere(as)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Si),oc.multiplyMatrices(n,Si),rs.matrixWorld=oc,rs.raycast(t,gr);for(let a=0,o=gr.length;a<o;a++){let l=gr[a];l.instanceId=r,l.object=this,e.push(l)}gr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new xs(new Float32Array(s*this.count),s,this.count,fa,Ze));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Qn=new Bn,Iu=new Tt(.5,.5),_r=new P,Oi=class{constructor(t=new en,e=new en,n=new en,s=new en,r=new en,a=new en){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=nn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],p=r[5],h=r[6],d=r[7],x=r[8],M=r[9],m=r[10],f=r[11],w=r[12],A=r[13],y=r[14],b=r[15];if(s[0].setComponents(c-a,d-u,f-x,b-w).normalize(),s[1].setComponents(c+a,d+u,f+x,b+w).normalize(),s[2].setComponents(c+o,d+p,f+M,b+A).normalize(),s[3].setComponents(c-o,d-p,f-M,b-A).normalize(),n)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,d-h,f-m,b-y).normalize();else if(s[4].setComponents(c-l,d-h,f-m,b-y).normalize(),e===nn)s[5].setComponents(c+l,d+h,f+m,b+y).normalize();else if(e===Ii)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(t){Qn.center.set(0,0,0);let e=Iu.distanceTo(t.center);return Qn.radius=.7071067811865476+e,Qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(_r.x=s.normal.x>0?t.max.x:t.min.x,_r.y=s.normal.y>0?t.max.y:t.min.y,_r.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(_r)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ms=class extends De{constructor(t=[],e=Xn,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var zn=class extends De{constructor(t,e,n=an,s,r,a,o=Me,l=Me,c,u=dn,p=1){if(u!==dn&&u!==qn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:p};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ni(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Fr=class extends zn{constructor(t,e=an,n=Xn,s,r,a=Me,o=Me,l,c=dn){let u={width:t,height:t,depth:1},p=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ss=class extends De{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},mn=class i extends Ie{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],p=[],h=0,d=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(p,2));function x(M,m,f,w,A,y,b,S,R,_,T){let C=y/R,N=b/_,L=y/2,O=b/2,I=S/2,k=R+1,W=_+1,Y=0,et=0,q=new P;for(let Q=0;Q<W;Q++){let tt=Q*N-O;for(let It=0;It<k;It++){let St=It*C-L;q[M]=St*w,q[m]=tt*A,q[f]=I,c.push(q.x,q.y,q.z),q[M]=0,q[m]=0,q[f]=S>0?1:-1,u.push(q.x,q.y,q.z),p.push(It/R),p.push(1-Q/_),Y+=1}}for(let Q=0;Q<_;Q++)for(let tt=0;tt<R;tt++){let It=h+tt+k*Q,St=h+tt+k*(Q+1),qt=h+(tt+1)+k*(Q+1),it=h+(tt+1)+k*Q;l.push(It,St,it),l.push(St,qt,it),et+=6}o.addGroup(d,et,T),d+=et,h+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},bs=class i extends Ie{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=e/2,p=Math.PI/2*t,h=e,d=2*p+h,x=n*2+r,M=s+1,m=new P,f=new P;for(let w=0;w<=x;w++){let A=0,y=0,b=0,S=0;if(w<=n){let T=w/n,C=T*Math.PI/2;y=-u-t*Math.cos(C),b=t*Math.sin(C),S=-t*Math.cos(C),A=T*p}else if(w<=n+r){let T=(w-n)/r;y=-u+T*e,b=t,S=0,A=p+T*h}else{let T=(w-n-r)/n,C=T*Math.PI/2;y=u+t*Math.sin(C),b=t*Math.cos(C),S=t*Math.sin(C),A=p+h+T*p}let R=Math.max(0,Math.min(1,A/d)),_=0;w===0?_=.5/s:w===x&&(_=-.5/s);for(let T=0;T<=s;T++){let C=T/s,N=C*Math.PI*2,L=Math.sin(N),O=Math.cos(N);f.x=-b*O,f.y=y,f.z=b*L,o.push(f.x,f.y,f.z),m.set(-b*O,S,b*L),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+_,R)}if(w>0){let T=(w-1)*M;for(let C=0;C<s;C++){let N=T+C,L=T+C+1,O=w*M+C,I=w*M+C+1;a.push(N,L,O),a.push(L,I,O)}}}this.setIndex(a),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var Ts=class i extends Ie{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],p=[],h=[],d=[],x=0,M=[],m=n/2,f=0;w(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new Qt(p,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2));function w(){let y=new P,b=new P,S=0,R=(e-t)/n;for(let _=0;_<=r;_++){let T=[],C=_/r,N=C*(e-t)+t;for(let L=0;L<=s;L++){let O=L/s,I=O*l+o,k=Math.sin(I),W=Math.cos(I);b.x=N*k,b.y=-C*n+m,b.z=N*W,p.push(b.x,b.y,b.z),y.set(k,R,W).normalize(),h.push(y.x,y.y,y.z),d.push(O,1-C),T.push(x++)}M.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){let C=M[T][_],N=M[T+1][_],L=M[T+1][_+1],O=M[T][_+1];(t>0||T!==0)&&(u.push(C,N,O),S+=3),(e>0||T!==r-1)&&(u.push(N,L,O),S+=3)}c.addGroup(f,S,0),f+=S}function A(y){let b=x,S=new Tt,R=new P,_=0,T=y===!0?t:e,C=y===!0?1:-1;for(let L=1;L<=s;L++)p.push(0,m*C,0),h.push(0,C,0),d.push(.5,.5),x++;let N=x;for(let L=0;L<=s;L++){let I=L/s*l+o,k=Math.cos(I),W=Math.sin(I);R.x=T*W,R.y=m*C,R.z=T*k,p.push(R.x,R.y,R.z),h.push(0,C,0),S.x=k*.5+.5,S.y=W*.5*C+.5,d.push(S.x,S.y),x++}for(let L=0;L<s;L++){let O=b+L,I=N+L;y===!0?u.push(I,I+1,O):u.push(I+1,I,O),_+=3}c.addGroup(f,_,y===!0?1:2),f+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Je=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ft("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,d=(a-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Tt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new P,s=[],r=[],a=[],o=new P,l=new ie;for(let d=0;d<=t;d++){let x=d/t;s[d]=this.getTangentAt(x,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),p=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Ht(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,x))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ht(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],d*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ws=class extends Je{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Tt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*p+this.aX,c=h*p+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Or=class extends ws{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ll(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,p){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+p)+(l-o)/p;h*=u,d*=u,s(a,o,h,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var cc=new P,hc=new P,Eo=new ll,Ao=new ll,Ro=new ll,Bi=class extends Je{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(hc.subVectors(s[0],s[1]).add(s[0]),c=hc);let p=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(cc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=cc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(p),d),M=Math.pow(p.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);M<1e-4&&(M=1),x<1e-4&&(x=M),m<1e-4&&(m=M),Eo.initNonuniformCatmullRom(c.x,p.x,h.x,u.x,x,M,m),Ao.initNonuniformCatmullRom(c.y,p.y,h.y,u.y,x,M,m),Ro.initNonuniformCatmullRom(c.z,p.z,h.z,u.z,x,M,m)}else this.curveType==="catmullrom"&&(Eo.initCatmullRom(c.x,p.x,h.x,u.x,this.tension),Ao.initCatmullRom(c.y,p.y,h.y,u.y,this.tension),Ro.initCatmullRom(c.z,p.z,h.z,u.z,this.tension));return n.set(Eo.calc(l),Ao.calc(l),Ro.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function uc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Pu(i,t){let e=1-i;return e*e*t}function Lu(i,t){return 2*(1-i)*i*t}function Uu(i,t){return i*i*t}function cs(i,t,e,n){return Pu(i,t)+Lu(i,e)+Uu(i,n)}function Nu(i,t){let e=1-i;return e*e*e*t}function Du(i,t){let e=1-i;return 3*e*e*i*t}function Fu(i,t){return 3*(1-i)*i*i*t}function Ou(i,t){return i*i*i*t}function hs(i,t,e,n,s){return Nu(i,t)+Du(i,e)+Fu(i,n)+Ou(i,s)}var Br=class extends Je{constructor(t=new Tt,e=new Tt,n=new Tt,s=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Tt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hs(t,s.x,r.x,a.x,o.x),hs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zr=class extends Je{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hs(t,s.x,r.x,a.x,o.x),hs(t,s.y,r.y,a.y,o.y),hs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},kr=class extends Je{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vr=class extends Je{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gr=class extends Je{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(cs(t,s.x,r.x,a.x),cs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ii=class extends Je{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(cs(t,s.x,r.x,a.x),cs(t,s.y,r.y,a.y),cs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hr=class extends Je{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(uc(o,l.x,c.x,u.x,p.x),uc(o,l.y,c.y,u.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Tt().fromArray(s))}return this}},Bu=Object.freeze({__proto__:null,ArcCurve:Or,CatmullRomCurve3:Bi,CubicBezierCurve:Br,CubicBezierCurve3:zr,EllipseCurve:ws,LineCurve:kr,LineCurve3:Vr,QuadraticBezierCurve:Gr,QuadraticBezierCurve3:ii,SplineCurve:Hr});var Es=class i extends Ie{constructor(t=[new Tt(0,-.5),new Tt(.5,0),new Tt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ht(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/e,p=new P,h=new Tt,d=new P,x=new P,M=new P,m=0,f=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,f=t[w+1].y-t[w].y,d.x=f*1,d.y=-m,d.z=f*0,M.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:m=t[w+1].x-t[w].x,f=t[w+1].y-t[w].y,d.x=f*1,d.y=-m,d.z=f*0,x.copy(d),d.x+=M.x,d.y+=M.y,d.z+=M.z,d.normalize(),l.push(d.x,d.y,d.z),M.copy(x)}for(let w=0;w<=e;w++){let A=n+w*u*s,y=Math.sin(A),b=Math.cos(A);for(let S=0;S<=t.length-1;S++){p.x=t[S].x*y,p.y=t[S].y,p.z=t[S].x*b,a.push(p.x,p.y,p.z),h.x=w/e,h.y=S/(t.length-1),o.push(h.x,h.y);let R=l[3*S+0]*y,_=l[3*S+1],T=l[3*S+0]*b;c.push(R,_,T)}}for(let w=0;w<e;w++)for(let A=0;A<t.length-1;A++){let y=A+w*t.length,b=y,S=y+t.length,R=y+t.length+1,_=y+1;r.push(b,S,_),r.push(R,_,S)}this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("uv",new Qt(o,2)),this.setAttribute("normal",new Qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var si=class i extends Ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,p=t/o,h=e/l,d=[],x=[],M=[],m=[];for(let f=0;f<u;f++){let w=f*h-a;for(let A=0;A<c;A++){let y=A*p-r;x.push(y,-w,0),M.push(0,0,1),m.push(A/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<o;w++){let A=w+c*f,y=w+c*(f+1),b=w+1+c*(f+1),S=w+1+c*f;d.push(A,y,S),d.push(y,b,S)}this.setIndex(d),this.setAttribute("position",new Qt(x,3)),this.setAttribute("normal",new Qt(M,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var As=class i extends Ie{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],p=new P,h=new P,d=[],x=[],M=[],m=[];for(let f=0;f<=n;f++){let w=[],A=f/n,y=a+A*o,b=t*Math.cos(y),S=Math.sqrt(t*t-b*b),R=0;f===0&&a===0?R=.5/e:f===n&&l===Math.PI&&(R=-.5/e);for(let _=0;_<=e;_++){let T=_/e,C=s+T*r;p.x=-S*Math.cos(C),p.y=b,p.z=S*Math.sin(C),x.push(p.x,p.y,p.z),h.copy(p).normalize(),M.push(h.x,h.y,h.z),m.push(T+R,1-A),w.push(c++)}u.push(w)}for(let f=0;f<n;f++)for(let w=0;w<e;w++){let A=u[f][w+1],y=u[f][w],b=u[f+1][w],S=u[f+1][w+1];(f!==0||a>0)&&d.push(A,y,S),(f!==n-1||l<Math.PI)&&d.push(y,b,S)}this.setIndex(d),this.setAttribute("position",new Qt(x,3)),this.setAttribute("normal",new Qt(M,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var zi=class i extends Ie{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],p=[],h=new P,d=new P,x=new P;for(let M=0;M<=n;M++){let m=a+M/n*o;for(let f=0;f<=s;f++){let w=f/s*r;d.x=(t+e*Math.cos(m))*Math.cos(w),d.y=(t+e*Math.cos(m))*Math.sin(w),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),h.x=t*Math.cos(w),h.y=t*Math.sin(w),x.subVectors(d,h).normalize(),u.push(x.x,x.y,x.z),p.push(f/s),p.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=s;m++){let f=(s+1)*M+m-1,w=(s+1)*(M-1)+m-1,A=(s+1)*(M-1)+m,y=(s+1)*M+m;l.push(f,w,y),l.push(w,A,y)}this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var ki=class i extends Ie{constructor(t=new ii(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new Tt,u=new P,p=[],h=[],d=[],x=[];M(),this.setIndex(x),this.setAttribute("position",new Qt(p,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2));function M(){for(let A=0;A<e;A++)m(A);m(r===!1?e:0),w(),f()}function m(A){u=t.getPointAt(A/e,u);let y=a.normals[A],b=a.binormals[A];for(let S=0;S<=s;S++){let R=S/s*Math.PI*2,_=Math.sin(R),T=-Math.cos(R);l.x=T*y.x+_*b.x,l.y=T*y.y+_*b.y,l.z=T*y.z+_*b.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,p.push(o.x,o.y,o.z)}}function f(){for(let A=1;A<=e;A++)for(let y=1;y<=s;y++){let b=(s+1)*(A-1)+(y-1),S=(s+1)*A+(y-1),R=(s+1)*A+y,_=(s+1)*(A-1)+y;x.push(b,S,_),x.push(S,R,_)}}function w(){for(let A=0;A<=e;A++)for(let y=0;y<=s;y++)c.x=A/e,c.y=y/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Bu[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function oi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(dc(s))s.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(dc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Pe(i){let t={};for(let e=0;e<i.length;e++){let n=oi(i[e]);for(let s in n)t[s]=n[s]}return t}function dc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function zu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function cl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var ah={clone:oi,merge:Pe},ku=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,He=class extends An{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ku,this.fragmentShader=Vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=oi(t.uniforms),this.uniformsGroups=zu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Vt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ce().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ie().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Wr=class extends He{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},sn=class extends An{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qs,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Vi=class extends sn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Rs=class extends An{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qs,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=aa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Xr=class extends An{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Yr=class extends An{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function bi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Co(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var kn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qr=class extends kn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lo,endingEnd:Lo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Uo:r=t,o=2*e-n;break;case No:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uo:a=t,l=2*n-e;break;case No:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,p=this._offsetNext,h=this._weightPrev,d=this._weightNext,x=(n-e)/(s-e),M=x*x,m=M*x,f=-h*m+2*h*M-h*x,w=(1+h)*m+(-1.5-2*h)*M+(-.5+h)*x+1,A=(-1-d)*m+(1.5+d)*M+.5*x,y=d*m-d*M;for(let b=0;b!==o;++b)r[b]=f*a[u+b]+w*a[c+b]+A*a[l+b]+y*a[p+b];return r}},Jr=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),p=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*p+a[l+h]*u;return r}},Zr=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Kr=class extends kn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,p=this.outTangents;if(!u||!p){let x=(n-e)/(s-e),M=1-x;for(let m=0;m!==o;++m)r[m]=a[c+m]*M+a[l+m]*x;return r}let h=o*2,d=t-1;for(let x=0;x!==o;++x){let M=a[c+x],m=a[l+x],f=d*h+x*2,w=p[f],A=p[f+1],y=t*h+x*2,b=u[y],S=u[y+1],R=Hu(n,e,w,b,s);r[x]=oh(R,M,A,S,m)}return r}};function oh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Gu(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Hu(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=oh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Gu(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var We=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=bi(e,this.TimeBufferType),this.values=bi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:bi(t.times,Array),values:bi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Co(t.settings)&&(n.settings={inTangents:bi(t.settings.inTangents,Array),outTangents:bi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Zr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Jr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Kr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case us:e=this.InterpolantFactoryMethodDiscrete;break;case Lr:e=this.InterpolantFactoryMethodLinear;break;case yr:e=this.InterpolantFactoryMethodSmooth;break;case Po:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ft("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return us;case this.InterpolantFactoryMethodLinear:return Lr;case this.InterpolantFactoryMethodSmooth:return yr;case this.InterpolantFactoryMethodBezier:return Po}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Co(this.settings)&&(fc(this.settings.inTangents,t),fc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ot("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ot("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ot("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ot("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Zh(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ot("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===yr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*n,h=p-n,d=p+n;for(let x=0;x!==n;++x){let M=e[p+x];if(M!==e[h+x]||M!==e[d+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*n,h=a*n;for(let d=0;d!==n;++d)e[h+d]=e[p+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Co(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function fc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}We.prototype.ValueTypeName="";We.prototype.TimeBufferType=Float32Array;We.prototype.ValueBufferType=Float32Array;We.prototype.DefaultInterpolation=Lr;var Vn=class extends We{constructor(t,e,n){super(t,e,n)}};Vn.prototype.ValueTypeName="bool";Vn.prototype.ValueBufferType=Array;Vn.prototype.DefaultInterpolation=us;Vn.prototype.InterpolantFactoryMethodLinear=void 0;Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var $r=class extends We{constructor(t,e,n,s){super(t,e,n,s)}};$r.prototype.ValueTypeName="color";var jr=class extends We{constructor(t,e,n,s){super(t,e,n,s)}};jr.prototype.ValueTypeName="number";var Qr=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)Oe.slerpFlat(r,0,a,c-o,a,c,l);return r}},Cs=class extends We{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Qr(this.times,this.values,this.getValueSize(),t)}};Cs.prototype.ValueTypeName="quaternion";Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Gn=class extends We{constructor(t,e,n){super(t,e,n)}};Gn.prototype.ValueTypeName="string";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=us;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends We{constructor(t,e,n,s){super(t,e,n,s)}};ta.prototype.ValueTypeName="vector";var Sr={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(pc(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!pc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function pc(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var ea=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,p){return c.push(u,p),this},this.removeHandler=function(u){let p=c.indexOf(u);return p!==-1&&c.splice(p,2),this},this.getHandler=function(u){for(let p=0,h=c.length;p<h;p+=2){let d=c[p],x=c[p+1];if(d.global&&(d.lastIndex=0),d.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},lh=new ea,Gi=class{constructor(t){this.manager=t!==void 0?t:lh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Gi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ti=new WeakMap,na=class extends Gi{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Sr.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let p=Ti.get(a);p===void 0&&(p=[],Ti.set(a,p)),p.push({onLoad:e,onError:s})}return a}let o=Pi("img");function l(){u(),e&&e(this);let p=Ti.get(this)||[];for(let h=0;h<p.length;h++){let d=p[h];d.onLoad&&d.onLoad(this)}Ti.delete(this),r.manager.itemEnd(t)}function c(p){u(),s&&s(p),Sr.remove(`image:${t}`);let h=Ti.get(this)||[];for(let d=0;d<h.length;d++){let x=h[d];x.onError&&x.onError(p)}Ti.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Sr.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}};var Is=class extends Gi{constructor(t){super(t)}load(t,e,n,s){let r=new De,a=new na(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Hi=class extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ps=class extends Hi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Io=new ie,mc=new P,gc=new P,Ls=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=ze,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oi,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;mc.setFromMatrixPosition(t.matrixWorld),e.position.copy(mc),gc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Io.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Io,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ii||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},xr=new P,vr=new Oe,hn=new P,Us=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(xr,vr,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xr,vr,hn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(xr,vr,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xr,vr,hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fn=new P,_c=new Tt,xc=new Tt,Ne=class extends Us{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ui*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ui*2*Math.atan(Math.tan(os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fn.x,Fn.y).multiplyScalar(-t/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fn.x,Fn.y).multiplyScalar(-t/Fn.z)}getViewSize(t,e){return this.getViewBounds(t,_c,xc),e.subVectors(xc,_c)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(os*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Do=class extends Ls{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0}},Ns=class extends Hi{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Do}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Hn=class extends Us{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Fo=class extends Ls{constructor(){super(new Hn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ds=class extends Hi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new Fo}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var wi=-90,Ei=1,ia=class extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ne(wi,Ei,t,e);s.layers=this.layers,this.add(s);let r=new Ne(wi,Ei,t,e);r.layers=this.layers,this.add(r);let a=new Ne(wi,Ei,t,e);a.layers=this.layers,this.add(a);let o=new Ne(wi,Ei,t,e);o.layers=this.layers,this.add(o);let l=new Ne(wi,Ei,t,e);l.layers=this.layers,this.add(l);let c=new Ne(wi,Ei,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ii)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,p=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(p,h,d),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},sa=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var hl="\\[\\]\\.:\\/",Wu=new RegExp("["+hl+"]","g"),ul="[^"+hl+"]",Xu="[^"+hl.replace("\\.","")+"]",Yu=/((?:WC+[\/:])*)/.source.replace("WC",ul),qu=/(WCOD+)?/.source.replace("WCOD",Xu),Ju=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ul),Zu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ul),Ku=new RegExp("^"+Yu+qu+Ju+Zu+"$"),$u=["material","materials","bones","map"],Oo=class{constructor(t,e,n){let s=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},le=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Wu,"")}static parseTrackName(t){let e=Ku.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);$u.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Ot("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=Oo;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jg=new Float32Array(1);var vc=new ie,Fs=class{constructor(t,e,n=0,s=1/0){this.ray=new _s(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Di,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ot("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vc),this}intersectObject(t,e=!0,n=[]){return Bo(t,this,n,e),n.sort(yc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Bo(t[s],this,n,e);return n.sort(yc),n}};function yc(i,t){return i.distance-t.distance}function Bo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Bo(r[a],t,e,!0)}}var _l=class _l{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};_l.prototype.isMatrix2=!0;var zo=_l;function dl(i,t,e,n){let s=ju(n);switch(e){case il:return i*t;case fa:return i*t/s.components*s.byteLength;case pa:return i*t/s.components*s.byteLength;case Jn:return i*t*2/s.components*s.byteLength;case ma:return i*t*2/s.components*s.byteLength;case sl:return i*t*3/s.components*s.byteLength;case Ke:return i*t*4/s.components*s.byteLength;case ga:return i*t*4/s.components*s.byteLength;case Vs:case Gs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hs:case Ws:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:case ya:return Math.max(i,16)*Math.max(t,8)/4;case _a:case va:return Math.max(i,8)*Math.max(t,8)/2;case Ma:case Sa:case Ta:case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ba:case Xs:case Ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case za:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Va:case Ga:case Ha:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ys:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ju(i){switch(i){case ze:case Qo:return{byteLength:1,components:1};case Yi:case tl:case on:return{byteLength:2,components:1};case ua:case da:return{byteLength:2,components:4};case an:case ha:case Ze:return{byteLength:4,components:1};case el:case nl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ih(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function td(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,p=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let u=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,u);else{p.sort((d,x)=>d.start-x.start);let h=0;for(let d=1;d<p.length;d++){let x=p[h],M=p[d];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++h,p[h]=M)}p.length=h+1;for(let d=0,x=p.length;d<x;d++){let M=p[d];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,id=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ad=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,od=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ud=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,md=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Md=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Td=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ed=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ad=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ld=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ud=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Nd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Od=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,qd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Jd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$d=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ef=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,af=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,of=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,df=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ff=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,wf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ef=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Af=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,If=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Lf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ff=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Of=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$f=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,np=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ip=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,op=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,up=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_p=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ap=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Up=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Np=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:ed,alphahash_pars_fragment:nd,alphamap_fragment:id,alphamap_pars_fragment:sd,alphatest_fragment:rd,alphatest_pars_fragment:ad,aomap_fragment:od,aomap_pars_fragment:ld,batching_pars_vertex:cd,batching_vertex:hd,begin_vertex:ud,beginnormal_vertex:dd,bsdfs:fd,iridescence_fragment:pd,bumpmap_pars_fragment:md,clipping_planes_fragment:gd,clipping_planes_pars_fragment:_d,clipping_planes_pars_vertex:xd,clipping_planes_vertex:vd,color_fragment:yd,color_pars_fragment:Md,color_pars_vertex:Sd,color_vertex:bd,common:Td,cube_uv_reflection_fragment:wd,defaultnormal_vertex:Ed,displacementmap_pars_vertex:Ad,displacementmap_vertex:Rd,emissivemap_fragment:Cd,emissivemap_pars_fragment:Id,colorspace_fragment:Pd,colorspace_pars_fragment:Ld,envmap_fragment:Ud,envmap_common_pars_fragment:Nd,envmap_pars_fragment:Dd,envmap_pars_vertex:Fd,envmap_physical_pars_fragment:qd,envmap_vertex:Od,fog_vertex:Bd,fog_pars_vertex:zd,fog_fragment:kd,fog_pars_fragment:Vd,gradientmap_pars_fragment:Gd,lightmap_pars_fragment:Hd,lights_lambert_fragment:Wd,lights_lambert_pars_fragment:Xd,lights_pars_begin:Yd,lights_toon_fragment:Jd,lights_toon_pars_fragment:Zd,lights_phong_fragment:Kd,lights_phong_pars_fragment:$d,lights_physical_fragment:jd,lights_physical_pars_fragment:Qd,lights_fragment_begin:tf,lights_fragment_maps:ef,lights_fragment_end:nf,lightprobes_pars_fragment:sf,logdepthbuf_fragment:rf,logdepthbuf_pars_fragment:af,logdepthbuf_pars_vertex:of,logdepthbuf_vertex:lf,map_fragment:cf,map_pars_fragment:hf,map_particle_fragment:uf,map_particle_pars_fragment:df,metalnessmap_fragment:ff,metalnessmap_pars_fragment:pf,morphinstance_vertex:mf,morphcolor_vertex:gf,morphnormal_vertex:_f,morphtarget_pars_vertex:xf,morphtarget_vertex:vf,normal_fragment_begin:yf,normal_fragment_maps:Mf,normal_pars_fragment:Sf,normal_pars_vertex:bf,normal_vertex:Tf,normalmap_pars_fragment:wf,clearcoat_normal_fragment_begin:Ef,clearcoat_normal_fragment_maps:Af,clearcoat_pars_fragment:Rf,iridescence_pars_fragment:Cf,opaque_fragment:If,packing:Pf,premultiplied_alpha_fragment:Lf,project_vertex:Uf,dithering_fragment:Nf,dithering_pars_fragment:Df,roughnessmap_fragment:Ff,roughnessmap_pars_fragment:Of,shadowmap_pars_fragment:Bf,shadowmap_pars_vertex:zf,shadowmap_vertex:kf,shadowmask_pars_fragment:Vf,skinbase_vertex:Gf,skinning_pars_vertex:Hf,skinning_vertex:Wf,skinnormal_vertex:Xf,specularmap_fragment:Yf,specularmap_pars_fragment:qf,tonemapping_fragment:Jf,tonemapping_pars_fragment:Zf,transmission_fragment:Kf,transmission_pars_fragment:$f,uv_pars_fragment:jf,uv_pars_vertex:Qf,uv_vertex:tp,worldpos_vertex:ep,background_vert:np,background_frag:ip,backgroundCube_vert:sp,backgroundCube_frag:rp,cube_vert:ap,cube_frag:op,depth_vert:lp,depth_frag:cp,distance_vert:hp,distance_frag:up,equirect_vert:dp,equirect_frag:fp,linedashed_vert:pp,linedashed_frag:mp,meshbasic_vert:gp,meshbasic_frag:_p,meshlambert_vert:xp,meshlambert_frag:vp,meshmatcap_vert:yp,meshmatcap_frag:Mp,meshnormal_vert:Sp,meshnormal_frag:bp,meshphong_vert:Tp,meshphong_frag:wp,meshphysical_vert:Ep,meshphysical_frag:Ap,meshtoon_vert:Rp,meshtoon_frag:Cp,points_vert:Ip,points_frag:Pp,shadow_vert:Lp,shadow_frag:Up,sprite_vert:Np,sprite_frag:Dp},gt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},yn={basic:{uniforms:Pe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Pe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Vt(0)},envMapIntensity:{value:1}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Pe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Pe([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Pe([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Pe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Pe([gt.points,gt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Pe([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Pe([gt.common,gt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Pe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Pe([gt.sprite,gt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distance:{uniforms:Pe([gt.common,gt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distance_vert,fragmentShader:Wt.distance_frag},shadow:{uniforms:Pe([gt.lights,gt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};yn.physical={uniforms:Pe([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var Za={r:0,b:0,g:0},Fp=new ie,Ph=new Bt;Ph.set(-1,0,0,0,1,0,0,0,1);function Op(i,t,e,n,s,r){let a=new Vt(0),o=s===!0?0:1,l,c,u=null,p=0,h=null;function d(w){let A=w.isScene===!0?w.background:null;if(A&&A.isTexture){let y=w.backgroundBlurriness>0;A=t.get(A,y)}return A}function x(w){let A=!1,y=d(w);y===null?m(a,o):y&&y.isColor&&(m(y,1),A=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(w,A){let y=d(A);y&&(y.isCubeTexture||y.mapping===zs)?(c===void 0&&(c=new he(new mn(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:oi(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:we,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Fp.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ph),c.material.toneMapped=Jt.getTransfer(y.colorSpace)!==jt,(u!==y||p!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,p=y.version,h=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new he(new si(2,2),new He({name:"BackgroundMaterial",uniforms:oi(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(y.colorSpace)!==jt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||p!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,p=y.version,h=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,A){w.getRGB(Za,cl(i)),e.buffers.color.setClear(Za.r,Za.g,Za.b,A,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,A=1){a.set(w),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:x,addToRenderList:M,dispose:f}}function Bp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(N,L,O,I,k){let W=!1,Y=p(N,I,O,L);r!==Y&&(r=Y,c(r.object)),W=d(N,I,O,k),W&&x(N,I,O,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,y(N,L,O,I),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function u(N){return i.deleteVertexArray(N)}function p(N,L,O,I){let k=I.wireframe===!0,W=n[L.id];W===void 0&&(W={},n[L.id]=W);let Y=N.isInstancedMesh===!0?N.id:0,et=W[Y];et===void 0&&(et={},W[Y]=et);let q=et[O.id];q===void 0&&(q={},et[O.id]=q);let Q=q[k];return Q===void 0&&(Q=h(l()),q[k]=Q),Q}function h(N){let L=[],O=[],I=[];for(let k=0;k<e;k++)L[k]=0,O[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:I,object:N,attributes:{},index:null}}function d(N,L,O,I){let k=r.attributes,W=L.attributes,Y=0,et=O.getAttributes();for(let q in et)if(et[q].location>=0){let tt=k[q],It=W[q];if(It===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(It=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(It=N.instanceColor)),tt===void 0||tt.attribute!==It||It&&tt.data!==It.data)return!0;Y++}return r.attributesNum!==Y||r.index!==I}function x(N,L,O,I){let k={},W=L.attributes,Y=0,et=O.getAttributes();for(let q in et)if(et[q].location>=0){let tt=W[q];tt===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(tt=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(tt=N.instanceColor));let It={};It.attribute=tt,tt&&tt.data&&(It.data=tt.data),k[q]=It,Y++}r.attributes=k,r.attributesNum=Y,r.index=I}function M(){let N=r.newAttributes;for(let L=0,O=N.length;L<O;L++)N[L]=0}function m(N){f(N,0)}function f(N,L){let O=r.newAttributes,I=r.enabledAttributes,k=r.attributeDivisors;O[N]=1,I[N]===0&&(i.enableVertexAttribArray(N),I[N]=1),k[N]!==L&&(i.vertexAttribDivisor(N,L),k[N]=L)}function w(){let N=r.newAttributes,L=r.enabledAttributes;for(let O=0,I=L.length;O<I;O++)L[O]!==N[O]&&(i.disableVertexAttribArray(O),L[O]=0)}function A(N,L,O,I,k,W,Y){Y===!0?i.vertexAttribIPointer(N,L,O,k,W):i.vertexAttribPointer(N,L,O,I,k,W)}function y(N,L,O,I){M();let k=I.attributes,W=O.getAttributes(),Y=L.defaultAttributeValues;for(let et in W){let q=W[et];if(q.location>=0){let Q=k[et];if(Q===void 0&&(et==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),et==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){let tt=Q.normalized,It=Q.itemSize,St=t.get(Q);if(St===void 0)continue;let qt=St.buffer,it=St.type,at=St.bytesPerElement,z=it===i.INT||it===i.UNSIGNED_INT||Q.gpuType===ha;if(Q.isInterleavedBufferAttribute){let J=Q.data,st=J.stride,Ut=Q.offset;if(J.isInstancedInterleavedBuffer){for(let ft=0;ft<q.locationSize;ft++)f(q.location+ft,J.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ft=0;ft<q.locationSize;ft++)m(q.location+ft);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let ft=0;ft<q.locationSize;ft++)A(q.location+ft,It/q.locationSize,it,tt,st*at,(Ut+It/q.locationSize*ft)*at,z)}else{if(Q.isInstancedBufferAttribute){for(let J=0;J<q.locationSize;J++)f(q.location+J,Q.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let J=0;J<q.locationSize;J++)m(q.location+J);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let J=0;J<q.locationSize;J++)A(q.location+J,It/q.locationSize,it,tt,It*at,It/q.locationSize*J*at,z)}}else if(Y!==void 0){let tt=Y[et];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(q.location,tt);break;case 3:i.vertexAttrib3fv(q.location,tt);break;case 4:i.vertexAttrib4fv(q.location,tt);break;default:i.vertexAttrib1fv(q.location,tt)}}}}w()}function b(){T();for(let N in n){let L=n[N];for(let O in L){let I=L[O];for(let k in I){let W=I[k];for(let Y in W)u(W[Y].object),delete W[Y];delete I[k]}}delete n[N]}}function S(N){if(n[N.id]===void 0)return;let L=n[N.id];for(let O in L){let I=L[O];for(let k in I){let W=I[k];for(let Y in W)u(W[Y].object),delete W[Y];delete I[k]}}delete n[N.id]}function R(N){for(let L in n){let O=n[L];for(let I in O){let k=O[I];if(k[N.id]===void 0)continue;let W=k[N.id];for(let Y in W)u(W[Y].object),delete W[Y];delete k[N.id]}}}function _(N){for(let L in n){let O=n[L],I=N.isInstancedMesh===!0?N.id:0,k=O[I];if(k!==void 0){for(let W in k){let Y=k[W];for(let et in Y)u(Y[et].object),delete Y[et];delete k[W]}delete O[I],Object.keys(O).length===0&&delete n[L]}}}function T(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:w}}function zp(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function kp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Ke&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let _=R===on&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ze&&R!==Ze&&!_&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Ft("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let p=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:y,maxSamples:b,samples:S}}function Vp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new en,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){let d=p.length!==0||h||n!==0||s;return s=h,n=p.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){e=u(p,h,0)},this.setState=function(p,h,d){let x=p.clippingPlanes,M=p.clipIntersection,m=p.clipShadows,f=i.get(p);if(!s||x===null||x.length===0||r&&!m)r?u(null):c();else{let w=r?0:n,A=w*4,y=f.clippingState||null;l.value=y,y=u(x,h,A,d);for(let b=0;b!==A;++b)y[b]=e[b];f.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,h,d,x){let M=p!==null?p.length:0,m=null;if(M!==0){if(m=l.value,x!==!0||m===null){let f=d+M*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let A=0,y=d;A!==M;++A,y+=4)a.copy(p[A]).applyMatrix4(w,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var Ki=4,Gp=6,Hp=20,Wp=256,Js=new Hn,ch=new Vt,xl=null,vl=0,yl=0,Ml=!1,Xp=new P,li=new P,ji=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Xp}=r;xl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(xl,vl,yl),this._renderer.xr.enabled=Ml,t.scissorTest=!1,Zi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xn||t.mapping===ai?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Te,minFilter:Te,generateMipmaps:!1,type:on,format:Ke,colorSpace:ds,depthBuffer:!1},s=hh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Yp(r)),this._blurMaterial=Jp(r,t,e),this._ggxMaterial=qp(r,t,e)}return s}_compileMaterial(t){let e=new he(new Ie,t);this._renderer.compile(e,Js)}_sceneToCubeUV(t,e,n,s,r){let l=new Ne(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,d=p.toneMapping;p.getClearColor(ch),p.toneMapping=rn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new he(new mn,new ni({name:"PMREM.Background",side:we,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,f=!1,w=t.background;w?w.isColor&&(m.color.copy(w),t.background=null,f=!0):(m.color.copy(ch),f=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));let b=this._cubeSize;Zi(s,y*b,A>2?b:0,b,b),p.setRenderTarget(s),f&&p.render(M,l),p.render(t,l)}p.toneMapping=d,p.autoClear=h,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Xn||t.mapping===ai;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Zi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Js)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),p=Math.sqrt(c*c-u*u),h=c*1.25,d=p*h,{_lodMax:x}=this,M=this._sizeLods[n],m=3*M*(n>x-Ki?n-x+Ki:0),f=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=x-e,Zi(r,m,f,3*M,2*M),s.setRenderTarget(r),s.render(o,Js),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Zi(t,m,f,3*M,2*M),s.setRenderTarget(t),s.render(o,Js)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],p=3*u*(s>this._lodMax-Ki?s-this._lodMax+Ki:0),h=4*(this._cubeSize-u);Zi(e,p,h,3*u,2*u),a.setRenderTarget(e),a.render(l,Js)}};function Yp(i){let t=[],e=[],n=i,s=i-Ki+1+Gp;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,h=6,d=3,x=new Float32Array(d*h*p),M=new Float32Array(d*h*p);for(let f=0;f<p;f++){let w=f%3*2/3-1,A=f>2?0:-1,y=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];x.set(y,d*h*f);for(let b=0;b<h;b++){let S=u[b*2]*2-1,R=u[b*2+1]*2-1;f===0?li.set(1,R,S):f===1?li.set(-S,1,-R):f===2?li.set(-S,R,1):f===3?li.set(-1,R,-S):f===4?li.set(-S,-1,R):li.set(S,R,-1),li.toArray(M,(f*h+b)*d)}}let m=new Ie;m.setAttribute("position",new Ge(x,d)),m.setAttribute("outputDirection",new Ge(M,d)),e.push(new he(m,null)),n>Ki&&n--}return{lodMeshes:e,sizeLods:t}}function hh(i,t,e){let n=new Be(i,t,e);return n.texture.mapping=zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zi(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function qp(i,t,e){return new He({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Jp(i,t,e){return new He({name:"SphericalGaussianBlur",defines:{SAMPLES:Hp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Qa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function uh(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function dh(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Qa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var $a=class extends Be{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ms(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new mn(5,5,5),r=new He({name:"CubemapFromEquirect",uniforms:oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:we,blending:_n});r.uniforms.tEquirect.value=e;let a=new he(s,r),o=e.minFilter;return e.minFilter===Yn&&(e.minFilter=Te),new ia(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Zp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===oa||d===la)if(t.has(h)){let x=t.get(h).texture;return o(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let M=new $a(x.height);return M.fromEquirectangularTexture(i,h),t.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let d=h.mapping,x=d===oa||d===la,M=d===Xn||d===ai;if(x||M){let m=e.get(h),f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new ji(i)),m=x?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let w=h.image;return x&&w&&w.height>0||M&&w&&l(w)?(n===null&&(n=new ji(i)),m=x?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===oa?h.mapping=Xn:d===la&&(h.mapping=ai),h}function l(h){let d=0,x=6;for(let M=0;M<x;M++)h[M]!==void 0&&d++;return d===x}function c(h){let d=h.target;d.removeEventListener("dispose",c);let x=t.get(d);x!==void 0&&(t.delete(d),x.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let x=e.get(d);x!==void 0&&(e.delete(d),x.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function Kp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ti("WebGLRenderer: "+n+" extension not supported."),s}}}function $p(i,t,e,n){let s={},r=new WeakMap;function a(p){let h=p.target;h.index!==null&&t.remove(h.index);for(let x in h.attributes)t.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete s[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(p,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(p){let h=p.attributes;for(let d in h)t.update(h[d],i.ARRAY_BUFFER)}function c(p){let h=[],d=p.index,x=p.attributes.position,M=0;if(x===void 0)return;if(d!==null){let w=d.array;M=d.version;for(let A=0,y=w.length;A<y;A+=3){let b=w[A+0],S=w[A+1],R=w[A+2];h.push(b,S,S,R,R,b)}}else{let w=x.array;M=x.version;for(let A=0,y=w.length/3-1;A<y;A+=3){let b=A+0,S=A+1,R=A+2;h.push(b,S,S,R,R,b)}}let m=new(x.count>=65535?gs:ms)(h,1);m.version=M;let f=r.get(p);f&&t.remove(f),r.set(p,m)}function u(p){let h=r.get(p);if(h){let d=p.index;d!==null&&h.version<d.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:u}}function jp(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,h){i.drawElements(n,h,r,p*a),e.update(h,n,1)}function c(p,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,p*a,d),e.update(h,n,d))}function u(p,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,p,0,d);let M=0;for(let m=0;m<d;m++)M+=h[m];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Qp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ot("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function tm(i,t,e){let n=new WeakMap,s=new ce;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==p){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],A=0;d===!0&&(A=1),x===!0&&(A=2),M===!0&&(A=3);let y=o.attributes.position.count*A,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let S=new Float32Array(y*b*4*p),R=new ps(S,y,b,p);R.type=Ze,R.needsUpdate=!0;let _=A*4;for(let C=0;C<p;C++){let N=m[C],L=f[C],O=w[C],I=y*b*4*C;for(let k=0;k<N.count;k++){let W=k*_;d===!0&&(s.fromBufferAttribute(N,k),S[I+W+0]=s.x,S[I+W+1]=s.y,S[I+W+2]=s.z,S[I+W+3]=0),x===!0&&(s.fromBufferAttribute(L,k),S[I+W+4]=s.x,S[I+W+5]=s.y,S[I+W+6]=s.z,S[I+W+7]=0),M===!0&&(s.fromBufferAttribute(O,k),S[I+W+8]=s.x,S[I+W+9]=s.y,S[I+W+10]=s.z,S[I+W+11]=O.itemSize===4?s.w:1)}}h={count:p,texture:R,size:new Tt(y,b)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];let x=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function em(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,p=c.geometry,h=t.get(c,p);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var nm={[Yo]:"LINEAR_TONE_MAPPING",[qo]:"REINHARD_TONE_MAPPING",[Jo]:"CINEON_TONE_MAPPING",[Bs]:"ACES_FILMIC_TONE_MAPPING",[Ko]:"AGX_TONE_MAPPING",[$o]:"NEUTRAL_TONE_MAPPING",[Zo]:"CUSTOM_TONE_MAPPING"};function im(i,t,e,n,s,r){let a=new Be(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ie;c.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Qt([0,2,0,0,2,0],2));let u=new Wr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new he(c,u),h=new Hn(-1,1,1,-1,0,1),d=null,x=null,M=!1,m,f=null,w=[],A=!1;this.setSize=function(y,b){a.setSize(y,b),o!==null&&o.setSize(y,b),l!==null&&l.setSize(y,b);for(let S=0;S<w.length;S++){let R=w[S];R.setSize&&R.setSize(y,b)}},this.setEffects=function(y){w=y,A=w.length>0&&w[0].isRenderPass===!0;let b=a.width,S=a.height;w.length>0&&o===null&&(o=new Be(b,S,{type:on,depthBuffer:!1,stencilBuffer:!1}),l=new Be(b,S,{type:on,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<w.length;R++){let _=w[R];_.setSize&&_.setSize(b,S)}},this.begin=function(y,b){if(M||y.toneMapping===rn&&w.length===0)return!1;if(f=b,b!==null){let S=b.width,R=b.height;(a.width!==S||a.height!==R)&&this.setSize(S,R)}return A===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=rn,!0},this.hasRenderPass=function(){return A},this.end=function(y,b){y.toneMapping=m,M=!0;let S=a,R=o;for(let _=0;_<w.length;_++){let T=w[_];T.enabled!==!1&&(T.render(y,R,S,b),T.needsSwap!==!1&&(S=R,R=R===o?l:o))}if(d!==y.outputColorSpace||x!==y.toneMapping){d=y.outputColorSpace,x=y.toneMapping,u.defines={},Jt.getTransfer(d)===jt&&(u.defines.SRGB_TRANSFER="");let _=nm[x];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(f),y.render(p,h),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Lh=new De,Tl=new zn(1,1),Uh=new ps,Nh=new Dr,Dh=new Ms,fh=[],ph=[],mh=new Float32Array(16),gh=new Float32Array(9),_h=new Float32Array(4);function Qi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=fh[s];if(r===void 0&&(r=new Float32Array(s),fh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function to(i,t){let e=ph[t];e===void 0&&(e=new Int32Array(t),ph[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function sm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function am(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function lm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;_h.set(n),i.uniformMatrix2fv(this.addr,!1,_h),xe(e,n)}}function cm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;gh.set(n),i.uniformMatrix3fv(this.addr,!1,gh),xe(e,n)}}function hm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;mh.set(n),i.uniformMatrix4fv(this.addr,!1,mh),xe(e,n)}}function um(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function fm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function mm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function _m(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function vm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tl.compareFunction=e.isReversedDepthBuffer()?Ja:qa,r=Tl):r=Lh,e.setTexture2D(t||r,s)}function ym(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Nh,s)}function Mm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Dh,s)}function Sm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Uh,s)}function bm(i){switch(i){case 5126:return sm;case 35664:return rm;case 35665:return am;case 35666:return om;case 35674:return lm;case 35675:return cm;case 35676:return hm;case 5124:case 35670:return um;case 35667:case 35671:return dm;case 35668:case 35672:return fm;case 35669:case 35673:return pm;case 5125:return mm;case 36294:return gm;case 36295:return _m;case 36296:return xm;case 35678:case 36198:case 36298:case 36306:case 35682:return vm;case 35679:case 36299:case 36307:return ym;case 35680:case 36300:case 36308:case 36293:return Mm;case 36289:case 36303:case 36311:case 36292:return Sm}}function Tm(i,t){i.uniform1fv(this.addr,t)}function wm(i,t){let e=Qi(t,this.size,2);i.uniform2fv(this.addr,e)}function Em(i,t){let e=Qi(t,this.size,3);i.uniform3fv(this.addr,e)}function Am(i,t){let e=Qi(t,this.size,4);i.uniform4fv(this.addr,e)}function Rm(i,t){let e=Qi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cm(i,t){let e=Qi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Im(i,t){let e=Qi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Pm(i,t){i.uniform1iv(this.addr,t)}function Lm(i,t){i.uniform2iv(this.addr,t)}function Um(i,t){i.uniform3iv(this.addr,t)}function Nm(i,t){i.uniform4iv(this.addr,t)}function Dm(i,t){i.uniform1uiv(this.addr,t)}function Fm(i,t){i.uniform2uiv(this.addr,t)}function Om(i,t){i.uniform3uiv(this.addr,t)}function Bm(i,t){i.uniform4uiv(this.addr,t)}function zm(i,t,e){let n=this.cache,s=t.length,r=to(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Tl:a=Lh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function km(i,t,e){let n=this.cache,s=t.length,r=to(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Nh,r[a])}function Vm(i,t,e){let n=this.cache,s=t.length,r=to(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Dh,r[a])}function Gm(i,t,e){let n=this.cache,s=t.length,r=to(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Uh,r[a])}function Hm(i){switch(i){case 5126:return Tm;case 35664:return wm;case 35665:return Em;case 35666:return Am;case 35674:return Rm;case 35675:return Cm;case 35676:return Im;case 5124:case 35670:return Pm;case 35667:case 35671:return Lm;case 35668:case 35672:return Um;case 35669:case 35673:return Nm;case 5125:return Dm;case 36294:return Fm;case 36295:return Om;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return km;case 35680:case 36300:case 36308:case 36293:return Vm;case 36289:case 36303:case 36311:case 36292:return Gm}}var wl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=bm(e.type)}},El=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hm(e.type)}},Al=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Sl=/(\w+)(\])?(\[|\.)?/g;function xh(i,t){i.seq.push(t),i.map[t.id]=t}function Wm(i,t,e){let n=i.name,s=n.length;for(Sl.lastIndex=0;;){let r=Sl.exec(n),a=Sl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){xh(e,c===void 0?new wl(o,i,t):new El(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new Al(o),xh(e,p)),e=p}}}var $i=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Wm(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function vh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Xm=37297,Ym=0;function qm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var yh=new Bt;function Jm(i){Jt._getMatrix(yh,Jt.workingColorSpace,i);let t=`mat3( ${yh.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case fs:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Mh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+qm(i.getShaderSource(t),o)}else return r}function Zm(i,t){let e=Jm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Km={[Yo]:"Linear",[qo]:"Reinhard",[Jo]:"Cineon",[Bs]:"ACESFilmic",[Ko]:"AgX",[$o]:"Neutral",[Zo]:"Custom"};function $m(i,t){let e=Km[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ka=new P;function jm(){Jt.getLuminanceCoefficients(Ka);let i=Ka.x.toFixed(4),t=Ka.y.toFixed(4),e=Ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function tg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function eg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ks(i){return i!==""}function Sh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(i){return i.replace(ng,sg)}var ig=new Map;function sg(i,t){let e=Wt[t];if(e===void 0){let n=ig.get(t);if(n!==void 0)e=Wt[n],Ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Rl(e)}var rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Th(i){return i.replace(rg,ag)}function ag(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var og={[Os]:"SHADOWMAP_TYPE_PCF",[Wi]:"SHADOWMAP_TYPE_VSM"};function lg(i){return og[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var cg={[Xn]:"ENVMAP_TYPE_CUBE",[ai]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE_UV"};function hg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":cg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var ug={[ai]:"ENVMAP_MODE_REFRACTION"};function dg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ug[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var fg={[aa]:"ENVMAP_BLENDING_MULTIPLY",[Gc]:"ENVMAP_BLENDING_MIX",[Hc]:"ENVMAP_BLENDING_ADD"};function pg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":fg[i.combine]||"ENVMAP_BLENDING_NONE"}function mg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function gg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=lg(e),c=hg(e),u=dg(e),p=pg(e),h=mg(e),d=Qm(e),x=tg(r),M=s.createProgram(),m,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ks).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ks).join(`
`),f.length>0&&(f+=`
`)):(m=[wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),f=[wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==rn?"#define TONE_MAPPING":"",e.toneMapping!==rn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==rn?$m("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Zm("linearToOutputTexel",e.outputColorSpace),jm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ks).join(`
`)),a=Rl(a),a=Sh(a,e),a=bh(a,e),o=Rl(o),o=Sh(o,e),o=bh(o,e),a=Th(a),o=Th(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let A=w+m+a,y=w+f+o,b=vh(s,s.VERTEX_SHADER,A),S=vh(s,s.FRAGMENT_SHADER,y);s.attachShader(M,b),s.attachShader(M,S),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(N){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(M)||"",O=s.getShaderInfoLog(b)||"",I=s.getShaderInfoLog(S)||"",k=L.trim(),W=O.trim(),Y=I.trim(),et=!0,q=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,b,S);else{let Q=Mh(s,b,"vertex"),tt=Mh(s,S,"fragment");Ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+Q+`
`+tt)}else k!==""?Ft("WebGLProgram: Program Info Log:",k):(W===""||Y==="")&&(q=!1);q&&(N.diagnostics={runnable:et,programLog:k,vertexShader:{log:W,prefix:m},fragmentShader:{log:Y,prefix:f}})}s.deleteShader(b),s.deleteShader(S),_=new $i(s,M),T=eg(s,M)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(M,Xm)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ym++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=b,this.fragmentShader=S,this}var _g=0,Cl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Il(t),e.set(t,n)),n}},Il=class{constructor(t){this.id=_g++,this.code=t,this.usedTimes=0}};function xg(i){return i===Jn||i===Xs||i===Ys}function vg(i,t,e,n,s,r){let a=new Di,o=new Cl,l=new Set,c=[],u=new Map,p=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function M(_,T,C,N,L,O){let I=N.fog,k=L.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,et=t.get(_.envMap||W,Y),q=et&&et.mapping===zs?et.image.height:null,Q=d[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Ft("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let tt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,It=tt!==void 0?tt.length:0,St=0;k.morphAttributes.position!==void 0&&(St=1),k.morphAttributes.normal!==void 0&&(St=2),k.morphAttributes.color!==void 0&&(St=3);let qt,it,at,z;if(Q){let re=yn[Q];qt=re.vertexShader,it=re.fragmentShader}else{qt=_.vertexShader,it=_.fragmentShader;let re=o.getVertexShaderStage(_),Kt=o.getFragmentShaderStage(_);o.update(_,re,Kt),at=re.id,z=Kt.id}let J=i.getRenderTarget(),st=i.state.buffers.depth.getReversed(),Ut=L.isInstancedMesh===!0,ft=L.isBatchedMesh===!0,zt=!!_.map,ot=!!_.matcap,pt=!!et,At=!!_.aoMap,yt=!!_.lightMap,Xt=!!_.bumpMap&&_.wireframe===!1,ee=!!_.normalMap,ve=!!_.displacementMap,Fe=!!_.emissiveMap,ue=!!_.metalnessMap,fe=!!_.roughnessMap,F=_.anisotropy>0,Ee=_.clearcoat>0,te=_.dispersion>0,E=_.retroreflectivity>0,g=_.iridescence>0,B=_.sheen>0,H=_.transmission>0,Z=F&&!!_.anisotropyMap,rt=Ee&&!!_.clearcoatMap,lt=Ee&&!!_.clearcoatNormalMap,K=Ee&&!!_.clearcoatRoughnessMap,j=g&&!!_.iridescenceMap,ct=g&&!!_.iridescenceThicknessMap,Pt=B&&!!_.sheenColorMap,mt=B&&!!_.sheenRoughnessMap,ht=!!_.specularMap,Lt=!!_.specularColorMap,Dt=!!_.specularIntensityMap,kt=H&&!!_.transmissionMap,D=H&&!!_.thicknessMap,ut=!!_.gradientMap,$=!!_.alphaMap,dt=_.alphaTest>0,vt=!!_.alphaHash,nt=!!_.extensions,Nt=rn;_.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Nt=i.toneMapping);let Rt={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:qt,fragmentShader:it,defines:_.defines,customVertexShaderID:at,customFragmentShaderID:z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:ft,batchingColor:ft&&L._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&L.instanceColor!==null,instancingMorph:Ut&&L.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:zt,matcap:ot,envMap:pt,envMapMode:pt&&et.mapping,envMapCubeUVHeight:q,aoMap:At,lightMap:yt,bumpMap:Xt,normalMap:ee,displacementMap:ve,emissiveMap:Fe,normalMapObjectSpace:ee&&_.normalMapType===Yc,normalMapTangentSpace:ee&&_.normalMapType===qs,packedNormalMap:ee&&_.normalMapType===qs&&xg(_.normalMap.format),metalnessMap:ue,roughnessMap:fe,anisotropy:F,anisotropyMap:Z,clearcoat:Ee,clearcoatMap:rt,clearcoatNormalMap:lt,clearcoatRoughnessMap:K,dispersion:te,retroreflection:E,iridescence:g,iridescenceMap:j,iridescenceThicknessMap:ct,sheen:B,sheenColorMap:Pt,sheenRoughnessMap:mt,specularMap:ht,specularColorMap:Lt,specularIntensityMap:Dt,transmission:H,transmissionMap:kt,thicknessMap:D,gradientMap:ut,opaque:_.transparent===!1&&_.blending===Xi&&_.alphaToCoverage===!1,alphaMap:$,alphaTest:dt,alphaHash:vt,combine:_.combine,mapUv:zt&&x(_.map.channel),aoMapUv:At&&x(_.aoMap.channel),lightMapUv:yt&&x(_.lightMap.channel),bumpMapUv:Xt&&x(_.bumpMap.channel),normalMapUv:ee&&x(_.normalMap.channel),displacementMapUv:ve&&x(_.displacementMap.channel),emissiveMapUv:Fe&&x(_.emissiveMap.channel),metalnessMapUv:ue&&x(_.metalnessMap.channel),roughnessMapUv:fe&&x(_.roughnessMap.channel),anisotropyMapUv:Z&&x(_.anisotropyMap.channel),clearcoatMapUv:rt&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:lt&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:mt&&x(_.sheenRoughnessMap.channel),specularMapUv:ht&&x(_.specularMap.channel),specularColorMapUv:Lt&&x(_.specularColorMap.channel),specularIntensityMapUv:Dt&&x(_.specularIntensityMap.channel),transmissionMapUv:kt&&x(_.transmissionMap.channel),thicknessMapUv:D&&x(_.thicknessMap.channel),alphaMapUv:$&&x(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ee||F),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(zt||$),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&ee===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:st,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:St,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,decodeVideoTexture:zt&&_.map.isVideoTexture===!0&&Jt.getTransfer(_.map.colorSpace)===jt,decodeVideoTextureEmissive:Fe&&_.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(_.emissiveMap.colorSpace)===jt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===gn,flipSided:_.side===we,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:nt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&_.extensions.multiDraw===!0||ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Rt.vertexUv1s=l.has(1),Rt.vertexUv2s=l.has(2),Rt.vertexUv3s=l.has(3),l.clear(),Rt}function m(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)T.push(C),T.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(f(T,_),w(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function f(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function w(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function A(_){let T=d[_.type],C;if(T){let N=yn[T];C=ah.clone(N.uniforms)}else C=_.uniforms;return C}function y(_,T){let C=u.get(T);return C!==void 0?++C.usedTimes:(C=new gg(i,T,_,s),c.push(C),u.set(T,C)),C}function b(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function S(_){o.remove(_)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:A,acquireProgram:y,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:R}}function yg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Mg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Eh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ah(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,x,M,m,f){let w=i[t];return w===void 0?(w={id:h.id,object:h,geometry:d,material:x,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:m,group:f},i[t]=w):(w.id=h.id,w.object=h,w.geometry=d,w.material=x,w.materialVariant=a(h),w.groupOrder=M,w.renderOrder=h.renderOrder,w.z=m,w.group=f),t++,w}function l(h,d,x,M,m,f,w){w.reversedDepth===!0&&(m=-m);let A=o(h,d,x,M,m,f);x.transmission>0?n.push(A):x.transparent===!0?s.push(A):e.push(A)}function c(h,d,x,M,m,f){let w=o(h,d,x,M,m,f);x.transmission>0?n.unshift(w):x.transparent===!0?s.unshift(w):e.unshift(w)}function u(h,d){e.length>1&&e.sort(h||Mg),n.length>1&&n.sort(d||Eh),s.length>1&&s.sort(d||Eh)}function p(){for(let h=t,d=i.length;h<d;h++){let x=i[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:u}}function Sg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Ah,i.set(n,[a])):s>=r.length?(a=new Ah,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function bg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Vt};break;case"SpotLight":e={position:new P,direction:new P,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Tg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var wg=0;function Eg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ag(i){let t=new bg,e=Tg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new ie,a=new ie;function o(c){let u=0,p=0,h=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,x=0,M=0,m=0,f=0,w=0,A=0,y=0,b=0,S=0,R=0,_=0,T=0,C=0;c.sort(Eg);for(let L=0,O=c.length;L<O;L++){let I=c[L],k=I.color,W=I.intensity,Y=I.distance,et=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Jn?et=I.shadow.map.texture:et=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=k.r*W,p+=k.g*W,h+=k.b*W;else if(I.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(I.sh.coefficients[q],W);C++}else if(I.isSunLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,tt=e.get(I);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[x]=tt,n.sunShadowMap[x]=et;let It=Q.getViewportCount();for(let St=0;St<It;St++)n.sunShadowMatrix[M+St]=Q.getMatrix(St),n.sunShadowCascade[M+St]=Q._cascadeData[St];M+=It,x++}n.sun[d]=q,d++}else if(I.isDirectionalLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,tt=e.get(I);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.directionalShadow[m]=tt,n.directionalShadowMap[m]=et,n.directionalShadowMatrix[m]=I.shadow.matrix,b++}n.directional[m]=q,m++}else if(I.isSpotLight){let q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(k).multiplyScalar(W),q.distance=Y,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,n.spot[w]=q;let Q=I.shadow;if(I.map&&(n.spotLightMap[_]=I.map,_++,Q.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[w]=Q.matrix,I.castShadow){let tt=e.get(I);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.spotShadow[w]=tt,n.spotShadowMap[w]=et,R++}w++}else if(I.isRectAreaLight){let q=t.get(I);q.color.copy(k).multiplyScalar(W),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),n.rectArea[A]=q,A++}else if(I.isPointLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let Q=I.shadow,tt=e.get(I);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,tt.shadowCameraNear=Q.camera.near,tt.shadowCameraFar=Q.camera.far,n.pointShadow[f]=tt,n.pointShadowMap[f]=et,n.pointShadowMatrix[f]=I.shadow.matrix,S++}n.point[f]=q,f++}else if(I.isHemisphereLight){let q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(W),q.groundColor.copy(I.groundColor).multiplyScalar(W),n.hemi[y]=q,y++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=h;let N=n.hash;(N.sunLength!==d||N.directionalLength!==m||N.pointLength!==f||N.spotLength!==w||N.rectAreaLength!==A||N.hemiLength!==y||N.numSunShadows!==x||N.numDirectionalShadows!==b||N.numPointShadows!==S||N.numSpotShadows!==R||N.numSpotMaps!==_||N.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=m,n.spot.length=w,n.rectArea.length=A,n.point.length=f,n.hemi.length=y,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,N.sunLength=d,N.directionalLength=m,N.pointLength=f,N.spotLength=w,N.rectAreaLength=A,N.hemiLength=y,N.numSunShadows=x,N.numDirectionalShadows=b,N.numPointShadows=S,N.numSpotShadows=R,N.numSpotMaps=_,N.numLightProbes=C,n.version=wg++)}function l(c,u){let p=0,h=0,d=0,x=0,M=0,m=0,f=u.matrixWorldInverse;for(let w=0,A=c.length;w<A;w++){let y=c[w];if(y.isSunLight){let b=n.sun[p];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(f),p++}else if(y.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),h++}else if(y.isSpotLight){let b=n.spot[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),x++}else if(y.isRectAreaLight){let b=n.rectArea[M];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),a.identity(),r.copy(y.matrixWorld),r.premultiply(f),a.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),d++}else if(y.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:n}}function Rh(i){let t=new Ag(i),e=[],n=[],s=[];function r(h){p.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Rg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Rh(i),t.set(s,[o])):r>=a.length?(o=new Rh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Pg=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Lg=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Ch=new ie,Zs=new P,bl=new P;function Ug(i,t,e){let n=new Oi,s=new Tt,r=new Tt,a=new ce,o=new Xr,l=new Yr,c={},u=e.maxTextureSize,p={[Wn]:we,[we]:Wn,[gn]:gn},h=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:Cg,fragmentShader:Ig}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let x=new Ie;x.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new he(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Os;let f=this.type;this.render=function(S,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===bc&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Os);let T=i.getRenderTarget(),C=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),L=i.state;L.setBlending(_n),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let O=f!==this.type;O&&R.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(k=>k.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,k=S.length;I<k;I++){let W=S[I],Y=W.shadow;if(Y===void 0){Ft("WebGLShadowMap:",W,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let et=Y.getFrameExtents();s.multiply(et),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/et.x),s.x=r.x*et.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/et.y),s.y=r.y*et.y,Y.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=q,Y.map===null||O===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Wi){if(W.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Be(s.x,s.y,{format:Jn,type:on,minFilter:Te,magFilter:Te,generateMipmaps:!1}),Y.map.texture.name=W.name+".shadowMap",Y.map.depthTexture=new zn(s.x,s.y,Ze),Y.map.depthTexture.name=W.name+".shadowMapDepth",Y.map.depthTexture.format=dn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Me,Y.map.depthTexture.magFilter=Me}else W.isPointLight?(Y.map=new $a(s.x),Y.map.depthTexture=new Fr(s.x,an)):(Y.map=new Be(s.x,s.y),Y.map.depthTexture=new zn(s.x,s.y,an)),Y.map.depthTexture.name=W.name+".shadowMap",Y.map.depthTexture.format=dn,this.type===Os?(Y.map.depthTexture.compareFunction=q?Ja:qa,Y.map.depthTexture.minFilter=Te,Y.map.depthTexture.magFilter=Te):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Me,Y.map.depthTexture.magFilter=Me);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let Q=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();W.isPointLight!==!0&&Y.updateMatrices(W,_);for(let tt=0;tt<Q;tt++){let It=Y.getCamera(tt);if(W.isPointLight){let St=Y.camera,qt=Y.matrix,it=W.distance||St.far;it!==St.far&&(St.far=it,St.updateProjectionMatrix()),Zs.setFromMatrixPosition(W.matrixWorld),St.position.copy(Zs),bl.copy(St.position),bl.add(Pg[tt]),St.up.copy(Lg[tt]),St.lookAt(bl),St.updateMatrixWorld(),qt.makeTranslation(-Zs.x,-Zs.y,-Zs.z),Ch.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Ch,St.coordinateSystem,St.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,tt),i.clear();else{tt===0&&(i.setRenderTarget(Y.map),i.clear());let St=Y.getViewport(tt);a.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),L.viewport(a)}n=Y.getFrustum(tt),y(R,_,It,W,this.type)}Y.isPointLightShadow!==!0&&this.type===Wi&&w(Y,_),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(T,C,N)};function w(S,R){let _=t.update(M);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new Be(s.x,s.y,{format:Jn,type:on}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(R,null,_,h,M,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(R,null,_,d,M,null)}function A(S,R,_,T){let C=null,N=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)C=N;else if(C=_.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let L=C.uuid,O=R.uuid,I=c[L];I===void 0&&(I={},c[L]=I);let k=I[O];k===void 0&&(k=C.clone(),I[O]=k,R.addEventListener("dispose",b)),C=k}if(C.visible=R.visible,C.wireframe=R.wireframe,T===Wi?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:p[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let L=i.properties.get(C);L.light=_}return C}function y(S,R,_,T,C){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===Wi)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let O=t.update(S),I=S.material;if(Array.isArray(I)){let k=O.groups;for(let W=0,Y=k.length;W<Y;W++){let et=k[W],q=I[et.materialIndex];if(q&&q.visible){let Q=A(S,q,T,C);S.onBeforeShadow(i,S,R,_,O,Q,et),i.renderBufferDirect(_,null,O,Q,S,et),S.onAfterShadow(i,S,R,_,O,Q,et)}}}else if(I.visible){let k=A(S,I,T,C);S.onBeforeShadow(i,S,R,_,O,k,null),i.renderBufferDirect(_,null,O,k,S,null),S.onAfterShadow(i,S,R,_,O,k,null)}}let L=S.children;for(let O=0,I=L.length;O<I;O++)y(L[O],R,_,T,C)}function b(S){S.target.removeEventListener("dispose",b);for(let _ in c){let T=c[_],C=S.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function Ng(i,t){function e(){let D=!1,ut=new ce,$=null,dt=new ce(0,0,0,0);return{setMask:function(vt){$!==vt&&!D&&(i.colorMask(vt,vt,vt,vt),$=vt)},setLocked:function(vt){D=vt},setClear:function(vt,nt,Nt,Rt,re){re===!0&&(vt*=Rt,nt*=Rt,Nt*=Rt),ut.set(vt,nt,Nt,Rt),dt.equals(ut)===!1&&(i.clearColor(vt,nt,Nt,Rt),dt.copy(ut))},reset:function(){D=!1,$=null,dt.set(-1,0,0,0)}}}function n(){let D=!1,ut=!1,$=null,dt=null,vt=null;return{setReversed:function(nt){if(ut!==nt){let Nt=t.get("EXT_clip_control");nt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),ut=nt;let Rt=vt;vt=null,this.setClear(Rt)}},getReversed:function(){return ut},setTest:function(nt){nt?J(i.DEPTH_TEST):st(i.DEPTH_TEST)},setMask:function(nt){$!==nt&&!D&&(i.depthMask(nt),$=nt)},setFunc:function(nt){if(ut&&(nt=sh[nt]),dt!==nt){switch(nt){case br:i.depthFunc(i.NEVER);break;case Tr:i.depthFunc(i.ALWAYS);break;case wr:i.depthFunc(i.LESS);break;case Ci:i.depthFunc(i.LEQUAL);break;case Er:i.depthFunc(i.EQUAL);break;case Ar:i.depthFunc(i.GEQUAL);break;case Rr:i.depthFunc(i.GREATER);break;case Cr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=nt}},setLocked:function(nt){D=nt},setClear:function(nt){vt!==nt&&(vt=nt,ut&&(nt=1-nt),i.clearDepth(nt))},reset:function(){D=!1,$=null,dt=null,vt=null,ut=!1}}}function s(){let D=!1,ut=null,$=null,dt=null,vt=null,nt=null,Nt=null,Rt=null,re=null;return{setTest:function(Kt){D||(Kt?J(i.STENCIL_TEST):st(i.STENCIL_TEST))},setMask:function(Kt){ut!==Kt&&!D&&(i.stencilMask(Kt),ut=Kt)},setFunc:function(Kt,$e,ln){($!==Kt||dt!==$e||vt!==ln)&&(i.stencilFunc(Kt,$e,ln),$=Kt,dt=$e,vt=ln)},setOp:function(Kt,$e,ln){(nt!==Kt||Nt!==$e||Rt!==ln)&&(i.stencilOp(Kt,$e,ln),nt=Kt,Nt=$e,Rt=ln)},setLocked:function(Kt){D=Kt},setClear:function(Kt){re!==Kt&&(i.clearStencil(Kt),re=Kt)},reset:function(){D=!1,ut=null,$=null,dt=null,vt=null,nt=null,Nt=null,Rt=null,re=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},p={},h={},d=new WeakMap,x=[],M=null,m=!1,f=null,w=null,A=null,y=null,b=null,S=null,R=null,_=new Vt(0,0,0),T=0,C=!1,N=null,L=null,O=null,I=null,k=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,et=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=et>=1):q.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=et>=2);let Q=null,tt={},It=i.getParameter(i.SCISSOR_BOX),St=i.getParameter(i.VIEWPORT),qt=new ce().fromArray(It),it=new ce().fromArray(St);function at(D,ut,$,dt){let vt=new Uint8Array(4),nt=i.createTexture();i.bindTexture(D,nt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<$;Nt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(ut+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return nt}let z={};z[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),z[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),z[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(Ci),Xt(!1),ee(ko),J(i.CULL_FACE),At(_n);function J(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function st(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Ut(D,ut){return h[D]!==ut?(i.bindFramebuffer(D,ut),h[D]=ut,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ut),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function ft(D,ut){let $=x,dt=!1;if(D){$=d.get(ut),$===void 0&&($=[],d.set(ut,$));let vt=D.textures;if($.length!==vt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let nt=0,Nt=vt.length;nt<Nt;nt++)$[nt]=i.COLOR_ATTACHMENT0+nt;$.length=vt.length,dt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,dt=!0);dt&&i.drawBuffers($)}function zt(D){return M!==D?(i.useProgram(D),M=D,!0):!1}let ot={[ri]:i.FUNC_ADD,[wc]:i.FUNC_SUBTRACT,[Ec]:i.FUNC_REVERSE_SUBTRACT};ot[Ac]=i.MIN,ot[Rc]=i.MAX;let pt={[Cc]:i.ZERO,[Ic]:i.ONE,[Pc]:i.SRC_COLOR,[Wo]:i.SRC_ALPHA,[Oc]:i.SRC_ALPHA_SATURATE,[Dc]:i.DST_COLOR,[Uc]:i.DST_ALPHA,[Lc]:i.ONE_MINUS_SRC_COLOR,[Xo]:i.ONE_MINUS_SRC_ALPHA,[Fc]:i.ONE_MINUS_DST_COLOR,[Nc]:i.ONE_MINUS_DST_ALPHA,[Bc]:i.CONSTANT_COLOR,[zc]:i.ONE_MINUS_CONSTANT_COLOR,[kc]:i.CONSTANT_ALPHA,[Vc]:i.ONE_MINUS_CONSTANT_ALPHA};function At(D,ut,$,dt,vt,nt,Nt,Rt,re,Kt){if(D===_n){m===!0&&(st(i.BLEND),m=!1);return}if(m===!1&&(J(i.BLEND),m=!0),D!==Tc){if(D!==f||Kt!==C){if((w!==ri||b!==ri)&&(i.blendEquation(i.FUNC_ADD),w=ri,b=ri),Kt)switch(D){case Xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vo:i.blendFunc(i.ONE,i.ONE);break;case Go:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ho:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ot("WebGLState: Invalid blending: ",D);break}else switch(D){case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Go:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ho:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",D);break}A=null,y=null,S=null,R=null,_.set(0,0,0),T=0,f=D,C=Kt}return}vt=vt||ut,nt=nt||$,Nt=Nt||dt,(ut!==w||vt!==b)&&(i.blendEquationSeparate(ot[ut],ot[vt]),w=ut,b=vt),($!==A||dt!==y||nt!==S||Nt!==R)&&(i.blendFuncSeparate(pt[$],pt[dt],pt[nt],pt[Nt]),A=$,y=dt,S=nt,R=Nt),(Rt.equals(_)===!1||re!==T)&&(i.blendColor(Rt.r,Rt.g,Rt.b,re),_.copy(Rt),T=re),f=D,C=!1}function yt(D,ut){D.side===gn?st(i.CULL_FACE):J(i.CULL_FACE);let $=D.side===we;ut&&($=!$),Xt($),D.blending===Xi&&D.transparent===!1?At(_n):At(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let dt=D.stencilWrite;o.setTest(dt),dt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Fe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):st(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(D){N!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),N=D)}function ee(D){D!==Mc?(J(i.CULL_FACE),D!==L&&(D===ko?i.cullFace(i.BACK):D===Sc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):st(i.CULL_FACE),L=D}function ve(D){D!==O&&(Y&&i.lineWidth(D),O=D)}function Fe(D,ut,$){D?(J(i.POLYGON_OFFSET_FILL),(I!==ut||k!==$)&&(I=ut,k=$,a.getReversed()&&(ut=-ut),i.polygonOffset(ut,$))):st(i.POLYGON_OFFSET_FILL)}function ue(D){D?J(i.SCISSOR_TEST):st(i.SCISSOR_TEST)}function fe(D){D===void 0&&(D=i.TEXTURE0+W-1),Q!==D&&(i.activeTexture(D),Q=D)}function F(D,ut,$){$===void 0&&(Q===null?$=i.TEXTURE0+W-1:$=Q);let dt=tt[$];dt===void 0&&(dt={type:void 0,texture:void 0},tt[$]=dt),(dt.type!==D||dt.texture!==ut)&&(Q!==$&&(i.activeTexture($),Q=$),i.bindTexture(D,ut||z[D]),dt.type=D,dt.texture=ut)}function Ee(){let D=tt[Q];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function te(){try{i.compressedTexImage2D(...arguments)}catch(D){Ot("WebGLState:",D)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(D){Ot("WebGLState:",D)}}function g(){try{i.texSubImage2D(...arguments)}catch(D){Ot("WebGLState:",D)}}function B(){try{i.texSubImage3D(...arguments)}catch(D){Ot("WebGLState:",D)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Ot("WebGLState:",D)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Ot("WebGLState:",D)}}function rt(){try{i.texStorage2D(...arguments)}catch(D){Ot("WebGLState:",D)}}function lt(){try{i.texStorage3D(...arguments)}catch(D){Ot("WebGLState:",D)}}function K(){try{i.texImage2D(...arguments)}catch(D){Ot("WebGLState:",D)}}function j(){try{i.texImage3D(...arguments)}catch(D){Ot("WebGLState:",D)}}function ct(D){return p[D]!==void 0?p[D]:i.getParameter(D)}function Pt(D,ut){p[D]!==ut&&(i.pixelStorei(D,ut),p[D]=ut)}function mt(D){qt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),qt.copy(D))}function ht(D){it.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),it.copy(D))}function Lt(D,ut){let $=c.get(ut);$===void 0&&($=new WeakMap,c.set(ut,$));let dt=$.get(D);dt===void 0&&(dt=i.getUniformBlockIndex(ut,D.name),$.set(D,dt))}function Dt(D,ut){let dt=c.get(ut).get(D);l.get(ut)!==dt&&(i.uniformBlockBinding(ut,dt,D.__bindingPointIndex),l.set(ut,dt))}function kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},Q=null,tt={},h={},d=new WeakMap,x=[],M=null,m=!1,f=null,w=null,A=null,y=null,b=null,S=null,R=null,_=new Vt(0,0,0),T=0,C=!1,N=null,L=null,O=null,I=null,k=null,qt.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:st,bindFramebuffer:Ut,drawBuffers:ft,useProgram:zt,setBlending:At,setMaterial:yt,setFlipSided:Xt,setCullFace:ee,setLineWidth:ve,setPolygonOffset:Fe,setScissorTest:ue,activeTexture:fe,bindTexture:F,unbindTexture:Ee,compressedTexImage2D:te,compressedTexImage3D:E,texImage2D:K,texImage3D:j,pixelStorei:Pt,getParameter:ct,updateUBOMapping:Lt,uniformBlockBinding:Dt,texStorage2D:rt,texStorage3D:lt,texSubImage2D:g,texSubImage3D:B,compressedTexSubImage2D:H,compressedTexSubImage3D:Z,scissor:mt,viewport:ht,reset:kt}}function Dg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,u=new WeakMap,p=new Set,h,d=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,g){return x?new OffscreenCanvas(E,g):Pi("canvas")}function m(E,g,B){let H=1,Z=te(E);if((Z.width>B||Z.height>B)&&(H=B/Math.max(Z.width,Z.height)),H<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let rt=Math.floor(H*Z.width),lt=Math.floor(H*Z.height);h===void 0&&(h=M(rt,lt));let K=g?M(rt,lt):h;return K.width=rt,K.height=lt,K.getContext("2d").drawImage(E,0,0,rt,lt),Ft("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+rt+"x"+lt+")."),K}else return"data"in E&&Ft("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function f(E){return E.generateMipmaps}function w(E){i.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(E,g,B,H,Z,rt=!1){if(E!==null){if(i[E]!==void 0)return i[E];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let lt;H&&(lt=t.get("EXT_texture_norm16"),lt||Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=g;if(g===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8),B===i.UNSIGNED_SHORT&&lt&&(K=lt.R16_EXT),B===i.SHORT&&lt&&(K=lt.R16_SNORM_EXT)),g===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),g===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8),B===i.UNSIGNED_SHORT&&lt&&(K=lt.RG16_EXT),B===i.SHORT&&lt&&(K=lt.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),g===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGB8UI),B===i.UNSIGNED_SHORT&&(K=i.RGB16UI),B===i.UNSIGNED_INT&&(K=i.RGB32UI),B===i.BYTE&&(K=i.RGB8I),B===i.SHORT&&(K=i.RGB16I),B===i.INT&&(K=i.RGB32I)),g===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),B===i.UNSIGNED_INT&&(K=i.RGBA32UI),B===i.BYTE&&(K=i.RGBA8I),B===i.SHORT&&(K=i.RGBA16I),B===i.INT&&(K=i.RGBA32I)),g===i.RGB&&(B===i.UNSIGNED_SHORT&&lt&&(K=lt.RGB16_EXT),B===i.SHORT&&lt&&(K=lt.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),g===i.RGBA){let j=rt?fs:Jt.getTransfer(Z);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=j===jt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&lt&&(K=lt.RGBA16_EXT),B===i.SHORT&&lt&&(K=lt.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function b(E,g){let B;return E?g===null||g===an||g===qi?B=i.DEPTH24_STENCIL8:g===Ze?B=i.DEPTH32F_STENCIL8:g===Yi&&(B=i.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===an||g===qi?B=i.DEPTH_COMPONENT24:g===Ze?B=i.DEPTH_COMPONENT32F:g===Yi&&(B=i.DEPTH_COMPONENT16),B}function S(E,g){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==Me&&E.minFilter!==Te?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function R(E){let g=E.target;g.removeEventListener("dispose",R),T(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&p.delete(g)}function _(E){let g=E.target;g.removeEventListener("dispose",_),N(g)}function T(E){let g=n.get(E);if(g.__webglInit===void 0)return;let B=E.source,H=d.get(B);if(H){let Z=H[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(E),Object.keys(H).length===0&&d.delete(B)}n.remove(E)}function C(E){let g=n.get(E);i.deleteTexture(g.__webglTexture);let B=E.source,H=d.get(B);delete H[g.__cacheKey],a.memory.textures--}function N(E){let g=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let Z=0;Z<g.__webglFramebuffer[H].length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[H][Z]);else i.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)i.deleteFramebuffer(g.__webglFramebuffer[H]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let B=E.textures;for(let H=0,Z=B.length;H<Z;H++){let rt=n.get(B[H]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),a.memory.textures--),n.remove(B[H])}n.remove(E)}let L=0;function O(){L=0}function I(){return L}function k(E){L=E}function W(){let E=L;return E>=s.maxTextures&&Ft("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,E}function Y(E){let g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function et(E,g){let B=n.get(E);if(E.isVideoTexture&&F(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){let H=E.image;if(H===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{st(B,E,g);return}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+g)}function q(E,g){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){st(B,E,g);return}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+g)}function Q(E,g){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){st(B,E,g);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+g)}function tt(E,g){let B=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&B.__version!==E.version){Ut(B,E,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+g)}let It={[Ir]:i.REPEAT,[un]:i.CLAMP_TO_EDGE,[Pr]:i.MIRRORED_REPEAT},St={[Me]:i.NEAREST,[Wc]:i.NEAREST_MIPMAP_NEAREST,[ks]:i.NEAREST_MIPMAP_LINEAR,[Te]:i.LINEAR,[ca]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},qt={[Jc]:i.NEVER,[Qc]:i.ALWAYS,[Zc]:i.LESS,[qa]:i.LEQUAL,[Kc]:i.EQUAL,[Ja]:i.GEQUAL,[$c]:i.GREATER,[jc]:i.NOTEQUAL};function it(E,g){if(g.type===Ze&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Te||g.magFilter===ca||g.magFilter===ks||g.magFilter===Yn||g.minFilter===Te||g.minFilter===ca||g.minFilter===ks||g.minFilter===Yn)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,It[g.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,It[g.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,It[g.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,St[g.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,St[g.minFilter]),g.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,qt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Me||g.minFilter!==ks&&g.minFilter!==Yn||g.type===Ze&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function at(E,g){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",R));let H=g.source,Z=d.get(H);Z===void 0&&(Z={},d.set(H,Z));let rt=Y(g);if(rt!==E.__cacheKey){Z[rt]===void 0&&(Z[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[rt].usedTimes++;let lt=Z[E.__cacheKey];lt!==void 0&&(Z[E.__cacheKey].usedTimes--,lt.usedTimes===0&&C(g)),E.__cacheKey=rt,E.__webglTexture=Z[rt].texture}return B}function z(E,g,B){return Math.floor(Math.floor(E/B)/g)}function J(E,g,B,H){let rt=E.updateRanges;if(rt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,B,H,g.data);else{rt.sort((Pt,mt)=>Pt.start-mt.start);let lt=0;for(let Pt=1;Pt<rt.length;Pt++){let mt=rt[lt],ht=rt[Pt],Lt=mt.start+mt.count,Dt=z(ht.start,g.width,4),kt=z(mt.start,g.width,4);ht.start<=Lt+1&&Dt===kt&&z(ht.start+ht.count-1,g.width,4)===Dt?mt.count=Math.max(mt.count,ht.start+ht.count-mt.start):(++lt,rt[lt]=ht)}rt.length=lt+1;let K=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Pt=0,mt=rt.length;Pt<mt;Pt++){let ht=rt[Pt],Lt=Math.floor(ht.start/4),Dt=Math.ceil(ht.count/4),kt=Lt%g.width,D=Math.floor(Lt/g.width),ut=Dt,$=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,kt),e.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,kt,D,ut,$,B,H,g.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,ct)}}function st(E,g,B){let H=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=i.TEXTURE_3D);let Z=at(E,g),rt=g.source;e.bindTexture(H,E.__webglTexture,i.TEXTURE0+B);let lt=n.get(rt);if(rt.version!==lt.__version||Z===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let $=Jt.getPrimaries(Jt.workingColorSpace),dt=g.colorSpace===Rn?null:Jt.getPrimaries(g.colorSpace),vt=g.colorSpace===Rn||$===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let j=m(g.image,!1,s.maxTextureSize);j=Ee(g,j);let ct=r.convert(g.format,g.colorSpace),Pt=r.convert(g.type),mt=y(g.internalFormat,ct,Pt,g.normalized,g.colorSpace,g.isVideoTexture);it(H,g);let ht,Lt=g.mipmaps,Dt=g.isVideoTexture!==!0,kt=lt.__version===void 0||Z===!0,D=rt.dataReady,ut=S(g,j);if(g.isDepthTexture)mt=b(g.format===qn,g.type),kt&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,mt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,mt,j.width,j.height,0,ct,Pt,null));else if(g.isDataTexture)if(Lt.length>0){Dt&&kt&&e.texStorage2D(i.TEXTURE_2D,ut,mt,Lt[0].width,Lt[0].height);for(let $=0,dt=Lt.length;$<dt;$++)ht=Lt[$],Dt?D&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ht.width,ht.height,ct,Pt,ht.data):e.texImage2D(i.TEXTURE_2D,$,mt,ht.width,ht.height,0,ct,Pt,ht.data);g.generateMipmaps=!1}else Dt?(kt&&e.texStorage2D(i.TEXTURE_2D,ut,mt,j.width,j.height),D&&J(g,j,ct,Pt)):e.texImage2D(i.TEXTURE_2D,0,mt,j.width,j.height,0,ct,Pt,j.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Dt&&kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,mt,Lt[0].width,Lt[0].height,j.depth);for(let $=0,dt=Lt.length;$<dt;$++)if(ht=Lt[$],g.format!==Ke)if(ct!==null)if(Dt){if(D)if(g.layerUpdates.size>0){let vt=dl(ht.width,ht.height,g.format,g.type);for(let nt of g.layerUpdates){let Nt=ht.data.subarray(nt*vt/ht.data.BYTES_PER_ELEMENT,(nt+1)*vt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,nt,ht.width,ht.height,1,ct,Nt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ht.width,ht.height,j.depth,ct,ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,mt,ht.width,ht.height,j.depth,0,ht.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ht.width,ht.height,j.depth,ct,Pt,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,mt,ht.width,ht.height,j.depth,0,ct,Pt,ht.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Dt&&kt&&e.texStorage2D(i.TEXTURE_2D,ut,mt,Lt[0].width,Lt[0].height);for(let $=0,dt=Lt.length;$<dt;$++)ht=Lt[$],g.format!==Ke?ct!==null?Dt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,ht.width,ht.height,ct,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,$,mt,ht.width,ht.height,0,ht.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?D&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ht.width,ht.height,ct,Pt,ht.data):e.texImage2D(i.TEXTURE_2D,$,mt,ht.width,ht.height,0,ct,Pt,ht.data)}else if(g.isDataArrayTexture)if(Dt){if(kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,mt,j.width,j.height,j.depth),D)if(g.layerUpdates.size>0){let $=dl(j.width,j.height,g.format,g.type);for(let dt of g.layerUpdates){let vt=j.data.subarray(dt*$/j.data.BYTES_PER_ELEMENT,(dt+1)*$/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,dt,j.width,j.height,1,ct,Pt,vt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ct,Pt,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,mt,j.width,j.height,j.depth,0,ct,Pt,j.data);else if(g.isData3DTexture)Dt?(kt&&e.texStorage3D(i.TEXTURE_3D,ut,mt,j.width,j.height,j.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ct,Pt,j.data)):e.texImage3D(i.TEXTURE_3D,0,mt,j.width,j.height,j.depth,0,ct,Pt,j.data);else if(g.isFramebufferTexture){if(kt)if(Dt)e.texStorage2D(i.TEXTURE_2D,ut,mt,j.width,j.height);else{let $=j.width,dt=j.height;for(let vt=0;vt<ut;vt++)e.texImage2D(i.TEXTURE_2D,vt,mt,$,dt,0,ct,Pt,null),$>>=1,dt>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),j.parentNode!==$){$.appendChild(j),p.add(g),$.onpaint=dt=>{let vt=dt.changedElements;for(let nt of p)vt.includes(nt.image)&&(nt.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let vt=i.RGBA,nt=i.RGBA,Nt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,vt,nt,Nt,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Lt.length>0){if(Dt&&kt){let $=te(Lt[0]);e.texStorage2D(i.TEXTURE_2D,ut,mt,$.width,$.height)}for(let $=0,dt=Lt.length;$<dt;$++)ht=Lt[$],Dt?D&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ct,Pt,ht):e.texImage2D(i.TEXTURE_2D,$,mt,ct,Pt,ht);g.generateMipmaps=!1}else if(Dt){if(kt){let $=te(j);e.texStorage2D(i.TEXTURE_2D,ut,mt,$.width,$.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,Pt,j)}else e.texImage2D(i.TEXTURE_2D,0,mt,ct,Pt,j);f(g)&&w(H),lt.__version=rt.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Ut(E,g,B){if(g.image.length!==6)return;let H=at(E,g),Z=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+B);let rt=n.get(Z);if(Z.version!==rt.__version||H===!0){e.activeTexture(i.TEXTURE0+B);let lt=Jt.getPrimaries(Jt.workingColorSpace),K=g.colorSpace===Rn?null:Jt.getPrimaries(g.colorSpace),j=g.colorSpace===Rn||lt===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ct=g.isCompressedTexture||g.image[0].isCompressedTexture,Pt=g.image[0]&&g.image[0].isDataTexture,mt=[];for(let nt=0;nt<6;nt++)!ct&&!Pt?mt[nt]=m(g.image[nt],!0,s.maxCubemapSize):mt[nt]=Pt?g.image[nt].image:g.image[nt],mt[nt]=Ee(g,mt[nt]);let ht=mt[0],Lt=r.convert(g.format,g.colorSpace),Dt=r.convert(g.type),kt=y(g.internalFormat,Lt,Dt,g.normalized,g.colorSpace),D=g.isVideoTexture!==!0,ut=rt.__version===void 0||H===!0,$=Z.dataReady,dt=S(g,ht);it(i.TEXTURE_CUBE_MAP,g);let vt;if(ct){D&&ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,kt,ht.width,ht.height);for(let nt=0;nt<6;nt++){vt=mt[nt].mipmaps;for(let Nt=0;Nt<vt.length;Nt++){let Rt=vt[Nt];g.format!==Ke?Lt!==null?D?$&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt,0,0,Rt.width,Rt.height,Lt,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt,kt,Rt.width,Rt.height,0,Rt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt,0,0,Rt.width,Rt.height,Lt,Dt,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt,kt,Rt.width,Rt.height,0,Lt,Dt,Rt.data)}}}else{if(vt=g.mipmaps,D&&ut){vt.length>0&&dt++;let nt=te(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,kt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Pt){D?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,mt[nt].width,mt[nt].height,Lt,Dt,mt[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,kt,mt[nt].width,mt[nt].height,0,Lt,Dt,mt[nt].data);for(let Nt=0;Nt<vt.length;Nt++){let re=vt[Nt].image[nt].image;D?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt+1,0,0,re.width,re.height,Lt,Dt,re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt+1,kt,re.width,re.height,0,Lt,Dt,re.data)}}else{D?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Lt,Dt,mt[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,kt,Lt,Dt,mt[nt]);for(let Nt=0;Nt<vt.length;Nt++){let Rt=vt[Nt];D?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt+1,0,0,Lt,Dt,Rt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt+1,kt,Lt,Dt,Rt.image[nt])}}}f(g)&&w(i.TEXTURE_CUBE_MAP),rt.__version=Z.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function ft(E,g,B,H,Z,rt){let lt=r.convert(B.format,B.colorSpace),K=r.convert(B.type),j=y(B.internalFormat,lt,K,B.normalized,B.colorSpace),ct=n.get(g),Pt=n.get(B);if(Pt.__renderTarget=g,!ct.__hasExternalTextures){let mt=Math.max(1,g.width>>rt),ht=Math.max(1,g.height>>rt);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,rt,j,mt,ht,g.depth,0,lt,K,null):e.texImage2D(Z,rt,j,mt,ht,0,lt,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),fe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,Z,Pt.__webglTexture,0,ue(g)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,Z,Pt.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(E,g,B){if(i.bindRenderbuffer(i.RENDERBUFFER,E),g.depthBuffer){let H=g.depthTexture,Z=H&&H.isDepthTexture?H.type:null,rt=b(g.stencilBuffer,Z),lt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;fe(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(g),rt,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(g),rt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,rt,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,E)}else{let H=g.textures;for(let Z=0;Z<H.length;Z++){let rt=H[Z],lt=r.convert(rt.format,rt.colorSpace),K=r.convert(rt.type),j=y(rt.internalFormat,lt,K,rt.normalized,rt.colorSpace);fe(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(g),j,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(g),j,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,j,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(E,g,B){let H=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(g.depthTexture);if(Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),H){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),it(i.TEXTURE_CUBE_MAP,g.depthTexture);let ct=r.convert(g.depthTexture.format),Pt=r.convert(g.depthTexture.type),mt;g.depthTexture.format===dn?mt=i.DEPTH_COMPONENT24:g.depthTexture.format===qn&&(mt=i.DEPTH24_STENCIL8);for(let ht=0;ht<6;ht++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,mt,g.width,g.height,0,ct,Pt,null)}}else et(g.depthTexture,0);let rt=Z.__webglTexture,lt=ue(g),K=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,j=g.depthTexture.format===qn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===dn)fe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,rt,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,j,K,rt,0);else if(g.depthTexture.format===qn)fe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,rt,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,j,K,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pt(E){let g=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){let H=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),H){let Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,H.removeEventListener("dispose",Z)};H.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=H}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let H=0;H<6;H++)ot(g.__webglFramebuffer[H],E,H);else{let H=E.texture.mipmaps;H&&H.length>0?ot(g.__webglFramebuffer[0],E,0):ot(g.__webglFramebuffer,E,0)}else if(B){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]===void 0)g.__webglDepthbuffer[H]=i.createRenderbuffer(),zt(g.__webglDepthbuffer[H],E,!1);else{let Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=g.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,rt)}}else{let H=E.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),zt(g.__webglDepthbuffer,E,!1);else{let Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,rt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(E,g,B){let H=n.get(E);g!==void 0&&ft(H.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&pt(E)}function yt(E){let g=E.texture,B=n.get(E),H=n.get(g);E.addEventListener("dispose",_);let Z=E.textures,rt=E.isWebGLCubeRenderTarget===!0,lt=Z.length>1;if(lt||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=g.version,a.memory.textures++),rt){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let j=0;j<g.mipmaps.length;j++)B.__webglFramebuffer[K][j]=i.createFramebuffer()}else B.__webglFramebuffer[K]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<g.mipmaps.length;K++)B.__webglFramebuffer[K]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(lt)for(let K=0,j=Z.length;K<j;K++){let ct=n.get(Z[K]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&fe(E)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<Z.length;K++){let j=Z[K];B.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[K]);let ct=r.convert(j.format,j.colorSpace),Pt=r.convert(j.type),mt=y(j.internalFormat,ct,Pt,j.normalized,j.colorSpace,E.isXRRenderTarget===!0),ht=ue(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,mt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,B.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(B.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),it(i.TEXTURE_CUBE_MAP,g);for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0)for(let j=0;j<g.mipmaps.length;j++)ft(B.__webglFramebuffer[K][j],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else ft(B.__webglFramebuffer[K],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);f(g)&&w(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let K=0,j=Z.length;K<j;K++){let ct=Z[K],Pt=n.get(ct),mt=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(mt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,Pt.__webglTexture),it(mt,ct),ft(B.__webglFramebuffer,E,ct,i.COLOR_ATTACHMENT0+K,mt,0),f(ct)&&w(mt)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(K=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,H.__webglTexture),it(K,g),g.mipmaps&&g.mipmaps.length>0)for(let j=0;j<g.mipmaps.length;j++)ft(B.__webglFramebuffer[j],E,g,i.COLOR_ATTACHMENT0,K,j);else ft(B.__webglFramebuffer,E,g,i.COLOR_ATTACHMENT0,K,0);f(g)&&w(K),e.unbindTexture()}E.depthBuffer&&pt(E)}function Xt(E){let g=E.textures;for(let B=0,H=g.length;B<H;B++){let Z=g[B];if(f(Z)){let rt=A(E),lt=n.get(Z).__webglTexture;e.bindTexture(rt,lt),w(rt),e.unbindTexture()}}}let ee=[],ve=[];function Fe(E){if(E.samples>0){if(fe(E)===!1){let g=E.textures,B=E.width,H=E.height,Z=i.COLOR_BUFFER_BIT,rt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=n.get(E),K=g.length>1;if(K)for(let ct=0;ct<g.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);let j=E.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let ct=0;ct<g.length;ct++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,lt.__webglColorRenderbuffer[ct]);let Pt=n.get(g[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pt,0)}i.blitFramebuffer(0,0,B,H,0,0,B,H,Z,i.NEAREST),l===!0&&(ee.length=0,ve.length=0,ee.push(i.COLOR_ATTACHMENT0+ct),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(ee.push(rt),ve.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ve)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let ct=0;ct<g.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,lt.__webglColorRenderbuffer[ct]);let Pt=n.get(g[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,Pt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let g=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ue(E){return Math.min(s.maxSamples,E.samples)}function fe(E){let g=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function F(E){let g=a.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function Ee(E,g){let B=E.colorSpace,H=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==ds&&B!==Rn&&(Jt.getTransfer(B)===jt?(H!==Ke||Z!==ze)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",B)),g}function te(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=O,this.getTextureUnits=I,this.setTextureUnits=k,this.setTexture2D=et,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=tt,this.rebindTextures=At,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Fg(i,t){function e(n,s=Rn){let r,a=Jt.getTransfer(s);if(n===ze)return i.UNSIGNED_BYTE;if(n===ua)return i.UNSIGNED_SHORT_4_4_4_4;if(n===da)return i.UNSIGNED_SHORT_5_5_5_1;if(n===el)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qo)return i.BYTE;if(n===tl)return i.SHORT;if(n===Yi)return i.UNSIGNED_SHORT;if(n===ha)return i.INT;if(n===an)return i.UNSIGNED_INT;if(n===Ze)return i.FLOAT;if(n===on)return i.HALF_FLOAT;if(n===il)return i.ALPHA;if(n===sl)return i.RGB;if(n===Ke)return i.RGBA;if(n===dn)return i.DEPTH_COMPONENT;if(n===qn)return i.DEPTH_STENCIL;if(n===fa)return i.RED;if(n===pa)return i.RED_INTEGER;if(n===Jn)return i.RG;if(n===ma)return i.RG_INTEGER;if(n===ga)return i.RGBA_INTEGER;if(n===Vs||n===Gs||n===Hs||n===Ws)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_a||n===xa||n===va||n===ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ma||n===Sa||n===ba||n===Ta||n===wa||n===Xs||n===Ea)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ma||n===Sa)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ba)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ta)return r.COMPRESSED_R11_EAC;if(n===wa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Xs)return r.COMPRESSED_RG11_EAC;if(n===Ea)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Aa||n===Ra||n===Ca||n===Ia||n===Pa||n===La||n===Ua||n===Na||n===Da||n===Fa||n===Oa||n===Ba||n===za||n===ka)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Aa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ra)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ca)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ia)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===La)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Da)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ba)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===za)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ka)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Va||n===Ga||n===Ha)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Va)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ga)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wa||n===Xa||n===Ys||n===Ya)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ys)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Og=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Pl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ss(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new He({vertexShader:Og,fragmentShader:Bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new he(new si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ll=class extends fn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,p=null,h=null,d=null,x=null,M=typeof XRWebGLBinding<"u",m=new Pl,f={},w=e.getContextAttributes(),A=null,y=null,b=[],S=[],R=new Tt,_=null,T=null,C=new Ne;C.viewport=new ce;let N=new Ne;N.viewport=new ce;let L=[C,N],O=new sa,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let J=b[z];return J===void 0&&(J=new Fi,b[z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(z){let J=b[z];return J===void 0&&(J=new Fi,b[z]=J),J.getGripSpace()},this.getHand=function(z){let J=b[z];return J===void 0&&(J=new Fi,b[z]=J),J.getHandSpace()};function W(z){let J=S.indexOf(z.inputSource);if(J===-1)return;let st=b[J];st!==void 0&&(st.update(z.inputSource,z.frame,c||a),st.dispatchEvent({type:z.type,data:z.inputSource}))}function Y(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",et);for(let z=0;z<b.length;z++){let J=S[z];J!==null&&(S[z]=null,b[z].disconnect(J))}I=null,k=null,m.reset();for(let z in f)delete f[z];if(t.setRenderTarget(A),d=null,h=null,p=null,s=null,y=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(R.width,R.height,!1),T!==null){let z=T.camera;z.fov=T.fov,z.zoom=T.zoom,z.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",et),w.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,Ut=null,ft=null;w.depth&&(ft=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=w.stencil?qn:dn,Ut=w.stencil?qi:an);let zt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};p=this.getBinding(),h=p.createProjectionLayer(zt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Be(h.textureWidth,h.textureHeight,{format:Ke,type:ze,depthTexture:new zn(h.textureWidth,h.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let st={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Be(d.framebufferWidth,d.framebufferHeight,{format:Ke,type:ze,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(z){for(let J=0;J<z.removed.length;J++){let st=z.removed[J],Ut=S.indexOf(st);Ut>=0&&(S[Ut]=null,b[Ut].disconnect(st))}for(let J=0;J<z.added.length;J++){let st=z.added[J],Ut=S.indexOf(st);if(Ut===-1){for(let zt=0;zt<b.length;zt++)if(zt>=S.length){S.push(st),Ut=zt;break}else if(S[zt]===null){S[zt]=st,Ut=zt;break}if(Ut===-1)break}let ft=b[Ut];ft&&ft.connect(st)}}let q=new P,Q=new P;function tt(z,J,st){q.setFromMatrixPosition(J.matrixWorld),Q.setFromMatrixPosition(st.matrixWorld);let Ut=q.distanceTo(Q),ft=J.projectionMatrix.elements,zt=st.projectionMatrix.elements,ot=ft[14]/(ft[10]-1),pt=ft[14]/(ft[10]+1),At=(ft[9]+1)/ft[5],yt=(ft[9]-1)/ft[5],Xt=(ft[8]-1)/ft[0],ee=(zt[8]+1)/zt[0],ve=ot*Xt,Fe=ot*ee,ue=Ut/(-Xt+ee),fe=ue*-Xt;if(J.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(fe),z.translateZ(ue),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),ft[10]===-1)z.projectionMatrix.copy(J.projectionMatrix),z.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let F=ot+ue,Ee=pt+ue,te=ve-fe,E=Fe+(Ut-fe),g=At*pt/Ee*F,B=yt*pt/Ee*F;z.projectionMatrix.makePerspective(te,E,g,B,F,Ee),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function It(z,J){J===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(J.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let J=z.near,st=z.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(st=m.depthFar)),O.near=N.near=C.near=J,O.far=N.far=C.far=st,(I!==O.near||k!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),I=O.near,k=O.far),O.layers.mask=z.layers.mask|6,C.layers.mask=O.layers.mask&-5,N.layers.mask=O.layers.mask&-3;let Ut=z.parent,ft=O.cameras;It(O,Ut);for(let zt=0;zt<ft.length;zt++)It(ft[zt],Ut);ft.length===2?tt(O,C,N):O.projectionMatrix.copy(C.projectionMatrix),T===null&&z.isPerspectiveCamera&&(T={camera:z,fov:z.fov,zoom:z.zoom}),St(z,O,Ut)};function St(z,J,st){st===null?z.matrix.copy(J.matrixWorld):(z.matrix.copy(st.matrixWorld),z.matrix.invert(),z.matrix.multiply(J.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(J.projectionMatrix),z.projectionMatrixInverse.copy(J.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ui*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(z){l=z,h!==null&&(h.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(z){return f[z]};let qt=null;function it(z,J){if(u=J.getViewerPose(c||a),x=J,u!==null){let st=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Ut=!1;st.length!==O.cameras.length&&(O.cameras.length=0,Ut=!0);for(let pt=0;pt<st.length;pt++){let At=st[pt],yt=null;if(d!==null)yt=d.getViewport(At);else{let ee=p.getViewSubImage(h,At);yt=ee.viewport,pt===0&&(t.setRenderTargetTextures(y,ee.colorTexture,ee.depthStencilTexture),t.setRenderTarget(y))}let Xt=L[pt];Xt===void 0&&(Xt=new Ne,Xt.layers.enable(pt),Xt.viewport=new ce,L[pt]=Xt),Xt.matrix.fromArray(At.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(At.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(yt.x,yt.y,yt.width,yt.height),pt===0&&(O.matrix.copy(Xt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ut===!0&&O.cameras.push(Xt)}let ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=n.getBinding();let pt=p.getDepthInformation(st[0]);pt&&pt.isValid&&pt.texture&&m.init(pt,s.renderState)}if(ft&&ft.includes("camera-access")&&M){t.state.unbindTexture(),p=n.getBinding();for(let pt=0;pt<st.length;pt++){let At=st[pt].camera;if(At){let yt=f[At];yt||(yt=new Ss,f[At]=yt);let Xt=p.getCameraImage(At);yt.sourceTexture=Xt}}}}for(let st=0;st<b.length;st++){let Ut=S[st],ft=b[st];Ut!==null&&ft!==void 0&&ft.update(Ut,J,c||a)}qt&&qt(z,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),x=null}let at=new Ih;at.setAnimationLoop(it),this.setAnimationLoop=function(z){qt=z},this.dispose=function(){}}},zg=new ie,Fh=new Bt;Fh.set(-1,0,0,0,1,0,0,0,1);function kg(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,cl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,w,A,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),p(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&d(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),x(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,w,A):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===we&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===we&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let w=t.get(f),A=w.envMap,y=w.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(zg.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Fh),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,A){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=A*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===we&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){let w=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let S=b.program;n.uniformBlockBinding(y,S)}function c(y,b){let S=s[y.id];S===void 0&&(m(y),S=u(y),s[y.id]=S,y.addEventListener("dispose",w));let R=b.program;n.updateUBOMapping(y,R);let _=t.render.frame;r[y.id]!==_&&(h(y),r[y.id]=_)}function u(y){let b=p();y.__bindingPointIndex=b;let S=i.createBuffer(),R=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function p(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let b=s[y.id],S=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let _=0,T=S.length;_<T;_++){let C=S[_];if(Array.isArray(C))for(let N=0,L=C.length;N<L;N++)d(C[N],_,N,R);else d(C,_,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,b,S,R){if(M(y,b,S,R)===!0){let _=y.__offset,T=y.value;if(Array.isArray(T)){let C=0;for(let N=0;N<T.length;N++){let L=T[N],O=f(L);x(L,y.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(T,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function x(y,b,S){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,S)}function M(y,b,S,R){let _=y.value,T=b+"_"+S;if(R[T]===void 0)return typeof _=="number"||typeof _=="boolean"?R[T]=_:ArrayBuffer.isView(_)?R[T]=_.slice():R[T]=_.clone(),!0;{let C=R[T];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return R[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(y){let b=y.uniforms,S=0,R=16;for(let T=0,C=b.length;T<C;T++){let N=Array.isArray(b[T])?b[T]:[b[T]];for(let L=0,O=N.length;L<O;L++){let I=N[L],k=Array.isArray(I.value)?I.value:[I.value];for(let W=0,Y=k.length;W<Y;W++){let et=k[W],q=f(et),Q=S%R,tt=Q%q.boundary,It=Q+tt;S+=tt,It!==0&&R-It<q.storage&&(S+=R-It),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=q.storage}}}let _=S%R;return _>0&&(S+=R-_),y.__size=S,y.__cache={},this}function f(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Ft("WebGLRenderer: Unsupported uniform value type.",y),b}function w(y){let b=y.target;b.removeEventListener("dispose",w);let S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function A(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var Gg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vn=null;function Hg(){return vn===null&&(vn=new xs(Gg,16,16,Jn,on),vn.name="DFG_LUT",vn.minFilter=Te,vn.magFilter=Te,vn.wrapS=un,vn.wrapT=un,vn.generateMipmaps=!1,vn.needsUpdate=!0),vn}var ja=class{constructor(t={}){let{canvas:e=eh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:d=ze}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let M=d,m=new Set([ga,ma,pa]),f=new Set([ze,an,Yi,qi,ua,da]),w=new Uint32Array(4),A=new Int32Array(4),y=new P,b=null,S=null,R=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,L=null,O=null,I=null,k=null;this._outputColorSpace=be;let W=0,Y=0,et=null,q=-1,Q=null,tt=new ce,It=new ce,St=null,qt=new Vt(0),it=0,at=e.width,z=e.height,J=1,st=null,Ut=null,ft=new ce(0,0,at,z),zt=new ce(0,0,at,z),ot=!1,pt=new Oi,At=!1,yt=!1,Xt=new ie,ee=new P,ve=new ce,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function fe(){return et===null?J:1}let F=n;function Ee(v,U){return e.getContext(v,U)}let te,E,g,B,H,Z,rt,lt,K,j,ct,Pt,mt,ht,Lt,Dt,kt,D,ut,$,dt,vt,nt;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",re,!1),e.addEventListener("webglcontextrestored",Kt,!1),e.addEventListener("webglcontextcreationerror",$e,!1),F===null){let U="webgl2";if(F=Ee(U,v),F===null)throw Ee(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Nt()}catch(v){throw e.removeEventListener("webglcontextlost",re,!1),e.removeEventListener("webglcontextrestored",Kt,!1),e.removeEventListener("webglcontextcreationerror",$e,!1),Ot("WebGLRenderer: "+v.message),v}function Nt(){te=new Kp(F),te.init(),dt=new Fg(F,te),E=new kp(F,te,t,dt),g=new Ng(F,te),E.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),O=F.createFramebuffer(),I=F.createFramebuffer(),k=F.createFramebuffer(),B=new Qp(F),H=new yg,Z=new Dg(F,te,g,H,E,dt,B),rt=new Zp(C),lt=new td(F),vt=new Bp(F,lt),K=new $p(F,lt,B,vt),j=new em(F,K,lt,vt,B),D=new tm(F,E,Z),Lt=new Vp(H),ct=new vg(C,rt,te,E,vt,Lt),Pt=new kg(C,H),mt=new Sg,ht=new Rg(te),kt=new Op(C,rt,g,j,x,l),Dt=new Ug(C,j,E),nt=new Vg(F,B,E,g),ut=new zp(F,te,B),$=new jp(F,te,B),B.programs=ct.programs,C.capabilities=E,C.extensions=te,C.properties=H,C.renderLists=mt,C.shadowMap=Dt,C.state=g,C.info=B}M!==ze&&(T=new im(M,e.width,e.height,o,s,r));let Rt=new Ll(C,F);this.xr=Rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let v=te.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=te.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(v){v!==void 0&&(J=v,this.setSize(at,z,!1))},this.getSize=function(v){return v.set(at,z)},this.setSize=function(v,U,X=!0){if(Rt.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}at=v,z=U,e.width=Math.floor(v*J),e.height=Math.floor(U*J),X===!0&&(e.style.width=v+"px",e.style.height=U+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(at*J,z*J).floor()},this.setDrawingBufferSize=function(v,U,X){at=v,z=U,J=X,e.width=Math.floor(v*X),e.height=Math.floor(U*X),this.setViewport(0,0,v,U)},this.setEffects=function(v){if(M===ze){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let U=0;U<v.length;U++)if(v[U].isOutputPass===!0){Ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(tt)},this.getViewport=function(v){return v.copy(ft)},this.setViewport=function(v,U,X,V){v.isVector4?ft.set(v.x,v.y,v.z,v.w):ft.set(v,U,X,V),g.viewport(tt.copy(ft).multiplyScalar(J).round())},this.getScissor=function(v){return v.copy(zt)},this.setScissor=function(v,U,X,V){v.isVector4?zt.set(v.x,v.y,v.z,v.w):zt.set(v,U,X,V),g.scissor(It.copy(zt).multiplyScalar(J).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(v){g.setScissorTest(ot=v)},this.setOpaqueSort=function(v){st=v},this.setTransparentSort=function(v){Ut=v},this.getClearColor=function(v){return v.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor(...arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,X=!0){let V=0;if(v){let G=!1;if(et!==null){let xt=et.texture.format;G=m.has(xt)}if(G){let xt=et.texture.type,bt=f.has(xt),_t=kt.getClearColor(),wt=kt.getClearAlpha(),Ct=_t.r,Gt=_t.g,Yt=_t.b;bt?(w[0]=Ct,w[1]=Gt,w[2]=Yt,w[3]=wt,F.clearBufferuiv(F.COLOR,0,w)):(A[0]=Ct,A[1]=Gt,A[2]=Yt,A[3]=wt,F.clearBufferiv(F.COLOR,0,A))}else V|=F.COLOR_BUFFER_BIT}U&&(V|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),L=v},this.dispose=function(){e.removeEventListener("webglcontextlost",re,!1),e.removeEventListener("webglcontextrestored",Kt,!1),e.removeEventListener("webglcontextcreationerror",$e,!1),kt.dispose(),mt.dispose(),ht.dispose(),H.dispose(),rt.dispose(),j.dispose(),vt.dispose(),nt.dispose(),ct.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Fl),Rt.removeEventListener("sessionend",Ol),Zn.stop()};function re(v){v.preventDefault(),al("WebGLRenderer: Context Lost."),N=!0}function Kt(){al("WebGLRenderer: Context Restored."),N=!1;let v=B.autoReset,U=Dt.enabled,X=Dt.autoUpdate,V=Dt.needsUpdate,G=Dt.type;Nt(),B.autoReset=v,Dt.enabled=U,Dt.autoUpdate=X,Dt.needsUpdate=V,Dt.type=G}function $e(v){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ln(v){let U=v.target;U.removeEventListener("dispose",ln),Vh(U)}function Vh(v){Gh(v),H.remove(v)}function Gh(v){let U=H.get(v).programs;U!==void 0&&(U.forEach(function(X){ct.releaseProgram(X)}),v.isShaderMaterial&&ct.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,X,V,G,xt){U===null&&(U=Fe);let bt=G.isMesh&&G.matrixWorld.determinantAffine()<0,_t=Xh(v,U,X,V,G);g.setMaterial(V,bt);let wt=X.index,Ct=1;if(V.wireframe===!0){if(wt=K.getWireframeAttribute(X),wt===void 0)return;Ct=2}let Gt=X.drawRange,Yt=X.attributes.position,Et=Gt.start*Ct,$t=(Gt.start+Gt.count)*Ct;xt!==null&&(Et=Math.max(Et,xt.start*Ct),$t=Math.min($t,(xt.start+xt.count)*Ct)),wt!==null?(Et=Math.max(Et,0),$t=Math.min($t,wt.count)):Yt!=null&&(Et=Math.max(Et,0),$t=Math.min($t,Yt.count));let pe=$t-Et;if(pe<0||pe===1/0)return;vt.setup(G,V,_t,X,wt);let oe,se=ut;if(wt!==null&&(oe=lt.get(wt),se=$,se.setIndex(oe)),G.isMesh)V.wireframe===!0?(g.setLineWidth(V.wireframeLinewidth*fe()),se.setMode(F.LINES)):se.setMode(F.TRIANGLES);else if(G.isLine){let Ae=V.linewidth;Ae===void 0&&(Ae=1),g.setLineWidth(Ae*fe()),G.isLineSegments?se.setMode(F.LINES):G.isLineLoop?se.setMode(F.LINE_LOOP):se.setMode(F.LINE_STRIP)}else G.isPoints?se.setMode(F.POINTS):G.isSprite&&se.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(te.get("WEBGL_multi_draw"))se.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Ae=G._multiDrawStarts,Mt=G._multiDrawCounts,Le=G._multiDrawCount,Zt=wt?lt.get(wt).bytesPerElement:1,Xe=H.get(V).currentProgram.getUniforms();for(let cn=0;cn<Le;cn++)Xe.setValue(F,"_gl_DrawID",cn),se.render(Ae[cn]/Zt,Mt[cn])}else if(G.isInstancedMesh)se.renderInstances(Et,pe,G.count);else if(X.isInstancedBufferGeometry){let Ae=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Mt=Math.min(X.instanceCount,Ae);se.renderInstances(Et,pe,Mt)}else se.render(Et,pe)};function Dl(v,U,X,V){L!==null&&v.isNodeMaterial&&L.setObject(V,v),At===!0&&Lt.setState(v,X,!1),v.transparent===!0&&v.side===gn&&v.forceSinglePass===!1?(v.side=we,v.needsUpdate=!0,Qs(v,U,V),v.side=Wn,v.needsUpdate=!0,Qs(v,U,V),v.side=gn):Qs(v,U,V)}this.compile=function(v,U,X=null){X===null&&(X=v),L!==null&&L.renderStart(v,U,X),S=ht.get(X),S.init(U),_.push(S),X.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(S.pushLight(G),G.castShadow&&S.pushShadow(G))}),v!==X&&v.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(S.pushLight(G),G.castShadow&&S.pushShadow(G))}),S.setupLights(),L!==null&&L.updateLights(S.state.lightsArray),yt=this.localClippingEnabled,At=Lt.init(this.clippingPlanes,yt),At===!0&&Lt.setGlobalState(this.clippingPlanes,U),L!==null&&Dt.render(S.state.shadowsArray,X,U);let V=new Set;return v.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let xt=G.material;if(xt)if(Array.isArray(xt))for(let bt=0;bt<xt.length;bt++){let _t=xt[bt];Dl(_t,X,U,G),V.add(_t)}else Dl(xt,X,U,G),V.add(xt)}),S=_.pop(),L!==null&&L.renderEnd(),V},this.compileAsync=function(v,U,X=null){let V=this.compile(v,U,X);return new Promise(G=>{function xt(){if(V.forEach(function(bt){let wt=H.get(bt).currentProgram;(wt===void 0||wt.isReady())&&V.delete(bt)}),V.size===0){G(v);return}setTimeout(xt,10)}te.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let so=null;function Hh(v){so&&so(v)}function Fl(){Zn.stop()}function Ol(){Zn.start()}let Zn=new Ih;Zn.setAnimationLoop(Hh),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(v){so=v,Rt.setAnimationLoop(v),v===null?Zn.stop():Zn.start()},Rt.addEventListener("sessionstart",Fl),Rt.addEventListener("sessionend",Ol),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;L!==null&&L.renderStart(v,U);let X=Rt.enabled===!0&&Rt.isPresenting===!0,V=T!==null&&(et===null||X)&&T.begin(C,et);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(U),U=Rt.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,U,et),S=ht.get(v,_.length),S.init(U),S.state.textureUnits=Z.getTextureUnits(),_.push(S),Xt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),pt.setFromProjectionMatrix(Xt,nn,U.reversedDepth),yt=this.localClippingEnabled,At=Lt.init(this.clippingPlanes,yt),b=mt.get(v,R.length),b.init(),R.push(b),Rt.enabled===!0&&Rt.isPresenting===!0){let bt=C.xr.getDepthSensingMesh();bt!==null&&ro(bt,U,-1/0,C.sortObjects)}ro(v,U,0,C.sortObjects),b.finish(),L!==null&&L.updateLights(S.state.lightsArray),C.sortObjects===!0&&b.sort(st,Ut),ue=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,ue&&kt.addToRenderList(b,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),At===!0&&Lt.beginShadows();let G=S.state.shadowsArray;if(Dt.render(G,v,U),At===!0&&Lt.endShadows(),(V&&T.hasRenderPass())===!1){let bt=b.opaque,_t=b.transmissive;if(S.setupLights(),U.isArrayCamera){let wt=U.cameras;if(_t.length>0)for(let Ct=0,Gt=wt.length;Ct<Gt;Ct++){let Yt=wt[Ct];zl(bt,_t,v,Yt)}ue&&kt.render(v);for(let Ct=0,Gt=wt.length;Ct<Gt;Ct++){let Yt=wt[Ct];Bl(b,v,Yt,Yt.viewport)}}else _t.length>0&&zl(bt,_t,v,U),ue&&kt.render(v),Bl(b,v,U)}et!==null&&Y===0&&(Z.updateMultisampleRenderTarget(et),Z.updateRenderTargetMipmap(et)),V&&T.end(C),v.isScene===!0&&v.onAfterRender(C,v,U),vt.resetDefaultState(),q=-1,Q=null,_.pop(),_.length>0?(S=_[_.length-1],Z.setTextureUnits(S.state.textureUnits),At===!0&&Lt.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,L!==null&&L.renderEnd()};function ro(v,U,X,V){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)X=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLightProbeGrid)S.pushLightProbeGrid(v);else if(v.isLight)S.pushLight(v),v.castShadow&&S.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(pt)){V&&ve.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Xt);let bt=j.update(v),_t=v.material;_t.visible&&b.push(v,bt,_t,X,ve.z,null,U)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(pt))){let bt=j.update(v),_t=v.material;if(V&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ve.copy(v.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),ve.copy(bt.boundingSphere.center)),ve.applyMatrix4(v.matrixWorld).applyMatrix4(Xt)),Array.isArray(_t)){let wt=bt.groups;for(let Ct=0,Gt=wt.length;Ct<Gt;Ct++){let Yt=wt[Ct],Et=_t[Yt.materialIndex];Et&&Et.visible&&b.push(v,bt,Et,X,ve.z,Yt,U)}}else _t.visible&&b.push(v,bt,_t,X,ve.z,null,U)}}let xt=v.children;for(let bt=0,_t=xt.length;bt<_t;bt++)ro(xt[bt],U,X,V)}function Bl(v,U,X,V){let{opaque:G,transmissive:xt,transparent:bt}=v;S.setupLightsView(X),At===!0&&Lt.setGlobalState(C.clippingPlanes,X),V&&g.viewport(tt.copy(V)),G.length>0&&js(G,U,X),xt.length>0&&js(xt,U,X),bt.length>0&&js(bt,U,X),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function zl(v,U,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[V.id]===void 0){let Et=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[V.id]=new Be(1,1,{generateMipmaps:!0,type:Et?on:ze,minFilter:Yn,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}let xt=S.state.transmissionRenderTarget[V.id],bt=V.viewport||tt;xt.setSize(bt.z*C.transmissionResolutionScale,bt.w*C.transmissionResolutionScale);let _t=C.getRenderTarget(),wt=C.getActiveCubeFace(),Ct=C.getActiveMipmapLevel();C.setRenderTarget(xt),C.getClearColor(qt),it=C.getClearAlpha(),it<1&&C.setClearColor(16777215,.5),C.clear(),ue&&kt.render(X);let Gt=C.toneMapping;C.toneMapping=rn;let Yt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),S.setupLightsView(V),At===!0&&Lt.setGlobalState(C.clippingPlanes,V),js(v,X,V),Z.updateMultisampleRenderTarget(xt),Z.updateRenderTargetMipmap(xt),te.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let $t=0,pe=U.length;$t<pe;$t++){let oe=U[$t],{object:se,geometry:Ae,material:Mt,group:Le}=oe;if(Mt.side===gn&&se.layers.test(V.layers)){let Zt=Mt.side;Mt.side=we,Mt.needsUpdate=!0,kl(se,X,V,Ae,Mt,Le),Mt.side=Zt,Mt.needsUpdate=!0,Et=!0}}Et===!0&&(Z.updateMultisampleRenderTarget(xt),Z.updateRenderTargetMipmap(xt))}C.setRenderTarget(_t,wt,Ct),C.setClearColor(qt,it),Yt!==void 0&&(V.viewport=Yt),C.toneMapping=Gt}function js(v,U,X){let V=U.isScene===!0?U.overrideMaterial:null;for(let G=0,xt=v.length;G<xt;G++){let bt=v[G],{object:_t,geometry:wt,group:Ct}=bt,Gt=bt.material;Gt.allowOverride===!0&&V!==null&&(Gt=V),_t.layers.test(X.layers)&&kl(_t,U,X,wt,Gt,Ct)}}function kl(v,U,X,V,G,xt){L!==null&&G.isNodeMaterial&&L.setObject(v,G),v.onBeforeRender(C,U,X,V,G,xt),v.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),G.onBeforeRender(C,U,X,V,v,xt),G.transparent===!0&&G.side===gn&&G.forceSinglePass===!1?(G.side=we,G.needsUpdate=!0,C.renderBufferDirect(X,U,V,G,v,xt),G.side=Wn,G.needsUpdate=!0,C.renderBufferDirect(X,U,V,G,v,xt),G.side=gn):C.renderBufferDirect(X,U,V,G,v,xt),v.onAfterRender(C,U,X,V,G,xt)}function Qs(v,U,X){U.isScene!==!0&&(U=Fe);let V=H.get(v),G=S.state.lights,xt=S.state.shadowsArray,bt=G.state.version,_t=ct.getParameters(v,G.state,xt,U,X,S.state.lightProbeGridArray),wt=ct.getProgramCacheKey(_t),Ct=V.programs;V.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;let Gt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;V.envMap=rt.get(v.envMap||V.environment,Gt),V.envMapRotation=V.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Ct===void 0&&(v.addEventListener("dispose",ln),Ct=new Map,V.programs=Ct);let Yt=Ct.get(wt);if(Yt!==void 0){if(V.currentProgram===Yt&&V.lightsStateVersion===bt)return Gl(v,_t),Yt}else _t.uniforms=ct.getUniforms(v),L!==null&&v.isNodeMaterial&&L.build(v,X,_t),v.onBeforeCompile(_t,C),Yt=ct.acquireProgram(_t,wt),Ct.set(wt,Yt),V.uniforms=_t.uniforms;let Et=V.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Et.clippingPlanes=Lt.uniform),Gl(v,_t),V.needsLights=qh(v),V.lightsStateVersion=bt,V.needsLights&&(Et.ambientLightColor.value=G.state.ambient,Et.lightProbe.value=G.state.probe,Et.sunLights.value=G.state.sun,Et.sunLightShadows.value=G.state.sunShadow,Et.directionalLights.value=G.state.directional,Et.directionalLightShadows.value=G.state.directionalShadow,Et.spotLights.value=G.state.spot,Et.spotLightShadows.value=G.state.spotShadow,Et.rectAreaLights.value=G.state.rectArea,Et.ltc_1.value=G.state.rectAreaLTC1,Et.ltc_2.value=G.state.rectAreaLTC2,Et.pointLights.value=G.state.point,Et.pointLightShadows.value=G.state.pointShadow,Et.hemisphereLights.value=G.state.hemi,Et.sunShadowMatrix.value=G.state.sunShadowMatrix,Et.sunShadowCascade.value=G.state.sunShadowCascade,Et.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Et.spotLightMatrix.value=G.state.spotLightMatrix,Et.spotLightMap.value=G.state.spotLightMap,Et.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=S.state.lightProbeGridArray.length>0,V.currentProgram=Yt,V.uniformsList=null,Yt}function Vl(v){if(v.uniformsList===null){let U=v.currentProgram.getUniforms();v.uniformsList=$i.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function Gl(v,U){let X=H.get(v);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function Wh(v,U){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let X=0,V=v.length;X<V;X++){let G=v[X];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function Xh(v,U,X,V,G){U.isScene!==!0&&(U=Fe),Z.resetTextureUnits();let xt=U.fog,bt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,_t=et===null?C.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Jt.workingColorSpace,wt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ct=rt.get(V.envMap||bt,wt),Gt=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Yt=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Et=!!X.morphAttributes.position,$t=!!X.morphAttributes.normal,pe=!!X.morphAttributes.color,oe=rn;V.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(oe=C.toneMapping);let se=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ae=se!==void 0?se.length:0,Mt=H.get(V),Le=S.state.lights;if(At===!0&&(yt===!0||v!==Q)){let ae=v===Q&&V.id===q;Lt.setState(V,v,ae)}let Zt=!1;V.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Le.state.version||Mt.outputColorSpace!==_t||G.isBatchedMesh&&Mt.batching===!1||!G.isBatchedMesh&&Mt.batching===!0||G.isBatchedMesh&&Mt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Mt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Mt.instancing===!1||!G.isInstancedMesh&&Mt.instancing===!0||G.isSkinnedMesh&&Mt.skinning===!1||!G.isSkinnedMesh&&Mt.skinning===!0||G.isInstancedMesh&&Mt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Mt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Mt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Mt.instancingMorph===!1&&G.morphTexture!==null||Mt.envMap!==Ct||V.fog===!0&&Mt.fog!==xt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Lt.numPlanes||Mt.numIntersection!==Lt.numIntersection)||Mt.vertexAlphas!==Gt||Mt.vertexTangents!==Yt||Mt.morphTargets!==Et||Mt.morphNormals!==$t||Mt.morphColors!==pe||Mt.toneMapping!==oe||Mt.morphTargetsCount!==Ae||!!Mt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Zt=!0):(Zt=!0,Mt.__version=V.version);let Xe=Mt.currentProgram;Zt===!0&&(Xe=Qs(V,U,G),L&&V.isNodeMaterial&&L.onUpdateProgram(V,Xe,Mt));let cn=!1,Cn=!1,hi=!1,ne=Xe.getUniforms(),de=Mt.uniforms;if(g.useProgram(Xe.program)&&(cn=!0,Cn=!0,hi=!0),V.id!==q&&(q=V.id,Cn=!0),Mt.needsLights){let ae=Wh(S.state.lightProbeGridArray,G);Mt.lightProbeGrid!==ae&&(Mt.lightProbeGrid=ae,Cn=!0)}if(cn||Q!==v){g.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ne.setValue(F,"projectionMatrix",v.projectionMatrix),ne.setValue(F,"viewMatrix",v.matrixWorldInverse);let Pn=ne.map.cameraPosition;Pn!==void 0&&Pn.setValue(F,ee.setFromMatrixPosition(v.matrixWorld)),E.logarithmicDepthBuffer&&ne.setValue(F,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ne.setValue(F,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,Cn=!0,hi=!0)}if(Mt.needsLights&&(Le.state.sunShadowMap.length>0&&ne.setValue(F,"sunShadowMap",Le.state.sunShadowMap,Z),Le.state.directionalShadowMap.length>0&&ne.setValue(F,"directionalShadowMap",Le.state.directionalShadowMap,Z),Le.state.spotShadowMap.length>0&&ne.setValue(F,"spotShadowMap",Le.state.spotShadowMap,Z),Le.state.pointShadowMap.length>0&&ne.setValue(F,"pointShadowMap",Le.state.pointShadowMap,Z)),G.isSkinnedMesh){ne.setOptional(F,G,"bindMatrix"),ne.setOptional(F,G,"bindMatrixInverse");let ae=G.skeleton;ae&&(ae.boneTexture===null&&ae.computeBoneTexture(),ne.setValue(F,"boneTexture",ae.boneTexture,Z))}G.isBatchedMesh&&(ne.setOptional(F,G,"batchingTexture"),ne.setValue(F,"batchingTexture",G._matricesTexture,Z),ne.setOptional(F,G,"batchingIdTexture"),ne.setValue(F,"batchingIdTexture",G._indirectTexture,Z),ne.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&ne.setValue(F,"batchingColorTexture",G._colorsTexture,Z));let In=X.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&D.update(G,X,Xe),(Cn||Mt.receiveShadow!==G.receiveShadow)&&(Mt.receiveShadow=G.receiveShadow,ne.setValue(F,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(de.envMapIntensity.value=U.environmentIntensity),de.dfgLUT!==void 0&&(de.dfgLUT.value=Hg()),Cn){if(ne.setValue(F,"toneMappingExposure",C.toneMappingExposure),Mt.needsLights&&Yh(de,hi),xt&&V.fog===!0&&Pt.refreshFogUniforms(de,xt),Pt.refreshMaterialUniforms(de,V,J,z,S.state.transmissionRenderTarget[v.id]),Mt.needsLights&&Mt.lightProbeGrid){let ae=Mt.lightProbeGrid;de.probesSH.value=ae.texture,de.probesMin.value.copy(ae.boundingBox.min),de.probesMax.value.copy(ae.boundingBox.max),de.probesResolution.value.copy(ae.resolution)}$i.upload(F,Vl(Mt),de,Z)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&($i.upload(F,Vl(Mt),de,Z),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ne.setValue(F,"center",G.center),ne.setValue(F,"modelViewMatrix",G.modelViewMatrix),ne.setValue(F,"normalMatrix",G.normalMatrix),ne.setValue(F,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let ae=V.uniformsGroups;for(let Pn=0,ui=ae.length;Pn<ui;Pn++){let Wl=ae[Pn];nt.update(Wl,Xe),nt.bind(Wl,Xe)}}return Xe}function Yh(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.sunLights.needsUpdate=U,v.sunLightShadows.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function qh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(v,U,X){let V=H.get(v);V.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),H.get(v.texture).__webglTexture=U,H.get(v.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){let X=H.get(v);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(v,U=0,X=0){et=v,W=U,Y=X;let V=null,G=!1,xt=!1;if(v){let _t=H.get(v);if(_t.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(F.FRAMEBUFFER,_t.__webglFramebuffer),tt.copy(v.viewport),It.copy(v.scissor),St=v.scissorTest,g.viewport(tt),g.scissor(It),g.setScissorTest(St),q=-1;return}else if(_t.__webglFramebuffer===void 0)Z.setupRenderTarget(v);else if(_t.__hasExternalTextures)Z.rebindTextures(v,H.get(v.texture).__webglTexture,H.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Gt=v.depthTexture;if(_t.__boundDepthTexture!==Gt){if(Gt!==null&&H.has(Gt)&&(v.width!==Gt.image.width||v.height!==Gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(v)}}let wt=v.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(xt=!0);let Ct=H.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ct[U])?V=Ct[U][X]:V=Ct[U],G=!0):v.samples>0&&Z.useMultisampledRTT(v)===!1?V=H.get(v).__webglMultisampledFramebuffer:Array.isArray(Ct)?V=Ct[X]:V=Ct,tt.copy(v.viewport),It.copy(v.scissor),St=v.scissorTest}else tt.copy(ft).multiplyScalar(J).floor(),It.copy(zt).multiplyScalar(J).floor(),St=ot;if(X!==0&&(V=O),g.bindFramebuffer(F.FRAMEBUFFER,V)&&g.drawBuffers(v,V),g.viewport(tt),g.scissor(It),g.setScissorTest(St),G){let _t=H.get(v.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,_t.__webglTexture,X)}else if(xt){let _t=U;for(let wt=0;wt<v.textures.length;wt++){let Ct=H.get(v.textures[wt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+wt,Ct.__webglTexture,X,_t)}}else if(v!==null&&X!==0){let _t=H.get(v.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,_t.__webglTexture,X)}q=-1};function Hl(v){let U=H.get(v);return(U.__readFormat!==v.format||U.__readType!==v.type)&&(U.__readFormat=v.format,U.__readType=v.type,U.__formatReadable=E.textureFormatReadable(v.format),U.__typeReadable=E.textureTypeReadable(v.type)),U}this.readRenderTargetPixels=function(v,U,X,V,G,xt,bt,_t=0){if(!(v&&v.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=H.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&bt!==void 0&&(wt=wt[bt]),wt){g.bindFramebuffer(F.FRAMEBUFFER,wt);try{let Ct=v.textures[_t],Gt=Ct.format,Yt=Ct.type;v.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+_t);let Et=Hl(Ct);if(Et.__formatReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Et.__typeReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-V&&X>=0&&X<=v.height-G&&F.readPixels(U,X,V,G,dt.convert(Gt),dt.convert(Yt),xt)}finally{let Ct=et!==null?H.get(et).__webglFramebuffer:null;g.bindFramebuffer(F.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(v,U,X,V,G,xt,bt,_t=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=H.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&bt!==void 0&&(wt=wt[bt]),wt)if(U>=0&&U<=v.width-V&&X>=0&&X<=v.height-G){g.bindFramebuffer(F.FRAMEBUFFER,wt);let Ct=v.textures[_t],Gt=Ct.format,Yt=Ct.type;v.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+_t);let Et=Hl(Ct);if(Et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $t=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,$t),F.bufferData(F.PIXEL_PACK_BUFFER,xt.byteLength,F.STREAM_READ),F.readPixels(U,X,V,G,dt.convert(Gt),dt.convert(Yt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let pe=et!==null?H.get(et).__webglFramebuffer:null;g.bindFramebuffer(F.FRAMEBUFFER,pe);let oe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ih(F,oe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,$t),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,xt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer($t),F.deleteSync(oe),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,X=0){let V=Math.pow(2,-X),G=Math.floor(v.image.width*V),xt=Math.floor(v.image.height*V),bt=U!==null?U.x:0,_t=U!==null?U.y:0;Z.setTexture2D(v,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,bt,_t,G,xt),g.unbindTexture()},this.copyTextureToTexture=function(v,U,X=null,V=null,G=0,xt=0){let bt,_t,wt,Ct,Gt,Yt,Et,$t,pe,oe=v.isCompressedTexture?v.mipmaps[xt]:v.image;if(X!==null)bt=X.max.x-X.min.x,_t=X.max.y-X.min.y,wt=X.isBox3?X.max.z-X.min.z:1,Ct=X.min.x,Gt=X.min.y,Yt=X.isBox3?X.min.z:0;else{let de=Math.pow(2,-G);bt=Math.floor(oe.width*de),_t=Math.floor(oe.height*de),v.isDataArrayTexture?wt=oe.depth:v.isData3DTexture?wt=Math.floor(oe.depth*de):wt=1,Ct=0,Gt=0,Yt=0}V!==null?(Et=V.x,$t=V.y,pe=V.z):(Et=0,$t=0,pe=0);let se=dt.convert(U.format),Ae=dt.convert(U.type),Mt;U.isData3DTexture?(Z.setTexture3D(U,0),Mt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Z.setTexture2DArray(U,0),Mt=F.TEXTURE_2D_ARRAY):(Z.setTexture2D(U,0),Mt=F.TEXTURE_2D),g.activeTexture(F.TEXTURE0),g.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),g.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),g.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Le=g.getParameter(F.UNPACK_ROW_LENGTH),Zt=g.getParameter(F.UNPACK_IMAGE_HEIGHT),Xe=g.getParameter(F.UNPACK_SKIP_PIXELS),cn=g.getParameter(F.UNPACK_SKIP_ROWS),Cn=g.getParameter(F.UNPACK_SKIP_IMAGES);g.pixelStorei(F.UNPACK_ROW_LENGTH,oe.width),g.pixelStorei(F.UNPACK_IMAGE_HEIGHT,oe.height),g.pixelStorei(F.UNPACK_SKIP_PIXELS,Ct),g.pixelStorei(F.UNPACK_SKIP_ROWS,Gt),g.pixelStorei(F.UNPACK_SKIP_IMAGES,Yt);let hi=v.isDataArrayTexture||v.isData3DTexture,ne=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){let de=H.get(v),In=H.get(U),ae=H.get(de.__renderTarget),Pn=H.get(In.__renderTarget);g.bindFramebuffer(F.READ_FRAMEBUFFER,ae.__webglFramebuffer),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,Pn.__webglFramebuffer);for(let ui=0;ui<wt;ui++)hi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,H.get(v).__webglTexture,G,Yt+ui),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,H.get(U).__webglTexture,xt,pe+ui)),F.blitFramebuffer(Ct,Gt,bt,_t,Et,$t,bt,_t,F.DEPTH_BUFFER_BIT,F.NEAREST);g.bindFramebuffer(F.READ_FRAMEBUFFER,null),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||v.isRenderTargetTexture||H.has(v)){let de=H.get(v),In=H.get(U);g.bindFramebuffer(F.READ_FRAMEBUFFER,I),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,k);for(let ae=0;ae<wt;ae++)hi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,de.__webglTexture,G,Yt+ae):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,de.__webglTexture,G),ne?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,In.__webglTexture,xt,pe+ae):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,In.__webglTexture,xt),G!==0?F.blitFramebuffer(Ct,Gt,bt,_t,Et,$t,bt,_t,F.COLOR_BUFFER_BIT,F.NEAREST):ne?F.copyTexSubImage3D(Mt,xt,Et,$t,pe+ae,Ct,Gt,bt,_t):F.copyTexSubImage2D(Mt,xt,Et,$t,Ct,Gt,bt,_t);g.bindFramebuffer(F.READ_FRAMEBUFFER,null),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ne?v.isDataTexture||v.isData3DTexture?F.texSubImage3D(Mt,xt,Et,$t,pe,bt,_t,wt,se,Ae,oe.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Mt,xt,Et,$t,pe,bt,_t,wt,se,oe.data):F.texSubImage3D(Mt,xt,Et,$t,pe,bt,_t,wt,se,Ae,oe):v.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,xt,Et,$t,bt,_t,se,Ae,oe.data):v.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,xt,Et,$t,oe.width,oe.height,se,oe.data):F.texSubImage2D(F.TEXTURE_2D,xt,Et,$t,bt,_t,se,Ae,oe);g.pixelStorei(F.UNPACK_ROW_LENGTH,Le),g.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Zt),g.pixelStorei(F.UNPACK_SKIP_PIXELS,Xe),g.pixelStorei(F.UNPACK_SKIP_ROWS,cn),g.pixelStorei(F.UNPACK_SKIP_IMAGES,Cn),xt===0&&U.generateMipmaps&&F.generateMipmap(Mt),g.unbindTexture()},this.initRenderTarget=function(v){H.get(v).__webglFramebuffer===void 0&&Z.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Z.setTextureCube(v,0):v.isData3DTexture?Z.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Z.setTexture2DArray(v,0):Z.setTexture2D(v,0),g.unbindTexture()},this.resetState=function(){W=0,Y=0,et=null,g.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}};var eo=class extends ei{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new mn;t.deleteAttribute("uv");let e=new sn({side:we}),n=new sn,s=new Ns(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new he(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ys(t,n,6),o=new Se;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new he(t,ts(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new he(t,ts(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new he(t,ts(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let p=new he(t,ts(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let h=new he(t,ts(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let d=new he(t,ts(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ts(i){return new Rs({color:0,emissive:16777215,emissiveIntensity:i})}var Oh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB9AAAAfQCAYAAACaOMR5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABxVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMi1jMDAwIDc5LjFiNjVhNzliNCwgMjAyMi8wNi8xMy0yMjowMTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjMuNSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI2LTA4LTAzVDExOjIzOjQzKzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNi0wOC0xN1QxNTowMjoxNiswMzozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNi0wOC0xN1QxNTowMjoxNiswMzozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NENBNTI3MTI5QTJGMTFGMUE0OThFNDEzQzE2REMwMzgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NENBNTI3MTM5QTJGMTFGMUE0OThFNDEzQzE2REMwMzgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0MjQ5YjQyMy0zZjIxLTQxNDItODNkMi01N2ZjOGI1OGZjOGUiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQyNDliNDIzLTNmMjEtNDE0Mi04M2QyLTU3ZmM4YjU4ZmM4ZSIgc3RFdnQ6d2hlbj0iMjAyNi0wOC0wM1QxMToyMzo0MyswMzozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjUgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphYTdjNmIyZi0wZDczLTczNDQtODY3Mi1mZmJhZTRjZjFiZTAiIHN0RXZ0OndoZW49IjIwMjYtMDgtMDNUMTE6NTE6NTUrMDM6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy41IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YzQ3MGUxYmYtNmJiYS1hMTQzLTgxYmYtODNjNjY5OWQxNDIwIiBzdEV2dDp3aGVuPSIyMDI2LTA4LTA3VDEyOjMyOjAxKzAzOjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmM0NzBlMWJmLTZiYmEtYTE0My04MWJmLTgzYzY2OTlkMTQyMCIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjA3ZDJlYWFiLTg2ODUtM2Y0Ni1hM2M3LTNkZDAzMGM0NjkwNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnxgyzEAAXyPSURBVHja7N2/j11netjx5z3n3qEZAys6CLJhGiNATC3SuAjg0EyjxkihYikgcOcirQKDbFJl21SbAFwsxCKN/4EF6EYwDDcLxCSjwm1grgIERgA5CAxQMbDSzr3nPW/u+3KGGlHkSiRn5p5zz+ezS3H4QxT5DM/Mufd73/dNpZQAAAAAAAAAgKXrjAAAAAAAAAAABHQAAAAAAAAAaAR0AAAAAAAAAAgBHQAAAAAAAAAaAR0AAAAAAAAAQkAHAAAAAAAAgEZABwAAAAAAAIAQ0AEAAAAAAACgEdABAAAAAAAAIAR0AAAAAAAAAGgEdAAAAAAAAAAIAR0AAAAAAAAAGgEdAAAAAAAAAEJABwAAAAAAAIBGQAcAAAAAAACAENABAAAAAAAAoBHQAQAAAAAAACAEdAAAAAAAAABoBHQAAAAAAAAACAEdAAAAAAAAABoBHQAAAAAAAABCQAcAAAAAAACARkAHAAAAAAAAgBDQAQAAAAAAAKAR0AEAAAAAAAAgBHQAAAAAAAAAaAR0AAAAAAAAAAgBHQAAAAAAAAAaAR0AAAAAAAAAQkAHAAAAAAAAgEZABwAAAAAAAIAQ0AEAAAAAAACgEdABAAAAAAAAIAR0AAAAAAAAAGgEdAAAAAAAAAAIAR0AAAAAAAAAGgEdAAAAAAAAAEJABwAAAAAAAIBGQAcAAAAAAACAENABAAAAAAAAoBHQAQAAAAAAACAEdAAAAAAAAABoBHQAAAAAAAAACAEdAAAAAAAAABoBHQAAAAAAAABCQAcAAAAAAACARkAHAAAAAAAAgBDQAQAAAAAAAKAR0AEAAAAAAAAgBHQAAAAAAAAAaAR0AAAAAAAAAAgBHQAAAAAAAAAaAR0AAAAAAAAAQkAHAAAAAAAAgEZABwAAAAAAAIAQ0AEAAAAAAACgEdABAAAAAAAAIAR0AAAAAAAAAGgEdAAAAAAAAAAIAR0AAAAAAAAAGgEdAAAAAAAAAEJABwAAAAAAAIBGQAcAAAAAAACAENABAAAAAAAAoBHQAQAAAAAAACAEdAAAAAAAAABoBHQAAAAAAAAACAEdAAAAAAAAABoBHQAAAAAAAABCQAcAAAAAAACARkAHAAAAAAAAgBDQAQAAAAAAAKAR0AEAAAAAAAAgBHQAAAAAAAAAaAR0AAAAAAAAAAgBHQAAAAAAAAAaAR0AAAAAAAAAQkAHAAAAAAAAgEZABwAAAAAAAIAQ0AEAAAAAAACgEdABAAAAAAAAIAR0AAAAAAAAAGgEdAAAAAAAAAAIAR0AAAAAAAAAGgEdAAAAAAAAAEJABwAAAAAAAIBGQAcAAAAAAACAENABAAAAAAAAoBHQAQAAAAAAACAEdAAAAAAAAABoBHQAAAAAAAAACAEdAAAAAAAAABoBHQAAAAAAAABCQAcAAAAAAACARkAHAAAAAAAAgBDQAQAAAAAAAKAR0AEAAAAAAAAgBHQAAAAAAAAAaAR0AAAAAAAAAAgBHQAAAAAAAAAaAR0AAAAAAAAAQkAHAAAAAAAAgEZABwAAAAAAAIAQ0AEAAAAAAACgEdABAAAAAAAAIAR0AAAAAAAAAGgEdAAAAAAAAAAIAR0AAAAAAAAAGgEdAAAAAAAAAEJABwAAAAAAAIBGQAcAAAAAAACAENABAAAAAAAAoBHQAQAAAAAAACAEdAAAAAAAAABoBHQAAAAAAAAACAEdAAAAAAAAABoBHQAAAAAAAABCQAcAAAAAAACARkAHAAAAAAAAgBDQAQAAAAAAAKAR0AEAAAAAAAAgBHQAAAAAAAAAaAR0AAAAAAAAAAgBHQAAAAAAAAAaAR0AAAAAAAAAQkAHAAAAAAAAgEZABwAAAAAAAIAQ0AEAAAAAAACgEdABAAAAAAAAIAR0AAAAAAAAAGgEdAAAAAAAAAAIAR0AAAAAAAAAGgEdAAAAAAAAAEJABwAAAAAAAIBGQAcAAAAAAACAENABAAAAAAAAoBHQAQAAAAAAACAEdAAAAAAAAABoBHQAAAAAAAAACAEdAAAAAAAAABoBHQAAAAAAAABCQAcAAAAAAACARkAHAAAAAAAAgBDQAQAAAAAAAKAR0AEAAAAAAAAgBHQAAAAAAAAAaAR0AAAAAAAAAAgBHQAAAAAAAAAaAR0AAAAAAAAAQkAHAAAAAAAAgEZABwAAAAAAAIAQ0AEAAAAAAACgEdABAAAAAAAAIAR0AAAAAAAAAGgEdAAAAAAAAAAIAR0AAAAAAAAAGgEdAAAAAAAAAEJABwAAAAAAAIBGQAcA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gA4AAAAAAAAAAAAAgCOADgAAAAAAAAAAAABAQQAdAAAAAAAAAAAAAABHAB0AAAAAAAAAAAAAgIIAOgAAAAAAAAAAAAAAjgA6AAAAAAAAAAAAAAAFAXQAAAAAAAAAAAAAABwBdAAAAAAAAAAAAAAACgLoAAAAAAAAAAAAAAA4AugAAAAAAAAAAAAAABQE0AEAAAAAAAAAAAAAcATQAQAAAAAAAAAAAAAoCKADAAAAAAAAAAAAAOAIoAMAAAAAAAAAAAAAUBBABwAAAAAAAAAAAADAEUAHAAAAAAAAAAAAAKAggA4AAAAAAAAAAAAAgCOADgAAAAAAAAAAAABAQQAdAAAAAAAAAAAAAABHAB0AAAAAAAAAAAAAgIIAOgAAAAAAAAAAAAAAjgA6AAAAAAAAAAAAAAAFAXQAAAAAAAAAAAAAABwBdAAAAAAAAAAAAAAACgLoAAAAAAAAAAAAAAA4AugAAAAAAAAAAAAAABQE0AEAAAAAAAAAAAAAcATQAQAAAAAAAAAAAAAoCKADAAAAAAAAAAAAAOAIoAMAAAAAAAAAAAAAUBBABwAAAAAAAAAAAADAEUAHAAAAAAAAAAAAAKAggA4AAAAAAAAAAAAAgCOADgAAAAAAAAAAAABAQQAdAAAAAAAAAAAAAABHAB0AAAAAAAAAAAAAgIIAOgAAAAAAAAAAAAAAjgA6AAAAAAAAAAAAAAAFAXQAAAAAAAAAAAAAABwBdAAAAAAAAAAAAAAACgLoAAAAAAAAAAAAAAA4AugAAAAAAAAAAAAAABQE0AEAAAAAwP/fnh3QAADAMAyaf9V/qgNsAAAAAEygAwAAAAAAAEAEOgAAAAAAAABMoAMAAAAAAABABDoAAAAAAAAATKADAAAAAAAAQAQ6AAAAAAAAAEygAwAAAAAAAEAEOgAAAAAAAABMoAMAAAAAAABABDoAAAAAAAAATKADAAAAAAAAQAQ6AAAAAAAAAEygAwAAAAAAAEAEOgAAAAAAAABMoAMAAAAAAABABDoAAAAAAAAATKADAAAAAAAAQAQ6AAAAAAAAAEygAwAAAAAAAEAEOgAAAAAAAABMoAMAAAAAAABABDoAAAAAAAAATKADAAAAAAAAQAQ6AAAAAAAAAEygAwAAAAAAAEAEOgAAAAAAAABMoAMAAAAAAABABDoAAAAAAAAATKADAAAAAAAAQAQ6AAAAAAAAAEygAwAAAAAAAEAEOgAAAAAAAABMoAMAAAAAAABABDoAAAAAAAAATKADAAAAAAAAQAQ6AAAAAAAAAEygAwAAAAAAAEAEOgAAAAAAAABMoAMAAAAAAABABDoAAAAAAAAATKADAAAAAAAAQAQ6AAAAAAAAAEygAwAAAAAAAEAEOgAAAAAAAABMoAMAAAAAAABABDoAAAAAAAAATKADAAAAAAAAQAQ6AAAAAAAAAEygAwAAAAAAAEAEOgAAAAAAAABMoAMAAAAAAABABDoAAAAAAAAATKADAAAAAAAAQAQ6AAAAAAAAAEygAwAAAAAAAEAEOgAAAAAAAABMoAMAAAAAAABABDoAAAAAAAAATKADAAAAAAAAQAQ6AAAAAAAAAEygAwAAAAAAAEAEOgAAAAAAAABMoAMAAAAAAABABDoAAAAAAAAATKADAAAAAAAAQAQ6AAAAAAAAAEygAwAAAAAAAEAEOgAAAAAAAABMoAMAAAAAAABABDoAAAAAAAAATKADAAAAAAAAQAQ6AAAAAAAAAEygAwAAAAAAAEAEOgAAAAAAAABMoAMAAAAAAABABDoAAAAAAAAATKADAAAAAAAAQAQ6AAAAAAAAAEygAwAAAAAAAEAEOgAAAAAAAABMoAMAAAAAAABABDoAAAAAAAAATKADAAAAAAAAQAQ6AAAAAAAAAEygAwAAAAAAAEAEOgAAAAAAAABMoAMAAAAAAABABDoAAAAAAAAATKADAAAAAAAAQAQ6AAAAAAAAAEygAwAAAAAAAEAEOgAAAAAAAABMoAMAAAAAAABABDoAAAAAAAAATKADAAAAAAAAQAQ6AAAAAAAAAEygAwAAAAAAAEAEOgAAAAAAAABMoAMAAAAAAABABDoAAAAAAAAATKADAAAAAAAAQAQ6AAAAAAAAAEygAwAAAAAAAEAEOgAAAAAAAABMoAMAAAAAAABABDoAAAAAAAAATKADAAAAAAAAQAQ6AAAAAAAAAEygAwAAAAAAAEAEOgAAAAAAAABMoAMAAAAAAABABDoAAAAAAAAATKADAAAAAAAAQAQ6AAAAAAAAAEygAwAAAAAAAEAEOgAAAAAAAABMoAMAAAAAAABABDoAAAAAAAAATKADAAAAAAAAQAQ6AAAAAAAAAEygAwAAAAAAAEAEOgAAAAAAAABMoAMAAAAAAABABDoAAAAAAAAATKADAAAAAAAAQAQ6AAAAAAAAAEygAwAAAAAAAEAEOgAAAAAAAABMoAMAAAAAAABABDoAAAAAAAAATKADAAAAAAAAQAQ6AAAAAAAAAEygAwAAAAAAAEAEOgAAAAAAAABMoAMAAAAAAABABDoAAAAAAAAATKADAAAAAAAAQAQ6AAAAAAAAAEygAwAAAAAAAEAEOgAAAAAAAABMoAMAAAAAAABABDoAAAAAAAAATKADAAAAAAAAQAQ6AAAAAAAAAEygAwAAAAAAAEAEOgAAAAAAAABMoAMAAAAAAABABDoAAAAAAAAATKADAAAAAAAAQAQ6AAAAAAAAAEygAwAAAAAAAEAEOgAAAAAAAABMoAMAAAAAAABABDoAAAAAAAAATKADAAAAAAAAQAQ6AAAAAAAAAEygAwAAAAAAAEAEOgAAAAAAAAC8Ax35I5D8eFFBAAAAAElFTkSuQmCC";var Xg=xn.clamp;function Bh(i){let t=new ge,e=new ge;t.add(e);let n=new ge;e.add(n),n.userData.part="torso";let s=new Vi({color:1252133,metalness:.78,roughness:.31,clearcoat:.65,clearcoatRoughness:.23}),r=new sn({color:527637,metalness:.73,roughness:.27}),a=new sn({color:6452359,metalness:.92,roughness:.31}),o=new sn({color:1120288,metalness:.25,roughness:.6}),l=new ni({color:i,toneMapped:!1}),c=new As(1,32,20),u=new mn(1,1,1),p=new Ts(1,1,1,24);function h(it,at,z,J,st){let Ut=new he(at,z);return Ut.position.set(...J),st&&Ut.scale.set(...st),it.add(Ut),Ut}let d=(it,at,z,J)=>h(it,c,at,z,J),x=(it,at,z,J)=>h(it,u,at,z,J),M=(it,at,z,J)=>h(it,p,at,z,J);function m(it,at,z,J,st=a){return h(it,new zi(at,z,10,40),st,J)}let f=new ge;f.position.set(0,1.24,0),e.add(f),f.userData.part="head",M(e,a,[0,1.22,0],[.115,.24,.115]),M(e,r,[0,1.16,0],[.175,.07,.175]),d(f,s,[0,.43,0],[.37,.425,.33]),d(f,r,[0,.44,.257],[.315,.33,.137]);let w=[d(f,l,[-.119,.47,.384],[.071,.014,.009]),d(f,l,[.119,.47,.384],[.071,.014,.009])];for(let it of[-1,1]){let at=M(f,a,[it*.348,.43,0],[.155,.06,.155]);at.rotation.z=Math.PI/2;let z=M(f,r,[it*.383,.43,0],[.119,.025,.119]);z.rotation.z=Math.PI/2;let J=m(f,.09,.011,[it*.399,.43,0],l);J.rotation.y=Math.PI/2}let A=[[.25,0],[.29,.02],[.35,.16],[.4,.43],[.53,.79],[.59,.99],[.55,1.07],[.37,1.18],[0,1.2]],y=new Es(A.map(it=>new Tt(...it)),48),b=s.clone();h(n,y,b,[0,.02,0],[1,1,.64]);let S,R=new Promise((it,at)=>{S=new Is().load(Oh,it,void 0,at)});S.colorSpace=be,S.anisotropy=4,S.offset.set(78/2e3,1-1768/2e3),S.repeat.set(1844/2e3,1585/2e3);let _=.61,T=_*1585/1844,C=.75,N=new si(_,T,72,64),L=N.attributes.position;function O(it){let at=it-.02;for(let z=1;z<A.length;z++){let[J,st]=A[z-1],[Ut,ft]=A[z];if(at<=ft)return xn.lerp(J,Ut,Xg((at-st)/(ft-st),0,1))}return 0}for(let it=0;it<L.count;it++){let at=L.getX(it),z=L.getY(it)+C,J=O(z);L.setXYZ(it,at,z,.64*Math.sqrt(Math.max(0,J*J-at*at))+.006)}N.computeVertexNormals();let I=new Vi({map:S,color:16777215,metalness:.32,roughness:.36,clearcoat:.45,clearcoatRoughness:.25,emissive:16777215,emissiveMap:S,emissiveIntensity:.06,transparent:!0,alphaTest:.045,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),k=h(n,N,I,[0,0,0]);k.name="Padisar chest emblem";for(let it=0;it<3;it++)x(n,o,[0,.3-it*.057,.267-it*.012],[.18,.014,.016]);for(let it of[-1,1]){let at=h(n,new bs(.008,.31,3,8),a,[it*.385,.78,.28]);at.rotation.z=it*-.32}let W=[];for(let it of[-1,1]){let at=new ge;at.position.set(it*.65,1,0),e.add(at),d(at,a,[0,0,0],[.19,.19,.19]),d(at,s,[it*.06,-.21,.005],[.205,.37,.215]),M(at,r,[0,-.53,0],[.1,.19,.1]);let z=new ge;z.position.set(0,-.66,0),at.add(z),d(z,a,[0,0,0],[.136,.136,.136]);let J=M(z,r,[it*.13,0,0],[.1,.025,.1]);J.rotation.z=Math.PI/2,d(z,s,[0,-.24,.015],[.18,.3,.185]),M(z,a,[0,-.47,0],[.095,.1,.095]);let st=new ge;st.position.y=-.53,z.add(st),st.userData.part=it<0?"hand-left":"hand-right",d(st,r,[0,-.085,0],[.135,.15,.08]),d(st,s,[0,-.08,.047],[.126,.123,.047]);for(let ft=0;ft<4;ft++){let zt=(ft-1.5)*.057;d(st,a,[zt,-.205,.019],[.024,.056,.029]),d(st,r,[zt,-.262,.036],[.023,.037,.027])}let Ut=d(st,a,[-it*.143,-.105,.043],[.029,.084,.035]);Ut.rotation.z=it*-.35,W.push({side:it,shoulder:at,elbow:z,wrist:st})}let Y=[];M(t,a,[0,-.11,0],[.15,.23,.15]),d(t,r,[0,-.29,0],[.4,.21,.22]);for(let it of[-1,1]){let at=new ge;at.position.set(it*.3,-.3,0),t.add(at),at.userData.part=it<0?"leg-left":"leg-right",d(at,a,[it*.01,0,0],[.18,.19,.18]),M(at,o,[0,-.26,0],[.135,.28,.135]),d(at,s,[0,-.68,0],[.21,.49,.23]);let z=new ge;z.position.y=-1.1,at.add(z),d(z,a,[0,0,0],[.16,.16,.16]),d(z,s,[0,-.28,0],[.18,.33,.19]),Y.push({side:it,hip:at,knee:z})}let et=new ge;f.add(et);let q=new ge;q.position.set(0,.3,.401),et.add(q),q.visible=!1;let Q=h(q,new zi(.051,.006,8,40),l,[0,0,0]),tt=h(q,new ki(new ii(new P(-.066,.006,0),new P(0,-.032,0),new P(.066,.006,0)),24,.005,6,!1),l,[0,0,0]),It=h(q,new ki(new Bi([-2,-1,0,1,2].map((it,at)=>new P(it*.027,at%2?.012:-.005,0))),24,.005,6,!1),l,[0,0,0]),St=new ge;f.add(St),St.visible=!1;for(let it of[-1,1])for(let at of[-1,1]){let z=x(St,l,[it*.116-it*.012,.47+at*.019,.399],[.067,.009,.008]);z.rotation.z=it*at*.58}let qt=[];for(let it of[-1,1]){let at=x(et,l,[it*.119,.555,.39],[.075,.006,.006]);at.rotation.z=-it*.2,qt.push(at),at.visible=!1}return{root:t,upper:e,torso:n,head:f,arms:W,legs:Y,eyes:w,mouth:q,ring:Q,smile:tt,wince:It,squints:St,brows:qt,chestMaterial:b,brandingReady:R}}var Yg=xn.clamp,ci=(i,t,e)=>xn.smoothstep(e,i,t),zh=new P(0,-1,0),$s=xn.lerp;function no(i,t,e,n=[0,0,0]){if(e<=0)return;let s=i.shoulder.position,r=new P(...t).sub(s),a=Yg(r.length(),.17,1.185),o=r.normalize(),l=new P(i.side*.7,-.4,.3);l.addScaledVector(o,-l.dot(o)).normalize();let c=(.66**2-.53**2+a**2)/(2*a),u=s.clone().addScaledVector(o,c).addScaledVector(l,Math.sqrt(Math.max(0,.66**2-c**2))),p=s.clone().addScaledVector(o,a),h=new Oe().setFromUnitVectors(zh,u.clone().sub(s).normalize()),d=new Oe().setFromUnitVectors(zh,p.sub(u).normalize()),x=h.clone().invert().multiply(d),M=d.clone().invert().multiply(new Oe().setFromEuler(new qe(...n)));i.shoulder.quaternion.slerp(h,e),i.elbow.quaternion.slerp(x,e),i.wrist.quaternion.slerp(M,e)}function kh(i,t=!0){let e=0,n=0,s=0,r=0,a=0,o=0,l=null,c=0,u="neutral",p=1;function h(x){if(l||!/^(head|hand-(left|right)|leg-(left|right))$/.test(x))return!1;let M=x.endsWith("left")?-1:x.endsWith("right")?1:p*=-1;return l={part:x,side:M,age:0,duration:x.startsWith("hand")?3.25:x==="head"?2.25:1.8},!0}function d(x,M={}){e+=x;let m=1-Math.exp(-7*x);r=$s(r,M.chat?1:0,m),a=$s(a,M.chat&&M.speaking?1:0,1-Math.exp(-9*x)),o=$s(o,M.hover==="torso"||M.focus?1:0,m);let f=l||M.chat?0:M.targetX||0,w=l||M.chat?0:M.targetY||0;n=$s(n,f,m),s=$s(s,w,m),i.root.position.set(0,0,0),i.root.rotation.set(0,0,0),i.head.rotation.set(s*.36,n*.66,-n*.045,"YXZ"),i.upper.rotation.set(0,n*.055*(1-r),-n*.01*(1-r)),i.upper.position.y=t?Math.sin(e*1.15)*.004*(1-r):0;for(let y of i.arms){let{side:b,shoulder:S,elbow:R,wrist:_}=y;S.rotation.set(-.065,0,b*.23),R.rotation.set(-.44,0,b*.06),_.rotation.set(0,b*.16,0);let T=M.proximity?.[b<0?"left":"right"]||0;if(_.rotation.z=b*T*.028*(1-r),a>.01&&!l){let C=(Math.sin(e*1.1+b*1.3)+1)/2;no(y,[b*(.6+.025*Math.sin(e*.9)),.18+.14*C,.58+.04*Math.cos(e)],a*(.56+.3*C),[-.9,b*.3,b*.18])}}for(let y of i.legs)y.hip.rotation.set(0,0,0),y.knee.rotation.set(0,0,0);u=M.chat?"listening":"neutral",c=0,i.squints.visible=!1,i.eyes.forEach(y=>y.visible=!0);let A=e%5.4>5.23?.2:1;if(i.eyes.forEach(y=>{y.scale.y=.014*A*(1+r*.18),y.rotation.z=0}),i.brows.forEach(y=>y.visible=!1),i.mouth.visible=!!M.chat||a>.015,i.ring.visible=a>.07,i.smile.visible=!i.ring.visible,i.wince.visible=!1,a>.07&&(u="speaking",c=a*(.17+.58*Math.abs(Math.sin(e*9.3))*Math.abs(Math.sin(e*5.8+.9))),i.ring.scale.set(1.13+Math.sin(e*7)*.13,Math.max(.12,c),1)),l){l.age+=x;let{part:y,side:b,age:S,duration:R}=l,_=ci(0,.16,S),T=1-ci(R-.6,R,S),C=_*T,N=Math.sin(Math.min(1,S/.44)*Math.PI)*(1-ci(.32,.5,S));if(i.head.rotation.x=-.15*N,i.head.rotation.z=b*.1*C,i.root.position.z=-.055*N,i.upper.rotation.z=b*.026*C,i.mouth.visible=C>.01,i.ring.visible=S<.34,i.smile.visible=!1,i.wince.visible=S>=.34,i.ring.scale.set(.78,.78,1),c=S<.34?.78:.1,i.squints.visible=S>=.17&&T>.3,i.eyes.forEach(L=>{L.visible=!i.squints.visible,L.scale.y=.014*(1+1.2*N)}),i.brows.forEach(L=>L.visible=T>.3),u=S<.34?"surprised":"wince",y.startsWith("hand")){let L=ci(.22,.9,S)*T,O=ci(.85,1.1,S)*(1-ci(2.25,2.55,S)),I=i.arms.find(W=>W.side===b),k=i.arms.find(W=>W.side!==b);no(I,[b*.035,.43,.57],L,[.1,b*.15,b*.15]),no(k,[b*.035+Math.sin(S*12)*.02*O,.46+Math.cos(S*12)*.027*O,.735],L,[-.1,Math.PI,b*.08]),i.head.rotation.x=.12*L,i.head.rotation.y=b*.07*L}else if(y==="head"){let L=i.arms.find(O=>O.side===b);no(L,[b*.34,1.62+.018*Math.sin(S*11),.37],ci(.2,.68,S)*T,[0,b*1.25,b*-.2])}else{let L=i.legs.find(O=>O.side===b);L.hip.rotation.x=-.13*C,L.knee.rotation.x=.23*C,i.upper.rotation.z=-b*.07*C,i.head.rotation.x=.18*C,i.head.rotation.y=b*.12*C}S>=R&&(l=null)}return i.chestMaterial.emissive.set(M.accent||"#06b6d4"),i.chestMaterial.emissiveIntensity=.075*o,{aimX:n,aimY:s,mood:u,mouthOpen:c,reaction:l?.part||null,reactionAge:l?.age||0,chat:!!M.chat,speaking:!!M.chat&&!!M.speaking}}return{pose:d,hit:h,cancel:()=>{l=null}}}var io=new WeakMap,Nl=xn.clamp;function qg(i){if(io.has(i))return io.get(i);let t=matchMedia("(prefers-reduced-motion:reduce)"),e=matchMedia("(hover:hover) and (pointer:fine)");if(t.matches||!e.matches)return null;let n=i.querySelector(".padisar-robot__canvas");if(!n)return null;let s=/^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(i.dataset.accent||"")?i.dataset.accent:"#06b6d4",r;try{r=new ja({alpha:!0,antialias:!0,powerPreference:"low-power"})}catch{return i.dataset.status="fallback",null}i.dataset.initialized="true",r.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),r.setClearColor(0,0),r.toneMapping=Bs,r.toneMappingExposure=1.05,r.outputColorSpace=be,r.domElement.setAttribute("aria-hidden","true"),n.appendChild(r.domElement);let a=new ei,o=new Hn(-2.3,2.3,2.3,-2.3,.1,50);o.position.set(0,.5,7),o.lookAt(0,.4,0);let l=new eo,c=new ji(r),u=c.fromScene(l,.035);a.environment=u.texture,a.environmentIntensity=.65,l.dispose(),c.dispose(),a.add(new Ps(13494527,1712944,1.2));for(let[ot,pt,At]of[[15332863,2.8,[-3,5,4]],[8378879,2.7,[3,2,-2]],[16777215,.9,[2,0,3]]]){let yt=new Ds(ot,pt);yt.position.set(...At),a.add(yt)}let p=Bh(s);a.add(p.root);let h=kh(p,i.dataset.idle!=="false"),d=new Fs,x=new Tt,M=i.dataset.tracking==="section"?i.closest("[data-robot-tracking-area],.avia-section")||i:null,m=0,f=0,w=!1,A=!1,y=!1,b=0,S=0,R=0,_=i.getBoundingClientRect(),T=null,C=null,N={},L=[],O=i.querySelector(".padisar-robot__chat"),I=()=>!t.matches&&e.matches,k=()=>i.dataset.chatActive==="true",W=(ot,pt,At,yt)=>{ot.addEventListener(pt,At,yt),L.push(()=>ot.removeEventListener(pt,At,yt))};function Y(ot,pt=[0,0,0]){ot.updateWorldMatrix(!0,!1);let At=new P(...pt);return ot.localToWorld(At),At.project(o),{x:_.left+(At.x+1)*_.width/2,y:_.top+(1-At.y)*_.height/2}}function et(ot,pt){if(ot<_.left||ot>_.right||pt<_.top||pt>_.bottom)return null;a.updateMatrixWorld(!0),x.set((ot-_.left)/_.width*2-1,-(pt-_.top)/_.height*2+1),d.setFromCamera(x,o);for(let At of d.intersectObject(p.root,!0)){if(!At.object.visible)continue;let yt=At.object,Xt=!1,ee=null;for(;yt&&yt!==a;)yt.visible||(Xt=!0),!ee&&yt.userData.part&&(ee=yt.userData.part),yt=yt.parent;if(!Xt)return ee}return null}function q(){return{head:Y(p.head,[0,.43,.36]),torso:Y(p.torso,[0,.69,.36]),left:Y(p.arms[0].wrist,[0,-.1,.05]),right:Y(p.arms[1].wrist,[0,-.1,.05]),legLeft:Y(p.legs[0].hip,[0,-.65,.2]),legRight:Y(p.legs[1].hip,[0,-.65,.2])}}function Q(){if(!O)return;let ot=Y(p.torso,[-.47,1.12,.34]),pt=Y(p.torso,[.47,.05,.34]);Object.assign(O.style,{left:Math.min(ot.x,pt.x)-_.left+"px",top:Math.min(ot.y,pt.y)-_.top+"px",width:Math.abs(pt.x-ot.x)+"px",height:Math.abs(pt.y-ot.y)+"px"})}function tt(){r.render(a,o),R++,i.dataset.rendered="true",Q()}function It(ot){let pt=q(),At={left:0,right:0};if(T)for(let yt of["left","right"])At[yt]=1-Nl(Math.hypot(T.x-pt[yt].x,T.y-pt[yt].y)/60,0,1);N=h.pose(ot,{targetX:m,targetY:f,chat:k(),speaking:i.dataset.replyActive==="true",hover:C,focus:document.activeElement===O,proximity:At,accent:s}),i.dataset.mood=N.mood,i.dataset.reaction=N.reaction||"",i.dataset.mouthVisible=String(p.mouth.visible),i.hasAttribute("data-pr-debug")&&(i.dataset.prPoints=JSON.stringify(q()),i.dataset.prState=JSON.stringify({...N,targetX:m,targetY:f,renderCount:R}))}function St(){if(A)return;_=i.getBoundingClientRect();let ot=Math.max(1,_.width),pt=Math.max(1,_.height),At=ot/pt,yt=Math.max(4.65,3.8/At);o.left=-yt*At/2,o.right=yt*At/2,o.top=yt/2,o.bottom=-yt/2,o.updateProjectionMatrix(),r.setSize(ot,pt,!1),I()&&w&&!y&&tt()}function qt(){m=0,f=0,T=null,C=null,delete i.dataset.hover}function it(ot){if(ot.pointerType==="touch"||!w||!I())return;if(M){let At=M.getBoundingClientRect();if(ot.clientX<At.left||ot.clientX>At.right||ot.clientY<At.top||ot.clientY>At.bottom){qt();return}}T={x:ot.clientX,y:ot.clientY},C=i.contains(ot.target)?et(ot.clientX,ot.clientY):null,i.dataset.hover=C||"";let pt=Y(p.head,[0,.43,0]);m=Nl((ot.clientX-pt.x)/Math.max(120,_.width*.55),-1,1),f=Nl((ot.clientY-pt.y)/Math.max(120,_.height*.55),-1,1)}function at(ot){if(ot.button!==0||ot.defaultPrevented||!I()||!w||y||ot.detail===0||ot.target.closest("a,input,textarea,select")||ot.target.closest("button")&&ot.target.closest("button")!==O)return;_=i.getBoundingClientRect();let pt=et(ot.clientX,ot.clientY);pt&&(pt==="torso"?(h.cancel(),window.PadisarRobotChat?.open(i)):h.hit(pt)&&(i.dataset.lastHit=pt,i.dataset.hitCount=String(Number(i.dataset.hitCount||0)+1)))}function z(){return!A&&w&&I()&&!document.hidden&&!y}function J(ot){if(b=0,!i.isConnected){Ut();return}if(z()){if(!S||ot-S>=1e3/30){let pt=S?Math.min((ot-S)/1e3,.08):.03333333333333333;S=ot,It(pt),tt()}b=requestAnimationFrame(J)}}function st(){A||(i.dataset.status=y?"fallback":I()?w&&!document.hidden?"playing":"suspended":"static",z()?b||(S=0,b=requestAnimationFrame(J)):(cancelAnimationFrame(b),b=0,S=0))}function Ut(){if(A)return;A=!0,cancelAnimationFrame(b),L.forEach(yt=>yt());let ot=new Set,pt=new Set,At=new Set;a.traverse(yt=>{yt.geometry&&ot.add(yt.geometry),yt.material&&pt.add(yt.material)}),pt.forEach(yt=>{yt.map&&At.add(yt.map),yt.emissiveMap&&At.add(yt.emissiveMap)}),ot.forEach(yt=>yt.dispose()),pt.forEach(yt=>yt.dispose()),At.forEach(yt=>yt.dispose()),u.dispose(),r.dispose(),r.domElement.remove(),delete i.dataset.initialized,delete i.dataset.rendered,delete i.dataset.logoReady,io.delete(i)}p.brandingReady.then(()=>{A||(i.dataset.logoReady="true",I()&&w&&!y&&tt())}).catch(()=>{A||(i.dataset.logoReady="false")}),W(document,"pointermove",it,{passive:!0}),W(i,"click",at),W(document.documentElement,"pointerleave",qt),W(window,"blur",qt),W(window,"scroll",()=>{_=i.getBoundingClientRect(),qt()},{passive:!0,capture:!0}),W(document,"visibilitychange",st),W(t,"change",()=>{qt(),h.cancel(),st()}),W(e,"change",()=>{qt(),h.cancel(),st()});let ft=k();if(W(i,"padisar-robot:state",()=>{k()&&!ft&&h.cancel(),ft=k(),st()}),W(r.domElement,"webglcontextlost",ot=>{ot.preventDefault(),y=!0,delete i.dataset.rendered,st()}),W(r.domElement,"webglcontextrestored",()=>{y=!1,St(),st()}),"ResizeObserver"in window){let ot=new ResizeObserver(St);ot.observe(i),L.push(()=>ot.disconnect())}else W(window,"resize",St);if("IntersectionObserver"in window){let ot=new IntersectionObserver(pt=>{w=pt[0].isIntersecting,st()},{threshold:0});ot.observe(i),L.push(()=>ot.disconnect())}else w=!0;It(0),St(),st();let zt={destroy:Ut,getState:()=>({...N,targetX:m,targetY:f,renderCount:R,visible:w,status:i.dataset.status})};return io.set(i,zt),zt}window.PadisarRobotStarter={init:qg};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
