import{d as e,cr as t,a9 as i,u as a,q as s,h as d,o as n,i as o,j as r,l,a0 as p,aL as c}from"./index.14e14d13.js";import"./_stringToArray.765c7f2a.js";import"./domUtils.916666a6.js";import"./index.1e17d60a.js";import"./index.e7d2d61e.js";import"./RightOutlined.40401775.js";import"./SettingOutlined.0232ef1d.js";import"./useTimeout.83d3837c.js";import"./index.d89d88d1.js";import"./animation.ad53e138.js";import"./useScrollTo.0058c987.js";import"./useAttrs.af9a2b52.js";import"./useHeaderSetting.dc054a54.js";import{b as m}from"./index.2f7e0908.js";var u=e({name:"SwitchItem",components:{Switch:t},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=i("setting-switch-item"),{t:d}=a();return{prefixCls:t,t:d,handleChange:function(t){e.event&&m(e.event,t)},getBindValue:s((()=>e.def?{checked:e.def}:{}))}}});const h=c("data-v-3a858942")(((e,t,i,a,s,c)=>{const m=d("Switch");return n(),o("div",{class:e.prefixCls},[r("span",null,l(e.title),1),r(m,p(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));u.render=h,u.__scopeId="data-v-3a858942";export default u;