(this.webpackJsonpInpres=this.webpackJsonpInpres||[]).push([[21],{115:function(e,a,t){"use strict";var n=t(5),s=t(14),c=t(0),i=t.n(c),l=t(18),o=t.n(l),r=t(62),d=t.n(r),u=t(63),b=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"],p={tabs:o.a.bool,pills:o.a.bool,vertical:o.a.oneOfType([o.a.bool,o.a.string]),horizontal:o.a.string,justified:o.a.bool,fill:o.a.bool,navbar:o.a.bool,card:o.a.bool,tag:u.n,className:o.a.string,cssModule:o.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.tabs,l=e.pills,o=e.vertical,r=e.horizontal,p=e.justified,m=e.fill,j=e.navbar,v=e.card,f=e.tag,h=Object(s.a)(e,b),g=Object(u.j)(d()(a,j?"navbar-nav":"nav",!!r&&"justify-content-"+r,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(o),{"nav-tabs":c,"card-header-tabs":v&&c,"nav-pills":l,"card-header-pills":v&&l,"nav-justified":p,"nav-fill":m}),t);return i.a.createElement(f,Object(n.a)({},h,{className:g}))};m.propTypes=p,m.defaultProps={tag:"ul",vertical:!1},a.a=m},116:function(e,a,t){"use strict";var n=t(5),s=t(14),c=t(0),i=t.n(c),l=t(18),o=t.n(l),r=t(62),d=t.n(r),u=t(63),b=["className","cssModule","active","tag"],p={tag:u.n,active:o.a.bool,className:o.a.string,cssModule:o.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.active,l=e.tag,o=Object(s.a)(e,b),r=Object(u.j)(d()(a,"nav-item",!!c&&"active"),t);return i.a.createElement(l,Object(n.a)({},o,{className:r}))};m.propTypes=p,m.defaultProps={tag:"li"},a.a=m},117:function(e,a,t){"use strict";var n=t(5),s=t(14),c=t(10),i=t(7),l=t(0),o=t.n(l),r=t(18),d=t.n(r),u=t(62),b=t.n(u),p=t(63),m=["className","cssModule","active","tag","innerRef"],j={tag:p.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),disabled:d.a.bool,active:d.a.bool,className:d.a.string,cssModule:d.a.object,onClick:d.a.func,href:d.a.any},v=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(c.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.active,i=e.tag,l=e.innerRef,r=Object(s.a)(e,m),d=Object(p.j)(b()(a,"nav-link",{disabled:r.disabled,active:c}),t);return o.a.createElement(i,Object(n.a)({},r,{ref:l,onClick:this.onClick,className:d}))},a}(o.a.Component);v.propTypes=j,v.defaultProps={tag:"a"},a.a=v},118:function(e,a,t){"use strict";var n=t(5),s=t(14),c=t(0),i=t.n(c),l=t(18),o=t.n(l),r=t(62),d=t.n(r),u=t(63),b=["className","cssModule","color","innerRef","pill","tag"],p={color:o.a.string,pill:o.a.bool,tag:u.n,innerRef:o.a.oneOfType([o.a.object,o.a.func,o.a.string]),children:o.a.node,className:o.a.string,cssModule:o.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.color,l=e.innerRef,o=e.pill,r=e.tag,p=Object(s.a)(e,b),m=Object(u.j)(d()(a,"badge","badge-"+c,!!o&&"badge-pill"),t);return p.href&&"span"===r&&(r="a"),i.a.createElement(r,Object(n.a)({},p,{className:m,ref:l}))};m.propTypes=p,m.defaultProps={color:"secondary",pill:!1,tag:"span"},a.a=m},179:function(e,a,t){"use strict";t.r(a);var n=t(3),s=t(4),c=t(9),i=t(17),l=t(0),o=t.n(l),r=t(69),d=t.n(r),u=(t(70),t(86)),b=t(89),p=t(90),m=t(115),j=t(116),v=t(117),f=t(118),h=t(62),g=t.n(h),O=t(64),N=(t(71),t(65)),y=t(24),x=t(1);document.title=y.a.t("pageNames.name")+" - "+y.a.t("pageNames.other"),N.a.initialize("G-MFNB4616NN"),N.a.pageview(window.location.pathname+window.location.search);var k=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e,s){var c;return Object(n.a)(this,t),(c=a.call(this,e,s)).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky")},d.a.init(),c.state={activeTab:"1"},c}return Object(s.a)(t,[{key:"componentDidMount",value:function(){d.a.refresh(),document.getElementById("top-menu").classList.add("nav-light"),document.body.classList="",window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"toggleTab",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;return Object(x.jsx)(o.a.Fragment,{children:Object(x.jsxs)(u.a,{className:"mt-100 mt-60",children:[Object(x.jsx)(O.a,{title:"Pricing #2",desc:"that can provide everything you need to generate awareness, drive traffic, connect."}),Object(x.jsx)(b.a,{className:"align-items-center",children:Object(x.jsx)(p.a,{xs:"12",className:"mt-4 pt-2",children:Object(x.jsx)("div",{className:"text-center",children:Object(x.jsxs)(m.a,{pills:!0,className:"rounded-pill justify-content-center d-inline-block border py-1 px-2",children:[Object(x.jsx)(j.a,{className:"d-inline-block",children:Object(x.jsx)(v.a,{className:g()({active:"1"===this.state.activeTab},"px-3","rounded-pill","monthly"),onClick:function(){e.toggleTab("1")},children:"Monthly"})})," ",Object(x.jsx)(j.a,{className:"d-inline-block",children:Object(x.jsxs)(v.a,{className:g()({active:"2"===this.state.activeTab},"px-3","rounded-pill","yearly"),onClick:function(){e.toggleTab("2")},children:["Yearly"," ",Object(x.jsxs)(f.a,{className:"rounded-pill bg-success",children:["15% Off"," "]})]})})]})})})})]})})}}]),t}(l.Component);a.default=k},64:function(e,a,t){"use strict";var n=t(3),s=t(4),c=t(9),i=t(17),l=t(0),o=t.n(l),r=t(89),d=t(90),u=t(1),b=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return Object(u.jsx)(o.a.Fragment,{children:Object(u.jsx)(r.a,{className:"justify-content-center",children:Object(u.jsx)(d.a,{xs:"12",className:this.props.isLeft?"":"text-center",children:Object(u.jsxs)("div",{className:"section-title mb-4 pb-2",name:"maintitle",children:[Object(u.jsxs)("h4",{className:"title mb-4",name:"sectiontitle",children:[" ",this.props.title," "]}),Object(u.jsxs)("p",{className:this.props.isLeft?"text-muted para-desc mb-0":"text-muted para-desc mx-auto mb-0",name:"sectiondesc",children:[this.props.desc," "]})]})})})})}}]),t}(l.Component);a.a=b}}]);
//# sourceMappingURL=21.af04a35e.chunk.js.map