(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),s=n(4),i=n(5),b=n(8),r=n(7),l=n(1),o=n.n(l),d=n(6),j=n.n(d),u=n(0),h=function(e){var t=e.selectedTab,n=e.tabs,a=e.onTabSelected;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("ul",{className:"nav nav-tabs",children:n.map((function(e){return Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)("button",{type:"submit",onClick:function(){return a(e)},className:j()("nav-link",{active:t.id===e.id}),children:e.title})},e.id)}))}),Object(u.jsx)("p",{children:t.content})]})},m=(n(14),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),p=function(e){Object(b.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={selectedTab:m[0]},e.changeSelectedTab=function(t){e.setState({selectedTab:t})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.selectedTab;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("h1",{children:["Selected tab is ",e.title]}),Object(u.jsx)(h,{selectedTab:e,tabs:m,onTabSelected:this.changeSelectedTab})]})}}]),n}(o.a.Component),v=p;c.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.178a9220.chunk.js.map