import{a as mt,b as st}from"./chunk-DNBP6PUJ.js";import{a as qe,b as lt}from"./chunk-55X3UQAW.js";import{a as rt}from"./chunk-BCFAZKDB.js";import{b as Me,d as Ve}from"./chunk-6BODMFBJ.js";import"./chunk-ZNLYLGZP.js";import{a as pe,b as de}from"./chunk-VM6MHTFO.js";import{b as Ne,c as ot}from"./chunk-KIFKFXKJ.js";import{a as nt,b as it}from"./chunk-B2SREFQD.js";import"./chunk-LUJCEHGC.js";import{c as ze,d as Ce,e as _e,f as xe,g as be}from"./chunk-VB2EFXJJ.js";import{a as he,b as ge}from"./chunk-DTSBX4ZR.js";import{a as ye,b as Se,c as Te,d as ve,f as Fe,h as ke,i as De,j as we,m as Ee,n as Ie,o as Oe,p as Pe,r as at}from"./chunk-IIKYZ7T6.js";import"./chunk-E44YRNLJ.js";import"./chunk-U24ICDSZ.js";import"./chunk-62OX7EPY.js";import"./chunk-SQSMMIYW.js";import"./chunk-UEO2LBLP.js";import"./chunk-KBCFOUZ2.js";import"./chunk-MFMZI4JG.js";import"./chunk-IF2R5RDT.js";import"./chunk-JLUX7UYA.js";import"./chunk-H66T5NKY.js";import"./chunk-752J3DYG.js";import"./chunk-QXLY7K4I.js";import{a as fe,b as ue}from"./chunk-ZOSYNVO3.js";import"./chunk-M44EP7KY.js";import"./chunk-MRWPMGKP.js";import"./chunk-KBDRVQ2X.js";import{a as ee,h as te,i as ne,m as ie,n as oe,p as ae,s as re,v as le,w as me,x as se}from"./chunk-ZVWL25YR.js";import"./chunk-MWDUSRTL.js";import{e as ce}from"./chunk-TU4Q4OVA.js";import"./chunk-K66H5K2I.js";import"./chunk-VCG636SY.js";import{Ba as He,Cc as E,Dc as X,E as je,Eb as Xe,Fb as Ye,Fc as Y,Gb as G,Hb as j,Ib as N,Ic as Z,Jb as f,Ka as o,Kb as F,La as O,Lb as g,Lc as I,N as Ue,Na as Je,Nb as k,Nd as tt,Ob as D,Oc as Ze,Pb as w,Pc as et,Qb as U,Rb as H,Ta as K,Tb as J,Xb as _,Ya as d,Yb as x,aa as q,ab as a,ca as A,gc as M,ha as Q,la as y,ma as W,n as Ge,na as R,ob as s,pb as m,qb as C,rb as S,sb as T,ta as $,tb as L,ua as u,ub as v,va as h,xa as B,xb as z,zb as c}from"./chunk-OGFJLPPA.js";import{a as Ke,b as Le}from"./chunk-UKNGC2Y4.js";var V=(()=>{class t{constructor(){this.templateRef=Q(Je)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275dir=R({type:t,selectors:[["","nzxTableSelectKey",""]],inputs:{key:[0,"nzxTableSelectKey","key"]},exportAs:["NzxTableSelectKey"]})}}return t})();var Ae=(()=>{class t{constructor(){this.controls=[],this.checkboxWidth="20px",this.uniqueKey="id",this.nzxBtnSpan=24,this.nzxCollapse=!1,this.list=[],this.nzxQueryParamsChange=new He,this.mode="single",this.tableConfig=[],this.selectedData=[],this.setOfCheckedId=new Set,this.checked=!1,this.indeterminate=!1,this.isDisabled=!1,this.propagateChange=e=>{}}ngAfterContentInit(){this.dirs.toArray().forEach(n=>{let i=this.tableConfig?.find(r=>r.key===n.key);i&&(i.template=n.templateRef)})}writeValue(e){e&&e.forEach(n=>{this.updateCheckedSet(n,!0)})}registerOnChange(e){this.propagateChange=e}registerOnTouched(e){}setDisabledState(e){this.isDisabled=e,this.updateDisabledState()}updateDisabledState(){this.list=this.list.map(e=>Le(Ke({},e),{disabled:this.isDisabled}))}updateCheckedSet(e,n){n?(this.mode==="single"&&(this.setOfCheckedId.clear(),this.selectedData=[]),this.setOfCheckedId.add(this.getValue(e,this.uniqueKey)),this.selectedData.some(r=>this.getValue(r,this.uniqueKey)===this.getValue(e,this.uniqueKey))||this.selectedData.push(e)):(this.setOfCheckedId.delete(this.getValue(e,this.uniqueKey)),this.selectedData=this.selectedData.filter(i=>this.getValue(i,this.uniqueKey)===this.getValue(e,this.uniqueKey))),this.propagateChange(this.selectedData)}onAllChecked(e){this.list.forEach(n=>this.updateCheckedSet(n,e)),this.refreshCheckedStatus()}refreshCheckedStatus(){this.checked=this.list?.every(e=>this.setOfCheckedId.has(this.getValue(e,this.uniqueKey))),this.indeterminate=this.list?.some(e=>this.setOfCheckedId.has(this.getValue(e,this.uniqueKey)))&&!this.checked}onItemChecked(e,n){this.updateCheckedSet(e,n),this.refreshCheckedStatus()}getValue(e,n){if(!(!e||!n))return typeof n=="string"&&(n=n.split(".")),n.length===1?e[n[0]]:this.getValue(e[n[0]],n.slice(1))}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275dir=R({type:t,contentQueries:function(n,i,r){if(n&1&&Xe(r,V,4),n&2){let p;G(p=j())&&(i.dirs=p)}},inputs:{controls:"controls",checkboxWidth:"checkboxWidth",uniqueKey:"uniqueKey",nzxBtnSpan:"nzxBtnSpan",nzxCollapse:"nzxCollapse",list:"list",mode:"mode",tableConfig:"tableConfig"},outputs:{nzxQueryParamsChange:"nzxQueryParamsChange"}})}}return t})();var zt=t=>({$implicit:t});function Ct(t,l){if(t&1&&C(0,"th",8),t&2){let e=c();a("nzShowCheckbox",!1)("nzWidth",e.checkboxWidth)}}function _t(t,l){if(t&1){let e=v();s(0,"th",9),w("nzCheckedChange",function(i){u(e);let r=c();return D(r.checked,i)||(r.checked=i),h(i)}),z("nzCheckedChange",function(i){u(e);let r=c();return h(r.onAllChecked(i))}),m()}if(t&2){let e=c(),n=N(4);a("nzWidth",e.checkboxWidth)("nzShowCheckbox",n.data.length>0),k("nzChecked",e.checked),a("nzIndeterminate",e.indeterminate)("nzDisabled",e.isDisabled)}}function xt(t,l){if(t&1&&(s(0,"th",10),f(1),m()),t&2){let e=l.$implicit;o(),g(" ",e.label," ")}}function bt(t,l){if(t&1&&(S(0),f(1),_(2,"nzxSafeNull"),T()),t&2){let e=c().$implicit,n=c().$implicit;o(),g(" ",x(2,1,n[e.key])," ")}}function Nt(t,l){if(t&1&&(S(0),f(1),_(2,"nzxSafeNull"),T()),t&2){let e=c().$implicit,n=c().$implicit;o(),g(" ",x(2,1,e.format(n))," ")}}function yt(t,l){t&1&&L(0)}function St(t,l){if(t&1&&(S(0),d(1,yt,1,0,"ng-container",13),T()),t&2){let e=c().$implicit,n=c().$implicit;o(),a("ngTemplateOutlet",e.template)("ngTemplateOutletContext",J(2,zt,n))}}function Tt(t,l){if(t&1&&(s(0,"td"),d(1,bt,3,3,"ng-container",12)(2,Nt,3,3,"ng-container",12)(3,St,2,4,"ng-container",12),m()),t&2){let e=l.$implicit;o(),a("ngIf",!e.format&&!e.template),o(),a("ngIf",e.format&&!e.template),o(),a("ngIf",e.template)}}function vt(t,l){if(t&1){let e=v();s(0,"tr")(1,"td",11),z("nzCheckedChange",function(i){let r=u(e).$implicit,p=c();return h(p.onItemChecked(r,i))}),m(),d(2,Tt,4,3,"td",7),m()}if(t&2){let e=l.$implicit,n=c();o(),a("nzChecked",n.setOfCheckedId.has(n.getValue(e,n.uniqueKey)))("nzDisabled",e.disabled),o(),a("ngForOf",n.tableConfig)}}var pt=(()=>{class t extends Ae{constructor(){super(...arguments),this.loading=!1,this.nzTotal=0,this.cd=Q(M)}ngOnChanges(e){(e.list||e.nzTotal)&&(this.refreshCheckedStatus(),super.updateDisabledState())}static{this.\u0275fac=(()=>{let e;return function(i){return(e||(e=B(t)))(i||t)}})()}static{this.\u0275cmp=y({type:t,selectors:[["nzx-page-table-select"]],viewQuery:function(n,i){if(n&1&&Ye(qe,7),n&2){let r;G(r=j())&&(i.nzxTableAdaptorRef=r.first)}},inputs:{loading:"loading",nzTotal:"nzTotal"},exportAs:["NzxPageTableSelect"],features:[U([{provide:ee,useExisting:q(()=>t),multi:!0}]),K,$],decls:12,vars:11,consts:[["configQuery",""],["adaptor","NzxTableAdaptor","table",""],[3,"queryChange","resetChange","hidden","controls","nzxBtnSpan"],["nzxTableAdaptor","",3,"nzxQueryParams","nzxQueryCacheQueryParams","queryParams","nzData","nzLoading","nzTotal"],[3,"nzShowCheckbox","nzWidth",4,"ngIf"],[3,"nzWidth","nzShowCheckbox","nzChecked","nzIndeterminate","nzDisabled","nzCheckedChange",4,"ngIf"],["nzAlign","center",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[3,"nzShowCheckbox","nzWidth"],[3,"nzCheckedChange","nzWidth","nzShowCheckbox","nzChecked","nzIndeterminate","nzDisabled"],["nzAlign","center"],[3,"nzCheckedChange","nzChecked","nzDisabled"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){if(n&1){let r=v();s(0,"nzx-configurable-query",2,0),z("queryChange",function(){u(r);let b=N(3);return h(b.refresh())})("resetChange",function(){u(r);let b=N(3);return h(b.reset())}),m(),s(2,"nz-table",3,1),z("nzxQueryParams",function(b){return u(r),h(i.nzxQueryParamsChange.emit(b))})("nzxQueryCacheQueryParams",function(b){u(r);let $e=N(1);return h($e.setQueryParams(b))}),s(5,"thead")(6,"tr"),d(7,Ct,1,2,"th",4)(8,_t,1,5,"th",5)(9,xt,2,1,"th",6),m()(),s(10,"tbody"),d(11,vt,3,3,"tr",7),m()()}if(n&2){let r=N(1),p=N(4);a("hidden",i.controls&&i.controls.length===0)("controls",i.controls)("nzxBtnSpan",i.nzxBtnSpan),o(2),a("queryParams",r.queryParams)("nzData",i.list)("nzLoading",i.loading)("nzTotal",i.nzTotal),o(5),a("ngIf",i.mode==="single"),o(),a("ngIf",i.mode==="multiple"),o(),a("ngForOf",i.tableConfig),o(2),a("ngForOf",p.data)}},dependencies:[E,X,Y,Ie,ve,ke,Fe,Pe,Ee,Oe,we,De,Ne,qe,Me],changeDetection:0})}}return t})();var kt=t=>({$implicit:t});function Dt(t,l){if(t&1){let e=v();s(0,"nzx-configurable-query",7),z("queryChange",function(i){u(e);let r=c();return h(r.nzxQueryParamsChange.emit(i))})("resetChange",function(i){u(e);let r=c();return h(r.nzxQueryParamsChange.emit(i))}),m()}if(t&2){let e=c();a("controls",e.controls)("nzxBtnSpan",e.nzxBtnSpan)}}function wt(t,l){if(t&1&&C(0,"th",8),t&2){let e=c();a("nzShowCheckbox",!1)("nzWidth",e.checkboxWidth)}}function Et(t,l){if(t&1){let e=v();s(0,"th",9),w("nzCheckedChange",function(i){u(e);let r=c();return D(r.checked,i)||(r.checked=i),h(i)}),z("nzCheckedChange",function(i){u(e);let r=c();return h(r.onAllChecked(i))}),m()}if(t&2){let e=c();a("nzWidth",e.checkboxWidth),k("nzChecked",e.checked),a("nzDisabled",e.isDisabled)("nzIndeterminate",e.indeterminate)}}function It(t,l){if(t&1&&(s(0,"th",10),f(1),m()),t&2){let e=l.$implicit;o(),g(" ",e.label," ")}}function Ot(t,l){if(t&1&&(S(0),f(1),_(2,"nzxSafeNull"),T()),t&2){let e=c().$implicit,n=c().$implicit;o(),g(" ",x(2,1,n[e.key])," ")}}function Pt(t,l){if(t&1&&(S(0),f(1),_(2,"nzxSafeNull"),T()),t&2){let e=c().$implicit,n=c().$implicit;o(),g(" ",x(2,1,e.format(n))," ")}}function Mt(t,l){t&1&&L(0)}function Vt(t,l){if(t&1&&(S(0),d(1,Mt,1,0,"ng-container",13),T()),t&2){let e=c().$implicit,n=c().$implicit;o(),a("ngTemplateOutlet",e.template)("ngTemplateOutletContext",J(2,kt,n))}}function qt(t,l){if(t&1&&(s(0,"td"),d(1,Ot,3,3,"ng-container",12)(2,Pt,3,3,"ng-container",12)(3,Vt,2,4,"ng-container",12),m()),t&2){let e=l.$implicit;o(),a("ngIf",!e.format&&!e.template),o(),a("ngIf",e.format&&!e.template),o(),a("ngIf",e.template)}}function At(t,l){if(t&1){let e=v();s(0,"tr")(1,"td",11),z("nzCheckedChange",function(i){let r=u(e).$implicit,p=c();return h(p.onItemChecked(r,i))}),m(),d(2,qt,4,3,"td",6),m()}if(t&2){let e=l.$implicit,n=c();o(),a("nzChecked",n.setOfCheckedId.has(n.getValue(e,n.uniqueKey)))("nzDisabled",e.disabled),o(),a("ngForOf",n.tableConfig)}}var dt=(()=>{class t extends Ae{ngOnChanges(e){e.list&&this.refreshCheckedStatus()}static{this.\u0275fac=(()=>{let e;return function(i){return(e||(e=B(t)))(i||t)}})()}static{this.\u0275cmp=y({type:t,selectors:[["nzx-table-select"]],exportAs:["NzxTableSelect"],features:[U([{provide:ee,useExisting:q(()=>t),multi:!0}]),K,$],decls:10,vars:6,consts:[["table",""],[3,"controls","nzxBtnSpan","queryChange","resetChange",4,"ngIf"],["nzShowSizeChanger","",3,"nzData"],[3,"nzShowCheckbox","nzWidth",4,"ngIf"],[3,"nzWidth","nzChecked","nzDisabled","nzIndeterminate","nzCheckedChange",4,"ngIf"],["nzAlign","center",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[3,"queryChange","resetChange","controls","nzxBtnSpan"],[3,"nzShowCheckbox","nzWidth"],[3,"nzCheckedChange","nzWidth","nzChecked","nzDisabled","nzIndeterminate"],["nzAlign","center"],[3,"nzCheckedChange","nzChecked","nzDisabled"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){if(n&1&&(d(0,Dt,1,2,"nzx-configurable-query",1),s(1,"nz-table",2,0)(3,"thead")(4,"tr"),d(5,wt,1,2,"th",3)(6,Et,1,4,"th",4)(7,It,2,1,"th",5),m()(),s(8,"tbody"),d(9,At,3,3,"tr",6),m()()),n&2){let r=N(2);a("ngIf",i.controls&&i.controls.length),o(),a("nzData",i.list),o(4),a("ngIf",i.mode==="single"),o(),a("ngIf",i.mode==="multiple"),o(),a("ngForOf",i.tableConfig),o(2),a("ngForOf",r.data)}},dependencies:[E,X,Y,Ie,ve,ke,Fe,Pe,Ee,Oe,we,De,Ne,Me],changeDetection:0})}}return t})();var Qe=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=W({type:t})}static{this.\u0275inj=A({imports:[I,at,ot,lt,Ve]})}}return t})();function Gt(t,l){if(t&1&&(s(0,"nz-form-item")(1,"nz-form-label"),f(2),m(),s(3,"nz-form-control"),C(4,"nz-switch",5),m()()),t&2){let e=l.$implicit;o(2),F(e.name),o(2),a("formControlName",e.formControlName)}}function jt(t,l){if(t&1&&(s(0,"label",7),f(1),m()),t&2){let e=l.$implicit;a("nzValue",e.value),o(),F(e.label)}}function Ut(t,l){if(t&1&&(s(0,"nz-form-item")(1,"nz-form-label"),f(2),m(),s(3,"nz-form-control")(4,"nz-radio-group",5),d(5,jt,2,2,"label",6),m()()()),t&2){let e=l.$implicit;o(2),F(e.name),o(2),a("formControlName",e.formControlName),o(),a("ngForOf",e.listOfOption)}}function Ht(t,l){if(t&1&&C(0,"img",8),t&2){let e=l.$implicit;a("nzSrc",e.picture.large)}}var We=(()=>{class t{constructor(e,n,i){this.http=e,this.cd=n,this.fb=i,this.listOfSwitch=[{name:"Disable",formControlName:"disabled"}],this.listOfRadio=[{name:"Mode",formControlName:"mode",listOfOption:[{value:"single",label:"\u5355\u9009"},{value:"multiple",label:"\u591A\u9009"}]}],this.selected=[],this.loading=!1,this.list=[],this.controls=[{controlName:"nat",label:"\u56FD\u7C4D",placeholder:"\u56FD\u7C4D",controlType:"input"}],this.total=0,this.tableConfig=[{label:"\u59D3\u540D",key:"name",format:r=>`${r.name.first}${r.name.last}`},{label:"\u6027\u522B",key:"gender"},{label:"\u56FD\u7C4D",key:"nat"},{label:"Email",key:"email"},{label:"photo",key:"picture"}],this.settingForm=this.fb.group({disabled:!1,mode:"single"})}queryParamsChange(e){this.loading=!0,this.getUsers(e).pipe(Ue(()=>{this.loading=!1,this.cd.markForCheck()})).subscribe(n=>{console.log("result::",n),this.list=n.results,this.total=200})}getUsers(e){let{pageSize:n,pageIndex:i,sort:r,filter:p,nat:b}=e,$e=new Ze().append("page",`${i}`).append("results",`${n}`).append("nat",`${b}`);return this.http.get("https://api.randomuser.me/",{params:$e}).pipe(je(()=>Ge({results:[]})))}static{this.\u0275fac=function(n){return new(n||t)(O(et),O(M),O(le))}}static{this.\u0275cmp=y({type:t,selectors:[["nzx-page-table-select-demo"]],standalone:!0,features:[H],decls:8,vars:14,consts:[["nzTitle","nzx-page-table-select"],["nz-form","","nzLayout","inline",3,"formGroup"],[4,"ngFor","ngForOf"],["uniqueKey","login.uuid",3,"ngModelChange","nzxQueryParamsChange","disabled","loading","tableConfig","mode","controls","list","nzTotal","ngModel"],["nzxTableSelectKey","picture"],[3,"formControlName"],["nz-radio-button","",3,"nzValue",4,"ngFor","ngForOf"],["nz-radio-button","",3,"nzValue"],["nz-image","","width","80px","height","80px","alt","",3,"nzSrc"]],template:function(n,i){n&1&&(s(0,"nz-card",0)(1,"form",1),d(2,Gt,5,2,"nz-form-item",2)(3,Ut,6,3,"nz-form-item",2),m(),s(4,"nzx-page-table-select",3),w("ngModelChange",function(p){return D(i.selected,p)||(i.selected=p),p}),z("nzxQueryParamsChange",function(p){return i.queryParamsChange(p)}),d(5,Ht,1,1,"ng-template",4),m(),f(6),_(7,"json"),m()),n&2&&(o(),a("formGroup",i.settingForm),o(),a("ngForOf",i.listOfSwitch),o(),a("ngForOf",i.listOfRadio),o(),a("disabled",i.settingForm.value.disabled)("loading",i.loading)("tableConfig",i.tableConfig)("mode",i.settingForm.value.mode)("controls",i.controls)("list",i.list)("nzTotal",i.total),k("ngModel",i.selected),o(2),g(" \u9009\u4E2D\uFF1A",x(7,12,i.selected),`
`))},dependencies:[I,E,Z,me,oe,te,ne,ie,se,ae,re,be,ge,he,Ce,ze,xe,_e,st,mt,ce,ue,fe,de,pe,Te,Se,ye,Qe,V,pt],changeDetection:0})}}return t})();function Jt(t,l){if(t&1&&(s(0,"nz-form-item")(1,"nz-form-label"),f(2),m(),s(3,"nz-form-control"),C(4,"nz-switch",5),m()()),t&2){let e=l.$implicit;o(2),F(e.name),o(2),a("formControlName",e.formControlName)}}function Xt(t,l){if(t&1&&(s(0,"label",7),f(1),m()),t&2){let e=l.$implicit;a("nzValue",e.value),o(),F(e.label)}}function Yt(t,l){if(t&1&&(s(0,"nz-form-item")(1,"nz-form-label"),f(2),m(),s(3,"nz-form-control")(4,"nz-radio-group",5),d(5,Xt,2,2,"label",6),m()()()),t&2){let e=l.$implicit;o(2),F(e.name),o(2),a("formControlName",e.formControlName),o(),a("ngForOf",e.listOfOption)}}function Zt(t,l){if(t&1&&C(0,"nz-rate",8),t&2){let e=l.$implicit;a("ngModel",e.stars)}}var Re=(()=>{class t{constructor(e,n){this.cd=e,this.fb=n,this.listOfSwitch=[{name:"Disable",formControlName:"disabled"}],this.listOfRadio=[{name:"Mode",formControlName:"mode",listOfOption:[{value:"single",label:"\u5355\u9009"},{value:"multiple",label:"\u591A\u9009"}]}],this.selected=[],this.tableConfig=[{label:"\u59D3\u540D",key:"name"},{label:"\u5E74\u9F84",key:"age"},{label:"\u73ED\u7EA7",key:"class",format:i=>`${i.class}\u73ED`},{label:"stars",key:"stars"}],this.list=[{id:1,name:"\u5F20\u4E09",age:18,class:1,stars:1},{id:2,name:"\u674E\u56DB",age:19,class:3,stars:2},{id:3,name:"enochgao",age:20,class:2,stars:3},{id:4,name:"enochgao",age:20,class:2,stars:4},{id:5,name:"enochgao",age:20,class:2,stars:5},{id:6,name:"enochgao",age:20,class:2,stars:1},{id:7,name:"enochgao",age:20,class:2,stars:2},{id:8,name:"enochgao",age:20,class:2,stars:3},{id:9,name:"enochgao",age:20,class:2,stars:4},{id:10,name:"enochgao",age:20,class:2,stars:5},{id:11,name:"enochgao",age:20,class:2,stars:1}],this.settingForm=this.fb.group({disabled:!1,mode:"single"})}static{this.\u0275fac=function(n){return new(n||t)(O(M),O(le))}}static{this.\u0275cmp=y({type:t,selectors:[["nzx-table-select-demo"]],standalone:!0,features:[H],decls:8,vars:11,consts:[["nzTitle","nzx-table-select"],["nz-form","","nzLayout","inline",3,"formGroup"],[4,"ngFor","ngForOf"],[3,"ngModelChange","disabled","mode","tableConfig","list","ngModel"],["nzxTableSelectKey","stars"],[3,"formControlName"],["nz-radio-button","",3,"nzValue",4,"ngFor","ngForOf"],["nz-radio-button","",3,"nzValue"],["nzDisabled","",3,"ngModel"]],template:function(n,i){n&1&&(s(0,"nz-card",0)(1,"form",1),d(2,Jt,5,2,"nz-form-item",2)(3,Yt,6,3,"nz-form-item",2),m(),s(4,"nzx-table-select",3),w("ngModelChange",function(p){return D(i.selected,p)||(i.selected=p),p}),d(5,Zt,1,1,"ng-template",4),m(),f(6),_(7,"json"),m()),n&2&&(o(),a("formGroup",i.settingForm),o(),a("ngForOf",i.listOfSwitch),o(),a("ngForOf",i.listOfRadio),o(),a("disabled",i.settingForm.value.disabled)("mode",i.settingForm.value.mode)("tableConfig",i.tableConfig)("list",i.list),k("ngModel",i.selected),o(2),g(" \u9009\u4E2D\uFF1A",x(7,9,i.selected),`
`))},dependencies:[I,E,Z,me,oe,te,ne,ie,se,ae,re,tt,be,ge,he,Ce,ze,xe,_e,ce,Ve,it,nt,rt,de,pe,Te,Se,ye,ue,fe,Qe,V,dt],changeDetection:0})}}return t})();var ft=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=W({type:t})}static{this.\u0275inj=A({imports:[I,We,Re]})}}return t})();var ki={"nzx-table-select-page-table-select-example":We,"nzx-table-select-table-select-example":Re},Di=ft;export{Di as EXAMPLES_MODULE,ki as EXAMPLE_COMPONENTS};