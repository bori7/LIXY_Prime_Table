(this.webpackJsonpprime_table=this.webpackJsonpprime_table||[]).push([[0],{12:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(6),i=n.n(a),o=(n(12),n(5)),u=n(7),s=(n(15),n(16),n(3)),d=function(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(10),d=Object(o.a)(i,2),l=d[0],f=d[1],b=function(e){for(var t=2,n=Math.sqrt(e);t<=n;t++)if(e%t===0)return!1;return e>1};Object(c.useEffect)((function(){!function(e){for(var t=[2],n=3;n<1e3&&(b(n)&&t.push(n),!(t.length>=e));n+=2);a(t)}(l)}),[l]);var h=[];r.forEach((function(e){var t={};r.forEach((function(n){t[n]=e*n})),h.push(t)}));var j=[];r.forEach((function(e){j.push({Header:"".concat(e),accessor:"".concat(e),Cell:function(e){return Object(s.jsx)("div",{style:{width:"75%",height:"100%",backgroundColor:"#dadada",borderRadius:"2px"},children:e.value})}})}));var p=[{Header:"",id:"row",maxWidth:50,filterable:!1,Cell:function(e){return Object(s.jsx)("div",{children:r[e.index]})}}].concat(j);return Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{className:"search-box",type:"number",placeholder:"number of primes",onChange:function(e){f(e.target.value)},defaultValue:10}),Object(s.jsx)("div",{className:"card-list",children:Object(s.jsx)(u.a,{data:h,columns:p})})]})};n(18);var l=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Prime Table"}),Object(s.jsx)(d,{})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(l,{})}),document.getElementById("root")),f()}},[[19,1,2]]]);
//# sourceMappingURL=main.09ebcd44.chunk.js.map