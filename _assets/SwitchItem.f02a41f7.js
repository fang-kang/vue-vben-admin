let e=document.createElement("style");e.innerHTML=".vben-setting-switch-item[data-v-2b7b2ae4]{display:flex;justify-content:space-between;margin:16px 0}",document.head.appendChild(e);import{a as t,aY as i,u as s,I as a,i as n,o as d,j as r,k as o,n as p,J as l,bi as m}from"./index.0ac299ed.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.7438652c.js";import"./index.d42c47fc.js";import{S as c}from"./index.677e8b2a.js";import"./index.ed74ce82.js";import"./index.05f15b52.js";import"./index.a5589f67.js";import"./RightOutlined.be55439d.js";import"./SettingOutlined.9a31b847.js";import"./useTimeout.14fe63de.js";import"./tsxHelper.906f93e2.js";import"./index.93dfb460.js";import"./domUtils.32adbada.js";import"./index.020c2033.js";import"./animation.136afafa.js";import"./useScrollTo.6fe857a3.js";import"./useAttrs.54875f54.js";import"./useHeaderSetting.f4137c99.js";import{b as f}from"./index.f07edd09.js";var u=t({name:"SwitchItem",components:{Switch:c},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=i("setting-switch-item"),{t:n}=s();return{prefixCls:t,t:n,handleChange:function(t){e.event&&f(e.event,t)},getBindValue:a((()=>e.def?{checked:e.def}:{}))}}});const j=m("data-v-2b7b2ae4")(((e,t,i,s,a,m)=>{const c=n("Switch");return d(),r("div",{class:e.prefixCls},[o("span",null,p(e.title),1),o(c,l(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));u.render=j,u.__scopeId="data-v-2b7b2ae4";export default u;