import{a as ie,b as ne}from"./chunk-VB2EFXJJ.js";import{h as w}from"./chunk-H66T5NKY.js";import{a as J}from"./chunk-ZVWL25YR.js";import{a as te}from"./chunk-K66H5K2I.js";import{$b as Q,Ac as W,Ba as u,Ca as k,Cd as X,Dd as b,Fb as B,Fc as q,Gb as K,Hb as Z,Ib as L,Ka as d,La as h,Md as Y,Nd as ee,Qa as I,Qb as P,Rb as H,Tb as N,Ua as F,X as p,Ya as _,aa as D,ab as c,ca as O,cb as E,gc as G,ic as m,jc as U,l as V,la as T,lb as x,ma as R,mb as M,nb as $,ob as f,pb as z,qb as j,ta as S,ua as o,ub as g,va as l,xb as v,y as A,zb as y}from"./chunk-OGFJLPPA.js";var oe=["nz-rate-item",""],re=n=>({$implicit:n});function le(n,C){}function ue(n,C){}function he(n,C){n&1&&j(0,"span",4)}var ce=["ulElement"];function me(n,C){if(n&1){let e=g();f(0,"li",2)(1,"div",3),v("itemHover",function(i){let r=o(e).$index,a=y();return l(a.onItemHover(r,i))})("itemClick",function(i){let r=o(e).$index,a=y();return l(a.onItemClick(r,i))}),z()()}if(n&2){let e=C.$index,t=y();c("ngClass",t.starStyleArray[e]||"")("nzTooltipTitle",t.nzTooltips[e]),d(),c("allowHalf",t.nzAllowHalf)("character",t.nzCharacter)("index",e)}}var se=(()=>{class n{constructor(){this.index=0,this.allowHalf=!1,this.itemHover=new u,this.itemClick=new u}hoverRate(e){this.itemHover.next(e&&this.allowHalf)}clickRate(e){this.itemClick.next(e&&this.allowHalf)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=T({type:n,selectors:[["","nz-rate-item",""]],inputs:{character:"character",index:"index",allowHalf:[2,"allowHalf","allowHalf",m]},outputs:{itemHover:"itemHover",itemClick:"itemClick"},exportAs:["nzRateItem"],standalone:!0,features:[F,H],attrs:oe,decls:6,vars:8,consts:[["defaultCharacter",""],[1,"ant-rate-star-second",3,"mouseover","click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ant-rate-star-first",3,"mouseover","click"],["nz-icon","","nzType","star","nzTheme","fill"]],template:function(t,i){if(t&1){let r=g();f(0,"div",1),v("mouseover",function(s){return o(r),i.hoverRate(!1),l(s.stopPropagation())})("click",function(){return o(r),l(i.clickRate(!1))}),_(1,le,0,0,"ng-template",2),z(),f(2,"div",3),v("mouseover",function(s){return o(r),i.hoverRate(!0),l(s.stopPropagation())})("click",function(){return o(r),l(i.clickRate(!0))}),_(3,ue,0,0,"ng-template",2),z(),_(4,he,1,0,"ng-template",null,0,Q)}if(t&2){let r=L(5);d(),c("ngTemplateOutlet",i.character||r)("ngTemplateOutletContext",N(4,re,i.index)),d(2),c("ngTemplateOutlet",i.character||r)("ngTemplateOutletContext",N(6,re,i.index))}},dependencies:[q,ee,Y],encapsulation:2,changeDetection:0})}}return n})(),ae="rate",pe=(()=>{class n{get nzValue(){return this._value}set nzValue(e){this._value!==e&&(this._value=e,this.hasHalf=!Number.isInteger(e)&&this.nzAllowHalf,this.hoverValue=Math.ceil(e))}constructor(e,t,i,r,a,s){this.nzConfigService=e,this.ngZone=t,this.renderer=i,this.cdr=r,this.directionality=a,this.destroy$=s,this._nzModuleName=ae,this.nzAllowClear=!0,this.nzAllowHalf=!1,this.nzDisabled=!1,this.nzAutoFocus=!1,this.nzCount=5,this.nzTooltips=[],this.nzOnBlur=new u,this.nzOnFocus=new u,this.nzOnHoverChange=new u,this.nzOnKeyDown=new u,this.classMap={},this.starArray=[],this.starStyleArray=[],this.dir="ltr",this.hasHalf=!1,this.hoverValue=0,this.isFocused=!1,this._value=0,this.isNzDisableFirstChange=!0,this.onChange=()=>null,this.onTouched=()=>null}ngOnChanges(e){let{nzAutoFocus:t,nzCount:i,nzValue:r}=e;if(t&&!t.isFirstChange()){let a=this.ulElement.nativeElement;this.nzAutoFocus&&!this.nzDisabled?this.renderer.setAttribute(a,"autofocus","autofocus"):this.renderer.removeAttribute(a,"autofocus")}i&&this.updateStarArray(),r&&this.updateStarStyle()}ngOnInit(){this.nzConfigService.getConfigChangeEventForComponent(ae).pipe(p(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.directionality.change.pipe(p(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{A(this.ulElement.nativeElement,"focus").pipe(p(this.destroy$)).subscribe(e=>{this.isFocused=!0,this.nzOnFocus.observers.length&&this.ngZone.run(()=>this.nzOnFocus.emit(e))}),A(this.ulElement.nativeElement,"blur").pipe(p(this.destroy$)).subscribe(e=>{this.isFocused=!1,this.nzOnBlur.observers.length&&this.ngZone.run(()=>this.nzOnBlur.emit(e))})})}onItemClick(e,t){if(this.nzDisabled)return;this.hoverValue=e+1;let i=t?e+.5:e+1;this.nzValue===i?this.nzAllowClear&&(this.nzValue=0,this.onChange(this.nzValue)):(this.nzValue=i,this.onChange(this.nzValue)),this.updateStarStyle()}onItemHover(e,t){this.nzDisabled||((this.hoverValue!==e+1||t!==this.hasHalf)&&(this.hoverValue=e+1,this.hasHalf=t,this.updateStarStyle()),this.nzOnHoverChange.emit(this.hoverValue))}onRateLeave(){this.hasHalf=!Number.isInteger(this.nzValue),this.hoverValue=Math.ceil(this.nzValue),this.nzOnHoverChange.emit(this.hoverValue),this.updateStarStyle()}focus(){this.ulElement.nativeElement.focus()}blur(){this.ulElement.nativeElement.blur()}onKeyDown(e){let t=this.nzValue;e.keyCode===39&&this.nzValue<this.nzCount?this.nzValue+=this.nzAllowHalf?.5:1:e.keyCode===37&&this.nzValue>0&&(this.nzValue-=this.nzAllowHalf?.5:1),t!==this.nzValue&&(this.onChange(this.nzValue),this.nzOnKeyDown.emit(e),this.updateStarStyle(),this.cdr.markForCheck())}updateStarArray(){this.starArray=Array(this.nzCount).fill(0).map((e,t)=>t),this.updateStarStyle()}updateStarStyle(){this.starStyleArray=this.starArray.map(e=>{let t="ant-rate-star",i=e+1;return{[`${t}-full`]:i<this.hoverValue||!this.hasHalf&&i===this.hoverValue,[`${t}-half`]:this.hasHalf&&i===this.hoverValue,[`${t}-active`]:this.hasHalf&&i===this.hoverValue,[`${t}-zero`]:i>this.hoverValue,[`${t}-focused`]:this.hasHalf&&i===this.hoverValue&&this.isFocused}})}writeValue(e){this.nzValue=e||0,this.updateStarArray(),this.cdr.markForCheck()}setDisabledState(e){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||e,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}static{this.\u0275fac=function(t){return new(t||n)(h(X),h(k),h(I),h(G),h(te),h(w))}}static{this.\u0275cmp=T({type:n,selectors:[["nz-rate"]],viewQuery:function(t,i){if(t&1&&B(ce,7),t&2){let r;K(r=Z())&&(i.ulElement=r.first)}},inputs:{nzAllowClear:[2,"nzAllowClear","nzAllowClear",m],nzAllowHalf:[2,"nzAllowHalf","nzAllowHalf",m],nzDisabled:[2,"nzDisabled","nzDisabled",m],nzAutoFocus:[2,"nzAutoFocus","nzAutoFocus",m],nzCharacter:"nzCharacter",nzCount:[2,"nzCount","nzCount",U],nzTooltips:"nzTooltips"},outputs:{nzOnBlur:"nzOnBlur",nzOnFocus:"nzOnFocus",nzOnHoverChange:"nzOnHoverChange",nzOnKeyDown:"nzOnKeyDown"},exportAs:["nzRate"],standalone:!0,features:[P([w,{provide:J,useExisting:D(()=>n),multi:!0}]),F,S,H],decls:4,vars:6,consts:[["ulElement",""],[1,"ant-rate",3,"keydown","mouseleave","ngClass","tabindex"],["nz-tooltip","",1,"ant-rate-star",3,"ngClass","nzTooltipTitle"],["nz-rate-item","",3,"itemHover","itemClick","allowHalf","character","index"]],template:function(t,i){if(t&1){let r=g();f(0,"ul",1,0),v("keydown",function(s){return o(r),i.onKeyDown(s),l(s.preventDefault())})("mouseleave",function(s){return o(r),i.onRateLeave(),l(s.stopPropagation())}),M(2,me,2,5,"li",2,x),z()}t&2&&(E("ant-rate-disabled",i.nzDisabled)("ant-rate-rtl",i.dir==="rtl"),c("ngClass",i.classMap)("tabindex",i.nzDisabled?-1:1),d(2),$(i.starArray))},dependencies:[W,ne,ie,se],encapsulation:2,changeDetection:0})}}return V([b()],n.prototype,"nzAllowClear",void 0),V([b()],n.prototype,"nzAllowHalf",void 0),n})(),$e=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=R({type:n})}static{this.\u0275inj=O({imports:[pe,se]})}}return n})();export{pe as a,$e as b};
