(this.webpackJsonpnasa=this.webpackJsonpnasa||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(15),s=n.n(c),r=n(8),o=n(2),i=n(1);function j(){return Object(i.jsx)("div",{className:"home",children:Object(i.jsx)(r.b,{className:"home-link",to:"/nasaphoto",children:"See into starts"})})}var l=n(13),p=n.n(l),h=n(18),u=n(19);function b(){return Object(i.jsx)("div",{className:"navbar",children:Object(i.jsx)("ul",{children:Object(i.jsx)(r.b,{className:"Link",to:"/",children:"Take me Home"})})})}function d(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(h.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/planetary/apod?api_key=ZdbgjTwDoZYBGm01q0gAJOfNKf4eWELMuZSrXHYT");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n),console.log(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(b,{}),Object(i.jsxs)("div",{className:"nasa-photo",children:[Object(i.jsx)("img",{className:"photo",src:n.url,alt:n.title}),Object(i.jsx)("h1",{children:n.title}),Object(i.jsx)("p",{className:"date",children:n.date}),Object(i.jsx)("p",{className:"explanation",children:n.explanation})]})]}):Object(i.jsx)("div",{})}n(31);var x=function(){return Object(i.jsx)(r.a,{children:Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(o.a,{component:j,path:"/",exact:!0}),Object(i.jsx)(o.a,{component:d,path:"/nasaphoto"})]})})};s.a.render(Object(i.jsx)(x,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.30b45e90.chunk.js.map