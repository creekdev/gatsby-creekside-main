(self.webpackChunkcreekside_logistics=self.webpackChunkcreekside_logistics||[]).push([[517],{8692:function(e,t,r){var n;n=function(e,t){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t,r){e.exports=r(5)()},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=function(e,t,r){var n=e.direction,o=e.value;switch(n){case"top":return r.top+o<t.top&&r.bottom>t.bottom&&r.left<t.left&&r.right>t.right;case"left":return r.left+o<t.left&&r.bottom>t.bottom&&r.top<t.top&&r.right>t.right;case"bottom":return r.bottom-o>t.bottom&&r.left<t.left&&r.right>t.right&&r.top<t.top;case"right":return r.right-o>t.right&&r.left<t.left&&r.top<t.top&&r.bottom>t.bottom}}},function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return g}));var n=r(1),o=r.n(n),i=r(2),a=r.n(i),l=r(0),s=r.n(l),c=r(3),u=r.n(c);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=function(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?d(e):t}(this,f(t).call(this,e)),v(d(r),"getContainer",(function(){return r.props.containment||window})),v(d(r),"addEventListener",(function(e,t,n,o){var i;r.debounceCheck||(r.debounceCheck={});var a=function(){i=null,r.check()},l={target:e,fn:o>-1?function(){i||(i=setTimeout(a,o||0))}:function(){clearTimeout(i),i=setTimeout(a,n||0)},getLastTimeout:function(){return i}};e.addEventListener(t,l.fn),r.debounceCheck[t]=l})),v(d(r),"startWatching",(function(){r.debounceCheck||r.interval||(r.props.intervalCheck&&(r.interval=setInterval(r.check,r.props.intervalDelay)),r.props.scrollCheck&&r.addEventListener(r.getContainer(),"scroll",r.props.scrollDelay,r.props.scrollThrottle),r.props.resizeCheck&&r.addEventListener(window,"resize",r.props.resizeDelay,r.props.resizeThrottle),!r.props.delayedCall&&r.check())})),v(d(r),"stopWatching",(function(){if(r.debounceCheck)for(var e in r.debounceCheck)if(r.debounceCheck.hasOwnProperty(e)){var t=r.debounceCheck[e];clearTimeout(t.getLastTimeout()),t.target.removeEventListener(e,t.fn),r.debounceCheck[e]=null}r.debounceCheck=null,r.interval&&(r.interval=clearInterval(r.interval))})),v(d(r),"check",(function(){var e,t,n=r.node;if(!n)return r.state;if(e=function(e){return void 0===e.width&&(e.width=e.right-e.left),void 0===e.height&&(e.height=e.bottom-e.top),e}(r.roundRectDown(n.getBoundingClientRect())),r.props.containment){var o=r.props.containment.getBoundingClientRect();t={top:o.top,left:o.left,bottom:o.bottom,right:o.right}}else t={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var i=r.props.offset||{};"object"===m(i)&&(t.top+=i.top||0,t.left+=i.left||0,t.bottom-=i.bottom||0,t.right-=i.right||0);var a={top:e.top>=t.top,left:e.left>=t.left,bottom:e.bottom<=t.bottom,right:e.right<=t.right},l=e.height>0&&e.width>0,s=l&&a.top&&a.left&&a.bottom&&a.right;if(l&&r.props.partialVisibility){var c=e.top<=t.bottom&&e.bottom>=t.top&&e.left<=t.right&&e.right>=t.left;"string"==typeof r.props.partialVisibility&&(c=a[r.props.partialVisibility]),s=r.props.minTopValue?c&&e.top<=t.bottom-r.props.minTopValue:c}"string"==typeof i.direction&&"number"==typeof i.value&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",i.direction,i.value),s=u()(i,e,t));var p=r.state;return r.state.isVisible!==s&&(p={isVisible:s,visibilityRect:a},r.setState(p),r.props.onChange&&r.props.onChange(s)),p})),r.state={isVisible:null,visibilityRect:{}},r}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){this.node=a.a.findDOMNode(this),this.props.active&&this.startWatching()}},{key:"componentWillUnmount",value:function(){this.stopWatching()}},{key:"componentDidUpdate",value:function(e){this.node=a.a.findDOMNode(this),this.props.active&&!e.active?(this.setState({isVisible:null,visibilityRect:{}}),this.startWatching()):this.props.active||this.stopWatching()}},{key:"roundRectDown",value:function(e){return{top:Math.floor(e.top),left:Math.floor(e.left),bottom:Math.floor(e.bottom),right:Math.floor(e.right)}}},{key:"render",value:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):o.a.Children.only(this.props.children)}}])&&p(r.prototype,n),i&&p(r,i),t}(o.a.Component);v(g,"defaultProps",{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:o.a.createElement("span",null)}),v(g,"propTypes",{onChange:s.a.func,active:s.a.bool,partialVisibility:s.a.oneOfType([s.a.bool,s.a.oneOf(["top","right","bottom","left"])]),delayedCall:s.a.bool,offset:s.a.oneOfType([s.a.shape({top:s.a.number,left:s.a.number,bottom:s.a.number,right:s.a.number}),s.a.shape({direction:s.a.oneOf(["top","right","bottom","left"]),value:s.a.number})]),scrollCheck:s.a.bool,scrollDelay:s.a.number,scrollThrottle:s.a.number,resizeCheck:s.a.bool,resizeDelay:s.a.number,resizeThrottle:s.a.number,intervalCheck:s.a.bool,intervalDelay:s.a.number,containment:"undefined"!=typeof window?s.a.instanceOf(window.Element):s.a.any,children:s.a.oneOfType([s.a.element,s.a.func]),minTopValue:s.a.number})},function(e,t,r){"use strict";var n=r(6);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])},e.exports=n(r(7294),r(3935))},3441:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(7294),o=r(9211),i=r(5616),a=r(4382),l=r(9308),s=r(8953),c=r(4320),u=r(2483),m=r(9644),p=r(3366),f=r(7462),d=r(5505),h=r(600),v=r(8267),g=r(8348),b=r(7761),y=r(2717);function x(e){return(0,y.Z)("MuiListItemAvatar",e)}(0,r(5495).Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var E=r(5893),w=["className"],Z=(0,g.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,"flex-start"===r.alignItems&&t.alignItemsFlexStart]}})((function(e){var t=e.ownerState;return(0,f.Z)({minWidth:56,flexShrink:0},"flex-start"===t.alignItems&&{marginTop:8})})),k=n.forwardRef((function(e,t){var r=(0,b.Z)({props:e,name:"MuiListItemAvatar"}),o=r.className,i=(0,p.Z)(r,w),a=n.useContext(v.Z),l=(0,f.Z)({},r,{alignItems:a.alignItems}),s=function(e){var t=e.alignItems,r=e.classes,n={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,h.Z)(n,x,r)}(l);return(0,E.jsx)(Z,(0,f.Z)({className:(0,d.Z)(s.root,o),ownerState:l,ref:t},i))})),C=r(2160),O=r(2077),S=r(7935),T=r(5985),P=r(8692),W=r.n(P);var I=r(5414),_=[{img:"icons/001-efficiency.png",title:"Efficiency",text:"Our efficient delivery service is characterized as safe, fast, accurate, cost-effective and reliable."},{img:"icons/003-speed.png",title:"Speed",text:"We offer home or office Same-day and Next-day delivery services within Port Harcourt"},{img:"icons/005-lock.png",title:"Safety",text:"We reserve the right to reverse logitics services for returned or faulty items"},{img:"icons/006-customer-service.png",title:"Service",text:"Excellent communication and interpersonal relations from our highly skilled and experienced staff and dispatch drivers"},{img:"icons/007-phone-call.png",title:"Communication",text:"Instant text notification/ Email confirmation of delivery report and enhanced security of deliveries (Signature Upon Delivery)"},{img:"icons/008-location.png",title:"Technology",text:"Use of Tech in the real-time monitoring, and tracking of parcels."},{img:"icons/009-purse.png",title:"Affordability",text:"Delivery cost from as low  ₦500 (Inc. VAT), transfer/Cash on delivery services and insurance on high-value items"}],j=function(){var e,t=n.useRef(),r=n.useState(!1),p=r[0],f=r[1],d=n.useState(0),h=d[0],v=d[1],g=n.useState(!1),b=g[0],y=g[1],x="500px";return n.useEffect((function(){return p&&!e&&(e=setInterval((function(){h>=2700?clearInterval(e):v((function(e){return Math.min(e+20,2700)}))}),1)),function(){return clearInterval(e)}}),[p]),n.useEffect((function(){y(!0)}),[]),n.createElement(n.Fragment,null,n.createElement(I.Z,null,n.createElement("title",null,"Meet Us")),n.createElement(o.Z,{sx:{bgcolor:"#bb330022",position:"relative"}},n.createElement(i.Z,null,n.createElement(a.Z,{spacing:2,direction:{xs:"column",md:"row"},sx:{pt:{xs:16,md:28},pb:{xs:28}}},n.createElement(o.Z,{sx:{width:"100%"}},n.createElement(l.Z,{variant:"h1",color:"text.primary",gutterBottom:!0},"Meet Us"),n.createElement(l.Z,{variant:"subtitle1",color:"text.secondary",gutterBottom:!0},"Creekside Logistics is a value-driven logistics service provider incorporated in November 2018, located in Port Harcourt, Rivers State, Nigeria. We are commited to ensuring individuals, business owners and government institutions measure up their logistics operations with the fast, ever-changing world. We guarantee customers remain relevant in a highly competive business environment by giving them a seamless experience with fast deliveries.")),n.createElement(o.Z,{sx:{width:"100%",p:{xs:15,sm:28,md:0}}}))),n.createElement(u.Z,{src:"/brand2.png",alt:"Front Desk photo",variant:"square",sx:{height:{xs:"100vw",md:"50vw",lg:"45vw"},width:{xs:"100vw",md:"50vw",lg:"45vw"},position:"absolute",right:0,bottom:0}})),n.createElement(o.Z,{sx:{py:{xs:16,md:28}},id:"services"},n.createElement(i.Z,null,n.createElement(l.Z,{variant:"h2",color:"text.primary",textAlign:"center",gutterBottom:!0},"Service overview"),n.createElement(l.Z,{variant:"subtitle1",color:"text.secondary",textAlign:"center",sx:{maxWidth:"65ch",mx:"auto",mb:4},gutterBottom:!0},"Our state-of-the-art office, integrated virtual platforms, professional customer service representatives and expert riders/drivers are always available and commited to serve you at all times."),n.createElement(m.Z,{sx:{mt:4,display:{sm:"none"}}},_.map((function(e,t){var r=e.img,o=e.title,i=e.text;return n.createElement(n.Fragment,{key:t},0!==t&&n.createElement(S.Z,{variant:"inset",component:"li"}),n.createElement(O.ZP,{alignItems:"flex-start"},n.createElement(k,null,n.createElement(u.Z,{variant:"square",src:r,alt:o})),n.createElement(C.Z,{primary:n.createElement(l.Z,{variant:"subtitle1",fontWeight:"bold",color:"text.secondary"},o),secondary:n.createElement(l.Z,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.secondary"},i)})))}))),n.createElement(o.Z,{sx:{mt:2,display:{xs:"none",sm:"block"}}},n.createElement(c.ZP,{container:!0,spacing:{xs:6,md:4}},_.map((function(e,t){var r=e.img,o=e.title,i=e.text;return n.createElement(c.ZP,{key:t,item:!0,xs:6,md:4,lg:3},n.createElement(s.Z,{variant:"outlined",sx:{borderRadius:6,overflow:"hidden"}},n.createElement(a.Z,{sx:{p:4,alignItems:"center",height:300}},n.createElement(u.Z,{variant:"square",src:r,alt:o,sx:{height:80,width:80,mb:2}}),n.createElement(l.Z,{variant:"h5",fontWeight:200,color:"text.primary",textAlign:"center",gutterBottom:!0},o),n.createElement(l.Z,{variant:"body2",color:"text.secondary",textAlign:"center"},i))))})))))),n.createElement(o.Z,{sx:{py:{xs:16,md:28}}},n.createElement(i.Z,null,n.createElement(l.Z,{variant:"h2",color:"text.primary",textAlign:"center",gutterBottom:!0},"Delivery Systems"),n.createElement(l.Z,{variant:"subtitle1",color:"text.secondary",textAlign:"center",sx:{maxWidth:"65ch",mx:"auto"},gutterBottom:!0},"For your optimum satisfation, Creekside Logitics has provided ranges of carriers for safe delivery of all items."),n.createElement(a.Z,{direction:{xs:"column-reverse",md:"row"},spacing:4,sx:{mt:4}},n.createElement(a.Z,{sx:{width:"100%",p:5,pb:0,mt:20}},n.createElement(l.Z,{variant:"h4",fontWeight:"bold",color:"initial",sx:{mb:2},gutterButtom:!0},"Bikes"),n.createElement(l.Z,{variant:"body2",color:"text.secondary"},"Courier services provide express deliveries of smaller parcels from one location to another with the convenience of dispatch riders.")),n.createElement(a.Z,{sx:{width:"100%",height:150,mt:0}},n.createElement("img",{src:"/bike.png",style:{weight:x,height:x,zIndex:-5,objectFit:"cover"},alt:"Bike photo"}))),n.createElement(a.Z,{direction:{xs:"column-reverse",md:"row-reverse"},spacing:4,sx:{mt:4}},n.createElement(a.Z,{sx:{width:"100%",p:5,pb:0,mt:20}},n.createElement(l.Z,{variant:"h4",fontWeight:"bold",color:"initial",sx:{mb:2},gutterButtom:!0},"Mini-van"),n.createElement(l.Z,{variant:"body2",color:"text.secondary"},"Our Mini-vans, Buses and Cars are available to deliver larger parcels of any capacity to your preferred locations anywhere in Port Harcourt. We also provide VIP transportation and Airport Pickups.")),n.createElement(a.Z,{sx:{width:"100%",height:150,mt:0}},n.createElement("img",{src:"/bus.png",style:{weight:x,height:x,objectFit:"cover"},alt:"Bus photo"}))),n.createElement(a.Z,{direction:{xs:"column-reverse",md:"row"},spacing:4,sx:{mt:4}},n.createElement(o.Z,{sx:{width:"100%",p:5,pb:0,mt:20}},n.createElement(l.Z,{variant:"h4",fontWeight:"bold",color:"initial",sx:{mb:2},gutterButtom:!0},"Haulage Services ",n.createElement(T.Z,{label:"Coming Soon",color:"primary"})),n.createElement(l.Z,{variant:"body2",color:"text.secondary"},"CS Logistics provides quality haulage and transportation services with vehicles ranging from small vans of 1.5 tons to delivery trucks of 30 tons. Our fleet is readily available, manned by a team of professional drivers commited to ensure customers satisfaction. Time-sensitve, fragile or valuable consignments are transported to any destination by vehicles of the highest specifications with fully trained and experienced staff who understand the purpose of special freight movements")),n.createElement(o.Z,{sx:{width:"100%",height:150,mt:0}})))),n.createElement(o.Z,{sx:{py:{xs:16,md:28}},id:"contact"},n.createElement(i.Z,null,n.createElement(o.Z,{sx:{color:"#fff",p:16,px:{xs:4,md:16},textAlign:"center",borderRadius:2,background:"linear-gradient(0deg, rgba(10, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(/delivery.jpg)",backgroundSize:"cover",backgroundPosition:"center top"}},n.createElement(l.Z,{variant:"h3",sx:{maxWidth:"30ch",mx:"auto"}},"With Over"," ",n.createElement(W(),{onChange:function(e){return e!==p&&e&&b&&f(!0)}},n.createElement(l.Z,{ref:t,variant:"h3",color:"primary.dark",component:"span"},h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")))," ","Successful deliveries across Port Harcourt"),n.createElement(S.Z,{sx:{mx:"auto",maxWidth:"50px",my:4,bgcolor:"#ffffffcc"}}),n.createElement(l.Z,{variant:"subtitle1",color:"primary.dark"},"Call us for your deliveries right now!!!"),n.createElement(l.Z,{variant:"h4",color:"inherit"},"+2347044455667, +2349023386404")))))}}}]);
//# sourceMappingURL=component---src-pages-meet-us-js-b32e988f239bc53260a9.js.map