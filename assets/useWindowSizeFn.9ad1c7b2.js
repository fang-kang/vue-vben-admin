import{aJ as e,bg as n,bh as t}from"./index.14e14d13.js";function i(i,s=150,r){let o=()=>{i()};const[a,d]=e(o,s,r);o=a;const m=()=>{r&&r.immediate&&o(),window.addEventListener("resize",o)},w=()=>{window.removeEventListener("resize",o),d()};return n((()=>{m()})),t((()=>{w()})),[m,w]}export{i as u};