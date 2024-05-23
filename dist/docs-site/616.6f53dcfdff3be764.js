"use strict";(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[616],{445:(C,E,r)=>{r.d(E,{Is:()=>c,Lv:()=>z,vT:()=>d});var s=r(4650),t=r(6895);const m=new s.OlP("cdk-dir-doc",{providedIn:"root",factory:function D(){return(0,s.f3M)(t.K0)}}),u=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function p(e){const n=e?.toLowerCase()||"";return"auto"===n&&typeof navigator<"u"&&navigator?.language?u.test(navigator.language)?"rtl":"ltr":"rtl"===n?"rtl":"ltr"}let c=(()=>{class e{constructor(a){this.value="ltr",this.change=new s.vpe,a&&(this.value=p((a.body?a.body.dir:null)||(a.documentElement?a.documentElement.dir:null)||"ltr"))}ngOnDestroy(){this.change.complete()}}return e.\u0275fac=function(a){return new(a||e)(s.LFG(m,8))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),z=(()=>{class e{constructor(){this._dir="ltr",this._isInitialized=!1,this.change=new s.vpe}get dir(){return this._dir}set dir(a){const h=this._dir;this._dir=p(a),this._rawDir=a,h!==this._dir&&this._isInitialized&&this.change.emit(this._dir)}get value(){return this.dir}ngAfterContentInit(){this._isInitialized=!0}ngOnDestroy(){this.change.complete()}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275dir=s.lG2({type:e,selectors:[["","dir",""]],hostVars:1,hostBindings:function(a,h){2&a&&s.uIk("dir",h._rawDir)},inputs:{dir:"dir"},outputs:{change:"dirChange"},exportAs:["dir"],features:[s._Bn([{provide:c,useExisting:e}])]}),e})(),d=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({}),e})()},6616:(C,E,r)=>{r.d(E,{ix:()=>I,sL:()=>R});var s=r(655),t=r(4650),m=r(7579),D=r(4968),u=r(2722),p=r(8675),c=r(9300),z=r(2536),d=r(3187),e=r(7423),n=r(445),a=r(6895),h=r(7044),y=r(1811);const O=["nz-button",""];function B(l,f){1&l&&t._UZ(0,"span",1)}const P=["*"],A="button";let I=(()=>{class l{constructor(o,i,g,v,b,T){this.ngZone=o,this.elementRef=i,this.cdr=g,this.renderer=v,this.nzConfigService=b,this.directionality=T,this._nzModuleName=A,this.nzBlock=!1,this.nzGhost=!1,this.nzSearch=!1,this.nzLoading=!1,this.nzDanger=!1,this.disabled=!1,this.tabIndex=null,this.nzType=null,this.nzShape=null,this.nzSize="default",this.dir="ltr",this.destroy$=new m.x,this.loading$=new m.x,this.nzConfigService.getConfigChangeEventForComponent(A).pipe((0,u.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}insertSpan(o,i){o.forEach(g=>{if("#text"===g.nodeName){const v=i.createElement("span"),b=i.parentNode(g);i.insertBefore(b,v,g),i.appendChild(v,g)}})}assertIconOnly(o,i){const g=Array.from(o.childNodes),v=g.filter(_=>{const N=Array.from(_.childNodes||[]);return"SPAN"===_.nodeName&&N.length>0&&N.every(M=>"svg"===M.nodeName)}).length,b=g.every(_=>"#text"!==_.nodeName);g.filter(_=>{const N=Array.from(_.childNodes||[]);return!("SPAN"===_.nodeName&&N.length>0&&N.every(M=>"svg"===M.nodeName))}).every(_=>"SPAN"!==_.nodeName)&&b&&v>=1&&i.addClass(o,"ant-btn-icon-only")}ngOnInit(){this.directionality.change?.pipe((0,u.R)(this.destroy$)).subscribe(o=>{this.dir=o,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{(0,D.R)(this.elementRef.nativeElement,"click",{capture:!0}).pipe((0,u.R)(this.destroy$)).subscribe(o=>{(this.disabled&&"A"===o.target?.tagName||this.nzLoading)&&(o.preventDefault(),o.stopImmediatePropagation())})})}ngOnChanges(o){const{nzLoading:i}=o;i&&this.loading$.next(this.nzLoading)}ngAfterViewInit(){this.assertIconOnly(this.elementRef.nativeElement,this.renderer),this.insertSpan(this.elementRef.nativeElement.childNodes,this.renderer)}ngAfterContentInit(){this.loading$.pipe((0,p.O)(this.nzLoading),(0,c.h)(()=>!!this.nzIconDirectiveElement),(0,u.R)(this.destroy$)).subscribe(o=>{const i=this.nzIconDirectiveElement.nativeElement;o?this.renderer.setStyle(i,"display","none"):this.renderer.removeStyle(i,"display")})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(o){return new(o||l)(t.Y36(t.R0b),t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(t.Qsj),t.Y36(z.jY),t.Y36(n.Is,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["button","nz-button",""],["a","nz-button",""]],contentQueries:function(o,i,g){if(1&o&&t.Suo(g,e.Ls,5,t.SBq),2&o){let v;t.iGM(v=t.CRH())&&(i.nzIconDirectiveElement=v.first)}},hostAttrs:[1,"ant-btn"],hostVars:30,hostBindings:function(o,i){2&o&&(t.uIk("tabindex",i.disabled?-1:null===i.tabIndex?null:i.tabIndex)("disabled",i.disabled||null),t.ekj("ant-btn-primary","primary"===i.nzType)("ant-btn-dashed","dashed"===i.nzType)("ant-btn-link","link"===i.nzType)("ant-btn-text","text"===i.nzType)("ant-btn-circle","circle"===i.nzShape)("ant-btn-round","round"===i.nzShape)("ant-btn-lg","large"===i.nzSize)("ant-btn-sm","small"===i.nzSize)("ant-btn-dangerous",i.nzDanger)("ant-btn-loading",i.nzLoading)("ant-btn-background-ghost",i.nzGhost)("ant-btn-block",i.nzBlock)("ant-input-search-button",i.nzSearch)("ant-btn-rtl","rtl"===i.dir))},inputs:{nzBlock:"nzBlock",nzGhost:"nzGhost",nzSearch:"nzSearch",nzLoading:"nzLoading",nzDanger:"nzDanger",disabled:"disabled",tabIndex:"tabIndex",nzType:"nzType",nzShape:"nzShape",nzSize:"nzSize"},exportAs:["nzButton"],features:[t.TTD],attrs:O,ngContentSelectors:P,decls:2,vars:1,consts:[["nz-icon","","nzType","loading",4,"ngIf"],["nz-icon","","nzType","loading"]],template:function(o,i){1&o&&(t.F$t(),t.YNc(0,B,1,0,"span",0),t.Hsn(1)),2&o&&t.Q6J("ngIf",i.nzLoading)},dependencies:[a.O5,e.Ls,h.w],encapsulation:2,changeDetection:0}),(0,s.gn)([(0,d.yF)()],l.prototype,"nzBlock",void 0),(0,s.gn)([(0,d.yF)()],l.prototype,"nzGhost",void 0),(0,s.gn)([(0,d.yF)()],l.prototype,"nzSearch",void 0),(0,s.gn)([(0,d.yF)()],l.prototype,"nzLoading",void 0),(0,s.gn)([(0,d.yF)()],l.prototype,"nzDanger",void 0),(0,s.gn)([(0,d.yF)()],l.prototype,"disabled",void 0),(0,s.gn)([(0,z.oS)()],l.prototype,"nzSize",void 0),l})(),R=(()=>{class l{}return l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[n.vT,a.ez,y.vG,e.PV,h.a,h.a,y.vG]}),l})()},7044:(C,E,r)=>{r.d(E,{a:()=>D,w:()=>m});var s=r(3353),t=r(4650);let m=(()=>{class u{constructor(c,z){this.elementRef=c,this.renderer=z,this.hidden=null,this.renderer.setAttribute(this.elementRef.nativeElement,"hidden","")}setHiddenAttribute(){this.hidden?this.renderer.setAttribute(this.elementRef.nativeElement,"hidden","string"==typeof this.hidden?this.hidden:""):this.renderer.removeAttribute(this.elementRef.nativeElement,"hidden")}ngOnChanges(){this.setHiddenAttribute()}ngAfterViewInit(){this.setHiddenAttribute()}}return u.\u0275fac=function(c){return new(c||u)(t.Y36(t.SBq),t.Y36(t.Qsj))},u.\u0275dir=t.lG2({type:u,selectors:[["","nz-button",""],["nz-button-group"],["","nz-icon",""],["","nz-menu-item",""],["","nz-submenu",""],["nz-select-top-control"],["nz-select-placeholder"],["nz-input-group"]],inputs:{hidden:"hidden"},features:[t.TTD]}),u})(),D=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[s.ud]}),u})()},1811:(C,E,r)=>{r.d(E,{dQ:()=>c,vG:()=>z});var s=r(3353),t=r(4650);class m{constructor(e,n,a,h){this.triggerElement=e,this.ngZone=n,this.insertExtraNode=a,this.platformId=h,this.waveTransitionDuration=400,this.styleForPseudo=null,this.extraNode=null,this.lastTime=0,this.onClick=y=>{!this.triggerElement||!this.triggerElement.getAttribute||this.triggerElement.getAttribute("disabled")||"INPUT"===y.target.tagName||this.triggerElement.className.indexOf("disabled")>=0||this.fadeOutWave()},this.platform=new s.t4(this.platformId),this.clickHandler=this.onClick.bind(this),this.bindTriggerEvent()}get waveAttributeName(){return this.insertExtraNode?"ant-click-animating":"ant-click-animating-without-extra-node"}bindTriggerEvent(){this.platform.isBrowser&&this.ngZone.runOutsideAngular(()=>{this.removeTriggerEvent(),this.triggerElement&&this.triggerElement.addEventListener("click",this.clickHandler,!0)})}removeTriggerEvent(){this.triggerElement&&this.triggerElement.removeEventListener("click",this.clickHandler,!0)}removeStyleAndExtraNode(){this.styleForPseudo&&document.body.contains(this.styleForPseudo)&&(document.body.removeChild(this.styleForPseudo),this.styleForPseudo=null),this.insertExtraNode&&this.triggerElement.contains(this.extraNode)&&this.triggerElement.removeChild(this.extraNode)}destroy(){this.removeTriggerEvent(),this.removeStyleAndExtraNode()}fadeOutWave(){const e=this.triggerElement,n=this.getWaveColor(e);e.setAttribute(this.waveAttributeName,"true"),!(Date.now()<this.lastTime+this.waveTransitionDuration)&&(this.isValidColor(n)&&(this.styleForPseudo||(this.styleForPseudo=document.createElement("style")),this.styleForPseudo.innerHTML=`\n      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {\n        --antd-wave-shadow-color: ${n};\n      }`,document.body.appendChild(this.styleForPseudo)),this.insertExtraNode&&(this.extraNode||(this.extraNode=document.createElement("div")),this.extraNode.className="ant-click-animating-node",e.appendChild(this.extraNode)),this.lastTime=Date.now(),this.runTimeoutOutsideZone(()=>{e.removeAttribute(this.waveAttributeName),this.removeStyleAndExtraNode()},this.waveTransitionDuration))}isValidColor(e){return!!e&&"#ffffff"!==e&&"rgb(255, 255, 255)"!==e&&this.isNotGrey(e)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(e)&&"transparent"!==e}isNotGrey(e){const n=e.match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return!(n&&n[1]&&n[2]&&n[3]&&n[1]===n[2]&&n[2]===n[3])}getWaveColor(e){const n=getComputedStyle(e);return n.getPropertyValue("border-top-color")||n.getPropertyValue("border-color")||n.getPropertyValue("background-color")}runTimeoutOutsideZone(e,n){this.ngZone.runOutsideAngular(()=>setTimeout(e,n))}}const D={disabled:!1},u=new t.OlP("nz-wave-global-options",{providedIn:"root",factory:function p(){return D}});let c=(()=>{class d{constructor(n,a,h,y,O){this.ngZone=n,this.elementRef=a,this.config=h,this.animationType=y,this.platformId=O,this.nzWaveExtraNode=!1,this.waveDisabled=!1,this.waveDisabled=this.isConfigDisabled()}get disabled(){return this.waveDisabled}get rendererRef(){return this.waveRenderer}isConfigDisabled(){let n=!1;return this.config&&"boolean"==typeof this.config.disabled&&(n=this.config.disabled),"NoopAnimations"===this.animationType&&(n=!0),n}ngOnDestroy(){this.waveRenderer&&this.waveRenderer.destroy()}ngOnInit(){this.renderWaveIfEnabled()}renderWaveIfEnabled(){!this.waveDisabled&&this.elementRef.nativeElement&&(this.waveRenderer=new m(this.elementRef.nativeElement,this.ngZone,this.nzWaveExtraNode,this.platformId))}disable(){this.waveDisabled=!0,this.waveRenderer&&(this.waveRenderer.removeTriggerEvent(),this.waveRenderer.removeStyleAndExtraNode())}enable(){this.waveDisabled=this.isConfigDisabled()||!1,this.waveRenderer&&this.waveRenderer.bindTriggerEvent()}}return d.\u0275fac=function(n){return new(n||d)(t.Y36(t.R0b),t.Y36(t.SBq),t.Y36(u,8),t.Y36(t.QbO,8),t.Y36(t.Lbi))},d.\u0275dir=t.lG2({type:d,selectors:[["","nz-wave",""],["button","nz-button","",3,"nzType","link",3,"nzType","text"]],inputs:{nzWaveExtraNode:"nzWaveExtraNode"},exportAs:["nzWave"]}),d})(),z=(()=>{class d{}return d.\u0275fac=function(n){return new(n||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[s.ud]}),d})()}}]);