(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{528:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return t(4809)}])},7725:function(e,s,t){"use strict";t.d(s,{Z:function(){return c}});var l=t(5893);t(7294);var n=t(1637),r=t(606);let a=e=>{let{small:s=!1,className:t="",...n}=e;return(0,l.jsxs)("div",{className:"inline-flex items-center capitalize leading-none ".concat(s?"text-xs":"text-sm"," ").concat(t),children:[n.icon&&(0,l.jsx)(r.Z,{path:n.icon,h:"h-4",w:"w-4",className:s?"mr-1":"mr-2",size:s?14:null}),n.label&&(0,l.jsx)("span",{children:n.label})]})},i=e=>{let{small:s=!1,outline:t=!1,className:r="",...i}=e,c=t?n.bN[i.color]:n.RH[i.color];return(0,l.jsx)(a,{className:"border rounded-full ".concat(s?"py-1 px-3":"py-1.5 px-4"," ").concat(c," ").concat(r),icon:i.icon,label:i.label,small:s})};var c=i},4809:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return M}});var l=t(5893),n=t(5317),r=t(9008),a=t.n(r),i=t(7294),c=t(6165),o=t(1899),d=t(5301),x=t(3813),m=t(1637),u=t(606),h=t(2708),b=t(7725);let j=e=>{let{small:s=!1,...t}=e,r={up:n.Waq,down:n.CW,success:n.k6A,danger:n.O8k,warning:n._gM,info:n.EaN}[t.type];return(0,l.jsx)(b.Z,{label:t.label,color:t.color,icon:r,small:s})},f=e=>(0,l.jsxs)(h.Z,{children:[e.trendLabel&&e.trendType&&e.trendColor&&(0,l.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[(0,l.jsx)(j,{label:e.trendLabel,type:e.trendType,color:e.trendColor,small:!0}),(0,l.jsx)(c.Z,{icon:n.Shd,color:"lightDark",small:!0})]}),(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"text-lg leading-tight text-gray-500 dark:text-slate-400",children:e.label}),(0,l.jsxs)("h1",{className:"text-3xl leading-tight font-semibold",children:[e.numberPrefix,e.number,e.numberSuffix]})]}),e.icon&&(0,l.jsx)(u.Z,{path:e.icon,size:"48",w:"",h:"h-16",className:m.uK[e.iconColor]})]})]});var p=t(7587),g=t(1058);let v=e=>{let s={withdraw:n.fmS,deposit:n.X$m,invoice:n.IH$,payment:n.SoU}[e.transaction.type],t=()=>{switch(e.transaction.type){case"withdraw":return"danger";case"deposit":return"success";case"invoice":return"warning";case"payment":return"info"}};return(0,l.jsx)(h.Z,{className:"mb-6 last:mb-0",children:(0,l.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between",children:[(0,l.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-start mb-6 md:mb-0",children:[(0,l.jsx)(g.Z,{icon:s,color:t(),className:"md:mr-6 mb-6 md:mb-0"}),(0,l.jsxs)("div",{className:"text-center space-y-1 md:text-left md:mr-6",children:[(0,l.jsxs)("h4",{className:"text-xl",children:["$",e.transaction.amount]}),(0,l.jsxs)("p",{className:"text-gray-500 dark:text-slate-400",children:[(0,l.jsx)("b",{children:e.transaction.date})," via ",e.transaction.business]})]})]}),(0,l.jsxs)("div",{className:"text-center md:text-right space-y-2",children:[(0,l.jsx)("p",{className:"text-sm text-gray-500",children:e.transaction.name}),(0,l.jsx)("div",{children:(0,l.jsx)(b.Z,{color:t(),label:e.transaction.type,small:!0})})]})]})})};var w=t(8492);let N=e=>{let s=()=>e.client.progress>=60?"success":e.client.progress>=40?"warning":"danger",t={success:n.sIZ,warning:n.aE,danger:n.ic4}[s()];return(0,l.jsx)(h.Z,{className:"mb-6 last:mb-0",children:(0,l.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between",children:[(0,l.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-start mb-6 md:mb-0",children:[(0,l.jsx)(w.Z,{className:"w-12 h-12 md:mr-6 mb-6 md:mb-0",username:e.client.name}),(0,l.jsxs)("div",{className:"text-center md:text-left overflow-hidden",children:[(0,l.jsx)("h4",{className:"text-xl text-ellipsis",children:e.client.name}),(0,l.jsxs)("p",{className:"text-gray-500 dark:text-slate-400",children:[e.client.created," @ ",e.client.login]})]})]}),(0,l.jsx)(b.Z,{color:s(),icon:t,label:"".concat(e.client.progress,"%")})]})})},y=e=>{let{className:s="",children:t}=e;return(0,l.jsx)("div",{className:"".concat(s," rounded-2xl py-12 px-6 lg:px-12 text-center"),children:t})},Z=()=>(0,l.jsxs)(y,{className:m.FA,children:[(0,l.jsxs)("h1",{className:"text-3xl text-white mb-6",children:["Like the project? Please star on ",(0,l.jsx)("b",{children:"GitHub"})," ;-)"]}),(0,l.jsx)("div",{children:(0,l.jsx)(c.Z,{href:"https://github.com/justboil/admin-one-react-tailwind",target:"_blank",icon:n.LcO,label:"GitHub",roundedFull:!0})})]}),C={default:{primary:"#00D1B2",info:"#209CEE",danger:"#FF3860"}},k=e=>{let s=[];for(let t=0;t<e;t++)s.push(Math.round(200*Math.random()));return s},_=(e,s)=>({fill:!1,borderColor:C.default[e],borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:C.default[e],pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:C.default[e],pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:k(s),tension:.5,cubicInterpolationMode:"default"}),S=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,s=[];for(let t=1;t<=e;t++)s.push("0".concat(t));return{labels:s,datasets:[_("primary",e),_("info",e),_("danger",e)]}};var L=t(6775),T=t(5376);L.kL.register(L.jn,L.od,L.ST,L.f$,L.uw,L.u);let E={responsive:!0,maintainAspectRatio:!1,scales:{y:{display:!1},x:{display:!0}},plugins:{legend:{display:!1}}},O=e=>{let{data:s}=e;return(0,l.jsx)(T.x1,{options:E,data:s,className:"h-96"})};var H=t(4062),D=t(5807),B=t(929);let F=()=>{let{clients:e}=(0,p.X)(),{transactions:s}=(0,p.p)(),t=e.slice(0,4),[r,o]=(0,i.useState)(S()),m=e=>{e.preventDefault(),o(S())};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a(),{children:(0,l.jsxs)("title",{children:["Dashboard - ",B.xw]})}),(0,l.jsxs)(d.Z,{children:[(0,l.jsx)(x.Z,{icon:n.M7S,title:"Overview",main:!0,children:(0,l.jsx)(c.Z,{href:"https://github.com/justboil/admin-one-react-tailwind",target:"_blank",icon:n.LcO,label:"Star on GitHub",color:"contrast",roundedFull:!0,small:!0})}),(0,l.jsxs)("div",{className:"grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6",children:[(0,l.jsx)(f,{trendLabel:"12%",trendType:"up",trendColor:"success",icon:n.zr,iconColor:"success",number:512,label:"Clients"}),(0,l.jsx)(f,{trendLabel:"16%",trendType:"down",trendColor:"danger",icon:n.JKU,iconColor:"info",number:7770,numberPrefix:"$",label:"Sales"}),(0,l.jsx)(f,{trendLabel:"Overflow",trendType:"warning",trendColor:"warning",icon:n.M7S,iconColor:"danger",number:256,numberSuffix:"%",label:"Performance"})]}),(0,l.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6",children:[(0,l.jsx)("div",{className:"flex flex-col justify-between",children:s.map(e=>(0,l.jsx)(v,{transaction:e},e.id))}),(0,l.jsx)("div",{className:"flex flex-col justify-between",children:t.map(e=>(0,l.jsx)(N,{client:e},e.id))})]}),(0,l.jsx)("div",{className:"my-6",children:(0,l.jsx)(Z,{})}),(0,l.jsx)(x.Z,{icon:n.Cld,title:"Trends overview",children:(0,l.jsx)(c.Z,{icon:n.vS,color:"whiteDark",onClick:m})}),(0,l.jsx)(h.Z,{className:"mb-6",children:r&&(0,l.jsx)(O,{data:r})}),(0,l.jsx)(x.Z,{icon:n.zr,title:"Clients"}),(0,l.jsxs)(H.Z,{color:"info",icon:n.qOQ,children:[(0,l.jsx)("b",{children:"Responsive table."})," Collapses on mobile"]}),(0,l.jsx)(h.Z,{hasTable:!0,children:(0,l.jsx)(D.Z,{})})]})]})};F.getLayout=function(e){return(0,l.jsx)(o.Z,{children:e})};var M=F}},function(e){e.O(0,[702,757,664,392,389,899,764,774,888,179],function(){return e(e.s=528)}),_N_E=e.O()}]);