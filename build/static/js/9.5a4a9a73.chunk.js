(this.webpackJsonpInpres=this.webpackJsonpInpres||[]).push([[9],{134:function(e,t,a){"use strict";var s=a(5),n=a(14),i=a(0),o=a.n(i),c=a(18),r=a.n(c),l=a(62),d=a.n(l),p=a(63),u=["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"],m={tag:p.n,wrapTag:p.n,toggle:r.a.func,className:r.a.string,cssModule:r.a.object,children:r.a.node,closeAriaLabel:r.a.string,charCode:r.a.oneOfType([r.a.string,r.a.number]),close:r.a.object},h=function(e){var t,a=e.className,i=e.cssModule,c=e.children,r=e.toggle,l=e.tag,m=e.wrapTag,h=e.closeAriaLabel,b=e.charCode,j=e.close,O=Object(n.a)(e,u),f=Object(p.j)(d()(a,"modal-header"),i);if(!j&&r){var g="number"===typeof b?String.fromCharCode(b):b;t=o.a.createElement("button",{type:"button",onClick:r,className:Object(p.j)("close",i),"aria-label":h},o.a.createElement("span",{"aria-hidden":"true"},g))}return o.a.createElement(m,Object(s.a)({},O,{className:f}),o.a.createElement(l,{className:Object(p.j)("modal-title",i)},c),j||t)};h.propTypes=m,h.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=h},135:function(e,t,a){"use strict";var s=a(5),n=a(14),i=a(0),o=a.n(i),c=a(18),r=a.n(c),l=a(62),d=a.n(l),p=a(63),u=["className","cssModule","tag"],m={tag:p.n,className:r.a.string,cssModule:r.a.object},h=function(e){var t=e.className,a=e.cssModule,i=e.tag,c=Object(n.a)(e,u),r=Object(p.j)(d()(t,"modal-body"),a);return o.a.createElement(i,Object(s.a)({},c,{className:r}))};h.propTypes=m,h.defaultProps={tag:"div"},t.a=h},136:function(e,t,a){"use strict";var s=a(5),n=a(14),i=a(0),o=a.n(i),c=a(18),r=a.n(c),l=a(62),d=a.n(l),p=a(63),u=["className","cssModule","row","disabled","check","inline","tag"],m={children:r.a.node,row:r.a.bool,check:r.a.bool,inline:r.a.bool,disabled:r.a.bool,tag:p.n,className:r.a.string,cssModule:r.a.object},h=function(e){var t=e.className,a=e.cssModule,i=e.row,c=e.disabled,r=e.check,l=e.inline,m=e.tag,h=Object(n.a)(e,u),b=Object(p.j)(d()(t,!!i&&"row",r?"form-check":"form-group",!(!r||!l)&&"form-check-inline",!(!r||!c)&&"disabled"),a);return"fieldset"===m&&(h.disabled=c),o.a.createElement(m,Object(s.a)({},h,{className:b}))};h.propTypes=m,h.defaultProps={tag:"div"},t.a=h},171:function(e,t,a){"use strict";var s=a(20),n=a(5),i=a(10),o=a(7),c=a(0),r=a.n(c),l=a(18),d=a.n(l),p=a(62),u=a.n(p),m=a(28),h=a.n(m),b=a(63),j={children:d.a.node.isRequired,node:d.a.any},O=function(e){function t(){return e.apply(this,arguments)||this}Object(o.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return b.c?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),h.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(r.a.Component);O.propTypes=j;var f=O,g=a(97);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function N(){}var y=d.a.shape(g.a.propTypes),k={isOpen:d.a.bool,autoFocus:d.a.bool,centered:d.a.bool,scrollable:d.a.bool,size:d.a.string,toggle:d.a.func,keyboard:d.a.bool,role:d.a.string,labelledBy:d.a.string,backdrop:d.a.oneOfType([d.a.bool,d.a.oneOf(["static"])]),onEnter:d.a.func,onExit:d.a.func,onOpened:d.a.func,onClosed:d.a.func,children:d.a.node,className:d.a.string,wrapClassName:d.a.string,modalClassName:d.a.string,backdropClassName:d.a.string,contentClassName:d.a.string,external:d.a.node,fade:d.a.bool,cssModule:d.a.object,zIndex:d.a.oneOfType([d.a.number,d.a.string]),backdropTransition:y,modalTransition:y,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func]),unmountOnClose:d.a.bool,returnFocusAfterClose:d.a.bool,container:b.o,trapFocus:d.a.bool},C=Object.keys(k),w={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:N,onClosed:N,modalTransition:{timeout:b.b.Modal},backdropTransition:{mountOnEnter:!0,timeout:b.b.Fade},unmountOnClose:!0,returnFocusAfterClose:!0,container:"body",trapFocus:!1},E=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(i.a)(a)),a.handleBackdropClick=a.handleBackdropClick.bind(Object(i.a)(a)),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(i.a)(a)),a.handleEscape=a.handleEscape.bind(Object(i.a)(a)),a.handleStaticBackdropAnimation=a.handleStaticBackdropAnimation.bind(Object(i.a)(a)),a.handleTab=a.handleTab.bind(Object(i.a)(a)),a.onOpened=a.onOpened.bind(Object(i.a)(a)),a.onClosed=a.onClosed.bind(Object(i.a)(a)),a.manageFocusAfterClose=a.manageFocusAfterClose.bind(Object(i.a)(a)),a.clearBackdropAnimationTimeout=a.clearBackdropAnimationTimeout.bind(Object(i.a)(a)),a.trapFocus=a.trapFocus.bind(Object(i.a)(a)),a.state={isOpen:!1,showStaticBackdropAnimation:!1},a}Object(o.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.props,t=e.isOpen,a=e.autoFocus,s=e.onEnter;t&&(this.init(),this.setState({isOpen:!0}),a&&this.setFocus()),s&&s(),document.addEventListener("focus",this.trapFocus,!0),this._isMounted=!0},a.componentDidUpdate=function(e,t){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),(this.props.isOpen||this.state.isOpen)&&this.close()),document.removeEventListener("focus",this.trapFocus,!0),this._isMounted=!1},a.trapFocus=function(e){if(this.props.trapFocus&&this._element&&(!this._dialog||this._dialog.parentNode!==e.target)&&!(this.modalIndex<t.openCount-1)){for(var a=this.getFocusableChildren(),s=0;s<a.length;s++)if(a[s]===e.target)return;a.length>0&&(e.preventDefault(),e.stopPropagation(),a[0].focus())}},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||N)(e,t)},a.onClosed=function(e){var t=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||N)(e),t&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(b.e.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){e.stopPropagation();var t=this._dialog?this._dialog.parentNode:null;if(t&&e.target===t&&"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which&&!(this.modalIndex<t.openCount-1)){var a=this.getFocusableChildren(),s=a.length;if(0!==s){for(var n=this.getFocusedChild(),i=0,o=0;o<s;o+=1)if(a[o]===n){i=o;break}e.shiftKey&&0===i?(e.preventDefault(),a[s-1].focus()):e.shiftKey||i!==s-1||(e.preventDefault(),a[0].focus())}}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&e.keyCode===b.i.esc&&this.props.toggle&&(this.props.keyboard?(e.preventDefault(),e.stopPropagation(),this.props.toggle(e)):"static"===this.props.backdrop&&(e.preventDefault(),e.stopPropagation(),this.handleStaticBackdropAnimation()))},a.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout((function(){e.setState({showStaticBackdropAnimation:!1})}),100)},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._mountContainer=Object(b.g)(this.props.container),this._mountContainer.appendChild(this._element)),this._originalBodyPadding=Object(b.f)(),Object(b.d)(),0===t.openCount&&(document.body.className=u()(document.body.className,Object(b.j)("modal-open",this.props.cssModule))),this.modalIndex=t.openCount,t.openCount+=1},a.destroy=function(){this._element&&(this._mountContainer.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},a.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},a.close=function(){if(t.openCount<=1){var e=Object(b.j)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}this.manageFocusAfterClose(),t.openCount=Math.max(0,t.openCount-1),Object(b.m)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(b.k)(this.props,C),s="modal-dialog";return r.a.createElement("div",Object(n.a)({},a,{className:Object(b.j)(u()(s,this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e["modal-dialog-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),r.a.createElement("div",{className:Object(b.j)(u()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var t=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=t?"none":"block";var a=this.props,s=a.wrapClassName,i=a.modalClassName,o=a.backdropClassName,c=a.cssModule,l=a.isOpen,d=a.backdrop,p=a.role,m=a.labelledBy,h=a.external,j=a.innerRef,O={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":m,role:p,tabIndex:"-1"},x=this.props.fade,N=v(v(v({},g.a.defaultProps),this.props.modalTransition),{},{baseClass:x?this.props.modalTransition.baseClass:"",timeout:x?this.props.modalTransition.timeout:0}),y=v(v(v({},g.a.defaultProps),this.props.backdropTransition),{},{baseClass:x?this.props.backdropTransition.baseClass:"",timeout:x?this.props.backdropTransition.timeout:0}),k=d&&(x?r.a.createElement(g.a,Object(n.a)({},y,{in:l&&!!d,cssModule:c,className:Object(b.j)(u()("modal-backdrop",o),c)})):r.a.createElement("div",{className:Object(b.j)(u()("modal-backdrop","show",o),c)}));return r.a.createElement(f,{node:this._element},r.a.createElement("div",{className:Object(b.j)(s)},r.a.createElement(g.a,Object(n.a)({},O,N,{in:l,onEntered:this.onOpened,onExited:this.onClosed,cssModule:c,className:Object(b.j)(u()("modal",i,this.state.showStaticBackdropAnimation&&"modal-static"),c),innerRef:j}),h,this.renderModalDialog()),k))}return null},a.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},t}(r.a.Component);E.propTypes=k,E.defaultProps=w,E.openCount=0;t.a=E},190:function(e,t,a){"use strict";a.r(t);var s=a(3),n=a(4),i=a(9),o=a(17),c=a(0),r=a.n(c),l=a(69),d=a.n(l),p=(a(70),a(68)),u=a(86),m=a(89),h=a(90),b=a(74),j=a(67),O=a(24),f=a(1),g=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={features:[{title:O.a.t("locationtracking.routes.bullit1")},{title:O.a.t("locationtracking.routes.bullit2")},{title:O.a.t("locationtracking.routes.bullit3")}]},n}return Object(n.a)(a,[{key:"render",value:function(){return Object(f.jsx)(r.a.Fragment,{children:Object(f.jsx)(u.a,{className:"mt-100 mt-60",children:Object(f.jsxs)(m.a,{className:"align-items-center",children:[Object(f.jsx)(h.a,{lg:6,md:6,children:Object(f.jsx)("img",{src:b.a,className:"img-fluid shadow rounded",alt:""})}),Object(f.jsx)(h.a,{lg:6,md:6,className:"mt-4 mt-sm-0 pt-2 pt-sm-0",children:Object(f.jsx)("div",{className:"section-title ms-lg-5",children:Object(f.jsx)(j.a,{title:O.a.t("locationtracking.routes.title"),desc:O.a.t("locationtracking.routes.description"),features:this.state.features,class:""})})})]})})})}}]),a}(c.Component),x=a(10),v=a(171),N=a(134),y=a(135),k=a(174),C=a(136),w=a(175),E=a(176),T=a(79),_=a(75),F=a.n(_),M=a(64),A=a(73),B=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).openModal=function(){n.setState({isOpen:!n.state.isOpen})},n.state={processes:[{id:1,title:"Discuss The Project",desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",link:"#"},{id:2,title:"Develop & Elaborate",desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",link:"#"},{id:3,title:"Final Approvement",desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",link:"#"}],works:[],isOpen:!1},n.openModal.bind(Object(x.a)(n)),n}return Object(n.a)(a,[{key:"render",value:function(){return Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsx)("section",{className:"section",children:Object(f.jsxs)(u.a,{children:[Object(f.jsx)(M.a,{title:"Work Process",desc:"that can provide everything you need to generate awareness, drive traffic, connect"}),Object(f.jsx)(m.a,{children:Object(f.jsx)(A.a,{processes:this.state.processes})})]})}),Object(f.jsxs)(v.a,{isOpen:this.state.isOpen,role:"dialog",centered:!0,children:[Object(f.jsx)(N.a,{toggle:this.openModal,children:"15 Days Free Trail"}),Object(f.jsx)(y.a,{children:Object(f.jsx)("div",{className:"bg-white p-3 rounded box-shadow",children:Object(f.jsx)(k.a,{children:Object(f.jsxs)(m.a,{children:[Object(f.jsx)(h.a,{lg:12,children:Object(f.jsxs)(C.a,{className:"position-relative",children:[Object(f.jsxs)(w.a,{className:"form-label",children:["Name : ",Object(f.jsx)("span",{className:"text-danger",children:"*"})]}),Object(f.jsx)("i",{children:Object(f.jsx)(F.a,{icon:"user",className:"fea icon-sm icons"})}),Object(f.jsx)(E.a,{type:"text",className:"form-control ps-5",placeholder:"Name",name:"name",required:""})]})}),Object(f.jsx)(h.a,{lg:12,children:Object(f.jsxs)(C.a,{className:"position-relative",children:[Object(f.jsxs)(w.a,{className:"form-label",children:["Email : ",Object(f.jsx)("span",{className:"text-danger",children:"*"})]}),Object(f.jsx)("i",{children:Object(f.jsx)(F.a,{icon:"mail",className:"fea icon-sm icons"})}),Object(f.jsx)(E.a,{type:"email",className:"form-control ps-5",placeholder:"Email",name:"email",required:""})]})}),Object(f.jsx)(h.a,{lg:12,children:Object(f.jsxs)(C.a,{className:"position-relative",children:[Object(f.jsxs)(w.a,{className:"form-label",children:["Password : ",Object(f.jsx)("span",{className:"text-danger",children:"*"})]}),Object(f.jsx)("i",{children:Object(f.jsx)(F.a,{icon:"lock",className:"fea icon-sm icons"})}),Object(f.jsx)(E.a,{type:"password",className:"form-control ps-5",placeholder:"Password",required:""})]})}),Object(f.jsx)(h.a,{lg:12,className:"mt-2 mb-0",children:Object(f.jsx)(T.a,{color:"primary",block:!0,children:"Login"})})]})})})})]})]})}}]),a}(c.Component),P=(a(71),a(98)),D=a(99),S=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return Object(f.jsx)(r.a.Fragment,{children:Object(f.jsx)("section",{className:"bg-home d-flex align-items-center",style:{background:"url(".concat(P.a,")"),backgroundPosition:"center center",height:"auto"},id:"home",children:Object(f.jsx)(u.a,{children:Object(f.jsx)(m.a,{className:"justify-content-center",children:Object(f.jsxs)(h.a,{lg:"12",className:"text-center mt-0 mt-md-5 pt-0 pt-md-5",children:[Object(f.jsxs)("div",{className:"title-heading margin-top-100",children:[Object(f.jsx)("h1",{className:"heading mb-3",children:O.a.t("onlineTimesheet.main.title")}),Object(f.jsx)("p",{className:"para-desc mx-auto text-muted",children:O.a.t("onlineTimesheet.main.description")})]}),Object(f.jsx)("div",{className:"home-dashboard",children:Object(f.jsx)("img",{src:D.a,alt:"",className:"img-fluid"})})]})})})})})}}]),a}(c.Component),I=S,L=a(65);document.title=O.a.t("company.pagetitle"),L.a.initialize("G-PSG8RPDW3G"),document.title=O.a.t("pageNames.name")+" - "+O.a.t("pageNames.timeTracking");var z=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e,n){var i;return Object(s.a)(this,a),(i=t.call(this,e,n)).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky")},d.a.init(),i}return Object(n.a)(a,[{key:"componentDidMount",value:function(){d.a.refresh(),document.getElementById("top-menu").classList.add("nav-dark"),document.body.classList="",window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsx)(I,{}),Object(f.jsx)(B,{}),Object(f.jsx)(p.a,{}),Object(f.jsx)(g,{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{})]})}}]),a}(c.Component);t.default=z},64:function(e,t,a){"use strict";var s=a(3),n=a(4),i=a(9),o=a(17),c=a(0),r=a.n(c),l=a(89),d=a(90),p=a(1),u=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)(l.a,{className:"justify-content-center",children:Object(p.jsx)(d.a,{xs:"12",className:this.props.isLeft?"":"text-center",children:Object(p.jsxs)("div",{className:"section-title mb-4 pb-2",name:"maintitle",children:[Object(p.jsxs)("h4",{className:"title mb-4",name:"sectiontitle",children:[" ",this.props.title," "]}),Object(p.jsxs)("p",{className:this.props.isLeft?"text-muted para-desc mb-0":"text-muted para-desc mx-auto mb-0",name:"sectiondesc",children:[this.props.desc," "]})]})})})})}}]),a}(c.Component);t.a=u},67:function(e,t,a){"use strict";var s=a(3),n=a(4),i=a(9),o=a(17),c=a(0),r=a.n(c),l=a(1),d=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var e=this;return Object(l.jsxs)(r.a.Fragment,{children:[this.props.children?this.props.children:Object(l.jsx)("h4",{className:"title mb-4",children:this.props.title}),Object(l.jsxs)("p",{className:"text-muted",children:[" ",this.props.desc," "]}),Object(l.jsx)("ul",{className:"list-unstyled feature-list text-muted",name:"featurelines",children:this.props.features.map((function(t,a){return Object(l.jsxs)("li",{className:"mb-0",children:[Object(l.jsx)("span",{className:"text-primary h5 mr-2",children:Object(l.jsx)("i",{className:"uil uil-check-circle align-middle"+e.props.class})}),t.title]},a)}))})]})}}]),a}(c.Component);t.a=d},68:function(e,t,a){"use strict";var s=a(3),n=a(4),i=a(10),o=a(9),c=a(17),r=a(0),l=a.n(r),d=a(86),p=a(89),u=a(90),m=a(79),h=a(24),b=a(1),j=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={successMsg:!1},n.handleSubmit=n.handleSubmit.bind(Object(i.a)(n)),n}return Object(n.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({successMsg:!0})}},{key:"render",value:function(){return Object(b.jsx)(l.a.Fragment,{children:Object(b.jsxs)("section",{className:"section bg-primary bg-gradient",children:[Object(b.jsx)("div",{className:"bg-overlay bg-overlay-white"}),Object(b.jsx)(d.a,{className:"position-relative",children:Object(b.jsx)(p.a,{children:Object(b.jsx)(u.a,{lg:"12",md:"12",className:"mt-4 pt-2 mt-sm-0 pt-sm-0",children:Object(b.jsxs)("div",{className:"section-title text-center text-md-start",children:[Object(b.jsx)("h1",{className:"title text-white title-dark mb-2",children:h.a.t("trial.title")}),Object(b.jsx)("p",{className:"text-light para-dark",children:h.a.t("trial.description")}),Object(b.jsx)(m.a,{type:"submit",color:"primary",className:"btn-pills",children:h.a.t("trial.button")})]})})})})]})})}}]),a}(r.Component);t.a=j},73:function(e,t,a){"use strict";var s=a(3),n=a(4),i=a(9),o=a(17),c=a(0),r=a.n(c),l=a(90),d=a(76),p=a(77),u=a(1),m=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var e=this.props.processes.length;return Object(u.jsx)(r.a.Fragment,{children:this.props.processes.map((function(t,a){return Object(u.jsx)(l.a,{md:"4",className:"mt-4 pt-2",children:Object(u.jsx)(d.a,{className:"work-process border-0 rounded shadow",children:Object(u.jsxs)(p.a,{children:[Object(u.jsx)("h4",{className:"title",children:t.title}),Object(u.jsx)("p",{className:"text-muted para",children:t.desc}),Object(u.jsxs)("ul",{className:"list-unstyled d-flex justify-content-between mb-0 mt-2",children:[Object(u.jsxs)("li",{className:"step h1 mb-0 font-weight-bold",children:["Step ",a+1,"."]}),Object(u.jsx)("li",{className:"step-icon",children:Object(u.jsx)("i",{className:a+1===e?"mdi mdi-check-all mdi-36px":"mdi mdi-chevron-double-right mdi-36px"})})]})]})})},a)}))})}}]),a}(c.Component);t.a=m},74:function(e,t,a){"use strict";t.a=a.p+"static/media/classic02.2399a891.png"},79:function(e,t,a){"use strict";var s=a(5),n=a(14),i=a(10),o=a(7),c=a(0),r=a.n(c),l=a(18),d=a.n(l),p=a(62),u=a.n(p),m=a(63),h=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],b={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:m.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},j=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(i.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],i=e.block,o=e.className,c=e.close,l=e.cssModule,d=e.color,p=e.outline,b=e.size,j=e.tag,O=e.innerRef,f=Object(n.a)(e,h);c&&"undefined"===typeof f.children&&(f.children=r.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(p?"-outline":"")+"-"+d,x=Object(m.j)(u()(o,{close:c},c||"btn",c||g,!!b&&"btn-"+b,!!i&&"btn-block",{active:t,disabled:this.props.disabled}),l);f.href&&"button"===j&&(j="a");var v=c?"Close":null;return r.a.createElement(j,Object(s.a)({type:"button"===j&&f.onClick?"button":void 0},f,{className:x,ref:O,onClick:this.onClick,"aria-label":a||v}))},t}(r.a.Component);j.propTypes=b,j.defaultProps={color:"secondary",tag:"button"},t.a=j},98:function(e,t,a){"use strict";t.a=a.p+"static/media/home-shape.2c2a6ab1.png"},99:function(e,t,a){"use strict";t.a=a.p+"static/media/home.039a29fb.png"}}]);
//# sourceMappingURL=9.5a4a9a73.chunk.js.map