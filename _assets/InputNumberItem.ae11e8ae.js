let e=document.createElement("style");e.innerHTML=".vben-setting-input-number-item[data-v-9dadcc20]{display:flex;justify-content:space-between;margin:16px 0}.vben-setting-input-number-item-input-number[data-v-9dadcc20]{width:126px}",document.head.appendChild(e);import{a as t,au as n,i as a,o as s,j as i,k as r,n as p,v as d,aS as m}from"./index.5d3f6cb5.js";import"./xlsx.a48e520c.js";import"./DownOutlined.c949c33a.js";import"./UpOutlined.c1494348.js";import"./index.a36fbb7c.js";import{I as c}from"./index.9f889c90.js";import"./index.bc80fc9d.js";import"./LeftOutlined.5f75eb1f.js";import"./SettingOutlined.1bc0aa51.js";import"./tsxHelper.23698464.js";import"./index.5af0c53a.js";import"./index.6c338271.js";import"./useHeaderSetting.9a31a69c.js";import{b as u}from"./index.7e9e859b.js";var o=t({name:"InputNumberItem",components:{InputNumber:c},props:{event:{type:Number,default:()=>{}},title:{type:String}},setup(e){const{prefixCls:t}=n("setting-input-number-item");return{prefixCls:t,handleChange:function(t){e.event&&u(e.event,t)}}}});const l=m("data-v-9dadcc20")(((e,t,n,m,c,u)=>{const o=a("InputNumber");return s(),i("div",{class:e.prefixCls},[r("span",null,p(e.title),1),r(o,d(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)}));o.render=l,o.__scopeId="data-v-9dadcc20";export default o;