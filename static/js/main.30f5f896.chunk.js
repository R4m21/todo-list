(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(6),s=n.n(i),r=n(15),l=n(4),o=n(14),a=n.n(o),u=n(12),j=n.n(u),b=n(1),d=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),i=n[0],s=n[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"btnlist",style:{display:""!==e.value?"block":"none"},children:[Object(b.jsx)("button",{className:"btn",onClick:function(){return s(!0)},onDoubleClick:function(){return e.delete(e.id)},children:i?Object(b.jsx)(j.a,{}):Object(b.jsx)(a.a,{})}),Object(b.jsx)("li",{className:"list",style:{textDecoration:i?"line-through":"none",color:i?"gray":"none"},children:e.value})]})})},O=(n(27),function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(""),o=Object(l.a)(s,2),a=o[0],u=o[1],j=function(e){return i((function(t){return t.filter((function(t,n){return n!==e}))}))};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"todoList",children:[Object(b.jsx)("h1",{className:"heading",children:"todo list"}),Object(b.jsxs)("div",{className:"inputFiled",children:[Object(b.jsx)("input",{placeholder:"listing your favorite items",value:a,onChange:function(e){return u(e.target.value)}}),Object(b.jsx)("button",{onClick:function(){i((function(e){return[].concat(Object(r.a)(e),[a])})),u("")},children:"+"})]}),Object(b.jsx)("ul",{className:"uoList",children:n.map((function(e,t){return Object(b.jsx)(d,{id:t,value:e,delete:j},t)}))})]})})});s.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.30f5f896.chunk.js.map