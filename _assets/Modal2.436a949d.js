import{a as s,i as t,o as e,j as o,w as i,k as r,J as a,p as l}from"./index.c5d8d2c2.js";import"./xlsx.9d951958.js";import"./Trigger.8423b189.js";import"./omit.613852c9.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.f8f6dc33.js";import"./index.ebbe171f.js";import"./index.a56b187c.js";import"./CloseOutlined.93cdb7f8.js";import"./FullscreenOutlined.f6e22198.js";import"./RightOutlined.afe6ff98.js";import"./useTimeout.fcc1bd72.js";import"./tsxHelper.87c58488.js";import"./index.89ce6b1b.js";import"./animation.99afdb7b.js";import"./useScrollTo.0260d00e.js";import"./useAttrs.4a972d2b.js";import{s as d,u as p}from"./index.6195931d.js";import"./useWindowSizeFn.9f107263.js";var n=s({components:{BasicModal:d},setup(){const[s,{closeModal:t,setModalProps:e}]=p();return{register:s,closeModal:t,setModalProps:()=>{e({title:"Modal New Title"})}}}});const m=l("从内部关闭弹窗"),c=l("从内部修改title");n.render=function(s,l,d,p,n,j){const f=t("a-button"),u=t("BasicModal");return e(),o(u,a(s.$attrs,{onRegister:s.register,title:"Modal Title",helpMessage:["提示1","提示2"]}),{default:i((()=>[r(f,{type:"primary",onClick:s.closeModal,class:"mr-2"},{default:i((()=>[m])),_:1},8,["onClick"]),r(f,{type:"primary",onClick:s.setModalProps},{default:i((()=>[c])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default n;