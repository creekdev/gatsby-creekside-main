"use strict";(self.webpackChunkcreekside_logistics=self.webpackChunkcreekside_logistics||[]).push([[329],{8761:function(e,t,n){var r=n(5318);t.Z=void 0;var o=r(n(2174)),i=n(5893),a=(0,o.default)((0,i.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");t.Z=a},9590:function(e,t,n){var r=n(5318);t.Z=void 0;var o=r(n(2174)),i=n(5893),a=(0,o.default)((0,i.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=a},9950:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var r=n(7294),o=n(5616),i=n(9211),a=n(9308),s=n(4382),u=n(9644),l=n(2077),c=n(2160),d=n(4942),m=n(3366),p=n(7462),f=n(5505),h=n(1423),v=n(600),y=n(8348),w=n(2371),g=n(4584),E=n(615),x=n(6449),Z=n(5973),C=n(2717);function S(e){return(0,C.Z)("MuiCollapse",e)}(0,n(5495).Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var b=n(5893),k=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],q=(0,y.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.orientation],"entered"===n.state&&t.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&t.hidden]}})((function(e){var t=e.theme,n=e.ownerState;return(0,p.Z)({height:0,overflow:"hidden",transition:t.transitions.create("height")},"horizontal"===n.orientation&&{height:"auto",width:0,transition:t.transitions.create("width")},"entered"===n.state&&(0,p.Z)({height:"auto",overflow:"visible"},"horizontal"===n.orientation&&{width:"auto"}),"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&{visibility:"hidden"})})),I=(0,y.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:function(e,t){return t.wrapper}})((function(e){var t=e.ownerState;return(0,p.Z)({display:"flex",width:"100%"},"horizontal"===t.orientation&&{width:"auto",height:"100%"})})),z=(0,y.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:function(e,t){return t.wrapperInner}})((function(e){var t=e.ownerState;return(0,p.Z)({width:"100%"},"horizontal"===t.orientation&&{width:"auto",height:"100%"})})),D=r.forwardRef((function(e,t){var n=(0,w.Z)({props:e,name:"MuiCollapse"}),o=n.addEndListener,i=n.children,a=n.className,s=n.collapsedSize,u=void 0===s?"0px":s,l=n.component,c=n.easing,y=n.in,C=n.onEnter,D=n.onEntered,R=n.onEntering,M=n.onExit,F=n.onExited,O=n.onExiting,P=n.orientation,T=void 0===P?"vertical":P,A=n.style,H=n.timeout,W=void 0===H?g.x9.standard:H,j=n.TransitionComponent,N=void 0===j?h.ZP:j,Y=(0,m.Z)(n,k),L=(0,p.Z)({},n,{orientation:T,collapsedSize:u}),B=function(e){var t=e.orientation,n=e.classes,r={root:["root","".concat(t)],entered:["entered"],hidden:["hidden"],wrapper:["wrapper","".concat(t)],wrapperInner:["wrapperInner","".concat(t)]};return(0,v.Z)(r,S,n)}(L),Q=(0,x.Z)(),_=r.useRef(),U=r.useRef(null),G=r.useRef(),J="number"==typeof u?"".concat(u,"px"):u,K="horizontal"===T,V=K?"width":"height";r.useEffect((function(){return function(){clearTimeout(_.current)}}),[]);var X=r.useRef(null),$=(0,Z.Z)(t,X),ee=function(e){return function(t){if(e){var n=X.current;void 0===t?e(n):e(n,t)}}},te=function(){return U.current?U.current[K?"clientWidth":"clientHeight"]:0},ne=ee((function(e,t){U.current&&K&&(U.current.style.position="absolute"),e.style[V]=J,C&&C(e,t)})),re=ee((function(e,t){var n=te();U.current&&K&&(U.current.style.position="");var r=(0,E.C)({style:A,timeout:W,easing:c},{mode:"enter"}),o=r.duration,i=r.easing;if("auto"===W){var a=Q.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(a,"ms"),G.current=a}else e.style.transitionDuration="string"==typeof o?o:"".concat(o,"ms");e.style[V]="".concat(n,"px"),e.style.transitionTimingFunction=i,R&&R(e,t)})),oe=ee((function(e,t){e.style[V]="auto",D&&D(e,t)})),ie=ee((function(e){e.style[V]="".concat(te(),"px"),M&&M(e)})),ae=ee(F),se=ee((function(e){var t=te(),n=(0,E.C)({style:A,timeout:W,easing:c},{mode:"exit"}),r=n.duration,o=n.easing;if("auto"===W){var i=Q.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(i,"ms"),G.current=i}else e.style.transitionDuration="string"==typeof r?r:"".concat(r,"ms");e.style[V]=J,e.style.transitionTimingFunction=o,O&&O(e)}));return(0,b.jsx)(N,(0,p.Z)({in:y,onEnter:ne,onEntered:oe,onEntering:re,onExit:ie,onExited:ae,onExiting:se,addEndListener:function(e){"auto"===W&&(_.current=setTimeout(e,G.current||0)),o&&o(X.current,e)},nodeRef:X,timeout:"auto"===W?null:W},Y,{children:function(e,t){return(0,b.jsx)(q,(0,p.Z)({as:l,className:(0,f.Z)(B.root,a,{entered:B.entered,exited:!y&&"0px"===J&&B.hidden}[e]),style:(0,p.Z)((0,d.Z)({},K?"minWidth":"minHeight",J),A),ownerState:(0,p.Z)({},L,{state:e}),ref:$},t,{children:(0,b.jsx)(I,{ownerState:(0,p.Z)({},L,{state:e}),className:B.wrapper,ref:U,children:(0,b.jsx)(z,{ownerState:(0,p.Z)({},L,{state:e}),className:B.wrapperInner,children:i})})}))}}))}));D.muiSupportAuto=!0;var R=D,M=n(7935),F=n(8761),O=n(9590),P=n(5414),T=[{section:"Delivery",details:[{question:"How do I book a rider?",answer:"Contact our Customer Service Officer (CSO) on one of our contact channels and supply the following information - Pickup address & phone number, Drop off address & phone number and Payment information."},{question:"How many minutes does delivery take?",answer:"Depends on the location but usually within 45 minutes."},{question:"Is delivery within Rivers or just Port Harcourt?",answer:"Yes, we also offer delivery services within the city of Benin."},{question:"Do you deliver fragile products?",answer:"Yes and we deliver efficiently."},{question:"What are your mode of transportation?",answer:"We make deliveries using bikes and mini-buses."},{question:"Can I send an assigned rider on an extra delivery?",answer:"No, all transactions must be made through the Customer Service Officer (CSO) cahnnels."}]},{section:"Contact",details:[{question:"How do I contact you?",answer:"You can Call, Whatsapp, Send a Telegram or SMS Text to any of our Customer Service Officer (CSO) contacts on -  07044455667, 09023386404. You can also send a DM to any of our social media platforms."},{question:"Can I book a delivery via WhatsApp?",answer:"Yes, you can also do so via other social media platforms like Telegram, Facebook and Instagram."}]},{section:"Payment",details:[{question:"Do you accept transfers?",answer:"Yes, we also have USSD codes for payment transactions."},{question:"Can I pay on delivery?",answer:"Yes you can."},{question:"Can I pay your Riders cash?",answer:"No, all transactions must be done with the Customer Service Officer (CSO) channel."}]}],A=function(e){var t=e.question,n=e.answer,o=r.useState(!1),s=o[0],u=o[1],d=s?F.Z:O.Z;return r.createElement(r.Fragment,null,r.createElement(l.ZP,{button:!0,onClick:function(){return u(!s)}},r.createElement(c.Z,{primary:t}),r.createElement(d,{sx:{color:"grey.400"}})),r.createElement(R,{in:s,timeout:"auto",unmountOnExit:!0},r.createElement(i.Z,{p:2,pb:4},r.createElement(a.Z,{variant:"body2",color:"text.secondary"},n))))},H=function(){return r.createElement(r.Fragment,null,r.createElement(P.q,null,r.createElement("title",null,"Frequently Asked Questions (FAQs)")),r.createElement(o.Z,null,r.createElement(i.Z,{sx:{py:{xs:16,md:28}}},r.createElement(a.Z,{variant:"h1",color:"initial",sx:{textAlign:{xs:"left",md:"center"}},gutterBottom:!0},"FAQs"),r.createElement(i.Z,{pt:8},T.map((function(e,t){var n=e.section,o=e.details;return r.createElement(r.Fragment,{key:t},0!==t&&r.createElement(M.Z,{sx:{my:4}}),r.createElement(s.Z,{direction:{xs:"column",md:"row"},spacing:1},r.createElement(a.Z,{variant:"h4",color:"initial",gutterBottom:!0,sx:{width:"100%"}},n),r.createElement(u.Z,{sx:{width:"100%"}},o.map((function(e,t){return r.createElement(A,e)})))))}))))))}}}]);
//# sourceMappingURL=component---src-pages-faq-js-b61161b63d55db37231f.js.map