import{a as V,b as F,c as j}from"./chunk-7T52YR44.js";import{a as P,b as k}from"./chunk-KEZERO2P.js";import"./chunk-MWDUSRTL.js";import{a as D,b as w,d as y,e as g}from"./chunk-TU4Q4OVA.js";import"./chunk-K66H5K2I.js";import"./chunk-VCG636SY.js";import{$b as M,Ib as C,Jb as n,Ka as u,Lc as s,Rb as T,Sb as S,Ya as N,ab as x,ca as A,ha as _,la as E,ma as v,ob as t,pb as i,qb as h,ua as c,ub as b,va as a,xb as m}from"./chunk-OGFJLPPA.js";import"./chunk-UKNGC2Y4.js";var B=()=>["edit"];function X(e,f){e&1&&(t(0,"button",5),n(1," add btn "),i())}function I(e,f){e&1&&(t(0,"button",5),n(1,"edit btn"),i())}function R(e,f){e&1&&n(0,"add button have not permission ")}var p=(()=>{class e{constructor(){this.dataAcl=!0,this.aclService=_(V)}loadPermissions(){this.aclService.loadPermissions(["add"])}addAcl(){this.aclService.addPermission("edit")}removeAcl(){this.aclService.removePermission("edit")}changeDataAcl(){this.dataAcl=!this.dataAcl,this.aclService.refreshPermission()}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=E({type:e,selectors:[["nzx-acl-example"]],standalone:!0,features:[T],decls:14,vars:5,consts:[["elseTemp",""],["nz-button","","nzType","default",3,"click"],["nzText","divider"],["nz-button","","nzType","dashed",4,"nzxAcl","nzxAclDataAcl","nzxAclElse"],["nz-button","","nzType","dashed",4,"nzxAcl"],["nz-button","","nzType","dashed"]],template:function(o,r){if(o&1){let l=b();t(0,"button",1),m("click",function(){return c(l),a(r.loadPermissions())}),n(1," load permissions "),i(),t(2,"button",1),m("click",function(){return c(l),a(r.changeDataAcl())}),n(3," change dataAcl "),i(),t(4,"button",1),m("click",function(){return c(l),a(r.addAcl())}),n(5,"add edit"),i(),t(6,"button",1),m("click",function(){return c(l),a(r.removeAcl())}),n(7," remove edit "),i(),h(8,"nz-divider",2),t(9,"div"),N(10,X,2,0,"button",3)(11,I,2,0,"button",4)(12,R,1,0,"ng-template",null,0,M),i()}if(o&2){let l=C(13);u(10),x("nzxAcl","add")("nzxAclDataAcl",r.dataAcl)("nzxAclElse",l),u(),x("nzxAcl",S(4,B))}},dependencies:[s,g,y,D,w,k,P,j,F],encapsulation:2})}}return e})();var L=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=v({type:e})}static{this.\u0275inj=A({imports:[s,p]})}}return e})();var re={"nzx-acl-acl-example":p},ce=L;export{ce as EXAMPLES_MODULE,re as EXAMPLE_COMPONENTS};