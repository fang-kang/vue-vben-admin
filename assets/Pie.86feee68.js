import{d as e,r as t,aI as a,o,i as l}from"./index.14e14d13.js";import"./useTimeout.83d3837c.js";import{u as i}from"./useECharts.857c2ae3.js";var r=e({props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=t(null),{setOptions:o}=i(e),l=[389,259,262,324,232,176,196,214,133,370],r=["原因1","原因2","原因3","原因4","原因5","原因6","原因7","原因8","原因9","原因10"];return a((()=>{o({backgroundColor:"#0f375f",title:[{text:"各渠道投诉占比",x:"2%",y:"1%",textStyle:{color:"#fff",fontSize:14}},{text:"投诉原因TOP10",x:"40%",y:"1%",textStyle:{color:"#fff",fontSize:14}},{text:"各级别投诉占比",x:"2%",y:"50%",textStyle:{color:"#fff",fontSize:14}}],grid:[{x:"50%",y:"7%",width:"45%",height:"90%"}],tooltip:{formatter:"{b} ({c})"},xAxis:[{gridIndex:0,axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1},axisLine:{show:!1}}],yAxis:[{gridIndex:0,interval:0,data:r.reverse(),axisTick:{show:!1},axisLabel:{show:!0},splitLine:{show:!1},axisLine:{show:!0,lineStyle:{color:"#6173a3"}}}],series:[{name:"各渠道投诉占比",type:"pie",radius:"30%",center:["22%","25%"],color:["#86c9f4","#4da8ec","#3a91d2","#005fa6","#315f97"],data:[{value:335,name:"客服电话"},{value:310,name:"奥迪官网"},{value:234,name:"媒体曝光"},{value:135,name:"质检总局"},{value:105,name:"其他"}],labelLine:{normal:{show:!1}},itemStyle:{normal:{label:{show:!0,formatter:"{b} \n ({d}%)",textStyle:{color:"#B1B9D3"}}}}},{name:"各级别投诉占比",type:"pie",radius:"30%",center:["22%","75%"],color:["#86c9f4","#4da8ec","#3a91d2","#005fa6","#315f97"],labelLine:{normal:{show:!1}},data:[{value:335,name:"A级"},{value:310,name:"B级"},{value:234,name:"C级"},{value:135,name:"D级"}],itemStyle:{normal:{label:{show:!0,formatter:"{b} \n ({d}%)",textStyle:{color:"#B1B9D3"}}}}},{name:"投诉原因TOP10",type:"bar",xAxisIndex:0,yAxisIndex:0,barWidth:"45%",itemStyle:{normal:{color:"#86c9f4"}},label:{normal:{show:!0,position:"right",textStyle:{color:"#9EA7C4"}}},data:l.sort()}]})})),{chartRef:e}}});r.render=function(e,t,a,i,r,n){return o(),l("div",{ref:"chartRef",style:{height:e.height,width:e.width}},null,4)};export default r;