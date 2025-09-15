(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Q_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Nf={exports:{}},_o={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function Ux(){if(Vg)return _o;Vg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return _o.Fragment=e,_o.jsx=i,_o.jsxs=i,_o}var kg;function Nx(){return kg||(kg=1,Nf.exports=Ux()),Nf.exports}var X=Nx(),Lf={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function Lx(){if(Xg)return ue;Xg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,R={};function M(N,tt,xt){this.props=N,this.context=tt,this.refs=R,this.updater=xt||E}M.prototype.isReactComponent={},M.prototype.setState=function(N,tt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,tt,"setState")},M.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function v(){}v.prototype=M.prototype;function F(N,tt,xt){this.props=N,this.context=tt,this.refs=R,this.updater=xt||E}var P=F.prototype=new v;P.constructor=F,A(P,M.prototype),P.isPureReactComponent=!0;var U=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function G(N,tt,xt,yt,Nt,Ht){return xt=Ht.ref,{$$typeof:o,type:N,key:tt,ref:xt!==void 0?xt:null,props:Ht}}function Q(N,tt){return G(N.type,tt,void 0,void 0,void 0,N.props)}function D(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function C(N){var tt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(xt){return tt[xt]})}var V=/\/+/g;function at(N,tt){return typeof N=="object"&&N!==null&&N.key!=null?C(""+N.key):tt.toString(36)}function ht(){}function dt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(ht,ht):(N.status="pending",N.then(function(tt){N.status==="pending"&&(N.status="fulfilled",N.value=tt)},function(tt){N.status==="pending"&&(N.status="rejected",N.reason=tt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ft(N,tt,xt,yt,Nt){var Ht=typeof N;(Ht==="undefined"||Ht==="boolean")&&(N=null);var nt=!1;if(N===null)nt=!0;else switch(Ht){case"bigint":case"string":case"number":nt=!0;break;case"object":switch(N.$$typeof){case o:case e:nt=!0;break;case _:return nt=N._init,ft(nt(N._payload),tt,xt,yt,Nt)}}if(nt)return Nt=Nt(N),nt=yt===""?"."+at(N,0):yt,U(Nt)?(xt="",nt!=null&&(xt=nt.replace(V,"$&/")+"/"),ft(Nt,tt,xt,"",function(Zt){return Zt})):Nt!=null&&(D(Nt)&&(Nt=Q(Nt,xt+(Nt.key==null||N&&N.key===Nt.key?"":(""+Nt.key).replace(V,"$&/")+"/")+nt)),tt.push(Nt)),1;nt=0;var gt=yt===""?".":yt+":";if(U(N))for(var Et=0;Et<N.length;Et++)yt=N[Et],Ht=gt+at(yt,Et),nt+=ft(yt,tt,xt,Ht,Nt);else if(Et=y(N),typeof Et=="function")for(N=Et.call(N),Et=0;!(yt=N.next()).done;)yt=yt.value,Ht=gt+at(yt,Et++),nt+=ft(yt,tt,xt,Ht,Nt);else if(Ht==="object"){if(typeof N.then=="function")return ft(dt(N),tt,xt,yt,Nt);throw tt=String(N),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return nt}function L(N,tt,xt){if(N==null)return N;var yt=[],Nt=0;return ft(N,yt,"","",function(Ht){return tt.call(xt,Ht,Nt++)}),yt}function K(N){if(N._status===-1){var tt=N._result;tt=tt(),tt.then(function(xt){(N._status===0||N._status===-1)&&(N._status=1,N._result=xt)},function(xt){(N._status===0||N._status===-1)&&(N._status=2,N._result=xt)}),N._status===-1&&(N._status=0,N._result=tt)}if(N._status===1)return N._result.default;throw N._result}var q=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function St(){}return ue.Children={map:L,forEach:function(N,tt,xt){L(N,function(){tt.apply(this,arguments)},xt)},count:function(N){var tt=0;return L(N,function(){tt++}),tt},toArray:function(N){return L(N,function(tt){return tt})||[]},only:function(N){if(!D(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ue.Component=M,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=F,ue.StrictMode=r,ue.Suspense=m,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ue.__COMPILER_RUNTIME={__proto__:null,c:function(N){return I.H.useMemoCache(N)}},ue.cache=function(N){return function(){return N.apply(null,arguments)}},ue.cloneElement=function(N,tt,xt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var yt=A({},N.props),Nt=N.key,Ht=void 0;if(tt!=null)for(nt in tt.ref!==void 0&&(Ht=void 0),tt.key!==void 0&&(Nt=""+tt.key),tt)!H.call(tt,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&tt.ref===void 0||(yt[nt]=tt[nt]);var nt=arguments.length-2;if(nt===1)yt.children=xt;else if(1<nt){for(var gt=Array(nt),Et=0;Et<nt;Et++)gt[Et]=arguments[Et+2];yt.children=gt}return G(N.type,Nt,void 0,void 0,Ht,yt)},ue.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},ue.createElement=function(N,tt,xt){var yt,Nt={},Ht=null;if(tt!=null)for(yt in tt.key!==void 0&&(Ht=""+tt.key),tt)H.call(tt,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(Nt[yt]=tt[yt]);var nt=arguments.length-2;if(nt===1)Nt.children=xt;else if(1<nt){for(var gt=Array(nt),Et=0;Et<nt;Et++)gt[Et]=arguments[Et+2];Nt.children=gt}if(N&&N.defaultProps)for(yt in nt=N.defaultProps,nt)Nt[yt]===void 0&&(Nt[yt]=nt[yt]);return G(N,Ht,void 0,void 0,null,Nt)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(N){return{$$typeof:d,render:N}},ue.isValidElement=D,ue.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:K}},ue.memo=function(N,tt){return{$$typeof:p,type:N,compare:tt===void 0?null:tt}},ue.startTransition=function(N){var tt=I.T,xt={};I.T=xt;try{var yt=N(),Nt=I.S;Nt!==null&&Nt(xt,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(St,q)}catch(Ht){q(Ht)}finally{I.T=tt}},ue.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ue.use=function(N){return I.H.use(N)},ue.useActionState=function(N,tt,xt){return I.H.useActionState(N,tt,xt)},ue.useCallback=function(N,tt){return I.H.useCallback(N,tt)},ue.useContext=function(N){return I.H.useContext(N)},ue.useDebugValue=function(){},ue.useDeferredValue=function(N,tt){return I.H.useDeferredValue(N,tt)},ue.useEffect=function(N,tt,xt){var yt=I.H;if(typeof xt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(N,tt)},ue.useId=function(){return I.H.useId()},ue.useImperativeHandle=function(N,tt,xt){return I.H.useImperativeHandle(N,tt,xt)},ue.useInsertionEffect=function(N,tt){return I.H.useInsertionEffect(N,tt)},ue.useLayoutEffect=function(N,tt){return I.H.useLayoutEffect(N,tt)},ue.useMemo=function(N,tt){return I.H.useMemo(N,tt)},ue.useOptimistic=function(N,tt){return I.H.useOptimistic(N,tt)},ue.useReducer=function(N,tt,xt){return I.H.useReducer(N,tt,xt)},ue.useRef=function(N){return I.H.useRef(N)},ue.useState=function(N){return I.H.useState(N)},ue.useSyncExternalStore=function(N,tt,xt){return I.H.useSyncExternalStore(N,tt,xt)},ue.useTransition=function(){return I.H.useTransition()},ue.version="19.1.1",ue}var Wg;function sd(){return Wg||(Wg=1,Lf.exports=Lx()),Lf.exports}var si=sd();const Ox=Q_(si);var Of={exports:{}},vo={},Pf={exports:{}},zf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function Px(){return qg||(qg=1,(function(o){function e(L,K){var q=L.length;L.push(K);t:for(;0<q;){var St=q-1>>>1,N=L[St];if(0<l(N,K))L[St]=K,L[q]=N,q=St;else break t}}function i(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var K=L[0],q=L.pop();if(q!==K){L[0]=q;t:for(var St=0,N=L.length,tt=N>>>1;St<tt;){var xt=2*(St+1)-1,yt=L[xt],Nt=xt+1,Ht=L[Nt];if(0>l(yt,q))Nt<N&&0>l(Ht,yt)?(L[St]=Ht,L[Nt]=q,St=Nt):(L[St]=yt,L[xt]=q,St=xt);else if(Nt<N&&0>l(Ht,q))L[St]=Ht,L[Nt]=q,St=Nt;else break t}}return K}function l(L,K){var q=L.sortIndex-K.sortIndex;return q!==0?q:L.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,x=null,y=3,E=!1,A=!1,R=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function U(L){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=L)r(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=i(p)}}function I(L){if(R=!1,U(L),!A)if(i(m)!==null)A=!0,H||(H=!0,at());else{var K=i(p);K!==null&&ft(I,K.startTime-L)}}var H=!1,G=-1,Q=5,D=-1;function C(){return M?!0:!(o.unstable_now()-D<Q)}function V(){if(M=!1,H){var L=o.unstable_now();D=L;var K=!0;try{t:{A=!1,R&&(R=!1,F(G),G=-1),E=!0;var q=y;try{e:{for(U(L),x=i(m);x!==null&&!(x.expirationTime>L&&C());){var St=x.callback;if(typeof St=="function"){x.callback=null,y=x.priorityLevel;var N=St(x.expirationTime<=L);if(L=o.unstable_now(),typeof N=="function"){x.callback=N,U(L),K=!0;break e}x===i(m)&&r(m),U(L)}else r(m);x=i(m)}if(x!==null)K=!0;else{var tt=i(p);tt!==null&&ft(I,tt.startTime-L),K=!1}}break t}finally{x=null,y=q,E=!1}K=void 0}}finally{K?at():H=!1}}}var at;if(typeof P=="function")at=function(){P(V)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,dt=ht.port2;ht.port1.onmessage=V,at=function(){dt.postMessage(null)}}else at=function(){v(V,0)};function ft(L,K){G=v(function(){L(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(L){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var q=y;y=K;try{return L()}finally{y=q}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(L,K){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var q=y;y=L;try{return K()}finally{y=q}},o.unstable_scheduleCallback=function(L,K,q){var St=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?St+q:St):q=St,L){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=q+N,L={id:_++,callback:K,priorityLevel:L,startTime:q,expirationTime:N,sortIndex:-1},q>St?(L.sortIndex=q,e(p,L),i(m)===null&&L===i(p)&&(R?(F(G),G=-1):R=!0,ft(I,q-St))):(L.sortIndex=N,e(m,L),A||E||(A=!0,H||(H=!0,at()))),L},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(L){var K=y;return function(){var q=y;y=K;try{return L.apply(this,arguments)}finally{y=q}}}})(zf)),zf}var Yg;function zx(){return Yg||(Yg=1,Pf.exports=Px()),Pf.exports}var Bf={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function Bx(){if(jg)return bn;jg=1;var o=sd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,bn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,_)},bn.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},bn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:E}):_==="script"&&r.d.X(m,{crossOrigin:x,integrity:y,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},bn.requestFormReset=function(m){r.d.r(m)},bn.unstable_batchedUpdates=function(m,p){return m(p)},bn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},bn.useFormStatus=function(){return h.H.useHostTransitionStatus()},bn.version="19.1.1",bn}var Zg;function Ix(){if(Zg)return Bf.exports;Zg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Bf.exports=Bx(),Bf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function Fx(){if(Kg)return vo;Kg=1;var o=zx(),e=sd(),i=Ix();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),t;if(f===s)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,T=c.child;T;){if(T===a){S=!0,a=c,s=f;break}if(T===s){S=!0,s=c,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,s=c;break}if(T===s){S=!0,s=f,a=c;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),F=Symbol.for("react.consumer"),P=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function at(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Symbol.for("react.client.reference");function dt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ht?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case M:return"Profiler";case R:return"StrictMode";case I:return"Suspense";case H:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case P:return(t.displayName||"Context")+".Provider";case F:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case G:return n=t.displayName||null,n!==null?n:dt(t.type)||"Memo";case Q:n=t._payload,t=t._init;try{return dt(t(n))}catch{}}return null}var ft=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},St=[],N=-1;function tt(t){return{current:t}}function xt(t){0>N||(t.current=St[N],St[N]=null,N--)}function yt(t,n){N++,St[N]=t.current,t.current=n}var Nt=tt(null),Ht=tt(null),nt=tt(null),gt=tt(null);function Et(t,n){switch(yt(nt,n),yt(Ht,t),yt(Nt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?gg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=gg(n),t=_g(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}xt(Nt),yt(Nt,t)}function Zt(){xt(Nt),xt(Ht),xt(nt)}function qt(t){t.memoizedState!==null&&yt(gt,t);var n=Nt.current,a=_g(n,t.type);n!==a&&(yt(Ht,t),yt(Nt,a))}function ce(t){Ht.current===t&&(xt(Nt),xt(Ht)),gt.current===t&&(xt(gt),fo._currentValue=q)}var Ye=Object.prototype.hasOwnProperty,z=o.unstable_scheduleCallback,we=o.unstable_cancelCallback,re=o.unstable_shouldYield,$t=o.unstable_requestPaint,zt=o.unstable_now,ye=o.unstable_getCurrentPriorityLevel,Gt=o.unstable_ImmediatePriority,se=o.unstable_UserBlockingPriority,He=o.unstable_NormalPriority,Ge=o.unstable_LowPriority,w=o.unstable_IdlePriority,g=o.log,B=o.unstable_setDisableYieldValue,J=null,ct=null;function it(t){if(typeof g=="function"&&B(t),ct&&typeof ct.setStrictMode=="function")try{ct.setStrictMode(J,t)}catch{}}var At=Math.clz32?Math.clz32:Vt,Rt=Math.log,Bt=Math.LN2;function Vt(t){return t>>>=0,t===0?32:31-(Rt(t)/Bt|0)|0}var Mt=256,Dt=4194304;function Kt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Wt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=Kt(s):(S&=T,S!==0?c=Kt(S):a||(a=T&~t,a!==0&&(c=Kt(a))))):(T=s&~f,T!==0?c=Kt(T):S!==0?c=Kt(S):a||(a=s&~t,a!==0&&(c=Kt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ut(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function oe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var t=Mt;return Mt<<=1,(Mt&4194048)===0&&(Mt=256),t}function Ct(){var t=Dt;return Dt<<=1,(Dt&62914560)===0&&(Dt=4194304),t}function wt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function It(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Tt(t,n,a,s,c,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,O=t.expirationTimes,et=t.hiddenUpdates;for(a=S&~a;0<a;){var pt=31-At(a),_t=1<<pt;T[pt]=0,O[pt]=-1;var rt=et[pt];if(rt!==null)for(et[pt]=null,pt=0;pt<rt.length;pt++){var st=rt[pt];st!==null&&(st.lane&=-536870913)}a&=~_t}s!==0&&vt(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function vt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-At(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function Xt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-At(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function ae(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function De(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ee(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:zg(t.type))}function ui(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var on=Math.random().toString(36).slice(2),ln="__reactFiber$"+on,je="__reactProps$"+on,Mi="__reactContainer$"+on,_r="__reactEvents$"+on,zo="__reactListeners$"+on,vr="__reactHandles$"+on,Es="__reactResources$"+on,Ei="__reactMarker$"+on;function xr(t){delete t[ln],delete t[je],delete t[_r],delete t[zo],delete t[vr]}function Ni(t){var n=t[ln];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Mi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=yg(t);t!==null;){if(a=t[ln])return a;t=yg(t)}return n}t=a,a=t.parentNode}return null}function sa(t){if(t=t[ln]||t[Mi]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ga(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function oa(t){var n=t[Es];return n||(n=t[Es]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(t){t[Ei]=!0}var Bo=new Set,Io={};function b(t,n){Y(t,n),Y(t+"Capture",n)}function Y(t,n){for(Io[t]=n,t=0;t<n.length;t++)Bo.add(n[t])}var lt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ut={},Z={};function bt(t){return Ye.call(Z,t)?!0:Ye.call(ut,t)?!1:lt.test(t)?Z[t]=!0:(ut[t]=!0,!1)}function Lt(t,n,a){if(bt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ft(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ot(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var Jt,ee;function Yt(t){if(Jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",ee=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+t+ee}var he=!1;function Te(t,n){if(!t||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(st){var rt=st}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(st){rt=st}t.call(_t.prototype)}}else{try{throw Error()}catch(st){rt=st}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(st){if(st&&rt&&typeof st.stack=="string")return[st.stack,rt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var O=S.split(`
`),et=T.split(`
`);for(c=s=0;s<O.length&&!O[s].includes("DetermineComponentFrameRoot");)s++;for(;c<et.length&&!et[c].includes("DetermineComponentFrameRoot");)c++;if(s===O.length||c===et.length)for(s=O.length-1,c=et.length-1;1<=s&&0<=c&&O[s]!==et[c];)c--;for(;1<=s&&0<=c;s--,c--)if(O[s]!==et[c]){if(s!==1||c!==1)do if(s--,c--,0>c||O[s]!==et[c]){var pt=`
`+O[s].replace(" at new "," at ");return t.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",t.displayName)),pt}while(1<=s&&0<=c);break}}}finally{he=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Yt(a):""}function Xe(t){switch(t.tag){case 26:case 27:case 5:return Yt(t.type);case 16:return Yt("Lazy");case 13:return Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return Te(t.type,!1);case 11:return Te(t.type.render,!1);case 1:return Te(t.type,!0);case 31:return Yt("Activity");default:return""}}function Le(t){try{var n="";do n+=Xe(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function de(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ke(t){var n=Qt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function _e(t){t._valueTracker||(t._valueTracker=ke(t))}function Mn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Qt(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function fi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Cn=/[\n"\\]/g;function dn(t){return t.replace(Cn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ie(t,n,a,s,c,f,S,T){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+de(n)):t.value!==""+de(n)&&(t.value=""+de(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?En(t,S,de(n)):a!=null?En(t,S,de(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+de(T):t.removeAttribute("name")}function wn(t,n,a,s,c,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+de(a):"",n=n!=null?""+de(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S)}function En(t,n,a){n==="number"&&fi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ze(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+de(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function vn(t,n,a){if(n!=null&&(n=""+de(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+de(a):""}function Sr(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ft(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=de(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function Ln(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Cv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Cv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function _d(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&gd(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&gd(t,f,n[f])}function Dc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fo(t){return Dv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Uc=null;function Nc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yr=null,Mr=null;function vd(t){var n=sa(t);if(n&&(t=n.stateNode)){var a=t[je]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ie(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+dn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[je]||null;if(!c)throw Error(r(90));Ie(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Mn(s)}break t;case"textarea":vn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ze(t,!!a.multiple,n,!1)}}}var Lc=!1;function xd(t,n,a){if(Lc)return t(n,a);Lc=!0;try{var s=t(n);return s}finally{if(Lc=!1,(yr!==null||Mr!==null)&&(Tl(),yr&&(n=yr,t=Mr,Mr=yr=null,vd(n),t)))for(n=0;n<t.length;n++)vd(t[n])}}function Ts(t,n){var a=t.stateNode;if(a===null)return null;var s=a[je]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oc=!1;if(Li)try{var bs={};Object.defineProperty(bs,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",bs,bs),window.removeEventListener("test",bs,bs)}catch{Oc=!1}var la=null,Pc=null,Ho=null;function Sd(){if(Ho)return Ho;var t,n=Pc,a=n.length,s,c="value"in la?la.value:la.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var S=a-t;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return Ho=c.slice(t,1<s?1-s:void 0)}function Go(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Vo(){return!0}function yd(){return!1}function On(t){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Vo:yd,this.isPropagationStopped=yd,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Vo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Vo)},persist:function(){},isPersistent:Vo}),n}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ko=On(Va),As=_({},Va,{view:0,detail:0}),Uv=On(As),zc,Bc,Rs,Xo=_({},As,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Rs&&(Rs&&t.type==="mousemove"?(zc=t.screenX-Rs.screenX,Bc=t.screenY-Rs.screenY):Bc=zc=0,Rs=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),Md=On(Xo),Nv=_({},Xo,{dataTransfer:0}),Lv=On(Nv),Ov=_({},As,{relatedTarget:0}),Ic=On(Ov),Pv=_({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),zv=On(Pv),Bv=_({},Va,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Iv=On(Bv),Fv=_({},Va,{data:0}),Ed=On(Fv),Hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Vv[t])?!!n[t]:!1}function Fc(){return kv}var Xv=_({},As,{key:function(t){if(t.key){var n=Hv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Go(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fc,charCode:function(t){return t.type==="keypress"?Go(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Go(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wv=On(Xv),qv=_({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=On(qv),Yv=_({},As,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fc}),jv=On(Yv),Zv=_({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kv=On(Zv),Qv=_({},Xo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jv=On(Qv),$v=_({},Va,{newState:0,oldState:0}),t0=On($v),e0=[9,13,27,32],Hc=Li&&"CompositionEvent"in window,Cs=null;Li&&"documentMode"in document&&(Cs=document.documentMode);var n0=Li&&"TextEvent"in window&&!Cs,bd=Li&&(!Hc||Cs&&8<Cs&&11>=Cs),Ad=" ",Rd=!1;function Cd(t,n){switch(t){case"keyup":return e0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Er=!1;function i0(t,n){switch(t){case"compositionend":return wd(n);case"keypress":return n.which!==32?null:(Rd=!0,Ad);case"textInput":return t=n.data,t===Ad&&Rd?null:t;default:return null}}function a0(t,n){if(Er)return t==="compositionend"||!Hc&&Cd(t,n)?(t=Sd(),Ho=Pc=la=null,Er=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bd&&n.locale!=="ko"?null:n.data;default:return null}}var r0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!r0[t.type]:n==="textarea"}function Ud(t,n,a,s){yr?Mr?Mr.push(s):Mr=[s]:yr=s,n=Dl(n,"onChange"),0<n.length&&(a=new ko("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var ws=null,Ds=null;function s0(t){fg(t,0)}function Wo(t){var n=Ga(t);if(Mn(n))return t}function Nd(t,n){if(t==="change")return n}var Ld=!1;if(Li){var Gc;if(Li){var Vc="oninput"in document;if(!Vc){var Od=document.createElement("div");Od.setAttribute("oninput","return;"),Vc=typeof Od.oninput=="function"}Gc=Vc}else Gc=!1;Ld=Gc&&(!document.documentMode||9<document.documentMode)}function Pd(){ws&&(ws.detachEvent("onpropertychange",zd),Ds=ws=null)}function zd(t){if(t.propertyName==="value"&&Wo(Ds)){var n=[];Ud(n,Ds,t,Nc(t)),xd(s0,n)}}function o0(t,n,a){t==="focusin"?(Pd(),ws=n,Ds=a,ws.attachEvent("onpropertychange",zd)):t==="focusout"&&Pd()}function l0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wo(Ds)}function c0(t,n){if(t==="click")return Wo(n)}function u0(t,n){if(t==="input"||t==="change")return Wo(n)}function f0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Vn=typeof Object.is=="function"?Object.is:f0;function Us(t,n){if(Vn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ye.call(n,c)||!Vn(t[c],n[c]))return!1}return!0}function Bd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Id(t,n){var a=Bd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Bd(a)}}function Fd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Fd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Hd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=fi(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=fi(t.document)}return n}function kc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var h0=Li&&"documentMode"in document&&11>=document.documentMode,Tr=null,Xc=null,Ns=null,Wc=!1;function Gd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Wc||Tr==null||Tr!==fi(s)||(s=Tr,"selectionStart"in s&&kc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ns&&Us(Ns,s)||(Ns=s,s=Dl(Xc,"onSelect"),0<s.length&&(n=new ko("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Tr)))}function ka(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var br={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionrun:ka("Transition","TransitionRun"),transitionstart:ka("Transition","TransitionStart"),transitioncancel:ka("Transition","TransitionCancel"),transitionend:ka("Transition","TransitionEnd")},qc={},Vd={};Li&&(Vd=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function Xa(t){if(qc[t])return qc[t];if(!br[t])return t;var n=br[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Vd)return qc[t]=n[a];return t}var kd=Xa("animationend"),Xd=Xa("animationiteration"),Wd=Xa("animationstart"),d0=Xa("transitionrun"),p0=Xa("transitionstart"),m0=Xa("transitioncancel"),qd=Xa("transitionend"),Yd=new Map,Yc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yc.push("scrollEnd");function hi(t,n){Yd.set(t,n),b(n,[t])}var jd=new WeakMap;function Jn(t,n){if(typeof t=="object"&&t!==null){var a=jd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Le(n)},jd.set(t,n),n)}return{value:t,source:n,stack:Le(n)}}var $n=[],Ar=0,jc=0;function qo(){for(var t=Ar,n=jc=Ar=0;n<t;){var a=$n[n];$n[n++]=null;var s=$n[n];$n[n++]=null;var c=$n[n];$n[n++]=null;var f=$n[n];if($n[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&Zd(a,c,f)}}function Yo(t,n,a,s){$n[Ar++]=t,$n[Ar++]=n,$n[Ar++]=a,$n[Ar++]=s,jc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Zc(t,n,a,s){return Yo(t,n,a,s),jo(t)}function Rr(t,n){return Yo(t,null,null,n),jo(t)}function Zd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-At(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function jo(t){if(50<io)throw io=0,ef=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Cr={};function g0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,n,a,s){return new g0(t,n,a,s)}function Kc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Oi(t,n){var a=t.alternate;return a===null?(a=kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Kd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Zo(t,n,a,s,c,f){var S=0;if(s=t,typeof t=="function")Kc(t)&&(S=1);else if(typeof t=="string")S=vx(t,a,Nt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=kn(31,a,n,c),t.elementType=D,t.lanes=f,t;case A:return Wa(a.children,c,f,n);case R:S=8,c|=24;break;case M:return t=kn(12,a,n,c|2),t.elementType=M,t.lanes=f,t;case I:return t=kn(13,a,n,c),t.elementType=I,t.lanes=f,t;case H:return t=kn(19,a,n,c),t.elementType=H,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v:case P:S=10;break t;case F:S=9;break t;case U:S=11;break t;case G:S=14;break t;case Q:S=16,s=null;break t}S=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=kn(S,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function Wa(t,n,a,s){return t=kn(7,t,s,n),t.lanes=a,t}function Qc(t,n,a){return t=kn(6,t,null,n),t.lanes=a,t}function Jc(t,n,a){return n=kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var wr=[],Dr=0,Ko=null,Qo=0,ti=[],ei=0,qa=null,Pi=1,zi="";function Ya(t,n){wr[Dr++]=Qo,wr[Dr++]=Ko,Ko=t,Qo=n}function Qd(t,n,a){ti[ei++]=Pi,ti[ei++]=zi,ti[ei++]=qa,qa=t;var s=Pi;t=zi;var c=32-At(s)-1;s&=~(1<<c),a+=1;var f=32-At(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,Pi=1<<32-At(n)+c|a<<c|s,zi=f+t}else Pi=1<<f|a<<c|s,zi=t}function $c(t){t.return!==null&&(Ya(t,1),Qd(t,1,0))}function tu(t){for(;t===Ko;)Ko=wr[--Dr],wr[Dr]=null,Qo=wr[--Dr],wr[Dr]=null;for(;t===qa;)qa=ti[--ei],ti[ei]=null,zi=ti[--ei],ti[ei]=null,Pi=ti[--ei],ti[ei]=null}var Dn=null,Ke=null,Re=!1,ja=null,Ti=!1,eu=Error(r(519));function Za(t){var n=Error(r(418,""));throw Ps(Jn(n,t)),eu}function Jd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[ln]=t,n[je]=s,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<ro.length;a++)xe(ro[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),wn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),_e(n);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),Sr(n,s.value,s.defaultValue,s.children),_e(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||mg(n.textContent,a)?(s.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),s.onScroll!=null&&xe("scroll",n),s.onScrollEnd!=null&&xe("scrollend",n),s.onClick!=null&&(n.onclick=Ul),n=!0):n=!1,n||Za(t)}function $d(t){for(Dn=t.return;Dn;)switch(Dn.tag){case 5:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:Dn=Dn.return}}function Ls(t){if(t!==Dn)return!1;if(!Re)return $d(t),Re=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||vf(t.type,t.memoizedProps)),a=!a),a&&Ke&&Za(t),$d(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Ke=pi(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Ke=null}}else n===27?(n=Ke,Ta(t.type)?(t=Mf,Mf=null,Ke=t):Ke=n):Ke=Dn?pi(t.stateNode.nextSibling):null;return!0}function Os(){Ke=Dn=null,Re=!1}function tp(){var t=ja;return t!==null&&(Bn===null?Bn=t:Bn.push.apply(Bn,t),ja=null),t}function Ps(t){ja===null?ja=[t]:ja.push(t)}var nu=tt(null),Ka=null,Bi=null;function ca(t,n,a){yt(nu,n._currentValue),n._currentValue=a}function Ii(t){t._currentValue=nu.current,xt(nu)}function iu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function au(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var O=0;O<n.length;O++)if(T.context===n[O]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),iu(f.return,a,t),s||(S=null);break t}f=T.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),iu(S,a,t),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===t){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function zs(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=c.type;Vn(c.pendingProps.value,S.value)||(t!==null?t.push(T):t=[T])}}else if(c===gt.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(fo):t=[fo])}c=c.return}t!==null&&au(n,t,a,s),n.flags|=262144}function Jo(t){for(t=t.firstContext;t!==null;){if(!Vn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Qa(t){Ka=t,Bi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return ep(Ka,t)}function $o(t,n){return Ka===null&&Qa(t),ep(t,n)}function ep(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Bi===null){if(t===null)throw Error(r(308));Bi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Bi=Bi.next=n;return a}var _0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},v0=o.unstable_scheduleCallback,x0=o.unstable_NormalPriority,cn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ru(){return{controller:new _0,data:new Map,refCount:0}}function Bs(t){t.refCount--,t.refCount===0&&v0(x0,function(){t.controller.abort()})}var Is=null,su=0,Ur=0,Nr=null;function S0(t,n){if(Is===null){var a=Is=[];su=0,Ur=cf(),Nr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return su++,n.then(np,np),n}function np(){if(--su===0&&Is!==null){Nr!==null&&(Nr.status="fulfilled");var t=Is;Is=null,Ur=0,Nr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function y0(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var ip=L.S;L.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&S0(t,n),ip!==null&&ip(t,n)};var Ja=tt(null);function ou(){var t=Ja.current;return t!==null?t:Ve.pooledCache}function tl(t,n){n===null?yt(Ja,Ja.current):yt(Ja,n.pool)}function ap(){var t=ou();return t===null?null:{parent:cn._currentValue,pool:t}}var Fs=Error(r(460)),rp=Error(r(474)),el=Error(r(542)),lu={then:function(){}};function sp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function nl(){}function op(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(nl,nl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,cp(t),t;default:if(typeof n.status=="string")n.then(nl,nl);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,cp(t),t}throw Hs=n,Fs}}var Hs=null;function lp(){if(Hs===null)throw Error(r(459));var t=Hs;return Hs=null,t}function cp(t){if(t===Fs||t===el)throw Error(r(483))}var ua=!1;function cu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ha(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ue&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=jo(t),Zd(t,null,a),n}return Yo(t,s,n,a),jo(t)}function Gs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Xt(t,a)}}function fu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var hu=!1;function Vs(){if(hu){var t=Nr;if(t!==null)throw t}}function ks(t,n,a,s){hu=!1;var c=t.updateQueue;ua=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var O=T,et=O.next;O.next=null,S===null?f=et:S.next=et,S=O;var pt=t.alternate;pt!==null&&(pt=pt.updateQueue,T=pt.lastBaseUpdate,T!==S&&(T===null?pt.firstBaseUpdate=et:T.next=et,pt.lastBaseUpdate=O))}if(f!==null){var _t=c.baseState;S=0,pt=et=O=null,T=f;do{var rt=T.lane&-536870913,st=rt!==T.lane;if(st?(Me&rt)===rt:(s&rt)===rt){rt!==0&&rt===Ur&&(hu=!0),pt!==null&&(pt=pt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ie=t,te=T;rt=n;var ze=a;switch(te.tag){case 1:if(ie=te.payload,typeof ie=="function"){_t=ie.call(ze,_t,rt);break t}_t=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=te.payload,rt=typeof ie=="function"?ie.call(ze,_t,rt):ie,rt==null)break t;_t=_({},_t,rt);break t;case 2:ua=!0}}rt=T.callback,rt!==null&&(t.flags|=64,st&&(t.flags|=8192),st=c.callbacks,st===null?c.callbacks=[rt]:st.push(rt))}else st={lane:rt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},pt===null?(et=pt=st,O=_t):pt=pt.next=st,S|=rt;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;st=T,T=st.next,st.next=null,c.lastBaseUpdate=st,c.shared.pending=null}}while(!0);pt===null&&(O=_t),c.baseState=O,c.firstBaseUpdate=et,c.lastBaseUpdate=pt,f===null&&(c.shared.lanes=0),Sa|=S,t.lanes=S,t.memoizedState=_t}}function up(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function fp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)up(a[t],n)}var Lr=tt(null),il=tt(0);function hp(t,n){t=Wi,yt(il,t),yt(Lr,n),Wi=t|n.baseLanes}function du(){yt(il,Wi),yt(Lr,Lr.current)}function pu(){Wi=il.current,xt(Lr),xt(il)}var da=0,me=null,Oe=null,nn=null,al=!1,Or=!1,$a=!1,rl=0,Xs=0,Pr=null,M0=0;function $e(){throw Error(r(321))}function mu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Vn(t[a],n[a]))return!1;return!0}function gu(t,n,a,s,c,f){return da=f,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=t===null||t.memoizedState===null?Zp:Kp,$a=!1,f=a(s,c),$a=!1,Or&&(f=pp(n,a,s,c)),dp(t),f}function dp(t){L.H=fl;var n=Oe!==null&&Oe.next!==null;if(da=0,nn=Oe=me=null,al=!1,Xs=0,Pr=null,n)throw Error(r(300));t===null||pn||(t=t.dependencies,t!==null&&Jo(t)&&(pn=!0))}function pp(t,n,a,s){me=t;var c=0;do{if(Or&&(Pr=null),Xs=0,Or=!1,25<=c)throw Error(r(301));if(c+=1,nn=Oe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=w0,f=n(a,s)}while(Or);return f}function E0(){var t=L.H,n=t.useState()[0];return n=typeof n.then=="function"?Ws(n):n,t=t.useState()[0],(Oe!==null?Oe.memoizedState:null)!==t&&(me.flags|=1024),n}function _u(){var t=rl!==0;return rl=0,t}function vu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function xu(t){if(al){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}al=!1}da=0,nn=Oe=me=null,Or=!1,Xs=rl=0,Pr=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?me.memoizedState=nn=t:nn=nn.next=t,nn}function an(){if(Oe===null){var t=me.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var n=nn===null?me.memoizedState:nn.next;if(n!==null)nn=n,Oe=t;else{if(t===null)throw me.alternate===null?Error(r(467)):Error(r(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},nn===null?me.memoizedState=nn=t:nn=nn.next=t}return nn}function Su(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ws(t){var n=Xs;return Xs+=1,Pr===null&&(Pr=[]),t=op(Pr,t,n),n=me,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?Zp:Kp),t}function sl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ws(t);if(t.$$typeof===P)return Tn(t)}throw Error(r(438,String(t)))}function yu(t){var n=null,a=me.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=me.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Su(),me.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=C;return n.index++,a}function Fi(t,n){return typeof n=="function"?n(t):n}function ol(t){var n=an();return Mu(n,Oe,t)}function Mu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=S=null,O=null,et=n,pt=!1;do{var _t=et.lane&-536870913;if(_t!==et.lane?(Me&_t)===_t:(da&_t)===_t){var rt=et.revertLane;if(rt===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),_t===Ur&&(pt=!0);else if((da&rt)===rt){et=et.next,rt===Ur&&(pt=!0);continue}else _t={lane:0,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},O===null?(T=O=_t,S=f):O=O.next=_t,me.lanes|=rt,Sa|=rt;_t=et.action,$a&&a(f,_t),f=et.hasEagerState?et.eagerState:a(f,_t)}else rt={lane:_t,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},O===null?(T=O=rt,S=f):O=O.next=rt,me.lanes|=_t,Sa|=_t;et=et.next}while(et!==null&&et!==n);if(O===null?S=f:O.next=T,!Vn(f,t.memoizedState)&&(pn=!0,pt&&(a=Nr,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=O,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Eu(t){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=t(f,S.action),S=S.next;while(S!==c);Vn(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function mp(t,n,a){var s=me,c=an(),f=Re;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Vn((Oe||c).memoizedState,a);S&&(c.memoizedState=a,pn=!0),c=c.queue;var T=vp.bind(null,s,c,t);if(qs(2048,8,T,[t]),c.getSnapshot!==n||S||nn!==null&&nn.memoizedState.tag&1){if(s.flags|=2048,zr(9,ll(),_p.bind(null,s,c,a,n),null),Ve===null)throw Error(r(349));f||(da&124)!==0||gp(s,n,a)}return a}function gp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=me.updateQueue,n===null?(n=Su(),me.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function _p(t,n,a,s){n.value=a,n.getSnapshot=s,xp(n)&&Sp(t)}function vp(t,n,a){return a(function(){xp(n)&&Sp(t)})}function xp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Vn(t,a)}catch{return!0}}function Sp(t){var n=Rr(t,2);n!==null&&jn(n,t,2)}function Tu(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),$a){it(!0);try{a()}finally{it(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:t},n}function yp(t,n,a,s){return t.baseState=a,Mu(t,Oe,typeof s=="function"?s:Fi)}function T0(t,n,a,s,c){if(ul(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};L.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Mp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Mp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=L.T,S={};L.T=S;try{var T=a(c,s),O=L.S;O!==null&&O(S,T),Ep(t,n,T)}catch(et){bu(t,n,et)}finally{L.T=f}}else try{f=a(c,s),Ep(t,n,f)}catch(et){bu(t,n,et)}}function Ep(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Tp(t,n,s)},function(s){return bu(t,n,s)}):Tp(t,n,a)}function Tp(t,n,a){n.status="fulfilled",n.value=a,bp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Mp(t,a)))}function bu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,bp(n),n=n.next;while(n!==s)}t.action=null}function bp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Ap(t,n){return n}function Rp(t,n){if(Re){var a=Ve.formState;if(a!==null){t:{var s=me;if(Re){if(Ke){e:{for(var c=Ke,f=Ti;c.nodeType!==8;){if(!f){c=null;break e}if(c=pi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ke=pi(c.nextSibling),s=c.data==="F!";break t}}Za(s)}s=!1}s&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ap,lastRenderedState:n},a.queue=s,a=qp.bind(null,me,s),s.dispatch=a,s=Tu(!1),f=Du.bind(null,me,!1,s.queue),s=Pn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=T0.bind(null,me,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Cp(t){var n=an();return wp(n,Oe,t)}function wp(t,n,a){if(n=Mu(t,n,Ap)[0],t=ol(Fi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Ws(n)}catch(S){throw S===Fs?el:S}else s=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(me.flags|=2048,zr(9,ll(),b0.bind(null,c,a),null)),[s,f,t]}function b0(t,n){t.action=n}function Dp(t){var n=an(),a=Oe;if(a!==null)return wp(n,a,t);an(),n=n.memoizedState,a=an();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function zr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=me.updateQueue,n===null&&(n=Su(),me.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function ll(){return{destroy:void 0,resource:void 0}}function Up(){return an().memoizedState}function cl(t,n,a,s){var c=Pn();s=s===void 0?null:s,me.flags|=t,c.memoizedState=zr(1|n,ll(),a,s)}function qs(t,n,a,s){var c=an();s=s===void 0?null:s;var f=c.memoizedState.inst;Oe!==null&&s!==null&&mu(s,Oe.memoizedState.deps)?c.memoizedState=zr(n,f,a,s):(me.flags|=t,c.memoizedState=zr(1|n,f,a,s))}function Np(t,n){cl(8390656,8,t,n)}function Lp(t,n){qs(2048,8,t,n)}function Op(t,n){return qs(4,2,t,n)}function Pp(t,n){return qs(4,4,t,n)}function zp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Bp(t,n,a){a=a!=null?a.concat([t]):null,qs(4,4,zp.bind(null,n,t),a)}function Au(){}function Ip(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&mu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Fp(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&mu(n,s[1]))return s[0];if(s=t(),$a){it(!0);try{t()}finally{it(!1)}}return a.memoizedState=[s,n],s}function Ru(t,n,a){return a===void 0||(da&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Vm(),me.lanes|=t,Sa|=t,a)}function Hp(t,n,a,s){return Vn(a,n)?a:Lr.current!==null?(t=Ru(t,a,s),Vn(t,n)||(pn=!0),t):(da&42)===0?(pn=!0,t.memoizedState=a):(t=Vm(),me.lanes|=t,Sa|=t,n)}function Gp(t,n,a,s,c){var f=K.p;K.p=f!==0&&8>f?f:8;var S=L.T,T={};L.T=T,Du(t,!1,n,a);try{var O=c(),et=L.S;if(et!==null&&et(T,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var pt=y0(O,s);Ys(t,n,pt,Yn(t))}else Ys(t,n,s,Yn(t))}catch(_t){Ys(t,n,{then:function(){},status:"rejected",reason:_t},Yn())}finally{K.p=f,L.T=S}}function A0(){}function Cu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Vp(t).queue;Gp(t,c,n,q,a===null?A0:function(){return kp(t),a(s)})}function Vp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function kp(t){var n=Vp(t).next.queue;Ys(t,n,{},Yn())}function wu(){return Tn(fo)}function Xp(){return an().memoizedState}function Wp(){return an().memoizedState}function R0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Yn();t=fa(a);var s=ha(n,t,a);s!==null&&(jn(s,n,a),Gs(s,n,a)),n={cache:ru()},t.payload=n;return}n=n.return}}function C0(t,n,a){var s=Yn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ul(t)?Yp(n,a):(a=Zc(t,n,a,s),a!==null&&(jn(a,t,s),jp(a,n,s)))}function qp(t,n,a){var s=Yn();Ys(t,n,a,s)}function Ys(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ul(t))Yp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(c.hasEagerState=!0,c.eagerState=T,Vn(T,S))return Yo(t,n,c,0),Ve===null&&qo(),!1}catch{}finally{}if(a=Zc(t,n,c,s),a!==null)return jn(a,t,s),jp(a,n,s),!0}return!1}function Du(t,n,a,s){if(s={lane:2,revertLane:cf(),action:s,hasEagerState:!1,eagerState:null,next:null},ul(t)){if(n)throw Error(r(479))}else n=Zc(t,a,s,2),n!==null&&jn(n,t,2)}function ul(t){var n=t.alternate;return t===me||n!==null&&n===me}function Yp(t,n){Or=al=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function jp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Xt(t,a)}}var fl={readContext:Tn,use:sl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e},Zp={readContext:Tn,use:sl,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:Np,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,cl(4194308,4,zp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return cl(4194308,4,t,n)},useInsertionEffect:function(t,n){cl(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var s=t();if($a){it(!0);try{t()}finally{it(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Pn();if(a!==void 0){var c=a(n);if($a){it(!0);try{a(n)}finally{it(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=C0.bind(null,me,t),[s.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=Tu(t);var n=t.queue,a=qp.bind(null,me,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Au,useDeferredValue:function(t,n){var a=Pn();return Ru(a,t,n)},useTransition:function(){var t=Tu(!1);return t=Gp.bind(null,me,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=me,c=Pn();if(Re){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ve===null)throw Error(r(349));(Me&124)!==0||gp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Np(vp.bind(null,s,f,t),[t]),s.flags|=2048,zr(9,ll(),_p.bind(null,s,f,a,n),null),a},useId:function(){var t=Pn(),n=Ve.identifierPrefix;if(Re){var a=zi,s=Pi;a=(s&~(1<<32-At(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=rl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=M0++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:wu,useFormState:Rp,useActionState:Rp,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Du.bind(null,me,!0,a),a.dispatch=n,[t,n]},useMemoCache:yu,useCacheRefresh:function(){return Pn().memoizedState=R0.bind(null,me)}},Kp={readContext:Tn,use:sl,useCallback:Ip,useContext:Tn,useEffect:Lp,useImperativeHandle:Bp,useInsertionEffect:Op,useLayoutEffect:Pp,useMemo:Fp,useReducer:ol,useRef:Up,useState:function(){return ol(Fi)},useDebugValue:Au,useDeferredValue:function(t,n){var a=an();return Hp(a,Oe.memoizedState,t,n)},useTransition:function(){var t=ol(Fi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:Ws(t),n]},useSyncExternalStore:mp,useId:Xp,useHostTransitionStatus:wu,useFormState:Cp,useActionState:Cp,useOptimistic:function(t,n){var a=an();return yp(a,Oe,t,n)},useMemoCache:yu,useCacheRefresh:Wp},w0={readContext:Tn,use:sl,useCallback:Ip,useContext:Tn,useEffect:Lp,useImperativeHandle:Bp,useInsertionEffect:Op,useLayoutEffect:Pp,useMemo:Fp,useReducer:Eu,useRef:Up,useState:function(){return Eu(Fi)},useDebugValue:Au,useDeferredValue:function(t,n){var a=an();return Oe===null?Ru(a,t,n):Hp(a,Oe.memoizedState,t,n)},useTransition:function(){var t=Eu(Fi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:Ws(t),n]},useSyncExternalStore:mp,useId:Xp,useHostTransitionStatus:wu,useFormState:Dp,useActionState:Dp,useOptimistic:function(t,n){var a=an();return Oe!==null?yp(a,Oe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:yu,useCacheRefresh:Wp},Br=null,js=0;function hl(t){var n=js;return js+=1,Br===null&&(Br=[]),op(Br,t,n)}function Zs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function dl(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Qp(t){var n=t._init;return n(t._payload)}function Jp(t){function n(j,k){if(t){var $=j.deletions;$===null?(j.deletions=[k],j.flags|=16):$.push(k)}}function a(j,k){if(!t)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function s(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function c(j,k){return j=Oi(j,k),j.index=0,j.sibling=null,j}function f(j,k,$){return j.index=$,t?($=j.alternate,$!==null?($=$.index,$<k?(j.flags|=67108866,k):$):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function S(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function T(j,k,$,mt){return k===null||k.tag!==6?(k=Qc($,j.mode,mt),k.return=j,k):(k=c(k,$),k.return=j,k)}function O(j,k,$,mt){var kt=$.type;return kt===A?pt(j,k,$.props.children,mt,$.key):k!==null&&(k.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===Q&&Qp(kt)===k.type)?(k=c(k,$.props),Zs(k,$),k.return=j,k):(k=Zo($.type,$.key,$.props,null,j.mode,mt),Zs(k,$),k.return=j,k)}function et(j,k,$,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=Jc($,j.mode,mt),k.return=j,k):(k=c(k,$.children||[]),k.return=j,k)}function pt(j,k,$,mt,kt){return k===null||k.tag!==7?(k=Wa($,j.mode,mt,kt),k.return=j,k):(k=c(k,$),k.return=j,k)}function _t(j,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Qc(""+k,j.mode,$),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return $=Zo(k.type,k.key,k.props,null,j.mode,$),Zs($,k),$.return=j,$;case E:return k=Jc(k,j.mode,$),k.return=j,k;case Q:var mt=k._init;return k=mt(k._payload),_t(j,k,$)}if(ft(k)||at(k))return k=Wa(k,j.mode,$,null),k.return=j,k;if(typeof k.then=="function")return _t(j,hl(k),$);if(k.$$typeof===P)return _t(j,$o(j,k),$);dl(j,k)}return null}function rt(j,k,$,mt){var kt=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return kt!==null?null:T(j,k,""+$,mt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case y:return $.key===kt?O(j,k,$,mt):null;case E:return $.key===kt?et(j,k,$,mt):null;case Q:return kt=$._init,$=kt($._payload),rt(j,k,$,mt)}if(ft($)||at($))return kt!==null?null:pt(j,k,$,mt,null);if(typeof $.then=="function")return rt(j,k,hl($),mt);if($.$$typeof===P)return rt(j,k,$o(j,$),mt);dl(j,$)}return null}function st(j,k,$,mt,kt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return j=j.get($)||null,T(k,j,""+mt,kt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case y:return j=j.get(mt.key===null?$:mt.key)||null,O(k,j,mt,kt);case E:return j=j.get(mt.key===null?$:mt.key)||null,et(k,j,mt,kt);case Q:var ge=mt._init;return mt=ge(mt._payload),st(j,k,$,mt,kt)}if(ft(mt)||at(mt))return j=j.get($)||null,pt(k,j,mt,kt,null);if(typeof mt.then=="function")return st(j,k,$,hl(mt),kt);if(mt.$$typeof===P)return st(j,k,$,$o(k,mt),kt);dl(k,mt)}return null}function ie(j,k,$,mt){for(var kt=null,ge=null,jt=k,ne=k=0,gn=null;jt!==null&&ne<$.length;ne++){jt.index>ne?(gn=jt,jt=null):gn=jt.sibling;var be=rt(j,jt,$[ne],mt);if(be===null){jt===null&&(jt=gn);break}t&&jt&&be.alternate===null&&n(j,jt),k=f(be,k,ne),ge===null?kt=be:ge.sibling=be,ge=be,jt=gn}if(ne===$.length)return a(j,jt),Re&&Ya(j,ne),kt;if(jt===null){for(;ne<$.length;ne++)jt=_t(j,$[ne],mt),jt!==null&&(k=f(jt,k,ne),ge===null?kt=jt:ge.sibling=jt,ge=jt);return Re&&Ya(j,ne),kt}for(jt=s(jt);ne<$.length;ne++)gn=st(jt,j,ne,$[ne],mt),gn!==null&&(t&&gn.alternate!==null&&jt.delete(gn.key===null?ne:gn.key),k=f(gn,k,ne),ge===null?kt=gn:ge.sibling=gn,ge=gn);return t&&jt.forEach(function(wa){return n(j,wa)}),Re&&Ya(j,ne),kt}function te(j,k,$,mt){if($==null)throw Error(r(151));for(var kt=null,ge=null,jt=k,ne=k=0,gn=null,be=$.next();jt!==null&&!be.done;ne++,be=$.next()){jt.index>ne?(gn=jt,jt=null):gn=jt.sibling;var wa=rt(j,jt,be.value,mt);if(wa===null){jt===null&&(jt=gn);break}t&&jt&&wa.alternate===null&&n(j,jt),k=f(wa,k,ne),ge===null?kt=wa:ge.sibling=wa,ge=wa,jt=gn}if(be.done)return a(j,jt),Re&&Ya(j,ne),kt;if(jt===null){for(;!be.done;ne++,be=$.next())be=_t(j,be.value,mt),be!==null&&(k=f(be,k,ne),ge===null?kt=be:ge.sibling=be,ge=be);return Re&&Ya(j,ne),kt}for(jt=s(jt);!be.done;ne++,be=$.next())be=st(jt,j,ne,be.value,mt),be!==null&&(t&&be.alternate!==null&&jt.delete(be.key===null?ne:be.key),k=f(be,k,ne),ge===null?kt=be:ge.sibling=be,ge=be);return t&&jt.forEach(function(Dx){return n(j,Dx)}),Re&&Ya(j,ne),kt}function ze(j,k,$,mt){if(typeof $=="object"&&$!==null&&$.type===A&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case y:t:{for(var kt=$.key;k!==null;){if(k.key===kt){if(kt=$.type,kt===A){if(k.tag===7){a(j,k.sibling),mt=c(k,$.props.children),mt.return=j,j=mt;break t}}else if(k.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===Q&&Qp(kt)===k.type){a(j,k.sibling),mt=c(k,$.props),Zs(mt,$),mt.return=j,j=mt;break t}a(j,k);break}else n(j,k);k=k.sibling}$.type===A?(mt=Wa($.props.children,j.mode,mt,$.key),mt.return=j,j=mt):(mt=Zo($.type,$.key,$.props,null,j.mode,mt),Zs(mt,$),mt.return=j,j=mt)}return S(j);case E:t:{for(kt=$.key;k!==null;){if(k.key===kt)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(j,k.sibling),mt=c(k,$.children||[]),mt.return=j,j=mt;break t}else{a(j,k);break}else n(j,k);k=k.sibling}mt=Jc($,j.mode,mt),mt.return=j,j=mt}return S(j);case Q:return kt=$._init,$=kt($._payload),ze(j,k,$,mt)}if(ft($))return ie(j,k,$,mt);if(at($)){if(kt=at($),typeof kt!="function")throw Error(r(150));return $=kt.call($),te(j,k,$,mt)}if(typeof $.then=="function")return ze(j,k,hl($),mt);if($.$$typeof===P)return ze(j,k,$o(j,$),mt);dl(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(j,k.sibling),mt=c(k,$),mt.return=j,j=mt):(a(j,k),mt=Qc($,j.mode,mt),mt.return=j,j=mt),S(j)):a(j,k)}return function(j,k,$,mt){try{js=0;var kt=ze(j,k,$,mt);return Br=null,kt}catch(jt){if(jt===Fs||jt===el)throw jt;var ge=kn(29,jt,null,j.mode);return ge.lanes=mt,ge.return=j,ge}finally{}}}var Ir=Jp(!0),$p=Jp(!1),ni=tt(null),bi=null;function pa(t){var n=t.alternate;yt(un,un.current&1),yt(ni,t),bi===null&&(n===null||Lr.current!==null||n.memoizedState!==null)&&(bi=t)}function tm(t){if(t.tag===22){if(yt(un,un.current),yt(ni,t),bi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(bi=t)}}else ma()}function ma(){yt(un,un.current),yt(ni,ni.current)}function Hi(t){xt(ni),bi===t&&(bi=null),xt(un)}var un=tt(0);function pl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||yf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Uu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Nu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Yn(),c=fa(s);c.payload=n,a!=null&&(c.callback=a),n=ha(t,c,s),n!==null&&(jn(n,t,s),Gs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Yn(),c=fa(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ha(t,c,s),n!==null&&(jn(n,t,s),Gs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Yn(),s=fa(a);s.tag=2,n!=null&&(s.callback=n),n=ha(t,s,a),n!==null&&(jn(n,t,a),Gs(n,t,a))}};function em(t,n,a,s,c,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Us(a,s)||!Us(c,f):!0}function nm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Nu.enqueueReplaceState(n,n.state,null)}function tr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var ml=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function im(t){ml(t)}function am(t){console.error(t)}function rm(t){ml(t)}function gl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function sm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Lu(t,n,a){return a=fa(a),a.tag=3,a.payload={element:null},a.callback=function(){gl(t,n)},a}function om(t){return t=fa(t),t.tag=3,t}function lm(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){sm(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){sm(n,a,s),typeof c!="function"&&(ya===null?ya=new Set([this]):ya.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function D0(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&zs(n,a,c,!0),a=ni.current,a!==null){switch(a.tag){case 13:return bi===null?af():a.alternate===null&&Qe===0&&(Qe=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===lu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),sf(t,s,c)),!1;case 22:return a.flags|=65536,s===lu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),sf(t,s,c)),!1}throw Error(r(435,a.tag))}return sf(t,s,c),af(),!1}if(Re)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==eu&&(t=Error(r(422),{cause:s}),Ps(Jn(t,a)))):(s!==eu&&(n=Error(r(423),{cause:s}),Ps(Jn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Jn(s,a),c=Lu(t.stateNode,s,c),fu(t,c),Qe!==4&&(Qe=2)),!1;var f=Error(r(520),{cause:s});if(f=Jn(f,a),no===null?no=[f]:no.push(f),Qe!==4&&(Qe=2),n===null)return!0;s=Jn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Lu(a.stateNode,s,t),fu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ya===null||!ya.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=om(c),lm(c,t,a,s),fu(a,c),!1}a=a.return}while(a!==null);return!1}var cm=Error(r(461)),pn=!1;function xn(t,n,a,s){n.child=t===null?$p(n,null,a,s):Ir(n,t.child,a,s)}function um(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var T in s)T!=="ref"&&(S[T]=s[T])}else S=s;return Qa(n),s=gu(t,n,a,S,f,c),T=_u(),t!==null&&!pn?(vu(t,n,c),Gi(t,n,c)):(Re&&T&&$c(n),n.flags|=1,xn(t,n,s,c),n.child)}function fm(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Kc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,hm(t,n,f,s,c)):(t=Zo(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Gu(t,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Us,a(S,s)&&t.ref===n.ref)return Gi(t,n,c)}return n.flags|=1,t=Oi(f,s),t.ref=n.ref,t.return=n,n.child=t}function hm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Us(f,s)&&t.ref===n.ref)if(pn=!1,n.pendingProps=s=f,Gu(t,c))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,Gi(t,n,c)}return Ou(t,n,a,s,c)}function dm(t,n,a){var s=n.pendingProps,c=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return pm(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&tl(n,f!==null?f.cachePool:null),f!==null?hp(n,f):du(),tm(n);else return n.lanes=n.childLanes=536870912,pm(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(tl(n,f.cachePool),hp(n,f),ma(),n.memoizedState=null):(t!==null&&tl(n,null),du(),ma());return xn(t,n,c,a),n.child}function pm(t,n,a,s){var c=ou();return c=c===null?null:{parent:cn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&tl(n,null),du(),tm(n),t!==null&&zs(t,n,s,!0),null}function _l(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Ou(t,n,a,s,c){return Qa(n),a=gu(t,n,a,s,void 0,c),s=_u(),t!==null&&!pn?(vu(t,n,c),Gi(t,n,c)):(Re&&s&&$c(n),n.flags|=1,xn(t,n,a,c),n.child)}function mm(t,n,a,s,c,f){return Qa(n),n.updateQueue=null,a=pp(n,s,a,c),dp(t),s=_u(),t!==null&&!pn?(vu(t,n,f),Gi(t,n,f)):(Re&&s&&$c(n),n.flags|=1,xn(t,n,a,f),n.child)}function gm(t,n,a,s,c){if(Qa(n),n.stateNode===null){var f=Cr,S=a.contextType;typeof S=="object"&&S!==null&&(f=Tn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Nu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},cu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Tn(S):Cr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Uu(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Nu.enqueueReplaceState(f,f.state,null),ks(n,s,f,c),Vs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,O=tr(a,T);f.props=O;var et=f.context,pt=a.contextType;S=Cr,typeof pt=="object"&&pt!==null&&(S=Tn(pt));var _t=a.getDerivedStateFromProps;pt=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||et!==S)&&nm(n,f,s,S),ua=!1;var rt=n.memoizedState;f.state=rt,ks(n,s,f,c),Vs(),et=n.memoizedState,T||rt!==et||ua?(typeof _t=="function"&&(Uu(n,a,_t,s),et=n.memoizedState),(O=ua||em(n,a,O,s,rt,et,S))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=et),f.props=s,f.state=et,f.context=S,s=O):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,uu(t,n),S=n.memoizedProps,pt=tr(a,S),f.props=pt,_t=n.pendingProps,rt=f.context,et=a.contextType,O=Cr,typeof et=="object"&&et!==null&&(O=Tn(et)),T=a.getDerivedStateFromProps,(et=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==_t||rt!==O)&&nm(n,f,s,O),ua=!1,rt=n.memoizedState,f.state=rt,ks(n,s,f,c),Vs();var st=n.memoizedState;S!==_t||rt!==st||ua||t!==null&&t.dependencies!==null&&Jo(t.dependencies)?(typeof T=="function"&&(Uu(n,a,T,s),st=n.memoizedState),(pt=ua||em(n,a,pt,s,rt,st,O)||t!==null&&t.dependencies!==null&&Jo(t.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,st,O),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,st,O)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&rt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&rt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=st),f.props=s,f.state=st,f.context=O,s=pt):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&rt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&rt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,_l(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Ir(n,t.child,null,c),n.child=Ir(n,null,a,c)):xn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Gi(t,n,c),t}function _m(t,n,a,s){return Os(),n.flags|=256,xn(t,n,a,s),n.child}var Pu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zu(t){return{baseLanes:t,cachePool:ap()}}function Bu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ii),t}function vm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(un.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Re){if(c?pa(n):ma(),Re){var T=Ke,O;if(O=T){t:{for(O=T,T=Ti;O.nodeType!==8;){if(!T){T=null;break t}if(O=pi(O.nextSibling),O===null){T=null;break t}}T=O}T!==null?(n.memoizedState={dehydrated:T,treeContext:qa!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},O=kn(18,null,null,0),O.stateNode=T,O.return=n,n.child=O,Dn=n,Ke=null,O=!0):O=!1}O||Za(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return yf(T)?n.lanes=32:n.lanes=536870912,null;Hi(n)}return T=s.children,s=s.fallback,c?(ma(),c=n.mode,T=vl({mode:"hidden",children:T},c),s=Wa(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,c=n.child,c.memoizedState=zu(a),c.childLanes=Bu(t,S,a),n.memoizedState=Pu,s):(pa(n),Iu(n,T))}if(O=t.memoizedState,O!==null&&(T=O.dehydrated,T!==null)){if(f)n.flags&256?(pa(n),n.flags&=-257,n=Fu(t,n,a)):n.memoizedState!==null?(ma(),n.child=t.child,n.flags|=128,n=null):(ma(),c=s.fallback,T=n.mode,s=vl({mode:"visible",children:s.children},T),c=Wa(c,T,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Ir(n,t.child,null,a),s=n.child,s.memoizedState=zu(a),s.childLanes=Bu(t,S,a),n.memoizedState=Pu,n=c);else if(pa(n),yf(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var et=S.dgst;S=et,s=Error(r(419)),s.stack="",s.digest=S,Ps({value:s,source:null,stack:null}),n=Fu(t,n,a)}else if(pn||zs(t,n,a,!1),S=(a&t.childLanes)!==0,pn||S){if(S=Ve,S!==null&&(s=a&-a,s=(s&42)!==0?1:ae(s),s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==O.retryLane))throw O.retryLane=s,Rr(t,s),jn(S,t,s),cm;T.data==="$?"||af(),n=Fu(t,n,a)}else T.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=O.treeContext,Ke=pi(T.nextSibling),Dn=n,Re=!0,ja=null,Ti=!1,t!==null&&(ti[ei++]=Pi,ti[ei++]=zi,ti[ei++]=qa,Pi=t.id,zi=t.overflow,qa=n),n=Iu(n,s.children),n.flags|=4096);return n}return c?(ma(),c=s.fallback,T=n.mode,O=t.child,et=O.sibling,s=Oi(O,{mode:"hidden",children:s.children}),s.subtreeFlags=O.subtreeFlags&65011712,et!==null?c=Oi(et,c):(c=Wa(c,T,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,T=t.child.memoizedState,T===null?T=zu(a):(O=T.cachePool,O!==null?(et=cn._currentValue,O=O.parent!==et?{parent:et,pool:et}:O):O=ap(),T={baseLanes:T.baseLanes|a,cachePool:O}),c.memoizedState=T,c.childLanes=Bu(t,S,a),n.memoizedState=Pu,s):(pa(n),a=t.child,t=a.sibling,a=Oi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Iu(t,n){return n=vl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function vl(t,n){return t=kn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Fu(t,n,a){return Ir(n,t.child,null,a),t=Iu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function xm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),iu(t.return,n,a)}function Hu(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Sm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(xn(t,n,s.children,a),s=un.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xm(t,a,n);else if(t.tag===19)xm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(yt(un,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&pl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Hu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&pl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Hu(n,!0,a,null,f);break;case"together":Hu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Gi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Sa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(zs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Oi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Oi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Gu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Jo(t)))}function U0(t,n,a){switch(n.tag){case 3:Et(n,n.stateNode.containerInfo),ca(n,cn,t.memoizedState.cache),Os();break;case 27:case 5:qt(n);break;case 4:Et(n,n.stateNode.containerInfo);break;case 10:ca(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?vm(t,n,a):(pa(n),t=Gi(t,n,a),t!==null?t.sibling:null);pa(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(zs(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Sm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(un,un.current),s)break;return null;case 22:case 23:return n.lanes=0,dm(t,n,a);case 24:ca(n,cn,t.memoizedState.cache)}return Gi(t,n,a)}function ym(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!Gu(t,a)&&(n.flags&128)===0)return pn=!1,U0(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,Re&&(n.flags&1048576)!==0&&Qd(n,Qo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Kc(s)?(t=tr(s,t),n.tag=1,n=gm(null,n,s,t,a)):(n.tag=0,n=Ou(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===U){n.tag=11,n=um(null,n,s,t,a);break t}else if(c===G){n.tag=14,n=fm(null,n,s,t,a);break t}}throw n=dt(s)||s,Error(r(306,n,""))}}return n;case 0:return Ou(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=tr(s,n.pendingProps),gm(t,n,s,c,a);case 3:t:{if(Et(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,uu(t,n),ks(n,s,null,a);var S=n.memoizedState;if(s=S.cache,ca(n,cn,s),s!==f.cache&&au(n,[cn],a,!0),Vs(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=_m(t,n,s,a);break t}else if(s!==c){c=Jn(Error(r(424)),n),Ps(c),n=_m(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ke=pi(t.firstChild),Dn=n,Re=!0,ja=null,Ti=!0,a=$p(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Os(),s===c){n=Gi(t,n,a);break t}xn(t,n,s,a)}n=n.child}return n;case 26:return _l(t,n),t===null?(a=bg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,t=n.pendingProps,s=Nl(nt.current).createElement(a),s[ln]=n,s[je]=t,yn(s,a,t),en(s),n.stateNode=s):n.memoizedState=bg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return qt(n),t===null&&Re&&(s=n.stateNode=Mg(n.type,n.pendingProps,nt.current),Dn=n,Ti=!0,c=Ke,Ta(n.type)?(Mf=c,Ke=pi(s.firstChild)):Ke=c),xn(t,n,n.pendingProps.children,a),_l(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Re&&((c=s=Ke)&&(s=rx(s,n.type,n.pendingProps,Ti),s!==null?(n.stateNode=s,Dn=n,Ke=pi(s.firstChild),Ti=!1,c=!0):c=!1),c||Za(n)),qt(n),c=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,s=f.children,vf(c,f)?s=null:S!==null&&vf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=gu(t,n,E0,null,null,a),fo._currentValue=c),_l(t,n),xn(t,n,s,a),n.child;case 6:return t===null&&Re&&((t=a=Ke)&&(a=sx(a,n.pendingProps,Ti),a!==null?(n.stateNode=a,Dn=n,Ke=null,t=!0):t=!1),t||Za(n)),null;case 13:return vm(t,n,a);case 4:return Et(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Ir(n,null,s,a):xn(t,n,s,a),n.child;case 11:return um(t,n,n.type,n.pendingProps,a);case 7:return xn(t,n,n.pendingProps,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ca(n,n.type,s.value),xn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,Qa(n),c=Tn(c),s=s(c),n.flags|=1,xn(t,n,s,a),n.child;case 14:return fm(t,n,n.type,n.pendingProps,a);case 15:return hm(t,n,n.type,n.pendingProps,a);case 19:return Sm(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=vl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Oi(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return dm(t,n,a);case 24:return Qa(n),s=Tn(cn),t===null?(c=ou(),c===null&&(c=Ve,f=ru(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},cu(n),ca(n,cn,c)):((t.lanes&a)!==0&&(uu(t,n),ks(n,null,null,a),Vs()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ca(n,cn,s)):(s=f.cache,ca(n,cn,s),s!==c.cache&&au(n,[cn],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Vi(t){t.flags|=4}function Mm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Dg(n)){if(n=ni.current,n!==null&&((Me&4194048)===Me?bi!==null:(Me&62914560)!==Me&&(Me&536870912)===0||n!==bi))throw Hs=lu,rp;t.flags|=8192}}function xl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ct():536870912,t.lanes|=n,Vr|=n)}function Ks(t,n){if(!Re)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function N0(t,n,a){var s=n.pendingProps;switch(tu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ii(cn),Zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ls(n)?Vi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,tp())),qe(n),null;case 26:return a=n.memoizedState,t===null?(Vi(n),a!==null?(qe(n),Mm(n,a)):(qe(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Vi(n),qe(n),Mm(n,a)):(qe(n),n.flags&=-16777217):(t.memoizedProps!==s&&Vi(n),qe(n),n.flags&=-16777217),null;case 27:ce(n),a=nt.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Vi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}t=Nt.current,Ls(n)?Jd(n):(t=Mg(c,s,a),n.stateNode=t,Vi(n))}return qe(n),null;case 5:if(ce(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Vi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(t=Nt.current,Ls(n))Jd(n);else{switch(c=Nl(nt.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[ln]=n,t[je]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(yn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Vi(n)}}return qe(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Vi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=nt.current,Ls(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=Dn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[ln]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||mg(t.nodeValue,a)),t||Za(n)}else t=Nl(t).createTextNode(s),t[ln]=n,n.stateNode=t}return qe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ls(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[ln]=n}else Os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=tp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Hi(n),n):(Hi(n),null)}if(Hi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),xl(n,n.updateQueue),qe(n),null;case 4:return Zt(),t===null&&df(n.stateNode.containerInfo),qe(n),null;case 10:return Ii(n.type),qe(n),null;case 19:if(xt(un),c=n.memoizedState,c===null)return qe(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)Ks(c,!1);else{if(Qe!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=pl(t),f!==null){for(n.flags|=128,Ks(c,!1),t=f.updateQueue,n.updateQueue=t,xl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Kd(a,t),a=a.sibling;return yt(un,un.current&1|2),n.child}t=t.sibling}c.tail!==null&&zt()>Ml&&(n.flags|=128,s=!0,Ks(c,!1),n.lanes=4194304)}else{if(!s)if(t=pl(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,xl(n,t),Ks(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Re)return qe(n),null}else 2*zt()-c.renderingStartTime>Ml&&a!==536870912&&(n.flags|=128,s=!0,Ks(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=zt(),n.sibling=null,t=un.current,yt(un,s?t&1|2:t&1),n):(qe(n),null);case 22:case 23:return Hi(n),pu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&xl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&xt(Ja),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ii(cn),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function L0(t,n){switch(tu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ii(cn),Zt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ce(n),null;case 13:if(Hi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Os()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return xt(un),null;case 4:return Zt(),null;case 10:return Ii(n.type),null;case 22:case 23:return Hi(n),pu(),t!==null&&xt(Ja),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ii(cn),null;case 25:return null;default:return null}}function Em(t,n){switch(tu(n),n.tag){case 3:Ii(cn),Zt();break;case 26:case 27:case 5:ce(n);break;case 4:Zt();break;case 13:Hi(n);break;case 19:xt(un);break;case 10:Ii(n.type);break;case 22:case 23:Hi(n),pu(),t!==null&&xt(Ja);break;case 24:Ii(cn)}}function Qs(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(T){Fe(n,n.return,T)}}function ga(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var S=s.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,c=n;var O=a,et=T;try{et()}catch(pt){Fe(c,O,pt)}}}s=s.next}while(s!==f)}}catch(pt){Fe(n,n.return,pt)}}function Tm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{fp(n,a)}catch(s){Fe(t,t.return,s)}}}function bm(t,n,a){a.props=tr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Fe(t,n,s)}}function Js(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Fe(t,n,c)}}function Ai(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Fe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Fe(t,n,c)}else a.current=null}function Am(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Fe(t,t.return,c)}}function Vu(t,n,a){try{var s=t.stateNode;tx(s,t.type,a,n),s[je]=n}catch(c){Fe(t,t.return,c)}}function Rm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ta(t.type)||t.tag===4}function ku(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Rm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ta(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ul));else if(s!==4&&(s===27&&Ta(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Xu(t,n,a),t=t.sibling;t!==null;)Xu(t,n,a),t=t.sibling}function Sl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ta(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Sl(t,n,a),t=t.sibling;t!==null;)Sl(t,n,a),t=t.sibling}function Cm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);yn(n,s,a),n[ln]=t,n[je]=a}catch(f){Fe(t,t.return,f)}}var ki=!1,tn=!1,Wu=!1,wm=typeof WeakSet=="function"?WeakSet:Set,mn=null;function O0(t,n){if(t=t.containerInfo,gf=Il,t=Hd(t),kc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,T=-1,O=-1,et=0,pt=0,_t=t,rt=null;e:for(;;){for(var st;_t!==a||c!==0&&_t.nodeType!==3||(T=S+c),_t!==f||s!==0&&_t.nodeType!==3||(O=S+s),_t.nodeType===3&&(S+=_t.nodeValue.length),(st=_t.firstChild)!==null;)rt=_t,_t=st;for(;;){if(_t===t)break e;if(rt===a&&++et===c&&(T=S),rt===f&&++pt===s&&(O=S),(st=_t.nextSibling)!==null)break;_t=rt,rt=_t.parentNode}_t=st}a=T===-1||O===-1?null:{start:T,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(_f={focusedElem:t,selectionRange:a},Il=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ie=tr(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(ie,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(te){Fe(a,a.return,te)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Sf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Sf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function Dm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:_a(t,a),s&4&&Qs(5,a);break;case 1:if(_a(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Fe(a,a.return,S)}else{var c=tr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Fe(a,a.return,S)}}s&64&&Tm(a),s&512&&Js(a,a.return);break;case 3:if(_a(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{fp(t,n)}catch(S){Fe(a,a.return,S)}}break;case 27:n===null&&s&4&&Cm(a);case 26:case 5:_a(t,a),n===null&&s&4&&Am(a),s&512&&Js(a,a.return);break;case 12:_a(t,a);break;case 13:_a(t,a),s&4&&Lm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=k0.bind(null,a),ox(t,a))));break;case 22:if(s=a.memoizedState!==null||ki,!s){n=n!==null&&n.memoizedState!==null||tn,c=ki;var f=tn;ki=s,(tn=n)&&!f?va(t,a,(a.subtreeFlags&8772)!==0):_a(t,a),ki=c,tn=f}break;case 30:break;default:_a(t,a)}}function Um(t){var n=t.alternate;n!==null&&(t.alternate=null,Um(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&xr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var We=null,zn=!1;function Xi(t,n,a){for(a=a.child;a!==null;)Nm(t,n,a),a=a.sibling}function Nm(t,n,a){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(J,a)}catch{}switch(a.tag){case 26:tn||Ai(a,n),Xi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tn||Ai(a,n);var s=We,c=zn;Ta(a.type)&&(We=a.stateNode,zn=!1),Xi(t,n,a),oo(a.stateNode),We=s,zn=c;break;case 5:tn||Ai(a,n);case 6:if(s=We,c=zn,We=null,Xi(t,n,a),We=s,zn=c,We!==null)if(zn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{We.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:We!==null&&(zn?(t=We,Sg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),go(t)):Sg(We,a.stateNode));break;case 4:s=We,c=zn,We=a.stateNode.containerInfo,zn=!0,Xi(t,n,a),We=s,zn=c;break;case 0:case 11:case 14:case 15:tn||ga(2,a,n),tn||ga(4,a,n),Xi(t,n,a);break;case 1:tn||(Ai(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&bm(a,n,s)),Xi(t,n,a);break;case 21:Xi(t,n,a);break;case 22:tn=(s=tn)||a.memoizedState!==null,Xi(t,n,a),tn=s;break;default:Xi(t,n,a)}}function Lm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{go(t)}catch(a){Fe(n,n.return,a)}}function P0(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new wm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new wm),n;default:throw Error(r(435,t.tag))}}function qu(t,n){var a=P0(t);n.forEach(function(s){var c=X0.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:if(Ta(T.type)){We=T.stateNode,zn=!1;break t}break;case 5:We=T.stateNode,zn=!1;break t;case 3:case 4:We=T.stateNode.containerInfo,zn=!0;break t}T=T.return}if(We===null)throw Error(r(160));Nm(f,S,c),We=null,zn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Om(n,t),n=n.sibling}var di=null;function Om(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),Wn(t),s&4&&(ga(3,t,t.return),Qs(3,t),ga(5,t,t.return));break;case 1:Xn(n,t),Wn(t),s&512&&(tn||a===null||Ai(a,a.return)),s&64&&ki&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=di;if(Xn(n,t),Wn(t),s&512&&(tn||a===null||Ai(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ei]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),yn(f,s,a),f[ln]=t,en(f),s=f;break t;case"link":var S=Cg("link","href",c).get(s+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}f=c.createElement(s),yn(f,s,a),c.head.appendChild(f);break;case"meta":if(S=Cg("meta","content",c).get(s+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}f=c.createElement(s),yn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[ln]=t,en(f),s=f}t.stateNode=s}else wg(c,t.type,t.stateNode);else t.stateNode=Rg(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?wg(c,t.type,t.stateNode):Rg(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Vu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),Wn(t),s&512&&(tn||a===null||Ai(a,a.return)),a!==null&&s&4&&Vu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),Wn(t),s&512&&(tn||a===null||Ai(a,a.return)),t.flags&32){c=t.stateNode;try{Ln(c,"")}catch(st){Fe(t,t.return,st)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Vu(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Wu=!0);break;case 6:if(Xn(n,t),Wn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(st){Fe(t,t.return,st)}}break;case 3:if(Pl=null,c=di,di=Ll(n.containerInfo),Xn(n,t),di=c,Wn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{go(n.containerInfo)}catch(st){Fe(t,t.return,st)}Wu&&(Wu=!1,Pm(t));break;case 4:s=di,di=Ll(t.stateNode.containerInfo),Xn(n,t),Wn(t),di=s;break;case 12:Xn(n,t),Wn(t);break;case 13:Xn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ju=zt()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,qu(t,s)));break;case 22:c=t.memoizedState!==null;var O=a!==null&&a.memoizedState!==null,et=ki,pt=tn;if(ki=et||c,tn=pt||O,Xn(n,t),tn=pt,ki=et,Wn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||O||ki||tn||er(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){O=a=n;try{if(f=O.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=O.stateNode;var _t=O.memoizedProps.style,rt=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;T.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(st){Fe(O,O.return,st)}}}else if(n.tag===6){if(a===null){O=n;try{O.stateNode.nodeValue=c?"":O.memoizedProps}catch(st){Fe(O,O.return,st)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,qu(t,a))));break;case 19:Xn(n,t),Wn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,qu(t,s)));break;case 30:break;case 21:break;default:Xn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Rm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=ku(t);Sl(t,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(Ln(S,""),a.flags&=-33);var T=ku(t);Sl(t,T,S);break;case 3:case 4:var O=a.stateNode.containerInfo,et=ku(t);Xu(t,et,O);break;default:throw Error(r(161))}}catch(pt){Fe(t,t.return,pt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Pm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Pm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function _a(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Dm(t,n.alternate,n),n=n.sibling}function er(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ga(4,n,n.return),er(n);break;case 1:Ai(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&bm(n,n.return,a),er(n);break;case 27:oo(n.stateNode);case 26:case 5:Ai(n,n.return),er(n);break;case 22:n.memoizedState===null&&er(n);break;case 30:er(n);break;default:er(n)}t=t.sibling}}function va(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:va(c,f,a),Qs(4,f);break;case 1:if(va(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(et){Fe(s,s.return,et)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var O=c.shared.hiddenCallbacks;if(O!==null)for(c.shared.hiddenCallbacks=null,c=0;c<O.length;c++)up(O[c],T)}catch(et){Fe(s,s.return,et)}}a&&S&64&&Tm(f),Js(f,f.return);break;case 27:Cm(f);case 26:case 5:va(c,f,a),a&&s===null&&S&4&&Am(f),Js(f,f.return);break;case 12:va(c,f,a);break;case 13:va(c,f,a),a&&S&4&&Lm(c,f);break;case 22:f.memoizedState===null&&va(c,f,a),Js(f,f.return);break;case 30:break;default:va(c,f,a)}n=n.sibling}}function Yu(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Bs(a))}function ju(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Bs(t))}function Ri(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)zm(t,n,a,s),n=n.sibling}function zm(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(t,n,a,s),c&2048&&Qs(9,n);break;case 1:Ri(t,n,a,s);break;case 3:Ri(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Bs(t)));break;case 12:if(c&2048){Ri(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(O){Fe(n,n.return,O)}}else Ri(t,n,a,s);break;case 13:Ri(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Ri(t,n,a,s):$s(t,n):f._visibility&2?Ri(t,n,a,s):(f._visibility|=2,Fr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&Yu(S,n);break;case 24:Ri(t,n,a,s),c&2048&&ju(n.alternate,n);break;default:Ri(t,n,a,s)}}function Fr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,S=n,T=a,O=s,et=S.flags;switch(S.tag){case 0:case 11:case 15:Fr(f,S,T,O,c),Qs(8,S);break;case 23:break;case 22:var pt=S.stateNode;S.memoizedState!==null?pt._visibility&2?Fr(f,S,T,O,c):$s(f,S):(pt._visibility|=2,Fr(f,S,T,O,c)),c&&et&2048&&Yu(S.alternate,S);break;case 24:Fr(f,S,T,O,c),c&&et&2048&&ju(S.alternate,S);break;default:Fr(f,S,T,O,c)}n=n.sibling}}function $s(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:$s(a,s),c&2048&&Yu(s.alternate,s);break;case 24:$s(a,s),c&2048&&ju(s.alternate,s);break;default:$s(a,s)}n=n.sibling}}var to=8192;function Hr(t){if(t.subtreeFlags&to)for(t=t.child;t!==null;)Bm(t),t=t.sibling}function Bm(t){switch(t.tag){case 26:Hr(t),t.flags&to&&t.memoizedState!==null&&Sx(di,t.memoizedState,t.memoizedProps);break;case 5:Hr(t);break;case 3:case 4:var n=di;di=Ll(t.stateNode.containerInfo),Hr(t),di=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=to,to=16777216,Hr(t),to=n):Hr(t));break;default:Hr(t)}}function Im(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function eo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,Hm(s,t)}Im(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fm(t),t=t.sibling}function Fm(t){switch(t.tag){case 0:case 11:case 15:eo(t),t.flags&2048&&ga(9,t,t.return);break;case 3:eo(t);break;case 12:eo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,yl(t)):eo(t);break;default:eo(t)}}function yl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,Hm(s,t)}Im(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ga(8,n,n.return),yl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,yl(n));break;default:yl(n)}t=t.sibling}}function Hm(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Bs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,mn=s;else t:for(a=t;mn!==null;){s=mn;var c=s.sibling,f=s.return;if(Um(s),s===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var z0={getCacheForType:function(t){var n=Tn(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},B0=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Ve=null,ve=null,Me=0,Ne=0,qn=null,xa=!1,Gr=!1,Zu=!1,Wi=0,Qe=0,Sa=0,nr=0,Ku=0,ii=0,Vr=0,no=null,Bn=null,Qu=!1,Ju=0,Ml=1/0,El=null,ya=null,Sn=0,Ma=null,kr=null,Xr=0,$u=0,tf=null,Gm=null,io=0,ef=null;function Yn(){if((Ue&2)!==0&&Me!==0)return Me&-Me;if(L.T!==null){var t=Ur;return t!==0?t:cf()}return Ee()}function Vm(){ii===0&&(ii=(Me&536870912)===0||Re?W():536870912);var t=ni.current;return t!==null&&(t.flags|=32),ii}function jn(t,n,a){(t===Ve&&(Ne===2||Ne===9)||t.cancelPendingCommit!==null)&&(Wr(t,0),Ea(t,Me,ii,!1)),It(t,a),((Ue&2)===0||t!==Ve)&&(t===Ve&&((Ue&2)===0&&(nr|=a),Qe===4&&Ea(t,Me,ii,!1)),Ci(t))}function km(t,n,a){if((Ue&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Ut(t,n),c=s?H0(t,n):rf(t,n,!0),f=s;do{if(c===0){Gr&&!s&&Ea(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!I0(a)){c=rf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=t;c=no;var O=T.current.memoizedState.isDehydrated;if(O&&(Wr(T,S).flags|=256),S=rf(T,S,!1),S!==2){if(Zu&&!O){T.errorRecoveryDisabledLanes|=f,nr|=f,c=4;break t}f=Bn,Bn=c,f!==null&&(Bn===null?Bn=f:Bn.push.apply(Bn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){Wr(t,0),Ea(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ea(s,n,ii,!xa);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Ju+300-zt(),10<c)){if(Ea(s,n,ii,!xa),Wt(s,0,!0)!==0)break t;s.timeoutHandle=vg(Xm.bind(null,s,a,Bn,El,Qu,n,ii,nr,Vr,xa,f,2,-0,0),c);break t}Xm(s,a,Bn,El,Qu,n,ii,nr,Vr,xa,f,0,-0,0)}}break}while(!0);Ci(t)}function Xm(t,n,a,s,c,f,S,T,O,et,pt,_t,rt,st){if(t.timeoutHandle=-1,_t=n.subtreeFlags,(_t&8192||(_t&16785408)===16785408)&&(uo={stylesheets:null,count:0,unsuspend:xx},Bm(n),_t=yx(),_t!==null)){t.cancelPendingCommit=_t(Qm.bind(null,t,n,f,a,s,c,S,T,O,pt,1,rt,st)),Ea(t,f,S,!et);return}Qm(t,n,f,a,s,c,S,T,O)}function I0(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Vn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ea(t,n,a,s){n&=~Ku,n&=~nr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-At(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&vt(t,a,n)}function Tl(){return(Ue&6)===0?(ao(0),!1):!0}function nf(){if(ve!==null){if(Ne===0)var t=ve.return;else t=ve,Bi=Ka=null,xu(t),Br=null,js=0,t=ve;for(;t!==null;)Em(t.alternate,t),t=t.return;ve=null}}function Wr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,nx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),nf(),Ve=t,ve=a=Oi(t.current,null),Me=n,Ne=0,qn=null,xa=!1,Gr=Ut(t,n),Zu=!1,Vr=ii=Ku=nr=Sa=Qe=0,Bn=no=null,Qu=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-At(s),f=1<<c;n|=t[c],s&=~f}return Wi=n,qo(),a}function Wm(t,n){me=null,L.H=fl,n===Fs||n===el?(n=lp(),Ne=3):n===rp?(n=lp(),Ne=4):Ne=n===cm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,ve===null&&(Qe=1,gl(t,Jn(n,t.current)))}function qm(){var t=L.H;return L.H=fl,t===null?fl:t}function Ym(){var t=L.A;return L.A=z0,t}function af(){Qe=4,xa||(Me&4194048)!==Me&&ni.current!==null||(Gr=!0),(Sa&134217727)===0&&(nr&134217727)===0||Ve===null||Ea(Ve,Me,ii,!1)}function rf(t,n,a){var s=Ue;Ue|=2;var c=qm(),f=Ym();(Ve!==t||Me!==n)&&(El=null,Wr(t,n)),n=!1;var S=Qe;t:do try{if(Ne!==0&&ve!==null){var T=ve,O=qn;switch(Ne){case 8:nf(),S=6;break t;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var et=Ne;if(Ne=0,qn=null,qr(t,T,O,et),a&&Gr){S=0;break t}break;default:et=Ne,Ne=0,qn=null,qr(t,T,O,et)}}F0(),S=Qe;break}catch(pt){Wm(t,pt)}while(!0);return n&&t.shellSuspendCounter++,Bi=Ka=null,Ue=s,L.H=c,L.A=f,ve===null&&(Ve=null,Me=0,qo()),S}function F0(){for(;ve!==null;)jm(ve)}function H0(t,n){var a=Ue;Ue|=2;var s=qm(),c=Ym();Ve!==t||Me!==n?(El=null,Ml=zt()+500,Wr(t,n)):Gr=Ut(t,n);t:do try{if(Ne!==0&&ve!==null){n=ve;var f=qn;e:switch(Ne){case 1:Ne=0,qn=null,qr(t,n,f,1);break;case 2:case 9:if(sp(f)){Ne=0,qn=null,Zm(n);break}n=function(){Ne!==2&&Ne!==9||Ve!==t||(Ne=7),Ci(t)},f.then(n,n);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:sp(f)?(Ne=0,qn=null,Zm(n)):(Ne=0,qn=null,qr(t,n,f,7));break;case 5:var S=null;switch(ve.tag){case 26:S=ve.memoizedState;case 5:case 27:var T=ve;if(!S||Dg(S)){Ne=0,qn=null;var O=T.sibling;if(O!==null)ve=O;else{var et=T.return;et!==null?(ve=et,bl(et)):ve=null}break e}}Ne=0,qn=null,qr(t,n,f,5);break;case 6:Ne=0,qn=null,qr(t,n,f,6);break;case 8:nf(),Qe=6;break t;default:throw Error(r(462))}}G0();break}catch(pt){Wm(t,pt)}while(!0);return Bi=Ka=null,L.H=s,L.A=c,Ue=a,ve!==null?0:(Ve=null,Me=0,qo(),Qe)}function G0(){for(;ve!==null&&!re();)jm(ve)}function jm(t){var n=ym(t.alternate,t,Wi);t.memoizedProps=t.pendingProps,n===null?bl(t):ve=n}function Zm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=mm(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=mm(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:xu(n);default:Em(a,n),n=ve=Kd(n,Wi),n=ym(a,n,Wi)}t.memoizedProps=t.pendingProps,n===null?bl(t):ve=n}function qr(t,n,a,s){Bi=Ka=null,xu(n),Br=null,js=0;var c=n.return;try{if(D0(t,c,n,a,Me)){Qe=1,gl(t,Jn(a,t.current)),ve=null;return}}catch(f){if(c!==null)throw ve=c,f;Qe=1,gl(t,Jn(a,t.current)),ve=null;return}n.flags&32768?(Re||s===1?t=!0:Gr||(Me&536870912)!==0?t=!1:(xa=t=!0,(s===2||s===9||s===3||s===6)&&(s=ni.current,s!==null&&s.tag===13&&(s.flags|=16384))),Km(n,t)):bl(n)}function bl(t){var n=t;do{if((n.flags&32768)!==0){Km(n,xa);return}t=n.return;var a=N0(n.alternate,n,Wi);if(a!==null){ve=a;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=t}while(n!==null);Qe===0&&(Qe=5)}function Km(t,n){do{var a=L0(t.alternate,t);if(a!==null){a.flags&=32767,ve=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ve=t;return}ve=t=a}while(t!==null);Qe=6,ve=null}function Qm(t,n,a,s,c,f,S,T,O){t.cancelPendingCommit=null;do Al();while(Sn!==0);if((Ue&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=jc,Tt(t,a,f,S,T,O),t===Ve&&(ve=Ve=null,Me=0),kr=n,Ma=t,Xr=a,$u=f,tf=c,Gm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,W0(He,function(){return ng(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=L.T,L.T=null,c=K.p,K.p=2,S=Ue,Ue|=4;try{O0(t,n,a)}finally{Ue=S,K.p=c,L.T=s}}Sn=1,Jm(),$m(),tg()}}function Jm(){if(Sn===1){Sn=0;var t=Ma,n=kr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var s=K.p;K.p=2;var c=Ue;Ue|=4;try{Om(n,t);var f=_f,S=Hd(t.containerInfo),T=f.focusedElem,O=f.selectionRange;if(S!==T&&T&&T.ownerDocument&&Fd(T.ownerDocument.documentElement,T)){if(O!==null&&kc(T)){var et=O.start,pt=O.end;if(pt===void 0&&(pt=et),"selectionStart"in T)T.selectionStart=et,T.selectionEnd=Math.min(pt,T.value.length);else{var _t=T.ownerDocument||document,rt=_t&&_t.defaultView||window;if(rt.getSelection){var st=rt.getSelection(),ie=T.textContent.length,te=Math.min(O.start,ie),ze=O.end===void 0?te:Math.min(O.end,ie);!st.extend&&te>ze&&(S=ze,ze=te,te=S);var j=Id(T,te),k=Id(T,ze);if(j&&k&&(st.rangeCount!==1||st.anchorNode!==j.node||st.anchorOffset!==j.offset||st.focusNode!==k.node||st.focusOffset!==k.offset)){var $=_t.createRange();$.setStart(j.node,j.offset),st.removeAllRanges(),te>ze?(st.addRange($),st.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),st.addRange($))}}}}for(_t=[],st=T;st=st.parentNode;)st.nodeType===1&&_t.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_t.length;T++){var mt=_t[T];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Il=!!gf,_f=gf=null}finally{Ue=c,K.p=s,L.T=a}}t.current=n,Sn=2}}function $m(){if(Sn===2){Sn=0;var t=Ma,n=kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var s=K.p;K.p=2;var c=Ue;Ue|=4;try{Dm(t,n.alternate,n)}finally{Ue=c,K.p=s,L.T=a}}Sn=3}}function tg(){if(Sn===4||Sn===3){Sn=0,$t();var t=Ma,n=kr,a=Xr,s=Gm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,kr=Ma=null,eg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(ya=null),De(a),n=n.stateNode,ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(J,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=L.T,c=K.p,K.p=2,L.T=null;try{for(var f=t.onRecoverableError,S=0;S<s.length;S++){var T=s[S];f(T.value,{componentStack:T.stack})}}finally{L.T=n,K.p=c}}(Xr&3)!==0&&Al(),Ci(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===ef?io++:(io=0,ef=t):io=0,ao(0)}}function eg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Bs(n)))}function Al(t){return Jm(),$m(),tg(),ng()}function ng(){if(Sn!==5)return!1;var t=Ma,n=$u;$u=0;var a=De(Xr),s=L.T,c=K.p;try{K.p=32>a?32:a,L.T=null,a=tf,tf=null;var f=Ma,S=Xr;if(Sn=0,kr=Ma=null,Xr=0,(Ue&6)!==0)throw Error(r(331));var T=Ue;if(Ue|=4,Fm(f.current),zm(f,f.current,S,a),Ue=T,ao(0,!1),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(J,f)}catch{}return!0}finally{K.p=c,L.T=s,eg(t,n)}}function ig(t,n,a){n=Jn(a,n),n=Lu(t.stateNode,n,2),t=ha(t,n,2),t!==null&&(It(t,2),Ci(t))}function Fe(t,n,a){if(t.tag===3)ig(t,t,a);else for(;n!==null;){if(n.tag===3){ig(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ya===null||!ya.has(s))){t=Jn(a,t),a=om(2),s=ha(n,a,2),s!==null&&(lm(a,s,n,t),It(s,2),Ci(s));break}}n=n.return}}function sf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new B0;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Zu=!0,c.add(a),t=V0.bind(null,t,n,a),n.then(t,t))}function V0(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ve===t&&(Me&a)===a&&(Qe===4||Qe===3&&(Me&62914560)===Me&&300>zt()-Ju?(Ue&2)===0&&Wr(t,0):Ku|=a,Vr===Me&&(Vr=0)),Ci(t)}function ag(t,n){n===0&&(n=Ct()),t=Rr(t,n),t!==null&&(It(t,n),Ci(t))}function k0(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),ag(t,a)}function X0(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),ag(t,a)}function W0(t,n){return z(t,n)}var Rl=null,Yr=null,of=!1,Cl=!1,lf=!1,ir=0;function Ci(t){t!==Yr&&t.next===null&&(Yr===null?Rl=Yr=t:Yr=Yr.next=t),Cl=!0,of||(of=!0,Y0())}function ao(t,n){if(!lf&&Cl){lf=!0;do for(var a=!1,s=Rl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-At(42|t)+1)-1,f&=c&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,lg(s,f))}else f=Me,f=Wt(s,s===Ve?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ut(s,f)||(a=!0,lg(s,f));s=s.next}while(a);lf=!1}}function q0(){rg()}function rg(){Cl=of=!1;var t=0;ir!==0&&(ex()&&(t=ir),ir=0);for(var n=zt(),a=null,s=Rl;s!==null;){var c=s.next,f=sg(s,n);f===0?(s.next=null,a===null?Rl=c:a.next=c,c===null&&(Yr=a)):(a=s,(t!==0||(f&3)!==0)&&(Cl=!0)),s=c}ao(t)}function sg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-At(f),T=1<<S,O=c[S];O===-1?((T&a)===0||(T&s)!==0)&&(c[S]=oe(T,n)):O<=n&&(t.expiredLanes|=T),f&=~T}if(n=Ve,a=Me,a=Wt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ne===2||Ne===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&we(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ut(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&we(s),De(a)){case 2:case 8:a=se;break;case 32:a=He;break;case 268435456:a=w;break;default:a=He}return s=og.bind(null,t),a=z(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&we(s),t.callbackPriority=2,t.callbackNode=null,2}function og(t,n){if(Sn!==0&&Sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Al()&&t.callbackNode!==a)return null;var s=Me;return s=Wt(t,t===Ve?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(km(t,s,n),sg(t,zt()),t.callbackNode!=null&&t.callbackNode===a?og.bind(null,t):null)}function lg(t,n){if(Al())return null;km(t,n,!0)}function Y0(){ix(function(){(Ue&6)!==0?z(Gt,q0):rg()})}function cf(){return ir===0&&(ir=W()),ir}function cg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Fo(""+t)}function ug(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function j0(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=cg((c[je]||null).action),S=s.submitter;S&&(n=(n=S[je]||null)?cg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new ko("action","action",null,s,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ir!==0){var O=S?ug(c,S):new FormData(c);Cu(a,{pending:!0,data:O,method:c.method,action:f},null,O)}}else typeof f=="function"&&(T.preventDefault(),O=S?ug(c,S):new FormData(c),Cu(a,{pending:!0,data:O,method:c.method,action:f},f,O))},currentTarget:c}]})}}for(var uf=0;uf<Yc.length;uf++){var ff=Yc[uf],Z0=ff.toLowerCase(),K0=ff[0].toUpperCase()+ff.slice(1);hi(Z0,"on"+K0)}hi(kd,"onAnimationEnd"),hi(Xd,"onAnimationIteration"),hi(Wd,"onAnimationStart"),hi("dblclick","onDoubleClick"),hi("focusin","onFocus"),hi("focusout","onBlur"),hi(d0,"onTransitionRun"),hi(p0,"onTransitionStart"),hi(m0,"onTransitionCancel"),hi(qd,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),b("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),b("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),b("onBeforeInput",["compositionend","keypress","textInput","paste"]),b("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Q0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ro));function fg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var T=s[S],O=T.instance,et=T.currentTarget;if(T=T.listener,O!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=et;try{f(c)}catch(pt){ml(pt)}c.currentTarget=null,f=O}else for(S=0;S<s.length;S++){if(T=s[S],O=T.instance,et=T.currentTarget,T=T.listener,O!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=et;try{f(c)}catch(pt){ml(pt)}c.currentTarget=null,f=O}}}}function xe(t,n){var a=n[_r];a===void 0&&(a=n[_r]=new Set);var s=t+"__bubble";a.has(s)||(hg(n,t,2,!1),a.add(s))}function hf(t,n,a){var s=0;n&&(s|=4),hg(a,t,s,n)}var wl="_reactListening"+Math.random().toString(36).slice(2);function df(t){if(!t[wl]){t[wl]=!0,Bo.forEach(function(a){a!=="selectionchange"&&(Q0.has(a)||hf(a,!1,t),hf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[wl]||(n[wl]=!0,hf("selectionchange",!1,n))}}function hg(t,n,a,s){switch(zg(n)){case 2:var c=Tx;break;case 8:c=bx;break;default:c=Rf}a=c.bind(null,n,a,t),c=void 0,!Oc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function pf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var T=s.stateNode.containerInfo;if(T===c)break;if(S===4)for(S=s.return;S!==null;){var O=S.tag;if((O===3||O===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;T!==null;){if(S=Ni(T),S===null)return;if(O=S.tag,O===5||O===6||O===26||O===27){s=f=S;continue t}T=T.parentNode}}s=s.return}xd(function(){var et=f,pt=Nc(a),_t=[];t:{var rt=Yd.get(t);if(rt!==void 0){var st=ko,ie=t;switch(t){case"keypress":if(Go(a)===0)break t;case"keydown":case"keyup":st=Wv;break;case"focusin":ie="focus",st=Ic;break;case"focusout":ie="blur",st=Ic;break;case"beforeblur":case"afterblur":st=Ic;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=Md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=Lv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=jv;break;case kd:case Xd:case Wd:st=zv;break;case qd:st=Kv;break;case"scroll":case"scrollend":st=Uv;break;case"wheel":st=Jv;break;case"copy":case"cut":case"paste":st=Iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=Td;break;case"toggle":case"beforetoggle":st=t0}var te=(n&4)!==0,ze=!te&&(t==="scroll"||t==="scrollend"),j=te?rt!==null?rt+"Capture":null:rt;te=[];for(var k=et,$;k!==null;){var mt=k;if($=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||$===null||j===null||(mt=Ts(k,j),mt!=null&&te.push(so(k,mt,$))),ze)break;k=k.return}0<te.length&&(rt=new st(rt,ie,null,a,pt),_t.push({event:rt,listeners:te}))}}if((n&7)===0){t:{if(rt=t==="mouseover"||t==="pointerover",st=t==="mouseout"||t==="pointerout",rt&&a!==Uc&&(ie=a.relatedTarget||a.fromElement)&&(Ni(ie)||ie[Mi]))break t;if((st||rt)&&(rt=pt.window===pt?pt:(rt=pt.ownerDocument)?rt.defaultView||rt.parentWindow:window,st?(ie=a.relatedTarget||a.toElement,st=et,ie=ie?Ni(ie):null,ie!==null&&(ze=u(ie),te=ie.tag,ie!==ze||te!==5&&te!==27&&te!==6)&&(ie=null)):(st=null,ie=et),st!==ie)){if(te=Md,mt="onMouseLeave",j="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(te=Td,mt="onPointerLeave",j="onPointerEnter",k="pointer"),ze=st==null?rt:Ga(st),$=ie==null?rt:Ga(ie),rt=new te(mt,k+"leave",st,a,pt),rt.target=ze,rt.relatedTarget=$,mt=null,Ni(pt)===et&&(te=new te(j,k+"enter",ie,a,pt),te.target=$,te.relatedTarget=ze,mt=te),ze=mt,st&&ie)e:{for(te=st,j=ie,k=0,$=te;$;$=jr($))k++;for($=0,mt=j;mt;mt=jr(mt))$++;for(;0<k-$;)te=jr(te),k--;for(;0<$-k;)j=jr(j),$--;for(;k--;){if(te===j||j!==null&&te===j.alternate)break e;te=jr(te),j=jr(j)}te=null}else te=null;st!==null&&dg(_t,rt,st,te,!1),ie!==null&&ze!==null&&dg(_t,ze,ie,te,!0)}}t:{if(rt=et?Ga(et):window,st=rt.nodeName&&rt.nodeName.toLowerCase(),st==="select"||st==="input"&&rt.type==="file")var kt=Nd;else if(Dd(rt))if(Ld)kt=u0;else{kt=l0;var ge=o0}else st=rt.nodeName,!st||st.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?et&&Dc(et.elementType)&&(kt=Nd):kt=c0;if(kt&&(kt=kt(t,et))){Ud(_t,kt,a,pt);break t}ge&&ge(t,rt,et),t==="focusout"&&et&&rt.type==="number"&&et.memoizedProps.value!=null&&En(rt,"number",rt.value)}switch(ge=et?Ga(et):window,t){case"focusin":(Dd(ge)||ge.contentEditable==="true")&&(Tr=ge,Xc=et,Ns=null);break;case"focusout":Ns=Xc=Tr=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,Gd(_t,a,pt);break;case"selectionchange":if(h0)break;case"keydown":case"keyup":Gd(_t,a,pt)}var jt;if(Hc)t:{switch(t){case"compositionstart":var ne="onCompositionStart";break t;case"compositionend":ne="onCompositionEnd";break t;case"compositionupdate":ne="onCompositionUpdate";break t}ne=void 0}else Er?Cd(t,a)&&(ne="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ne="onCompositionStart");ne&&(bd&&a.locale!=="ko"&&(Er||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&Er&&(jt=Sd()):(la=pt,Pc="value"in la?la.value:la.textContent,Er=!0)),ge=Dl(et,ne),0<ge.length&&(ne=new Ed(ne,t,null,a,pt),_t.push({event:ne,listeners:ge}),jt?ne.data=jt:(jt=wd(a),jt!==null&&(ne.data=jt)))),(jt=n0?i0(t,a):a0(t,a))&&(ne=Dl(et,"onBeforeInput"),0<ne.length&&(ge=new Ed("onBeforeInput","beforeinput",null,a,pt),_t.push({event:ge,listeners:ne}),ge.data=jt)),j0(_t,t,et,a,pt)}fg(_t,n)})}function so(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Dl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ts(t,a),c!=null&&s.unshift(so(t,c,f)),c=Ts(t,n),c!=null&&s.push(so(t,c,f))),t.tag===3)return s;t=t.return}return[]}function jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function dg(t,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var T=a,O=T.alternate,et=T.stateNode;if(T=T.tag,O!==null&&O===s)break;T!==5&&T!==26&&T!==27||et===null||(O=et,c?(et=Ts(a,f),et!=null&&S.unshift(so(a,et,O))):c||(et=Ts(a,f),et!=null&&S.push(so(a,et,O)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var J0=/\r\n?/g,$0=/\u0000|\uFFFD/g;function pg(t){return(typeof t=="string"?t:""+t).replace(J0,`
`).replace($0,"")}function mg(t,n){return n=pg(n),pg(t)===n}function Ul(){}function Pe(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Ln(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Ln(t,""+s);break;case"className":Ft(t,"class",s);break;case"tabIndex":Ft(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ft(t,a,s);break;case"style":_d(t,s,f);break;case"data":if(n!=="object"){Ft(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Fo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Pe(t,n,"name",c.name,c,null),Pe(t,n,"formEncType",c.formEncType,c,null),Pe(t,n,"formMethod",c.formMethod,c,null),Pe(t,n,"formTarget",c.formTarget,c,null)):(Pe(t,n,"encType",c.encType,c,null),Pe(t,n,"method",c.method,c,null),Pe(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Fo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ul);break;case"onScroll":s!=null&&xe("scroll",t);break;case"onScrollEnd":s!=null&&xe("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Fo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":xe("beforetoggle",t),xe("toggle",t),Lt(t,"popover",s);break;case"xlinkActuate":Ot(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ot(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ot(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ot(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ot(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ot(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ot(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ot(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ot(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Lt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=wv.get(a)||a,Lt(t,a,s))}}function mf(t,n,a,s,c,f){switch(a){case"style":_d(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Ln(t,s):(typeof s=="number"||typeof s=="bigint")&&Ln(t,""+s);break;case"onScroll":s!=null&&xe("scroll",t);break;case"onScrollEnd":s!=null&&xe("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Ul);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Io.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[je]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Lt(t,a,s)}}}function yn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",t),xe("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(t,n,f,S,a,null)}}c&&Pe(t,n,"srcSet",a.srcSet,a,null),s&&Pe(t,n,"src",a.src,a,null);return;case"input":xe("invalid",t);var T=f=S=c=null,O=null,et=null;for(s in a)if(a.hasOwnProperty(s)){var pt=a[s];if(pt!=null)switch(s){case"name":c=pt;break;case"type":S=pt;break;case"checked":O=pt;break;case"defaultChecked":et=pt;break;case"value":f=pt;break;case"defaultValue":T=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(r(137,n));break;default:Pe(t,n,s,pt,a,null)}}wn(t,f,T,O,et,S,c,!1),_e(t);return;case"select":xe("invalid",t),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":s=T;default:Pe(t,n,c,T,a,null)}n=f,a=S,t.multiple=!!s,n!=null?Ze(t,!!s,n,!1):a!=null&&Ze(t,!!s,a,!0);return;case"textarea":xe("invalid",t),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Pe(t,n,S,T,a,null)}Sr(t,s,c,f),_e(t);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(s=a[O],s!=null))switch(O){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Pe(t,n,O,s,a,null)}return;case"dialog":xe("beforetoggle",t),xe("toggle",t),xe("cancel",t),xe("close",t);break;case"iframe":case"object":xe("load",t);break;case"video":case"audio":for(s=0;s<ro.length;s++)xe(ro[s],t);break;case"image":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"embed":case"source":case"link":xe("error",t),xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(s=a[et],s!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(t,n,et,s,a,null)}return;default:if(Dc(n)){for(pt in a)a.hasOwnProperty(pt)&&(s=a[pt],s!==void 0&&mf(t,n,pt,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Pe(t,n,T,s,a,null))}function tx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,T=null,O=null,et=null,pt=null;for(st in a){var _t=a[st];if(a.hasOwnProperty(st)&&_t!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":O=_t;default:s.hasOwnProperty(st)||Pe(t,n,st,null,s,_t)}}for(var rt in s){var st=s[rt];if(_t=a[rt],s.hasOwnProperty(rt)&&(st!=null||_t!=null))switch(rt){case"type":f=st;break;case"name":c=st;break;case"checked":et=st;break;case"defaultChecked":pt=st;break;case"value":S=st;break;case"defaultValue":T=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:st!==_t&&Pe(t,n,rt,st,s,_t)}}Ie(t,S,T,O,et,pt,f,c);return;case"select":st=S=T=rt=null;for(f in a)if(O=a[f],a.hasOwnProperty(f)&&O!=null)switch(f){case"value":break;case"multiple":st=O;default:s.hasOwnProperty(f)||Pe(t,n,f,null,s,O)}for(c in s)if(f=s[c],O=a[c],s.hasOwnProperty(c)&&(f!=null||O!=null))switch(c){case"value":rt=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==O&&Pe(t,n,c,f,s,O)}n=T,a=S,s=st,rt!=null?Ze(t,!!a,rt,!1):!!s!=!!a&&(n!=null?Ze(t,!!a,n,!0):Ze(t,!!a,a?[]:"",!1));return;case"textarea":st=rt=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Pe(t,n,T,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":rt=c;break;case"defaultValue":st=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Pe(t,n,S,c,s,f)}vn(t,rt,st);return;case"option":for(var ie in a)if(rt=a[ie],a.hasOwnProperty(ie)&&rt!=null&&!s.hasOwnProperty(ie))switch(ie){case"selected":t.selected=!1;break;default:Pe(t,n,ie,null,s,rt)}for(O in s)if(rt=s[O],st=a[O],s.hasOwnProperty(O)&&rt!==st&&(rt!=null||st!=null))switch(O){case"selected":t.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:Pe(t,n,O,rt,s,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)rt=a[te],a.hasOwnProperty(te)&&rt!=null&&!s.hasOwnProperty(te)&&Pe(t,n,te,null,s,rt);for(et in s)if(rt=s[et],st=a[et],s.hasOwnProperty(et)&&rt!==st&&(rt!=null||st!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:Pe(t,n,et,rt,s,st)}return;default:if(Dc(n)){for(var ze in a)rt=a[ze],a.hasOwnProperty(ze)&&rt!==void 0&&!s.hasOwnProperty(ze)&&mf(t,n,ze,void 0,s,rt);for(pt in s)rt=s[pt],st=a[pt],!s.hasOwnProperty(pt)||rt===st||rt===void 0&&st===void 0||mf(t,n,pt,rt,s,st);return}}for(var j in a)rt=a[j],a.hasOwnProperty(j)&&rt!=null&&!s.hasOwnProperty(j)&&Pe(t,n,j,null,s,rt);for(_t in s)rt=s[_t],st=a[_t],!s.hasOwnProperty(_t)||rt===st||rt==null&&st==null||Pe(t,n,_t,rt,s,st)}var gf=null,_f=null;function Nl(t){return t.nodeType===9?t:t.ownerDocument}function gg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _g(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function vf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xf=null;function ex(){var t=window.event;return t&&t.type==="popstate"?t===xf?!1:(xf=t,!0):(xf=null,!1)}var vg=typeof setTimeout=="function"?setTimeout:void 0,nx=typeof clearTimeout=="function"?clearTimeout:void 0,xg=typeof Promise=="function"?Promise:void 0,ix=typeof queueMicrotask=="function"?queueMicrotask:typeof xg<"u"?function(t){return xg.resolve(null).then(t).catch(ax)}:vg;function ax(t){setTimeout(function(){throw t})}function Ta(t){return t==="head"}function Sg(t,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var S=t.ownerDocument;if(a&1&&oo(S.documentElement),a&2&&oo(S.body),a&4)for(a=S.head,oo(a),S=a.firstChild;S;){var T=S.nextSibling,O=S.nodeName;S[Ei]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=T}}if(c===0){t.removeChild(f),go(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);go(n)}function Sf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Sf(a),xr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function rx(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ei])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=pi(t.nextSibling),t===null)break}return null}function sx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=pi(t.nextSibling),t===null))return null;return t}function yf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function ox(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function pi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Mf=null;function yg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function Mg(t,n,a){switch(n=Nl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function oo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);xr(t)}var ai=new Map,Eg=new Set;function Ll(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var qi=K.d;K.d={f:lx,r:cx,D:ux,C:fx,L:hx,m:dx,X:mx,S:px,M:gx};function lx(){var t=qi.f(),n=Tl();return t||n}function cx(t){var n=sa(t);n!==null&&n.tag===5&&n.type==="form"?kp(n):qi.r(t)}var Zr=typeof document>"u"?null:document;function Tg(t,n,a){var s=Zr;if(s&&typeof n=="string"&&n){var c=dn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Eg.has(c)||(Eg.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),yn(n,"link",t),en(n),s.head.appendChild(n)))}}function ux(t){qi.D(t),Tg("dns-prefetch",t,null)}function fx(t,n){qi.C(t,n),Tg("preconnect",t,n)}function hx(t,n,a){qi.L(t,n,a);var s=Zr;if(s&&t&&n){var c='link[rel="preload"][as="'+dn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+dn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+dn(a.imageSizes)+'"]')):c+='[href="'+dn(t)+'"]';var f=c;switch(n){case"style":f=Kr(t);break;case"script":f=Qr(t)}ai.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ai.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(lo(f))||n==="script"&&s.querySelector(co(f))||(n=s.createElement("link"),yn(n,"link",t),en(n),s.head.appendChild(n)))}}function dx(t,n){qi.m(t,n);var a=Zr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+dn(s)+'"][href="'+dn(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Qr(t)}if(!ai.has(f)&&(t=_({rel:"modulepreload",href:t},n),ai.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(co(f)))return}s=a.createElement("link"),yn(s,"link",t),en(s),a.head.appendChild(s)}}}function px(t,n,a){qi.S(t,n,a);var s=Zr;if(s&&t){var c=oa(s).hoistableStyles,f=Kr(t);n=n||"default";var S=c.get(f);if(!S){var T={loading:0,preload:null};if(S=s.querySelector(lo(f)))T.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ai.get(f))&&Ef(t,a);var O=S=s.createElement("link");en(O),yn(O,"link",t),O._p=new Promise(function(et,pt){O.onload=et,O.onerror=pt}),O.addEventListener("load",function(){T.loading|=1}),O.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Ol(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:T},c.set(f,S)}}}function mx(t,n){qi.X(t,n);var a=Zr;if(a&&t){var s=oa(a).hoistableScripts,c=Qr(t),f=s.get(c);f||(f=a.querySelector(co(c)),f||(t=_({src:t,async:!0},n),(n=ai.get(c))&&Tf(t,n),f=a.createElement("script"),en(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function gx(t,n){qi.M(t,n);var a=Zr;if(a&&t){var s=oa(a).hoistableScripts,c=Qr(t),f=s.get(c);f||(f=a.querySelector(co(c)),f||(t=_({src:t,async:!0,type:"module"},n),(n=ai.get(c))&&Tf(t,n),f=a.createElement("script"),en(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function bg(t,n,a,s){var c=(c=nt.current)?Ll(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Kr(a.href),a=oa(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Kr(a.href);var f=oa(c).hoistableStyles,S=f.get(t);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=c.querySelector(lo(t)))&&!f._p&&(S.instance=f,S.state.loading=5),ai.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ai.set(t,a),f||_x(c,t,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Qr(a),a=oa(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Kr(t){return'href="'+dn(t)+'"'}function lo(t){return'link[rel="stylesheet"]['+t+"]"}function Ag(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function _x(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),yn(n,"link",a),en(n),t.head.appendChild(n))}function Qr(t){return'[src="'+dn(t)+'"]'}function co(t){return"script[async]"+t}function Rg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+dn(a.href)+'"]');if(s)return n.instance=s,en(s),s;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),en(s),yn(s,"style",c),Ol(s,a.precedence,t),n.instance=s;case"stylesheet":c=Kr(a.href);var f=t.querySelector(lo(c));if(f)return n.state.loading|=4,n.instance=f,en(f),f;s=Ag(a),(c=ai.get(c))&&Ef(s,c),f=(t.ownerDocument||t).createElement("link"),en(f);var S=f;return S._p=new Promise(function(T,O){S.onload=T,S.onerror=O}),yn(f,"link",s),n.state.loading|=4,Ol(f,a.precedence,t),n.instance=f;case"script":return f=Qr(a.src),(c=t.querySelector(co(f)))?(n.instance=c,en(c),c):(s=a,(c=ai.get(f))&&(s=_({},a),Tf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),en(c),yn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Ol(s,a.precedence,t));return n.instance}function Ol(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var T=s[S];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Ef(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Tf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Pl=null;function Cg(t,n,a){if(Pl===null){var s=new Map,c=Pl=new Map;c.set(a,s)}else c=Pl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Ei]||f[ln]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var T=s.get(S);T?T.push(f):s.set(S,[f])}}return s}function wg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function vx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Dg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var uo=null;function xx(){}function Sx(t,n,a){if(uo===null)throw Error(r(475));var s=uo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Kr(a.href),f=t.querySelector(lo(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=zl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,en(f);return}f=t.ownerDocument||t,a=Ag(a),(c=ai.get(c))&&Ef(a,c),f=f.createElement("link"),en(f);var S=f;S._p=new Promise(function(T,O){S.onload=T,S.onerror=O}),yn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=zl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function yx(){if(uo===null)throw Error(r(475));var t=uo;return t.stylesheets&&t.count===0&&bf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&bf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function zl(){if(this.count--,this.count===0){if(this.stylesheets)bf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Bl=null;function bf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Bl=new Map,n.forEach(Mx,t),Bl=null,zl.call(t))}function Mx(t,n){if(!(n.state.loading&4)){var a=Bl.get(t);if(a)var s=a.get(null);else{a=new Map,Bl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=zl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var fo={$$typeof:P,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Ex(t,n,a,s,c,f,S,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Ug(t,n,a,s,c,f,S,T,O,et,pt,_t){return t=new Ex(t,n,a,S,T,O,et,_t),n=1,f===!0&&(n|=24),f=kn(3,null,null,n),t.current=f,f.stateNode=t,n=ru(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},cu(f),t}function Ng(t){return t?(t=Cr,t):Cr}function Lg(t,n,a,s,c,f){c=Ng(c),s.context===null?s.context=c:s.pendingContext=c,s=fa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ha(t,s,n),a!==null&&(jn(a,t,n),Gs(a,t,n))}function Og(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Af(t,n){Og(t,n),(t=t.alternate)&&Og(t,n)}function Pg(t){if(t.tag===13){var n=Rr(t,67108864);n!==null&&jn(n,t,67108864),Af(t,67108864)}}var Il=!0;function Tx(t,n,a,s){var c=L.T;L.T=null;var f=K.p;try{K.p=2,Rf(t,n,a,s)}finally{K.p=f,L.T=c}}function bx(t,n,a,s){var c=L.T;L.T=null;var f=K.p;try{K.p=8,Rf(t,n,a,s)}finally{K.p=f,L.T=c}}function Rf(t,n,a,s){if(Il){var c=Cf(s);if(c===null)pf(t,n,s,Fl,a),Bg(t,s);else if(Rx(c,t,n,a,s))s.stopPropagation();else if(Bg(t,s),n&4&&-1<Ax.indexOf(t)){for(;c!==null;){var f=sa(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Kt(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var O=1<<31-At(S);T.entanglements[1]|=O,S&=~O}Ci(f),(Ue&6)===0&&(Ml=zt()+500,ao(0))}}break;case 13:T=Rr(f,2),T!==null&&jn(T,f,2),Tl(),Af(f,2)}if(f=Cf(s),f===null&&pf(t,n,s,Fl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else pf(t,n,s,null,a)}}function Cf(t){return t=Nc(t),wf(t)}var Fl=null;function wf(t){if(Fl=null,t=Ni(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Fl=t,null}function zg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ye()){case Gt:return 2;case se:return 8;case He:case Ge:return 32;case w:return 268435456;default:return 32}default:return 32}}var Df=!1,ba=null,Aa=null,Ra=null,ho=new Map,po=new Map,Ca=[],Ax="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bg(t,n){switch(t){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":ho.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(n.pointerId)}}function mo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=sa(n),n!==null&&Pg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Rx(t,n,a,s,c){switch(n){case"focusin":return ba=mo(ba,t,n,a,s,c),!0;case"dragenter":return Aa=mo(Aa,t,n,a,s,c),!0;case"mouseover":return Ra=mo(Ra,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return ho.set(f,mo(ho.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,po.set(f,mo(po.get(f)||null,t,n,a,s,c)),!0}return!1}function Ig(t){var n=Ni(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,ui(t.priority,function(){if(a.tag===13){var s=Yn();s=ae(s);var c=Rr(a,s);c!==null&&jn(c,a,s),Af(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Cf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Uc=s,a.target.dispatchEvent(s),Uc=null}else return n=sa(a),n!==null&&Pg(n),t.blockedOn=a,!1;n.shift()}return!0}function Fg(t,n,a){Hl(t)&&a.delete(n)}function Cx(){Df=!1,ba!==null&&Hl(ba)&&(ba=null),Aa!==null&&Hl(Aa)&&(Aa=null),Ra!==null&&Hl(Ra)&&(Ra=null),ho.forEach(Fg),po.forEach(Fg)}function Gl(t,n){t.blockedOn===n&&(t.blockedOn=null,Df||(Df=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Cx)))}var Vl=null;function Hg(t){Vl!==t&&(Vl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Vl===t&&(Vl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(wf(s||a)===null)continue;break}var f=sa(a);f!==null&&(t.splice(n,3),n-=3,Cu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function go(t){function n(O){return Gl(O,t)}ba!==null&&Gl(ba,t),Aa!==null&&Gl(Aa,t),Ra!==null&&Gl(Ra,t),ho.forEach(n),po.forEach(n);for(var a=0;a<Ca.length;a++){var s=Ca[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)Ig(a),a.blockedOn===null&&Ca.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[je]||null;if(typeof f=="function")S||Hg(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[je]||null)T=S.formAction;else if(wf(c)!==null)continue}else T=S.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),Hg(a)}}}function Uf(t){this._internalRoot=t}kl.prototype.render=Uf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Yn();Lg(a,s,t,n,null,null)},kl.prototype.unmount=Uf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Lg(t.current,2,null,t,null,null),Tl(),n[Mi]=null}};function kl(t){this._internalRoot=t}kl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ee();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ca.length&&n!==0&&n<Ca[a].priority;a++);Ca.splice(a,0,t),a===0&&Ig(t)}};var Gg=e.version;if(Gg!=="19.1.1")throw Error(r(527,Gg,"19.1.1"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var wx={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{J=Xl.inject(wx),ct=Xl}catch{}}return vo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=im,f=am,S=rm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=Ug(t,1,!1,null,null,a,s,c,f,S,T,null),t[Mi]=n.current,df(t),new Uf(n)},vo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=im,S=am,T=rm,O=null,et=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(O=a.unstable_transitionCallbacks),a.formState!==void 0&&(et=a.formState)),n=Ug(t,1,!0,n,a??null,s,c,f,S,T,O,et),n.context=Ng(null),a=n.current,s=Yn(),s=ae(s),c=fa(s),c.callback=null,ha(a,c,s),a=s,n.current.lanes=a,It(n,a),Ci(n),t[Mi]=n.current,df(t),new kl(n)},vo.version="19.1.1",vo}var Qg;function Hx(){if(Qg)return Of.exports;Qg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Of.exports=Fx(),Of.exports}var Gx=Hx();const Vx=Q_(Gx);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const od="180",kx=0,Jg=1,Xx=2,J_=1,Wx=2,Ji=3,Fa=0,Hn=1,$i=2,Ba=0,ds=1,gh=2,$g=3,t_=4,qx=5,hr=100,Yx=101,jx=102,Zx=103,Kx=104,Qx=200,Jx=201,$x=202,tS=203,_h=204,vh=205,eS=206,nS=207,iS=208,aS=209,rS=210,sS=211,oS=212,lS=213,cS=214,xh=0,Sh=1,yh=2,ms=3,Mh=4,Eh=5,Th=6,bh=7,$_=0,uS=1,fS=2,Ia=0,hS=1,dS=2,pS=3,mS=4,gS=5,_S=6,vS=7,tv=300,gs=301,_s=302,Ah=303,Rh=304,Rc=306,Ch=1e3,Si=1001,wh=1002,Qn=1003,xS=1004,Wl=1005,Fn=1006,If=1007,pr=1008,na=1009,ev=1010,nv=1011,Ao=1012,ld=1013,gr=1014,Di=1015,Ss=1016,cd=1017,ud=1018,Ro=1020,iv=35902,av=35899,rv=1021,sv=1022,li=1023,Co=1026,wo=1027,ov=1028,fd=1029,lv=1030,hd=1031,dd=1033,gc=33776,_c=33777,vc=33778,xc=33779,Dh=35840,Uh=35841,Nh=35842,Lh=35843,Oh=36196,Ph=37492,zh=37496,Bh=37808,Ih=37809,Fh=37810,Hh=37811,Gh=37812,Vh=37813,kh=37814,Xh=37815,Wh=37816,qh=37817,Yh=37818,jh=37819,Zh=37820,Kh=37821,Qh=36492,Jh=36494,$h=36495,td=36283,ed=36284,nd=36285,id=36286,SS=3200,yS=3201,MS=0,ES=1,za="",oi="srgb",vs="srgb-linear",yc="linear",Be="srgb",Jr=7680,e_=519,TS=512,bS=513,AS=514,cv=515,RS=516,CS=517,wS=518,DS=519,n_=35044,i_="300 es",Ui=2e3,Mc=2001;class ys{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ff=Math.PI/180,ad=180/Math.PI;function Uo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function Se(o,e,i){return Math.max(e,Math.min(i,o))}function US(o,e){return(o%e+e)%e}function Hf(o,e,i){return(1-i)*o+i*e}function xo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function In(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class le{constructor(e=0,i=0){le.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Se(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class No{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],x=r[l+3];const y=u[h+0],E=u[h+1],A=u[h+2],R=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=x;return}if(d===1){e[i+0]=y,e[i+1]=E,e[i+2]=A,e[i+3]=R;return}if(x!==R||m!==y||p!==E||_!==A){let M=1-d;const v=m*y+p*E+_*A+x*R,F=v>=0?1:-1,P=1-v*v;if(P>Number.EPSILON){const I=Math.sqrt(P),H=Math.atan2(I,v*F);M=Math.sin(M*H)/I,d=Math.sin(d*H)/I}const U=d*F;if(m=m*M+y*U,p=p*M+E*U,_=_*M+A*U,x=x*M+R*U,M===1-d){const I=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=I,p*=I,_*=I,x*=I}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],x=u[h],y=u[h+1],E=u[h+2],A=u[h+3];return e[i]=d*A+_*x+m*E-p*y,e[i+1]=m*A+_*y+p*x-d*E,e[i+2]=p*A+_*E+d*y-m*x,e[i+3]=_*A-d*x-m*y-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),x=d(u/2),y=m(r/2),E=m(l/2),A=m(u/2);switch(h){case"XYZ":this._x=y*_*x+p*E*A,this._y=p*E*x-y*_*A,this._z=p*_*A+y*E*x,this._w=p*_*x-y*E*A;break;case"YXZ":this._x=y*_*x+p*E*A,this._y=p*E*x-y*_*A,this._z=p*_*A-y*E*x,this._w=p*_*x+y*E*A;break;case"ZXY":this._x=y*_*x-p*E*A,this._y=p*E*x+y*_*A,this._z=p*_*A+y*E*x,this._w=p*_*x-y*E*A;break;case"ZYX":this._x=y*_*x-p*E*A,this._y=p*E*x+y*_*A,this._z=p*_*A-y*E*x,this._w=p*_*x+y*E*A;break;case"YZX":this._x=y*_*x+p*E*A,this._y=p*E*x+y*_*A,this._z=p*_*A-y*E*x,this._w=p*_*x-y*E*A;break;case"XZY":this._x=y*_*x-p*E*A,this._y=p*E*x-y*_*A,this._z=p*_*A+y*E*x,this._w=p*_*x+y*E*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],x=i[10],y=r+d+x;if(y>0){const E=.5/Math.sqrt(y+1);this._w=.25/E,this._x=(_-m)*E,this._y=(u-p)*E,this._z=(h-l)*E}else if(r>d&&r>x){const E=2*Math.sqrt(1+r-d-x);this._w=(_-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(u+p)/E}else if(d>x){const E=2*Math.sqrt(1+d-r-x);this._w=(u-p)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+_)/E}else{const E=2*Math.sqrt(1+x-r-d);this._w=(h-l)/E,this._x=(u+p)/E,this._y=(m+_)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Se(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+l*p-u*m,this._y=l*_+h*m+u*d-r*p,this._z=u*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const E=1-i;return this._w=E*h+i*this._w,this._x=E*r+i*this._x,this._y=E*l+i*this._y,this._z=E*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),x=Math.sin((1-i)*_)/p,y=Math.sin(i*_)/p;return this._w=h*x+this._w*y,this._x=r*x+this._x*y,this._y=l*x+this._y*y,this._z=u*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ot{constructor(e=0,i=0,r=0){ot.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(a_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(a_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),_=2*(d*i-u*l),x=2*(u*r-h*i);return this.x=i+m*p+h*x-d*_,this.y=r+m*_+d*p-u*x,this.z=l+m*x+u*_-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Gf.copy(this).projectOnVector(e),this.sub(Gf)}reflect(e){return this.sub(Gf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Se(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gf=new ot,a_=new No;class fe{constructor(e,i,r,l,u,h,d,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p)}set(e,i,r,l,u,h,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],x=r[7],y=r[2],E=r[5],A=r[8],R=l[0],M=l[3],v=l[6],F=l[1],P=l[4],U=l[7],I=l[2],H=l[5],G=l[8];return u[0]=h*R+d*F+m*I,u[3]=h*M+d*P+m*H,u[6]=h*v+d*U+m*G,u[1]=p*R+_*F+x*I,u[4]=p*M+_*P+x*H,u[7]=p*v+_*U+x*G,u[2]=y*R+E*F+A*I,u[5]=y*M+E*P+A*H,u[8]=y*v+E*U+A*G,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*h*_-i*d*p-r*u*_+r*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],x=_*h-d*p,y=d*m-_*u,E=p*u-h*m,A=i*x+r*y+l*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=x*R,e[1]=(l*p-_*r)*R,e[2]=(d*r-l*h)*R,e[3]=y*R,e[4]=(_*i-l*m)*R,e[5]=(l*u-d*i)*R,e[6]=E*R,e[7]=(r*m-p*i)*R,e[8]=(h*i-r*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Vf.makeScale(e,i)),this}rotate(e){return this.premultiply(Vf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Vf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vf=new fe;function uv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ec(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function NS(){const o=Ec("canvas");return o.style.display="block",o}const r_={};function Do(o){o in r_||(r_[o]=!0,console.warn(o))}function LS(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const s_=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),o_=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OS(){const o={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Be&&(l.r=ta(l.r),l.g=ta(l.g),l.b=ta(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=ps(l.r),l.g=ps(l.g),l.b=ps(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===za?yc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Do("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Do("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[vs]:{primaries:e,whitePoint:r,transfer:yc,toXYZ:s_,fromXYZ:o_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:r,transfer:Be,toXYZ:s_,fromXYZ:o_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),o}const Ae=OS();function ta(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ps(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let $r;class PS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{$r===void 0&&($r=Ec("canvas")),$r.width=e.width,$r.height=e.height;const l=$r.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=$r}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ec("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ta(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ta(i[r]/255)*255):i[r]=ta(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zS=0;class pd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=Uo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(kf(l[h].image)):u.push(kf(l[h]))}else u=kf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function kf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?PS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BS=0;const Xf=new ot;class Nn extends ys{constructor(e=Nn.DEFAULT_IMAGE,i=Nn.DEFAULT_MAPPING,r=Si,l=Si,u=Fn,h=pr,d=li,m=na,p=Nn.DEFAULT_ANISOTROPY,_=za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=Uo(),this.name="",this.source=new pd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xf).x}get height(){return this.source.getSize(Xf).y}get depth(){return this.source.getSize(Xf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ch:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ch:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=tv;Nn.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,i=0,r=0,l=1){Je.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],_=m[4],x=m[8],y=m[1],E=m[5],A=m[9],R=m[2],M=m[6],v=m[10];if(Math.abs(_-y)<.01&&Math.abs(x-R)<.01&&Math.abs(A-M)<.01){if(Math.abs(_+y)<.1&&Math.abs(x+R)<.1&&Math.abs(A+M)<.1&&Math.abs(p+E+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,U=(E+1)/2,I=(v+1)/2,H=(_+y)/4,G=(x+R)/4,Q=(A+M)/4;return P>U&&P>I?P<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(P),l=H/r,u=G/r):U>I?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=H/l,u=Q/l):I<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(I),r=G/u,l=Q/u),this.set(r,l,u,i),this}let F=Math.sqrt((M-A)*(M-A)+(x-R)*(x-R)+(y-_)*(y-_));return Math.abs(F)<.001&&(F=1),this.x=(M-A)/F,this.y=(x-R)/F,this.z=(y-_)/F,this.w=Math.acos((p+E+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this.w=Se(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this.w=Se(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class IS extends ys{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Je(0,0,e,i),this.scissorTest=!1,this.viewport=new Je(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Nn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new pd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ha extends IS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class fv extends Nn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class FS extends Nn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lo{constructor(e=new ot(1/0,1/0,1/0),i=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(mi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(mi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=mi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,mi):mi.fromBufferAttribute(u,h),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ql.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ql.copy(r.boundingBox)),ql.applyMatrix4(e.matrixWorld),this.union(ql)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(So),Yl.subVectors(this.max,So),ts.subVectors(e.a,So),es.subVectors(e.b,So),ns.subVectors(e.c,So),Da.subVectors(es,ts),Ua.subVectors(ns,es),ar.subVectors(ts,ns);let i=[0,-Da.z,Da.y,0,-Ua.z,Ua.y,0,-ar.z,ar.y,Da.z,0,-Da.x,Ua.z,0,-Ua.x,ar.z,0,-ar.x,-Da.y,Da.x,0,-Ua.y,Ua.x,0,-ar.y,ar.x,0];return!Wf(i,ts,es,ns,Yl)||(i=[1,0,0,0,1,0,0,0,1],!Wf(i,ts,es,ns,Yl))?!1:(jl.crossVectors(Da,Ua),i=[jl.x,jl.y,jl.z],Wf(i,ts,es,ns,Yl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yi=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],mi=new ot,ql=new Lo,ts=new ot,es=new ot,ns=new ot,Da=new ot,Ua=new ot,ar=new ot,So=new ot,Yl=new ot,jl=new ot,rr=new ot;function Wf(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){rr.fromArray(o,u);const d=l.x*Math.abs(rr.x)+l.y*Math.abs(rr.y)+l.z*Math.abs(rr.z),m=e.dot(rr),p=i.dot(rr),_=r.dot(rr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const HS=new Lo,yo=new ot,qf=new ot;class Cc{constructor(e=new ot,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):HS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);const i=yo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(yo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(qf)),this.expandByPoint(yo.copy(e.center).sub(qf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ji=new ot,Yf=new ot,Zl=new ot,Na=new ot,jf=new ot,Kl=new ot,Zf=new ot;class hv{constructor(e=new ot,i=new ot(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ji.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,i),ji.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Yf.copy(e).add(i).multiplyScalar(.5),Zl.copy(i).sub(e).normalize(),Na.copy(this.origin).sub(Yf);const u=e.distanceTo(i)*.5,h=-this.direction.dot(Zl),d=Na.dot(this.direction),m=-Na.dot(Zl),p=Na.lengthSq(),_=Math.abs(1-h*h);let x,y,E,A;if(_>0)if(x=h*m-d,y=h*d-m,A=u*_,x>=0)if(y>=-A)if(y<=A){const R=1/_;x*=R,y*=R,E=x*(x+h*y+2*d)+y*(h*x+y+2*m)+p}else y=u,x=Math.max(0,-(h*y+d)),E=-x*x+y*(y+2*m)+p;else y=-u,x=Math.max(0,-(h*y+d)),E=-x*x+y*(y+2*m)+p;else y<=-A?(x=Math.max(0,-(-h*u+d)),y=x>0?-u:Math.min(Math.max(-u,-m),u),E=-x*x+y*(y+2*m)+p):y<=A?(x=0,y=Math.min(Math.max(-u,-m),u),E=y*(y+2*m)+p):(x=Math.max(0,-(h*u+d)),y=x>0?u:Math.min(Math.max(-u,-m),u),E=-x*x+y*(y+2*m)+p);else y=h>0?-u:u,x=Math.max(0,-(h*y+d)),E=-x*x+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Yf).addScaledVector(Zl,y),E}intersectSphere(e,i){ji.subVectors(e.center,this.origin);const r=ji.dot(this.direction),l=ji.dot(ji)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),_>=0?(u=(e.min.y-y.y)*_,h=(e.max.y-y.y)*_):(u=(e.max.y-y.y)*_,h=(e.min.y-y.y)*_),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(e.min.z-y.z)*x,m=(e.max.z-y.z)*x):(d=(e.max.z-y.z)*x,m=(e.min.z-y.z)*x),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,i,r,l,u){jf.subVectors(i,e),Kl.subVectors(r,e),Zf.crossVectors(jf,Kl);let h=this.direction.dot(Zf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Na.subVectors(this.origin,e);const m=d*this.direction.dot(Kl.crossVectors(Na,Kl));if(m<0)return null;const p=d*this.direction.dot(jf.cross(Na));if(p<0||m+p>h)return null;const _=-d*Na.dot(Zf);return _<0?null:this.at(_/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,i,r,l,u,h,d,m,p,_,x,y,E,A,R,M){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p,_,x,y,E,A,R,M)}set(e,i,r,l,u,h,d,m,p,_,x,y,E,A,R,M){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=_,v[10]=x,v[14]=y,v[3]=E,v[7]=A,v[11]=R,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/is.setFromMatrixColumn(e,0).length(),u=1/is.setFromMatrixColumn(e,1).length(),h=1/is.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const y=h*_,E=h*x,A=d*_,R=d*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=E+A*p,i[5]=y-R*p,i[9]=-d*m,i[2]=R-y*p,i[6]=A+E*p,i[10]=h*m}else if(e.order==="YXZ"){const y=m*_,E=m*x,A=p*_,R=p*x;i[0]=y+R*d,i[4]=A*d-E,i[8]=h*p,i[1]=h*x,i[5]=h*_,i[9]=-d,i[2]=E*d-A,i[6]=R+y*d,i[10]=h*m}else if(e.order==="ZXY"){const y=m*_,E=m*x,A=p*_,R=p*x;i[0]=y-R*d,i[4]=-h*x,i[8]=A+E*d,i[1]=E+A*d,i[5]=h*_,i[9]=R-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const y=h*_,E=h*x,A=d*_,R=d*x;i[0]=m*_,i[4]=A*p-E,i[8]=y*p+R,i[1]=m*x,i[5]=R*p+y,i[9]=E*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const y=h*m,E=h*p,A=d*m,R=d*p;i[0]=m*_,i[4]=R-y*x,i[8]=A*x+E,i[1]=x,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=E*x+A,i[10]=y-R*x}else if(e.order==="XZY"){const y=h*m,E=h*p,A=d*m,R=d*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=y*x+R,i[5]=h*_,i[9]=E*x-A,i[2]=A*x-E,i[6]=d*_,i[10]=R*x+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GS,e,VS)}lookAt(e,i,r){const l=this.elements;return Zn.subVectors(e,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),La.crossVectors(r,Zn),La.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),La.crossVectors(r,Zn)),La.normalize(),Ql.crossVectors(Zn,La),l[0]=La.x,l[4]=Ql.x,l[8]=Zn.x,l[1]=La.y,l[5]=Ql.y,l[9]=Zn.y,l[2]=La.z,l[6]=Ql.z,l[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],x=r[5],y=r[9],E=r[13],A=r[2],R=r[6],M=r[10],v=r[14],F=r[3],P=r[7],U=r[11],I=r[15],H=l[0],G=l[4],Q=l[8],D=l[12],C=l[1],V=l[5],at=l[9],ht=l[13],dt=l[2],ft=l[6],L=l[10],K=l[14],q=l[3],St=l[7],N=l[11],tt=l[15];return u[0]=h*H+d*C+m*dt+p*q,u[4]=h*G+d*V+m*ft+p*St,u[8]=h*Q+d*at+m*L+p*N,u[12]=h*D+d*ht+m*K+p*tt,u[1]=_*H+x*C+y*dt+E*q,u[5]=_*G+x*V+y*ft+E*St,u[9]=_*Q+x*at+y*L+E*N,u[13]=_*D+x*ht+y*K+E*tt,u[2]=A*H+R*C+M*dt+v*q,u[6]=A*G+R*V+M*ft+v*St,u[10]=A*Q+R*at+M*L+v*N,u[14]=A*D+R*ht+M*K+v*tt,u[3]=F*H+P*C+U*dt+I*q,u[7]=F*G+P*V+U*ft+I*St,u[11]=F*Q+P*at+U*L+I*N,u[15]=F*D+P*ht+U*K+I*tt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],_=e[2],x=e[6],y=e[10],E=e[14],A=e[3],R=e[7],M=e[11],v=e[15];return A*(+u*m*x-l*p*x-u*d*y+r*p*y+l*d*E-r*m*E)+R*(+i*m*E-i*p*y+u*h*y-l*h*E+l*p*_-u*m*_)+M*(+i*p*x-i*d*E-u*h*x+r*h*E+u*d*_-r*p*_)+v*(-l*d*_-i*m*x+i*d*y+l*h*x-r*h*y+r*m*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],x=e[9],y=e[10],E=e[11],A=e[12],R=e[13],M=e[14],v=e[15],F=x*M*p-R*y*p+R*m*E-d*M*E-x*m*v+d*y*v,P=A*y*p-_*M*p-A*m*E+h*M*E+_*m*v-h*y*v,U=_*R*p-A*x*p+A*d*E-h*R*E-_*d*v+h*x*v,I=A*x*m-_*R*m-A*d*y+h*R*y+_*d*M-h*x*M,H=i*F+r*P+l*U+u*I;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/H;return e[0]=F*G,e[1]=(R*y*u-x*M*u-R*l*E+r*M*E+x*l*v-r*y*v)*G,e[2]=(d*M*u-R*m*u+R*l*p-r*M*p-d*l*v+r*m*v)*G,e[3]=(x*m*u-d*y*u-x*l*p+r*y*p+d*l*E-r*m*E)*G,e[4]=P*G,e[5]=(_*M*u-A*y*u+A*l*E-i*M*E-_*l*v+i*y*v)*G,e[6]=(A*m*u-h*M*u-A*l*p+i*M*p+h*l*v-i*m*v)*G,e[7]=(h*y*u-_*m*u+_*l*p-i*y*p-h*l*E+i*m*E)*G,e[8]=U*G,e[9]=(A*x*u-_*R*u-A*r*E+i*R*E+_*r*v-i*x*v)*G,e[10]=(h*R*u-A*d*u+A*r*p-i*R*p-h*r*v+i*d*v)*G,e[11]=(_*d*u-h*x*u-_*r*p+i*x*p+h*r*E-i*d*E)*G,e[12]=I*G,e[13]=(_*R*l-A*x*l+A*r*y-i*R*y-_*r*M+i*x*M)*G,e[14]=(A*d*l-h*R*l-A*r*m+i*R*m+h*r*M-i*d*M)*G,e[15]=(h*x*l-_*d*l+_*r*m-i*x*m-h*r*y+i*d*y)*G,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,m=e.z,p=u*h,_=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,_=h+h,x=d+d,y=u*p,E=u*_,A=u*x,R=h*_,M=h*x,v=d*x,F=m*p,P=m*_,U=m*x,I=r.x,H=r.y,G=r.z;return l[0]=(1-(R+v))*I,l[1]=(E+U)*I,l[2]=(A-P)*I,l[3]=0,l[4]=(E-U)*H,l[5]=(1-(y+v))*H,l[6]=(M+F)*H,l[7]=0,l[8]=(A+P)*G,l[9]=(M-F)*G,l[10]=(1-(y+R))*G,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=is.set(l[0],l[1],l[2]).length();const h=is.set(l[4],l[5],l[6]).length(),d=is.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],gi.copy(this);const p=1/u,_=1/h,x=1/d;return gi.elements[0]*=p,gi.elements[1]*=p,gi.elements[2]*=p,gi.elements[4]*=_,gi.elements[5]*=_,gi.elements[6]*=_,gi.elements[8]*=x,gi.elements[9]*=x,gi.elements[10]*=x,i.setFromRotationMatrix(gi),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=Ui,m=!1){const p=this.elements,_=2*u/(i-e),x=2*u/(r-l),y=(i+e)/(i-e),E=(r+l)/(r-l);let A,R;if(m)A=u/(h-u),R=h*u/(h-u);else if(d===Ui)A=-(h+u)/(h-u),R=-2*h*u/(h-u);else if(d===Mc)A=-h/(h-u),R=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=x,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=Ui,m=!1){const p=this.elements,_=2/(i-e),x=2/(r-l),y=-(i+e)/(i-e),E=-(r+l)/(r-l);let A,R;if(m)A=1/(h-u),R=h/(h-u);else if(d===Ui)A=-2/(h-u),R=-(h+u)/(h-u);else if(d===Mc)A=-1/(h-u),R=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=x,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const is=new ot,gi=new sn,GS=new ot(0,0,0),VS=new ot(1,1,1),La=new ot,Ql=new ot,Zn=new ot,l_=new sn,c_=new No;class ia{constructor(e=0,i=0,r=0,l=ia.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],x=l[2],y=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,E),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Se(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,E),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Se(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return l_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(l_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return c_.setFromEuler(this),this.setFromQuaternion(c_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ia.DEFAULT_ORDER="XYZ";class dv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kS=0;const u_=new ot,as=new No,Zi=new sn,Jl=new ot,Mo=new ot,XS=new ot,WS=new No,f_=new ot(1,0,0),h_=new ot(0,1,0),d_=new ot(0,0,1),p_={type:"added"},qS={type:"removed"},rs={type:"childadded",child:null},Kf={type:"childremoved",child:null};class Gn extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const e=new ot,i=new ia,r=new No,l=new ot(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new fe}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return as.setFromAxisAngle(e,i),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,i){return as.setFromAxisAngle(e,i),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(f_,e)}rotateY(e){return this.rotateOnAxis(h_,e)}rotateZ(e){return this.rotateOnAxis(d_,e)}translateOnAxis(e,i){return u_.copy(e).applyQuaternion(this.quaternion),this.position.add(u_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(f_,e)}translateY(e){return this.translateOnAxis(h_,e)}translateZ(e){return this.translateOnAxis(d_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Jl.copy(e):Jl.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(Mo,Jl,this.up):Zi.lookAt(Jl,Mo,this.up),this.quaternion.setFromRotationMatrix(Zi),l&&(Zi.extractRotation(l.matrixWorld),as.setFromRotationMatrix(Zi),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(p_),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(qS),Kf.child=e,this.dispatchEvent(Kf),Kf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(p_),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,e,XS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,WS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];u(e.shapes,x)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),_=h(e.images),x=h(e.shapes),y=h(e.skeletons),E=h(e.animations),A=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),y.length>0&&(r.skeletons=y),E.length>0&&(r.animations=E),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Gn.DEFAULT_UP=new ot(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new ot,Ki=new ot,Qf=new ot,Qi=new ot,ss=new ot,os=new ot,m_=new ot,Jf=new ot,$f=new ot,th=new ot,eh=new Je,nh=new Je,ih=new Je;class xi{constructor(e=new ot,i=new ot,r=new ot){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),_i.subVectors(e,i),l.cross(_i);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){_i.subVectors(l,i),Ki.subVectors(r,i),Qf.subVectors(e,i);const h=_i.dot(_i),d=_i.dot(Ki),m=_i.dot(Qf),p=Ki.dot(Ki),_=Ki.dot(Qf),x=h*p-d*d;if(x===0)return u.set(0,0,0),null;const y=1/x,E=(p*m-d*_)*y,A=(h*_-d*m)*y;return u.set(1-E-A,A,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,i,r,l,u,h,d,m){return this.getBarycoord(e,i,r,l,Qi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Qi.x),m.addScaledVector(h,Qi.y),m.addScaledVector(d,Qi.z),m)}static getInterpolatedAttribute(e,i,r,l,u,h){return eh.setScalar(0),nh.setScalar(0),ih.setScalar(0),eh.fromBufferAttribute(e,i),nh.fromBufferAttribute(e,r),ih.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(eh,u.x),h.addScaledVector(nh,u.y),h.addScaledVector(ih,u.z),h}static isFrontFacing(e,i,r,l){return _i.subVectors(r,i),Ki.subVectors(e,i),_i.cross(Ki).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),_i.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return xi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return xi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;ss.subVectors(l,r),os.subVectors(u,r),Jf.subVectors(e,r);const m=ss.dot(Jf),p=os.dot(Jf);if(m<=0&&p<=0)return i.copy(r);$f.subVectors(e,l);const _=ss.dot($f),x=os.dot($f);if(_>=0&&x<=_)return i.copy(l);const y=m*x-_*p;if(y<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(ss,h);th.subVectors(e,u);const E=ss.dot(th),A=os.dot(th);if(A>=0&&E<=A)return i.copy(u);const R=E*p-m*A;if(R<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(r).addScaledVector(os,d);const M=_*A-E*x;if(M<=0&&x-_>=0&&E-A>=0)return m_.subVectors(u,l),d=(x-_)/(x-_+(E-A)),i.copy(l).addScaledVector(m_,d);const v=1/(M+R+y);return h=R*v,d=y*v,i.copy(r).addScaledVector(ss,h).addScaledVector(os,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oa={h:0,s:0,l:0},$l={h:0,s:0,l:0};function ah(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ce{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ae.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ae.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ae.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ae.workingColorSpace){if(e=US(e,1),i=Se(i,0,1),r=Se(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=ah(h,u,e+1/3),this.g=ah(h,u,e),this.b=ah(h,u,e-1/3)}return Ae.colorSpaceToWorking(this,l),this}setStyle(e,i=oi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=oi){const r=pv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return Ae.workingToColorSpace(Rn.copy(this),e),Math.round(Se(Rn.r*255,0,255))*65536+Math.round(Se(Rn.g*255,0,255))*256+Math.round(Se(Rn.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ae.workingColorSpace){Ae.workingToColorSpace(Rn.copy(this),i);const r=Rn.r,l=Rn.g,u=Rn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=_<=.5?x/(h+d):x/(2-h-d),h){case r:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-r)/x+2;break;case u:m=(r-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Ae.workingColorSpace){return Ae.workingToColorSpace(Rn.copy(this),i),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=oi){Ae.workingToColorSpace(Rn.copy(this),e);const i=Rn.r,r=Rn.g,l=Rn.b;return e!==oi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Oa),this.setHSL(Oa.h+e,Oa.s+i,Oa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Oa),e.getHSL($l);const r=Hf(Oa.h,$l.h,i),l=Hf(Oa.s,$l.s,i),u=Hf(Oa.l,$l.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Ce;Ce.NAMES=pv;let YS=0;class Oo extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=ds,this.side=Fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_h,this.blendDst=vh,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=e_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(r.blending=this.blending),this.side!==Fa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==_h&&(r.blendSrc=this.blendSrc),this.blendDst!==vh&&(r.blendDst=this.blendDst),this.blendEquation!==hr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==e_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mv extends Oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ia,this.combine=$_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new ot,tc=new le;let jS=0;class yi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=n_,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)tc.fromBufferAttribute(this,i),tc.applyMatrix3(e),this.setXY(i,tc.x,tc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=xo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=In(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=xo(i,this.array)),i}setX(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=xo(i,this.array)),i}setY(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=xo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=xo(i,this.array)),i}setW(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array),u=In(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==n_&&(e.usage=this.usage),e}}class gv extends yi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class _v extends yi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class ea extends yi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let ZS=0;const ri=new sn,rh=new Gn,ls=new ot,Kn=new Lo,Eo=new Lo,_n=new ot;class ra extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uv(e)?_v:gv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new fe().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,i,r){return ri.makeTranslation(e,i,r),this.applyMatrix4(ri),this}scale(e,i,r){return ri.makeScale(e,i,r),this.applyMatrix4(ri),this}lookAt(e){return rh.lookAt(e),rh.updateMatrix(),this.applyMatrix4(rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ea(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Kn.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(e){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Eo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(Kn.min,Eo.min),Kn.expandByPoint(_n),_n.addVectors(Kn.max,Eo.max),Kn.expandByPoint(_n)):(Kn.expandByPoint(Eo.min),Kn.expandByPoint(Eo.max))}Kn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)_n.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)_n.fromBufferAttribute(d,p),m&&(ls.fromBufferAttribute(e,p),_n.add(ls)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Q=0;Q<r.count;Q++)d[Q]=new ot,m[Q]=new ot;const p=new ot,_=new ot,x=new ot,y=new le,E=new le,A=new le,R=new ot,M=new ot;function v(Q,D,C){p.fromBufferAttribute(r,Q),_.fromBufferAttribute(r,D),x.fromBufferAttribute(r,C),y.fromBufferAttribute(u,Q),E.fromBufferAttribute(u,D),A.fromBufferAttribute(u,C),_.sub(p),x.sub(p),E.sub(y),A.sub(y);const V=1/(E.x*A.y-A.x*E.y);isFinite(V)&&(R.copy(_).multiplyScalar(A.y).addScaledVector(x,-E.y).multiplyScalar(V),M.copy(x).multiplyScalar(E.x).addScaledVector(_,-A.x).multiplyScalar(V),d[Q].add(R),d[D].add(R),d[C].add(R),m[Q].add(M),m[D].add(M),m[C].add(M))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let Q=0,D=F.length;Q<D;++Q){const C=F[Q],V=C.start,at=C.count;for(let ht=V,dt=V+at;ht<dt;ht+=3)v(e.getX(ht+0),e.getX(ht+1),e.getX(ht+2))}const P=new ot,U=new ot,I=new ot,H=new ot;function G(Q){I.fromBufferAttribute(l,Q),H.copy(I);const D=d[Q];P.copy(D),P.sub(I.multiplyScalar(I.dot(D))).normalize(),U.crossVectors(H,D);const V=U.dot(m[Q])<0?-1:1;h.setXYZW(Q,P.x,P.y,P.z,V)}for(let Q=0,D=F.length;Q<D;++Q){const C=F[Q],V=C.start,at=C.count;for(let ht=V,dt=V+at;ht<dt;ht+=3)G(e.getX(ht+0)),G(e.getX(ht+1)),G(e.getX(ht+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new yi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,E=r.count;y<E;y++)r.setXYZ(y,0,0,0);const l=new ot,u=new ot,h=new ot,d=new ot,m=new ot,p=new ot,_=new ot,x=new ot;if(e)for(let y=0,E=e.count;y<E;y+=3){const A=e.getX(y+0),R=e.getX(y+1),M=e.getX(y+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),_.subVectors(h,u),x.subVectors(l,u),_.cross(x),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,M),d.add(_),m.add(_),p.add(_),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,E=i.count;y<E;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),_.subVectors(h,u),x.subVectors(l,u),_.cross(x),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,x=d.normalized,y=new p.constructor(m.length*_);let E=0,A=0;for(let R=0,M=m.length;R<M;R++){d.isInterleavedBufferAttribute?E=m[R]*d.data.stride+d.offset:E=m[R]*_;for(let v=0;v<_;v++)y[A++]=p[E++]}return new yi(y,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ra,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let _=0,x=p.length;_<x;_++){const y=p[_],E=e(y,r);m.push(E)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,y=p.length;x<y;x++){const E=p[x];_.push(E.toJSON(e.data))}_.length>0&&(l[m]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=e.morphAttributes;for(const p in u){const _=[],x=u[p];for(let y=0,E=x.length;y<E;y++)_.push(x[y].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,_=h.length;p<_;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const g_=new sn,sr=new hv,ec=new Cc,__=new ot,nc=new ot,ic=new ot,ac=new ot,sh=new ot,rc=new ot,v_=new ot,sc=new ot;class ci extends Gn{constructor(e=new ra,i=new mv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){rc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=d[m],x=u[m];_!==0&&(sh.fromBufferAttribute(x,e),h?rc.addScaledVector(sh,_):rc.addScaledVector(sh.sub(i),_))}i.add(rc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ec.copy(r.boundingSphere),ec.applyMatrix4(u),sr.copy(e.ray).recast(e.near),!(ec.containsPoint(sr.origin)===!1&&(sr.intersectSphere(ec,__)===null||sr.origin.distanceToSquared(__)>(e.far-e.near)**2))&&(g_.copy(u).invert(),sr.copy(e.ray).applyMatrix4(g_),!(r.boundingBox!==null&&sr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,sr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,x=u.attributes.normal,y=u.groups,E=u.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,R=y.length;A<R;A++){const M=y[A],v=h[M.materialIndex],F=Math.max(M.start,E.start),P=Math.min(d.count,Math.min(M.start+M.count,E.start+E.count));for(let U=F,I=P;U<I;U+=3){const H=d.getX(U),G=d.getX(U+1),Q=d.getX(U+2);l=oc(this,v,e,r,p,_,x,H,G,Q),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),R=Math.min(d.count,E.start+E.count);for(let M=A,v=R;M<v;M+=3){const F=d.getX(M),P=d.getX(M+1),U=d.getX(M+2);l=oc(this,h,e,r,p,_,x,F,P,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,R=y.length;A<R;A++){const M=y[A],v=h[M.materialIndex],F=Math.max(M.start,E.start),P=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let U=F,I=P;U<I;U+=3){const H=U,G=U+1,Q=U+2;l=oc(this,v,e,r,p,_,x,H,G,Q),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),R=Math.min(m.count,E.start+E.count);for(let M=A,v=R;M<v;M+=3){const F=M,P=M+1,U=M+2;l=oc(this,h,e,r,p,_,x,F,P,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function KS(o,e,i,r,l,u,h,d){let m;if(e.side===Hn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,e.side===Fa,d),m===null)return null;sc.copy(d),sc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(sc);return p<i.near||p>i.far?null:{distance:p,point:sc.clone(),object:o}}function oc(o,e,i,r,l,u,h,d,m,p){o.getVertexPosition(d,nc),o.getVertexPosition(m,ic),o.getVertexPosition(p,ac);const _=KS(o,e,i,r,nc,ic,ac,v_);if(_){const x=new ot;xi.getBarycoord(v_,nc,ic,ac,x),l&&(_.uv=xi.getInterpolatedAttribute(l,d,m,p,x,new le)),u&&(_.uv1=xi.getInterpolatedAttribute(u,d,m,p,x,new le)),h&&(_.normal=xi.getInterpolatedAttribute(h,d,m,p,x,new ot),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new ot,materialIndex:0};xi.getNormal(nc,ic,ac,y.normal),_.face=y,_.barycoord=x}return _}class Po extends ra{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],_=[],x=[];let y=0,E=0;A("z","y","x",-1,-1,r,i,e,h,u,0),A("z","y","x",1,-1,r,i,-e,h,u,1),A("x","z","y",1,1,e,r,i,l,h,2),A("x","z","y",1,-1,e,r,-i,l,h,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new ea(p,3)),this.setAttribute("normal",new ea(_,3)),this.setAttribute("uv",new ea(x,2));function A(R,M,v,F,P,U,I,H,G,Q,D){const C=U/G,V=I/Q,at=U/2,ht=I/2,dt=H/2,ft=G+1,L=Q+1;let K=0,q=0;const St=new ot;for(let N=0;N<L;N++){const tt=N*V-ht;for(let xt=0;xt<ft;xt++){const yt=xt*C-at;St[R]=yt*F,St[M]=tt*P,St[v]=dt,p.push(St.x,St.y,St.z),St[R]=0,St[M]=0,St[v]=H>0?1:-1,_.push(St.x,St.y,St.z),x.push(xt/G),x.push(1-N/Q),K+=1}}for(let N=0;N<Q;N++)for(let tt=0;tt<G;tt++){const xt=y+tt+ft*N,yt=y+tt+ft*(N+1),Nt=y+(tt+1)+ft*(N+1),Ht=y+(tt+1)+ft*N;m.push(xt,yt,Ht),m.push(yt,Nt,Ht),q+=6}d.addGroup(E,q,D),E+=q,y+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Un(o){const e={};for(let i=0;i<o.length;i++){const r=xs(o[i]);for(const l in r)e[l]=r[l]}return e}function QS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function vv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ae.workingColorSpace}const JS={clone:xs,merge:Un};var $S=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ty=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class aa extends Oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$S,this.fragmentShader=ty,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=QS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Tc extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pa=new ot,x_=new le,S_=new le;class vi extends Tc{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ad*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ff*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ad*2*Math.atan(Math.tan(Ff*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Pa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pa.x,Pa.y).multiplyScalar(-e/Pa.z),Pa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pa.x,Pa.y).multiplyScalar(-e/Pa.z)}getViewSize(e,i){return this.getViewBounds(e,x_,S_),i.subVectors(S_,x_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ff*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const cs=-90,us=1;class ey extends Gn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new vi(cs,us,e,i);l.layers=this.layers,this.add(l);const u=new vi(cs,us,e,i);u.layers=this.layers,this.add(u);const h=new vi(cs,us,e,i);h.layers=this.layers,this.add(h);const d=new vi(cs,us,e,i);d.layers=this.layers,this.add(d);const m=new vi(cs,us,e,i);m.layers=this.layers,this.add(m);const p=new vi(cs,us,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===Ui)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Mc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,_]=this.children,x=e.getRenderTarget(),y=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(x,y,E),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class xv extends Nn{constructor(e=[],i=gs,r,l,u,h,d,m,p,_){super(e,i,r,l,u,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ny extends Ha{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new xv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Po(5,5,5),u=new aa({name:"CubemapFromEquirect",uniforms:xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:Ba});u.uniforms.tEquirect.value=i;const h=new ci(l,u),d=i.minFilter;return i.minFilter===pr&&(i.minFilter=Fn),new ey(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class lc extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iy={type:"move"};class oh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const R of e.hand.values()){const M=i.getJointPose(R,r),v=this._getHandJoint(p,R);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],y=_.position.distanceTo(x.position),E=.02,A=.005;p.inputState.pinching&&y>E+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=E-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(iy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new lc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class y_ extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ia,this.environmentIntensity=1,this.environmentRotation=new ia,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class ay extends Nn{constructor(e=null,i=1,r=1,l,u,h,d,m,p=Qn,_=Qn,x,y){super(null,h,d,m,p,_,l,u,x,y),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lh=new ot,ry=new ot,sy=new fe;class ur{constructor(e=new ot(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=lh.subVectors(r,i).cross(ry.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(lh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||sy.getNormalMatrix(e),l=this.coplanarPoint(lh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new Cc,oy=new le(.5,.5),cc=new ot;class Sv{constructor(e=new ur,i=new ur,r=new ur,l=new ur,u=new ur,h=new ur){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ui,r=!1){const l=this.planes,u=e.elements,h=u[0],d=u[1],m=u[2],p=u[3],_=u[4],x=u[5],y=u[6],E=u[7],A=u[8],R=u[9],M=u[10],v=u[11],F=u[12],P=u[13],U=u[14],I=u[15];if(l[0].setComponents(p-h,E-_,v-A,I-F).normalize(),l[1].setComponents(p+h,E+_,v+A,I+F).normalize(),l[2].setComponents(p+d,E+x,v+R,I+P).normalize(),l[3].setComponents(p-d,E-x,v-R,I-P).normalize(),r)l[4].setComponents(m,y,M,U).normalize(),l[5].setComponents(p-m,E-y,v-M,I-U).normalize();else if(l[4].setComponents(p-m,E-y,v-M,I-U).normalize(),i===Ui)l[5].setComponents(p+m,E+y,v+M,I+U).normalize();else if(i===Mc)l[5].setComponents(m,y,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),or.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){or.center.set(0,0,0);const i=oy.distanceTo(e.center);return or.radius=.7071067811865476+i,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(cc.x=l.normal.x>0?e.max.x:e.min.x,cc.y=l.normal.y>0?e.max.y:e.min.y,cc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(cc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ly extends Oo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bc=new ot,Ac=new ot,M_=new sn,To=new hv,uc=new Cc,ch=new ot,E_=new ot;class cy extends Gn{constructor(e=new ra,i=new ly){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)bc.fromBufferAttribute(i,l-1),Ac.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=bc.distanceTo(Ac);e.setAttribute("lineDistance",new ea(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),uc.copy(r.boundingSphere),uc.applyMatrix4(l),uc.radius+=u,e.ray.intersectsSphere(uc)===!1)return;M_.copy(l).invert(),To.copy(e.ray).applyMatrix4(M_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=r.index,y=r.attributes.position;if(_!==null){const E=Math.max(0,h.start),A=Math.min(_.count,h.start+h.count);for(let R=E,M=A-1;R<M;R+=p){const v=_.getX(R),F=_.getX(R+1),P=fc(this,e,To,m,v,F,R);P&&i.push(P)}if(this.isLineLoop){const R=_.getX(A-1),M=_.getX(E),v=fc(this,e,To,m,R,M,A-1);v&&i.push(v)}}else{const E=Math.max(0,h.start),A=Math.min(y.count,h.start+h.count);for(let R=E,M=A-1;R<M;R+=p){const v=fc(this,e,To,m,R,R+1,R);v&&i.push(v)}if(this.isLineLoop){const R=fc(this,e,To,m,A-1,E,A-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function fc(o,e,i,r,l,u,h){const d=o.geometry.attributes.position;if(bc.fromBufferAttribute(d,l),Ac.fromBufferAttribute(d,u),i.distanceSqToSegment(bc,Ac,ch,E_)>r)return;ch.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(ch);if(!(p<e.near||p>e.far))return{distance:p,point:E_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const T_=new ot,b_=new ot;class uy extends cy{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,u=i.count;l<u;l+=2)T_.fromBufferAttribute(i,l),b_.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+T_.distanceTo(b_);e.setAttribute("lineDistance",new ea(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yv extends Nn{constructor(e,i,r=gr,l,u,h,d=Qn,m=Qn,p,_=Co,x=1){if(_!==Co&&_!==wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:x};super(y,l,u,h,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Mv extends Nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class mr extends ra{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,x=e/d,y=i/m,E=[],A=[],R=[],M=[];for(let v=0;v<_;v++){const F=v*y-h;for(let P=0;P<p;P++){const U=P*x-u;A.push(U,-F,0),R.push(0,0,1),M.push(P/d),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let F=0;F<d;F++){const P=F+p*v,U=F+p*(v+1),I=F+1+p*(v+1),H=F+1+p*v;E.push(P,U,H),E.push(U,I,H)}this.setIndex(E),this.setAttribute("position",new ea(A,3)),this.setAttribute("normal",new ea(R,3)),this.setAttribute("uv",new ea(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.width,e.height,e.widthSegments,e.heightSegments)}}class hc extends aa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fy extends Oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hy extends Oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class dy extends Tc{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class py extends vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class my{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function A_(o,e,i,r){const l=gy(r);switch(i){case rv:return o*e;case ov:return o*e/l.components*l.byteLength;case fd:return o*e/l.components*l.byteLength;case lv:return o*e*2/l.components*l.byteLength;case hd:return o*e*2/l.components*l.byteLength;case sv:return o*e*3/l.components*l.byteLength;case li:return o*e*4/l.components*l.byteLength;case dd:return o*e*4/l.components*l.byteLength;case gc:case _c:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case vc:case xc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Uh:case Lh:return Math.max(o,16)*Math.max(e,8)/4;case Dh:case Nh:return Math.max(o,8)*Math.max(e,8)/2;case Oh:case Ph:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case zh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case kh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case qh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case jh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Qh:case Jh:case $h:return Math.ceil(o/4)*Math.ceil(e/4)*16;case td:case ed:return Math.ceil(o/4)*Math.ceil(e/4)*8;case nd:case id:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function gy(o){switch(o){case na:case ev:return{byteLength:1,components:1};case Ao:case nv:case Ss:return{byteLength:2,components:1};case cd:case ud:return{byteLength:2,components:4};case gr:case ld:case Di:return{byteLength:4,components:1};case iv:case av:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:od}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=od);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ev(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function _y(o){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,x=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,_),d.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,m,p){const _=m.array,x=m.updateRanges;if(o.bindBuffer(p,d),x.length===0)o.bufferSubData(p,0,_);else{x.sort((E,A)=>E.start-A.start);let y=0;for(let E=1;E<x.length;E++){const A=x[y],R=x[E];R.start<=A.start+A.count+1?A.count=Math.max(A.count,R.start+R.count-A.start):(++y,x[y]=R)}x.length=y+1;for(let E=0,A=x.length;E<A;E++){const R=x[E];o.bufferSubData(p,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var vy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,My=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ey=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ty=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,by=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ay=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ry=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Uy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ny=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,By=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Iy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Gy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ky=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ky=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Qy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_M=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,RM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,OM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,BM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,GM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,YM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$M=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,oE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _E=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ME=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,NE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,IE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,FE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,VE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ZE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pe={alphahash_fragment:vy,alphahash_pars_fragment:xy,alphamap_fragment:Sy,alphamap_pars_fragment:yy,alphatest_fragment:My,alphatest_pars_fragment:Ey,aomap_fragment:Ty,aomap_pars_fragment:by,batching_pars_vertex:Ay,batching_vertex:Ry,begin_vertex:Cy,beginnormal_vertex:wy,bsdfs:Dy,iridescence_fragment:Uy,bumpmap_pars_fragment:Ny,clipping_planes_fragment:Ly,clipping_planes_pars_fragment:Oy,clipping_planes_pars_vertex:Py,clipping_planes_vertex:zy,color_fragment:By,color_pars_fragment:Iy,color_pars_vertex:Fy,color_vertex:Hy,common:Gy,cube_uv_reflection_fragment:Vy,defaultnormal_vertex:ky,displacementmap_pars_vertex:Xy,displacementmap_vertex:Wy,emissivemap_fragment:qy,emissivemap_pars_fragment:Yy,colorspace_fragment:jy,colorspace_pars_fragment:Zy,envmap_fragment:Ky,envmap_common_pars_fragment:Qy,envmap_pars_fragment:Jy,envmap_pars_vertex:$y,envmap_physical_pars_fragment:uM,envmap_vertex:tM,fog_vertex:eM,fog_pars_vertex:nM,fog_fragment:iM,fog_pars_fragment:aM,gradientmap_pars_fragment:rM,lightmap_pars_fragment:sM,lights_lambert_fragment:oM,lights_lambert_pars_fragment:lM,lights_pars_begin:cM,lights_toon_fragment:fM,lights_toon_pars_fragment:hM,lights_phong_fragment:dM,lights_phong_pars_fragment:pM,lights_physical_fragment:mM,lights_physical_pars_fragment:gM,lights_fragment_begin:_M,lights_fragment_maps:vM,lights_fragment_end:xM,logdepthbuf_fragment:SM,logdepthbuf_pars_fragment:yM,logdepthbuf_pars_vertex:MM,logdepthbuf_vertex:EM,map_fragment:TM,map_pars_fragment:bM,map_particle_fragment:AM,map_particle_pars_fragment:RM,metalnessmap_fragment:CM,metalnessmap_pars_fragment:wM,morphinstance_vertex:DM,morphcolor_vertex:UM,morphnormal_vertex:NM,morphtarget_pars_vertex:LM,morphtarget_vertex:OM,normal_fragment_begin:PM,normal_fragment_maps:zM,normal_pars_fragment:BM,normal_pars_vertex:IM,normal_vertex:FM,normalmap_pars_fragment:HM,clearcoat_normal_fragment_begin:GM,clearcoat_normal_fragment_maps:VM,clearcoat_pars_fragment:kM,iridescence_pars_fragment:XM,opaque_fragment:WM,packing:qM,premultiplied_alpha_fragment:YM,project_vertex:jM,dithering_fragment:ZM,dithering_pars_fragment:KM,roughnessmap_fragment:QM,roughnessmap_pars_fragment:JM,shadowmap_pars_fragment:$M,shadowmap_pars_vertex:tE,shadowmap_vertex:eE,shadowmask_pars_fragment:nE,skinbase_vertex:iE,skinning_pars_vertex:aE,skinning_vertex:rE,skinnormal_vertex:sE,specularmap_fragment:oE,specularmap_pars_fragment:lE,tonemapping_fragment:cE,tonemapping_pars_fragment:uE,transmission_fragment:fE,transmission_pars_fragment:hE,uv_pars_fragment:dE,uv_pars_vertex:pE,uv_vertex:mE,worldpos_vertex:gE,background_vert:_E,background_frag:vE,backgroundCube_vert:xE,backgroundCube_frag:SE,cube_vert:yE,cube_frag:ME,depth_vert:EE,depth_frag:TE,distanceRGBA_vert:bE,distanceRGBA_frag:AE,equirect_vert:RE,equirect_frag:CE,linedashed_vert:wE,linedashed_frag:DE,meshbasic_vert:UE,meshbasic_frag:NE,meshlambert_vert:LE,meshlambert_frag:OE,meshmatcap_vert:PE,meshmatcap_frag:zE,meshnormal_vert:BE,meshnormal_frag:IE,meshphong_vert:FE,meshphong_frag:HE,meshphysical_vert:GE,meshphysical_frag:VE,meshtoon_vert:kE,meshtoon_frag:XE,points_vert:WE,points_frag:qE,shadow_vert:YE,shadow_frag:jE,sprite_vert:ZE,sprite_frag:KE},Pt={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},wi={basic:{uniforms:Un([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Un([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Un([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Un([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Un([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Un([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Un([Pt.points,Pt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Un([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Un([Pt.common,Pt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Un([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Un([Pt.sprite,Pt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Un([Pt.common,Pt.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Un([Pt.lights,Pt.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};wi.physical={uniforms:Un([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const dc={r:0,b:0,g:0},lr=new ia,QE=new sn;function JE(o,e,i,r,l,u,h){const d=new Ce(0);let m=u===!0?0:1,p,_,x=null,y=0,E=null;function A(P){let U=P.isScene===!0?P.background:null;return U&&U.isTexture&&(U=(P.backgroundBlurriness>0?i:e).get(U)),U}function R(P){let U=!1;const I=A(P);I===null?v(d,m):I&&I.isColor&&(v(I,1),U=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(P,U){const I=A(U);I&&(I.isCubeTexture||I.mapping===Rc)?(_===void 0&&(_=new ci(new Po(1,1,1),new aa({name:"BackgroundCubeMaterial",uniforms:xs(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(H,G,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),lr.copy(U.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),_.material.uniforms.envMap.value=I,_.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(QE.makeRotationFromEuler(lr)),_.material.toneMapped=Ae.getTransfer(I.colorSpace)!==Be,(x!==I||y!==I.version||E!==o.toneMapping)&&(_.material.needsUpdate=!0,x=I,y=I.version,E=o.toneMapping),_.layers.enableAll(),P.unshift(_,_.geometry,_.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new ci(new mr(2,2),new aa({name:"BackgroundMaterial",uniforms:xs(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Fa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(I.colorSpace)!==Be,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(x!==I||y!==I.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,x=I,y=I.version,E=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function v(P,U){P.getRGB(dc,vv(o)),r.buffers.color.setClear(dc.r,dc.g,dc.b,U,h)}function F(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,U=1){d.set(P),m=U,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,v(d,m)},render:R,addToRenderList:M,dispose:F}}function $E(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=y(null);let u=l,h=!1;function d(C,V,at,ht,dt){let ft=!1;const L=x(ht,at,V);u!==L&&(u=L,p(u.object)),ft=E(C,ht,at,dt),ft&&A(C,ht,at,dt),dt!==null&&e.update(dt,o.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,U(C,V,at,ht),dt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(dt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function _(C){return o.deleteVertexArray(C)}function x(C,V,at){const ht=at.wireframe===!0;let dt=r[C.id];dt===void 0&&(dt={},r[C.id]=dt);let ft=dt[V.id];ft===void 0&&(ft={},dt[V.id]=ft);let L=ft[ht];return L===void 0&&(L=y(m()),ft[ht]=L),L}function y(C){const V=[],at=[],ht=[];for(let dt=0;dt<i;dt++)V[dt]=0,at[dt]=0,ht[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:at,attributeDivisors:ht,object:C,attributes:{},index:null}}function E(C,V,at,ht){const dt=u.attributes,ft=V.attributes;let L=0;const K=at.getAttributes();for(const q in K)if(K[q].location>=0){const N=dt[q];let tt=ft[q];if(tt===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(tt=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(tt=C.instanceColor)),N===void 0||N.attribute!==tt||tt&&N.data!==tt.data)return!0;L++}return u.attributesNum!==L||u.index!==ht}function A(C,V,at,ht){const dt={},ft=V.attributes;let L=0;const K=at.getAttributes();for(const q in K)if(K[q].location>=0){let N=ft[q];N===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(N=C.instanceColor));const tt={};tt.attribute=N,N&&N.data&&(tt.data=N.data),dt[q]=tt,L++}u.attributes=dt,u.attributesNum=L,u.index=ht}function R(){const C=u.newAttributes;for(let V=0,at=C.length;V<at;V++)C[V]=0}function M(C){v(C,0)}function v(C,V){const at=u.newAttributes,ht=u.enabledAttributes,dt=u.attributeDivisors;at[C]=1,ht[C]===0&&(o.enableVertexAttribArray(C),ht[C]=1),dt[C]!==V&&(o.vertexAttribDivisor(C,V),dt[C]=V)}function F(){const C=u.newAttributes,V=u.enabledAttributes;for(let at=0,ht=V.length;at<ht;at++)V[at]!==C[at]&&(o.disableVertexAttribArray(at),V[at]=0)}function P(C,V,at,ht,dt,ft,L){L===!0?o.vertexAttribIPointer(C,V,at,dt,ft):o.vertexAttribPointer(C,V,at,ht,dt,ft)}function U(C,V,at,ht){R();const dt=ht.attributes,ft=at.getAttributes(),L=V.defaultAttributeValues;for(const K in ft){const q=ft[K];if(q.location>=0){let St=dt[K];if(St===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(St=C.instanceColor)),St!==void 0){const N=St.normalized,tt=St.itemSize,xt=e.get(St);if(xt===void 0)continue;const yt=xt.buffer,Nt=xt.type,Ht=xt.bytesPerElement,nt=Nt===o.INT||Nt===o.UNSIGNED_INT||St.gpuType===ld;if(St.isInterleavedBufferAttribute){const gt=St.data,Et=gt.stride,Zt=St.offset;if(gt.isInstancedInterleavedBuffer){for(let qt=0;qt<q.locationSize;qt++)v(q.location+qt,gt.meshPerAttribute);C.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0&&(ht._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let qt=0;qt<q.locationSize;qt++)M(q.location+qt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let qt=0;qt<q.locationSize;qt++)P(q.location+qt,tt/q.locationSize,Nt,N,Et*Ht,(Zt+tt/q.locationSize*qt)*Ht,nt)}else{if(St.isInstancedBufferAttribute){for(let gt=0;gt<q.locationSize;gt++)v(q.location+gt,St.meshPerAttribute);C.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0&&(ht._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let gt=0;gt<q.locationSize;gt++)M(q.location+gt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let gt=0;gt<q.locationSize;gt++)P(q.location+gt,tt/q.locationSize,Nt,N,tt*Ht,tt/q.locationSize*gt*Ht,nt)}}else if(L!==void 0){const N=L[K];if(N!==void 0)switch(N.length){case 2:o.vertexAttrib2fv(q.location,N);break;case 3:o.vertexAttrib3fv(q.location,N);break;case 4:o.vertexAttrib4fv(q.location,N);break;default:o.vertexAttrib1fv(q.location,N)}}}}F()}function I(){Q();for(const C in r){const V=r[C];for(const at in V){const ht=V[at];for(const dt in ht)_(ht[dt].object),delete ht[dt];delete V[at]}delete r[C]}}function H(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const at in V){const ht=V[at];for(const dt in ht)_(ht[dt].object),delete ht[dt];delete V[at]}delete r[C.id]}function G(C){for(const V in r){const at=r[V];if(at[C.id]===void 0)continue;const ht=at[C.id];for(const dt in ht)_(ht[dt].object),delete ht[dt];delete at[C.id]}}function Q(){D(),h=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:D,dispose:I,releaseStatesOfGeometry:H,releaseStatesOfProgram:G,initAttributes:R,enableAttribute:M,disableUnusedAttributes:F}}function tT(o,e,i){let r;function l(p){r=p}function u(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,x){x!==0&&(o.drawArraysInstanced(r,p,_,x),i.update(_,r,x))}function d(p,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,x);let E=0;for(let A=0;A<x;A++)E+=_[A];i.update(E,r,1)}function m(p,_,x,y){if(x===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let A=0;A<p.length;A++)h(p[A],_[A],y[A]);else{E.multiDrawArraysInstancedWEBGL(r,p,0,_,0,y,0,x);let A=0;for(let R=0;R<x;R++)A+=_[R]*y[R];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function eT(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(G){return!(G!==li&&r.convert(G)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(G){const Q=G===Ss&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(G!==na&&r.convert(G)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&G!==Di&&!Q)}function m(G){if(G==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=A>0,H=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:y,maxTextures:E,maxVertexTextures:A,maxTextureSize:R,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:F,maxVaryings:P,maxFragmentUniforms:U,vertexTextures:I,maxSamples:H}}function nT(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new ur,d=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const E=x.length!==0||y||r!==0||l;return l=y,r=x.length,E},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,y){i=_(x,y,0)},this.setState=function(x,y,E){const A=x.clippingPlanes,R=x.clipIntersection,M=x.clipShadows,v=o.get(x);if(!l||A===null||A.length===0||u&&!M)u?_(null):p();else{const F=u?0:r,P=F*4;let U=v.clippingState||null;m.value=U,U=_(A,y,P,E);for(let I=0;I!==P;++I)U[I]=i[I];v.clippingState=U,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(x,y,E,A){const R=x!==null?x.length:0;let M=null;if(R!==0){if(M=m.value,A!==!0||M===null){const v=E+R*4,F=y.matrixWorldInverse;d.getNormalMatrix(F),(M===null||M.length<v)&&(M=new Float32Array(v));for(let P=0,U=E;P!==R;++P,U+=4)h.copy(x[P]).applyMatrix4(F,d),h.normal.toArray(M,U),M[U+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,M}}function iT(o){let e=new WeakMap;function i(h,d){return d===Ah?h.mapping=gs:d===Rh&&(h.mapping=_s),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ah||d===Rh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new ny(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const hs=4,R_=[.125,.215,.35,.446,.526,.582],dr=20,uh=new dy,C_=new Ce;let fh=null,hh=0,dh=0,ph=!1;const fr=(1+Math.sqrt(5))/2,fs=1/fr,w_=[new ot(-fr,fs,0),new ot(fr,fs,0),new ot(-fs,0,fr),new ot(fs,0,fr),new ot(0,fr,-fs),new ot(0,fr,fs),new ot(-1,1,-1),new ot(1,1,-1),new ot(-1,1,1),new ot(1,1,1)],aT=new ot;class D_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=aT}=u;fh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=L_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=N_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fh,hh,dh),this._renderer.xr.enabled=ph,e.scissorTest=!1,pc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===gs||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Ss,format:li,colorSpace:vs,depthBuffer:!1},l=U_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=U_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rT(u)),this._blurMaterial=sT(u,e,i)}return l}_compileMaterial(e){const i=new ci(this._lodPlanes[0],e);this._renderer.compile(i,uh)}_sceneToCubeUV(e,i,r,l,u){const m=new vi(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,y=x.autoClear,E=x.toneMapping;x.getClearColor(C_),x.toneMapping=Ia,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null));const R=new mv({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),M=new ci(new Po,R);let v=!1;const F=e.background;F?F.isColor&&(R.color.copy(F),e.background=null,v=!0):(R.color.copy(C_),v=!0);for(let P=0;P<6;P++){const U=P%3;U===0?(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[P],u.y,u.z)):U===1?(m.up.set(0,0,p[P]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[P],u.z)):(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[P]));const I=this._cubeSize;pc(l,U*I,P>2?I:0,I,I),x.setRenderTarget(l),v&&x.render(M,m),x.render(e,m)}M.geometry.dispose(),M.material.dispose(),x.toneMapping=E,x.autoClear=y,e.background=F}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===gs||e.mapping===_s;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=L_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=N_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new ci(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;pc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,uh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=w_[(l-u-1)%w_.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new ci(this._lodPlanes[l],p),y=p.uniforms,E=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*dr-1),R=u/A,M=isFinite(u)?1+Math.floor(_*R):dr;M>dr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${dr}`);const v=[];let F=0;for(let G=0;G<dr;++G){const Q=G/R,D=Math.exp(-Q*Q/2);v.push(D),G===0?F+=D:G<M&&(F+=2*D)}for(let G=0;G<v.length;G++)v[G]=v[G]/F;y.envMap.value=e.texture,y.samples.value=M,y.weights.value=v,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:P}=this;y.dTheta.value=A,y.mipInt.value=P-r;const U=this._sizeLods[l],I=3*U*(l>P-hs?l-P+hs:0),H=4*(this._cubeSize-U);pc(i,I,H,3*U,2*U),m.setRenderTarget(i),m.render(x,uh)}}function rT(o){const e=[],i=[],r=[];let l=o;const u=o-hs+1+R_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-hs?m=R_[h-o+hs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),_=-p,x=1+p,y=[_,_,x,_,x,x,_,_,x,x,_,x],E=6,A=6,R=3,M=2,v=1,F=new Float32Array(R*A*E),P=new Float32Array(M*A*E),U=new Float32Array(v*A*E);for(let H=0;H<E;H++){const G=H%3*2/3-1,Q=H>2?0:-1,D=[G,Q,0,G+2/3,Q,0,G+2/3,Q+1,0,G,Q,0,G+2/3,Q+1,0,G,Q+1,0];F.set(D,R*A*H),P.set(y,M*A*H);const C=[H,H,H,H,H,H];U.set(C,v*A*H)}const I=new ra;I.setAttribute("position",new yi(F,R)),I.setAttribute("uv",new yi(P,M)),I.setAttribute("faceIndex",new yi(U,v)),e.push(I),l>hs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function U_(o,e,i){const r=new Ha(o,e,i);return r.texture.mapping=Rc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function pc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function sT(o,e,i){const r=new Float32Array(dr),l=new ot(0,1,0);return new aa({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function N_(){return new aa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function L_(){return new aa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function md(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ah||m===Rh,_=m===gs||m===_s;if(p||_){let x=e.get(d);const y=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new D_(o)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const E=d.image;return p&&E&&E.height>0||_&&E&&l(E)?(i===null&&(i=new D_(o)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function lT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Do("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function cT(o,e,i,r){const l={},u=new WeakMap;function h(x){const y=x.target;y.index!==null&&e.remove(y.index);for(const A in y.attributes)e.remove(y.attributes[A]);y.removeEventListener("dispose",h),delete l[y.id];const E=u.get(y);E&&(e.remove(E),u.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(x,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(x){const y=x.attributes;for(const E in y)e.update(y[E],o.ARRAY_BUFFER)}function p(x){const y=[],E=x.index,A=x.attributes.position;let R=0;if(E!==null){const F=E.array;R=E.version;for(let P=0,U=F.length;P<U;P+=3){const I=F[P+0],H=F[P+1],G=F[P+2];y.push(I,H,H,G,G,I)}}else if(A!==void 0){const F=A.array;R=A.version;for(let P=0,U=F.length/3-1;P<U;P+=3){const I=P+0,H=P+1,G=P+2;y.push(I,H,H,G,G,I)}}else return;const M=new(uv(y)?_v:gv)(y,1);M.version=R;const v=u.get(x);v&&e.remove(v),u.set(x,M)}function _(x){const y=u.get(x);if(y){const E=x.index;E!==null&&y.version<E.version&&p(x)}else p(x);return u.get(x)}return{get:d,update:m,getWireframeAttribute:_}}function uT(o,e,i){let r;function l(y){r=y}let u,h;function d(y){u=y.type,h=y.bytesPerElement}function m(y,E){o.drawElements(r,E,u,y*h),i.update(E,r,1)}function p(y,E,A){A!==0&&(o.drawElementsInstanced(r,E,u,y*h,A),i.update(E,r,A))}function _(y,E,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,u,y,0,A);let M=0;for(let v=0;v<A;v++)M+=E[v];i.update(M,r,1)}function x(y,E,A,R){if(A===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<y.length;v++)p(y[v]/h,E[v],R[v]);else{M.multiDrawElementsInstancedWEBGL(r,E,0,u,y,0,R,0,A);let v=0;for(let F=0;F<A;F++)v+=E[F]*R[F];i.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function fT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function hT(o,e,i){const r=new WeakMap,l=new Je;function u(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let y=r.get(d);if(y===void 0||y.count!==x){let C=function(){Q.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var E=C;y!==void 0&&y.texture.dispose();const A=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],F=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let U=0;A===!0&&(U=1),R===!0&&(U=2),M===!0&&(U=3);let I=d.attributes.position.count*U,H=1;I>e.maxTextureSize&&(H=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const G=new Float32Array(I*H*4*x),Q=new fv(G,I,H,x);Q.type=Di,Q.needsUpdate=!0;const D=U*4;for(let V=0;V<x;V++){const at=v[V],ht=F[V],dt=P[V],ft=I*H*4*V;for(let L=0;L<at.count;L++){const K=L*D;A===!0&&(l.fromBufferAttribute(at,L),G[ft+K+0]=l.x,G[ft+K+1]=l.y,G[ft+K+2]=l.z,G[ft+K+3]=0),R===!0&&(l.fromBufferAttribute(ht,L),G[ft+K+4]=l.x,G[ft+K+5]=l.y,G[ft+K+6]=l.z,G[ft+K+7]=0),M===!0&&(l.fromBufferAttribute(dt,L),G[ft+K+8]=l.x,G[ft+K+9]=l.y,G[ft+K+10]=l.z,G[ft+K+11]=dt.itemSize===4?l.w:1)}}y={count:x,texture:Q,size:new le(I,H)},r.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let M=0;M<p.length;M++)A+=p[M];const R=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:u}}function dT(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,x=e.get(m,_);if(l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const Tv=new Nn,O_=new yv(1,1),bv=new fv,Av=new FS,Rv=new xv,P_=[],z_=[],B_=new Float32Array(16),I_=new Float32Array(9),F_=new Float32Array(4);function Ms(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=P_[l];if(u===void 0&&(u=new Float32Array(l),P_[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function fn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function hn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function wc(o,e){let i=z_[e];i===void 0&&(i=new Int32Array(e),z_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function pT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function mT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2fv(this.addr,e),hn(i,e)}}function gT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(fn(i,e))return;o.uniform3fv(this.addr,e),hn(i,e)}}function _T(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4fv(this.addr,e),hn(i,e)}}function vT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;F_.set(r),o.uniformMatrix2fv(this.addr,!1,F_),hn(i,r)}}function xT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;I_.set(r),o.uniformMatrix3fv(this.addr,!1,I_),hn(i,r)}}function ST(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;B_.set(r),o.uniformMatrix4fv(this.addr,!1,B_),hn(i,r)}}function yT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function MT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2iv(this.addr,e),hn(i,e)}}function ET(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3iv(this.addr,e),hn(i,e)}}function TT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4iv(this.addr,e),hn(i,e)}}function bT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function AT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2uiv(this.addr,e),hn(i,e)}}function RT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3uiv(this.addr,e),hn(i,e)}}function CT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4uiv(this.addr,e),hn(i,e)}}function wT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(O_.compareFunction=cv,u=O_):u=Tv,i.setTexture2D(e||u,l)}function DT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Av,l)}function UT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Rv,l)}function NT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||bv,l)}function LT(o){switch(o){case 5126:return pT;case 35664:return mT;case 35665:return gT;case 35666:return _T;case 35674:return vT;case 35675:return xT;case 35676:return ST;case 5124:case 35670:return yT;case 35667:case 35671:return MT;case 35668:case 35672:return ET;case 35669:case 35673:return TT;case 5125:return bT;case 36294:return AT;case 36295:return RT;case 36296:return CT;case 35678:case 36198:case 36298:case 36306:case 35682:return wT;case 35679:case 36299:case 36307:return DT;case 35680:case 36300:case 36308:case 36293:return UT;case 36289:case 36303:case 36311:case 36292:return NT}}function OT(o,e){o.uniform1fv(this.addr,e)}function PT(o,e){const i=Ms(e,this.size,2);o.uniform2fv(this.addr,i)}function zT(o,e){const i=Ms(e,this.size,3);o.uniform3fv(this.addr,i)}function BT(o,e){const i=Ms(e,this.size,4);o.uniform4fv(this.addr,i)}function IT(o,e){const i=Ms(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function FT(o,e){const i=Ms(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function HT(o,e){const i=Ms(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function GT(o,e){o.uniform1iv(this.addr,e)}function VT(o,e){o.uniform2iv(this.addr,e)}function kT(o,e){o.uniform3iv(this.addr,e)}function XT(o,e){o.uniform4iv(this.addr,e)}function WT(o,e){o.uniform1uiv(this.addr,e)}function qT(o,e){o.uniform2uiv(this.addr,e)}function YT(o,e){o.uniform3uiv(this.addr,e)}function jT(o,e){o.uniform4uiv(this.addr,e)}function ZT(o,e,i){const r=this.cache,l=e.length,u=wc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Tv,u[h])}function KT(o,e,i){const r=this.cache,l=e.length,u=wc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Av,u[h])}function QT(o,e,i){const r=this.cache,l=e.length,u=wc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Rv,u[h])}function JT(o,e,i){const r=this.cache,l=e.length,u=wc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||bv,u[h])}function $T(o){switch(o){case 5126:return OT;case 35664:return PT;case 35665:return zT;case 35666:return BT;case 35674:return IT;case 35675:return FT;case 35676:return HT;case 5124:case 35670:return GT;case 35667:case 35671:return VT;case 35668:case 35672:return kT;case 35669:case 35673:return XT;case 5125:return WT;case 36294:return qT;case 36295:return YT;case 36296:return jT;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return QT;case 36289:case 36303:case 36311:case 36292:return JT}}class tb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=LT(i.type)}}class eb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=$T(i.type)}}class nb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const mh=/(\w+)(\])?(\[|\.)?/g;function H_(o,e){o.seq.push(e),o.map[e.id]=e}function ib(o,e,i){const r=o.name,l=r.length;for(mh.lastIndex=0;;){const u=mh.exec(r),h=mh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){H_(i,p===void 0?new tb(d,o,e):new eb(d,o,e));break}else{let x=i.map[d];x===void 0&&(x=new nb(d),H_(i,x)),i=x}}}class Sc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);ib(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function G_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const ab=37297;let rb=0;function sb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const V_=new fe;function ob(o){Ae._getMatrix(V_,Ae.workingColorSpace,o);const e=`mat3( ${V_.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(o)){case yc:return[e,"LinearTransferOETF"];case Be:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function k_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+sb(o.getShaderSource(e),d)}else return u}function lb(o,e){const i=ob(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function cb(o,e){let i;switch(e){case hS:i="Linear";break;case dS:i="Reinhard";break;case pS:i="Cineon";break;case mS:i="ACESFilmic";break;case _S:i="AgX";break;case vS:i="Neutral";break;case gS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const mc=new ot;function ub(){Ae.getLuminanceCoefficients(mc);const o=mc.x.toFixed(4),e=mc.y.toFixed(4),i=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function hb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function db(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function bo(o){return o!==""}function X_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function W_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pb=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(o){return o.replace(pb,gb)}const mb=new Map;function gb(o,e){let i=pe[e];if(i===void 0){const r=mb.get(e);if(r!==void 0)i=pe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return rd(i)}const _b=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function q_(o){return o.replace(_b,vb)}function vb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Y_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===J_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Wx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function Sb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case gs:case _s:e="ENVMAP_TYPE_CUBE";break;case Rc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case _s:e="ENVMAP_MODE_REFRACTION";break}return e}function Mb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case $_:e="ENVMAP_BLENDING_MULTIPLY";break;case uS:e="ENVMAP_BLENDING_MIX";break;case fS:e="ENVMAP_BLENDING_ADD";break}return e}function Eb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Tb(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=xb(i),p=Sb(i),_=yb(i),x=Mb(i),y=Eb(i),E=fb(i),A=hb(u),R=l.createProgram();let M,v,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(bo).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(bo).join(`
`),v.length>0&&(v+=`
`)):(M=[Y_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),v=[Y_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ia?"#define TONE_MAPPING":"",i.toneMapping!==Ia?pe.tonemapping_pars_fragment:"",i.toneMapping!==Ia?cb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,lb("linearToOutputTexel",i.outputColorSpace),ub(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(bo).join(`
`)),h=rd(h),h=X_(h,i),h=W_(h,i),d=rd(d),d=X_(d,i),d=W_(d,i),h=q_(h),d=q_(d),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===i_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===i_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=F+M+h,U=F+v+d,I=G_(l,l.VERTEX_SHADER,P),H=G_(l,l.FRAGMENT_SHADER,U);l.attachShader(R,I),l.attachShader(R,H),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function G(V){if(o.debug.checkShaderErrors){const at=l.getProgramInfoLog(R)||"",ht=l.getShaderInfoLog(I)||"",dt=l.getShaderInfoLog(H)||"",ft=at.trim(),L=ht.trim(),K=dt.trim();let q=!0,St=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,I,H);else{const N=k_(l,I,"vertex"),tt=k_(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ft+`
`+N+`
`+tt)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(L===""||K==="")&&(St=!1);St&&(V.diagnostics={runnable:q,programLog:ft,vertexShader:{log:L,prefix:M},fragmentShader:{log:K,prefix:v}})}l.deleteShader(I),l.deleteShader(H),Q=new Sc(l,R),D=db(l,R)}let Q;this.getUniforms=function(){return Q===void 0&&G(this),Q};let D;this.getAttributes=function(){return D===void 0&&G(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,ab)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=rb++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=I,this.fragmentShader=H,this}let bb=0;class Ab{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Rb(e),i.set(e,r)),r}}class Rb{constructor(e){this.id=bb++,this.code=e,this.usedTimes=0}}function Cb(o,e,i,r,l,u,h){const d=new dv,m=new Ab,p=new Set,_=[],x=l.logarithmicDepthBuffer,y=l.vertexTextures;let E=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,C,V,at,ht){const dt=at.fog,ft=ht.geometry,L=D.isMeshStandardMaterial?at.environment:null,K=(D.isMeshStandardMaterial?i:e).get(D.envMap||L),q=K&&K.mapping===Rc?K.image.height:null,St=A[D.type];D.precision!==null&&(E=l.getMaxPrecision(D.precision),E!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",E,"instead."));const N=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,tt=N!==void 0?N.length:0;let xt=0;ft.morphAttributes.position!==void 0&&(xt=1),ft.morphAttributes.normal!==void 0&&(xt=2),ft.morphAttributes.color!==void 0&&(xt=3);let yt,Nt,Ht,nt;if(St){const Ee=wi[St];yt=Ee.vertexShader,Nt=Ee.fragmentShader}else yt=D.vertexShader,Nt=D.fragmentShader,m.update(D),Ht=m.getVertexShaderID(D),nt=m.getFragmentShaderID(D);const gt=o.getRenderTarget(),Et=o.state.buffers.depth.getReversed(),Zt=ht.isInstancedMesh===!0,qt=ht.isBatchedMesh===!0,ce=!!D.map,Ye=!!D.matcap,z=!!K,we=!!D.aoMap,re=!!D.lightMap,$t=!!D.bumpMap,zt=!!D.normalMap,ye=!!D.displacementMap,Gt=!!D.emissiveMap,se=!!D.metalnessMap,He=!!D.roughnessMap,Ge=D.anisotropy>0,w=D.clearcoat>0,g=D.dispersion>0,B=D.iridescence>0,J=D.sheen>0,ct=D.transmission>0,it=Ge&&!!D.anisotropyMap,At=w&&!!D.clearcoatMap,Rt=w&&!!D.clearcoatNormalMap,Bt=w&&!!D.clearcoatRoughnessMap,Vt=B&&!!D.iridescenceMap,Mt=B&&!!D.iridescenceThicknessMap,Dt=J&&!!D.sheenColorMap,Kt=J&&!!D.sheenRoughnessMap,Wt=!!D.specularMap,Ut=!!D.specularColorMap,oe=!!D.specularIntensityMap,W=ct&&!!D.transmissionMap,Ct=ct&&!!D.thicknessMap,wt=!!D.gradientMap,It=!!D.alphaMap,Tt=D.alphaTest>0,vt=!!D.alphaHash,Xt=!!D.extensions;let ae=Ia;D.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(ae=o.toneMapping);const De={shaderID:St,shaderType:D.type,shaderName:D.name,vertexShader:yt,fragmentShader:Nt,defines:D.defines,customVertexShaderID:Ht,customFragmentShaderID:nt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:E,batching:qt,batchingColor:qt&&ht._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&ht.instanceColor!==null,instancingMorph:Zt&&ht.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:gt===null?o.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:vs,alphaToCoverage:!!D.alphaToCoverage,map:ce,matcap:Ye,envMap:z,envMapMode:z&&K.mapping,envMapCubeUVHeight:q,aoMap:we,lightMap:re,bumpMap:$t,normalMap:zt,displacementMap:y&&ye,emissiveMap:Gt,normalMapObjectSpace:zt&&D.normalMapType===ES,normalMapTangentSpace:zt&&D.normalMapType===MS,metalnessMap:se,roughnessMap:He,anisotropy:Ge,anisotropyMap:it,clearcoat:w,clearcoatMap:At,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Bt,dispersion:g,iridescence:B,iridescenceMap:Vt,iridescenceThicknessMap:Mt,sheen:J,sheenColorMap:Dt,sheenRoughnessMap:Kt,specularMap:Wt,specularColorMap:Ut,specularIntensityMap:oe,transmission:ct,transmissionMap:W,thicknessMap:Ct,gradientMap:wt,opaque:D.transparent===!1&&D.blending===ds&&D.alphaToCoverage===!1,alphaMap:It,alphaTest:Tt,alphaHash:vt,combine:D.combine,mapUv:ce&&R(D.map.channel),aoMapUv:we&&R(D.aoMap.channel),lightMapUv:re&&R(D.lightMap.channel),bumpMapUv:$t&&R(D.bumpMap.channel),normalMapUv:zt&&R(D.normalMap.channel),displacementMapUv:ye&&R(D.displacementMap.channel),emissiveMapUv:Gt&&R(D.emissiveMap.channel),metalnessMapUv:se&&R(D.metalnessMap.channel),roughnessMapUv:He&&R(D.roughnessMap.channel),anisotropyMapUv:it&&R(D.anisotropyMap.channel),clearcoatMapUv:At&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Bt&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&R(D.sheenRoughnessMap.channel),specularMapUv:Wt&&R(D.specularMap.channel),specularColorMapUv:Ut&&R(D.specularColorMap.channel),specularIntensityMapUv:oe&&R(D.specularIntensityMap.channel),transmissionMapUv:W&&R(D.transmissionMap.channel),thicknessMapUv:Ct&&R(D.thicknessMap.channel),alphaMapUv:It&&R(D.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(zt||Ge),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:ht.isPoints===!0&&!!ft.attributes.uv&&(ce||It),fog:!!dt,useFog:D.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Et,skinning:ht.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:xt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ae,decodeVideoTexture:ce&&D.map.isVideoTexture===!0&&Ae.getTransfer(D.map.colorSpace)===Be,decodeVideoTextureEmissive:Gt&&D.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(D.emissiveMap.colorSpace)===Be,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===$i,flipSided:D.side===Hn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Xt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&D.extensions.multiDraw===!0||qt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return De.vertexUv1s=p.has(1),De.vertexUv2s=p.has(2),De.vertexUv3s=p.has(3),p.clear(),De}function v(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)C.push(V),C.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(F(C,D),P(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function F(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function P(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function U(D){const C=A[D.type];let V;if(C){const at=wi[C];V=JS.clone(at.uniforms)}else V=D.uniforms;return V}function I(D,C){let V;for(let at=0,ht=_.length;at<ht;at++){const dt=_[at];if(dt.cacheKey===C){V=dt,++V.usedTimes;break}}return V===void 0&&(V=new Tb(o,C,D,u),_.push(V)),V}function H(D){if(--D.usedTimes===0){const C=_.indexOf(D);_[C]=_[_.length-1],_.pop(),D.destroy()}}function G(D){m.remove(D)}function Q(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:U,acquireProgram:I,releaseProgram:H,releaseShaderCache:G,programs:_,dispose:Q}}function wb(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function Db(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function j_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Z_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(x,y,E,A,R,M){let v=o[e];return v===void 0?(v={id:x.id,object:x,geometry:y,material:E,groupOrder:A,renderOrder:x.renderOrder,z:R,group:M},o[e]=v):(v.id=x.id,v.object=x,v.geometry=y,v.material=E,v.groupOrder=A,v.renderOrder=x.renderOrder,v.z=R,v.group=M),e++,v}function d(x,y,E,A,R,M){const v=h(x,y,E,A,R,M);E.transmission>0?r.push(v):E.transparent===!0?l.push(v):i.push(v)}function m(x,y,E,A,R,M){const v=h(x,y,E,A,R,M);E.transmission>0?r.unshift(v):E.transparent===!0?l.unshift(v):i.unshift(v)}function p(x,y){i.length>1&&i.sort(x||Db),r.length>1&&r.sort(y||j_),l.length>1&&l.sort(y||j_)}function _(){for(let x=e,y=o.length;x<y;x++){const E=o[x];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:_,sort:p}}function Ub(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new Z_,o.set(r,[h])):l>=u.length?(h=new Z_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function Nb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ot,color:new Ce};break;case"SpotLight":i={position:new ot,direction:new ot,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ot,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ot,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return o[e.id]=i,i}}}function Lb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Ob=0;function Pb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function zb(o){const e=new Nb,i=Lb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ot);const l=new ot,u=new sn,h=new sn;function d(p){let _=0,x=0,y=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let E=0,A=0,R=0,M=0,v=0,F=0,P=0,U=0,I=0,H=0,G=0;p.sort(Pb);for(let D=0,C=p.length;D<C;D++){const V=p[D],at=V.color,ht=V.intensity,dt=V.distance,ft=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)_+=at.r*ht,x+=at.g*ht,y+=at.b*ht;else if(V.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(V.sh.coefficients[L],ht);G++}else if(V.isDirectionalLight){const L=e.get(V);if(L.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const K=V.shadow,q=i.get(V);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,r.directionalShadow[E]=q,r.directionalShadowMap[E]=ft,r.directionalShadowMatrix[E]=V.shadow.matrix,F++}r.directional[E]=L,E++}else if(V.isSpotLight){const L=e.get(V);L.position.setFromMatrixPosition(V.matrixWorld),L.color.copy(at).multiplyScalar(ht),L.distance=dt,L.coneCos=Math.cos(V.angle),L.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),L.decay=V.decay,r.spot[R]=L;const K=V.shadow;if(V.map&&(r.spotLightMap[I]=V.map,I++,K.updateMatrices(V),V.castShadow&&H++),r.spotLightMatrix[R]=K.matrix,V.castShadow){const q=i.get(V);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,r.spotShadow[R]=q,r.spotShadowMap[R]=ft,U++}R++}else if(V.isRectAreaLight){const L=e.get(V);L.color.copy(at).multiplyScalar(ht),L.halfWidth.set(V.width*.5,0,0),L.halfHeight.set(0,V.height*.5,0),r.rectArea[M]=L,M++}else if(V.isPointLight){const L=e.get(V);if(L.color.copy(V.color).multiplyScalar(V.intensity),L.distance=V.distance,L.decay=V.decay,V.castShadow){const K=V.shadow,q=i.get(V);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,r.pointShadow[A]=q,r.pointShadowMap[A]=ft,r.pointShadowMatrix[A]=V.shadow.matrix,P++}r.point[A]=L,A++}else if(V.isHemisphereLight){const L=e.get(V);L.skyColor.copy(V.color).multiplyScalar(ht),L.groundColor.copy(V.groundColor).multiplyScalar(ht),r.hemi[v]=L,v++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pt.LTC_FLOAT_1,r.rectAreaLTC2=Pt.LTC_FLOAT_2):(r.rectAreaLTC1=Pt.LTC_HALF_1,r.rectAreaLTC2=Pt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=y;const Q=r.hash;(Q.directionalLength!==E||Q.pointLength!==A||Q.spotLength!==R||Q.rectAreaLength!==M||Q.hemiLength!==v||Q.numDirectionalShadows!==F||Q.numPointShadows!==P||Q.numSpotShadows!==U||Q.numSpotMaps!==I||Q.numLightProbes!==G)&&(r.directional.length=E,r.spot.length=R,r.rectArea.length=M,r.point.length=A,r.hemi.length=v,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=U+I-H,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=G,Q.directionalLength=E,Q.pointLength=A,Q.spotLength=R,Q.rectAreaLength=M,Q.hemiLength=v,Q.numDirectionalShadows=F,Q.numPointShadows=P,Q.numSpotShadows=U,Q.numSpotMaps=I,Q.numLightProbes=G,r.version=Ob++)}function m(p,_){let x=0,y=0,E=0,A=0,R=0;const M=_.matrixWorldInverse;for(let v=0,F=p.length;v<F;v++){const P=p[v];if(P.isDirectionalLight){const U=r.directional[x];U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),x++}else if(P.isSpotLight){const U=r.spot[E];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),E++}else if(P.isRectAreaLight){const U=r.rectArea[A];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(M),h.identity(),u.copy(P.matrixWorld),u.premultiply(M),h.extractRotation(u),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),A++}else if(P.isPointLight){const U=r.point[y];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(M),y++}else if(P.isHemisphereLight){const U=r.hemi[R];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(M),R++}}}return{setup:d,setupView:m,state:r}}function K_(o){const e=new zb(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function h(_){r.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function Bb(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new K_(o),e.set(l,[d])):u>=h.length?(d=new K_(o),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const Ib=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hb(o,e,i){let r=new Sv;const l=new le,u=new le,h=new Je,d=new fy({depthPacking:yS}),m=new hy,p={},_=i.maxTextureSize,x={[Fa]:Hn,[Hn]:Fa,[$i]:$i},y=new aa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Ib,fragmentShader:Fb}),E=y.clone();E.defines.HORIZONTAL_PASS=1;const A=new ra;A.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new ci(A,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J_;let v=this.type;this.render=function(H,G,Q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),at=o.state;at.setBlending(Ba),at.buffers.depth.getReversed()===!0?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const ht=v!==Ji&&this.type===Ji,dt=v===Ji&&this.type!==Ji;for(let ft=0,L=H.length;ft<L;ft++){const K=H[ft],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const St=q.getFrameExtents();if(l.multiply(St),u.copy(q.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/St.x),l.x=u.x*St.x,q.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/St.y),l.y=u.y*St.y,q.mapSize.y=u.y)),q.map===null||ht===!0||dt===!0){const tt=this.type!==Ji?{minFilter:Qn,magFilter:Qn}:{};q.map!==null&&q.map.dispose(),q.map=new Ha(l.x,l.y,tt),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const N=q.getViewportCount();for(let tt=0;tt<N;tt++){const xt=q.getViewport(tt);h.set(u.x*xt.x,u.y*xt.y,u.x*xt.z,u.y*xt.w),at.viewport(h),q.updateMatrices(K,tt),r=q.getFrustum(),U(G,Q,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===Ji&&F(q,Q),q.needsUpdate=!1}v=this.type,M.needsUpdate=!1,o.setRenderTarget(D,C,V)};function F(H,G){const Q=e.update(R);y.defines.VSM_SAMPLES!==H.blurSamples&&(y.defines.VSM_SAMPLES=H.blurSamples,E.defines.VSM_SAMPLES=H.blurSamples,y.needsUpdate=!0,E.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Ha(l.x,l.y)),y.uniforms.shadow_pass.value=H.map.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(G,null,Q,y,R,null),E.uniforms.shadow_pass.value=H.mapPass.texture,E.uniforms.resolution.value=H.mapSize,E.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(G,null,Q,E,R,null)}function P(H,G,Q,D){let C=null;const V=Q.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(V!==void 0)C=V;else if(C=Q.isPointLight===!0?m:d,o.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){const at=C.uuid,ht=G.uuid;let dt=p[at];dt===void 0&&(dt={},p[at]=dt);let ft=dt[ht];ft===void 0&&(ft=C.clone(),dt[ht]=ft,G.addEventListener("dispose",I)),C=ft}if(C.visible=G.visible,C.wireframe=G.wireframe,D===Ji?C.side=G.shadowSide!==null?G.shadowSide:G.side:C.side=G.shadowSide!==null?G.shadowSide:x[G.side],C.alphaMap=G.alphaMap,C.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,C.map=G.map,C.clipShadows=G.clipShadows,C.clippingPlanes=G.clippingPlanes,C.clipIntersection=G.clipIntersection,C.displacementMap=G.displacementMap,C.displacementScale=G.displacementScale,C.displacementBias=G.displacementBias,C.wireframeLinewidth=G.wireframeLinewidth,C.linewidth=G.linewidth,Q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const at=o.properties.get(C);at.light=Q}return C}function U(H,G,Q,D,C){if(H.visible===!1)return;if(H.layers.test(G.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===Ji)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,H.matrixWorld);const ht=e.update(H),dt=H.material;if(Array.isArray(dt)){const ft=ht.groups;for(let L=0,K=ft.length;L<K;L++){const q=ft[L],St=dt[q.materialIndex];if(St&&St.visible){const N=P(H,St,D,C);H.onBeforeShadow(o,H,G,Q,ht,N,q),o.renderBufferDirect(Q,null,ht,N,H,q),H.onAfterShadow(o,H,G,Q,ht,N,q)}}}else if(dt.visible){const ft=P(H,dt,D,C);H.onBeforeShadow(o,H,G,Q,ht,ft,null),o.renderBufferDirect(Q,null,ht,ft,H,null),H.onAfterShadow(o,H,G,Q,ht,ft,null)}}const at=H.children;for(let ht=0,dt=at.length;ht<dt;ht++)U(at[ht],G,Q,D,C)}function I(H){H.target.removeEventListener("dispose",I);for(const Q in p){const D=p[Q],C=H.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const Gb={[xh]:Sh,[yh]:Th,[Mh]:bh,[ms]:Eh,[Sh]:xh,[Th]:yh,[bh]:Mh,[Eh]:ms};function Vb(o,e){function i(){let W=!1;const Ct=new Je;let wt=null;const It=new Je(0,0,0,0);return{setMask:function(Tt){wt!==Tt&&!W&&(o.colorMask(Tt,Tt,Tt,Tt),wt=Tt)},setLocked:function(Tt){W=Tt},setClear:function(Tt,vt,Xt,ae,De){De===!0&&(Tt*=ae,vt*=ae,Xt*=ae),Ct.set(Tt,vt,Xt,ae),It.equals(Ct)===!1&&(o.clearColor(Tt,vt,Xt,ae),It.copy(Ct))},reset:function(){W=!1,wt=null,It.set(-1,0,0,0)}}}function r(){let W=!1,Ct=!1,wt=null,It=null,Tt=null;return{setReversed:function(vt){if(Ct!==vt){const Xt=e.get("EXT_clip_control");vt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),Ct=vt;const ae=Tt;Tt=null,this.setClear(ae)}},getReversed:function(){return Ct},setTest:function(vt){vt?gt(o.DEPTH_TEST):Et(o.DEPTH_TEST)},setMask:function(vt){wt!==vt&&!W&&(o.depthMask(vt),wt=vt)},setFunc:function(vt){if(Ct&&(vt=Gb[vt]),It!==vt){switch(vt){case xh:o.depthFunc(o.NEVER);break;case Sh:o.depthFunc(o.ALWAYS);break;case yh:o.depthFunc(o.LESS);break;case ms:o.depthFunc(o.LEQUAL);break;case Mh:o.depthFunc(o.EQUAL);break;case Eh:o.depthFunc(o.GEQUAL);break;case Th:o.depthFunc(o.GREATER);break;case bh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}It=vt}},setLocked:function(vt){W=vt},setClear:function(vt){Tt!==vt&&(Ct&&(vt=1-vt),o.clearDepth(vt),Tt=vt)},reset:function(){W=!1,wt=null,It=null,Tt=null,Ct=!1}}}function l(){let W=!1,Ct=null,wt=null,It=null,Tt=null,vt=null,Xt=null,ae=null,De=null;return{setTest:function(Ee){W||(Ee?gt(o.STENCIL_TEST):Et(o.STENCIL_TEST))},setMask:function(Ee){Ct!==Ee&&!W&&(o.stencilMask(Ee),Ct=Ee)},setFunc:function(Ee,ui,on){(wt!==Ee||It!==ui||Tt!==on)&&(o.stencilFunc(Ee,ui,on),wt=Ee,It=ui,Tt=on)},setOp:function(Ee,ui,on){(vt!==Ee||Xt!==ui||ae!==on)&&(o.stencilOp(Ee,ui,on),vt=Ee,Xt=ui,ae=on)},setLocked:function(Ee){W=Ee},setClear:function(Ee){De!==Ee&&(o.clearStencil(Ee),De=Ee)},reset:function(){W=!1,Ct=null,wt=null,It=null,Tt=null,vt=null,Xt=null,ae=null,De=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},x={},y=new WeakMap,E=[],A=null,R=!1,M=null,v=null,F=null,P=null,U=null,I=null,H=null,G=new Ce(0,0,0),Q=0,D=!1,C=null,V=null,at=null,ht=null,dt=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,K=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),L=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),L=K>=2);let St=null,N={};const tt=o.getParameter(o.SCISSOR_BOX),xt=o.getParameter(o.VIEWPORT),yt=new Je().fromArray(tt),Nt=new Je().fromArray(xt);function Ht(W,Ct,wt,It){const Tt=new Uint8Array(4),vt=o.createTexture();o.bindTexture(W,vt),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Xt=0;Xt<wt;Xt++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,It,0,o.RGBA,o.UNSIGNED_BYTE,Tt):o.texImage2D(Ct+Xt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Tt);return vt}const nt={};nt[o.TEXTURE_2D]=Ht(o.TEXTURE_2D,o.TEXTURE_2D,1),nt[o.TEXTURE_CUBE_MAP]=Ht(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[o.TEXTURE_2D_ARRAY]=Ht(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),nt[o.TEXTURE_3D]=Ht(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),gt(o.DEPTH_TEST),h.setFunc(ms),$t(!1),zt(Jg),gt(o.CULL_FACE),we(Ba);function gt(W){_[W]!==!0&&(o.enable(W),_[W]=!0)}function Et(W){_[W]!==!1&&(o.disable(W),_[W]=!1)}function Zt(W,Ct){return x[W]!==Ct?(o.bindFramebuffer(W,Ct),x[W]=Ct,W===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Ct),W===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function qt(W,Ct){let wt=E,It=!1;if(W){wt=y.get(Ct),wt===void 0&&(wt=[],y.set(Ct,wt));const Tt=W.textures;if(wt.length!==Tt.length||wt[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,Xt=Tt.length;vt<Xt;vt++)wt[vt]=o.COLOR_ATTACHMENT0+vt;wt.length=Tt.length,It=!0}}else wt[0]!==o.BACK&&(wt[0]=o.BACK,It=!0);It&&o.drawBuffers(wt)}function ce(W){return A!==W?(o.useProgram(W),A=W,!0):!1}const Ye={[hr]:o.FUNC_ADD,[Yx]:o.FUNC_SUBTRACT,[jx]:o.FUNC_REVERSE_SUBTRACT};Ye[Zx]=o.MIN,Ye[Kx]=o.MAX;const z={[Qx]:o.ZERO,[Jx]:o.ONE,[$x]:o.SRC_COLOR,[_h]:o.SRC_ALPHA,[rS]:o.SRC_ALPHA_SATURATE,[iS]:o.DST_COLOR,[eS]:o.DST_ALPHA,[tS]:o.ONE_MINUS_SRC_COLOR,[vh]:o.ONE_MINUS_SRC_ALPHA,[aS]:o.ONE_MINUS_DST_COLOR,[nS]:o.ONE_MINUS_DST_ALPHA,[sS]:o.CONSTANT_COLOR,[oS]:o.ONE_MINUS_CONSTANT_COLOR,[lS]:o.CONSTANT_ALPHA,[cS]:o.ONE_MINUS_CONSTANT_ALPHA};function we(W,Ct,wt,It,Tt,vt,Xt,ae,De,Ee){if(W===Ba){R===!0&&(Et(o.BLEND),R=!1);return}if(R===!1&&(gt(o.BLEND),R=!0),W!==qx){if(W!==M||Ee!==D){if((v!==hr||U!==hr)&&(o.blendEquation(o.FUNC_ADD),v=hr,U=hr),Ee)switch(W){case ds:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case gh:o.blendFunc(o.ONE,o.ONE);break;case $g:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case t_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case ds:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case gh:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case $g:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case t_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}F=null,P=null,I=null,H=null,G.set(0,0,0),Q=0,M=W,D=Ee}return}Tt=Tt||Ct,vt=vt||wt,Xt=Xt||It,(Ct!==v||Tt!==U)&&(o.blendEquationSeparate(Ye[Ct],Ye[Tt]),v=Ct,U=Tt),(wt!==F||It!==P||vt!==I||Xt!==H)&&(o.blendFuncSeparate(z[wt],z[It],z[vt],z[Xt]),F=wt,P=It,I=vt,H=Xt),(ae.equals(G)===!1||De!==Q)&&(o.blendColor(ae.r,ae.g,ae.b,De),G.copy(ae),Q=De),M=W,D=!1}function re(W,Ct){W.side===$i?Et(o.CULL_FACE):gt(o.CULL_FACE);let wt=W.side===Hn;Ct&&(wt=!wt),$t(wt),W.blending===ds&&W.transparent===!1?we(Ba):we(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),u.setMask(W.colorWrite);const It=W.stencilWrite;d.setTest(It),It&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Gt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?gt(o.SAMPLE_ALPHA_TO_COVERAGE):Et(o.SAMPLE_ALPHA_TO_COVERAGE)}function $t(W){C!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),C=W)}function zt(W){W!==kx?(gt(o.CULL_FACE),W!==V&&(W===Jg?o.cullFace(o.BACK):W===Xx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Et(o.CULL_FACE),V=W}function ye(W){W!==at&&(L&&o.lineWidth(W),at=W)}function Gt(W,Ct,wt){W?(gt(o.POLYGON_OFFSET_FILL),(ht!==Ct||dt!==wt)&&(o.polygonOffset(Ct,wt),ht=Ct,dt=wt)):Et(o.POLYGON_OFFSET_FILL)}function se(W){W?gt(o.SCISSOR_TEST):Et(o.SCISSOR_TEST)}function He(W){W===void 0&&(W=o.TEXTURE0+ft-1),St!==W&&(o.activeTexture(W),St=W)}function Ge(W,Ct,wt){wt===void 0&&(St===null?wt=o.TEXTURE0+ft-1:wt=St);let It=N[wt];It===void 0&&(It={type:void 0,texture:void 0},N[wt]=It),(It.type!==W||It.texture!==Ct)&&(St!==wt&&(o.activeTexture(wt),St=wt),o.bindTexture(W,Ct||nt[W]),It.type=W,It.texture=Ct)}function w(){const W=N[St];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function g(){try{o.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function B(){try{o.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function J(){try{o.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ct(){try{o.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function it(){try{o.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function At(){try{o.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Rt(){try{o.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Bt(){try{o.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Vt(){try{o.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Mt(){try{o.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Dt(W){yt.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),yt.copy(W))}function Kt(W){Nt.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Nt.copy(W))}function Wt(W,Ct){let wt=p.get(Ct);wt===void 0&&(wt=new WeakMap,p.set(Ct,wt));let It=wt.get(W);It===void 0&&(It=o.getUniformBlockIndex(Ct,W.name),wt.set(W,It))}function Ut(W,Ct){const It=p.get(Ct).get(W);m.get(Ct)!==It&&(o.uniformBlockBinding(Ct,It,W.__bindingPointIndex),m.set(Ct,It))}function oe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},St=null,N={},x={},y=new WeakMap,E=[],A=null,R=!1,M=null,v=null,F=null,P=null,U=null,I=null,H=null,G=new Ce(0,0,0),Q=0,D=!1,C=null,V=null,at=null,ht=null,dt=null,yt.set(0,0,o.canvas.width,o.canvas.height),Nt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:gt,disable:Et,bindFramebuffer:Zt,drawBuffers:qt,useProgram:ce,setBlending:we,setMaterial:re,setFlipSided:$t,setCullFace:zt,setLineWidth:ye,setPolygonOffset:Gt,setScissorTest:se,activeTexture:He,bindTexture:Ge,unbindTexture:w,compressedTexImage2D:g,compressedTexImage3D:B,texImage2D:Vt,texImage3D:Mt,updateUBOMapping:Wt,uniformBlockBinding:Ut,texStorage2D:Rt,texStorage3D:Bt,texSubImage2D:J,texSubImage3D:ct,compressedTexSubImage2D:it,compressedTexSubImage3D:At,scissor:Dt,viewport:Kt,reset:oe}}function kb(o,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new le,_=new WeakMap;let x;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(w,g){return E?new OffscreenCanvas(w,g):Ec("canvas")}function R(w,g,B){let J=1;const ct=Ge(w);if((ct.width>B||ct.height>B)&&(J=B/Math.max(ct.width,ct.height)),J<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const it=Math.floor(J*ct.width),At=Math.floor(J*ct.height);x===void 0&&(x=A(it,At));const Rt=g?A(it,At):x;return Rt.width=it,Rt.height=At,Rt.getContext("2d").drawImage(w,0,0,it,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+it+"x"+At+")."),Rt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),w;return w}function M(w){return w.generateMipmaps}function v(w){o.generateMipmap(w)}function F(w){return w.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?o.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(w,g,B,J,ct=!1){if(w!==null){if(o[w]!==void 0)return o[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let it=g;if(g===o.RED&&(B===o.FLOAT&&(it=o.R32F),B===o.HALF_FLOAT&&(it=o.R16F),B===o.UNSIGNED_BYTE&&(it=o.R8)),g===o.RED_INTEGER&&(B===o.UNSIGNED_BYTE&&(it=o.R8UI),B===o.UNSIGNED_SHORT&&(it=o.R16UI),B===o.UNSIGNED_INT&&(it=o.R32UI),B===o.BYTE&&(it=o.R8I),B===o.SHORT&&(it=o.R16I),B===o.INT&&(it=o.R32I)),g===o.RG&&(B===o.FLOAT&&(it=o.RG32F),B===o.HALF_FLOAT&&(it=o.RG16F),B===o.UNSIGNED_BYTE&&(it=o.RG8)),g===o.RG_INTEGER&&(B===o.UNSIGNED_BYTE&&(it=o.RG8UI),B===o.UNSIGNED_SHORT&&(it=o.RG16UI),B===o.UNSIGNED_INT&&(it=o.RG32UI),B===o.BYTE&&(it=o.RG8I),B===o.SHORT&&(it=o.RG16I),B===o.INT&&(it=o.RG32I)),g===o.RGB_INTEGER&&(B===o.UNSIGNED_BYTE&&(it=o.RGB8UI),B===o.UNSIGNED_SHORT&&(it=o.RGB16UI),B===o.UNSIGNED_INT&&(it=o.RGB32UI),B===o.BYTE&&(it=o.RGB8I),B===o.SHORT&&(it=o.RGB16I),B===o.INT&&(it=o.RGB32I)),g===o.RGBA_INTEGER&&(B===o.UNSIGNED_BYTE&&(it=o.RGBA8UI),B===o.UNSIGNED_SHORT&&(it=o.RGBA16UI),B===o.UNSIGNED_INT&&(it=o.RGBA32UI),B===o.BYTE&&(it=o.RGBA8I),B===o.SHORT&&(it=o.RGBA16I),B===o.INT&&(it=o.RGBA32I)),g===o.RGB&&(B===o.UNSIGNED_INT_5_9_9_9_REV&&(it=o.RGB9_E5),B===o.UNSIGNED_INT_10F_11F_11F_REV&&(it=o.R11F_G11F_B10F)),g===o.RGBA){const At=ct?yc:Ae.getTransfer(J);B===o.FLOAT&&(it=o.RGBA32F),B===o.HALF_FLOAT&&(it=o.RGBA16F),B===o.UNSIGNED_BYTE&&(it=At===Be?o.SRGB8_ALPHA8:o.RGBA8),B===o.UNSIGNED_SHORT_4_4_4_4&&(it=o.RGBA4),B===o.UNSIGNED_SHORT_5_5_5_1&&(it=o.RGB5_A1)}return(it===o.R16F||it===o.R32F||it===o.RG16F||it===o.RG32F||it===o.RGBA16F||it===o.RGBA32F)&&e.get("EXT_color_buffer_float"),it}function U(w,g){let B;return w?g===null||g===gr||g===Ro?B=o.DEPTH24_STENCIL8:g===Di?B=o.DEPTH32F_STENCIL8:g===Ao&&(B=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===gr||g===Ro?B=o.DEPTH_COMPONENT24:g===Di?B=o.DEPTH_COMPONENT32F:g===Ao&&(B=o.DEPTH_COMPONENT16),B}function I(w,g){return M(w)===!0||w.isFramebufferTexture&&w.minFilter!==Qn&&w.minFilter!==Fn?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function H(w){const g=w.target;g.removeEventListener("dispose",H),Q(g),g.isVideoTexture&&_.delete(g)}function G(w){const g=w.target;g.removeEventListener("dispose",G),C(g)}function Q(w){const g=r.get(w);if(g.__webglInit===void 0)return;const B=w.source,J=y.get(B);if(J){const ct=J[g.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&D(w),Object.keys(J).length===0&&y.delete(B)}r.remove(w)}function D(w){const g=r.get(w);o.deleteTexture(g.__webglTexture);const B=w.source,J=y.get(B);delete J[g.__cacheKey],h.memory.textures--}function C(w){const g=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(g.__webglFramebuffer[J]))for(let ct=0;ct<g.__webglFramebuffer[J].length;ct++)o.deleteFramebuffer(g.__webglFramebuffer[J][ct]);else o.deleteFramebuffer(g.__webglFramebuffer[J]);g.__webglDepthbuffer&&o.deleteRenderbuffer(g.__webglDepthbuffer[J])}else{if(Array.isArray(g.__webglFramebuffer))for(let J=0;J<g.__webglFramebuffer.length;J++)o.deleteFramebuffer(g.__webglFramebuffer[J]);else o.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&o.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&o.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let J=0;J<g.__webglColorRenderbuffer.length;J++)g.__webglColorRenderbuffer[J]&&o.deleteRenderbuffer(g.__webglColorRenderbuffer[J]);g.__webglDepthRenderbuffer&&o.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const B=w.textures;for(let J=0,ct=B.length;J<ct;J++){const it=r.get(B[J]);it.__webglTexture&&(o.deleteTexture(it.__webglTexture),h.memory.textures--),r.remove(B[J])}r.remove(w)}let V=0;function at(){V=0}function ht(){const w=V;return w>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),V+=1,w}function dt(w){const g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function ft(w,g){const B=r.get(w);if(w.isVideoTexture&&se(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){const J=w.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(B,w,g);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,B.__webglTexture,o.TEXTURE0+g)}function L(w,g){const B=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){nt(B,w,g);return}i.bindTexture(o.TEXTURE_2D_ARRAY,B.__webglTexture,o.TEXTURE0+g)}function K(w,g){const B=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){nt(B,w,g);return}i.bindTexture(o.TEXTURE_3D,B.__webglTexture,o.TEXTURE0+g)}function q(w,g){const B=r.get(w);if(w.version>0&&B.__version!==w.version){gt(B,w,g);return}i.bindTexture(o.TEXTURE_CUBE_MAP,B.__webglTexture,o.TEXTURE0+g)}const St={[Ch]:o.REPEAT,[Si]:o.CLAMP_TO_EDGE,[wh]:o.MIRRORED_REPEAT},N={[Qn]:o.NEAREST,[xS]:o.NEAREST_MIPMAP_NEAREST,[Wl]:o.NEAREST_MIPMAP_LINEAR,[Fn]:o.LINEAR,[If]:o.LINEAR_MIPMAP_NEAREST,[pr]:o.LINEAR_MIPMAP_LINEAR},tt={[TS]:o.NEVER,[DS]:o.ALWAYS,[bS]:o.LESS,[cv]:o.LEQUAL,[AS]:o.EQUAL,[wS]:o.GEQUAL,[RS]:o.GREATER,[CS]:o.NOTEQUAL};function xt(w,g){if(g.type===Di&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Fn||g.magFilter===If||g.magFilter===Wl||g.magFilter===pr||g.minFilter===Fn||g.minFilter===If||g.minFilter===Wl||g.minFilter===pr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(w,o.TEXTURE_WRAP_S,St[g.wrapS]),o.texParameteri(w,o.TEXTURE_WRAP_T,St[g.wrapT]),(w===o.TEXTURE_3D||w===o.TEXTURE_2D_ARRAY)&&o.texParameteri(w,o.TEXTURE_WRAP_R,St[g.wrapR]),o.texParameteri(w,o.TEXTURE_MAG_FILTER,N[g.magFilter]),o.texParameteri(w,o.TEXTURE_MIN_FILTER,N[g.minFilter]),g.compareFunction&&(o.texParameteri(w,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(w,o.TEXTURE_COMPARE_FUNC,tt[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Qn||g.minFilter!==Wl&&g.minFilter!==pr||g.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||r.get(g).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");o.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,l.getMaxAnisotropy())),r.get(g).__currentAnisotropy=g.anisotropy}}}function yt(w,g){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",H));const J=g.source;let ct=y.get(J);ct===void 0&&(ct={},y.set(J,ct));const it=dt(g);if(it!==w.__cacheKey){ct[it]===void 0&&(ct[it]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,B=!0),ct[it].usedTimes++;const At=ct[w.__cacheKey];At!==void 0&&(ct[w.__cacheKey].usedTimes--,At.usedTimes===0&&D(g)),w.__cacheKey=it,w.__webglTexture=ct[it].texture}return B}function Nt(w,g,B){return Math.floor(Math.floor(w/B)/g)}function Ht(w,g,B,J){const it=w.updateRanges;if(it.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,g.width,g.height,B,J,g.data);else{it.sort((Mt,Dt)=>Mt.start-Dt.start);let At=0;for(let Mt=1;Mt<it.length;Mt++){const Dt=it[At],Kt=it[Mt],Wt=Dt.start+Dt.count,Ut=Nt(Kt.start,g.width,4),oe=Nt(Dt.start,g.width,4);Kt.start<=Wt+1&&Ut===oe&&Nt(Kt.start+Kt.count-1,g.width,4)===Ut?Dt.count=Math.max(Dt.count,Kt.start+Kt.count-Dt.start):(++At,it[At]=Kt)}it.length=At+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Bt=o.getParameter(o.UNPACK_SKIP_PIXELS),Vt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,g.width);for(let Mt=0,Dt=it.length;Mt<Dt;Mt++){const Kt=it[Mt],Wt=Math.floor(Kt.start/4),Ut=Math.ceil(Kt.count/4),oe=Wt%g.width,W=Math.floor(Wt/g.width),Ct=Ut,wt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,oe),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,oe,W,Ct,wt,B,J,g.data)}w.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Bt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Vt)}}function nt(w,g,B){let J=o.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(J=o.TEXTURE_2D_ARRAY),g.isData3DTexture&&(J=o.TEXTURE_3D);const ct=yt(w,g),it=g.source;i.bindTexture(J,w.__webglTexture,o.TEXTURE0+B);const At=r.get(it);if(it.version!==At.__version||ct===!0){i.activeTexture(o.TEXTURE0+B);const Rt=Ae.getPrimaries(Ae.workingColorSpace),Bt=g.colorSpace===za?null:Ae.getPrimaries(g.colorSpace),Vt=g.colorSpace===za||Rt===Bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,g.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,g.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let Mt=R(g.image,!1,l.maxTextureSize);Mt=He(g,Mt);const Dt=u.convert(g.format,g.colorSpace),Kt=u.convert(g.type);let Wt=P(g.internalFormat,Dt,Kt,g.colorSpace,g.isVideoTexture);xt(J,g);let Ut;const oe=g.mipmaps,W=g.isVideoTexture!==!0,Ct=At.__version===void 0||ct===!0,wt=it.dataReady,It=I(g,Mt);if(g.isDepthTexture)Wt=U(g.format===wo,g.type),Ct&&(W?i.texStorage2D(o.TEXTURE_2D,1,Wt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Wt,Mt.width,Mt.height,0,Dt,Kt,null));else if(g.isDataTexture)if(oe.length>0){W&&Ct&&i.texStorage2D(o.TEXTURE_2D,It,Wt,oe[0].width,oe[0].height);for(let Tt=0,vt=oe.length;Tt<vt;Tt++)Ut=oe[Tt],W?wt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Ut.width,Ut.height,Dt,Kt,Ut.data):i.texImage2D(o.TEXTURE_2D,Tt,Wt,Ut.width,Ut.height,0,Dt,Kt,Ut.data);g.generateMipmaps=!1}else W?(Ct&&i.texStorage2D(o.TEXTURE_2D,It,Wt,Mt.width,Mt.height),wt&&Ht(g,Mt,Dt,Kt)):i.texImage2D(o.TEXTURE_2D,0,Wt,Mt.width,Mt.height,0,Dt,Kt,Mt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){W&&Ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,It,Wt,oe[0].width,oe[0].height,Mt.depth);for(let Tt=0,vt=oe.length;Tt<vt;Tt++)if(Ut=oe[Tt],g.format!==li)if(Dt!==null)if(W){if(wt)if(g.layerUpdates.size>0){const Xt=A_(Ut.width,Ut.height,g.format,g.type);for(const ae of g.layerUpdates){const De=Ut.data.subarray(ae*Xt/Ut.data.BYTES_PER_ELEMENT,(ae+1)*Xt/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,ae,Ut.width,Ut.height,1,Dt,De)}g.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Ut.width,Ut.height,Mt.depth,Dt,Ut.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Tt,Wt,Ut.width,Ut.height,Mt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?wt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Ut.width,Ut.height,Mt.depth,Dt,Kt,Ut.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Tt,Wt,Ut.width,Ut.height,Mt.depth,0,Dt,Kt,Ut.data)}else{W&&Ct&&i.texStorage2D(o.TEXTURE_2D,It,Wt,oe[0].width,oe[0].height);for(let Tt=0,vt=oe.length;Tt<vt;Tt++)Ut=oe[Tt],g.format!==li?Dt!==null?W?wt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Tt,0,0,Ut.width,Ut.height,Dt,Ut.data):i.compressedTexImage2D(o.TEXTURE_2D,Tt,Wt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?wt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Ut.width,Ut.height,Dt,Kt,Ut.data):i.texImage2D(o.TEXTURE_2D,Tt,Wt,Ut.width,Ut.height,0,Dt,Kt,Ut.data)}else if(g.isDataArrayTexture)if(W){if(Ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,It,Wt,Mt.width,Mt.height,Mt.depth),wt)if(g.layerUpdates.size>0){const Tt=A_(Mt.width,Mt.height,g.format,g.type);for(const vt of g.layerUpdates){const Xt=Mt.data.subarray(vt*Tt/Mt.data.BYTES_PER_ELEMENT,(vt+1)*Tt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,Mt.width,Mt.height,1,Dt,Kt,Xt)}g.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Dt,Kt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Wt,Mt.width,Mt.height,Mt.depth,0,Dt,Kt,Mt.data);else if(g.isData3DTexture)W?(Ct&&i.texStorage3D(o.TEXTURE_3D,It,Wt,Mt.width,Mt.height,Mt.depth),wt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Dt,Kt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Wt,Mt.width,Mt.height,Mt.depth,0,Dt,Kt,Mt.data);else if(g.isFramebufferTexture){if(Ct)if(W)i.texStorage2D(o.TEXTURE_2D,It,Wt,Mt.width,Mt.height);else{let Tt=Mt.width,vt=Mt.height;for(let Xt=0;Xt<It;Xt++)i.texImage2D(o.TEXTURE_2D,Xt,Wt,Tt,vt,0,Dt,Kt,null),Tt>>=1,vt>>=1}}else if(oe.length>0){if(W&&Ct){const Tt=Ge(oe[0]);i.texStorage2D(o.TEXTURE_2D,It,Wt,Tt.width,Tt.height)}for(let Tt=0,vt=oe.length;Tt<vt;Tt++)Ut=oe[Tt],W?wt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Dt,Kt,Ut):i.texImage2D(o.TEXTURE_2D,Tt,Wt,Dt,Kt,Ut);g.generateMipmaps=!1}else if(W){if(Ct){const Tt=Ge(Mt);i.texStorage2D(o.TEXTURE_2D,It,Wt,Tt.width,Tt.height)}wt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Dt,Kt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Wt,Dt,Kt,Mt);M(g)&&v(J),At.__version=it.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function gt(w,g,B){if(g.image.length!==6)return;const J=yt(w,g),ct=g.source;i.bindTexture(o.TEXTURE_CUBE_MAP,w.__webglTexture,o.TEXTURE0+B);const it=r.get(ct);if(ct.version!==it.__version||J===!0){i.activeTexture(o.TEXTURE0+B);const At=Ae.getPrimaries(Ae.workingColorSpace),Rt=g.colorSpace===za?null:Ae.getPrimaries(g.colorSpace),Bt=g.colorSpace===za||At===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,g.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,g.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const Vt=g.isCompressedTexture||g.image[0].isCompressedTexture,Mt=g.image[0]&&g.image[0].isDataTexture,Dt=[];for(let vt=0;vt<6;vt++)!Vt&&!Mt?Dt[vt]=R(g.image[vt],!0,l.maxCubemapSize):Dt[vt]=Mt?g.image[vt].image:g.image[vt],Dt[vt]=He(g,Dt[vt]);const Kt=Dt[0],Wt=u.convert(g.format,g.colorSpace),Ut=u.convert(g.type),oe=P(g.internalFormat,Wt,Ut,g.colorSpace),W=g.isVideoTexture!==!0,Ct=it.__version===void 0||J===!0,wt=ct.dataReady;let It=I(g,Kt);xt(o.TEXTURE_CUBE_MAP,g);let Tt;if(Vt){W&&Ct&&i.texStorage2D(o.TEXTURE_CUBE_MAP,It,oe,Kt.width,Kt.height);for(let vt=0;vt<6;vt++){Tt=Dt[vt].mipmaps;for(let Xt=0;Xt<Tt.length;Xt++){const ae=Tt[Xt];g.format!==li?Wt!==null?W?wt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt,0,0,ae.width,ae.height,Wt,ae.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt,oe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt,0,0,ae.width,ae.height,Wt,Ut,ae.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt,oe,ae.width,ae.height,0,Wt,Ut,ae.data)}}}else{if(Tt=g.mipmaps,W&&Ct){Tt.length>0&&It++;const vt=Ge(Dt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,It,oe,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Mt){W?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Dt[vt].width,Dt[vt].height,Wt,Ut,Dt[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,oe,Dt[vt].width,Dt[vt].height,0,Wt,Ut,Dt[vt].data);for(let Xt=0;Xt<Tt.length;Xt++){const De=Tt[Xt].image[vt].image;W?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt+1,0,0,De.width,De.height,Wt,Ut,De.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt+1,oe,De.width,De.height,0,Wt,Ut,De.data)}}else{W?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Wt,Ut,Dt[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,oe,Wt,Ut,Dt[vt]);for(let Xt=0;Xt<Tt.length;Xt++){const ae=Tt[Xt];W?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt+1,0,0,Wt,Ut,ae.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt+1,oe,Wt,Ut,ae.image[vt])}}}M(g)&&v(o.TEXTURE_CUBE_MAP),it.__version=ct.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Et(w,g,B,J,ct,it){const At=u.convert(B.format,B.colorSpace),Rt=u.convert(B.type),Bt=P(B.internalFormat,At,Rt,B.colorSpace),Vt=r.get(g),Mt=r.get(B);if(Mt.__renderTarget=g,!Vt.__hasExternalTextures){const Dt=Math.max(1,g.width>>it),Kt=Math.max(1,g.height>>it);ct===o.TEXTURE_3D||ct===o.TEXTURE_2D_ARRAY?i.texImage3D(ct,it,Bt,Dt,Kt,g.depth,0,At,Rt,null):i.texImage2D(ct,it,Bt,Dt,Kt,0,At,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,w),Gt(g)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,J,ct,Mt.__webglTexture,0,ye(g)):(ct===o.TEXTURE_2D||ct>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,J,ct,Mt.__webglTexture,it),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Zt(w,g,B){if(o.bindRenderbuffer(o.RENDERBUFFER,w),g.depthBuffer){const J=g.depthTexture,ct=J&&J.isDepthTexture?J.type:null,it=U(g.stencilBuffer,ct),At=g.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=ye(g);Gt(g)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,it,g.width,g.height):B?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,it,g.width,g.height):o.renderbufferStorage(o.RENDERBUFFER,it,g.width,g.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,At,o.RENDERBUFFER,w)}else{const J=g.textures;for(let ct=0;ct<J.length;ct++){const it=J[ct],At=u.convert(it.format,it.colorSpace),Rt=u.convert(it.type),Bt=P(it.internalFormat,At,Rt,it.colorSpace),Vt=ye(g);B&&Gt(g)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Vt,Bt,g.width,g.height):Gt(g)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Vt,Bt,g.width,g.height):o.renderbufferStorage(o.RENDERBUFFER,Bt,g.width,g.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function qt(w,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=r.get(g.depthTexture);J.__renderTarget=g,(!J.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ft(g.depthTexture,0);const ct=J.__webglTexture,it=ye(g);if(g.depthTexture.format===Co)Gt(g)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ct,0,it):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ct,0);else if(g.depthTexture.format===wo)Gt(g)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ct,0,it):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function ce(w){const g=r.get(w),B=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){const J=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),J){const ct=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,J.removeEventListener("dispose",ct)};J.addEventListener("dispose",ct),g.__depthDisposeCallback=ct}g.__boundDepthTexture=J}if(w.depthTexture&&!g.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const J=w.texture.mipmaps;J&&J.length>0?qt(g.__webglFramebuffer[0],w):qt(g.__webglFramebuffer,w)}else if(B){g.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(i.bindFramebuffer(o.FRAMEBUFFER,g.__webglFramebuffer[J]),g.__webglDepthbuffer[J]===void 0)g.__webglDepthbuffer[J]=o.createRenderbuffer(),Zt(g.__webglDepthbuffer[J],w,!1);else{const ct=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,it=g.__webglDepthbuffer[J];o.bindRenderbuffer(o.RENDERBUFFER,it),o.framebufferRenderbuffer(o.FRAMEBUFFER,ct,o.RENDERBUFFER,it)}}else{const J=w.texture.mipmaps;if(J&&J.length>0?i.bindFramebuffer(o.FRAMEBUFFER,g.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=o.createRenderbuffer(),Zt(g.__webglDepthbuffer,w,!1);else{const ct=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,it=g.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,it),o.framebufferRenderbuffer(o.FRAMEBUFFER,ct,o.RENDERBUFFER,it)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ye(w,g,B){const J=r.get(w);g!==void 0&&Et(J.__webglFramebuffer,w,w.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),B!==void 0&&ce(w)}function z(w){const g=w.texture,B=r.get(w),J=r.get(g);w.addEventListener("dispose",G);const ct=w.textures,it=w.isWebGLCubeRenderTarget===!0,At=ct.length>1;if(At||(J.__webglTexture===void 0&&(J.__webglTexture=o.createTexture()),J.__version=g.version,h.memory.textures++),it){B.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[Rt]=[];for(let Bt=0;Bt<g.mipmaps.length;Bt++)B.__webglFramebuffer[Rt][Bt]=o.createFramebuffer()}else B.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let Rt=0;Rt<g.mipmaps.length;Rt++)B.__webglFramebuffer[Rt]=o.createFramebuffer()}else B.__webglFramebuffer=o.createFramebuffer();if(At)for(let Rt=0,Bt=ct.length;Rt<Bt;Rt++){const Vt=r.get(ct[Rt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=o.createTexture(),h.memory.textures++)}if(w.samples>0&&Gt(w)===!1){B.__webglMultisampledFramebuffer=o.createFramebuffer(),B.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Rt=0;Rt<ct.length;Rt++){const Bt=ct[Rt];B.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,B.__webglColorRenderbuffer[Rt]);const Vt=u.convert(Bt.format,Bt.colorSpace),Mt=u.convert(Bt.type),Dt=P(Bt.internalFormat,Vt,Mt,Bt.colorSpace,w.isXRRenderTarget===!0),Kt=ye(w);o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Dt,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,B.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=o.createRenderbuffer(),Zt(B.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(it){i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture),xt(o.TEXTURE_CUBE_MAP,g);for(let Rt=0;Rt<6;Rt++)if(g.mipmaps&&g.mipmaps.length>0)for(let Bt=0;Bt<g.mipmaps.length;Bt++)Et(B.__webglFramebuffer[Rt][Bt],w,g,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Bt);else Et(B.__webglFramebuffer[Rt],w,g,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(g)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(At){for(let Rt=0,Bt=ct.length;Rt<Bt;Rt++){const Vt=ct[Rt],Mt=r.get(Vt);let Dt=o.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Dt=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,Mt.__webglTexture),xt(Dt,Vt),Et(B.__webglFramebuffer,w,Vt,o.COLOR_ATTACHMENT0+Rt,Dt,0),M(Vt)&&v(Dt)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Rt=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,J.__webglTexture),xt(Rt,g),g.mipmaps&&g.mipmaps.length>0)for(let Bt=0;Bt<g.mipmaps.length;Bt++)Et(B.__webglFramebuffer[Bt],w,g,o.COLOR_ATTACHMENT0,Rt,Bt);else Et(B.__webglFramebuffer,w,g,o.COLOR_ATTACHMENT0,Rt,0);M(g)&&v(Rt),i.unbindTexture()}w.depthBuffer&&ce(w)}function we(w){const g=w.textures;for(let B=0,J=g.length;B<J;B++){const ct=g[B];if(M(ct)){const it=F(w),At=r.get(ct).__webglTexture;i.bindTexture(it,At),v(it),i.unbindTexture()}}}const re=[],$t=[];function zt(w){if(w.samples>0){if(Gt(w)===!1){const g=w.textures,B=w.width,J=w.height;let ct=o.COLOR_BUFFER_BIT;const it=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=r.get(w),Rt=g.length>1;if(Rt)for(let Vt=0;Vt<g.length;Vt++)i.bindFramebuffer(o.FRAMEBUFFER,At.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,At.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const Bt=w.texture.mipmaps;Bt&&Bt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Vt=0;Vt<g.length;Vt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ct|=o.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ct|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,At.__webglColorRenderbuffer[Vt]);const Mt=r.get(g[Vt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,B,J,0,0,B,J,ct,o.NEAREST),m===!0&&(re.length=0,$t.length=0,re.push(o.COLOR_ATTACHMENT0+Vt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(re.push(it),$t.push(it),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,$t)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,re))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Vt=0;Vt<g.length;Vt++){i.bindFramebuffer(o.FRAMEBUFFER,At.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.RENDERBUFFER,At.__webglColorRenderbuffer[Vt]);const Mt=r.get(g[Vt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,At.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.TEXTURE_2D,Mt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const g=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[g])}}}function ye(w){return Math.min(l.maxSamples,w.samples)}function Gt(w){const g=r.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function se(w){const g=h.render.frame;_.get(w)!==g&&(_.set(w,g),w.update())}function He(w,g){const B=w.colorSpace,J=w.format,ct=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==vs&&B!==za&&(Ae.getTransfer(B)===Be?(J!==li||ct!==na)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),g}function Ge(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(p.width=w.naturalWidth||w.width,p.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(p.width=w.displayWidth,p.height=w.displayHeight):(p.width=w.width,p.height=w.height),p}this.allocateTextureUnit=ht,this.resetTextureUnits=at,this.setTexture2D=ft,this.setTexture2DArray=L,this.setTexture3D=K,this.setTextureCube=q,this.rebindTextures=Ye,this.setupRenderTarget=z,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Gt}function Xb(o,e){function i(r,l=za){let u;const h=Ae.getTransfer(l);if(r===na)return o.UNSIGNED_BYTE;if(r===cd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===ud)return o.UNSIGNED_SHORT_5_5_5_1;if(r===iv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===av)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===ev)return o.BYTE;if(r===nv)return o.SHORT;if(r===Ao)return o.UNSIGNED_SHORT;if(r===ld)return o.INT;if(r===gr)return o.UNSIGNED_INT;if(r===Di)return o.FLOAT;if(r===Ss)return o.HALF_FLOAT;if(r===rv)return o.ALPHA;if(r===sv)return o.RGB;if(r===li)return o.RGBA;if(r===Co)return o.DEPTH_COMPONENT;if(r===wo)return o.DEPTH_STENCIL;if(r===ov)return o.RED;if(r===fd)return o.RED_INTEGER;if(r===lv)return o.RG;if(r===hd)return o.RG_INTEGER;if(r===dd)return o.RGBA_INTEGER;if(r===gc||r===_c||r===vc||r===xc)if(h===Be)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===gc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_c)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===vc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===gc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_c)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dh||r===Uh||r===Nh||r===Lh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Dh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Uh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Lh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Oh||r===Ph||r===zh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Oh||r===Ph)return h===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===zh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Bh||r===Ih||r===Fh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===jh||r===Zh||r===Kh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Bh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ih)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qh||r===Jh||r===$h)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Qh)return h===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$h)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===td||r===ed||r===nd||r===id)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===td)return u.COMPRESSED_RED_RGTC1_EXT;if(r===ed)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===id)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ro?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const Wb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Yb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Mv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new aa({vertexShader:Wb,fragmentShader:qb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ci(new mr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jb extends ys{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,_=null,x=null,y=null,E=null,A=null;const R=typeof XRWebGLBinding<"u",M=new Yb,v={},F=i.getContextAttributes();let P=null,U=null;const I=[],H=[],G=new le;let Q=null;const D=new vi;D.viewport=new Je;const C=new vi;C.viewport=new Je;const V=[D,C],at=new py;let ht=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let gt=I[nt];return gt===void 0&&(gt=new oh,I[nt]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(nt){let gt=I[nt];return gt===void 0&&(gt=new oh,I[nt]=gt),gt.getGripSpace()},this.getHand=function(nt){let gt=I[nt];return gt===void 0&&(gt=new oh,I[nt]=gt),gt.getHandSpace()};function ft(nt){const gt=H.indexOf(nt.inputSource);if(gt===-1)return;const Et=I[gt];Et!==void 0&&(Et.update(nt.inputSource,nt.frame,p||h),Et.dispatchEvent({type:nt.type,data:nt.inputSource}))}function L(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",K);for(let nt=0;nt<I.length;nt++){const gt=H[nt];gt!==null&&(H[nt]=null,I[nt].disconnect(gt))}ht=null,dt=null,M.reset();for(const nt in v)delete v[nt];e.setRenderTarget(P),E=null,y=null,x=null,l=null,U=null,Ht.stop(),r.isPresenting=!1,e.setPixelRatio(Q),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){u=nt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){d=nt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return y!==null?y:E},this.getBinding=function(){return x===null&&R&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",L),l.addEventListener("inputsourceschange",K),F.xrCompatible!==!0&&await i.makeXRCompatible(),Q=e.getPixelRatio(),e.getSize(G),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Zt=null,qt=null;F.depth&&(qt=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=F.stencil?wo:Co,Zt=F.stencil?Ro:gr);const ce={colorFormat:i.RGBA8,depthFormat:qt,scaleFactor:u};x=this.getBinding(),y=x.createProjectionLayer(ce),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),U=new Ha(y.textureWidth,y.textureHeight,{format:li,type:na,depthTexture:new yv(y.textureWidth,y.textureHeight,Zt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Et={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,Et),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),U=new Ha(E.framebufferWidth,E.framebufferHeight,{format:li,type:na,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ht.setContext(l),Ht.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function K(nt){for(let gt=0;gt<nt.removed.length;gt++){const Et=nt.removed[gt],Zt=H.indexOf(Et);Zt>=0&&(H[Zt]=null,I[Zt].disconnect(Et))}for(let gt=0;gt<nt.added.length;gt++){const Et=nt.added[gt];let Zt=H.indexOf(Et);if(Zt===-1){for(let ce=0;ce<I.length;ce++)if(ce>=H.length){H.push(Et),Zt=ce;break}else if(H[ce]===null){H[ce]=Et,Zt=ce;break}if(Zt===-1)break}const qt=I[Zt];qt&&qt.connect(Et)}}const q=new ot,St=new ot;function N(nt,gt,Et){q.setFromMatrixPosition(gt.matrixWorld),St.setFromMatrixPosition(Et.matrixWorld);const Zt=q.distanceTo(St),qt=gt.projectionMatrix.elements,ce=Et.projectionMatrix.elements,Ye=qt[14]/(qt[10]-1),z=qt[14]/(qt[10]+1),we=(qt[9]+1)/qt[5],re=(qt[9]-1)/qt[5],$t=(qt[8]-1)/qt[0],zt=(ce[8]+1)/ce[0],ye=Ye*$t,Gt=Ye*zt,se=Zt/(-$t+zt),He=se*-$t;if(gt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(He),nt.translateZ(se),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),qt[10]===-1)nt.projectionMatrix.copy(gt.projectionMatrix),nt.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const Ge=Ye+se,w=z+se,g=ye-He,B=Gt+(Zt-He),J=we*z/w*Ge,ct=re*z/w*Ge;nt.projectionMatrix.makePerspective(g,B,J,ct,Ge,w),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function tt(nt,gt){gt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(gt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let gt=nt.near,Et=nt.far;M.texture!==null&&(M.depthNear>0&&(gt=M.depthNear),M.depthFar>0&&(Et=M.depthFar)),at.near=C.near=D.near=gt,at.far=C.far=D.far=Et,(ht!==at.near||dt!==at.far)&&(l.updateRenderState({depthNear:at.near,depthFar:at.far}),ht=at.near,dt=at.far),at.layers.mask=nt.layers.mask|6,D.layers.mask=at.layers.mask&3,C.layers.mask=at.layers.mask&5;const Zt=nt.parent,qt=at.cameras;tt(at,Zt);for(let ce=0;ce<qt.length;ce++)tt(qt[ce],Zt);qt.length===2?N(at,D,C):at.projectionMatrix.copy(D.projectionMatrix),xt(nt,at,Zt)};function xt(nt,gt,Et){Et===null?nt.matrix.copy(gt.matrixWorld):(nt.matrix.copy(Et.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(gt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(gt.projectionMatrix),nt.projectionMatrixInverse.copy(gt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=ad*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return at},this.getFoveation=function(){if(!(y===null&&E===null))return m},this.setFoveation=function(nt){m=nt,y!==null&&(y.fixedFoveation=nt),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=nt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(at)},this.getCameraTexture=function(nt){return v[nt]};let yt=null;function Nt(nt,gt){if(_=gt.getViewerPose(p||h),A=gt,_!==null){const Et=_.views;E!==null&&(e.setRenderTargetFramebuffer(U,E.framebuffer),e.setRenderTarget(U));let Zt=!1;Et.length!==at.cameras.length&&(at.cameras.length=0,Zt=!0);for(let z=0;z<Et.length;z++){const we=Et[z];let re=null;if(E!==null)re=E.getViewport(we);else{const zt=x.getViewSubImage(y,we);re=zt.viewport,z===0&&(e.setRenderTargetTextures(U,zt.colorTexture,zt.depthStencilTexture),e.setRenderTarget(U))}let $t=V[z];$t===void 0&&($t=new vi,$t.layers.enable(z),$t.viewport=new Je,V[z]=$t),$t.matrix.fromArray(we.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(we.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(re.x,re.y,re.width,re.height),z===0&&(at.matrix.copy($t.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale)),Zt===!0&&at.cameras.push($t)}const qt=l.enabledFeatures;if(qt&&qt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){x=r.getBinding();const z=x.getDepthInformation(Et[0]);z&&z.isValid&&z.texture&&M.init(z,l.renderState)}if(qt&&qt.includes("camera-access")&&R){e.state.unbindTexture(),x=r.getBinding();for(let z=0;z<Et.length;z++){const we=Et[z].camera;if(we){let re=v[we];re||(re=new Mv,v[we]=re);const $t=x.getCameraImage(we);re.sourceTexture=$t}}}}for(let Et=0;Et<I.length;Et++){const Zt=H[Et],qt=I[Et];Zt!==null&&qt!==void 0&&qt.update(Zt,gt,p||h)}yt&&yt(nt,gt),gt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:gt}),A=null}const Ht=new Ev;Ht.setAnimationLoop(Nt),this.setAnimationLoop=function(nt){yt=nt},this.dispose=function(){}}}const cr=new ia,Zb=new sn;function Kb(o,e){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function r(M,v){v.color.getRGB(M.fogColor.value,vv(o)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,F,P,U){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(M,v):v.isMeshToonMaterial?(u(M,v),x(M,v)):v.isMeshPhongMaterial?(u(M,v),_(M,v)):v.isMeshStandardMaterial?(u(M,v),y(M,v),v.isMeshPhysicalMaterial&&E(M,v,U)):v.isMeshMatcapMaterial?(u(M,v),A(M,v)):v.isMeshDepthMaterial?u(M,v):v.isMeshDistanceMaterial?(u(M,v),R(M,v)):v.isMeshNormalMaterial?u(M,v):v.isLineBasicMaterial?(h(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?m(M,v,F,P):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Hn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Hn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const F=e.get(v),P=F.envMap,U=F.envMapRotation;P&&(M.envMap.value=P,cr.copy(U),cr.x*=-1,cr.y*=-1,cr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),M.envMapRotation.value.setFromMatrix4(Zb.makeRotationFromEuler(cr)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,F,P){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*F,M.scale.value=P*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function _(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function x(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function y(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function E(M,v,F){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Hn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=F.texture,M.transmissionSamplerSize.value.set(F.width,F.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,v){v.matcap&&(M.matcap.value=v.matcap)}function R(M,v){const F=e.get(v).light;M.referencePosition.value.setFromMatrixPosition(F.matrixWorld),M.nearDistance.value=F.shadow.camera.near,M.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function Qb(o,e,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,P){const U=P.program;r.uniformBlockBinding(F,U)}function p(F,P){let U=l[F.id];U===void 0&&(A(F),U=_(F),l[F.id]=U,F.addEventListener("dispose",M));const I=P.program;r.updateUBOMapping(F,I);const H=e.render.frame;u[F.id]!==H&&(y(F),u[F.id]=H)}function _(F){const P=x();F.__bindingPointIndex=P;const U=o.createBuffer(),I=F.__size,H=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,I,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,U),U}function x(){for(let F=0;F<d;F++)if(h.indexOf(F)===-1)return h.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(F){const P=l[F.id],U=F.uniforms,I=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let H=0,G=U.length;H<G;H++){const Q=Array.isArray(U[H])?U[H]:[U[H]];for(let D=0,C=Q.length;D<C;D++){const V=Q[D];if(E(V,H,D,I)===!0){const at=V.__offset,ht=Array.isArray(V.value)?V.value:[V.value];let dt=0;for(let ft=0;ft<ht.length;ft++){const L=ht[ft],K=R(L);typeof L=="number"||typeof L=="boolean"?(V.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,at+dt,V.__data)):L.isMatrix3?(V.__data[0]=L.elements[0],V.__data[1]=L.elements[1],V.__data[2]=L.elements[2],V.__data[3]=0,V.__data[4]=L.elements[3],V.__data[5]=L.elements[4],V.__data[6]=L.elements[5],V.__data[7]=0,V.__data[8]=L.elements[6],V.__data[9]=L.elements[7],V.__data[10]=L.elements[8],V.__data[11]=0):(L.toArray(V.__data,dt),dt+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,at,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(F,P,U,I){const H=F.value,G=P+"_"+U;if(I[G]===void 0)return typeof H=="number"||typeof H=="boolean"?I[G]=H:I[G]=H.clone(),!0;{const Q=I[G];if(typeof H=="number"||typeof H=="boolean"){if(Q!==H)return I[G]=H,!0}else if(Q.equals(H)===!1)return Q.copy(H),!0}return!1}function A(F){const P=F.uniforms;let U=0;const I=16;for(let G=0,Q=P.length;G<Q;G++){const D=Array.isArray(P[G])?P[G]:[P[G]];for(let C=0,V=D.length;C<V;C++){const at=D[C],ht=Array.isArray(at.value)?at.value:[at.value];for(let dt=0,ft=ht.length;dt<ft;dt++){const L=ht[dt],K=R(L),q=U%I,St=q%K.boundary,N=q+St;U+=St,N!==0&&I-N<K.storage&&(U+=I-N),at.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=U,U+=K.storage}}}const H=U%I;return H>0&&(U+=I-H),F.__size=U,F.__cache={},this}function R(F){const P={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(P.boundary=4,P.storage=4):F.isVector2?(P.boundary=8,P.storage=8):F.isVector3||F.isColor?(P.boundary=16,P.storage=12):F.isVector4?(P.boundary=16,P.storage=16):F.isMatrix3?(P.boundary=48,P.storage=48):F.isMatrix4?(P.boundary=64,P.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),P}function M(F){const P=F.target;P.removeEventListener("dispose",M);const U=h.indexOf(P.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function v(){for(const F in l)o.deleteBuffer(l[F]);h=[],l={},u={}}return{bind:m,update:p,dispose:v}}class Jb{constructor(e={}){const{canvas:i=NS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=h;const A=new Uint32Array(4),R=new Int32Array(4);let M=null,v=null;const F=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ia,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let I=!1;this._outputColorSpace=oi;let H=0,G=0,Q=null,D=-1,C=null;const V=new Je,at=new Je;let ht=null;const dt=new Ce(0);let ft=0,L=i.width,K=i.height,q=1,St=null,N=null;const tt=new Je(0,0,L,K),xt=new Je(0,0,L,K);let yt=!1;const Nt=new Sv;let Ht=!1,nt=!1;const gt=new sn,Et=new ot,Zt=new Je,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function Ye(){return Q===null?q:1}let z=r;function we(b,Y){return i.getContext(b,Y)}try{const b={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${od}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",It,!1),i.addEventListener("webglcontextcreationerror",Tt,!1),z===null){const Y="webgl2";if(z=we(Y,b),z===null)throw we(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let re,$t,zt,ye,Gt,se,He,Ge,w,g,B,J,ct,it,At,Rt,Bt,Vt,Mt,Dt,Kt,Wt,Ut,oe;function W(){re=new lT(z),re.init(),Wt=new Xb(z,re),$t=new eT(z,re,e,Wt),zt=new Vb(z,re),$t.reversedDepthBuffer&&y&&zt.buffers.depth.setReversed(!0),ye=new fT(z),Gt=new wb,se=new kb(z,re,zt,Gt,$t,Wt,ye),He=new iT(U),Ge=new oT(U),w=new _y(z),Ut=new $E(z,w),g=new cT(z,w,ye,Ut),B=new dT(z,g,w,ye),Mt=new hT(z,$t,se),Rt=new nT(Gt),J=new Cb(U,He,Ge,re,$t,Ut,Rt),ct=new Kb(U,Gt),it=new Ub,At=new Bb(re),Vt=new JE(U,He,Ge,zt,B,E,m),Bt=new Hb(U,B,$t),oe=new Qb(z,ye,$t,zt),Dt=new tT(z,re,ye),Kt=new uT(z,re,ye),ye.programs=J.programs,U.capabilities=$t,U.extensions=re,U.properties=Gt,U.renderLists=it,U.shadowMap=Bt,U.state=zt,U.info=ye}W();const Ct=new jb(U,z);this.xr=Ct,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=re.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=re.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(L,K,!1))},this.getSize=function(b){return b.set(L,K)},this.setSize=function(b,Y,lt=!0){if(Ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=b,K=Y,i.width=Math.floor(b*q),i.height=Math.floor(Y*q),lt===!0&&(i.style.width=b+"px",i.style.height=Y+"px"),this.setViewport(0,0,b,Y)},this.getDrawingBufferSize=function(b){return b.set(L*q,K*q).floor()},this.setDrawingBufferSize=function(b,Y,lt){L=b,K=Y,q=lt,i.width=Math.floor(b*lt),i.height=Math.floor(Y*lt),this.setViewport(0,0,b,Y)},this.getCurrentViewport=function(b){return b.copy(V)},this.getViewport=function(b){return b.copy(tt)},this.setViewport=function(b,Y,lt,ut){b.isVector4?tt.set(b.x,b.y,b.z,b.w):tt.set(b,Y,lt,ut),zt.viewport(V.copy(tt).multiplyScalar(q).round())},this.getScissor=function(b){return b.copy(xt)},this.setScissor=function(b,Y,lt,ut){b.isVector4?xt.set(b.x,b.y,b.z,b.w):xt.set(b,Y,lt,ut),zt.scissor(at.copy(xt).multiplyScalar(q).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(b){zt.setScissorTest(yt=b)},this.setOpaqueSort=function(b){St=b},this.setTransparentSort=function(b){N=b},this.getClearColor=function(b){return b.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor(...arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha(...arguments)},this.clear=function(b=!0,Y=!0,lt=!0){let ut=0;if(b){let Z=!1;if(Q!==null){const bt=Q.texture.format;Z=bt===dd||bt===hd||bt===fd}if(Z){const bt=Q.texture.type,Lt=bt===na||bt===gr||bt===Ao||bt===Ro||bt===cd||bt===ud,Ft=Vt.getClearColor(),Ot=Vt.getClearAlpha(),Jt=Ft.r,ee=Ft.g,Yt=Ft.b;Lt?(A[0]=Jt,A[1]=ee,A[2]=Yt,A[3]=Ot,z.clearBufferuiv(z.COLOR,0,A)):(R[0]=Jt,R[1]=ee,R[2]=Yt,R[3]=Ot,z.clearBufferiv(z.COLOR,0,R))}else ut|=z.COLOR_BUFFER_BIT}Y&&(ut|=z.DEPTH_BUFFER_BIT),lt&&(ut|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",It,!1),i.removeEventListener("webglcontextcreationerror",Tt,!1),Vt.dispose(),it.dispose(),At.dispose(),Gt.dispose(),He.dispose(),Ge.dispose(),B.dispose(),Ut.dispose(),oe.dispose(),J.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",on),Ct.removeEventListener("sessionend",ln),je.stop()};function wt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const b=ye.autoReset,Y=Bt.enabled,lt=Bt.autoUpdate,ut=Bt.needsUpdate,Z=Bt.type;W(),ye.autoReset=b,Bt.enabled=Y,Bt.autoUpdate=lt,Bt.needsUpdate=ut,Bt.type=Z}function Tt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function vt(b){const Y=b.target;Y.removeEventListener("dispose",vt),Xt(Y)}function Xt(b){ae(b),Gt.remove(b)}function ae(b){const Y=Gt.get(b).programs;Y!==void 0&&(Y.forEach(function(lt){J.releaseProgram(lt)}),b.isShaderMaterial&&J.releaseShaderCache(b))}this.renderBufferDirect=function(b,Y,lt,ut,Z,bt){Y===null&&(Y=qt);const Lt=Z.isMesh&&Z.matrixWorld.determinant()<0,Ft=sa(b,Y,lt,ut,Z);zt.setMaterial(ut,Lt);let Ot=lt.index,Jt=1;if(ut.wireframe===!0){if(Ot=g.getWireframeAttribute(lt),Ot===void 0)return;Jt=2}const ee=lt.drawRange,Yt=lt.attributes.position;let he=ee.start*Jt,Te=(ee.start+ee.count)*Jt;bt!==null&&(he=Math.max(he,bt.start*Jt),Te=Math.min(Te,(bt.start+bt.count)*Jt)),Ot!==null?(he=Math.max(he,0),Te=Math.min(Te,Ot.count)):Yt!=null&&(he=Math.max(he,0),Te=Math.min(Te,Yt.count));const Xe=Te-he;if(Xe<0||Xe===1/0)return;Ut.setup(Z,ut,Ft,lt,Ot);let Le,de=Dt;if(Ot!==null&&(Le=w.get(Ot),de=Kt,de.setIndex(Le)),Z.isMesh)ut.wireframe===!0?(zt.setLineWidth(ut.wireframeLinewidth*Ye()),de.setMode(z.LINES)):de.setMode(z.TRIANGLES);else if(Z.isLine){let Qt=ut.linewidth;Qt===void 0&&(Qt=1),zt.setLineWidth(Qt*Ye()),Z.isLineSegments?de.setMode(z.LINES):Z.isLineLoop?de.setMode(z.LINE_LOOP):de.setMode(z.LINE_STRIP)}else Z.isPoints?de.setMode(z.POINTS):Z.isSprite&&de.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Do("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))de.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Qt=Z._multiDrawStarts,ke=Z._multiDrawCounts,_e=Z._multiDrawCount,Mn=Ot?w.get(Ot).bytesPerElement:1,fi=Gt.get(ut).currentProgram.getUniforms();for(let Cn=0;Cn<_e;Cn++)fi.setValue(z,"_gl_DrawID",Cn),de.render(Qt[Cn]/Mn,ke[Cn])}else if(Z.isInstancedMesh)de.renderInstances(he,Xe,Z.count);else if(lt.isInstancedBufferGeometry){const Qt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,ke=Math.min(lt.instanceCount,Qt);de.renderInstances(he,Xe,ke)}else de.render(he,Xe)};function De(b,Y,lt){b.transparent===!0&&b.side===$i&&b.forceSinglePass===!1?(b.side=Hn,b.needsUpdate=!0,Ei(b,Y,lt),b.side=Fa,b.needsUpdate=!0,Ei(b,Y,lt),b.side=$i):Ei(b,Y,lt)}this.compile=function(b,Y,lt=null){lt===null&&(lt=b),v=At.get(lt),v.init(Y),P.push(v),lt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),b!==lt&&b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const ut=new Set;return b.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const bt=Z.material;if(bt)if(Array.isArray(bt))for(let Lt=0;Lt<bt.length;Lt++){const Ft=bt[Lt];De(Ft,lt,Z),ut.add(Ft)}else De(bt,lt,Z),ut.add(bt)}),v=P.pop(),ut},this.compileAsync=function(b,Y,lt=null){const ut=this.compile(b,Y,lt);return new Promise(Z=>{function bt(){if(ut.forEach(function(Lt){Gt.get(Lt).currentProgram.isReady()&&ut.delete(Lt)}),ut.size===0){Z(b);return}setTimeout(bt,10)}re.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Ee=null;function ui(b){Ee&&Ee(b)}function on(){je.stop()}function ln(){je.start()}const je=new Ev;je.setAnimationLoop(ui),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(b){Ee=b,Ct.setAnimationLoop(b),b===null?je.stop():je.start()},Ct.addEventListener("sessionstart",on),Ct.addEventListener("sessionend",ln),this.render=function(b,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(Y),Y=Ct.getCamera()),b.isScene===!0&&b.onBeforeRender(U,b,Y,Q),v=At.get(b,P.length),v.init(Y),P.push(v),gt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Nt.setFromProjectionMatrix(gt,Ui,Y.reversedDepth),nt=this.localClippingEnabled,Ht=Rt.init(this.clippingPlanes,nt),M=it.get(b,F.length),M.init(),F.push(M),Ct.enabled===!0&&Ct.isPresenting===!0){const bt=U.xr.getDepthSensingMesh();bt!==null&&Mi(bt,Y,-1/0,U.sortObjects)}Mi(b,Y,0,U.sortObjects),M.finish(),U.sortObjects===!0&&M.sort(St,N),ce=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,ce&&Vt.addToRenderList(M,b),this.info.render.frame++,Ht===!0&&Rt.beginShadows();const lt=v.state.shadowsArray;Bt.render(lt,b,Y),Ht===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ut=M.opaque,Z=M.transmissive;if(v.setupLights(),Y.isArrayCamera){const bt=Y.cameras;if(Z.length>0)for(let Lt=0,Ft=bt.length;Lt<Ft;Lt++){const Ot=bt[Lt];zo(ut,Z,b,Ot)}ce&&Vt.render(b);for(let Lt=0,Ft=bt.length;Lt<Ft;Lt++){const Ot=bt[Lt];_r(M,b,Ot,Ot.viewport)}}else Z.length>0&&zo(ut,Z,b,Y),ce&&Vt.render(b),_r(M,b,Y);Q!==null&&G===0&&(se.updateMultisampleRenderTarget(Q),se.updateRenderTargetMipmap(Q)),b.isScene===!0&&b.onAfterRender(U,b,Y),Ut.resetDefaultState(),D=-1,C=null,P.pop(),P.length>0?(v=P[P.length-1],Ht===!0&&Rt.setGlobalState(U.clippingPlanes,v.state.camera)):v=null,F.pop(),F.length>0?M=F[F.length-1]:M=null};function Mi(b,Y,lt,ut){if(b.visible===!1)return;if(b.layers.test(Y.layers)){if(b.isGroup)lt=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Y);else if(b.isLight)v.pushLight(b),b.castShadow&&v.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Nt.intersectsSprite(b)){ut&&Zt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(gt);const Lt=B.update(b),Ft=b.material;Ft.visible&&M.push(b,Lt,Ft,lt,Zt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Nt.intersectsObject(b))){const Lt=B.update(b),Ft=b.material;if(ut&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Zt.copy(b.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Zt.copy(Lt.boundingSphere.center)),Zt.applyMatrix4(b.matrixWorld).applyMatrix4(gt)),Array.isArray(Ft)){const Ot=Lt.groups;for(let Jt=0,ee=Ot.length;Jt<ee;Jt++){const Yt=Ot[Jt],he=Ft[Yt.materialIndex];he&&he.visible&&M.push(b,Lt,he,lt,Zt.z,Yt)}}else Ft.visible&&M.push(b,Lt,Ft,lt,Zt.z,null)}}const bt=b.children;for(let Lt=0,Ft=bt.length;Lt<Ft;Lt++)Mi(bt[Lt],Y,lt,ut)}function _r(b,Y,lt,ut){const Z=b.opaque,bt=b.transmissive,Lt=b.transparent;v.setupLightsView(lt),Ht===!0&&Rt.setGlobalState(U.clippingPlanes,lt),ut&&zt.viewport(V.copy(ut)),Z.length>0&&vr(Z,Y,lt),bt.length>0&&vr(bt,Y,lt),Lt.length>0&&vr(Lt,Y,lt),zt.buffers.depth.setTest(!0),zt.buffers.depth.setMask(!0),zt.buffers.color.setMask(!0),zt.setPolygonOffset(!1)}function zo(b,Y,lt,ut){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ut.id]===void 0&&(v.state.transmissionRenderTarget[ut.id]=new Ha(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Ss:na,minFilter:pr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const bt=v.state.transmissionRenderTarget[ut.id],Lt=ut.viewport||V;bt.setSize(Lt.z*U.transmissionResolutionScale,Lt.w*U.transmissionResolutionScale);const Ft=U.getRenderTarget(),Ot=U.getActiveCubeFace(),Jt=U.getActiveMipmapLevel();U.setRenderTarget(bt),U.getClearColor(dt),ft=U.getClearAlpha(),ft<1&&U.setClearColor(16777215,.5),U.clear(),ce&&Vt.render(lt);const ee=U.toneMapping;U.toneMapping=Ia;const Yt=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),v.setupLightsView(ut),Ht===!0&&Rt.setGlobalState(U.clippingPlanes,ut),vr(b,lt,ut),se.updateMultisampleRenderTarget(bt),se.updateRenderTargetMipmap(bt),re.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let Te=0,Xe=Y.length;Te<Xe;Te++){const Le=Y[Te],de=Le.object,Qt=Le.geometry,ke=Le.material,_e=Le.group;if(ke.side===$i&&de.layers.test(ut.layers)){const Mn=ke.side;ke.side=Hn,ke.needsUpdate=!0,Es(de,lt,ut,Qt,ke,_e),ke.side=Mn,ke.needsUpdate=!0,he=!0}}he===!0&&(se.updateMultisampleRenderTarget(bt),se.updateRenderTargetMipmap(bt))}U.setRenderTarget(Ft,Ot,Jt),U.setClearColor(dt,ft),Yt!==void 0&&(ut.viewport=Yt),U.toneMapping=ee}function vr(b,Y,lt){const ut=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,bt=b.length;Z<bt;Z++){const Lt=b[Z],Ft=Lt.object,Ot=Lt.geometry,Jt=Lt.group;let ee=Lt.material;ee.allowOverride===!0&&ut!==null&&(ee=ut),Ft.layers.test(lt.layers)&&Es(Ft,Y,lt,Ot,ee,Jt)}}function Es(b,Y,lt,ut,Z,bt){b.onBeforeRender(U,Y,lt,ut,Z,bt),b.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(U,Y,lt,ut,b,bt),Z.transparent===!0&&Z.side===$i&&Z.forceSinglePass===!1?(Z.side=Hn,Z.needsUpdate=!0,U.renderBufferDirect(lt,Y,ut,Z,b,bt),Z.side=Fa,Z.needsUpdate=!0,U.renderBufferDirect(lt,Y,ut,Z,b,bt),Z.side=$i):U.renderBufferDirect(lt,Y,ut,Z,b,bt),b.onAfterRender(U,Y,lt,ut,Z,bt)}function Ei(b,Y,lt){Y.isScene!==!0&&(Y=qt);const ut=Gt.get(b),Z=v.state.lights,bt=v.state.shadowsArray,Lt=Z.state.version,Ft=J.getParameters(b,Z.state,bt,Y,lt),Ot=J.getProgramCacheKey(Ft);let Jt=ut.programs;ut.environment=b.isMeshStandardMaterial?Y.environment:null,ut.fog=Y.fog,ut.envMap=(b.isMeshStandardMaterial?Ge:He).get(b.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&b.envMap===null?Y.environmentRotation:b.envMapRotation,Jt===void 0&&(b.addEventListener("dispose",vt),Jt=new Map,ut.programs=Jt);let ee=Jt.get(Ot);if(ee!==void 0){if(ut.currentProgram===ee&&ut.lightsStateVersion===Lt)return Ni(b,Ft),ee}else Ft.uniforms=J.getUniforms(b),b.onBeforeCompile(Ft,U),ee=J.acquireProgram(Ft,Ot),Jt.set(Ot,ee),ut.uniforms=Ft.uniforms;const Yt=ut.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Yt.clippingPlanes=Rt.uniform),Ni(b,Ft),ut.needsLights=oa(b),ut.lightsStateVersion=Lt,ut.needsLights&&(Yt.ambientLightColor.value=Z.state.ambient,Yt.lightProbe.value=Z.state.probe,Yt.directionalLights.value=Z.state.directional,Yt.directionalLightShadows.value=Z.state.directionalShadow,Yt.spotLights.value=Z.state.spot,Yt.spotLightShadows.value=Z.state.spotShadow,Yt.rectAreaLights.value=Z.state.rectArea,Yt.ltc_1.value=Z.state.rectAreaLTC1,Yt.ltc_2.value=Z.state.rectAreaLTC2,Yt.pointLights.value=Z.state.point,Yt.pointLightShadows.value=Z.state.pointShadow,Yt.hemisphereLights.value=Z.state.hemi,Yt.directionalShadowMap.value=Z.state.directionalShadowMap,Yt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Yt.spotShadowMap.value=Z.state.spotShadowMap,Yt.spotLightMatrix.value=Z.state.spotLightMatrix,Yt.spotLightMap.value=Z.state.spotLightMap,Yt.pointShadowMap.value=Z.state.pointShadowMap,Yt.pointShadowMatrix.value=Z.state.pointShadowMatrix),ut.currentProgram=ee,ut.uniformsList=null,ee}function xr(b){if(b.uniformsList===null){const Y=b.currentProgram.getUniforms();b.uniformsList=Sc.seqWithValue(Y.seq,b.uniforms)}return b.uniformsList}function Ni(b,Y){const lt=Gt.get(b);lt.outputColorSpace=Y.outputColorSpace,lt.batching=Y.batching,lt.batchingColor=Y.batchingColor,lt.instancing=Y.instancing,lt.instancingColor=Y.instancingColor,lt.instancingMorph=Y.instancingMorph,lt.skinning=Y.skinning,lt.morphTargets=Y.morphTargets,lt.morphNormals=Y.morphNormals,lt.morphColors=Y.morphColors,lt.morphTargetsCount=Y.morphTargetsCount,lt.numClippingPlanes=Y.numClippingPlanes,lt.numIntersection=Y.numClipIntersection,lt.vertexAlphas=Y.vertexAlphas,lt.vertexTangents=Y.vertexTangents,lt.toneMapping=Y.toneMapping}function sa(b,Y,lt,ut,Z){Y.isScene!==!0&&(Y=qt),se.resetTextureUnits();const bt=Y.fog,Lt=ut.isMeshStandardMaterial?Y.environment:null,Ft=Q===null?U.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:vs,Ot=(ut.isMeshStandardMaterial?Ge:He).get(ut.envMap||Lt),Jt=ut.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ee=!!lt.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),Yt=!!lt.morphAttributes.position,he=!!lt.morphAttributes.normal,Te=!!lt.morphAttributes.color;let Xe=Ia;ut.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Xe=U.toneMapping);const Le=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,de=Le!==void 0?Le.length:0,Qt=Gt.get(ut),ke=v.state.lights;if(Ht===!0&&(nt===!0||b!==C)){const Ze=b===C&&ut.id===D;Rt.setState(ut,b,Ze)}let _e=!1;ut.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==ke.state.version||Qt.outputColorSpace!==Ft||Z.isBatchedMesh&&Qt.batching===!1||!Z.isBatchedMesh&&Qt.batching===!0||Z.isBatchedMesh&&Qt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Qt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Qt.instancing===!1||!Z.isInstancedMesh&&Qt.instancing===!0||Z.isSkinnedMesh&&Qt.skinning===!1||!Z.isSkinnedMesh&&Qt.skinning===!0||Z.isInstancedMesh&&Qt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Qt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Qt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Qt.instancingMorph===!1&&Z.morphTexture!==null||Qt.envMap!==Ot||ut.fog===!0&&Qt.fog!==bt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Rt.numPlanes||Qt.numIntersection!==Rt.numIntersection)||Qt.vertexAlphas!==Jt||Qt.vertexTangents!==ee||Qt.morphTargets!==Yt||Qt.morphNormals!==he||Qt.morphColors!==Te||Qt.toneMapping!==Xe||Qt.morphTargetsCount!==de)&&(_e=!0):(_e=!0,Qt.__version=ut.version);let Mn=Qt.currentProgram;_e===!0&&(Mn=Ei(ut,Y,Z));let fi=!1,Cn=!1,dn=!1;const Ie=Mn.getUniforms(),wn=Qt.uniforms;if(zt.useProgram(Mn.program)&&(fi=!0,Cn=!0,dn=!0),ut.id!==D&&(D=ut.id,Cn=!0),fi||C!==b){zt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ie.setValue(z,"projectionMatrix",b.projectionMatrix),Ie.setValue(z,"viewMatrix",b.matrixWorldInverse);const vn=Ie.map.cameraPosition;vn!==void 0&&vn.setValue(z,Et.setFromMatrixPosition(b.matrixWorld)),$t.logarithmicDepthBuffer&&Ie.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&Ie.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,Cn=!0,dn=!0)}if(Z.isSkinnedMesh){Ie.setOptional(z,Z,"bindMatrix"),Ie.setOptional(z,Z,"bindMatrixInverse");const Ze=Z.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),Ie.setValue(z,"boneTexture",Ze.boneTexture,se))}Z.isBatchedMesh&&(Ie.setOptional(z,Z,"batchingTexture"),Ie.setValue(z,"batchingTexture",Z._matricesTexture,se),Ie.setOptional(z,Z,"batchingIdTexture"),Ie.setValue(z,"batchingIdTexture",Z._indirectTexture,se),Ie.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ie.setValue(z,"batchingColorTexture",Z._colorsTexture,se));const En=lt.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&Mt.update(Z,lt,Mn),(Cn||Qt.receiveShadow!==Z.receiveShadow)&&(Qt.receiveShadow=Z.receiveShadow,Ie.setValue(z,"receiveShadow",Z.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(wn.envMap.value=Ot,wn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&Y.environment!==null&&(wn.envMapIntensity.value=Y.environmentIntensity),Cn&&(Ie.setValue(z,"toneMappingExposure",U.toneMappingExposure),Qt.needsLights&&Ga(wn,dn),bt&&ut.fog===!0&&ct.refreshFogUniforms(wn,bt),ct.refreshMaterialUniforms(wn,ut,q,K,v.state.transmissionRenderTarget[b.id]),Sc.upload(z,xr(Qt),wn,se)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(Sc.upload(z,xr(Qt),wn,se),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&Ie.setValue(z,"center",Z.center),Ie.setValue(z,"modelViewMatrix",Z.modelViewMatrix),Ie.setValue(z,"normalMatrix",Z.normalMatrix),Ie.setValue(z,"modelMatrix",Z.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const Ze=ut.uniformsGroups;for(let vn=0,Sr=Ze.length;vn<Sr;vn++){const Ln=Ze[vn];oe.update(Ln,Mn),oe.bind(Ln,Mn)}}return Mn}function Ga(b,Y){b.ambientLightColor.needsUpdate=Y,b.lightProbe.needsUpdate=Y,b.directionalLights.needsUpdate=Y,b.directionalLightShadows.needsUpdate=Y,b.pointLights.needsUpdate=Y,b.pointLightShadows.needsUpdate=Y,b.spotLights.needsUpdate=Y,b.spotLightShadows.needsUpdate=Y,b.rectAreaLights.needsUpdate=Y,b.hemisphereLights.needsUpdate=Y}function oa(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(b,Y,lt){const ut=Gt.get(b);ut.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ut.__autoAllocateDepthBuffer===!1&&(ut.__useRenderToTexture=!1),Gt.get(b.texture).__webglTexture=Y,Gt.get(b.depthTexture).__webglTexture=ut.__autoAllocateDepthBuffer?void 0:lt,ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,Y){const lt=Gt.get(b);lt.__webglFramebuffer=Y,lt.__useDefaultFramebuffer=Y===void 0};const en=z.createFramebuffer();this.setRenderTarget=function(b,Y=0,lt=0){Q=b,H=Y,G=lt;let ut=!0,Z=null,bt=!1,Lt=!1;if(b){const Ot=Gt.get(b);if(Ot.__useDefaultFramebuffer!==void 0)zt.bindFramebuffer(z.FRAMEBUFFER,null),ut=!1;else if(Ot.__webglFramebuffer===void 0)se.setupRenderTarget(b);else if(Ot.__hasExternalTextures)se.rebindTextures(b,Gt.get(b.texture).__webglTexture,Gt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Yt=b.depthTexture;if(Ot.__boundDepthTexture!==Yt){if(Yt!==null&&Gt.has(Yt)&&(b.width!==Yt.image.width||b.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(b)}}const Jt=b.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Lt=!0);const ee=Gt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ee[Y])?Z=ee[Y][lt]:Z=ee[Y],bt=!0):b.samples>0&&se.useMultisampledRTT(b)===!1?Z=Gt.get(b).__webglMultisampledFramebuffer:Array.isArray(ee)?Z=ee[lt]:Z=ee,V.copy(b.viewport),at.copy(b.scissor),ht=b.scissorTest}else V.copy(tt).multiplyScalar(q).floor(),at.copy(xt).multiplyScalar(q).floor(),ht=yt;if(lt!==0&&(Z=en),zt.bindFramebuffer(z.FRAMEBUFFER,Z)&&ut&&zt.drawBuffers(b,Z),zt.viewport(V),zt.scissor(at),zt.setScissorTest(ht),bt){const Ot=Gt.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ot.__webglTexture,lt)}else if(Lt){const Ot=Y;for(let Jt=0;Jt<b.textures.length;Jt++){const ee=Gt.get(b.textures[Jt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Jt,ee.__webglTexture,lt,Ot)}}else if(b!==null&&lt!==0){const Ot=Gt.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ot.__webglTexture,lt)}D=-1},this.readRenderTargetPixels=function(b,Y,lt,ut,Z,bt,Lt,Ft=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Gt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){zt.bindFramebuffer(z.FRAMEBUFFER,Ot);try{const Jt=b.textures[Ft],ee=Jt.format,Yt=Jt.type;if(!$t.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=b.width-ut&&lt>=0&&lt<=b.height-Z&&(b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ft),z.readPixels(Y,lt,ut,Z,Wt.convert(ee),Wt.convert(Yt),bt))}finally{const Jt=Q!==null?Gt.get(Q).__webglFramebuffer:null;zt.bindFramebuffer(z.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(b,Y,lt,ut,Z,bt,Lt,Ft=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Gt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot)if(Y>=0&&Y<=b.width-ut&&lt>=0&&lt<=b.height-Z){zt.bindFramebuffer(z.FRAMEBUFFER,Ot);const Jt=b.textures[Ft],ee=Jt.format,Yt=Jt.type;if(!$t.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,he),z.bufferData(z.PIXEL_PACK_BUFFER,bt.byteLength,z.STREAM_READ),b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ft),z.readPixels(Y,lt,ut,Z,Wt.convert(ee),Wt.convert(Yt),0);const Te=Q!==null?Gt.get(Q).__webglFramebuffer:null;zt.bindFramebuffer(z.FRAMEBUFFER,Te);const Xe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await LS(z,Xe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,he),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,bt),z.deleteBuffer(he),z.deleteSync(Xe),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,Y=null,lt=0){const ut=Math.pow(2,-lt),Z=Math.floor(b.image.width*ut),bt=Math.floor(b.image.height*ut),Lt=Y!==null?Y.x:0,Ft=Y!==null?Y.y:0;se.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,lt,0,0,Lt,Ft,Z,bt),zt.unbindTexture()};const Bo=z.createFramebuffer(),Io=z.createFramebuffer();this.copyTextureToTexture=function(b,Y,lt=null,ut=null,Z=0,bt=null){bt===null&&(Z!==0?(Do("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=Z,Z=0):bt=0);let Lt,Ft,Ot,Jt,ee,Yt,he,Te,Xe;const Le=b.isCompressedTexture?b.mipmaps[bt]:b.image;if(lt!==null)Lt=lt.max.x-lt.min.x,Ft=lt.max.y-lt.min.y,Ot=lt.isBox3?lt.max.z-lt.min.z:1,Jt=lt.min.x,ee=lt.min.y,Yt=lt.isBox3?lt.min.z:0;else{const En=Math.pow(2,-Z);Lt=Math.floor(Le.width*En),Ft=Math.floor(Le.height*En),b.isDataArrayTexture?Ot=Le.depth:b.isData3DTexture?Ot=Math.floor(Le.depth*En):Ot=1,Jt=0,ee=0,Yt=0}ut!==null?(he=ut.x,Te=ut.y,Xe=ut.z):(he=0,Te=0,Xe=0);const de=Wt.convert(Y.format),Qt=Wt.convert(Y.type);let ke;Y.isData3DTexture?(se.setTexture3D(Y,0),ke=z.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(se.setTexture2DArray(Y,0),ke=z.TEXTURE_2D_ARRAY):(se.setTexture2D(Y,0),ke=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment);const _e=z.getParameter(z.UNPACK_ROW_LENGTH),Mn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),fi=z.getParameter(z.UNPACK_SKIP_PIXELS),Cn=z.getParameter(z.UNPACK_SKIP_ROWS),dn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Le.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Le.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Jt),z.pixelStorei(z.UNPACK_SKIP_ROWS,ee),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Yt);const Ie=b.isDataArrayTexture||b.isData3DTexture,wn=Y.isDataArrayTexture||Y.isData3DTexture;if(b.isDepthTexture){const En=Gt.get(b),Ze=Gt.get(Y),vn=Gt.get(En.__renderTarget),Sr=Gt.get(Ze.__renderTarget);zt.bindFramebuffer(z.READ_FRAMEBUFFER,vn.__webglFramebuffer),zt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let Ln=0;Ln<Ot;Ln++)Ie&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Gt.get(b).__webglTexture,Z,Yt+Ln),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Gt.get(Y).__webglTexture,bt,Xe+Ln)),z.blitFramebuffer(Jt,ee,Lt,Ft,he,Te,Lt,Ft,z.DEPTH_BUFFER_BIT,z.NEAREST);zt.bindFramebuffer(z.READ_FRAMEBUFFER,null),zt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Z!==0||b.isRenderTargetTexture||Gt.has(b)){const En=Gt.get(b),Ze=Gt.get(Y);zt.bindFramebuffer(z.READ_FRAMEBUFFER,Bo),zt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Io);for(let vn=0;vn<Ot;vn++)Ie?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,En.__webglTexture,Z,Yt+vn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,En.__webglTexture,Z),wn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ze.__webglTexture,bt,Xe+vn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ze.__webglTexture,bt),Z!==0?z.blitFramebuffer(Jt,ee,Lt,Ft,he,Te,Lt,Ft,z.COLOR_BUFFER_BIT,z.NEAREST):wn?z.copyTexSubImage3D(ke,bt,he,Te,Xe+vn,Jt,ee,Lt,Ft):z.copyTexSubImage2D(ke,bt,he,Te,Jt,ee,Lt,Ft);zt.bindFramebuffer(z.READ_FRAMEBUFFER,null),zt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else wn?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(ke,bt,he,Te,Xe,Lt,Ft,Ot,de,Qt,Le.data):Y.isCompressedArrayTexture?z.compressedTexSubImage3D(ke,bt,he,Te,Xe,Lt,Ft,Ot,de,Le.data):z.texSubImage3D(ke,bt,he,Te,Xe,Lt,Ft,Ot,de,Qt,Le):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,bt,he,Te,Lt,Ft,de,Qt,Le.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,bt,he,Te,Le.width,Le.height,de,Le.data):z.texSubImage2D(z.TEXTURE_2D,bt,he,Te,Lt,Ft,de,Qt,Le);z.pixelStorei(z.UNPACK_ROW_LENGTH,_e),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Mn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,fi),z.pixelStorei(z.UNPACK_SKIP_ROWS,Cn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,dn),bt===0&&Y.generateMipmaps&&z.generateMipmap(ke),zt.unbindTexture()},this.initRenderTarget=function(b){Gt.get(b).__webglFramebuffer===void 0&&se.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?se.setTextureCube(b,0):b.isData3DTexture?se.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?se.setTexture2DArray(b,0):se.setTexture2D(b,0),zt.unbindTexture()},this.resetState=function(){H=0,G=0,Q=null,zt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const $b=["#5227FF","#FF9FFC","#B19EEF"];function tA({mouseForce:o=20,cursorSize:e=100,isViscous:i=!1,viscous:r=30,iterationsViscous:l=32,iterationsPoisson:u=32,dt:h=.014,BFECC:d=!0,resolution:m=.5,isBounce:p=!1,colors:_=$b,style:x={},className:y="",autoDemo:E=!0,autoSpeed:A=.5,autoIntensity:R=2.2,takeoverDuration:M=.25,autoResumeDelay:v=1e3,autoRampDuration:F=.6}){const P=si.useRef(null),U=si.useRef(null),I=si.useRef(null),H=si.useRef(null),G=si.useRef(null),Q=si.useRef(!0),D=si.useRef(null);return si.useEffect(()=>{if(!P.current)return;function C(w){let g;Array.isArray(w)&&w.length>0?g=w.length===1?[w[0],w[0]]:w:g=["#ffffff","#ffffff"];const B=g.length,J=new Uint8Array(B*4);for(let it=0;it<B;it++){const At=new Ce(g[it]);J[it*4+0]=Math.round(At.r*255),J[it*4+1]=Math.round(At.g*255),J[it*4+2]=Math.round(At.b*255),J[it*4+3]=255}const ct=new ay(J,B,1,li);return ct.magFilter=Fn,ct.minFilter=Fn,ct.wrapS=Si,ct.wrapT=Si,ct.generateMipmaps=!1,ct.needsUpdate=!0,ct}const V=C(_),at=new Je(0,0,0,0);class ht{width=0;height=0;aspect=1;pixelRatio=1;isMobile=!1;breakpoint=768;fboWidth=null;fboHeight=null;time=0;delta=0;container=null;renderer=null;clock=null;init(g){this.container=g,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new Jb({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Ce(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height);const B=this.renderer.domElement;B.style.width="100%",B.style.height="100%",B.style.display="block",this.clock=new my,this.clock.start()}resize(){if(!this.container)return;const g=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(g.width)),this.height=Math.max(1,Math.floor(g.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.clock&&(this.delta=this.clock.getDelta(),this.time+=this.delta)}}const dt=new ht;class ft{mouseMoved=!1;coords=new le;coords_old=new le;diff=new le;timer=null;container=null;isHoverInside=!1;hasUserControl=!1;isAutoActive=!1;autoIntensity=2;takeoverActive=!1;takeoverStartTime=0;takeoverDuration=.25;takeoverFrom=new le;takeoverTo=new le;onInteract=null;_onMouseMove=this.onDocumentMouseMove.bind(this);_onTouchStart=this.onDocumentTouchStart.bind(this);_onTouchMove=this.onDocumentTouchMove.bind(this);_onMouseEnter=this.onMouseEnter.bind(this);_onMouseLeave=this.onMouseLeave.bind(this);_onTouchEnd=this.onTouchEnd.bind(this);init(g){this.container=g,g.addEventListener("mousemove",this._onMouseMove),g.addEventListener("touchstart",this._onTouchStart,{passive:!0}),g.addEventListener("touchmove",this._onTouchMove,{passive:!0}),g.addEventListener("mouseenter",this._onMouseEnter),g.addEventListener("mouseleave",this._onMouseLeave),g.addEventListener("touchend",this._onTouchEnd)}dispose(){const g=this.container;g&&(g.removeEventListener("mousemove",this._onMouseMove),g.removeEventListener("touchstart",this._onTouchStart),g.removeEventListener("touchmove",this._onTouchMove),g.removeEventListener("mouseenter",this._onMouseEnter),g.removeEventListener("mouseleave",this._onMouseLeave),g.removeEventListener("touchend",this._onTouchEnd))}setCoords(g,B){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const J=this.container.getBoundingClientRect(),ct=(g-J.left)/J.width,it=(B-J.top)/J.height;this.coords.set(ct*2-1,-(it*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(g,B){this.coords.set(g,B),this.mouseMoved=!0}onDocumentMouseMove(g){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const B=this.container.getBoundingClientRect(),J=(g.clientX-B.left)/B.width,ct=(g.clientY-B.top)/B.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(J*2-1,-(ct*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(g.clientX,g.clientY),this.hasUserControl=!0}onDocumentTouchStart(g){if(g.touches.length===1){const B=g.touches[0];this.onInteract&&this.onInteract(),this.setCoords(B.pageX,B.pageY),this.hasUserControl=!0}}onDocumentTouchMove(g){if(g.touches.length===1){const B=g.touches[0];this.onInteract&&this.onInteract(),this.setCoords(B.pageX,B.pageY)}}onTouchEnd(){this.isHoverInside=!1}onMouseEnter(){this.isHoverInside=!0}onMouseLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const g=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(g>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const B=g*g*(3-2*g);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,B)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const L=new ft;class K{mouse;manager;enabled;speed;resumeDelay;rampDurationMs;active=!1;current=new le(0,0);target=new le;lastTime=performance.now();activationTime=0;margin=.2;_tmpDir=new le;constructor(g,B,J){this.mouse=g,this.manager=B,this.enabled=J.enabled,this.speed=J.speed,this.resumeDelay=J.resumeDelay||3e3,this.rampDurationMs=(J.rampDuration||0)*1e3,this.pickNewTarget()}pickNewTarget(){const g=Math.random;this.target.set((g()*2-1)*(1-this.margin),(g()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const g=performance.now();if(g-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=g,this.activationTime=g),!this.active)return;this.mouse.isAutoActive=!0;let J=(g-this.lastTime)/1e3;this.lastTime=g,J>.2&&(J=.016);const ct=this._tmpDir.subVectors(this.target,this.current),it=ct.length();if(it<.01){this.pickNewTarget();return}ct.normalize();let At=1;if(this.rampDurationMs>0){const Vt=Math.min(1,(g-this.activationTime)/this.rampDurationMs);At=Vt*Vt*(3-2*Vt)}const Rt=this.speed*J*At,Bt=Math.min(Rt,it);this.current.addScaledVector(ct,Bt),this.mouse.setNormalized(this.current.x,this.current.y)}}const q=`
	attribute vec3 position;
	uniform vec2 px;
	uniform vec2 boundarySpace;
	varying vec2 uv;
	precision highp float;
	void main(){
	vec3 pos = position;
	vec2 scale = 1.0 - boundarySpace * 2.0;
	pos.xy = pos.xy * scale;
	uv = vec2(0.5)+(pos.xy)*0.5;
	gl_Position = vec4(pos, 1.0);
}
`,St=`
	attribute vec3 position;
	uniform vec2 px;
	precision highp float;
	varying vec2 uv;
	void main(){
	vec3 pos = position;
	uv = 0.5 + pos.xy * 0.5;
	vec2 n = sign(pos.xy);
	pos.xy = abs(pos.xy) - px * 1.0;
	pos.xy *= n;
	gl_Position = vec4(pos, 1.0);
}
`,N=`
		precision highp float;
		attribute vec3 position;
		attribute vec2 uv;
		uniform vec2 center;
		uniform vec2 scale;
		uniform vec2 px;
		varying vec2 vUv;
		void main(){
		vec2 pos = position.xy * scale * 2.0 * px + center;
		vUv = uv;
		gl_Position = vec4(pos, 0.0, 1.0);
}
`,tt=`
		precision highp float;
		uniform sampler2D velocity;
		uniform float dt;
		uniform bool isBFECC;
		uniform vec2 fboSize;
		uniform vec2 px;
		varying vec2 uv;
		void main(){
		vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
		if(isBFECC == false){
				vec2 vel = texture2D(velocity, uv).xy;
				vec2 uv2 = uv - vel * dt * ratio;
				vec2 newVel = texture2D(velocity, uv2).xy;
				gl_FragColor = vec4(newVel, 0.0, 0.0);
		} else {
				vec2 spot_new = uv;
				vec2 vel_old = texture2D(velocity, uv).xy;
				vec2 spot_old = spot_new - vel_old * dt * ratio;
				vec2 vel_new1 = texture2D(velocity, spot_old).xy;
				vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
				vec2 error = spot_new2 - spot_new;
				vec2 spot_new3 = spot_new - error / 2.0;
				vec2 vel_2 = texture2D(velocity, spot_new3).xy;
				vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
				vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
				gl_FragColor = vec4(newVel2, 0.0, 0.0);
		}
}
`,xt=`
		precision highp float;
		uniform sampler2D velocity;
		uniform sampler2D palette;
		uniform vec4 bgColor;
		varying vec2 uv;
		void main(){
		vec2 vel = texture2D(velocity, uv).xy;
		float lenv = clamp(length(vel), 0.0, 1.0);
		vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
		vec3 outRGB = mix(bgColor.rgb, c, lenv);
		float outA = mix(bgColor.a, 1.0, lenv);
		gl_FragColor = vec4(outRGB, outA);
}
`,yt=`
		precision highp float;
		uniform sampler2D velocity;
		uniform float dt;
		uniform vec2 px;
		varying vec2 uv;
		void main(){
		float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
		float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
		float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
		float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
		float divergence = (x1 - x0 + y1 - y0) / 2.0;
		gl_FragColor = vec4(divergence / dt);
}
`,Nt=`
		precision highp float;
		uniform vec2 force;
		uniform vec2 center;
		uniform vec2 scale;
		uniform vec2 px;
		varying vec2 vUv;
		void main(){
		vec2 circle = (vUv - 0.5) * 2.0;
		float d = 1.0 - min(length(circle), 1.0);
		d *= d;
		gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,Ht=`
		precision highp float;
		uniform sampler2D pressure;
		uniform sampler2D divergence;
		uniform vec2 px;
		varying vec2 uv;
		void main(){
		float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
		float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
		float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
		float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
		float div = texture2D(divergence, uv).r;
		float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
		gl_FragColor = vec4(newP);
}
`,nt=`
		precision highp float;
		uniform sampler2D pressure;
		uniform sampler2D velocity;
		uniform vec2 px;
		uniform float dt;
		varying vec2 uv;
		void main(){
		float step = 1.0;
		float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
		float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
		float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
		float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
		vec2 v = texture2D(velocity, uv).xy;
		vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
		v = v - gradP * dt;
		gl_FragColor = vec4(v, 0.0, 1.0);
}
`,gt=`
		precision highp float;
		uniform sampler2D velocity;
		uniform sampler2D velocity_new;
		uniform float v;
		uniform vec2 px;
		uniform float dt;
		varying vec2 uv;
		void main(){
		vec2 old = texture2D(velocity, uv).xy;
		vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
		vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
		vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
		vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
		vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
		newv /= 4.0 * (1.0 + v * dt);
		gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Et{props;uniforms;scene=null;camera=null;material=null;geometry=null;plane=null;constructor(g){this.props=g||{},this.uniforms=this.props.material?.uniforms}init(...g){this.scene=new y_,this.camera=new Tc,this.uniforms&&(this.material=new hc(this.props.material),this.geometry=new mr(2,2),this.plane=new ci(this.geometry,this.material),this.scene.add(this.plane))}update(...g){!dt.renderer||!this.scene||!this.camera||(dt.renderer.setRenderTarget(this.props.output||null),dt.renderer.render(this.scene,this.camera),dt.renderer.setRenderTarget(null))}}class Zt extends Et{line;constructor(g){super({material:{vertexShader:q,fragmentShader:tt,uniforms:{boundarySpace:{value:g.cellScale},px:{value:g.cellScale},fboSize:{value:g.fboSize},velocity:{value:g.src.texture},dt:{value:g.dt},isBFECC:{value:!0}}},output:g.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const g=new ra,B=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);g.setAttribute("position",new yi(B,3));const J=new hc({vertexShader:St,fragmentShader:tt,uniforms:this.uniforms});this.line=new uy(g,J),this.scene.add(this.line)}update(...g){const{dt:B,isBounce:J,BFECC:ct}=g[0]||{};this.uniforms&&(typeof B=="number"&&(this.uniforms.dt.value=B),typeof J=="boolean"&&(this.line.visible=J),typeof ct=="boolean"&&(this.uniforms.isBFECC.value=ct),super.update())}}class qt extends Et{mouse;constructor(g){super({output:g.dst}),this.init(g)}init(g){super.init();const B=new mr(1,1),J=new hc({vertexShader:N,fragmentShader:Nt,blending:gh,depthWrite:!1,uniforms:{px:{value:g.cellScale},force:{value:new le(0,0)},center:{value:new le(0,0)},scale:{value:new le(g.cursor_size,g.cursor_size)}}});this.mouse=new ci(B,J),this.scene.add(this.mouse)}update(...g){const B=g[0]||{},J=L.diff.x/2*(B.mouse_force||0),ct=L.diff.y/2*(B.mouse_force||0),it=B.cellScale||{x:1,y:1},At=B.cursor_size||0,Rt=At*it.x,Bt=At*it.y,Vt=Math.min(Math.max(L.coords.x,-1+Rt+it.x*2),1-Rt-it.x*2),Mt=Math.min(Math.max(L.coords.y,-1+Bt+it.y*2),1-Bt-it.y*2),Dt=this.mouse.material.uniforms;Dt.force.value.set(J,ct),Dt.center.value.set(Vt,Mt),Dt.scale.value.set(At,At),super.update()}}class ce extends Et{constructor(g){super({material:{vertexShader:q,fragmentShader:gt,uniforms:{boundarySpace:{value:g.boundarySpace},velocity:{value:g.src.texture},velocity_new:{value:g.dst_.texture},v:{value:g.viscous},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst,output0:g.dst_,output1:g.dst}),this.init()}update(...g){const{viscous:B,iterations:J,dt:ct}=g[0]||{};if(!this.uniforms)return;let it,At;typeof B=="number"&&(this.uniforms.v.value=B);const Rt=J??0;for(let Bt=0;Bt<Rt;Bt++)Bt%2===0?(it=this.props.output0,At=this.props.output1):(it=this.props.output1,At=this.props.output0),this.uniforms.velocity_new.value=it.texture,this.props.output=At,typeof ct=="number"&&(this.uniforms.dt.value=ct),super.update();return At}}class Ye extends Et{constructor(g){super({material:{vertexShader:q,fragmentShader:yt,uniforms:{boundarySpace:{value:g.boundarySpace},velocity:{value:g.src.texture},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst}),this.init()}update(...g){const{vel:B}=g[0]||{};this.uniforms&&B&&(this.uniforms.velocity.value=B.texture),super.update()}}class z extends Et{constructor(g){super({material:{vertexShader:q,fragmentShader:Ht,uniforms:{boundarySpace:{value:g.boundarySpace},pressure:{value:g.dst_.texture},divergence:{value:g.src.texture},px:{value:g.cellScale}}},output:g.dst,output0:g.dst_,output1:g.dst}),this.init()}update(...g){const{iterations:B}=g[0]||{};let J,ct;const it=B??0;for(let At=0;At<it;At++)At%2===0?(J=this.props.output0,ct=this.props.output1):(J=this.props.output1,ct=this.props.output0),this.uniforms&&(this.uniforms.pressure.value=J.texture),this.props.output=ct,super.update();return ct}}class we extends Et{constructor(g){super({material:{vertexShader:q,fragmentShader:nt,uniforms:{boundarySpace:{value:g.boundarySpace},pressure:{value:g.src_p.texture},velocity:{value:g.src_v.texture},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst}),this.init()}update(...g){const{vel:B,pressure:J}=g[0]||{};this.uniforms&&B&&J&&(this.uniforms.velocity.value=B.texture,this.uniforms.pressure.value=J.texture),super.update()}}class re{options;fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null};fboSize=new le;cellScale=new le;boundarySpace=new le;advection;externalForce;viscous;divergence;poisson;pressure;constructor(g){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...g},this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Ss:Di}createAllFBO(){const B={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Fn,magFilter:Fn,wrapS:Si,wrapT:Si};for(const J in this.fbos)this.fbos[J]=new Ha(this.fboSize.x,this.fboSize.y,B)}createShaderPass(){this.advection=new Zt({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new qt({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new ce({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Ye({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new z({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new we({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const g=Math.max(1,Math.round(this.options.resolution*dt.width)),B=Math.max(1,Math.round(this.options.resolution*dt.height));this.cellScale.set(1/g,1/B),this.fboSize.set(g,B)}resize(){this.calcSize();for(const g in this.fbos)this.fbos[g].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let g=this.fbos.vel_1;this.options.isViscous&&(g=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:g});const B=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:g,pressure:B})}}class $t{simulation;scene;camera;output;constructor(){this.simulation=new re,this.scene=new y_,this.camera=new Tc,this.output=new ci(new mr(2,2),new hc({vertexShader:q,fragmentShader:xt,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new le},palette:{value:V},bgColor:{value:at}}})),this.scene.add(this.output)}resize(){this.simulation.resize()}render(){dt.renderer&&(dt.renderer.setRenderTarget(null),dt.renderer.render(this.scene,this.camera))}update(){this.simulation.update(),this.render()}}class zt{props;output;autoDriver;lastUserInteraction=performance.now();running=!1;_loop=this.loop.bind(this);_resize=this.resize.bind(this);_onVisibility;constructor(g){this.props=g,dt.init(g.$wrapper),L.init(g.$wrapper),L.autoIntensity=g.autoIntensity,L.takeoverDuration=g.takeoverDuration,L.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new K(L,this,{enabled:g.autoDemo,speed:g.autoSpeed,resumeDelay:g.autoResumeDelay,rampDuration:g.autoRampDuration}),this.init(),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():Q.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility)}init(){dt.renderer&&(this.props.$wrapper.prepend(dt.renderer.domElement),this.output=new $t)}resize(){dt.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),L.update(),dt.update(),this.output.update()}loop(){this.running&&(this.render(),H.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,H.current&&(cancelAnimationFrame(H.current),H.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),this._onVisibility&&document.removeEventListener("visibilitychange",this._onVisibility),L.dispose(),dt.renderer){const g=dt.renderer.domElement;g&&g.parentNode&&g.parentNode.removeChild(g),dt.renderer.dispose()}}catch{}}}const ye=P.current;ye.style.position=ye.style.position||"relative",ye.style.overflow=ye.style.overflow||"hidden";const Gt=new zt({$wrapper:ye,autoDemo:E,autoSpeed:A,autoIntensity:R,takeoverDuration:M,autoResumeDelay:v,autoRampDuration:F});U.current=Gt,(()=>{if(!U.current)return;const w=U.current.output?.simulation;if(!w)return;const g=w.options.resolution;Object.assign(w.options,{mouse_force:o,cursor_size:e,isViscous:i,viscous:r,iterations_viscous:l,iterations_poisson:u,dt:h,BFECC:d,resolution:m,isBounce:p}),m!==g&&w.resize()})(),Gt.start();const He=new IntersectionObserver(w=>{const g=w[0],B=g.isIntersecting&&g.intersectionRatio>0;Q.current=B,U.current&&(B&&!document.hidden?U.current.start():U.current.pause())},{threshold:[0,.01,.1]});He.observe(ye),G.current=He;const Ge=new ResizeObserver(()=>{U.current&&(D.current&&cancelAnimationFrame(D.current),D.current=requestAnimationFrame(()=>{U.current&&U.current.resize()}))});return Ge.observe(ye),I.current=Ge,()=>{if(H.current&&cancelAnimationFrame(H.current),I.current)try{I.current.disconnect()}catch{}if(G.current)try{G.current.disconnect()}catch{}U.current&&U.current.dispose(),U.current=null}},[d,e,h,p,i,u,l,o,m,r,_,E,A,R,M,v,F]),si.useEffect(()=>{const C=U.current;if(!C)return;const V=C.output?.simulation;if(!V)return;const at=V.options.resolution;Object.assign(V.options,{mouse_force:o,cursor_size:e,isViscous:i,viscous:r,iterations_viscous:l,iterations_poisson:u,dt:h,BFECC:d,resolution:m,isBounce:p}),C.autoDriver&&(C.autoDriver.enabled=E,C.autoDriver.speed=A,C.autoDriver.resumeDelay=v,C.autoDriver.rampDurationMs=F*1e3,C.autoDriver.mouse&&(C.autoDriver.mouse.autoIntensity=R,C.autoDriver.mouse.takeoverDuration=M)),m!==at&&V.resize()},[o,e,i,r,l,u,h,d,m,p,E,A,R,M,v,F]),X.jsx("div",{ref:P,className:`liquid-ether-container ${y||""}`,style:x})}const eA=[{title:"From Zero to Hero: A Complete Guide to Setting Up ELK Stack with Winlogbeat",desc:"A step-by-step tutorial for installing, configuring, and troubleshooting a full logging pipeline with Elasticsearch, Kibana, and Windows Event Logs.",img:"elk2.png",link:"https://medium.com/@wmostafa021/from-zero-to-hero-a-complete-guide-to-setting-up-elk-stack-with-winlogbeat-65d105050543"},{title:"From the SOC Trenches: Your Ultimate Guide to Analyzing Malicious Emails",desc:"From the SOC Trenches: Your Ultimate Guide to Analyzing Malicious Emails",img:"pish.png",link:"https://medium.com/@wmostafa021/from-the-soc-trenches-your-ultimate-guide-to-analyzing-malicious-emails-3ad4f4943086"},{title:"SOC Analyst’s New Superpower: How SOAR Tames the Chaos (Part 1)",desc:"A Beginner’s Guide to Security Orchestration, Automation, and Response",img:"soar.jpg",link:"https://medium.com/@wmostafa021/soc-analysts-new-superpower-how-soar-tames-the-chaos-part-1-c499dee7bd91"}],nA=[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Experience",href:"#experience"},{label:"Education",href:"#education"},{label:"Certifications",href:"#certifications"},{label:"Achievements",href:"#achievements"},{label:"Activities",href:"#activities"},{label:"Articles",href:"#articles"},{label:"Contact",href:"#contact"}],iA=["Cyber Operations","Endpoint Security","Network Security","IBM Security QRadar","SQL Injection Testing","Web Programming","Problem Solving","User Awareness"],aA=["Arabic (Native)","English (Business Proficiency)"];function rA(){const[o,e]=si.useState("home");si.useEffect(()=>{const r=()=>{const l=document.querySelectorAll("section[id]"),u=window.pageYOffset;l.forEach(h=>{const d=h.offsetHeight,m=h.offsetTop-100,p=h.getAttribute("id");p&&u>m&&u<=m+d&&e(p)})};return window.addEventListener("scroll",r),r(),()=>window.removeEventListener("scroll",r)},[]);const i=r=>{const l=r.replace("#",""),u=document.getElementById(l);u&&u.scrollIntoView({behavior:"smooth",block:"start"})};return X.jsxs("div",{className:"app",children:[X.jsx("div",{className:"background",children:X.jsx(tA,{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:20,cursorSize:100,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6})}),X.jsx("header",{className:"navbar",children:X.jsx("nav",{className:"nav-container",children:nA.map((r,l)=>X.jsx("button",{onClick:()=>i(r.href),className:`nav-item ${o===r.href.replace("#","")?"active":""}`,children:r.label},l))})}),X.jsx("section",{id:"home",className:"hero",children:X.jsxs("div",{className:"hero-content",children:[X.jsx("h1",{children:"Mostafa Elsaeed"}),X.jsx("p",{children:"Cybersecurity Engineer | SOC Engineer"}),X.jsxs("div",{className:"hero-subtitle",children:[X.jsx("span",{children:"Sheikh Zayed, Egypt"}),X.jsx("span",{children:"•"}),X.jsx("span",{children:"Galala University"})]}),X.jsxs("div",{className:"hero-buttons",children:[X.jsx("a",{href:"Mostafa Elsaeed Resume.pdf",download:!0,className:"button contact-purple",children:"Download CV"}),X.jsx("a",{href:"#contact",className:"button contact-white",children:"Get in Touch"})]})]})}),X.jsxs("section",{id:"about",className:"section about",children:[X.jsx("h2",{children:"About Me"}),X.jsxs("div",{className:"about-content",children:[X.jsx("div",{className:"about-profile",children:X.jsx("img",{src:"mo.jpg",alt:"Profile: Mostafa Elsaeed",className:"profile-img-card"})}),X.jsxs("div",{className:"about-text",children:[X.jsx("p",{children:"Motivated undergraduate Cybersecurity Engineer with hands-on experience in threat detection, incident response, and system hardening. Currently working as a SOC Analyst at WE INNOVATE and IT Specialist at Galala University, where I apply cutting-edge security practices to protect digital infrastructure."}),X.jsx("p",{children:"With a current GPA of 3.75 and multiple industry certifications including ISC2 Certified in Cybersecurity and HCIA-Security from Huawei, I am skilled in securing networks, analyzing vulnerabilities, and applying best practices to reduce risk. Passionate about defending digital systems and continuously improving security strategies in fast-paced environments."}),X.jsxs("div",{className:"contact-info",children:[X.jsxs("div",{className:"contact-item",children:[X.jsx("strong",{children:"Email:"})," wmostafa021@gmail.com"]}),X.jsxs("div",{className:"contact-item",children:[X.jsx("strong",{children:"Phone:"})," +20 1155566675"]}),X.jsxs("div",{className:"contact-item",children:[X.jsx("strong",{children:"Location:"})," Sheikh Zayed, GZ 41516, Egypt"]})]})]}),X.jsxs("div",{className:"about-cards-wrap",children:[X.jsx("h3",{children:"Technical Skills"}),X.jsx("div",{className:"cards-row",children:iA.map((r,l)=>X.jsx("div",{className:"skill-card",children:r},l))}),X.jsx("h3",{children:"Languages"}),X.jsx("div",{className:"cards-row",children:aA.map((r,l)=>X.jsx("div",{className:"language-card",children:r},l))})]})]})]}),X.jsxs("section",{id:"experience",className:"section",children:[X.jsx("h2",{children:"Work Experience"}),X.jsxs("div",{className:"timeline",children:[X.jsxs("div",{className:"timeline-item",children:[X.jsx("div",{className:"timeline-dot"}),X.jsxs("div",{className:"timeline-content",children:[X.jsx("h3",{children:"SOC Analyst"}),X.jsxs("div",{className:"job-info",children:[X.jsx("span",{className:"company",children:"WE INNOVATE"}),X.jsx("span",{className:"timeline-date",children:"July 2025 – Present"})]}),X.jsxs("ul",{children:[X.jsx("li",{children:"Engaged in core SOC Operations, including monitoring, analyzing, and responding to security incidents"}),X.jsx("li",{children:"Applied principles of SOC Engineering to optimize security tools and processes"}),X.jsx("li",{children:"Contributed to strengthening Network Security defenses and configurations"}),X.jsx("li",{children:"Participated in Incident Response activities, from initial detection to resolution"}),X.jsx("li",{children:"Utilized Threat Intelligence to identify emerging threats and vulnerabilities"}),X.jsx("li",{children:"Explored and implemented concepts of Automation, SOAR, OSINT, and other advanced security methodologies"})]})]})]}),X.jsxs("div",{className:"timeline-item",children:[X.jsx("div",{className:"timeline-dot"}),X.jsxs("div",{className:"timeline-content",children:[X.jsx("h3",{children:"IT Specialist"}),X.jsxs("div",{className:"job-info",children:[X.jsx("span",{className:"company",children:"Galala University"}),X.jsx("span",{className:"timeline-date",children:"July 2025 – Present"})]}),X.jsxs("ul",{children:[X.jsx("li",{children:"Ensured uninterrupted technical support for prospective university students during admissions"}),X.jsx("li",{children:"Managed and optimized Odoo accounts, delivering timely and effective email-based IT support"}),X.jsx("li",{children:"Participated in setup and maintenance of university laboratories and IT infrastructure projects"}),X.jsx("li",{children:"Gained practical experience with Cisco DNA, Forcepoint Next-Gen Firewall, and F5 systems"})]})]})]}),X.jsxs("div",{className:"timeline-item",children:[X.jsx("div",{className:"timeline-dot"}),X.jsxs("div",{className:"timeline-content",children:[X.jsx("h3",{children:"Cybersecurity Intern"}),X.jsxs("div",{className:"job-info",children:[X.jsx("span",{className:"company",children:"Telecom Egypt"}),X.jsx("span",{className:"timeline-date",children:"August 2024 – September 2024"})]}),X.jsxs("ul",{children:[X.jsx("li",{children:"Acquired practical experience with SIEM technology and log monitoring software, specifically QRadar"}),X.jsx("li",{children:"Explored various penetration testing tools and methodologies with diverse attack simulations"}),X.jsx("li",{children:"Gained foundational knowledge in CTI, Telecom security, Network security, GRC, and audit functions"})]})]})]}),X.jsxs("div",{className:"timeline-item",children:[X.jsx("div",{className:"timeline-dot"}),X.jsxs("div",{className:"timeline-content",children:[X.jsx("h3",{children:"Researcher"}),X.jsxs("div",{className:"job-info",children:[X.jsx("span",{className:"company",children:"ASTF"}),X.jsx("span",{className:"timeline-date",children:"May 2020 – June 2020"})]}),X.jsxs("ul",{children:[X.jsx("li",{children:"Collected and curated comprehensive data on technology companies for conference sponsorships"}),X.jsx("li",{children:"Prepared detailed documentation for all gathered data, ensuring accuracy and accessibility"})]})]})]})]})]}),X.jsxs("section",{id:"education",className:"section",children:[X.jsx("h2",{children:"Education"}),X.jsx("div",{className:"education-content",children:X.jsxs("div",{className:"card",children:[X.jsx("h3",{children:"Bachelor of Computer Engineering: CyberSecurity"}),X.jsxs("div",{className:"edu-info",children:[X.jsx("span",{className:"university",children:"Galala University, Galala, Egypt"}),X.jsx("span",{className:"date",children:"September 2022 – Expected July 2027"})]}),X.jsx("div",{className:"gpa",children:X.jsx("strong",{children:"Current GPA: 3.75"})}),X.jsx("p",{children:"Pursuing comprehensive education in cybersecurity engineering with focus on threat detection, network security, incident response, and digital forensics. Active involvement in research projects and practical applications of cybersecurity principles."})]})})]}),X.jsxs("section",{id:"certifications",className:"section",children:[X.jsx("h2",{children:"Certifications"}),X.jsxs("div",{className:"certifications-grid",children:[X.jsxs("div",{className:"cert-card",children:[X.jsx("h4",{children:"Certified in Cybersecurity (CC)"}),X.jsx("span",{className:"cert-provider",children:"ISC2"}),X.jsx("span",{className:"cert-date",children:"August 2024"})]}),X.jsxs("div",{className:"cert-card",children:[X.jsx("h4",{children:"HCIA-Security"}),X.jsx("span",{className:"cert-provider",children:"Huawei"}),X.jsx("span",{className:"cert-date",children:"December 2024"})]}),X.jsxs("div",{className:"cert-card",children:[X.jsx("h4",{children:"Cloud Security Foundations"}),X.jsx("span",{className:"cert-provider",children:"AWS Academy"}),X.jsx("span",{className:"cert-date",children:"August 2024"})]}),X.jsxs("div",{className:"cert-card",children:[X.jsx("h4",{children:"IBM Security QRadar Functions"}),X.jsx("span",{className:"cert-provider",children:"Pluralsight"}),X.jsx("span",{className:"cert-date",children:"August 2024"})]}),X.jsxs("div",{className:"cert-card",children:[X.jsx("h4",{children:"Monitor and Detect with QRadar"}),X.jsx("span",{className:"cert-provider",children:"Pluralsight"}),X.jsx("span",{className:"cert-date",children:"August 2024"})]}),X.jsxs("div",{className:"cert-card",children:[X.jsx("h4",{children:"Endpoint Security"}),X.jsx("span",{className:"cert-provider",children:"Cisco"}),X.jsx("span",{className:"cert-date",children:"April 2025"})]}),X.jsxs("div",{className:"cert-card",children:[X.jsx("h4",{children:"Networking Basics"}),X.jsx("span",{className:"cert-provider",children:"Cisco"}),X.jsx("span",{className:"cert-date",children:"July 2024"})]}),X.jsxs("div",{className:"cert-card",children:[X.jsx("h4",{children:"Connect and Protect: Networks"}),X.jsx("span",{className:"cert-provider",children:"Google"}),X.jsx("span",{className:"cert-date",children:"June 2025"})]})]})]}),X.jsxs("section",{id:"achievements",className:"section",children:[X.jsx("h2",{children:"Achievements"}),X.jsxs("div",{className:"achievements-list",children:[X.jsxs("div",{className:"achievement-card",children:[X.jsx("div",{className:"achievement-icon",children:"🏆"}),X.jsxs("div",{className:"achievement-content",children:[X.jsx("h4",{children:"Top 2 Ranking - Cyber and Informatics Security"}),X.jsx("p",{children:"Achieved Top 2 ranking in the Cyber and Informatics Security track at the Ebda3 13 Festival 2025"})]})]}),X.jsxs("div",{className:"achievement-card",children:[X.jsx("div",{className:"achievement-icon",children:"🌐"}),X.jsxs("div",{className:"achievement-content",children:[X.jsx("h4",{children:"Astra CyberSecurity Website Development"}),X.jsx("p",{children:'Collaborated effectively with a team of three in the successful development of the "Astra CyberSecurity Website"'})]})]}),X.jsxs("div",{className:"achievement-card",children:[X.jsx("div",{className:"achievement-icon",children:"📚"}),X.jsxs("div",{className:"achievement-content",children:[X.jsx("h4",{children:"Published Research Paper"}),X.jsx("p",{children:'Co-authored "Spectral Collocation Algorithm for the Fractional Bratu Equation via Hexic Shifted Chebyshev Polynomials" with four collaborators'})]})]})]})]}),X.jsxs("section",{id:"activities",className:"section",children:[X.jsx("h2",{children:"Extracurricular Activities"}),X.jsxs("div",{className:"activities-grid",children:[X.jsxs("div",{className:"activity-card",children:[X.jsx("h4",{children:"President of Astra Cybersecurity Club"}),X.jsx("span",{className:"activity-date",children:"2024 - Present"}),X.jsxs("ul",{children:[X.jsx("li",{children:"Led and mentored a team of 7 members, overseeing cybersecurity workshops and events"}),X.jsx("li",{children:"Developed educational content on network security, ethical hacking, and incident response"}),X.jsx("li",{children:"Organizing cybersecurity conferences at Galala University with other security clubs"})]})]}),X.jsxs("div",{className:"activity-card",children:[X.jsx("h4",{children:"Member of IEEE Club"}),X.jsx("span",{className:"activity-date",children:"2022 - Present"}),X.jsxs("ul",{children:[X.jsx("li",{children:"Attended and participated in various tech events hosted at different universities"}),X.jsx("li",{children:"Engaged with technology professionals and expanded technical knowledge"})]})]}),X.jsxs("div",{className:"activity-card",children:[X.jsx("h4",{children:"Volunteer at ASTF"}),X.jsx("span",{className:"activity-date",children:"May 2017 - May 2020"}),X.jsxs("ul",{children:[X.jsx("li",{children:"Helped organize various innovation conferences with smooth execution"}),X.jsx("li",{children:"Contributed to impactful outcomes in technology and innovation events"})]})]}),X.jsxs("div",{className:"activity-card",children:[X.jsx("h4",{children:"ICT 2024 Participant"}),X.jsx("span",{className:"activity-date",children:"2024"}),X.jsxs("ul",{children:[X.jsx("li",{children:"Attended security talks by leading experts from top security companies"}),X.jsx("li",{children:"Engaged in discussions on emerging cybersecurity technologies"})]})]})]})]}),X.jsxs("section",{id:"articles",className:"section",children:[X.jsx("h2",{children:"Articles"}),X.jsx("div",{className:"articles-grid",children:eA.map((r,l)=>X.jsxs("a",{className:"article-card",href:r.link,target:"_blank",rel:"noopener noreferrer",children:[r.img&&X.jsx("img",{className:"article-img",src:r.img,alt:r.title}),X.jsx("div",{className:"article-title",children:r.title}),X.jsx("div",{className:"article-desc",children:r.desc})]},l))})]}),X.jsxs("section",{id:"contact",className:"section",children:[X.jsx("h2",{children:"Contact Me"}),X.jsxs("div",{className:"contact-content",children:[X.jsx("p",{children:"Looking for opportunities in Cybersecurity and Network Management. Let's connect and discuss how I can contribute to your organization's security posture."}),X.jsxs("div",{className:"contact-buttons",children:[X.jsx("a",{href:"mailto:wmostafa021@gmail.com",className:"button contact-purple",children:"Email Me"}),X.jsx("a",{href:"https://www.linkedin.com/in/mostafa-elsaeed-eg/",target:"_blank",rel:"noopener noreferrer",className:"button contact-white",children:"LinkedIn"}),X.jsx("a",{href:"tel:+201155566675",className:"button contact-purple",children:"Call Me"})]})]})]})]})}Vx.createRoot(document.getElementById("root")).render(X.jsx(Ox.StrictMode,{children:X.jsx(rA,{})}));
