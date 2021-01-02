import{a as e,h as t,i,o,j as s,k as n,w as a,p as l}from"./index.0ac299ed.js";import"./xlsx.a48e520c.js";import"./useSortable.40ed20ac.js";import"./index.1f35fda8.js";import"./Trigger.d65241d3.js";import"./omit.98994fe4.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f2e4ee83.js";import"./CheckOutlined.d032856a.js";import"./index.8db3a8c1.js";import"./colors.5d91bbdf.js";import"./index.9c8fc8dd.js";import"./RightOutlined.f897cf51.js";import"./index.676d1c13.js";import"./types.0fb93fc3.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.7438652c.js";import"./_baseFor.f4e5f03f.js";import"./index.5a532cc5.js";import"./index.a172b251.js";import"./index.4298645d.js";import"./index.d5d8d6e8.js";import"./UpOutlined.549e6bdf.js";import"./LeftOutlined.0a6527a3.js";import"./index.2bab9107.js";import"./index.ecbd9889.js";import"./index.d42c47fc.js";import"./index.7d4fdf7c.js";import"./index.8e9f097d.js";import"./zh_CN.0242bd16.js";import"./index.d6ea0011.js";import"./index.677e8b2a.js";import"./CaretDownFilled.708ae9b6.js";import"./index.05f15b52.js";import"./CheckOutlined.f283e048.js";import"./CloseOutlined.9f910fbc.js";import{s as r}from"./index.fb04c872.js";import"./FullscreenOutlined.be319401.js";import"./LeftOutlined.a260af09.js";import"./LoadingOutlined.443e49ec.js";import"./TableAction.39c6a9e7.js";import"./RightOutlined.be55439d.js";import"./SettingOutlined.9a31b847.js";import"./useTimeout.14fe63de.js";import"./tsxHelper.906f93e2.js";import"./index.93dfb460.js";import"./domUtils.32adbada.js";import"./index.020c2033.js";import"./animation.136afafa.js";import"./useScrollTo.6fe857a3.js";import"./useAttrs.54875f54.js";import"./index.657fb116.js";import"./useForm.4a900a75.js";import"./index.de57128c.js";import"./useWindowSizeFn.8c096a0b.js";import"./uuid.40269c00.js";import"./useExpose.31b978ca.js";import{u as c}from"./useTable.d16c38dc.js";import{getBasicColumns as d,getBasicShortColumns as m}from"./tableData.c69ad412.js";import{d as p}from"./table.74f3ba00.js";var f=e({components:{BasicTable:r},setup(){const{createMessage:e}=t(),[i,{setLoading:o,setColumns:s,getColumns:n,getDataSource:a,reload:l,getPaginationRef:r,setPagination:f,getSelectRows:u,getSelectRowKeys:j,setSelectedRowKeys:b,clearSelectedRowKeys:g}]=c({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:p,columns:d(),rowKey:"id",showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:i,changeLoading:function(){o(!0),setTimeout((()=>{o(!1)}),1e3)},changeColumns:function(){s(m())},reloadTable:function(){s(d()),l({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){f({current:2}),l()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){b(["0","1","2"])},clearSelect:function(){g()}}}});const u={class:"p-4"},j={class:"mb-4"},b=l("还原"),g=l("开启loading"),C=l("更改Columns"),x=l("获取Columns"),k=l("获取表格数据"),S=l("跳转到第2页"),T={class:"mb-4"},w=l("获取选中行"),R=l("获取选中行Key"),_=l("设置选中行"),h=l("清空选中行"),y=l("获取分页信息");f.render=function(e,t,l,r,c,d){const m=i("a-button"),p=i("BasicTable");return o(),s("div",u,[n("div",j,[n(m,{class:"mr-2",onClick:e.reloadTable},{default:a((()=>[b])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.changeLoading},{default:a((()=>[g])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.changeColumns},{default:a((()=>[C])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.getColumn},{default:a((()=>[x])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.getTableData},{default:a((()=>[k])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:a((()=>[S])),_:1},8,["onClick"])]),n("div",T,[n(m,{class:"mr-2",onClick:e.getSelectRowList},{default:a((()=>[w])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:a((()=>[R])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:a((()=>[_])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.clearSelect},{default:a((()=>[h])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.getPagination},{default:a((()=>[y])),_:1},8,["onClick"])]),n(p,{onRegister:e.registerTable},null,8,["onRegister"])])};export default f;