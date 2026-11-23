var k1=Object.create;var W0=Object.defineProperty;var z1=Object.getOwnPropertyDescriptor;var H1=Object.getOwnPropertyNames;var G1=Object.getPrototypeOf,V1=Object.prototype.hasOwnProperty;var ke=(t,e,a)=>()=>{if(a)throw a[0];try{return t&&(e=t(t=0)),e}catch(n){throw a=[n],n}};var wi=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(a){throw e=0,a}};var q1=(t,e,a,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of H1(e))!V1.call(t,i)&&i!==a&&W0(t,i,{get:()=>e[i],enumerable:!(n=z1(e,i))||n.enumerable});return t};var Vr=(t,e,a)=>(a=t!=null?k1(G1(t)):{},q1(e||!t||!t.__esModule?W0(a,"default",{value:t,enumerable:!0}):a,t));var iv=wi(Xe=>{"use strict";var yp=Symbol.for("react.transitional.element"),W1=Symbol.for("react.portal"),X1=Symbol.for("react.fragment"),Y1=Symbol.for("react.strict_mode"),Z1=Symbol.for("react.profiler"),K1=Symbol.for("react.consumer"),J1=Symbol.for("react.context"),Q1=Symbol.for("react.forward_ref"),j1=Symbol.for("react.suspense"),$1=Symbol.for("react.memo"),J0=Symbol.for("react.lazy"),eA=Symbol.for("react.activity"),tA=Symbol.for("react.view_transition"),X0=Symbol.iterator;function aA(t){return t===null||typeof t!="object"?null:(t=X0&&t[X0]||t["@@iterator"],typeof t=="function"?t:null)}var Q0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j0=Object.assign,$0={};function Wr(t,e,a){this.props=t,this.context=e,this.refs=$0,this.updater=a||Q0}Wr.prototype.isReactComponent={};Wr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Wr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ev(){}ev.prototype=Wr.prototype;function _p(t,e,a){this.props=t,this.context=e,this.refs=$0,this.updater=a||Q0}var bp=_p.prototype=new ev;bp.constructor=_p;j0(bp,Wr.prototype);bp.isPureReactComponent=!0;var Y0=Array.isArray;function Sp(){}var Rt={H:null,A:null,T:null,S:null},tv=Object.prototype.hasOwnProperty;function Mp(t,e,a){var n=a.ref;return{$$typeof:yp,type:t,key:e,ref:n!==void 0?n:null,props:a}}function nA(t,e){return Mp(t.type,e,t.props)}function Lp(t){return typeof t=="object"&&t!==null&&t.$$typeof===yp}function iA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var Z0=/\/+/g;function vp(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iA(""+t.key):e.toString(36)}function sA(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Sp,Sp):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function qr(t,e,a,n,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var r=!1;if(t===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(t.$$typeof){case yp:case W1:r=!0;break;case J0:return r=t._init,qr(r(t._payload),e,a,n,i)}}if(r)return i=i(t),r=n===""?"."+vp(t,0):n,Y0(i)?(a="",r!=null&&(a=r.replace(Z0,"$&/")+"/"),qr(i,e,a,"",function(u){return u})):i!=null&&(Lp(i)&&(i=nA(i,a+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(Z0,"$&/")+"/")+r)),e.push(i)),1;r=0;var o=n===""?".":n+":";if(Y0(t))for(var l=0;l<t.length;l++)n=t[l],s=o+vp(n,l),r+=qr(n,e,a,s,i);else if(l=aA(t),typeof l=="function")for(t=l.call(t),l=0;!(n=t.next()).done;)n=n.value,s=o+vp(n,l++),r+=qr(n,e,a,s,i);else if(s==="object"){if(typeof t.then=="function")return qr(sA(t),e,a,n,i);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return r}function Oc(t,e,a){if(t==null)return t;var n=[],i=0;return qr(t,n,"","",function(s){return e.call(a,s,i++)}),n}function rA(t){if(t._status===-1){var e=t._result,a=e();a.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n,a.status===void 0&&(a.status="fulfilled",a.value=n))},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n,a.status===void 0&&(a.status="rejected",a.reason=n))}),t._status===-1&&(t._status=0,t._result=a)}if(t._status===1)return t._result.default;throw t._result}var K0=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function av(t){var e=Rt.T,a={};a.types=e!==null?e.types:null,Rt.T=a;try{var n=t(),i=Rt.S;i!==null&&i(a,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(Sp,K0)}catch(s){K0(s)}finally{e!==null&&a.types!==null&&(e.types=a.types),Rt.T=e}}function nv(t){var e=Rt.T;if(e!==null){var a=e.types;a===null?e.types=[t]:a.indexOf(t)===-1&&a.push(t)}else av(nv.bind(null,t))}var oA={map:Oc,forEach:function(t,e,a){Oc(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return Oc(t,function(){e++}),e},toArray:function(t){return Oc(t,function(e){return e})||[]},only:function(t){if(!Lp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Activity=eA;Xe.Children=oA;Xe.Component=Wr;Xe.Fragment=X1;Xe.Profiler=Z1;Xe.PureComponent=_p;Xe.StrictMode=Y1;Xe.Suspense=j1;Xe.ViewTransition=tA;Xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Rt;Xe.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Rt.H.useMemoCache(t)}};Xe.addTransitionType=nv;Xe.cache=function(t){return function(){return t.apply(null,arguments)}};Xe.cacheSignal=function(){return null};Xe.cloneElement=function(t,e,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var n=j0({},t.props),i=t.key;if(e!=null)for(s in e.key!==void 0&&(i=""+e.key),e)!tv.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(n[s]=e[s]);var s=arguments.length-2;if(s===1)n.children=a;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];n.children=r}return Mp(t.type,i,n)};Xe.createContext=function(t){return t={$$typeof:J1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:K1,_context:t},t};Xe.createElement=function(t,e,a){var n,i={},s=null;if(e!=null)for(n in e.key!==void 0&&(s=""+e.key),e)tv.call(e,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(i[n]=e[n]);var r=arguments.length-2;if(r===1)i.children=a;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];i.children=o}if(t&&t.defaultProps)for(n in r=t.defaultProps,r)i[n]===void 0&&(i[n]=r[n]);return Mp(t,s,i)};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:Q1,render:t}};Xe.isValidElement=Lp;Xe.lazy=function(t){return{$$typeof:J0,_payload:{_status:-1,_result:t},_init:rA}};Xe.memo=function(t,e){return{$$typeof:$1,type:t,compare:e===void 0?null:e}};Xe.startTransition=av;Xe.unstable_useCacheRefresh=function(){return Rt.H.useCacheRefresh()};Xe.use=function(t){return Rt.H.use(t)};Xe.useActionState=function(t,e,a){return Rt.H.useActionState(t,e,a)};Xe.useCallback=function(t,e){return Rt.H.useCallback(t,e)};Xe.useContext=function(t){return Rt.H.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t,e){return Rt.H.useDeferredValue(t,e)};Xe.useEffect=function(t,e){return Rt.H.useEffect(t,e)};Xe.useEffectEvent=function(t){return Rt.H.useEffectEvent(t)};Xe.useId=function(){return Rt.H.useId()};Xe.useImperativeHandle=function(t,e,a){return Rt.H.useImperativeHandle(t,e,a)};Xe.useInsertionEffect=function(t,e){return Rt.H.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return Rt.H.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return Rt.H.useMemo(t,e)};Xe.useOptimistic=function(t,e){return Rt.H.useOptimistic(t,e)};Xe.useReducer=function(t,e,a){return Rt.H.useReducer(t,e,a)};Xe.useRef=function(t){return Rt.H.useRef(t)};Xe.useState=function(t){return Rt.H.useState(t)};Xe.useSyncExternalStore=function(t,e,a){return Rt.H.useSyncExternalStore(t,e,a)};Xe.useTransition=function(){return Rt.H.useTransition()};Xe.version="19.3.1"});var is=wi((WD,sv)=>{"use strict";sv.exports=iv()});var mv=wi(Ft=>{"use strict";function Tp(t,e){var a=t.length;t.push(e);e:for(;0<a;){var n=a-1>>>1,i=t[n];if(0<Bc(i,e))t[n]=e,t[a]=i,a=n;else break e}}function $n(t){return t.length===0?null:t[0]}function kc(t){if(t.length===0)return null;var e=t[0],a=t.pop();if(a!==e){t[0]=a;e:for(var n=0,i=t.length,s=i>>>1;n<s;){var r=2*(n+1)-1,o=t[r],l=r+1,u=t[l];if(0>Bc(o,a))l<i&&0>Bc(u,o)?(t[n]=u,t[l]=a,n=l):(t[n]=o,t[r]=a,n=r);else if(l<i&&0>Bc(u,a))t[n]=u,t[l]=a,n=l;else break e}}return e}function Bc(t,e){var a=t.sortIndex-e.sortIndex;return a!==0?a:t.id-e.id}Ft.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(rv=performance,Ft.unstable_now=function(){return rv.now()}):(Cp=Date,ov=Cp.now(),Ft.unstable_now=function(){return Cp.now()-ov});var rv,Cp,ov,Ti=[],ss=[],lA=1,Ln=null,Na=3,Ip=!1,bl=!1,Ml=!1,Ep=!1,cv=typeof setTimeout=="function"?setTimeout:null,dv=typeof clearTimeout=="function"?clearTimeout:null,lv=typeof setImmediate<"u"?setImmediate:null;function Fc(t){for(var e=$n(ss);e!==null;){if(e.callback===null)kc(ss);else if(e.startTime<=t)kc(ss),e.sortIndex=e.expirationTime,Tp(Ti,e);else break;e=$n(ss)}}function Rp(t){if(Ml=!1,Fc(t),!bl)if($n(Ti)!==null)bl=!0,Yr||(Yr=!0,Xr());else{var e=$n(ss);e!==null&&Dp(Rp,e.startTime-t)}}var Yr=!1,Ll=-1,fv=5,hv=-1;function pv(){return Ep?!0:!(Ft.unstable_now()-hv<fv)}function Ap(){if(Ep=!1,Yr){var t=Ft.unstable_now();hv=t;var e=!0;try{e:{bl=!1,Ml&&(Ml=!1,dv(Ll),Ll=-1),Ip=!0;var a=Na;try{t:{for(Fc(t),Ln=$n(Ti);Ln!==null&&!(Ln.expirationTime>t&&pv());){var n=Ln.callback;if(typeof n=="function"){Ln.callback=null,Na=Ln.priorityLevel;var i=n(Ln.expirationTime<=t);if(t=Ft.unstable_now(),typeof i=="function"){Ln.callback=i,Fc(t),e=!0;break t}Ln===$n(Ti)&&kc(Ti),Fc(t)}else kc(Ti);Ln=$n(Ti)}if(Ln!==null)e=!0;else{var s=$n(ss);s!==null&&Dp(Rp,s.startTime-t),e=!1}}break e}finally{Ln=null,Na=a,Ip=!1}e=void 0}}finally{e?Xr():Yr=!1}}}var Xr;typeof lv=="function"?Xr=function(){lv(Ap)}:typeof MessageChannel<"u"?(wp=new MessageChannel,uv=wp.port2,wp.port1.onmessage=Ap,Xr=function(){uv.postMessage(null)}):Xr=function(){cv(Ap,0)};var wp,uv;function Dp(t,e){Ll=cv(function(){t(Ft.unstable_now())},e)}Ft.unstable_IdlePriority=5;Ft.unstable_ImmediatePriority=1;Ft.unstable_LowPriority=4;Ft.unstable_NormalPriority=3;Ft.unstable_Profiling=null;Ft.unstable_UserBlockingPriority=2;Ft.unstable_cancelCallback=function(t){t.callback=null};Ft.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):fv=0<t?Math.floor(1e3/t):5};Ft.unstable_getCurrentPriorityLevel=function(){return Na};Ft.unstable_next=function(t){switch(Na){case 1:case 2:case 3:var e=3;break;default:e=Na}var a=Na;Na=e;try{return t()}finally{Na=a}};Ft.unstable_requestPaint=function(){Ep=!0};Ft.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var a=Na;Na=t;try{return e()}finally{Na=a}};Ft.unstable_scheduleCallback=function(t,e,a){var n=Ft.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?n+a:n):a=n,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=a+i,t={id:lA++,callback:e,priorityLevel:t,startTime:a,expirationTime:i,sortIndex:-1},a>n?(t.sortIndex=a,Tp(ss,t),$n(Ti)===null&&t===$n(ss)&&(Ml?(dv(Ll),Ll=-1):Ml=!0,Dp(Rp,a-n))):(t.sortIndex=i,Tp(Ti,t),bl||Ip||(bl=!0,Yr||(Yr=!0,Xr()))),t};Ft.unstable_shouldYield=pv;Ft.unstable_wrapCallback=function(t){var e=Na;return function(){var a=Na;Na=e;try{return t.apply(this,arguments)}finally{Na=a}}}});var xv=wi((YD,gv)=>{"use strict";gv.exports=mv()});var yv=wi(Pa=>{"use strict";var uA=is();function Sv(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function rs(){}var za={d:{f:rs,r:function(){throw Error(Sv(522))},D:rs,C:rs,L:rs,m:rs,X:rs,S:rs,M:rs},p:0,findDOMNode:null},cA=Symbol.for("react.portal"),dA=Symbol.for("react.recoverable"),vv=Symbol.for("react.optimistic_key");function fA(t,e,a){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cA,key:n==null?null:n===vv?vv:""+n,children:t,containerInfo:e,implementation:a}}var Cl=uA.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function zc(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Pa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=za;Pa.browser=function(t){return{$$typeof:dA,_reason:t}};Pa.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Sv(299));return fA(t,e,null,a)};Pa.flushSync=function(t){var e=Cl.T,a=za.p;try{if(Cl.T=null,za.p=2,t)return t()}finally{Cl.T=e,za.p=a,za.d.f()}};Pa.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,za.d.C(t,e))};Pa.prefetchDNS=function(t){typeof t=="string"&&za.d.D(t)};Pa.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var a=e.as,n=zc(a,e.crossOrigin),i=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;a==="style"?za.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:n,integrity:i,fetchPriority:s}):a==="script"&&za.d.X(t,{crossOrigin:n,integrity:i,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Pa.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var a=zc(e.as,e.crossOrigin);za.d.M(t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}}else e==null&&za.d.M(t)};Pa.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var a=e.as,n=zc(a,e.crossOrigin);za.d.L(t,a,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Pa.preloadModule=function(t,e){if(typeof t=="string")if(e){var a=zc(e.as,e.crossOrigin);za.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}else za.d.m(t)};Pa.requestFormReset=function(t){za.d.r(t)};Pa.unstable_batchedUpdates=function(t,e){return t(e)};Pa.useFormState=function(t,e,a){return Cl.H.useFormState(t,e,a)};Pa.useFormStatus=function(){return Cl.H.useHostTransitionStatus()};Pa.version="19.3.1"});var Mv=wi((KD,bv)=>{"use strict";function _v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_v)}catch(t){console.error(t)}}_v(),bv.exports=yv()});var uM=wi(bf=>{"use strict";var ua=xv(),ly=is(),hA=Mv();function ee(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function uy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fu(t){for(var e=t,a=e;a&&!a.alternate;)e=a,(e.flags&4098)!==0&&(t=e.return),a=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function cy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dy(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Lv(t){if(fu(t)!==t)throw Error(ee(188))}function pA(t){var e=t.alternate;if(!e){if(e=fu(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var a=t,n=e;;){var i=a.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===a)return Lv(i),t;if(s===n)return Lv(i),e;s=s.sibling}throw Error(ee(188))}if(a.return!==n.return)a=i,n=s;else{for(var r=!1,o=i.child;o;){if(o===a){r=!0,a=i,n=s;break}if(o===n){r=!0,n=i,a=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===a){r=!0,a=s,n=i;break}if(o===n){r=!0,n=s,a=i;break}o=o.sibling}if(!r)throw Error(ee(189))}}if(a.alternate!==n)throw Error(ee(190))}if(a.tag!==3)throw Error(ee(188));return a.stateNode.current===a?t:e}function fy(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=fy(t),e!==null)return e;t=t.sibling}return null}function an(t,e,a,n,i,s){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,n,i,s)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&an(t.child,e,a,n,i,s))return!0;t=t.sibling}return!1}function Mr(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function Cv(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function hy(t){var e=[null,null],a=Mr(t);return a===null||py(e,t,a.child,{foundSelf:!1}),e}function py(t,e,a,n){for(;a!==null;){if(a===e)n.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(n.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&py(t,e,a.child,n))return!0;a=a.sibling}return!1}function la(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(ee(559))}}var eo=null,cm=null;function mA(t,e,a){return t===a?!0:t===e?(eo=t,!0):!1}function gA(t,e,a){return t===a?(cm=t,!1):t===e?(cm!==null&&(eo=t),!0):!1}function Av(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function dm(t,e,a){for(var n=0,i=t;i;i=a(i))n++;i=0;for(var s=e;s;s=a(s))i++;for(;0<n-i;)t=a(t),n--;for(;0<i-n;)e=a(e),i--;for(;n--;){if(t===e||e!==null&&t===e.alternate)return t;t=a(t),e=a(e)}return null}var It=Object.assign,xA=Symbol.for("react.element"),Hc=Symbol.for("react.transitional.element"),Dl=Symbol.for("react.portal"),to=Symbol.for("react.fragment"),my=Symbol.for("react.strict_mode"),fm=Symbol.for("react.profiler"),gy=Symbol.for("react.consumer"),si=Symbol.for("react.context"),_g=Symbol.for("react.forward_ref"),hm=Symbol.for("react.suspense"),pm=Symbol.for("react.suspense_list"),bg=Symbol.for("react.memo"),cs=Symbol.for("react.lazy"),mm=Symbol.for("react.activity"),vA=Symbol.for("react.legacy_hidden"),SA=Symbol.for("react.memo_cache_sentinel"),gm=Symbol.for("react.view_transition"),yA=Symbol.for("react.recoverable"),wv=Symbol.iterator;function Al(t){return t===null||typeof t!="object"?null:(t=wv&&t[wv]||t["@@iterator"],typeof t=="function"?t:null)}var _A=Symbol.for("react.client.reference");function xm(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===_A?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case to:return"Fragment";case fm:return"Profiler";case my:return"StrictMode";case hm:return"Suspense";case pm:return"SuspenseList";case mm:return"Activity";case gm:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case Dl:return"Portal";case si:return t.displayName||"Context";case gy:return(t._context.displayName||"Context")+".Consumer";case _g:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bg:return e=t.displayName||null,e!==null?e:xm(t.type)||"Memo";case cs:e=t._payload,t=t._init;try{return xm(t(e))}catch{}}return null}var Nl=Array.isArray,ze=ly.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,vt=hA.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,cr={pending:!1,data:null,method:null,action:null},vm=[],ao=-1;function fi(t){return{current:t}}function Aa(t){0>ao||(t.current=vm[ao],vm[ao]=null,ao--)}function Pt(t,e){ao++,vm[ao]=t.current,t.current=e}var ui=fi(null),Jl=fi(null),Ss=fi(null),wd=fi(null);function Td(t,e){switch(Pt(Ss,e),Pt(Jl,t),Pt(ui,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?HS(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=HS(e),t=Fb(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Aa(ui),Pt(ui,t)}function Mo(){Aa(ui),Aa(Jl),Aa(Ss)}function Sm(t){var e=t.memoizedState;e!==null&&(No._currentValue=e.memoizedState,Pt(wd,t)),e=ui.current;var a=Fb(e,t.type);e!==a&&(Pt(Jl,t),Pt(ui,a))}function Id(t){Jl.current===t&&(Aa(ui),Aa(Jl)),wd.current===t&&(Aa(wd),No._currentValue=cr)}var Np,Tv;function ls(t){if(Np===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Np=e&&e[1]||"",Tv=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Np+t+Tv}var Pp=!1;function Up(t,e){if(!t||Pp)return"";Pp=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(S){var c=S}Reflect.construct(t,[],p)}else{try{p.call()}catch(S){c=S}p=!1;try{var h=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new t}finally{p&&(h!==void 0?Object.defineProperty(t.prototype,"props",h):delete t.prototype.props)}}}else{try{throw Error()}catch(S){c=S}(p=t())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(S){if(S&&c&&typeof S.stack=="string")return[S.stack,c.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),u=o.split(`
`);for(i=n=0;n<l.length&&!l[n].includes("DetermineComponentFrameRoot");)n++;for(;i<u.length&&!u[i].includes("DetermineComponentFrameRoot");)i++;if(n===l.length||i===u.length)for(n=l.length-1,i=u.length-1;1<=n&&0<=i&&l[n]!==u[i];)i--;for(;1<=n&&0<=i;n--,i--)if(l[n]!==u[i]){if(n!==1||i!==1)do if(n--,i--,0>i||l[n]!==u[i]){var f=`
`+l[n].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=n&&0<=i);break}}}finally{Pp=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ls(a):""}function bA(t,e){switch(t.tag){case 26:case 27:case 5:return ls(t.type);case 16:return ls("Lazy");case 13:return t.child!==e&&e!==null?ls("Suspense Fallback"):ls("Suspense");case 19:return ls("SuspenseList");case 0:case 15:return Up(t.type,!1);case 11:return Up(t.type.render,!1);case 1:return Up(t.type,!0);case 31:return ls("Activity");case 30:return ls("ViewTransition");default:return""}}function Iv(t){try{var e="",a=null;do e+=bA(t,a),a=t,t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var ym=Object.prototype.hasOwnProperty,Mg=ua.unstable_scheduleCallback,Op=ua.unstable_cancelCallback,MA=ua.unstable_shouldYield,LA=ua.unstable_requestPaint,fn=ua.unstable_now,CA=ua.unstable_getCurrentPriorityLevel,xy=ua.unstable_ImmediatePriority,vy=ua.unstable_UserBlockingPriority,Ed=ua.unstable_NormalPriority,AA=ua.unstable_LowPriority,Sy=ua.unstable_IdlePriority,wA=ua.log,TA=ua.unstable_setDisableYieldValue,hu=null,hn=null;function hs(t){if(typeof wA=="function"&&TA(t),hn&&typeof hn.setStrictMode=="function")try{hn.setStrictMode(hu,t)}catch{}}var pn=Math.clz32?Math.clz32:RA,IA=Math.log,EA=Math.LN2;function RA(t){return t>>>=0,t===0?32:31-(IA(t)/EA|0)|0}var Gc=256,Vc=262144,qc=4194304;function sr(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function af(t,e,a){var n=t.pendingLanes;if(n===0)return 0;var i=0,s=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=n&134217727;return o!==0?(n=o&~s,n!==0?i=sr(n):(r&=o,r!==0?i=sr(r):a||(a=o&~t,a!==0&&(i=sr(a))))):(o=n&~s,o!==0?i=sr(o):r!==0?i=sr(r):a||(a=n&~t,a!==0&&(i=sr(a)))),i===0?0:e!==0&&e!==i&&(e&s)===0&&(s=i&-i,a=e&-e,s>=a||s===32&&(a&4194048)!==0)?e:i}function pu(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function yy(t,e){(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var n=31-pn(a),i=1<<n;e|=t[n],a&=~i}return e}function DA(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _y(){var t=qc;return qc<<=1,(qc&62914560)===0&&(qc=4194304),t}function Bp(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function mu(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function NA(t,e,a,n,i,s){var r=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,u=t.hiddenUpdates;for(a=r&~a;0<a;){var f=31-pn(a),p=1<<f;o[f]=0,l[f]=-1;var c=u[f];if(c!==null)for(u[f]=null,f=0;f<c.length;f++){var h=c[f];h!==null&&(h.lane&=-536870913)}a&=~p}n!==0&&by(t,n,0),s!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=s&~(r&~e))}function by(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-pn(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|a&261930}function My(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var n=31-pn(a),i=1<<n;i&e|t[n]&e&&(t[n]|=e),a&=~i}}function Ly(t,e){var a=e&-e;return a=(a&42)!==0?1:Lg(a),(a&(t.suspendedLanes|e))!==0?0:a}function Lg(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Cg(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Cy(){var t=vt.p;return t!==0?t:(t=window.event,t===void 0?32:rM(t.type))}function Ev(t,e){var a=vt.p;try{return vt.p=t,e()}finally{vt.p=a}}var Hi=Math.random().toString(36).slice(2),La="__reactFiber$"+Hi,nn="__reactProps$"+Hi,Oo="__reactContainer$"+Hi,Rv="__reactEvents$"+Hi,PA="__reactListeners$"+Hi,UA="__reactHandles$"+Hi,Dv="__reactResources$"+Hi,gu="__reactMarker$"+Hi,Rd="__reactLoad$"+Hi;function nf(t){delete t[La],delete t[nn],delete t[PA],delete t[UA]}function lr(t){var e;if(e=t[La])return e;for(var a=t.parentNode;a;){if(e=a[Oo]||a[La]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=KS(t);t!==null;){if(a=t[La])return a;t=KS(t)}return e}t=a,a=t.parentNode}return null}function Bo(t){if(t=t[La]||t[Oo]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Pl(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(ee(33))}function ho(t){var e=t[Dv];return e||(e=t[Dv]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ma(t){t[gu]=!0}function Ay(t){t[Rd]=void 0}var wy=new Set,Ty={};function Lr(t,e){Lo(t,e),Lo(t+"Capture",e)}function Lo(t,e){for(Ty[t]=e,t=0;t<e.length;t++)wy.add(e[t])}var OA=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nv={},Pv={};function BA(t){return ym.call(Pv,t)?!0:ym.call(Nv,t)?!1:OA.test(t)?Pv[t]=!0:(Nv[t]=!0,!1)}var pt=!1;function Uv(){var t=pt;return pt=!1,t}function ld(t,e,a){if(BA(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,a)}}function Wc(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,a)}}function Ii(t,e,a,n){if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,n)}}function ln(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Iy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function FA(t,e,a){var n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(r){a=""+r,s.call(this,r)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _m(t){if(!t._valueTracker){var e=Iy(t)?"checked":"value";t._valueTracker=FA(t,e,""+t[e])}}function Ey(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=Iy(t)?t.checked?"true":"false":t.value),t=n,t!==a?(e.setValue(t),!0):!1}var kA=/[\n"\\]/g;function In(t){return t.replace(kA,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function bm(t,e,a,n,i,s,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ln(e)):t.value!==""+ln(e)&&(t.value=""+ln(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?r==="number"&&t.value==e?Fp(t,ln(t.value)):Fp(t,ln(e)):a!=null?Fp(t,ln(a)):n!=null&&t.removeAttribute("value"),i==null&&s!=null&&(t.defaultChecked=!!s),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+ln(o):t.removeAttribute("name")}function Ry(t,e,a,n,i,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||e!=null)){_m(t);return}a=a!=null?""+ln(a):"",e=e!=null?""+ln(e):a,o||e===t.value||(t.value=e),t.defaultValue=e}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=o?t.checked:!!n,t.defaultChecked=!!n,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),_m(t)}function Fp(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function po(t,e,a,n){if(t=t.options,e){e={};for(var i=0;i<a.length;i++)e["$"+a[i]]=!0;for(a=0;a<t.length;a++)i=e.hasOwnProperty("$"+t[a].value),t[a].selected!==i&&(t[a].selected=i),i&&n&&(t[a].defaultSelected=!0)}else{for(a=""+ln(a),e=null,i=0;i<t.length;i++){if(t[i].value===a){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Dy(t,e,a){if(e!=null&&(e=""+ln(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+ln(a):""}function Ny(t,e,a,n){if(e==null){if(n!=null){if(a!=null)throw Error(ee(92));if(Nl(n)){if(1<n.length)throw Error(ee(93));n=n[0]}a=n}a==null&&(a=""),e=a}a=ln(e),t.defaultValue=a,n=t.textContent,n===a&&n!==""&&n!==null&&(t.value=n),_m(t)}function Co(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var zA=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ov(t,e,a){var n=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,a):typeof a!="number"||a===0||zA.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Py(t,e,a){if(e!=null&&typeof e!="object")throw Error(ee(62));if(t=t.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="",pt=!0);for(var i in e)n=e[i],e.hasOwnProperty(i)&&a[i]!==n&&(Ov(t,i,n),pt=!0)}else for(var s in e)e.hasOwnProperty(s)&&Ov(t,s,e[s])}function Ag(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var HA=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),GA=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ud(t){return GA.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ri(){}var Mm=null;function wg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var no=null,mo=null;function Bv(t){var e=Bo(t);if(e&&(t=e.stateNode)){var a=t[nn]||null;e:switch(t=e.stateNode,e.type){case"input":if(bm(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+In(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var i=n[nn]||null;if(!i)throw Error(ee(90));bm(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<a.length;e++)n=a[e],n.form===t.form&&Ey(n)}break e;case"textarea":Dy(t,a.value,a.defaultValue);break e;case"select":e=a.value,e!=null&&po(t,!!a.multiple,e,!1)}}}var kp=!1;function Uy(t,e,a){if(kp)return t(e,a);kp=!0;try{var n=t(e);return n}finally{if(kp=!1,(no!==null||mo!==null)&&(vf(),no&&(e=no,t=mo,mo=no=null,Bv(e),t)))for(e=0;e<t.length;e++)Bv(t[e])}}function Ql(t,e){var a=t.stateNode;if(a===null)return null;var n=a[nn]||null;if(n===null)return null;a=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(ee(231,e,typeof a));return a}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lm=!1;if(Ui)try{Zr={},Object.defineProperty(Zr,"passive",{get:function(){Lm=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{Lm=!1}var Zr,ps=null,Tg=null,cd=null;function Oy(){if(cd)return cd;var t,e=Tg,a=e.length,n,i="value"in ps?ps.value:ps.textContent,s=i.length;for(t=0;t<a&&e[t]===i[t];t++);var r=a-t;for(n=1;n<=r&&e[a-n]===i[s-n];n++);return cd=i.slice(t,1<n?1-n:void 0)}function dd(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xc(){return!0}function Fv(){return!1}function qa(t){function e(a,n,i,s,r){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(a=t[o],this[o]=a?a(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xc:Fv,this.isPropagationStopped=Fv,this}return It(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xc)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xc)},persist:function(){},isPersistent:Xc}),e}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sf=qa(Ps),xu=It({},Ps,{view:0,detail:0}),VA=qa(xu),zp,Hp,wl,rf=It({},xu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ig,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wl&&(wl&&t.type==="mousemove"?(zp=t.screenX-wl.screenX,Hp=t.screenY-wl.screenY):Hp=zp=0,wl=t),zp)},movementY:function(t){return"movementY"in t?t.movementY:Hp}}),kv=qa(rf),qA=It({},rf,{dataTransfer:0}),WA=qa(qA),XA=It({},xu,{relatedTarget:0}),Gp=qa(XA),YA=It({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),ZA=qa(YA),KA=It({},Ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),JA=qa(KA),QA=It({},Ps,{data:0}),zv=qa(QA),jA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$A={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ew={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ew[t])?!!e[t]:!1}function Ig(){return tw}var aw=It({},xu,{key:function(t){if(t.key){var e=jA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dd(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$A[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ig,charCode:function(t){return t.type==="keypress"?dd(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dd(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nw=qa(aw),iw=It({},rf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hv=qa(iw),sw=It({},Ps,{submitter:0}),rw=qa(sw),ow=It({},xu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ig}),lw=qa(ow),uw=It({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),cw=qa(uw),dw=It({},rf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fw=qa(dw),hw=It({},Ps,{newState:0,oldState:0,source:0}),pw=qa(hw),mw=[9,13,27,32],Eg=Ui&&"CompositionEvent"in window,Bl=null;Ui&&"documentMode"in document&&(Bl=document.documentMode);var gw=Ui&&"TextEvent"in window&&!Bl,By=Ui&&(!Eg||Bl&&8<Bl&&11>=Bl),Gv=" ",Vv=!1;function Fy(t,e){switch(t){case"keyup":return mw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ky(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var io=!1;function xw(t,e){switch(t){case"compositionend":return ky(e);case"keypress":return e.which!==32?null:(Vv=!0,Gv);case"textInput":return t=e.data,t===Gv&&Vv?null:t;default:return null}}function vw(t,e){if(io)return t==="compositionend"||!Eg&&Fy(t,e)?(t=Oy(),cd=Tg=ps=null,io=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return By&&e.locale!=="ko"?null:e.data;default:return null}}var Sw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Sw[t.type]:e==="textarea"}function zy(t,e,a,n){no?mo?mo.push(n):mo=[n]:no=n,e=$d(e,"onChange"),0<e.length&&(a=new sf("onChange","change",null,a,n),t.push({event:a,listeners:e}))}var Fl=null,jl=null;function yw(t){Ub(t,0)}function of(t){var e=Pl(t);if(Ey(e))return t}function Wv(t,e){if(t==="change")return e}var Hy=!1;Ui&&(Ui?(Zc="oninput"in document,Zc||(Vp=document.createElement("div"),Vp.setAttribute("oninput","return;"),Zc=typeof Vp.oninput=="function"),Yc=Zc):Yc=!1,Hy=Yc&&(!document.documentMode||9<document.documentMode));var Yc,Zc,Vp;function Xv(){Fl&&(Fl.detachEvent("onpropertychange",Gy),jl=Fl=null)}function Gy(t){if(t.propertyName==="value"&&of(jl)){var e=[];zy(e,jl,t,wg(t)),Uy(yw,e)}}function _w(t,e,a){t==="focusin"?(Xv(),Fl=e,jl=a,Fl.attachEvent("onpropertychange",Gy)):t==="focusout"&&Xv()}function bw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return of(jl)}function Mw(t,e){if(t==="click")return of(e)}function Lw(t,e){if(t==="input"||t==="change")return of(e)}function Cw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gn=typeof Object.is=="function"?Object.is:Cw;function $l(t,e){if(gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!ym.call(e,i)||!gn(t[i],e[i]))return!1}return!0}function Cm(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Yv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zv(t,e){var a=Yv(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=e&&n>=e)return{node:a,offset:e-t};t=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Yv(a)}}function Vy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function qy(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Cm(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Cm(t.document)}return e}function Rg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Aw=Ui&&"documentMode"in document&&11>=document.documentMode,so=null,Am=null,kl=null,wm=!1;function Kv(t,e,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wm||so==null||so!==Cm(n)||(n=so,"selectionStart"in n&&Rg(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),kl&&$l(kl,n)||(kl=n,n=$d(Am,"onSelect"),0<n.length&&(e=new sf("onSelect","select",null,e,a),t.push({event:e,listeners:n}),e.target=so)))}function nr(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var ro={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionrun:nr("Transition","TransitionRun"),transitionstart:nr("Transition","TransitionStart"),transitioncancel:nr("Transition","TransitionCancel"),transitionend:nr("Transition","TransitionEnd")},qp={},Wy={};Ui&&(Wy=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function Cr(t){if(qp[t])return qp[t];if(!ro[t])return t;var e=ro[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Wy)return qp[t]=e[a];return t}var Xy=Cr("animationend"),Yy=Cr("animationiteration"),Zy=Cr("animationstart"),ww=Cr("transitionrun"),Tw=Cr("transitionstart"),Iw=Cr("transitioncancel"),Ky=Cr("transitionend"),Jy=new Map,Tm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tm.push("scrollEnd");function qn(t,e){Jy.set(t,e),Lr(e,[t])}var Ew=0;function Oi(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=Vn.identifierPrefix;var a=Ew++;return t="_"+t+"t_"+a.toString(32)+"_",e.autoName=t}function Jv(t){if(t==null||typeof t=="string")return t;var e=null,a=bo;if(a!==null)for(var n=0;n<a.length;n++){var i=t[a[n]];if(i!=null){if(i==="none")return"none";e=e==null?i:e+(" "+i)}}return e??t.default}function Gi(t,e){return t=Jv(t),e=Jv(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var Dd=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},An=[],oo=0,Dg=0;function lf(){for(var t=oo,e=Dg=oo=0;e<t;){var a=An[e];An[e++]=null;var n=An[e];An[e++]=null;var i=An[e];An[e++]=null;var s=An[e];if(An[e++]=null,n!==null&&i!==null){var r=n.pending;r===null?i.next=i:(i.next=r.next,r.next=i),n.pending=i}s!==0&&Qy(a,i,s)}}function uf(t,e,a,n){An[oo++]=t,An[oo++]=e,An[oo++]=a,An[oo++]=n,Dg|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function Ng(t,e,a,n){return uf(t,e,a,n),Nd(t)}function Ar(t,e){return uf(t,null,null,e),Nd(t)}function Qy(t,e,a){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a);for(var i=!1,s=t.return;s!==null;)s.childLanes|=a,n=s.alternate,n!==null&&(n.childLanes|=a),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(i=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,i&&e!==null&&(i=31-pn(a),t=s.hiddenUpdates,n=t[i],n===null?t[i]=[e]:n.push(e),e.lane=a|536870912),s):null}function Nd(t){if(50<Kl)throw Kl=0,_d=null,Error(ee(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var lo={};function Rw(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,a,n){return new Rw(t,e,a,n)}function Pg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ni(t,e){var a=t.alternate;return a===null?(a=en(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function jy(t,e){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function fd(t,e,a,n,i,s){var r=0;if(n=t,typeof n=="function")Pg(n)&&(r=1);else if(typeof n=="string")r=nI(t,a,ui.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(n){case mm:return t=en(31,a,e,i),t.elementType=mm,t.lanes=s,t;case to:return dr(a.children,i,s,e);case my:r=8,i|=24;break;case fm:return t=en(12,a,e,i|2),t.elementType=fm,t.lanes=s,t;case hm:return t=en(13,a,e,i),t.elementType=hm,t.lanes=s,t;case pm:return t=en(19,a,e,i),t.elementType=pm,t.lanes=s,t;case vA:case gm:return t=i|32,t=en(30,a,e,t),t.elementType=gm,t.lanes=s,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case si:r=10;break e;case gy:r=9;break e;case _g:r=11;break e;case bg:r=14;break e;case cs:r=16,n=null;break e}r=29,a=Error(ee(130,t===null?"null":typeof t,"")),n=null}return e=en(r,a,e,i),e.elementType=t,e.type=n,e.lanes=s,e}function dr(t,e,a,n){return t=en(7,t,n,e),t.lanes=a,t}function Wp(t,e,a){return t=en(6,t,null,e),t.lanes=a,t}function $y(t){var e=en(18,null,null,0);return e.stateNode=t,e}function Xp(t,e,a){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Qv=new WeakMap;function En(t,e){if(typeof t=="object"&&t!==null){var a=Qv.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Iv(e)},Qv.set(t,e),e)}return{value:t,source:e,stack:Iv(e)}}var uo=[],co=0,Pd=null,eu=0,wn=[],Tn=0,Is=null,oi=1,li="";function Ri(t,e){uo[co++]=eu,uo[co++]=Pd,Pd=t,eu=e}function e_(t,e,a){wn[Tn++]=oi,wn[Tn++]=li,wn[Tn++]=Is,Is=t;var n=oi;t=li;var i=32-pn(n)-1;n&=~(1<<i),a+=1;var s=32-pn(e)+i;if(30<s){var r=i-i%5;s=(n&(1<<r)-1).toString(32),n>>=r,i-=r,oi=1<<32-pn(e)+i|a<<i|n,li=s+t}else oi=1<<s|a<<i|n,li=t}function cf(t){t.return!==null&&(Ri(t,1),e_(t,1,0))}function Ug(t){for(;t===Pd;)Pd=uo[--co],uo[co]=null,eu=uo[--co],uo[co]=null;for(;t===Is;)Is=wn[--Tn],wn[Tn]=null,li=wn[--Tn],wn[Tn]=null,oi=wn[--Tn],wn[Tn]=null}function t_(t,e){wn[Tn++]=oi,wn[Tn++]=li,wn[Tn++]=Is,oi=e.id,li=e.overflow,Is=t}var ga=null,Nt=null,$e=!1,ys=null,Rn=!1,Im=Error(ee(519));function Es(t){var e=Error(ee(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw tu(En(e,t)),Im}function jv(t){var e=t.stateNode,a=t.type,n=t.memoizedProps;switch(e[La]=t,e[nn]=n,a){case"dialog":at("cancel",e),at("close",e);break;case"iframe":case"object":case"embed":at("load",e);break;case"video":case"audio":for(a=0;a<su.length;a++)at(su[a],e);break;case"source":at("error",e);break;case"img":case"image":case"link":at("error",e),at("load",e);break;case"details":at("toggle",e);break;case"input":at("invalid",e),Ry(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":at("invalid",e);break;case"textarea":at("invalid",e),Ny(e,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||n.suppressHydrationWarning===!0||Bb(e.textContent,a)?(n.popover!=null&&(at("beforetoggle",e),at("toggle",e)),n.onScroll!=null&&at("scroll",e),n.onScrollEnd!=null&&at("scrollend",e),n.onClick!=null&&(e.onclick=ri),e=!0):e=!1,e||Es(t,!0)}function Ud(t){for(ga=t.return;ga;)switch(ga.tag){case 5:case 31:case 13:Rn=!1;return;case 27:case 3:Rn=!0;return;default:ga=ga.return}}function Kr(t){if(t!==ga)return!1;if(!$e)return Ud(t),$e=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||hg(t.type,t.memoizedProps)),a=!a),a&&Nt&&Es(t),Ud(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));Nt=ZS(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));Nt=ZS(t)}else e===27?(e=Nt,Us(t.type)?(t=xg,xg=null,Nt=t):Nt=e):Nt=ga?Dn(t.stateNode.nextSibling):null;return!0}function mr(){Nt=ga=null,$e=!1}function Yp(){var t=ys;return t!==null&&(ja===null?ja=t:ja.push.apply(ja,t),ys=null),t}function tu(t){ys===null?ys=[t]:ys.push(t)}var Em=fi(null),wr=null,Di=null;function ms(t,e,a){Pt(Em,e._currentValue),e._currentValue=a}function Pi(t){t._currentValue=Em.current,Aa(Em)}function hd(t,e,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===a)break;t=t.return}}function Rm(t,e,a,n){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){var r=i.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=i;for(var l=0;l<e.length;l++)if(o.context===e[l]){s.lanes|=a,o=s.alternate,o!==null&&(o.lanes|=a),hd(s.return,a,t),n||(r=null);break e}s=o.next}}else if(i.tag===18){if(r=i.return,r===null)throw Error(ee(341));r.lanes|=a,s=r.alternate,s!==null&&(s.lanes|=a),hd(r,a,t),r=null}else i.tag===13&&i.memoizedState!==null&&i.memoizedState.dehydrated===null?(i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),hd(i.return,a,t),r=i.child,r=r!==null?r.sibling:null):r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===t){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}}function gr(t,e,a,n){t=null;for(var i=e,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var r=i.alternate;if(r===null)throw Error(ee(387));if(r=r.memoizedProps,r!==null){var o=i.type;gn(i.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(i===wd.current){if(r=i.alternate,r===null)throw Error(ee(387));r.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(No):t=[No])}i=i.return}return t!==null&&Rm(e,t,a,n),e.flags|=262144,t!==null}function Od(t){for(t=t.firstContext;t!==null;){if(!gn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function xr(t){wr=t,Di=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ca(t){return a_(wr,t)}function Kc(t,e){return wr===null&&xr(t),a_(t,e)}function a_(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Di===null){if(t===null)throw Error(ee(308));Di=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Di=Di.next=e;return a}var Dw=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},Nw=ua.unstable_scheduleCallback,Pw=ua.unstable_NormalPriority,aa={$$typeof:si,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Og(){return{controller:new Dw,data:new Map,refCount:0}}function vu(t){t.refCount--,t.refCount===0&&Nw(Pw,function(){t.controller.abort()})}function $v(t,e){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<e.length;t++){var n=e[t];a.indexOf(n)===-1&&a.push(n)}}}var Ul=null;function Uw(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var zl=null,Dm=0,vr=0,go=null;function Ow(t,e){if(zl===null){var a=zl=[];Dm=0,vr=cx(),go={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Dm++,e.then(eS,eS),e}function eS(){if(--Dm===0&&(Ul=null,zl!==null)){go!==null&&(go.status="fulfilled");var t=zl;zl=null,vr=0,go=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Bw(t,e){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var i=0;i<a.length;i++)(0,a[i])(e)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var tS=ze.S;ze.S=function(t,e){if(yb=fn(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Ow(t,e),Ul!==null)for(var a=Eo;a!==null;)$v(a,Ul),a=a.next;if(a=t.types,a!==null){for(var n=Eo;n!==null;)$v(n,a),n=n.next;if(vr!==0){n=Ul,n===null&&(n=Ul=[]);for(var i=0;i<a.length;i++){var s=a[i];n.indexOf(s)===-1&&n.push(s)}}}tS!==null&&tS(t,e)};var fr=fi(null);function Bg(){var t=fr.current;return t!==null?t:Tt.pooledCache}function pd(t,e){e===null?Pt(fr,fr.current):Pt(fr,e.pool)}function n_(){var t=Bg();return t===null?null:{parent:aa._currentValue,pool:t}}var Fo=Error(ee(460)),Fg=Error(ee(474)),df=Error(ee(542)),Bd={then:function(){}};function aS(t){return t=t.status,t==="fulfilled"||t==="rejected"}function i_(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(ri,ri),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,iS(t),t===void 0&&!("reason"in e)?Error(ee(600)):t;default:if(typeof e.status=="string")e.then(ri,ri);else{if(t=Tt,t!==null&&100<t.shellSuspendCounter)throw Error(ee(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=n}},function(n){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,iS(t),t}throw hr=e,Fo}}function rr(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(hr=a,Fo):a}}var hr=null;function nS(){if(hr===null)throw Error(ee(459));var t=hr;return hr=null,t}function iS(t){if(t===Fo||t===df)throw Error(ee(483))}var xo=null,au=0;function Jc(t){var e=au;return au+=1,xo===null&&(xo=[]),i_(xo,t,e)}function os(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Qc(t,e){throw e.$$typeof===xA?Error(ee(525)):(t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function s_(t){function e(d,m){if(t){var y=d.deletions;y===null?(d.deletions=[m],d.flags|=16):y.push(m)}}function a(d,m){if(!t)return null;for(;m!==null;)e(d,m),m=m.sibling;return null}function n(d){for(var m=new Map;d!==null;)d.key===null?m.set(d.index,d):m.set(d.key,d),d=d.sibling;return m}function i(d,m){return d=Ni(d,m),d.index=0,d.sibling=null,d}function s(d,m,y){return d.index=y,t?(y=d.alternate,y!==null?(y=y.index,y<m?(d.flags|=2,m):y):(d.flags|=134217730,m)):(d.flags|=1048576,m)}function r(d){return t&&d.alternate===null&&(d.flags|=134217730),d}function o(d,m,y,_){return m===null||m.tag!==6?(m=Wp(y,d.mode,_),m.return=d,m):(m=i(m,y),m.return=d,m)}function l(d,m,y,_){var A=y.type;return A===to?(d=f(d,m,y.props.children,_,y.key),os(d,y),d):m!==null&&(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===cs&&rr(A)===m.type)?(m=i(m,y.props),os(m,y),m.return=d,m):(m=fd(y.type,y.key,y.props,null,d.mode,_),os(m,y),m.return=d,m)}function u(d,m,y,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Xp(y,d.mode,_),m.return=d,m):(m=i(m,y.children||[]),m.return=d,m)}function f(d,m,y,_,A){return m===null||m.tag!==7?(m=dr(y,d.mode,_,A),m.return=d,m):(m=i(m,y),m.return=d,m)}function p(d,m,y){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Wp(""+m,d.mode,y),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Hc:return y=fd(m.type,m.key,m.props,null,d.mode,y),os(y,m),y.return=d,y;case Dl:return m=Xp(m,d.mode,y),m.return=d,m;case cs:return m=rr(m),p(d,m,y)}if(Nl(m)||Al(m))return m=dr(m,d.mode,y,null),m.return=d,m;if(typeof m.then=="function")return p(d,Jc(m),y);if(m.$$typeof===si)return p(d,Kc(d,m),y);Qc(d,m)}return null}function c(d,m,y,_){var A=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return A!==null?null:o(d,m,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Hc:return y.key===A?l(d,m,y,_):null;case Dl:return y.key===A?u(d,m,y,_):null;case cs:return y=rr(y),c(d,m,y,_)}if(Nl(y)||Al(y))return A!==null?null:f(d,m,y,_,null);if(typeof y.then=="function")return c(d,m,Jc(y),_);if(y.$$typeof===si)return c(d,m,Kc(d,y),_);Qc(d,y)}return null}function h(d,m,y,_,A){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return d=d.get(y)||null,o(m,d,""+_,A);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Hc:return d=d.get(_.key===null?y:_.key)||null,l(m,d,_,A);case Dl:return d=d.get(_.key===null?y:_.key)||null,u(m,d,_,A);case cs:return _=rr(_),h(d,m,y,_,A)}if(Nl(_)||Al(_))return d=d.get(y)||null,f(m,d,_,A,null);if(typeof _.then=="function")return h(d,m,y,Jc(_),A);if(_.$$typeof===si)return h(d,m,y,Kc(m,_),A);Qc(m,_)}return null}function S(d,m,y,_){for(var A=null,w=null,v=m,L=m=0,P=null;v!==null&&L<y.length;L++){v.index>L?(P=v,v=null):P=v.sibling;var E=c(d,v,y[L],_);if(E===null){v===null&&(v=P);break}t&&v&&E.alternate===null&&e(d,v),m=s(E,m,L),w===null?A=E:w.sibling=E,w=E,v=P}if(L===y.length)return a(d,v),$e&&Ri(d,L),A;if(v===null){for(;L<y.length;L++)v=p(d,y[L],_),v!==null&&(m=s(v,m,L),w===null?A=v:w.sibling=v,w=v);return $e&&Ri(d,L),A}for(v=n(v);L<y.length;L++)P=h(v,d,L,y[L],_),P!==null&&(t&&(E=P.alternate,E!==null&&v.delete(E.key===null?L:E.key)),m=s(P,m,L),w===null?A=P:w.sibling=P,w=P);return t&&v.forEach(function(U){return e(d,U)}),$e&&Ri(d,L),A}function M(d,m,y,_){if(y==null)throw Error(ee(151));for(var A=null,w=null,v=m,L=m=0,P=null,E=y.next();v!==null&&!E.done;L++,E=y.next()){v.index>L?(P=v,v=null):P=v.sibling;var U=c(d,v,E.value,_);if(U===null){v===null&&(v=P);break}t&&v&&U.alternate===null&&e(d,v),m=s(U,m,L),w===null?A=U:w.sibling=U,w=U,v=P}if(E.done)return a(d,v),$e&&Ri(d,L),A;if(v===null){for(;!E.done;L++,E=y.next())E=p(d,E.value,_),E!==null&&(m=s(E,m,L),w===null?A=E:w.sibling=E,w=E);return $e&&Ri(d,L),A}for(v=n(v);!E.done;L++,E=y.next())E=h(v,d,L,E.value,_),E!==null&&(t&&(P=E.alternate,P!==null&&v.delete(P.key===null?L:P.key)),m=s(E,m,L),w===null?A=E:w.sibling=E,w=E);return t&&v.forEach(function(H){return e(d,H)}),$e&&Ri(d,L),A}function x(d,m,y,_){if(typeof y=="object"&&y!==null&&y.type===to&&y.key===null&&y.props.ref===void 0&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Hc:e:{for(var A=y.key;m!==null;){if(m.key===A){if(A=y.type,A===to){if(m.tag===7){a(d,m.sibling),_=i(m,y.props.children),os(_,y),_.return=d,d=_;break e}}else if(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===cs&&rr(A)===m.type){a(d,m.sibling),_=i(m,y.props),os(_,y),_.return=d,d=_;break e}a(d,m);break}else e(d,m);m=m.sibling}y.type===to?(_=dr(y.props.children,d.mode,_,y.key),os(_,y),_.return=d,d=_):(_=fd(y.type,y.key,y.props,null,d.mode,_),os(_,y),_.return=d,d=_)}return r(d);case Dl:e:{for(A=y.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){a(d,m.sibling),_=i(m,y.children||[]),_.return=d,d=_;break e}else{a(d,m);break}else e(d,m);m=m.sibling}_=Xp(y,d.mode,_),_.return=d,d=_}return r(d);case cs:return y=rr(y),x(d,m,y,_)}if(Nl(y))return S(d,m,y,_);if(Al(y)){if(A=Al(y),typeof A!="function")throw Error(ee(150));return y=A.call(y),M(d,m,y,_)}if(typeof y.then=="function")return x(d,m,Jc(y),_);if(y.$$typeof===si)return x(d,m,Kc(d,y),_);Qc(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,m!==null&&m.tag===6?(a(d,m.sibling),_=i(m,y),_.return=d,d=_):(a(d,m),_=Wp(y,d.mode,_),_.return=d,d=_),r(d)):a(d,m)}return function(d,m,y,_){try{au=0;var A=x(d,m,y,_);return xo=null,A}catch(v){if(v===Fo||v===df)throw v;var w=en(29,v,null,d.mode);return w.lanes=_,w.return=d,w}}}var Sr=s_(!0),r_=s_(!1),ds=!1;function kg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _s(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function bs(t,e,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(xt&2)!==0){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,e=Nd(t),Qy(t,null,a),e}return uf(t,n,e,a),Nd(t)}function Hl(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,My(t,a)}}function Zp(t,e){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?i=s=r:s=s.next=r,a=a.next}while(a!==null);s===null?i=s=e:s=s.next=e}else i=s=e;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Pm=!1;function Gl(){if(Pm){var t=go;if(t!==null)throw t}}function Vl(t,e,a,n){Pm=!1;var i=t.updateQueue;ds=!1;var s=i.firstBaseUpdate,r=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,u=l.next;l.next=null,r===null?s=u:r.next=u,r=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=u:o.next=u,f.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;r=0,f=u=l=null,o=s;do{var c=o.lane&-536870913,h=c!==o.lane;if(h?(rt&c)===c:(n&c)===c){c!==0&&c===vr&&(Pm=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var S=t,M=o;c=e;var x=a;switch(M.tag){case 1:if(S=M.payload,typeof S=="function"){p=S.call(x,p,c);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=M.payload,c=typeof S=="function"?S.call(x,p,c):S,c==null)break e;p=It({},p,c);break e;case 2:ds=!0}}c=o.callback,c!==null&&(t.flags|=64,h&&(t.flags|=8192),h=i.callbacks,h===null?i.callbacks=[c]:h.push(c))}else h={lane:c,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(u=f=h,l=p):f=f.next=h,r|=c;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;h=o,o=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);f===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,s===null&&(i.shared.lanes=0),Ns|=r,t.lanes=r,t.memoizedState=p}}function o_(t,e){if(typeof t!="function")throw Error(ee(191,t));t.call(e)}function l_(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)o_(a[t],e)}var Rs=fi(null),Fd=fi(0);function sS(t,e){t=zi,Pt(Fd,t),Pt(Rs,e),zi=t|e.baseLanes}function Um(){Pt(Fd,zi),Pt(Rs,Rs.current)}function zg(){zi=Fd.current,Aa(Rs),Aa(Fd)}var Ia=fi(null),Ua=null;function Ms(t){var e=t.alternate;Pt(wa,wa.current&1),Pt(Ia,t),Ua===null&&(e===null||Rs.current!==null||e.memoizedState!==null)&&(Ua=t)}function Om(t){Pt(wa,wa.current),Pt(Ia,t),Ua===null&&(Ua=t)}function u_(t){t.tag===22?(Pt(wa,wa.current),Pt(Ia,t),Ua===null&&(Ua=t)):Ls()}function Ls(){Pt(wa,wa.current),Pt(Ia,Ia.current)}function un(t){Aa(Ia),Ua===t&&(Ua=null),Aa(wa)}var wa=fi(0);function nu(t,e){Pt(Ia,Ia.current),Pt(wa,e)}function Hg(t){Aa(wa),Aa(Ia),Ua===t&&(Ua=null)}function kd(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||gg(a)||px(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bi=0,Je=null,At=null,ta=null,zd=!1,vo=!1,yr=!1,Hd=0,iu=0,So=null,Fw=0;function Jt(){throw Error(ee(321))}function Gg(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!gn(t[a],e[a]))return!1;return!0}function Vg(t,e,a,n,i,s){return Bi=s,Je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ze.H=t===null||t.memoizedState===null?z_:H_,yr=!1,s=a(n,i),yr=!1,vo&&(s=d_(e,a,n,i)),c_(t),s}function c_(t){ze.H=Gd;var e=At!==null&&At.next!==null;if(Bi=0,ta=At=Je=null,zd=!1,iu=0,So=null,e)throw Error(ee(300));t===null||na||(t=t.dependencies,t!==null&&Od(t)&&(na=!0))}function d_(t,e,a,n){Je=t;var i=0;do{if(vo&&(So=null),iu=0,vo=!1,25<=i)throw Error(ee(301));if(i+=1,ta=At=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}ze.H=Xw,s=e(a,n)}while(vo);return s}function kw(){var t=ze.H,e=t.useState()[0];return e=typeof e.then=="function"?Su(e):e,t=t.useState()[0],(At!==null?At.memoizedState:null)!==t&&(Je.flags|=1024),e}function qg(){var t=Hd!==0;return Hd=0,t}function Wg(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Xg(t){if(zd){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}zd=!1}Bi=0,ta=At=Je=null,vo=!1,iu=Hd=0,So=null}function Va(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ta===null?Je.memoizedState=ta=t:ta=ta.next=t,ta}function $t(){if(At===null){var t=Je.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=ta===null?Je.memoizedState:ta.next;if(e!==null)ta=e,At=t;else{if(t===null)throw Je.alternate===null?Error(ee(467)):Error(ee(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},ta===null?Je.memoizedState=ta=t:ta=ta.next=t}return ta}function ff(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Su(t){var e=iu;return iu+=1,So===null&&(So=[]),t=i_(So,t,e),e=Je,(ta===null?e.memoizedState:ta.next)===null&&(e=e.alternate,ze.H=e===null||e.memoizedState===null?z_:H_),t}function hf(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Su(t);if(t.$$typeof===yA)return;if(t.$$typeof===si)return Ca(t)}throw Error(ee(438,String(t)))}function Yg(t){var e=null,a=Je.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var n=Je.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=ff(),Je.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),n=0;n<t;n++)a[n]=SA;return e.index++,a}function Fi(t,e){return typeof e=="function"?e(t):e}function md(t){var e=$t();return Zg(e,At,t)}function Zg(t,e,a){var n=t.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=a;var i=t.baseQueue,s=n.pending;if(s!==null){if(i!==null){var r=i.next;i.next=s.next,s.next=r}e.baseQueue=i=s,n.pending=null}if(s=t.baseState,i===null)t.memoizedState=s;else{e=i.next;var o=r=null,l=null,u=e,f=!1;do{var p=u.lane&-536870913;if(p!==u.lane?(rt&p)===p:(Bi&p)===p){var c=u.revertLane;if(c===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===vr&&(f=!0);else if((Bi&c)===c){u=u.next,c===vr&&(f=!0);continue}else p={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=p,r=s):l=l.next=p,Je.lanes|=c,Ns|=c;p=u.action,yr&&a(s,p),s=u.hasEagerState?u.eagerState:a(s,p)}else c={lane:p,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=c,r=s):l=l.next=c,Je.lanes|=p,Ns|=p;u=u.next}while(u!==null&&u!==e);if(l===null?r=s:l.next=o,!gn(s,t.memoizedState)&&(na=!0,f&&(a=go,a!==null)))throw a;t.memoizedState=s,t.baseState=r,t.baseQueue=l,n.lastRenderedState=s}return i===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function Kp(t){var e=$t(),a=e.queue;if(a===null)throw Error(ee(311));a.lastRenderedReducer=t;var n=a.dispatch,i=a.pending,s=e.memoizedState;if(i!==null){a.pending=null;var r=i=i.next;do s=t(s,r.action),r=r.next;while(r!==i);gn(s,e.memoizedState)||(na=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),a.lastRenderedState=s}return[s,n]}function f_(t,e,a){var n=Je,i=$t(),s=$e;if(s){if(a===void 0)throw Error(ee(407));a=a()}else a=e();var r=!gn((At||i).memoizedState,a);if(r&&(i.memoizedState=a,na=!0),i=i.queue,Kg(m_.bind(null,n,i,t),[t]),t=i.getSnapshot!==e||r||ta!==null&&(ta.memoizedState.tag&1)!==0,Ao(t?9:8,{destroy:void 0},p_.bind(null,n,i,a,e),null),t){if(n.flags|=2048,Tt===null)throw Error(ee(349));s||(Bi&127)!==0||h_(n,e,a)}return a}function h_(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=Je.updateQueue,e===null?(e=ff(),Je.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function p_(t,e,a,n){e.value=a,e.getSnapshot=n,g_(e)&&x_(t)}function m_(t,e,a){return a(function(){g_(e)&&x_(t)})}function g_(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!gn(t,a)}catch{return!0}}function x_(t){var e=Ar(t,2);e!==null&&tn(e,t,2)}function Bm(t){var e=Va();if(typeof t=="function"){var a=t;if(t=a(),yr){hs(!0);try{a()}finally{hs(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:t},e}function v_(t,e,a,n){return t.baseState=a,Zg(t,At,typeof n=="function"?n:Fi)}function zw(t,e,a,n,i){if(mf(t))throw Error(ee(485));if(t=e.action,t!==null){var s={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};ze.T!==null?a(!0):s.isTransition=!1,n(s),a=e.pending,a===null?(s.next=e.pending=s,S_(e,s)):(s.next=a.next,e.pending=a.next=s)}}function S_(t,e){var a=e.action,n=e.payload,i=t.state;if(e.isTransition){var s=ze.T,r={};r.types=s!==null?s.types:null,ze.T=r;try{var o=a(i,n),l=ze.S;l!==null&&l(r,o),rS(t,e,o)}catch(u){Fm(t,e,u)}finally{s!==null&&r.types!==null&&(s.types=r.types),ze.T=s}}else try{s=a(i,n),rS(t,e,s)}catch(u){Fm(t,e,u)}}function rS(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){oS(t,e,n)},function(n){return Fm(t,e,n)}):oS(t,e,a)}function oS(t,e,a){e.status="fulfilled",e.value=a,y_(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,S_(t,a)))}function Fm(t,e,a){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=a,y_(e),e=e.next;while(e!==n)}t.action=null}function y_(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function __(t,e){return e}function lS(t,e){if($e){var a=Tt.formState;if(a!==null){e:{var n=Je;if($e){if(Nt){t:{for(var i=Nt,s=Rn;i.nodeType!==8;){if(!s){i=null;break t}if(i=Dn(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){Nt=Dn(i.nextSibling),n=i.data==="F!";break e}}Es(n)}n=!1}n&&(e=a[0])}}return a=Va(),a.memoizedState=a.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:__,lastRenderedState:e},a.queue=n,a=B_.bind(null,Je,n),n.dispatch=a,n=Bm(!1),s=$g.bind(null,Je,!1,n.queue),n=Va(),i={state:e,dispatch:null,action:t,pending:null},n.queue=i,a=zw.bind(null,Je,i,s,a),i.dispatch=a,n.memoizedState=t,[e,a,!1]}function uS(t){var e=$t();return b_(e,At,t)}function b_(t,e,a){if(e=Zg(t,e,__)[0],t=md(Fi)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=Su(e)}catch(r){throw r===Fo?df:r}else n=e;e=$t();var i=e.queue,s=i.dispatch;return a!==e.memoizedState&&(Je.flags|=2048,Ao(9,{destroy:void 0},Hw.bind(null,i,a),null)),[n,s,t]}function Hw(t,e){t.action=e}function cS(t){var e=$t(),a=At;if(a!==null)return b_(e,a,t);$t(),e=e.memoizedState,a=$t();var n=a.queue.dispatch;return a.memoizedState=t,[e,n,!1]}function Ao(t,e,a,n){return t={tag:t,create:a,deps:n,inst:e,next:null},e=Je.updateQueue,e===null&&(e=ff(),Je.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,e.lastEffect=t),t}function M_(){return $t().memoizedState}function gd(t,e,a,n){var i=Va();Je.flags|=t,i.memoizedState=Ao(1|e,{destroy:void 0},a,n===void 0?null:n)}function pf(t,e,a,n){var i=$t();n=n===void 0?null:n;var s=i.memoizedState.inst;At!==null&&n!==null&&Gg(n,At.memoizedState.deps)?i.memoizedState=Ao(e,s,a,n):(Je.flags|=t,i.memoizedState=Ao(1|e,s,a,n))}function dS(t,e){gd(8390656,8,t,e)}function Kg(t,e){pf(2048,8,t,e)}function Gw(t){Je.flags|=4;var e=Je.updateQueue;if(e===null)e=ff(),Je.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function L_(t){var e=$t().memoizedState;return Gw({ref:e,nextImpl:t}),function(){if((xt&2)!==0)throw Error(ee(440));return e.impl.apply(void 0,arguments)}}function C_(t,e){return pf(4,2,t,e)}function A_(t,e){return pf(4,4,t,e)}function w_(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function T_(t,e,a){a=a!=null?a.concat([t]):null,pf(4,4,w_.bind(null,e,t),a)}function Jg(){}function I_(t,e){var a=$t();e=e===void 0?null:e;var n=a.memoizedState;return e!==null&&Gg(e,n[1])?n[0]:(a.memoizedState=[t,e],t)}function E_(t,e){var a=$t();e=e===void 0?null:e;var n=a.memoizedState;if(e!==null&&Gg(e,n[1]))return n[0];if(n=t(),yr){hs(!0);try{t()}finally{hs(!1)}}return a.memoizedState=[n,e],n}function Qg(t,e,a){return a===void 0||(Bi&1073741824)!==0&&(rt&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=bb(),Je.lanes|=t,Ns|=t,a)}function R_(t,e,a,n){return gn(a,e)?a:Rs.current!==null?(t=Qg(t,a,n),gn(t,e)||(na=!0),t):(Bi&106)===0||(Bi&1073741824)!==0&&(rt&261930)===0?(na=!0,t.memoizedState=a):(t=bb(),Je.lanes|=t,Ns|=t,e)}function D_(t,e,a,n,i){var s=vt.p;vt.p=s!==0&&8>s?s:8;var r=ze.T,o={};o.types=r!==null?r.types:null,ze.T=o,$g(t,!1,e,a);try{var l=i(),u=ze.S;if(u!==null&&u(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=Bw(l,n);ql(t,e,f,mn(t))}else ql(t,e,n,mn(t))}catch(p){ql(t,e,{then:function(){},status:"rejected",reason:p},mn())}finally{vt.p=s,r!==null&&o.types!==null&&(r.types=o.types),ze.T=r}}function Vw(){}function km(t,e,a,n){if(t.tag!==5)throw Error(ee(476));var i=N_(t).queue;D_(t,i,e,cr,a===null?Vw:function(){return P_(t),a(n)})}function N_(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:cr,baseState:cr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:cr},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function P_(t){var e=N_(t);e.next===null&&(e=t.alternate.memoizedState),ql(t,e.next.queue,{},mn())}function jg(){return Ca(No)}function U_(){return $t().memoizedState}function O_(){return $t().memoizedState}function qw(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=mn();t=_s(a);var n=bs(e,t,a);n!==null&&(tn(n,e,a),Hl(n,e,a)),e={cache:Og()},t.payload=e;return}e=e.return}}function Ww(t,e,a){var n=mn();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},mf(t)?F_(e,a):(a=Ng(t,e,a,n),a!==null&&(tn(a,t,n),k_(a,e,n)))}function B_(t,e,a){var n=mn();ql(t,e,a,n)}function ql(t,e,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(mf(t))F_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var r=e.lastRenderedState,o=s(r,a);if(i.hasEagerState=!0,i.eagerState=o,gn(o,r))return uf(t,e,i,0),Tt===null&&lf(),!1}catch{}if(a=Ng(t,e,i,n),a!==null)return tn(a,t,n),k_(a,e,n),!0}return!1}function $g(t,e,a,n){if(n={lane:2,revertLane:cx(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},mf(t)){if(e)throw Error(ee(479))}else e=Ng(t,a,n,2),e!==null&&tn(e,t,2)}function mf(t){var e=t.alternate;return t===Je||e!==null&&e===Je}function F_(t,e){vo=zd=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function k_(t,e,a){if((a&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,My(t,a)}}var Gd={readContext:Ca,use:hf,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt,useEffectEvent:Jt},z_={readContext:Ca,use:hf,useCallback:function(t,e){return Va().memoizedState=[t,e===void 0?null:e],t},useContext:Ca,useEffect:dS,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,gd(4194308,4,w_.bind(null,e,t),a)},useLayoutEffect:function(t,e){return gd(4194308,4,t,e)},useInsertionEffect:function(t,e){gd(4,2,t,e)},useMemo:function(t,e){var a=Va();e=e===void 0?null:e;var n=t();if(yr){hs(!0);try{t()}finally{hs(!1)}}return a.memoizedState=[n,e],n},useReducer:function(t,e,a){var n=Va();if(a!==void 0){var i=a(e);if(yr){hs(!0);try{a(e)}finally{hs(!1)}}}else i=e;return n.memoizedState=n.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},n.queue=t,t=t.dispatch=Ww.bind(null,Je,t),[n.memoizedState,t]},useRef:function(t){var e=Va();return t={current:t},e.memoizedState=t},useState:function(t){t=Bm(t);var e=t.queue,a=B_.bind(null,Je,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Jg,useDeferredValue:function(t,e){var a=Va();return Qg(a,t,e)},useTransition:function(){var t=Bm(!1);return t=D_.bind(null,Je,t.queue,!0,!1),Va().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var n=Je,i=Va();if($e){if(a===void 0)throw Error(ee(407));a=a()}else{if(a=e(),Tt===null)throw Error(ee(349));(rt&127)!==0||h_(n,e,a)}i.memoizedState=a;var s={value:a,getSnapshot:e};return i.queue=s,dS(m_.bind(null,n,s,t),[t]),n.flags|=2048,Ao(9,{destroy:void 0},p_.bind(null,n,s,a,e),null),a},useId:function(){var t=Va(),e=Tt.identifierPrefix;if($e){var a=li,n=oi;a=(n&~(1<<32-pn(n)-1)).toString(32)+a,e="_"+e+"R_"+a,a=Hd++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=Fw++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:jg,useFormState:lS,useActionState:lS,useOptimistic:function(t){var e=Va();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=$g.bind(null,Je,!0,a),a.dispatch=e,[t,e]},useMemoCache:Yg,useCacheRefresh:function(){return Va().memoizedState=qw.bind(null,Je)},useEffectEvent:function(t){var e=Va(),a={impl:t};return e.memoizedState=a,function(){if((xt&2)!==0)throw Error(ee(440));return a.impl.apply(void 0,arguments)}}},H_={readContext:Ca,use:hf,useCallback:I_,useContext:Ca,useEffect:Kg,useImperativeHandle:T_,useInsertionEffect:C_,useLayoutEffect:A_,useMemo:E_,useReducer:md,useRef:M_,useState:function(){return md(Fi)},useDebugValue:Jg,useDeferredValue:function(t,e){var a=$t();return R_(a,At.memoizedState,t,e)},useTransition:function(){var t=md(Fi)[0],e=$t().memoizedState;return[typeof t=="boolean"?t:Su(t),e]},useSyncExternalStore:f_,useId:U_,useHostTransitionStatus:jg,useFormState:uS,useActionState:uS,useOptimistic:function(t,e){var a=$t();return v_(a,At,t,e)},useMemoCache:Yg,useCacheRefresh:O_,useEffectEvent:L_},Xw={readContext:Ca,use:hf,useCallback:I_,useContext:Ca,useEffect:Kg,useImperativeHandle:T_,useInsertionEffect:C_,useLayoutEffect:A_,useMemo:E_,useReducer:Kp,useRef:M_,useState:function(){return Kp(Fi)},useDebugValue:Jg,useDeferredValue:function(t,e){var a=$t();return At===null?Qg(a,t,e):R_(a,At.memoizedState,t,e)},useTransition:function(){var t=Kp(Fi)[0],e=$t().memoizedState;return[typeof t=="boolean"?t:Su(t),e]},useSyncExternalStore:f_,useId:U_,useHostTransitionStatus:jg,useFormState:cS,useActionState:cS,useOptimistic:function(t,e){var a=$t();return At!==null?v_(a,At,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Yg,useCacheRefresh:O_,useEffectEvent:L_};function Jp(t,e,a,n){e=t.memoizedState,a=a(n,e),a=a==null?e:It({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var zm={enqueueSetState:function(t,e,a){t=t._reactInternals;var n=mn(),i=_s(n);i.payload=e,a!=null&&(i.callback=a),e=bs(t,i,n),e!==null&&(tn(e,t,n),Hl(e,t,n))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var n=mn(),i=_s(n);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=bs(t,i,n),e!==null&&(tn(e,t,n),Hl(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=mn(),n=_s(a);n.tag=2,e!=null&&(n.callback=e),e=bs(t,n,a),e!==null&&(tn(e,t,a),Hl(e,t,a))}};function fS(t,e,a,n,i,s,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,s,r):e.prototype&&e.prototype.isPureReactComponent?!$l(a,n)||!$l(i,s):!0}function hS(t,e,a,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&zm.enqueueReplaceState(e,e.state,null)}function _r(t,e){var a=e;if("ref"in e){a={};for(var n in e)n!=="ref"&&(a[n]=e[n])}if(t=t.defaultProps){a===e&&(a=It({},a));for(var i in t)a[i]===void 0&&(a[i]=t[i])}return a}function G_(t){Dd(t)}function V_(t){console.error(t)}function q_(t){Dd(t)}function Vd(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function pS(t,e,a){try{var n=t.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Hm(t,e,a){return a=_s(a),a.tag=3,a.payload={element:null},a.callback=function(){Vd(t,e)},a}function W_(t){return t=_s(t),t.tag=3,t}function X_(t,e,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var s=n.value;t.payload=function(){return i(s)},t.callback=function(){pS(e,a,n)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){pS(e,a,n),typeof i!="function"&&(Cs===null?Cs=new Set([this]):Cs.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})})}function Yw(t,e,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=a.alternate,e!==null&&gr(e,a,i,!0),a=Ia.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Ua===null?Qd():a.alternate===null&&Qt===0&&(Qt=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Bd?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([n]):e.add(n),nm(t,n,i)),!1;case 22:return a.flags|=65536,n===Bd?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([n]):a.add(n)),nm(t,n,i)),!1}throw Error(ee(435,a.tag))}return nm(t,n,i),Qd(),!1}if($e)return e=Ia.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,n!==Im&&(t=Error(ee(422),{cause:n}),tu(En(t,a)))):(n!==Im&&(e=Error(ee(423),{cause:n}),tu(En(e,a))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,n=En(n,a),i=Hm(t.stateNode,n,i),Zp(t,i),Qt!==4&&(Qt=2)),!1;var s=Error(ee(520),{cause:n});if(s=En(s,a),Zl===null?Zl=[s]:Zl.push(s),Qt!==4&&(Qt=2),e===null)return!0;n=En(n,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=i&-i,a.lanes|=t,t=Hm(a.stateNode,n,t),Zp(a,t),!1;case 1:if(e=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Cs===null||!Cs.has(s))))return a.flags|=65536,i&=-i,a.lanes|=i,i=W_(i),X_(i,t,a,n),Zp(a,i),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var ex=Error(ee(461)),na=!1;function oa(t,e,a,n){e.child=t===null?r_(e,null,a,n):Sr(e,t.child,a,n)}function mS(t,e,a,n,i){a=a.render;var s=e.ref;if("ref"in n){var r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}else r=n;return xr(e),n=Vg(t,e,a,r,s,i),o=qg(),t!==null&&!na?(Wg(t,e,i),ki(t,e,i)):($e&&o&&cf(e),e.flags|=1,oa(t,e,n,i),e.child)}function gS(t,e,a,n,i){if(t===null){var s=a.type;return typeof s=="function"&&!Pg(s)&&s.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=s,Y_(t,e,s,n,i)):(t=fd(a.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!ax(t,i)){var r=s.memoizedProps;if(a=a.compare,a=a!==null?a:$l,a(r,n)&&t.ref===e.ref)return ki(t,e,i)}return e.flags|=1,t=Ni(s,n),t.ref=e.ref,t.return=e,e.child=t}function Y_(t,e,a,n,i){if(t!==null){var s=t.memoizedProps;if($l(s,n)&&t.ref===e.ref)if(na=!1,e.pendingProps=n=s,ax(t,i))(t.flags&131072)!==0&&(na=!0);else return e.lanes=t.lanes,ki(t,e,i)}return Gm(t,e,a,n,i)}function Z_(t,e,a,n){var i=n.children,s=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((e.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,t!==null){for(n=e.child=t.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~s}else n=0,e.child=null;return xS(t,e,s,a,n)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&pd(e,s!==null?s.cachePool:null),s!==null?sS(e,s):Um(),u_(e);else return n=e.lanes=536870912,xS(t,e,s!==null?s.baseLanes|a:a,a,n)}else s!==null?(pd(e,s.cachePool),sS(e,s),Ls(),e.memoizedState=null):(t!==null&&pd(e,null),Um(),Ls());return oa(t,e,i,a),e.child}function Wl(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function xS(t,e,a,n,i){var s=Bg();return s=s===null?null:{parent:aa._currentValue,pool:s},e.memoizedState={baseLanes:a,cachePool:s},t!==null&&pd(e,null),Um(),u_(e),t!==null&&gr(t,e,n,!0),e.childLanes=i,null}function xd(t,e){return e=gf({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function vS(t,e,a){return Sr(e,t.child,null,a),t=xd(e,e.pendingProps),t.flags|=2,un(e),e.memoizedState=null,t}function Zw(t,e,a){var n=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,t===null){if($e){if(n.mode==="hidden")return t=xd(e,n),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Wl(null,t);if(Om(e),(t=Nt)?(t=Zb(t,Rn),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Is!==null?{id:oi,overflow:li}:null,retryLane:536870912,hydrationErrors:null},a=$y(t),a.return=e,e.child=a,ga=e,Nt=null)):t=null,t===null)throw Es(e);return e.lanes=536870912,null}return xd(e,n)}var s=t.memoizedState;if(s!==null){var r=s.dehydrated;if(Om(e),i)if(e.flags&256)e.flags&=-257,e=vS(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(ee(558));else if(na||gr(t,e,a,!1),i=(a&t.childLanes)!==0,na||i){if(Rs.current===null){if(n=Tt,n!==null&&(r=Ly(n,a),r!==0&&r!==s.retryLane))throw s.retryLane=r,Ar(t,r),tn(n,t,r),ex;Qd()}e=vS(t,e,a)}else t=s.treeContext,Nt=Dn(r.nextSibling),ga=e,$e=!0,ys=null,Rn=!1,t!==null&&t_(e,t),e=xd(e,n),e.flags|=134221824;return e}return t=Ni(t.child,{mode:n.mode,children:n.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Qr(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(ee(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function Gm(t,e,a,n,i){return xr(e),a=Vg(t,e,a,n,void 0,i),n=qg(),t!==null&&!na?(Wg(t,e,i),ki(t,e,i)):($e&&n&&cf(e),e.flags|=1,oa(t,e,a,i),e.child)}function SS(t,e,a,n,i,s){return xr(e),e.updateQueue=null,a=d_(e,n,a,i),c_(t),n=qg(),t!==null&&!na?(Wg(t,e,s),ki(t,e,s)):($e&&n&&cf(e),e.flags|=1,oa(t,e,a,s),e.child)}function yS(t,e,a,n,i){if(xr(e),e.stateNode===null){var s=lo,r=a.contextType;typeof r=="object"&&r!==null&&(s=Ca(r)),s=new a(n,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=zm,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=n,s.state=e.memoizedState,s.refs={},kg(e),r=a.contextType,s.context=typeof r=="object"&&r!==null?Ca(r):lo,s.state=e.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(Jp(e,a,r,n),s.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&zm.enqueueReplaceState(s,s.state,null),Vl(e,n,s,i),Gl(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){s=e.stateNode;var o=e.memoizedProps,l=_r(a,o);s.props=l;var u=s.context,f=a.contextType;r=lo,typeof f=="object"&&f!==null&&(r=Ca(f));var p=a.getDerivedStateFromProps;f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||u!==r)&&hS(e,s,n,r),ds=!1;var c=e.memoizedState;s.state=c,Vl(e,n,s,i),Gl(),u=e.memoizedState,o||c!==u||ds?(typeof p=="function"&&(Jp(e,a,p,n),u=e.memoizedState),(l=ds||fS(e,a,l,n,c,u,r))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=u),s.props=n,s.state=u,s.context=r,n=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{s=e.stateNode,Nm(t,e),r=e.memoizedProps,f=_r(a,r),s.props=f,p=e.pendingProps,c=s.context,u=a.contextType,l=lo,typeof u=="object"&&u!==null&&(l=Ca(u)),o=a.getDerivedStateFromProps,(u=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==p||c!==l)&&hS(e,s,n,l),ds=!1,c=e.memoizedState,s.state=c,Vl(e,n,s,i),Gl();var h=e.memoizedState;r!==p||c!==h||ds||t!==null&&t.dependencies!==null&&Od(t.dependencies)?(typeof o=="function"&&(Jp(e,a,o,n),h=e.memoizedState),(f=ds||fS(e,a,f,n,c,h,l)||t!==null&&t.dependencies!==null&&Od(t.dependencies))?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,h,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,h,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=h),s.props=n,s.state=h,s.context=l,n=f):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),n=!1)}return s=n,Qr(t,e),n=(e.flags&128)!==0,s||n?(s=e.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&n?(e.child=Sr(e,t.child,null,i),e.child=Sr(e,null,a,i)):oa(t,e,a,i),e.memoizedState=s.state,t=e.child):t=ki(t,e,i),t}function _S(t,e,a,n){return mr(),e.flags|=256,oa(t,e,a,n),e.child}var Vm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qm(t){return{baseLanes:t,cachePool:n_()}}function Wm(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=dn),t}function K_(t,e,a){var n=e.pendingProps,i=!1,s=(e.flags&128)!==0,r;if((r=s)||(r=t!==null&&t.memoizedState===null?!1:(wa.current&2)!==0),r&&(i=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if($e){if(i?Ms(e):Ls(),(t=Nt)?(t=Zb(t,Rn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Is!==null?{id:oi,overflow:li}:null,retryLane:536870912,hydrationErrors:null},a=$y(t),a.return=e,e.child=a,ga=e,Nt=null)):t=null,t===null)throw Es(e);return px(t)?e.lanes=32:e.lanes=536870912,null}return s=n.children,n=n.fallback,i?(Ls(),i=e.mode,s=gf({mode:"hidden",children:s},i),n=dr(n,i,a,null),s.return=e,n.return=e,s.sibling=n,e.child=s,n=e.child,n.memoizedState=qm(a),n.childLanes=Wm(t,r,a),e.memoizedState=Vm,Wl(null,n)):(Ms(e),tx(e,s))}var o=t.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return Kw(t,e,s,r,n,l,o,a)}return i?(Ls(),i=n.fallback,s=e.mode,o=t.child,l=o.sibling,n=Ni(o,{mode:"hidden",children:n.children}),n.subtreeFlags=o.subtreeFlags&1206910976,l!==null?i=Ni(l,i):(i=dr(i,s,a,null),i.flags|=2),i.return=e,n.return=e,n.sibling=i,e.child=n,Wl(null,n),n=e.child,i=t.child.memoizedState,i===null?i=qm(a):(s=i.cachePool,s!==null?(o=aa._currentValue,s=s.parent!==o?{parent:o,pool:o}:s):s=n_(),i={baseLanes:i.baseLanes|a,cachePool:s}),n.memoizedState=i,n.childLanes=Wm(t,r,a),e.memoizedState=Vm,Wl(t.child,n)):(Ms(e),a=t.child,t=a.sibling,a=Ni(a,{mode:"visible",children:n.children}),a.return=e,a.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=a,e.memoizedState=null,a)}function tx(t,e){return e=gf({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function gf(t,e){return t=en(22,t,null,e),t.lanes=0,t}function jc(t,e,a){return Sr(e,t.child,null,a),t=tx(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Kw(t,e,a,n,i,s,r,o){if(a)return e.flags&256?(Ms(e),e.flags&=-257,jc(t,e,o)):e.memoizedState!==null?(Ls(),e.child=t.child,e.flags|=128,null):(Ls(),s=i.fallback,r=e.mode,i=gf({mode:"visible",children:i.children},r),s=dr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,Sr(e,t.child,null,o),i=e.child,i.memoizedState=qm(o),i.childLanes=Wm(t,n,o),e.memoizedState=Vm,Wl(null,i));if(Ms(e),px(s)){if(n=s.nextSibling&&s.nextSibling.dataset,n)var l=n.dgst;return n=l,n!==""&&(i=Error(ee(419)),i.stack="",i.digest=n,tu({value:i,source:null,stack:null})),jc(t,e,o)}if(na||gr(t,e,o,!1),n=(o&t.childLanes)!==0,na||n){if(Rs.current!==null)return jc(t,e,o);if(n=Tt,n!==null&&(i=Ly(n,o),i!==0&&i!==r.retryLane))throw r.retryLane=i,Ar(t,i),tn(n,t,i),ex;return gg(s)||Qd(),jc(t,e,o)}return gg(s)?(e.flags|=192,e.child=t.child,null):(t=r.treeContext,Nt=Dn(s.nextSibling),ga=e,$e=!0,ys=null,Rn=!1,t!==null&&t_(e,t),e=tx(e,i.children),e.flags|=134221824,e)}function bS(t,e,a){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),hd(t.return,e,a)}function MS(t){for(var e=null;t!==null;){var a=t.alternate;a!==null&&kd(a)===null&&(e=t),t=t.sibling}return e}function $c(t,e,a,n,i,s){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:s}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=a,r.tailMode=i,r.treeForkCount=s)}function Qp(t){var e=t.child;for(t.child=null;e!==null;){var a=e.sibling;e.sibling=t.child,t.child=e,e=a}}function Xm(t,e,a){var n=e.pendingProps,i=n.revealOrder,s=n.tail;n=n.children;var r=wa.current;if(e.flags&128)return nu(e,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,e.flags|=128):r&=1,nu(e,r),i==="backwards"&&t!==null?(Qp(t),oa(t,e,n,a),Qp(t)):oa(t,e,n,a),n=$e?eu:0,!o&&t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bS(t,a,e);else if(t.tag===19)bS(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"backwards":a=MS(e.child),a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null,Qp(e)),$c(e,!0,i,null,s,n);break;case"unstable_legacy-backwards":for(a=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&kd(t)===null){e.child=i;break}t=i.sibling,i.sibling=a,a=i,i=t}$c(e,!0,a,null,s,n);break;case"together":$c(e,!1,null,null,void 0,n);break;case"independent":e.memoizedState=null;break;default:a=MS(e.child),a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null),$c(e,!1,i,a,s,n)}return e.child}function LS(t,e,a){var n=e.pendingProps;return ms(e,e.type,n.value),oa(t,e,n.children,a),e.child}function ki(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Ns|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(gr(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,a=Ni(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Ni(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function ax(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Od(t)))}function Jw(t,e,a){switch(e.tag){case 3:Td(e,e.stateNode.containerInfo),ms(e,aa,t.memoizedState.cache),mr();break;case 27:case 5:Sm(e);break;case 4:Td(e,e.stateNode.containerInfo);break;case 10:ms(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Om(e),null;break;case 13:var n=e.memoizedState;if(n!==null){if(n.dehydrated!==null)return Ms(e),e.flags|=128,null;n=gr(t,e,a,!1);var i=e.child.childLanes;return n||(a&i)!==0?K_(t,e,a):(Ms(e),t=ki(t,e,a),t!==null?t.sibling:null)}Ms(e);break;case 19:if(e.flags&128)return Xm(t,e,a);if(i=(t.flags&128)!==0,n=(a&e.childLanes)!==0,n||(gr(t,e,a,!1),n=(a&e.childLanes)!==0),i){if(n)return Xm(t,e,a);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),nu(e,wa.current),n)break;return null;case 22:return e.lanes=0,Z_(t,e,a,e.pendingProps);case 24:ms(e,aa,t.memoizedState.cache)}return ki(t,e,a)}function J_(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)na=!0;else{if(!ax(t,a)&&(e.flags&128)===0)return na=!1,Jw(t,e,a);na=(t.flags&131072)!==0}else na=!1,$e&&(e.flags&1048576)!==0&&e_(e,eu,e.index);switch(e.lanes=0,e.tag){case 16:e:{var n=e.pendingProps;if(t=rr(e.elementType),e.type=t,typeof t=="function")Pg(t)?(n=_r(t,n),e.tag=1,e=yS(null,e,t,n,a)):(e.tag=0,e=Gm(null,e,t,n,a));else{if(t!=null){var i=t.$$typeof;if(i===_g){e.tag=11,e=mS(null,e,t,n,a);break e}else if(i===bg){e.tag=14,e=gS(null,e,t,n,a);break e}else if(i===si){e.tag=10,e.type=t,e=LS(null,e,a);break e}}throw e=xm(t)||t,Error(ee(306,e,""))}}return e;case 0:return Gm(t,e,e.type,e.pendingProps,a);case 1:return n=e.type,i=_r(n,e.pendingProps),yS(t,e,n,i,a);case 3:e:{if(Td(e,e.stateNode.containerInfo),t===null)throw Error(ee(387));n=e.pendingProps;var s=e.memoizedState;i=s.element,Nm(t,e),Vl(e,n,null,a);var r=e.memoizedState;if(n=r.cache,ms(e,aa,n),n!==s.cache&&Rm(e,[aa],a,!0),Gl(),n=r.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=_S(t,e,n,a);break e}else if(n!==i){i=En(Error(ee(424)),e),tu(i),e=_S(t,e,n,a);break e}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Nt=Dn(t.firstChild),ga=e,$e=!0,ys=null,Rn=!0,a=r_(e,null,n,a),e.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(mr(),n===i){e=ki(t,e,a);break e}oa(t,e,n,a)}e=e.child}return e;case 26:return Qr(t,e),t===null?(a=QS(e.type,null,e.pendingProps,null))?e.memoizedState=a:$e||(e.stateNode=kb(e.type,e.pendingProps,Ss.current,e)):e.memoizedState=QS(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Sm(e),t===null&&$e&&(n=e.stateNode=Kb(e.type,e.pendingProps,Ss.current),ga=e,Rn=!0,i=Nt,Us(e.type)?(xg=i,Nt=Dn(n.firstChild)):Nt=i),oa(t,e,e.pendingProps.children,a),Qr(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&$e&&((i=n=Nt)&&(n=GT(n,e.type,e.pendingProps,Rn),n!==null?(e.stateNode=n,ga=e,Nt=Dn(n.firstChild),Rn=!1,i=!0):i=!1),i||Es(e)),Sm(e),i=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,n=s.children,hg(i,s)?n=null:r!==null&&hg(i,r)&&(e.flags|=32),e.memoizedState!==null&&(i=Vg(t,e,kw,null,null,a),No._currentValue=i),Qr(t,e),oa(t,e,n,a),e.child;case 6:return t===null&&$e&&((t=a=Nt)&&(a=VT(a,e.pendingProps,Rn),a!==null?(e.stateNode=a,ga=e,Nt=null,t=!0):t=!1),t||Es(e)),null;case 13:return K_(t,e,a);case 4:return Td(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Sr(e,null,n,a):oa(t,e,n,a),e.child;case 11:return mS(t,e,e.type,e.pendingProps,a);case 7:return n=e.pendingProps,Qr(t,e),oa(t,e,n,a),e.child;case 8:return oa(t,e,e.pendingProps.children,a),e.child;case 12:return oa(t,e,e.pendingProps.children,a),e.child;case 10:return LS(t,e,a);case 9:return i=e.type._context,n=e.pendingProps.children,xr(e),i=Ca(i),n=n(i),e.flags|=1,oa(t,e,n,a),e.child;case 14:return gS(t,e,e.type,e.pendingProps,a);case 15:return Y_(t,e,e.type,e.pendingProps,a);case 19:return Xm(t,e,a);case 31:return Zw(t,e,a);case 22:return Z_(t,e,a,e.pendingProps);case 24:return xr(e),n=Ca(aa),t===null?(i=Bg(),i===null&&(i=Tt,s=Og(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=a),i=s),e.memoizedState={parent:n,cache:i},kg(e),ms(e,aa,i)):((t.lanes&a)!==0&&(Nm(t,e),Vl(e,null,null,a),Gl()),i=t.memoizedState,s=e.memoizedState,i.parent!==n?(i={parent:n,cache:n},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),ms(e,aa,n)):(n=s.cache,ms(e,aa,n),n!==i.cache&&Rm(e,[aa],a,!0))),oa(t,e,e.pendingProps.children,a),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),n=e.pendingProps,n.name!=null&&n.name!=="auto"?e.flags|=t===null?18882560:18874368:$e&&cf(e),t!==null&&t.memoizedProps.name!==n.name?e.flags|=4194816:Qr(t,e),oa(t,e,n.children,a),e.child;case 29:throw e.pendingProps}throw Error(ee(156,e.tag))}function Ei(t){t.flags|=4}function jp(t,e,a,n,i){var s;if((s=(t.mode&32)!==0)&&(s=a===null?ey(e,n):ey(e,n)&&(n.src!==a.src||n.srcSet!==a.srcSet)),s){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(Cb())t.flags|=8192;else throw hr=Bd,Fg}else t.flags&=-16777217}function CS(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!$b(e))if(Cb())t.flags|=8192;else throw hr=Bd,Fg}function ed(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?_y():536870912,t.lanes|=e,wo|=e)}function Tl(t,e){if(!$e)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null;break;default:for(e=t.tail,a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null}}function Dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(e)for(var i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&1206910976,n|=i.flags&1206910976,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=a,e}function Qw(t,e,a){var n=e.pendingProps;switch(Ug(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(e),null;case 1:return Dt(e),null;case 3:return a=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Pi(aa),Mo(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Kr(e)?Ei(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Yp())),Dt(e),null;case 26:var i=e.type,s=e.memoizedState;return t===null?(Ei(e),s!==null?(Dt(e),CS(e,s)):(Dt(e),jp(e,i,null,n,a))):s?s!==t.memoizedState?(Ei(e),Dt(e),CS(e,s)):(Dt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==n&&Ei(e),Dt(e),jp(e,i,t,n,a)),null;case 27:if(Id(e),a=Ss.current,i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Ei(e);else{if(!n){if(e.stateNode===null)throw Error(ee(166));return Dt(e),e.subtreeFlags&=-33554433,null}t=ui.current,Kr(e)?jv(e,t):(t=Kb(i,n,a),e.stateNode=t,Ei(e))}return Dt(e),e.subtreeFlags&=-33554433,null;case 5:if(Id(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Ei(e);else{if(!n){if(e.stateNode===null)throw Error(ee(166));return Dt(e),e.subtreeFlags&=-33554433,null}if(s=ui.current,Kr(e))jv(e,s);else{var r=ou(Ss.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof n.is=="string"?r.createElement("select",{is:n.is}):r.createElement("select"),n.multiple?s.multiple=!0:n.size&&(s.size=n.size);break;default:s=typeof n.is=="string"?r.createElement(i,{is:n.is}):r.createElement(i)}}s[La]=e,s[nn]=n;e:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break e;for(;r.sibling===null;){if(r.return===null||r.return===e)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=s;e:switch(Ta(s,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Ei(e)}}return Dt(e),e.subtreeFlags&=-33554433,jp(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&Ei(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(ee(166));if(t=Ss.current,Kr(e)){if(t=e.stateNode,a=e.memoizedProps,n=null,i=ga,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}t[La]=e,t=!!(t.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Bb(t.nodeValue,a)),t||Es(e,!0)}else t=ou(t).createTextNode(n),t[La]=e,e.stateNode=t}return Dt(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(n=Kr(e),a!==null){if(t===null){if(!n)throw Error(ee(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(557));t[La]=e}else mr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Dt(e),t=!1}else a=Yp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(un(e),e):(un(e),null);if((e.flags&128)!==0)throw Error(ee(558))}return Dt(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Kr(e),n!==null&&n.dehydrated!==null){if(t===null){if(!i)throw Error(ee(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(ee(317));i[La]=e}else mr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Dt(e),i=!1}else i=Yp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(un(e),e):(un(e),null)}return un(e),(e.flags&128)!==0?(e.lanes=a,e):(a=n!==null,t=t!==null&&t.memoizedState!==null,a&&(n=e.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),ed(e,e.updateQueue),Dt(e),null);case 4:return Mo(),t===null&&dx(e.stateNode.containerInfo),e.flags|=67108864,Dt(e),null;case 10:return Pi(e.type),Dt(e),null;case 19:if(Hg(e),n=e.memoizedState,n===null)return Dt(e),null;if(i=(e.flags&128)!==0,s=n.rendering,s===null)if(i)Tl(n,!1);else{if(Qt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(s=kd(t),s!==null){for(e.flags|=128,Tl(n,!1),t=s.updateQueue,e.updateQueue=t,ed(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)jy(a,t),a=a.sibling;return nu(e,wa.current&1|2),$e&&Ri(e,n.treeForkCount),e.child}t=t.sibling}n.tail!==null&&fn()>Kd&&(e.flags|=128,i=!0,Tl(n,!1),e.lanes=4194304)}else{if(!i)if(t=kd(s),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,ed(e,t),Tl(n,!0),n.tail===null&&n.tailMode!=="collapsed"&&n.tailMode!=="visible"&&!s.alternate&&!$e)return Dt(e),null}else 2*fn()-n.renderingStartTime>Kd&&a!==536870912&&(e.flags|=128,i=!0,Tl(n,!1),e.lanes=4194304);n.isBackwards?(s.sibling=e.child,e.child=s):(t=n.last,t!==null?t.sibling=s:e.child=s,n.last=s)}if(n.tail!==null){t=n.tail;e:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return n.rendering=t,n.tail=t.sibling,n.renderingStartTime=fn(),t.sibling=null,s=wa.current,s=i?s&1|2:s&1,n.tailMode==="visible"||n.tailMode==="collapsed"||!a||$e?nu(e,s):(a=s,Pt(Ia,e),Pt(wa,a),Ua===null&&(Ua=e)),$e&&Ri(e,n.treeForkCount),t}return Dt(e),null;case 22:case 23:return un(e),zg(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(a&536870912)!==0&&(e.flags&128)===0&&(Dt(e),e.subtreeFlags&6&&(e.flags|=8192)):Dt(e),a=e.updateQueue,a!==null&&ed(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(e.flags|=2048),t!==null&&Aa(fr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Pi(aa),Dt(e),null;case 25:return null;case 30:return e.flags|=33554432,Dt(e),null}throw Error(ee(156,e.tag))}function jw(t,e){switch(Ug(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Pi(aa),Mo(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Id(e),null;case 31:if(e.memoizedState!==null){if(un(e),e.alternate===null)throw Error(ee(340));mr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(un(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));mr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Hg(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return Mo(),null;case 10:return Pi(e.type),null;case 22:case 23:return un(e),zg(),t!==null&&Aa(fr),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Pi(aa),null;case 25:return null;default:return null}}function Q_(t,e){switch(Ug(e),e.tag){case 3:Pi(aa),Mo();break;case 26:case 27:case 5:Id(e);break;case 4:Mo();break;case 31:e.memoizedState!==null&&un(e);break;case 13:un(e);break;case 19:Hg(e);break;case 10:Pi(e.type);break;case 22:case 23:un(e),zg(),t!==null&&Aa(fr);break;case 24:Pi(aa)}}function yu(t,e){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){n=void 0;var s=a.create,r=a.inst;n=s(),r.destroy=n}a=a.next}while(a!==i)}}catch(o){Lt(e,e.return,o)}}function Ds(t,e,a){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&t)===t){var r=n.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,i=e;var l=a,u=o;try{u()}catch(f){Lt(i,l,f)}}}n=n.next}while(n!==s)}}catch(f){Lt(e,e.return,f)}}function j_(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{l_(e,a)}catch(n){Lt(t,t.return,n)}}}function $_(t,e,a){a.props=_r(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(n){Lt(t,e,n)}}function ni(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:var i=t.stateNode,s=Oi(t.memoizedProps,i);(i.ref===null||i.ref.name!==s)&&(i.ref=Vb(s)),n=i.ref;break;case 7:if(t.stateNode===null){var r=new xn(t);an(t.child,!1,zT,r,void 0,void 0),t.stateNode=r}n=t.stateNode;break;default:n=t.stateNode}typeof a=="function"?t.refCleanup=a(n):a.current=n}}catch(o){Lt(t,e,o)}}function Ma(t,e){var a=t.ref,n=t.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Lt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Lt(t,e,i)}else a.current=null}function qd(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var a=0;a<e.length;a++)Yb(t.stateNode,e[a])}function AS(t){for(var e=t.return;e!==null&&(ix(e)&&Yb(t.stateNode,e.stateNode),!nx(e));)e=e.return}function Xl(t){for(var e=t.return;e!==null&&(ix(e)&&HT(t.stateNode,e.stateNode),!nx(e));)e=e.return}function nx(t){return t.tag===5||t.tag===3||t.tag===27}function ix(t){return t&&t.tag===7&&t.stateNode!==null}function Ym(t){var e=t.type,a=t.memoizedProps,n=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Lt(t,t.return,i)}}function $p(t,e,a){try{var n=t.stateNode;bT(n,t.type,a,e),n[nn]=e}catch(i){Lt(t,t.return,i)}}function eb(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Us(t.type)||t.tag===4}function em(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||eb(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Us(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zm(t,e,a,n){var i=t.tag;if(i===5||i===6)i=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(i,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(i),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=ri)),qd(t,n),pt=!0;else if(i!==4&&(i===27&&(qd(t,n),n=null,Us(t.type)&&(a=t.stateNode,e=null)),t=t.child,t!==null))for(Zm(t,e,a,n),t=t.sibling;t!==null;)Zm(t,e,a,n),t=t.sibling}function Wd(t,e,a,n){var i=t.tag;if(i===5||i===6)i=t.stateNode,e?a.insertBefore(i,e):a.appendChild(i),qd(t,n),pt=!0;else if(i!==4&&(i===27&&(qd(t,n),n=null,Us(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Wd(t,e,a,n),t=t.sibling;t!==null;)Wd(t,e,a,n),t=t.sibling}function tb(t){var e=t.stateNode,a=t.memoizedProps;try{for(var n=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Ta(e,n,a),e[La]=t,e[nn]=a}catch(s){Lt(t,t.return,s)}}var Xd=!1,cn=null;function wS(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Xd=!0)}var ii=null;function TS(){var t=ii;return ii=null,t}var $a=0;function ko(t,e,a,n,i){return $a=0,ab(t.child,e,a,n,i)}function ab(t,e,a,n,i){for(var s=!1;t!==null;){if(t.tag===5){var r=t.stateNode;if(n!==null){var o=pg(r);n.push(o),o.view&&(s=!0)}else s||pg(r).view&&(s=!0);Xd=!0,zb(r,$a===0?e:e+"_"+$a,a),$a++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&i||ab(t.child,e,a,n,i)&&(s=!0));t=t.sibling}return s}function di(t,e){for(;t!==null;)t.tag===5?Hb(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||di(t.child,e)),t=t.sibling}function vd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(vd(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(ee(544));var a=e.name;e=Gi(e.default,e.share),e!=="none"&&(ko(t,a,e,null,!1)||di(t.child,!1))}t=t.sibling}}function Km(t,e){if(t.tag===30){var a=t.stateNode,n=t.memoizedProps,i=Oi(n,a),s=Gi(n.default,a.paired?n.share:n.enter);s!=="none"?ko(t,i,s,null,!1)?(vd(t),a.paired||e||To(t,n.onEnter)):di(t.child,!1):vd(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Km(t,e),t=t.sibling;else vd(t)}function Jm(t){if(cn!==null&&cn.size!==0){var e=cn;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,n=a.name;if(n!=null&&n!=="auto"){var i=e.get(n);if(i!==void 0){var s=Gi(a.default,a.share);if(s!=="none"&&(ko(t,n,s,null,!1)?(s=t.stateNode,i.paired=s,s.paired=i,To(t,a.onShare)):di(t.child,!1)),e.delete(n),e.size===0)break}}}Jm(t)}t=t.sibling}}}function Qm(t){if(t.tag===30){var e=t.memoizedProps,a=Oi(e,t.stateNode),n=cn!==null?cn.get(a):void 0,i=Gi(e.default,n!==void 0?e.share:e.exit);i!=="none"&&(ko(t,a,i,null,!1)?n!==void 0?(i=t.stateNode,n.paired=i,i.paired=n,cn.delete(a),To(t,e.onShare)):To(t,e.onExit):di(t.child,!1)),cn!==null&&Jm(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Qm(t),t=t.sibling;else cn!==null&&Jm(t)}function nb(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,a=Oi(e,t.stateNode);e=Gi(e.default,e.update),t.flags&=-5,e!=="none"&&ko(t,a,e,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&nb(t);t=t.sibling}}function jm(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var e=t.stateNode;e.paired!==null&&(e.paired=null,di(t.child,!1))}jm(t)}t=t.sibling}}function Sd(t){if(t.tag===30)t.stateNode.paired=null,di(t.child,!1),jm(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Sd(t),t=t.sibling;else jm(t)}function ib(t){for(t=t.child;t!==null;)t.tag===30?di(t.child,!1):(t.subtreeFlags&33554432)!==0&&ib(t),t=t.sibling}function sx(t,e,a,n,i,s,r){for(var o=!1;e!==null;){if(e.tag===5){var l=e.stateNode;if(s!==null&&$a<s.length){var u=s[$a],f=pg(l);(u.view||f.view)&&(o=!0);var p;if(p=(t.flags&4)===0)if(f.clip)p=!0;else{p=u.rect;var c=f.rect;p=p.y!==c.y||p.x!==c.x||p.height!==c.height||p.width!==c.width}p&&(t.flags|=4),f.abs?f=!u.abs:(u=u.rect,f=f.rect,f=u.height!==f.height||u.width!==f.width),f&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&zb(l,$a===0?a:a+"_"+$a,i),o&&(t.flags&4)!==0||(ii===null&&(ii=[]),ii.push(l,$a===0?n:n+"_"+$a,e.memoizedProps)),$a++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&r?t.flags|=e.flags&32:sx(t,e.child,a,n,i,s,r)&&(o=!0));e=e.sibling}return o}function sb(t,e){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,n=t.stateNode,i=Oi(a,n),s=Gi(a.default,a.update);if(e){n=n.clones;var r=n===null?null:n.map(TT)}else r=t.memoizedState,t.memoizedState=null;n=t;var o=t.child;$a=0,i=sx(n,o,i,i,s,r,!1),(t.flags&4)!==0&&i&&(e||To(t,a.onUpdate))}else(t.subtreeFlags&33554432)!==0&&sb(t,e);t=t.sibling}}var ha=!1,yt=!1,ei=!1,tm=!1,IS=typeof WeakSet=="function"?WeakSet:Set,pa=null,ti=!1,Ol=!1,Yd=!1,$m=!1;function $w(t,e,a){if(t=t.containerInfo,dg=Po,t=qy(t),Rg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,f=0,p=0,c=t,h=null;t:for(;;){for(var S;c!==n||s!==0&&c.nodeType!==3||(l=o+s),c!==r||i!==0&&c.nodeType!==3||(u=o+i),c.nodeType===3&&(o+=c.nodeValue.length),(S=c.firstChild)!==null;)h=c,c=S;for(;;){if(c===t)break t;if(h===n&&++f===s&&(l=o),h===r&&++p===i&&(u=o),(S=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(fg={focusedElem:t,selectionRange:n},Po=!1,a=(a&335544064)===a,pa=e,e=a?9270:1024;pa!==null;){if(t=pa,a&&(n=t.deletions,n!==null))for(s=0;s<n.length;s++)a&&Qm(n[s]);if(t.alternate===null&&(t.flags&2)!==0)a&&wS(t),td(a);else{if(t.tag===22){if(n=t.alternate,t.memoizedState!==null){n!==null&&n.memoizedState===null&&a&&Qm(n),td(a);continue}else if(n!==null&&n.memoizedState!==null){a&&wS(t),td(a);continue}}n=t.child,(t.subtreeFlags&e)!==0&&n!==null?(n.return=t,pa=n):(a&&nb(t),td(a))}}cn=null}function td(t){for(;pa!==null;){var e=pa,a=t,n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((i&1024)!==0&&n!==null){a=void 0,i=n.memoizedProps,n=n.memoizedState;var s=e.stateNode;try{var r=_r(e.type,i);a=s.getSnapshotBeforeUpdate(r,n),s.__reactInternalSnapshotBeforeUpdate=a}catch(o){Lt(e,e.return,o)}}break;case 3:if((i&1024)!==0){if(n=e.stateNode.containerInfo,a=n.nodeType,a===9)mg(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":mg(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&n!==null&&(a=Oi(n.memoizedProps,n.stateNode),i=e.memoizedProps,i=Gi(i.default,i.update),i!=="none"&&ko(n,a,i,n.memoizedState=[],!0));break;default:if((i&1024)!==0)throw Error(ee(163))}if(n=e.sibling,n!==null){n.return=e.return,pa=n;break}pa=e.return}}function rb(t,e,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ai(t,a),n&4&&yu(5,a);break;case 1:if(ai(t,a),n&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(r){Lt(a,a.return,r)}else{var i=_r(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){Lt(a,a.return,r)}}n&64&&j_(a),n&512&&ni(a,a.return);break;case 3:if(ai(t,a),n&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{l_(t,e)}catch(r){Lt(a,a.return,r)}}break;case 27:e===null&&n&4&&tb(a);case 26:case 5:ai(t,a),e===null&&n&4&&Ym(a),n&512&&ni(a,a.return);break;case 12:ai(t,a);break;case 31:ai(t,a),n&4&&cb(t,a);break;case 13:ai(t,a),n&4&&db(t,a),n&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=dT.bind(null,a),qT(t,a))));break;case 22:if(n=a.memoizedState!==null||ha,!n){var s=e!==null&&e.memoizedState!==null||yt;e=ha,i=yt,ha=n,(yt=s)&&!i?(n=2,(a.subtreeFlags&8772)!==0&&(n|=1),zn(t,a,n)):ai(t,a),ha=e,yt=i}break;case 30:ai(t,a),n&512&&ni(a,a.return);break;case 7:n&512&&ni(a,a.return);default:ai(t,a)}}function eg(t,e){for(t=t.child;t!==null;)ob(t,e),t=t.sibling}function ob(t,e){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(e){var n=a.style;typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none"}else{var i=t.stateNode,s=t.memoizedProps.style,r=s!=null&&s.hasOwnProperty("display")?s.display:null;i.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){Lt(t,t.return,l)}tg(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,pt=!0}catch(l){Lt(t,t.return,l)}break;case 18:try{var o=t.stateNode;e?WS(o,!0):WS(t.stateNode,!1)}catch(l){Lt(t,t.return,l)}break;case 22:case 23:t.memoizedState===null&&eg(t,e);break;default:eg(t,e)}}function tg(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){e:{var a=t,n=e;switch(a.tag){case 4:ob(a,n);break e;case 22:a.memoizedState===null&&tg(a,n);break e;default:tg(a,n)}}t=t.sibling}}function lb(t){var e=t.alternate;e!==null&&(t.alternate=null,lb(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&nf(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var kt=null,Qa=!1;function kn(t,e,a){for(a=a.child;a!==null;)ub(t,e,a),a=a.sibling}function ub(t,e,a){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(hu,a)}catch{}switch(a.tag){case 26:yt||Ma(a,e),kn(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!yt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:yt||Ma(a,e),Xl(a);var n=kt,i=Qa;Us(a.type)&&(kt=a.stateNode,Qa=!1),kn(t,e,a),Jb(a.stateNode,a.type,a.memoizedProps),kt=n,Qa=i;break;case 5:yt||Ma(a,e),Xl(a);case 6:if(a.tag===6&&Xl(a),n=kt,i=Qa,kt=null,kn(t,e,a),kt=n,Qa=i,kt!==null)if(Qa)try{(kt.nodeType===9?kt.body:kt.nodeName==="HTML"?kt.ownerDocument.body:kt).removeChild(a.stateNode),pt=!0}catch(s){Lt(a,e,s)}else try{kt.removeChild(a.stateNode),pt=!0}catch(s){Lt(a,e,s)}break;case 18:kt!==null&&(Qa?(t=kt,qS(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Uo(t)):qS(kt,a.stateNode));break;case 4:n=kt,i=Qa,kt=a.stateNode.containerInfo,Qa=!0,kn(t,e,a),kt=n,Qa=i;break;case 0:case 11:case 14:case 15:Ds(2,a,e),yt||Ds(4,a,e),kn(t,e,a);break;case 1:yt||(Ma(a,e),n=a.stateNode,typeof n.componentWillUnmount=="function"&&$_(a,e,n)),kn(t,e,a);break;case 21:kn(t,e,a);break;case 22:yt=(n=yt)||a.memoizedState!==null,kn(t,e,a),yt=n;break;case 30:Ma(a,e),kn(t,e,a);break;case 7:yt||Ma(a,e),kn(t,e,a);break;default:kn(t,e,a)}}function cb(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Uo(t)}catch(a){Lt(e,e.return,a)}}}function db(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Uo(t)}catch(a){Lt(e,e.return,a)}}function eT(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new IS),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new IS),e;default:throw Error(ee(435,t.tag))}}function ad(t,e){var a=eT(t);e.forEach(function(n){if(!a.has(n)){a.add(n);var i=fT.bind(null,t,n);n.then(i,i)}})}function Ha(t,e,a){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],r=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 27:if(Us(l.type)){kt=l.stateNode,Qa=!1;break e}break;case 5:kt=l.stateNode,Qa=!1;break e;case 3:case 4:kt=l.stateNode.containerInfo,Qa=!0;break e}l=l.return}if(kt===null)throw Error(ee(160));ub(r,o,s),kt=null,Qa=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)fb(e,t,a),e=e.sibling}var Hn=null;function fb(t,e,a){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(i&4&&(n=t.updateQueue,n=n!==null?n.events:null,n!==null))for(var s=0;s<n.length;s++){var r=n[s];r.ref.impl=r.nextImpl}Ha(e,t,a),Ga(t),i&4&&(Ds(3,t,t.return),yu(3,t),Ds(5,t,t.return));break;case 1:Ha(e,t,a),Ga(t),i&512&&(yt||n===null||Ma(n,n.return)),i&64&&ha&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?e:a.concat(e))));break;case 26:if(s=Hn,Ha(e,t,a),Ga(t),i&512&&(yt||n===null||Ma(n,n.return)),i&4)if(i=n!==null?n.memoizedState:null,a=t.memoizedState,n===null)if(a===null)if(t.stateNode===null)if(ha)t.stateNode=kb(t.type,t.memoizedProps,e.containerInfo,t);else{e:{e=t.type,a=t.memoizedProps,i=s.ownerDocument||s;t:switch(e){case"title":n=i.getElementsByTagName("title")[0],(!n||n[gu]||n[La]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(e),i.head.insertBefore(n,i.querySelector("head > title"))),Ta(n,e,a),n[La]=t,ma(n),e=n;break e;case"link":if(s=$S("link","href",i).get(e+(a.href||""))){for(r=0;r<s.length;r++)if(n=s[r],n.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&n.getAttribute("rel")===(a.rel==null?null:a.rel)&&n.getAttribute("title")===(a.title==null?null:a.title)&&n.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(r,1);break t}}n=i.createElement(e),Ta(n,e,a),i.head.appendChild(n);break;case"meta":if(s=$S("meta","content",i).get(e+(a.content||""))){for(r=0;r<s.length;r++)if(n=s[r],n.getAttribute("content")===(a.content==null?null:""+a.content)&&n.getAttribute("name")===(a.name==null?null:a.name)&&n.getAttribute("property")===(a.property==null?null:a.property)&&n.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&n.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(r,1);break t}}n=i.createElement(e),Ta(n,e,a),i.head.appendChild(n);break;default:throw Error(ee(468,e))}n[La]=t,ma(n),e=n}t.stateNode=e}else ha||vg(s,t.type,t.stateNode);else t.stateNode=jS(s,a,t.memoizedProps);else i!==a?(i===null?(e=n.stateNode,e===null||yt||e.parentNode.removeChild(e)):i.count--,a===null?ha||vg(s,t.type,t.stateNode):jS(s,a,t.memoizedProps)):a===null&&t.stateNode!==null&&$p(t,t.memoizedProps,n.memoizedProps);break;case 27:Ha(e,t,a),Ga(t),i&512&&(yt||n===null||Ma(n,n.return)),n!==null&&i&4&&$p(t,t.memoizedProps,n.memoizedProps);break;case 5:if(s=ei,ei=!1,Ha(e,t,a),ei=s,Ga(t),i&512&&(yt||n===null||Ma(n,n.return)),t.flags&32){e=t.stateNode;try{Co(e,""),pt=!0}catch(f){Lt(t,t.return,f)}}i&4&&t.stateNode!=null&&(e=t.memoizedProps,$p(t,e,n!==null?n.memoizedProps:e)),i&1024&&(tm=!0);break;case 6:if(Ha(e,t,a),Ga(t),i&4){if(t.stateNode===null)throw Error(ee(162));e=t.memoizedProps,a=t.stateNode;try{a.nodeValue=e,pt=!0}catch(f){Lt(t,t.return,f)}}break;case 3:if(pt=!1,Md=null,s=Hn,Hn=lu(e.containerInfo),Ha(e,t,a),Hn=s,Ga(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Uo(e.containerInfo)}catch(f){Lt(t,t.return,f)}tm&&(tm=!1,hb(t)),pt=!1;break;case 4:i=ei,ei=ha,n=Uv(),s=Hn,Hn=lu(t.stateNode.containerInfo),Ha(e,t,a),Ga(t),Hn=s,pt&&Ol&&(Yd=!0),pt=n,ei=i;break;case 12:Ha(e,t,a),Ga(t);break;case 31:Ha(e,t,a),Ga(t),i&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,ad(t,e)));break;case 13:Ha(e,t,a),Ga(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(xf=fn()),i&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,ad(t,e)));break;case 22:s=t.memoizedState!==null,r=n!==null&&n.memoizedState!==null;var o=ha,l=yt,u=ei;ha=o||s,ei=u||s,yt=l||r,Ha(e,t,a),yt=l,ei=u,ha=o,Ga(t),i&8192&&(e=t.stateNode,e._visibility=s?e._visibility&-2:e._visibility|1,!s||n===null||r||ha||yt||(e=r||yt,a=ha,n=yt,ha=s||ha,yt=e,us(t,2),ha=a,yt=n),!s&&ei||eg(t,s)),i&4&&(e=t.updateQueue,e!==null&&(a=e.retryQueue,a!==null&&(e.retryQueue=null,ad(t,a))));break;case 19:Ha(e,t,a),Ga(t),i&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,ad(t,e)));break;case 30:i&512&&(yt||n===null||Ma(n,n.return)),i=Uv(),s=Ol,r=(a&335544064)===a,o=t.memoizedProps,Ol=r&&Gi(o.default,o.update)!=="none",Ha(e,t,a),Ga(t),r&&n!==null&&pt&&(t.flags|=4),Ol=s,pt=i;break;case 21:break;case 7:i&512&&(yt||n===null||Ma(n,n.return)),n&&n.stateNode!==null&&(n.stateNode._fragmentFiber=t);default:Ha(e,t,a),Ga(t)}}function Ga(t){var e=t.flags;if(e&2){try{for(var a,n=t.return;n!==null;){if(eb(n)){a=n;break}n=n.return}n=null;for(var i=t.return;i!==null;){if(ix(i)){var s=i.stateNode;n===null?n=[s]:n.push(s)}if(nx(i))break;i=i.return}var r=n;if(a==null)throw Error(ee(160));switch(a.tag){case 27:var o=a.stateNode,l=em(t);Wd(t,l,o,r);break;case 5:var u=a.stateNode;a.flags&32&&(Co(u,""),a.flags&=-33);var f=em(t);Wd(t,f,u,r);break;case 3:case 4:var p=a.stateNode.containerInfo,c=em(t);Zm(t,c,p,r);break;default:throw Error(ee(161))}}catch(h){Lt(t,t.return,h)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hb(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;hb(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,Po=!0,e.reset(),Po=!1),t=t.sibling}}function Jr(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)pb(e,t),e=e.sibling;else sb(e,!1)}function pb(t,e){var a=t.alternate;if(a===null)Km(t,!1);else switch(t.tag){case 3:if($m=ti=!1,TS(),Jr(e,t),!ti&&!Yd){if(t=ii,t!==null)for(var n=0;n<t.length;n+=3){a=t[n];var i=t[n+1];Hb(a,t[n+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+i+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),$m=!0}ii=null;break;case 5:Jr(e,t);break;case 4:n=ti,ti=!1,Jr(e,t),ti&&(Yd=!0),ti=n;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?Km(t,!1):Jr(e,t));break;case 30:n=ti,i=TS(),ti=!1,Jr(e,t),ti&&(t.flags|=4);var s=t.memoizedProps,r=t.stateNode;e=Oi(s,r),r=Oi(a.memoizedProps,r);var o=Gi(s.default,s.update);o==="none"?e=!1:(s=a.memoizedState,a.memoizedState=null,a=t.child,$a=0,e=sx(t,a,e,r,o,s,!0),$a!==(s===null?0:s.length)&&(t.flags|=32)),(t.flags&4)!==0&&e?(To(t,t.memoizedProps.onUpdate),ii=i):i!==null&&(i.push.apply(i,ii),ii=i),ti=(t.flags&32)!==0?!0:n;break;default:Jr(e,t)}}function ai(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)rb(t,e.alternate,e),e=e.sibling}function us(t,e){for(t=t.child;t!==null;){var a=t,n=e;switch(a.tag){case 0:case 11:case 14:case 15:Ds(4,a,a.return),us(a,n);break;case 1:Ma(a,a.return);var i=a.stateNode;typeof i.componentWillUnmount=="function"&&$_(a,a.return,i),us(a,n);break;case 27:(n&2)!==0&&Jb(a.stateNode,a.type,a.memoizedProps);case 5:Ma(a,a.return),a.tag!==5&&a.tag!==27||Xl(a),us(a,n);break;case 6:Xl(a);break;case 26:Ma(a,a.return),i=a.stateNode,a.memoizedState!==null||i===null||yt||i.parentNode.removeChild(i),us(a,n);break;case 22:a.memoizedState===null&&us(a,n);break;case 30:Ma(a,a.return),us(a,n);break;case 7:Ma(a,a.return);default:us(a,n)}t=t.sibling}}function zn(t,e,a){for(a=(e.subtreeFlags&8772)!==0?a:a&-2,e=e.child;e!==null;){var n=e.alternate,i=t,s=e,r=s.flags,o=(a&1)!==0;switch(s.tag){case 0:case 11:case 15:zn(i,s,a),yu(4,s);break;case 1:if(zn(i,s,a),n=s,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(f){Lt(n,n.return,f)}if(n=s,i=n.updateQueue,i!==null){var l=n.stateNode;try{var u=i.shared.hiddenCallbacks;if(u!==null)for(i.shared.hiddenCallbacks=null,i=0;i<u.length;i++)o_(u[i],l)}catch(f){Lt(n,n.return,f)}}o&&r&64&&j_(s),ni(s,s.return);break;case 27:(a&2)!==0&&tb(s);case 5:s.tag!==5&&s.tag!==27||AS(s),zn(i,s,a),o&&n===null&&r&4&&Ym(s),ni(s,s.return);break;case 6:AS(s);break;case 26:l=s.stateNode,s.memoizedState!==null||l===null||ha||vg(lu(l.ownerDocument),s.type,l),zn(i,s,a),o&&n===null&&r&4&&Ym(s),ni(s,s.return);break;case 12:zn(i,s,a);break;case 31:zn(i,s,a),o&&r&4&&cb(i,s);break;case 13:zn(i,s,a),o&&r&4&&db(i,s);break;case 22:s.memoizedState===null&&zn(i,s,a),ni(s,s.return);break;case 30:zn(i,s,a),ni(s,s.return);break;case 7:ni(s,s.return);default:zn(i,s,a)}e=e.sibling}}function rx(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&vu(a))}function ox(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&vu(t))}function Cn(t,e,a,n){var i=(a&335544064)===a;if(e.subtreeFlags&(i?10262:10256))for(e=e.child;e!==null;)mb(t,e,a,n),e=e.sibling;else i&&ib(e)}function mb(t,e,a,n){var i=(a&335544064)===a;i&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&Sd(e);var s=e.flags;switch(e.tag){case 0:case 11:case 15:Cn(t,e,a,n),s&2048&&yu(9,e);break;case 1:Cn(t,e,a,n);break;case 3:Cn(t,e,a,n),i&&$m&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),s&2048&&(s=null,e.alternate!==null&&(s=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==s&&(e.refCount++,s!=null&&vu(s)));break;case 12:if(s&2048){Cn(t,e,a,n),s=e.stateNode;try{var r=e.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,e.alternate===null?"mount":"update",s.passiveEffectDuration,-0)}catch(u){Lt(e,e.return,u)}}else Cn(t,e,a,n);break;case 31:Cn(t,e,a,n);break;case 13:Cn(t,e,a,n);break;case 23:break;case 22:r=e.stateNode,o=e.alternate,e.memoizedState!==null?(i&&o!==null&&o.memoizedState===null&&Sd(o),r._visibility&2?Cn(t,e,a,n):Yl(t,e)):(i&&o!==null&&o.memoizedState!==null&&Sd(e),r._visibility&2?Cn(t,e,a,n):(r._visibility|=2,jr(t,e,a,n,(e.subtreeFlags&10256)!==0||!1))),s&2048&&rx(o,e);break;case 24:Cn(t,e,a,n),s&2048&&ox(e.alternate,e);break;case 30:i&&(s=e.alternate,s!==null&&(di(s.child,!0),di(e.child,!0))),Cn(t,e,a,n);break;default:Cn(t,e,a,n)}}function jr(t,e,a,n,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var s=t,r=e,o=a,l=n,u=r.flags;switch(r.tag){case 0:case 11:case 15:jr(s,r,o,l,i),yu(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?jr(s,r,o,l,i):Yl(s,r):(f._visibility|=2,jr(s,r,o,l,i)),i&&u&2048&&rx(r.alternate,r);break;case 24:jr(s,r,o,l,i),i&&u&2048&&ox(r.alternate,r);break;default:jr(s,r,o,l,i)}e=e.sibling}}function Yl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,n=e,i=n.flags;switch(n.tag){case 22:Yl(a,n),i&2048&&rx(n.alternate,n);break;case 24:Yl(a,n),i&2048&&ox(n.alternate,n);break;default:Yl(a,n)}e=e.sibling}}var or=8192;function ir(t,e,a){if(t.subtreeFlags&or)for(t=t.child;t!==null;)gb(t,e,a),t=t.sibling}function gb(t,e,a){switch(t.tag){case 26:ir(t,e,a),t.flags&or&&(t.memoizedState!==null?iI(a,Hn,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&ty(a,t)));break;case 5:ir(t,e,a),t.flags&or&&(t=t.stateNode,(e&335544128)===e&&ty(a,t));break;case 3:case 4:var n=Hn;Hn=lu(t.stateNode.containerInfo),ir(t,e,a),Hn=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=or,or=16777216,ir(t,e,a),or=n):ir(t,e,a));break;case 30:if((t.flags&or)!==0&&(n=t.memoizedProps.name,n!=null&&n!=="auto")){var i=t.stateNode;i.paired=null,cn===null&&(cn=new Map),cn.set(n,i)}ir(t,e,a);break;default:ir(t,e,a)}}function xb(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Il(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];pa=n,Sb(n,t)}xb(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vb(t),t=t.sibling}function vb(t){switch(t.tag){case 0:case 11:case 15:Il(t),t.flags&2048&&Ds(9,t,t.return);break;case 3:Il(t);break;case 12:Il(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,yd(t)):Il(t);break;default:Il(t)}}function yd(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];pa=n,Sb(n,t)}xb(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ds(8,e,e.return),yd(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,yd(e));break;default:yd(e)}t=t.sibling}}function Sb(t,e){for(;pa!==null;){var a=pa;switch(a.tag){case 0:case 11:case 15:Ds(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:vu(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,pa=n;else e:for(a=t;pa!==null;){n=pa;var i=n.sibling,s=n.return;if(lb(n),n===a){pa=null;break e}if(i!==null){i.return=s,pa=i;break e}pa=s}}}var tT={getCacheForType:function(t){var e=Ca(aa),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return Ca(aa).controller.signal}},aT=typeof WeakMap=="function"?WeakMap:Map,xt=0,Tt=null,nt=null,rt=0,bt=0,on=null,gs=!1,zo=!1,lx=!1,zi=0,Qt=0,Ns=0,pr=0,Zd=0,dn=0,wo=0,Zl=null,ja=null,ag=!1,xf=0,yb=0,Kd=1/0,Jd=null,Cs=null,Xt=0,Vn=null,br=null,ci=0,ng=0,ig=null,_b=null,yo=null,_o=null,bo=null,Kl=0,_d=null;function mn(){return(xt&2)!==0&&rt!==0?rt&-rt:ze.T!==null?cx():Cy()}function bb(){if(dn===0)if((rt&536870912)===0||$e){var t=Vc;Vc<<=1,(Vc&3932160)===0&&(Vc=262144),dn=t}else dn=536870912;return t=Ia.current,t!==null&&(t.flags|=32),dn}function To(t,e){if(e!=null){var a=t.stateNode,n=a.ref;n===null&&(n=a.ref=Vb(Oi(t.memoizedProps,a))),_o===null&&(_o=[]),_o.push(e.bind(null,n))}}function tn(t,e,a){(t===Tt&&(bt===2||bt===9)||t.cancelPendingCommit!==null)&&(Io(t,0),xs(t,rt,dn,!1)),mu(t,a),((xt&2)===0||t!==Tt)&&(t===Tt&&((xt&2)===0&&(pr|=a),Qt===4&&xs(t,rt,dn,!1)),hi(t))}function Mb(t,e,a){if((xt&6)!==0)throw Error(ee(327));var n=!a&&(e&127)===0&&(e&t.expiredLanes)===0||pu(t,e),i=n?sT(t,e):am(t,e,!0),s=n;do{if(i===0){zo&&!n&&xs(t,e,0,!1);break}else{if(a=t.current.alternate,s&&!nT(a)){i=am(t,e,!1),s=!1;continue}if(i===2){if(s=e,t.errorRecoveryDisabledLanes&s)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;e:{var o=t;i=Zl;var l=o.current.memoizedState.isDehydrated;if(l&&(Io(o,r).flags|=256),r=am(o,r,!1),r!==2&&r!==6){if(lx&&!l){o.errorRecoveryDisabledLanes|=s,pr|=s,i=4;break e}s=ja,ja=i,s!==null&&(ja===null?ja=s:ja.push.apply(ja,s))}i=r}if(s=!1,i!==2)continue}}if(i===1){Io(t,0),xs(t,e,0,!0);break}e:{switch(n=t,s=i,s){case 0:case 1:throw Error(ee(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:xs(n,e,dn,!gs);break e;case 2:ja=null;break;case 3:case 5:break;default:throw Error(ee(329))}if((e&62914560)===e&&(i=xf+300-fn(),10<i)){if(xs(n,e,dn,!gs),af(n,0,!0)!==0)break e;ci=e,n.timeoutHandle=fx(ES.bind(null,n,a,ja,Jd,ag,e,dn,pr,wo,gs,s,"Throttled",-0,0),i);break e}ES(n,a,ja,Jd,ag,e,dn,pr,wo,gs,s,null,-0,0)}}break}while(!0);hi(t)}function ES(t,e,a,n,i,s,r,o,l,u,f,p,c,h){t.timeoutHandle=-1;var S=e.subtreeFlags,M=(s&335544064)===s;if(p=null,(M||S&8192||(S&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ri},cn=null,gb(e,s,p),M&&(S=p,M=t.containerInfo,M=(M.nodeType===9?M:M.ownerDocument).__reactViewTransition,M!=null&&(S.count++,S.waitingForViewTransition=!0,S=uu.bind(S),M.finished.then(S,S))),S=(s&62914560)===s?xf-fn():(s&4194048)===s?yb-fn():0,S=sI(p,S),S!==null)){ci=s,t.cancelPendingCommit=S(DS.bind(null,t,e,s,a,n,i,r,o,l,u,f,p,null,c,h)),xs(t,s,r,!u);return}DS(t,e,s,a,n,i,r,o,l,u,f,p)}function nT(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],s=i.getSnapshot;i=i.value;try{if(!gn(s(),i))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xs(t,e,a,n){e=yy(t,e),e&=~Zd,e&=~pr,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var i=e;0<i;){var s=31-pn(i),r=1<<s;n[s]=-1,i&=~r}a!==0&&by(t,a,e)}function vf(){return(xt&6)===0?(_u(0,!1),!1):!0}function ux(){if(nt!==null){if(bt===0)var t=nt.return;else t=nt,Di=wr=null,Xg(t),xo=null,au=0,t=nt;for(;t!==null;)Q_(t.alternate,t),t=t.return;nt=null}}function Io(t,e){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,CT(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ci=0,ux(),Tt=t,nt=a=Ni(t.current,null),rt=e,bt=0,on=null,gs=!1,zo=pu(t,e),lx=!1,wo=dn=Zd=pr=Ns=Qt=0,ja=Zl=null,ag=!1,zi=yy(t,e),lf(),a}function Lb(t,e){Je=null,ze.H=Gd,e===Fo||e===df?(e=nS(),bt=3):e===Fg?(e=nS(),bt=4):bt=e===ex?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,on=e,nt===null&&(Qt=1,Vd(t,En(e,t.current)))}function Cb(){var t=Ia.current;return t===null?!0:(rt&4194048)===rt?Ua===null:(rt&62914560)===rt||(rt&536870912)!==0?t===Ua:!1}function Ab(){var t=ze.H;return ze.H=Gd,t===null?Gd:t}function wb(){var t=ze.A;return ze.A=tT,t}function Qd(){Qt=4,gs||(rt&4194048)!==rt&&Ia.current!==null||(zo=!0),(Ns&134217727)===0&&(pr&134217727)===0||Tt===null||xs(Tt,rt,dn,!1)}function am(t,e,a){var n=xt;xt|=2;var i=Ab(),s=wb();(Tt!==t||rt!==e)&&(Jd=null,Io(t,e)),e=!1;var r=Qt;e:do try{if(bt!==0&&nt!==null){var o=nt,l=on;switch(bt){case 8:ux(),r=6;break e;case 3:case 2:case 9:case 6:Ia.current===null&&(e=!0);var u=bt;if(bt=0,on=null,fo(t,o,l,u),a&&zo){r=0;break e}break;default:u=bt,bt=0,on=null,fo(t,o,l,u)}}iT(),r=Qt;break}catch(f){Lb(t,f)}while(!0);return e&&t.shellSuspendCounter++,Di=wr=null,xt=n,ze.H=i,ze.A=s,nt===null&&(Tt=null,rt=0,lf()),r}function iT(){for(;nt!==null;)Tb(nt)}function sT(t,e){var a=xt;xt|=2;var n=Ab(),i=wb();Tt!==t||rt!==e?(Jd=null,Kd=fn()+500,Io(t,e)):zo=pu(t,e);e:do try{if(bt!==0&&nt!==null){e=nt;var s=on;t:switch(bt){case 1:bt=0,on=null,fo(t,e,s,1);break;case 2:case 9:if(aS(s)){bt=0,on=null,RS(e);break}e=function(){bt!==2&&bt!==9||Tt!==t||(bt=7),hi(t)},s.then(e,e);break e;case 3:bt=7;break e;case 4:bt=5;break e;case 7:aS(s)?(bt=0,on=null,RS(e)):(bt=0,on=null,fo(t,e,s,7));break;case 5:var r=null;switch(nt.tag){case 26:r=nt.memoizedState;case 5:case 27:var o=nt;if(r?$b(r):o.stateNode.complete){bt=0,on=null;var l=o.sibling;if(l!==null)nt=l;else{var u=o.return;u!==null?(nt=u,Sf(u)):nt=null}break t}}bt=0,on=null,fo(t,e,s,5);break;case 6:bt=0,on=null,fo(t,e,s,6);break;case 8:ux(),Qt=6;break e;default:throw Error(ee(462))}}rT();break}catch(f){Lb(t,f)}while(!0);return Di=wr=null,ze.H=n,ze.A=i,xt=a,nt!==null?0:(Tt=null,rt=0,lf(),Qt)}function rT(){for(;nt!==null&&!MA();)Tb(nt)}function Tb(t){var e=J_(t.alternate,t,zi);t.memoizedProps=t.pendingProps,e===null?Sf(t):nt=e}function RS(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=SS(a,e,e.pendingProps,e.type,void 0,rt);break;case 11:e=SS(a,e,e.pendingProps,e.type.render,e.ref,rt);break;case 5:Xg(e);var n=e;n===ga&&($e?(Ud(n),n.tag===5&&n.stateNode!=null&&(Nt=n.stateNode)):(Ud(n),$e=!0));default:Q_(a,e),e=nt=jy(e,zi),e=J_(a,e,zi)}t.memoizedProps=t.pendingProps,e===null?Sf(t):nt=e}function fo(t,e,a,n){Di=wr=null,Xg(e),xo=null,au=0;var i=e.return;try{if(Yw(t,i,e,a,rt)){Qt=1,Vd(t,En(a,t.current)),nt=null;return}}catch(s){if(i!==null)throw nt=i,s;Qt=1,Vd(t,En(a,t.current)),nt=null;return}e.flags&32768?($e||n===1?t=!0:zo||(rt&536870912)!==0?t=!1:(gs=t=!0,(n===2||n===9||n===3||n===6)&&(n=Ia.current,n!==null&&n.tag===13&&(n.flags|=16384))),Ib(e,t)):Sf(e)}function Sf(t){var e=t;do{if((e.flags&32768)!==0){Ib(e,gs);return}t=e.return;var a=Qw(e.alternate,e,zi);if(a!==null){nt=a;return}if(e=e.sibling,e!==null){nt=e;return}nt=e=t}while(e!==null);Qt===0&&(Qt=5)}function Ib(t,e){do{var a=jw(t.alternate,t);if(a!==null){a.flags&=32767,nt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){nt=t;return}nt=t=a}while(t!==null);Qt=6,nt=null}function DS(t,e,a,n,i,s,r,o,l,u,f,p){t.cancelPendingCommit=null;do yf();while(Xt!==0);if((xt&6)!==0)throw Error(ee(327));if(e!==null){if(e===t.current)throw Error(ee(177));t===Tt&&(nt=Tt=null,rt=0),br=e,Vn=t,ci=a,ig=i,_b=n,oT(t,e,a,r,o,l,p)}}function oT(t,e,a,n,i,s,r){var o=e.lanes|e.childLanes;if(ng=o,o|=Dg,NA(t,a,o,n,i,s),_o=null,(a&335544064)===a?(bo=Uw(t),n=10262):(bo=null,n=10256),(e.subtreeFlags&n)!==0||(e.flags&n)!==0?(t.callbackNode=null,t.callbackPriority=0,hT(Ed,function(){return lg(),null})):(t.callbackNode=null,t.callbackPriority=0),Xd=!1,n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=ze.T,ze.T=null,i=vt.p,vt.p=2,s=xt,xt|=4;try{$w(t,e,a)}finally{xt=s,vt.p=i,ze.T=n}}Xt=1,Xd?yo=RT(r,t.containerInfo,bo,sg,rg,uT,og,lg,lT,null,null):(sg(),rg(),og())}function lT(t){if(Xt!==0){var e=Vn.onRecoverableError;e(t,{componentStack:null})}}function uT(){Xt===3&&(Xt=0,pb(br,Vn),Xt=4)}function sg(){if(Xt===1){Xt=0;var t=Vn,e=br,a=ci,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=ze.T,ze.T=null;var i=vt.p;vt.p=2;var s=xt;xt|=4;try{Ol=Yd=!1,fb(e,t,a),a=fg;var r=qy(t.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&Vy(o.ownerDocument.documentElement,o)){if(l!==null&&Rg(o)){var u=l.start,f=l.end;if(f===void 0&&(f=u),"selectionStart"in o)o.selectionStart=u,o.selectionEnd=Math.min(f,o.value.length);else{var p=o.ownerDocument||document,c=p&&p.defaultView||window;if(c.getSelection){var h=c.getSelection(),S=o.textContent.length,M=Math.min(l.start,S),x=l.end===void 0?M:Math.min(l.end,S);!h.extend&&M>x&&(r=x,x=M,M=r);var d=Zv(o,M),m=Zv(o,x);if(d&&m&&(h.rangeCount!==1||h.anchorNode!==d.node||h.anchorOffset!==d.offset||h.focusNode!==m.node||h.focusOffset!==m.offset)){var y=p.createRange();y.setStart(d.node,d.offset),h.removeAllRanges(),M>x?(h.addRange(y),h.extend(m.node,m.offset)):(y.setEnd(m.node,m.offset),h.addRange(y))}}}}for(p=[],h=o;h=h.parentNode;)h.nodeType===1&&p.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var _=p[o];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Po=!!dg,fg=dg=null}finally{xt=s,vt.p=i,ze.T=n}}t.current=e,Xt=2}}function rg(){if(Xt===2){Xt=0;var t=Vn,e=br,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=ze.T,ze.T=null;var n=vt.p;vt.p=2;var i=xt;xt|=4;try{rb(t,e.alternate,e)}finally{xt=i,vt.p=n,ze.T=a}}Xt=3}}function og(){if(Xt===4||Xt===3){Xt=0;var t=yo;yo=null,LA();var e=Vn,a=br,n=ci,i=_b,s=(n&335544064)===n?10262:10256;if((a.subtreeFlags&s)!==0||(a.flags&s)!==0?Xt=5:(Xt=0,br=Vn=null,Eb(e,e.pendingLanes)),s=e.pendingLanes,s===0&&(Cs=null),Cg(n),a=a.stateNode,hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(hu,a,void 0,(a.current.flags&128)===128)}catch{}if(i!==null){a=ze.T,s=vt.p,vt.p=2,ze.T=null;try{for(var r=e.onRecoverableError,o=0;o<i.length;o++){var l=i[o];r(l.value,{componentStack:l.stack})}}finally{ze.T=a,vt.p=s}}if(i=_o,r=bo,bo=null,i!==null&&(_o=null,r===null&&(r=[]),t!==null))for(l=0;l<i.length;l++)a=(0,i[l])(r),a!==void 0&&t.finished.finally(a);(ci&3)!==0&&yf(),hi(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===_d?Kl++:(Kl=0,_d=e):(Kl=0,_d=null),_u(0,!1)}}function Eb(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,vu(e)))}function yf(){return yo!==null&&(yo.skipTransition(),yo=null),sg(),rg(),og(),lg()}function lg(){if(Xt!==5)return!1;var t=Vn,e=ng;ng=0;var a=Cg(ci),n=ze.T,i=vt.p;try{vt.p=32>a?32:a,ze.T=null,a=ig,ig=null;var s=Vn,r=ci;if(Xt=0,br=Vn=null,ci=0,(xt&6)!==0)throw Error(ee(331));var o=xt;if(xt|=4,vb(s.current),mb(s,s.current,r,a),xt=o,_u(0,!1),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(hu,s)}catch{}return!0}finally{vt.p=i,ze.T=n,Eb(t,e)}}function NS(t,e,a){e=En(a,e),e=Hm(t.stateNode,e,2),t=bs(t,e,2),t!==null&&(mu(t,2),hi(t))}function Lt(t,e,a){if(t.tag===3)NS(t,t,a);else for(;e!==null;){if(e.tag===3){NS(e,t,a);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Cs===null||!Cs.has(n))){t=En(a,t),a=W_(2),n=bs(e,a,2),n!==null&&(X_(a,n,e,t),mu(n,2),hi(n));break}}e=e.return}}function nm(t,e,a){var n=t.pingCache;if(n===null){n=t.pingCache=new aT;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(a)||(lx=!0,i.add(a),t=cT.bind(null,t,e,a),e.then(t,t))}function cT(t,e,a){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Tt===t&&(rt&a)===a&&((Qt===4||Qt===3&&(rt&62914560)===rt&&300>fn()-xf)&&(xt&2)===0?Io(t,0):Zd|=a,wo===rt&&(wo=0)),hi(t)}function Rb(t,e){e===0&&(e=_y()),t=Ar(t,e),t!==null&&(mu(t,e),hi(t))}function dT(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Rb(t,a)}function fT(t,e){var a=0;switch(t.tag){case 31:case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(ee(314))}n!==null&&n.delete(e),Rb(t,a)}function hT(t,e){return Mg(t,e)}var Eo=null,$r=null,ug=!1,jd=!1,im=!1,vs=0;function hi(t){t!==$r&&t.next===null&&($r===null?Eo=$r=t:$r=$r.next=t),jd=!0,ug||(ug=!0,mT())}function _u(t,e){if(!im&&jd){im=!0;do for(var a=!1,n=Eo;n!==null;){if(!e)if(t!==0){var i=n.pendingLanes;if(i===0)var s=0;else{var r=n.suspendedLanes,o=n.pingedLanes;s=(1<<31-pn(42|t)+1)-1,s&=i&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,PS(n,s))}else s=rt,s=af(n,n===Tt?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(s&3)===0||pu(n,s)||(a=!0,PS(n,s));n=n.next}while(a);im=!1}}function pT(){Db()}function Db(){jd=ug=!1;var t=0;vs!==0&&LT()&&(t=vs);for(var e=fn(),a=null,n=Eo;n!==null;){var i=n.next,s=Nb(n,e);s===0?(n.next=null,a===null?Eo=i:a.next=i,i===null&&($r=a)):(a=n,(t!==0||(s&3)!==0)&&(jd=!0)),n=i}Xt!==0&&Xt!==5||_u(t,!1),vs!==0&&(vs=0)}function Nb(t,e){for(var a=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var r=31-pn(s),o=1<<r,l=i[r];l===-1?((o&a)===0||(o&n)!==0)&&(i[r]=DA(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}if(e=Tt,a=rt,a=af(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,a===0||t===e&&(bt===2||bt===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&Op(n),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||pu(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(n!==null&&Op(n),Cg(a)){case 2:case 8:a=vy;break;case 32:a=Ed;break;case 268435456:a=Sy;break;default:a=Ed}return n=Pb.bind(null,t),a=Mg(a,n),t.callbackPriority=e,t.callbackNode=a,e}return n!==null&&n!==null&&Op(n),t.callbackPriority=2,t.callbackNode=null,2}function Pb(t,e){if(Xt!==0&&Xt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(yf()&&t.callbackNode!==a)return null;var n=rt;return n=af(t,t===Tt?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(Mb(t,n,e),Nb(t,fn()),t.callbackNode!=null&&t.callbackNode===a?Pb.bind(null,t):null)}function PS(t,e){if(yf())return null;Mb(t,e,!0)}function mT(){AT(function(){(xt&6)!==0?Mg(xy,pT):Db()})}function cx(){if(vs===0){var t=vr;t===0&&(t=Gc,Gc<<=1,(Gc&261888)===0&&(Gc=256)),vs=t}return vs}function US(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ud(t)}function gT(t,e,a,n,i){if(e==="submit"&&a&&a.stateNode===i){var s=US((i[nn]||null).action),r=n.submitter;r&&(e=(e=r[nn]||null)?US(e.formAction):r.getAttribute("formAction"),e!==null&&(s=e,r=null));var o=new sf("action","action",null,n,i);t.push({event:o,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(vs!==0){var l=new FormData(i,r);km(a,{pending:!0,data:l,method:i.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=new FormData(i,r),km(a,{pending:!0,data:l,method:i.method,action:s},s,l))},currentTarget:i}]})}}for(nd=0;nd<Tm.length;nd++)id=Tm[nd],OS=id.toLowerCase(),BS=id[0].toUpperCase()+id.slice(1),qn(OS,"on"+BS);var id,OS,BS,nd;qn(Xy,"onAnimationEnd");qn(Yy,"onAnimationIteration");qn(Zy,"onAnimationStart");qn("dblclick","onDoubleClick");qn("focusin","onFocus");qn("focusout","onBlur");qn(ww,"onTransitionRun");qn(Tw,"onTransitionStart");qn(Iw,"onTransitionCancel");qn(Ky,"onTransitionEnd");Lo("onMouseEnter",["mouseout","mouseover"]);Lo("onMouseLeave",["mouseout","mouseover"]);Lo("onPointerEnter",["pointerout","pointerover"]);Lo("onPointerLeave",["pointerout","pointerover"]);Lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var su="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(su));function Ub(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],i=n.event;n=n.listeners;e:{var s=void 0;if(e)for(var r=n.length-1;0<=r;r--){var o=n[r],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;s=o,i.currentTarget=u;try{s(i)}catch(f){Dd(f)}i.currentTarget=null,s=l}else for(r=0;r<n.length;r++){if(o=n[r],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;s=o,i.currentTarget=u;try{s(i)}catch(f){Dd(f)}i.currentTarget=null,s=l}}}}function at(t,e){var a=e[Rv];a===void 0&&(a=e[Rv]=new Set);var n=t+"__bubble";a.has(n)||(Ob(e,t,2,!1),a.add(n))}function sm(t,e,a){var n=0;e&&(n|=4),Ob(a,t,n,e)}var sd="_reactListening"+Math.random().toString(36).slice(2);function dx(t){if(!t[sd]){t[sd]=!0,wy.forEach(function(a){a!=="selectionchange"&&(xT.has(a)||sm(a,!1,t),sm(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sd]||(e[sd]=!0,sm("selectionchange",!1,e))}}function Ob(t,e,a,n){switch(rM(e)){case 2:var i=uI;break;case 8:i=cI;break;default:i=vx}a=i.bind(null,e,a,t),i=void 0,!Lm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,a,{capture:!0,passive:i}):t.addEventListener(e,a,!0):i!==void 0?t.addEventListener(e,a,{passive:i}):t.addEventListener(e,a,!1)}function rm(t,e,a,n,i){var s=n;if((e&1)===0&&(e&2)===0&&n!==null)e:for(;;){if(n===null)return;var r=n.tag;if(r===3||r===4){var o=n.stateNode.containerInfo;if(o===i)break;if(r===4)for(r=n.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===i)return;r=r.return}for(;o!==null;){if(r=lr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){n=s=r;continue e}o=o.parentNode}}n=n.return}Uy(function(){var u=s,f=wg(a),p=[];e:{var c=Jy.get(t);if(c!==void 0){var h=sf,S=t;switch(t){case"keypress":if(dd(a)===0)break e;case"keydown":case"keyup":h=nw;break;case"focusin":S="focus",h=Gp;break;case"focusout":S="blur",h=Gp;break;case"beforeblur":case"afterblur":h=Gp;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=kv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=WA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=lw;break;case Xy:case Yy:case Zy:h=ZA;break;case Ky:h=cw;break;case"scroll":case"scrollend":h=VA;break;case"wheel":h=fw;break;case"copy":case"cut":case"paste":h=JA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Hv;break;case"submit":h=rw;break;case"toggle":case"beforetoggle":h=pw}var M=(e&4)!==0,x=!M&&(t==="scroll"||t==="scrollend"),d=M?c!==null?c+"Capture":null:c;M=[];for(var m=u,y;m!==null;){var _=m;if(y=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||y===null||d===null||(_=Ql(m,d),_!=null&&M.push(ru(m,_,y))),x)break;m=m.return}0<M.length&&(c=new h(c,S,null,a,f),p.push({event:c,listeners:M}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",c=t==="mouseout"||t==="pointerout",h&&a!==Mm&&(S=a.relatedTarget||a.fromElement)&&(lr(S)||S[Oo]))break e;(c||h)&&(S=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,c?(h=a.relatedTarget||a.toElement,c=u,h=h?lr(h):null,h!==null&&(x=fu(h),M=h.tag,h!==x||M!==5&&M!==27&&M!==6)&&(h=null)):(c=null,h=u),c!==h&&(M=kv,_="onMouseLeave",d="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(M=Hv,_="onPointerLeave",d="onPointerEnter",m="pointer"),x=c==null?S:Pl(c),y=h==null?S:Pl(h),S=new M(_,m+"leave",c,a,f),S.target=x,S.relatedTarget=y,_=null,lr(f)===u&&(M=new M(d,m+"enter",h,a,f),M.target=y,M.relatedTarget=x,_=M),x=_,M=c&&h?dm(c,h,vT):null,c!==null&&FS(p,S,c,M,!1),h!==null&&x!==null&&FS(p,x,h,M,!0)))}e:{if(c=u?Pl(u):window,h=c.nodeName&&c.nodeName.toLowerCase(),h==="select"||h==="input"&&c.type==="file")var A=Wv;else if(qv(c))if(Hy)A=Lw;else{A=bw;var w=_w}else h=c.nodeName,!h||h.toLowerCase()!=="input"||c.type!=="checkbox"&&c.type!=="radio"?u&&Ag(u.elementType)&&(A=Wv):A=Mw;if(A&&(A=A(t,u))){zy(p,A,a,f);break e}w&&w(t,c,u)}switch(w=u?Pl(u):window,t){case"focusin":(qv(w)||w.contentEditable==="true")&&(so=w,Am=u,kl=null);break;case"focusout":kl=Am=so=null;break;case"mousedown":wm=!0;break;case"contextmenu":case"mouseup":case"dragend":wm=!1,Kv(p,a,f);break;case"selectionchange":if(Aw)break;case"keydown":case"keyup":Kv(p,a,f)}var v;if(Eg)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else io?Fy(t,a)&&(L="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(L="onCompositionStart");L&&(By&&a.locale!=="ko"&&(io||L!=="onCompositionStart"?L==="onCompositionEnd"&&io&&(v=Oy()):(ps=f,Tg="value"in ps?ps.value:ps.textContent,io=!0)),w=$d(u,L),0<w.length&&(L=new zv(L,t,null,a,f),p.push({event:L,listeners:w}),v?L.data=v:(v=ky(a),v!==null&&(L.data=v)))),(v=gw?xw(t,a):vw(t,a))&&(L=$d(u,"onBeforeInput"),0<L.length&&(w=new zv("onBeforeInput","beforeinput",null,a,f),p.push({event:w,listeners:L}),w.data=v)),gT(p,t,u,a,f)}Ub(p,e)})}function ru(t,e,a){return{instance:t,listener:e,currentTarget:a}}function $d(t,e){for(var a=e+"Capture",n=[];t!==null;){var i=t,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=Ql(t,a),i!=null&&n.unshift(ru(t,i,s)),i=Ql(t,e),i!=null&&n.push(ru(t,i,s))),t.tag===3)return n;t=t.return}return[]}function vT(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function FS(t,e,a,n,i){for(var s=e._reactName,r=[];a!==null&&a!==n;){var o=a,l=o.alternate,u=o.stateNode;if(o=o.tag,l!==null&&l===n)break;o!==5&&o!==26&&o!==27||u===null||(l=u,i?(u=Ql(a,s),u!=null&&r.unshift(ru(a,u,l))):i||(u=Ql(a,s),u!=null&&r.push(ru(a,u,l)))),a=a.return}r.length!==0&&t.push({event:e,listeners:r})}var ST=/\r\n?/g,yT=/\u0000|\uFFFD/g;function kS(t){return(typeof t=="string"?t:""+t).replace(ST,`
`).replace(yT,"")}function Bb(t,e){return e=kS(e),kS(t)===e}function Mt(t,e,a,n,i,s){switch(a){case"children":if(typeof n=="string")e==="body"||e==="textarea"&&n===""||Co(t,n);else if(typeof n=="number"||typeof n=="bigint")e!=="body"&&Co(t,""+n);else return;break;case"className":Wc(t,"class",n);break;case"tabIndex":Wc(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Wc(t,a,n);break;case"style":Py(t,n,s);return;case"data":if(e!=="object"){Wc(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=ud(n),t.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(e!=="input"&&Mt(t,e,"name",i.name,i,null),Mt(t,e,"formEncType",i.formEncType,i,null),Mt(t,e,"formMethod",i.formMethod,i,null),Mt(t,e,"formTarget",i.formTarget,i,null)):(Mt(t,e,"encType",i.encType,i,null),Mt(t,e,"method",i.method,i,null),Mt(t,e,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=ud(n),t.setAttribute(a,n);break;case"onClick":n!=null&&(t.onclick=ri);return;case"onScroll":n!=null&&at("scroll",t);return;case"onScrollEnd":n!=null&&at("scrollend",t);return;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(ee(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(ee(60));s?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}a=ud(n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":n===!0?t.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(a,n):t.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(a):t.setAttribute(a,n);break;case"popover":at("beforetoggle",t),at("toggle",t),ld(t,"popover",n);break;case"xlinkActuate":Ii(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Ii(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Ii(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Ii(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Ii(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Ii(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Ii(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Ii(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Ii(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":ld(t,"is",n);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=HA.get(a)||a,ld(t,a,n);else return}pt=!0}function cg(t,e,a,n,i,s){switch(a){case"style":Py(t,n,s);return;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(ee(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(ee(60));s?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof n=="string")Co(t,n);else if(typeof n=="number"||typeof n=="bigint")Co(t,""+n);else return;break;case"onScroll":n!=null&&at("scroll",t);return;case"onScrollEnd":n!=null&&at("scrollend",t);return;case"onClick":n!=null&&(t.onclick=ri);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Ty.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),s=a.slice(2,i?a.length-7:void 0),e=t[nn]||null,e=e!=null?e[a]:null,typeof e=="function"&&t.removeEventListener(s,e,i),typeof n=="function")){typeof e!="function"&&e!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(s,n,i);break e}pt=!0,a in t?t[a]=n:n===!0?t.setAttribute(a,""):ld(t,a,n)}return}pt=!0}function Ta(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":at("error",t),at("load",t);var n=!1,i=!1,s;for(s in a)if(a.hasOwnProperty(s)){var r=a[s];if(r!=null)switch(s){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(ee(137,e));default:Mt(t,e,s,r,a,null)}}i&&Mt(t,e,"srcSet",a.srcSet,a,null),n&&Mt(t,e,"src",a.src,a,null);return;case"input":at("invalid",t);var o=s=r=i=null,l=null,u=null;for(n in a)if(a.hasOwnProperty(n)){var f=a[n];if(f!=null)switch(n){case"name":i=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":u=f;break;case"value":s=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(ee(137,e));break;default:Mt(t,e,n,f,a,null)}}Ry(t,s,o,l,u,r,i,!1);return;case"select":at("invalid",t),n=r=s=null;for(i in a)if(a.hasOwnProperty(i)&&(o=a[i],o!=null))switch(i){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":n=o;default:Mt(t,e,i,o,a,null)}e=s,a=r,t.multiple=!!n,e!=null?po(t,!!n,e,!1):a!=null&&po(t,!!n,a,!0);return;case"textarea":at("invalid",t),s=i=n=null;for(r in a)if(a.hasOwnProperty(r)&&(o=a[r],o!=null))switch(r){case"value":n=o;break;case"defaultValue":i=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(ee(91));break;default:Mt(t,e,r,o,a,null)}Ny(t,n,i,s);return;case"option":for(l in a)a.hasOwnProperty(l)&&(n=a[l],n!=null)&&(l==="selected"?t.selected=n&&typeof n!="function"&&typeof n!="symbol":Mt(t,e,l,n,a,null));return;case"dialog":at("beforetoggle",t),at("toggle",t),at("cancel",t),at("close",t);break;case"iframe":case"object":at("load",t);break;case"video":case"audio":for(n=0;n<su.length;n++)at(su[n],t);break;case"image":at("error",t),at("load",t);break;case"details":at("toggle",t);break;case"embed":case"source":case"link":at("error",t),at("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&(n=a[u],n!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(ee(137,e));default:Mt(t,e,u,n,a,null)}return;default:if(Ag(e)){for(f in a)a.hasOwnProperty(f)&&(n=a[f],n!==void 0&&cg(t,e,f,n,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(n=a[o],n!=null&&Mt(t,e,o,n,a,null))}var _T={};function bT(t,e,a,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,r=null,o=null,l=null,u=null,f=null;for(h in a){var p=a[h];if(a.hasOwnProperty(h)&&p!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":l=p;default:n.hasOwnProperty(h)||Mt(t,e,h,null,n,p)}}for(var c in n){var h=n[c];if(p=a[c],n.hasOwnProperty(c)&&(h!=null||p!=null))switch(c){case"type":h!==p&&(pt=!0),s=h;break;case"name":h!==p&&(pt=!0),i=h;break;case"checked":h!==p&&(pt=!0),u=h;break;case"defaultChecked":h!==p&&(pt=!0),f=h;break;case"value":h!==p&&(pt=!0),r=h;break;case"defaultValue":h!==p&&(pt=!0),o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(ee(137,e));break;default:h!==p&&Mt(t,e,c,h,n,p)}}bm(t,r,o,l,u,f,s,i);return;case"select":h=r=o=c=null;for(s in a)if(l=a[s],a.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":h=l;default:n.hasOwnProperty(s)||Mt(t,e,s,null,n,l)}for(i in n)if(s=n[i],l=a[i],n.hasOwnProperty(i)&&(s!=null||l!=null))switch(i){case"value":s!==l&&(pt=!0),c=s;break;case"defaultValue":s!==l&&(pt=!0),o=s;break;case"multiple":s!==l&&(pt=!0),r=s;default:s!==l&&Mt(t,e,i,s,n,l)}e=o,a=r,n=h,c!=null?po(t,!!a,c,!1):!!n!=!!a&&(e!=null?po(t,!!a,e,!0):po(t,!!a,a?[]:"",!1));return;case"textarea":h=c=null;for(o in a)if(i=a[o],a.hasOwnProperty(o)&&i!=null&&!n.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Mt(t,e,o,null,n,i)}for(r in n)if(i=n[r],s=a[r],n.hasOwnProperty(r)&&(i!=null||s!=null))switch(r){case"value":i!==s&&(pt=!0),c=i;break;case"defaultValue":i!==s&&(pt=!0),h=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(ee(91));break;default:i!==s&&Mt(t,e,r,i,n,s)}Dy(t,c,h);return;case"option":for(var S in a)c=a[S],a.hasOwnProperty(S)&&c!=null&&!n.hasOwnProperty(S)&&(S==="selected"?t.selected=!1:Mt(t,e,S,null,n,c));for(l in n)c=n[l],h=a[l],n.hasOwnProperty(l)&&c!==h&&(c!=null||h!=null)&&(l==="selected"?(c!==h&&(pt=!0),t.selected=c&&typeof c!="function"&&typeof c!="symbol"):Mt(t,e,l,c,n,h));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in a)c=a[M],a.hasOwnProperty(M)&&c!=null&&!n.hasOwnProperty(M)&&Mt(t,e,M,null,n,c);for(u in n)if(c=n[u],h=a[u],n.hasOwnProperty(u)&&c!==h&&(c!=null||h!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(ee(137,e));break;default:Mt(t,e,u,c,n,h)}return;default:if(Ag(e)){for(var x in a)c=a[x],a.hasOwnProperty(x)&&c!==void 0&&!n.hasOwnProperty(x)&&cg(t,e,x,void 0,n,c);for(f in n)c=n[f],h=a[f],!n.hasOwnProperty(f)||c===h||c===void 0&&h===void 0||cg(t,e,f,c,n,h);return}}for(var d in a)c=a[d],a.hasOwnProperty(d)&&c!=null&&!n.hasOwnProperty(d)&&Mt(t,e,d,null,n,c);for(p in n)c=n[p],h=a[p],!n.hasOwnProperty(p)||c===h||c==null&&h==null||Mt(t,e,p,c,n,h)}function zS(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function MT(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],s=i.transferSize,r=i.initiatorType,o=i.duration;if(s&&o&&zS(r)){for(r=0,o=i.responseEnd,n+=1;n<a.length;n++){var l=a[n],u=l.startTime;if(u>o)break;var f=l.transferSize,p=l.initiatorType;f&&zS(p)&&(l=l.responseEnd,r+=f*(l<o?1:(o-u)/(l-u)))}if(--n,e+=8*(s+r)/(i.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var dg=null,fg=null;function ou(t){return t.nodeType===9?t:t.ownerDocument}function HS(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fb(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function kb(t,e,a,n){return a=ou(a).createElement(t),a[La]=n,a[nn]=e,Ta(a,t,e),ma(a),a}function hg(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var om=null;function LT(){var t=window.event;return t&&t.type==="popstate"?t===om?!1:(om=t,!0):(om=null,!1)}var fx=typeof setTimeout=="function"?setTimeout:void 0,CT=typeof clearTimeout=="function"?clearTimeout:void 0,GS=typeof Promise=="function"?Promise:void 0,VS=typeof requestAnimationFrame=="function"?requestAnimationFrame:fx,AT=typeof queueMicrotask=="function"?queueMicrotask:typeof GS<"u"?function(t){return GS.resolve(null).then(t).catch(wT)}:fx;function wT(t){setTimeout(function(){throw t})}function Us(t){return t==="head"}function qS(t,e){var a=e,n=0;do{var i=a.nextSibling;if(t.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){t.removeChild(i),Uo(e);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")um(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,um(a);for(var s=a.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[gu]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=r}}else a==="body"&&um(t.ownerDocument.body);a=i}while(a);Uo(e)}function WS(t,e){var a=t;t=0;do{var n=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=n}while(a)}function zb(t,e,a){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(e=t.getClientRects(),e.length===1)var n=1;else for(var i=n=0;i<e.length;i++){var s=e[i];0<s.width&&0<s.height&&n++}n===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function Hb(t,e){t=t.style,e=e.style;var a=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(a=e.display,t.display=a==null||typeof a=="boolean"?"":a,a=e.margin,a!=null?t.margin=a:(a=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function Gb(t,e,a){return a=a.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function pg(t){var e=t.getBoundingClientRect(),a=getComputedStyle(t);return Gb(e,a,t)}function TT(t){var e=t.getBoundingClientRect();e=new DOMRect(e.x+2e4,e.y+2e4,e.width,e.height);var a=getComputedStyle(t);return Gb(e,a,t)}function IT(t){return t.documentElement.clientHeight}function ET(t){this.addEventListener("load",t),this.addEventListener("error",t)}function RT(t,e,a,n,i,s,r,o,l){var u=e.nodeType===9?e:e.ownerDocument;try{var f=u.startViewTransition({update:function(){var c=u.defaultView,h=c.navigation&&c.navigation.transition,S=u.fonts.status;n();var M=[];if(S==="loaded"&&(IT(u),u.fonts.status==="loading"&&M.push(u.fonts.ready)),S=M.length,t!==null)for(var x=t.suspenseyImages,d=0,m=0;m<x.length;m++){var y=x[m];if(!y.complete){var _=y.getBoundingClientRect();if(0<_.bottom&&0<_.right&&_.top<c.innerHeight&&_.left<c.innerWidth){if(d+=eM(y),d>Ld){M.length=S;break}y=new Promise(ET.bind(y)),M.push(y)}}}if(0<M.length)return c=Promise.race([Promise.all(M),new Promise(function(A){return setTimeout(A,500)})]).then(i,i),(h?Promise.allSettled([h.finished,c]):c).then(s,s);if(i(),h)return h.finished.then(s,s);s()},types:a});u.__reactViewTransition=f;var p=[];return f.ready.then(function(){for(var c=u.documentElement.getAnimations({subtree:!0}),h=0;h<c.length;h++){var S=c[h],M=S.effect,x=M.pseudoElement;if(x!=null&&x.startsWith("::view-transition")){p.push(S),S=M.getKeyframes();for(var d=x=void 0,m=!0,y=0;y<S.length;y++){var _=S[y],A=_.width;if(x===void 0)x=A;else if(x!==A){m=!1;break}if(A=_.height,d===void 0)d=A;else if(d!==A){m=!1;break}delete _.width,delete _.height,_.transform==="none"&&delete _.transform}m&&x!==void 0&&d!==void 0&&(M.setKeyframes(S),m=getComputedStyle(M.target,M.pseudoElement),m.width!==x||m.height!==d)&&(m=S[0],m.width=x,m.height=d,m=S[S.length-1],m.width=x,m.height=d,M.setKeyframes(S))}}r()},function(c){u.__reactViewTransition===f&&(u.__reactViewTransition=null);try{typeof c=="object"&&c!==null&&c.name==="InvalidStateError"&&(c.message==="View transition was skipped because document visibility state is hidden."||c.message==="Skipping view transition because document visibility state has become hidden."||c.message==="Skipping view transition because viewport size changed."||c.message==="Transition was aborted because of invalid state")&&(c=null),c!==null&&l(c)}finally{n(),i(),r()}}),f.finished.finally(function(){for(var c=0;c<p.length;c++)p[c].cancel();u.__reactViewTransition===f&&(u.__reactViewTransition=null),o()}),f}catch{return n(),i(),r(),null}}function ur(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}ur.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:It({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)};ur.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,a=t.getAnimations({subtree:!0}),n=[],i=0;i<a.length;i++){var s=a[i].effect;s!==null&&s.target===t&&s.pseudoElement===e&&n.push(a[i])}return n};ur.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Vb(t){return{name:t,group:new ur("group",t),imagePair:new ur("image-pair",t),old:new ur("old",t),new:new ur("new",t)}}function xn(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}xn.prototype.addEventListener=function(t,e,a){var n=null,i=null;if(!(a!=null&&typeof a!="boolean"&&(n=a.signal||null,n!==null&&n.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var s=this._eventListeners;if(qb(s,t,e,a)===-1){var r=this,o=e;a!=null&&typeof a!="boolean"&&a.once===!0&&(o=function(l){r.removeEventListener(t,e,a),typeof e=="function"?e.call(this,l):e.handleEvent(l)}),n!==null&&(i=r.removeEventListener.bind(r,t,e,a),n.addEventListener("abort",i,{once:!0}),i=n.removeEventListener.bind(n,"abort",i)),n=Ro(a),s.push({type:t,listener:e,optionsOrUseCapture:a,attachedListener:o,cleanup:i}),an(this._fragmentFiber.child,!1,DT,t,o,n)}this._eventListeners=s}};function DT(t,e,a,n){return la(t).addEventListener(e,a,n),!1}xn.prototype.removeEventListener=function(t,e,a){var n=this._eventListeners;if(n!==null&&(e=qb(n,t,e,a),e!==-1)){var i=n[e];a=i.attachedListener;var s=i.cleanup;i=Ro(i.optionsOrUseCapture),an(this._fragmentFiber.child,!1,NT,t,a,i),n.splice(e,1),s!==null&&s()}};function NT(t,e,a,n){return la(t).removeEventListener(e,a,n),!1}function Ro(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function XS(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function qb(t,e,a,n){if(t.length===0)return-1;n=XS(n);for(var i=0;i<t.length;i++){var s=t[i];if(s.type===e&&s.listener===a&&XS(s.optionsOrUseCapture)===n)return i}return-1}xn.prototype.dispatchEvent=function(t){var e=Mr(this._fragmentFiber);if(e===null)return!0;e=la(e);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var n=e.nodeType===9?e.createComment(""):document.createTextNode("");if(a)for(var i=0;i<a.length;i++){var s=a[i];n.addEventListener(s.type,s.attachedListener,Ro(s.optionsOrUseCapture))}if(e.appendChild(n),t=n.dispatchEvent(t),a)for(i=0;i<a.length;i++)s=a[i],n.removeEventListener(s.type,s.attachedListener,Ro(s.optionsOrUseCapture));return e.removeChild(n),t}return e.dispatchEvent(t)};xn.prototype.focus=function(t){an(this._fragmentFiber.child,!0,Wb,t,void 0,void 0)};function Wb(t,e){return t.tag===6?!1:(t=la(t),WT(t,e))}xn.prototype.focusLast=function(t){var e=[];an(this._fragmentFiber.child,!0,hx,e,void 0,void 0);for(var a=e.length-1;0<=a&&!Wb(e[a],t);a--);};function hx(t,e){return e.push(t),!1}xn.prototype.blur=function(){var t=Mr(this._fragmentFiber);t!==null&&(t=la(t),t=ou(t).activeElement,t!==null&&an(this._fragmentFiber.child,!1,PT,t,void 0,void 0))};function PT(t,e){return t.tag===6?!1:(t=la(t),t===e||t.contains(e)?(e.blur(),!0):!1)}xn.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),an(this._fragmentFiber.child,!1,UT,t,void 0,void 0)};function UT(t,e){return t.tag===6||(t=la(t),e.observe(t)),!1}xn.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),an(this._fragmentFiber.child,!1,OT,t,void 0,void 0);for(var a=e=0;a<Gn.length;a++){var n=Gn[a];n.fragmentInstance===this&&n.observer===t?t.unobserve(n.instance):Gn[e++]=n}Gn.length=e}};function OT(t,e){return t.tag===6||(t=la(t),e.unobserve(t)),!1}var Gn=[],lm=!1;function BT(t,e,a){Gn.push({fragmentInstance:t,observer:e,instance:a}),lm||(lm=!0,XT(function(){lm=!1;var n=Gn;Gn=[];for(var i=0;i<n.length;i++){var s=n[i];s.observer.unobserve(s.instance)}}))}xn.prototype.getClientRects=function(){var t=[];return an(this._fragmentFiber.child,!1,FT,t,void 0,void 0),t};function FT(t,e){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),e.push.apply(e,a.getClientRects())}else t=la(t),e.push.apply(e,t.getClientRects());return!1}xn.prototype.getRootNode=function(t){var e=Mr(this._fragmentFiber);return e===null?this:la(e).getRootNode(t)};xn.prototype.compareDocumentPosition=function(t){var e=Mr(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];an(this._fragmentFiber.child,!1,hx,a,void 0,void 0);var n=la(e);if(a.length===0){if(a=n,Cv(this._fragmentFiber)){e:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break e}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(a=e)}e=this._fragmentFiber;var i=n=a.compareDocumentPosition(t);return a===t?i=Node.DOCUMENT_POSITION_CONTAINS:n&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=hy(e)[1],a===null?i=Node.DOCUMENT_POSITION_PRECEDING:(t=la(a).compareDocumentPosition(t),i=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=la(a[0]),i=la(a[a.length-1]);var s=Cv(this._fragmentFiber)?e.parentElement:n;if(s==null)return Node.DOCUMENT_POSITION_DISCONNECTED;n=s.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,s=s.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=e.compareDocumentPosition(t),o=i.compareDocumentPosition(t),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=n&&s&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,e=n&&e===t||s&&i===t||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!n&&e===t||!s&&i===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||kT(e,this._fragmentFiber,a[0],a[a.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function kT(t,e,a,n,i){var s=lr(i);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!s)e:{for(;s!==null;){if(s.tag===7&&(s===e||s.alternate===e)){a=!0;break e}s=s.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(s===null)return s=i.ownerDocument,i===s||i===s.documentElement||i===s.body;e:{for(s=e,e=Mr(e);s!==null;){if(!(s.tag!==5&&s.tag!==3&&s.tag!==27||s!==e&&s.alternate!==e)){s=!0;break e}s=s.return}s=!1}return s}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!s)&&!(e=s===a)&&(e=dm(a,s,Av),e===null?e=!1:(an(e,!0,mA,s,a),s=eo,eo=null,e=s!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!s)&&!(e=s===n)&&(e=dm(n,s,Av),e===null?e=!1:(an(e,!0,gA,s,n),s=eo,cm=eo=null,e=s!==null)),e):!1}function YS(t,e){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}xn.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(ee(566));var e=[];an(this._fragmentFiber.child,!1,hx,e,void 0,void 0);var a=t!==!1;if(e.length===0){var n=hy(this._fragmentFiber);if(n=a?n[1]||n[0]||Mr(this._fragmentFiber):n[0]||n[1],n===null)return;if(n.tag===6){t=la(n),YS(t,a);return}if(n=la(n),n.nodeType!==9){if(n.nodeType===11){a="host"in n?n.host:null,a!==null&&a.scrollIntoView(t);return}n.scrollIntoView(t)}}for(n=a?e.length-1:0;n!==(a?-1:e.length);){var i=e[n];i.tag===6?(i=la(i),YS(i,a)):la(i).scrollIntoView(t),n+=a?-1:1}};function zT(t,e){return t=la(t),Xb(t,e),!1}function Xb(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function Yb(t,e){var a=e._eventListeners;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n];t.addEventListener(i.type,i.attachedListener,Ro(i.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(s){for(var r=0,o=0;o<Gn.length;o++){var l=Gn[o];(l.fragmentInstance!==e||l.observer!==s||l.instance!==t)&&(Gn[r++]=l)}Gn.length=r,s.observe(t)}),Xb(t,e))}function HT(t,e){var a=e._eventListeners;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n];t.removeEventListener(i.type,i.attachedListener,Ro(i.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(s){typeof s.rootMargin=="string"?BT(e,s,t):s.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function mg(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":mg(a),nf(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function GT(t,e,a,n){for(;t.nodeType===1;){var i=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[gu])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=Dn(t.nextSibling),t===null)break}return null}function VT(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Dn(t.nextSibling),t===null))return null;return t}function Zb(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Dn(t.nextSibling),t===null))return null;return t}function gg(t){return t.data==="$?"||t.data==="$~"}function px(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function qT(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var n=function(){e(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function Dn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var xg=null;function ZS(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return Dn(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function KS(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function WT(t,e){function a(){n=!0}if(t.ownerDocument.activeElement===t)return!0;var n=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return n}function XT(t){VS(function(){VS(function(e){return t(e)})})}function Kb(t,e,a){switch(e=ou(a),t){case"html":if(t=e.documentElement,!t)throw Error(ee(452));return t;case"head":if(t=e.head,!t)throw Error(ee(453));return t;case"body":if(t=e.body,!t)throw Error(ee(454));return t;default:throw Error(ee(451))}}function Jb(t,e,a){for(var n in a){var i=a[n];a.hasOwnProperty(n)&&i!=null&&Mt(t,e,n,null,_T,i)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===ri&&(t.onclick=null),nf(t)}function um(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);nf(t)}var Nn=new Map,JS=new Set;function lu(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var Vi=vt.d;vt.d={f:YT,r:ZT,D:KT,C:JT,L:QT,m:jT,X:eI,S:$T,M:tI};function YT(){var t=Vi.f(),e=vf();return t||e}function ZT(t){var e=Bo(t);e!==null&&e.tag===5&&e.type==="form"?P_(e):Vi.r(t)}var Ho=typeof document>"u"?null:document;function Qb(t,e,a){var n=Ho;if(n&&typeof e=="string"&&e){var i=In(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),JS.has(i)||(JS.add(i),t={rel:t,crossOrigin:a,href:e},n.querySelector(i)===null&&(e=n.createElement("link"),Ta(e,"link",t),ma(e),n.head.appendChild(e)))}}function KT(t){Vi.D(t),Qb("dns-prefetch",t,null)}function JT(t,e){Vi.C(t,e),Qb("preconnect",t,e)}function QT(t,e,a){Vi.L(t,e,a);var n=Ho;if(n&&t&&e){var i='link[rel="preload"][as="'+In(e)+'"]';e==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+In(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+In(a.imageSizes)+'"]')):i+='[href="'+In(t)+'"]';var s=i;switch(e){case"style":s=Do(t);break;case"script":s=Go(t)}if(!(Nn.has(s)||(t=It({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Nn.set(s,t),n.querySelector(i)!==null||e==="style"&&n.querySelector(bu(s))||e==="script"&&n.querySelector(Mu(s))))){var r=n.createElement("link");Ta(r,"link",t),e==="style"&&(r[Rd]=!0,r.onload=r.onerror=function(){Ay(r)}),ma(r),n.head.appendChild(r)}}}function jT(t,e){Vi.m(t,e);var a=Ho;if(a&&t){var n=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+In(n)+'"][href="'+In(t)+'"]',s=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Go(t)}if(!Nn.has(s)&&(t=It({rel:"modulepreload",href:t},e),Nn.set(s,t),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Mu(s)))return}n=a.createElement("link"),Ta(n,"link",t),ma(n),a.head.appendChild(n)}}}function $T(t,e,a){Vi.S(t,e,a);var n=Ho;if(n&&t){var i=ho(n).hoistableStyles,s=Do(t);e=e||"default";var r=i.get(s);if(!r){var o={loading:0,preload:null};if(r=n.querySelector(bu(s)))o.loading=5;else{t=It({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Nn.get(s))&&mx(t,a);var l=r=n.createElement("link");ma(l),Ta(l,"link",t),l._p=new Promise(function(u,f){l.onload=u,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,bd(r,e,n)}r={type:"stylesheet",instance:r,count:1,state:o},i.set(s,r)}}}function eI(t,e){Vi.X(t,e);var a=Ho;if(a&&t){var n=ho(a).hoistableScripts,i=Go(t),s=n.get(i);s||(s=a.querySelector(Mu(i)),s||(t=It({src:t,async:!0},e),(e=Nn.get(i))&&gx(t,e),s=a.createElement("script"),ma(s),Ta(s,"link",t),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function tI(t,e){Vi.M(t,e);var a=Ho;if(a&&t){var n=ho(a).hoistableScripts,i=Go(t),s=n.get(i);s||(s=a.querySelector(Mu(i)),s||(t=It({src:t,async:!0,type:"module"},e),(e=Nn.get(i))&&gx(t,e),s=a.createElement("script"),ma(s),Ta(s,"link",t),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function QS(t,e,a,n){var i=(i=Ss.current)?lu(i):null;if(!i)throw Error(ee(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Do(a.href),e=ho(i).hoistableStyles,n=e.get(a),n||(n={type:"style",instance:null,count:0,state:null},e.set(a,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Do(a.href);var s=ho(i).hoistableStyles,r=s.get(t);if(r||(i=i.ownerDocument||i,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,r),(s=i.querySelector(bu(t)))?s._p||(r.instance=s,r.state.loading=5):(s=Nn.get(t),s||(s={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Nn.set(t,s)),aI(i,t,s,r.state))),e&&n===null)throw Error(ee(528,""));return r}if(e&&n!==null)throw Error(ee(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(a=Go(a),e=ho(i).hoistableScripts,n=e.get(a),n||(n={type:"script",instance:null,count:0,state:null},e.set(a,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(ee(444,t))}}function Do(t){return'href="'+In(t)+'"'}function bu(t){return'link[rel="stylesheet"]['+t+"]"}function jb(t){return It({},t,{"data-precedence":t.precedence,precedence:null})}function aI(t,e,a,n){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[Rd]!==!0){n.loading=1;return}}else e=t.createElement("link"),e[Rd]=!0,e.onload=e.onerror=Ay.bind(null,e),Ta(e,"link",a),ma(e),t.head.appendChild(e);n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2})}function Go(t){return'[src="'+In(t)+'"]'}function Mu(t){return"script[async]"+t}function jS(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+In(a.href)+'"]');if(n)return e.instance=n,ma(n),n;var i=It({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),ma(n),Ta(n,"style",i),bd(n,a.precedence,t),e.instance=n;case"stylesheet":i=Do(a.href);var s=t.querySelector(bu(i));if(s)return e.state.loading|=4,e.instance=s,ma(s),s;n=jb(a),(i=Nn.get(i))&&mx(n,i),s=(t.ownerDocument||t).createElement("link"),ma(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Ta(s,"link",n),e.state.loading|=4,bd(s,a.precedence,t),e.instance=s;case"script":return s=Go(a.src),(i=t.querySelector(Mu(s)))?(e.instance=i,ma(i),i):(n=a,(i=Nn.get(s))&&(n=It({},a),gx(n,i)),t=t.ownerDocument||t,i=t.createElement("script"),ma(i),Ta(i,"link",n),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(ee(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,bd(n,a.precedence,t));return e.instance}function bd(t,e,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,s=i,r=0;r<n.length;r++){var o=n[r];if(o.dataset.precedence===e)s=o;else if(s!==i)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function mx(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function gx(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Md=null;function $S(t,e,a){if(Md===null){var n=new Map,i=Md=new Map;i.set(a,n)}else i=Md,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(t))return n;for(n.set(t,null),a=a.getElementsByTagName(t),i=0;i<a.length;i++){var s=a[i];if(!(s[gu]||s[La]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(e)||"";r=t+r;var o=n.get(r);o?o.push(s):n.set(r,[s])}}return n}function vg(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function nI(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function ey(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function $b(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function eM(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function ty(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=eM(e),t.suspenseyImages.push(e)),t=rI.bind(t),e.decode().then(t,t))}function iI(t,e,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=Do(n.href),s=e.querySelector(bu(i));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=uu.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=s,ma(s);return}s=e.ownerDocument||e,n=jb(n),(i=Nn.get(i))&&mx(n,i),s=s.createElement("link"),ma(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Ta(s,"link",n),a.instance=s}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=uu.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var Ld=0;function sI(t,e){return t.stylesheets&&t.count===0&&Cd(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var n=setTimeout(function(){if(t.stylesheets&&Cd(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4+e);0<t.imgBytes&&Ld===0&&(Ld=62500*MT());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Cd(t,t.stylesheets),t.unsuspend)){var s=t.unsuspend;t.unsuspend=null,s()}},(t.imgBytes>Ld?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function tM(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Cd(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function uu(){this.count--,tM(this)}function rI(){this.imgCount--,tM(this)}var ef=null;function Cd(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ef=new Map,e.forEach(oI,t),ef=null,uu.call(t))}function oI(t,e){if(!(e.state.loading&4)){var a=ef.get(t);if(a)var n=a.get(null);else{a=new Map,ef.set(t,a);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var r=i[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),n=r)}n&&a.set(null,n)}i=e.instance,r=i.getAttribute("data-precedence"),s=a.get(r)||n,s===n&&a.set(null,i),a.set(r,i),this.count++,n=uu.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),s?s.parentNode.insertBefore(i,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var No={$$typeof:si,Provider:null,Consumer:null,_currentValue:cr,_currentValue2:cr,_threadCount:0};function lI(t,e,a,n,i,s,r,o,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Bp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bp(0),this.hiddenUpdates=Bp(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function aM(t,e,a,n,i,s,r,o,l,u,f,p){return t=new lI(t,e,a,r,l,u,f,p,o),e=1,s===!0&&(e|=24),s=en(3,null,null,e),t.current=s,s.stateNode=t,e=Og(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:n,isDehydrated:a,cache:e},kg(s),t}function nM(t){return t?(t=lo,t):lo}function iM(t,e,a,n,i,s){i=nM(i),n.context===null?n.context=i:n.pendingContext=i,n=_s(e),n.payload={element:a},s=s===void 0?null:s,s!==null&&(n.callback=s),a=bs(t,n,e),a!==null&&(tn(a,t,e),Hl(a,t,e))}function ay(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function xx(t,e){ay(t,e),(t=t.alternate)&&ay(t,e)}function sM(t){if(t.tag===13||t.tag===31){var e=Ar(t,67108864);e!==null&&tn(e,t,67108864),xx(t,67108864)}}function ny(t){if(t.tag===13||t.tag===31){var e=mn();e=Lg(e);var a=Ar(t,e);a!==null&&tn(a,t,e),xx(t,e)}}var Po=!0;function uI(t,e,a,n){var i=ze.T;ze.T=null;var s=vt.p;try{vt.p=2,vx(t,e,a,n)}finally{vt.p=s,ze.T=i}}function cI(t,e,a,n){var i=ze.T;ze.T=null;var s=vt.p;try{vt.p=8,vx(t,e,a,n)}finally{vt.p=s,ze.T=i}}function vx(t,e,a,n){if(Po){var i=Sg(n);if(i===null)rm(t,e,n,tf,a),iy(t,n);else if(fI(i,t,e,a,n))n.stopPropagation();else if(iy(t,n),e&4&&-1<dI.indexOf(t)){for(;i!==null;){var s=Bo(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=sr(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-pn(r);o.entanglements[1]|=l,r&=~l}hi(s),(xt&6)===0&&(Kd=fn()+500,_u(0,!1))}}break;case 31:case 13:o=Ar(s,2),o!==null&&tn(o,s,2),vf(),xx(s,2)}if(s=Sg(n),s===null&&rm(t,e,n,tf,a),s===i)break;i=s}i!==null&&n.stopPropagation()}else rm(t,e,n,null,a)}}function Sg(t){return t=wg(t),Sx(t)}var tf=null;function Sx(t){if(tf=null,t=lr(t),t!==null){var e=fu(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=cy(e),t!==null)return t;t=null}else if(a===31){if(t=dy(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return tf=t,null}function rM(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(CA()){case xy:return 2;case vy:return 8;case Ed:case AA:return 32;case Sy:return 268435456;default:return 32}default:return 32}}var yg=!1,As=null,ws=null,Ts=null,cu=new Map,du=new Map,fs=[],dI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function iy(t,e){switch(t){case"focusin":case"focusout":As=null;break;case"dragenter":case"dragleave":ws=null;break;case"mouseover":case"mouseout":Ts=null;break;case"pointerover":case"pointerout":cu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":du.delete(e.pointerId)}}function El(t,e,a,n,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:a,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Bo(e),e!==null&&sM(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function fI(t,e,a,n,i){switch(e){case"focusin":return As=El(As,t,e,a,n,i),!0;case"dragenter":return ws=El(ws,t,e,a,n,i),!0;case"mouseover":return Ts=El(Ts,t,e,a,n,i),!0;case"pointerover":var s=i.pointerId;return cu.set(s,El(cu.get(s)||null,t,e,a,n,i)),!0;case"gotpointercapture":return s=i.pointerId,du.set(s,El(du.get(s)||null,t,e,a,n,i)),!0}return!1}function oM(t){var e=lr(t.target);if(e!==null){var a=fu(e);if(a!==null){if(e=a.tag,e===13){if(e=cy(a),e!==null){t.blockedOn=e,Ev(t.priority,function(){ny(a)});return}}else if(e===31){if(e=dy(a),e!==null){t.blockedOn=e,Ev(t.priority,function(){ny(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ad(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Sg(t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);Mm=n,a.target.dispatchEvent(n),Mm=null}else return e=Bo(a),e!==null&&sM(e),t.blockedOn=a,!1;e.shift()}return!0}function sy(t,e,a){Ad(t)&&a.delete(e)}function hI(){yg=!1,As!==null&&Ad(As)&&(As=null),ws!==null&&Ad(ws)&&(ws=null),Ts!==null&&Ad(Ts)&&(Ts=null),cu.forEach(sy),du.forEach(sy)}function rd(t,e){t.blockedOn===e&&(t.blockedOn=null,yg||(yg=!0,ua.unstable_scheduleCallback(ua.unstable_NormalPriority,hI)))}var od=null;function ry(t){od!==t&&(od=t,ua.unstable_scheduleCallback(ua.unstable_NormalPriority,function(){od===t&&(od=null);for(var e=0;e<t.length;e+=3){var a=t[e],n=t[e+1],i=t[e+2];if(typeof n!="function"){if(Sx(n||a)===null)continue;break}var s=Bo(a);s!==null&&(t.splice(e,3),e-=3,km(s,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Uo(t){function e(l){return rd(l,t)}As!==null&&rd(As,t),ws!==null&&rd(ws,t),Ts!==null&&rd(Ts,t),cu.forEach(e),du.forEach(e);for(var a=0;a<fs.length;a++){var n=fs[a];n.blockedOn===t&&(n.blockedOn=null)}for(;0<fs.length&&(a=fs[0],a.blockedOn===null);)oM(a),a.blockedOn===null&&fs.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],s=a[n+1],r=i[nn]||null;if(typeof s=="function")r||ry(a);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(i=s,r=s[nn]||null)o=r.formAction;else if(Sx(i)!==null)continue}else o=r.action;typeof o=="function"?a[n+1]=o:(a.splice(n,3),n-=3),ry(a)}}}function lM(){function t(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return i=r})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function yx(t){this._internalRoot=t}_f.prototype.render=yx.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));var a=e.current,n=mn();iM(a,n,t,e,null,null)};_f.prototype.unmount=yx.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;iM(t.current,2,null,t,null,null),vf(),e[Oo]=null}};function _f(t){this._internalRoot=t}_f.prototype.unstable_scheduleHydration=function(t){if(t){var e=Cy();t={blockedOn:null,target:t,priority:e};for(var a=0;a<fs.length&&e!==0&&e<fs[a].priority;a++);fs.splice(a,0,t),a===0&&oM(t)}};var oy=ly.version;if(oy!=="19.3.1")throw Error(ee(527,oy,"19.3.1"));vt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=pA(e),t=t!==null?fy(t):null,t=t===null?null:t.stateNode,t};var pI={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:ze,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Rl.isDisabled&&Rl.supportsFiber))try{hu=Rl.inject(pI),hn=Rl}catch{}var Rl;bf.createRoot=function(t,e){if(!uy(t))throw Error(ee(299));var a=!1,n="",i=G_,s=V_,r=q_;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=aM(t,1,!1,null,null,a,n,null,i,s,r,lM),t[Oo]=e.current,dx(t),new yx(e)};bf.hydrateRoot=function(t,e,a){if(!uy(t))throw Error(ee(299));var n=!1,i="",s=G_,r=V_,o=q_,l=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(l=a.formState)),e=aM(t,1,!0,e,a??null,n,i,l,s,r,o,lM),e.context=nM(null),a=e.current,n=mn(),n=Lg(n),i=_s(n),i.callback=null,bs(a,i,n),a=n,e.current.lanes=a,mu(e,a),hi(e),t[Oo]=e.current,dx(t),new _f(e)};bf.version="19.3.1"});var fM=wi((QD,dM)=>{"use strict";function cM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cM)}catch(t){console.error(t)}}cM(),dM.exports=uM()});function mI(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function gI(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Du(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function mL(){let t=Du("canvas");return t.style.display="block",t}function b0(...t){let e="THREE."+t.shift();sl?sl("log",e,...t):console.log(e,...t)}function gL(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let a=t[1];a&&a.isStackTrace?t[0]+=" "+a.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Fe(...t){t=gL(t);let e="THREE."+t.shift();if(sl)sl("warn",e,...t);else{let a=t[0];a&&a.isStackTrace?console.warn(a.getError(e)):console.warn(e,...t)}}function Ge(...t){t=gL(t);let e="THREE."+t.shift();if(sl)sl("error",e,...t);else{let a=t[0];a&&a.isStackTrace?console.error(a.getError(e)):console.error(e,...t)}}function Tu(...t){let e=t.join(" ");e in hM||(hM[e]=!0,Fe(...t))}function xL(t,e,a){return new Promise(function(n,i){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:i();break;case t.TIMEOUT_EXPIRED:setTimeout(s,a);break;default:n()}}setTimeout(s,a)})}function ic(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oa[t&255]+Oa[t>>8&255]+Oa[t>>16&255]+Oa[t>>24&255]+"-"+Oa[e&255]+Oa[e>>8&255]+"-"+Oa[e>>16&15|64]+Oa[e>>24&255]+"-"+Oa[a&63|128]+Oa[a>>8&255]+"-"+Oa[a>>16&255]+Oa[a>>24&255]+Oa[n&255]+Oa[n>>8&255]+Oa[n>>16&255]+Oa[n>>24&255]).toLowerCase()}function ut(t,e,a){return Math.max(e,Math.min(a,t))}function xI(t,e){return(t%e+e)%e}function bx(t,e,a){return(1-a)*t+a*e}function SL(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function M0(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function vI(t,e){if(e.constructor===Float32Array)return t;let a=M0(e);if(a===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/a,-1)}function SI(t,e){if(e.constructor===Float32Array)return t;let a=M0(e);if(a===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*a)}function yI(){let t={enabled:!0,workingColorSpace:Eu,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===_t&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===_t&&(i.r=al(i.r),i.g=al(i.g),i.b=al(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ts?Ru:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[r].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],n=[.3127,.329];return t.define({[Eu]:{primaries:e,whitePoint:n,transfer:Ru,toXYZ:mM,fromXYZ:gM,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:mM,fromXYZ:gM,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),t}function Ki(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function al(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}function Cx(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ah.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}function Tx(t,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?t+(e-t)*6*a:a<1/2?e:a<2/3?t+(e-t)*6*(2/3-a):t}function Ox(t,e,a,n,i){for(let s=0,r=t.length-3;s<=r;s+=3){Ir.fromArray(t,s);let o=i.x*Math.abs(Ir.x)+i.y*Math.abs(Ir.y)+i.z*Math.abs(Ir.z),l=e.dot(Ir),u=a.dot(Ir),f=n.dot(Ir);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>o)return!1}return!0}function OI(t,e,a,n,i,s,r,o){let l;if(e.side===Za?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,e.side===Ks,o),l===null)return null;Bf.copy(o),Bf.applyMatrix4(t.matrixWorld);let u=a.ray.origin.distanceTo(Bf);return u<a.near||u>a.far?null:{distance:u,point:Bf.clone(),object:t}}function Ff(t,e,a,n,i,s,r,o,l,u){t.getVertexPosition(o,Nf),t.getVertexPosition(l,Pf),t.getVertexPosition(u,Uf);let f=OI(t,e,a,n,Nf,Pf,Uf,wM);if(f){let p=new z;Hs.getBarycoord(wM,Nf,Pf,Uf,p),i&&(f.uv=Hs.getInterpolatedAttribute(i,o,l,u,p,new et)),s&&(f.uv1=Hs.getInterpolatedAttribute(s,o,l,u,p,new et)),r&&(f.normal=Hs.getInterpolatedAttribute(r,o,l,u,p,new z),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let c={a:o,b:l,c:u,normal:new z,materialIndex:0};Hs.getNormal(Nf,Pf,Uf,c.normal),f.face=c,f.barycoord=p}return f}function Fr(t){let e={};for(let a in t){e[a]={};for(let n in t[a]){let i=t[a][n];if(IM(i))i.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[a][n]=null):e[a][n]=i.clone();else if(Array.isArray(i))if(IM(i[0])){let s=[];for(let r=0,o=i.length;r<o;r++)s[r]=i[r].clone();e[a][n]=s}else e[a][n]=i.slice();else e[a][n]=i}}return e}function Fa(t){let e={};for(let a=0;a<t.length;a++){let n=Fr(t[a]);for(let i in n)e[i]=n[i]}return e}function IM(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function FI(t){let e=[];for(let a=0;a<t.length;a++)e.push(t[a].clone());return e}function L0(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}function $o(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function zf(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}function bL(t,e,a,n,i){let s=1-t;return s*s*s*e+3*s*s*t*a+3*s*t*t*n+t*t*t*i}function HI(t,e,a,n,i){let s=1-t;return 3*s*s*(a-e)+6*s*t*(n-a)+3*t*t*(i-n)}function GI(t,e,a,n,i){let s=(t-e)/(i-e);for(let r=0;r<8;r++){let o=bL(s,e,a,n,i)-t;if(Math.abs(o)<1e-10)break;let l=HI(s,e,a,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}function EM(t,e){for(let a=0,n=t.length;a!==n;a+=2)t[a]+=e}function RM(t,e){for(let a=0,n=t.length;a!==n;a+=2)t[a]*=e}function w0(t,e,a,n){let i=QI(n);switch(a){case m0:return t*e;case x0:return t*e/i.components*i.byteLength;case Rh:return t*e/i.components*i.byteLength;case Js:return t*e*2/i.components*i.byteLength;case Dh:return t*e*2/i.components*i.byteLength;case g0:return t*e*3/i.components*i.byteLength;case jn:return t*e*4/i.components*i.byteLength;case Nh:return t*e*4/i.components*i.byteLength;case ju:case $u:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ec:case tc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uh:case Bh:return Math.max(t,16)*Math.max(e,8)/4;case Ph:case Oh:return Math.max(t,8)*Math.max(e,8)/2;case Fh:case kh:case Hh:case Gh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case zh:case ac:case Vh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case jh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case $h:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ep:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case tp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ap:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case np:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ip:case sp:case rp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case op:case lp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case nc:case up:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function QI(t){switch(t){case rn:case d0:return{byteLength:1,components:1};case hl:case f0:case Qn:return{byteLength:2,components:1};case Ih:case Eh:return{byteLength:2,components:4};case Kn:case Th:case Jn:return{byteLength:4,components:1};case h0:case p0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}var OM,Jx,BM,Ju,FM,cl,Ks,Za,_i,Pr,dl,Qx,jx,$x,kM,Ur,zM,HM,GM,VM,qM,WM,XM,YM,e0,t0,ZM,KM,JM,QM,jM,$M,eL,tL,aL,Wf,Xf,Yf,nl,Zf,Kf,Jf,Qf,a0,nL,iL,bi,n0,i0,s0,r0,o0,l0,u0,c0,Or,fl,Ch,Ah,jf,mi,$f,Sa,sL,Qu,Xa,wh,$i,rn,d0,f0,hl,Th,Kn,Jn,Qn,Ih,Eh,Br,h0,p0,m0,g0,jn,Ji,es,x0,Rh,Js,Dh,Nh,ju,$u,ec,tc,Ph,Uh,Oh,Bh,Fh,kh,zh,Hh,Gh,ac,Vh,qh,Wh,Xh,Yh,Zh,Kh,Jh,Qh,jh,$h,ep,tp,ap,np,ip,sp,rp,op,lp,nc,up,Iu,eh,Vf,Vx,qx,Wx,Xx,rL,cp,oL,ts,yn,Eu,Ru,_t,qf,lL,uL,cL,dL,v0,fL,hL,S0,y0,pL,_0,Un,il,hM,sl,vL,xi,Oa,_x,th,et,vi,z,Mx,pM,qe,Lx,mM,gM,ot,Vo,ah,_I,rl,bI,Ax,sn,Ht,nh,_n,Nu,ih,zt,qo,Wn,MI,LI,Os,Mf,vn,xM,vM,Qi,Pu,CI,SM,Wo,qi,Lf,Lu,AI,wI,yM,_M,bM,MM,TI,Xo,wx,Ya,Dr,II,ol,yL,Bs,Cf,lt,Ba,Uu,Xn,Wi,Ix,Xi,Yo,Zo,LM,Ex,Rx,Dx,Nx,Px,Ux,Hs,Gs,Yi,Yn,Af,Ko,Jo,Qo,Fs,ks,Tr,Cu,wf,Tf,Ir,ia,If,EI,gi,Ou,Bu,va,RI,Au,Bx,ll,DI,Pn,Fx,jo,Sn,wu,xa,Si,kx,NI,PI,Zn,UI,Vs,Zi,zx,Ef,Rf,sh,rh,CM,Er,Df,AM,Nf,Pf,Uf,Hx,Of,wM,Bf,On,oh,Rr,BI,kf,qs,TM,lh,Fu,ji,ku,zu,Ws,uh,Hu,Gu,Vu,_L,kI,zI,yi,ch,Nr,dh,fh,Xs,hh,ph,mh,gh,bn,Ys,xh,vh,Sh,qu,Zs,yh,_h,ML,bh,Wu,Gx,DM,NM,Mh,Hf,Gf,pi,Xu,zs,PM,UM,Wa,Yu,Yx,Zu,Ku,el,tl,ul,Lh,C0,VI,A0,qI,WI,XI,YI,ZI,KI,JI,Zx,Ot,jD,Kx,T0=ke(()=>{OM=0,Jx=1,BM=2,Ju=1,FM=2,cl=3,Ks=0,Za=1,_i=2,Pr=0,dl=1,Qx=2,jx=3,$x=4,kM=5,Ur=100,zM=101,HM=102,GM=103,VM=104,qM=200,WM=201,XM=202,YM=203,e0=204,t0=205,ZM=206,KM=207,JM=208,QM=209,jM=210,$M=211,eL=212,tL=213,aL=214,Wf=0,Xf=1,Yf=2,nl=3,Zf=4,Kf=5,Jf=6,Qf=7,a0=0,nL=1,iL=2,bi=0,n0=1,i0=2,s0=3,r0=4,o0=5,l0=6,u0=7,c0=300,Or=301,fl=302,Ch=303,Ah=304,jf=1e3,mi=1001,$f=1002,Sa=1003,sL=1004,Qu=1005,Xa=1006,wh=1007,$i=1008,rn=1009,d0=1010,f0=1011,hl=1012,Th=1013,Kn=1014,Jn=1015,Qn=1016,Ih=1017,Eh=1018,Br=1020,h0=35902,p0=35899,m0=1021,g0=1022,jn=1023,Ji=1026,es=1027,x0=1028,Rh=1029,Js=1030,Dh=1031,Nh=1033,ju=33776,$u=33777,ec=33778,tc=33779,Ph=35840,Uh=35841,Oh=35842,Bh=35843,Fh=36196,kh=37492,zh=37496,Hh=37488,Gh=37489,ac=37490,Vh=37491,qh=37808,Wh=37809,Xh=37810,Yh=37811,Zh=37812,Kh=37813,Jh=37814,Qh=37815,jh=37816,$h=37817,ep=37818,tp=37819,ap=37820,np=37821,ip=36492,sp=36494,rp=36495,op=36283,lp=36284,nc=36285,up=36286,Iu=2300,eh=2301,Vf=2302,Vx=2303,qx=2400,Wx=2401,Xx=2402,rL=3200,cp=0,oL=1,ts="",yn="srgb",Eu="srgb-linear",Ru="linear",_t="srgb",qf=7680,lL=519,uL=512,cL=513,dL=514,v0=515,fL=516,hL=517,S0=518,y0=519,pL=35044,_0="300 es",Un=2e3,il=2001;hM={},sl=null;vL={[Wf]:Wf,[Yf]:Jf,[Zf]:Zf,[nl]:Kf,[Xf]:Xf,[Jf]:Yf,[Qf]:Qf,[Kf]:nl},xi=class{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(a)===-1&&n[e].push(a)}hasEventListener(e,a){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(a)!==-1}removeEventListener(e,a){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(a);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let a=this._listeners;if(a===void 0)return;let n=a[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}},Oa=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_x=Math.PI/180,th=180/Math.PI;et=class{static{this.prototype.isVector2=!0}constructor(e=0,a=0){this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let a=this.x,n=this.y,i=e.elements;return this.x=i[0]*a+i[3]*n+i[6],this.y=i[1]*a+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=ut(this.x,e.x,a.x),this.y=ut(this.y,e.y,a.y),this}clampScalar(e,a){return this.x=ut(this.x,e,a),this.y=ut(this.y,e,a),this}clampLength(e,a){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let n=this.dot(e)/a;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,n=this.y-e.y;return a*a+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,n){return this.x=e.x+(a.x-e.x)*n,this.y=e.y+(a.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){let n=Math.cos(a),i=Math.sin(a),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vi=class{constructor(e=0,a=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=a,this._z=n,this._w=i}static slerpFlat(e,a,n,i,s,r,o){let l=n[i+0],u=n[i+1],f=n[i+2],p=n[i+3],c=s[r+0],h=s[r+1],S=s[r+2],M=s[r+3];if(p!==M||l!==c||u!==h||f!==S){let x=l*c+u*h+f*S+p*M;x<0&&(c=-c,h=-h,S=-S,M=-M,x=-x);let d=1-o;if(x<.9995){let m=Math.acos(x),y=Math.sin(m);d=Math.sin(d*m)/y,o=Math.sin(o*m)/y,l=l*d+c*o,u=u*d+h*o,f=f*d+S*o,p=p*d+M*o}else{l=l*d+c*o,u=u*d+h*o,f=f*d+S*o,p=p*d+M*o;let m=1/Math.sqrt(l*l+u*u+f*f+p*p);l*=m,u*=m,f*=m,p*=m}}e[a]=l,e[a+1]=u,e[a+2]=f,e[a+3]=p}static multiplyQuaternionsFlat(e,a,n,i,s,r){let o=n[i],l=n[i+1],u=n[i+2],f=n[i+3],p=s[r],c=s[r+1],h=s[r+2],S=s[r+3];return e[a]=o*S+f*p+l*h-u*c,e[a+1]=l*S+f*c+u*p-o*h,e[a+2]=u*S+f*h+o*c-l*p,e[a+3]=f*S-o*p-l*c-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,n,i){return this._x=e,this._y=a,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a=!0){let n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,u=o(n/2),f=o(i/2),p=o(s/2),c=l(n/2),h=l(i/2),S=l(s/2);switch(r){case"XYZ":this._x=c*f*p+u*h*S,this._y=u*h*p-c*f*S,this._z=u*f*S+c*h*p,this._w=u*f*p-c*h*S;break;case"YXZ":this._x=c*f*p+u*h*S,this._y=u*h*p-c*f*S,this._z=u*f*S-c*h*p,this._w=u*f*p+c*h*S;break;case"ZXY":this._x=c*f*p-u*h*S,this._y=u*h*p+c*f*S,this._z=u*f*S+c*h*p,this._w=u*f*p-c*h*S;break;case"ZYX":this._x=c*f*p-u*h*S,this._y=u*h*p+c*f*S,this._z=u*f*S-c*h*p,this._w=u*f*p+c*h*S;break;case"YZX":this._x=c*f*p+u*h*S,this._y=u*h*p+c*f*S,this._z=u*f*S-c*h*p,this._w=u*f*p-c*h*S;break;case"XZY":this._x=c*f*p-u*h*S,this._y=u*h*p-c*f*S,this._z=u*f*S+c*h*p,this._w=u*f*p+c*h*S;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,a){let n=a/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let a=e.elements,n=a[0],i=a[4],s=a[8],r=a[1],o=a[5],l=a[9],u=a[2],f=a[6],p=a[10],c=n+o+p;if(c>0){let h=.5/Math.sqrt(c+1);this._w=.25/h,this._x=(f-l)*h,this._y=(s-u)*h,this._z=(r-i)*h}else if(n>o&&n>p){let h=2*Math.sqrt(1+n-o-p);this._w=(f-l)/h,this._x=.25*h,this._y=(i+r)/h,this._z=(s+u)/h}else if(o>p){let h=2*Math.sqrt(1+o-n-p);this._w=(s-u)/h,this._x=(i+r)/h,this._y=.25*h,this._z=(l+f)/h}else{let h=2*Math.sqrt(1+p-n-o);this._w=(r-i)/h,this._x=(s+u)/h,this._y=(l+f)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let n=e.dot(a)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,a){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,a/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){let n=e._x,i=e._y,s=e._z,r=e._w,o=a._x,l=a._y,u=a._z,f=a._w;return this._x=n*f+r*o+i*u-s*l,this._y=i*f+r*l+s*o-n*u,this._z=s*f+r*u+n*l-i*o,this._w=r*f-n*o-i*l-s*u,this._onChangeCallback(),this}slerp(e,a){let n=e._x,i=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,r=-r,o=-o);let l=1-a;if(o<.9995){let u=Math.acos(o),f=Math.sin(u);l=Math.sin(l*u)/f,a=Math.sin(a*u)/f,this._x=this._x*l+n*a,this._y=this._y*l+i*a,this._z=this._z*l+s*a,this._w=this._w*l+r*a,this._onChangeCallback()}else this._x=this._x*l+n*a,this._y=this._y*l+i*a,this._z=this._z*l+s*a,this._w=this._w*l+r*a,this.normalize();return this}slerpQuaternions(e,a,n){return this.copy(e).slerp(a,n)}random(){let e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(a),s*Math.cos(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class{static{this.prototype.isVector3=!0}constructor(e=0,a=0,n=0){this.x=e,this.y=a,this.z=n}set(e,a,n){return n===void 0&&(n=this.z),this.x=e,this.y=a,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return this.applyQuaternion(pM.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion(pM.setFromAxisAngle(e,a))}applyMatrix3(e){let a=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*a+s[3]*n+s[6]*i,this.y=s[1]*a+s[4]*n+s[7]*i,this.z=s[2]*a+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let a=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*a+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*a+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*a+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*a+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){let a=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,l=e.w,u=2*(r*i-o*n),f=2*(o*a-s*i),p=2*(s*n-r*a);return this.x=a+l*u+r*p-o*f,this.y=n+l*f+o*u-s*p,this.z=i+l*p+s*f-r*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let a=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*a+s[4]*n+s[8]*i,this.y=s[1]*a+s[5]*n+s[9]*i,this.z=s[2]*a+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=ut(this.x,e.x,a.x),this.y=ut(this.y,e.y,a.y),this.z=ut(this.z,e.z,a.z),this}clampScalar(e,a){return this.x=ut(this.x,e,a),this.y=ut(this.y,e,a),this.z=ut(this.z,e,a),this}clampLength(e,a){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,n){return this.x=e.x+(a.x-e.x)*n,this.y=e.y+(a.y-e.y)*n,this.z=e.z+(a.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,a){let n=e.x,i=e.y,s=e.z,r=a.x,o=a.y,l=a.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){let a=e.lengthSq();if(a===0)return this.set(0,0,0);let n=e.dot(this)/a;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mx.copy(this).projectOnVector(e),this.sub(Mx)}reflect(e){return this.sub(Mx.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let n=this.dot(e)/a;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return a*a+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,n){let i=Math.sin(a)*e;return this.x=i*Math.sin(n),this.y=Math.cos(a)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,n){return this.x=e*Math.sin(a),this.y=n,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){let a=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=n,this.z=i,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,a=Math.random()*2-1,n=Math.sqrt(1-a*a);return this.x=n*Math.cos(e),this.y=a,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mx=new z,pM=new vi,qe=class{static{this.prototype.isMatrix3=!0}constructor(e,a,n,i,s,r,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,a,n,i,s,r,o,l,u)}set(e,a,n,i,s,r,o,l,u){let f=this.elements;return f[0]=e,f[1]=i,f[2]=o,f[3]=a,f[4]=s,f[5]=l,f[6]=n,f[7]=r,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let a=this.elements,n=e.elements;return a[0]=n[0],a[1]=n[1],a[2]=n[2],a[3]=n[3],a[4]=n[4],a[5]=n[5],a[6]=n[6],a[7]=n[7],a[8]=n[8],this}extractBasis(e,a,n){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let n=e.elements,i=a.elements,s=this.elements,r=n[0],o=n[3],l=n[6],u=n[1],f=n[4],p=n[7],c=n[2],h=n[5],S=n[8],M=i[0],x=i[3],d=i[6],m=i[1],y=i[4],_=i[7],A=i[2],w=i[5],v=i[8];return s[0]=r*M+o*m+l*A,s[3]=r*x+o*y+l*w,s[6]=r*d+o*_+l*v,s[1]=u*M+f*m+p*A,s[4]=u*x+f*y+p*w,s[7]=u*d+f*_+p*v,s[2]=c*M+h*m+S*A,s[5]=c*x+h*y+S*w,s[8]=c*d+h*_+S*v,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){let e=this.elements,a=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],f=e[8];return a*r*f-a*o*u-n*s*f+n*o*l+i*s*u-i*r*l}invert(){let e=this.elements,a=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],f=e[8],p=f*r-o*u,c=o*l-f*s,h=u*s-r*l,S=a*p+n*c+i*h;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/S;return e[0]=p*M,e[1]=(i*u-f*n)*M,e[2]=(o*n-i*r)*M,e[3]=c*M,e[4]=(f*a-i*l)*M,e[5]=(i*s-o*a)*M,e[6]=h*M,e[7]=(n*l-u*a)*M,e[8]=(r*a-n*s)*M,this}transpose(){let e,a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,n,i,s,r,o){let l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*r+u*o)+r+e,-i*u,i*l,-i*(-u*r+l*o)+o+a,0,0,1),this}scale(e,a){return Tu("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lx.makeScale(e,a)),this}rotate(e){return Tu("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lx.makeRotation(-e)),this}translate(e,a){return Tu("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lx.makeTranslation(e,a)),this}makeTranslation(e,a){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,a,0,0,1),this}makeRotation(e){let a=Math.cos(e),n=Math.sin(e);return this.set(a,-n,0,n,a,0,0,0,1),this}makeScale(e,a){return this.set(e,0,0,0,a,0,0,0,1),this}equals(e){let a=this.elements,n=e.elements;for(let i=0;i<9;i++)if(a[i]!==n[i])return!1;return!0}fromArray(e,a=0){for(let n=0;n<9;n++)this.elements[n]=e[n+a];return this}toArray(e=[],a=0){let n=this.elements;return e[a]=n[0],e[a+1]=n[1],e[a+2]=n[2],e[a+3]=n[3],e[a+4]=n[4],e[a+5]=n[5],e[a+6]=n[6],e[a+7]=n[7],e[a+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Lx=new qe,mM=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gM=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot=yI();ah=class{static getDataURL(e,a="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vo===void 0&&(Vo=Du("canvas")),Vo.width=e.width,Vo.height=e.height;let i=Vo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Vo}return n.toDataURL(a)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let a=Du("canvas");a.width=e.width,a.height=e.height;let n=a.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Ki(s[r]/255)*255;return n.putImageData(i,0,0),a}else if(e.data){let a=e.data.slice(0);for(let n=0;n<a.length;n++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[n]=Math.floor(Ki(a[n]/255)*255):a[n]=Ki(a[n]);return{data:a,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_I=0,rl=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_I++}),this.uuid=ic(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?e.set(a.videoWidth,a.videoHeight,0):typeof VideoFrame<"u"&&a instanceof VideoFrame?e.set(a.displayWidth,a.displayHeight,0):a!==null?e.set(a.width||0,a.height||0,a.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(Cx(i[r].image)):s.push(Cx(i[r]))}else s=Cx(i);n.url=s}return a||(e.images[this.uuid]=n),n}};bI=0,Ax=new z,sn=class t extends xi{constructor(e=t.DEFAULT_IMAGE,a=t.DEFAULT_MAPPING,n=mi,i=mi,s=Xa,r=$i,o=jn,l=rn,u=t.DEFAULT_ANISOTROPY,f=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bI++}),this.uuid=ic(),this.name="",this.source=new rl(e),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ax).x}get height(){return this.source.getSize(Ax).y}get depth(){return this.source.getSize(Ax).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let a in e){let n=e[a];if(n===void 0){Fe(`Texture.setValues(): parameter '${a}' has value of undefined.`);continue}let i=this[a];if(i===void 0){Fe(`Texture.setValues(): property '${a}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[a]=n}}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),a||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==c0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jf:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case $f:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jf:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case $f:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=c0;sn.DEFAULT_ANISOTROPY=1;Ht=class{static{this.prototype.isVector4=!0}constructor(e=0,a=0,n=0,i=1){this.x=e,this.y=a,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,n,i){return this.x=e,this.y=a,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let a=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*a+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*a+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*a+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*a+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,n,i,s,l=e.elements,u=l[0],f=l[4],p=l[8],c=l[1],h=l[5],S=l[9],M=l[2],x=l[6],d=l[10];if(Math.abs(f-c)<.01&&Math.abs(p-M)<.01&&Math.abs(S-x)<.01){if(Math.abs(f+c)<.1&&Math.abs(p+M)<.1&&Math.abs(S+x)<.1&&Math.abs(u+h+d-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;let y=(u+1)/2,_=(h+1)/2,A=(d+1)/2,w=(f+c)/4,v=(p+M)/4,L=(S+x)/4;return y>_&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=w/n,s=v/n):_>A?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=w/i,s=L/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=v/s,i=L/s),this.set(n,i,s,a),this}let m=Math.sqrt((x-S)*(x-S)+(p-M)*(p-M)+(c-f)*(c-f));return Math.abs(m)<.001&&(m=1),this.x=(x-S)/m,this.y=(p-M)/m,this.z=(c-f)/m,this.w=Math.acos((u+h+d-1)/2),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=ut(this.x,e.x,a.x),this.y=ut(this.y,e.y,a.y),this.z=ut(this.z,e.z,a.z),this.w=ut(this.w,e.w,a.w),this}clampScalar(e,a){return this.x=ut(this.x,e,a),this.y=ut(this.y,e,a),this.z=ut(this.z,e,a),this.w=ut(this.w,e,a),this}clampLength(e,a){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,n){return this.x=e.x+(a.x-e.x)*n,this.y=e.y+(a.y-e.y)*n,this.z=e.z+(a.z-e.z)*n,this.w=e.w+(a.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nh=class extends xi{constructor(e=1,a=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xa,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=a,this.depth=n.depth,this.scissor=new Ht(0,0,e,a),this.scissorTest=!1,this.viewport=new Ht(0,0,e,a),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new sn({width:e,height:a,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let a={minFilter:Xa,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(a.mapping=e.mapping),e.wrapS!==void 0&&(a.wrapS=e.wrapS),e.wrapT!==void 0&&(a.wrapT=e.wrapT),e.wrapR!==void 0&&(a.wrapR=e.wrapR),e.magFilter!==void 0&&(a.magFilter=e.magFilter),e.minFilter!==void 0&&(a.minFilter=e.minFilter),e.format!==void 0&&(a.format=e.format),e.type!==void 0&&(a.type=e.type),e.anisotropy!==void 0&&(a.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(a.colorSpace=e.colorSpace),e.flipY!==void 0&&(a.flipY=e.flipY),e.generateMipmaps!==void 0&&(a.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(a.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(a.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(a)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,a,n=1){if(this.width!==e||this.height!==a||this.depth!==n){this.width=e,this.height=a,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=a,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let a=0,n=e.textures.length;a<n;a++){this.textures[a]=e.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;let i=Object.assign({},e.textures[a].image);this.textures[a].source=new rl(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let a=e.depthTexture.clone();a.renderTarget=null,this.depthTexture=a}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends nh{constructor(e=1,a=1,n={}){super(e,a,n),this.isWebGLRenderTarget=!0}},Nu=class extends sn{constructor(e=null,a=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:a,height:n,depth:i},this.magFilter=Sa,this.minFilter=Sa,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},ih=class extends sn{constructor(e=null,a=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:a,height:n,depth:i},this.magFilter=Sa,this.minFilter=Sa,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},zt=class t{static{this.prototype.isMatrix4=!0}constructor(e,a,n,i,s,r,o,l,u,f,p,c,h,S,M,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,a,n,i,s,r,o,l,u,f,p,c,h,S,M,x)}set(e,a,n,i,s,r,o,l,u,f,p,c,h,S,M,x){let d=this.elements;return d[0]=e,d[4]=a,d[8]=n,d[12]=i,d[1]=s,d[5]=r,d[9]=o,d[13]=l,d[2]=u,d[6]=f,d[10]=p,d[14]=c,d[3]=h,d[7]=S,d[11]=M,d[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let a=this.elements,n=e.elements;return a[0]=n[0],a[1]=n[1],a[2]=n[2],a[3]=n[3],a[4]=n[4],a[5]=n[5],a[6]=n[6],a[7]=n[7],a[8]=n[8],a[9]=n[9],a[10]=n[10],a[11]=n[11],a[12]=n[12],a[13]=n[13],a[14]=n[14],a[15]=n[15],this}copyPosition(e){let a=this.elements,n=e.elements;return a[12]=n[12],a[13]=n[13],a[14]=n[14],this}setFromMatrix3(e){let a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,n){return this.determinantAffine()===0?(e.set(1,0,0),a.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,a,n){return this.set(e.x,a.x,n.x,0,e.y,a.y,n.y,0,e.z,a.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let a=this.elements,n=e.elements,i=1/qo.setFromMatrixColumn(e,0).length(),s=1/qo.setFromMatrixColumn(e,1).length(),r=1/qo.setFromMatrixColumn(e,2).length();return a[0]=n[0]*i,a[1]=n[1]*i,a[2]=n[2]*i,a[3]=0,a[4]=n[4]*s,a[5]=n[5]*s,a[6]=n[6]*s,a[7]=0,a[8]=n[8]*r,a[9]=n[9]*r,a[10]=n[10]*r,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){let a=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),u=Math.sin(i),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let c=r*f,h=r*p,S=o*f,M=o*p;a[0]=l*f,a[4]=-l*p,a[8]=u,a[1]=h+S*u,a[5]=c-M*u,a[9]=-o*l,a[2]=M-c*u,a[6]=S+h*u,a[10]=r*l}else if(e.order==="YXZ"){let c=l*f,h=l*p,S=u*f,M=u*p;a[0]=c+M*o,a[4]=S*o-h,a[8]=r*u,a[1]=r*p,a[5]=r*f,a[9]=-o,a[2]=h*o-S,a[6]=M+c*o,a[10]=r*l}else if(e.order==="ZXY"){let c=l*f,h=l*p,S=u*f,M=u*p;a[0]=c-M*o,a[4]=-r*p,a[8]=S+h*o,a[1]=h+S*o,a[5]=r*f,a[9]=M-c*o,a[2]=-r*u,a[6]=o,a[10]=r*l}else if(e.order==="ZYX"){let c=r*f,h=r*p,S=o*f,M=o*p;a[0]=l*f,a[4]=S*u-h,a[8]=c*u+M,a[1]=l*p,a[5]=M*u+c,a[9]=h*u-S,a[2]=-u,a[6]=o*l,a[10]=r*l}else if(e.order==="YZX"){let c=r*l,h=r*u,S=o*l,M=o*u;a[0]=l*f,a[4]=M-c*p,a[8]=S*p+h,a[1]=p,a[5]=r*f,a[9]=-o*f,a[2]=-u*f,a[6]=h*p+S,a[10]=c-M*p}else if(e.order==="XZY"){let c=r*l,h=r*u,S=o*l,M=o*u;a[0]=l*f,a[4]=-p,a[8]=u*f,a[1]=c*p+M,a[5]=r*f,a[9]=h*p-S,a[2]=S*p-h,a[6]=o*f,a[10]=M*p+c}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(MI,e,LI)}lookAt(e,a,n){let i=this.elements;return vn.subVectors(e,a),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Os.crossVectors(n,vn),Os.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Os.crossVectors(n,vn)),Os.normalize(),Mf.crossVectors(vn,Os),i[0]=Os.x,i[4]=Mf.x,i[8]=vn.x,i[1]=Os.y,i[5]=Mf.y,i[9]=vn.y,i[2]=Os.z,i[6]=Mf.z,i[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let n=e.elements,i=a.elements,s=this.elements,r=n[0],o=n[4],l=n[8],u=n[12],f=n[1],p=n[5],c=n[9],h=n[13],S=n[2],M=n[6],x=n[10],d=n[14],m=n[3],y=n[7],_=n[11],A=n[15],w=i[0],v=i[4],L=i[8],P=i[12],E=i[1],U=i[5],H=i[9],J=i[13],N=i[2],Z=i[6],K=i[10],V=i[14],ie=i[3],W=i[7],ae=i[11],ne=i[15];return s[0]=r*w+o*E+l*N+u*ie,s[4]=r*v+o*U+l*Z+u*W,s[8]=r*L+o*H+l*K+u*ae,s[12]=r*P+o*J+l*V+u*ne,s[1]=f*w+p*E+c*N+h*ie,s[5]=f*v+p*U+c*Z+h*W,s[9]=f*L+p*H+c*K+h*ae,s[13]=f*P+p*J+c*V+h*ne,s[2]=S*w+M*E+x*N+d*ie,s[6]=S*v+M*U+x*Z+d*W,s[10]=S*L+M*H+x*K+d*ae,s[14]=S*P+M*J+x*V+d*ne,s[3]=m*w+y*E+_*N+A*ie,s[7]=m*v+y*U+_*Z+A*W,s[11]=m*L+y*H+_*K+A*ae,s[15]=m*P+y*J+_*V+A*ne,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){let e=this.elements,a=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],l=e[9],u=e[13],f=e[2],p=e[6],c=e[10],h=e[14],S=e[3],M=e[7],x=e[11],d=e[15],m=l*h-u*c,y=o*h-u*p,_=o*c-l*p,A=r*h-u*f,w=r*c-l*f,v=r*p-o*f;return a*(M*m-x*y+d*_)-n*(S*m-x*A+d*w)+i*(S*y-M*A+d*v)-s*(S*_-M*w+x*v)}determinantAffine(){let e=this.elements,a=e[0],n=e[4],i=e[8],s=e[1],r=e[5],o=e[9],l=e[2],u=e[6],f=e[10];return a*(r*f-o*u)-n*(s*f-o*l)+i*(s*u-r*l)}transpose(){let e=this.elements,a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=a,i[14]=n),this}invert(){let e=this.elements,a=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],f=e[8],p=e[9],c=e[10],h=e[11],S=e[12],M=e[13],x=e[14],d=e[15],m=a*o-n*r,y=a*l-i*r,_=a*u-s*r,A=n*l-i*o,w=n*u-s*o,v=i*u-s*l,L=f*M-p*S,P=f*x-c*S,E=f*d-h*S,U=p*x-c*M,H=p*d-h*M,J=c*d-h*x,N=m*J-y*H+_*U+A*E-w*P+v*L;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/N;return e[0]=(o*J-l*H+u*U)*Z,e[1]=(i*H-n*J-s*U)*Z,e[2]=(M*v-x*w+d*A)*Z,e[3]=(c*w-p*v-h*A)*Z,e[4]=(l*E-r*J-u*P)*Z,e[5]=(a*J-i*E+s*P)*Z,e[6]=(x*_-S*v-d*y)*Z,e[7]=(f*v-c*_+h*y)*Z,e[8]=(r*H-o*E+u*L)*Z,e[9]=(n*E-a*H-s*L)*Z,e[10]=(S*w-M*_+d*m)*Z,e[11]=(p*_-f*w-h*m)*Z,e[12]=(o*P-r*U-l*L)*Z,e[13]=(a*U-n*P+i*L)*Z,e[14]=(M*y-S*A-x*m)*Z,e[15]=(f*A-p*y+c*m)*Z,this}scale(e){let a=this.elements,n=e.x,i=e.y,s=e.z;return a[0]*=n,a[4]*=i,a[8]*=s,a[1]*=n,a[5]*=i,a[9]*=s,a[2]*=n,a[6]*=i,a[10]*=s,a[3]*=n,a[7]*=i,a[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,n,i))}makeTranslation(e,a,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,a,0,0,1,n,0,0,0,1),this}makeRotationX(e){let a=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,a,-n,0,0,n,a,0,0,0,0,1),this}makeRotationY(e){let a=Math.cos(e),n=Math.sin(e);return this.set(a,0,n,0,0,1,0,0,-n,0,a,0,0,0,0,1),this}makeRotationZ(e){let a=Math.cos(e),n=Math.sin(e);return this.set(a,-n,0,0,n,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){let n=Math.cos(a),i=Math.sin(a),s=1-n,r=e.x,o=e.y,l=e.z,u=s*r,f=s*o;return this.set(u*r+n,u*o-i*l,u*l+i*o,0,u*o+i*l,f*o+n,f*l-i*r,0,u*l-i*o,f*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,a,n){return this.set(e,0,0,0,0,a,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,a,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,a,i,1,0,0,0,0,1),this}compose(e,a,n){let i=this.elements,s=a._x,r=a._y,o=a._z,l=a._w,u=s+s,f=r+r,p=o+o,c=s*u,h=s*f,S=s*p,M=r*f,x=r*p,d=o*p,m=l*u,y=l*f,_=l*p,A=n.x,w=n.y,v=n.z;return i[0]=(1-(M+d))*A,i[1]=(h+_)*A,i[2]=(S-y)*A,i[3]=0,i[4]=(h-_)*w,i[5]=(1-(c+d))*w,i[6]=(x+m)*w,i[7]=0,i[8]=(S+y)*v,i[9]=(x-m)*v,i[10]=(1-(c+M))*v,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,a,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),a.identity(),this;let r=qo.set(i[0],i[1],i[2]).length(),o=qo.set(i[4],i[5],i[6]).length(),l=qo.set(i[8],i[9],i[10]).length();s<0&&(r=-r),Wn.copy(this);let u=1/r,f=1/o,p=1/l;return Wn.elements[0]*=u,Wn.elements[1]*=u,Wn.elements[2]*=u,Wn.elements[4]*=f,Wn.elements[5]*=f,Wn.elements[6]*=f,Wn.elements[8]*=p,Wn.elements[9]*=p,Wn.elements[10]*=p,a.setFromRotationMatrix(Wn),n.x=r,n.y=o,n.z=l,this}makePerspective(e,a,n,i,s,r,o=Un,l=!1){let u=this.elements,f=2*s/(a-e),p=2*s/(n-i),c=(a+e)/(a-e),h=(n+i)/(n-i),S,M;if(l)S=s/(r-s),M=r*s/(r-s);else if(o===Un)S=-(r+s)/(r-s),M=-2*r*s/(r-s);else if(o===il)S=-r/(r-s),M=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=f,u[4]=0,u[8]=c,u[12]=0,u[1]=0,u[5]=p,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=S,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,a,n,i,s,r,o=Un,l=!1){let u=this.elements,f=2/(a-e),p=2/(n-i),c=-(a+e)/(a-e),h=-(n+i)/(n-i),S,M;if(l)S=1/(r-s),M=r/(r-s);else if(o===Un)S=-2/(r-s),M=-(r+s)/(r-s);else if(o===il)S=-1/(r-s),M=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=f,u[4]=0,u[8]=0,u[12]=c,u[1]=0,u[5]=p,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=S,u[14]=M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let a=this.elements,n=e.elements;for(let i=0;i<16;i++)if(a[i]!==n[i])return!1;return!0}fromArray(e,a=0){for(let n=0;n<16;n++)this.elements[n]=e[n+a];return this}toArray(e=[],a=0){let n=this.elements;return e[a]=n[0],e[a+1]=n[1],e[a+2]=n[2],e[a+3]=n[3],e[a+4]=n[4],e[a+5]=n[5],e[a+6]=n[6],e[a+7]=n[7],e[a+8]=n[8],e[a+9]=n[9],e[a+10]=n[10],e[a+11]=n[11],e[a+12]=n[12],e[a+13]=n[13],e[a+14]=n[14],e[a+15]=n[15],e}},qo=new z,Wn=new zt,MI=new z(0,0,0),LI=new z(1,1,1),Os=new z,Mf=new z,vn=new z,xM=new zt,vM=new vi,Qi=class t{constructor(e=0,a=0,n=0,i=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=a,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,n,i=this._order){return this._x=e,this._y=a,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,n=!0){let i=e.elements,s=i[0],r=i[4],o=i[8],l=i[1],u=i[5],f=i[9],p=i[2],c=i[6],h=i[10];switch(a){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,h),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-r,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ut(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(c,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,u));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-ut(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,h),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,n){return xM.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xM,a,n)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return vM.setFromEuler(this),this.setFromQuaternion(vM,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qi.DEFAULT_ORDER="XYZ";Pu=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},CI=0,SM=new z,Wo=new vi,qi=new zt,Lf=new z,Lu=new z,AI=new z,wI=new vi,yM=new z(1,0,0),_M=new z(0,1,0),bM=new z(0,0,1),MM={type:"added"},TI={type:"removed"},Xo={type:"childadded",child:null},wx={type:"childremoved",child:null},Ya=class t extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CI++}),this.uuid=ic(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new z,a=new Qi,n=new vi,i=new z(1,1,1);function s(){n.setFromEuler(a,!1)}function r(){a.setFromQuaternion(n,void 0,!1)}a._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new zt},normalMatrix:{value:new qe}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return Wo.setFromAxisAngle(e,a),this.quaternion.multiply(Wo),this}rotateOnWorldAxis(e,a){return Wo.setFromAxisAngle(e,a),this.quaternion.premultiply(Wo),this}rotateX(e){return this.rotateOnAxis(yM,e)}rotateY(e){return this.rotateOnAxis(_M,e)}rotateZ(e){return this.rotateOnAxis(bM,e)}translateOnAxis(e,a){return SM.copy(e).applyQuaternion(this.quaternion),this.position.add(SM.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis(yM,e)}translateY(e){return this.translateOnAxis(_M,e)}translateZ(e){return this.translateOnAxis(bM,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,a,n){e.isVector3?Lf.copy(e):Lf.set(e,a,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Lu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Lu,Lf,this.up):qi.lookAt(Lf,Lu,this.up),this.quaternion.setFromRotationMatrix(qi),i&&(qi.extractRotation(i.matrixWorld),Wo.setFromRotationMatrix(qi),this.quaternion.premultiply(Wo.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(MM),Xo.child=e,this.dispatchEvent(Xo),Xo.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(TI),wx.child=e,this.dispatchEvent(wx),wx.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(MM),Xo.child=e,this.dispatchEvent(Xo),Xo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,a);if(r!==void 0)return r}}getObjectsByProperty(e,a,n=[]){this[e]===a&&n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,a,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lu,e,AI),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lu,wI,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let a=this.children;for(let n=0,i=a.length;n<i;n++)a[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let a=this.children;for(let n=0,i=a.length;n<i;n++)a[n].traverseVisible(e)}traverseAncestors(e){let a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let a=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=a-s[0]*a-s[4]*n-s[8]*i,s[13]+=n-s[1]*a-s[5]*n-s[9]*i,s[14]+=i-s[2]*a-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let a=this.children;for(let n=0,i=a.length;n<i;n++)a[n].updateMatrixWorld(e)}updateWorldMatrix(e,a,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),a===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){let a=e===void 0||typeof e=="string",n={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){let p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(a){let o=r(e.geometries),l=r(e.materials),u=r(e.textures),f=r(e.images),p=r(e.shapes),c=r(e.skeletons),h=r(e.animations),S=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),c.length>0&&(n.skeletons=c),h.length>0&&(n.animations=h),S.length>0&&(n.nodes=S)}return n.object=i,n;function r(o){let l=[];for(let u in o){let f=o[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ya.DEFAULT_UP=new z(0,1,0);Ya.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ya.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Dr=class extends Ya{constructor(){super(),this.isGroup=!0,this.type="Group"}},II={type:"move"},ol=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let a=this._hand;if(a)for(let n of e.hand.values())this._getHandJoint(a,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,a,n){let i=null,s=null,r=null,o=this._targetRay,l=this._grip,u=this._hand;if(e&&a.session.visibilityState!=="visible-blurred"){if(u&&e.hand){r=!0;for(let M of e.hand.values()){let x=a.getJointPose(M,n),d=this._getHandJoint(u,M);x!==null&&(d.matrix.fromArray(x.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=x.radius),d.visible=x!==null}let f=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],c=f.position.distanceTo(p.position),h=.02,S=.005;u.inputState.pinching&&c>h+S?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&c<=h-S&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=a.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=a.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(II)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=r!==null),this}_getHandJoint(e,a){if(e.joints[a.jointName]===void 0){let n=new Dr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[a.jointName]=n,e.add(n)}return e.joints[a.jointName]}},yL={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bs={h:0,s:0,l:0},Cf={h:0,s:0,l:0};lt=class{constructor(e,a,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,a,n)}set(e,a,n){if(a===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,a,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,a=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,a),this}setRGB(e,a,n,i=ot.workingColorSpace){return this.r=e,this.g=a,this.b=n,ot.colorSpaceToWorking(this,i),this}setHSL(e,a,n,i=ot.workingColorSpace){if(e=xI(e,1),a=ut(a,0,1),n=ut(n,0,1),a===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+a):n+a-n*a,r=2*n-s;this.r=Tx(r,s,e+1/3),this.g=Tx(r,s,e),this.b=Tx(r,s,e-1/3)}return ot.colorSpaceToWorking(this,i),this}setStyle(e,a=yn){function n(s){s!==void 0&&parseFloat(s)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,a);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,a);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,a);break;default:Fe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,a);if(r===6)return this.setHex(parseInt(s,16),a);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,a);return this}setColorName(e,a=yn){let n=yL[e.toLowerCase()];return n!==void 0?this.setHex(n,a):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=al(e.r),this.g=al(e.g),this.b=al(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return ot.workingToColorSpace(Ba.copy(this),e),Math.round(ut(Ba.r*255,0,255))*65536+Math.round(ut(Ba.g*255,0,255))*256+Math.round(ut(Ba.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,a=ot.workingColorSpace){ot.workingToColorSpace(Ba.copy(this),a);let n=Ba.r,i=Ba.g,s=Ba.b,r=Math.max(n,i,s),o=Math.min(n,i,s),l,u,f=(o+r)/2;if(o===r)l=0,u=0;else{let p=r-o;switch(u=f<=.5?p/(r+o):p/(2-r-o),r){case n:l=(i-s)/p+(i<s?6:0);break;case i:l=(s-n)/p+2;break;case s:l=(n-i)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,a=ot.workingColorSpace){return ot.workingToColorSpace(Ba.copy(this),a),e.r=Ba.r,e.g=Ba.g,e.b=Ba.b,e}getStyle(e=yn){ot.workingToColorSpace(Ba.copy(this),e);let a=Ba.r,n=Ba.g,i=Ba.b;return e!==yn?`color(${e} ${a.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,a,n){return this.getHSL(Bs),this.setHSL(Bs.h+e,Bs.s+a,Bs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,n){return this.r=e.r+(a.r-e.r)*n,this.g=e.g+(a.g-e.g)*n,this.b=e.b+(a.b-e.b)*n,this}lerpHSL(e,a){this.getHSL(Bs),e.getHSL(Cf);let n=bx(Bs.h,Cf.h,a),i=bx(Bs.s,Cf.s,a),s=bx(Bs.l,Cf.l,a);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let a=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*a+s[3]*n+s[6]*i,this.g=s[1]*a+s[4]*n+s[7]*i,this.b=s[2]*a+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ba=new lt;lt.NAMES=yL;Uu=class extends Ya{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,a){return super.copy(e,a),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let a=super.toJSON(e);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),a.object.backgroundBlurriness=this.backgroundBlurriness,a.object.backgroundIntensity=this.backgroundIntensity,a.object.backgroundRotation=this.backgroundRotation.toArray(),a.object.environmentIntensity=this.environmentIntensity,a.object.environmentRotation=this.environmentRotation.toArray(),a}},Xn=new z,Wi=new z,Ix=new z,Xi=new z,Yo=new z,Zo=new z,LM=new z,Ex=new z,Rx=new z,Dx=new z,Nx=new Ht,Px=new Ht,Ux=new Ht,Hs=class t{constructor(e=new z,a=new z,n=new z){this.a=e,this.b=a,this.c=n}static getNormal(e,a,n,i){i.subVectors(n,a),Xn.subVectors(e,a),i.cross(Xn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,a,n,i,s){Xn.subVectors(i,a),Wi.subVectors(n,a),Ix.subVectors(e,a);let r=Xn.dot(Xn),o=Xn.dot(Wi),l=Xn.dot(Ix),u=Wi.dot(Wi),f=Wi.dot(Ix),p=r*u-o*o;if(p===0)return s.set(0,0,0),null;let c=1/p,h=(u*l-o*f)*c,S=(r*f-o*l)*c;return s.set(1-h-S,S,h)}static containsPoint(e,a,n,i){return this.getBarycoord(e,a,n,i,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,a,n,i,s,r,o,l){return this.getBarycoord(e,a,n,i,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xi.x),l.addScaledVector(r,Xi.y),l.addScaledVector(o,Xi.z),l)}static getInterpolatedAttribute(e,a,n,i,s,r){return Nx.setScalar(0),Px.setScalar(0),Ux.setScalar(0),Nx.fromBufferAttribute(e,a),Px.fromBufferAttribute(e,n),Ux.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(Nx,s.x),r.addScaledVector(Px,s.y),r.addScaledVector(Ux,s.z),r}static isFrontFacing(e,a,n,i){return Xn.subVectors(n,a),Wi.subVectors(e,a),Xn.cross(Wi).dot(i)<0}set(e,a,n){return this.a.copy(e),this.b.copy(a),this.c.copy(n),this}setFromPointsAndIndices(e,a,n,i){return this.a.copy(e[a]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,a,n,i){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),Xn.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return t.getBarycoord(e,this.a,this.b,this.c,a)}getInterpolation(e,a,n,i,s){return t.getInterpolation(e,this.a,this.b,this.c,a,n,i,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){let n=this.a,i=this.b,s=this.c,r,o;Yo.subVectors(i,n),Zo.subVectors(s,n),Ex.subVectors(e,n);let l=Yo.dot(Ex),u=Zo.dot(Ex);if(l<=0&&u<=0)return a.copy(n);Rx.subVectors(e,i);let f=Yo.dot(Rx),p=Zo.dot(Rx);if(f>=0&&p<=f)return a.copy(i);let c=l*p-f*u;if(c<=0&&l>=0&&f<=0&&l-f>0)return r=l/(l-f),a.copy(n).addScaledVector(Yo,r);Dx.subVectors(e,s);let h=Yo.dot(Dx),S=Zo.dot(Dx);if(S>=0&&h<=S)return a.copy(s);let M=h*u-l*S;if(M<=0&&u>=0&&S<=0)return o=u/(u-S),a.copy(n).addScaledVector(Zo,o);let x=f*S-h*p;if(x<=0&&p-f>=0&&h-S>=0)return LM.subVectors(s,i),o=(p-f)/(p-f+(h-S)),a.copy(i).addScaledVector(LM,o);let d=1/(x+M+c);return r=M*d,o=c*d,a.copy(n).addScaledVector(Yo,r).addScaledVector(Zo,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gs=class{constructor(e=new z(1/0,1/0,1/0),a=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){this.makeEmpty();for(let a=0,n=e.length;a<n;a+=3)this.expandByPoint(Yn.fromArray(e,a));return this}setFromBufferAttribute(e){this.makeEmpty();for(let a=0,n=e.count;a<n;a++)this.expandByPoint(Yn.fromBufferAttribute(e,a));return this}setFromPoints(e){this.makeEmpty();for(let a=0,n=e.length;a<n;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){let n=Yn.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,a=!1){return this.makeEmpty(),this.expandByObject(e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,a=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(a===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Yn):Yn.fromBufferAttribute(s,r),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Af.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Af.copy(n.boundingBox)),Af.applyMatrix4(e.matrixWorld),this.union(Af)}let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],a);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,n;return e.normal.x>0?(a=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),a<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cu),wf.subVectors(this.max,Cu),Ko.subVectors(e.a,Cu),Jo.subVectors(e.b,Cu),Qo.subVectors(e.c,Cu),Fs.subVectors(Jo,Ko),ks.subVectors(Qo,Jo),Tr.subVectors(Ko,Qo);let a=[0,-Fs.z,Fs.y,0,-ks.z,ks.y,0,-Tr.z,Tr.y,Fs.z,0,-Fs.x,ks.z,0,-ks.x,Tr.z,0,-Tr.x,-Fs.y,Fs.x,0,-ks.y,ks.x,0,-Tr.y,Tr.x,0];return!Ox(a,Ko,Jo,Qo,wf)||(a=[1,0,0,0,1,0,0,0,1],!Ox(a,Ko,Jo,Qo,wf))?!1:(Tf.crossVectors(Fs,ks),a=[Tf.x,Tf.y,Tf.z],Ox(a,Ko,Jo,Qo,wf))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Yi=[new z,new z,new z,new z,new z,new z,new z,new z],Yn=new z,Af=new Gs,Ko=new z,Jo=new z,Qo=new z,Fs=new z,ks=new z,Tr=new z,Cu=new z,wf=new z,Tf=new z,Ir=new z;ia=new z,If=new et,EI=0,gi=class extends xi{constructor(e,a,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:EI++}),this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=n,this.usage=pL,this.updateRanges=[],this.gpuType=Jn,this.version=0,this._normalizationScale=e!==void 0?M0(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,a,n){e*=this.itemSize,n*=a.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=a.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,n=this.count;a<n;a++)If.fromBufferAttribute(this,a),If.applyMatrix3(e),this.setXY(a,If.x,If.y);else if(this.itemSize===3)for(let a=0,n=this.count;a<n;a++)ia.fromBufferAttribute(this,a),ia.applyMatrix3(e),this.setXYZ(a,ia.x,ia.y,ia.z);return this}applyMatrix4(e){for(let a=0,n=this.count;a<n;a++)ia.fromBufferAttribute(this,a),ia.applyMatrix4(e),this.setXYZ(a,ia.x,ia.y,ia.z);return this}applyNormalMatrix(e){for(let a=0,n=this.count;a<n;a++)ia.fromBufferAttribute(this,a),ia.applyNormalMatrix(e),this.setXYZ(a,ia.x,ia.y,ia.z);return this}transformDirection(e){for(let a=0,n=this.count;a<n;a++)ia.fromBufferAttribute(this,a),ia.transformDirection(e),this.setXYZ(a,ia.x,ia.y,ia.z);return this}set(e,a=0){return this.array.set(e,a),this}getComponent(e,a){let n=this.array[e*this.itemSize+a];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,a,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+a]=n,this}getX(e){let a=this.array[e*this.itemSize];return this.normalized&&(a=this._denormalize(a)),a}setX(e,a){return this.normalized&&(a=this._normalize(a)),this.array[e*this.itemSize]=a,this}getY(e){let a=this.array[e*this.itemSize+1];return this.normalized&&(a=this._denormalize(a)),a}setY(e,a){return this.normalized&&(a=this._normalize(a)),this.array[e*this.itemSize+1]=a,this}getZ(e){let a=this.array[e*this.itemSize+2];return this.normalized&&(a=this._denormalize(a)),a}setZ(e,a){return this.normalized&&(a=this._normalize(a)),this.array[e*this.itemSize+2]=a,this}getW(e){let a=this.array[e*this.itemSize+3];return this.normalized&&(a=this._denormalize(a)),a}setW(e,a){return this.normalized&&(a=this._normalize(a)),this.array[e*this.itemSize+3]=a,this}setXY(e,a,n){return e*=this.itemSize,this.normalized&&(a=this._normalize(a),n=this._normalize(n)),this.array[e+0]=a,this.array[e+1]=n,this}setXYZ(e,a,n,i){return e*=this.itemSize,this.normalized&&(a=this._normalize(a),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=a,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,a,n,i,s){return e*=this.itemSize,this.normalized&&(a=this._normalize(a),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=a,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let a=this._normalizationScale;return a!==void 0?Math.max(e/a,-1):vI(e,this.array)}_normalize(e){let a=this._normalizationScale;return a!==void 0?Math.round(e*a):SI(e,this.array)}},Ou=class extends gi{constructor(e,a,n){super(new Uint16Array(e),a,n)}},Bu=class extends gi{constructor(e,a,n){super(new Uint32Array(e),a,n)}},va=class extends gi{constructor(e,a,n){super(new Float32Array(e),a,n)}},RI=new Gs,Au=new z,Bx=new z,ll=class{constructor(e=new z,a=-1){this.isSphere=!0,this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){let n=this.center;a!==void 0?n.copy(a):RI.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){let n=this.center.distanceToSquared(e);return a.copy(e),n>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Au.subVectors(e,this.center);let a=Au.lengthSq();if(a>this.radius*this.radius){let n=Math.sqrt(a),i=(n-this.radius)*.5;this.center.addScaledVector(Au,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bx.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Au.copy(e.center).add(Bx)),this.expandByPoint(Au.copy(e.center).sub(Bx))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},DI=0,Pn=new zt,Fx=new Ya,jo=new z,Sn=new Gs,wu=new Gs,xa=new z,Si=class t extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DI++}),this.uuid=ic(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mI(e)?Bu:Ou)(e,1):this.index=e,this}setIndirect(e,a=0){return this.indirect=e,this.indirectOffset=a,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,n=0){this.groups.push({start:e,count:a,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){let a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,a,n){return Pn.makeTranslation(e,a,n),this.applyMatrix4(Pn),this}scale(e,a,n){return Pn.makeScale(e,a,n),this.applyMatrix4(Pn),this}lookAt(e){return Fx.lookAt(e),Fx.updateMatrix(),this.applyMatrix4(Fx.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jo).negate(),this.translate(jo.x,jo.y,jo.z),this}setFromPoints(e){let a=this.getAttribute("position");if(a===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new va(n,3))}else{let n=Math.min(e.length,a.count);for(let i=0;i<n;i++){let s=e[i];a.setXYZ(i,s.x,s.y,s.z||0)}e.length>a.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gs);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let n=0,i=a.length;n<i;n++){let s=a[n];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(xa.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(xa),xa.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(xa)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ll);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),a)for(let s=0,r=a.length;s<r;s++){let o=a[s];wu.setFromBufferAttribute(o),this.morphTargetsRelative?(xa.addVectors(Sn.min,wu.min),Sn.expandByPoint(xa),xa.addVectors(Sn.max,wu.max),Sn.expandByPoint(xa)):(Sn.expandByPoint(wu.min),Sn.expandByPoint(wu.max))}Sn.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)xa.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(xa));if(a)for(let s=0,r=a.length;s<r;s++){let o=a[s],l=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)xa.fromBufferAttribute(o,u),l&&(jo.fromBufferAttribute(e,u),xa.add(jo)),i=Math.max(i,n.distanceToSquared(xa))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=a.position,i=a.normal,s=a.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new gi(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));let o=[],l=[],u=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new z,l[P]=new z;let f=new z,p=new z,c=new z,h=new et,S=new et,M=new et,x=new z,d=new z;function m(P,E,U){u[P]=u[E]=u[U]=1,f.fromBufferAttribute(n,P),p.fromBufferAttribute(n,E),c.fromBufferAttribute(n,U),h.fromBufferAttribute(s,P),S.fromBufferAttribute(s,E),M.fromBufferAttribute(s,U),p.sub(f),c.sub(f),S.sub(h),M.sub(h);let H=1/(S.x*M.y-M.x*S.y);isFinite(H)&&(x.copy(p).multiplyScalar(M.y).addScaledVector(c,-S.y).multiplyScalar(H),d.copy(c).multiplyScalar(S.x).addScaledVector(p,-M.x).multiplyScalar(H),o[P].add(x),o[E].add(x),o[U].add(x),l[P].add(d),l[E].add(d),l[U].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,E=y.length;P<E;++P){let U=y[P],H=U.start,J=U.count;for(let N=H,Z=H+J;N<Z;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let _=new z,A=new z,w=new z,v=new z;function L(P){w.fromBufferAttribute(i,P),v.copy(w);let E=o[P];_.copy(E),_.sub(w.multiplyScalar(w.dot(E))).normalize(),A.crossVectors(v,E);let H=A.dot(l[P])<0?-1:1;r.setXYZW(P,_.x,_.y,_.z,H)}for(let P=0,E=n.count;P<E;++P)u[P]&&L(P);this._transformed=!0}computeVertexNormals(){let e=this.index,a=this.getAttribute("position");if(a!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==a.count)n=new gi(new Float32Array(a.count*3),3),this.setAttribute("normal",n);else for(let c=0,h=n.count;c<h;c++)n.setXYZ(c,0,0,0);let i=new z,s=new z,r=new z,o=new z,l=new z,u=new z,f=new z,p=new z;if(e)for(let c=0,h=e.count;c<h;c+=3){let S=e.getX(c+0),M=e.getX(c+1),x=e.getX(c+2);i.fromBufferAttribute(a,S),s.fromBufferAttribute(a,M),r.fromBufferAttribute(a,x),f.subVectors(r,s),p.subVectors(i,s),f.cross(p),o.fromBufferAttribute(n,S),l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,x),o.add(f),l.add(f),u.add(f),n.setXYZ(S,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(x,u.x,u.y,u.z)}else for(let c=0,h=a.count;c<h;c+=3)i.fromBufferAttribute(a,c+0),s.fromBufferAttribute(a,c+1),r.fromBufferAttribute(a,c+2),f.subVectors(r,s),p.subVectors(i,s),f.cross(p),n.setXYZ(c+0,f.x,f.y,f.z),n.setXYZ(c+1,f.x,f.y,f.z),n.setXYZ(c+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let a=0,n=e.count;a<n;a++)xa.fromBufferAttribute(e,a),xa.normalize(),e.setXYZ(a,xa.x,xa.y,xa.z)}toNonIndexed(){function e(o,l){let u=o.array,f=o.itemSize,p=o.normalized,c=new u.constructor(l.length*f),h=0,S=0;for(let M=0,x=l.length;M<x;M++){o.isInterleavedBufferAttribute?h=l[M]*o.data.stride+o.offset:h=l[M]*f;for(let d=0;d<f;d++)c[S++]=u[h++]}return new gi(c,f,p)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let a=new t,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],u=e(l,n);a.setAttribute(o,u)}let s=this.morphAttributes;for(let o in s){let l=[],u=s[o];for(let f=0,p=u.length;f<p;f++){let c=u[f],h=e(c,n);l.push(h)}a.morphAttributes[o]=l}a.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let u=r[o];a.addGroup(u.start,u.count,u.materialIndex)}return a}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};let a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});let n=this.attributes;for(let l in n){let u=n[l];e.data.attributes[l]=u.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],f=[];for(let p=0,c=u.length;p<c;p++){let h=u[p];f.push(h.toJSON(e.data))}f.length>0&&(i[l]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let a={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let u in i){let f=i[u];this.setAttribute(u,f.clone(a))}let s=e.morphAttributes;for(let u in s){let f=[],p=s[u];for(let c=0,h=p.length;c<h;c++)f.push(p[c].clone(a));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let u=0,f=r.length;u<f;u++){let p=r[u];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},kx=new z,NI=new z,PI=new qe,Zn=class{constructor(e=new z(1,0,0),a=0){this.isPlane=!0,this.normal=e,this.constant=a}set(e,a){return this.normal.copy(e),this.constant=a,this}setComponents(e,a,n,i){return this.normal.set(e,a,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,a){return this.normal.copy(e),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(e,a,n){let i=kx.subVectors(n,a).cross(NI.subVectors(e,a)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,a){return a.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,a,n=!0){let i=e.delta(kx),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?a.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(r<0||r>1)?null:a.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let a=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return a<0&&n>0||n<0&&a>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,a){let n=a||PI.getNormalMatrix(e),i=this.coplanarPoint(kx).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},UI=0,Vs=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UI++}),this.uuid=ic(),this.name="",this.type="Material",this.blending=dl,this.side=Ks,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=e0,this.blendDst=t0,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=nl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lL,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qf,this.stencilZFail=qf,this.stencilZPass=qf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let a in e){let n=e[a];if(n===void 0){Fe(`Material: parameter '${a}' has value of undefined.`);continue}let i=this[a];if(i===void 0){Fe(`Material: '${a}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[a]=n}}toJSON(e){let a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let r=[];for(let o in s){let l=s[o];delete l.metadata,r.push(l)}return r}if(a){let s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}fromJSON(e,a){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Zn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=a[e.map]||null),e.matcap!==void 0&&(this.matcap=a[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=a[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=a[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=a[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new et().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=a[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=a[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=a[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=a[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=a[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=a[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=a[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=a[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=a[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=a[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=a[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=a[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=a[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=a[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new et().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=a[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=a[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=a[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=a[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=a[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=a[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=a[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=a[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let a=e.clippingPlanes,n=null;if(a!==null){let i=a.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=a[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Zi=new z,zx=new z,Ef=new z,Rf=new z,sh=class{constructor(e=new z,a=new z(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);let n=a.dot(this.direction);return n<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let a=Zi.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,a),Zi.distanceToSquared(e))}distanceSqToSegment(e,a,n,i){zx.copy(e).add(a).multiplyScalar(.5),Ef.copy(a).sub(e).normalize(),Rf.copy(this.origin).sub(zx);let s=e.distanceTo(a)*.5,r=-this.direction.dot(Ef),o=Rf.dot(this.direction),l=-Rf.dot(Ef),u=Rf.lengthSq(),f=Math.abs(1-r*r),p,c,h,S;if(f>0)if(p=r*l-o,c=r*o-l,S=s*f,p>=0)if(c>=-S)if(c<=S){let M=1/f;p*=M,c*=M,h=p*(p+r*c+2*o)+c*(r*p+c+2*l)+u}else c=s,p=Math.max(0,-(r*c+o)),h=-p*p+c*(c+2*l)+u;else c=-s,p=Math.max(0,-(r*c+o)),h=-p*p+c*(c+2*l)+u;else c<=-S?(p=Math.max(0,-(-r*s+o)),c=p>0?-s:Math.min(Math.max(-s,-l),s),h=-p*p+c*(c+2*l)+u):c<=S?(p=0,c=Math.min(Math.max(-s,-l),s),h=c*(c+2*l)+u):(p=Math.max(0,-(r*s+o)),c=p>0?s:Math.min(Math.max(-s,-l),s),h=-p*p+c*(c+2*l)+u);else c=r>0?-s:s,p=Math.max(0,-(r*c+o)),h=-p*p+c*(c+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(zx).addScaledVector(Ef,c),h}intersectSphere(e,a){if(e.radius<0)return null;Zi.subVectors(e.center,this.origin);let n=Zi.dot(this.direction),i=Zi.dot(Zi)-n*n,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,a):this.at(o,a)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/a;return n>=0?n:null}intersectPlane(e,a){let n=this.distanceToPlane(e);return n===null?null:this.at(n,a)}intersectsPlane(e){let a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let n,i,s,r,o,l,u=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,c=this.origin;return u>=0?(n=(e.min.x-c.x)*u,i=(e.max.x-c.x)*u):(n=(e.max.x-c.x)*u,i=(e.min.x-c.x)*u),f>=0?(s=(e.min.y-c.y)*f,r=(e.max.y-c.y)*f):(s=(e.max.y-c.y)*f,r=(e.min.y-c.y)*f),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),p>=0?(o=(e.min.z-c.z)*p,l=(e.max.z-c.z)*p):(o=(e.max.z-c.z)*p,l=(e.min.z-c.z)*p),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,a)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,a,n,i,s){let r=this.origin,o=this.direction,l=o.x,u=o.y,f=o.z,p=e.x-r.x,c=e.y-r.y,h=e.z-r.z,S=a.x-r.x,M=a.y-r.y,x=a.z-r.z,d=n.x-r.x,m=n.y-r.y,y=n.z-r.z,_=Math.abs(l),A=Math.abs(u),w=Math.abs(f),v,L,P,E,U,H,J,N,Z,K,V,ie;if(_>=A&&_>=w?(P=l,H=p,Z=S,ie=d,l>=0?(v=u,L=f,E=c,U=h,J=M,N=x,K=m,V=y):(v=f,L=u,E=h,U=c,J=x,N=M,K=y,V=m)):A>=w?(P=u,H=c,Z=M,ie=m,u>=0?(v=f,L=l,E=h,U=p,J=x,N=S,K=y,V=d):(v=l,L=f,E=p,U=h,J=S,N=x,K=d,V=y)):(P=f,H=h,Z=x,ie=y,f>=0?(v=l,L=u,E=p,U=c,J=S,N=M,K=d,V=m):(v=u,L=l,E=c,U=p,J=M,N=S,K=m,V=d)),P===0)return null;let W=v/P,ae=L/P,ne=1/P,Ee=E-W*H,He=U-ae*H,$=J-W*Z,ve=N-ae*Z,Le=K-W*ie,Ue=V-ae*ie,me=Le*ve-Ue*$,Ve=Ee*Ue-He*Le,Yt=$*He-ve*Ee;if(i){if(me<0||Ve<0||Yt<0)return null}else if((me<0||Ve<0||Yt<0)&&(me>0||Ve>0||Yt>0))return null;let Pe=me+Ve+Yt;if(Pe===0)return null;let tt=ne*(me*H+Ve*Z+Yt*ie);return(Pe>0?tt<0:tt>0)?null:this.at(tt/Pe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rh=class extends Vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=a0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},CM=new zt,Er=new sh,Df=new ll,AM=new z,Nf=new z,Pf=new z,Uf=new z,Hx=new z,Of=new z,wM=new z,Bf=new z,On=class extends Ya{constructor(e=new Si,a=new rh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let a=this.geometry.morphAttributes,n=Object.keys(a);if(n.length>0){let i=a[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,a){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;a.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Of.set(0,0,0);for(let l=0,u=s.length;l<u;l++){let f=o[l],p=s[l];f!==0&&(Hx.fromBufferAttribute(p,e),r?Of.addScaledVector(Hx,f):Of.addScaledVector(Hx.sub(a),f))}a.add(Of)}return a}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,a){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Df.copy(n.boundingSphere),Df.applyMatrix4(s),Er.copy(e.ray).recast(e.near),!(Df.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Df,AM)===null||Er.origin.distanceToSquared(AM)>(e.far-e.near)**2))&&(CM.copy(s).invert(),Er.copy(e.ray).applyMatrix4(CM),!(n.boundingBox!==null&&Er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,a,Er)))}_computeIntersections(e,a,n){let i,s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,c=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(r))for(let S=0,M=c.length;S<M;S++){let x=c[S],d=r[x.materialIndex],m=Math.max(x.start,h.start),y=Math.min(o.count,Math.min(x.start+x.count,h.start+h.count));for(let _=m,A=y;_<A;_+=3){let w=o.getX(_),v=o.getX(_+1),L=o.getX(_+2);i=Ff(this,d,e,n,u,f,p,w,v,L),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=x.materialIndex,a.push(i))}}else{let S=Math.max(0,h.start),M=Math.min(o.count,h.start+h.count);for(let x=S,d=M;x<d;x+=3){let m=o.getX(x),y=o.getX(x+1),_=o.getX(x+2);i=Ff(this,r,e,n,u,f,p,m,y,_),i&&(i.faceIndex=Math.floor(x/3),a.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let S=0,M=c.length;S<M;S++){let x=c[S],d=r[x.materialIndex],m=Math.max(x.start,h.start),y=Math.min(l.count,Math.min(x.start+x.count,h.start+h.count));for(let _=m,A=y;_<A;_+=3){let w=_,v=_+1,L=_+2;i=Ff(this,d,e,n,u,f,p,w,v,L),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=x.materialIndex,a.push(i))}}else{let S=Math.max(0,h.start),M=Math.min(l.count,h.start+h.count);for(let x=S,d=M;x<d;x+=3){let m=x,y=x+1,_=x+2;i=Ff(this,r,e,n,u,f,p,m,y,_),i&&(i.faceIndex=Math.floor(x/3),a.push(i))}}}};oh=class extends sn{constructor(e=null,a=1,n=1,i,s,r,o,l,u=Sa,f=Sa,p,c){super(null,r,o,l,u,f,i,s,p,c),this.isDataTexture=!0,this.image={data:e,width:a,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Rr=new ll,BI=new et(.5,.5),kf=new z,qs=class{constructor(e=new Zn,a=new Zn,n=new Zn,i=new Zn,s=new Zn,r=new Zn){this.planes=[e,a,n,i,s,r]}set(e,a,n,i,s,r){let o=this.planes;return o[0].copy(e),o[1].copy(a),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){let a=this.planes;for(let n=0;n<6;n++)a[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,a=Un,n=!1){let i=this.planes,s=e.elements,r=s[0],o=s[1],l=s[2],u=s[3],f=s[4],p=s[5],c=s[6],h=s[7],S=s[8],M=s[9],x=s[10],d=s[11],m=s[12],y=s[13],_=s[14],A=s[15];if(i[0].setComponents(u-r,h-f,d-S,A-m).normalize(),i[1].setComponents(u+r,h+f,d+S,A+m).normalize(),i[2].setComponents(u+o,h+p,d+M,A+y).normalize(),i[3].setComponents(u-o,h-p,d-M,A-y).normalize(),n)i[4].setComponents(l,c,x,_).normalize(),i[5].setComponents(u-l,h-c,d-x,A-_).normalize();else if(i[4].setComponents(u-l,h-c,d-x,A-_).normalize(),a===Un)i[5].setComponents(u+l,h+c,d+x,A+_).normalize();else if(a===il)i[5].setComponents(l,c,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let a=e.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Rr.copy(a.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){Rr.center.set(0,0,0);let a=BI.distanceTo(e.center);return Rr.radius=.7071067811865476+a,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){let a=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(a[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let a=this.planes;for(let n=0;n<6;n++){let i=a[n];if(kf.x=i.normal.x>0?e.max.x:e.min.x,kf.y=i.normal.y>0?e.max.y:e.min.y,kf.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(kf)<0)return!1}return!0}containsPoint(e){let a=this.planes;for(let n=0;n<6;n++)if(a[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},TM=new zt,lh=class t{constructor(){this.coordinateSystem=Un,this._frustums=[],this._count=0}setFromArrayCamera(e){let a=e.cameras,n=this._frustums;for(let i=0;i<a.length;i++){let s=a[i];TM.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new qs),n[i].setFromProjectionMatrix(TM,s.coordinateSystem,s.reversedDepth)}return this._count=a.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let a=this._frustums;for(let n=0;n<this._count;n++)if(a[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let a=this._frustums;for(let n=0;n<this._count;n++)if(a[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let a=this._frustums;for(let n=0;n<this._count;n++)if(a[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let a=this._frustums;for(let n=0;n<this._count;n++)if(a[n].intersectsBox(e))return!0;return!1}containsPoint(e){let a=this._frustums;for(let n=0;n<this._count;n++)if(a[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let a=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)a[i]===void 0&&(a[i]=new qs),a[i].copy(n[i]);return this._count=e._count,this}clone(){return new t().copy(this)}},Fu=class extends sn{constructor(e=[],a=Or,n,i,s,r,o,l,u,f){super(e,a,n,i,s,r,o,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ji=class extends sn{constructor(e,a,n=Kn,i,s,r,o=Sa,l=Sa,u,f=Ji,p=1){if(f!==Ji&&f!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let c={width:e,height:a,depth:p};super(c,i,s,r,o,l,f,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let a=super.toJSON(e);return a.compareFunction=this.compareFunction,a}},ku=class extends ji{constructor(e,a=Kn,n=Or,i,s,r=Sa,o=Sa,l,u=Ji){let f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,a,n,i,s,r,o,l,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},zu=class extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ws=class t extends Si{constructor(e=1,a=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:a,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let l=[],u=[],f=[],p=[],c=0,h=0;S("z","y","x",-1,-1,n,a,e,r,s,0),S("z","y","x",1,-1,n,a,-e,r,s,1),S("x","z","y",1,1,e,n,a,i,r,2),S("x","z","y",1,-1,e,n,-a,i,r,3),S("x","y","z",1,-1,e,a,n,i,s,4),S("x","y","z",-1,-1,e,a,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new va(u,3)),this.setAttribute("normal",new va(f,3)),this.setAttribute("uv",new va(p,2));function S(M,x,d,m,y,_,A,w,v,L,P){let E=_/v,U=A/L,H=_/2,J=A/2,N=w/2,Z=v+1,K=L+1,V=0,ie=0,W=new z;for(let ae=0;ae<K;ae++){let ne=ae*U-J;for(let Ee=0;Ee<Z;Ee++){let He=Ee*E-H;W[M]=He*m,W[x]=ne*y,W[d]=N,u.push(W.x,W.y,W.z),W[M]=0,W[x]=0,W[d]=w>0?1:-1,f.push(W.x,W.y,W.z),p.push(Ee/v),p.push(1-ae/L),V+=1}}for(let ae=0;ae<L;ae++)for(let ne=0;ne<v;ne++){let Ee=c+ne+Z*ae,He=c+ne+Z*(ae+1),$=c+(ne+1)+Z*(ae+1),ve=c+(ne+1)+Z*ae;l.push(Ee,He,ve),l.push(He,$,ve),ie+=6}o.addGroup(h,ie,P),h+=ie,c+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},uh=class t extends Si{constructor(e=[],a=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:a,radius:n,detail:i};let s=[],r=[];o(i),u(n),f(),this.setAttribute("position",new va(s,3)),this.setAttribute("normal",new va(s.slice(),3)),this.setAttribute("uv",new va(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(m){let y=new z,_=new z,A=new z;for(let w=0;w<a.length;w+=3)h(a[w+0],y),h(a[w+1],_),h(a[w+2],A),l(y,_,A,m)}function l(m,y,_,A){let w=A+1,v=[];for(let L=0;L<=w;L++){v[L]=[];let P=m.clone().lerp(_,L/w),E=y.clone().lerp(_,L/w),U=w-L;for(let H=0;H<=U;H++)H===0&&L===w?v[L][H]=P:v[L][H]=P.clone().lerp(E,H/U)}for(let L=0;L<w;L++)for(let P=0;P<2*(w-L)-1;P++){let E=Math.floor(P/2);P%2===0?(c(v[L][E+1]),c(v[L+1][E]),c(v[L][E])):(c(v[L][E+1]),c(v[L+1][E+1]),c(v[L+1][E]))}}function u(m){let y=new z;for(let _=0;_<s.length;_+=3)y.x=s[_+0],y.y=s[_+1],y.z=s[_+2],y.normalize().multiplyScalar(m),s[_+0]=y.x,s[_+1]=y.y,s[_+2]=y.z}function f(){let m=new z;for(let y=0;y<s.length;y+=3){m.x=s[y+0],m.y=s[y+1],m.z=s[y+2];let _=x(m)/2/Math.PI+.5,A=d(m)/Math.PI+.5;r.push(_,1-A)}S(),p()}function p(){for(let m=0;m<r.length;m+=6){let y=r[m+0],_=r[m+2],A=r[m+4],w=Math.max(y,_,A),v=Math.min(y,_,A);w>.9&&v<.1&&(y<.2&&(r[m+0]+=1),_<.2&&(r[m+2]+=1),A<.2&&(r[m+4]+=1))}}function c(m){s.push(m.x,m.y,m.z)}function h(m,y){let _=m*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function S(){let m=new z,y=new z,_=new z,A=new z,w=new et,v=new et,L=new et;for(let P=0,E=0;P<s.length;P+=9,E+=6){m.set(s[P+0],s[P+1],s[P+2]),y.set(s[P+3],s[P+4],s[P+5]),_.set(s[P+6],s[P+7],s[P+8]),w.set(r[E+0],r[E+1]),v.set(r[E+2],r[E+3]),L.set(r[E+4],r[E+5]),A.copy(m).add(y).add(_).divideScalar(3);let U=x(A);M(w,E+0,m,U),M(v,E+2,y,U),M(L,E+4,_,U)}}function M(m,y,_,A){A<0&&m.x===1&&(r[y]=m.x-1),_.x===0&&_.z===0&&(r[y]=A/2/Math.PI+.5)}function x(m){return Math.atan2(m.z,-m.x)}function d(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.vertices,e.indices,e.radius,e.detail)}},Hu=class t extends uh{constructor(e=1,a=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,a),this.type="OctahedronGeometry",this.parameters={radius:e,detail:a}}static fromJSON(e){return new t(e.radius,e.detail)}},Gu=class t extends Si{constructor(e=1,a=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:a,widthSegments:n,heightSegments:i};let s=e/2,r=a/2,o=Math.floor(n),l=Math.floor(i),u=o+1,f=l+1,p=e/o,c=a/l,h=[],S=[],M=[],x=[];for(let d=0;d<f;d++){let m=d*c-r;for(let y=0;y<u;y++){let _=y*p-s;S.push(_,-m,0),M.push(0,0,1),x.push(y/o),x.push(1-d/l)}}for(let d=0;d<l;d++)for(let m=0;m<o;m++){let y=m+u*d,_=m+u*(d+1),A=m+1+u*(d+1),w=m+1+u*d;h.push(y,_,w),h.push(_,A,w)}this.setIndex(h),this.setAttribute("position",new va(S,3)),this.setAttribute("normal",new va(M,3)),this.setAttribute("uv",new va(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},Vu=class t extends Si{constructor(e=1,a=.4,n=64,i=8,s=2,r=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:a,tubularSegments:n,radialSegments:i,p:s,q:r},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],u=[],f=[],p=new z,c=new z,h=new z,S=new z,M=new z,x=new z,d=new z;for(let y=0;y<=n;++y){let _=y/n*s*Math.PI*2;m(_,s,r,e,h),m(_+.01,s,r,e,S),x.subVectors(S,h),d.addVectors(S,h),M.crossVectors(x,d),d.crossVectors(M,x),M.normalize(),d.normalize();for(let A=0;A<=i;++A){let w=A/i*Math.PI*2,v=-a*Math.cos(w),L=a*Math.sin(w);p.x=h.x+(v*d.x+L*M.x),p.y=h.y+(v*d.y+L*M.y),p.z=h.z+(v*d.z+L*M.z),l.push(p.x,p.y,p.z),c.subVectors(p,h).normalize(),u.push(c.x,c.y,c.z),f.push(y/n),f.push(A/i)}}for(let y=1;y<=n;y++)for(let _=1;_<=i;_++){let A=(i+1)*(y-1)+(_-1),w=(i+1)*y+(_-1),v=(i+1)*y+_,L=(i+1)*(y-1)+_;o.push(A,w,L),o.push(w,v,L)}this.setIndex(o),this.setAttribute("position",new va(l,3)),this.setAttribute("normal",new va(u,3)),this.setAttribute("uv",new va(f,2));function m(y,_,A,w,v){let L=Math.cos(y),P=Math.sin(y),E=A/_*y,U=Math.cos(E);v.x=w*(2+U)*.5*L,v.y=w*(2+U)*P*.5,v.z=w*Math.sin(E)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}};_L={clone:Fr,merge:Fa},kI=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zI=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yi=class extends Vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kI,this.fragmentShader=zI,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=FI(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let a=super.toJSON(e);a.glslVersion=this.glslVersion,a.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?a.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?a.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?a.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?a.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?a.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?a.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?a.uniforms[i]={type:"m4",value:r.toArray()}:a.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(a.extensions=n),a}fromJSON(e,a){if(super.fromJSON(e,a),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=a[i.value]||null;break;case"c":this.uniforms[n].value=new lt().setHex(i.value);break;case"v2":this.uniforms[n].value=new et().fromArray(i.value);break;case"v3":this.uniforms[n].value=new z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ht().fromArray(i.value);break;case"m3":this.uniforms[n].value=new qe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new zt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ch=class extends yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Nr=class extends Vs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cp,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},dh=class extends Vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rL,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fh=class extends Vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Xs=class{constructor(e,a,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new a.constructor(n),this.sampleValues=a,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let a=this.parameterPositions,n=this._cachedIndex,i=a[n],s=a[n-1];e:{t:{let r;a:{n:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break n;return n=a.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=a[++n],e<i)break t}r=a.length;break a}if(!(e>=s)){let o=a[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=a[--n-1],e>=s)break t}r=n,n=0;break a}break e}for(;n<r;){let o=n+r>>>1;e<a[o]?r=o:n=o+1}if(i=a[n],s=a[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=a.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let a=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)a[r]=n[s+r];return a}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},hh=class extends Xs{constructor(e,a,n,i){super(e,a,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qx,endingEnd:qx}}intervalChanged_(e,a,n){let i=this.parameterPositions,s=e-2,r=e+1,o=i[s],l=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case Wx:s=e,o=2*a-n;break;case Xx:s=i.length-2,o=a+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wx:r=e,l=2*n-a;break;case Xx:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=a}let u=(n-a)*.5,f=this.valueSize;this._weightPrev=u/(a-o),this._weightNext=u/(l-n),this._offsetPrev=s*f,this._offsetNext=r*f}interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,f=this._offsetPrev,p=this._offsetNext,c=this._weightPrev,h=this._weightNext,S=(n-a)/(i-a),M=S*S,x=M*S,d=-c*x+2*c*M-c*S,m=(1+c)*x+(-1.5-2*c)*M+(-.5+c)*S+1,y=(-1-h)*x+(1.5+h)*M+.5*S,_=h*x-h*M;for(let A=0;A!==o;++A)s[A]=d*r[f+A]+m*r[u+A]+y*r[l+A]+_*r[p+A];return s}},ph=class extends Xs{constructor(e,a,n,i){super(e,a,n,i)}interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,f=(n-a)/(i-a),p=1-f;for(let c=0;c!==o;++c)s[c]=r[u+c]*p+r[l+c]*f;return s}},mh=class extends Xs{constructor(e,a,n,i){super(e,a,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},gh=class extends Xs{interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,f=this.inTangents,p=this.outTangents;if(!f||!p){let S=(n-a)/(i-a),M=1-S;for(let x=0;x!==o;++x)s[x]=r[u+x]*M+r[l+x]*S;return s}let c=o*2,h=e-1;for(let S=0;S!==o;++S){let M=r[u+S],x=r[l+S],d=h*c+S*2,m=p[d],y=p[d+1],_=e*c+S*2,A=f[_],w=f[_+1],v=GI(n,a,m,A,i);s[S]=bL(v,M,y,w,x)}return s}};bn=class{constructor(e,a,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(a===void 0||a.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$o(a,this.TimeBufferType),this.values=$o(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let a=e.constructor,n;if(a.toJSON!==this.toJSON)n=a.toJSON(e);else{n={name:e.name,times:$o(e.times,Array),values:$o(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),zf(e.settings)&&(n.settings={inTangents:$o(e.settings.inTangents,Array),outTangents:$o(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new mh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ph(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let a=new gh(this.times,this.values,this.getValueSize(),e);return this.settings&&(a.inTangents=this.settings.inTangents,a.outTangents=this.settings.outTangents),a}setInterpolation(e){let a;switch(e){case Iu:a=this.InterpolantFactoryMethodDiscrete;break;case eh:a=this.InterpolantFactoryMethodLinear;break;case Vf:a=this.InterpolantFactoryMethodSmooth;break;case Vx:a=this.InterpolantFactoryMethodBezier;break}if(a===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Fe("KeyframeTrack:",n),this}return this.createInterpolant=a,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Iu;case this.InterpolantFactoryMethodLinear:return eh;case this.InterpolantFactoryMethodSmooth:return Vf;case this.InterpolantFactoryMethodBezier:return Vx}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let a=this.times;for(let n=0,i=a.length;n!==i;++n)a[n]+=e;zf(this.settings)&&(EM(this.settings.inTangents,e),EM(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let a=this.times;for(let n=0,i=a.length;n!==i;++n)a[n]*=e;zf(this.settings)&&(RM(this.settings.inTangents,e),RM(this.settings.outTangents,e))}return this}trim(e,a){let n=this.times,i=n.length,s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>a;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0,a=this.getValueSize();a-Math.floor(a)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){Ge("KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(i!==void 0&&gI(i))for(let o=0,l=i.length;o!==l;++o){let u=i[o];if(isNaN(u)){Ge("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),a=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Vf,s=e.length-1,r=1;for(let o=1;o<s;++o){let l=!1,u=e[o],f=e[o+1];if(u!==f&&(o!==1||u!==e[0]))if(i)l=!0;else{let p=o*n,c=p-n,h=p+n;for(let S=0;S!==n;++S){let M=a[p+S];if(M!==a[c+S]||M!==a[h+S]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];let p=o*n,c=r*n;for(let h=0;h!==n;++h)a[c+h]=a[p+h]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,l=r*n,u=0;u!==n;++u)a[l+u]=a[o+u];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=a.slice(0,r*n)):(this.times=e,this.values=a),this}clone(){let e=this.times.slice(),a=this.values.slice(),n=this.constructor,i=new n(this.name,e,a);return i.createInterpolant=this.createInterpolant,zf(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};bn.prototype.ValueTypeName="";bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=eh;Ys=class extends bn{constructor(e,a,n){super(e,a,n)}};Ys.prototype.ValueTypeName="bool";Ys.prototype.ValueBufferType=Array;Ys.prototype.DefaultInterpolation=Iu;Ys.prototype.InterpolantFactoryMethodLinear=void 0;Ys.prototype.InterpolantFactoryMethodSmooth=void 0;xh=class extends bn{constructor(e,a,n,i){super(e,a,n,i)}};xh.prototype.ValueTypeName="color";vh=class extends bn{constructor(e,a,n,i){super(e,a,n,i)}};vh.prototype.ValueTypeName="number";Sh=class extends Xs{constructor(e,a,n,i){super(e,a,n,i)}interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-a)/(i-a),u=e*o;for(let f=u+o;u!==f;u+=4)vi.slerpFlat(s,0,r,u-o,r,u,l);return s}},qu=class extends bn{constructor(e,a,n,i){super(e,a,n,i)}InterpolantFactoryMethodLinear(e){return new Sh(this.times,this.values,this.getValueSize(),e)}};qu.prototype.ValueTypeName="quaternion";qu.prototype.InterpolantFactoryMethodSmooth=void 0;Zs=class extends bn{constructor(e,a,n){super(e,a,n)}};Zs.prototype.ValueTypeName="string";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=Iu;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;yh=class extends bn{constructor(e,a,n,i){super(e,a,n,i)}};yh.prototype.ValueTypeName="vector";_h=class{constructor(e,a,n){let i=this,s=!1,r=0,o=0,l,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=a,this.onError=n,this._abortController=null,this.itemStart=function(f){o++,s===!1&&i.onStart!==void 0&&i.onStart(f,r,o),s=!0},this.itemEnd=function(f){r++,i.onProgress!==void 0&&i.onProgress(f,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return u.push(f,p),this},this.removeHandler=function(f){let p=u.indexOf(f);return p!==-1&&u.splice(p,2),this},this.getHandler=function(f){for(let p=0,c=u.length;p<c;p+=2){let h=u[p],S=u[p+1];if(h.global&&(h.lastIndex=0),h.test(f))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ML=new _h,bh=class{constructor(e){this.manager=e!==void 0?e:ML,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,a){let n=this;return new Promise(function(i,s){n.load(e,i,a,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};bh.DEFAULT_MATERIAL_NAME="__DEFAULT";Wu=class extends Ya{static registerNode(e){this.prototype._lightNode=e}constructor(e,a=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=a}copy(e,a){return super.copy(e,a),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let a=super.toJSON(e);return a.object.color=this.color.getHex(),a.object.intensity=this.intensity,a}},Gx=new zt,DM=new z,NM=new z,Mh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let a=this.camera;DM.setFromMatrixPosition(e.matrixWorld),a.position.copy(DM),NM.setFromMatrixPosition(e.target.matrixWorld),a.lookAt(NM),a.updateMatrixWorld(),this._updateMatrix(a,this.matrix,this._frustum)}_updateMatrix(e,a,n,i){Gx.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Gx,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,u=i?i.y/s.y:0;e.coordinateSystem===il||e.reversedDepth?a.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):a.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),a.multiply(Gx)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Hf=new z,Gf=new vi,pi=new z,Xu=class extends Ya{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,a){return super.copy(e,a),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hf,Gf,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hf,Gf,pi.set(1,1,1)).invert()}updateWorldMatrix(e,a,n=!1){super.updateWorldMatrix(e,a,n),this.matrixWorld.decompose(Hf,Gf,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hf,Gf,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zs=new z,PM=new et,UM=new et,Wa=class extends Xu{constructor(e=50,a=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let a=.5*this.getFilmHeight()/e;this.fov=th*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_x*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return th*2*Math.atan(Math.tan(_x*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,a,n){zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(zs.x,zs.y).multiplyScalar(-e/zs.z),zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zs.x,zs.y).multiplyScalar(-e/zs.z)}getViewSize(e,a){return this.getViewBounds(e,PM,UM),a.subVectors(UM,PM)}setViewOffset(e,a,n,i,s,r){this.aspect=e/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,a=e*Math.tan(_x*.5*this.fov)/this.zoom,n=2*a,i=this.aspect*n,s=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,u=r.fullHeight;s+=r.offsetX*i/l,a-=r.offsetY*n/u,i*=r.width/l,n*=r.height/u}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,a,a-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}},Yu=class extends Xu{constructor(e=-1,a=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=a,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,a,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,r=n+e,o=i+a,l=i-a;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,r=s+u*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}},Yx=class extends Mh{constructor(){super(new Yu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zu=class extends Wu{constructor(e,a){super(e,a),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ya.DEFAULT_UP),this.updateMatrix(),this.target=new Ya,this.shadow=new Yx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let a=super.toJSON(e);return a.object.shadow=this.shadow.toJSON(),a.object.target=this.target.uuid,a}},Ku=class extends Wu{constructor(e,a){super(e,a),this.isAmbientLight=!0,this.type="AmbientLight"}},el=-90,tl=1,ul=class extends Ya{constructor(e,a,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Wa(el,tl,e,a);i.layers=this.layers,this.add(i);let s=new Wa(el,tl,e,a);s.layers=this.layers,this.add(s);let r=new Wa(el,tl,e,a);r.layers=this.layers,this.add(r);let o=new Wa(el,tl,e,a);o.layers=this.layers,this.add(o);let l=new Wa(el,tl,e,a);l.layers=this.layers,this.add(l);let u=new Wa(el,tl,e,a);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,a=this.children.concat(),[n,i,s,r,o,l]=a;for(let u of a)this.remove(u);if(e===Un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===il)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of a)this.add(u),u.updateMatrixWorld()}update(e,a){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,l,u,f]=this.children,p=e.getRenderTarget(),c=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(a,s),e.setRenderTarget(n,1,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(a,r),e.setRenderTarget(n,2,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(a,o),e.setRenderTarget(n,3,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(a,l),e.setRenderTarget(n,4,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(a,u),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(a,f),e.setRenderTarget(p,c,h),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}},Lh=class extends Wa{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},C0="\\[\\]\\.:\\/",VI=new RegExp("["+C0+"]","g"),A0="[^"+C0+"]",qI="[^"+C0.replace("\\.","")+"]",WI=/((?:WC+[\/:])*)/.source.replace("WC",A0),XI=/(WCOD+)?/.source.replace("WCOD",qI),YI=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",A0),ZI=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",A0),KI=new RegExp("^"+WI+XI+YI+ZI+"$"),JI=["material","materials","bones","map"],Zx=class{constructor(e,a,n){let i=n||Ot.parseTrackName(a);this._targetGroup=e,this._bindings=e.subscribe_(a,i)}getValue(e,a){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,a)}setValue(e,a){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,a)}bind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,n=e.length;a!==n;++a)e[a].bind()}unbind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,n=e.length;a!==n;++a)e[a].unbind()}},Ot=class t{constructor(e,a,n){this.path=a,this.parsedPath=n||t.parseTrackName(a),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,a,n){return e&&e.isAnimationObjectGroup?new t.Composite(e,a,n):new t(e,a,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(VI,"")}static parseTrackName(e){let a=KI.exec(e);if(a===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:a[2],objectName:a[3],objectIndex:a[4],propertyName:a[5],propertyIndex:a[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);JI.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,a){if(a===void 0||a===""||a==="."||a===-1||a===e.name||a===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(a);if(n!==void 0)return n}if(e.children){let n=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===a||o.uuid===a)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,a){e[a]=this.targetObject[this.propertyName]}_getValue_array(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[a++]=n[i]}_getValue_arrayElement(e,a){e[a]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,a){this.resolvedProperty.toArray(e,a)}_setValue_direct(e,a){this.targetObject[this.propertyName]=e[a]}_setValue_direct_setNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[a++]}_setValue_array_setNeedsUpdate(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[a++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[a++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,a){this.resolvedProperty[this.propertyIndex]=e[a]}_setValue_arrayElement_setNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,a){this.resolvedProperty.fromArray(e,a)}_setValue_fromArray_setNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,a){this.bind(),this.getValue(e,a)}_setValue_unbound(e,a){this.bind(),this.setValue(e,a)}bind(){let e=this.node,a=this.parsedPath,n=a.objectName,i=a.propertyName,s=a.propertyIndex;if(e||(e=t.findNode(this.rootNode,a.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=a.objectIndex;switch(n){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===u){u=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let r=e[i];if(r===void 0){let u=a.nodeName;Ge("PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ot.Composite=Zx;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];jD=new Float32Array(1),Kx=class{static{this.prototype.isMatrix2=!0}constructor(e,a,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,a,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,a=0){for(let n=0;n<4;n++)this.elements[n]=e[n+a];return this}set(e,a,n,i){let s=this.elements;return s[0]=e,s[2]=a,s[1]=n,s[3]=i,this}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function WL(){let t=null,e=!1,a=null,n=null;function i(s,r){n=t.requestAnimationFrame(i),a(s,r)}return{start:function(){e!==!0&&a!==null&&t!==null&&(n=t.requestAnimationFrame(i),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){a=s},setContext:function(s){t=s}}}function $I(t){let e=new WeakMap;function a(o,l){let u=o.array,f=o.usage,p=u.byteLength,c=t.createBuffer();t.bindBuffer(l,c),t.bufferData(l,u,f),o.onUploadCallback();let h;if(u instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=t.SHORT;else if(u instanceof Uint32Array)h=t.UNSIGNED_INT;else if(u instanceof Int32Array)h=t.INT;else if(u instanceof Int8Array)h=t.BYTE;else if(u instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:c,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,u){let f=l.array,p=l.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,f);else{p.sort((h,S)=>h.start-S.start);let c=0;for(let h=1;h<p.length;h++){let S=p[c],M=p[h];M.start<=S.start+S.count+1?S.count=Math.max(S.count,M.start+M.count-S.start):(++c,p[c]=M)}p.length=c+1;for(let h=0,S=p.length;h<S;h++){let M=p[h];t.bufferSubData(u,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,a(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,l),u.version=o.version}}return{get:i,remove:s,update:r}}function P3(t,e,a,n,i,s){let r=new lt(0),o=i===!0?0:1,l,u,f=null,p=0,c=null;function h(m){let y=m.isScene===!0?m.background:null;if(y&&y.isTexture){let _=m.backgroundBlurriness>0;y=e.get(y,_)}return y}function S(m){let y=!1,_=h(m);_===null?x(r,o):_&&_.isColor&&(x(_,1),y=!0);let A=t.xr.getEnvironmentBlendMode();A==="additive"?a.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(m,y){let _=h(y);_&&_.isCubeTexture?(u===void 0&&(u=new On(new Ws(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:Fr(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Za,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(N3.makeRotationFromEuler(y.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(XL),u.material.toneMapped=ot.getTransfer(_.colorSpace)!==_t,(f!==_||p!==_.version||c!==t.toneMapping)&&(u.material.needsUpdate=!0,f=_,p=_.version,c=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new On(new Gu(2,2),new yi({name:"BackgroundMaterial",uniforms:Fr(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Ks,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ot.getTransfer(_.colorSpace)!==_t,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||p!==_.version||c!==t.toneMapping)&&(l.material.needsUpdate=!0,f=_,p=_.version,c=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,y){m.getRGB(dp,L0(t)),a.buffers.color.setClear(dp.r,dp.g,dp.b,y,s)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,y=1){r.set(m),o=y,x(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,x(r,o)},render:S,addToRenderList:M,dispose:d}}function U3(t,e){let a=t.getParameter(t.MAX_VERTEX_ATTRIBS),n={},i=c(null),s=i,r=!1;function o(U,H,J,N,Z){let K=!1,V=p(U,N,J,H);s!==V&&(s=V,u(s.object)),K=h(U,N,J,Z),K&&S(U,N,J,Z),Z!==null&&e.update(Z,t.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,_(U,H,J,N),Z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return t.createVertexArray()}function u(U){return t.bindVertexArray(U)}function f(U){return t.deleteVertexArray(U)}function p(U,H,J,N){let Z=N.wireframe===!0,K=n[H.id];K===void 0&&(K={},n[H.id]=K);let V=U.isInstancedMesh===!0?U.id:0,ie=K[V];ie===void 0&&(ie={},K[V]=ie);let W=ie[J.id];W===void 0&&(W={},ie[J.id]=W);let ae=W[Z];return ae===void 0&&(ae=c(l()),W[Z]=ae),ae}function c(U){let H=[],J=[],N=[];for(let Z=0;Z<a;Z++)H[Z]=0,J[Z]=0,N[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:J,attributeDivisors:N,object:U,attributes:{},index:null}}function h(U,H,J,N){let Z=s.attributes,K=H.attributes,V=0,ie=J.getAttributes();for(let W in ie)if(ie[W].location>=0){let ne=Z[W],Ee=K[W];if(Ee===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(Ee=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(Ee=U.instanceColor)),ne===void 0||ne.attribute!==Ee||Ee&&ne.data!==Ee.data)return!0;V++}return s.attributesNum!==V||s.index!==N}function S(U,H,J,N){let Z={},K=H.attributes,V=0,ie=J.getAttributes();for(let W in ie)if(ie[W].location>=0){let ne=K[W];ne===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(ne=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(ne=U.instanceColor));let Ee={};Ee.attribute=ne,ne&&ne.data&&(Ee.data=ne.data),Z[W]=Ee,V++}s.attributes=Z,s.attributesNum=V,s.index=N}function M(){let U=s.newAttributes;for(let H=0,J=U.length;H<J;H++)U[H]=0}function x(U){d(U,0)}function d(U,H){let J=s.newAttributes,N=s.enabledAttributes,Z=s.attributeDivisors;J[U]=1,N[U]===0&&(t.enableVertexAttribArray(U),N[U]=1),Z[U]!==H&&(t.vertexAttribDivisor(U,H),Z[U]=H)}function m(){let U=s.newAttributes,H=s.enabledAttributes;for(let J=0,N=H.length;J<N;J++)H[J]!==U[J]&&(t.disableVertexAttribArray(J),H[J]=0)}function y(U,H,J,N,Z,K,V){V===!0?t.vertexAttribIPointer(U,H,J,Z,K):t.vertexAttribPointer(U,H,J,N,Z,K)}function _(U,H,J,N){M();let Z=N.attributes,K=J.getAttributes(),V=H.defaultAttributeValues;for(let ie in K){let W=K[ie];if(W.location>=0){let ae=Z[ie];if(ae===void 0&&(ie==="instanceMatrix"&&U.instanceMatrix&&(ae=U.instanceMatrix),ie==="instanceColor"&&U.instanceColor&&(ae=U.instanceColor)),ae!==void 0){let ne=ae.normalized,Ee=ae.itemSize,He=e.get(ae);if(He===void 0)continue;let $=He.buffer,ve=He.type,Le=He.bytesPerElement,Ue=ve===t.INT||ve===t.UNSIGNED_INT||ae.gpuType===Th;if(ae.isInterleavedBufferAttribute){let me=ae.data,Ve=me.isInterleavedBuffer===!0?me.stride:me.itemSize,Yt=ae.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Pe=0;Pe<W.locationSize;Pe++)d(W.location+Pe,me.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Pe=0;Pe<W.locationSize;Pe++)x(W.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,$);for(let Pe=0;Pe<W.locationSize;Pe++)y(W.location+Pe,Ee/W.locationSize,ve,ne,Ve*Le,(Yt+Ee/W.locationSize*Pe)*Le,Ue)}else{if(ae.isInstancedBufferAttribute){for(let me=0;me<W.locationSize;me++)d(W.location+me,ae.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let me=0;me<W.locationSize;me++)x(W.location+me);t.bindBuffer(t.ARRAY_BUFFER,$);for(let me=0;me<W.locationSize;me++)y(W.location+me,Ee/W.locationSize,ve,ne,Ee*Le,Ee/W.locationSize*me*Le,Ue)}}else if(V!==void 0){let ne=V[ie];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(W.location,ne);break;case 3:t.vertexAttrib3fv(W.location,ne);break;case 4:t.vertexAttrib4fv(W.location,ne);break;default:t.vertexAttrib1fv(W.location,ne)}}}}m()}function A(){P();for(let U in n){let H=n[U];for(let J in H){let N=H[J];for(let Z in N){let K=N[Z];for(let V in K)f(K[V].object),delete K[V];delete N[Z]}}delete n[U]}}function w(U){if(n[U.id]===void 0)return;let H=n[U.id];for(let J in H){let N=H[J];for(let Z in N){let K=N[Z];for(let V in K)f(K[V].object),delete K[V];delete N[Z]}}delete n[U.id]}function v(U){for(let H in n){let J=n[H];for(let N in J){let Z=J[N];if(Z[U.id]===void 0)continue;let K=Z[U.id];for(let V in K)f(K[V].object),delete K[V];delete Z[U.id]}}}function L(U){for(let H in n){let J=n[H],N=U.isInstancedMesh===!0?U.id:0,Z=J[N];if(Z!==void 0){for(let K in Z){let V=Z[K];for(let ie in V)f(V[ie].object),delete V[ie];delete Z[K]}delete J[N],Object.keys(J).length===0&&delete n[H]}}}function P(){E(),r=!0,s!==i&&(s=i,u(s.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:L,releaseStatesOfProgram:v,initAttributes:M,enableAttribute:x,disableUnusedAttributes:m}}function O3(t,e,a){let n;function i(l){n=l}function s(l,u){t.drawArrays(n,l,u),a.update(u,n,1)}function r(l,u,f){f!==0&&(t.drawArraysInstanced(n,l,u,f),a.update(u,n,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let c=0;for(let h=0;h<f;h++)c+=u[h];a.update(c,n,1)}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function B3(t,e,a,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(v){return!(v!==jn&&n.convert(v)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){let L=v===Qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==rn&&v!==Jn&&!L&&n.convert(v)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=a.precision!==void 0?a.precision:"highp",f=l(u);f!==u&&(Fe("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);let p=a.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),c=a.logarithmicDepthBuffer===!0&&p===!1;a.reversedDepthBuffer===!0&&p===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),a.logarithmicDepthBuffer===!0&&p===!0&&Fe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:c,reversedDepthBuffer:p,maxTextures:h,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:x,maxAttributes:d,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:_,maxSamples:A,samples:w}}function F3(t){let e=this,a=null,n=0,i=!1,s=!1,r=new Zn,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,c){let h=p.length!==0||c||n!==0||i;return i=c,n=p.length,h},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,c){a=f(p,c,0)},this.setState=function(p,c,h){let S=p.clippingPlanes,M=p.clipIntersection,x=p.clipShadows,d=t.get(p);if(!i||S===null||S.length===0||s&&!x)s?f(null):u();else{let m=s?0:n,y=m*4,_=d.clippingState||null;l.value=_,_=f(S,c,y,h);for(let A=0;A!==y;++A)_[A]=a[A];d.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==a&&(l.value=a,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,c,h,S){let M=p!==null?p.length:0,x=null;if(M!==0){if(x=l.value,S!==!0||x===null){let d=h+M*4,m=c.matrixWorldInverse;o.getNormalMatrix(m),(x===null||x.length<d)&&(x=new Float32Array(d));for(let y=0,_=h;y!==M;++y,_+=4)r.copy(p[y]).applyMatrix4(m,o),r.normal.toArray(x,_),x[_+3]=r.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function CL(t,e,a){return new oc(t,{minFilter:$i,generateMipmaps:e,type:Qn,colorSpace:Eu,depthBuffer:a})}function lc(t,e,a){return new yi({name:t,uniforms:e,vertexShader:Qe.cube_vert,fragmentShader:a,side:Za,blending:Pr,depthTest:!1,depthWrite:!1})}function q3(){return lc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${YL}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function W3(){return lc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ZL}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function X3(){return lc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${z3}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function AL(){return lc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function wL(){return lc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Y3(t){let e=new WeakMap,a=new WeakMap,n=null;function i(c,h=!1){return c==null?null:h?r(c):s(c)}function s(c){if(c&&c.isTexture){let h=c.mapping;if(h===Ch||h===Ah)if(e.has(c)){let S=e.get(c).texture;return o(S,c.mapping)}else{let S=c.image;if(S&&S.height>0){let M=new oc(S.height);return M.fromEquirectangularTexture(t,c),e.set(c,M),c.addEventListener("dispose",u),o(M.texture,c.mapping)}else return null}}return c}function r(c){if(c&&c.isTexture&&c.isPMREMTexture!==!0){let h=c.mapping,S=h===Ch||h===Ah,M=h===Or||h===fl;if(S||M){let x=a.get(c),d=x!==void 0?x.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==d)return n===null&&(n=new hp(t)),x=S?n.fromEquirectangular(c,x):n.fromCubemap(c,x),x.texture.pmremVersion=c.pmremVersion,a.set(c,x),x.texture;if(x!==void 0)return x.texture;{let m=c.image;return S&&m&&m.height>0||M&&m&&l(m)?(n===null&&(n=new hp(t)),x=S?n.fromEquirectangular(c):n.fromCubemap(c),x.texture.pmremVersion=c.pmremVersion,a.set(c,x),c.addEventListener("dispose",f),x.texture):null}}}return c}function o(c,h){return h===Ch?c.mapping=Or:h===Ah&&(c.mapping=fl),c}function l(c){let h=0,S=6;for(let M=0;M<S;M++)c[M]!==void 0&&h++;return h===S}function u(c){let h=c.target;h.removeEventListener("dispose",u);let S=e.get(h);S!==void 0&&(e.delete(h),S.dispose())}function f(c){let h=c.target;h.removeEventListener("dispose",f);let S=a.get(h);S!==void 0&&(a.delete(h),S.dispose())}function p(){e=new WeakMap,a=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:p}}function Z3(t){let e={};function a(n){if(e[n]!==void 0)return e[n];let i=t.getExtension(n);return e[n]=i,i}return{has:function(n){return a(n)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(n){let i=a(n);return i===null&&Tu("WebGLRenderer: "+n+" extension not supported."),i}}}function K3(t,e,a,n){let i={},s=new WeakMap,r=new FinalizationRegistry(S=>delete i[S]);function o(S){l(S.target)}function l(S){S.index!==null&&e.remove(S.index);for(let x in S.attributes)e.remove(S.attributes[x]);S.removeEventListener("dispose",o),delete i[S.id],r.unregister(S);let M=s.get(S);M&&(e.remove(M),s.delete(S)),n.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,a.memory.geometries--}function u(S,M){return i[M.id]!==void 0||(M.addEventListener("dispose",o),i[M.id]=new WeakRef(M),r.register(M,M.id,M),a.memory.geometries++),M}function f(S){let M=S.attributes;for(let x in M)e.update(M[x],t.ARRAY_BUFFER)}function p(S){let M=S.index,x=S.attributes.position,d=0;if(x===void 0)return;let m=M!==null?M.array.length:x.array.length/3-1,y=x.count>=65535?Bu:Ou,_=new y(Math.ceil(m/3)*6,1),A=_.array;if(M!==null){let v=M.array;d=M.version;for(let L=0,P=0;L<m;L+=3){let E=v[L+0],U=v[L+1],H=v[L+2];A[P++]=E,A[P++]=U,A[P++]=U,A[P++]=H,A[P++]=H,A[P++]=E}}else{d=x.version;for(let v=0,L=0;v<m;v+=3){let P=v+0,E=v+1,U=v+2;A[L++]=P,A[L++]=E,A[L++]=E,A[L++]=U,A[L++]=U,A[L++]=P}}_.version=d;let w=s.get(S);w&&e.remove(w),s.set(S,_)}function c(S){let M=s.get(S);if(M){let x=S.index;x!==null&&M.version<x.version&&p(S)}else p(S);return s.get(S)}function h(){for(let S in i){let M=i[S].deref();M!==void 0&&l(M)}}return{get:u,update:f,getWireframeAttribute:c,dispose:h}}function J3(t,e,a){let n;function i(p){n=p}let s,r;function o(p){s=p.type,r=p.bytesPerElement}function l(p,c){t.drawElements(n,c,s,p*r),a.update(c,n,1)}function u(p,c,h){h!==0&&(t.drawElementsInstanced(n,c,s,p*r,h),a.update(c,n,h))}function f(p,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,s,p,0,h);let M=0;for(let x=0;x<h;x++)M+=c[x];a.update(M,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function Q3(t){let e={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(a.calls++,r){case t.TRIANGLES:a.triangles+=o*(s/3);break;case t.LINES:a.lines+=o*(s/2);break;case t.LINE_STRIP:a.lines+=o*(s-1);break;case t.LINE_LOOP:a.lines+=o*s;break;case t.POINTS:a.points+=o*s;break;default:Ge("WebGLInfo: Unknown draw mode:",r);break}}function i(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:e,render:a,programs:null,autoReset:!0,reset:i,update:n}}function j3(t,e,a){let n=new WeakMap,i=new Ht;function s(r,o,l){let u=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0,c=n.get(o);if(c===void 0||c.count!==p){let P=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",P)};c!==void 0&&c.texture.dispose();let h=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],y=0;h===!0&&(y=1),S===!0&&(y=2),M===!0&&(y=3);let _=o.attributes.position.count*y,A=1;_>e.maxTextureSize&&(A=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let w=new Float32Array(_*A*4*p),v=new Nu(w,_,A,p);v.type=Jn,v.needsUpdate=!0;let L=y*4;for(let E=0;E<p;E++){let U=x[E],H=d[E],J=m[E],N=_*A*4*E;for(let Z=0;Z<U.count;Z++){let K=Z*L;h===!0&&(i.fromBufferAttribute(U,Z),w[N+K+0]=i.x,w[N+K+1]=i.y,w[N+K+2]=i.z,w[N+K+3]=0),S===!0&&(i.fromBufferAttribute(H,Z),w[N+K+4]=i.x,w[N+K+5]=i.y,w[N+K+6]=i.z,w[N+K+7]=0),M===!0&&(i.fromBufferAttribute(J,Z),w[N+K+8]=i.x,w[N+K+9]=i.y,w[N+K+10]=i.z,w[N+K+11]=J.itemSize===4?i.w:1)}}c={count:p,texture:v,size:new et(_,A)},n.set(o,c),o.addEventListener("dispose",P)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",r.morphTexture,a);else{let h=0;for(let M=0;M<u.length;M++)h+=u[M];let S=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",c.texture,a),l.getUniforms().setValue(t,"morphTargetsTextureSize",c.size)}return{update:s}}function $3(t,e,a,n,i){let s=new WeakMap;function r(u){let f=i.render.frame,p=u.geometry,c=e.get(u,p);if(s.get(c)!==f&&(e.update(c),s.set(c,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==f&&(a.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&a.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,f))),u.isSkinnedMesh){let h=u.skeleton;s.get(h)!==f&&(h.update(),s.set(h,f))}return c}function o(){s=new WeakMap}function l(u){let f=u.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),a.remove(f.instanceMatrix),f.instanceColor!==null&&a.remove(f.instanceColor)}return{update:r,dispose:o}}function tR(t,e,a,n,i,s){let r=new _n(e,a,{type:t,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,u=null,f=new Si;f.setAttribute("position",new va([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new va([0,2,0,0,2,0],2));let p=new ch({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new On(f,p),h=new Yu(-1,1,1,-1,0,1),S=null,M=null,x=!1,d,m=null,y=[],_=!1;this.setSize=function(A,w){r.setSize(A,w),o!==null&&o.setSize(A,w),l!==null&&l.setSize(A,w);for(let v=0;v<y.length;v++){let L=y[v];L.setSize&&L.setSize(A,w)}},this.setEffects=function(A){y=A,_=y.length>0&&y[0].isRenderPass===!0;let w=r.width,v=r.height;y.length>0&&o===null&&(o=new _n(w,v,{type:Qn,depthBuffer:!1,stencilBuffer:!1}),l=new _n(w,v,{type:Qn,depthBuffer:!1,stencilBuffer:!1}));let L=i===!0&&y.some(P=>P.needsDepthTexture===!0);L!==(r.depthTexture!==null)&&(L===!0&&u===null&&(u=new ji(w,v),s===!0&&(u.format=es,u.type=Br)),r.dispose(),r.depthTexture=L?u:null,r.resolveDepthBuffer=L,r.storeMultisampledDepthBuffer=L);for(let P=0;P<y.length;P++){let E=y[P];E.setSize&&E.setSize(w,v),L&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(u)}},this.begin=function(A,w){if(x||A.toneMapping===bi&&y.length===0)return!1;if(m=w,w!==null){let v=w.width,L=w.height;(r.width!==v||r.height!==L)&&this.setSize(v,L)}return _===!1&&A.setRenderTarget(r),d=A.toneMapping,A.toneMapping=bi,!0},this.hasRenderPass=function(){return _},this.end=function(A,w){A.toneMapping=d,x=!0;let v=r,L=o;for(let P=0;P<y.length;P++){let E=y[P];E.enabled!==!1&&(E.render(A,L,v,w),E.needsSwap!==!1&&(v=L,L=L===o?l:o))}if(S!==A.outputColorSpace||M!==A.toneMapping){S=A.outputColorSpace,M=A.toneMapping,p.defines={},ot.getTransfer(S)===_t&&(p.defines.SRGB_TRANSFER="");let P=eR[M];P&&(p.defines[P]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=v.texture,A.setRenderTarget(m),A.render(c,h),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),f.dispose(),p.dispose()}}function ml(t,e,a){let n=t[0];if(n<=0||n>0)return t;let i=e*a,s=TL[i];if(s===void 0&&(s=new Float32Array(i),TL[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=a,t[r].toArray(s,o)}return s}function ca(t,e){if(t.length!==e.length)return!1;for(let a=0,n=t.length;a<n;a++)if(t[a]!==e[a])return!1;return!0}function da(t,e){for(let a=0,n=e.length;a<n;a++)t[a]=e[a]}function mp(t,e){let a=IL[e];a===void 0&&(a=new Int32Array(e),IL[e]=a);for(let n=0;n!==e;++n)a[n]=t.allocateTextureUnit();return a}function aR(t,e){let a=this.cache;a[0]!==e&&(t.uniform1f(this.addr,e),a[0]=e)}function nR(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(ca(a,e))return;t.uniform2fv(this.addr,e),da(a,e)}}function iR(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else if(e.r!==void 0)(a[0]!==e.r||a[1]!==e.g||a[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),a[0]=e.r,a[1]=e.g,a[2]=e.b);else{if(ca(a,e))return;t.uniform3fv(this.addr,e),da(a,e)}}function sR(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(ca(a,e))return;t.uniform4fv(this.addr,e),da(a,e)}}function rR(t,e){let a=this.cache,n=e.elements;if(n===void 0){if(ca(a,e))return;t.uniformMatrix2fv(this.addr,!1,e),da(a,e)}else{if(ca(a,n))return;DL.set(n),t.uniformMatrix2fv(this.addr,!1,DL),da(a,n)}}function oR(t,e){let a=this.cache,n=e.elements;if(n===void 0){if(ca(a,e))return;t.uniformMatrix3fv(this.addr,!1,e),da(a,e)}else{if(ca(a,n))return;RL.set(n),t.uniformMatrix3fv(this.addr,!1,RL),da(a,n)}}function lR(t,e){let a=this.cache,n=e.elements;if(n===void 0){if(ca(a,e))return;t.uniformMatrix4fv(this.addr,!1,e),da(a,e)}else{if(ca(a,n))return;EL.set(n),t.uniformMatrix4fv(this.addr,!1,EL),da(a,n)}}function uR(t,e){let a=this.cache;a[0]!==e&&(t.uniform1i(this.addr,e),a[0]=e)}function cR(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(ca(a,e))return;t.uniform2iv(this.addr,e),da(a,e)}}function dR(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(ca(a,e))return;t.uniform3iv(this.addr,e),da(a,e)}}function fR(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(ca(a,e))return;t.uniform4iv(this.addr,e),da(a,e)}}function hR(t,e){let a=this.cache;a[0]!==e&&(t.uniform1ui(this.addr,e),a[0]=e)}function pR(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(ca(a,e))return;t.uniform2uiv(this.addr,e),da(a,e)}}function mR(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(ca(a,e))return;t.uniform3uiv(this.addr,e),da(a,e)}}function gR(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(ca(a,e))return;t.uniform4uiv(this.addr,e),da(a,e)}}function gp(t){return t.version===0&&(t.compareFunction=y0,t.needsUpdate=!0),t}function xR(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i);let s;this.type===t.SAMPLER_2D_SHADOW?s=gp(JL):s=KL,a.setTexture2D(e||s,i)}function vR(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i),a.setTexture3D(e||$L,i)}function SR(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=gp(QL):s=eC,a.setTextureCube(e||s,i)}function yR(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i),a.setTexture2DArray(e||jL,i)}function _R(t){switch(t){case 5126:return aR;case 35664:return nR;case 35665:return iR;case 35666:return sR;case 35674:return rR;case 35675:return oR;case 35676:return lR;case 5124:case 35670:return uR;case 35667:case 35671:return cR;case 35668:case 35672:return dR;case 35669:case 35673:return fR;case 5125:return hR;case 36294:return pR;case 36295:return mR;case 36296:return gR;case 35678:case 36198:case 36298:case 36306:case 35682:return xR;case 35679:case 36299:case 36307:return vR;case 35680:case 36300:case 36308:case 36293:return SR;case 36289:case 36303:case 36311:case 36292:return yR}}function bR(t,e){t.uniform1fv(this.addr,e)}function MR(t,e){let a=ml(e,this.size,2);t.uniform2fv(this.addr,a)}function LR(t,e){let a=ml(e,this.size,3);t.uniform3fv(this.addr,a)}function CR(t,e){let a=ml(e,this.size,4);t.uniform4fv(this.addr,a)}function AR(t,e){let a=ml(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,a)}function wR(t,e){let a=ml(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,a)}function TR(t,e){let a=ml(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,a)}function IR(t,e){t.uniform1iv(this.addr,e)}function ER(t,e){t.uniform2iv(this.addr,e)}function RR(t,e){t.uniform3iv(this.addr,e)}function DR(t,e){t.uniform4iv(this.addr,e)}function NR(t,e){t.uniform1uiv(this.addr,e)}function PR(t,e){t.uniform2uiv(this.addr,e)}function UR(t,e){t.uniform3uiv(this.addr,e)}function OR(t,e){t.uniform4uiv(this.addr,e)}function BR(t,e,a){let n=this.cache,i=e.length,s=mp(a,i);ca(n,s)||(t.uniform1iv(this.addr,s),da(n,s));let r;this.type===t.SAMPLER_2D_SHADOW?r=gp(JL):r=KL;for(let o=0;o!==i;++o)a.setTexture2D(e[o]||r,s[o])}function FR(t,e,a){let n=this.cache,i=e.length,s=mp(a,i);ca(n,s)||(t.uniform1iv(this.addr,s),da(n,s));for(let r=0;r!==i;++r)a.setTexture3D(e[r]||$L,s[r])}function kR(t,e,a){let n=this.cache,i=e.length,s=mp(a,i);ca(n,s)||(t.uniform1iv(this.addr,s),da(n,s));let r;this.type===t.SAMPLER_CUBE_SHADOW?r=gp(QL):r=eC;for(let o=0;o!==i;++o)a.setTextureCube(e[o]||r,s[o])}function zR(t,e,a){let n=this.cache,i=e.length,s=mp(a,i);ca(n,s)||(t.uniform1iv(this.addr,s),da(n,s));for(let r=0;r!==i;++r)a.setTexture2DArray(e[r]||jL,s[r])}function HR(t){switch(t){case 5126:return bR;case 35664:return MR;case 35665:return LR;case 35666:return CR;case 35674:return AR;case 35675:return wR;case 35676:return TR;case 5124:case 35670:return IR;case 35667:case 35671:return ER;case 35668:case 35672:return RR;case 35669:case 35673:return DR;case 5125:return NR;case 36294:return PR;case 36295:return UR;case 36296:return OR;case 35678:case 36198:case 36298:case 36306:case 35682:return BR;case 35679:case 36299:case 36307:return FR;case 35680:case 36300:case 36308:case 36293:return kR;case 36289:case 36303:case 36311:case 36292:return zR}}function NL(t,e){t.seq.push(e),t.map[e.id]=e}function GR(t,e,a){let n=t.name,i=n.length;for(I0.lastIndex=0;;){let s=I0.exec(n),r=I0.lastIndex,o=s[1],l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&r+2===i){NL(a,u===void 0?new R0(o,t,e):new D0(o,t,e));break}else{let p=a.map[o];p===void 0&&(p=new N0(o),NL(a,p)),a=p}}}function PL(t,e,a){let n=t.createShader(e);return t.shaderSource(n,a),t.compileShader(n),n}function WR(t,e){let a=t.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,a.length);for(let r=i;r<s;r++){let o=r+1;n.push(`${o===e?">":" "} ${o}: ${a[r]}`)}return n.join(`
`)}function XR(t){ot._getMatrix(UL,ot.workingColorSpace,t);let e=`mat3( ${UL.elements.map(a=>a.toFixed(4))} )`;switch(ot.getTransfer(t)){case Ru:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function OL(t,e,a){let n=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return a.toUpperCase()+`

`+s+`

`+WR(t.getShaderSource(e),o)}else return s}function YR(t,e){let a=XR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${a[1]}( vec4( ${a[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function KR(t,e){let a=ZR[e];return a===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}function JR(){ot.getLuminanceCoefficients(fp);let t=fp.x.toFixed(4),e=fp.y.toFixed(4),a=fp.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rc).join(`
`)}function jR(t){let e=[];for(let a in t){let n=t[a];n!==!1&&e.push("#define "+a+" "+n)}return e.join(`
`)}function $R(t,e){let a={},n=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=t.getActiveAttrib(e,i),r=s.name,o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),a[r]={type:s.type,location:t.getAttribLocation(e,r),locationSize:o}}return a}function rc(t){return t!==""}function BL(t,e){let a=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function FL(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function P0(t){return t.replace(eD,tD)}function tD(t,e){let a=Qe[e];if(a===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return P0(a)}function kL(t){return t.replace(aD,nD)}function nD(t,e,a,n){let i="";for(let s=parseInt(e);s<parseInt(a);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function zL(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sD(t){return iD[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function oD(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":rD[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}function uD(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":lD[t.combine]||"ENVMAP_BLENDING_NONE"}function cD(t,e,a,n){let i=t.getContext(),s=a.defines,r=a.vertexShader,o=a.fragmentShader,l=sD(a),u=a.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=oD(a),p=uD(a),c=QR(a),h=jR(s),S=i.createProgram(),M,x,d=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(M=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,h].filter(rc).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,h].filter(rc).join(`
`),x.length>0&&(x+=`
`)):(M=[zL(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,h,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+f:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+a.diffuseRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexNormals?"#define HAS_NORMAL":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rc).join(`
`),x=[zL(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,h,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+u:"",a.envMap?"#define "+f:"",a.envMap?"#define "+p:"",a.envMapPMREM?"#define ENVMAP_MAX_LOD "+a.envMapMaxLod+".0":"",a.envMapPMREM?"#define ENVMAP_SIZE "+a.envMapSize+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",a.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.retroreflection?"#define USE_RETROREFLECTION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor?"#define USE_COLOR":"",a.vertexAlphas||a.batchingColor?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==bi?"#define TONE_MAPPING":"",a.toneMapping!==bi?Qe.tonemapping_pars_fragment:"",a.toneMapping!==bi?KR("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,YR("linearToOutputTexel",a.outputColorSpace),JR(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(rc).join(`
`)),r=P0(r),r=BL(r,a),r=FL(r,a),o=P0(o),o=BL(o,a),o=FL(o,a),r=kL(r),o=kL(o),a.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,M=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",a.glslVersion===_0?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===_0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let m=d+M+r,y=d+x+o,_=PL(i,i.VERTEX_SHADER,m),A=PL(i,i.FRAGMENT_SHADER,y);i.attachShader(S,_),i.attachShader(S,A),a.index0AttributeName!==void 0?i.bindAttribLocation(S,0,a.index0AttributeName):a.hasPositionAttribute===!0&&i.bindAttribLocation(S,0,"position"),i.linkProgram(S);function w(E){if(t.debug.checkShaderErrors){let U=i.getProgramInfoLog(S)||"",H=i.getShaderInfoLog(_)||"",J=i.getShaderInfoLog(A)||"",N=U.trim(),Z=H.trim(),K=J.trim(),V=!0,ie=!0;if(i.getProgramParameter(S,i.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,S,_,A);else{let W=OL(i,_,"vertex"),ae=OL(i,A,"fragment");Ge("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(S,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+N+`
`+W+`
`+ae)}else N!==""?Fe("WebGLProgram: Program Info Log:",N):(Z===""||K==="")&&(ie=!1);ie&&(E.diagnostics={runnable:V,programLog:N,vertexShader:{log:Z,prefix:M},fragmentShader:{log:K,prefix:x}})}i.deleteShader(_),i.deleteShader(A),v=new pl(i,S),L=$R(i,S)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let L;this.getAttributes=function(){return L===void 0&&w(this),L};let P=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(S,VR)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(S),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=qR++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=_,this.fragmentShader=A,this}function fD(t){return t===Js||t===ac||t===nc}function hD(t,e,a,n,i,s){let r=new Pu,o=new U0,l=new Set,u=[],f=new Map,p=n.logarithmicDepthBuffer,c={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(v){return l.add(v),v===0?"uv":`uv${v}`}function S(v,L,P,E,U,H){let J=E.fog,N=U.geometry,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?E.environment:null,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,V=e.get(v.envMap||Z,K),ie=c[v.type],W=n.precision;v.precision!==null&&(W=n.getMaxPrecision(v.precision),W!==v.precision&&Fe("WebGLProgram.getParameters:",v.precision,"not supported, using",W,"instead."));let ae=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ne=ae!==void 0?ae.length:0,Ee=0;N.morphAttributes.position!==void 0&&(Ee=1),N.morphAttributes.normal!==void 0&&(Ee=2),N.morphAttributes.color!==void 0&&(Ee=3);let He,$,ve,Le;if(ie){let Se=Li[ie];He=Se.vertexShader,$=Se.fragmentShader}else{He=v.vertexShader,$=v.fragmentShader;let Se=o.getVertexShaderStage(v),mt=o.getFragmentShaderStage(v);o.update(v,Se,mt),ve=Se.id,Le=mt.id}let Ue=t.getRenderTarget(),me=t.state.buffers.depth.getReversed(),Ve=U.isInstancedMesh===!0,Yt=U.isBatchedMesh===!0,Pe=!!v.map,tt=!!v.matcap,St=!!V,je=St&&V.isPMREMTexture===!0,Gt=!!v.aoMap,Vt=!!v.lightMap,sa=!!v.bumpMap&&v.wireframe===!1,Ze=!!v.normalMap,ft=!!v.displacementMap,jt=!!v.emissiveMap,Ea=!!v.metalnessMap,qt=!!v.roughnessMap,ya=v.anisotropy>0,O=v.clearcoat>0,Ka=v.diffuseRoughness>0,ht=v.dispersion>0,Ct=v.retroreflectivity>0,ge=v.iridescence>0,Zt=v.sheen>0,Ce=v.transmission>0,Oe=ya&&!!v.anisotropyMap,T=O&&!!v.clearcoatMap,b=O&&!!v.clearcoatNormalMap,B=O&&!!v.clearcoatRoughnessMap,se=Ka&&!!v.diffuseRoughnessMap,q=ge&&!!v.iridescenceMap,re=ge&&!!v.iridescenceThicknessMap,he=Zt&&!!v.sheenColorMap,Q=Zt&&!!v.sheenRoughnessMap,j=!!v.specularMap,de=!!v.specularColorMap,R=!!v.specularIntensityMap,Y=Ce&&!!v.transmissionMap,X=Ce&&!!v.thicknessMap,fe=!!v.gradientMap,ue=!!v.alphaMap,ce=v.alphaTest>0,De=!!v.alphaHash,We=!!v.extensions,le=bi;v.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(le=t.toneMapping);let Me=je?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Ke={shaderID:ie,shaderType:v.type,shaderName:v.name,vertexShader:He,fragmentShader:$,defines:v.defines,customVertexShaderID:ve,customFragmentShaderID:Le,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:W,batching:Yt,batchingColor:Yt&&U._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&U.instanceColor!==null,instancingMorph:Ve&&U.morphTexture!==null,outputColorSpace:Ue===null?t.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Pe,matcap:tt,envMap:St,envMapMode:St&&V.mapping,envMapPMREM:je,envMapMaxLod:je?Me.length-1:null,envMapSize:je?Me[0].width:null,aoMap:Gt,lightMap:Vt,bumpMap:sa,normalMap:Ze,displacementMap:ft,emissiveMap:jt,normalMapObjectSpace:Ze&&v.normalMapType===oL,normalMapTangentSpace:Ze&&v.normalMapType===cp,packedNormalMap:Ze&&v.normalMapType===cp&&fD(v.normalMap.format),metalnessMap:Ea,roughnessMap:qt,anisotropy:ya,anisotropyMap:Oe,clearcoat:O,clearcoatMap:T,clearcoatNormalMap:b,clearcoatRoughnessMap:B,diffuseRoughness:Ka,diffuseRoughnessMap:se,dispersion:ht,retroreflection:Ct,iridescence:ge,iridescenceMap:q,iridescenceThicknessMap:re,sheen:Zt,sheenColorMap:he,sheenRoughnessMap:Q,specularMap:j,specularColorMap:de,specularIntensityMap:R,transmission:Ce,transmissionMap:Y,thicknessMap:X,gradientMap:fe,opaque:v.transparent===!1&&v.blending===dl&&v.alphaToCoverage===!1,alphaMap:ue,alphaTest:ce,alphaHash:De,combine:v.combine,mapUv:Pe&&h(v.map.channel),aoMapUv:Gt&&h(v.aoMap.channel),lightMapUv:Vt&&h(v.lightMap.channel),bumpMapUv:sa&&h(v.bumpMap.channel),normalMapUv:Ze&&h(v.normalMap.channel),displacementMapUv:ft&&h(v.displacementMap.channel),emissiveMapUv:jt&&h(v.emissiveMap.channel),metalnessMapUv:Ea&&h(v.metalnessMap.channel),roughnessMapUv:qt&&h(v.roughnessMap.channel),anisotropyMapUv:Oe&&h(v.anisotropyMap.channel),clearcoatMapUv:T&&h(v.clearcoatMap.channel),clearcoatNormalMapUv:b&&h(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&h(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&h(v.diffuseRoughnessMap.channel),iridescenceMapUv:q&&h(v.iridescenceMap.channel),iridescenceThicknessMapUv:re&&h(v.iridescenceThicknessMap.channel),sheenColorMapUv:he&&h(v.sheenColorMap.channel),sheenRoughnessMapUv:Q&&h(v.sheenRoughnessMap.channel),specularMapUv:j&&h(v.specularMap.channel),specularColorMapUv:de&&h(v.specularColorMap.channel),specularIntensityMapUv:R&&h(v.specularIntensityMap.channel),transmissionMapUv:Y&&h(v.transmissionMap.channel),thicknessMapUv:X&&h(v.thicknessMap.channel),alphaMapUv:ue&&h(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ze||ya),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!N.attributes.uv&&(Pe||ue),fog:!!J,useFog:v.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&Ze===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:me,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Ee,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:H.filter(Se=>Se.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:le,decodeVideoTexture:Pe&&v.map.isVideoTexture===!0&&ot.getTransfer(v.map.colorSpace)===_t,decodeVideoTextureEmissive:jt&&v.emissiveMap.isVideoTexture===!0&&ot.getTransfer(v.emissiveMap.colorSpace)===_t,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===_i,flipSided:v.side===Za,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:We&&v.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&v.extensions.multiDraw===!0||Yt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ke.vertexUv1s=l.has(1),Ke.vertexUv2s=l.has(2),Ke.vertexUv3s=l.has(3),l.clear(),Ke}function M(v){let L=[];if(v.shaderID?L.push(v.shaderID):(L.push(v.customVertexShaderID),L.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)L.push(P),L.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(x(L,v),d(L,v),L.push(t.outputColorSpace)),L.push(v.customProgramCacheKey),L.join()}function x(v,L){v.push(L.precision),v.push(L.outputColorSpace),v.push(L.envMapMode),v.push(L.envMapPMREM),v.push(L.envMapMaxLod),v.push(L.envMapSize),v.push(L.mapUv),v.push(L.alphaMapUv),v.push(L.lightMapUv),v.push(L.aoMapUv),v.push(L.bumpMapUv),v.push(L.normalMapUv),v.push(L.displacementMapUv),v.push(L.emissiveMapUv),v.push(L.metalnessMapUv),v.push(L.roughnessMapUv),v.push(L.anisotropyMapUv),v.push(L.clearcoatMapUv),v.push(L.clearcoatNormalMapUv),v.push(L.clearcoatRoughnessMapUv),v.push(L.diffuseRoughnessMapUv),v.push(L.iridescenceMapUv),v.push(L.iridescenceThicknessMapUv),v.push(L.sheenColorMapUv),v.push(L.sheenRoughnessMapUv),v.push(L.specularMapUv),v.push(L.specularColorMapUv),v.push(L.specularIntensityMapUv),v.push(L.transmissionMapUv),v.push(L.thicknessMapUv),v.push(L.combine),v.push(L.fogExp2),v.push(L.sizeAttenuation),v.push(L.morphTargetsCount),v.push(L.numSunLights),v.push(L.numDirLights),v.push(L.numPointLights),v.push(L.numSpotLights),v.push(L.numSpotLightMaps),v.push(L.numHemiLights),v.push(L.numRectAreaLights),v.push(L.numSunLightShadows),v.push(L.numDirLightShadows),v.push(L.numPointLightShadows),v.push(L.numSpotLightShadows),v.push(L.numSpotLightShadowsWithMaps),v.push(L.numLightProbes),v.push(L.numLightProbeGrids),v.push(L.shadowMapType),v.push(L.toneMapping),v.push(L.numClippingPlanes),v.push(L.numClipIntersection),v.push(L.depthPacking)}function d(v,L){r.disableAll(),L.instancing&&r.enable(0),L.instancingColor&&r.enable(1),L.instancingMorph&&r.enable(2),L.matcap&&r.enable(3),L.envMap&&r.enable(4),L.normalMapObjectSpace&&r.enable(5),L.normalMapTangentSpace&&r.enable(6),L.clearcoat&&r.enable(7),L.iridescence&&r.enable(8),L.alphaTest&&r.enable(9),L.vertexColors&&r.enable(10),L.vertexAlphas&&r.enable(11),L.vertexUv1s&&r.enable(12),L.vertexUv2s&&r.enable(13),L.vertexUv3s&&r.enable(14),L.vertexTangents&&r.enable(15),L.anisotropy&&r.enable(16),L.alphaHash&&r.enable(17),L.batching&&r.enable(18),L.dispersion&&r.enable(19),L.retroreflection&&r.enable(24),L.diffuseRoughness&&r.enable(25),L.batchingColor&&r.enable(20),L.gradientMap&&r.enable(21),L.packedNormalMap&&r.enable(22),L.vertexNormals&&r.enable(23),v.push(r.mask),r.disableAll(),L.fog&&r.enable(0),L.useFog&&r.enable(1),L.flatShading&&r.enable(2),L.logarithmicDepthBuffer&&r.enable(3),L.reversedDepthBuffer&&r.enable(4),L.skinning&&r.enable(5),L.morphTargets&&r.enable(6),L.morphNormals&&r.enable(7),L.morphColors&&r.enable(8),L.premultipliedAlpha&&r.enable(9),L.shadowMapEnabled&&r.enable(10),L.doubleSided&&r.enable(11),L.flipSided&&r.enable(12),L.useDepthPacking&&r.enable(13),L.dithering&&r.enable(14),L.transmission&&r.enable(15),L.sheen&&r.enable(16),L.opaque&&r.enable(17),L.pointsUvs&&r.enable(18),L.decodeVideoTexture&&r.enable(19),L.decodeVideoTextureEmissive&&r.enable(20),L.alphaToCoverage&&r.enable(21),L.numLightProbeGrids>0&&r.enable(22),L.hasPositionAttribute&&r.enable(23),v.push(r.mask)}function m(v){let L=c[v.type],P;if(L){let E=Li[L];P=_L.clone(E.uniforms)}else P=v.uniforms;return P}function y(v,L){let P=f.get(L);return P!==void 0?++P.usedTimes:(P=new cD(t,L,v,i),u.push(P),f.set(L,P)),P}function _(v){if(--v.usedTimes===0){let L=u.indexOf(v);u[L]=u[u.length-1],u.pop(),f.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function w(){o.dispose()}return{getParameters:S,getProgramCacheKey:M,getUniforms:m,acquireProgram:y,releaseProgram:_,releaseShaderCache:A,programs:u,dispose:w}}function pD(){let t=new WeakMap;function e(r){return t.has(r)}function a(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function n(r){t.delete(r)}function i(r,o,l){t.get(r)[o]=l}function s(){t=new WeakMap}return{has:e,get:a,remove:n,update:i,dispose:s}}function mD(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function HL(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function GL(){let t=[],e=0,a=[],n=[],i=[];function s(){e=0,a.length=0,n.length=0,i.length=0}function r(c){let h=0;return c.isInstancedMesh&&(h+=2),c.isSkinnedMesh&&(h+=1),h}function o(c,h,S,M,x,d){let m=t[e];return m===void 0?(m={id:c.id,object:c,geometry:h,material:S,materialVariant:r(c),groupOrder:M,renderOrder:c.renderOrder,z:x,group:d},t[e]=m):(m.id=c.id,m.object=c,m.geometry=h,m.material=S,m.materialVariant=r(c),m.groupOrder=M,m.renderOrder=c.renderOrder,m.z=x,m.group=d),e++,m}function l(c,h,S,M,x,d,m){m.reversedDepth===!0&&(x=-x);let y=o(c,h,S,M,x,d);S.transmission>0?n.push(y):S.transparent===!0?i.push(y):a.push(y)}function u(c,h,S,M,x,d){let m=o(c,h,S,M,x,d);S.transmission>0?n.unshift(m):S.transparent===!0?i.unshift(m):a.unshift(m)}function f(c,h){a.length>1&&a.sort(c||mD),n.length>1&&n.sort(h||HL),i.length>1&&i.sort(h||HL)}function p(){for(let c=e,h=t.length;c<h;c++){let S=t[c];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:a,transmissive:n,transparent:i,init:s,push:l,unshift:u,finish:p,sort:f}}function gD(){let t=new WeakMap;function e(n,i){let s=t.get(n),r;return s===void 0?(r=new GL,t.set(n,[r])):i>=s.length?(r=new GL,s.push(r)):r=s[i],r}function a(){t=new WeakMap}return{get:e,dispose:a}}function xD(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"SunLight":case"DirectionalLight":a={direction:new z,color:new lt};break;case"SpotLight":a={position:new z,direction:new z,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new z,color:new lt,distance:0,decay:0};break;case"HemisphereLight":a={direction:new z,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":a={color:new lt,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=a,a}}}function vD(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"SunLight":case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=a,a}}}function yD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function _D(t){let e=new xD,a=vD(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new z);let i=new z,s=new zt,r=new zt;function o(u){let f=0,p=0,c=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let h=0,S=0,M=0,x=0,d=0,m=0,y=0,_=0,A=0,w=0,v=0,L=0,P=0,E=0;u.sort(yD);for(let H=0,J=u.length;H<J;H++){let N=u[H],Z=N.color,K=N.intensity,V=N.distance,ie=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Js?ie=N.shadow.map.texture:ie=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)f+=Z.r*K,p+=Z.g*K,c+=Z.b*K;else if(N.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(N.sh.coefficients[W],K);E++}else if(N.isSunLight){let W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ae=N.shadow,ne=a.get(N);ne.shadowIntensity=ae.intensity,ne.shadowBias=ae.bias,ne.shadowNormalBias=ae.normalBias,ne.shadowRadius=ae.radius,ne.shadowMapSize.copy(ae.mapSize).multiply(ae.getFrameExtents()),n.sunShadow[S]=ne,n.sunShadowMap[S]=ie;let Ee=ae.getViewportCount();for(let He=0;He<Ee;He++)n.sunShadowMatrix[M+He]=ae.getMatrix(He),n.sunShadowCascade[M+He]=ae._cascadeData[He];M+=Ee,S++}n.sun[h]=W,h++}else if(N.isDirectionalLight){let W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ae=N.shadow,ne=a.get(N);ne.shadowIntensity=ae.intensity,ne.shadowBias=ae.bias,ne.shadowNormalBias=ae.normalBias,ne.shadowRadius=ae.radius,ne.shadowMapSize=ae.mapSize,n.directionalShadow[x]=ne,n.directionalShadowMap[x]=ie,n.directionalShadowMatrix[x]=N.shadow.matrix,A++}n.directional[x]=W,x++}else if(N.isSpotLight){let W=e.get(N);W.position.setFromMatrixPosition(N.matrixWorld),W.color.copy(Z).multiplyScalar(K),W.distance=V,W.coneCos=Math.cos(N.angle),W.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),W.decay=N.decay,n.spot[m]=W;let ae=N.shadow;if(N.map&&(n.spotLightMap[L]=N.map,L++,ae.updateMatrices(N),N.castShadow&&P++),n.spotLightMatrix[m]=ae.matrix,N.castShadow){let ne=a.get(N);ne.shadowIntensity=ae.intensity,ne.shadowBias=ae.bias,ne.shadowNormalBias=ae.normalBias,ne.shadowRadius=ae.radius,ne.shadowMapSize=ae.mapSize,n.spotShadow[m]=ne,n.spotShadowMap[m]=ie,v++}m++}else if(N.isRectAreaLight){let W=e.get(N);W.color.copy(Z).multiplyScalar(K),W.halfWidth.set(N.width*.5,0,0),W.halfHeight.set(0,N.height*.5,0),n.rectArea[y]=W,y++}else if(N.isPointLight){let W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),W.distance=N.distance,W.decay=N.decay,N.castShadow){let ae=N.shadow,ne=a.get(N);ne.shadowIntensity=ae.intensity,ne.shadowBias=ae.bias,ne.shadowNormalBias=ae.normalBias,ne.shadowRadius=ae.radius,ne.shadowMapSize=ae.mapSize,ne.shadowCameraNear=ae.camera.near,ne.shadowCameraFar=ae.camera.far,n.pointShadow[d]=ne,n.pointShadowMap[d]=ie,n.pointShadowMatrix[d]=N.shadow.matrix,w++}n.point[d]=W,d++}else if(N.isHemisphereLight){let W=e.get(N);W.skyColor.copy(N.color).multiplyScalar(K),W.groundColor.copy(N.groundColor).multiplyScalar(K),n.hemi[_]=W,_++}}y>0&&(t.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=c;let U=n.hash;(U.sunLength!==h||U.directionalLength!==x||U.pointLength!==d||U.spotLength!==m||U.rectAreaLength!==y||U.hemiLength!==_||U.numSunShadows!==S||U.numDirectionalShadows!==A||U.numPointShadows!==w||U.numSpotShadows!==v||U.numSpotMaps!==L||U.numLightProbes!==E)&&(n.sun.length=h,n.directional.length=x,n.spot.length=m,n.rectArea.length=y,n.point.length=d,n.hemi.length=_,n.sunShadow.length=S,n.sunShadowMap.length=S,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+L-P,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=E,U.sunLength=h,U.directionalLength=x,U.pointLength=d,U.spotLength=m,U.rectAreaLength=y,U.hemiLength=_,U.numSunShadows=S,U.numDirectionalShadows=A,U.numPointShadows=w,U.numSpotShadows=v,U.numSpotMaps=L,U.numLightProbes=E,n.version=SD++)}function l(u,f){let p=0,c=0,h=0,S=0,M=0,x=0,d=f.matrixWorldInverse;for(let m=0,y=u.length;m<y;m++){let _=u[m];if(_.isSunLight){let A=n.sun[p];A.direction.setFromMatrixPosition(_.matrixWorld),A.direction.transformDirection(d),p++}else if(_.isDirectionalLight){let A=n.directional[c];A.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(d),c++}else if(_.isSpotLight){let A=n.spot[S];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(d),S++}else if(_.isRectAreaLight){let A=n.rectArea[M];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(d),r.identity(),s.copy(_.matrixWorld),s.premultiply(d),r.extractRotation(s),A.halfWidth.set(_.width*.5,0,0),A.halfHeight.set(0,_.height*.5,0),A.halfWidth.applyMatrix4(r),A.halfHeight.applyMatrix4(r),M++}else if(_.isPointLight){let A=n.point[h];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(d),h++}else if(_.isHemisphereLight){let A=n.hemi[x];A.direction.setFromMatrixPosition(_.matrixWorld),A.direction.transformDirection(d),x++}}}return{setup:o,setupView:l,state:n}}function VL(t){let e=new _D(t),a=[],n=[],i=[];function s(p){f.camera=p,a.length=0,n.length=0,i.length=0}function r(p){p.isLightProbeGrid?i.push(p):a.push(p)}function o(p){n.push(p)}function l(){e.setup(a),i.sort((p,c)=>p.priority-c.priority||p.id-c.id)}function u(p){e.setupView(a,p)}let f={lightsArray:a,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:u,pushLight:r,pushShadow:o}}function bD(t){let e=new WeakMap;function a(i,s=0){let r=e.get(i),o;return r===void 0?(o=new VL(t),e.set(i,[o])):s>=r.length?(o=new VL(t),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:a,dispose:n}}function wD(t,e,a){let n=new qs,i=new et,s=new et,r=new Ht,o=new dh,l=new fh,u={},f=a.maxTextureSize,p={[Ks]:Za,[Za]:Ks,[_i]:_i},c=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:MD,fragmentShader:LD}),h=c.clone();h.defines.HORIZONTAL_PASS=1;let S=new Si;S.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new On(S,c),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ju;let d=this.type;this.render=function(w,v,L){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||w.length===0)return;this.type===FM&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ju);let P=t.getRenderTarget(),E=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Pr),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let J=d!==this.type;J&&v.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(Z=>Z.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,Z=w.length;N<Z;N++){let K=w[N],V=K.shadow;if(V===void 0){Fe("WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let ie=V.getFrameExtents();i.multiply(ie),s.copy(V.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/ie.x),i.x=s.x*ie.x,V.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/ie.y),i.y=s.y*ie.y,V.mapSize.y=s.y));let W=t.state.buffers.depth.getReversed();if(V.camera._reversedDepth=W,V.map===null||J===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===cl){if(K.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new _n(i.x,i.y,{format:Js,type:Qn,minFilter:Xa,magFilter:Xa,generateMipmaps:!1}),V.map.texture.name=K.name+".shadowMap",V.map.depthTexture=new ji(i.x,i.y,Jn),V.map.depthTexture.name=K.name+".shadowMapDepth",V.map.depthTexture.format=Ji,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Sa,V.map.depthTexture.magFilter=Sa}else K.isPointLight?(V.map=new oc(i.x),V.map.depthTexture=new ku(i.x,Kn)):(V.map=new _n(i.x,i.y),V.map.depthTexture=new ji(i.x,i.y,Kn)),V.map.depthTexture.name=K.name+".shadowMap",V.map.depthTexture.format=Ji,this.type===Ju?(V.map.depthTexture.compareFunction=W?S0:v0,V.map.depthTexture.minFilter=Xa,V.map.depthTexture.magFilter=Xa):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Sa,V.map.depthTexture.magFilter=Sa);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==i.x||V.map.height!==i.y)&&V.map.setSize(i.x,i.y);let ae=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();K.isPointLight!==!0&&V.updateMatrices(K,L);let ne=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:L.layers;for(let Ee=0;Ee<ae;Ee++){let He=V.getCamera(Ee);if(K.isPointLight){let $=V.camera,ve=V.matrix,Le=K.distance||$.far;Le!==$.far&&($.far=Le,$.updateProjectionMatrix()),sc.setFromMatrixPosition(K.matrixWorld),$.position.copy(sc),E0.copy($.position),E0.add(CD[Ee]),$.up.copy(AD[Ee]),$.lookAt(E0),$.updateMatrixWorld(),ve.makeTranslation(-sc.x,-sc.y,-sc.z),qL.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),V._frustum.setFromProjectionMatrix(qL,$.coordinateSystem,$.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,Ee),t.clear();else{Ee===0&&(t.setRenderTarget(V.map),t.clear());let $=V.getViewport(Ee);r.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),H.viewport(r)}n=V.getFrustum(Ee),_(v,L,He,K,ne,this.type)}V.isPointLightShadow!==!0&&this.type===cl&&m(V,L),V.needsUpdate=!1}d=this.type,x.needsUpdate=!1,t.setRenderTarget(P,E,U)};function m(w,v){let L=e.update(M);c.defines.VSM_SAMPLES!==w.blurSamples&&(c.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,c.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null?w.mapPass=new _n(i.x,i.y,{format:Js,type:Qn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),c.uniforms.shadow_pass.value=w.map.depthTexture,c.uniforms.resolution.value.set(w.map.width,w.map.height),c.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(v,null,L,c,M,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(v,null,L,h,M,null)}function y(w,v,L,P){let E=null,U=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)E=U;else if(E=L.isPointLight===!0?l:o,t.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let H=E.uuid,J=v.uuid,N=u[H];N===void 0&&(N={},u[H]=N);let Z=N[J];Z===void 0&&(Z=E.clone(),N[J]=Z,v.addEventListener("dispose",A)),E=Z}if(E.visible=v.visible,E.wireframe=v.wireframe,P===cl?E.side=v.shadowSide!==null?v.shadowSide:v.side:E.side=v.shadowSide!==null?v.shadowSide:p[v.side],E.alphaMap=v.alphaMap,E.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,E.map=v.map,E.clipShadows=v.clipShadows,E.clippingPlanes=v.clippingPlanes,E.clipIntersection=v.clipIntersection,E.displacementMap=v.displacementMap,E.displacementScale=v.displacementScale,E.displacementBias=v.displacementBias,E.wireframeLinewidth=v.wireframeLinewidth,E.linewidth=v.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let H=t.properties.get(E);H.light=L}return E}function _(w,v,L,P,E,U){if(w.visible===!1)return;if(w.layers.test(E)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===cl)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);let N=e.update(w),Z=w.material;if(Array.isArray(Z)){let K=N.groups;for(let V=0,ie=K.length;V<ie;V++){let W=K[V],ae=Z[W.materialIndex];if(ae&&ae.visible){let ne=y(w,ae,P,U);w.onBeforeShadow(t,w,v,L,N,ne,W),t.renderBufferDirect(L,null,N,ne,w,W),w.onAfterShadow(t,w,v,L,N,ne,W)}}}else if(Z.visible){let K=y(w,Z,P,U);w.onBeforeShadow(t,w,v,L,N,K,null),t.renderBufferDirect(L,null,N,K,w,null),w.onAfterShadow(t,w,v,L,N,K,null)}}let J=w.children;for(let N=0,Z=J.length;N<Z;N++)_(J[N],v,L,P,E,U)}function A(w){w.target.removeEventListener("dispose",A);for(let L in u){let P=u[L],E=w.target.uuid;E in P&&(P[E].dispose(),delete P[E])}}}function TD(t,e){function a(){let R=!1,Y=new Ht,X=null,fe=new Ht(0,0,0,0);return{setMask:function(ue){X!==ue&&!R&&(t.colorMask(ue,ue,ue,ue),X=ue)},setLocked:function(ue){R=ue},setClear:function(ue,ce,De,We,le){le===!0&&(ue*=We,ce*=We,De*=We),Y.set(ue,ce,De,We),fe.equals(Y)===!1&&(t.clearColor(ue,ce,De,We),fe.copy(Y))},reset:function(){R=!1,X=null,fe.set(-1,0,0,0)}}}function n(){let R=!1,Y=!1,X=null,fe=null,ue=null;return{setReversed:function(ce){if(Y!==ce){let De=e.get("EXT_clip_control");ce?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),Y=ce;let We=ue;ue=null,this.setClear(We)}},getReversed:function(){return Y},setTest:function(ce){ce?me(t.DEPTH_TEST):Ve(t.DEPTH_TEST)},setMask:function(ce){X!==ce&&!R&&(t.depthMask(ce),X=ce)},setFunc:function(ce){if(Y&&(ce=vL[ce]),fe!==ce){switch(ce){case Wf:t.depthFunc(t.NEVER);break;case Xf:t.depthFunc(t.ALWAYS);break;case Yf:t.depthFunc(t.LESS);break;case nl:t.depthFunc(t.LEQUAL);break;case Zf:t.depthFunc(t.EQUAL);break;case Kf:t.depthFunc(t.GEQUAL);break;case Jf:t.depthFunc(t.GREATER);break;case Qf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=ce}},setLocked:function(ce){R=ce},setClear:function(ce){ue!==ce&&(ue=ce,Y&&(ce=1-ce),t.clearDepth(ce))},reset:function(){R=!1,X=null,fe=null,ue=null,Y=!1}}}function i(){let R=!1,Y=null,X=null,fe=null,ue=null,ce=null,De=null,We=null,le=null;return{setTest:function(Me){R||(Me?me(t.STENCIL_TEST):Ve(t.STENCIL_TEST))},setMask:function(Me){Y!==Me&&!R&&(t.stencilMask(Me),Y=Me)},setFunc:function(Me,Ke,Se){(X!==Me||fe!==Ke||ue!==Se)&&(t.stencilFunc(Me,Ke,Se),X=Me,fe=Ke,ue=Se)},setOp:function(Me,Ke,Se){(ce!==Me||De!==Ke||We!==Se)&&(t.stencilOp(Me,Ke,Se),ce=Me,De=Ke,We=Se)},setLocked:function(Me){R=Me},setClear:function(Me){le!==Me&&(t.clearStencil(Me),le=Me)},reset:function(){R=!1,Y=null,X=null,fe=null,ue=null,ce=null,De=null,We=null,le=null}}}let s=new a,r=new n,o=new i,l={},u=new WeakMap,f={},p={},c={},h=new WeakMap,S=[],M=null,x=!1,d=null,m=null,y=null,_=null,A=null,w=null,v=null,L=new lt(0,0,0),P=0,E=!1,U=null,H=null,J=null,N=null,Z=null,K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ie=0,W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=ie>=1):W.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=ie>=2);let ae=null,ne={},Ee=t.getParameter(t.SCISSOR_BOX),He=t.getParameter(t.VIEWPORT),$=new Ht().fromArray(Ee),ve=new Ht().fromArray(He);function Le(R,Y,X,fe){let ue=new Uint8Array(4),ce=t.createTexture();t.bindTexture(R,ce),t.texParameteri(R,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(R,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let De=0;De<X;De++)R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY?t.texImage3D(Y,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(Y+De,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return ce}let Ue={};Ue[t.TEXTURE_2D]=Le(t.TEXTURE_2D,t.TEXTURE_2D,1),Ue[t.TEXTURE_CUBE_MAP]=Le(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[t.TEXTURE_2D_ARRAY]=Le(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ue[t.TEXTURE_3D]=Le(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),me(t.DEPTH_TEST),r.setFunc(nl),sa(!1),Ze(Jx),me(t.CULL_FACE),Gt(Pr);function me(R){f[R]!==!0&&(t.enable(R),f[R]=!0)}function Ve(R){f[R]!==!1&&(t.disable(R),f[R]=!1)}function Yt(R,Y){return c[R]!==Y?(t.bindFramebuffer(R,Y),c[R]=Y,R===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=Y),R===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=Y),!0):!1}function Pe(R,Y){let X=S,fe=!1;if(R){X=h.get(Y),X===void 0&&(X=[],h.set(Y,X));let ue=R.textures;if(X.length!==ue.length||X[0]!==t.COLOR_ATTACHMENT0){for(let ce=0,De=ue.length;ce<De;ce++)X[ce]=t.COLOR_ATTACHMENT0+ce;X.length=ue.length,fe=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,fe=!0);fe&&t.drawBuffers(X)}function tt(R){return M!==R?(t.useProgram(R),M=R,!0):!1}let St={[Ur]:t.FUNC_ADD,[zM]:t.FUNC_SUBTRACT,[HM]:t.FUNC_REVERSE_SUBTRACT};St[GM]=t.MIN,St[VM]=t.MAX;let je={[qM]:t.ZERO,[WM]:t.ONE,[XM]:t.SRC_COLOR,[e0]:t.SRC_ALPHA,[jM]:t.SRC_ALPHA_SATURATE,[JM]:t.DST_COLOR,[ZM]:t.DST_ALPHA,[YM]:t.ONE_MINUS_SRC_COLOR,[t0]:t.ONE_MINUS_SRC_ALPHA,[QM]:t.ONE_MINUS_DST_COLOR,[KM]:t.ONE_MINUS_DST_ALPHA,[$M]:t.CONSTANT_COLOR,[eL]:t.ONE_MINUS_CONSTANT_COLOR,[tL]:t.CONSTANT_ALPHA,[aL]:t.ONE_MINUS_CONSTANT_ALPHA};function Gt(R,Y,X,fe,ue,ce,De,We,le,Me){if(R===Pr){x===!0&&(Ve(t.BLEND),x=!1);return}if(x===!1&&(me(t.BLEND),x=!0),R!==kM){if(R!==d||Me!==E){if((m!==Ur||A!==Ur)&&(t.blendEquation(t.FUNC_ADD),m=Ur,A=Ur),Me)switch(R){case dl:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qx:t.blendFunc(t.ONE,t.ONE);break;case jx:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case $x:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ge("WebGLState: Invalid blending: ",R);break}else switch(R){case dl:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qx:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case jx:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $x:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",R);break}y=null,_=null,w=null,v=null,L.set(0,0,0),P=0,d=R,E=Me}return}ue=ue||Y,ce=ce||X,De=De||fe,(Y!==m||ue!==A)&&(t.blendEquationSeparate(St[Y],St[ue]),m=Y,A=ue),(X!==y||fe!==_||ce!==w||De!==v)&&(t.blendFuncSeparate(je[X],je[fe],je[ce],je[De]),y=X,_=fe,w=ce,v=De),(We.equals(L)===!1||le!==P)&&(t.blendColor(We.r,We.g,We.b,le),L.copy(We),P=le),d=R,E=!1}function Vt(R,Y){R.side===_i?Ve(t.CULL_FACE):me(t.CULL_FACE);let X=R.side===Za;Y&&(X=!X),sa(X),R.blending===dl&&R.transparent===!1?Gt(Pr):Gt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),r.setFunc(R.depthFunc),r.setTest(R.depthTest),r.setMask(R.depthWrite),s.setMask(R.colorWrite);let fe=R.stencilWrite;o.setTest(fe),fe&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),jt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?me(t.SAMPLE_ALPHA_TO_COVERAGE):Ve(t.SAMPLE_ALPHA_TO_COVERAGE)}function sa(R){U!==R&&(R?t.frontFace(t.CW):t.frontFace(t.CCW),U=R)}function Ze(R){R!==OM?(me(t.CULL_FACE),R!==H&&(R===Jx?t.cullFace(t.BACK):R===BM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ve(t.CULL_FACE),H=R}function ft(R){R!==J&&(V&&t.lineWidth(R),J=R)}function jt(R,Y,X){R?(me(t.POLYGON_OFFSET_FILL),(N!==Y||Z!==X)&&(N=Y,Z=X,r.getReversed()&&(Y=-Y,X=-X),t.polygonOffset(Y,X))):Ve(t.POLYGON_OFFSET_FILL)}function Ea(R){R?me(t.SCISSOR_TEST):Ve(t.SCISSOR_TEST)}function qt(R){R===void 0&&(R=t.TEXTURE0+K-1),ae!==R&&(t.activeTexture(R),ae=R)}function ya(R,Y,X){X===void 0&&(ae===null?X=t.TEXTURE0+K-1:X=ae);let fe=ne[X];fe===void 0&&(fe={type:void 0,texture:void 0},ne[X]=fe),(fe.type!==R||fe.texture!==Y)&&(ae!==X&&(t.activeTexture(X),ae=X),t.bindTexture(R,Y||Ue[R]),fe.type=R,fe.texture=Y)}function O(){let R=ne[ae];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Ka(){try{t.compressedTexImage2D(...arguments)}catch(R){Ge("WebGLState:",R)}}function ht(){try{t.compressedTexImage3D(...arguments)}catch(R){Ge("WebGLState:",R)}}function Ct(){try{t.texSubImage2D(...arguments)}catch(R){Ge("WebGLState:",R)}}function ge(){try{t.texSubImage3D(...arguments)}catch(R){Ge("WebGLState:",R)}}function Zt(){try{t.compressedTexSubImage2D(...arguments)}catch(R){Ge("WebGLState:",R)}}function Ce(){try{t.compressedTexSubImage3D(...arguments)}catch(R){Ge("WebGLState:",R)}}function Oe(){try{t.texStorage2D(...arguments)}catch(R){Ge("WebGLState:",R)}}function T(){try{t.texStorage3D(...arguments)}catch(R){Ge("WebGLState:",R)}}function b(){try{t.texImage2D(...arguments)}catch(R){Ge("WebGLState:",R)}}function B(){try{t.texImage3D(...arguments)}catch(R){Ge("WebGLState:",R)}}function se(R){return p[R]!==void 0?p[R]:t.getParameter(R)}function q(R,Y){p[R]!==Y&&(t.pixelStorei(R,Y),p[R]=Y)}function re(R){$.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),$.copy(R))}function he(R){ve.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),ve.copy(R))}function Q(R,Y){let X=u.get(Y);X===void 0&&(X=new WeakMap,u.set(Y,X));let fe=X.get(R);fe===void 0&&(fe=t.getUniformBlockIndex(Y,R.name),t.uniformBlockBinding(Y,fe,fe),X.set(R,fe))}function j(R,Y,X){let ue=u.get(Y).get(R);l[ue]!==X&&(t.bindBufferBase(t.UNIFORM_BUFFER,ue,X),l[ue]=X)}function de(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),r.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},p={},ae=null,ne={},c={},l={},h=new WeakMap,S=[],M=null,x=!1,d=null,m=null,y=null,_=null,A=null,w=null,v=null,L=new lt(0,0,0),P=0,E=!1,U=null,H=null,J=null,N=null,Z=null,$.set(0,0,t.canvas.width,t.canvas.height),ve.set(0,0,t.canvas.width,t.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:me,disable:Ve,bindFramebuffer:Yt,drawBuffers:Pe,useProgram:tt,setBlending:Gt,setMaterial:Vt,setFlipSided:sa,setCullFace:Ze,setLineWidth:ft,setPolygonOffset:jt,setScissorTest:Ea,activeTexture:qt,bindTexture:ya,unbindTexture:O,compressedTexImage2D:Ka,compressedTexImage3D:ht,texImage2D:b,texImage3D:B,pixelStorei:q,getParameter:se,updateUBOMapping:Q,uniformBlockBinding:j,texStorage2D:Oe,texStorage3D:T,texSubImage2D:Ct,texSubImage3D:ge,compressedTexSubImage2D:Zt,compressedTexSubImage3D:Ce,scissor:re,viewport:he,reset:de}}function ID(t,e,a,n,i,s,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new et,f=new WeakMap,p=new Set,c,h=new WeakMap,S=new Set,M=new FinalizationRegistry(T=>S.delete(T)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(T,b){return x?new OffscreenCanvas(T,b):Du("canvas")}function m(T,b,B){let se=1,q=Oe(T);if((q.width>B||q.height>B)&&(se=B/Math.max(q.width,q.height)),se<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let re=Math.floor(se*q.width),he=Math.floor(se*q.height);c===void 0&&(c=d(re,he));let Q=b?d(re,he):c;return Q.width=re,Q.height=he,Q.getContext("2d").drawImage(T,0,0,re,he),Fe("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+re+"x"+he+")."),Q}else return"data"in T&&Fe("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),T;return T}function y(T){return T.generateMipmaps}function _(T){t.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function w(T,b,B,se,q,re=!1){if(T!==null){if(t[T]!==void 0)return t[T];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let he;se&&(he=e.get("EXT_texture_norm16"),he||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=b;if(b===t.RED&&(B===t.FLOAT&&(Q=t.R32F),B===t.HALF_FLOAT&&(Q=t.R16F),B===t.UNSIGNED_BYTE&&(Q=t.R8),B===t.UNSIGNED_SHORT&&he&&(Q=he.R16_EXT),B===t.SHORT&&he&&(Q=he.R16_SNORM_EXT)),b===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.R8UI),B===t.UNSIGNED_SHORT&&(Q=t.R16UI),B===t.UNSIGNED_INT&&(Q=t.R32UI),B===t.BYTE&&(Q=t.R8I),B===t.SHORT&&(Q=t.R16I),B===t.INT&&(Q=t.R32I)),b===t.RG&&(B===t.FLOAT&&(Q=t.RG32F),B===t.HALF_FLOAT&&(Q=t.RG16F),B===t.UNSIGNED_BYTE&&(Q=t.RG8),B===t.UNSIGNED_SHORT&&he&&(Q=he.RG16_EXT),B===t.SHORT&&he&&(Q=he.RG16_SNORM_EXT)),b===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.RG8UI),B===t.UNSIGNED_SHORT&&(Q=t.RG16UI),B===t.UNSIGNED_INT&&(Q=t.RG32UI),B===t.BYTE&&(Q=t.RG8I),B===t.SHORT&&(Q=t.RG16I),B===t.INT&&(Q=t.RG32I)),b===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),B===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),B===t.UNSIGNED_INT&&(Q=t.RGB32UI),B===t.BYTE&&(Q=t.RGB8I),B===t.SHORT&&(Q=t.RGB16I),B===t.INT&&(Q=t.RGB32I)),b===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),B===t.UNSIGNED_INT&&(Q=t.RGBA32UI),B===t.BYTE&&(Q=t.RGBA8I),B===t.SHORT&&(Q=t.RGBA16I),B===t.INT&&(Q=t.RGBA32I)),b===t.RGB&&(B===t.UNSIGNED_SHORT&&he&&(Q=he.RGB16_EXT),B===t.SHORT&&he&&(Q=he.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),b===t.RGBA){let j=re?Ru:ot.getTransfer(q);B===t.FLOAT&&(Q=t.RGBA32F),B===t.HALF_FLOAT&&(Q=t.RGBA16F),B===t.UNSIGNED_BYTE&&(Q=j===_t?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&he&&(Q=he.RGBA16_EXT),B===t.SHORT&&he&&(Q=he.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(T,b){let B;return T?b===null||b===Kn||b===Br?B=t.DEPTH24_STENCIL8:b===Jn?B=t.DEPTH32F_STENCIL8:b===hl&&(B=t.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Kn||b===Br?B=t.DEPTH_COMPONENT24:b===Jn?B=t.DEPTH_COMPONENT32F:b===hl&&(B=t.DEPTH_COMPONENT16),B}function L(T,b){return y(T)===!0||T.isFramebufferTexture&&T.minFilter!==Sa&&T.minFilter!==Xa?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function P(T){let b=new WeakRef(T);n.get(T).__ref=b,S.add(b),M.register(T,b,b)}function E(T){let b=n.get(T).__ref;b!==void 0&&(S.delete(b),M.unregister(b))}function U(T){J(T.target)}function H(T){N(T.target)}function J(T){T.removeEventListener("dispose",U),E(T),K(T),T.isVideoTexture&&f.delete(T),T.isHTMLTexture&&p.delete(T)}function N(T){T.removeEventListener("dispose",H),E(T),ie(T)}function Z(){for(let T of S){let b=T.deref();b!==void 0&&(b.isRenderTarget===!0?N(b):J(b))}S.clear(),p.clear()}function K(T){let b=n.get(T);if(b.__webglInit===void 0)return;let B=T.source,se=h.get(B);if(se){let q=se[b.__cacheKey];q.usedTimes--,q.usedTimes===0&&V(T),Object.keys(se).length===0&&h.delete(B)}n.remove(T)}function V(T){let b=n.get(T);t.deleteTexture(b.__webglTexture);let B=T.source,se=h.get(B);delete se[b.__cacheKey],r.memory.textures--}function ie(T){let b=n.get(T);b.__depthDisposeCallback&&b.__depthDisposeCallback();let B=T.depthTexture;if(B&&B.renderTarget===T&&J(B),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(b.__webglFramebuffer[q]))for(let re=0;re<b.__webglFramebuffer[q].length;re++)t.deleteFramebuffer(b.__webglFramebuffer[q][re]);else t.deleteFramebuffer(b.__webglFramebuffer[q]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[q])}else{if(Array.isArray(b.__webglFramebuffer))for(let q=0;q<b.__webglFramebuffer.length;q++)t.deleteFramebuffer(b.__webglFramebuffer[q]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let q=0;q<b.__webglColorRenderbuffer.length;q++)b.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[q]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let se=T.textures;for(let q=0,re=se.length;q<re;q++){let he=n.get(se[q]);he.__webglTexture&&(t.deleteTexture(he.__webglTexture),r.memory.textures--),n.remove(se[q])}n.remove(T)}let W=0;function ae(){W=0}function ne(){return W}function Ee(T){W=T}function He(){let T=W;return T>=i.maxTextures&&Fe("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+i.maxTextures),W+=1,T}function $(T){let b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.mipmapsAutoUpdate),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function ve(T,b){let B=n.get(T);if(T.isVideoTexture&&Zt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){let se=T.image;if(se===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{Vt(B,T,b);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);a.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+b)}function Le(T,b){let B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){Vt(B,T,b);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);a.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+b)}function Ue(T,b){let B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){Vt(B,T,b);return}a.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+b)}function me(T,b){let B=n.get(T);if(T.version>0&&B.__version!==T.version){sa(B,T,b);return}a.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+b)}let Ve={[jf]:t.REPEAT,[mi]:t.CLAMP_TO_EDGE,[$f]:t.MIRRORED_REPEAT},Yt={[Sa]:t.NEAREST,[sL]:t.NEAREST_MIPMAP_NEAREST,[Qu]:t.NEAREST_MIPMAP_LINEAR,[Xa]:t.LINEAR,[wh]:t.LINEAR_MIPMAP_NEAREST,[$i]:t.LINEAR_MIPMAP_LINEAR},Pe={[uL]:t.NEVER,[y0]:t.ALWAYS,[cL]:t.LESS,[v0]:t.LEQUAL,[dL]:t.EQUAL,[S0]:t.GEQUAL,[fL]:t.GREATER,[hL]:t.NOTEQUAL};function tt(T,b){if(b.type===Jn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Xa||b.magFilter===wh||b.magFilter===Qu||b.magFilter===$i||b.minFilter===Xa||b.minFilter===wh||b.minFilter===Qu||b.minFilter===$i)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,Ve[b.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,Ve[b.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,Ve[b.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,Yt[b.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,Yt[b.minFilter]),b.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,Pe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Sa||b.minFilter!==Qu&&b.minFilter!==$i||b.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function St(T,b){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",U),P(b));let se=b.source,q=h.get(se);q===void 0&&(q={},h.set(se,q));let re=$(b);if(re!==T.__cacheKey){q[re]===void 0&&(q[re]={texture:t.createTexture(),usedTimes:0},r.memory.textures++,B=!0),q[re].usedTimes++;let he=q[T.__cacheKey];he!==void 0&&(q[T.__cacheKey].usedTimes--,he.usedTimes===0&&V(b)),T.__cacheKey=re,T.__webglTexture=q[re].texture}return B}function je(T,b,B){return Math.floor(Math.floor(T/B)/b)}function Gt(T,b,B,se){let re=T.updateRanges;if(re.length===0)a.texSubImage2D(t.TEXTURE_2D,0,0,0,b.width,b.height,B,se,b.data);else{re.sort((R,Y)=>R.start-Y.start);let he=0;for(let R=1;R<re.length;R++){let Y=re[he],X=re[R],fe=Y.start+Y.count,ue=je(X.start,b.width,4),ce=je(Y.start,b.width,4);X.start<=fe+1&&ue===ce&&je(X.start+X.count-1,b.width,4)===ue?Y.count=Math.max(Y.count,X.start+X.count-Y.start):(++he,re[he]=X)}re.length=he+1;let Q=a.getParameter(t.UNPACK_ROW_LENGTH),j=a.getParameter(t.UNPACK_SKIP_PIXELS),de=a.getParameter(t.UNPACK_SKIP_ROWS);a.pixelStorei(t.UNPACK_ROW_LENGTH,b.width);for(let R=0,Y=re.length;R<Y;R++){let X=re[R],fe=Math.floor(X.start/4),ue=Math.ceil(X.count/4),ce=fe%b.width,De=Math.floor(fe/b.width),We=ue,le=1;a.pixelStorei(t.UNPACK_SKIP_PIXELS,ce),a.pixelStorei(t.UNPACK_SKIP_ROWS,De),a.texSubImage2D(t.TEXTURE_2D,0,ce,De,We,le,B,se,b.data)}T.clearUpdateRanges(),a.pixelStorei(t.UNPACK_ROW_LENGTH,Q),a.pixelStorei(t.UNPACK_SKIP_PIXELS,j),a.pixelStorei(t.UNPACK_SKIP_ROWS,de)}}function Vt(T,b,B){let se=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(se=t.TEXTURE_3D);let q=St(T,b),re=b.source;a.bindTexture(se,T.__webglTexture,t.TEXTURE0+B);let he=n.get(re);if(re.version!==he.__version||q===!0){if(a.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let le=ot.getPrimaries(ot.workingColorSpace),Me=b.colorSpace===ts?null:ot.getPrimaries(b.colorSpace),Ke=b.colorSpace===ts||le===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;a.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke)}a.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment);let j=m(b.image,!1,i.maxTextureSize);j=Ce(b,j);let de=s.convert(b.format,b.colorSpace),R=s.convert(b.type),Y=w(b.internalFormat,de,R,b.normalized,b.colorSpace,b.isVideoTexture);tt(se,b);let X,fe=b.mipmaps,ue=b.isVideoTexture!==!0,ce=he.__version===void 0||q===!0,De=re.dataReady,We=L(b,j);if(b.isDepthTexture)Y=v(b.format===es,b.type),ce&&(ue?a.texStorage2D(t.TEXTURE_2D,1,Y,j.width,j.height):a.texImage2D(t.TEXTURE_2D,0,Y,j.width,j.height,0,de,R,null));else if(b.isDataTexture)if(fe.length>0){ue&&ce&&a.texStorage2D(t.TEXTURE_2D,We,Y,fe[0].width,fe[0].height);for(let le=0,Me=fe.length;le<Me;le++)X=fe[le],ue?De&&a.texSubImage2D(t.TEXTURE_2D,le,0,0,X.width,X.height,de,R,X.data):a.texImage2D(t.TEXTURE_2D,le,Y,X.width,X.height,0,de,R,X.data);b.generateMipmaps=!1}else ue?(ce&&a.texStorage2D(t.TEXTURE_2D,We,Y,j.width,j.height),De&&Gt(b,j,de,R)):a.texImage2D(t.TEXTURE_2D,0,Y,j.width,j.height,0,de,R,j.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ue&&ce&&a.texStorage3D(t.TEXTURE_2D_ARRAY,We,Y,fe[0].width,fe[0].height,j.depth);for(let le=0,Me=fe.length;le<Me;le++)if(X=fe[le],b.format!==jn)if(de!==null)if(ue){if(De)if(b.layerUpdates.size>0){let Ke=w0(X.width,X.height,b.format,b.type);for(let Se of b.layerUpdates){let mt=X.data.subarray(Se*Ke/X.data.BYTES_PER_ELEMENT,(Se+1)*Ke/X.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,Se,X.width,X.height,1,de,mt)}}else a.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,X.width,X.height,j.depth,de,X.data)}else a.compressedTexImage3D(t.TEXTURE_2D_ARRAY,le,Y,X.width,X.height,j.depth,0,X.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?De&&a.texSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,X.width,X.height,j.depth,de,R,X.data):a.texImage3D(t.TEXTURE_2D_ARRAY,le,Y,X.width,X.height,j.depth,0,de,R,X.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ue&&ce&&a.texStorage2D(t.TEXTURE_2D,We,Y,fe[0].width,fe[0].height);for(let le=0,Me=fe.length;le<Me;le++)X=fe[le],b.format!==jn?de!==null?ue?De&&a.compressedTexSubImage2D(t.TEXTURE_2D,le,0,0,X.width,X.height,de,X.data):a.compressedTexImage2D(t.TEXTURE_2D,le,Y,X.width,X.height,0,X.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?De&&a.texSubImage2D(t.TEXTURE_2D,le,0,0,X.width,X.height,de,R,X.data):a.texImage2D(t.TEXTURE_2D,le,Y,X.width,X.height,0,de,R,X.data)}else if(b.isDataArrayTexture)if(ue){if(ce&&a.texStorage3D(t.TEXTURE_2D_ARRAY,We,Y,j.width,j.height,j.depth),De)if(b.layerUpdates.size>0){let le=w0(j.width,j.height,b.format,b.type);for(let Me of b.layerUpdates){let Ke=j.data.subarray(Me*le/j.data.BYTES_PER_ELEMENT,(Me+1)*le/j.data.BYTES_PER_ELEMENT);a.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Me,j.width,j.height,1,de,R,Ke)}b.clearLayerUpdates()}else a.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,de,R,j.data)}else a.texImage3D(t.TEXTURE_2D_ARRAY,0,Y,j.width,j.height,j.depth,0,de,R,j.data);else if(b.isData3DTexture)ue?(ce&&a.texStorage3D(t.TEXTURE_3D,We,Y,j.width,j.height,j.depth),De&&a.texSubImage3D(t.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,de,R,j.data)):a.texImage3D(t.TEXTURE_3D,0,Y,j.width,j.height,j.depth,0,de,R,j.data);else if(b.isFramebufferTexture){if(ce)if(ue)a.texStorage2D(t.TEXTURE_2D,We,Y,j.width,j.height);else{let le=j.width,Me=j.height;for(let Ke=0;Ke<We;Ke++)a.texImage2D(t.TEXTURE_2D,Ke,Y,le,Me,0,de,R,null),le>>=1,Me>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in t){let le=t.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),j.parentNode!==le){le.appendChild(j),p.add(b),le.onpaint=Me=>{let Ke=Me.changedElements;for(let Se of p)Ke.includes(Se.image)&&(Se.needsUpdate=!0)},le.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,j);else{let Ke=t.RGBA,Se=t.RGBA,mt=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ke,Se,mt,j)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(fe.length>0){if(ue&&ce){let le=Oe(fe[0]);a.texStorage2D(t.TEXTURE_2D,We,Y,le.width,le.height)}for(let le=0,Me=fe.length;le<Me;le++)X=fe[le],ue?De&&a.texSubImage2D(t.TEXTURE_2D,le,0,0,de,R,X):a.texImage2D(t.TEXTURE_2D,le,Y,de,R,X);b.generateMipmaps=!1}else if(ue){if(ce){let le=Oe(j);a.texStorage2D(t.TEXTURE_2D,We,Y,le.width,le.height)}De&&a.texSubImage2D(t.TEXTURE_2D,0,0,0,de,R,j)}else a.texImage2D(t.TEXTURE_2D,0,Y,de,R,j);y(b)&&b.mipmapsAutoUpdate===!0&&_(se),he.__version=re.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function sa(T,b,B){if(b.image.length!==6)return;let se=St(T,b),q=b.source;a.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+B);let re=n.get(q);if(q.version!==re.__version||se===!0){a.activeTexture(t.TEXTURE0+B);let he=ot.getPrimaries(ot.workingColorSpace),Q=b.colorSpace===ts?null:ot.getPrimaries(b.colorSpace),j=b.colorSpace===ts||he===Q?t.NONE:t.BROWSER_DEFAULT_WEBGL;a.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let de=b.isCompressedTexture||b.image[0].isCompressedTexture,R=b.image[0]&&b.image[0].isDataTexture,Y=[];for(let Se=0;Se<6;Se++)!de&&!R?Y[Se]=m(b.image[Se],!0,i.maxCubemapSize):Y[Se]=R?b.image[Se].image:b.image[Se],Y[Se]=Ce(b,Y[Se]);let X=Y[0],fe=s.convert(b.format,b.colorSpace),ue=s.convert(b.type),ce=w(b.internalFormat,fe,ue,b.normalized,b.colorSpace),De=b.isVideoTexture!==!0,We=re.__version===void 0||se===!0,le=q.dataReady,Me=L(b,X);tt(t.TEXTURE_CUBE_MAP,b);let Ke;if(b.isDepthTexture){if(ce=v(b.format===es,b.type),We)if(De)a.texStorage2D(t.TEXTURE_CUBE_MAP,1,ce,X.width,X.height);else for(let Se=0;Se<6;Se++)a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ce,X.width,X.height,0,fe,ue,null)}else if(de){De&&We&&a.texStorage2D(t.TEXTURE_CUBE_MAP,Me,ce,X.width,X.height);for(let Se=0;Se<6;Se++){Ke=Y[Se].mipmaps;for(let mt=0;mt<Ke.length;mt++){let ra=Ke[mt];b.format!==jn?fe!==null?De?le&&a.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,mt,0,0,ra.width,ra.height,fe,ra.data):a.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,mt,ce,ra.width,ra.height,0,ra.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?le&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,mt,0,0,ra.width,ra.height,fe,ue,ra.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,mt,ce,ra.width,ra.height,0,fe,ue,ra.data)}}}else{if(Ke=b.mipmaps,De&&We){Ke.length>0&&Me++;let Se=Oe(Y[0]);a.texStorage2D(t.TEXTURE_CUBE_MAP,Me,ce,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(R){De?le&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Y[Se].width,Y[Se].height,fe,ue,Y[Se].data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ce,Y[Se].width,Y[Se].height,0,fe,ue,Y[Se].data);for(let mt=0;mt<Ke.length;mt++){let I=Ke[mt].image[Se].image;De?le&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,mt+1,0,0,I.width,I.height,fe,ue,I.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,mt+1,ce,I.width,I.height,0,fe,ue,I.data)}}else{De?le&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,fe,ue,Y[Se]):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ce,fe,ue,Y[Se]);for(let mt=0;mt<Ke.length;mt++){let ra=Ke[mt];De?le&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,mt+1,0,0,fe,ue,ra.image[Se]):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,mt+1,ce,fe,ue,ra.image[Se])}}}y(b)&&b.mipmapsAutoUpdate===!0&&_(t.TEXTURE_CUBE_MAP),re.__version=q.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function Ze(T,b,B,se,q,re){let he=s.convert(B.format,B.colorSpace),Q=s.convert(B.type),j=w(B.internalFormat,he,Q,B.normalized,B.colorSpace),de=n.get(b),R=n.get(B);if(R.__renderTarget=b,!de.__hasExternalTextures){let Y=Math.max(1,b.width>>re),X=Math.max(1,b.height>>re);q===t.TEXTURE_3D||q===t.TEXTURE_2D_ARRAY?a.texImage3D(q,re,j,Y,X,b.depth,0,he,Q,null):a.texImage2D(q,re,j,Y,X,0,he,Q,null)}a.bindFramebuffer(t.FRAMEBUFFER,T),ge(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,q,R.__webglTexture,0,Ct(b)):(q===t.TEXTURE_2D||q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,q,R.__webglTexture,re),a.bindFramebuffer(t.FRAMEBUFFER,null)}function ft(T,b,B){if(t.bindRenderbuffer(t.RENDERBUFFER,T),b.depthBuffer){let se=b.depthTexture,q=se&&se.isDepthTexture?se.type:null,re=v(b.stencilBuffer,q),he=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ge(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ct(b),re,b.width,b.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ct(b),re,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,re,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,he,t.RENDERBUFFER,T)}else{let se=b.textures;for(let q=0;q<se.length;q++){let re=se[q],he=s.convert(re.format,re.colorSpace),Q=s.convert(re.type),j=w(re.internalFormat,he,Q,re.normalized,re.colorSpace);ge(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ct(b),j,b.width,b.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ct(b),j,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,j,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function jt(T,b,B){let se=b.isWebGLCubeRenderTarget===!0;if(a.bindFramebuffer(t.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(b.depthTexture);q.__renderTarget=b;let re=se?b.depthTexture.image[0]:b.depthTexture.image;(!q.__webglTexture||re.width!==b.width||re.height!==b.height)&&(re.width=b.width,re.height=b.height,b.depthTexture.needsUpdate=!0),se?me(b.depthTexture,0):ve(b.depthTexture,0);let he=q.__webglTexture,Q=Ct(b),j=se?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,de=b.depthTexture.format===es?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ji)ge(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,de,j,he,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,de,j,he,0);else if(b.depthTexture.format===es)ge(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,de,j,he,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,de,j,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ea(T){let b=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){let se=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),se){let q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,se.removeEventListener("dispose",q)};se.addEventListener("dispose",q),b.__depthDisposeCallback=q}b.__boundDepthTexture=se}if(T.depthTexture&&!b.__autoAllocateDepthBuffer)if(B)for(let se=0;se<6;se++)jt(b.__webglFramebuffer[se],T,se);else T.texture.mipmaps.length>0?jt(b.__webglFramebuffer[0],T,0):jt(b.__webglFramebuffer,T,0);else if(B){b.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(a.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[se]),b.__webglDepthbuffer[se]===void 0)b.__webglDepthbuffer[se]=t.createRenderbuffer(),ft(b.__webglDepthbuffer[se],T,!1);else{let q=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=b.__webglDepthbuffer[se];t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,re)}}else if(T.texture.mipmaps.length>0?a.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[0]):a.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),ft(b.__webglDepthbuffer,T,!1);else{let q=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,re)}a.bindFramebuffer(t.FRAMEBUFFER,null)}function qt(T,b,B){let se=n.get(T);b!==void 0&&Ze(se.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Ea(T)}function ya(T){let b=T.texture,B=n.get(T),se=n.get(b);T.addEventListener("dispose",H),P(T);let q=T.textures,re=T.isWebGLCubeRenderTarget===!0,he=q.length>1;if(he||(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=b.version,r.memory.textures++),re){B.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(b.mipmaps.length>0){B.__webglFramebuffer[Q]=[];for(let j=0;j<b.mipmaps.length;j++)B.__webglFramebuffer[Q][j]=t.createFramebuffer()}else B.__webglFramebuffer[Q]=t.createFramebuffer()}else{if(b.mipmaps.length>0){B.__webglFramebuffer=[];for(let Q=0;Q<b.mipmaps.length;Q++)B.__webglFramebuffer[Q]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(he)for(let Q=0,j=q.length;Q<j;Q++){let de=n.get(q[Q]);de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture(),r.memory.textures++)}if(T.samples>0&&ge(T)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],a.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Q=0;Q<q.length;Q++){let j=q[Q];B.__webglColorRenderbuffer[Q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[Q]);let de=s.convert(j.format,j.colorSpace),R=s.convert(j.type),Y=w(j.internalFormat,de,R,j.normalized,j.colorSpace,T.isXRRenderTarget===!0),X=Ct(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,X,Y,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Q,t.RENDERBUFFER,B.__webglColorRenderbuffer[Q])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),ft(B.__webglDepthRenderbuffer,T,!0)),a.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){a.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),tt(t.TEXTURE_CUBE_MAP,b);for(let Q=0;Q<6;Q++)if(b.mipmaps.length>0)for(let j=0;j<b.mipmaps.length;j++)Ze(B.__webglFramebuffer[Q][j],T,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,j);else Ze(B.__webglFramebuffer[Q],T,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);y(b)?_(t.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),a.unbindTexture()}else if(he){for(let Q=0,j=q.length;Q<j;Q++){let de=q[Q],R=n.get(de),Y=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Y=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),a.bindTexture(Y,R.__webglTexture),tt(Y,de),Ze(B.__webglFramebuffer,T,de,t.COLOR_ATTACHMENT0+Q,Y,0),y(de)&&_(Y)}a.unbindTexture()}else{let Q=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Q=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),a.bindTexture(Q,se.__webglTexture),tt(Q,b),b.mipmaps.length>0)for(let j=0;j<b.mipmaps.length;j++)Ze(B.__webglFramebuffer[j],T,b,t.COLOR_ATTACHMENT0,Q,j);else Ze(B.__webglFramebuffer,T,b,t.COLOR_ATTACHMENT0,Q,0);y(b)?_(Q):b.mipmaps.length>0&&t.texParameteri(Q,t.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),a.unbindTexture()}T.depthBuffer&&Ea(T)}function O(T){let b=T.textures;for(let B=0,se=b.length;B<se;B++){let q=b[B];if(y(q)&&q.mipmapsAutoUpdate===!0){let re=A(T),he=n.get(q).__webglTexture;a.bindTexture(re,he),_(re),a.unbindTexture()}}}let Ka=[];function ht(T){if(T.samples>0){if(ge(T)===!1){let b=T.textures,B=T.width,se=T.height,q=t.COLOR_BUFFER_BIT,re=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=n.get(T),Q=b.length>1;if(Q)for(let de=0;de<b.length;de++)a.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),a.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);a.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?a.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):a.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let de=0;de<b.length;de++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(q|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(q|=t.STENCIL_BUFFER_BIT)),Q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[de]);let R=n.get(b[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,R,0)}t.blitFramebuffer(0,0,B,se,0,0,B,se,q,t.NEAREST),l===!0&&(Ka.length=0,Ka.push(t.COLOR_ATTACHMENT0+de),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&Ka.push(re),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ka))}if(a.bindFramebuffer(t.READ_FRAMEBUFFER,null),a.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Q)for(let de=0;de<b.length;de++){a.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,he.__webglColorRenderbuffer[de]);let R=n.get(b[de]).__webglTexture;a.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,R,0)}a.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let b=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function Ct(T){return Math.min(i.maxSamples,T.samples)}function ge(T){let b=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Zt(T){let b=r.render.frame;f.get(T)!==b&&(f.set(T,b),T.update())}function Ce(T,b){let B=T.colorSpace,se=T.format,q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Eu&&B!==ts&&(ot.getTransfer(B)===_t?(se!==jn||q!==rn)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",B)),b}function Oe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}this.allocateTextureUnit=He,this.resetTextureUnits=ae,this.getTextureUnits=ne,this.setTextureUnits=Ee,this.setTexture2D=ve,this.setTexture2DArray=Le,this.setTexture3D=Ue,this.setTextureCube=me,this.rebindTextures=qt,this.setupRenderTarget=ya,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=Ea,this.setupFrameBufferTexture=Ze,this.useMultisampledRTT=ge,this.dispose=Z}function ED(t,e){function a(n,i=ts){let s,r=ot.getTransfer(i);if(n===rn)return t.UNSIGNED_BYTE;if(n===Ih)return t.UNSIGNED_SHORT_4_4_4_4;if(n===Eh)return t.UNSIGNED_SHORT_5_5_5_1;if(n===h0)return t.UNSIGNED_INT_5_9_9_9_REV;if(n===p0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(n===d0)return t.BYTE;if(n===f0)return t.SHORT;if(n===hl)return t.UNSIGNED_SHORT;if(n===Th)return t.INT;if(n===Kn)return t.UNSIGNED_INT;if(n===Jn)return t.FLOAT;if(n===Qn)return t.HALF_FLOAT;if(n===m0)return t.ALPHA;if(n===g0)return t.RGB;if(n===jn)return t.RGBA;if(n===Ji)return t.DEPTH_COMPONENT;if(n===es)return t.DEPTH_STENCIL;if(n===x0)return t.RED;if(n===Rh)return t.RED_INTEGER;if(n===Js)return t.RG;if(n===Dh)return t.RG_INTEGER;if(n===Nh)return t.RGBA_INTEGER;if(n===ju||n===$u||n===ec||n===tc)if(r===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ju)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$u)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ju)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$u)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ec)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ph||n===Uh||n===Oh||n===Bh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ph)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fh||n===kh||n===zh||n===Hh||n===Gh||n===ac||n===Vh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Fh||n===kh)return r===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===zh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Hh)return s.COMPRESSED_R11_EAC;if(n===Gh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ac)return s.COMPRESSED_RG11_EAC;if(n===Vh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qh||n===Wh||n===Xh||n===Yh||n===Zh||n===Kh||n===Jh||n===Qh||n===jh||n===$h||n===ep||n===tp||n===ap||n===np)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===qh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$h)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ep)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tp)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ap)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===np)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ip||n===sp||n===rp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ip)return r===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===op||n===lp||n===nc||n===up)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===op)return s.COMPRESSED_RED_RGTC1_EXT;if(n===lp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===up)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Br?t.UNSIGNED_INT_24_8:t[n]!==void 0?t[n]:null}return{convert:a}}function PD(t,e){function a(x,d){x.matrixAutoUpdate===!0&&x.updateMatrix(),d.value.copy(x.matrix)}function n(x,d){d.color.getRGB(x.fogColor.value,L0(t)),d.isFog?(x.fogNear.value=d.near,x.fogFar.value=d.far):d.isFogExp2&&(x.fogDensity.value=d.density)}function i(x,d,m,y,_){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(x,d):d.isMeshLambertMaterial?(s(x,d),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(x,d),p(x,d)):d.isMeshPhongMaterial?(s(x,d),f(x,d),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(x,d),c(x,d),d.isMeshPhysicalMaterial&&h(x,d,_)):d.isMeshMatcapMaterial?(s(x,d),S(x,d)):d.isMeshDepthMaterial?s(x,d):d.isMeshDistanceMaterial?(s(x,d),M(x,d)):d.isMeshNormalMaterial?s(x,d):d.isLineBasicMaterial?(r(x,d),d.isLineDashedMaterial&&o(x,d)):d.isPointsMaterial?l(x,d,m,y):d.isSpriteMaterial?u(x,d):d.isShadowMaterial?(x.color.value.copy(d.color),x.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(x,d){x.opacity.value=d.opacity,d.color&&x.diffuse.value.copy(d.color),d.emissive&&x.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(x.map.value=d.map,a(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,a(d.alphaMap,x.alphaMapTransform)),d.bumpMap&&(x.bumpMap.value=d.bumpMap,a(d.bumpMap,x.bumpMapTransform),x.bumpScale.value=d.bumpScale,d.side===Za&&(x.bumpScale.value*=-1)),d.normalMap&&(x.normalMap.value=d.normalMap,a(d.normalMap,x.normalMapTransform),x.normalScale.value.copy(d.normalScale),d.side===Za&&x.normalScale.value.negate()),d.displacementMap&&(x.displacementMap.value=d.displacementMap,a(d.displacementMap,x.displacementMapTransform),x.displacementScale.value=d.displacementScale,x.displacementBias.value=d.displacementBias),d.emissiveMap&&(x.emissiveMap.value=d.emissiveMap,a(d.emissiveMap,x.emissiveMapTransform)),d.specularMap&&(x.specularMap.value=d.specularMap,a(d.specularMap,x.specularMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest);let m=e.get(d),y=m.envMap,_=m.envMapRotation;y&&(x.envMap.value=y,x.envMapRotation.value.setFromMatrix4(ND.makeRotationFromEuler(_)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(tC),x.reflectivity.value=d.reflectivity,x.ior.value=d.ior,x.refractionRatio.value=d.refractionRatio),d.lightMap&&(x.lightMap.value=d.lightMap,x.lightMapIntensity.value=d.lightMapIntensity,a(d.lightMap,x.lightMapTransform)),d.aoMap&&(x.aoMap.value=d.aoMap,x.aoMapIntensity.value=d.aoMapIntensity,a(d.aoMap,x.aoMapTransform))}function r(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,d.map&&(x.map.value=d.map,a(d.map,x.mapTransform))}function o(x,d){x.dashSize.value=d.dashSize,x.totalSize.value=d.dashSize+d.gapSize,x.scale.value=d.scale}function l(x,d,m,y){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.size.value=d.size*m,x.scale.value=y*.5,d.map&&(x.map.value=d.map,a(d.map,x.uvTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,a(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function u(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.rotation.value=d.rotation,d.map&&(x.map.value=d.map,a(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,a(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function f(x,d){x.specular.value.copy(d.specular),x.shininess.value=Math.max(d.shininess,1e-4)}function p(x,d){d.gradientMap&&(x.gradientMap.value=d.gradientMap)}function c(x,d){x.metalness.value=d.metalness,d.metalnessMap&&(x.metalnessMap.value=d.metalnessMap,a(d.metalnessMap,x.metalnessMapTransform)),x.roughness.value=d.roughness,d.roughnessMap&&(x.roughnessMap.value=d.roughnessMap,a(d.roughnessMap,x.roughnessMapTransform)),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)}function h(x,d,m){x.ior.value=d.ior,d.diffuseRoughness>0&&(x.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=d.diffuseRoughnessMap,a(d.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),d.sheen>0&&(x.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),x.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(x.sheenColorMap.value=d.sheenColorMap,a(d.sheenColorMap,x.sheenColorMapTransform)),d.sheenRoughnessMap&&(x.sheenRoughnessMap.value=d.sheenRoughnessMap,a(d.sheenRoughnessMap,x.sheenRoughnessMapTransform))),d.clearcoat>0&&(x.clearcoat.value=d.clearcoat,x.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(x.clearcoatMap.value=d.clearcoatMap,a(d.clearcoatMap,x.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,a(d.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(x.clearcoatNormalMap.value=d.clearcoatNormalMap,a(d.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Za&&x.clearcoatNormalScale.value.negate())),d.dispersion>0&&(x.dispersion.value=d.dispersion),d.retroreflectivity>0&&(x.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(x.iridescence.value=d.iridescence,x.iridescenceIOR.value=d.iridescenceIOR,x.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(x.iridescenceMap.value=d.iridescenceMap,a(d.iridescenceMap,x.iridescenceMapTransform)),d.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=d.iridescenceThicknessMap,a(d.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),d.transmission>0&&(x.transmission.value=d.transmission,x.transmissionSamplerMap.value=m.texture,x.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(x.transmissionMap.value=d.transmissionMap,a(d.transmissionMap,x.transmissionMapTransform)),x.thickness.value=d.thickness,d.thicknessMap&&(x.thicknessMap.value=d.thicknessMap,a(d.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=d.attenuationDistance,x.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(x.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(x.anisotropyMap.value=d.anisotropyMap,a(d.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=d.specularIntensity,x.specularColor.value.copy(d.specularColor),d.specularColorMap&&(x.specularColorMap.value=d.specularColorMap,a(d.specularColorMap,x.specularColorMapTransform)),d.specularIntensityMap&&(x.specularIntensityMap.value=d.specularIntensityMap,a(d.specularIntensityMap,x.specularIntensityMapTransform))}function S(x,d){d.matcap&&(x.matcap.value=d.matcap)}function M(x,d){let m=e.get(d).light;x.referencePosition.value.setFromMatrixPosition(m.matrixWorld),x.nearDistance.value=m.shadow.camera.near,x.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function UD(t,e,a,n){let i={},s={};function r(m,y){let _=y.program;n.uniformBlockBinding(m,_,i[m.id])}function o(m,y){let _=i[m.id];_===void 0&&(S(m),_=l(m),i[m.id]=_,m.addEventListener("dispose",x));let A=y.program;n.updateUBOMapping(m,A);let w=e.render.frame;s[m.id]!==w&&(u(m),s[m.id]=w)}function l(m){let y=t.createBuffer(),_=m.__size,A=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,_,A),t.bindBuffer(t.UNIFORM_BUFFER,null),y}function u(m){let y=i[m.id],_=m.uniforms,A=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let w=0,v=_.length;w<v;w++){let L=_[w];if(Array.isArray(L))for(let P=0,E=L.length;P<E;P++)f(L[P],w,P,A);else f(L,w,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(m,y,_,A){if(c(m,y,_,A)===!0){let w=m.__offset,v=m.value;if(Array.isArray(v)){let L=0;for(let P=0;P<v.length;P++){let E=v[P],U=M(E,!0);p(E,m.__data,L),L+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else p(v,m.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,w,m.__data)}}function p(m,y,_){typeof m=="number"||typeof m=="boolean"?y[_]=m:m.isMatrix3?(y[_]=m.elements[0],y[_+1]=m.elements[1],y[_+2]=m.elements[2],y[_+3]=0,y[_+4]=m.elements[3],y[_+5]=m.elements[4],y[_+6]=m.elements[5],y[_+7]=0,y[_+8]=m.elements[6],y[_+9]=m.elements[7],y[_+10]=m.elements[8],y[_+11]=0):ArrayBuffer.isView(m)?y.set(m.subarray(0,y.length-_),_):m.toArray(y,_)}function c(m,y,_,A){let w=m.value,v=y+"_"+_;if(Array.isArray(w)){A[v]===void 0&&(A[v]=[]);let L=A[v],P=!1;for(let E=0;E<w.length;E++)h(w[E],L,E)===!0&&(P=!0);return P}return h(w,A,v)}function h(m,y,_){if(y[_]===void 0)return typeof m=="number"||typeof m=="boolean"?y[_]=m:ArrayBuffer.isView(m)?y[_]=m.slice():y[_]=m.clone(),!0;{let A=y[_];if(typeof m=="number"||typeof m=="boolean"){if(A!==m)return y[_]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(A.equals(m)===!1)return A.copy(m),!0}}return!1}function S(m){let y=m.uniforms,_=0,A=16;for(let v=0,L=y.length;v<L;v++){let P=Array.isArray(y[v])?y[v]:[y[v]];for(let E=0,U=P.length;E<U;E++){let H=P[E],J=Array.isArray(H.value)?H.value:[H.value],N=Array.isArray(y[v])||Array.isArray(H.value),Z=_;for(let V=0,ie=J.length;V<ie;V++){let W=J[V],ae=M(W,N),ne=_%A,Ee=ne%ae.boundary,He=ne+Ee;_+=Ee,He!==0&&A-He<ae.storage&&(_+=A-He),V===0&&(Z=_),_+=ae.storage}let K=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new K((_-Z)/Float32Array.BYTES_PER_ELEMENT),H.__offset=Z}}let w=_%A;return w>0&&(_+=A-w),m.__size=_,m.__cache={},this}function M(m,y){let _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=16,_.storage=48):m.isMatrix4?(_.boundary=16,_.storage=64):m.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(_.boundary=16,_.storage=m.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",m),y===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function x(m){let y=m.target;y.removeEventListener("dispose",x),t.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function d(){for(let m in i)t.deleteBuffer(i[m]);i={},s={}}return{bind:r,update:o,dispose:d}}function BD(){return Mi===null&&(Mi=new oh(OD,16,16,Js,Qn),Mi.name="DFG_LUT",Mi.minFilter=Xa,Mi.magFilter=Xa,Mi.wrapS=mi,Mi.wrapT=mi,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}var eE,tE,aE,nE,iE,sE,rE,oE,lE,uE,cE,dE,fE,hE,pE,mE,gE,xE,vE,SE,yE,_E,bE,ME,LE,CE,AE,wE,TE,IE,EE,RE,DE,NE,PE,UE,OE,BE,FE,kE,zE,HE,GE,VE,qE,WE,XE,YE,ZE,KE,JE,QE,jE,$E,e2,t2,a2,n2,i2,s2,r2,o2,l2,u2,c2,d2,f2,h2,p2,m2,g2,x2,v2,S2,y2,_2,b2,M2,L2,C2,A2,w2,T2,I2,E2,R2,D2,N2,P2,U2,O2,B2,F2,k2,z2,H2,G2,V2,q2,W2,X2,Y2,Z2,K2,J2,Q2,j2,$2,e3,t3,a3,n3,i3,s3,r3,o3,l3,u3,c3,d3,f3,h3,p3,m3,g3,x3,v3,S3,y3,_3,b3,M3,L3,C3,A3,w3,T3,I3,E3,R3,D3,Qe,_e,Li,dp,N3,XL,oc,LL,k3,z3,YL,ZL,H3,G3,V3,hp,eR,KL,JL,QL,jL,$L,eC,TL,IL,EL,RL,DL,R0,D0,N0,I0,pl,VR,qR,UL,ZR,fp,eD,aD,iD,rD,lD,dD,U0,O0,SD,MD,LD,CD,AD,qL,sc,E0,RD,DD,B0,F0,ND,tC,OD,Mi,pp,aC=ke(()=>{T0();T0();eE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tE=`#ifdef USE_ALPHAHASH
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
#endif`,aE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rE=`#ifdef USE_AOMAP
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
#endif`,oE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lE=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,uE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hE=`#ifdef USE_IRIDESCENCE
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
#endif`,pE=`#ifdef USE_BUMPMAP
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
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_E=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ME=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,LE=`vec3 transformedNormal = objectNormal;
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
#endif`,CE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IE="gl_FragColor = linearToOutputTexel( gl_FragColor );",EE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,DE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,NE=`#ifdef USE_ENVMAP
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
#endif`,PE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,OE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zE=`#ifdef USE_GRADIENTMAP
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
}`,HE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qE=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,WE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,XE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,QE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jE=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$E=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,e2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t2=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,a2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,u2=`#if defined( USE_POINTS_UV )
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
#endif`,c2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h2=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m2=`#ifdef USE_MORPHTARGETS
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
#endif`,g2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,v2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,S2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,b2=`#ifdef USE_NORMALMAP
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
#endif`,M2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,I2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,O2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,B2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,F2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,k2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z2=`#ifdef USE_SKINNING
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
#endif`,H2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G2=`#ifdef USE_SKINNING
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
#endif`,V2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y2=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Z2=`#ifdef USE_TRANSMISSION
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
#endif`,K2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,J2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,j2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e3=`uniform sampler2D t2D;
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
}`,t3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a3=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s3=`#include <common>
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
}`,r3=`#if DEPTH_PACKING == 3200
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
}`,o3=`#define DISTANCE
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
}`,l3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,u3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d3=`uniform float scale;
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
}`,f3=`uniform vec3 diffuse;
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
}`,h3=`#include <common>
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
}`,p3=`uniform vec3 diffuse;
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
}`,m3=`#define LAMBERT
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
}`,g3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,x3=`#define MATCAP
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
}`,v3=`#define MATCAP
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
}`,S3=`#define NORMAL
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
}`,y3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_3=`#define PHONG
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
}`,b3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,M3=`#define STANDARD
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
}`,L3=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,C3=`#define TOON
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
}`,A3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,w3=`uniform float size;
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
}`,T3=`uniform vec3 diffuse;
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
}`,I3=`#include <common>
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
}`,E3=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,R3=`uniform float rotation;
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
}`,D3=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:eE,alphahash_pars_fragment:tE,alphamap_fragment:aE,alphamap_pars_fragment:nE,alphatest_fragment:iE,alphatest_pars_fragment:sE,aomap_fragment:rE,aomap_pars_fragment:oE,batching_pars_vertex:lE,batching_vertex:uE,begin_vertex:cE,beginnormal_vertex:dE,bsdfs:fE,iridescence_fragment:hE,bumpmap_pars_fragment:pE,clipping_planes_fragment:mE,clipping_planes_pars_fragment:gE,clipping_planes_pars_vertex:xE,clipping_planes_vertex:vE,color_fragment:SE,color_pars_fragment:yE,color_pars_vertex:_E,color_vertex:bE,common:ME,defaultnormal_vertex:LE,displacementmap_pars_vertex:CE,displacementmap_vertex:AE,emissivemap_fragment:wE,emissivemap_pars_fragment:TE,colorspace_fragment:IE,colorspace_pars_fragment:EE,envmap_fragment:RE,envmap_common_pars_fragment:DE,envmap_pars_fragment:NE,envmap_pars_vertex:PE,envmap_physical_pars_fragment:WE,envmap_vertex:UE,fog_vertex:OE,fog_pars_vertex:BE,fog_fragment:FE,fog_pars_fragment:kE,gradientmap_pars_fragment:zE,lightmap_pars_fragment:HE,lights_lambert_fragment:GE,lights_lambert_pars_fragment:VE,lights_pars_begin:qE,lights_toon_fragment:XE,lights_toon_pars_fragment:YE,lights_phong_fragment:ZE,lights_phong_pars_fragment:KE,lights_physical_fragment:JE,lights_physical_pars_fragment:QE,lights_fragment_begin:jE,lights_fragment_maps:$E,lights_fragment_end:e2,lightprobes_pars_fragment:t2,logdepthbuf_fragment:a2,logdepthbuf_pars_fragment:n2,logdepthbuf_pars_vertex:i2,logdepthbuf_vertex:s2,map_fragment:r2,map_pars_fragment:o2,map_particle_fragment:l2,map_particle_pars_fragment:u2,metalnessmap_fragment:c2,metalnessmap_pars_fragment:d2,morphinstance_vertex:f2,morphcolor_vertex:h2,morphnormal_vertex:p2,morphtarget_pars_vertex:m2,morphtarget_vertex:g2,normal_fragment_begin:x2,normal_fragment_maps:v2,normal_pars_fragment:S2,normal_pars_vertex:y2,normal_vertex:_2,normalmap_pars_fragment:b2,clearcoat_normal_fragment_begin:M2,clearcoat_normal_fragment_maps:L2,clearcoat_pars_fragment:C2,iridescence_pars_fragment:A2,opaque_fragment:w2,packing:T2,premultiplied_alpha_fragment:I2,project_vertex:E2,dithering_fragment:R2,dithering_pars_fragment:D2,roughnessmap_fragment:N2,roughnessmap_pars_fragment:P2,shadowmap_pars_fragment:U2,shadowmap_pars_vertex:O2,shadowmap_vertex:B2,shadowmask_pars_fragment:F2,skinbase_vertex:k2,skinning_pars_vertex:z2,skinning_vertex:H2,skinnormal_vertex:G2,specularmap_fragment:V2,specularmap_pars_fragment:q2,tonemapping_fragment:W2,tonemapping_pars_fragment:X2,transmission_fragment:Y2,transmission_pars_fragment:Z2,uv_pars_fragment:K2,uv_pars_vertex:J2,uv_vertex:Q2,worldpos_vertex:j2,background_vert:$2,background_frag:e3,backgroundCube_vert:t3,backgroundCube_frag:a3,cube_vert:n3,cube_frag:i3,depth_vert:s3,depth_frag:r3,distance_vert:o3,distance_frag:l3,equirect_vert:u3,equirect_frag:c3,linedashed_vert:d3,linedashed_frag:f3,meshbasic_vert:h3,meshbasic_frag:p3,meshlambert_vert:m3,meshlambert_frag:g3,meshmatcap_vert:x3,meshmatcap_frag:v3,meshnormal_vert:S3,meshnormal_frag:y3,meshphong_vert:_3,meshphong_frag:b3,meshphysical_vert:M3,meshphysical_frag:L3,meshtoon_vert:C3,meshtoon_frag:A3,points_vert:w3,points_frag:T3,shadow_vert:I3,shadow_frag:E3,sprite_vert:R3,sprite_frag:D3},_e={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Li={basic:{uniforms:Fa([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Fa([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Fa([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Fa([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Fa([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new lt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Fa([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Fa([_e.points,_e.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Fa([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Fa([_e.common,_e.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Fa([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Fa([_e.sprite,_e.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Fa([_e.common,_e.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Fa([_e.lights,_e.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Li.physical={uniforms:Fa([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};dp={r:0,b:0,g:0},N3=new zt,XL=new qe;XL.set(-1,0,0,0,1,0,0,0,1);oc=class extends _n{constructor(e=1,a={}){super(e,e,a),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Fu(i),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ws(5,5,5),s=new yi({name:"CubemapFromEquirect",uniforms:Fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Za,blending:Pr});s.uniforms.tEquirect.value=a;let r=new On(i,s),o=a.minFilter;return a.minFilter===$i&&(a.minFilter=Xa),new ul(1,10,this).update(e,r),a.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,a=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(a,n,i);e.setRenderTarget(s)}},LL=256,k3=3,z3=20,YL=256,ZL=16,H3=3,G3=new z,V3=new lt,hp=class t{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ul(1,10,null),this._boxMesh=new On(new Ws(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,a=0,n=.1,i=100,s={}){let{size:r=256,position:o=G3}=s,l=this._renderer;this._setSize(r);let u=this._allocateTarget(),f=this._getSourceTarget(!0);a>0&&(f.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,c=l.autoClearColor,h=l.autoClearDepth,S=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(V3));let x=new ul(n,i,f);return x.position.copy(o),x.update(l,e),l.autoClear=p,l.autoClearColor=c,l.autoClearDepth=h,l.autoClearStencil=S,e.background=M,a>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(u,a)),this._applyPMREM(u),u}fromEquirectangular(e,a=null){return this._fromTexture(e,a)}fromCubemap(e,a=null){return this._fromTexture(e,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wL(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=AL(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,a){return a>0?1-Math.sqrt(1-e/a):0}_setSize(e){this._cubeSize=Math.max(LL,SL(e))}_fromTexture(e,a){e.mapping===Or||e.mapping===fl?this._setSize(e.image.length===0?LL:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=a||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,a=CL(e,!1,!1),n=Math.log2(e)-k3;for(let i=0;i<=n;i++)a.texture.mipmaps.push({width:e>>i,height:e>>i});return a.texture.name="PMREM",a.texture.isPMREMTexture=!0,a}_getSourceTarget(e=!1){let a=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==a||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=CL(a,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,a,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=a;let r=e.width>>a;e.viewport.set(0,0,r,r),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let a;e.mapping===Or||e.mapping===fl?(this._cubemapMaterial===null&&(this._cubemapMaterial=wL()),a=this._cubemapMaterial,a.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=AL()),a=this._equirectMaterial),a.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,a)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=q3(),this._integrationMaterial=W3());let a=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(a/ZL);for(let r=0;r<=n;r++){let o=t.lodToRoughness(r,n);if(r>n-H3)s.roughness.value=o,this._renderCube(e,r,this._integrationMaterial);else{let l=o>0?Math.log2(a)+.5*Math.log2(6/(YL*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,a){this._blurMaterial===null&&(this._blurMaterial=X3());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(a,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}};eR={[n0]:"LINEAR_TONE_MAPPING",[i0]:"REINHARD_TONE_MAPPING",[s0]:"CINEON_TONE_MAPPING",[r0]:"ACES_FILMIC_TONE_MAPPING",[l0]:"AGX_TONE_MAPPING",[u0]:"NEUTRAL_TONE_MAPPING",[o0]:"CUSTOM_TONE_MAPPING"};KL=new sn,JL=new ji(1,1),QL=new ku(1),jL=new Nu,$L=new ih,eC=new Fu,TL=[],IL=[],EL=new Float32Array(16),RL=new Float32Array(9),DL=new Float32Array(4);R0=class{constructor(e,a,n){this.id=e,this.addr=n,this.cache=[],this.type=a.type,this.setValue=_R(a.type)}},D0=class{constructor(e,a,n){this.id=e,this.addr=n,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=HR(a.type)}},N0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,a,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let o=i[s];o.setValue(e,a[o.id],n)}}},I0=/(\w+)(\])?(\[|\.)?/g;pl=class{constructor(e,a){this.seq=[],this.map={};let n=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let o=e.getActiveUniform(a,r),l=e.getUniformLocation(a,o.name);GR(o,l,this)}let i=[],s=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(r):s.push(r);i.length>0&&(this.seq=i.concat(s))}setValue(e,a,n,i){let s=this.map[a];s!==void 0&&s.setValue(e,n,i)}setOptional(e,a,n){let i=a[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,a,n,i){for(let s=0,r=a.length;s!==r;++s){let o=a[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,a){let n=[];for(let i=0,s=e.length;i!==s;++i){let r=e[i];r.id in a&&n.push(r)}return n}};VR=37297,qR=0;UL=new qe;ZR={[n0]:"Linear",[i0]:"Reinhard",[s0]:"Cineon",[r0]:"ACESFilmic",[l0]:"AgX",[u0]:"Neutral",[o0]:"Custom"};fp=new z;eD=/^[ \t]*#include +<([\w\d./]+)>/gm;aD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;iD={[Ju]:"SHADOWMAP_TYPE_PCF",[cl]:"SHADOWMAP_TYPE_VSM"};rD={[fl]:"ENVMAP_MODE_REFRACTION"};lD={[a0]:"ENVMAP_BLENDING_MULTIPLY",[nL]:"ENVMAP_BLENDING_MIX",[iL]:"ENVMAP_BLENDING_ADD"};dD=0,U0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,a,n){let i=this._getShaderCacheForMaterial(e);return i.has(a)===!1&&(i.add(a),a.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let a=this.materialCache.get(e);for(let n of a)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let a=this.materialCache,n=a.get(e);return n===void 0&&(n=new Set,a.set(e,n)),n}_getShaderStage(e){let a=this.shaderCache,n=a.get(e);return n===void 0&&(n=new O0(e),a.set(e,n)),n}},O0=class{constructor(e){this.id=dD++,this.code=e,this.usedTimes=0}};SD=0;MD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,CD=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],AD=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],qL=new zt,sc=new z,E0=new z;RD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DD=`
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

}`,B0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,a){if(this.texture===null){let n=new zu(e.texture);(e.depthNear!==a.depthNear||e.depthFar!==a.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let a=e.cameras[0].viewport,n=new yi({vertexShader:RD,fragmentShader:DD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new On(new Gu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},F0=class extends xi{constructor(e,a){super();let n=this,i=null,s=1,r=null,o="local-floor",l=1,u=null,f=null,p=null,c=null,h=null,S=null,M=typeof XRWebGLBinding<"u",x=new B0,d={},m=a.getContextAttributes(),y=null,_=null,A=[],w=[],v=new et,L=null,P=null,E=new Wa;E.viewport=new Ht;let U=new Wa;U.viewport=new Ht;let H=[E,U],J=new Lh,N=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ve=A[$];return ve===void 0&&(ve=new ol,A[$]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function($){let ve=A[$];return ve===void 0&&(ve=new ol,A[$]=ve),ve.getGripSpace()},this.getHand=function($){let ve=A[$];return ve===void 0&&(ve=new ol,A[$]=ve),ve.getHandSpace()};function K($){let ve=w.indexOf($.inputSource);if(ve===-1)return;let Le=A[ve];Le!==void 0&&(Le.update($.inputSource,$.frame,u||r),Le.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",ie);for(let $=0;$<A.length;$++){let ve=w[$];ve!==null&&(w[$]=null,A[$].disconnect(ve))}N=null,Z=null,x.reset();for(let $ in d)delete d[$];if(e.setRenderTarget(y),h=null,c=null,p=null,i=null,_=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(v.width,v.height,!1),P!==null){let $=P.camera;$.fov=P.fov,$.zoom=P.zoom,$.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||r},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return c!==null?c:h},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(i,a)),p},this.getFrame=function(){return S},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",V),i.addEventListener("inputsourceschange",ie),m.xrCompatible!==!0&&await a.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(v),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Le=null,Ue=null,me=null;m.depth&&(me=m.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,Le=m.stencil?es:Ji,Ue=m.stencil?Br:Kn);let Ve={colorFormat:a.RGBA8,depthFormat:me,scaleFactor:s};p=this.getBinding(),c=p.createProjectionLayer(Ve),i.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),_=new _n(c.textureWidth,c.textureHeight,{format:jn,type:rn,depthTexture:new ji(c.textureWidth,c.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}else{let Le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,a,Le),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),_=new _n(h.framebufferWidth,h.framebufferHeight,{format:jn,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,r=await i.requestReferenceSpace(o),He.setContext(i),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ie($){for(let ve=0;ve<$.removed.length;ve++){let Le=$.removed[ve],Ue=w.indexOf(Le);Ue>=0&&(w[Ue]=null,A[Ue].disconnect(Le))}for(let ve=0;ve<$.added.length;ve++){let Le=$.added[ve],Ue=w.indexOf(Le);if(Ue===-1){for(let Ve=0;Ve<A.length;Ve++)if(Ve>=w.length){w.push(Le),Ue=Ve;break}else if(w[Ve]===null){w[Ve]=Le,Ue=Ve;break}if(Ue===-1)break}let me=A[Ue];me&&me.connect(Le)}}function W($,ve){ve===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ve.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let ve=$.near,Le=$.far;x.texture!==null&&(x.depthNear>0&&(ve=x.depthNear),x.depthFar>0&&(Le=x.depthFar)),J.near=U.near=E.near=ve,J.far=U.far=E.far=Le,(N!==J.near||Z!==J.far)&&(i.updateRenderState({depthNear:J.near,depthFar:J.far}),N=J.near,Z=J.far),J.layers.mask=$.layers.mask|6,E.layers.mask=J.layers.mask&-5,U.layers.mask=J.layers.mask&-3;let Ue=$.parent,me=J.cameras;W(J,Ue);for(let Ve=0;Ve<me.length;Ve++)W(me[Ve],Ue);J.projectionMatrix.copy(E.projectionMatrix),J.projectionMatrixInverse.copy(E.projectionMatrixInverse),P===null&&$.isPerspectiveCamera&&(P={camera:$,fov:$.fov,zoom:$.zoom}),ae($,J,Ue)};function ae($,ve,Le){Le===null?$.matrix.copy(ve.matrixWorld):($.matrix.copy(Le.matrixWorld),$.matrix.invert(),$.matrix.multiply(ve.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ve.projectionMatrix),$.projectionMatrixInverse.copy(ve.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=th*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(c===null&&h===null))return l},this.setFoveation=function($){l=$,c!==null&&(c.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(J)},this.getCameraTexture=function($){return d[$]};let ne=null;function Ee($,ve){if(f=ve.getViewerPose(u||r),S=ve,f!==null){let Le=f.views;h!==null&&(e.setRenderTargetFramebuffer(_,h.framebuffer),e.setRenderTarget(_));let Ue=!1;Le.length!==J.cameras.length&&(J.cameras.length=0,Ue=!0);for(let Pe=0;Pe<Le.length;Pe++){let tt=Le[Pe],St=null;if(h!==null)St=h.getViewport(tt);else{let Gt=p.getViewSubImage(c,tt);St=Gt.viewport,Pe===0&&(e.setRenderTargetTextures(_,Gt.colorTexture,Gt.depthStencilTexture),e.setRenderTarget(_))}let je=H[Pe];je===void 0&&(je=new Wa,je.layers.enable(Pe),je.viewport=new Ht,H[Pe]=je),je.matrix.fromArray(tt.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(tt.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(St.x,St.y,St.width,St.height),Pe===0&&(J.matrix.copy(je.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Ue===!0&&J.cameras.push(je)}let me=i.enabledFeatures;if(me&&me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&M){p=n.getBinding();let Pe=p.getDepthInformation(Le[0]);Pe&&Pe.isValid&&Pe.texture&&x.init(Pe,i.renderState)}if(me&&me.includes("camera-access")&&M){e.state.unbindTexture(),p=n.getBinding();for(let Pe=0;Pe<Le.length;Pe++){let tt=Le[Pe].camera;if(tt){let St=d[tt];St||(St=new zu,d[tt]=St);let je=p.getCameraImage(tt);St.sourceTexture=je}}}}for(let Le=0;Le<A.length;Le++){let Ue=w[Le],me=A[Le];Ue!==null&&me!==void 0&&me.update(Ue,ve,u||r)}ne&&ne($,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),S=null}let He=new WL;He.setAnimationLoop(Ee),this.setAnimationLoop=function($){ne=$},this.dispose=function(){}}},ND=new zt,tC=new qe;tC.set(-1,0,0,0,1,0,0,0,1);OD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Mi=null;pp=class{constructor(e={}){let{canvas:a=mL(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:c=!1,outputBufferType:h=rn}=e;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=r;let M=h,x=new Set([Nh,Dh,Rh]),d=new Set([rn,Kn,hl,Br,Ih,Eh]),m=new Uint32Array(4),y=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},A=null,w=null,v=[],L=[],P=null;this.domElement=a,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,U=!1,H=null,J=null,N=null,Z=null;this._outputColorSpace=yn;let K=0,V=0,ie=null,W=-1,ae=null,ne=new Ht,Ee=new Ht,He=null,$=new lt(0),ve=0,Le=a.width,Ue=a.height,me=1,Ve=null,Yt=null,Pe=new Ht(0,0,Le,Ue),tt=new Ht(0,0,Le,Ue),St=!1,je=new qs,Gt=new lh,Vt=!1,sa=!1,Ze=new zt,ft=new z,jt=new Ht,Ea={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function ya(){return ie===null?me:1}let O=n;function Ka(C,D){return a.getContext(C,D)}let ht,Ct,ge,Zt,Ce,Oe,T,b,B,se,q,re,he,Q,j,de,R,Y,X,fe,ue,ce,De;try{let C={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${"187"}`),a.addEventListener("webglcontextlost",Me,!1),a.addEventListener("webglcontextrestored",Ke,!1),a.addEventListener("webglcontextcreationerror",Se,!1),O===null){let D="webgl2";if(O=Ka(D,C),O===null)throw Ka(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}We()}catch(C){throw a.removeEventListener("webglcontextlost",Me,!1),a.removeEventListener("webglcontextrestored",Ke,!1),a.removeEventListener("webglcontextcreationerror",Se,!1),Ge("WebGLRenderer: "+C.message),C}function We(){ht=new Z3(O),ht.init(),ue=new ED(O,ht),Ct=new B3(O,ht,e,ue),ge=new TD(O,ht),Ct.reversedDepthBuffer&&c&&ge.buffers.depth.setReversed(!0),J=O.createFramebuffer(),N=O.createFramebuffer(),Z=O.createFramebuffer(),Zt=new Q3(O),Ce=new pD,Oe=new ID(O,ht,ge,Ce,Ct,ue,Zt),T=new Y3(E),b=new $I(O),ce=new U3(O,b),B=new K3(O,b,Zt,ce),se=new $3(O,B,b,ce,Zt),Y=new j3(O,Ct,Oe),j=new F3(Ce),q=new hD(E,T,ht,Ct,ce,j),re=new PD(E,Ce),he=new gD,Q=new bD(ht),R=new P3(E,T,ge,se,S,l),de=new wD(E,se,Ct),De=new UD(O,Zt,Ct,ge),X=new O3(O,ht,Zt),fe=new J3(O,ht,Zt),Zt.programs=q.programs,E.capabilities=Ct,E.extensions=ht,E.properties=Ce,E.renderLists=he,E.shadowMap=de,E.state=ge,E.info=Zt}M!==rn&&(P=new tR(M,a.width,a.height,o,i,s));let le=new F0(E,O);this.xr=le,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let C=ht.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=ht.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(C){C!==void 0&&(me=C,this.setSize(Le,Ue,!1))},this.getSize=function(C){return C.set(Le,Ue)},this.setSize=function(C,D,G=!0){if(le.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}Le=C,Ue=D,a.width=Math.floor(C*me),a.height=Math.floor(D*me),G===!0&&(a.style.width=C+"px",a.style.height=D+"px"),P!==null&&P.setSize(a.width,a.height),this.setViewport(0,0,C,D)},this.getDrawingBufferSize=function(C){return C.set(Le*me,Ue*me).floor()},this.setDrawingBufferSize=function(C,D,G){Le=C,Ue=D,me=G,a.width=Math.floor(C*G),a.height=Math.floor(D*G),this.setViewport(0,0,C,D)},this.setEffects=function(C){if(M===rn){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let D=0;D<C.length;D++)if(C[D].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(ne)},this.getViewport=function(C){return C.copy(Pe)},this.setViewport=function(C,D,G,F){C.isVector4?Pe.set(C.x,C.y,C.z,C.w):Pe.set(C,D,G,F),ge.viewport(ne.copy(Pe).multiplyScalar(ya()).round())},this.getScissor=function(C){return C.copy(tt)},this.setScissor=function(C,D,G,F){C.isVector4?tt.set(C.x,C.y,C.z,C.w):tt.set(C,D,G,F),ge.scissor(Ee.copy(tt).multiplyScalar(ya()).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(C){ge.setScissorTest(St=C)},this.setOpaqueSort=function(C){Ve=C},this.setTransparentSort=function(C){Yt=C},this.getClearColor=function(C){return C.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(C=!0,D=!0,G=!0){let F=0;if(C){let k=!1;if(ie!==null){let xe=ie.texture.format;k=x.has(xe)}if(k){let xe=ie.texture.type,Ae=d.has(xe),pe=R.getClearColor(),be=R.getClearAlpha(),Re=pe.r,Ye=pe.g,it=pe.b;Ae?(m[0]=Re,m[1]=Ye,m[2]=it,m[3]=be,O.clearBufferuiv(O.COLOR,0,m)):(y[0]=Re,y[1]=Ye,y[2]=it,y[3]=be,O.clearBufferiv(O.COLOR,0,y))}else F|=O.COLOR_BUFFER_BIT}D&&(F|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(F|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&O.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),H=C},this.dispose=function(){a.removeEventListener("webglcontextlost",Me,!1),a.removeEventListener("webglcontextrestored",Ke,!1),a.removeEventListener("webglcontextcreationerror",Se,!1),R.dispose(),he.dispose(),Q.dispose(),Oe.dispose(),Ce.dispose(),T.dispose(),se.dispose(),B.dispose(),ce.dispose(),De.dispose(),q.dispose(),le.dispose(),le.removeEventListener("sessionstart",ye),le.removeEventListener("sessionend",Be),Ut.stop()};function Me(C){C.preventDefault(),b0("WebGLRenderer: Context Lost."),U=!0}function Ke(){b0("WebGLRenderer: Context Restored."),U=!1;let C=Zt.autoReset,D=de.enabled,G=de.autoUpdate,F=de.needsUpdate,k=de.type;We(),Zt.autoReset=C,de.enabled=D,de.autoUpdate=G,de.needsUpdate=F,de.type=k}function Se(C){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function mt(C){let D=C.target;D.removeEventListener("dispose",mt),ra(D)}function ra(C){I(C),Ce.remove(C)}function I(C){let D=Ce.get(C).programs;D!==void 0&&(D.forEach(function(G){q.releaseProgram(G)}),C.isShaderMaterial&&q.releaseShaderCache(C))}this.renderBufferDirect=function(C,D,G,F,k,xe){D===null&&(D=Ea);let Ae=k.isMesh&&k.matrixWorld.determinantAffine()<0,pe=Pc(C,D,G,F,k);ge.setMaterial(F,Ae);let be=G.index,Re=1;if(F.wireframe===!0){if(be=B.getWireframeAttribute(G),be===void 0)return;Re=2}let Ye=G.drawRange,it=G.attributes.position,Te=Ye.start*Re,st=(Ye.start+Ye.count)*Re;xe!==null&&(Te=Math.max(Te,xe.start*Re),st=Math.min(st,(xe.start+xe.count)*Re)),be!==null?(Te=Math.max(Te,0),st=Math.min(st,be.count)):it!=null&&(Te=Math.max(Te,0),st=Math.min(st,it.count));let ea=st-Te;if(ea<0||ea===1/0)return;ce.setup(k,F,pe,G,be);let Et,wt=X;if(be!==null&&(Et=b.get(be),wt=fe,wt.setIndex(Et)),k.isMesh)F.wireframe===!0?(ge.setLineWidth(F.wireframeLinewidth*ya()),wt.setMode(O.LINES)):wt.setMode(O.TRIANGLES);else if(k.isLine){let Ra=F.linewidth;Ra===void 0&&(Ra=1),ge.setLineWidth(Ra*ya()),k.isLineSegments?wt.setMode(O.LINES):k.isLineLoop?wt.setMode(O.LINE_LOOP):wt.setMode(O.LINE_STRIP)}else k.isPoints?wt.setMode(O.POINTS):k.isSprite&&wt.setMode(O.TRIANGLES);if(k.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))wt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ra=k._multiDrawStarts,Ie=k._multiDrawCounts,ka=k._multiDrawCount,gt=be?b.get(be).bytesPerElement:1,tr=Ce.get(F).currentProgram.getUniforms();for(let Da=0;Da<ka;Da++)tr.setValue(O,"_gl_DrawID",Da),wt.render(Ra[Da]/gt,Ie[Da])}else if(k.isInstancedMesh)wt.renderInstances(Te,ea,k.count);else if(G.isInstancedBufferGeometry){let Ra=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ie=Math.min(G.instanceCount,Ra);wt.renderInstances(Te,ea,Ie)}else wt.render(Te,ea)};function te(C,D,G,F){H!==null&&C.isNodeMaterial&&H.setObject(F,C),Vt===!0&&j.setState(C,G,!1),C.transparent===!0&&C.side===_i&&C.forceSinglePass===!1?(C.side=Za,C.needsUpdate=!0,Bt(C,D,F),C.side=Ks,C.needsUpdate=!0,Bt(C,D,F),C.side=_i):Bt(C,D,F)}this.compile=function(C,D,G=null){G===null&&(G=C),H!==null&&H.renderStart(C,D,G),w=Q.get(G),w.init(D),L.push(w),G.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),C!==G&&C.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),w.setupLights(),H!==null&&H.updateLights(w.state.lightsArray),sa=this.localClippingEnabled,Vt=j.init(this.clippingPlanes,sa),Vt===!0&&j.setGlobalState(this.clippingPlanes,D),H!==null&&de.render(w.state.shadowsArray,G,D);let F=new Set;return C.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let xe=k.material;if(xe)if(Array.isArray(xe))for(let Ae=0;Ae<xe.length;Ae++){let pe=xe[Ae];te(pe,G,D,k),F.add(pe)}else te(xe,G,D,k),F.add(xe)}),w=L.pop(),H!==null&&H.renderEnd(),F},this.compileAsync=function(C,D,G=null){let F=this.compile(C,D,G);return new Promise(k=>{function xe(){if(F.forEach(function(Ae){let be=Ce.get(Ae).currentProgram;(be===void 0||be.isReady())&&F.delete(Ae)}),F.size===0){k(C);return}setTimeout(xe,10)}ht.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let oe=null;function Ne(C){oe&&oe(C)}function ye(){Ut.stop()}function Be(){Ut.start()}let Ut=new WL;Ut.setAnimationLoop(Ne),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(C){oe=C,le.setAnimationLoop(C),C===null?Ut.stop():Ut.start()},le.addEventListener("sessionstart",ye),le.addEventListener("sessionend",Be),this.render=function(C,D){if(D!==void 0&&D.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;H!==null&&H.renderStart(C,D);let G=le.enabled===!0&&le.isPresenting===!0,F=P!==null&&(ie===null||G)&&P.begin(E,ie);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(D),D=le.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,D,ie),w=Q.get(C,L.length),w.init(D),w.state.textureUnits=Oe.getTextureUnits(),L.push(w),Ze.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?Gt.setFromArrayCamera(D):je.setFromProjectionMatrix(Ze,Un,D.reversedDepth),sa=this.localClippingEnabled,Vt=j.init(this.clippingPlanes,sa),A=he.get(C,v.length),A.init(),v.push(A),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){let Ae=E.xr.getDepthSensingMesh();Ae!==null&&Mn(Ae,D,-1/0,E.sortObjects)}Mn(C,D,0,E.sortObjects),A.finish(),H!==null&&H.updateLights(w.state.lightsArray),E.sortObjects===!0&&A.sort(Ve,Yt),qt=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,qt&&R.addToRenderList(A,C),this.info.autoReset===!0&&this.info.reset(),Vt===!0&&j.beginShadows();let k=w.state.shadowsArray;if(de.render(k,C,D),Vt===!0&&j.endShadows(),(F&&P.hasRenderPass())===!1){let Ae=A.opaque,pe=A.transmissive;if(w.setupLights(),D.isArrayCamera){let be=D.cameras;if(pe.length>0)for(let Re=0,Ye=be.length;Re<Ye;Re++){let it=be[Re];Kt(Ae,pe,C,it)}qt&&R.render(C);for(let Re=0,Ye=be.length;Re<Ye;Re++){let it=be[Re];_l(A,C,it,it.viewport)}}else pe.length>0&&Kt(Ae,pe,C,D),qt&&R.render(C),_l(A,C,D)}ie!==null&&V===0&&(Oe.updateMultisampleRenderTarget(ie),Oe.updateRenderTargetMipmap(ie)),F&&P.end(E),C.isScene===!0&&C.onAfterRender(E,C,D),ce.resetDefaultState(),W=-1,ae=null,L.pop(),L.length>0?(w=L[L.length-1],Oe.setTextureUnits(w.state.textureUnits),Vt===!0&&j.setGlobalState(E.clippingPlanes,w.state.camera)):w=null,v.pop(),v.length>0?A=v[v.length-1]:A=null,H!==null&&H.renderEnd()};function Mn(C,D,G,F){if(C.visible===!1)return;if(C.layers.test(D.layers)){if(C.isGroup)G=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(D);else if(C.isLight)w.pushLight(C),C.castShadow&&w.pushShadow(C);else if(C.isSprite){let Ae=D.isArrayCamera?Gt:je;if(!C.frustumCulled||C.intersectsFrustum(Ae)){F&&jt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ze);let pe=se.update(C),be=C.material;be.visible&&A.push(C,pe,be,G,jt.z,null,D)}}else if(C.isMesh||C.isLine||C.isPoints){let Ae=D.isArrayCamera?Gt:je;if(!C.frustumCulled||C.intersectsFrustum(Ae)){let pe=se.update(C),be=C.material;if(F&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),jt.copy(C.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),jt.copy(pe.boundingSphere.center)),jt.applyMatrix4(C.matrixWorld).applyMatrix4(Ze)),Array.isArray(be)){let Re=pe.groups;for(let Ye=0,it=Re.length;Ye<it;Ye++){let Te=Re[Ye],st=be[Te.materialIndex];st&&st.visible&&A.push(C,pe,st,G,jt.z,Te,D)}}else be.visible&&A.push(C,pe,be,G,jt.z,null,D)}}}let xe=C.children;for(let Ae=0,pe=xe.length;Ae<pe;Ae++)Mn(xe[Ae],D,G,F)}function _l(C,D,G,F){let{opaque:k,transmissive:xe,transparent:Ae}=C;w.setupLightsView(G),Vt===!0&&j.setGlobalState(E.clippingPlanes,G),F&&ge.viewport(ne.copy(F)),k.length>0&&er(k,D,G),xe.length>0&&er(xe,D,G),Ae.length>0&&er(Ae,D,G),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Kt(C,D,G,F){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[F.id]===void 0){let Te=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[F.id]=new _n(1,1,{generateMipmaps:!0,type:Te?Qn:rn,minFilter:$i,samples:Math.max(4,Ct.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let xe=w.state.transmissionRenderTarget[F.id],Ae=F.viewport||ne;xe.setSize(Ae.z*E.transmissionResolutionScale,Ae.w*E.transmissionResolutionScale);let pe=E.getRenderTarget(),be=E.getActiveCubeFace(),Re=E.getActiveMipmapLevel();E.setRenderTarget(xe),E.getClearColor($),ve=E.getClearAlpha(),ve<1&&E.setClearColor(16777215,.5),E.clear(),qt&&R.render(G);let Ye=E.toneMapping;E.toneMapping=bi;let it=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),w.setupLightsView(F),Vt===!0&&j.setGlobalState(E.clippingPlanes,F),er(C,G,F),Oe.updateMultisampleRenderTarget(xe),Oe.updateRenderTargetMipmap(xe),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let st=0,ea=D.length;st<ea;st++){let Et=D[st],{object:wt,geometry:Ra,material:Ie,group:ka}=Et;if(Ie.side===_i&&wt.layers.test(F.layers)){let gt=Ie.side;Ie.side=Za,Ie.needsUpdate=!0,_a(wt,G,F,Ra,Ie,ka),Ie.side=gt,Ie.needsUpdate=!0,Te=!0}}Te===!0&&(Oe.updateMultisampleRenderTarget(xe),Oe.updateRenderTargetMipmap(xe))}E.setRenderTarget(pe,be,Re),E.setClearColor($,ve),it!==void 0&&(F.viewport=it),E.toneMapping=Ye}function er(C,D,G){let F=D.isScene===!0?D.overrideMaterial:null;for(let k=0,xe=C.length;k<xe;k++){let Ae=C[k],{object:pe,geometry:be,group:Re}=Ae,Ye=Ae.material;Ye.allowOverride===!0&&F!==null&&(Ye=F),pe.layers.test(G.layers)&&_a(pe,D,G,be,Ye,Re)}}function _a(C,D,G,F,k,xe){H!==null&&k.isNodeMaterial&&H.setObject(C,k),C.onBeforeRender(E,D,G,F,k,xe),C.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),k.onBeforeRender(E,D,G,F,C,xe),k.transparent===!0&&k.side===_i&&k.forceSinglePass===!1?(k.side=Za,k.needsUpdate=!0,E.renderBufferDirect(G,D,F,k,C,xe),k.side=Ks,k.needsUpdate=!0,E.renderBufferDirect(G,D,F,k,C,xe),k.side=_i):E.renderBufferDirect(G,D,F,k,C,xe),C.onAfterRender(E,D,G,F,k,xe)}function Ja(C){let D=0;for(let G of C)G.texture!==null&&D++;return D}function Bt(C,D,G){D.isScene!==!0&&(D=Ea);let F=Ce.get(C),k=w.state.lights,xe=w.state.shadowsArray,Ae=k.state.version,pe=q.getParameters(C,k.state,xe,D,G,w.state.lightProbeGridArray),be=q.getProgramCacheKey(pe),Re=F.programs;F.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?D.environment:null,F.fog=D.fog;let Ye=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;F.envMap=T.get(C.envMap||F.environment,Ye),F.envMapRotation=F.environment!==null&&C.envMap===null?D.environmentRotation:C.envMapRotation,Re===void 0&&(C.addEventListener("dispose",mt),Re=new Map,F.programs=Re,F.programVariants=new Map);let it=Re.get(be);if(it!==void 0){if(F.currentProgram===it&&F.lightsStateVersion===Ae)return Ci(C,pe),it}else pe.uniforms=q.getUniforms(C),H!==null&&C.isNodeMaterial&&H.build(C,G,pe),C.onBeforeCompile(pe,E),it=q.acquireProgram(pe,be),Re.set(be,it),F.uniforms=pe.uniforms;let Te=F.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Te.clippingPlanes=j.uniform),Ci(C,pe),F.needsLights=F1(C),F.lightsStateVersion=Ae,F.needsLights&&(Te.ambientLightColor.value=k.state.ambient,Te.lightProbe.value=k.state.probe,Te.sunLights.value=k.state.sun,Te.sunLightShadows.value=k.state.sunShadow,Te.directionalLights.value=k.state.directional,Te.directionalLightShadows.value=k.state.directionalShadow,Te.spotLights.value=k.state.spot,Te.spotLightShadows.value=k.state.spotShadow,Te.rectAreaLights.value=k.state.rectArea,Te.ltc_1.value=k.state.rectAreaLTC1,Te.ltc_2.value=k.state.rectAreaLTC2,Te.pointLights.value=k.state.point,Te.pointLightShadows.value=k.state.pointShadow,Te.hemisphereLights.value=k.state.hemi,Te.sunShadowMatrix.value=k.state.sunShadowMatrix,Te.sunShadowCascade.value=k.state.sunShadowCascade,Te.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Te.spotLightMatrix.value=k.state.spotLightMatrix,Te.spotLightMap.value=k.state.spotLightMap,Te.pointShadowMatrix.value=k.state.pointShadowMatrix),F.numLightProbeGrids=Ja(w.state.lightProbeGridArray),F.currentProgram=it,F.uniformsList=null,it}function Bn(C,D,G,F,k){let xe=Ce.get(C),Ae=xe.currentProgram.id+","+F+","+k,pe=xe.programVariants.get(Ae);return pe===void 0?(pe=Bt(C,D,G),xe.programVariants.set(Ae,pe)):(xe.currentProgram=pe,xe.uniformsList=null,xe.outputColorSpace=F,xe.toneMapping=k),pe}function Nc(C){if(C.uniformsList===null){let D=C.currentProgram.getUniforms();C.uniformsList=pl.seqWithValue(D.seq,C.uniforms)}return C.uniformsList}function Ci(C,D){let G=Ce.get(C);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function Pc(C,D,G,F,k){D.isScene!==!0&&(D=Ea),Oe.resetTextureUnits();let xe=D.fog,Ae=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?D.environment:null,pe=ie===null?E.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ot.workingColorSpace,be=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Re=T.get(F.envMap||Ae,be),Ye=F.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,it=!!G.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Te=!!G.morphAttributes.position,st=!!G.morphAttributes.normal,ea=!!G.morphAttributes.color,Et=bi;F.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Et=E.toneMapping);let wt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ra=wt!==void 0?wt.length:0,Ie=Ce.get(F),ka=w.state.lights;if(Vt===!0&&(sa===!0||C!==ae)){let Wt=C===ae&&F.id===W;j.setState(F,C,Wt)}let gt=!1,tr=!1;F.version===Ie.__version?Ie.needsLights&&Ie.lightsStateVersion!==ka.state.version||k.isBatchedMesh&&Ie.batching===!1||!k.isBatchedMesh&&Ie.batching===!0||k.isBatchedMesh&&Ie.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Ie.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Ie.instancing===!1||!k.isInstancedMesh&&Ie.instancing===!0||k.isSkinnedMesh&&Ie.skinning===!1||!k.isSkinnedMesh&&Ie.skinning===!0||k.isInstancedMesh&&Ie.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ie.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ie.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ie.instancingMorph===!1&&k.morphTexture!==null||Ie.envMap!==Re||F.fog===!0&&Ie.fog!==xe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==j.numPlanes||Ie.numIntersection!==j.numIntersection)||Ie.vertexAlphas!==Ye||Ie.vertexTangents!==it||Ie.morphTargets!==Te||Ie.morphNormals!==st||Ie.morphColors!==ea||Ie.morphTargetsCount!==Ra||Ie.numLightProbeGrids!==Ja(w.state.lightProbeGridArray)?gt=!0:(Ie.outputColorSpace!==pe||Ie.toneMapping!==Et)&&(tr=!0):(gt=!0,Ie.__version=F.version);let Da=Ie.currentProgram;(gt===!0||tr===!0)&&(Da=tr===!0?Bn(F,D,k,pe,Et):Bt(F,D,k),H&&F.isNodeMaterial&&H.onUpdateProgram(F,Da,Ie));let Uc=!1,ns=!1,ar=!1,ct=Da.getUniforms(),ba=Ie.uniforms;if(ge.useProgram(Da.program)&&(Uc=!0,ns=!0,ar=!0),F.id!==W&&(W=F.id,ns=!0),Uc||ae!==C){ge.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ct.setValue(O,"projectionMatrix",C.projectionMatrix),ct.setValue(O,"viewMatrix",C.matrixWorldInverse);let fa=ct.map.cameraPosition;fa!==void 0&&fa.setValue(O,ft.setFromMatrixPosition(C.matrixWorld)),Ct.logarithmicDepthBuffer&&ct.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ct.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),ae!==C&&(ae=C,ns=!0,ar=!0)}if(Ie.needsLights&&(ka.state.sunShadowMap.length>0&&ct.setValue(O,"sunShadowMap",ka.state.sunShadowMap,Oe),ka.state.directionalShadowMap.length>0&&ct.setValue(O,"directionalShadowMap",ka.state.directionalShadowMap,Oe),ka.state.spotShadowMap.length>0&&ct.setValue(O,"spotShadowMap",ka.state.spotShadowMap,Oe),ka.state.pointShadowMap.length>0&&ct.setValue(O,"pointShadowMap",ka.state.pointShadowMap,Oe)),k.isSkinnedMesh){ct.setOptional(O,k,"bindMatrix"),ct.setOptional(O,k,"bindMatrixInverse");let Wt=k.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),ct.setValue(O,"boneTexture",Wt.boneTexture,Oe))}k.isBatchedMesh&&(ct.setOptional(O,k,"batchingTexture"),ct.setValue(O,"batchingTexture",k._matricesTexture,Oe),ct.setOptional(O,k,"batchingIdTexture"),ct.setValue(O,"batchingIdTexture",k._indirectTexture,Oe),ct.setOptional(O,k,"batchingColorTexture"),k._colorsTexture!==null&&ct.setValue(O,"batchingColorTexture",k._colorsTexture,Oe));let Fn=G.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&Y.update(k,G,Da),(ns||Ie.receiveShadow!==k.receiveShadow)&&(Ie.receiveShadow=k.receiveShadow,ct.setValue(O,"receiveShadow",k.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&D.environment!==null&&(ba.envMapIntensity.value=D.environmentIntensity),ba.dfgLUT!==void 0&&(ba.dfgLUT.value=BD()),ns){if(ct.setValue(O,"toneMappingExposure",E.toneMappingExposure),Ie.needsLights&&B1(ba,ar),xe&&F.fog===!0&&re.refreshFogUniforms(ba,xe),re.refreshMaterialUniforms(ba,F,me,Ue,w.state.transmissionRenderTarget[C.id]),Ie.needsLights&&Ie.numLightProbeGrids>0){let Wt=_,fa=0;for(let Ai of w.state.lightProbeGridArray)Ai.texture!==null&&(Wt.textures[fa]=Ai.texture,Wt.min[fa]=Ai.boundingBox.min,Wt.max[fa]=Ai.boundingBox.max,Wt.resolution[fa]=Ai.resolution,fa++);for(let Ai in Wt)Wt[Ai].length=fa;ba.probesSH.value=Wt.textures,ba.probesMin.value=Wt.min,ba.probesMax.value=Wt.max,ba.probesResolution.value=Wt.resolution}pl.upload(O,Nc(Ie),ba,Oe)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(pl.upload(O,Nc(Ie),ba,Oe),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ct.setValue(O,"center",k.center),ct.setValue(O,"modelViewMatrix",k.modelViewMatrix),ct.setValue(O,"normalMatrix",k.normalMatrix),ct.setValue(O,"modelMatrix",k.matrixWorld),F.uniformsGroups!==void 0){let Wt=F.uniformsGroups;for(let fa=0,Ai=Wt.length;fa<Ai;fa++){let q0=Wt[fa];De.update(q0,Da),De.bind(q0,Da)}}return Da}function B1(C,D){C.ambientLightColor.needsUpdate=D,C.lightProbe.needsUpdate=D,C.sunLights.needsUpdate=D,C.sunLightShadows.needsUpdate=D,C.directionalLights.needsUpdate=D,C.directionalLightShadows.needsUpdate=D,C.pointLights.needsUpdate=D,C.pointLightShadows.needsUpdate=D,C.spotLights.needsUpdate=D,C.spotLightShadows.needsUpdate=D,C.rectAreaLights.needsUpdate=D,C.hemisphereLights.needsUpdate=D}function F1(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(C,D,G){let F=Ce.get(C);F.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),Ce.get(C.texture).__webglTexture=D,Ce.get(C.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:G,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,D){let G=Ce.get(C);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(C,D=0,G=0){ie=C,K=D,V=G;let F=null,k=!1,xe=!1;if(C){let pe=Ce.get(C);if(pe.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(O.FRAMEBUFFER,pe.__webglFramebuffer),ne.copy(C.viewport),Ee.copy(C.scissor),He=C.scissorTest,ge.viewport(ne),ge.scissor(Ee),ge.setScissorTest(He),W=-1;return}else if(pe.__webglFramebuffer===void 0)Oe.setupRenderTarget(C);else if(pe.__hasExternalTextures)Oe.rebindTextures(C,Ce.get(C.texture).__webglTexture,Ce.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Ye=C.depthTexture;if(pe.__boundDepthTexture!==Ye){if(Ye!==null&&Ce.has(Ye)&&(C.width!==Ye.image.width||C.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(C)}}let be=C.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(xe=!0);let Re=Ce.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?F=Re[D][G]:F=Re[D],k=!0):C.samples>0&&Oe.useMultisampledRTT(C)===!1?F=Ce.get(C).__webglMultisampledFramebuffer:Array.isArray(Re)?F=Re[G]:F=Re,ne.copy(C.viewport),Ee.copy(C.scissor),He=C.scissorTest}else ne.copy(Pe).multiplyScalar(me).floor(),Ee.copy(tt).multiplyScalar(me).floor(),He=St;if(G!==0&&(F=J),ge.bindFramebuffer(O.FRAMEBUFFER,F)&&ge.drawBuffers(C,F),ge.viewport(ne),ge.scissor(Ee),ge.setScissorTest(He),k){let pe=Ce.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,pe.__webglTexture,G)}else if(xe){let pe=D;for(let be=0;be<C.textures.length;be++){let Re=Ce.get(C.textures[be]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+be,Re.__webglTexture,G,pe)}}else if(C!==null&&G!==0){let pe=Ce.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,pe.__webglTexture,G)}W=-1};function V0(C){let D=Ce.get(C);return(D.__readFormat!==C.format||D.__readType!==C.type)&&(D.__readFormat=C.format,D.__readType=C.type,D.__formatReadable=Ct.textureFormatReadable(C.format),D.__typeReadable=Ct.textureTypeReadable(C.type)),D}this.readRenderTargetPixels=function(C,D,G,F,k,xe,Ae,pe=0){if(!(C&&C.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ae!==void 0&&(be=be[Ae],Array.isArray(be)&&(be=be[0])),be){ge.bindFramebuffer(O.FRAMEBUFFER,be);try{let Re=C.textures[pe],Ye=Re.format,it=Re.type;C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+pe);let Te=V0(Re);if(Te.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=C.width-F&&G>=0&&G<=C.height-k&&O.readPixels(D,G,F,k,ue.convert(Ye),ue.convert(it),xe)}finally{let Re=ie!==null?Ce.get(ie).__webglFramebuffer:null;ge.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(C,D,G,F,k,xe,Ae,pe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ae!==void 0&&(be=be[Ae],Array.isArray(be)&&(be=be[0])),be)if(D>=0&&D<=C.width-F&&G>=0&&G<=C.height-k){ge.bindFramebuffer(O.FRAMEBUFFER,be);let Re=C.textures[pe],Ye=Re.format,it=Re.type;C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+pe);let Te=V0(Re);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let st=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,st),O.bufferData(O.PIXEL_PACK_BUFFER,xe.byteLength,O.STREAM_READ),O.readPixels(D,G,F,k,ue.convert(Ye),ue.convert(it),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let ea=ie!==null?Ce.get(ie).__webglFramebuffer:null;ge.bindFramebuffer(O.FRAMEBUFFER,ea);let Et=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await xL(O,Et,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,st),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,xe),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(st),O.deleteSync(Et),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,D=null,G=0){let F=Math.pow(2,-G),k=Math.floor(C.image.width*F),xe=Math.floor(C.image.height*F),Ae=D!==null?D.x:0,pe=D!==null?D.y:0;Oe.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,G,0,0,Ae,pe,k,xe),ge.unbindTexture()},this.copyTextureToTexture=function(C,D,G=null,F=null,k=0,xe=0){let Ae,pe,be,Re,Ye,it,Te,st,ea,Et=C.isCompressedTexture?C.mipmaps[xe]:C.image;if(G!==null)Ae=G.max.x-G.min.x,pe=G.max.y-G.min.y,be=G.isBox3?G.max.z-G.min.z:1,Re=G.min.x,Ye=G.min.y,it=G.isBox3?G.min.z:0;else{let ct=Math.pow(2,-k);Ae=Math.floor(Et.width*ct),pe=Math.floor(Et.height*ct),C.isDataArrayTexture?be=Et.depth:C.isData3DTexture?be=Math.floor(Et.depth*ct):be=1,Re=0,Ye=0,it=0}F!==null?(Te=F.x,st=F.y,ea=F.z):(Te=0,st=0,ea=0);let wt=ue.convert(D.format),Ra=ue.convert(D.type),Ie;D.isData3DTexture?(Oe.setTexture3D(D,0),Ie=O.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Oe.setTexture2DArray(D,0),Ie=O.TEXTURE_2D_ARRAY):(Oe.setTexture2D(D,0),Ie=O.TEXTURE_2D),ge.activeTexture(O.TEXTURE0),ge.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,D.flipY),ge.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),ge.pixelStorei(O.UNPACK_ALIGNMENT,D.unpackAlignment);let ka=ge.getParameter(O.UNPACK_ROW_LENGTH),gt=ge.getParameter(O.UNPACK_IMAGE_HEIGHT),tr=ge.getParameter(O.UNPACK_SKIP_PIXELS),Da=ge.getParameter(O.UNPACK_SKIP_ROWS),Uc=ge.getParameter(O.UNPACK_SKIP_IMAGES);ge.pixelStorei(O.UNPACK_ROW_LENGTH,Et.width),ge.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Et.height),ge.pixelStorei(O.UNPACK_SKIP_PIXELS,Re),ge.pixelStorei(O.UNPACK_SKIP_ROWS,Ye),ge.pixelStorei(O.UNPACK_SKIP_IMAGES,it);let ns=C.isDataArrayTexture||C.isData3DTexture,ar=D.isDataArrayTexture||D.isData3DTexture;if(C.isDepthTexture){let ct=Ce.get(C),ba=Ce.get(D),Fn=Ce.get(ct.__renderTarget),Wt=Ce.get(ba.__renderTarget);ge.bindFramebuffer(O.READ_FRAMEBUFFER,Fn.__webglFramebuffer),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let fa=0;fa<be;fa++)ns&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ce.get(C).__webglTexture,k,it+fa),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ce.get(D).__webglTexture,xe,ea+fa)),O.blitFramebuffer(Re,Ye,Re+Ae,Ye+pe,Te,st,Te+Ae,st+pe,O.DEPTH_BUFFER_BIT,O.NEAREST);ge.bindFramebuffer(O.READ_FRAMEBUFFER,null),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(k!==0||C.isRenderTargetTexture||Ce.has(C)){let ct=Ce.get(C),ba=Ce.get(D);ge.bindFramebuffer(O.READ_FRAMEBUFFER,N),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,Z);for(let Fn=0;Fn<be;Fn++)ns?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ct.__webglTexture,k,it+Fn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ct.__webglTexture,k),ar?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ba.__webglTexture,xe,ea+Fn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ba.__webglTexture,xe),k!==0?O.blitFramebuffer(Re,Ye,Re+Ae,Ye+pe,Te,st,Te+Ae,st+pe,O.COLOR_BUFFER_BIT,O.NEAREST):ar?O.copyTexSubImage3D(Ie,xe,Te,st,ea+Fn,Re,Ye,Ae,pe):O.copyTexSubImage2D(Ie,xe,Te,st,Re,Ye,Ae,pe);ge.bindFramebuffer(O.READ_FRAMEBUFFER,null),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ar?C.isDataTexture||C.isData3DTexture?O.texSubImage3D(Ie,xe,Te,st,ea,Ae,pe,be,wt,Ra,Et.data):D.isCompressedArrayTexture?O.compressedTexSubImage3D(Ie,xe,Te,st,ea,Ae,pe,be,wt,Et.data):O.texSubImage3D(Ie,xe,Te,st,ea,Ae,pe,be,wt,Ra,Et):C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,xe,Te,st,Ae,pe,wt,Ra,Et.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,xe,Te,st,Et.width,Et.height,wt,Et.data):O.texSubImage2D(O.TEXTURE_2D,xe,Te,st,Ae,pe,wt,Ra,Et);ge.pixelStorei(O.UNPACK_ROW_LENGTH,ka),ge.pixelStorei(O.UNPACK_IMAGE_HEIGHT,gt),ge.pixelStorei(O.UNPACK_SKIP_PIXELS,tr),ge.pixelStorei(O.UNPACK_SKIP_ROWS,Da),ge.pixelStorei(O.UNPACK_SKIP_IMAGES,Uc),xe===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&O.generateMipmap(Ie),ge.unbindTexture()},this.initRenderTarget=function(C){Ce.get(C).__webglFramebuffer===void 0&&Oe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Oe.setTextureCube(C,0):C.isData3DTexture?Oe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Oe.setTexture2DArray(C,0):Oe.setTexture2D(C,0),ge.unbindTexture()},this.resetState=function(){K=0,V=0,ie=null,ge.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let a=this.getContext();a.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),a.unpackColorSpace=ot._getUnpackColorSpace()}}});var nC,iC=ke(()=>{nC=t=>(t.match(/\d+[xX]\d+|[A-Z]?[a-z]+|[A-Z]|\d+/g)??[]).join("-").toLowerCase()});function sC(t,e,a=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:nC(t),size:24,node:e,...a.length>0?{aliases:a}:{}}}var rC=ke(()=>{iC();});var oC,lC=ke(()=>{oC=t=>{let e="",a=!1;for(let n of t){if(n==="-"||n==="_"||n<=" "){a=e.length>0;continue}e.length===0?e+=n.toLowerCase():e+=a?n.toUpperCase():n,a=!1}return e}});var uC,cC=ke(()=>{lC();uC=t=>{let e=oC(t);return e.charAt(0).toUpperCase()+e.slice(1)}});var uc,k0=ke(()=>{uc=(...t)=>{let e=new Set;for(let a of t)if(typeof a=="string")for(let n of a.split(/\s+/))n&&e.add(n);return[...e].join(" ")}});var Qs,dC=ke(()=>{Qs={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"}});function z0(t){return t!=null}function fC(t,e={}){let a=e.attributeNames??{},n=c=>a[c]??c,i=t.size??t.width??Qs.width,s=t.size??t.height??Qs.height,r=t.aliases?.filter(c=>typeof c=="string"&&c.trim()!=="").map(c=>`lucide-${c}`)??[],o=[...t.name?[`lucide-${t.name}`]:[],...r],l=e.className?.split(" ").filter(Boolean)??[],u=e.includeDefaultClasses===!1?uc(...l):uc("lucide",...o,...l),f=e.absoluteStrokeWidth?Number(e.strokeWidth??Qs["stroke-width"])*Number(t.size??t.width??Qs.width)/Number(e.size??e.width??Qs.width):e.strokeWidth??Qs["stroke-width"];return["svg",{...Object.entries(Qs).reduce((c,[h,S])=>(c[n(h)]=S,c),{}),..."color"in e&&e.color&&{[n("stroke")]:e.color},..."size"in e&&z0(e.size)&&{[n("width")]:e.size,[n("height")]:e.size},..."width"in e&&z0(e.width)&&{[n("width")]:e.width},..."height"in e&&z0(e.height)&&{[n("height")]:e.height},[n("stroke-width")]:f,...u&&{[n("class")]:u},[n("viewBox")]:`0 0 ${i} ${s}`,...e.hasA11yProp===!1?{[n("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(c=>{let[h,S,M]=c,x=e.nonScalingStroke?{[n("vector-effect")]:"non-scaling-stroke",...S}:S;return M?[h,x,M]:[h,x]})]}var hC=ke(()=>{dC();k0();});function pC(t,e={}){return fC(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}var mC=ke(()=>{hC();});var gC,xC=ke(()=>{gC=t=>{if(t==null||typeof t!="object")return!1;for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&(e.startsWith("aria-")||e==="role"||e==="title")&&t[e]!=null)return!0;return!1}});var gl,kD,vC,SC=ke(()=>{"use strict";"use client";gl=Vr(is(),1);kD=(0,gl.createContext)({}),vC=()=>(0,gl.useContext)(kD)});var cc,yC,_C=ke(()=>{"use strict";"use client";cc=Vr(is(),1);k0();mC();xC();SC();yC=(0,cc.forwardRef)(({color:t,size:e,width:a,height:n,strokeWidth:i,absoluteStrokeWidth:s,nonScalingStroke:r,className:o="",children:l,iconNode:u=[],icon:f={node:u,aliases:[],size:24},...p},c)=>{let{size:h=24,strokeWidth:S=2,absoluteStrokeWidth:M=!1,nonScalingStroke:x=!1,color:d="currentColor",className:m=""}=vC()??{},y=!!l||gC(p),[_,A,w=[]]=pC(f,{color:t??d,width:a??e??h,height:n??e??h,strokeWidth:i??S,absoluteStrokeWidth:s??M,nonScalingStroke:r??x,className:uc(m,o),hasA11yProp:y,attributes:p});return(0,cc.createElement)(_,{ref:c,...A},[...w.map(([v,L])=>(0,cc.createElement)(v,L)),...Array.isArray(l)?l:[l]])})});function we(t,e=[],a=[]){let n=typeof t=="string"?sC(t,e,a):t,i=(0,xp.forwardRef)(({className:s,...r},o)=>(0,xp.createElement)(yC,{ref:o,icon:n,className:s,...r}));return n.name&&(i.displayName=uC(n.name)),i}var xp,dt=ke(()=>{xp=Vr(is(),1);rC();cC();_C();});var bC,dc,MC=ke(()=>{dt();bC={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]};bC.node;dc=we(bC)});var LC,fc,CC=ke(()=>{dt();LC={name:"bell",size:24,node:[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]};LC.node;fc=we(LC)});var AC,kr,wC=ke(()=>{dt();AC={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};AC.node;kr=we(AC)});var TC,xl,IC=ke(()=>{dt();TC={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};TC.node;xl=we(TC)});var EC,js,RC=ke(()=>{dt();EC={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]};EC.node;js=we(EC)});var DC,vl,NC=ke(()=>{dt();DC={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};DC.node;vl=we(DC)});var PC,hc,UC=ke(()=>{dt();PC={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};PC.node;hc=we(PC)});var OC,pc,BC=ke(()=>{dt();OC={name:"coins",size:24,node:[["path",{d:"M13.744 17.736a6 6 0 1 1-7.48-7.48",key:"bq4yh3"}],["path",{d:"M15 6h1v4",key:"11y1tn"}],["path",{d:"m6.134 14.768.866-.5 2 3.464",key:"17snzx"}],["circle",{cx:"16",cy:"8",r:"6",key:"14bfc9"}]]};OC.node;pc=we(OC)});var FC,zr,kC=ke(()=>{dt();FC={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};FC.node;zr=we(FC)});var zC,mc,HC=ke(()=>{dt();zC={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};zC.node;mc=we(zC)});var GC,Hr,VC=ke(()=>{dt();GC={name:"dumbbell",size:24,node:[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]]};GC.node;Hr=we(GC)});var qC,gc,WC=ke(()=>{dt();qC={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};qC.node;gc=we(qC)});var XC,xc,YC=ke(()=>{dt();XC={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};XC.node;xc=we(XC)});var ZC,vc,KC=ke(()=>{dt();ZC={name:"folder-plus",size:24,node:[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]};ZC.node;vc=we(ZC)});var JC,Sc,QC=ke(()=>{dt();JC={name:"gift",size:24,node:[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"1sqzm4"}],["path",{d:"M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5",key:"kc0143"}],["rect",{x:"3",y:"7",width:"18",height:"4",rx:"1",key:"1hberx"}]]};JC.node;Sc=we(JC)});var jC,yc,$C=ke(()=>{dt();jC={name:"graduation-cap",size:24,node:[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]};jC.node;yc=we(jC)});var e1,_c,t1=ke(()=>{dt();e1={name:"heart",size:24,node:[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]};e1.node;_c=we(e1)});var a1,bc,n1=ke(()=>{dt();a1={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]};a1.node;bc=we(a1)});var i1,Mc,s1=ke(()=>{dt();i1={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]};i1.node;Mc=we(i1)});var r1,Sl,o1=ke(()=>{dt();r1={name:"mic",size:24,node:[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]]};r1.node;Sl=we(r1)});var l1,Lc,u1=ke(()=>{dt();l1={name:"minimize-2",size:24,node:[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]};l1.node;Lc=we(l1)});var c1,Cc,d1=ke(()=>{dt();c1={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]};c1.node;Cc=we(c1)});var f1,Ac,h1=ke(()=>{dt();f1={name:"piggy-bank",size:24,node:[["path",{d:"M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z",key:"1piglc"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M2 8v1a2 2 0 0 0 2 2h1",key:"1env43"}]]};f1.node;Ac=we(f1)});var p1,wc,m1=ke(()=>{dt();p1={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};p1.node;wc=we(p1)});var g1,Tc,x1=ke(()=>{dt();g1={name:"scale",size:24,node:[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]]};g1.node;Tc=we(g1)});var v1,Ic,S1=ke(()=>{dt();v1={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};v1.node;Ic=we(v1)});var y1,$s,_1=ke(()=>{dt();y1={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};y1.node;$s=we(y1)});var b1,as,M1=ke(()=>{dt();b1={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};b1.node;as=we(b1)});var L1,Ec,C1=ke(()=>{dt();L1={name:"trophy",size:24,node:[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",key:"pwuv1l"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",key:"1y54w1"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",key:"e30mpu"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",key:"i0yafy"}]]};L1.node;Ec=we(L1)});var A1,Rc,w1=ke(()=>{dt();A1={name:"upload",size:24,node:[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]};A1.node;Rc=we(A1)});var T1,yl,I1=ke(()=>{dt();T1={name:"wallet",size:24,node:[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]};T1.node;yl=we(T1)});var E1,Gr,R1=ke(()=>{dt();E1={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};E1.node;Gr=we(E1)});var D1=ke(()=>{"use strict";_1();M1();MC();CC();wC();IC();RC();NC();UC();BC();kC();HC();VC();WC();YC();KC();QC();$C();t1();n1();s1();o1();u1();d1();h1();m1();x1();S1();C1();w1();I1();R1();});function N1(t){let e=Array.isArray(t)&&t.length?t:["\u6682\u65E0\u6B63\u6587\u5185\u5BB9"],a=typeof window<"u"?window.innerWidth:390,n=typeof window<"u"?window.innerHeight:844,i=Math.max(240,Math.min(720,a-48)),s=Math.max(260,n-175),r=Math.max(12,Math.floor(i/16)),o=Math.max(6,Math.floor(s/31)),l=[],u=[],f=0,p=(c,h)=>{let S=c.trim();if(!S)return;let M=Math.max(1,Math.ceil((S.length+(h?2:0))/r))+.45;f+M>o&&u.length>0&&(l.push(u),u=[],f=0),u.push(S),f+=M};return e.forEach(c=>{let h=String(c).trim();if(!h)return;/^(第[零一二三四五六七八九十百千\d]+[章节回篇部分]|Chapter\s*\d+|Section\s*\d+|序言|前言|后记)/i.test(h)&&u.length>0&&(l.push(u),u=[],f=0);let M=h,x=!0;for(;M.length>0;){let d=Math.max(2,Math.floor(o-f-.5)),m=Math.max(r*2,d*r-(x?2:0));if(M.length<=m){p(M,x);break}else{let y=m,_=M.slice(Math.floor(m*.75),m).search(/[。！？；，、”」\n]/);_!==-1&&(y=Math.floor(m*.75)+_+1),p(M.slice(0,y),x),M=M.slice(y),x=!1,f>=o-1.5&&(l.push(u),u=[],f=0)}}}),u.length>0&&l.push(u),l.length?l:[["\u6682\u65E0\u6B63\u6587\u5185\u5BB9"]]}function zD(t){let e=[];return t.forEach((a,n)=>{let i=a[0]||"";/^(第[零一二三四五六七八九十百千\d]+[章节回篇部分]|Chapter\s*\d+|Section\s*\d+|序言|前言|后记)/i.test(i)?e.push({title:i.slice(0,32),page:n}):(n===0||n%4===0)&&e.push({title:`\u7B2C ${n+1} \u9875 \xB7 ${i.slice(0,18)}...`,page:n})}),e.length?e:[{title:"\u7B2C 1 \u9875 \xB7 \u6B63\u6587\u5F00\u59CB",page:0}]}function HD(){let t=(0,g.useRef)(null),[e,a]=(0,g.useState)("crystal"),n=(0,g.useRef)(null),i=(0,g.useRef)(null);return(0,g.useEffect)(()=>{let s=t.current;if(!s)return;let r=new Uu;i.current=r;let o=new Wa(45,s.clientWidth/s.clientHeight,.1,100);o.position.z=4.2;let l=new pp({antialias:!0,alpha:!0});l.setSize(s.clientWidth,s.clientHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.innerHTML="",s.appendChild(l.domElement),r.add(new Ku(16777215,.85));let u=new Zu(3718648,1.3);u.position.set(5,5,5),r.add(u),(y=>{n.current&&r.remove(n.current);let _,A;y==="crystal"?(_=new Hu(1.25,0),A=new Nr({color:1096065,roughness:.2,metalness:.35,flatShading:!0})):y==="ammonite"?(_=new Vu(.85,.28,100,16),A=new Nr({color:16096779,roughness:.3,metalness:.45})):(_=new Ws(1.75,.85,1.75,3,2,3),A=new Nr({color:8490232,wireframe:!0}));let w=new On(_,A);n.current=w,r.add(w)})(e);let p=!1,c={x:0,y:0},h=y=>{p=!0;let _=y.touches?y.touches[0].clientX:y.clientX,A=y.touches?y.touches[0].clientY:y.clientY;c={x:_,y:A}},S=y=>{if(!p||!n.current)return;let _=y.touches?y.touches[0].clientX:y.clientX,A=y.touches?y.touches[0].clientY:y.clientY;n.current.rotation.y+=(_-c.x)*.012,n.current.rotation.x+=(A-c.y)*.012,c={x:_,y:A}},M=()=>{p=!1};s.addEventListener("mousedown",h),s.addEventListener("touchstart",h,{passive:!0}),window.addEventListener("mousemove",S),window.addEventListener("touchmove",S,{passive:!0}),window.addEventListener("mouseup",M),window.addEventListener("touchend",M);let x,d=()=>{x=requestAnimationFrame(d),n.current&&!p&&(n.current.rotation.y+=.008,n.current.rotation.x+=.003),l.render(r,o)};d();let m=()=>{s&&(o.aspect=s.clientWidth/s.clientHeight,o.updateProjectionMatrix(),l.setSize(s.clientWidth,s.clientHeight))};return window.addEventListener("resize",m),()=>{cancelAnimationFrame(x),window.removeEventListener("mousemove",S),window.removeEventListener("touchmove",S),window.removeEventListener("mouseup",M),window.removeEventListener("touchend",M),window.removeEventListener("resize",m),l.dispose()}},[e]),g.default.createElement("div",{className:"bg-slate-900 text-white rounded-3xl p-5 flex flex-col justify-between shadow-md"},g.default.createElement("div",null,g.default.createElement("div",{className:"flex items-center justify-between mb-2"},g.default.createElement("span",{className:"text-xs font-bold text-teal-400 bg-teal-950 px-2.5 py-1 rounded-xl border border-teal-800"},"React + Three.js 3D \u5B9E\u9A8C\u5BA4"),g.default.createElement("span",{className:"text-[11px] text-slate-400"},"\u652F\u6301\u9F20\u6807/\u89E6\u63A7\u65CB\u8F6C")),g.default.createElement("div",{ref:t,className:"w-full h-60 rounded-2xl bg-slate-950 overflow-hidden relative cursor-grab border border-slate-800 mt-2"})),g.default.createElement("div",{className:"mt-4 grid grid-cols-3 gap-2"},[{id:"crystal",label:"\u77FF\u7269\u6676\u4F53"},{id:"ammonite",label:"\u83CA\u77F3\u87BA\u65CB"},{id:"terrain",label:"\u7A7A\u95F4\u88C5\u7F6E"}].map(s=>g.default.createElement("button",{key:s.id,onClick:()=>a(s.id),className:`py-2 rounded-xl text-xs font-semibold transition ${e===s.id?"bg-teal-600 text-white":"bg-white/10 hover:bg-white/20 text-slate-200"}`},s.label))))}function G0(){let[t,e]=(0,g.useState)(()=>{try{let I=localStorage.getItem(H0);return I?{...Dc,...JSON.parse(I)}:Dc}catch{return Dc}}),[a,n]=(0,g.useState)("dashboard"),[i,s]=(0,g.useState)([]),[r,o]=(0,g.useState)(new Date),[l,u]=(0,g.useState)({temp:14,desc:"\u591A\u4E91\u8F6C\u6674",icon:"\u{1F324}\uFE0F",loc:"\u6B66\u6C49\xB7\u6B66\u79D1\u5927\u9EC4\u5BB6\u6E56\u6821\u533A"}),[f,p]=(0,g.useState)(""),[c,h]=(0,g.useState)(""),[S,M]=(0,g.useState)(""),[x,d]=(0,g.useState)(0),[m,y]=(0,g.useState)(0),[_,A]=(0,g.useState)(0),[w,v]=(0,g.useState)("\u5348\u9910 (12:30)"),[L,P]=(0,g.useState)(""),[E,U]=(0,g.useState)("week13"),[H,J]=(0,g.useState)("all"),[N,Z]=(0,g.useState)(""),[K,V]=(0,g.useState)(null),[ie,W]=(0,g.useState)(0),[ae,ne]=(0,g.useState)("paper"),[Ee,He]=(0,g.useState)(16),[$,ve]=(0,g.useState)(""),[Le,Ue]=(0,g.useState)(0),[me,Ve]=(0,g.useState)("page"),[Yt,Pe]=(0,g.useState)(!1),[tt,St]=(0,g.useState)(!0),[je,Gt]=(0,g.useState)(!1),Vt=(0,g.useRef)(null),sa=(0,g.useRef)(null),[Ze,ft]=(0,g.useState)(null),[jt,Ea]=(0,g.useState)(""),[qt,ya]=(0,g.useState)({title:"",amount:"15.0",category:"\u5065\u5EB7\u9910\u996E"}),[O,Ka]=(0,g.useState)(String(t.wallet.budget)),[ht,Ct]=(0,g.useState)({title:"",cost:"120",icon:"\u{1F381}"}),[ge,Zt]=(0,g.useState)(""),[Ce,Oe]=(0,g.useState)({title:"",author:"",category:"\u5730\u5927\u4E13\u4E1A",content:""}),[T,b]=(0,g.useState)({title:"",due:"\u672C\u5468\u4E94 22:00"}),[B,se]=(0,g.useState)({id:null,type:"\u5348\u9910 (12:30)",desc:"",preCal:0,leftoverCal:0});(0,g.useEffect)(()=>{try{localStorage.setItem(H0,JSON.stringify(t))}catch{}},[t]),(0,g.useEffect)(()=>{let I=setInterval(()=>o(new Date),1e3);return()=>clearInterval(I)},[]),(0,g.useEffect)(()=>{fetch("https://api.open-meteo.com/v1/forecast?latitude=30.4408&longitude=114.2654&current_weather=true").then(I=>I.json()).then(I=>{if(I?.current_weather){let te=Math.round(I.current_weather.temperature),oe=I.current_weather.weathercode;u({temp:te,desc:oe<=3?"\u591A\u4E91\u6674\u6717":oe<=67?"\u5C0F\u96E8\u5FAE\u51C9":"\u964D\u6E29\u6CE8\u610F\u4FDD\u6696",icon:oe<=1?"\u2600\uFE0F":oe<=3?"\u{1F324}\uFE0F":"\u{1F327}\uFE0F",loc:"\u6B66\u6C49\xB7\u6B66\u79D1\u5927\u9EC4\u5BB6\u6E56\u6821\u533A"})}}).catch(()=>{})},[]),(0,g.useEffect)(()=>{if(!K)return;let I=setInterval(()=>W(te=>te+1),1e3);return()=>clearInterval(I)},[K]);let q=(I,te="success")=>{let oe=Date.now()+Math.random();s(Ne=>[...Ne,{id:oe,msg:I,type:te}]),setTimeout(()=>s(Ne=>Ne.filter(ye=>ye.id!==oe)),3e3)},re=(I,te,oe,Ne=0)=>{e(ye=>{let Be=ye.pet.exp+te,Ut=ye.pet.level,Mn=ye.pet.maxExp;return Be>=Mn&&(Ut+=1,Be-=Mn,Mn=Math.round(Mn*1.2)),{...ye,coins:ye.coins+I,pet:{...ye.pet,level:Ut,exp:Be,maxExp:Mn,food:ye.pet.food+Ne}}}),oe&&q(oe,"success")},he=(I,te)=>{let oe=I.target.files?.[0];if(!oe)return;let Ne=new FileReader;Ne.onload=ye=>{if(te==="pre"){p(ye.target.result);let Be=Math.floor(540+Math.random()*160);d(Be),A(Math.round(Be*(m/100))),q(`\u9910\u524D\u8BC6\u522B\u5B8C\u6210\uFF1A\u7EA6 ${Be} kcal`,"info")}else{h(ye.target.result);let Be=Math.floor(18+Math.random()*22);y(Be),A(Math.round(x*(Be/100))),q(`\u9910\u540E\u5BF9\u6BD4\u5B8C\u6210\uFF1A\u5269\u4F59 ${Be}%\uFF0C\u5DF2\u6263\u9664\u6B8B\u4F59\u70ED\u91CF\uFF01`,"success")}},Ne.readAsDataURL(oe)},Q=()=>{let I=Math.max(0,Number(x)-Number(_)),te=`${String(r.getHours()).padStart(2,"0")}:${String(r.getMinutes()).padStart(2,"0")}`;e(oe=>({...oe,calories:{...oe.calories,meals:[{id:Date.now(),type:w,desc:S,preCal:Number(x),leftoverCal:Number(_),netCal:I,time:te},...oe.calories.meals]}})),re(20,20,`\u51C0\u6444\u5165 ${I} kcal \u5DF2\u5165\u8D26\uFF0C\u83B7\u5F97 +20 \u81EA\u5F8B\u91D1\u5E01\uFF01`)},j=I=>{U(I);let te={week13:[{day:"\u5468\u4E00 (11.23)",classes:["14:00-17:40 \u591A\u5A92\u4F53\u8BBE\u8BA12 (\u6559\u4E00\u4E8C\u533A603)","\u6BD5\u4E1A\u8BBE\u8BA1(\u8BBA\u6587) (\u6559\u4E00\u4E8C\u533A507\xB7\u81EA\u4E3B)"],workout:"18:10 \u4E0B\u8BFE\u987A\u8DEF\uFF1A\u7F8E\u80CC\u76F4\u89D2\u80A9 + \u722C\u576125m",isWorkout:!0,done:!1},{day:"\u5468\u4E8C (11.24)",classes:["\u5168\u5929\u65E0\u5750\u73ED\u8BFE \xB7 \u6BD5\u4E1A\u8BBE\u8BA1\u81EA\u4E3B\u63A8\u8FDB"],workout:"\u79D1\u7814\u6587\u732E + \u96C5\u601D\u7CBE\u542C\u8BAD\u7EC3",isWorkout:!1,done:!1},{day:"\u5468\u4E09 (11.25)",classes:["14:00-17:40 \u591A\u5A92\u4F53\u8BBE\u8BA12 (\u6559\u4E00\u4E8C\u533A603)","\u6BD5\u4E1A\u8BBE\u8BA1(\u8BBA\u6587) (\u6559\u4E00\u4E8C\u533A507\xB7\u81EA\u4E3B)"],workout:"18:10 \u4E0B\u8BFE\u987A\u8DEF\uFF1A\u871C\u6843\u81C0\u817F\u5851\u5F62 + \u692D\u5706\u673A",isWorkout:!0,done:!1},{day:"\u5468\u56DB (11.26)",classes:["\u5168\u5929\u65E0\u5750\u73ED\u8BFE \xB7 \u6BD5\u4E1A\u8BBE\u8BA1\u81EA\u4E3B\u63A8\u8FDB"],workout:"\u65E5\u8BED\u8DDF\u8BFB + 3D\u5EFA\u6A21\u5DE5\u4F5C\u53F0",isWorkout:!1,done:!1},{day:"\u5468\u4E94 (11.27)",classes:["14:00-17:40 \u591A\u5A92\u4F53\u8BBE\u8BA12 (\u6559\u4E00\u4E8C\u533A603)","\u6BD5\u4E1A\u8BBE\u8BA1(\u8BBA\u6587) (\u6559\u4E00\u4E8C\u533A507\xB7\u81EA\u4E3B)"],workout:"18:10 \u4E0B\u8BFE\u987A\u8DEF\uFF1A\u6838\u5FC3\u9A6C\u7532\u7EBF + \u62C9\u4F38\u653E\u677E",isWorkout:!0,done:!1},{day:"\u5468\u516D (11.28)",classes:[],workout:"\u5468\u672B\u6237\u5916\u6563\u6B65 / \u6B3A\u9A97\u9910\u5FAE\u8C03",isWorkout:!1,done:!1},{day:"\u5468\u65E5 (11.29)",classes:["20:30-22:10 \u6B4C\u58F0\u4E2D\u7684\u515A\u53F2Z (\u667A\u6167\u6811)"],workout:"\u5468\u4F53\u91CD\u590D\u76D8 + \u7761\u524D\u6C89\u6D78\u9605\u8BFB",isWorkout:!1,done:!1}],week14_15:[{day:"\u5468\u4E00",classes:["14:00-17:40 \u591A\u5A92\u4F53\u8BBE\u8BA12 (\u6559\u4E00\u4E8C\u533A603)"],workout:"18:10 \u7F8E\u80CC\u76F4\u89D2\u80A9 + \u722C\u576125m",isWorkout:!0,done:!1},{day:"\u5468\u4E8C",classes:["14:00-17:40 \u5B66\u79D1\u7EFC\u5408\u8BBE\u8BA1(\u4E8C) (\u6559\u4E00\u4E8C\u533A603)"],workout:"\u79D1\u7814\u6587\u732E + \u96C5\u601D\u7CBE\u542C\u8BAD\u7EC3",isWorkout:!1,done:!1},{day:"\u5468\u4E09",classes:["08:20-12:00 \u5B66\u79D1\u7EFC\u5408\u8BBE\u8BA1(\u4E8C)","14:00-17:40 \u591A\u5A92\u4F53\u8BBE\u8BA12"],workout:"18:10 \u871C\u6843\u81C0\u817F\u5851\u5F62 + \u692D\u5706\u673A",isWorkout:!0,done:!1},{day:"\u5468\u56DB",classes:["14:00-17:40 \u5B66\u79D1\u7EFC\u5408\u8BBE\u8BA1(\u4E8C) (\u6559\u4E00\u4E8C\u533A603)"],workout:"\u65E5\u8BED\u8DDF\u8BFB + 3D\u5EFA\u6A21\u5DE5\u4F5C\u53F0",isWorkout:!1,done:!1},{day:"\u5468\u4E94",classes:["14:00-17:40 \u591A\u5A92\u4F53\u8BBE\u8BA12 (\u6559\u4E00\u4E8C\u533A603)"],workout:"18:10 \u6838\u5FC3\u9A6C\u7532\u7EBF + \u62C9\u4F38\u653E\u677E",isWorkout:!0,done:!1},{day:"\u5468\u516D",classes:[],workout:"\u5468\u672B\u6237\u5916\u6563\u6B65 / \u6B3A\u9A97\u9910\u5FAE\u8C03",isWorkout:!1,done:!1},{day:"\u5468\u65E5",classes:["20:30-22:10 \u6B4C\u58F0\u4E2D\u7684\u515A\u53F2Z (\u667A\u6167\u6811)"],workout:"\u5468\u4F53\u91CD\u590D\u76D8 + \u7761\u524D\u6C89\u6D78\u9605\u8BFB",isWorkout:!1,done:!1}],week16_19:[{day:"\u5468\u4E00",classes:["08:20-12:00 \u516C\u5171\u7A7A\u95F4\u8425\u9020 (\u88F4\u78CA\xB7\u6559\u4E00\u4E8C\u533A603)"],workout:"16:30 \u7F8E\u80CC\u76F4\u89D2\u80A9 + \u722C\u576125m",isWorkout:!0,done:!1},{day:"\u5468\u4E8C",classes:["14:00-17:40 \u5B66\u79D1\u7EFC\u5408\u8BBE\u8BA1(\u4E8C) (16\u5468)"],workout:"\u79D1\u7814\u6587\u732E + \u96C5\u601D\u7CBE\u542C\u8BAD\u7EC3",isWorkout:!1,done:!1},{day:"\u5468\u4E09",classes:["08:20-12:00 \u516C\u5171\u7A7A\u95F4\u8425\u9020 (\u88F4\u78CA\xB7\u6559\u4E00\u4E8C\u533A603)"],workout:"16:30 \u871C\u6843\u81C0\u817F\u5851\u5F62 + \u692D\u5706\u673A",isWorkout:!0,done:!1},{day:"\u5468\u56DB",classes:["14:00-17:40 \u5B66\u79D1\u7EFC\u5408\u8BBE\u8BA1(\u4E8C) (16\u5468)"],workout:"\u65E5\u8BED\u8DDF\u8BFB + 3D\u5EFA\u6A21\u5DE5\u4F5C\u53F0",isWorkout:!1,done:!1},{day:"\u5468\u4E94",classes:["08:20-12:00 \u516C\u5171\u7A7A\u95F4\u8425\u9020 (\u88F4\u78CA\xB7\u6559\u4E00\u4E8C\u533A603)"],workout:"16:30 \u6838\u5FC3\u9A6C\u7532\u7EBF + \u62C9\u4F38\u653E\u677E",isWorkout:!0,done:!1},{day:"\u5468\u516D",classes:[],workout:"\u5468\u672B\u6237\u5916\u6563\u6B65 / \u6B3A\u9A97\u9910\u5FAE\u8C03",isWorkout:!1,done:!1},{day:"\u5468\u65E5",classes:[],workout:"\u5468\u4F53\u91CD\u590D\u76D8 + \u7761\u524D\u6C89\u6D78\u9605\u8BFB",isWorkout:!1,done:!1}]};te[I]&&(e(oe=>({...oe,weekPlan:te[I]})),q("\u5DF2\u540C\u6B65\u5207\u6362\u6559\u5B66\u5468\u8BFE\u8868\uFF0808:20-12:00 / 14:00-17:40 \u8FDE\u5802\u5236\uFF09","info"))},de=()=>{let I=jt.trim();if(!I)return;let te=I.split(/[，,。；;！!？?\n]+/).map(ye=>ye.trim()).filter(Boolean),oe=["\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D","\u5468\u65E5"],Ne=[];e(ye=>{let Be=[...ye.schedules],Ut=ye.weekPlan.map(Kt=>({...Kt})),Mn=[...ye.ddls],_l=[...ye.wallet.expenses];return te.forEach(Kt=>{if(/取消|删掉|删除|不去|不看/.test(Kt)){let _a=Kt.replace(/.*?(取消|删掉|删除|不去|不看)(了|掉)?/,"").trim(),Ja=Be.length;if(Be=Be.filter(Bt=>!(_a&&Bt.title.includes(_a)||/阅读|看书/.test(Kt)&&Bt.tag.includes("\u9605\u8BFB")||/健身|练背|练腿|核心/.test(Kt)&&Bt.tag.includes("\u51CF\u8102")||/雅思/.test(Kt)&&Bt.title.includes("\u96C5\u601D"))),Be.length<Ja){Ne.push(`\u5DF2\u53D6\u6D88\u300C${_a||"\u76F8\u5173\u8BA1\u5212"}\u300D`);return}}if(/健身|练背|臀腿|马甲线/.test(Kt)&&/调到|改到|移到|换到|顺延/.test(Kt)){let _a=oe.filter(Ja=>Kt.includes(Ja));if(_a.length>=2){let Ja=oe.indexOf(_a[0]),Bt=oe.indexOf(_a[1]),Bn=Ut[Ja].workout;Ut[Ja].workout="\u8BED\u97F3\u5DF2\u8C03\u51FA \xB7 \u81EA\u4E3B\u5B66\u4E60/\u4F11\u606F",Ut[Ja].isWorkout=!1,Ut[Bt].workout=`\u3010\u8BED\u97F3\u8C03\u5165\u3011${Bn.replace(/^18:10 下课顺路：/,"")}`,Ut[Bt].isWorkout=!0,Ne.push(`\u5DF2\u5C06${_a[0]}\u5065\u8EAB\u8C03\u81F3${_a[1]}`);return}}if(/改到|调到|推迟到|挪到|换到/.test(Kt)){let _a=["\u96C5\u601D","\u65E5\u8BED","\u6587\u732E","\u6BD5\u8BBE","\u591A\u5A92\u4F53","\u9605\u8BFB","\u770B\u4E66","\u5065\u8EAB"],Ja=Be.find(Bt=>_a.some(Bn=>Kt.includes(Bn)&&(Bt.title.includes(Bn)||Bt.tag.includes(Bn))));if(Ja){let Bt=Kt.match(/(早上|上午|中午|下午|晚上|今晚|明晚)?\s*([零一二两三四五六七八九十\d]{1,2})\s*(?:点|:|：)\s*(半|\d{1,2})?/),Bn="\u5DF2\u8C03\u6574\u65F6\u6BB5";if(Bt){let Nc={\u96F6:0,\u4E00:1,\u4E8C:2,\u4E24:2,\u4E09:3,\u56DB:4,\u4E94:5,\u516D:6,\u4E03:7,\u516B:8,\u4E5D:9,\u5341:10,\u5341\u4E00:11,\u5341\u4E8C:12},Ci=parseInt(Bt[2],10);isNaN(Ci)&&(Ci=Nc[Bt[2]]||20),/下午|晚上|今晚|明晚/.test(Bt[1]||"")&&Ci<12&&(Ci+=12);let Pc=Bt[3]==="\u534A"?"30":Bt[3]?String(Bt[3]).padStart(2,"0"):"00";Bn=`${String(Ci).padStart(2,"0")}:${Pc} - ${String((Ci+1)%24).padStart(2,"0")}:${Pc}`}Ja.time=Bn,Ne.push(`\u5DF2\u8C03\u6574\u300C${Ja.title.slice(0,10)}...\u300D\u81F3 ${Bn}`);return}}let er=Kt.match(/(\d+(?:\.\d+)?)\s*(?:元|块)/);if(er){let _a=parseFloat(er[1]);_l.unshift({id:Date.now()+Math.random(),title:`\u8BED\u97F3\u8BB0\u8D26\uFF1A${Kt.slice(0,15)}`,amount:_a,category:"\u5065\u5EB7\u9910\u996E",date:"\u521A\u521A"}),Ne.push(`\u5DF2\u8BB0\u8D26 \xA5${_a}`);return}if(/提醒|DDL|交作业|初稿/.test(Kt)){Mn.unshift({id:Date.now()+Math.random(),title:Kt,due:"\u8BED\u97F3\u63D0\u9192",urgent:!0}),Ne.push("\u5DF2\u65B0\u589E\u63D0\u9192");return}Be.push({id:Date.now()+Math.random(),time:/睡前|今晚|晚上/.test(Kt)?"23:30 - 00:15":"19:30 - 20:30",title:`\u8BED\u97F3\u6392\u671F\uFF1A${Kt}`,tag:"\u8BED\u97F3\u65B0\u589E",color:"indigo",done:!1}),Ne.push("\u5DF2\u52A0\u5165\u65E5\u7A0B")}),{...ye,schedules:Be,weekPlan:Ut,ddls:Mn,wallet:{...ye.wallet,expenses:_l}}}),Ea(""),ft(null),re(15,15,`\u8BED\u97F3\u8C03\u8BA1\u5212\u5B8C\u6210\uFF1A${Ne.join("\uFF1B")}`)},R=I=>{V(I.id),Ue(I.currentPage||0),Pe(!1),Gt(!1),W(0)},Y=(I,te,oe)=>{let Ne=Math.max(0,Math.min(oe-1,te)),ye=oe<=1?100:Math.round((Ne+1)/oe*100);Ue(Ne),Vt.current&&(Vt.current.scrollTop=0),e(Be=>({...Be,books:Be.books.map(Ut=>Ut.id===I?{...Ut,currentPage:Ne,progress:Math.max(Ut.progress||0,ye)}:Ut)}))},X=()=>{if(K&&ie>=5){let I=Math.max(1,Math.round(ie/60)),te=new Date().getHours(),oe=te>=6&&te<14?"morning":te>=14&&te<22?"evening":"night",Ne=new Date().toISOString().slice(0,10);e(ye=>({...ye,books:ye.books.map(Be=>Be.id===K?{...Be,readMins:Be.readMins+I}:Be),readingStats:{totalSeconds:ye.readingStats.totalSeconds+ie,streakDays:ye.readingStats.lastReadDate===Ne?ye.readingStats.streakDays:ye.readingStats.streakDays+1,lastReadDate:Ne,periods:{...ye.readingStats.periods,[oe]:(ye.readingStats.periods[oe]||0)+ie}}})),re(15,15,`\u672C\u6B21\u771F\u5B9E\u9605\u8BFB ${ie} \u79D2\uFF0C\u8FDB\u5EA6\u4E0E\u65F6\u957F\u5DF2\u81EA\u52A8\u4FDD\u5B58\uFF01`)}V(null),Pe(!1),Gt(!1),W(0)},fe=async I=>{let te=I.target.files?.[0];if(!te)return;Ce.title||Oe(Be=>({...Be,title:te.name.replace(/\.(txt|md|epub|pdf)$/i,"")}));let oe=await te.arrayBuffer(),Ne="";try{Ne=new TextDecoder("utf-8",{fatal:!0}).decode(oe)}catch{Ne=new TextDecoder("gb18030").decode(oe)}let ye=Ne.replace(/<[^>]+>/g,`
`).replace(/\r\n/g,`
`);Oe(Be=>({...Be,content:ye})),q(`\u5DF2\u5B8C\u6574\u5BFC\u5165\u300A${te.name}\u300B\uFF08\u5171 ${ye.length} \u5B57\uFF09\uFF0C\u652F\u6301\u81EA\u52A8\u5206\u7AE0\u4E0E\u7FFB\u9875\u9605\u8BFB\uFF01`,"success")};(0,g.useEffect)(()=>{if(!K)return;let I=t.books.find(Ne=>Ne.id===K);if(!I)return;let te=N1(I.content),oe=Ne=>{if(!(Ne.target.tagName==="INPUT"||Ne.target.tagName==="TEXTAREA")){if(Ne.key==="Escape"&&tt){St(!1),Gt(!1);return}me==="page"&&(Ne.key==="ArrowRight"||Ne.key==="PageDown"?Y(K,Le+1,te.length):(Ne.key==="ArrowLeft"||Ne.key==="PageUp")&&Y(K,Le-1,te.length))}};return window.addEventListener("keydown",oe),()=>window.removeEventListener("keydown",oe)},[K,me,Le,t.books,tt]);let ue=t.calories.meals.reduce((I,te)=>I+te.netCal,0),ce=t.calories.meals.reduce((I,te)=>I+te.leftoverCal,0),De=t.weights[t.weights.length-1]?.val||61,We=t.wallet.expenses.reduce((I,te)=>I+te.amount,0),le=Math.max(0,t.wallet.budget-We),Me=t.books.find(I=>I.id===K),Ke=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],Se=`${String(r.getHours()).padStart(2,"0")}:${String(r.getMinutes()).padStart(2,"0")}`,mt=`${String(r.getSeconds()).padStart(2,"0")}s`;return g.default.createElement("div",{className:"min-h-screen bg-slate-50 text-slate-800 pb-24 lg:pb-10 font-sans"},g.default.createElement("div",{className:"fixed top-4 right-4 left-4 sm:left-auto z-50 flex flex-col gap-2 pointer-events-none"},i.map(I=>g.default.createElement("div",{key:I.id,className:`px-4 py-3 rounded-2xl shadow-lg text-xs font-bold flex items-center gap-2 ${I.type==="warning"?"bg-amber-500 text-slate-950":I.type==="info"?"bg-slate-900 text-white":"bg-emerald-600 text-white"}`},g.default.createElement($s,{className:"w-4 h-4 shrink-0"}),g.default.createElement("span",null,I.msg)))),g.default.createElement("header",{className:"sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80"},g.default.createElement("div",{className:"max-w-7xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2"},g.default.createElement("div",{className:"flex items-center gap-2.5 min-w-0"},g.default.createElement("div",{className:"w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center shadow-sm shrink-0"},g.default.createElement(zr,{className:"w-5 h-5"})),g.default.createElement("div",{className:"min-w-0"},g.default.createElement("div",{className:"flex items-center gap-1.5"},g.default.createElement("h1",{className:"font-bold text-slate-900 text-sm sm:text-base tracking-tight truncate"},"GapYear OS \xB7 \u80E1\u79CB\u610F"),g.default.createElement("button",{onClick:()=>ft("backup"),className:"text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1 shrink-0"},g.default.createElement("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"}),g.default.createElement("span",null,"React+3D\u72EC\u7ACB\u5B58\u6863"))),g.default.createElement("p",{className:"text-[11px] text-slate-500 truncate"},"\u6B66\u79D1\u5927 $\\rightarrow$ \u5730\u5927\u9EC4\u7231\u6B66\u7EC4 \xB7 168cm/61kg \xB7 09:00\u8D77-01:30\u7761"))),g.default.createElement("nav",{className:"hidden lg:flex items-center gap-1 bg-slate-100/90 p-1 rounded-2xl"},[{id:"dashboard",label:"\u4ECA\u65E5\u603B\u89C8",icon:zr},{id:"diet",label:"\u9910\u524D\u9910\u540E",icon:js},{id:"fitness",label:"\u8BFE\u8868\u4E0E\u5065\u8EAB",icon:Hr},{id:"wallet",label:"\u6D88\u8D39\u4E0E\u5956\u52B1",icon:yl},{id:"bookshelf",label:"\u79C1\u4EBA\u4E66\u67B6",icon:kr},{id:"academic",label:"\u79D1\u7814\u4E0E3D",icon:xl}].map(I=>{let te=I.icon,oe=a===I.id;return g.default.createElement("button",{key:I.id,onClick:()=>n(I.id),className:`px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5 transition ${oe?"bg-white text-slate-900 font-semibold shadow-sm":"text-slate-600 hover:text-slate-900 font-medium"}`},g.default.createElement(te,{className:"w-3.5 h-3.5"}),g.default.createElement("span",null,I.label))})),g.default.createElement("div",{className:"flex items-center gap-2 shrink-0"},g.default.createElement("button",{onClick:()=>n("wallet"),className:"flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold"},g.default.createElement(pc,{className:"w-3.5 h-3.5 text-amber-500"}),g.default.createElement("span",null,t.coins)),g.default.createElement("button",{onClick:()=>ft("voice"),className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold shadow-sm"},g.default.createElement(Sl,{className:"w-3.5 h-3.5"}),g.default.createElement("span",{className:"hidden sm:inline"},"\u8BED\u97F3\u6392\u671F"))))),g.default.createElement("main",{className:"max-w-7xl mx-auto px-3 sm:px-6 pt-4 sm:pt-6"},a==="dashboard"&&g.default.createElement("div",{className:"space-y-5"},g.default.createElement("div",{className:"bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white rounded-3xl p-4 sm:p-5 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4"},g.default.createElement("div",{className:"flex items-center gap-3.5"},g.default.createElement("div",{className:"w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex flex-col items-center justify-center shrink-0"},g.default.createElement("span",{className:"text-lg font-extrabold tracking-tight text-amber-300"},Se),g.default.createElement("span",{className:"text-[10px] text-slate-300 font-mono"},mt)),g.default.createElement("div",null,g.default.createElement("div",{className:"flex flex-wrap items-center gap-2"},g.default.createElement("span",{className:"text-sm sm:text-base font-bold"},"2026\u5E7411\u670823\u65E5 \u661F\u671F\u4E00"),g.default.createElement("span",{className:"text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950"},"\u7B2C13\u5468 \xB7 \u9996\u65E5")),g.default.createElement("p",{className:"text-xs text-slate-300 mt-1"},"\u4ECA\u65E5 14:00-17:40\u300A\u591A\u5A92\u4F53\u8BBE\u8BA12\u300B\uFF08\u6559\u4E00\u4E8C\u533A603\uFF09\uFF0C18:10 \u4E0B\u8BFE\u987A\u8DEF\u7EC3\u80CC\u80A9\uFF01"))),g.default.createElement("div",{className:"bg-white/10 border border-white/15 rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 shrink-0"},g.default.createElement("span",{className:"text-2xl"},l.icon),g.default.createElement("div",null,g.default.createElement("div",{className:"flex items-center gap-1.5"},g.default.createElement("span",{className:"text-sm font-extrabold"},l.temp,"\xB0C"),g.default.createElement("span",{className:"text-xs text-slate-200"},l.desc)),g.default.createElement("div",{className:"text-[10px] text-slate-300 flex items-center gap-1 mt-0.5"},g.default.createElement(bc,{className:"w-3 h-3 text-rose-400"}),g.default.createElement("span",null,l.loc))))),g.default.createElement("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"},g.default.createElement("div",{className:"bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/70 shadow-sm"},g.default.createElement("div",{className:"flex items-center justify-between mb-2"},g.default.createElement("span",{className:"text-[11px] font-semibold text-slate-500"},"\u51CF\u8102\u51C0\u70ED\u91CF (168cm)"),g.default.createElement(xc,{className:"w-4 h-4 text-amber-500"})),g.default.createElement("div",{className:"flex items-baseline gap-1"},g.default.createElement("span",{className:"text-2xl font-bold text-slate-900"},ue),g.default.createElement("span",{className:"text-[11px] text-slate-400"},"/ ",t.calories.target," kcal")),g.default.createElement("div",{className:"w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden"},g.default.createElement("div",{className:"bg-amber-500 h-full rounded-full",style:{width:`${Math.min(100,ue/t.calories.target*100)}%`}})),g.default.createElement("p",{className:"text-[11px] text-emerald-600 mt-1.5 font-medium"},"\u5269\u996D\u5DF2\u6263 ",ce," kcal")),g.default.createElement("div",{className:"bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/70 shadow-sm"},g.default.createElement("div",{className:"flex items-center justify-between mb-2"},g.default.createElement("span",{className:"text-[11px] font-semibold text-slate-500"},"\u4F53\u91CD\u7BA1\u7406 (BMI 21.6)"),g.default.createElement(Tc,{className:"w-4 h-4 text-emerald-600"})),g.default.createElement("div",{className:"flex items-baseline gap-1"},g.default.createElement("span",{className:"text-2xl font-bold text-slate-900"},De.toFixed(1)),g.default.createElement("span",{className:"text-[11px] text-slate-400"},"kg $\\rightarrow$ 56.0kg")),g.default.createElement("div",{className:"mt-2 flex items-center gap-1.5"},g.default.createElement("input",{type:"number",step:"0.1",value:L,onChange:I=>P(I.target.value),placeholder:"60.8",className:"w-16 text-xs px-2 py-1 rounded-xl border border-slate-200"}),g.default.createElement("button",{onClick:()=>{let I=parseFloat(L);!I||I<35||I>120||(e(te=>({...te,weights:[...te.weights.slice(-7),{date:"\u4ECA\u65E5",val:I}]})),P(""),re(15,15,`\u4F53\u91CD ${I}kg \u5DF2\u4FDD\u5B58\uFF01`))},className:"text-[11px] px-2.5 py-1 rounded-xl bg-emerald-600 text-white font-semibold"},"\u8BB0\u5F55"))),g.default.createElement("div",{className:"bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/70 shadow-sm"},g.default.createElement("div",{className:"flex items-center justify-between mb-2"},g.default.createElement("span",{className:"text-[11px] font-semibold text-slate-500"},"\u672C\u5468 1/3/5 \u5065\u8EAB\u6392\u671F"),g.default.createElement(Hr,{className:"w-4 h-4 text-rose-600"})),g.default.createElement("div",{className:"text-sm sm:text-base font-bold text-slate-900"},"18:10 \u4E0B\u8BFE\u987A\u8DEF\u7EC3"),g.default.createElement("p",{className:"text-[11px] text-slate-500 mt-1"},"\u907F\u5F00 14:00-17:40 \u4E0B\u5348\u8FDE\u5802\u8BFE"),g.default.createElement("button",{onClick:()=>n("fitness"),className:"mt-2 text-[11px] font-semibold text-rose-600 hover:underline"},"\u67E5\u770B\u5468\u8BFE\u8868\u4E0E\u8DDF\u7EC3 $\\rightarrow$")),g.default.createElement("div",{className:"bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/70 shadow-sm"},g.default.createElement("div",{className:"flex items-center justify-between mb-2"},g.default.createElement("span",{className:"text-[11px] font-semibold text-slate-500"},"\u672C\u6708\u7701\u94B1\u8BA1\u5212\u7ED3\u4F59"),g.default.createElement(Ac,{className:"w-4 h-4 text-purple-600"})),g.default.createElement("div",{className:"flex items-baseline gap-1"},g.default.createElement("span",{className:"text-2xl font-bold text-slate-900"},"\xA5",Math.round(We)),g.default.createElement("span",{className:"text-[11px] text-slate-400"},"/ \u9884\u7B97 \xA5",t.wallet.budget)),g.default.createElement("button",{onClick:()=>n("wallet"),className:"mt-2 text-[11px] font-semibold text-purple-600 hover:underline"},"\u8BB0\u4E00\u7B14 / \u5151\u6362\u5956\u52B1 $\\rightarrow$"))),g.default.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-5"},g.default.createElement("div",{className:"lg:col-span-2 bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/70 shadow-sm"},g.default.createElement("div",{className:"flex items-center justify-between mb-4"},g.default.createElement("div",null,g.default.createElement("h2",{className:"text-base sm:text-lg font-bold text-slate-900"},"\u7B2C13\u5468\u8054\u52A8\u65E5\u7A0B\u65F6\u95F4\u8F74"),g.default.createElement("p",{className:"text-xs text-slate-500 mt-0.5"},"\u9002\u914D 09:00\u8D77 - 01:30\u7761\u4F5C\u606F\u4E0E\u8FDE\u5802\u8BFE\u7A0B\u65F6\u6BB5")),g.default.createElement("button",{onClick:()=>ft("voice"),className:"text-xs px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 font-semibold flex items-center gap-1"},g.default.createElement(Sl,{className:"w-3.5 h-3.5"}),"\u8BED\u97F3\u8C03\u8BA1\u5212")),g.default.createElement("div",{className:"space-y-2.5"},t.schedules.map(I=>g.default.createElement("div",{key:I.id,onClick:()=>{e(te=>({...te,schedules:te.schedules.map(oe=>oe.id===I.id?{...oe,done:!oe.done}:oe)})),I.done||re(15,15,`\u5B8C\u6210\u300C${I.title}\u300D\uFF01`)},className:`p-3 rounded-2xl border flex items-center justify-between gap-2.5 cursor-pointer transition ${I.done?"bg-slate-50/70 border-slate-200/60 opacity-70":"bg-white border-slate-200 hover:border-blue-300"}`},g.default.createElement("div",{className:"flex items-center gap-2.5 min-w-0"},g.default.createElement("div",{className:`w-5 h-5 rounded-lg border-2 flex items-center justify-center shrink-0 ${I.done?"bg-emerald-500 border-emerald-500 text-white":"border-slate-300"}`},I.done&&g.default.createElement(vl,{className:"w-3 h-3"})),g.default.createElement("div",{className:"min-w-0"},g.default.createElement("div",{className:"text-[11px] font-semibold text-slate-400"},I.time),g.default.createElement("div",{className:`text-xs sm:text-sm font-bold truncate ${I.done?"line-through text-slate-400":"text-slate-800"}`},I.title))),g.default.createElement("span",{className:"px-2 py-0.5 rounded-lg text-[10px] font-bold bg-slate-100 text-slate-700 shrink-0"},I.tag))))),g.default.createElement("div",{className:"space-y-5"},g.default.createElement("div",{className:"bg-gradient-to-br from-amber-50 via-orange-50/70 to-yellow-50/60 rounded-3xl p-5 border border-amber-200/80 shadow-sm"},g.default.createElement("div",{className:"flex items-center justify-between mb-3"},g.default.createElement("span",{className:"text-xs font-bold text-amber-800 bg-amber-100/90 px-2.5 py-1 rounded-xl"},"\u966A\u4F34\u6FC0\u52B1\u5BA0\u7269"),g.default.createElement("div",{className:"flex items-center gap-1 bg-white/80 p-1 rounded-xl border border-amber-200/70"},[{id:"trilobite",name:"\u4E09\u53F6\u866B\xB7\u56E2\u5B50",emoji:"\u{1FAB2}"},{id:"ammonite",name:"\u83CA\u77F3\xB7\u87BA\u87BA",emoji:"\u{1F41A}"},{id:"star",name:"\u661F\u661F\xB7\u5CA9\u7075",emoji:"\u2B50"}].map(I=>g.default.createElement("button",{key:I.id,onClick:()=>e(te=>({...te,pet:{...te.pet,species:I.id,name:I.name,emoji:I.emoji}})),className:"w-6 h-6 rounded-lg text-sm hover:bg-amber-100"},I.emoji)))),g.default.createElement("div",{className:"flex items-center gap-4"},g.default.createElement("div",{className:"w-20 h-20 rounded-3xl bg-white shadow-sm border-2 border-amber-200 flex items-center justify-center text-4xl shrink-0"},t.pet.emoji),g.default.createElement("div",{className:"flex-1 min-w-0"},g.default.createElement("div",{className:"flex items-center gap-2 flex-wrap"},g.default.createElement("h3",{className:"font-bold text-slate-900 text-base"},t.pet.name),g.default.createElement("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500 text-white"},"Lv.",t.pet.level)),g.default.createElement("div",{className:"mt-2"},g.default.createElement("div",{className:"flex justify-between text-[10px] font-semibold text-amber-800 mb-0.5"},g.default.createElement("span",null,"\u6210\u957F\u7ECF\u9A8C"),g.default.createElement("span",null,t.pet.exp," / ",t.pet.maxExp," EXP")),g.default.createElement("div",{className:"w-full bg-amber-200/70 h-1.5 rounded-full overflow-hidden"},g.default.createElement("div",{className:"bg-amber-500 h-full rounded-full",style:{width:`${Math.min(100,t.pet.exp/t.pet.maxExp*100)}%`}}))))),g.default.createElement("div",{className:"grid grid-cols-3 gap-2 mt-4"},g.default.createElement("button",{onClick:()=>q("\u201C168cm/61kg \u5DF2\u7ECF\u662F\u8D85\u68D2\u7684\u5E95\u5B50\u5566\uFF0118:10 \u4E0B\u8BFE\u540E\u51B2\u5440\uFF01\u201D","success"),className:"py-2 rounded-xl bg-white hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold flex items-center justify-center gap-1"},g.default.createElement(_c,{className:"w-3.5 h-3.5 text-rose-500"}),"\u6C42\u5938\u5938"),g.default.createElement("button",{onClick:()=>{if(t.pet.food<=0)return q("\u77FF\u77F3\u4E0D\u8DB3\uFF0C\u5B8C\u6210\u6253\u5361\u6389\u843D\u54E6\uFF01","warning");re(5,45,`\u6295\u5582\u77FF\u77F3\u6210\u529F\uFF01${t.pet.name} +45 EXP`,-1)},className:"py-2 rounded-xl bg-amber-500 text-white text-xs font-bold"},"\u5582\u77FF\u77F3(",t.pet.food,")"),g.default.createElement("button",{onClick:()=>re(10,10,"\u9886\u53D6\u6BCF\u65E5\u966A\u4F34\u793C\u5305\uFF1A+10\u91D1\u5E01 & +1\u77FF\u77F3\uFF01",1),className:"py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-1"},g.default.createElement(Sc,{className:"w-3.5 h-3.5"}),"\u9886\u793C\u5305"))),g.default.createElement("div",{className:"bg-white rounded-3xl p-5 border border-slate-200/70 shadow-sm"},g.default.createElement("div",{className:"flex items-center justify-between mb-3"},g.default.createElement("h3",{className:"font-bold text-slate-900 text-sm flex items-center gap-1.5"},g.default.createElement(fc,{className:"w-4 h-4 text-rose-500"}),g.default.createElement("span",null,"\u8BFE\u4E1A\u4E0E\u6BD5\u8BBE\u5F3A\u63D0\u9192")),g.default.createElement("button",{onClick:()=>ft("ddl"),className:"text-xs px-2.5 py-1 rounded-xl bg-slate-100 font-semibold"},"+ \u65B0\u589E")),g.default.createElement("div",{className:"space-y-2"},t.ddls.map(I=>g.default.createElement("div",{key:I.id,className:"p-2.5 rounded-2xl bg-rose-50/70 border border-rose-200 flex items-center justify-between gap-2"},g.default.createElement("div",{className:"min-w-0"},g.default.createElement("div",{className:"text-xs font-bold text-rose-900 truncate"},I.title),g.default.createElement("div",{className:"text-[10px] text-rose-600 mt-0.5"},I.due)),g.default.createElement("button",{onClick:()=>{e(te=>({...te,ddls:te.ddls.filter(oe=>oe.id!==I.id)})),re(20,20,"\u641E\u5B9A\u4E00\u9879\u63D0\u9192\uFF01\u5956\u52B1 +20 \u91D1\u5E01\uFF01")},className:"p-1.5 rounded-lg bg-white border border-slate-200 text-emerald-600"},g.default.createElement(vl,{className:"w-3.5 h-3.5"}))))))))),a==="diet"&&g.default.createElement("div",{className:"space-y-5"},g.default.createElement("div",{className:"bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/70 shadow-sm"},g.default.createElement("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-5"},g.default.createElement("div",null,g.default.createElement("h2",{className:"text-lg font-bold text-slate-900"},"\u9910\u524D\u9910\u540E\u53CC\u56FE\u70ED\u91CF\u5DEE\u503C\u8BC6\u522B\uFF08168cm/61kg \u7CBE\u51C6\u51CF\u8102\uFF09"),g.default.createElement("p",{className:"text-xs text-slate-500"},"\u9910\u524D\u62CD\u4E00\u5F20\u4F30\u7B97\u603B\u70ED\u91CF\uFF0C\u9910\u540E\u62CD\u4E00\u5F20\u6263\u9664\u5269\u996D\u70ED\u91CF")),g.default.createElement("span",{className:"px-3 py-1 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-bold"},"\u4ECA\u65E5\u5269\u996D\u5DF2\u6263\u9664 ",ce," kcal")),g.default.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-5"},g.default.createElement("div",{className:"bg-slate-50 rounded-3xl p-4 border border-slate-200/80 space-y-3"},g.default.createElement("div",{className:"flex justify-between text-xs font-bold"},g.default.createElement("span",null,"STEP 1 \xB7 \u9910\u524D\u62CD\u7167"),g.default.createElement("span",{className:"text-amber-700"},x," kcal")),g.default.createElement("label",{className:"block h-40 rounded-2xl border-2 border-dashed border-slate-300 bg-white overflow-hidden cursor-pointer"},f?g.default.createElement("img",{src:f,alt:"\u9910\u524D",className:"w-full h-full object-cover"}):g.default.createElement("div",{className:"w-full h-full flex flex-col items-center justify-center text-slate-400 text-xs"},g.default.createElement(js,{className:"w-6 h-6 mb-1"}),"\u70B9\u51FB\u62CD\u6444/\u4E0A\u4F20\u9910\u524D\u7167\u7247"),g.default.createElement("input",{type:"file",accept:"image/*",className:"hidden",onChange:I=>he(I,"pre")})),g.default.createElement("input",{type:"text",value:S,onChange:I=>M(I.target.value),className:"w-full text-xs px-3 py-2 rounded-xl border border-slate-200 bg-white"}),g.default.createElement("div",{className:"flex items-center justify-between text-xs"},g.default.createElement("span",null,"\u9910\u524D\u70ED\u91CF (kcal):"),g.default.createElement("input",{type:"number",value:x,onChange:I=>{let te=Number(I.target.value)||0;d(te),A(Math.round(te*(m/100)))},className:"w-24 font-bold text-right px-2.5 py-1.5 rounded-xl border border-slate-200 bg-white"}))),g.default.createElement("div",{className:"bg-slate-50 rounded-3xl p-4 border border-slate-200/80 space-y-3"},g.default.createElement("div",{className:"flex justify-between text-xs font-bold"},g.default.createElement("span",null,"STEP 2 \xB7 \u9910\u540E\u6B8B\u4F59\u5BF9\u6BD4"),g.default.createElement("span",{className:"text-emerald-700"},"-",_," kcal")),g.default.createElement("label",{className:"block h-40 rounded-2xl border-2 border-dashed border-slate-300 bg-white overflow-hidden cursor-pointer"},c?g.default.createElement("img",{src:c,alt:"\u9910\u540E",className:"w-full h-full object-cover"}):g.default.createElement("div",{className:"w-full h-full flex flex-col items-center justify-center text-slate-400 text-xs"},g.default.createElement(js,{className:"w-6 h-6 mb-1"}),"\u70B9\u51FB\u62CD\u6444/\u4E0A\u4F20\u9910\u540E\u9910\u76D8"),g.default.createElement("input",{type:"file",accept:"image/*",className:"hidden",onChange:I=>he(I,"post")})),g.default.createElement("div",{className:"flex items-center gap-2 text-xs"},g.default.createElement("span",null,"\u5269\u4F59\u6BD4\u4F8B:"),g.default.createElement("input",{type:"range",min:"0",max:"80",value:m,onChange:I=>{let te=Number(I.target.value);y(te),A(Math.round(x*(te/100)))},className:"flex-1 accent-emerald-600"}),g.default.createElement("span",{className:"font-bold text-emerald-700"},m,"%")),g.default.createElement("div",{className:"flex items-center justify-between text-xs"},g.default.createElement("span",null,"\u6263\u9664\u70ED\u91CF (kcal):"),g.default.createElement("input",{type:"number",value:_,onChange:I=>A(Number(I.target.value)||0),className:"w-24 font-bold text-right px-2.5 py-1.5 rounded-xl border border-slate-200 bg-white text-emerald-700"}))),g.default.createElement("div",{className:"bg-slate-900 text-white rounded-3xl p-5 flex flex-col justify-between"},g.default.createElement("div",null,g.default.createElement("span",{className:"text-xs font-bold text-amber-400"},"STEP 3 \xB7 \u51C0\u6444\u5165\u7ED3\u7B97"),g.default.createElement("div",{className:"mt-3 flex items-baseline gap-2"},g.default.createElement("span",{className:"text-4xl font-extrabold"},Math.max(0,x-_)),g.default.createElement("span",{className:"text-xs text-slate-300"},"kcal \u5B9E\u9645\u6444\u5165")),g.default.createElement("p",{className:"text-xs text-slate-300 mt-3 bg-white/10 p-3 rounded-2xl"},"\u6263\u9664\u5269\u996D\u70ED\u91CF\u540E\u5199\u5165\u8D26\u672C\uFF0C\u6BCF\u6B21\u8BB0\u5F55\u81EA\u52A8\u5956\u52B1 ",g.default.createElement("strong",null,"+20 \u81EA\u5F8B\u91D1\u5E01"),"\uFF01")),g.default.createElement("div",{className:"mt-4 space-y-2"},g.default.createElement("select",{value:w,onChange:I=>v(I.target.value),className:"w-full text-xs bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white"},g.default.createElement("option",{value:"\u5348\u9910 (12:30)",className:"text-slate-900"},"\u5348\u9910 (12:30)"),g.default.createElement("option",{value:"\u665A\u9910 (18:30)",className:"text-slate-900"},"\u665A\u9910 (18:30)"),g.default.createElement("option",{value:"\u65E9\u5348\u9910 (09:30)",className:"text-slate-900"},"\u65E9\u5348\u9910 (09:30)")),g.default.createElement("button",{onClick:Q,className:"w-full py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs"},"\u5199\u5165\u70ED\u91CF\u8D26\u672C (+20\u91D1\u5E01)"))))),g.default.createElement("div",{className:"bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/70 shadow-sm"},g.default.createElement("div",{className:"flex items-center justify-between mb-4"},g.default.createElement("div",null,g.default.createElement("h3",{className:"text-base font-bold text-slate-900"},"\u4ECA\u65E5\u996E\u98DF\u70ED\u91CF\u660E\u7EC6\uFF08\u8BB0\u9519\u4E86\u53EF\u968F\u65F6\u4FEE\u6539\u6216\u5220\u9664\uFF09"),g.default.createElement("p",{className:"text-xs text-slate-500 mt-0.5"},"\u5F53\u524D\u7D2F\u8BA1\u51C0\u6444\u5165 ",g.default.createElement("strong",{className:"text-slate-800"},ue," kcal")," / \u76EE\u6807 ",t.calories.target," kcal\uFF08\u5269\u4F59 ",Math.max(0,t.calories.target-ue)," kcal\uFF09"))),t.calories.meals.length===0?g.default.createElement("div",{className:"text-center py-8 text-xs text-slate-400 bg-slate-50 rounded-2xl border border-dashed border-slate-200"},"\u4ECA\u65E5\u6682\u672A\u8BB0\u5F55\u4EFB\u4F55\u996E\u98DF\uFF0C\u4E0A\u65B9\u7ED3\u7B97\u540E\u4F1A\u81EA\u52A8\u51FA\u73B0\u5728\u8FD9\u91CC~"):g.default.createElement("div",{className:"space-y-2.5"},t.calories.meals.map(I=>g.default.createElement("div",{key:I.id,className:"p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3"},g.default.createElement("div",{className:"min-w-0 flex-1"},g.default.createElement("div",{className:"flex items-center gap-2"},g.default.createElement("span",{className:"text-xs font-bold text-slate-900"},I.type),g.default.createElement("span",{className:"text-[11px] text-slate-400"},I.time)),g.default.createElement("div",{className:"text-xs text-slate-600 truncate mt-0.5"},I.desc||"\u672A\u586B\u5199\u9910\u98DF\u63CF\u8FF0")),g.default.createElement("div",{className:"flex items-center gap-3 shrink-0"},g.default.createElement("div",{className:"text-right"},g.default.createElement("div",{className:"text-sm font-extrabold text-slate-900"},I.netCal," kcal"),g.default.createElement("div",{className:"text-[10px] text-emerald-600"},"\u9910\u524D ",I.preCal," - \u5269 ",I.leftoverCal)),g.default.createElement("button",{onClick:()=>{se({id:I.id,type:I.type,desc:I.desc||"",preCal:I.preCal,leftoverCal:I.leftoverCal}),ft("editMeal")},className:"px-2.5 py-1.5 rounded-xl bg-white hover:bg-amber-50 text-amber-700 border border-slate-200 hover:border-amber-300 text-xs font-bold flex items-center gap-1 transition"},g.default.createElement(Cc,{className:"w-3 h-3"}),"\u4FEE\u6539"),g.default.createElement("button",{onClick:()=>{e(te=>({...te,calories:{...te.calories,meals:te.calories.meals.filter(oe=>oe.id!==I.id)}})),q("\u5DF2\u5220\u9664\u8BE5\u6761\u996E\u98DF\u8BB0\u5F55\uFF0C\u4ECA\u65E5\u603B\u70ED\u91CF\u5DF2\u540C\u6B65\u91CD\u7B97","info")},className:"p-1.5 rounded-xl bg-white hover:bg-rose-50 text-slate-400 hover:text-rose-600 border border-slate-200 hover:border-rose-200 transition",title:"\u5220\u9664\u8BB0\u5F55"},g.default.createElement(as,{className:"w-3.5 h-3.5"})))))))),a==="fitness"&&g.default.createElement("div",{className:"bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/70 shadow-sm space-y-4"},g.default.createElement("div",{className:"flex flex-wrap items-center justify-between gap-3"},g.default.createElement("div",null,g.default.createElement("h2",{className:"text-lg font-bold text-slate-900"},"\u6BCF\u5468\u8BFE\u8868\u540C\u6B65 (202319203061) & 1/3/5 \u5065\u8EAB\u8054\u52A8"),g.default.createElement("p",{className:"text-xs text-slate-500"},"\u4E0A\u5348 08:20-12:00 / \u4E0B\u5348 14:00-17:40 \u8FDE\u5802\u5236\uFF0C\u4E0B\u8BFE\u540E 18:10 \u987A\u8DEF\u51CF\u8102")),g.default.createElement("select",{value:E,onChange:I=>j(I.target.value),className:"text-xs px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 font-semibold"},g.default.createElement("option",{value:"week13"},"\u7B2C13\u5468 (11.23\u5468\u4E00\u8D77 \xB7 \u591A\u5A92\u4F53\u8BBE\u8BA12 + \u6BD5\u8BBE)"),g.default.createElement("option",{value:"week14_15"},"\u7B2C14-15\u5468 (\u5B66\u79D1\u7EFC\u5408\u8BBE\u8BA1\u4E8C + \u591A\u5A92\u4F53\u8BBE\u8BA12)"),g.default.createElement("option",{value:"week16_19"},"\u7B2C16-19\u5468 (\u516C\u5171\u7A7A\u95F4\u8425\u9020 \xB7 \u88F4\u78CA)"))),g.default.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3"},t.weekPlan.map((I,te)=>g.default.createElement("div",{key:I.day,className:`p-3.5 rounded-2xl border flex flex-col justify-between ${I.isWorkout?"bg-rose-50/50 border-rose-200":"bg-slate-50/70 border-slate-200/70"}`},g.default.createElement("div",null,g.default.createElement("div",{className:"flex items-center justify-between mb-2"},g.default.createElement("span",{className:"font-bold text-sm text-slate-900"},I.day),g.default.createElement("span",{className:`px-2 py-0.5 rounded-lg text-[10px] font-bold ${I.isWorkout?"bg-rose-500 text-white":"bg-slate-200 text-slate-600"}`},I.isWorkout?"\u8BAD\u7EC3\u65E5":"\u81EA\u7531")),g.default.createElement("div",{className:"space-y-1 mb-2.5"},I.classes.length?I.classes.map((oe,Ne)=>g.default.createElement("div",{key:Ne,className:"text-[11px] bg-white px-2 py-1 rounded-lg border border-slate-200 text-slate-700"},g.default.createElement(yc,{className:"w-3 h-3 inline mr-1 text-blue-500"}),oe)):g.default.createElement("div",{className:"text-[11px] text-emerald-600 font-medium"},"\u5168\u5929\u65E0\u8BFE"))),g.default.createElement("div",{className:"pt-2 border-t border-slate-200/60"},g.default.createElement("div",{className:`text-xs font-bold mb-2 ${I.isWorkout?"text-rose-700":"text-slate-600"}`},I.workout),g.default.createElement("button",{onClick:()=>{let oe=t.weekPlan.map((Ne,ye)=>ye===te?{...Ne,done:!Ne.done}:Ne);e(Ne=>({...Ne,weekPlan:oe})),I.done||re(35,30,`\u5B8C\u6210${I.day}\u8BAD\u7EC3\u6253\u5361\uFF01+35\u91D1\u5E01 & +1\u77FF\u77F3`,1)},className:`w-full py-1.5 rounded-xl text-[11px] font-bold ${I.done?"bg-emerald-600 text-white":"bg-white border border-slate-200 text-slate-700"}`},I.done?"\u5DF2\u6253\u5361 (+35\u91D1\u5E01)":"\u5B8C\u6210\u6253\u5361")))))),a==="wallet"&&g.default.createElement("div",{className:"space-y-5"},g.default.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4"},g.default.createElement("div",{className:"bg-white p-5 rounded-3xl border border-slate-200/70 shadow-sm"},g.default.createElement("div",{className:"flex justify-between text-xs text-slate-500 mb-1"},g.default.createElement("span",null,"\u672C\u6708\u652F\u51FA / \u9884\u7B97"),g.default.createElement("button",{onClick:()=>ft("budget"),className:"text-purple-600 font-semibold hover:underline"},"\u4FEE\u6539\u9884\u7B97")),g.default.createElement("div",{className:"text-2xl font-extrabold text-slate-900"},"\xA5",We.toFixed(1)," ",g.default.createElement("span",{className:"text-xs font-normal text-slate-400"},"/ \xA5",t.wallet.budget)),g.default.createElement("div",{className:"w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden"},g.default.createElement("div",{className:"bg-purple-600 h-full rounded-full",style:{width:`${Math.min(100,We/t.wallet.budget*100)}%`}}))),g.default.createElement("div",{className:"bg-emerald-50/70 p-5 rounded-3xl border border-emerald-200/80"},g.default.createElement("div",{className:"text-xs text-emerald-800 font-semibold mb-1"},"\u672C\u6708\u7701\u94B1\u51C0\u7ED3\u4F59"),g.default.createElement("div",{className:"text-2xl font-extrabold text-emerald-700"},"\xA5",le.toFixed(1)),g.default.createElement("button",{onClick:()=>re(30,20,"\u5FCD\u4F4F\u51B2\u52A8\u6D88\u8D39\uFF01\u5956\u52B1 +30 \u81EA\u5F8B\u91D1\u5E01\uFF01"),className:"mt-3 w-full py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold"},"+ \u6211\u5FCD\u4F4F\u6CA1\u4E70\u5976\u8336/\u76F2\u76D2 (+30\u91D1\u5E01)")),g.default.createElement("div",{className:"bg-gradient-to-br from-amber-500 to-orange-500 text-white p-5 rounded-3xl shadow-sm"},g.default.createElement("div",{className:"flex justify-between text-xs text-amber-100 mb-1"},g.default.createElement("span",null,"\u6211\u7684\u81EA\u5F8B\u5956\u52B1\u91D1\u5E93"),g.default.createElement(Ec,{className:"w-4 h-4"})),g.default.createElement("div",{className:"text-3xl font-extrabold"},t.coins," ",g.default.createElement("span",{className:"text-xs font-normal"},"\u91D1\u5E01")),g.default.createElement("p",{className:"text-[11px] text-amber-50 mt-2"},"\u8FBE\u6807\u5C31\u7406\u76F4\u6C14\u58EE\u5151\u6362\u4E0B\u9762\u7684\u81EA\u6211\u5956\u52B1\uFF01"))),g.default.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-5"},g.default.createElement("div",{className:"bg-white rounded-3xl p-5 border border-slate-200/70 shadow-sm"},g.default.createElement("div",{className:"flex items-center justify-between mb-4"},g.default.createElement("h3",{className:"font-bold text-slate-900"},"\u6D88\u8D39\u6D41\u6C34\u660E\u7EC6"),g.default.createElement("button",{onClick:()=>ft("expense"),className:"text-xs px-3 py-1.5 rounded-xl bg-purple-600 text-white font-bold"},"+ \u8BB0\u4E00\u7B14")),g.default.createElement("div",{className:"space-y-2 max-h-72 overflow-y-auto"},t.wallet.expenses.map(I=>g.default.createElement("div",{key:I.id,className:"p-3 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center justify-between text-xs"},g.default.createElement("div",null,g.default.createElement("div",{className:"font-bold text-slate-800"},I.title),g.default.createElement("div",{className:"text-[10px] text-slate-400"},I.category," \xB7 ",I.date)),g.default.createElement("div",{className:"font-extrabold text-slate-900"},"-\xA5",I.amount.toFixed(1)))))),g.default.createElement("div",{className:"bg-white rounded-3xl p-5 border border-slate-200/70 shadow-sm"},g.default.createElement("div",{className:"flex items-center justify-between mb-4"},g.default.createElement("h3",{className:"font-bold text-slate-900"},"\u81EA\u6211\u5956\u52B1\u5151\u6362\u5546\u5E97"),g.default.createElement("button",{onClick:()=>ft("reward"),className:"text-xs px-3 py-1.5 rounded-xl bg-amber-100 text-amber-900 font-bold"},"+ \u81EA\u5B9A\u4E49\u5956\u52B1")),g.default.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3"},t.wallet.rewards.map(I=>g.default.createElement("div",{key:I.id,className:"p-3.5 rounded-2xl border border-amber-200 bg-amber-50/50 flex flex-col justify-between"},g.default.createElement("div",null,g.default.createElement("div",{className:"flex justify-between items-center mb-1"},g.default.createElement("span",{className:"text-2xl"},I.icon),g.default.createElement("span",{className:"text-[10px] text-slate-400"},"\u5DF2\u5151 ",I.redeemed," \u6B21")),g.default.createElement("div",{className:"text-xs font-bold text-slate-900"},I.title)),g.default.createElement("button",{onClick:()=>{if(t.coins<I.cost)return q(`\u91D1\u5E01\u8FD8\u5DEE ${I.cost-t.coins} \u679A\u54E6\uFF01`,"warning");e(te=>({...te,coins:te.coins-I.cost,wallet:{...te.wallet,rewards:te.wallet.rewards.map(oe=>oe.id===I.id?{...oe,redeemed:oe.redeemed+1}:oe)}})),q(`\u{1F389} \u6210\u529F\u5151\u6362\u300C${I.title}\u300D\uFF01`,"success")},className:"mt-3 w-full py-1.5 rounded-xl bg-amber-500 text-white text-xs font-bold"},I.cost," \u91D1\u5E01\u5151\u6362"))))))),a==="bookshelf"&&g.default.createElement("div",{className:"space-y-5"},g.default.createElement("div",{className:"bg-white rounded-3xl p-5 border border-slate-200/70 shadow-sm flex flex-wrap items-center justify-between gap-4"},g.default.createElement("div",null,g.default.createElement("span",{className:"text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-xl"},"\u771F\u5B9E\u9605\u8BFB\u65F6\u957F\u7EDF\u8BA1\uFF08\u5DF2\u6E05\u96F6\u865A\u6784\u6570\u636E\uFF09"),g.default.createElement("div",{className:"mt-2 flex items-baseline gap-4"},g.default.createElement("div",{className:"text-2xl font-extrabold text-slate-900"},(t.readingStats.totalSeconds/3600).toFixed(1)," ",g.default.createElement("span",{className:"text-xs font-normal text-slate-500"},"\u5C0F\u65F6")),g.default.createElement("div",{className:"text-sm font-bold text-emerald-600"},"\u8FDE\u7EED\u6253\u5361 ",t.readingStats.streakDays," \u5929"))),g.default.createElement("div",{className:"flex items-center gap-2"},g.default.createElement("div",{className:"relative"},g.default.createElement(Ic,{className:"w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400"}),g.default.createElement("input",{type:"text",value:N,onChange:I=>Z(I.target.value),placeholder:"\u641C\u7D22\u6216\u65B0\u5EFA\u4E66\u76EE...",className:"pl-8 pr-3 py-2 rounded-xl border border-slate-200 text-xs w-44"})),g.default.createElement("button",{onClick:()=>ft("addBook"),className:"px-3.5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold flex items-center gap-1"},g.default.createElement(wc,{className:"w-3.5 h-3.5"}),"\u5F55\u5165\u65B0\u4E66"))),g.default.createElement("div",{className:"bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/70 shadow-sm"},g.default.createElement("div",{className:"flex items-center gap-2 overflow-x-auto pb-3 mb-4 border-b border-slate-100"},g.default.createElement("button",{onClick:()=>J("all"),className:`px-3 py-1.5 rounded-xl text-xs whitespace-nowrap ${H==="all"?"bg-indigo-600 text-white font-semibold":"bg-slate-100 text-slate-600"}`},"\u5168\u90E8\u85CF\u4E66 (",t.books.length,")"),t.bookCategories.map(I=>g.default.createElement("div",{key:I,className:`inline-flex items-center rounded-xl overflow-hidden shrink-0 ${H===I?"bg-indigo-600 text-white":"bg-slate-100 text-slate-700"}`},g.default.createElement("button",{onClick:()=>J(I),className:"px-3 py-1.5 text-xs font-medium"},I),g.default.createElement("button",{onClick:()=>{e(te=>({...te,bookCategories:te.bookCategories.filter(oe=>oe!==I),books:te.books.map(oe=>oe.category===I?{...oe,category:"\u672A\u5206\u7C7B"}:oe)})),H===I&&J("all"),q(`\u5DF2\u5220\u9664\u5206\u7C7B\u300C${I}\u300D`,"info")},className:"pr-2 pl-1 py-1.5 text-[10px] opacity-60 hover:opacity-100"},g.default.createElement(Gr,{className:"w-3 h-3"})))),g.default.createElement("button",{onClick:()=>ft("newCat"),className:"px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 flex items-center gap-1 shrink-0"},g.default.createElement(vc,{className:"w-3.5 h-3.5"}),"\u65B0\u5EFA\u5206\u7C7B")),g.default.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"},t.books.filter(I=>(H==="all"||I.category===H)&&(I.title.toLowerCase().includes(N.toLowerCase())||I.author.toLowerCase().includes(N.toLowerCase()))).map(I=>g.default.createElement("div",{key:I.id,onClick:()=>R(I),className:"bg-slate-50 hover:bg-white rounded-3xl p-4 border border-slate-200/80 hover:border-indigo-300 transition cursor-pointer flex flex-col justify-between"},g.default.createElement("div",null,g.default.createElement("div",{className:`h-32 rounded-2xl bg-gradient-to-br ${I.coverBg} p-3.5 text-white flex flex-col justify-between shadow-sm`},g.default.createElement("div",{className:"flex items-center justify-between"},g.default.createElement("span",{className:"text-[10px] font-bold bg-black/25 px-2 py-0.5 rounded-lg"},I.category),g.default.createElement("button",{onClick:te=>{te.stopPropagation(),e(oe=>({...oe,books:oe.books.filter(Ne=>Ne.id!==I.id)})),q(`\u5DF2\u5220\u9664\u300A${I.title}\u300B`,"info")},className:"w-6 h-6 rounded-lg bg-black/25 hover:bg-rose-600 flex items-center justify-center"},g.default.createElement(as,{className:"w-3 h-3"}))),g.default.createElement("h4",{className:"font-bold text-xs sm:text-sm line-clamp-2"},I.title)),g.default.createElement("div",{className:"mt-2.5 text-[11px] text-slate-500"},g.default.createElement("div",null,I.author),g.default.createElement("div",{className:"flex justify-between mt-1.5"},g.default.createElement("span",null,"\u5DF2\u8BFB ",I.readMins,"m"),g.default.createElement("span",{className:"font-bold text-indigo-600"},I.progress,"%")),g.default.createElement("div",{className:"w-full bg-slate-200 h-1.5 rounded-full mt-1 overflow-hidden"},g.default.createElement("div",{className:"bg-indigo-600 h-full rounded-full",style:{width:`${I.progress}%`}})))),g.default.createElement("div",{className:"mt-2.5 pt-2 border-t border-slate-200/60 text-xs font-bold text-indigo-600"},"\u6253\u5F00\u5185\u7F6E\u5168\u5C4F\u9605\u8BFB\u5668 $\\rightarrow$")))))),a==="academic"&&g.default.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-5"},g.default.createElement("div",{className:"lg:col-span-2 space-y-5"},g.default.createElement("div",{className:"bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/70 shadow-sm"},g.default.createElement("h2",{className:"text-lg font-bold text-slate-900 mb-4"},"\u591A\u7EBF\u5B66\u4E60\u6253\u5361\uFF08\u96C5\u601D / \u65E5\u8BED / \u5730\u5927\u9EC4\u7231\u6B66\u8001\u5E08\u65B9\u5411\uFF09"),g.default.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3.5"},[{title:"\u96C5\u601D\u82F1\u8BED IELTS",desc:"\u6838\u5FC3\u8BCD 50 \u4E2A + \u771F\u9898\u7CBE\u542C",coins:25,bg:"bg-sky-50 border-sky-200 text-sky-800",btn:"bg-sky-600"},{title:"\u65E5\u8BED\u8FDB\u9636 Japanese",desc:"\u65B0\u6807\u65E5 1 \u8BFE + \u751F\u8089\u8DDF\u8BFB",coins:25,bg:"bg-rose-50 border-rose-200 text-rose-800",btn:"bg-rose-600"},{title:"\u5730\u5927\u9884\u7814 & \u53E4\u751F\u7269",desc:"\u5DE5\u7A0B\u5730\u8D28\u6587\u732E + \u79D1\u666E\u7B14\u8BB0",coins:35,bg:"bg-emerald-50 border-emerald-200 text-emerald-800",btn:"bg-emerald-600"}].map(I=>g.default.createElement("div",{key:I.title,className:`p-4 rounded-2xl border ${I.bg}`},g.default.createElement("div",{className:"text-xs font-bold mb-1"},I.title),g.default.createElement("p",{className:"text-xs text-slate-600 mb-3"},I.desc),g.default.createElement("button",{onClick:()=>re(I.coins,I.coins,`\u5B8C\u6210\u300C${I.title}\u300D\u6253\u5361\uFF01+${I.coins}\u91D1\u5E01`,1),className:`w-full py-2 rounded-xl ${I.btn} text-white text-xs font-bold`},"\u6253\u5361 (+",I.coins,"\u91D1\u5E01)")))))),g.default.createElement(HD,null))),g.default.createElement("nav",{className:"lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 px-1 py-1.5 flex items-center justify-around"},[{id:"dashboard",label:"\u603B\u89C8",icon:zr},{id:"diet",label:"\u996E\u98DF",icon:js},{id:"fitness",label:"\u8BFE\u8868\u5065\u8EAB",icon:Hr},{id:"wallet",label:"\u7701\u94B1\u5956\u52B1",icon:yl},{id:"bookshelf",label:"\u4E66\u67B6",icon:kr},{id:"academic",label:"\u79D1\u78143D",icon:xl}].map(I=>{let te=I.icon,oe=a===I.id;return g.default.createElement("button",{key:I.id,onClick:()=>n(I.id),className:`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl ${oe?"text-blue-600 font-bold":"text-slate-500"}`},g.default.createElement(te,{className:"w-4 h-4"}),g.default.createElement("span",{className:"text-[10px]"},I.label))})),Ze&&g.default.createElement("div",{className:"fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4"},g.default.createElement("div",{className:"bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4"},g.default.createElement("div",{className:"flex items-center justify-between"},g.default.createElement("h3",{className:"text-base font-bold text-slate-900"},Ze==="voice"&&"\u8BED\u97F3\u4E00\u53E5\u8BDD\u8C03\u8BA1\u5212\u4E0E\u8BB0\u8D26",Ze==="expense"&&"\u8BB0\u4E00\u7B14\u6D88\u8D39\u82B1\u9500",Ze==="budget"&&"\u4FEE\u6539\u672C\u6708\u9884\u7B97\u76EE\u6807",Ze==="reward"&&"\u4E0A\u67B6\u4E13\u5C5E\u81EA\u6211\u5956\u52B1",Ze==="newCat"&&"\u65B0\u5EFA\u79C1\u4EBA\u4E66\u67B6\u5206\u7C7B",Ze==="addBook"&&"\u5F55\u5165\u65B0\u4E66\u6216\u5BFC\u5165\u5B8C\u6574\u7535\u5B50\u4E66",Ze==="ddl"&&"\u65B0\u589E\u8BFE\u4E1A\u5F3A\u63D0\u9192",Ze==="backup"&&"React + Three.js \u72EC\u7ACB\u5B58\u6863\u5907\u4EFD",Ze==="editMeal"&&"\u4FEE\u6539\u996E\u98DF\u70ED\u91CF\u8BB0\u5F55"),g.default.createElement("button",{onClick:()=>ft(null),className:"w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"},g.default.createElement(Gr,{className:"w-4 h-4"}))),Ze==="voice"&&g.default.createElement("div",{className:"space-y-3 text-xs"},g.default.createElement("textarea",{rows:3,value:jt,onChange:I=>Ea(I.target.value),placeholder:"\u4F8B\u5982\uFF1A\u628A\u4ECA\u5929\u96C5\u601D\u6539\u5230\u665A\u4E0A\u4E5D\u70B9\uFF0C\u5468\u4E00\u5065\u8EAB\u8C03\u5230\u5468\u4E8C\uFF0C\u53D6\u6D88\u7761\u524D\u9605\u8BFB\uFF0C\u98DF\u5802\u82B1\u4E8614.5\u5143...",className:"w-full p-3 rounded-2xl border border-slate-200"}),g.default.createElement("button",{onClick:()=>Ea("\u628A\u4ECA\u5929\u7684\u96C5\u601D\u5B66\u4E60\u6539\u5230\u665A\u4E0A\u4E5D\u70B9\uFF0C\u628A\u5468\u4E00\u7684\u5065\u8EAB\u8C03\u5230\u5468\u4E8C\uFF0C\u53E6\u5916\u53D6\u6D88\u7761\u524D\u9605\u8BFB\uFF0C\u98DF\u5802\u82B1\u4E8614.5\u5143"),className:"text-[11px] px-2.5 py-1.5 rounded-xl bg-blue-50 text-blue-700 text-left"},"\u70B9\u51FB\u586B\u5165\u793A\u4F8B\u8BED\u97F3\u6307\u4EE4"),g.default.createElement("button",{onClick:de,className:"w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold"},"AI \u81EA\u52A8\u8C03\u8BA1\u5212\u5E76\u6267\u884C")),Ze==="expense"&&g.default.createElement("div",{className:"space-y-3 text-xs"},g.default.createElement("input",{type:"text",placeholder:"\u6D88\u8D39\u9879\u76EE\uFF08\u5982\uFF1A\u9EC4\u5BB6\u6E56\u4E8C\u98DF\u5802\u665A\u9910\uFF09",value:qt.title,onChange:I=>ya({...qt,title:I.target.value}),className:"w-full px-3 py-2.5 rounded-xl border border-slate-200"}),g.default.createElement("input",{type:"number",step:"0.1",placeholder:"\u91D1\u989D\uFF08\u5143\uFF09",value:qt.amount,onChange:I=>ya({...qt,amount:I.target.value}),className:"w-full px-3 py-2.5 rounded-xl border border-slate-200"}),g.default.createElement("select",{value:qt.category,onChange:I=>ya({...qt,category:I.target.value}),className:"w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white"},["\u5065\u5EB7\u9910\u996E","\u4E66\u7C4D\u5B66\u4E60","\u5065\u8EAB\u8FD0\u52A8","\u65E5\u7528\u670D\u9970","\u96F6\u98DF\u996E\u6599"].map(I=>g.default.createElement("option",{key:I,value:I},I))),g.default.createElement("button",{onClick:()=>{let I=parseFloat(qt.amount);!qt.title.trim()||!I||(e(te=>({...te,wallet:{...te.wallet,expenses:[{id:Date.now(),title:qt.title.trim(),amount:I,category:qt.category,date:"\u521A\u521A"},...te.wallet.expenses]}})),ya({title:"",amount:"15.0",category:"\u5065\u5EB7\u9910\u996E"}),ft(null),q(`\u5DF2\u8BB0\u5F55\u6D88\u8D39 \xA5${I.toFixed(1)}`,"success"))},className:"w-full py-2.5 rounded-xl bg-purple-600 text-white font-bold"},"\u786E\u8BA4\u4FDD\u5B58")),Ze==="budget"&&g.default.createElement("div",{className:"space-y-3 text-xs"},g.default.createElement("input",{type:"number",value:O,onChange:I=>Ka(I.target.value),className:"w-full px-3 py-2.5 rounded-xl border border-slate-200"}),g.default.createElement("button",{onClick:()=>{let I=parseFloat(O);!I||I<=0||(e(te=>({...te,wallet:{...te.wallet,budget:I}})),ft(null),q(`\u672C\u6708\u9884\u7B97\u5DF2\u66F4\u65B0\u4E3A \xA5${I}`,"success"))},className:"w-full py-2.5 rounded-xl bg-purple-600 text-white font-bold"},"\u4FDD\u5B58\u9884\u7B97")),Ze==="reward"&&g.default.createElement("div",{className:"space-y-3 text-xs"},g.default.createElement("input",{type:"text",placeholder:"\u5956\u52B1\u540D\u79F0\uFF08\u5982\uFF1A\u4E70\u4E00\u672C\u65B0\u753B\u518C\uFF09",value:ht.title,onChange:I=>Ct({...ht,title:I.target.value}),className:"w-full px-3 py-2.5 rounded-xl border border-slate-200"}),g.default.createElement("input",{type:"number",placeholder:"\u6240\u9700\u91D1\u5E01",value:ht.cost,onChange:I=>Ct({...ht,cost:I.target.value}),className:"w-full px-3 py-2.5 rounded-xl border border-slate-200"}),g.default.createElement("button",{onClick:()=>{ht.title.trim()&&(e(I=>({...I,wallet:{...I.wallet,rewards:[...I.wallet.rewards,{id:Date.now(),title:ht.title.trim(),cost:parseInt(ht.cost,10)||120,icon:"\u{1F381}",redeemed:0}]}})),Ct({title:"",cost:"120",icon:"\u{1F381}"}),ft(null),q("\u5DF2\u4E0A\u67B6\u65B0\u5956\u52B1\uFF01","success"))},className:"w-full py-2.5 rounded-xl bg-amber-500 text-white font-bold"},"\u4E0A\u67B6\u5956\u52B1")),Ze==="newCat"&&g.default.createElement("div",{className:"space-y-3 text-xs"},g.default.createElement("input",{type:"text",placeholder:"\u8F93\u5165\u65B0\u5206\u7C7B\u540D\u79F0\uFF08\u5982\uFF1A\u6BD5\u8BBE\u53C2\u8003\uFF09",value:ge,onChange:I=>Zt(I.target.value),className:"w-full px-3 py-2.5 rounded-xl border border-slate-200"}),g.default.createElement("button",{onClick:()=>{let I=ge.trim();!I||t.bookCategories.includes(I)||(e(te=>({...te,bookCategories:[...te.bookCategories,I]})),J(I),Zt(""),ft(null),q(`\u5DF2\u521B\u5EFA\u5206\u7C7B\u300C${I}\u300D`,"success"))},className:"w-full py-2.5 rounded-xl bg-indigo-600 text-white font-bold"},"\u521B\u5EFA\u5206\u7C7B")),Ze==="addBook"&&g.default.createElement("div",{className:"space-y-3 text-xs"},g.default.createElement("input",{type:"text",placeholder:"\u4E66\u540D",value:Ce.title,onChange:I=>Oe({...Ce,title:I.target.value}),className:"w-full px-3 py-2.5 rounded-xl border border-slate-200"}),g.default.createElement("div",{className:"grid grid-cols-2 gap-2"},g.default.createElement("input",{type:"text",placeholder:"\u4F5C\u8005",value:Ce.author,onChange:I=>Oe({...Ce,author:I.target.value}),className:"px-3 py-2 rounded-xl border border-slate-200"}),g.default.createElement("select",{value:Ce.category,onChange:I=>Oe({...Ce,category:I.target.value}),className:"px-3 py-2 rounded-xl border border-slate-200 bg-white"},t.bookCategories.map(I=>g.default.createElement("option",{key:I,value:I},I)))),g.default.createElement("textarea",{rows:4,placeholder:"\u7C98\u8D34\u6B63\u6587\u5185\u5BB9\uFF0C\u6216\u70B9\u51FB\u4E0B\u65B9\u5BFC\u5165\u672C\u5730\u5B8C\u6574\u7535\u5B50\u4E66...",value:Ce.content,onChange:I=>Oe({...Ce,content:I.target.value}),className:"w-full p-3 rounded-xl border border-slate-200"}),g.default.createElement("label",{className:"inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold cursor-pointer"},g.default.createElement(gc,{className:"w-3.5 h-3.5"}),g.default.createElement("span",null,"\u5BFC\u5165\u672C\u5730\u7535\u5B50\u4E66 (.txt / .md / .epub)"),g.default.createElement("input",{type:"file",accept:".txt,.md,.epub,.html",className:"hidden",onChange:fe})),g.default.createElement("button",{onClick:()=>{if(!Ce.title.trim())return;let I=Ce.content.trim()?Ce.content.split(/\n+/).map(te=>te.trim()).filter(Boolean):[`\u300A${Ce.title}\u300B\u5DF2\u52A0\u5165\u4E66\u67B6\u3002`];e(te=>({...te,books:[{id:Date.now(),title:Ce.title.trim(),author:Ce.author.trim()||"\u79C1\u4EBA\u85CF\u4E66",category:Ce.category,progress:0,currentPage:0,readMins:0,coverBg:"from-indigo-600 to-purple-800",content:I},...te.books]})),Oe({title:"",author:"",category:t.bookCategories[0]||"\u5730\u5927\u4E13\u4E1A",content:""}),ft(null),q("\u65B0\u4E66\u5DF2\u6210\u529F\u5165\u67B6\uFF0C\u652F\u6301\u7FFB\u9875\u4E0E\u76EE\u5F55\u8DF3\u8F6C\uFF01","success")},className:"w-full py-2.5 rounded-xl bg-indigo-600 text-white font-bold"},"\u52A0\u5165\u4E66\u67B6")),Ze==="ddl"&&g.default.createElement("div",{className:"space-y-3 text-xs"},g.default.createElement("input",{type:"text",placeholder:"\u63D0\u9192\u4E8B\u9879",value:T.title,onChange:I=>b({...T,title:I.target.value}),className:"w-full px-3 py-2.5 rounded-xl border border-slate-200"}),g.default.createElement("input",{type:"text",placeholder:"\u622A\u6B62\u65F6\u95F4",value:T.due,onChange:I=>b({...T,due:I.target.value}),className:"w-full px-3 py-2.5 rounded-xl border border-slate-200"}),g.default.createElement("button",{onClick:()=>{T.title.trim()&&(e(I=>({...I,ddls:[{id:Date.now(),title:T.title.trim(),due:T.due,urgent:!0},...I.ddls]})),ft(null),q("\u63D0\u9192\u5DF2\u6DFB\u52A0\uFF01","success"))},className:"w-full py-2.5 rounded-xl bg-rose-600 text-white font-bold"},"\u6DFB\u52A0\u63D0\u9192")),Ze==="editMeal"&&g.default.createElement("div",{className:"space-y-3 text-xs"},g.default.createElement("div",null,g.default.createElement("label",{className:"block text-slate-600 font-semibold mb-1"},"\u9910\u6B21"),g.default.createElement("select",{value:B.type,onChange:I=>se({...B,type:I.target.value}),className:"w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white"},g.default.createElement("option",{value:"\u65E9\u5348\u9910 (09:30)"},"\u65E9\u5348\u9910 (09:30)"),g.default.createElement("option",{value:"\u5348\u9910 (12:30)"},"\u5348\u9910 (12:30)"),g.default.createElement("option",{value:"\u665A\u9910 (18:30)"},"\u665A\u9910 (18:30)"),g.default.createElement("option",{value:"\u591C\u5BB5\u4F4E\u5361\u52A0\u9910"},"\u591C\u5BB5\u4F4E\u5361\u52A0\u9910"))),g.default.createElement("div",null,g.default.createElement("label",{className:"block text-slate-600 font-semibold mb-1"},"\u9910\u98DF\u63CF\u8FF0"),g.default.createElement("input",{type:"text",value:B.desc,onChange:I=>se({...B,desc:I.target.value}),placeholder:"\u8F93\u5165\u98DF\u7269\u5185\u5BB9...",className:"w-full px-3 py-2.5 rounded-xl border border-slate-200"})),g.default.createElement("div",{className:"grid grid-cols-2 gap-2.5"},g.default.createElement("div",null,g.default.createElement("label",{className:"block text-slate-600 font-semibold mb-1"},"\u9910\u524D\u603B\u70ED\u91CF (kcal)"),g.default.createElement("input",{type:"number",value:B.preCal,onChange:I=>se({...B,preCal:Number(I.target.value)||0}),className:"w-full px-3 py-2.5 rounded-xl border border-slate-200 font-bold"})),g.default.createElement("div",null,g.default.createElement("label",{className:"block text-slate-600 font-semibold mb-1"},"\u5269\u996D\u6263\u9664 (kcal)"),g.default.createElement("input",{type:"number",value:B.leftoverCal,onChange:I=>se({...B,leftoverCal:Number(I.target.value)||0}),className:"w-full px-3 py-2.5 rounded-xl border border-slate-200 font-bold text-emerald-700"}))),g.default.createElement("div",{className:"p-3 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between"},g.default.createElement("span",{className:"text-amber-900 font-semibold"},"\u4FEE\u6B63\u540E\u5B9E\u9645\u51C0\u6444\u5165\uFF1A"),g.default.createElement("span",{className:"text-base font-extrabold text-amber-800"},Math.max(0,Number(B.preCal)-Number(B.leftoverCal))," kcal")),g.default.createElement("button",{onClick:()=>{let I=Math.max(0,Number(B.preCal)||0),te=Math.max(0,Number(B.leftoverCal)||0),oe=Math.max(0,I-te);e(Ne=>({...Ne,calories:{...Ne.calories,meals:Ne.calories.meals.map(ye=>ye.id===B.id?{...ye,type:B.type,desc:B.desc,preCal:I,leftoverCal:te,netCal:oe}:ye)}})),ft(null),q(`\u70ED\u91CF\u8BB0\u5F55\u5DF2\u4FEE\u6B63\u4E3A ${oe} kcal\uFF01`,"success")},className:"w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold"},"\u4FDD\u5B58\u4FEE\u6B63\u5E76\u91CD\u7B97\u4ECA\u65E5\u70ED\u91CF")),Ze==="backup"&&g.default.createElement("div",{className:"space-y-3 text-xs"},g.default.createElement("p",{className:"text-slate-500"},"\u6240\u6709\u8BB0\u5F55\u81EA\u52A8\u4FDD\u5B58\u5728\u6D4F\u89C8\u5668\u672C\u5730\u5B58\u50A8\u4E2D\uFF0C\u4E5F\u53EF\u5BFC\u51FA JSON \u6587\u4EF6\u8DE8\u8BBE\u5907\u6062\u590D\u3002"),g.default.createElement("div",{className:"grid grid-cols-2 gap-2"},g.default.createElement("button",{onClick:()=>{let I=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),te=URL.createObjectURL(I),oe=document.createElement("a");oe.href=te,oe.download=`GapYearOS_React\u5907\u4EFD_${new Date().toISOString().slice(0,10)}.json`,oe.click(),URL.revokeObjectURL(te),q("\u5907\u4EFD\u5DF2\u5BFC\u51FA\uFF01","success")},className:"py-2.5 px-3 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center gap-1"},g.default.createElement(mc,{className:"w-3.5 h-3.5"}),"\u5BFC\u51FA\u5907\u4EFD"),g.default.createElement("label",{className:"py-2.5 px-3 rounded-xl bg-slate-100 text-slate-800 font-bold flex items-center justify-center gap-1 cursor-pointer"},g.default.createElement(Rc,{className:"w-3.5 h-3.5"}),"\u6062\u590D\u5907\u4EFD",g.default.createElement("input",{type:"file",accept:".json",className:"hidden",onChange:I=>{let te=I.target.files?.[0];if(!te)return;let oe=new FileReader;oe.onload=Ne=>{try{e({...Dc,...JSON.parse(Ne.target.result)}),ft(null),q("\u6570\u636E\u5DF2\u6062\u590D\uFF01","success")}catch{}},oe.readAsText(te)}}))),g.default.createElement("button",{onClick:()=>{localStorage.removeItem(H0),e(Dc),ft(null),q("\u5DF2\u6E05\u7A7A\u5168\u90E8\u5386\u53F2\u8BB0\u5F55\uFF0C\u6062\u590D\u4E3A\u7EAF\u51C0\u521D\u59CB\u72B6\u6001\uFF01","info")},className:"w-full py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold border border-rose-200 transition"},"\u4E00\u952E\u91CD\u7F6E\u5E76\u6E05\u7A7A\u6240\u6709\u6570\u636E")))),Me&&(()=>{let I=N1(Me.content),te=I.length,oe=Math.max(0,Math.min(te-1,Le)),Ne=zD(I);return g.default.createElement("div",{className:`fixed inset-0 z-50 bg-slate-900/85 backdrop-blur-sm flex items-center justify-center ${tt?"p-0":"p-2 sm:p-5"}`},g.default.createElement("div",{className:`flex flex-col shadow-2xl overflow-hidden relative transition-all duration-200 ${tt?"w-screen h-screen rounded-none":"rounded-3xl max-w-4xl w-full h-[92vh]"} ${ae==="paper"?"bg-[#faf6ed] text-[#2c2825]":ae==="mint"?"bg-[#e8f3ec] text-[#1f3328]":"bg-[#181a1f] text-slate-200"}`},!je&&g.default.createElement("div",{className:"px-4 pt-[max(12px,env(safe-area-inset-top))] pb-3 border-b border-black/10 flex flex-wrap items-center justify-between gap-2 shrink-0"},g.default.createElement("div",{className:"flex items-center gap-2"},g.default.createElement("button",{onClick:X,className:"px-3 py-1.5 rounded-xl bg-black/5 hover:bg-black/10 text-xs font-bold flex items-center gap-1 transition"},g.default.createElement(dc,{className:"w-3.5 h-3.5"}),"\u4FDD\u5B58\u9000\u51FA"),g.default.createElement("button",{onClick:()=>Pe(ye=>!ye),className:"px-3 py-1.5 rounded-xl bg-indigo-600/15 text-indigo-800 text-xs font-bold flex items-center gap-1 hover:bg-indigo-600/25 transition"},g.default.createElement(kr,{className:"w-3.5 h-3.5"}),"\u76EE\u5F55 (",Ne.length,")"),g.default.createElement("h3",{className:"font-bold text-sm truncate max-w-[120px] sm:max-w-xs"},Me.title)),g.default.createElement("div",{className:"flex items-center gap-1.5"},g.default.createElement("button",{onClick:()=>{St(ye=>!ye),Gt(!1)},className:"px-2.5 py-1 rounded-xl bg-indigo-600 text-white text-[11px] font-bold flex items-center gap-1 shadow-sm"},tt?g.default.createElement(Lc,{className:"w-3 h-3"}):g.default.createElement(Mc,{className:"w-3 h-3"}),g.default.createElement("span",null,tt?"\u7A97\u53E3\u6A21\u5F0F":"\u5168\u5C4F\u6A21\u5F0F")),g.default.createElement("button",{onClick:()=>Ve(ye=>ye==="page"?"scroll":"page"),className:"px-2.5 py-1 rounded-xl bg-black/5 text-[11px] font-bold"},me==="page"?"\u{1F4D6} \u7FFB\u9875":"\u{1F4DC} \u6EDA\u52A8"),g.default.createElement("div",{className:"px-2.5 py-1 rounded-xl bg-emerald-600/15 text-emerald-800 text-xs font-bold flex items-center gap-1"},g.default.createElement(hc,{className:"w-3.5 h-3.5"}),g.default.createElement("span",null,String(Math.floor(ie/60)).padStart(2,"0"),":",String(ie%60).padStart(2,"0"))),g.default.createElement("button",{onClick:()=>ne("paper"),className:"w-6 h-6 rounded-lg bg-[#faf6ed] border border-slate-300"}),g.default.createElement("button",{onClick:()=>ne("mint"),className:"w-6 h-6 rounded-lg bg-[#e8f3ec] border border-slate-300"}),g.default.createElement("button",{onClick:()=>ne("dark"),className:"w-6 h-6 rounded-lg bg-[#181a1f] border border-slate-600"}),g.default.createElement("button",{onClick:()=>He(ye=>Math.max(13,ye-1)),className:"w-6 h-6 rounded-lg bg-black/5 text-xs font-bold"},"A-"),g.default.createElement("button",{onClick:()=>He(ye=>Math.min(24,ye+1)),className:"w-6 h-6 rounded-lg bg-black/5 text-xs font-bold"},"A+"))),Yt&&g.default.createElement("div",{className:"absolute top-14 left-3 bottom-16 w-64 sm:w-72 bg-white/95 backdrop-blur-md text-slate-800 rounded-2xl shadow-2xl border border-slate-200 z-20 flex flex-col overflow-hidden"},g.default.createElement("div",{className:"p-3 border-b border-slate-100 flex items-center justify-between"},g.default.createElement("span",{className:"text-xs font-bold text-slate-900"},"\u7AE0\u8282\u76EE\u5F55 \xB7 \u70B9\u51FB\u8DF3\u8F6C"),g.default.createElement("button",{onClick:()=>Pe(!1),className:"text-slate-400 hover:text-slate-600"},g.default.createElement(Gr,{className:"w-4 h-4"}))),g.default.createElement("div",{className:"flex-1 overflow-y-auto p-2 space-y-1"},Ne.map((ye,Be)=>g.default.createElement("button",{key:Be,onClick:()=>{Y(Me.id,ye.page,te),Ve("page"),Pe(!1),q(`\u5DF2\u8DF3\u8F6C\u81F3\uFF1A${ye.title}`,"info")},className:`w-full text-left px-3 py-2 rounded-xl text-xs transition flex items-center justify-between gap-2 ${oe>=ye.page?"bg-indigo-50 text-indigo-800 font-bold":"hover:bg-slate-100 text-slate-700"}`},g.default.createElement("span",{className:"truncate"},ye.title),g.default.createElement("span",{className:"text-[10px] text-slate-400 shrink-0"},"\u7B2C",ye.page+1,"\u9875"))))),g.default.createElement("div",{ref:Vt,onTouchStart:ye=>{sa.current=ye.touches[0].clientX},onTouchEnd:ye=>{if(sa.current===null||me!=="page")return;let Be=ye.changedTouches[0].clientX-sa.current;sa.current=null,Math.abs(Be)>45&&(Be<0?Y(Me.id,oe+1,te):Y(Me.id,oe-1,te))},onClick:ye=>{if(!(ye.target.closest("button")||ye.target.closest("input"))){if(me==="page"){let Be=ye.currentTarget.getBoundingClientRect(),Ut=(ye.clientX-Be.left)/Be.width;if(Ut<.28){Y(Me.id,oe-1,te);return}if(Ut>.72){Y(Me.id,oe+1,te);return}}tt&&Gt(Be=>!Be)}},className:`flex-1 ${me==="page"?"overflow-hidden":"overflow-y-auto"} px-5 sm:px-14 pt-[max(20px,env(safe-area-inset-top))] pb-4 sm:py-8 leading-loose relative select-none flex flex-col justify-between`,style:{fontSize:`${Ee}px`}},g.default.createElement("div",{className:"max-w-3xl w-full mx-auto flex-1 flex flex-col justify-between"},me==="page"?g.default.createElement(g.default.Fragment,null,g.default.createElement("div",{className:"space-y-3 text-justify overflow-hidden"},I[oe].map((ye,Be)=>g.default.createElement("p",{key:Be,className:"indent-8"},ye))),g.default.createElement("div",{className:"pt-3 mt-2 border-t border-black/10 flex items-center justify-between gap-2 text-xs shrink-0"},g.default.createElement("button",{disabled:oe<=0,onClick:()=>Y(Me.id,oe-1,te),className:"px-3 py-2 rounded-xl bg-black/10 hover:bg-black/15 disabled:opacity-30 font-bold transition whitespace-nowrap shrink-0"},"\u2190 \u4E0A\u4E00\u9875"),g.default.createElement("div",{className:"flex-1 min-w-0 max-w-xs flex items-center gap-1.5"},g.default.createElement("input",{type:"range",min:0,max:Math.max(0,te-1),value:oe,onChange:ye=>Y(Me.id,Number(ye.target.value),te),className:"flex-1 min-w-0 accent-indigo-600"}),g.default.createElement("span",{className:"font-bold whitespace-nowrap text-[11px] shrink-0"},oe+1,"/",te)),g.default.createElement("button",{disabled:oe>=te-1,onClick:()=>Y(Me.id,oe+1,te),className:"px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-30 text-white font-bold transition whitespace-nowrap shrink-0"},"\u4E0B\u4E00\u9875 \u2192"))):g.default.createElement("div",{className:"space-y-5 text-justify"},Me.content.map((ye,Be)=>g.default.createElement("p",{key:Be,className:"indent-8"},ye))))),!je&&g.default.createElement("div",{className:"px-4 py-3 border-t border-black/10 flex flex-wrap items-center justify-between gap-2 text-xs shrink-0"},g.default.createElement("div",{className:"flex items-center gap-2"},g.default.createElement("span",null,"\u5DF2\u81EA\u52A8\u4FDD\u5B58\u8FDB\u5EA6\uFF1A",g.default.createElement("strong",null,Me.progress,"%")),g.default.createElement("button",{onClick:()=>{Y(Me.id,Math.min(te-1,oe+1),te),re(25,25,"\u9605\u8BFB\u8FDB\u5EA6\u5DF2\u4FDD\u5B58\uFF0C\u83B7\u5F97 +25 \u91D1\u5E01\u4E0E 1 \u9897\u77FF\u77F3\uFF01",1)},className:"px-3 py-1.5 rounded-xl bg-indigo-600 text-white font-bold"},"\u5B8C\u6210\u672C\u8282\u6253\u5361 (+25\u91D1\u5E01)")),g.default.createElement("div",{className:"flex items-center gap-2 flex-1 max-w-sm"},g.default.createElement("input",{type:"text",value:$,onChange:ye=>ve(ye.target.value),placeholder:"\u8BB0\u4E00\u53E5\u6279\u6CE8...",className:"flex-1 px-3 py-1.5 rounded-xl bg-white/80 border border-black/15 text-slate-800"}),g.default.createElement("button",{onClick:()=>{$.trim()&&(ve(""),q("\u8BFB\u4E66\u6279\u6CE8\u5DF2\u4FDD\u5B58\uFF01","success"))},className:"px-3 py-1.5 rounded-xl bg-amber-600 text-white font-bold"},"\u5B58\u7B14\u8BB0")))))})())}var g,H0,Dc,P1=ke(()=>{g=Vr(is());aC();D1();H0="gapyear_os_react_huqiuyi_clean_v3",Dc={coins:0,calories:{target:1550,meals:[]},weights:[{date:"\u521D\u59CB",val:61}],schedules:[{id:1,time:"09:00 - 09:40",title:"\u6668\u8D77\u7A7A\u8179\u79F0\u91CD + \u6E29\u6C34\u5524\u9192 + \u9AD8\u86CB\u767D\u65E9\u5348\u9910",tag:"\u4F5C\u606F\u4E0E\u51CF\u8102",color:"emerald",done:!1},{id:2,time:"10:00 - 11:50",title:"\u96C5\u601D\u6838\u5FC3\u8BCD + \u5730\u5927\u9EC4\u7231\u6B66\u8001\u5E08\u8BFE\u9898\u7EC4\u6587\u732E\u7CBE\u8BFB",tag:"\u79D1\u7814\u4E0E\u96C5\u601D",color:"sky",done:!1},{id:3,time:"14:00 - 17:40",title:"\u3010\u7B2C13\u5468\u5468\u4E00\u3011\u300A\u591A\u5A92\u4F53\u8BBE\u8BA12\u300B\u8FDE\u5802\uFF08\u6559\u4E00\u697C\u4E8C\u533A603\uFF09",tag:"\u7B2C13\u5468\u8BFE\u8868",color:"indigo",done:!1},{id:4,time:"18:10 - 19:10",title:"\u3010\u7B2C13\u5468\u5468\u4E00\u3011\u4E0B\u8BFE\u987A\u8DEF\u7EC3\u80CC\u80A9 + \u722C\u576125\u5206\u949F",tag:"61kg\u51CF\u8102",color:"rose",done:!1},{id:5,time:"23:30 - 00:45",title:"\u7761\u524D\u6C89\u6D78\u9605\u8BFB\uFF0801:30\u524D\u51C6\u5907\u5165\u7761\uFF09",tag:"\u9605\u8BFB\u4E60\u60EF",color:"amber",done:!1}],ddls:[{id:1,title:"\u7B2C13\u5468\u8D77\uFF1A\u5468\u4E00/\u4E09/\u4E94 14:00-17:40\u300A\u591A\u5A92\u4F53\u8BBE\u8BA12\u300B",due:"\u6559\u4E00\u697C\u4E8C\u533A 603",urgent:!0},{id:2,title:"\u6BD5\u4E1A\u8BBE\u8BA1(\u8BBA\u6587)\u63A8\u8FDB\uFF08\u6559\u4E00\u697C\u4E8C\u533A507\uFF09",due:"\u7B2C13-15\u5468\u91CD\u70B9",urgent:!1}],weekPlan:[{day:"\u5468\u4E00 (11.23)",classes:["14:00-17:40 \u591A\u5A92\u4F53\u8BBE\u8BA12 (\u6559\u4E00\u4E8C\u533A603)","\u6BD5\u4E1A\u8BBE\u8BA1(\u8BBA\u6587) (\u6559\u4E00\u4E8C\u533A507\xB7\u81EA\u4E3B)"],workout:"18:10 \u4E0B\u8BFE\u987A\u8DEF\uFF1A\u7F8E\u80CC\u76F4\u89D2\u80A9 + \u722C\u576125m",isWorkout:!0,done:!1},{day:"\u5468\u4E8C (11.24)",classes:["\u5168\u5929\u65E0\u5750\u73ED\u8BFE \xB7 \u6BD5\u4E1A\u8BBE\u8BA1\u81EA\u4E3B\u63A8\u8FDB"],workout:"\u79D1\u7814\u6587\u732E + \u96C5\u601D\u7CBE\u542C\u8BAD\u7EC3",isWorkout:!1,done:!1},{day:"\u5468\u4E09 (11.25)",classes:["14:00-17:40 \u591A\u5A92\u4F53\u8BBE\u8BA12 (\u6559\u4E00\u4E8C\u533A603)","\u6BD5\u4E1A\u8BBE\u8BA1(\u8BBA\u6587) (\u6559\u4E00\u4E8C\u533A507\xB7\u81EA\u4E3B)"],workout:"18:10 \u4E0B\u8BFE\u987A\u8DEF\uFF1A\u871C\u6843\u81C0\u817F\u5851\u5F62 + \u692D\u5706\u673A",isWorkout:!0,done:!1},{day:"\u5468\u56DB (11.26)",classes:["\u5168\u5929\u65E0\u5750\u73ED\u8BFE \xB7 \u6BD5\u4E1A\u8BBE\u8BA1\u81EA\u4E3B\u63A8\u8FDB"],workout:"\u65E5\u8BED\u8DDF\u8BFB + 3D\u5EFA\u6A21\u5DE5\u4F5C\u53F0",isWorkout:!1,done:!1},{day:"\u5468\u4E94 (11.27)",classes:["14:00-17:40 \u591A\u5A92\u4F53\u8BBE\u8BA12 (\u6559\u4E00\u4E8C\u533A603)","\u6BD5\u4E1A\u8BBE\u8BA1(\u8BBA\u6587) (\u6559\u4E00\u4E8C\u533A507\xB7\u81EA\u4E3B)"],workout:"18:10 \u4E0B\u8BFE\u987A\u8DEF\uFF1A\u6838\u5FC3\u9A6C\u7532\u7EBF + \u62C9\u4F38\u653E\u677E",isWorkout:!0,done:!1},{day:"\u5468\u516D (11.28)",classes:[],workout:"\u5468\u672B\u6237\u5916\u6563\u6B65 / \u6B3A\u9A97\u9910\u5FAE\u8C03",isWorkout:!1,done:!1},{day:"\u5468\u65E5 (11.29)",classes:["20:30-22:10 \u6B4C\u58F0\u4E2D\u7684\u515A\u53F2Z (\u667A\u6167\u6811)"],workout:"\u5468\u4F53\u91CD\u590D\u76D8 + \u7761\u524D\u6C89\u6D78\u9605\u8BFB",isWorkout:!1,done:!1}],wallet:{budget:1500,expenses:[],rewards:[{id:1,title:"\u65E0\u7F6A\u6076\u611F\u5468\u672B\u653E\u7EB5\u7F8E\u98DF\u4E00\u987F",cost:150,icon:"\u{1F35C}",redeemed:0},{id:2,title:"\u5165\u624B\u4E00\u672C\u5FC3\u4EEA\u7684\u53E4\u751F\u7269/\u8BBE\u8BA1\u753B\u518C",cost:200,icon:"\u{1F4DA}",redeemed:0},{id:3,title:"\u6E05\u7A7A\u8D2D\u7269\u8F66\u4E00\u4EF6\u5FC3\u613F\u597D\u7269 (\u2264150\u5143)",cost:350,icon:"\u{1F6CD}\uFE0F",redeemed:0},{id:4,title:"\u61D2\u89C9\u8C41\u514D\u5238\uFF08\u5468\u672B\u7761\u5230\u81EA\u7136\u9192\uFF09",cost:80,icon:"\u{1F6CC}",redeemed:0}]},bookCategories:["\u5730\u5927\u4E13\u4E1A","\u53E4\u751F\u7269\u79D1\u666E","\u96C5\u601D\u65E5\u8BED","3D\u4E0E\u5F00\u53D1","\u827A\u672F\u8BBE\u8BA1"],readingStats:{totalSeconds:0,streakDays:0,lastReadDate:"",periods:{morning:0,evening:0,night:0}},books:[],pet:{species:"trilobite",name:"\u4E09\u53F6\u866B\xB7\u56E2\u5B50",emoji:"\u{1FAB2}",level:1,exp:0,maxExp:100,food:0}}});var GD=wi(()=>{var U1=Vr(is()),O1=Vr(fM());P1();(0,O1.createRoot)(document.getElementById("root")).render(U1.default.createElement(G0,null))});export default GD();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs:
lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs:
lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs:
lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs:
lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs:
lucide-react/dist/esm/shared/src/build/defaultAttributes.mjs:
lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs:
lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs:
lucide-react/dist/esm/context.mjs:
lucide-react/dist/esm/Icon.mjs:
lucide-react/dist/esm/createLucideIcon.mjs:
lucide-react/dist/esm/icons/arrow-left.mjs:
lucide-react/dist/esm/icons/bell.mjs:
lucide-react/dist/esm/icons/book-open.mjs:
lucide-react/dist/esm/icons/box.mjs:
lucide-react/dist/esm/icons/camera.mjs:
lucide-react/dist/esm/icons/check.mjs:
lucide-react/dist/esm/icons/clock.mjs:
lucide-react/dist/esm/icons/coins.mjs:
lucide-react/dist/esm/icons/compass.mjs:
lucide-react/dist/esm/icons/download.mjs:
lucide-react/dist/esm/icons/dumbbell.mjs:
lucide-react/dist/esm/icons/file-text.mjs:
lucide-react/dist/esm/icons/flame.mjs:
lucide-react/dist/esm/icons/folder-plus.mjs:
lucide-react/dist/esm/icons/gift.mjs:
lucide-react/dist/esm/icons/graduation-cap.mjs:
lucide-react/dist/esm/icons/heart.mjs:
lucide-react/dist/esm/icons/map-pin.mjs:
lucide-react/dist/esm/icons/maximize-2.mjs:
lucide-react/dist/esm/icons/mic.mjs:
lucide-react/dist/esm/icons/minimize-2.mjs:
lucide-react/dist/esm/icons/pencil.mjs:
lucide-react/dist/esm/icons/piggy-bank.mjs:
lucide-react/dist/esm/icons/plus.mjs:
lucide-react/dist/esm/icons/scale.mjs:
lucide-react/dist/esm/icons/search.mjs:
lucide-react/dist/esm/icons/sparkles.mjs:
lucide-react/dist/esm/icons/trash.mjs:
lucide-react/dist/esm/icons/trophy.mjs:
lucide-react/dist/esm/icons/upload.mjs:
lucide-react/dist/esm/icons/wallet.mjs:
lucide-react/dist/esm/icons/x.mjs:
lucide-react/dist/esm/lucide-react.mjs:
  (**
   * @license lucide-react v1.77.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
