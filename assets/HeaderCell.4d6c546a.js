import{d as e,a7 as l,a8 as t,a9 as s,q as a,h as r,o as n,i,w as o,l as u,k as d,ab as p,m as c}from"./index.14e14d13.js";var _=e({name:"TableHeaderCell",components:{EditTableHeaderCell:l((()=>t((()=>__import__("./index.923fe82d.js").then((function(e){return e.E}))),["/assets/index.923fe82d.js","/assets/index.5a2a0cd6.css","/assets/index.14e14d13.js","/assets/index.17037a8f.css","/assets/index.b54adcb7.js","/assets/index.4bc3eaa6.css","/assets/domUtils.916666a6.js","/assets/_stringToArray.765c7f2a.js","/assets/index.adc097a2.js","/assets/index.67c7ebc9.css","/assets/index.7b7cba2f.js","/assets/index.1e17d60a.js","/assets/index.76e45014.css","/assets/RightOutlined.40401775.js","/assets/useTimeout.83d3837c.js","/assets/index.d89d88d1.js","/assets/index.121e7eba.css","/assets/useScrollTo.0058c987.js","/assets/animation.ad53e138.js","/assets/index.15c20973.js","/assets/index.ca1a8c37.css","/assets/FullscreenOutlined.cfeedf28.js","/assets/useAttrs.af9a2b52.js","/assets/useWindowSizeFn.9ad1c7b2.js","/assets/index.b8575581.js","/assets/uuid.a6cec785.js","/assets/download.57f2bfa6.js","/assets/CheckOutlined.9c09b07a.js","/assets/SettingOutlined.0232ef1d.js","/assets/useForm.377d3855.js","/assets/useSortable.30265075.js","/assets/useExpose.8b553350.js"]))),BasicHelp:l((()=>t((()=>__import__("./BasicHelp.8e89c6e7.js")),["/assets/BasicHelp.8e89c6e7.js","/assets/index.14e14d13.js","/assets/index.17037a8f.css","/assets/_stringToArray.765c7f2a.js","/assets/domUtils.916666a6.js","/assets/index.1e17d60a.js","/assets/index.76e45014.css","/assets/RightOutlined.40401775.js","/assets/useTimeout.83d3837c.js","/assets/index.d89d88d1.js","/assets/index.121e7eba.css","/assets/useScrollTo.0058c987.js","/assets/animation.ad53e138.js"])))},props:{column:{type:Object,default:{}}},setup(e){const{prefixCls:l}=s("basic-table-header-cell");return{prefixCls:l,getIsEdit:a((()=>{var l;return!!(null==(l=e.column)?void 0:l.edit)})),getTitle:a((()=>{var l;return null==(l=e.column)?void 0:l.customTitle})),getHelpMessage:a((()=>{var l;return null==(l=e.column)?void 0:l.helpMessage}))}}});const g={key:1};_.render=function(e,l,t,s,a,_){const m=r("EditTableHeaderCell"),f=r("BasicHelp");return n(),i(p,null,[e.getIsEdit?(n(),i(m,{key:0},{default:o((()=>[c(u(e.getTitle),1)])),_:1})):(n(),i("span",g,u(e.getTitle),1)),e.getHelpMessage?(n(),i(f,{key:2,text:e.getHelpMessage,class:`${e.prefixCls}__help`},null,8,["text","class"])):d("",!0)],64)};export default _;