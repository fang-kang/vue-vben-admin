import{d as t,E as e,r as s,n as l,p as n,u as a,q as i,e as r,P as u,j as o,B as T,R as b,s as p}from"./index.14e14d13.js";var c=t({name:"ErrorPage",props:{status:{type:Number,default:e.PAGE_NOT_FOUND},title:{type:String},subTitle:{type:String},full:{type:Boolean,default:!1}},setup(t){const c=s(new Map),{query:x}=l(),E=p(),d=n(),{t:y}=a(),_=i((()=>{const{status:e}=x,{status:s}=t;return Number(e)||s})),O=i((()=>r(c).get(r(_)))),N=y("sys.exception.backLogin"),A=y("sys.exception.backHome");return r(c).set(e.PAGE_NOT_ACCESS,{title:"403",status:`${e.PAGE_NOT_ACCESS}`,subTitle:y("sys.exception.subTitle403"),btnText:t.full?N:A,handler:()=>t.full?E(u.BASE_LOGIN):E()}),r(c).set(e.PAGE_NOT_FOUND,{title:"404",status:`${e.PAGE_NOT_FOUND}`,subTitle:y("sys.exception.subTitle404"),btnText:t.full?N:A,handler:()=>t.full?E(u.BASE_LOGIN):E()}),r(c).set(e.ERROR,{title:"500",status:`${e.ERROR}`,subTitle:y("sys.exception.subTitle500"),btnText:A,handler:()=>E()}),r(c).set(e.PAGE_NOT_DATA,{title:y("sys.exception.noDataTitle"),subTitle:"",btnText:y("sys.exception.redo"),handler:()=>d(),icon:"/assets/no-data.7a45acb3.png"}),r(c).set(e.NET_WORK_ERROR,{title:y("sys.exception.networkErrorTitle"),subTitle:y("sys.exception.networkErrorSubTitle"),btnText:"Refresh",handler:()=>d(),icon:"/assets/net-work.5d408b05.png"}),()=>{const{title:e,subTitle:s,btnText:l,icon:n,handler:a,status:i}=r(O)||{};return o(b,{class:"exception ",status:i,title:t.title||e,"sub-title":t.subTitle||s},{extra:()=>l&&o(T,{type:"primary",onClick:a},{default:()=>l}),icon:()=>n?o("img",{src:n},null):null})}}});export default c;