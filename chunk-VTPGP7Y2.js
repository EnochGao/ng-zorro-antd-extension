import{d as ne,h as ie,j as oe,k as re,m as ae,n as le,o as se,p as pe,r as ce}from"./chunk-IIKYZ7T6.js";import"./chunk-E44YRNLJ.js";import"./chunk-U24ICDSZ.js";import"./chunk-62OX7EPY.js";import{a as te,b as ee,c as q}from"./chunk-SQSMMIYW.js";import{d as Xt,e as Zt,f as Kt,g as Yt}from"./chunk-UEO2LBLP.js";import"./chunk-KBCFOUZ2.js";import"./chunk-MFMZI4JG.js";import"./chunk-IF2R5RDT.js";import"./chunk-JLUX7UYA.js";import{e as Ut,f as Gt,g as Jt}from"./chunk-H66T5NKY.js";import"./chunk-752J3DYG.js";import{a as Qt,b as jt,c as Pt}from"./chunk-QXLY7K4I.js";import{a as Ht,b as qt}from"./chunk-ZOSYNVO3.js";import"./chunk-M44EP7KY.js";import"./chunk-MRWPMGKP.js";import"./chunk-KBDRVQ2X.js";import{d as Dt,h as wt,m as Mt,w as H}from"./chunk-ZVWL25YR.js";import{a as $t,b as Lt}from"./chunk-MWDUSRTL.js";import{a as Vt,b as Rt,d as Wt,e as At}from"./chunk-TU4Q4OVA.js";import{a as Ot}from"./chunk-K66H5K2I.js";import"./chunk-VCG636SY.js";import{$b as et,Ab as gt,B as Z,Ba as dt,Bb as ht,Cc as vt,Cd as Bt,D as lt,Dc as bt,Dd as A,Eb as yt,Ec as Et,Fb as I,Fc as St,Gb as S,Hb as D,Jb as _,Ka as r,Kb as tt,La as V,Lb as w,Lc as k,Md as It,Na as _t,Nb as M,Nd as kt,Ob as F,Pb as B,Ra as ut,Rb as R,Sb as W,Ua as Y,V as st,W as pt,X as j,Ya as m,Z as ct,ab as c,bb as Ct,ca as g,cb as P,eb as zt,f as X,gc as Nt,ic as nt,jb as y,jc as Tt,kd as Ft,l as O,la as N,lb as z,ma as h,mb as f,na as mt,nb as x,ob as a,pb as l,qb as ft,rb as T,sb as v,ta as K,tb as xt,ua as u,ub as b,va as C,xb as E,zb as p}from"./chunk-OGFJLPPA.js";import"./chunk-UKNGC2Y4.js";var me=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275dir=mt({type:t,selectors:[["button","nz-trans-button",""]],hostVars:8,hostBindings:function(n,i){n&2&&Ct("border","0")("background","transparent")("padding","0")("line-height","inherit")},standalone:!0})}}return t})(),de=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=h({type:t})}static{this.\u0275inj=g({})}}return t})();var ye=["detailTemplate"],Ne=["editTemplate"],Te=["detailContainer"],ve=["nzx-editable",""],be=()=>({minRows:1,maxRows:4});function Ee(t,o){if(t&1){let e=b();a(0,"button",4),E("click",function(){u(e);let i=p(2);return C(i.edit())}),ft(1,"span",5),l()}}function Se(t,o){if(t&1&&(_(0),m(1,Ee,2,0,"button",3)),t&2){let e=p();w(" ",e.nzxContent," "),r(),c("ngIf",e.nzxShowBtn)}}function De(t,o){if(t&1){let e=b();a(0,"textarea",6),E("ngModelChange",function(i){u(e);let s=p();return C(s.valueChange(i))})("blur",function(){u(e);let i=p();return C(i.blur())}),l()}if(t&2){let e=p();c("nzAutosize",W(2,be))("ngModel",e.nzxContent)}}var _e=(()=>{class t{constructor(){this.nzxContent="",this.nzxShowBtn=!0,this.nzxContentChange=new dt,this.class="nzx-editable-cell",this._valueType="string"}dblclick(){this.edit()}ngOnInit(){this.nzxContentType?this._valueType=this.nzxContentType:(Zt(this.nzxContent)&&(this._valueType="string"),Xt(this.nzxContent)&&(this._valueType="number")),this.detailContainerRef.clear(),this.detailContainerRef.createEmbeddedView(this.detailTemplateRef).markForCheck()}edit(){this.detailContainerRef.clear();let e=this.detailContainerRef.createEmbeddedView(this.editTemplateRef);e.markForCheck(),e.rootNodes[0].focus()}blur(){this.detailContainerRef.clear(),this.detailContainerRef.createEmbeddedView(this.detailTemplateRef).markForCheck()}valueChange(e){let n=e;this._valueType==="number"?n=Kt(e):n=Yt(e),this.nzxContentChange.emit(n)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=N({type:t,selectors:[["","nzx-editable",""]],viewQuery:function(n,i){if(n&1&&(I(ye,7),I(Ne,7),I(Te,7,ut)),n&2){let s;S(s=D())&&(i.detailTemplateRef=s.first),S(s=D())&&(i.editTemplateRef=s.first),S(s=D())&&(i.detailContainerRef=s.first)}},hostVars:2,hostBindings:function(n,i){n&1&&E("dblclick",function(){return i.dblclick()}),n&2&&zt(i.class)},inputs:{nzxContent:"nzxContent",nzxShowBtn:"nzxShowBtn",nzxContentType:"nzxContentType"},outputs:{nzxContentChange:"nzxContentChange"},exportAs:["NzxEditable"],attrs:ve,decls:6,vars:0,consts:[["detailContainer",""],["detailTemplate",""],["editTemplate",""],["class","ant-typography-edit","type","button","nz-trans-button","",3,"click",4,"ngIf"],["type","button","nz-trans-button","",1,"ant-typography-edit",3,"click"],["nz-icon","","nzType","edit","nzTheme","outline"],["nz-input","",3,"ngModelChange","blur","nzAutosize","ngModel"]],template:function(n,i){n&1&&(xt(0,null,0),m(2,Se,2,2,"ng-template",null,1,et)(4,De,1,3,"ng-template",null,2,et))},dependencies:[bt,Dt,wt,Mt,It,te,ee,me],styles:[".nzx-editable-cell[_ngcontent-%COMP%]{cursor:pointer}"],changeDetection:0})}}return t})();var ue=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=h({type:t})}static{this.\u0275inj=g({imports:[k,H,kt,q,de]})}}return t})();var Me=["*"];function Fe(t,o){t&1&&ht(0)}function Be(t,o){if(t&1&&(T(0),_(1),v()),t&2){let e=p(3);r(),tt(e.nzTitle)}}function Ie(t,o){if(t&1&&(a(0,"div",2),m(1,Be,2,1,"ng-container",4),l()),t&2){let e=p(2);r(),c("nzStringTemplateOutlet",e.nzTitle)}}function ke(t,o){if(t&1&&(T(0),_(1),v()),t&2){let e=p(3);r(),tt(e.nzExtra)}}function Oe(t,o){if(t&1&&(a(0,"div",3),m(1,ke,2,1,"ng-container",4),l()),t&2){let e=p(2);r(),c("nzStringTemplateOutlet",e.nzExtra)}}function Ve(t,o){if(t&1&&(a(0,"div",0),m(1,Ie,2,1,"div",2)(2,Oe,2,1,"div",3),l()),t&2){let e=p();r(),y(e.nzTitle?1:-1),r(),y(e.nzExtra?2:-1)}}function Re(t,o){if(t&1&&(T(0),_(1),v()),t&2){let e=p(2).$implicit;r(),w(" ",e.title," ")}}function We(t,o){}function Ae(t,o){if(t&1&&(a(0,"td",6)(1,"div",7)(2,"span",8),m(3,Re,2,1,"ng-container",4),l(),a(4,"span",9),m(5,We,0,0,"ng-template",10),l()()()),t&2){let e=p().$implicit,n=p(3);c("colSpan",e.span),r(2),P("ant-descriptions-item-no-colon",!n.nzColon),r(),c("nzStringTemplateOutlet",e.title),r(2),c("ngTemplateOutlet",e.content)}}function $e(t,o){if(t&1&&(T(0),_(1),v()),t&2){let e=p(2).$implicit;r(),w(" ",e.title," ")}}function Le(t,o){}function Qe(t,o){if(t&1&&(a(0,"td",8),m(1,$e,2,1,"ng-container",4),l(),a(2,"td",11),m(3,Le,0,0,"ng-template",10),l()),t&2){let e=p().$implicit;r(),c("nzStringTemplateOutlet",e.title),r(),c("colSpan",e.span*2-1),r(),c("ngTemplateOutlet",e.content)}}function je(t,o){if(t&1&&m(0,Ae,6,5,"td",6)(1,Qe,4,3),t&2){let e=p(3);y(e.nzBordered?1:0)}}function Pe(t,o){if(t&1&&(a(0,"tr",5),f(1,je,2,1,null,null,z),l()),t&2){let e=o.$implicit;r(),x(e)}}function He(t,o){if(t&1&&f(0,Pe,3,0,"tr",5,z),t&2){let e=p();x(e.itemMatrix)}}function qe(t,o){if(t&1&&(T(0),_(1),v()),t&2){let e=p().$implicit;r(),w(" ",e.title," ")}}function Ue(t,o){if(t&1&&(a(0,"td",6)(1,"div",7)(2,"span",8),m(3,qe,2,1,"ng-container",4),l()()()),t&2){let e=o.$implicit,n=p(4);c("colSpan",e.span),r(2),P("ant-descriptions-item-no-colon",!n.nzColon),r(),c("nzStringTemplateOutlet",e.title)}}function Ge(t,o){}function Je(t,o){if(t&1&&(a(0,"td",6)(1,"div",7)(2,"span",9),m(3,Ge,0,0,"ng-template",10),l()()()),t&2){let e=o.$implicit;c("colSpan",e.span),r(3),c("ngTemplateOutlet",e.content)}}function Xe(t,o){if(t&1&&(a(0,"tr",5),f(1,Ue,4,4,"td",6,z),l(),a(3,"tr",5),f(4,Je,4,2,"td",6,z),l()),t&2){let e=o.$implicit;r(),x(e),r(3),x(e)}}function Ze(t,o){if(t&1&&f(0,Xe,6,0,null,null,z),t&2){let e=p(2);x(e.itemMatrix)}}function Ke(t,o){if(t&1&&(T(0),_(1),v()),t&2){let e=p().$implicit;r(),w(" ",e.title," ")}}function Ye(t,o){if(t&1&&(a(0,"td",12),m(1,Ke,2,1,"ng-container",4),l()),t&2){let e=o.$implicit;c("colSpan",e.span),r(),c("nzStringTemplateOutlet",e.title)}}function tn(t,o){}function en(t,o){if(t&1&&(a(0,"td",11),m(1,tn,0,0,"ng-template",10),l()),t&2){let e=o.$implicit;c("colSpan",e.span),r(),c("ngTemplateOutlet",e.content)}}function nn(t,o){if(t&1&&(a(0,"tr",5),f(1,Ye,2,2,"td",12,z),l(),a(3,"tr",5),f(4,en,2,2,"td",11,z),l()),t&2){let e=o.$implicit;r(),x(e),r(3),x(e)}}function on(t,o){if(t&1&&f(0,nn,6,0,null,null,z),t&2){let e=p(2);x(e.itemMatrix)}}function rn(t,o){if(t&1&&m(0,Ze,2,0)(1,on,2,0),t&2){let e=p();y(e.nzBordered?1:0)}}var it=(()=>{class t{constructor(){this.nzSpan=1,this.nzTitle="",this.inputChange$=new X}ngOnChanges(){this.inputChange$.next()}ngOnDestroy(){this.inputChange$.complete()}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=N({type:t,selectors:[["nz-descriptions-item"]],viewQuery:function(n,i){if(n&1&&I(_t,7),n&2){let s;S(s=D())&&(i.content=s.first)}},inputs:{nzSpan:[2,"nzSpan","nzSpan",Tt],nzTitle:"nzTitle"},exportAs:["nzDescriptionsItem"],standalone:!0,features:[Y,K,R],ngContentSelectors:Me,decls:1,vars:0,template:function(n,i){n&1&&(gt(),m(0,Fe,1,0,"ng-template"))},encapsulation:2,changeDetection:0})}}return t})(),an="descriptions",ln={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},ot=(()=>{class t{constructor(e,n,i,s){this.nzConfigService=e,this.cdr=n,this.breakpointService=i,this.directionality=s,this._nzModuleName=an,this.nzBordered=!1,this.nzLayout="horizontal",this.nzColumn=ln,this.nzSize="default",this.nzTitle="",this.nzColon=!0,this.itemMatrix=[],this.realColumn=3,this.dir="ltr",this.breakpoint=Ut.md,this.destroy$=new X}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(j(this.destroy$)).subscribe(e=>{this.dir=e})}ngOnChanges(e){e.nzColumn&&this.prepareMatrix()}ngAfterContentInit(){let e=this.items.changes.pipe(st(this.items),j(this.destroy$));Z(e,e.pipe(pt(()=>Z(...this.items.map(n=>n.inputChange$)).pipe(lt(16)))),this.breakpointService.subscribe(Gt).pipe(ct(n=>this.breakpoint=n))).pipe(j(this.destroy$)).subscribe(()=>{this.prepareMatrix(),this.cdr.markForCheck()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}prepareMatrix(){if(!this.items)return;let e=[],n=0,i=this.realColumn=this.getColumn(),s=this.items.toArray(),d=s.length,rt=[],at=()=>{rt.push(e),e=[],n=0};for(let L=0;L<d;L++){let xe=s[L],{nzTitle:G,content:J,nzSpan:Q}=xe;n+=Q,n>=i?(n>i&&Ft(`"nzColumn" is ${i} but we have row length ${n}`),e.push({title:G,content:J,span:i-(n-Q)}),at()):L===d-1?(e.push({title:G,content:J,span:i-(n-Q)}),at()):e.push({title:G,content:J,span:Q})}this.itemMatrix=rt}getColumn(){return typeof this.nzColumn!="number"?this.nzColumn[this.breakpoint]:this.nzColumn}static{this.\u0275fac=function(n){return new(n||t)(V(Bt),V(Nt),V(Jt),V(Ot))}}static{this.\u0275cmp=N({type:t,selectors:[["nz-descriptions"]],contentQueries:function(n,i,s){if(n&1&&yt(s,it,4),n&2){let d;S(d=D())&&(i.items=d)}},hostAttrs:[1,"ant-descriptions"],hostVars:8,hostBindings:function(n,i){n&2&&P("ant-descriptions-bordered",i.nzBordered)("ant-descriptions-middle",i.nzSize==="middle")("ant-descriptions-small",i.nzSize==="small")("ant-descriptions-rtl",i.dir==="rtl")},inputs:{nzBordered:[2,"nzBordered","nzBordered",nt],nzLayout:"nzLayout",nzColumn:"nzColumn",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra",nzColon:[2,"nzColon","nzColon",nt]},exportAs:["nzDescriptions"],standalone:!0,features:[Y,K,R],decls:6,vars:3,consts:[[1,"ant-descriptions-header"],[1,"ant-descriptions-view"],[1,"ant-descriptions-title"],[1,"ant-descriptions-extra"],[4,"nzStringTemplateOutlet"],[1,"ant-descriptions-row"],[1,"ant-descriptions-item",3,"colSpan"],[1,"ant-descriptions-item-container"],[1,"ant-descriptions-item-label"],[1,"ant-descriptions-item-content"],[3,"ngTemplateOutlet"],[1,"ant-descriptions-item-content",3,"colSpan"],[1,"ant-descriptions-item-label",3,"colSpan"]],template:function(n,i){n&1&&(m(0,Ve,3,2,"div",0),a(1,"div",1)(2,"table")(3,"tbody"),m(4,He,2,0)(5,rn,2,1),l()()()),n&2&&(y(i.nzTitle||i.nzExtra?0:-1),r(4),y(i.nzLayout==="horizontal"?4:-1),r(),y(i.nzLayout==="vertical"?5:-1))},dependencies:[Lt,$t,St],encapsulation:2,changeDetection:0})}}return O([A()],t.prototype,"nzBordered",void 0),O([A()],t.prototype,"nzColumn",void 0),O([A()],t.prototype,"nzSize",void 0),O([A()],t.prototype,"nzColon",void 0),t})(),Ce=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=h({type:t})}static{this.\u0275inj=g({imports:[ot]})}}return t})();var ze=()=>({"margin-bottom":"10px"});function pn(t,o){if(t&1){let e=b();a(0,"button",14),E("click",function(){u(e);let i=p();return C(i.log())}),_(1," log table value "),l()}}function cn(t,o){if(t&1){let e=b();a(0,"tr")(1,"td",15)(2,"span",16),B("nzxContentChange",function(i){let s=u(e).$implicit;return F(s.name,i)||(s.name=i),C(i)}),l()(),a(3,"td",4)(4,"span",16),B("nzxContentChange",function(i){let s=u(e).$implicit;return F(s.age,i)||(s.age=i),C(i)}),l()(),a(5,"td",15)(6,"span",13),B("nzxContentChange",function(i){let s=u(e).$implicit;return F(s.country,i)||(s.country=i),C(i)}),l()()()}if(t&2){let e=o.$implicit;r(2),M("nzxContent",e.name),r(2),M("nzxContent",e.age),r(2),M("nzxContent",e.country),c("nzxShowBtn",!1)}}function mn(t,o){if(t&1){let e=b();a(0,"button",14),E("click",function(){u(e);let i=p();return C(i.logDetail())}),_(1," log detail value "),l()}}var U=(()=>{class t{constructor(){this.userDetail={userName:"enochgao",age:null,live:"QingDao"},this.list=[{name:"EnochGao",age:18,country:"china"},{name:"zhangsan",age:20,country:"china england usa china england usa china england usa china england usa"}]}log(){console.log("list string:::",JSON.stringify(this.list)),console.log("list:::",this.list)}logDetail(){console.log("userDetail string:::",JSON.stringify(this.userDetail)),console.log("userDetail:::",this.userDetail)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=N({type:t,selectors:[["nzx-editable-example"]],standalone:!0,features:[R],decls:24,vars:9,consts:[["nzTitle","table td editable"],[3,"ngStyle"],["nz-button","","nzType","dashed",3,"click",4,"nzSpaceItem"],["nzBordered","","nzTemplateMode",""],["nzAlign","center"],[4,"ngFor","ngForOf"],["nzTitle","detail editable"],["nzTitle","User Info"],["nzTitle","UserName"],["nzx-editable","","nzxContentType","string",3,"nzxContentChange","nzxContent"],["nzTitle","Age"],["nzx-editable","","nzxContentType","number",3,"nzxContentChange","nzxContent"],["nzTitle","Live"],["nzx-editable","",3,"nzxContentChange","nzxContent","nzxShowBtn"],["nz-button","","nzType","dashed",3,"click"],["nzBreakWord",""],["nzx-editable","",3,"nzxContentChange","nzxContent"]],template:function(n,i){n&1&&(a(0,"nz-card",0)(1,"nz-space",1),m(2,pn,2,0,"button",2),l(),a(3,"nz-table",3)(4,"thead")(5,"tr")(6,"th"),_(7,"Name"),l(),a(8,"th",4),_(9,"Age"),l(),a(10,"th"),_(11,"country"),l()()(),a(12,"tbody"),m(13,cn,7,4,"tr",5),l()()(),a(14,"nz-card",6)(15,"nz-space",1),m(16,mn,2,0,"button",2),l(),a(17,"nz-descriptions",7)(18,"nz-descriptions-item",8)(19,"span",9),B("nzxContentChange",function(d){return F(i.userDetail.userName,d)||(i.userDetail.userName=d),d}),l()(),a(20,"nz-descriptions-item",10)(21,"span",11),B("nzxContentChange",function(d){return F(i.userDetail.age,d)||(i.userDetail.age=d),d}),l()(),a(22,"nz-descriptions-item",12)(23,"span",13),B("nzxContentChange",function(d){return F(i.userDetail.live,d)||(i.userDetail.live=d),d}),l()()()()),n&2&&(r(),c("ngStyle",W(7,ze)),r(12),c("ngForOf",i.list),r(2),c("ngStyle",W(8,ze)),r(4),M("nzxContent",i.userDetail.userName),r(2),M("nzxContent",i.userDetail.age),r(2),M("nzxContent",i.userDetail.live),c("nzxShowBtn",!1))},dependencies:[k,vt,Et,H,ce,le,ne,ie,pe,ae,se,re,oe,At,Wt,Vt,Rt,q,qt,Ht,Pt,jt,Qt,Ce,ot,it,ue,_e],encapsulation:2,changeDetection:0})}}return t})();var fe=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=h({type:t})}static{this.\u0275inj=g({imports:[k,U]})}}return t})();var vi={"nzx-editable-editable-example":U},bi=fe;export{bi as EXAMPLES_MODULE,vi as EXAMPLE_COMPONENTS};
