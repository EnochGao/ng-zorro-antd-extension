import{f as te,m as ne,t as ie}from"./chunk-JLUX7UYA.js";import{d as ee}from"./chunk-H66T5NKY.js";import{a as X,b as Y}from"./chunk-MWDUSRTL.js";import{Ac as Z,Ba as z,C as x,Cd as S,Ha as P,J as E,Ka as l,La as a,Md as J,Nd as Q,Rb as M,Ta as T,X as w,Ya as $,ab as m,ba as A,bb as L,ca as O,cb as k,f as h,ga as u,gc as d,jb as H,la as C,lb as U,ma as F,mb as V,na as y,nb as W,ob as p,pb as f,qb as r,rb as G,sb as K,ua as R,ub as B,va as b,xb as _,xd as q,za as j,zb as I}from"./chunk-OGFJLPPA.js";import{a as c,b as N}from"./chunk-UKNGC2Y4.js";function ae(n,o){n&1&&r(0,"span",3)}function re(n,o){n&1&&r(0,"span",4)}function ce(n,o){n&1&&r(0,"span",5)}function le(n,o){n&1&&r(0,"span",6)}function me(n,o){n&1&&r(0,"span",7)}function he(n,o){if(n&1&&(G(0),r(1,"span",9),K()),n&2){let e=I();l(),m("innerHTML",e.instance.content,P)}}function pe(n,o){if(n&1){let e=B();p(0,"nz-message",2),_("destroyed",function(i){R(e);let s=I();return b(s.remove(i.id,i.userAction))}),f()}if(n&2){let e=o.$implicit;m("instance",e)}}var de=0,D=class{constructor(o,e,t){this.nzSingletonService=o,this.overlay=e,this.injector=t}remove(o){this.container&&(o?this.container.remove(o):this.container.removeAll())}getInstanceId(){return`${this.componentPrefix}-${de++}`}withContainer(o){let e=this.nzSingletonService.getSingletonWithKey(this.componentPrefix);if(e)return e;let t=this.overlay.create({hasBackdrop:!1,scrollStrategy:this.overlay.scrollStrategies.noop(),positionStrategy:this.overlay.position().global()}),i=new te(o,null,this.injector),s=t.attach(i),v=t.hostElement;return v.style.zIndex="1010",e||(this.container=e=s.instance,this.nzSingletonService.registerSingletonWithKey(this.componentPrefix,e),this.container.afterAllInstancesRemoved.subscribe(()=>{this.container=void 0,this.nzSingletonService.unregisterSingletonWithKey(this.componentPrefix),t.dispose()})),e}},ue=(()=>{class n{constructor(e,t){this.cdr=e,this.nzConfigService=t,this.instances=[],this._afterAllInstancesRemoved=new h,this.afterAllInstancesRemoved=this._afterAllInstancesRemoved.asObservable(),this.destroy$=new h,this.updateConfig()}ngOnInit(){this.subscribeConfigChange()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}create(e){let t=this.onCreate(e);return this.instances.length>=this.config.nzMaxStack&&(this.instances=this.instances.slice(1)),this.instances=[...this.instances,t],this.readyInstances(),t}remove(e,t=!1){this.instances.map((i,s)=>({index:s,instance:i})).filter(({instance:i})=>i.messageId===e).forEach(({index:i,instance:s})=>{this.instances.splice(i,1),this.instances=[...this.instances],this.onRemove(s,t),this.readyInstances()}),this.instances.length||this.onAllInstancesRemoved()}removeAll(){this.instances.forEach(e=>this.onRemove(e,!1)),this.instances=[],this.readyInstances(),this.onAllInstancesRemoved()}onCreate(e){return e.options=this.mergeOptions(e.options),e.onClose=new h,e}onRemove(e,t){e.onClose.next(t),e.onClose.complete()}onAllInstancesRemoved(){this._afterAllInstancesRemoved.next(),this._afterAllInstancesRemoved.complete()}readyInstances(){this.cdr.detectChanges()}mergeOptions(e){let{nzDuration:t,nzAnimate:i,nzPauseOnHover:s}=this.config;return c({nzDuration:t,nzAnimate:i,nzPauseOnHover:s},e)}static{this.\u0275fac=function(t){return new(t||n)(a(d),a(S))}}static{this.\u0275dir=y({type:n})}}return n})(),fe=(()=>{class n{constructor(e){this.cdr=e,this.destroyed=new z,this.animationStateChanged=new h,this.userAction=!1}ngOnInit(){this.options=this.instance.options,this.options.nzAnimate&&(this.instance.state="enter",this.animationStateChanged.pipe(x(e=>e.phaseName==="done"&&e.toState==="leave"),E(1)).subscribe(()=>{clearTimeout(this.closeTimer),this.destroyed.next({id:this.instance.messageId,userAction:this.userAction})})),this.autoClose=this.options.nzDuration>0,this.autoClose&&(this.initErase(),this.startEraseTimeout())}ngOnDestroy(){this.autoClose&&this.clearEraseTimeout(),this.animationStateChanged.complete()}onEnter(){this.autoClose&&this.options.nzPauseOnHover&&(this.clearEraseTimeout(),this.updateTTL())}onLeave(){this.autoClose&&this.options.nzPauseOnHover&&this.startEraseTimeout()}destroy(e=!1){this.userAction=e,this.options.nzAnimate?(this.instance.state="leave",this.cdr.detectChanges(),this.closeTimer=setTimeout(()=>{this.closeTimer=void 0,this.destroyed.next({id:this.instance.messageId,userAction:e})},200)):this.destroyed.next({id:this.instance.messageId,userAction:e})}initErase(){this.eraseTTL=this.options.nzDuration,this.eraseTimingStart=Date.now()}updateTTL(){this.autoClose&&(this.eraseTTL-=Date.now()-this.eraseTimingStart)}startEraseTimeout(){this.eraseTTL>0?(this.clearEraseTimeout(),this.eraseTimer=setTimeout(()=>this.destroy(),this.eraseTTL),this.eraseTimingStart=Date.now()):this.destroy()}clearEraseTimeout(){this.eraseTimer!==null&&(clearTimeout(this.eraseTimer),this.eraseTimer=void 0)}static{this.\u0275fac=function(t){return new(t||n)(a(d))}}static{this.\u0275dir=y({type:n})}}return n})(),se=(()=>{class n extends fe{constructor(e){super(e),this.destroyed=new z}static{this.\u0275fac=function(t){return new(t||n)(a(d))}}static{this.\u0275cmp=C({type:n,selectors:[["nz-message"]],inputs:{instance:"instance"},outputs:{destroyed:"destroyed"},exportAs:["nzMessage"],standalone:!0,features:[T,M],decls:9,vars:4,consts:[[1,"ant-message-notice",3,"mouseenter","mouseleave"],[1,"ant-message-notice-content"],[1,"ant-message-custom-content",3,"ngClass"],["nz-icon","","nzType","check-circle"],["nz-icon","","nzType","info-circle"],["nz-icon","","nzType","exclamation-circle"],["nz-icon","","nzType","close-circle"],["nz-icon","","nzType","loading"],[4,"nzStringTemplateOutlet"],[3,"innerHTML"]],template:function(t,i){if(t&1&&(p(0,"div",0),_("@moveUpMotion.done",function(v){return i.animationStateChanged.next(v)})("mouseenter",function(){return i.onEnter()})("mouseleave",function(){return i.onLeave()}),p(1,"div",1)(2,"div",2),$(3,ae,1,0,"span",3)(4,re,1,0,"span",4)(5,ce,1,0,"span",5)(6,le,1,0,"span",6)(7,me,1,0,"span",7)(8,he,2,1,"ng-container",8),f()()()),t&2){let s;m("@moveUpMotion",i.instance.state),l(2),m("ngClass","ant-message-"+i.instance.type),l(),H((s=i.instance.type)==="success"?3:s==="info"?4:s==="warning"?5:s==="error"?6:s==="loading"?7:-1),l(5),m("nzStringTemplateOutlet",i.instance.content)}},dependencies:[Z,Q,J,Y,X],encapsulation:2,data:{animation:[ie]},changeDetection:0})}}return n})(),g="message",ge={nzAnimate:!0,nzDuration:3e3,nzMaxStack:7,nzPauseOnHover:!0,nzTop:24,nzDirection:"ltr"},oe=(()=>{class n extends ue{constructor(e,t){super(e,t),this.dir="ltr";let i=this.nzConfigService.getConfigForComponent(g);this.dir=i?.nzDirection||"ltr"}subscribeConfigChange(){this.nzConfigService.getConfigChangeEventForComponent(g).pipe(w(this.destroy$)).subscribe(()=>{this.updateConfig();let e=this.nzConfigService.getConfigForComponent(g);if(e){let{nzDirection:t}=e;this.dir=t||this.dir}})}updateConfig(){this.config=c(c(c({},ge),this.config),this.nzConfigService.getConfigForComponent(g)),this.top=q(this.config.nzTop),this.cdr.markForCheck()}static{this.\u0275fac=function(t){return new(t||n)(a(d),a(S))}}static{this.\u0275cmp=C({type:n,selectors:[["nz-message-container"]],exportAs:["nzMessageContainer"],standalone:!0,features:[T,M],decls:3,vars:4,consts:[[1,"ant-message"],[3,"instance"],[3,"destroyed","instance"]],template:function(t,i){t&1&&(p(0,"div",0),V(1,pe,1,1,"nz-message",1,U),f()),t&2&&(L("top",i.top),k("ant-message-rtl",i.dir==="rtl"),l(),W(i.instances))},dependencies:[se],encapsulation:2,changeDetection:0})}}return n})(),ke=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=F({type:n})}static{this.\u0275inj=O({imports:[oe,se]})}}return n})(),He=(()=>{class n extends D{constructor(e,t,i){super(e,t,i),this.componentPrefix="message-"}success(e,t){return this.createInstance({type:"success",content:e},t)}error(e,t){return this.createInstance({type:"error",content:e},t)}info(e,t){return this.createInstance({type:"info",content:e},t)}warning(e,t){return this.createInstance({type:"warning",content:e},t)}loading(e,t){return this.createInstance({type:"loading",content:e},t)}create(e,t,i){return this.createInstance({type:e,content:t},i)}createInstance(e,t){return this.container=this.withContainer(oe),this.container.create(N(c({},e),{createdAt:new Date,messageId:this.getInstanceId(),options:t}))}static{this.\u0275fac=function(t){return new(t||n)(u(ee),u(ne),u(j))}}static{this.\u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();export{ke as a,He as b};
