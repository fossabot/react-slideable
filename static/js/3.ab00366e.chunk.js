/*! For license information please see 3.ab00366e.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-slideable-example"]=this["webpackJsonpreact-slideable-example"]||[]).push([[3],[,,,,,,,,,,function(t,e,n){"use strict";function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function l(t,e){if(t){if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,l=!1,r=void 0;try{for(var i,s=t[Symbol.iterator]();!(o=(i=s.next()).done)&&(n.push(i.value),!e||n.length!==e);o=!0);}catch(c){l=!0,r=c}finally{try{o||null==s.return||s.return()}finally{if(l)throw r}}return n}}(t,e)||l(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(e),n.d(e,"App",(function(){return X}));var i=n(0),s=n.n(i);function c(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||l(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}var d=n(11),h=n.n(d),m=n(12),v=function(){return Object(m.jsx)("svg",Object.assign({x:"0px",y:"0px",viewBox:"0 0 34.075 34.075",xmlSpace:"preserve"},{children:Object(m.jsx)("g",{children:Object(m.jsx)("g",{children:Object(m.jsx)("path",{style:{fill:"#010002"},d:"M24.57,34.075c-0.505,0-1.011-0.191-1.396-0.577L8.11,18.432c-0.771-0.771-0.771-2.019,0-2.79\n      L23.174,0.578c0.771-0.771,2.02-0.771,2.791,0s0.771,2.02,0,2.79l-13.67,13.669l13.67,13.669c0.771,\n      0.771,0.771,2.021,0,2.792 C25.58,33.883,25.075,34.075,24.57,34.075z"},void 0)},void 0)},void 0)}),void 0)},p="_styles-module__container__1Lxpd",y="_styles-module__scrollableContent__3pFBI",b="_styles-module__list__uhdz0",g="_styles-module__listItem__24rTd",w="_styles-module__emptyButton__ar2Dg",j="_styles-module__buttonContainer__tWHtY",_="_styles-module__button__2hTXI",E={480:2,768:3,1200:4,max:5},O=function(){function t(e){a(this,t),this._element=void 0,this._element=e}return f(t,[{key:"width",get:function(){var t,e;return null!=(t=null==(e=this._element)?void 0:e.clientWidth)?t:0}},{key:"showButtons",value:function(t,e,n){var o,l,r=Array.from(null!=(o=null==(l=this._element)?void 0:l.getElementsByClassName("navButton"))?o:[]);r.forEach((function(o,l){var i=l+1===r.length,s=t||i?n:e;o.style.display=s?"none":"block"}))}},{key:"hideButtons",value:function(){var t,e;Array.from(null!=(t=null==(e=this._element)?void 0:e.getElementsByClassName("navButton"))?t:[]).forEach((function(t){t.style.display="none"}))}}]),t}(),S=function(){function t(e){a(this,t),this.stepSize=0,this.scrollPosition=0,this.element=void 0,this.element=e}return f(t,[{key:"items",get:function(){var t,e;return Array.from(null!=(t=null==(e=this.element)?void 0:e.getElementsByTagName("li"))?t:[])}},{key:"current",get:function(){var t;return null==(t=this.element)?void 0:t.current}},{key:"innerList",get:function(){var t;return null==(t=this.element)?void 0:t.getElementsByTagName("ul")[0]}},{key:"width",get:function(){var t,e;return null!=(t=null==(e=this.element)?void 0:e.clientWidth)?t:0}},{key:"scrollWidth",get:function(){var t,e;return null!=(t=null==(e=this.element)?void 0:e.scrollWidth)?t:0}},{key:"updateItemsSize",value:function(t,e,n){var o=t/e-n+n/e;this.items.forEach((function(t){var e;t.style="".concat(null!=(e=t.style.cssText)?e:"","; width: ").concat(o,"px; min-width: ").concat(o,"px;")}))}},{key:"cloneElements",value:function(t){var e=this.innerList,n=this.scrollWidth-this.width,o=this.items.length<=t;if(!(!e||this.scrollPosition+this.stepSize<n&&!o)){var l=parseInt(null==e?void 0:e.dataset.current,10);e.appendChild(this.items[l].cloneNode(!0)),e.dataset.current=(l+1).toString()}}},{key:"scrollBack",value:function(t){if(this.element&&!(this.scrollPosition<0)){var e=(this.scrollPosition+this.stepSize>=this.scrollWidth?this.scrollWidth-2*this.stepSize:this.scrollPosition-this.stepSize)-t;this._scrollHorizontal(e>0?e:0)}}},{key:"scrollForward",value:function(t,e){if(this.element&&!(this.scrollPosition>this.scrollWidth)){var n=this.scrollPosition+this.stepSize>=this.scrollWidth;this._scrollHorizontal((this.scrollPosition>0?this.scrollPosition+this.stepSize:this.stepSize)+t-(n?t/e:0))}}},{key:"updateStepSize",value:function(t){this.stepSize=t,this._scrollHorizontal(0)}},{key:"_scrollHorizontal",value:function(t){var e;this.scrollPosition=t,null==(e=this.element)||e.scrollTo({left:t,behavior:"smooth"})}}]),t}(),k=function(t,e,n,o){return Object(i.useLayoutEffect)((function(){if(e&&"function"===typeof e){try{e()}catch(n){}return"string"===typeof t?(o||window).addEventListener(t,e,!1):t.forEach((function(t){return(o||window).addEventListener(t,e,!1)})),function(){return"string"===typeof t?(o||window).removeEventListener(t,e,!1):t.forEach((function(t){return(o||window).removeEventListener(t,e,!1)}))}}}),[t].concat(c(n||[])))},x=function(t,e,n){var o;return null!=n&&n.width?e[null!=(o=t.find((function(t){return n.width<=t})))?o:"max"]:0},B=function(t){var e=t.list,n=t.container,o=t.config,l=t.looped,s=t.itemsMargin,c=t.swipeable,a=t.noButtons,u=function(t){var e=t.container,n=t.config,o=Object(i.useMemo)((function(){return Object.keys(n).filter(Number).map(Number).sort((function(t,e){return t-e}))}),[n]),l=r(Object(i.useState)(x(o,n,e)),2),s=l[0],c=l[1];return k("resize",(function(){return c(x(o,n,e))}),[o,e,n]),{fitCount:s}}({container:n,config:o}),f=u.fitCount;return k("resize",e&&n&&function(){return e.updateStepSize(n.width)},[n,e]),k("scroll",l&&e&&function(){return e.cloneElements(f)},[e,l,f],null==e?void 0:e.element),k("resize",e&&n&&function(){return e.updateItemsSize(n.width,f,s)},[n,f,e,s]),function(t){var e=t.list,n=t.container,o=t.fitCount,l=t.noButtons,r=n&&e&&function(){return n.showButtons(e.items.length<=o,e.scrollPosition<=0,e.scrollPosition>=e.scrollWidth-e.stepSize)};k(["resize","scroll"],!l&&r,[l,n,o,e],null==e?void 0:e.element),k("scroll",!l&&r,[l,n,o,e]),Object(i.useLayoutEffect)((function(){e&&n&&l&&(null==n||n.hideButtons())}),[l,n,e])}({container:n,list:e,fitCount:f,noButtons:a}),function(t){var e=t.list,n=t.margin,o=t.fitCount,l=t.swipeable,r=Object(i.useRef)();k(["mousedown","touchstart"],e&&l&&function(t){var e;return r.current=t instanceof MouseEvent?t.screenX:null==(e=t.touches[0])?void 0:e.clientX},[l,o,e,n],null==e?void 0:e.element),k(["mouseup","touchend"],e&&l&&function(t){var l,i=t instanceof MouseEvent?t.screenX:null==(l=t.changedTouches[0])?void 0:l.clientX;if(null!==r.current&&void 0!==r.current&&void 0!==i){var s=r.current-i;s>0&&e.scrollForward(n,o),s<0&&e.scrollBack(n),r.current=void 0}},[l,o,e,n],null==e?void 0:e.element)}({list:e,margin:s,fitCount:f,swipeable:c}),Object(i.useMemo)((function(){return{fittedItemsCount:f,scrollBack:function(){return null==e?void 0:e.scrollBack(s)},scrollForward:function(){return null==e?void 0:e.scrollForward(s,f)}}}),[f,e,s])},C=function(t){var e=t.items,n=t.buttonsStyle,o=t.noButtons,l=void 0!==o&&o,s=t.looped,c=void 0!==s&&s,a=t.swipeable,u=void 0!==a&&a,f=t.width,d=void 0===f?"100%":f,h=t.height,k=void 0===h?"auto":h,x=t.customButtonLeft,C=t.customButtonRight,N=t.placeholderElement,T=t.itemsMargin,L=void 0===T?0:T,z=t.config,I=void 0===z?E:z,P=r(Object(i.useState)(null),2),X=P[0],A=P[1],W=r(Object(i.useState)(null),2),M=W[0],Y=W[1],F=B({list:X,container:M,itemsMargin:L,config:I,looped:c,swipeable:u,noButtons:l}),R=N?F.fittedItemsCount-e.length:0;return Object(m.jsxs)("div",Object.assign({ref:Object(i.useCallback)((function(t){return Y(new O(t))}),[]),className:p,style:{height:k,width:d,maxWidth:d}},{children:[Object(m.jsx)("div",Object.assign({className:j},{children:x?Object(m.jsx)("span",Object.assign({onClick:F.scrollBack,className:"navButton ".concat(w)},{children:x}),void 0):Object(m.jsx)("button",Object.assign({id:"button-back","aria-label":"Back",onClick:F.scrollBack,className:"navButton ".concat(w," ").concat(_),style:n},{children:Object(m.jsx)(v,{},void 0)}),void 0)}),void 0),Object(m.jsx)("div",Object.assign({ref:Object(i.useCallback)((function(t){return A(new S(t))}),[]),className:y},{children:Object(m.jsxs)("ul",Object.assign({"data-current":"0",className:b},{children:[e.map((function(t,e){return Object(m.jsx)("li",Object.assign({className:g,style:{marginRight:"".concat(L,"px")}},{children:t}),e)})),R>0&&Array.from(Array(R).keys()).map((function(t){return Object(m.jsx)("li",Object.assign({className:g,style:{marginRight:"".concat(L,"px")}},{children:N}),t)}))]}),void 0)}),void 0),Object(m.jsx)("div",Object.assign({className:j},{children:C?Object(m.jsx)("span",Object.assign({onClick:F.scrollForward,className:"navButton ".concat(w)},{children:C}),void 0):Object(m.jsx)("button",Object.assign({id:"button-right","aria-label":"Forward",onClick:F.scrollForward,className:"navButton ".concat(w," ").concat(_),style:n},{children:Object(m.jsx)(v,{},void 0)}),void 0)}),void 0)]}),void 0)},N=s.a.memo(C);h.a.polyfill();n(14);var T=function(t){var e=t.children;return s.a.createElement("div",{className:"listItem"},s.a.createElement("span",null,e))},L=function(){return s.a.createElement("div",{className:"placeholderItem"},s.a.createElement("span",null,"?"))},z=[300,600,1200,1500,"100%"],I=function(t){var e=t.width,n=t.onWidthChanged;return s.a.createElement("div",{className:"widthControl"},s.a.createElement("label",null,"List's width in pixels"),s.a.createElement("input",{type:"number",value:"100%"===e?window.innerWidth:e,onChange:function(t){var e=t.target.value;n(+e)}}),s.a.createElement("div",{className:"widthControlButtons"},z.map((function(t){return s.a.createElement("button",{key:t,onClick:(e=t,function(){return n(e)})},"100%"===t?"Full width":"".concat(t,"px"));var e}))))},P=[1,2,3,4,5,6,7,8],X=function(){var t=r(Object(i.useState)(500),2),e=t[0],n=t[1];return s.a.createElement("div",{className:"pageContainer"},s.a.createElement("h1",null,"React Slideable"),s.a.createElement("label",null,"8 elements"),s.a.createElement("div",{className:"listContainer"},s.a.createElement(N,{key:e,width:e,itemsMargin:8,items:P.map((function(t){return s.a.createElement(T,{key:t},t)}))})),s.a.createElement("label",null,"Swipeable looped 8 elements"),s.a.createElement("div",{className:"listContainer"},s.a.createElement(N,{looped:!0,swipeable:!0,key:e,width:e,itemsMargin:8,items:P.map((function(t){return s.a.createElement(T,{key:t},t)}))})),s.a.createElement("label",null,"1 element with a placeholder"),s.a.createElement("div",{className:"listContainer"},s.a.createElement(N,{key:e,width:e,placeholderElement:s.a.createElement(L,null),itemsMargin:8,items:P.slice(0,1).map((function(t){return s.a.createElement(T,{key:t},t)}))})),s.a.createElement(I,{width:e,onWidthChanged:n}))}},function(t,e,n){!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var n,o=t.HTMLElement||t.Element,l={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:o.prototype.scroll||s,scrollIntoView:o.prototype.scrollIntoView},r=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,i=(n=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?m.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):l.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!==typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?l.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!==typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):m.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var t=arguments[0].left,e=arguments[0].top;m.call(this,this,"undefined"===typeof t?this.scrollLeft:~~t,"undefined"===typeof e?this.scrollTop:~~e)}else{if("number"===typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!==typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var n=d(this),o=n.getBoundingClientRect(),r=this.getBoundingClientRect();n!==e.body?(m.call(this,n,n.scrollLeft+r.left-o.left,n.scrollTop+r.top-o.top),"fixed"!==t.getComputedStyle(n).position&&t.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else l.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(t,e){this.scrollLeft=t,this.scrollTop=e}function c(t){if(null===t||"object"!==typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"===typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function a(t,e){return"Y"===e?t.clientHeight+i<t.scrollHeight:"X"===e?t.clientWidth+i<t.scrollWidth:void 0}function u(e,n){var o=t.getComputedStyle(e,null)["overflow"+n];return"auto"===o||"scroll"===o}function f(t){var e=a(t,"Y")&&u(t,"Y"),n=a(t,"X")&&u(t,"X");return e||n}function d(t){for(;t!==e.body&&!1===f(t);)t=t.parentNode||t.host;return t}function h(e){var n,o,l,i,s=(r()-e.startTime)/468;i=s=s>1?1:s,n=.5*(1-Math.cos(Math.PI*i)),o=e.startX+(e.x-e.startX)*n,l=e.startY+(e.y-e.startY)*n,e.method.call(e.scrollable,o,l),o===e.x&&l===e.y||t.requestAnimationFrame(h.bind(t,e))}function m(n,o,i){var c,a,u,f,d=r();n===e.body?(c=t,a=t.scrollX||t.pageXOffset,u=t.scrollY||t.pageYOffset,f=l.scroll):(c=n,a=n.scrollLeft,u=n.scrollTop,f=s),h({scrollable:c,method:f,startTime:d,startX:a,startY:u,x:o,y:i})}}}}()},function(t,e,n){"use strict";t.exports=n(13)},function(t,e,n){"use strict";n(2);var o=n(0),l=60103;if(e.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var r=Symbol.for;l=r("react.element"),e.Fragment=r("react.fragment")}var i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function a(t,e,n){var o,r={},a=null,u=null;for(o in void 0!==n&&(a=""+n),void 0!==e.key&&(a=""+e.key),void 0!==e.ref&&(u=e.ref),e)s.call(e,o)&&!c.hasOwnProperty(o)&&(r[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps)void 0===r[o]&&(r[o]=e[o]);return{$$typeof:l,type:t,key:a,ref:u,props:r,_owner:i.current}}e.jsx=a,e.jsxs=a},function(t,e,n){}]]);
//# sourceMappingURL=3.ab00366e.chunk.js.map