"use strict";(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[364],{4851:(A,O,r)=>{r.r(O),r.d(O,{EXAMPLES_MODULE:()=>s,EXAMPLE_COMPONENTS:()=>_});var e=r(4006),m=r(5635),M=r(6895),y=r(655),i=r(4650),f=r(4686);class d extends e.Fj{constructor(){super(...arguments),this._nzModuleName="nzxTrim",this.nzxConfigService=(0,i.f3M)(f.d4),this.trimType="trim",this.ngOnChange=t=>{const n=t[this.trimType]();this.onChange(n)},this.ngOnBlur=t=>{this.writeValue(t[this.trimType]()),this.onTouched()}}writeValue(t){"string"==typeof t&&(t=t[this.trimType]()),super.writeValue(t)}}d.\u0275fac=function(){let a;return function(n){return(a||(a=i.n5z(d)))(n||d)}}(),d.\u0275dir=i.lG2({type:d,selectors:[["","nzxTrim",""]],hostBindings:function(t,n){1&t&&i.NdJ("input",function(h){return n.ngOnChange(h.target.value)})("blur",function(h){return n.ngOnBlur(h.target.value)})},inputs:{trimType:"trimType"},exportAs:["NzxTrim"],features:[i._Bn([{provide:e.JU,useExisting:(0,i.Gpc)(()=>d),multi:!0}]),i.qOj]}),(0,y.gn)([(0,f.Ak)()],d.prototype,"trimType",void 0);let p=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=i.oAB({type:a}),a.\u0275inj=i.cJS({}),a})();var l=r(3679);let g=(()=>{class a{valueChange(n){console.log("valueChange::",JSON.stringify(n))}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=i.Xpm({type:a,selectors:[["nzx-trim-example"]],standalone:!0,features:[i.jDz],decls:16,vars:6,consts:[["nz-input","","ngModel","","nzxTrim","","trimType","trimEnd",3,"ngModelChange"],["input","ngModel"],["nz-row",""],["nz-col","","nzSpan","2"],["nz-col","","nzSpan","20"],["rows","4","nz-input","","ngModel","","nzxTrim","",3,"ngModelChange"],["textarea","ngModel"]],template:function(n,u){if(1&n&&(i.TgZ(0,"input",0,1),i.NdJ("ngModelChange",function(v){return u.valueChange(v)}),i.qZA(),i.TgZ(2,"div",2)(3,"div",3),i._uU(4,"input value:"),i.qZA(),i.TgZ(5,"pre",4),i._uU(6),i.ALo(7,"json"),i.qZA()(),i.TgZ(8,"textarea",5,6),i.NdJ("ngModelChange",function(v){return u.valueChange(v)}),i.qZA(),i.TgZ(10,"div",2)(11,"div",3),i._uU(12,"textarea value:"),i.qZA(),i.TgZ(13,"pre",4),i._uU(14),i.ALo(15,"json"),i.qZA()()),2&n){const h=i.MAs(1),v=i.MAs(9);i.xp6(6),i.hij("        ",i.lcZ(7,2,h.value),"\n      "),i.xp6(8),i.hij("        ",i.lcZ(15,4,v.value),"\n      ")}},dependencies:[M.ez,M.Ts,l.Jb,l.t3,l.SK,e.u5,e.Fj,e.JJ,e.On,m.o7,m.Zp,p,d],encapsulation:2}),a})();const _={"nzx-trim-trim-example":g},s=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=i.oAB({type:a}),a.\u0275inj=i.cJS({imports:[M.ez,g]}),a})()},5684:(A,O,r)=>{r.d(O,{T:()=>m});var e=r(9300);function m(M){return(0,e.h)((y,i)=>M<=i)}},445:(A,O,r)=>{r.d(O,{Is:()=>D,Lv:()=>d,vT:()=>p});var e=r(4650),m=r(6895);const M=new e.OlP("cdk-dir-doc",{providedIn:"root",factory:function y(){return(0,e.f3M)(m.K0)}}),i=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function f(l){const g=l?.toLowerCase()||"";return"auto"===g&&typeof navigator<"u"&&navigator?.language?i.test(navigator.language)?"rtl":"ltr":"rtl"===g?"rtl":"ltr"}let D=(()=>{class l{constructor(o){this.value="ltr",this.change=new e.vpe,o&&(this.value=f((o.body?o.body.dir:null)||(o.documentElement?o.documentElement.dir:null)||"ltr"))}ngOnDestroy(){this.change.complete()}}return l.\u0275fac=function(o){return new(o||l)(e.LFG(M,8))},l.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})(),d=(()=>{class l{constructor(){this._dir="ltr",this._isInitialized=!1,this.change=new e.vpe}get dir(){return this._dir}set dir(o){const _=this._dir;this._dir=f(o),this._rawDir=o,_!==this._dir&&this._isInitialized&&this.change.emit(this._dir)}get value(){return this.dir}ngAfterContentInit(){this._isInitialized=!0}ngOnDestroy(){this.change.complete()}}return l.\u0275fac=function(o){return new(o||l)},l.\u0275dir=e.lG2({type:l,selectors:[["","dir",""]],hostVars:1,hostBindings:function(o,_){2&o&&e.uIk("dir",_._rawDir)},inputs:{dir:"dir"},outputs:{change:"dirChange"},exportAs:["dir"],features:[e._Bn([{provide:D,useExisting:l}])]}),l})(),p=(()=>{class l{}return l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({}),l})()},2289:(A,O,r)=>{r.d(O,{Yg:()=>v,vx:()=>n,xu:()=>s});var e=r(4650),m=r(1281),M=r(7579),y=r(9841),i=r(7272),f=r(9751),D=r(5698),d=r(5684),p=r(8372),l=r(4004),g=r(8675),o=r(2722),_=r(3353);let s=(()=>{class c{}return c.\u0275fac=function(z){return new(z||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({}),c})();const a=new Set;let t,n=(()=>{class c{constructor(z){this._platform=z,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):h}matchMedia(z){return(this._platform.WEBKIT||this._platform.BLINK)&&function u(c){if(!a.has(c))try{t||(t=document.createElement("style"),t.setAttribute("type","text/css"),document.head.appendChild(t)),t.sheet&&(t.sheet.insertRule(`@media ${c} {body{ }}`,0),a.add(c))}catch(E){console.error(E)}}(z),this._matchMedia(z)}}return c.\u0275fac=function(z){return new(z||c)(e.LFG(_.t4))},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})();function h(c){return{matches:"all"===c||""===c,media:c,addListener:()=>{},removeListener:()=>{}}}let v=(()=>{class c{constructor(z,C){this._mediaMatcher=z,this._zone=C,this._queries=new Map,this._destroySubject=new M.x}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(z){return x((0,m.Eq)(z)).some(R=>this._registerQuery(R).mql.matches)}observe(z){const R=x((0,m.Eq)(z)).map(w=>this._registerQuery(w).observable);let P=(0,y.a)(R);return P=(0,i.z)(P.pipe((0,D.q)(1)),P.pipe((0,d.T)(1),(0,p.b)(0))),P.pipe((0,l.U)(w=>{const S={matches:!1,breakpoints:{}};return w.forEach(({matches:N,query:I})=>{S.matches=S.matches||N,S.breakpoints[I]=N}),S}))}_registerQuery(z){if(this._queries.has(z))return this._queries.get(z);const C=this._mediaMatcher.matchMedia(z),P={observable:new f.y(w=>{const S=N=>this._zone.run(()=>w.next(N));return C.addListener(S),()=>{C.removeListener(S)}}).pipe((0,g.O)(C),(0,l.U)(({matches:w})=>({query:z,matches:w})),(0,o.R)(this._destroySubject)),mql:C};return this._queries.set(z,P),P}}return c.\u0275fac=function(z){return new(z||c)(e.LFG(n),e.LFG(e.R0b))},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})();function x(c){return c.map(E=>E.split(",")).reduce((E,z)=>E.concat(z)).map(E=>E.trim())}},9570:(A,O,r)=>{r.d(O,{kH:()=>D,mJ:()=>g,w_:()=>l,yW:()=>d});var e=r(4650),m=r(4707),M=r(1135),y=r(6895),i=r(7423);function f(o,_){if(1&o&&e._UZ(0,"span",1),2&o){const s=e.oxw();e.Q6J("nzType",s.iconType)}}let D=(()=>{class o{constructor(){this.formStatusChanges=new m.t(1)}}return o.\u0275fac=function(s){return new(s||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac}),o})(),d=(()=>{class o{constructor(){this.noFormStatus=new M.X(!1)}}return o.\u0275fac=function(s){return new(s||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac}),o})();const p={error:"close-circle-fill",validating:"loading",success:"check-circle-fill",warning:"exclamation-circle-fill"};let l=(()=>{class o{constructor(s){this.cdr=s,this.status="",this.iconType=null}ngOnChanges(s){this.updateIcon()}updateIcon(){this.iconType=this.status?p[this.status]:null,this.cdr.markForCheck()}}return o.\u0275fac=function(s){return new(s||o)(e.Y36(e.sBO))},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-form-item-feedback-icon"]],hostAttrs:[1,"ant-form-item-feedback-icon"],hostVars:8,hostBindings:function(s,a){2&s&&e.ekj("ant-form-item-feedback-icon-error","error"===a.status)("ant-form-item-feedback-icon-warning","warning"===a.status)("ant-form-item-feedback-icon-success","success"===a.status)("ant-form-item-feedback-icon-validating","validating"===a.status)},inputs:{status:"status"},exportAs:["nzFormFeedbackIcon"],features:[e.TTD],decls:1,vars:1,consts:[["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"]],template:function(s,a){1&s&&e.YNc(0,f,1,1,"span",0),2&s&&e.Q6J("ngIf",a.iconType)},dependencies:[y.O5,i.Ls],encapsulation:2,changeDetection:0}),o})(),g=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[y.ez,i.PV]}),o})()},6287:(A,O,r)=>{r.d(O,{T:()=>i,f:()=>M});var e=r(6895),m=r(4650);let M=(()=>{class f{constructor(d,p){this.viewContainer=d,this.templateRef=p,this.embeddedViewRef=null,this.context=new y,this.nzStringTemplateOutletContext=null,this.nzStringTemplateOutlet=null}static ngTemplateContextGuard(d,p){return!0}recreateView(){this.viewContainer.clear();const d=this.nzStringTemplateOutlet instanceof m.Rgc;this.embeddedViewRef=this.viewContainer.createEmbeddedView(d?this.nzStringTemplateOutlet:this.templateRef,d?this.nzStringTemplateOutletContext:this.context)}updateContext(){const p=this.nzStringTemplateOutlet instanceof m.Rgc?this.nzStringTemplateOutletContext:this.context,l=this.embeddedViewRef.context;if(p)for(const g of Object.keys(p))l[g]=p[g]}ngOnChanges(d){const{nzStringTemplateOutletContext:p,nzStringTemplateOutlet:l}=d;l&&(this.context.$implicit=l.currentValue),(()=>{let _=!1;return l&&(_=!!l.firstChange||(l.previousValue instanceof m.Rgc||l.currentValue instanceof m.Rgc)),p&&(t=>{const n=Object.keys(t.previousValue||{}),u=Object.keys(t.currentValue||{});if(n.length===u.length){for(const h of u)if(-1===n.indexOf(h))return!0;return!1}return!0})(p)||_})()?this.recreateView():this.updateContext()}}return f.\u0275fac=function(d){return new(d||f)(m.Y36(m.s_b),m.Y36(m.Rgc))},f.\u0275dir=m.lG2({type:f,selectors:[["","nzStringTemplateOutlet",""]],inputs:{nzStringTemplateOutletContext:"nzStringTemplateOutletContext",nzStringTemplateOutlet:"nzStringTemplateOutlet"},exportAs:["nzStringTemplateOutlet"],features:[m.TTD]}),f})();class y{}let i=(()=>{class f{}return f.\u0275fac=function(d){return new(d||f)},f.\u0275mod=m.oAB({type:f}),f.\u0275inj=m.cJS({imports:[e.ez]}),f})()},3679:(A,O,r)=>{r.d(O,{Jb:()=>_,SK:()=>g,t3:()=>o});var e=r(4650),m=r(4707),M=r(7579),y=r(2722),i=r(3303),f=r(2289),D=r(3353),d=r(445),p=r(3187),l=r(6895);let g=(()=>{class s{constructor(t,n,u,h,v,x,T){this.elementRef=t,this.renderer=n,this.mediaMatcher=u,this.ngZone=h,this.platform=v,this.breakpointService=x,this.directionality=T,this.nzAlign=null,this.nzJustify=null,this.nzGutter=null,this.actualGutter$=new m.t(1),this.dir="ltr",this.destroy$=new M.x}getGutter(){const t=[null,null],n=this.nzGutter||0;return(Array.isArray(n)?n:[n,null]).forEach((h,v)=>{"object"==typeof h&&null!==h?(t[v]=null,Object.keys(i.WV).map(x=>{const T=x;this.mediaMatcher.matchMedia(i.WV[T]).matches&&h[T]&&(t[v]=h[T])})):t[v]=Number(h)||null}),t}setGutterStyle(){const[t,n]=this.getGutter();this.actualGutter$.next([t,n]);const u=(h,v)=>{null!==v&&this.renderer.setStyle(this.elementRef.nativeElement,h,`-${v/2}px`)};u("margin-left",t),u("margin-right",t),u("margin-top",n),u("margin-bottom",n)}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe((0,y.R)(this.destroy$)).subscribe(t=>{this.dir=t}),this.setGutterStyle()}ngOnChanges(t){t.nzGutter&&this.setGutterStyle()}ngAfterViewInit(){this.platform.isBrowser&&this.breakpointService.subscribe(i.WV).pipe((0,y.R)(this.destroy$)).subscribe(()=>{this.setGutterStyle()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(f.vx),e.Y36(e.R0b),e.Y36(D.t4),e.Y36(i.r3),e.Y36(d.Is,8))},s.\u0275dir=e.lG2({type:s,selectors:[["","nz-row",""],["nz-row"],["nz-form-item"]],hostAttrs:[1,"ant-row"],hostVars:20,hostBindings:function(t,n){2&t&&e.ekj("ant-row-top","top"===n.nzAlign)("ant-row-middle","middle"===n.nzAlign)("ant-row-bottom","bottom"===n.nzAlign)("ant-row-start","start"===n.nzJustify)("ant-row-end","end"===n.nzJustify)("ant-row-center","center"===n.nzJustify)("ant-row-space-around","space-around"===n.nzJustify)("ant-row-space-between","space-between"===n.nzJustify)("ant-row-space-evenly","space-evenly"===n.nzJustify)("ant-row-rtl","rtl"===n.dir)},inputs:{nzAlign:"nzAlign",nzJustify:"nzJustify",nzGutter:"nzGutter"},exportAs:["nzRow"],features:[e.TTD]}),s})(),o=(()=>{class s{constructor(t,n,u,h){this.elementRef=t,this.nzRowDirective=n,this.renderer=u,this.directionality=h,this.classMap={},this.destroy$=new M.x,this.hostFlexStyle=null,this.dir="ltr",this.nzFlex=null,this.nzSpan=null,this.nzOrder=null,this.nzOffset=null,this.nzPush=null,this.nzPull=null,this.nzXs=null,this.nzSm=null,this.nzMd=null,this.nzLg=null,this.nzXl=null,this.nzXXl=null}setHostClassMap(){const t={"ant-col":!0,[`ant-col-${this.nzSpan}`]:(0,p.DX)(this.nzSpan),[`ant-col-order-${this.nzOrder}`]:(0,p.DX)(this.nzOrder),[`ant-col-offset-${this.nzOffset}`]:(0,p.DX)(this.nzOffset),[`ant-col-pull-${this.nzPull}`]:(0,p.DX)(this.nzPull),[`ant-col-push-${this.nzPush}`]:(0,p.DX)(this.nzPush),"ant-col-rtl":"rtl"===this.dir,...this.generateClass()};for(const n in this.classMap)this.classMap.hasOwnProperty(n)&&this.renderer.removeClass(this.elementRef.nativeElement,n);this.classMap={...t};for(const n in this.classMap)this.classMap.hasOwnProperty(n)&&this.classMap[n]&&this.renderer.addClass(this.elementRef.nativeElement,n)}setHostFlexStyle(){this.hostFlexStyle=this.parseFlex(this.nzFlex)}parseFlex(t){return"number"==typeof t?`${t} ${t} auto`:"string"==typeof t&&/^\d+(\.\d+)?(px|em|rem|%)$/.test(t)?`0 0 ${t}`:t}generateClass(){const n={};return["nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"].forEach(u=>{const h=u.replace("nz","").toLowerCase();if((0,p.DX)(this[u]))if("number"==typeof this[u]||"string"==typeof this[u])n[`ant-col-${h}-${this[u]}`]=!0;else{const v=this[u];["span","pull","push","offset","order"].forEach(T=>{n[`ant-col-${h}${"span"===T?"-":`-${T}-`}${v[T]}`]=v&&(0,p.DX)(v[T])})}}),n}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe((0,y.R)(this.destroy$)).subscribe(t=>{this.dir=t,this.setHostClassMap()}),this.setHostClassMap(),this.setHostFlexStyle()}ngOnChanges(t){this.setHostClassMap();const{nzFlex:n}=t;n&&this.setHostFlexStyle()}ngAfterViewInit(){this.nzRowDirective&&this.nzRowDirective.actualGutter$.pipe((0,y.R)(this.destroy$)).subscribe(([t,n])=>{const u=(h,v)=>{null!==v&&this.renderer.setStyle(this.elementRef.nativeElement,h,v/2+"px")};u("padding-left",t),u("padding-right",t),u("padding-top",n),u("padding-bottom",n)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(e.SBq),e.Y36(g,9),e.Y36(e.Qsj),e.Y36(d.Is,8))},s.\u0275dir=e.lG2({type:s,selectors:[["","nz-col",""],["nz-col"],["nz-form-control"],["nz-form-label"]],hostVars:2,hostBindings:function(t,n){2&t&&e.Udp("flex",n.hostFlexStyle)},inputs:{nzFlex:"nzFlex",nzSpan:"nzSpan",nzOrder:"nzOrder",nzOffset:"nzOffset",nzPush:"nzPush",nzPull:"nzPull",nzXs:"nzXs",nzSm:"nzSm",nzMd:"nzMd",nzLg:"nzLg",nzXl:"nzXl",nzXXl:"nzXXl"},exportAs:["nzCol"],features:[e.TTD]}),s})(),_=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[d.vT,l.ez,f.xu,D.ud]}),s})()}}]);