var e=Object.assign;import{d as t,a9 as o,af as s,o as a,i as l,j as n,b8 as r,aL as i,bU as g,a2 as d,r as c,q as f,ai as u,bV as h,e as p,S as C,h as v,aM as _,ac as b,w as $,a0 as m,k as F,ab as H,m as x,l as y,a7 as S,a8 as P}from"./index.14e14d13.js";import{u as k}from"./usePageContext.83f225b2.js";var j=t({name:"PageFooter",setup(){const{prefixCls:e}=o("page-footer"),{getCalcContentWidth:t}=s();return{prefixCls:e,getCalcContentWidth:t}}});const w=i("data-v-7b16399c")(((e,t,o,s,i,g)=>(a(),l("div",{class:e.prefixCls,style:{width:e.getCalcContentWidth}},[n("div",{class:`${e.prefixCls}__left`},[r(e.$slots,"left")],2),r(e.$slots,"default"),n("div",{class:`${e.prefixCls}__right`},[r(e.$slots,"right")],2)],6))));j.render=w,j.__scopeId="data-v-7b16399c";var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:j}),R=t({name:"PageWrapper",components:{PageFooter:j,PageHeader:g},props:{dense:d.bool,ghost:d.bool,content:d.string,contentStyle:{type:Object},contentBackground:d.bool,contentFullHeight:d.bool},setup(t,{slots:s}){const a=c(null),l=c(null),{prefixCls:n}=o("page-wrapper"),{contentHeight:r,setPageHeight:i,pageHeight:g}=k(),d=f((()=>[n,{[`${n}--dense`]:t.dense}])),v=f((()=>(null==s?void 0:s.leftFooter)||(null==s?void 0:s.rightFooter))),_=f((()=>Object.keys(h(s,"default","leftFooter","rightFooter","headerContent")))),b=f((()=>{const{contentBackground:o,contentFullHeight:s,contentStyle:a}=t,l=o?{backgroundColor:"#fff"}:{};return s?e(e(e({},l),a),{minHeight:`${p(g)}px`}):e(e({},l),a)}));return u((()=>null==r?void 0:r.value),(e=>{t.contentFullHeight&&C((()=>{var t,o;const s=p(l),n=p(a);let r=0;const g=null==s?void 0:s.$el;g&&(r+=null!=(t=null==g?void 0:g.offsetHeight)?t:0);let d=0;const c=null==n?void 0:n.$el;c&&(d+=null!=(o=null==c?void 0:c.offsetHeight)?o:0),null==i||i(e-r-d)}))}),{immediate:!0}),{getContentStyle:b,footerRef:l,headerRef:a,getClass:d,getHeaderSlots:_,prefixCls:n,getShowFooter:v,pageHeight:g,omit:h}}});R.render=function(e,t,o,s,i,g){const d=v("PageHeader"),c=v("PageFooter");return a(),l("div",{class:e.getClass},[n(d,m({ghost:e.ghost},e.$attrs,{ref:"headerRef"}),_({default:$((()=>[e.content?(a(),l(H,{key:0},[x(y(e.content),1)],64)):r(e.$slots,"headerContent",{key:1})])),_:2},[b(e.getHeaderSlots,(t=>({name:t,fn:$((o=>[r(e.$slots,t,o)]))})))]),1040,["ghost"]),n("div",{class:[`${e.prefixCls}-content`,e.$attrs.contentClass],style:e.getContentStyle},[r(e.$slots,"default")],6),e.getShowFooter?(a(),l(c,{key:0,ref:"footerRef"},{left:$((()=>[r(e.$slots,"leftFooter")])),right:$((()=>[r(e.$slots,"rightFooter")])),_:1},512)):F("",!0)],2)};S((()=>P((()=>Promise.resolve().then((function(){return O}))),"__VITE_PRELOAD__")));export{R as _};