import{d as t,a9 as e,q as s,o,i as r,l as i,k as n}from"./index.14e14d13.js";import"./_stringToArray.765c7f2a.js";import"./domUtils.916666a6.js";import{c as a}from"./index.cf4f014f.js";import"./index.1e17d60a.js";import"./RightOutlined.40401775.js";import"./useTimeout.83d3837c.js";import"./index.d89d88d1.js";import"./animation.ad53e138.js";import"./useScrollTo.0058c987.js";import"./useWindowSizeFn.9ad1c7b2.js";import"./index.b8575581.js";import"./useSortable.30265075.js";import"./usePageContext.83f225b2.js";import"./index.bc487514.js";import"./useHeaderSetting.dc054a54.js";var m=t({name:"MenuItemTag",props:a,setup(t){const{prefixCls:o}=e("basic-menu-item-tag"),r=s((()=>{const{item:e,showTitle:s,isHorizontal:o}=t;if(!e||s||o)return!1;const{tag:r}=e;if(!r)return!1;const{dot:i,content:n}=r;return!(!i&&!n)})),i=s((()=>{if(!r.value)return"";const{item:e}=t,{tag:s}=e,{dot:o,content:i}=s;return o?"":i})),n=s((()=>{const{item:e}=t,{tag:s={}}=e||{},{dot:r,type:i="error"}=s;return[o,[`${o}--${i}`],{[`${o}--dot`]:r}]}));return{prefixCls:o,getTagClass:n,getShowTag:r,getContent:i}}});m.render=function(t,e,s,a,m,d){return t.getShowTag?(o(),r("span",{key:0,class:t.getTagClass},i(t.getContent),3)):n("",!0)};export default m;