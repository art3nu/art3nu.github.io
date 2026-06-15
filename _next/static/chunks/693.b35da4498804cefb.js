"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[693],{2931:(e,t,r)=>{r.d(t,{_:()=>u});var i=r(6092),n=r(7620),a=r(773),o=r(2851);let s={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
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
  `},u=n.forwardRef(({scale:e=10,frames:t=1/0,opacity:r=1,width:u=1,height:c=1,blur:v=1,near:f=0,far:m=10,resolution:d=512,smooth:h=!0,color:x="#000000",depthWrite:p=!1,renderOrder:y,...g},M)=>{let D,U,w=n.useRef(null),P=(0,o.C)(e=>e.scene),b=(0,o.C)(e=>e.gl),E=n.useRef(null);u*=Array.isArray(e)?e[0]:e||1,c*=Array.isArray(e)?e[1]:e||1;let[S,W,C,R,T,$,A]=n.useMemo(()=>{let e=new a.WebGLRenderTarget(d,d),t=new a.WebGLRenderTarget(d,d);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;let r=new a.PlaneGeometry(u,c).rotateX(Math.PI/2),i=new a.Mesh(r),n=new a.MeshDepthMaterial;n.depthTest=n.depthWrite=!1,n.onBeforeCompile=e=>{e.uniforms={...e.uniforms,ucolor:{value:new a.Color(x)}},e.fragmentShader=e.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),e.fragmentShader=e.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};let o=new a.ShaderMaterial(s),v=new a.ShaderMaterial(l);return v.depthTest=o.depthTest=!1,[e,r,n,i,o,v,t]},[d,u,c,e,x]),k=e=>{R.visible=!0,R.material=T,T.uniforms.tDiffuse.value=S.texture,T.uniforms.h.value=e/256,b.setRenderTarget(A),b.render(R,E.current),R.material=$,$.uniforms.tDiffuse.value=A.texture,$.uniforms.v.value=e/256,b.setRenderTarget(S),b.render(R,E.current),R.visible=!1},F=0;return(0,o.D)(()=>{E.current&&(t===1/0||F<t)&&(F++,D=P.background,U=P.overrideMaterial,w.current.visible=!1,P.background=null,P.overrideMaterial=C,b.setRenderTarget(S),b.render(P,E.current),k(v),h&&k(.4*v),b.setRenderTarget(null),w.current.visible=!0,P.overrideMaterial=U,P.background=D)}),n.useImperativeHandle(M,()=>w.current,[]),n.createElement("group",(0,i.A)({"rotation-x":Math.PI/2},g,{ref:w}),n.createElement("mesh",{renderOrder:y,geometry:W,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},n.createElement("meshBasicMaterial",{transparent:!0,map:S.texture,opacity:r,depthWrite:p})),n.createElement("orthographicCamera",{ref:E,args:[-u/2,u/2,c/2,-c/2,f,m]}))})},8767:(e,t,r)=>{let i,n;r.d(t,{E:()=>g});var a=r(6092),o=r(7620),s=r(2748),l=r(773),u=r(2851);let c=new l.Vector3,v=new l.Vector3,f=new l.Vector3,m=new l.Vector2;function d(e,t,r){let i=c.setFromMatrixPosition(e.matrixWorld);i.project(t);let n=r.width/2,a=r.height/2;return[i.x*n+n,-(i.y*a)+a]}let h=e=>1e-10>Math.abs(e)?0:e;function x(e,t,r=""){let i="matrix3d(";for(let r=0;16!==r;r++)i+=h(t[r]*e.elements[r])+(15!==r?",":")");return r+i}let p=(i=[1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1],e=>x(e,i)),y=(n=e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1],(e,t)=>x(e,n(t),"translate(-50%,-50%)")),g=o.forwardRef(({children:e,eps:t=.001,style:r,className:i,prepend:n,center:x,fullscreen:g,portal:M,distanceFactor:D,sprite:U=!1,transform:w=!1,occlude:P,onOcclude:b,castShadow:E,receiveShadow:S,material:W,geometry:C,zIndexRange:R=[0x1000037,0],calculatePosition:T=d,as:$="div",wrapperClass:A,pointerEvents:k="auto",...F},z)=>{let{gl:I,camera:_,scene:j,size:V,raycaster:N,events:H,viewport:L}=(0,u.C)(),[G]=o.useState(()=>document.createElement($)),O=o.useRef(null),Z=o.useRef(null),B=o.useRef(0),X=o.useRef([0,0]),q=o.useRef(null),J=o.useRef(null),K=(null==M?void 0:M.current)||H.connected||I.domElement.parentNode,Q=o.useRef(null),Y=o.useRef(!1),ee=o.useMemo(()=>P&&"blending"!==P||Array.isArray(P)&&P.length&&function(e){return e&&"object"==typeof e&&"current"in e}(P[0]),[P]);o.useLayoutEffect(()=>{let e=I.domElement;P&&"blending"===P?(e.style.zIndex=`${Math.floor(R[0]/2)}`,e.style.position="absolute",e.style.pointerEvents="none"):(e.style.zIndex=null,e.style.position=null,e.style.pointerEvents=null)},[P]),o.useLayoutEffect(()=>{if(Z.current){let e=O.current=s.createRoot(G);if(j.updateMatrixWorld(),w)G.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{let e=T(Z.current,_,V);G.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`}return K&&(n?K.prepend(G):K.appendChild(G)),()=>{K&&K.removeChild(G),e.unmount()}}},[K,w]),o.useLayoutEffect(()=>{A&&(G.className=A)},[A]);let et=o.useMemo(()=>w?{position:"absolute",top:0,left:0,width:V.width,height:V.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:x?"translate3d(-50%,-50%,0)":"none",...g&&{top:-V.height/2,left:-V.width/2,width:V.width,height:V.height},...r},[r,x,g,V,w]),er=o.useMemo(()=>({position:"absolute",pointerEvents:k}),[k]);o.useLayoutEffect(()=>{var t,n;Y.current=!1,w?null==(t=O.current)||t.render(o.createElement("div",{ref:q,style:et},o.createElement("div",{ref:J,style:er},o.createElement("div",{ref:z,className:i,style:r,children:e})))):null==(n=O.current)||n.render(o.createElement("div",{ref:z,style:et,className:i,children:e}))});let ei=o.useRef(!0);(0,u.D)(e=>{if(Z.current){_.updateMatrixWorld(),Z.current.updateWorldMatrix(!0,!1);let e=w?X.current:T(Z.current,_,V);if(w||Math.abs(B.current-_.zoom)>t||Math.abs(X.current[0]-e[0])>t||Math.abs(X.current[1]-e[1])>t){let t=function(e,t){let r=c.setFromMatrixPosition(e.matrixWorld),i=v.setFromMatrixPosition(t.matrixWorld),n=r.sub(i),a=t.getWorldDirection(f);return n.angleTo(a)>Math.PI/2}(Z.current,_),r=!1;ee&&(Array.isArray(P)?r=P.map(e=>e.current):"blending"!==P&&(r=[j]));let i=ei.current;r?ei.current=function(e,t,r,i){let n=c.setFromMatrixPosition(e.matrixWorld),a=n.clone();a.project(t),m.set(a.x,a.y),r.setFromCamera(m,t);let o=r.intersectObjects(i,!0);if(o.length){let e=o[0].distance;return n.distanceTo(r.ray.origin)<e}return!0}(Z.current,_,N,r)&&!t:ei.current=!t,i!==ei.current&&(b?b(!ei.current):G.style.display=ei.current?"block":"none");let n=Math.floor(R[0]/2),a=P?ee?[R[0],n]:[n-1,0]:R;if(G.style.zIndex=`${function(e,t,r){if(t instanceof l.PerspectiveCamera||t instanceof l.OrthographicCamera){let i=c.setFromMatrixPosition(e.matrixWorld),n=v.setFromMatrixPosition(t.matrixWorld),a=i.distanceTo(n),o=(r[1]-r[0])/(t.far-t.near),s=r[1]-o*t.far;return Math.round(o*a+s)}}(Z.current,_,a)}`,w){let[e,t]=[V.width/2,V.height/2],r=_.projectionMatrix.elements[5]*t,{isOrthographicCamera:i,top:n,left:a,bottom:o,right:s}=_,l=p(_.matrixWorldInverse),u=i?`scale(${r})translate(${h(-(s+a)/2)}px,${h((n+o)/2)}px)`:`translateZ(${r}px)`,c=Z.current.matrixWorld;U&&((c=_.matrixWorldInverse.clone().transpose().copyPosition(c).scale(Z.current.scale)).elements[3]=c.elements[7]=c.elements[11]=0,c.elements[15]=1),G.style.width=V.width+"px",G.style.height=V.height+"px",G.style.perspective=i?"":`${r}px`,q.current&&J.current&&(q.current.style.transform=`${u}${l}translate(${e}px,${t}px)`,J.current.style.transform=y(c,1/((D||10)/400)))}else{let t=void 0===D?1:function(e,t){if(t instanceof l.OrthographicCamera)return t.zoom;if(!(t instanceof l.PerspectiveCamera))return 1;{let r=c.setFromMatrixPosition(e.matrixWorld),i=v.setFromMatrixPosition(t.matrixWorld);return 1/(2*Math.tan(t.fov*Math.PI/180/2)*r.distanceTo(i))}}(Z.current,_)*D;G.style.transform=`translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`}X.current=e,B.current=_.zoom}}if(!ee&&Q.current&&!Y.current)if(w){if(q.current){let e=q.current.children[0];if(null!=e&&e.clientWidth&&null!=e&&e.clientHeight){let{isOrthographicCamera:t}=_;if(t||C)F.scale&&(Array.isArray(F.scale)?F.scale instanceof l.Vector3?Q.current.scale.copy(F.scale.clone().divideScalar(1)):Q.current.scale.set(1/F.scale[0],1/F.scale[1],1/F.scale[2]):Q.current.scale.setScalar(1/F.scale));else{let t=(D||10)/400,r=e.clientWidth*t,i=e.clientHeight*t;Q.current.scale.set(r,i,1)}Y.current=!0}}}else{let t=G.children[0];if(null!=t&&t.clientWidth&&null!=t&&t.clientHeight){let e=1/L.factor,r=t.clientWidth*e,i=t.clientHeight*e;Q.current.scale.set(r,i,1),Y.current=!0}Q.current.lookAt(e.camera.position)}});let en=o.useMemo(()=>({vertexShader:w?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[w]);return o.createElement("group",(0,a.A)({},F,{ref:Z}),P&&!ee&&o.createElement("mesh",{castShadow:E,receiveShadow:S,ref:Q},C||o.createElement("planeGeometry",null),W||o.createElement("shaderMaterial",{side:l.DoubleSide,vertexShader:en.vertexShader,fragmentShader:en.fragmentShader})))})}}]);