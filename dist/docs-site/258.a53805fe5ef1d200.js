"use strict";(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[258],{4258:(V,f,i)=>{i.r(f),i.d(f,{EXAMPLES_MODULE:()=>R,EXAMPLE_COMPONENTS:()=>H});var c=i(6895),a=i(4006),g=i(9258),_=i(6616),p=i(5259),s=i(6704),m=i(3679),z=i(7423),C=i(5635),y=i(8231),e=i(4650);let b=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.ez,a.UX,C.o7,s.U5,m.Jb,_.sL,y.LV,p.Hb,z.PV]}),o})(),x=(()=>{class o{constructor(n){this.templateRef=n}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(e.Rgc))},o.\u0275dir=e.lG2({type:o,selectors:[["","nzxControl",""]],inputs:{nzxControl:"nzxControl"}}),o})();var N=i(7579),T=i(2722),q=i(7044),Q=i(1811);function P(o,r){if(1&o&&(e.TgZ(0,"nz-form-label",18),e._uU(1),e.qZA()),2&o){const n=e.oxw(2).$implicit;e.Q6J("nzSpan",n.nzxLSpan||6),e.xp6(1),e.hij(" ",n.label," ")}}function A(o,r){if(1&o&&e._UZ(0,"input",19),2&o){const n=e.oxw(2).$implicit;e.Q6J("placeholder",n.placeholder)("formControlName",n.controlName)}}function v(o,r){if(1&o&&e._UZ(0,"nz-option",22),2&o){const n=r.$implicit;e.Q6J("nzValue",n.value)("nzLabel",n.label)}}function Z(o,r){if(1&o&&(e.TgZ(0,"nz-select",20),e.YNc(1,v,1,2,"nz-option",21),e.qZA()),2&o){const n=e.oxw(2).$implicit;e.Q6J("formControlName",n.controlName)("nzShowSearch",!0)("nzAllowClear",n.nzxAllowClear)("nzPlaceHolder",n.placeholder),e.xp6(1),e.Q6J("ngForOf",n.menuList)}}const d=function(){return{width:"100%"}};function E(o,r){if(1&o&&e._UZ(0,"nz-date-picker",23),2&o){const n=e.oxw(2).$implicit;e.Q6J("ngStyle",e.DdM(3,d))("formControlName",n.controlName)("nzPlaceHolder",n.placeholder)}}function F(o,r){if(1&o&&e._UZ(0,"nz-range-picker",24),2&o){const n=e.oxw(2).$implicit;e.Q6J("ngStyle",e.DdM(2,d))("formControlName",n.controlName)}}function J(o,r){1&o&&e.GkF(0)}const S=function(o){return{$implicit:o}};function B(o,r){if(1&o&&(e.ynx(0),e.YNc(1,J,1,0,"ng-container",25),e.BQk()),2&o){const n=e.oxw(2).$implicit,t=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",n.templateRef)("ngTemplateOutletContext",e.VKq(2,S,t.queryForm.get(n.controlName)))}}function U(o,r){if(1&o&&(e.TgZ(0,"div",10)(1,"nz-form-item"),e.YNc(2,P,2,2,"nz-form-label",11),e.TgZ(3,"nz-form-control",12),e.YNc(4,A,1,2,"input",13),e.YNc(5,Z,2,5,"nz-select",14),e.YNc(6,E,1,4,"nz-date-picker",15),e.YNc(7,F,1,3,"nz-range-picker",16),e.YNc(8,B,2,4,"ng-container",17),e.qZA()()()),2&o){const n=e.oxw().$implicit,t=e.oxw();e.Q6J("nzSpan",n.nzxSpan||24/t.lineNumber)("hidden",t.nzxCollapse&&n.collapse),e.xp6(2),e.Q6J("ngIf",n.label),e.xp6(1),e.Q6J("nzSpan",n.nzxRSpan||18)("nzErrorTip",n.errorTip),e.xp6(1),e.Q6J("ngIf","input"===n.controlType),e.xp6(1),e.Q6J("ngIf","select"===n.controlType),e.xp6(1),e.Q6J("ngIf","datePicker"===n.controlType),e.xp6(1),e.Q6J("ngIf","rangePicker"===n.controlType),e.xp6(1),e.Q6J("ngIf","Template"===n.controlType)}}function I(o,r){if(1&o&&(e.ynx(0),e.YNc(1,U,9,10,"div",9),e.BQk()),2&o){const n=r.$implicit;e.xp6(1),e.Q6J("ngIf",!n.hidden)}}function L(o,r){if(1&o){const n=e.EpF();e.TgZ(0,"a",26),e.NdJ("click",function(){e.CHM(n);const l=e.oxw();return e.KtG(l.toggleCollapse())}),e._uU(1),e._UZ(2,"i",27),e.qZA()}if(2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.isCollapse?"\u5c55\u5f00":"\u6536\u8d77"," "),e.xp6(1),e.Q6J("nzType",n.isCollapse?"down":"up")}}const w=["*"];let O=(()=>{class o{constructor(n,t){this.fb=n,this.cd=t,this.controls=[],this.nzxJustify="start",this.nzxGutter=8,this.lineNumber=3,this.nzxBtnSpan=null,this.nzxCollapse=!0,this.initQuery=!1,this.queryParamsChange=new e.vpe,this.queryParams={},this.isCollapse=!0,this.defaultValue={},this.params={},this.destroy$=new N.x,this._nzxBtnSpan=null,this.queryForm=this.fb.group({})}ngOnInit(){this.queryForm.valueChanges.pipe((0,T.R)(this.destroy$)).subscribe(n=>{this.queryParams=n}),this._nzxBtnSpan=this.nzxBtnSpan}ngAfterContentInit(){for(const n of this.controls){if("Template"===n.controlType){const t=this.controlTemplateList.find(l=>l.nzxControl===n.controlName);t&&(n.templateRef=t.templateRef)}this.queryForm.addControl(n.controlName,n.controlInstance??this.fb.control(n.default??null))}this.queryParams=this.queryForm.value,this.defaultValue=Object.assign({},this.queryParams),this.params&&this.queryForm.patchValue(this.params),this.initQuery&&this.search()}setQueryParams(n){this.params=n}setControl(n,t){let l=this.getControl(n);l&&Object.keys(t).forEach(u=>{l[u]=t[u]})}getControl(n){const t=this.controls.findIndex(l=>l.controlName===n);if(t>-1)return this.controls[t]}search(){this.queryForm.invalid?Object.values(this.queryForm.controls).forEach(n=>{n.invalid&&(n.markAsDirty(),n.updateValueAndValidity({onlySelf:!0}))}):this.queryParamsChange.emit(this.queryParams)}reset(){this.queryForm.reset(this.defaultValue),this.search()}toggleCollapse(){this.controls.forEach(n=>{this.isCollapse&&!0===n.collapse&&(n.collapse=!1,this.nzxBtnSpan=24),!this.isCollapse&&!1===n.collapse&&(n.collapse=!0,this.nzxBtnSpan=this._nzxBtnSpan)}),this.isCollapse=!this.isCollapse}ngOnDestroy(){this.destroy$.complete(),this.destroy$.unsubscribe()}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(a.qu),e.Y36(e.sBO))},o.\u0275cmp=e.Xpm({type:o,selectors:[["nzx-configurable-query"]],contentQueries:function(n,t,l){if(1&n&&e.Suo(l,x,4),2&n){let u;e.iGM(u=e.CRH())&&(t.controlTemplateList=u)}},inputs:{controls:"controls",nzxJustify:"nzxJustify",nzxGutter:"nzxGutter",lineNumber:"lineNumber",nzxBtnSpan:"nzxBtnSpan",nzxCollapse:"nzxCollapse",initQuery:"initQuery"},outputs:{queryParamsChange:"queryParamsChange"},exportAs:["NzxConfigurableQuery"],ngContentSelectors:w,decls:12,vars:6,consts:[[1,"nzx-query-container"],["nz-form","",3,"formGroup"],["nz-row","",3,"nzGutter","nzJustify"],[4,"ngFor","ngForOf"],["nz-col","",1,"nzx-query-btn",3,"nzSpan"],["nz-row","","nzJustify","end","nzAlign","middle"],["nz-button","","nzType","primary","type","button",3,"click"],["nz-button","","type","button",3,"click"],[3,"click",4,"ngIf"],["nz-col","",3,"nzSpan","hidden",4,"ngIf"],["nz-col","",3,"nzSpan","hidden"],[3,"nzSpan",4,"ngIf"],[3,"nzSpan","nzErrorTip"],["nz-input","","type","text",3,"placeholder","formControlName",4,"ngIf"],[3,"formControlName","nzShowSearch","nzAllowClear","nzPlaceHolder",4,"ngIf"],[3,"ngStyle","formControlName","nzPlaceHolder",4,"ngIf"],[3,"ngStyle","formControlName",4,"ngIf"],[4,"ngIf"],[3,"nzSpan"],["nz-input","","type","text",3,"placeholder","formControlName"],[3,"formControlName","nzShowSearch","nzAllowClear","nzPlaceHolder"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzLabel"],[3,"ngStyle","formControlName","nzPlaceHolder"],[3,"ngStyle","formControlName"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"click"],["nz-icon","",3,"nzType"]],template:function(n,t){1&n&&(e.F$t(),e.TgZ(0,"div",0)(1,"form",1)(2,"div",2),e.YNc(3,I,2,1,"ng-container",3),e.TgZ(4,"div",4)(5,"div",5)(6,"button",6),e.NdJ("click",function(){return t.search()}),e._uU(7," \u67e5\u8be2 "),e.qZA(),e.TgZ(8,"button",7),e.NdJ("click",function(){return t.reset()}),e._uU(9,"\u91cd\u7f6e"),e.qZA(),e.YNc(10,L,3,2,"a",8),e.Hsn(11),e.qZA()()()()()),2&n&&(e.xp6(1),e.Q6J("formGroup",t.queryForm),e.xp6(1),e.Q6J("nzGutter",t.nzxGutter)("nzJustify",t.nzxJustify),e.xp6(1),e.Q6J("ngForOf",t.controls),e.xp6(1),e.Q6J("nzSpan",t.nzxBtnSpan||24/t.lineNumber),e.xp6(6),e.Q6J("ngIf",t.nzxCollapse))},dependencies:[c.sg,c.O5,c.tP,c.PC,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,C.Zp,m.t3,m.SK,s.Lr,s.Nx,s.iK,s.Fd,_.ix,q.w,Q.dQ,y.Ip,y.Vq,p.uw,p.wS,z.Ls],styles:[".nzx-query-container[_ngcontent-%COMP%]{padding:12px;background-color:#fff;border-radius:8px}.nzx-query-container[_ngcontent-%COMP%]   [nz-form-label][_ngcontent-%COMP%]{overflow:visible}.nzx-query-container[_ngcontent-%COMP%]   .nzx-query-btn[_ngcontent-%COMP%]{flex-grow:2;max-width:none}.nzx-query-container[_ngcontent-%COMP%]   .nzx-query-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 4px;width:104px}"],changeDetection:0}),o})();const M=["query7"];function k(o,r){1&o&&e._UZ(0,"nz-rate",9),2&o&&e.Q6J("formControl",r.$implicit)}function j(o,r){1&o&&e._UZ(0,"nz-rate",9),2&o&&e.Q6J("formControl",r.$implicit)}function Y(o,r){1&o&&e._UZ(0,"nz-rate",9),2&o&&e.Q6J("formControl",r.$implicit)}function $(o,r){1&o&&e._UZ(0,"nz-rate",9),2&o&&e.Q6J("formControl",r.$implicit)}function D(o,r){1&o&&e._UZ(0,"nz-rate",9),2&o&&e.Q6J("formControl",r.$implicit)}let h=(()=>{class o{constructor(){this.queryParams={},this.controls=[{controlName:"name",label:"\u59d3\u540d",placeholder:"\u59d3\u540d",controlType:"input"},{controlName:"gender",label:"\u6027\u522b",placeholder:"\u8bf7\u9009\u62e9",controlType:"select",menuList:[{label:"\u7537",value:1},{label:"\u5973",value:2}],controlInstance:new a.NI(1,[a.kI.required]),errorTip:"\u5047\u8bbe\u5fc5\u586b\u9ed8\u8ba4",nzxAllowClear:!0},{controlName:"birthday",label:"\u51fa\u751f\u65e5\u671f",placeholder:"\u65e5\u671f",controlType:"datePicker",collapse:!0},{controlName:"level",label:"\u804c\u4e1a\u7b49\u7ea7",controlType:"Template",collapse:!0}],this.queryParams2={},this.controls2=[{controlName:"name",label:"\u59d3\u540d",placeholder:"\u59d3\u540d",controlType:"input"},{controlName:"birthday",label:"\u51fa\u751f\u65e5\u671f",placeholder:"\u65e5\u671f",controlType:"datePicker"}],this.queryParams3={},this.controls3=[{controlName:"name",label:"\u59d3\u540d",placeholder:"\u59d3\u540d",controlType:"input"},{controlName:"gender",label:"\u6027\u522b",placeholder:"\u8bf7\u9009\u62e9",controlType:"select",menuList:[{label:"\u7537",value:1},{label:"\u5973",value:2}],controlInstance:new a.NI(1,[a.kI.required]),errorTip:"\u5047\u8bbe\u5fc5\u586b\u9ed8\u8ba4",nzxAllowClear:!0},{controlName:"birthday",label:"\u51fa\u751f\u65e5\u671f",placeholder:"\u65e5\u671f",controlType:"datePicker",collapse:!0},{controlName:"level",label:"\u804c\u4e1a\u7b49\u7ea7",controlType:"Template",collapse:!0}],this.queryParams4={},this.controls4=[{controlName:"name",label:"\u59d3\u540d",placeholder:"\u59d3\u540d",controlType:"input"},{controlName:"gender",label:"\u6027\u522b",placeholder:"\u8bf7\u9009\u62e9",controlType:"select",menuList:[{label:"\u7537",value:1},{label:"\u5973",value:2}],controlInstance:new a.NI(1,[a.kI.required]),errorTip:"\u5047\u8bbe\u5fc5\u586b\u9ed8\u8ba4",nzxAllowClear:!0},{controlName:"birthday",label:"\u51fa\u751f\u65e5\u671f",placeholder:"\u65e5\u671f",controlType:"datePicker",collapse:!0},{controlName:"level",label:"\u804c\u4e1a\u7b49\u7ea7",controlType:"Template",collapse:!0}],this.queryParams5={},this.controls5=[{controlName:"searchType",placeholder:"\u8bf7\u9009\u62e9",nzxSpan:3,nzxRSpan:24,controlType:"select",menuList:[{label:"\u73ed\u7ea7",value:1},{label:"\u59d3\u540d",value:2}],default:1},{controlName:"searchKey",placeholder:"\u641c\u7d22\u5185\u5bb9",nzxSpan:9,nzxRSpan:24,controlType:"input"},{controlName:"name",label:"\u59d3\u540d",placeholder:"\u59d3\u540d",controlType:"input"},{controlName:"gender",label:"\u6027\u522b",placeholder:"\u8bf7\u9009\u62e9",controlType:"select",menuList:[{label:"\u7537",value:1},{label:"\u5973",value:2}],controlInstance:new a.NI(1,[a.kI.required]),errorTip:"\u5047\u8bbe\u5fc5\u586b\u9ed8\u8ba4",nzxAllowClear:!0},{controlName:"birthday",label:"\u51fa\u751f\u65e5\u671f",placeholder:"\u65e5\u671f",controlType:"datePicker",collapse:!0},{controlName:"level",label:"\u804c\u4e1a\u7b49\u7ea7",controlType:"Template",collapse:!0}],this.queryParams6={},this.controls6=[{controlName:"searchType",placeholder:"\u8bf7\u9009\u62e9",nzxSpan:3,nzxRSpan:24,controlType:"select",menuList:[{label:"\u73ed\u7ea7",value:1},{label:"\u59d3\u540d",value:2}],default:1},{controlName:"searchKey",placeholder:"\u641c\u7d22\u5185\u5bb9",nzxSpan:9,nzxRSpan:24,controlType:"input"},{controlName:"name",label:"\u59d3\u540d",placeholder:"\u59d3\u540d",controlType:"input",collapse:!0},{controlName:"gender",label:"\u6027\u522b",placeholder:"\u8bf7\u9009\u62e9",controlType:"select",menuList:[{label:"\u7537",value:1},{label:"\u5973",value:2}],controlInstance:new a.NI(1,[a.kI.required]),errorTip:"\u5047\u8bbe\u5fc5\u586b\u9ed8\u8ba4",nzxAllowClear:!0,collapse:!0},{controlName:"birthday",label:"\u51fa\u751f\u65e5\u671f",placeholder:"\u65e5\u671f",controlType:"datePicker",collapse:!0},{controlName:"level",label:"\u804c\u4e1a\u7b49\u7ea7",controlType:"Template",collapse:!0}],this.queryParams7={},this.controls7=[{controlName:"name",label:"\u59d3\u540d",placeholder:"\u59d3\u540d",controlType:"input"},{controlName:"city",label:"\u57ce\u5e02",placeholder:"\u57ce\u5e02",controlType:"select",menuList:[{label:"\u73ed\u7ea7",value:1},{label:"\u59d3\u540d",value:2}]}],this.cityList=[{label:"\u9752\u5c9b",value:"\u9752\u5c9b"},{label:"\u6f4d\u574a",value:"\u6f4d\u574a"},{label:"\u70df\u53f0",value:"\u70df\u53f0"}]}ngOnInit(){setTimeout(()=>{this.query7.setControl("city",{menuList:this.cityList})},3e3)}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nzx-configurable-query-demo"]],viewQuery:function(n,t){if(1&n&&e.Gf(M,5),2&n){let l;e.iGM(l=e.CRH())&&(t.query7=l.first)}},standalone:!0,features:[e.jDz],decls:56,vars:39,consts:[[1,"container"],[3,"controls","queryParamsChange"],["nzxControl","level"],[3,"nzxCollapse","controls","queryParamsChange"],[3,"nzxCollapse","nzxBtnSpan","controls","queryParamsChange"],[3,"controls","lineNumber","nzxBtnSpan","queryParamsChange"],[3,"controls","lineNumber","initQuery","queryParamsChange"],[3,"controls","initQuery","nzxCollapse","queryParamsChange"],["query7",""],["nzAllowHalf","",3,"formControl"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div"),e._uU(2,"\u4f8b\u5b501\uff1a \u81ea\u5b9a\u4e49\u62d3\u5c55\u67e5\u8be2\u804c\u4e1a\u7b49\u7ea7"),e.qZA(),e.TgZ(3,"nzx-configurable-query",1),e.NdJ("queryParamsChange",function(u){return t.queryParams=u}),e.YNc(4,k,1,1,"ng-template",2),e.qZA(),e._uU(5," \u67e5\u8be2\u53c2\u6570\uff1a "),e.TgZ(6,"pre"),e._uU(7),e.ALo(8,"json"),e.qZA(),e.TgZ(9,"div"),e._uU(10,"\u4f8b\u5b502\uff1a \u4e00\u884c\u5c55\u793a"),e.qZA(),e.TgZ(11,"nzx-configurable-query",3),e.NdJ("queryParamsChange",function(u){return t.queryParams2=u}),e.qZA(),e._uU(12," \u67e5\u8be2\u53c2\u6570\uff1a "),e.TgZ(13,"pre"),e._uU(14),e.ALo(15,"json"),e.qZA(),e.TgZ(16,"div"),e._uU(17,"\u4f8b\u5b503\uff1a \u5168\u5c55\u793a\u7981\u7528\u6298\u53e0"),e.qZA(),e.TgZ(18,"nzx-configurable-query",4),e.NdJ("queryParamsChange",function(u){return t.queryParams3=u}),e.YNc(19,j,1,1,"ng-template",2),e.qZA(),e._uU(20," \u67e5\u8be2\u53c2\u6570\uff1a "),e.TgZ(21,"pre"),e._uU(22),e.ALo(23,"json"),e.qZA(),e.TgZ(24,"div"),e._uU(25,"\u4f8b\u5b504\uff1a \u4e00\u884c\u5c55\u793a\u4e24\u4e2acontrol"),e.qZA(),e.TgZ(26,"nzx-configurable-query",5),e.NdJ("queryParamsChange",function(u){return t.queryParams4=u}),e.YNc(27,Y,1,1,"ng-template",2),e.qZA(),e._uU(28," \u67e5\u8be2\u53c2\u6570\uff1a "),e.TgZ(29,"pre"),e._uU(30),e.ALo(31,"json"),e.qZA(),e.TgZ(32,"div"),e._uU(33,"\u4f8b\u5b505\uff1a \u7b80\u5316\u67e5\u8be2"),e.qZA(),e.TgZ(34,"nzx-configurable-query",5),e.NdJ("queryParamsChange",function(u){return t.queryParams5=u}),e.YNc(35,$,1,1,"ng-template",2),e.qZA(),e._uU(36," \u67e5\u8be2\u53c2\u6570\uff1a "),e.TgZ(37,"pre"),e._uU(38),e.ALo(39,"json"),e.qZA(),e.TgZ(40,"div"),e._uU(41,"\u4f8b\u5b506\uff1a \u521d\u59cb\u5316\u754c\u9762\u4e3b\u52a8\u67e5\u8be2"),e.qZA(),e.TgZ(42,"nzx-configurable-query",6),e.NdJ("queryParamsChange",function(u){return t.queryParams6=u}),e.YNc(43,D,1,1,"ng-template",2),e.qZA(),e._uU(44," \u67e5\u8be2\u53c2\u6570\uff1a "),e.TgZ(45,"pre"),e._uU(46),e.ALo(47,"json"),e.qZA(),e.TgZ(48,"div"),e._uU(49,"\u4f8b\u5b507\uff1a \u6a21\u62df\u8fdc\u7a0b\u52a0\u8f7d\u4e0b\u62c9"),e.qZA(),e.TgZ(50,"nzx-configurable-query",7,8),e.NdJ("queryParamsChange",function(u){return t.queryParams7=u}),e.qZA(),e._uU(52," \u67e5\u8be2\u53c2\u6570\uff1a "),e.TgZ(53,"pre"),e._uU(54),e.ALo(55,"json"),e.qZA()()),2&n&&(e.xp6(3),e.Q6J("controls",t.controls),e.xp6(4),e.hij("  ",e.lcZ(8,25,t.queryParams),"\n  "),e.xp6(4),e.Q6J("nzxCollapse",!1)("controls",t.controls2),e.xp6(3),e.hij("  ",e.lcZ(15,27,t.queryParams2),"\n  "),e.xp6(4),e.Q6J("nzxCollapse",!1)("nzxBtnSpan",24)("controls",t.controls3),e.xp6(4),e.hij("  ",e.lcZ(23,29,t.queryParams3),"\n  "),e.xp6(4),e.Q6J("controls",t.controls4)("lineNumber",2)("nzxBtnSpan",24),e.xp6(4),e.hij("  ",e.lcZ(31,31,t.queryParams4),"\n  "),e.xp6(4),e.Q6J("controls",t.controls5)("lineNumber",2)("nzxBtnSpan",24),e.xp6(4),e.hij("  ",e.lcZ(39,33,t.queryParams5),"\n  "),e.xp6(4),e.Q6J("controls",t.controls6)("lineNumber",2)("initQuery",!0),e.xp6(4),e.hij("  ",e.lcZ(47,35,t.queryParams6),"\n  "),e.xp6(4),e.Q6J("controls",t.controls7)("initQuery",!0)("nzxCollapse",!1),e.xp6(4),e.hij("  ",e.lcZ(55,37,t.queryParams7),"\n  "))},dependencies:[c.ez,c.Ts,a.UX,a.JJ,a.oH,g.Ju,g.sn,b,x,O],styles:[".container[_ngcontent-%COMP%]{padding:20px;background-color:#ccc}"],changeDetection:0}),o})();const H={"nzx-configurable-query-configurable-query-example":h},R=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.ez,h]}),o})()}}]);