import{d as e,r as o,g as l,h as a,o as n,i as s,w as i,j as t}from"./index.14e14d13.js";import{_ as p}from"./index.b54adcb7.js";import"./_stringToArray.765c7f2a.js";import"./domUtils.916666a6.js";import"./index.adc097a2.js";import"./index.7b7cba2f.js";import{a as r}from"./index.1e17d60a.js";import"./index.15c20973.js";import"./FullscreenOutlined.cfeedf28.js";import"./RightOutlined.40401775.js";import"./useTimeout.83d3837c.js";import"./index.d89d88d1.js";import"./animation.ad53e138.js";import"./useScrollTo.0058c987.js";import"./useAttrs.af9a2b52.js";import"./useWindowSizeFn.9ad1c7b2.js";import"./index.b8575581.js";import"./uuid.a6cec785.js";import"./download.57f2bfa6.js";import{_ as c}from"./index.f716722a.js";import"./usePageContext.83f225b2.js";import{o as d}from"./select.36b389b8.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:({schema:e,formModel:o})=>({placeholder:"自定义placeholder",onChange:e=>{}}),renderComponentContent:()=>({prefix:()=>"pSlot",suffix:()=>"sSlot"})},{field:"field2",component:"Input",label:"带后缀",defaultValue:"111",colProps:{span:8},componentProps:{onChange:e=>{}},suffix:"天"},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field8",component:"Checkbox",label:"字段8",colProps:{span:8},renderComponentContent:"Check"},{field:"field9",component:"Switch",label:"字段9",colProps:{span:8}},{field:"field10",component:"RadioButtonGroup",label:"字段10",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field11",component:"Cascader",label:"字段11",colProps:{span:8},componentProps:{options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]}},{field:"field30",component:"ApiSelect",label:"远程下拉",required:!0,componentProps:{api:d},colProps:{span:8},defaultValue:"0"},{field:"field20",component:"InputNumber",label:"字段20",required:!0,colProps:{span:8}}];var u=e({components:{BasicForm:p,CollapseContainer:r,PageWrapper:c},setup(){const e=o(null),{createMessage:a}=l();return{schemas:m,handleSubmit:e=>{a.success("click search,values:"+JSON.stringify(e))},check:e}}});u.render=function(e,o,l,p,r,c){const d=a("BasicForm"),m=a("CollapseContainer"),u=a("PageWrapper");return n(),s(u,{title:"表单基础示例"},{default:i((()=>[t(m,{title:"基础示例"},{default:i((()=>[t(d,{autoFocusFirstItem:"",labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default u;