(this["webpackJsonppokemon-info-react"]=this["webpackJsonppokemon-info-react"]||[]).push([[6],{285:function(e,t,r){},402:function(e,t,r){"use strict";r.r(t);var n=r(4),a=r(0),c=r(98),o=r(401),s=r(398),i=r(66),u=r.n(i),l=r(83),p=r(72),b=r(268),f=r.n(b).a.create({baseURL:"https://pokeapi.co/api/v2"}),d={post:function(e,t,r){return f.post(e,t,r)},get:function(e,t){return f.get(e,t)}},h=(r(285),o.a.Title);o.a.Paragraph,o.a.Text,t.default=function(){var e=Object(c.c)((function(e){return e.berryListState})),t=Object(c.b)();Object(a.useEffect)((function(){t(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(){var r=Object(l.a)(u.a.mark((function r(n){var a;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d.get("/berry/?limit=".concat(e,"&offset=").concat(t));case 3:return a=r.sent,n({berryList:a.data,type:p.b}),r.abrupt("return",a);case 8:r.prev=8,r.t0=r.catch(0),console.error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()}("70"))}));return Object(n.jsxs)("div",{className:"layout-content-page-container berry-container",children:[Object(n.jsx)(h,{children:"Berries"}),Object(n.jsx)("div",{className:"table-container",children:Object(n.jsx)(s.a,{className:"berry-table",columns:[{title:"Name",dataIndex:"name",key:"name"},{title:"URL",dataIndex:"url",key:"url"}],dataSource:e.berryList.results,scroll:{y:"calc(100vh - 15em)"}})})]})}}}]);
//# sourceMappingURL=6.5ffae65e.chunk.js.map