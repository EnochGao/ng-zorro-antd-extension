import{Ed as r,Ga as a,ba as i,ga as c}from"./chunk-OGFJLPPA.js";function m(t,...e){return e.length?e.some(n=>t[n]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var d=new Set,o,T=(()=>{class t{constructor(n,s){this._platform=n,this._nonce=s,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):h}matchMedia(n){return(this._platform.WEBKIT||this._platform.BLINK)&&p(n,this._nonce),this._matchMedia(n)}static{this.\u0275fac=function(s){return new(s||t)(c(r),c(a,8))}}static{this.\u0275prov=i({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function p(t,e){if(!d.has(t))try{o||(o=document.createElement("style"),e&&o.setAttribute("nonce",e),o.setAttribute("type","text/css"),document.head.appendChild(o)),o.sheet&&(o.sheet.insertRule(`@media ${t} {body{ }}`,0),d.add(t))}catch(n){console.error(n)}}function h(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}export{m as a,T as b};
