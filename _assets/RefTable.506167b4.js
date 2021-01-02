import{a as e,r as i,h as t,f as o,i as s,o as n,j as a,k as l,w as c,p as r}from"./index.0ac299ed.js";import"./xlsx.a48e520c.js";import"./useSortable.40ed20ac.js";import"./index.1f35fda8.js";import"./Trigger.d65241d3.js";import"./omit.98994fe4.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f2e4ee83.js";import"./CheckOutlined.d032856a.js";import"./index.8db3a8c1.js";import"./colors.5d91bbdf.js";import"./index.9c8fc8dd.js";import"./RightOutlined.f897cf51.js";import"./index.676d1c13.js";import"./types.0fb93fc3.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.7438652c.js";import"./_baseFor.f4e5f03f.js";import"./index.5a532cc5.js";import"./index.a172b251.js";import"./index.4298645d.js";import"./index.d5d8d6e8.js";import"./UpOutlined.549e6bdf.js";import"./LeftOutlined.0a6527a3.js";import"./index.2bab9107.js";import"./index.ecbd9889.js";import"./index.d42c47fc.js";import"./index.7d4fdf7c.js";import"./index.8e9f097d.js";import"./zh_CN.0242bd16.js";import"./index.d6ea0011.js";import"./index.677e8b2a.js";import"./CaretDownFilled.708ae9b6.js";import"./index.05f15b52.js";import"./CheckOutlined.f283e048.js";import"./CloseOutlined.9f910fbc.js";import{s as d}from"./index.fb04c872.js";import"./FullscreenOutlined.be319401.js";import"./LeftOutlined.a260af09.js";import"./LoadingOutlined.443e49ec.js";import"./TableAction.39c6a9e7.js";import"./RightOutlined.be55439d.js";import"./SettingOutlined.9a31b847.js";import"./useTimeout.14fe63de.js";import"./tsxHelper.906f93e2.js";import"./index.93dfb460.js";import"./domUtils.32adbada.js";import"./index.020c2033.js";import"./animation.136afafa.js";import"./useScrollTo.6fe857a3.js";import"./useAttrs.54875f54.js";import"./index.657fb116.js";import"./useForm.4a900a75.js";import"./index.de57128c.js";import"./useWindowSizeFn.8c096a0b.js";import"./uuid.40269c00.js";import"./useExpose.31b978ca.js";import{getBasicColumns as m,getBasicShortColumns as f}from"./tableData.c69ad412.js";import{d as p}from"./table.74f3ba00.js";var u=e({components:{BasicTable:d},setup(){const e=i(null),{createMessage:s}=t();function n(){const i=o(e);if(!i)throw new Error("tableAction is null");return i}return{tableRef:e,api:p,columns:m(),changeLoading:function(){n().setLoading(!0),setTimeout((()=>{n().setLoading(!1)}),1e3)},changeColumns:function(){n().setColumns(f())},reloadTable:function(){n().setColumns(m()),n().reload({page:1})},getColumn:function(){s.info("请在控制台查看！")},getTableData:function(){s.info("请在控制台查看！")},getPagination:function(){s.info("请在控制台查看！")},setPaginationInfo:function(){n().setPagination({current:2}),n().reload()},getSelectRowList:function(){s.info("请在控制台查看！")},getSelectRowKeyList:function(){s.info("请在控制台查看！")},setSelectedRowKeyList:function(){n().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){n().clearSelectedRowKeys()}}}});const j={class:"p-4"},b={class:"mb-4"},C=r("还原"),g=r("开启loading"),x=r("更改Columns"),k=r("获取Columns"),w=r("获取表格数据"),S=r("跳转到第2页"),R={class:"mb-4"},_=r("获取选中行"),L=r("获取选中行Key"),T=r("设置选中行"),h=r("清空选中行"),O=r("获取分页信息");u.render=function(e,i,t,o,r,d){const m=s("a-button"),f=s("BasicTable");return n(),a("div",j,[l("div",b,[l(m,{class:"mr-2",onClick:e.reloadTable},{default:c((()=>[C])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.changeLoading},{default:c((()=>[g])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.changeColumns},{default:c((()=>[x])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getColumn},{default:c((()=>[k])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getTableData},{default:c((()=>[w])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:c((()=>[S])),_:1},8,["onClick"])]),l("div",R,[l(m,{class:"mr-2",onClick:e.getSelectRowList},{default:c((()=>[_])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:c((()=>[L])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:c((()=>[T])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.clearSelect},{default:c((()=>[h])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getPagination},{default:c((()=>[O])),_:1},8,["onClick"])]),l(f,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default u;