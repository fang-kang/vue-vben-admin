var t=Object.assign;import{bn as e}from"./index.14e14d13.js";import{h as n,s,c as o}from"./_stringToArray.765c7f2a.js";var c,i=(c="toUpperCase",function(t){t=e(t);var i=n(t)?s(t):void 0,a=i?i[0]:t.charAt(0),r=i?o(i,1).join(""):t.slice(1);return a[c]()+r});function a(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}function r(t,e){if(!t)return;let n=t.className;const s=(e||"").split(" ");for(let o=0,c=s.length;o<c;o++){const e=s[o];e&&(t.classList?t.classList.add(e):a(t,e)||(n+=" "+e))}t.classList||(t.className=n)}function l(t,e){if(!t||!e)return;const n=e.split(" ");let s=" "+t.className+" ";for(let o=0,c=n.length;o<c;o++){const e=n[o];e&&(t.classList?t.classList.remove(e):a(t,e)&&(s=s.replace(" "+e+" "," ")))}t.classList||(t.className=(s||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))}function u(t){const e=document.documentElement,n=e.scrollLeft,s=e.scrollTop,o=e.clientLeft,c=e.clientTop,i=window.pageXOffset,a=window.pageYOffset,r=function(t){return t&&t.getBoundingClientRect?t.getBoundingClientRect():0}(t),{left:l,top:u,width:f,height:d}=r,m=l+i-((i||n)-(o||0)),g=u+a-((a||s)-(c||0)),p=window.document.documentElement.clientWidth,h=window.document.documentElement.clientHeight;return{left:m,top:g,right:p-f-m,bottom:h-d-g,rightIncludeBody:p-m,bottomIncludeBody:h-g}}function f(e,n){const s={};return["webkit","Moz","ms","OT"].forEach((t=>{s[`${t}${i(e)}`]=n})),t(t({},s),{[e]:n})}function d(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}function m(t,e,n){t&&e&&n&&t.removeEventListener(e,n,!1)}export{d as a,r as b,u as g,f as h,m as o,l as r,i as u};