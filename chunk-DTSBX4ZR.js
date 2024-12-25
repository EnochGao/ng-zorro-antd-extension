import{f as u,g as G}from"./chunk-H66T5NKY.js";import{b as C}from"./chunk-KBDRVQ2X.js";import{a as g}from"./chunk-K66H5K2I.js";import{Ca as b,Da as m,Ed as D,La as o,Qa as y,X as c,bb as S,ca as w,cb as O,f as p,h as v,ha as M,ma as $,na as z,qd as h,ta as f}from"./chunk-OGFJLPPA.js";import{a as d}from"./chunk-UKNGC2Y4.js";var R=(()=>{class s{getGutter(){let t=[null,null],e=this.nzGutter||0;return(Array.isArray(e)?e:[e,null]).forEach((r,n)=>{typeof r=="object"&&r!==null?(t[n]=null,Object.keys(u).map(a=>{let l=a;this.mediaMatcher.matchMedia(u[l]).matches&&r[l]&&(t[n]=r[l])})):t[n]=Number(r)||null}),t}setGutterStyle(){let[t,e]=this.getGutter();this.actualGutter$.next([t,e]);let i=(r,n)=>{let a=this.elementRef.nativeElement;n!==null&&this.renderer.setStyle(a,r,`-${n/2}px`)};i("margin-left",t),i("margin-right",t),i("margin-top",e),i("margin-bottom",e)}constructor(t,e,i,r,n,a,l){this.elementRef=t,this.renderer=e,this.mediaMatcher=i,this.ngZone=r,this.platform=n,this.breakpointService=a,this.directionality=l,this.nzAlign=null,this.nzJustify=null,this.nzGutter=null,this.actualGutter$=new v(1),this.dir="ltr",this.destroy$=new p}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(c(this.destroy$)).subscribe(t=>{this.dir=t}),this.setGutterStyle()}ngOnChanges(t){t.nzGutter&&this.setGutterStyle()}ngAfterViewInit(){this.platform.isBrowser&&this.breakpointService.subscribe(u).pipe(c(this.destroy$)).subscribe(()=>{this.setGutterStyle()})}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}static{this.\u0275fac=function(e){return new(e||s)(o(m),o(y),o(C),o(b),o(D),o(G),o(g))}}static{this.\u0275dir=z({type:s,selectors:[["","nz-row",""],["nz-row"],["nz-form-item"]],hostAttrs:[1,"ant-row"],hostVars:20,hostBindings:function(e,i){e&2&&O("ant-row-top",i.nzAlign==="top")("ant-row-middle",i.nzAlign==="middle")("ant-row-bottom",i.nzAlign==="bottom")("ant-row-start",i.nzJustify==="start")("ant-row-end",i.nzJustify==="end")("ant-row-center",i.nzJustify==="center")("ant-row-space-around",i.nzJustify==="space-around")("ant-row-space-between",i.nzJustify==="space-between")("ant-row-space-evenly",i.nzJustify==="space-evenly")("ant-row-rtl",i.dir==="rtl")},inputs:{nzAlign:"nzAlign",nzJustify:"nzJustify",nzGutter:"nzGutter"},exportAs:["nzRow"],standalone:!0,features:[f]})}}return s})(),V=(()=>{class s{setHostClassMap(){let t=d({"ant-col":!0,[`ant-col-${this.nzSpan}`]:h(this.nzSpan),[`ant-col-order-${this.nzOrder}`]:h(this.nzOrder),[`ant-col-offset-${this.nzOffset}`]:h(this.nzOffset),[`ant-col-pull-${this.nzPull}`]:h(this.nzPull),[`ant-col-push-${this.nzPush}`]:h(this.nzPush),"ant-col-rtl":this.dir==="rtl"},this.generateClass());for(let e in this.classMap)this.classMap.hasOwnProperty(e)&&this.renderer.removeClass(this.elementRef.nativeElement,e);this.classMap=d({},t);for(let e in this.classMap)this.classMap.hasOwnProperty(e)&&this.classMap[e]&&this.renderer.addClass(this.elementRef.nativeElement,e)}setHostFlexStyle(){this.hostFlexStyle=this.parseFlex(this.nzFlex)}parseFlex(t){return typeof t=="number"?`${t} ${t} auto`:typeof t=="string"&&/^\d+(\.\d+)?(px|em|rem|%)$/.test(t)?`0 0 ${t}`:t}generateClass(){let t=["nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"],e={};return t.forEach(i=>{let r=i.replace("nz","").toLowerCase();if(h(this[i]))if(typeof this[i]=="number"||typeof this[i]=="string")e[`ant-col-${r}-${this[i]}`]=!0;else{let n=this[i];["span","pull","push","offset","order"].forEach(l=>{let F=l==="span"?"-":`-${l}-`;e[`ant-col-${r}${F}${n[l]}`]=n&&h(n[l])})}}),e}constructor(t,e,i){this.elementRef=t,this.renderer=e,this.directionality=i,this.classMap={},this.destroy$=new p,this.hostFlexStyle=null,this.dir="ltr",this.nzFlex=null,this.nzSpan=null,this.nzOrder=null,this.nzOffset=null,this.nzPush=null,this.nzPull=null,this.nzXs=null,this.nzSm=null,this.nzMd=null,this.nzLg=null,this.nzXl=null,this.nzXXl=null,this.nzRowDirective=M(R,{host:!0,optional:!0})}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(c(this.destroy$)).subscribe(t=>{this.dir=t,this.setHostClassMap()}),this.setHostClassMap(),this.setHostFlexStyle()}ngOnChanges(t){this.setHostClassMap();let{nzFlex:e}=t;e&&this.setHostFlexStyle()}ngAfterViewInit(){this.nzRowDirective&&this.nzRowDirective.actualGutter$.pipe(c(this.destroy$)).subscribe(([t,e])=>{let i=(r,n)=>{let a=this.elementRef.nativeElement;n!==null&&this.renderer.setStyle(a,r,`${n/2}px`)};i("padding-left",t),i("padding-right",t),i("padding-top",e),i("padding-bottom",e)})}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}static{this.\u0275fac=function(e){return new(e||s)(o(m),o(y),o(g))}}static{this.\u0275dir=z({type:s,selectors:[["","nz-col",""],["nz-col"],["nz-form-control"],["nz-form-label"]],hostVars:2,hostBindings:function(e,i){e&2&&S("flex",i.hostFlexStyle)},inputs:{nzFlex:"nzFlex",nzSpan:"nzSpan",nzOrder:"nzOrder",nzOffset:"nzOffset",nzPush:"nzPush",nzPull:"nzPull",nzXs:"nzXs",nzSm:"nzSm",nzMd:"nzMd",nzLg:"nzLg",nzXl:"nzXl",nzXXl:"nzXXl"},exportAs:["nzCol"],standalone:!0,features:[f]})}}return s})(),Z=(()=>{class s{static{this.\u0275fac=function(e){return new(e||s)}}static{this.\u0275mod=$({type:s})}static{this.\u0275inj=w({})}}return s})();export{R as a,V as b,Z as c};
