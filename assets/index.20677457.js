function N0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var O0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ul(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var A={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qr=Symbol.for("react.element"),M0=Symbol.for("react.portal"),R0=Symbol.for("react.fragment"),L0=Symbol.for("react.strict_mode"),D0=Symbol.for("react.profiler"),I0=Symbol.for("react.provider"),F0=Symbol.for("react.context"),V0=Symbol.for("react.forward_ref"),b0=Symbol.for("react.suspense"),A0=Symbol.for("react.memo"),j0=Symbol.for("react.lazy"),Za=Symbol.iterator;function U0(e){return e===null||typeof e!="object"?null:(e=Za&&e[Za]||e["@@iterator"],typeof e=="function"?e:null)}var Mc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rc=Object.assign,Lc={};function qn(e,t,n){this.props=e,this.context=t,this.refs=Lc,this.updater=n||Mc}qn.prototype.isReactComponent={};qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Dc(){}Dc.prototype=qn.prototype;function Bl(e,t,n){this.props=e,this.context=t,this.refs=Lc,this.updater=n||Mc}var Wl=Bl.prototype=new Dc;Wl.constructor=Bl;Rc(Wl,qn.prototype);Wl.isPureReactComponent=!0;var qa=Array.isArray,Ic=Object.prototype.hasOwnProperty,Yl={current:null},Fc={key:!0,ref:!0,__self:!0,__source:!0};function Vc(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Ic.call(t,r)&&!Fc.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:qr,type:e,key:i,ref:s,props:o,_owner:Yl.current}}function B0(e,t){return{$$typeof:qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hl(e){return typeof e=="object"&&e!==null&&e.$$typeof===qr}function W0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ja=/\/+/g;function ss(e,t){return typeof e=="object"&&e!==null&&e.key!=null?W0(""+e.key):t.toString(36)}function No(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case qr:case M0:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+ss(s,0):r,qa(o)?(n="",e!=null&&(n=e.replace(Ja,"$&/")+"/"),No(o,t,n,"",function(u){return u})):o!=null&&(Hl(o)&&(o=B0(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Ja,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",qa(e))for(var l=0;l<e.length;l++){i=e[l];var a=r+ss(i,l);s+=No(i,t,n,a,o)}else if(a=U0(e),typeof a=="function")for(e=a.call(e),l=0;!(i=e.next()).done;)i=i.value,a=r+ss(i,l++),s+=No(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function so(e,t,n){if(e==null)return e;var r=[],o=0;return No(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Y0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},Oo={transition:null},H0={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:Oo,ReactCurrentOwner:Yl};W.Children={map:so,forEach:function(e,t,n){so(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return so(e,function(){t++}),t},toArray:function(e){return so(e,function(t){return t})||[]},only:function(e){if(!Hl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=qn;W.Fragment=R0;W.Profiler=D0;W.PureComponent=Bl;W.StrictMode=L0;W.Suspense=b0;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H0;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Rc({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Yl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)Ic.call(t,a)&&!Fc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:qr,type:e.type,key:o,ref:i,props:r,_owner:s}};W.createContext=function(e){return e={$$typeof:F0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:I0,_context:e},e.Consumer=e};W.createElement=Vc;W.createFactory=function(e){var t=Vc.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:V0,render:e}};W.isValidElement=Hl;W.lazy=function(e){return{$$typeof:j0,_payload:{_status:-1,_result:e},_init:Y0}};W.memo=function(e,t){return{$$typeof:A0,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=Oo.transition;Oo.transition={};try{e()}finally{Oo.transition=t}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(e,t){return De.current.useCallback(e,t)};W.useContext=function(e){return De.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return De.current.useDeferredValue(e)};W.useEffect=function(e,t){return De.current.useEffect(e,t)};W.useId=function(){return De.current.useId()};W.useImperativeHandle=function(e,t,n){return De.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return De.current.useMemo(e,t)};W.useReducer=function(e,t,n){return De.current.useReducer(e,t,n)};W.useRef=function(e){return De.current.useRef(e)};W.useState=function(e){return De.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return De.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return De.current.useTransition()};W.version="18.2.0";(function(e){e.exports=W})(A);const rt=Ul(A.exports),eu=N0({__proto__:null,default:rt},[A.exports]);var Us={},bc={exports:{}},Ze={},Ac={exports:{}},jc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(h,v){var $=h.length;h.push(v);e:for(;0<$;){var z=$-1>>>1,O=h[z];if(0<o(O,v))h[z]=v,h[$]=O,$=z;else break e}}function n(h){return h.length===0?null:h[0]}function r(h){if(h.length===0)return null;var v=h[0],$=h.pop();if($!==v){h[0]=$;e:for(var z=0,O=h.length,V=O>>>1;z<V;){var I=2*(z+1)-1,Y=h[I],H=I+1,j=h[H];if(0>o(Y,$))H<O&&0>o(j,Y)?(h[z]=j,h[H]=$,z=H):(h[z]=Y,h[I]=$,z=I);else if(H<O&&0>o(j,$))h[z]=j,h[H]=$,z=H;else break e}}return v}function o(h,v){var $=h.sortIndex-v.sortIndex;return $!==0?$:h.id-v.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],u=[],p=1,m=null,y=3,w=!1,x=!1,S=!1,M=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(h){for(var v=n(u);v!==null;){if(v.callback===null)r(u);else if(v.startTime<=h)r(u),v.sortIndex=v.expirationTime,t(a,v);else break;v=n(u)}}function g(h){if(S=!1,d(h),!x)if(n(a)!==null)x=!0,bt(_);else{var v=n(u);v!==null&&C(g,v.startTime-h)}}function _(h,v){x=!1,S&&(S=!1,f(k),k=-1),w=!0;var $=y;try{for(d(v),m=n(a);m!==null&&(!(m.expirationTime>v)||h&&!ae());){var z=m.callback;if(typeof z=="function"){m.callback=null,y=m.priorityLevel;var O=z(m.expirationTime<=v);v=e.unstable_now(),typeof O=="function"?m.callback=O:m===n(a)&&r(a),d(v)}else r(a);m=n(a)}if(m!==null)var V=!0;else{var I=n(u);I!==null&&C(g,I.startTime-v),V=!1}return V}finally{m=null,y=$,w=!1}}var N=!1,T=null,k=-1,G=5,b=-1;function ae(){return!(e.unstable_now()-b<G)}function ce(){if(T!==null){var h=e.unstable_now();b=h;var v=!0;try{v=T(!0,h)}finally{v?_e():(N=!1,T=null)}}else N=!1}var _e;if(typeof c=="function")_e=function(){c(ce)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,Me=Fe.port2;Fe.port1.onmessage=ce,_e=function(){Me.postMessage(null)}}else _e=function(){M(ce,0)};function bt(h){T=h,N||(N=!0,_e())}function C(h,v){k=M(function(){h(e.unstable_now())},v)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(h){h.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,bt(_))},e.unstable_forceFrameRate=function(h){0>h||125<h?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<h?Math.floor(1e3/h):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(h){switch(y){case 1:case 2:case 3:var v=3;break;default:v=y}var $=y;y=v;try{return h()}finally{y=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(h,v){switch(h){case 1:case 2:case 3:case 4:case 5:break;default:h=3}var $=y;y=h;try{return v()}finally{y=$}},e.unstable_scheduleCallback=function(h,v,$){var z=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?z+$:z):$=z,h){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=$+O,h={id:p++,callback:v,priorityLevel:h,startTime:$,expirationTime:O,sortIndex:-1},$>z?(h.sortIndex=$,t(u,h),n(a)===null&&h===n(u)&&(S?(f(k),k=-1):S=!0,C(g,$-z))):(h.sortIndex=O,t(a,h),x||w||(x=!0,bt(_))),h},e.unstable_shouldYield=ae,e.unstable_wrapCallback=function(h){var v=y;return function(){var $=y;y=v;try{return h.apply(this,arguments)}finally{y=$}}}})(jc);(function(e){e.exports=jc})(Ac);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uc=A.exports,Ke=Ac.exports;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bc=new Set,Mr={};function Sn(e,t){Bn(e,t),Bn(e+"Capture",t)}function Bn(e,t){for(Mr[e]=t,e=0;e<t.length;e++)Bc.add(t[e])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bs=Object.prototype.hasOwnProperty,X0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tu={},nu={};function Q0(e){return Bs.call(nu,e)?!0:Bs.call(tu,e)?!1:X0.test(e)?nu[e]=!0:(tu[e]=!0,!1)}function G0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function K0(e,t,n,r){if(t===null||typeof t>"u"||G0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ie(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new Ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new Ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new Ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new Ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new Ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new Ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xl=/[\-:]([a-z])/g;function Ql(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xl,Ql);Ee[t]=new Ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xl,Ql);Ee[t]=new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xl,Ql);Ee[t]=new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function Gl(e,t,n,r){var o=Ee.hasOwnProperty(t)?Ee[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(K0(t,n,o,r)&&(n=null),r||o===null?Q0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Vt=Uc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lo=Symbol.for("react.element"),Cn=Symbol.for("react.portal"),En=Symbol.for("react.fragment"),Kl=Symbol.for("react.strict_mode"),Ws=Symbol.for("react.profiler"),Wc=Symbol.for("react.provider"),Yc=Symbol.for("react.context"),Zl=Symbol.for("react.forward_ref"),Ys=Symbol.for("react.suspense"),Hs=Symbol.for("react.suspense_list"),ql=Symbol.for("react.memo"),Ut=Symbol.for("react.lazy"),Hc=Symbol.for("react.offscreen"),ru=Symbol.iterator;function ir(e){return e===null||typeof e!="object"?null:(e=ru&&e[ru]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,ls;function gr(e){if(ls===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ls=t&&t[1]||""}return`
`+ls+e}var as=!1;function us(e,t){if(!e||as)return"";as=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,l=i.length-1;1<=s&&0<=l&&o[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==i[l]){var a=`
`+o[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{as=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?gr(e):""}function Z0(e){switch(e.tag){case 5:return gr(e.type);case 16:return gr("Lazy");case 13:return gr("Suspense");case 19:return gr("SuspenseList");case 0:case 2:case 15:return e=us(e.type,!1),e;case 11:return e=us(e.type.render,!1),e;case 1:return e=us(e.type,!0),e;default:return""}}function Xs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case En:return"Fragment";case Cn:return"Portal";case Ws:return"Profiler";case Kl:return"StrictMode";case Ys:return"Suspense";case Hs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yc:return(e.displayName||"Context")+".Consumer";case Wc:return(e._context.displayName||"Context")+".Provider";case Zl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ql:return t=e.displayName||null,t!==null?t:Xs(e.type)||"Memo";case Ut:t=e._payload,e=e._init;try{return Xs(e(t))}catch{}}return null}function q0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xs(t);case 8:return t===Kl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function rn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function J0(e){var t=Xc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ao(e){e._valueTracker||(e._valueTracker=J0(e))}function Qc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Xc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Yo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qs(e,t){var n=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function ou(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=rn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gc(e,t){t=t.checked,t!=null&&Gl(e,"checked",t,!1)}function Gs(e,t){Gc(e,t);var n=rn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ks(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ks(e,t.type,rn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function iu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ks(e,t,n){(t!=="number"||Yo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wr=Array.isArray;function In(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+rn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Zs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function su(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(wr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:rn(n)}}function Kc(e,t){var n=rn(t.value),r=rn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var uo,qc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(uo=uo||document.createElement("div"),uo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=uo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ep=["Webkit","ms","Moz","O"];Object.keys(kr).forEach(function(e){ep.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),kr[t]=kr[e]})});function Jc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||kr.hasOwnProperty(e)&&kr[e]?(""+t).trim():t+"px"}function ef(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Jc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var tp=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Js(e,t){if(t){if(tp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function el(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tl=null;function Jl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nl=null,Fn=null,Vn=null;function au(e){if(e=to(e)){if(typeof nl!="function")throw Error(E(280));var t=e.stateNode;t&&(t=$i(t),nl(e.stateNode,e.type,t))}}function tf(e){Fn?Vn?Vn.push(e):Vn=[e]:Fn=e}function nf(){if(Fn){var e=Fn,t=Vn;if(Vn=Fn=null,au(e),t)for(e=0;e<t.length;e++)au(t[e])}}function rf(e,t){return e(t)}function of(){}var cs=!1;function sf(e,t,n){if(cs)return e(t,n);cs=!0;try{return rf(e,t,n)}finally{cs=!1,(Fn!==null||Vn!==null)&&(of(),nf())}}function Lr(e,t){var n=e.stateNode;if(n===null)return null;var r=$i(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var rl=!1;if(Lt)try{var sr={};Object.defineProperty(sr,"passive",{get:function(){rl=!0}}),window.addEventListener("test",sr,sr),window.removeEventListener("test",sr,sr)}catch{rl=!1}function np(e,t,n,r,o,i,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var $r=!1,Ho=null,Xo=!1,ol=null,rp={onError:function(e){$r=!0,Ho=e}};function op(e,t,n,r,o,i,s,l,a){$r=!1,Ho=null,np.apply(rp,arguments)}function ip(e,t,n,r,o,i,s,l,a){if(op.apply(this,arguments),$r){if($r){var u=Ho;$r=!1,Ho=null}else throw Error(E(198));Xo||(Xo=!0,ol=u)}}function kn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function uu(e){if(kn(e)!==e)throw Error(E(188))}function sp(e){var t=e.alternate;if(!t){if(t=kn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return uu(o),e;if(i===r)return uu(o),t;i=i.sibling}throw Error(E(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function af(e){return e=sp(e),e!==null?uf(e):null}function uf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=uf(e);if(t!==null)return t;e=e.sibling}return null}var cf=Ke.unstable_scheduleCallback,cu=Ke.unstable_cancelCallback,lp=Ke.unstable_shouldYield,ap=Ke.unstable_requestPaint,he=Ke.unstable_now,up=Ke.unstable_getCurrentPriorityLevel,ea=Ke.unstable_ImmediatePriority,ff=Ke.unstable_UserBlockingPriority,Qo=Ke.unstable_NormalPriority,cp=Ke.unstable_LowPriority,df=Ke.unstable_IdlePriority,wi=null,$t=null;function fp(e){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(wi,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:mp,dp=Math.log,pp=Math.LN2;function mp(e){return e>>>=0,e===0?32:31-(dp(e)/pp|0)|0}var co=64,fo=4194304;function xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Go(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~o;l!==0?r=xr(l):(i&=s,i!==0&&(r=xr(i)))}else s=n&~o,s!==0?r=xr(s):i!==0&&(r=xr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),o=1<<n,r|=e[n],t&=~o;return r}function hp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-pt(i),l=1<<s,a=o[s];a===-1?((l&n)===0||(l&r)!==0)&&(o[s]=hp(l,t)):a<=t&&(e.expiredLanes|=l),i&=~l}}function il(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pf(){var e=co;return co<<=1,(co&4194240)===0&&(co=64),e}function fs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function vp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-pt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ta(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var J=0;function mf(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var hf,na,yf,vf,gf,sl=!1,po=[],Gt=null,Kt=null,Zt=null,Dr=new Map,Ir=new Map,Wt=[],gp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fu(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":Dr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ir.delete(t.pointerId)}}function lr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=to(t),t!==null&&na(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function wp(e,t,n,r,o){switch(t){case"focusin":return Gt=lr(Gt,e,t,n,r,o),!0;case"dragenter":return Kt=lr(Kt,e,t,n,r,o),!0;case"mouseover":return Zt=lr(Zt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Dr.set(i,lr(Dr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Ir.set(i,lr(Ir.get(i)||null,e,t,n,r,o)),!0}return!1}function wf(e){var t=fn(e.target);if(t!==null){var n=kn(t);if(n!==null){if(t=n.tag,t===13){if(t=lf(n),t!==null){e.blockedOn=t,gf(e.priority,function(){yf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ll(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);tl=r,n.target.dispatchEvent(r),tl=null}else return t=to(n),t!==null&&na(t),e.blockedOn=n,!1;t.shift()}return!0}function du(e,t,n){Mo(e)&&n.delete(t)}function xp(){sl=!1,Gt!==null&&Mo(Gt)&&(Gt=null),Kt!==null&&Mo(Kt)&&(Kt=null),Zt!==null&&Mo(Zt)&&(Zt=null),Dr.forEach(du),Ir.forEach(du)}function ar(e,t){e.blockedOn===t&&(e.blockedOn=null,sl||(sl=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,xp)))}function Fr(e){function t(o){return ar(o,e)}if(0<po.length){ar(po[0],e);for(var n=1;n<po.length;n++){var r=po[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gt!==null&&ar(Gt,e),Kt!==null&&ar(Kt,e),Zt!==null&&ar(Zt,e),Dr.forEach(t),Ir.forEach(t),n=0;n<Wt.length;n++)r=Wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Wt.length&&(n=Wt[0],n.blockedOn===null);)wf(n),n.blockedOn===null&&Wt.shift()}var bn=Vt.ReactCurrentBatchConfig,Ko=!0;function Sp(e,t,n,r){var o=J,i=bn.transition;bn.transition=null;try{J=1,ra(e,t,n,r)}finally{J=o,bn.transition=i}}function kp(e,t,n,r){var o=J,i=bn.transition;bn.transition=null;try{J=4,ra(e,t,n,r)}finally{J=o,bn.transition=i}}function ra(e,t,n,r){if(Ko){var o=ll(e,t,n,r);if(o===null)Ss(e,t,r,Zo,n),fu(e,r);else if(wp(o,e,t,n,r))r.stopPropagation();else if(fu(e,r),t&4&&-1<gp.indexOf(e)){for(;o!==null;){var i=to(o);if(i!==null&&hf(i),i=ll(e,t,n,r),i===null&&Ss(e,t,r,Zo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ss(e,t,r,null,n)}}var Zo=null;function ll(e,t,n,r){if(Zo=null,e=Jl(r),e=fn(e),e!==null)if(t=kn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=lf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zo=e,null}function xf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(up()){case ea:return 1;case ff:return 4;case Qo:case cp:return 16;case df:return 536870912;default:return 16}default:return 16}}var Xt=null,oa=null,Ro=null;function Sf(){if(Ro)return Ro;var e,t=oa,n=t.length,r,o="value"in Xt?Xt.value:Xt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Ro=o.slice(e,1<r?1-r:void 0)}function Lo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mo(){return!0}function pu(){return!1}function qe(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?mo:pu,this.isPropagationStopped=pu,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mo)},persist:function(){},isPersistent:mo}),t}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ia=qe(Jn),eo=pe({},Jn,{view:0,detail:0}),$p=qe(eo),ds,ps,ur,xi=pe({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ur&&(ur&&e.type==="mousemove"?(ds=e.screenX-ur.screenX,ps=e.screenY-ur.screenY):ps=ds=0,ur=e),ds)},movementY:function(e){return"movementY"in e?e.movementY:ps}}),mu=qe(xi),Cp=pe({},xi,{dataTransfer:0}),Ep=qe(Cp),_p=pe({},eo,{relatedTarget:0}),ms=qe(_p),zp=pe({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Tp=qe(zp),Pp=pe({},Jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Np=qe(Pp),Op=pe({},Jn,{data:0}),hu=qe(Op),Mp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lp[e])?!!t[e]:!1}function sa(){return Dp}var Ip=pe({},eo,{key:function(e){if(e.key){var t=Mp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Lo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sa,charCode:function(e){return e.type==="keypress"?Lo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Lo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fp=qe(Ip),Vp=pe({},xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yu=qe(Vp),bp=pe({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sa}),Ap=qe(bp),jp=pe({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Up=qe(jp),Bp=pe({},xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wp=qe(Bp),Yp=[9,13,27,32],la=Lt&&"CompositionEvent"in window,Cr=null;Lt&&"documentMode"in document&&(Cr=document.documentMode);var Hp=Lt&&"TextEvent"in window&&!Cr,kf=Lt&&(!la||Cr&&8<Cr&&11>=Cr),vu=String.fromCharCode(32),gu=!1;function $f(e,t){switch(e){case"keyup":return Yp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _n=!1;function Xp(e,t){switch(e){case"compositionend":return Cf(t);case"keypress":return t.which!==32?null:(gu=!0,vu);case"textInput":return e=t.data,e===vu&&gu?null:e;default:return null}}function Qp(e,t){if(_n)return e==="compositionend"||!la&&$f(e,t)?(e=Sf(),Ro=oa=Xt=null,_n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kf&&t.locale!=="ko"?null:t.data;default:return null}}var Gp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gp[e.type]:t==="textarea"}function Ef(e,t,n,r){tf(r),t=qo(t,"onChange"),0<t.length&&(n=new ia("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Er=null,Vr=null;function Kp(e){If(e,0)}function Si(e){var t=Pn(e);if(Qc(t))return e}function Zp(e,t){if(e==="change")return t}var _f=!1;if(Lt){var hs;if(Lt){var ys="oninput"in document;if(!ys){var xu=document.createElement("div");xu.setAttribute("oninput","return;"),ys=typeof xu.oninput=="function"}hs=ys}else hs=!1;_f=hs&&(!document.documentMode||9<document.documentMode)}function Su(){Er&&(Er.detachEvent("onpropertychange",zf),Vr=Er=null)}function zf(e){if(e.propertyName==="value"&&Si(Vr)){var t=[];Ef(t,Vr,e,Jl(e)),sf(Kp,t)}}function qp(e,t,n){e==="focusin"?(Su(),Er=t,Vr=n,Er.attachEvent("onpropertychange",zf)):e==="focusout"&&Su()}function Jp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Si(Vr)}function em(e,t){if(e==="click")return Si(t)}function tm(e,t){if(e==="input"||e==="change")return Si(t)}function nm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:nm;function br(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Bs.call(t,o)||!ht(e[o],t[o]))return!1}return!0}function ku(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $u(e,t){var n=ku(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ku(n)}}function Tf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pf(){for(var e=window,t=Yo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Yo(e.document)}return t}function aa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rm(e){var t=Pf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Tf(n.ownerDocument.documentElement,n)){if(r!==null&&aa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=$u(n,i);var s=$u(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var om=Lt&&"documentMode"in document&&11>=document.documentMode,zn=null,al=null,_r=null,ul=!1;function Cu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ul||zn==null||zn!==Yo(r)||(r=zn,"selectionStart"in r&&aa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_r&&br(_r,r)||(_r=r,r=qo(al,"onSelect"),0<r.length&&(t=new ia("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zn)))}function ho(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Tn={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},vs={},Nf={};Lt&&(Nf=document.createElement("div").style,"AnimationEvent"in window||(delete Tn.animationend.animation,delete Tn.animationiteration.animation,delete Tn.animationstart.animation),"TransitionEvent"in window||delete Tn.transitionend.transition);function ki(e){if(vs[e])return vs[e];if(!Tn[e])return e;var t=Tn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Nf)return vs[e]=t[n];return e}var Of=ki("animationend"),Mf=ki("animationiteration"),Rf=ki("animationstart"),Lf=ki("transitionend"),Df=new Map,Eu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){Df.set(e,t),Sn(t,[e])}for(var gs=0;gs<Eu.length;gs++){var ws=Eu[gs],im=ws.toLowerCase(),sm=ws[0].toUpperCase()+ws.slice(1);sn(im,"on"+sm)}sn(Of,"onAnimationEnd");sn(Mf,"onAnimationIteration");sn(Rf,"onAnimationStart");sn("dblclick","onDoubleClick");sn("focusin","onFocus");sn("focusout","onBlur");sn(Lf,"onTransitionEnd");Bn("onMouseEnter",["mouseout","mouseover"]);Bn("onMouseLeave",["mouseout","mouseover"]);Bn("onPointerEnter",["pointerout","pointerover"]);Bn("onPointerLeave",["pointerout","pointerover"]);Sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sr));function _u(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ip(r,t,void 0,e),e.currentTarget=null}function If(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==i&&o.isPropagationStopped())break e;_u(o,l,u),i=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==i&&o.isPropagationStopped())break e;_u(o,l,u),i=a}}}if(Xo)throw e=ol,Xo=!1,ol=null,e}function se(e,t){var n=t[ml];n===void 0&&(n=t[ml]=new Set);var r=e+"__bubble";n.has(r)||(Ff(t,e,2,!1),n.add(r))}function xs(e,t,n){var r=0;t&&(r|=4),Ff(n,e,r,t)}var yo="_reactListening"+Math.random().toString(36).slice(2);function Ar(e){if(!e[yo]){e[yo]=!0,Bc.forEach(function(n){n!=="selectionchange"&&(lm.has(n)||xs(n,!1,e),xs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yo]||(t[yo]=!0,xs("selectionchange",!1,t))}}function Ff(e,t,n,r){switch(xf(t)){case 1:var o=Sp;break;case 4:o=kp;break;default:o=ra}n=o.bind(null,t,n,e),o=void 0,!rl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ss(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;s=s.return}for(;l!==null;){if(s=fn(l),s===null)return;if(a=s.tag,a===5||a===6){r=i=s;continue e}l=l.parentNode}}r=r.return}sf(function(){var u=i,p=Jl(n),m=[];e:{var y=Df.get(e);if(y!==void 0){var w=ia,x=e;switch(e){case"keypress":if(Lo(n)===0)break e;case"keydown":case"keyup":w=Fp;break;case"focusin":x="focus",w=ms;break;case"focusout":x="blur",w=ms;break;case"beforeblur":case"afterblur":w=ms;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Ep;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Ap;break;case Of:case Mf:case Rf:w=Tp;break;case Lf:w=Up;break;case"scroll":w=$p;break;case"wheel":w=Wp;break;case"copy":case"cut":case"paste":w=Np;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=yu}var S=(t&4)!==0,M=!S&&e==="scroll",f=S?y!==null?y+"Capture":null:y;S=[];for(var c=u,d;c!==null;){d=c;var g=d.stateNode;if(d.tag===5&&g!==null&&(d=g,f!==null&&(g=Lr(c,f),g!=null&&S.push(jr(c,g,d)))),M)break;c=c.return}0<S.length&&(y=new w(y,x,null,n,p),m.push({event:y,listeners:S}))}}if((t&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",y&&n!==tl&&(x=n.relatedTarget||n.fromElement)&&(fn(x)||x[Dt]))break e;if((w||y)&&(y=p.window===p?p:(y=p.ownerDocument)?y.defaultView||y.parentWindow:window,w?(x=n.relatedTarget||n.toElement,w=u,x=x?fn(x):null,x!==null&&(M=kn(x),x!==M||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=u),w!==x)){if(S=mu,g="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=yu,g="onPointerLeave",f="onPointerEnter",c="pointer"),M=w==null?y:Pn(w),d=x==null?y:Pn(x),y=new S(g,c+"leave",w,n,p),y.target=M,y.relatedTarget=d,g=null,fn(p)===u&&(S=new S(f,c+"enter",x,n,p),S.target=d,S.relatedTarget=M,g=S),M=g,w&&x)t:{for(S=w,f=x,c=0,d=S;d;d=$n(d))c++;for(d=0,g=f;g;g=$n(g))d++;for(;0<c-d;)S=$n(S),c--;for(;0<d-c;)f=$n(f),d--;for(;c--;){if(S===f||f!==null&&S===f.alternate)break t;S=$n(S),f=$n(f)}S=null}else S=null;w!==null&&zu(m,y,w,S,!1),x!==null&&M!==null&&zu(m,M,x,S,!0)}}e:{if(y=u?Pn(u):window,w=y.nodeName&&y.nodeName.toLowerCase(),w==="select"||w==="input"&&y.type==="file")var _=Zp;else if(wu(y))if(_f)_=tm;else{_=Jp;var N=qp}else(w=y.nodeName)&&w.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(_=em);if(_&&(_=_(e,u))){Ef(m,_,n,p);break e}N&&N(e,y,u),e==="focusout"&&(N=y._wrapperState)&&N.controlled&&y.type==="number"&&Ks(y,"number",y.value)}switch(N=u?Pn(u):window,e){case"focusin":(wu(N)||N.contentEditable==="true")&&(zn=N,al=u,_r=null);break;case"focusout":_r=al=zn=null;break;case"mousedown":ul=!0;break;case"contextmenu":case"mouseup":case"dragend":ul=!1,Cu(m,n,p);break;case"selectionchange":if(om)break;case"keydown":case"keyup":Cu(m,n,p)}var T;if(la)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else _n?$f(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(kf&&n.locale!=="ko"&&(_n||k!=="onCompositionStart"?k==="onCompositionEnd"&&_n&&(T=Sf()):(Xt=p,oa="value"in Xt?Xt.value:Xt.textContent,_n=!0)),N=qo(u,k),0<N.length&&(k=new hu(k,e,null,n,p),m.push({event:k,listeners:N}),T?k.data=T:(T=Cf(n),T!==null&&(k.data=T)))),(T=Hp?Xp(e,n):Qp(e,n))&&(u=qo(u,"onBeforeInput"),0<u.length&&(p=new hu("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:u}),p.data=T))}If(m,t)})}function jr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Lr(e,n),i!=null&&r.unshift(jr(e,i,o)),i=Lr(e,t),i!=null&&r.push(jr(e,i,o))),e=e.return}return r}function $n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zu(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,o?(a=Lr(n,i),a!=null&&s.unshift(jr(n,a,l))):o||(a=Lr(n,i),a!=null&&s.push(jr(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var am=/\r\n?/g,um=/\u0000|\uFFFD/g;function Tu(e){return(typeof e=="string"?e:""+e).replace(am,`
`).replace(um,"")}function vo(e,t,n){if(t=Tu(t),Tu(e)!==t&&n)throw Error(E(425))}function Jo(){}var cl=null,fl=null;function dl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pl=typeof setTimeout=="function"?setTimeout:void 0,cm=typeof clearTimeout=="function"?clearTimeout:void 0,Pu=typeof Promise=="function"?Promise:void 0,fm=typeof queueMicrotask=="function"?queueMicrotask:typeof Pu<"u"?function(e){return Pu.resolve(null).then(e).catch(dm)}:pl;function dm(e){setTimeout(function(){throw e})}function ks(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Fr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Fr(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Nu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var er=Math.random().toString(36).slice(2),kt="__reactFiber$"+er,Ur="__reactProps$"+er,Dt="__reactContainer$"+er,ml="__reactEvents$"+er,pm="__reactListeners$"+er,mm="__reactHandles$"+er;function fn(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dt]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nu(e);e!==null;){if(n=e[kt])return n;e=Nu(e)}return t}e=n,n=e.parentNode}return null}function to(e){return e=e[kt]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function $i(e){return e[Ur]||null}var hl=[],Nn=-1;function ln(e){return{current:e}}function le(e){0>Nn||(e.current=hl[Nn],hl[Nn]=null,Nn--)}function ie(e,t){Nn++,hl[Nn]=e.current,e.current=t}var on={},Oe=ln(on),je=ln(!1),yn=on;function Wn(e,t){var n=e.type.contextTypes;if(!n)return on;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ue(e){return e=e.childContextTypes,e!=null}function ei(){le(je),le(Oe)}function Ou(e,t,n){if(Oe.current!==on)throw Error(E(168));ie(Oe,t),ie(je,n)}function Vf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(E(108,q0(e)||"Unknown",o));return pe({},n,r)}function ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||on,yn=Oe.current,ie(Oe,e),ie(je,je.current),!0}function Mu(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Vf(e,t,yn),r.__reactInternalMemoizedMergedChildContext=e,le(je),le(Oe),ie(Oe,e)):le(je),ie(je,n)}var Pt=null,Ci=!1,$s=!1;function bf(e){Pt===null?Pt=[e]:Pt.push(e)}function hm(e){Ci=!0,bf(e)}function an(){if(!$s&&Pt!==null){$s=!0;var e=0,t=J;try{var n=Pt;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pt=null,Ci=!1}catch(o){throw Pt!==null&&(Pt=Pt.slice(e+1)),cf(ea,an),o}finally{J=t,$s=!1}}return null}var On=[],Mn=0,ni=null,ri=0,et=[],tt=0,vn=null,Nt=1,Ot="";function un(e,t){On[Mn++]=ri,On[Mn++]=ni,ni=e,ri=t}function Af(e,t,n){et[tt++]=Nt,et[tt++]=Ot,et[tt++]=vn,vn=e;var r=Nt;e=Ot;var o=32-pt(r)-1;r&=~(1<<o),n+=1;var i=32-pt(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Nt=1<<32-pt(t)+o|n<<o|r,Ot=i+e}else Nt=1<<i|n<<o|r,Ot=e}function ua(e){e.return!==null&&(un(e,1),Af(e,1,0))}function ca(e){for(;e===ni;)ni=On[--Mn],On[Mn]=null,ri=On[--Mn],On[Mn]=null;for(;e===vn;)vn=et[--tt],et[tt]=null,Ot=et[--tt],et[tt]=null,Nt=et[--tt],et[tt]=null}var Qe=null,Xe=null,ue=!1,dt=null;function jf(e,t){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ru(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Xe=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=vn!==null?{id:Nt,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Xe=null,!0):!1;default:return!1}}function yl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vl(e){if(ue){var t=Xe;if(t){var n=t;if(!Ru(e,t)){if(yl(e))throw Error(E(418));t=qt(n.nextSibling);var r=Qe;t&&Ru(e,t)?jf(r,n):(e.flags=e.flags&-4097|2,ue=!1,Qe=e)}}else{if(yl(e))throw Error(E(418));e.flags=e.flags&-4097|2,ue=!1,Qe=e}}}function Lu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function go(e){if(e!==Qe)return!1;if(!ue)return Lu(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!dl(e.type,e.memoizedProps)),t&&(t=Xe)){if(yl(e))throw Uf(),Error(E(418));for(;t;)jf(e,t),t=qt(t.nextSibling)}if(Lu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Xe=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=Qe?qt(e.stateNode.nextSibling):null;return!0}function Uf(){for(var e=Xe;e;)e=qt(e.nextSibling)}function Yn(){Xe=Qe=null,ue=!1}function fa(e){dt===null?dt=[e]:dt.push(e)}var ym=Vt.ReactCurrentBatchConfig;function ct(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var oi=ln(null),ii=null,Rn=null,da=null;function pa(){da=Rn=ii=null}function ma(e){var t=oi.current;le(oi),e._currentValue=t}function gl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function An(e,t){ii=e,da=Rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ae=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(da!==e)if(e={context:e,memoizedValue:t,next:null},Rn===null){if(ii===null)throw Error(E(308));Rn=e,ii.dependencies={lanes:0,firstContext:e}}else Rn=Rn.next=e;return t}var dn=null;function ha(e){dn===null?dn=[e]:dn.push(e)}function Bf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ha(t)):(n.next=o.next,o.next=n),t.interleaved=n,It(e,r)}function It(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Bt=!1;function ya(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(X&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,It(e,n)}return o=r.interleaved,o===null?(t.next=t,ha(r)):(t.next=o.next,o.next=t),r.interleaved=t,It(e,n)}function Do(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ta(e,n)}}function Du(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function si(e,t,n,r){var o=e.updateQueue;Bt=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?i=u:s.next=u,s=a;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==s&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=a))}if(i!==null){var m=o.baseState;s=0,p=u=a=null,l=i;do{var y=l.lane,w=l.eventTime;if((r&y)===y){p!==null&&(p=p.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,S=l;switch(y=t,w=n,S.tag){case 1:if(x=S.payload,typeof x=="function"){m=x.call(w,m,y);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,y=typeof x=="function"?x.call(w,m,y):x,y==null)break e;m=pe({},m,y);break e;case 2:Bt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,y=o.effects,y===null?o.effects=[l]:y.push(l))}else w={eventTime:w,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=w,a=m):p=p.next=w,s|=y;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;y=l,l=y.next,y.next=null,o.lastBaseUpdate=y,o.shared.pending=null}}while(1);if(p===null&&(a=m),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);wn|=s,e.lanes=s,e.memoizedState=m}}function Iu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(E(191,o));o.call(r)}}}var Yf=new Uc.Component().refs;function wl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ei={isMounted:function(e){return(e=e._reactInternals)?kn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Le(),o=tn(e),i=Mt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Jt(e,i,o),t!==null&&(mt(t,e,o,r),Do(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Le(),o=tn(e),i=Mt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Jt(e,i,o),t!==null&&(mt(t,e,o,r),Do(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),r=tn(e),o=Mt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Jt(e,o,r),t!==null&&(mt(t,e,r,n),Do(t,e,r))}};function Fu(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!br(n,r)||!br(o,i):!0}function Hf(e,t,n){var r=!1,o=on,i=t.contextType;return typeof i=="object"&&i!==null?i=it(i):(o=Ue(t)?yn:Oe.current,r=t.contextTypes,i=(r=r!=null)?Wn(e,o):on),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ei,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Vu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ei.enqueueReplaceState(t,t.state,null)}function xl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Yf,ya(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=it(i):(i=Ue(t)?yn:Oe.current,o.context=Wn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(wl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ei.enqueueReplaceState(o,o.state,null),si(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var l=o.refs;l===Yf&&(l=o.refs={}),s===null?delete l[i]:l[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function wo(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bu(e){var t=e._init;return t(e._payload)}function Xf(e){function t(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=nn(f,c),f.index=0,f.sibling=null,f}function i(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,c,d,g){return c===null||c.tag!==6?(c=Ns(d,f.mode,g),c.return=f,c):(c=o(c,d),c.return=f,c)}function a(f,c,d,g){var _=d.type;return _===En?p(f,c,d.props.children,g,d.key):c!==null&&(c.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ut&&bu(_)===c.type)?(g=o(c,d.props),g.ref=cr(f,c,d),g.return=f,g):(g=jo(d.type,d.key,d.props,null,f.mode,g),g.ref=cr(f,c,d),g.return=f,g)}function u(f,c,d,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=Os(d,f.mode,g),c.return=f,c):(c=o(c,d.children||[]),c.return=f,c)}function p(f,c,d,g,_){return c===null||c.tag!==7?(c=hn(d,f.mode,g,_),c.return=f,c):(c=o(c,d),c.return=f,c)}function m(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ns(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case lo:return d=jo(c.type,c.key,c.props,null,f.mode,d),d.ref=cr(f,null,c),d.return=f,d;case Cn:return c=Os(c,f.mode,d),c.return=f,c;case Ut:var g=c._init;return m(f,g(c._payload),d)}if(wr(c)||ir(c))return c=hn(c,f.mode,d,null),c.return=f,c;wo(f,c)}return null}function y(f,c,d,g){var _=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return _!==null?null:l(f,c,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case lo:return d.key===_?a(f,c,d,g):null;case Cn:return d.key===_?u(f,c,d,g):null;case Ut:return _=d._init,y(f,c,_(d._payload),g)}if(wr(d)||ir(d))return _!==null?null:p(f,c,d,g,null);wo(f,d)}return null}function w(f,c,d,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(d)||null,l(c,f,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case lo:return f=f.get(g.key===null?d:g.key)||null,a(c,f,g,_);case Cn:return f=f.get(g.key===null?d:g.key)||null,u(c,f,g,_);case Ut:var N=g._init;return w(f,c,d,N(g._payload),_)}if(wr(g)||ir(g))return f=f.get(d)||null,p(c,f,g,_,null);wo(c,g)}return null}function x(f,c,d,g){for(var _=null,N=null,T=c,k=c=0,G=null;T!==null&&k<d.length;k++){T.index>k?(G=T,T=null):G=T.sibling;var b=y(f,T,d[k],g);if(b===null){T===null&&(T=G);break}e&&T&&b.alternate===null&&t(f,T),c=i(b,c,k),N===null?_=b:N.sibling=b,N=b,T=G}if(k===d.length)return n(f,T),ue&&un(f,k),_;if(T===null){for(;k<d.length;k++)T=m(f,d[k],g),T!==null&&(c=i(T,c,k),N===null?_=T:N.sibling=T,N=T);return ue&&un(f,k),_}for(T=r(f,T);k<d.length;k++)G=w(T,f,k,d[k],g),G!==null&&(e&&G.alternate!==null&&T.delete(G.key===null?k:G.key),c=i(G,c,k),N===null?_=G:N.sibling=G,N=G);return e&&T.forEach(function(ae){return t(f,ae)}),ue&&un(f,k),_}function S(f,c,d,g){var _=ir(d);if(typeof _!="function")throw Error(E(150));if(d=_.call(d),d==null)throw Error(E(151));for(var N=_=null,T=c,k=c=0,G=null,b=d.next();T!==null&&!b.done;k++,b=d.next()){T.index>k?(G=T,T=null):G=T.sibling;var ae=y(f,T,b.value,g);if(ae===null){T===null&&(T=G);break}e&&T&&ae.alternate===null&&t(f,T),c=i(ae,c,k),N===null?_=ae:N.sibling=ae,N=ae,T=G}if(b.done)return n(f,T),ue&&un(f,k),_;if(T===null){for(;!b.done;k++,b=d.next())b=m(f,b.value,g),b!==null&&(c=i(b,c,k),N===null?_=b:N.sibling=b,N=b);return ue&&un(f,k),_}for(T=r(f,T);!b.done;k++,b=d.next())b=w(T,f,k,b.value,g),b!==null&&(e&&b.alternate!==null&&T.delete(b.key===null?k:b.key),c=i(b,c,k),N===null?_=b:N.sibling=b,N=b);return e&&T.forEach(function(ce){return t(f,ce)}),ue&&un(f,k),_}function M(f,c,d,g){if(typeof d=="object"&&d!==null&&d.type===En&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case lo:e:{for(var _=d.key,N=c;N!==null;){if(N.key===_){if(_=d.type,_===En){if(N.tag===7){n(f,N.sibling),c=o(N,d.props.children),c.return=f,f=c;break e}}else if(N.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ut&&bu(_)===N.type){n(f,N.sibling),c=o(N,d.props),c.ref=cr(f,N,d),c.return=f,f=c;break e}n(f,N);break}else t(f,N);N=N.sibling}d.type===En?(c=hn(d.props.children,f.mode,g,d.key),c.return=f,f=c):(g=jo(d.type,d.key,d.props,null,f.mode,g),g.ref=cr(f,c,d),g.return=f,f=g)}return s(f);case Cn:e:{for(N=d.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(f,c.sibling),c=o(c,d.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Os(d,f.mode,g),c.return=f,f=c}return s(f);case Ut:return N=d._init,M(f,c,N(d._payload),g)}if(wr(d))return x(f,c,d,g);if(ir(d))return S(f,c,d,g);wo(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,d),c.return=f,f=c):(n(f,c),c=Ns(d,f.mode,g),c.return=f,f=c),s(f)):n(f,c)}return M}var Hn=Xf(!0),Qf=Xf(!1),no={},Ct=ln(no),Br=ln(no),Wr=ln(no);function pn(e){if(e===no)throw Error(E(174));return e}function va(e,t){switch(ie(Wr,t),ie(Br,e),ie(Ct,no),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:qs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=qs(t,e)}le(Ct),ie(Ct,t)}function Xn(){le(Ct),le(Br),le(Wr)}function Gf(e){pn(Wr.current);var t=pn(Ct.current),n=qs(t,e.type);t!==n&&(ie(Br,e),ie(Ct,n))}function ga(e){Br.current===e&&(le(Ct),le(Br))}var fe=ln(0);function li(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Cs=[];function wa(){for(var e=0;e<Cs.length;e++)Cs[e]._workInProgressVersionPrimary=null;Cs.length=0}var Io=Vt.ReactCurrentDispatcher,Es=Vt.ReactCurrentBatchConfig,gn=0,de=null,ge=null,xe=null,ai=!1,zr=!1,Yr=0,vm=0;function ze(){throw Error(E(321))}function xa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function Sa(e,t,n,r,o,i){if(gn=i,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Io.current=e===null||e.memoizedState===null?Sm:km,e=n(r,o),zr){i=0;do{if(zr=!1,Yr=0,25<=i)throw Error(E(301));i+=1,xe=ge=null,t.updateQueue=null,Io.current=$m,e=n(r,o)}while(zr)}if(Io.current=ui,t=ge!==null&&ge.next!==null,gn=0,xe=ge=de=null,ai=!1,t)throw Error(E(300));return e}function ka(){var e=Yr!==0;return Yr=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?de.memoizedState=xe=e:xe=xe.next=e,xe}function st(){if(ge===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=xe===null?de.memoizedState:xe.next;if(t!==null)xe=t,ge=e;else{if(e===null)throw Error(E(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},xe===null?de.memoizedState=xe=e:xe=xe.next=e}return xe}function Hr(e,t){return typeof t=="function"?t(e):t}function _s(e){var t=st(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=ge,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=s=null,a=null,u=i;do{var p=u.lane;if((gn&p)===p)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=m,s=r):a=a.next=m,de.lanes|=p,wn|=p}u=u.next}while(u!==null&&u!==i);a===null?s=r:a.next=l,ht(r,t.memoizedState)||(Ae=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,de.lanes|=i,wn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function zs(e){var t=st(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);ht(i,t.memoizedState)||(Ae=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Kf(){}function Zf(e,t){var n=de,r=st(),o=t(),i=!ht(r.memoizedState,o);if(i&&(r.memoizedState=o,Ae=!0),r=r.queue,$a(ed.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,Xr(9,Jf.bind(null,n,r,o,t),void 0,null),Se===null)throw Error(E(349));(gn&30)!==0||qf(n,t,o)}return o}function qf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jf(e,t,n,r){t.value=n,t.getSnapshot=r,td(t)&&nd(e)}function ed(e,t,n){return n(function(){td(t)&&nd(e)})}function td(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function nd(e){var t=It(e,1);t!==null&&mt(t,e,1,-1)}function Au(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:e},t.queue=e,e=e.dispatch=xm.bind(null,de,e),[t.memoizedState,e]}function Xr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function rd(){return st().memoizedState}function Fo(e,t,n,r){var o=wt();de.flags|=e,o.memoizedState=Xr(1|t,n,void 0,r===void 0?null:r)}function _i(e,t,n,r){var o=st();r=r===void 0?null:r;var i=void 0;if(ge!==null){var s=ge.memoizedState;if(i=s.destroy,r!==null&&xa(r,s.deps)){o.memoizedState=Xr(t,n,i,r);return}}de.flags|=e,o.memoizedState=Xr(1|t,n,i,r)}function ju(e,t){return Fo(8390656,8,e,t)}function $a(e,t){return _i(2048,8,e,t)}function od(e,t){return _i(4,2,e,t)}function id(e,t){return _i(4,4,e,t)}function sd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ld(e,t,n){return n=n!=null?n.concat([e]):null,_i(4,4,sd.bind(null,t,e),n)}function Ca(){}function ad(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ud(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function cd(e,t,n){return(gn&21)===0?(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=n):(ht(n,t)||(n=pf(),de.lanes|=n,wn|=n,e.baseState=!0),t)}function gm(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=Es.transition;Es.transition={};try{e(!1),t()}finally{J=n,Es.transition=r}}function fd(){return st().memoizedState}function wm(e,t,n){var r=tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dd(e))pd(t,n);else if(n=Bf(e,t,n,r),n!==null){var o=Le();mt(n,e,r,o),md(n,t,r)}}function xm(e,t,n){var r=tn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dd(e))pd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,l=i(s,n);if(o.hasEagerState=!0,o.eagerState=l,ht(l,s)){var a=t.interleaved;a===null?(o.next=o,ha(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Bf(e,t,o,r),n!==null&&(o=Le(),mt(n,e,r,o),md(n,t,r))}}function dd(e){var t=e.alternate;return e===de||t!==null&&t===de}function pd(e,t){zr=ai=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function md(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ta(e,n)}}var ui={readContext:it,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},Sm={readContext:it,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:ju,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fo(4194308,4,sd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fo(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=wm.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:Au,useDebugValue:Ca,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=Au(!1),t=e[0];return e=gm.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,o=wt();if(ue){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),Se===null)throw Error(E(349));(gn&30)!==0||qf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ju(ed.bind(null,r,i,e),[e]),r.flags|=2048,Xr(9,Jf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=wt(),t=Se.identifierPrefix;if(ue){var n=Ot,r=Nt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},km={readContext:it,useCallback:ad,useContext:it,useEffect:$a,useImperativeHandle:ld,useInsertionEffect:od,useLayoutEffect:id,useMemo:ud,useReducer:_s,useRef:rd,useState:function(){return _s(Hr)},useDebugValue:Ca,useDeferredValue:function(e){var t=st();return cd(t,ge.memoizedState,e)},useTransition:function(){var e=_s(Hr)[0],t=st().memoizedState;return[e,t]},useMutableSource:Kf,useSyncExternalStore:Zf,useId:fd,unstable_isNewReconciler:!1},$m={readContext:it,useCallback:ad,useContext:it,useEffect:$a,useImperativeHandle:ld,useInsertionEffect:od,useLayoutEffect:id,useMemo:ud,useReducer:zs,useRef:rd,useState:function(){return zs(Hr)},useDebugValue:Ca,useDeferredValue:function(e){var t=st();return ge===null?t.memoizedState=e:cd(t,ge.memoizedState,e)},useTransition:function(){var e=zs(Hr)[0],t=st().memoizedState;return[e,t]},useMutableSource:Kf,useSyncExternalStore:Zf,useId:fd,unstable_isNewReconciler:!1};function Qn(e,t){try{var n="",r=t;do n+=Z0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ts(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Sl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Cm=typeof WeakMap=="function"?WeakMap:Map;function hd(e,t,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fi||(fi=!0,Ol=r),Sl(e,t)},n}function yd(e,t,n){n=Mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Sl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Sl(e,t),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Uu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Cm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Vm.bind(null,e,t,n),t.then(e,e))}function Bu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wu(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mt(-1,1),t.tag=2,Jt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Em=Vt.ReactCurrentOwner,Ae=!1;function Re(e,t,n,r){t.child=e===null?Qf(t,null,n,r):Hn(t,e.child,n,r)}function Yu(e,t,n,r,o){n=n.render;var i=t.ref;return An(t,o),r=Sa(e,t,n,r,i,o),n=ka(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ft(e,t,o)):(ue&&n&&ua(t),t.flags|=1,Re(e,t,r,o),t.child)}function Hu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ma(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,vd(e,t,i,r,o)):(e=jo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:br,n(s,r)&&e.ref===t.ref)return Ft(e,t,o)}return t.flags|=1,e=nn(i,r),e.ref=t.ref,e.return=t,t.child=e}function vd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(br(i,r)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Ae=!0);else return t.lanes=e.lanes,Ft(e,t,o)}return kl(e,t,n,r,o)}function gd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Dn,He),He|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(Dn,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ie(Dn,He),He|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ie(Dn,He),He|=r;return Re(e,t,o,n),t.child}function wd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function kl(e,t,n,r,o){var i=Ue(n)?yn:Oe.current;return i=Wn(t,i),An(t,o),n=Sa(e,t,n,r,i,o),r=ka(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ft(e,t,o)):(ue&&r&&ua(t),t.flags|=1,Re(e,t,n,o),t.child)}function Xu(e,t,n,r,o){if(Ue(n)){var i=!0;ti(t)}else i=!1;if(An(t,o),t.stateNode===null)Vo(e,t),Hf(t,n,r),xl(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=it(u):(u=Ue(n)?yn:Oe.current,u=Wn(t,u));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Vu(t,s,r,u),Bt=!1;var y=t.memoizedState;s.state=y,si(t,r,s,o),a=t.memoizedState,l!==r||y!==a||je.current||Bt?(typeof p=="function"&&(wl(t,n,p,r),a=t.memoizedState),(l=Bt||Fu(t,n,l,r,y,a,u))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Wf(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:ct(t.type,l),s.props=u,m=t.pendingProps,y=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=it(a):(a=Ue(n)?yn:Oe.current,a=Wn(t,a));var w=n.getDerivedStateFromProps;(p=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==m||y!==a)&&Vu(t,s,r,a),Bt=!1,y=t.memoizedState,s.state=y,si(t,r,s,o);var x=t.memoizedState;l!==m||y!==x||je.current||Bt?(typeof w=="function"&&(wl(t,n,w,r),x=t.memoizedState),(u=Bt||Fu(t,n,u,r,y,x,a)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,x,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,x,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),s.props=r,s.state=x,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return $l(e,t,n,r,i,o)}function $l(e,t,n,r,o,i){wd(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Mu(t,n,!1),Ft(e,t,i);r=t.stateNode,Em.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Hn(t,e.child,null,i),t.child=Hn(t,null,l,i)):Re(e,t,l,i),t.memoizedState=r.state,o&&Mu(t,n,!0),t.child}function xd(e){var t=e.stateNode;t.pendingContext?Ou(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ou(e,t.context,!1),va(e,t.containerInfo)}function Qu(e,t,n,r,o){return Yn(),fa(o),t.flags|=256,Re(e,t,n,r),t.child}var Cl={dehydrated:null,treeContext:null,retryLane:0};function El(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sd(e,t,n){var r=t.pendingProps,o=fe.current,i=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ie(fe,o&1),e===null)return vl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Pi(s,r,0,null),e=hn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=El(n),t.memoizedState=Cl,e):Ea(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return _m(e,t,s,r,l,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,l=o.sibling;var a={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=nn(o,a),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=nn(l,i):(i=hn(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?El(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Cl,r}return i=e.child,e=i.sibling,r=nn(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ea(e,t){return t=Pi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xo(e,t,n,r){return r!==null&&fa(r),Hn(t,e.child,null,n),e=Ea(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _m(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Ts(Error(E(422))),xo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Pi({mode:"visible",children:r.children},o,0,null),i=hn(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Hn(t,e.child,null,s),t.child.memoizedState=El(s),t.memoizedState=Cl,i);if((t.mode&1)===0)return xo(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(E(419)),r=Ts(i,r,void 0),xo(e,t,s,r)}if(l=(s&e.childLanes)!==0,Ae||l){if(r=Se,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|s))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,It(e,o),mt(r,e,o,-1))}return Oa(),r=Ts(Error(E(421))),xo(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=bm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Xe=qt(o.nextSibling),Qe=t,ue=!0,dt=null,e!==null&&(et[tt++]=Nt,et[tt++]=Ot,et[tt++]=vn,Nt=e.id,Ot=e.overflow,vn=t),t=Ea(t,r.children),t.flags|=4096,t)}function Gu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),gl(e.return,t,n)}function Ps(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function kd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Re(e,t,r.children,n),r=fe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gu(e,n,t);else if(e.tag===19)Gu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(fe,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&li(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ps(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&li(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ps(t,!0,n,null,i);break;case"together":Ps(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function zm(e,t,n){switch(t.tag){case 3:xd(t),Yn();break;case 5:Gf(t);break;case 1:Ue(t.type)&&ti(t);break;case 4:va(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ie(oi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(fe,fe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Sd(e,t,n):(ie(fe,fe.current&1),e=Ft(e,t,n),e!==null?e.sibling:null);ie(fe,fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return kd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ie(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,gd(e,t,n)}return Ft(e,t,n)}var $d,_l,Cd,Ed;$d=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_l=function(){};Cd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,pn(Ct.current);var i=null;switch(n){case"input":o=Qs(e,o),r=Qs(e,r),i=[];break;case"select":o=pe({},o,{value:void 0}),r=pe({},r,{value:void 0}),i=[];break;case"textarea":o=Zs(e,o),r=Zs(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jo)}Js(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Mr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Mr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&se("scroll",e),i||l===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Ed=function(e,t,n,r){n!==r&&(t.flags|=4)};function fr(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Tm(e,t,n){var r=t.pendingProps;switch(ca(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Ue(t.type)&&ei(),Te(t),null;case 3:return r=t.stateNode,Xn(),le(je),le(Oe),wa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(go(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,dt!==null&&(Ll(dt),dt=null))),_l(e,t),Te(t),null;case 5:ga(t);var o=pn(Wr.current);if(n=t.type,e!==null&&t.stateNode!=null)Cd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return Te(t),null}if(e=pn(Ct.current),go(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[kt]=t,r[Ur]=i,e=(t.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(o=0;o<Sr.length;o++)se(Sr[o],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":ou(r,i),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},se("invalid",r);break;case"textarea":su(r,i),se("invalid",r)}Js(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&vo(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&vo(r.textContent,l,e),o=["children",""+l]):Mr.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&se("scroll",r)}switch(n){case"input":ao(r),iu(r,i,!0);break;case"textarea":ao(r),lu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Jo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[kt]=t,e[Ur]=r,$d(e,t,!1,!1),t.stateNode=e;e:{switch(s=el(n,r),n){case"dialog":se("cancel",e),se("close",e),o=r;break;case"iframe":case"object":case"embed":se("load",e),o=r;break;case"video":case"audio":for(o=0;o<Sr.length;o++)se(Sr[o],e);o=r;break;case"source":se("error",e),o=r;break;case"img":case"image":case"link":se("error",e),se("load",e),o=r;break;case"details":se("toggle",e),o=r;break;case"input":ou(e,r),o=Qs(e,r),se("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=pe({},r,{value:void 0}),se("invalid",e);break;case"textarea":su(e,r),o=Zs(e,r),se("invalid",e);break;default:o=r}Js(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="style"?ef(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&qc(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Rr(e,a):typeof a=="number"&&Rr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&se("scroll",e):a!=null&&Gl(e,i,a,s))}switch(n){case"input":ao(e),iu(e,r,!1);break;case"textarea":ao(e),lu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+rn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?In(e,!!r.multiple,i,!1):r.defaultValue!=null&&In(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Jo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)Ed(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=pn(Wr.current),pn(Ct.current),go(t)){if(r=t.stateNode,n=t.memoizedProps,r[kt]=t,(i=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:vo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=t,t.stateNode=r}return Te(t),null;case 13:if(le(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&Xe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Uf(),Yn(),t.flags|=98560,i=!1;else if(i=go(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(E(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[kt]=t}else Yn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),i=!1}else dt!==null&&(Ll(dt),dt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(fe.current&1)!==0?we===0&&(we=3):Oa())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return Xn(),_l(e,t),e===null&&Ar(t.stateNode.containerInfo),Te(t),null;case 10:return ma(t.type._context),Te(t),null;case 17:return Ue(t.type)&&ei(),Te(t),null;case 19:if(le(fe),i=t.memoizedState,i===null)return Te(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)fr(i,!1);else{if(we!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=li(e),s!==null){for(t.flags|=128,fr(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(fe,fe.current&1|2),t.child}e=e.sibling}i.tail!==null&&he()>Gn&&(t.flags|=128,r=!0,fr(i,!1),t.lanes=4194304)}else{if(!r)if(e=li(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ue)return Te(t),null}else 2*he()-i.renderingStartTime>Gn&&n!==1073741824&&(t.flags|=128,r=!0,fr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=he(),t.sibling=null,n=fe.current,ie(fe,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return Na(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(He&1073741824)!==0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Pm(e,t){switch(ca(t),t.tag){case 1:return Ue(t.type)&&ei(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xn(),le(je),le(Oe),wa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ga(t),null;case 13:if(le(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(fe),null;case 4:return Xn(),null;case 10:return ma(t.type._context),null;case 22:case 23:return Na(),null;case 24:return null;default:return null}}var So=!1,Ne=!1,Nm=typeof WeakSet=="function"?WeakSet:Set,R=null;function Ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(e,t,r)}else n.current=null}function zl(e,t,n){try{n()}catch(r){me(e,t,r)}}var Ku=!1;function Om(e,t){if(cl=Ko,e=Pf(),aa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,u=0,p=0,m=e,y=null;t:for(;;){for(var w;m!==n||o!==0&&m.nodeType!==3||(l=s+o),m!==i||r!==0&&m.nodeType!==3||(a=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(w=m.firstChild)!==null;)y=m,m=w;for(;;){if(m===e)break t;if(y===n&&++u===o&&(l=s),y===i&&++p===r&&(a=s),(w=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=w}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(fl={focusedElem:e,selectionRange:n},Ko=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var x=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,M=x.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?S:ct(t.type,S),M);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(g){me(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return x=Ku,Ku=!1,x}function Tr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&zl(t,n,i)}o=o.next}while(o!==r)}}function zi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Tl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function _d(e){var t=e.alternate;t!==null&&(e.alternate=null,_d(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kt],delete t[Ur],delete t[ml],delete t[pm],delete t[mm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zd(e){return e.tag===5||e.tag===3||e.tag===4}function Zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Jo));else if(r!==4&&(e=e.child,e!==null))for(Pl(e,t,n),e=e.sibling;e!==null;)Pl(e,t,n),e=e.sibling}function Nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Nl(e,t,n),e=e.sibling;e!==null;)Nl(e,t,n),e=e.sibling}var $e=null,ft=!1;function At(e,t,n){for(n=n.child;n!==null;)Td(e,t,n),n=n.sibling}function Td(e,t,n){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(wi,n)}catch{}switch(n.tag){case 5:Ne||Ln(n,t);case 6:var r=$e,o=ft;$e=null,At(e,t,n),$e=r,ft=o,$e!==null&&(ft?(e=$e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(ft?(e=$e,n=n.stateNode,e.nodeType===8?ks(e.parentNode,n):e.nodeType===1&&ks(e,n),Fr(e)):ks($e,n.stateNode));break;case 4:r=$e,o=ft,$e=n.stateNode.containerInfo,ft=!0,At(e,t,n),$e=r,ft=o;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&((i&2)!==0||(i&4)!==0)&&zl(n,t,s),o=o.next}while(o!==r)}At(e,t,n);break;case 1:if(!Ne&&(Ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){me(n,t,l)}At(e,t,n);break;case 21:At(e,t,n);break;case 22:n.mode&1?(Ne=(r=Ne)||n.memoizedState!==null,At(e,t,n),Ne=r):At(e,t,n);break;default:At(e,t,n)}}function qu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Nm),t.forEach(function(r){var o=Am.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:$e=l.stateNode,ft=!1;break e;case 3:$e=l.stateNode.containerInfo,ft=!0;break e;case 4:$e=l.stateNode.containerInfo,ft=!0;break e}l=l.return}if($e===null)throw Error(E(160));Td(i,s,o),$e=null,ft=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){me(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pd(t,e),t=t.sibling}function Pd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),gt(e),r&4){try{Tr(3,e,e.return),zi(3,e)}catch(S){me(e,e.return,S)}try{Tr(5,e,e.return)}catch(S){me(e,e.return,S)}}break;case 1:ut(t,e),gt(e),r&512&&n!==null&&Ln(n,n.return);break;case 5:if(ut(t,e),gt(e),r&512&&n!==null&&Ln(n,n.return),e.flags&32){var o=e.stateNode;try{Rr(o,"")}catch(S){me(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Gc(o,i),el(l,s);var u=el(l,i);for(s=0;s<a.length;s+=2){var p=a[s],m=a[s+1];p==="style"?ef(o,m):p==="dangerouslySetInnerHTML"?qc(o,m):p==="children"?Rr(o,m):Gl(o,p,m,u)}switch(l){case"input":Gs(o,i);break;case"textarea":Kc(o,i);break;case"select":var y=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?In(o,!!i.multiple,w,!1):y!==!!i.multiple&&(i.defaultValue!=null?In(o,!!i.multiple,i.defaultValue,!0):In(o,!!i.multiple,i.multiple?[]:"",!1))}o[Ur]=i}catch(S){me(e,e.return,S)}}break;case 6:if(ut(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(S){me(e,e.return,S)}}break;case 3:if(ut(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fr(t.containerInfo)}catch(S){me(e,e.return,S)}break;case 4:ut(t,e),gt(e);break;case 13:ut(t,e),gt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ta=he())),r&4&&qu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Ne=(u=Ne)||p,ut(t,e),Ne=u):ut(t,e),gt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&(e.mode&1)!==0)for(R=e,p=e.child;p!==null;){for(m=R=p;R!==null;){switch(y=R,w=y.child,y.tag){case 0:case 11:case 14:case 15:Tr(4,y,y.return);break;case 1:Ln(y,y.return);var x=y.stateNode;if(typeof x.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(S){me(r,n,S)}}break;case 5:Ln(y,y.return);break;case 22:if(y.memoizedState!==null){ec(m);continue}}w!==null?(w.return=y,R=w):ec(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{o=m.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,a=m.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Jc("display",s))}catch(S){me(e,e.return,S)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(S){me(e,e.return,S)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ut(t,e),gt(e),r&4&&qu(e);break;case 21:break;default:ut(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zd(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Rr(o,""),r.flags&=-33);var i=Zu(e);Nl(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Zu(e);Pl(e,l,s);break;default:throw Error(E(161))}}catch(a){me(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mm(e,t,n){R=e,Nd(e)}function Nd(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var o=R,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||So;if(!s){var l=o.alternate,a=l!==null&&l.memoizedState!==null||Ne;l=So;var u=Ne;if(So=s,(Ne=a)&&!u)for(R=o;R!==null;)s=R,a=s.child,s.tag===22&&s.memoizedState!==null?tc(o):a!==null?(a.return=s,R=a):tc(o);for(;i!==null;)R=i,Nd(i),i=i.sibling;R=o,So=l,Ne=u}Ju(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,R=i):Ju(e)}}function Ju(e){for(;R!==null;){var t=R;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ne||zi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ne)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Iu(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Iu(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Fr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ne||t.flags&512&&Tl(t)}catch(y){me(t,t.return,y)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function ec(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function tc(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zi(4,t)}catch(a){me(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){me(t,o,a)}}var i=t.return;try{Tl(t)}catch(a){me(t,i,a)}break;case 5:var s=t.return;try{Tl(t)}catch(a){me(t,s,a)}}}catch(a){me(t,t.return,a)}if(t===e){R=null;break}var l=t.sibling;if(l!==null){l.return=t.return,R=l;break}R=t.return}}var Rm=Math.ceil,ci=Vt.ReactCurrentDispatcher,_a=Vt.ReactCurrentOwner,ot=Vt.ReactCurrentBatchConfig,X=0,Se=null,ve=null,Ce=0,He=0,Dn=ln(0),we=0,Qr=null,wn=0,Ti=0,za=0,Pr=null,be=null,Ta=0,Gn=1/0,Tt=null,fi=!1,Ol=null,en=null,ko=!1,Qt=null,di=0,Nr=0,Ml=null,bo=-1,Ao=0;function Le(){return(X&6)!==0?he():bo!==-1?bo:bo=he()}function tn(e){return(e.mode&1)===0?1:(X&2)!==0&&Ce!==0?Ce&-Ce:ym.transition!==null?(Ao===0&&(Ao=pf()),Ao):(e=J,e!==0||(e=window.event,e=e===void 0?16:xf(e.type)),e)}function mt(e,t,n,r){if(50<Nr)throw Nr=0,Ml=null,Error(E(185));Jr(e,n,r),((X&2)===0||e!==Se)&&(e===Se&&((X&2)===0&&(Ti|=n),we===4&&Yt(e,Ce)),Be(e,r),n===1&&X===0&&(t.mode&1)===0&&(Gn=he()+500,Ci&&an()))}function Be(e,t){var n=e.callbackNode;yp(e,t);var r=Go(e,e===Se?Ce:0);if(r===0)n!==null&&cu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&cu(n),t===1)e.tag===0?hm(nc.bind(null,e)):bf(nc.bind(null,e)),fm(function(){(X&6)===0&&an()}),n=null;else{switch(mf(r)){case 1:n=ea;break;case 4:n=ff;break;case 16:n=Qo;break;case 536870912:n=df;break;default:n=Qo}n=Vd(n,Od.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Od(e,t){if(bo=-1,Ao=0,(X&6)!==0)throw Error(E(327));var n=e.callbackNode;if(jn()&&e.callbackNode!==n)return null;var r=Go(e,e===Se?Ce:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=pi(e,r);else{t=r;var o=X;X|=2;var i=Rd();(Se!==e||Ce!==t)&&(Tt=null,Gn=he()+500,mn(e,t));do try{Im();break}catch(l){Md(e,l)}while(1);pa(),ci.current=i,X=o,ve!==null?t=0:(Se=null,Ce=0,t=we)}if(t!==0){if(t===2&&(o=il(e),o!==0&&(r=o,t=Rl(e,o))),t===1)throw n=Qr,mn(e,0),Yt(e,r),Be(e,he()),n;if(t===6)Yt(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Lm(o)&&(t=pi(e,r),t===2&&(i=il(e),i!==0&&(r=i,t=Rl(e,i))),t===1))throw n=Qr,mn(e,0),Yt(e,r),Be(e,he()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:cn(e,be,Tt);break;case 3:if(Yt(e,r),(r&130023424)===r&&(t=Ta+500-he(),10<t)){if(Go(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=pl(cn.bind(null,e,be,Tt),t);break}cn(e,be,Tt);break;case 4:if(Yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-pt(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rm(r/1960))-r,10<r){e.timeoutHandle=pl(cn.bind(null,e,be,Tt),r);break}cn(e,be,Tt);break;case 5:cn(e,be,Tt);break;default:throw Error(E(329))}}}return Be(e,he()),e.callbackNode===n?Od.bind(null,e):null}function Rl(e,t){var n=Pr;return e.current.memoizedState.isDehydrated&&(mn(e,t).flags|=256),e=pi(e,t),e!==2&&(t=be,be=n,t!==null&&Ll(t)),e}function Ll(e){be===null?be=e:be.push.apply(be,e)}function Lm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ht(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Yt(e,t){for(t&=~za,t&=~Ti,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function nc(e){if((X&6)!==0)throw Error(E(327));jn();var t=Go(e,0);if((t&1)===0)return Be(e,he()),null;var n=pi(e,t);if(e.tag!==0&&n===2){var r=il(e);r!==0&&(t=r,n=Rl(e,r))}if(n===1)throw n=Qr,mn(e,0),Yt(e,t),Be(e,he()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cn(e,be,Tt),Be(e,he()),null}function Pa(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(Gn=he()+500,Ci&&an())}}function xn(e){Qt!==null&&Qt.tag===0&&(X&6)===0&&jn();var t=X;X|=1;var n=ot.transition,r=J;try{if(ot.transition=null,J=1,e)return e()}finally{J=r,ot.transition=n,X=t,(X&6)===0&&an()}}function Na(){He=Dn.current,le(Dn)}function mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,cm(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(ca(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ei();break;case 3:Xn(),le(je),le(Oe),wa();break;case 5:ga(r);break;case 4:Xn();break;case 13:le(fe);break;case 19:le(fe);break;case 10:ma(r.type._context);break;case 22:case 23:Na()}n=n.return}if(Se=e,ve=e=nn(e.current,null),Ce=He=t,we=0,Qr=null,za=Ti=wn=0,be=Pr=null,dn!==null){for(t=0;t<dn.length;t++)if(n=dn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}dn=null}return e}function Md(e,t){do{var n=ve;try{if(pa(),Io.current=ui,ai){for(var r=de.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ai=!1}if(gn=0,xe=ge=de=null,zr=!1,Yr=0,_a.current=null,n===null||n.return===null){we=1,Qr=t,ve=null;break}e:{var i=e,s=n.return,l=n,a=t;if(t=Ce,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,p=l,m=p.tag;if((p.mode&1)===0&&(m===0||m===11||m===15)){var y=p.alternate;y?(p.updateQueue=y.updateQueue,p.memoizedState=y.memoizedState,p.lanes=y.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=Bu(s);if(w!==null){w.flags&=-257,Wu(w,s,l,i,t),w.mode&1&&Uu(i,u,t),t=w,a=u;var x=t.updateQueue;if(x===null){var S=new Set;S.add(a),t.updateQueue=S}else x.add(a);break e}else{if((t&1)===0){Uu(i,u,t),Oa();break e}a=Error(E(426))}}else if(ue&&l.mode&1){var M=Bu(s);if(M!==null){(M.flags&65536)===0&&(M.flags|=256),Wu(M,s,l,i,t),fa(Qn(a,l));break e}}i=a=Qn(a,l),we!==4&&(we=2),Pr===null?Pr=[i]:Pr.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=hd(i,a,t);Du(i,f);break e;case 1:l=a;var c=i.type,d=i.stateNode;if((i.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(en===null||!en.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var g=yd(i,l,t);Du(i,g);break e}}i=i.return}while(i!==null)}Dd(n)}catch(_){t=_,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(1)}function Rd(){var e=ci.current;return ci.current=ui,e===null?ui:e}function Oa(){(we===0||we===3||we===2)&&(we=4),Se===null||(wn&268435455)===0&&(Ti&268435455)===0||Yt(Se,Ce)}function pi(e,t){var n=X;X|=2;var r=Rd();(Se!==e||Ce!==t)&&(Tt=null,mn(e,t));do try{Dm();break}catch(o){Md(e,o)}while(1);if(pa(),X=n,ci.current=r,ve!==null)throw Error(E(261));return Se=null,Ce=0,we}function Dm(){for(;ve!==null;)Ld(ve)}function Im(){for(;ve!==null&&!lp();)Ld(ve)}function Ld(e){var t=Fd(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?Dd(e):ve=t,_a.current=null}function Dd(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Tm(n,t,He),n!==null){ve=n;return}}else{if(n=Pm(n,t),n!==null){n.flags&=32767,ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ve=null;return}}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);we===0&&(we=5)}function cn(e,t,n){var r=J,o=ot.transition;try{ot.transition=null,J=1,Fm(e,t,n,r)}finally{ot.transition=o,J=r}return null}function Fm(e,t,n,r){do jn();while(Qt!==null);if((X&6)!==0)throw Error(E(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(vp(e,i),e===Se&&(ve=Se=null,Ce=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ko||(ko=!0,Vd(Qo,function(){return jn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=ot.transition,ot.transition=null;var s=J;J=1;var l=X;X|=4,_a.current=null,Om(e,n),Pd(n,e),rm(fl),Ko=!!cl,fl=cl=null,e.current=n,Mm(n),ap(),X=l,J=s,ot.transition=i}else e.current=n;if(ko&&(ko=!1,Qt=e,di=o),i=e.pendingLanes,i===0&&(en=null),fp(n.stateNode),Be(e,he()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(fi)throw fi=!1,e=Ol,Ol=null,e;return(di&1)!==0&&e.tag!==0&&jn(),i=e.pendingLanes,(i&1)!==0?e===Ml?Nr++:(Nr=0,Ml=e):Nr=0,an(),null}function jn(){if(Qt!==null){var e=mf(di),t=ot.transition,n=J;try{if(ot.transition=null,J=16>e?16:e,Qt===null)var r=!1;else{if(e=Qt,Qt=null,di=0,(X&6)!==0)throw Error(E(331));var o=X;for(X|=4,R=e.current;R!==null;){var i=R,s=i.child;if((R.flags&16)!==0){var l=i.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(R=u;R!==null;){var p=R;switch(p.tag){case 0:case 11:case 15:Tr(8,p,i)}var m=p.child;if(m!==null)m.return=p,R=m;else for(;R!==null;){p=R;var y=p.sibling,w=p.return;if(_d(p),p===u){R=null;break}if(y!==null){y.return=w,R=y;break}R=w}}}var x=i.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var M=S.sibling;S.sibling=null,S=M}while(S!==null)}}R=i}}if((i.subtreeFlags&2064)!==0&&s!==null)s.return=i,R=s;else e:for(;R!==null;){if(i=R,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Tr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,R=f;break e}R=i.return}}var c=e.current;for(R=c;R!==null;){s=R;var d=s.child;if((s.subtreeFlags&2064)!==0&&d!==null)d.return=s,R=d;else e:for(s=c;R!==null;){if(l=R,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:zi(9,l)}}catch(_){me(l,l.return,_)}if(l===s){R=null;break e}var g=l.sibling;if(g!==null){g.return=l.return,R=g;break e}R=l.return}}if(X=o,an(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(wi,e)}catch{}r=!0}return r}finally{J=n,ot.transition=t}}return!1}function rc(e,t,n){t=Qn(n,t),t=hd(e,t,1),e=Jt(e,t,1),t=Le(),e!==null&&(Jr(e,1,t),Be(e,t))}function me(e,t,n){if(e.tag===3)rc(e,e,n);else for(;t!==null;){if(t.tag===3){rc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(en===null||!en.has(r))){e=Qn(n,e),e=yd(t,e,1),t=Jt(t,e,1),e=Le(),t!==null&&(Jr(t,1,e),Be(t,e));break}}t=t.return}}function Vm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,Se===e&&(Ce&n)===n&&(we===4||we===3&&(Ce&130023424)===Ce&&500>he()-Ta?mn(e,0):za|=n),Be(e,t)}function Id(e,t){t===0&&((e.mode&1)===0?t=1:(t=fo,fo<<=1,(fo&130023424)===0&&(fo=4194304)));var n=Le();e=It(e,t),e!==null&&(Jr(e,t,n),Be(e,n))}function bm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Id(e,n)}function Am(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Id(e,n)}var Fd;Fd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Ae=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ae=!1,zm(e,t,n);Ae=(e.flags&131072)!==0}else Ae=!1,ue&&(t.flags&1048576)!==0&&Af(t,ri,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vo(e,t),e=t.pendingProps;var o=Wn(t,Oe.current);An(t,n),o=Sa(null,t,r,e,o,n);var i=ka();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(i=!0,ti(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ya(t),o.updater=Ei,t.stateNode=o,o._reactInternals=t,xl(t,r,e,n),t=$l(null,t,r,!0,i,n)):(t.tag=0,ue&&i&&ua(t),Re(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Um(r),e=ct(r,e),o){case 0:t=kl(null,t,r,e,n);break e;case 1:t=Xu(null,t,r,e,n);break e;case 11:t=Yu(null,t,r,e,n);break e;case 14:t=Hu(null,t,r,ct(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),kl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),Xu(e,t,r,o,n);case 3:e:{if(xd(t),e===null)throw Error(E(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Wf(e,t),si(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Qn(Error(E(423)),t),t=Qu(e,t,r,n,o);break e}else if(r!==o){o=Qn(Error(E(424)),t),t=Qu(e,t,r,n,o);break e}else for(Xe=qt(t.stateNode.containerInfo.firstChild),Qe=t,ue=!0,dt=null,n=Qf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yn(),r===o){t=Ft(e,t,n);break e}Re(e,t,r,n)}t=t.child}return t;case 5:return Gf(t),e===null&&vl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,dl(r,o)?s=null:i!==null&&dl(r,i)&&(t.flags|=32),wd(e,t),Re(e,t,s,n),t.child;case 6:return e===null&&vl(t),null;case 13:return Sd(e,t,n);case 4:return va(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hn(t,null,r,n):Re(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),Yu(e,t,r,o,n);case 7:return Re(e,t,t.pendingProps,n),t.child;case 8:return Re(e,t,t.pendingProps.children,n),t.child;case 12:return Re(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,ie(oi,r._currentValue),r._currentValue=s,i!==null)if(ht(i.value,s)){if(i.children===o.children&&!je.current){t=Ft(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Mt(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?a.next=a:(a.next=p.next,p.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),gl(i.return,n,t),l.lanes|=n;break}a=a.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(E(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),gl(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Re(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,An(t,n),o=it(o),r=r(o),t.flags|=1,Re(e,t,r,n),t.child;case 14:return r=t.type,o=ct(r,t.pendingProps),o=ct(r.type,o),Hu(e,t,r,o,n);case 15:return vd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),Vo(e,t),t.tag=1,Ue(r)?(e=!0,ti(t)):e=!1,An(t,n),Hf(t,r,o),xl(t,r,o,n),$l(null,t,r,!0,e,n);case 19:return kd(e,t,n);case 22:return gd(e,t,n)}throw Error(E(156,t.tag))};function Vd(e,t){return cf(e,t)}function jm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,n,r){return new jm(e,t,n,r)}function Ma(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Um(e){if(typeof e=="function")return Ma(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zl)return 11;if(e===ql)return 14}return 2}function nn(e,t){var n=e.alternate;return n===null?(n=nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function jo(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Ma(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case En:return hn(n.children,o,i,t);case Kl:s=8,o|=8;break;case Ws:return e=nt(12,n,t,o|2),e.elementType=Ws,e.lanes=i,e;case Ys:return e=nt(13,n,t,o),e.elementType=Ys,e.lanes=i,e;case Hs:return e=nt(19,n,t,o),e.elementType=Hs,e.lanes=i,e;case Hc:return Pi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wc:s=10;break e;case Yc:s=9;break e;case Zl:s=11;break e;case ql:s=14;break e;case Ut:s=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=nt(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function hn(e,t,n,r){return e=nt(7,e,r,t),e.lanes=n,e}function Pi(e,t,n,r){return e=nt(22,e,r,t),e.elementType=Hc,e.lanes=n,e.stateNode={isHidden:!1},e}function Ns(e,t,n){return e=nt(6,e,null,t),e.lanes=n,e}function Os(e,t,n){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fs(0),this.expirationTimes=fs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fs(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ra(e,t,n,r,o,i,s,l,a){return e=new Bm(e,t,n,l,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=nt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ya(i),e}function Wm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function bd(e){if(!e)return on;e=e._reactInternals;e:{if(kn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Ue(n))return Vf(e,n,t)}return t}function Ad(e,t,n,r,o,i,s,l,a){return e=Ra(n,r,!0,e,o,i,s,l,a),e.context=bd(null),n=e.current,r=Le(),o=tn(n),i=Mt(r,o),i.callback=t!=null?t:null,Jt(n,i,o),e.current.lanes=o,Jr(e,o,r),Be(e,r),e}function Ni(e,t,n,r){var o=t.current,i=Le(),s=tn(o);return n=bd(n),t.context===null?t.context=n:t.pendingContext=n,t=Mt(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Jt(o,t,s),e!==null&&(mt(e,o,s,i),Do(e,o,s)),s}function mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function oc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function La(e,t){oc(e,t),(e=e.alternate)&&oc(e,t)}function Ym(){return null}var jd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Da(e){this._internalRoot=e}Oi.prototype.render=Da.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Ni(e,t,null,null)};Oi.prototype.unmount=Da.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xn(function(){Ni(null,e,null,null)}),t[Dt]=null}};function Oi(e){this._internalRoot=e}Oi.prototype.unstable_scheduleHydration=function(e){if(e){var t=vf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wt.length&&t!==0&&t<Wt[n].priority;n++);Wt.splice(n,0,e),n===0&&wf(e)}};function Ia(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ic(){}function Hm(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=mi(s);i.call(u)}}var s=Ad(t,r,e,0,null,!1,!1,"",ic);return e._reactRootContainer=s,e[Dt]=s.current,Ar(e.nodeType===8?e.parentNode:e),xn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=mi(a);l.call(u)}}var a=Ra(e,0,!1,null,null,!1,!1,"",ic);return e._reactRootContainer=a,e[Dt]=a.current,Ar(e.nodeType===8?e.parentNode:e),xn(function(){Ni(t,a,n,r)}),a}function Ri(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var l=o;o=function(){var a=mi(s);l.call(a)}}Ni(t,s,e,o)}else s=Hm(n,t,e,o,r);return mi(s)}hf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xr(t.pendingLanes);n!==0&&(ta(t,n|1),Be(t,he()),(X&6)===0&&(Gn=he()+500,an()))}break;case 13:xn(function(){var r=It(e,1);if(r!==null){var o=Le();mt(r,e,1,o)}}),La(e,1)}};na=function(e){if(e.tag===13){var t=It(e,134217728);if(t!==null){var n=Le();mt(t,e,134217728,n)}La(e,134217728)}};yf=function(e){if(e.tag===13){var t=tn(e),n=It(e,t);if(n!==null){var r=Le();mt(n,e,t,r)}La(e,t)}};vf=function(){return J};gf=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};nl=function(e,t,n){switch(t){case"input":if(Gs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=$i(r);if(!o)throw Error(E(90));Qc(r),Gs(r,o)}}}break;case"textarea":Kc(e,n);break;case"select":t=n.value,t!=null&&In(e,!!n.multiple,t,!1)}};rf=Pa;of=xn;var Xm={usingClientEntryPoint:!1,Events:[to,Pn,$i,tf,nf,Pa]},dr={findFiberByHostInstance:fn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Qm={bundleType:dr.bundleType,version:dr.version,rendererPackageName:dr.rendererPackageName,rendererConfig:dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=af(e),e===null?null:e.stateNode},findFiberByHostInstance:dr.findFiberByHostInstance||Ym,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{wi=$o.inject(Qm),$t=$o}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xm;Ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ia(t))throw Error(E(200));return Wm(e,t,null,n)};Ze.createRoot=function(e,t){if(!Ia(e))throw Error(E(299));var n=!1,r="",o=jd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ra(e,1,!1,null,null,n,!1,r,o),e[Dt]=t.current,Ar(e.nodeType===8?e.parentNode:e),new Da(t)};Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=af(t),e=e===null?null:e.stateNode,e};Ze.flushSync=function(e){return xn(e)};Ze.hydrate=function(e,t,n){if(!Mi(t))throw Error(E(200));return Ri(null,e,t,!0,n)};Ze.hydrateRoot=function(e,t,n){if(!Ia(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=jd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Ad(t,null,e,1,n!=null?n:null,o,!1,i,s),e[Dt]=t.current,Ar(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Oi(t)};Ze.render=function(e,t,n){if(!Mi(t))throw Error(E(200));return Ri(null,e,t,!1,n)};Ze.unmountComponentAtNode=function(e){if(!Mi(e))throw Error(E(40));return e._reactRootContainer?(xn(function(){Ri(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1};Ze.unstable_batchedUpdates=Pa;Ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Mi(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Ri(e,t,n,!1,r)};Ze.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ze})(bc);var sc=bc.exports;Us.createRoot=sc.createRoot,Us.hydrateRoot=sc.hydrateRoot;const lc=e=>{let t;const n=new Set,r=(a,u)=>{const p=typeof a=="function"?a(t):a;if(!Object.is(p,t)){const m=t;t=(u!=null?u:typeof p!="object")?p:Object.assign({},t,p),n.forEach(y=>y(t,m))}},o=()=>t,l={setState:r,getState:o,subscribe:a=>(n.add(a),()=>n.delete(a)),destroy:()=>n.clear()};return t=e(r,o,l),l},Gm=e=>e?lc(e):lc;var Ud={exports:{}},Bd={},Wd={exports:{}},Yd={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kn=A.exports;function Km(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Zm=typeof Object.is=="function"?Object.is:Km,qm=Kn.useState,Jm=Kn.useEffect,eh=Kn.useLayoutEffect,th=Kn.useDebugValue;function nh(e,t){var n=t(),r=qm({inst:{value:n,getSnapshot:t}}),o=r[0].inst,i=r[1];return eh(function(){o.value=n,o.getSnapshot=t,Ms(o)&&i({inst:o})},[e,n,t]),Jm(function(){return Ms(o)&&i({inst:o}),e(function(){Ms(o)&&i({inst:o})})},[e]),th(n),n}function Ms(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Zm(e,n)}catch{return!0}}function rh(e,t){return t()}var oh=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?rh:nh;Yd.useSyncExternalStore=Kn.useSyncExternalStore!==void 0?Kn.useSyncExternalStore:oh;(function(e){e.exports=Yd})(Wd);/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Li=A.exports,ih=Wd.exports;function sh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lh=typeof Object.is=="function"?Object.is:sh,ah=ih.useSyncExternalStore,uh=Li.useRef,ch=Li.useEffect,fh=Li.useMemo,dh=Li.useDebugValue;Bd.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var i=uh(null);if(i.current===null){var s={hasValue:!1,value:null};i.current=s}else s=i.current;i=fh(function(){function a(w){if(!u){if(u=!0,p=w,w=r(w),o!==void 0&&s.hasValue){var x=s.value;if(o(x,w))return m=x}return m=w}if(x=m,lh(p,w))return x;var S=r(w);return o!==void 0&&o(x,S)?x:(p=w,m=S)}var u=!1,p,m,y=n===void 0?null:n;return[function(){return a(t())},y===null?void 0:function(){return a(y())}]},[t,n,r,o]);var l=ah(e,i[0],i[1]);return ch(function(){s.hasValue=!0,s.value=l},[l]),dh(l),l};(function(e){e.exports=Bd})(Ud);const ph=Ul(Ud.exports),{useSyncExternalStoreWithSelector:mh}=ph;function hh(e,t=e.getState,n){const r=mh(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return A.exports.useDebugValue(r),r}const ac=e=>{const t=typeof e=="function"?Gm(e):e,n=(r,o)=>hh(t,r,o);return Object.assign(n,t),n},yh=e=>e?ac(e):ac;var Di={exports:{}},Ii={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vh=A.exports,gh=Symbol.for("react.element"),wh=Symbol.for("react.fragment"),xh=Object.prototype.hasOwnProperty,Sh=vh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kh={key:!0,ref:!0,__self:!0,__source:!0};function Hd(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)xh.call(t,r)&&!kh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:gh,type:e,key:i,ref:s,props:o,_owner:Sh.current}}Ii.Fragment=wh;Ii.jsx=Hd;Ii.jsxs=Hd;(function(e){e.exports=Ii})(Di);const $h=Di.exports.Fragment,Z=Di.exports.jsx,Rt=Di.exports.jsxs,ro=rt.createContext(null),Ch=({children:e})=>{const t=window.localStorage.getItem("theme"),[n,r]=rt.useState(t?t==="true":window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches),o=()=>{window.localStorage.setItem("theme",`${!n}`),r(!n)};return Z(ro.Provider,{value:{toggle:n,toggleTheme:o},children:e})},Ht=e=>{const{toggle:t}=rt.useContext(ro),{fontSize:n,stroke:r,color:o,uppercase:i,className:s,children:l}=e;return Z("p",{className:`${n!=null?n:"text-9xl"} bg-transparent inline-block word-spacing ${r?t?"text-stroke":"text-stroke-light":o!=null?o:t?"text-white":"text-gray-800"} ${s!=null?s:""}`,children:i?l==null?void 0:l.toString().toUpperCase():l})},Rs=e=>{var t,n;return Z("button",{className:`pr-2 pl-2 ${(t=e.fontSize)!=null?t:""} focus:outline-none ${(n=e.className)!=null?n:""}`,onClick:e.onClick,children:e.children})},Dl=e=>{var t;return Z("div",{className:`flex flex-col content-center justify-center text-center h-screen bg-transparent ${rt.useContext(ro).toggle?"text-white":"text-gray-800"} ${(t=e.className)!=null?t:""}`,children:e.children})};var Xd={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(typeof self<"u"?self:O0,()=>(()=>{var n={d:(C,h)=>{for(var v in h)n.o(h,v)&&!n.o(C,v)&&Object.defineProperty(C,v,{enumerable:!0,get:h[v]})},o:(C,h)=>Object.prototype.hasOwnProperty.call(C,h),r:C=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(C,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(C,"__esModule",{value:!0})}},r={};function o(){return typeof navigator<"u"?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600:null}n.r(r),n.d(r,{default:()=>bt}),Number.prototype.clamp=function(C,h){return Math.min(Math.max(this,C),h)};function i(C){for(;C.children&&C.children.length>0;)i(C.children[0]),C.remove(C.children[0]);C.geometry&&C.geometry.dispose(),C.material&&(Object.keys(C.material).forEach(h=>{C.material[h]&&C.material[h]!==null&&typeof C.material[h].dispose=="function"&&C.material[h].dispose()}),C.material.dispose())}const s=typeof window=="object";let l=s&&window.THREE||{};s&&!window.VANTA&&(window.VANTA={});const a=s&&window.VANTA||{};a.register=(C,h)=>a[C]=v=>new h(v),a.version="0.5.24";const u=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};a.VantaBase=class{constructor(C={}){if(!s)return!1;a.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.windowGyroWrapper=this.windowGyroWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this);const h=typeof this.getDefaultOptions=="function"?this.getDefaultOptions():this.defaultOptions;if(this.options=Object.assign({mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1},h),(C instanceof HTMLElement||typeof C=="string")&&(C={el:C}),Object.assign(this.options,C),this.options.THREE&&(l=this.options.THREE),this.el=this.options.el,this.el==null)u('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){const O=this.el;if(this.el=(v=O,document.querySelector(v)),!this.el)return void u("Cannot find element",O)}var v,$;this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(O){return u("Init error",O),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),void(this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=($=this.options.backgroundColor,typeof $=="number"?"#"+("00000"+$.toString(16)).slice(-6):$)))}this.initMouse(),this.resize(),this.animationLoop();const z=window.addEventListener;z("resize",this.resize),window.requestAnimationFrame(this.resize),this.options.mouseControls&&(z("scroll",this.windowMouseMoveWrapper),z("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(z("touchstart",this.windowTouchWrapper),z("touchmove",this.windowTouchWrapper)),this.options.gyroControls&&z("deviceorientation",this.windowGyroWrapper)}setOptions(C={}){Object.assign(this.options,C),this.triggerMouseMove()}prepareEl(){let C,h;if(typeof Node<"u"&&Node.TEXT_NODE)for(C=0;C<this.el.childNodes.length;C++){const v=this.el.childNodes[C];if(v.nodeType===Node.TEXT_NODE){const $=document.createElement("span");$.textContent=v.textContent,v.parentElement.insertBefore($,v),v.remove()}}for(C=0;C<this.el.children.length;C++)h=this.el.children[C],getComputedStyle(h).position==="static"&&(h.style.position="relative"),getComputedStyle(h).zIndex==="auto"&&(h.style.zIndex=1);getComputedStyle(this.el).position==="static"&&(this.el.style.position="relative")}applyCanvasStyles(C,h={}){Object.assign(C.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object.assign(C.style,h),C.classList.add("vanta-canvas")}initThree(){l.WebGLRenderer?(this.renderer=new l.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new l.Scene):console.warn("[VANTA] No THREE defined on window")}getCanvasElement(){return this.renderer?this.renderer.domElement:this.p5renderer?this.p5renderer.canvas:void 0}getCanvasRect(){const C=this.getCanvasElement();return!!C&&C.getBoundingClientRect()}windowMouseMoveWrapper(C){const h=this.getCanvasRect();if(!h)return!1;const v=C.clientX-h.left,$=C.clientY-h.top;v>=0&&$>=0&&v<=h.width&&$<=h.height&&(this.mouseX=v,this.mouseY=$,this.options.mouseEase||this.triggerMouseMove(v,$))}windowTouchWrapper(C){const h=this.getCanvasRect();if(!h)return!1;if(C.touches.length===1){const v=C.touches[0].clientX-h.left,$=C.touches[0].clientY-h.top;v>=0&&$>=0&&v<=h.width&&$<=h.height&&(this.mouseX=v,this.mouseY=$,this.options.mouseEase||this.triggerMouseMove(v,$))}}windowGyroWrapper(C){const h=this.getCanvasRect();if(!h)return!1;const v=Math.round(2*C.alpha)-h.left,$=Math.round(2*C.beta)-h.top;v>=0&&$>=0&&v<=h.width&&$<=h.height&&(this.mouseX=v,this.mouseY=$,this.options.mouseEase||this.triggerMouseMove(v,$))}triggerMouseMove(C,h){C===void 0&&h===void 0&&(this.options.mouseEase?(C=this.mouseEaseX,h=this.mouseEaseY):(C=this.mouseX,h=this.mouseY)),this.uniforms&&(this.uniforms.iMouse.value.x=C/this.scale,this.uniforms.iMouse.value.y=h/this.scale);const v=C/this.width,$=h/this.height;typeof this.onMouseMove=="function"&&this.onMouseMove(v,$)}setSize(){this.scale||(this.scale=1),o()&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}initMouse(){(!this.mouseX&&!this.mouseY||this.mouseX===this.options.minWidth/2&&this.mouseY===this.options.minHeight/2)&&(this.mouseX=this.width/2,this.mouseY=this.height/2,this.triggerMouseMove(this.mouseX,this.mouseY))}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,typeof this.camera.updateProjectionMatrix=="function"&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),typeof this.onResize=="function"&&this.onResize()}isOnScreen(){const C=this.el.offsetHeight,h=this.el.getBoundingClientRect(),v=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,$=h.top+v;return $-window.innerHeight<=v&&v<=$+C}animationLoop(){this.t||(this.t=0),this.t2||(this.t2=0);const C=performance.now();if(this.prevNow){let h=(C-this.prevNow)/16.666666666666668;h=Math.max(.2,Math.min(h,5)),this.t+=h,this.t2+=(this.options.speed||1)*h,this.uniforms&&(this.uniforms.iTime.value=.016667*this.t2)}return this.prevNow=C,this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX+=.05*(this.mouseX-this.mouseEaseX),this.mouseEaseY+=.05*(this.mouseY-this.mouseEaseY),this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&(typeof this.onUpdate=="function"&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update(),typeof this.afterRender=="function"&&this.afterRender()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);typeof this.onRestart=="function"&&this.onRestart(),this.init()}init(){typeof this.onInit=="function"&&this.onInit()}destroy(){typeof this.onDestroy=="function"&&this.onDestroy();const C=window.removeEventListener;C("touchstart",this.windowTouchWrapper),C("touchmove",this.windowTouchWrapper),C("scroll",this.windowMouseMoveWrapper),C("mousemove",this.windowMouseMoveWrapper),C("deviceorientation",this.windowGyroWrapper),C("resize",this.resize),window.cancelAnimationFrame(this.req);const h=this.scene;h&&h.children&&i(h),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null),a.current===this&&(a.current=null)}};const p=a.VantaBase;let m=typeof window=="object"&&window.THREE,{Camera:y,ClampToEdgeWrapping:w,DataTexture:x,FloatType:S,Mesh:M,NearestFilter:f,PlaneBufferGeometry:c,RGBAFormat:d,Scene:g,ShaderMaterial:_,WebGLRenderTarget:N}=m||{};const T=function(C,h,v,$){$&&({Camera:y,ClampToEdgeWrapping:w,DataTexture:x,FloatType:S,Mesh:M,NearestFilter:f,PlaneBufferGeometry:c,RGBAFormat:d,Scene:g,ShaderMaterial:_,WebGLRenderTarget:N}=$),this.variables=[],this.currentTextureIndex=0;var z=S,O=new g,V=new y;V.position.z=1;var I={passThruTexture:{value:null}},Y=B(`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`,I),H=new M(new c(2,2),Y);function j(D){D.defines.resolution="vec2( "+C.toFixed(1)+", "+h.toFixed(1)+" )"}function B(D,F){var U=new _({uniforms:F=F||{},vertexShader:`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`,fragmentShader:D});return j(U),U}O.add(H),this.setDataType=function(D){return z=D,this},this.addVariable=function(D,F,U){var Q={name:D,initialValueTexture:U,material:this.createShaderMaterial(F),dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:f,magFilter:f};return this.variables.push(Q),Q},this.setVariableDependencies=function(D,F){D.dependencies=F},this.init=function(){if(!v.capabilities.isWebGL2&&!v.extensions.get("OES_texture_float"))return"No OES_texture_float support for float textures.";if(v.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(var D=0;D<this.variables.length;D++){var F=this.variables[D];F.renderTargets[0]=this.createRenderTarget(C,h,F.wrapS,F.wrapT,F.minFilter,F.magFilter),F.renderTargets[1]=this.createRenderTarget(C,h,F.wrapS,F.wrapT,F.minFilter,F.magFilter),this.renderTexture(F.initialValueTexture,F.renderTargets[0]),this.renderTexture(F.initialValueTexture,F.renderTargets[1]);var U=F.material,Q=U.uniforms;if(F.dependencies!==null)for(var ne=0;ne<F.dependencies.length;ne++){var re=F.dependencies[ne];if(re.name!==F.name){for(var Ye=!1,vt=0;vt<this.variables.length;vt++)if(re.name===this.variables[vt].name){Ye=!0;break}if(!Ye)return"Variable dependency not found. Variable="+F.name+", dependency="+re.name}Q[re.name]={value:null},U.fragmentShader=`
uniform sampler2D `+re.name+`;
`+U.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){for(var D=this.currentTextureIndex,F=this.currentTextureIndex===0?1:0,U=0,Q=this.variables.length;U<Q;U++){var ne=this.variables[U];if(ne.dependencies!==null)for(var re=ne.material.uniforms,Ye=0,vt=ne.dependencies.length;Ye<vt;Ye++){var rr=ne.dependencies[Ye];re[rr.name].value=rr.renderTargets[D].texture}this.doRenderTarget(ne.material,ne.renderTargets[F])}this.currentTextureIndex=F},this.getCurrentRenderTarget=function(D){return D.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(D){return D.renderTargets[this.currentTextureIndex===0?1:0]},this.addResolutionDefine=j,this.createShaderMaterial=B,this.createRenderTarget=function(D,F,U,Q,ne,re){return new N(D=D||C,F=F||h,{wrapS:U=U||w,wrapT:Q=Q||w,minFilter:ne=ne||f,magFilter:re=re||f,format:d,type:z,stencilBuffer:!1,depthBuffer:!1})},this.createTexture=function(){var D=new Float32Array(C*h*4);return new x(D,C,h,d,S)},this.renderTexture=function(D,F){I.passThruTexture.value=D,this.doRenderTarget(Y,F),I.passThruTexture.value=null},this.doRenderTarget=function(D,F){var U=v.getRenderTarget();H.material=D,v.setRenderTarget(F),v.render(O,V),H.material=Y,v.setRenderTarget(U)}};let k=typeof window=="object"&&window.THREE;const G=!o();let b=32,ae=b*b;const ce=800,_e=(C={})=>{const h=new k.BufferGeometry,v=[];function $(O,V,I){const Y=1.5*(C.birdSize||1);v.push(new k.Vector3(O*Y,V*Y,I*Y))}$(5,0,0),$(-5,-1,1),$(-5,0,0),$(-5,-2,-1),$(0,2,-6),$(0,2,6),$(2,0,0),$(-3,0,0),h.setFromPoints(v);const z=[];return z.push(0,2,1),z.push(4,7,6),z.push(5,6,7),h.setIndex(z),h};class Fe{constructor(h){var v,$,z=new k.Vector3,O=500,V=500,I=200,Y=.1,H=h;this.position=new k.Vector3,this.velocity=new k.Vector3,v=new k.Vector3,this.setGoal=function(j){$=j},this.setWorldSize=function(j,B,D){O=j,V=B,I=D},this.run=function(j){z.set(-O,this.position.y,this.position.z),(z=this.avoid(z)).multiplyScalar(5),v.add(z),z.set(O,this.position.y,this.position.z),(z=this.avoid(z)).multiplyScalar(5),v.add(z),z.set(this.position.x,-V,this.position.z),(z=this.avoid(z)).multiplyScalar(5),v.add(z),z.set(this.position.x,V,this.position.z),(z=this.avoid(z)).multiplyScalar(5),v.add(z),z.set(this.position.x,this.position.y,-I),(z=this.avoid(z)).multiplyScalar(5),v.add(z),z.set(this.position.x,this.position.y,I),(z=this.avoid(z)).multiplyScalar(5),v.add(z),Math.random()>.5&&this.flock(j),this.move()},this.flock=function(j){$&&v.add(this.reach($,.005)),v.add(this.alignment(j)),v.add(this.cohesion(j)),v.add(this.separation(j))},this.move=function(){this.velocity.add(v);var j=this.velocity.length();j>2.5&&this.velocity.divideScalar(j/2.5),this.position.add(this.velocity),v.set(0,0,0)},this.checkBounds=function(){this.position.x>O&&(this.position.x=-O),this.position.x<-O&&(this.position.x=O),this.position.y>V&&(this.position.y=-V),this.position.y<-V&&(this.position.y=V),this.position.z>I&&(this.position.z=-I),this.position.z<-I&&(this.position.z=I)},this.avoid=function(j){var B=new k.Vector3;return B.copy(this.position),B.sub(j),B.multiplyScalar(1/this.position.distanceToSquared(j)),B},this.repulse=function(j){var B=this.position.distanceTo(j);if(B<150){var D=new k.Vector3;D.subVectors(this.position,j),D.multiplyScalar(.5/B),v.add(D)}},this.reach=function(j,B){var D=new k.Vector3;return D.subVectors(j,this.position),D.multiplyScalar(B),D},this.alignment=function(j){var B,D,F=new k.Vector3,U=0;const Q=100*H.alignment/20;for(var ne=0,re=j.length;ne<re;ne++)Math.random()>.6||(D=(B=j[ne]).position.distanceTo(this.position))>0&&D<=Q&&(F.add(B.velocity),U++);if(U>0){F.divideScalar(U);var Ye=F.length();Ye>Y&&F.divideScalar(Ye/Y)}return F},this.cohesion=function(j){var B,D,F=new k.Vector3,U=new k.Vector3,Q=0;const ne=100*H.cohesion/20;for(var re=0,Ye=j.length;re<Ye;re++)Math.random()>.6||(D=(B=j[re]).position.distanceTo(this.position))>0&&D<=ne&&(F.add(B.position),Q++);Q>0&&F.divideScalar(Q),U.subVectors(F,this.position);var vt=U.length();return vt>Y&&U.divideScalar(vt/Y),U},this.separation=function(j){var B,D,F=new k.Vector3,U=new k.Vector3;const Q=100*H.separation/20;for(var ne=0,re=j.length;ne<re;ne++)Math.random()>.6||(D=(B=j[ne]).position.distanceTo(this.position))>0&&D<=Q&&(U.subVectors(this.position,B.position),U.normalize(),U.divideScalar(D),F.add(U));return F}}}class Me extends p{static initClass(){this.prototype.defaultOptions={backgroundColor:465199,color1:16711680,color2:53759,colorMode:"varianceGradient",birdSize:1,wingSpan:30,speedLimit:5,separation:20,alignment:20,cohesion:20,quantity:5}}constructor(h){k=h.THREE||k,super(h)}initComputeRenderer(){this.gpuCompute=new T(b,b,this.renderer,k);const h=this.gpuCompute.createTexture(),v=this.gpuCompute.createTexture();(function(z){const O=z.image.data;let V=0;const I=O.length;(()=>{const Y=[];for(;V<I;){const H=Math.random()*ce-400,j=Math.random()*ce-400,B=Math.random()*ce-400;O[V+0]=H,O[V+1]=j,O[V+2]=B,O[V+3]=1,Y.push(V+=4)}})()})(h),function(z){const O=z.image.data;let V=0;const I=O.length;(()=>{const Y=[];for(;V<I;){const H=Math.random()-.5,j=Math.random()-.5,B=Math.random()-.5;O[V+0]=10*H,O[V+1]=10*j,O[V+2]=10*B,O[V+3]=1,Y.push(V+=4)}})()}(v),this.velocityVariable=this.gpuCompute.addVariable("textureVelocity",`uniform float time;
uniform float testing;
uniform float delta; // about 0.016
uniform float separationDistance; // 20
uniform float alignmentDistance; // 40
uniform float cohesionDistance;
uniform float speedLimit;
uniform float freedomFactor;
uniform vec3 predator;

const float width = resolution.x;
const float height = resolution.y;

const float PI = 3.141592653589793;
const float PI_2 = PI * 2.0;
// const float VISION = PI * 0.55;

float zoneRadius = 40.0;
float zoneRadiusSquared = 1600.0;

float separationThresh = 0.45;
float alignmentThresh = 0.65;

const float UPPER_BOUNDS = BOUNDS;
const float LOWER_BOUNDS = -UPPER_BOUNDS;

float rand(vec2 co){
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

void main() {

  zoneRadius = separationDistance + alignmentDistance + cohesionDistance;
  separationThresh = separationDistance / zoneRadius;
  alignmentThresh = ( separationDistance + alignmentDistance ) / zoneRadius;
  zoneRadiusSquared = zoneRadius * zoneRadius;


  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec3 birdPosition, birdVelocity;

  vec3 selfPosition = texture2D( texturePosition, uv ).xyz;
  vec3 selfVelocity = texture2D( textureVelocity, uv ).xyz;

  float dist;
  vec3 dir; // direction
  float distSquared;

  float separationSquared = separationDistance * separationDistance;
  float cohesionSquared = cohesionDistance * cohesionDistance;

  float f;
  float percent;

  vec3 velocity = selfVelocity;

  float limit = speedLimit;

  dir = predator * UPPER_BOUNDS - selfPosition;
  dir.z = 0.;
  // dir.z *= 0.6;
  dist = length( dir );
  distSquared = dist * dist;

  float preyRadius = 150.0;
  float preyRadiusSq = preyRadius * preyRadius;

  // move birds away from predator
  if (dist < preyRadius) {

    f = ( distSquared / preyRadiusSq - 1.0 ) * delta * 100.;
    velocity += normalize( dir ) * f;
    limit += 5.0;
  }

  // if (testing == 0.0) {}
  // if ( rand( uv + time ) < freedomFactor ) {}

  // Attract flocks to the center
  vec3 central = vec3( 0., 0., 0. );
  dir = selfPosition - central;
  dist = length( dir );

  dir.y *= 2.5;
  velocity -= normalize( dir ) * delta * 5.;

  for (float y=0.0;y<height;y++) {
    for (float x=0.0;x<width;x++) {

      vec2 ref = vec2( x + 0.5, y + 0.5 ) / resolution.xy;
      birdPosition = texture2D( texturePosition, ref ).xyz;

      dir = birdPosition - selfPosition;
      dist = length(dir);

      if (dist < 0.0001) continue;

      distSquared = dist * dist;

      if (distSquared > zoneRadiusSquared ) continue;

      percent = distSquared / zoneRadiusSquared;

      if ( percent < separationThresh ) { // low

        // Separation - Move apart for comfort
        f = (separationThresh / percent - 1.0) * delta;
        velocity -= normalize(dir) * f;

      } else if ( percent < alignmentThresh ) { // high

        // Alignment - fly the same direction
        float threshDelta = alignmentThresh - separationThresh;
        float adjustedPercent = ( percent - separationThresh ) / threshDelta;

        birdVelocity = texture2D( textureVelocity, ref ).xyz;

        f = ( 0.5 - cos( adjustedPercent * PI_2 ) * 0.5 + 0.5 ) * delta;
        velocity += normalize(birdVelocity) * f;

      } else {

        // Attraction / Cohesion - move closer
        float threshDelta = 1.0 - alignmentThresh;
        float adjustedPercent = ( percent - alignmentThresh ) / threshDelta;

        f = ( 0.5 - ( cos( adjustedPercent * PI_2 ) * -0.5 + 0.5 ) ) * delta;

        velocity += normalize(dir) * f;

      }
    }
  }

  // this make tends to fly around than down or up
  // if (velocity.y > 0.) velocity.y *= (1. - 0.2 * delta);

  // Speed Limits
  if ( length( velocity ) > limit ) {
    velocity = normalize( velocity ) * limit;
  }

  gl_FragColor = vec4( velocity, 1.0 );

}`,v),this.positionVariable=this.gpuCompute.addVariable("texturePosition",`uniform float time;
uniform float delta;

void main() {

  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 tmpPos = texture2D( texturePosition, uv );
  vec3 position = tmpPos.xyz;
  vec3 velocity = texture2D( textureVelocity, uv ).xyz;

  float phase = tmpPos.w;

  phase = mod( ( phase + delta +
    length( velocity.xz ) * delta * 3. +
    max( velocity.y, 0.0 ) * delta * 6. ), 62.83 );

  gl_FragColor = vec4( position + velocity * delta * 15. , phase );

}`,h),this.gpuCompute.setVariableDependencies(this.velocityVariable,[this.positionVariable,this.velocityVariable]),this.gpuCompute.setVariableDependencies(this.positionVariable,[this.positionVariable,this.velocityVariable]),this.positionUniforms=this.positionVariable.material.uniforms,this.velocityUniforms=this.velocityVariable.material.uniforms,this.positionUniforms.time={value:0},this.positionUniforms.delta={value:0},this.velocityUniforms.time={value:1},this.velocityUniforms.delta={value:0},this.velocityUniforms.testing={value:1},this.velocityUniforms.separationDistance={value:1},this.velocityUniforms.alignmentDistance={value:1},this.velocityUniforms.cohesionDistance={value:1},this.velocityUniforms.speedLimit={value:1},this.velocityUniforms.freedomFactor={value:1},this.velocityUniforms.predator={value:new k.Vector3},this.velocityVariable.material.defines.BOUNDS=ce.toFixed(2),this.velocityVariable.wrapS=k.RepeatWrapping,this.velocityVariable.wrapT=k.RepeatWrapping,this.positionVariable.wrapS=k.RepeatWrapping,this.positionVariable.wrapT=k.RepeatWrapping;const $=this.gpuCompute.init();$!==null&&console.error($)}initGpgpuBirds(){const h=(z=>{const O=new k.BufferGeometry;z.quantity&&(b=Math.pow(2,z.quantity),ae=b*b);const V=3*ae,I=3*V,Y=new k.BufferAttribute(new Float32Array(3*I),3),H=new k.BufferAttribute(new Float32Array(3*I),3),j=new k.BufferAttribute(new Float32Array(2*I),2),B=new k.BufferAttribute(new Float32Array(I),1);O.setAttribute||(O.setAttribute=O.addAttribute),O.setAttribute("position",Y),O.setAttribute("birdColor",H),O.setAttribute("reference",j),O.setAttribute("birdVertex",B);let D=0;const F=function(){for(let re=0;re<arguments.length;re++)Y.array[D++]=arguments[re]},U=z.wingSpan||20,Q=z.birdSize||1;for(let re=0;re<ae;re++)F(0,-0,-20*Q,0,4*Q,-20*Q,0,0,30*Q),F(0,0,-15*Q,-U*Q,0,0,0,0,15*Q),F(0,0,15*Q,U*Q,0,0,0,0,-15*Q);const ne={};for(D=0;D<3*V;D++){const re=~~(D/3),Ye=re%b/b,vt=~~(re/b)/b,rr=~~(D/9)/ae,io=rr.toString(),Ka=z.colorMode.indexOf("Gradient")!=-1;let or;or=!Ka&&ne[io]?ne[io]:z.effect.getNewCol(rr),Ka||ne[io]||(ne[io]=or),H.array[3*D+0]=or.r,H.array[3*D+1]=or.g,H.array[3*D+2]=or.b,j.array[2*D]=Ye,j.array[2*D+1]=vt,B.array[D]=D%9}return O.scale(.2,.2,.2)})(Object.assign({},this.options,{effect:this}));this.birdUniforms={color:{value:new k.Color(16720384)},texturePosition:{value:null},textureVelocity:{value:null},time:{value:1},delta:{value:0},birdSize:{value:this.options.birdSize}};const v=new k.ShaderMaterial({uniforms:this.birdUniforms,vertexShader:`attribute vec2 reference;
attribute float birdVertex;

attribute vec3 birdColor;

uniform sampler2D texturePosition;
uniform sampler2D textureVelocity;

varying vec4 vColor;
varying float z;

uniform float time;
uniform float birdSize;

void main() {

  vec4 tmpPos = texture2D( texturePosition, reference );
  vec3 pos = tmpPos.xyz;
  vec3 velocity = normalize(texture2D( textureVelocity, reference ).xyz);

  vec3 newPosition = position;

  if ( birdVertex == 4.0 || birdVertex == 7.0 ) {
    // flap wings
    newPosition.y = sin( tmpPos.w ) * 5. * birdSize;
  }

  newPosition = mat3( modelMatrix ) * newPosition;

  velocity.z *= -1.;
  float xz = length( velocity.xz );
  float xyz = 1.;
  float x = sqrt( 1. - velocity.y * velocity.y );

  float cosry = velocity.x / xz;
  float sinry = velocity.z / xz;

  float cosrz = x / xyz;
  float sinrz = velocity.y / xyz;

  mat3 maty =  mat3(
    cosry, 0, -sinry,
    0    , 1, 0     ,
    sinry, 0, cosry
  );

  mat3 matz =  mat3(
    cosrz , sinrz, 0,
    -sinrz, cosrz, 0,
    0     , 0    , 1
  );
  newPosition =  maty * matz * newPosition;
  newPosition += pos;
  z = newPosition.z;

  vColor = vec4( birdColor, 1.0 );
  gl_Position = projectionMatrix *  viewMatrix  * vec4( newPosition, 1.0 );
}`,fragmentShader:`varying vec4 vColor;
varying float z;
uniform vec3 color;
void main() {
  // Fake colors for now
  float rr = 0.2 + ( 1000. - z ) / 1000. * vColor.x;
  float gg = 0.2 + ( 1000. - z ) / 1000. * vColor.y;
  float bb = 0.2 + ( 1000. - z ) / 1000. * vColor.z;
  gl_FragColor = vec4( rr, gg, bb, 1. );
}`,side:k.DoubleSide}),$=new k.Mesh(h,v);return $.rotation.y=Math.PI/2,$.matrixAutoUpdate=!1,$.updateMatrix(),this.scene.add($)}getNewCol(h){const v=this.options,$=v.color1!=null?v.color1:4456448,z=v.color2!=null?v.color2:6684672,O=new k.Color($),V=new k.Color(z);let I,Y;if(Y=v.colorMode.indexOf("Gradient")!=-1?Math.random():h,v.colorMode.indexOf("variance")==0){const H=(O.r+Math.random()*V.r).clamp(0,1),j=(O.g+Math.random()*V.g).clamp(0,1),B=(O.b+Math.random()*V.b).clamp(0,1);I=new k.Color(H,j,B)}else I=v.colorMode.indexOf("mix")==0?new k.Color($+Y*z):O.lerp(V,Y);return I}onInit(){this.camera=new k.PerspectiveCamera(75,this.width/this.height,1,3e3),this.camera.position.z=350,this.fog=new k.Fog(16777215,100,1e3),this.mouseX=this.mouseY=0;const h=this.birds=[],v=this.boids=[],$=this.options;let z,O;if(G)try{this.initComputeRenderer(),this.valuesChanger=this.valuesChanger.bind(this),this.valuesChanger(),this.initGpgpuBirds()}catch(H){console.error("[vanta.js] birds init error: ",H)}else{const H=6*Math.pow(2,$.quantity);for(var V=0;V<H;V++){z=v[V]=new Fe($),z.position.x=400*Math.random()-200,z.position.y=400*Math.random()-200,z.position.z=400*Math.random()-200,z.velocity.x=2*Math.random()-1,z.velocity.y=2*Math.random()-1,z.velocity.z=2*Math.random()-1,z.setWorldSize(500,500,300);const j=$.colorMode.indexOf("Gradient")!=-1,B=_e($),D=B.attributes.position.length,F=new k.BufferAttribute(new Float32Array(D),3);if(j)for(var I=0;I<B.index.array.length;I+=3)for(var Y=0;Y<=2;Y++){const U=B.index.array[I+Y],Q=this.getNewCol();F.array[3*U]=Q.r,F.array[3*U+1]=Q.g,F.array[3*U+2]=Q.b}else{const U=this.getNewCol(V/H);for(I=0;I<F.array.length;I+=3)F.array[I]=U.r,F.array[I+1]=U.g,F.array[I+2]=U.b}B.setAttribute("color",F),O=h[V]=new k.Mesh(B,new k.MeshBasicMaterial({color:16777215,side:k.DoubleSide,vertexColors:k.VertexColors})),O.phase=Math.floor(62.83*Math.random()),O.position.x=v[V].position.x,O.position.y=v[V].position.y,O.position.z=v[V].position.z,this.scene.add(O)}}}valuesChanger(){this.velocityUniforms&&(this.velocityUniforms.separationDistance.value=this.options.separation,this.velocityUniforms.alignmentDistance.value=this.options.alignment,this.velocityUniforms.speedLimit.value=this.options.speedLimit,this.velocityUniforms.cohesionDistance.value=this.options.cohesion)}onUpdate(){this.now=performance.now(),this.last||(this.last=this.now);let h=(this.now-this.last)/1e3;if(h>1&&(h=1),this.last=this.now,G)this.positionUniforms.time.value=this.now,this.positionUniforms.delta.value=h,this.velocityUniforms.time.value=this.now,this.velocityUniforms.delta.value=h,this.birdUniforms.time.value=this.now,this.birdUniforms.delta.value=h,this.velocityUniforms.predator.value.set(this.mouseX,-this.mouseY,0),this.mouseX=1e4,this.mouseY=1e4,this.gpuCompute.compute(),this.birdUniforms.texturePosition.value=this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture,this.birdUniforms.textureVelocity.value=this.gpuCompute.getCurrentRenderTarget(this.velocityVariable).texture;else{const z=this.birds,O=this.boids;let V,I;for(var v=0,$=z.length;v<$;v++){V=O[v],V.run(O),I=z[v],I.rotation.y=Math.atan2(-V.velocity.z,V.velocity.x),I.rotation.z=Math.asin(V.velocity.y/V.velocity.length()),I.phase=(I.phase+(Math.max(0,I.rotation.z)+.1))%62.83;const Y=16,H=13;I.geometry.attributes.position.array[Y]=I.geometry.attributes.position.array[H]=5*Math.sin(I.phase)*this.options.birdSize,I.geometry.attributes.position.needsUpdate=!0,I.geometry.computeVertexNormals(),I.position.x=O[v].position.x,I.position.y=O[v].position.y,I.position.z=O[v].position.z}}}onMouseMove(h,v){if(this.mouseX=h-.5,this.mouseY=v-.5,!G){const V=this.boids;let I;for(var $=new k.Vector3(this.mouseX*this.width,-this.mouseY*this.height,0),z=0,O=V.length;z<O;z++)I=V[z],$.z=I.position.z,I.repulse($)}}onDestroy(){}onResize(){}}Me.initClass();const bt=a.register("BIRDS",Me);return r})())})(Xd);const Eh=Ul(Xd.exports),_h=e=>e.current&&Eh({el:e.current,backgroundAlpha:0,quantity:3,speedLimit:3,alignment:1e4,cohesion:0}),zh=()=>{const{toggle:e}=rt.useContext(ro),t=rt.useRef(null);return rt.useEffect(()=>void _h(t),[]),Z("div",{className:`fixed w-[100vw] h-[100vh] ${e?"bg-background":"bg-background-light"}`,ref:t})};function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(this,arguments)}var Ls=function(e){var t=A.exports.useRef(e);return t.current=e,t},Th="\u{1F4A1} use-web-animations: please install polyfill to use this hook. See https://github.com/wellyshen/use-web-animations##use-polyfill",Ph=`\u{1F4A1} use-web-animations: the browser doesn't support "onReady" event, please use "onUpdate" to monitor the animation's state instead. See https://github.com/wellyshen/use-web-animations#basic-usage`,uc=function(t){var n=t===void 0?{}:t,r=n.ref,o=n.id,i=n.playbackRate,s=n.autoPlay,l=n.keyframes,a=n.animationOptions,u=n.onReady,p=n.onUpdate,m=n.onFinish,y=A.exports.useState(),w=y[0],x=y[1],S=A.exports.useRef(!1),M=A.exports.useRef(),f=A.exports.useRef(),c=A.exports.useRef(),d=A.exports.useRef(l),g=A.exports.useRef(a),_=Ls(u),N=Ls(p),T=Ls(m),k=A.exports.useRef(null),G=r||k,b=A.exports.useCallback(function(){return M.current},[]),ae=A.exports.useCallback(function(ce){if(!(!G.current||!ce.keyframes)){if(!G.current.animate){console.error(Th);return}M.current=G.current.animate(ce.keyframes,ce.animationOptions);var _e=M.current;ce.autoPlay===!1&&_e.pause(),ce.id&&(_e.id=ce.id),ce.playbackRate&&(_e.playbackRate=ce.playbackRate),_.current&&(_e.ready?_e.ready.then(function(Fe){_.current({playState:Fe.playState,animate:ae,animation:Fe})}):console.error(Ph)),T.current&&(_e.onfinish=function(Fe){var Me=Fe.target;S.current||T.current({playState:Me.playState,animate:ae,animation:Me})}),c.current=void 0}},[T,_,G]);return A.exports.useEffect(function(){d.current&&ae({id:o,playbackRate:i,autoPlay:s,keyframes:d.current,animationOptions:g.current})},[ae,s,o,i]),A.exports.useEffect(function(){var ce,_e=function Fe(){var Me=b();if(Me){var bt=Me.pending,C=Me.playState;c.current!==C&&x(C),N.current&&(f.current!==bt||c.current!==C||C==="running")&&N.current({playState:C,animate:ae,animation:Me}),f.current=bt,c.current=C}ce=requestAnimationFrame(Fe)};return ce=requestAnimationFrame(_e),function(){var Fe,Me;cancelAnimationFrame(ce),S.current=!0,(Fe=b())==null||Fe.finish(),(Me=b())==null||Me.cancel()}},[ae,b,N]),{ref:G,playState:w,getAnimation:b,animate:ae}},Qd="cubic-bezier(0.215, 0.61, 0.355, 1)",Gd="cubic-bezier(0.755, 0.05, 0.855, 0.06)",Or="center bottom",Co={transform:"translate3d(0, 0, 0)",easing:Qd,transformOrigin:Or},cc={transform:"translate3d(0, -30px, 0) scaleY(1.1)",easing:Gd,transformOrigin:Or};L({},Co,{offset:0}),L({},Co,{offset:.2}),L({},cc,{offset:.4}),L({},cc,{offset:.43}),L({},Co,{offset:.53}),L({},Co,{offset:1});var Ds={opacity:1},fc={opacity:0};L({},Ds,{offset:0}),L({},fc,{offset:.25}),L({},Ds,{offset:.5}),L({},fc,{offset:.75}),L({},Ds,{offset:1});var dc={transform:"translate3d(0, 0, 0)"},pr={transform:"translate3d(-10px, 0, 0)"},Eo={transform:"translate3d(10px, 0, 0)"};L({},dc,{offset:0}),L({},pr,{offset:.1}),L({},Eo,{offset:.2}),L({},pr,{offset:.3}),L({},Eo,{offset:.4}),L({},pr,{offset:.5}),L({},Eo,{offset:.6}),L({},pr,{offset:.7}),L({},Eo,{offset:.8}),L({},pr,{offset:.9}),L({},dc,{offset:1});var pc={transform:"translate3d(0, 0, 0)"},mr={transform:"translate3d(0, -10px, 0)"},_o={transform:"translate3d(0, 10px, 0)"};L({},pc,{offset:0}),L({},mr,{offset:.1}),L({},_o,{offset:.2}),L({},mr,{offset:.3}),L({},_o,{offset:.4}),L({},mr,{offset:.5}),L({},_o,{offset:.6}),L({},mr,{offset:.7}),L({},_o,{offset:.8}),L({},mr,{offset:.9}),L({},pc,{offset:1});var Nh={keyframes:[{transform:"translateX(0)",offset:0},{transform:"translateX(-6px) rotateY(-9deg)",offset:.065},{transform:"translateX(5px) rotateY(7deg)",offset:.185},{transform:"translateX(-3px) rotateY(-5deg)",offset:.315},{transform:"translateX(2px) rotateY(3deg)",offset:.435},{transform:"translateX(0)",offset:.5},{transform:"none",offset:1}],animationOptions:{duration:1e3,fill:"both",easing:"ease-in-out"}},mc={transform:"scale3d(1, 1, 1)"},hc={transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},zo={transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},Is={transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"};L({},mc,{offset:0}),L({},hc,{offset:.1}),L({},hc,{offset:.2}),L({},zo,{offset:.3}),L({},Is,{offset:.4}),L({},zo,{offset:.5}),L({},Is,{offset:.6}),L({},zo,{offset:.7}),L({},Is,{offset:.8}),L({},zo,{offset:.9}),L({},mc,{offset:1});var jt="center",Fs={transform:"translate3d(0, 0, 0)",transformOrigin:jt};L({},Fs,{offset:0}),L({},Fs,{offset:.111}),L({},Fs,{offset:1});var Vs={transform:"scale(1)"},yc={transform:"scale(1.3)"};L({},Vs,{offset:0}),L({},yc,{offset:.14}),L({},Vs,{offset:.28}),L({},yc,{offset:.42}),L({},Vs,{offset:.7});var hr="cubic-bezier(0.215, 0.61, 0.355, 1)",Oh={keyframes:[{transform:"translate3d(-3000px, 0, 0) scaleX(3)",opacity:0,easing:hr,offset:0},{transform:"translate3d(25px, 0, 0) scaleX(1)",opacity:1,easing:hr,offset:.6},{transform:"translate3d(-10px, 0, 0) scaleX(0.98)",easing:hr,offset:.75},{transform:"translate3d(5px, 0, 0) scaleX(0.995)",easing:hr,offset:.9},{transform:"translate3d(0, 0, 0)",opacity:1,easing:hr,offset:1}],animationOptions:{duration:1e3,fill:"both"}},yr="cubic-bezier(0.215, 0.61, 0.355, 1)",Mh={keyframes:[{transform:"translate3d(3000px, 0, 0) scaleX(3)",opacity:0,easing:yr,offset:0},{transform:"translate3d(-25px, 0, 0) scaleX(1)",opacity:1,easing:yr,offset:.6},{transform:"translate3d(10px, 0, 0) scaleX(0.98)",easing:yr,offset:.75},{transform:"translate3d(-5px, 0, 0) scaleX(0.995)",easing:yr,offset:.9},{transform:"translate3d(0, 0, 0)",opacity:1,easing:yr,offset:1}],animationOptions:{duration:1e3,fill:"both"}},vc={transform:"scale3d(1.1, 1.1, 1.1)",opacity:1};L({},vc,{offset:.5}),L({},vc,{offset:.55});var gc={transform:"translate3d(0, -20px, 0) scaleY(0.9)",opacity:1};L({},gc,{offset:.4}),L({},gc,{offset:.45});var wc={transform:"translate3d(0, 20px, 0) scaleY(0.9)",opacity:1};L({},wc,{offset:.4}),L({},wc,{offset:.45});var Fa="ease-in-out",hi="top left",xc={transform:"rotate3d(0, 0, 1, 80deg)",easing:Fa,transformOrigin:hi},Sc={transform:"rotate3d(0, 0, 1, 60deg)",opacity:1,easing:Fa,transformOrigin:hi};L({},xc,{offset:.2}),L({},Sc,{offset:.4}),L({},xc,{offset:.6}),L({},Sc,{offset:.8});var kc={transform:"none",opacity:1};L({},kc,{offset:.5}),L({},kc,{offset:1});const Rh=()=>{const{ref:e,animate:t}=uc(Oh),{ref:n}=uc(Mh),r=Z("div",{ref:e,onClick:()=>t(Nh),children:Z(Ht,{className:"text-4xl sm:text-6xl",uppercase:!0,children:"ky0422"})}),[o,i]=["text-xl sm:text-2xl","pr-1.5"],s=Rt("div",{className:"pt-3",ref:n,children:[Z(Ht,{className:`${o} ${i}`,color:"text-blue-500",children:"\uB2E4\uB78C\uC950"}),Z(Ht,{className:`${o} ${i}`,children:"\uD5CC"}),Z(Ht,{className:o,color:"text-red-500",children:"\uCCC7\uBC14\uD034"}),Z(Ht,{className:`${o} ${i}`,children:"\uC5D0 \uD0C0\uACE0\uD30C"})]});return Rt("div",{className:"inline-block",children:[r,s]})};function Lh(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Dh(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Ih=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Dh(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Lh(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Pe="-ms-",yi="-moz-",K="-webkit-",Kd="comm",Va="rule",ba="decl",Fh="@import",Zd="@keyframes",Vh=Math.abs,Fi=String.fromCharCode,bh=Object.assign;function Ah(e,t){return(((t<<2^Ve(e,0))<<2^Ve(e,1))<<2^Ve(e,2))<<2^Ve(e,3)}function qd(e){return e.trim()}function jh(e,t){return(e=t.exec(e))?e[0]:e}function q(e,t,n){return e.replace(t,n)}function Il(e,t){return e.indexOf(t)}function Ve(e,t){return e.charCodeAt(t)|0}function Gr(e,t,n){return e.slice(t,n)}function xt(e){return e.length}function Aa(e){return e.length}function To(e,t){return t.push(e),e}function Uh(e,t){return e.map(t).join("")}var Vi=1,Zn=1,Jd=0,We=0,ye=0,tr="";function bi(e,t,n,r,o,i,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Vi,column:Zn,length:s,return:""}}function vr(e,t){return bh(bi("",null,null,"",null,null,0),e,{length:-e.length},t)}function Bh(){return ye}function Wh(){return ye=We>0?Ve(tr,--We):0,Zn--,ye===10&&(Zn=1,Vi--),ye}function Ge(){return ye=We<Jd?Ve(tr,We++):0,Zn++,ye===10&&(Zn=1,Vi++),ye}function Et(){return Ve(tr,We)}function Uo(){return We}function oo(e,t){return Gr(tr,e,t)}function Kr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function e0(e){return Vi=Zn=1,Jd=xt(tr=e),We=0,[]}function t0(e){return tr="",e}function Bo(e){return qd(oo(We-1,Fl(e===91?e+2:e===40?e+1:e)))}function Yh(e){for(;(ye=Et())&&ye<33;)Ge();return Kr(e)>2||Kr(ye)>3?"":" "}function Hh(e,t){for(;--t&&Ge()&&!(ye<48||ye>102||ye>57&&ye<65||ye>70&&ye<97););return oo(e,Uo()+(t<6&&Et()==32&&Ge()==32))}function Fl(e){for(;Ge();)switch(ye){case e:return We;case 34:case 39:e!==34&&e!==39&&Fl(ye);break;case 40:e===41&&Fl(e);break;case 92:Ge();break}return We}function Xh(e,t){for(;Ge()&&e+ye!==47+10;)if(e+ye===42+42&&Et()===47)break;return"/*"+oo(t,We-1)+"*"+Fi(e===47?e:Ge())}function Qh(e){for(;!Kr(Et());)Ge();return oo(e,We)}function Gh(e){return t0(Wo("",null,null,null,[""],e=e0(e),0,[0],e))}function Wo(e,t,n,r,o,i,s,l,a){for(var u=0,p=0,m=s,y=0,w=0,x=0,S=1,M=1,f=1,c=0,d="",g=o,_=i,N=r,T=d;M;)switch(x=c,c=Ge()){case 40:if(x!=108&&T.charCodeAt(m-1)==58){Il(T+=q(Bo(c),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:T+=Bo(c);break;case 9:case 10:case 13:case 32:T+=Yh(x);break;case 92:T+=Hh(Uo()-1,7);continue;case 47:switch(Et()){case 42:case 47:To(Kh(Xh(Ge(),Uo()),t,n),a);break;default:T+="/"}break;case 123*S:l[u++]=xt(T)*f;case 125*S:case 59:case 0:switch(c){case 0:case 125:M=0;case 59+p:w>0&&xt(T)-m&&To(w>32?Cc(T+";",r,n,m-1):Cc(q(T," ","")+";",r,n,m-2),a);break;case 59:T+=";";default:if(To(N=$c(T,t,n,u,p,o,l,d,g=[],_=[],m),i),c===123)if(p===0)Wo(T,t,N,N,g,i,m,l,_);else switch(y){case 100:case 109:case 115:Wo(e,N,N,r&&To($c(e,N,N,0,0,o,l,d,o,g=[],m),_),o,_,m,l,r?g:_);break;default:Wo(T,N,N,N,[""],_,0,l,_)}}u=p=w=0,S=f=1,d=T="",m=s;break;case 58:m=1+xt(T),w=x;default:if(S<1){if(c==123)--S;else if(c==125&&S++==0&&Wh()==125)continue}switch(T+=Fi(c),c*S){case 38:f=p>0?1:(T+="\f",-1);break;case 44:l[u++]=(xt(T)-1)*f,f=1;break;case 64:Et()===45&&(T+=Bo(Ge())),y=Et(),p=m=xt(d=T+=Qh(Uo())),c++;break;case 45:x===45&&xt(T)==2&&(S=0)}}return i}function $c(e,t,n,r,o,i,s,l,a,u,p){for(var m=o-1,y=o===0?i:[""],w=Aa(y),x=0,S=0,M=0;x<r;++x)for(var f=0,c=Gr(e,m+1,m=Vh(S=s[x])),d=e;f<w;++f)(d=qd(S>0?y[f]+" "+c:q(c,/&\f/g,y[f])))&&(a[M++]=d);return bi(e,t,n,o===0?Va:l,a,u,p)}function Kh(e,t,n){return bi(e,t,n,Kd,Fi(Bh()),Gr(e,2,-2),0)}function Cc(e,t,n,r){return bi(e,t,n,ba,Gr(e,0,r),Gr(e,r+1,-1),r)}function n0(e,t){switch(Ah(e,t)){case 5103:return K+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return K+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return K+e+yi+e+Pe+e+e;case 6828:case 4268:return K+e+Pe+e+e;case 6165:return K+e+Pe+"flex-"+e+e;case 5187:return K+e+q(e,/(\w+).+(:[^]+)/,K+"box-$1$2"+Pe+"flex-$1$2")+e;case 5443:return K+e+Pe+"flex-item-"+q(e,/flex-|-self/,"")+e;case 4675:return K+e+Pe+"flex-line-pack"+q(e,/align-content|flex-|-self/,"")+e;case 5548:return K+e+Pe+q(e,"shrink","negative")+e;case 5292:return K+e+Pe+q(e,"basis","preferred-size")+e;case 6060:return K+"box-"+q(e,"-grow","")+K+e+Pe+q(e,"grow","positive")+e;case 4554:return K+q(e,/([^-])(transform)/g,"$1"+K+"$2")+e;case 6187:return q(q(q(e,/(zoom-|grab)/,K+"$1"),/(image-set)/,K+"$1"),e,"")+e;case 5495:case 3959:return q(e,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return q(q(e,/(.+:)(flex-)?(.*)/,K+"box-pack:$3"+Pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+K+e+e;case 4095:case 3583:case 4068:case 2532:return q(e,/(.+)-inline(.+)/,K+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xt(e)-1-t>6)switch(Ve(e,t+1)){case 109:if(Ve(e,t+4)!==45)break;case 102:return q(e,/(.+:)(.+)-([^]+)/,"$1"+K+"$2-$3$1"+yi+(Ve(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Il(e,"stretch")?n0(q(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ve(e,t+1)!==115)break;case 6444:switch(Ve(e,xt(e)-3-(~Il(e,"!important")&&10))){case 107:return q(e,":",":"+K)+e;case 101:return q(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+K+(Ve(e,14)===45?"inline-":"")+"box$3$1"+K+"$2$3$1"+Pe+"$2box$3")+e}break;case 5936:switch(Ve(e,t+11)){case 114:return K+e+Pe+q(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return K+e+Pe+q(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return K+e+Pe+q(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return K+e+Pe+e+e}return e}function Un(e,t){for(var n="",r=Aa(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Zh(e,t,n,r){switch(e.type){case Fh:case ba:return e.return=e.return||e.value;case Kd:return"";case Zd:return e.return=e.value+"{"+Un(e.children,r)+"}";case Va:e.value=e.props.join(",")}return xt(n=Un(e.children,r))?e.return=e.value+"{"+n+"}":""}function qh(e){var t=Aa(e);return function(n,r,o,i){for(var s="",l=0;l<t;l++)s+=e[l](n,r,o,i)||"";return s}}function Jh(e){return function(t){t.root||(t=t.return)&&e(t)}}function e1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ba:e.return=n0(e.value,e.length);break;case Zd:return Un([vr(e,{value:q(e.value,"@","@"+K)})],r);case Va:if(e.length)return Uh(e.props,function(o){switch(jh(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Un([vr(e,{props:[q(o,/:(read-\w+)/,":"+yi+"$1")]})],r);case"::placeholder":return Un([vr(e,{props:[q(o,/:(plac\w+)/,":"+K+"input-$1")]}),vr(e,{props:[q(o,/:(plac\w+)/,":"+yi+"$1")]}),vr(e,{props:[q(o,/:(plac\w+)/,Pe+"input-$1")]})],r)}return""})}}function t1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var n1=function(t,n,r){for(var o=0,i=0;o=i,i=Et(),o===38&&i===12&&(n[r]=1),!Kr(i);)Ge();return oo(t,We)},r1=function(t,n){var r=-1,o=44;do switch(Kr(o)){case 0:o===38&&Et()===12&&(n[r]=1),t[r]+=n1(We-1,n,r);break;case 2:t[r]+=Bo(o);break;case 4:if(o===44){t[++r]=Et()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Fi(o)}while(o=Ge());return t},o1=function(t,n){return t0(r1(e0(t),n))},Ec=new WeakMap,i1=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Ec.get(r))&&!o){Ec.set(t,!0);for(var i=[],s=o1(n,i),l=r.props,a=0,u=0;a<s.length;a++)for(var p=0;p<l.length;p++,u++)t.props[u]=i[a]?s[a].replace(/&\f/g,l[p]):l[p]+" "+s[a]}}},s1=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}},l1=[e1],a1=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(S){var M=S.getAttribute("data-emotion");M.indexOf(" ")!==-1&&(document.head.appendChild(S),S.setAttribute("data-s",""))})}var o=t.stylisPlugins||l1,i={},s,l=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(S){for(var M=S.getAttribute("data-emotion").split(" "),f=1;f<M.length;f++)i[M[f]]=!0;l.push(S)});var a,u=[i1,s1];{var p,m=[Zh,Jh(function(S){p.insert(S)})],y=qh(u.concat(o,m)),w=function(M){return Un(Gh(M),y)};a=function(M,f,c,d){p=c,w(M?M+"{"+f.styles+"}":f.styles),d&&(x.inserted[f.name]=!0)}}var x={key:n,sheet:new Ih({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:a};return x.sheet.hydrate(l),x},r0={exports:{}},ee={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ke=typeof Symbol=="function"&&Symbol.for,ja=ke?Symbol.for("react.element"):60103,Ua=ke?Symbol.for("react.portal"):60106,Ai=ke?Symbol.for("react.fragment"):60107,ji=ke?Symbol.for("react.strict_mode"):60108,Ui=ke?Symbol.for("react.profiler"):60114,Bi=ke?Symbol.for("react.provider"):60109,Wi=ke?Symbol.for("react.context"):60110,Ba=ke?Symbol.for("react.async_mode"):60111,Yi=ke?Symbol.for("react.concurrent_mode"):60111,Hi=ke?Symbol.for("react.forward_ref"):60112,Xi=ke?Symbol.for("react.suspense"):60113,u1=ke?Symbol.for("react.suspense_list"):60120,Qi=ke?Symbol.for("react.memo"):60115,Gi=ke?Symbol.for("react.lazy"):60116,c1=ke?Symbol.for("react.block"):60121,f1=ke?Symbol.for("react.fundamental"):60117,d1=ke?Symbol.for("react.responder"):60118,p1=ke?Symbol.for("react.scope"):60119;function Je(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ja:switch(e=e.type,e){case Ba:case Yi:case Ai:case Ui:case ji:case Xi:return e;default:switch(e=e&&e.$$typeof,e){case Wi:case Hi:case Gi:case Qi:case Bi:return e;default:return t}}case Ua:return t}}}function o0(e){return Je(e)===Yi}ee.AsyncMode=Ba;ee.ConcurrentMode=Yi;ee.ContextConsumer=Wi;ee.ContextProvider=Bi;ee.Element=ja;ee.ForwardRef=Hi;ee.Fragment=Ai;ee.Lazy=Gi;ee.Memo=Qi;ee.Portal=Ua;ee.Profiler=Ui;ee.StrictMode=ji;ee.Suspense=Xi;ee.isAsyncMode=function(e){return o0(e)||Je(e)===Ba};ee.isConcurrentMode=o0;ee.isContextConsumer=function(e){return Je(e)===Wi};ee.isContextProvider=function(e){return Je(e)===Bi};ee.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ja};ee.isForwardRef=function(e){return Je(e)===Hi};ee.isFragment=function(e){return Je(e)===Ai};ee.isLazy=function(e){return Je(e)===Gi};ee.isMemo=function(e){return Je(e)===Qi};ee.isPortal=function(e){return Je(e)===Ua};ee.isProfiler=function(e){return Je(e)===Ui};ee.isStrictMode=function(e){return Je(e)===ji};ee.isSuspense=function(e){return Je(e)===Xi};ee.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ai||e===Yi||e===Ui||e===ji||e===Xi||e===u1||typeof e=="object"&&e!==null&&(e.$$typeof===Gi||e.$$typeof===Qi||e.$$typeof===Bi||e.$$typeof===Wi||e.$$typeof===Hi||e.$$typeof===f1||e.$$typeof===d1||e.$$typeof===p1||e.$$typeof===c1)};ee.typeOf=Je;(function(e){e.exports=ee})(r0);var i0=r0.exports,m1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},h1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s0={};s0[i0.ForwardRef]=m1;s0[i0.Memo]=h1;var y1=!0;function l0(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var Wa=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||y1===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},a0=function(t,n,r){Wa(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function v1(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var g1={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},w1=/[A-Z]|^ms/g,x1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,u0=function(t){return t.charCodeAt(1)===45},_c=function(t){return t!=null&&typeof t!="boolean"},bs=t1(function(e){return u0(e)?e:e.replace(w1,"-$&").toLowerCase()}),zc=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(x1,function(r,o,i){return St={name:o,styles:i,next:St},o})}return g1[t]!==1&&!u0(t)&&typeof n=="number"&&n!==0?n+"px":n};function Zr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return St={name:n.name,styles:n.styles,next:St},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)St={name:r.name,styles:r.styles,next:St},r=r.next;var o=n.styles+";";return o}return S1(e,t,n)}case"function":{if(e!==void 0){var i=St,s=n(e);return St=i,Zr(e,t,s)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function S1(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Zr(e,t,n[o])+";";else for(var i in n){var s=n[i];if(typeof s!="object")t!=null&&t[s]!==void 0?r+=i+"{"+t[s]+"}":_c(s)&&(r+=bs(i)+":"+zc(i,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var l=0;l<s.length;l++)_c(s[l])&&(r+=bs(i)+":"+zc(i,s[l])+";");else{var a=Zr(e,t,s);switch(i){case"animation":case"animationName":{r+=bs(i)+":"+a+";";break}default:r+=i+"{"+a+"}"}}}return r}var Tc=/label:\s*([^\s;\n{]+)\s*(;|$)/g,St,Ya=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";St=void 0;var s=t[0];s==null||s.raw===void 0?(o=!1,i+=Zr(r,n,s)):i+=s[0];for(var l=1;l<t.length;l++)i+=Zr(r,n,t[l]),o&&(i+=s[l]);Tc.lastIndex=0;for(var a="",u;(u=Tc.exec(i))!==null;)a+="-"+u[1];var p=v1(i)+a;return{name:p,styles:i,next:St}},k1=function(t){return t()},$1=eu["useInsertionEffect"]?eu["useInsertionEffect"]:!1,c0=$1||k1,Ha={}.hasOwnProperty,f0=A.exports.createContext(typeof HTMLElement<"u"?a1({key:"css"}):null);f0.Provider;var d0=function(t){return A.exports.forwardRef(function(n,r){var o=A.exports.useContext(f0);return t(n,o,r)})},p0=A.exports.createContext({}),Vl="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",C1=function(t,n){var r={};for(var o in n)Ha.call(n,o)&&(r[o]=n[o]);return r[Vl]=t,r},E1=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Wa(n,r,o),c0(function(){return a0(n,r,o)}),null},_1=d0(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[Vl],i=[r],s="";typeof e.className=="string"?s=l0(t.registered,i,e.className):e.className!=null&&(s=e.className+" ");var l=Ya(i,void 0,A.exports.useContext(p0));s+=t.key+"-"+l.name;var a={};for(var u in e)Ha.call(e,u)&&u!=="css"&&u!==Vl&&(a[u]=e[u]);return a.ref=n,a.className=s,A.exports.createElement(A.exports.Fragment,null,A.exports.createElement(E1,{cache:t,serialized:l,isStringTag:typeof o=="string"}),A.exports.createElement(o,a))}),z1=$h;function oe(e,t,n){return Ha.call(t,"css")?Z(_1,C1(e,t),n):Z(e,t,n)}function nr(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Ya(t)}var P=function(){var t=nr.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},T1=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var s=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))s=e(i);else{s="";for(var l in i)i[l]&&l&&(s&&(s+=" "),s+=l)}break}default:s=i}s&&(o&&(o+=" "),o+=s)}}return o};function P1(e,t,n){var r=[],o=l0(e,r,n);return r.length<2?n:o+t(r)}var N1=function(t){var n=t.cache,r=t.serializedArr;return c0(function(){for(var o=0;o<r.length;o++)a0(n,r[o],!1)}),null},As=d0(function(e,t){var n=!1,r=[],o=function(){for(var u=arguments.length,p=new Array(u),m=0;m<u;m++)p[m]=arguments[m];var y=Ya(p,t.registered);return r.push(y),Wa(t,y,!1),t.key+"-"+y.name},i=function(){for(var u=arguments.length,p=new Array(u),m=0;m<u;m++)p[m]=arguments[m];return P1(t.registered,o,T1(p))},s={css:o,cx:i,theme:A.exports.useContext(p0)},l=e.children(s);return n=!0,A.exports.createElement(A.exports.Fragment,null,A.exports.createElement(N1,{cache:t,serializedArr:r}),l)});function bl(){return bl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bl.apply(this,arguments)}function O1(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Al(e,t)}function Al(e,t){return Al=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Al(e,t)}function M1(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var jl=new Map,Po=new WeakMap,Pc=0,R1=void 0;function L1(e){return e?(Po.has(e)||(Pc+=1,Po.set(e,Pc.toString())),Po.get(e)):"0"}function D1(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?L1(e.root):e[t])}).toString()}function I1(e){var t=D1(e),n=jl.get(t);if(!n){var r=new Map,o,i=new IntersectionObserver(function(s){s.forEach(function(l){var a,u=l.isIntersecting&&o.some(function(p){return l.intersectionRatio>=p});e.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=u),(a=r.get(l.target))==null||a.forEach(function(p){p(u,l)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},jl.set(t,n)}return n}function m0(e,t,n,r){if(n===void 0&&(n={}),r===void 0&&(r=R1),typeof window.IntersectionObserver>"u"&&r!==void 0){var o=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),function(){}}var i=I1(n),s=i.id,l=i.observer,a=i.elements,u=a.get(e)||[];return a.has(e)||a.set(e,u),u.push(t),l.observe(e),function(){u.splice(u.indexOf(t),1),u.length===0&&(a.delete(e),l.unobserve(e)),a.size===0&&(l.disconnect(),jl.delete(s))}}var F1=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function Nc(e){return typeof e.children!="function"}var Oc=function(e){O1(t,e);function t(r){var o;return o=e.call(this,r)||this,o.node=null,o._unobserveCb=null,o.handleNode=function(i){o.node&&(o.unobserve(),!i&&!o.props.triggerOnce&&!o.props.skip&&o.setState({inView:!!o.props.initialInView,entry:void 0})),o.node=i||null,o.observeNode()},o.handleChange=function(i,s){i&&o.props.triggerOnce&&o.unobserve(),Nc(o.props)||o.setState({inView:i,entry:s}),o.props.onChange&&o.props.onChange(i,s)},o.state={inView:!!r.initialInView,entry:void 0},o}var n=t.prototype;return n.componentDidUpdate=function(o){(o.rootMargin!==this.props.rootMargin||o.root!==this.props.root||o.threshold!==this.props.threshold||o.skip!==this.props.skip||o.trackVisibility!==this.props.trackVisibility||o.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},n.componentWillUnmount=function(){this.unobserve(),this.node=null},n.observeNode=function(){if(!(!this.node||this.props.skip)){var o=this.props,i=o.threshold,s=o.root,l=o.rootMargin,a=o.trackVisibility,u=o.delay,p=o.fallbackInView;this._unobserveCb=m0(this.node,this.handleChange,{threshold:i,root:s,rootMargin:l,trackVisibility:a,delay:u},p)}},n.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},n.render=function(){if(!Nc(this.props)){var o=this.state,i=o.inView,s=o.entry;return this.props.children({inView:i,entry:s,ref:this.handleNode})}var l=this.props,a=l.children,u=l.as,p=M1(l,F1);return A.exports.createElement(u||"div",bl({ref:this.handleNode},p),a)},t}(A.exports.Component);function h0(e){var t,n=e===void 0?{}:e,r=n.threshold,o=n.delay,i=n.trackVisibility,s=n.rootMargin,l=n.root,a=n.triggerOnce,u=n.skip,p=n.initialInView,m=n.fallbackInView,y=n.onChange,w=A.exports.useState(null),x=w[0],S=w[1],M=A.exports.useRef(),f=A.exports.useState({inView:!!p,entry:void 0}),c=f[0],d=f[1];M.current=y,A.exports.useEffect(function(){if(!(u||!x)){var N=m0(x,function(T,k){d({inView:T,entry:k}),M.current&&M.current(T,k),k.isIntersecting&&a&&N&&(N(),N=void 0)},{root:l,rootMargin:s,threshold:r,trackVisibility:i,delay:o},m);return function(){N&&N()}}},[Array.isArray(r)?r.toString():r,x,l,s,a,u,i,m,o]);var g=(t=c.entry)==null?void 0:t.target;A.exports.useEffect(function(){!x&&g&&!a&&!u&&d({inView:!!p,entry:void 0})},[x,g,a,u,p]);var _=[S,c.inView,c.entry];return _.ref=_[0],_.inView=_[1],_.entry=_[2],_}var y0={exports:{}},te={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xa=Symbol.for("react.element"),Qa=Symbol.for("react.portal"),Ki=Symbol.for("react.fragment"),Zi=Symbol.for("react.strict_mode"),qi=Symbol.for("react.profiler"),Ji=Symbol.for("react.provider"),es=Symbol.for("react.context"),V1=Symbol.for("react.server_context"),ts=Symbol.for("react.forward_ref"),ns=Symbol.for("react.suspense"),rs=Symbol.for("react.suspense_list"),os=Symbol.for("react.memo"),is=Symbol.for("react.lazy"),b1=Symbol.for("react.offscreen"),v0;v0=Symbol.for("react.module.reference");function lt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xa:switch(e=e.type,e){case Ki:case qi:case Zi:case ns:case rs:return e;default:switch(e=e&&e.$$typeof,e){case V1:case es:case ts:case is:case os:case Ji:return e;default:return t}}case Qa:return t}}}te.ContextConsumer=es;te.ContextProvider=Ji;te.Element=Xa;te.ForwardRef=ts;te.Fragment=Ki;te.Lazy=is;te.Memo=os;te.Portal=Qa;te.Profiler=qi;te.StrictMode=Zi;te.Suspense=ns;te.SuspenseList=rs;te.isAsyncMode=function(){return!1};te.isConcurrentMode=function(){return!1};te.isContextConsumer=function(e){return lt(e)===es};te.isContextProvider=function(e){return lt(e)===Ji};te.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xa};te.isForwardRef=function(e){return lt(e)===ts};te.isFragment=function(e){return lt(e)===Ki};te.isLazy=function(e){return lt(e)===is};te.isMemo=function(e){return lt(e)===os};te.isPortal=function(e){return lt(e)===Qa};te.isProfiler=function(e){return lt(e)===qi};te.isStrictMode=function(e){return lt(e)===Zi};te.isSuspense=function(e){return lt(e)===ns};te.isSuspenseList=function(e){return lt(e)===rs};te.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ki||e===qi||e===Zi||e===ns||e===rs||e===b1||typeof e=="object"&&e!==null&&(e.$$typeof===is||e.$$typeof===os||e.$$typeof===Ji||e.$$typeof===es||e.$$typeof===ts||e.$$typeof===v0||e.getModuleId!==void 0)};te.typeOf=lt;(function(e){e.exports=te})(y0);function _t(e,t){return Object.keys(t).forEach(function(n){n==="default"||n==="__esModule"||e.hasOwnProperty(n)||Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})}),e}function yt(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var zt={},g0={};yt(g0,"AttentionSeeker",()=>gy);const A1=P`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,j1=P`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,U1=P`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,B1=P`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,W1=P`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,Y1=P`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,H1=P`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,X1=P`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,Q1=P`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,G1=P`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,K1=P`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,Z1=P`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,q1=P`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;var J1={};yt(J1,"Reveal",()=>at);const ey=P`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,ty=P`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ny=P`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ry=P`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,oy=P`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ga=P`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,iy=P`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,sy=P`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ly=P`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ay=P`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,uy=P`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,cy=P`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,fy=P`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function dy({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=Ga,iterationCount:o=1}){return nr`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};
  `}function py(e){return e==null}function my(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}const vi=nr`
  opacity: 0;
`,hy=nr`
  display: inline-block;
  white-space: pre;
`,at=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:s=Ga,triggerOnce:l=!1,css:a,className:u,style:p,childClassName:m,childStyle:y,children:w,onVisibilityChange:x}=e,S=A.exports.useMemo(()=>dy({keyframes:s,duration:o}),[o,s]);return py(w)?null:my(w)?oe(yy,{...e,animationStyles:S,children:String(w)}):y0.exports.isFragment(w)?oe(w0,{...e,animationStyles:S}):oe(z1,{children:A.exports.Children.map(w,(M,f)=>{if(!A.exports.isValidElement(M))return null;const c=[a,S],d=r+(t?f*o*n:0);switch(M.type){case"ol":case"ul":return oe(As,{children:({cx:g})=>oe(M.type,{...M.props,className:g(u,M.props.className),style:{...p,...M.props.style},children:oe(at,{...e,children:M.props.children})})});case"li":return oe(Oc,{threshold:i,triggerOnce:l,onChange:x,children:({inView:g,ref:_})=>oe(As,{children:({cx:N})=>oe(M.type,{...M.props,ref:_,className:N(m,M.props.className),css:g?c:vi,style:{...y,...M.props.style,animationDelay:d+"ms"}})})});default:return oe(Oc,{threshold:i,triggerOnce:l,onChange:x,children:({inView:g,ref:_})=>oe("div",{ref:_,className:u,css:g?c:vi,style:{...p,animationDelay:d+"ms"},children:oe(As,{children:({cx:N})=>oe(M.type,{...M.props,className:N(m,M.props.className),style:{...y,...M.props.style}})})})})}})})},yy=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:s=0,triggerOnce:l=!1,css:a,className:u,style:p,children:m,onVisibilityChange:y}=e,{ref:w,inView:x}=h0({triggerOnce:l,threshold:s,onChange:y});return n?oe("div",{ref:w,className:u,css:[a,hy],style:p,children:m.split("").map((S,M)=>oe("span",{css:x?t:vi,style:{animationDelay:o+M*i*r+"ms"},children:S},M))}):oe(w0,{...e,children:m})},w0=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,css:o,className:i,style:s,children:l,onVisibilityChange:a}=e,{ref:u,inView:p}=h0({triggerOnce:r,threshold:n,onChange:a});return oe("div",{ref:u,className:i,css:p?[o,t]:vi,style:s,children:l})};function vy(e){switch(e){case"flash":return[j1];case"headShake":return[U1,{animationTimingFunction:"ease-in-out"}];case"heartBeat":return[B1,{animationTimingFunction:"ease-in-out"}];case"jello":return[W1,{transformOrigin:"center"}];case"pulse":return[Y1,{animationTimingFunction:"ease-in-out"}];case"rubberBand":return[H1];case"shake":return[X1];case"shakeX":return[Q1];case"shakeY":return[G1];case"swing":return[K1,{transformOrigin:"top center"}];case"tada":return[Z1];case"wobble":return[q1];case"bounce":default:return[A1,{transformOrigin:"center bottom"}]}}const gy=e=>{const{effect:t="bounce",...n}=e,[r,o]=A.exports.useMemo(()=>vy(t),[t]);return oe(at,{keyframes:r,css:o,...n})};var x0={};yt(x0,"Bounce",()=>Ny);const wy=P`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,xy=P`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Sy=P`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ky=P`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$y=P`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Cy=P`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,Ey=P`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,_y=P`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,zy=P`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,Ty=P`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;function Py(e,t){switch(t){case"down":return e?Ey:xy;case"left":return e?_y:Sy;case"right":return e?zy:ky;case"up":return e?Ty:$y;default:return e?Cy:wy}}const Ny=e=>{const{direction:t,reverse:n=!1,...r}=e,o=A.exports.useMemo(()=>Py(n,t),[t,n]);return oe(at,{keyframes:o,...r})};var S0={};yt(S0,"Fade",()=>gi);const Oy=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,My=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Ry=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Ly=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Dy=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Iy=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Fy=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Vy=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,by=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Ay=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,jy=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Uy=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,By=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Wy(e,t,n){switch(n){case"bottom-left":return t?My:ty;case"bottom-right":return t?Ry:ny;case"down":return e?t?Dy:oy:t?Ly:ry;case"left":return e?t?Fy:iy:t?Iy:Ga;case"right":return e?t?by:ly:t?Vy:sy;case"top-left":return t?Ay:ay;case"top-right":return t?jy:uy;case"up":return e?t?By:fy:t?Uy:cy;default:return t?Oy:ey}}const gi=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,i=A.exports.useMemo(()=>Wy(t,r,n),[t,n,r]);return oe(at,{keyframes:i,...o})};var k0={};yt(k0,"Flip",()=>qy);const Yy=P`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,Hy=P`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,Xy=P`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,Qy=P`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,Gy=P`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;function Ky(e,t){switch(t){case"horizontal":return e?Qy:Hy;case"vertical":return e?Gy:Xy;default:return Yy}}const Zy=nr`
  backface-visibility: visible;
`,qy=e=>{const{direction:t,reverse:n=!1,...r}=e,o=A.exports.useMemo(()=>Ky(n,t),[t,n]);return oe(at,{css:Zy,keyframes:o,...r})};var $0={};yt($0,"Hinge",()=>ov);const Jy=P`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,ev=P`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,tv=P`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,nv=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,rv=nr`
  transform-origin: top left;
`,ov=e=>oe(at,{css:rv,keyframes:Jy,...e});var C0={};yt(C0,"JackInTheBox",()=>iv);const iv=e=>oe(at,{keyframes:ev,...e});var E0={};yt(E0,"Roll",()=>lv);function sv(e){return e?nv:tv}const lv=e=>{const{reverse:t=!1,...n}=e,r=A.exports.useMemo(()=>sv(t),[t]);return oe(at,{keyframes:r,...n})};var _0={};yt(_0,"Rotate",()=>wv);const av=P`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,uv=P`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,cv=P`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,fv=P`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,dv=P`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,pv=P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,mv=P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,hv=P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,yv=P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,vv=P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;function gv(e,t){switch(t){case"bottom-left":return e?[mv,{transformOrigin:"left bottom"}]:[uv,{transformOrigin:"left bottom"}];case"bottom-right":return e?[hv,{transformOrigin:"right bottom"}]:[cv,{transformOrigin:"right bottom"}];case"top-left":return e?[yv,{transformOrigin:"left bottom"}]:[fv,{transformOrigin:"left bottom"}];case"top-right":return e?[vv,{transformOrigin:"right bottom"}]:[dv,{transformOrigin:"right bottom"}];default:return e?[pv,{transformOrigin:"center"}]:[av,{transformOrigin:"center"}]}}const wv=e=>{const{direction:t,reverse:n=!1,...r}=e,[o,i]=A.exports.useMemo(()=>gv(n,t),[t,n]);return oe(at,{css:i,keyframes:o,...r})};var z0={};yt(z0,"Slide",()=>Pv);const xv=P`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Sv=P`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,kv=P`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$v=P`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Cv=P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,Ev=P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,_v=P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,zv=P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function Tv(e,t){switch(t){case"down":return e?Cv:xv;case"right":return e?_v:kv;case"up":return e?zv:$v;case"left":default:return e?Ev:Sv}}const Pv=e=>{const{direction:t,reverse:n=!1,...r}=e,o=A.exports.useMemo(()=>Tv(n,t),[t,n]);return oe(at,{keyframes:o,...r})};var T0={};yt(T0,"Zoom",()=>jv);const Nv=P`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,Ov=P`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Mv=P`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Rv=P`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Lv=P`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Dv=P`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,Iv=P`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Fv=P`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,Vv=P`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,bv=P`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function Av(e,t){switch(t){case"down":return e?Iv:Ov;case"left":return e?Fv:Mv;case"right":return e?Vv:Rv;case"up":return e?bv:Lv;default:return e?Dv:Nv}}const jv=e=>{const{direction:t,reverse:n=!1,...r}=e,o=A.exports.useMemo(()=>Av(n,t),[t,n]);return oe(at,{keyframes:o,...r})};_t(zt,g0);_t(zt,x0);_t(zt,S0);_t(zt,k0);_t(zt,$0);_t(zt,C0);_t(zt,E0);_t(zt,_0);_t(zt,z0);_t(zt,T0);const P0=yh(e=>({count:0,increment:t=>e(n=>({count:n.count+t})),decrement:t=>e(n=>({count:n.count-t}))})),Uv=e=>{const{toggle:t,toggleTheme:n}=rt.useContext(ro),{increment:r,decrement:o}=P0(),i=rt.useCallback(()=>r(e.inc),[r]),s=rt.useCallback(()=>o(e.inc),[o]);return Rt("div",{className:"inline-block bg-transparent",children:[Rt("div",{children:[Z(Rs,{onClick:i,fontSize:"text-5xl",children:"+"}),Z(Rs,{onClick:s,fontSize:"text-5xl",children:"-"})]}),e.toggleButton&&Rt(Rs,{onClick:n,fontSize:"text-3xl",children:[t?"\uB77C\uC774\uD2B8":"\uB2E4\uD06C","\uBAA8\uB4DC \uC804\uD658"]})]})},js=e=>Z(gi,{delay:300,children:Rt(Dl,{children:[Z(Ht,{fontSize:"text-9xl",stroke:!0,children:P0().count}),Z(Uv,{inc:e.inc,toggleButton:e.toggleButton})]})});Us.createRoot(document.getElementById("root")).render(Z(rt.StrictMode,{children:Rt(Ch,{children:[Z(zh,{}),Rt("div",{className:"absolute top-0 left-0 w-full bg-transparent select-none",children:[Z(gi,{delay:300,children:Z(Dl,{children:Z(Rh,{})})}),Z(js,{inc:1,toggleButton:!0}),Z(js,{inc:5}),Z(js,{inc:10}),Z(Dl,{children:Rt(gi,{delay:300,children:[Z(Ht,{className:"text-2xl sm:text-3xl",children:Z("a",{href:"https://github.com/ky0422/ky0422.github.io",children:"GITHUB"})}),Z(Ht,{className:"text-2xl sm:text-3xl",children:Z("a",{href:"https://ky0422.tistory.com",children:"TISTORY"})})]})})]})]})}));
