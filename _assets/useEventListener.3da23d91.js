import{r as e,aq as t,O as n,f as o}from"./index.2a9ceb8a.js";import{u as a}from"./useDebounce.e511ddc2.js";function s({el:s=window,name:i,listener:r,options:m,autoRemove:u=!0,isDebounce:v=!0,wait:c=80}){let d=()=>{};const f=e(!1);if(s){const l=e(s),[p]=v?a(r,c):t(r,c),b=c?p:r,w=e=>{f.value=!0,e.removeEventListener(i,b,m)},E=e=>e.addEventListener(i,b,m),j=n(l,((e,t,n)=>{e&&(!o(f)&&E(e),n((()=>{u&&w(e)})))}),{immediate:!0});d=()=>{w(l.value),j()}}return{removeEvent:d}}export{s as u};