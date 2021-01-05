import{a as s,h as e,i as o,o as t,j as i,w as l,k as a,p as r}from"./index.c5d8d2c2.js";import"./xlsx.9d951958.js";import"./index.ba073669.js";import"./Trigger.8423b189.js";import"./omit.613852c9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9b7bc90a.js";import"./CheckOutlined.be057137.js";import{s as n}from"./index.3620d909.js";import"./index.28c69232.js";import"./index.a8efe853.js";import"./colors.d37333f4.js";import"./index.5e68bb45.js";import"./RightOutlined.ac5b2c4e.js";import"./usePageContext.75d92c53.js";import"./types.02846160.js";import"./index.534b0698.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.f8f6dc33.js";import"./index.ebbe171f.js";import"./index.bf3d04e3.js";import"./UpOutlined.23a2d63a.js";import"./index.2b179f06.js";import"./index.99f9d65f.js";import"./index.8a1a96c3.js";import"./index.4b1b8a7c.js";import"./index.8126daf4.js";import"./index.078a78e9.js";import"./index.ba9445ca.js";import"./index.86acc164.js";import"./transButton.3e3572fa.js";import{a as p}from"./index.a56b187c.js";import"./CloseOutlined.93cdb7f8.js";import"./FullscreenOutlined.f6e22198.js";import"./index.947bf745.js";import"./RightOutlined.afe6ff98.js";import"./useTimeout.fcc1bd72.js";import"./tsxHelper.87c58488.js";import"./index.89ce6b1b.js";import"./animation.99afdb7b.js";import"./useScrollTo.0260d00e.js";import{s as c}from"./index.f1db30ef.js";import"./useAttrs.4a972d2b.js";import"./index.6195931d.js";import"./useWindowSizeFn.9f107263.js";import"./index.00d20f2e.js";import"./uuid.40269c00.js";import"./download.3f84a53c.js";import{u as d}from"./useForm.7906866b.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:s=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var u=s({components:{BasicForm:n,CollapseContainer:p,PageWrapper:c},setup(){const{createMessage:s}=e(),[o,{setProps:t}]=d({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:o,schemas:m,handleSubmit:e=>{s.success("click search,values:"+JSON.stringify(e))},setProps:t}}});const f={class:"mb-4"},b=r("更改labelWidth"),j=r("还原labelWidth"),P=r("更改Size"),x=r("还原Size"),C=r("禁用表单"),h=r("解除禁用"),k=r("紧凑表单"),_=r("还原正常间距"),g=r(" 操作按钮位置 "),S={class:"mb-4"},O=r(" 隐藏操作按钮 "),w=r(" 显示操作按钮 "),B=r(" 隐藏重置按钮 "),v=r(" 显示重置按钮 "),W=r(" 隐藏查询按钮 "),F=r(" 显示查询按钮 "),R=r(" 修改重置按钮 "),y=r(" 修改查询按钮 ");u.render=function(s,e,r,n,p,c){const d=o("a-button"),m=o("BasicForm"),u=o("CollapseContainer"),z=o("PageWrapper");return t(),i(z,{title:"UseForm操作示例"},{default:l((()=>[a("div",f,[a(d,{onClick:e[1]||(e[1]=e=>s.setProps({labelWidth:150})),class:"mr-2"},{default:l((()=>[b])),_:1}),a(d,{onClick:e[2]||(e[2]=e=>s.setProps({labelWidth:120})),class:"mr-2"},{default:l((()=>[j])),_:1}),a(d,{onClick:e[3]||(e[3]=e=>s.setProps({size:"large"})),class:"mr-2"},{default:l((()=>[P])),_:1}),a(d,{onClick:e[4]||(e[4]=e=>s.setProps({size:"default"})),class:"mr-2"},{default:l((()=>[x])),_:1}),a(d,{onClick:e[5]||(e[5]=e=>s.setProps({disabled:!0})),class:"mr-2"},{default:l((()=>[C])),_:1}),a(d,{onClick:e[6]||(e[6]=e=>s.setProps({disabled:!1})),class:"mr-2"},{default:l((()=>[h])),_:1}),a(d,{onClick:e[7]||(e[7]=e=>s.setProps({compact:!0})),class:"mr-2"},{default:l((()=>[k])),_:1}),a(d,{onClick:e[8]||(e[8]=e=>s.setProps({compact:!1})),class:"mr-2"},{default:l((()=>[_])),_:1}),a(d,{onClick:e[9]||(e[9]=e=>s.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:l((()=>[g])),_:1})]),a("div",S,[a(d,{onClick:e[10]||(e[10]=e=>s.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:l((()=>[O])),_:1}),a(d,{onClick:e[11]||(e[11]=e=>s.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:l((()=>[w])),_:1}),a(d,{onClick:e[12]||(e[12]=e=>s.setProps({showResetButton:!1})),class:"mr-2"},{default:l((()=>[B])),_:1}),a(d,{onClick:e[13]||(e[13]=e=>s.setProps({showResetButton:!0})),class:"mr-2"},{default:l((()=>[v])),_:1}),a(d,{onClick:e[14]||(e[14]=e=>s.setProps({showSubmitButton:!1})),class:"mr-2"},{default:l((()=>[W])),_:1}),a(d,{onClick:e[15]||(e[15]=e=>s.setProps({showSubmitButton:!0})),class:"mr-2"},{default:l((()=>[F])),_:1}),a(d,{onClick:e[16]||(e[16]=e=>s.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:l((()=>[R])),_:1}),a(d,{onClick:e[17]||(e[17]=e=>s.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:l((()=>[y])),_:1})]),a(u,{title:"useForm示例"},{default:l((()=>[a(m,{onRegister:s.register,onSubmit:s.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default u;