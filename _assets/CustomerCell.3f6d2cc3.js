import{a as e,i as t,o as i,j as s,k as o,w as r,n as d,m as a}from"./index.a4c995c9.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.91e4153e.js";import"./index.51976da2.js";import"./Trigger.a445e86a.js";import"./omit.149aedfc.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.afd9afdf.js";import"./CheckOutlined.0ff5e6b7.js";import"./index.0c15d5ff.js";import"./colors.1efe187d.js";import"./index.5f1f44bb.js";import"./RightOutlined.0310d066.js";import"./index.2bdd82eb.js";import"./types.0700a3df.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.ad94a28d.js";import"./_baseFor.f4e5f03f.js";import"./index.a172b251.js";import"./index.d7919071.js";import"./index.ed1896d8.js";import"./UpOutlined.060f27ef.js";import"./LeftOutlined.fa221124.js";import"./index.3ae0f855.js";import{T as m}from"./index.13851d4b.js";import"./index.73c71c16.js";import"./index.6e5663f8.js";import"./zh_CN.0242bd16.js";import"./TableAction.9af41b2c.js";import"./index.c6c01f68.js";import"./CaretDownFilled.65d9b2c0.js";import"./CheckOutlined.b19c1a43.js";import"./CloseOutlined.6993095c.js";import{s as n,b as p}from"./EditTableHeaderIcon.e605ef8a.js";import"./DownOutlined.39a8d1c3.js";import"./FullscreenOutlined.af1017f1.js";import"./LeftOutlined.e6de4091.js";import"./functional.46443edd.js";import"./RightOutlined.fc1e80b2.js";import"./useContext.1c84e748.js";import"./useTimeout.0fb9d179.js";import"./useDebounce.460c0b67.js";import"./useEventListener.dafd0e6c.js";import"./useBreakpoint.9e160351.js";import"./index.b191181c.js";import"./tsxHelper.20d71045.js";import"./index.85a2c56f.js";import"./propTypes.7f710850.js";import"./index.2e04fe2b.js";import"./useForm.a4438e73.js";import"./index.720a235c.js";import"./useModalContext.e5c00ab2.js";import"./domUtils.e32f343e.js";import"./useFullScreen.55ea9361.js";import"./uuid.40269c00.js";import"./useWindowSizeFn.bee853aa.js";import"./useExpose.0faa79f6.js";import"./index.bf39ee0d.js";import{u as j}from"./useTable.3fed69a5.js";import{d as l}from"./table.963b049e.js";const c=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"姓名",dataIndex:"name",width:120},{title:"头像",dataIndex:"img",width:120,slots:{customRender:"img"}},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",slots:{customRender:"no"}},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime"}];var f=e({components:{BasicTable:n,TableImg:p,Tag:m},setup(){const[e]=j({title:"自定义列内容",api:l,columns:c});return{registerTable:e}}});const u={class:"p-4"};f.render=function(e,m,n,p,j,l){const c=t("Tag"),f=t("TableImg"),b=t("BasicTable");return i(),s("div",u,[o(b,{onRegister:e.registerTable},{id:r((({record:e})=>[d(" ID: "+a(e.id),1)])),no:r((({record:e})=>[o(c,{color:"green"},{default:r((()=>[d(a(e.no),1)])),_:2},1024)])),img:r((()=>[o(f,{imgList:["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216"]},null,8,["imgList"])])),_:1},8,["onRegister"])])};export default f;