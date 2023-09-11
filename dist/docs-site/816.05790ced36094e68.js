"use strict";(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[816],{763:(U,N,e)=>{e.d(N,{k:()=>m});var u=e(4006);function o(c,_,y){_?(c.markAsPristine(),y&&y(c),c.updateValueAndValidity({onlySelf:!0})):c.invalid&&(c.markAsDirty(),c.updateValueAndValidity({onlySelf:!0})),c?.controls&&m(c,_)}function m(c,_=!1,y){if(c instanceof u.cw)for(const l in c.controls)Object.prototype.hasOwnProperty.call(c.controls,l)&&o(c.controls[l],_,y);else if(c instanceof u.Oe)for(const l of c.controls)o(l,_,y);else c instanceof u.NI&&o(c,_,y)}},4134:(U,N,e)=>{e.r(N),e.d(N,{EXAMPLES_MODULE:()=>X,EXAMPLE_COMPONENTS:()=>k});var u=e(9651),o=e(6895),m=e(763),c=e(4968),_=e(5698),y=e(4004);function l(a="*",v=!1){const n=document.createElement("input");return n.type="file",n.accept=a,n.multiple=v,n.click(),n.remove(),(0,c.R)(n,"change").pipe((0,_.q)(1)).pipe((0,y.U)(z=>n?.files&&n?.files.length?v?n?.files:n.files[0]:null))}var d=e(6616),A=e(1971),f=e(6704),r=e(6555),i=e(4006),s=e(5635),g=e(3679),O=e(6903),t=e(4650),T=e(7044),p=e(1811);function x(a,v){1&a&&(t.TgZ(0,"span"),t._uU(1," Alias "),t.qZA())}function E(a,v){if(1&a){const n=t.EpF();t.TgZ(0,"nz-form-item")(1,"nz-form-label",20),t.YNc(2,x,2,0,"span",21),t.qZA(),t.TgZ(3,"nz-form-control",3),t._UZ(4,"input",22),t.qZA(),t.TgZ(5,"div",23)(6,"a",24),t.NdJ("click",function(){const L=t.CHM(n).index,Z=t.oxw();return t.KtG(Z.remove(L))}),t._uU(7,"remove"),t.qZA()()()}if(2&a){const n=v.index;t.xp6(1),t.Q6J("nzSpan",7)("nzRequired",!n)("nzNoColon",!!n),t.xp6(1),t.Q6J("ngIf",!n),t.xp6(1),t.Q6J("nzSpan",12),t.xp6(1),t.Q6J("formControlName",n),t.xp6(1),t.Q6J("nzSpan",2)}}function F(a,v){if(1&a){const n=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){t.CHM(n);const h=t.oxw();return t.KtG(h.markAsDirty())}),t._uU(1," markAsDirty "),t.qZA()}}function M(a,v){if(1&a){const n=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){t.CHM(n);const h=t.oxw();return t.KtG(h.markAsPristine())}),t._uU(1," markAsPristine "),t.qZA()}}function b(a,v){if(1&a){const n=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){t.CHM(n);const h=t.oxw();return t.KtG(h.markAsFullClean())}),t._uU(1," markAsFullClean "),t.qZA()}}function P(a,v){if(1&a){const n=t.EpF();t.TgZ(0,"button",26),t.NdJ("click",function(){t.CHM(n);const h=t.oxw();return t.KtG(h.patchValue())}),t._uU(1," pathValue "),t.qZA()}}function S(a,v){if(1&a){const n=t.EpF();t.TgZ(0,"button",26),t.NdJ("click",function(){t.CHM(n);const h=t.oxw();return t.KtG(h.logForm())}),t._uU(1,"logForm"),t.qZA()}}const R=function(){return{border:"1px dashed #ccc",height:"150px",width:"150px"}};function Y(a,v){if(1&a&&t._UZ(0,"img",27),2&a){const n=t.oxw();t.Q6J("ngStyle",t.DdM(2,R))("nzSrc",n.imageUrl)}}let D=(()=>{class a{get aliases(){return this.form.get("aliases")}constructor(n,z,h){this.logger=n,this.cd=z,this.fb=h,this.form=this.fb.group({userName:["",[i.kI.required]],address:this.fb.group({street:["",[i.kI.required]],city:["",[i.kI.required]]}),aliases:this.fb.array([])})}addAlias(){this.aliases.push(this.fb.control("",[i.kI.required]))}patchValue(){this.form.reset({userName:null,address:{street:null,city:null},aliases:[]}),this.aliases.clear();const n=["zhangsan",""];for(let z=0;z<n.length;z++)this.addAlias();this.form.patchValue({userName:"enochgao",address:{street:"",city:"qingdao"},aliases:n})}markAsDirty(){(0,m.k)(this.form)}markAsPristine(){(0,m.k)(this.form,!0)}markAsFullClean(){(0,m.k)(this.form,!0,n=>{n.markAsUntouched()})}remove(n){this.aliases.removeAt(n)}logForm(){console.log("submit",this.form)}selectFile(){l(".jpg").subscribe(n=>{console.log("\u5355\u6587\u4ef6\u9009\u62e9\u4e86",n),this.logger.success(`\u60a8\u9009\u62e9\u4e86\u6587\u4ef6\uff1a${n?.name}\uff0c\u73b0\u5728\u4f60\u53ef\u4ee5\u8fdb\u884c\u4e0b\u8f7d\u6587\u4ef6\u4e86`,{nzDuration:4e3}),n&&(this.file=n,this.imageUrl=URL.createObjectURL(n),console.log("url",this.imageUrl),this.cd.markForCheck())})}selectMultipleFile(){l("image/*,.pdf",!0).subscribe(n=>{console.log("\u591a\u6587\u4ef6\u9009\u62e9\u4e86",n)})}downloadFile(){this.file?function C(a,v=""){const n=document.createElement("a");n.href=URL.createObjectURL(a),n.download=v,n.click(),n.remove(),URL.revokeObjectURL(n.href)}(this.file,"\u6d4b\u8bd5\u6587\u4ef6"):this.logger.warning("\u8bf7\u5148\u9009\u62e9\u6587\u4ef6")}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(u.dD),t.Y36(t.sBO),t.Y36(i.qu))},a.\u0275cmp=t.Xpm({type:a,selectors:[["nzx-util-demo"]],standalone:!0,features:[t.jDz],decls:47,vars:13,consts:[["nzTitle","\u66f4\u65b0\u63a7\u4ef6\u72b6\u6001\uff08updateControlStatus\uff09"],["nz-form","",3,"formGroup"],["nzRequired","",3,"nzSpan"],["nzErrorTip","\u5fc5\u586b",3,"nzSpan"],["nz-input","","formControlName","userName"],["nz-row",""],["nz-col","","nzPush","6",3,"nzSpan"],["formGroupName","address"],["nz-input","","formControlName","street"],["nz-input","","formControlName","city"],["nz-button","","type","button",3,"click"],["formArrayName","aliases"],[4,"ngFor","ngForOf"],[3,"nzOffset","nzSpan"],["nz-button","","nzType","primary",3,"click",4,"nzSpaceItem"],["nz-button","",3,"click",4,"nzSpaceItem"],["nzTitle","\u51fd\u6570\u5f0f\u9009\u62e9\u6587\u4ef6"],["nz-button","","nzType","link",3,"click"],["nzTitle","\u6587\u4ef6\u4e0b\u8f7d"],["nz-image","",3,"ngStyle","nzSrc",4,"ngIf"],[3,"nzSpan","nzRequired","nzNoColon"],[4,"ngIf"],["nz-input","",3,"formControlName"],["nz-col","",3,"nzSpan"],["nz-button","","nzType","link","nzDanger","",3,"click"],["nz-button","","nzType","primary",3,"click"],["nz-button","",3,"click"],["nz-image","",3,"ngStyle","nzSrc"]],template:function(n,z){1&n&&(t.TgZ(0,"nz-card",0)(1,"form",1)(2,"nz-form-item")(3,"nz-form-label",2),t._uU(4,"Username"),t.qZA(),t.TgZ(5,"nz-form-control",3),t._UZ(6,"input",4),t.qZA()(),t.TgZ(7,"div",5)(8,"div",6)(9,"h4"),t._uU(10,"address"),t.qZA()()(),t.ynx(11,7),t.TgZ(12,"nz-form-item")(13,"nz-form-label",2),t._uU(14,"street"),t.qZA(),t.TgZ(15,"nz-form-control",3),t._UZ(16,"input",8),t.qZA()(),t.TgZ(17,"nz-form-item")(18,"nz-form-label",2),t._uU(19,"city"),t.qZA(),t.TgZ(20,"nz-form-control",3),t._UZ(21,"input",9),t.qZA()(),t.BQk(),t.TgZ(22,"div",5)(23,"div",6)(24,"h4"),t._uU(25," aliases formArray "),t.TgZ(26,"button",10),t.NdJ("click",function(){return z.addAlias()}),t._uU(27,"+ Add"),t.qZA()()()(),t.ynx(28,11),t.YNc(29,E,8,7,"nz-form-item",12),t.BQk(),t.TgZ(30,"nz-form-item")(31,"nz-form-control",13)(32,"nz-space"),t.YNc(33,F,2,0,"button",14),t.YNc(34,M,2,0,"button",14),t.YNc(35,b,2,0,"button",14),t.YNc(36,P,2,0,"button",15),t.YNc(37,S,2,0,"button",15),t.qZA()()()()(),t.TgZ(38,"nz-card",16)(39,"a",17),t.NdJ("click",function(){return z.selectFile()}),t._uU(40,"\u9009\u62e9\u5355\u6587\u4ef6(jpg)"),t.qZA(),t.TgZ(41,"a",17),t.NdJ("click",function(){return z.selectMultipleFile()}),t._uU(42,"\u9009\u62e9\u591a\u6587\u4ef6(\u56fe\u7247\uff0cpdf)"),t.qZA()(),t.TgZ(43,"nz-card",18),t.YNc(44,Y,1,3,"img",19),t.TgZ(45,"a",17),t.NdJ("click",function(){return z.downloadFile()}),t._uU(46,"\u4e0b\u8f7d\u6587\u4ef6"),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("formGroup",z.form),t.xp6(2),t.Q6J("nzSpan",7),t.xp6(2),t.Q6J("nzSpan",12),t.xp6(3),t.Q6J("nzSpan",12),t.xp6(5),t.Q6J("nzSpan",7),t.xp6(2),t.Q6J("nzSpan",12),t.xp6(3),t.Q6J("nzSpan",7),t.xp6(2),t.Q6J("nzSpan",12),t.xp6(3),t.Q6J("nzSpan",12),t.xp6(6),t.Q6J("ngForOf",z.aliases.controls),t.xp6(2),t.Q6J("nzOffset",7)("nzSpan",12),t.xp6(13),t.Q6J("ngIf",z.imageUrl))},dependencies:[o.ez,o.sg,o.O5,o.PC,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,i.x0,i.CE,g.Jb,g.t3,g.SK,f.U5,f.Lr,f.Nx,f.iK,f.Fd,d.sL,d.ix,T.w,p.dQ,u.gR,A.vh,A.bd,r.Gb,r.Ie,s.o7,s.Zp,O.zf,O.NU,O.$1],encapsulation:2,changeDetection:0}),a})();const k={"nzx-util-util-example":D},X=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[o.ez,D]}),a})()},1005:(U,N,e)=>{e.d(N,{g:()=>r});var u=e(4986),o=e(7272),m=e(5698),c=e(4482),_=e(5403),y=e(5032),C=e(9718),d=e(5577);function A(i,s){return s?g=>(0,o.z)(s.pipe((0,m.q)(1),function l(){return(0,c.e)((i,s)=>{i.subscribe((0,_.x)(s,y.Z))})}()),g.pipe(A(i))):(0,d.z)((g,O)=>i(g,O).pipe((0,m.q)(1),(0,C.h)(g)))}var f=e(5963);function r(i,s=u.z){const g=(0,f.H)(i,s);return A(()=>g)}},9570:(U,N,e)=>{e.d(N,{kH:()=>l,mJ:()=>f,w_:()=>A,yW:()=>C});var u=e(4650),o=e(4707),m=e(1135),c=e(6895),_=e(7423);function y(r,i){if(1&r&&u._UZ(0,"span",1),2&r){const s=u.oxw();u.Q6J("nzType",s.iconType)}}let l=(()=>{class r{constructor(){this.formStatusChanges=new o.t(1)}}return r.\u0275fac=function(s){return new(s||r)},r.\u0275prov=u.Yz7({token:r,factory:r.\u0275fac}),r})(),C=(()=>{class r{constructor(){this.noFormStatus=new m.X(!1)}}return r.\u0275fac=function(s){return new(s||r)},r.\u0275prov=u.Yz7({token:r,factory:r.\u0275fac}),r})();const d={error:"close-circle-fill",validating:"loading",success:"check-circle-fill",warning:"exclamation-circle-fill"};let A=(()=>{class r{constructor(s){this.cdr=s,this.status="",this.iconType=null}ngOnChanges(s){this.updateIcon()}updateIcon(){this.iconType=this.status?d[this.status]:null,this.cdr.markForCheck()}}return r.\u0275fac=function(s){return new(s||r)(u.Y36(u.sBO))},r.\u0275cmp=u.Xpm({type:r,selectors:[["nz-form-item-feedback-icon"]],hostAttrs:[1,"ant-form-item-feedback-icon"],hostVars:8,hostBindings:function(s,g){2&s&&u.ekj("ant-form-item-feedback-icon-error","error"===g.status)("ant-form-item-feedback-icon-warning","warning"===g.status)("ant-form-item-feedback-icon-success","success"===g.status)("ant-form-item-feedback-icon-validating","validating"===g.status)},inputs:{status:"status"},exportAs:["nzFormFeedbackIcon"],features:[u.TTD],decls:1,vars:1,consts:[["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"]],template:function(s,g){1&s&&u.YNc(0,y,1,1,"span",0),2&s&&u.Q6J("ngIf",g.iconType)},dependencies:[c.O5,_.Ls],encapsulation:2,changeDetection:0}),r})(),f=(()=>{class r{}return r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=u.oAB({type:r}),r.\u0275inj=u.cJS({imports:[c.ez,_.PV]}),r})()},4903:(U,N,e)=>{e.d(N,{P:()=>l,g:()=>C});var u=e(6895),o=e(4650),m=e(655),c=e(1281),_=e(3187);const y="nz-animate-disabled";let l=(()=>{class d{constructor(f,r,i){this.element=f,this.renderer=r,this.animationType=i,this.nzNoAnimation=!1}ngOnChanges(){this.updateClass()}ngAfterViewInit(){this.updateClass()}updateClass(){const f=(0,c.fI)(this.element);f&&(this.nzNoAnimation||"NoopAnimations"===this.animationType?this.renderer.addClass(f,y):this.renderer.removeClass(f,y))}}return d.\u0275fac=function(f){return new(f||d)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(o.QbO,8))},d.\u0275dir=o.lG2({type:d,selectors:[["","nzNoAnimation",""]],inputs:{nzNoAnimation:"nzNoAnimation"},exportAs:["nzNoAnimation"],features:[o.TTD]}),(0,m.gn)([(0,_.yF)()],d.prototype,"nzNoAnimation",void 0),d})(),C=(()=>{class d{}return d.\u0275fac=function(f){return new(f||d)},d.\u0275mod=o.oAB({type:d}),d.\u0275inj=o.cJS({imports:[u.ez]}),d})()},1691:(U,N,e)=>{e.d(N,{Ek:()=>C,bw:()=>s,d_:()=>r,dz:()=>i,e4:()=>O,hQ:()=>g,yW:()=>l});var u=e(655),o=e(8184),m=e(4650),c=e(2722),_=e(3303),y=e(3187);const l={top:new o.tR({originX:"center",originY:"top"},{overlayX:"center",overlayY:"bottom"}),topCenter:new o.tR({originX:"center",originY:"top"},{overlayX:"center",overlayY:"bottom"}),topLeft:new o.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),topRight:new o.tR({originX:"end",originY:"top"},{overlayX:"end",overlayY:"bottom"}),right:new o.tR({originX:"end",originY:"center"},{overlayX:"start",overlayY:"center"}),rightTop:new o.tR({originX:"end",originY:"top"},{overlayX:"start",overlayY:"top"}),rightBottom:new o.tR({originX:"end",originY:"bottom"},{overlayX:"start",overlayY:"bottom"}),bottom:new o.tR({originX:"center",originY:"bottom"},{overlayX:"center",overlayY:"top"}),bottomCenter:new o.tR({originX:"center",originY:"bottom"},{overlayX:"center",overlayY:"top"}),bottomLeft:new o.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),bottomRight:new o.tR({originX:"end",originY:"bottom"},{overlayX:"end",overlayY:"top"}),left:new o.tR({originX:"start",originY:"center"},{overlayX:"end",overlayY:"center"}),leftTop:new o.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"}),leftBottom:new o.tR({originX:"start",originY:"bottom"},{overlayX:"end",overlayY:"bottom"})},C=[l.top,l.right,l.bottom,l.left];function r(t){for(const T in l)if(t.connectionPair.originX===l[T].originX&&t.connectionPair.originY===l[T].originY&&t.connectionPair.overlayX===l[T].overlayX&&t.connectionPair.overlayY===l[T].overlayY)return T}new o.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"bottom"}),new o.tR({originX:"start",originY:"bottom"},{overlayX:"end",overlayY:"bottom"}),new o.tR({originX:"start",originY:"bottom"},{overlayX:"end",overlayY:"top"});const i={bottomLeft:new o.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"},void 0,2),topLeft:new o.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"},void 0,-2),bottomRight:new o.tR({originX:"end",originY:"bottom"},{overlayX:"end",overlayY:"top"},void 0,2),topRight:new o.tR({originX:"end",originY:"top"},{overlayX:"end",overlayY:"bottom"},void 0,-2)},s=[i.bottomLeft,i.topLeft,i.bottomRight,i.topRight];let g=(()=>{class t{constructor(p,x){this.cdkConnectedOverlay=p,this.nzDestroyService=x,this.nzArrowPointAtCenter=!1,this.cdkConnectedOverlay.backdropClass="nz-overlay-transparent-backdrop",this.cdkConnectedOverlay.positionChange.pipe((0,c.R)(this.nzDestroyService)).subscribe(E=>{this.nzArrowPointAtCenter&&this.updateArrowPosition(E)})}updateArrowPosition(p){const x=this.getOriginRect(),E=r(p);let F=0,M=0;"topLeft"===E||"bottomLeft"===E?F=x.width/2-14:"topRight"===E||"bottomRight"===E?F=-(x.width/2-14):"leftTop"===E||"rightTop"===E?M=x.height/2-10:("leftBottom"===E||"rightBottom"===E)&&(M=-(x.height/2-10)),(this.cdkConnectedOverlay.offsetX!==F||this.cdkConnectedOverlay.offsetY!==M)&&(this.cdkConnectedOverlay.offsetY=M,this.cdkConnectedOverlay.offsetX=F,this.cdkConnectedOverlay.overlayRef.updatePosition())}getFlexibleConnectedPositionStrategyOrigin(){return this.cdkConnectedOverlay.origin instanceof o.xu?this.cdkConnectedOverlay.origin.elementRef:this.cdkConnectedOverlay.origin}getOriginRect(){const p=this.getFlexibleConnectedPositionStrategyOrigin();if(p instanceof m.SBq)return p.nativeElement.getBoundingClientRect();if(p instanceof Element)return p.getBoundingClientRect();const x=p.width||0,E=p.height||0;return{top:p.y,bottom:p.y+E,left:p.x,right:p.x+x,height:E,width:x}}}return t.\u0275fac=function(p){return new(p||t)(m.Y36(o.pI),m.Y36(_.kn))},t.\u0275dir=m.lG2({type:t,selectors:[["","cdkConnectedOverlay","","nzConnectedOverlay",""]],inputs:{nzArrowPointAtCenter:"nzArrowPointAtCenter"},exportAs:["nzConnectedOverlay"],features:[m._Bn([_.kn])]}),(0,u.gn)([(0,y.yF)()],t.prototype,"nzArrowPointAtCenter",void 0),t})(),O=(()=>{class t{}return t.\u0275fac=function(p){return new(p||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({}),t})()}}]);