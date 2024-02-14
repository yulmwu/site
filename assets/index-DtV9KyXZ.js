function x0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var S0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ds(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zc={exports:{}},pi={},Tc={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qr=Symbol.for("react.element"),k0=Symbol.for("react.portal"),E0=Symbol.for("react.fragment"),C0=Symbol.for("react.strict_mode"),_0=Symbol.for("react.profiler"),z0=Symbol.for("react.provider"),T0=Symbol.for("react.context"),P0=Symbol.for("react.forward_ref"),N0=Symbol.for("react.suspense"),R0=Symbol.for("react.memo"),O0=Symbol.for("react.lazy"),Ha=Symbol.iterator;function M0(e){return e===null||typeof e!="object"?null:(e=Ha&&e[Ha]||e["@@iterator"],typeof e=="function"?e:null)}var Pc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nc=Object.assign,Rc={};function Qn(e,t,n){this.props=e,this.context=t,this.refs=Rc,this.updater=n||Pc}Qn.prototype.isReactComponent={};Qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Oc(){}Oc.prototype=Qn.prototype;function Is(e,t,n){this.props=e,this.context=t,this.refs=Rc,this.updater=n||Pc}var js=Is.prototype=new Oc;js.constructor=Is;Nc(js,Qn.prototype);js.isPureReactComponent=!0;var Xa=Array.isArray,Mc=Object.prototype.hasOwnProperty,Fs={current:null},$c={key:!0,ref:!0,__self:!0,__source:!0};function Lc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Mc.call(t,r)&&!$c.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Qr,type:e,key:i,ref:l,props:o,_owner:Fs.current}}function $0(e,t){return{$$typeof:Qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function As(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qr}function L0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Qa=/\/+/g;function bi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?L0(""+e.key):t.toString(36)}function zo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Qr:case k0:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+bi(l,0):r,Xa(o)?(n="",e!=null&&(n=e.replace(Qa,"$&/")+"/"),zo(o,t,n,"",function(c){return c})):o!=null&&(As(o)&&(o=$0(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Qa,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Xa(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+bi(i,s);l+=zo(i,t,n,a,o)}else if(a=M0(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+bi(i,s++),l+=zo(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function to(e,t,n){if(e==null)return e;var r=[],o=0;return zo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function D0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ie={current:null},To={transition:null},I0={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:To,ReactCurrentOwner:Fs};H.Children={map:to,forEach:function(e,t,n){to(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return to(e,function(){t++}),t},toArray:function(e){return to(e,function(t){return t})||[]},only:function(e){if(!As(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Qn;H.Fragment=E0;H.Profiler=_0;H.PureComponent=Is;H.StrictMode=C0;H.Suspense=N0;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I0;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Nc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Fs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Mc.call(t,a)&&!$c.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Qr,type:e.type,key:o,ref:i,props:r,_owner:l}};H.createContext=function(e){return e={$$typeof:T0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:z0,_context:e},e.Consumer=e};H.createElement=Lc;H.createFactory=function(e){var t=Lc.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:P0,render:e}};H.isValidElement=As;H.lazy=function(e){return{$$typeof:O0,_payload:{_status:-1,_result:e},_init:D0}};H.memo=function(e,t){return{$$typeof:R0,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=To.transition;To.transition={};try{e()}finally{To.transition=t}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(e,t){return Ie.current.useCallback(e,t)};H.useContext=function(e){return Ie.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Ie.current.useDeferredValue(e)};H.useEffect=function(e,t){return Ie.current.useEffect(e,t)};H.useId=function(){return Ie.current.useId()};H.useImperativeHandle=function(e,t,n){return Ie.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Ie.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Ie.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Ie.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Ie.current.useReducer(e,t,n)};H.useRef=function(e){return Ie.current.useRef(e)};H.useState=function(e){return Ie.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Ie.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Ie.current.useTransition()};H.version="18.2.0";Tc.exports=H;var U=Tc.exports;const Ge=Ds(U),Ga=x0({__proto__:null,default:Ge},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0=U,F0=Symbol.for("react.element"),A0=Symbol.for("react.fragment"),V0=Object.prototype.hasOwnProperty,U0=j0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B0={key:!0,ref:!0,__self:!0,__source:!0};function Dc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)V0.call(t,r)&&!B0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:F0,type:e,key:i,ref:l,props:o,_owner:U0.current}}pi.Fragment=A0;pi.jsx=Dc;pi.jsxs=Dc;zc.exports=pi;var W=zc.exports,Dl={},Ic={exports:{}},Je={},jc={exports:{}},Fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(y,v){var k=y.length;y.push(v);e:for(;0<k;){var z=k-1>>>1,R=y[z];if(0<o(R,v))y[z]=v,y[k]=R,k=z;else break e}}function n(y){return y.length===0?null:y[0]}function r(y){if(y.length===0)return null;var v=y[0],k=y.pop();if(k!==v){y[0]=k;e:for(var z=0,R=y.length,j=R>>>1;z<j;){var D=2*(z+1)-1,X=y[D],Q=D+1,V=y[Q];if(0>o(X,k))Q<R&&0>o(V,X)?(y[z]=V,y[Q]=k,z=Q):(y[z]=X,y[D]=k,z=D);else if(Q<R&&0>o(V,k))y[z]=V,y[Q]=k,z=Q;else break e}}return v}function o(y,v){var k=y.sortIndex-v.sortIndex;return k!==0?k:y.id-v.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],c=[],h=1,m=null,p=3,x=!1,w=!1,g=!1,A=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(y){for(var v=n(c);v!==null;){if(v.callback===null)r(c);else if(v.startTime<=y)r(c),v.sortIndex=v.expirationTime,t(a,v);else break;v=n(c)}}function S(y){if(g=!1,d(y),!w)if(n(a)!==null)w=!0,Lt(N);else{var v=n(c);v!==null&&E(S,v.startTime-y)}}function N(y,v){w=!1,g&&(g=!1,f(C),C=-1),x=!0;var k=p;try{for(d(v),m=n(a);m!==null&&(!(m.expirationTime>v)||y&&!se());){var z=m.callback;if(typeof z=="function"){m.callback=null,p=m.priorityLevel;var R=z(m.expirationTime<=v);v=e.unstable_now(),typeof R=="function"?m.callback=R:m===n(a)&&r(a),d(v)}else r(a);m=n(a)}if(m!==null)var j=!0;else{var D=n(c);D!==null&&E(S,D.startTime-v),j=!1}return j}finally{m=null,p=k,x=!1}}var O=!1,T=null,C=-1,Z=5,F=-1;function se(){return!(e.unstable_now()-F<Z)}function ue(){if(T!==null){var y=e.unstable_now();F=y;var v=!0;try{v=T(!0,y)}finally{v?Te():(O=!1,T=null)}}else O=!1}var Te;if(typeof u=="function")Te=function(){u(ue)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,$e=Fe.port2;Fe.port1.onmessage=ue,Te=function(){$e.postMessage(null)}}else Te=function(){A(ue,0)};function Lt(y){T=y,O||(O=!0,Te())}function E(y,v){C=A(function(){y(e.unstable_now())},v)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(y){y.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,Lt(N))},e.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<y?Math.floor(1e3/y):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(y){switch(p){case 1:case 2:case 3:var v=3;break;default:v=p}var k=p;p=v;try{return y()}finally{p=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(y,v){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var k=p;p=y;try{return v()}finally{p=k}},e.unstable_scheduleCallback=function(y,v,k){var z=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?z+k:z):k=z,y){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=k+R,y={id:h++,callback:v,priorityLevel:y,startTime:k,expirationTime:R,sortIndex:-1},k>z?(y.sortIndex=k,t(c,y),n(a)===null&&y===n(c)&&(g?(f(C),C=-1):g=!0,E(S,k-z))):(y.sortIndex=R,t(a,y),w||x||(w=!0,Lt(N))),y},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(y){var v=p;return function(){var k=p;p=v;try{return y.apply(this,arguments)}finally{p=k}}}})(Fc);jc.exports=Fc;var W0=jc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ac=U,qe=W0;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vc=new Set,zr={};function yn(e,t){Fn(e,t),Fn(e+"Capture",t)}function Fn(e,t){for(zr[e]=t,e=0;e<t.length;e++)Vc.add(t[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Il=Object.prototype.hasOwnProperty,Y0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ka={},Za={};function H0(e){return Il.call(Za,e)?!0:Il.call(Ka,e)?!1:Y0.test(e)?Za[e]=!0:(Ka[e]=!0,!1)}function X0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Q0(e,t,n,r){if(t===null||typeof t>"u"||X0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ze[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ze[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ze[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ze[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ze[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ze[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ze[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ze[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ze[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vs=/[\-:]([a-z])/g;function Us(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vs,Us);ze[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vs,Us);ze[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vs,Us);ze[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ze[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});ze.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ze[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bs(e,t,n,r){var o=ze.hasOwnProperty(t)?ze[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Q0(t,n,o,r)&&(n=null),r||o===null?H0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var $t=Ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,no=Symbol.for("react.element"),wn=Symbol.for("react.portal"),xn=Symbol.for("react.fragment"),Ws=Symbol.for("react.strict_mode"),jl=Symbol.for("react.profiler"),Uc=Symbol.for("react.provider"),Bc=Symbol.for("react.context"),Ys=Symbol.for("react.forward_ref"),Fl=Symbol.for("react.suspense"),Al=Symbol.for("react.suspense_list"),Hs=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),Wc=Symbol.for("react.offscreen"),qa=Symbol.iterator;function bn(e){return e===null||typeof e!="object"?null:(e=qa&&e[qa]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,el;function dr(e){if(el===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);el=t&&t[1]||""}return`
`+el+e}var tl=!1;function nl(e,t){if(!e||tl)return"";tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{tl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?dr(e):""}function G0(e){switch(e.tag){case 5:return dr(e.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return e=nl(e.type,!1),e;case 11:return e=nl(e.type.render,!1),e;case 1:return e=nl(e.type,!0),e;default:return""}}function Vl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xn:return"Fragment";case wn:return"Portal";case jl:return"Profiler";case Ws:return"StrictMode";case Fl:return"Suspense";case Al:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bc:return(e.displayName||"Context")+".Consumer";case Uc:return(e._context.displayName||"Context")+".Provider";case Ys:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Hs:return t=e.displayName||null,t!==null?t:Vl(e.type)||"Memo";case jt:t=e._payload,e=e._init;try{return Vl(e(t))}catch{}}return null}function K0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vl(t);case 8:return t===Ws?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Z0(e){var t=Yc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ro(e){e._valueTracker||(e._valueTracker=Z0(e))}function Hc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Yc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Uo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ul(e,t){var n=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ja(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Jt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xc(e,t){t=t.checked,t!=null&&Bs(e,"checked",t,!1)}function Bl(e,t){Xc(e,t);var n=Jt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Wl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Wl(e,t.type,Jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ba(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Wl(e,t,n){(t!=="number"||Uo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pr=Array.isArray;function On(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Jt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function eu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(pr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Jt(n)}}function Qc(e,t){var n=Jt(t.value),r=Jt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function tu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oo,Kc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oo=oo||document.createElement("div"),oo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Tr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},q0=["Webkit","ms","Moz","O"];Object.keys(yr).forEach(function(e){q0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yr[t]=yr[e]})});function Zc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||yr.hasOwnProperty(e)&&yr[e]?(""+t).trim():t+"px"}function qc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Zc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var J0=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xl(e,t){if(t){if(J0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Ql(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gl=null;function Xs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Kl=null,Mn=null,$n=null;function nu(e){if(e=Zr(e)){if(typeof Kl!="function")throw Error(_(280));var t=e.stateNode;t&&(t=gi(t),Kl(e.stateNode,e.type,t))}}function Jc(e){Mn?$n?$n.push(e):$n=[e]:Mn=e}function bc(){if(Mn){var e=Mn,t=$n;if($n=Mn=null,nu(e),t)for(e=0;e<t.length;e++)nu(t[e])}}function ef(e,t){return e(t)}function tf(){}var rl=!1;function nf(e,t,n){if(rl)return e(t,n);rl=!0;try{return ef(e,t,n)}finally{rl=!1,(Mn!==null||$n!==null)&&(tf(),bc())}}function Pr(e,t){var n=e.stateNode;if(n===null)return null;var r=gi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Zl=!1;if(Nt)try{var er={};Object.defineProperty(er,"passive",{get:function(){Zl=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{Zl=!1}function b0(e,t,n,r,o,i,l,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var vr=!1,Bo=null,Wo=!1,ql=null,ep={onError:function(e){vr=!0,Bo=e}};function tp(e,t,n,r,o,i,l,s,a){vr=!1,Bo=null,b0.apply(ep,arguments)}function np(e,t,n,r,o,i,l,s,a){if(tp.apply(this,arguments),vr){if(vr){var c=Bo;vr=!1,Bo=null}else throw Error(_(198));Wo||(Wo=!0,ql=c)}}function vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function rf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ru(e){if(vn(e)!==e)throw Error(_(188))}function rp(e){var t=e.alternate;if(!t){if(t=vn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ru(o),e;if(i===r)return ru(o),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function of(e){return e=rp(e),e!==null?lf(e):null}function lf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=lf(e);if(t!==null)return t;e=e.sibling}return null}var sf=qe.unstable_scheduleCallback,ou=qe.unstable_cancelCallback,op=qe.unstable_shouldYield,ip=qe.unstable_requestPaint,me=qe.unstable_now,lp=qe.unstable_getCurrentPriorityLevel,Qs=qe.unstable_ImmediatePriority,af=qe.unstable_UserBlockingPriority,Yo=qe.unstable_NormalPriority,sp=qe.unstable_LowPriority,uf=qe.unstable_IdlePriority,mi=null,St=null;function ap(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(mi,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:fp,up=Math.log,cp=Math.LN2;function fp(e){return e>>>=0,e===0?32:31-(up(e)/cp|0)|0}var io=64,lo=4194304;function mr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ho(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=mr(s):(i&=l,i!==0&&(r=mr(i)))}else l=n&~o,l!==0?r=mr(l):i!==0&&(r=mr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),o=1<<n,r|=e[n],t&=~o;return r}function dp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-dt(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=dp(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function Jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cf(){var e=io;return io<<=1,!(io&4194240)&&(io=64),e}function ol(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function mp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-dt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Gs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var b=0;function ff(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var df,Ks,pf,mf,hf,bl=!1,so=[],Yt=null,Ht=null,Xt=null,Nr=new Map,Rr=new Map,At=[],hp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function iu(e,t){switch(e){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":Nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(t.pointerId)}}function tr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Zr(t),t!==null&&Ks(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function yp(e,t,n,r,o){switch(t){case"focusin":return Yt=tr(Yt,e,t,n,r,o),!0;case"dragenter":return Ht=tr(Ht,e,t,n,r,o),!0;case"mouseover":return Xt=tr(Xt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Nr.set(i,tr(Nr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Rr.set(i,tr(Rr.get(i)||null,e,t,n,r,o)),!0}return!1}function yf(e){var t=ln(e.target);if(t!==null){var n=vn(t);if(n!==null){if(t=n.tag,t===13){if(t=rf(n),t!==null){e.blockedOn=t,hf(e.priority,function(){pf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Po(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=es(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Gl=r,n.target.dispatchEvent(r),Gl=null}else return t=Zr(n),t!==null&&Ks(t),e.blockedOn=n,!1;t.shift()}return!0}function lu(e,t,n){Po(e)&&n.delete(t)}function vp(){bl=!1,Yt!==null&&Po(Yt)&&(Yt=null),Ht!==null&&Po(Ht)&&(Ht=null),Xt!==null&&Po(Xt)&&(Xt=null),Nr.forEach(lu),Rr.forEach(lu)}function nr(e,t){e.blockedOn===t&&(e.blockedOn=null,bl||(bl=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,vp)))}function Or(e){function t(o){return nr(o,e)}if(0<so.length){nr(so[0],e);for(var n=1;n<so.length;n++){var r=so[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Yt!==null&&nr(Yt,e),Ht!==null&&nr(Ht,e),Xt!==null&&nr(Xt,e),Nr.forEach(t),Rr.forEach(t),n=0;n<At.length;n++)r=At[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)yf(n),n.blockedOn===null&&At.shift()}var Ln=$t.ReactCurrentBatchConfig,Xo=!0;function gp(e,t,n,r){var o=b,i=Ln.transition;Ln.transition=null;try{b=1,Zs(e,t,n,r)}finally{b=o,Ln.transition=i}}function wp(e,t,n,r){var o=b,i=Ln.transition;Ln.transition=null;try{b=4,Zs(e,t,n,r)}finally{b=o,Ln.transition=i}}function Zs(e,t,n,r){if(Xo){var o=es(e,t,n,r);if(o===null)ml(e,t,r,Qo,n),iu(e,r);else if(yp(o,e,t,n,r))r.stopPropagation();else if(iu(e,r),t&4&&-1<hp.indexOf(e)){for(;o!==null;){var i=Zr(o);if(i!==null&&df(i),i=es(e,t,n,r),i===null&&ml(e,t,r,Qo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ml(e,t,r,null,n)}}var Qo=null;function es(e,t,n,r){if(Qo=null,e=Xs(r),e=ln(e),e!==null)if(t=vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=rf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qo=e,null}function vf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lp()){case Qs:return 1;case af:return 4;case Yo:case sp:return 16;case uf:return 536870912;default:return 16}default:return 16}}var Bt=null,qs=null,No=null;function gf(){if(No)return No;var e,t=qs,n=t.length,r,o="value"in Bt?Bt.value:Bt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return No=o.slice(e,1<r?1-r:void 0)}function Ro(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ao(){return!0}function su(){return!1}function be(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ao:su,this.isPropagationStopped=su,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),t}var Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Js=be(Gn),Kr=de({},Gn,{view:0,detail:0}),xp=be(Kr),il,ll,rr,hi=de({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rr&&(rr&&e.type==="mousemove"?(il=e.screenX-rr.screenX,ll=e.screenY-rr.screenY):ll=il=0,rr=e),il)},movementY:function(e){return"movementY"in e?e.movementY:ll}}),au=be(hi),Sp=de({},hi,{dataTransfer:0}),kp=be(Sp),Ep=de({},Kr,{relatedTarget:0}),sl=be(Ep),Cp=de({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0}),_p=be(Cp),zp=de({},Gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tp=be(zp),Pp=de({},Gn,{data:0}),uu=be(Pp),Np={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Op={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Op[e])?!!t[e]:!1}function bs(){return Mp}var $p=de({},Kr,{key:function(e){if(e.key){var t=Np[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bs,charCode:function(e){return e.type==="keypress"?Ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lp=be($p),Dp=de({},hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cu=be(Dp),Ip=de({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bs}),jp=be(Ip),Fp=de({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ap=be(Fp),Vp=de({},hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Up=be(Vp),Bp=[9,13,27,32],ea=Nt&&"CompositionEvent"in window,gr=null;Nt&&"documentMode"in document&&(gr=document.documentMode);var Wp=Nt&&"TextEvent"in window&&!gr,wf=Nt&&(!ea||gr&&8<gr&&11>=gr),fu=" ",du=!1;function xf(e,t){switch(e){case"keyup":return Bp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function Yp(e,t){switch(e){case"compositionend":return Sf(t);case"keypress":return t.which!==32?null:(du=!0,fu);case"textInput":return e=t.data,e===fu&&du?null:e;default:return null}}function Hp(e,t){if(Sn)return e==="compositionend"||!ea&&xf(e,t)?(e=gf(),No=qs=Bt=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wf&&t.locale!=="ko"?null:t.data;default:return null}}var Xp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xp[e.type]:t==="textarea"}function kf(e,t,n,r){Jc(r),t=Go(t,"onChange"),0<t.length&&(n=new Js("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wr=null,Mr=null;function Qp(e){$f(e,0)}function yi(e){var t=Cn(e);if(Hc(t))return e}function Gp(e,t){if(e==="change")return t}var Ef=!1;if(Nt){var al;if(Nt){var ul="oninput"in document;if(!ul){var mu=document.createElement("div");mu.setAttribute("oninput","return;"),ul=typeof mu.oninput=="function"}al=ul}else al=!1;Ef=al&&(!document.documentMode||9<document.documentMode)}function hu(){wr&&(wr.detachEvent("onpropertychange",Cf),Mr=wr=null)}function Cf(e){if(e.propertyName==="value"&&yi(Mr)){var t=[];kf(t,Mr,e,Xs(e)),nf(Qp,t)}}function Kp(e,t,n){e==="focusin"?(hu(),wr=t,Mr=n,wr.attachEvent("onpropertychange",Cf)):e==="focusout"&&hu()}function Zp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yi(Mr)}function qp(e,t){if(e==="click")return yi(t)}function Jp(e,t){if(e==="input"||e==="change")return yi(t)}function bp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:bp;function $r(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Il.call(t,o)||!mt(e[o],t[o]))return!1}return!0}function yu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vu(e,t){var n=yu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yu(n)}}function _f(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_f(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zf(){for(var e=window,t=Uo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Uo(e.document)}return t}function ta(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function em(e){var t=zf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_f(n.ownerDocument.documentElement,n)){if(r!==null&&ta(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=vu(n,i);var l=vu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var tm=Nt&&"documentMode"in document&&11>=document.documentMode,kn=null,ts=null,xr=null,ns=!1;function gu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ns||kn==null||kn!==Uo(r)||(r=kn,"selectionStart"in r&&ta(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xr&&$r(xr,r)||(xr=r,r=Go(ts,"onSelect"),0<r.length&&(t=new Js("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=kn)))}function uo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var En={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},cl={},Tf={};Nt&&(Tf=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function vi(e){if(cl[e])return cl[e];if(!En[e])return e;var t=En[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tf)return cl[e]=t[n];return e}var Pf=vi("animationend"),Nf=vi("animationiteration"),Rf=vi("animationstart"),Of=vi("transitionend"),Mf=new Map,wu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function en(e,t){Mf.set(e,t),yn(t,[e])}for(var fl=0;fl<wu.length;fl++){var dl=wu[fl],nm=dl.toLowerCase(),rm=dl[0].toUpperCase()+dl.slice(1);en(nm,"on"+rm)}en(Pf,"onAnimationEnd");en(Nf,"onAnimationIteration");en(Rf,"onAnimationStart");en("dblclick","onDoubleClick");en("focusin","onFocus");en("focusout","onBlur");en(Of,"onTransitionEnd");Fn("onMouseEnter",["mouseout","mouseover"]);Fn("onMouseLeave",["mouseout","mouseover"]);Fn("onPointerEnter",["pointerout","pointerover"]);Fn("onPointerLeave",["pointerout","pointerover"]);yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),om=new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));function xu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,np(r,t,void 0,e),e.currentTarget=null}function $f(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;xu(o,s,c),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,c=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;xu(o,s,c),i=a}}}if(Wo)throw e=ql,Wo=!1,ql=null,e}function ie(e,t){var n=t[ss];n===void 0&&(n=t[ss]=new Set);var r=e+"__bubble";n.has(r)||(Lf(t,e,2,!1),n.add(r))}function pl(e,t,n){var r=0;t&&(r|=4),Lf(n,e,r,t)}var co="_reactListening"+Math.random().toString(36).slice(2);function Lr(e){if(!e[co]){e[co]=!0,Vc.forEach(function(n){n!=="selectionchange"&&(om.has(n)||pl(n,!1,e),pl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[co]||(t[co]=!0,pl("selectionchange",!1,t))}}function Lf(e,t,n,r){switch(vf(t)){case 1:var o=gp;break;case 4:o=wp;break;default:o=Zs}n=o.bind(null,t,n,e),o=void 0,!Zl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ml(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=ln(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}nf(function(){var c=i,h=Xs(n),m=[];e:{var p=Mf.get(e);if(p!==void 0){var x=Js,w=e;switch(e){case"keypress":if(Ro(n)===0)break e;case"keydown":case"keyup":x=Lp;break;case"focusin":w="focus",x=sl;break;case"focusout":w="blur",x=sl;break;case"beforeblur":case"afterblur":x=sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=au;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=kp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=jp;break;case Pf:case Nf:case Rf:x=_p;break;case Of:x=Ap;break;case"scroll":x=xp;break;case"wheel":x=Up;break;case"copy":case"cut":case"paste":x=Tp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=cu}var g=(t&4)!==0,A=!g&&e==="scroll",f=g?p!==null?p+"Capture":null:p;g=[];for(var u=c,d;u!==null;){d=u;var S=d.stateNode;if(d.tag===5&&S!==null&&(d=S,f!==null&&(S=Pr(u,f),S!=null&&g.push(Dr(u,S,d)))),A)break;u=u.return}0<g.length&&(p=new x(p,w,null,n,h),m.push({event:p,listeners:g}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",p&&n!==Gl&&(w=n.relatedTarget||n.fromElement)&&(ln(w)||w[Rt]))break e;if((x||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=c,w=w?ln(w):null,w!==null&&(A=vn(w),w!==A||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=c),x!==w)){if(g=au,S="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(g=cu,S="onPointerLeave",f="onPointerEnter",u="pointer"),A=x==null?p:Cn(x),d=w==null?p:Cn(w),p=new g(S,u+"leave",x,n,h),p.target=A,p.relatedTarget=d,S=null,ln(h)===c&&(g=new g(f,u+"enter",w,n,h),g.target=d,g.relatedTarget=A,S=g),A=S,x&&w)t:{for(g=x,f=w,u=0,d=g;d;d=gn(d))u++;for(d=0,S=f;S;S=gn(S))d++;for(;0<u-d;)g=gn(g),u--;for(;0<d-u;)f=gn(f),d--;for(;u--;){if(g===f||f!==null&&g===f.alternate)break t;g=gn(g),f=gn(f)}g=null}else g=null;x!==null&&Su(m,p,x,g,!1),w!==null&&A!==null&&Su(m,A,w,g,!0)}}e:{if(p=c?Cn(c):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var N=Gp;else if(pu(p))if(Ef)N=Jp;else{N=Zp;var O=Kp}else(x=p.nodeName)&&x.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(N=qp);if(N&&(N=N(e,c))){kf(m,N,n,h);break e}O&&O(e,p,c),e==="focusout"&&(O=p._wrapperState)&&O.controlled&&p.type==="number"&&Wl(p,"number",p.value)}switch(O=c?Cn(c):window,e){case"focusin":(pu(O)||O.contentEditable==="true")&&(kn=O,ts=c,xr=null);break;case"focusout":xr=ts=kn=null;break;case"mousedown":ns=!0;break;case"contextmenu":case"mouseup":case"dragend":ns=!1,gu(m,n,h);break;case"selectionchange":if(tm)break;case"keydown":case"keyup":gu(m,n,h)}var T;if(ea)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Sn?xf(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(wf&&n.locale!=="ko"&&(Sn||C!=="onCompositionStart"?C==="onCompositionEnd"&&Sn&&(T=gf()):(Bt=h,qs="value"in Bt?Bt.value:Bt.textContent,Sn=!0)),O=Go(c,C),0<O.length&&(C=new uu(C,e,null,n,h),m.push({event:C,listeners:O}),T?C.data=T:(T=Sf(n),T!==null&&(C.data=T)))),(T=Wp?Yp(e,n):Hp(e,n))&&(c=Go(c,"onBeforeInput"),0<c.length&&(h=new uu("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=T))}$f(m,t)})}function Dr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Go(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Pr(e,n),i!=null&&r.unshift(Dr(e,i,o)),i=Pr(e,t),i!=null&&r.push(Dr(e,i,o))),e=e.return}return r}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Su(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,o?(a=Pr(n,i),a!=null&&l.unshift(Dr(n,a,s))):o||(a=Pr(n,i),a!=null&&l.push(Dr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var im=/\r\n?/g,lm=/\u0000|\uFFFD/g;function ku(e){return(typeof e=="string"?e:""+e).replace(im,`
`).replace(lm,"")}function fo(e,t,n){if(t=ku(t),ku(e)!==t&&n)throw Error(_(425))}function Ko(){}var rs=null,os=null;function is(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ls=typeof setTimeout=="function"?setTimeout:void 0,sm=typeof clearTimeout=="function"?clearTimeout:void 0,Eu=typeof Promise=="function"?Promise:void 0,am=typeof queueMicrotask=="function"?queueMicrotask:typeof Eu<"u"?function(e){return Eu.resolve(null).then(e).catch(um)}:ls;function um(e){setTimeout(function(){throw e})}function hl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Or(t)}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Kn=Math.random().toString(36).slice(2),xt="__reactFiber$"+Kn,Ir="__reactProps$"+Kn,Rt="__reactContainer$"+Kn,ss="__reactEvents$"+Kn,cm="__reactListeners$"+Kn,fm="__reactHandles$"+Kn;function ln(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cu(e);e!==null;){if(n=e[xt])return n;e=Cu(e)}return t}e=n,n=e.parentNode}return null}function Zr(e){return e=e[xt]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function gi(e){return e[Ir]||null}var as=[],_n=-1;function tn(e){return{current:e}}function le(e){0>_n||(e.current=as[_n],as[_n]=null,_n--)}function oe(e,t){_n++,as[_n]=e.current,e.current=t}var bt={},Me=tn(bt),Ue=tn(!1),fn=bt;function An(e,t){var n=e.type.contextTypes;if(!n)return bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Be(e){return e=e.childContextTypes,e!=null}function Zo(){le(Ue),le(Me)}function _u(e,t,n){if(Me.current!==bt)throw Error(_(168));oe(Me,t),oe(Ue,n)}function Df(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,K0(e)||"Unknown",o));return de({},n,r)}function qo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bt,fn=Me.current,oe(Me,e),oe(Ue,Ue.current),!0}function zu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Df(e,t,fn),r.__reactInternalMemoizedMergedChildContext=e,le(Ue),le(Me),oe(Me,e)):le(Ue),oe(Ue,n)}var _t=null,wi=!1,yl=!1;function If(e){_t===null?_t=[e]:_t.push(e)}function dm(e){wi=!0,If(e)}function nn(){if(!yl&&_t!==null){yl=!0;var e=0,t=b;try{var n=_t;for(b=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,wi=!1}catch(o){throw _t!==null&&(_t=_t.slice(e+1)),sf(Qs,nn),o}finally{b=t,yl=!1}}return null}var zn=[],Tn=0,Jo=null,bo=0,tt=[],nt=0,dn=null,zt=1,Tt="";function rn(e,t){zn[Tn++]=bo,zn[Tn++]=Jo,Jo=e,bo=t}function jf(e,t,n){tt[nt++]=zt,tt[nt++]=Tt,tt[nt++]=dn,dn=e;var r=zt;e=Tt;var o=32-dt(r)-1;r&=~(1<<o),n+=1;var i=32-dt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,zt=1<<32-dt(t)+o|n<<o|r,Tt=i+e}else zt=1<<i|n<<o|r,Tt=e}function na(e){e.return!==null&&(rn(e,1),jf(e,1,0))}function ra(e){for(;e===Jo;)Jo=zn[--Tn],zn[Tn]=null,bo=zn[--Tn],zn[Tn]=null;for(;e===dn;)dn=tt[--nt],tt[nt]=null,Tt=tt[--nt],tt[nt]=null,zt=tt[--nt],tt[nt]=null}var Ke=null,Qe=null,ae=!1,ft=null;function Ff(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Tu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ke=e,Qe=Qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ke=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:zt,overflow:Tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ke=e,Qe=null,!0):!1;default:return!1}}function us(e){return(e.mode&1)!==0&&(e.flags&128)===0}function cs(e){if(ae){var t=Qe;if(t){var n=t;if(!Tu(e,t)){if(us(e))throw Error(_(418));t=Qt(n.nextSibling);var r=Ke;t&&Tu(e,t)?Ff(r,n):(e.flags=e.flags&-4097|2,ae=!1,Ke=e)}}else{if(us(e))throw Error(_(418));e.flags=e.flags&-4097|2,ae=!1,Ke=e}}}function Pu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function po(e){if(e!==Ke)return!1;if(!ae)return Pu(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!is(e.type,e.memoizedProps)),t&&(t=Qe)){if(us(e))throw Af(),Error(_(418));for(;t;)Ff(e,t),t=Qt(t.nextSibling)}if(Pu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qe=Qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=Ke?Qt(e.stateNode.nextSibling):null;return!0}function Af(){for(var e=Qe;e;)e=Qt(e.nextSibling)}function Vn(){Qe=Ke=null,ae=!1}function oa(e){ft===null?ft=[e]:ft.push(e)}var pm=$t.ReactCurrentBatchConfig;function ut(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ei=tn(null),ti=null,Pn=null,ia=null;function la(){ia=Pn=ti=null}function sa(e){var t=ei.current;le(ei),e._currentValue=t}function fs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){ti=e,ia=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ve=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(ia!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(ti===null)throw Error(_(308));Pn=e,ti.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var sn=null;function aa(e){sn===null?sn=[e]:sn.push(e)}function Vf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,aa(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ot(e,r)}function Ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ft=!1;function ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ot(e,n)}return o=r.interleaved,o===null?(t.next=t,aa(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ot(e,n)}function Oo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gs(e,n)}}function Nu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ni(e,t,n,r){var o=e.updateQueue;Ft=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,c=a.next;a.next=null,l===null?i=c:l.next=c,l=a;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==l&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=a))}if(i!==null){var m=o.baseState;l=0,h=c=a=null,s=i;do{var p=s.lane,x=s.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,g=s;switch(p=t,x=n,g.tag){case 1:if(w=g.payload,typeof w=="function"){m=w.call(x,m,p);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=g.payload,p=typeof w=="function"?w.call(x,m,p):w,p==null)break e;m=de({},m,p);break e;case 2:Ft=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[s]:p.push(s))}else x={eventTime:x,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=x,a=m):h=h.next=x,l|=p;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;p=s,s=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(h===null&&(a=m),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);mn|=l,e.lanes=l,e.memoizedState=m}}function Ru(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var Bf=new Ac.Component().refs;function ds(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:de({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xi={isMounted:function(e){return(e=e._reactInternals)?vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=De(),o=Zt(e),i=Pt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Gt(e,i,o),t!==null&&(pt(t,e,o,r),Oo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=De(),o=Zt(e),i=Pt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Gt(e,i,o),t!==null&&(pt(t,e,o,r),Oo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=De(),r=Zt(e),o=Pt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Gt(e,o,r),t!==null&&(pt(t,e,r,n),Oo(t,e,r))}};function Ou(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!$r(n,r)||!$r(o,i):!0}function Wf(e,t,n){var r=!1,o=bt,i=t.contextType;return typeof i=="object"&&i!==null?i=it(i):(o=Be(t)?fn:Me.current,r=t.contextTypes,i=(r=r!=null)?An(e,o):bt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Mu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xi.enqueueReplaceState(t,t.state,null)}function ps(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Bf,ua(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=it(i):(i=Be(t)?fn:Me.current,o.context=An(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ds(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&xi.enqueueReplaceState(o,o.state,null),ni(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;s===Bf&&(s=o.refs={}),l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function mo(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $u(e){var t=e._init;return t(e._payload)}function Yf(e){function t(f,u){if(e){var d=f.deletions;d===null?(f.deletions=[u],f.flags|=16):d.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=qt(f,u),f.index=0,f.sibling=null,f}function i(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags|=2,u):d):(f.flags|=2,u)):(f.flags|=1048576,u)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,u,d,S){return u===null||u.tag!==6?(u=El(d,f.mode,S),u.return=f,u):(u=o(u,d),u.return=f,u)}function a(f,u,d,S){var N=d.type;return N===xn?h(f,u,d.props.children,S,d.key):u!==null&&(u.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===jt&&$u(N)===u.type)?(S=o(u,d.props),S.ref=or(f,u,d),S.return=f,S):(S=jo(d.type,d.key,d.props,null,f.mode,S),S.ref=or(f,u,d),S.return=f,S)}function c(f,u,d,S){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=Cl(d,f.mode,S),u.return=f,u):(u=o(u,d.children||[]),u.return=f,u)}function h(f,u,d,S,N){return u===null||u.tag!==7?(u=cn(d,f.mode,S,N),u.return=f,u):(u=o(u,d),u.return=f,u)}function m(f,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=El(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case no:return d=jo(u.type,u.key,u.props,null,f.mode,d),d.ref=or(f,null,u),d.return=f,d;case wn:return u=Cl(u,f.mode,d),u.return=f,u;case jt:var S=u._init;return m(f,S(u._payload),d)}if(pr(u)||bn(u))return u=cn(u,f.mode,d,null),u.return=f,u;mo(f,u)}return null}function p(f,u,d,S){var N=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return N!==null?null:s(f,u,""+d,S);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case no:return d.key===N?a(f,u,d,S):null;case wn:return d.key===N?c(f,u,d,S):null;case jt:return N=d._init,p(f,u,N(d._payload),S)}if(pr(d)||bn(d))return N!==null?null:h(f,u,d,S,null);mo(f,d)}return null}function x(f,u,d,S,N){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(d)||null,s(u,f,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case no:return f=f.get(S.key===null?d:S.key)||null,a(u,f,S,N);case wn:return f=f.get(S.key===null?d:S.key)||null,c(u,f,S,N);case jt:var O=S._init;return x(f,u,d,O(S._payload),N)}if(pr(S)||bn(S))return f=f.get(d)||null,h(u,f,S,N,null);mo(u,S)}return null}function w(f,u,d,S){for(var N=null,O=null,T=u,C=u=0,Z=null;T!==null&&C<d.length;C++){T.index>C?(Z=T,T=null):Z=T.sibling;var F=p(f,T,d[C],S);if(F===null){T===null&&(T=Z);break}e&&T&&F.alternate===null&&t(f,T),u=i(F,u,C),O===null?N=F:O.sibling=F,O=F,T=Z}if(C===d.length)return n(f,T),ae&&rn(f,C),N;if(T===null){for(;C<d.length;C++)T=m(f,d[C],S),T!==null&&(u=i(T,u,C),O===null?N=T:O.sibling=T,O=T);return ae&&rn(f,C),N}for(T=r(f,T);C<d.length;C++)Z=x(T,f,C,d[C],S),Z!==null&&(e&&Z.alternate!==null&&T.delete(Z.key===null?C:Z.key),u=i(Z,u,C),O===null?N=Z:O.sibling=Z,O=Z);return e&&T.forEach(function(se){return t(f,se)}),ae&&rn(f,C),N}function g(f,u,d,S){var N=bn(d);if(typeof N!="function")throw Error(_(150));if(d=N.call(d),d==null)throw Error(_(151));for(var O=N=null,T=u,C=u=0,Z=null,F=d.next();T!==null&&!F.done;C++,F=d.next()){T.index>C?(Z=T,T=null):Z=T.sibling;var se=p(f,T,F.value,S);if(se===null){T===null&&(T=Z);break}e&&T&&se.alternate===null&&t(f,T),u=i(se,u,C),O===null?N=se:O.sibling=se,O=se,T=Z}if(F.done)return n(f,T),ae&&rn(f,C),N;if(T===null){for(;!F.done;C++,F=d.next())F=m(f,F.value,S),F!==null&&(u=i(F,u,C),O===null?N=F:O.sibling=F,O=F);return ae&&rn(f,C),N}for(T=r(f,T);!F.done;C++,F=d.next())F=x(T,f,C,F.value,S),F!==null&&(e&&F.alternate!==null&&T.delete(F.key===null?C:F.key),u=i(F,u,C),O===null?N=F:O.sibling=F,O=F);return e&&T.forEach(function(ue){return t(f,ue)}),ae&&rn(f,C),N}function A(f,u,d,S){if(typeof d=="object"&&d!==null&&d.type===xn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case no:e:{for(var N=d.key,O=u;O!==null;){if(O.key===N){if(N=d.type,N===xn){if(O.tag===7){n(f,O.sibling),u=o(O,d.props.children),u.return=f,f=u;break e}}else if(O.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===jt&&$u(N)===O.type){n(f,O.sibling),u=o(O,d.props),u.ref=or(f,O,d),u.return=f,f=u;break e}n(f,O);break}else t(f,O);O=O.sibling}d.type===xn?(u=cn(d.props.children,f.mode,S,d.key),u.return=f,f=u):(S=jo(d.type,d.key,d.props,null,f.mode,S),S.ref=or(f,u,d),S.return=f,f=S)}return l(f);case wn:e:{for(O=d.key;u!==null;){if(u.key===O)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(f,u.sibling),u=o(u,d.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=Cl(d,f.mode,S),u.return=f,f=u}return l(f);case jt:return O=d._init,A(f,u,O(d._payload),S)}if(pr(d))return w(f,u,d,S);if(bn(d))return g(f,u,d,S);mo(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,d),u.return=f,f=u):(n(f,u),u=El(d,f.mode,S),u.return=f,f=u),l(f)):n(f,u)}return A}var Un=Yf(!0),Hf=Yf(!1),qr={},kt=tn(qr),jr=tn(qr),Fr=tn(qr);function an(e){if(e===qr)throw Error(_(174));return e}function ca(e,t){switch(oe(Fr,t),oe(jr,e),oe(kt,qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Hl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Hl(t,e)}le(kt),oe(kt,t)}function Bn(){le(kt),le(jr),le(Fr)}function Xf(e){an(Fr.current);var t=an(kt.current),n=Hl(t,e.type);t!==n&&(oe(jr,e),oe(kt,n))}function fa(e){jr.current===e&&(le(kt),le(jr))}var ce=tn(0);function ri(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vl=[];function da(){for(var e=0;e<vl.length;e++)vl[e]._workInProgressVersionPrimary=null;vl.length=0}var Mo=$t.ReactCurrentDispatcher,gl=$t.ReactCurrentBatchConfig,pn=0,fe=null,ve=null,xe=null,oi=!1,Sr=!1,Ar=0,mm=0;function Pe(){throw Error(_(321))}function pa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function ma(e,t,n,r,o,i){if(pn=i,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Mo.current=e===null||e.memoizedState===null?gm:wm,e=n(r,o),Sr){i=0;do{if(Sr=!1,Ar=0,25<=i)throw Error(_(301));i+=1,xe=ve=null,t.updateQueue=null,Mo.current=xm,e=n(r,o)}while(Sr)}if(Mo.current=ii,t=ve!==null&&ve.next!==null,pn=0,xe=ve=fe=null,oi=!1,t)throw Error(_(300));return e}function ha(){var e=Ar!==0;return Ar=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?fe.memoizedState=xe=e:xe=xe.next=e,xe}function lt(){if(ve===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=xe===null?fe.memoizedState:xe.next;if(t!==null)xe=t,ve=e;else{if(e===null)throw Error(_(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},xe===null?fe.memoizedState=xe=e:xe=xe.next=e}return xe}function Vr(e,t){return typeof t=="function"?t(e):t}function wl(e){var t=lt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ve,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,c=i;do{var h=c.lane;if((pn&h)===h)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=m,l=r):a=a.next=m,fe.lanes|=h,mn|=h}c=c.next}while(c!==null&&c!==i);a===null?l=r:a.next=s,mt(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,fe.lanes|=i,mn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xl(e){var t=lt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);mt(i,t.memoizedState)||(Ve=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Qf(){}function Gf(e,t){var n=fe,r=lt(),o=t(),i=!mt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ve=!0),r=r.queue,ya(qf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,Ur(9,Zf.bind(null,n,r,o,t),void 0,null),Se===null)throw Error(_(349));pn&30||Kf(n,t,o)}return o}function Kf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zf(e,t,n,r){t.value=n,t.getSnapshot=r,Jf(t)&&bf(e)}function qf(e,t,n){return n(function(){Jf(t)&&bf(e)})}function Jf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function bf(e){var t=Ot(e,1);t!==null&&pt(t,e,1,-1)}function Lu(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vr,lastRenderedState:e},t.queue=e,e=e.dispatch=vm.bind(null,fe,e),[t.memoizedState,e]}function Ur(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ed(){return lt().memoizedState}function $o(e,t,n,r){var o=vt();fe.flags|=e,o.memoizedState=Ur(1|t,n,void 0,r===void 0?null:r)}function Si(e,t,n,r){var o=lt();r=r===void 0?null:r;var i=void 0;if(ve!==null){var l=ve.memoizedState;if(i=l.destroy,r!==null&&pa(r,l.deps)){o.memoizedState=Ur(t,n,i,r);return}}fe.flags|=e,o.memoizedState=Ur(1|t,n,i,r)}function Du(e,t){return $o(8390656,8,e,t)}function ya(e,t){return Si(2048,8,e,t)}function td(e,t){return Si(4,2,e,t)}function nd(e,t){return Si(4,4,e,t)}function rd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function od(e,t,n){return n=n!=null?n.concat([e]):null,Si(4,4,rd.bind(null,t,e),n)}function va(){}function id(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ld(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function sd(e,t,n){return pn&21?(mt(n,t)||(n=cf(),fe.lanes|=n,mn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n)}function hm(e,t){var n=b;b=n!==0&&4>n?n:4,e(!0);var r=gl.transition;gl.transition={};try{e(!1),t()}finally{b=n,gl.transition=r}}function ad(){return lt().memoizedState}function ym(e,t,n){var r=Zt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ud(e))cd(t,n);else if(n=Vf(e,t,n,r),n!==null){var o=De();pt(n,e,r,o),fd(n,t,r)}}function vm(e,t,n){var r=Zt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ud(e))cd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,mt(s,l)){var a=t.interleaved;a===null?(o.next=o,aa(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Vf(e,t,o,r),n!==null&&(o=De(),pt(n,e,r,o),fd(n,t,r))}}function ud(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function cd(e,t){Sr=oi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gs(e,n)}}var ii={readContext:it,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},gm={readContext:it,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:Du,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$o(4194308,4,rd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $o(4194308,4,e,t)},useInsertionEffect:function(e,t){return $o(4,2,e,t)},useMemo:function(e,t){var n=vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ym.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:Lu,useDebugValue:va,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=Lu(!1),t=e[0];return e=hm.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=fe,o=vt();if(ae){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),Se===null)throw Error(_(349));pn&30||Kf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Du(qf.bind(null,r,i,e),[e]),r.flags|=2048,Ur(9,Zf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=vt(),t=Se.identifierPrefix;if(ae){var n=Tt,r=zt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ar++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=mm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wm={readContext:it,useCallback:id,useContext:it,useEffect:ya,useImperativeHandle:od,useInsertionEffect:td,useLayoutEffect:nd,useMemo:ld,useReducer:wl,useRef:ed,useState:function(){return wl(Vr)},useDebugValue:va,useDeferredValue:function(e){var t=lt();return sd(t,ve.memoizedState,e)},useTransition:function(){var e=wl(Vr)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Qf,useSyncExternalStore:Gf,useId:ad,unstable_isNewReconciler:!1},xm={readContext:it,useCallback:id,useContext:it,useEffect:ya,useImperativeHandle:od,useInsertionEffect:td,useLayoutEffect:nd,useMemo:ld,useReducer:xl,useRef:ed,useState:function(){return xl(Vr)},useDebugValue:va,useDeferredValue:function(e){var t=lt();return ve===null?t.memoizedState=e:sd(t,ve.memoizedState,e)},useTransition:function(){var e=xl(Vr)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Qf,useSyncExternalStore:Gf,useId:ad,unstable_isNewReconciler:!1};function Wn(e,t){try{var n="",r=t;do n+=G0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Sl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ms(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Sm=typeof WeakMap=="function"?WeakMap:Map;function dd(e,t,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){si||(si=!0,Cs=r),ms(e,t)},n}function pd(e,t,n){n=Pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ms(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ms(e,t),typeof r!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Iu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Sm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Dm.bind(null,e,t,n),t.then(e,e))}function ju(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Pt(-1,1),t.tag=2,Gt(n,t,1))),n.lanes|=1),e)}var km=$t.ReactCurrentOwner,Ve=!1;function Le(e,t,n,r){t.child=e===null?Hf(t,null,n,r):Un(t,e.child,n,r)}function Au(e,t,n,r,o){n=n.render;var i=t.ref;return Dn(t,o),r=ma(e,t,n,r,i,o),n=ha(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Mt(e,t,o)):(ae&&n&&na(t),t.flags|=1,Le(e,t,r,o),t.child)}function Vu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!_a(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,md(e,t,i,r,o)):(e=jo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:$r,n(l,r)&&e.ref===t.ref)return Mt(e,t,o)}return t.flags|=1,e=qt(i,r),e.ref=t.ref,e.return=t,t.child=e}function md(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if($r(i,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,Mt(e,t,o)}return hs(e,t,n,r,o)}function hd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(Rn,Xe),Xe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,oe(Rn,Xe),Xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,oe(Rn,Xe),Xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,oe(Rn,Xe),Xe|=r;return Le(e,t,o,n),t.child}function yd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function hs(e,t,n,r,o){var i=Be(n)?fn:Me.current;return i=An(t,i),Dn(t,o),n=ma(e,t,n,r,i,o),r=ha(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Mt(e,t,o)):(ae&&r&&na(t),t.flags|=1,Le(e,t,n,o),t.child)}function Uu(e,t,n,r,o){if(Be(n)){var i=!0;qo(t)}else i=!1;if(Dn(t,o),t.stateNode===null)Lo(e,t),Wf(t,n,r),ps(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=it(c):(c=Be(n)?fn:Me.current,c=An(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==c)&&Mu(t,l,r,c),Ft=!1;var p=t.memoizedState;l.state=p,ni(t,r,l,o),a=t.memoizedState,s!==r||p!==a||Ue.current||Ft?(typeof h=="function"&&(ds(t,n,h,r),a=t.memoizedState),(s=Ft||Ou(t,n,s,r,p,a,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Uf(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ut(t.type,s),l.props=c,m=t.pendingProps,p=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=it(a):(a=Be(n)?fn:Me.current,a=An(t,a));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||p!==a)&&Mu(t,l,r,a),Ft=!1,p=t.memoizedState,l.state=p,ni(t,r,l,o);var w=t.memoizedState;s!==m||p!==w||Ue.current||Ft?(typeof x=="function"&&(ds(t,n,x,r),w=t.memoizedState),(c=Ft||Ou(t,n,c,r,p,w,a)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=a,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return ys(e,t,n,r,i,o)}function ys(e,t,n,r,o,i){yd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&zu(t,n,!1),Mt(e,t,i);r=t.stateNode,km.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Un(t,e.child,null,i),t.child=Un(t,null,s,i)):Le(e,t,s,i),t.memoizedState=r.state,o&&zu(t,n,!0),t.child}function vd(e){var t=e.stateNode;t.pendingContext?_u(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_u(e,t.context,!1),ca(e,t.containerInfo)}function Bu(e,t,n,r,o){return Vn(),oa(o),t.flags|=256,Le(e,t,n,r),t.child}var vs={dehydrated:null,treeContext:null,retryLane:0};function gs(e){return{baseLanes:e,cachePool:null,transitions:null}}function gd(e,t,n){var r=t.pendingProps,o=ce.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),oe(ce,o&1),e===null)return cs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ci(l,r,0,null),e=cn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=gs(n),t.memoizedState=vs,e):ga(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Em(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=qt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=qt(s,i):(i=cn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?gs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=vs,r}return i=e.child,e=i.sibling,r=qt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ga(e,t){return t=Ci({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ho(e,t,n,r){return r!==null&&oa(r),Un(t,e.child,null,n),e=ga(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Em(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Sl(Error(_(422))),ho(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ci({mode:"visible",children:r.children},o,0,null),i=cn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Un(t,e.child,null,l),t.child.memoizedState=gs(l),t.memoizedState=vs,i);if(!(t.mode&1))return ho(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(_(419)),r=Sl(i,r,void 0),ho(e,t,l,r)}if(s=(l&e.childLanes)!==0,Ve||s){if(r=Se,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ot(e,o),pt(r,e,o,-1))}return Ca(),r=Sl(Error(_(421))),ho(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Im.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Qe=Qt(o.nextSibling),Ke=t,ae=!0,ft=null,e!==null&&(tt[nt++]=zt,tt[nt++]=Tt,tt[nt++]=dn,zt=e.id,Tt=e.overflow,dn=t),t=ga(t,r.children),t.flags|=4096,t)}function Wu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fs(e.return,t,n)}function kl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function wd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Le(e,t,r.children,n),r=ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wu(e,n,t);else if(e.tag===19)Wu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(oe(ce,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ri(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),kl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ri(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}kl(t,!0,n,null,i);break;case"together":kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Mt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),mn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cm(e,t,n){switch(t.tag){case 3:vd(t),Vn();break;case 5:Xf(t);break;case 1:Be(t.type)&&qo(t);break;case 4:ca(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;oe(ei,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(oe(ce,ce.current&1),t.flags|=128,null):n&t.child.childLanes?gd(e,t,n):(oe(ce,ce.current&1),e=Mt(e,t,n),e!==null?e.sibling:null);oe(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),oe(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,hd(e,t,n)}return Mt(e,t,n)}var xd,ws,Sd,kd;xd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ws=function(){};Sd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,an(kt.current);var i=null;switch(n){case"input":o=Ul(e,o),r=Ul(e,r),i=[];break;case"select":o=de({},o,{value:void 0}),r=de({},r,{value:void 0}),i=[];break;case"textarea":o=Yl(e,o),r=Yl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ko)}Xl(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(zr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(zr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&ie("scroll",e),i||s===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};kd=function(e,t,n,r){n!==r&&(t.flags|=4)};function ir(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function _m(e,t,n){var r=t.pendingProps;switch(ra(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Be(t.type)&&Zo(),Ne(t),null;case 3:return r=t.stateNode,Bn(),le(Ue),le(Me),da(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(po(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(Ts(ft),ft=null))),ws(e,t),Ne(t),null;case 5:fa(t);var o=an(Fr.current);if(n=t.type,e!==null&&t.stateNode!=null)Sd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Ne(t),null}if(e=an(kt.current),po(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[xt]=t,r[Ir]=i,e=(t.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(o=0;o<hr.length;o++)ie(hr[o],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":Ja(r,i),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ie("invalid",r);break;case"textarea":eu(r,i),ie("invalid",r)}Xl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&fo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&fo(r.textContent,s,e),o=["children",""+s]):zr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&ie("scroll",r)}switch(n){case"input":ro(r),ba(r,i,!0);break;case"textarea":ro(r),tu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ko)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[xt]=t,e[Ir]=r,xd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ql(n,r),n){case"dialog":ie("cancel",e),ie("close",e),o=r;break;case"iframe":case"object":case"embed":ie("load",e),o=r;break;case"video":case"audio":for(o=0;o<hr.length;o++)ie(hr[o],e);o=r;break;case"source":ie("error",e),o=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),o=r;break;case"details":ie("toggle",e),o=r;break;case"input":Ja(e,r),o=Ul(e,r),ie("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=de({},r,{value:void 0}),ie("invalid",e);break;case"textarea":eu(e,r),o=Yl(e,r),ie("invalid",e);break;default:o=r}Xl(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?qc(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Kc(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Tr(e,a):typeof a=="number"&&Tr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(zr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&ie("scroll",e):a!=null&&Bs(e,i,a,l))}switch(n){case"input":ro(e),ba(e,r,!1);break;case"textarea":ro(e),tu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Jt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?On(e,!!r.multiple,i,!1):r.defaultValue!=null&&On(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ko)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)kd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=an(Fr.current),an(kt.current),po(t)){if(r=t.stateNode,n=t.memoizedProps,r[xt]=t,(i=r.nodeValue!==n)&&(e=Ke,e!==null))switch(e.tag){case 3:fo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=t,t.stateNode=r}return Ne(t),null;case 13:if(le(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&Qe!==null&&t.mode&1&&!(t.flags&128))Af(),Vn(),t.flags|=98560,i=!1;else if(i=po(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[xt]=t}else Vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ne(t),i=!1}else ft!==null&&(Ts(ft),ft=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ce.current&1?ge===0&&(ge=3):Ca())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return Bn(),ws(e,t),e===null&&Lr(t.stateNode.containerInfo),Ne(t),null;case 10:return sa(t.type._context),Ne(t),null;case 17:return Be(t.type)&&Zo(),Ne(t),null;case 19:if(le(ce),i=t.memoizedState,i===null)return Ne(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)ir(i,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ri(e),l!==null){for(t.flags|=128,ir(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return oe(ce,ce.current&1|2),t.child}e=e.sibling}i.tail!==null&&me()>Yn&&(t.flags|=128,r=!0,ir(i,!1),t.lanes=4194304)}else{if(!r)if(e=ri(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ir(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ae)return Ne(t),null}else 2*me()-i.renderingStartTime>Yn&&n!==1073741824&&(t.flags|=128,r=!0,ir(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=me(),t.sibling=null,n=ce.current,oe(ce,r?n&1|2:n&1),t):(Ne(t),null);case 22:case 23:return Ea(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Xe&1073741824&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function zm(e,t){switch(ra(t),t.tag){case 1:return Be(t.type)&&Zo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bn(),le(Ue),le(Me),da(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return fa(t),null;case 13:if(le(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(ce),null;case 4:return Bn(),null;case 10:return sa(t.type._context),null;case 22:case 23:return Ea(),null;case 24:return null;default:return null}}var yo=!1,Oe=!1,Tm=typeof WeakSet=="function"?WeakSet:Set,M=null;function Nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(e,t,r)}else n.current=null}function xs(e,t,n){try{n()}catch(r){pe(e,t,r)}}var Yu=!1;function Pm(e,t){if(rs=Xo,e=zf(),ta(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,c=0,h=0,m=e,p=null;t:for(;;){for(var x;m!==n||o!==0&&m.nodeType!==3||(s=l+o),m!==i||r!==0&&m.nodeType!==3||(a=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(x=m.firstChild)!==null;)p=m,m=x;for(;;){if(m===e)break t;if(p===n&&++c===o&&(s=l),p===i&&++h===r&&(a=l),(x=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=x}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(os={focusedElem:e,selectionRange:n},Xo=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var g=w.memoizedProps,A=w.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?g:ut(t.type,g),A);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(S){pe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return w=Yu,Yu=!1,w}function kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&xs(t,n,i)}o=o.next}while(o!==r)}}function ki(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ss(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ed(e){var t=e.alternate;t!==null&&(e.alternate=null,Ed(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[Ir],delete t[ss],delete t[cm],delete t[fm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cd(e){return e.tag===5||e.tag===3||e.tag===4}function Hu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ks(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ko));else if(r!==4&&(e=e.child,e!==null))for(ks(e,t,n),e=e.sibling;e!==null;)ks(e,t,n),e=e.sibling}function Es(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Es(e,t,n),e=e.sibling;e!==null;)Es(e,t,n),e=e.sibling}var Ee=null,ct=!1;function Dt(e,t,n){for(n=n.child;n!==null;)_d(e,t,n),n=n.sibling}function _d(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(mi,n)}catch{}switch(n.tag){case 5:Oe||Nn(n,t);case 6:var r=Ee,o=ct;Ee=null,Dt(e,t,n),Ee=r,ct=o,Ee!==null&&(ct?(e=Ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(ct?(e=Ee,n=n.stateNode,e.nodeType===8?hl(e.parentNode,n):e.nodeType===1&&hl(e,n),Or(e)):hl(Ee,n.stateNode));break;case 4:r=Ee,o=ct,Ee=n.stateNode.containerInfo,ct=!0,Dt(e,t,n),Ee=r,ct=o;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&xs(n,t,l),o=o.next}while(o!==r)}Dt(e,t,n);break;case 1:if(!Oe&&(Nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){pe(n,t,s)}Dt(e,t,n);break;case 21:Dt(e,t,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,Dt(e,t,n),Oe=r):Dt(e,t,n);break;default:Dt(e,t,n)}}function Xu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Tm),t.forEach(function(r){var o=jm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:Ee=s.stateNode,ct=!1;break e;case 3:Ee=s.stateNode.containerInfo,ct=!0;break e;case 4:Ee=s.stateNode.containerInfo,ct=!0;break e}s=s.return}if(Ee===null)throw Error(_(160));_d(i,l,o),Ee=null,ct=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){pe(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zd(t,e),t=t.sibling}function zd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),yt(e),r&4){try{kr(3,e,e.return),ki(3,e)}catch(g){pe(e,e.return,g)}try{kr(5,e,e.return)}catch(g){pe(e,e.return,g)}}break;case 1:at(t,e),yt(e),r&512&&n!==null&&Nn(n,n.return);break;case 5:if(at(t,e),yt(e),r&512&&n!==null&&Nn(n,n.return),e.flags&32){var o=e.stateNode;try{Tr(o,"")}catch(g){pe(e,e.return,g)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Xc(o,i),Ql(s,l);var c=Ql(s,i);for(l=0;l<a.length;l+=2){var h=a[l],m=a[l+1];h==="style"?qc(o,m):h==="dangerouslySetInnerHTML"?Kc(o,m):h==="children"?Tr(o,m):Bs(o,h,m,c)}switch(s){case"input":Bl(o,i);break;case"textarea":Qc(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?On(o,!!i.multiple,x,!1):p!==!!i.multiple&&(i.defaultValue!=null?On(o,!!i.multiple,i.defaultValue,!0):On(o,!!i.multiple,i.multiple?[]:"",!1))}o[Ir]=i}catch(g){pe(e,e.return,g)}}break;case 6:if(at(t,e),yt(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(g){pe(e,e.return,g)}}break;case 3:if(at(t,e),yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Or(t.containerInfo)}catch(g){pe(e,e.return,g)}break;case 4:at(t,e),yt(e);break;case 13:at(t,e),yt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Sa=me())),r&4&&Xu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Oe=(c=Oe)||h,at(t,e),Oe=c):at(t,e),yt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(M=e,h=e.child;h!==null;){for(m=M=h;M!==null;){switch(p=M,x=p.child,p.tag){case 0:case 11:case 14:case 15:kr(4,p,p.return);break;case 1:Nn(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(g){pe(r,n,g)}}break;case 5:Nn(p,p.return);break;case 22:if(p.memoizedState!==null){Gu(m);continue}}x!==null?(x.return=p,M=x):Gu(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{o=m.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,a=m.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Zc("display",l))}catch(g){pe(e,e.return,g)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(g){pe(e,e.return,g)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:at(t,e),yt(e),r&4&&Xu(e);break;case 21:break;default:at(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Cd(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Tr(o,""),r.flags&=-33);var i=Hu(e);Es(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Hu(e);ks(e,s,l);break;default:throw Error(_(161))}}catch(a){pe(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nm(e,t,n){M=e,Td(e)}function Td(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var o=M,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||yo;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||Oe;s=yo;var c=Oe;if(yo=l,(Oe=a)&&!c)for(M=o;M!==null;)l=M,a=l.child,l.tag===22&&l.memoizedState!==null?Ku(o):a!==null?(a.return=l,M=a):Ku(o);for(;i!==null;)M=i,Td(i),i=i.sibling;M=o,yo=s,Oe=c}Qu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,M=i):Qu(e)}}function Qu(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Oe||ki(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ru(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ru(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Or(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Oe||t.flags&512&&Ss(t)}catch(p){pe(t,t.return,p)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function Gu(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Ku(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ki(4,t)}catch(a){pe(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){pe(t,o,a)}}var i=t.return;try{Ss(t)}catch(a){pe(t,i,a)}break;case 5:var l=t.return;try{Ss(t)}catch(a){pe(t,l,a)}}}catch(a){pe(t,t.return,a)}if(t===e){M=null;break}var s=t.sibling;if(s!==null){s.return=t.return,M=s;break}M=t.return}}var Rm=Math.ceil,li=$t.ReactCurrentDispatcher,wa=$t.ReactCurrentOwner,ot=$t.ReactCurrentBatchConfig,G=0,Se=null,ye=null,_e=0,Xe=0,Rn=tn(0),ge=0,Br=null,mn=0,Ei=0,xa=0,Er=null,Ae=null,Sa=0,Yn=1/0,Ct=null,si=!1,Cs=null,Kt=null,vo=!1,Wt=null,ai=0,Cr=0,_s=null,Do=-1,Io=0;function De(){return G&6?me():Do!==-1?Do:Do=me()}function Zt(e){return e.mode&1?G&2&&_e!==0?_e&-_e:pm.transition!==null?(Io===0&&(Io=cf()),Io):(e=b,e!==0||(e=window.event,e=e===void 0?16:vf(e.type)),e):1}function pt(e,t,n,r){if(50<Cr)throw Cr=0,_s=null,Error(_(185));Gr(e,n,r),(!(G&2)||e!==Se)&&(e===Se&&(!(G&2)&&(Ei|=n),ge===4&&Vt(e,_e)),We(e,r),n===1&&G===0&&!(t.mode&1)&&(Yn=me()+500,wi&&nn()))}function We(e,t){var n=e.callbackNode;pp(e,t);var r=Ho(e,e===Se?_e:0);if(r===0)n!==null&&ou(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ou(n),t===1)e.tag===0?dm(Zu.bind(null,e)):If(Zu.bind(null,e)),am(function(){!(G&6)&&nn()}),n=null;else{switch(ff(r)){case 1:n=Qs;break;case 4:n=af;break;case 16:n=Yo;break;case 536870912:n=uf;break;default:n=Yo}n=Dd(n,Pd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Pd(e,t){if(Do=-1,Io=0,G&6)throw Error(_(327));var n=e.callbackNode;if(In()&&e.callbackNode!==n)return null;var r=Ho(e,e===Se?_e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ui(e,r);else{t=r;var o=G;G|=2;var i=Rd();(Se!==e||_e!==t)&&(Ct=null,Yn=me()+500,un(e,t));do try{$m();break}catch(s){Nd(e,s)}while(!0);la(),li.current=i,G=o,ye!==null?t=0:(Se=null,_e=0,t=ge)}if(t!==0){if(t===2&&(o=Jl(e),o!==0&&(r=o,t=zs(e,o))),t===1)throw n=Br,un(e,0),Vt(e,r),We(e,me()),n;if(t===6)Vt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Om(o)&&(t=ui(e,r),t===2&&(i=Jl(e),i!==0&&(r=i,t=zs(e,i))),t===1))throw n=Br,un(e,0),Vt(e,r),We(e,me()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:on(e,Ae,Ct);break;case 3:if(Vt(e,r),(r&130023424)===r&&(t=Sa+500-me(),10<t)){if(Ho(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){De(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ls(on.bind(null,e,Ae,Ct),t);break}on(e,Ae,Ct);break;case 4:if(Vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-dt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rm(r/1960))-r,10<r){e.timeoutHandle=ls(on.bind(null,e,Ae,Ct),r);break}on(e,Ae,Ct);break;case 5:on(e,Ae,Ct);break;default:throw Error(_(329))}}}return We(e,me()),e.callbackNode===n?Pd.bind(null,e):null}function zs(e,t){var n=Er;return e.current.memoizedState.isDehydrated&&(un(e,t).flags|=256),e=ui(e,t),e!==2&&(t=Ae,Ae=n,t!==null&&Ts(t)),e}function Ts(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function Om(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!mt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vt(e,t){for(t&=~xa,t&=~Ei,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function Zu(e){if(G&6)throw Error(_(327));In();var t=Ho(e,0);if(!(t&1))return We(e,me()),null;var n=ui(e,t);if(e.tag!==0&&n===2){var r=Jl(e);r!==0&&(t=r,n=zs(e,r))}if(n===1)throw n=Br,un(e,0),Vt(e,t),We(e,me()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,on(e,Ae,Ct),We(e,me()),null}function ka(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(Yn=me()+500,wi&&nn())}}function hn(e){Wt!==null&&Wt.tag===0&&!(G&6)&&In();var t=G;G|=1;var n=ot.transition,r=b;try{if(ot.transition=null,b=1,e)return e()}finally{b=r,ot.transition=n,G=t,!(G&6)&&nn()}}function Ea(){Xe=Rn.current,le(Rn)}function un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sm(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(ra(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zo();break;case 3:Bn(),le(Ue),le(Me),da();break;case 5:fa(r);break;case 4:Bn();break;case 13:le(ce);break;case 19:le(ce);break;case 10:sa(r.type._context);break;case 22:case 23:Ea()}n=n.return}if(Se=e,ye=e=qt(e.current,null),_e=Xe=t,ge=0,Br=null,xa=Ei=mn=0,Ae=Er=null,sn!==null){for(t=0;t<sn.length;t++)if(n=sn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}sn=null}return e}function Nd(e,t){do{var n=ye;try{if(la(),Mo.current=ii,oi){for(var r=fe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}oi=!1}if(pn=0,xe=ve=fe=null,Sr=!1,Ar=0,wa.current=null,n===null||n.return===null){ge=1,Br=t,ye=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=_e,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,h=s,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=ju(l);if(x!==null){x.flags&=-257,Fu(x,l,s,i,t),x.mode&1&&Iu(i,c,t),t=x,a=c;var w=t.updateQueue;if(w===null){var g=new Set;g.add(a),t.updateQueue=g}else w.add(a);break e}else{if(!(t&1)){Iu(i,c,t),Ca();break e}a=Error(_(426))}}else if(ae&&s.mode&1){var A=ju(l);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Fu(A,l,s,i,t),oa(Wn(a,s));break e}}i=a=Wn(a,s),ge!==4&&(ge=2),Er===null?Er=[i]:Er.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=dd(i,a,t);Nu(i,f);break e;case 1:s=a;var u=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Kt===null||!Kt.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=pd(i,s,t);Nu(i,S);break e}}i=i.return}while(i!==null)}Md(n)}catch(N){t=N,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(!0)}function Rd(){var e=li.current;return li.current=ii,e===null?ii:e}function Ca(){(ge===0||ge===3||ge===2)&&(ge=4),Se===null||!(mn&268435455)&&!(Ei&268435455)||Vt(Se,_e)}function ui(e,t){var n=G;G|=2;var r=Rd();(Se!==e||_e!==t)&&(Ct=null,un(e,t));do try{Mm();break}catch(o){Nd(e,o)}while(!0);if(la(),G=n,li.current=r,ye!==null)throw Error(_(261));return Se=null,_e=0,ge}function Mm(){for(;ye!==null;)Od(ye)}function $m(){for(;ye!==null&&!op();)Od(ye)}function Od(e){var t=Ld(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,t===null?Md(e):ye=t,wa.current=null}function Md(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=zm(n,t),n!==null){n.flags&=32767,ye=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,ye=null;return}}else if(n=_m(n,t,Xe),n!==null){ye=n;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);ge===0&&(ge=5)}function on(e,t,n){var r=b,o=ot.transition;try{ot.transition=null,b=1,Lm(e,t,n,r)}finally{ot.transition=o,b=r}return null}function Lm(e,t,n,r){do In();while(Wt!==null);if(G&6)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(mp(e,i),e===Se&&(ye=Se=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vo||(vo=!0,Dd(Yo,function(){return In(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ot.transition,ot.transition=null;var l=b;b=1;var s=G;G|=4,wa.current=null,Pm(e,n),zd(n,e),em(os),Xo=!!rs,os=rs=null,e.current=n,Nm(n),ip(),G=s,b=l,ot.transition=i}else e.current=n;if(vo&&(vo=!1,Wt=e,ai=o),i=e.pendingLanes,i===0&&(Kt=null),ap(n.stateNode),We(e,me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(si)throw si=!1,e=Cs,Cs=null,e;return ai&1&&e.tag!==0&&In(),i=e.pendingLanes,i&1?e===_s?Cr++:(Cr=0,_s=e):Cr=0,nn(),null}function In(){if(Wt!==null){var e=ff(ai),t=ot.transition,n=b;try{if(ot.transition=null,b=16>e?16:e,Wt===null)var r=!1;else{if(e=Wt,Wt=null,ai=0,G&6)throw Error(_(331));var o=G;for(G|=4,M=e.current;M!==null;){var i=M,l=i.child;if(M.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(M=c;M!==null;){var h=M;switch(h.tag){case 0:case 11:case 15:kr(8,h,i)}var m=h.child;if(m!==null)m.return=h,M=m;else for(;M!==null;){h=M;var p=h.sibling,x=h.return;if(Ed(h),h===c){M=null;break}if(p!==null){p.return=x,M=p;break}M=x}}}var w=i.alternate;if(w!==null){var g=w.child;if(g!==null){w.child=null;do{var A=g.sibling;g.sibling=null,g=A}while(g!==null)}}M=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,M=l;else e:for(;M!==null;){if(i=M,i.flags&2048)switch(i.tag){case 0:case 11:case 15:kr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,M=f;break e}M=i.return}}var u=e.current;for(M=u;M!==null;){l=M;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,M=d;else e:for(l=u;M!==null;){if(s=M,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ki(9,s)}}catch(N){pe(s,s.return,N)}if(s===l){M=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,M=S;break e}M=s.return}}if(G=o,nn(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(mi,e)}catch{}r=!0}return r}finally{b=n,ot.transition=t}}return!1}function qu(e,t,n){t=Wn(n,t),t=dd(e,t,1),e=Gt(e,t,1),t=De(),e!==null&&(Gr(e,1,t),We(e,t))}function pe(e,t,n){if(e.tag===3)qu(e,e,n);else for(;t!==null;){if(t.tag===3){qu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kt===null||!Kt.has(r))){e=Wn(n,e),e=pd(t,e,1),t=Gt(t,e,1),e=De(),t!==null&&(Gr(t,1,e),We(t,e));break}}t=t.return}}function Dm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=De(),e.pingedLanes|=e.suspendedLanes&n,Se===e&&(_e&n)===n&&(ge===4||ge===3&&(_e&130023424)===_e&&500>me()-Sa?un(e,0):xa|=n),We(e,t)}function $d(e,t){t===0&&(e.mode&1?(t=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):t=1);var n=De();e=Ot(e,t),e!==null&&(Gr(e,t,n),We(e,n))}function Im(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$d(e,n)}function jm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),$d(e,n)}var Ld;Ld=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)Ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ve=!1,Cm(e,t,n);Ve=!!(e.flags&131072)}else Ve=!1,ae&&t.flags&1048576&&jf(t,bo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Lo(e,t),e=t.pendingProps;var o=An(t,Me.current);Dn(t,n),o=ma(null,t,r,e,o,n);var i=ha();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Be(r)?(i=!0,qo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ua(t),o.updater=xi,t.stateNode=o,o._reactInternals=t,ps(t,r,e,n),t=ys(null,t,r,!0,i,n)):(t.tag=0,ae&&i&&na(t),Le(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Lo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Am(r),e=ut(r,e),o){case 0:t=hs(null,t,r,e,n);break e;case 1:t=Uu(null,t,r,e,n);break e;case 11:t=Au(null,t,r,e,n);break e;case 14:t=Vu(null,t,r,ut(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),hs(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),Uu(e,t,r,o,n);case 3:e:{if(vd(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Uf(e,t),ni(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Wn(Error(_(423)),t),t=Bu(e,t,r,n,o);break e}else if(r!==o){o=Wn(Error(_(424)),t),t=Bu(e,t,r,n,o);break e}else for(Qe=Qt(t.stateNode.containerInfo.firstChild),Ke=t,ae=!0,ft=null,n=Hf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vn(),r===o){t=Mt(e,t,n);break e}Le(e,t,r,n)}t=t.child}return t;case 5:return Xf(t),e===null&&cs(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,is(r,o)?l=null:i!==null&&is(r,i)&&(t.flags|=32),yd(e,t),Le(e,t,l,n),t.child;case 6:return e===null&&cs(t),null;case 13:return gd(e,t,n);case 4:return ca(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Un(t,null,r,n):Le(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),Au(e,t,r,o,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,oe(ei,r._currentValue),r._currentValue=l,i!==null)if(mt(i.value,l)){if(i.children===o.children&&!Ue.current){t=Mt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Pt(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),fs(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(_(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),fs(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Le(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Dn(t,n),o=it(o),r=r(o),t.flags|=1,Le(e,t,r,n),t.child;case 14:return r=t.type,o=ut(r,t.pendingProps),o=ut(r.type,o),Vu(e,t,r,o,n);case 15:return md(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),Lo(e,t),t.tag=1,Be(r)?(e=!0,qo(t)):e=!1,Dn(t,n),Wf(t,r,o),ps(t,r,o,n),ys(null,t,r,!0,e,n);case 19:return wd(e,t,n);case 22:return hd(e,t,n)}throw Error(_(156,t.tag))};function Dd(e,t){return sf(e,t)}function Fm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new Fm(e,t,n,r)}function _a(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Am(e){if(typeof e=="function")return _a(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ys)return 11;if(e===Hs)return 14}return 2}function qt(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function jo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")_a(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case xn:return cn(n.children,o,i,t);case Ws:l=8,o|=8;break;case jl:return e=rt(12,n,t,o|2),e.elementType=jl,e.lanes=i,e;case Fl:return e=rt(13,n,t,o),e.elementType=Fl,e.lanes=i,e;case Al:return e=rt(19,n,t,o),e.elementType=Al,e.lanes=i,e;case Wc:return Ci(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Uc:l=10;break e;case Bc:l=9;break e;case Ys:l=11;break e;case Hs:l=14;break e;case jt:l=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=rt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function cn(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function Ci(e,t,n,r){return e=rt(22,e,r,t),e.elementType=Wc,e.lanes=n,e.stateNode={isHidden:!1},e}function El(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function Cl(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ol(0),this.expirationTimes=ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ol(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function za(e,t,n,r,o,i,l,s,a){return e=new Vm(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=rt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ua(i),e}function Um(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Id(e){if(!e)return bt;e=e._reactInternals;e:{if(vn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Be(n))return Df(e,n,t)}return t}function jd(e,t,n,r,o,i,l,s,a){return e=za(n,r,!0,e,o,i,l,s,a),e.context=Id(null),n=e.current,r=De(),o=Zt(n),i=Pt(r,o),i.callback=t??null,Gt(n,i,o),e.current.lanes=o,Gr(e,o,r),We(e,r),e}function _i(e,t,n,r){var o=t.current,i=De(),l=Zt(o);return n=Id(n),t.context===null?t.context=n:t.pendingContext=n,t=Pt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gt(o,t,l),e!==null&&(pt(e,o,l,i),Oo(e,o,l)),l}function ci(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ju(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ta(e,t){Ju(e,t),(e=e.alternate)&&Ju(e,t)}function Bm(){return null}var Fd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pa(e){this._internalRoot=e}zi.prototype.render=Pa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));_i(e,t,null,null)};zi.prototype.unmount=Pa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hn(function(){_i(null,e,null,null)}),t[Rt]=null}};function zi(e){this._internalRoot=e}zi.prototype.unstable_scheduleHydration=function(e){if(e){var t=mf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&t!==0&&t<At[n].priority;n++);At.splice(n,0,e),n===0&&yf(e)}};function Na(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ti(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bu(){}function Wm(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=ci(l);i.call(c)}}var l=jd(t,r,e,0,null,!1,!1,"",bu);return e._reactRootContainer=l,e[Rt]=l.current,Lr(e.nodeType===8?e.parentNode:e),hn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=ci(a);s.call(c)}}var a=za(e,0,!1,null,null,!1,!1,"",bu);return e._reactRootContainer=a,e[Rt]=a.current,Lr(e.nodeType===8?e.parentNode:e),hn(function(){_i(t,a,n,r)}),a}function Pi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=ci(l);s.call(a)}}_i(t,l,e,o)}else l=Wm(n,t,e,o,r);return ci(l)}df=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=mr(t.pendingLanes);n!==0&&(Gs(t,n|1),We(t,me()),!(G&6)&&(Yn=me()+500,nn()))}break;case 13:hn(function(){var r=Ot(e,1);if(r!==null){var o=De();pt(r,e,1,o)}}),Ta(e,1)}};Ks=function(e){if(e.tag===13){var t=Ot(e,134217728);if(t!==null){var n=De();pt(t,e,134217728,n)}Ta(e,134217728)}};pf=function(e){if(e.tag===13){var t=Zt(e),n=Ot(e,t);if(n!==null){var r=De();pt(n,e,t,r)}Ta(e,t)}};mf=function(){return b};hf=function(e,t){var n=b;try{return b=e,t()}finally{b=n}};Kl=function(e,t,n){switch(t){case"input":if(Bl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=gi(r);if(!o)throw Error(_(90));Hc(r),Bl(r,o)}}}break;case"textarea":Qc(e,n);break;case"select":t=n.value,t!=null&&On(e,!!n.multiple,t,!1)}};ef=ka;tf=hn;var Ym={usingClientEntryPoint:!1,Events:[Zr,Cn,gi,Jc,bc,ka]},lr={findFiberByHostInstance:ln,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Hm={bundleType:lr.bundleType,version:lr.version,rendererPackageName:lr.rendererPackageName,rendererConfig:lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=of(e),e===null?null:e.stateNode},findFiberByHostInstance:lr.findFiberByHostInstance||Bm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!go.isDisabled&&go.supportsFiber)try{mi=go.inject(Hm),St=go}catch{}}Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ym;Je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Na(t))throw Error(_(200));return Um(e,t,null,n)};Je.createRoot=function(e,t){if(!Na(e))throw Error(_(299));var n=!1,r="",o=Fd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=za(e,1,!1,null,null,n,!1,r,o),e[Rt]=t.current,Lr(e.nodeType===8?e.parentNode:e),new Pa(t)};Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=of(t),e=e===null?null:e.stateNode,e};Je.flushSync=function(e){return hn(e)};Je.hydrate=function(e,t,n){if(!Ti(t))throw Error(_(200));return Pi(null,e,t,!0,n)};Je.hydrateRoot=function(e,t,n){if(!Na(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Fd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=jd(t,null,e,1,n??null,o,!1,i,l),e[Rt]=t.current,Lr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new zi(t)};Je.render=function(e,t,n){if(!Ti(t))throw Error(_(200));return Pi(null,e,t,!1,n)};Je.unmountComponentAtNode=function(e){if(!Ti(e))throw Error(_(40));return e._reactRootContainer?(hn(function(){Pi(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1};Je.unstable_batchedUpdates=ka;Je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ti(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Pi(e,t,n,!1,r)};Je.version="18.2.0-next-9e3b772b8-20220608";function Ad(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ad)}catch(e){console.error(e)}}Ad(),Ic.exports=Je;var Xm=Ic.exports,ec=Xm;Dl.createRoot=ec.createRoot,Dl.hydrateRoot=ec.hydrateRoot;var Qm={BASE_URL:"/site/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const tc=e=>{let t;const n=new Set,r=(h,m)=>{const p=typeof h=="function"?h(t):h;if(!Object.is(p,t)){const x=t;t=m??(typeof p!="object"||p===null)?p:Object.assign({},t,p),n.forEach(w=>w(t,x))}},o=()=>t,a={setState:r,getState:o,getInitialState:()=>c,subscribe:h=>(n.add(h),()=>n.delete(h)),destroy:()=>{(Qm?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=t=e(r,o,a);return a},Gm=e=>e?tc(e):tc;var Vd={exports:{}},Ud={},Bd={exports:{}},Wd={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hn=U;function Km(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Zm=typeof Object.is=="function"?Object.is:Km,qm=Hn.useState,Jm=Hn.useEffect,bm=Hn.useLayoutEffect,eh=Hn.useDebugValue;function th(e,t){var n=t(),r=qm({inst:{value:n,getSnapshot:t}}),o=r[0].inst,i=r[1];return bm(function(){o.value=n,o.getSnapshot=t,_l(o)&&i({inst:o})},[e,n,t]),Jm(function(){return _l(o)&&i({inst:o}),e(function(){_l(o)&&i({inst:o})})},[e]),eh(n),n}function _l(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Zm(e,n)}catch{return!0}}function nh(e,t){return t()}var rh=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?nh:th;Wd.useSyncExternalStore=Hn.useSyncExternalStore!==void 0?Hn.useSyncExternalStore:rh;Bd.exports=Wd;var oh=Bd.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ni=U,ih=oh;function lh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var sh=typeof Object.is=="function"?Object.is:lh,ah=ih.useSyncExternalStore,uh=Ni.useRef,ch=Ni.useEffect,fh=Ni.useMemo,dh=Ni.useDebugValue;Ud.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var i=uh(null);if(i.current===null){var l={hasValue:!1,value:null};i.current=l}else l=i.current;i=fh(function(){function a(x){if(!c){if(c=!0,h=x,x=r(x),o!==void 0&&l.hasValue){var w=l.value;if(o(w,x))return m=w}return m=x}if(w=m,sh(h,x))return w;var g=r(x);return o!==void 0&&o(w,g)?w:(h=x,m=g)}var c=!1,h,m,p=n===void 0?null:n;return[function(){return a(t())},p===null?void 0:function(){return a(p())}]},[t,n,r,o]);var s=ah(e,i[0],i[1]);return ch(function(){l.hasValue=!0,l.value=s},[s]),dh(s),s};Vd.exports=Ud;var ph=Vd.exports;const mh=Ds(ph);var Ra={BASE_URL:"/site/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{useDebugValue:hh}=Ge,{useSyncExternalStoreWithSelector:yh}=mh;let nc=!1;const vh=e=>e;function gh(e,t=vh,n){(Ra?"production":void 0)!=="production"&&n&&!nc&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),nc=!0);const r=yh(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return hh(r),r}const rc=e=>{(Ra?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?Gm(e):e,n=(r,o)=>gh(t,r,o);return Object.assign(n,t),n},wh=e=>e?rc(e):rc;var xh=e=>((Ra?"production":void 0)!=="production"&&console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),wh(e));const Jr=Ge.createContext(null),Sh=({children:e})=>{const t=window.localStorage.getItem("theme"),[n,r]=Ge.useState(t?t==="true":window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches),o=()=>{window.localStorage.setItem("theme",`${!n}`),r(!n)};return W.jsx(Jr.Provider,{value:{toggle:n,toggleTheme:o},children:e})},Ut=e=>{const{toggle:t}=Ge.useContext(Jr),{fontSize:n,stroke:r,color:o,uppercase:i,className:l,children:s}=e;return W.jsx("p",{className:`${n??"text-9xl"} bg-transparent inline-block word-spacing ${r?t?"text-stroke":"text-stroke-light":o??(t?"text-white":"text-gray-800")} ${l??""}`,children:i?s==null?void 0:s.toString().toUpperCase():s})},zl=e=>W.jsx("button",{className:`pr-2 pl-2 ${e.fontSize??""} focus:outline-none ${e.className??""}`,onClick:e.onClick,children:e.children}),Ps=e=>W.jsx("div",{className:`flex flex-col content-center justify-center text-center h-screen bg-transparent ${Ge.useContext(Jr).toggle?"text-white":"text-gray-800"} ${e.className??""}`,children:e.children});var Yd={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(typeof self<"u"?self:S0,()=>(()=>{var n={d:(E,y)=>{for(var v in y)n.o(y,v)&&!n.o(E,v)&&Object.defineProperty(E,v,{enumerable:!0,get:y[v]})},o:(E,y)=>Object.prototype.hasOwnProperty.call(E,y),r:E=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(E,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(E,"__esModule",{value:!0})}},r={};function o(){return typeof navigator<"u"?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600:null}n.r(r),n.d(r,{default:()=>Lt}),Number.prototype.clamp=function(E,y){return Math.min(Math.max(this,E),y)};function i(E){for(;E.children&&E.children.length>0;)i(E.children[0]),E.remove(E.children[0]);E.geometry&&E.geometry.dispose(),E.material&&(Object.keys(E.material).forEach(y=>{E.material[y]&&E.material[y]!==null&&typeof E.material[y].dispose=="function"&&E.material[y].dispose()}),E.material.dispose())}const l=typeof window=="object";let s=l&&window.THREE||{};l&&!window.VANTA&&(window.VANTA={});const a=l&&window.VANTA||{};a.register=(E,y)=>a[E]=v=>new y(v),a.version="0.5.24";const c=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};a.VantaBase=class{constructor(E={}){if(!l)return!1;a.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.windowGyroWrapper=this.windowGyroWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this);const y=typeof this.getDefaultOptions=="function"?this.getDefaultOptions():this.defaultOptions;if(this.options=Object.assign({mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1},y),(E instanceof HTMLElement||typeof E=="string")&&(E={el:E}),Object.assign(this.options,E),this.options.THREE&&(s=this.options.THREE),this.el=this.options.el,this.el==null)c('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){const R=this.el;if(this.el=(v=R,document.querySelector(v)),!this.el)return void c("Cannot find element",R)}var v,k;this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(R){return c("Init error",R),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),void(this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=(k=this.options.backgroundColor,typeof k=="number"?"#"+("00000"+k.toString(16)).slice(-6):k)))}this.initMouse(),this.resize(),this.animationLoop();const z=window.addEventListener;z("resize",this.resize),window.requestAnimationFrame(this.resize),this.options.mouseControls&&(z("scroll",this.windowMouseMoveWrapper),z("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(z("touchstart",this.windowTouchWrapper),z("touchmove",this.windowTouchWrapper)),this.options.gyroControls&&z("deviceorientation",this.windowGyroWrapper)}setOptions(E={}){Object.assign(this.options,E),this.triggerMouseMove()}prepareEl(){let E,y;if(typeof Node<"u"&&Node.TEXT_NODE)for(E=0;E<this.el.childNodes.length;E++){const v=this.el.childNodes[E];if(v.nodeType===Node.TEXT_NODE){const k=document.createElement("span");k.textContent=v.textContent,v.parentElement.insertBefore(k,v),v.remove()}}for(E=0;E<this.el.children.length;E++)y=this.el.children[E],getComputedStyle(y).position==="static"&&(y.style.position="relative"),getComputedStyle(y).zIndex==="auto"&&(y.style.zIndex=1);getComputedStyle(this.el).position==="static"&&(this.el.style.position="relative")}applyCanvasStyles(E,y={}){Object.assign(E.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object.assign(E.style,y),E.classList.add("vanta-canvas")}initThree(){s.WebGLRenderer?(this.renderer=new s.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new s.Scene):console.warn("[VANTA] No THREE defined on window")}getCanvasElement(){return this.renderer?this.renderer.domElement:this.p5renderer?this.p5renderer.canvas:void 0}getCanvasRect(){const E=this.getCanvasElement();return!!E&&E.getBoundingClientRect()}windowMouseMoveWrapper(E){const y=this.getCanvasRect();if(!y)return!1;const v=E.clientX-y.left,k=E.clientY-y.top;v>=0&&k>=0&&v<=y.width&&k<=y.height&&(this.mouseX=v,this.mouseY=k,this.options.mouseEase||this.triggerMouseMove(v,k))}windowTouchWrapper(E){const y=this.getCanvasRect();if(!y)return!1;if(E.touches.length===1){const v=E.touches[0].clientX-y.left,k=E.touches[0].clientY-y.top;v>=0&&k>=0&&v<=y.width&&k<=y.height&&(this.mouseX=v,this.mouseY=k,this.options.mouseEase||this.triggerMouseMove(v,k))}}windowGyroWrapper(E){const y=this.getCanvasRect();if(!y)return!1;const v=Math.round(2*E.alpha)-y.left,k=Math.round(2*E.beta)-y.top;v>=0&&k>=0&&v<=y.width&&k<=y.height&&(this.mouseX=v,this.mouseY=k,this.options.mouseEase||this.triggerMouseMove(v,k))}triggerMouseMove(E,y){E===void 0&&y===void 0&&(this.options.mouseEase?(E=this.mouseEaseX,y=this.mouseEaseY):(E=this.mouseX,y=this.mouseY)),this.uniforms&&(this.uniforms.iMouse.value.x=E/this.scale,this.uniforms.iMouse.value.y=y/this.scale);const v=E/this.width,k=y/this.height;typeof this.onMouseMove=="function"&&this.onMouseMove(v,k)}setSize(){this.scale||(this.scale=1),o()&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}initMouse(){(!this.mouseX&&!this.mouseY||this.mouseX===this.options.minWidth/2&&this.mouseY===this.options.minHeight/2)&&(this.mouseX=this.width/2,this.mouseY=this.height/2,this.triggerMouseMove(this.mouseX,this.mouseY))}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,typeof this.camera.updateProjectionMatrix=="function"&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),typeof this.onResize=="function"&&this.onResize()}isOnScreen(){const E=this.el.offsetHeight,y=this.el.getBoundingClientRect(),v=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,k=y.top+v;return k-window.innerHeight<=v&&v<=k+E}animationLoop(){this.t||(this.t=0),this.t2||(this.t2=0);const E=performance.now();if(this.prevNow){let y=(E-this.prevNow)/16.666666666666668;y=Math.max(.2,Math.min(y,5)),this.t+=y,this.t2+=(this.options.speed||1)*y,this.uniforms&&(this.uniforms.iTime.value=.016667*this.t2)}return this.prevNow=E,this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX+=.05*(this.mouseX-this.mouseEaseX),this.mouseEaseY+=.05*(this.mouseY-this.mouseEaseY),this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&(typeof this.onUpdate=="function"&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update(),typeof this.afterRender=="function"&&this.afterRender()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);typeof this.onRestart=="function"&&this.onRestart(),this.init()}init(){typeof this.onInit=="function"&&this.onInit()}destroy(){typeof this.onDestroy=="function"&&this.onDestroy();const E=window.removeEventListener;E("touchstart",this.windowTouchWrapper),E("touchmove",this.windowTouchWrapper),E("scroll",this.windowMouseMoveWrapper),E("mousemove",this.windowMouseMoveWrapper),E("deviceorientation",this.windowGyroWrapper),E("resize",this.resize),window.cancelAnimationFrame(this.req);const y=this.scene;y&&y.children&&i(y),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null),a.current===this&&(a.current=null)}};const h=a.VantaBase;let m=typeof window=="object"&&window.THREE,{Camera:p,ClampToEdgeWrapping:x,DataTexture:w,FloatType:g,Mesh:A,NearestFilter:f,PlaneBufferGeometry:u,RGBAFormat:d,Scene:S,ShaderMaterial:N,WebGLRenderTarget:O}=m||{};const T=function(E,y,v,k){k&&({Camera:p,ClampToEdgeWrapping:x,DataTexture:w,FloatType:g,Mesh:A,NearestFilter:f,PlaneBufferGeometry:u,RGBAFormat:d,Scene:S,ShaderMaterial:N,WebGLRenderTarget:O}=k),this.variables=[],this.currentTextureIndex=0;var z=g,R=new S,j=new p;j.position.z=1;var D={passThruTexture:{value:null}},X=Y(`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`,D),Q=new A(new u(2,2),X);function V(L){L.defines.resolution="vec2( "+E.toFixed(1)+", "+y.toFixed(1)+" )"}function Y(L,I){var B=new N({uniforms:I=I||{},vertexShader:`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`,fragmentShader:L});return V(B),B}R.add(Q),this.setDataType=function(L){return z=L,this},this.addVariable=function(L,I,B){var K={name:L,initialValueTexture:B,material:this.createShaderMaterial(I),dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:f,magFilter:f};return this.variables.push(K),K},this.setVariableDependencies=function(L,I){L.dependencies=I},this.init=function(){if(!v.capabilities.isWebGL2&&!v.extensions.get("OES_texture_float"))return"No OES_texture_float support for float textures.";if(v.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(var L=0;L<this.variables.length;L++){var I=this.variables[L];I.renderTargets[0]=this.createRenderTarget(E,y,I.wrapS,I.wrapT,I.minFilter,I.magFilter),I.renderTargets[1]=this.createRenderTarget(E,y,I.wrapS,I.wrapT,I.minFilter,I.magFilter),this.renderTexture(I.initialValueTexture,I.renderTargets[0]),this.renderTexture(I.initialValueTexture,I.renderTargets[1]);var B=I.material,K=B.uniforms;if(I.dependencies!==null)for(var ne=0;ne<I.dependencies.length;ne++){var re=I.dependencies[ne];if(re.name!==I.name){for(var He=!1,ht=0;ht<this.variables.length;ht++)if(re.name===this.variables[ht].name){He=!0;break}if(!He)return"Variable dependency not found. Variable="+I.name+", dependency="+re.name}K[re.name]={value:null},B.fragmentShader=`
uniform sampler2D `+re.name+`;
`+B.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){for(var L=this.currentTextureIndex,I=this.currentTextureIndex===0?1:0,B=0,K=this.variables.length;B<K;B++){var ne=this.variables[B];if(ne.dependencies!==null)for(var re=ne.material.uniforms,He=0,ht=ne.dependencies.length;He<ht;He++){var qn=ne.dependencies[He];re[qn.name].value=qn.renderTargets[L].texture}this.doRenderTarget(ne.material,ne.renderTargets[I])}this.currentTextureIndex=I},this.getCurrentRenderTarget=function(L){return L.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(L){return L.renderTargets[this.currentTextureIndex===0?1:0]},this.addResolutionDefine=V,this.createShaderMaterial=Y,this.createRenderTarget=function(L,I,B,K,ne,re){return new O(L=L||E,I=I||y,{wrapS:B=B||x,wrapT:K=K||x,minFilter:ne=ne||f,magFilter:re=re||f,format:d,type:z,stencilBuffer:!1,depthBuffer:!1})},this.createTexture=function(){var L=new Float32Array(E*y*4);return new w(L,E,y,d,g)},this.renderTexture=function(L,I){D.passThruTexture.value=L,this.doRenderTarget(X,I),D.passThruTexture.value=null},this.doRenderTarget=function(L,I){var B=v.getRenderTarget();Q.material=L,v.setRenderTarget(I),v.render(R,j),Q.material=X,v.setRenderTarget(B)}};let C=typeof window=="object"&&window.THREE;const Z=!o();let F=32,se=F*F;const ue=800,Te=(E={})=>{const y=new C.BufferGeometry,v=[];function k(R,j,D){const X=1.5*(E.birdSize||1);v.push(new C.Vector3(R*X,j*X,D*X))}k(5,0,0),k(-5,-1,1),k(-5,0,0),k(-5,-2,-1),k(0,2,-6),k(0,2,6),k(2,0,0),k(-3,0,0),y.setFromPoints(v);const z=[];return z.push(0,2,1),z.push(4,7,6),z.push(5,6,7),y.setIndex(z),y};class Fe{constructor(y){var v,k,z=new C.Vector3,R=500,j=500,D=200,X=.1,Q=y;this.position=new C.Vector3,this.velocity=new C.Vector3,v=new C.Vector3,this.setGoal=function(V){k=V},this.setWorldSize=function(V,Y,L){R=V,j=Y,D=L},this.run=function(V){z.set(-R,this.position.y,this.position.z),(z=this.avoid(z)).multiplyScalar(5),v.add(z),z.set(R,this.position.y,this.position.z),(z=this.avoid(z)).multiplyScalar(5),v.add(z),z.set(this.position.x,-j,this.position.z),(z=this.avoid(z)).multiplyScalar(5),v.add(z),z.set(this.position.x,j,this.position.z),(z=this.avoid(z)).multiplyScalar(5),v.add(z),z.set(this.position.x,this.position.y,-D),(z=this.avoid(z)).multiplyScalar(5),v.add(z),z.set(this.position.x,this.position.y,D),(z=this.avoid(z)).multiplyScalar(5),v.add(z),Math.random()>.5&&this.flock(V),this.move()},this.flock=function(V){k&&v.add(this.reach(k,.005)),v.add(this.alignment(V)),v.add(this.cohesion(V)),v.add(this.separation(V))},this.move=function(){this.velocity.add(v);var V=this.velocity.length();V>2.5&&this.velocity.divideScalar(V/2.5),this.position.add(this.velocity),v.set(0,0,0)},this.checkBounds=function(){this.position.x>R&&(this.position.x=-R),this.position.x<-R&&(this.position.x=R),this.position.y>j&&(this.position.y=-j),this.position.y<-j&&(this.position.y=j),this.position.z>D&&(this.position.z=-D),this.position.z<-D&&(this.position.z=D)},this.avoid=function(V){var Y=new C.Vector3;return Y.copy(this.position),Y.sub(V),Y.multiplyScalar(1/this.position.distanceToSquared(V)),Y},this.repulse=function(V){var Y=this.position.distanceTo(V);if(Y<150){var L=new C.Vector3;L.subVectors(this.position,V),L.multiplyScalar(.5/Y),v.add(L)}},this.reach=function(V,Y){var L=new C.Vector3;return L.subVectors(V,this.position),L.multiplyScalar(Y),L},this.alignment=function(V){var Y,L,I=new C.Vector3,B=0;const K=100*Q.alignment/20;for(var ne=0,re=V.length;ne<re;ne++)Math.random()>.6||(L=(Y=V[ne]).position.distanceTo(this.position))>0&&L<=K&&(I.add(Y.velocity),B++);if(B>0){I.divideScalar(B);var He=I.length();He>X&&I.divideScalar(He/X)}return I},this.cohesion=function(V){var Y,L,I=new C.Vector3,B=new C.Vector3,K=0;const ne=100*Q.cohesion/20;for(var re=0,He=V.length;re<He;re++)Math.random()>.6||(L=(Y=V[re]).position.distanceTo(this.position))>0&&L<=ne&&(I.add(Y.position),K++);K>0&&I.divideScalar(K),B.subVectors(I,this.position);var ht=B.length();return ht>X&&B.divideScalar(ht/X),B},this.separation=function(V){var Y,L,I=new C.Vector3,B=new C.Vector3;const K=100*Q.separation/20;for(var ne=0,re=V.length;ne<re;ne++)Math.random()>.6||(L=(Y=V[ne]).position.distanceTo(this.position))>0&&L<=K&&(B.subVectors(this.position,Y.position),B.normalize(),B.divideScalar(L),I.add(B));return I}}}class $e extends h{static initClass(){this.prototype.defaultOptions={backgroundColor:465199,color1:16711680,color2:53759,colorMode:"varianceGradient",birdSize:1,wingSpan:30,speedLimit:5,separation:20,alignment:20,cohesion:20,quantity:5}}constructor(y){C=y.THREE||C,super(y)}initComputeRenderer(){this.gpuCompute=new T(F,F,this.renderer,C);const y=this.gpuCompute.createTexture(),v=this.gpuCompute.createTexture();(function(z){const R=z.image.data;let j=0;const D=R.length;(()=>{const X=[];for(;j<D;){const Q=Math.random()*ue-400,V=Math.random()*ue-400,Y=Math.random()*ue-400;R[j+0]=Q,R[j+1]=V,R[j+2]=Y,R[j+3]=1,X.push(j+=4)}})()})(y),function(z){const R=z.image.data;let j=0;const D=R.length;(()=>{const X=[];for(;j<D;){const Q=Math.random()-.5,V=Math.random()-.5,Y=Math.random()-.5;R[j+0]=10*Q,R[j+1]=10*V,R[j+2]=10*Y,R[j+3]=1,X.push(j+=4)}})()}(v),this.velocityVariable=this.gpuCompute.addVariable("textureVelocity",`uniform float time;
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

}`,y),this.gpuCompute.setVariableDependencies(this.velocityVariable,[this.positionVariable,this.velocityVariable]),this.gpuCompute.setVariableDependencies(this.positionVariable,[this.positionVariable,this.velocityVariable]),this.positionUniforms=this.positionVariable.material.uniforms,this.velocityUniforms=this.velocityVariable.material.uniforms,this.positionUniforms.time={value:0},this.positionUniforms.delta={value:0},this.velocityUniforms.time={value:1},this.velocityUniforms.delta={value:0},this.velocityUniforms.testing={value:1},this.velocityUniforms.separationDistance={value:1},this.velocityUniforms.alignmentDistance={value:1},this.velocityUniforms.cohesionDistance={value:1},this.velocityUniforms.speedLimit={value:1},this.velocityUniforms.freedomFactor={value:1},this.velocityUniforms.predator={value:new C.Vector3},this.velocityVariable.material.defines.BOUNDS=ue.toFixed(2),this.velocityVariable.wrapS=C.RepeatWrapping,this.velocityVariable.wrapT=C.RepeatWrapping,this.positionVariable.wrapS=C.RepeatWrapping,this.positionVariable.wrapT=C.RepeatWrapping;const k=this.gpuCompute.init();k!==null&&console.error(k)}initGpgpuBirds(){const y=(z=>{const R=new C.BufferGeometry;z.quantity&&(F=Math.pow(2,z.quantity),se=F*F);const j=3*se,D=3*j,X=new C.BufferAttribute(new Float32Array(3*D),3),Q=new C.BufferAttribute(new Float32Array(3*D),3),V=new C.BufferAttribute(new Float32Array(2*D),2),Y=new C.BufferAttribute(new Float32Array(D),1);R.setAttribute||(R.setAttribute=R.addAttribute),R.setAttribute("position",X),R.setAttribute("birdColor",Q),R.setAttribute("reference",V),R.setAttribute("birdVertex",Y);let L=0;const I=function(){for(let re=0;re<arguments.length;re++)X.array[L++]=arguments[re]},B=z.wingSpan||20,K=z.birdSize||1;for(let re=0;re<se;re++)I(0,-0,-20*K,0,4*K,-20*K,0,0,30*K),I(0,0,-15*K,-B*K,0,0,0,0,15*K),I(0,0,15*K,B*K,0,0,0,0,-15*K);const ne={};for(L=0;L<3*j;L++){const re=~~(L/3),He=re%F/F,ht=~~(re/F)/F,qn=~~(L/9)/se,eo=qn.toString(),Ya=z.colorMode.indexOf("Gradient")!=-1;let Jn;Jn=!Ya&&ne[eo]?ne[eo]:z.effect.getNewCol(qn),Ya||ne[eo]||(ne[eo]=Jn),Q.array[3*L+0]=Jn.r,Q.array[3*L+1]=Jn.g,Q.array[3*L+2]=Jn.b,V.array[2*L]=He,V.array[2*L+1]=ht,Y.array[L]=L%9}return R.scale(.2,.2,.2)})(Object.assign({},this.options,{effect:this}));this.birdUniforms={color:{value:new C.Color(16720384)},texturePosition:{value:null},textureVelocity:{value:null},time:{value:1},delta:{value:0},birdSize:{value:this.options.birdSize}};const v=new C.ShaderMaterial({uniforms:this.birdUniforms,vertexShader:`attribute vec2 reference;
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
}`,side:C.DoubleSide}),k=new C.Mesh(y,v);return k.rotation.y=Math.PI/2,k.matrixAutoUpdate=!1,k.updateMatrix(),this.scene.add(k)}getNewCol(y){const v=this.options,k=v.color1!=null?v.color1:4456448,z=v.color2!=null?v.color2:6684672,R=new C.Color(k),j=new C.Color(z);let D,X;if(X=v.colorMode.indexOf("Gradient")!=-1?Math.random():y,v.colorMode.indexOf("variance")==0){const Q=(R.r+Math.random()*j.r).clamp(0,1),V=(R.g+Math.random()*j.g).clamp(0,1),Y=(R.b+Math.random()*j.b).clamp(0,1);D=new C.Color(Q,V,Y)}else D=v.colorMode.indexOf("mix")==0?new C.Color(k+X*z):R.lerp(j,X);return D}onInit(){this.camera=new C.PerspectiveCamera(75,this.width/this.height,1,3e3),this.camera.position.z=350,this.fog=new C.Fog(16777215,100,1e3),this.mouseX=this.mouseY=0;const y=this.birds=[],v=this.boids=[],k=this.options;let z,R;if(Z)try{this.initComputeRenderer(),this.valuesChanger=this.valuesChanger.bind(this),this.valuesChanger(),this.initGpgpuBirds()}catch(Q){console.error("[vanta.js] birds init error: ",Q)}else{const Q=6*Math.pow(2,k.quantity);for(var j=0;j<Q;j++){z=v[j]=new Fe(k),z.position.x=400*Math.random()-200,z.position.y=400*Math.random()-200,z.position.z=400*Math.random()-200,z.velocity.x=2*Math.random()-1,z.velocity.y=2*Math.random()-1,z.velocity.z=2*Math.random()-1,z.setWorldSize(500,500,300);const V=k.colorMode.indexOf("Gradient")!=-1,Y=Te(k),L=Y.attributes.position.length,I=new C.BufferAttribute(new Float32Array(L),3);if(V)for(var D=0;D<Y.index.array.length;D+=3)for(var X=0;X<=2;X++){const B=Y.index.array[D+X],K=this.getNewCol();I.array[3*B]=K.r,I.array[3*B+1]=K.g,I.array[3*B+2]=K.b}else{const B=this.getNewCol(j/Q);for(D=0;D<I.array.length;D+=3)I.array[D]=B.r,I.array[D+1]=B.g,I.array[D+2]=B.b}Y.setAttribute("color",I),R=y[j]=new C.Mesh(Y,new C.MeshBasicMaterial({color:16777215,side:C.DoubleSide,vertexColors:C.VertexColors})),R.phase=Math.floor(62.83*Math.random()),R.position.x=v[j].position.x,R.position.y=v[j].position.y,R.position.z=v[j].position.z,this.scene.add(R)}}}valuesChanger(){this.velocityUniforms&&(this.velocityUniforms.separationDistance.value=this.options.separation,this.velocityUniforms.alignmentDistance.value=this.options.alignment,this.velocityUniforms.speedLimit.value=this.options.speedLimit,this.velocityUniforms.cohesionDistance.value=this.options.cohesion)}onUpdate(){this.now=performance.now(),this.last||(this.last=this.now);let y=(this.now-this.last)/1e3;if(y>1&&(y=1),this.last=this.now,Z)this.positionUniforms.time.value=this.now,this.positionUniforms.delta.value=y,this.velocityUniforms.time.value=this.now,this.velocityUniforms.delta.value=y,this.birdUniforms.time.value=this.now,this.birdUniforms.delta.value=y,this.velocityUniforms.predator.value.set(this.mouseX,-this.mouseY,0),this.mouseX=1e4,this.mouseY=1e4,this.gpuCompute.compute(),this.birdUniforms.texturePosition.value=this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture,this.birdUniforms.textureVelocity.value=this.gpuCompute.getCurrentRenderTarget(this.velocityVariable).texture;else{const z=this.birds,R=this.boids;let j,D;for(var v=0,k=z.length;v<k;v++){j=R[v],j.run(R),D=z[v],D.rotation.y=Math.atan2(-j.velocity.z,j.velocity.x),D.rotation.z=Math.asin(j.velocity.y/j.velocity.length()),D.phase=(D.phase+(Math.max(0,D.rotation.z)+.1))%62.83;const X=16,Q=13;D.geometry.attributes.position.array[X]=D.geometry.attributes.position.array[Q]=5*Math.sin(D.phase)*this.options.birdSize,D.geometry.attributes.position.needsUpdate=!0,D.geometry.computeVertexNormals(),D.position.x=R[v].position.x,D.position.y=R[v].position.y,D.position.z=R[v].position.z}}}onMouseMove(y,v){if(this.mouseX=y-.5,this.mouseY=v-.5,!Z){const j=this.boids;let D;for(var k=new C.Vector3(this.mouseX*this.width,-this.mouseY*this.height,0),z=0,R=j.length;z<R;z++)D=j[z],k.z=D.position.z,D.repulse(k)}}onDestroy(){}onResize(){}}$e.initClass();const Lt=a.register("BIRDS",$e);return r})())})(Yd);var kh=Yd.exports;const Eh=Ds(kh),Ch=e=>e.current&&Eh({el:e.current,backgroundAlpha:0,quantity:3,speedLimit:3,alignment:1e4,cohesion:0}),_h=()=>{const{toggle:e}=Ge.useContext(Jr),t=Ge.useRef(null);return Ge.useEffect(()=>void Ch(t),[]),W.jsx("div",{className:`fixed w-[100vw] h-[100vh] ${e?"bg-background":"bg-background-light"}`,ref:t})};function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$.apply(this,arguments)}var Tl=function(e){var t=U.useRef(e);return t.current=e,t},zh="💡 use-web-animations: please install polyfill to use this hook. See https://github.com/wellyshen/use-web-animations##use-polyfill",Th=`💡 use-web-animations: the browser doesn't support "onReady" event, please use "onUpdate" to monitor the animation's state instead. See https://github.com/wellyshen/use-web-animations#basic-usage`,oc=function(t){var n=t===void 0?{}:t,r=n.ref,o=n.id,i=n.playbackRate,l=n.autoPlay,s=n.keyframes,a=n.animationOptions,c=n.onReady,h=n.onUpdate,m=n.onFinish,p=U.useState(),x=p[0],w=p[1],g=U.useRef(!1),A=U.useRef(),f=U.useRef(),u=U.useRef(),d=U.useRef(s),S=U.useRef(a),N=Tl(c),O=Tl(h),T=Tl(m),C=U.useRef(null),Z=r||C,F=U.useCallback(function(){return A.current},[]),se=U.useCallback(function(ue){if(!(!Z.current||!ue.keyframes)){if(!Z.current.animate){console.error(zh);return}A.current=Z.current.animate(ue.keyframes,ue.animationOptions);var Te=A.current;ue.autoPlay===!1&&Te.pause(),ue.id&&(Te.id=ue.id),ue.playbackRate&&(Te.playbackRate=ue.playbackRate),N.current&&(Te.ready?Te.ready.then(function(Fe){N.current({playState:Fe.playState,animate:se,animation:Fe})}):console.error(Th)),T.current&&(Te.onfinish=function(Fe){var $e=Fe.target;g.current||T.current({playState:$e.playState,animate:se,animation:$e})}),u.current=void 0}},[T,N,Z]);return U.useEffect(function(){d.current&&se({id:o,playbackRate:i,autoPlay:l,keyframes:d.current,animationOptions:S.current})},[se,l,o,i]),U.useEffect(function(){var ue,Te=function Fe(){var $e=F();if($e){var Lt=$e.pending,E=$e.playState;u.current!==E&&w(E),O.current&&(f.current!==Lt||u.current!==E||E==="running")&&O.current({playState:E,animate:se,animation:$e}),f.current=Lt,u.current=E}ue=requestAnimationFrame(Fe)};return ue=requestAnimationFrame(Te),function(){var Fe,$e;cancelAnimationFrame(ue),g.current=!0,(Fe=F())==null||Fe.finish(),($e=F())==null||$e.cancel()}},[se,F,O]),{ref:Z,playState:x,getAnimation:F,animate:se}},Hd="cubic-bezier(0.215, 0.61, 0.355, 1)",Xd="cubic-bezier(0.755, 0.05, 0.855, 0.06)",_r="center bottom",wo={transform:"translate3d(0, 0, 0)",easing:Hd,transformOrigin:_r},ic={transform:"translate3d(0, -30px, 0) scaleY(1.1)",easing:Xd,transformOrigin:_r};$({},wo,{offset:0}),$({},wo,{offset:.2}),$({},ic,{offset:.4}),$({},ic,{offset:.43}),$({},wo,{offset:.53}),$({},wo,{offset:1});var Pl={opacity:1},lc={opacity:0};$({},Pl,{offset:0}),$({},lc,{offset:.25}),$({},Pl,{offset:.5}),$({},lc,{offset:.75}),$({},Pl,{offset:1});var sc={transform:"translate3d(0, 0, 0)"},sr={transform:"translate3d(-10px, 0, 0)"},xo={transform:"translate3d(10px, 0, 0)"};$({},sc,{offset:0}),$({},sr,{offset:.1}),$({},xo,{offset:.2}),$({},sr,{offset:.3}),$({},xo,{offset:.4}),$({},sr,{offset:.5}),$({},xo,{offset:.6}),$({},sr,{offset:.7}),$({},xo,{offset:.8}),$({},sr,{offset:.9}),$({},sc,{offset:1});var ac={transform:"translate3d(0, 0, 0)"},ar={transform:"translate3d(0, -10px, 0)"},So={transform:"translate3d(0, 10px, 0)"};$({},ac,{offset:0}),$({},ar,{offset:.1}),$({},So,{offset:.2}),$({},ar,{offset:.3}),$({},So,{offset:.4}),$({},ar,{offset:.5}),$({},So,{offset:.6}),$({},ar,{offset:.7}),$({},So,{offset:.8}),$({},ar,{offset:.9}),$({},ac,{offset:1});var Ph={keyframes:[{transform:"translateX(0)",offset:0},{transform:"translateX(-6px) rotateY(-9deg)",offset:.065},{transform:"translateX(5px) rotateY(7deg)",offset:.185},{transform:"translateX(-3px) rotateY(-5deg)",offset:.315},{transform:"translateX(2px) rotateY(3deg)",offset:.435},{transform:"translateX(0)",offset:.5},{transform:"none",offset:1}],animationOptions:{duration:1e3,fill:"both",easing:"ease-in-out"}},uc={transform:"scale3d(1, 1, 1)"},cc={transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},ko={transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},Nl={transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"};$({},uc,{offset:0}),$({},cc,{offset:.1}),$({},cc,{offset:.2}),$({},ko,{offset:.3}),$({},Nl,{offset:.4}),$({},ko,{offset:.5}),$({},Nl,{offset:.6}),$({},ko,{offset:.7}),$({},Nl,{offset:.8}),$({},ko,{offset:.9}),$({},uc,{offset:1});var It="center",Rl={transform:"translate3d(0, 0, 0)",transformOrigin:It};$({},Rl,{offset:0}),$({},Rl,{offset:.111}),$({},Rl,{offset:1});var Ol={transform:"scale(1)"},fc={transform:"scale(1.3)"};$({},Ol,{offset:0}),$({},fc,{offset:.14}),$({},Ol,{offset:.28}),$({},fc,{offset:.42}),$({},Ol,{offset:.7});var ur="cubic-bezier(0.215, 0.61, 0.355, 1)",Nh={keyframes:[{transform:"translate3d(-3000px, 0, 0) scaleX(3)",opacity:0,easing:ur,offset:0},{transform:"translate3d(25px, 0, 0) scaleX(1)",opacity:1,easing:ur,offset:.6},{transform:"translate3d(-10px, 0, 0) scaleX(0.98)",easing:ur,offset:.75},{transform:"translate3d(5px, 0, 0) scaleX(0.995)",easing:ur,offset:.9},{transform:"translate3d(0, 0, 0)",opacity:1,easing:ur,offset:1}],animationOptions:{duration:1e3,fill:"both"}},cr="cubic-bezier(0.215, 0.61, 0.355, 1)",Rh={keyframes:[{transform:"translate3d(3000px, 0, 0) scaleX(3)",opacity:0,easing:cr,offset:0},{transform:"translate3d(-25px, 0, 0) scaleX(1)",opacity:1,easing:cr,offset:.6},{transform:"translate3d(10px, 0, 0) scaleX(0.98)",easing:cr,offset:.75},{transform:"translate3d(-5px, 0, 0) scaleX(0.995)",easing:cr,offset:.9},{transform:"translate3d(0, 0, 0)",opacity:1,easing:cr,offset:1}],animationOptions:{duration:1e3,fill:"both"}},dc={transform:"scale3d(1.1, 1.1, 1.1)",opacity:1};$({},dc,{offset:.5}),$({},dc,{offset:.55});var pc={transform:"translate3d(0, -20px, 0) scaleY(0.9)",opacity:1};$({},pc,{offset:.4}),$({},pc,{offset:.45});var mc={transform:"translate3d(0, 20px, 0) scaleY(0.9)",opacity:1};$({},mc,{offset:.4}),$({},mc,{offset:.45});var Oa="ease-in-out",fi="top left",hc={transform:"rotate3d(0, 0, 1, 80deg)",easing:Oa,transformOrigin:fi},yc={transform:"rotate3d(0, 0, 1, 60deg)",opacity:1,easing:Oa,transformOrigin:fi};$({},hc,{offset:.2}),$({},yc,{offset:.4}),$({},hc,{offset:.6}),$({},yc,{offset:.8});var vc={transform:"none",opacity:1};$({},vc,{offset:.5}),$({},vc,{offset:1});const Oh=()=>{const{ref:e,animate:t}=oc(Nh),{ref:n}=oc(Rh),r=W.jsx("div",{ref:e,onClick:()=>t(Ph),children:W.jsx(Ut,{className:"text-4xl sm:text-6xl",uppercase:!0,children:"ky0422"})}),[o,i]=["text-xl sm:text-2xl","pr-1.5"],l=W.jsxs("div",{className:"pt-3",ref:n,children:[W.jsx(Ut,{className:`${o} ${i}`,color:"text-blue-500",children:"다람쥐"}),W.jsx(Ut,{className:`${o} ${i}`,children:"헌"}),W.jsx(Ut,{className:o,color:"text-red-500",children:"쳇바퀴"}),W.jsx(Ut,{className:`${o} ${i}`,children:"에 타고파"})]});return W.jsxs("div",{className:"inline-block",children:[r,l]})};function Mh(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function $h(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Lh=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag($h(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Mh(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Re="-ms-",di="-moz-",q="-webkit-",Qd="comm",Ma="rule",$a="decl",Dh="@import",Gd="@keyframes",Ih="@layer",jh=Math.abs,Ri=String.fromCharCode,Fh=Object.assign;function Ah(e,t){return Ce(e,0)^45?(((t<<2^Ce(e,0))<<2^Ce(e,1))<<2^Ce(e,2))<<2^Ce(e,3):0}function Kd(e){return e.trim()}function Vh(e,t){return(e=t.exec(e))?e[0]:e}function J(e,t,n){return e.replace(t,n)}function Ns(e,t){return e.indexOf(t)}function Ce(e,t){return e.charCodeAt(t)|0}function Wr(e,t,n){return e.slice(t,n)}function gt(e){return e.length}function La(e){return e.length}function Eo(e,t){return t.push(e),e}function Uh(e,t){return e.map(t).join("")}var Oi=1,Xn=1,Zd=0,Ye=0,he=0,Zn="";function Mi(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Oi,column:Xn,length:l,return:""}}function fr(e,t){return Fh(Mi("",null,null,"",null,null,0),e,{length:-e.length},t)}function Bh(){return he}function Wh(){return he=Ye>0?Ce(Zn,--Ye):0,Xn--,he===10&&(Xn=1,Oi--),he}function Ze(){return he=Ye<Zd?Ce(Zn,Ye++):0,Xn++,he===10&&(Xn=1,Oi++),he}function Et(){return Ce(Zn,Ye)}function Fo(){return Ye}function br(e,t){return Wr(Zn,e,t)}function Yr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qd(e){return Oi=Xn=1,Zd=gt(Zn=e),Ye=0,[]}function Jd(e){return Zn="",e}function Ao(e){return Kd(br(Ye-1,Rs(e===91?e+2:e===40?e+1:e)))}function Yh(e){for(;(he=Et())&&he<33;)Ze();return Yr(e)>2||Yr(he)>3?"":" "}function Hh(e,t){for(;--t&&Ze()&&!(he<48||he>102||he>57&&he<65||he>70&&he<97););return br(e,Fo()+(t<6&&Et()==32&&Ze()==32))}function Rs(e){for(;Ze();)switch(he){case e:return Ye;case 34:case 39:e!==34&&e!==39&&Rs(he);break;case 40:e===41&&Rs(e);break;case 92:Ze();break}return Ye}function Xh(e,t){for(;Ze()&&e+he!==57;)if(e+he===84&&Et()===47)break;return"/*"+br(t,Ye-1)+"*"+Ri(e===47?e:Ze())}function Qh(e){for(;!Yr(Et());)Ze();return br(e,Ye)}function Gh(e){return Jd(Vo("",null,null,null,[""],e=qd(e),0,[0],e))}function Vo(e,t,n,r,o,i,l,s,a){for(var c=0,h=0,m=l,p=0,x=0,w=0,g=1,A=1,f=1,u=0,d="",S=o,N=i,O=r,T=d;A;)switch(w=u,u=Ze()){case 40:if(w!=108&&Ce(T,m-1)==58){Ns(T+=J(Ao(u),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:T+=Ao(u);break;case 9:case 10:case 13:case 32:T+=Yh(w);break;case 92:T+=Hh(Fo()-1,7);continue;case 47:switch(Et()){case 42:case 47:Eo(Kh(Xh(Ze(),Fo()),t,n),a);break;default:T+="/"}break;case 123*g:s[c++]=gt(T)*f;case 125*g:case 59:case 0:switch(u){case 0:case 125:A=0;case 59+h:f==-1&&(T=J(T,/\f/g,"")),x>0&&gt(T)-m&&Eo(x>32?wc(T+";",r,n,m-1):wc(J(T," ","")+";",r,n,m-2),a);break;case 59:T+=";";default:if(Eo(O=gc(T,t,n,c,h,o,s,d,S=[],N=[],m),i),u===123)if(h===0)Vo(T,t,O,O,S,i,m,s,N);else switch(p===99&&Ce(T,3)===110?100:p){case 100:case 108:case 109:case 115:Vo(e,O,O,r&&Eo(gc(e,O,O,0,0,o,s,d,o,S=[],m),N),o,N,m,s,r?S:N);break;default:Vo(T,O,O,O,[""],N,0,s,N)}}c=h=x=0,g=f=1,d=T="",m=l;break;case 58:m=1+gt(T),x=w;default:if(g<1){if(u==123)--g;else if(u==125&&g++==0&&Wh()==125)continue}switch(T+=Ri(u),u*g){case 38:f=h>0?1:(T+="\f",-1);break;case 44:s[c++]=(gt(T)-1)*f,f=1;break;case 64:Et()===45&&(T+=Ao(Ze())),p=Et(),h=m=gt(d=T+=Qh(Fo())),u++;break;case 45:w===45&&gt(T)==2&&(g=0)}}return i}function gc(e,t,n,r,o,i,l,s,a,c,h){for(var m=o-1,p=o===0?i:[""],x=La(p),w=0,g=0,A=0;w<r;++w)for(var f=0,u=Wr(e,m+1,m=jh(g=l[w])),d=e;f<x;++f)(d=Kd(g>0?p[f]+" "+u:J(u,/&\f/g,p[f])))&&(a[A++]=d);return Mi(e,t,n,o===0?Ma:s,a,c,h)}function Kh(e,t,n){return Mi(e,t,n,Qd,Ri(Bh()),Wr(e,2,-2),0)}function wc(e,t,n,r){return Mi(e,t,n,$a,Wr(e,0,r),Wr(e,r+1,-1),r)}function jn(e,t){for(var n="",r=La(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Zh(e,t,n,r){switch(e.type){case Ih:if(e.children.length)break;case Dh:case $a:return e.return=e.return||e.value;case Qd:return"";case Gd:return e.return=e.value+"{"+jn(e.children,r)+"}";case Ma:e.value=e.props.join(",")}return gt(n=jn(e.children,r))?e.return=e.value+"{"+n+"}":""}function qh(e){var t=La(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function Jh(e){return function(t){t.root||(t=t.return)&&e(t)}}function bh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var e1=function(t,n,r){for(var o=0,i=0;o=i,i=Et(),o===38&&i===12&&(n[r]=1),!Yr(i);)Ze();return br(t,Ye)},t1=function(t,n){var r=-1,o=44;do switch(Yr(o)){case 0:o===38&&Et()===12&&(n[r]=1),t[r]+=e1(Ye-1,n,r);break;case 2:t[r]+=Ao(o);break;case 4:if(o===44){t[++r]=Et()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Ri(o)}while(o=Ze());return t},n1=function(t,n){return Jd(t1(qd(t),n))},xc=new WeakMap,r1=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!xc.get(r))&&!o){xc.set(t,!0);for(var i=[],l=n1(n,i),s=r.props,a=0,c=0;a<l.length;a++)for(var h=0;h<s.length;h++,c++)t.props[c]=i[a]?l[a].replace(/&\f/g,s[h]):s[h]+" "+l[a]}}},o1=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function bd(e,t){switch(Ah(e,t)){case 5103:return q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return q+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return q+e+di+e+Re+e+e;case 6828:case 4268:return q+e+Re+e+e;case 6165:return q+e+Re+"flex-"+e+e;case 5187:return q+e+J(e,/(\w+).+(:[^]+)/,q+"box-$1$2"+Re+"flex-$1$2")+e;case 5443:return q+e+Re+"flex-item-"+J(e,/flex-|-self/,"")+e;case 4675:return q+e+Re+"flex-line-pack"+J(e,/align-content|flex-|-self/,"")+e;case 5548:return q+e+Re+J(e,"shrink","negative")+e;case 5292:return q+e+Re+J(e,"basis","preferred-size")+e;case 6060:return q+"box-"+J(e,"-grow","")+q+e+Re+J(e,"grow","positive")+e;case 4554:return q+J(e,/([^-])(transform)/g,"$1"+q+"$2")+e;case 6187:return J(J(J(e,/(zoom-|grab)/,q+"$1"),/(image-set)/,q+"$1"),e,"")+e;case 5495:case 3959:return J(e,/(image-set\([^]*)/,q+"$1$`$1");case 4968:return J(J(e,/(.+:)(flex-)?(.*)/,q+"box-pack:$3"+Re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+q+e+e;case 4095:case 3583:case 4068:case 2532:return J(e,/(.+)-inline(.+)/,q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gt(e)-1-t>6)switch(Ce(e,t+1)){case 109:if(Ce(e,t+4)!==45)break;case 102:return J(e,/(.+:)(.+)-([^]+)/,"$1"+q+"$2-$3$1"+di+(Ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ns(e,"stretch")?bd(J(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ce(e,t+1)!==115)break;case 6444:switch(Ce(e,gt(e)-3-(~Ns(e,"!important")&&10))){case 107:return J(e,":",":"+q)+e;case 101:return J(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+q+(Ce(e,14)===45?"inline-":"")+"box$3$1"+q+"$2$3$1"+Re+"$2box$3")+e}break;case 5936:switch(Ce(e,t+11)){case 114:return q+e+Re+J(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return q+e+Re+J(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return q+e+Re+J(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return q+e+Re+e+e}return e}var i1=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case $a:t.return=bd(t.value,t.length);break;case Gd:return jn([fr(t,{value:J(t.value,"@","@"+q)})],o);case Ma:if(t.length)return Uh(t.props,function(i){switch(Vh(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return jn([fr(t,{props:[J(i,/:(read-\w+)/,":"+di+"$1")]})],o);case"::placeholder":return jn([fr(t,{props:[J(i,/:(plac\w+)/,":"+q+"input-$1")]}),fr(t,{props:[J(i,/:(plac\w+)/,":"+di+"$1")]}),fr(t,{props:[J(i,/:(plac\w+)/,Re+"input-$1")]})],o)}return""})}},l1=[i1],s1=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var A=g.getAttribute("data-emotion");A.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var o=t.stylisPlugins||l1,i={},l,s=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var A=g.getAttribute("data-emotion").split(" "),f=1;f<A.length;f++)i[A[f]]=!0;s.push(g)});var a,c=[r1,o1];{var h,m=[Zh,Jh(function(g){h.insert(g)})],p=qh(c.concat(o,m)),x=function(A){return jn(Gh(A),p)};a=function(A,f,u,d){h=u,x(A?A+"{"+f.styles+"}":f.styles),d&&(w.inserted[f.name]=!0)}}var w={key:n,sheet:new Lh({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:a};return w.sheet.hydrate(s),w},e0={exports:{}},ee={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ke=typeof Symbol=="function"&&Symbol.for,Da=ke?Symbol.for("react.element"):60103,Ia=ke?Symbol.for("react.portal"):60106,$i=ke?Symbol.for("react.fragment"):60107,Li=ke?Symbol.for("react.strict_mode"):60108,Di=ke?Symbol.for("react.profiler"):60114,Ii=ke?Symbol.for("react.provider"):60109,ji=ke?Symbol.for("react.context"):60110,ja=ke?Symbol.for("react.async_mode"):60111,Fi=ke?Symbol.for("react.concurrent_mode"):60111,Ai=ke?Symbol.for("react.forward_ref"):60112,Vi=ke?Symbol.for("react.suspense"):60113,a1=ke?Symbol.for("react.suspense_list"):60120,Ui=ke?Symbol.for("react.memo"):60115,Bi=ke?Symbol.for("react.lazy"):60116,u1=ke?Symbol.for("react.block"):60121,c1=ke?Symbol.for("react.fundamental"):60117,f1=ke?Symbol.for("react.responder"):60118,d1=ke?Symbol.for("react.scope"):60119;function et(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Da:switch(e=e.type,e){case ja:case Fi:case $i:case Di:case Li:case Vi:return e;default:switch(e=e&&e.$$typeof,e){case ji:case Ai:case Bi:case Ui:case Ii:return e;default:return t}}case Ia:return t}}}function t0(e){return et(e)===Fi}ee.AsyncMode=ja;ee.ConcurrentMode=Fi;ee.ContextConsumer=ji;ee.ContextProvider=Ii;ee.Element=Da;ee.ForwardRef=Ai;ee.Fragment=$i;ee.Lazy=Bi;ee.Memo=Ui;ee.Portal=Ia;ee.Profiler=Di;ee.StrictMode=Li;ee.Suspense=Vi;ee.isAsyncMode=function(e){return t0(e)||et(e)===ja};ee.isConcurrentMode=t0;ee.isContextConsumer=function(e){return et(e)===ji};ee.isContextProvider=function(e){return et(e)===Ii};ee.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Da};ee.isForwardRef=function(e){return et(e)===Ai};ee.isFragment=function(e){return et(e)===$i};ee.isLazy=function(e){return et(e)===Bi};ee.isMemo=function(e){return et(e)===Ui};ee.isPortal=function(e){return et(e)===Ia};ee.isProfiler=function(e){return et(e)===Di};ee.isStrictMode=function(e){return et(e)===Li};ee.isSuspense=function(e){return et(e)===Vi};ee.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===$i||e===Fi||e===Di||e===Li||e===Vi||e===a1||typeof e=="object"&&e!==null&&(e.$$typeof===Bi||e.$$typeof===Ui||e.$$typeof===Ii||e.$$typeof===ji||e.$$typeof===Ai||e.$$typeof===c1||e.$$typeof===f1||e.$$typeof===d1||e.$$typeof===u1)};ee.typeOf=et;e0.exports=ee;var p1=e0.exports,n0=p1,m1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},h1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},r0={};r0[n0.ForwardRef]=m1;r0[n0.Memo]=h1;var y1=!0;function o0(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var Fa=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||y1===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},i0=function(t,n,r){Fa(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function v1(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var g1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},w1=/[A-Z]|^ms/g,x1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,l0=function(t){return t.charCodeAt(1)===45},Sc=function(t){return t!=null&&typeof t!="boolean"},Ml=bh(function(e){return l0(e)?e:e.replace(w1,"-$&").toLowerCase()}),kc=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(x1,function(r,o,i){return wt={name:o,styles:i,next:wt},o})}return g1[t]!==1&&!l0(t)&&typeof n=="number"&&n!==0?n+"px":n};function Hr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return wt={name:n.name,styles:n.styles,next:wt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)wt={name:r.name,styles:r.styles,next:wt},r=r.next;var o=n.styles+";";return o}return S1(e,t,n)}case"function":{if(e!==void 0){var i=wt,l=n(e);return wt=i,Hr(e,t,l)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function S1(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Hr(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":Sc(l)&&(r+=Ml(i)+":"+kc(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var s=0;s<l.length;s++)Sc(l[s])&&(r+=Ml(i)+":"+kc(i,l[s])+";");else{var a=Hr(e,t,l);switch(i){case"animation":case"animationName":{r+=Ml(i)+":"+a+";";break}default:r+=i+"{"+a+"}"}}}return r}var Ec=/label:\s*([^\s;\n{]+)\s*(;|$)/g,wt,Aa=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";wt=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=Hr(r,n,l)):i+=l[0];for(var s=1;s<t.length;s++)i+=Hr(r,n,t[s]),o&&(i+=l[s]);Ec.lastIndex=0;for(var a="",c;(c=Ec.exec(i))!==null;)a+="-"+c[1];var h=v1(i)+a;return{name:h,styles:i,next:wt}},k1=function(t){return t()},E1=Ga.useInsertionEffect?Ga.useInsertionEffect:!1,s0=E1||k1,Va={}.hasOwnProperty,a0=U.createContext(typeof HTMLElement<"u"?s1({key:"css"}):null);a0.Provider;var u0=function(t){return U.forwardRef(function(n,r){var o=U.useContext(a0);return t(n,o,r)})},c0=U.createContext({}),Os="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",C1=function(t,n){var r={};for(var o in n)Va.call(n,o)&&(r[o]=n[o]);return r[Os]=t,r},_1=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Fa(n,r,o),s0(function(){return i0(n,r,o)}),null},z1=u0(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[Os],i=[r],l="";typeof e.className=="string"?l=o0(t.registered,i,e.className):e.className!=null&&(l=e.className+" ");var s=Aa(i,void 0,U.useContext(c0));l+=t.key+"-"+s.name;var a={};for(var c in e)Va.call(e,c)&&c!=="css"&&c!==Os&&(a[c]=e[c]);return a.ref=n,a.className=l,U.createElement(U.Fragment,null,U.createElement(_1,{cache:t,serialized:s,isStringTag:typeof o=="string"}),U.createElement(o,a))}),T1=z1,P1=W.Fragment;function we(e,t,n){return Va.call(t,"css")?W.jsx(T1,C1(e,t),n):W.jsx(e,t,n)}function f0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Aa(t)}var P=function(){var t=f0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},N1=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var l=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))l=e(i);else{l="";for(var s in i)i[s]&&s&&(l&&(l+=" "),l+=s)}break}default:l=i}l&&(o&&(o+=" "),o+=l)}}return o};function R1(e,t,n){var r=[],o=o0(e,r,n);return r.length<2?n:o+t(r)}var O1=function(t){var n=t.cache,r=t.serializedArr;return s0(function(){for(var o=0;o<r.length;o++)i0(n,r[o],!1)}),null},$l=u0(function(e,t){var n=!1,r=[],o=function(){for(var c=arguments.length,h=new Array(c),m=0;m<c;m++)h[m]=arguments[m];var p=Aa(h,t.registered);return r.push(p),Fa(t,p,!1),t.key+"-"+p.name},i=function(){for(var c=arguments.length,h=new Array(c),m=0;m<c;m++)h[m]=arguments[m];return R1(t.registered,o,N1(h))},l={css:o,cx:i,theme:U.useContext(c0)},s=e.children(l);return n=!0,U.createElement(U.Fragment,null,U.createElement(O1,{cache:t,serializedArr:r}),s)}),M1=Object.defineProperty,$1=(e,t,n)=>t in e?M1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Co=(e,t,n)=>($1(e,typeof t!="symbol"?t+"":t,n),n),Ms=new Map,_o=new WeakMap,Cc=0,L1=void 0;function D1(e){return e?(_o.has(e)||(Cc+=1,_o.set(e,Cc.toString())),_o.get(e)):"0"}function I1(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?D1(e.root):e[t]}`).toString()}function j1(e){const t=I1(e);let n=Ms.get(t);if(!n){const r=new Map;let o;const i=new IntersectionObserver(l=>{l.forEach(s=>{var a;const c=s.isIntersecting&&o.some(h=>s.intersectionRatio>=h);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=c),(a=r.get(s.target))==null||a.forEach(h=>{h(c,s)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},Ms.set(t,n)}return n}function d0(e,t,n={},r=L1){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:o,observer:i,elements:l}=j1(n),s=l.get(e)||[];return l.has(e)||l.set(e,s),s.push(t),i.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(l.delete(e),i.unobserve(e)),l.size===0&&(i.disconnect(),Ms.delete(o))}}function F1(e){return typeof e.children!="function"}var _c=class extends U.Component{constructor(e){super(e),Co(this,"node",null),Co(this,"_unobserveCb",null),Co(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),Co(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),F1(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:i}=this.props;this._unobserveCb=d0(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:x,entry:w}=this.state;return e({inView:x,entry:w,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:i,onChange:l,skip:s,trackVisibility:a,delay:c,initialInView:h,fallbackInView:m,...p}=this.props;return U.createElement(t||"div",{ref:this.handleNode,...p},e)}};function p0({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:i,skip:l,initialInView:s,fallbackInView:a,onChange:c}={}){var h;const[m,p]=U.useState(null),x=U.useRef(),[w,g]=U.useState({inView:!!s,entry:void 0});x.current=c,U.useEffect(()=>{if(l||!m)return;let d;return d=d0(m,(S,N)=>{g({inView:S,entry:N}),x.current&&x.current(S,N),N.isIntersecting&&i&&d&&(d(),d=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},a),()=>{d&&d()}},[Array.isArray(e)?e.toString():e,m,o,r,i,l,n,a,t]);const A=(h=w.entry)==null?void 0:h.target,f=U.useRef();!m&&A&&!i&&!l&&f.current!==A&&(f.current=A,g({inView:!!s,entry:void 0}));const u=[p,w.inView,w.entry];return u.ref=u[0],u.inView=u[1],u.entry=u[2],u}var m0={exports:{}},te={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),Ba=Symbol.for("react.portal"),Wi=Symbol.for("react.fragment"),Yi=Symbol.for("react.strict_mode"),Hi=Symbol.for("react.profiler"),Xi=Symbol.for("react.provider"),Qi=Symbol.for("react.context"),A1=Symbol.for("react.server_context"),Gi=Symbol.for("react.forward_ref"),Ki=Symbol.for("react.suspense"),Zi=Symbol.for("react.suspense_list"),qi=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),V1=Symbol.for("react.offscreen"),h0;h0=Symbol.for("react.module.reference");function st(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ua:switch(e=e.type,e){case Wi:case Hi:case Yi:case Ki:case Zi:return e;default:switch(e=e&&e.$$typeof,e){case A1:case Qi:case Gi:case Ji:case qi:case Xi:return e;default:return t}}case Ba:return t}}}te.ContextConsumer=Qi;te.ContextProvider=Xi;te.Element=Ua;te.ForwardRef=Gi;te.Fragment=Wi;te.Lazy=Ji;te.Memo=qi;te.Portal=Ba;te.Profiler=Hi;te.StrictMode=Yi;te.Suspense=Ki;te.SuspenseList=Zi;te.isAsyncMode=function(){return!1};te.isConcurrentMode=function(){return!1};te.isContextConsumer=function(e){return st(e)===Qi};te.isContextProvider=function(e){return st(e)===Xi};te.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ua};te.isForwardRef=function(e){return st(e)===Gi};te.isFragment=function(e){return st(e)===Wi};te.isLazy=function(e){return st(e)===Ji};te.isMemo=function(e){return st(e)===qi};te.isPortal=function(e){return st(e)===Ba};te.isProfiler=function(e){return st(e)===Hi};te.isStrictMode=function(e){return st(e)===Yi};te.isSuspense=function(e){return st(e)===Ki};te.isSuspenseList=function(e){return st(e)===Zi};te.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Wi||e===Hi||e===Yi||e===Ki||e===Zi||e===V1||typeof e=="object"&&e!==null&&(e.$$typeof===Ji||e.$$typeof===qi||e.$$typeof===Xi||e.$$typeof===Qi||e.$$typeof===Gi||e.$$typeof===h0||e.getModuleId!==void 0)};te.typeOf=st;m0.exports=te;var U1=m0.exports;P`
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
`;P`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;P`
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
`;P`
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
`;P`
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
`;P`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
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
`;const B1=P`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,W1=P`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Y1=P`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,H1=P`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,X1=P`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Wa=P`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Q1=P`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,G1=P`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,K1=P`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Z1=P`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,q1=P`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,J1=P`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,b1=P`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function ey({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=Wa,iterationCount:o=1}){return f0`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function ty(e){return e==null}function ny(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function y0(e,t){return n=>n?e():t()}function Xr(e){return y0(e,()=>null)}function $s(e){return Xr(()=>({opacity:0}))(e)}const v0=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:l=Wa,triggerOnce:s=!1,className:a,style:c,childClassName:h,childStyle:m,children:p,onVisibilityChange:x}=e,w=U.useMemo(()=>ey({keyframes:l,duration:o}),[o,l]);return ty(p)?null:ny(p)?we(oy,{...e,animationStyles:w,children:String(p)}):U1.isFragment(p)?we(g0,{...e,animationStyles:w}):we(P1,{children:U.Children.map(p,(g,A)=>{if(!U.isValidElement(g))return null;const f=r+(t?A*o*n:0);switch(g.type){case"ol":case"ul":return we($l,{children:({cx:u})=>we(g.type,{...g.props,className:u(a,g.props.className),style:Object.assign({},c,g.props.style),children:we(v0,{...e,children:g.props.children})})});case"li":return we(_c,{threshold:i,triggerOnce:s,onChange:x,children:({inView:u,ref:d})=>we($l,{children:({cx:S})=>we(g.type,{...g.props,ref:d,className:S(h,g.props.className),css:Xr(()=>w)(u),style:Object.assign({},m,g.props.style,$s(!u),{animationDelay:f+"ms"})})})});default:return we(_c,{threshold:i,triggerOnce:s,onChange:x,children:({inView:u,ref:d})=>we("div",{ref:d,className:a,css:Xr(()=>w)(u),style:Object.assign({},c,$s(!u),{animationDelay:f+"ms"}),children:we($l,{children:({cx:S})=>we(g.type,{...g.props,className:S(h,g.props.className),style:Object.assign({},m,g.props.style)})})})})}})})},ry={display:"inline-block",whiteSpace:"pre"},oy=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:l=0,triggerOnce:s=!1,className:a,style:c,children:h,onVisibilityChange:m}=e,{ref:p,inView:x}=p0({triggerOnce:s,threshold:l,onChange:m});return y0(()=>we("div",{ref:p,className:a,style:Object.assign({},c,ry),children:h.split("").map((w,g)=>we("span",{css:Xr(()=>t)(x),style:{animationDelay:o+g*i*r+"ms"},children:w},g))}),()=>we(g0,{...e,children:h}))(n)},g0=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:i,children:l,onVisibilityChange:s}=e,{ref:a,inView:c}=p0({triggerOnce:r,threshold:n,onChange:s});return we("div",{ref:a,className:o,css:Xr(()=>t)(c),style:Object.assign({},i,$s(!c)),children:l})};P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;P`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;P`
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
`;const iy=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,ly=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,sy=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,ay=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,uy=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,cy=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,fy=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,dy=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,py=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,my=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,hy=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,yy=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,vy=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function gy(e,t,n){switch(n){case"bottom-left":return t?ly:W1;case"bottom-right":return t?sy:Y1;case"down":return e?t?uy:X1:t?ay:H1;case"left":return e?t?fy:Q1:t?cy:Wa;case"right":return e?t?py:K1:t?dy:G1;case"top-left":return t?my:Z1;case"top-right":return t?hy:q1;case"up":return e?t?vy:b1:t?yy:J1;default:return t?iy:B1}}const Ls=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,i=U.useMemo(()=>gy(t,r,n),[t,n,r]);return we(v0,{keyframes:i,...o})};P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;P`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;P`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;P`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;P`
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
`;const w0=xh(e=>({count:0,increment:t=>e(n=>({count:n.count+t})),decrement:t=>e(n=>({count:n.count-t}))})),wy=e=>{const{toggle:t,toggleTheme:n}=Ge.useContext(Jr),{increment:r,decrement:o}=w0(),i=Ge.useCallback(()=>r(e.inc),[r]),l=Ge.useCallback(()=>o(e.inc),[o]);return W.jsxs("div",{className:"inline-block bg-transparent",children:[W.jsxs("div",{children:[W.jsx(zl,{onClick:i,fontSize:"text-5xl",children:"+"}),W.jsx(zl,{onClick:l,fontSize:"text-5xl",children:"-"})]}),e.toggleButton&&W.jsxs(zl,{onClick:n,fontSize:"text-3xl",children:[t?"라이트":"다크","모드 전환"]})]})},Ll=e=>W.jsx(Ls,{delay:300,children:W.jsxs(Ps,{children:[W.jsx(Ut,{fontSize:"text-9xl",stroke:!0,children:w0().count}),W.jsx(wy,{inc:e.inc,toggleButton:e.toggleButton})]})});Dl.createRoot(document.getElementById("root")).render(W.jsx(Ge.StrictMode,{children:W.jsxs(Sh,{children:[W.jsx(_h,{}),W.jsxs("div",{className:"absolute top-0 left-0 w-full bg-transparent select-none",children:[W.jsx(Ls,{delay:300,children:W.jsx(Ps,{children:W.jsx(Oh,{})})}),W.jsx(Ll,{inc:1,toggleButton:!0}),W.jsx(Ll,{inc:5}),W.jsx(Ll,{inc:10}),W.jsx(Ps,{children:W.jsxs(Ls,{delay:300,children:[W.jsx(Ut,{className:"text-2xl sm:text-3xl",children:W.jsx("a",{href:"https://github.com/ky0422/ky0422.github.io",children:"GITHUB"})}),W.jsx(Ut,{className:"text-2xl sm:text-3xl",children:W.jsx("a",{href:"https://ky0422.tistory.com",children:"TISTORY"})})]})})]})]})}));
