import{_ as e,F as i}from"./index.486c49cc.js";import{getCustomHeaderColumns as s}from"./tableData.252346e9.js";import{d as t}from"./table.2ca02097.js";import{B as o}from"./index.6c4bbdf5.js";import{d as r,h as d,o as m,i as p,j as n,w as j,m as a}from"./index.25b7b5fc.js";import{u as l}from"./useTable.a82e3e31.js";import"./index.290ee578.js";import"./SearchOutlined.b66fbfbe.js";import"./CheckOutlined.858b435e.js";import"./DownOutlined.8796a279.js";import"./index.60b3070f.js";import"./index.3e59d4ea.js";import"./responsiveObserve.c545f1cc.js";import"./index.7d0dbe6d.js";import"./vendor.3b1829c7.js";import"./findIndex.159bea82.js";import"./isEqual.ef398636.js";import"./_baseProperty.74f89655.js";import"./toInteger.34e54435.js";import"./index.e5942447.js";import"./index.6346a568.js";import"./index.f418f493.js";import"./UpOutlined.2e609594.js";import"./index.013441f2.js";import"./EyeOutlined.bbf9afc6.js";import"./index.eefcbda4.js";import"./colors.e7a38d90.js";import"./RightOutlined.80d69337.js";import"./RedoOutlined.e878d1f7.js";import"./index.10a2e5b4.js";import"./EllipsisOutlined.3ddff257.js";import"./types.75b2061b.js";import"./Tree.4dd17072.js";import"./util.e01c1bab.js";import"./useAttrs.cecee0af.js";import"./index.95c10fda.js";import"./index.617b1909.js";import"./uuid.07519bd8.js";import"./index.3186655d.js";import"./DeleteOutlined.04eb5723.js";import"./index.341c3125.js";import"./useTimeout.4101b58e.js";import"./useWindowSizeFn.b36958a0.js";import"./FullscreenOutlined.b884f50f.js";import"./index.071f175b.js";import"./index.463e2338.js";import"./index.ec6a717d.js";import"./LeftOutlined.06ccfb10.js";import"./download.6995c76c.js";import"./domUtils.7252317e.js";import"./_stringToArray.fd7cea8c.js";import"./index.2ed87d0a.js";import"./DoubleLeftOutlined.fe18de41.js";import"./DoubleRightOutlined.ee82da45.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.6bbddf74.js";import"./CaretDownFilled.c59e8ff5.js";import"./clickOutside.516198a9.js";import"./useSortable.9390d1f5.js";import"./SettingOutlined.e89633d9.js";import"./useExpose.fcd4b669.js";import"./useForm.78d22a3e.js";import"./index.d317f8e9.js";import"./useScrollTo.3e27ea8f.js";import"./animation.5c6ea99a.js";var c=r({components:{BasicTable:e,FormOutlined:i,BasicHelp:o},setup(){const[e]=l({title:"定高/头部自定义",api:t,columns:s(),canResize:!1,scroll:{y:100}});return{registerTable:e}}});const f={class:"p-4"},u=a(" 姓名 "),b=a(" 地址 ");c.render=function(e,i,s,t,o,r){const a=d("BasicHelp"),l=d("FormOutlined"),c=d("BasicTable");return m(),p("div",f,[n(c,{onRegister:e.registerTable},{customTitle:j((()=>[n("span",null,[u,n(a,{class:"ml-2",text:"姓名"})])])),customAddress:j((()=>[b,n(l,{class:"ml-2"})])),_:1},8,["onRegister"])])};export default c;