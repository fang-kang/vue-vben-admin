import{d as s,aJ as e,cp as t,cq as i,h as a,o as l,i as o,bw as n,j as r,aL as p,aM as d,k as c,l as m,m as f}from"./index.25b7b5fc.js";import{L as u}from"./index.53c5e1c6.js";import"./index.290ee578.js";import"./index.2ed87d0a.js";import"./index.3e59d4ea.js";import{P as j}from"./index.3186655d.js";import{R as x,C as _}from"./index.e5942447.js";import{cardList as v}from"./data.a96915dc.js";import{_ as b}from"./index.751a0b92.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.b66fbfbe.js";import"./CheckOutlined.858b435e.js";import"./DownOutlined.8796a279.js";import"./LeftOutlined.06ccfb10.js";import"./RightOutlined.80d69337.js";import"./DoubleLeftOutlined.fe18de41.js";import"./DoubleRightOutlined.ee82da45.js";import"./zh_CN.8094f4d6.js";import"./responsiveObserve.c545f1cc.js";import"./types.75b2061b.js";import"./index.1a47fee9.js";import"./index.10a2e5b4.js";import"./EllipsisOutlined.3ddff257.js";import"./isEqual.ef398636.js";import"./toInteger.34e54435.js";import"./index.95c10fda.js";import"./index.fc4261e4.js";import"./usePageContext.003372c7.js";import"./transButton.6bbddf74.js";import"./ArrowLeftOutlined.5053e10e.js";var g=s({components:{Icon:e,Progress:j,PageWrapper:b,[u.name]:u,[u.Item.name]:u.Item,AListItemMeta:u.Item.Meta,[x.name]:x,[_.name]:_},setup:()=>({prefixCls:"list-basic",list:v,pagination:{show:!0,pageSize:3}})});const C=n("data-v-6a8874f4");t("data-v-6a8874f4");const O=r("div",null,"我的待办",-1),h=r("p",null,"8个任务",-1),I=r("div",null,"本周任务平均处理时间",-1),w=r("p",null,"32分钟",-1),L=r("div",null,"本周完成任务数",-1),P=r("p",null,"24个任务",-1),k={key:0,class:"extra"},$={class:"description"},y={class:"info"},D=r("span",null,"Owner",-1),M=r("span",null,"开始时间",-1),R={class:"progress"};i();const q=C(((s,e,t,i,n,u)=>{const j=a("a-col"),x=a("a-row"),_=a("Icon"),v=a("Progress"),b=a("a-list-item-meta"),g=a("a-list-item"),q=a("a-list"),z=a("PageWrapper");return l(),o(z,{class:s.prefixCls,title:"标准列表"},{default:C((()=>[r("div",{class:`${s.prefixCls}__top`},[r(x,{gutter:12},{default:C((()=>[r(j,{span:8,class:`${s.prefixCls}__top-col`},{default:C((()=>[O,h])),_:1},8,["class"]),r(j,{span:8,class:`${s.prefixCls}__top-col`},{default:C((()=>[I,w])),_:1},8,["class"]),r(j,{span:8,class:`${s.prefixCls}__top-col`},{default:C((()=>[L,P])),_:1},8,["class"])])),_:1})],2),r("div",{class:`${s.prefixCls}__content`},[r(q,{pagination:s.pagination},{default:C((()=>[(l(!0),o(p,null,d(s.list,(s=>(l(),o(g,{key:s.id,class:"list"},{default:C((()=>[r(b,null,{avatar:C((()=>[s.icon?(l(),o(_,{key:0,class:"icon",icon:s.icon,color:s.color},null,8,["icon","color"])):c("",!0)])),title:C((()=>[r("span",null,m(s.title),1),s.extra?(l(),o("div",k,m(s.extra),1)):c("",!0)])),description:C((()=>[r("div",$,m(s.description),1),r("div",y,[r("div",null,[D,f(m(s.author),1)]),r("div",null,[M,f(m(s.datetime),1)])]),r("div",R,[r(v,{percent:s.percent,status:"active"},null,8,["percent"])])])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["pagination"])],2)])),_:1},8,["class"])}));g.render=q,g.__scopeId="data-v-6a8874f4";export default g;