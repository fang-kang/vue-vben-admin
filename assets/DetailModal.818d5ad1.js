import{_ as e}from"./index.341c3125.js";import{D as s}from"./index.b4e08dd7.js";import{u as t}from"./useDescription.87166688.js";import{d as i,u as o,h as r,o as a,i as n,w as d,j as m,T as c}from"./index.25b7b5fc.js";import{getDescSchema as p}from"./data.d2ec8758.js";import"./useTimeout.4101b58e.js";import"./useAttrs.cecee0af.js";import"./useWindowSizeFn.b36958a0.js";import"./index.6c4bbdf5.js";import"./index.d317f8e9.js";import"./domUtils.7252317e.js";import"./_stringToArray.fd7cea8c.js";import"./RightOutlined.80d69337.js";import"./index.95c10fda.js";import"./useScrollTo.3e27ea8f.js";import"./animation.5c6ea99a.js";import"./FullscreenOutlined.b884f50f.js";import"./isEqual.ef398636.js";import"./index.29749c8d.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./index.eefcbda4.js";import"./colors.e7a38d90.js";var j=i({name:"ErrorLogDetailModal",components:{BasicModal:e,Description:s},props:{info:{type:Object,default:null}},setup(){const{t:e}=o(),[s]=t({column:2,schema:p()});return{register:s,useI18n:o,t:e}}});j.render=function(e,s,t,i,o,p){const j=r("Description"),l=r("BasicModal");return a(),n(l,c({width:800,title:e.t("sys.errorLog.tableActionDesc")},e.$attrs),{default:d((()=>[m(j,{data:e.info,onRegister:e.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default j;