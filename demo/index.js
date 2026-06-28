(()=>{var Jg=Object.defineProperty,jg=Object.defineProperties;var Qg=Object.getOwnPropertyDescriptors;var cp=Object.getOwnPropertySymbols;var tv=Object.prototype.hasOwnProperty,ev=Object.prototype.propertyIsEnumerable;var ns=Math.pow,yc=(i,t,e)=>t in i?Jg(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,wc=(i,t)=>{for(var e in t||(t={}))tv.call(t,e)&&yc(i,e,t[e]);if(cp)for(var e of cp(t))ev.call(t,e)&&yc(i,e,t[e]);return i},hp=(i,t)=>jg(i,Qg(t));var O=(i,t,e)=>yc(i,typeof t!="symbol"?t+"":t,e);var Va=(i,t,e)=>new Promise((n,s)=>{var r=l=>{try{o(e.next(l))}catch(c){s(c)}},a=l=>{try{o(e.throw(l))}catch(c){s(c)}},o=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,a);o((e=e.apply(i,t)).next())});var Fp=0,nh=1,Bp=2;var Jr=1,kp=2,ir=3,si=0,$e=1,zn=2,Gn=0,cs=1,ih=2,sh=3,rh=4,Vp=5;var Di=100,zp=101,Gp=102,Hp=103,Wp=104,Xp=200,qp=201,Yp=202,$p=203,po=204,fo=205,Kp=206,Zp=207,Jp=208,jp=209,Qp=210,tf=211,ef=212,nf=213,sf=214,mo=0,go=1,vo=2,hs=3,_o=4,xo=5,bo=6,yo=7,ah=0,rf=1,af=2,Rn=0,oh=1,lh=2,ch=3,hh=4,uh=5,dh=6,ph=7;var fh=300,Vi=301,fs=302,Ko=303,Zo=304,jr=306,wo=1e3,Fn=1001,Mo=1002,Fe=1003,of=1004;var Qr=1005;var ze=1006,Jo=1007;var zi=1008;var mn=1009,mh=1010,gh=1011,sr=1012,jo=1013,In=1014,yn=1015,Hn=1016,Qo=1017,tl=1018,rr=1020,vh=35902,_h=35899,xh=1021,bh=1022,wn=1023,kn=1026,Gi=1027,el=1028,nl=1029,Hi=1030,il=1031;var sl=1033,ta=33776,ea=33777,na=33778,ia=33779,rl=35840,al=35841,ol=35842,ll=35843,cl=36196,hl=37492,ul=37496,dl=37488,pl=37489,sa=37490,fl=37491,ml=37808,gl=37809,vl=37810,_l=37811,xl=37812,bl=37813,yl=37814,wl=37815,Ml=37816,Sl=37817,El=37818,Al=37819,Tl=37820,Cl=37821,Pl=36492,Rl=36494,Il=36495,Dl=36283,Ll=36284,ra=36285,Nl=36286;var Lr=2300,So=2301,uo=2302,Yc=2303,$c=2400,Kc=2401,Zc=2402;var lf=3200;var yh=0,cf=1,li="",hn="srgb",Nr="srgb-linear",Ur="linear",Qt="srgb";var os=7680;var Jc=519,hf=512,uf=513,df=514,Ul=515,pf=516,ff=517,Ol=518,mf=519,jc=35044;var wh="300 es",bn=2e3,Zs=2001;function nv(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function iv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gf(){let i=Or("canvas");return i.style.display="block",i}var up={},Js=null;function Mh(...i){let t="THREE."+i.shift();Js?Js("log",t,...i):console.log(t,...i)}function vf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function At(...i){i=vf(i);let t="THREE."+i.shift();if(Js)Js("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Pt(...i){i=vf(i);let t="THREE."+i.shift();if(Js)Js("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ls(...i){let t=i.join(" ");t in up||(up[t]=!0,At(...i))}function _f(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var xf={[mo]:go,[vo]:bo,[_o]:yo,[hs]:xo,[go]:mo,[bo]:vo,[yo]:_o,[xo]:hs},Wt=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Mc=Math.PI/180,Eo=180/Math.PI;function aa(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function Vt(i,t,e){return Math.max(t,Math.min(e,i))}function sv(i,t){return(i%t+t)%t}function Sc(i,t,e){return(1-e)*i+e*t}function Er(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function je(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ch=class Ch{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ch.prototype.isVector2=!0;var Ht=Ch,Se=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],m=r[a+1],v=r[a+2],b=r[a+3];if(d!==b||l!==u||c!==m||h!==v){let f=l*u+c*m+h*v+d*b;f<0&&(u=-u,m=-m,v=-v,b=-b,f=-f);let p=1-o;if(f<.9995){let S=Math.acos(f),T=Math.sin(S);p=Math.sin(p*S)/T,o=Math.sin(o*S)/T,l=l*p+u*o,c=c*p+m*o,h=h*p+v*o,d=d*p+b*o}else{l=l*p+u*o,c=c*p+m*o,h=h*p+v*o,d=d*p+b*o;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],m=r[a+2],v=r[a+3];return t[e]=o*v+h*d+l*m-c*u,t[e+1]=l*v+h*u+c*d-o*m,t[e+2]=c*v+h*m+o*u-l*d,t[e+3]=h*v-o*d-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),m=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*m*v,this._y=c*m*d-u*h*v,this._z=c*h*v+u*m*d,this._w=c*h*d-u*m*v;break;case"YXZ":this._x=u*h*d+c*m*v,this._y=c*m*d-u*h*v,this._z=c*h*v-u*m*d,this._w=c*h*d+u*m*v;break;case"ZXY":this._x=u*h*d-c*m*v,this._y=c*m*d+u*h*v,this._z=c*h*v+u*m*d,this._w=c*h*d-u*m*v;break;case"ZYX":this._x=u*h*d-c*m*v,this._y=c*m*d+u*h*v,this._z=c*h*v-u*m*d,this._w=c*h*d+u*m*v;break;case"YZX":this._x=u*h*d+c*m*v,this._y=c*m*d+u*h*v,this._z=c*h*v-u*m*d,this._w=c*h*d-u*m*v;break;case"XZY":this._x=u*h*d-c*m*v,this._y=c*m*d-u*h*v,this._z=c*h*v+u*m*d,this._w=c*h*d+u*m*v;break;default:At("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ph=class Ph{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ec.copy(this).projectOnVector(t),this.sub(Ec)}reflect(t){return this.sub(Ec.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ph.prototype.isVector3=!0;var P=Ph,Ec=new P,dp=new Se,Rh=class Rh{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],v=n[8],b=s[0],f=s[3],p=s[6],S=s[1],T=s[4],y=s[7],E=s[2],M=s[5],C=s[8];return r[0]=a*b+o*S+l*E,r[3]=a*f+o*T+l*M,r[6]=a*p+o*y+l*C,r[1]=c*b+h*S+d*E,r[4]=c*f+h*T+d*M,r[7]=c*p+h*y+d*C,r[2]=u*b+m*S+v*E,r[5]=u*f+m*T+v*M,r[8]=u*p+m*y+v*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,m=c*r-a*l,v=e*d+n*u+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/v;return t[0]=d*b,t[1]=(s*c-h*n)*b,t[2]=(o*n-s*a)*b,t[3]=u*b,t[4]=(h*e-s*l)*b,t[5]=(s*r-o*e)*b,t[6]=m*b,t[7]=(n*l-c*e)*b,t[8]=(a*e-n*r)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ac.makeScale(t,e)),this}rotate(t){return ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ac.makeRotation(-t)),this}translate(t,e){return ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ac.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Rh.prototype.isMatrix3=!0;var It=Rh,Ac=new It,pp=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fp=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rv(){let i={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qt&&(s.r=ii(s.r),s.g=ii(s.g),s.b=ii(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qt&&(s.r=Ks(s.r),s.g=Ks(s.g),s.b=Ks(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===li?Ur:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Nr]:{primaries:t,whitePoint:n,transfer:Ur,toXYZ:pp,fromXYZ:fp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:t,whitePoint:n,transfer:Qt,toXYZ:pp,fromXYZ:fp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),i}var Gt=rv();function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Os,Ao=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Os===void 0&&(Os=Or("canvas")),Os.width=t.width,Os.height=t.height;let s=Os.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Os}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Or("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ii(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ii(e[n]/255)*255):e[n]=ii(e[n]);return{data:e,width:t.width,height:t.height}}else return At("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},av=0,js=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=aa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Tc(s[a].image)):r.push(Tc(s[a]))}else r=Tc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Tc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ao.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(At("Texture: Unable to serialize Texture."),{})}var ov=0,Cc=new P,Qe=class i extends Wt{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Fn,s=Fn,r=ze,a=zi,o=wn,l=mn,c=i.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=aa(),this.name="",this.source=new js(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Cc).x}get height(){return this.source.getSize(Cc).y}get depth(){return this.source.getSize(Cc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){At(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){At(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wo:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case Mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wo:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case Mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=fh;Qe.DEFAULT_ANISOTROPY=1;var Ih=class Ih{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],v=l[9],b=l[2],f=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-b)<.01&&Math.abs(v-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+b)<.1&&Math.abs(v+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,y=(m+1)/2,E=(p+1)/2,M=(h+u)/4,C=(d+b)/4,_=(v+f)/4;return T>y&&T>E?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=M/n,r=C/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=M/s,r=_/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=C/r,s=_/r),this.set(n,s,r,e),this}let S=Math.sqrt((f-v)*(f-v)+(d-b)*(d-b)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(f-v)/S,this.y=(d-b)/S,this.z=(u-h)/S,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ih.prototype.isVector4=!0;var ue=Ih,To=class extends Wt{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Qe(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new js(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends To{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Fr=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Co=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $o=class $o{constructor(t,e,n,s,r,a,o,l,c,h,d,u,m,v,b,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,m,v,b,f)}set(t,e,n,s,r,a,o,l,c,h,d,u,m,v,b,f){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=m,p[7]=v,p[11]=b,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $o().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Fs.setFromMatrixColumn(t,0).length(),r=1/Fs.setFromMatrixColumn(t,1).length(),a=1/Fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,m=a*d,v=o*h,b=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+v*c,e[5]=u-b*c,e[9]=-o*l,e[2]=b-u*c,e[6]=v+m*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,m=l*d,v=c*h,b=c*d;e[0]=u+b*o,e[4]=v*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-v,e[6]=b+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,m=l*d,v=c*h,b=c*d;e[0]=u-b*o,e[4]=-a*d,e[8]=v+m*o,e[1]=m+v*o,e[5]=a*h,e[9]=b-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,m=a*d,v=o*h,b=o*d;e[0]=l*h,e[4]=v*c-m,e[8]=u*c+b,e[1]=l*d,e[5]=b*c+u,e[9]=m*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,m=a*c,v=o*l,b=o*c;e[0]=l*h,e[4]=b-u*d,e[8]=v*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*d+v,e[10]=u-b*d}else if(t.order==="XZY"){let u=a*l,m=a*c,v=o*l,b=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+b,e[5]=a*h,e[9]=m*d-v,e[2]=v*d-m,e[6]=o*h,e[10]=b*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lv,t,cv)}lookAt(t,e,n){let s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Ei.crossVectors(n,ln),Ei.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Ei.crossVectors(n,ln)),Ei.normalize(),za.crossVectors(ln,Ei),s[0]=Ei.x,s[4]=za.x,s[8]=ln.x,s[1]=Ei.y,s[5]=za.y,s[9]=ln.y,s[2]=Ei.z,s[6]=za.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],v=n[2],b=n[6],f=n[10],p=n[14],S=n[3],T=n[7],y=n[11],E=n[15],M=s[0],C=s[4],_=s[8],A=s[12],N=s[1],I=s[5],F=s[9],Y=s[13],Z=s[2],V=s[6],q=s[10],H=s[14],j=s[3],tt=s[7],ut=s[11],mt=s[15];return r[0]=a*M+o*N+l*Z+c*j,r[4]=a*C+o*I+l*V+c*tt,r[8]=a*_+o*F+l*q+c*ut,r[12]=a*A+o*Y+l*H+c*mt,r[1]=h*M+d*N+u*Z+m*j,r[5]=h*C+d*I+u*V+m*tt,r[9]=h*_+d*F+u*q+m*ut,r[13]=h*A+d*Y+u*H+m*mt,r[2]=v*M+b*N+f*Z+p*j,r[6]=v*C+b*I+f*V+p*tt,r[10]=v*_+b*F+f*q+p*ut,r[14]=v*A+b*Y+f*H+p*mt,r[3]=S*M+T*N+y*Z+E*j,r[7]=S*C+T*I+y*V+E*tt,r[11]=S*_+T*F+y*q+E*ut,r[15]=S*A+T*Y+y*H+E*mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],m=t[14],v=t[3],b=t[7],f=t[11],p=t[15],S=l*m-c*u,T=o*m-c*d,y=o*u-l*d,E=a*m-c*h,M=a*u-l*h,C=a*d-o*h;return e*(b*S-f*T+p*y)-n*(v*S-f*E+p*M)+s*(v*T-b*E+p*C)-r*(v*y-b*M+f*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],m=t[11],v=t[12],b=t[13],f=t[14],p=t[15],S=e*o-n*a,T=e*l-s*a,y=e*c-r*a,E=n*l-s*o,M=n*c-r*o,C=s*c-r*l,_=h*b-d*v,A=h*f-u*v,N=h*p-m*v,I=d*f-u*b,F=d*p-m*b,Y=u*p-m*f,Z=S*Y-T*F+y*I+E*N-M*A+C*_;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/Z;return t[0]=(o*Y-l*F+c*I)*V,t[1]=(s*F-n*Y-r*I)*V,t[2]=(b*C-f*M+p*E)*V,t[3]=(u*M-d*C-m*E)*V,t[4]=(l*N-a*Y-c*A)*V,t[5]=(e*Y-s*N+r*A)*V,t[6]=(f*y-v*C-p*T)*V,t[7]=(h*C-u*y+m*T)*V,t[8]=(a*F-o*N+c*_)*V,t[9]=(n*N-e*F-r*_)*V,t[10]=(v*M-b*y+p*S)*V,t[11]=(d*y-h*M-m*S)*V,t[12]=(o*A-a*I-l*_)*V,t[13]=(e*I-n*A+s*_)*V,t[14]=(b*T-v*E-f*S)*V,t[15]=(h*E-d*T+u*S)*V,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,m=r*h,v=r*d,b=a*h,f=a*d,p=o*d,S=l*c,T=l*h,y=l*d,E=n.x,M=n.y,C=n.z;return s[0]=(1-(b+p))*E,s[1]=(m+y)*E,s[2]=(v-T)*E,s[3]=0,s[4]=(m-y)*M,s[5]=(1-(u+p))*M,s[6]=(f+S)*M,s[7]=0,s[8]=(v+T)*C,s[9]=(f-S)*C,s[10]=(1-(u+b))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Fs.set(s[0],s[1],s[2]).length(),o=Fs.set(s[4],s[5],s[6]).length(),l=Fs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Tn.copy(this);let c=1/a,h=1/o,d=1/l;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=d,Tn.elements[9]*=d,Tn.elements[10]*=d,e.setFromRotationMatrix(Tn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=bn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),m=(n+s)/(n-s),v,b;if(l)v=r/(a-r),b=a*r/(a-r);else if(o===bn)v=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Zs)v=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=bn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),m=-(n+s)/(n-s),v,b;if(l)v=1/(a-r),b=a/(a-r);else if(o===bn)v=-2/(a-r),b=-(a+r)/(a-r);else if(o===Zs)v=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};$o.prototype.isMatrix4=!0;var $t=$o,Fs=new P,Tn=new $t,lv=new P(0,0,0),cv=new P(1,1,1),Ei=new P,za=new P,ln=new P,mp=new $t,gp=new Se,Li=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:At("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return mp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gp.setFromEuler(this),this.setFromQuaternion(gp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Li.DEFAULT_ORDER="XYZ";var Qs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},hv=0,vp=new P,Bs=new Se,jn=new $t,Ga=new P,Ar=new P,uv=new P,dv=new Se,_p=new P(1,0,0),xp=new P(0,1,0),bp=new P(0,0,1),yp={type:"added"},pv={type:"removed"},ks={type:"childadded",child:null},Pc={type:"childremoved",child:null},dn=class i extends Wt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new Li,n=new Se,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new It}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.premultiply(Bs),this}rotateX(t){return this.rotateOnAxis(_p,t)}rotateY(t){return this.rotateOnAxis(xp,t)}rotateZ(t){return this.rotateOnAxis(bp,t)}translateOnAxis(t,e){return vp.copy(t).applyQuaternion(this.quaternion),this.position.add(vp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_p,t)}translateY(t){return this.translateOnAxis(xp,t)}translateZ(t){return this.translateOnAxis(bp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ga.copy(t):Ga.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Ar,Ga,this.up):jn.lookAt(Ga,Ar,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),Bs.setFromRotationMatrix(jn),this.quaternion.premultiply(Bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yp),ks.child=t,this.dispatchEvent(ks),ks.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pv),Pc.child=t,this.dispatchEvent(Pc),Pc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yp),ks.child=t,this.dispatchEvent(ks),ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,t,uv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,dv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>hp(wc({},o),{boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>wc({},o)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),m=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};dn.DEFAULT_UP=new P(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bn=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},fv={type:"move"},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let b of t.hand.values()){let f=e.getJointPose(b,n),p=this._getHandJoint(c,b);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&u>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Bn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function Rc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Gt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Gt.workingColorSpace){if(t=sv(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Rc(a,r,t+1/3),this.g=Rc(a,r,t),this.b=Rc(a,r,t-1/3)}return Gt.colorSpaceToWorking(this,s),this}setStyle(t,e=hn){function n(r){r!==void 0&&parseFloat(r)<1&&At("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:At("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);At("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){let n=bf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):At("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return Gt.workingToColorSpace(Xe.copy(this),t),Math.round(Vt(Xe.r*255,0,255))*65536+Math.round(Vt(Xe.g*255,0,255))*256+Math.round(Vt(Xe.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.workingToColorSpace(Xe.copy(this),e);let n=Xe.r,s=Xe.g,r=Xe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Gt.workingColorSpace){return Gt.workingToColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=hn){Gt.workingToColorSpace(Xe.copy(this),t);let e=Xe.r,n=Xe.g,s=Xe.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(Ha);let n=Sc(Ai.h,Ha.h,e),s=Sc(Ai.s,Ha.s,e),r=Sc(Ai.l,Ha.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xe=new Ut;Ut.NAMES=bf;var Br=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ut(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var kr=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Cn=new P,Qn=new P,Ic=new P,ti=new P,Vs=new P,zs=new P,wp=new P,Dc=new P,Lc=new P,Nc=new P,Uc=new ue,Oc=new ue,Fc=new ue,Ii=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Cn.subVectors(s,e),Qn.subVectors(n,e),Ic.subVectors(t,e);let a=Cn.dot(Cn),o=Cn.dot(Qn),l=Cn.dot(Ic),c=Qn.dot(Qn),h=Qn.dot(Ic),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,m=(c*l-o*h)*u,v=(a*h-o*l)*u;return r.set(1-m-v,v,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Uc.setScalar(0),Oc.setScalar(0),Fc.setScalar(0),Uc.fromBufferAttribute(t,e),Oc.fromBufferAttribute(t,n),Fc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Uc,r.x),a.addScaledVector(Oc,r.y),a.addScaledVector(Fc,r.z),a}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),Qn.subVectors(t,e),Cn.cross(Qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Cn.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Vs.subVectors(s,n),zs.subVectors(r,n),Dc.subVectors(t,n);let l=Vs.dot(Dc),c=zs.dot(Dc);if(l<=0&&c<=0)return e.copy(n);Lc.subVectors(t,s);let h=Vs.dot(Lc),d=zs.dot(Lc);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Vs,a);Nc.subVectors(t,r);let m=Vs.dot(Nc),v=zs.dot(Nc);if(v>=0&&m<=v)return e.copy(r);let b=m*c-l*v;if(b<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(zs,o);let f=h*v-m*d;if(f<=0&&d-h>=0&&m-v>=0)return wp.subVectors(r,s),o=(d-h)/(d-h+(m-v)),e.copy(s).addScaledVector(wp,o);let p=1/(f+b+u);return a=b*p,o=u*p,e.copy(n).addScaledVector(Vs,a).addScaledVector(zs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ce=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wa.copy(n.boundingBox)),Wa.applyMatrix4(t.matrixWorld),this.union(Wa)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tr),Xa.subVectors(this.max,Tr),Gs.subVectors(t.a,Tr),Hs.subVectors(t.b,Tr),Ws.subVectors(t.c,Tr),Ti.subVectors(Hs,Gs),Ci.subVectors(Ws,Hs),is.subVectors(Gs,Ws);let e=[0,-Ti.z,Ti.y,0,-Ci.z,Ci.y,0,-is.z,is.y,Ti.z,0,-Ti.x,Ci.z,0,-Ci.x,is.z,0,-is.x,-Ti.y,Ti.x,0,-Ci.y,Ci.x,0,-is.y,is.x,0];return!Bc(e,Gs,Hs,Ws,Xa)||(e=[1,0,0,0,1,0,0,0,1],!Bc(e,Gs,Hs,Ws,Xa))?!1:(qa.crossVectors(Ti,Ci),e=[qa.x,qa.y,qa.z],Bc(e,Gs,Hs,Ws,Xa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ei=[new P,new P,new P,new P,new P,new P,new P,new P],Pn=new P,Wa=new Ce,Gs=new P,Hs=new P,Ws=new P,Ti=new P,Ci=new P,is=new P,Tr=new P,Xa=new P,qa=new P,ss=new P;function Bc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ss.fromArray(i,r);let o=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),l=t.dot(ss),c=e.dot(ss),h=n.dot(ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Te=new P,Ya=new Ht,mv=0,Ve=class extends Wt{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jc,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ya.fromBufferAttribute(this,e),Ya.applyMatrix3(t),this.setXY(e,Ya.x,Ya.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Er(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Er(e,this.array)),e}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Er(e,this.array)),e}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Er(e,this.array)),e}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Er(e,this.array)),e}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),s=je(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),s=je(s,this.array),r=je(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jc&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var Vr=class extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var zr=class extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var qe=class extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}},gv=new Ce,Cr=new P,kc=new P,ri=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):gv.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cr.subVectors(t,this.center);let e=Cr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Cr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cr.copy(t.center).add(kc)),this.expandByPoint(Cr.copy(t.center).sub(kc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},vv=0,xn=new $t,Vc=new dn,Xs=new P,cn=new Ce,Pr=new Ce,Ue=new P,tn=class i extends Wt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=aa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nv(t)?zr:Vr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new It().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return Vc.lookAt(t),Vc.updateMatrix(),this.applyMatrix4(Vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&At("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ce);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Pr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(cn.min,Pr.min),cn.expandByPoint(Ue),Ue.addVectors(cn.max,Pr.max),cn.expandByPoint(Ue)):(cn.expandByPoint(Pr.min),cn.expandByPoint(Pr.max))}cn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ue.fromBufferAttribute(o,c),l&&(Xs.fromBufferAttribute(t,c),Ue.add(Xs)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ve(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new P,l[_]=new P;let c=new P,h=new P,d=new P,u=new Ht,m=new Ht,v=new Ht,b=new P,f=new P;function p(_,A,N){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,N),u.fromBufferAttribute(r,_),m.fromBufferAttribute(r,A),v.fromBufferAttribute(r,N),h.sub(c),d.sub(c),m.sub(u),v.sub(u);let I=1/(m.x*v.y-v.x*m.y);isFinite(I)&&(b.copy(h).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(I),f.copy(d).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(I),o[_].add(b),o[A].add(b),o[N].add(b),l[_].add(f),l[A].add(f),l[N].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let _=0,A=S.length;_<A;++_){let N=S[_],I=N.start,F=N.count;for(let Y=I,Z=I+F;Y<Z;Y+=3)p(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}let T=new P,y=new P,E=new P,M=new P;function C(_){E.fromBufferAttribute(s,_),M.copy(E);let A=o[_];T.copy(A),T.sub(E.multiplyScalar(E.dot(A))).normalize(),y.crossVectors(M,A);let I=y.dot(l[_])<0?-1:1;a.setXYZW(_,T.x,T.y,T.z,I)}for(let _=0,A=S.length;_<A;++_){let N=S[_],I=N.start,F=N.count;for(let Y=I,Z=I+F;Y<Z;Y+=3)C(t.getX(Y+0)),C(t.getX(Y+1)),C(t.getX(Y+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,m=t.count;u<m;u+=3){let v=t.getX(u+0),b=t.getX(u+1),f=t.getX(u+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,b),a.fromBufferAttribute(e,f),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),m=0,v=0;for(let b=0,f=l.length;b<f;b++){o.isInterleavedBufferAttribute?m=l[b]*o.data.stride+o.offset:m=l[b]*h;for(let p=0;p<h;p++)u[v++]=c[m++]}return new Ve(u,h,d)}if(this.index===null)return At("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var _v=0,Ni=class extends Wt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=aa(),this.name="",this.type="Material",this.blending=cs,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=po,this.blendDst=fo,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){At(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){At(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==po&&(n.blendSrc=this.blendSrc),this.blendDst!==fo&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ht().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ht().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ni=new P,zc=new P,$a=new P,Pi=new P,Gc=new P,Ka=new P,Hc=new P,Ui=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){zc.copy(t).add(e).multiplyScalar(.5),$a.copy(e).sub(t).normalize(),Pi.copy(this.origin).sub(zc);let r=t.distanceTo(e)*.5,a=-this.direction.dot($a),o=Pi.dot(this.direction),l=-Pi.dot($a),c=Pi.lengthSq(),h=Math.abs(1-a*a),d,u,m,v;if(h>0)if(d=a*l-o,u=a*o-l,v=r*h,d>=0)if(u>=-v)if(u<=v){let b=1/h;d*=b,u*=b,m=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u<=-v?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c):u<=v?(d=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(zc).addScaledVector($a,u),m}intersectSphere(t,e){ni.subVectors(t.center,this.origin);let n=ni.dot(this.direction),s=ni.dot(ni)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,n,s,r){Gc.subVectors(e,t),Ka.subVectors(n,t),Hc.crossVectors(Gc,Ka);let a=this.direction.dot(Hc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pi.subVectors(this.origin,t);let l=o*this.direction.dot(Ka.crossVectors(Pi,Ka));if(l<0)return null;let c=o*this.direction.dot(Gc.cross(Pi));if(c<0||l+c>a)return null;let h=-o*Pi.dot(Hc);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ai=class extends Ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Mp=new $t,rs=new Ui,Za=new ri,Sp=new P,Ja=new P,ja=new P,Qa=new P,Wc=new P,to=new P,Ep=new P,eo=new P,en=class extends dn{constructor(t=new tn,e=new ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){to.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Wc.fromBufferAttribute(d,t),a?to.addScaledVector(Wc,h):to.addScaledVector(Wc.sub(e),h))}e.add(to)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(r),rs.copy(t.ray).recast(t.near),!(Za.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Za,Sp)===null||rs.origin.distanceToSquared(Sp)>ns(t.far-t.near,2)))&&(Mp.copy(r).invert(),rs.copy(t.ray).applyMatrix4(Mp),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,rs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,b=u.length;v<b;v++){let f=u[v],p=a[f.materialIndex],S=Math.max(f.start,m.start),T=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let y=S,E=T;y<E;y+=3){let M=o.getX(y),C=o.getX(y+1),_=o.getX(y+2);s=no(this,p,t,n,c,h,d,M,C,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let v=Math.max(0,m.start),b=Math.min(o.count,m.start+m.count);for(let f=v,p=b;f<p;f+=3){let S=o.getX(f),T=o.getX(f+1),y=o.getX(f+2);s=no(this,a,t,n,c,h,d,S,T,y),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,b=u.length;v<b;v++){let f=u[v],p=a[f.materialIndex],S=Math.max(f.start,m.start),T=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let y=S,E=T;y<E;y+=3){let M=y,C=y+1,_=y+2;s=no(this,p,t,n,c,h,d,M,C,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let v=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let f=v,p=b;f<p;f+=3){let S=f,T=f+1,y=f+2;s=no(this,a,t,n,c,h,d,S,T,y),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function xv(i,t,e,n,s,r,a,o){let l;if(t.side===$e?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===si,o),l===null)return null;eo.copy(o),eo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(eo);return c<e.near||c>e.far?null:{distance:c,point:eo.clone(),object:i}}function no(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ja),i.getVertexPosition(l,ja),i.getVertexPosition(c,Qa);let h=xv(i,t,e,n,Ja,ja,Qa,Ep);if(h){let d=new P;Ii.getBarycoord(Ep,Ja,ja,Qa,d),s&&(h.uv=Ii.getInterpolatedAttribute(s,o,l,c,d,new Ht)),r&&(h.uv1=Ii.getInterpolatedAttribute(r,o,l,c,d,new Ht)),a&&(h.normal=Ii.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};Ii.getNormal(Ja,ja,Qa,u.normal),h.face=u,h.barycoord=d}return h}var Gr=class extends Qe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Fe,h=Fe,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hr=class extends Ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},qs=new $t,Ap=new $t,io=[],Tp=new Ce,bv=new $t,Rr=new en,Ir=new ri,us=class extends en{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Hr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,bv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ce),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qs),Tp.copy(t.boundingBox).applyMatrix4(qs),this.boundingBox.union(Tp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qs),Ir.copy(t.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(Ir)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Rr.geometry=this.geometry,Rr.material=this.material,Rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(n),t.ray.intersectsSphere(Ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qs),Ap.multiplyMatrices(n,qs),Rr.matrixWorld=Ap,Rr.raycast(t,io);for(let a=0,o=io.length;a<o;a++){let l=io[a];l.instanceId=r,l.object=this,e.push(l)}io.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Hr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gr(new Float32Array(s*this.count),s,this.count,el,yn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Xc=new P,yv=new P,wv=new It,On=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Xc.subVectors(n,e).cross(yv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Xc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||wv.getNormalMatrix(t),s=this.coplanarPoint(Xc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},as=new ri,Mv=new Ht(.5,.5),so=new P,ds=class{constructor(t=new On,e=new On,n=new On,s=new On,r=new On,a=new On){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],m=r[7],v=r[8],b=r[9],f=r[10],p=r[11],S=r[12],T=r[13],y=r[14],E=r[15];if(s[0].setComponents(c-a,m-h,p-v,E-S).normalize(),s[1].setComponents(c+a,m+h,p+v,E+S).normalize(),s[2].setComponents(c+o,m+d,p+b,E+T).normalize(),s[3].setComponents(c-o,m-d,p-b,E-T).normalize(),n)s[4].setComponents(l,u,f,y).normalize(),s[5].setComponents(c-l,m-u,p-f,E-y).normalize();else if(s[4].setComponents(c-l,m-u,p-f,E-y).normalize(),e===bn)s[5].setComponents(c+l,m+u,p+f,E+y).normalize();else if(e===Zs)s[5].setComponents(l,u,f,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){as.center.set(0,0,0);let e=Mv.distanceTo(t.center);return as.radius=.7071067811865476+e,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(so.x=s.normal.x>0?t.max.x:t.min.x,so.y=s.normal.y>0?t.max.y:t.min.y,so.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(so)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ps=class extends Ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Po=new P,Ro=new P,Cp=new $t,Dr=new Ui,ro=new ri,qc=new P,Pp=new P,Io=class extends dn{constructor(t=new tn,e=new ps){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Po.fromBufferAttribute(e,s-1),Ro.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Po.distanceTo(Ro);t.setAttribute("lineDistance",new qe(n,1))}else At("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(s),ro.radius+=r,t.ray.intersectsSphere(ro)===!1)return;Cp.copy(s).invert(),Dr.copy(t.ray).applyMatrix4(Cp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let m=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let b=m,f=v-1;b<f;b+=c){let p=h.getX(b),S=h.getX(b+1),T=ao(this,t,Dr,l,p,S,b);T&&e.push(T)}if(this.isLineLoop){let b=h.getX(v-1),f=h.getX(m),p=ao(this,t,Dr,l,b,f,v-1);p&&e.push(p)}}else{let m=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let b=m,f=v-1;b<f;b+=c){let p=ao(this,t,Dr,l,b,b+1,b);p&&e.push(p)}if(this.isLineLoop){let b=ao(this,t,Dr,l,v-1,m,v-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ao(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Po.fromBufferAttribute(o,s),Ro.fromBufferAttribute(o,r),e.distanceSqToSegment(Po,Ro,qc,Pp)>n)return;qc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(qc);if(!(c<t.near||c>t.far))return{distance:c,point:Pp.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Rp=new P,Ip=new P,er=class extends Io{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Rp.fromBufferAttribute(e,s),Ip.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Rp.distanceTo(Ip);t.setAttribute("lineDistance",new qe(n,1))}else At("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Wr=class extends Qe{constructor(t=[],e=Vi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var oi=class extends Qe{constructor(t,e,n=In,s,r,a,o=Fe,l=Fe,c,h=kn,d=1){if(h!==kn&&h!==Gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new js(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Do=class extends oi{constructor(t,e=In,n=Vi,s,r,a=Fe,o=Fe,l,c=kn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Xr=class extends Qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Vn=class i extends tn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,m=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(d,2));function v(b,f,p,S,T,y,E,M,C,_,A){let N=y/C,I=E/_,F=y/2,Y=E/2,Z=M/2,V=C+1,q=_+1,H=0,j=0,tt=new P;for(let ut=0;ut<q;ut++){let mt=ut*I-Y;for(let _t=0;_t<V;_t++){let Zt=_t*N-F;tt[b]=Zt*S,tt[f]=mt*T,tt[p]=Z,c.push(tt.x,tt.y,tt.z),tt[b]=0,tt[f]=0,tt[p]=M>0?1:-1,h.push(tt.x,tt.y,tt.z),d.push(_t/C),d.push(1-ut/_),H+=1}}for(let ut=0;ut<_;ut++)for(let mt=0;mt<C;mt++){let _t=u+mt+V*ut,Zt=u+mt+V*(ut+1),fe=u+(mt+1)+V*(ut+1),Jt=u+(mt+1)+V*ut;l.push(_t,Zt,Jt),l.push(Zt,fe,Jt),j+=6}o.addGroup(m,j,A),m+=j,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var qr=class i extends tn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,m=[],v=[],b=[],f=[];for(let p=0;p<h;p++){let S=p*u-a;for(let T=0;T<c;T++){let y=T*d-r;v.push(y,-S,0),b.push(0,0,1),f.push(T/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let T=S+c*p,y=S+c*(p+1),E=S+1+c*(p+1),M=S+1+c*p;m.push(T,y,M),m.push(y,E,M)}this.setIndex(m),this.setAttribute("position",new qe(v,3)),this.setAttribute("normal",new qe(b,3)),this.setAttribute("uv",new qe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function ms(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Dp(s))s.isRenderTargetTexture?(At("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Dp(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ye(i){let t={};for(let e=0;e<i.length;e++){let n=ms(i[e]);for(let s in n)t[s]=n[s]}return t}function Dp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Sv(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Sh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}var yf={clone:ms,merge:Ye},Ev=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Av=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends Ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ev,this.fragmentShader=Av,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=Sv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ut().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ht().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ue().fromArray(s.value);break;case"m3":this.uniforms[n].value=new It().fromArray(s.value);break;case"m4":this.uniforms[n].value=new $t().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Lo=class extends pn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var No=class extends Ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Uo=class extends Ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function oo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}var Oi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Oo=class extends Oi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$c,endingEnd:$c}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kc:r=t,o=2*e-n;break;case Zc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Kc:a=t,l=2*n-e;break;case Zc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,m=this._weightNext,v=(n-e)/(s-e),b=v*v,f=b*v,p=-u*f+2*u*b-u*v,S=(1+u)*f+(-1.5-2*u)*b+(-.5+u)*v+1,T=(-1-m)*f+(1.5+m)*b+.5*v,y=m*f-m*b;for(let E=0;E!==o;++E)r[E]=p*a[h+E]+S*a[c+E]+T*a[l+E]+y*a[d+E];return r}},Fo=class extends Oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Bo=class extends Oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ko=class extends Oi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let v=(n-e)/(s-e),b=1-v;for(let f=0;f!==o;++f)r[f]=a[c+f]*b+a[l+f]*v;return r}let u=o*2,m=t-1;for(let v=0;v!==o;++v){let b=a[c+v],f=a[l+v],p=m*u+v*2,S=d[p],T=d[p+1],y=t*u+v*2,E=h[y],M=h[y+1],C=(n-e)/(s-e),_,A,N,I,F;for(let Y=0;Y<8;Y++){_=C*C,A=_*C,N=1-C,I=N*N,F=I*N;let V=F*e+3*I*C*S+3*N*_*E+A*s-n;if(Math.abs(V)<1e-10)break;let q=3*I*(S-e)+6*N*C*(E-S)+3*_*(s-E);if(Math.abs(q)<1e-10)break;C=C-V/q,C=Math.max(0,Math.min(1,C))}r[v]=F*b+3*I*C*T+3*N*_*M+A*f}return r}},fn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=oo(e,this.TimeBufferType),this.values=oo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:oo(t.times,Array),values:oo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Bo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Oo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ko(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Lr:e=this.InterpolantFactoryMethodDiscrete;break;case So:e=this.InterpolantFactoryMethodLinear;break;case uo:e=this.InterpolantFactoryMethodSmooth;break;case Yc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return At("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return So;case this.InterpolantFactoryMethodSmooth:return uo;case this.InterpolantFactoryMethodBezier:return Yc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Pt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Pt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Pt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Pt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&iv(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Pt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===uo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,m=d+n;for(let v=0;v!==n;++v){let b=e[d+v];if(b!==e[u+v]||b!==e[m+v]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let m=0;m!==n;++m)e[u+m]=e[d+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=So;var Fi=class extends fn{constructor(t,e,n){super(t,e,n)}};Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Lr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Vo=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}};Vo.prototype.ValueTypeName="color";var zo=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}};zo.prototype.ValueTypeName="number";var Go=class extends Oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Se.slerpFlat(r,0,a,c-o,a,c,l);return r}},Yr=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Go(this.times,this.values,this.getValueSize(),t)}};Yr.prototype.ValueTypeName="quaternion";Yr.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends fn{constructor(t,e,n){super(t,e,n)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Lr;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ho=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}};Ho.prototype.ValueTypeName="vector";var Wo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let m=c[d],v=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wf=new Wo,Xo=class{constructor(t){this.manager=t!==void 0?t:wf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Xo.DEFAULT_MATERIAL_NAME="__DEFAULT";var lo=new P,co=new Se,Un=new P,nr=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(lo,co,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lo,co,Un.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(lo,co,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lo,co,Un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ri=new P,Lp=new Ht,Np=new Ht,Oe=class extends nr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Mc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(Mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z)}getViewSize(t,e){return this.getViewBounds(t,Lp,Np),e.subVectors(Np,Lp)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Mc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var $r=class extends nr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Ys=-90,$s=1,qo=class extends dn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Oe(Ys,$s,t,e);s.layers=this.layers,this.add(s);let r=new Oe(Ys,$s,t,e);r.layers=this.layers,this.add(r);let a=new Oe(Ys,$s,t,e);a.layers=this.layers,this.add(a);let o=new Oe(Ys,$s,t,e);o.layers=this.layers,this.add(o);let l=new Oe(Ys,$s,t,e);l.layers=this.layers,this.add(l);let c=new Oe(Ys,$s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},Yo=class extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Eh="\\[\\]\\.:\\/",Tv=new RegExp("["+Eh+"]","g"),Ah="[^"+Eh+"]",Cv="[^"+Eh.replace("\\.","")+"]",Pv=/((?:WC+[\/:])*)/.source.replace("WC",Ah),Rv=/(WCOD+)?/.source.replace("WCOD",Cv),Iv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ah),Dv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ah),Lv=new RegExp("^"+Pv+Rv+Iv+Dv+"$"),Nv=["material","materials","bones","map"],Qc=class{constructor(t,e,n){let s=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},he=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Tv,"")}static parseTrackName(t){let e=Lv.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Nv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){At("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Pt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=Qc;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var YS=new Float32Array(1);var Up=new $t,Kr=class{constructor(t,e,n=0,s=1/0){this.ray=new Ui(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Qs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Pt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Up.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Up),this}intersectObject(t,e=!0,n=[]){return th(t,this,n,e),n.sort(Op),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)th(t[s],this,n,e);return n.sort(Op),n}};function Op(i,t){return i.distance-t.distance}function th(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)th(r[a],t,e,!0)}}var ki=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Vt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Dh=class Dh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Dh.prototype.isMatrix2=!0;var eh=Dh;var ho=new P,_e=new nr,Zr=class extends er{constructor(t){let e=new tn,n=new ps({color:16777215,vertexColors:!0,toneMapped:!1}),s=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(v,b){l(v),l(b)}function l(v){s.push(0,0,0),r.push(0,0,0),a[v]===void 0&&(a[v]=[]),a[v].push(s.length/3-1)}e.setAttribute("position",new qe(s,3)),e.setAttribute("color",new qe(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();let c=new Ut(16755200),h=new Ut(16711680),d=new Ut(43775),u=new Ut(16777215),m=new Ut(3355443);this.setColors(c,h,d,u,m)}setColors(t,e,n,s,r){let o=this.geometry.getAttribute("color");return o.setXYZ(0,t.r,t.g,t.b),o.setXYZ(1,t.r,t.g,t.b),o.setXYZ(2,t.r,t.g,t.b),o.setXYZ(3,t.r,t.g,t.b),o.setXYZ(4,t.r,t.g,t.b),o.setXYZ(5,t.r,t.g,t.b),o.setXYZ(6,t.r,t.g,t.b),o.setXYZ(7,t.r,t.g,t.b),o.setXYZ(8,t.r,t.g,t.b),o.setXYZ(9,t.r,t.g,t.b),o.setXYZ(10,t.r,t.g,t.b),o.setXYZ(11,t.r,t.g,t.b),o.setXYZ(12,t.r,t.g,t.b),o.setXYZ(13,t.r,t.g,t.b),o.setXYZ(14,t.r,t.g,t.b),o.setXYZ(15,t.r,t.g,t.b),o.setXYZ(16,t.r,t.g,t.b),o.setXYZ(17,t.r,t.g,t.b),o.setXYZ(18,t.r,t.g,t.b),o.setXYZ(19,t.r,t.g,t.b),o.setXYZ(20,t.r,t.g,t.b),o.setXYZ(21,t.r,t.g,t.b),o.setXYZ(22,t.r,t.g,t.b),o.setXYZ(23,t.r,t.g,t.b),o.setXYZ(24,e.r,e.g,e.b),o.setXYZ(25,e.r,e.g,e.b),o.setXYZ(26,e.r,e.g,e.b),o.setXYZ(27,e.r,e.g,e.b),o.setXYZ(28,e.r,e.g,e.b),o.setXYZ(29,e.r,e.g,e.b),o.setXYZ(30,e.r,e.g,e.b),o.setXYZ(31,e.r,e.g,e.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,s.r,s.g,s.b),o.setXYZ(39,s.r,s.g,s.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){let t=this.geometry,e=this.pointMap,n=1,s=1,r,a;if(_e.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===bn)r=-1,a=1;else if(this.camera.coordinateSystem===Zs)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Me("c",e,t,_e,0,0,r),Me("t",e,t,_e,0,0,a),Me("n1",e,t,_e,-n,-s,r),Me("n2",e,t,_e,n,-s,r),Me("n3",e,t,_e,-n,s,r),Me("n4",e,t,_e,n,s,r),Me("f1",e,t,_e,-n,-s,a),Me("f2",e,t,_e,n,-s,a),Me("f3",e,t,_e,-n,s,a),Me("f4",e,t,_e,n,s,a),Me("u1",e,t,_e,n*.7,s*1.1,r),Me("u2",e,t,_e,-n*.7,s*1.1,r),Me("u3",e,t,_e,0,s*2,r),Me("cf1",e,t,_e,-n,0,a),Me("cf2",e,t,_e,n,0,a),Me("cf3",e,t,_e,0,-s,a),Me("cf4",e,t,_e,0,s,a),Me("cn1",e,t,_e,-n,0,r),Me("cn2",e,t,_e,n,0,r),Me("cn3",e,t,_e,0,-s,r),Me("cn4",e,t,_e,0,s,r),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function Me(i,t,e,n,s,r,a){ho.set(s,r,a).unproject(n);let o=t[i];if(o!==void 0){let l=e.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],ho.x,ho.y,ho.z)}}function Th(i,t,e,n){let s=Uv(n);switch(e){case xh:return i*t;case el:return i*t/s.components*s.byteLength;case nl:return i*t/s.components*s.byteLength;case Hi:return i*t*2/s.components*s.byteLength;case il:return i*t*2/s.components*s.byteLength;case bh:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case sl:return i*t*4/s.components*s.byteLength;case ta:case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case na:case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case al:case ll:return Math.max(i,16)*Math.max(t,8)/4;case rl:case ol:return Math.max(i,8)*Math.max(t,8)/2;case cl:case hl:case dl:case pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ul:case sa:case fl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case vl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case _l:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case xl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case bl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case yl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case El:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Al:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Tl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Cl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Pl:case Rl:case Il:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Dl:case Ll:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ra:case Nl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Uv(i){switch(i){case mn:case mh:return{byteLength:1,components:1};case sr:case gh:case Hn:return{byteLength:2,components:1};case Qo:case tl:return{byteLength:2,components:4};case In:case jo:case yn:return{byteLength:4,components:1};case vh:case _h:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window!="undefined"&&(window.__THREE__?At("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Xf(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Fv(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((m,v)=>m.start-v.start);let u=0;for(let m=1;m<d.length;m++){let v=d[u],b=d[m];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++u,d[u]=b)}d.length=u+1;for(let m=0,v=d.length;m<v;m++){let b=d[m];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Bv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kv=`#ifdef USE_ALPHAHASH
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
#endif`,Vv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wv=`#ifdef USE_AOMAP
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
#endif`,Xv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qv=`#ifdef USE_BATCHING
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
#endif`,Yv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$v=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jv=`#ifdef USE_IRIDESCENCE
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
#endif`,jv=`#ifdef USE_BUMPMAP
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
#endif`,Qv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,s_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,r_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,a_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,o_=`#define PI 3.141592653589793
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
} // validated`,l_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,c_=`vec3 transformedNormal = objectNormal;
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
#endif`,h_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f_="gl_FragColor = linearToOutputTexel( gl_FragColor );",m_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g_=`#ifdef USE_ENVMAP
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
#endif`,v_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,__=`#ifdef USE_ENVMAP
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
#endif`,x_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b_=`#ifdef USE_ENVMAP
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
#endif`,y_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E_=`#ifdef USE_GRADIENTMAP
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
}`,A_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,R_=`#ifdef USE_ENVMAP
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
	#endif
#endif`,I_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U_=`PhysicalMaterial material;
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
#endif`,O_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,F_=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
#endif`,B_=`#if defined( RE_IndirectDiffuse )
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
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,k_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,z_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$_=`#if defined( USE_POINTS_UV )
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
#endif`,K_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t0=`#ifdef USE_MORPHTARGETS
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
#endif`,e0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,i0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,o0=`#ifdef USE_NORMALMAP
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
#endif`,l0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,w0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,M0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,S0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,A0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T0=`#ifdef USE_SKINNING
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
#endif`,C0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,D0=`#ifdef USE_TRANSMISSION
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
#endif`,L0=`#ifdef USE_TRANSMISSION
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,B0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k0=`uniform sampler2D t2D;
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
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`#include <common>
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
}`,X0=`#if DEPTH_PACKING == 3200
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
}`,q0=`#define DISTANCE
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
}`,Y0=`#define DISTANCE
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
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`uniform float scale;
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
}`,J0=`uniform vec3 diffuse;
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
}`,j0=`#include <common>
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
}`,Q0=`uniform vec3 diffuse;
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
}`,tx=`#define LAMBERT
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
}`,ex=`#define LAMBERT
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
}`,nx=`#define MATCAP
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
}`,ix=`#define MATCAP
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
}`,sx=`#define NORMAL
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
}`,rx=`#define NORMAL
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
}`,ax=`#define PHONG
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
}`,ox=`#define PHONG
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
}`,lx=`#define STANDARD
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
}`,cx=`#define STANDARD
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
}`,hx=`#define TOON
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
}`,ux=`#define TOON
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
}`,dx=`uniform float size;
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
}`,px=`uniform vec3 diffuse;
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
}`,fx=`#include <common>
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
}`,mx=`uniform vec3 color;
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
}`,gx=`uniform float rotation;
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
}`,vx=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:Bv,alphahash_pars_fragment:kv,alphamap_fragment:Vv,alphamap_pars_fragment:zv,alphatest_fragment:Gv,alphatest_pars_fragment:Hv,aomap_fragment:Wv,aomap_pars_fragment:Xv,batching_pars_vertex:qv,batching_vertex:Yv,begin_vertex:$v,beginnormal_vertex:Kv,bsdfs:Zv,iridescence_fragment:Jv,bumpmap_pars_fragment:jv,clipping_planes_fragment:Qv,clipping_planes_pars_fragment:t_,clipping_planes_pars_vertex:e_,clipping_planes_vertex:n_,color_fragment:i_,color_pars_fragment:s_,color_pars_vertex:r_,color_vertex:a_,common:o_,cube_uv_reflection_fragment:l_,defaultnormal_vertex:c_,displacementmap_pars_vertex:h_,displacementmap_vertex:u_,emissivemap_fragment:d_,emissivemap_pars_fragment:p_,colorspace_fragment:f_,colorspace_pars_fragment:m_,envmap_fragment:g_,envmap_common_pars_fragment:v_,envmap_pars_fragment:__,envmap_pars_vertex:x_,envmap_physical_pars_fragment:R_,envmap_vertex:b_,fog_vertex:y_,fog_pars_vertex:w_,fog_fragment:M_,fog_pars_fragment:S_,gradientmap_pars_fragment:E_,lightmap_pars_fragment:A_,lights_lambert_fragment:T_,lights_lambert_pars_fragment:C_,lights_pars_begin:P_,lights_toon_fragment:I_,lights_toon_pars_fragment:D_,lights_phong_fragment:L_,lights_phong_pars_fragment:N_,lights_physical_fragment:U_,lights_physical_pars_fragment:O_,lights_fragment_begin:F_,lights_fragment_maps:B_,lights_fragment_end:k_,lightprobes_pars_fragment:V_,logdepthbuf_fragment:z_,logdepthbuf_pars_fragment:G_,logdepthbuf_pars_vertex:H_,logdepthbuf_vertex:W_,map_fragment:X_,map_pars_fragment:q_,map_particle_fragment:Y_,map_particle_pars_fragment:$_,metalnessmap_fragment:K_,metalnessmap_pars_fragment:Z_,morphinstance_vertex:J_,morphcolor_vertex:j_,morphnormal_vertex:Q_,morphtarget_pars_vertex:t0,morphtarget_vertex:e0,normal_fragment_begin:n0,normal_fragment_maps:i0,normal_pars_fragment:s0,normal_pars_vertex:r0,normal_vertex:a0,normalmap_pars_fragment:o0,clearcoat_normal_fragment_begin:l0,clearcoat_normal_fragment_maps:c0,clearcoat_pars_fragment:h0,iridescence_pars_fragment:u0,opaque_fragment:d0,packing:p0,premultiplied_alpha_fragment:f0,project_vertex:m0,dithering_fragment:g0,dithering_pars_fragment:v0,roughnessmap_fragment:_0,roughnessmap_pars_fragment:x0,shadowmap_pars_fragment:b0,shadowmap_pars_vertex:y0,shadowmap_vertex:w0,shadowmask_pars_fragment:M0,skinbase_vertex:S0,skinning_pars_vertex:E0,skinning_vertex:A0,skinnormal_vertex:T0,specularmap_fragment:C0,specularmap_pars_fragment:P0,tonemapping_fragment:R0,tonemapping_pars_fragment:I0,transmission_fragment:D0,transmission_pars_fragment:L0,uv_pars_fragment:N0,uv_pars_vertex:U0,uv_vertex:O0,worldpos_vertex:F0,background_vert:B0,background_frag:k0,backgroundCube_vert:V0,backgroundCube_frag:z0,cube_vert:G0,cube_frag:H0,depth_vert:W0,depth_frag:X0,distance_vert:q0,distance_frag:Y0,equirect_vert:$0,equirect_frag:K0,linedashed_vert:Z0,linedashed_frag:J0,meshbasic_vert:j0,meshbasic_frag:Q0,meshlambert_vert:tx,meshlambert_frag:ex,meshmatcap_vert:nx,meshmatcap_frag:ix,meshnormal_vert:sx,meshnormal_frag:rx,meshphong_vert:ax,meshphong_frag:ox,meshphysical_vert:lx,meshphysical_frag:cx,meshtoon_vert:hx,meshtoon_frag:ux,points_vert:dx,points_frag:px,shadow_vert:fx,shadow_frag:mx,sprite_vert:gx,sprite_frag:vx},ht={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},Xn={basic:{uniforms:Ye([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Ye([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Ye([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Ye([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Ye([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Ye([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Ye([ht.points,ht.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Ye([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Ye([ht.common,ht.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Ye([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Ye([ht.sprite,ht.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distance:{uniforms:Ye([ht.common,ht.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distance_vert,fragmentShader:Ot.distance_frag},shadow:{uniforms:Ye([ht.lights,ht.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Xn.physical={uniforms:Ye([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};var Fl={r:0,b:0,g:0},_x=new $t,qf=new It;qf.set(-1,0,0,0,1,0,0,0,1);function xx(i,t,e,n,s,r){let a=new Ut(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function m(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){let y=S.backgroundBlurriness>0;T=t.get(T,y)}return T}function v(S){let T=!1,y=m(S);y===null?f(a,o):y&&y.isColor&&(f(y,1),T=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(S,T){let y=m(T);y&&(y.isCubeTexture||y.mapping===jr)?(c===void 0&&(c=new en(new Vn(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:ms(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,M,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_x.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qf),c.material.toneMapped=Gt.getTransfer(y.colorSpace)!==Qt,(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new en(new qr(2,2),new pn({name:"BackgroundMaterial",uniforms:ms(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Gt.getTransfer(y.colorSpace)!==Qt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function f(S,T){S.getRGB(Fl,Sh(i)),e.buffers.color.setClear(Fl.r,Fl.g,Fl.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),o=T,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,f(a,o)},render:v,addToRenderList:b,dispose:p}}function bx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(I,F,Y,Z,V){let q=!1,H=d(I,Z,Y,F);r!==H&&(r=H,c(r.object)),q=m(I,Z,Y,V),q&&v(I,Z,Y,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(I,F,Y,Z),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function d(I,F,Y,Z){let V=Z.wireframe===!0,q=n[F.id];q===void 0&&(q={},n[F.id]=q);let H=I.isInstancedMesh===!0?I.id:0,j=q[H];j===void 0&&(j={},q[H]=j);let tt=j[Y.id];tt===void 0&&(tt={},j[Y.id]=tt);let ut=tt[V];return ut===void 0&&(ut=u(l()),tt[V]=ut),ut}function u(I){let F=[],Y=[],Z=[];for(let V=0;V<e;V++)F[V]=0,Y[V]=0,Z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Y,attributeDivisors:Z,object:I,attributes:{},index:null}}function m(I,F,Y,Z){let V=r.attributes,q=F.attributes,H=0,j=Y.getAttributes();for(let tt in j)if(j[tt].location>=0){let mt=V[tt],_t=q[tt];if(_t===void 0&&(tt==="instanceMatrix"&&I.instanceMatrix&&(_t=I.instanceMatrix),tt==="instanceColor"&&I.instanceColor&&(_t=I.instanceColor)),mt===void 0||mt.attribute!==_t||_t&&mt.data!==_t.data)return!0;H++}return r.attributesNum!==H||r.index!==Z}function v(I,F,Y,Z){let V={},q=F.attributes,H=0,j=Y.getAttributes();for(let tt in j)if(j[tt].location>=0){let mt=q[tt];mt===void 0&&(tt==="instanceMatrix"&&I.instanceMatrix&&(mt=I.instanceMatrix),tt==="instanceColor"&&I.instanceColor&&(mt=I.instanceColor));let _t={};_t.attribute=mt,mt&&mt.data&&(_t.data=mt.data),V[tt]=_t,H++}r.attributes=V,r.attributesNum=H,r.index=Z}function b(){let I=r.newAttributes;for(let F=0,Y=I.length;F<Y;F++)I[F]=0}function f(I){p(I,0)}function p(I,F){let Y=r.newAttributes,Z=r.enabledAttributes,V=r.attributeDivisors;Y[I]=1,Z[I]===0&&(i.enableVertexAttribArray(I),Z[I]=1),V[I]!==F&&(i.vertexAttribDivisor(I,F),V[I]=F)}function S(){let I=r.newAttributes,F=r.enabledAttributes;for(let Y=0,Z=F.length;Y<Z;Y++)F[Y]!==I[Y]&&(i.disableVertexAttribArray(Y),F[Y]=0)}function T(I,F,Y,Z,V,q,H){H===!0?i.vertexAttribIPointer(I,F,Y,V,q):i.vertexAttribPointer(I,F,Y,Z,V,q)}function y(I,F,Y,Z){b();let V=Z.attributes,q=Y.getAttributes(),H=F.defaultAttributeValues;for(let j in q){let tt=q[j];if(tt.location>=0){let ut=V[j];if(ut===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(ut=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(ut=I.instanceColor)),ut!==void 0){let mt=ut.normalized,_t=ut.itemSize,Zt=t.get(ut);if(Zt===void 0)continue;let fe=Zt.buffer,Jt=Zt.type,J=Zt.bytesPerElement,st=Jt===i.INT||Jt===i.UNSIGNED_INT||ut.gpuType===jo;if(ut.isInterleavedBufferAttribute){let et=ut.data,Rt=et.stride,Dt=ut.offset;if(et.isInstancedInterleavedBuffer){for(let Tt=0;Tt<tt.locationSize;Tt++)p(tt.location+Tt,et.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Tt=0;Tt<tt.locationSize;Tt++)f(tt.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let Tt=0;Tt<tt.locationSize;Tt++)T(tt.location+Tt,_t/tt.locationSize,Jt,mt,Rt*J,(Dt+_t/tt.locationSize*Tt)*J,st)}else{if(ut.isInstancedBufferAttribute){for(let et=0;et<tt.locationSize;et++)p(tt.location+et,ut.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let et=0;et<tt.locationSize;et++)f(tt.location+et);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let et=0;et<tt.locationSize;et++)T(tt.location+et,_t/tt.locationSize,Jt,mt,_t*J,_t/tt.locationSize*et*J,st)}}else if(H!==void 0){let mt=H[j];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(tt.location,mt);break;case 3:i.vertexAttrib3fv(tt.location,mt);break;case 4:i.vertexAttrib4fv(tt.location,mt);break;default:i.vertexAttrib1fv(tt.location,mt)}}}}S()}function E(){A();for(let I in n){let F=n[I];for(let Y in F){let Z=F[Y];for(let V in Z){let q=Z[V];for(let H in q)h(q[H].object),delete q[H];delete Z[V]}}delete n[I]}}function M(I){if(n[I.id]===void 0)return;let F=n[I.id];for(let Y in F){let Z=F[Y];for(let V in Z){let q=Z[V];for(let H in q)h(q[H].object),delete q[H];delete Z[V]}}delete n[I.id]}function C(I){for(let F in n){let Y=n[F];for(let Z in Y){let V=Y[Z];if(V[I.id]===void 0)continue;let q=V[I.id];for(let H in q)h(q[H].object),delete q[H];delete V[I.id]}}}function _(I){for(let F in n){let Y=n[F],Z=I.isInstancedMesh===!0?I.id:0,V=Y[Z];if(V!==void 0){for(let q in V){let H=V[q];for(let j in H)h(H[j].object),delete H[j];delete V[q]}delete Y[Z],Object.keys(Y).length===0&&delete n[F]}}}function A(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:N,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:f,disableUnusedAttributes:S}}function yx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function wx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==wn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let _=C===Hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==mn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==yn&&!_)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(At("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&At("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:y,maxSamples:E,samples:M}}function Mx(i){let t=this,e=null,n=0,s=!1,r=!1,a=new On,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let m=d.length!==0||u||n!==0||s;return s=u,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,m){let v=d.clippingPlanes,b=d.clipIntersection,f=d.clipShadows,p=i.get(d);if(!s||v===null||v.length===0||r&&!f)r?h(null):c();else{let S=r?0:n,T=S*4,y=p.clippingState||null;l.value=y,y=h(v,u,T,m);for(let E=0;E!==T;++E)y[E]=e[E];p.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,v){let b=d!==null?d.length:0,f=null;if(b!==0){if(f=l.value,v!==!0||f===null){let p=m+b*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<p)&&(f=new Float32Array(p));for(let T=0,y=m;T!==b;++T,y+=4)a.copy(d[T]).applyMatrix4(S,o),a.normal.toArray(f,y),f[y+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,f}}var Wi=4,Mf=[.125,.215,.35,.446,.526,.582],gs=20,Sx=256,oa=new $r,Sf=new Ut,Lh=null,Nh=0,Uh=0,Oh=!1,Ex=new P,kl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Ex}=r;Lh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Lh,Nh,Uh),this._renderer.xr.enabled=Oh,t.scissorTest=!1,ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vi||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:Hn,format:wn,colorSpace:Nr,depthBuffer:!1},s=Ef(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ef(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ax(r)),this._blurMaterial=Cx(r,t,e),this._ggxMaterial=Tx(r,t,e)}return s}_compileMaterial(t){let e=new en(new tn,t);this._renderer.compile(e,oa)}_sceneToCubeUV(t,e,n,s,r){let l=new Oe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,m=d.toneMapping;d.getClearColor(Sf),d.toneMapping=Rn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new en(new Vn,new ai({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,f=b.material,p=!1,S=t.background;S?S.isColor&&(f.color.copy(S),t.background=null,p=!0):(f.color.copy(Sf),p=!0);for(let T=0;T<6;T++){let y=T%3;y===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):y===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let E=this._cubeSize;ar(s,y*E,T>2?E:0,E,E),d.setRenderTarget(s),p&&d.render(b,l),d.render(t,l)}d.toneMapping=m,d.autoClear=u,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Vi||t.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Af());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ar(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,oa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,m=d*u,{_lodMax:v}=this,b=this._sizeLods[n],f=3*b*(n>v-Wi?n-v+Wi:0),p=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=v-e,ar(r,f,p,3*b,2*b),s.setRenderTarget(r),s.render(o,oa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=v-n,ar(t,f,p,3*b,2*b),s.setRenderTarget(t),s.render(o,oa)}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[s];d.material=c;let u=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*gs-1),b=r/v,f=isFinite(r)?1+Math.floor(h*b):gs;f>gs&&At(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${gs}`);let p=[],S=0;for(let C=0;C<gs;++C){let _=C/b,A=Math.exp(-_*_/2);p.push(A),C===0?S+=A:C<f&&(S+=2*A)}for(let C=0;C<p.length;C++)p[C]=p[C]/S;u.envMap.value=t.texture,u.samples.value=f,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:T}=this;u.dTheta.value=v,u.mipInt.value=T-n;let y=this._sizeLods[s],E=3*y*(s>T-Wi?s-T+Wi:0),M=4*(this._cubeSize-y);ar(e,E,M,3*y,2*y),l.setRenderTarget(e),l.render(d,oa)}};function Ax(i){let t=[],e=[],n=[],s=i,r=i-Wi+1+Mf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Wi?l=Mf[a-i+Wi-1]:a===0&&(l=0),e.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,v=6,b=3,f=2,p=1,S=new Float32Array(b*v*m),T=new Float32Array(f*v*m),y=new Float32Array(p*v*m);for(let M=0;M<m;M++){let C=M%3*2/3-1,_=M>2?0:-1,A=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];S.set(A,b*v*M),T.set(u,f*v*M);let N=[M,M,M,M,M,M];y.set(N,p*v*M)}let E=new tn;E.setAttribute("position",new Ve(S,b)),E.setAttribute("uv",new Ve(T,f)),E.setAttribute("faceIndex",new Ve(y,p)),n.push(new en(E,null)),s>Wi&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Ef(i,t,e){let n=new un(i,t,e);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ar(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Tx(i,t,e){return new pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Sx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Cx(i,t,e){let n=new Float32Array(gs),s=new P(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Af(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Tf(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Gl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Vl=class extends un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Wr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vn(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:Gn});r.uniforms.tEquirect.value=e;let a=new en(s,r),o=e.minFilter;return e.minFilter===zi&&(e.minFilter=ze),new qo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Px(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===Ko||m===Zo)if(t.has(u)){let v=t.get(u).texture;return o(v,u.mapping)}else{let v=u.image;if(v&&v.height>0){let b=new Vl(v.height);return b.fromEquirectangularTexture(i,u),t.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let m=u.mapping,v=m===Ko||m===Zo,b=m===Vi||m===fs;if(v||b){let f=e.get(u),p=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new kl(i)),f=v?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),f.texture;if(f!==void 0)return f.texture;{let S=u.image;return v&&S&&S.height>0||b&&S&&l(S)?(n===null&&(n=new kl(i)),f=v?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),u.addEventListener("dispose",h),f.texture):null}}}return u}function o(u,m){return m===Ko?u.mapping=Vi:m===Zo&&(u.mapping=fs),u}function l(u){let m=0,v=6;for(let b=0;b<v;b++)u[b]!==void 0&&m++;return m===v}function c(u){let m=u.target;m.removeEventListener("dispose",c);let v=t.get(m);v!==void 0&&(t.delete(m),v.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Rx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ls("WebGLRenderer: "+n+" extension not supported."),s}}}function Ix(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",a),delete s[u.id];let m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let m in u)t.update(u[m],i.ARRAY_BUFFER)}function c(d){let u=[],m=d.index,v=d.attributes.position,b=0;if(v===void 0)return;if(m!==null){let S=m.array;b=m.version;for(let T=0,y=S.length;T<y;T+=3){let E=S[T+0],M=S[T+1],C=S[T+2];u.push(E,M,M,C,C,E)}}else{let S=v.array;b=v.version;for(let T=0,y=S.length/3-1;T<y;T+=3){let E=T+0,M=T+1,C=T+2;u.push(E,M,M,C,C,E)}}let f=new(v.count>=65535?zr:Vr)(u,1);f.version=b;let p=r.get(d);p&&t.remove(p),r.set(d,f)}function h(d){let u=r.get(d);if(u){let m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Dx(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,d*a,m),e.update(u,n,m))}function h(d,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,m);let b=0;for(let f=0;f<m;f++)b+=u[f];e.update(b,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Lx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Pt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Nx(i,t,e){let n=new WeakMap,s=new ue;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let A=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],T=0;m===!0&&(T=1),v===!0&&(T=2),b===!0&&(T=3);let y=o.attributes.position.count*T,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let M=new Float32Array(y*E*4*d),C=new Fr(M,y,E,d);C.type=yn,C.needsUpdate=!0;let _=T*4;for(let N=0;N<d;N++){let I=f[N],F=p[N],Y=S[N],Z=y*E*4*N;for(let V=0;V<I.count;V++){let q=V*_;m===!0&&(s.fromBufferAttribute(I,V),M[Z+q+0]=s.x,M[Z+q+1]=s.y,M[Z+q+2]=s.z,M[Z+q+3]=0),v===!0&&(s.fromBufferAttribute(F,V),M[Z+q+4]=s.x,M[Z+q+5]=s.y,M[Z+q+6]=s.z,M[Z+q+7]=0),b===!0&&(s.fromBufferAttribute(Y,V),M[Z+q+8]=s.x,M[Z+q+9]=s.y,M[Z+q+10]=s.z,M[Z+q+11]=Y.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new Ht(y,E)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let b=0;b<c.length;b++)m+=c[b];let v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Ux(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Ox={[oh]:"LINEAR_TONE_MAPPING",[lh]:"REINHARD_TONE_MAPPING",[ch]:"CINEON_TONE_MAPPING",[hh]:"ACES_FILMIC_TONE_MAPPING",[dh]:"AGX_TONE_MAPPING",[ph]:"NEUTRAL_TONE_MAPPING",[uh]:"CUSTOM_TONE_MAPPING"};function Fx(i,t,e,n,s,r){let a=new un(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new oi(t,e):void 0}),o=new un(t,e,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),l=new tn;l.setAttribute("position",new qe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new qe([0,2,0,0,2,0],2));let c=new Lo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new en(l,c),d=new $r(-1,1,1,-1,0,1),u=null,m=null,v=!1,b,f=null,p=[],S=!1;this.setSize=function(T,y){a.setSize(T,y),o.setSize(T,y);for(let E=0;E<p.length;E++){let M=p[E];M.setSize&&M.setSize(T,y)}},this.setEffects=function(T){p=T,S=p.length>0&&p[0].isRenderPass===!0;let y=a.width,E=a.height;for(let M=0;M<p.length;M++){let C=p[M];C.setSize&&C.setSize(y,E)}},this.begin=function(T,y){if(v||T.toneMapping===Rn&&p.length===0)return!1;if(f=y,y!==null){let E=y.width,M=y.height;(a.width!==E||a.height!==M)&&this.setSize(E,M)}return S===!1&&T.setRenderTarget(a),b=T.toneMapping,T.toneMapping=Rn,!0},this.hasRenderPass=function(){return S},this.end=function(T,y){T.toneMapping=b,v=!0;let E=a,M=o;for(let C=0;C<p.length;C++){let _=p[C];if(_.enabled!==!1&&(_.render(T,M,E,y),_.needsSwap!==!1)){let A=E;E=M,M=A}}if(u!==T.outputColorSpace||m!==T.toneMapping){u=T.outputColorSpace,m=T.toneMapping,c.defines={},Gt.getTransfer(u)===Qt&&(c.defines.SRGB_TRANSFER="");let C=Ox[m];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,T.setRenderTarget(f),T.render(h,d),f=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var Yf=new Qe,kh=new oi(1,1),$f=new Fr,Kf=new Co,Zf=new Wr,Cf=[],Pf=[],Rf=new Float32Array(16),If=new Float32Array(9),Df=new Float32Array(4);function lr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Cf[s];if(r===void 0&&(r=new Float32Array(s),Cf[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Hl(i,t){let e=Pf[t];e===void 0&&(e=new Int32Array(t),Pf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Bx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function kx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function Vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function zx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function Gx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;Df.set(n),i.uniformMatrix2fv(this.addr,!1,Df),De(e,n)}}function Hx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;If.set(n),i.uniformMatrix3fv(this.addr,!1,If),De(e,n)}}function Wx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;Rf.set(n),i.uniformMatrix4fv(this.addr,!1,Rf),De(e,n)}}function Xx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function Yx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function $x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function Kx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Zx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function Jx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function jx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function Qx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kh.compareFunction=e.isReversedDepthBuffer()?Ol:Ul,r=kh):r=Yf,e.setTexture2D(t||r,s)}function tb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Kf,s)}function eb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Zf,s)}function nb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$f,s)}function ib(i){switch(i){case 5126:return Bx;case 35664:return kx;case 35665:return Vx;case 35666:return zx;case 35674:return Gx;case 35675:return Hx;case 35676:return Wx;case 5124:case 35670:return Xx;case 35667:case 35671:return qx;case 35668:case 35672:return Yx;case 35669:case 35673:return $x;case 5125:return Kx;case 36294:return Zx;case 36295:return Jx;case 36296:return jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return tb;case 35680:case 36300:case 36308:case 36293:return eb;case 36289:case 36303:case 36311:case 36292:return nb}}function sb(i,t){i.uniform1fv(this.addr,t)}function rb(i,t){let e=lr(t,this.size,2);i.uniform2fv(this.addr,e)}function ab(i,t){let e=lr(t,this.size,3);i.uniform3fv(this.addr,e)}function ob(i,t){let e=lr(t,this.size,4);i.uniform4fv(this.addr,e)}function lb(i,t){let e=lr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function cb(i,t){let e=lr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function hb(i,t){let e=lr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ub(i,t){i.uniform1iv(this.addr,t)}function db(i,t){i.uniform2iv(this.addr,t)}function pb(i,t){i.uniform3iv(this.addr,t)}function fb(i,t){i.uniform4iv(this.addr,t)}function mb(i,t){i.uniform1uiv(this.addr,t)}function gb(i,t){i.uniform2uiv(this.addr,t)}function vb(i,t){i.uniform3uiv(this.addr,t)}function _b(i,t){i.uniform4uiv(this.addr,t)}function xb(i,t,e){let n=this.cache,s=t.length,r=Hl(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=kh:a=Yf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function bb(i,t,e){let n=this.cache,s=t.length,r=Hl(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Kf,r[a])}function yb(i,t,e){let n=this.cache,s=t.length,r=Hl(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Zf,r[a])}function wb(i,t,e){let n=this.cache,s=t.length,r=Hl(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||$f,r[a])}function Mb(i){switch(i){case 5126:return sb;case 35664:return rb;case 35665:return ab;case 35666:return ob;case 35674:return lb;case 35675:return cb;case 35676:return hb;case 5124:case 35670:return ub;case 35667:case 35671:return db;case 35668:case 35672:return pb;case 35669:case 35673:return fb;case 5125:return mb;case 36294:return gb;case 36295:return vb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return xb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return yb;case 36289:case 36303:case 36311:case 36292:return wb}}var Vh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ib(e.type)}},zh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mb(e.type)}},Gh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Fh=/(\w+)(\])?(\[|\.)?/g;function Lf(i,t){i.seq.push(t),i.map[t.id]=t}function Sb(i,t,e){let n=i.name,s=n.length;for(Fh.lastIndex=0;;){let r=Fh.exec(n),a=Fh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Lf(e,c===void 0?new Vh(o,i,t):new zh(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Gh(o),Lf(e,d)),e=d}}}var or=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Sb(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Nf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Eb=37297,Ab=0;function Tb(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Uf=new It;function Cb(i){Gt._getMatrix(Uf,Gt.workingColorSpace,i);let t=`mat3( ${Uf.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(i)){case Ur:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return At("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Of(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Tb(i.getShaderSource(t),o)}else return r}function Pb(i,t){let e=Cb(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Rb={[oh]:"Linear",[lh]:"Reinhard",[ch]:"Cineon",[hh]:"ACESFilmic",[dh]:"AgX",[ph]:"Neutral",[uh]:"Custom"};function Ib(i,t){let e=Rb[t];return e===void 0?(At("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Bl=new P;function Db(){Gt.getLuminanceCoefficients(Bl);let i=Bl.x.toFixed(4),t=Bl.y.toFixed(4),e=Bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function Nb(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ub(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ca(i){return i!==""}function Ff(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(i){return i.replace(Ob,Bb)}var Fb=new Map;function Bb(i,t){let e=Ot[t];if(e===void 0){let n=Fb.get(t);if(n!==void 0)e=Ot[n],At('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Hh(e)}var kb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kf(i){return i.replace(kb,Vb)}function Vb(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var zb={[Jr]:"SHADOWMAP_TYPE_PCF",[ir]:"SHADOWMAP_TYPE_VSM"};function Gb(i){return zb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Hb={[Vi]:"ENVMAP_TYPE_CUBE",[fs]:"ENVMAP_TYPE_CUBE",[jr]:"ENVMAP_TYPE_CUBE_UV"};function Wb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Hb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Xb={[fs]:"ENVMAP_MODE_REFRACTION"};function qb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Xb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Yb={[ah]:"ENVMAP_BLENDING_MULTIPLY",[rf]:"ENVMAP_BLENDING_MIX",[af]:"ENVMAP_BLENDING_ADD"};function $b(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Yb[i.combine]||"ENVMAP_BLENDING_NONE"}function Kb(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Zb(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Gb(e),c=Wb(e),h=qb(e),d=$b(e),u=Kb(e),m=Lb(e),v=Nb(r),b=s.createProgram(),f,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ca).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ca).join(`
`),p.length>0&&(p+=`
`)):(f=[Vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),p=[Vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rn?"#define TONE_MAPPING":"",e.toneMapping!==Rn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Rn?Ib("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,Pb("linearToOutputTexel",e.outputColorSpace),Db(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ca).join(`
`)),a=Hh(a),a=Ff(a,e),a=Bf(a,e),o=Hh(o),o=Ff(o,e),o=Bf(o,e),a=kf(a),o=kf(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",e.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=S+f+a,y=S+p+o,E=Nf(s,s.VERTEX_SHADER,T),M=Nf(s,s.FRAGMENT_SHADER,y);s.attachShader(b,E),s.attachShader(b,M),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function C(I){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(b)||"",Y=s.getShaderInfoLog(E)||"",Z=s.getShaderInfoLog(M)||"",V=F.trim(),q=Y.trim(),H=Z.trim(),j=!0,tt=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,E,M);else{let ut=Of(s,E,"vertex"),mt=Of(s,M,"fragment");Pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+ut+`
`+mt)}else V!==""?At("WebGLProgram: Program Info Log:",V):(q===""||H==="")&&(tt=!1);tt&&(I.diagnostics={runnable:j,programLog:V,vertexShader:{log:q,prefix:f},fragmentShader:{log:H,prefix:p}})}s.deleteShader(E),s.deleteShader(M),_=new or(s,b),A=Ub(s,b)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(b,Eb)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ab++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=E,this.fragmentShader=M,this}var Jb=0,Wh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Xh(t),e.set(t,n)),n}},Xh=class{constructor(t){this.id=Jb++,this.code=t,this.usedTimes=0}};function jb(i){return i===Hi||i===sa||i===ra}function Qb(i,t,e,n,s,r){let a=new Qs,o=new Wh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function b(_,A,N,I,F,Y){let Z=I.fog,V=F.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,j=t.get(_.envMap||q,H),tt=j&&j.mapping===jr?j.image.height:null,ut=m[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&At("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let mt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,_t=mt!==void 0?mt.length:0,Zt=0;V.morphAttributes.position!==void 0&&(Zt=1),V.morphAttributes.normal!==void 0&&(Zt=2),V.morphAttributes.color!==void 0&&(Zt=3);let fe,Jt,J,st;if(ut){let xt=Xn[ut];fe=xt.vertexShader,Jt=xt.fragmentShader}else{fe=_.vertexShader,Jt=_.fragmentShader;let xt=o.getVertexShaderStage(_),ge=o.getFragmentShaderStage(_);o.update(_,xt,ge),J=xt.id,st=ge.id}let et=i.getRenderTarget(),Rt=i.state.buffers.depth.getReversed(),Dt=F.isInstancedMesh===!0,Tt=F.isBatchedMesh===!0,be=!!_.map,zt=!!_.matcap,se=!!j,jt=!!_.aoMap,Xt=!!_.lightMap,Ee=!!_.bumpMap&&_.wireframe===!1,Re=!!_.normalMap,Ne=!!_.displacementMap,ke=!!_.emissiveMap,me=!!_.metalnessMap,Ae=!!_.roughnessMap,D=_.anisotropy>0,Je=_.clearcoat>0,ee=_.dispersion>0,w=_.iridescence>0,g=_.sheen>0,U=_.transmission>0,z=D&&!!_.anisotropyMap,W=Je&&!!_.clearcoatMap,nt=Je&&!!_.clearcoatNormalMap,rt=Je&&!!_.clearcoatRoughnessMap,X=w&&!!_.iridescenceMap,K=w&&!!_.iridescenceThicknessMap,at=g&&!!_.sheenColorMap,wt=g&&!!_.sheenRoughnessMap,ct=!!_.specularMap,ot=!!_.specularColorMap,Et=!!_.specularIntensityMap,Ct=U&&!!_.transmissionMap,Lt=U&&!!_.thicknessMap,R=!!_.gradientMap,it=!!_.alphaMap,$=_.alphaTest>0,lt=!!_.alphaHash,ft=!!_.extensions,Q=Rn;_.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Q=i.toneMapping);let yt={shaderID:ut,shaderType:_.type,shaderName:_.name,vertexShader:fe,fragmentShader:Jt,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:st,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Tt,batchingColor:Tt&&F._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&F.instanceColor!==null,instancingMorph:Dt&&F.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Gt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:be,matcap:zt,envMap:se,envMapMode:se&&j.mapping,envMapCubeUVHeight:tt,aoMap:jt,lightMap:Xt,bumpMap:Ee,normalMap:Re,displacementMap:Ne,emissiveMap:ke,normalMapObjectSpace:Re&&_.normalMapType===cf,normalMapTangentSpace:Re&&_.normalMapType===yh,packedNormalMap:Re&&_.normalMapType===yh&&jb(_.normalMap.format),metalnessMap:me,roughnessMap:Ae,anisotropy:D,anisotropyMap:z,clearcoat:Je,clearcoatMap:W,clearcoatNormalMap:nt,clearcoatRoughnessMap:rt,dispersion:ee,iridescence:w,iridescenceMap:X,iridescenceThicknessMap:K,sheen:g,sheenColorMap:at,sheenRoughnessMap:wt,specularMap:ct,specularColorMap:ot,specularIntensityMap:Et,transmission:U,transmissionMap:Ct,thicknessMap:Lt,gradientMap:R,opaque:_.transparent===!1&&_.blending===cs&&_.alphaToCoverage===!1,alphaMap:it,alphaTest:$,alphaHash:lt,combine:_.combine,mapUv:be&&v(_.map.channel),aoMapUv:jt&&v(_.aoMap.channel),lightMapUv:Xt&&v(_.lightMap.channel),bumpMapUv:Ee&&v(_.bumpMap.channel),normalMapUv:Re&&v(_.normalMap.channel),displacementMapUv:Ne&&v(_.displacementMap.channel),emissiveMapUv:ke&&v(_.emissiveMap.channel),metalnessMapUv:me&&v(_.metalnessMap.channel),roughnessMapUv:Ae&&v(_.roughnessMap.channel),anisotropyMapUv:z&&v(_.anisotropyMap.channel),clearcoatMapUv:W&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:nt&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:K&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:at&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:wt&&v(_.sheenRoughnessMap.channel),specularMapUv:ct&&v(_.specularMap.channel),specularColorMapUv:ot&&v(_.specularColorMap.channel),specularIntensityMapUv:Et&&v(_.specularIntensityMap.channel),transmissionMapUv:Ct&&v(_.transmissionMap.channel),thicknessMapUv:Lt&&v(_.thicknessMap.channel),alphaMapUv:it&&v(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Re||D),vertexNormals:!!V.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(be||it),fog:!!Z,useFog:_.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||V.attributes.normal===void 0&&Re===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Rt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Zt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Q,decodeVideoTexture:be&&_.map.isVideoTexture===!0&&Gt.getTransfer(_.map.colorSpace)===Qt,decodeVideoTextureEmissive:ke&&_.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(_.emissiveMap.colorSpace)===Qt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===zn,flipSided:_.side===$e,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ft&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&_.extensions.multiDraw===!0||Tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return yt.vertexUv1s=l.has(1),yt.vertexUv2s=l.has(2),yt.vertexUv3s=l.has(3),l.clear(),yt}function f(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)A.push(N),A.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(p(A,_),S(A,_),A.push(i.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function p(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function S(_,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function T(_){let A=m[_.type],N;if(A){let I=Xn[A];N=yf.clone(I.uniforms)}else N=_.uniforms;return N}function y(_,A){let N=h.get(A);return N!==void 0?++N.usedTimes:(N=new Zb(i,A,_,s),c.push(N),h.set(A,N)),N}function E(_){if(--_.usedTimes===0){let A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function M(_){o.remove(_)}function C(){o.dispose()}return{getParameters:b,getProgramCacheKey:f,getUniforms:T,acquireProgram:y,releaseProgram:E,releaseShaderCache:M,programs:c,dispose:C}}function ty(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ey(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function zf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Gf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,v,b,f,p){let S=i[t];return S===void 0?(S={id:u.id,object:u,geometry:m,material:v,materialVariant:a(u),groupOrder:b,renderOrder:u.renderOrder,z:f,group:p},i[t]=S):(S.id=u.id,S.object=u,S.geometry=m,S.material=v,S.materialVariant=a(u),S.groupOrder=b,S.renderOrder=u.renderOrder,S.z=f,S.group=p),t++,S}function l(u,m,v,b,f,p){let S=o(u,m,v,b,f,p);v.transmission>0?n.push(S):v.transparent===!0?s.push(S):e.push(S)}function c(u,m,v,b,f,p){let S=o(u,m,v,b,f,p);v.transmission>0?n.unshift(S):v.transparent===!0?s.unshift(S):e.unshift(S)}function h(u,m,v){e.length>1&&e.sort(u||ey),n.length>1&&n.sort(m||zf),s.length>1&&s.sort(m||zf),v&&(e.reverse(),n.reverse(),s.reverse())}function d(){for(let u=t,m=i.length;u<m;u++){let v=i[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function ny(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Gf,i.set(n,[a])):s>=r.length?(a=new Gf,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function iy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Ut};break;case"SpotLight":e={position:new P,direction:new P,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function sy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var ry=0;function ay(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function oy(i){let t=new iy,e=sy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new $t,a=new $t;function o(c){let h=0,d=0,u=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let m=0,v=0,b=0,f=0,p=0,S=0,T=0,y=0,E=0,M=0,C=0;c.sort(ay);for(let A=0,N=c.length;A<N;A++){let I=c[A],F=I.color,Y=I.intensity,Z=I.distance,V=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Hi?V=I.shadow.map.texture:V=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=F.r*Y,d+=F.g*Y,u+=F.b*Y;else if(I.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(I.sh.coefficients[q],Y);C++}else if(I.isDirectionalLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let H=I.shadow,j=e.get(I);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=V,n.directionalShadowMatrix[m]=I.shadow.matrix,S++}n.directional[m]=q,m++}else if(I.isSpotLight){let q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(F).multiplyScalar(Y),q.distance=Z,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,n.spot[b]=q;let H=I.shadow;if(I.map&&(n.spotLightMap[E]=I.map,E++,H.updateMatrices(I),I.castShadow&&M++),n.spotLightMatrix[b]=H.matrix,I.castShadow){let j=e.get(I);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,n.spotShadow[b]=j,n.spotShadowMap[b]=V,y++}b++}else if(I.isRectAreaLight){let q=t.get(I);q.color.copy(F).multiplyScalar(Y),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),n.rectArea[f]=q,f++}else if(I.isPointLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let H=I.shadow,j=e.get(I);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,j.shadowCameraNear=H.camera.near,j.shadowCameraFar=H.camera.far,n.pointShadow[v]=j,n.pointShadowMap[v]=V,n.pointShadowMatrix[v]=I.shadow.matrix,T++}n.point[v]=q,v++}else if(I.isHemisphereLight){let q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(Y),q.groundColor.copy(I.groundColor).multiplyScalar(Y),n.hemi[p]=q,p++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let _=n.hash;(_.directionalLength!==m||_.pointLength!==v||_.spotLength!==b||_.rectAreaLength!==f||_.hemiLength!==p||_.numDirectionalShadows!==S||_.numPointShadows!==T||_.numSpotShadows!==y||_.numSpotMaps!==E||_.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=b,n.rectArea.length=f,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=y+E-M,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=C,_.directionalLength=m,_.pointLength=v,_.spotLength=b,_.rectAreaLength=f,_.hemiLength=p,_.numDirectionalShadows=S,_.numPointShadows=T,_.numSpotShadows=y,_.numSpotMaps=E,_.numLightProbes=C,n.version=ry++)}function l(c,h){let d=0,u=0,m=0,v=0,b=0,f=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let T=c[p];if(T.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),d++}else if(T.isSpotLight){let y=n.spot[m];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),m++}else if(T.isRectAreaLight){let y=n.rectArea[v];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(f),a.identity(),r.copy(T.matrixWorld),r.premultiply(f),a.extractRotation(r),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){let y=n.point[u];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(f),u++}else if(T.isHemisphereLight){let y=n.hemi[b];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(f),b++}}}return{setup:o,setupView:l,state:n}}function Hf(i){let t=new oy(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ly(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Hf(i),t.set(s,[o])):r>=a.length?(o=new Hf(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var cy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hy=`uniform sampler2D shadow_pass;
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
}`,uy=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],dy=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Wf=new $t,la=new P,Bh=new P;function py(i,t,e){let n=new ds,s=new Ht,r=new Ht,a=new ue,o=new No,l=new Uo,c={},h=e.maxTextureSize,d={[si]:$e,[$e]:si,[zn]:zn},u=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:cy,fragmentShader:hy}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let v=new tn;v.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new en(v,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jr;let p=this.type;this.render=function(M,C,_){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||M.length===0)return;this.type===kp&&(At("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Jr);let A=i.getRenderTarget(),N=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Gn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let Y=p!==this.type;Y&&C.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(V=>V.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,V=M.length;Z<V;Z++){let q=M[Z],H=q.shadow;if(H===void 0){At("WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let j=H.getFrameExtents();s.multiply(j),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,H.mapSize.y=r.y));let tt=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=tt,H.map===null||Y===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ir){if(q.isPointLight){At("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new un(s.x,s.y,{format:Hi,type:Hn,minFilter:ze,magFilter:ze,generateMipmaps:!1}),H.map.texture.name=q.name+".shadowMap",H.map.depthTexture=new oi(s.x,s.y,yn),H.map.depthTexture.name=q.name+".shadowMapDepth",H.map.depthTexture.format=kn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Fe,H.map.depthTexture.magFilter=Fe}else q.isPointLight?(H.map=new Vl(s.x),H.map.depthTexture=new Do(s.x,In)):(H.map=new un(s.x,s.y),H.map.depthTexture=new oi(s.x,s.y,In)),H.map.depthTexture.name=q.name+".shadowMap",H.map.depthTexture.format=kn,this.type===Jr?(H.map.depthTexture.compareFunction=tt?Ol:Ul,H.map.depthTexture.minFilter=ze,H.map.depthTexture.magFilter=ze):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Fe,H.map.depthTexture.magFilter=Fe);H.camera.updateProjectionMatrix()}let ut=H.map.isWebGLCubeRenderTarget?6:1;for(let mt=0;mt<ut;mt++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,mt),i.clear();else{mt===0&&(i.setRenderTarget(H.map),i.clear());let _t=H.getViewport(mt);a.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),F.viewport(a)}if(q.isPointLight){let _t=H.camera,Zt=H.matrix,fe=q.distance||_t.far;fe!==_t.far&&(_t.far=fe,_t.updateProjectionMatrix()),la.setFromMatrixPosition(q.matrixWorld),_t.position.copy(la),Bh.copy(_t.position),Bh.add(uy[mt]),_t.up.copy(dy[mt]),_t.lookAt(Bh),_t.updateMatrixWorld(),Zt.makeTranslation(-la.x,-la.y,-la.z),Wf.multiplyMatrices(_t.projectionMatrix,_t.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Wf,_t.coordinateSystem,_t.reversedDepth)}else H.updateMatrices(q);n=H.getFrustum(),y(C,_,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===ir&&S(H,_),H.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(A,N,I)};function S(M,C){let _=t.update(b);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new un(s.x,s.y,{format:Hi,type:Hn})),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(C,null,_,u,b,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(C,null,_,m,b,null)}function T(M,C,_,A){let N=null,I=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)N=I;else if(N=_.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let F=N.uuid,Y=C.uuid,Z=c[F];Z===void 0&&(Z={},c[F]=Z);let V=Z[Y];V===void 0&&(V=N.clone(),Z[Y]=V,C.addEventListener("dispose",E)),N=V}if(N.visible=C.visible,N.wireframe=C.wireframe,A===ir?N.side=C.shadowSide!==null?C.shadowSide:C.side:N.side=C.shadowSide!==null?C.shadowSide:d[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,_.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let F=i.properties.get(N);F.light=_}return N}function y(M,C,_,A,N){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&N===ir)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);let Y=t.update(M),Z=M.material;if(Array.isArray(Z)){let V=Y.groups;for(let q=0,H=V.length;q<H;q++){let j=V[q],tt=Z[j.materialIndex];if(tt&&tt.visible){let ut=T(M,tt,A,N);M.onBeforeShadow(i,M,C,_,Y,ut,j),i.renderBufferDirect(_,null,Y,ut,M,j),M.onAfterShadow(i,M,C,_,Y,ut,j)}}}else if(Z.visible){let V=T(M,Z,A,N);M.onBeforeShadow(i,M,C,_,Y,V,null),i.renderBufferDirect(_,null,Y,V,M,null),M.onAfterShadow(i,M,C,_,Y,V,null)}}let F=M.children;for(let Y=0,Z=F.length;Y<Z;Y++)y(F[Y],C,_,A,N)}function E(M){M.target.removeEventListener("dispose",E);for(let _ in c){let A=c[_],N=M.target.uuid;N in A&&(A[N].dispose(),delete A[N])}}}function fy(i,t){function e(){let R=!1,it=new ue,$=null,lt=new ue(0,0,0,0);return{setMask:function(ft){$!==ft&&!R&&(i.colorMask(ft,ft,ft,ft),$=ft)},setLocked:function(ft){R=ft},setClear:function(ft,Q,yt,xt,ge){ge===!0&&(ft*=xt,Q*=xt,yt*=xt),it.set(ft,Q,yt,xt),lt.equals(it)===!1&&(i.clearColor(ft,Q,yt,xt),lt.copy(it))},reset:function(){R=!1,$=null,lt.set(-1,0,0,0)}}}function n(){let R=!1,it=!1,$=null,lt=null,ft=null;return{setReversed:function(Q){if(it!==Q){let yt=t.get("EXT_clip_control");Q?yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.ZERO_TO_ONE_EXT):yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.NEGATIVE_ONE_TO_ONE_EXT),it=Q;let xt=ft;ft=null,this.setClear(xt)}},getReversed:function(){return it},setTest:function(Q){Q?et(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(Q){$!==Q&&!R&&(i.depthMask(Q),$=Q)},setFunc:function(Q){if(it&&(Q=xf[Q]),lt!==Q){switch(Q){case mo:i.depthFunc(i.NEVER);break;case go:i.depthFunc(i.ALWAYS);break;case vo:i.depthFunc(i.LESS);break;case hs:i.depthFunc(i.LEQUAL);break;case _o:i.depthFunc(i.EQUAL);break;case xo:i.depthFunc(i.GEQUAL);break;case bo:i.depthFunc(i.GREATER);break;case yo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=Q}},setLocked:function(Q){R=Q},setClear:function(Q){ft!==Q&&(ft=Q,it&&(Q=1-Q),i.clearDepth(Q))},reset:function(){R=!1,$=null,lt=null,ft=null,it=!1}}}function s(){let R=!1,it=null,$=null,lt=null,ft=null,Q=null,yt=null,xt=null,ge=null;return{setTest:function(oe){R||(oe?et(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(oe){it!==oe&&!R&&(i.stencilMask(oe),it=oe)},setFunc:function(oe,Dn,Ln){($!==oe||lt!==Dn||ft!==Ln)&&(i.stencilFunc(oe,Dn,Ln),$=oe,lt=Dn,ft=Ln)},setOp:function(oe,Dn,Ln){(Q!==oe||yt!==Dn||xt!==Ln)&&(i.stencilOp(oe,Dn,Ln),Q=oe,yt=Dn,xt=Ln)},setLocked:function(oe){R=oe},setClear:function(oe){ge!==oe&&(i.clearStencil(oe),ge=oe)},reset:function(){R=!1,it=null,$=null,lt=null,ft=null,Q=null,yt=null,xt=null,ge=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},m=new WeakMap,v=[],b=null,f=!1,p=null,S=null,T=null,y=null,E=null,M=null,C=null,_=new Ut(0,0,0),A=0,N=!1,I=null,F=null,Y=null,Z=null,V=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,j=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(tt)[1]),H=j>=1):tt.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),H=j>=2);let ut=null,mt={},_t=i.getParameter(i.SCISSOR_BOX),Zt=i.getParameter(i.VIEWPORT),fe=new ue().fromArray(_t),Jt=new ue().fromArray(Zt);function J(R,it,$,lt){let ft=new Uint8Array(4),Q=i.createTexture();i.bindTexture(R,Q),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let yt=0;yt<$;yt++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(it+yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return Q}let st={};st[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),st[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),st[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(hs),Ee(!1),Re(nh),et(i.CULL_FACE),jt(Gn);function et(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Rt(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function Dt(R,it){return u[R]!==it?(i.bindFramebuffer(R,it),u[R]=it,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Tt(R,it){let $=v,lt=!1;if(R){$=m.get(it),$===void 0&&($=[],m.set(it,$));let ft=R.textures;if($.length!==ft.length||$[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,yt=ft.length;Q<yt;Q++)$[Q]=i.COLOR_ATTACHMENT0+Q;$.length=ft.length,lt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,lt=!0);lt&&i.drawBuffers($)}function be(R){return b!==R?(i.useProgram(R),b=R,!0):!1}let zt={[Di]:i.FUNC_ADD,[zp]:i.FUNC_SUBTRACT,[Gp]:i.FUNC_REVERSE_SUBTRACT};zt[Hp]=i.MIN,zt[Wp]=i.MAX;let se={[Xp]:i.ZERO,[qp]:i.ONE,[Yp]:i.SRC_COLOR,[po]:i.SRC_ALPHA,[Qp]:i.SRC_ALPHA_SATURATE,[Jp]:i.DST_COLOR,[Kp]:i.DST_ALPHA,[$p]:i.ONE_MINUS_SRC_COLOR,[fo]:i.ONE_MINUS_SRC_ALPHA,[jp]:i.ONE_MINUS_DST_COLOR,[Zp]:i.ONE_MINUS_DST_ALPHA,[tf]:i.CONSTANT_COLOR,[ef]:i.ONE_MINUS_CONSTANT_COLOR,[nf]:i.CONSTANT_ALPHA,[sf]:i.ONE_MINUS_CONSTANT_ALPHA};function jt(R,it,$,lt,ft,Q,yt,xt,ge,oe){if(R===Gn){f===!0&&(Rt(i.BLEND),f=!1);return}if(f===!1&&(et(i.BLEND),f=!0),R!==Vp){if(R!==p||oe!==N){if((S!==Di||E!==Di)&&(i.blendEquation(i.FUNC_ADD),S=Di,E=Di),oe)switch(R){case cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ih:i.blendFunc(i.ONE,i.ONE);break;case sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pt("WebGLState: Invalid blending: ",R);break}else switch(R){case cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ih:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case sh:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rh:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",R);break}T=null,y=null,M=null,C=null,_.set(0,0,0),A=0,p=R,N=oe}return}ft=ft||it,Q=Q||$,yt=yt||lt,(it!==S||ft!==E)&&(i.blendEquationSeparate(zt[it],zt[ft]),S=it,E=ft),($!==T||lt!==y||Q!==M||yt!==C)&&(i.blendFuncSeparate(se[$],se[lt],se[Q],se[yt]),T=$,y=lt,M=Q,C=yt),(xt.equals(_)===!1||ge!==A)&&(i.blendColor(xt.r,xt.g,xt.b,ge),_.copy(xt),A=ge),p=R,N=!1}function Xt(R,it){R.side===zn?Rt(i.CULL_FACE):et(i.CULL_FACE);let $=R.side===$e;it&&($=!$),Ee($),R.blending===cs&&R.transparent===!1?jt(Gn):jt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let lt=R.stencilWrite;o.setTest(lt),lt&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ke(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(R){I!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),I=R)}function Re(R){R!==Fp?(et(i.CULL_FACE),R!==F&&(R===nh?i.cullFace(i.BACK):R===Bp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),F=R}function Ne(R){R!==Y&&(H&&i.lineWidth(R),Y=R)}function ke(R,it,$){R?(et(i.POLYGON_OFFSET_FILL),(Z!==it||V!==$)&&(Z=it,V=$,a.getReversed()&&(it=-it),i.polygonOffset(it,$))):Rt(i.POLYGON_OFFSET_FILL)}function me(R){R?et(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function Ae(R){R===void 0&&(R=i.TEXTURE0+q-1),ut!==R&&(i.activeTexture(R),ut=R)}function D(R,it,$){$===void 0&&(ut===null?$=i.TEXTURE0+q-1:$=ut);let lt=mt[$];lt===void 0&&(lt={type:void 0,texture:void 0},mt[$]=lt),(lt.type!==R||lt.texture!==it)&&(ut!==$&&(i.activeTexture($),ut=$),i.bindTexture(R,it||st[R]),lt.type=R,lt.texture=it)}function Je(){let R=mt[ut];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ee(){try{i.compressedTexImage2D(...arguments)}catch(R){Pt("WebGLState:",R)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(R){Pt("WebGLState:",R)}}function g(){try{i.texSubImage2D(...arguments)}catch(R){Pt("WebGLState:",R)}}function U(){try{i.texSubImage3D(...arguments)}catch(R){Pt("WebGLState:",R)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Pt("WebGLState:",R)}}function W(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Pt("WebGLState:",R)}}function nt(){try{i.texStorage2D(...arguments)}catch(R){Pt("WebGLState:",R)}}function rt(){try{i.texStorage3D(...arguments)}catch(R){Pt("WebGLState:",R)}}function X(){try{i.texImage2D(...arguments)}catch(R){Pt("WebGLState:",R)}}function K(){try{i.texImage3D(...arguments)}catch(R){Pt("WebGLState:",R)}}function at(R){return d[R]!==void 0?d[R]:i.getParameter(R)}function wt(R,it){d[R]!==it&&(i.pixelStorei(R,it),d[R]=it)}function ct(R){fe.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),fe.copy(R))}function ot(R){Jt.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),Jt.copy(R))}function Et(R,it){let $=c.get(it);$===void 0&&($=new WeakMap,c.set(it,$));let lt=$.get(R);lt===void 0&&(lt=i.getUniformBlockIndex(it,R.name),$.set(R,lt))}function Ct(R,it){let lt=c.get(it).get(R);l.get(it)!==lt&&(i.uniformBlockBinding(it,lt,R.__bindingPointIndex),l.set(it,lt))}function Lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},ut=null,mt={},u={},m=new WeakMap,v=[],b=null,f=!1,p=null,S=null,T=null,y=null,E=null,M=null,C=null,_=new Ut(0,0,0),A=0,N=!1,I=null,F=null,Y=null,Z=null,V=null,fe.set(0,0,i.canvas.width,i.canvas.height),Jt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:Rt,bindFramebuffer:Dt,drawBuffers:Tt,useProgram:be,setBlending:jt,setMaterial:Xt,setFlipSided:Ee,setCullFace:Re,setLineWidth:Ne,setPolygonOffset:ke,setScissorTest:me,activeTexture:Ae,bindTexture:D,unbindTexture:Je,compressedTexImage2D:ee,compressedTexImage3D:w,texImage2D:X,texImage3D:K,pixelStorei:wt,getParameter:at,updateUBOMapping:Et,uniformBlockBinding:Ct,texStorage2D:nt,texStorage3D:rt,texSubImage2D:g,texSubImage3D:U,compressedTexSubImage2D:z,compressedTexSubImage3D:W,scissor:ct,viewport:ot,reset:Lt}}function my(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ht,h=new WeakMap,d=new Set,u,m=new WeakMap,v=!1;try{v=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(w){}function b(w,g){return v?new OffscreenCanvas(w,g):Or("canvas")}function f(w,g,U){let z=1,W=ee(w);if((W.width>U||W.height>U)&&(z=U/Math.max(W.width,W.height)),z<1)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap||typeof VideoFrame!="undefined"&&w instanceof VideoFrame){let nt=Math.floor(z*W.width),rt=Math.floor(z*W.height);u===void 0&&(u=b(nt,rt));let X=g?b(nt,rt):u;return X.width=nt,X.height=rt,X.getContext("2d").drawImage(w,0,0,nt,rt),At("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+nt+"x"+rt+")."),X}else return"data"in w&&At("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),w;return w}function p(w){return w.generateMipmaps}function S(w){i.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,g,U,z,W,nt=!1){if(w!==null){if(i[w]!==void 0)return i[w];At("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let rt;z&&(rt=t.get("EXT_texture_norm16"),rt||At("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=g;if(g===i.RED&&(U===i.FLOAT&&(X=i.R32F),U===i.HALF_FLOAT&&(X=i.R16F),U===i.UNSIGNED_BYTE&&(X=i.R8),U===i.UNSIGNED_SHORT&&rt&&(X=rt.R16_EXT),U===i.SHORT&&rt&&(X=rt.R16_SNORM_EXT)),g===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(X=i.R8UI),U===i.UNSIGNED_SHORT&&(X=i.R16UI),U===i.UNSIGNED_INT&&(X=i.R32UI),U===i.BYTE&&(X=i.R8I),U===i.SHORT&&(X=i.R16I),U===i.INT&&(X=i.R32I)),g===i.RG&&(U===i.FLOAT&&(X=i.RG32F),U===i.HALF_FLOAT&&(X=i.RG16F),U===i.UNSIGNED_BYTE&&(X=i.RG8),U===i.UNSIGNED_SHORT&&rt&&(X=rt.RG16_EXT),U===i.SHORT&&rt&&(X=rt.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(X=i.RG8UI),U===i.UNSIGNED_SHORT&&(X=i.RG16UI),U===i.UNSIGNED_INT&&(X=i.RG32UI),U===i.BYTE&&(X=i.RG8I),U===i.SHORT&&(X=i.RG16I),U===i.INT&&(X=i.RG32I)),g===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(X=i.RGB8UI),U===i.UNSIGNED_SHORT&&(X=i.RGB16UI),U===i.UNSIGNED_INT&&(X=i.RGB32UI),U===i.BYTE&&(X=i.RGB8I),U===i.SHORT&&(X=i.RGB16I),U===i.INT&&(X=i.RGB32I)),g===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),U===i.UNSIGNED_INT&&(X=i.RGBA32UI),U===i.BYTE&&(X=i.RGBA8I),U===i.SHORT&&(X=i.RGBA16I),U===i.INT&&(X=i.RGBA32I)),g===i.RGB&&(U===i.UNSIGNED_SHORT&&rt&&(X=rt.RGB16_EXT),U===i.SHORT&&rt&&(X=rt.RGB16_SNORM_EXT),U===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),g===i.RGBA){let K=nt?Ur:Gt.getTransfer(W);U===i.FLOAT&&(X=i.RGBA32F),U===i.HALF_FLOAT&&(X=i.RGBA16F),U===i.UNSIGNED_BYTE&&(X=K===Qt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT&&rt&&(X=rt.RGBA16_EXT),U===i.SHORT&&rt&&(X=rt.RGBA16_SNORM_EXT),U===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function E(w,g){let U;return w?g===null||g===In||g===rr?U=i.DEPTH24_STENCIL8:g===yn?U=i.DEPTH32F_STENCIL8:g===sr&&(U=i.DEPTH24_STENCIL8,At("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===In||g===rr?U=i.DEPTH_COMPONENT24:g===yn?U=i.DEPTH_COMPONENT32F:g===sr&&(U=i.DEPTH_COMPONENT16),U}function M(w,g){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Fe&&w.minFilter!==ze?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function C(w){let g=w.target;g.removeEventListener("dispose",C),A(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&d.delete(g)}function _(w){let g=w.target;g.removeEventListener("dispose",_),I(g)}function A(w){let g=n.get(w);if(g.__webglInit===void 0)return;let U=w.source,z=m.get(U);if(z){let W=z[g.__cacheKey];W.usedTimes--,W.usedTimes===0&&N(w),Object.keys(z).length===0&&m.delete(U)}n.remove(w)}function N(w){let g=n.get(w);i.deleteTexture(g.__webglTexture);let U=w.source,z=m.get(U);delete z[g.__cacheKey],a.memory.textures--}function I(w){let g=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(g.__webglFramebuffer[z]))for(let W=0;W<g.__webglFramebuffer[z].length;W++)i.deleteFramebuffer(g.__webglFramebuffer[z][W]);else i.deleteFramebuffer(g.__webglFramebuffer[z]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[z])}else{if(Array.isArray(g.__webglFramebuffer))for(let z=0;z<g.__webglFramebuffer.length;z++)i.deleteFramebuffer(g.__webglFramebuffer[z]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let z=0;z<g.__webglColorRenderbuffer.length;z++)g.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[z]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let U=w.textures;for(let z=0,W=U.length;z<W;z++){let nt=n.get(U[z]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),a.memory.textures--),n.remove(U[z])}n.remove(w)}let F=0;function Y(){F=0}function Z(){return F}function V(w){F=w}function q(){let w=F;return w>=s.maxTextures&&At("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),F+=1,w}function H(w){let g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function j(w,g){let U=n.get(w);if(w.isVideoTexture&&D(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&U.__version!==w.version){let z=w.image;if(z===null)At("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)At("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(U,w,g);return}}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+g)}function tt(w,g){let U=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){Rt(U,w,g);return}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+g)}function ut(w,g){let U=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){Rt(U,w,g);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+g)}function mt(w,g){let U=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&U.__version!==w.version){Dt(U,w,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+g)}let _t={[wo]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[Mo]:i.MIRRORED_REPEAT},Zt={[Fe]:i.NEAREST,[of]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[ze]:i.LINEAR,[Jo]:i.LINEAR_MIPMAP_NEAREST,[zi]:i.LINEAR_MIPMAP_LINEAR},fe={[hf]:i.NEVER,[mf]:i.ALWAYS,[uf]:i.LESS,[Ul]:i.LEQUAL,[df]:i.EQUAL,[Ol]:i.GEQUAL,[pf]:i.GREATER,[ff]:i.NOTEQUAL};function Jt(w,g){if(g.type===yn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===ze||g.magFilter===Jo||g.magFilter===Qr||g.magFilter===zi||g.minFilter===ze||g.minFilter===Jo||g.minFilter===Qr||g.minFilter===zi)&&At("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,_t[g.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,_t[g.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,_t[g.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Zt[g.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Zt[g.minFilter]),g.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,fe[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Fe||g.minFilter!==Qr&&g.minFilter!==zi||g.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function J(w,g){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",C));let z=g.source,W=m.get(z);W===void 0&&(W={},m.set(z,W));let nt=H(g);if(nt!==w.__cacheKey){W[nt]===void 0&&(W[nt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),W[nt].usedTimes++;let rt=W[w.__cacheKey];rt!==void 0&&(W[w.__cacheKey].usedTimes--,rt.usedTimes===0&&N(g)),w.__cacheKey=nt,w.__webglTexture=W[nt].texture}return U}function st(w,g,U){return Math.floor(Math.floor(w/U)/g)}function et(w,g,U,z){let nt=w.updateRanges;if(nt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,U,z,g.data);else{nt.sort((wt,ct)=>wt.start-ct.start);let rt=0;for(let wt=1;wt<nt.length;wt++){let ct=nt[rt],ot=nt[wt],Et=ct.start+ct.count,Ct=st(ot.start,g.width,4),Lt=st(ct.start,g.width,4);ot.start<=Et+1&&Ct===Lt&&st(ot.start+ot.count-1,g.width,4)===Ct?ct.count=Math.max(ct.count,ot.start+ot.count-ct.start):(++rt,nt[rt]=ot)}nt.length=rt+1;let X=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),at=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let wt=0,ct=nt.length;wt<ct;wt++){let ot=nt[wt],Et=Math.floor(ot.start/4),Ct=Math.ceil(ot.count/4),Lt=Et%g.width,R=Math.floor(Et/g.width),it=Ct,$=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Lt),e.pixelStorei(i.UNPACK_SKIP_ROWS,R),e.texSubImage2D(i.TEXTURE_2D,0,Lt,R,it,$,U,z,g.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,X),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,at)}}function Rt(w,g,U){let z=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(z=i.TEXTURE_3D);let W=J(w,g),nt=g.source;e.bindTexture(z,w.__webglTexture,i.TEXTURE0+U);let rt=n.get(nt);if(nt.version!==rt.__version||W===!0){if(e.activeTexture(i.TEXTURE0+U),(typeof ImageBitmap!="undefined"&&g.image instanceof ImageBitmap)===!1){let $=Gt.getPrimaries(Gt.workingColorSpace),lt=g.colorSpace===li?null:Gt.getPrimaries(g.colorSpace),ft=g.colorSpace===li||$===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let K=f(g.image,!1,s.maxTextureSize);K=Je(g,K);let at=r.convert(g.format,g.colorSpace),wt=r.convert(g.type),ct=y(g.internalFormat,at,wt,g.normalized,g.colorSpace,g.isVideoTexture);Jt(z,g);let ot,Et=g.mipmaps,Ct=g.isVideoTexture!==!0,Lt=rt.__version===void 0||W===!0,R=nt.dataReady,it=M(g,K);if(g.isDepthTexture)ct=E(g.format===Gi,g.type),Lt&&(Ct?e.texStorage2D(i.TEXTURE_2D,1,ct,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,ct,K.width,K.height,0,at,wt,null));else if(g.isDataTexture)if(Et.length>0){Ct&&Lt&&e.texStorage2D(i.TEXTURE_2D,it,ct,Et[0].width,Et[0].height);for(let $=0,lt=Et.length;$<lt;$++)ot=Et[$],Ct?R&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ot.width,ot.height,at,wt,ot.data):e.texImage2D(i.TEXTURE_2D,$,ct,ot.width,ot.height,0,at,wt,ot.data);g.generateMipmaps=!1}else Ct?(Lt&&e.texStorage2D(i.TEXTURE_2D,it,ct,K.width,K.height),R&&et(g,K,at,wt)):e.texImage2D(i.TEXTURE_2D,0,ct,K.width,K.height,0,at,wt,K.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ct&&Lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,ct,Et[0].width,Et[0].height,K.depth);for(let $=0,lt=Et.length;$<lt;$++)if(ot=Et[$],g.format!==wn)if(at!==null)if(Ct){if(R)if(g.layerUpdates.size>0){let ft=Th(ot.width,ot.height,g.format,g.type);for(let Q of g.layerUpdates){let yt=ot.data.subarray(Q*ft/ot.data.BYTES_PER_ELEMENT,(Q+1)*ft/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,Q,ot.width,ot.height,1,at,yt)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ot.width,ot.height,K.depth,at,ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,ct,ot.width,ot.height,K.depth,0,ot.data,0,0);else At("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ct?R&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ot.width,ot.height,K.depth,at,wt,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,ct,ot.width,ot.height,K.depth,0,at,wt,ot.data)}else{Ct&&Lt&&e.texStorage2D(i.TEXTURE_2D,it,ct,Et[0].width,Et[0].height);for(let $=0,lt=Et.length;$<lt;$++)ot=Et[$],g.format!==wn?at!==null?Ct?R&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,ot.width,ot.height,at,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,$,ct,ot.width,ot.height,0,ot.data):At("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?R&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ot.width,ot.height,at,wt,ot.data):e.texImage2D(i.TEXTURE_2D,$,ct,ot.width,ot.height,0,at,wt,ot.data)}else if(g.isDataArrayTexture)if(Ct){if(Lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,ct,K.width,K.height,K.depth),R)if(g.layerUpdates.size>0){let $=Th(K.width,K.height,g.format,g.type);for(let lt of g.layerUpdates){let ft=K.data.subarray(lt*$/K.data.BYTES_PER_ELEMENT,(lt+1)*$/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,K.width,K.height,1,at,wt,ft)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,at,wt,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ct,K.width,K.height,K.depth,0,at,wt,K.data);else if(g.isData3DTexture)Ct?(Lt&&e.texStorage3D(i.TEXTURE_3D,it,ct,K.width,K.height,K.depth),R&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,at,wt,K.data)):e.texImage3D(i.TEXTURE_3D,0,ct,K.width,K.height,K.depth,0,at,wt,K.data);else if(g.isFramebufferTexture){if(Lt)if(Ct)e.texStorage2D(i.TEXTURE_2D,it,ct,K.width,K.height);else{let $=K.width,lt=K.height;for(let ft=0;ft<it;ft++)e.texImage2D(i.TEXTURE_2D,ft,ct,$,lt,0,at,wt,null),$>>=1,lt>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),K.parentNode!==$){$.appendChild(K),d.add(g),$.onpaint=lt=>{let ft=lt.changedElements;for(let Q of d)ft.includes(Q.image)&&(Q.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let ft=i.RGBA,Q=i.RGBA,yt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ft,Q,yt,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Et.length>0){if(Ct&&Lt){let $=ee(Et[0]);e.texStorage2D(i.TEXTURE_2D,it,ct,$.width,$.height)}for(let $=0,lt=Et.length;$<lt;$++)ot=Et[$],Ct?R&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,at,wt,ot):e.texImage2D(i.TEXTURE_2D,$,ct,at,wt,ot);g.generateMipmaps=!1}else if(Ct){if(Lt){let $=ee(K);e.texStorage2D(i.TEXTURE_2D,it,ct,$.width,$.height)}R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at,wt,K)}else e.texImage2D(i.TEXTURE_2D,0,ct,at,wt,K);p(g)&&S(z),rt.__version=nt.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Dt(w,g,U){if(g.image.length!==6)return;let z=J(w,g),W=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+U);let nt=n.get(W);if(W.version!==nt.__version||z===!0){e.activeTexture(i.TEXTURE0+U);let rt=Gt.getPrimaries(Gt.workingColorSpace),X=g.colorSpace===li?null:Gt.getPrimaries(g.colorSpace),K=g.colorSpace===li||rt===X?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let at=g.isCompressedTexture||g.image[0].isCompressedTexture,wt=g.image[0]&&g.image[0].isDataTexture,ct=[];for(let Q=0;Q<6;Q++)!at&&!wt?ct[Q]=f(g.image[Q],!0,s.maxCubemapSize):ct[Q]=wt?g.image[Q].image:g.image[Q],ct[Q]=Je(g,ct[Q]);let ot=ct[0],Et=r.convert(g.format,g.colorSpace),Ct=r.convert(g.type),Lt=y(g.internalFormat,Et,Ct,g.normalized,g.colorSpace),R=g.isVideoTexture!==!0,it=nt.__version===void 0||z===!0,$=W.dataReady,lt=M(g,ot);Jt(i.TEXTURE_CUBE_MAP,g);let ft;if(at){R&&it&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Lt,ot.width,ot.height);for(let Q=0;Q<6;Q++){ft=ct[Q].mipmaps;for(let yt=0;yt<ft.length;yt++){let xt=ft[yt];g.format!==wn?Et!==null?R?$&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,yt,0,0,xt.width,xt.height,Et,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,yt,Lt,xt.width,xt.height,0,xt.data):At("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,yt,0,0,xt.width,xt.height,Et,Ct,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,yt,Lt,xt.width,xt.height,0,Et,Ct,xt.data)}}}else{if(ft=g.mipmaps,R&&it){ft.length>0&&lt++;let Q=ee(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Lt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(wt){R?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ct[Q].width,ct[Q].height,Et,Ct,ct[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Lt,ct[Q].width,ct[Q].height,0,Et,Ct,ct[Q].data);for(let yt=0;yt<ft.length;yt++){let ge=ft[yt].image[Q].image;R?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,yt+1,0,0,ge.width,ge.height,Et,Ct,ge.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,yt+1,Lt,ge.width,ge.height,0,Et,Ct,ge.data)}}else{R?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Et,Ct,ct[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Lt,Et,Ct,ct[Q]);for(let yt=0;yt<ft.length;yt++){let xt=ft[yt];R?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,yt+1,0,0,Et,Ct,xt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,yt+1,Lt,Et,Ct,xt.image[Q])}}}p(g)&&S(i.TEXTURE_CUBE_MAP),nt.__version=W.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Tt(w,g,U,z,W,nt){let rt=r.convert(U.format,U.colorSpace),X=r.convert(U.type),K=y(U.internalFormat,rt,X,U.normalized,U.colorSpace),at=n.get(g),wt=n.get(U);if(wt.__renderTarget=g,!at.__hasExternalTextures){let ct=Math.max(1,g.width>>nt),ot=Math.max(1,g.height>>nt);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?e.texImage3D(W,nt,K,ct,ot,g.depth,0,rt,X,null):e.texImage2D(W,nt,K,ct,ot,0,rt,X,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Ae(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,W,wt.__webglTexture,0,me(g)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,W,wt.__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function be(w,g,U){if(i.bindRenderbuffer(i.RENDERBUFFER,w),g.depthBuffer){let z=g.depthTexture,W=z&&z.isDepthTexture?z.type:null,nt=E(g.stencilBuffer,W),rt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ae(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(g),nt,g.width,g.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(g),nt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,nt,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,w)}else{let z=g.textures;for(let W=0;W<z.length;W++){let nt=z[W],rt=r.convert(nt.format,nt.colorSpace),X=r.convert(nt.type),K=y(nt.internalFormat,rt,X,nt.normalized,nt.colorSpace);Ae(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(g),K,g.width,g.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(g),K,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,K,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(w,g,U){let z=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=n.get(g.depthTexture);if(W.__renderTarget=g,(!W.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),z){if(W.__webglInit===void 0&&(W.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Jt(i.TEXTURE_CUBE_MAP,g.depthTexture);let at=r.convert(g.depthTexture.format),wt=r.convert(g.depthTexture.type),ct;g.depthTexture.format===kn?ct=i.DEPTH_COMPONENT24:g.depthTexture.format===Gi&&(ct=i.DEPTH24_STENCIL8);for(let ot=0;ot<6;ot++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ct,g.width,g.height,0,at,wt,null)}}else j(g.depthTexture,0);let nt=W.__webglTexture,rt=me(g),X=z?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,K=g.depthTexture.format===Gi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===kn)Ae(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,X,nt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,K,X,nt,0);else if(g.depthTexture.format===Gi)Ae(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,X,nt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,K,X,nt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(w){let g=n.get(w),U=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){let z=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),z){let W=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,z.removeEventListener("dispose",W)};z.addEventListener("dispose",W),g.__depthDisposeCallback=W}g.__boundDepthTexture=z}if(w.depthTexture&&!g.__autoAllocateDepthBuffer)if(U)for(let z=0;z<6;z++)zt(g.__webglFramebuffer[z],w,z);else{let z=w.texture.mipmaps;z&&z.length>0?zt(g.__webglFramebuffer[0],w,0):zt(g.__webglFramebuffer,w,0)}else if(U){g.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[z]),g.__webglDepthbuffer[z]===void 0)g.__webglDepthbuffer[z]=i.createRenderbuffer(),be(g.__webglDepthbuffer[z],w,!1);else{let W=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=g.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,nt)}}else{let z=w.texture.mipmaps;if(z&&z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),be(g.__webglDepthbuffer,w,!1);else{let W=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,nt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(w,g,U){let z=n.get(w);g!==void 0&&Tt(z.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&se(w)}function Xt(w){let g=w.texture,U=n.get(w),z=n.get(g);w.addEventListener("dispose",_);let W=w.textures,nt=w.isWebGLCubeRenderTarget===!0,rt=W.length>1;if(rt||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=g.version,a.memory.textures++),nt){U.__webglFramebuffer=[];for(let X=0;X<6;X++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[X]=[];for(let K=0;K<g.mipmaps.length;K++)U.__webglFramebuffer[X][K]=i.createFramebuffer()}else U.__webglFramebuffer[X]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let X=0;X<g.mipmaps.length;X++)U.__webglFramebuffer[X]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(rt)for(let X=0,K=W.length;X<K;X++){let at=n.get(W[X]);at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&Ae(w)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let X=0;X<W.length;X++){let K=W[X];U.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[X]);let at=r.convert(K.format,K.colorSpace),wt=r.convert(K.type),ct=y(K.internalFormat,at,wt,K.normalized,K.colorSpace,w.isXRRenderTarget===!0),ot=me(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,ct,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,U.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),be(U.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),Jt(i.TEXTURE_CUBE_MAP,g);for(let X=0;X<6;X++)if(g.mipmaps&&g.mipmaps.length>0)for(let K=0;K<g.mipmaps.length;K++)Tt(U.__webglFramebuffer[X][K],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,K);else Tt(U.__webglFramebuffer[X],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);p(g)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){for(let X=0,K=W.length;X<K;X++){let at=W[X],wt=n.get(at),ct=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ct=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,wt.__webglTexture),Jt(ct,at),Tt(U.__webglFramebuffer,w,at,i.COLOR_ATTACHMENT0+X,ct,0),p(at)&&S(ct)}e.unbindTexture()}else{let X=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(X=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(X,z.__webglTexture),Jt(X,g),g.mipmaps&&g.mipmaps.length>0)for(let K=0;K<g.mipmaps.length;K++)Tt(U.__webglFramebuffer[K],w,g,i.COLOR_ATTACHMENT0,X,K);else Tt(U.__webglFramebuffer,w,g,i.COLOR_ATTACHMENT0,X,0);p(g)&&S(X),e.unbindTexture()}w.depthBuffer&&se(w)}function Ee(w){let g=w.textures;for(let U=0,z=g.length;U<z;U++){let W=g[U];if(p(W)){let nt=T(w),rt=n.get(W).__webglTexture;e.bindTexture(nt,rt),S(nt),e.unbindTexture()}}}let Re=[],Ne=[];function ke(w){if(w.samples>0){if(Ae(w)===!1){let g=w.textures,U=w.width,z=w.height,W=i.COLOR_BUFFER_BIT,nt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=n.get(w),X=g.length>1;if(X)for(let at=0;at<g.length;at++)e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer);let K=w.texture.mipmaps;K&&K.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let at=0;at<g.length;at++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),X){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,rt.__webglColorRenderbuffer[at]);let wt=n.get(g[at]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,wt,0)}i.blitFramebuffer(0,0,U,z,0,0,U,z,W,i.NEAREST),l===!0&&(Re.length=0,Ne.length=0,Re.push(i.COLOR_ATTACHMENT0+at),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Re.push(nt),Ne.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Re))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let at=0;at<g.length;at++){e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,rt.__webglColorRenderbuffer[at]);let wt=n.get(g[at]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let g=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function me(w){return Math.min(s.maxSamples,w.samples)}function Ae(w){let g=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function D(w){let g=a.render.frame;h.get(w)!==g&&(h.set(w,g),w.update())}function Je(w,g){let U=w.colorSpace,z=w.format,W=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||U!==Nr&&U!==li&&(Gt.getTransfer(U)===Qt?(z!==wn||W!==mn)&&At("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",U)),g}function ee(w){return typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame!="undefined"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=Y,this.getTextureUnits=Z,this.setTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=tt,this.setTexture3D=ut,this.setTextureCube=mt,this.rebindTextures=jt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function gy(i,t){function e(n,s=li){let r,a=Gt.getTransfer(s);if(n===mn)return i.UNSIGNED_BYTE;if(n===Qo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_h)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===mh)return i.BYTE;if(n===gh)return i.SHORT;if(n===sr)return i.UNSIGNED_SHORT;if(n===jo)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===Hn)return i.HALF_FLOAT;if(n===xh)return i.ALPHA;if(n===bh)return i.RGB;if(n===wn)return i.RGBA;if(n===kn)return i.DEPTH_COMPONENT;if(n===Gi)return i.DEPTH_STENCIL;if(n===el)return i.RED;if(n===nl)return i.RED_INTEGER;if(n===Hi)return i.RG;if(n===il)return i.RG_INTEGER;if(n===sl)return i.RGBA_INTEGER;if(n===ta||n===ea||n===na||n===ia)if(a===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rl||n===al||n===ol||n===ll)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cl||n===hl||n===ul||n===dl||n===pl||n===sa||n===fl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===cl||n===hl)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ul)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===dl)return r.COMPRESSED_R11_EAC;if(n===pl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===sa)return r.COMPRESSED_RG11_EAC;if(n===fl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ml||n===gl||n===vl||n===_l||n===xl||n===bl||n===yl||n===wl||n===Ml||n===Sl||n===El||n===Al||n===Tl||n===Cl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ml)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gl)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vl)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_l)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bl)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yl)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wl)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ml)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sl)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===El)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Al)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tl)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cl)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pl||n===Rl||n===Il)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Pl)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dl||n===Ll||n===ra||n===Nl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Dl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var vy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_y=`
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

}`,qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Xr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new pn({vertexShader:vy,fragmentShader:_y,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new en(new qr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yh=class extends Wt{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,v=null,b=typeof XRWebGLBinding!="undefined",f=new qh,p={},S=e.getContextAttributes(),T=null,y=null,E=[],M=[],C=new Ht,_=null,A=new Oe;A.viewport=new ue;let N=new Oe;N.viewport=new ue;let I=[A,N],F=new Yo,Y=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let st=E[J];return st===void 0&&(st=new tr,E[J]=st),st.getTargetRaySpace()},this.getControllerGrip=function(J){let st=E[J];return st===void 0&&(st=new tr,E[J]=st),st.getGripSpace()},this.getHand=function(J){let st=E[J];return st===void 0&&(st=new tr,E[J]=st),st.getHandSpace()};function V(J){let st=M.indexOf(J.inputSource);if(st===-1)return;let et=E[st];et!==void 0&&(et.update(J.inputSource,J.frame,c||a),et.dispatchEvent({type:J.type,data:J.inputSource}))}function q(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",H);for(let J=0;J<E.length;J++){let st=M[J];st!==null&&(M[J]=null,E[J].disconnect(st))}Y=null,Z=null,f.reset();for(let J in p)delete p[J];t.setRenderTarget(T),m=null,u=null,d=null,s=null,y=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&At("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&At("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=function(J){return Va(this,null,function*(){if(s=J,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",q),s.addEventListener("inputsourceschange",H),S.xrCompatible!==!0&&(yield e.makeXRCompatible()),_=t.getPixelRatio(),t.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,Rt=null,Dt=null;S.depth&&(Dt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=S.stencil?Gi:kn,Rt=S.stencil?rr:In);let Tt={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Tt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new un(u.textureWidth,u.textureHeight,{format:wn,type:mn,depthTexture:new oi(u.textureWidth,u.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let et={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new un(m.framebufferWidth,m.framebufferHeight,{format:wn,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=yield s.requestReferenceSpace(o),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function H(J){for(let st=0;st<J.removed.length;st++){let et=J.removed[st],Rt=M.indexOf(et);Rt>=0&&(M[Rt]=null,E[Rt].disconnect(et))}for(let st=0;st<J.added.length;st++){let et=J.added[st],Rt=M.indexOf(et);if(Rt===-1){for(let Tt=0;Tt<E.length;Tt++)if(Tt>=M.length){M.push(et),Rt=Tt;break}else if(M[Tt]===null){M[Tt]=et,Rt=Tt;break}if(Rt===-1)break}let Dt=E[Rt];Dt&&Dt.connect(et)}}let j=new P,tt=new P;function ut(J,st,et){j.setFromMatrixPosition(st.matrixWorld),tt.setFromMatrixPosition(et.matrixWorld);let Rt=j.distanceTo(tt),Dt=st.projectionMatrix.elements,Tt=et.projectionMatrix.elements,be=Dt[14]/(Dt[10]-1),zt=Dt[14]/(Dt[10]+1),se=(Dt[9]+1)/Dt[5],jt=(Dt[9]-1)/Dt[5],Xt=(Dt[8]-1)/Dt[0],Ee=(Tt[8]+1)/Tt[0],Re=be*Xt,Ne=be*Ee,ke=Rt/(-Xt+Ee),me=ke*-Xt;if(st.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(me),J.translateZ(ke),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Dt[10]===-1)J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let Ae=be+ke,D=zt+ke,Je=Re-me,ee=Ne+(Rt-me),w=se*zt/D*Ae,g=jt*zt/D*Ae;J.projectionMatrix.makePerspective(Je,ee,w,g,Ae,D),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function mt(J,st){st===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(st.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let st=J.near,et=J.far;f.texture!==null&&(f.depthNear>0&&(st=f.depthNear),f.depthFar>0&&(et=f.depthFar)),F.near=N.near=A.near=st,F.far=N.far=A.far=et,(Y!==F.near||Z!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),Y=F.near,Z=F.far),F.layers.mask=J.layers.mask|6,A.layers.mask=F.layers.mask&-5,N.layers.mask=F.layers.mask&-3;let Rt=J.parent,Dt=F.cameras;mt(F,Rt);for(let Tt=0;Tt<Dt.length;Tt++)mt(Dt[Tt],Rt);Dt.length===2?ut(F,A,N):F.projectionMatrix.copy(A.projectionMatrix),_t(J,F,Rt)};function _t(J,st,et){et===null?J.matrix.copy(st.matrixWorld):(J.matrix.copy(et.matrixWorld),J.matrix.invert(),J.matrix.multiply(st.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Eo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(F)},this.getCameraTexture=function(J){return p[J]};let Zt=null;function fe(J,st){if(h=st.getViewerPose(c||a),v=st,h!==null){let et=h.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let Rt=!1;et.length!==F.cameras.length&&(F.cameras.length=0,Rt=!0);for(let zt=0;zt<et.length;zt++){let se=et[zt],jt=null;if(m!==null)jt=m.getViewport(se);else{let Ee=d.getViewSubImage(u,se);jt=Ee.viewport,zt===0&&(t.setRenderTargetTextures(y,Ee.colorTexture,Ee.depthStencilTexture),t.setRenderTarget(y))}let Xt=I[zt];Xt===void 0&&(Xt=new Oe,Xt.layers.enable(zt),Xt.viewport=new ue,I[zt]=Xt),Xt.matrix.fromArray(se.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(se.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(jt.x,jt.y,jt.width,jt.height),zt===0&&(F.matrix.copy(Xt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Rt===!0&&F.cameras.push(Xt)}let Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){d=n.getBinding();let zt=d.getDepthInformation(et[0]);zt&&zt.isValid&&zt.texture&&f.init(zt,s.renderState)}if(Dt&&Dt.includes("camera-access")&&b){t.state.unbindTexture(),d=n.getBinding();for(let zt=0;zt<et.length;zt++){let se=et[zt].camera;if(se){let jt=p[se];jt||(jt=new Xr,p[se]=jt);let Xt=d.getCameraImage(se);jt.sourceTexture=Xt}}}}for(let et=0;et<E.length;et++){let Rt=M[et],Dt=E[et];Rt!==null&&Dt!==void 0&&Dt.update(Rt,st,c||a)}Zt&&Zt(J,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),v=null}let Jt=new Xf;Jt.setAnimationLoop(fe),this.setAnimationLoop=function(J){Zt=J},this.dispose=function(){}}},xy=new $t,Jf=new It;Jf.set(-1,0,0,0,1,0,0,0,1);function by(i,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,Sh(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,S,T,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(f,p):p.isMeshLambertMaterial?(r(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(f,p),d(f,p)):p.isMeshPhongMaterial?(r(f,p),h(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(f,p),u(f,p),p.isMeshPhysicalMaterial&&m(f,p,y)):p.isMeshMatcapMaterial?(r(f,p),v(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),b(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,S,T):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===$e&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===$e&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let S=t.get(p),T=S.envMap,y=S.envMapRotation;T&&(f.envMap.value=T,f.envMapRotation.value.setFromMatrix4(xy.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Jf),f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,S,T){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*S,f.scale.value=T*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,S){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,p){p.matcap&&(f.matcap.value=p.matcap)}function b(f,p){let S=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function yy(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){let M=E.program;n.uniformBlockBinding(y,M)}function c(y,E){let M=s[y.id];M===void 0&&(f(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",S));let C=E.program;n.updateUBOMapping(y,C);let _=t.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){let E=d();y.__bindingPointIndex=E;let M=i.createBuffer(),C=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,M),M}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let E=s[y.id],M=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let _=0,A=M.length;_<A;_++){let N=M[_];if(Array.isArray(N))for(let I=0,F=N.length;I<F;I++)m(N[I],_,I,C);else m(N,_,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,E,M,C){if(b(y,E,M,C)===!0){let _=y.__offset,A=y.value;if(Array.isArray(A)){let N=0;for(let I=0;I<A.length;I++){let F=A[I],Y=p(F);v(F,y.__data,N),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(N+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(A,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function v(y,E,M){typeof y=="number"||typeof y=="boolean"?E[0]=y:y.isMatrix3?(E[0]=y.elements[0],E[1]=y.elements[1],E[2]=y.elements[2],E[3]=0,E[4]=y.elements[3],E[5]=y.elements[4],E[6]=y.elements[5],E[7]=0,E[8]=y.elements[6],E[9]=y.elements[7],E[10]=y.elements[8],E[11]=0):ArrayBuffer.isView(y)?E.set(new y.constructor(y.buffer,y.byteOffset,E.length)):y.toArray(E,M)}function b(y,E,M,C){let _=y.value,A=E+"_"+M;if(C[A]===void 0)return typeof _=="number"||typeof _=="boolean"?C[A]=_:ArrayBuffer.isView(_)?C[A]=_.slice():C[A]=_.clone(),!0;{let N=C[A];if(typeof _=="number"||typeof _=="boolean"){if(N!==_)return C[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(N.equals(_)===!1)return N.copy(_),!0}}return!1}function f(y){let E=y.uniforms,M=0,C=16;for(let A=0,N=E.length;A<N;A++){let I=Array.isArray(E[A])?E[A]:[E[A]];for(let F=0,Y=I.length;F<Y;F++){let Z=I[F],V=Array.isArray(Z.value)?Z.value:[Z.value];for(let q=0,H=V.length;q<H;q++){let j=V[q],tt=p(j),ut=M%C,mt=ut%tt.boundary,_t=ut+mt;M+=mt,_t!==0&&C-_t<tt.storage&&(M+=C-_t),Z.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=M,M+=tt.storage}}}let _=M%C;return _>0&&(M+=C-_),y.__size=M,y.__cache={},this}function p(y){let E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?At("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):At("WebGLRenderer: Unsupported uniform value type.",y),E}function S(y){let E=y.target;E.removeEventListener("dispose",S);let M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function T(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}var wy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wn=null;function My(){return Wn===null&&(Wn=new Gr(wy,16,16,Hi,Hn),Wn.name="DFG_LUT",Wn.minFilter=ze,Wn.magFilter=ze,Wn.wrapS=Fn,Wn.wrapT=Fn,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}var zl=class{constructor(t={}){let{canvas:e=gf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:m=mn}=t;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;let b=m,f=new Set([sl,il,nl]),p=new Set([mn,In,sr,rr,Qo,tl]),S=new Uint32Array(4),T=new Int32Array(4),y=new P,E=null,M=null,C=[],_=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,I=!1,F=null,Y=null,Z=null,V=null;this._outputColorSpace=hn;let q=0,H=0,j=null,tt=-1,ut=null,mt=new ue,_t=new ue,Zt=null,fe=new Ut(0),Jt=0,J=e.width,st=e.height,et=1,Rt=null,Dt=null,Tt=new ue(0,0,J,st),be=new ue(0,0,J,st),zt=!1,se=new ds,jt=!1,Xt=!1,Ee=new $t,Re=new P,Ne=new ue,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},me=!1;function Ae(){return j===null?et:1}let D=n;function Je(x,L){return e.getContext(x,L)}try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",oe,!1),e.addEventListener("webglcontextcreationerror",Dn,!1),D===null){let L="webgl2";if(D=Je(L,x),D===null)throw Je(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(x){throw Pt("WebGLRenderer: "+x.message),x}let ee,w,g,U,z,W,nt,rt,X,K,at,wt,ct,ot,Et,Ct,Lt,R,it,$,lt,ft,Q;function yt(){ee=new Rx(D),ee.init(),lt=new gy(D,ee),w=new wx(D,ee,t,lt),g=new fy(D,ee),w.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),Y=D.createFramebuffer(),Z=D.createFramebuffer(),V=D.createFramebuffer(),U=new Lx(D),z=new ty,W=new my(D,ee,g,z,w,lt,U),nt=new Px(N),rt=new Fv(D),ft=new bx(D,rt),X=new Ix(D,rt,U,ft),K=new Ux(D,X,rt,ft,U),R=new Nx(D,w,W),Et=new Mx(z),at=new Qb(N,nt,ee,w,ft,Et),wt=new by(N,z),ct=new ny,ot=new ly(ee),Lt=new xx(N,nt,g,K,v,l),Ct=new py(N,K,w),Q=new yy(D,U,w,g),it=new yx(D,ee,U),$=new Dx(D,ee,U),U.programs=at.programs,N.capabilities=w,N.extensions=ee,N.properties=z,N.renderLists=ct,N.shadowMap=Ct,N.state=g,N.info=U}yt(),b!==mn&&(A=new Fx(b,e.width,e.height,o,s,r));let xt=new Yh(N,D);this.xr=xt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let x=ee.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=ee.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(x){x!==void 0&&(et=x,this.setSize(J,st,!1))},this.getSize=function(x){return x.set(J,st)},this.setSize=function(x,L,G=!0){if(xt.isPresenting){At("WebGLRenderer: Can't change size while VR device is presenting.");return}J=x,st=L,e.width=Math.floor(x*et),e.height=Math.floor(L*et),G===!0&&(e.style.width=x+"px",e.style.height=L+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(J*et,st*et).floor()},this.setDrawingBufferSize=function(x,L,G){J=x,st=L,et=G,e.width=Math.floor(x*G),e.height=Math.floor(L*G),this.setViewport(0,0,x,L)},this.setEffects=function(x){if(b===mn){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let L=0;L<x.length;L++)if(x[L].isOutputPass===!0){At("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(mt)},this.getViewport=function(x){return x.copy(Tt)},this.setViewport=function(x,L,G,B){x.isVector4?Tt.set(x.x,x.y,x.z,x.w):Tt.set(x,L,G,B),g.viewport(mt.copy(Tt).multiplyScalar(et).round())},this.getScissor=function(x){return x.copy(be)},this.setScissor=function(x,L,G,B){x.isVector4?be.set(x.x,x.y,x.z,x.w):be.set(x,L,G,B),g.scissor(_t.copy(be).multiplyScalar(et).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(x){g.setScissorTest(zt=x)},this.setOpaqueSort=function(x){Rt=x},this.setTransparentSort=function(x){Dt=x},this.getClearColor=function(x){return x.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(x=!0,L=!0,G=!0){let B=0;if(x){let k=!1;if(j!==null){let pt=j.texture.format;k=f.has(pt)}if(k){let pt=j.texture.type,vt=p.has(pt),dt=Lt.getClearColor(),bt=Lt.getClearAlpha(),Mt=dt.r,Nt=dt.g,Ft=dt.b;vt?(S[0]=Mt,S[1]=Nt,S[2]=Ft,S[3]=bt,D.clearBufferuiv(D.COLOR,0,S)):(T[0]=Mt,T[1]=Nt,T[2]=Ft,T[3]=bt,D.clearBufferiv(D.COLOR,0,T))}else B|=D.COLOR_BUFFER_BIT}L&&(B|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),F=x},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",Dn,!1),Lt.dispose(),ct.dispose(),ot.dispose(),z.dispose(),nt.dispose(),K.dispose(),ft.dispose(),Q.dispose(),at.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",ep),xt.removeEventListener("sessionend",np),es.stop()};function ge(x){x.preventDefault(),Mh("WebGLRenderer: Context Lost."),I=!0}function oe(){Mh("WebGLRenderer: Context Restored."),I=!1;let x=U.autoReset,L=Ct.enabled,G=Ct.autoUpdate,B=Ct.needsUpdate,k=Ct.type;yt(),U.autoReset=x,Ct.enabled=L,Ct.autoUpdate=G,Ct.needsUpdate=B,Ct.type=k}function Dn(x){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ln(x){let L=x.target;L.removeEventListener("dispose",Ln),Wg(L)}function Wg(x){Xg(x),z.remove(x)}function Xg(x){let L=z.get(x).programs;L!==void 0&&(L.forEach(function(G){at.releaseProgram(G)}),x.isShaderMaterial&&at.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,G,B,k,pt){L===null&&(L=ke);let vt=k.isMesh&&k.matrixWorld.determinantAffine()<0,dt=$g(x,L,G,B,k);g.setMaterial(B,vt);let bt=G.index,Mt=1;if(B.wireframe===!0){if(bt=X.getWireframeAttribute(G),bt===void 0)return;Mt=2}let Nt=G.drawRange,Ft=G.attributes.position,St=Nt.start*Mt,ie=(Nt.start+Nt.count)*Mt;pt!==null&&(St=Math.max(St,pt.start*Mt),ie=Math.min(ie,(pt.start+pt.count)*Mt)),bt!==null?(St=Math.max(St,0),ie=Math.min(ie,bt.count)):Ft!=null&&(St=Math.max(St,0),ie=Math.min(ie,Ft.count));let ye=ie-St;if(ye<0||ye===1/0)return;ft.setup(k,B,dt,G,bt);let ve,re=it;if(bt!==null&&(ve=rt.get(bt),re=$,re.setIndex(ve)),k.isMesh)B.wireframe===!0?(g.setLineWidth(B.wireframeLinewidth*Ae()),re.setMode(D.LINES)):re.setMode(D.TRIANGLES);else if(k.isLine){let He=B.linewidth;He===void 0&&(He=1),g.setLineWidth(He*Ae()),k.isLineSegments?re.setMode(D.LINES):k.isLineLoop?re.setMode(D.LINE_LOOP):re.setMode(D.LINE_STRIP)}else k.isPoints?re.setMode(D.POINTS):k.isSprite&&re.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))re.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let He=k._multiDrawStarts,gt=k._multiDrawCounts,on=k._multiDrawCount,qt=bt?rt.get(bt).bytesPerElement:1,_n=z.get(B).currentProgram.getUniforms();for(let Nn=0;Nn<on;Nn++)_n.setValue(D,"_gl_DrawID",Nn),re.render(He[Nn]/qt,gt[Nn])}else if(k.isInstancedMesh)re.renderInstances(St,ye,k.count);else if(G.isInstancedBufferGeometry){let He=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,gt=Math.min(G.instanceCount,He);re.renderInstances(St,ye,gt)}else re.render(St,ye)};function tp(x,L,G){x.transparent===!0&&x.side===zn&&x.forceSinglePass===!1?(x.side=$e,x.needsUpdate=!0,ka(x,L,G),x.side=si,x.needsUpdate=!0,ka(x,L,G),x.side=zn):ka(x,L,G)}this.compile=function(x,L,G=null){G===null&&(G=x),M=ot.get(G),M.init(L),_.push(M),G.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(M.pushLight(k),k.castShadow&&M.pushShadow(k))}),x!==G&&x.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(M.pushLight(k),k.castShadow&&M.pushShadow(k))}),M.setupLights();let B=new Set;return x.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let pt=k.material;if(pt)if(Array.isArray(pt))for(let vt=0;vt<pt.length;vt++){let dt=pt[vt];tp(dt,G,k),B.add(dt)}else tp(pt,G,k),B.add(pt)}),M=_.pop(),B},this.compileAsync=function(x,L,G=null){let B=this.compile(x,L,G);return new Promise(k=>{function pt(){if(B.forEach(function(vt){z.get(vt).currentProgram.isReady()&&B.delete(vt)}),B.size===0){k(x);return}setTimeout(pt,10)}ee.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let xc=null;function qg(x){xc&&xc(x)}function ep(){es.stop()}function np(){es.start()}let es=new Xf;es.setAnimationLoop(qg),typeof self!="undefined"&&es.setContext(self),this.setAnimationLoop=function(x){xc=x,xt.setAnimationLoop(x),x===null?es.stop():es.start()},xt.addEventListener("sessionstart",ep),xt.addEventListener("sessionend",np),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(x,L);let G=xt.enabled===!0&&xt.isPresenting===!0,B=A!==null&&(j===null||G)&&A.begin(N,j);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(L),L=xt.getCamera()),x.isScene===!0&&x.onBeforeRender(N,x,L,j),M=ot.get(x,_.length),M.init(L),M.state.textureUnits=W.getTextureUnits(),_.push(M),Ee.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),se.setFromProjectionMatrix(Ee,bn,L.reversedDepth),Xt=this.localClippingEnabled,jt=Et.init(this.clippingPlanes,Xt),E=ct.get(x,C.length),E.init(),C.push(E),xt.enabled===!0&&xt.isPresenting===!0){let vt=N.xr.getDepthSensingMesh();vt!==null&&bc(vt,L,-1/0,N.sortObjects)}bc(x,L,0,N.sortObjects),E.finish(),N.sortObjects===!0&&E.sort(Rt,Dt,L.reversedDepth),me=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,me&&Lt.addToRenderList(E,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),jt===!0&&Et.beginShadows();let k=M.state.shadowsArray;if(Ct.render(k,x,L),jt===!0&&Et.endShadows(),(B&&A.hasRenderPass())===!1){let vt=E.opaque,dt=E.transmissive;if(M.setupLights(),L.isArrayCamera){let bt=L.cameras;if(dt.length>0)for(let Mt=0,Nt=bt.length;Mt<Nt;Mt++){let Ft=bt[Mt];sp(vt,dt,x,Ft)}me&&Lt.render(x);for(let Mt=0,Nt=bt.length;Mt<Nt;Mt++){let Ft=bt[Mt];ip(E,x,Ft,Ft.viewport)}}else dt.length>0&&sp(vt,dt,x,L),me&&Lt.render(x),ip(E,x,L)}j!==null&&H===0&&(W.updateMultisampleRenderTarget(j),W.updateRenderTargetMipmap(j)),B&&A.end(N),x.isScene===!0&&x.onAfterRender(N,x,L),ft.resetDefaultState(),tt=-1,ut=null,_.pop(),_.length>0?(M=_[_.length-1],W.setTextureUnits(M.state.textureUnits),jt===!0&&Et.setGlobalState(N.clippingPlanes,M.state.camera)):M=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,F!==null&&F.renderEnd()};function bc(x,L,G,B){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)G=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLightProbeGrid)M.pushLightProbeGrid(x);else if(x.isLight)M.pushLight(x),x.castShadow&&M.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||se.intersectsSprite(x)){B&&Ne.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ee);let vt=K.update(x),dt=x.material;dt.visible&&E.push(x,vt,dt,G,Ne.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||se.intersectsObject(x))){let vt=K.update(x),dt=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ne.copy(x.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Ne.copy(vt.boundingSphere.center)),Ne.applyMatrix4(x.matrixWorld).applyMatrix4(Ee)),Array.isArray(dt)){let bt=vt.groups;for(let Mt=0,Nt=bt.length;Mt<Nt;Mt++){let Ft=bt[Mt],St=dt[Ft.materialIndex];St&&St.visible&&E.push(x,vt,St,G,Ne.z,Ft)}}else dt.visible&&E.push(x,vt,dt,G,Ne.z,null)}}let pt=x.children;for(let vt=0,dt=pt.length;vt<dt;vt++)bc(pt[vt],L,G,B)}function ip(x,L,G,B){let{opaque:k,transmissive:pt,transparent:vt}=x;M.setupLightsView(G),jt===!0&&Et.setGlobalState(N.clippingPlanes,G),B&&g.viewport(mt.copy(B)),k.length>0&&Ba(k,L,G),pt.length>0&&Ba(pt,L,G),vt.length>0&&Ba(vt,L,G),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function sp(x,L,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[B.id]===void 0){let St=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[B.id]=new un(1,1,{generateMipmaps:!0,type:St?Hn:mn,minFilter:zi,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace})}let pt=M.state.transmissionRenderTarget[B.id],vt=B.viewport||mt;pt.setSize(vt.z*N.transmissionResolutionScale,vt.w*N.transmissionResolutionScale);let dt=N.getRenderTarget(),bt=N.getActiveCubeFace(),Mt=N.getActiveMipmapLevel();N.setRenderTarget(pt),N.getClearColor(fe),Jt=N.getClearAlpha(),Jt<1&&N.setClearColor(16777215,.5),N.clear(),me&&Lt.render(G);let Nt=N.toneMapping;N.toneMapping=Rn;let Ft=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),M.setupLightsView(B),jt===!0&&Et.setGlobalState(N.clippingPlanes,B),Ba(x,G,B),W.updateMultisampleRenderTarget(pt),W.updateRenderTargetMipmap(pt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let ie=0,ye=L.length;ie<ye;ie++){let ve=L[ie],{object:re,geometry:He,material:gt,group:on}=ve;if(gt.side===zn&&re.layers.test(B.layers)){let qt=gt.side;gt.side=$e,gt.needsUpdate=!0,rp(re,G,B,He,gt,on),gt.side=qt,gt.needsUpdate=!0,St=!0}}St===!0&&(W.updateMultisampleRenderTarget(pt),W.updateRenderTargetMipmap(pt))}N.setRenderTarget(dt,bt,Mt),N.setClearColor(fe,Jt),Ft!==void 0&&(B.viewport=Ft),N.toneMapping=Nt}function Ba(x,L,G){let B=L.isScene===!0?L.overrideMaterial:null;for(let k=0,pt=x.length;k<pt;k++){let vt=x[k],{object:dt,geometry:bt,group:Mt}=vt,Nt=vt.material;Nt.allowOverride===!0&&B!==null&&(Nt=B),dt.layers.test(G.layers)&&rp(dt,L,G,bt,Nt,Mt)}}function rp(x,L,G,B,k,pt){x.onBeforeRender(N,L,G,B,k,pt),x.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),k.onBeforeRender(N,L,G,B,x,pt),k.transparent===!0&&k.side===zn&&k.forceSinglePass===!1?(k.side=$e,k.needsUpdate=!0,N.renderBufferDirect(G,L,B,k,x,pt),k.side=si,k.needsUpdate=!0,N.renderBufferDirect(G,L,B,k,x,pt),k.side=zn):N.renderBufferDirect(G,L,B,k,x,pt),x.onAfterRender(N,L,G,B,k,pt)}function ka(x,L,G){L.isScene!==!0&&(L=ke);let B=z.get(x),k=M.state.lights,pt=M.state.shadowsArray,vt=k.state.version,dt=at.getParameters(x,k.state,pt,L,G,M.state.lightProbeGridArray),bt=at.getProgramCacheKey(dt),Mt=B.programs;B.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,B.fog=L.fog;let Nt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;B.envMap=nt.get(x.envMap||B.environment,Nt),B.envMapRotation=B.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,Mt===void 0&&(x.addEventListener("dispose",Ln),Mt=new Map,B.programs=Mt);let Ft=Mt.get(bt);if(Ft!==void 0){if(B.currentProgram===Ft&&B.lightsStateVersion===vt)return op(x,dt),Ft}else dt.uniforms=at.getUniforms(x),F!==null&&x.isNodeMaterial&&F.build(x,G,dt),x.onBeforeCompile(dt,N),Ft=at.acquireProgram(dt,bt),Mt.set(bt,Ft),B.uniforms=dt.uniforms;let St=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(St.clippingPlanes=Et.uniform),op(x,dt),B.needsLights=Zg(x),B.lightsStateVersion=vt,B.needsLights&&(St.ambientLightColor.value=k.state.ambient,St.lightProbe.value=k.state.probe,St.directionalLights.value=k.state.directional,St.directionalLightShadows.value=k.state.directionalShadow,St.spotLights.value=k.state.spot,St.spotLightShadows.value=k.state.spotShadow,St.rectAreaLights.value=k.state.rectArea,St.ltc_1.value=k.state.rectAreaLTC1,St.ltc_2.value=k.state.rectAreaLTC2,St.pointLights.value=k.state.point,St.pointLightShadows.value=k.state.pointShadow,St.hemisphereLights.value=k.state.hemi,St.directionalShadowMatrix.value=k.state.directionalShadowMatrix,St.spotLightMatrix.value=k.state.spotLightMatrix,St.spotLightMap.value=k.state.spotLightMap,St.pointShadowMatrix.value=k.state.pointShadowMatrix),B.lightProbeGrid=M.state.lightProbeGridArray.length>0,B.currentProgram=Ft,B.uniformsList=null,Ft}function ap(x){if(x.uniformsList===null){let L=x.currentProgram.getUniforms();x.uniformsList=or.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function op(x,L){let G=z.get(x);G.outputColorSpace=L.outputColorSpace,G.batching=L.batching,G.batchingColor=L.batchingColor,G.instancing=L.instancing,G.instancingColor=L.instancingColor,G.instancingMorph=L.instancingMorph,G.skinning=L.skinning,G.morphTargets=L.morphTargets,G.morphNormals=L.morphNormals,G.morphColors=L.morphColors,G.morphTargetsCount=L.morphTargetsCount,G.numClippingPlanes=L.numClippingPlanes,G.numIntersection=L.numClipIntersection,G.vertexAlphas=L.vertexAlphas,G.vertexTangents=L.vertexTangents,G.toneMapping=L.toneMapping}function Yg(x,L){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;y.setFromMatrixPosition(L.matrixWorld);for(let G=0,B=x.length;G<B;G++){let k=x[G];if(k.texture!==null&&k.boundingBox.containsPoint(y))return k}return null}function $g(x,L,G,B,k){L.isScene!==!0&&(L=ke),W.resetTextureUnits();let pt=L.fog,vt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?L.environment:null,dt=j===null?N.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Gt.workingColorSpace,bt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Mt=nt.get(B.envMap||vt,bt),Nt=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ft=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),St=!!G.morphAttributes.position,ie=!!G.morphAttributes.normal,ye=!!G.morphAttributes.color,ve=Rn;B.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ve=N.toneMapping);let re=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,He=re!==void 0?re.length:0,gt=z.get(B),on=M.state.lights;if(jt===!0&&(Xt===!0||x!==ut)){let le=x===ut&&B.id===tt;Et.setState(B,x,le)}let qt=!1;B.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==on.state.version||gt.outputColorSpace!==dt||k.isBatchedMesh&&gt.batching===!1||!k.isBatchedMesh&&gt.batching===!0||k.isBatchedMesh&&gt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&gt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&gt.instancing===!1||!k.isInstancedMesh&&gt.instancing===!0||k.isSkinnedMesh&&gt.skinning===!1||!k.isSkinnedMesh&&gt.skinning===!0||k.isInstancedMesh&&gt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&gt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&gt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&gt.instancingMorph===!1&&k.morphTexture!==null||gt.envMap!==Mt||B.fog===!0&&gt.fog!==pt||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==Et.numPlanes||gt.numIntersection!==Et.numIntersection)||gt.vertexAlphas!==Nt||gt.vertexTangents!==Ft||gt.morphTargets!==St||gt.morphNormals!==ie||gt.morphColors!==ye||gt.toneMapping!==ve||gt.morphTargetsCount!==He||!!gt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(qt=!0):(qt=!0,gt.__version=B.version);let _n=gt.currentProgram;qt===!0&&(_n=ka(B,L,k),F&&B.isNodeMaterial&&F.onUpdateProgram(B,_n,gt));let Nn=!1,wi=!1,Ns=!1,ae=_n.getUniforms(),we=gt.uniforms;if(g.useProgram(_n.program)&&(Nn=!0,wi=!0,Ns=!0),B.id!==tt&&(tt=B.id,wi=!0),gt.needsLights){let le=Yg(M.state.lightProbeGridArray,k);gt.lightProbeGrid!==le&&(gt.lightProbeGrid=le,wi=!0)}if(Nn||ut!==x){g.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ae.setValue(D,"projectionMatrix",x.projectionMatrix),ae.setValue(D,"viewMatrix",x.matrixWorldInverse);let Si=ae.map.cameraPosition;Si!==void 0&&Si.setValue(D,Re.setFromMatrixPosition(x.matrixWorld)),w.logarithmicDepthBuffer&&ae.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ae.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),ut!==x&&(ut=x,wi=!0,Ns=!0)}if(gt.needsLights&&(on.state.directionalShadowMap.length>0&&ae.setValue(D,"directionalShadowMap",on.state.directionalShadowMap,W),on.state.spotShadowMap.length>0&&ae.setValue(D,"spotShadowMap",on.state.spotShadowMap,W),on.state.pointShadowMap.length>0&&ae.setValue(D,"pointShadowMap",on.state.pointShadowMap,W)),k.isSkinnedMesh){ae.setOptional(D,k,"bindMatrix"),ae.setOptional(D,k,"bindMatrixInverse");let le=k.skeleton;le&&(le.boneTexture===null&&le.computeBoneTexture(),ae.setValue(D,"boneTexture",le.boneTexture,W))}k.isBatchedMesh&&(ae.setOptional(D,k,"batchingTexture"),ae.setValue(D,"batchingTexture",k._matricesTexture,W),ae.setOptional(D,k,"batchingIdTexture"),ae.setValue(D,"batchingIdTexture",k._indirectTexture,W),ae.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&ae.setValue(D,"batchingColorTexture",k._colorsTexture,W));let Mi=G.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&R.update(k,G,_n),(wi||gt.receiveShadow!==k.receiveShadow)&&(gt.receiveShadow=k.receiveShadow,ae.setValue(D,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&L.environment!==null&&(we.envMapIntensity.value=L.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=My()),wi){if(ae.setValue(D,"toneMappingExposure",N.toneMappingExposure),gt.needsLights&&Kg(we,Ns),pt&&B.fog===!0&&wt.refreshFogUniforms(we,pt),wt.refreshMaterialUniforms(we,B,et,st,M.state.transmissionRenderTarget[x.id]),gt.needsLights&&gt.lightProbeGrid){let le=gt.lightProbeGrid;we.probesSH.value=le.texture,we.probesMin.value.copy(le.boundingBox.min),we.probesMax.value.copy(le.boundingBox.max),we.probesResolution.value.copy(le.resolution)}or.upload(D,ap(gt),we,W)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(or.upload(D,ap(gt),we,W),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ae.setValue(D,"center",k.center),ae.setValue(D,"modelViewMatrix",k.modelViewMatrix),ae.setValue(D,"normalMatrix",k.normalMatrix),ae.setValue(D,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){let le=B.uniformsGroups;for(let Si=0,Us=le.length;Si<Us;Si++){let lp=le[Si];Q.update(lp,_n),Q.bind(lp,_n)}}return _n}function Kg(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function Zg(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(x,L,G){let B=z.get(x);B.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),z.get(x.texture).__webglTexture=L,z.get(x.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:G,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,L){let G=z.get(x);G.__webglFramebuffer=L,G.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,G=0){j=x,q=L,H=G;let B=null,k=!1,pt=!1;if(x){let dt=z.get(x);if(dt.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(D.FRAMEBUFFER,dt.__webglFramebuffer),mt.copy(x.viewport),_t.copy(x.scissor),Zt=x.scissorTest,g.viewport(mt),g.scissor(_t),g.setScissorTest(Zt),tt=-1;return}else if(dt.__webglFramebuffer===void 0)W.setupRenderTarget(x);else if(dt.__hasExternalTextures)W.rebindTextures(x,z.get(x.texture).__webglTexture,z.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Nt=x.depthTexture;if(dt.__boundDepthTexture!==Nt){if(Nt!==null&&z.has(Nt)&&(x.width!==Nt.image.width||x.height!==Nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(x)}}let bt=x.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(pt=!0);let Mt=z.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Mt[L])?B=Mt[L][G]:B=Mt[L],k=!0):x.samples>0&&W.useMultisampledRTT(x)===!1?B=z.get(x).__webglMultisampledFramebuffer:Array.isArray(Mt)?B=Mt[G]:B=Mt,mt.copy(x.viewport),_t.copy(x.scissor),Zt=x.scissorTest}else mt.copy(Tt).multiplyScalar(et).floor(),_t.copy(be).multiplyScalar(et).floor(),Zt=zt;if(G!==0&&(B=Y),g.bindFramebuffer(D.FRAMEBUFFER,B)&&g.drawBuffers(x,B),g.viewport(mt),g.scissor(_t),g.setScissorTest(Zt),k){let dt=z.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,dt.__webglTexture,G)}else if(pt){let dt=L;for(let bt=0;bt<x.textures.length;bt++){let Mt=z.get(x.textures[bt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+bt,Mt.__webglTexture,G,dt)}}else if(x!==null&&G!==0){let dt=z.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,dt.__webglTexture,G)}tt=-1},this.readRenderTargetPixels=function(x,L,G,B,k,pt,vt,dt=0){if(!(x&&x.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=z.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&vt!==void 0&&(bt=bt[vt]),bt){g.bindFramebuffer(D.FRAMEBUFFER,bt);try{let Mt=x.textures[dt],Nt=Mt.format,Ft=Mt.type;if(x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+dt),!w.textureFormatReadable(Nt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(Ft)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-B&&G>=0&&G<=x.height-k&&D.readPixels(L,G,B,k,lt.convert(Nt),lt.convert(Ft),pt)}finally{let Mt=j!==null?z.get(j).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=function(x,L,G,B,k,pt,vt,dt=0){return Va(this,null,function*(){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=z.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&vt!==void 0&&(bt=bt[vt]),bt)if(L>=0&&L<=x.width-B&&G>=0&&G<=x.height-k){g.bindFramebuffer(D.FRAMEBUFFER,bt);let Mt=x.textures[dt],Nt=Mt.format,Ft=Mt.type;if(x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+dt),!w.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let St=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,St),D.bufferData(D.PIXEL_PACK_BUFFER,pt.byteLength,D.STREAM_READ),D.readPixels(L,G,B,k,lt.convert(Nt),lt.convert(Ft),0);let ie=j!==null?z.get(j).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,ie);let ye=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),yield _f(D,ye,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,St),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pt),D.deleteBuffer(St),D.deleteSync(ye),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(x,L=null,G=0){let B=Math.pow(2,-G),k=Math.floor(x.image.width*B),pt=Math.floor(x.image.height*B),vt=L!==null?L.x:0,dt=L!==null?L.y:0;W.setTexture2D(x,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,vt,dt,k,pt),g.unbindTexture()},this.copyTextureToTexture=function(x,L,G=null,B=null,k=0,pt=0){let vt,dt,bt,Mt,Nt,Ft,St,ie,ye,ve=x.isCompressedTexture?x.mipmaps[pt]:x.image;if(G!==null)vt=G.max.x-G.min.x,dt=G.max.y-G.min.y,bt=G.isBox3?G.max.z-G.min.z:1,Mt=G.min.x,Nt=G.min.y,Ft=G.isBox3?G.min.z:0;else{let we=Math.pow(2,-k);vt=Math.floor(ve.width*we),dt=Math.floor(ve.height*we),x.isDataArrayTexture?bt=ve.depth:x.isData3DTexture?bt=Math.floor(ve.depth*we):bt=1,Mt=0,Nt=0,Ft=0}B!==null?(St=B.x,ie=B.y,ye=B.z):(St=0,ie=0,ye=0);let re=lt.convert(L.format),He=lt.convert(L.type),gt;L.isData3DTexture?(W.setTexture3D(L,0),gt=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(W.setTexture2DArray(L,0),gt=D.TEXTURE_2D_ARRAY):(W.setTexture2D(L,0),gt=D.TEXTURE_2D),g.activeTexture(D.TEXTURE0),g.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),g.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),g.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);let on=g.getParameter(D.UNPACK_ROW_LENGTH),qt=g.getParameter(D.UNPACK_IMAGE_HEIGHT),_n=g.getParameter(D.UNPACK_SKIP_PIXELS),Nn=g.getParameter(D.UNPACK_SKIP_ROWS),wi=g.getParameter(D.UNPACK_SKIP_IMAGES);g.pixelStorei(D.UNPACK_ROW_LENGTH,ve.width),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ve.height),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Mt),g.pixelStorei(D.UNPACK_SKIP_ROWS,Nt),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Ft);let Ns=x.isDataArrayTexture||x.isData3DTexture,ae=L.isDataArrayTexture||L.isData3DTexture;if(x.isDepthTexture){let we=z.get(x),Mi=z.get(L),le=z.get(we.__renderTarget),Si=z.get(Mi.__renderTarget);g.bindFramebuffer(D.READ_FRAMEBUFFER,le.__webglFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let Us=0;Us<bt;Us++)Ns&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,z.get(x).__webglTexture,k,Ft+Us),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,z.get(L).__webglTexture,pt,ye+Us)),D.blitFramebuffer(Mt,Nt,vt,dt,St,ie,vt,dt,D.DEPTH_BUFFER_BIT,D.NEAREST);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||x.isRenderTargetTexture||z.has(x)){let we=z.get(x),Mi=z.get(L);g.bindFramebuffer(D.READ_FRAMEBUFFER,Z),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,V);for(let le=0;le<bt;le++)Ns?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,we.__webglTexture,k,Ft+le):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,we.__webglTexture,k),ae?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mi.__webglTexture,pt,ye+le):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Mi.__webglTexture,pt),k!==0?D.blitFramebuffer(Mt,Nt,vt,dt,St,ie,vt,dt,D.COLOR_BUFFER_BIT,D.NEAREST):ae?D.copyTexSubImage3D(gt,pt,St,ie,ye+le,Mt,Nt,vt,dt):D.copyTexSubImage2D(gt,pt,St,ie,Mt,Nt,vt,dt);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ae?x.isDataTexture||x.isData3DTexture?D.texSubImage3D(gt,pt,St,ie,ye,vt,dt,bt,re,He,ve.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(gt,pt,St,ie,ye,vt,dt,bt,re,ve.data):D.texSubImage3D(gt,pt,St,ie,ye,vt,dt,bt,re,He,ve):x.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,pt,St,ie,vt,dt,re,He,ve.data):x.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,pt,St,ie,ve.width,ve.height,re,ve.data):D.texSubImage2D(D.TEXTURE_2D,pt,St,ie,vt,dt,re,He,ve);g.pixelStorei(D.UNPACK_ROW_LENGTH,on),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,qt),g.pixelStorei(D.UNPACK_SKIP_PIXELS,_n),g.pixelStorei(D.UNPACK_SKIP_ROWS,Nn),g.pixelStorei(D.UNPACK_SKIP_IMAGES,wi),pt===0&&L.generateMipmaps&&D.generateMipmap(gt),g.unbindTexture()},this.initRenderTarget=function(x){z.get(x).__webglFramebuffer===void 0&&W.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?W.setTextureCube(x,0):x.isData3DTexture?W.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?W.setTexture2DArray(x,0):W.setTexture2D(x,0),g.unbindTexture()},this.resetState=function(){q=0,H=0,j=null,g.reset(),ft.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}};function ce(i){return i==null}function Td(i){return i!==null&&typeof i=="object"}function nu(i){return i!==null&&typeof i=="object"}function Sy(i,t){if(i.length!==t.length)return!1;for(let e=0;e<i.length;e++)if(i[e]!==t[e])return!1;return!0}function xs(i,t){return Array.from(new Set([...Object.keys(i),...Object.keys(t)])).reduce((n,s)=>{let r=i[s],a=t[s];return nu(r)&&nu(a)?Object.assign(Object.assign({},n),{[s]:xs(r,a)}):Object.assign(Object.assign({},n),{[s]:s in t?a:r})},{})}function Cd(i){return Td(i)?"target"in i:!1}var Ey={alreadydisposed:()=>"View has been already disposed",invalidparams:i=>`Invalid parameters for '${i.name}'`,nomatchingcontroller:i=>`No matching controller for '${i.key}'`,nomatchingview:i=>`No matching view for '${JSON.stringify(i.params)}'`,notbindable:()=>"Value is not bindable",notcompatible:i=>`Not compatible with  plugin '${i.id}'`,propertynotfound:i=>`Property '${i.name}' not found`,shouldneverhappen:()=>"This error should never happen"},Be=class i{static alreadyDisposed(){return new i({type:"alreadydisposed"})}static notBindable(){return new i({type:"notbindable"})}static notCompatible(t,e){return new i({type:"notcompatible",context:{id:`${t}.${e}`}})}static propertyNotFound(t){return new i({type:"propertynotfound",context:{name:t}})}static shouldNeverHappen(){return new i({type:"shouldneverhappen"})}constructor(t){var e;this.message=(e=Ey[t.type](t.context))!==null&&e!==void 0?e:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=t.type}toString(){return this.message}},Yl=class i{constructor(t,e){this.obj_=t,this.key=e}static isBindable(t){return!(t===null||typeof t!="object"&&typeof t!="function")}read(){return this.obj_[this.key]}write(t){this.obj_[this.key]=t}writeProperty(t,e){let n=this.read();if(!i.isBindable(n))throw Be.notBindable();if(!(t in n))throw Be.propertyNotFound(t);n[t]=e}},xe=class{constructor(){this.observers_={}}on(t,e,n){var s;let r=this.observers_[t];return r||(r=this.observers_[t]=[]),r.push({handler:e,key:(s=n==null?void 0:n.key)!==null&&s!==void 0?s:e}),this}off(t,e){let n=this.observers_[t];return n&&(this.observers_[t]=n.filter(s=>s.key!==e)),this}emit(t,e){let n=this.observers_[t];n&&n.forEach(s=>{s.handler(e)})}},iu=class{constructor(t,e){var n;this.constraint_=e==null?void 0:e.constraint,this.equals_=(n=e==null?void 0:e.equals)!==null&&n!==void 0?n:((s,r)=>s===r),this.emitter=new xe,this.rawValue_=t}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){let n=e!=null?e:{forceEmit:!1,last:!0},s=this.constraint_?this.constraint_.constrain(t):t,r=this.rawValue_;this.equals_(r,s)&&!n.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=s,this.emitter.emit("change",{options:n,previousRawValue:r,rawValue:s,sender:this}))}},su=class{constructor(t){this.emitter=new xe,this.value_=t}get rawValue(){return this.value_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){let n=e!=null?e:{forceEmit:!1,last:!0},s=this.value_;s===t&&!n.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=t,this.emitter.emit("change",{options:n,previousRawValue:s,rawValue:this.value_,sender:this}))}},ru=class{constructor(t){this.emitter=new xe,this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_)}get rawValue(){return this.value_.rawValue}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}};function de(i,t){let e=t==null?void 0:t.constraint,n=t==null?void 0:t.equals;return!e&&!n?new su(i):new iu(i,t)}function Ay(i){return[new ru(i),(t,e)=>{i.setRawValue(t,e)}]}var Bt=class i{constructor(t){this.emitter=new xe,this.valMap_=t;for(let e in this.valMap_)this.valMap_[e].emitter.on("change",()=>{this.emitter.emit("change",{key:e,sender:this})})}static createCore(t){return Object.keys(t).reduce((n,s)=>Object.assign(n,{[s]:de(t[s])}),{})}static fromObject(t){let e=this.createCore(t);return new i(e)}get(t){return this.valMap_[t].rawValue}set(t,e){this.valMap_[t].rawValue=e}value(t){return this.valMap_[t]}},bs=class{constructor(t){this.values=Bt.fromObject({max:t.max,min:t.min})}constrain(t){let e=this.values.get("max"),n=this.values.get("min");return Math.min(Math.max(t,n),e)}},au=class{constructor(t){this.values=Bt.fromObject({max:t.max,min:t.min})}constrain(t){let e=this.values.get("max"),n=this.values.get("min"),s=t;return ce(n)||(s=Math.max(s,n)),ce(e)||(s=Math.min(s,e)),s}},ou=class{constructor(t,e=0){this.step=t,this.origin=e}constrain(t){let e=this.origin%this.step,n=Math.round((t-e)/this.step);return e+n*this.step}},lu=class{constructor(t){this.text=t}evaluate(){return Number(this.text)}toString(){return this.text}},Ty={"**":(i,t)=>Math.pow(i,t),"*":(i,t)=>i*t,"/":(i,t)=>i/t,"%":(i,t)=>i%t,"+":(i,t)=>i+t,"-":(i,t)=>i-t,"<<":(i,t)=>i<<t,">>":(i,t)=>i>>t,">>>":(i,t)=>i>>>t,"&":(i,t)=>i&t,"^":(i,t)=>i^t,"|":(i,t)=>i|t},cu=class{constructor(t,e,n){this.left=e,this.operator=t,this.right=n}evaluate(){let t=Ty[this.operator];if(!t)throw new Error(`unexpected binary operator: '${this.operator}`);return t(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}},Cy={"+":i=>i,"-":i=>-i,"~":i=>~i},hu=class{constructor(t,e){this.operator=t,this.expression=e}evaluate(){let t=Cy[this.operator];if(!t)throw new Error(`unexpected unary operator: '${this.operator}`);return t(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}};function Pd(i){return(t,e)=>{for(let n=0;n<i.length;n++){let s=i[n](t,e);if(s!=="")return s}return""}}function fa(i,t){var e;let n=i.substr(t).match(/^\s+/);return(e=n&&n[0])!==null&&e!==void 0?e:""}function Py(i,t){let e=i.substr(t,1);return e.match(/^[1-9]$/)?e:""}function ma(i,t){var e;let n=i.substr(t).match(/^[0-9]+/);return(e=n&&n[0])!==null&&e!==void 0?e:""}function Ry(i,t){let e=ma(i,t);if(e!=="")return e;let n=i.substr(t,1);if(t+=1,n!=="-"&&n!=="+")return"";let s=ma(i,t);return s===""?"":n+s}function Rd(i,t){let e=i.substr(t,1);if(t+=1,e.toLowerCase()!=="e")return"";let n=Ry(i,t);return n===""?"":e+n}function wm(i,t){let e=i.substr(t,1);if(e==="0")return e;let n=Py(i,t);return t+=n.length,n===""?"":n+ma(i,t)}function Iy(i,t){let e=wm(i,t);if(t+=e.length,e==="")return"";let n=i.substr(t,1);if(t+=n.length,n!==".")return"";let s=ma(i,t);return t+=s.length,e+n+s+Rd(i,t)}function Dy(i,t){let e=i.substr(t,1);if(t+=e.length,e!==".")return"";let n=ma(i,t);return t+=n.length,n===""?"":e+n+Rd(i,t)}function Ly(i,t){let e=wm(i,t);return t+=e.length,e===""?"":e+Rd(i,t)}var Ny=Pd([Iy,Dy,Ly]);function Uy(i,t){var e;let n=i.substr(t).match(/^[01]+/);return(e=n&&n[0])!==null&&e!==void 0?e:""}function Oy(i,t){let e=i.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0b")return"";let n=Uy(i,t);return n===""?"":e+n}function Fy(i,t){var e;let n=i.substr(t).match(/^[0-7]+/);return(e=n&&n[0])!==null&&e!==void 0?e:""}function By(i,t){let e=i.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0o")return"";let n=Fy(i,t);return n===""?"":e+n}function ky(i,t){var e;let n=i.substr(t).match(/^[0-9a-f]+/i);return(e=n&&n[0])!==null&&e!==void 0?e:""}function Vy(i,t){let e=i.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0x")return"";let n=ky(i,t);return n===""?"":e+n}var zy=Pd([Oy,By,Vy]),Gy=Pd([zy,Ny]);function Hy(i,t){let e=Gy(i,t);return t+=e.length,e===""?null:{evaluable:new lu(e),cursor:t}}function Wy(i,t){let e=i.substr(t,1);if(t+=e.length,e!=="(")return null;let n=Sm(i,t);if(!n)return null;t=n.cursor,t+=fa(i,t).length;let s=i.substr(t,1);return t+=s.length,s!==")"?null:{evaluable:n.evaluable,cursor:t}}function Xy(i,t){var e;return(e=Hy(i,t))!==null&&e!==void 0?e:Wy(i,t)}function Mm(i,t){let e=Xy(i,t);if(e)return e;let n=i.substr(t,1);if(t+=n.length,n!=="+"&&n!=="-"&&n!=="~")return null;let s=Mm(i,t);return s?(t=s.cursor,{cursor:t,evaluable:new hu(n,s.evaluable)}):null}function qy(i,t,e){e+=fa(t,e).length;let n=i.filter(s=>t.startsWith(s,e))[0];return n?(e+=n.length,e+=fa(t,e).length,{cursor:e,operator:n}):null}function Yy(i,t){return(e,n)=>{let s=i(e,n);if(!s)return null;n=s.cursor;let r=s.evaluable;for(;;){let a=qy(t,e,n);if(!a)break;n=a.cursor;let o=i(e,n);if(!o)return null;n=o.cursor,r=new cu(a.operator,r,o.evaluable)}return r?{cursor:n,evaluable:r}:null}}var $y=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((i,t)=>Yy(i,t),Mm);function Sm(i,t){return t+=fa(i,t).length,$y(i,t)}function Ky(i){let t=Sm(i,0);return!t||t.cursor+fa(i,t.cursor).length!==i.length?null:t.evaluable}function di(i){var t;let e=Ky(i);return(t=e==null?void 0:e.evaluate())!==null&&t!==void 0?t:null}function Em(i){if(typeof i=="number")return i;if(typeof i=="string"){let t=di(i);if(!ce(t))return t}return 0}function Zy(i){return String(i)}function sn(i){return t=>t.toFixed(Math.max(Math.min(i,20),0))}function te(i,t,e,n,s){let r=(i-t)/(e-t);return n+r*(s-n)}function jf(i){return String(i.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function Le(i,t,e){return Math.min(Math.max(i,t),e)}function Am(i,t){return(i%t+t)%t}function Jy(i,t){return ce(i.step)?Math.max(jf(t),2):jf(i.step)}function Tm(i){var t;return(t=i.step)!==null&&t!==void 0?t:1}function Cm(i,t){var e;let n=Math.abs((e=i.step)!==null&&e!==void 0?e:t);return n===0?.1:Math.pow(10,Math.floor(Math.log10(n))-1)}function Pm(i,t){return ce(i.step)?null:new ou(i.step,t)}function Rm(i){return!ce(i.max)&&!ce(i.min)?new bs({max:i.max,min:i.min}):!ce(i.max)||!ce(i.min)?new au({max:i.max,min:i.min}):null}function Im(i,t){var e,n,s;return{formatter:(e=i.format)!==null&&e!==void 0?e:sn(Jy(i,t)),keyScale:(n=i.keyScale)!==null&&n!==void 0?n:Tm(i),pointerScale:(s=i.pointerScale)!==null&&s!==void 0?s:Cm(i,t)}}function Dm(i){return{format:i.optional.function,keyScale:i.optional.number,max:i.optional.number,min:i.optional.number,pointerScale:i.optional.number,step:i.optional.number}}function Id(i){return{constraint:i.constraint,textProps:Bt.fromObject(Im(i.params,i.initialValue))}}var pi=class{constructor(t){this.controller=t}get element(){return this.controller.view.element}get disabled(){return this.controller.viewProps.get("disabled")}set disabled(t){this.controller.viewProps.set("disabled",t)}get hidden(){return this.controller.viewProps.get("hidden")}set hidden(t){this.controller.viewProps.set("hidden",t)}dispose(){this.controller.viewProps.set("disposed",!0)}importState(t){return this.controller.importState(t)}exportState(){return this.controller.exportState()}},ur=class{constructor(t){this.target=t}},ys=class extends ur{constructor(t,e,n){super(t),this.value=e,this.last=n!=null?n:!0}},uu=class extends ur{constructor(t,e){super(t),this.expanded=e}},du=class extends ur{constructor(t,e){super(t),this.index=e}},pu=class extends ur{constructor(t,e){super(t),this.native=e}},ws=class extends pi{constructor(t){super(t),this.onValueChange_=this.onValueChange_.bind(this),this.emitter_=new xe,this.controller.value.emitter.on("change",this.onValueChange_)}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get key(){return this.controller.value.binding.target.key}get tag(){return this.controller.tag}set tag(t){this.controller.tag=t}on(t,e){let n=e.bind(this);return this.emitter_.on(t,s=>{n(s)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}refresh(){this.controller.value.fetch()}onValueChange_(t){let e=this.controller.value;this.emitter_.emit("change",new ys(this,e.binding.target.read(),t.options.last))}},fu=class{constructor(t,e){this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=e,this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.emitter=new xe}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,e){this.value_.setRawValue(t,e)}fetch(){this.value_.rawValue=this.binding.read()}push(){this.binding.write(this.value_.rawValue)}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.push(),this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}};function jy(i){if(!("binding"in i))return!1;let t=i.binding;return Cd(t)&&"read"in t&&"write"in t}function Qy(i,t){let n=Object.keys(t).reduce((s,r)=>{if(s===void 0)return;let a=t[r],o=a(i[r]);return o.succeeded?Object.assign(Object.assign({},s),{[r]:o.value}):void 0},{});return n}function tw(i,t){return i.reduce((e,n)=>{if(e===void 0)return;let s=t(n);if(!(!s.succeeded||s.value===void 0))return[...e,s.value]},[])}function ew(i){return i===null?!1:typeof i=="object"}function ci(i){return t=>e=>{if(!t&&e===void 0)return{succeeded:!1,value:void 0};if(t&&e===void 0)return{succeeded:!0,value:void 0};let n=i(e);return n!==void 0?{succeeded:!0,value:n}:{succeeded:!1,value:void 0}}}function Qf(i){return{custom:t=>ci(t)(i),boolean:ci(t=>typeof t=="boolean"?t:void 0)(i),number:ci(t=>typeof t=="number"?t:void 0)(i),string:ci(t=>typeof t=="string"?t:void 0)(i),function:ci(t=>typeof t=="function"?t:void 0)(i),constant:t=>ci(e=>e===t?t:void 0)(i),raw:ci(t=>t)(i),object:t=>ci(e=>{if(ew(e))return Qy(e,t)})(i),array:t=>ci(e=>{if(Array.isArray(e))return tw(e,t)})(i)}}var mu={optional:Qf(!0),required:Qf(!1)};function pe(i,t){let e=t(mu),n=mu.required.object(e)(i);return n.succeeded?n.value:void 0}function gn(i,t,e,n){if(t&&!t(i))return!1;let s=pe(i,e);return s?n(s):!1}function vn(i,t){var e;return xs((e=i==null?void 0:i())!==null&&e!==void 0?e:{},t)}function _s(i){return"value"in i}function Lm(i){if(!Td(i)||!("binding"in i))return!1;let t=i.binding;return Cd(t)}var qn="http://www.w3.org/2000/svg";function $l(i){i.offsetHeight}function nw(i,t){let e=i.style.transition;i.style.transition="none",t(),i.style.transition=e}function Dd(i){return i.ontouchstart!==void 0}function iw(){return globalThis}function sw(){return iw().document}function rw(i){let t=i.ownerDocument.defaultView;return t&&"document"in t?i.getContext("2d",{willReadFrequently:!0}):null}var aw={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function lc(i,t){let e=i.createElementNS(qn,"svg");return e.innerHTML=aw[t],e}function Nm(i,t,e){i.insertBefore(t,i.children[e])}function Ld(i){i.parentElement&&i.parentElement.removeChild(i)}function Um(i){for(;i.children.length>0;)i.removeChild(i.children[0])}function ow(i){for(;i.childNodes.length>0;)i.removeChild(i.childNodes[0])}function Om(i){return i.relatedTarget?i.relatedTarget:"explicitOriginalTarget"in i?i.explicitOriginalTarget:null}function ui(i,t){i.emitter.on("change",e=>{t(e.rawValue)}),t(i.rawValue)}function $n(i,t,e){ui(i.value(t),e)}var lw="tp";function Yt(i){return(e,n)=>[lw,"-",i,"v",e?`_${e}`:"",n?`-${n}`:""].join("")}var ha=Yt("lbl");function cw(i,t){let e=i.createDocumentFragment();return t.split(`
`).map(s=>i.createTextNode(s)).forEach((s,r)=>{r>0&&e.appendChild(i.createElement("br")),e.appendChild(s)}),e}var Kl=class{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(ha()),e.viewProps.bindClassModifiers(this.element);let n=t.createElement("div");n.classList.add(ha("l")),$n(e.props,"label",r=>{ce(r)?this.element.classList.add(ha(void 0,"nol")):(this.element.classList.remove(ha(void 0,"nol")),ow(n),n.appendChild(cw(t,r)))}),this.element.appendChild(n),this.labelElement=n;let s=t.createElement("div");s.classList.add(ha("v")),this.element.appendChild(s),this.valueElement=s}},Zl=class{constructor(t,e){this.props=e.props,this.valueController=e.valueController,this.viewProps=e.valueController.viewProps,this.view=new Kl(t,{props:e.props,viewProps:this.viewProps}),this.view.valueElement.appendChild(this.valueController.view.element)}importProps(t){return gn(t,null,e=>({label:e.optional.string}),e=>(this.props.set("label",e.label),!0))}exportProps(){return vn(null,{label:this.props.get("label")})}};function hw(){return["veryfirst","first","last","verylast"]}var tm=Yt(""),em={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"},dr=class{constructor(t){this.parent_=null,this.blade=t.blade,this.view=t.view,this.viewProps=t.viewProps;let e=this.view.element;this.blade.value("positions").emitter.on("change",()=>{hw().forEach(n=>{e.classList.remove(tm(void 0,em[n]))}),this.blade.get("positions").forEach(n=>{e.classList.add(tm(void 0,em[n]))})}),this.viewProps.handleDispose(()=>{Ld(e)})}get parent(){return this.parent_}set parent(t){this.parent_=t,this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}importState(t){return gn(t,null,e=>({disabled:e.required.boolean,hidden:e.required.boolean}),e=>(this.viewProps.importState(e),!0))}exportState(){return vn(null,Object.assign({},this.viewProps.exportState()))}},fi=class extends dr{constructor(t,e){if(e.value!==e.valueController.value)throw Be.shouldNeverHappen();let n=e.valueController.viewProps,s=new Zl(t,{blade:e.blade,props:e.props,valueController:e.valueController});super(Object.assign(Object.assign({},e),{view:new Kl(t,{props:e.props,viewProps:n}),viewProps:n})),this.labelController=s,this.value=e.value,this.valueController=e.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}importState(t){return gn(t,e=>{var n,s,r;return super.importState(e)&&this.labelController.importProps(e)&&((r=(s=(n=this.valueController).importProps)===null||s===void 0?void 0:s.call(n,t))!==null&&r!==void 0?r:!0)},e=>({value:e.optional.raw}),e=>(e.value&&(this.value.rawValue=e.value),!0))}exportState(){var t,e,n;return vn(()=>super.exportState(),Object.assign(Object.assign({value:this.value.rawValue},this.labelController.exportProps()),(n=(e=(t=this.valueController).exportProps)===null||e===void 0?void 0:e.call(t))!==null&&n!==void 0?n:{}))}};function nm(i){let t=Object.assign({},i);return delete t.value,t}var Jl=class extends fi{constructor(t,e){super(t,e),this.tag=e.tag}importState(t){return gn(t,e=>super.importState(nm(t)),e=>({tag:e.optional.string}),e=>(this.tag=e.tag,!0))}exportState(){return vn(()=>nm(super.exportState()),{binding:{key:this.value.binding.target.key,value:this.value.binding.target.read()},tag:this.tag})}};function uw(i){return _s(i)&&Lm(i.value)}var gu=class extends Jl{importState(t){return gn(t,e=>super.importState(e),e=>({binding:e.required.object({value:e.required.raw})}),e=>(this.value.binding.inject(e.binding.value),this.value.fetch(),!0))}};function dw(i){return _s(i)&&jy(i.value)}function Fm(i,t){for(;i.length<t;)i.push(void 0)}function pw(i){let t=[];return Fm(t,i),t}function fw(i){let t=i.indexOf(void 0);return t<0?i:i.slice(0,t)}function mw(i,t){let e=[...fw(i),t];return e.length>i.length?e.splice(0,e.length-i.length):Fm(e,i.length),e}var vu=class{constructor(t){this.emitter=new xe,this.onTick_=this.onTick_.bind(this),this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=t.binding,this.value_=de(pw(t.bufferSize)),this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.ticker=t.ticker,this.ticker.emitter.on("tick",this.onTick_),this.fetch()}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,e){this.value_.setRawValue(t,e)}fetch(){this.value_.rawValue=mw(this.value_.rawValue,this.binding.read())}onTick_(){this.fetch()}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}};function gw(i){if(!("binding"in i))return!1;let t=i.binding;return Cd(t)&&"read"in t&&!("write"in t)}var _u=class extends Jl{exportState(){return vn(()=>super.exportState(),{binding:{readonly:!0}})}};function vw(i){return _s(i)&&gw(i.value)}var xu=class extends pi{get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get title(){var t;return(t=this.controller.buttonController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.buttonController.props.set("title",t)}on(t,e){let n=e.bind(this);return this.controller.buttonController.emitter.on(t,r=>{n(new pu(this,r.nativeEvent))}),this}off(t,e){return this.controller.buttonController.emitter.off(t,e),this}};function _w(i,t,e){e?i.classList.add(t):i.classList.remove(t)}function mr(i,t){return e=>{_w(i,t,e)}}function Nd(i,t){ui(i,e=>{t.textContent=e!=null?e:""})}var $h=Yt("btn"),bu=class{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add($h()),e.viewProps.bindClassModifiers(this.element);let n=t.createElement("button");n.classList.add($h("b")),e.viewProps.bindDisabled(n),this.element.appendChild(n),this.buttonElement=n;let s=t.createElement("div");s.classList.add($h("t")),Nd(e.props.value("title"),s),this.buttonElement.appendChild(s)}},yu=class{constructor(t,e){this.emitter=new xe,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new bu(t,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}importProps(t){return gn(t,null,e=>({title:e.optional.string}),e=>(this.props.set("title",e.title),!0))}exportProps(){return vn(null,{title:this.props.get("title")})}onClick_(t){this.emitter.emit("click",{nativeEvent:t,sender:this})}},jl=class extends dr{constructor(t,e){let n=new yu(t,{props:e.buttonProps,viewProps:e.viewProps}),s=new Zl(t,{blade:e.blade,props:e.labelProps,valueController:n});super({blade:e.blade,view:s.view,viewProps:e.viewProps}),this.buttonController=n,this.labelController=s}importState(t){return gn(t,e=>super.importState(e)&&this.buttonController.importProps(e)&&this.labelController.importProps(e),()=>({}),()=>!0)}exportState(){return vn(()=>super.exportState(),Object.assign(Object.assign({},this.buttonController.exportProps()),this.labelController.exportProps()))}},Ql=class{constructor(t){let[e,n]=t.split("-"),s=e.split(".");this.major=parseInt(s[0],10),this.minor=parseInt(s[1],10),this.patch=parseInt(s[2],10),this.prerelease=n!=null?n:null}toString(){let t=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[t,this.prerelease].join("-"):t}},gr=new Ql("2.0.5");function Ze(i){return Object.assign({core:gr},i)}var xw=Ze({id:"button",type:"blade",accept(i){let t=pe(i,e=>({title:e.required.string,view:e.required.constant("button"),label:e.optional.string}));return t?{params:t}:null},controller(i){return new jl(i.document,{blade:i.blade,buttonProps:Bt.fromObject({title:i.params.title}),labelProps:Bt.fromObject({label:i.params.label}),viewProps:i.viewProps})},api(i){return i.controller instanceof jl?new xu(i.controller):null}});function bw(i,t){return i.addBlade(Object.assign(Object.assign({},t),{view:"button"}))}function yw(i,t){return i.addBlade(Object.assign(Object.assign({},t),{view:"folder"}))}function ww(i,t){return i.addBlade(Object.assign(Object.assign({},t),{view:"tab"}))}function Mw(i){return Td(i)?"refresh"in i&&typeof i.refresh=="function":!1}function Sw(i,t){if(!Yl.isBindable(i))throw Be.notBindable();return new Yl(i,t)}var wu=class{constructor(t,e){this.onRackValueChange_=this.onRackValueChange_.bind(this),this.controller_=t,this.emitter_=new xe,this.pool_=e,this.controller_.rack.emitter.on("valuechange",this.onRackValueChange_)}get children(){return this.controller_.rack.children.map(t=>this.pool_.createApi(t))}addBinding(t,e,n){let s=n!=null?n:{},r=this.controller_.element.ownerDocument,a=this.pool_.createBinding(r,Sw(t,e),s),o=this.pool_.createBindingApi(a);return this.add(o,s.index)}addFolder(t){return yw(this,t)}addButton(t){return bw(this,t)}addTab(t){return ww(this,t)}add(t,e){let n=t.controller;return this.controller_.rack.add(n,e),t}remove(t){this.controller_.rack.remove(t.controller)}addBlade(t){let e=this.controller_.element.ownerDocument,n=this.pool_.createBlade(e,t),s=this.pool_.createApi(n);return this.add(s,t.index)}on(t,e){let n=e.bind(this);return this.emitter_.on(t,s=>{n(s)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}refresh(){this.children.forEach(t=>{Mw(t)&&t.refresh()})}onRackValueChange_(t){let e=t.bladeController,n=this.pool_.createApi(e),s=Lm(e.value)?e.value.binding:null;this.emitter_.emit("change",new ys(n,s?s.target.read():e.value.rawValue,t.options.last))}},ga=class extends pi{constructor(t,e){super(t),this.rackApi_=new wu(t.rackController,e)}refresh(){this.rackApi_.refresh()}},va=class extends dr{constructor(t){super({blade:t.blade,view:t.view,viewProps:t.rackController.viewProps}),this.rackController=t.rackController}importState(t){return gn(t,e=>super.importState(e),e=>({children:e.required.array(e.required.raw)}),e=>this.rackController.rack.children.every((n,s)=>n.importState(e.children[s])))}exportState(){return vn(()=>super.exportState(),{children:this.rackController.rack.children.map(t=>t.exportState())})}};function Mu(i){return"rackController"in i}var Su=class{constructor(t){this.emitter=new xe,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=t}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(t){for(let e of this.allItems())if(t(e))return e;return null}includes(t){return this.cache_.has(t)}add(t,e){if(this.includes(t))throw Be.shouldNeverHappen();let n=e!==void 0?e:this.items_.length;this.items_.splice(n,0,t),this.cache_.add(t);let s=this.extract_(t);s&&(s.emitter.on("add",this.onSubListAdd_),s.emitter.on("remove",this.onSubListRemove_),s.allItems().forEach(r=>{this.cache_.add(r)})),this.emitter.emit("add",{index:n,item:t,root:this,target:this})}remove(t){let e=this.items_.indexOf(t);if(e<0)return;this.items_.splice(e,1),this.cache_.delete(t);let n=this.extract_(t);n&&(n.allItems().forEach(s=>{this.cache_.delete(s)}),n.emitter.off("add",this.onSubListAdd_),n.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:e,item:t,root:this,target:this})}onSubListAdd_(t){this.cache_.add(t.item),this.emitter.emit("add",{index:t.index,item:t.item,root:this,target:t.target})}onSubListRemove_(t){this.cache_.delete(t.item),this.emitter.emit("remove",{index:t.index,item:t.item,root:this,target:t.target})}};function Ew(i,t){for(let e=0;e<i.length;e++){let n=i[e];if(_s(n)&&n.value===t)return n}return null}function Aw(i){return Mu(i)?i.rackController.rack.bcSet_:null}var Eu=class{constructor(t){var e,n;this.emitter=new xe,this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onRackLayout_=this.onRackLayout_.bind(this),this.onRackValueChange_=this.onRackValueChange_.bind(this),this.blade_=(e=t.blade)!==null&&e!==void 0?e:null,(n=this.blade_)===null||n===void 0||n.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=t.viewProps,this.bcSet_=new Su(Aw),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(t,e){var n;(n=t.parent)===null||n===void 0||n.remove(t),t.parent=this,this.bcSet_.add(t,e)}remove(t){t.parent=null,this.bcSet_.remove(t)}find(t){return this.bcSet_.allItems().filter(t)}onSetAdd_(t){this.updatePositions_();let e=t.target===t.root;if(this.emitter.emit("add",{bladeController:t.item,index:t.index,root:e,sender:this}),!e)return;let n=t.item;if(n.viewProps.emitter.on("change",this.onChildViewPropsChange_),n.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),n.viewProps.handleDispose(this.onChildDispose_),_s(n))n.value.emitter.on("change",this.onChildValueChange_);else if(Mu(n)){let s=n.rackController.rack;if(s){let r=s.emitter;r.on("layout",this.onRackLayout_),r.on("valuechange",this.onRackValueChange_)}}}onSetRemove_(t){this.updatePositions_();let e=t.target===t.root;if(this.emitter.emit("remove",{bladeController:t.item,root:e,sender:this}),!e)return;let n=t.item;if(_s(n))n.value.emitter.off("change",this.onChildValueChange_);else if(Mu(n)){let s=n.rackController.rack;if(s){let r=s.emitter;r.off("layout",this.onRackLayout_),r.off("valuechange",this.onRackValueChange_)}}}updatePositions_(){let t=this.bcSet_.items.filter(s=>!s.viewProps.get("hidden")),e=t[0],n=t[t.length-1];this.bcSet_.items.forEach(s=>{let r=[];s===e&&(r.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&r.push("veryfirst")),s===n&&(r.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&r.push("verylast")),s.blade.set("positions",r)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(e=>e.viewProps.get("disposed")).forEach(e=>{this.bcSet_.remove(e)})}onChildValueChange_(t){let e=Ew(this.find(_s),t.sender);if(!e)throw Be.alreadyDisposed();this.emitter.emit("valuechange",{bladeController:e,options:t.options,sender:this})}onRackLayout_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onRackValueChange_(t){this.emitter.emit("valuechange",{bladeController:t.bladeController,options:t.options,sender:this})}onBladePositionsChange_(){this.updatePositions_()}},_a=class{constructor(t){this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.element=t.element,this.viewProps=t.viewProps;let e=new Eu({blade:t.root?void 0:t.blade,viewProps:t.viewProps});e.emitter.on("add",this.onRackAdd_),e.emitter.on("remove",this.onRackRemove_),this.rack=e,this.viewProps.handleDispose(()=>{for(let n=this.rack.children.length-1;n>=0;n--)this.rack.children[n].viewProps.set("disposed",!0)})}onRackAdd_(t){t.root&&Nm(this.element,t.bladeController.view.element,t.index)}onRackRemove_(t){t.root&&Ld(t.bladeController.view.element)}};function vr(){return new Bt({positions:de([],{equals:Sy})})}var xa=class i extends Bt{constructor(t){super(t)}static create(t){let e={completed:!0,expanded:t,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},n=Bt.createCore(e);return new i(n)}get styleExpanded(){var t;return(t=this.get("temporaryExpanded"))!==null&&t!==void 0?t:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";let t=this.get("expandedHeight");return this.get("shouldFixHeight")&&!ce(t)?`${t}px`:"auto"}bindExpandedClass(t,e){let n=()=>{this.styleExpanded?t.classList.add(e):t.classList.remove(e)};$n(this,"expanded",n),$n(this,"temporaryExpanded",n)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}};function Tw(i,t){let e=0;return nw(t,()=>{i.set("expandedHeight",null),i.set("temporaryExpanded",!0),$l(t),e=t.clientHeight,i.set("temporaryExpanded",null),$l(t)}),e}function im(i,t){t.style.height=i.styleHeight}function Ud(i,t){i.value("expanded").emitter.on("beforechange",()=>{if(i.set("completed",!1),ce(i.get("expandedHeight"))){let e=Tw(i,t);e>0&&i.set("expandedHeight",e)}i.set("shouldFixHeight",!0),$l(t)}),i.emitter.on("change",()=>{im(i,t)}),im(i,t),t.addEventListener("transitionend",e=>{e.propertyName==="height"&&i.cleanUpTransition()})}var tc=class extends ga{constructor(t,e){super(t,e),this.emitter_=new xe,this.controller.foldable.value("expanded").emitter.on("change",n=>{this.emitter_.emit("fold",new uu(this,n.sender.rawValue))}),this.rackApi_.on("change",n=>{this.emitter_.emit("change",n)})}get expanded(){return this.controller.foldable.get("expanded")}set expanded(t){this.controller.foldable.set("expanded",t)}get title(){return this.controller.props.get("title")}set title(t){this.controller.props.set("title",t)}get children(){return this.rackApi_.children}addBinding(t,e,n){return this.rackApi_.addBinding(t,e,n)}addFolder(t){return this.rackApi_.addFolder(t)}addButton(t){return this.rackApi_.addButton(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){return this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBlade(t){return this.rackApi_.addBlade(t)}on(t,e){let n=e.bind(this);return this.emitter_.on(t,s=>{n(s)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}},Bm=Yt("cnt"),Au=class{constructor(t,e){var n;this.className_=Yt((n=e.viewName)!==null&&n!==void 0?n:"fld"),this.element=t.createElement("div"),this.element.classList.add(this.className_(),Bm()),e.viewProps.bindClassModifiers(this.element),this.foldable_=e.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),$n(this.foldable_,"completed",mr(this.element,this.className_(void 0,"cpl")));let s=t.createElement("button");s.classList.add(this.className_("b")),$n(e.props,"title",c=>{ce(c)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),e.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;let r=t.createElement("div");r.classList.add(this.className_("i")),this.element.appendChild(r);let a=t.createElement("div");a.classList.add(this.className_("t")),Nd(e.props.value("title"),a),this.buttonElement.appendChild(a),this.titleElement=a;let o=t.createElement("div");o.classList.add(this.className_("m")),this.buttonElement.appendChild(o);let l=t.createElement("div");l.classList.add(this.className_("c")),this.element.appendChild(l),this.containerElement=l}},ba=class extends va{constructor(t,e){var n;let s=xa.create((n=e.expanded)!==null&&n!==void 0?n:!0),r=new Au(t,{foldable:s,props:e.props,viewName:e.root?"rot":void 0,viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:new _a({blade:e.blade,element:r.containerElement,root:e.root,viewProps:e.viewProps}),view:r})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=e.props,this.foldable=s,Ud(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}importState(t){return gn(t,e=>super.importState(e),e=>({expanded:e.required.boolean,title:e.optional.string}),e=>(this.foldable.set("expanded",e.expanded),this.props.set("title",e.title),!0))}exportState(){return vn(()=>super.exportState(),{expanded:this.foldable.get("expanded"),title:this.props.get("title")})}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}},Cw=Ze({id:"folder",type:"blade",accept(i){let t=pe(i,e=>({title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean}));return t?{params:t}:null},controller(i){return new ba(i.document,{blade:i.blade,expanded:i.params.expanded,props:Bt.fromObject({title:i.params.title}),viewProps:i.viewProps})},api(i){return i.controller instanceof ba?new tc(i.controller,i.pool):null}}),Pw=Yt("");function sm(i,t){return mr(i,Pw(void 0,t))}var mi=class i extends Bt{constructor(t){var e;super(t),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=Ay(de(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(t){var e,n,s;let r=t!=null?t:{};return new i(Bt.createCore({disabled:(e=r.disabled)!==null&&e!==void 0?e:!1,disposed:!1,hidden:(n=r.hidden)!==null&&n!==void 0?n:!1,parent:(s=r.parent)!==null&&s!==void 0?s:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(t){ui(this.globalDisabled_,sm(t,"disabled")),$n(this,"hidden",sm(t,"hidden"))}bindDisabled(t){ui(this.globalDisabled_,e=>{t.disabled=e})}bindTabIndex(t){ui(this.globalDisabled_,e=>{t.tabIndex=e?-1:0})}handleDispose(t){this.value("disposed").emitter.on("change",e=>{e&&t()})}importState(t){this.set("disabled",t.disabled),this.set("hidden",t.hidden)}exportState(){return{disabled:this.get("disabled"),hidden:this.get("hidden")}}getGlobalDisabled_(){let t=this.get("parent");return(t?t.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(t){var e;let n=t.previousRawValue;n==null||n.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}},rm=Yt("tbp"),Tu=class{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(rm()),e.viewProps.bindClassModifiers(this.element);let n=t.createElement("div");n.classList.add(rm("c")),this.element.appendChild(n),this.containerElement=n}},ua=Yt("tbi"),Cu=class{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(ua()),e.viewProps.bindClassModifiers(this.element),$n(e.props,"selected",r=>{r?this.element.classList.add(ua(void 0,"sel")):this.element.classList.remove(ua(void 0,"sel"))});let n=t.createElement("button");n.classList.add(ua("b")),e.viewProps.bindDisabled(n),this.element.appendChild(n),this.buttonElement=n;let s=t.createElement("div");s.classList.add(ua("t")),Nd(e.props.value("title"),s),this.buttonElement.appendChild(s),this.titleElement=s}},Pu=class{constructor(t,e){this.emitter=new xe,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new Cu(t,{props:e.props,viewProps:e.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}},ya=class extends va{constructor(t,e){let n=new Tu(t,{viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:new _a({blade:e.blade,element:n.containerElement,viewProps:e.viewProps}),view:n})),this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Pu(t,{props:e.itemProps,viewProps:mi.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.props=e.props,$n(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}importState(t){return gn(t,e=>super.importState(e),e=>({selected:e.required.boolean,title:e.required.string}),e=>(this.ic_.props.set("selected",e.selected),this.ic_.props.set("title",e.title),!0))}exportState(){return vn(()=>super.exportState(),{selected:this.ic_.props.get("selected"),title:this.ic_.props.get("title")})}onItemClick_(){this.props.set("selected",!0)}},Ru=class extends ga{constructor(t,e){super(t,e),this.emitter_=new xe,this.onSelect_=this.onSelect_.bind(this),this.pool_=e,this.rackApi_.on("change",n=>{this.emitter_.emit("change",n)}),this.controller.tab.selectedIndex.emitter.on("change",this.onSelect_)}get pages(){return this.rackApi_.children}addPage(t){let e=this.controller.view.element.ownerDocument,n=new ya(e,{blade:vr(),itemProps:Bt.fromObject({selected:!1,title:t.title}),props:Bt.fromObject({selected:!1}),viewProps:mi.create()}),s=this.pool_.createApi(n);return this.rackApi_.add(s,t.index)}removePage(t){this.rackApi_.remove(this.rackApi_.children[t])}on(t,e){let n=e.bind(this);return this.emitter_.on(t,s=>{n(s)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}onSelect_(t){this.emitter_.emit("select",new du(this,t.rawValue))}},Iu=class extends ga{get title(){var t;return(t=this.controller.itemController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.itemController.props.set("title",t)}get selected(){return this.controller.props.get("selected")}set selected(t){this.controller.props.set("selected",t)}get children(){return this.rackApi_.children}addButton(t){return this.rackApi_.addButton(t)}addFolder(t){return this.rackApi_.addFolder(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBinding(t,e,n){return this.rackApi_.addBinding(t,e,n)}addBlade(t){return this.rackApi_.addBlade(t)}},am=-1,Du=class{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=de(!0),this.selectedIndex=de(am),this.items_=[]}add(t,e){let n=e!=null?e:this.items_.length;this.items_.splice(n,0,t),t.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(t){let e=this.items_.indexOf(t);e<0||(this.items_.splice(e,1),t.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=am,this.empty.rawValue=!0;return}let t=this.items_.findIndex(e=>e.rawValue);t<0?(this.items_.forEach((e,n)=>{e.rawValue=n===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((e,n)=>{e.rawValue=n===t}),this.selectedIndex.rawValue=t),this.empty.rawValue=!1}onItemSelectedChange_(t){if(t.rawValue){let e=this.items_.findIndex(n=>n===t.sender);this.items_.forEach((n,s)=>{n.rawValue=s===e}),this.selectedIndex.rawValue=e}else this.keepSelection_()}},da=Yt("tab"),Lu=class{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(da(),Bm()),e.viewProps.bindClassModifiers(this.element),ui(e.empty,mr(this.element,da(void 0,"nop")));let n=t.createElement("div");n.classList.add(da("t")),this.element.appendChild(n),this.itemsElement=n;let s=t.createElement("div");s.classList.add(da("i")),this.element.appendChild(s);let r=t.createElement("div");r.classList.add(da("c")),this.element.appendChild(r),this.contentsElement=r}},ec=class extends va{constructor(t,e){let n=new Du,s=new Lu(t,{empty:n.empty,viewProps:e.viewProps});super({blade:e.blade,rackController:new _a({blade:e.blade,element:s.contentsElement,viewProps:e.viewProps}),view:s}),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);let r=this.rackController.rack;r.emitter.on("add",this.onRackAdd_),r.emitter.on("remove",this.onRackRemove_),this.tab=n}add(t,e){this.rackController.rack.add(t,e)}remove(t){this.rackController.rack.remove(this.rackController.rack.children[t])}onRackAdd_(t){if(!t.root)return;let e=t.bladeController;Nm(this.view.itemsElement,e.itemController.view.element,t.index),e.itemController.viewProps.set("parent",this.viewProps),this.tab.add(e.props.value("selected"))}onRackRemove_(t){if(!t.root)return;let e=t.bladeController;Ld(e.itemController.view.element),e.itemController.viewProps.set("parent",null),this.tab.remove(e.props.value("selected"))}},km=Ze({id:"tab",type:"blade",accept(i){let t=pe(i,e=>({pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")}));return!t||t.pages.length===0?null:{params:t}},controller(i){let t=new ec(i.document,{blade:i.blade,viewProps:i.viewProps});return i.params.pages.forEach(e=>{let n=new ya(i.document,{blade:vr(),itemProps:Bt.fromObject({selected:!1,title:e.title}),props:Bt.fromObject({selected:!1}),viewProps:mi.create()});t.add(n)}),t},api(i){return i.controller instanceof ec?new Ru(i.controller,i.pool):i.controller instanceof ya?new Iu(i.controller,i.pool):null}});function Rw(i,t){let e=i.accept(t.params);if(!e)return null;let n=pe(t.params,s=>({disabled:s.optional.boolean,hidden:s.optional.boolean}));return i.controller({blade:vr(),document:t.document,params:Object.assign(Object.assign({},e.params),{disabled:n==null?void 0:n.disabled,hidden:n==null?void 0:n.hidden}),viewProps:mi.create({disabled:n==null?void 0:n.disabled,hidden:n==null?void 0:n.hidden})})}var wa=class extends ws{get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}},Nu=class{constructor(){this.disabled=!1,this.emitter=new xe}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}},Uu=class{constructor(t,e){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=t,this.emitter=new xe,this.interval_=e,this.setTimer_()}get disabled(){return this.disabled_}set disabled(t){this.disabled_=t,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;let t=this.doc_.defaultView;t&&t.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;let t=this.doc_.defaultView;t&&(this.timerId_=t.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}},Ms=class{constructor(t){this.constraints=t}constrain(t){return this.constraints.reduce((e,n)=>n.constrain(e),t)}};function nc(i,t){if(i instanceof t)return i;if(i instanceof Ms){let e=i.constraints.reduce((n,s)=>n||(s instanceof t?s:null),null);if(e)return e}return null}var Ss=class{constructor(t){this.values=Bt.fromObject({options:t})}constrain(t){let e=this.values.get("options");return e.length===0||e.filter(s=>s.value===t).length>0?t:e[0].value}};function Ia(i){var t;let e=mu;if(Array.isArray(i))return(t=pe({items:i},n=>({items:n.required.array(n.required.object({text:n.required.string,value:n.required.raw}))})))===null||t===void 0?void 0:t.items;if(typeof i=="object")return e.required.raw(i).value}function Od(i){if(Array.isArray(i))return i;let t=[];return Object.keys(i).forEach(e=>{t.push({text:e,value:i[e]})}),t}function Fd(i){return ce(i)?null:new Ss(Od(i))}var Kh=Yt("lst"),Ou=class{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.element=t.createElement("div"),this.element.classList.add(Kh()),e.viewProps.bindClassModifiers(this.element);let n=t.createElement("select");n.classList.add(Kh("s")),e.viewProps.bindDisabled(n),this.element.appendChild(n),this.selectElement=n;let s=t.createElement("div");s.classList.add(Kh("m")),s.appendChild(lc(t,"dropdown")),this.element.appendChild(s),e.value.emitter.on("change",this.onValueChange_),this.value_=e.value,$n(this.props_,"options",r=>{Um(this.selectElement),r.forEach(a=>{let o=t.createElement("option");o.textContent=a.text,this.selectElement.appendChild(o)}),this.update_()})}update_(){let t=this.props_.get("options").map(e=>e.value);this.selectElement.selectedIndex=t.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}},Kn=class{constructor(t,e){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new Ou(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(t){let e=t.currentTarget;this.value.rawValue=this.props.get("options")[e.selectedIndex].value}importProps(t){return gn(t,null,e=>({options:e.required.custom(Ia)}),e=>(this.props.set("options",Od(e.options)),!0))}exportProps(){return vn(null,{options:this.props.get("options")})}},om=Yt("pop"),Fu=class{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(om()),e.viewProps.bindClassModifiers(this.element),ui(e.shows,mr(this.element,om(void 0,"v")))}},ic=class{constructor(t,e){this.shows=de(!1),this.viewProps=e.viewProps,this.view=new Fu(t,{shows:this.shows,viewProps:this.viewProps})}},lm=Yt("txt"),Bu=class{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(lm()),e.viewProps.bindClassModifiers(this.element),this.props_=e.props,this.props_.emitter.on("change",this.onChange_);let n=t.createElement("input");n.classList.add(lm("i")),n.type="text",e.viewProps.bindDisabled(n),this.element.appendChild(n),this.inputElement=n,e.value.emitter.on("change",this.onChange_),this.value_=e.value,this.refresh()}refresh(){let t=this.props_.get("formatter");this.inputElement.value=t(this.value_.rawValue)}onChange_(){this.refresh()}},Es=class{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=e.parser,this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new Bu(t,{props:e.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(t){let n=t.currentTarget.value,s=this.parser_(n);ce(s)||(this.value.rawValue=s),this.view.refresh()}};function Iw(i){return String(i)}function Vm(i){return i==="false"?!1:!!i}function cm(i){return Iw(i)}function Dw(i){return t=>i.reduce((e,n)=>e!==null?e:n(t),null)}var Lw=sn(0);function sc(i){return Lw(i)+"%"}function zm(i){return String(i)}function ku(i){return i}function _r({primary:i,secondary:t,forward:e,backward:n}){let s=!1;function r(a){s||(s=!0,a(),s=!1)}i.emitter.on("change",a=>{r(()=>{t.setRawValue(e(i.rawValue,t.rawValue),a.options)})}),t.emitter.on("change",a=>{r(()=>{i.setRawValue(n(i.rawValue,t.rawValue),a.options)}),r(()=>{t.setRawValue(e(i.rawValue,t.rawValue),a.options)})}),r(()=>{t.setRawValue(e(i.rawValue,t.rawValue),{forceEmit:!1,last:!0})})}function nn(i,t){let e=i*(t.altKey?.1:1)*(t.shiftKey?10:1);return t.upKey?+e:t.downKey?-e:0}function Ma(i){return{altKey:i.altKey,downKey:i.key==="ArrowDown",shiftKey:i.shiftKey,upKey:i.key==="ArrowUp"}}function gi(i){return{altKey:i.altKey,downKey:i.key==="ArrowLeft",shiftKey:i.shiftKey,upKey:i.key==="ArrowRight"}}function Nw(i){return i==="ArrowUp"||i==="ArrowDown"}function Gm(i){return Nw(i)||i==="ArrowLeft"||i==="ArrowRight"}function Zh(i,t){var e,n;let s=t.ownerDocument.defaultView,r=t.getBoundingClientRect();return{x:i.pageX-(((e=s&&s.scrollX)!==null&&e!==void 0?e:0)+r.left),y:i.pageY-(((n=s&&s.scrollY)!==null&&n!==void 0?n:0)+r.top)}}var vi=class{constructor(t){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=t,this.emitter=new xe,t.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),t.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd_),t.addEventListener("mousedown",this.onMouseDown_)}computePosition_(t){let e=this.elem_.getBoundingClientRect();return{bounds:{width:e.width,height:e.height},point:t?{x:t.x,y:t.y}:null}}onMouseDown_(t){var e;t.preventDefault(),(e=t.currentTarget)===null||e===void 0||e.focus();let n=this.elem_.ownerDocument;n.addEventListener("mousemove",this.onDocumentMouseMove_),n.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(Zh(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseMove_(t){this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(Zh(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseUp_(t){let e=this.elem_.ownerDocument;e.removeEventListener("mousemove",this.onDocumentMouseMove_),e.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(Zh(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onTouchStart_(t){t.preventDefault();let e=t.targetTouches.item(0),n=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-n.left,y:e.clientY-n.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchMove_(t){let e=t.targetTouches.item(0),n=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-n.left,y:e.clientY-n.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchEnd_(t){var e;let n=(e=t.targetTouches.item(0))!==null&&e!==void 0?e:this.lastTouch_,s=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(n?{x:n.clientX-s.left,y:n.clientY-s.top}:void 0),sender:this,shiftKey:t.shiftKey})}},Mn=Yt("txt"),Vu=class{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(Mn(),Mn(void 0,"num")),e.arrayPosition&&this.element.classList.add(Mn(void 0,e.arrayPosition)),e.viewProps.bindClassModifiers(this.element);let n=t.createElement("input");n.classList.add(Mn("i")),n.type="text",e.viewProps.bindDisabled(n),this.element.appendChild(n),this.inputElement=n,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=e.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Mn()),this.inputElement.classList.add(Mn("i"));let s=t.createElement("div");s.classList.add(Mn("k")),this.element.appendChild(s),this.knobElement=s;let r=t.createElementNS(qn,"svg");r.classList.add(Mn("g")),this.knobElement.appendChild(r);let a=t.createElementNS(qn,"path");a.classList.add(Mn("gb")),r.appendChild(a),this.guideBodyElem_=a;let o=t.createElementNS(qn,"path");o.classList.add(Mn("gh")),r.appendChild(o),this.guideHeadElem_=o;let l=t.createElement("div");l.classList.add(Yt("tt")()),this.knobElement.appendChild(l),this.tooltipElem_=l,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.refresh()}onDraggingChange_(t){if(t.rawValue===null){this.element.classList.remove(Mn(void 0,"drg"));return}this.element.classList.add(Mn(void 0,"drg"));let e=t.rawValue/this.props_.get("pointerScale"),n=e+(e>0?-1:e<0?1:0),s=Le(-n,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${n+s},0 L${n},4 L${n+s},8`,`M ${e},-1 L${e},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${e},4`);let r=this.props_.get("formatter");this.tooltipElem_.textContent=r(this.value.rawValue),this.tooltipElem_.style.left=`${e}px`}refresh(){let t=this.props_.get("formatter");this.inputElement.value=t(this.value.rawValue)}onChange_(){this.refresh()}},As=class{constructor(t,e){var n;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.parser_=e.parser,this.props=e.props,this.sliderProps_=(n=e.sliderProps)!==null&&n!==void 0?n:null,this.value=e.value,this.viewProps=e.viewProps,this.dragging_=de(null),this.view=new Vu(t,{arrayPosition:e.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);let s=new vi(this.view.knobElement);s.emitter.on("down",this.onPointerDown_),s.emitter.on("move",this.onPointerMove_),s.emitter.on("up",this.onPointerUp_)}constrainValue_(t){var e,n;let s=(e=this.sliderProps_)===null||e===void 0?void 0:e.get("min"),r=(n=this.sliderProps_)===null||n===void 0?void 0:n.get("max"),a=t;return s!==void 0&&(a=Math.max(a,s)),r!==void 0&&(a=Math.min(a,r)),a}onInputChange_(t){let n=t.currentTarget.value,s=this.parser_(n);ce(s)||(this.value.rawValue=this.constrainValue_(s)),this.view.refresh()}onInputKeyDown_(t){let e=nn(this.props.get("keyScale"),Ma(t));e!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+e),{forceEmit:!1,last:!1})}onInputKeyUp_(t){nn(this.props.get("keyScale"),Ma(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(t){if(!t.point)return null;let e=t.point.x-t.bounds.width/2;return this.constrainValue_(this.originRawValue_+e*this.props.get("pointerScale"))}onPointerMove_(t){let e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(t){let e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}},Jh=Yt("sld"),zu=class{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(Jh()),e.viewProps.bindClassModifiers(this.element);let n=t.createElement("div");n.classList.add(Jh("t")),e.viewProps.bindTabIndex(n),this.element.appendChild(n),this.trackElement=n;let s=t.createElement("div");s.classList.add(Jh("k")),this.trackElement.appendChild(s),this.knobElement=s,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.update_()}update_(){let t=Le(te(this.value.rawValue,this.props_.get("min"),this.props_.get("max"),0,100),0,100);this.knobElement.style.width=`${t}%`}onChange_(){this.update_()}},Gu=class{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.props=e.props,this.view=new zu(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new vi(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){t.point&&this.value.setRawValue(te(Le(t.point.x,0,t.bounds.width),0,t.bounds.width,this.props.get("min"),this.props.get("max")),e)}onPointerDownOrMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){let e=nn(this.props.get("keyScale"),gi(t));e!==0&&this.value.setRawValue(this.value.rawValue+e,{forceEmit:!1,last:!1})}onKeyUp_(t){nn(this.props.get("keyScale"),gi(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}},jh=Yt("sldtxt"),Hu=class{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(jh());let n=t.createElement("div");n.classList.add(jh("s")),this.sliderView_=e.sliderView,n.appendChild(this.sliderView_.element),this.element.appendChild(n);let s=t.createElement("div");s.classList.add(jh("t")),this.textView_=e.textView,s.appendChild(this.textView_.element),this.element.appendChild(s)}},pr=class{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.sliderC_=new Gu(t,{props:e.sliderProps,value:e.value,viewProps:this.viewProps}),this.textC_=new As(t,{parser:e.parser,props:e.textProps,sliderProps:e.sliderProps,value:e.value,viewProps:e.viewProps}),this.view=new Hu(t,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}importProps(t){return gn(t,null,e=>({max:e.required.number,min:e.required.number}),e=>{let n=this.sliderC_.props;return n.set("max",e.max),n.set("min",e.min),!0})}exportProps(){let t=this.sliderC_.props;return vn(null,{max:t.get("max"),min:t.get("min")})}};function Hm(i){return{sliderProps:new Bt({keyScale:i.keyScale,max:i.max,min:i.min}),textProps:new Bt({formatter:de(i.formatter),keyScale:i.keyScale,pointerScale:de(i.pointerScale)})}}var Uw={containerUnitSize:"cnt-usz"};function Wm(i){return`--${Uw[i]}`}function Sa(i){return Dm(i)}function $i(i){if(nu(i))return pe(i,Sa)}function hi(i,t){if(!i)return;let e=[],n=Pm(i,t);n&&e.push(n);let s=Rm(i);return s&&e.push(s),new Ms(e)}function Ow(i){return i?i.major===gr.major:!1}function Xm(i){if(i==="inline"||i==="popup")return i}function Da(i,t){i.write(t)}var Wl=Yt("ckb"),Wu=class{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(Wl()),e.viewProps.bindClassModifiers(this.element);let n=t.createElement("label");n.classList.add(Wl("l")),this.element.appendChild(n),this.labelElement=n;let s=t.createElement("input");s.classList.add(Wl("i")),s.type="checkbox",this.labelElement.appendChild(s),this.inputElement=s,e.viewProps.bindDisabled(this.inputElement);let r=t.createElement("div");r.classList.add(Wl("w")),this.labelElement.appendChild(r);let a=lc(t,"check");r.appendChild(a),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}},Xu=class{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.onLabelMouseDown_=this.onLabelMouseDown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new Wu(t,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.labelElement.addEventListener("mousedown",this.onLabelMouseDown_)}onInputChange_(t){let e=t.currentTarget;this.value.rawValue=e.checked,t.preventDefault(),t.stopPropagation()}onLabelMouseDown_(t){t.preventDefault()}};function Fw(i){let t=[],e=Fd(i.options);return e&&t.push(e),new Ms(t)}var Bw=Ze({id:"input-bool",type:"input",accept:(i,t)=>{if(typeof i!="boolean")return null;let e=pe(t,n=>({options:n.optional.custom(Ia),readonly:n.optional.constant(!1)}));return e?{initialValue:i,params:e}:null},binding:{reader:i=>Vm,constraint:i=>Fw(i.params),writer:i=>Da},controller:i=>{let t=i.document,e=i.value,n=i.constraint,s=n&&nc(n,Ss);return s?new Kn(t,{props:new Bt({options:s.values.value("options")}),value:e,viewProps:i.viewProps}):new Xu(t,{value:e,viewProps:i.viewProps})},api(i){return typeof i.controller.value.rawValue!="boolean"?null:i.controller.valueController instanceof Kn?new wa(i.controller):null}}),vs=Yt("col"),qu=class{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(vs()),e.foldable.bindExpandedClass(this.element,vs(void 0,"expanded")),$n(e.foldable,"completed",mr(this.element,vs(void 0,"cpl")));let n=t.createElement("div");n.classList.add(vs("h")),this.element.appendChild(n);let s=t.createElement("div");s.classList.add(vs("s")),n.appendChild(s),this.swatchElement=s;let r=t.createElement("div");if(r.classList.add(vs("t")),n.appendChild(r),this.textElement=r,e.pickerLayout==="inline"){let a=t.createElement("div");a.classList.add(vs("p")),this.element.appendChild(a),this.pickerElement=a}else this.pickerElement=null}};function kw(i,t,e){let n=Le(i/255,0,1),s=Le(t/255,0,1),r=Le(e/255,0,1),a=Math.max(n,s,r),o=Math.min(n,s,r),l=a-o,c=0,h=0,d=(o+a)/2;return l!==0&&(h=l/(1-Math.abs(a+o-1)),n===a?c=(s-r)/l:s===a?c=2+(r-n)/l:c=4+(n-s)/l,c=c/6+(c<0?1:0)),[c*360,h*100,d*100]}function Vw(i,t,e){let n=(i%360+360)%360,s=Le(t/100,0,1),r=Le(e/100,0,1),a=(1-Math.abs(2*r-1))*s,o=a*(1-Math.abs(n/60%2-1)),l=r-a/2,c,h,d;return n>=0&&n<60?[c,h,d]=[a,o,0]:n>=60&&n<120?[c,h,d]=[o,a,0]:n>=120&&n<180?[c,h,d]=[0,a,o]:n>=180&&n<240?[c,h,d]=[0,o,a]:n>=240&&n<300?[c,h,d]=[o,0,a]:[c,h,d]=[a,0,o],[(c+l)*255,(h+l)*255,(d+l)*255]}function zw(i,t,e){let n=Le(i/255,0,1),s=Le(t/255,0,1),r=Le(e/255,0,1),a=Math.max(n,s,r),o=Math.min(n,s,r),l=a-o,c;l===0?c=0:a===n?c=60*(((s-r)/l%6+6)%6):a===s?c=60*((r-n)/l+2):c=60*((n-s)/l+4);let h=a===0?0:l/a,d=a;return[c,h*100,d*100]}function qm(i,t,e){let n=Am(i,360),s=Le(t/100,0,1),r=Le(e/100,0,1),a=r*s,o=a*(1-Math.abs(n/60%2-1)),l=r-a,c,h,d;return n>=0&&n<60?[c,h,d]=[a,o,0]:n>=60&&n<120?[c,h,d]=[o,a,0]:n>=120&&n<180?[c,h,d]=[0,a,o]:n>=180&&n<240?[c,h,d]=[0,o,a]:n>=240&&n<300?[c,h,d]=[o,0,a]:[c,h,d]=[a,0,o],[(c+l)*255,(h+l)*255,(d+l)*255]}function Gw(i,t,e){let n=e+t*(100-Math.abs(2*e-100))/200;return[i,n!==0?t*(100-Math.abs(2*e-100))/n:0,e+t*(100-Math.abs(2*e-100))/200]}function Hw(i,t,e){let n=100-Math.abs(e*(200-t)/100-100);return[i,n!==0?t*e/n:0,e*(200-t)/200]}function Zn(i){return[i[0],i[1],i[2]]}function cc(i,t){return[i[0],i[1],i[2],t]}var Ww={hsl:{hsl:(i,t,e)=>[i,t,e],hsv:Gw,rgb:Vw},hsv:{hsl:Hw,hsv:(i,t,e)=>[i,t,e],rgb:qm},rgb:{hsl:kw,hsv:zw,rgb:(i,t,e)=>[i,t,e]}};function fr(i,t){return[t==="float"?1:i==="rgb"?255:360,t==="float"?1:i==="rgb"?255:100,t==="float"?1:i==="rgb"?255:100]}function Xw(i,t){return i===t?t:Am(i,t)}function Ym(i,t,e){var n;let s=fr(t,e);return[t==="rgb"?Le(i[0],0,s[0]):Xw(i[0],s[0]),Le(i[1],0,s[1]),Le(i[2],0,s[2]),Le((n=i[3])!==null&&n!==void 0?n:1,0,1)]}function hm(i,t,e,n){let s=fr(t,e),r=fr(t,n);return i.map((a,o)=>a/s[o]*r[o])}function $m(i,t,e){let n=hm(i,t.mode,t.type,"int"),s=Ww[t.mode][e.mode](...n);return hm(s,e.mode,"int",e.type)}var Kt=class i{static black(){return new i([0,0,0],"rgb")}constructor(t,e){this.type="int",this.mode=e,this.comps_=Ym(t,e,this.type)}getComponents(t){return cc($m(Zn(this.comps_),{mode:this.mode,type:this.type},{mode:t!=null?t:this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){let t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}},Xi=Yt("colp"),Yu=class{constructor(t,e){this.alphaViews_=null,this.element=t.createElement("div"),this.element.classList.add(Xi()),e.viewProps.bindClassModifiers(this.element);let n=t.createElement("div");n.classList.add(Xi("hsv"));let s=t.createElement("div");s.classList.add(Xi("sv")),this.svPaletteView_=e.svPaletteView,s.appendChild(this.svPaletteView_.element),n.appendChild(s);let r=t.createElement("div");r.classList.add(Xi("h")),this.hPaletteView_=e.hPaletteView,r.appendChild(this.hPaletteView_.element),n.appendChild(r),this.element.appendChild(n);let a=t.createElement("div");if(a.classList.add(Xi("rgb")),this.textsView_=e.textsView,a.appendChild(this.textsView_.element),this.element.appendChild(a),e.alphaViews){this.alphaViews_={palette:e.alphaViews.palette,text:e.alphaViews.text};let o=t.createElement("div");o.classList.add(Xi("a"));let l=t.createElement("div");l.classList.add(Xi("ap")),l.appendChild(this.alphaViews_.palette.element),o.appendChild(l);let c=t.createElement("div");c.classList.add(Xi("at")),c.appendChild(this.alphaViews_.text.element),o.appendChild(c),this.element.appendChild(o)}}get allFocusableElements(){let t=[this.svPaletteView_.element,this.hPaletteView_.element,this.textsView_.modeSelectElement,...this.textsView_.inputViews.map(e=>e.inputElement)];return this.alphaViews_&&t.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),t}};function qw(i){return i==="int"?"int":i==="float"?"float":void 0}function Bd(i){return pe(i,t=>({color:t.optional.object({alpha:t.optional.boolean,type:t.optional.custom(qw)}),expanded:t.optional.boolean,picker:t.optional.custom(Xm),readonly:t.optional.constant(!1)}))}function Ts(i){return i?.1:1}function Km(i){var t;return(t=i.color)===null||t===void 0?void 0:t.type}var Ea=class{constructor(t,e){this.type="float",this.mode=e,this.comps_=Ym(t,e,this.type)}getComponents(t){return cc($m(Zn(this.comps_),{mode:this.mode,type:this.type},{mode:t!=null?t:this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){let t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}},Yw={int:(i,t)=>new Kt(i,t),float:(i,t)=>new Ea(i,t)};function kd(i,t,e){return Yw[e](i,t)}function $w(i){return i.type==="float"}function Kw(i){return i.type==="int"}function Zw(i){let t=i.getComponents(),e=fr(i.mode,"int");return new Kt([Math.round(te(t[0],0,1,0,e[0])),Math.round(te(t[1],0,1,0,e[1])),Math.round(te(t[2],0,1,0,e[2])),t[3]],i.mode)}function Jw(i){let t=i.getComponents(),e=fr(i.mode,"int");return new Ea([te(t[0],0,e[0],0,1),te(t[1],0,e[1],0,1),te(t[2],0,e[2],0,1),t[3]],i.mode)}function Ke(i,t){if(i.type===t)return i;if(Kw(i)&&t==="float")return Jw(i);if($w(i)&&t==="int")return Zw(i);throw Be.shouldNeverHappen()}function jw(i,t){return i.alpha===t.alpha&&i.mode===t.mode&&i.notation===t.notation&&i.type===t.type}function Sn(i,t){let e=i.match(/^(.+)%$/);return Math.min(e?parseFloat(e[1])*.01*t:parseFloat(i),t)}var Qw={deg:i=>i,grad:i=>i*360/400,rad:i=>i*360/(2*Math.PI),turn:i=>i*360};function Zm(i){let t=i.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!t)return parseFloat(i);let e=parseFloat(t[1]),n=t[2];return Qw[n](e)}function Jm(i){let t=i.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;let e=[Sn(t[1],255),Sn(t[2],255),Sn(t[3],255)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function tM(i){let t=Jm(i);return t?new Kt(t,"rgb"):null}function jm(i){let t=i.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;let e=[Sn(t[1],255),Sn(t[2],255),Sn(t[3],255),Sn(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function eM(i){let t=jm(i);return t?new Kt(t,"rgb"):null}function Qm(i){let t=i.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;let e=[Zm(t[1]),Sn(t[2],100),Sn(t[3],100)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function nM(i){let t=Qm(i);return t?new Kt(t,"hsl"):null}function tg(i){let t=i.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;let e=[Zm(t[1]),Sn(t[2],100),Sn(t[3],100),Sn(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function iM(i){let t=tg(i);return t?new Kt(t,"hsl"):null}function eg(i){let t=i.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)];let e=i.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:null}function sM(i){let t=eg(i);return t?new Kt(t,"rgb"):null}function ng(i){let t=i.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16),te(parseInt(t[4]+t[4],16),0,255,0,1)];let e=i.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),te(parseInt(e[4],16),0,255,0,1)]:null}function rM(i){let t=ng(i);return t?new Kt(t,"rgb"):null}function ig(i){let t=i.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;let e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function um(i){return t=>{let e=ig(t);return e?kd(e,"rgb",i):null}}function sg(i){let t=i.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;let e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3]),parseFloat(t[4])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function dm(i){return t=>{let e=sg(t);return e?kd(e,"rgb",i):null}}var aM=[{parser:eg,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:ng,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Jm,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:jm,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Qm,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:tg,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:ig,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:sg,result:{alpha:!0,mode:"rgb",notation:"object"}}];function oM(i){return aM.reduce((t,{parser:e,result:n})=>t||(e(i)?n:null),null)}function lM(i,t="int"){let e=oM(i);return e?e.notation==="hex"&&t!=="float"?Object.assign(Object.assign({},e),{type:"int"}):e.notation==="func"?Object.assign(Object.assign({},e),{type:t}):null:null}function La(i){let t=[sM,rM,tM,eM,nM,iM];i==="int"&&t.push(um("int"),dm("int")),i==="float"&&t.push(um("float"),dm("float"));let e=Dw(t);return n=>{let s=e(n);return s?Ke(s,i):null}}function cM(i){let t=La("int");if(typeof i!="string")return Kt.black();let e=t(i);return e!=null?e:Kt.black()}function rg(i){let t=Le(Math.floor(i),0,255).toString(16);return t.length===1?`0${t}`:t}function Vd(i,t="#"){let e=Zn(i.getComponents("rgb")).map(rg).join("");return`${t}${e}`}function zd(i,t="#"){let e=i.getComponents("rgb"),n=[e[0],e[1],e[2],e[3]*255].map(rg).join("");return`${t}${n}`}function ag(i){let t=sn(0),e=Ke(i,"int");return`rgb(${Zn(e.getComponents("rgb")).map(s=>t(s)).join(", ")})`}function Xl(i){let t=sn(2),e=sn(0);return`rgba(${Ke(i,"int").getComponents("rgb").map((r,a)=>(a===3?t:e)(r)).join(", ")})`}function hM(i){let t=[sn(0),sc,sc],e=Ke(i,"int");return`hsl(${Zn(e.getComponents("hsl")).map((s,r)=>t[r](s)).join(", ")})`}function uM(i){let t=[sn(0),sc,sc,sn(2)];return`hsla(${Ke(i,"int").getComponents("hsl").map((s,r)=>t[r](s)).join(", ")})`}function og(i,t){let e=sn(t==="float"?2:0),n=["r","g","b"],s=Ke(i,t);return`{${Zn(s.getComponents("rgb")).map((a,o)=>`${n[o]}: ${e(a)}`).join(", ")}}`}function dM(i){return t=>og(t,i)}function lg(i,t){let e=sn(2),n=sn(t==="float"?2:0),s=["r","g","b","a"];return`{${Ke(i,t).getComponents("rgb").map((o,l)=>{let c=l===3?e:n;return`${s[l]}: ${c(o)}`}).join(", ")}}`}function pM(i){return t=>lg(t,i)}var fM=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Vd},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:zd},{format:{alpha:!1,mode:"rgb",notation:"func",type:"int"},stringifier:ag},{format:{alpha:!0,mode:"rgb",notation:"func",type:"int"},stringifier:Xl},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:hM},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:uM},...["int","float"].reduce((i,t)=>[...i,{format:{alpha:!1,mode:"rgb",notation:"object",type:t},stringifier:dM(t)},{format:{alpha:!0,mode:"rgb",notation:"object",type:t},stringifier:pM(t)}],[])];function cg(i){return fM.reduce((t,e)=>t||(jw(e.format,i)?e.stringifier:null),null)}var pa=Yt("apl"),$u=class{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(pa()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);let n=t.createElement("div");n.classList.add(pa("b")),this.element.appendChild(n);let s=t.createElement("div");s.classList.add(pa("c")),n.appendChild(s),this.colorElem_=s;let r=t.createElement("div");r.classList.add(pa("m")),this.element.appendChild(r),this.markerElem_=r;let a=t.createElement("div");a.classList.add(pa("p")),this.markerElem_.appendChild(a),this.previewElem_=a,this.update_()}update_(){let t=this.value.rawValue,e=t.getComponents("rgb"),n=new Kt([e[0],e[1],e[2],0],"rgb"),s=new Kt([e[0],e[1],e[2],255],"rgb"),r=["to right",Xl(n),Xl(s)];this.colorElem_.style.background=`linear-gradient(${r.join(",")})`,this.previewElem_.style.backgroundColor=Xl(t);let a=te(e[3],0,1,0,100);this.markerElem_.style.left=`${a}%`}onValueChange_(){this.update_()}},Ku=class{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new $u(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new vi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;let n=t.point.x/t.bounds.width,s=this.value.rawValue,[r,a,o]=s.getComponents("hsv");this.value.setRawValue(new Kt([r,a,o,n],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){let e=nn(Ts(!0),gi(t));if(e===0)return;let n=this.value.rawValue,[s,r,a,o]=n.getComponents("hsv");this.value.setRawValue(new Kt([s,r,a,o+e],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){nn(Ts(!0),gi(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}},cr=Yt("coltxt");function mM(i){let t=i.createElement("select"),e=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"},{text:"HEX",value:"hex"}];return t.appendChild(e.reduce((n,s)=>{let r=i.createElement("option");return r.textContent=s.text,r.value=s.value,n.appendChild(r),n},i.createDocumentFragment())),t}var Zu=class{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(cr()),e.viewProps.bindClassModifiers(this.element);let n=t.createElement("div");n.classList.add(cr("m")),this.modeElem_=mM(t),this.modeElem_.classList.add(cr("ms")),n.appendChild(this.modeSelectElement),e.viewProps.bindDisabled(this.modeElem_);let s=t.createElement("div");s.classList.add(cr("mm")),s.appendChild(lc(t,"dropdown")),n.appendChild(s),this.element.appendChild(n);let r=t.createElement("div");r.classList.add(cr("w")),this.element.appendChild(r),this.inputsElem_=r,this.inputViews_=e.inputViews,this.applyInputViews_(),ui(e.mode,a=>{this.modeElem_.value=a})}get modeSelectElement(){return this.modeElem_}get inputViews(){return this.inputViews_}set inputViews(t){this.inputViews_=t,this.applyInputViews_()}applyInputViews_(){Um(this.inputsElem_);let t=this.element.ownerDocument;this.inputViews_.forEach(e=>{let n=t.createElement("div");n.classList.add(cr("c")),n.appendChild(e.element),this.inputsElem_.appendChild(n)})}};function gM(i){return sn(i==="float"?2:0)}function vM(i,t,e){let n=fr(i,t)[e];return new bs({min:0,max:n})}function _M(i,t,e){return new As(i,{arrayPosition:e===0?"fst":e===2?"lst":"mid",parser:t.parser,props:Bt.fromObject({formatter:gM(t.colorType),keyScale:Ts(!1),pointerScale:t.colorType==="float"?.01:1}),value:de(0,{constraint:vM(t.colorMode,t.colorType,e)}),viewProps:t.viewProps})}function xM(i,t){let e={colorMode:t.colorMode,colorType:t.colorType,parser:di,viewProps:t.viewProps};return[0,1,2].map(n=>{let s=_M(i,e,n);return _r({primary:t.value,secondary:s.value,forward(r){return Ke(r,t.colorType).getComponents(t.colorMode)[n]},backward(r,a){let o=t.colorMode,c=Ke(r,t.colorType).getComponents(o);c[n]=a;let h=kd(cc(Zn(c),c[3]),o,t.colorType);return Ke(h,"int")}}),s})}function bM(i,t){let e=new Es(i,{parser:La("int"),props:Bt.fromObject({formatter:Vd}),value:de(Kt.black()),viewProps:t.viewProps});return _r({primary:t.value,secondary:e.value,forward:n=>new Kt(Zn(n.getComponents()),n.mode),backward:(n,s)=>new Kt(cc(Zn(s.getComponents(n.mode)),n.getComponents()[3]),n.mode)}),[e]}function yM(i){return i!=="hex"}var Ju=class{constructor(t,e){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=e.colorType,this.value=e.value,this.viewProps=e.viewProps,this.colorMode=de(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(t),this.view=new Zu(t,{mode:this.colorMode,inputViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(t){let e=this.colorMode.rawValue;return yM(e)?xM(t,{colorMode:e,colorType:this.colorType_,value:this.value,viewProps:this.viewProps}):bM(t,{value:this.value,viewProps:this.viewProps})}onModeSelectChange_(t){let e=t.currentTarget;this.colorMode.rawValue=e.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.inputViews=this.ccs_.map(n=>n.view)}},Qh=Yt("hpl"),ju=class{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(Qh()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);let n=t.createElement("div");n.classList.add(Qh("c")),this.element.appendChild(n);let s=t.createElement("div");s.classList.add(Qh("m")),this.element.appendChild(s),this.markerElem_=s,this.update_()}update_(){let t=this.value.rawValue,[e]=t.getComponents("hsv");this.markerElem_.style.backgroundColor=ag(new Kt([e,100,100],"hsv"));let n=te(e,0,360,0,100);this.markerElem_.style.left=`${n}%`}onValueChange_(){this.update_()}},Qu=class{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new ju(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new vi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;let n=te(Le(t.point.x,0,t.bounds.width),0,t.bounds.width,0,360),s=this.value.rawValue,[,r,a,o]=s.getComponents("hsv");this.value.setRawValue(new Kt([n,r,a,o],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){let e=nn(Ts(!1),gi(t));if(e===0)return;let n=this.value.rawValue,[s,r,a,o]=n.getComponents("hsv");this.value.setRawValue(new Kt([s+e,r,a,o],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){nn(Ts(!1),gi(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}},tu=Yt("svp"),pm=64,td=class{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(tu()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);let n=t.createElement("canvas");n.height=pm,n.width=pm,n.classList.add(tu("c")),this.element.appendChild(n),this.canvasElement=n;let s=t.createElement("div");s.classList.add(tu("m")),this.element.appendChild(s),this.markerElem_=s,this.update_()}update_(){let t=rw(this.canvasElement);if(!t)return;let n=this.value.rawValue.getComponents("hsv"),s=this.canvasElement.width,r=this.canvasElement.height,a=t.getImageData(0,0,s,r),o=a.data;for(let h=0;h<r;h++)for(let d=0;d<s;d++){let u=te(d,0,s,0,100),m=te(h,0,r,100,0),v=qm(n[0],u,m),b=(h*s+d)*4;o[b]=v[0],o[b+1]=v[1],o[b+2]=v[2],o[b+3]=255}t.putImageData(a,0,0);let l=te(n[1],0,100,0,100);this.markerElem_.style.left=`${l}%`;let c=te(n[2],0,100,100,0);this.markerElem_.style.top=`${c}%`}onValueChange_(){this.update_()}},ed=class{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new td(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new vi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;let n=te(t.point.x,0,t.bounds.width,0,100),s=te(t.point.y,0,t.bounds.height,100,0),[r,,,a]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Kt([r,n,s,a],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){Gm(t.key)&&t.preventDefault();let[e,n,s,r]=this.value.rawValue.getComponents("hsv"),a=Ts(!1),o=nn(a,gi(t)),l=nn(a,Ma(t));o===0&&l===0||this.value.setRawValue(new Kt([e,n+o,s+l,r],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){let e=Ts(!1),n=nn(e,gi(t)),s=nn(e,Ma(t));n===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}},nd=class{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.hPaletteC_=new Qu(t,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new ed(t,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=e.supportsAlpha?{palette:new Ku(t,{value:this.value,viewProps:this.viewProps}),text:new As(t,{parser:di,props:Bt.fromObject({pointerScale:.01,keyScale:.1,formatter:sn(2)}),value:de(0,{constraint:new bs({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&_r({primary:this.value,secondary:this.alphaIcs_.text.value,forward:n=>n.getComponents()[3],backward:(n,s)=>{let r=n.getComponents();return r[3]=s,new Kt(r,n.mode)}}),this.textsC_=new Ju(t,{colorType:e.colorType,value:this.value,viewProps:this.viewProps}),this.view=new Yu(t,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:e.supportsAlpha,svPaletteView:this.svPaletteC_.view,textsView:this.textsC_.view,viewProps:this.viewProps})}get textsController(){return this.textsC_}},eu=Yt("colsw"),id=class{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.element=t.createElement("div"),this.element.classList.add(eu()),e.viewProps.bindClassModifiers(this.element);let n=t.createElement("div");n.classList.add(eu("sw")),this.element.appendChild(n),this.swatchElem_=n;let s=t.createElement("button");s.classList.add(eu("b")),e.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s,this.update_()}update_(){let t=this.value.rawValue;this.swatchElem_.style.backgroundColor=zd(t)}onValueChange_(){this.update_()}},sd=class{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new id(t,{value:this.value,viewProps:this.viewProps})}},Aa=class{constructor(t,e){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=xa.create(e.expanded),this.swatchC_=new sd(t,{value:this.value,viewProps:this.viewProps});let n=this.swatchC_.view.buttonElement;n.addEventListener("blur",this.onButtonBlur_),n.addEventListener("click",this.onButtonClick_),this.textC_=new Es(t,{parser:e.parser,props:Bt.fromObject({formatter:e.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new qu(t,{foldable:this.foldable_,pickerLayout:e.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=e.pickerLayout==="popup"?new ic(t,{viewProps:this.viewProps}):null;let s=new nd(t,{colorType:e.colorType,supportsAlpha:e.supportsAlpha,value:this.value,viewProps:this.viewProps});s.view.allFocusableElements.forEach(r=>{r.addEventListener("blur",this.onPopupChildBlur_),r.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=s,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(s.view.element),_r({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:r=>r,backward:(r,a)=>a})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Ud(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(t){if(!this.popC_)return;let e=this.view.element,n=t.relatedTarget;(!n||!e.contains(n))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;let e=this.popC_.view.element,n=Om(t);n&&e.contains(n)||n&&n===this.swatchC_.view.buttonElement&&!Dd(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}};function wM(i){return Zn(i.getComponents("rgb")).reduce((t,e)=>t<<8|Math.floor(e)&255,0)}function MM(i){return i.getComponents("rgb").reduce((t,e,n)=>{let s=Math.floor(n===3?e*255:e)&255;return t<<8|s},0)>>>0}function SM(i){return new Kt([i>>16&255,i>>8&255,i&255],"rgb")}function EM(i){return new Kt([i>>24&255,i>>16&255,i>>8&255,te(i&255,0,255,0,1)],"rgb")}function AM(i){return typeof i!="number"?Kt.black():SM(i)}function TM(i){return typeof i!="number"?Kt.black():EM(i)}function ql(i,t){return typeof i!="object"||ce(i)?!1:t in i&&typeof i[t]=="number"}function hg(i){return ql(i,"r")&&ql(i,"g")&&ql(i,"b")}function ug(i){return hg(i)&&ql(i,"a")}function dg(i){return hg(i)}function Gd(i,t){if(i.mode!==t.mode||i.type!==t.type)return!1;let e=i.getComponents(),n=t.getComponents();for(let s=0;s<e.length;s++)if(e[s]!==n[s])return!1;return!0}function fm(i){return"a"in i?[i.r,i.g,i.b,i.a]:[i.r,i.g,i.b]}function CM(i){let t=cg(i);return t?(e,n)=>{Da(e,t(n))}:null}function PM(i){let t=i?MM:wM;return(e,n)=>{Da(e,t(n))}}function RM(i,t,e){let s=Ke(t,e).toRgbaObject();i.writeProperty("r",s.r),i.writeProperty("g",s.g),i.writeProperty("b",s.b),i.writeProperty("a",s.a)}function IM(i,t,e){let s=Ke(t,e).toRgbaObject();i.writeProperty("r",s.r),i.writeProperty("g",s.g),i.writeProperty("b",s.b)}function DM(i,t){return(e,n)=>{i?RM(e,n,t):IM(e,n,t)}}function LM(i){var t;return!!(!((t=i==null?void 0:i.color)===null||t===void 0)&&t.alpha)}function NM(i){return i?t=>zd(t,"0x"):t=>Vd(t,"0x")}function UM(i){return"color"in i||i.view==="color"}var OM=Ze({id:"input-color-number",type:"input",accept:(i,t)=>{if(typeof i!="number"||!UM(t))return null;let e=Bd(t);return e?{initialValue:i,params:Object.assign(Object.assign({},e),{supportsAlpha:LM(t)})}:null},binding:{reader:i=>i.params.supportsAlpha?TM:AM,equals:Gd,writer:i=>PM(i.params.supportsAlpha)},controller:i=>{var t,e;return new Aa(i.document,{colorType:"int",expanded:(t=i.params.expanded)!==null&&t!==void 0?t:!1,formatter:NM(i.params.supportsAlpha),parser:La("int"),pickerLayout:(e=i.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:i.params.supportsAlpha,value:i.value,viewProps:i.viewProps})}});function FM(i,t){if(!dg(i))return Ke(Kt.black(),t);if(t==="int"){let e=fm(i);return new Kt(e,"rgb")}if(t==="float"){let e=fm(i);return new Ea(e,"rgb")}return Ke(Kt.black(),"int")}function BM(i){return ug(i)}function kM(i){return t=>{let e=FM(t,i);return Ke(e,"int")}}function VM(i,t){return e=>i?lg(e,t):og(e,t)}var zM=Ze({id:"input-color-object",type:"input",accept:(i,t)=>{var e;if(!dg(i))return null;let n=Bd(t);return n?{initialValue:i,params:Object.assign(Object.assign({},n),{colorType:(e=Km(t))!==null&&e!==void 0?e:"int"})}:null},binding:{reader:i=>kM(i.params.colorType),equals:Gd,writer:i=>DM(BM(i.initialValue),i.params.colorType)},controller:i=>{var t,e;let n=ug(i.initialValue);return new Aa(i.document,{colorType:i.params.colorType,expanded:(t=i.params.expanded)!==null&&t!==void 0?t:!1,formatter:VM(n,i.params.colorType),parser:La("int"),pickerLayout:(e=i.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:n,value:i.value,viewProps:i.viewProps})}}),GM=Ze({id:"input-color-string",type:"input",accept:(i,t)=>{if(typeof i!="string"||t.view==="text")return null;let e=lM(i,Km(t));if(!e)return null;let n=cg(e);if(!n)return null;let s=Bd(t);return s?{initialValue:i,params:Object.assign(Object.assign({},s),{format:e,stringifier:n})}:null},binding:{reader:()=>cM,equals:Gd,writer:i=>{let t=CM(i.params.format);if(!t)throw Be.notBindable();return t}},controller:i=>{var t,e;return new Aa(i.document,{colorType:i.params.format.type,expanded:(t=i.params.expanded)!==null&&t!==void 0?t:!1,formatter:i.params.stringifier,parser:La("int"),pickerLayout:(e=i.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:i.params.format.alpha,value:i.value,viewProps:i.viewProps})}}),Ta=class{constructor(t){this.components=t.components,this.asm_=t.assembly}constrain(t){let e=this.asm_.toComponents(t).map((n,s)=>{var r,a;return(a=(r=this.components[s])===null||r===void 0?void 0:r.constrain(n))!==null&&a!==void 0?a:n});return this.asm_.fromComponents(e)}},mm=Yt("pndtxt"),rd=class{constructor(t,e){this.textViews=e.textViews,this.element=t.createElement("div"),this.element.classList.add(mm()),this.textViews.forEach(n=>{let s=t.createElement("div");s.classList.add(mm("a")),s.appendChild(n.element),this.element.appendChild(s)})}};function HM(i,t,e){return new As(i,{arrayPosition:e===0?"fst":e===t.axes.length-1?"lst":"mid",parser:t.parser,props:t.axes[e].textProps,value:de(0,{constraint:t.axes[e].constraint}),viewProps:t.viewProps})}var Ca=class{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.acs_=e.axes.map((n,s)=>HM(t,e,s)),this.acs_.forEach((n,s)=>{_r({primary:this.value,secondary:n.value,forward:r=>e.assembly.toComponents(r)[s],backward:(r,a)=>{let o=e.assembly.toComponents(r);return o[s]=a,e.assembly.fromComponents(o)}})}),this.view=new rd(t,{textViews:this.acs_.map(n=>n.view)})}get textControllers(){return this.acs_}},ad=class extends ws{get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}};function WM(i,t){let e=[],n=Pm(i,t);n&&e.push(n);let s=Rm(i);s&&e.push(s);let r=Fd(i.options);return r&&e.push(r),new Ms(e)}var XM=Ze({id:"input-number",type:"input",accept:(i,t)=>{if(typeof i!="number")return null;let e=pe(t,n=>Object.assign(Object.assign({},Dm(n)),{options:n.optional.custom(Ia),readonly:n.optional.constant(!1)}));return e?{initialValue:i,params:e}:null},binding:{reader:i=>Em,constraint:i=>WM(i.params,i.initialValue),writer:i=>Da},controller:i=>{let t=i.value,e=i.constraint,n=e&&nc(e,Ss);if(n)return new Kn(i.document,{props:new Bt({options:n.values.value("options")}),value:t,viewProps:i.viewProps});let s=Im(i.params,t.rawValue),r=e&&nc(e,bs);return r?new pr(i.document,Object.assign(Object.assign({},Hm(Object.assign(Object.assign({},s),{keyScale:de(s.keyScale),max:r.values.value("max"),min:r.values.value("min")}))),{parser:di,value:t,viewProps:i.viewProps})):new As(i.document,{parser:di,props:Bt.fromObject(s),value:t,viewProps:i.viewProps})},api(i){return typeof i.controller.value.rawValue!="number"?null:i.controller.valueController instanceof pr?new ad(i.controller):i.controller.valueController instanceof Kn?new wa(i.controller):null}}),Yn=class{constructor(t=0,e=0){this.x=t,this.y=e}getComponents(){return[this.x,this.y]}static isObject(t){if(ce(t))return!1;let e=t.x,n=t.y;return!(typeof e!="number"||typeof n!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y}toObject(){return{x:this.x,y:this.y}}},pg={toComponents:i=>i.getComponents(),fromComponents:i=>new Yn(...i)},hr=Yt("p2d"),od=class{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(hr()),e.viewProps.bindClassModifiers(this.element),ui(e.expanded,mr(this.element,hr(void 0,"expanded")));let n=t.createElement("div");n.classList.add(hr("h")),this.element.appendChild(n);let s=t.createElement("button");s.classList.add(hr("b")),s.appendChild(lc(t,"p2dpad")),e.viewProps.bindDisabled(s),n.appendChild(s),this.buttonElement=s;let r=t.createElement("div");if(r.classList.add(hr("t")),n.appendChild(r),this.textElement=r,e.pickerLayout==="inline"){let a=t.createElement("div");a.classList.add(hr("p")),this.element.appendChild(a),this.pickerElement=a}else this.pickerElement=null}},qi=Yt("p2dp"),ld=class{constructor(t,e){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onPropsChange_=this.onPropsChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onPropsChange_),this.element=t.createElement("div"),this.element.classList.add(qi()),e.layout==="popup"&&this.element.classList.add(qi(void 0,"p")),e.viewProps.bindClassModifiers(this.element);let n=t.createElement("div");n.classList.add(qi("p")),e.viewProps.bindTabIndex(n),this.element.appendChild(n),this.padElement=n;let s=t.createElementNS(qn,"svg");s.classList.add(qi("g")),this.padElement.appendChild(s),this.svgElem_=s;let r=t.createElementNS(qn,"line");r.classList.add(qi("ax")),r.setAttributeNS(null,"x1","0"),r.setAttributeNS(null,"y1","50%"),r.setAttributeNS(null,"x2","100%"),r.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(r);let a=t.createElementNS(qn,"line");a.classList.add(qi("ax")),a.setAttributeNS(null,"x1","50%"),a.setAttributeNS(null,"y1","0"),a.setAttributeNS(null,"x2","50%"),a.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(a);let o=t.createElementNS(qn,"line");o.classList.add(qi("l")),o.setAttributeNS(null,"x1","50%"),o.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(o),this.lineElem_=o;let l=t.createElement("div");l.classList.add(qi("m")),this.padElement.appendChild(l),this.markerElem_=l,e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){let[t,e]=this.value.rawValue.getComponents(),n=this.props_.get("max"),s=te(t,-n,+n,0,100),r=te(e,-n,+n,0,100),a=this.props_.get("invertsY")?100-r:r;this.lineElem_.setAttributeNS(null,"x2",`${s}%`),this.lineElem_.setAttributeNS(null,"y2",`${a}%`),this.markerElem_.style.left=`${s}%`,this.markerElem_.style.top=`${a}%`}onValueChange_(){this.update_()}onPropsChange_(){this.update_()}onFoldableChange_(){this.update_()}};function gm(i,t,e){return[nn(t[0],gi(i)),nn(t[1],Ma(i))*(e?1:-1)]}var cd=class{constructor(t,e){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new ld(t,{layout:e.layout,props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new vi(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;let n=this.props.get("max"),s=te(t.point.x,0,t.bounds.width,-n,+n),r=te(this.props.get("invertsY")?t.bounds.height-t.point.y:t.point.y,0,t.bounds.height,-n,+n);this.value.setRawValue(new Yn(s,r),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onPadKeyDown_(t){Gm(t.key)&&t.preventDefault();let[e,n]=gm(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));e===0&&n===0||this.value.setRawValue(new Yn(this.value.rawValue.x+e,this.value.rawValue.y+n),{forceEmit:!1,last:!1})}onPadKeyUp_(t){let[e,n]=gm(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));e===0&&n===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}},hd=class{constructor(t,e){var n,s;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=xa.create(e.expanded),this.popC_=e.pickerLayout==="popup"?new ic(t,{viewProps:this.viewProps}):null;let r=new cd(t,{layout:e.pickerLayout,props:new Bt({invertsY:de(e.invertsY),max:de(e.max),xKeyScale:e.axes[0].textProps.value("keyScale"),yKeyScale:e.axes[1].textProps.value("keyScale")}),value:this.value,viewProps:this.viewProps});r.view.allFocusableElements.forEach(a=>{a.addEventListener("blur",this.onPopupChildBlur_),a.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=r,this.textC_=new Ca(t,{assembly:pg,axes:e.axes,parser:e.parser,value:this.value,viewProps:this.viewProps}),this.view=new od(t,{expanded:this.foldable_.value("expanded"),pickerLayout:e.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(n=this.view.buttonElement)===null||n===void 0||n.addEventListener("blur",this.onPadButtonBlur_),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),_r({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:a=>a,backward:(a,o)=>o})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Ud(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onPadButtonBlur_(t){if(!this.popC_)return;let e=this.view.element,n=t.relatedTarget;(!n||!e.contains(n))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;let e=this.popC_.view.element,n=Om(t);n&&e.contains(n)||n&&n===this.view.buttonElement&&!Dd(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.view.buttonElement.focus()}};function qM(i){return Yn.isObject(i)?new Yn(i.x,i.y):new Yn}function YM(i,t){i.writeProperty("x",t.x),i.writeProperty("y",t.y)}function $M(i,t){return new Ta({assembly:pg,components:[hi(Object.assign(Object.assign({},i),i.x),t.x),hi(Object.assign(Object.assign({},i),i.y),t.y)]})}function vm(i,t){var e,n;if(!ce(i.min)||!ce(i.max))return Math.max(Math.abs((e=i.min)!==null&&e!==void 0?e:0),Math.abs((n=i.max)!==null&&n!==void 0?n:0));let s=Tm(i);return Math.max(Math.abs(s)*10,Math.abs(t)*10)}function KM(i,t){var e,n;let s=vm(xs(i,(e=i.x)!==null&&e!==void 0?e:{}),t.x),r=vm(xs(i,(n=i.y)!==null&&n!==void 0?n:{}),t.y);return Math.max(s,r)}function ZM(i){if(!("y"in i))return!1;let t=i.y;return t&&"inverted"in t?!!t.inverted:!1}var JM=Ze({id:"input-point2d",type:"input",accept:(i,t)=>{if(!Yn.isObject(i))return null;let e=pe(t,n=>Object.assign(Object.assign({},Sa(n)),{expanded:n.optional.boolean,picker:n.optional.custom(Xm),readonly:n.optional.constant(!1),x:n.optional.custom($i),y:n.optional.object(Object.assign(Object.assign({},Sa(n)),{inverted:n.optional.boolean}))}));return e?{initialValue:i,params:e}:null},binding:{reader:()=>qM,constraint:i=>$M(i.params,i.initialValue),equals:Yn.equals,writer:()=>YM},controller:i=>{var t,e;let n=i.document,s=i.value,r=i.constraint,a=[i.params.x,i.params.y];return new hd(n,{axes:s.rawValue.getComponents().map((o,l)=>{var c;return Id({constraint:r.components[l],initialValue:o,params:xs(i.params,(c=a[l])!==null&&c!==void 0?c:{})})}),expanded:(t=i.params.expanded)!==null&&t!==void 0?t:!1,invertsY:ZM(i.params),max:KM(i.params,s.rawValue),parser:di,pickerLayout:(e=i.params.picker)!==null&&e!==void 0?e:"popup",value:s,viewProps:i.viewProps})}}),Ki=class{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}getComponents(){return[this.x,this.y,this.z]}static isObject(t){if(ce(t))return!1;let e=t.x,n=t.y,s=t.z;return!(typeof e!="number"||typeof n!="number"||typeof s!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z}toObject(){return{x:this.x,y:this.y,z:this.z}}},fg={toComponents:i=>i.getComponents(),fromComponents:i=>new Ki(...i)};function jM(i){return Ki.isObject(i)?new Ki(i.x,i.y,i.z):new Ki}function QM(i,t){i.writeProperty("x",t.x),i.writeProperty("y",t.y),i.writeProperty("z",t.z)}function tS(i,t){return new Ta({assembly:fg,components:[hi(Object.assign(Object.assign({},i),i.x),t.x),hi(Object.assign(Object.assign({},i),i.y),t.y),hi(Object.assign(Object.assign({},i),i.z),t.z)]})}var eS=Ze({id:"input-point3d",type:"input",accept:(i,t)=>{if(!Ki.isObject(i))return null;let e=pe(t,n=>Object.assign(Object.assign({},Sa(n)),{readonly:n.optional.constant(!1),x:n.optional.custom($i),y:n.optional.custom($i),z:n.optional.custom($i)}));return e?{initialValue:i,params:e}:null},binding:{reader:i=>jM,constraint:i=>tS(i.params,i.initialValue),equals:Ki.equals,writer:i=>QM},controller:i=>{let t=i.value,e=i.constraint,n=[i.params.x,i.params.y,i.params.z];return new Ca(i.document,{assembly:fg,axes:t.rawValue.getComponents().map((s,r)=>{var a;return Id({constraint:e.components[r],initialValue:s,params:xs(i.params,(a=n[r])!==null&&a!==void 0?a:{})})}),parser:di,value:t,viewProps:i.viewProps})}}),Zi=class{constructor(t=0,e=0,n=0,s=0){this.x=t,this.y=e,this.z=n,this.w=s}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(t){if(ce(t))return!1;let e=t.x,n=t.y,s=t.z,r=t.w;return!(typeof e!="number"||typeof n!="number"||typeof s!="number"||typeof r!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z&&t.w===e.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}},mg={toComponents:i=>i.getComponents(),fromComponents:i=>new Zi(...i)};function nS(i){return Zi.isObject(i)?new Zi(i.x,i.y,i.z,i.w):new Zi}function iS(i,t){i.writeProperty("x",t.x),i.writeProperty("y",t.y),i.writeProperty("z",t.z),i.writeProperty("w",t.w)}function sS(i,t){return new Ta({assembly:mg,components:[hi(Object.assign(Object.assign({},i),i.x),t.x),hi(Object.assign(Object.assign({},i),i.y),t.y),hi(Object.assign(Object.assign({},i),i.z),t.z),hi(Object.assign(Object.assign({},i),i.w),t.w)]})}var rS=Ze({id:"input-point4d",type:"input",accept:(i,t)=>{if(!Zi.isObject(i))return null;let e=pe(t,n=>Object.assign(Object.assign({},Sa(n)),{readonly:n.optional.constant(!1),w:n.optional.custom($i),x:n.optional.custom($i),y:n.optional.custom($i),z:n.optional.custom($i)}));return e?{initialValue:i,params:e}:null},binding:{reader:i=>nS,constraint:i=>sS(i.params,i.initialValue),equals:Zi.equals,writer:i=>iS},controller:i=>{let t=i.value,e=i.constraint,n=[i.params.x,i.params.y,i.params.z,i.params.w];return new Ca(i.document,{assembly:mg,axes:t.rawValue.getComponents().map((s,r)=>{var a;return Id({constraint:e.components[r],initialValue:s,params:xs(i.params,(a=n[r])!==null&&a!==void 0?a:{})})}),parser:di,value:t,viewProps:i.viewProps})}});function aS(i){let t=[],e=Fd(i.options);return e&&t.push(e),new Ms(t)}var oS=Ze({id:"input-string",type:"input",accept:(i,t)=>{if(typeof i!="string")return null;let e=pe(t,n=>({readonly:n.optional.constant(!1),options:n.optional.custom(Ia)}));return e?{initialValue:i,params:e}:null},binding:{reader:i=>zm,constraint:i=>aS(i.params),writer:i=>Da},controller:i=>{let t=i.document,e=i.value,n=i.constraint,s=n&&nc(n,Ss);return s?new Kn(t,{props:new Bt({options:s.values.value("options")}),value:e,viewProps:i.viewProps}):new Es(t,{parser:r=>r,props:Bt.fromObject({formatter:ku}),value:e,viewProps:i.viewProps})},api(i){return typeof i.controller.value.rawValue!="string"?null:i.controller.valueController instanceof Kn?new wa(i.controller):null}}),Na={monitor:{defaultInterval:200,defaultRows:3}},_m=Yt("mll"),ud=class{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(_m()),e.viewProps.bindClassModifiers(this.element);let n=t.createElement("textarea");n.classList.add(_m("i")),n.style.height=`calc(var(${Wm("containerUnitSize")}) * ${e.rows})`,n.readOnly=!0,e.viewProps.bindDisabled(n),this.element.appendChild(n),this.textareaElem_=n,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){let t=this.textareaElem_,e=t.scrollTop===t.scrollHeight-t.clientHeight,n=[];this.value.rawValue.forEach(s=>{s!==void 0&&n.push(this.formatter_(s))}),t.textContent=n.join(`
`),e&&(t.scrollTop=t.scrollHeight)}onValueUpdate_(){this.update_()}},Pa=class{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new ud(t,{formatter:e.formatter,rows:e.rows,value:this.value,viewProps:this.viewProps})}},xm=Yt("sgl"),dd=class{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(xm()),e.viewProps.bindClassModifiers(this.element);let n=t.createElement("input");n.classList.add(xm("i")),n.readOnly=!0,n.type="text",e.viewProps.bindDisabled(n),this.element.appendChild(n),this.inputElement=n,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){let t=this.value.rawValue,e=t[t.length-1];this.inputElement.value=e!==void 0?this.formatter_(e):""}onValueUpdate_(){this.update_()}},Ra=class{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new dd(t,{formatter:e.formatter,value:this.value,viewProps:this.viewProps})}},lS=Ze({id:"monitor-bool",type:"monitor",accept:(i,t)=>{if(typeof i!="boolean")return null;let e=pe(t,n=>({readonly:n.required.constant(!0),rows:n.optional.number}));return e?{initialValue:i,params:e}:null},binding:{reader:i=>Vm},controller:i=>{var t;return i.value.rawValue.length===1?new Ra(i.document,{formatter:cm,value:i.value,viewProps:i.viewProps}):new Pa(i.document,{formatter:cm,rows:(t=i.params.rows)!==null&&t!==void 0?t:Na.monitor.defaultRows,value:i.value,viewProps:i.viewProps})}}),pd=class extends ws{get max(){return this.controller.valueController.props.get("max")}set max(t){this.controller.valueController.props.set("max",t)}get min(){return this.controller.valueController.props.get("min")}set min(t){this.controller.valueController.props.set("min",t)}},Yi=Yt("grl"),fd=class{constructor(t,e){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=t.createElement("div"),this.element.classList.add(Yi()),e.viewProps.bindClassModifiers(this.element),this.formatter_=e.formatter,this.props_=e.props,this.cursor_=e.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);let n=t.createElementNS(qn,"svg");n.classList.add(Yi("g")),n.style.height=`calc(var(${Wm("containerUnitSize")}) * ${e.rows})`,this.element.appendChild(n),this.svgElem_=n;let s=t.createElementNS(qn,"polyline");this.svgElem_.appendChild(s),this.lineElem_=s;let r=t.createElement("div");r.classList.add(Yi("t"),Yt("tt")()),this.element.appendChild(r),this.tooltipElem_=r,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}get graphElement(){return this.svgElem_}update_(){let{clientWidth:t,clientHeight:e}=this.element,n=this.value.rawValue.length-1,s=this.props_.get("min"),r=this.props_.get("max"),a=[];this.value.rawValue.forEach((d,u)=>{if(d===void 0)return;let m=te(u,0,n,0,t),v=te(d,s,r,e,0);a.push([m,v].join(","))}),this.lineElem_.setAttributeNS(null,"points",a.join(" "));let o=this.tooltipElem_,l=this.value.rawValue[this.cursor_.rawValue];if(l===void 0){o.classList.remove(Yi("t","a"));return}let c=te(this.cursor_.rawValue,0,n,0,t),h=te(l,s,r,e,0);o.style.left=`${c}px`,o.style.top=`${h}px`,o.textContent=`${this.formatter_(l)}`,o.classList.contains(Yi("t","a"))||(o.classList.add(Yi("t","a"),Yi("t","in")),$l(o),o.classList.remove(Yi("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}},rc=class{constructor(t,e){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.cursor_=de(-1),this.view=new fd(t,{cursor:this.cursor_,formatter:e.formatter,rows:e.rows,props:this.props,value:this.value,viewProps:this.viewProps}),!Dd(t))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{let n=new vi(this.view.element);n.emitter.on("down",this.onGraphPointerDown_),n.emitter.on("move",this.onGraphPointerMove_),n.emitter.on("up",this.onGraphPointerUp_)}}importProps(t){return gn(t,null,e=>({max:e.required.number,min:e.required.number}),e=>(this.props.set("max",e.max),this.props.set("min",e.min),!0))}exportProps(){return vn(null,{max:this.props.get("max"),min:this.props.get("min")})}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(t){let{clientWidth:e}=this.view.element;this.cursor_.rawValue=Math.floor(te(t.offsetX,0,e,0,this.value.rawValue.length))}onGraphPointerDown_(t){this.onGraphPointerMove_(t)}onGraphPointerMove_(t){if(!t.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(te(t.data.point.x,0,t.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}};function md(i){return ce(i.format)?sn(2):i.format}function cS(i){var t;return i.value.rawValue.length===1?new Ra(i.document,{formatter:md(i.params),value:i.value,viewProps:i.viewProps}):new Pa(i.document,{formatter:md(i.params),rows:(t=i.params.rows)!==null&&t!==void 0?t:Na.monitor.defaultRows,value:i.value,viewProps:i.viewProps})}function hS(i){var t,e,n;return new rc(i.document,{formatter:md(i.params),rows:(t=i.params.rows)!==null&&t!==void 0?t:Na.monitor.defaultRows,props:Bt.fromObject({max:(e=i.params.max)!==null&&e!==void 0?e:100,min:(n=i.params.min)!==null&&n!==void 0?n:0}),value:i.value,viewProps:i.viewProps})}function bm(i){return i.view==="graph"}var uS=Ze({id:"monitor-number",type:"monitor",accept:(i,t)=>{if(typeof i!="number")return null;let e=pe(t,n=>({format:n.optional.function,max:n.optional.number,min:n.optional.number,readonly:n.required.constant(!0),rows:n.optional.number,view:n.optional.string}));return e?{initialValue:i,params:e}:null},binding:{defaultBufferSize:i=>bm(i)?64:1,reader:i=>Em},controller:i=>bm(i.params)?hS(i):cS(i),api:i=>i.controller.valueController instanceof rc?new pd(i.controller):null}),dS=Ze({id:"monitor-string",type:"monitor",accept:(i,t)=>{if(typeof i!="string")return null;let e=pe(t,n=>({multiline:n.optional.boolean,readonly:n.required.constant(!0),rows:n.optional.number}));return e?{initialValue:i,params:e}:null},binding:{reader:i=>zm},controller:i=>{var t;let e=i.value;return e.rawValue.length>1||i.params.multiline?new Pa(i.document,{formatter:ku,rows:(t=i.params.rows)!==null&&t!==void 0?t:Na.monitor.defaultRows,value:e,viewProps:i.viewProps}):new Ra(i.document,{formatter:ku,value:e,viewProps:i.viewProps})}}),gd=class{constructor(){this.map_=new Map}get(t){var e;return(e=this.map_.get(t))!==null&&e!==void 0?e:null}has(t){return this.map_.has(t)}add(t,e){return this.map_.set(t,e),t.viewProps.handleDispose(()=>{this.map_.delete(t)}),e}},vd=class{constructor(t){this.target=t.target,this.reader_=t.reader,this.writer_=t.writer}read(){return this.reader_(this.target.read())}write(t){this.writer_(this.target,t)}inject(t){this.write(this.reader_(t))}};function pS(i,t){var e;let n=i.accept(t.target.read(),t.params);if(ce(n))return null;let s={target:t.target,initialValue:n.initialValue,params:n.params},r=pe(t.params,d=>({disabled:d.optional.boolean,hidden:d.optional.boolean,label:d.optional.string,tag:d.optional.string})),a=i.binding.reader(s),o=i.binding.constraint?i.binding.constraint(s):void 0,l=new vd({reader:a,target:t.target,writer:i.binding.writer(s)}),c=new fu(de(a(n.initialValue),{constraint:o,equals:i.binding.equals}),l),h=i.controller({constraint:o,document:t.document,initialValue:n.initialValue,params:n.params,value:c,viewProps:mi.create({disabled:r==null?void 0:r.disabled,hidden:r==null?void 0:r.hidden})});return new gu(t.document,{blade:vr(),props:Bt.fromObject({label:"label"in t.params?(e=r==null?void 0:r.label)!==null&&e!==void 0?e:null:t.target.key}),tag:r==null?void 0:r.tag,value:c,valueController:h})}var _d=class{constructor(t){this.target=t.target,this.reader_=t.reader}read(){return this.reader_(this.target.read())}};function fS(i,t){return t===0?new Nu:new Uu(i,t!=null?t:Na.monitor.defaultInterval)}function mS(i,t){var e,n,s;let r=i.accept(t.target.read(),t.params);if(ce(r))return null;let a={target:t.target,initialValue:r.initialValue,params:r.params},o=pe(t.params,u=>({bufferSize:u.optional.number,disabled:u.optional.boolean,hidden:u.optional.boolean,interval:u.optional.number,label:u.optional.string})),l=i.binding.reader(a),c=(n=(e=o==null?void 0:o.bufferSize)!==null&&e!==void 0?e:i.binding.defaultBufferSize&&i.binding.defaultBufferSize(r.params))!==null&&n!==void 0?n:1,h=new vu({binding:new _d({reader:l,target:t.target}),bufferSize:c,ticker:fS(t.document,o==null?void 0:o.interval)}),d=i.controller({document:t.document,params:r.params,value:h,viewProps:mi.create({disabled:o==null?void 0:o.disabled,hidden:o==null?void 0:o.hidden})});return d.viewProps.bindDisabled(h.ticker),d.viewProps.handleDispose(()=>{h.ticker.dispose()}),new _u(t.document,{blade:vr(),props:Bt.fromObject({label:"label"in t.params?(s=o==null?void 0:o.label)!==null&&s!==void 0?s:null:t.target.key}),value:h,valueController:d})}var xd=class{constructor(t){this.pluginsMap_={blades:[],inputs:[],monitors:[]},this.apiCache_=t}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(t,e){if(!Ow(e.core))throw Be.notCompatible(t,e.id);e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput_(t,e,n){return this.pluginsMap_.inputs.reduce((s,r)=>s!=null?s:pS(r,{document:t,target:e,params:n}),null)}createMonitor_(t,e,n){return this.pluginsMap_.monitors.reduce((s,r)=>s!=null?s:mS(r,{document:t,params:n,target:e}),null)}createBinding(t,e,n){let s=e.read();if(ce(s))throw new Be({context:{key:e.key},type:"nomatchingcontroller"});let r=this.createInput_(t,e,n);if(r)return r;let a=this.createMonitor_(t,e,n);if(a)return a;throw new Be({context:{key:e.key},type:"nomatchingcontroller"})}createBlade(t,e){let n=this.pluginsMap_.blades.reduce((s,r)=>s!=null?s:Rw(r,{document:t,params:e}),null);if(!n)throw new Be({type:"nomatchingview",context:{params:e}});return n}createInputBindingApi_(t){let e=this.pluginsMap_.inputs.reduce((n,s)=>{var r,a;return n||((a=(r=s.api)===null||r===void 0?void 0:r.call(s,{controller:t}))!==null&&a!==void 0?a:null)},null);return this.apiCache_.add(t,e!=null?e:new ws(t))}createMonitorBindingApi_(t){let e=this.pluginsMap_.monitors.reduce((n,s)=>{var r,a;return n||((a=(r=s.api)===null||r===void 0?void 0:r.call(s,{controller:t}))!==null&&a!==void 0?a:null)},null);return this.apiCache_.add(t,e!=null?e:new ws(t))}createBindingApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(dw(t))return this.createInputBindingApi_(t);if(vw(t))return this.createMonitorBindingApi_(t);throw Be.shouldNeverHappen()}createApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(uw(t))return this.createBindingApi(t);let e=this.pluginsMap_.blades.reduce((n,s)=>n!=null?n:s.api({controller:t,pool:this}),null);if(!e)throw Be.shouldNeverHappen();return this.apiCache_.add(t,e)}},gS=new gd;function vS(){let i=new xd(gS);return[JM,eS,rS,oS,XM,GM,zM,OM,Bw,lS,dS,uS,xw,Cw,km].forEach(t=>{i.register("core",t)}),i}var bd=class extends pi{constructor(t){super(t),this.emitter_=new xe,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new ys(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){let n=e.bind(this);return this.emitter_.on(t,s=>{n(s)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}},yd=class extends pi{},wd=class extends pi{constructor(t){super(t),this.emitter_=new xe,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new ys(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){let n=e.bind(this);return this.emitter_.on(t,s=>{n(s)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}},Md=class extends pi{constructor(t){super(t),this.emitter_=new xe,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new ys(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get formatter(){return this.controller.valueController.props.get("formatter")}set formatter(t){this.controller.valueController.props.set("formatter",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){let n=e.bind(this);return this.emitter_.on(t,s=>{n(s)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}},_S=(function(){return{id:"list",type:"blade",core:gr,accept(i){let t=pe(i,e=>({options:e.required.custom(Ia),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string}));return t?{params:t}:null},controller(i){let t=new Ss(Od(i.params.options)),e=de(i.params.value,{constraint:t}),n=new Kn(i.document,{props:new Bt({options:t.values.value("options")}),value:e,viewProps:i.viewProps});return new fi(i.document,{blade:i.blade,props:Bt.fromObject({label:i.params.label}),value:e,valueController:n})},api(i){return!(i.controller instanceof fi)||!(i.controller.valueController instanceof Kn)?null:new bd(i.controller)}}})(),Sd=class extends tc{constructor(t,e){super(t,e)}get element(){return this.controller.view.element}},Ed=class extends ba{constructor(t,e){super(t,{expanded:e.expanded,blade:e.blade,props:e.props,root:!0,viewProps:e.viewProps})}},ym=Yt("spr"),Ad=class{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(ym()),e.viewProps.bindClassModifiers(this.element);let n=t.createElement("hr");n.classList.add(ym("r")),this.element.appendChild(n)}},ac=class extends dr{constructor(t,e){super(Object.assign(Object.assign({},e),{view:new Ad(t,{viewProps:e.viewProps})}))}},xS={id:"separator",type:"blade",core:gr,accept(i){let t=pe(i,e=>({view:e.required.constant("separator")}));return t?{params:t}:null},controller(i){return new ac(i.document,{blade:i.blade,viewProps:i.viewProps})},api(i){return i.controller instanceof ac?new yd(i.controller):null}},bS={id:"slider",type:"blade",core:gr,accept(i){let t=pe(i,e=>({max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number}));return t?{params:t}:null},controller(i){var t,e;let n=(t=i.params.value)!==null&&t!==void 0?t:0,s=new bs({max:i.params.max,min:i.params.min}),r=de(n,{constraint:s}),a=new pr(i.document,Object.assign(Object.assign({},Hm({formatter:(e=i.params.format)!==null&&e!==void 0?e:Zy,keyScale:de(1),max:s.values.value("max"),min:s.values.value("min"),pointerScale:Cm(i.params,n)})),{parser:di,value:r,viewProps:i.viewProps}));return new fi(i.document,{blade:i.blade,props:Bt.fromObject({label:i.params.label}),value:r,valueController:a})},api(i){return!(i.controller instanceof fi)||!(i.controller.valueController instanceof pr)?null:new wd(i.controller)}},yS=(function(){return{id:"text",type:"blade",core:gr,accept(i){let t=pe(i,e=>({parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string}));return t?{params:t}:null},controller(i){var t;let e=de(i.params.value),n=new Es(i.document,{parser:i.params.parse,props:Bt.fromObject({formatter:(t=i.params.format)!==null&&t!==void 0?t:(s=>String(s))}),value:e,viewProps:i.viewProps});return new fi(i.document,{blade:i.blade,props:Bt.fromObject({label:i.params.label}),value:e,valueController:n})},api(i){return!(i.controller instanceof fi)||!(i.controller.valueController instanceof Es)?null:new Md(i.controller)}}})();function wS(i){let t=i.createElement("div");return t.classList.add(Yt("dfw")()),i.body&&i.body.appendChild(t),t}function MS(i,t,e){if(i.querySelector(`style[data-tp-style=${t}]`))return;let n=i.createElement("style");n.dataset.tpStyle=t,n.textContent=e,i.head.appendChild(n)}var oc=class extends Sd{constructor(t){var e,n;let s=t!=null?t:{},r=(e=s.document)!==null&&e!==void 0?e:sw(),a=vS(),o=new Ed(r,{expanded:s.expanded,blade:vr(),props:Bt.fromObject({title:s.title}),viewProps:mi.create()});super(o,a),this.pool_=a,this.containerElem_=(n=s.container)!==null&&n!==void 0?n:wS(r),this.containerElem_.appendChild(this.element),this.doc_=r,this.usesDefaultWrapper_=!s.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw Be.alreadyDisposed();return this.doc_}dispose(){let t=this.containerElem_;if(!t)throw Be.alreadyDisposed();if(this.usesDefaultWrapper_){let e=t.parentElement;e&&e.removeChild(t)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(t){t.css&&MS(this.document,`plugin-${t.id}`,t.css),("plugin"in t?[t.plugin]:"plugins"in t?t.plugins:[]).forEach(n=>{this.pool_.register(t.id,n)})}setUpDefaultPlugins_(){this.registerPlugin({id:"default",css:'.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{display:block;height:16px;inset:0;margin:auto;opacity:0;position:absolute;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{inset:0;position:absolute}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;inset:0;position:absolute}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);content:"";display:block;inset:0;position:absolute}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin:auto;position:absolute}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin-bottom:auto;margin-top:auto;position:absolute}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);content:"";inset:0 0 2px;pointer-events:none;position:absolute}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}',plugins:[_S,xS,bS,km,yS]})}},P1=new Ql("4.0.5");var SS=[new Uint8Array([0,4]),new Uint8Array([1,5]),new Uint8Array([2,6]),new Uint8Array([3,7]),new Uint8Array([0,2]),new Uint8Array([1,3]),new Uint8Array([4,6]),new Uint8Array([5,7]),new Uint8Array([0,1]),new Uint8Array([2,3]),new Uint8Array([4,5]),new Uint8Array([6,7])],xr=[new Uint8Array([0,0,0]),new Uint8Array([0,0,1]),new Uint8Array([0,1,0]),new Uint8Array([0,1,1]),new Uint8Array([1,0,0]),new Uint8Array([1,0,1]),new Uint8Array([1,1,0]),new Uint8Array([1,1,1])];var xg=class{constructor(){O(this,"value");this.value=0}};function bg(i,t,e,n,s,r){let a=0;return i>t&&i>e?(s<i&&(a|=2),r<i&&(a|=1)):t>e?(n<t&&(a|=4),r<t&&(a|=1)):(n<e&&(a|=4),s<e&&(a|=2)),a}var ES=[new Uint8Array([4,2,1]),new Uint8Array([5,3,8]),new Uint8Array([6,8,3]),new Uint8Array([7,8,8]),new Uint8Array([8,6,5]),new Uint8Array([8,7,8]),new Uint8Array([8,8,7]),new Uint8Array([8,8,8])];function Ji(i,t,e,n){let s,r;return t<e?(s=t,r=0):(s=e,r=1),n<s&&(r=2),ES[i][r]}var AS=new P,gg=new Ce,vg=new Ce,_g=new Ui;function yg(i,t,e){let n=gg.min.set(0,0,0),s=gg.max.subVectors(i.max,i.min),r=i.getDimensions(vg.min),a=vg.max.copy(r).multiplyScalar(.5),o=_g.origin.copy(t.origin),l=_g.direction.copy(t.direction);o.sub(i.getCenter(AS)).add(a),e.value=0,l.x<0?(o.x=r.x-o.x,l.x=-l.x,e.value|=4):l.x===0&&(l.x=Number.EPSILON),l.y<0?(o.y=r.y-o.y,l.y=-l.y,e.value|=2):l.y===0&&(l.y=Number.EPSILON),l.z<0?(o.z=r.z-o.z,l.z=-l.z,e.value|=1):l.z===0&&(l.z=Number.EPSILON);let c=1/l.x,h=1/l.y,d=1/l.z,u=(n.x-o.x)*c,m=(s.x-o.x)*c,v=(n.y-o.y)*h,b=(s.y-o.y)*h,f=(n.z-o.z)*d,p=(s.z-o.z)*d;return Math.max(u,v,f)<Math.min(m,b,p)?[u,v,f,m,b,p]:null}var wg=class extends Bn{constructor(t=null){super();O(this,"octree");this.name="OctreeHelper",this.octree=t,this.update()}createLineSegments(t,e){let n=t[Symbol.iterator](),s=Math.pow(2,16)/8-1,r=new Bn,a=new ps({color:16777215*Math.random()});for(let o=0,l=0,c=Math.ceil(e/s);c>0;--c){l+=e<s?e:s,e-=s;let h=l*8,d=new Uint16Array(h*3),u=new Float32Array(h*3);for(let v=0,b=0,f=n.next();f.done!==!0&&o<l;){let p=f.value,S=p.min,T=p.max;for(let y=0;y<12;++y){let E=SS[y];d[b++]=v+E[0],d[b++]=v+E[1]}for(let y=0;y<8;++y,++v){let E=xr[y];u[v*3]=E[0]===0?S.x:T.x,u[v*3+1]=E[1]===0?S.y:T.y,u[v*3+2]=E[2]===0?S.z:T.z}++o<l&&(f=n.next())}let m=new tn;m.setIndex(new Ve(d,1)),m.setAttribute("position",new Ve(u,3)),r.add(new er(m,a))}this.add(r)}update(){var e,n;this.dispose();let t=this.octree!==null?this.octree.getDepth():-1;for(let s=0;s<=t;++s){let r=(n=(e=this.octree)==null?void 0:e.findNodesByLevel(s))!=null?n:[];this.createLineSegments(r,r.length)}}dispose(){let t=this.children;for(let e=0,n=t.length;e<n;++e){let s=t[e],r=s.children;for(let a=0,o=r.length;a<o;++a){let l=r[a];if(l.geometry.dispose(),Array.isArray(l.material))for(let c of l.material)c.dispose();else l.material.dispose()}for(;r.length>0;)s.remove(r[0])}for(;t.length>0;)this.remove(t[0])}};var qd=(i=>(i.FIRST_PERSON="first-person",i.THIRD_PERSON="third-person",i))(qd||{});var TS=class{constructor(i){O(this,"controls");this.controls=i}execute(i,t){let e=this.controls.settings.pointer.behaviour;(t.type==="mousedown"||t.type==="mouseup")&&e!=="default"?this.controls.setPointerLocked():this.controls.setRotationEnabled(i)}},Mg=class{constructor(i,t){O(this,"rotationManager");O(this,"zoomIn");this.rotationManager=i,this.zoomIn=t}execute(i){i&&this.rotationManager.zoom(this.zoomIn?-1:1)}};var Tg=new Map([[8,"Backspace"],[9,"Tab"],[13,"Enter"],[16,"ShiftLeft"],[17,"ControlLeft"],[18,"AltLeft"],[19,"Pause"],[20,"CapsLock"],[27,"Escape"],[32,"Space"],[33,"PageUp"],[34,"PageDown"],[35,"End"],[36,"Home"],[37,"ArrowLeft"],[38,"ArrowUp"],[39,"ArrowRight"],[40,"ArrowDown"],[45,"Insert"],[46,"Delete"],[48,"Digit0"],[49,"Digit1"],[50,"Digit2"],[51,"Digit3"],[52,"Digit4"],[53,"Digit5"],[54,"Digit6"],[55,"Digit7"],[56,"Digit8"],[57,"Digit9"],[65,"KeyA"],[66,"KeyB"],[67,"KeyC"],[68,"KeyD"],[69,"KeyE"],[70,"KeyF"],[71,"KeyG"],[72,"KeyH"],[73,"KeyI"],[74,"KeyJ"],[75,"KeyK"],[76,"KeyL"],[77,"KeyM"],[78,"KeyN"],[79,"KeyO"],[80,"KeyP"],[81,"KeyQ"],[82,"KeyR"],[83,"KeyS"],[84,"KeyT"],[85,"KeyU"],[86,"KeyV"],[87,"KeyW"],[88,"KeyX"],[89,"KeyY"],[90,"KeyZ"],[91,"MetaLeft"],[92,"MetaRight"],[93,"MediaSelect"],[96,"Numpad0"],[97,"Numpad1"],[98,"Numpad2"],[99,"Numpad3"],[100,"Numpad4"],[101,"Numpad5"],[102,"Numpad6"],[103,"Numpad7"],[104,"Numpad8"],[105,"Numpad9"],[106,"NumpadMultiply"],[107,"NumpadAdd"],[109,"NumpadSubtract"],[110,"NumpadDecimal"],[111,"NumpadDivide"],[112,"F1"],[113,"F2"],[114,"F3"],[115,"F4"],[116,"F5"],[117,"F6"],[118,"F7"],[119,"F8"],[120,"F9"],[121,"F10"],[122,"F11"],[123,"F12"],[144,"NumLock"],[145,"ScrollLock"],[186,"Semicolon"],[187,"Equal"],[188,"Comma"],[189,"Minus"],[190,"Period"],[191,"Slash"],[192,"Backquote"],[219,"BracketLeft"],[221,"BracketRight"],[220,"Backslash"]]);var Cg=1/1e3,En=class{constructor(i=Number.POSITIVE_INFINITY){O(this,"maxSpeed");O(this,"velocity");this.maxSpeed=i,this.velocity=0}resetVelocity(){this.velocity=0}interpolate(i,t,e,n,s,r){let a=this.maxSpeed*Math.max(e,1e-4),o=Math.min(Math.max(i-t,-a),a),l=i-o,c=this.velocity,h=(c+n*o)*r;this.velocity=(c-n*h)*s;let d=l+(o+h)*s;return Math.abs(o)<1e-6?(d=t,this.velocity=0):t-i>0==d>t&&(this.velocity=(d-t)/r,d=t),d}static calculateOmega(i){return 2/Math.max(i,1e-4)}static calculateExp(i,t){let e=i*t,n=e*e;return 1/(1+e+.48*n+.235*e*n)}},ji=2*Math.PI,Sg=new P,hc=new P,Hd=new $t,Cs,CS=(Cs=class extends Wt{constructor(e,n,s,r){super();O(this,"_position");O(this,"_quaternion");O(this,"_target");O(this,"settings");O(this,"spherical0");O(this,"spherical1");O(this,"scalarDampers");O(this,"timestamp");O(this,"updateEvent");this._position=e,this._quaternion=n,this._target=s,this.settings=r,this.spherical0=new ki,this.spherical1=new ki,this.timestamp=0,this.updateEvent={type:Cs.EVENT_UPDATE},this.scalarDampers=Object.freeze([new En,new En,new En])}get position(){return this._position}set position(e){this._position=e}get quaternion(){return this._quaternion}set quaternion(e){this._quaternion=e}get target(){return this._target}set target(e){this._target=e}get radius(){return this.spherical0.radius}resetVelocity(){this.spherical1.copy(this.spherical0);for(let e of this.scalarDampers)e.resetVelocity()}restrictAngles(){let e=this.spherical1,n=this.settings.rotation,s=n.minAzimuthalAngle,r=n.maxAzimuthalAngle,a=n.minPolarAngle,o=n.maxPolarAngle;return e.theta=Math.min(Math.max(e.theta,s),r),e.phi=Math.min(Math.max(e.phi,a),o),(e.phi===0||e.phi===Math.PI)&&e.makeSafe(),this}restrictRadius(){let e=this.spherical1,n=this.settings.zoom,s=n.minDistance,r=n.maxDistance;return e.radius=Math.min(Math.max(e.radius,s),r),this}restrictSpherical(){return this.restrictRadius().restrictAngles()}updateSpherical(){if(this.settings.general.mode==="third-person"){let e=this.settings.rotation.pivotOffset;hc.subVectors(Sg.subVectors(this.position,e),this.target),this.spherical1.setFromVector3(hc)}else this.spherical1.setFromVector3(this.target);return this.restrictSpherical(),this.spherical0.copy(this.spherical1),this}updatePosition(){if(this.settings.general.mode==="third-person"){let e=this.settings.rotation.pivotOffset;this.position.setFromSpherical(this.spherical0).add(this.target).add(e)}return this}updateQuaternion(){let e=this.settings,n=e.rotation,s=this.target,r=Sg.copy(n.up),a=this.spherical0.phi%ji;return(a<0&&a>-Math.PI||a>Math.PI&&a<ji)&&r.negate(),e.general.mode==="third-person"?Hd.lookAt(hc.subVectors(this.position,s),n.pivotOffset,r):Hd.lookAt(hc.set(0,0,0),s.setFromSpherical(this.spherical0),r),this.quaternion.setFromRotationMatrix(Hd),this.dispatchEvent(this.updateEvent),this}adjustSpherical(e,n){let s=this.spherical1,r=this.settings,a=r.rotation,o=a.invertedY,l=r.general.mode==="third-person",c=(l||o)&&!(l&&o);return s.theta=a.invertedX?s.theta+e:s.theta-e,s.phi=c?s.phi-n:s.phi+n,this.restrictAngles()}zoom(e){let n=this.spherical1,s=this.settings,r=s.zoom;if(r.enabled&&s.general.mode==="third-person"){let a=e*r.sensitivity;n.radius=r.inverted?n.radius-a:n.radius+a,this.restrictRadius()}return this}lookAt(e){return this.settings.general.mode==="third-person"?this.target.copy(e).sub(this.settings.rotation.pivotOffset):this.target.subVectors(e,this.position).normalize(),this}getViewDirection(e){let n=this.settings.general.mode==="third-person";return e.setFromSpherical(this.spherical0).normalize(),n?e.negate():e}getProjectedViewDirection(e){let n=this.settings.general.mode==="third-person";return e.setFromSpherical(this.spherical1).normalize(),n?e.negate():e}update(e){let n=this.spherical0,s=this.spherical1;if(n.radius===s.radius&&n.theta===s.theta&&n.phi===s.phi)Math.abs(n.theta)>=ji&&(n.theta%=ji,s.theta%=ji),Math.abs(n.phi)>=ji&&(n.phi%=ji,s.phi%=ji);else{let a=this.settings,o=this.scalarDampers,l=(e-this.timestamp)*Cg;if(a.rotation.damping>0){let c=a.rotation.damping,h=En.calculateOmega(c),d=En.calculateExp(h,l);n.theta=o[0].interpolate(n.theta,s.theta,c,h,d,l),n.phi=o[1].interpolate(n.phi,s.phi,c,h,d,l)}else n.theta=s.theta,n.phi=s.phi;if(a.zoom.damping>0){let c=a.zoom.damping,h=En.calculateOmega(c),d=En.calculateExp(h,l);n.radius=o[2].interpolate(n.radius,s.radius,c,h,d,l)}else n.radius=s.radius;this.updatePosition().updateQuaternion()}this.timestamp=e}},O(Cs,"EVENT_UPDATE","update"),Cs);var Eg=class Pg{constructor(){O(this,"defaultActions");O(this,"actions");this.defaultActions=new Map,this.actions=new Map}reset(){return this.actions=new Map(this.defaultActions),this}setDefault(t){return this.defaultActions=t,this.reset()}clearDefault(){return this.defaultActions.clear(),this}clear(){return this.actions.clear(),this}copy(t){return this.defaultActions=new Map(t.defaultActions),this.actions=new Map(t.actions),this}clone(){return new Pg().copy(this)}fromJSON(t){return t!==void 0&&(this.defaultActions=new Map(t.defaultActions),this.actions=new Map(t.actions)),this}has(t){return this.actions.has(t)}get(t){return this.actions.get(t)}set(t,e){return this.actions.set(t,e),this}delete(t){return this.actions.delete(t)}toJSON(){return{defaultActions:[...this.defaultActions],actions:[...this.actions]}}},Qi,PS=(Qi=class extends Wt{constructor(){super();O(this,"_mode");O(this,"_previousMode");this._mode="first-person",this._previousMode=this._mode}get previousMode(){return this._previousMode}get mode(){return this._mode}set mode(e){this._mode!==e&&(this._mode=e,this.dispatchEvent({type:Qi.EVENT_CHANGE}),this._previousMode=e)}copy(e){return this.mode=e.mode,this}clone(){return new Qi().copy(this)}fromJSON(e){return this.mode=e.mode,this}toJSON(){return{mode:this.mode}}},O(Qi,"EVENT_CHANGE","change"),Qi),_i,RS=(_i=class extends Wt{constructor(){super();O(this,"_behaviour");O(this,"_sensitivity");this._behaviour="default",this._sensitivity=.001}get behaviour(){return this._behaviour}set behaviour(e){this._behaviour=e,this.dispatchEvent({type:_i.EVENT_CHANGE})}get sensitivity(){return this._sensitivity}set sensitivity(e){this._sensitivity=e,this.dispatchEvent({type:_i.EVENT_CHANGE})}copy(e){return this.behaviour=e.behaviour,this.sensitivity=e.sensitivity,this}clone(){return new _i().copy(this)}fromJSON(e){return this.behaviour=e.behaviour,this.sensitivity=e.sensitivity,this}toJSON(){return{behaviour:this.behaviour,sensitivity:this.sensitivity}}},O(_i,"EVENT_CHANGE","change"),_i),W1=Object.freeze(new P(1,0,0)),IS=Object.freeze(new P(0,1,0)),X1=Object.freeze(new P(0,0,1)),Pe,DS=(Pe=class extends Wt{constructor(){super();O(this,"_enabled");O(this,"_up");O(this,"_pivotOffset");O(this,"_minAzimuthalAngle");O(this,"_maxAzimuthalAngle");O(this,"_minPolarAngle");O(this,"_maxPolarAngle");O(this,"_invertedX");O(this,"_invertedY");O(this,"_sensitivityX");O(this,"_sensitivityY");O(this,"_damping");this._enabled=!0,this._up=new P,this._up.copy(IS),this._pivotOffset=new P,this._minAzimuthalAngle=Number.NEGATIVE_INFINITY,this._maxAzimuthalAngle=Number.POSITIVE_INFINITY,this._minPolarAngle=0,this._maxPolarAngle=Math.PI,this._invertedX=!1,this._invertedY=!1,this._sensitivityX=1,this._sensitivityY=1,this._damping=0}get enabled(){return this._enabled}set enabled(e){this._enabled=e,this.dispatchEvent({type:Pe.EVENT_CHANGE})}get up(){return this._up}set up(e){this._up=e,this.dispatchEvent({type:Pe.EVENT_CHANGE})}get pivotOffset(){return this._pivotOffset}set pivotOffset(e){this._pivotOffset=e,this.dispatchEvent({type:Pe.EVENT_CHANGE})}get minAzimuthalAngle(){return this._minAzimuthalAngle}set minAzimuthalAngle(e){this._minAzimuthalAngle=e,this.dispatchEvent({type:Pe.EVENT_CHANGE})}get maxAzimuthalAngle(){return this._maxAzimuthalAngle}set maxAzimuthalAngle(e){this._maxAzimuthalAngle=e,this.dispatchEvent({type:Pe.EVENT_CHANGE})}get minPolarAngle(){return this._minPolarAngle}set minPolarAngle(e){this._minPolarAngle=e,this.dispatchEvent({type:Pe.EVENT_CHANGE})}get maxPolarAngle(){return this._maxPolarAngle}set maxPolarAngle(e){this._maxPolarAngle=e,this.dispatchEvent({type:Pe.EVENT_CHANGE})}get invertedX(){return this._invertedX}set invertedX(e){this._invertedX=e,this.dispatchEvent({type:Pe.EVENT_CHANGE})}get invertedY(){return this._invertedY}set invertedY(e){this._invertedY=e,this.dispatchEvent({type:Pe.EVENT_CHANGE})}get sensitivityX(){return this._sensitivityX}set sensitivityX(e){this._sensitivityX=e,this.dispatchEvent({type:Pe.EVENT_CHANGE})}get sensitivityY(){return this._sensitivityY}set sensitivityY(e){this._sensitivityY=e,this.dispatchEvent({type:Pe.EVENT_CHANGE})}set sensitivity(e){this._sensitivityX=this._sensitivityY=e,this.dispatchEvent({type:Pe.EVENT_CHANGE})}get damping(){return this._damping}set damping(e){this._damping=e,this.dispatchEvent({type:Pe.EVENT_CHANGE})}copy(e){return this.up.copy(e.up),this.pivotOffset.copy(e.pivotOffset),this.minAzimuthalAngle=e.minAzimuthalAngle,this.maxAzimuthalAngle=e.maxAzimuthalAngle,this.minPolarAngle=e.minPolarAngle,this.maxPolarAngle=e.maxPolarAngle,this.invertedX=e.invertedX,this.invertedY=e.invertedY,this.sensitivityX=e.sensitivityX,this.sensitivityY=e.sensitivityY,this.damping=e.damping,this}clone(){return new Pe().copy(this)}fromJSON(e){var n,s,r,a;return this.enabled=e.enabled,this.up.copy(e.up),this.pivotOffset.copy(e.pivotOffset),this.minAzimuthalAngle=(n=e.minAzimuthalAngle)!=null?n:Number.NEGATIVE_INFINITY,this.maxAzimuthalAngle=(s=e.maxAzimuthalAngle)!=null?s:Number.POSITIVE_INFINITY,this.minPolarAngle=(r=e.minPolarAngle)!=null?r:Number.NEGATIVE_INFINITY,this.maxPolarAngle=(a=e.maxPolarAngle)!=null?a:Number.POSITIVE_INFINITY,this.invertedX=e.invertedX,this.invertedY=e.invertedY,this.sensitivityX=e.sensitivityX,this.sensitivityY=e.sensitivityY,this.damping=e.damping,this}toJSON(){return{enabled:this.enabled,up:this.up,pivotOffset:this.pivotOffset,minAzimuthalAngle:this.minAzimuthalAngle,maxAzimuthalAngle:this.maxAzimuthalAngle,minPolarAngle:this.minPolarAngle,maxPolarAngle:this.maxPolarAngle,invertedX:this.invertedX,invertedY:this.invertedY,sensitivityX:this.sensitivityX,sensitivityY:this.sensitivityY,damping:this.damping}}},O(Pe,"EVENT_CHANGE","change"),Pe),An,LS=(An=class extends Wt{constructor(){super();O(this,"_enabled");O(this,"_sensitivity");O(this,"_boostMultiplier");O(this,"_axisWeights");O(this,"_damping");this._enabled=!0,this._sensitivity=1,this._boostMultiplier=2,this._axisWeights=new P(1,1,1),this._damping=0}get enabled(){return this._enabled}set enabled(e){this._enabled=e,this.dispatchEvent({type:An.EVENT_CHANGE})}get sensitivity(){return this._sensitivity}set sensitivity(e){this._sensitivity=e,this.dispatchEvent({type:An.EVENT_CHANGE})}get boostMultiplier(){return this._boostMultiplier}set boostMultiplier(e){this._boostMultiplier=Math.max(e,1),this.dispatchEvent({type:An.EVENT_CHANGE})}get axisWeights(){return this._axisWeights}set axisWeights(e){this._axisWeights=e,this.dispatchEvent({type:An.EVENT_CHANGE})}get damping(){return this._damping}set damping(e){this._damping=e,this.dispatchEvent({type:An.EVENT_CHANGE})}copy(e){return this.enabled=e.enabled,this.sensitivity=e.sensitivity,this.boostMultiplier=e.boostMultiplier,this.damping=e.damping,this}clone(){return new An().copy(this)}fromJSON(e){return this.enabled=e.enabled,this.sensitivity=e.sensitivity,this.boostMultiplier=e.boostMultiplier,this.damping=e.damping,e.axisWeights!==void 0&&this.axisWeights.copy(e.axisWeights),this}toJSON(){return{enabled:this.enabled,sensitivity:this.sensitivity,boostMultiplier:this.boostMultiplier,axisWeights:this.axisWeights,damping:this.damping}}},O(An,"EVENT_CHANGE","change"),An),rn,NS=(rn=class extends Wt{constructor(){super();O(this,"_enabled");O(this,"_inverted");O(this,"_minDistance");O(this,"_maxDistance");O(this,"_sensitivity");O(this,"_damping");this._enabled=!0,this._inverted=!1,this._minDistance=1e-6,this._maxDistance=Number.POSITIVE_INFINITY,this._sensitivity=1,this._damping=0}get enabled(){return this._enabled}set enabled(e){this._enabled=e,this.dispatchEvent({type:rn.EVENT_CHANGE})}get inverted(){return this._inverted}set inverted(e){this._inverted=e,this.dispatchEvent({type:rn.EVENT_CHANGE})}get minDistance(){return this._minDistance}set minDistance(e){this._minDistance=Math.min(Math.max(e,1e-6),Number.POSITIVE_INFINITY),this.dispatchEvent({type:rn.EVENT_CHANGE})}get maxDistance(){return this._maxDistance}set maxDistance(e){this._maxDistance=Math.min(Math.max(e,this._minDistance),Number.POSITIVE_INFINITY),this.dispatchEvent({type:rn.EVENT_CHANGE})}setRange(e,n){this._minDistance=e,this._maxDistance=n,this.dispatchEvent({type:rn.EVENT_CHANGE})}get sensitivity(){return this._sensitivity}set sensitivity(e){this._sensitivity=e,this.dispatchEvent({type:rn.EVENT_CHANGE})}get damping(){return this._damping}set damping(e){this._damping=e,this.dispatchEvent({type:rn.EVENT_CHANGE})}copy(e){return this.enabled=e.enabled,this.inverted=e.inverted,this.minDistance=e.minDistance,this.maxDistance=e.maxDistance,this.sensitivity=e.sensitivity,this.damping=e.damping,this}clone(){return new rn().copy(this)}fromJSON(e){return this.enabled=e.enabled,this.inverted=e.inverted,this.minDistance=e.minDistance,this.maxDistance=e.maxDistance||Number.POSITIVE_INFINITY,this.sensitivity=e.sensitivity,this.damping=e.damping,this}toJSON(){return{enabled:this.enabled,inverted:this.inverted,minDistance:this.minDistance,maxDistance:this.maxDistance,sensitivity:this.sensitivity,damping:this.damping}}},O(rn,"EVENT_CHANGE","change"),rn),an,Yd=(an=class extends Wt{constructor(){super();O(this,"keyBindings");O(this,"pointerBindings");O(this,"general");O(this,"pointer");O(this,"rotation");O(this,"translation");O(this,"zoom");this.keyBindings=new Eg,this.keyBindings.setDefault(new Map([["KeyW",0],["KeyA",1],["KeyS",2],["KeyD",3],["ArrowUp",0],["ArrowLeft",1],["ArrowDown",2],["ArrowRight",3],["KeyX",4],["Space",5],["PageDown",6],["PageUp",7],["ShiftLeft",8]])),this.pointerBindings=new Eg,this.pointerBindings.setDefault(new Map([[0,9]])),this.general=new PS,this.pointer=new RS,this.rotation=new DS,this.translation=new LS,this.zoom=new NS,this.general.addEventListener(an.EVENT_CHANGE,e=>this.dispatchEvent(e)),this.pointer.addEventListener(an.EVENT_CHANGE,e=>this.dispatchEvent(e)),this.rotation.addEventListener(an.EVENT_CHANGE,e=>this.dispatchEvent(e)),this.translation.addEventListener(an.EVENT_CHANGE,e=>this.dispatchEvent(e)),this.zoom.addEventListener(an.EVENT_CHANGE,e=>this.dispatchEvent(e))}copy(e){return this.keyBindings.copy(e.keyBindings),this.pointerBindings.copy(e.pointerBindings),this.general.copy(e.general),this.pointer.copy(e.pointer),this.rotation.copy(e.rotation),this.translation.copy(e.translation),this.zoom.copy(e.zoom),this.dispatchEvent({type:an.EVENT_CHANGE}),this}clone(){return new an().copy(this)}fromJSON(e){let n=JSON.parse(e);return this.keyBindings.fromJSON(n.keyBindings),this.pointerBindings.fromJSON(n.pointerBindings),this.general.fromJSON(n.general),this.pointer.fromJSON(n.pointer),this.rotation.fromJSON(n.rotation),this.translation.fromJSON(n.translation),this.zoom.fromJSON(n.zoom),this.dispatchEvent({type:an.EVENT_CHANGE}),this}toBlob(){return new Blob([JSON.stringify(this)],{type:"text/json"})}toJSON(){return{keyBindings:this.keyBindings,pointerBindings:this.pointerBindings,general:this.general,pointer:this.pointer,rotation:this.rotation,translation:this.translation,zoom:this.zoom}}},O(an,"EVENT_CHANGE","change"),an),Wd=new P,uc=new Ht,Ps,US=(Ps=class extends Wt{constructor(e=new P,n=new Se,s=new P,r=new Yd){super();O(this,"_domElement");O(this,"rotationManager");O(this,"strategies");O(this,"dragging");O(this,"_enabled");O(this,"settings");this._domElement=null,this._enabled=!1,this.dragging=!1,this.settings=r,r.addEventListener("change",a=>this.handleEvent(a)),this.rotationManager=new CS(e,n,s,r),this.rotationManager.addEventListener(Ps.EVENT_UPDATE,a=>this.dispatchEvent(a)),this.strategies=new Map([[6,new Mg(this.rotationManager,!1)],[7,new Mg(this.rotationManager,!0)],[9,new TS(this)]])}get domElement(){return this._domElement}set domElement(e){this._domElement=e;let n=this.enabled;this.dispose(),this.enabled=n}get position(){return this.rotationManager.position}set position(e){this.rotationManager.position=e}get quaternion(){return this.rotationManager.quaternion}set quaternion(e){this.rotationManager.quaternion=e}get target(){return this.rotationManager.target}set target(e){this.rotationManager.target=e}lookAt(e,n,s){return e instanceof P?this.rotationManager.lookAt(e):this.rotationManager.lookAt(Wd.set(e,n,s)),this}getViewDirection(e){return this.rotationManager.getViewDirection(e)}getProjectedViewDirection(e){return this.rotationManager.getProjectedViewDirection(e)}get enabled(){return this._enabled}set enabled(e){if(this.domElement===null||typeof document=="undefined")return;let n=this.domElement;e&&!this._enabled?(n.style.touchAction="none",document.addEventListener("pointerlockchange",this),document.addEventListener("pointerlockerror",this),document.addEventListener("visibilitychange",this),n.addEventListener("keyup",this),n.addEventListener("keydown",this),n.addEventListener("mousedown",this),n.addEventListener("mouseup",this),n.addEventListener("pointerdown",this),n.addEventListener("pointerup",this),n.addEventListener("pointercancel",this),n.addEventListener("wheel",this,{passive:!0})):!e&&this._enabled&&(n.style.touchAction="",document.removeEventListener("pointerlockchange",this),document.removeEventListener("pointerlockerror",this),document.removeEventListener("visibilitychange",this),n.removeEventListener("keyup",this),n.removeEventListener("keydown",this),n.removeEventListener("mousedown",this),n.removeEventListener("mouseup",this),n.removeEventListener("pointerdown",this),n.removeEventListener("pointerup",this),n.removeEventListener("pointercancel",this),n.removeEventListener("wheel",this),n.removeEventListener("pointermove",this)),this.rotationManager.resetVelocity(),this.setPointerLocked(!1),this._enabled=e}setPointerLocked(e=!0){var n;e?document.pointerLockElement!==this.domElement&&((n=this.domElement)==null?void 0:n.requestPointerLock)!==void 0&&this.domElement.requestPointerLock():document.exitPointerLock!==void 0&&document.exitPointerLock()}setRotationEnabled(e){var n,s;this.settings.rotation.enabled&&e?(n=this.domElement)==null||n.addEventListener("pointermove",this,{passive:!0}):(s=this.domElement)==null||s.removeEventListener("pointermove",this)}handlePointerMoveEvent(e){let n=this.settings,s=n.rotation,r=n.pointer.behaviour,a=n.pointer.sensitivity,o=this.rotationManager;if(r!=="lock-hold"||this.dragging){let{movementX:l,movementY:c}=e;(l===void 0||c===void 0)&&(l=e.clientX-uc.x,c=e.clientY-uc.y,uc.set(e.clientX,e.clientY)),o.adjustSpherical(l*a*s.sensitivityX,c*a*s.sensitivityY)}}handlePointerButtonEvent(e,n){var r;let s=this.settings.pointerBindings;if(s.has(e.button)){if(uc.set(e.clientX,e.clientY),!(e instanceof PointerEvent&&e.pointerType==="mouse")){let a=s.get(e.button),o=this.strategies.get(a);o==null||o.execute(n,e),a===9&&(this.dragging=n)}if(e instanceof PointerEvent){let a=this.settings.pointer.behaviour;n&&a==="default"&&((r=this.domElement)==null||r.setPointerCapture(e.pointerId))}}}handlePointerCancelEvent(e){var n;(n=this.domElement)==null||n.removeEventListener("pointermove",this)}handleWheelEvent(e){this.rotationManager.zoom(Math.sign(e.deltaY))}handlePointerLockEvent(){this.setRotationEnabled(document.pointerLockElement===this.domElement)}handleKeyboardEvent(e,n){let s=this.settings.keyBindings,r=e.code!==void 0?e.code:Tg.get(e.keyCode);if(s.has(r)){e.preventDefault();let a=this.strategies.get(s.get(r));a==null||a.execute(n)}}handleVisibilityChangeEvent(){var e;document.hidden&&((e=this.domElement)==null||e.removeEventListener("pointermove",this))}onSettingsChanged(e){let n=this.rotationManager,s=this.settings,r=s.general;s.rotation.enabled||this.rotationManager.resetVelocity(),r.mode!==r.previousMode?(r.mode==="third-person"?(Wd.copy(this.target),this.target.copy(this.position),this.position.sub(Wd)):(this.position.copy(this.target),this.target.set(0,0,-1).applyQuaternion(this.quaternion)),n.updateSpherical()):n.restrictSpherical(),n.updatePosition().updateQuaternion()}synchronize(e,n,s){let r=this.settings.general.mode,a=this.rotationManager,o=this.position,l=this.quaternion,c=this.target;n.equals(l)?s.equals(c)?e.equals(o)||r==="third-person"&&a.updateSpherical().updateQuaternion():e.equals(o)&&r==="third-person"?a.updatePosition():a.updateSpherical().updateQuaternion():(r==="third-person"?(c.set(0,0,-1).applyQuaternion(l),c.multiplyScalar(a.radius),c.add(o)):c.set(0,0,-1).applyQuaternion(l),a.updateSpherical())}handleEvent(e){switch(e.type){case"pointermove":this.handlePointerMoveEvent(e);break;case"pointerdown":case"mousedown":this.handlePointerButtonEvent(e,!0);break;case"pointerup":case"mouseup":this.handlePointerButtonEvent(e,!1);break;case"pointercancel":this.handlePointerCancelEvent(e);break;case"wheel":this.handleWheelEvent(e);break;case"pointerlockchange":case"pointerlockerror":this.handlePointerLockEvent();break;case"keydown":this.handleKeyboardEvent(e,!0);break;case"keyup":this.handleKeyboardEvent(e,!1);break;case"visibilitychange":this.handleVisibilityChangeEvent();break;case"change":this.onSettingsChanged(e);break}}update(e){this.rotationManager.update(e)}dispose(){this.enabled=!1}},O(Ps,"EVENT_UPDATE","update"),Ps),OS=class{constructor(i){O(this,"movementState");this.movementState=i}execute(i){this.movementState.boost=i}},br=class{constructor(i,t){O(this,"movementState");O(this,"direction");this.movementState=i,this.direction=t}execute(i){let t=this.movementState;switch(this.direction){case 2:t.backward=i,t.backwardBeforeForward=i;break;case 0:t.forward=i,t.backwardBeforeForward=!i;break;case 3:t.right=i,t.rightBeforeLeft=i;break;case 1:t.left=i,t.rightBeforeLeft=!i;break;case 5:t.up=i,t.upBeforeDown=i;break;case 4:t.down=i,t.upBeforeDown=!i;break}}},FS=class{constructor(){O(this,"left");O(this,"right");O(this,"forward");O(this,"backward");O(this,"up");O(this,"down");O(this,"backwardBeforeForward");O(this,"rightBeforeLeft");O(this,"upBeforeDown");O(this,"boost");this.reset()}get active(){return this.forward||this.backward||this.left||this.right||this.up||this.down}reset(){return this.left=!1,this.right=!1,this.forward=!1,this.backward=!1,this.up=!1,this.down=!1,this.backwardBeforeForward=!1,this.rightBeforeLeft=!1,this.upBeforeDown=!1,this.boost=!1,this}},Xd=new P,yr=new P,Rs,BS=(Rs=class extends Wt{constructor(e,n,s,r){super();O(this,"_position");O(this,"_quaternion");O(this,"_target");O(this,"settings");O(this,"movementState");O(this,"velocity0");O(this,"velocity1");O(this,"scalarDampers");O(this,"timestamp");O(this,"updateEvent");this._position=e,this._quaternion=n,this._target=s,this.settings=r,this.movementState=new FS,this.velocity0=new P,this.velocity1=new P,this.timestamp=0,this.updateEvent={type:Rs.EVENT_UPDATE},this.scalarDampers=Object.freeze([new En,new En,new En])}get position(){return this._position}set position(e){this._position=e}get quaternion(){return this._quaternion}set quaternion(e){this._quaternion=e}get target(){return this._target}set target(e){this._target=e}resetVelocity(){this.velocity0.set(0,0,0),this.velocity1.set(0,0,0);for(let e of this.scalarDampers)e.resetVelocity()}translate(e,n,s){let r=this.settings.translation.axisWeights;yr.copy(n).applyQuaternion(this.quaternion),r.x!==1||r.y!==1||r.z!==1?(yr.multiply(this.settings.translation.axisWeights).normalize(),yr.multiplyScalar(n.length()*s)):yr.multiplyScalar(s),e.add(yr),this.dispatchEvent(this.updateEvent)}update(e){if(!this.settings.translation.enabled){this.timestamp=e;return}let s=this.movementState,r=this.settings.translation,a=s.boost?r.boostMultiplier:1,o=r.sensitivity,l=this.scalarDampers,c=this.velocity0,h=this.velocity1;h.setScalar(0),s.active&&(s.backward&&s.forward?h.z=s.backwardBeforeForward?1:-1:s.backward?h.z=1:s.forward&&(h.z=-1),s.right&&s.left?h.x=s.rightBeforeLeft?1:-1:s.right?h.x=1:s.left&&(h.x=-1),s.up&&s.down?h.y=s.upBeforeDown?1:-1:s.up?h.y=1:s.down&&(h.y=-1));let d=o*a;h.normalize().multiplyScalar(d);let u=(e-this.timestamp)*Cg;if(this.timestamp=e,!c.equals(h))if(r.damping>0){let m=r.damping,v=En.calculateOmega(m),b=En.calculateExp(v,u);c.x=l[0].interpolate(c.x,h.x,m,v,b,u),c.y=l[1].interpolate(c.y,h.y,m,v,b,u),c.z=l[2].interpolate(c.z,h.z,m,v,b,u)}else c.copy(h);(c.x!==0||c.y!==0||c.z!==0)&&(this.settings.general.mode==="third-person"?(Xd.copy(this.target),this.translate(this.target,c,u),this.target.copy(this.target),this.position.add(yr.subVectors(this.target,Xd))):(Xd.copy(this.position),this.translate(this.position,c,u),this.position.copy(this.position)))}},O(Rs,"EVENT_UPDATE","update"),Rs),Is,kS=(Is=class extends Wt{constructor(e=new P,n=new Se,s=new P,r=new Yd){super();O(this,"translationManager");O(this,"strategies");O(this,"_domElement");O(this,"_enabled");O(this,"settings");this._domElement=null,this._enabled=!1,this.settings=r,r.addEventListener("change",o=>this.handleEvent(o)),this.translationManager=new BS(e,n,s,r),this.translationManager.addEventListener(Is.EVENT_UPDATE,o=>this.dispatchEvent(o));let a=this.translationManager.movementState;this.strategies=new Map([[0,new br(a,0)],[1,new br(a,1)],[2,new br(a,2)],[3,new br(a,3)],[4,new br(a,4)],[5,new br(a,5)],[8,new OS(a)]])}get domElement(){return this._domElement}set domElement(e){this._domElement=e;let n=this.enabled;this.dispose(),this.enabled=n}set position(e){this.translationManager.position=e}set quaternion(e){this.translationManager.quaternion=e}set target(e){this.translationManager.target=e}get enabled(){return this._enabled}set enabled(e){if(this.domElement===null||typeof document=="undefined")return;let n=this.domElement;this.translationManager.movementState.reset(),e&&!this._enabled?(document.addEventListener("visibilitychange",this),n.addEventListener("keyup",this),n.addEventListener("keydown",this)):!e&&this._enabled&&(document.removeEventListener("visibilitychange",this),n.removeEventListener("keyup",this),n.removeEventListener("keydown",this)),this.translationManager.resetVelocity(),this._enabled=e}handleKeyboardEvent(e,n){let s=this.settings.keyBindings,r=e.code!==void 0?e.code:Tg.get(e.keyCode);if(s.has(r)){e.preventDefault();let a=this.strategies.get(s.get(r));a==null||a.execute(n)}}handleVisibilityChangeEvent(){document.hidden&&this.translationManager.movementState.reset()}onSettingsChanged(e){this.settings.translation.enabled||this.translationManager.resetVelocity()}handleEvent(e){switch(e.type){case"keydown":this.handleKeyboardEvent(e,!0);break;case"keyup":this.handleKeyboardEvent(e,!1);break;case"visibilitychange":this.handleVisibilityChangeEvent();break;case"change":this.onSettingsChanged(e);break}}update(e){this.translationManager.update(e)}dispose(){this.enabled=!1}},O(Is,"EVENT_UPDATE","update"),Is),dc=new P;function Ag(i,t){for(let e of t)i=e(i);return i}var xi,Rg=(xi=class extends Wt{constructor(e=new P,n=new Se,s=null){super();O(this,"_domElement");O(this,"_position");O(this,"_quaternion");O(this,"_target");O(this,"_enabled");O(this,"previousPosition");O(this,"previousQuaternion");O(this,"previousTarget");O(this,"rotationControls");O(this,"translationControls");O(this,"settings");O(this,"constraints");this._domElement=null,this._enabled=!1;let r=new P;this._target=r,this._position=e,this._quaternion=n,this.previousPosition=new P,this.previousQuaternion=new Se,this.previousTarget=new P;let a=new Yd;a.addEventListener("change",o=>this.handleEvent(o)),this.settings=a,this.constraints=new Set,this.rotationControls=new US(e,n,r,a),this.translationControls=new kS(e,n,r,a),this.rotationControls.addEventListener(xi.EVENT_UPDATE,o=>this.dispatchEvent(o)),this.translationControls.addEventListener(xi.EVENT_UPDATE,o=>this.dispatchEvent(o)),e!==null&&n!==null&&(this._target.set(0,0,-1).applyQuaternion(this._quaternion),this.lookAt(this._target),this.domElement=s,this.enabled=!0,this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),this.previousTarget.copy(this.target))}get domElement(){return this._domElement}set domElement(e){let n=this.enabled;this.dispose(),e!==null&&e.getAttribute("tabindex")===null&&e.setAttribute("tabindex","-1"),this._domElement=e,this.rotationControls.domElement=e,this.translationControls.domElement=e,this.enabled=n}get position(){return this._position}set position(e){this._position=e,this.rotationControls.position=e,this.translationControls.position=e}get quaternion(){return this._quaternion}set quaternion(e){this._quaternion=e,this.rotationControls.quaternion=e,this.translationControls.quaternion=e}get target(){return this._target}set target(e){this._target=e,this.rotationControls.target=e,this.translationControls.target=e}lookAt(e,n,s){return e instanceof P?this.rotationControls.lookAt(e):this.rotationControls.lookAt(dc.set(e,n,s)),this}getViewDirection(e){return this.rotationControls.getViewDirection(e)}getProjectedViewDirection(e){return this.rotationControls.getProjectedViewDirection(e)}get enabled(){return this._enabled}set enabled(e){this._enabled=e,this.rotationControls.enabled=e,this.translationControls.enabled=e}copy(e){return this.position=e.position,this.quaternion=e.quaternion,this.target=e.target,this.domElement=e.domElement,this.settings.copy(e.settings),this.lookAt(this.target)}clone(){return new xi().copy(this)}synchronize(){this.rotationControls.synchronize(this.previousPosition,this.previousQuaternion,this.previousTarget)}applyConstraints(){this.constraints.size!==0&&(this.settings.general.mode==="third-person"?(dc.copy(this.target),this.target.copy(Ag(this.target,this.constraints)),this.position.add(dc.subVectors(this.target,dc))):this.position.copy(Ag(this.position,this.constraints)))}onSettingsChanged(e){this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),this.previousTarget.copy(this.target)}handleEvent(e){e.type==="change"&&this.onSettingsChanged(e)}update(e){this.synchronize(),this.rotationControls.update(e),this.translationControls.update(e),this.applyConstraints(),this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),this.previousTarget.copy(this.target)}dispose(){this.enabled=!1}},O(xi,"EVENT_UPDATE","update"),xi);var VS=Math.PI/180,zS=180/Math.PI;function Ig(i,t=16/9){return Math.atan(Math.tan(i*VS*.5)/t)*zS*2}var Dg=new ds,Lg=new $t,Ng=new P,$d=new P,GS=new Se,Ua=class{constructor(t){O(this,"octree");O(this,"cullCamera");O(this,"s");O(this,"cameraHelper");O(this,"mesh");O(this,"enabled");O(this,"time");this.octree=t,this.cullCamera=new Oe(20,1.77,.2,2),this.s=new ki(2,Math.PI/3,Math.PI*1.75),this.cameraHelper=new Zr(this.cullCamera),this.mesh=new us(new Vn(1,1,1),new ai({transparent:!0,color:13434624,opacity:.75}),1e3),this.mesh.visible=!1,this.cameraHelper.visible=!1,this.enabled=!1,this.time=""}getMesh(){return this.mesh}getCameraHelper(){return this.cameraHelper}updateCamera(){let t=this.cullCamera;t.position.setFromSpherical(this.s.makeSafe()),t.lookAt($d.set(0,0,0)),t.updateMatrixWorld(!0),Dg.setFromProjectionMatrix(Lg.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse))}cull(){if(!this.enabled)return;this.updateCamera();let t=performance.now(),e=this.octree.cull(Dg);this.time=(performance.now()-t).toFixed(2)+" ms";let n=this.mesh;if(n.count=e.length,e.length>0){for(let s=0,r=e.length;s<r;++s){let a=e[s];a.getCenter($d),a.getDimensions(Ng),n.setMatrixAt(s,Lg.compose($d,GS,Ng))}n.instanceMatrix.needsUpdate=!0}}registerOptions(t){let e=t.addFolder({title:"Frustum Culling"});e.addBinding(this,"enabled").on("change",s=>{this.cameraHelper.visible=s.value,this.mesh.visible=s.value,this.cull()}),e.addBinding(this,"time",{readonly:!0});let n=e.addFolder({title:"Camera Adjustment"});n.addBinding(this.s,"radius",{min:.01,max:4,step:.01}).on("change",s=>this.cull()),n.addBinding(this.s,"phi",{min:1e-6,max:Math.PI-1e-6,step:1e-4}).on("change",s=>this.cull()),n.addBinding(this.s,"theta",{min:0,max:Math.PI*2,step:1e-4}).on("change",s=>this.cull())}dispose(){let t=this.mesh.geometry,e=this.mesh.material;t.dispose(),e.dispose()}};var Kd=new Ht,HS=new $t,Ug=new P,Og=new P,WS=new Se,Oa=class extends Kr{constructor(e,n,s){super();O(this,"octree");O(this,"domElement");O(this,"mesh");O(this,"enabled");O(this,"time");this.params.Points!==void 0&&(this.params.Points.threshold=.1),this.octree=e,this.camera=n,this.domElement=s,this.enabled=!0,this.time="",this.mesh=new us(new Vn(1,1,1),new ai({transparent:!0,color:52479,opacity:.75}),100),this.mesh.count=0,this.mesh.frustumCulled=!1,document.addEventListener("keyup",this,{passive:!0}),s.addEventListener("pointermove",this,{passive:!0})}getMesh(){return this.mesh}raycast(e){if(!this.enabled)return;Kd.x=e.clientX/window.innerWidth*2-1,Kd.y=-(e.clientY/window.innerHeight)*2+1,this.setFromCamera(Kd,this.camera);let n=performance.now(),s=this.octree.getIntersectingNodes(this);this.time=(performance.now()-n).toFixed(2)+" ms";let r=this.mesh;if(r.count=s.length,s.length>0){for(let a=0,o=s.length;a<o;++a){let l=s[a];l.getCenter(Og),l.getDimensions(Ug),r.setMatrixAt(a,HS.compose(Og,WS,Ug))}r.instanceMatrix.needsUpdate=!0}}registerOptions(e){let n=e.addFolder({title:"Rayasting"});n.addBinding(this,"enabled",{label:"freeze (press E)"}),n.addBinding(this,"time",{readonly:!0})}handleKeyboardEvent(e){e.key==="e"&&(this.enabled=!this.enabled)}handleEvent(e){switch(e.type){case"keyup":this.handleKeyboardEvent(e);break;case"pointermove":this.raycast(e);break}}dispose(){let e=this.domElement;document.removeEventListener("keyup",this),e.removeEventListener("pointermove",this);let n=this.mesh.geometry,s=this.mesh.material;n.dispose(),s.dispose()}};var wr=class{constructor(){O(this,"data");this.data=null}};var Mr=class extends wr{constructor(){super();O(this,"children");this.children=0}};var bi=class{static parseBin(t){return parseInt(t,2)}static toString(t,e=64){return(t<0?"-":"")+Math.abs(t).toString(2).padStart(e,"0")}};var pc=class{constructor(t,e,n){O(this,"keyDesign");O(this,"min");O(this,"max");O(this,"keyBase");O(this,"key");O(this,"limit");O(this,"result");this.keyDesign=t,this.min=e,this.max=n,this.keyBase=new P,this.key=new P,this.limit=new P,this.reset()}reset(){let t=this.keyDesign,e=this.keyBase,n=this.limit,s=this.key,r=this.min,a=this.max;if(r.x>=0&&r.y>=0&&r.z>=0&&r.x<=a.x&&r.y<=a.y&&r.z<=a.z)e.set(r.x,r.y*t.rangeX,r.z*t.rangeXY),n.set(a.x,a.y*t.rangeX,a.z*t.rangeXY),s.copy(e);else throw e.set(1,1,1),n.set(0,0,0),s.copy(e),new Error("Invalid key range");return this.result={done:!1,value:-1},this}next(){let t=this.result,e=this.keyDesign,n=this.keyBase,s=this.limit,r=this.key;return r.z<=s.z?(t.value=r.z+r.y+r.x,++r.x,r.x>s.x&&(r.x=n.x,r.y+=e.rangeX,r.y>s.y&&(r.y=n.y,r.z+=e.rangeXY))):(t.value=-1,t.done=!0),t}return(t){return this.result.value=t,this.result.done=!0,this.result}[Symbol.iterator](){return this}};var Ge=32,Fa=Math.pow(2,Ge),Zd=53,XS=21,Ds=32,Ls=class Ls extends Wt{constructor(e=8,n=e,s=e){super();O(this,"bits");O(this,"range");O(this,"maskX");O(this,"maskY");O(this,"maskZ");this.bits=new P(0,0,0),this.range=new ue(1,1,1,1),this.maskX=[0,0],this.maskY=[0,0],this.maskZ=[0,0],this.set(e,n,s)}get x(){return this.bits.x}get y(){return this.bits.y}get z(){return this.bits.z}get rangeX(){return this.range.x}get rangeY(){return this.range.y}get rangeZ(){return this.range.z}get rangeXY(){return this.range.w}getMinKeyCoordinates(e){return e.set(0,0,0)}getMaxKeyCoordinates(e){let n=this.range;return e.set(Math.max(n.x-1,0),Math.max(n.y-1,0),Math.max(n.z-1,0))}updateBitMasks(){let{maskX:e,maskY:n,maskZ:s}=this,r=this.x,a=this.y,o=this.z,l=r+a,c=l+o,h=Ge-Math.max(0,r-Ds),d=Ge-Math.max(0,a+r-Ds),u=Ge-Math.max(0,o+a+r-Ds);e[1]=h<Ge?-1>>>h:0,e[0]=r===0?0:-1>>>Math.max(0,Ds-r),n[1]=((d<Ge?-1>>>d:0)&~e[1])>>>0,n[0]=l===0?0:(-1>>>Math.max(0,Ds-l)&~e[0])>>>0,s[1]=((u<Ge?-1>>>u:0)&~n[1]&~e[1])>>>0,s[0]=c===0?0:(-1>>>Math.max(0,Ds-c)&~n[0]&~e[0])>>>0}set(e,n,s){if(e=Math.max(e,0),n=Math.max(n,0),s=Math.max(s,0),!(e===this.x&&n===this.y&&s===this.z)){if(e+n+s>Zd)throw new Error(`Cannot use more than ${Zd} bits total`);if(e>Ge||n>Ge||s>Ge)throw new Error(`Cannot use more than ${Ge} bits per coordinate`);this.bits.set(e,n,s),this.range.set(ns(2,e),ns(2,n),ns(2,s),ns(2,e+n)),this.updateBitMasks(),this.dispatchEvent({type:Ls.EVENT_CHANGE})}}unpackKey(e,n){let s=this.maskX,r=this.maskY,a=this.maskZ,o=Math.trunc(e/Fa),l=e%Fa;return n.set((o&s[1])*Fa+((l&s[0])>>>0),((o&r[1])*Fa+((l&r[0])>>>0))/this.rangeX,((o&a[1])*Fa+((l&a[0])>>>0))/this.rangeXY)}packKey(e,n,s){if(e>=this.rangeX)throw new Error("X value out of bounds");if(n>=this.rangeY)throw new Error("Y value out of bounds");if(s>=this.rangeZ)throw new Error("Z value out of bounds");return s*this.rangeXY+n*this.rangeX+e}calculateBounds(e,n){let s=this.range,r=n;return r.max.set(s.x,s.y,s.z),r.max.divideScalar(2).multiply(e),r.min.copy(r.max).negate(),r}keyRange(e,n){return new pc(this,e,n)}equals(e){return this===e||this.x===e.x&&this.y===e.y&&this.z===e.z}toString(){let e=this.maskX,n=this.maskY,s=this.maskZ;return`Key Design

Bits [X: ${this.x}, Y: ${this.y}, Z: ${this.z}]

HI-Mask X: ${bi.toString(e[1],Ge)} ${e[1]}
LO-Mask X: ${bi.toString(e[0],Ge)} ${e[0]}

HI-Mask Y: ${bi.toString(n[1],Ge)} ${n[1]}
LO-Mask Y: ${bi.toString(n[0],Ge)} ${n[0]}

HI-Mask Z: ${bi.toString(s[1],Ge)} ${s[1]}
LO-Mask Z: ${bi.toString(s[0],Ge)} ${s[0]}
`}};O(Ls,"EVENT_CHANGE","change"),O(Ls,"BITS",Zd),O(Ls,"HI_BITS",XS),O(Ls,"LO_BITS",Ds);var ts=Ls;var fc=class{constructor(t=0,e=0){O(this,"key");O(this,"level");this.key=t,this.level=e}set(t,e){return this.key=t,this.level=e,this}copy(t){return this.key=t.key,this.level=t.level,this}clone(){return new this.constructor().copy(this)}};var Fg=new P,Jn=class{constructor(t=null){O(this,"min");O(this,"max");O(this,"octant");O(this,"id");this.min=new P,this.max=new P,this.octant=t,this.id=new fc}copy(t){return this.octant=t.octant,this.id.copy(t.id),this.min.copy(t.min),this.max.copy(t.max),this}getCenter(t){return t.addVectors(this.min,this.max).multiplyScalar(.5)}getDimensions(t){return t.subVectors(this.max,this.min)}clone(){return new this.constructor().copy(this)}distanceToSquared(t){return Fg.copy(t).clamp(this.min,this.max).sub(t).lengthSq()}distanceToCenterSquared(t){let e=this.getCenter(Fg),n=t.x-e.x,s=t.y-e.x,r=t.z-e.z;return n*n+s*s+r*r}containsPoint(t){let e=this.min,n=this.max;return t.x>=e.x&&t.y>=e.y&&t.z>=e.z&&t.x<=n.x&&t.y<=n.y&&t.z<=n.z}};var mc=class{constructor(t,e=0){O(this,"octree");O(this,"cellSize");O(this,"level");O(this,"iterator");O(this,"result");this.octree=t,this.cellSize=new P,this.level=e,this.reset()}reset(){let t=this.level,e=this.octree.getGrid(t);return this.octree.getCellSize(t,this.cellSize),this.iterator=e.entries(),this.result={done:!1},this}next(){let t=this.result,e=this.iterator.next(),n=e.value;if(e.done!==!0){let s=new Jn;this.octree.keyDesign.unpackKey(n[0],s.min),s.min.multiply(this.cellSize).add(this.octree.min),s.max.copy(s.min).add(this.cellSize),s.id.key=n[0],s.octant=n[1],t.value=s}else t.value=null,t.done=!0;return t}return(t){return this.result.value=t,this.result.done=!0,this.result}[Symbol.iterator](){return this}};var gc=new Jn,Bg=new xg,Jd=new Ce,kg=new P,ne=new P;function yi(i,t,e,n,s,r,a,o,l,c,h,d,u){if(c<0||h<0||d<0)return;let m=i.keyDesign;if(t.data!==null){let y=i.getCellSize(r,kg),E=new Jn(t);E.id.set(m.packKey(e,n,s),r),E.min.set(e,n,s).multiply(y).add(i.min),E.max.copy(E.min).add(y),u.push(E)}if(r===0||t.children===0)return;let v=i.getGrid(--r),b=t.children,f=.5*(a+c),p=.5*(o+h),S=.5*(l+d),T=bg(a,o,l,f,p,S);for(e*=2,n*=2,s*=2;T<8;){let y=Bg.value^T,E=(b&(1<<y|0))!==0,M=xr[y];ne.set(e+M[0],n+M[1],s+M[2]);let C=null;switch(E&&(C=v.get(m.packKey(ne.x,ne.y,ne.z))),T){case 0:{C!==null&&yi(i,C,ne.x,ne.y,ne.z,r,a,o,l,f,p,S,u),T=Ji(T,f,p,S);break}case 1:{C!==null&&yi(i,C,ne.x,ne.y,ne.z,r,a,o,S,f,p,d,u),T=Ji(T,f,p,d);break}case 2:{C!==null&&yi(i,C,ne.x,ne.y,ne.z,r,a,p,l,f,h,S,u),T=Ji(T,f,h,S);break}case 3:{C!==null&&yi(i,C,ne.x,ne.y,ne.z,r,a,p,S,f,h,d,u),T=Ji(T,f,h,d);break}case 4:{C!==null&&yi(i,C,ne.x,ne.y,ne.z,r,f,o,l,c,p,S,u),T=Ji(T,c,p,S);break}case 5:{C!==null&&yi(i,C,ne.x,ne.y,ne.z,r,f,o,S,c,p,d,u),T=Ji(T,c,p,d);break}case 6:{C!==null&&yi(i,C,ne.x,ne.y,ne.z,r,f,p,l,c,h,S,u),T=Ji(T,c,h,S);break}case 7:{C!==null&&yi(i,C,ne.x,ne.y,ne.z,r,f,p,S,c,h,d,u),T=8;break}}}}var vc=class{static intersectOctree(t,e){let n=[];if(Jd.min.copy(t.min),Jd.max.copy(t.max),!e.intersectsBox(Jd))return n;let s=t.getLevels(),r=t.root.octant,a=t.keyDesign,o=t.getDimensions(kg),l=s,c=ne.set(l-a.x,l-a.y,l-a.z);if(o.set(o.x*(1<<c.x>>>0),o.y*(1<<c.y>>>0),o.z*(1<<c.z>>>0)),gc.copy(t.root),gc.max.copy(gc.min).add(o),r.children>0){let h=yg(gc,e,Bg);h!==null&&yi(t,r,0,0,0,s,h[0],h[1],h[2],h[3],h[4],h[5],n)}return r.data!==null&&n.push(t.root.clone()),n}};function jd(i,t,e){let n=i&1,s=t&1,r=e&1;return(n<<2)+(s<<1)+r}var Qd=new P,kt=new P,Sr=new Ce;function Vg(i,t,e,n,s,r){if(r===0)return;--r;let a=i.getGrid(r),o=i.keyDesign,l=t.children;e*=2,n*=2,s*=2;for(let c=0;c<8;++c)if((l&(1<<c|0))!==0){let h=xr[c];kt.set(e+h[0],n+h[1],s+h[2]);let d=o.packKey(kt.x,kt.y,kt.z),u=a.get(d);a.delete(d),Vg(i,u,kt.x,kt.y,kt.z,r)}t.children=0}function zg(i,t,e,n,s){++s;let r=jd(t,e,n);if(s<i.getLevels()){let a=i.getGrid(s);kt.set(t>>>1,e>>>1,n>>>1);let o=i.keyDesign.packKey(kt.x,kt.y,kt.z);if(a.has(o)){let l=a.get(o);l.children|=1<<r|0}else{let l=new Mr;a.set(o,l),l.children|=1<<r|0,zg(i,kt.x,kt.y,kt.z,s)}}else{let a=i.root.octant;a.children|=1<<r|0}}function Gg(i,t,e,n,s){++s;let r=jd(t,e,n);if(s<i.getLevels()){let a=i.getGrid(s);kt.set(t>>>1,e>>>1,n>>>1);let o=i.keyDesign.packKey(kt.x,kt.y,kt.z),l=a.get(o);l.children&=~(1<<r|0),l.children===0&&(a.delete(o),Gg(i,kt.x,kt.y,kt.z,s))}else{let a=i.root.octant;a.children&=~(1<<r|0)}}function Hg(i,t,e,n,s,r,a,o){let l=i.getCellSize(r,Qd);if(Sr.min.copy(kt.set(e,n,s)).multiply(l).add(i.min),Sr.max.copy(Sr.min).add(l),!a.intersectsBox(Sr))return;let c=i.keyDesign;if(t.data!==null){let u=new Jn(t);u.id.set(c.packKey(kt.x,kt.y,kt.z),r),u.min.copy(Sr.min),u.max.copy(Sr.max),o.push(u)}if(r===0)return;--r;let h=i.getGrid(r),d=t.children;e*=2,n*=2,s*=2;for(let u=0;u<8;++u)if((d&(1<<u|0))!==0){let m=xr[u];kt.set(e+m[0],n+m[1],s+m[2]);let v=c.packKey(kt.x,kt.y,kt.z),b=h.get(v);Hg(i,b,kt.x,kt.y,kt.z,r,a,o)}}var _c=class{constructor(t,e=new ts){O(this,"cellSize");O(this,"_keyDesign");O(this,"grids");O(this,"root");this._keyDesign=e,this._keyDesign.addEventListener(ts.EVENT_CHANGE,()=>{this.createGrids(),this.updateCellSize()});let n=new Jn(new Mr);n.min.copy(t.min),n.max.copy(t.max),Object.freeze(n.min),Object.freeze(n.max),Object.freeze(n),this.root=n,this.grids=[],this.createGrids(),this.cellSize=new P,this.updateCellSize()}get min(){return this.root.min}get max(){return this.root.max}getCenter(t){return this.root.getCenter(t)}getDimensions(t){return this.root.getDimensions(t)}getDepth(){return this.grids.length-1}findNodesByLevel(t){return Array.from(this.octants(t))}getLevels(){return this.grids.length}get keyDesign(){return this._keyDesign}createGrids(){let t=this.keyDesign,e=1+Math.max(t.x,t.y,t.z);for(this.grids=[];this.grids.length<e;)this.grids.push(new Map)}updateCellSize(){let t=this.root.getDimensions(this.cellSize);t.set(t.x/this.keyDesign.rangeX,t.y/this.keyDesign.rangeY,t.z/this.keyDesign.rangeZ)}getCellSize(t,e){let n=this.cellSize,s=this.keyDesign;return e.set(n.x*(1<<Math.min(t,s.x)>>>0),n.y*(1<<Math.min(t,s.y)>>>0),n.z*(1<<Math.min(t,s.z)>>>0))}getGrid(t){if(t<0||t>=this.grids.length)throw new Error(`Level ${t} is out of bounds [0, ${this.grids.length-1}]`);return this.grids[t]}clear(){for(let e of this.grids)e.clear();let t=this.root.octant;t.children=0}containsPoint(t){return this.root.containsPoint(t)}calculateKeyCoordinates(t,e,n){if(!this.containsPoint(t))throw new Error("Position out of bounds");let s=this.getCellSize(e,Qd);return n.subVectors(t,this.min),n.set(Math.trunc(n.x/s.x),Math.trunc(n.y/s.y),Math.trunc(n.z/s.z)),n.min(this.keyDesign.getMaxKeyCoordinates(Qd))}getOctantByPoint(t,e=0){let n=this.keyDesign,s=this.getGrid(e);return this.calculateKeyCoordinates(t,e,kt),s.get(n.packKey(kt.x,kt.y,kt.z))}delete(t,e=0){let n=this.keyDesign,s=this.getGrid(e),r=null;if(typeof t!="number"&&(r=t,t=n.packKey(t.x,t.y,t.z)),s.has(t)){let a=s.get(t),{x:o,y:l,z:c}=r!=null?r:n.unpackKey(t,kt);Vg(this,a,o,l,c,e),s.delete(t),Gg(this,o,l,c,e)}}get(t,e){var r;let n=this.keyDesign,s=this.getGrid(e);return typeof t!="number"&&(t=n.packKey(t.x,t.y,t.z)),(r=s.get(t))==null?void 0:r.data}set(t,e,n){let s=this.keyDesign,r=this.getGrid(e),a=null;if(typeof t!="number"&&(a=t,t=s.packKey(t.x,t.y,t.z)),r.has(t)){let o=r.get(t);o!==void 0&&(o.data=n)}else{let o=e===0?new wr:new Mr;o.data=n,r.set(t,o);let{x:l,y:c,z:h}=a!=null?a:s.unpackKey(t,kt);zg(this,l,c,h,e)}}cull(t){let e=[],n=this.root.octant;return Hg(this,n,0,0,0,this.getLevels(),t,e),e}getIntersectingNodes(t){return vc.intersectOctree(this,t.ray)}octants(t=0){return new mc(this,t)}[Symbol.iterator](){return this.octants()}};window.addEventListener("load",()=>{var E;(E=document.querySelector(".loading"))==null||E.classList.add("hidden");let i=new zl({powerPreference:"high-performance",antialias:!0,stencil:!1,depth:!0});i.debug.checkShaderErrors=window.location.hostname==="localhost",i.setClearColor(0,0);let t=document.querySelector(".viewport");t.append(i.domElement);let e=new kr;e.fog=new Br(855309,.025),i.setClearColor(e.fog.color);let n=new Oe,{position:s,quaternion:r}=n,a=new Rg(s,r,i.domElement),o=a.settings;o.general.mode=qd.THIRD_PERSON,o.zoom.setRange(1e-6,60),o.rotation.sensitivity=2.2,o.rotation.damping=.05,o.translation.sensitivity=.25,o.translation.damping=.1,o.zoom.sensitivity=1,o.zoom.damping=.1,a.position.set(5,2,3),n.updateMatrixWorld();let l=new ts(3,3,3),c=new Ce;c.min.set(-1,-1,-1),c.max.set(1,1,1);let h=new _c(c,l);console.log(h);function d(){let M=new Ce;l.getMinKeyCoordinates(M.min),l.getMaxKeyCoordinates(M.max),console.time("Filling octree");for(let C of l.keyRange(M.min,M.max))h.set(C,0,Math.random());console.timeEnd("Filling octree")}d(),console.time("Creating octree helper");let u=new wg(h);u.visible=!0,console.timeEnd("Creating octree helper"),console.log(u),e.add(u),l.addEventListener(ts.EVENT_CHANGE,()=>{d(),u.update()});let m=new Oa(h,n,i.domElement);e.add(m.getMesh());let v=new Ua(h);e.add(v.getCameraHelper()),e.add(v.getMesh());let f=new oc({container:t.querySelector(".tp")}).addFolder({title:"Settings"});m.registerOptions(f),v.registerOptions(f);let p=4,S={"level mask":p+1,bits:{x:l.x,y:l.y,z:l.z}},T=f.addFolder({title:"Key Design",expanded:!1});T.addBinding(S.bits,"x",{min:0,max:p,step:1}).on("change",()=>l.set(S.bits.x,S.bits.y,S.bits.z)),T.addBinding(S.bits,"y",{min:0,max:p,step:1}).on("change",()=>l.set(S.bits.x,S.bits.y,S.bits.z)),T.addBinding(S.bits,"z",{min:0,max:p,step:1}).on("change",()=>l.set(S.bits.x,S.bits.y,S.bits.z)),T=f.addFolder({title:"Octree Helper"}),T.addBinding(u,"visible"),T.addBinding(S,"level mask",{min:0,max:p+1,step:1}).on("change",()=>{let M=S["level mask"],C=u.children.length;for(let _=0,A=C;_<A;++_)u.children[_].visible=M>=C||M===_});function y(){let M=t.clientWidth,C=t.clientHeight;n.aspect=M/C,n.fov=Ig(90,Math.max(n.aspect,16/9)),n.updateProjectionMatrix(),i.setSize(M,C)}window.addEventListener("resize",y),y(),requestAnimationFrame(function M(C){a.update(C),i.render(e,n),requestAnimationFrame(M)})});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

tweakpane/dist/tweakpane.js:
  (*! Tweakpane 4.0.5 (c) 2016 cocopon, licensed under the MIT license. *)

sparse-octree/dist/index.js:
  (**
   * sparse-octree v7.2.0 build Sun Jun 28 2026
   * https://github.com/vanruesc/sparse-octree
   * Copyright 2016 Raoul van Rüschen
   * @license Zlib
   *)

spatial-controls/dist/index.js:
  (**
   * spatial-controls v6.3.0 build Sun Feb 08 2026
   * https://github.com/vanruesc/spatial-controls
   * Copyright 2017 Raoul van Rüschen
   * @license Zlib
   *)
*/
