(this["webpackJsonppokemon-info-react"]=this["webpackJsonppokemon-info-react"]||[]).push([[5],{179:function(e,t,r){"use strict";var a=r(191),n=r.n(a).a.create({baseURL:"https://pokeapi.co/api/v2"}),i={post:function(e,t,r){return n.post(e,t,r)},get:function(e,t){return n.get(e,t)}};t.a=i},180:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var a=function(e){var t=e.value,r="";return t&&"string"===typeof t?r=t.charAt(0).toUpperCase()+t.slice(1):r}},233:function(e,t,r){},285:function(e,t,r){"use strict";r.r(t);var a=r(2),n=r(0),i=r(69),o=r(206),s=r(207),c=r(52),u=r(186),l=r(189),d=r.n(l),f=r(190),v=r(19),m=r(179),h=r(180),p=r(119),b=(r(233),Object(p.a)((function(e){return{textContainer:{backgroundColor:"#F5F5F5",padding:10},textCard:{margin:10}}}))),w=[{field:"name",headerName:"Name",valueFormatter:h.a},{field:"firmness",headerName:"Firmness",valueGetter:function(e){var t,r;return null!==(t=null===(r=e.row.firmness)||void 0===r?void 0:r.name)&&void 0!==t?t:"No Data"},valueFormatter:h.a},{field:"flavors",headerName:"Flavors (by potency)",width:325,valueGetter:function(e){return e.row.flavors&&e.row.flavors.length?e.row.flavors.map((function(e){var t;return(null===(t=e.flavor)||void 0===t?void 0:t.name)?"".concat(e.flavor.name,": ").concat(e.potency):""})).join(", "):"No Data"}},{field:"growth_time",headerName:"Growth Time (hours)",width:145},{field:"max_harvest",headerName:"Max Harvest (per tree)",width:160},{field:"natural_gift_power",headerName:"Natural Gift Power",width:150},{field:"natural_gift_type",headerName:"Natural Gift Type",width:150,valueGetter:function(e){var t,r;return null!==(t=null===(r=e.row.natural_gift_type)||void 0===r?void 0:r.name)&&void 0!==t?t:"No Data"},valueFormatter:h.a},{field:"size",headerName:"Size (mm)"},{field:"smoothness",headerName:"Smoothness"},{field:"soil_dryness",headerName:"Soil Dryness"}];t.default=function(){var e,t=Object(i.c)((function(e){return e.berryListWithDataState})),r=Object(i.b)();Object(n.useEffect)((function(){r(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"100",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(){var r=Object(f.a)(d.a.mark((function r(a){var n,i,o;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,m.a.get("/berry/?limit=".concat(e,"&offset=").concat(t));case 3:return n=r.sent,i=n.data.results.map(function(){var e=Object(f.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get(t.url);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),r.next=7,Promise.all(i);case 7:o=(o=r.sent).filter((function(e){return!!e})),a({berryList:o,type:v.c}),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),console.error(r.t0);case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()}())}),[r]);var l=b(),h=[10,25,(null===(e=t.berryList)||void 0===e?void 0:e.length)||100];return Object(a.jsxs)("div",{className:"berry-container",children:[Object(a.jsx)("div",{className:l.textContainer,children:Object(a.jsx)(o.a,{className:l.textCard,children:Object(a.jsx)(s.a,{children:Object(a.jsx)(c.a,{children:"Berries are small, juicy, fleshy fruit. \n    As in the real world, a large variety exists in the Pok\xe9mon world, \n    with a large range of flavors, names, and effects. \n    First found in the Generation II games, many Berries have since \n    become critical held items in battle, where their various effects \n    include HP and status condition restoration, stat enhancement, \n    and even damage negation."})})})}),Object(a.jsx)("div",{className:"berry-datagrid-container",children:Object(a.jsx)(u.a,{disableColumnMenu:!0,components:{Toolbar:u.b},rows:t.berryList,columns:w,rowsPerPageOptions:h,pageSize:h[0]})})]})}}}]);
//# sourceMappingURL=5.e59346c0.chunk.js.map