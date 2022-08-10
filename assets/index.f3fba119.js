import{r as h,g as V}from"./index.667d15b6.js";const E=t=>{let e;const n=new Set,o=(s,d)=>{const a=typeof s=="function"?s(e):s;if(a!==e){const l=e;e=d?a:Object.assign({},e,a),n.forEach(p=>p(e,l))}},r=()=>e,f={setState:o,getState:r,subscribe:s=>(n.add(s),()=>n.delete(s)),destroy:()=>n.clear()};return e=t(o,r,f),f},D=t=>t?E(t):E;var w={exports:{}},$={},j={exports:{}},O={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=h.exports;function _(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var k=typeof Object.is=="function"?Object.is:_,q=v.useState,I=v.useEffect,W=v.useLayoutEffect,b=v.useDebugValue;function B(t,e){var n=e(),o=q({inst:{value:n,getSnapshot:e}}),r=o[0].inst,u=o[1];return W(function(){r.value=n,r.getSnapshot=e,y(r)&&u({inst:r})},[t,n,e]),I(function(){return y(r)&&u({inst:r}),t(function(){y(r)&&u({inst:r})})},[t]),b(n),n}function y(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!k(t,n)}catch{return!0}}function C(t,e){return e()}var F=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?C:B;O.useSyncExternalStore=v.useSyncExternalStore!==void 0?v.useSyncExternalStore:F;(function(t){t.exports=O})(j);/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=h.exports,L=j.exports;function M(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var R=typeof Object.is=="function"?Object.is:M,z=L.useSyncExternalStore,A=x.useRef,G=x.useEffect,H=x.useMemo,J=x.useDebugValue;$.useSyncExternalStoreWithSelector=function(t,e,n,o,r){var u=A(null);if(u.current===null){var i={hasValue:!1,value:null};u.current=i}else i=u.current;u=H(function(){function s(c){if(!d){if(d=!0,a=c,c=o(c),r!==void 0&&i.hasValue){var S=i.value;if(r(S,c))return l=S}return l=c}if(S=l,R(a,c))return S;var m=o(c);return r!==void 0&&r(S,m)?S:(a=c,l=m)}var d=!1,a,l,p=n===void 0?null:n;return[function(){return s(e())},p===null?void 0:function(){return s(p())}]},[e,n,o,r]);var f=z(t,u[0],u[1]);return G(function(){i.hasValue=!0,i.value=f},[f]),J(f),f};(function(t){t.exports=$})(w);const K=V(w.exports),{useSyncExternalStoreWithSelector:N}=K;function P(t,e=t.getState,n){const o=N(t.subscribe,t.getState,t.getServerState||t.getState,e,n);return h.exports.useDebugValue(o),o}const g=t=>{const e=typeof t=="function"?D(t):t,n=(o,r)=>P(e,o,r);return Object.assign(n,e),n},Q=t=>t?g(t):g;var U=Q;export{D as createStore,U as default,P as useStore};
