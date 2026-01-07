(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function I_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var $f={exports:{}},Ao={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv;function Fy(){if(yv)return Ao;yv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Ao.Fragment=e,Ao.jsx=i,Ao.jsxs=i,Ao}var Sv;function Hy(){return Sv||(Sv=1,$f.exports=Fy()),$f.exports}var z=Hy(),eh={exports:{}},ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv;function Gy(){if(Mv)return ft;Mv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function y(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,A={};function S(L,ee,ye){this.props=L,this.context=ee,this.refs=A,this.updater=ye||E}S.prototype.isReactComponent={},S.prototype.setState=function(L,ee){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,ee,"setState")},S.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _(){}_.prototype=S.prototype;function O(L,ee,ye){this.props=L,this.context=ee,this.refs=A,this.updater=ye||E}var N=O.prototype=new _;N.constructor=O,b(N,S.prototype),N.isPureReactComponent=!0;var U=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function V(L,ee,ye,Me,Ne,Ge){return ye=Ge.ref,{$$typeof:s,type:L,key:ee,ref:ye!==void 0?ye:null,props:Ge}}function Z(L,ee){return V(L.type,ee,void 0,void 0,void 0,L.props)}function C(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function w(L){var ee={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ye){return ee[ye]})}var k=/\/+/g;function ae(L,ee){return typeof L=="object"&&L!==null&&L.key!=null?w(""+L.key):ee.toString(36)}function de(){}function pe(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(de,de):(L.status="pending",L.then(function(ee){L.status==="pending"&&(L.status="fulfilled",L.value=ee)},function(ee){L.status==="pending"&&(L.status="rejected",L.reason=ee)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function fe(L,ee,ye,Me,Ne){var Ge=typeof L;(Ge==="undefined"||Ge==="boolean")&&(L=null);var ne=!1;if(L===null)ne=!0;else switch(Ge){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(L.$$typeof){case s:case e:ne=!0;break;case g:return ne=L._init,fe(ne(L._payload),ee,ye,Me,Ne)}}if(ne)return Ne=Ne(L),ne=Me===""?"."+ae(L,0):Me,U(Ne)?(ye="",ne!=null&&(ye=ne.replace(k,"$&/")+"/"),fe(Ne,ee,ye,"",function(Ke){return Ke})):Ne!=null&&(C(Ne)&&(Ne=Z(Ne,ye+(Ne.key==null||L&&L.key===Ne.key?"":(""+Ne.key).replace(k,"$&/")+"/")+ne)),ee.push(Ne)),1;ne=0;var ve=Me===""?".":Me+":";if(U(L))for(var be=0;be<L.length;be++)Me=L[be],Ge=ve+ae(Me,be),ne+=fe(Me,ee,ye,Ge,Ne);else if(be=y(L),typeof be=="function")for(L=be.call(L),be=0;!(Me=L.next()).done;)Me=Me.value,Ge=ve+ae(Me,be++),ne+=fe(Me,ee,ye,Ge,Ne);else if(Ge==="object"){if(typeof L.then=="function")return fe(pe(L),ee,ye,Me,Ne);throw ee=String(L),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return ne}function P(L,ee,ye){if(L==null)return L;var Me=[],Ne=0;return fe(L,Me,"","",function(Ge){return ee.call(ye,Ge,Ne++)}),Me}function Q(L){if(L._status===-1){var ee=L._result;ee=ee(),ee.then(function(ye){(L._status===0||L._status===-1)&&(L._status=1,L._result=ye)},function(ye){(L._status===0||L._status===-1)&&(L._status=2,L._result=ye)}),L._status===-1&&(L._status=0,L._result=ee)}if(L._status===1)return L._result.default;throw L._result}var j=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Se(){}return ft.Children={map:P,forEach:function(L,ee,ye){P(L,function(){ee.apply(this,arguments)},ye)},count:function(L){var ee=0;return P(L,function(){ee++}),ee},toArray:function(L){return P(L,function(ee){return ee})||[]},only:function(L){if(!C(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},ft.Component=S,ft.Fragment=i,ft.Profiler=l,ft.PureComponent=O,ft.StrictMode=r,ft.Suspense=m,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ft.__COMPILER_RUNTIME={__proto__:null,c:function(L){return I.H.useMemoCache(L)}},ft.cache=function(L){return function(){return L.apply(null,arguments)}},ft.cloneElement=function(L,ee,ye){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Me=b({},L.props),Ne=L.key,Ge=void 0;if(ee!=null)for(ne in ee.ref!==void 0&&(Ge=void 0),ee.key!==void 0&&(Ne=""+ee.key),ee)!G.call(ee,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&ee.ref===void 0||(Me[ne]=ee[ne]);var ne=arguments.length-2;if(ne===1)Me.children=ye;else if(1<ne){for(var ve=Array(ne),be=0;be<ne;be++)ve[be]=arguments[be+2];Me.children=ve}return V(L.type,Ne,void 0,void 0,Ge,Me)},ft.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},ft.createElement=function(L,ee,ye){var Me,Ne={},Ge=null;if(ee!=null)for(Me in ee.key!==void 0&&(Ge=""+ee.key),ee)G.call(ee,Me)&&Me!=="key"&&Me!=="__self"&&Me!=="__source"&&(Ne[Me]=ee[Me]);var ne=arguments.length-2;if(ne===1)Ne.children=ye;else if(1<ne){for(var ve=Array(ne),be=0;be<ne;be++)ve[be]=arguments[be+2];Ne.children=ve}if(L&&L.defaultProps)for(Me in ne=L.defaultProps,ne)Ne[Me]===void 0&&(Ne[Me]=ne[Me]);return V(L,Ge,void 0,void 0,null,Ne)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(L){return{$$typeof:d,render:L}},ft.isValidElement=C,ft.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:Q}},ft.memo=function(L,ee){return{$$typeof:p,type:L,compare:ee===void 0?null:ee}},ft.startTransition=function(L){var ee=I.T,ye={};I.T=ye;try{var Me=L(),Ne=I.S;Ne!==null&&Ne(ye,Me),typeof Me=="object"&&Me!==null&&typeof Me.then=="function"&&Me.then(Se,j)}catch(Ge){j(Ge)}finally{I.T=ee}},ft.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ft.use=function(L){return I.H.use(L)},ft.useActionState=function(L,ee,ye){return I.H.useActionState(L,ee,ye)},ft.useCallback=function(L,ee){return I.H.useCallback(L,ee)},ft.useContext=function(L){return I.H.useContext(L)},ft.useDebugValue=function(){},ft.useDeferredValue=function(L,ee){return I.H.useDeferredValue(L,ee)},ft.useEffect=function(L,ee,ye){var Me=I.H;if(typeof ye=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Me.useEffect(L,ee)},ft.useId=function(){return I.H.useId()},ft.useImperativeHandle=function(L,ee,ye){return I.H.useImperativeHandle(L,ee,ye)},ft.useInsertionEffect=function(L,ee){return I.H.useInsertionEffect(L,ee)},ft.useLayoutEffect=function(L,ee){return I.H.useLayoutEffect(L,ee)},ft.useMemo=function(L,ee){return I.H.useMemo(L,ee)},ft.useOptimistic=function(L,ee){return I.H.useOptimistic(L,ee)},ft.useReducer=function(L,ee,ye){return I.H.useReducer(L,ee,ye)},ft.useRef=function(L){return I.H.useRef(L)},ft.useState=function(L){return I.H.useState(L)},ft.useSyncExternalStore=function(L,ee,ye){return I.H.useSyncExternalStore(L,ee,ye)},ft.useTransition=function(){return I.H.useTransition()},ft.version="19.1.1",ft}var Ev;function Nd(){return Ev||(Ev=1,eh.exports=Gy()),eh.exports}var he=Nd();const Vy=I_(he);var th={exports:{}},Ro={},nh={exports:{}},ih={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bv;function ky(){return bv||(bv=1,(function(s){function e(P,Q){var j=P.length;P.push(Q);e:for(;0<j;){var Se=j-1>>>1,L=P[Se];if(0<l(L,Q))P[Se]=Q,P[j]=L,j=Se;else break e}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var Q=P[0],j=P.pop();if(j!==Q){P[0]=j;e:for(var Se=0,L=P.length,ee=L>>>1;Se<ee;){var ye=2*(Se+1)-1,Me=P[ye],Ne=ye+1,Ge=P[Ne];if(0>l(Me,j))Ne<L&&0>l(Ge,Me)?(P[Se]=Ge,P[Ne]=j,Se=Ne):(P[Se]=Me,P[ye]=j,Se=ye);else if(Ne<L&&0>l(Ge,j))P[Se]=Ge,P[Ne]=j,Se=Ne;else break e}}return Q}function l(P,Q){var j=P.sortIndex-Q.sortIndex;return j!==0?j:P.id-Q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,v=null,y=3,E=!1,b=!1,A=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(P){for(var Q=i(p);Q!==null;){if(Q.callback===null)r(p);else if(Q.startTime<=P)r(p),Q.sortIndex=Q.expirationTime,e(m,Q);else break;Q=i(p)}}function I(P){if(A=!1,U(P),!b)if(i(m)!==null)b=!0,G||(G=!0,ae());else{var Q=i(p);Q!==null&&fe(I,Q.startTime-P)}}var G=!1,V=-1,Z=5,C=-1;function w(){return S?!0:!(s.unstable_now()-C<Z)}function k(){if(S=!1,G){var P=s.unstable_now();C=P;var Q=!0;try{e:{b=!1,A&&(A=!1,O(V),V=-1),E=!0;var j=y;try{t:{for(U(P),v=i(m);v!==null&&!(v.expirationTime>P&&w());){var Se=v.callback;if(typeof Se=="function"){v.callback=null,y=v.priorityLevel;var L=Se(v.expirationTime<=P);if(P=s.unstable_now(),typeof L=="function"){v.callback=L,U(P),Q=!0;break t}v===i(m)&&r(m),U(P)}else r(m);v=i(m)}if(v!==null)Q=!0;else{var ee=i(p);ee!==null&&fe(I,ee.startTime-P),Q=!1}}break e}finally{v=null,y=j,E=!1}Q=void 0}}finally{Q?ae():G=!1}}}var ae;if(typeof N=="function")ae=function(){N(k)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,pe=de.port2;de.port1.onmessage=k,ae=function(){pe.postMessage(null)}}else ae=function(){_(k,0)};function fe(P,Q){V=_(function(){P(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_next=function(P){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var j=y;y=Q;try{return P()}finally{y=j}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(P,Q){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var j=y;y=P;try{return Q()}finally{y=j}},s.unstable_scheduleCallback=function(P,Q,j){var Se=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Se+j:Se):j=Se,P){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=j+L,P={id:g++,callback:Q,priorityLevel:P,startTime:j,expirationTime:L,sortIndex:-1},j>Se?(P.sortIndex=j,e(p,P),i(m)===null&&P===i(p)&&(A?(O(V),V=-1):A=!0,fe(I,j-Se))):(P.sortIndex=L,e(m,P),b||E||(b=!0,G||(G=!0,ae()))),P},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(P){var Q=y;return function(){var j=y;y=Q;try{return P.apply(this,arguments)}finally{y=j}}}})(ih)),ih}var Tv;function Xy(){return Tv||(Tv=1,nh.exports=ky()),nh.exports}var ah={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av;function Wy(){if(Av)return Rn;Av=1;var s=Nd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},Rn.flushSync=function(m){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=g,r.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:E}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:y,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Rn.requestFormReset=function(m){r.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Rn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Rn.version="19.1.1",Rn}var Rv;function B_(){if(Rv)return ah.exports;Rv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ah.exports=Wy(),ah.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wv;function jy(){if(wv)return Ro;wv=1;var s=Xy(),e=Nd(),i=B_();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(c(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return d(u),t;if(h===o)return d(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=h;else{for(var M=!1,T=u.child;T;){if(T===a){M=!0,a=u,o=h;break}if(T===o){M=!0,o=u,a=h;break}T=T.sibling}if(!M){for(T=h.child;T;){if(T===a){M=!0,a=h,o=u;break}if(T===o){M=!0,o=h,a=u;break}T=T.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var de=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===de?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case S:return"Profiler";case A:return"StrictMode";case I:return"Suspense";case G:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case N:return(t.displayName||"Context")+".Provider";case O:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case V:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var fe=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},Se=[],L=-1;function ee(t){return{current:t}}function ye(t){0>L||(t.current=Se[L],Se[L]=null,L--)}function Me(t,n){L++,Se[L]=t.current,t.current=n}var Ne=ee(null),Ge=ee(null),ne=ee(null),ve=ee(null);function be(t,n){switch(Me(ne,n),Me(Ge,t),Me(Ne,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Yg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Yg(n),t=Zg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ye(Ne),Me(Ne,t)}function Ke(){ye(Ne),ye(Ge),ye(ne)}function qe(t){t.memoizedState!==null&&Me(ve,t);var n=Ne.current,a=Zg(n,t.type);n!==a&&(Me(Ge,t),Me(Ne,a))}function ut(t){Ge.current===t&&(ye(Ne),ye(Ge)),ve.current===t&&(ye(ve),So._currentValue=j)}var Zt=Object.prototype.hasOwnProperty,F=s.unstable_scheduleCallback,Dt=s.unstable_cancelCallback,st=s.unstable_shouldYield,et=s.unstable_requestPaint,Be=s.unstable_now,Mt=s.unstable_getCurrentPriorityLevel,Ve=s.unstable_ImmediatePriority,ot=s.unstable_UserBlockingPriority,Gt=s.unstable_NormalPriority,Vt=s.unstable_LowPriority,D=s.unstable_IdlePriority,x=s.log,H=s.unstable_setDisableYieldValue,J=null,ce=null;function ie(t){if(typeof x=="function"&&H(t),ce&&typeof ce.setStrictMode=="function")try{ce.setStrictMode(J,t)}catch{}}var Re=Math.clz32?Math.clz32:ke,we=Math.log,ze=Math.LN2;function ke(t){return t>>>=0,t===0?32:31-(we(t)/ze|0)|0}var Ee=256,Ue=4194304;function Qe(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function je(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~h,o!==0?u=Qe(o):(M&=T,M!==0?u=Qe(M):a||(a=T&~t,a!==0&&(u=Qe(a))))):(T=o&~h,T!==0?u=Qe(T):M!==0?u=Qe(M):a||(a=o&~t,a!==0&&(u=Qe(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Le(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function lt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var t=Ee;return Ee<<=1,(Ee&4194048)===0&&(Ee=256),t}function Ce(){var t=Ue;return Ue<<=1,(Ue&62914560)===0&&(Ue=4194304),t}function De(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Fe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Te(t,n,a,o,u,h){var M=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,te=t.hiddenUpdates;for(a=M&~a;0<a;){var me=31-Re(a),_e=1<<me;T[me]=0,B[me]=-1;var re=te[me];if(re!==null)for(te[me]=null,me=0;me<re.length;me++){var se=re[me];se!==null&&(se.lane&=-536870913)}a&=~_e}o!==0&&xe(t,o,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(M&~n))}function xe(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Re(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function We(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Re(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function rt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ut(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bt(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:pv(t.type))}function hi(t,n){var a=Q.p;try{return Q.p=t,n()}finally{Q.p=a}}var cn=Math.random().toString(36).slice(2),un="__reactFiber$"+cn,Kt="__reactProps$"+cn,Ti="__reactContainer$"+cn,br="__reactEvents$"+cn,Qo="__reactListeners$"+cn,Tr="__reactHandles$"+cn,Ls="__reactResources$"+cn,Ai="__reactMarker$"+cn;function Ar(t){delete t[un],delete t[Kt],delete t[br],delete t[Qo],delete t[Tr]}function Ii(t){var n=t[un];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ti]||a[un]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=$g(t);t!==null;){if(a=t[un])return a;t=$g(t)}return n}t=a,a=t.parentNode}return null}function ha(t){if(t=t[un]||t[Ti]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function qa(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function da(t){var n=t[Ls];return n||(n=t[Ls]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function an(t){t[Ai]=!0}var Jo=new Set,$o={};function R(t,n){q(t,n),q(t+"Capture",n)}function q(t,n){for($o[t]=n,t=0;t<n.length;t++)Jo.add(n[t])}var le=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ue={},K={};function Ae(t){return Zt.call(K,t)?!0:Zt.call(ue,t)?!1:le.test(t)?K[t]=!0:(ue[t]=!0,!1)}function Oe(t,n,a){if(Ae(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function He(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Pe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var $e,nt;function Ye(t){if($e===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$e=n&&n[1]||"",nt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+t+nt}var dt=!1;function Tt(t,n){if(!t||dt)return"";dt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(se){var re=se}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(se){re=se}t.call(_e.prototype)}}else{try{throw Error()}catch(se){re=se}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(se){if(se&&re&&typeof se.stack=="string")return[se.stack,re.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),M=h[0],T=h[1];if(M&&T){var B=M.split(`
`),te=T.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===te.length)for(o=B.length-1,u=te.length-1;1<=o&&0<=u&&B[o]!==te[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==te[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==te[u]){var me=`
`+B[o].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=o&&0<=u);break}}}finally{dt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ye(a):""}function Wt(t){switch(t.tag){case 26:case 27:case 5:return Ye(t.type);case 16:return Ye("Lazy");case 13:return Ye("Suspense");case 19:return Ye("SuspenseList");case 0:case 15:return Tt(t.type,!1);case 11:return Tt(t.type.render,!1);case 1:return Tt(t.type,!0);case 31:return Ye("Activity");default:return""}}function Ot(t){try{var n="";do n+=Wt(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function pt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Je(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Xt(t){var n=Je(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,h.call(this,M)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function _t(t){t._valueTracker||(t._valueTracker=Xt(t))}function bn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Je(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function di(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Dn=/[\n"\\]/g;function mn(t){return t.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ft(t,n,a,o,u,h,M,T){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),n!=null?M==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+pt(n)):t.value!==""+pt(n)&&(t.value=""+pt(n)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),n!=null?Tn(t,M,pt(n)):a!=null?Tn(t,M,pt(a)):o!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+pt(T):t.removeAttribute("name")}function Un(t,n,a,o,u,h,M,T){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+pt(a):"",n=n!=null?""+pt(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M)}function Tn(t,n,a){n==="number"&&di(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Qt(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+pt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function yn(t,n,a){if(n!=null&&(n=""+pt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+pt(a):""}function Rr(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(fe(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=pt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function Pn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var I0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yd(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||I0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Zd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Yd(t,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Yd(t,h,n[h])}function Qc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var B0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),z0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function el(t){return z0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Jc=null;function $c(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wr=null,Cr=null;function Kd(t){var n=ha(t);if(n&&(t=n.stateNode)){var a=t[Kt]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ft(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Kt]||null;if(!u)throw Error(r(90));Ft(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&bn(o)}break e;case"textarea":yn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Qt(t,!!a.multiple,n,!1)}}}var eu=!1;function Qd(t,n,a){if(eu)return t(n,a);eu=!0;try{var o=t(n);return o}finally{if(eu=!1,(wr!==null||Cr!==null)&&(Fl(),wr&&(n=wr,t=Cr,Cr=wr=null,Kd(n),t)))for(n=0;n<t.length;n++)Kd(t[n])}}function Ns(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Kt]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tu=!1;if(Bi)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){tu=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{tu=!1}var pa=null,nu=null,tl=null;function Jd(){if(tl)return tl;var t,n=nu,a=n.length,o,u="value"in pa?pa.value:pa.textContent,h=u.length;for(t=0;t<a&&n[t]===u[t];t++);var M=a-t;for(o=1;o<=M&&n[a-o]===u[h-o];o++);return tl=u.slice(t,1<o?1-o:void 0)}function nl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function il(){return!0}function $d(){return!1}function In(t){function n(a,o,u,h,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(h):h[T]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?il:$d,this.isPropagationStopped=$d,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),n}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=In(Ya),Ps=g({},Ya,{view:0,detail:0}),F0=In(Ps),iu,au,Is,rl=g({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(iu=t.screenX-Is.screenX,au=t.screenY-Is.screenY):au=iu=0,Is=t),iu)},movementY:function(t){return"movementY"in t?t.movementY:au}}),ep=In(rl),H0=g({},rl,{dataTransfer:0}),G0=In(H0),V0=g({},Ps,{relatedTarget:0}),ru=In(V0),k0=g({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),X0=In(k0),W0=g({},Ya,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),j0=In(W0),q0=g({},Ya,{data:0}),tp=In(q0),Y0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=K0[t])?!!n[t]:!1}function su(){return Q0}var J0=g({},Ps,{key:function(t){if(t.key){var n=Y0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Z0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(t){return t.type==="keypress"?nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$0=In(J0),ex=g({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),np=In(ex),tx=g({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),nx=In(tx),ix=g({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),ax=In(ix),rx=g({},rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sx=In(rx),ox=g({},Ya,{newState:0,oldState:0}),lx=In(ox),cx=[9,13,27,32],ou=Bi&&"CompositionEvent"in window,Bs=null;Bi&&"documentMode"in document&&(Bs=document.documentMode);var ux=Bi&&"TextEvent"in window&&!Bs,ip=Bi&&(!ou||Bs&&8<Bs&&11>=Bs),ap=" ",rp=!1;function sp(t,n){switch(t){case"keyup":return cx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function op(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Dr=!1;function fx(t,n){switch(t){case"compositionend":return op(n);case"keypress":return n.which!==32?null:(rp=!0,ap);case"textInput":return t=n.data,t===ap&&rp?null:t;default:return null}}function hx(t,n){if(Dr)return t==="compositionend"||!ou&&sp(t,n)?(t=Jd(),tl=nu=pa=null,Dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ip&&n.locale!=="ko"?null:n.data;default:return null}}var dx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!dx[t.type]:n==="textarea"}function cp(t,n,a,o){wr?Cr?Cr.push(o):Cr=[o]:wr=o,n=Wl(n,"onChange"),0<n.length&&(a=new al("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var zs=null,Fs=null;function px(t){kg(t,0)}function sl(t){var n=qa(t);if(bn(n))return t}function up(t,n){if(t==="change")return n}var fp=!1;if(Bi){var lu;if(Bi){var cu="oninput"in document;if(!cu){var hp=document.createElement("div");hp.setAttribute("oninput","return;"),cu=typeof hp.oninput=="function"}lu=cu}else lu=!1;fp=lu&&(!document.documentMode||9<document.documentMode)}function dp(){zs&&(zs.detachEvent("onpropertychange",pp),Fs=zs=null)}function pp(t){if(t.propertyName==="value"&&sl(Fs)){var n=[];cp(n,Fs,t,$c(t)),Qd(px,n)}}function mx(t,n,a){t==="focusin"?(dp(),zs=n,Fs=a,zs.attachEvent("onpropertychange",pp)):t==="focusout"&&dp()}function gx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sl(Fs)}function vx(t,n){if(t==="click")return sl(n)}function _x(t,n){if(t==="input"||t==="change")return sl(n)}function xx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xn=typeof Object.is=="function"?Object.is:xx;function Hs(t,n){if(Xn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Zt.call(n,u)||!Xn(t[u],n[u]))return!1}return!0}function mp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gp(t,n){var a=mp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=mp(a)}}function vp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?vp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function _p(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=di(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=di(t.document)}return n}function uu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var yx=Bi&&"documentMode"in document&&11>=document.documentMode,Ur=null,fu=null,Gs=null,hu=!1;function xp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hu||Ur==null||Ur!==di(o)||(o=Ur,"selectionStart"in o&&uu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Gs&&Hs(Gs,o)||(Gs=o,o=Wl(fu,"onSelect"),0<o.length&&(n=new al("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Ur)))}function Za(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Lr={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionrun:Za("Transition","TransitionRun"),transitionstart:Za("Transition","TransitionStart"),transitioncancel:Za("Transition","TransitionCancel"),transitionend:Za("Transition","TransitionEnd")},du={},yp={};Bi&&(yp=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function Ka(t){if(du[t])return du[t];if(!Lr[t])return t;var n=Lr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in yp)return du[t]=n[a];return t}var Sp=Ka("animationend"),Mp=Ka("animationiteration"),Ep=Ka("animationstart"),Sx=Ka("transitionrun"),Mx=Ka("transitionstart"),Ex=Ka("transitioncancel"),bp=Ka("transitionend"),Tp=new Map,pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pu.push("scrollEnd");function pi(t,n){Tp.set(t,n),R(n,[t])}var Ap=new WeakMap;function ei(t,n){if(typeof t=="object"&&t!==null){var a=Ap.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ot(n)},Ap.set(t,n),n)}return{value:t,source:n,stack:Ot(n)}}var ti=[],Nr=0,mu=0;function ol(){for(var t=Nr,n=mu=Nr=0;n<t;){var a=ti[n];ti[n++]=null;var o=ti[n];ti[n++]=null;var u=ti[n];ti[n++]=null;var h=ti[n];if(ti[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}h!==0&&Rp(a,u,h)}}function ll(t,n,a,o){ti[Nr++]=t,ti[Nr++]=n,ti[Nr++]=a,ti[Nr++]=o,mu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function gu(t,n,a,o){return ll(t,n,a,o),cl(t)}function Or(t,n){return ll(t,null,null,n),cl(t)}function Rp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=t.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&n!==null&&(u=31-Re(a),t=h.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function cl(t){if(50<ho)throw ho=0,Ef=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Pr={};function bx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,o){return new bx(t,n,a,o)}function vu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zi(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function wp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ul(t,n,a,o,u,h){var M=0;if(o=t,typeof t=="function")vu(t)&&(M=1);else if(typeof t=="string")M=Ay(t,a,Ne.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=Wn(31,a,n,u),t.elementType=C,t.lanes=h,t;case b:return Qa(a.children,u,h,n);case A:M=8,u|=24;break;case S:return t=Wn(12,a,n,u|2),t.elementType=S,t.lanes=h,t;case I:return t=Wn(13,a,n,u),t.elementType=I,t.lanes=h,t;case G:return t=Wn(19,a,n,u),t.elementType=G,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case N:M=10;break e;case O:M=9;break e;case U:M=11;break e;case V:M=14;break e;case Z:M=16,o=null;break e}M=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Wn(M,a,n,u),n.elementType=t,n.type=o,n.lanes=h,n}function Qa(t,n,a,o){return t=Wn(7,t,o,n),t.lanes=a,t}function _u(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function xu(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ir=[],Br=0,fl=null,hl=0,ni=[],ii=0,Ja=null,Fi=1,Hi="";function $a(t,n){Ir[Br++]=hl,Ir[Br++]=fl,fl=t,hl=n}function Cp(t,n,a){ni[ii++]=Fi,ni[ii++]=Hi,ni[ii++]=Ja,Ja=t;var o=Fi;t=Hi;var u=32-Re(o)-1;o&=~(1<<u),a+=1;var h=32-Re(n)+u;if(30<h){var M=u-u%5;h=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Fi=1<<32-Re(n)+u|a<<u|o,Hi=h+t}else Fi=1<<h|a<<u|o,Hi=t}function yu(t){t.return!==null&&($a(t,1),Cp(t,1,0))}function Su(t){for(;t===fl;)fl=Ir[--Br],Ir[Br]=null,hl=Ir[--Br],Ir[Br]=null;for(;t===Ja;)Ja=ni[--ii],ni[ii]=null,Hi=ni[--ii],ni[ii]=null,Fi=ni[--ii],ni[ii]=null}var Ln=null,Jt=null,wt=!1,er=null,Ri=!1,Mu=Error(r(519));function tr(t){var n=Error(r(418,""));throw Xs(ei(n,t)),Mu}function Dp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[un]=t,n[Kt]=o,a){case"dialog":yt("cancel",n),yt("close",n);break;case"iframe":case"object":case"embed":yt("load",n);break;case"video":case"audio":for(a=0;a<mo.length;a++)yt(mo[a],n);break;case"source":yt("error",n);break;case"img":case"image":case"link":yt("error",n),yt("load",n);break;case"details":yt("toggle",n);break;case"input":yt("invalid",n),Un(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),_t(n);break;case"select":yt("invalid",n);break;case"textarea":yt("invalid",n),Rr(n,o.value,o.defaultValue,o.children),_t(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||qg(n.textContent,a)?(o.popover!=null&&(yt("beforetoggle",n),yt("toggle",n)),o.onScroll!=null&&yt("scroll",n),o.onScrollEnd!=null&&yt("scrollend",n),o.onClick!=null&&(n.onclick=jl),n=!0):n=!1,n||tr(t)}function Up(t){for(Ln=t.return;Ln;)switch(Ln.tag){case 5:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:Ln=Ln.return}}function Vs(t){if(t!==Ln)return!1;if(!wt)return Up(t),wt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Ff(t.type,t.memoizedProps)),a=!a),a&&Jt&&tr(t),Up(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Jt=gi(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Jt=null}}else n===27?(n=Jt,Da(t.type)?(t=kf,kf=null,Jt=t):Jt=n):Jt=Ln?gi(t.stateNode.nextSibling):null;return!0}function ks(){Jt=Ln=null,wt=!1}function Lp(){var t=er;return t!==null&&(Fn===null?Fn=t:Fn.push.apply(Fn,t),er=null),t}function Xs(t){er===null?er=[t]:er.push(t)}var Eu=ee(null),nr=null,Gi=null;function ma(t,n,a){Me(Eu,n._currentValue),n._currentValue=a}function Vi(t){t._currentValue=Eu.current,ye(Eu)}function bu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Tu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var M=u.child;h=h.firstContext;e:for(;h!==null;){var T=h;h=u;for(var B=0;B<n.length;B++)if(T.context===n[B]){h.lanes|=a,T=h.alternate,T!==null&&(T.lanes|=a),bu(h.return,a,t),o||(M=null);break e}h=T.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(r(341));M.lanes|=a,h=M.alternate,h!==null&&(h.lanes|=a),bu(M,a,t),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===t){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Ws(t,n,a,o){t=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var T=u.type;Xn(u.pendingProps.value,M.value)||(t!==null?t.push(T):t=[T])}}else if(u===ve.current){if(M=u.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(So):t=[So])}u=u.return}t!==null&&Tu(n,t,a,o),n.flags|=262144}function dl(t){for(t=t.firstContext;t!==null;){if(!Xn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ir(t){nr=t,Gi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Np(nr,t)}function pl(t,n){return nr===null&&ir(t),Np(t,n)}function Np(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(t===null)throw Error(r(308));Gi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Gi=Gi.next=n;return a}var Tx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Ax=s.unstable_scheduleCallback,Rx=s.unstable_NormalPriority,fn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Au(){return{controller:new Tx,data:new Map,refCount:0}}function js(t){t.refCount--,t.refCount===0&&Ax(Rx,function(){t.controller.abort()})}var qs=null,Ru=0,zr=0,Fr=null;function wx(t,n){if(qs===null){var a=qs=[];Ru=0,zr=Df(),Fr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ru++,n.then(Op,Op),n}function Op(){if(--Ru===0&&qs!==null){Fr!==null&&(Fr.status="fulfilled");var t=qs;qs=null,zr=0,Fr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Cx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Pp=P.S;P.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&wx(t,n),Pp!==null&&Pp(t,n)};var ar=ee(null);function wu(){var t=ar.current;return t!==null?t:kt.pooledCache}function ml(t,n){n===null?Me(ar,ar.current):Me(ar,n.pool)}function Ip(){var t=wu();return t===null?null:{parent:fn._currentValue,pool:t}}var Ys=Error(r(460)),Bp=Error(r(474)),gl=Error(r(542)),Cu={then:function(){}};function zp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function vl(){}function Fp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(vl,vl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Gp(t),t;default:if(typeof n.status=="string")n.then(vl,vl);else{if(t=kt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Gp(t),t}throw Zs=n,Ys}}var Zs=null;function Hp(){if(Zs===null)throw Error(r(459));var t=Zs;return Zs=null,t}function Gp(t){if(t===Ys||t===gl)throw Error(r(483))}var ga=!1;function Du(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function _a(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Lt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=cl(t),Rp(t,null,a),n}return ll(t,o,n,a),cl(t)}function Ks(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,We(t,a)}}function Lu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=M:h=h.next=M,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Nu=!1;function Qs(){if(Nu){var t=Fr;if(t!==null)throw t}}function Js(t,n,a,o){Nu=!1;var u=t.updateQueue;ga=!1;var h=u.firstBaseUpdate,M=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var B=T,te=B.next;B.next=null,M===null?h=te:M.next=te,M=B;var me=t.alternate;me!==null&&(me=me.updateQueue,T=me.lastBaseUpdate,T!==M&&(T===null?me.firstBaseUpdate=te:T.next=te,me.lastBaseUpdate=B))}if(h!==null){var _e=u.baseState;M=0,me=te=B=null,T=h;do{var re=T.lane&-536870913,se=re!==T.lane;if(se?(Et&re)===re:(o&re)===re){re!==0&&re===zr&&(Nu=!0),me!==null&&(me=me.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var at=t,tt=T;re=n;var Bt=a;switch(tt.tag){case 1:if(at=tt.payload,typeof at=="function"){_e=at.call(Bt,_e,re);break e}_e=at;break e;case 3:at.flags=at.flags&-65537|128;case 0:if(at=tt.payload,re=typeof at=="function"?at.call(Bt,_e,re):at,re==null)break e;_e=g({},_e,re);break e;case 2:ga=!0}}re=T.callback,re!==null&&(t.flags|=64,se&&(t.flags|=8192),se=u.callbacks,se===null?u.callbacks=[re]:se.push(re))}else se={lane:re,tag:T.tag,payload:T.payload,callback:T.callback,next:null},me===null?(te=me=se,B=_e):me=me.next=se,M|=re;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;se=T,T=se.next,se.next=null,u.lastBaseUpdate=se,u.shared.pending=null}}while(!0);me===null&&(B=_e),u.baseState=B,u.firstBaseUpdate=te,u.lastBaseUpdate=me,h===null&&(u.shared.lanes=0),Aa|=M,t.lanes=M,t.memoizedState=_e}}function Vp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function kp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Vp(a[t],n)}var Hr=ee(null),_l=ee(0);function Xp(t,n){t=Zi,Me(_l,t),Me(Hr,n),Zi=t|n.baseLanes}function Ou(){Me(_l,Zi),Me(Hr,Hr.current)}function Pu(){Zi=_l.current,ye(Hr),ye(_l)}var xa=0,gt=null,Pt=null,rn=null,xl=!1,Gr=!1,rr=!1,yl=0,$s=0,Vr=null,Dx=0;function tn(){throw Error(r(321))}function Iu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Xn(t[a],n[a]))return!1;return!0}function Bu(t,n,a,o,u,h){return xa=h,gt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Rm:wm,rr=!1,h=a(o,u),rr=!1,Gr&&(h=jp(n,a,o,u)),Wp(t),h}function Wp(t){P.H=Al;var n=Pt!==null&&Pt.next!==null;if(xa=0,rn=Pt=gt=null,xl=!1,$s=0,Vr=null,n)throw Error(r(300));t===null||gn||(t=t.dependencies,t!==null&&dl(t)&&(gn=!0))}function jp(t,n,a,o){gt=t;var u=0;do{if(Gr&&(Vr=null),$s=0,Gr=!1,25<=u)throw Error(r(301));if(u+=1,rn=Pt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=Bx,h=n(a,o)}while(Gr);return h}function Ux(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?eo(n):n,t=t.useState()[0],(Pt!==null?Pt.memoizedState:null)!==t&&(gt.flags|=1024),n}function zu(){var t=yl!==0;return yl=0,t}function Fu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Hu(t){if(xl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}xl=!1}xa=0,rn=Pt=gt=null,Gr=!1,$s=yl=0,Vr=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?gt.memoizedState=rn=t:rn=rn.next=t,rn}function sn(){if(Pt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var n=rn===null?gt.memoizedState:rn.next;if(n!==null)rn=n,Pt=t;else{if(t===null)throw gt.alternate===null?Error(r(467)):Error(r(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},rn===null?gt.memoizedState=rn=t:rn=rn.next=t}return rn}function Gu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function eo(t){var n=$s;return $s+=1,Vr===null&&(Vr=[]),t=Fp(Vr,t,n),n=gt,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Rm:wm),t}function Sl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return eo(t);if(t.$$typeof===N)return An(t)}throw Error(r(438,String(t)))}function Vu(t){var n=null,a=gt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=gt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Gu(),gt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=w;return n.index++,a}function ki(t,n){return typeof n=="function"?n(t):n}function Ml(t){var n=sn();return ku(n,Pt,t)}function ku(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,h=o.pending;if(h!==null){if(u!==null){var M=u.next;u.next=h.next,h.next=M}n.baseQueue=u=h,o.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{n=u.next;var T=M=null,B=null,te=n,me=!1;do{var _e=te.lane&-536870913;if(_e!==te.lane?(Et&_e)===_e:(xa&_e)===_e){var re=te.revertLane;if(re===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),_e===zr&&(me=!0);else if((xa&re)===re){te=te.next,re===zr&&(me=!0);continue}else _e={lane:0,revertLane:te.revertLane,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},B===null?(T=B=_e,M=h):B=B.next=_e,gt.lanes|=re,Aa|=re;_e=te.action,rr&&a(h,_e),h=te.hasEagerState?te.eagerState:a(h,_e)}else re={lane:_e,revertLane:te.revertLane,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},B===null?(T=B=re,M=h):B=B.next=re,gt.lanes|=_e,Aa|=_e;te=te.next}while(te!==null&&te!==n);if(B===null?M=h:B.next=T,!Xn(h,t.memoizedState)&&(gn=!0,me&&(a=Fr,a!==null)))throw a;t.memoizedState=h,t.baseState=M,t.baseQueue=B,o.lastRenderedState=h}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Xu(t){var n=sn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do h=t(h,M.action),M=M.next;while(M!==u);Xn(h,n.memoizedState)||(gn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function qp(t,n,a){var o=gt,u=sn(),h=wt;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!Xn((Pt||u).memoizedState,a);M&&(u.memoizedState=a,gn=!0),u=u.queue;var T=Kp.bind(null,o,u,t);if(to(2048,8,T,[t]),u.getSnapshot!==n||M||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,kr(9,El(),Zp.bind(null,o,u,a,n),null),kt===null)throw Error(r(349));h||(xa&124)!==0||Yp(o,n,a)}return a}function Yp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=gt.updateQueue,n===null?(n=Gu(),gt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Zp(t,n,a,o){n.value=a,n.getSnapshot=o,Qp(n)&&Jp(t)}function Kp(t,n,a){return a(function(){Qp(n)&&Jp(t)})}function Qp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Xn(t,a)}catch{return!0}}function Jp(t){var n=Or(t,2);n!==null&&Kn(n,t,2)}function Wu(t){var n=Bn();if(typeof t=="function"){var a=t;if(t=a(),rr){ie(!0);try{a()}finally{ie(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:t},n}function $p(t,n,a,o){return t.baseState=a,ku(t,Pt,typeof o=="function"?o:ki)}function Lx(t,n,a,o,u){if(Tl(t))throw Error(r(485));if(t=n.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){h.listeners.push(M)}};P.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,em(n,h)):(h.next=a.next,n.pending=a.next=h)}}function em(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var h=P.T,M={};P.T=M;try{var T=a(u,o),B=P.S;B!==null&&B(M,T),tm(t,n,T)}catch(te){ju(t,n,te)}finally{P.T=h}}else try{h=a(u,o),tm(t,n,h)}catch(te){ju(t,n,te)}}function tm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){nm(t,n,o)},function(o){return ju(t,n,o)}):nm(t,n,a)}function nm(t,n,a){n.status="fulfilled",n.value=a,im(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,em(t,a)))}function ju(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,im(n),n=n.next;while(n!==o)}t.action=null}function im(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function am(t,n){return n}function rm(t,n){if(wt){var a=kt.formState;if(a!==null){e:{var o=gt;if(wt){if(Jt){t:{for(var u=Jt,h=Ri;u.nodeType!==8;){if(!h){u=null;break t}if(u=gi(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Jt=gi(u.nextSibling),o=u.data==="F!";break e}}tr(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:am,lastRenderedState:n},a.queue=o,a=bm.bind(null,gt,o),o.dispatch=a,o=Wu(!1),h=Qu.bind(null,gt,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Lx.bind(null,gt,u,h,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function sm(t){var n=sn();return om(n,Pt,t)}function om(t,n,a){if(n=ku(t,n,am)[0],t=Ml(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=eo(n)}catch(M){throw M===Ys?gl:M}else o=n;n=sn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(gt.flags|=2048,kr(9,El(),Nx.bind(null,u,a),null)),[o,h,t]}function Nx(t,n){t.action=n}function lm(t){var n=sn(),a=Pt;if(a!==null)return om(n,a,t);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function kr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=gt.updateQueue,n===null&&(n=Gu(),gt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function El(){return{destroy:void 0,resource:void 0}}function cm(){return sn().memoizedState}function bl(t,n,a,o){var u=Bn();o=o===void 0?null:o,gt.flags|=t,u.memoizedState=kr(1|n,El(),a,o)}function to(t,n,a,o){var u=sn();o=o===void 0?null:o;var h=u.memoizedState.inst;Pt!==null&&o!==null&&Iu(o,Pt.memoizedState.deps)?u.memoizedState=kr(n,h,a,o):(gt.flags|=t,u.memoizedState=kr(1|n,h,a,o))}function um(t,n){bl(8390656,8,t,n)}function fm(t,n){to(2048,8,t,n)}function hm(t,n){return to(4,2,t,n)}function dm(t,n){return to(4,4,t,n)}function pm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function mm(t,n,a){a=a!=null?a.concat([t]):null,to(4,4,pm.bind(null,n,t),a)}function qu(){}function gm(t,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Iu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function vm(t,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Iu(n,o[1]))return o[0];if(o=t(),rr){ie(!0);try{t()}finally{ie(!1)}}return a.memoizedState=[o,n],o}function Yu(t,n,a){return a===void 0||(xa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=yg(),gt.lanes|=t,Aa|=t,a)}function _m(t,n,a,o){return Xn(a,n)?a:Hr.current!==null?(t=Yu(t,a,o),Xn(t,n)||(gn=!0),t):(xa&42)===0?(gn=!0,t.memoizedState=a):(t=yg(),gt.lanes|=t,Aa|=t,n)}function xm(t,n,a,o,u){var h=Q.p;Q.p=h!==0&&8>h?h:8;var M=P.T,T={};P.T=T,Qu(t,!1,n,a);try{var B=u(),te=P.S;if(te!==null&&te(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var me=Cx(B,o);no(t,n,me,Zn(t))}else no(t,n,o,Zn(t))}catch(_e){no(t,n,{then:function(){},status:"rejected",reason:_e},Zn())}finally{Q.p=h,P.T=M}}function Ox(){}function Zu(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=ym(t).queue;xm(t,u,n,j,a===null?Ox:function(){return Sm(t),a(o)})}function ym(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Sm(t){var n=ym(t).next.queue;no(t,n,{},Zn())}function Ku(){return An(So)}function Mm(){return sn().memoizedState}function Em(){return sn().memoizedState}function Px(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();t=va(a);var o=_a(n,t,a);o!==null&&(Kn(o,n,a),Ks(o,n,a)),n={cache:Au()},t.payload=n;return}n=n.return}}function Ix(t,n,a){var o=Zn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Tl(t)?Tm(n,a):(a=gu(t,n,a,o),a!==null&&(Kn(a,t,o),Am(a,n,o)))}function bm(t,n,a){var o=Zn();no(t,n,a,o)}function no(t,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tl(t))Tm(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var M=n.lastRenderedState,T=h(M,a);if(u.hasEagerState=!0,u.eagerState=T,Xn(T,M))return ll(t,n,u,0),kt===null&&ol(),!1}catch{}finally{}if(a=gu(t,n,u,o),a!==null)return Kn(a,t,o),Am(a,n,o),!0}return!1}function Qu(t,n,a,o){if(o={lane:2,revertLane:Df(),action:o,hasEagerState:!1,eagerState:null,next:null},Tl(t)){if(n)throw Error(r(479))}else n=gu(t,a,o,2),n!==null&&Kn(n,t,2)}function Tl(t){var n=t.alternate;return t===gt||n!==null&&n===gt}function Tm(t,n){Gr=xl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Am(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,We(t,a)}}var Al={readContext:An,use:Sl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn},Rm={readContext:An,use:Sl,useCallback:function(t,n){return Bn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:um,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,bl(4194308,4,pm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return bl(4194308,4,t,n)},useInsertionEffect:function(t,n){bl(4,2,t,n)},useMemo:function(t,n){var a=Bn();n=n===void 0?null:n;var o=t();if(rr){ie(!0);try{t()}finally{ie(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(rr){ie(!0);try{a(n)}finally{ie(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Ix.bind(null,gt,t),[o.memoizedState,t]},useRef:function(t){var n=Bn();return t={current:t},n.memoizedState=t},useState:function(t){t=Wu(t);var n=t.queue,a=bm.bind(null,gt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:qu,useDeferredValue:function(t,n){var a=Bn();return Yu(a,t,n)},useTransition:function(){var t=Wu(!1);return t=xm.bind(null,gt,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=gt,u=Bn();if(wt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),kt===null)throw Error(r(349));(Et&124)!==0||Yp(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,um(Kp.bind(null,o,h,t),[t]),o.flags|=2048,kr(9,El(),Zp.bind(null,o,h,a,n),null),a},useId:function(){var t=Bn(),n=kt.identifierPrefix;if(wt){var a=Hi,o=Fi;a=(o&~(1<<32-Re(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=yl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Dx++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Ku,useFormState:rm,useActionState:rm,useOptimistic:function(t){var n=Bn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Qu.bind(null,gt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Vu,useCacheRefresh:function(){return Bn().memoizedState=Px.bind(null,gt)}},wm={readContext:An,use:Sl,useCallback:gm,useContext:An,useEffect:fm,useImperativeHandle:mm,useInsertionEffect:hm,useLayoutEffect:dm,useMemo:vm,useReducer:Ml,useRef:cm,useState:function(){return Ml(ki)},useDebugValue:qu,useDeferredValue:function(t,n){var a=sn();return _m(a,Pt.memoizedState,t,n)},useTransition:function(){var t=Ml(ki)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:qp,useId:Mm,useHostTransitionStatus:Ku,useFormState:sm,useActionState:sm,useOptimistic:function(t,n){var a=sn();return $p(a,Pt,t,n)},useMemoCache:Vu,useCacheRefresh:Em},Bx={readContext:An,use:Sl,useCallback:gm,useContext:An,useEffect:fm,useImperativeHandle:mm,useInsertionEffect:hm,useLayoutEffect:dm,useMemo:vm,useReducer:Xu,useRef:cm,useState:function(){return Xu(ki)},useDebugValue:qu,useDeferredValue:function(t,n){var a=sn();return Pt===null?Yu(a,t,n):_m(a,Pt.memoizedState,t,n)},useTransition:function(){var t=Xu(ki)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:qp,useId:Mm,useHostTransitionStatus:Ku,useFormState:lm,useActionState:lm,useOptimistic:function(t,n){var a=sn();return Pt!==null?$p(a,Pt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Vu,useCacheRefresh:Em},Xr=null,io=0;function Rl(t){var n=io;return io+=1,Xr===null&&(Xr=[]),Fp(Xr,t,n)}function ao(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function wl(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Cm(t){var n=t._init;return n(t._payload)}function Dm(t){function n(Y,X){if(t){var $=Y.deletions;$===null?(Y.deletions=[X],Y.flags|=16):$.push(X)}}function a(Y,X){if(!t)return null;for(;X!==null;)n(Y,X),X=X.sibling;return null}function o(Y){for(var X=new Map;Y!==null;)Y.key!==null?X.set(Y.key,Y):X.set(Y.index,Y),Y=Y.sibling;return X}function u(Y,X){return Y=zi(Y,X),Y.index=0,Y.sibling=null,Y}function h(Y,X,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<X?(Y.flags|=67108866,X):$):(Y.flags|=67108866,X)):(Y.flags|=1048576,X)}function M(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,X,$,ge){return X===null||X.tag!==6?(X=_u($,Y.mode,ge),X.return=Y,X):(X=u(X,$),X.return=Y,X)}function B(Y,X,$,ge){var Xe=$.type;return Xe===b?me(Y,X,$.props.children,ge,$.key):X!==null&&(X.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===Z&&Cm(Xe)===X.type)?(X=u(X,$.props),ao(X,$),X.return=Y,X):(X=ul($.type,$.key,$.props,null,Y.mode,ge),ao(X,$),X.return=Y,X)}function te(Y,X,$,ge){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=xu($,Y.mode,ge),X.return=Y,X):(X=u(X,$.children||[]),X.return=Y,X)}function me(Y,X,$,ge,Xe){return X===null||X.tag!==7?(X=Qa($,Y.mode,ge,Xe),X.return=Y,X):(X=u(X,$),X.return=Y,X)}function _e(Y,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=_u(""+X,Y.mode,$),X.return=Y,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return $=ul(X.type,X.key,X.props,null,Y.mode,$),ao($,X),$.return=Y,$;case E:return X=xu(X,Y.mode,$),X.return=Y,X;case Z:var ge=X._init;return X=ge(X._payload),_e(Y,X,$)}if(fe(X)||ae(X))return X=Qa(X,Y.mode,$,null),X.return=Y,X;if(typeof X.then=="function")return _e(Y,Rl(X),$);if(X.$$typeof===N)return _e(Y,pl(Y,X),$);wl(Y,X)}return null}function re(Y,X,$,ge){var Xe=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Xe!==null?null:T(Y,X,""+$,ge);if(typeof $=="object"&&$!==null){switch($.$$typeof){case y:return $.key===Xe?B(Y,X,$,ge):null;case E:return $.key===Xe?te(Y,X,$,ge):null;case Z:return Xe=$._init,$=Xe($._payload),re(Y,X,$,ge)}if(fe($)||ae($))return Xe!==null?null:me(Y,X,$,ge,null);if(typeof $.then=="function")return re(Y,X,Rl($),ge);if($.$$typeof===N)return re(Y,X,pl(Y,$),ge);wl(Y,$)}return null}function se(Y,X,$,ge,Xe){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Y=Y.get($)||null,T(X,Y,""+ge,Xe);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case y:return Y=Y.get(ge.key===null?$:ge.key)||null,B(X,Y,ge,Xe);case E:return Y=Y.get(ge.key===null?$:ge.key)||null,te(X,Y,ge,Xe);case Z:var vt=ge._init;return ge=vt(ge._payload),se(Y,X,$,ge,Xe)}if(fe(ge)||ae(ge))return Y=Y.get($)||null,me(X,Y,ge,Xe,null);if(typeof ge.then=="function")return se(Y,X,$,Rl(ge),Xe);if(ge.$$typeof===N)return se(Y,X,$,pl(X,ge),Xe);wl(X,ge)}return null}function at(Y,X,$,ge){for(var Xe=null,vt=null,Ze=X,it=X=0,_n=null;Ze!==null&&it<$.length;it++){Ze.index>it?(_n=Ze,Ze=null):_n=Ze.sibling;var At=re(Y,Ze,$[it],ge);if(At===null){Ze===null&&(Ze=_n);break}t&&Ze&&At.alternate===null&&n(Y,Ze),X=h(At,X,it),vt===null?Xe=At:vt.sibling=At,vt=At,Ze=_n}if(it===$.length)return a(Y,Ze),wt&&$a(Y,it),Xe;if(Ze===null){for(;it<$.length;it++)Ze=_e(Y,$[it],ge),Ze!==null&&(X=h(Ze,X,it),vt===null?Xe=Ze:vt.sibling=Ze,vt=Ze);return wt&&$a(Y,it),Xe}for(Ze=o(Ze);it<$.length;it++)_n=se(Ze,Y,it,$[it],ge),_n!==null&&(t&&_n.alternate!==null&&Ze.delete(_n.key===null?it:_n.key),X=h(_n,X,it),vt===null?Xe=_n:vt.sibling=_n,vt=_n);return t&&Ze.forEach(function(Pa){return n(Y,Pa)}),wt&&$a(Y,it),Xe}function tt(Y,X,$,ge){if($==null)throw Error(r(151));for(var Xe=null,vt=null,Ze=X,it=X=0,_n=null,At=$.next();Ze!==null&&!At.done;it++,At=$.next()){Ze.index>it?(_n=Ze,Ze=null):_n=Ze.sibling;var Pa=re(Y,Ze,At.value,ge);if(Pa===null){Ze===null&&(Ze=_n);break}t&&Ze&&Pa.alternate===null&&n(Y,Ze),X=h(Pa,X,it),vt===null?Xe=Pa:vt.sibling=Pa,vt=Pa,Ze=_n}if(At.done)return a(Y,Ze),wt&&$a(Y,it),Xe;if(Ze===null){for(;!At.done;it++,At=$.next())At=_e(Y,At.value,ge),At!==null&&(X=h(At,X,it),vt===null?Xe=At:vt.sibling=At,vt=At);return wt&&$a(Y,it),Xe}for(Ze=o(Ze);!At.done;it++,At=$.next())At=se(Ze,Y,it,At.value,ge),At!==null&&(t&&At.alternate!==null&&Ze.delete(At.key===null?it:At.key),X=h(At,X,it),vt===null?Xe=At:vt.sibling=At,vt=At);return t&&Ze.forEach(function(zy){return n(Y,zy)}),wt&&$a(Y,it),Xe}function Bt(Y,X,$,ge){if(typeof $=="object"&&$!==null&&$.type===b&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case y:e:{for(var Xe=$.key;X!==null;){if(X.key===Xe){if(Xe=$.type,Xe===b){if(X.tag===7){a(Y,X.sibling),ge=u(X,$.props.children),ge.return=Y,Y=ge;break e}}else if(X.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===Z&&Cm(Xe)===X.type){a(Y,X.sibling),ge=u(X,$.props),ao(ge,$),ge.return=Y,Y=ge;break e}a(Y,X);break}else n(Y,X);X=X.sibling}$.type===b?(ge=Qa($.props.children,Y.mode,ge,$.key),ge.return=Y,Y=ge):(ge=ul($.type,$.key,$.props,null,Y.mode,ge),ao(ge,$),ge.return=Y,Y=ge)}return M(Y);case E:e:{for(Xe=$.key;X!==null;){if(X.key===Xe)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){a(Y,X.sibling),ge=u(X,$.children||[]),ge.return=Y,Y=ge;break e}else{a(Y,X);break}else n(Y,X);X=X.sibling}ge=xu($,Y.mode,ge),ge.return=Y,Y=ge}return M(Y);case Z:return Xe=$._init,$=Xe($._payload),Bt(Y,X,$,ge)}if(fe($))return at(Y,X,$,ge);if(ae($)){if(Xe=ae($),typeof Xe!="function")throw Error(r(150));return $=Xe.call($),tt(Y,X,$,ge)}if(typeof $.then=="function")return Bt(Y,X,Rl($),ge);if($.$$typeof===N)return Bt(Y,X,pl(Y,$),ge);wl(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(a(Y,X.sibling),ge=u(X,$),ge.return=Y,Y=ge):(a(Y,X),ge=_u($,Y.mode,ge),ge.return=Y,Y=ge),M(Y)):a(Y,X)}return function(Y,X,$,ge){try{io=0;var Xe=Bt(Y,X,$,ge);return Xr=null,Xe}catch(Ze){if(Ze===Ys||Ze===gl)throw Ze;var vt=Wn(29,Ze,null,Y.mode);return vt.lanes=ge,vt.return=Y,vt}finally{}}}var Wr=Dm(!0),Um=Dm(!1),ai=ee(null),wi=null;function ya(t){var n=t.alternate;Me(hn,hn.current&1),Me(ai,t),wi===null&&(n===null||Hr.current!==null||n.memoizedState!==null)&&(wi=t)}function Lm(t){if(t.tag===22){if(Me(hn,hn.current),Me(ai,t),wi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(wi=t)}}else Sa()}function Sa(){Me(hn,hn.current),Me(ai,ai.current)}function Xi(t){ye(ai),wi===t&&(wi=null),ye(hn)}var hn=ee(0);function Cl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Vf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Ju(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var $u={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Zn(),u=va(o);u.payload=n,a!=null&&(u.callback=a),n=_a(t,u,o),n!==null&&(Kn(n,t,o),Ks(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Zn(),u=va(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=_a(t,u,o),n!==null&&(Kn(n,t,o),Ks(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Zn(),o=va(a);o.tag=2,n!=null&&(o.callback=n),n=_a(t,o,a),n!==null&&(Kn(n,t,a),Ks(n,t,a))}};function Nm(t,n,a,o,u,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,M):n.prototype&&n.prototype.isPureReactComponent?!Hs(a,o)||!Hs(u,h):!0}function Om(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&$u.enqueueReplaceState(n,n.state,null)}function sr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Dl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Pm(t){Dl(t)}function Im(t){console.error(t)}function Bm(t){Dl(t)}function Ul(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function zm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ef(t,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(t,n)},a}function Fm(t){return t=va(t),t.tag=3,t}function Hm(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;t.payload=function(){return u(h)},t.callback=function(){zm(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){zm(n,a,o),typeof u!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function zx(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ws(n,a,u,!0),a=ai.current,a!==null){switch(a.tag){case 13:return wi===null?Tf():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Cu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Rf(t,o,u)),!1;case 22:return a.flags|=65536,o===Cu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Rf(t,o,u)),!1}throw Error(r(435,a.tag))}return Rf(t,o,u),Tf(),!1}if(wt)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Mu&&(t=Error(r(422),{cause:o}),Xs(ei(t,a)))):(o!==Mu&&(n=Error(r(423),{cause:o}),Xs(ei(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ei(o,a),u=ef(t.stateNode,o,u),Lu(t,u),$t!==4&&($t=2)),!1;var h=Error(r(520),{cause:o});if(h=ei(h,a),fo===null?fo=[h]:fo.push(h),$t!==4&&($t=2),n===null)return!0;o=ei(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=ef(a.stateNode,o,t),Lu(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ra===null||!Ra.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Fm(u),Hm(u,t,a,o),Lu(a,u),!1}a=a.return}while(a!==null);return!1}var Gm=Error(r(461)),gn=!1;function Sn(t,n,a,o){n.child=t===null?Um(n,null,a,o):Wr(n,t.child,a,o)}function Vm(t,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var M={};for(var T in o)T!=="ref"&&(M[T]=o[T])}else M=o;return ir(n),o=Bu(t,n,a,M,h,u),T=zu(),t!==null&&!gn?(Fu(t,n,u),Wi(t,n,u)):(wt&&T&&yu(n),n.flags|=1,Sn(t,n,o,u),n.child)}function km(t,n,a,o,u){if(t===null){var h=a.type;return typeof h=="function"&&!vu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Xm(t,n,h,o,u)):(t=ul(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!cf(t,u)){var M=h.memoizedProps;if(a=a.compare,a=a!==null?a:Hs,a(M,o)&&t.ref===n.ref)return Wi(t,n,u)}return n.flags|=1,t=zi(h,o),t.ref=n.ref,t.return=n,n.child=t}function Xm(t,n,a,o,u){if(t!==null){var h=t.memoizedProps;if(Hs(h,o)&&t.ref===n.ref)if(gn=!1,n.pendingProps=o=h,cf(t,u))(t.flags&131072)!==0&&(gn=!0);else return n.lanes=t.lanes,Wi(t,n,u)}return tf(t,n,a,o,u)}function Wm(t,n,a){var o=n.pendingProps,u=o.children,h=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|a:a,t!==null){for(u=n.child=t.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return jm(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ml(n,h!==null?h.cachePool:null),h!==null?Xp(n,h):Ou(),Lm(n);else return n.lanes=n.childLanes=536870912,jm(t,n,h!==null?h.baseLanes|a:a,a)}else h!==null?(ml(n,h.cachePool),Xp(n,h),Sa(),n.memoizedState=null):(t!==null&&ml(n,null),Ou(),Sa());return Sn(t,n,u,a),n.child}function jm(t,n,a,o){var u=wu();return u=u===null?null:{parent:fn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&ml(n,null),Ou(),Lm(n),t!==null&&Ws(t,n,o,!0),null}function Ll(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function tf(t,n,a,o,u){return ir(n),a=Bu(t,n,a,o,void 0,u),o=zu(),t!==null&&!gn?(Fu(t,n,u),Wi(t,n,u)):(wt&&o&&yu(n),n.flags|=1,Sn(t,n,a,u),n.child)}function qm(t,n,a,o,u,h){return ir(n),n.updateQueue=null,a=jp(n,o,a,u),Wp(t),o=zu(),t!==null&&!gn?(Fu(t,n,h),Wi(t,n,h)):(wt&&o&&yu(n),n.flags|=1,Sn(t,n,a,h),n.child)}function Ym(t,n,a,o,u){if(ir(n),n.stateNode===null){var h=Pr,M=a.contextType;typeof M=="object"&&M!==null&&(h=An(M)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=$u,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Du(n),M=a.contextType,h.context=typeof M=="object"&&M!==null?An(M):Pr,h.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(Ju(n,a,M,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(M=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),M!==h.state&&$u.enqueueReplaceState(h,h.state,null),Js(n,o,h,u),Qs(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var T=n.memoizedProps,B=sr(a,T);h.props=B;var te=h.context,me=a.contextType;M=Pr,typeof me=="object"&&me!==null&&(M=An(me));var _e=a.getDerivedStateFromProps;me=typeof _e=="function"||typeof h.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,me||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(T||te!==M)&&Om(n,h,o,M),ga=!1;var re=n.memoizedState;h.state=re,Js(n,o,h,u),Qs(),te=n.memoizedState,T||re!==te||ga?(typeof _e=="function"&&(Ju(n,a,_e,o),te=n.memoizedState),(B=ga||Nm(n,a,B,o,re,te,M))?(me||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=te),h.props=o,h.state=te,h.context=M,o=B):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Uu(t,n),M=n.memoizedProps,me=sr(a,M),h.props=me,_e=n.pendingProps,re=h.context,te=a.contextType,B=Pr,typeof te=="object"&&te!==null&&(B=An(te)),T=a.getDerivedStateFromProps,(te=typeof T=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(M!==_e||re!==B)&&Om(n,h,o,B),ga=!1,re=n.memoizedState,h.state=re,Js(n,o,h,u),Qs();var se=n.memoizedState;M!==_e||re!==se||ga||t!==null&&t.dependencies!==null&&dl(t.dependencies)?(typeof T=="function"&&(Ju(n,a,T,o),se=n.memoizedState),(me=ga||Nm(n,a,me,o,re,se,B)||t!==null&&t.dependencies!==null&&dl(t.dependencies))?(te||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,se,B),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,se,B)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||M===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=se),h.props=o,h.state=se,h.context=B,o=me):(typeof h.componentDidUpdate!="function"||M===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,Ll(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=Wr(n,t.child,null,u),n.child=Wr(n,null,a,u)):Sn(t,n,a,u),n.memoizedState=h.state,t=n.child):t=Wi(t,n,u),t}function Zm(t,n,a,o){return ks(),n.flags|=256,Sn(t,n,a,o),n.child}var nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function af(t){return{baseLanes:t,cachePool:Ip()}}function rf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function Km(t,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,M;if((M=h)||(M=t!==null&&t.memoizedState===null?!1:(hn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,t===null){if(wt){if(u?ya(n):Sa(),wt){var T=Jt,B;if(B=T){e:{for(B=T,T=Ri;B.nodeType!==8;){if(!T){T=null;break e}if(B=gi(B.nextSibling),B===null){T=null;break e}}T=B}T!==null?(n.memoizedState={dehydrated:T,treeContext:Ja!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},B=Wn(18,null,null,0),B.stateNode=T,B.return=n,n.child=B,Ln=n,Jt=null,B=!0):B=!1}B||tr(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Vf(T)?n.lanes=32:n.lanes=536870912,null;Xi(n)}return T=o.children,o=o.fallback,u?(Sa(),u=n.mode,T=Nl({mode:"hidden",children:T},u),o=Qa(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,u=n.child,u.memoizedState=af(a),u.childLanes=rf(t,M,a),n.memoizedState=nf,o):(ya(n),sf(n,T))}if(B=t.memoizedState,B!==null&&(T=B.dehydrated,T!==null)){if(h)n.flags&256?(ya(n),n.flags&=-257,n=of(t,n,a)):n.memoizedState!==null?(Sa(),n.child=t.child,n.flags|=128,n=null):(Sa(),u=o.fallback,T=n.mode,o=Nl({mode:"visible",children:o.children},T),u=Qa(u,T,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Wr(n,t.child,null,a),o=n.child,o.memoizedState=af(a),o.childLanes=rf(t,M,a),n.memoizedState=nf,n=u);else if(ya(n),Vf(T)){if(M=T.nextSibling&&T.nextSibling.dataset,M)var te=M.dgst;M=te,o=Error(r(419)),o.stack="",o.digest=M,Xs({value:o,source:null,stack:null}),n=of(t,n,a)}else if(gn||Ws(t,n,a,!1),M=(a&t.childLanes)!==0,gn||M){if(M=kt,M!==null&&(o=a&-a,o=(o&42)!==0?1:rt(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==B.retryLane))throw B.retryLane=o,Or(t,o),Kn(M,t,o),Gm;T.data==="$?"||Tf(),n=of(t,n,a)}else T.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Jt=gi(T.nextSibling),Ln=n,wt=!0,er=null,Ri=!1,t!==null&&(ni[ii++]=Fi,ni[ii++]=Hi,ni[ii++]=Ja,Fi=t.id,Hi=t.overflow,Ja=n),n=sf(n,o.children),n.flags|=4096);return n}return u?(Sa(),u=o.fallback,T=n.mode,B=t.child,te=B.sibling,o=zi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,te!==null?u=zi(te,u):(u=Qa(u,T,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,T=t.child.memoizedState,T===null?T=af(a):(B=T.cachePool,B!==null?(te=fn._currentValue,B=B.parent!==te?{parent:te,pool:te}:B):B=Ip(),T={baseLanes:T.baseLanes|a,cachePool:B}),u.memoizedState=T,u.childLanes=rf(t,M,a),n.memoizedState=nf,o):(ya(n),a=t.child,t=a.sibling,a=zi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(M=n.deletions,M===null?(n.deletions=[t],n.flags|=16):M.push(t)),n.child=a,n.memoizedState=null,a)}function sf(t,n){return n=Nl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Nl(t,n){return t=Wn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function of(t,n,a){return Wr(n,t.child,null,a),t=sf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Qm(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),bu(t.return,n,a)}function lf(t,n,a,o,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=u)}function Jm(t,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;if(Sn(t,n,o.children,a),o=hn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qm(t,a,n);else if(t.tag===19)Qm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(Me(hn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Cl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),lf(n,!1,u,a,h);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Cl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}lf(n,!0,a,null,h);break;case"together":lf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Wi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Aa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ws(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=zi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=zi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function cf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&dl(t)))}function Fx(t,n,a){switch(n.tag){case 3:be(n,n.stateNode.containerInfo),ma(n,fn,t.memoizedState.cache),ks();break;case 27:case 5:qe(n);break;case 4:be(n,n.stateNode.containerInfo);break;case 10:ma(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ya(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Km(t,n,a):(ya(n),t=Wi(t,n,a),t!==null?t.sibling:null);ya(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Ws(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Jm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Me(hn,hn.current),o)break;return null;case 22:case 23:return n.lanes=0,Wm(t,n,a);case 24:ma(n,fn,t.memoizedState.cache)}return Wi(t,n,a)}function $m(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)gn=!0;else{if(!cf(t,a)&&(n.flags&128)===0)return gn=!1,Fx(t,n,a);gn=(t.flags&131072)!==0}else gn=!1,wt&&(n.flags&1048576)!==0&&Cp(n,hl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")vu(o)?(t=sr(o,t),n.tag=1,n=Ym(null,n,o,t,a)):(n.tag=0,n=tf(null,n,o,t,a));else{if(o!=null){if(u=o.$$typeof,u===U){n.tag=11,n=Vm(null,n,o,t,a);break e}else if(u===V){n.tag=14,n=km(null,n,o,t,a);break e}}throw n=pe(o)||o,Error(r(306,n,""))}}return n;case 0:return tf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=sr(o,n.pendingProps),Ym(t,n,o,u,a);case 3:e:{if(be(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Uu(t,n),Js(n,o,null,a);var M=n.memoizedState;if(o=M.cache,ma(n,fn,o),o!==h.cache&&Tu(n,[fn],a,!0),Qs(),o=M.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Zm(t,n,o,a);break e}else if(o!==u){u=ei(Error(r(424)),n),Xs(u),n=Zm(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Jt=gi(t.firstChild),Ln=n,wt=!0,er=null,Ri=!0,a=Um(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ks(),o===u){n=Wi(t,n,a);break e}Sn(t,n,o,a)}n=n.child}return n;case 26:return Ll(t,n),t===null?(a=iv(n.type,null,n.pendingProps,null))?n.memoizedState=a:wt||(a=n.type,t=n.pendingProps,o=ql(ne.current).createElement(a),o[un]=n,o[Kt]=t,En(o,a,t),an(o),n.stateNode=o):n.memoizedState=iv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return qe(n),t===null&&wt&&(o=n.stateNode=ev(n.type,n.pendingProps,ne.current),Ln=n,Ri=!0,u=Jt,Da(n.type)?(kf=u,Jt=gi(o.firstChild)):Jt=u),Sn(t,n,n.pendingProps.children,a),Ll(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&wt&&((u=o=Jt)&&(o=dy(o,n.type,n.pendingProps,Ri),o!==null?(n.stateNode=o,Ln=n,Jt=gi(o.firstChild),Ri=!1,u=!0):u=!1),u||tr(n)),qe(n),u=n.type,h=n.pendingProps,M=t!==null?t.memoizedProps:null,o=h.children,Ff(u,h)?o=null:M!==null&&Ff(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=Bu(t,n,Ux,null,null,a),So._currentValue=u),Ll(t,n),Sn(t,n,o,a),n.child;case 6:return t===null&&wt&&((t=a=Jt)&&(a=py(a,n.pendingProps,Ri),a!==null?(n.stateNode=a,Ln=n,Jt=null,t=!0):t=!1),t||tr(n)),null;case 13:return Km(t,n,a);case 4:return be(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Wr(n,null,o,a):Sn(t,n,o,a),n.child;case 11:return Vm(t,n,n.type,n.pendingProps,a);case 7:return Sn(t,n,n.pendingProps,a),n.child;case 8:return Sn(t,n,n.pendingProps.children,a),n.child;case 12:return Sn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ma(n,n.type,o.value),Sn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ir(n),u=An(u),o=o(u),n.flags|=1,Sn(t,n,o,a),n.child;case 14:return km(t,n,n.type,n.pendingProps,a);case 15:return Xm(t,n,n.type,n.pendingProps,a);case 19:return Jm(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=Nl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=zi(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Wm(t,n,a);case 24:return ir(n),o=An(fn),t===null?(u=wu(),u===null&&(u=kt,h=Au(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},Du(n),ma(n,fn,u)):((t.lanes&a)!==0&&(Uu(t,n),Js(n,null,null,a),Qs()),u=t.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ma(n,fn,o)):(o=h.cache,ma(n,fn,o),o!==u.cache&&Tu(n,[fn],a,!0))),Sn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ji(t){t.flags|=4}function eg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!lv(n)){if(n=ai.current,n!==null&&((Et&4194048)===Et?wi!==null:(Et&62914560)!==Et&&(Et&536870912)===0||n!==wi))throw Zs=Cu,Bp;t.flags|=8192}}function Ol(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ce():536870912,t.lanes|=n,Zr|=n)}function ro(t,n){if(!wt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Hx(t,n,a){var o=n.pendingProps;switch(Su(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(n),null;case 1:return qt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Vi(fn),Ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Vs(n)?ji(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Lp())),qt(n),null;case 26:return a=n.memoizedState,t===null?(ji(n),a!==null?(qt(n),eg(n,a)):(qt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(ji(n),qt(n),eg(n,a)):(qt(n),n.flags&=-16777217):(t.memoizedProps!==o&&ji(n),qt(n),n.flags&=-16777217),null;case 27:ut(n),a=ne.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qt(n),null}t=Ne.current,Vs(n)?Dp(n):(t=ev(u,o,a),n.stateNode=t,ji(n))}return qt(n),null;case 5:if(ut(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qt(n),null}if(t=Ne.current,Vs(n))Dp(n);else{switch(u=ql(ne.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}t[un]=n,t[Kt]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(En(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ji(n)}}return qt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ji(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ne.current,Vs(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Ln,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[un]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||qg(t.nodeValue,a)),t||tr(n)}else t=ql(t).createTextNode(o),t[un]=n,n.stateNode=t}return qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Vs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[un]=n}else ks(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),u=!1}else u=Lp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Xi(n),n):(Xi(n),null)}if(Xi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Ol(n,n.updateQueue),qt(n),null;case 4:return Ke(),t===null&&Of(n.stateNode.containerInfo),qt(n),null;case 10:return Vi(n.type),qt(n),null;case 19:if(ye(hn),u=n.memoizedState,u===null)return qt(n),null;if(o=(n.flags&128)!==0,h=u.rendering,h===null)if(o)ro(u,!1);else{if($t!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Cl(t),h!==null){for(n.flags|=128,ro(u,!1),t=h.updateQueue,n.updateQueue=t,Ol(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)wp(a,t),a=a.sibling;return Me(hn,hn.current&1|2),n.child}t=t.sibling}u.tail!==null&&Be()>Bl&&(n.flags|=128,o=!0,ro(u,!1),n.lanes=4194304)}else{if(!o)if(t=Cl(h),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Ol(n,t),ro(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!wt)return qt(n),null}else 2*Be()-u.renderingStartTime>Bl&&a!==536870912&&(n.flags|=128,o=!0,ro(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(t=u.last,t!==null?t.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Be(),n.sibling=null,t=hn.current,Me(hn,o?t&1|2:t&1),n):(qt(n),null);case 22:case 23:return Xi(n),Pu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qt(n),n.subtreeFlags&6&&(n.flags|=8192)):qt(n),a=n.updateQueue,a!==null&&Ol(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ye(ar),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(fn),qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Gx(t,n){switch(Su(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Vi(fn),Ke(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ut(n),null;case 13:if(Xi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ks()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ye(hn),null;case 4:return Ke(),null;case 10:return Vi(n.type),null;case 22:case 23:return Xi(n),Pu(),t!==null&&ye(ar),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Vi(fn),null;case 25:return null;default:return null}}function tg(t,n){switch(Su(n),n.tag){case 3:Vi(fn),Ke();break;case 26:case 27:case 5:ut(n);break;case 4:Ke();break;case 13:Xi(n);break;case 19:ye(hn);break;case 10:Vi(n.type);break;case 22:case 23:Xi(n),Pu(),t!==null&&ye(ar);break;case 24:Vi(fn)}}function so(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var h=a.create,M=a.inst;o=h(),M.destroy=o}a=a.next}while(a!==u)}}catch(T){Ht(n,n.return,T)}}function Ma(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&t)===t){var M=o.inst,T=M.destroy;if(T!==void 0){M.destroy=void 0,u=n;var B=a,te=T;try{te()}catch(me){Ht(u,B,me)}}}o=o.next}while(o!==h)}}catch(me){Ht(n,n.return,me)}}function ng(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{kp(n,a)}catch(o){Ht(t,t.return,o)}}}function ig(t,n,a){a.props=sr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ht(t,n,o)}}function oo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Ht(t,n,u)}}function Ci(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ht(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ht(t,n,u)}else a.current=null}function ag(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ht(t,t.return,u)}}function uf(t,n,a){try{var o=t.stateNode;ly(o,t.type,a,n),o[Kt]=n}catch(u){Ht(t,t.return,u)}}function rg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Da(t.type)||t.tag===4}function ff(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||rg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Da(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=jl));else if(o!==4&&(o===27&&Da(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(hf(t,n,a),t=t.sibling;t!==null;)hf(t,n,a),t=t.sibling}function Pl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Da(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Pl(t,n,a),t=t.sibling;t!==null;)Pl(t,n,a),t=t.sibling}function sg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);En(n,o,a),n[un]=t,n[Kt]=a}catch(h){Ht(t,t.return,h)}}var qi=!1,nn=!1,df=!1,og=typeof WeakSet=="function"?WeakSet:Set,vn=null;function Vx(t,n){if(t=t.containerInfo,Bf=$l,t=_p(t),uu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var M=0,T=-1,B=-1,te=0,me=0,_e=t,re=null;t:for(;;){for(var se;_e!==a||u!==0&&_e.nodeType!==3||(T=M+u),_e!==h||o!==0&&_e.nodeType!==3||(B=M+o),_e.nodeType===3&&(M+=_e.nodeValue.length),(se=_e.firstChild)!==null;)re=_e,_e=se;for(;;){if(_e===t)break t;if(re===a&&++te===u&&(T=M),re===h&&++me===o&&(B=M),(se=_e.nextSibling)!==null)break;_e=re,re=_e.parentNode}_e=se}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(zf={focusedElem:t,selectionRange:a},$l=!1,vn=n;vn!==null;)if(n=vn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,vn=t;else for(;vn!==null;){switch(n=vn,h=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var at=sr(a.type,u,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(at,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Ht(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Gf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Gf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,vn=t;break}vn=n.return}}function lg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ea(t,a),o&4&&so(5,a);break;case 1:if(Ea(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(M){Ht(a,a.return,M)}else{var u=sr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Ht(a,a.return,M)}}o&64&&ng(a),o&512&&oo(a,a.return);break;case 3:if(Ea(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{kp(t,n)}catch(M){Ht(a,a.return,M)}}break;case 27:n===null&&o&4&&sg(a);case 26:case 5:Ea(t,a),n===null&&o&4&&ag(a),o&512&&oo(a,a.return);break;case 12:Ea(t,a);break;case 13:Ea(t,a),o&4&&fg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Qx.bind(null,a),my(t,a))));break;case 22:if(o=a.memoizedState!==null||qi,!o){n=n!==null&&n.memoizedState!==null||nn,u=qi;var h=nn;qi=o,(nn=n)&&!h?ba(t,a,(a.subtreeFlags&8772)!==0):Ea(t,a),qi=u,nn=h}break;case 30:break;default:Ea(t,a)}}function cg(t){var n=t.alternate;n!==null&&(t.alternate=null,cg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ar(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var jt=null,zn=!1;function Yi(t,n,a){for(a=a.child;a!==null;)ug(t,n,a),a=a.sibling}function ug(t,n,a){if(ce&&typeof ce.onCommitFiberUnmount=="function")try{ce.onCommitFiberUnmount(J,a)}catch{}switch(a.tag){case 26:nn||Ci(a,n),Yi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:nn||Ci(a,n);var o=jt,u=zn;Da(a.type)&&(jt=a.stateNode,zn=!1),Yi(t,n,a),vo(a.stateNode),jt=o,zn=u;break;case 5:nn||Ci(a,n);case 6:if(o=jt,u=zn,jt=null,Yi(t,n,a),jt=o,zn=u,jt!==null)if(zn)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(a.stateNode)}catch(h){Ht(a,n,h)}else try{jt.removeChild(a.stateNode)}catch(h){Ht(a,n,h)}break;case 18:jt!==null&&(zn?(t=jt,Jg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),To(t)):Jg(jt,a.stateNode));break;case 4:o=jt,u=zn,jt=a.stateNode.containerInfo,zn=!0,Yi(t,n,a),jt=o,zn=u;break;case 0:case 11:case 14:case 15:nn||Ma(2,a,n),nn||Ma(4,a,n),Yi(t,n,a);break;case 1:nn||(Ci(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&ig(a,n,o)),Yi(t,n,a);break;case 21:Yi(t,n,a);break;case 22:nn=(o=nn)||a.memoizedState!==null,Yi(t,n,a),nn=o;break;default:Yi(t,n,a)}}function fg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{To(t)}catch(a){Ht(n,n.return,a)}}function kx(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new og),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new og),n;default:throw Error(r(435,t.tag))}}function pf(t,n){var a=kx(t);n.forEach(function(o){var u=Jx.bind(null,t,o);a.has(o)||(a.add(o),o.then(u,u))})}function jn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=t,M=n,T=M;e:for(;T!==null;){switch(T.tag){case 27:if(Da(T.type)){jt=T.stateNode,zn=!1;break e}break;case 5:jt=T.stateNode,zn=!1;break e;case 3:case 4:jt=T.stateNode.containerInfo,zn=!0;break e}T=T.return}if(jt===null)throw Error(r(160));ug(h,M,u),jt=null,zn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)hg(n,t),n=n.sibling}var mi=null;function hg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:jn(n,t),qn(t),o&4&&(Ma(3,t,t.return),so(3,t),Ma(5,t,t.return));break;case 1:jn(n,t),qn(t),o&512&&(nn||a===null||Ci(a,a.return)),o&64&&qi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=mi;if(jn(n,t),qn(t),o&512&&(nn||a===null||Ci(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Ai]||h[un]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),En(h,o,a),h[un]=t,an(h),o=h;break e;case"link":var M=sv("link","href",u).get(o+(a.href||""));if(M){for(var T=0;T<M.length;T++)if(h=M[T],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(T,1);break t}}h=u.createElement(o),En(h,o,a),u.head.appendChild(h);break;case"meta":if(M=sv("meta","content",u).get(o+(a.content||""))){for(T=0;T<M.length;T++)if(h=M[T],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(T,1);break t}}h=u.createElement(o),En(h,o,a),u.head.appendChild(h);break;default:throw Error(r(468,o))}h[un]=t,an(h),o=h}t.stateNode=o}else ov(u,t.type,t.stateNode);else t.stateNode=rv(u,o,t.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?ov(u,t.type,t.stateNode):rv(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&uf(t,t.memoizedProps,a.memoizedProps)}break;case 27:jn(n,t),qn(t),o&512&&(nn||a===null||Ci(a,a.return)),a!==null&&o&4&&uf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,t),qn(t),o&512&&(nn||a===null||Ci(a,a.return)),t.flags&32){u=t.stateNode;try{Pn(u,"")}catch(se){Ht(t,t.return,se)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,uf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(df=!0);break;case 6:if(jn(n,t),qn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(se){Ht(t,t.return,se)}}break;case 3:if(Kl=null,u=mi,mi=Yl(n.containerInfo),jn(n,t),mi=u,qn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{To(n.containerInfo)}catch(se){Ht(t,t.return,se)}df&&(df=!1,dg(t));break;case 4:o=mi,mi=Yl(t.stateNode.containerInfo),jn(n,t),qn(t),mi=o;break;case 12:jn(n,t),qn(t);break;case 13:jn(n,t),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(yf=Be()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,pf(t,o)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,te=qi,me=nn;if(qi=te||u,nn=me||B,jn(n,t),nn=me,qi=te,qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||qi||nn||or(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(h=B.stateNode,u)M=h.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{T=B.stateNode;var _e=B.memoizedProps.style,re=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;T.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(se){Ht(B,B.return,se)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(se){Ht(B,B.return,se)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,pf(t,a))));break;case 19:jn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,pf(t,o)));break;case 30:break;case 21:break;default:jn(n,t),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(rg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,h=ff(t);Pl(t,h,u);break;case 5:var M=a.stateNode;a.flags&32&&(Pn(M,""),a.flags&=-33);var T=ff(t);Pl(t,T,M);break;case 3:case 4:var B=a.stateNode.containerInfo,te=ff(t);hf(t,te,B);break;default:throw Error(r(161))}}catch(me){Ht(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function dg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;dg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ea(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)lg(t,n.alternate,n),n=n.sibling}function or(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ma(4,n,n.return),or(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&ig(n,n.return,a),or(n);break;case 27:vo(n.stateNode);case 26:case 5:Ci(n,n.return),or(n);break;case 22:n.memoizedState===null&&or(n);break;case 30:or(n);break;default:or(n)}t=t.sibling}}function ba(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,h=n,M=h.flags;switch(h.tag){case 0:case 11:case 15:ba(u,h,a),so(4,h);break;case 1:if(ba(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){Ht(o,o.return,te)}if(o=h,u=o.updateQueue,u!==null){var T=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Vp(B[u],T)}catch(te){Ht(o,o.return,te)}}a&&M&64&&ng(h),oo(h,h.return);break;case 27:sg(h);case 26:case 5:ba(u,h,a),a&&o===null&&M&4&&ag(h),oo(h,h.return);break;case 12:ba(u,h,a);break;case 13:ba(u,h,a),a&&M&4&&fg(u,h);break;case 22:h.memoizedState===null&&ba(u,h,a),oo(h,h.return);break;case 30:break;default:ba(u,h,a)}n=n.sibling}}function mf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&js(a))}function gf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&js(t))}function Di(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)pg(t,n,a,o),n=n.sibling}function pg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Di(t,n,a,o),u&2048&&so(9,n);break;case 1:Di(t,n,a,o);break;case 3:Di(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&js(t)));break;case 12:if(u&2048){Di(t,n,a,o),t=n.stateNode;try{var h=n.memoizedProps,M=h.id,T=h.onPostCommit;typeof T=="function"&&T(M,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Ht(n,n.return,B)}}else Di(t,n,a,o);break;case 13:Di(t,n,a,o);break;case 23:break;case 22:h=n.stateNode,M=n.alternate,n.memoizedState!==null?h._visibility&2?Di(t,n,a,o):lo(t,n):h._visibility&2?Di(t,n,a,o):(h._visibility|=2,jr(t,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&mf(M,n);break;case 24:Di(t,n,a,o),u&2048&&gf(n.alternate,n);break;default:Di(t,n,a,o)}}function jr(t,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=t,M=n,T=a,B=o,te=M.flags;switch(M.tag){case 0:case 11:case 15:jr(h,M,T,B,u),so(8,M);break;case 23:break;case 22:var me=M.stateNode;M.memoizedState!==null?me._visibility&2?jr(h,M,T,B,u):lo(h,M):(me._visibility|=2,jr(h,M,T,B,u)),u&&te&2048&&mf(M.alternate,M);break;case 24:jr(h,M,T,B,u),u&&te&2048&&gf(M.alternate,M);break;default:jr(h,M,T,B,u)}n=n.sibling}}function lo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:lo(a,o),u&2048&&mf(o.alternate,o);break;case 24:lo(a,o),u&2048&&gf(o.alternate,o);break;default:lo(a,o)}n=n.sibling}}var co=8192;function qr(t){if(t.subtreeFlags&co)for(t=t.child;t!==null;)mg(t),t=t.sibling}function mg(t){switch(t.tag){case 26:qr(t),t.flags&co&&t.memoizedState!==null&&wy(mi,t.memoizedState,t.memoizedProps);break;case 5:qr(t);break;case 3:case 4:var n=mi;mi=Yl(t.stateNode.containerInfo),qr(t),mi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=co,co=16777216,qr(t),co=n):qr(t));break;default:qr(t)}}function gg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function uo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,_g(o,t)}gg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vg(t),t=t.sibling}function vg(t){switch(t.tag){case 0:case 11:case 15:uo(t),t.flags&2048&&Ma(9,t,t.return);break;case 3:uo(t);break;case 12:uo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Il(t)):uo(t);break;default:uo(t)}}function Il(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,_g(o,t)}gg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ma(8,n,n.return),Il(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Il(n));break;default:Il(n)}t=t.sibling}}function _g(t,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:js(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,vn=o;else e:for(a=t;vn!==null;){o=vn;var u=o.sibling,h=o.return;if(cg(o),o===a){vn=null;break e}if(u!==null){u.return=h,vn=u;break e}vn=h}}}var Xx={getCacheForType:function(t){var n=An(fn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Wx=typeof WeakMap=="function"?WeakMap:Map,Lt=0,kt=null,xt=null,Et=0,Nt=0,Yn=null,Ta=!1,Yr=!1,vf=!1,Zi=0,$t=0,Aa=0,lr=0,_f=0,ri=0,Zr=0,fo=null,Fn=null,xf=!1,yf=0,Bl=1/0,zl=null,Ra=null,Mn=0,wa=null,Kr=null,Qr=0,Sf=0,Mf=null,xg=null,ho=0,Ef=null;function Zn(){if((Lt&2)!==0&&Et!==0)return Et&-Et;if(P.T!==null){var t=zr;return t!==0?t:Df()}return bt()}function yg(){ri===0&&(ri=(Et&536870912)===0||wt?W():536870912);var t=ai.current;return t!==null&&(t.flags|=32),ri}function Kn(t,n,a){(t===kt&&(Nt===2||Nt===9)||t.cancelPendingCommit!==null)&&(Jr(t,0),Ca(t,Et,ri,!1)),Fe(t,a),((Lt&2)===0||t!==kt)&&(t===kt&&((Lt&2)===0&&(lr|=a),$t===4&&Ca(t,Et,ri,!1)),Ui(t))}function Sg(t,n,a){if((Lt&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Le(t,n),u=o?Yx(t,n):Af(t,n,!0),h=o;do{if(u===0){Yr&&!o&&Ca(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!jx(a)){u=Af(t,n,!1),h=!1;continue}if(u===2){if(h=n,t.errorRecoveryDisabledLanes&h)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;e:{var T=t;u=fo;var B=T.current.memoizedState.isDehydrated;if(B&&(Jr(T,M).flags|=256),M=Af(T,M,!1),M!==2){if(vf&&!B){T.errorRecoveryDisabledLanes|=h,lr|=h,u=4;break e}h=Fn,Fn=u,h!==null&&(Fn===null?Fn=h:Fn.push.apply(Fn,h))}u=M}if(h=!1,u!==2)continue}}if(u===1){Jr(t,0),Ca(t,n,0,!0);break}e:{switch(o=t,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ca(o,n,ri,!Ta);break e;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=yf+300-Be(),10<u)){if(Ca(o,n,ri,!Ta),je(o,0,!0)!==0)break e;o.timeoutHandle=Kg(Mg.bind(null,o,a,Fn,zl,xf,n,ri,lr,Zr,Ta,h,2,-0,0),u);break e}Mg(o,a,Fn,zl,xf,n,ri,lr,Zr,Ta,h,0,-0,0)}}break}while(!0);Ui(t)}function Mg(t,n,a,o,u,h,M,T,B,te,me,_e,re,se){if(t.timeoutHandle=-1,_e=n.subtreeFlags,(_e&8192||(_e&16785408)===16785408)&&(yo={stylesheets:null,count:0,unsuspend:Ry},mg(n),_e=Cy(),_e!==null)){t.cancelPendingCommit=_e(Cg.bind(null,t,n,h,a,o,u,M,T,B,me,1,re,se)),Ca(t,h,M,!te);return}Cg(t,n,h,a,o,u,M,T,B)}function jx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Xn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ca(t,n,a,o){n&=~_f,n&=~lr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var h=31-Re(u),M=1<<h;o[h]=-1,u&=~M}a!==0&&xe(t,a,n)}function Fl(){return(Lt&6)===0?(po(0),!1):!0}function bf(){if(xt!==null){if(Nt===0)var t=xt.return;else t=xt,Gi=nr=null,Hu(t),Xr=null,io=0,t=xt;for(;t!==null;)tg(t.alternate,t),t=t.return;xt=null}}function Jr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,uy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),bf(),kt=t,xt=a=zi(t.current,null),Et=n,Nt=0,Yn=null,Ta=!1,Yr=Le(t,n),vf=!1,Zr=ri=_f=lr=Aa=$t=0,Fn=fo=null,xf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Re(o),h=1<<u;n|=t[u],o&=~h}return Zi=n,ol(),a}function Eg(t,n){gt=null,P.H=Al,n===Ys||n===gl?(n=Hp(),Nt=3):n===Bp?(n=Hp(),Nt=4):Nt=n===Gm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,xt===null&&($t=1,Ul(t,ei(n,t.current)))}function bg(){var t=P.H;return P.H=Al,t===null?Al:t}function Tg(){var t=P.A;return P.A=Xx,t}function Tf(){$t=4,Ta||(Et&4194048)!==Et&&ai.current!==null||(Yr=!0),(Aa&134217727)===0&&(lr&134217727)===0||kt===null||Ca(kt,Et,ri,!1)}function Af(t,n,a){var o=Lt;Lt|=2;var u=bg(),h=Tg();(kt!==t||Et!==n)&&(zl=null,Jr(t,n)),n=!1;var M=$t;e:do try{if(Nt!==0&&xt!==null){var T=xt,B=Yn;switch(Nt){case 8:bf(),M=6;break e;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var te=Nt;if(Nt=0,Yn=null,$r(t,T,B,te),a&&Yr){M=0;break e}break;default:te=Nt,Nt=0,Yn=null,$r(t,T,B,te)}}qx(),M=$t;break}catch(me){Eg(t,me)}while(!0);return n&&t.shellSuspendCounter++,Gi=nr=null,Lt=o,P.H=u,P.A=h,xt===null&&(kt=null,Et=0,ol()),M}function qx(){for(;xt!==null;)Ag(xt)}function Yx(t,n){var a=Lt;Lt|=2;var o=bg(),u=Tg();kt!==t||Et!==n?(zl=null,Bl=Be()+500,Jr(t,n)):Yr=Le(t,n);e:do try{if(Nt!==0&&xt!==null){n=xt;var h=Yn;t:switch(Nt){case 1:Nt=0,Yn=null,$r(t,n,h,1);break;case 2:case 9:if(zp(h)){Nt=0,Yn=null,Rg(n);break}n=function(){Nt!==2&&Nt!==9||kt!==t||(Nt=7),Ui(t)},h.then(n,n);break e;case 3:Nt=7;break e;case 4:Nt=5;break e;case 7:zp(h)?(Nt=0,Yn=null,Rg(n)):(Nt=0,Yn=null,$r(t,n,h,7));break;case 5:var M=null;switch(xt.tag){case 26:M=xt.memoizedState;case 5:case 27:var T=xt;if(!M||lv(M)){Nt=0,Yn=null;var B=T.sibling;if(B!==null)xt=B;else{var te=T.return;te!==null?(xt=te,Hl(te)):xt=null}break t}}Nt=0,Yn=null,$r(t,n,h,5);break;case 6:Nt=0,Yn=null,$r(t,n,h,6);break;case 8:bf(),$t=6;break e;default:throw Error(r(462))}}Zx();break}catch(me){Eg(t,me)}while(!0);return Gi=nr=null,P.H=o,P.A=u,Lt=a,xt!==null?0:(kt=null,Et=0,ol(),$t)}function Zx(){for(;xt!==null&&!st();)Ag(xt)}function Ag(t){var n=$m(t.alternate,t,Zi);t.memoizedProps=t.pendingProps,n===null?Hl(t):xt=n}function Rg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=qm(a,n,n.pendingProps,n.type,void 0,Et);break;case 11:n=qm(a,n,n.pendingProps,n.type.render,n.ref,Et);break;case 5:Hu(n);default:tg(a,n),n=xt=wp(n,Zi),n=$m(a,n,Zi)}t.memoizedProps=t.pendingProps,n===null?Hl(t):xt=n}function $r(t,n,a,o){Gi=nr=null,Hu(n),Xr=null,io=0;var u=n.return;try{if(zx(t,u,n,a,Et)){$t=1,Ul(t,ei(a,t.current)),xt=null;return}}catch(h){if(u!==null)throw xt=u,h;$t=1,Ul(t,ei(a,t.current)),xt=null;return}n.flags&32768?(wt||o===1?t=!0:Yr||(Et&536870912)!==0?t=!1:(Ta=t=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),wg(n,t)):Hl(n)}function Hl(t){var n=t;do{if((n.flags&32768)!==0){wg(n,Ta);return}t=n.return;var a=Hx(n.alternate,n,Zi);if(a!==null){xt=a;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=t}while(n!==null);$t===0&&($t=5)}function wg(t,n){do{var a=Gx(t.alternate,t);if(a!==null){a.flags&=32767,xt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){xt=t;return}xt=t=a}while(t!==null);$t=6,xt=null}function Cg(t,n,a,o,u,h,M,T,B){t.cancelPendingCommit=null;do Gl();while(Mn!==0);if((Lt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=mu,Te(t,a,h,M,T,B),t===kt&&(xt=kt=null,Et=0),Kr=n,wa=t,Qr=a,Sf=h,Mf=u,xg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,$x(Gt,function(){return Og(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=Q.p,Q.p=2,M=Lt,Lt|=4;try{Vx(t,n,a)}finally{Lt=M,Q.p=u,P.T=o}}Mn=1,Dg(),Ug(),Lg()}}function Dg(){if(Mn===1){Mn=0;var t=wa,n=Kr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=Q.p;Q.p=2;var u=Lt;Lt|=4;try{hg(n,t);var h=zf,M=_p(t.containerInfo),T=h.focusedElem,B=h.selectionRange;if(M!==T&&T&&T.ownerDocument&&vp(T.ownerDocument.documentElement,T)){if(B!==null&&uu(T)){var te=B.start,me=B.end;if(me===void 0&&(me=te),"selectionStart"in T)T.selectionStart=te,T.selectionEnd=Math.min(me,T.value.length);else{var _e=T.ownerDocument||document,re=_e&&_e.defaultView||window;if(re.getSelection){var se=re.getSelection(),at=T.textContent.length,tt=Math.min(B.start,at),Bt=B.end===void 0?tt:Math.min(B.end,at);!se.extend&&tt>Bt&&(M=Bt,Bt=tt,tt=M);var Y=gp(T,tt),X=gp(T,Bt);if(Y&&X&&(se.rangeCount!==1||se.anchorNode!==Y.node||se.anchorOffset!==Y.offset||se.focusNode!==X.node||se.focusOffset!==X.offset)){var $=_e.createRange();$.setStart(Y.node,Y.offset),se.removeAllRanges(),tt>Bt?(se.addRange($),se.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),se.addRange($))}}}}for(_e=[],se=T;se=se.parentNode;)se.nodeType===1&&_e.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_e.length;T++){var ge=_e[T];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}$l=!!Bf,zf=Bf=null}finally{Lt=u,Q.p=o,P.T=a}}t.current=n,Mn=2}}function Ug(){if(Mn===2){Mn=0;var t=wa,n=Kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=Q.p;Q.p=2;var u=Lt;Lt|=4;try{lg(t,n.alternate,n)}finally{Lt=u,Q.p=o,P.T=a}}Mn=3}}function Lg(){if(Mn===4||Mn===3){Mn=0,et();var t=wa,n=Kr,a=Qr,o=xg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,Kr=wa=null,Ng(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ra=null),Ut(a),n=n.stateNode,ce&&typeof ce.onCommitFiberRoot=="function")try{ce.onCommitFiberRoot(J,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=Q.p,Q.p=2,P.T=null;try{for(var h=t.onRecoverableError,M=0;M<o.length;M++){var T=o[M];h(T.value,{componentStack:T.stack})}}finally{P.T=n,Q.p=u}}(Qr&3)!==0&&Gl(),Ui(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Ef?ho++:(ho=0,Ef=t):ho=0,po(0)}}function Ng(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,js(n)))}function Gl(t){return Dg(),Ug(),Lg(),Og()}function Og(){if(Mn!==5)return!1;var t=wa,n=Sf;Sf=0;var a=Ut(Qr),o=P.T,u=Q.p;try{Q.p=32>a?32:a,P.T=null,a=Mf,Mf=null;var h=wa,M=Qr;if(Mn=0,Kr=wa=null,Qr=0,(Lt&6)!==0)throw Error(r(331));var T=Lt;if(Lt|=4,vg(h.current),pg(h,h.current,M,a),Lt=T,po(0,!1),ce&&typeof ce.onPostCommitFiberRoot=="function")try{ce.onPostCommitFiberRoot(J,h)}catch{}return!0}finally{Q.p=u,P.T=o,Ng(t,n)}}function Pg(t,n,a){n=ei(a,n),n=ef(t.stateNode,n,2),t=_a(t,n,2),t!==null&&(Fe(t,2),Ui(t))}function Ht(t,n,a){if(t.tag===3)Pg(t,t,a);else for(;n!==null;){if(n.tag===3){Pg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ra===null||!Ra.has(o))){t=ei(a,t),a=Fm(2),o=_a(n,a,2),o!==null&&(Hm(a,o,n,t),Fe(o,2),Ui(o));break}}n=n.return}}function Rf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Wx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(vf=!0,u.add(a),t=Kx.bind(null,t,n,a),n.then(t,t))}function Kx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,kt===t&&(Et&a)===a&&($t===4||$t===3&&(Et&62914560)===Et&&300>Be()-yf?(Lt&2)===0&&Jr(t,0):_f|=a,Zr===Et&&(Zr=0)),Ui(t)}function Ig(t,n){n===0&&(n=Ce()),t=Or(t,n),t!==null&&(Fe(t,n),Ui(t))}function Qx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Ig(t,a)}function Jx(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Ig(t,a)}function $x(t,n){return F(t,n)}var Vl=null,es=null,wf=!1,kl=!1,Cf=!1,cr=0;function Ui(t){t!==es&&t.next===null&&(es===null?Vl=es=t:es=es.next=t),kl=!0,wf||(wf=!0,ty())}function po(t,n){if(!Cf&&kl){Cf=!0;do for(var a=!1,o=Vl;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var M=o.suspendedLanes,T=o.pingedLanes;h=(1<<31-Re(42|t)+1)-1,h&=u&~(M&~T),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Hg(o,h))}else h=Et,h=je(o,o===kt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Le(o,h)||(a=!0,Hg(o,h));o=o.next}while(a);Cf=!1}}function ey(){Bg()}function Bg(){kl=wf=!1;var t=0;cr!==0&&(cy()&&(t=cr),cr=0);for(var n=Be(),a=null,o=Vl;o!==null;){var u=o.next,h=zg(o,n);h===0?(o.next=null,a===null?Vl=u:a.next=u,u===null&&(es=a)):(a=o,(t!==0||(h&3)!==0)&&(kl=!0)),o=u}po(t)}function zg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var M=31-Re(h),T=1<<M,B=u[M];B===-1?((T&a)===0||(T&o)!==0)&&(u[M]=lt(T,n)):B<=n&&(t.expiredLanes|=T),h&=~T}if(n=kt,a=Et,a=je(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Nt===2||Nt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Dt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Le(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Dt(o),Ut(a)){case 2:case 8:a=ot;break;case 32:a=Gt;break;case 268435456:a=D;break;default:a=Gt}return o=Fg.bind(null,t),a=F(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Dt(o),t.callbackPriority=2,t.callbackNode=null,2}function Fg(t,n){if(Mn!==0&&Mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Gl()&&t.callbackNode!==a)return null;var o=Et;return o=je(t,t===kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Sg(t,o,n),zg(t,Be()),t.callbackNode!=null&&t.callbackNode===a?Fg.bind(null,t):null)}function Hg(t,n){if(Gl())return null;Sg(t,n,!0)}function ty(){fy(function(){(Lt&6)!==0?F(Ve,ey):Bg()})}function Df(){return cr===0&&(cr=W()),cr}function Gg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:el(""+t)}function Vg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function ny(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=Gg((u[Kt]||null).action),M=o.submitter;M&&(n=(n=M[Kt]||null)?Gg(n.formAction):M.getAttribute("formAction"),n!==null&&(h=n,M=null));var T=new al("action","action",null,o,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(cr!==0){var B=M?Vg(u,M):new FormData(u);Zu(a,{pending:!0,data:B,method:u.method,action:h},null,B)}}else typeof h=="function"&&(T.preventDefault(),B=M?Vg(u,M):new FormData(u),Zu(a,{pending:!0,data:B,method:u.method,action:h},h,B))},currentTarget:u}]})}}for(var Uf=0;Uf<pu.length;Uf++){var Lf=pu[Uf],iy=Lf.toLowerCase(),ay=Lf[0].toUpperCase()+Lf.slice(1);pi(iy,"on"+ay)}pi(Sp,"onAnimationEnd"),pi(Mp,"onAnimationIteration"),pi(Ep,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(Sx,"onTransitionRun"),pi(Mx,"onTransitionStart"),pi(Ex,"onTransitionCancel"),pi(bp,"onTransitionEnd"),q("onMouseEnter",["mouseout","mouseover"]),q("onMouseLeave",["mouseout","mouseover"]),q("onPointerEnter",["pointerout","pointerover"]),q("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ry=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mo));function kg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var M=o.length-1;0<=M;M--){var T=o[M],B=T.instance,te=T.currentTarget;if(T=T.listener,B!==h&&u.isPropagationStopped())break e;h=T,u.currentTarget=te;try{h(u)}catch(me){Dl(me)}u.currentTarget=null,h=B}else for(M=0;M<o.length;M++){if(T=o[M],B=T.instance,te=T.currentTarget,T=T.listener,B!==h&&u.isPropagationStopped())break e;h=T,u.currentTarget=te;try{h(u)}catch(me){Dl(me)}u.currentTarget=null,h=B}}}}function yt(t,n){var a=n[br];a===void 0&&(a=n[br]=new Set);var o=t+"__bubble";a.has(o)||(Xg(n,t,2,!1),a.add(o))}function Nf(t,n,a){var o=0;n&&(o|=4),Xg(a,t,o,n)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Of(t){if(!t[Xl]){t[Xl]=!0,Jo.forEach(function(a){a!=="selectionchange"&&(ry.has(a)||Nf(a,!1,t),Nf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Xl]||(n[Xl]=!0,Nf("selectionchange",!1,n))}}function Xg(t,n,a,o){switch(pv(n)){case 2:var u=Ly;break;case 8:u=Ny;break;default:u=Yf}a=u.bind(null,n,a,t),u=void 0,!tu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Pf(t,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var T=o.stateNode.containerInfo;if(T===u)break;if(M===4)for(M=o.return;M!==null;){var B=M.tag;if((B===3||B===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;T!==null;){if(M=Ii(T),M===null)return;if(B=M.tag,B===5||B===6||B===26||B===27){o=h=M;continue e}T=T.parentNode}}o=o.return}Qd(function(){var te=h,me=$c(a),_e=[];e:{var re=Tp.get(t);if(re!==void 0){var se=al,at=t;switch(t){case"keypress":if(nl(a)===0)break e;case"keydown":case"keyup":se=$0;break;case"focusin":at="focus",se=ru;break;case"focusout":at="blur",se=ru;break;case"beforeblur":case"afterblur":se=ru;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=G0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=nx;break;case Sp:case Mp:case Ep:se=X0;break;case bp:se=ax;break;case"scroll":case"scrollend":se=F0;break;case"wheel":se=sx;break;case"copy":case"cut":case"paste":se=j0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=np;break;case"toggle":case"beforetoggle":se=lx}var tt=(n&4)!==0,Bt=!tt&&(t==="scroll"||t==="scrollend"),Y=tt?re!==null?re+"Capture":null:re;tt=[];for(var X=te,$;X!==null;){var ge=X;if($=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||$===null||Y===null||(ge=Ns(X,Y),ge!=null&&tt.push(go(X,ge,$))),Bt)break;X=X.return}0<tt.length&&(re=new se(re,at,null,a,me),_e.push({event:re,listeners:tt}))}}if((n&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",se=t==="mouseout"||t==="pointerout",re&&a!==Jc&&(at=a.relatedTarget||a.fromElement)&&(Ii(at)||at[Ti]))break e;if((se||re)&&(re=me.window===me?me:(re=me.ownerDocument)?re.defaultView||re.parentWindow:window,se?(at=a.relatedTarget||a.toElement,se=te,at=at?Ii(at):null,at!==null&&(Bt=c(at),tt=at.tag,at!==Bt||tt!==5&&tt!==27&&tt!==6)&&(at=null)):(se=null,at=te),se!==at)){if(tt=ep,ge="onMouseLeave",Y="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(tt=np,ge="onPointerLeave",Y="onPointerEnter",X="pointer"),Bt=se==null?re:qa(se),$=at==null?re:qa(at),re=new tt(ge,X+"leave",se,a,me),re.target=Bt,re.relatedTarget=$,ge=null,Ii(me)===te&&(tt=new tt(Y,X+"enter",at,a,me),tt.target=$,tt.relatedTarget=Bt,ge=tt),Bt=ge,se&&at)t:{for(tt=se,Y=at,X=0,$=tt;$;$=ts($))X++;for($=0,ge=Y;ge;ge=ts(ge))$++;for(;0<X-$;)tt=ts(tt),X--;for(;0<$-X;)Y=ts(Y),$--;for(;X--;){if(tt===Y||Y!==null&&tt===Y.alternate)break t;tt=ts(tt),Y=ts(Y)}tt=null}else tt=null;se!==null&&Wg(_e,re,se,tt,!1),at!==null&&Bt!==null&&Wg(_e,Bt,at,tt,!0)}}e:{if(re=te?qa(te):window,se=re.nodeName&&re.nodeName.toLowerCase(),se==="select"||se==="input"&&re.type==="file")var Xe=up;else if(lp(re))if(fp)Xe=_x;else{Xe=gx;var vt=mx}else se=re.nodeName,!se||se.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?te&&Qc(te.elementType)&&(Xe=up):Xe=vx;if(Xe&&(Xe=Xe(t,te))){cp(_e,Xe,a,me);break e}vt&&vt(t,re,te),t==="focusout"&&te&&re.type==="number"&&te.memoizedProps.value!=null&&Tn(re,"number",re.value)}switch(vt=te?qa(te):window,t){case"focusin":(lp(vt)||vt.contentEditable==="true")&&(Ur=vt,fu=te,Gs=null);break;case"focusout":Gs=fu=Ur=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,xp(_e,a,me);break;case"selectionchange":if(yx)break;case"keydown":case"keyup":xp(_e,a,me)}var Ze;if(ou)e:{switch(t){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else Dr?sp(t,a)&&(it="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(it="onCompositionStart");it&&(ip&&a.locale!=="ko"&&(Dr||it!=="onCompositionStart"?it==="onCompositionEnd"&&Dr&&(Ze=Jd()):(pa=me,nu="value"in pa?pa.value:pa.textContent,Dr=!0)),vt=Wl(te,it),0<vt.length&&(it=new tp(it,t,null,a,me),_e.push({event:it,listeners:vt}),Ze?it.data=Ze:(Ze=op(a),Ze!==null&&(it.data=Ze)))),(Ze=ux?fx(t,a):hx(t,a))&&(it=Wl(te,"onBeforeInput"),0<it.length&&(vt=new tp("onBeforeInput","beforeinput",null,a,me),_e.push({event:vt,listeners:it}),vt.data=Ze)),ny(_e,t,te,a,me)}kg(_e,n)})}function go(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Wl(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Ns(t,a),u!=null&&o.unshift(go(t,u,h)),u=Ns(t,n),u!=null&&o.push(go(t,u,h))),t.tag===3)return o;t=t.return}return[]}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Wg(t,n,a,o,u){for(var h=n._reactName,M=[];a!==null&&a!==o;){var T=a,B=T.alternate,te=T.stateNode;if(T=T.tag,B!==null&&B===o)break;T!==5&&T!==26&&T!==27||te===null||(B=te,u?(te=Ns(a,h),te!=null&&M.unshift(go(a,te,B))):u||(te=Ns(a,h),te!=null&&M.push(go(a,te,B)))),a=a.return}M.length!==0&&t.push({event:n,listeners:M})}var sy=/\r\n?/g,oy=/\u0000|\uFFFD/g;function jg(t){return(typeof t=="string"?t:""+t).replace(sy,`
`).replace(oy,"")}function qg(t,n){return n=jg(n),jg(t)===n}function jl(){}function It(t,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Pn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Pn(t,""+o);break;case"className":He(t,"class",o);break;case"tabIndex":He(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":He(t,a,o);break;case"style":Zd(t,o,h);break;case"data":if(n!=="object"){He(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=el(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&It(t,n,"name",u.name,u,null),It(t,n,"formEncType",u.formEncType,u,null),It(t,n,"formMethod",u.formMethod,u,null),It(t,n,"formTarget",u.formTarget,u,null)):(It(t,n,"encType",u.encType,u,null),It(t,n,"method",u.method,u,null),It(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=el(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=jl);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=el(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":yt("beforetoggle",t),yt("toggle",t),Oe(t,"popover",o);break;case"xlinkActuate":Pe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Pe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Pe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Pe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Pe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Pe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Oe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=B0.get(a)||a,Oe(t,a,o))}}function If(t,n,a,o,u,h){switch(a){case"style":Zd(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Pn(t,o):(typeof o=="number"||typeof o=="bigint")&&Pn(t,""+o);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=jl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$o.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=t[Kt]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Oe(t,a,o)}}}function En(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var M=a[h];if(M!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(t,n,h,M,a,null)}}u&&It(t,n,"srcSet",a.srcSet,a,null),o&&It(t,n,"src",a.src,a,null);return;case"input":yt("invalid",t);var T=h=M=u=null,B=null,te=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":u=me;break;case"type":M=me;break;case"checked":B=me;break;case"defaultChecked":te=me;break;case"value":h=me;break;case"defaultValue":T=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,n));break;default:It(t,n,o,me,a,null)}}Un(t,h,T,B,te,M,u,!1),_t(t);return;case"select":yt("invalid",t),o=M=h=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":h=T;break;case"defaultValue":M=T;break;case"multiple":o=T;default:It(t,n,u,T,a,null)}n=h,a=M,t.multiple=!!o,n!=null?Qt(t,!!o,n,!1):a!=null&&Qt(t,!!o,a,!0);return;case"textarea":yt("invalid",t),h=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(T=a[M],T!=null))switch(M){case"value":o=T;break;case"defaultValue":u=T;break;case"children":h=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:It(t,n,M,T,a,null)}Rr(t,o,u,h),_t(t);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:It(t,n,B,o,a,null)}return;case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(o=0;o<mo.length;o++)yt(mo[o],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(o=a[te],o!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(t,n,te,o,a,null)}return;default:if(Qc(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&If(t,n,me,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&It(t,n,T,o,a,null))}function ly(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,M=null,T=null,B=null,te=null,me=null;for(se in a){var _e=a[se];if(a.hasOwnProperty(se)&&_e!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":B=_e;default:o.hasOwnProperty(se)||It(t,n,se,null,o,_e)}}for(var re in o){var se=o[re];if(_e=a[re],o.hasOwnProperty(re)&&(se!=null||_e!=null))switch(re){case"type":h=se;break;case"name":u=se;break;case"checked":te=se;break;case"defaultChecked":me=se;break;case"value":M=se;break;case"defaultValue":T=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(r(137,n));break;default:se!==_e&&It(t,n,re,se,o,_e)}}Ft(t,M,T,B,te,me,h,u);return;case"select":se=M=T=re=null;for(h in a)if(B=a[h],a.hasOwnProperty(h)&&B!=null)switch(h){case"value":break;case"multiple":se=B;default:o.hasOwnProperty(h)||It(t,n,h,null,o,B)}for(u in o)if(h=o[u],B=a[u],o.hasOwnProperty(u)&&(h!=null||B!=null))switch(u){case"value":re=h;break;case"defaultValue":T=h;break;case"multiple":M=h;default:h!==B&&It(t,n,u,h,o,B)}n=T,a=M,o=se,re!=null?Qt(t,!!a,re,!1):!!o!=!!a&&(n!=null?Qt(t,!!a,n,!0):Qt(t,!!a,a?[]:"",!1));return;case"textarea":se=re=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:It(t,n,T,null,o,u)}for(M in o)if(u=o[M],h=a[M],o.hasOwnProperty(M)&&(u!=null||h!=null))switch(M){case"value":re=u;break;case"defaultValue":se=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&It(t,n,M,u,o,h)}yn(t,re,se);return;case"option":for(var at in a)if(re=a[at],a.hasOwnProperty(at)&&re!=null&&!o.hasOwnProperty(at))switch(at){case"selected":t.selected=!1;break;default:It(t,n,at,null,o,re)}for(B in o)if(re=o[B],se=a[B],o.hasOwnProperty(B)&&re!==se&&(re!=null||se!=null))switch(B){case"selected":t.selected=re&&typeof re!="function"&&typeof re!="symbol";break;default:It(t,n,B,re,o,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)re=a[tt],a.hasOwnProperty(tt)&&re!=null&&!o.hasOwnProperty(tt)&&It(t,n,tt,null,o,re);for(te in o)if(re=o[te],se=a[te],o.hasOwnProperty(te)&&re!==se&&(re!=null||se!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(r(137,n));break;default:It(t,n,te,re,o,se)}return;default:if(Qc(n)){for(var Bt in a)re=a[Bt],a.hasOwnProperty(Bt)&&re!==void 0&&!o.hasOwnProperty(Bt)&&If(t,n,Bt,void 0,o,re);for(me in o)re=o[me],se=a[me],!o.hasOwnProperty(me)||re===se||re===void 0&&se===void 0||If(t,n,me,re,o,se);return}}for(var Y in a)re=a[Y],a.hasOwnProperty(Y)&&re!=null&&!o.hasOwnProperty(Y)&&It(t,n,Y,null,o,re);for(_e in o)re=o[_e],se=a[_e],!o.hasOwnProperty(_e)||re===se||re==null&&se==null||It(t,n,_e,re,o,se)}var Bf=null,zf=null;function ql(t){return t.nodeType===9?t:t.ownerDocument}function Yg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Ff(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Hf=null;function cy(){var t=window.event;return t&&t.type==="popstate"?t===Hf?!1:(Hf=t,!0):(Hf=null,!1)}var Kg=typeof setTimeout=="function"?setTimeout:void 0,uy=typeof clearTimeout=="function"?clearTimeout:void 0,Qg=typeof Promise=="function"?Promise:void 0,fy=typeof queueMicrotask=="function"?queueMicrotask:typeof Qg<"u"?function(t){return Qg.resolve(null).then(t).catch(hy)}:Kg;function hy(t){setTimeout(function(){throw t})}function Da(t){return t==="head"}function Jg(t,n){var a=n,o=0,u=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<o&&8>o){a=o;var M=t.ownerDocument;if(a&1&&vo(M.documentElement),a&2&&vo(M.body),a&4)for(a=M.head,vo(a),M=a.firstChild;M;){var T=M.nextSibling,B=M.nodeName;M[Ai]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=T}}if(u===0){t.removeChild(h),To(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=h}while(a);To(n)}function Gf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Gf(a),Ar(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function dy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ai])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=gi(t.nextSibling),t===null)break}return null}function py(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=gi(t.nextSibling),t===null))return null;return t}function Vf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function my(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function gi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var kf=null;function $g(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function ev(t,n,a){switch(n=ql(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function vo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ar(t)}var si=new Map,tv=new Set;function Yl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ki=Q.d;Q.d={f:gy,r:vy,D:_y,C:xy,L:yy,m:Sy,X:Ey,S:My,M:by};function gy(){var t=Ki.f(),n=Fl();return t||n}function vy(t){var n=ha(t);n!==null&&n.tag===5&&n.type==="form"?Sm(n):Ki.r(t)}var ns=typeof document>"u"?null:document;function nv(t,n,a){var o=ns;if(o&&typeof n=="string"&&n){var u=mn(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),tv.has(u)||(tv.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),En(n,"link",t),an(n),o.head.appendChild(n)))}}function _y(t){Ki.D(t),nv("dns-prefetch",t,null)}function xy(t,n){Ki.C(t,n),nv("preconnect",t,n)}function yy(t,n,a){Ki.L(t,n,a);var o=ns;if(o&&t&&n){var u='link[rel="preload"][as="'+mn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+mn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+mn(a.imageSizes)+'"]')):u+='[href="'+mn(t)+'"]';var h=u;switch(n){case"style":h=is(t);break;case"script":h=as(t)}si.has(h)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),si.set(h,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(_o(h))||n==="script"&&o.querySelector(xo(h))||(n=o.createElement("link"),En(n,"link",t),an(n),o.head.appendChild(n)))}}function Sy(t,n){Ki.m(t,n);var a=ns;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+mn(o)+'"][href="'+mn(t)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=as(t)}if(!si.has(h)&&(t=g({rel:"modulepreload",href:t},n),si.set(h,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xo(h)))return}o=a.createElement("link"),En(o,"link",t),an(o),a.head.appendChild(o)}}}function My(t,n,a){Ki.S(t,n,a);var o=ns;if(o&&t){var u=da(o).hoistableStyles,h=is(t);n=n||"default";var M=u.get(h);if(!M){var T={loading:0,preload:null};if(M=o.querySelector(_o(h)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=si.get(h))&&Xf(t,a);var B=M=o.createElement("link");an(B),En(B,"link",t),B._p=new Promise(function(te,me){B.onload=te,B.onerror=me}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Zl(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:T},u.set(h,M)}}}function Ey(t,n){Ki.X(t,n);var a=ns;if(a&&t){var o=da(a).hoistableScripts,u=as(t),h=o.get(u);h||(h=a.querySelector(xo(u)),h||(t=g({src:t,async:!0},n),(n=si.get(u))&&Wf(t,n),h=a.createElement("script"),an(h),En(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function by(t,n){Ki.M(t,n);var a=ns;if(a&&t){var o=da(a).hoistableScripts,u=as(t),h=o.get(u);h||(h=a.querySelector(xo(u)),h||(t=g({src:t,async:!0,type:"module"},n),(n=si.get(u))&&Wf(t,n),h=a.createElement("script"),an(h),En(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function iv(t,n,a,o){var u=(u=ne.current)?Yl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=is(a.href),a=da(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=is(a.href);var h=da(u).hoistableStyles,M=h.get(t);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,M),(h=u.querySelector(_o(t)))&&!h._p&&(M.instance=h,M.state.loading=5),si.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},si.set(t,a),h||Ty(u,t,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=as(a),a=da(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function is(t){return'href="'+mn(t)+'"'}function _o(t){return'link[rel="stylesheet"]['+t+"]"}function av(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Ty(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),En(n,"link",a),an(n),t.head.appendChild(n))}function as(t){return'[src="'+mn(t)+'"]'}function xo(t){return"script[async]"+t}function rv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+mn(a.href)+'"]');if(o)return n.instance=o,an(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),an(o),En(o,"style",u),Zl(o,a.precedence,t),n.instance=o;case"stylesheet":u=is(a.href);var h=t.querySelector(_o(u));if(h)return n.state.loading|=4,n.instance=h,an(h),h;o=av(a),(u=si.get(u))&&Xf(o,u),h=(t.ownerDocument||t).createElement("link"),an(h);var M=h;return M._p=new Promise(function(T,B){M.onload=T,M.onerror=B}),En(h,"link",o),n.state.loading|=4,Zl(h,a.precedence,t),n.instance=h;case"script":return h=as(a.src),(u=t.querySelector(xo(h)))?(n.instance=u,an(u),u):(o=a,(u=si.get(h))&&(o=g({},a),Wf(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),an(u),En(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Zl(o,a.precedence,t));return n.instance}function Zl(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,M=0;M<o.length;M++){var T=o[M];if(T.dataset.precedence===n)h=T;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Xf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Wf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Kl=null;function sv(t,n,a){if(Kl===null){var o=new Map,u=Kl=new Map;u.set(a,o)}else u=Kl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var h=a[u];if(!(h[Ai]||h[un]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var M=h.getAttribute(n)||"";M=t+M;var T=o.get(M);T?T.push(h):o.set(M,[h])}}return o}function ov(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Ay(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function lv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var yo=null;function Ry(){}function wy(t,n,a){if(yo===null)throw Error(r(475));var o=yo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=is(a.href),h=t.querySelector(_o(u));if(h){t=h._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=Ql.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=h,an(h);return}h=t.ownerDocument||t,a=av(a),(u=si.get(u))&&Xf(a,u),h=h.createElement("link"),an(h);var M=h;M._p=new Promise(function(T,B){M.onload=T,M.onerror=B}),En(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Ql.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function Cy(){if(yo===null)throw Error(r(475));var t=yo;return t.stylesheets&&t.count===0&&jf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&jf(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Ql(){if(this.count--,this.count===0){if(this.stylesheets)jf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Jl=null;function jf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Jl=new Map,n.forEach(Dy,t),Jl=null,Ql.call(t))}function Dy(t,n){if(!(n.state.loading&4)){var a=Jl.get(t);if(a)var o=a.get(null);else{a=new Map,Jl.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var M=u[h];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),h=a.get(M)||o,h===o&&a.set(null,u),a.set(M,u),this.count++,o=Ql.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var So={$$typeof:N,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function Uy(t,n,a,o,u,h,M,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=De(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=De(0),this.hiddenUpdates=De(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function cv(t,n,a,o,u,h,M,T,B,te,me,_e){return t=new Uy(t,n,a,M,T,B,te,_e),n=1,h===!0&&(n|=24),h=Wn(3,null,null,n),t.current=h,h.stateNode=t,n=Au(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Du(h),t}function uv(t){return t?(t=Pr,t):Pr}function fv(t,n,a,o,u,h){u=uv(u),o.context===null?o.context=u:o.pendingContext=u,o=va(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=_a(t,o,n),a!==null&&(Kn(a,t,n),Ks(a,t,n))}function hv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function qf(t,n){hv(t,n),(t=t.alternate)&&hv(t,n)}function dv(t){if(t.tag===13){var n=Or(t,67108864);n!==null&&Kn(n,t,67108864),qf(t,67108864)}}var $l=!0;function Ly(t,n,a,o){var u=P.T;P.T=null;var h=Q.p;try{Q.p=2,Yf(t,n,a,o)}finally{Q.p=h,P.T=u}}function Ny(t,n,a,o){var u=P.T;P.T=null;var h=Q.p;try{Q.p=8,Yf(t,n,a,o)}finally{Q.p=h,P.T=u}}function Yf(t,n,a,o){if($l){var u=Zf(o);if(u===null)Pf(t,n,o,ec,a),mv(t,o);else if(Py(u,t,n,a,o))o.stopPropagation();else if(mv(t,o),n&4&&-1<Oy.indexOf(t)){for(;u!==null;){var h=ha(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var M=Qe(h.pendingLanes);if(M!==0){var T=h;for(T.pendingLanes|=2,T.entangledLanes|=2;M;){var B=1<<31-Re(M);T.entanglements[1]|=B,M&=~B}Ui(h),(Lt&6)===0&&(Bl=Be()+500,po(0))}}break;case 13:T=Or(h,2),T!==null&&Kn(T,h,2),Fl(),qf(h,2)}if(h=Zf(o),h===null&&Pf(t,n,o,ec,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Pf(t,n,o,null,a)}}function Zf(t){return t=$c(t),Kf(t)}var ec=null;function Kf(t){if(ec=null,t=Ii(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ec=t,null}function pv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mt()){case Ve:return 2;case ot:return 8;case Gt:case Vt:return 32;case D:return 268435456;default:return 32}default:return 32}}var Qf=!1,Ua=null,La=null,Na=null,Mo=new Map,Eo=new Map,Oa=[],Oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mv(t,n){switch(t){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":Mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(n.pointerId)}}function bo(t,n,a,o,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=ha(n),n!==null&&dv(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Py(t,n,a,o,u){switch(n){case"focusin":return Ua=bo(Ua,t,n,a,o,u),!0;case"dragenter":return La=bo(La,t,n,a,o,u),!0;case"mouseover":return Na=bo(Na,t,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Mo.set(h,bo(Mo.get(h)||null,t,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Eo.set(h,bo(Eo.get(h)||null,t,n,a,o,u)),!0}return!1}function gv(t){var n=Ii(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,hi(t.priority,function(){if(a.tag===13){var o=Zn();o=rt(o);var u=Or(a,o);u!==null&&Kn(u,a,o),qf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Zf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Jc=o,a.target.dispatchEvent(o),Jc=null}else return n=ha(a),n!==null&&dv(n),t.blockedOn=a,!1;n.shift()}return!0}function vv(t,n,a){tc(t)&&a.delete(n)}function Iy(){Qf=!1,Ua!==null&&tc(Ua)&&(Ua=null),La!==null&&tc(La)&&(La=null),Na!==null&&tc(Na)&&(Na=null),Mo.forEach(vv),Eo.forEach(vv)}function nc(t,n){t.blockedOn===n&&(t.blockedOn=null,Qf||(Qf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Iy)))}var ic=null;function _v(t){ic!==t&&(ic=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ic===t&&(ic=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Kf(o||a)===null)continue;break}var h=ha(a);h!==null&&(t.splice(n,3),n-=3,Zu(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function To(t){function n(B){return nc(B,t)}Ua!==null&&nc(Ua,t),La!==null&&nc(La,t),Na!==null&&nc(Na,t),Mo.forEach(n),Eo.forEach(n);for(var a=0;a<Oa.length;a++){var o=Oa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)gv(a),a.blockedOn===null&&Oa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],M=u[Kt]||null;if(typeof h=="function")M||_v(a);else if(M){var T=null;if(h&&h.hasAttribute("formAction")){if(u=h,M=h[Kt]||null)T=M.formAction;else if(Kf(u)!==null)continue}else T=M.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),_v(a)}}}function Jf(t){this._internalRoot=t}ac.prototype.render=Jf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Zn();fv(a,o,t,n,null,null)},ac.prototype.unmount=Jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;fv(t.current,2,null,t,null,null),Fl(),n[Ti]=null}};function ac(t){this._internalRoot=t}ac.prototype.unstable_scheduleHydration=function(t){if(t){var n=bt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Oa.length&&n!==0&&n<Oa[a].priority;a++);Oa.splice(a,0,t),a===0&&gv(t)}};var xv=e.version;if(xv!=="19.1.1")throw Error(r(527,xv,"19.1.1"));Q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var By={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{J=rc.inject(By),ce=rc}catch{}}return Ro.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=Pm,h=Im,M=Bm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=cv(t,1,!1,null,null,a,o,u,h,M,T,null),t[Ti]=n.current,Of(t),new Jf(n)},Ro.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",h=Pm,M=Im,T=Bm,B=null,te=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(B=a.unstable_transitionCallbacks),a.formState!==void 0&&(te=a.formState)),n=cv(t,1,!0,n,a??null,o,u,h,M,T,B,te),n.context=uv(null),a=n.current,o=Zn(),o=rt(o),u=va(o),u.callback=null,_a(a,u,o),a=o,n.current.lanes=a,Fe(n,a),Ui(n),t[Ti]=n.current,Of(t),new ac(n)},Ro.version="19.1.1",Ro}var Cv;function qy(){if(Cv)return th.exports;Cv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),th.exports=jy(),th.exports}var Yy=qy();const Zy=I_(Yy);/**
 * react-router v7.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Dv="popstate";function Ky(s={}){function e(r,l){let{pathname:c,search:f,hash:d}=r.location;return Hh("",{pathname:c,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:Io(l)}return Jy(e,i,null,s)}function Yt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function bi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Qy(){return Math.random().toString(36).substring(2,10)}function Uv(s,e){return{usr:s.state,key:s.key,idx:e}}function Hh(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Rs(e):e,state:i,key:e&&e.key||r||Qy()}}function Io({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Rs(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function Jy(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,d="POP",m=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function v(){d="POP";let S=g(),_=S==null?null:S-p;p=S,m&&m({action:d,location:A.location,delta:_})}function y(S,_){d="PUSH";let O=Hh(A.location,S,_);p=g()+1;let N=Uv(O,p),U=A.createHref(O);try{f.pushState(N,"",U)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;l.location.assign(U)}c&&m&&m({action:d,location:A.location,delta:1})}function E(S,_){d="REPLACE";let O=Hh(A.location,S,_);p=g();let N=Uv(O,p),U=A.createHref(O);f.replaceState(N,"",U),c&&m&&m({action:d,location:A.location,delta:0})}function b(S){return $y(S)}let A={get action(){return d},get location(){return s(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Dv,v),m=S,()=>{l.removeEventListener(Dv,v),m=null}},createHref(S){return e(l,S)},createURL:b,encodeLocation(S){let _=b(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:E,go(S){return f.go(S)}};return A}function $y(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Yt(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Io(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function z_(s,e,i="/"){return eS(s,e,i,!1)}function eS(s,e,i,r){let l=typeof e=="string"?Rs(e):e,c=oa(l.pathname||"/",i);if(c==null)return null;let f=F_(s);tS(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let p=hS(c);d=uS(f[m],p,r)}return d}function F_(s,e=[],i=[],r="",l=!1){let c=(f,d,m=l,p)=>{let g={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&m)return;Yt(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let v=aa([r,g.relativePath]),y=i.concat(g);f.children&&f.children.length>0&&(Yt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),F_(f.children,e,y,v,m)),!(f.path==null&&!f.index)&&e.push({path:v,score:lS(v,f.index),routesMeta:y})};return s.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))c(f,d);else for(let m of H_(f.path))c(f,d,!0,m)}),e}function H_(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=H_(r.join("/")),d=[];return d.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&d.push(...f),d.map(m=>s.startsWith("/")&&m===""?"/":m)}function tS(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:cS(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var nS=/^:[\w-]+$/,iS=3,aS=2,rS=1,sS=10,oS=-2,Lv=s=>s==="*";function lS(s,e){let i=s.split("/"),r=i.length;return i.some(Lv)&&(r+=oS),e&&(r+=aS),i.filter(l=>!Lv(l)).reduce((l,c)=>l+(nS.test(c)?iS:c===""?rS:sS),r)}function cS(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function uS(s,e,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,g=c==="/"?e:e.slice(c.length)||"/",v=Fc({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),y=m.route;if(!v&&p&&i&&!r[r.length-1].route.index&&(v=Fc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:aa([c,v.pathname]),pathnameBase:gS(aa([c,v.pathnameBase])),route:y}),v.pathnameBase!=="/"&&(c=aa([c,v.pathnameBase]))}return f}function Fc(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=fS(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:v},y)=>{if(g==="*"){let b=d[y]||"";f=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const E=d[y];return v&&!E?p[g]=void 0:p[g]=(E||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:s}}function fS(s,e=!1,i=!0){bi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function hS(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return bi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function oa(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var G_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dS=s=>G_.test(s);function pS(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Rs(s):s,c;if(i)if(dS(i))c=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),bi(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?c=Nv(i.substring(1),"/"):c=Nv(i,e)}else c=e;return{pathname:c,search:vS(r),hash:_S(l)}}function Nv(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function rh(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function mS(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function V_(s){let e=mS(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function k_(s,e,i,r=!1){let l;typeof s=="string"?l=Rs(s):(l={...s},Yt(!l.pathname||!l.pathname.includes("?"),rh("?","pathname","search",l)),Yt(!l.pathname||!l.pathname.includes("#"),rh("#","pathname","hash",l)),Yt(!l.search||!l.search.includes("#"),rh("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,d;if(f==null)d=i;else{let v=e.length-1;if(!r&&f.startsWith("..")){let y=f.split("/");for(;y[0]==="..";)y.shift(),v-=1;l.pathname=y.join("/")}d=v>=0?e[v]:"/"}let m=pS(l,d),p=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var aa=s=>s.join("/").replace(/\/\/+/g,"/"),gS=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),vS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,_S=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,xS=class{constructor(s,e,i,r=!1){this.status=s,this.statusText=e||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function yS(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function SS(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var X_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function W_(s,e){let i=s;if(typeof i!="string"||!G_.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(X_)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),d=oa(f.pathname,e);f.origin===c.origin&&d!=null?i=d+f.search+f.hash:l=!0}catch{bi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var j_=["POST","PUT","PATCH","DELETE"];new Set(j_);var MS=["GET",...j_];new Set(MS);var ws=he.createContext(null);ws.displayName="DataRouter";var jc=he.createContext(null);jc.displayName="DataRouterState";var ES=he.createContext(!1),q_=he.createContext({isTransitioning:!1});q_.displayName="ViewTransition";var bS=he.createContext(new Map);bS.displayName="Fetchers";var TS=he.createContext(null);TS.displayName="Await";var fi=he.createContext(null);fi.displayName="Navigation";var ko=he.createContext(null);ko.displayName="Location";var Pi=he.createContext({outlet:null,matches:[],isDataRoute:!1});Pi.displayName="Route";var Od=he.createContext(null);Od.displayName="RouteError";var Y_="REACT_ROUTER_ERROR",AS="REDIRECT",RS="ROUTE_ERROR_RESPONSE";function wS(s){if(s.startsWith(`${Y_}:${AS}:{`))try{let e=JSON.parse(s.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function CS(s){if(s.startsWith(`${Y_}:${RS}:{`))try{let e=JSON.parse(s.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new xS(e.status,e.statusText,e.data)}catch{}}function DS(s,{relative:e}={}){Yt(Xo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=he.useContext(fi),{hash:l,pathname:c,search:f}=Wo(s,{relative:e}),d=c;return i!=="/"&&(d=c==="/"?i:aa([i,c])),r.createHref({pathname:d,search:f,hash:l})}function Xo(){return he.useContext(ko)!=null}function Er(){return Yt(Xo(),"useLocation() may be used only in the context of a <Router> component."),he.useContext(ko).location}var Z_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function K_(s){he.useContext(fi).static||he.useLayoutEffect(s)}function US(){let{isDataRoute:s}=he.useContext(Pi);return s?WS():LS()}function LS(){Yt(Xo(),"useNavigate() may be used only in the context of a <Router> component.");let s=he.useContext(ws),{basename:e,navigator:i}=he.useContext(fi),{matches:r}=he.useContext(Pi),{pathname:l}=Er(),c=JSON.stringify(V_(r)),f=he.useRef(!1);return K_(()=>{f.current=!0}),he.useCallback((m,p={})=>{if(bi(f.current,Z_),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=k_(m,JSON.parse(c),l,p.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:aa([e,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[e,i,c,l,s])}he.createContext(null);function NS(){let{matches:s}=he.useContext(Pi),e=s[s.length-1];return e?e.params:{}}function Wo(s,{relative:e}={}){let{matches:i}=he.useContext(Pi),{pathname:r}=Er(),l=JSON.stringify(V_(i));return he.useMemo(()=>k_(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function OS(s,e){return Q_(s,e)}function Q_(s,e,i,r,l){Yt(Xo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=he.useContext(fi),{matches:f}=he.useContext(Pi),d=f[f.length-1],m=d?d.params:{},p=d?d.pathname:"/",g=d?d.pathnameBase:"/",v=d&&d.route;{let O=v&&v.path||"";$_(p,!v||O.endsWith("*")||O.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O==="/"?"*":`${O}/*`}">.`)}let y=Er(),E;if(e){let O=typeof e=="string"?Rs(e):e;Yt(g==="/"||O.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${O.pathname}" was given in the \`location\` prop.`),E=O}else E=y;let b=E.pathname||"/",A=b;if(g!=="/"){let O=g.replace(/^\//,"").split("/");A="/"+b.replace(/^\//,"").split("/").slice(O.length).join("/")}let S=z_(s,{pathname:A});bi(v||S!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),bi(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=FS(S&&S.map(O=>Object.assign({},O,{params:Object.assign({},m,O.params),pathname:aa([g,c.encodeLocation?c.encodeLocation(O.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?g:aa([g,c.encodeLocation?c.encodeLocation(O.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:O.pathnameBase])})),f,i,r,l);return e&&_?he.createElement(ko.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},_):_}function PS(){let s=XS(),e=yS(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=he.createElement(he.Fragment,null,he.createElement("p",null,"💿 Hey developer 👋"),he.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",he.createElement("code",{style:c},"ErrorBoundary")," or"," ",he.createElement("code",{style:c},"errorElement")," prop on your route.")),he.createElement(he.Fragment,null,he.createElement("h2",null,"Unexpected Application Error!"),he.createElement("h3",{style:{fontStyle:"italic"}},e),i?he.createElement("pre",{style:l},i):null,f)}var IS=he.createElement(PS,null),J_=class extends he.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=CS(s.digest);i&&(s=i)}let e=s!==void 0?he.createElement(Pi.Provider,{value:this.props.routeContext},he.createElement(Od.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?he.createElement(BS,{error:s},e):e}};J_.contextType=ES;var sh=new WeakMap;function BS({children:s,error:e}){let{basename:i}=he.useContext(fi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=wS(e.digest);if(r){let l=sh.get(e);if(l)throw l;let c=W_(r.location,i);if(X_&&!sh.get(e))if(c.isExternal||r.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:r.replace}));throw sh.set(e,f),f}return he.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return s}function zS({routeContext:s,match:e,children:i}){let r=he.useContext(ws);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),he.createElement(Pi.Provider,{value:s},i)}function FS(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,f=i?.errors;if(f!=null){let g=c.findIndex(v=>v.route.id&&f?.[v.route.id]!==void 0);Yt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,g+1))}let d=!1,m=-1;if(i)for(let g=0;g<c.length;g++){let v=c[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(m=g),v.route.id){let{loaderData:y,errors:E}=i,b=v.route.loader&&!y.hasOwnProperty(v.route.id)&&(!E||E[v.route.id]===void 0);if(v.route.lazy||b){d=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=i&&r?(g,v)=>{r(g,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:SS(i.matches),errorInfo:v})}:void 0;return c.reduceRight((g,v,y)=>{let E,b=!1,A=null,S=null;i&&(E=f&&v.route.id?f[v.route.id]:void 0,A=v.route.errorElement||IS,d&&(m<0&&y===0?($_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,S=null):m===y&&(b=!0,S=v.route.hydrateFallbackElement||null)));let _=e.concat(c.slice(0,y+1)),O=()=>{let N;return E?N=A:b?N=S:v.route.Component?N=he.createElement(v.route.Component,null):v.route.element?N=v.route.element:N=g,he.createElement(zS,{match:v,routeContext:{outlet:g,matches:_,isDataRoute:i!=null},children:N})};return i&&(v.route.ErrorBoundary||v.route.errorElement||y===0)?he.createElement(J_,{location:i.location,revalidation:i.revalidation,component:A,error:E,children:O(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:p}):O()},null)}function Pd(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function HS(s){let e=he.useContext(ws);return Yt(e,Pd(s)),e}function GS(s){let e=he.useContext(jc);return Yt(e,Pd(s)),e}function VS(s){let e=he.useContext(Pi);return Yt(e,Pd(s)),e}function Id(s){let e=VS(s),i=e.matches[e.matches.length-1];return Yt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function kS(){return Id("useRouteId")}function XS(){let s=he.useContext(Od),e=GS("useRouteError"),i=Id("useRouteError");return s!==void 0?s:e.errors?.[i]}function WS(){let{router:s}=HS("useNavigate"),e=Id("useNavigate"),i=he.useRef(!1);return K_(()=>{i.current=!0}),he.useCallback(async(l,c={})=>{bi(i.current,Z_),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var Ov={};function $_(s,e,i){!e&&!Ov[s]&&(Ov[s]=!0,bi(!1,i))}he.memo(jS);function jS({routes:s,future:e,state:i,onError:r}){return Q_(s,void 0,i,r,e)}function Gh(s){Yt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function qS({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){Yt(!Xo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=s.replace(/^\/*/,"/"),m=he.useMemo(()=>({basename:d,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[d,l,c,f]);typeof i=="string"&&(i=Rs(i));let{pathname:p="/",search:g="",hash:v="",state:y=null,key:E="default"}=i,b=he.useMemo(()=>{let A=oa(p,d);return A==null?null:{location:{pathname:A,search:g,hash:v,state:y,key:E},navigationType:r}},[d,p,g,v,y,E,r]);return bi(b!=null,`<Router basename="${d}"> is not able to match the URL "${p}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:he.createElement(fi.Provider,{value:m},he.createElement(ko.Provider,{children:e,value:b}))}function YS({children:s,location:e}){return OS(Vh(s),e)}function Vh(s,e=[]){let i=[];return he.Children.forEach(s,(r,l)=>{if(!he.isValidElement(r))return;let c=[...e,l];if(r.type===he.Fragment){i.push.apply(i,Vh(r.props.children,c));return}Yt(r.type===Gh,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Yt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=Vh(r.props.children,c)),i.push(f)}),i}var Lc="get",Nc="application/x-www-form-urlencoded";function qc(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function ZS(s){return qc(s)&&s.tagName.toLowerCase()==="button"}function KS(s){return qc(s)&&s.tagName.toLowerCase()==="form"}function QS(s){return qc(s)&&s.tagName.toLowerCase()==="input"}function JS(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function $S(s,e){return s.button===0&&(!e||e==="_self")&&!JS(s)}var sc=null;function eM(){if(sc===null)try{new FormData(document.createElement("form"),0),sc=!1}catch{sc=!0}return sc}var tM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function oh(s){return s!=null&&!tM.has(s)?(bi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Nc}"`),null):s}function nM(s,e){let i,r,l,c,f;if(KS(s)){let d=s.getAttribute("action");r=d?oa(d,e):null,i=s.getAttribute("method")||Lc,l=oh(s.getAttribute("enctype"))||Nc,c=new FormData(s)}else if(ZS(s)||QS(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||d.getAttribute("action");if(r=m?oa(m,e):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||Lc,l=oh(s.getAttribute("formenctype"))||oh(d.getAttribute("enctype"))||Nc,c=new FormData(d,s),!eM()){let{name:p,type:g,value:v}=s;if(g==="image"){let y=p?`${p}.`:"";c.append(`${y}x`,"0"),c.append(`${y}y`,"0")}else p&&c.append(p,v)}}else{if(qc(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Lc,r=null,l=Nc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Bd(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function iM(s,e,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&oa(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function aM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function rM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function sM(s,e,i){let r=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await aM(c,i);return f.links?f.links():[]}return[]}));return uM(r.flat(1).filter(rM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Pv(s,e,i,r,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||d(m,p)):c==="data"?e.filter((m,p)=>{let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function oM(s,e,{includeHydrateFallback:i}={}){return lM(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function lM(s){return[...new Set(s)]}function cM(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function uM(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let c=JSON.stringify(cM(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function e0(){let s=he.useContext(ws);return Bd(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function fM(){let s=he.useContext(jc);return Bd(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var zd=he.createContext(void 0);zd.displayName="FrameworkContext";function t0(){let s=he.useContext(zd);return Bd(s,"You must render this element inside a <HydratedRouter> element"),s}function hM(s,e){let i=he.useContext(zd),[r,l]=he.useState(!1),[c,f]=he.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:v}=e,y=he.useRef(null);he.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let A=_=>{_.forEach(O=>{f(O.isIntersecting)})},S=new IntersectionObserver(A,{threshold:.5});return y.current&&S.observe(y.current),()=>{S.disconnect()}}},[s]),he.useEffect(()=>{if(r){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[r]);let E=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,y,{}]:[c,y,{onFocus:wo(d,E),onBlur:wo(m,b),onMouseEnter:wo(p,E),onMouseLeave:wo(g,b),onTouchStart:wo(v,E)}]:[!1,y,{}]}function wo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function dM({page:s,...e}){let{router:i}=e0(),r=he.useMemo(()=>z_(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?he.createElement(mM,{page:s,matches:r,...e}):null}function pM(s){let{manifest:e,routeModules:i}=t0(),[r,l]=he.useState([]);return he.useEffect(()=>{let c=!1;return sM(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),r}function mM({page:s,matches:e,...i}){let r=Er(),{manifest:l,routeModules:c}=t0(),{basename:f}=e0(),{loaderData:d,matches:m}=fM(),p=he.useMemo(()=>Pv(s,e,m,l,r,"data"),[s,e,m,l,r]),g=he.useMemo(()=>Pv(s,e,m,l,r,"assets"),[s,e,m,l,r]),v=he.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let b=new Set,A=!1;if(e.forEach(_=>{let O=l.routes[_.route.id];!O||!O.hasLoader||(!p.some(N=>N.route.id===_.route.id)&&_.route.id in d&&c[_.route.id]?.shouldRevalidate||O.hasClientLoader?A=!0:b.add(_.route.id))}),b.size===0)return[];let S=iM(s,f,"data");return A&&b.size>0&&S.searchParams.set("_routes",e.filter(_=>b.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[f,d,r,l,p,e,s,c]),y=he.useMemo(()=>oM(g,l),[g,l]),E=pM(g);return he.createElement(he.Fragment,null,v.map(b=>he.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...i})),y.map(b=>he.createElement("link",{key:b,rel:"modulepreload",href:b,...i})),E.map(({key:b,link:A})=>he.createElement("link",{key:b,nonce:i.nonce,...A})))}function gM(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var vM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{vM&&(window.__reactRouterVersion="7.11.0")}catch{}function _M({basename:s,children:e,unstable_useTransitions:i,window:r}){let l=he.useRef();l.current==null&&(l.current=Ky({window:r,v5Compat:!0}));let c=l.current,[f,d]=he.useState({action:c.action,location:c.location}),m=he.useCallback(p=>{i===!1?d(p):he.startTransition(()=>d(p))},[i]);return he.useLayoutEffect(()=>c.listen(m),[c,m]),he.createElement(qS,{basename:s,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var n0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bo=he.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:d,target:m,to:p,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:y,...E},b){let{basename:A,unstable_useTransitions:S}=he.useContext(fi),_=typeof p=="string"&&n0.test(p),O=W_(p,A);p=O.to;let N=DS(p,{relative:l}),[U,I,G]=hM(r,E),V=MM(p,{replace:f,state:d,target:m,preventScrollReset:g,relative:l,viewTransition:v,unstable_defaultShouldRevalidate:y,unstable_useTransitions:S});function Z(w){e&&e(w),w.defaultPrevented||V(w)}let C=he.createElement("a",{...E,...G,href:O.absoluteURL||N,onClick:O.isExternal||c?e:Z,ref:gM(b,I),target:m,"data-discover":!_&&i==="render"?"true":void 0});return U&&!_?he.createElement(he.Fragment,null,C,he.createElement(dM,{page:N})):C});Bo.displayName="Link";var xM=he.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:d,children:m,...p},g){let v=Wo(f,{relative:p.relative}),y=Er(),E=he.useContext(jc),{navigator:b,basename:A}=he.useContext(fi),S=E!=null&&RM(v)&&d===!0,_=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,O=y.pathname,N=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;i||(O=O.toLowerCase(),N=N?N.toLowerCase():null,_=_.toLowerCase()),N&&A&&(N=oa(N,A)||N);const U=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let I=O===_||!l&&O.startsWith(_)&&O.charAt(U)==="/",G=N!=null&&(N===_||!l&&N.startsWith(_)&&N.charAt(_.length)==="/"),V={isActive:I,isPending:G,isTransitioning:S},Z=I?e:void 0,C;typeof r=="function"?C=r(V):C=[r,I?"active":null,G?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let w=typeof c=="function"?c(V):c;return he.createElement(Bo,{...p,"aria-current":Z,className:C,ref:g,style:w,to:f,viewTransition:d},typeof m=="function"?m(V):m)});xM.displayName="NavLink";var yM=he.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:f=Lc,action:d,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:y,...E},b)=>{let{unstable_useTransitions:A}=he.useContext(fi),S=TM(),_=AM(d,{relative:p}),O=f.toLowerCase()==="get"?"get":"post",N=typeof d=="string"&&n0.test(d),U=I=>{if(m&&m(I),I.defaultPrevented)return;I.preventDefault();let G=I.nativeEvent.submitter,V=G?.getAttribute("formmethod")||f,Z=()=>S(G||I.currentTarget,{fetcherKey:e,method:V,navigate:i,replace:l,state:c,relative:p,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:y});A&&i!==!1?he.startTransition(()=>Z()):Z()};return he.createElement("form",{ref:b,method:O,action:_,onSubmit:r?m:U,...E,"data-discover":!N&&s==="render"?"true":void 0})});yM.displayName="Form";function SM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function i0(s){let e=he.useContext(ws);return Yt(e,SM(s)),e}function MM(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:d,unstable_useTransitions:m}={}){let p=US(),g=Er(),v=Wo(s,{relative:c});return he.useCallback(y=>{if($S(y,e)){y.preventDefault();let E=i!==void 0?i:Io(g)===Io(v),b=()=>p(s,{replace:E,state:r,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:d});m?he.startTransition(()=>b()):b()}},[g,p,v,i,r,e,s,l,c,f,d,m])}var EM=0,bM=()=>`__${String(++EM)}__`;function TM(){let{router:s}=i0("useSubmit"),{basename:e}=he.useContext(fi),i=kS(),r=s.fetch,l=s.navigate;return he.useCallback(async(c,f={})=>{let{action:d,method:m,encType:p,formData:g,body:v}=nM(c,e);if(f.navigate===!1){let y=f.fetcherKey||bM();await r(y,i,f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:v,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:v,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,e,i])}function AM(s,{relative:e}={}){let{basename:i}=he.useContext(fi),r=he.useContext(Pi);Yt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...Wo(s||".",{relative:e})},f=Er();if(s==null){c.search=f.search;let d=new URLSearchParams(c.search),m=d.getAll("index");if(m.some(g=>g==="")){d.delete("index"),m.filter(v=>v).forEach(v=>d.append("index",v));let g=d.toString();c.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:aa([i,c.pathname])),Io(c)}function RM(s,{relative:e}={}){let i=he.useContext(q_);Yt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=i0("useViewTransitionState"),l=Wo(s,{relative:e});if(!i.isTransitioning)return!1;let c=oa(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=oa(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Fc(l.pathname,f)!=null||Fc(l.pathname,c)!=null}var wM=B_();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fd="180",CM=0,Iv=1,DM=2,a0=1,UM=2,na=3,Wa=0,Vn=1,ia=2,ka=0,ys=1,kh=2,Bv=3,zv=4,LM=5,_r=100,NM=101,OM=102,PM=103,IM=104,BM=200,zM=201,FM=202,HM=203,Xh=204,Wh=205,GM=206,VM=207,kM=208,XM=209,WM=210,jM=211,qM=212,YM=213,ZM=214,jh=0,qh=1,Yh=2,Ms=3,Zh=4,Kh=5,Qh=6,Jh=7,r0=0,KM=1,QM=2,Xa=0,JM=1,$M=2,eE=3,tE=4,nE=5,iE=6,aE=7,s0=300,Es=301,bs=302,$h=303,ed=304,Yc=306,td=1e3,Mi=1001,nd=1002,$n=1003,rE=1004,oc=1005,Gn=1006,lh=1007,yr=1008,la=1009,o0=1010,l0=1011,zo=1012,Hd=1013,Mr=1014,Ni=1015,Cs=1016,Gd=1017,Vd=1018,Fo=1020,c0=35902,u0=35899,f0=1021,h0=1022,ci=1023,Ho=1026,Go=1027,d0=1028,kd=1029,p0=1030,Xd=1031,Wd=1033,Oc=33776,Pc=33777,Ic=33778,Bc=33779,id=35840,ad=35841,rd=35842,sd=35843,od=36196,ld=37492,cd=37496,ud=37808,fd=37809,hd=37810,dd=37811,pd=37812,md=37813,gd=37814,vd=37815,_d=37816,xd=37817,yd=37818,Sd=37819,Md=37820,Ed=37821,bd=36492,Td=36494,Ad=36495,Rd=36283,wd=36284,Cd=36285,Dd=36286,sE=3200,oE=3201,lE=0,cE=1,Va="",li="srgb",Ts="srgb-linear",Hc="linear",zt="srgb",rs=7680,Fv=519,uE=512,fE=513,hE=514,m0=515,dE=516,pE=517,mE=518,gE=519,Hv=35044,Gv="300 es",Oi=2e3,Gc=2001;class Ds{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ch=Math.PI/180,Ud=180/Math.PI;function jo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function St(s,e,i){return Math.max(e,Math.min(i,s))}function vE(s,e){return(s%e+e)%e}function uh(s,e,i){return(1-i)*s+i*e}function Co(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Hn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,i=0){ct.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,d){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const y=c[f+0],E=c[f+1],b=c[f+2],A=c[f+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v;return}if(d===1){e[i+0]=y,e[i+1]=E,e[i+2]=b,e[i+3]=A;return}if(v!==A||m!==y||p!==E||g!==b){let S=1-d;const _=m*y+p*E+g*b+v*A,O=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const I=Math.sqrt(N),G=Math.atan2(I,_*O);S=Math.sin(S*G)/I,d=Math.sin(d*G)/I}const U=d*O;if(m=m*S+y*U,p=p*S+E*U,g=g*S+b*U,v=v*S+A*U,S===1-d){const I=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=I,p*=I,g*=I,v*=I}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,c,f){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=c[f],y=c[f+1],E=c[f+2],b=c[f+3];return e[i]=d*b+g*v+m*E-p*y,e[i+1]=m*b+g*y+p*v-d*E,e[i+2]=p*b+g*E+d*y-m*v,e[i+3]=g*b-d*v-m*y-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),v=d(c/2),y=m(r/2),E=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=y*g*v+p*E*b,this._y=p*E*v-y*g*b,this._z=p*g*b+y*E*v,this._w=p*g*v-y*E*b;break;case"YXZ":this._x=y*g*v+p*E*b,this._y=p*E*v-y*g*b,this._z=p*g*b-y*E*v,this._w=p*g*v+y*E*b;break;case"ZXY":this._x=y*g*v-p*E*b,this._y=p*E*v+y*g*b,this._z=p*g*b+y*E*v,this._w=p*g*v-y*E*b;break;case"ZYX":this._x=y*g*v-p*E*b,this._y=p*E*v+y*g*b,this._z=p*g*b-y*E*v,this._w=p*g*v+y*E*b;break;case"YZX":this._x=y*g*v+p*E*b,this._y=p*E*v+y*g*b,this._z=p*g*b-y*E*v,this._w=p*g*v-y*E*b;break;case"XZY":this._x=y*g*v-p*E*b,this._y=p*E*v-y*g*b,this._z=p*g*b+y*E*v,this._w=p*g*v+y*E*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],y=r+d+v;if(y>0){const E=.5/Math.sqrt(y+1);this._w=.25/E,this._x=(g-m)*E,this._y=(c-p)*E,this._z=(f-l)*E}else if(r>d&&r>v){const E=2*Math.sqrt(1+r-d-v);this._w=(g-m)/E,this._x=.25*E,this._y=(l+f)/E,this._z=(c+p)/E}else if(d>v){const E=2*Math.sqrt(1+d-r-v);this._w=(c-p)/E,this._x=(l+f)/E,this._y=.25*E,this._z=(m+g)/E}else{const E=2*Math.sqrt(1+v-r-d);this._w=(f-l)/E,this._x=(c+p)/E,this._y=(m+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+f*d+l*p-c*m,this._y=l*g+f*m+c*d-r*p,this._z=c*g+f*p+r*m-l*d,this._w=f*g-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,f=this._w;let d=f*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const E=1-i;return this._w=E*f+i*this._w,this._x=E*r+i*this._x,this._y=E*l+i*this._y,this._z=E*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,y=Math.sin(i*g)/p;return this._w=f*v+this._w*y,this._x=r*v+this._x*y,this._y=l*v+this._y*y,this._z=c*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,i=0,r=0){oe.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Vv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Vv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,d=e.z,m=e.w,p=2*(f*l-d*r),g=2*(d*i-c*l),v=2*(c*r-f*i);return this.x=i+m*p+f*v-d*g,this.y=r+m*g+d*p-c*v,this.z=l+m*v+c*g-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-r*m,this.z=r*d-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return fh.copy(this).projectOnVector(e),this.sub(fh)}reflect(e){return this.sub(fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fh=new oe,Vv=new qo;class ht{constructor(e,i,r,l,c,f,d,m,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,d,m,p)}set(e,i,r,l,c,f,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],y=r[2],E=r[5],b=r[8],A=l[0],S=l[3],_=l[6],O=l[1],N=l[4],U=l[7],I=l[2],G=l[5],V=l[8];return c[0]=f*A+d*O+m*I,c[3]=f*S+d*N+m*G,c[6]=f*_+d*U+m*V,c[1]=p*A+g*O+v*I,c[4]=p*S+g*N+v*G,c[7]=p*_+g*U+v*V,c[2]=y*A+E*O+b*I,c[5]=y*S+E*N+b*G,c[8]=y*_+E*U+b*V,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*f*g-i*d*p-r*c*g+r*d*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=g*f-d*p,y=d*m-g*c,E=p*c-f*m,b=i*v+r*y+l*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=v*A,e[1]=(l*p-g*r)*A,e[2]=(d*r-l*f)*A,e[3]=y*A,e[4]=(g*i-l*m)*A,e[5]=(l*c-d*i)*A,e[6]=E*A,e[7]=(r*m-p*i)*A,e[8]=(f*i-r*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*d)+f+e,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(hh.makeScale(e,i)),this}rotate(e){return this.premultiply(hh.makeRotation(-e)),this}translate(e,i){return this.premultiply(hh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hh=new ht;function g0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Vc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _E(){const s=Vc("canvas");return s.style.display="block",s}const kv={};function Vo(s){s in kv||(kv[s]=!0,console.warn(s))}function xE(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const Xv=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wv=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yE(){const s={enabled:!0,workingColorSpace:Ts,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===zt&&(l.r=ra(l.r),l.g=ra(l.g),l.b=ra(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===zt&&(l.r=Ss(l.r),l.g=Ss(l.g),l.b=Ss(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Va?Hc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Vo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Vo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ts]:{primaries:e,whitePoint:r,transfer:Hc,toXYZ:Xv,fromXYZ:Wv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:r,transfer:zt,toXYZ:Xv,fromXYZ:Wv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),s}const Rt=yE();function ra(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ss(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ss;class SE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ss===void 0&&(ss=Vc("canvas")),ss.width=e.width,ss.height=e.height;const l=ss.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ss}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Vc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ra(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ra(i[r]/255)*255):i[r]=ra(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ME=0;class jd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=jo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(dh(l[f].image)):c.push(dh(l[f]))}else c=dh(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function dh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?SE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let EE=0;const ph=new oe;class On extends Ds{constructor(e=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,r=Mi,l=Mi,c=Gn,f=yr,d=ci,m=la,p=On.DEFAULT_ANISOTROPY,g=Va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=jo(),this.name="",this.source=new jd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ph).x}get height(){return this.source.getSize(ph).y}get depth(){return this.source.getSize(ph).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==s0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case td:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case td:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=s0;On.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,i=0,r=0,l=1){en.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],g=m[4],v=m[8],y=m[1],E=m[5],b=m[9],A=m[2],S=m[6],_=m[10];if(Math.abs(g-y)<.01&&Math.abs(v-A)<.01&&Math.abs(b-S)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+A)<.1&&Math.abs(b+S)<.1&&Math.abs(p+E+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,U=(E+1)/2,I=(_+1)/2,G=(g+y)/4,V=(v+A)/4,Z=(b+S)/4;return N>U&&N>I?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=G/r,c=V/r):U>I?U<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),r=G/l,c=Z/l):I<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),r=V/c,l=Z/c),this.set(r,l,c,i),this}let O=Math.sqrt((S-b)*(S-b)+(v-A)*(v-A)+(y-g)*(y-g));return Math.abs(O)<.001&&(O=1),this.x=(S-b)/O,this.y=(v-A)/O,this.z=(y-g)/O,this.w=Math.acos((p+E+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this.w=St(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this.w=St(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bE extends Ds{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new en(0,0,e,i),this.scissorTest=!1,this.viewport=new en(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new On(l);this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new jd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ja extends bE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class v0 extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=$n,this.minFilter=$n,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class TE extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=$n,this.minFilter=$n,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yo{constructor(e=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(vi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(vi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=vi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,vi):vi.fromBufferAttribute(c,f),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),lc.copy(r.boundingBox)),lc.applyMatrix4(e.matrixWorld),this.union(lc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),cc.subVectors(this.max,Do),os.subVectors(e.a,Do),ls.subVectors(e.b,Do),cs.subVectors(e.c,Do),Ia.subVectors(ls,os),Ba.subVectors(cs,ls),ur.subVectors(os,cs);let i=[0,-Ia.z,Ia.y,0,-Ba.z,Ba.y,0,-ur.z,ur.y,Ia.z,0,-Ia.x,Ba.z,0,-Ba.x,ur.z,0,-ur.x,-Ia.y,Ia.x,0,-Ba.y,Ba.x,0,-ur.y,ur.x,0];return!mh(i,os,ls,cs,cc)||(i=[1,0,0,0,1,0,0,0,1],!mh(i,os,ls,cs,cc))?!1:(uc.crossVectors(Ia,Ba),i=[uc.x,uc.y,uc.z],mh(i,os,ls,cs,cc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qi=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],vi=new oe,lc=new Yo,os=new oe,ls=new oe,cs=new oe,Ia=new oe,Ba=new oe,ur=new oe,Do=new oe,cc=new oe,uc=new oe,fr=new oe;function mh(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){fr.fromArray(s,c);const d=l.x*Math.abs(fr.x)+l.y*Math.abs(fr.y)+l.z*Math.abs(fr.z),m=e.dot(fr),p=i.dot(fr),g=r.dot(fr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const AE=new Yo,Uo=new oe,gh=new oe;class Zc{constructor(e=new oe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):AE.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const i=Uo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Uo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(gh)),this.expandByPoint(Uo.copy(e.center).sub(gh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ji=new oe,vh=new oe,fc=new oe,za=new oe,_h=new oe,hc=new oe,xh=new oe;class _0{constructor(e=new oe,i=new oe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ji.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,i),Ji.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){vh.copy(e).add(i).multiplyScalar(.5),fc.copy(i).sub(e).normalize(),za.copy(this.origin).sub(vh);const c=e.distanceTo(i)*.5,f=-this.direction.dot(fc),d=za.dot(this.direction),m=-za.dot(fc),p=za.lengthSq(),g=Math.abs(1-f*f);let v,y,E,b;if(g>0)if(v=f*m-d,y=f*d-m,b=c*g,v>=0)if(y>=-b)if(y<=b){const A=1/g;v*=A,y*=A,E=v*(v+f*y+2*d)+y*(f*v+y+2*m)+p}else y=c,v=Math.max(0,-(f*y+d)),E=-v*v+y*(y+2*m)+p;else y=-c,v=Math.max(0,-(f*y+d)),E=-v*v+y*(y+2*m)+p;else y<=-b?(v=Math.max(0,-(-f*c+d)),y=v>0?-c:Math.min(Math.max(-c,-m),c),E=-v*v+y*(y+2*m)+p):y<=b?(v=0,y=Math.min(Math.max(-c,-m),c),E=y*(y+2*m)+p):(v=Math.max(0,-(f*c+d)),y=v>0?c:Math.min(Math.max(-c,-m),c),E=-v*v+y*(y+2*m)+p);else y=f>0?-c:c,v=Math.max(0,-(f*y+d)),E=-v*v+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(vh).addScaledVector(fc,y),E}intersectSphere(e,i){Ji.subVectors(e.center,this.origin);const r=Ji.dot(this.direction),l=Ji.dot(Ji)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=r-f,m=r+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),g>=0?(c=(e.min.y-y.y)*g,f=(e.max.y-y.y)*g):(c=(e.max.y-y.y)*g,f=(e.min.y-y.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),v>=0?(d=(e.min.z-y.z)*v,m=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,m=(e.min.z-y.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,i,r,l,c){_h.subVectors(i,e),hc.subVectors(r,e),xh.crossVectors(_h,hc);let f=this.direction.dot(xh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;za.subVectors(this.origin,e);const m=d*this.direction.dot(hc.crossVectors(za,hc));if(m<0)return null;const p=d*this.direction.dot(_h.cross(za));if(p<0||m+p>f)return null;const g=-d*za.dot(xh);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(e,i,r,l,c,f,d,m,p,g,v,y,E,b,A,S){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,d,m,p,g,v,y,E,b,A,S)}set(e,i,r,l,c,f,d,m,p,g,v,y,E,b,A,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=f,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=y,_[3]=E,_[7]=b,_[11]=A,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/us.setFromMatrixColumn(e,0).length(),c=1/us.setFromMatrixColumn(e,1).length(),f=1/us.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const y=f*g,E=f*v,b=d*g,A=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=E+b*p,i[5]=y-A*p,i[9]=-d*m,i[2]=A-y*p,i[6]=b+E*p,i[10]=f*m}else if(e.order==="YXZ"){const y=m*g,E=m*v,b=p*g,A=p*v;i[0]=y+A*d,i[4]=b*d-E,i[8]=f*p,i[1]=f*v,i[5]=f*g,i[9]=-d,i[2]=E*d-b,i[6]=A+y*d,i[10]=f*m}else if(e.order==="ZXY"){const y=m*g,E=m*v,b=p*g,A=p*v;i[0]=y-A*d,i[4]=-f*v,i[8]=b+E*d,i[1]=E+b*d,i[5]=f*g,i[9]=A-y*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(e.order==="ZYX"){const y=f*g,E=f*v,b=d*g,A=d*v;i[0]=m*g,i[4]=b*p-E,i[8]=y*p+A,i[1]=m*v,i[5]=A*p+y,i[9]=E*p-b,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(e.order==="YZX"){const y=f*m,E=f*p,b=d*m,A=d*p;i[0]=m*g,i[4]=A-y*v,i[8]=b*v+E,i[1]=v,i[5]=f*g,i[9]=-d*g,i[2]=-p*g,i[6]=E*v+b,i[10]=y-A*v}else if(e.order==="XZY"){const y=f*m,E=f*p,b=d*m,A=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=y*v+A,i[5]=f*g,i[9]=E*v-b,i[2]=b*v-E,i[6]=d*g,i[10]=A*v+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RE,e,wE)}lookAt(e,i,r){const l=this.elements;return Qn.subVectors(e,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Fa.crossVectors(r,Qn),Fa.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Fa.crossVectors(r,Qn)),Fa.normalize(),dc.crossVectors(Qn,Fa),l[0]=Fa.x,l[4]=dc.x,l[8]=Qn.x,l[1]=Fa.y,l[5]=dc.y,l[9]=Qn.y,l[2]=Fa.z,l[6]=dc.z,l[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],y=r[9],E=r[13],b=r[2],A=r[6],S=r[10],_=r[14],O=r[3],N=r[7],U=r[11],I=r[15],G=l[0],V=l[4],Z=l[8],C=l[12],w=l[1],k=l[5],ae=l[9],de=l[13],pe=l[2],fe=l[6],P=l[10],Q=l[14],j=l[3],Se=l[7],L=l[11],ee=l[15];return c[0]=f*G+d*w+m*pe+p*j,c[4]=f*V+d*k+m*fe+p*Se,c[8]=f*Z+d*ae+m*P+p*L,c[12]=f*C+d*de+m*Q+p*ee,c[1]=g*G+v*w+y*pe+E*j,c[5]=g*V+v*k+y*fe+E*Se,c[9]=g*Z+v*ae+y*P+E*L,c[13]=g*C+v*de+y*Q+E*ee,c[2]=b*G+A*w+S*pe+_*j,c[6]=b*V+A*k+S*fe+_*Se,c[10]=b*Z+A*ae+S*P+_*L,c[14]=b*C+A*de+S*Q+_*ee,c[3]=O*G+N*w+U*pe+I*j,c[7]=O*V+N*k+U*fe+I*Se,c[11]=O*Z+N*ae+U*P+I*L,c[15]=O*C+N*de+U*Q+I*ee,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],d=e[5],m=e[9],p=e[13],g=e[2],v=e[6],y=e[10],E=e[14],b=e[3],A=e[7],S=e[11],_=e[15];return b*(+c*m*v-l*p*v-c*d*y+r*p*y+l*d*E-r*m*E)+A*(+i*m*E-i*p*y+c*f*y-l*f*E+l*p*g-c*m*g)+S*(+i*p*v-i*d*E-c*f*v+r*f*E+c*d*g-r*p*g)+_*(-l*d*g-i*m*v+i*d*y+l*f*v-r*f*y+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=e[9],y=e[10],E=e[11],b=e[12],A=e[13],S=e[14],_=e[15],O=v*S*p-A*y*p+A*m*E-d*S*E-v*m*_+d*y*_,N=b*y*p-g*S*p-b*m*E+f*S*E+g*m*_-f*y*_,U=g*A*p-b*v*p+b*d*E-f*A*E-g*d*_+f*v*_,I=b*v*m-g*A*m-b*d*y+f*A*y+g*d*S-f*v*S,G=i*O+r*N+l*U+c*I;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/G;return e[0]=O*V,e[1]=(A*y*c-v*S*c-A*l*E+r*S*E+v*l*_-r*y*_)*V,e[2]=(d*S*c-A*m*c+A*l*p-r*S*p-d*l*_+r*m*_)*V,e[3]=(v*m*c-d*y*c-v*l*p+r*y*p+d*l*E-r*m*E)*V,e[4]=N*V,e[5]=(g*S*c-b*y*c+b*l*E-i*S*E-g*l*_+i*y*_)*V,e[6]=(b*m*c-f*S*c-b*l*p+i*S*p+f*l*_-i*m*_)*V,e[7]=(f*y*c-g*m*c+g*l*p-i*y*p-f*l*E+i*m*E)*V,e[8]=U*V,e[9]=(b*v*c-g*A*c-b*r*E+i*A*E+g*r*_-i*v*_)*V,e[10]=(f*A*c-b*d*c+b*r*p-i*A*p-f*r*_+i*d*_)*V,e[11]=(g*d*c-f*v*c-g*r*p+i*v*p+f*r*E-i*d*E)*V,e[12]=I*V,e[13]=(g*A*l-b*v*l+b*r*y-i*A*y-g*r*S+i*v*S)*V,e[14]=(b*d*l-f*A*l-b*r*m+i*A*m+f*r*S-i*d*S)*V,e[15]=(f*v*l-g*d*l+g*r*m-i*v*m-f*r*y+i*d*y)*V,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,d=e.y,m=e.z,p=c*f,g=c*d;return this.set(p*f+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*f,0,p*m-l*d,g*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,g=f+f,v=d+d,y=c*p,E=c*g,b=c*v,A=f*g,S=f*v,_=d*v,O=m*p,N=m*g,U=m*v,I=r.x,G=r.y,V=r.z;return l[0]=(1-(A+_))*I,l[1]=(E+U)*I,l[2]=(b-N)*I,l[3]=0,l[4]=(E-U)*G,l[5]=(1-(y+_))*G,l[6]=(S+O)*G,l[7]=0,l[8]=(b+N)*V,l[9]=(S-O)*V,l[10]=(1-(y+A))*V,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=us.set(l[0],l[1],l[2]).length();const f=us.set(l[4],l[5],l[6]).length(),d=us.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],_i.copy(this);const p=1/c,g=1/f,v=1/d;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=g,_i.elements[5]*=g,_i.elements[6]*=g,_i.elements[8]*=v,_i.elements[9]*=v,_i.elements[10]*=v,i.setFromRotationMatrix(_i),r.x=c,r.y=f,r.z=d,this}makePerspective(e,i,r,l,c,f,d=Oi,m=!1){const p=this.elements,g=2*c/(i-e),v=2*c/(r-l),y=(i+e)/(i-e),E=(r+l)/(r-l);let b,A;if(m)b=c/(f-c),A=f*c/(f-c);else if(d===Oi)b=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(d===Gc)b=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=v,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,f,d=Oi,m=!1){const p=this.elements,g=2/(i-e),v=2/(r-l),y=-(i+e)/(i-e),E=-(r+l)/(r-l);let b,A;if(m)b=1/(f-c),A=f/(f-c);else if(d===Oi)b=-2/(f-c),A=-(f+c)/(f-c);else if(d===Gc)b=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=v,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const us=new oe,_i=new ln,RE=new oe(0,0,0),wE=new oe(1,1,1),Fa=new oe,dc=new oe,Qn=new oe,jv=new ln,qv=new qo;class ca{constructor(e=0,i=0,r=0,l=ca.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],y=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return jv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return qv.setFromEuler(this),this.setFromQuaternion(qv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ca.DEFAULT_ORDER="XYZ";class x0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let CE=0;const Yv=new oe,fs=new qo,$i=new ln,pc=new oe,Lo=new oe,DE=new oe,UE=new qo,Zv=new oe(1,0,0),Kv=new oe(0,1,0),Qv=new oe(0,0,1),Jv={type:"added"},LE={type:"removed"},hs={type:"childadded",child:null},yh={type:"childremoved",child:null};class kn extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new oe,i=new ca,r=new qo,l=new oe(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ln},normalMatrix:{value:new ht}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new x0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return fs.setFromAxisAngle(e,i),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,i){return fs.setFromAxisAngle(e,i),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Zv,e)}rotateY(e){return this.rotateOnAxis(Kv,e)}rotateZ(e){return this.rotateOnAxis(Qv,e)}translateOnAxis(e,i){return Yv.copy(e).applyQuaternion(this.quaternion),this.position.add(Yv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Zv,e)}translateY(e){return this.translateOnAxis(Kv,e)}translateZ(e){return this.translateOnAxis(Qv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?pc.copy(e):pc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Lo,pc,this.up):$i.lookAt(pc,Lo,this.up),this.quaternion.setFromRotationMatrix($i),l&&($i.extractRotation(l.matrixWorld),fs.setFromRotationMatrix($i),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jv),hs.child=e,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(LE),yh.child=e,this.dispatchEvent(yh),yh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jv),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,DE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,UE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=f(e.geometries),m=f(e.materials),p=f(e.textures),g=f(e.images),v=f(e.shapes),y=f(e.skeletons),E=f(e.animations),b=f(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),E.length>0&&(r.animations=E),b.length>0&&(r.nodes=b)}return r.object=l,r;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}kn.DEFAULT_UP=new oe(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new oe,ea=new oe,Sh=new oe,ta=new oe,ds=new oe,ps=new oe,$v=new oe,Mh=new oe,Eh=new oe,bh=new oe,Th=new en,Ah=new en,Rh=new en;class Si{constructor(e=new oe,i=new oe,r=new oe){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),xi.subVectors(e,i),l.cross(xi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){xi.subVectors(l,i),ea.subVectors(r,i),Sh.subVectors(e,i);const f=xi.dot(xi),d=xi.dot(ea),m=xi.dot(Sh),p=ea.dot(ea),g=ea.dot(Sh),v=f*p-d*d;if(v===0)return c.set(0,0,0),null;const y=1/v,E=(p*m-d*g)*y,b=(f*g-d*m)*y;return c.set(1-E-b,b,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ta)===null?!1:ta.x>=0&&ta.y>=0&&ta.x+ta.y<=1}static getInterpolation(e,i,r,l,c,f,d,m){return this.getBarycoord(e,i,r,l,ta)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ta.x),m.addScaledVector(f,ta.y),m.addScaledVector(d,ta.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return Th.setScalar(0),Ah.setScalar(0),Rh.setScalar(0),Th.fromBufferAttribute(e,i),Ah.fromBufferAttribute(e,r),Rh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Th,c.x),f.addScaledVector(Ah,c.y),f.addScaledVector(Rh,c.z),f}static isFrontFacing(e,i,r,l){return xi.subVectors(r,i),ea.subVectors(e,i),xi.cross(ea).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),xi.cross(ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Si.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Si.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,d;ds.subVectors(l,r),ps.subVectors(c,r),Mh.subVectors(e,r);const m=ds.dot(Mh),p=ps.dot(Mh);if(m<=0&&p<=0)return i.copy(r);Eh.subVectors(e,l);const g=ds.dot(Eh),v=ps.dot(Eh);if(g>=0&&v<=g)return i.copy(l);const y=m*v-g*p;if(y<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(ds,f);bh.subVectors(e,c);const E=ds.dot(bh),b=ps.dot(bh);if(b>=0&&E<=b)return i.copy(c);const A=E*p-m*b;if(A<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(ps,d);const S=g*b-E*v;if(S<=0&&v-g>=0&&E-b>=0)return $v.subVectors(c,l),d=(v-g)/(v-g+(E-b)),i.copy(l).addScaledVector($v,d);const _=1/(S+A+y);return f=A*_,d=y*_,i.copy(r).addScaledVector(ds,f).addScaledVector(ps,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const y0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ha={h:0,s:0,l:0},mc={h:0,s:0,l:0};function wh(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Ct{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Rt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Rt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Rt.workingColorSpace){if(e=vE(e,1),i=St(i,0,1),r=St(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=wh(f,c,e+1/3),this.g=wh(f,c,e),this.b=wh(f,c,e-1/3)}return Rt.colorSpaceToWorking(this,l),this}setStyle(e,i=li){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=li){const r=y0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return Rt.workingToColorSpace(Cn.copy(this),e),Math.round(St(Cn.r*255,0,255))*65536+Math.round(St(Cn.g*255,0,255))*256+Math.round(St(Cn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Rt.workingColorSpace){Rt.workingToColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,c=Cn.b,f=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const v=f-d;switch(p=g<=.5?v/(f+d):v/(2-f-d),f){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Rt.workingColorSpace){return Rt.workingToColorSpace(Cn.copy(this),i),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=li){Rt.workingToColorSpace(Cn.copy(this),e);const i=Cn.r,r=Cn.g,l=Cn.b;return e!==li?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ha),this.setHSL(Ha.h+e,Ha.s+i,Ha.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ha),e.getHSL(mc);const r=uh(Ha.h,mc.h,i),l=uh(Ha.s,mc.s,i),c=uh(Ha.l,mc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Ct;Ct.NAMES=y0;let NE=0;class Zo extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=ys,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xh,this.blendDst=Wh,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(r.blending=this.blending),this.side!==Wa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Xh&&(r.blendSrc=this.blendSrc),this.blendDst!==Wh&&(r.blendDst=this.blendDst),this.blendEquation!==_r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class S0 extends Zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ca,this.combine=r0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new oe,gc=new ct;let OE=0;class Ei{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Hv,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)gc.fromBufferAttribute(this,i),gc.applyMatrix3(e),this.setXY(i,gc.x,gc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix3(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix4(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyNormalMatrix(e),this.setXYZ(i,on.x,on.y,on.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.transformDirection(e),this.setXYZ(i,on.x,on.y,on.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Co(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Co(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Co(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Co(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Co(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),c=Hn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hv&&(e.usage=this.usage),e}}class M0 extends Ei{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class E0 extends Ei{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class sa extends Ei{constructor(e,i,r){super(new Float32Array(e),i,r)}}let PE=0;const oi=new ln,Ch=new kn,ms=new oe,Jn=new Yo,No=new Yo,xn=new oe;class fa extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(g0(e)?E0:M0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ht().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,i,r){return oi.makeTranslation(e,i,r),this.applyMatrix4(oi),this}scale(e,i,r){return oi.makeScale(e,i,r),this.applyMatrix4(oi),this}lookAt(e){return Ch.lookAt(e),Ch.updateMatrix(),this.applyMatrix4(Ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new sa(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Jn.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];No.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(Jn.min,No.min),Jn.expandByPoint(xn),xn.addVectors(Jn.max,No.max),Jn.expandByPoint(xn)):(Jn.expandByPoint(No.min),Jn.expandByPoint(No.max))}Jn.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)xn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(xn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)xn.fromBufferAttribute(d,p),m&&(ms.fromBufferAttribute(e,p),xn.add(ms)),l=Math.max(l,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<r.count;Z++)d[Z]=new oe,m[Z]=new oe;const p=new oe,g=new oe,v=new oe,y=new ct,E=new ct,b=new ct,A=new oe,S=new oe;function _(Z,C,w){p.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,C),v.fromBufferAttribute(r,w),y.fromBufferAttribute(c,Z),E.fromBufferAttribute(c,C),b.fromBufferAttribute(c,w),g.sub(p),v.sub(p),E.sub(y),b.sub(y);const k=1/(E.x*b.y-b.x*E.y);isFinite(k)&&(A.copy(g).multiplyScalar(b.y).addScaledVector(v,-E.y).multiplyScalar(k),S.copy(v).multiplyScalar(E.x).addScaledVector(g,-b.x).multiplyScalar(k),d[Z].add(A),d[C].add(A),d[w].add(A),m[Z].add(S),m[C].add(S),m[w].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let Z=0,C=O.length;Z<C;++Z){const w=O[Z],k=w.start,ae=w.count;for(let de=k,pe=k+ae;de<pe;de+=3)_(e.getX(de+0),e.getX(de+1),e.getX(de+2))}const N=new oe,U=new oe,I=new oe,G=new oe;function V(Z){I.fromBufferAttribute(l,Z),G.copy(I);const C=d[Z];N.copy(C),N.sub(I.multiplyScalar(I.dot(C))).normalize(),U.crossVectors(G,C);const k=U.dot(m[Z])<0?-1:1;f.setXYZW(Z,N.x,N.y,N.z,k)}for(let Z=0,C=O.length;Z<C;++Z){const w=O[Z],k=w.start,ae=w.count;for(let de=k,pe=k+ae;de<pe;de+=3)V(e.getX(de+0)),V(e.getX(de+1)),V(e.getX(de+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ei(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,E=r.count;y<E;y++)r.setXYZ(y,0,0,0);const l=new oe,c=new oe,f=new oe,d=new oe,m=new oe,p=new oe,g=new oe,v=new oe;if(e)for(let y=0,E=e.count;y<E;y+=3){const b=e.getX(y+0),A=e.getX(y+1),S=e.getX(y+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,S),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,S),d.add(g),m.add(g),p.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,E=i.count;y<E;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),f.fromBufferAttribute(i,y+2),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)xn.fromBufferAttribute(e,i),xn.normalize(),e.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,v=d.normalized,y=new p.constructor(m.length*g);let E=0,b=0;for(let A=0,S=m.length;A<S;A++){d.isInterleavedBufferAttribute?E=m[A]*d.data.stride+d.offset:E=m[A]*g;for(let _=0;_<g;_++)y[b++]=p[E++]}return new Ei(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new fa,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,v=p.length;g<v;g++){const y=p[g],E=e(y,r);m.push(E)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,y=p.length;v<y;v++){const E=p[v];g.push(E.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=e.morphAttributes;for(const p in c){const g=[],v=c[p];for(let y=0,E=v.length;y<E;y++)g.push(v[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,g=f.length;p<g;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const e_=new ln,hr=new _0,vc=new Zc,t_=new oe,_c=new oe,xc=new oe,yc=new oe,Dh=new oe,Sc=new oe,n_=new oe,Mc=new oe;class ui extends kn{constructor(e=new fa,i=new S0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Sc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],v=c[m];g!==0&&(Dh.fromBufferAttribute(v,e),f?Sc.addScaledVector(Dh,g):Sc.addScaledVector(Dh.sub(i),g))}i.add(Sc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vc.copy(r.boundingSphere),vc.applyMatrix4(c),hr.copy(e.ray).recast(e.near),!(vc.containsPoint(hr.origin)===!1&&(hr.intersectSphere(vc,t_)===null||hr.origin.distanceToSquared(t_)>(e.far-e.near)**2))&&(e_.copy(c).invert(),hr.copy(e.ray).applyMatrix4(e_),!(r.boundingBox!==null&&hr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,hr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,y=c.groups,E=c.drawRange;if(d!==null)if(Array.isArray(f))for(let b=0,A=y.length;b<A;b++){const S=y[b],_=f[S.materialIndex],O=Math.max(S.start,E.start),N=Math.min(d.count,Math.min(S.start+S.count,E.start+E.count));for(let U=O,I=N;U<I;U+=3){const G=d.getX(U),V=d.getX(U+1),Z=d.getX(U+2);l=Ec(this,_,e,r,p,g,v,G,V,Z),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),A=Math.min(d.count,E.start+E.count);for(let S=b,_=A;S<_;S+=3){const O=d.getX(S),N=d.getX(S+1),U=d.getX(S+2);l=Ec(this,f,e,r,p,g,v,O,N,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,A=y.length;b<A;b++){const S=y[b],_=f[S.materialIndex],O=Math.max(S.start,E.start),N=Math.min(m.count,Math.min(S.start+S.count,E.start+E.count));for(let U=O,I=N;U<I;U+=3){const G=U,V=U+1,Z=U+2;l=Ec(this,_,e,r,p,g,v,G,V,Z),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),A=Math.min(m.count,E.start+E.count);for(let S=b,_=A;S<_;S+=3){const O=S,N=S+1,U=S+2;l=Ec(this,f,e,r,p,g,v,O,N,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function IE(s,e,i,r,l,c,f,d){let m;if(e.side===Vn?m=r.intersectTriangle(f,c,l,!0,d):m=r.intersectTriangle(l,c,f,e.side===Wa,d),m===null)return null;Mc.copy(d),Mc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Mc);return p<i.near||p>i.far?null:{distance:p,point:Mc.clone(),object:s}}function Ec(s,e,i,r,l,c,f,d,m,p){s.getVertexPosition(d,_c),s.getVertexPosition(m,xc),s.getVertexPosition(p,yc);const g=IE(s,e,i,r,_c,xc,yc,n_);if(g){const v=new oe;Si.getBarycoord(n_,_c,xc,yc,v),l&&(g.uv=Si.getInterpolatedAttribute(l,d,m,p,v,new ct)),c&&(g.uv1=Si.getInterpolatedAttribute(c,d,m,p,v,new ct)),f&&(g.normal=Si.getInterpolatedAttribute(f,d,m,p,v,new oe),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new oe,materialIndex:0};Si.getNormal(_c,xc,yc,y.normal),g.face=y,g.barycoord=v}return g}class Ko extends fa{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],v=[];let y=0,E=0;b("z","y","x",-1,-1,r,i,e,f,c,0),b("z","y","x",1,-1,r,i,-e,f,c,1),b("x","z","y",1,1,e,r,i,l,f,2),b("x","z","y",1,-1,e,r,-i,l,f,3),b("x","y","z",1,-1,e,i,r,l,c,4),b("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new sa(p,3)),this.setAttribute("normal",new sa(g,3)),this.setAttribute("uv",new sa(v,2));function b(A,S,_,O,N,U,I,G,V,Z,C){const w=U/V,k=I/Z,ae=U/2,de=I/2,pe=G/2,fe=V+1,P=Z+1;let Q=0,j=0;const Se=new oe;for(let L=0;L<P;L++){const ee=L*k-de;for(let ye=0;ye<fe;ye++){const Me=ye*w-ae;Se[A]=Me*O,Se[S]=ee*N,Se[_]=pe,p.push(Se.x,Se.y,Se.z),Se[A]=0,Se[S]=0,Se[_]=G>0?1:-1,g.push(Se.x,Se.y,Se.z),v.push(ye/V),v.push(1-L/Z),Q+=1}}for(let L=0;L<Z;L++)for(let ee=0;ee<V;ee++){const ye=y+ee+fe*L,Me=y+ee+fe*(L+1),Ne=y+(ee+1)+fe*(L+1),Ge=y+(ee+1)+fe*L;m.push(ye,Me,Ge),m.push(Me,Ne,Ge),j+=6}d.addGroup(E,j,C),E+=j,y+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function As(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Nn(s){const e={};for(let i=0;i<s.length;i++){const r=As(s[i]);for(const l in r)e[l]=r[l]}return e}function BE(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function b0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const zE={clone:As,merge:Nn};var FE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ua extends Zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FE,this.fragmentShader=HE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=BE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class kc extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ga=new oe,i_=new ct,a_=new ct;class yi extends kc{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ud*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ch*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ud*2*Math.atan(Math.tan(ch*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ga.x,Ga.y).multiplyScalar(-e/Ga.z),Ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ga.x,Ga.y).multiplyScalar(-e/Ga.z)}getViewSize(e,i){return this.getViewBounds(e,i_,a_),i.subVectors(a_,i_)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ch*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gs=-90,vs=1;class GE extends kn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(gs,vs,e,i);l.layers=this.layers,this.add(l);const c=new yi(gs,vs,e,i);c.layers=this.layers,this.add(c);const f=new yi(gs,vs,e,i);f.layers=this.layers,this.add(f);const d=new yi(gs,vs,e,i);d.layers=this.layers,this.add(d);const m=new yi(gs,vs,e,i);m.layers=this.layers,this.add(m);const p=new yi(gs,vs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(e===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Gc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,g]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,y,E),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class T0 extends On{constructor(e=[],i=Es,r,l,c,f,d,m,p,g){super(e,i,r,l,c,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class VE extends ja{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new T0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ko(5,5,5),c=new ua({name:"CubemapFromEquirect",uniforms:As(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:ka});c.uniforms.tEquirect.value=i;const f=new ui(l,c),d=i.minFilter;return i.minFilter===yr&&(i.minFilter=Gn),new GE(1,10,this).update(e,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}class bc extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kE={type:"move"};class Uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const A of e.hand.values()){const S=i.getJointPose(A,r),_=this._getHandJoint(p,A);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],y=g.position.distanceTo(v.position),E=.02,b=.005;p.inputState.pinching&&y>E+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=E-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(kE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new bc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class r_ extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ca,this.environmentIntensity=1,this.environmentRotation=new ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class XE extends On{constructor(e=null,i=1,r=1,l,c,f,d,m,p=$n,g=$n,v,y){super(null,f,d,m,p,g,l,c,v,y),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lh=new oe,WE=new oe,jE=new ht;class gr{constructor(e=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Lh.subVectors(r,i).cross(WE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Lh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||jE.getNormalMatrix(e),l=this.coplanarPoint(Lh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new Zc,qE=new ct(.5,.5),Tc=new oe;class A0{constructor(e=new gr,i=new gr,r=new gr,l=new gr,c=new gr,f=new gr){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Oi,r=!1){const l=this.planes,c=e.elements,f=c[0],d=c[1],m=c[2],p=c[3],g=c[4],v=c[5],y=c[6],E=c[7],b=c[8],A=c[9],S=c[10],_=c[11],O=c[12],N=c[13],U=c[14],I=c[15];if(l[0].setComponents(p-f,E-g,_-b,I-O).normalize(),l[1].setComponents(p+f,E+g,_+b,I+O).normalize(),l[2].setComponents(p+d,E+v,_+A,I+N).normalize(),l[3].setComponents(p-d,E-v,_-A,I-N).normalize(),r)l[4].setComponents(m,y,S,U).normalize(),l[5].setComponents(p-m,E-y,_-S,I-U).normalize();else if(l[4].setComponents(p-m,E-y,_-S,I-U).normalize(),i===Oi)l[5].setComponents(p+m,E+y,_+S,I+U).normalize();else if(i===Gc)l[5].setComponents(m,y,S,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){dr.center.set(0,0,0);const i=qE.distanceTo(e.center);return dr.radius=.7071067811865476+i,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Tc.x=l.normal.x>0?e.max.x:e.min.x,Tc.y=l.normal.y>0?e.max.y:e.min.y,Tc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class YE extends Zo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xc=new oe,Wc=new oe,s_=new ln,Oo=new _0,Ac=new Zc,Nh=new oe,o_=new oe;class ZE extends kn{constructor(e=new fa,i=new YE){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)Xc.fromBufferAttribute(i,l-1),Wc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Xc.distanceTo(Wc);e.setAttribute("lineDistance",new sa(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ac.copy(r.boundingSphere),Ac.applyMatrix4(l),Ac.radius+=c,e.ray.intersectsSphere(Ac)===!1)return;s_.copy(l).invert(),Oo.copy(e.ray).applyMatrix4(s_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=r.index,y=r.attributes.position;if(g!==null){const E=Math.max(0,f.start),b=Math.min(g.count,f.start+f.count);for(let A=E,S=b-1;A<S;A+=p){const _=g.getX(A),O=g.getX(A+1),N=Rc(this,e,Oo,m,_,O,A);N&&i.push(N)}if(this.isLineLoop){const A=g.getX(b-1),S=g.getX(E),_=Rc(this,e,Oo,m,A,S,b-1);_&&i.push(_)}}else{const E=Math.max(0,f.start),b=Math.min(y.count,f.start+f.count);for(let A=E,S=b-1;A<S;A+=p){const _=Rc(this,e,Oo,m,A,A+1,A);_&&i.push(_)}if(this.isLineLoop){const A=Rc(this,e,Oo,m,b-1,E,b-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Rc(s,e,i,r,l,c,f){const d=s.geometry.attributes.position;if(Xc.fromBufferAttribute(d,l),Wc.fromBufferAttribute(d,c),i.distanceSqToSegment(Xc,Wc,Nh,o_)>r)return;Nh.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Nh);if(!(p<e.near||p>e.far))return{distance:p,point:o_.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}const l_=new oe,c_=new oe;class KE extends ZE{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)l_.fromBufferAttribute(i,l),c_.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+l_.distanceTo(c_);e.setAttribute("lineDistance",new sa(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class R0 extends On{constructor(e,i,r=Mr,l,c,f,d=$n,m=$n,p,g=Ho,v=1){if(g!==Ho&&g!==Go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:v};super(y,l,c,f,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class w0 extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Sr extends fa{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,v=e/d,y=i/m,E=[],b=[],A=[],S=[];for(let _=0;_<g;_++){const O=_*y-f;for(let N=0;N<p;N++){const U=N*v-c;b.push(U,-O,0),A.push(0,0,1),S.push(N/d),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let O=0;O<d;O++){const N=O+p*_,U=O+p*(_+1),I=O+1+p*(_+1),G=O+1+p*_;E.push(N,U,G),E.push(U,I,G)}this.setIndex(E),this.setAttribute("position",new sa(b,3)),this.setAttribute("normal",new sa(A,3)),this.setAttribute("uv",new sa(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.width,e.height,e.widthSegments,e.heightSegments)}}class wc extends ua{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class QE extends Zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JE extends Zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class $E extends kc{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class eb extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class tb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function u_(s,e,i,r){const l=nb(r);switch(i){case f0:return s*e;case d0:return s*e/l.components*l.byteLength;case kd:return s*e/l.components*l.byteLength;case p0:return s*e*2/l.components*l.byteLength;case Xd:return s*e*2/l.components*l.byteLength;case h0:return s*e*3/l.components*l.byteLength;case ci:return s*e*4/l.components*l.byteLength;case Wd:return s*e*4/l.components*l.byteLength;case Oc:case Pc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ic:case Bc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ad:case sd:return Math.max(s,16)*Math.max(e,8)/4;case id:case rd:return Math.max(s,8)*Math.max(e,8)/2;case od:case ld:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case cd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ud:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case hd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case dd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case pd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case md:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case gd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case vd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case _d:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case xd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case yd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Sd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Md:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ed:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case bd:case Td:case Ad:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Rd:case wd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Cd:case Dd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function nb(s){switch(s){case la:case o0:return{byteLength:1,components:1};case zo:case l0:case Cs:return{byteLength:2,components:1};case Gd:case Vd:return{byteLength:2,components:4};case Mr:case Hd:case Ni:return{byteLength:4,components:1};case c0:case u0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function C0(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function ib(s){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,y=s.createBuffer();s.bindBuffer(m,y),s.bufferData(m,p,g),d.onUploadCallback();let E;if(p instanceof Float32Array)E=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=s.HALF_FLOAT:E=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=s.SHORT;else if(p instanceof Uint32Array)E=s.UNSIGNED_INT;else if(p instanceof Int32Array)E=s.INT;else if(p instanceof Int8Array)E=s.BYTE;else if(p instanceof Uint8Array)E=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(s.bindBuffer(p,d),v.length===0)s.bufferSubData(p,0,g);else{v.sort((E,b)=>E.start-b.start);let y=0;for(let E=1;E<v.length;E++){const b=v[y],A=v[E];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++y,v[y]=A)}v.length=y+1;for(let E=0,b=v.length;E<b;E++){const A=v[E];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(s.deleteBuffer(m.buffer),e.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var ab=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rb=`#ifdef USE_ALPHAHASH
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
#endif`,sb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ob=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ub=`#ifdef USE_AOMAP
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
#endif`,fb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hb=`#ifdef USE_BATCHING
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
#endif`,db=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vb=`#ifdef USE_IRIDESCENCE
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
#endif`,_b=`#ifdef USE_BUMPMAP
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
#endif`,xb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ab=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rb=`#define PI 3.141592653589793
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
} // validated`,wb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cb=`vec3 transformedNormal = objectNormal;
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
#endif`,Db=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ub=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ob="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ib=`#ifdef USE_ENVMAP
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
#endif`,Bb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zb=`#ifdef USE_ENVMAP
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
#endif`,Fb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hb=`#ifdef USE_ENVMAP
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
#endif`,Gb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wb=`#ifdef USE_GRADIENTMAP
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
}`,jb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zb=`uniform bool receiveShadow;
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
#endif`,Kb=`#ifdef USE_ENVMAP
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
#endif`,Qb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$b=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tT=`PhysicalMaterial material;
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
#endif`,nT=`struct PhysicalMaterial {
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
}`,iT=`
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
#endif`,aT=`#if defined( RE_IndirectDiffuse )
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
#endif`,rT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dT=`#if defined( USE_POINTS_UV )
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
#endif`,pT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_T=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xT=`#ifdef USE_MORPHTARGETS
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
#endif`,yT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ST=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,MT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ET=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AT=`#ifdef USE_NORMALMAP
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
#endif`,RT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,NT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,VT=`float getShadowMask() {
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
}`,kT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XT=`#ifdef USE_SKINNING
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
#endif`,WT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jT=`#ifdef USE_SKINNING
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
#endif`,qT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,QT=`#ifdef USE_TRANSMISSION
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
#endif`,JT=`#ifdef USE_TRANSMISSION
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
#endif`,$T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aA=`uniform sampler2D t2D;
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
}`,rA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cA=`#include <common>
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
}`,uA=`#if DEPTH_PACKING == 3200
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
}`,fA=`#define DISTANCE
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
}`,hA=`#define DISTANCE
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
}`,dA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mA=`uniform float scale;
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
}`,gA=`uniform vec3 diffuse;
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
}`,vA=`#include <common>
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
}`,_A=`uniform vec3 diffuse;
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
}`,xA=`#define LAMBERT
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
}`,yA=`#define LAMBERT
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
}`,SA=`#define MATCAP
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
}`,MA=`#define MATCAP
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
}`,EA=`#define NORMAL
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
}`,bA=`#define NORMAL
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
}`,TA=`#define PHONG
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
}`,AA=`#define PHONG
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
}`,RA=`#define STANDARD
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
}`,wA=`#define STANDARD
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
}`,CA=`#define TOON
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
}`,DA=`#define TOON
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
}`,UA=`uniform float size;
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
}`,LA=`uniform vec3 diffuse;
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
}`,NA=`#include <common>
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
}`,OA=`uniform vec3 color;
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
}`,PA=`uniform float rotation;
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
}`,IA=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:ab,alphahash_pars_fragment:rb,alphamap_fragment:sb,alphamap_pars_fragment:ob,alphatest_fragment:lb,alphatest_pars_fragment:cb,aomap_fragment:ub,aomap_pars_fragment:fb,batching_pars_vertex:hb,batching_vertex:db,begin_vertex:pb,beginnormal_vertex:mb,bsdfs:gb,iridescence_fragment:vb,bumpmap_pars_fragment:_b,clipping_planes_fragment:xb,clipping_planes_pars_fragment:yb,clipping_planes_pars_vertex:Sb,clipping_planes_vertex:Mb,color_fragment:Eb,color_pars_fragment:bb,color_pars_vertex:Tb,color_vertex:Ab,common:Rb,cube_uv_reflection_fragment:wb,defaultnormal_vertex:Cb,displacementmap_pars_vertex:Db,displacementmap_vertex:Ub,emissivemap_fragment:Lb,emissivemap_pars_fragment:Nb,colorspace_fragment:Ob,colorspace_pars_fragment:Pb,envmap_fragment:Ib,envmap_common_pars_fragment:Bb,envmap_pars_fragment:zb,envmap_pars_vertex:Fb,envmap_physical_pars_fragment:Kb,envmap_vertex:Hb,fog_vertex:Gb,fog_pars_vertex:Vb,fog_fragment:kb,fog_pars_fragment:Xb,gradientmap_pars_fragment:Wb,lightmap_pars_fragment:jb,lights_lambert_fragment:qb,lights_lambert_pars_fragment:Yb,lights_pars_begin:Zb,lights_toon_fragment:Qb,lights_toon_pars_fragment:Jb,lights_phong_fragment:$b,lights_phong_pars_fragment:eT,lights_physical_fragment:tT,lights_physical_pars_fragment:nT,lights_fragment_begin:iT,lights_fragment_maps:aT,lights_fragment_end:rT,logdepthbuf_fragment:sT,logdepthbuf_pars_fragment:oT,logdepthbuf_pars_vertex:lT,logdepthbuf_vertex:cT,map_fragment:uT,map_pars_fragment:fT,map_particle_fragment:hT,map_particle_pars_fragment:dT,metalnessmap_fragment:pT,metalnessmap_pars_fragment:mT,morphinstance_vertex:gT,morphcolor_vertex:vT,morphnormal_vertex:_T,morphtarget_pars_vertex:xT,morphtarget_vertex:yT,normal_fragment_begin:ST,normal_fragment_maps:MT,normal_pars_fragment:ET,normal_pars_vertex:bT,normal_vertex:TT,normalmap_pars_fragment:AT,clearcoat_normal_fragment_begin:RT,clearcoat_normal_fragment_maps:wT,clearcoat_pars_fragment:CT,iridescence_pars_fragment:DT,opaque_fragment:UT,packing:LT,premultiplied_alpha_fragment:NT,project_vertex:OT,dithering_fragment:PT,dithering_pars_fragment:IT,roughnessmap_fragment:BT,roughnessmap_pars_fragment:zT,shadowmap_pars_fragment:FT,shadowmap_pars_vertex:HT,shadowmap_vertex:GT,shadowmask_pars_fragment:VT,skinbase_vertex:kT,skinning_pars_vertex:XT,skinning_vertex:WT,skinnormal_vertex:jT,specularmap_fragment:qT,specularmap_pars_fragment:YT,tonemapping_fragment:ZT,tonemapping_pars_fragment:KT,transmission_fragment:QT,transmission_pars_fragment:JT,uv_pars_fragment:$T,uv_pars_vertex:eA,uv_vertex:tA,worldpos_vertex:nA,background_vert:iA,background_frag:aA,backgroundCube_vert:rA,backgroundCube_frag:sA,cube_vert:oA,cube_frag:lA,depth_vert:cA,depth_frag:uA,distanceRGBA_vert:fA,distanceRGBA_frag:hA,equirect_vert:dA,equirect_frag:pA,linedashed_vert:mA,linedashed_frag:gA,meshbasic_vert:vA,meshbasic_frag:_A,meshlambert_vert:xA,meshlambert_frag:yA,meshmatcap_vert:SA,meshmatcap_frag:MA,meshnormal_vert:EA,meshnormal_frag:bA,meshphong_vert:TA,meshphong_frag:AA,meshphysical_vert:RA,meshphysical_frag:wA,meshtoon_vert:CA,meshtoon_frag:DA,points_vert:UA,points_frag:LA,shadow_vert:NA,shadow_frag:OA,sprite_vert:PA,sprite_frag:IA},Ie={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Li={basic:{uniforms:Nn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Nn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ct(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Nn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Nn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Nn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Ct(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Nn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Nn([Ie.points,Ie.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Nn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Nn([Ie.common,Ie.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Nn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Nn([Ie.sprite,Ie.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Nn([Ie.common,Ie.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Nn([Ie.lights,Ie.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Li.physical={uniforms:Nn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Cc={r:0,b:0,g:0},pr=new ca,BA=new ln;function zA(s,e,i,r,l,c,f){const d=new Ct(0);let m=c===!0?0:1,p,g,v=null,y=0,E=null;function b(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?i:e).get(U)),U}function A(N){let U=!1;const I=b(N);I===null?_(d,m):I&&I.isColor&&(_(I,1),U=!0);const G=s.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,f):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(N,U){const I=b(U);I&&(I.isCubeTexture||I.mapping===Yc)?(g===void 0&&(g=new ui(new Ko(1,1,1),new ua({name:"BackgroundCubeMaterial",uniforms:As(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,V,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),pr.copy(U.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(BA.makeRotationFromEuler(pr)),g.material.toneMapped=Rt.getTransfer(I.colorSpace)!==zt,(v!==I||y!==I.version||E!==s.toneMapping)&&(g.material.needsUpdate=!0,v=I,y=I.version,E=s.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new ui(new Sr(2,2),new ua({name:"BackgroundMaterial",uniforms:As(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(I.colorSpace)!==zt,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(v!==I||y!==I.version||E!==s.toneMapping)&&(p.material.needsUpdate=!0,v=I,y=I.version,E=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,U){N.getRGB(Cc,b0(s)),r.buffers.color.setClear(Cc.r,Cc.g,Cc.b,U,f)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,U=1){d.set(N),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(d,m)},render:A,addToRenderList:S,dispose:O}}function FA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,f=!1;function d(w,k,ae,de,pe){let fe=!1;const P=v(de,ae,k);c!==P&&(c=P,p(c.object)),fe=E(w,de,ae,pe),fe&&b(w,de,ae,pe),pe!==null&&e.update(pe,s.ELEMENT_ARRAY_BUFFER),(fe||f)&&(f=!1,U(w,k,ae,de),pe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function m(){return s.createVertexArray()}function p(w){return s.bindVertexArray(w)}function g(w){return s.deleteVertexArray(w)}function v(w,k,ae){const de=ae.wireframe===!0;let pe=r[w.id];pe===void 0&&(pe={},r[w.id]=pe);let fe=pe[k.id];fe===void 0&&(fe={},pe[k.id]=fe);let P=fe[de];return P===void 0&&(P=y(m()),fe[de]=P),P}function y(w){const k=[],ae=[],de=[];for(let pe=0;pe<i;pe++)k[pe]=0,ae[pe]=0,de[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ae,attributeDivisors:de,object:w,attributes:{},index:null}}function E(w,k,ae,de){const pe=c.attributes,fe=k.attributes;let P=0;const Q=ae.getAttributes();for(const j in Q)if(Q[j].location>=0){const L=pe[j];let ee=fe[j];if(ee===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(ee=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(ee=w.instanceColor)),L===void 0||L.attribute!==ee||ee&&L.data!==ee.data)return!0;P++}return c.attributesNum!==P||c.index!==de}function b(w,k,ae,de){const pe={},fe=k.attributes;let P=0;const Q=ae.getAttributes();for(const j in Q)if(Q[j].location>=0){let L=fe[j];L===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(L=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(L=w.instanceColor));const ee={};ee.attribute=L,L&&L.data&&(ee.data=L.data),pe[j]=ee,P++}c.attributes=pe,c.attributesNum=P,c.index=de}function A(){const w=c.newAttributes;for(let k=0,ae=w.length;k<ae;k++)w[k]=0}function S(w){_(w,0)}function _(w,k){const ae=c.newAttributes,de=c.enabledAttributes,pe=c.attributeDivisors;ae[w]=1,de[w]===0&&(s.enableVertexAttribArray(w),de[w]=1),pe[w]!==k&&(s.vertexAttribDivisor(w,k),pe[w]=k)}function O(){const w=c.newAttributes,k=c.enabledAttributes;for(let ae=0,de=k.length;ae<de;ae++)k[ae]!==w[ae]&&(s.disableVertexAttribArray(ae),k[ae]=0)}function N(w,k,ae,de,pe,fe,P){P===!0?s.vertexAttribIPointer(w,k,ae,pe,fe):s.vertexAttribPointer(w,k,ae,de,pe,fe)}function U(w,k,ae,de){A();const pe=de.attributes,fe=ae.getAttributes(),P=k.defaultAttributeValues;for(const Q in fe){const j=fe[Q];if(j.location>=0){let Se=pe[Q];if(Se===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(Se=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(Se=w.instanceColor)),Se!==void 0){const L=Se.normalized,ee=Se.itemSize,ye=e.get(Se);if(ye===void 0)continue;const Me=ye.buffer,Ne=ye.type,Ge=ye.bytesPerElement,ne=Ne===s.INT||Ne===s.UNSIGNED_INT||Se.gpuType===Hd;if(Se.isInterleavedBufferAttribute){const ve=Se.data,be=ve.stride,Ke=Se.offset;if(ve.isInstancedInterleavedBuffer){for(let qe=0;qe<j.locationSize;qe++)_(j.location+qe,ve.meshPerAttribute);w.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let qe=0;qe<j.locationSize;qe++)S(j.location+qe);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let qe=0;qe<j.locationSize;qe++)N(j.location+qe,ee/j.locationSize,Ne,L,be*Ge,(Ke+ee/j.locationSize*qe)*Ge,ne)}else{if(Se.isInstancedBufferAttribute){for(let ve=0;ve<j.locationSize;ve++)_(j.location+ve,Se.meshPerAttribute);w.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ve=0;ve<j.locationSize;ve++)S(j.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let ve=0;ve<j.locationSize;ve++)N(j.location+ve,ee/j.locationSize,Ne,L,ee*Ge,ee/j.locationSize*ve*Ge,ne)}}else if(P!==void 0){const L=P[Q];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(j.location,L);break;case 3:s.vertexAttrib3fv(j.location,L);break;case 4:s.vertexAttrib4fv(j.location,L);break;default:s.vertexAttrib1fv(j.location,L)}}}}O()}function I(){Z();for(const w in r){const k=r[w];for(const ae in k){const de=k[ae];for(const pe in de)g(de[pe].object),delete de[pe];delete k[ae]}delete r[w]}}function G(w){if(r[w.id]===void 0)return;const k=r[w.id];for(const ae in k){const de=k[ae];for(const pe in de)g(de[pe].object),delete de[pe];delete k[ae]}delete r[w.id]}function V(w){for(const k in r){const ae=r[k];if(ae[w.id]===void 0)continue;const de=ae[w.id];for(const pe in de)g(de[pe].object),delete de[pe];delete ae[w.id]}}function Z(){C(),f=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:C,dispose:I,releaseStatesOfGeometry:G,releaseStatesOfProgram:V,initAttributes:A,enableAttribute:S,disableUnusedAttributes:O}}function HA(s,e,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function f(p,g,v){v!==0&&(s.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function d(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let E=0;for(let b=0;b<v;b++)E+=g[b];i.update(E,r,1)}function m(p,g,v,y){if(v===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let b=0;b<p.length;b++)f(p[b],g[b],y[b]);else{E.multiDrawArraysInstancedWEBGL(r,p,0,g,0,y,0,v);let b=0;for(let A=0;A<v;A++)b+=g[A]*y[A];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function GA(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(V){return!(V!==ci&&r.convert(V)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(V){const Z=V===Cs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==la&&r.convert(V)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==Ni&&!Z)}function m(V){if(V==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=b>0,G=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:y,maxTextures:E,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:O,maxVaryings:N,maxFragmentUniforms:U,vertexTextures:I,maxSamples:G}}function VA(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new gr,d=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const E=v.length!==0||y||r!==0||l;return l=y,r=v.length,E},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,y){i=g(v,y,0)},this.setState=function(v,y,E){const b=v.clippingPlanes,A=v.clipIntersection,S=v.clipShadows,_=s.get(v);if(!l||b===null||b.length===0||c&&!S)c?g(null):p();else{const O=c?0:r,N=O*4;let U=_.clippingState||null;m.value=U,U=g(b,y,N,E);for(let I=0;I!==N;++I)U[I]=i[I];_.clippingState=U,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,y,E,b){const A=v!==null?v.length:0;let S=null;if(A!==0){if(S=m.value,b!==!0||S===null){const _=E+A*4,O=y.matrixWorldInverse;d.getNormalMatrix(O),(S===null||S.length<_)&&(S=new Float32Array(_));for(let N=0,U=E;N!==A;++N,U+=4)f.copy(v[N]).applyMatrix4(O,d),f.normal.toArray(S,U),S[U+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function kA(s){let e=new WeakMap;function i(f,d){return d===$h?f.mapping=Es:d===ed&&(f.mapping=bs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===$h||d===ed)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new VE(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const xs=4,f_=[.125,.215,.35,.446,.526,.582],xr=20,Oh=new $E,h_=new Ct;let Ph=null,Ih=0,Bh=0,zh=!1;const vr=(1+Math.sqrt(5))/2,_s=1/vr,d_=[new oe(-vr,_s,0),new oe(vr,_s,0),new oe(-_s,0,vr),new oe(_s,0,vr),new oe(0,vr,-_s),new oe(0,vr,_s),new oe(-1,1,-1),new oe(1,1,-1),new oe(-1,1,1),new oe(1,1,1)],XA=new oe;class p_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:d=XA}=c;Ph=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=g_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ph,Ih,Bh),this._renderer.xr.enabled=zh,e.scissorTest=!1,Dc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Es||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ph=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Cs,format:ci,colorSpace:Ts,depthBuffer:!1},l=m_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=m_(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WA(c)),this._blurMaterial=jA(c,e,i)}return l}_compileMaterial(e){const i=new ui(this._lodPlanes[0],e);this._renderer.compile(i,Oh)}_sceneToCubeUV(e,i,r,l,c){const m=new yi(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,E=v.toneMapping;v.getClearColor(h_),v.toneMapping=Xa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const A=new S0({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),S=new ui(new Ko,A);let _=!1;const O=e.background;O?O.isColor&&(A.color.copy(O),e.background=null,_=!0):(A.color.copy(h_),_=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[N],c.y,c.z)):U===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[N]));const I=this._cubeSize;Dc(l,U*I,N>2?I:0,I,I),v.setRenderTarget(l),_&&v.render(S,m),v.render(e,m)}S.geometry.dispose(),S.material.dispose(),v.toneMapping=E,v.autoClear=y,e.background=O}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Es||e.mapping===bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=v_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=g_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new ui(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Dc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Oh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=d_[(l-c-1)%d_.length];this._blur(e,c-1,c,f,d)}i.autoClear=r}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new ui(this._lodPlanes[l],p),y=p.uniforms,E=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*xr-1),A=c/b,S=isFinite(c)?1+Math.floor(g*A):xr;S>xr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${xr}`);const _=[];let O=0;for(let V=0;V<xr;++V){const Z=V/A,C=Math.exp(-Z*Z/2);_.push(C),V===0?O+=C:V<S&&(O+=2*C)}for(let V=0;V<_.length;V++)_[V]=_[V]/O;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=_,y.latitudinal.value=f==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:N}=this;y.dTheta.value=b,y.mipInt.value=N-r;const U=this._sizeLods[l],I=3*U*(l>N-xs?l-N+xs:0),G=4*(this._cubeSize-U);Dc(i,I,G,3*U,2*U),m.setRenderTarget(i),m.render(v,Oh)}}function WA(s){const e=[],i=[],r=[];let l=s;const c=s-xs+1+f_.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>s-xs?m=f_[f-s+xs-1]:f===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,v=1+p,y=[g,g,v,g,v,v,g,g,v,v,g,v],E=6,b=6,A=3,S=2,_=1,O=new Float32Array(A*b*E),N=new Float32Array(S*b*E),U=new Float32Array(_*b*E);for(let G=0;G<E;G++){const V=G%3*2/3-1,Z=G>2?0:-1,C=[V,Z,0,V+2/3,Z,0,V+2/3,Z+1,0,V,Z,0,V+2/3,Z+1,0,V,Z+1,0];O.set(C,A*b*G),N.set(y,S*b*G);const w=[G,G,G,G,G,G];U.set(w,_*b*G)}const I=new fa;I.setAttribute("position",new Ei(O,A)),I.setAttribute("uv",new Ei(N,S)),I.setAttribute("faceIndex",new Ei(U,_)),e.push(I),l>xs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function m_(s,e,i){const r=new ja(s,e,i);return r.texture.mapping=Yc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Dc(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function jA(s,e,i){const r=new Float32Array(xr),l=new oe(0,1,0);return new ua({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:qd(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function g_(){return new ua({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qd(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function v_(){return new ua({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function qd(){return`

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
	`}function qA(s){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===$h||m===ed,g=m===Es||m===bs;if(p||g){let v=e.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new p_(s)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const E=d.image;return p&&E&&E.height>0||g&&E&&l(E)?(i===null&&(i=new p_(s)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function YA(s){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Vo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function ZA(s,e,i,r){const l={},c=new WeakMap;function f(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const b in y.attributes)e.remove(y.attributes[b]);y.removeEventListener("dispose",f),delete l[y.id];const E=c.get(y);E&&(e.remove(E),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(v,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,i.memory.geometries++),y}function m(v){const y=v.attributes;for(const E in y)e.update(y[E],s.ARRAY_BUFFER)}function p(v){const y=[],E=v.index,b=v.attributes.position;let A=0;if(E!==null){const O=E.array;A=E.version;for(let N=0,U=O.length;N<U;N+=3){const I=O[N+0],G=O[N+1],V=O[N+2];y.push(I,G,G,V,V,I)}}else if(b!==void 0){const O=b.array;A=b.version;for(let N=0,U=O.length/3-1;N<U;N+=3){const I=N+0,G=N+1,V=N+2;y.push(I,G,G,V,V,I)}}else return;const S=new(g0(y)?E0:M0)(y,1);S.version=A;const _=c.get(v);_&&e.remove(_),c.set(v,S)}function g(v){const y=c.get(v);if(y){const E=v.index;E!==null&&y.version<E.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function KA(s,e,i){let r;function l(y){r=y}let c,f;function d(y){c=y.type,f=y.bytesPerElement}function m(y,E){s.drawElements(r,E,c,y*f),i.update(E,r,1)}function p(y,E,b){b!==0&&(s.drawElementsInstanced(r,E,c,y*f,b),i.update(E,r,b))}function g(y,E,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,c,y,0,b);let S=0;for(let _=0;_<b;_++)S+=E[_];i.update(S,r,1)}function v(y,E,b,A){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<y.length;_++)p(y[_]/f,E[_],A[_]);else{S.multiDrawElementsInstancedWEBGL(r,E,0,c,y,0,A,0,b);let _=0;for(let O=0;O<b;O++)_+=E[O]*A[O];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function QA(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function JA(s,e,i){const r=new WeakMap,l=new en;function c(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let y=r.get(d);if(y===void 0||y.count!==v){let w=function(){Z.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var E=w;y!==void 0&&y.texture.dispose();const b=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let U=0;b===!0&&(U=1),A===!0&&(U=2),S===!0&&(U=3);let I=d.attributes.position.count*U,G=1;I>e.maxTextureSize&&(G=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const V=new Float32Array(I*G*4*v),Z=new v0(V,I,G,v);Z.type=Ni,Z.needsUpdate=!0;const C=U*4;for(let k=0;k<v;k++){const ae=_[k],de=O[k],pe=N[k],fe=I*G*4*k;for(let P=0;P<ae.count;P++){const Q=P*C;b===!0&&(l.fromBufferAttribute(ae,P),V[fe+Q+0]=l.x,V[fe+Q+1]=l.y,V[fe+Q+2]=l.z,V[fe+Q+3]=0),A===!0&&(l.fromBufferAttribute(de,P),V[fe+Q+4]=l.x,V[fe+Q+5]=l.y,V[fe+Q+6]=l.z,V[fe+Q+7]=0),S===!0&&(l.fromBufferAttribute(pe,P),V[fe+Q+8]=l.x,V[fe+Q+9]=l.y,V[fe+Q+10]=l.z,V[fe+Q+11]=pe.itemSize===4?l.w:1)}}y={count:v,texture:Z,size:new ct(I,G)},r.set(d,y),d.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let b=0;for(let S=0;S<p.length;S++)b+=p[S];const A=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function $A(s,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return v}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const D0=new On,__=new R0(1,1),U0=new v0,L0=new TE,N0=new T0,x_=[],y_=[],S_=new Float32Array(16),M_=new Float32Array(9),E_=new Float32Array(4);function Us(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=x_[l];if(c===void 0&&(c=new Float32Array(l),x_[l]=c),e!==0){r.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=i,s[f].toArray(c,d)}return c}function dn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function pn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function Kc(s,e){let i=y_[e];i===void 0&&(i=new Int32Array(e),y_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function e1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function t1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;s.uniform2fv(this.addr,e),pn(i,e)}}function n1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(dn(i,e))return;s.uniform3fv(this.addr,e),pn(i,e)}}function i1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;s.uniform4fv(this.addr,e),pn(i,e)}}function a1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,r))return;E_.set(r),s.uniformMatrix2fv(this.addr,!1,E_),pn(i,r)}}function r1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,r))return;M_.set(r),s.uniformMatrix3fv(this.addr,!1,M_),pn(i,r)}}function s1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,r))return;S_.set(r),s.uniformMatrix4fv(this.addr,!1,S_),pn(i,r)}}function o1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function l1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;s.uniform2iv(this.addr,e),pn(i,e)}}function c1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dn(i,e))return;s.uniform3iv(this.addr,e),pn(i,e)}}function u1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;s.uniform4iv(this.addr,e),pn(i,e)}}function f1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function h1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;s.uniform2uiv(this.addr,e),pn(i,e)}}function d1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dn(i,e))return;s.uniform3uiv(this.addr,e),pn(i,e)}}function p1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;s.uniform4uiv(this.addr,e),pn(i,e)}}function m1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(__.compareFunction=m0,c=__):c=D0,i.setTexture2D(e||c,l)}function g1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||L0,l)}function v1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||N0,l)}function _1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||U0,l)}function x1(s){switch(s){case 5126:return e1;case 35664:return t1;case 35665:return n1;case 35666:return i1;case 35674:return a1;case 35675:return r1;case 35676:return s1;case 5124:case 35670:return o1;case 35667:case 35671:return l1;case 35668:case 35672:return c1;case 35669:case 35673:return u1;case 5125:return f1;case 36294:return h1;case 36295:return d1;case 36296:return p1;case 35678:case 36198:case 36298:case 36306:case 35682:return m1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return v1;case 36289:case 36303:case 36311:case 36292:return _1}}function y1(s,e){s.uniform1fv(this.addr,e)}function S1(s,e){const i=Us(e,this.size,2);s.uniform2fv(this.addr,i)}function M1(s,e){const i=Us(e,this.size,3);s.uniform3fv(this.addr,i)}function E1(s,e){const i=Us(e,this.size,4);s.uniform4fv(this.addr,i)}function b1(s,e){const i=Us(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function T1(s,e){const i=Us(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function A1(s,e){const i=Us(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function R1(s,e){s.uniform1iv(this.addr,e)}function w1(s,e){s.uniform2iv(this.addr,e)}function C1(s,e){s.uniform3iv(this.addr,e)}function D1(s,e){s.uniform4iv(this.addr,e)}function U1(s,e){s.uniform1uiv(this.addr,e)}function L1(s,e){s.uniform2uiv(this.addr,e)}function N1(s,e){s.uniform3uiv(this.addr,e)}function O1(s,e){s.uniform4uiv(this.addr,e)}function P1(s,e,i){const r=this.cache,l=e.length,c=Kc(i,l);dn(r,c)||(s.uniform1iv(this.addr,c),pn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||D0,c[f])}function I1(s,e,i){const r=this.cache,l=e.length,c=Kc(i,l);dn(r,c)||(s.uniform1iv(this.addr,c),pn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||L0,c[f])}function B1(s,e,i){const r=this.cache,l=e.length,c=Kc(i,l);dn(r,c)||(s.uniform1iv(this.addr,c),pn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||N0,c[f])}function z1(s,e,i){const r=this.cache,l=e.length,c=Kc(i,l);dn(r,c)||(s.uniform1iv(this.addr,c),pn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||U0,c[f])}function F1(s){switch(s){case 5126:return y1;case 35664:return S1;case 35665:return M1;case 35666:return E1;case 35674:return b1;case 35675:return T1;case 35676:return A1;case 5124:case 35670:return R1;case 35667:case 35671:return w1;case 35668:case 35672:return C1;case 35669:case 35673:return D1;case 5125:return U1;case 36294:return L1;case 36295:return N1;case 36296:return O1;case 35678:case 36198:case 36298:case 36306:case 35682:return P1;case 35679:case 36299:case 36307:return I1;case 35680:case 36300:case 36308:case 36293:return B1;case 36289:case 36303:case 36311:case 36292:return z1}}class H1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=x1(i.type)}}class G1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=F1(i.type)}}class V1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const Fh=/(\w+)(\])?(\[|\.)?/g;function b_(s,e){s.seq.push(e),s.map[e.id]=e}function k1(s,e,i){const r=s.name,l=r.length;for(Fh.lastIndex=0;;){const c=Fh.exec(r),f=Fh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){b_(i,p===void 0?new H1(d,s,e):new G1(d,s,e));break}else{let v=i.map[d];v===void 0&&(v=new V1(d),b_(i,v)),i=v}}}class zc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);k1(c,f,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function T_(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const X1=37297;let W1=0;function j1(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}const A_=new ht;function q1(s){Rt._getMatrix(A_,Rt.workingColorSpace,s);const e=`mat3( ${A_.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(s)){case Hc:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function R_(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+j1(s.getShaderSource(e),d)}else return c}function Y1(s,e){const i=q1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Z1(s,e){let i;switch(e){case JM:i="Linear";break;case $M:i="Reinhard";break;case eE:i="Cineon";break;case tE:i="ACESFilmic";break;case iE:i="AgX";break;case aE:i="Neutral";break;case nE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uc=new oe;function K1(){Rt.getLuminanceCoefficients(Uc);const s=Uc.x.toFixed(4),e=Uc.y.toFixed(4),i=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function J1(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function $1(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:d}}return i}function Po(s){return s!==""}function w_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function C_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ld(s){return s.replace(eR,nR)}const tR=new Map;function nR(s,e){let i=mt[e];if(i===void 0){const r=tR.get(e);if(r!==void 0)i=mt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ld(i)}const iR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function D_(s){return s.replace(iR,aR)}function aR(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function U_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rR(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===a0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===UM?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===na&&(e="SHADOWMAP_TYPE_VSM"),e}function sR(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Es:case bs:e="ENVMAP_TYPE_CUBE";break;case Yc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oR(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function lR(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case r0:e="ENVMAP_BLENDING_MULTIPLY";break;case KM:e="ENVMAP_BLENDING_MIX";break;case QM:e="ENVMAP_BLENDING_ADD";break}return e}function cR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function uR(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=rR(i),p=sR(i),g=oR(i),v=lR(i),y=cR(i),E=Q1(i),b=J1(c),A=l.createProgram();let S,_,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Po).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Po).join(`
`),_.length>0&&(_+=`
`)):(S=[U_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),_=[U_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xa?"#define TONE_MAPPING":"",i.toneMapping!==Xa?mt.tonemapping_pars_fragment:"",i.toneMapping!==Xa?Z1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,Y1("linearToOutputTexel",i.outputColorSpace),K1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Po).join(`
`)),f=Ld(f),f=w_(f,i),f=C_(f,i),d=Ld(d),d=w_(d,i),d=C_(d,i),f=D_(f),d=D_(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===Gv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Gv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=O+S+f,U=O+_+d,I=T_(l,l.VERTEX_SHADER,N),G=T_(l,l.FRAGMENT_SHADER,U);l.attachShader(A,I),l.attachShader(A,G),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function V(k){if(s.debug.checkShaderErrors){const ae=l.getProgramInfoLog(A)||"",de=l.getShaderInfoLog(I)||"",pe=l.getShaderInfoLog(G)||"",fe=ae.trim(),P=de.trim(),Q=pe.trim();let j=!0,Se=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,I,G);else{const L=R_(l,I,"vertex"),ee=R_(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+fe+`
`+L+`
`+ee)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(P===""||Q==="")&&(Se=!1);Se&&(k.diagnostics={runnable:j,programLog:fe,vertexShader:{log:P,prefix:S},fragmentShader:{log:Q,prefix:_}})}l.deleteShader(I),l.deleteShader(G),Z=new zc(l,A),C=$1(l,A)}let Z;this.getUniforms=function(){return Z===void 0&&V(this),Z};let C;this.getAttributes=function(){return C===void 0&&V(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(A,X1)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=W1++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=I,this.fragmentShader=G,this}let fR=0;class hR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new dR(e),i.set(e,r)),r}}class dR{constructor(e){this.id=fR++,this.code=e,this.usedTimes=0}}function pR(s,e,i,r,l,c,f){const d=new x0,m=new hR,p=new Set,g=[],v=l.logarithmicDepthBuffer,y=l.vertexTextures;let E=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return p.add(C),C===0?"uv":`uv${C}`}function S(C,w,k,ae,de){const pe=ae.fog,fe=de.geometry,P=C.isMeshStandardMaterial?ae.environment:null,Q=(C.isMeshStandardMaterial?i:e).get(C.envMap||P),j=Q&&Q.mapping===Yc?Q.image.height:null,Se=b[C.type];C.precision!==null&&(E=l.getMaxPrecision(C.precision),E!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",E,"instead."));const L=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,ee=L!==void 0?L.length:0;let ye=0;fe.morphAttributes.position!==void 0&&(ye=1),fe.morphAttributes.normal!==void 0&&(ye=2),fe.morphAttributes.color!==void 0&&(ye=3);let Me,Ne,Ge,ne;if(Se){const bt=Li[Se];Me=bt.vertexShader,Ne=bt.fragmentShader}else Me=C.vertexShader,Ne=C.fragmentShader,m.update(C),Ge=m.getVertexShaderID(C),ne=m.getFragmentShaderID(C);const ve=s.getRenderTarget(),be=s.state.buffers.depth.getReversed(),Ke=de.isInstancedMesh===!0,qe=de.isBatchedMesh===!0,ut=!!C.map,Zt=!!C.matcap,F=!!Q,Dt=!!C.aoMap,st=!!C.lightMap,et=!!C.bumpMap,Be=!!C.normalMap,Mt=!!C.displacementMap,Ve=!!C.emissiveMap,ot=!!C.metalnessMap,Gt=!!C.roughnessMap,Vt=C.anisotropy>0,D=C.clearcoat>0,x=C.dispersion>0,H=C.iridescence>0,J=C.sheen>0,ce=C.transmission>0,ie=Vt&&!!C.anisotropyMap,Re=D&&!!C.clearcoatMap,we=D&&!!C.clearcoatNormalMap,ze=D&&!!C.clearcoatRoughnessMap,ke=H&&!!C.iridescenceMap,Ee=H&&!!C.iridescenceThicknessMap,Ue=J&&!!C.sheenColorMap,Qe=J&&!!C.sheenRoughnessMap,je=!!C.specularMap,Le=!!C.specularColorMap,lt=!!C.specularIntensityMap,W=ce&&!!C.transmissionMap,Ce=ce&&!!C.thicknessMap,De=!!C.gradientMap,Fe=!!C.alphaMap,Te=C.alphaTest>0,xe=!!C.alphaHash,We=!!C.extensions;let rt=Xa;C.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(rt=s.toneMapping);const Ut={shaderID:Se,shaderType:C.type,shaderName:C.name,vertexShader:Me,fragmentShader:Ne,defines:C.defines,customVertexShaderID:Ge,customFragmentShaderID:ne,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:E,batching:qe,batchingColor:qe&&de._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&de.instanceColor!==null,instancingMorph:Ke&&de.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ts,alphaToCoverage:!!C.alphaToCoverage,map:ut,matcap:Zt,envMap:F,envMapMode:F&&Q.mapping,envMapCubeUVHeight:j,aoMap:Dt,lightMap:st,bumpMap:et,normalMap:Be,displacementMap:y&&Mt,emissiveMap:Ve,normalMapObjectSpace:Be&&C.normalMapType===cE,normalMapTangentSpace:Be&&C.normalMapType===lE,metalnessMap:ot,roughnessMap:Gt,anisotropy:Vt,anisotropyMap:ie,clearcoat:D,clearcoatMap:Re,clearcoatNormalMap:we,clearcoatRoughnessMap:ze,dispersion:x,iridescence:H,iridescenceMap:ke,iridescenceThicknessMap:Ee,sheen:J,sheenColorMap:Ue,sheenRoughnessMap:Qe,specularMap:je,specularColorMap:Le,specularIntensityMap:lt,transmission:ce,transmissionMap:W,thicknessMap:Ce,gradientMap:De,opaque:C.transparent===!1&&C.blending===ys&&C.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Te,alphaHash:xe,combine:C.combine,mapUv:ut&&A(C.map.channel),aoMapUv:Dt&&A(C.aoMap.channel),lightMapUv:st&&A(C.lightMap.channel),bumpMapUv:et&&A(C.bumpMap.channel),normalMapUv:Be&&A(C.normalMap.channel),displacementMapUv:Mt&&A(C.displacementMap.channel),emissiveMapUv:Ve&&A(C.emissiveMap.channel),metalnessMapUv:ot&&A(C.metalnessMap.channel),roughnessMapUv:Gt&&A(C.roughnessMap.channel),anisotropyMapUv:ie&&A(C.anisotropyMap.channel),clearcoatMapUv:Re&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:we&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&A(C.sheenRoughnessMap.channel),specularMapUv:je&&A(C.specularMap.channel),specularColorMapUv:Le&&A(C.specularColorMap.channel),specularIntensityMapUv:lt&&A(C.specularIntensityMap.channel),transmissionMapUv:W&&A(C.transmissionMap.channel),thicknessMapUv:Ce&&A(C.thicknessMap.channel),alphaMapUv:Fe&&A(C.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Be||Vt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:de.isPoints===!0&&!!fe.attributes.uv&&(ut||Fe),fog:!!pe,useFog:C.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:be,skinning:de.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ye,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:ut&&C.map.isVideoTexture===!0&&Rt.getTransfer(C.map.colorSpace)===zt,decodeVideoTextureEmissive:Ve&&C.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(C.emissiveMap.colorSpace)===zt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ia,flipSided:C.side===Vn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:We&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&C.extensions.multiDraw===!0||qe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ut.vertexUv1s=p.has(1),Ut.vertexUv2s=p.has(2),Ut.vertexUv3s=p.has(3),p.clear(),Ut}function _(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)w.push(k),w.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(O(w,C),N(w,C),w.push(s.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function O(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function N(C,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function U(C){const w=b[C.type];let k;if(w){const ae=Li[w];k=zE.clone(ae.uniforms)}else k=C.uniforms;return k}function I(C,w){let k;for(let ae=0,de=g.length;ae<de;ae++){const pe=g[ae];if(pe.cacheKey===w){k=pe,++k.usedTimes;break}}return k===void 0&&(k=new uR(s,w,C,c),g.push(k)),k}function G(C){if(--C.usedTimes===0){const w=g.indexOf(C);g[w]=g[g.length-1],g.pop(),C.destroy()}}function V(C){m.remove(C)}function Z(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:U,acquireProgram:I,releaseProgram:G,releaseShaderCache:V,programs:g,dispose:Z}}function mR(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function l(f,d,m){s.get(f)[d]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function gR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function L_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function N_(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(v,y,E,b,A,S){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:E,groupOrder:b,renderOrder:v.renderOrder,z:A,group:S},s[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=E,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=A,_.group=S),e++,_}function d(v,y,E,b,A,S){const _=f(v,y,E,b,A,S);E.transmission>0?r.push(_):E.transparent===!0?l.push(_):i.push(_)}function m(v,y,E,b,A,S){const _=f(v,y,E,b,A,S);E.transmission>0?r.unshift(_):E.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,y){i.length>1&&i.sort(v||gR),r.length>1&&r.sort(y||L_),l.length>1&&l.sort(y||L_)}function g(){for(let v=e,y=s.length;v<y;v++){const E=s[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function vR(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new N_,s.set(r,[f])):l>=c.length?(f=new N_,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function _R(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new oe,color:new Ct};break;case"SpotLight":i={position:new oe,direction:new oe,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":i={color:new Ct,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return s[e.id]=i,i}}}function xR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let yR=0;function SR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function MR(s){const e=new _R,i=xR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new oe);const l=new oe,c=new ln,f=new ln;function d(p){let g=0,v=0,y=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let E=0,b=0,A=0,S=0,_=0,O=0,N=0,U=0,I=0,G=0,V=0;p.sort(SR);for(let C=0,w=p.length;C<w;C++){const k=p[C],ae=k.color,de=k.intensity,pe=k.distance,fe=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=ae.r*de,v+=ae.g*de,y+=ae.b*de;else if(k.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(k.sh.coefficients[P],de);V++}else if(k.isDirectionalLight){const P=e.get(k);if(P.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Q=k.shadow,j=i.get(k);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,r.directionalShadow[E]=j,r.directionalShadowMap[E]=fe,r.directionalShadowMatrix[E]=k.shadow.matrix,O++}r.directional[E]=P,E++}else if(k.isSpotLight){const P=e.get(k);P.position.setFromMatrixPosition(k.matrixWorld),P.color.copy(ae).multiplyScalar(de),P.distance=pe,P.coneCos=Math.cos(k.angle),P.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),P.decay=k.decay,r.spot[A]=P;const Q=k.shadow;if(k.map&&(r.spotLightMap[I]=k.map,I++,Q.updateMatrices(k),k.castShadow&&G++),r.spotLightMatrix[A]=Q.matrix,k.castShadow){const j=i.get(k);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,r.spotShadow[A]=j,r.spotShadowMap[A]=fe,U++}A++}else if(k.isRectAreaLight){const P=e.get(k);P.color.copy(ae).multiplyScalar(de),P.halfWidth.set(k.width*.5,0,0),P.halfHeight.set(0,k.height*.5,0),r.rectArea[S]=P,S++}else if(k.isPointLight){const P=e.get(k);if(P.color.copy(k.color).multiplyScalar(k.intensity),P.distance=k.distance,P.decay=k.decay,k.castShadow){const Q=k.shadow,j=i.get(k);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,r.pointShadow[b]=j,r.pointShadowMap[b]=fe,r.pointShadowMatrix[b]=k.shadow.matrix,N++}r.point[b]=P,b++}else if(k.isHemisphereLight){const P=e.get(k);P.skyColor.copy(k.color).multiplyScalar(de),P.groundColor.copy(k.groundColor).multiplyScalar(de),r.hemi[_]=P,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=y;const Z=r.hash;(Z.directionalLength!==E||Z.pointLength!==b||Z.spotLength!==A||Z.rectAreaLength!==S||Z.hemiLength!==_||Z.numDirectionalShadows!==O||Z.numPointShadows!==N||Z.numSpotShadows!==U||Z.numSpotMaps!==I||Z.numLightProbes!==V)&&(r.directional.length=E,r.spot.length=A,r.rectArea.length=S,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=U+I-G,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=V,Z.directionalLength=E,Z.pointLength=b,Z.spotLength=A,Z.rectAreaLength=S,Z.hemiLength=_,Z.numDirectionalShadows=O,Z.numPointShadows=N,Z.numSpotShadows=U,Z.numSpotMaps=I,Z.numLightProbes=V,r.version=yR++)}function m(p,g){let v=0,y=0,E=0,b=0,A=0;const S=g.matrixWorldInverse;for(let _=0,O=p.length;_<O;_++){const N=p[_];if(N.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),v++}else if(N.isSpotLight){const U=r.spot[E];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),E++}else if(N.isRectAreaLight){const U=r.rectArea[b];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(S),f.identity(),c.copy(N.matrixWorld),c.premultiply(S),f.extractRotation(c),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),b++}else if(N.isPointLight){const U=r.point[y];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(S),y++}else if(N.isHemisphereLight){const U=r.hemi[A];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(S),A++}}}return{setup:d,setupView:m,state:r}}function O_(s){const e=new MR(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function f(g){r.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function ER(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let d;return f===void 0?(d=new O_(s),e.set(l,[d])):c>=f.length?(d=new O_(s),f.push(d)):d=f[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const bR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TR=`uniform sampler2D shadow_pass;
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
}`;function AR(s,e,i){let r=new A0;const l=new ct,c=new ct,f=new en,d=new QE({depthPacking:oE}),m=new JE,p={},g=i.maxTextureSize,v={[Wa]:Vn,[Vn]:Wa,[ia]:ia},y=new ua({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:bR,fragmentShader:TR}),E=y.clone();E.defines.HORIZONTAL_PASS=1;const b=new fa;b.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ui(b,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=a0;let _=this.type;this.render=function(G,V,Z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||G.length===0)return;const C=s.getRenderTarget(),w=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),ae=s.state;ae.setBlending(ka),ae.buffers.depth.getReversed()===!0?ae.buffers.color.setClear(0,0,0,0):ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const de=_!==na&&this.type===na,pe=_===na&&this.type!==na;for(let fe=0,P=G.length;fe<P;fe++){const Q=G[fe],j=Q.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const Se=j.getFrameExtents();if(l.multiply(Se),c.copy(j.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/Se.x),l.x=c.x*Se.x,j.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/Se.y),l.y=c.y*Se.y,j.mapSize.y=c.y)),j.map===null||de===!0||pe===!0){const ee=this.type!==na?{minFilter:$n,magFilter:$n}:{};j.map!==null&&j.map.dispose(),j.map=new ja(l.x,l.y,ee),j.map.texture.name=Q.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const L=j.getViewportCount();for(let ee=0;ee<L;ee++){const ye=j.getViewport(ee);f.set(c.x*ye.x,c.y*ye.y,c.x*ye.z,c.y*ye.w),ae.viewport(f),j.updateMatrices(Q,ee),r=j.getFrustum(),U(V,Z,j.camera,Q,this.type)}j.isPointLightShadow!==!0&&this.type===na&&O(j,Z),j.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(C,w,k)};function O(G,V){const Z=e.update(A);y.defines.VSM_SAMPLES!==G.blurSamples&&(y.defines.VSM_SAMPLES=G.blurSamples,E.defines.VSM_SAMPLES=G.blurSamples,y.needsUpdate=!0,E.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new ja(l.x,l.y)),y.uniforms.shadow_pass.value=G.map.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,s.setRenderTarget(G.mapPass),s.clear(),s.renderBufferDirect(V,null,Z,y,A,null),E.uniforms.shadow_pass.value=G.mapPass.texture,E.uniforms.resolution.value=G.mapSize,E.uniforms.radius.value=G.radius,s.setRenderTarget(G.map),s.clear(),s.renderBufferDirect(V,null,Z,E,A,null)}function N(G,V,Z,C){let w=null;const k=Z.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(k!==void 0)w=k;else if(w=Z.isPointLight===!0?m:d,s.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const ae=w.uuid,de=V.uuid;let pe=p[ae];pe===void 0&&(pe={},p[ae]=pe);let fe=pe[de];fe===void 0&&(fe=w.clone(),pe[de]=fe,V.addEventListener("dispose",I)),w=fe}if(w.visible=V.visible,w.wireframe=V.wireframe,C===na?w.side=V.shadowSide!==null?V.shadowSide:V.side:w.side=V.shadowSide!==null?V.shadowSide:v[V.side],w.alphaMap=V.alphaMap,w.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,w.map=V.map,w.clipShadows=V.clipShadows,w.clippingPlanes=V.clippingPlanes,w.clipIntersection=V.clipIntersection,w.displacementMap=V.displacementMap,w.displacementScale=V.displacementScale,w.displacementBias=V.displacementBias,w.wireframeLinewidth=V.wireframeLinewidth,w.linewidth=V.linewidth,Z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ae=s.properties.get(w);ae.light=Z}return w}function U(G,V,Z,C,w){if(G.visible===!1)return;if(G.layers.test(V.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&w===na)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,G.matrixWorld);const de=e.update(G),pe=G.material;if(Array.isArray(pe)){const fe=de.groups;for(let P=0,Q=fe.length;P<Q;P++){const j=fe[P],Se=pe[j.materialIndex];if(Se&&Se.visible){const L=N(G,Se,C,w);G.onBeforeShadow(s,G,V,Z,de,L,j),s.renderBufferDirect(Z,null,de,L,G,j),G.onAfterShadow(s,G,V,Z,de,L,j)}}}else if(pe.visible){const fe=N(G,pe,C,w);G.onBeforeShadow(s,G,V,Z,de,fe,null),s.renderBufferDirect(Z,null,de,fe,G,null),G.onAfterShadow(s,G,V,Z,de,fe,null)}}const ae=G.children;for(let de=0,pe=ae.length;de<pe;de++)U(ae[de],V,Z,C,w)}function I(G){G.target.removeEventListener("dispose",I);for(const Z in p){const C=p[Z],w=G.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const RR={[jh]:qh,[Yh]:Qh,[Zh]:Jh,[Ms]:Kh,[qh]:jh,[Qh]:Yh,[Jh]:Zh,[Kh]:Ms};function wR(s,e){function i(){let W=!1;const Ce=new en;let De=null;const Fe=new en(0,0,0,0);return{setMask:function(Te){De!==Te&&!W&&(s.colorMask(Te,Te,Te,Te),De=Te)},setLocked:function(Te){W=Te},setClear:function(Te,xe,We,rt,Ut){Ut===!0&&(Te*=rt,xe*=rt,We*=rt),Ce.set(Te,xe,We,rt),Fe.equals(Ce)===!1&&(s.clearColor(Te,xe,We,rt),Fe.copy(Ce))},reset:function(){W=!1,De=null,Fe.set(-1,0,0,0)}}}function r(){let W=!1,Ce=!1,De=null,Fe=null,Te=null;return{setReversed:function(xe){if(Ce!==xe){const We=e.get("EXT_clip_control");xe?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Ce=xe;const rt=Te;Te=null,this.setClear(rt)}},getReversed:function(){return Ce},setTest:function(xe){xe?ve(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function(xe){De!==xe&&!W&&(s.depthMask(xe),De=xe)},setFunc:function(xe){if(Ce&&(xe=RR[xe]),Fe!==xe){switch(xe){case jh:s.depthFunc(s.NEVER);break;case qh:s.depthFunc(s.ALWAYS);break;case Yh:s.depthFunc(s.LESS);break;case Ms:s.depthFunc(s.LEQUAL);break;case Zh:s.depthFunc(s.EQUAL);break;case Kh:s.depthFunc(s.GEQUAL);break;case Qh:s.depthFunc(s.GREATER);break;case Jh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Fe=xe}},setLocked:function(xe){W=xe},setClear:function(xe){Te!==xe&&(Ce&&(xe=1-xe),s.clearDepth(xe),Te=xe)},reset:function(){W=!1,De=null,Fe=null,Te=null,Ce=!1}}}function l(){let W=!1,Ce=null,De=null,Fe=null,Te=null,xe=null,We=null,rt=null,Ut=null;return{setTest:function(bt){W||(bt?ve(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function(bt){Ce!==bt&&!W&&(s.stencilMask(bt),Ce=bt)},setFunc:function(bt,hi,cn){(De!==bt||Fe!==hi||Te!==cn)&&(s.stencilFunc(bt,hi,cn),De=bt,Fe=hi,Te=cn)},setOp:function(bt,hi,cn){(xe!==bt||We!==hi||rt!==cn)&&(s.stencilOp(bt,hi,cn),xe=bt,We=hi,rt=cn)},setLocked:function(bt){W=bt},setClear:function(bt){Ut!==bt&&(s.clearStencil(bt),Ut=bt)},reset:function(){W=!1,Ce=null,De=null,Fe=null,Te=null,xe=null,We=null,rt=null,Ut=null}}}const c=new i,f=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},y=new WeakMap,E=[],b=null,A=!1,S=null,_=null,O=null,N=null,U=null,I=null,G=null,V=new Ct(0,0,0),Z=0,C=!1,w=null,k=null,ae=null,de=null,pe=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Q=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(j)[1]),P=Q>=1):j.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),P=Q>=2);let Se=null,L={};const ee=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),Me=new en().fromArray(ee),Ne=new en().fromArray(ye);function Ge(W,Ce,De,Fe){const Te=new Uint8Array(4),xe=s.createTexture();s.bindTexture(W,xe),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let We=0;We<De;We++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,Fe,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(Ce+We,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return xe}const ne={};ne[s.TEXTURE_2D]=Ge(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=Ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=Ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=Ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ve(s.DEPTH_TEST),f.setFunc(Ms),et(!1),Be(Iv),ve(s.CULL_FACE),Dt(ka);function ve(W){g[W]!==!0&&(s.enable(W),g[W]=!0)}function be(W){g[W]!==!1&&(s.disable(W),g[W]=!1)}function Ke(W,Ce){return v[W]!==Ce?(s.bindFramebuffer(W,Ce),v[W]=Ce,W===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ce),W===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function qe(W,Ce){let De=E,Fe=!1;if(W){De=y.get(Ce),De===void 0&&(De=[],y.set(Ce,De));const Te=W.textures;if(De.length!==Te.length||De[0]!==s.COLOR_ATTACHMENT0){for(let xe=0,We=Te.length;xe<We;xe++)De[xe]=s.COLOR_ATTACHMENT0+xe;De.length=Te.length,Fe=!0}}else De[0]!==s.BACK&&(De[0]=s.BACK,Fe=!0);Fe&&s.drawBuffers(De)}function ut(W){return b!==W?(s.useProgram(W),b=W,!0):!1}const Zt={[_r]:s.FUNC_ADD,[NM]:s.FUNC_SUBTRACT,[OM]:s.FUNC_REVERSE_SUBTRACT};Zt[PM]=s.MIN,Zt[IM]=s.MAX;const F={[BM]:s.ZERO,[zM]:s.ONE,[FM]:s.SRC_COLOR,[Xh]:s.SRC_ALPHA,[WM]:s.SRC_ALPHA_SATURATE,[kM]:s.DST_COLOR,[GM]:s.DST_ALPHA,[HM]:s.ONE_MINUS_SRC_COLOR,[Wh]:s.ONE_MINUS_SRC_ALPHA,[XM]:s.ONE_MINUS_DST_COLOR,[VM]:s.ONE_MINUS_DST_ALPHA,[jM]:s.CONSTANT_COLOR,[qM]:s.ONE_MINUS_CONSTANT_COLOR,[YM]:s.CONSTANT_ALPHA,[ZM]:s.ONE_MINUS_CONSTANT_ALPHA};function Dt(W,Ce,De,Fe,Te,xe,We,rt,Ut,bt){if(W===ka){A===!0&&(be(s.BLEND),A=!1);return}if(A===!1&&(ve(s.BLEND),A=!0),W!==LM){if(W!==S||bt!==C){if((_!==_r||U!==_r)&&(s.blendEquation(s.FUNC_ADD),_=_r,U=_r),bt)switch(W){case ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kh:s.blendFunc(s.ONE,s.ONE);break;case Bv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zv:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Bv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}O=null,N=null,I=null,G=null,V.set(0,0,0),Z=0,S=W,C=bt}return}Te=Te||Ce,xe=xe||De,We=We||Fe,(Ce!==_||Te!==U)&&(s.blendEquationSeparate(Zt[Ce],Zt[Te]),_=Ce,U=Te),(De!==O||Fe!==N||xe!==I||We!==G)&&(s.blendFuncSeparate(F[De],F[Fe],F[xe],F[We]),O=De,N=Fe,I=xe,G=We),(rt.equals(V)===!1||Ut!==Z)&&(s.blendColor(rt.r,rt.g,rt.b,Ut),V.copy(rt),Z=Ut),S=W,C=!1}function st(W,Ce){W.side===ia?be(s.CULL_FACE):ve(s.CULL_FACE);let De=W.side===Vn;Ce&&(De=!De),et(De),W.blending===ys&&W.transparent===!1?Dt(ka):Dt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Fe=W.stencilWrite;d.setTest(Fe),Fe&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ve(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function et(W){w!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),w=W)}function Be(W){W!==CM?(ve(s.CULL_FACE),W!==k&&(W===Iv?s.cullFace(s.BACK):W===DM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),k=W}function Mt(W){W!==ae&&(P&&s.lineWidth(W),ae=W)}function Ve(W,Ce,De){W?(ve(s.POLYGON_OFFSET_FILL),(de!==Ce||pe!==De)&&(s.polygonOffset(Ce,De),de=Ce,pe=De)):be(s.POLYGON_OFFSET_FILL)}function ot(W){W?ve(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function Gt(W){W===void 0&&(W=s.TEXTURE0+fe-1),Se!==W&&(s.activeTexture(W),Se=W)}function Vt(W,Ce,De){De===void 0&&(Se===null?De=s.TEXTURE0+fe-1:De=Se);let Fe=L[De];Fe===void 0&&(Fe={type:void 0,texture:void 0},L[De]=Fe),(Fe.type!==W||Fe.texture!==Ce)&&(Se!==De&&(s.activeTexture(De),Se=De),s.bindTexture(W,Ce||ne[W]),Fe.type=W,Fe.texture=Ce)}function D(){const W=L[Se];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function x(){try{s.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function H(){try{s.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function J(){try{s.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ce(){try{s.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ie(){try{s.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Re(){try{s.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function we(){try{s.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ze(){try{s.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(){try{s.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{s.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ue(W){Me.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),Me.copy(W))}function Qe(W){Ne.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Ne.copy(W))}function je(W,Ce){let De=p.get(Ce);De===void 0&&(De=new WeakMap,p.set(Ce,De));let Fe=De.get(W);Fe===void 0&&(Fe=s.getUniformBlockIndex(Ce,W.name),De.set(W,Fe))}function Le(W,Ce){const Fe=p.get(Ce).get(W);m.get(Ce)!==Fe&&(s.uniformBlockBinding(Ce,Fe,W.__bindingPointIndex),m.set(Ce,Fe))}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Se=null,L={},v={},y=new WeakMap,E=[],b=null,A=!1,S=null,_=null,O=null,N=null,U=null,I=null,G=null,V=new Ct(0,0,0),Z=0,C=!1,w=null,k=null,ae=null,de=null,pe=null,Me.set(0,0,s.canvas.width,s.canvas.height),Ne.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:ve,disable:be,bindFramebuffer:Ke,drawBuffers:qe,useProgram:ut,setBlending:Dt,setMaterial:st,setFlipSided:et,setCullFace:Be,setLineWidth:Mt,setPolygonOffset:Ve,setScissorTest:ot,activeTexture:Gt,bindTexture:Vt,unbindTexture:D,compressedTexImage2D:x,compressedTexImage3D:H,texImage2D:ke,texImage3D:Ee,updateUBOMapping:je,uniformBlockBinding:Le,texStorage2D:we,texStorage3D:ze,texSubImage2D:J,texSubImage3D:ce,compressedTexSubImage2D:ie,compressedTexSubImage3D:Re,scissor:Ue,viewport:Qe,reset:lt}}function CR(s,e,i,r,l,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ct,g=new WeakMap;let v;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(D,x){return E?new OffscreenCanvas(D,x):Vc("canvas")}function A(D,x,H){let J=1;const ce=Vt(D);if((ce.width>H||ce.height>H)&&(J=H/Math.max(ce.width,ce.height)),J<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ie=Math.floor(J*ce.width),Re=Math.floor(J*ce.height);v===void 0&&(v=b(ie,Re));const we=x?b(ie,Re):v;return we.width=ie,we.height=Re,we.getContext("2d").drawImage(D,0,0,ie,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ie+"x"+Re+")."),we}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),D;return D}function S(D){return D.generateMipmaps}function _(D){s.generateMipmap(D)}function O(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(D,x,H,J,ce=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ie=x;if(x===s.RED&&(H===s.FLOAT&&(ie=s.R32F),H===s.HALF_FLOAT&&(ie=s.R16F),H===s.UNSIGNED_BYTE&&(ie=s.R8)),x===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(ie=s.R8UI),H===s.UNSIGNED_SHORT&&(ie=s.R16UI),H===s.UNSIGNED_INT&&(ie=s.R32UI),H===s.BYTE&&(ie=s.R8I),H===s.SHORT&&(ie=s.R16I),H===s.INT&&(ie=s.R32I)),x===s.RG&&(H===s.FLOAT&&(ie=s.RG32F),H===s.HALF_FLOAT&&(ie=s.RG16F),H===s.UNSIGNED_BYTE&&(ie=s.RG8)),x===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(ie=s.RG8UI),H===s.UNSIGNED_SHORT&&(ie=s.RG16UI),H===s.UNSIGNED_INT&&(ie=s.RG32UI),H===s.BYTE&&(ie=s.RG8I),H===s.SHORT&&(ie=s.RG16I),H===s.INT&&(ie=s.RG32I)),x===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(ie=s.RGB8UI),H===s.UNSIGNED_SHORT&&(ie=s.RGB16UI),H===s.UNSIGNED_INT&&(ie=s.RGB32UI),H===s.BYTE&&(ie=s.RGB8I),H===s.SHORT&&(ie=s.RGB16I),H===s.INT&&(ie=s.RGB32I)),x===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(ie=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(ie=s.RGBA16UI),H===s.UNSIGNED_INT&&(ie=s.RGBA32UI),H===s.BYTE&&(ie=s.RGBA8I),H===s.SHORT&&(ie=s.RGBA16I),H===s.INT&&(ie=s.RGBA32I)),x===s.RGB&&(H===s.UNSIGNED_INT_5_9_9_9_REV&&(ie=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(ie=s.R11F_G11F_B10F)),x===s.RGBA){const Re=ce?Hc:Rt.getTransfer(J);H===s.FLOAT&&(ie=s.RGBA32F),H===s.HALF_FLOAT&&(ie=s.RGBA16F),H===s.UNSIGNED_BYTE&&(ie=Re===zt?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(ie=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(ie=s.RGB5_A1)}return(ie===s.R16F||ie===s.R32F||ie===s.RG16F||ie===s.RG32F||ie===s.RGBA16F||ie===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function U(D,x){let H;return D?x===null||x===Mr||x===Fo?H=s.DEPTH24_STENCIL8:x===Ni?H=s.DEPTH32F_STENCIL8:x===zo&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Mr||x===Fo?H=s.DEPTH_COMPONENT24:x===Ni?H=s.DEPTH_COMPONENT32F:x===zo&&(H=s.DEPTH_COMPONENT16),H}function I(D,x){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==$n&&D.minFilter!==Gn?Math.log2(Math.max(x.width,x.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?x.mipmaps.length:1}function G(D){const x=D.target;x.removeEventListener("dispose",G),Z(x),x.isVideoTexture&&g.delete(x)}function V(D){const x=D.target;x.removeEventListener("dispose",V),w(x)}function Z(D){const x=r.get(D);if(x.__webglInit===void 0)return;const H=D.source,J=y.get(H);if(J){const ce=J[x.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&C(D),Object.keys(J).length===0&&y.delete(H)}r.remove(D)}function C(D){const x=r.get(D);s.deleteTexture(x.__webglTexture);const H=D.source,J=y.get(H);delete J[x.__cacheKey],f.memory.textures--}function w(D){const x=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let ce=0;ce<x.__webglFramebuffer[J].length;ce++)s.deleteFramebuffer(x.__webglFramebuffer[J][ce]);else s.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)s.deleteFramebuffer(x.__webglFramebuffer[J]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const H=D.textures;for(let J=0,ce=H.length;J<ce;J++){const ie=r.get(H[J]);ie.__webglTexture&&(s.deleteTexture(ie.__webglTexture),f.memory.textures--),r.remove(H[J])}r.remove(D)}let k=0;function ae(){k=0}function de(){const D=k;return D>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),k+=1,D}function pe(D){const x=[];return x.push(D.wrapS),x.push(D.wrapT),x.push(D.wrapR||0),x.push(D.magFilter),x.push(D.minFilter),x.push(D.anisotropy),x.push(D.internalFormat),x.push(D.format),x.push(D.type),x.push(D.generateMipmaps),x.push(D.premultiplyAlpha),x.push(D.flipY),x.push(D.unpackAlignment),x.push(D.colorSpace),x.join()}function fe(D,x){const H=r.get(D);if(D.isVideoTexture&&ot(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&H.__version!==D.version){const J=D.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(H,D,x);return}}else D.isExternalTexture&&(H.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+x)}function P(D,x){const H=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){ne(H,D,x);return}i.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+x)}function Q(D,x){const H=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){ne(H,D,x);return}i.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+x)}function j(D,x){const H=r.get(D);if(D.version>0&&H.__version!==D.version){ve(H,D,x);return}i.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+x)}const Se={[td]:s.REPEAT,[Mi]:s.CLAMP_TO_EDGE,[nd]:s.MIRRORED_REPEAT},L={[$n]:s.NEAREST,[rE]:s.NEAREST_MIPMAP_NEAREST,[oc]:s.NEAREST_MIPMAP_LINEAR,[Gn]:s.LINEAR,[lh]:s.LINEAR_MIPMAP_NEAREST,[yr]:s.LINEAR_MIPMAP_LINEAR},ee={[uE]:s.NEVER,[gE]:s.ALWAYS,[fE]:s.LESS,[m0]:s.LEQUAL,[hE]:s.EQUAL,[mE]:s.GEQUAL,[dE]:s.GREATER,[pE]:s.NOTEQUAL};function ye(D,x){if(x.type===Ni&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Gn||x.magFilter===lh||x.magFilter===oc||x.magFilter===yr||x.minFilter===Gn||x.minFilter===lh||x.minFilter===oc||x.minFilter===yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,Se[x.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,Se[x.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,Se[x.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,L[x.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,L[x.minFilter]),x.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,ee[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===$n||x.minFilter!==oc&&x.minFilter!==yr||x.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||r.get(x).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,l.getMaxAnisotropy())),r.get(x).__currentAnisotropy=x.anisotropy}}}function Me(D,x){let H=!1;D.__webglInit===void 0&&(D.__webglInit=!0,x.addEventListener("dispose",G));const J=x.source;let ce=y.get(J);ce===void 0&&(ce={},y.set(J,ce));const ie=pe(x);if(ie!==D.__cacheKey){ce[ie]===void 0&&(ce[ie]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,H=!0),ce[ie].usedTimes++;const Re=ce[D.__cacheKey];Re!==void 0&&(ce[D.__cacheKey].usedTimes--,Re.usedTimes===0&&C(x)),D.__cacheKey=ie,D.__webglTexture=ce[ie].texture}return H}function Ne(D,x,H){return Math.floor(Math.floor(D/H)/x)}function Ge(D,x,H,J){const ie=D.updateRanges;if(ie.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,H,J,x.data);else{ie.sort((Ee,Ue)=>Ee.start-Ue.start);let Re=0;for(let Ee=1;Ee<ie.length;Ee++){const Ue=ie[Re],Qe=ie[Ee],je=Ue.start+Ue.count,Le=Ne(Qe.start,x.width,4),lt=Ne(Ue.start,x.width,4);Qe.start<=je+1&&Le===lt&&Ne(Qe.start+Qe.count-1,x.width,4)===Le?Ue.count=Math.max(Ue.count,Qe.start+Qe.count-Ue.start):(++Re,ie[Re]=Qe)}ie.length=Re+1;const we=s.getParameter(s.UNPACK_ROW_LENGTH),ze=s.getParameter(s.UNPACK_SKIP_PIXELS),ke=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let Ee=0,Ue=ie.length;Ee<Ue;Ee++){const Qe=ie[Ee],je=Math.floor(Qe.start/4),Le=Math.ceil(Qe.count/4),lt=je%x.width,W=Math.floor(je/x.width),Ce=Le,De=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),i.texSubImage2D(s.TEXTURE_2D,0,lt,W,Ce,De,H,J,x.data)}D.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,we),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ze),s.pixelStorei(s.UNPACK_SKIP_ROWS,ke)}}function ne(D,x,H){let J=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=s.TEXTURE_3D);const ce=Me(D,x),ie=x.source;i.bindTexture(J,D.__webglTexture,s.TEXTURE0+H);const Re=r.get(ie);if(ie.version!==Re.__version||ce===!0){i.activeTexture(s.TEXTURE0+H);const we=Rt.getPrimaries(Rt.workingColorSpace),ze=x.colorSpace===Va?null:Rt.getPrimaries(x.colorSpace),ke=x.colorSpace===Va||we===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let Ee=A(x.image,!1,l.maxTextureSize);Ee=Gt(x,Ee);const Ue=c.convert(x.format,x.colorSpace),Qe=c.convert(x.type);let je=N(x.internalFormat,Ue,Qe,x.colorSpace,x.isVideoTexture);ye(J,x);let Le;const lt=x.mipmaps,W=x.isVideoTexture!==!0,Ce=Re.__version===void 0||ce===!0,De=ie.dataReady,Fe=I(x,Ee);if(x.isDepthTexture)je=U(x.format===Go,x.type),Ce&&(W?i.texStorage2D(s.TEXTURE_2D,1,je,Ee.width,Ee.height):i.texImage2D(s.TEXTURE_2D,0,je,Ee.width,Ee.height,0,Ue,Qe,null));else if(x.isDataTexture)if(lt.length>0){W&&Ce&&i.texStorage2D(s.TEXTURE_2D,Fe,je,lt[0].width,lt[0].height);for(let Te=0,xe=lt.length;Te<xe;Te++)Le=lt[Te],W?De&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Le.width,Le.height,Ue,Qe,Le.data):i.texImage2D(s.TEXTURE_2D,Te,je,Le.width,Le.height,0,Ue,Qe,Le.data);x.generateMipmaps=!1}else W?(Ce&&i.texStorage2D(s.TEXTURE_2D,Fe,je,Ee.width,Ee.height),De&&Ge(x,Ee,Ue,Qe)):i.texImage2D(s.TEXTURE_2D,0,je,Ee.width,Ee.height,0,Ue,Qe,Ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){W&&Ce&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,je,lt[0].width,lt[0].height,Ee.depth);for(let Te=0,xe=lt.length;Te<xe;Te++)if(Le=lt[Te],x.format!==ci)if(Ue!==null)if(W){if(De)if(x.layerUpdates.size>0){const We=u_(Le.width,Le.height,x.format,x.type);for(const rt of x.layerUpdates){const Ut=Le.data.subarray(rt*We/Le.data.BYTES_PER_ELEMENT,(rt+1)*We/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,rt,Le.width,Le.height,1,Ue,Ut)}x.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Le.width,Le.height,Ee.depth,Ue,Le.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,je,Le.width,Le.height,Ee.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?De&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Le.width,Le.height,Ee.depth,Ue,Qe,Le.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Te,je,Le.width,Le.height,Ee.depth,0,Ue,Qe,Le.data)}else{W&&Ce&&i.texStorage2D(s.TEXTURE_2D,Fe,je,lt[0].width,lt[0].height);for(let Te=0,xe=lt.length;Te<xe;Te++)Le=lt[Te],x.format!==ci?Ue!==null?W?De&&i.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,Le.width,Le.height,Ue,Le.data):i.compressedTexImage2D(s.TEXTURE_2D,Te,je,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?De&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Le.width,Le.height,Ue,Qe,Le.data):i.texImage2D(s.TEXTURE_2D,Te,je,Le.width,Le.height,0,Ue,Qe,Le.data)}else if(x.isDataArrayTexture)if(W){if(Ce&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,je,Ee.width,Ee.height,Ee.depth),De)if(x.layerUpdates.size>0){const Te=u_(Ee.width,Ee.height,x.format,x.type);for(const xe of x.layerUpdates){const We=Ee.data.subarray(xe*Te/Ee.data.BYTES_PER_ELEMENT,(xe+1)*Te/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xe,Ee.width,Ee.height,1,Ue,Qe,We)}x.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ue,Qe,Ee.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,je,Ee.width,Ee.height,Ee.depth,0,Ue,Qe,Ee.data);else if(x.isData3DTexture)W?(Ce&&i.texStorage3D(s.TEXTURE_3D,Fe,je,Ee.width,Ee.height,Ee.depth),De&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ue,Qe,Ee.data)):i.texImage3D(s.TEXTURE_3D,0,je,Ee.width,Ee.height,Ee.depth,0,Ue,Qe,Ee.data);else if(x.isFramebufferTexture){if(Ce)if(W)i.texStorage2D(s.TEXTURE_2D,Fe,je,Ee.width,Ee.height);else{let Te=Ee.width,xe=Ee.height;for(let We=0;We<Fe;We++)i.texImage2D(s.TEXTURE_2D,We,je,Te,xe,0,Ue,Qe,null),Te>>=1,xe>>=1}}else if(lt.length>0){if(W&&Ce){const Te=Vt(lt[0]);i.texStorage2D(s.TEXTURE_2D,Fe,je,Te.width,Te.height)}for(let Te=0,xe=lt.length;Te<xe;Te++)Le=lt[Te],W?De&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Ue,Qe,Le):i.texImage2D(s.TEXTURE_2D,Te,je,Ue,Qe,Le);x.generateMipmaps=!1}else if(W){if(Ce){const Te=Vt(Ee);i.texStorage2D(s.TEXTURE_2D,Fe,je,Te.width,Te.height)}De&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ue,Qe,Ee)}else i.texImage2D(s.TEXTURE_2D,0,je,Ue,Qe,Ee);S(x)&&_(J),Re.__version=ie.version,x.onUpdate&&x.onUpdate(x)}D.__version=x.version}function ve(D,x,H){if(x.image.length!==6)return;const J=Me(D,x),ce=x.source;i.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+H);const ie=r.get(ce);if(ce.version!==ie.__version||J===!0){i.activeTexture(s.TEXTURE0+H);const Re=Rt.getPrimaries(Rt.workingColorSpace),we=x.colorSpace===Va?null:Rt.getPrimaries(x.colorSpace),ze=x.colorSpace===Va||Re===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const ke=x.isCompressedTexture||x.image[0].isCompressedTexture,Ee=x.image[0]&&x.image[0].isDataTexture,Ue=[];for(let xe=0;xe<6;xe++)!ke&&!Ee?Ue[xe]=A(x.image[xe],!0,l.maxCubemapSize):Ue[xe]=Ee?x.image[xe].image:x.image[xe],Ue[xe]=Gt(x,Ue[xe]);const Qe=Ue[0],je=c.convert(x.format,x.colorSpace),Le=c.convert(x.type),lt=N(x.internalFormat,je,Le,x.colorSpace),W=x.isVideoTexture!==!0,Ce=ie.__version===void 0||J===!0,De=ce.dataReady;let Fe=I(x,Qe);ye(s.TEXTURE_CUBE_MAP,x);let Te;if(ke){W&&Ce&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,lt,Qe.width,Qe.height);for(let xe=0;xe<6;xe++){Te=Ue[xe].mipmaps;for(let We=0;We<Te.length;We++){const rt=Te[We];x.format!==ci?je!==null?W?De&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We,0,0,rt.width,rt.height,je,rt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We,lt,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We,0,0,rt.width,rt.height,je,Le,rt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We,lt,rt.width,rt.height,0,je,Le,rt.data)}}}else{if(Te=x.mipmaps,W&&Ce){Te.length>0&&Fe++;const xe=Vt(Ue[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,lt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ee){W?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ue[xe].width,Ue[xe].height,je,Le,Ue[xe].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,lt,Ue[xe].width,Ue[xe].height,0,je,Le,Ue[xe].data);for(let We=0;We<Te.length;We++){const Ut=Te[We].image[xe].image;W?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We+1,0,0,Ut.width,Ut.height,je,Le,Ut.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We+1,lt,Ut.width,Ut.height,0,je,Le,Ut.data)}}else{W?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,je,Le,Ue[xe]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,lt,je,Le,Ue[xe]);for(let We=0;We<Te.length;We++){const rt=Te[We];W?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We+1,0,0,je,Le,rt.image[xe]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We+1,lt,je,Le,rt.image[xe])}}}S(x)&&_(s.TEXTURE_CUBE_MAP),ie.__version=ce.version,x.onUpdate&&x.onUpdate(x)}D.__version=x.version}function be(D,x,H,J,ce,ie){const Re=c.convert(H.format,H.colorSpace),we=c.convert(H.type),ze=N(H.internalFormat,Re,we,H.colorSpace),ke=r.get(x),Ee=r.get(H);if(Ee.__renderTarget=x,!ke.__hasExternalTextures){const Ue=Math.max(1,x.width>>ie),Qe=Math.max(1,x.height>>ie);ce===s.TEXTURE_3D||ce===s.TEXTURE_2D_ARRAY?i.texImage3D(ce,ie,ze,Ue,Qe,x.depth,0,Re,we,null):i.texImage2D(ce,ie,ze,Ue,Qe,0,Re,we,null)}i.bindFramebuffer(s.FRAMEBUFFER,D),Ve(x)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,ce,Ee.__webglTexture,0,Mt(x)):(ce===s.TEXTURE_2D||ce>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,ce,Ee.__webglTexture,ie),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(D,x,H){if(s.bindRenderbuffer(s.RENDERBUFFER,D),x.depthBuffer){const J=x.depthTexture,ce=J&&J.isDepthTexture?J.type:null,ie=U(x.stencilBuffer,ce),Re=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=Mt(x);Ve(x)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,ie,x.width,x.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,ie,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ie,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,D)}else{const J=x.textures;for(let ce=0;ce<J.length;ce++){const ie=J[ce],Re=c.convert(ie.format,ie.colorSpace),we=c.convert(ie.type),ze=N(ie.internalFormat,Re,we,ie.colorSpace),ke=Mt(x);H&&Ve(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,ze,x.width,x.height):Ve(x)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ke,ze,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ze,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function qe(D,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,D),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=r.get(x.depthTexture);J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),fe(x.depthTexture,0);const ce=J.__webglTexture,ie=Mt(x);if(x.depthTexture.format===Ho)Ve(x)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ce,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ce,0);else if(x.depthTexture.format===Go)Ve(x)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ce,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function ut(D){const x=r.get(D),H=D.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==D.depthTexture){const J=D.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),J){const ce=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,J.removeEventListener("dispose",ce)};J.addEventListener("dispose",ce),x.__depthDisposeCallback=ce}x.__boundDepthTexture=J}if(D.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const J=D.texture.mipmaps;J&&J.length>0?qe(x.__webglFramebuffer[0],D):qe(x.__webglFramebuffer,D)}else if(H){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(i.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]===void 0)x.__webglDepthbuffer[J]=s.createRenderbuffer(),Ke(x.__webglDepthbuffer[J],D,!1);else{const ce=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=x.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,ie)}}else{const J=D.texture.mipmaps;if(J&&J.length>0?i.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Ke(x.__webglDepthbuffer,D,!1);else{const ce=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,ie)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Zt(D,x,H){const J=r.get(D);x!==void 0&&be(J.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&ut(D)}function F(D){const x=D.texture,H=r.get(D),J=r.get(x);D.addEventListener("dispose",V);const ce=D.textures,ie=D.isWebGLCubeRenderTarget===!0,Re=ce.length>1;if(Re||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=x.version,f.memory.textures++),ie){H.__webglFramebuffer=[];for(let we=0;we<6;we++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[we]=[];for(let ze=0;ze<x.mipmaps.length;ze++)H.__webglFramebuffer[we][ze]=s.createFramebuffer()}else H.__webglFramebuffer[we]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let we=0;we<x.mipmaps.length;we++)H.__webglFramebuffer[we]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(Re)for(let we=0,ze=ce.length;we<ze;we++){const ke=r.get(ce[we]);ke.__webglTexture===void 0&&(ke.__webglTexture=s.createTexture(),f.memory.textures++)}if(D.samples>0&&Ve(D)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let we=0;we<ce.length;we++){const ze=ce[we];H.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[we]);const ke=c.convert(ze.format,ze.colorSpace),Ee=c.convert(ze.type),Ue=N(ze.internalFormat,ke,Ee,ze.colorSpace,D.isXRRenderTarget===!0),Qe=Mt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Ue,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,H.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Ke(H.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ie){i.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),ye(s.TEXTURE_CUBE_MAP,x);for(let we=0;we<6;we++)if(x.mipmaps&&x.mipmaps.length>0)for(let ze=0;ze<x.mipmaps.length;ze++)be(H.__webglFramebuffer[we][ze],D,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,ze);else be(H.__webglFramebuffer[we],D,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(x)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Re){for(let we=0,ze=ce.length;we<ze;we++){const ke=ce[we],Ee=r.get(ke);let Ue=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ue=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ue,Ee.__webglTexture),ye(Ue,ke),be(H.__webglFramebuffer,D,ke,s.COLOR_ATTACHMENT0+we,Ue,0),S(ke)&&_(Ue)}i.unbindTexture()}else{let we=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(we=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(we,J.__webglTexture),ye(we,x),x.mipmaps&&x.mipmaps.length>0)for(let ze=0;ze<x.mipmaps.length;ze++)be(H.__webglFramebuffer[ze],D,x,s.COLOR_ATTACHMENT0,we,ze);else be(H.__webglFramebuffer,D,x,s.COLOR_ATTACHMENT0,we,0);S(x)&&_(we),i.unbindTexture()}D.depthBuffer&&ut(D)}function Dt(D){const x=D.textures;for(let H=0,J=x.length;H<J;H++){const ce=x[H];if(S(ce)){const ie=O(D),Re=r.get(ce).__webglTexture;i.bindTexture(ie,Re),_(ie),i.unbindTexture()}}}const st=[],et=[];function Be(D){if(D.samples>0){if(Ve(D)===!1){const x=D.textures,H=D.width,J=D.height;let ce=s.COLOR_BUFFER_BIT;const ie=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=r.get(D),we=x.length>1;if(we)for(let ke=0;ke<x.length;ke++)i.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const ze=D.texture.mipmaps;ze&&ze.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let ke=0;ke<x.length;ke++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ce|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ce|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Re.__webglColorRenderbuffer[ke]);const Ee=r.get(x[ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ee,0)}s.blitFramebuffer(0,0,H,J,0,0,H,J,ce,s.NEAREST),m===!0&&(st.length=0,et.length=0,st.push(s.COLOR_ATTACHMENT0+ke),D.depthBuffer&&D.resolveDepthBuffer===!1&&(st.push(ie),et.push(ie),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,et)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,st))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let ke=0;ke<x.length;ke++){i.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,Re.__webglColorRenderbuffer[ke]);const Ee=r.get(x[ke]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,Ee,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const x=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function Mt(D){return Math.min(l.maxSamples,D.samples)}function Ve(D){const x=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ot(D){const x=f.render.frame;g.get(D)!==x&&(g.set(D,x),D.update())}function Gt(D,x){const H=D.colorSpace,J=D.format,ce=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||H!==Ts&&H!==Va&&(Rt.getTransfer(H)===zt?(J!==ci||ce!==la)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}function Vt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=de,this.resetTextureUnits=ae,this.setTexture2D=fe,this.setTexture2DArray=P,this.setTexture3D=Q,this.setTextureCube=j,this.rebindTextures=Zt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ve}function DR(s,e){function i(r,l=Va){let c;const f=Rt.getTransfer(l);if(r===la)return s.UNSIGNED_BYTE;if(r===Gd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Vd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===c0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===u0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===o0)return s.BYTE;if(r===l0)return s.SHORT;if(r===zo)return s.UNSIGNED_SHORT;if(r===Hd)return s.INT;if(r===Mr)return s.UNSIGNED_INT;if(r===Ni)return s.FLOAT;if(r===Cs)return s.HALF_FLOAT;if(r===f0)return s.ALPHA;if(r===h0)return s.RGB;if(r===ci)return s.RGBA;if(r===Ho)return s.DEPTH_COMPONENT;if(r===Go)return s.DEPTH_STENCIL;if(r===d0)return s.RED;if(r===kd)return s.RED_INTEGER;if(r===p0)return s.RG;if(r===Xd)return s.RG_INTEGER;if(r===Wd)return s.RGBA_INTEGER;if(r===Oc||r===Pc||r===Ic||r===Bc)if(f===zt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Oc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Oc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ic)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===id||r===ad||r===rd||r===sd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===id)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ad)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===rd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===sd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===od||r===ld||r===cd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===od||r===ld)return f===zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===cd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ud||r===fd||r===hd||r===dd||r===pd||r===md||r===gd||r===vd||r===_d||r===xd||r===yd||r===Sd||r===Md||r===Ed)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===ud)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===hd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===dd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===pd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===md)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_d)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===yd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Md)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ed)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bd||r===Td||r===Ad)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===bd)return f===zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Td)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ad)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rd||r===wd||r===Cd||r===Dd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Rd)return c.COMPRESSED_RED_RGTC1_EXT;if(r===wd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Cd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Dd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const UR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LR=`
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

}`;class NR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new w0(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ua({vertexShader:UR,fragmentShader:LR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ui(new Sr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OR extends Ds{constructor(e,i){super();const r=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,g=null,v=null,y=null,E=null,b=null;const A=typeof XRWebGLBinding<"u",S=new NR,_={},O=i.getContextAttributes();let N=null,U=null;const I=[],G=[],V=new ct;let Z=null;const C=new yi;C.viewport=new en;const w=new yi;w.viewport=new en;const k=[C,w],ae=new eb;let de=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ve=I[ne];return ve===void 0&&(ve=new Uh,I[ne]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ne){let ve=I[ne];return ve===void 0&&(ve=new Uh,I[ne]=ve),ve.getGripSpace()},this.getHand=function(ne){let ve=I[ne];return ve===void 0&&(ve=new Uh,I[ne]=ve),ve.getHandSpace()};function fe(ne){const ve=G.indexOf(ne.inputSource);if(ve===-1)return;const be=I[ve];be!==void 0&&(be.update(ne.inputSource,ne.frame,p||f),be.dispatchEvent({type:ne.type,data:ne.inputSource}))}function P(){l.removeEventListener("select",fe),l.removeEventListener("selectstart",fe),l.removeEventListener("selectend",fe),l.removeEventListener("squeeze",fe),l.removeEventListener("squeezestart",fe),l.removeEventListener("squeezeend",fe),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",Q);for(let ne=0;ne<I.length;ne++){const ve=G[ne];ve!==null&&(G[ne]=null,I[ne].disconnect(ve))}de=null,pe=null,S.reset();for(const ne in _)delete _[ne];e.setRenderTarget(N),E=null,y=null,v=null,l=null,U=null,Ge.stop(),r.isPresenting=!1,e.setPixelRatio(Z),e.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){c=ne,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){d=ne,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ne){p=ne},this.getBaseLayer=function(){return y!==null?y:E},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(ne){if(l=ne,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",fe),l.addEventListener("selectstart",fe),l.addEventListener("selectend",fe),l.addEventListener("squeeze",fe),l.addEventListener("squeezestart",fe),l.addEventListener("squeezeend",fe),l.addEventListener("end",P),l.addEventListener("inputsourceschange",Q),O.xrCompatible!==!0&&await i.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(V),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ke=null,qe=null;O.depth&&(qe=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,be=O.stencil?Go:Ho,Ke=O.stencil?Fo:Mr);const ut={colorFormat:i.RGBA8,depthFormat:qe,scaleFactor:c};v=this.getBinding(),y=v.createProjectionLayer(ut),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),U=new ja(y.textureWidth,y.textureHeight,{format:ci,type:la,depthTexture:new R0(y.textureWidth,y.textureHeight,Ke,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const be={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,be),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),U=new ja(E.framebufferWidth,E.framebufferHeight,{format:ci,type:la,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Ge.setContext(l),Ge.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Q(ne){for(let ve=0;ve<ne.removed.length;ve++){const be=ne.removed[ve],Ke=G.indexOf(be);Ke>=0&&(G[Ke]=null,I[Ke].disconnect(be))}for(let ve=0;ve<ne.added.length;ve++){const be=ne.added[ve];let Ke=G.indexOf(be);if(Ke===-1){for(let ut=0;ut<I.length;ut++)if(ut>=G.length){G.push(be),Ke=ut;break}else if(G[ut]===null){G[ut]=be,Ke=ut;break}if(Ke===-1)break}const qe=I[Ke];qe&&qe.connect(be)}}const j=new oe,Se=new oe;function L(ne,ve,be){j.setFromMatrixPosition(ve.matrixWorld),Se.setFromMatrixPosition(be.matrixWorld);const Ke=j.distanceTo(Se),qe=ve.projectionMatrix.elements,ut=be.projectionMatrix.elements,Zt=qe[14]/(qe[10]-1),F=qe[14]/(qe[10]+1),Dt=(qe[9]+1)/qe[5],st=(qe[9]-1)/qe[5],et=(qe[8]-1)/qe[0],Be=(ut[8]+1)/ut[0],Mt=Zt*et,Ve=Zt*Be,ot=Ke/(-et+Be),Gt=ot*-et;if(ve.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Gt),ne.translateZ(ot),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),qe[10]===-1)ne.projectionMatrix.copy(ve.projectionMatrix),ne.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Vt=Zt+ot,D=F+ot,x=Mt-Gt,H=Ve+(Ke-Gt),J=Dt*F/D*Vt,ce=st*F/D*Vt;ne.projectionMatrix.makePerspective(x,H,J,ce,Vt,D),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ee(ne,ve){ve===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ve.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(l===null)return;let ve=ne.near,be=ne.far;S.texture!==null&&(S.depthNear>0&&(ve=S.depthNear),S.depthFar>0&&(be=S.depthFar)),ae.near=w.near=C.near=ve,ae.far=w.far=C.far=be,(de!==ae.near||pe!==ae.far)&&(l.updateRenderState({depthNear:ae.near,depthFar:ae.far}),de=ae.near,pe=ae.far),ae.layers.mask=ne.layers.mask|6,C.layers.mask=ae.layers.mask&3,w.layers.mask=ae.layers.mask&5;const Ke=ne.parent,qe=ae.cameras;ee(ae,Ke);for(let ut=0;ut<qe.length;ut++)ee(qe[ut],Ke);qe.length===2?L(ae,C,w):ae.projectionMatrix.copy(C.projectionMatrix),ye(ne,ae,Ke)};function ye(ne,ve,be){be===null?ne.matrix.copy(ve.matrixWorld):(ne.matrix.copy(be.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ve.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ve.projectionMatrix),ne.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Ud*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return ae},this.getFoveation=function(){if(!(y===null&&E===null))return m},this.setFoveation=function(ne){m=ne,y!==null&&(y.fixedFoveation=ne),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=ne)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(ae)},this.getCameraTexture=function(ne){return _[ne]};let Me=null;function Ne(ne,ve){if(g=ve.getViewerPose(p||f),b=ve,g!==null){const be=g.views;E!==null&&(e.setRenderTargetFramebuffer(U,E.framebuffer),e.setRenderTarget(U));let Ke=!1;be.length!==ae.cameras.length&&(ae.cameras.length=0,Ke=!0);for(let F=0;F<be.length;F++){const Dt=be[F];let st=null;if(E!==null)st=E.getViewport(Dt);else{const Be=v.getViewSubImage(y,Dt);st=Be.viewport,F===0&&(e.setRenderTargetTextures(U,Be.colorTexture,Be.depthStencilTexture),e.setRenderTarget(U))}let et=k[F];et===void 0&&(et=new yi,et.layers.enable(F),et.viewport=new en,k[F]=et),et.matrix.fromArray(Dt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Dt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(st.x,st.y,st.width,st.height),F===0&&(ae.matrix.copy(et.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale)),Ke===!0&&ae.cameras.push(et)}const qe=l.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){v=r.getBinding();const F=v.getDepthInformation(be[0]);F&&F.isValid&&F.texture&&S.init(F,l.renderState)}if(qe&&qe.includes("camera-access")&&A){e.state.unbindTexture(),v=r.getBinding();for(let F=0;F<be.length;F++){const Dt=be[F].camera;if(Dt){let st=_[Dt];st||(st=new w0,_[Dt]=st);const et=v.getCameraImage(Dt);st.sourceTexture=et}}}}for(let be=0;be<I.length;be++){const Ke=G[be],qe=I[be];Ke!==null&&qe!==void 0&&qe.update(Ke,ve,p||f)}Me&&Me(ne,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),b=null}const Ge=new C0;Ge.setAnimationLoop(Ne),this.setAnimationLoop=function(ne){Me=ne},this.dispose=function(){}}}const mr=new ca,PR=new ln;function IR(s,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,b0(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,O,N,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),v(S,_)):_.isMeshPhongMaterial?(c(S,_),g(S,_)):_.isMeshStandardMaterial?(c(S,_),y(S,_),_.isMeshPhysicalMaterial&&E(S,_,U)):_.isMeshMatcapMaterial?(c(S,_),b(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),A(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?m(S,_,O,N):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Vn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Vn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const O=e.get(_),N=O.envMap,U=O.envMapRotation;N&&(S.envMap.value=N,mr.copy(U),mr.x*=-1,mr.y*=-1,mr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),S.envMapRotation.value.setFromMatrix4(PR.makeRotationFromEuler(mr)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,O,N){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*O,S.scale.value=N*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function y(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function E(S,_,O){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Vn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,_){_.matcap&&(S.matcap.value=_.matcap)}function A(S,_){const O=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function BR(s,e,i,r){let l={},c={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,N){const U=N.program;r.uniformBlockBinding(O,U)}function p(O,N){let U=l[O.id];U===void 0&&(b(O),U=g(O),l[O.id]=U,O.addEventListener("dispose",S));const I=N.program;r.updateUBOMapping(O,I);const G=e.render.frame;c[O.id]!==G&&(y(O),c[O.id]=G)}function g(O){const N=v();O.__bindingPointIndex=N;const U=s.createBuffer(),I=O.__size,G=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,I,G),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,U),U}function v(){for(let O=0;O<d;O++)if(f.indexOf(O)===-1)return f.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(O){const N=l[O.id],U=O.uniforms,I=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let G=0,V=U.length;G<V;G++){const Z=Array.isArray(U[G])?U[G]:[U[G]];for(let C=0,w=Z.length;C<w;C++){const k=Z[C];if(E(k,G,C,I)===!0){const ae=k.__offset,de=Array.isArray(k.value)?k.value:[k.value];let pe=0;for(let fe=0;fe<de.length;fe++){const P=de[fe],Q=A(P);typeof P=="number"||typeof P=="boolean"?(k.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,ae+pe,k.__data)):P.isMatrix3?(k.__data[0]=P.elements[0],k.__data[1]=P.elements[1],k.__data[2]=P.elements[2],k.__data[3]=0,k.__data[4]=P.elements[3],k.__data[5]=P.elements[4],k.__data[6]=P.elements[5],k.__data[7]=0,k.__data[8]=P.elements[6],k.__data[9]=P.elements[7],k.__data[10]=P.elements[8],k.__data[11]=0):(P.toArray(k.__data,pe),pe+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ae,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function E(O,N,U,I){const G=O.value,V=N+"_"+U;if(I[V]===void 0)return typeof G=="number"||typeof G=="boolean"?I[V]=G:I[V]=G.clone(),!0;{const Z=I[V];if(typeof G=="number"||typeof G=="boolean"){if(Z!==G)return I[V]=G,!0}else if(Z.equals(G)===!1)return Z.copy(G),!0}return!1}function b(O){const N=O.uniforms;let U=0;const I=16;for(let V=0,Z=N.length;V<Z;V++){const C=Array.isArray(N[V])?N[V]:[N[V]];for(let w=0,k=C.length;w<k;w++){const ae=C[w],de=Array.isArray(ae.value)?ae.value:[ae.value];for(let pe=0,fe=de.length;pe<fe;pe++){const P=de[pe],Q=A(P),j=U%I,Se=j%Q.boundary,L=j+Se;U+=Se,L!==0&&I-L<Q.storage&&(U+=I-L),ae.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=U,U+=Q.storage}}}const G=U%I;return G>0&&(U+=I-G),O.__size=U,O.__cache={},this}function A(O){const N={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(N.boundary=4,N.storage=4):O.isVector2?(N.boundary=8,N.storage=8):O.isVector3||O.isColor?(N.boundary=16,N.storage=12):O.isVector4?(N.boundary=16,N.storage=16):O.isMatrix3?(N.boundary=48,N.storage=48):O.isMatrix4?(N.boundary=64,N.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),N}function S(O){const N=O.target;N.removeEventListener("dispose",S);const U=f.indexOf(N.__bindingPointIndex);f.splice(U,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function _(){for(const O in l)s.deleteBuffer(l[O]);f=[],l={},c={}}return{bind:m,update:p,dispose:_}}class zR{constructor(e={}){const{canvas:i=_E(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=f;const b=new Uint32Array(4),A=new Int32Array(4);let S=null,_=null;const O=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let I=!1;this._outputColorSpace=li;let G=0,V=0,Z=null,C=-1,w=null;const k=new en,ae=new en;let de=null;const pe=new Ct(0);let fe=0,P=i.width,Q=i.height,j=1,Se=null,L=null;const ee=new en(0,0,P,Q),ye=new en(0,0,P,Q);let Me=!1;const Ne=new A0;let Ge=!1,ne=!1;const ve=new ln,be=new oe,Ke=new en,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Zt(){return Z===null?j:1}let F=r;function Dt(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Fd}`),i.addEventListener("webglcontextlost",De,!1),i.addEventListener("webglcontextrestored",Fe,!1),i.addEventListener("webglcontextcreationerror",Te,!1),F===null){const q="webgl2";if(F=Dt(q,R),F===null)throw Dt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let st,et,Be,Mt,Ve,ot,Gt,Vt,D,x,H,J,ce,ie,Re,we,ze,ke,Ee,Ue,Qe,je,Le,lt;function W(){st=new YA(F),st.init(),je=new DR(F,st),et=new GA(F,st,e,je),Be=new wR(F,st),et.reversedDepthBuffer&&y&&Be.buffers.depth.setReversed(!0),Mt=new QA(F),Ve=new mR,ot=new CR(F,st,Be,Ve,et,je,Mt),Gt=new kA(U),Vt=new qA(U),D=new ib(F),Le=new FA(F,D),x=new ZA(F,D,Mt,Le),H=new $A(F,x,D,Mt),Ee=new JA(F,et,ot),we=new VA(Ve),J=new pR(U,Gt,Vt,st,et,Le,we),ce=new IR(U,Ve),ie=new vR,Re=new ER(st),ke=new zA(U,Gt,Vt,Be,H,E,m),ze=new AR(U,H,et),lt=new BR(F,Mt,et,Be),Ue=new HA(F,st,Mt),Qe=new KA(F,st,Mt),Mt.programs=J.programs,U.capabilities=et,U.extensions=st,U.properties=Ve,U.renderLists=ie,U.shadowMap=ze,U.state=Be,U.info=Mt}W();const Ce=new OR(U,F);this.xr=Ce,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=st.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=st.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(P,Q,!1))},this.getSize=function(R){return R.set(P,Q)},this.setSize=function(R,q,le=!0){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,Q=q,i.width=Math.floor(R*j),i.height=Math.floor(q*j),le===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(P*j,Q*j).floor()},this.setDrawingBufferSize=function(R,q,le){P=R,Q=q,j=le,i.width=Math.floor(R*le),i.height=Math.floor(q*le),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(ee)},this.setViewport=function(R,q,le,ue){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,q,le,ue),Be.viewport(k.copy(ee).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(ye)},this.setScissor=function(R,q,le,ue){R.isVector4?ye.set(R.x,R.y,R.z,R.w):ye.set(R,q,le,ue),Be.scissor(ae.copy(ye).multiplyScalar(j).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(R){Be.setScissorTest(Me=R)},this.setOpaqueSort=function(R){Se=R},this.setTransparentSort=function(R){L=R},this.getClearColor=function(R){return R.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,le=!0){let ue=0;if(R){let K=!1;if(Z!==null){const Ae=Z.texture.format;K=Ae===Wd||Ae===Xd||Ae===kd}if(K){const Ae=Z.texture.type,Oe=Ae===la||Ae===Mr||Ae===zo||Ae===Fo||Ae===Gd||Ae===Vd,He=ke.getClearColor(),Pe=ke.getClearAlpha(),$e=He.r,nt=He.g,Ye=He.b;Oe?(b[0]=$e,b[1]=nt,b[2]=Ye,b[3]=Pe,F.clearBufferuiv(F.COLOR,0,b)):(A[0]=$e,A[1]=nt,A[2]=Ye,A[3]=Pe,F.clearBufferiv(F.COLOR,0,A))}else ue|=F.COLOR_BUFFER_BIT}q&&(ue|=F.DEPTH_BUFFER_BIT),le&&(ue|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",De,!1),i.removeEventListener("webglcontextrestored",Fe,!1),i.removeEventListener("webglcontextcreationerror",Te,!1),ke.dispose(),ie.dispose(),Re.dispose(),Ve.dispose(),Gt.dispose(),Vt.dispose(),H.dispose(),Le.dispose(),lt.dispose(),J.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",cn),Ce.removeEventListener("sessionend",un),Kt.stop()};function De(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const R=Mt.autoReset,q=ze.enabled,le=ze.autoUpdate,ue=ze.needsUpdate,K=ze.type;W(),Mt.autoReset=R,ze.enabled=q,ze.autoUpdate=le,ze.needsUpdate=ue,ze.type=K}function Te(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xe(R){const q=R.target;q.removeEventListener("dispose",xe),We(q)}function We(R){rt(R),Ve.remove(R)}function rt(R){const q=Ve.get(R).programs;q!==void 0&&(q.forEach(function(le){J.releaseProgram(le)}),R.isShaderMaterial&&J.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,le,ue,K,Ae){q===null&&(q=qe);const Oe=K.isMesh&&K.matrixWorld.determinant()<0,He=ha(R,q,le,ue,K);Be.setMaterial(ue,Oe);let Pe=le.index,$e=1;if(ue.wireframe===!0){if(Pe=x.getWireframeAttribute(le),Pe===void 0)return;$e=2}const nt=le.drawRange,Ye=le.attributes.position;let dt=nt.start*$e,Tt=(nt.start+nt.count)*$e;Ae!==null&&(dt=Math.max(dt,Ae.start*$e),Tt=Math.min(Tt,(Ae.start+Ae.count)*$e)),Pe!==null?(dt=Math.max(dt,0),Tt=Math.min(Tt,Pe.count)):Ye!=null&&(dt=Math.max(dt,0),Tt=Math.min(Tt,Ye.count));const Wt=Tt-dt;if(Wt<0||Wt===1/0)return;Le.setup(K,ue,He,le,Pe);let Ot,pt=Ue;if(Pe!==null&&(Ot=D.get(Pe),pt=Qe,pt.setIndex(Ot)),K.isMesh)ue.wireframe===!0?(Be.setLineWidth(ue.wireframeLinewidth*Zt()),pt.setMode(F.LINES)):pt.setMode(F.TRIANGLES);else if(K.isLine){let Je=ue.linewidth;Je===void 0&&(Je=1),Be.setLineWidth(Je*Zt()),K.isLineSegments?pt.setMode(F.LINES):K.isLineLoop?pt.setMode(F.LINE_LOOP):pt.setMode(F.LINE_STRIP)}else K.isPoints?pt.setMode(F.POINTS):K.isSprite&&pt.setMode(F.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Vo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))pt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Je=K._multiDrawStarts,Xt=K._multiDrawCounts,_t=K._multiDrawCount,bn=Pe?D.get(Pe).bytesPerElement:1,di=Ve.get(ue).currentProgram.getUniforms();for(let Dn=0;Dn<_t;Dn++)di.setValue(F,"_gl_DrawID",Dn),pt.render(Je[Dn]/bn,Xt[Dn])}else if(K.isInstancedMesh)pt.renderInstances(dt,Wt,K.count);else if(le.isInstancedBufferGeometry){const Je=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Xt=Math.min(le.instanceCount,Je);pt.renderInstances(dt,Wt,Xt)}else pt.render(dt,Wt)};function Ut(R,q,le){R.transparent===!0&&R.side===ia&&R.forceSinglePass===!1?(R.side=Vn,R.needsUpdate=!0,Ai(R,q,le),R.side=Wa,R.needsUpdate=!0,Ai(R,q,le),R.side=ia):Ai(R,q,le)}this.compile=function(R,q,le=null){le===null&&(le=R),_=Re.get(le),_.init(q),N.push(_),le.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),R!==le&&R.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),_.setupLights();const ue=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ae=K.material;if(Ae)if(Array.isArray(Ae))for(let Oe=0;Oe<Ae.length;Oe++){const He=Ae[Oe];Ut(He,le,K),ue.add(He)}else Ut(Ae,le,K),ue.add(Ae)}),_=N.pop(),ue},this.compileAsync=function(R,q,le=null){const ue=this.compile(R,q,le);return new Promise(K=>{function Ae(){if(ue.forEach(function(Oe){Ve.get(Oe).currentProgram.isReady()&&ue.delete(Oe)}),ue.size===0){K(R);return}setTimeout(Ae,10)}st.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let bt=null;function hi(R){bt&&bt(R)}function cn(){Kt.stop()}function un(){Kt.start()}const Kt=new C0;Kt.setAnimationLoop(hi),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(R){bt=R,Ce.setAnimationLoop(R),R===null?Kt.stop():Kt.start()},Ce.addEventListener("sessionstart",cn),Ce.addEventListener("sessionend",un),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(q),q=Ce.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,q,Z),_=Re.get(R,N.length),_.init(q),N.push(_),ve.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ne.setFromProjectionMatrix(ve,Oi,q.reversedDepth),ne=this.localClippingEnabled,Ge=we.init(this.clippingPlanes,ne),S=ie.get(R,O.length),S.init(),O.push(S),Ce.enabled===!0&&Ce.isPresenting===!0){const Ae=U.xr.getDepthSensingMesh();Ae!==null&&Ti(Ae,q,-1/0,U.sortObjects)}Ti(R,q,0,U.sortObjects),S.finish(),U.sortObjects===!0&&S.sort(Se,L),ut=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ut&&ke.addToRenderList(S,R),this.info.render.frame++,Ge===!0&&we.beginShadows();const le=_.state.shadowsArray;ze.render(le,R,q),Ge===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=S.opaque,K=S.transmissive;if(_.setupLights(),q.isArrayCamera){const Ae=q.cameras;if(K.length>0)for(let Oe=0,He=Ae.length;Oe<He;Oe++){const Pe=Ae[Oe];Qo(ue,K,R,Pe)}ut&&ke.render(R);for(let Oe=0,He=Ae.length;Oe<He;Oe++){const Pe=Ae[Oe];br(S,R,Pe,Pe.viewport)}}else K.length>0&&Qo(ue,K,R,q),ut&&ke.render(R),br(S,R,q);Z!==null&&V===0&&(ot.updateMultisampleRenderTarget(Z),ot.updateRenderTargetMipmap(Z)),R.isScene===!0&&R.onAfterRender(U,R,q),Le.resetDefaultState(),C=-1,w=null,N.pop(),N.length>0?(_=N[N.length-1],Ge===!0&&we.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,O.pop(),O.length>0?S=O[O.length-1]:S=null};function Ti(R,q,le,ue){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)le=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ne.intersectsSprite(R)){ue&&Ke.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ve);const Oe=H.update(R),He=R.material;He.visible&&S.push(R,Oe,He,le,Ke.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ne.intersectsObject(R))){const Oe=H.update(R),He=R.material;if(ue&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ke.copy(R.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Ke.copy(Oe.boundingSphere.center)),Ke.applyMatrix4(R.matrixWorld).applyMatrix4(ve)),Array.isArray(He)){const Pe=Oe.groups;for(let $e=0,nt=Pe.length;$e<nt;$e++){const Ye=Pe[$e],dt=He[Ye.materialIndex];dt&&dt.visible&&S.push(R,Oe,dt,le,Ke.z,Ye)}}else He.visible&&S.push(R,Oe,He,le,Ke.z,null)}}const Ae=R.children;for(let Oe=0,He=Ae.length;Oe<He;Oe++)Ti(Ae[Oe],q,le,ue)}function br(R,q,le,ue){const K=R.opaque,Ae=R.transmissive,Oe=R.transparent;_.setupLightsView(le),Ge===!0&&we.setGlobalState(U.clippingPlanes,le),ue&&Be.viewport(k.copy(ue)),K.length>0&&Tr(K,q,le),Ae.length>0&&Tr(Ae,q,le),Oe.length>0&&Tr(Oe,q,le),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function Qo(R,q,le,ue){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ue.id]===void 0&&(_.state.transmissionRenderTarget[ue.id]=new ja(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Cs:la,minFilter:yr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const Ae=_.state.transmissionRenderTarget[ue.id],Oe=ue.viewport||k;Ae.setSize(Oe.z*U.transmissionResolutionScale,Oe.w*U.transmissionResolutionScale);const He=U.getRenderTarget(),Pe=U.getActiveCubeFace(),$e=U.getActiveMipmapLevel();U.setRenderTarget(Ae),U.getClearColor(pe),fe=U.getClearAlpha(),fe<1&&U.setClearColor(16777215,.5),U.clear(),ut&&ke.render(le);const nt=U.toneMapping;U.toneMapping=Xa;const Ye=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),_.setupLightsView(ue),Ge===!0&&we.setGlobalState(U.clippingPlanes,ue),Tr(R,le,ue),ot.updateMultisampleRenderTarget(Ae),ot.updateRenderTargetMipmap(Ae),st.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Tt=0,Wt=q.length;Tt<Wt;Tt++){const Ot=q[Tt],pt=Ot.object,Je=Ot.geometry,Xt=Ot.material,_t=Ot.group;if(Xt.side===ia&&pt.layers.test(ue.layers)){const bn=Xt.side;Xt.side=Vn,Xt.needsUpdate=!0,Ls(pt,le,ue,Je,Xt,_t),Xt.side=bn,Xt.needsUpdate=!0,dt=!0}}dt===!0&&(ot.updateMultisampleRenderTarget(Ae),ot.updateRenderTargetMipmap(Ae))}U.setRenderTarget(He,Pe,$e),U.setClearColor(pe,fe),Ye!==void 0&&(ue.viewport=Ye),U.toneMapping=nt}function Tr(R,q,le){const ue=q.isScene===!0?q.overrideMaterial:null;for(let K=0,Ae=R.length;K<Ae;K++){const Oe=R[K],He=Oe.object,Pe=Oe.geometry,$e=Oe.group;let nt=Oe.material;nt.allowOverride===!0&&ue!==null&&(nt=ue),He.layers.test(le.layers)&&Ls(He,q,le,Pe,nt,$e)}}function Ls(R,q,le,ue,K,Ae){R.onBeforeRender(U,q,le,ue,K,Ae),R.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(U,q,le,ue,R,Ae),K.transparent===!0&&K.side===ia&&K.forceSinglePass===!1?(K.side=Vn,K.needsUpdate=!0,U.renderBufferDirect(le,q,ue,K,R,Ae),K.side=Wa,K.needsUpdate=!0,U.renderBufferDirect(le,q,ue,K,R,Ae),K.side=ia):U.renderBufferDirect(le,q,ue,K,R,Ae),R.onAfterRender(U,q,le,ue,K,Ae)}function Ai(R,q,le){q.isScene!==!0&&(q=qe);const ue=Ve.get(R),K=_.state.lights,Ae=_.state.shadowsArray,Oe=K.state.version,He=J.getParameters(R,K.state,Ae,q,le),Pe=J.getProgramCacheKey(He);let $e=ue.programs;ue.environment=R.isMeshStandardMaterial?q.environment:null,ue.fog=q.fog,ue.envMap=(R.isMeshStandardMaterial?Vt:Gt).get(R.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,$e===void 0&&(R.addEventListener("dispose",xe),$e=new Map,ue.programs=$e);let nt=$e.get(Pe);if(nt!==void 0){if(ue.currentProgram===nt&&ue.lightsStateVersion===Oe)return Ii(R,He),nt}else He.uniforms=J.getUniforms(R),R.onBeforeCompile(He,U),nt=J.acquireProgram(He,Pe),$e.set(Pe,nt),ue.uniforms=He.uniforms;const Ye=ue.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=we.uniform),Ii(R,He),ue.needsLights=da(R),ue.lightsStateVersion=Oe,ue.needsLights&&(Ye.ambientLightColor.value=K.state.ambient,Ye.lightProbe.value=K.state.probe,Ye.directionalLights.value=K.state.directional,Ye.directionalLightShadows.value=K.state.directionalShadow,Ye.spotLights.value=K.state.spot,Ye.spotLightShadows.value=K.state.spotShadow,Ye.rectAreaLights.value=K.state.rectArea,Ye.ltc_1.value=K.state.rectAreaLTC1,Ye.ltc_2.value=K.state.rectAreaLTC2,Ye.pointLights.value=K.state.point,Ye.pointLightShadows.value=K.state.pointShadow,Ye.hemisphereLights.value=K.state.hemi,Ye.directionalShadowMap.value=K.state.directionalShadowMap,Ye.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ye.spotShadowMap.value=K.state.spotShadowMap,Ye.spotLightMatrix.value=K.state.spotLightMatrix,Ye.spotLightMap.value=K.state.spotLightMap,Ye.pointShadowMap.value=K.state.pointShadowMap,Ye.pointShadowMatrix.value=K.state.pointShadowMatrix),ue.currentProgram=nt,ue.uniformsList=null,nt}function Ar(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=zc.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Ii(R,q){const le=Ve.get(R);le.outputColorSpace=q.outputColorSpace,le.batching=q.batching,le.batchingColor=q.batchingColor,le.instancing=q.instancing,le.instancingColor=q.instancingColor,le.instancingMorph=q.instancingMorph,le.skinning=q.skinning,le.morphTargets=q.morphTargets,le.morphNormals=q.morphNormals,le.morphColors=q.morphColors,le.morphTargetsCount=q.morphTargetsCount,le.numClippingPlanes=q.numClippingPlanes,le.numIntersection=q.numClipIntersection,le.vertexAlphas=q.vertexAlphas,le.vertexTangents=q.vertexTangents,le.toneMapping=q.toneMapping}function ha(R,q,le,ue,K){q.isScene!==!0&&(q=qe),ot.resetTextureUnits();const Ae=q.fog,Oe=ue.isMeshStandardMaterial?q.environment:null,He=Z===null?U.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ts,Pe=(ue.isMeshStandardMaterial?Vt:Gt).get(ue.envMap||Oe),$e=ue.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,nt=!!le.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Ye=!!le.morphAttributes.position,dt=!!le.morphAttributes.normal,Tt=!!le.morphAttributes.color;let Wt=Xa;ue.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Wt=U.toneMapping);const Ot=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,pt=Ot!==void 0?Ot.length:0,Je=Ve.get(ue),Xt=_.state.lights;if(Ge===!0&&(ne===!0||R!==w)){const Qt=R===w&&ue.id===C;we.setState(ue,R,Qt)}let _t=!1;ue.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Xt.state.version||Je.outputColorSpace!==He||K.isBatchedMesh&&Je.batching===!1||!K.isBatchedMesh&&Je.batching===!0||K.isBatchedMesh&&Je.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Je.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Je.instancing===!1||!K.isInstancedMesh&&Je.instancing===!0||K.isSkinnedMesh&&Je.skinning===!1||!K.isSkinnedMesh&&Je.skinning===!0||K.isInstancedMesh&&Je.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Je.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Je.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Je.instancingMorph===!1&&K.morphTexture!==null||Je.envMap!==Pe||ue.fog===!0&&Je.fog!==Ae||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==we.numPlanes||Je.numIntersection!==we.numIntersection)||Je.vertexAlphas!==$e||Je.vertexTangents!==nt||Je.morphTargets!==Ye||Je.morphNormals!==dt||Je.morphColors!==Tt||Je.toneMapping!==Wt||Je.morphTargetsCount!==pt)&&(_t=!0):(_t=!0,Je.__version=ue.version);let bn=Je.currentProgram;_t===!0&&(bn=Ai(ue,q,K));let di=!1,Dn=!1,mn=!1;const Ft=bn.getUniforms(),Un=Je.uniforms;if(Be.useProgram(bn.program)&&(di=!0,Dn=!0,mn=!0),ue.id!==C&&(C=ue.id,Dn=!0),di||w!==R){Be.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ft.setValue(F,"projectionMatrix",R.projectionMatrix),Ft.setValue(F,"viewMatrix",R.matrixWorldInverse);const yn=Ft.map.cameraPosition;yn!==void 0&&yn.setValue(F,be.setFromMatrixPosition(R.matrixWorld)),et.logarithmicDepthBuffer&&Ft.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Ft.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Dn=!0,mn=!0)}if(K.isSkinnedMesh){Ft.setOptional(F,K,"bindMatrix"),Ft.setOptional(F,K,"bindMatrixInverse");const Qt=K.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),Ft.setValue(F,"boneTexture",Qt.boneTexture,ot))}K.isBatchedMesh&&(Ft.setOptional(F,K,"batchingTexture"),Ft.setValue(F,"batchingTexture",K._matricesTexture,ot),Ft.setOptional(F,K,"batchingIdTexture"),Ft.setValue(F,"batchingIdTexture",K._indirectTexture,ot),Ft.setOptional(F,K,"batchingColorTexture"),K._colorsTexture!==null&&Ft.setValue(F,"batchingColorTexture",K._colorsTexture,ot));const Tn=le.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&Ee.update(K,le,bn),(Dn||Je.receiveShadow!==K.receiveShadow)&&(Je.receiveShadow=K.receiveShadow,Ft.setValue(F,"receiveShadow",K.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Un.envMap.value=Pe,Un.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&q.environment!==null&&(Un.envMapIntensity.value=q.environmentIntensity),Dn&&(Ft.setValue(F,"toneMappingExposure",U.toneMappingExposure),Je.needsLights&&qa(Un,mn),Ae&&ue.fog===!0&&ce.refreshFogUniforms(Un,Ae),ce.refreshMaterialUniforms(Un,ue,j,Q,_.state.transmissionRenderTarget[R.id]),zc.upload(F,Ar(Je),Un,ot)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(zc.upload(F,Ar(Je),Un,ot),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Ft.setValue(F,"center",K.center),Ft.setValue(F,"modelViewMatrix",K.modelViewMatrix),Ft.setValue(F,"normalMatrix",K.normalMatrix),Ft.setValue(F,"modelMatrix",K.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const Qt=ue.uniformsGroups;for(let yn=0,Rr=Qt.length;yn<Rr;yn++){const Pn=Qt[yn];lt.update(Pn,bn),lt.bind(Pn,bn)}}return bn}function qa(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function da(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(R,q,le){const ue=Ve.get(R);ue.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),Ve.get(R.texture).__webglTexture=q,Ve.get(R.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:le,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const le=Ve.get(R);le.__webglFramebuffer=q,le.__useDefaultFramebuffer=q===void 0};const an=F.createFramebuffer();this.setRenderTarget=function(R,q=0,le=0){Z=R,G=q,V=le;let ue=!0,K=null,Ae=!1,Oe=!1;if(R){const Pe=Ve.get(R);if(Pe.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(F.FRAMEBUFFER,null),ue=!1;else if(Pe.__webglFramebuffer===void 0)ot.setupRenderTarget(R);else if(Pe.__hasExternalTextures)ot.rebindTextures(R,Ve.get(R.texture).__webglTexture,Ve.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ye=R.depthTexture;if(Pe.__boundDepthTexture!==Ye){if(Ye!==null&&Ve.has(Ye)&&(R.width!==Ye.image.width||R.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(R)}}const $e=R.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Oe=!0);const nt=Ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(nt[q])?K=nt[q][le]:K=nt[q],Ae=!0):R.samples>0&&ot.useMultisampledRTT(R)===!1?K=Ve.get(R).__webglMultisampledFramebuffer:Array.isArray(nt)?K=nt[le]:K=nt,k.copy(R.viewport),ae.copy(R.scissor),de=R.scissorTest}else k.copy(ee).multiplyScalar(j).floor(),ae.copy(ye).multiplyScalar(j).floor(),de=Me;if(le!==0&&(K=an),Be.bindFramebuffer(F.FRAMEBUFFER,K)&&ue&&Be.drawBuffers(R,K),Be.viewport(k),Be.scissor(ae),Be.setScissorTest(de),Ae){const Pe=Ve.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,Pe.__webglTexture,le)}else if(Oe){const Pe=q;for(let $e=0;$e<R.textures.length;$e++){const nt=Ve.get(R.textures[$e]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+$e,nt.__webglTexture,le,Pe)}}else if(R!==null&&le!==0){const Pe=Ve.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Pe.__webglTexture,le)}C=-1},this.readRenderTargetPixels=function(R,q,le,ue,K,Ae,Oe,He=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Oe!==void 0&&(Pe=Pe[Oe]),Pe){Be.bindFramebuffer(F.FRAMEBUFFER,Pe);try{const $e=R.textures[He],nt=$e.format,Ye=$e.type;if(!et.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ue&&le>=0&&le<=R.height-K&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+He),F.readPixels(q,le,ue,K,je.convert(nt),je.convert(Ye),Ae))}finally{const $e=Z!==null?Ve.get(Z).__webglFramebuffer:null;Be.bindFramebuffer(F.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(R,q,le,ue,K,Ae,Oe,He=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Oe!==void 0&&(Pe=Pe[Oe]),Pe)if(q>=0&&q<=R.width-ue&&le>=0&&le<=R.height-K){Be.bindFramebuffer(F.FRAMEBUFFER,Pe);const $e=R.textures[He],nt=$e.format,Ye=$e.type;if(!et.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,dt),F.bufferData(F.PIXEL_PACK_BUFFER,Ae.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+He),F.readPixels(q,le,ue,K,je.convert(nt),je.convert(Ye),0);const Tt=Z!==null?Ve.get(Z).__webglFramebuffer:null;Be.bindFramebuffer(F.FRAMEBUFFER,Tt);const Wt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await xE(F,Wt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,dt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ae),F.deleteBuffer(dt),F.deleteSync(Wt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,le=0){const ue=Math.pow(2,-le),K=Math.floor(R.image.width*ue),Ae=Math.floor(R.image.height*ue),Oe=q!==null?q.x:0,He=q!==null?q.y:0;ot.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,le,0,0,Oe,He,K,Ae),Be.unbindTexture()};const Jo=F.createFramebuffer(),$o=F.createFramebuffer();this.copyTextureToTexture=function(R,q,le=null,ue=null,K=0,Ae=null){Ae===null&&(K!==0?(Vo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=K,K=0):Ae=0);let Oe,He,Pe,$e,nt,Ye,dt,Tt,Wt;const Ot=R.isCompressedTexture?R.mipmaps[Ae]:R.image;if(le!==null)Oe=le.max.x-le.min.x,He=le.max.y-le.min.y,Pe=le.isBox3?le.max.z-le.min.z:1,$e=le.min.x,nt=le.min.y,Ye=le.isBox3?le.min.z:0;else{const Tn=Math.pow(2,-K);Oe=Math.floor(Ot.width*Tn),He=Math.floor(Ot.height*Tn),R.isDataArrayTexture?Pe=Ot.depth:R.isData3DTexture?Pe=Math.floor(Ot.depth*Tn):Pe=1,$e=0,nt=0,Ye=0}ue!==null?(dt=ue.x,Tt=ue.y,Wt=ue.z):(dt=0,Tt=0,Wt=0);const pt=je.convert(q.format),Je=je.convert(q.type);let Xt;q.isData3DTexture?(ot.setTexture3D(q,0),Xt=F.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ot.setTexture2DArray(q,0),Xt=F.TEXTURE_2D_ARRAY):(ot.setTexture2D(q,0),Xt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const _t=F.getParameter(F.UNPACK_ROW_LENGTH),bn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),di=F.getParameter(F.UNPACK_SKIP_PIXELS),Dn=F.getParameter(F.UNPACK_SKIP_ROWS),mn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ot.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ot.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$e),F.pixelStorei(F.UNPACK_SKIP_ROWS,nt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ye);const Ft=R.isDataArrayTexture||R.isData3DTexture,Un=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const Tn=Ve.get(R),Qt=Ve.get(q),yn=Ve.get(Tn.__renderTarget),Rr=Ve.get(Qt.__renderTarget);Be.bindFramebuffer(F.READ_FRAMEBUFFER,yn.__webglFramebuffer),Be.bindFramebuffer(F.DRAW_FRAMEBUFFER,Rr.__webglFramebuffer);for(let Pn=0;Pn<Pe;Pn++)Ft&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ve.get(R).__webglTexture,K,Ye+Pn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ve.get(q).__webglTexture,Ae,Wt+Pn)),F.blitFramebuffer($e,nt,Oe,He,dt,Tt,Oe,He,F.DEPTH_BUFFER_BIT,F.NEAREST);Be.bindFramebuffer(F.READ_FRAMEBUFFER,null),Be.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Ve.has(R)){const Tn=Ve.get(R),Qt=Ve.get(q);Be.bindFramebuffer(F.READ_FRAMEBUFFER,Jo),Be.bindFramebuffer(F.DRAW_FRAMEBUFFER,$o);for(let yn=0;yn<Pe;yn++)Ft?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Tn.__webglTexture,K,Ye+yn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Tn.__webglTexture,K),Un?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Qt.__webglTexture,Ae,Wt+yn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Qt.__webglTexture,Ae),K!==0?F.blitFramebuffer($e,nt,Oe,He,dt,Tt,Oe,He,F.COLOR_BUFFER_BIT,F.NEAREST):Un?F.copyTexSubImage3D(Xt,Ae,dt,Tt,Wt+yn,$e,nt,Oe,He):F.copyTexSubImage2D(Xt,Ae,dt,Tt,$e,nt,Oe,He);Be.bindFramebuffer(F.READ_FRAMEBUFFER,null),Be.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Un?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Xt,Ae,dt,Tt,Wt,Oe,He,Pe,pt,Je,Ot.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D(Xt,Ae,dt,Tt,Wt,Oe,He,Pe,pt,Ot.data):F.texSubImage3D(Xt,Ae,dt,Tt,Wt,Oe,He,Pe,pt,Je,Ot):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ae,dt,Tt,Oe,He,pt,Je,Ot.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ae,dt,Tt,Ot.width,Ot.height,pt,Ot.data):F.texSubImage2D(F.TEXTURE_2D,Ae,dt,Tt,Oe,He,pt,Je,Ot);F.pixelStorei(F.UNPACK_ROW_LENGTH,_t),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,bn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,di),F.pixelStorei(F.UNPACK_SKIP_ROWS,Dn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,mn),Ae===0&&q.generateMipmaps&&F.generateMipmap(Xt),Be.unbindTexture()},this.initRenderTarget=function(R){Ve.get(R).__webglFramebuffer===void 0&&ot.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ot.setTextureCube(R,0):R.isData3DTexture?ot.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ot.setTexture2DArray(R,0):ot.setTexture2D(R,0),Be.unbindTexture()},this.resetState=function(){G=0,V=0,Z=null,Be.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Rt._getUnpackColorSpace()}}const FR=["#5227FF","#FF9FFC","#B19EEF"];function O0({mouseForce:s=20,cursorSize:e=100,isViscous:i=!1,viscous:r=30,iterationsViscous:l=32,iterationsPoisson:c=32,dt:f=.014,BFECC:d=!0,resolution:m=.5,isBounce:p=!1,colors:g=FR,style:v={},className:y="",autoDemo:E=!0,autoSpeed:b=.5,autoIntensity:A=2.2,takeoverDuration:S=.25,autoResumeDelay:_=1e3,autoRampDuration:O=.6}){const N=he.useRef(null),U=he.useRef(null),I=he.useRef(null),G=he.useRef(null),V=he.useRef(null),Z=he.useRef(!0),C=he.useRef(null);return he.useEffect(()=>{if(!N.current)return;function w(D){let x;Array.isArray(D)&&D.length>0?x=D.length===1?[D[0],D[0]]:D:x=["#ffffff","#ffffff"];const H=x.length,J=new Uint8Array(H*4);for(let ie=0;ie<H;ie++){const Re=new Ct(x[ie]);J[ie*4+0]=Math.round(Re.r*255),J[ie*4+1]=Math.round(Re.g*255),J[ie*4+2]=Math.round(Re.b*255),J[ie*4+3]=255}const ce=new XE(J,H,1,ci);return ce.magFilter=Gn,ce.minFilter=Gn,ce.wrapS=Mi,ce.wrapT=Mi,ce.generateMipmaps=!1,ce.needsUpdate=!0,ce}const k=w(g),ae=new en(0,0,0,0);class de{width=0;height=0;aspect=1;pixelRatio=1;isMobile=!1;breakpoint=768;fboWidth=null;fboHeight=null;time=0;delta=0;container=null;renderer=null;clock=null;init(x){this.container=x,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new zR({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Ct(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height);const H=this.renderer.domElement;H.style.width="100%",H.style.height="100%",H.style.display="block",this.clock=new tb,this.clock.start()}resize(){if(!this.container)return;const x=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(x.width)),this.height=Math.max(1,Math.floor(x.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.clock&&(this.delta=this.clock.getDelta(),this.time+=this.delta)}}const pe=new de;class fe{mouseMoved=!1;coords=new ct;coords_old=new ct;diff=new ct;timer=null;container=null;isHoverInside=!1;hasUserControl=!1;isAutoActive=!1;autoIntensity=2;takeoverActive=!1;takeoverStartTime=0;takeoverDuration=.25;takeoverFrom=new ct;takeoverTo=new ct;onInteract=null;_onMouseMove=this.onDocumentMouseMove.bind(this);_onTouchStart=this.onDocumentTouchStart.bind(this);_onTouchMove=this.onDocumentTouchMove.bind(this);_onMouseEnter=this.onMouseEnter.bind(this);_onMouseLeave=this.onMouseLeave.bind(this);_onTouchEnd=this.onTouchEnd.bind(this);init(x){this.container=x,x.addEventListener("mousemove",this._onMouseMove),x.addEventListener("touchstart",this._onTouchStart,{passive:!0}),x.addEventListener("touchmove",this._onTouchMove,{passive:!0}),x.addEventListener("mouseenter",this._onMouseEnter),x.addEventListener("mouseleave",this._onMouseLeave),x.addEventListener("touchend",this._onTouchEnd)}dispose(){const x=this.container;x&&(x.removeEventListener("mousemove",this._onMouseMove),x.removeEventListener("touchstart",this._onTouchStart),x.removeEventListener("touchmove",this._onTouchMove),x.removeEventListener("mouseenter",this._onMouseEnter),x.removeEventListener("mouseleave",this._onMouseLeave),x.removeEventListener("touchend",this._onTouchEnd))}setCoords(x,H){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const J=this.container.getBoundingClientRect(),ce=(x-J.left)/J.width,ie=(H-J.top)/J.height;this.coords.set(ce*2-1,-(ie*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(x,H){this.coords.set(x,H),this.mouseMoved=!0}onDocumentMouseMove(x){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const H=this.container.getBoundingClientRect(),J=(x.clientX-H.left)/H.width,ce=(x.clientY-H.top)/H.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(J*2-1,-(ce*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(x.clientX,x.clientY),this.hasUserControl=!0}onDocumentTouchStart(x){if(x.touches.length===1){const H=x.touches[0];this.onInteract&&this.onInteract(),this.setCoords(H.pageX,H.pageY),this.hasUserControl=!0}}onDocumentTouchMove(x){if(x.touches.length===1){const H=x.touches[0];this.onInteract&&this.onInteract(),this.setCoords(H.pageX,H.pageY)}}onTouchEnd(){this.isHoverInside=!1}onMouseEnter(){this.isHoverInside=!0}onMouseLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const x=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(x>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const H=x*x*(3-2*x);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,H)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const P=new fe;class Q{mouse;manager;enabled;speed;resumeDelay;rampDurationMs;active=!1;current=new ct(0,0);target=new ct;lastTime=performance.now();activationTime=0;margin=.2;_tmpDir=new ct;constructor(x,H,J){this.mouse=x,this.manager=H,this.enabled=J.enabled,this.speed=J.speed,this.resumeDelay=J.resumeDelay||3e3,this.rampDurationMs=(J.rampDuration||0)*1e3,this.pickNewTarget()}pickNewTarget(){const x=Math.random;this.target.set((x()*2-1)*(1-this.margin),(x()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const x=performance.now();if(x-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=x,this.activationTime=x),!this.active)return;this.mouse.isAutoActive=!0;let J=(x-this.lastTime)/1e3;this.lastTime=x,J>.2&&(J=.016);const ce=this._tmpDir.subVectors(this.target,this.current),ie=ce.length();if(ie<.01){this.pickNewTarget();return}ce.normalize();let Re=1;if(this.rampDurationMs>0){const ke=Math.min(1,(x-this.activationTime)/this.rampDurationMs);Re=ke*ke*(3-2*ke)}const we=this.speed*J*Re,ze=Math.min(we,ie);this.current.addScaledVector(ce,ze),this.mouse.setNormalized(this.current.x,this.current.y)}}const j=`
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
`,Se=`
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
`,L=`
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
`,ee=`
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
`,ye=`
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
`,Me=`
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
`,Ne=`
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
`,Ge=`
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
`,ne=`
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
`,ve=`
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
`;class be{props;uniforms;scene=null;camera=null;material=null;geometry=null;plane=null;constructor(x){this.props=x||{},this.uniforms=this.props.material?.uniforms}init(...x){this.scene=new r_,this.camera=new kc,this.uniforms&&(this.material=new wc(this.props.material),this.geometry=new Sr(2,2),this.plane=new ui(this.geometry,this.material),this.scene.add(this.plane))}update(...x){!pe.renderer||!this.scene||!this.camera||(pe.renderer.setRenderTarget(this.props.output||null),pe.renderer.render(this.scene,this.camera),pe.renderer.setRenderTarget(null))}}class Ke extends be{line;constructor(x){super({material:{vertexShader:j,fragmentShader:ee,uniforms:{boundarySpace:{value:x.cellScale},px:{value:x.cellScale},fboSize:{value:x.fboSize},velocity:{value:x.src.texture},dt:{value:x.dt},isBFECC:{value:!0}}},output:x.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const x=new fa,H=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);x.setAttribute("position",new Ei(H,3));const J=new wc({vertexShader:Se,fragmentShader:ee,uniforms:this.uniforms});this.line=new KE(x,J),this.scene.add(this.line)}update(...x){const{dt:H,isBounce:J,BFECC:ce}=x[0]||{};this.uniforms&&(typeof H=="number"&&(this.uniforms.dt.value=H),typeof J=="boolean"&&(this.line.visible=J),typeof ce=="boolean"&&(this.uniforms.isBFECC.value=ce),super.update())}}class qe extends be{mouse;constructor(x){super({output:x.dst}),this.init(x)}init(x){super.init();const H=new Sr(1,1),J=new wc({vertexShader:L,fragmentShader:Ne,blending:kh,depthWrite:!1,uniforms:{px:{value:x.cellScale},force:{value:new ct(0,0)},center:{value:new ct(0,0)},scale:{value:new ct(x.cursor_size,x.cursor_size)}}});this.mouse=new ui(H,J),this.scene.add(this.mouse)}update(...x){const H=x[0]||{},J=P.diff.x/2*(H.mouse_force||0),ce=P.diff.y/2*(H.mouse_force||0),ie=H.cellScale||{x:1,y:1},Re=H.cursor_size||0,we=Re*ie.x,ze=Re*ie.y,ke=Math.min(Math.max(P.coords.x,-1+we+ie.x*2),1-we-ie.x*2),Ee=Math.min(Math.max(P.coords.y,-1+ze+ie.y*2),1-ze-ie.y*2),Ue=this.mouse.material.uniforms;Ue.force.value.set(J,ce),Ue.center.value.set(ke,Ee),Ue.scale.value.set(Re,Re),super.update()}}class ut extends be{constructor(x){super({material:{vertexShader:j,fragmentShader:ve,uniforms:{boundarySpace:{value:x.boundarySpace},velocity:{value:x.src.texture},velocity_new:{value:x.dst_.texture},v:{value:x.viscous},px:{value:x.cellScale},dt:{value:x.dt}}},output:x.dst,output0:x.dst_,output1:x.dst}),this.init()}update(...x){const{viscous:H,iterations:J,dt:ce}=x[0]||{};if(!this.uniforms)return;let ie,Re;typeof H=="number"&&(this.uniforms.v.value=H);const we=J??0;for(let ze=0;ze<we;ze++)ze%2===0?(ie=this.props.output0,Re=this.props.output1):(ie=this.props.output1,Re=this.props.output0),this.uniforms.velocity_new.value=ie.texture,this.props.output=Re,typeof ce=="number"&&(this.uniforms.dt.value=ce),super.update();return Re}}class Zt extends be{constructor(x){super({material:{vertexShader:j,fragmentShader:Me,uniforms:{boundarySpace:{value:x.boundarySpace},velocity:{value:x.src.texture},px:{value:x.cellScale},dt:{value:x.dt}}},output:x.dst}),this.init()}update(...x){const{vel:H}=x[0]||{};this.uniforms&&H&&(this.uniforms.velocity.value=H.texture),super.update()}}class F extends be{constructor(x){super({material:{vertexShader:j,fragmentShader:Ge,uniforms:{boundarySpace:{value:x.boundarySpace},pressure:{value:x.dst_.texture},divergence:{value:x.src.texture},px:{value:x.cellScale}}},output:x.dst,output0:x.dst_,output1:x.dst}),this.init()}update(...x){const{iterations:H}=x[0]||{};let J,ce;const ie=H??0;for(let Re=0;Re<ie;Re++)Re%2===0?(J=this.props.output0,ce=this.props.output1):(J=this.props.output1,ce=this.props.output0),this.uniforms&&(this.uniforms.pressure.value=J.texture),this.props.output=ce,super.update();return ce}}class Dt extends be{constructor(x){super({material:{vertexShader:j,fragmentShader:ne,uniforms:{boundarySpace:{value:x.boundarySpace},pressure:{value:x.src_p.texture},velocity:{value:x.src_v.texture},px:{value:x.cellScale},dt:{value:x.dt}}},output:x.dst}),this.init()}update(...x){const{vel:H,pressure:J}=x[0]||{};this.uniforms&&H&&J&&(this.uniforms.velocity.value=H.texture,this.uniforms.pressure.value=J.texture),super.update()}}class st{options;fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null};fboSize=new ct;cellScale=new ct;boundarySpace=new ct;advection;externalForce;viscous;divergence;poisson;pressure;constructor(x){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...x},this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Cs:Ni}createAllFBO(){const H={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Gn,magFilter:Gn,wrapS:Mi,wrapT:Mi};for(const J in this.fbos)this.fbos[J]=new ja(this.fboSize.x,this.fboSize.y,H)}createShaderPass(){this.advection=new Ke({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new qe({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new ut({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Zt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new F({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Dt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const x=Math.max(1,Math.round(this.options.resolution*pe.width)),H=Math.max(1,Math.round(this.options.resolution*pe.height));this.cellScale.set(1/x,1/H),this.fboSize.set(x,H)}resize(){this.calcSize();for(const x in this.fbos)this.fbos[x].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let x=this.fbos.vel_1;this.options.isViscous&&(x=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:x});const H=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:x,pressure:H})}}class et{simulation;scene;camera;output;constructor(){this.simulation=new st,this.scene=new r_,this.camera=new kc,this.output=new ui(new Sr(2,2),new wc({vertexShader:j,fragmentShader:ye,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ct},palette:{value:k},bgColor:{value:ae}}})),this.scene.add(this.output)}resize(){this.simulation.resize()}render(){pe.renderer&&(pe.renderer.setRenderTarget(null),pe.renderer.render(this.scene,this.camera))}update(){this.simulation.update(),this.render()}}class Be{props;output;autoDriver;lastUserInteraction=performance.now();running=!1;_loop=this.loop.bind(this);_resize=this.resize.bind(this);_onVisibility;constructor(x){this.props=x,pe.init(x.$wrapper),P.init(x.$wrapper),P.autoIntensity=x.autoIntensity,P.takeoverDuration=x.takeoverDuration,P.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new Q(P,this,{enabled:x.autoDemo,speed:x.autoSpeed,resumeDelay:x.autoResumeDelay,rampDuration:x.autoRampDuration}),this.init(),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():Z.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility)}init(){pe.renderer&&(this.props.$wrapper.prepend(pe.renderer.domElement),this.output=new et)}resize(){pe.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),P.update(),pe.update(),this.output.update()}loop(){this.running&&(this.render(),G.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,G.current&&(cancelAnimationFrame(G.current),G.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),this._onVisibility&&document.removeEventListener("visibilitychange",this._onVisibility),P.dispose(),pe.renderer){const x=pe.renderer.domElement;x&&x.parentNode&&x.parentNode.removeChild(x),pe.renderer.dispose()}}catch{}}}const Mt=N.current;Mt.style.position=Mt.style.position||"relative",Mt.style.overflow=Mt.style.overflow||"hidden";const Ve=new Be({$wrapper:Mt,autoDemo:E,autoSpeed:b,autoIntensity:A,takeoverDuration:S,autoResumeDelay:_,autoRampDuration:O});U.current=Ve,(()=>{if(!U.current)return;const D=U.current.output?.simulation;if(!D)return;const x=D.options.resolution;Object.assign(D.options,{mouse_force:s,cursor_size:e,isViscous:i,viscous:r,iterations_viscous:l,iterations_poisson:c,dt:f,BFECC:d,resolution:m,isBounce:p}),m!==x&&D.resize()})(),Ve.start();const Gt=new IntersectionObserver(D=>{const x=D[0],H=x.isIntersecting&&x.intersectionRatio>0;Z.current=H,U.current&&(H&&!document.hidden?U.current.start():U.current.pause())},{threshold:[0,.01,.1]});Gt.observe(Mt),V.current=Gt;const Vt=new ResizeObserver(()=>{U.current&&(C.current&&cancelAnimationFrame(C.current),C.current=requestAnimationFrame(()=>{U.current&&U.current.resize()}))});return Vt.observe(Mt),I.current=Vt,()=>{if(G.current&&cancelAnimationFrame(G.current),I.current)try{I.current.disconnect()}catch{}if(V.current)try{V.current.disconnect()}catch{}U.current&&U.current.dispose(),U.current=null}},[d,e,f,p,i,c,l,s,m,r,g,E,b,A,S,_,O]),he.useEffect(()=>{const w=U.current;if(!w)return;const k=w.output?.simulation;if(!k)return;const ae=k.options.resolution;Object.assign(k.options,{mouse_force:s,cursor_size:e,isViscous:i,viscous:r,iterations_viscous:l,iterations_poisson:c,dt:f,BFECC:d,resolution:m,isBounce:p}),w.autoDriver&&(w.autoDriver.enabled=E,w.autoDriver.speed=b,w.autoDriver.resumeDelay=_,w.autoDriver.rampDurationMs=O*1e3,w.autoDriver.mouse&&(w.autoDriver.mouse.autoIntensity=A,w.autoDriver.mouse.takeoverDuration=S)),m!==ae&&k.resize()},[s,e,i,r,l,c,f,d,m,p,E,b,A,S,_,O]),z.jsx("div",{ref:N,className:`liquid-ether-container ${y||""}`,style:v})}const P0=[{id:"anubisx-ir-framework",title:"AnubisX: Incident Response Framework",desc:"A centralized platform for Detection Rules, Incident Response Playbooks, and Automated Workflows.",tech:["React","TypeScript","Sigma","YARA","Snort","n8n"],link:"#",image:"/IR-home.png",features:["Detection Rule Repository (65+ rules)","IR Playbooks (NIST based)","Automated Response Workflows (n8n)","MITRE ATT&CK Mapping"],longDescription:"AnubisX is a comprehensive incident response framework designed to centralize security operations resources. It bridges the gap between detection and response by providing a single source of truth for SOC analysts and incident responders. The platform features a searchable catalog of detection rules, actionable PDF playbooks, and visual guides for n8n response workflows.",githubLink:"https://github.com/MoWael-Encrypted/AnubisX-IR-Framework/",videoUrl:"https://www.youtube.com/embed/4YyKIuC_ga4"},{id:"anubisx-crypt",title:"AnubisX Crypt",desc:"High-performance, web-based encryption system leveraging hybrid parallel computing (MPI + OpenMP).",tech:["React","TypeScript","Python Flask","C++","OpenMP","MPI"],link:"#",image:"/anubisxcrypt.png",features:["Intelligent Auto-Configuration Engine","Hybrid Parallel Computing (MPI + OpenMP)","Real-Time Performance Monitoring","Interactive File Upload Dashboard"],longDescription:"AnubisX Crypt is a three-tier web application designed to bridge the gap between theoretical High-Performance Computing (HPC) concepts and practical web development. It solves the bottleneck of computationally expensive encryption by offloading workloads to compiled C++ executables. The system features a Smart Auto-Configuration Engine that automatically selects the most efficient execution model (Serial, OpenMP, MPI, or Hybrid) based on file size and system load.",githubLink:"https://github.com/MoWael-Encrypted/AnubisX-Crypt/tree/master",videoUrl:"https://www.youtube.com/embed/6A7XxfK2hnE"},{id:"digital-signature-verifier",title:"Digital Signature Verifier",desc:"A web-based cybersecurity tool for generating RSA keys, signing documents, and verifying digital signatures.",tech:["Python","Flask","RSA","Cryptography","SHA-256"],link:"#",image:"/sv.png",features:["RSA Key Management (2048-bit)","Document Signing (SHA-256 + PKCS#1 v1.5)","Signature Verification & Tamper Detection","Forensic Challenges for Practice"],longDescription:"The Digital Signature Verifier is an educational platform designed to teach the fundamentals of Public Key Cryptography (RSA). It provides a secure, interactive environment where users can generate cryptographic key pairs, sign documents to ensure non-repudiation, and verify signatures to detect tampering. The application supports PDF, DOCX, TXT, and images, generating detachable .sig signature files. It also includes built-in forensic challenges for practicing digital evidence validation.",githubLink:"https://github.com/MoWael-Encrypted/Digital-Signature-Verifier",screenshots:[{src:"/sv-generate.png",caption:"RSA Key Generation - Create secure 2048-bit key pairs"},{src:"/sv-sign.png",caption:"Document Signing - Sign files with SHA-256 hashing"},{src:"/sv-verify.png",caption:"Signature Verification - Validate authenticity and detect tampering"}]}],HR=[{title:"The Year AI Becomes the Weapon: 5 Cybersecurity Predictions for 2026",desc:"Deepfakes are up 1,500%, agents are attacking agents, and “Shadow AI” is costing companies millions. Here is your survival guide.",img:"https://miro.medium.com/v2/resize:fill:160:106/1*yK97BcaB_K0o8fthF8Kw_g.png",link:"https://medium.com/@wmostafa021/the-year-ai-becomes-the-weapon-5-cybersecurity-predictions-for-2026-2962b8c4256f"},{title:"SOC Analyst’s New Superpower (Part 2): Host-Based Automated Incident Response",desc:"A Purple Team Lab: Building an Internal Loop from Detection to AI Reporting",img:"https://miro.medium.com/v2/resize:fill:160:106/1*P92iszCm_MpzDZb0myEwZA.png",link:"https://medium.com/@wmostafa021/soc-analysts-new-superpower-part-2-host-based-automated-incident-response-3e40133451e1"},{title:"SOC Analyst’s New Superpower: How SOAR Tames the Chaos (Part 1)",desc:"A Beginner’s Guide to Security Orchestration, Automation, and Response",img:"https://miro.medium.com/v2/resize:fill:160:106/1*Vv0Mp9REPAmjuvXtZdEm4Q.png",link:"https://medium.com/@wmostafa021/soc-analysts-new-superpower-how-soar-tames-the-chaos-part-1-c499dee7bd91"},{title:"From the SOC Trenches: Your Ultimate Guide to Analyzing Malicious Emails",desc:"How analysts deconstruct phishing attacks, BEC scams, and malware threats, one email at a time.",img:"https://miro.medium.com/v2/resize:fill:160:106/1*PSFGjAkLhJWX1HuK7mC4Kg.png",link:"https://medium.com/@wmostafa021/from-the-soc-trenches-your-ultimate-guide-to-analyzing-malicious-emails-3ad4f4943086"},{title:"From Zero to Hero: A Complete Guide to Setting Up ELK Stack with Winlogbeat",desc:"A step-by-step tutorial for installing, configuring, and troubleshooting a full logging pipeline with Elasticsearch, Kibana, and Windows Event Logs.",img:"https://miro.medium.com/v2/resize:fill:160:106/1*62MLX1Qf-sfCc23m96dFWA.png",link:"https://medium.com/@wmostafa021/from-zero-to-hero-a-complete-guide-to-setting-up-elk-stack-with-winlogbeat-65d105050543"}],P_=[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Experience",href:"#experience"},{label:"Projects",href:"#projects"},{label:"Education",href:"#education"},{label:"Certifications",href:"#certifications"},{label:"Achievements",href:"#achievements"},{label:"Activities",href:"#activities"},{label:"Articles",href:"#articles"},{label:"Contact",href:"#contact"}],GR=["Cyber Operations","Endpoint Security","Windows","Network Security","Networking","Web Programming (HTML, JS, CSS)","IBM Security QRadar","SQL Injection Attacks","User Awareness Raising","Problem Solving"],VR=["Arabic (Native)","English (Very strong business proficiency)"],kR=[{name:"Incident Response Track",provider:"Depi",date:"Dec 2025"},{name:"Certified in Cybersecurity (CC)",provider:"ISC2",date:"Aug 2024"},{name:"HCIA-Security",provider:"Huawei",date:"Dec 2024"},{name:"Google Cybersecurity",provider:"Google",date:"Sep 2025"},{name:"Cloud Security Foundations",provider:"AWS Academy",date:"Aug 2024"},{name:"IBM Security QRadar Functions",provider:"Pluralsight",date:"Aug 2024"},{name:"Monitor and Detect with QRadar",provider:"Pluralsight",date:"Aug 2024"},{name:"Networking Basics",provider:"Cisco",date:"Jul 2024"},{name:"Endpoint Security",provider:"Cisco",date:"Apr 2025"},{name:"Threat Intelligence and Hunting",provider:"IBM",date:"Apr 2024"},{name:"Networking Devices",provider:"Cisco",date:"Jul 2024"},{name:"CompTIA Security+ Prep",provider:"Pluralsight",date:"Aug 2024"},{name:"Security Architecture",provider:"Pluralsight",date:"Aug 2024"},{name:"Connect and Protect",provider:"Google",date:"Jun 2025"},{name:"General Security Concepts",provider:"Pluralsight",date:"Aug 2024"}];function XR(){const[s,e]=he.useState("home"),[i,r]=he.useState(!1),l=()=>r(!i);he.useEffect(()=>{const f=()=>{const d=document.querySelectorAll("section[id]"),m=window.pageYOffset;d.forEach(p=>{const g=p.offsetHeight,v=p.offsetTop-100,y=p.getAttribute("id");y&&m>v&&m<=v+g&&e(y)})};return window.addEventListener("scroll",f),f(),()=>window.removeEventListener("scroll",f)},[]);const c=f=>{const d=f.replace("#",""),m=document.getElementById(d);m&&m.scrollIntoView({behavior:"smooth",block:"start"})};return z.jsxs("div",{className:"app",children:[z.jsx("div",{className:"background",children:z.jsx(O0,{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:20,cursorSize:100,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6})}),z.jsxs("header",{className:"navbar",children:[z.jsx("button",{className:"mobile-menu-btn",onClick:l,style:{position:"relative",zIndex:1001},children:i?"✕":"☰"}),z.jsx("nav",{className:"nav-container desktop-only",children:P_.map((f,d)=>z.jsx("button",{onClick:()=>{c(f.href)},className:`nav-item ${s===f.href.replace("#","")?"active":""}`,children:f.label},d))}),wM.createPortal(z.jsx("div",{className:`nav-container mobile-only ${i?"open":""}`,children:P_.map((f,d)=>z.jsx("button",{onClick:()=>{c(f.href),r(!1)},className:`nav-item ${s===f.href.replace("#","")?"active":""}`,children:f.label},d))}),document.body)]}),z.jsx("section",{id:"home",className:"hero",children:z.jsxs("div",{className:"hero-content",children:[z.jsx("h1",{children:"Mostafa Elsaeed"}),z.jsx("p",{children:"Cybersecurity Engineer | SOC Engineer"}),z.jsxs("div",{className:"hero-subtitle",children:[z.jsx("span",{children:"Sheikh Zayed, Egypt"}),z.jsx("span",{children:"•"}),z.jsx("span",{children:"Galala University"})]}),z.jsxs("div",{className:"hero-buttons",children:[z.jsx("a",{href:"MOSTAFA ELSAEED CV.pdf",download:!0,className:"button contact-purple",children:"Download CV"}),z.jsx("a",{href:"#contact",className:"button contact-white",children:"Get in Touch"})]})]})}),z.jsxs("section",{id:"about",className:"section about",children:[z.jsx("h2",{children:"About Me"}),z.jsxs("div",{className:"about-content",children:[z.jsx("div",{className:"about-profile",children:z.jsx("img",{src:"mo.jpg",alt:"Profile: Mostafa Elsaeed",className:"profile-img-card"})}),z.jsxs("div",{className:"about-text",children:[z.jsx("p",{children:"Motivated undergraduate Cybersecurity Engineer with hands-on experience in threat detection, incident response, and system hardening. Skilled in securing networks, analyzing vulnerabilities, and applying best practices to reduce risk. Passionate about defending digital systems and continuously improving security strategies in fast-paced environments. Looking for an entry-level job or internship in Cybersecurity and / or Network Management."}),z.jsx("p",{children:"With a current GPA of 3.75 and multiple industry certifications including ISC2 Certified in Cybersecurity and HCIA-Security from Huawei, I am skilled in securing networks, analyzing vulnerabilities, and applying best practices to reduce risk. Passionate about defending digital systems and continuously improving security strategies in fast-paced environments."}),z.jsxs("div",{className:"contact-info",children:[z.jsxs("div",{className:"contact-item",children:[z.jsx("strong",{children:"Email:"})," wmostafa021@gmail.com"]}),z.jsxs("div",{className:"contact-item",children:[z.jsx("strong",{children:"Phone:"})," +20 1155566675"]}),z.jsxs("div",{className:"contact-item",children:[z.jsx("strong",{children:"Location:"})," Sheikh Zayed, GZ 41516, Egypt"]})]})]}),z.jsxs("div",{className:"about-cards-wrap",children:[z.jsx("h3",{children:"Technical Skills"}),z.jsx("div",{className:"cards-row",children:GR.map((f,d)=>z.jsx("div",{className:"skill-card",children:f},d))}),z.jsx("h3",{children:"Languages"}),z.jsx("div",{className:"cards-row",children:VR.map((f,d)=>z.jsx("div",{className:"language-card",children:f},d))})]})]})]}),z.jsxs("section",{id:"experience",className:"section",children:[z.jsx("h2",{children:"Work Experience"}),z.jsxs("div",{className:"timeline",children:[z.jsxs("div",{className:"timeline-item",children:[z.jsx("div",{className:"timeline-dot"}),z.jsxs("div",{className:"timeline-content",children:[z.jsx("h3",{children:"IT Specialist"}),z.jsxs("div",{className:"job-info",children:[z.jsx("span",{className:"company",children:"Galala University"}),z.jsx("span",{className:"timeline-date",children:"July 2025 – Present"})]}),z.jsxs("ul",{children:[z.jsx("li",{children:"Ensured uninterrupted technical support for prospective university students during the admissions process, effectively resolving technical issues."}),z.jsx("li",{children:"Managed and optimized Odoo accounts, consistently delivering timely and effective email-based IT support."}),z.jsx("li",{children:"Actively participated in the meticulous setup and ongoing maintenance of university laboratories and other critical IT infrastructure projects."}),z.jsx("li",{children:"Gained practical experience working with Cisco DNA for advanced network management, Forcepoint Next-Gen Firewall, and F5 systems."})]})]})]}),z.jsxs("div",{className:"timeline-item",children:[z.jsx("div",{className:"timeline-dot"}),z.jsxs("div",{className:"timeline-content",children:[z.jsx("h3",{children:"Internship Trainee"}),z.jsxs("div",{className:"job-info",children:[z.jsx("span",{className:"company",children:"CIB Egypt"}),z.jsx("span",{className:"timeline-date",children:"August 2025 – September 2025"})]}),z.jsxs("ul",{children:[z.jsx("li",{children:"Successfully completed the CIB Summer Internship Program."}),z.jsx("li",{children:"Gained valuable exposure to banking sector operations and enterprise technology environments."}),z.jsx("li",{children:"Collaborated with professionals to understand business processes and security protocols."})]})]})]}),z.jsxs("div",{className:"timeline-item",children:[z.jsx("div",{className:"timeline-dot"}),z.jsxs("div",{className:"timeline-content",children:[z.jsx("h3",{children:"SOC Analyst"}),z.jsxs("div",{className:"job-info",children:[z.jsx("span",{className:"company",children:"WE INNOVATE"}),z.jsx("span",{className:"timeline-date",children:"July – September 2025"})]}),z.jsxs("ul",{children:[z.jsx("li",{children:"Engaged in core SOC Operations, including monitoring, analyzing, and responding to security incidents"}),z.jsx("li",{children:"Applied principles of SOC Engineering to optimize security tools and processes"}),z.jsx("li",{children:"Contributed to strengthening Network Security defenses and configurations"}),z.jsx("li",{children:"Participated in Incident Response activities, from initial detection to resolution"}),z.jsx("li",{children:"Utilized Threat Intelligence to identify emerging threats and vulnerabilities"}),z.jsx("li",{children:"Explored and implemented concepts of Automation, SOAR (Security Orchestration, Automation, and Response), OSINT (Open Source Intelligence), and other advanced security methodologies"})]})]})]}),z.jsxs("div",{className:"timeline-item",children:[z.jsx("div",{className:"timeline-dot"}),z.jsxs("div",{className:"timeline-content",children:[z.jsx("h3",{children:"Cybersecurity Intern"}),z.jsxs("div",{className:"job-info",children:[z.jsx("span",{className:"company",children:"Telecom Egypt"}),z.jsx("span",{className:"timeline-date",children:"August 2024 – September 2024"})]}),z.jsxs("ul",{children:[z.jsx("li",{children:"Acquired practical experience with Security Information and Event Management (SIEM) technology and other log monitoring software, specifically QRadar"}),z.jsx("li",{children:"Explored various penetration testing tools and methodologies, attempting diverse attack simulations"}),z.jsx("li",{children:"Gained foundational knowledge in Cyber Threat Intelligence (CTI), Telecom security, Network security, Governance, Risk, and Compliance (GRC), and audit team functions"})]})]})]}),z.jsxs("div",{className:"timeline-item",children:[z.jsx("div",{className:"timeline-dot"}),z.jsxs("div",{className:"timeline-content",children:[z.jsx("h3",{children:"Researcher"}),z.jsxs("div",{className:"job-info",children:[z.jsx("span",{className:"company",children:"ASTF"}),z.jsx("span",{className:"timeline-date",children:"May 2020 – June 2020"})]}),z.jsxs("ul",{children:[z.jsx("li",{children:"Collected and curated comprehensive data on technology companies identified as potential sponsors for technology conferences"}),z.jsx("li",{children:"Prepared detailed documentation for all gathered data, ensuring accuracy and accessibility"})]})]})]})]})]}),z.jsxs("section",{id:"projects",className:"section",children:[z.jsx("h2",{children:"Projects"}),z.jsx("div",{className:"projects-grid",children:P0.map((f,d)=>z.jsxs(Bo,{to:`/project/${f.id}`,className:"project-card",children:[f.image&&z.jsx("div",{className:"project-img-container",children:z.jsx("img",{src:f.image,alt:f.title,className:"project-img"})}),z.jsxs("div",{className:"project-card-content",children:[z.jsx("h3",{children:f.title}),z.jsx("p",{children:f.desc}),z.jsx("div",{className:"project-tech",children:f.tech.map((m,p)=>z.jsx("span",{className:"tech-tag",children:m},p))})]})]},d))})]}),z.jsxs("section",{id:"education",className:"section",children:[z.jsx("h2",{children:"Education"}),z.jsx("div",{className:"education-content",children:z.jsxs("div",{className:"card",children:[z.jsx("h3",{children:"Bachelor of Computer Engineering: CyberSecurity"}),z.jsxs("div",{className:"edu-info",children:[z.jsx("span",{className:"university",children:"Galala University, Galala, Egypt"}),z.jsx("span",{className:"date",children:"September 2022 – Expected July 2027"})]}),z.jsx("div",{className:"gpa",children:z.jsx("strong",{children:"Current GPA: 3.75"})}),z.jsx("p",{children:"Pursuing comprehensive education in cybersecurity engineering with focus on threat detection, network security, incident response, and digital forensics. Active involvement in research projects and practical applications of cybersecurity principles."})]})})]}),z.jsxs("section",{id:"certifications",className:"section",children:[z.jsx("h2",{children:"Certifications"}),z.jsx("div",{className:"certifications-grid",children:kR.map((f,d)=>z.jsxs("div",{className:"cert-card",children:[z.jsx("h4",{children:f.name}),z.jsx("span",{className:"cert-provider",children:f.provider}),z.jsx("span",{className:"cert-date",children:f.date})]},d))})]}),z.jsxs("section",{id:"achievements",className:"section",children:[z.jsx("h2",{children:"Achievements"}),z.jsxs("div",{className:"achievements-list",children:[z.jsxs("div",{className:"achievement-card",children:[z.jsx("div",{className:"achievement-icon",children:"🏆"}),z.jsxs("div",{className:"achievement-content",children:[z.jsx("h4",{children:"Top 2 Ranking - Cyber and Informatics Security"}),z.jsx("p",{children:"Achieved Top 2 ranking in the Cyber and Informatics Security track at the Ebda3 13 Festival 2025"})]})]}),z.jsxs("div",{className:"achievement-card",children:[z.jsx("div",{className:"achievement-icon",children:"📚"}),z.jsxs("div",{className:"achievement-content",children:[z.jsx("h4",{children:"Published Research Paper"}),z.jsx("p",{children:'Co-authored "Spectral Collocation Algorithm for the Fractional Bratu Equation via Hexic Shifted Chebyshev Polynomials" with four collaborators'})]})]})]})]}),z.jsxs("section",{id:"activities",className:"section",children:[z.jsx("h2",{children:"Extracurricular Activities"}),z.jsxs("div",{className:"activities-grid",children:[z.jsxs("div",{className:"activity-card",children:[z.jsx("h4",{children:"President of Astra Cybersecurity Club"}),z.jsx("span",{className:"activity-date",children:"2024 - Present"}),z.jsxs("ul",{children:[z.jsx("li",{children:"Led and mentored a team of 7 members, overseeing cybersecurity workshops and events"}),z.jsx("li",{children:"Developed educational content on network security, ethical hacking, and incident response"}),z.jsx("li",{children:"Organizing cybersecurity conferences at Galala University with other security clubs"})]})]}),z.jsxs("div",{className:"activity-card",children:[z.jsx("h4",{children:"Member of IEEE Club"}),z.jsx("span",{className:"activity-date",children:"2022 - Present"}),z.jsxs("ul",{children:[z.jsx("li",{children:"Attended and participated in various tech events hosted at different universities"}),z.jsx("li",{children:"Engaged with technology professionals and expanded technical knowledge"})]})]}),z.jsxs("div",{className:"activity-card",children:[z.jsx("h4",{children:"Volunteer at ASTF"}),z.jsx("span",{className:"activity-date",children:"May 2017 - May 2020"}),z.jsxs("ul",{children:[z.jsx("li",{children:"Helped organize various innovation conferences with smooth execution"}),z.jsx("li",{children:"Contributed to impactful outcomes in technology and innovation events"})]})]}),z.jsxs("div",{className:"activity-card",children:[z.jsx("h4",{children:"ICT 2024 Participant"}),z.jsx("span",{className:"activity-date",children:"2024"}),z.jsxs("ul",{children:[z.jsx("li",{children:"Attended security talks by leading experts from top security companies"}),z.jsx("li",{children:"Engaged in discussions on emerging cybersecurity technologies"})]})]})]})]}),z.jsxs("section",{id:"articles",className:"section",children:[z.jsx("h2",{children:"Articles"}),z.jsx("div",{className:"articles-grid",children:HR.map((f,d)=>z.jsxs("a",{className:"article-card",href:f.link,target:"_blank",rel:"noopener noreferrer",children:[f.img&&z.jsx("img",{className:"article-img",src:f.img,alt:f.title}),z.jsx("div",{className:"article-title",children:f.title}),z.jsx("div",{className:"article-desc",children:f.desc})]},d))})]}),z.jsxs("section",{id:"contact",className:"section",children:[z.jsx("h2",{children:"Contact Me"}),z.jsxs("div",{className:"contact-content",children:[z.jsx("p",{children:"Looking for opportunities in Cybersecurity and Network Management. Let's connect and discuss how I can contribute to your organization's security posture."}),z.jsxs("div",{className:"contact-buttons",children:[z.jsx("a",{href:"mailto:wmostafa021@gmail.com",className:"button contact-purple",children:"Email Me"}),z.jsx("a",{href:"https://www.linkedin.com/in/mostafa-elsaeed-eg/",target:"_blank",rel:"noopener noreferrer",className:"button contact-white",children:"LinkedIn"}),z.jsx("a",{href:"tel:+201155566675",className:"button contact-purple",children:"Call Me"})]})]})]})]})}function WR(){const{id:s}=NS(),e=P0.find(i=>i.id===s);return he.useEffect(()=>{window.scrollTo(0,0)},[]),e?z.jsxs("div",{className:"app project-detail-page",children:[z.jsx("div",{className:"background",children:z.jsx(O0,{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:20,cursorSize:100,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6})}),z.jsxs("div",{className:"content-wrapper",style:{position:"relative",zIndex:10},children:[z.jsx("header",{className:"navbar",children:z.jsx(Bo,{to:"/",className:"button secondary",children:"← Back to Home"})}),z.jsxs("section",{className:"section project-detail-header",children:[z.jsx("h1",{children:e.title}),z.jsx("p",{className:"project-subtitle box",children:e.desc}),z.jsx("div",{className:"project-tech-stack",children:e.tech.map((i,r)=>z.jsx("span",{className:"tech-tag",children:i},r))})]}),z.jsxs("section",{className:"section project-content",children:[z.jsx("div",{className:"project-video-container",children:e.videoUrl?z.jsx("iframe",{width:"100%",height:"500",src:e.videoUrl,title:e.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:"project-video-frame"}):e.image&&z.jsx("img",{src:e.image,alt:e.title,className:"project-detail-hero-img"})}),!e.videoUrl&&e.screenshots&&e.screenshots.length>0&&z.jsxs("div",{className:"project-screenshot-gallery",children:[z.jsx("h3",{children:"Screenshots"}),z.jsx("div",{className:"screenshot-grid",children:e.screenshots.map((i,r)=>z.jsxs("figure",{className:"screenshot-figure",children:[z.jsx("img",{src:i.src,alt:i.caption,className:"screenshot-img"}),z.jsx("figcaption",{children:i.caption})]},r))})]}),z.jsxs("div",{className:"project-info-grid",children:[z.jsxs("div",{className:"project-description",children:[z.jsx("h3",{children:"About the Project"}),z.jsx("p",{children:e.longDescription||e.desc})]}),z.jsxs("div",{className:"project-features",children:[z.jsx("h3",{children:"Key Features"}),e.features&&e.features.length>0?z.jsx("ul",{children:e.features.map((i,r)=>z.jsx("li",{children:i},r))}):z.jsx("p",{children:"No specific features listed."})]})]}),z.jsxs("div",{className:"project-actions",style:{gap:"15px"},children:[e.link&&e.link!=="#"&&z.jsx("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"button contact-purple",children:"View Live Demo"}),e.githubLink&&z.jsx("a",{href:e.githubLink,target:"_blank",rel:"noopener noreferrer",className:"button contact-white",children:"View on GitHub"}),e.docUrl&&z.jsx("a",{href:e.docUrl,download:!0,className:"button contact-white",children:"📄 Download Docs"})]})]})]})]}):z.jsxs("div",{className:"project-detail-error",children:[z.jsx("h2",{children:"Project not found"}),z.jsx(Bo,{to:"/",className:"button",children:"Back to Home"})]})}function jR(){return z.jsxs(YS,{children:[z.jsx(Gh,{path:"/",element:z.jsx(XR,{})}),z.jsx(Gh,{path:"/project/:id",element:z.jsx(WR,{})})]})}Zy.createRoot(document.getElementById("root")).render(z.jsx(Vy.StrictMode,{children:z.jsx(_M,{children:z.jsx(jR,{})})}));
