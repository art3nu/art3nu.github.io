"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[259],{2259:(e,t,r)=>{r.r(t),r.d(t,{SpaceScene:()=>w});var a=r(4568),s=r(7620),o=r(2851),n=r(5963),i=r(3482),l=r(252),c=r(5765),u=r(2931),v=r(773);let d="/models/stampling_set_baked_opt.glb",m="/models/dumpling_opt.glb",p=new v.Vector3(0,.45,0),f=[{title:"The engraved cap",body:"Each stamp is branded into solid maple."},{title:"Turned solid maple",body:"Rigid hard maple — even pressure, a clean seal."},{title:"The cutting blades",body:"The underside cuts the wrapper and seals the edge in one press."}];function h(){let e=(0,s.useRef)(!1);return(0,s.useEffect)(()=>{e.current="undefined"!=typeof matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches},[]),e}function x(e,t){e.updateWorldMatrix(!0,!0);let r=new v.Box3().setFromObject(e).getSize(new v.Vector3);return t/(Math.max(r.x,r.y,r.z)||1)}function g(e){let{onPick:t}=e,{scene:r}=(0,i.p)(d),o=(0,s.useRef)(null),[n,l]=(0,s.useState)(!1);return h(),(0,s.useEffect)(()=>{r.scale.setScalar(1),r.position.set(0,0,0),r.rotation.set(0,0,0);let e=r.getObjectByName("large"),t=r.getObjectByName("small");if(e&&t){let r=new v.Box3().setFromObject(e).getSize(new v.Vector3).x||60;e.position.x-=.85*r,t.position.x+=.85*r}let a=x(r,1.7);r.scale.setScalar(a),r.updateWorldMatrix(!0,!0);let s=new v.Box3().setFromObject(r),o=s.getCenter(new v.Vector3),n=s.max.y-s.min.y;r.position.set(-o.x,-s.min.y+0,-o.z),p.set(0,0+n/2,0),r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)})},[r]),(0,s.useEffect)(()=>(document.body.style.cursor=n?"pointer":"",()=>{document.body.style.cursor=""}),[n]),(0,a.jsx)("group",{ref:o,onPointerOver:e=>{e.stopPropagation(),l(!0)},onPointerOut:()=>l(!1),onClick:e=>{e.stopPropagation(),t({title:"Press. Twist. Done.",body:"Solid-maple dumpling stamp — one press cuts the wrapper and seals the edge. Click away to step back."})},children:(0,a.jsx)("primitive",{object:r})})}function y(e){let{onPick:t}=e,{scene:r}=(0,i.p)(m),[o,n]=(0,s.useState)(!1),l=(0,s.useMemo)(()=>[{x:-.95,z:1.15,rot:.4},{x:-.15,z:1.5,rot:-.7},{x:.7,z:1.2,rot:1.1},{x:1.25,z:.5,rot:-.2}],[]),c=(0,s.useMemo)(()=>{let e=x(r,.62);return l.map(t=>{let a=r.clone(!0);return a.scale.setScalar(e),a.position.set(t.x,0,t.z),a.rotation.y=t.rot,a.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),a})},[r,l]);return(0,s.useEffect)(()=>(document.body.style.cursor=o?"pointer":"",()=>{document.body.style.cursor=""}),[o]),(0,a.jsx)("group",{onPointerOver:e=>{e.stopPropagation(),n(!0)},onPointerOut:()=>n(!1),onClick:e=>{e.stopPropagation(),t({title:"One press, one dumpling",body:"Round, evenly sealed, ready to cook — the same result every time, no hand-pleating."})},children:c.map((e,t)=>(0,a.jsx)("primitive",{object:e},t))})}function b(){let{scene:e}=(0,o.C)();return(0,s.useEffect)(()=>{let t=document.createElement("canvas");t.width=8,t.height=256;let r=t.getContext("2d"),a=r.createLinearGradient(0,0,0,256);a.addColorStop(0,"#fcf3dd"),a.addColorStop(.5,"#f4e3c2"),a.addColorStop(1,"#e7caa0"),r.fillStyle=a,r.fillRect(0,0,8,256);let s=new v.CanvasTexture(t);s.colorSpace=v.SRGBColorSpace;let o=e.background;return e.background=s,()=>{e.background=o,s.dispose()}},[e]),null}function D(){let e=(0,s.useMemo)(()=>(function(){let e=document.createElement("canvas");e.width=1024,e.height=1024;let t=e.getContext("2d");t.fillStyle="#cab083",t.fillRect(0,0,1024,1024);for(let e=0;e<2400;e++){let e=1024*Math.random();t.strokeStyle="rgba(".concat(110+(40*Math.random()|0),",").concat(82+(28*Math.random()|0),",").concat(48+(24*Math.random()|0),",").concat(.03+.06*Math.random(),")"),t.lineWidth=.5+1.3*Math.random(),t.beginPath(),t.moveTo(0,e);let r=e;for(let e=0;e<1024;e+=26)r+=(Math.random()-.5)*3,t.lineTo(e,r);t.stroke()}for(let e=256;e<1024;e+=256)t.strokeStyle="rgba(74,50,26,0.16)",t.lineWidth=2,t.beginPath(),t.moveTo(e,0),t.lineTo(e,1024),t.stroke();let r=new v.CanvasTexture(e);return r.colorSpace=v.SRGBColorSpace,r.wrapS=r.wrapT=v.RepeatWrapping,r.repeat.set(4,4),r})(),[]);return(0,a.jsxs)("mesh",{rotation:[-Math.PI/2,0,0],position:[0,0,0],receiveShadow:!0,children:[(0,a.jsx)("planeGeometry",{args:[44,44]}),(0,a.jsx)("meshStandardMaterial",{map:e,roughness:.8,metalness:0})]})}function S(e){let{onBeat:t}=e,{camera:r}=(0,o.C)(),a=(0,s.useRef)(-1);return(0,o.D)(()=>{let e=r.position.clone().sub(p).normalize(),s=Math.acos(v.MathUtils.clamp(e.y,-1,1)),o=s<.95?0:s>1.95?2:1;o!==a.current&&(a.current=o,t(o))}),null}function j(e){let{focus:t}=e,r=(0,s.useRef)(null),o=h();return(0,s.useEffect)(()=>{let e=r.current;if(!e)return;let a=!o.current;t?e.setLookAt(1.5,1.1,2.4,0,p.y,.6,a):e.setLookAt(3,1.9,4.4,0,.7*p.y,.4,a)},[t,o]),(0,a.jsx)(l.a,{ref:r,makeDefault:!0,minDistance:1.8,maxDistance:9.5,minPolarAngle:.12,maxPolarAngle:2.96})}function w(){let[e,t]=(0,s.useState)(null),[r,o]=(0,s.useState)(1);return(0,a.jsxs)("div",{className:"space-stage",children:[(0,a.jsxs)(n.Hl,{shadows:!0,dpr:[1,2],camera:{position:[3,1.9,4.4],fov:38},gl:{antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"},onPointerMissed:()=>t(null),children:[(0,a.jsx)(b,{}),(0,a.jsx)("hemisphereLight",{args:["#ffe7c2","#caa978",.55]}),(0,a.jsx)("ambientLight",{intensity:.18,color:"#ffe9cb"}),(0,a.jsx)("directionalLight",{position:[4,6,4],intensity:1,color:"#ffe3b8",castShadow:!0,"shadow-mapSize":[2048,2048],"shadow-bias":-2e-4,"shadow-radius":6}),(0,a.jsx)("directionalLight",{position:[-5,3,-2],intensity:.28,color:"#ffdcae"}),(0,a.jsxs)(s.Suspense,{fallback:null,children:[(0,a.jsx)(D,{}),(0,a.jsx)(g,{onPick:t}),(0,a.jsx)(y,{onPick:t}),(0,a.jsx)(c.OH,{preset:"apartment",environmentIntensity:.35})]}),(0,a.jsx)(u._,{position:[0,.001,0],opacity:.55,scale:8,blur:3,far:2}),(0,a.jsx)(S,{onBeat:o}),(0,a.jsx)(j,{focus:e})]}),(0,a.jsxs)("div",{className:"space-ui",children:[(0,a.jsx)("p",{className:"eyebrow",children:"Interactive 3D \xb7 prototype"}),(0,a.jsx)("h1",{children:"Step into the set."}),(0,a.jsx)("p",{className:"lede",children:"Drag to look from any angle — over the cap, down to the blades. Click the stamp or a dumpling to move in. A real-time scene you control."})]}),(0,a.jsxs)("div",{className:"space-slide".concat(e?" is-hidden":""),"aria-live":"polite",children:[(0,a.jsxs)("span",{className:"space-slide-num",children:["0",r+1]}),(0,a.jsx)("strong",{children:f[r].title}),(0,a.jsx)("span",{className:"space-slide-body",children:f[r].body})]}),e&&(0,a.jsxs)("div",{className:"space-card",role:"dialog","aria-label":e.title,children:[(0,a.jsx)("strong",{children:e.title}),(0,a.jsx)("span",{children:e.body}),(0,a.jsxs)("div",{className:"space-card-row",children:[(0,a.jsx)("a",{href:"https://trystampling.com",target:"_blank",rel:"noopener",className:"space-card-cta",children:"Shop the set"}),(0,a.jsx)("button",{type:"button",className:"space-back",onClick:()=>t(null),children:"← Step back"})]})]})]})}i.p.preload(d),i.p.preload(m)},2931:(e,t,r)=>{r.d(t,{_:()=>c});var a=r(6092),s=r(7620),o=r(773),n=r(2851);let i={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},l={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},c=s.forwardRef(({scale:e=10,frames:t=1/0,opacity:r=1,width:c=1,height:u=1,blur:v=1,near:d=0,far:m=10,resolution:p=512,smooth:f=!0,color:h="#000000",depthWrite:x=!1,renderOrder:g,...y},b)=>{let D,S,j=s.useRef(null),w=(0,n.C)(e=>e.scene),U=(0,n.C)(e=>e.gl),M=s.useRef(null);c*=Array.isArray(e)?e[0]:e||1,u*=Array.isArray(e)?e[1]:e||1;let[k,C,P,T,R,E,N]=s.useMemo(()=>{let e=new o.WebGLRenderTarget(p,p),t=new o.WebGLRenderTarget(p,p);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;let r=new o.PlaneGeometry(c,u).rotateX(Math.PI/2),a=new o.Mesh(r),s=new o.MeshDepthMaterial;s.depthTest=s.depthWrite=!1,s.onBeforeCompile=e=>{e.uniforms={...e.uniforms,ucolor:{value:new o.Color(h)}},e.fragmentShader=e.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),e.fragmentShader=e.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};let n=new o.ShaderMaterial(i),v=new o.ShaderMaterial(l);return v.depthTest=n.depthTest=!1,[e,r,s,a,n,v,t]},[p,c,u,e,h]),_=e=>{T.visible=!0,T.material=R,R.uniforms.tDiffuse.value=k.texture,R.uniforms.h.value=e/256,U.setRenderTarget(N),U.render(T,M.current),T.material=E,E.uniforms.tDiffuse.value=N.texture,E.uniforms.v.value=e/256,U.setRenderTarget(k),U.render(T,M.current),T.visible=!1},O=0;return(0,n.D)(()=>{M.current&&(t===1/0||O<t)&&(O++,D=w.background,S=w.overrideMaterial,j.current.visible=!1,w.background=null,w.overrideMaterial=P,U.setRenderTarget(k),U.render(w,M.current),_(v),f&&_(.4*v),U.setRenderTarget(null),j.current.visible=!0,w.overrideMaterial=S,w.background=D)}),s.useImperativeHandle(b,()=>j.current,[]),s.createElement("group",(0,a.A)({"rotation-x":Math.PI/2},y,{ref:j}),s.createElement("mesh",{renderOrder:g,geometry:C,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},s.createElement("meshBasicMaterial",{transparent:!0,map:k.texture,opacity:r,depthWrite:x})),s.createElement("orthographicCamera",{ref:M,args:[-c/2,c/2,u/2,-u/2,d,m]}))})}}]);