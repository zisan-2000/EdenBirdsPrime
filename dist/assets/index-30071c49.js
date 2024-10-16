import{r as t,j as a}from"./index-9f047c6c.js";import{u as L,f as k,M as A,a as O,P as U,L as b}from"./motion-f74042ba.js";function F(){const r=t.useRef(!1);return L(()=>(r.current=!0,()=>{r.current=!1}),[]),r}function B(){const r=F(),[o,e]=t.useState(0),s=t.useCallback(()=>{r.current&&e(o+1)},[o]);return[t.useCallback(()=>k.postRender(s),[s]),o]}class S extends t.Component{getSnapshotBeforeUpdate(o){const e=this.props.childRef.current;if(e&&o.isPresent&&!this.props.isPresent){const s=this.props.sizeRef.current;s.height=e.offsetHeight||0,s.width=e.offsetWidth||0,s.top=e.offsetTop,s.left=e.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function T({children:r,isPresent:o}){const e=t.useId(),s=t.useRef(null),m=t.useRef({width:0,height:0,top:0,left:0}),{nonce:l}=t.useContext(A);return t.useInsertionEffect(()=>{const{width:d,height:u,top:x,left:p}=m.current;if(o||!s.current||!d||!u)return;s.current.dataset.motionPopId=e;const n=document.createElement("style");return l&&(n.nonce=l),document.head.appendChild(n),n.sheet&&n.sheet.insertRule(`
          [data-motion-pop-id="${e}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${u}px !important;
            top: ${x}px !important;
            left: ${p}px !important;
          }
        `),()=>{document.head.removeChild(n)}},[o]),a.jsx(S,{isPresent:o,childRef:s,sizeRef:m,children:t.cloneElement(r,{ref:s})})}const P=({children:r,initial:o,isPresent:e,onExitComplete:s,custom:m,presenceAffectsLayout:l,mode:d})=>{const u=O(D),x=t.useId(),p=t.useMemo(()=>({id:x,initial:o,isPresent:e,custom:m,onExitComplete:n=>{u.set(n,!0);for(const c of u.values())if(!c)return;s&&s()},register:n=>(u.set(n,!1),()=>u.delete(n))}),l?[Math.random()]:[e]);return t.useMemo(()=>{u.forEach((n,c)=>u.set(c,!1))},[e]),t.useEffect(()=>{!e&&!u.size&&s&&s()},[e]),d==="popLayout"&&(r=a.jsx(T,{isPresent:e,children:r})),a.jsx(U.Provider,{value:p,children:r})};function D(){return new Map}function G(r){return t.useEffect(()=>()=>r(),[])}const h=r=>r.key||"";function H(r,o){r.forEach(e=>{const s=h(e);o.set(s,e)})}function V(r){const o=[];return t.Children.forEach(r,e=>{t.isValidElement(e)&&o.push(e)}),o}const q=({children:r,custom:o,initial:e=!0,onExitComplete:s,exitBeforeEnter:m,presenceAffectsLayout:l=!0,mode:d="sync"})=>{const u=t.useContext(b).forceRender||B()[0],x=F(),p=V(r);let n=p;const c=t.useRef(new Map).current,g=t.useRef(n),C=t.useRef(new Map).current,y=t.useRef(!0);if(L(()=>{y.current=!1,H(p,C),g.current=n}),G(()=>{y.current=!0,C.clear(),c.clear()}),y.current)return a.jsx(a.Fragment,{children:n.map(i=>a.jsx(P,{isPresent:!0,initial:e?void 0:!1,presenceAffectsLayout:l,mode:d,children:i},h(i)))});n=[...n];const M=g.current.map(h),j=p.map(h),v=M.length;for(let i=0;i<v;i++){const f=M[i];j.indexOf(f)===-1&&!c.has(f)&&c.set(f,void 0)}return d==="wait"&&c.size&&(n=[]),c.forEach((i,f)=>{if(j.indexOf(f)!==-1)return;const w=C.get(f);if(!w)return;const K=M.indexOf(f);let E=i;if(!E){const $=()=>{c.delete(f);const z=Array.from(C.keys()).filter(R=>!j.includes(R));if(z.forEach(R=>C.delete(R)),g.current=p.filter(R=>{const I=h(R);return I===f||z.includes(I)}),!c.size){if(x.current===!1)return;u(),s&&s()}};E=a.jsx(P,{isPresent:!1,onExitComplete:$,custom:o,presenceAffectsLayout:l,mode:d,children:w},h(w)),c.set(f,E)}n.splice(K,0,E)}),n=n.map(i=>{const f=i.key;return c.has(f)?i:a.jsx(P,{isPresent:!0,presenceAffectsLayout:l,mode:d,children:i},h(i))}),a.jsx(a.Fragment,{children:c.size?n:n.map(i=>t.cloneElement(i))})};export{q as A};
