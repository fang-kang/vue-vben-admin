let e=document.createElement("style");e.innerHTML=".vben-layout-footer[data-v-6da14420]{color:rgba(0,0,0,.45);text-align:center}.vben-layout-footer__links[data-v-6da14420]{margin-bottom:8px}.vben-layout-footer__links a[data-v-6da14420]{color:rgba(0,0,0,.45)}.vben-layout-footer__links a[data-v-6da14420]:hover{color:rgba(0,0,0,.85)}.vben-layout-footer__github[data-v-6da14420]{margin:0 30px}.vben-layout-footer__github[data-v-6da14420]:hover{color:rgba(0,0,0,.85)}",document.head.appendChild(e);import{a as o,u as t,aS as i,aY as r,I as s,a$ as a,f as d,b2 as n,d0 as p,d1 as m,i as l,o as f,j,k as c,n as b,m as u,bi as x}from"./index.0ac299ed.js";import"./xlsx.a48e520c.js";import"./useSortable.40ed20ac.js";import"./index.1f35fda8.js";import"./Trigger.d65241d3.js";import"./omit.98994fe4.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f2e4ee83.js";import"./CheckOutlined.d032856a.js";import"./index.d0df79f5.js";import"./index.9b89b389.js";import"./index.21284a4d.js";import"./colors.5d91bbdf.js";import"./index.9c8fc8dd.js";import"./RightOutlined.f897cf51.js";import{L as _}from"./index.fc2fcd30.js";import"./index.676d1c13.js";import"./types.0fb93fc3.js";import"./index.bf77790e.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.7438652c.js";import"./_baseFor.f4e5f03f.js";import"./index.5a532cc5.js";import"./index.a172b251.js";import"./index.4298645d.js";import"./index.d5d8d6e8.js";import"./index.0bafe47b.js";import"./UpOutlined.549e6bdf.js";import"./LeftOutlined.0a6527a3.js";import"./index.2bab9107.js";import"./index.f98ffb67.js";import"./index.ecbd9889.js";import"./index.d42c47fc.js";import"./index.8e9f097d.js";import"./zh_CN.0242bd16.js";import"./index.0baecee9.js";import"./index.d6ea0011.js";import"./index.e243024e.js";import"./index.c85f1b68.js";import"./index.677e8b2a.js";import"./CaretDownFilled.708ae9b6.js";import"./FileOutlined.ff537835.js";import"./index.de31643f.js";import"./index.ed74ce82.js";import"./index.05f15b52.js";import{G as v}from"./GithubFilled.d80f5a77.js";import"./RightOutlined.be55439d.js";import"./index.7cd1f6e2.js";import"./index.3f323e0c.js";import"./useTimeout.14fe63de.js";import"./tsxHelper.906f93e2.js";import"./index.93dfb460.js";import"./domUtils.32adbada.js";import"./index.020c2033.js";import"./animation.136afafa.js";import"./useScrollTo.6fe857a3.js";import"./index.657fb116.js";import"./useWindowSizeFn.8c096a0b.js";import"./index.d9387b00.js";import"./useHeaderSetting.f4137c99.js";import{D as g,G as h,S as y}from"./siteSetting.99cfbd47.js";var F=o({name:"LayoutFooter",components:{Footer:_.Footer,GithubFilled:v},setup(){const{t:e}=t(),{getShowFooter:o}=n(),{currentRoute:p}=i(),{prefixCls:m}=r("layout-footer");return{getShowLayoutFooter:s((()=>{var e;return d(o)&&!(null==(e=d(p).meta)?void 0:e.hiddenFooter)})),prefixCls:m,t:e,DOC_URL:g,GITHUB_URL:h,SITE_URL:y,openWindow:a}}});const C=x("data-v-6da14420");p("data-v-6da14420");const S=c("div",null,"Copyright ©2020 Vben Admin",-1);m();const L=C(((e,o,t,i,r,s)=>{const a=l("GithubFilled"),d=l("Footer");return e.getShowLayoutFooter?(f(),j(d,{key:0,class:e.prefixCls},{default:C((()=>[c("div",{class:`${e.prefixCls}__links`},[c("a",{onClick:o[1]||(o[1]=o=>e.openWindow(e.SITE_URL))},b(e.t("layout.footer.onlinePreview")),1),c(a,{onClick:o[2]||(o[2]=o=>e.openWindow(e.GITHUB_URL)),class:`${e.prefixCls}__github`},null,8,["class"]),c("a",{onClick:o[3]||(o[3]=o=>e.openWindow(e.DOC_URL))},b(e.t("layout.footer.onlineDocument")),1)],2),S])),_:1},8,["class"])):u("v-if",!0)}));F.render=L,F.__scopeId="data-v-6da14420";export default F;