import{d as s,h as e,o as i,i as t,j as o,w as r,m as a}from"./index.14e14d13.js";import"./index.b54adcb7.js";import"./_stringToArray.765c7f2a.js";import"./domUtils.916666a6.js";import"./index.adc097a2.js";import"./index.7b7cba2f.js";import{B as m}from"./index.1e17d60a.js";import"./CheckOutlined.9c09b07a.js";import"./index.15c20973.js";import{_ as d,F as n}from"./index.923fe82d.js";import"./FullscreenOutlined.cfeedf28.js";import"./RightOutlined.40401775.js";import"./SettingOutlined.0232ef1d.js";import"./useTimeout.83d3837c.js";import"./index.d89d88d1.js";import"./animation.ad53e138.js";import"./useScrollTo.0058c987.js";import"./useAttrs.af9a2b52.js";import"./useWindowSizeFn.9ad1c7b2.js";import"./index.b8575581.js";import"./uuid.a6cec785.js";import"./download.57f2bfa6.js";import"./useForm.377d3855.js";import"./useSortable.30265075.js";import"./useExpose.8b553350.js";import{u as p}from"./useTable.e2fd6945.js";import{getCustomHeaderColumns as c}from"./tableData.7aa0192c.js";import{d as l}from"./table.66566ccc.js";var j=s({components:{BasicTable:d,FormOutlined:n,BasicHelp:m},setup(){const[s]=p({title:"定高/头部自定义",api:l,columns:c(),canResize:!1,scroll:{y:100}});return{registerTable:s}}});const u={class:"p-4"},b=a(" 姓名 "),f=a(" 地址 ");j.render=function(s,a,m,d,n,p){const c=e("BasicHelp"),l=e("FormOutlined"),j=e("BasicTable");return i(),t("div",u,[o(j,{onRegister:s.registerTable},{customTitle:r((()=>[o("span",null,[b,o(c,{class:"ml-2",text:"姓名"})])])),customAddress:r((()=>[f,o(l,{class:"ml-2"})])),_:1},8,["onRegister"])])};export default j;