import{a as e,r as t,f as n,i as a,o,j as r,w as s,k as i,p as m}from"./index.c5d8d2c2.js";import"./xlsx.9d951958.js";import"./Trigger.8423b189.js";import"./omit.613852c9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9b7bc90a.js";import"./index.a8efe853.js";import"./index.5e68bb45.js";import"./RightOutlined.ac5b2c4e.js";import"./usePageContext.75d92c53.js";import"./types.02846160.js";import"./index.ebbe171f.js";import"./transButton.3e3572fa.js";import{s as p}from"./index.f1db30ef.js";import{M as l}from"./index.bab9503f.js";var u=e({components:{MarkDown:l,PageWrapper:p},setup(){const e=t(null),a=t("\n# title\n\n# content\n");return{value:a,toggleTheme:function(){const t=n(e);if(!t)return;t.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){a.value=e}}}});const d=m("黑暗主题");u.render=function(e,t,n,m,p,l){const u=a("a-button"),c=a("MarkDown"),f=a("PageWrapper");return o(),r(f,{title:"MarkDown组件示例"},{default:s((()=>[i(u,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:s((()=>[d])),_:1},8,["onClick"]),i(c,{value:e.value,onChange:e.handleChange,ref:"markDownRef"},null,8,["value","onChange"])])),_:1})};export default u;