import{a as e,i as t,o as i,j as s,k as o,w as r,p as d,n as a}from"./index.c5d8d2c2.js";import"./xlsx.9d951958.js";import"./useSortable.ad13960b.js";import"./index.ba073669.js";import"./Trigger.8423b189.js";import"./omit.613852c9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9b7bc90a.js";import"./CheckOutlined.be057137.js";import"./index.3620d909.js";import"./index.28c69232.js";import"./colors.d37333f4.js";import"./index.5e68bb45.js";import"./RightOutlined.ac5b2c4e.js";import"./types.02846160.js";import"./index.534b0698.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.f8f6dc33.js";import"./index.ebbe171f.js";import"./index.bf3d04e3.js";import"./UpOutlined.23a2d63a.js";import"./LeftOutlined.afe04eed.js";import"./index.2b179f06.js";import{T as m}from"./index.99f9d65f.js";import"./index.8a1a96c3.js";import"./index.4b1b8a7c.js";import"./index.8126daf4.js";import"./index.4ac1b22a.js";import"./zh_CN.0242bd16.js";import"./index.078a78e9.js";import"./index.ba9445ca.js";import"./index.86acc164.js";import"./CaretDownFilled.5b4eb00d.js";import"./transButton.3e3572fa.js";import"./index.a56b187c.js";import"./CheckOutlined.5fcde905.js";import"./CloseOutlined.93cdb7f8.js";import{s as n,T as p}from"./index.be77f595.js";import"./FullscreenOutlined.f6e22198.js";import"./index.947bf745.js";import"./RightOutlined.afe6ff98.js";import"./SettingOutlined.f0e8c907.js";import"./useTimeout.fcc1bd72.js";import"./tsxHelper.87c58488.js";import"./index.89ce6b1b.js";import"./animation.99afdb7b.js";import"./useScrollTo.0260d00e.js";import"./useAttrs.4a972d2b.js";import"./index.6195931d.js";import"./useWindowSizeFn.9f107263.js";import"./index.00d20f2e.js";import"./uuid.40269c00.js";import"./download.3f84a53c.js";import"./useForm.7906866b.js";import"./useExpose.0843e844.js";import{u as j}from"./useTable.79996857.js";import{d as c}from"./table.221c7987.js";const l=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"分类",dataIndex:"category",width:80,align:"center",slots:{customRender:"category"}},{title:"姓名",dataIndex:"name",width:120},{title:"头像",dataIndex:"img",width:120,slots:{customRender:"img"}},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",slots:{customRender:"no"}},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime"}];var b=e({components:{BasicTable:n,TableImg:p,Tag:m},setup(){const[e]=j({title:"自定义列内容",api:c,columns:l,bordered:!0});return{registerTable:e}}});const u={class:"p-4"};b.render=function(e,m,n,p,j,c){const l=t("Tag"),b=t("TableImg"),f=t("BasicTable");return i(),s("div",u,[o(f,{onRegister:e.registerTable},{id:r((({record:e})=>[d(" ID: "+a(e.id),1)])),no:r((({record:e})=>[o(l,{color:"green"},{default:r((()=>[d(a(e.no),1)])),_:2},1024)])),img:r((()=>[o(b,{imgList:["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216"]},null,8,["imgList"])])),category:r((({record:e})=>[o(l,{color:"green"},{default:r((()=>[d(a(e.no),1)])),_:2},1024)])),_:1},8,["onRegister"])])};export default b;