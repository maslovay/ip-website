(this.webpackJsonpInpres=this.webpackJsonpInpres||[]).push([[11],{180:function(e,t,a){"use strict";a.r(t);var i=a(3),s=a(4),n=a(9),c=a(17),r=a(0),o=a.n(r),l=a(69),d=a.n(l),b=(a(70),a(86)),m=a(89),j=a(90),u=a(92),h=a(68),p=a(96),x=a(94),f=a(80),O=(a(71),a(65)),g=a(24),v=a(1);document.title=g.a.t("pageNames.name")+" - "+g.a.t("pageNames.industries.industries"),O.a.initialize("G-PSG8RPDW3G"),O.a.pageview(window.location.pathname+window.location.search);var y=function(e){Object(n.a)(a,e);var t=Object(c.a)(a);function a(e,s){var n;return Object(i.a)(this,a),(n=t.call(this,e,s)).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky")},d.a.init(),n.state={activeTab:"1"},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){d.a.refresh(),document.getElementById("top-menu").classList.add("nav-light"),document.body.classList="",window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"toggleTab",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){return Object(v.jsxs)(o.a.Fragment,{children:[Object(v.jsxs)("section",{className:"bg-half-170 d-table w-100",style:{background:'url("'.concat(f.a,'") center center')},children:[Object(v.jsx)("div",{className:"bg-overlay"}),Object(v.jsx)(b.a,{children:Object(v.jsx)(m.a,{className:"align-items-center",children:Object(v.jsx)(j.a,{lg:7,md:6,children:Object(v.jsx)("div",{className:"title-heading mt-4",children:Object(v.jsx)("h2",{className:"display-5 font-weight-bold text-white title-dark mb-3",children:g.a.t("commonIndustries.main.title")})})})})})]}),Object(v.jsx)(u.a,{}),Object(v.jsx)(p.a,{}),Object(v.jsx)(x.a,{}),Object(v.jsx)(h.a,{})]})}}]),a}(r.Component);t.default=y},64:function(e,t,a){"use strict";var i=a(3),s=a(4),n=a(9),c=a(17),r=a(0),o=a.n(r),l=a(89),d=a(90),b=a(1),m=function(e){Object(n.a)(a,e);var t=Object(c.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(b.jsx)(o.a.Fragment,{children:Object(b.jsx)(l.a,{className:"justify-content-center",children:Object(b.jsx)(d.a,{xs:"12",className:this.props.isLeft?"":"text-center",children:Object(b.jsxs)("div",{className:"section-title mb-4 pb-2",name:"maintitle",children:[Object(b.jsxs)("h4",{className:"title mb-4",name:"sectiontitle",children:[" ",this.props.title," "]}),Object(b.jsxs)("p",{className:this.props.isLeft?"text-muted para-desc mb-0":"text-muted para-desc mx-auto mb-0",name:"sectiondesc",children:[this.props.desc," "]})]})})})})}}]),a}(r.Component);t.a=m},68:function(e,t,a){"use strict";var i=a(3),s=a(4),n=a(10),c=a(9),r=a(17),o=a(0),l=a.n(o),d=a(86),b=a(89),m=a(90),j=a(79),u=a(24),h=a(1),p=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={successMsg:!1},s.handleSubmit=s.handleSubmit.bind(Object(n.a)(s)),s}return Object(s.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({successMsg:!0})}},{key:"render",value:function(){return Object(h.jsx)(l.a.Fragment,{children:Object(h.jsxs)("section",{className:"section bg-primary bg-gradient",children:[Object(h.jsx)("div",{className:"bg-overlay bg-overlay-white"}),Object(h.jsx)(d.a,{className:"position-relative",children:Object(h.jsx)(b.a,{children:Object(h.jsx)(m.a,{lg:"12",md:"12",className:"mt-4 pt-2 mt-sm-0 pt-sm-0",children:Object(h.jsxs)("div",{className:"section-title text-center text-md-start",children:[Object(h.jsx)("h1",{className:"title text-white title-dark mb-2",children:u.a.t("trial.title")}),Object(h.jsx)("p",{className:"text-light para-dark",children:u.a.t("trial.description")}),Object(h.jsx)(j.a,{type:"submit",color:"primary",className:"btn-pills",children:u.a.t("trial.button")})]})})})})]})})}}]),a}(o.Component);t.a=p},76:function(e,t,a){"use strict";var i=a(5),s=a(14),n=a(0),c=a.n(n),r=a(18),o=a.n(r),l=a(62),d=a.n(l),b=a(63),m=["className","cssModule","color","body","inverse","outline","tag","innerRef"],j={tag:b.n,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},u=function(e){var t=e.className,a=e.cssModule,n=e.color,r=e.body,o=e.inverse,l=e.outline,j=e.tag,u=e.innerRef,h=Object(s.a)(e,m),p=Object(b.j)(d()(t,"card",!!o&&"text-white",!!r&&"card-body",!!n&&(l?"border":"bg")+"-"+n),a);return c.a.createElement(j,Object(i.a)({},h,{className:p,ref:u}))};u.propTypes=j,u.defaultProps={tag:"div"},t.a=u},77:function(e,t,a){"use strict";var i=a(5),s=a(14),n=a(0),c=a.n(n),r=a(18),o=a.n(r),l=a(62),d=a.n(l),b=a(63),m=["className","cssModule","innerRef","tag"],j={tag:b.n,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},u=function(e){var t=e.className,a=e.cssModule,n=e.innerRef,r=e.tag,o=Object(s.a)(e,m),l=Object(b.j)(d()(t,"card-body"),a);return c.a.createElement(r,Object(i.a)({},o,{className:l,ref:n}))};u.propTypes=j,u.defaultProps={tag:"div"},t.a=u},78:function(e,t,a){"use strict";var i=a(3),s=a(4),n=a(9),c=a(17),r=a(0),o=a.n(r),l=a(89),d=a(90),b=a(1),m=function(e){Object(n.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={},s}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsx)(o.a.Fragment,{children:Object(b.jsx)(l.a,{children:this.props.featureArray.map((function(t,a){return Object(b.jsx)(d.a,{md:4,xs:12,name:"featurebox",children:Object(b.jsxs)("div",{className:e.props.isCenter?"features text-center":"features mt-5",children:[Object(b.jsx)("div",{className:"image position-relative d-inline-block",children:Object(b.jsx)("i",{className:t.icon})}),Object(b.jsxs)("div",{className:"content mt-4",children:[Object(b.jsx)("h5",{className:"title-2",children:t.title}),Object(b.jsx)("p",{className:"text-muted mb-0",children:t.description})]})]})},a)}))})})}}]),a}(r.Component);t.a=m},79:function(e,t,a){"use strict";var i=a(5),s=a(14),n=a(10),c=a(7),r=a(0),o=a.n(r),l=a(18),d=a.n(l),b=a(62),m=a.n(b),j=a(63),u=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],h={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:j.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},p=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(n.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],n=e.block,c=e.className,r=e.close,l=e.cssModule,d=e.color,b=e.outline,h=e.size,p=e.tag,x=e.innerRef,f=Object(s.a)(e,u);r&&"undefined"===typeof f.children&&(f.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var O="btn"+(b?"-outline":"")+"-"+d,g=Object(j.j)(m()(c,{close:r},r||"btn",r||O,!!h&&"btn-"+h,!!n&&"btn-block",{active:t,disabled:this.props.disabled}),l);f.href&&"button"===p&&(p="a");var v=r?"Close":null;return o.a.createElement(p,Object(i.a)({type:"button"===p&&f.onClick?"button":void 0},f,{className:g,ref:x,onClick:this.onClick,"aria-label":a||v}))},t}(o.a.Component);p.propTypes=h,p.defaultProps={color:"secondary",tag:"button"},t.a=p},80:function(e,t,a){"use strict";t.a=a.p+"static/media/city_banner.e5c7c1dc.png"},92:function(e,t,a){"use strict";var i=a(3),s=a(4),n=a(9),c=a(17),r=a(0),o=a.n(r),l=a(86),d=a(89),b=a(90),m=a(93),j=a(24),u=a(64),h=a(1),p=function(e){Object(n.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={},s}return Object(s.a)(a,[{key:"render",value:function(){return Object(h.jsx)(o.a.Fragment,{children:Object(h.jsx)("section",{className:"section",children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(u.a,{title:j.a.t("home.industries.title"),desc:j.a.t("home.industries.description")}),Object(h.jsxs)(d.a,{children:[Object(h.jsx)(b.a,{lg:4,md:6,className:"mt-4 pt-2",children:Object(h.jsxs)("div",{className:"d-flex key-feature align-items-center p-3 rounded shadow",children:[Object(h.jsx)("div",{className:"icon text-center rounded-circle me-3",children:Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-bold fea icon-ex-md text-primary",children:[Object(h.jsx)("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),Object(h.jsx)("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),Object(h.jsx)("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]})}),Object(h.jsx)(m.a,{body:!0,style:{paddingLeft:"20px"},children:Object(h.jsx)("h4",{className:"title mb-0",style:{color:"#000000"},children:j.a.t("home.industries.constructing")})})]})}),Object(h.jsx)(b.a,{lg:4,md:6,className:"mt-4 pt-2",children:Object(h.jsxs)("div",{className:"d-flex key-feature align-items-center p-3 rounded shadow",children:[Object(h.jsx)("div",{className:"icon text-center rounded-circle me-3",children:Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-bold fea icon-ex-md text-primary",children:[Object(h.jsx)("circle",{cx:"12",cy:"12",r:"3"}),Object(h.jsx)("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})}),Object(h.jsx)(m.a,{body:!0,style:{paddingLeft:"20px"},children:Object(h.jsx)("h4",{className:"title mb-0",style:{color:"#000000"},children:j.a.t("home.industries.manufactoring")})})]})}),Object(h.jsx)(b.a,{lg:4,md:6,className:"mt-4 pt-2",children:Object(h.jsxs)("div",{className:"d-flex key-feature align-items-center p-3 rounded shadow",children:[Object(h.jsx)("div",{className:"icon text-center rounded-circle me-3",children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-bold fea icon-ex-md text-primary",children:Object(h.jsx)("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"})})}),Object(h.jsx)(m.a,{body:!0,style:{paddingLeft:"20px"},children:Object(h.jsx)("h4",{className:"title mb-0",style:{color:"#000000"},children:j.a.t("home.industries.oilgas")})})]})}),Object(h.jsx)(b.a,{lg:4,md:6,className:"mt-4 pt-2",children:Object(h.jsxs)("div",{className:"d-flex key-feature align-items-center p-3 rounded shadow",children:[Object(h.jsx)("div",{className:"icon text-center rounded-circle me-3",children:Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-bold fea icon-ex-md text-primary",children:[Object(h.jsx)("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),Object(h.jsx)("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),Object(h.jsx)("path",{d:"M16 10a4 4 0 0 1-8 0"})]})}),Object(h.jsx)(m.a,{body:!0,style:{paddingLeft:"20px"},children:Object(h.jsx)("h4",{className:"title mb-0",style:{color:"#000000"},children:j.a.t("home.industries.courier")})})]})}),Object(h.jsx)(b.a,{lg:4,md:6,className:"mt-4 pt-2",children:Object(h.jsxs)("div",{className:"d-flex key-feature align-items-center p-3 rounded shadow",children:[Object(h.jsx)("div",{className:"icon text-center rounded-circle me-3",children:Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeinejoin:"round",className:"feather feather-git-merge fea icon-ex-md text-primary",children:[Object(h.jsx)("circle",{cx:"12",cy:"12",r:"10"}),Object(h.jsx)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),Object(h.jsx)("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]})}),Object(h.jsx)(m.a,{body:!0,style:{paddingLeft:"20px"},children:Object(h.jsx)("h4",{className:"title mb-0",style:{color:"#000000"},children:j.a.t("home.industries.landscaping")})})]})}),Object(h.jsx)(b.a,{lg:4,md:6,className:"mt-4 pt-2",children:Object(h.jsxs)("div",{className:"d-flex key-feature align-items-center p-3 rounded shadow",children:[Object(h.jsx)("div",{className:"icon text-center rounded-circle me-3",children:Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-git-merge fea icon-ex-md text-primary",children:[Object(h.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),Object(h.jsx)("circle",{cx:"12",cy:"10",r:"3"})]})}),Object(h.jsx)(m.a,{body:!0,style:{paddingLeft:"20px"},children:Object(h.jsx)("h4",{className:"title mb-0",style:{color:"#000000"},children:j.a.t("home.industries.other")})})]})})]})]})})})}}]),a}(r.Component);t.a=p},93:function(e,t,a){"use strict";var i=a(5),s=a(14),n=a(0),c=a.n(n),r=a(18),o=a.n(r),l=a(62),d=a.n(l),b=a(63),m=["body","bottom","className","cssModule","heading","left","list","middle","object","right","tag","top"],j={body:o.a.bool,bottom:o.a.bool,children:o.a.node,className:o.a.string,cssModule:o.a.object,heading:o.a.bool,left:o.a.bool,list:o.a.bool,middle:o.a.bool,object:o.a.bool,right:o.a.bool,tag:b.n,top:o.a.bool},u=function(e){var t,a=e.body,n=e.bottom,r=e.className,o=e.cssModule,l=e.heading,j=e.left,u=e.list,h=e.middle,p=e.object,x=e.right,f=e.tag,O=e.top,g=Object(s.a)(e,m);t=l?"h4":g.href?"a":g.src||p?"img":u?"ul":"div";var v=f||t,y=Object(b.j)(d()(r,{"media-body":a,"media-heading":l,"media-left":j,"media-right":x,"media-top":O,"media-bottom":n,"media-middle":h,"media-object":p,"media-list":u,media:!a&&!l&&!j&&!x&&!O&&!n&&!h&&!p&&!u}),o);return c.a.createElement(v,Object(i.a)({},g,{className:y}))};u.propTypes=j,t.a=u},94:function(e,t,a){"use strict";var i=a(3),s=a(4),n=a(9),c=a(17),r=a(0),o=a.n(r),l=a(86),d=a(24),b=a(64),m=a(78),j=a(1),u=function(e){Object(n.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={features:[{id:1,icon:"uil uil-edit-alt h1 text-primary",title:d.a.t("remoteExpert.benefits.benefit1"),description:d.a.t("remoteExpert.benefits.benefit1description")},{id:2,icon:"uil uil-vector-square h1 text-primary",title:d.a.t("remoteExpert.benefits.benefit2"),description:d.a.t("remoteExpert.benefits.benefit2description")},{id:3,icon:"uil uil-file-search-alt h1 text-primary",title:d.a.t("remoteExpert.benefits.benefit3"),description:d.a.t("remoteExpert.benefits.benefit3description")},{id:4,icon:"uil uil-airplay h1 text-primary",title:d.a.t("remoteExpert.benefits.benefit4"),description:d.a.t("remoteExpert.benefits.benefit4description")},{id:5,icon:"uil uil-calendar-alt h1 text-primary",title:d.a.t("remoteExpert.benefits.benefit5"),description:d.a.t("remoteExpert.benefits.benefit5description")},{id:6,icon:"uil uil-clock h1 text-primary",title:d.a.t("remoteExpert.benefits.benefit6"),description:d.a.t("remoteExpert.benefits.benefit6description")}]},s}return Object(s.a)(a,[{key:"render",value:function(){return Object(j.jsx)(o.a.Fragment,{children:Object(j.jsx)("section",{className:"section",children:Object(j.jsxs)(l.a,{children:[Object(j.jsx)(b.a,{title:d.a.t("remoteExpert.benefits.title"),desc:d.a.t("remoteExpert.benefits.description")}),Object(j.jsx)(m.a,{featureArray:this.state.features})]})})})}}]),a}(r.Component);t.a=u},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var i=a(3),s=a(4),n=a(9),c=a(17),r=a(0),o=a.n(r),l=a(19),d=a(86),b=a(89),m=a(90),j=a(76),u=a(77),h=a(24),p=a(64),x=a(1),f=function(e){Object(n.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={keyfeatures:[{id:1,icon:"uil uil-layer-group d-block rounded h3 mb-0",hoverIcon:"uil uil-layer-group text-primary full-img",title:h.a.t("commonComponents.givesYou.bullit1"),description:h.a.t("commonComponents.givesYou.bullit1description")},{id:2,icon:"uil uil-airplay d-block rounded h3 mb-0",hoverIcon:"uil uil-airplay text-primary full-img",title:h.a.t("commonComponents.givesYou.bullit2"),description:h.a.t("commonComponents.givesYou.bullit2description")},{id:3,icon:"uil uil-focus-target d-block rounded h3 mb-0",hoverIcon:"uil uil-focus-target text-primary full-img",title:h.a.t("commonComponents.givesYou.bullit3"),description:h.a.t("commonComponents.givesYou.bullit3description")},{id:4,icon:"uil uil-expand-arrows d-block rounded h3 mb-0",hoverIcon:"uil uil-expand-arrows text-primary full-img",title:h.a.t("commonComponents.givesYou.bullit4"),description:h.a.t("commonComponents.givesYou.bullit4description")}]},s}return Object(s.a)(a,[{key:"render",value:function(){return Object(x.jsx)(o.a.Fragment,{children:Object(x.jsx)("section",{className:"section bg-light",children:Object(x.jsxs)(d.a,{children:[Object(x.jsx)(p.a,{title:h.a.t("commonComponents.givesYou.title")}),Object(x.jsx)(b.a,{className:" align-items-center",children:this.state.keyfeatures.map((function(e,t){return Object(x.jsx)(m.a,{lg:3,md:6,className:"mt-4 pt-2",children:Object(x.jsxs)(j.a,{className:"border-0 features feature-clean course-feature p-4 overflow-hidden shadow",style:{color:"grey"},children:[Object(x.jsx)("div",{className:"icons text-primary text-center",children:Object(x.jsx)("i",{className:e.icon})}),Object(x.jsxs)(u.a,{className:"p-0 mt-4",children:[Object(x.jsx)(l.b,{to:"#",className:"title h5 text-dark",children:e.title}),Object(x.jsx)("p",{className:"text-muted mt-2",children:e.description}),Object(x.jsx)("i",{className:e.hoverIcon})]})]})},t)}))})]})})})}}]),a}(r.Component)}}]);
//# sourceMappingURL=11.7575bfd7.chunk.js.map