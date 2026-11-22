var O1=Object.create;var G0=Object.defineProperty;var B1=Object.getOwnPropertyDescriptor;var F1=Object.getOwnPropertyNames;var k1=Object.getPrototypeOf,z1=Object.prototype.hasOwnProperty;var Ge=(t,e,a)=>()=>{if(a)throw a[0];try{return t&&(e=t(t=0)),e}catch(n){throw a=[n],n}};var Ci=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(a){throw e=0,a}};var H1=(t,e,a,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of F1(e))!z1.call(t,i)&&i!==a&&G0(t,i,{get:()=>e[i],enumerable:!(n=B1(e,i))||n.enumerable});return t};var Gr=(t,e,a)=>(a=t!=null?O1(k1(t)):{},H1(e||!t||!t.__esModule?G0(a,"default",{value:t,enumerable:!0}):a,t));var tv=Ci(Xe=>{"use strict";var xp=Symbol.for("react.transitional.element"),G1=Symbol.for("react.portal"),V1=Symbol.for("react.fragment"),q1=Symbol.for("react.strict_mode"),W1=Symbol.for("react.profiler"),X1=Symbol.for("react.consumer"),Y1=Symbol.for("react.context"),Z1=Symbol.for("react.forward_ref"),K1=Symbol.for("react.suspense"),J1=Symbol.for("react.memo"),Y0=Symbol.for("react.lazy"),Q1=Symbol.for("react.activity"),j1=Symbol.for("react.view_transition"),V0=Symbol.iterator;function $1(t){return t===null||typeof t!="object"?null:(t=V0&&t[V0]||t["@@iterator"],typeof t=="function"?t:null)}var Z0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K0=Object.assign,J0={};function qr(t,e,a){this.props=t,this.context=e,this.refs=J0,this.updater=a||Z0}qr.prototype.isReactComponent={};qr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Q0(){}Q0.prototype=qr.prototype;function vp(t,e,a){this.props=t,this.context=e,this.refs=J0,this.updater=a||Z0}var Sp=vp.prototype=new Q0;Sp.constructor=vp;K0(Sp,qr.prototype);Sp.isPureReactComponent=!0;var q0=Array.isArray;function gp(){}var Et={H:null,A:null,T:null,S:null},j0=Object.prototype.hasOwnProperty;function yp(t,e,a){var n=a.ref;return{$$typeof:xp,type:t,key:e,ref:n!==void 0?n:null,props:a}}function eA(t,e){return yp(t.type,e,t.props)}function _p(t){return typeof t=="object"&&t!==null&&t.$$typeof===xp}function tA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var W0=/\/+/g;function mp(t,e){return typeof t=="object"&&t!==null&&t.key!=null?tA(""+t.key):e.toString(36)}function aA(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(gp,gp):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Vr(t,e,a,n,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var r=!1;if(t===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(t.$$typeof){case xp:case G1:r=!0;break;case Y0:return r=t._init,Vr(r(t._payload),e,a,n,i)}}if(r)return i=i(t),r=n===""?"."+mp(t,0):n,q0(i)?(a="",r!=null&&(a=r.replace(W0,"$&/")+"/"),Vr(i,e,a,"",function(u){return u})):i!=null&&(_p(i)&&(i=eA(i,a+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(W0,"$&/")+"/")+r)),e.push(i)),1;r=0;var o=n===""?".":n+":";if(q0(t))for(var l=0;l<t.length;l++)n=t[l],s=o+mp(n,l),r+=Vr(n,e,a,s,i);else if(l=$1(t),typeof l=="function")for(t=l.call(t),l=0;!(n=t.next()).done;)n=n.value,s=o+mp(n,l++),r+=Vr(n,e,a,s,i);else if(s==="object"){if(typeof t.then=="function")return Vr(aA(t),e,a,n,i);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return r}function Dc(t,e,a){if(t==null)return t;var n=[],i=0;return Vr(t,n,"","",function(s){return e.call(a,s,i++)}),n}function nA(t){if(t._status===-1){var e=t._result,a=e();a.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n,a.status===void 0&&(a.status="fulfilled",a.value=n))},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n,a.status===void 0&&(a.status="rejected",a.reason=n))}),t._status===-1&&(t._status=0,t._result=a)}if(t._status===1)return t._result.default;throw t._result}var X0=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function $0(t){var e=Et.T,a={};a.types=e!==null?e.types:null,Et.T=a;try{var n=t(),i=Et.S;i!==null&&i(a,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(gp,X0)}catch(s){X0(s)}finally{e!==null&&a.types!==null&&(e.types=a.types),Et.T=e}}function ev(t){var e=Et.T;if(e!==null){var a=e.types;a===null?e.types=[t]:a.indexOf(t)===-1&&a.push(t)}else $0(ev.bind(null,t))}var iA={map:Dc,forEach:function(t,e,a){Dc(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return Dc(t,function(){e++}),e},toArray:function(t){return Dc(t,function(e){return e})||[]},only:function(t){if(!_p(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Activity=Q1;Xe.Children=iA;Xe.Component=qr;Xe.Fragment=V1;Xe.Profiler=W1;Xe.PureComponent=vp;Xe.StrictMode=q1;Xe.Suspense=K1;Xe.ViewTransition=j1;Xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Et;Xe.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Et.H.useMemoCache(t)}};Xe.addTransitionType=ev;Xe.cache=function(t){return function(){return t.apply(null,arguments)}};Xe.cacheSignal=function(){return null};Xe.cloneElement=function(t,e,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var n=K0({},t.props),i=t.key;if(e!=null)for(s in e.key!==void 0&&(i=""+e.key),e)!j0.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(n[s]=e[s]);var s=arguments.length-2;if(s===1)n.children=a;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];n.children=r}return yp(t.type,i,n)};Xe.createContext=function(t){return t={$$typeof:Y1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:X1,_context:t},t};Xe.createElement=function(t,e,a){var n,i={},s=null;if(e!=null)for(n in e.key!==void 0&&(s=""+e.key),e)j0.call(e,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(i[n]=e[n]);var r=arguments.length-2;if(r===1)i.children=a;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];i.children=o}if(t&&t.defaultProps)for(n in r=t.defaultProps,r)i[n]===void 0&&(i[n]=r[n]);return yp(t,s,i)};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:Z1,render:t}};Xe.isValidElement=_p;Xe.lazy=function(t){return{$$typeof:Y0,_payload:{_status:-1,_result:t},_init:nA}};Xe.memo=function(t,e){return{$$typeof:J1,type:t,compare:e===void 0?null:e}};Xe.startTransition=$0;Xe.unstable_useCacheRefresh=function(){return Et.H.useCacheRefresh()};Xe.use=function(t){return Et.H.use(t)};Xe.useActionState=function(t,e,a){return Et.H.useActionState(t,e,a)};Xe.useCallback=function(t,e){return Et.H.useCallback(t,e)};Xe.useContext=function(t){return Et.H.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t,e){return Et.H.useDeferredValue(t,e)};Xe.useEffect=function(t,e){return Et.H.useEffect(t,e)};Xe.useEffectEvent=function(t){return Et.H.useEffectEvent(t)};Xe.useId=function(){return Et.H.useId()};Xe.useImperativeHandle=function(t,e,a){return Et.H.useImperativeHandle(t,e,a)};Xe.useInsertionEffect=function(t,e){return Et.H.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return Et.H.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return Et.H.useMemo(t,e)};Xe.useOptimistic=function(t,e){return Et.H.useOptimistic(t,e)};Xe.useReducer=function(t,e,a){return Et.H.useReducer(t,e,a)};Xe.useRef=function(t){return Et.H.useRef(t)};Xe.useState=function(t){return Et.H.useState(t)};Xe.useSyncExternalStore=function(t,e,a){return Et.H.useSyncExternalStore(t,e,a)};Xe.useTransition=function(){return Et.H.useTransition()};Xe.version="19.3.1"});var as=Ci((GD,av)=>{"use strict";av.exports=tv()});var fv=Ci(Ot=>{"use strict";function Cp(t,e){var a=t.length;t.push(e);e:for(;0<a;){var n=a-1>>>1,i=t[n];if(0<Nc(i,e))t[n]=e,t[a]=i,a=n;else break e}}function jn(t){return t.length===0?null:t[0]}function Uc(t){if(t.length===0)return null;var e=t[0],a=t.pop();if(a!==e){t[0]=a;e:for(var n=0,i=t.length,s=i>>>1;n<s;){var r=2*(n+1)-1,o=t[r],l=r+1,u=t[l];if(0>Nc(o,a))l<i&&0>Nc(u,o)?(t[n]=u,t[l]=a,n=l):(t[n]=o,t[r]=a,n=r);else if(l<i&&0>Nc(u,a))t[n]=u,t[l]=a,n=l;else break e}}return e}function Nc(t,e){var a=t.sortIndex-e.sortIndex;return a!==0?a:t.id-e.id}Ot.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(nv=performance,Ot.unstable_now=function(){return nv.now()}):(Mp=Date,iv=Mp.now(),Ot.unstable_now=function(){return Mp.now()-iv});var nv,Mp,iv,Ai=[],ns=[],sA=1,Mn=null,Da=3,Ap=!1,Ml=!1,bl=!1,wp=!1,ov=typeof setTimeout=="function"?setTimeout:null,lv=typeof clearTimeout=="function"?clearTimeout:null,sv=typeof setImmediate<"u"?setImmediate:null;function Pc(t){for(var e=jn(ns);e!==null;){if(e.callback===null)Uc(ns);else if(e.startTime<=t)Uc(ns),e.sortIndex=e.expirationTime,Cp(Ai,e);else break;e=jn(ns)}}function Tp(t){if(bl=!1,Pc(t),!Ml)if(jn(Ai)!==null)Ml=!0,Xr||(Xr=!0,Wr());else{var e=jn(ns);e!==null&&Ip(Tp,e.startTime-t)}}var Xr=!1,Ll=-1,uv=5,cv=-1;function dv(){return wp?!0:!(Ot.unstable_now()-cv<uv)}function bp(){if(wp=!1,Xr){var t=Ot.unstable_now();cv=t;var e=!0;try{e:{Ml=!1,bl&&(bl=!1,lv(Ll),Ll=-1),Ap=!0;var a=Da;try{t:{for(Pc(t),Mn=jn(Ai);Mn!==null&&!(Mn.expirationTime>t&&dv());){var n=Mn.callback;if(typeof n=="function"){Mn.callback=null,Da=Mn.priorityLevel;var i=n(Mn.expirationTime<=t);if(t=Ot.unstable_now(),typeof i=="function"){Mn.callback=i,Pc(t),e=!0;break t}Mn===jn(Ai)&&Uc(Ai),Pc(t)}else Uc(Ai);Mn=jn(Ai)}if(Mn!==null)e=!0;else{var s=jn(ns);s!==null&&Ip(Tp,s.startTime-t),e=!1}}break e}finally{Mn=null,Da=a,Ap=!1}e=void 0}}finally{e?Wr():Xr=!1}}}var Wr;typeof sv=="function"?Wr=function(){sv(bp)}:typeof MessageChannel<"u"?(Lp=new MessageChannel,rv=Lp.port2,Lp.port1.onmessage=bp,Wr=function(){rv.postMessage(null)}):Wr=function(){ov(bp,0)};var Lp,rv;function Ip(t,e){Ll=ov(function(){t(Ot.unstable_now())},e)}Ot.unstable_IdlePriority=5;Ot.unstable_ImmediatePriority=1;Ot.unstable_LowPriority=4;Ot.unstable_NormalPriority=3;Ot.unstable_Profiling=null;Ot.unstable_UserBlockingPriority=2;Ot.unstable_cancelCallback=function(t){t.callback=null};Ot.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):uv=0<t?Math.floor(1e3/t):5};Ot.unstable_getCurrentPriorityLevel=function(){return Da};Ot.unstable_next=function(t){switch(Da){case 1:case 2:case 3:var e=3;break;default:e=Da}var a=Da;Da=e;try{return t()}finally{Da=a}};Ot.unstable_requestPaint=function(){wp=!0};Ot.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var a=Da;Da=t;try{return e()}finally{Da=a}};Ot.unstable_scheduleCallback=function(t,e,a){var n=Ot.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?n+a:n):a=n,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=a+i,t={id:sA++,callback:e,priorityLevel:t,startTime:a,expirationTime:i,sortIndex:-1},a>n?(t.sortIndex=a,Cp(ns,t),jn(Ai)===null&&t===jn(ns)&&(bl?(lv(Ll),Ll=-1):bl=!0,Ip(Tp,a-n))):(t.sortIndex=i,Cp(Ai,t),Ml||Ap||(Ml=!0,Xr||(Xr=!0,Wr()))),t};Ot.unstable_shouldYield=dv;Ot.unstable_wrapCallback=function(t){var e=Da;return function(){var a=Da;Da=e;try{return t.apply(this,arguments)}finally{Da=a}}}});var pv=Ci((qD,hv)=>{"use strict";hv.exports=fv()});var xv=Ci(Na=>{"use strict";var rA=as();function gv(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function is(){}var ka={d:{f:is,r:function(){throw Error(gv(522))},D:is,C:is,L:is,m:is,X:is,S:is,M:is},p:0,findDOMNode:null},oA=Symbol.for("react.portal"),lA=Symbol.for("react.recoverable"),mv=Symbol.for("react.optimistic_key");function uA(t,e,a){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oA,key:n==null?null:n===mv?mv:""+n,children:t,containerInfo:e,implementation:a}}var Cl=rA.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Oc(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Na.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ka;Na.browser=function(t){return{$$typeof:lA,_reason:t}};Na.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(gv(299));return uA(t,e,null,a)};Na.flushSync=function(t){var e=Cl.T,a=ka.p;try{if(Cl.T=null,ka.p=2,t)return t()}finally{Cl.T=e,ka.p=a,ka.d.f()}};Na.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,ka.d.C(t,e))};Na.prefetchDNS=function(t){typeof t=="string"&&ka.d.D(t)};Na.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var a=e.as,n=Oc(a,e.crossOrigin),i=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;a==="style"?ka.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:n,integrity:i,fetchPriority:s}):a==="script"&&ka.d.X(t,{crossOrigin:n,integrity:i,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Na.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var a=Oc(e.as,e.crossOrigin);ka.d.M(t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}}else e==null&&ka.d.M(t)};Na.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var a=e.as,n=Oc(a,e.crossOrigin);ka.d.L(t,a,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Na.preloadModule=function(t,e){if(typeof t=="string")if(e){var a=Oc(e.as,e.crossOrigin);ka.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}else ka.d.m(t)};Na.requestFormReset=function(t){ka.d.r(t)};Na.unstable_batchedUpdates=function(t,e){return t(e)};Na.useFormState=function(t,e,a){return Cl.H.useFormState(t,e,a)};Na.useFormStatus=function(){return Cl.H.useHostTransitionStatus()};Na.version="19.3.1"});var yv=Ci((XD,Sv)=>{"use strict";function vv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vv)}catch(t){console.error(t)}}vv(),Sv.exports=xv()});var rb=Ci(vf=>{"use strict";var oa=pv(),sy=as(),cA=yv();function te(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ry(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fu(t){for(var e=t,a=e;a&&!a.alternate;)e=a,(e.flags&4098)!==0&&(t=e.return),a=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function oy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ly(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _v(t){if(fu(t)!==t)throw Error(te(188))}function dA(t){var e=t.alternate;if(!e){if(e=fu(t),e===null)throw Error(te(188));return e!==t?null:t}for(var a=t,n=e;;){var i=a.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===a)return _v(i),t;if(s===n)return _v(i),e;s=s.sibling}throw Error(te(188))}if(a.return!==n.return)a=i,n=s;else{for(var r=!1,o=i.child;o;){if(o===a){r=!0,a=i,n=s;break}if(o===n){r=!0,n=i,a=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===a){r=!0,a=s,n=i;break}if(o===n){r=!0,n=s,a=i;break}o=o.sibling}if(!r)throw Error(te(189))}}if(a.alternate!==n)throw Error(te(190))}if(a.tag!==3)throw Error(te(188));return a.stateNode.current===a?t:e}function uy(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=uy(t),e!==null)return e;t=t.sibling}return null}function en(t,e,a,n,i,s){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,n,i,s)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&en(t.child,e,a,n,i,s))return!0;t=t.sibling}return!1}function Mr(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function Mv(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function cy(t){var e=[null,null],a=Mr(t);return a===null||dy(e,t,a.child,{foundSelf:!1}),e}function dy(t,e,a,n){for(;a!==null;){if(a===e)n.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(n.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&dy(t,e,a.child,n))return!0;a=a.sibling}return!1}function ra(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(te(559))}}var $r=null,om=null;function fA(t,e,a){return t===a?!0:t===e?($r=t,!0):!1}function hA(t,e,a){return t===a?(om=t,!1):t===e?(om!==null&&($r=t),!0):!1}function bv(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function lm(t,e,a){for(var n=0,i=t;i;i=a(i))n++;i=0;for(var s=e;s;s=a(s))i++;for(;0<n-i;)t=a(t),n--;for(;0<i-n;)e=a(e),i--;for(;n--;){if(t===e||e!==null&&t===e.alternate)return t;t=a(t),e=a(e)}return null}var Tt=Object.assign,pA=Symbol.for("react.element"),Bc=Symbol.for("react.transitional.element"),Dl=Symbol.for("react.portal"),eo=Symbol.for("react.fragment"),fy=Symbol.for("react.strict_mode"),um=Symbol.for("react.profiler"),hy=Symbol.for("react.consumer"),ii=Symbol.for("react.context"),vg=Symbol.for("react.forward_ref"),cm=Symbol.for("react.suspense"),dm=Symbol.for("react.suspense_list"),Sg=Symbol.for("react.memo"),ls=Symbol.for("react.lazy"),fm=Symbol.for("react.activity"),mA=Symbol.for("react.legacy_hidden"),gA=Symbol.for("react.memo_cache_sentinel"),hm=Symbol.for("react.view_transition"),xA=Symbol.for("react.recoverable"),Lv=Symbol.iterator;function Al(t){return t===null||typeof t!="object"?null:(t=Lv&&t[Lv]||t["@@iterator"],typeof t=="function"?t:null)}var vA=Symbol.for("react.client.reference");function pm(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===vA?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case eo:return"Fragment";case um:return"Profiler";case fy:return"StrictMode";case cm:return"Suspense";case dm:return"SuspenseList";case fm:return"Activity";case hm:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case Dl:return"Portal";case ii:return t.displayName||"Context";case hy:return(t._context.displayName||"Context")+".Consumer";case vg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sg:return e=t.displayName||null,e!==null?e:pm(t.type)||"Memo";case ls:e=t._payload,t=t._init;try{return pm(t(e))}catch{}}return null}var Nl=Array.isArray,ze=sy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,gt=cA.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ur={pending:!1,data:null,method:null,action:null},mm=[],to=-1;function di(t){return{current:t}}function La(t){0>to||(t.current=mm[to],mm[to]=null,to--)}function Nt(t,e){to++,mm[to]=t.current,t.current=e}var li=di(null),Jl=di(null),xs=di(null),bd=di(null);function Ld(t,e){switch(Nt(xs,e),Nt(Jl,t),Nt(li,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?FS(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=FS(e),t=UM(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}La(li),Nt(li,t)}function Mo(){La(li),La(Jl),La(xs)}function gm(t){var e=t.memoizedState;e!==null&&(Do._currentValue=e.memoizedState,Nt(bd,t)),e=li.current;var a=UM(e,t.type);e!==a&&(Nt(Jl,t),Nt(li,a))}function Cd(t){Jl.current===t&&(La(li),La(Jl)),bd.current===t&&(La(bd),Do._currentValue=ur)}var Ep,Cv;function rs(t){if(Ep===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Ep=e&&e[1]||"",Cv=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ep+t+Cv}var Rp=!1;function Dp(t,e){if(!t||Rp)return"";Rp=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(S){var c=S}Reflect.construct(t,[],p)}else{try{p.call()}catch(S){c=S}p=!1;try{var h=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new t}finally{p&&(h!==void 0?Object.defineProperty(t.prototype,"props",h):delete t.prototype.props)}}}else{try{throw Error()}catch(S){c=S}(p=t())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(S){if(S&&c&&typeof S.stack=="string")return[S.stack,c.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),u=o.split(`
`);for(i=n=0;n<l.length&&!l[n].includes("DetermineComponentFrameRoot");)n++;for(;i<u.length&&!u[i].includes("DetermineComponentFrameRoot");)i++;if(n===l.length||i===u.length)for(n=l.length-1,i=u.length-1;1<=n&&0<=i&&l[n]!==u[i];)i--;for(;1<=n&&0<=i;n--,i--)if(l[n]!==u[i]){if(n!==1||i!==1)do if(n--,i--,0>i||l[n]!==u[i]){var f=`
`+l[n].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=n&&0<=i);break}}}finally{Rp=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?rs(a):""}function SA(t,e){switch(t.tag){case 26:case 27:case 5:return rs(t.type);case 16:return rs("Lazy");case 13:return t.child!==e&&e!==null?rs("Suspense Fallback"):rs("Suspense");case 19:return rs("SuspenseList");case 0:case 15:return Dp(t.type,!1);case 11:return Dp(t.type.render,!1);case 1:return Dp(t.type,!0);case 31:return rs("Activity");case 30:return rs("ViewTransition");default:return""}}function Av(t){try{var e="",a=null;do e+=SA(t,a),a=t,t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var xm=Object.prototype.hasOwnProperty,yg=oa.unstable_scheduleCallback,Np=oa.unstable_cancelCallback,yA=oa.unstable_shouldYield,_A=oa.unstable_requestPaint,cn=oa.unstable_now,MA=oa.unstable_getCurrentPriorityLevel,py=oa.unstable_ImmediatePriority,my=oa.unstable_UserBlockingPriority,Ad=oa.unstable_NormalPriority,bA=oa.unstable_LowPriority,gy=oa.unstable_IdlePriority,LA=oa.log,CA=oa.unstable_setDisableYieldValue,hu=null,dn=null;function ds(t){if(typeof LA=="function"&&CA(t),dn&&typeof dn.setStrictMode=="function")try{dn.setStrictMode(hu,t)}catch{}}var fn=Math.clz32?Math.clz32:TA,AA=Math.log,wA=Math.LN2;function TA(t){return t>>>=0,t===0?32:31-(AA(t)/wA|0)|0}var Fc=256,kc=262144,zc=4194304;function ir(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function jd(t,e,a){var n=t.pendingLanes;if(n===0)return 0;var i=0,s=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=n&134217727;return o!==0?(n=o&~s,n!==0?i=ir(n):(r&=o,r!==0?i=ir(r):a||(a=o&~t,a!==0&&(i=ir(a))))):(o=n&~s,o!==0?i=ir(o):r!==0?i=ir(r):a||(a=n&~t,a!==0&&(i=ir(a)))),i===0?0:e!==0&&e!==i&&(e&s)===0&&(s=i&-i,a=e&-e,s>=a||s===32&&(a&4194048)!==0)?e:i}function pu(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function xy(t,e){(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var n=31-fn(a),i=1<<n;e|=t[n],a&=~i}return e}function IA(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vy(){var t=zc;return zc<<=1,(zc&62914560)===0&&(zc=4194304),t}function Pp(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function mu(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function EA(t,e,a,n,i,s){var r=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,u=t.hiddenUpdates;for(a=r&~a;0<a;){var f=31-fn(a),p=1<<f;o[f]=0,l[f]=-1;var c=u[f];if(c!==null)for(u[f]=null,f=0;f<c.length;f++){var h=c[f];h!==null&&(h.lane&=-536870913)}a&=~p}n!==0&&Sy(t,n,0),s!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=s&~(r&~e))}function Sy(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-fn(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|a&261930}function yy(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var n=31-fn(a),i=1<<n;i&e|t[n]&e&&(t[n]|=e),a&=~i}}function _y(t,e){var a=e&-e;return a=(a&42)!==0?1:_g(a),(a&(t.suspendedLanes|e))!==0?0:a}function _g(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Mg(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function My(){var t=gt.p;return t!==0?t:(t=window.event,t===void 0?32:nb(t.type))}function wv(t,e){var a=gt.p;try{return gt.p=t,e()}finally{gt.p=a}}var ki=Math.random().toString(36).slice(2),Ma="__reactFiber$"+ki,tn="__reactProps$"+ki,Uo="__reactContainer$"+ki,Tv="__reactEvents$"+ki,RA="__reactListeners$"+ki,DA="__reactHandles$"+ki,Iv="__reactResources$"+ki,gu="__reactMarker$"+ki,wd="__reactLoad$"+ki;function $d(t){delete t[Ma],delete t[tn],delete t[RA],delete t[DA]}function or(t){var e;if(e=t[Ma])return e;for(var a=t.parentNode;a;){if(e=a[Uo]||a[Ma]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=XS(t);t!==null;){if(a=t[Ma])return a;t=XS(t)}return e}t=a,a=t.parentNode}return null}function Oo(t){if(t=t[Ma]||t[Uo]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Pl(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(te(33))}function fo(t){var e=t[Iv];return e||(e=t[Iv]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ha(t){t[gu]=!0}function by(t){t[wd]=void 0}var Ly=new Set,Cy={};function br(t,e){bo(t,e),bo(t+"Capture",e)}function bo(t,e){for(Cy[t]=e,t=0;t<e.length;t++)Ly.add(e[t])}var NA=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ev={},Rv={};function PA(t){return xm.call(Rv,t)?!0:xm.call(Ev,t)?!1:NA.test(t)?Rv[t]=!0:(Ev[t]=!0,!1)}var ft=!1;function Dv(){var t=ft;return ft=!1,t}function id(t,e,a){if(PA(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,a)}}function Hc(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,a)}}function wi(t,e,a,n){if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,n)}}function rn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ay(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function UA(t,e,a){var n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(r){a=""+r,s.call(this,r)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function vm(t){if(!t._valueTracker){var e=Ay(t)?"checked":"value";t._valueTracker=UA(t,e,""+t[e])}}function wy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=Ay(t)?t.checked?"true":"false":t.value),t=n,t!==a?(e.setValue(t),!0):!1}var OA=/[\n"\\]/g;function wn(t){return t.replace(OA,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Sm(t,e,a,n,i,s,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+rn(e)):t.value!==""+rn(e)&&(t.value=""+rn(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?r==="number"&&t.value==e?Up(t,rn(t.value)):Up(t,rn(e)):a!=null?Up(t,rn(a)):n!=null&&t.removeAttribute("value"),i==null&&s!=null&&(t.defaultChecked=!!s),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+rn(o):t.removeAttribute("name")}function Ty(t,e,a,n,i,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||e!=null)){vm(t);return}a=a!=null?""+rn(a):"",e=e!=null?""+rn(e):a,o||e===t.value||(t.value=e),t.defaultValue=e}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=o?t.checked:!!n,t.defaultChecked=!!n,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),vm(t)}function Up(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function ho(t,e,a,n){if(t=t.options,e){e={};for(var i=0;i<a.length;i++)e["$"+a[i]]=!0;for(a=0;a<t.length;a++)i=e.hasOwnProperty("$"+t[a].value),t[a].selected!==i&&(t[a].selected=i),i&&n&&(t[a].defaultSelected=!0)}else{for(a=""+rn(a),e=null,i=0;i<t.length;i++){if(t[i].value===a){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Iy(t,e,a){if(e!=null&&(e=""+rn(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+rn(a):""}function Ey(t,e,a,n){if(e==null){if(n!=null){if(a!=null)throw Error(te(92));if(Nl(n)){if(1<n.length)throw Error(te(93));n=n[0]}a=n}a==null&&(a=""),e=a}a=rn(e),t.defaultValue=a,n=t.textContent,n===a&&n!==""&&n!==null&&(t.value=n),vm(t)}function Lo(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var BA=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nv(t,e,a){var n=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,a):typeof a!="number"||a===0||BA.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Ry(t,e,a){if(e!=null&&typeof e!="object")throw Error(te(62));if(t=t.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="",ft=!0);for(var i in e)n=e[i],e.hasOwnProperty(i)&&a[i]!==n&&(Nv(t,i,n),ft=!0)}else for(var s in e)e.hasOwnProperty(s)&&Nv(t,s,e[s])}function bg(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var FA=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kA=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sd(t){return kA.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function si(){}var ym=null;function Lg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ao=null,po=null;function Pv(t){var e=Oo(t);if(e&&(t=e.stateNode)){var a=t[tn]||null;e:switch(t=e.stateNode,e.type){case"input":if(Sm(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+wn(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var i=n[tn]||null;if(!i)throw Error(te(90));Sm(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<a.length;e++)n=a[e],n.form===t.form&&wy(n)}break e;case"textarea":Iy(t,a.value,a.defaultValue);break e;case"select":e=a.value,e!=null&&ho(t,!!a.multiple,e,!1)}}}var Op=!1;function Dy(t,e,a){if(Op)return t(e,a);Op=!0;try{var n=t(e);return n}finally{if(Op=!1,(ao!==null||po!==null)&&(pf(),ao&&(e=ao,t=po,po=ao=null,Pv(e),t)))for(e=0;e<t.length;e++)Pv(t[e])}}function Ql(t,e){var a=t.stateNode;if(a===null)return null;var n=a[tn]||null;if(n===null)return null;a=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(te(231,e,typeof a));return a}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_m=!1;if(Ni)try{Yr={},Object.defineProperty(Yr,"passive",{get:function(){_m=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{_m=!1}var Yr,fs=null,Cg=null,rd=null;function Ny(){if(rd)return rd;var t,e=Cg,a=e.length,n,i="value"in fs?fs.value:fs.textContent,s=i.length;for(t=0;t<a&&e[t]===i[t];t++);var r=a-t;for(n=1;n<=r&&e[a-n]===i[s-n];n++);return rd=i.slice(t,1<n?1-n:void 0)}function od(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gc(){return!0}function Uv(){return!1}function Va(t){function e(a,n,i,s,r){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(a=t[o],this[o]=a?a(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Gc:Uv,this.isPropagationStopped=Uv,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Gc)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Gc)},persist:function(){},isPersistent:Gc}),e}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ef=Va(Ds),xu=Tt({},Ds,{view:0,detail:0}),zA=Va(xu),Bp,Fp,wl,tf=Tt({},xu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ag,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wl&&(wl&&t.type==="mousemove"?(Bp=t.screenX-wl.screenX,Fp=t.screenY-wl.screenY):Fp=Bp=0,wl=t),Bp)},movementY:function(t){return"movementY"in t?t.movementY:Fp}}),Ov=Va(tf),HA=Tt({},tf,{dataTransfer:0}),GA=Va(HA),VA=Tt({},xu,{relatedTarget:0}),kp=Va(VA),qA=Tt({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),WA=Va(qA),XA=Tt({},Ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),YA=Va(XA),ZA=Tt({},Ds,{data:0}),Bv=Va(ZA),KA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},JA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=QA[t])?!!e[t]:!1}function Ag(){return jA}var $A=Tt({},xu,{key:function(t){if(t.key){var e=KA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=od(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?JA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ag,charCode:function(t){return t.type==="keypress"?od(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?od(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ew=Va($A),tw=Tt({},tf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fv=Va(tw),aw=Tt({},Ds,{submitter:0}),nw=Va(aw),iw=Tt({},xu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ag}),sw=Va(iw),rw=Tt({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),ow=Va(rw),lw=Tt({},tf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uw=Va(lw),cw=Tt({},Ds,{newState:0,oldState:0,source:0}),dw=Va(cw),fw=[9,13,27,32],wg=Ni&&"CompositionEvent"in window,Bl=null;Ni&&"documentMode"in document&&(Bl=document.documentMode);var hw=Ni&&"TextEvent"in window&&!Bl,Py=Ni&&(!wg||Bl&&8<Bl&&11>=Bl),kv=" ",zv=!1;function Uy(t,e){switch(t){case"keyup":return fw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var no=!1;function pw(t,e){switch(t){case"compositionend":return Oy(e);case"keypress":return e.which!==32?null:(zv=!0,kv);case"textInput":return t=e.data,t===kv&&zv?null:t;default:return null}}function mw(t,e){if(no)return t==="compositionend"||!wg&&Uy(t,e)?(t=Ny(),rd=Cg=fs=null,no=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Py&&e.locale!=="ko"?null:e.data;default:return null}}var gw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gw[t.type]:e==="textarea"}function By(t,e,a,n){ao?po?po.push(n):po=[n]:ao=n,e=Kd(e,"onChange"),0<e.length&&(a=new ef("onChange","change",null,a,n),t.push({event:a,listeners:e}))}var Fl=null,jl=null;function xw(t){DM(t,0)}function af(t){var e=Pl(t);if(wy(e))return t}function Gv(t,e){if(t==="change")return e}var Fy=!1;Ni&&(Ni?(qc="oninput"in document,qc||(zp=document.createElement("div"),zp.setAttribute("oninput","return;"),qc=typeof zp.oninput=="function"),Vc=qc):Vc=!1,Fy=Vc&&(!document.documentMode||9<document.documentMode));var Vc,qc,zp;function Vv(){Fl&&(Fl.detachEvent("onpropertychange",ky),jl=Fl=null)}function ky(t){if(t.propertyName==="value"&&af(jl)){var e=[];By(e,jl,t,Lg(t)),Dy(xw,e)}}function vw(t,e,a){t==="focusin"?(Vv(),Fl=e,jl=a,Fl.attachEvent("onpropertychange",ky)):t==="focusout"&&Vv()}function Sw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return af(jl)}function yw(t,e){if(t==="click")return af(e)}function _w(t,e){if(t==="input"||t==="change")return af(e)}function Mw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pn=typeof Object.is=="function"?Object.is:Mw;function $l(t,e){if(pn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!xm.call(e,i)||!pn(t[i],e[i]))return!1}return!0}function Mm(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wv(t,e){var a=qv(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=e&&n>=e)return{node:a,offset:e-t};t=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qv(a)}}function zy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Hy(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Mm(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Mm(t.document)}return e}function Tg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var bw=Ni&&"documentMode"in document&&11>=document.documentMode,io=null,bm=null,kl=null,Lm=!1;function Xv(t,e,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lm||io==null||io!==Mm(n)||(n=io,"selectionStart"in n&&Tg(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),kl&&$l(kl,n)||(kl=n,n=Kd(bm,"onSelect"),0<n.length&&(e=new ef("onSelect","select",null,e,a),t.push({event:e,listeners:n}),e.target=io)))}function ar(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var so={animationend:ar("Animation","AnimationEnd"),animationiteration:ar("Animation","AnimationIteration"),animationstart:ar("Animation","AnimationStart"),transitionrun:ar("Transition","TransitionRun"),transitionstart:ar("Transition","TransitionStart"),transitioncancel:ar("Transition","TransitionCancel"),transitionend:ar("Transition","TransitionEnd")},Hp={},Gy={};Ni&&(Gy=document.createElement("div").style,"AnimationEvent"in window||(delete so.animationend.animation,delete so.animationiteration.animation,delete so.animationstart.animation),"TransitionEvent"in window||delete so.transitionend.transition);function Lr(t){if(Hp[t])return Hp[t];if(!so[t])return t;var e=so[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Gy)return Hp[t]=e[a];return t}var Vy=Lr("animationend"),qy=Lr("animationiteration"),Wy=Lr("animationstart"),Lw=Lr("transitionrun"),Cw=Lr("transitionstart"),Aw=Lr("transitioncancel"),Xy=Lr("transitionend"),Yy=new Map,Cm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cm.push("scrollEnd");function Gn(t,e){Yy.set(t,e),br(e,[t])}var ww=0;function Pi(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=Hn.identifierPrefix;var a=ww++;return t="_"+t+"t_"+a.toString(32)+"_",e.autoName=t}function Yv(t){if(t==null||typeof t=="string")return t;var e=null,a=_o;if(a!==null)for(var n=0;n<a.length;n++){var i=t[a[n]];if(i!=null){if(i==="none")return"none";e=e==null?i:e+(" "+i)}}return e??t.default}function zi(t,e){return t=Yv(t),e=Yv(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var Td=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ln=[],ro=0,Ig=0;function nf(){for(var t=ro,e=Ig=ro=0;e<t;){var a=Ln[e];Ln[e++]=null;var n=Ln[e];Ln[e++]=null;var i=Ln[e];Ln[e++]=null;var s=Ln[e];if(Ln[e++]=null,n!==null&&i!==null){var r=n.pending;r===null?i.next=i:(i.next=r.next,r.next=i),n.pending=i}s!==0&&Zy(a,i,s)}}function sf(t,e,a,n){Ln[ro++]=t,Ln[ro++]=e,Ln[ro++]=a,Ln[ro++]=n,Ig|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function Eg(t,e,a,n){return sf(t,e,a,n),Id(t)}function Cr(t,e){return sf(t,null,null,e),Id(t)}function Zy(t,e,a){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a);for(var i=!1,s=t.return;s!==null;)s.childLanes|=a,n=s.alternate,n!==null&&(n.childLanes|=a),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(i=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,i&&e!==null&&(i=31-fn(a),t=s.hiddenUpdates,n=t[i],n===null?t[i]=[e]:n.push(e),e.lane=a|536870912),s):null}function Id(t){if(50<Kl)throw Kl=0,xd=null,Error(te(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var oo={};function Tw(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ja(t,e,a,n){return new Tw(t,e,a,n)}function Rg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ri(t,e){var a=t.alternate;return a===null?(a=ja(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Ky(t,e){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ld(t,e,a,n,i,s){var r=0;if(n=t,typeof n=="function")Rg(n)&&(r=1);else if(typeof n=="string")r=eI(t,a,li.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(n){case fm:return t=ja(31,a,e,i),t.elementType=fm,t.lanes=s,t;case eo:return cr(a.children,i,s,e);case fy:r=8,i|=24;break;case um:return t=ja(12,a,e,i|2),t.elementType=um,t.lanes=s,t;case cm:return t=ja(13,a,e,i),t.elementType=cm,t.lanes=s,t;case dm:return t=ja(19,a,e,i),t.elementType=dm,t.lanes=s,t;case mA:case hm:return t=i|32,t=ja(30,a,e,t),t.elementType=hm,t.lanes=s,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ii:r=10;break e;case hy:r=9;break e;case vg:r=11;break e;case Sg:r=14;break e;case ls:r=16,n=null;break e}r=29,a=Error(te(130,t===null?"null":typeof t,"")),n=null}return e=ja(r,a,e,i),e.elementType=t,e.type=n,e.lanes=s,e}function cr(t,e,a,n){return t=ja(7,t,n,e),t.lanes=a,t}function Gp(t,e,a){return t=ja(6,t,null,e),t.lanes=a,t}function Jy(t){var e=ja(18,null,null,0);return e.stateNode=t,e}function Vp(t,e,a){return e=ja(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Zv=new WeakMap;function Tn(t,e){if(typeof t=="object"&&t!==null){var a=Zv.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Av(e)},Zv.set(t,e),e)}return{value:t,source:e,stack:Av(e)}}var lo=[],uo=0,Ed=null,eu=0,Cn=[],An=0,ws=null,ri=1,oi="";function Ii(t,e){lo[uo++]=eu,lo[uo++]=Ed,Ed=t,eu=e}function Qy(t,e,a){Cn[An++]=ri,Cn[An++]=oi,Cn[An++]=ws,ws=t;var n=ri;t=oi;var i=32-fn(n)-1;n&=~(1<<i),a+=1;var s=32-fn(e)+i;if(30<s){var r=i-i%5;s=(n&(1<<r)-1).toString(32),n>>=r,i-=r,ri=1<<32-fn(e)+i|a<<i|n,oi=s+t}else ri=1<<s|a<<i|n,oi=t}function rf(t){t.return!==null&&(Ii(t,1),Qy(t,1,0))}function Dg(t){for(;t===Ed;)Ed=lo[--uo],lo[uo]=null,eu=lo[--uo],lo[uo]=null;for(;t===ws;)ws=Cn[--An],Cn[An]=null,oi=Cn[--An],Cn[An]=null,ri=Cn[--An],Cn[An]=null}function jy(t,e){Cn[An++]=ri,Cn[An++]=oi,Cn[An++]=ws,ri=e.id,oi=e.overflow,ws=t}var pa=null,Dt=null,$e=!1,vs=null,In=!1,Am=Error(te(519));function Ts(t){var e=Error(te(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw tu(Tn(e,t)),Am}function Kv(t){var e=t.stateNode,a=t.type,n=t.memoizedProps;switch(e[Ma]=t,e[tn]=n,a){case"dialog":at("cancel",e),at("close",e);break;case"iframe":case"object":case"embed":at("load",e);break;case"video":case"audio":for(a=0;a<su.length;a++)at(su[a],e);break;case"source":at("error",e);break;case"img":case"image":case"link":at("error",e),at("load",e);break;case"details":at("toggle",e);break;case"input":at("invalid",e),Ty(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":at("invalid",e);break;case"textarea":at("invalid",e),Ey(e,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||n.suppressHydrationWarning===!0||PM(e.textContent,a)?(n.popover!=null&&(at("beforetoggle",e),at("toggle",e)),n.onScroll!=null&&at("scroll",e),n.onScrollEnd!=null&&at("scrollend",e),n.onClick!=null&&(e.onclick=si),e=!0):e=!1,e||Ts(t,!0)}function Rd(t){for(pa=t.return;pa;)switch(pa.tag){case 5:case 31:case 13:In=!1;return;case 27:case 3:In=!0;return;default:pa=pa.return}}function Zr(t){if(t!==pa)return!1;if(!$e)return Rd(t),$e=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||cg(t.type,t.memoizedProps)),a=!a),a&&Dt&&Ts(t),Rd(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));Dt=WS(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));Dt=WS(t)}else e===27?(e=Dt,Ns(t.type)?(t=pg,pg=null,Dt=t):Dt=e):Dt=pa?En(t.stateNode.nextSibling):null;return!0}function pr(){Dt=pa=null,$e=!1}function qp(){var t=vs;return t!==null&&(Ja===null?Ja=t:Ja.push.apply(Ja,t),vs=null),t}function tu(t){vs===null?vs=[t]:vs.push(t)}var wm=di(null),Ar=null,Ei=null;function hs(t,e,a){Nt(wm,e._currentValue),e._currentValue=a}function Di(t){t._currentValue=wm.current,La(wm)}function ud(t,e,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===a)break;t=t.return}}function Tm(t,e,a,n){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){var r=i.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=i;for(var l=0;l<e.length;l++)if(o.context===e[l]){s.lanes|=a,o=s.alternate,o!==null&&(o.lanes|=a),ud(s.return,a,t),n||(r=null);break e}s=o.next}}else if(i.tag===18){if(r=i.return,r===null)throw Error(te(341));r.lanes|=a,s=r.alternate,s!==null&&(s.lanes|=a),ud(r,a,t),r=null}else i.tag===13&&i.memoizedState!==null&&i.memoizedState.dehydrated===null?(i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),ud(i.return,a,t),r=i.child,r=r!==null?r.sibling:null):r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===t){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}}function mr(t,e,a,n){t=null;for(var i=e,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var r=i.alternate;if(r===null)throw Error(te(387));if(r=r.memoizedProps,r!==null){var o=i.type;pn(i.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(i===bd.current){if(r=i.alternate,r===null)throw Error(te(387));r.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Do):t=[Do])}i=i.return}return t!==null&&Tm(e,t,a,n),e.flags|=262144,t!==null}function Dd(t){for(t=t.firstContext;t!==null;){if(!pn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function gr(t){Ar=t,Ei=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ba(t){return $y(Ar,t)}function Wc(t,e){return Ar===null&&gr(t),$y(t,e)}function $y(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Ei===null){if(t===null)throw Error(te(308));Ei=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ei=Ei.next=e;return a}var Iw=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},Ew=oa.unstable_scheduleCallback,Rw=oa.unstable_NormalPriority,ta={$$typeof:ii,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ng(){return{controller:new Iw,data:new Map,refCount:0}}function vu(t){t.refCount--,t.refCount===0&&Ew(Rw,function(){t.controller.abort()})}function Jv(t,e){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<e.length;t++){var n=e[t];a.indexOf(n)===-1&&a.push(n)}}}var Ul=null;function Dw(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var zl=null,Im=0,xr=0,mo=null;function Nw(t,e){if(zl===null){var a=zl=[];Im=0,xr=ox(),mo={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Im++,e.then(Qv,Qv),e}function Qv(){if(--Im===0&&(Ul=null,zl!==null)){mo!==null&&(mo.status="fulfilled");var t=zl;zl=null,xr=0,mo=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Pw(t,e){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var i=0;i<a.length;i++)(0,a[i])(e)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var jv=ze.S;ze.S=function(t,e){if(xM=cn(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Nw(t,e),Ul!==null)for(var a=Io;a!==null;)Jv(a,Ul),a=a.next;if(a=t.types,a!==null){for(var n=Io;n!==null;)Jv(n,a),n=n.next;if(xr!==0){n=Ul,n===null&&(n=Ul=[]);for(var i=0;i<a.length;i++){var s=a[i];n.indexOf(s)===-1&&n.push(s)}}}jv!==null&&jv(t,e)};var dr=di(null);function Pg(){var t=dr.current;return t!==null?t:wt.pooledCache}function cd(t,e){e===null?Nt(dr,dr.current):Nt(dr,e.pool)}function e_(){var t=Pg();return t===null?null:{parent:ta._currentValue,pool:t}}var Bo=Error(te(460)),Ug=Error(te(474)),of=Error(te(542)),Nd={then:function(){}};function $v(t){return t=t.status,t==="fulfilled"||t==="rejected"}function t_(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(si,si),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,tS(t),t===void 0&&!("reason"in e)?Error(te(600)):t;default:if(typeof e.status=="string")e.then(si,si);else{if(t=wt,t!==null&&100<t.shellSuspendCounter)throw Error(te(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=n}},function(n){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,tS(t),t}throw fr=e,Bo}}function sr(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(fr=a,Bo):a}}var fr=null;function eS(){if(fr===null)throw Error(te(459));var t=fr;return fr=null,t}function tS(t){if(t===Bo||t===of)throw Error(te(483))}var go=null,au=0;function Xc(t){var e=au;return au+=1,go===null&&(go=[]),t_(go,t,e)}function ss(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Yc(t,e){throw e.$$typeof===pA?Error(te(525)):(t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function a_(t){function e(d,m){if(t){var y=d.deletions;y===null?(d.deletions=[m],d.flags|=16):y.push(m)}}function a(d,m){if(!t)return null;for(;m!==null;)e(d,m),m=m.sibling;return null}function n(d){for(var m=new Map;d!==null;)d.key===null?m.set(d.index,d):m.set(d.key,d),d=d.sibling;return m}function i(d,m){return d=Ri(d,m),d.index=0,d.sibling=null,d}function s(d,m,y){return d.index=y,t?(y=d.alternate,y!==null?(y=y.index,y<m?(d.flags|=2,m):y):(d.flags|=134217730,m)):(d.flags|=1048576,m)}function r(d){return t&&d.alternate===null&&(d.flags|=134217730),d}function o(d,m,y,_){return m===null||m.tag!==6?(m=Gp(y,d.mode,_),m.return=d,m):(m=i(m,y),m.return=d,m)}function l(d,m,y,_){var A=y.type;return A===eo?(d=f(d,m,y.props.children,_,y.key),ss(d,y),d):m!==null&&(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ls&&sr(A)===m.type)?(m=i(m,y.props),ss(m,y),m.return=d,m):(m=ld(y.type,y.key,y.props,null,d.mode,_),ss(m,y),m.return=d,m)}function u(d,m,y,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Vp(y,d.mode,_),m.return=d,m):(m=i(m,y.children||[]),m.return=d,m)}function f(d,m,y,_,A){return m===null||m.tag!==7?(m=cr(y,d.mode,_,A),m.return=d,m):(m=i(m,y),m.return=d,m)}function p(d,m,y){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Gp(""+m,d.mode,y),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Bc:return y=ld(m.type,m.key,m.props,null,d.mode,y),ss(y,m),y.return=d,y;case Dl:return m=Vp(m,d.mode,y),m.return=d,m;case ls:return m=sr(m),p(d,m,y)}if(Nl(m)||Al(m))return m=cr(m,d.mode,y,null),m.return=d,m;if(typeof m.then=="function")return p(d,Xc(m),y);if(m.$$typeof===ii)return p(d,Wc(d,m),y);Yc(d,m)}return null}function c(d,m,y,_){var A=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return A!==null?null:o(d,m,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Bc:return y.key===A?l(d,m,y,_):null;case Dl:return y.key===A?u(d,m,y,_):null;case ls:return y=sr(y),c(d,m,y,_)}if(Nl(y)||Al(y))return A!==null?null:f(d,m,y,_,null);if(typeof y.then=="function")return c(d,m,Xc(y),_);if(y.$$typeof===ii)return c(d,m,Wc(d,y),_);Yc(d,y)}return null}function h(d,m,y,_,A){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return d=d.get(y)||null,o(m,d,""+_,A);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Bc:return d=d.get(_.key===null?y:_.key)||null,l(m,d,_,A);case Dl:return d=d.get(_.key===null?y:_.key)||null,u(m,d,_,A);case ls:return _=sr(_),h(d,m,y,_,A)}if(Nl(_)||Al(_))return d=d.get(y)||null,f(m,d,_,A,null);if(typeof _.then=="function")return h(d,m,y,Xc(_),A);if(_.$$typeof===ii)return h(d,m,y,Wc(m,_),A);Yc(m,_)}return null}function S(d,m,y,_){for(var A=null,w=null,x=m,L=m=0,P=null;x!==null&&L<y.length;L++){x.index>L?(P=x,x=null):P=x.sibling;var E=c(d,x,y[L],_);if(E===null){x===null&&(x=P);break}t&&x&&E.alternate===null&&e(d,x),m=s(E,m,L),w===null?A=E:w.sibling=E,w=E,x=P}if(L===y.length)return a(d,x),$e&&Ii(d,L),A;if(x===null){for(;L<y.length;L++)x=p(d,y[L],_),x!==null&&(m=s(x,m,L),w===null?A=x:w.sibling=x,w=x);return $e&&Ii(d,L),A}for(x=n(x);L<y.length;L++)P=h(x,d,L,y[L],_),P!==null&&(t&&(E=P.alternate,E!==null&&x.delete(E.key===null?L:E.key)),m=s(P,m,L),w===null?A=P:w.sibling=P,w=P);return t&&x.forEach(function(U){return e(d,U)}),$e&&Ii(d,L),A}function b(d,m,y,_){if(y==null)throw Error(te(151));for(var A=null,w=null,x=m,L=m=0,P=null,E=y.next();x!==null&&!E.done;L++,E=y.next()){x.index>L?(P=x,x=null):P=x.sibling;var U=c(d,x,E.value,_);if(U===null){x===null&&(x=P);break}t&&x&&U.alternate===null&&e(d,x),m=s(U,m,L),w===null?A=U:w.sibling=U,w=U,x=P}if(E.done)return a(d,x),$e&&Ii(d,L),A;if(x===null){for(;!E.done;L++,E=y.next())E=p(d,E.value,_),E!==null&&(m=s(E,m,L),w===null?A=E:w.sibling=E,w=E);return $e&&Ii(d,L),A}for(x=n(x);!E.done;L++,E=y.next())E=h(x,d,L,E.value,_),E!==null&&(t&&(P=E.alternate,P!==null&&x.delete(P.key===null?L:P.key)),m=s(E,m,L),w===null?A=E:w.sibling=E,w=E);return t&&x.forEach(function(H){return e(d,H)}),$e&&Ii(d,L),A}function g(d,m,y,_){if(typeof y=="object"&&y!==null&&y.type===eo&&y.key===null&&y.props.ref===void 0&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Bc:e:{for(var A=y.key;m!==null;){if(m.key===A){if(A=y.type,A===eo){if(m.tag===7){a(d,m.sibling),_=i(m,y.props.children),ss(_,y),_.return=d,d=_;break e}}else if(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ls&&sr(A)===m.type){a(d,m.sibling),_=i(m,y.props),ss(_,y),_.return=d,d=_;break e}a(d,m);break}else e(d,m);m=m.sibling}y.type===eo?(_=cr(y.props.children,d.mode,_,y.key),ss(_,y),_.return=d,d=_):(_=ld(y.type,y.key,y.props,null,d.mode,_),ss(_,y),_.return=d,d=_)}return r(d);case Dl:e:{for(A=y.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){a(d,m.sibling),_=i(m,y.children||[]),_.return=d,d=_;break e}else{a(d,m);break}else e(d,m);m=m.sibling}_=Vp(y,d.mode,_),_.return=d,d=_}return r(d);case ls:return y=sr(y),g(d,m,y,_)}if(Nl(y))return S(d,m,y,_);if(Al(y)){if(A=Al(y),typeof A!="function")throw Error(te(150));return y=A.call(y),b(d,m,y,_)}if(typeof y.then=="function")return g(d,m,Xc(y),_);if(y.$$typeof===ii)return g(d,m,Wc(d,y),_);Yc(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,m!==null&&m.tag===6?(a(d,m.sibling),_=i(m,y),_.return=d,d=_):(a(d,m),_=Gp(y,d.mode,_),_.return=d,d=_),r(d)):a(d,m)}return function(d,m,y,_){try{au=0;var A=g(d,m,y,_);return go=null,A}catch(x){if(x===Bo||x===of)throw x;var w=ja(29,x,null,d.mode);return w.lanes=_,w.return=d,w}}}var vr=a_(!0),n_=a_(!1),us=!1;function Og(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Em(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ss(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ys(t,e,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(mt&2)!==0){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,e=Id(t),Zy(t,null,a),e}return sf(t,n,e,a),Id(t)}function Hl(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,yy(t,a)}}function Wp(t,e){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?i=s=r:s=s.next=r,a=a.next}while(a!==null);s===null?i=s=e:s=s.next=e}else i=s=e;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Rm=!1;function Gl(){if(Rm){var t=mo;if(t!==null)throw t}}function Vl(t,e,a,n){Rm=!1;var i=t.updateQueue;us=!1;var s=i.firstBaseUpdate,r=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,u=l.next;l.next=null,r===null?s=u:r.next=u,r=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=u:o.next=u,f.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;r=0,f=u=l=null,o=s;do{var c=o.lane&-536870913,h=c!==o.lane;if(h?(rt&c)===c:(n&c)===c){c!==0&&c===xr&&(Rm=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var S=t,b=o;c=e;var g=a;switch(b.tag){case 1:if(S=b.payload,typeof S=="function"){p=S.call(g,p,c);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=b.payload,c=typeof S=="function"?S.call(g,p,c):S,c==null)break e;p=Tt({},p,c);break e;case 2:us=!0}}c=o.callback,c!==null&&(t.flags|=64,h&&(t.flags|=8192),h=i.callbacks,h===null?i.callbacks=[c]:h.push(c))}else h={lane:c,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(u=f=h,l=p):f=f.next=h,r|=c;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;h=o,o=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);f===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,s===null&&(i.shared.lanes=0),Rs|=r,t.lanes=r,t.memoizedState=p}}function i_(t,e){if(typeof t!="function")throw Error(te(191,t));t.call(e)}function s_(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)i_(a[t],e)}var Is=di(null),Pd=di(0);function aS(t,e){t=Fi,Nt(Pd,t),Nt(Is,e),Fi=t|e.baseLanes}function Dm(){Nt(Pd,Fi),Nt(Is,Is.current)}function Bg(){Fi=Pd.current,La(Is),La(Pd)}var wa=di(null),Pa=null;function _s(t){var e=t.alternate;Nt(Ca,Ca.current&1),Nt(wa,t),Pa===null&&(e===null||Is.current!==null||e.memoizedState!==null)&&(Pa=t)}function Nm(t){Nt(Ca,Ca.current),Nt(wa,t),Pa===null&&(Pa=t)}function r_(t){t.tag===22?(Nt(Ca,Ca.current),Nt(wa,t),Pa===null&&(Pa=t)):Ms()}function Ms(){Nt(Ca,Ca.current),Nt(wa,wa.current)}function on(t){La(wa),Pa===t&&(Pa=null),La(Ca)}var Ca=di(0);function nu(t,e){Nt(wa,wa.current),Nt(Ca,e)}function Fg(t){La(Ca),La(wa),Pa===t&&(Pa=null)}function Ud(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||hg(a)||dx(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ui=0,Ke=null,Ct=null,ea=null,Od=!1,xo=!1,Sr=!1,Bd=0,iu=0,vo=null,Uw=0;function Yt(){throw Error(te(321))}function kg(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!pn(t[a],e[a]))return!1;return!0}function zg(t,e,a,n,i,s){return Ui=s,Ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ze.H=t===null||t.memoizedState===null?B_:F_,Sr=!1,s=a(n,i),Sr=!1,xo&&(s=l_(e,a,n,i)),o_(t),s}function o_(t){ze.H=Fd;var e=Ct!==null&&Ct.next!==null;if(Ui=0,ea=Ct=Ke=null,Od=!1,iu=0,vo=null,e)throw Error(te(300));t===null||aa||(t=t.dependencies,t!==null&&Dd(t)&&(aa=!0))}function l_(t,e,a,n){Ke=t;var i=0;do{if(xo&&(vo=null),iu=0,xo=!1,25<=i)throw Error(te(301));if(i+=1,ea=Ct=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}ze.H=Vw,s=e(a,n)}while(xo);return s}function Ow(){var t=ze.H,e=t.useState()[0];return e=typeof e.then=="function"?Su(e):e,t=t.useState()[0],(Ct!==null?Ct.memoizedState:null)!==t&&(Ke.flags|=1024),e}function Hg(){var t=Bd!==0;return Bd=0,t}function Gg(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Vg(t){if(Od){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Od=!1}Ui=0,ea=Ct=Ke=null,xo=!1,iu=Bd=0,vo=null}function Ga(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ea===null?Ke.memoizedState=ea=t:ea=ea.next=t,ea}function Qt(){if(Ct===null){var t=Ke.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=ea===null?Ke.memoizedState:ea.next;if(e!==null)ea=e,Ct=t;else{if(t===null)throw Ke.alternate===null?Error(te(467)):Error(te(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},ea===null?Ke.memoizedState=ea=t:ea=ea.next=t}return ea}function lf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Su(t){var e=iu;return iu+=1,vo===null&&(vo=[]),t=t_(vo,t,e),e=Ke,(ea===null?e.memoizedState:ea.next)===null&&(e=e.alternate,ze.H=e===null||e.memoizedState===null?B_:F_),t}function uf(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Su(t);if(t.$$typeof===xA)return;if(t.$$typeof===ii)return ba(t)}throw Error(te(438,String(t)))}function qg(t){var e=null,a=Ke.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var n=Ke.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=lf(),Ke.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),n=0;n<t;n++)a[n]=gA;return e.index++,a}function Oi(t,e){return typeof e=="function"?e(t):e}function dd(t){var e=Qt();return Wg(e,Ct,t)}function Wg(t,e,a){var n=t.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=a;var i=t.baseQueue,s=n.pending;if(s!==null){if(i!==null){var r=i.next;i.next=s.next,s.next=r}e.baseQueue=i=s,n.pending=null}if(s=t.baseState,i===null)t.memoizedState=s;else{e=i.next;var o=r=null,l=null,u=e,f=!1;do{var p=u.lane&-536870913;if(p!==u.lane?(rt&p)===p:(Ui&p)===p){var c=u.revertLane;if(c===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===xr&&(f=!0);else if((Ui&c)===c){u=u.next,c===xr&&(f=!0);continue}else p={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=p,r=s):l=l.next=p,Ke.lanes|=c,Rs|=c;p=u.action,Sr&&a(s,p),s=u.hasEagerState?u.eagerState:a(s,p)}else c={lane:p,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=c,r=s):l=l.next=c,Ke.lanes|=p,Rs|=p;u=u.next}while(u!==null&&u!==e);if(l===null?r=s:l.next=o,!pn(s,t.memoizedState)&&(aa=!0,f&&(a=mo,a!==null)))throw a;t.memoizedState=s,t.baseState=r,t.baseQueue=l,n.lastRenderedState=s}return i===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function Xp(t){var e=Qt(),a=e.queue;if(a===null)throw Error(te(311));a.lastRenderedReducer=t;var n=a.dispatch,i=a.pending,s=e.memoizedState;if(i!==null){a.pending=null;var r=i=i.next;do s=t(s,r.action),r=r.next;while(r!==i);pn(s,e.memoizedState)||(aa=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),a.lastRenderedState=s}return[s,n]}function u_(t,e,a){var n=Ke,i=Qt(),s=$e;if(s){if(a===void 0)throw Error(te(407));a=a()}else a=e();var r=!pn((Ct||i).memoizedState,a);if(r&&(i.memoizedState=a,aa=!0),i=i.queue,Xg(f_.bind(null,n,i,t),[t]),t=i.getSnapshot!==e||r||ea!==null&&(ea.memoizedState.tag&1)!==0,Co(t?9:8,{destroy:void 0},d_.bind(null,n,i,a,e),null),t){if(n.flags|=2048,wt===null)throw Error(te(349));s||(Ui&127)!==0||c_(n,e,a)}return a}function c_(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=Ke.updateQueue,e===null?(e=lf(),Ke.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function d_(t,e,a,n){e.value=a,e.getSnapshot=n,h_(e)&&p_(t)}function f_(t,e,a){return a(function(){h_(e)&&p_(t)})}function h_(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!pn(t,a)}catch{return!0}}function p_(t){var e=Cr(t,2);e!==null&&$a(e,t,2)}function Pm(t){var e=Ga();if(typeof t=="function"){var a=t;if(t=a(),Sr){ds(!0);try{a()}finally{ds(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:t},e}function m_(t,e,a,n){return t.baseState=a,Wg(t,Ct,typeof n=="function"?n:Oi)}function Bw(t,e,a,n,i){if(df(t))throw Error(te(485));if(t=e.action,t!==null){var s={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};ze.T!==null?a(!0):s.isTransition=!1,n(s),a=e.pending,a===null?(s.next=e.pending=s,g_(e,s)):(s.next=a.next,e.pending=a.next=s)}}function g_(t,e){var a=e.action,n=e.payload,i=t.state;if(e.isTransition){var s=ze.T,r={};r.types=s!==null?s.types:null,ze.T=r;try{var o=a(i,n),l=ze.S;l!==null&&l(r,o),nS(t,e,o)}catch(u){Um(t,e,u)}finally{s!==null&&r.types!==null&&(s.types=r.types),ze.T=s}}else try{s=a(i,n),nS(t,e,s)}catch(u){Um(t,e,u)}}function nS(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){iS(t,e,n)},function(n){return Um(t,e,n)}):iS(t,e,a)}function iS(t,e,a){e.status="fulfilled",e.value=a,x_(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,g_(t,a)))}function Um(t,e,a){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=a,x_(e),e=e.next;while(e!==n)}t.action=null}function x_(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function v_(t,e){return e}function sS(t,e){if($e){var a=wt.formState;if(a!==null){e:{var n=Ke;if($e){if(Dt){t:{for(var i=Dt,s=In;i.nodeType!==8;){if(!s){i=null;break t}if(i=En(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){Dt=En(i.nextSibling),n=i.data==="F!";break e}}Ts(n)}n=!1}n&&(e=a[0])}}return a=Ga(),a.memoizedState=a.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:v_,lastRenderedState:e},a.queue=n,a=P_.bind(null,Ke,n),n.dispatch=a,n=Pm(!1),s=Jg.bind(null,Ke,!1,n.queue),n=Ga(),i={state:e,dispatch:null,action:t,pending:null},n.queue=i,a=Bw.bind(null,Ke,i,s,a),i.dispatch=a,n.memoizedState=t,[e,a,!1]}function rS(t){var e=Qt();return S_(e,Ct,t)}function S_(t,e,a){if(e=Wg(t,e,v_)[0],t=dd(Oi)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=Su(e)}catch(r){throw r===Bo?of:r}else n=e;e=Qt();var i=e.queue,s=i.dispatch;return a!==e.memoizedState&&(Ke.flags|=2048,Co(9,{destroy:void 0},Fw.bind(null,i,a),null)),[n,s,t]}function Fw(t,e){t.action=e}function oS(t){var e=Qt(),a=Ct;if(a!==null)return S_(e,a,t);Qt(),e=e.memoizedState,a=Qt();var n=a.queue.dispatch;return a.memoizedState=t,[e,n,!1]}function Co(t,e,a,n){return t={tag:t,create:a,deps:n,inst:e,next:null},e=Ke.updateQueue,e===null&&(e=lf(),Ke.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,e.lastEffect=t),t}function y_(){return Qt().memoizedState}function fd(t,e,a,n){var i=Ga();Ke.flags|=t,i.memoizedState=Co(1|e,{destroy:void 0},a,n===void 0?null:n)}function cf(t,e,a,n){var i=Qt();n=n===void 0?null:n;var s=i.memoizedState.inst;Ct!==null&&n!==null&&kg(n,Ct.memoizedState.deps)?i.memoizedState=Co(e,s,a,n):(Ke.flags|=t,i.memoizedState=Co(1|e,s,a,n))}function lS(t,e){fd(8390656,8,t,e)}function Xg(t,e){cf(2048,8,t,e)}function kw(t){Ke.flags|=4;var e=Ke.updateQueue;if(e===null)e=lf(),Ke.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function __(t){var e=Qt().memoizedState;return kw({ref:e,nextImpl:t}),function(){if((mt&2)!==0)throw Error(te(440));return e.impl.apply(void 0,arguments)}}function M_(t,e){return cf(4,2,t,e)}function b_(t,e){return cf(4,4,t,e)}function L_(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function C_(t,e,a){a=a!=null?a.concat([t]):null,cf(4,4,L_.bind(null,e,t),a)}function Yg(){}function A_(t,e){var a=Qt();e=e===void 0?null:e;var n=a.memoizedState;return e!==null&&kg(e,n[1])?n[0]:(a.memoizedState=[t,e],t)}function w_(t,e){var a=Qt();e=e===void 0?null:e;var n=a.memoizedState;if(e!==null&&kg(e,n[1]))return n[0];if(n=t(),Sr){ds(!0);try{t()}finally{ds(!1)}}return a.memoizedState=[n,e],n}function Zg(t,e,a){return a===void 0||(Ui&1073741824)!==0&&(rt&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=SM(),Ke.lanes|=t,Rs|=t,a)}function T_(t,e,a,n){return pn(a,e)?a:Is.current!==null?(t=Zg(t,a,n),pn(t,e)||(aa=!0),t):(Ui&106)===0||(Ui&1073741824)!==0&&(rt&261930)===0?(aa=!0,t.memoizedState=a):(t=SM(),Ke.lanes|=t,Rs|=t,e)}function I_(t,e,a,n,i){var s=gt.p;gt.p=s!==0&&8>s?s:8;var r=ze.T,o={};o.types=r!==null?r.types:null,ze.T=o,Jg(t,!1,e,a);try{var l=i(),u=ze.S;if(u!==null&&u(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=Pw(l,n);ql(t,e,f,hn(t))}else ql(t,e,n,hn(t))}catch(p){ql(t,e,{then:function(){},status:"rejected",reason:p},hn())}finally{gt.p=s,r!==null&&o.types!==null&&(r.types=o.types),ze.T=r}}function zw(){}function Om(t,e,a,n){if(t.tag!==5)throw Error(te(476));var i=E_(t).queue;I_(t,i,e,ur,a===null?zw:function(){return R_(t),a(n)})}function E_(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:ur,baseState:ur,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:ur},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function R_(t){var e=E_(t);e.next===null&&(e=t.alternate.memoizedState),ql(t,e.next.queue,{},hn())}function Kg(){return ba(Do)}function D_(){return Qt().memoizedState}function N_(){return Qt().memoizedState}function Hw(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=hn();t=Ss(a);var n=ys(e,t,a);n!==null&&($a(n,e,a),Hl(n,e,a)),e={cache:Ng()},t.payload=e;return}e=e.return}}function Gw(t,e,a){var n=hn();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},df(t)?U_(e,a):(a=Eg(t,e,a,n),a!==null&&($a(a,t,n),O_(a,e,n)))}function P_(t,e,a){var n=hn();ql(t,e,a,n)}function ql(t,e,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(df(t))U_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var r=e.lastRenderedState,o=s(r,a);if(i.hasEagerState=!0,i.eagerState=o,pn(o,r))return sf(t,e,i,0),wt===null&&nf(),!1}catch{}if(a=Eg(t,e,i,n),a!==null)return $a(a,t,n),O_(a,e,n),!0}return!1}function Jg(t,e,a,n){if(n={lane:2,revertLane:ox(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},df(t)){if(e)throw Error(te(479))}else e=Eg(t,a,n,2),e!==null&&$a(e,t,2)}function df(t){var e=t.alternate;return t===Ke||e!==null&&e===Ke}function U_(t,e){xo=Od=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function O_(t,e,a){if((a&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,yy(t,a)}}var Fd={readContext:ba,use:uf,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useLayoutEffect:Yt,useInsertionEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useSyncExternalStore:Yt,useId:Yt,useHostTransitionStatus:Yt,useFormState:Yt,useActionState:Yt,useOptimistic:Yt,useMemoCache:Yt,useCacheRefresh:Yt,useEffectEvent:Yt},B_={readContext:ba,use:uf,useCallback:function(t,e){return Ga().memoizedState=[t,e===void 0?null:e],t},useContext:ba,useEffect:lS,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,fd(4194308,4,L_.bind(null,e,t),a)},useLayoutEffect:function(t,e){return fd(4194308,4,t,e)},useInsertionEffect:function(t,e){fd(4,2,t,e)},useMemo:function(t,e){var a=Ga();e=e===void 0?null:e;var n=t();if(Sr){ds(!0);try{t()}finally{ds(!1)}}return a.memoizedState=[n,e],n},useReducer:function(t,e,a){var n=Ga();if(a!==void 0){var i=a(e);if(Sr){ds(!0);try{a(e)}finally{ds(!1)}}}else i=e;return n.memoizedState=n.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},n.queue=t,t=t.dispatch=Gw.bind(null,Ke,t),[n.memoizedState,t]},useRef:function(t){var e=Ga();return t={current:t},e.memoizedState=t},useState:function(t){t=Pm(t);var e=t.queue,a=P_.bind(null,Ke,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Yg,useDeferredValue:function(t,e){var a=Ga();return Zg(a,t,e)},useTransition:function(){var t=Pm(!1);return t=I_.bind(null,Ke,t.queue,!0,!1),Ga().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var n=Ke,i=Ga();if($e){if(a===void 0)throw Error(te(407));a=a()}else{if(a=e(),wt===null)throw Error(te(349));(rt&127)!==0||c_(n,e,a)}i.memoizedState=a;var s={value:a,getSnapshot:e};return i.queue=s,lS(f_.bind(null,n,s,t),[t]),n.flags|=2048,Co(9,{destroy:void 0},d_.bind(null,n,s,a,e),null),a},useId:function(){var t=Ga(),e=wt.identifierPrefix;if($e){var a=oi,n=ri;a=(n&~(1<<32-fn(n)-1)).toString(32)+a,e="_"+e+"R_"+a,a=Bd++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=Uw++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Kg,useFormState:sS,useActionState:sS,useOptimistic:function(t){var e=Ga();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Jg.bind(null,Ke,!0,a),a.dispatch=e,[t,e]},useMemoCache:qg,useCacheRefresh:function(){return Ga().memoizedState=Hw.bind(null,Ke)},useEffectEvent:function(t){var e=Ga(),a={impl:t};return e.memoizedState=a,function(){if((mt&2)!==0)throw Error(te(440));return a.impl.apply(void 0,arguments)}}},F_={readContext:ba,use:uf,useCallback:A_,useContext:ba,useEffect:Xg,useImperativeHandle:C_,useInsertionEffect:M_,useLayoutEffect:b_,useMemo:w_,useReducer:dd,useRef:y_,useState:function(){return dd(Oi)},useDebugValue:Yg,useDeferredValue:function(t,e){var a=Qt();return T_(a,Ct.memoizedState,t,e)},useTransition:function(){var t=dd(Oi)[0],e=Qt().memoizedState;return[typeof t=="boolean"?t:Su(t),e]},useSyncExternalStore:u_,useId:D_,useHostTransitionStatus:Kg,useFormState:rS,useActionState:rS,useOptimistic:function(t,e){var a=Qt();return m_(a,Ct,t,e)},useMemoCache:qg,useCacheRefresh:N_,useEffectEvent:__},Vw={readContext:ba,use:uf,useCallback:A_,useContext:ba,useEffect:Xg,useImperativeHandle:C_,useInsertionEffect:M_,useLayoutEffect:b_,useMemo:w_,useReducer:Xp,useRef:y_,useState:function(){return Xp(Oi)},useDebugValue:Yg,useDeferredValue:function(t,e){var a=Qt();return Ct===null?Zg(a,t,e):T_(a,Ct.memoizedState,t,e)},useTransition:function(){var t=Xp(Oi)[0],e=Qt().memoizedState;return[typeof t=="boolean"?t:Su(t),e]},useSyncExternalStore:u_,useId:D_,useHostTransitionStatus:Kg,useFormState:oS,useActionState:oS,useOptimistic:function(t,e){var a=Qt();return Ct!==null?m_(a,Ct,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:qg,useCacheRefresh:N_,useEffectEvent:__};function Yp(t,e,a,n){e=t.memoizedState,a=a(n,e),a=a==null?e:Tt({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Bm={enqueueSetState:function(t,e,a){t=t._reactInternals;var n=hn(),i=Ss(n);i.payload=e,a!=null&&(i.callback=a),e=ys(t,i,n),e!==null&&($a(e,t,n),Hl(e,t,n))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var n=hn(),i=Ss(n);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=ys(t,i,n),e!==null&&($a(e,t,n),Hl(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=hn(),n=Ss(a);n.tag=2,e!=null&&(n.callback=e),e=ys(t,n,a),e!==null&&($a(e,t,a),Hl(e,t,a))}};function uS(t,e,a,n,i,s,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,s,r):e.prototype&&e.prototype.isPureReactComponent?!$l(a,n)||!$l(i,s):!0}function cS(t,e,a,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&Bm.enqueueReplaceState(e,e.state,null)}function yr(t,e){var a=e;if("ref"in e){a={};for(var n in e)n!=="ref"&&(a[n]=e[n])}if(t=t.defaultProps){a===e&&(a=Tt({},a));for(var i in t)a[i]===void 0&&(a[i]=t[i])}return a}function k_(t){Td(t)}function z_(t){console.error(t)}function H_(t){Td(t)}function kd(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function dS(t,e,a){try{var n=t.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Fm(t,e,a){return a=Ss(a),a.tag=3,a.payload={element:null},a.callback=function(){kd(t,e)},a}function G_(t){return t=Ss(t),t.tag=3,t}function V_(t,e,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var s=n.value;t.payload=function(){return i(s)},t.callback=function(){dS(e,a,n)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){dS(e,a,n),typeof i!="function"&&(bs===null?bs=new Set([this]):bs.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})})}function qw(t,e,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=a.alternate,e!==null&&mr(e,a,i,!0),a=wa.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Pa===null?Yd():a.alternate===null&&Zt===0&&(Zt=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Nd?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([n]):e.add(n),em(t,n,i)),!1;case 22:return a.flags|=65536,n===Nd?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([n]):a.add(n)),em(t,n,i)),!1}throw Error(te(435,a.tag))}return em(t,n,i),Yd(),!1}if($e)return e=wa.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,n!==Am&&(t=Error(te(422),{cause:n}),tu(Tn(t,a)))):(n!==Am&&(e=Error(te(423),{cause:n}),tu(Tn(e,a))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,n=Tn(n,a),i=Fm(t.stateNode,n,i),Wp(t,i),Zt!==4&&(Zt=2)),!1;var s=Error(te(520),{cause:n});if(s=Tn(s,a),Zl===null?Zl=[s]:Zl.push(s),Zt!==4&&(Zt=2),e===null)return!0;n=Tn(n,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=i&-i,a.lanes|=t,t=Fm(a.stateNode,n,t),Wp(a,t),!1;case 1:if(e=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(bs===null||!bs.has(s))))return a.flags|=65536,i&=-i,a.lanes|=i,i=G_(i),V_(i,t,a,n),Wp(a,i),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Qg=Error(te(461)),aa=!1;function sa(t,e,a,n){e.child=t===null?n_(e,null,a,n):vr(e,t.child,a,n)}function fS(t,e,a,n,i){a=a.render;var s=e.ref;if("ref"in n){var r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}else r=n;return gr(e),n=zg(t,e,a,r,s,i),o=Hg(),t!==null&&!aa?(Gg(t,e,i),Bi(t,e,i)):($e&&o&&rf(e),e.flags|=1,sa(t,e,n,i),e.child)}function hS(t,e,a,n,i){if(t===null){var s=a.type;return typeof s=="function"&&!Rg(s)&&s.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=s,q_(t,e,s,n,i)):(t=ld(a.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!$g(t,i)){var r=s.memoizedProps;if(a=a.compare,a=a!==null?a:$l,a(r,n)&&t.ref===e.ref)return Bi(t,e,i)}return e.flags|=1,t=Ri(s,n),t.ref=e.ref,t.return=e,e.child=t}function q_(t,e,a,n,i){if(t!==null){var s=t.memoizedProps;if($l(s,n)&&t.ref===e.ref)if(aa=!1,e.pendingProps=n=s,$g(t,i))(t.flags&131072)!==0&&(aa=!0);else return e.lanes=t.lanes,Bi(t,e,i)}return km(t,e,a,n,i)}function W_(t,e,a,n){var i=n.children,s=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((e.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,t!==null){for(n=e.child=t.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~s}else n=0,e.child=null;return pS(t,e,s,a,n)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&cd(e,s!==null?s.cachePool:null),s!==null?aS(e,s):Dm(),r_(e);else return n=e.lanes=536870912,pS(t,e,s!==null?s.baseLanes|a:a,a,n)}else s!==null?(cd(e,s.cachePool),aS(e,s),Ms(),e.memoizedState=null):(t!==null&&cd(e,null),Dm(),Ms());return sa(t,e,i,a),e.child}function Wl(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function pS(t,e,a,n,i){var s=Pg();return s=s===null?null:{parent:ta._currentValue,pool:s},e.memoizedState={baseLanes:a,cachePool:s},t!==null&&cd(e,null),Dm(),r_(e),t!==null&&mr(t,e,n,!0),e.childLanes=i,null}function hd(t,e){return e=ff({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function mS(t,e,a){return vr(e,t.child,null,a),t=hd(e,e.pendingProps),t.flags|=2,on(e),e.memoizedState=null,t}function Ww(t,e,a){var n=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,t===null){if($e){if(n.mode==="hidden")return t=hd(e,n),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Wl(null,t);if(Nm(e),(t=Dt)?(t=WM(t,In),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ws!==null?{id:ri,overflow:oi}:null,retryLane:536870912,hydrationErrors:null},a=Jy(t),a.return=e,e.child=a,pa=e,Dt=null)):t=null,t===null)throw Ts(e);return e.lanes=536870912,null}return hd(e,n)}var s=t.memoizedState;if(s!==null){var r=s.dehydrated;if(Nm(e),i)if(e.flags&256)e.flags&=-257,e=mS(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(te(558));else if(aa||mr(t,e,a,!1),i=(a&t.childLanes)!==0,aa||i){if(Is.current===null){if(n=wt,n!==null&&(r=_y(n,a),r!==0&&r!==s.retryLane))throw s.retryLane=r,Cr(t,r),$a(n,t,r),Qg;Yd()}e=mS(t,e,a)}else t=s.treeContext,Dt=En(r.nextSibling),pa=e,$e=!0,vs=null,In=!1,t!==null&&jy(e,t),e=hd(e,n),e.flags|=134221824;return e}return t=Ri(t.child,{mode:n.mode,children:n.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Jr(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(te(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function km(t,e,a,n,i){return gr(e),a=zg(t,e,a,n,void 0,i),n=Hg(),t!==null&&!aa?(Gg(t,e,i),Bi(t,e,i)):($e&&n&&rf(e),e.flags|=1,sa(t,e,a,i),e.child)}function gS(t,e,a,n,i,s){return gr(e),e.updateQueue=null,a=l_(e,n,a,i),o_(t),n=Hg(),t!==null&&!aa?(Gg(t,e,s),Bi(t,e,s)):($e&&n&&rf(e),e.flags|=1,sa(t,e,a,s),e.child)}function xS(t,e,a,n,i){if(gr(e),e.stateNode===null){var s=oo,r=a.contextType;typeof r=="object"&&r!==null&&(s=ba(r)),s=new a(n,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Bm,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=n,s.state=e.memoizedState,s.refs={},Og(e),r=a.contextType,s.context=typeof r=="object"&&r!==null?ba(r):oo,s.state=e.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(Yp(e,a,r,n),s.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Bm.enqueueReplaceState(s,s.state,null),Vl(e,n,s,i),Gl(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){s=e.stateNode;var o=e.memoizedProps,l=yr(a,o);s.props=l;var u=s.context,f=a.contextType;r=oo,typeof f=="object"&&f!==null&&(r=ba(f));var p=a.getDerivedStateFromProps;f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||u!==r)&&cS(e,s,n,r),us=!1;var c=e.memoizedState;s.state=c,Vl(e,n,s,i),Gl(),u=e.memoizedState,o||c!==u||us?(typeof p=="function"&&(Yp(e,a,p,n),u=e.memoizedState),(l=us||uS(e,a,l,n,c,u,r))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=u),s.props=n,s.state=u,s.context=r,n=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{s=e.stateNode,Em(t,e),r=e.memoizedProps,f=yr(a,r),s.props=f,p=e.pendingProps,c=s.context,u=a.contextType,l=oo,typeof u=="object"&&u!==null&&(l=ba(u)),o=a.getDerivedStateFromProps,(u=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==p||c!==l)&&cS(e,s,n,l),us=!1,c=e.memoizedState,s.state=c,Vl(e,n,s,i),Gl();var h=e.memoizedState;r!==p||c!==h||us||t!==null&&t.dependencies!==null&&Dd(t.dependencies)?(typeof o=="function"&&(Yp(e,a,o,n),h=e.memoizedState),(f=us||uS(e,a,f,n,c,h,l)||t!==null&&t.dependencies!==null&&Dd(t.dependencies))?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,h,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,h,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=h),s.props=n,s.state=h,s.context=l,n=f):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),n=!1)}return s=n,Jr(t,e),n=(e.flags&128)!==0,s||n?(s=e.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&n?(e.child=vr(e,t.child,null,i),e.child=vr(e,null,a,i)):sa(t,e,a,i),e.memoizedState=s.state,t=e.child):t=Bi(t,e,i),t}function vS(t,e,a,n){return pr(),e.flags|=256,sa(t,e,a,n),e.child}var zm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hm(t){return{baseLanes:t,cachePool:e_()}}function Gm(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=un),t}function X_(t,e,a){var n=e.pendingProps,i=!1,s=(e.flags&128)!==0,r;if((r=s)||(r=t!==null&&t.memoizedState===null?!1:(Ca.current&2)!==0),r&&(i=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if($e){if(i?_s(e):Ms(),(t=Dt)?(t=WM(t,In),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ws!==null?{id:ri,overflow:oi}:null,retryLane:536870912,hydrationErrors:null},a=Jy(t),a.return=e,e.child=a,pa=e,Dt=null)):t=null,t===null)throw Ts(e);return dx(t)?e.lanes=32:e.lanes=536870912,null}return s=n.children,n=n.fallback,i?(Ms(),i=e.mode,s=ff({mode:"hidden",children:s},i),n=cr(n,i,a,null),s.return=e,n.return=e,s.sibling=n,e.child=s,n=e.child,n.memoizedState=Hm(a),n.childLanes=Gm(t,r,a),e.memoizedState=zm,Wl(null,n)):(_s(e),jg(e,s))}var o=t.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return Xw(t,e,s,r,n,l,o,a)}return i?(Ms(),i=n.fallback,s=e.mode,o=t.child,l=o.sibling,n=Ri(o,{mode:"hidden",children:n.children}),n.subtreeFlags=o.subtreeFlags&1206910976,l!==null?i=Ri(l,i):(i=cr(i,s,a,null),i.flags|=2),i.return=e,n.return=e,n.sibling=i,e.child=n,Wl(null,n),n=e.child,i=t.child.memoizedState,i===null?i=Hm(a):(s=i.cachePool,s!==null?(o=ta._currentValue,s=s.parent!==o?{parent:o,pool:o}:s):s=e_(),i={baseLanes:i.baseLanes|a,cachePool:s}),n.memoizedState=i,n.childLanes=Gm(t,r,a),e.memoizedState=zm,Wl(t.child,n)):(_s(e),a=t.child,t=a.sibling,a=Ri(a,{mode:"visible",children:n.children}),a.return=e,a.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=a,e.memoizedState=null,a)}function jg(t,e){return e=ff({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function ff(t,e){return t=ja(22,t,null,e),t.lanes=0,t}function Zc(t,e,a){return vr(e,t.child,null,a),t=jg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Xw(t,e,a,n,i,s,r,o){if(a)return e.flags&256?(_s(e),e.flags&=-257,Zc(t,e,o)):e.memoizedState!==null?(Ms(),e.child=t.child,e.flags|=128,null):(Ms(),s=i.fallback,r=e.mode,i=ff({mode:"visible",children:i.children},r),s=cr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,vr(e,t.child,null,o),i=e.child,i.memoizedState=Hm(o),i.childLanes=Gm(t,n,o),e.memoizedState=zm,Wl(null,i));if(_s(e),dx(s)){if(n=s.nextSibling&&s.nextSibling.dataset,n)var l=n.dgst;return n=l,n!==""&&(i=Error(te(419)),i.stack="",i.digest=n,tu({value:i,source:null,stack:null})),Zc(t,e,o)}if(aa||mr(t,e,o,!1),n=(o&t.childLanes)!==0,aa||n){if(Is.current!==null)return Zc(t,e,o);if(n=wt,n!==null&&(i=_y(n,o),i!==0&&i!==r.retryLane))throw r.retryLane=i,Cr(t,i),$a(n,t,i),Qg;return hg(s)||Yd(),Zc(t,e,o)}return hg(s)?(e.flags|=192,e.child=t.child,null):(t=r.treeContext,Dt=En(s.nextSibling),pa=e,$e=!0,vs=null,In=!1,t!==null&&jy(e,t),e=jg(e,i.children),e.flags|=134221824,e)}function SS(t,e,a){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),ud(t.return,e,a)}function yS(t){for(var e=null;t!==null;){var a=t.alternate;a!==null&&Ud(a)===null&&(e=t),t=t.sibling}return e}function Kc(t,e,a,n,i,s){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:s}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=a,r.tailMode=i,r.treeForkCount=s)}function Zp(t){var e=t.child;for(t.child=null;e!==null;){var a=e.sibling;e.sibling=t.child,t.child=e,e=a}}function Vm(t,e,a){var n=e.pendingProps,i=n.revealOrder,s=n.tail;n=n.children;var r=Ca.current;if(e.flags&128)return nu(e,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,e.flags|=128):r&=1,nu(e,r),i==="backwards"&&t!==null?(Zp(t),sa(t,e,n,a),Zp(t)):sa(t,e,n,a),n=$e?eu:0,!o&&t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&SS(t,a,e);else if(t.tag===19)SS(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"backwards":a=yS(e.child),a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null,Zp(e)),Kc(e,!0,i,null,s,n);break;case"unstable_legacy-backwards":for(a=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ud(t)===null){e.child=i;break}t=i.sibling,i.sibling=a,a=i,i=t}Kc(e,!0,a,null,s,n);break;case"together":Kc(e,!1,null,null,void 0,n);break;case"independent":e.memoizedState=null;break;default:a=yS(e.child),a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null),Kc(e,!1,i,a,s,n)}return e.child}function _S(t,e,a){var n=e.pendingProps;return hs(e,e.type,n.value),sa(t,e,n.children,a),e.child}function Bi(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Rs|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(mr(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,a=Ri(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Ri(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function $g(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Dd(t)))}function Yw(t,e,a){switch(e.tag){case 3:Ld(e,e.stateNode.containerInfo),hs(e,ta,t.memoizedState.cache),pr();break;case 27:case 5:gm(e);break;case 4:Ld(e,e.stateNode.containerInfo);break;case 10:hs(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Nm(e),null;break;case 13:var n=e.memoizedState;if(n!==null){if(n.dehydrated!==null)return _s(e),e.flags|=128,null;n=mr(t,e,a,!1);var i=e.child.childLanes;return n||(a&i)!==0?X_(t,e,a):(_s(e),t=Bi(t,e,a),t!==null?t.sibling:null)}_s(e);break;case 19:if(e.flags&128)return Vm(t,e,a);if(i=(t.flags&128)!==0,n=(a&e.childLanes)!==0,n||(mr(t,e,a,!1),n=(a&e.childLanes)!==0),i){if(n)return Vm(t,e,a);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),nu(e,Ca.current),n)break;return null;case 22:return e.lanes=0,W_(t,e,a,e.pendingProps);case 24:hs(e,ta,t.memoizedState.cache)}return Bi(t,e,a)}function Y_(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)aa=!0;else{if(!$g(t,a)&&(e.flags&128)===0)return aa=!1,Yw(t,e,a);aa=(t.flags&131072)!==0}else aa=!1,$e&&(e.flags&1048576)!==0&&Qy(e,eu,e.index);switch(e.lanes=0,e.tag){case 16:e:{var n=e.pendingProps;if(t=sr(e.elementType),e.type=t,typeof t=="function")Rg(t)?(n=yr(t,n),e.tag=1,e=xS(null,e,t,n,a)):(e.tag=0,e=km(null,e,t,n,a));else{if(t!=null){var i=t.$$typeof;if(i===vg){e.tag=11,e=fS(null,e,t,n,a);break e}else if(i===Sg){e.tag=14,e=hS(null,e,t,n,a);break e}else if(i===ii){e.tag=10,e.type=t,e=_S(null,e,a);break e}}throw e=pm(t)||t,Error(te(306,e,""))}}return e;case 0:return km(t,e,e.type,e.pendingProps,a);case 1:return n=e.type,i=yr(n,e.pendingProps),xS(t,e,n,i,a);case 3:e:{if(Ld(e,e.stateNode.containerInfo),t===null)throw Error(te(387));n=e.pendingProps;var s=e.memoizedState;i=s.element,Em(t,e),Vl(e,n,null,a);var r=e.memoizedState;if(n=r.cache,hs(e,ta,n),n!==s.cache&&Tm(e,[ta],a,!0),Gl(),n=r.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=vS(t,e,n,a);break e}else if(n!==i){i=Tn(Error(te(424)),e),tu(i),e=vS(t,e,n,a);break e}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Dt=En(t.firstChild),pa=e,$e=!0,vs=null,In=!0,a=n_(e,null,n,a),e.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(pr(),n===i){e=Bi(t,e,a);break e}sa(t,e,n,a)}e=e.child}return e;case 26:return Jr(t,e),t===null?(a=ZS(e.type,null,e.pendingProps,null))?e.memoizedState=a:$e||(e.stateNode=OM(e.type,e.pendingProps,xs.current,e)):e.memoizedState=ZS(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return gm(e),t===null&&$e&&(n=e.stateNode=XM(e.type,e.pendingProps,xs.current),pa=e,In=!0,i=Dt,Ns(e.type)?(pg=i,Dt=En(n.firstChild)):Dt=i),sa(t,e,e.pendingProps.children,a),Jr(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&$e&&((i=n=Dt)&&(n=kT(n,e.type,e.pendingProps,In),n!==null?(e.stateNode=n,pa=e,Dt=En(n.firstChild),In=!1,i=!0):i=!1),i||Ts(e)),gm(e),i=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,n=s.children,cg(i,s)?n=null:r!==null&&cg(i,r)&&(e.flags|=32),e.memoizedState!==null&&(i=zg(t,e,Ow,null,null,a),Do._currentValue=i),Jr(t,e),sa(t,e,n,a),e.child;case 6:return t===null&&$e&&((t=a=Dt)&&(a=zT(a,e.pendingProps,In),a!==null?(e.stateNode=a,pa=e,Dt=null,t=!0):t=!1),t||Ts(e)),null;case 13:return X_(t,e,a);case 4:return Ld(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=vr(e,null,n,a):sa(t,e,n,a),e.child;case 11:return fS(t,e,e.type,e.pendingProps,a);case 7:return n=e.pendingProps,Jr(t,e),sa(t,e,n,a),e.child;case 8:return sa(t,e,e.pendingProps.children,a),e.child;case 12:return sa(t,e,e.pendingProps.children,a),e.child;case 10:return _S(t,e,a);case 9:return i=e.type._context,n=e.pendingProps.children,gr(e),i=ba(i),n=n(i),e.flags|=1,sa(t,e,n,a),e.child;case 14:return hS(t,e,e.type,e.pendingProps,a);case 15:return q_(t,e,e.type,e.pendingProps,a);case 19:return Vm(t,e,a);case 31:return Ww(t,e,a);case 22:return W_(t,e,a,e.pendingProps);case 24:return gr(e),n=ba(ta),t===null?(i=Pg(),i===null&&(i=wt,s=Ng(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=a),i=s),e.memoizedState={parent:n,cache:i},Og(e),hs(e,ta,i)):((t.lanes&a)!==0&&(Em(t,e),Vl(e,null,null,a),Gl()),i=t.memoizedState,s=e.memoizedState,i.parent!==n?(i={parent:n,cache:n},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),hs(e,ta,n)):(n=s.cache,hs(e,ta,n),n!==i.cache&&Tm(e,[ta],a,!0))),sa(t,e,e.pendingProps.children,a),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),n=e.pendingProps,n.name!=null&&n.name!=="auto"?e.flags|=t===null?18882560:18874368:$e&&rf(e),t!==null&&t.memoizedProps.name!==n.name?e.flags|=4194816:Jr(t,e),sa(t,e,n.children,a),e.child;case 29:throw e.pendingProps}throw Error(te(156,e.tag))}function Ti(t){t.flags|=4}function Kp(t,e,a,n,i){var s;if((s=(t.mode&32)!==0)&&(s=a===null?QS(e,n):QS(e,n)&&(n.src!==a.src||n.srcSet!==a.srcSet)),s){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(MM())t.flags|=8192;else throw fr=Nd,Ug}else t.flags&=-16777217}function MS(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!JM(e))if(MM())t.flags|=8192;else throw fr=Nd,Ug}function Jc(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?vy():536870912,t.lanes|=e,Ao|=e)}function Tl(t,e){if(!$e)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null;break;default:for(e=t.tail,a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null}}function Rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(e)for(var i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&1206910976,n|=i.flags&1206910976,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=a,e}function Zw(t,e,a){var n=e.pendingProps;switch(Dg(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rt(e),null;case 1:return Rt(e),null;case 3:return a=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Di(ta),Mo(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Zr(e)?Ti(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,qp())),Rt(e),null;case 26:var i=e.type,s=e.memoizedState;return t===null?(Ti(e),s!==null?(Rt(e),MS(e,s)):(Rt(e),Kp(e,i,null,n,a))):s?s!==t.memoizedState?(Ti(e),Rt(e),MS(e,s)):(Rt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==n&&Ti(e),Rt(e),Kp(e,i,t,n,a)),null;case 27:if(Cd(e),a=xs.current,i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Ti(e);else{if(!n){if(e.stateNode===null)throw Error(te(166));return Rt(e),e.subtreeFlags&=-33554433,null}t=li.current,Zr(e)?Kv(e,t):(t=XM(i,n,a),e.stateNode=t,Ti(e))}return Rt(e),e.subtreeFlags&=-33554433,null;case 5:if(Cd(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Ti(e);else{if(!n){if(e.stateNode===null)throw Error(te(166));return Rt(e),e.subtreeFlags&=-33554433,null}if(s=li.current,Zr(e))Kv(e,s);else{var r=ou(xs.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof n.is=="string"?r.createElement("select",{is:n.is}):r.createElement("select"),n.multiple?s.multiple=!0:n.size&&(s.size=n.size);break;default:s=typeof n.is=="string"?r.createElement(i,{is:n.is}):r.createElement(i)}}s[Ma]=e,s[tn]=n;e:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break e;for(;r.sibling===null;){if(r.return===null||r.return===e)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=s;e:switch(Aa(s,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Ti(e)}}return Rt(e),e.subtreeFlags&=-33554433,Kp(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&Ti(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(te(166));if(t=xs.current,Zr(e)){if(t=e.stateNode,a=e.memoizedProps,n=null,i=pa,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}t[Ma]=e,t=!!(t.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||PM(t.nodeValue,a)),t||Ts(e,!0)}else t=ou(t).createTextNode(n),t[Ma]=e,e.stateNode=t}return Rt(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(n=Zr(e),a!==null){if(t===null){if(!n)throw Error(te(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(557));t[Ma]=e}else pr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Rt(e),t=!1}else a=qp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(on(e),e):(on(e),null);if((e.flags&128)!==0)throw Error(te(558))}return Rt(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Zr(e),n!==null&&n.dehydrated!==null){if(t===null){if(!i)throw Error(te(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(te(317));i[Ma]=e}else pr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Rt(e),i=!1}else i=qp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(on(e),e):(on(e),null)}return on(e),(e.flags&128)!==0?(e.lanes=a,e):(a=n!==null,t=t!==null&&t.memoizedState!==null,a&&(n=e.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),Jc(e,e.updateQueue),Rt(e),null);case 4:return Mo(),t===null&&lx(e.stateNode.containerInfo),e.flags|=67108864,Rt(e),null;case 10:return Di(e.type),Rt(e),null;case 19:if(Fg(e),n=e.memoizedState,n===null)return Rt(e),null;if(i=(e.flags&128)!==0,s=n.rendering,s===null)if(i)Tl(n,!1);else{if(Zt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(s=Ud(t),s!==null){for(e.flags|=128,Tl(n,!1),t=s.updateQueue,e.updateQueue=t,Jc(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Ky(a,t),a=a.sibling;return nu(e,Ca.current&1|2),$e&&Ii(e,n.treeForkCount),e.child}t=t.sibling}n.tail!==null&&cn()>Wd&&(e.flags|=128,i=!0,Tl(n,!1),e.lanes=4194304)}else{if(!i)if(t=Ud(s),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,Jc(e,t),Tl(n,!0),n.tail===null&&n.tailMode!=="collapsed"&&n.tailMode!=="visible"&&!s.alternate&&!$e)return Rt(e),null}else 2*cn()-n.renderingStartTime>Wd&&a!==536870912&&(e.flags|=128,i=!0,Tl(n,!1),e.lanes=4194304);n.isBackwards?(s.sibling=e.child,e.child=s):(t=n.last,t!==null?t.sibling=s:e.child=s,n.last=s)}if(n.tail!==null){t=n.tail;e:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return n.rendering=t,n.tail=t.sibling,n.renderingStartTime=cn(),t.sibling=null,s=Ca.current,s=i?s&1|2:s&1,n.tailMode==="visible"||n.tailMode==="collapsed"||!a||$e?nu(e,s):(a=s,Nt(wa,e),Nt(Ca,a),Pa===null&&(Pa=e)),$e&&Ii(e,n.treeForkCount),t}return Rt(e),null;case 22:case 23:return on(e),Bg(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(a&536870912)!==0&&(e.flags&128)===0&&(Rt(e),e.subtreeFlags&6&&(e.flags|=8192)):Rt(e),a=e.updateQueue,a!==null&&Jc(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(e.flags|=2048),t!==null&&La(dr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Di(ta),Rt(e),null;case 25:return null;case 30:return e.flags|=33554432,Rt(e),null}throw Error(te(156,e.tag))}function Kw(t,e){switch(Dg(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Di(ta),Mo(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Cd(e),null;case 31:if(e.memoizedState!==null){if(on(e),e.alternate===null)throw Error(te(340));pr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(on(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));pr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Fg(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return Mo(),null;case 10:return Di(e.type),null;case 22:case 23:return on(e),Bg(),t!==null&&La(dr),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Di(ta),null;case 25:return null;default:return null}}function Z_(t,e){switch(Dg(e),e.tag){case 3:Di(ta),Mo();break;case 26:case 27:case 5:Cd(e);break;case 4:Mo();break;case 31:e.memoizedState!==null&&on(e);break;case 13:on(e);break;case 19:Fg(e);break;case 10:Di(e.type);break;case 22:case 23:on(e),Bg(),t!==null&&La(dr);break;case 24:Di(ta)}}function yu(t,e){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){n=void 0;var s=a.create,r=a.inst;n=s(),r.destroy=n}a=a.next}while(a!==i)}}catch(o){bt(e,e.return,o)}}function Es(t,e,a){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&t)===t){var r=n.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,i=e;var l=a,u=o;try{u()}catch(f){bt(i,l,f)}}}n=n.next}while(n!==s)}}catch(f){bt(e,e.return,f)}}function K_(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{s_(e,a)}catch(n){bt(t,t.return,n)}}}function J_(t,e,a){a.props=yr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(n){bt(t,e,n)}}function ai(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:var i=t.stateNode,s=Pi(t.memoizedProps,i);(i.ref===null||i.ref.name!==s)&&(i.ref=zM(s)),n=i.ref;break;case 7:if(t.stateNode===null){var r=new mn(t);en(t.child,!1,BT,r,void 0,void 0),t.stateNode=r}n=t.stateNode;break;default:n=t.stateNode}typeof a=="function"?t.refCleanup=a(n):a.current=n}}catch(o){bt(t,e,o)}}function _a(t,e){var a=t.ref,n=t.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){bt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){bt(t,e,i)}else a.current=null}function zd(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var a=0;a<e.length;a++)qM(t.stateNode,e[a])}function bS(t){for(var e=t.return;e!==null&&(tx(e)&&qM(t.stateNode,e.stateNode),!ex(e));)e=e.return}function Xl(t){for(var e=t.return;e!==null&&(tx(e)&&FT(t.stateNode,e.stateNode),!ex(e));)e=e.return}function ex(t){return t.tag===5||t.tag===3||t.tag===27}function tx(t){return t&&t.tag===7&&t.stateNode!==null}function qm(t){var e=t.type,a=t.memoizedProps,n=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){bt(t,t.return,i)}}function Jp(t,e,a){try{var n=t.stateNode;ST(n,t.type,a,e),n[tn]=e}catch(i){bt(t,t.return,i)}}function Q_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ns(t.type)||t.tag===4}function Qp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Q_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ns(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wm(t,e,a,n){var i=t.tag;if(i===5||i===6)i=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(i,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(i),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=si)),zd(t,n),ft=!0;else if(i!==4&&(i===27&&(zd(t,n),n=null,Ns(t.type)&&(a=t.stateNode,e=null)),t=t.child,t!==null))for(Wm(t,e,a,n),t=t.sibling;t!==null;)Wm(t,e,a,n),t=t.sibling}function Hd(t,e,a,n){var i=t.tag;if(i===5||i===6)i=t.stateNode,e?a.insertBefore(i,e):a.appendChild(i),zd(t,n),ft=!0;else if(i!==4&&(i===27&&(zd(t,n),n=null,Ns(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Hd(t,e,a,n),t=t.sibling;t!==null;)Hd(t,e,a,n),t=t.sibling}function j_(t){var e=t.stateNode,a=t.memoizedProps;try{for(var n=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Aa(e,n,a),e[Ma]=t,e[tn]=a}catch(s){bt(t,t.return,s)}}var Gd=!1,ln=null;function LS(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Gd=!0)}var ni=null;function CS(){var t=ni;return ni=null,t}var Qa=0;function Fo(t,e,a,n,i){return Qa=0,$_(t.child,e,a,n,i)}function $_(t,e,a,n,i){for(var s=!1;t!==null;){if(t.tag===5){var r=t.stateNode;if(n!==null){var o=dg(r);n.push(o),o.view&&(s=!0)}else s||dg(r).view&&(s=!0);Gd=!0,BM(r,Qa===0?e:e+"_"+Qa,a),Qa++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&i||$_(t.child,e,a,n,i)&&(s=!0));t=t.sibling}return s}function ci(t,e){for(;t!==null;)t.tag===5?FM(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||ci(t.child,e)),t=t.sibling}function pd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(pd(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(te(544));var a=e.name;e=zi(e.default,e.share),e!=="none"&&(Fo(t,a,e,null,!1)||ci(t.child,!1))}t=t.sibling}}function Xm(t,e){if(t.tag===30){var a=t.stateNode,n=t.memoizedProps,i=Pi(n,a),s=zi(n.default,a.paired?n.share:n.enter);s!=="none"?Fo(t,i,s,null,!1)?(pd(t),a.paired||e||wo(t,n.onEnter)):ci(t.child,!1):pd(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Xm(t,e),t=t.sibling;else pd(t)}function Ym(t){if(ln!==null&&ln.size!==0){var e=ln;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,n=a.name;if(n!=null&&n!=="auto"){var i=e.get(n);if(i!==void 0){var s=zi(a.default,a.share);if(s!=="none"&&(Fo(t,n,s,null,!1)?(s=t.stateNode,i.paired=s,s.paired=i,wo(t,a.onShare)):ci(t.child,!1)),e.delete(n),e.size===0)break}}}Ym(t)}t=t.sibling}}}function Zm(t){if(t.tag===30){var e=t.memoizedProps,a=Pi(e,t.stateNode),n=ln!==null?ln.get(a):void 0,i=zi(e.default,n!==void 0?e.share:e.exit);i!=="none"&&(Fo(t,a,i,null,!1)?n!==void 0?(i=t.stateNode,n.paired=i,i.paired=n,ln.delete(a),wo(t,e.onShare)):wo(t,e.onExit):ci(t.child,!1)),ln!==null&&Ym(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Zm(t),t=t.sibling;else ln!==null&&Ym(t)}function eM(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,a=Pi(e,t.stateNode);e=zi(e.default,e.update),t.flags&=-5,e!=="none"&&Fo(t,a,e,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&eM(t);t=t.sibling}}function Km(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var e=t.stateNode;e.paired!==null&&(e.paired=null,ci(t.child,!1))}Km(t)}t=t.sibling}}function md(t){if(t.tag===30)t.stateNode.paired=null,ci(t.child,!1),Km(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)md(t),t=t.sibling;else Km(t)}function tM(t){for(t=t.child;t!==null;)t.tag===30?ci(t.child,!1):(t.subtreeFlags&33554432)!==0&&tM(t),t=t.sibling}function ax(t,e,a,n,i,s,r){for(var o=!1;e!==null;){if(e.tag===5){var l=e.stateNode;if(s!==null&&Qa<s.length){var u=s[Qa],f=dg(l);(u.view||f.view)&&(o=!0);var p;if(p=(t.flags&4)===0)if(f.clip)p=!0;else{p=u.rect;var c=f.rect;p=p.y!==c.y||p.x!==c.x||p.height!==c.height||p.width!==c.width}p&&(t.flags|=4),f.abs?f=!u.abs:(u=u.rect,f=f.rect,f=u.height!==f.height||u.width!==f.width),f&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&BM(l,Qa===0?a:a+"_"+Qa,i),o&&(t.flags&4)!==0||(ni===null&&(ni=[]),ni.push(l,Qa===0?n:n+"_"+Qa,e.memoizedProps)),Qa++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&r?t.flags|=e.flags&32:ax(t,e.child,a,n,i,s,r)&&(o=!0));e=e.sibling}return o}function aM(t,e){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,n=t.stateNode,i=Pi(a,n),s=zi(a.default,a.update);if(e){n=n.clones;var r=n===null?null:n.map(CT)}else r=t.memoizedState,t.memoizedState=null;n=t;var o=t.child;Qa=0,i=ax(n,o,i,i,s,r,!1),(t.flags&4)!==0&&i&&(e||wo(t,a.onUpdate))}else(t.subtreeFlags&33554432)!==0&&aM(t,e);t=t.sibling}}var da=!1,vt=!1,$n=!1,jp=!1,AS=typeof WeakSet=="function"?WeakSet:Set,fa=null,ei=!1,Ol=!1,Vd=!1,Jm=!1;function Jw(t,e,a){if(t=t.containerInfo,lg=No,t=Hy(t),Tg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,f=0,p=0,c=t,h=null;t:for(;;){for(var S;c!==n||s!==0&&c.nodeType!==3||(l=o+s),c!==r||i!==0&&c.nodeType!==3||(u=o+i),c.nodeType===3&&(o+=c.nodeValue.length),(S=c.firstChild)!==null;)h=c,c=S;for(;;){if(c===t)break t;if(h===n&&++f===s&&(l=o),h===r&&++p===i&&(u=o),(S=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ug={focusedElem:t,selectionRange:n},No=!1,a=(a&335544064)===a,fa=e,e=a?9270:1024;fa!==null;){if(t=fa,a&&(n=t.deletions,n!==null))for(s=0;s<n.length;s++)a&&Zm(n[s]);if(t.alternate===null&&(t.flags&2)!==0)a&&LS(t),Qc(a);else{if(t.tag===22){if(n=t.alternate,t.memoizedState!==null){n!==null&&n.memoizedState===null&&a&&Zm(n),Qc(a);continue}else if(n!==null&&n.memoizedState!==null){a&&LS(t),Qc(a);continue}}n=t.child,(t.subtreeFlags&e)!==0&&n!==null?(n.return=t,fa=n):(a&&eM(t),Qc(a))}}ln=null}function Qc(t){for(;fa!==null;){var e=fa,a=t,n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((i&1024)!==0&&n!==null){a=void 0,i=n.memoizedProps,n=n.memoizedState;var s=e.stateNode;try{var r=yr(e.type,i);a=s.getSnapshotBeforeUpdate(r,n),s.__reactInternalSnapshotBeforeUpdate=a}catch(o){bt(e,e.return,o)}}break;case 3:if((i&1024)!==0){if(n=e.stateNode.containerInfo,a=n.nodeType,a===9)fg(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":fg(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&n!==null&&(a=Pi(n.memoizedProps,n.stateNode),i=e.memoizedProps,i=zi(i.default,i.update),i!=="none"&&Fo(n,a,i,n.memoizedState=[],!0));break;default:if((i&1024)!==0)throw Error(te(163))}if(n=e.sibling,n!==null){n.return=e.return,fa=n;break}fa=e.return}}function nM(t,e,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ti(t,a),n&4&&yu(5,a);break;case 1:if(ti(t,a),n&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(r){bt(a,a.return,r)}else{var i=yr(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){bt(a,a.return,r)}}n&64&&K_(a),n&512&&ai(a,a.return);break;case 3:if(ti(t,a),n&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{s_(t,e)}catch(r){bt(a,a.return,r)}}break;case 27:e===null&&n&4&&j_(a);case 26:case 5:ti(t,a),e===null&&n&4&&qm(a),n&512&&ai(a,a.return);break;case 12:ti(t,a);break;case 31:ti(t,a),n&4&&oM(t,a);break;case 13:ti(t,a),n&4&&lM(t,a),n&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=lT.bind(null,a),HT(t,a))));break;case 22:if(n=a.memoizedState!==null||da,!n){var s=e!==null&&e.memoizedState!==null||vt;e=da,i=vt,da=n,(vt=s)&&!i?(n=2,(a.subtreeFlags&8772)!==0&&(n|=1),Fn(t,a,n)):ti(t,a),da=e,vt=i}break;case 30:ti(t,a),n&512&&ai(a,a.return);break;case 7:n&512&&ai(a,a.return);default:ti(t,a)}}function Qm(t,e){for(t=t.child;t!==null;)iM(t,e),t=t.sibling}function iM(t,e){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(e){var n=a.style;typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none"}else{var i=t.stateNode,s=t.memoizedProps.style,r=s!=null&&s.hasOwnProperty("display")?s.display:null;i.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){bt(t,t.return,l)}jm(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,ft=!0}catch(l){bt(t,t.return,l)}break;case 18:try{var o=t.stateNode;e?GS(o,!0):GS(t.stateNode,!1)}catch(l){bt(t,t.return,l)}break;case 22:case 23:t.memoizedState===null&&Qm(t,e);break;default:Qm(t,e)}}function jm(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){e:{var a=t,n=e;switch(a.tag){case 4:iM(a,n);break e;case 22:a.memoizedState===null&&jm(a,n);break e;default:jm(a,n)}}t=t.sibling}}function sM(t){var e=t.alternate;e!==null&&(t.alternate=null,sM(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&$d(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Bt=null,Ka=!1;function Bn(t,e,a){for(a=a.child;a!==null;)rM(t,e,a),a=a.sibling}function rM(t,e,a){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(hu,a)}catch{}switch(a.tag){case 26:vt||_a(a,e),Bn(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!vt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vt||_a(a,e),Xl(a);var n=Bt,i=Ka;Ns(a.type)&&(Bt=a.stateNode,Ka=!1),Bn(t,e,a),YM(a.stateNode,a.type,a.memoizedProps),Bt=n,Ka=i;break;case 5:vt||_a(a,e),Xl(a);case 6:if(a.tag===6&&Xl(a),n=Bt,i=Ka,Bt=null,Bn(t,e,a),Bt=n,Ka=i,Bt!==null)if(Ka)try{(Bt.nodeType===9?Bt.body:Bt.nodeName==="HTML"?Bt.ownerDocument.body:Bt).removeChild(a.stateNode),ft=!0}catch(s){bt(a,e,s)}else try{Bt.removeChild(a.stateNode),ft=!0}catch(s){bt(a,e,s)}break;case 18:Bt!==null&&(Ka?(t=Bt,HS(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Po(t)):HS(Bt,a.stateNode));break;case 4:n=Bt,i=Ka,Bt=a.stateNode.containerInfo,Ka=!0,Bn(t,e,a),Bt=n,Ka=i;break;case 0:case 11:case 14:case 15:Es(2,a,e),vt||Es(4,a,e),Bn(t,e,a);break;case 1:vt||(_a(a,e),n=a.stateNode,typeof n.componentWillUnmount=="function"&&J_(a,e,n)),Bn(t,e,a);break;case 21:Bn(t,e,a);break;case 22:vt=(n=vt)||a.memoizedState!==null,Bn(t,e,a),vt=n;break;case 30:_a(a,e),Bn(t,e,a);break;case 7:vt||_a(a,e),Bn(t,e,a);break;default:Bn(t,e,a)}}function oM(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Po(t)}catch(a){bt(e,e.return,a)}}}function lM(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Po(t)}catch(a){bt(e,e.return,a)}}function Qw(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new AS),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new AS),e;default:throw Error(te(435,t.tag))}}function jc(t,e){var a=Qw(t);e.forEach(function(n){if(!a.has(n)){a.add(n);var i=uT.bind(null,t,n);n.then(i,i)}})}function za(t,e,a){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],r=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 27:if(Ns(l.type)){Bt=l.stateNode,Ka=!1;break e}break;case 5:Bt=l.stateNode,Ka=!1;break e;case 3:case 4:Bt=l.stateNode.containerInfo,Ka=!0;break e}l=l.return}if(Bt===null)throw Error(te(160));rM(r,o,s),Bt=null,Ka=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)uM(e,t,a),e=e.sibling}var kn=null;function uM(t,e,a){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(i&4&&(n=t.updateQueue,n=n!==null?n.events:null,n!==null))for(var s=0;s<n.length;s++){var r=n[s];r.ref.impl=r.nextImpl}za(e,t,a),Ha(t),i&4&&(Es(3,t,t.return),yu(3,t),Es(5,t,t.return));break;case 1:za(e,t,a),Ha(t),i&512&&(vt||n===null||_a(n,n.return)),i&64&&da&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?e:a.concat(e))));break;case 26:if(s=kn,za(e,t,a),Ha(t),i&512&&(vt||n===null||_a(n,n.return)),i&4)if(i=n!==null?n.memoizedState:null,a=t.memoizedState,n===null)if(a===null)if(t.stateNode===null)if(da)t.stateNode=OM(t.type,t.memoizedProps,e.containerInfo,t);else{e:{e=t.type,a=t.memoizedProps,i=s.ownerDocument||s;t:switch(e){case"title":n=i.getElementsByTagName("title")[0],(!n||n[gu]||n[Ma]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(e),i.head.insertBefore(n,i.querySelector("head > title"))),Aa(n,e,a),n[Ma]=t,ha(n),e=n;break e;case"link":if(s=JS("link","href",i).get(e+(a.href||""))){for(r=0;r<s.length;r++)if(n=s[r],n.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&n.getAttribute("rel")===(a.rel==null?null:a.rel)&&n.getAttribute("title")===(a.title==null?null:a.title)&&n.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(r,1);break t}}n=i.createElement(e),Aa(n,e,a),i.head.appendChild(n);break;case"meta":if(s=JS("meta","content",i).get(e+(a.content||""))){for(r=0;r<s.length;r++)if(n=s[r],n.getAttribute("content")===(a.content==null?null:""+a.content)&&n.getAttribute("name")===(a.name==null?null:a.name)&&n.getAttribute("property")===(a.property==null?null:a.property)&&n.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&n.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(r,1);break t}}n=i.createElement(e),Aa(n,e,a),i.head.appendChild(n);break;default:throw Error(te(468,e))}n[Ma]=t,ha(n),e=n}t.stateNode=e}else da||mg(s,t.type,t.stateNode);else t.stateNode=KS(s,a,t.memoizedProps);else i!==a?(i===null?(e=n.stateNode,e===null||vt||e.parentNode.removeChild(e)):i.count--,a===null?da||mg(s,t.type,t.stateNode):KS(s,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Jp(t,t.memoizedProps,n.memoizedProps);break;case 27:za(e,t,a),Ha(t),i&512&&(vt||n===null||_a(n,n.return)),n!==null&&i&4&&Jp(t,t.memoizedProps,n.memoizedProps);break;case 5:if(s=$n,$n=!1,za(e,t,a),$n=s,Ha(t),i&512&&(vt||n===null||_a(n,n.return)),t.flags&32){e=t.stateNode;try{Lo(e,""),ft=!0}catch(f){bt(t,t.return,f)}}i&4&&t.stateNode!=null&&(e=t.memoizedProps,Jp(t,e,n!==null?n.memoizedProps:e)),i&1024&&(jp=!0);break;case 6:if(za(e,t,a),Ha(t),i&4){if(t.stateNode===null)throw Error(te(162));e=t.memoizedProps,a=t.stateNode;try{a.nodeValue=e,ft=!0}catch(f){bt(t,t.return,f)}}break;case 3:if(ft=!1,Sd=null,s=kn,kn=lu(e.containerInfo),za(e,t,a),kn=s,Ha(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Po(e.containerInfo)}catch(f){bt(t,t.return,f)}jp&&(jp=!1,cM(t)),ft=!1;break;case 4:i=$n,$n=da,n=Dv(),s=kn,kn=lu(t.stateNode.containerInfo),za(e,t,a),Ha(t),kn=s,ft&&Ol&&(Vd=!0),ft=n,$n=i;break;case 12:za(e,t,a),Ha(t);break;case 31:za(e,t,a),Ha(t),i&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,jc(t,e)));break;case 13:za(e,t,a),Ha(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(hf=cn()),i&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,jc(t,e)));break;case 22:s=t.memoizedState!==null,r=n!==null&&n.memoizedState!==null;var o=da,l=vt,u=$n;da=o||s,$n=u||s,vt=l||r,za(e,t,a),vt=l,$n=u,da=o,Ha(t),i&8192&&(e=t.stateNode,e._visibility=s?e._visibility&-2:e._visibility|1,!s||n===null||r||da||vt||(e=r||vt,a=da,n=vt,da=s||da,vt=e,os(t,2),da=a,vt=n),!s&&$n||Qm(t,s)),i&4&&(e=t.updateQueue,e!==null&&(a=e.retryQueue,a!==null&&(e.retryQueue=null,jc(t,a))));break;case 19:za(e,t,a),Ha(t),i&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,jc(t,e)));break;case 30:i&512&&(vt||n===null||_a(n,n.return)),i=Dv(),s=Ol,r=(a&335544064)===a,o=t.memoizedProps,Ol=r&&zi(o.default,o.update)!=="none",za(e,t,a),Ha(t),r&&n!==null&&ft&&(t.flags|=4),Ol=s,ft=i;break;case 21:break;case 7:i&512&&(vt||n===null||_a(n,n.return)),n&&n.stateNode!==null&&(n.stateNode._fragmentFiber=t);default:za(e,t,a),Ha(t)}}function Ha(t){var e=t.flags;if(e&2){try{for(var a,n=t.return;n!==null;){if(Q_(n)){a=n;break}n=n.return}n=null;for(var i=t.return;i!==null;){if(tx(i)){var s=i.stateNode;n===null?n=[s]:n.push(s)}if(ex(i))break;i=i.return}var r=n;if(a==null)throw Error(te(160));switch(a.tag){case 27:var o=a.stateNode,l=Qp(t);Hd(t,l,o,r);break;case 5:var u=a.stateNode;a.flags&32&&(Lo(u,""),a.flags&=-33);var f=Qp(t);Hd(t,f,u,r);break;case 3:case 4:var p=a.stateNode.containerInfo,c=Qp(t);Wm(t,c,p,r);break;default:throw Error(te(161))}}catch(h){bt(t,t.return,h)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cM(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;cM(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,No=!0,e.reset(),No=!1),t=t.sibling}}function Kr(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)dM(e,t),e=e.sibling;else aM(e,!1)}function dM(t,e){var a=t.alternate;if(a===null)Xm(t,!1);else switch(t.tag){case 3:if(Jm=ei=!1,CS(),Kr(e,t),!ei&&!Vd){if(t=ni,t!==null)for(var n=0;n<t.length;n+=3){a=t[n];var i=t[n+1];FM(a,t[n+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+i+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Jm=!0}ni=null;break;case 5:Kr(e,t);break;case 4:n=ei,ei=!1,Kr(e,t),ei&&(Vd=!0),ei=n;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?Xm(t,!1):Kr(e,t));break;case 30:n=ei,i=CS(),ei=!1,Kr(e,t),ei&&(t.flags|=4);var s=t.memoizedProps,r=t.stateNode;e=Pi(s,r),r=Pi(a.memoizedProps,r);var o=zi(s.default,s.update);o==="none"?e=!1:(s=a.memoizedState,a.memoizedState=null,a=t.child,Qa=0,e=ax(t,a,e,r,o,s,!0),Qa!==(s===null?0:s.length)&&(t.flags|=32)),(t.flags&4)!==0&&e?(wo(t,t.memoizedProps.onUpdate),ni=i):i!==null&&(i.push.apply(i,ni),ni=i),ei=(t.flags&32)!==0?!0:n;break;default:Kr(e,t)}}function ti(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)nM(t,e.alternate,e),e=e.sibling}function os(t,e){for(t=t.child;t!==null;){var a=t,n=e;switch(a.tag){case 0:case 11:case 14:case 15:Es(4,a,a.return),os(a,n);break;case 1:_a(a,a.return);var i=a.stateNode;typeof i.componentWillUnmount=="function"&&J_(a,a.return,i),os(a,n);break;case 27:(n&2)!==0&&YM(a.stateNode,a.type,a.memoizedProps);case 5:_a(a,a.return),a.tag!==5&&a.tag!==27||Xl(a),os(a,n);break;case 6:Xl(a);break;case 26:_a(a,a.return),i=a.stateNode,a.memoizedState!==null||i===null||vt||i.parentNode.removeChild(i),os(a,n);break;case 22:a.memoizedState===null&&os(a,n);break;case 30:_a(a,a.return),os(a,n);break;case 7:_a(a,a.return);default:os(a,n)}t=t.sibling}}function Fn(t,e,a){for(a=(e.subtreeFlags&8772)!==0?a:a&-2,e=e.child;e!==null;){var n=e.alternate,i=t,s=e,r=s.flags,o=(a&1)!==0;switch(s.tag){case 0:case 11:case 15:Fn(i,s,a),yu(4,s);break;case 1:if(Fn(i,s,a),n=s,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(f){bt(n,n.return,f)}if(n=s,i=n.updateQueue,i!==null){var l=n.stateNode;try{var u=i.shared.hiddenCallbacks;if(u!==null)for(i.shared.hiddenCallbacks=null,i=0;i<u.length;i++)i_(u[i],l)}catch(f){bt(n,n.return,f)}}o&&r&64&&K_(s),ai(s,s.return);break;case 27:(a&2)!==0&&j_(s);case 5:s.tag!==5&&s.tag!==27||bS(s),Fn(i,s,a),o&&n===null&&r&4&&qm(s),ai(s,s.return);break;case 6:bS(s);break;case 26:l=s.stateNode,s.memoizedState!==null||l===null||da||mg(lu(l.ownerDocument),s.type,l),Fn(i,s,a),o&&n===null&&r&4&&qm(s),ai(s,s.return);break;case 12:Fn(i,s,a);break;case 31:Fn(i,s,a),o&&r&4&&oM(i,s);break;case 13:Fn(i,s,a),o&&r&4&&lM(i,s);break;case 22:s.memoizedState===null&&Fn(i,s,a),ai(s,s.return);break;case 30:Fn(i,s,a),ai(s,s.return);break;case 7:ai(s,s.return);default:Fn(i,s,a)}e=e.sibling}}function nx(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&vu(a))}function ix(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&vu(t))}function bn(t,e,a,n){var i=(a&335544064)===a;if(e.subtreeFlags&(i?10262:10256))for(e=e.child;e!==null;)fM(t,e,a,n),e=e.sibling;else i&&tM(e)}function fM(t,e,a,n){var i=(a&335544064)===a;i&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&md(e);var s=e.flags;switch(e.tag){case 0:case 11:case 15:bn(t,e,a,n),s&2048&&yu(9,e);break;case 1:bn(t,e,a,n);break;case 3:bn(t,e,a,n),i&&Jm&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),s&2048&&(s=null,e.alternate!==null&&(s=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==s&&(e.refCount++,s!=null&&vu(s)));break;case 12:if(s&2048){bn(t,e,a,n),s=e.stateNode;try{var r=e.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,e.alternate===null?"mount":"update",s.passiveEffectDuration,-0)}catch(u){bt(e,e.return,u)}}else bn(t,e,a,n);break;case 31:bn(t,e,a,n);break;case 13:bn(t,e,a,n);break;case 23:break;case 22:r=e.stateNode,o=e.alternate,e.memoizedState!==null?(i&&o!==null&&o.memoizedState===null&&md(o),r._visibility&2?bn(t,e,a,n):Yl(t,e)):(i&&o!==null&&o.memoizedState!==null&&md(e),r._visibility&2?bn(t,e,a,n):(r._visibility|=2,Qr(t,e,a,n,(e.subtreeFlags&10256)!==0||!1))),s&2048&&nx(o,e);break;case 24:bn(t,e,a,n),s&2048&&ix(e.alternate,e);break;case 30:i&&(s=e.alternate,s!==null&&(ci(s.child,!0),ci(e.child,!0))),bn(t,e,a,n);break;default:bn(t,e,a,n)}}function Qr(t,e,a,n,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var s=t,r=e,o=a,l=n,u=r.flags;switch(r.tag){case 0:case 11:case 15:Qr(s,r,o,l,i),yu(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?Qr(s,r,o,l,i):Yl(s,r):(f._visibility|=2,Qr(s,r,o,l,i)),i&&u&2048&&nx(r.alternate,r);break;case 24:Qr(s,r,o,l,i),i&&u&2048&&ix(r.alternate,r);break;default:Qr(s,r,o,l,i)}e=e.sibling}}function Yl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,n=e,i=n.flags;switch(n.tag){case 22:Yl(a,n),i&2048&&nx(n.alternate,n);break;case 24:Yl(a,n),i&2048&&ix(n.alternate,n);break;default:Yl(a,n)}e=e.sibling}}var rr=8192;function nr(t,e,a){if(t.subtreeFlags&rr)for(t=t.child;t!==null;)hM(t,e,a),t=t.sibling}function hM(t,e,a){switch(t.tag){case 26:nr(t,e,a),t.flags&rr&&(t.memoizedState!==null?tI(a,kn,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&jS(a,t)));break;case 5:nr(t,e,a),t.flags&rr&&(t=t.stateNode,(e&335544128)===e&&jS(a,t));break;case 3:case 4:var n=kn;kn=lu(t.stateNode.containerInfo),nr(t,e,a),kn=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=rr,rr=16777216,nr(t,e,a),rr=n):nr(t,e,a));break;case 30:if((t.flags&rr)!==0&&(n=t.memoizedProps.name,n!=null&&n!=="auto")){var i=t.stateNode;i.paired=null,ln===null&&(ln=new Map),ln.set(n,i)}nr(t,e,a);break;default:nr(t,e,a)}}function pM(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Il(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];fa=n,gM(n,t)}pM(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)mM(t),t=t.sibling}function mM(t){switch(t.tag){case 0:case 11:case 15:Il(t),t.flags&2048&&Es(9,t,t.return);break;case 3:Il(t);break;case 12:Il(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,gd(t)):Il(t);break;default:Il(t)}}function gd(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];fa=n,gM(n,t)}pM(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Es(8,e,e.return),gd(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,gd(e));break;default:gd(e)}t=t.sibling}}function gM(t,e){for(;fa!==null;){var a=fa;switch(a.tag){case 0:case 11:case 15:Es(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:vu(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,fa=n;else e:for(a=t;fa!==null;){n=fa;var i=n.sibling,s=n.return;if(sM(n),n===a){fa=null;break e}if(i!==null){i.return=s,fa=i;break e}fa=s}}}var jw={getCacheForType:function(t){var e=ba(ta),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return ba(ta).controller.signal}},$w=typeof WeakMap=="function"?WeakMap:Map,mt=0,wt=null,nt=null,rt=0,_t=0,sn=null,ps=!1,ko=!1,sx=!1,Fi=0,Zt=0,Rs=0,hr=0,qd=0,un=0,Ao=0,Zl=null,Ja=null,$m=!1,hf=0,xM=0,Wd=1/0,Xd=null,bs=null,qt=0,Hn=null,_r=null,ui=0,eg=0,tg=null,vM=null,So=null,yo=null,_o=null,Kl=0,xd=null;function hn(){return(mt&2)!==0&&rt!==0?rt&-rt:ze.T!==null?ox():My()}function SM(){if(un===0)if((rt&536870912)===0||$e){var t=kc;kc<<=1,(kc&3932160)===0&&(kc=262144),un=t}else un=536870912;return t=wa.current,t!==null&&(t.flags|=32),un}function wo(t,e){if(e!=null){var a=t.stateNode,n=a.ref;n===null&&(n=a.ref=zM(Pi(t.memoizedProps,a))),yo===null&&(yo=[]),yo.push(e.bind(null,n))}}function $a(t,e,a){(t===wt&&(_t===2||_t===9)||t.cancelPendingCommit!==null)&&(To(t,0),ms(t,rt,un,!1)),mu(t,a),((mt&2)===0||t!==wt)&&(t===wt&&((mt&2)===0&&(hr|=a),Zt===4&&ms(t,rt,un,!1)),fi(t))}function yM(t,e,a){if((mt&6)!==0)throw Error(te(327));var n=!a&&(e&127)===0&&(e&t.expiredLanes)===0||pu(t,e),i=n?aT(t,e):$p(t,e,!0),s=n;do{if(i===0){ko&&!n&&ms(t,e,0,!1);break}else{if(a=t.current.alternate,s&&!eT(a)){i=$p(t,e,!1),s=!1;continue}if(i===2){if(s=e,t.errorRecoveryDisabledLanes&s)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;e:{var o=t;i=Zl;var l=o.current.memoizedState.isDehydrated;if(l&&(To(o,r).flags|=256),r=$p(o,r,!1),r!==2&&r!==6){if(sx&&!l){o.errorRecoveryDisabledLanes|=s,hr|=s,i=4;break e}s=Ja,Ja=i,s!==null&&(Ja===null?Ja=s:Ja.push.apply(Ja,s))}i=r}if(s=!1,i!==2)continue}}if(i===1){To(t,0),ms(t,e,0,!0);break}e:{switch(n=t,s=i,s){case 0:case 1:throw Error(te(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:ms(n,e,un,!ps);break e;case 2:Ja=null;break;case 3:case 5:break;default:throw Error(te(329))}if((e&62914560)===e&&(i=hf+300-cn(),10<i)){if(ms(n,e,un,!ps),jd(n,0,!0)!==0)break e;ui=e,n.timeoutHandle=ux(wS.bind(null,n,a,Ja,Xd,$m,e,un,hr,Ao,ps,s,"Throttled",-0,0),i);break e}wS(n,a,Ja,Xd,$m,e,un,hr,Ao,ps,s,null,-0,0)}}break}while(!0);fi(t)}function wS(t,e,a,n,i,s,r,o,l,u,f,p,c,h){t.timeoutHandle=-1;var S=e.subtreeFlags,b=(s&335544064)===s;if(p=null,(b||S&8192||(S&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:si},ln=null,hM(e,s,p),b&&(S=p,b=t.containerInfo,b=(b.nodeType===9?b:b.ownerDocument).__reactViewTransition,b!=null&&(S.count++,S.waitingForViewTransition=!0,S=uu.bind(S),b.finished.then(S,S))),S=(s&62914560)===s?hf-cn():(s&4194048)===s?xM-cn():0,S=aI(p,S),S!==null)){ui=s,t.cancelPendingCommit=S(IS.bind(null,t,e,s,a,n,i,r,o,l,u,f,p,null,c,h)),ms(t,s,r,!u);return}IS(t,e,s,a,n,i,r,o,l,u,f,p)}function eT(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],s=i.getSnapshot;i=i.value;try{if(!pn(s(),i))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ms(t,e,a,n){e=xy(t,e),e&=~qd,e&=~hr,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var i=e;0<i;){var s=31-fn(i),r=1<<s;n[s]=-1,i&=~r}a!==0&&Sy(t,a,e)}function pf(){return(mt&6)===0?(_u(0,!1),!1):!0}function rx(){if(nt!==null){if(_t===0)var t=nt.return;else t=nt,Ei=Ar=null,Vg(t),go=null,au=0,t=nt;for(;t!==null;)Z_(t.alternate,t),t=t.return;nt=null}}function To(t,e){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,MT(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ui=0,rx(),wt=t,nt=a=Ri(t.current,null),rt=e,_t=0,sn=null,ps=!1,ko=pu(t,e),sx=!1,Ao=un=qd=hr=Rs=Zt=0,Ja=Zl=null,$m=!1,Fi=xy(t,e),nf(),a}function _M(t,e){Ke=null,ze.H=Fd,e===Bo||e===of?(e=eS(),_t=3):e===Ug?(e=eS(),_t=4):_t=e===Qg?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,sn=e,nt===null&&(Zt=1,kd(t,Tn(e,t.current)))}function MM(){var t=wa.current;return t===null?!0:(rt&4194048)===rt?Pa===null:(rt&62914560)===rt||(rt&536870912)!==0?t===Pa:!1}function bM(){var t=ze.H;return ze.H=Fd,t===null?Fd:t}function LM(){var t=ze.A;return ze.A=jw,t}function Yd(){Zt=4,ps||(rt&4194048)!==rt&&wa.current!==null||(ko=!0),(Rs&134217727)===0&&(hr&134217727)===0||wt===null||ms(wt,rt,un,!1)}function $p(t,e,a){var n=mt;mt|=2;var i=bM(),s=LM();(wt!==t||rt!==e)&&(Xd=null,To(t,e)),e=!1;var r=Zt;e:do try{if(_t!==0&&nt!==null){var o=nt,l=sn;switch(_t){case 8:rx(),r=6;break e;case 3:case 2:case 9:case 6:wa.current===null&&(e=!0);var u=_t;if(_t=0,sn=null,co(t,o,l,u),a&&ko){r=0;break e}break;default:u=_t,_t=0,sn=null,co(t,o,l,u)}}tT(),r=Zt;break}catch(f){_M(t,f)}while(!0);return e&&t.shellSuspendCounter++,Ei=Ar=null,mt=n,ze.H=i,ze.A=s,nt===null&&(wt=null,rt=0,nf()),r}function tT(){for(;nt!==null;)CM(nt)}function aT(t,e){var a=mt;mt|=2;var n=bM(),i=LM();wt!==t||rt!==e?(Xd=null,Wd=cn()+500,To(t,e)):ko=pu(t,e);e:do try{if(_t!==0&&nt!==null){e=nt;var s=sn;t:switch(_t){case 1:_t=0,sn=null,co(t,e,s,1);break;case 2:case 9:if($v(s)){_t=0,sn=null,TS(e);break}e=function(){_t!==2&&_t!==9||wt!==t||(_t=7),fi(t)},s.then(e,e);break e;case 3:_t=7;break e;case 4:_t=5;break e;case 7:$v(s)?(_t=0,sn=null,TS(e)):(_t=0,sn=null,co(t,e,s,7));break;case 5:var r=null;switch(nt.tag){case 26:r=nt.memoizedState;case 5:case 27:var o=nt;if(r?JM(r):o.stateNode.complete){_t=0,sn=null;var l=o.sibling;if(l!==null)nt=l;else{var u=o.return;u!==null?(nt=u,mf(u)):nt=null}break t}}_t=0,sn=null,co(t,e,s,5);break;case 6:_t=0,sn=null,co(t,e,s,6);break;case 8:rx(),Zt=6;break e;default:throw Error(te(462))}}nT();break}catch(f){_M(t,f)}while(!0);return Ei=Ar=null,ze.H=n,ze.A=i,mt=a,nt!==null?0:(wt=null,rt=0,nf(),Zt)}function nT(){for(;nt!==null&&!yA();)CM(nt)}function CM(t){var e=Y_(t.alternate,t,Fi);t.memoizedProps=t.pendingProps,e===null?mf(t):nt=e}function TS(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=gS(a,e,e.pendingProps,e.type,void 0,rt);break;case 11:e=gS(a,e,e.pendingProps,e.type.render,e.ref,rt);break;case 5:Vg(e);var n=e;n===pa&&($e?(Rd(n),n.tag===5&&n.stateNode!=null&&(Dt=n.stateNode)):(Rd(n),$e=!0));default:Z_(a,e),e=nt=Ky(e,Fi),e=Y_(a,e,Fi)}t.memoizedProps=t.pendingProps,e===null?mf(t):nt=e}function co(t,e,a,n){Ei=Ar=null,Vg(e),go=null,au=0;var i=e.return;try{if(qw(t,i,e,a,rt)){Zt=1,kd(t,Tn(a,t.current)),nt=null;return}}catch(s){if(i!==null)throw nt=i,s;Zt=1,kd(t,Tn(a,t.current)),nt=null;return}e.flags&32768?($e||n===1?t=!0:ko||(rt&536870912)!==0?t=!1:(ps=t=!0,(n===2||n===9||n===3||n===6)&&(n=wa.current,n!==null&&n.tag===13&&(n.flags|=16384))),AM(e,t)):mf(e)}function mf(t){var e=t;do{if((e.flags&32768)!==0){AM(e,ps);return}t=e.return;var a=Zw(e.alternate,e,Fi);if(a!==null){nt=a;return}if(e=e.sibling,e!==null){nt=e;return}nt=e=t}while(e!==null);Zt===0&&(Zt=5)}function AM(t,e){do{var a=Kw(t.alternate,t);if(a!==null){a.flags&=32767,nt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){nt=t;return}nt=t=a}while(t!==null);Zt=6,nt=null}function IS(t,e,a,n,i,s,r,o,l,u,f,p){t.cancelPendingCommit=null;do gf();while(qt!==0);if((mt&6)!==0)throw Error(te(327));if(e!==null){if(e===t.current)throw Error(te(177));t===wt&&(nt=wt=null,rt=0),_r=e,Hn=t,ui=a,tg=i,vM=n,iT(t,e,a,r,o,l,p)}}function iT(t,e,a,n,i,s,r){var o=e.lanes|e.childLanes;if(eg=o,o|=Ig,EA(t,a,o,n,i,s),yo=null,(a&335544064)===a?(_o=Dw(t),n=10262):(_o=null,n=10256),(e.subtreeFlags&n)!==0||(e.flags&n)!==0?(t.callbackNode=null,t.callbackPriority=0,cT(Ad,function(){return sg(),null})):(t.callbackNode=null,t.callbackPriority=0),Gd=!1,n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=ze.T,ze.T=null,i=gt.p,gt.p=2,s=mt,mt|=4;try{Jw(t,e,a)}finally{mt=s,gt.p=i,ze.T=n}}qt=1,Gd?So=TT(r,t.containerInfo,_o,ag,ng,rT,ig,sg,sT,null,null):(ag(),ng(),ig())}function sT(t){if(qt!==0){var e=Hn.onRecoverableError;e(t,{componentStack:null})}}function rT(){qt===3&&(qt=0,dM(_r,Hn),qt=4)}function ag(){if(qt===1){qt=0;var t=Hn,e=_r,a=ui,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=ze.T,ze.T=null;var i=gt.p;gt.p=2;var s=mt;mt|=4;try{Ol=Vd=!1,uM(e,t,a),a=ug;var r=Hy(t.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&zy(o.ownerDocument.documentElement,o)){if(l!==null&&Tg(o)){var u=l.start,f=l.end;if(f===void 0&&(f=u),"selectionStart"in o)o.selectionStart=u,o.selectionEnd=Math.min(f,o.value.length);else{var p=o.ownerDocument||document,c=p&&p.defaultView||window;if(c.getSelection){var h=c.getSelection(),S=o.textContent.length,b=Math.min(l.start,S),g=l.end===void 0?b:Math.min(l.end,S);!h.extend&&b>g&&(r=g,g=b,b=r);var d=Wv(o,b),m=Wv(o,g);if(d&&m&&(h.rangeCount!==1||h.anchorNode!==d.node||h.anchorOffset!==d.offset||h.focusNode!==m.node||h.focusOffset!==m.offset)){var y=p.createRange();y.setStart(d.node,d.offset),h.removeAllRanges(),b>g?(h.addRange(y),h.extend(m.node,m.offset)):(y.setEnd(m.node,m.offset),h.addRange(y))}}}}for(p=[],h=o;h=h.parentNode;)h.nodeType===1&&p.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var _=p[o];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}No=!!lg,ug=lg=null}finally{mt=s,gt.p=i,ze.T=n}}t.current=e,qt=2}}function ng(){if(qt===2){qt=0;var t=Hn,e=_r,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=ze.T,ze.T=null;var n=gt.p;gt.p=2;var i=mt;mt|=4;try{nM(t,e.alternate,e)}finally{mt=i,gt.p=n,ze.T=a}}qt=3}}function ig(){if(qt===4||qt===3){qt=0;var t=So;So=null,_A();var e=Hn,a=_r,n=ui,i=vM,s=(n&335544064)===n?10262:10256;if((a.subtreeFlags&s)!==0||(a.flags&s)!==0?qt=5:(qt=0,_r=Hn=null,wM(e,e.pendingLanes)),s=e.pendingLanes,s===0&&(bs=null),Mg(n),a=a.stateNode,dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(hu,a,void 0,(a.current.flags&128)===128)}catch{}if(i!==null){a=ze.T,s=gt.p,gt.p=2,ze.T=null;try{for(var r=e.onRecoverableError,o=0;o<i.length;o++){var l=i[o];r(l.value,{componentStack:l.stack})}}finally{ze.T=a,gt.p=s}}if(i=yo,r=_o,_o=null,i!==null&&(yo=null,r===null&&(r=[]),t!==null))for(l=0;l<i.length;l++)a=(0,i[l])(r),a!==void 0&&t.finished.finally(a);(ui&3)!==0&&gf(),fi(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===xd?Kl++:(Kl=0,xd=e):(Kl=0,xd=null),_u(0,!1)}}function wM(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,vu(e)))}function gf(){return So!==null&&(So.skipTransition(),So=null),ag(),ng(),ig(),sg()}function sg(){if(qt!==5)return!1;var t=Hn,e=eg;eg=0;var a=Mg(ui),n=ze.T,i=gt.p;try{gt.p=32>a?32:a,ze.T=null,a=tg,tg=null;var s=Hn,r=ui;if(qt=0,_r=Hn=null,ui=0,(mt&6)!==0)throw Error(te(331));var o=mt;if(mt|=4,mM(s.current),fM(s,s.current,r,a),mt=o,_u(0,!1),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(hu,s)}catch{}return!0}finally{gt.p=i,ze.T=n,wM(t,e)}}function ES(t,e,a){e=Tn(a,e),e=Fm(t.stateNode,e,2),t=ys(t,e,2),t!==null&&(mu(t,2),fi(t))}function bt(t,e,a){if(t.tag===3)ES(t,t,a);else for(;e!==null;){if(e.tag===3){ES(e,t,a);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(bs===null||!bs.has(n))){t=Tn(a,t),a=G_(2),n=ys(e,a,2),n!==null&&(V_(a,n,e,t),mu(n,2),fi(n));break}}e=e.return}}function em(t,e,a){var n=t.pingCache;if(n===null){n=t.pingCache=new $w;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(a)||(sx=!0,i.add(a),t=oT.bind(null,t,e,a),e.then(t,t))}function oT(t,e,a){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,wt===t&&(rt&a)===a&&((Zt===4||Zt===3&&(rt&62914560)===rt&&300>cn()-hf)&&(mt&2)===0?To(t,0):qd|=a,Ao===rt&&(Ao=0)),fi(t)}function TM(t,e){e===0&&(e=vy()),t=Cr(t,e),t!==null&&(mu(t,e),fi(t))}function lT(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),TM(t,a)}function uT(t,e){var a=0;switch(t.tag){case 31:case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(te(314))}n!==null&&n.delete(e),TM(t,a)}function cT(t,e){return yg(t,e)}var Io=null,jr=null,rg=!1,Zd=!1,tm=!1,gs=0;function fi(t){t!==jr&&t.next===null&&(jr===null?Io=jr=t:jr=jr.next=t),Zd=!0,rg||(rg=!0,fT())}function _u(t,e){if(!tm&&Zd){tm=!0;do for(var a=!1,n=Io;n!==null;){if(!e)if(t!==0){var i=n.pendingLanes;if(i===0)var s=0;else{var r=n.suspendedLanes,o=n.pingedLanes;s=(1<<31-fn(42|t)+1)-1,s&=i&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,RS(n,s))}else s=rt,s=jd(n,n===wt?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(s&3)===0||pu(n,s)||(a=!0,RS(n,s));n=n.next}while(a);tm=!1}}function dT(){IM()}function IM(){Zd=rg=!1;var t=0;gs!==0&&_T()&&(t=gs);for(var e=cn(),a=null,n=Io;n!==null;){var i=n.next,s=EM(n,e);s===0?(n.next=null,a===null?Io=i:a.next=i,i===null&&(jr=a)):(a=n,(t!==0||(s&3)!==0)&&(Zd=!0)),n=i}qt!==0&&qt!==5||_u(t,!1),gs!==0&&(gs=0)}function EM(t,e){for(var a=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var r=31-fn(s),o=1<<r,l=i[r];l===-1?((o&a)===0||(o&n)!==0)&&(i[r]=IA(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}if(e=wt,a=rt,a=jd(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,a===0||t===e&&(_t===2||_t===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&Np(n),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||pu(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(n!==null&&Np(n),Mg(a)){case 2:case 8:a=my;break;case 32:a=Ad;break;case 268435456:a=gy;break;default:a=Ad}return n=RM.bind(null,t),a=yg(a,n),t.callbackPriority=e,t.callbackNode=a,e}return n!==null&&n!==null&&Np(n),t.callbackPriority=2,t.callbackNode=null,2}function RM(t,e){if(qt!==0&&qt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(gf()&&t.callbackNode!==a)return null;var n=rt;return n=jd(t,t===wt?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(yM(t,n,e),EM(t,cn()),t.callbackNode!=null&&t.callbackNode===a?RM.bind(null,t):null)}function RS(t,e){if(gf())return null;yM(t,e,!0)}function fT(){bT(function(){(mt&6)!==0?yg(py,dT):IM()})}function ox(){if(gs===0){var t=xr;t===0&&(t=Fc,Fc<<=1,(Fc&261888)===0&&(Fc=256)),gs=t}return gs}function DS(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:sd(t)}function hT(t,e,a,n,i){if(e==="submit"&&a&&a.stateNode===i){var s=DS((i[tn]||null).action),r=n.submitter;r&&(e=(e=r[tn]||null)?DS(e.formAction):r.getAttribute("formAction"),e!==null&&(s=e,r=null));var o=new ef("action","action",null,n,i);t.push({event:o,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(gs!==0){var l=new FormData(i,r);Om(a,{pending:!0,data:l,method:i.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=new FormData(i,r),Om(a,{pending:!0,data:l,method:i.method,action:s},s,l))},currentTarget:i}]})}}for($c=0;$c<Cm.length;$c++)ed=Cm[$c],NS=ed.toLowerCase(),PS=ed[0].toUpperCase()+ed.slice(1),Gn(NS,"on"+PS);var ed,NS,PS,$c;Gn(Vy,"onAnimationEnd");Gn(qy,"onAnimationIteration");Gn(Wy,"onAnimationStart");Gn("dblclick","onDoubleClick");Gn("focusin","onFocus");Gn("focusout","onBlur");Gn(Lw,"onTransitionRun");Gn(Cw,"onTransitionStart");Gn(Aw,"onTransitionCancel");Gn(Xy,"onTransitionEnd");bo("onMouseEnter",["mouseout","mouseover"]);bo("onMouseLeave",["mouseout","mouseover"]);bo("onPointerEnter",["pointerout","pointerover"]);bo("onPointerLeave",["pointerout","pointerover"]);br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));br("onBeforeInput",["compositionend","keypress","textInput","paste"]);br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var su="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(su));function DM(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],i=n.event;n=n.listeners;e:{var s=void 0;if(e)for(var r=n.length-1;0<=r;r--){var o=n[r],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;s=o,i.currentTarget=u;try{s(i)}catch(f){Td(f)}i.currentTarget=null,s=l}else for(r=0;r<n.length;r++){if(o=n[r],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;s=o,i.currentTarget=u;try{s(i)}catch(f){Td(f)}i.currentTarget=null,s=l}}}}function at(t,e){var a=e[Tv];a===void 0&&(a=e[Tv]=new Set);var n=t+"__bubble";a.has(n)||(NM(e,t,2,!1),a.add(n))}function am(t,e,a){var n=0;e&&(n|=4),NM(a,t,n,e)}var td="_reactListening"+Math.random().toString(36).slice(2);function lx(t){if(!t[td]){t[td]=!0,Ly.forEach(function(a){a!=="selectionchange"&&(pT.has(a)||am(a,!1,t),am(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[td]||(e[td]=!0,am("selectionchange",!1,e))}}function NM(t,e,a,n){switch(nb(e)){case 2:var i=rI;break;case 8:i=oI;break;default:i=mx}a=i.bind(null,e,a,t),i=void 0,!_m||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,a,{capture:!0,passive:i}):t.addEventListener(e,a,!0):i!==void 0?t.addEventListener(e,a,{passive:i}):t.addEventListener(e,a,!1)}function nm(t,e,a,n,i){var s=n;if((e&1)===0&&(e&2)===0&&n!==null)e:for(;;){if(n===null)return;var r=n.tag;if(r===3||r===4){var o=n.stateNode.containerInfo;if(o===i)break;if(r===4)for(r=n.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===i)return;r=r.return}for(;o!==null;){if(r=or(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){n=s=r;continue e}o=o.parentNode}}n=n.return}Dy(function(){var u=s,f=Lg(a),p=[];e:{var c=Yy.get(t);if(c!==void 0){var h=ef,S=t;switch(t){case"keypress":if(od(a)===0)break e;case"keydown":case"keyup":h=ew;break;case"focusin":S="focus",h=kp;break;case"focusout":S="blur",h=kp;break;case"beforeblur":case"afterblur":h=kp;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Ov;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=GA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=sw;break;case Vy:case qy:case Wy:h=WA;break;case Xy:h=ow;break;case"scroll":case"scrollend":h=zA;break;case"wheel":h=uw;break;case"copy":case"cut":case"paste":h=YA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Fv;break;case"submit":h=nw;break;case"toggle":case"beforetoggle":h=dw}var b=(e&4)!==0,g=!b&&(t==="scroll"||t==="scrollend"),d=b?c!==null?c+"Capture":null:c;b=[];for(var m=u,y;m!==null;){var _=m;if(y=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||y===null||d===null||(_=Ql(m,d),_!=null&&b.push(ru(m,_,y))),g)break;m=m.return}0<b.length&&(c=new h(c,S,null,a,f),p.push({event:c,listeners:b}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",c=t==="mouseout"||t==="pointerout",h&&a!==ym&&(S=a.relatedTarget||a.fromElement)&&(or(S)||S[Uo]))break e;(c||h)&&(S=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,c?(h=a.relatedTarget||a.toElement,c=u,h=h?or(h):null,h!==null&&(g=fu(h),b=h.tag,h!==g||b!==5&&b!==27&&b!==6)&&(h=null)):(c=null,h=u),c!==h&&(b=Ov,_="onMouseLeave",d="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(b=Fv,_="onPointerLeave",d="onPointerEnter",m="pointer"),g=c==null?S:Pl(c),y=h==null?S:Pl(h),S=new b(_,m+"leave",c,a,f),S.target=g,S.relatedTarget=y,_=null,or(f)===u&&(b=new b(d,m+"enter",h,a,f),b.target=y,b.relatedTarget=g,_=b),g=_,b=c&&h?lm(c,h,mT):null,c!==null&&US(p,S,c,b,!1),h!==null&&g!==null&&US(p,g,h,b,!0)))}e:{if(c=u?Pl(u):window,h=c.nodeName&&c.nodeName.toLowerCase(),h==="select"||h==="input"&&c.type==="file")var A=Gv;else if(Hv(c))if(Fy)A=_w;else{A=Sw;var w=vw}else h=c.nodeName,!h||h.toLowerCase()!=="input"||c.type!=="checkbox"&&c.type!=="radio"?u&&bg(u.elementType)&&(A=Gv):A=yw;if(A&&(A=A(t,u))){By(p,A,a,f);break e}w&&w(t,c,u)}switch(w=u?Pl(u):window,t){case"focusin":(Hv(w)||w.contentEditable==="true")&&(io=w,bm=u,kl=null);break;case"focusout":kl=bm=io=null;break;case"mousedown":Lm=!0;break;case"contextmenu":case"mouseup":case"dragend":Lm=!1,Xv(p,a,f);break;case"selectionchange":if(bw)break;case"keydown":case"keyup":Xv(p,a,f)}var x;if(wg)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else no?Uy(t,a)&&(L="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(L="onCompositionStart");L&&(Py&&a.locale!=="ko"&&(no||L!=="onCompositionStart"?L==="onCompositionEnd"&&no&&(x=Ny()):(fs=f,Cg="value"in fs?fs.value:fs.textContent,no=!0)),w=Kd(u,L),0<w.length&&(L=new Bv(L,t,null,a,f),p.push({event:L,listeners:w}),x?L.data=x:(x=Oy(a),x!==null&&(L.data=x)))),(x=hw?pw(t,a):mw(t,a))&&(L=Kd(u,"onBeforeInput"),0<L.length&&(w=new Bv("onBeforeInput","beforeinput",null,a,f),p.push({event:w,listeners:L}),w.data=x)),hT(p,t,u,a,f)}DM(p,e)})}function ru(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Kd(t,e){for(var a=e+"Capture",n=[];t!==null;){var i=t,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=Ql(t,a),i!=null&&n.unshift(ru(t,i,s)),i=Ql(t,e),i!=null&&n.push(ru(t,i,s))),t.tag===3)return n;t=t.return}return[]}function mT(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function US(t,e,a,n,i){for(var s=e._reactName,r=[];a!==null&&a!==n;){var o=a,l=o.alternate,u=o.stateNode;if(o=o.tag,l!==null&&l===n)break;o!==5&&o!==26&&o!==27||u===null||(l=u,i?(u=Ql(a,s),u!=null&&r.unshift(ru(a,u,l))):i||(u=Ql(a,s),u!=null&&r.push(ru(a,u,l)))),a=a.return}r.length!==0&&t.push({event:e,listeners:r})}var gT=/\r\n?/g,xT=/\u0000|\uFFFD/g;function OS(t){return(typeof t=="string"?t:""+t).replace(gT,`
`).replace(xT,"")}function PM(t,e){return e=OS(e),OS(t)===e}function Mt(t,e,a,n,i,s){switch(a){case"children":if(typeof n=="string")e==="body"||e==="textarea"&&n===""||Lo(t,n);else if(typeof n=="number"||typeof n=="bigint")e!=="body"&&Lo(t,""+n);else return;break;case"className":Hc(t,"class",n);break;case"tabIndex":Hc(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Hc(t,a,n);break;case"style":Ry(t,n,s);return;case"data":if(e!=="object"){Hc(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=sd(n),t.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(e!=="input"&&Mt(t,e,"name",i.name,i,null),Mt(t,e,"formEncType",i.formEncType,i,null),Mt(t,e,"formMethod",i.formMethod,i,null),Mt(t,e,"formTarget",i.formTarget,i,null)):(Mt(t,e,"encType",i.encType,i,null),Mt(t,e,"method",i.method,i,null),Mt(t,e,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=sd(n),t.setAttribute(a,n);break;case"onClick":n!=null&&(t.onclick=si);return;case"onScroll":n!=null&&at("scroll",t);return;case"onScrollEnd":n!=null&&at("scrollend",t);return;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(te(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(te(60));s?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}a=sd(n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":n===!0?t.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(a,n):t.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(a):t.setAttribute(a,n);break;case"popover":at("beforetoggle",t),at("toggle",t),id(t,"popover",n);break;case"xlinkActuate":wi(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":wi(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":wi(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":wi(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":wi(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":wi(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":wi(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":wi(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":wi(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":id(t,"is",n);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=FA.get(a)||a,id(t,a,n);else return}ft=!0}function og(t,e,a,n,i,s){switch(a){case"style":Ry(t,n,s);return;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(te(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(te(60));s?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof n=="string")Lo(t,n);else if(typeof n=="number"||typeof n=="bigint")Lo(t,""+n);else return;break;case"onScroll":n!=null&&at("scroll",t);return;case"onScrollEnd":n!=null&&at("scrollend",t);return;case"onClick":n!=null&&(t.onclick=si);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Cy.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),s=a.slice(2,i?a.length-7:void 0),e=t[tn]||null,e=e!=null?e[a]:null,typeof e=="function"&&t.removeEventListener(s,e,i),typeof n=="function")){typeof e!="function"&&e!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(s,n,i);break e}ft=!0,a in t?t[a]=n:n===!0?t.setAttribute(a,""):id(t,a,n)}return}ft=!0}function Aa(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":at("error",t),at("load",t);var n=!1,i=!1,s;for(s in a)if(a.hasOwnProperty(s)){var r=a[s];if(r!=null)switch(s){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(te(137,e));default:Mt(t,e,s,r,a,null)}}i&&Mt(t,e,"srcSet",a.srcSet,a,null),n&&Mt(t,e,"src",a.src,a,null);return;case"input":at("invalid",t);var o=s=r=i=null,l=null,u=null;for(n in a)if(a.hasOwnProperty(n)){var f=a[n];if(f!=null)switch(n){case"name":i=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":u=f;break;case"value":s=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(te(137,e));break;default:Mt(t,e,n,f,a,null)}}Ty(t,s,o,l,u,r,i,!1);return;case"select":at("invalid",t),n=r=s=null;for(i in a)if(a.hasOwnProperty(i)&&(o=a[i],o!=null))switch(i){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":n=o;default:Mt(t,e,i,o,a,null)}e=s,a=r,t.multiple=!!n,e!=null?ho(t,!!n,e,!1):a!=null&&ho(t,!!n,a,!0);return;case"textarea":at("invalid",t),s=i=n=null;for(r in a)if(a.hasOwnProperty(r)&&(o=a[r],o!=null))switch(r){case"value":n=o;break;case"defaultValue":i=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(te(91));break;default:Mt(t,e,r,o,a,null)}Ey(t,n,i,s);return;case"option":for(l in a)a.hasOwnProperty(l)&&(n=a[l],n!=null)&&(l==="selected"?t.selected=n&&typeof n!="function"&&typeof n!="symbol":Mt(t,e,l,n,a,null));return;case"dialog":at("beforetoggle",t),at("toggle",t),at("cancel",t),at("close",t);break;case"iframe":case"object":at("load",t);break;case"video":case"audio":for(n=0;n<su.length;n++)at(su[n],t);break;case"image":at("error",t),at("load",t);break;case"details":at("toggle",t);break;case"embed":case"source":case"link":at("error",t),at("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&(n=a[u],n!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(te(137,e));default:Mt(t,e,u,n,a,null)}return;default:if(bg(e)){for(f in a)a.hasOwnProperty(f)&&(n=a[f],n!==void 0&&og(t,e,f,n,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(n=a[o],n!=null&&Mt(t,e,o,n,a,null))}var vT={};function ST(t,e,a,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,r=null,o=null,l=null,u=null,f=null;for(h in a){var p=a[h];if(a.hasOwnProperty(h)&&p!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":l=p;default:n.hasOwnProperty(h)||Mt(t,e,h,null,n,p)}}for(var c in n){var h=n[c];if(p=a[c],n.hasOwnProperty(c)&&(h!=null||p!=null))switch(c){case"type":h!==p&&(ft=!0),s=h;break;case"name":h!==p&&(ft=!0),i=h;break;case"checked":h!==p&&(ft=!0),u=h;break;case"defaultChecked":h!==p&&(ft=!0),f=h;break;case"value":h!==p&&(ft=!0),r=h;break;case"defaultValue":h!==p&&(ft=!0),o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(te(137,e));break;default:h!==p&&Mt(t,e,c,h,n,p)}}Sm(t,r,o,l,u,f,s,i);return;case"select":h=r=o=c=null;for(s in a)if(l=a[s],a.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":h=l;default:n.hasOwnProperty(s)||Mt(t,e,s,null,n,l)}for(i in n)if(s=n[i],l=a[i],n.hasOwnProperty(i)&&(s!=null||l!=null))switch(i){case"value":s!==l&&(ft=!0),c=s;break;case"defaultValue":s!==l&&(ft=!0),o=s;break;case"multiple":s!==l&&(ft=!0),r=s;default:s!==l&&Mt(t,e,i,s,n,l)}e=o,a=r,n=h,c!=null?ho(t,!!a,c,!1):!!n!=!!a&&(e!=null?ho(t,!!a,e,!0):ho(t,!!a,a?[]:"",!1));return;case"textarea":h=c=null;for(o in a)if(i=a[o],a.hasOwnProperty(o)&&i!=null&&!n.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Mt(t,e,o,null,n,i)}for(r in n)if(i=n[r],s=a[r],n.hasOwnProperty(r)&&(i!=null||s!=null))switch(r){case"value":i!==s&&(ft=!0),c=i;break;case"defaultValue":i!==s&&(ft=!0),h=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(te(91));break;default:i!==s&&Mt(t,e,r,i,n,s)}Iy(t,c,h);return;case"option":for(var S in a)c=a[S],a.hasOwnProperty(S)&&c!=null&&!n.hasOwnProperty(S)&&(S==="selected"?t.selected=!1:Mt(t,e,S,null,n,c));for(l in n)c=n[l],h=a[l],n.hasOwnProperty(l)&&c!==h&&(c!=null||h!=null)&&(l==="selected"?(c!==h&&(ft=!0),t.selected=c&&typeof c!="function"&&typeof c!="symbol"):Mt(t,e,l,c,n,h));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in a)c=a[b],a.hasOwnProperty(b)&&c!=null&&!n.hasOwnProperty(b)&&Mt(t,e,b,null,n,c);for(u in n)if(c=n[u],h=a[u],n.hasOwnProperty(u)&&c!==h&&(c!=null||h!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(te(137,e));break;default:Mt(t,e,u,c,n,h)}return;default:if(bg(e)){for(var g in a)c=a[g],a.hasOwnProperty(g)&&c!==void 0&&!n.hasOwnProperty(g)&&og(t,e,g,void 0,n,c);for(f in n)c=n[f],h=a[f],!n.hasOwnProperty(f)||c===h||c===void 0&&h===void 0||og(t,e,f,c,n,h);return}}for(var d in a)c=a[d],a.hasOwnProperty(d)&&c!=null&&!n.hasOwnProperty(d)&&Mt(t,e,d,null,n,c);for(p in n)c=n[p],h=a[p],!n.hasOwnProperty(p)||c===h||c==null&&h==null||Mt(t,e,p,c,n,h)}function BS(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yT(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],s=i.transferSize,r=i.initiatorType,o=i.duration;if(s&&o&&BS(r)){for(r=0,o=i.responseEnd,n+=1;n<a.length;n++){var l=a[n],u=l.startTime;if(u>o)break;var f=l.transferSize,p=l.initiatorType;f&&BS(p)&&(l=l.responseEnd,r+=f*(l<o?1:(o-u)/(l-u)))}if(--n,e+=8*(s+r)/(i.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var lg=null,ug=null;function ou(t){return t.nodeType===9?t:t.ownerDocument}function FS(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function UM(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function OM(t,e,a,n){return a=ou(a).createElement(t),a[Ma]=n,a[tn]=e,Aa(a,t,e),ha(a),a}function cg(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var im=null;function _T(){var t=window.event;return t&&t.type==="popstate"?t===im?!1:(im=t,!0):(im=null,!1)}var ux=typeof setTimeout=="function"?setTimeout:void 0,MT=typeof clearTimeout=="function"?clearTimeout:void 0,kS=typeof Promise=="function"?Promise:void 0,zS=typeof requestAnimationFrame=="function"?requestAnimationFrame:ux,bT=typeof queueMicrotask=="function"?queueMicrotask:typeof kS<"u"?function(t){return kS.resolve(null).then(t).catch(LT)}:ux;function LT(t){setTimeout(function(){throw t})}function Ns(t){return t==="head"}function HS(t,e){var a=e,n=0;do{var i=a.nextSibling;if(t.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){t.removeChild(i),Po(e);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")rm(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,rm(a);for(var s=a.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[gu]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=r}}else a==="body"&&rm(t.ownerDocument.body);a=i}while(a);Po(e)}function GS(t,e){var a=t;t=0;do{var n=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=n}while(a)}function BM(t,e,a){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(e=t.getClientRects(),e.length===1)var n=1;else for(var i=n=0;i<e.length;i++){var s=e[i];0<s.width&&0<s.height&&n++}n===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function FM(t,e){t=t.style,e=e.style;var a=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(a=e.display,t.display=a==null||typeof a=="boolean"?"":a,a=e.margin,a!=null?t.margin=a:(a=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function kM(t,e,a){return a=a.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function dg(t){var e=t.getBoundingClientRect(),a=getComputedStyle(t);return kM(e,a,t)}function CT(t){var e=t.getBoundingClientRect();e=new DOMRect(e.x+2e4,e.y+2e4,e.width,e.height);var a=getComputedStyle(t);return kM(e,a,t)}function AT(t){return t.documentElement.clientHeight}function wT(t){this.addEventListener("load",t),this.addEventListener("error",t)}function TT(t,e,a,n,i,s,r,o,l){var u=e.nodeType===9?e:e.ownerDocument;try{var f=u.startViewTransition({update:function(){var c=u.defaultView,h=c.navigation&&c.navigation.transition,S=u.fonts.status;n();var b=[];if(S==="loaded"&&(AT(u),u.fonts.status==="loading"&&b.push(u.fonts.ready)),S=b.length,t!==null)for(var g=t.suspenseyImages,d=0,m=0;m<g.length;m++){var y=g[m];if(!y.complete){var _=y.getBoundingClientRect();if(0<_.bottom&&0<_.right&&_.top<c.innerHeight&&_.left<c.innerWidth){if(d+=QM(y),d>yd){b.length=S;break}y=new Promise(wT.bind(y)),b.push(y)}}}if(0<b.length)return c=Promise.race([Promise.all(b),new Promise(function(A){return setTimeout(A,500)})]).then(i,i),(h?Promise.allSettled([h.finished,c]):c).then(s,s);if(i(),h)return h.finished.then(s,s);s()},types:a});u.__reactViewTransition=f;var p=[];return f.ready.then(function(){for(var c=u.documentElement.getAnimations({subtree:!0}),h=0;h<c.length;h++){var S=c[h],b=S.effect,g=b.pseudoElement;if(g!=null&&g.startsWith("::view-transition")){p.push(S),S=b.getKeyframes();for(var d=g=void 0,m=!0,y=0;y<S.length;y++){var _=S[y],A=_.width;if(g===void 0)g=A;else if(g!==A){m=!1;break}if(A=_.height,d===void 0)d=A;else if(d!==A){m=!1;break}delete _.width,delete _.height,_.transform==="none"&&delete _.transform}m&&g!==void 0&&d!==void 0&&(b.setKeyframes(S),m=getComputedStyle(b.target,b.pseudoElement),m.width!==g||m.height!==d)&&(m=S[0],m.width=g,m.height=d,m=S[S.length-1],m.width=g,m.height=d,b.setKeyframes(S))}}r()},function(c){u.__reactViewTransition===f&&(u.__reactViewTransition=null);try{typeof c=="object"&&c!==null&&c.name==="InvalidStateError"&&(c.message==="View transition was skipped because document visibility state is hidden."||c.message==="Skipping view transition because document visibility state has become hidden."||c.message==="Skipping view transition because viewport size changed."||c.message==="Transition was aborted because of invalid state")&&(c=null),c!==null&&l(c)}finally{n(),i(),r()}}),f.finished.finally(function(){for(var c=0;c<p.length;c++)p[c].cancel();u.__reactViewTransition===f&&(u.__reactViewTransition=null),o()}),f}catch{return n(),i(),r(),null}}function lr(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}lr.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:Tt({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)};lr.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,a=t.getAnimations({subtree:!0}),n=[],i=0;i<a.length;i++){var s=a[i].effect;s!==null&&s.target===t&&s.pseudoElement===e&&n.push(a[i])}return n};lr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function zM(t){return{name:t,group:new lr("group",t),imagePair:new lr("image-pair",t),old:new lr("old",t),new:new lr("new",t)}}function mn(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}mn.prototype.addEventListener=function(t,e,a){var n=null,i=null;if(!(a!=null&&typeof a!="boolean"&&(n=a.signal||null,n!==null&&n.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var s=this._eventListeners;if(HM(s,t,e,a)===-1){var r=this,o=e;a!=null&&typeof a!="boolean"&&a.once===!0&&(o=function(l){r.removeEventListener(t,e,a),typeof e=="function"?e.call(this,l):e.handleEvent(l)}),n!==null&&(i=r.removeEventListener.bind(r,t,e,a),n.addEventListener("abort",i,{once:!0}),i=n.removeEventListener.bind(n,"abort",i)),n=Eo(a),s.push({type:t,listener:e,optionsOrUseCapture:a,attachedListener:o,cleanup:i}),en(this._fragmentFiber.child,!1,IT,t,o,n)}this._eventListeners=s}};function IT(t,e,a,n){return ra(t).addEventListener(e,a,n),!1}mn.prototype.removeEventListener=function(t,e,a){var n=this._eventListeners;if(n!==null&&(e=HM(n,t,e,a),e!==-1)){var i=n[e];a=i.attachedListener;var s=i.cleanup;i=Eo(i.optionsOrUseCapture),en(this._fragmentFiber.child,!1,ET,t,a,i),n.splice(e,1),s!==null&&s()}};function ET(t,e,a,n){return ra(t).removeEventListener(e,a,n),!1}function Eo(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function VS(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function HM(t,e,a,n){if(t.length===0)return-1;n=VS(n);for(var i=0;i<t.length;i++){var s=t[i];if(s.type===e&&s.listener===a&&VS(s.optionsOrUseCapture)===n)return i}return-1}mn.prototype.dispatchEvent=function(t){var e=Mr(this._fragmentFiber);if(e===null)return!0;e=ra(e);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var n=e.nodeType===9?e.createComment(""):document.createTextNode("");if(a)for(var i=0;i<a.length;i++){var s=a[i];n.addEventListener(s.type,s.attachedListener,Eo(s.optionsOrUseCapture))}if(e.appendChild(n),t=n.dispatchEvent(t),a)for(i=0;i<a.length;i++)s=a[i],n.removeEventListener(s.type,s.attachedListener,Eo(s.optionsOrUseCapture));return e.removeChild(n),t}return e.dispatchEvent(t)};mn.prototype.focus=function(t){en(this._fragmentFiber.child,!0,GM,t,void 0,void 0)};function GM(t,e){return t.tag===6?!1:(t=ra(t),GT(t,e))}mn.prototype.focusLast=function(t){var e=[];en(this._fragmentFiber.child,!0,cx,e,void 0,void 0);for(var a=e.length-1;0<=a&&!GM(e[a],t);a--);};function cx(t,e){return e.push(t),!1}mn.prototype.blur=function(){var t=Mr(this._fragmentFiber);t!==null&&(t=ra(t),t=ou(t).activeElement,t!==null&&en(this._fragmentFiber.child,!1,RT,t,void 0,void 0))};function RT(t,e){return t.tag===6?!1:(t=ra(t),t===e||t.contains(e)?(e.blur(),!0):!1)}mn.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),en(this._fragmentFiber.child,!1,DT,t,void 0,void 0)};function DT(t,e){return t.tag===6||(t=ra(t),e.observe(t)),!1}mn.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),en(this._fragmentFiber.child,!1,NT,t,void 0,void 0);for(var a=e=0;a<zn.length;a++){var n=zn[a];n.fragmentInstance===this&&n.observer===t?t.unobserve(n.instance):zn[e++]=n}zn.length=e}};function NT(t,e){return t.tag===6||(t=ra(t),e.unobserve(t)),!1}var zn=[],sm=!1;function PT(t,e,a){zn.push({fragmentInstance:t,observer:e,instance:a}),sm||(sm=!0,VT(function(){sm=!1;var n=zn;zn=[];for(var i=0;i<n.length;i++){var s=n[i];s.observer.unobserve(s.instance)}}))}mn.prototype.getClientRects=function(){var t=[];return en(this._fragmentFiber.child,!1,UT,t,void 0,void 0),t};function UT(t,e){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),e.push.apply(e,a.getClientRects())}else t=ra(t),e.push.apply(e,t.getClientRects());return!1}mn.prototype.getRootNode=function(t){var e=Mr(this._fragmentFiber);return e===null?this:ra(e).getRootNode(t)};mn.prototype.compareDocumentPosition=function(t){var e=Mr(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];en(this._fragmentFiber.child,!1,cx,a,void 0,void 0);var n=ra(e);if(a.length===0){if(a=n,Mv(this._fragmentFiber)){e:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break e}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(a=e)}e=this._fragmentFiber;var i=n=a.compareDocumentPosition(t);return a===t?i=Node.DOCUMENT_POSITION_CONTAINS:n&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=cy(e)[1],a===null?i=Node.DOCUMENT_POSITION_PRECEDING:(t=ra(a).compareDocumentPosition(t),i=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=ra(a[0]),i=ra(a[a.length-1]);var s=Mv(this._fragmentFiber)?e.parentElement:n;if(s==null)return Node.DOCUMENT_POSITION_DISCONNECTED;n=s.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,s=s.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=e.compareDocumentPosition(t),o=i.compareDocumentPosition(t),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=n&&s&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,e=n&&e===t||s&&i===t||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!n&&e===t||!s&&i===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||OT(e,this._fragmentFiber,a[0],a[a.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function OT(t,e,a,n,i){var s=or(i);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!s)e:{for(;s!==null;){if(s.tag===7&&(s===e||s.alternate===e)){a=!0;break e}s=s.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(s===null)return s=i.ownerDocument,i===s||i===s.documentElement||i===s.body;e:{for(s=e,e=Mr(e);s!==null;){if(!(s.tag!==5&&s.tag!==3&&s.tag!==27||s!==e&&s.alternate!==e)){s=!0;break e}s=s.return}s=!1}return s}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!s)&&!(e=s===a)&&(e=lm(a,s,bv),e===null?e=!1:(en(e,!0,fA,s,a),s=$r,$r=null,e=s!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!s)&&!(e=s===n)&&(e=lm(n,s,bv),e===null?e=!1:(en(e,!0,hA,s,n),s=$r,om=$r=null,e=s!==null)),e):!1}function qS(t,e){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}mn.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(te(566));var e=[];en(this._fragmentFiber.child,!1,cx,e,void 0,void 0);var a=t!==!1;if(e.length===0){var n=cy(this._fragmentFiber);if(n=a?n[1]||n[0]||Mr(this._fragmentFiber):n[0]||n[1],n===null)return;if(n.tag===6){t=ra(n),qS(t,a);return}if(n=ra(n),n.nodeType!==9){if(n.nodeType===11){a="host"in n?n.host:null,a!==null&&a.scrollIntoView(t);return}n.scrollIntoView(t)}}for(n=a?e.length-1:0;n!==(a?-1:e.length);){var i=e[n];i.tag===6?(i=ra(i),qS(i,a)):ra(i).scrollIntoView(t),n+=a?-1:1}};function BT(t,e){return t=ra(t),VM(t,e),!1}function VM(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function qM(t,e){var a=e._eventListeners;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n];t.addEventListener(i.type,i.attachedListener,Eo(i.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(s){for(var r=0,o=0;o<zn.length;o++){var l=zn[o];(l.fragmentInstance!==e||l.observer!==s||l.instance!==t)&&(zn[r++]=l)}zn.length=r,s.observe(t)}),VM(t,e))}function FT(t,e){var a=e._eventListeners;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n];t.removeEventListener(i.type,i.attachedListener,Eo(i.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(s){typeof s.rootMargin=="string"?PT(e,s,t):s.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function fg(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":fg(a),$d(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function kT(t,e,a,n){for(;t.nodeType===1;){var i=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[gu])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=En(t.nextSibling),t===null)break}return null}function zT(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=En(t.nextSibling),t===null))return null;return t}function WM(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=En(t.nextSibling),t===null))return null;return t}function hg(t){return t.data==="$?"||t.data==="$~"}function dx(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function HT(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var n=function(){e(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function En(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var pg=null;function WS(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return En(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function XS(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function GT(t,e){function a(){n=!0}if(t.ownerDocument.activeElement===t)return!0;var n=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return n}function VT(t){zS(function(){zS(function(e){return t(e)})})}function XM(t,e,a){switch(e=ou(a),t){case"html":if(t=e.documentElement,!t)throw Error(te(452));return t;case"head":if(t=e.head,!t)throw Error(te(453));return t;case"body":if(t=e.body,!t)throw Error(te(454));return t;default:throw Error(te(451))}}function YM(t,e,a){for(var n in a){var i=a[n];a.hasOwnProperty(n)&&i!=null&&Mt(t,e,n,null,vT,i)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===si&&(t.onclick=null),$d(t)}function rm(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);$d(t)}var Rn=new Map,YS=new Set;function lu(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var Hi=gt.d;gt.d={f:qT,r:WT,D:XT,C:YT,L:ZT,m:KT,X:QT,S:JT,M:jT};function qT(){var t=Hi.f(),e=pf();return t||e}function WT(t){var e=Oo(t);e!==null&&e.tag===5&&e.type==="form"?R_(e):Hi.r(t)}var zo=typeof document>"u"?null:document;function ZM(t,e,a){var n=zo;if(n&&typeof e=="string"&&e){var i=wn(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),YS.has(i)||(YS.add(i),t={rel:t,crossOrigin:a,href:e},n.querySelector(i)===null&&(e=n.createElement("link"),Aa(e,"link",t),ha(e),n.head.appendChild(e)))}}function XT(t){Hi.D(t),ZM("dns-prefetch",t,null)}function YT(t,e){Hi.C(t,e),ZM("preconnect",t,e)}function ZT(t,e,a){Hi.L(t,e,a);var n=zo;if(n&&t&&e){var i='link[rel="preload"][as="'+wn(e)+'"]';e==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+wn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+wn(a.imageSizes)+'"]')):i+='[href="'+wn(t)+'"]';var s=i;switch(e){case"style":s=Ro(t);break;case"script":s=Ho(t)}if(!(Rn.has(s)||(t=Tt({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Rn.set(s,t),n.querySelector(i)!==null||e==="style"&&n.querySelector(Mu(s))||e==="script"&&n.querySelector(bu(s))))){var r=n.createElement("link");Aa(r,"link",t),e==="style"&&(r[wd]=!0,r.onload=r.onerror=function(){by(r)}),ha(r),n.head.appendChild(r)}}}function KT(t,e){Hi.m(t,e);var a=zo;if(a&&t){var n=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+wn(n)+'"][href="'+wn(t)+'"]',s=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Ho(t)}if(!Rn.has(s)&&(t=Tt({rel:"modulepreload",href:t},e),Rn.set(s,t),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bu(s)))return}n=a.createElement("link"),Aa(n,"link",t),ha(n),a.head.appendChild(n)}}}function JT(t,e,a){Hi.S(t,e,a);var n=zo;if(n&&t){var i=fo(n).hoistableStyles,s=Ro(t);e=e||"default";var r=i.get(s);if(!r){var o={loading:0,preload:null};if(r=n.querySelector(Mu(s)))o.loading=5;else{t=Tt({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Rn.get(s))&&fx(t,a);var l=r=n.createElement("link");ha(l),Aa(l,"link",t),l._p=new Promise(function(u,f){l.onload=u,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,vd(r,e,n)}r={type:"stylesheet",instance:r,count:1,state:o},i.set(s,r)}}}function QT(t,e){Hi.X(t,e);var a=zo;if(a&&t){var n=fo(a).hoistableScripts,i=Ho(t),s=n.get(i);s||(s=a.querySelector(bu(i)),s||(t=Tt({src:t,async:!0},e),(e=Rn.get(i))&&hx(t,e),s=a.createElement("script"),ha(s),Aa(s,"link",t),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function jT(t,e){Hi.M(t,e);var a=zo;if(a&&t){var n=fo(a).hoistableScripts,i=Ho(t),s=n.get(i);s||(s=a.querySelector(bu(i)),s||(t=Tt({src:t,async:!0,type:"module"},e),(e=Rn.get(i))&&hx(t,e),s=a.createElement("script"),ha(s),Aa(s,"link",t),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function ZS(t,e,a,n){var i=(i=xs.current)?lu(i):null;if(!i)throw Error(te(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Ro(a.href),e=fo(i).hoistableStyles,n=e.get(a),n||(n={type:"style",instance:null,count:0,state:null},e.set(a,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ro(a.href);var s=fo(i).hoistableStyles,r=s.get(t);if(r||(i=i.ownerDocument||i,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,r),(s=i.querySelector(Mu(t)))?s._p||(r.instance=s,r.state.loading=5):(s=Rn.get(t),s||(s={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Rn.set(t,s)),$T(i,t,s,r.state))),e&&n===null)throw Error(te(528,""));return r}if(e&&n!==null)throw Error(te(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(a=Ho(a),e=fo(i).hoistableScripts,n=e.get(a),n||(n={type:"script",instance:null,count:0,state:null},e.set(a,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(te(444,t))}}function Ro(t){return'href="'+wn(t)+'"'}function Mu(t){return'link[rel="stylesheet"]['+t+"]"}function KM(t){return Tt({},t,{"data-precedence":t.precedence,precedence:null})}function $T(t,e,a,n){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[wd]!==!0){n.loading=1;return}}else e=t.createElement("link"),e[wd]=!0,e.onload=e.onerror=by.bind(null,e),Aa(e,"link",a),ha(e),t.head.appendChild(e);n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2})}function Ho(t){return'[src="'+wn(t)+'"]'}function bu(t){return"script[async]"+t}function KS(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+wn(a.href)+'"]');if(n)return e.instance=n,ha(n),n;var i=Tt({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),ha(n),Aa(n,"style",i),vd(n,a.precedence,t),e.instance=n;case"stylesheet":i=Ro(a.href);var s=t.querySelector(Mu(i));if(s)return e.state.loading|=4,e.instance=s,ha(s),s;n=KM(a),(i=Rn.get(i))&&fx(n,i),s=(t.ownerDocument||t).createElement("link"),ha(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Aa(s,"link",n),e.state.loading|=4,vd(s,a.precedence,t),e.instance=s;case"script":return s=Ho(a.src),(i=t.querySelector(bu(s)))?(e.instance=i,ha(i),i):(n=a,(i=Rn.get(s))&&(n=Tt({},a),hx(n,i)),t=t.ownerDocument||t,i=t.createElement("script"),ha(i),Aa(i,"link",n),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(te(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,vd(n,a.precedence,t));return e.instance}function vd(t,e,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,s=i,r=0;r<n.length;r++){var o=n[r];if(o.dataset.precedence===e)s=o;else if(s!==i)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function fx(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function hx(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Sd=null;function JS(t,e,a){if(Sd===null){var n=new Map,i=Sd=new Map;i.set(a,n)}else i=Sd,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(t))return n;for(n.set(t,null),a=a.getElementsByTagName(t),i=0;i<a.length;i++){var s=a[i];if(!(s[gu]||s[Ma]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(e)||"";r=t+r;var o=n.get(r);o?o.push(s):n.set(r,[s])}}return n}function mg(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function eI(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function QS(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function JM(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function QM(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function jS(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=QM(e),t.suspenseyImages.push(e)),t=nI.bind(t),e.decode().then(t,t))}function tI(t,e,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=Ro(n.href),s=e.querySelector(Mu(i));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=uu.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=s,ha(s);return}s=e.ownerDocument||e,n=KM(n),(i=Rn.get(i))&&fx(n,i),s=s.createElement("link"),ha(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Aa(s,"link",n),a.instance=s}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=uu.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var yd=0;function aI(t,e){return t.stylesheets&&t.count===0&&_d(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var n=setTimeout(function(){if(t.stylesheets&&_d(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4+e);0<t.imgBytes&&yd===0&&(yd=62500*yT());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&_d(t,t.stylesheets),t.unsuspend)){var s=t.unsuspend;t.unsuspend=null,s()}},(t.imgBytes>yd?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function jM(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)_d(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function uu(){this.count--,jM(this)}function nI(){this.imgCount--,jM(this)}var Jd=null;function _d(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Jd=new Map,e.forEach(iI,t),Jd=null,uu.call(t))}function iI(t,e){if(!(e.state.loading&4)){var a=Jd.get(t);if(a)var n=a.get(null);else{a=new Map,Jd.set(t,a);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var r=i[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),n=r)}n&&a.set(null,n)}i=e.instance,r=i.getAttribute("data-precedence"),s=a.get(r)||n,s===n&&a.set(null,i),a.set(r,i),this.count++,n=uu.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),s?s.parentNode.insertBefore(i,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Do={$$typeof:ii,Provider:null,Consumer:null,_currentValue:ur,_currentValue2:ur,_threadCount:0};function sI(t,e,a,n,i,s,r,o,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pp(0),this.hiddenUpdates=Pp(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function $M(t,e,a,n,i,s,r,o,l,u,f,p){return t=new sI(t,e,a,r,l,u,f,p,o),e=1,s===!0&&(e|=24),s=ja(3,null,null,e),t.current=s,s.stateNode=t,e=Ng(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:n,isDehydrated:a,cache:e},Og(s),t}function eb(t){return t?(t=oo,t):oo}function tb(t,e,a,n,i,s){i=eb(i),n.context===null?n.context=i:n.pendingContext=i,n=Ss(e),n.payload={element:a},s=s===void 0?null:s,s!==null&&(n.callback=s),a=ys(t,n,e),a!==null&&($a(a,t,e),Hl(a,t,e))}function $S(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function px(t,e){$S(t,e),(t=t.alternate)&&$S(t,e)}function ab(t){if(t.tag===13||t.tag===31){var e=Cr(t,67108864);e!==null&&$a(e,t,67108864),px(t,67108864)}}function ey(t){if(t.tag===13||t.tag===31){var e=hn();e=_g(e);var a=Cr(t,e);a!==null&&$a(a,t,e),px(t,e)}}var No=!0;function rI(t,e,a,n){var i=ze.T;ze.T=null;var s=gt.p;try{gt.p=2,mx(t,e,a,n)}finally{gt.p=s,ze.T=i}}function oI(t,e,a,n){var i=ze.T;ze.T=null;var s=gt.p;try{gt.p=8,mx(t,e,a,n)}finally{gt.p=s,ze.T=i}}function mx(t,e,a,n){if(No){var i=gg(n);if(i===null)nm(t,e,n,Qd,a),ty(t,n);else if(uI(i,t,e,a,n))n.stopPropagation();else if(ty(t,n),e&4&&-1<lI.indexOf(t)){for(;i!==null;){var s=Oo(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=ir(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-fn(r);o.entanglements[1]|=l,r&=~l}fi(s),(mt&6)===0&&(Wd=cn()+500,_u(0,!1))}}break;case 31:case 13:o=Cr(s,2),o!==null&&$a(o,s,2),pf(),px(s,2)}if(s=gg(n),s===null&&nm(t,e,n,Qd,a),s===i)break;i=s}i!==null&&n.stopPropagation()}else nm(t,e,n,null,a)}}function gg(t){return t=Lg(t),gx(t)}var Qd=null;function gx(t){if(Qd=null,t=or(t),t!==null){var e=fu(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=oy(e),t!==null)return t;t=null}else if(a===31){if(t=ly(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Qd=t,null}function nb(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(MA()){case py:return 2;case my:return 8;case Ad:case bA:return 32;case gy:return 268435456;default:return 32}default:return 32}}var xg=!1,Ls=null,Cs=null,As=null,cu=new Map,du=new Map,cs=[],lI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ty(t,e){switch(t){case"focusin":case"focusout":Ls=null;break;case"dragenter":case"dragleave":Cs=null;break;case"mouseover":case"mouseout":As=null;break;case"pointerover":case"pointerout":cu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":du.delete(e.pointerId)}}function El(t,e,a,n,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:a,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Oo(e),e!==null&&ab(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function uI(t,e,a,n,i){switch(e){case"focusin":return Ls=El(Ls,t,e,a,n,i),!0;case"dragenter":return Cs=El(Cs,t,e,a,n,i),!0;case"mouseover":return As=El(As,t,e,a,n,i),!0;case"pointerover":var s=i.pointerId;return cu.set(s,El(cu.get(s)||null,t,e,a,n,i)),!0;case"gotpointercapture":return s=i.pointerId,du.set(s,El(du.get(s)||null,t,e,a,n,i)),!0}return!1}function ib(t){var e=or(t.target);if(e!==null){var a=fu(e);if(a!==null){if(e=a.tag,e===13){if(e=oy(a),e!==null){t.blockedOn=e,wv(t.priority,function(){ey(a)});return}}else if(e===31){if(e=ly(a),e!==null){t.blockedOn=e,wv(t.priority,function(){ey(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Md(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=gg(t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);ym=n,a.target.dispatchEvent(n),ym=null}else return e=Oo(a),e!==null&&ab(e),t.blockedOn=a,!1;e.shift()}return!0}function ay(t,e,a){Md(t)&&a.delete(e)}function cI(){xg=!1,Ls!==null&&Md(Ls)&&(Ls=null),Cs!==null&&Md(Cs)&&(Cs=null),As!==null&&Md(As)&&(As=null),cu.forEach(ay),du.forEach(ay)}function ad(t,e){t.blockedOn===e&&(t.blockedOn=null,xg||(xg=!0,oa.unstable_scheduleCallback(oa.unstable_NormalPriority,cI)))}var nd=null;function ny(t){nd!==t&&(nd=t,oa.unstable_scheduleCallback(oa.unstable_NormalPriority,function(){nd===t&&(nd=null);for(var e=0;e<t.length;e+=3){var a=t[e],n=t[e+1],i=t[e+2];if(typeof n!="function"){if(gx(n||a)===null)continue;break}var s=Oo(a);s!==null&&(t.splice(e,3),e-=3,Om(s,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Po(t){function e(l){return ad(l,t)}Ls!==null&&ad(Ls,t),Cs!==null&&ad(Cs,t),As!==null&&ad(As,t),cu.forEach(e),du.forEach(e);for(var a=0;a<cs.length;a++){var n=cs[a];n.blockedOn===t&&(n.blockedOn=null)}for(;0<cs.length&&(a=cs[0],a.blockedOn===null);)ib(a),a.blockedOn===null&&cs.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],s=a[n+1],r=i[tn]||null;if(typeof s=="function")r||ny(a);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(i=s,r=s[tn]||null)o=r.formAction;else if(gx(i)!==null)continue}else o=r.action;typeof o=="function"?a[n+1]=o:(a.splice(n,3),n-=3),ny(a)}}}function sb(){function t(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return i=r})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function xx(t){this._internalRoot=t}xf.prototype.render=xx.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));var a=e.current,n=hn();tb(a,n,t,e,null,null)};xf.prototype.unmount=xx.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;tb(t.current,2,null,t,null,null),pf(),e[Uo]=null}};function xf(t){this._internalRoot=t}xf.prototype.unstable_scheduleHydration=function(t){if(t){var e=My();t={blockedOn:null,target:t,priority:e};for(var a=0;a<cs.length&&e!==0&&e<cs[a].priority;a++);cs.splice(a,0,t),a===0&&ib(t)}};var iy=sy.version;if(iy!=="19.3.1")throw Error(te(527,iy,"19.3.1"));gt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=dA(e),t=t!==null?uy(t):null,t=t===null?null:t.stateNode,t};var dI={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:ze,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Rl.isDisabled&&Rl.supportsFiber))try{hu=Rl.inject(dI),dn=Rl}catch{}var Rl;vf.createRoot=function(t,e){if(!ry(t))throw Error(te(299));var a=!1,n="",i=k_,s=z_,r=H_;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=$M(t,1,!1,null,null,a,n,null,i,s,r,sb),t[Uo]=e.current,lx(t),new xx(e)};vf.hydrateRoot=function(t,e,a){if(!ry(t))throw Error(te(299));var n=!1,i="",s=k_,r=z_,o=H_,l=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(l=a.formState)),e=$M(t,1,!0,e,a??null,n,i,l,s,r,o,sb),e.context=eb(null),a=e.current,n=hn(),n=_g(n),i=Ss(n),i.callback=null,ys(a,i,n),a=n,e.current.lanes=a,mu(e,a),fi(e),t[Uo]=e.current,lx(t),new xf(e)};vf.version="19.3.1"});var ub=Ci((ZD,lb)=>{"use strict";function ob(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ob)}catch(t){console.error(t)}}ob(),lb.exports=rb()});function fI(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function hI(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Du(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function fL(){let t=Du("canvas");return t.style.display="block",t}function S0(...t){let e="THREE."+t.shift();il?il("log",e,...t):console.log(e,...t)}function hL(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let a=t[1];a&&a.isStackTrace?t[0]+=" "+a.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Fe(...t){t=hL(t);let e="THREE."+t.shift();if(il)il("warn",e,...t);else{let a=t[0];a&&a.isStackTrace?console.warn(a.getError(e)):console.warn(e,...t)}}function Ve(...t){t=hL(t);let e="THREE."+t.shift();if(il)il("error",e,...t);else{let a=t[0];a&&a.isStackTrace?console.error(a.getError(e)):console.error(e,...t)}}function Tu(...t){let e=t.join(" ");e in cb||(cb[e]=!0,Fe(...t))}function pL(t,e,a){return new Promise(function(n,i){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:i();break;case t.TIMEOUT_EXPIRED:setTimeout(s,a);break;default:n()}}setTimeout(s,a)})}function ic(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ua[t&255]+Ua[t>>8&255]+Ua[t>>16&255]+Ua[t>>24&255]+"-"+Ua[e&255]+Ua[e>>8&255]+"-"+Ua[e>>16&15|64]+Ua[e>>24&255]+"-"+Ua[a&63|128]+Ua[a>>8&255]+"-"+Ua[a>>16&255]+Ua[a>>24&255]+Ua[n&255]+Ua[n>>8&255]+Ua[n>>16&255]+Ua[n>>24&255]).toLowerCase()}function ut(t,e,a){return Math.max(e,Math.min(a,t))}function pI(t,e){return(t%e+e)%e}function Sx(t,e,a){return(1-a)*t+a*e}function gL(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function y0(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function mI(t,e){if(e.constructor===Float32Array)return t;let a=y0(e);if(a===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/a,-1)}function gI(t,e){if(e.constructor===Float32Array)return t;let a=y0(e);if(a===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*a)}function xI(){let t={enabled:!0,workingColorSpace:Eu,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===St&&(i.r=Yi(i.r),i.g=Yi(i.g),i.b=Yi(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===St&&(i.r=tl(i.r),i.g=tl(i.g),i.b=tl(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===$i?Ru:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[r].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],n=[.3127,.329];return t.define({[Eu]:{primaries:e,whitePoint:n,transfer:Ru,toXYZ:fb,fromXYZ:hb,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:e,whitePoint:n,transfer:St,toXYZ:fb,fromXYZ:hb,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),t}function Yi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function tl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}function Mx(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?jf.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}function Cx(t,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?t+(e-t)*6*a:a<1/2?e:a<2/3?t+(e-t)*6*(2/3-a):t}function Nx(t,e,a,n,i){for(let s=0,r=t.length-3;s<=r;s+=3){Tr.fromArray(t,s);let o=i.x*Math.abs(Tr.x)+i.y*Math.abs(Tr.y)+i.z*Math.abs(Tr.z),l=e.dot(Tr),u=a.dot(Tr),f=n.dot(Tr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>o)return!1}return!0}function NI(t,e,a,n,i,s,r,o){let l;if(e.side===Ya?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,e.side===Ys,o),l===null)return null;Nf.copy(o),Nf.applyMatrix4(t.matrixWorld);let u=a.ray.origin.distanceTo(Nf);return u<a.near||u>a.far?null:{distance:u,point:Nf.clone(),object:t}}function Pf(t,e,a,n,i,s,r,o,l,u){t.getVertexPosition(o,If),t.getVertexPosition(l,Ef),t.getVertexPosition(u,Rf);let f=NI(t,e,a,n,If,Ef,Rf,Lb);if(f){let p=new z;ks.getBarycoord(Lb,If,Ef,Rf,p),i&&(f.uv=ks.getInterpolatedAttribute(i,o,l,u,p,new et)),s&&(f.uv1=ks.getInterpolatedAttribute(s,o,l,u,p,new et)),r&&(f.normal=ks.getInterpolatedAttribute(r,o,l,u,p,new z),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let c={a:o,b:l,c:u,normal:new z,materialIndex:0};ks.getNormal(If,Ef,Rf,c.normal),f.face=c,f.barycoord=p}return f}function Br(t){let e={};for(let a in t){e[a]={};for(let n in t[a]){let i=t[a][n];if(Ab(i))i.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[a][n]=null):e[a][n]=i.clone();else if(Array.isArray(i))if(Ab(i[0])){let s=[];for(let r=0,o=i.length;r<o;r++)s[r]=i[r].clone();e[a][n]=s}else e[a][n]=i.slice();else e[a][n]=i}}return e}function Ba(t){let e={};for(let a=0;a<t.length;a++){let n=Br(t[a]);for(let i in n)e[i]=n[i]}return e}function Ab(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function UI(t){let e=[];for(let a=0;a<t.length;a++)e.push(t[a].clone());return e}function _0(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}function jo(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function Of(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}function SL(t,e,a,n,i){let s=1-t;return s*s*s*e+3*s*s*t*a+3*s*t*t*n+t*t*t*i}function FI(t,e,a,n,i){let s=1-t;return 3*s*s*(a-e)+6*s*t*(n-a)+3*t*t*(i-n)}function kI(t,e,a,n,i){let s=(t-e)/(i-e);for(let r=0;r<8;r++){let o=SL(s,e,a,n,i)-t;if(Math.abs(o)<1e-10)break;let l=FI(s,e,a,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}function wb(t,e){for(let a=0,n=t.length;a!==n;a+=2)t[a]+=e}function Tb(t,e){for(let a=0,n=t.length;a!==n;a+=2)t[a]*=e}function L0(t,e,a,n){let i=ZI(n);switch(a){case f0:return t*e;case p0:return t*e/i.components*i.byteLength;case wh:return t*e/i.components*i.byteLength;case Zs:return t*e*2/i.components*i.byteLength;case Th:return t*e*2/i.components*i.byteLength;case h0:return t*e*3/i.components*i.byteLength;case Jn:return t*e*4/i.components*i.byteLength;case Ih:return t*e*4/i.components*i.byteLength;case ju:case $u:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ec:case tc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rh:case Nh:return Math.max(t,16)*Math.max(e,8)/4;case Eh:case Dh:return Math.max(t,8)*Math.max(e,8)/2;case Ph:case Uh:case Bh:case Fh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Oh:case ac:case kh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case qh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Zh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Qh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case jh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case $h:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ep:case tp:case ap:return Math.ceil(t/4)*Math.ceil(e/4)*16;case np:case ip:return Math.ceil(t/4)*Math.ceil(e/4)*8;case nc:case sp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function ZI(t){switch(t){case nn:case l0:return{byteLength:1,components:1};case fl:case u0:case Kn:return{byteLength:2,components:1};case Ch:case Ah:return{byteLength:2,components:4};case Yn:case Lh:case Zn:return{byteLength:4,components:1};case c0:case d0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}var Nb,Yx,Pb,Ju,Ub,ul,Ys,Ya,yi,Nr,cl,Zx,Kx,Jx,Ob,Pr,Bb,Fb,kb,zb,Hb,Gb,Vb,qb,Qx,jx,Wb,Xb,Yb,Zb,Kb,Jb,Qb,jb,$b,Hf,Gf,Vf,al,qf,Wf,Xf,Yf,$x,eL,tL,_i,e0,t0,a0,n0,i0,s0,r0,o0,Ur,dl,_h,Mh,Zf,pi,Kf,xa,aL,Qu,Wa,bh,Qi,nn,l0,u0,fl,Lh,Yn,Zn,Kn,Ch,Ah,Or,c0,d0,f0,h0,Jn,Zi,ji,p0,wh,Zs,Th,Ih,ju,$u,ec,tc,Eh,Rh,Dh,Nh,Ph,Uh,Oh,Bh,Fh,ac,kh,zh,Hh,Gh,Vh,qh,Wh,Xh,Yh,Zh,Kh,Jh,Qh,jh,$h,ep,tp,ap,np,ip,nc,sp,Iu,Jf,kf,zx,Hx,Gx,Vx,nL,rp,iL,$i,vn,Eu,Ru,St,zf,sL,rL,oL,lL,m0,uL,cL,g0,x0,dL,v0,Nn,nl,cb,il,mL,gi,Ua,vx,Qf,et,xi,z,yx,db,We,_x,fb,hb,ot,Go,jf,vI,sl,SI,bx,an,kt,$f,Sn,Nu,eh,Ft,Vo,Vn,yI,_I,Ps,Sf,gn,pb,mb,Ki,Pu,MI,gb,qo,Gi,yf,Lu,bI,LI,xb,vb,Sb,yb,CI,Wo,Lx,Xa,Rr,AI,rl,xL,Us,_f,lt,Oa,Uu,qn,Vi,Ax,qi,Xo,Yo,_b,wx,Tx,Ix,Ex,Rx,Dx,ks,zs,Wi,Wn,Mf,Zo,Ko,Jo,Os,Bs,wr,Cu,bf,Lf,Tr,na,Cf,wI,mi,Ou,Bu,ga,TI,Au,Px,ol,II,Dn,Ux,Qo,xn,wu,ma,vi,Ox,EI,RI,Xn,DI,Hs,Xi,Bx,Af,wf,th,ah,Mb,Ir,Tf,bb,If,Ef,Rf,Fx,Df,Lb,Nf,Pn,nh,Er,PI,Uf,Gs,Cb,ih,Fu,Ji,ku,zu,Vs,sh,Hu,Gu,Vu,vL,OI,BI,Si,rh,Dr,oh,lh,qs,uh,ch,dh,fh,yn,Ws,hh,ph,mh,qu,Xs,gh,xh,yL,vh,Wu,kx,Ib,Eb,Sh,Bf,Ff,hi,Xu,Fs,Rb,Db,qa,Yu,qx,Zu,Ku,$o,el,ll,yh,M0,zI,b0,HI,GI,VI,qI,WI,XI,YI,Wx,Pt,KD,Xx,C0=Ge(()=>{Nb=0,Yx=1,Pb=2,Ju=1,Ub=2,ul=3,Ys=0,Ya=1,yi=2,Nr=0,cl=1,Zx=2,Kx=3,Jx=4,Ob=5,Pr=100,Bb=101,Fb=102,kb=103,zb=104,Hb=200,Gb=201,Vb=202,qb=203,Qx=204,jx=205,Wb=206,Xb=207,Yb=208,Zb=209,Kb=210,Jb=211,Qb=212,jb=213,$b=214,Hf=0,Gf=1,Vf=2,al=3,qf=4,Wf=5,Xf=6,Yf=7,$x=0,eL=1,tL=2,_i=0,e0=1,t0=2,a0=3,n0=4,i0=5,s0=6,r0=7,o0=300,Ur=301,dl=302,_h=303,Mh=304,Zf=1e3,pi=1001,Kf=1002,xa=1003,aL=1004,Qu=1005,Wa=1006,bh=1007,Qi=1008,nn=1009,l0=1010,u0=1011,fl=1012,Lh=1013,Yn=1014,Zn=1015,Kn=1016,Ch=1017,Ah=1018,Or=1020,c0=35902,d0=35899,f0=1021,h0=1022,Jn=1023,Zi=1026,ji=1027,p0=1028,wh=1029,Zs=1030,Th=1031,Ih=1033,ju=33776,$u=33777,ec=33778,tc=33779,Eh=35840,Rh=35841,Dh=35842,Nh=35843,Ph=36196,Uh=37492,Oh=37496,Bh=37488,Fh=37489,ac=37490,kh=37491,zh=37808,Hh=37809,Gh=37810,Vh=37811,qh=37812,Wh=37813,Xh=37814,Yh=37815,Zh=37816,Kh=37817,Jh=37818,Qh=37819,jh=37820,$h=37821,ep=36492,tp=36494,ap=36495,np=36283,ip=36284,nc=36285,sp=36286,Iu=2300,Jf=2301,kf=2302,zx=2303,Hx=2400,Gx=2401,Vx=2402,nL=3200,rp=0,iL=1,$i="",vn="srgb",Eu="srgb-linear",Ru="linear",St="srgb",zf=7680,sL=519,rL=512,oL=513,lL=514,m0=515,uL=516,cL=517,g0=518,x0=519,dL=35044,v0="300 es",Nn=2e3,nl=2001;cb={},il=null;mL={[Hf]:Hf,[Vf]:Xf,[qf]:qf,[al]:Wf,[Gf]:Gf,[Xf]:Vf,[Yf]:Yf,[Wf]:al},gi=class{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(a)===-1&&n[e].push(a)}hasEventListener(e,a){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(a)!==-1}removeEventListener(e,a){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(a);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let a=this._listeners;if(a===void 0)return;let n=a[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}},Ua=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vx=Math.PI/180,Qf=180/Math.PI;et=class{static{this.prototype.isVector2=!0}constructor(e=0,a=0){this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let a=this.x,n=this.y,i=e.elements;return this.x=i[0]*a+i[3]*n+i[6],this.y=i[1]*a+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=ut(this.x,e.x,a.x),this.y=ut(this.y,e.y,a.y),this}clampScalar(e,a){return this.x=ut(this.x,e,a),this.y=ut(this.y,e,a),this}clampLength(e,a){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let n=this.dot(e)/a;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,n=this.y-e.y;return a*a+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,n){return this.x=e.x+(a.x-e.x)*n,this.y=e.y+(a.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){let n=Math.cos(a),i=Math.sin(a),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xi=class{constructor(e=0,a=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=a,this._z=n,this._w=i}static slerpFlat(e,a,n,i,s,r,o){let l=n[i+0],u=n[i+1],f=n[i+2],p=n[i+3],c=s[r+0],h=s[r+1],S=s[r+2],b=s[r+3];if(p!==b||l!==c||u!==h||f!==S){let g=l*c+u*h+f*S+p*b;g<0&&(c=-c,h=-h,S=-S,b=-b,g=-g);let d=1-o;if(g<.9995){let m=Math.acos(g),y=Math.sin(m);d=Math.sin(d*m)/y,o=Math.sin(o*m)/y,l=l*d+c*o,u=u*d+h*o,f=f*d+S*o,p=p*d+b*o}else{l=l*d+c*o,u=u*d+h*o,f=f*d+S*o,p=p*d+b*o;let m=1/Math.sqrt(l*l+u*u+f*f+p*p);l*=m,u*=m,f*=m,p*=m}}e[a]=l,e[a+1]=u,e[a+2]=f,e[a+3]=p}static multiplyQuaternionsFlat(e,a,n,i,s,r){let o=n[i],l=n[i+1],u=n[i+2],f=n[i+3],p=s[r],c=s[r+1],h=s[r+2],S=s[r+3];return e[a]=o*S+f*p+l*h-u*c,e[a+1]=l*S+f*c+u*p-o*h,e[a+2]=u*S+f*h+o*c-l*p,e[a+3]=f*S-o*p-l*c-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,n,i){return this._x=e,this._y=a,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a=!0){let n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,u=o(n/2),f=o(i/2),p=o(s/2),c=l(n/2),h=l(i/2),S=l(s/2);switch(r){case"XYZ":this._x=c*f*p+u*h*S,this._y=u*h*p-c*f*S,this._z=u*f*S+c*h*p,this._w=u*f*p-c*h*S;break;case"YXZ":this._x=c*f*p+u*h*S,this._y=u*h*p-c*f*S,this._z=u*f*S-c*h*p,this._w=u*f*p+c*h*S;break;case"ZXY":this._x=c*f*p-u*h*S,this._y=u*h*p+c*f*S,this._z=u*f*S+c*h*p,this._w=u*f*p-c*h*S;break;case"ZYX":this._x=c*f*p-u*h*S,this._y=u*h*p+c*f*S,this._z=u*f*S-c*h*p,this._w=u*f*p+c*h*S;break;case"YZX":this._x=c*f*p+u*h*S,this._y=u*h*p+c*f*S,this._z=u*f*S-c*h*p,this._w=u*f*p-c*h*S;break;case"XZY":this._x=c*f*p-u*h*S,this._y=u*h*p-c*f*S,this._z=u*f*S+c*h*p,this._w=u*f*p+c*h*S;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,a){let n=a/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let a=e.elements,n=a[0],i=a[4],s=a[8],r=a[1],o=a[5],l=a[9],u=a[2],f=a[6],p=a[10],c=n+o+p;if(c>0){let h=.5/Math.sqrt(c+1);this._w=.25/h,this._x=(f-l)*h,this._y=(s-u)*h,this._z=(r-i)*h}else if(n>o&&n>p){let h=2*Math.sqrt(1+n-o-p);this._w=(f-l)/h,this._x=.25*h,this._y=(i+r)/h,this._z=(s+u)/h}else if(o>p){let h=2*Math.sqrt(1+o-n-p);this._w=(s-u)/h,this._x=(i+r)/h,this._y=.25*h,this._z=(l+f)/h}else{let h=2*Math.sqrt(1+p-n-o);this._w=(r-i)/h,this._x=(s+u)/h,this._y=(l+f)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let n=e.dot(a)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,a){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,a/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){let n=e._x,i=e._y,s=e._z,r=e._w,o=a._x,l=a._y,u=a._z,f=a._w;return this._x=n*f+r*o+i*u-s*l,this._y=i*f+r*l+s*o-n*u,this._z=s*f+r*u+n*l-i*o,this._w=r*f-n*o-i*l-s*u,this._onChangeCallback(),this}slerp(e,a){let n=e._x,i=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,r=-r,o=-o);let l=1-a;if(o<.9995){let u=Math.acos(o),f=Math.sin(u);l=Math.sin(l*u)/f,a=Math.sin(a*u)/f,this._x=this._x*l+n*a,this._y=this._y*l+i*a,this._z=this._z*l+s*a,this._w=this._w*l+r*a,this._onChangeCallback()}else this._x=this._x*l+n*a,this._y=this._y*l+i*a,this._z=this._z*l+s*a,this._w=this._w*l+r*a,this.normalize();return this}slerpQuaternions(e,a,n){return this.copy(e).slerp(a,n)}random(){let e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(a),s*Math.cos(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class{static{this.prototype.isVector3=!0}constructor(e=0,a=0,n=0){this.x=e,this.y=a,this.z=n}set(e,a,n){return n===void 0&&(n=this.z),this.x=e,this.y=a,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return this.applyQuaternion(db.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion(db.setFromAxisAngle(e,a))}applyMatrix3(e){let a=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*a+s[3]*n+s[6]*i,this.y=s[1]*a+s[4]*n+s[7]*i,this.z=s[2]*a+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let a=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*a+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*a+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*a+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*a+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){let a=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,l=e.w,u=2*(r*i-o*n),f=2*(o*a-s*i),p=2*(s*n-r*a);return this.x=a+l*u+r*p-o*f,this.y=n+l*f+o*u-s*p,this.z=i+l*p+s*f-r*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let a=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*a+s[4]*n+s[8]*i,this.y=s[1]*a+s[5]*n+s[9]*i,this.z=s[2]*a+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=ut(this.x,e.x,a.x),this.y=ut(this.y,e.y,a.y),this.z=ut(this.z,e.z,a.z),this}clampScalar(e,a){return this.x=ut(this.x,e,a),this.y=ut(this.y,e,a),this.z=ut(this.z,e,a),this}clampLength(e,a){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,n){return this.x=e.x+(a.x-e.x)*n,this.y=e.y+(a.y-e.y)*n,this.z=e.z+(a.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,a){let n=e.x,i=e.y,s=e.z,r=a.x,o=a.y,l=a.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){let a=e.lengthSq();if(a===0)return this.set(0,0,0);let n=e.dot(this)/a;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yx.copy(this).projectOnVector(e),this.sub(yx)}reflect(e){return this.sub(yx.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let n=this.dot(e)/a;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return a*a+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,n){let i=Math.sin(a)*e;return this.x=i*Math.sin(n),this.y=Math.cos(a)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,n){return this.x=e*Math.sin(a),this.y=n,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){let a=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=n,this.z=i,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,a=Math.random()*2-1,n=Math.sqrt(1-a*a);return this.x=n*Math.cos(e),this.y=a,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},yx=new z,db=new xi,We=class{static{this.prototype.isMatrix3=!0}constructor(e,a,n,i,s,r,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,a,n,i,s,r,o,l,u)}set(e,a,n,i,s,r,o,l,u){let f=this.elements;return f[0]=e,f[1]=i,f[2]=o,f[3]=a,f[4]=s,f[5]=l,f[6]=n,f[7]=r,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let a=this.elements,n=e.elements;return a[0]=n[0],a[1]=n[1],a[2]=n[2],a[3]=n[3],a[4]=n[4],a[5]=n[5],a[6]=n[6],a[7]=n[7],a[8]=n[8],this}extractBasis(e,a,n){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let n=e.elements,i=a.elements,s=this.elements,r=n[0],o=n[3],l=n[6],u=n[1],f=n[4],p=n[7],c=n[2],h=n[5],S=n[8],b=i[0],g=i[3],d=i[6],m=i[1],y=i[4],_=i[7],A=i[2],w=i[5],x=i[8];return s[0]=r*b+o*m+l*A,s[3]=r*g+o*y+l*w,s[6]=r*d+o*_+l*x,s[1]=u*b+f*m+p*A,s[4]=u*g+f*y+p*w,s[7]=u*d+f*_+p*x,s[2]=c*b+h*m+S*A,s[5]=c*g+h*y+S*w,s[8]=c*d+h*_+S*x,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){let e=this.elements,a=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],f=e[8];return a*r*f-a*o*u-n*s*f+n*o*l+i*s*u-i*r*l}invert(){let e=this.elements,a=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],f=e[8],p=f*r-o*u,c=o*l-f*s,h=u*s-r*l,S=a*p+n*c+i*h;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/S;return e[0]=p*b,e[1]=(i*u-f*n)*b,e[2]=(o*n-i*r)*b,e[3]=c*b,e[4]=(f*a-i*l)*b,e[5]=(i*s-o*a)*b,e[6]=h*b,e[7]=(n*l-u*a)*b,e[8]=(r*a-n*s)*b,this}transpose(){let e,a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,n,i,s,r,o){let l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*r+u*o)+r+e,-i*u,i*l,-i*(-u*r+l*o)+o+a,0,0,1),this}scale(e,a){return Tu("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_x.makeScale(e,a)),this}rotate(e){return Tu("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_x.makeRotation(-e)),this}translate(e,a){return Tu("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_x.makeTranslation(e,a)),this}makeTranslation(e,a){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,a,0,0,1),this}makeRotation(e){let a=Math.cos(e),n=Math.sin(e);return this.set(a,-n,0,n,a,0,0,0,1),this}makeScale(e,a){return this.set(e,0,0,0,a,0,0,0,1),this}equals(e){let a=this.elements,n=e.elements;for(let i=0;i<9;i++)if(a[i]!==n[i])return!1;return!0}fromArray(e,a=0){for(let n=0;n<9;n++)this.elements[n]=e[n+a];return this}toArray(e=[],a=0){let n=this.elements;return e[a]=n[0],e[a+1]=n[1],e[a+2]=n[2],e[a+3]=n[3],e[a+4]=n[4],e[a+5]=n[5],e[a+6]=n[6],e[a+7]=n[7],e[a+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_x=new We,fb=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hb=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot=xI();jf=class{static getDataURL(e,a="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Go===void 0&&(Go=Du("canvas")),Go.width=e.width,Go.height=e.height;let i=Go.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Go}return n.toDataURL(a)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let a=Du("canvas");a.width=e.width,a.height=e.height;let n=a.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Yi(s[r]/255)*255;return n.putImageData(i,0,0),a}else if(e.data){let a=e.data.slice(0);for(let n=0;n<a.length;n++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[n]=Math.floor(Yi(a[n]/255)*255):a[n]=Yi(a[n]);return{data:a,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},vI=0,sl=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vI++}),this.uuid=ic(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?e.set(a.videoWidth,a.videoHeight,0):typeof VideoFrame<"u"&&a instanceof VideoFrame?e.set(a.displayWidth,a.displayHeight,0):a!==null?e.set(a.width||0,a.height||0,a.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(Mx(i[r].image)):s.push(Mx(i[r]))}else s=Mx(i);n.url=s}return a||(e.images[this.uuid]=n),n}};SI=0,bx=new z,an=class t extends gi{constructor(e=t.DEFAULT_IMAGE,a=t.DEFAULT_MAPPING,n=pi,i=pi,s=Wa,r=Qi,o=Jn,l=nn,u=t.DEFAULT_ANISOTROPY,f=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SI++}),this.uuid=ic(),this.name="",this.source=new sl(e),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(bx).x}get height(){return this.source.getSize(bx).y}get depth(){return this.source.getSize(bx).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let a in e){let n=e[a];if(n===void 0){Fe(`Texture.setValues(): parameter '${a}' has value of undefined.`);continue}let i=this[a];if(i===void 0){Fe(`Texture.setValues(): property '${a}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[a]=n}}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),a||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==o0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zf:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case Kf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zf:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case Kf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=o0;an.DEFAULT_ANISOTROPY=1;kt=class{static{this.prototype.isVector4=!0}constructor(e=0,a=0,n=0,i=1){this.x=e,this.y=a,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,n,i){return this.x=e,this.y=a,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let a=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*a+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*a+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*a+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*a+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,n,i,s,l=e.elements,u=l[0],f=l[4],p=l[8],c=l[1],h=l[5],S=l[9],b=l[2],g=l[6],d=l[10];if(Math.abs(f-c)<.01&&Math.abs(p-b)<.01&&Math.abs(S-g)<.01){if(Math.abs(f+c)<.1&&Math.abs(p+b)<.1&&Math.abs(S+g)<.1&&Math.abs(u+h+d-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;let y=(u+1)/2,_=(h+1)/2,A=(d+1)/2,w=(f+c)/4,x=(p+b)/4,L=(S+g)/4;return y>_&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=w/n,s=x/n):_>A?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=w/i,s=L/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=x/s,i=L/s),this.set(n,i,s,a),this}let m=Math.sqrt((g-S)*(g-S)+(p-b)*(p-b)+(c-f)*(c-f));return Math.abs(m)<.001&&(m=1),this.x=(g-S)/m,this.y=(p-b)/m,this.z=(c-f)/m,this.w=Math.acos((u+h+d-1)/2),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=ut(this.x,e.x,a.x),this.y=ut(this.y,e.y,a.y),this.z=ut(this.z,e.z,a.z),this.w=ut(this.w,e.w,a.w),this}clampScalar(e,a){return this.x=ut(this.x,e,a),this.y=ut(this.y,e,a),this.z=ut(this.z,e,a),this.w=ut(this.w,e,a),this}clampLength(e,a){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,n){return this.x=e.x+(a.x-e.x)*n,this.y=e.y+(a.y-e.y)*n,this.z=e.z+(a.z-e.z)*n,this.w=e.w+(a.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$f=class extends gi{constructor(e=1,a=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wa,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=a,this.depth=n.depth,this.scissor=new kt(0,0,e,a),this.scissorTest=!1,this.viewport=new kt(0,0,e,a),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new an({width:e,height:a,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let a={minFilter:Wa,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(a.mapping=e.mapping),e.wrapS!==void 0&&(a.wrapS=e.wrapS),e.wrapT!==void 0&&(a.wrapT=e.wrapT),e.wrapR!==void 0&&(a.wrapR=e.wrapR),e.magFilter!==void 0&&(a.magFilter=e.magFilter),e.minFilter!==void 0&&(a.minFilter=e.minFilter),e.format!==void 0&&(a.format=e.format),e.type!==void 0&&(a.type=e.type),e.anisotropy!==void 0&&(a.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(a.colorSpace=e.colorSpace),e.flipY!==void 0&&(a.flipY=e.flipY),e.generateMipmaps!==void 0&&(a.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(a.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(a.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(a)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,a,n=1){if(this.width!==e||this.height!==a||this.depth!==n){this.width=e,this.height=a,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=a,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let a=0,n=e.textures.length;a<n;a++){this.textures[a]=e.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;let i=Object.assign({},e.textures[a].image);this.textures[a].source=new sl(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let a=e.depthTexture.clone();a.renderTarget=null,this.depthTexture=a}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sn=class extends $f{constructor(e=1,a=1,n={}){super(e,a,n),this.isWebGLRenderTarget=!0}},Nu=class extends an{constructor(e=null,a=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:a,height:n,depth:i},this.magFilter=xa,this.minFilter=xa,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},eh=class extends an{constructor(e=null,a=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:a,height:n,depth:i},this.magFilter=xa,this.minFilter=xa,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Ft=class t{static{this.prototype.isMatrix4=!0}constructor(e,a,n,i,s,r,o,l,u,f,p,c,h,S,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,a,n,i,s,r,o,l,u,f,p,c,h,S,b,g)}set(e,a,n,i,s,r,o,l,u,f,p,c,h,S,b,g){let d=this.elements;return d[0]=e,d[4]=a,d[8]=n,d[12]=i,d[1]=s,d[5]=r,d[9]=o,d[13]=l,d[2]=u,d[6]=f,d[10]=p,d[14]=c,d[3]=h,d[7]=S,d[11]=b,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let a=this.elements,n=e.elements;return a[0]=n[0],a[1]=n[1],a[2]=n[2],a[3]=n[3],a[4]=n[4],a[5]=n[5],a[6]=n[6],a[7]=n[7],a[8]=n[8],a[9]=n[9],a[10]=n[10],a[11]=n[11],a[12]=n[12],a[13]=n[13],a[14]=n[14],a[15]=n[15],this}copyPosition(e){let a=this.elements,n=e.elements;return a[12]=n[12],a[13]=n[13],a[14]=n[14],this}setFromMatrix3(e){let a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,n){return this.determinantAffine()===0?(e.set(1,0,0),a.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,a,n){return this.set(e.x,a.x,n.x,0,e.y,a.y,n.y,0,e.z,a.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let a=this.elements,n=e.elements,i=1/Vo.setFromMatrixColumn(e,0).length(),s=1/Vo.setFromMatrixColumn(e,1).length(),r=1/Vo.setFromMatrixColumn(e,2).length();return a[0]=n[0]*i,a[1]=n[1]*i,a[2]=n[2]*i,a[3]=0,a[4]=n[4]*s,a[5]=n[5]*s,a[6]=n[6]*s,a[7]=0,a[8]=n[8]*r,a[9]=n[9]*r,a[10]=n[10]*r,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){let a=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),u=Math.sin(i),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let c=r*f,h=r*p,S=o*f,b=o*p;a[0]=l*f,a[4]=-l*p,a[8]=u,a[1]=h+S*u,a[5]=c-b*u,a[9]=-o*l,a[2]=b-c*u,a[6]=S+h*u,a[10]=r*l}else if(e.order==="YXZ"){let c=l*f,h=l*p,S=u*f,b=u*p;a[0]=c+b*o,a[4]=S*o-h,a[8]=r*u,a[1]=r*p,a[5]=r*f,a[9]=-o,a[2]=h*o-S,a[6]=b+c*o,a[10]=r*l}else if(e.order==="ZXY"){let c=l*f,h=l*p,S=u*f,b=u*p;a[0]=c-b*o,a[4]=-r*p,a[8]=S+h*o,a[1]=h+S*o,a[5]=r*f,a[9]=b-c*o,a[2]=-r*u,a[6]=o,a[10]=r*l}else if(e.order==="ZYX"){let c=r*f,h=r*p,S=o*f,b=o*p;a[0]=l*f,a[4]=S*u-h,a[8]=c*u+b,a[1]=l*p,a[5]=b*u+c,a[9]=h*u-S,a[2]=-u,a[6]=o*l,a[10]=r*l}else if(e.order==="YZX"){let c=r*l,h=r*u,S=o*l,b=o*u;a[0]=l*f,a[4]=b-c*p,a[8]=S*p+h,a[1]=p,a[5]=r*f,a[9]=-o*f,a[2]=-u*f,a[6]=h*p+S,a[10]=c-b*p}else if(e.order==="XZY"){let c=r*l,h=r*u,S=o*l,b=o*u;a[0]=l*f,a[4]=-p,a[8]=u*f,a[1]=c*p+b,a[5]=r*f,a[9]=h*p-S,a[2]=S*p-h,a[6]=o*f,a[10]=b*p+c}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yI,e,_I)}lookAt(e,a,n){let i=this.elements;return gn.subVectors(e,a),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ps.crossVectors(n,gn),Ps.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ps.crossVectors(n,gn)),Ps.normalize(),Sf.crossVectors(gn,Ps),i[0]=Ps.x,i[4]=Sf.x,i[8]=gn.x,i[1]=Ps.y,i[5]=Sf.y,i[9]=gn.y,i[2]=Ps.z,i[6]=Sf.z,i[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let n=e.elements,i=a.elements,s=this.elements,r=n[0],o=n[4],l=n[8],u=n[12],f=n[1],p=n[5],c=n[9],h=n[13],S=n[2],b=n[6],g=n[10],d=n[14],m=n[3],y=n[7],_=n[11],A=n[15],w=i[0],x=i[4],L=i[8],P=i[12],E=i[1],U=i[5],H=i[9],Z=i[13],N=i[2],X=i[6],Y=i[10],V=i[14],se=i[3],q=i[7],ae=i[11],ie=i[15];return s[0]=r*w+o*E+l*N+u*se,s[4]=r*x+o*U+l*X+u*q,s[8]=r*L+o*H+l*Y+u*ae,s[12]=r*P+o*Z+l*V+u*ie,s[1]=f*w+p*E+c*N+h*se,s[5]=f*x+p*U+c*X+h*q,s[9]=f*L+p*H+c*Y+h*ae,s[13]=f*P+p*Z+c*V+h*ie,s[2]=S*w+b*E+g*N+d*se,s[6]=S*x+b*U+g*X+d*q,s[10]=S*L+b*H+g*Y+d*ae,s[14]=S*P+b*Z+g*V+d*ie,s[3]=m*w+y*E+_*N+A*se,s[7]=m*x+y*U+_*X+A*q,s[11]=m*L+y*H+_*Y+A*ae,s[15]=m*P+y*Z+_*V+A*ie,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){let e=this.elements,a=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],l=e[9],u=e[13],f=e[2],p=e[6],c=e[10],h=e[14],S=e[3],b=e[7],g=e[11],d=e[15],m=l*h-u*c,y=o*h-u*p,_=o*c-l*p,A=r*h-u*f,w=r*c-l*f,x=r*p-o*f;return a*(b*m-g*y+d*_)-n*(S*m-g*A+d*w)+i*(S*y-b*A+d*x)-s*(S*_-b*w+g*x)}determinantAffine(){let e=this.elements,a=e[0],n=e[4],i=e[8],s=e[1],r=e[5],o=e[9],l=e[2],u=e[6],f=e[10];return a*(r*f-o*u)-n*(s*f-o*l)+i*(s*u-r*l)}transpose(){let e=this.elements,a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=a,i[14]=n),this}invert(){let e=this.elements,a=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],f=e[8],p=e[9],c=e[10],h=e[11],S=e[12],b=e[13],g=e[14],d=e[15],m=a*o-n*r,y=a*l-i*r,_=a*u-s*r,A=n*l-i*o,w=n*u-s*o,x=i*u-s*l,L=f*b-p*S,P=f*g-c*S,E=f*d-h*S,U=p*g-c*b,H=p*d-h*b,Z=c*d-h*g,N=m*Z-y*H+_*U+A*E-w*P+x*L;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/N;return e[0]=(o*Z-l*H+u*U)*X,e[1]=(i*H-n*Z-s*U)*X,e[2]=(b*x-g*w+d*A)*X,e[3]=(c*w-p*x-h*A)*X,e[4]=(l*E-r*Z-u*P)*X,e[5]=(a*Z-i*E+s*P)*X,e[6]=(g*_-S*x-d*y)*X,e[7]=(f*x-c*_+h*y)*X,e[8]=(r*H-o*E+u*L)*X,e[9]=(n*E-a*H-s*L)*X,e[10]=(S*w-b*_+d*m)*X,e[11]=(p*_-f*w-h*m)*X,e[12]=(o*P-r*U-l*L)*X,e[13]=(a*U-n*P+i*L)*X,e[14]=(b*y-S*A-g*m)*X,e[15]=(f*A-p*y+c*m)*X,this}scale(e){let a=this.elements,n=e.x,i=e.y,s=e.z;return a[0]*=n,a[4]*=i,a[8]*=s,a[1]*=n,a[5]*=i,a[9]*=s,a[2]*=n,a[6]*=i,a[10]*=s,a[3]*=n,a[7]*=i,a[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,n,i))}makeTranslation(e,a,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,a,0,0,1,n,0,0,0,1),this}makeRotationX(e){let a=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,a,-n,0,0,n,a,0,0,0,0,1),this}makeRotationY(e){let a=Math.cos(e),n=Math.sin(e);return this.set(a,0,n,0,0,1,0,0,-n,0,a,0,0,0,0,1),this}makeRotationZ(e){let a=Math.cos(e),n=Math.sin(e);return this.set(a,-n,0,0,n,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){let n=Math.cos(a),i=Math.sin(a),s=1-n,r=e.x,o=e.y,l=e.z,u=s*r,f=s*o;return this.set(u*r+n,u*o-i*l,u*l+i*o,0,u*o+i*l,f*o+n,f*l-i*r,0,u*l-i*o,f*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,a,n){return this.set(e,0,0,0,0,a,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,a,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,a,i,1,0,0,0,0,1),this}compose(e,a,n){let i=this.elements,s=a._x,r=a._y,o=a._z,l=a._w,u=s+s,f=r+r,p=o+o,c=s*u,h=s*f,S=s*p,b=r*f,g=r*p,d=o*p,m=l*u,y=l*f,_=l*p,A=n.x,w=n.y,x=n.z;return i[0]=(1-(b+d))*A,i[1]=(h+_)*A,i[2]=(S-y)*A,i[3]=0,i[4]=(h-_)*w,i[5]=(1-(c+d))*w,i[6]=(g+m)*w,i[7]=0,i[8]=(S+y)*x,i[9]=(g-m)*x,i[10]=(1-(c+b))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,a,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),a.identity(),this;let r=Vo.set(i[0],i[1],i[2]).length(),o=Vo.set(i[4],i[5],i[6]).length(),l=Vo.set(i[8],i[9],i[10]).length();s<0&&(r=-r),Vn.copy(this);let u=1/r,f=1/o,p=1/l;return Vn.elements[0]*=u,Vn.elements[1]*=u,Vn.elements[2]*=u,Vn.elements[4]*=f,Vn.elements[5]*=f,Vn.elements[6]*=f,Vn.elements[8]*=p,Vn.elements[9]*=p,Vn.elements[10]*=p,a.setFromRotationMatrix(Vn),n.x=r,n.y=o,n.z=l,this}makePerspective(e,a,n,i,s,r,o=Nn,l=!1){let u=this.elements,f=2*s/(a-e),p=2*s/(n-i),c=(a+e)/(a-e),h=(n+i)/(n-i),S,b;if(l)S=s/(r-s),b=r*s/(r-s);else if(o===Nn)S=-(r+s)/(r-s),b=-2*r*s/(r-s);else if(o===nl)S=-r/(r-s),b=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=f,u[4]=0,u[8]=c,u[12]=0,u[1]=0,u[5]=p,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=S,u[14]=b,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,a,n,i,s,r,o=Nn,l=!1){let u=this.elements,f=2/(a-e),p=2/(n-i),c=-(a+e)/(a-e),h=-(n+i)/(n-i),S,b;if(l)S=1/(r-s),b=r/(r-s);else if(o===Nn)S=-2/(r-s),b=-(r+s)/(r-s);else if(o===nl)S=-1/(r-s),b=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=f,u[4]=0,u[8]=0,u[12]=c,u[1]=0,u[5]=p,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=S,u[14]=b,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let a=this.elements,n=e.elements;for(let i=0;i<16;i++)if(a[i]!==n[i])return!1;return!0}fromArray(e,a=0){for(let n=0;n<16;n++)this.elements[n]=e[n+a];return this}toArray(e=[],a=0){let n=this.elements;return e[a]=n[0],e[a+1]=n[1],e[a+2]=n[2],e[a+3]=n[3],e[a+4]=n[4],e[a+5]=n[5],e[a+6]=n[6],e[a+7]=n[7],e[a+8]=n[8],e[a+9]=n[9],e[a+10]=n[10],e[a+11]=n[11],e[a+12]=n[12],e[a+13]=n[13],e[a+14]=n[14],e[a+15]=n[15],e}},Vo=new z,Vn=new Ft,yI=new z(0,0,0),_I=new z(1,1,1),Ps=new z,Sf=new z,gn=new z,pb=new Ft,mb=new xi,Ki=class t{constructor(e=0,a=0,n=0,i=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=a,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,n,i=this._order){return this._x=e,this._y=a,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,n=!0){let i=e.elements,s=i[0],r=i[4],o=i[8],l=i[1],u=i[5],f=i[9],p=i[2],c=i[6],h=i[10];switch(a){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,h),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-r,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ut(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(c,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,u));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-ut(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,h),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,n){return pb.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pb,a,n)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return mb.setFromEuler(this),this.setFromQuaternion(mb,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ki.DEFAULT_ORDER="XYZ";Pu=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},MI=0,gb=new z,qo=new xi,Gi=new Ft,yf=new z,Lu=new z,bI=new z,LI=new xi,xb=new z(1,0,0),vb=new z(0,1,0),Sb=new z(0,0,1),yb={type:"added"},CI={type:"removed"},Wo={type:"childadded",child:null},Lx={type:"childremoved",child:null},Xa=class t extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MI++}),this.uuid=ic(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new z,a=new Ki,n=new xi,i=new z(1,1,1);function s(){n.setFromEuler(a,!1)}function r(){a.setFromQuaternion(n,void 0,!1)}a._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ft},normalMatrix:{value:new We}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return qo.setFromAxisAngle(e,a),this.quaternion.multiply(qo),this}rotateOnWorldAxis(e,a){return qo.setFromAxisAngle(e,a),this.quaternion.premultiply(qo),this}rotateX(e){return this.rotateOnAxis(xb,e)}rotateY(e){return this.rotateOnAxis(vb,e)}rotateZ(e){return this.rotateOnAxis(Sb,e)}translateOnAxis(e,a){return gb.copy(e).applyQuaternion(this.quaternion),this.position.add(gb.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis(xb,e)}translateY(e){return this.translateOnAxis(vb,e)}translateZ(e){return this.translateOnAxis(Sb,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,a,n){e.isVector3?yf.copy(e):yf.set(e,a,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Lu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Lu,yf,this.up):Gi.lookAt(yf,Lu,this.up),this.quaternion.setFromRotationMatrix(Gi),i&&(Gi.extractRotation(i.matrixWorld),qo.setFromRotationMatrix(Gi),this.quaternion.premultiply(qo.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yb),Wo.child=e,this.dispatchEvent(Wo),Wo.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(CI),Lx.child=e,this.dispatchEvent(Lx),Lx.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yb),Wo.child=e,this.dispatchEvent(Wo),Wo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,a);if(r!==void 0)return r}}getObjectsByProperty(e,a,n=[]){this[e]===a&&n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,a,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lu,e,bI),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lu,LI,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let a=this.children;for(let n=0,i=a.length;n<i;n++)a[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let a=this.children;for(let n=0,i=a.length;n<i;n++)a[n].traverseVisible(e)}traverseAncestors(e){let a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let a=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=a-s[0]*a-s[4]*n-s[8]*i,s[13]+=n-s[1]*a-s[5]*n-s[9]*i,s[14]+=i-s[2]*a-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let a=this.children;for(let n=0,i=a.length;n<i;n++)a[n].updateMatrixWorld(e)}updateWorldMatrix(e,a,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),a===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){let a=e===void 0||typeof e=="string",n={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){let p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(a){let o=r(e.geometries),l=r(e.materials),u=r(e.textures),f=r(e.images),p=r(e.shapes),c=r(e.skeletons),h=r(e.animations),S=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),c.length>0&&(n.skeletons=c),h.length>0&&(n.animations=h),S.length>0&&(n.nodes=S)}return n.object=i,n;function r(o){let l=[];for(let u in o){let f=o[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Xa.DEFAULT_UP=new z(0,1,0);Xa.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xa.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Rr=class extends Xa{constructor(){super(),this.isGroup=!0,this.type="Group"}},AI={type:"move"},rl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let a=this._hand;if(a)for(let n of e.hand.values())this._getHandJoint(a,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,a,n){let i=null,s=null,r=null,o=this._targetRay,l=this._grip,u=this._hand;if(e&&a.session.visibilityState!=="visible-blurred"){if(u&&e.hand){r=!0;for(let b of e.hand.values()){let g=a.getJointPose(b,n),d=this._getHandJoint(u,b);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let f=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],c=f.position.distanceTo(p.position),h=.02,S=.005;u.inputState.pinching&&c>h+S?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&c<=h-S&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=a.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=a.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(AI)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=r!==null),this}_getHandJoint(e,a){if(e.joints[a.jointName]===void 0){let n=new Rr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[a.jointName]=n,e.add(n)}return e.joints[a.jointName]}},xL={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},_f={h:0,s:0,l:0};lt=class{constructor(e,a,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,a,n)}set(e,a,n){if(a===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,a,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,a=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,a),this}setRGB(e,a,n,i=ot.workingColorSpace){return this.r=e,this.g=a,this.b=n,ot.colorSpaceToWorking(this,i),this}setHSL(e,a,n,i=ot.workingColorSpace){if(e=pI(e,1),a=ut(a,0,1),n=ut(n,0,1),a===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+a):n+a-n*a,r=2*n-s;this.r=Cx(r,s,e+1/3),this.g=Cx(r,s,e),this.b=Cx(r,s,e-1/3)}return ot.colorSpaceToWorking(this,i),this}setStyle(e,a=vn){function n(s){s!==void 0&&parseFloat(s)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,a);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,a);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,a);break;default:Fe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,a);if(r===6)return this.setHex(parseInt(s,16),a);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,a);return this}setColorName(e,a=vn){let n=xL[e.toLowerCase()];return n!==void 0?this.setHex(n,a):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=tl(e.r),this.g=tl(e.g),this.b=tl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return ot.workingToColorSpace(Oa.copy(this),e),Math.round(ut(Oa.r*255,0,255))*65536+Math.round(ut(Oa.g*255,0,255))*256+Math.round(ut(Oa.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,a=ot.workingColorSpace){ot.workingToColorSpace(Oa.copy(this),a);let n=Oa.r,i=Oa.g,s=Oa.b,r=Math.max(n,i,s),o=Math.min(n,i,s),l,u,f=(o+r)/2;if(o===r)l=0,u=0;else{let p=r-o;switch(u=f<=.5?p/(r+o):p/(2-r-o),r){case n:l=(i-s)/p+(i<s?6:0);break;case i:l=(s-n)/p+2;break;case s:l=(n-i)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,a=ot.workingColorSpace){return ot.workingToColorSpace(Oa.copy(this),a),e.r=Oa.r,e.g=Oa.g,e.b=Oa.b,e}getStyle(e=vn){ot.workingToColorSpace(Oa.copy(this),e);let a=Oa.r,n=Oa.g,i=Oa.b;return e!==vn?`color(${e} ${a.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,a,n){return this.getHSL(Us),this.setHSL(Us.h+e,Us.s+a,Us.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,n){return this.r=e.r+(a.r-e.r)*n,this.g=e.g+(a.g-e.g)*n,this.b=e.b+(a.b-e.b)*n,this}lerpHSL(e,a){this.getHSL(Us),e.getHSL(_f);let n=Sx(Us.h,_f.h,a),i=Sx(Us.s,_f.s,a),s=Sx(Us.l,_f.l,a);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let a=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*a+s[3]*n+s[6]*i,this.g=s[1]*a+s[4]*n+s[7]*i,this.b=s[2]*a+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Oa=new lt;lt.NAMES=xL;Uu=class extends Xa{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,a){return super.copy(e,a),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let a=super.toJSON(e);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),a.object.backgroundBlurriness=this.backgroundBlurriness,a.object.backgroundIntensity=this.backgroundIntensity,a.object.backgroundRotation=this.backgroundRotation.toArray(),a.object.environmentIntensity=this.environmentIntensity,a.object.environmentRotation=this.environmentRotation.toArray(),a}},qn=new z,Vi=new z,Ax=new z,qi=new z,Xo=new z,Yo=new z,_b=new z,wx=new z,Tx=new z,Ix=new z,Ex=new kt,Rx=new kt,Dx=new kt,ks=class t{constructor(e=new z,a=new z,n=new z){this.a=e,this.b=a,this.c=n}static getNormal(e,a,n,i){i.subVectors(n,a),qn.subVectors(e,a),i.cross(qn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,a,n,i,s){qn.subVectors(i,a),Vi.subVectors(n,a),Ax.subVectors(e,a);let r=qn.dot(qn),o=qn.dot(Vi),l=qn.dot(Ax),u=Vi.dot(Vi),f=Vi.dot(Ax),p=r*u-o*o;if(p===0)return s.set(0,0,0),null;let c=1/p,h=(u*l-o*f)*c,S=(r*f-o*l)*c;return s.set(1-h-S,S,h)}static containsPoint(e,a,n,i){return this.getBarycoord(e,a,n,i,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,a,n,i,s,r,o,l){return this.getBarycoord(e,a,n,i,qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qi.x),l.addScaledVector(r,qi.y),l.addScaledVector(o,qi.z),l)}static getInterpolatedAttribute(e,a,n,i,s,r){return Ex.setScalar(0),Rx.setScalar(0),Dx.setScalar(0),Ex.fromBufferAttribute(e,a),Rx.fromBufferAttribute(e,n),Dx.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(Ex,s.x),r.addScaledVector(Rx,s.y),r.addScaledVector(Dx,s.z),r}static isFrontFacing(e,a,n,i){return qn.subVectors(n,a),Vi.subVectors(e,a),qn.cross(Vi).dot(i)<0}set(e,a,n){return this.a.copy(e),this.b.copy(a),this.c.copy(n),this}setFromPointsAndIndices(e,a,n,i){return this.a.copy(e[a]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,a,n,i){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),qn.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return t.getBarycoord(e,this.a,this.b,this.c,a)}getInterpolation(e,a,n,i,s){return t.getInterpolation(e,this.a,this.b,this.c,a,n,i,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){let n=this.a,i=this.b,s=this.c,r,o;Xo.subVectors(i,n),Yo.subVectors(s,n),wx.subVectors(e,n);let l=Xo.dot(wx),u=Yo.dot(wx);if(l<=0&&u<=0)return a.copy(n);Tx.subVectors(e,i);let f=Xo.dot(Tx),p=Yo.dot(Tx);if(f>=0&&p<=f)return a.copy(i);let c=l*p-f*u;if(c<=0&&l>=0&&f<=0&&l-f>0)return r=l/(l-f),a.copy(n).addScaledVector(Xo,r);Ix.subVectors(e,s);let h=Xo.dot(Ix),S=Yo.dot(Ix);if(S>=0&&h<=S)return a.copy(s);let b=h*u-l*S;if(b<=0&&u>=0&&S<=0)return o=u/(u-S),a.copy(n).addScaledVector(Yo,o);let g=f*S-h*p;if(g<=0&&p-f>=0&&h-S>=0)return _b.subVectors(s,i),o=(p-f)/(p-f+(h-S)),a.copy(i).addScaledVector(_b,o);let d=1/(g+b+c);return r=b*d,o=c*d,a.copy(n).addScaledVector(Xo,r).addScaledVector(Yo,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},zs=class{constructor(e=new z(1/0,1/0,1/0),a=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){this.makeEmpty();for(let a=0,n=e.length;a<n;a+=3)this.expandByPoint(Wn.fromArray(e,a));return this}setFromBufferAttribute(e){this.makeEmpty();for(let a=0,n=e.count;a<n;a++)this.expandByPoint(Wn.fromBufferAttribute(e,a));return this}setFromPoints(e){this.makeEmpty();for(let a=0,n=e.length;a<n;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){let n=Wn.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,a=!1){return this.makeEmpty(),this.expandByObject(e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,a=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(a===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Wn):Wn.fromBufferAttribute(s,r),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mf.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mf.copy(n.boundingBox)),Mf.applyMatrix4(e.matrixWorld),this.union(Mf)}let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],a);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,n;return e.normal.x>0?(a=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),a<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cu),bf.subVectors(this.max,Cu),Zo.subVectors(e.a,Cu),Ko.subVectors(e.b,Cu),Jo.subVectors(e.c,Cu),Os.subVectors(Ko,Zo),Bs.subVectors(Jo,Ko),wr.subVectors(Zo,Jo);let a=[0,-Os.z,Os.y,0,-Bs.z,Bs.y,0,-wr.z,wr.y,Os.z,0,-Os.x,Bs.z,0,-Bs.x,wr.z,0,-wr.x,-Os.y,Os.x,0,-Bs.y,Bs.x,0,-wr.y,wr.x,0];return!Nx(a,Zo,Ko,Jo,bf)||(a=[1,0,0,0,1,0,0,0,1],!Nx(a,Zo,Ko,Jo,bf))?!1:(Lf.crossVectors(Os,Bs),a=[Lf.x,Lf.y,Lf.z],Nx(a,Zo,Ko,Jo,bf))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Wi=[new z,new z,new z,new z,new z,new z,new z,new z],Wn=new z,Mf=new zs,Zo=new z,Ko=new z,Jo=new z,Os=new z,Bs=new z,wr=new z,Cu=new z,bf=new z,Lf=new z,Tr=new z;na=new z,Cf=new et,wI=0,mi=class extends gi{constructor(e,a,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wI++}),this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=n,this.usage=dL,this.updateRanges=[],this.gpuType=Zn,this.version=0,this._normalizationScale=e!==void 0?y0(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,a,n){e*=this.itemSize,n*=a.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=a.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,n=this.count;a<n;a++)Cf.fromBufferAttribute(this,a),Cf.applyMatrix3(e),this.setXY(a,Cf.x,Cf.y);else if(this.itemSize===3)for(let a=0,n=this.count;a<n;a++)na.fromBufferAttribute(this,a),na.applyMatrix3(e),this.setXYZ(a,na.x,na.y,na.z);return this}applyMatrix4(e){for(let a=0,n=this.count;a<n;a++)na.fromBufferAttribute(this,a),na.applyMatrix4(e),this.setXYZ(a,na.x,na.y,na.z);return this}applyNormalMatrix(e){for(let a=0,n=this.count;a<n;a++)na.fromBufferAttribute(this,a),na.applyNormalMatrix(e),this.setXYZ(a,na.x,na.y,na.z);return this}transformDirection(e){for(let a=0,n=this.count;a<n;a++)na.fromBufferAttribute(this,a),na.transformDirection(e),this.setXYZ(a,na.x,na.y,na.z);return this}set(e,a=0){return this.array.set(e,a),this}getComponent(e,a){let n=this.array[e*this.itemSize+a];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,a,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+a]=n,this}getX(e){let a=this.array[e*this.itemSize];return this.normalized&&(a=this._denormalize(a)),a}setX(e,a){return this.normalized&&(a=this._normalize(a)),this.array[e*this.itemSize]=a,this}getY(e){let a=this.array[e*this.itemSize+1];return this.normalized&&(a=this._denormalize(a)),a}setY(e,a){return this.normalized&&(a=this._normalize(a)),this.array[e*this.itemSize+1]=a,this}getZ(e){let a=this.array[e*this.itemSize+2];return this.normalized&&(a=this._denormalize(a)),a}setZ(e,a){return this.normalized&&(a=this._normalize(a)),this.array[e*this.itemSize+2]=a,this}getW(e){let a=this.array[e*this.itemSize+3];return this.normalized&&(a=this._denormalize(a)),a}setW(e,a){return this.normalized&&(a=this._normalize(a)),this.array[e*this.itemSize+3]=a,this}setXY(e,a,n){return e*=this.itemSize,this.normalized&&(a=this._normalize(a),n=this._normalize(n)),this.array[e+0]=a,this.array[e+1]=n,this}setXYZ(e,a,n,i){return e*=this.itemSize,this.normalized&&(a=this._normalize(a),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=a,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,a,n,i,s){return e*=this.itemSize,this.normalized&&(a=this._normalize(a),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=a,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let a=this._normalizationScale;return a!==void 0?Math.max(e/a,-1):mI(e,this.array)}_normalize(e){let a=this._normalizationScale;return a!==void 0?Math.round(e*a):gI(e,this.array)}},Ou=class extends mi{constructor(e,a,n){super(new Uint16Array(e),a,n)}},Bu=class extends mi{constructor(e,a,n){super(new Uint32Array(e),a,n)}},ga=class extends mi{constructor(e,a,n){super(new Float32Array(e),a,n)}},TI=new zs,Au=new z,Px=new z,ol=class{constructor(e=new z,a=-1){this.isSphere=!0,this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){let n=this.center;a!==void 0?n.copy(a):TI.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){let n=this.center.distanceToSquared(e);return a.copy(e),n>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Au.subVectors(e,this.center);let a=Au.lengthSq();if(a>this.radius*this.radius){let n=Math.sqrt(a),i=(n-this.radius)*.5;this.center.addScaledVector(Au,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Px.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Au.copy(e.center).add(Px)),this.expandByPoint(Au.copy(e.center).sub(Px))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},II=0,Dn=new Ft,Ux=new Xa,Qo=new z,xn=new zs,wu=new zs,ma=new z,vi=class t extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:II++}),this.uuid=ic(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fI(e)?Bu:Ou)(e,1):this.index=e,this}setIndirect(e,a=0){return this.indirect=e,this.indirectOffset=a,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,n=0){this.groups.push({start:e,count:a,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){let a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,a,n){return Dn.makeTranslation(e,a,n),this.applyMatrix4(Dn),this}scale(e,a,n){return Dn.makeScale(e,a,n),this.applyMatrix4(Dn),this}lookAt(e){return Ux.lookAt(e),Ux.updateMatrix(),this.applyMatrix4(Ux.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qo).negate(),this.translate(Qo.x,Qo.y,Qo.z),this}setFromPoints(e){let a=this.getAttribute("position");if(a===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ga(n,3))}else{let n=Math.min(e.length,a.count);for(let i=0;i<n;i++){let s=e[i];a.setXYZ(i,s.x,s.y,s.z||0)}e.length>a.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zs);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let n=0,i=a.length;n<i;n++){let s=a[n];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(ma.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(ma),ma.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(ma)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ol);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),a)for(let s=0,r=a.length;s<r;s++){let o=a[s];wu.setFromBufferAttribute(o),this.morphTargetsRelative?(ma.addVectors(xn.min,wu.min),xn.expandByPoint(ma),ma.addVectors(xn.max,wu.max),xn.expandByPoint(ma)):(xn.expandByPoint(wu.min),xn.expandByPoint(wu.max))}xn.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)ma.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ma));if(a)for(let s=0,r=a.length;s<r;s++){let o=a[s],l=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)ma.fromBufferAttribute(o,u),l&&(Qo.fromBufferAttribute(e,u),ma.add(Qo)),i=Math.max(i,n.distanceToSquared(ma))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=a.position,i=a.normal,s=a.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new mi(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));let o=[],l=[],u=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new z,l[P]=new z;let f=new z,p=new z,c=new z,h=new et,S=new et,b=new et,g=new z,d=new z;function m(P,E,U){u[P]=u[E]=u[U]=1,f.fromBufferAttribute(n,P),p.fromBufferAttribute(n,E),c.fromBufferAttribute(n,U),h.fromBufferAttribute(s,P),S.fromBufferAttribute(s,E),b.fromBufferAttribute(s,U),p.sub(f),c.sub(f),S.sub(h),b.sub(h);let H=1/(S.x*b.y-b.x*S.y);isFinite(H)&&(g.copy(p).multiplyScalar(b.y).addScaledVector(c,-S.y).multiplyScalar(H),d.copy(c).multiplyScalar(S.x).addScaledVector(p,-b.x).multiplyScalar(H),o[P].add(g),o[E].add(g),o[U].add(g),l[P].add(d),l[E].add(d),l[U].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,E=y.length;P<E;++P){let U=y[P],H=U.start,Z=U.count;for(let N=H,X=H+Z;N<X;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let _=new z,A=new z,w=new z,x=new z;function L(P){w.fromBufferAttribute(i,P),x.copy(w);let E=o[P];_.copy(E),_.sub(w.multiplyScalar(w.dot(E))).normalize(),A.crossVectors(x,E);let H=A.dot(l[P])<0?-1:1;r.setXYZW(P,_.x,_.y,_.z,H)}for(let P=0,E=n.count;P<E;++P)u[P]&&L(P);this._transformed=!0}computeVertexNormals(){let e=this.index,a=this.getAttribute("position");if(a!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==a.count)n=new mi(new Float32Array(a.count*3),3),this.setAttribute("normal",n);else for(let c=0,h=n.count;c<h;c++)n.setXYZ(c,0,0,0);let i=new z,s=new z,r=new z,o=new z,l=new z,u=new z,f=new z,p=new z;if(e)for(let c=0,h=e.count;c<h;c+=3){let S=e.getX(c+0),b=e.getX(c+1),g=e.getX(c+2);i.fromBufferAttribute(a,S),s.fromBufferAttribute(a,b),r.fromBufferAttribute(a,g),f.subVectors(r,s),p.subVectors(i,s),f.cross(p),o.fromBufferAttribute(n,S),l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,g),o.add(f),l.add(f),u.add(f),n.setXYZ(S,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let c=0,h=a.count;c<h;c+=3)i.fromBufferAttribute(a,c+0),s.fromBufferAttribute(a,c+1),r.fromBufferAttribute(a,c+2),f.subVectors(r,s),p.subVectors(i,s),f.cross(p),n.setXYZ(c+0,f.x,f.y,f.z),n.setXYZ(c+1,f.x,f.y,f.z),n.setXYZ(c+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let a=0,n=e.count;a<n;a++)ma.fromBufferAttribute(e,a),ma.normalize(),e.setXYZ(a,ma.x,ma.y,ma.z)}toNonIndexed(){function e(o,l){let u=o.array,f=o.itemSize,p=o.normalized,c=new u.constructor(l.length*f),h=0,S=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?h=l[b]*o.data.stride+o.offset:h=l[b]*f;for(let d=0;d<f;d++)c[S++]=u[h++]}return new mi(c,f,p)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let a=new t,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],u=e(l,n);a.setAttribute(o,u)}let s=this.morphAttributes;for(let o in s){let l=[],u=s[o];for(let f=0,p=u.length;f<p;f++){let c=u[f],h=e(c,n);l.push(h)}a.morphAttributes[o]=l}a.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let u=r[o];a.addGroup(u.start,u.count,u.materialIndex)}return a}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};let a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});let n=this.attributes;for(let l in n){let u=n[l];e.data.attributes[l]=u.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],f=[];for(let p=0,c=u.length;p<c;p++){let h=u[p];f.push(h.toJSON(e.data))}f.length>0&&(i[l]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let a={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let u in i){let f=i[u];this.setAttribute(u,f.clone(a))}let s=e.morphAttributes;for(let u in s){let f=[],p=s[u];for(let c=0,h=p.length;c<h;c++)f.push(p[c].clone(a));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let u=0,f=r.length;u<f;u++){let p=r[u];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ox=new z,EI=new z,RI=new We,Xn=class{constructor(e=new z(1,0,0),a=0){this.isPlane=!0,this.normal=e,this.constant=a}set(e,a){return this.normal.copy(e),this.constant=a,this}setComponents(e,a,n,i){return this.normal.set(e,a,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,a){return this.normal.copy(e),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(e,a,n){let i=Ox.subVectors(n,a).cross(EI.subVectors(e,a)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,a){return a.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,a,n=!0){let i=e.delta(Ox),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?a.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(r<0||r>1)?null:a.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let a=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return a<0&&n>0||n<0&&a>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,a){let n=a||RI.getNormalMatrix(e),i=this.coplanarPoint(Ox).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},DI=0,Hs=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DI++}),this.uuid=ic(),this.name="",this.type="Material",this.blending=cl,this.side=Ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qx,this.blendDst=jx,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=al,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sL,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zf,this.stencilZFail=zf,this.stencilZPass=zf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let a in e){let n=e[a];if(n===void 0){Fe(`Material: parameter '${a}' has value of undefined.`);continue}let i=this[a];if(i===void 0){Fe(`Material: '${a}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[a]=n}}toJSON(e){let a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let r=[];for(let o in s){let l=s[o];delete l.metadata,r.push(l)}return r}if(a){let s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}fromJSON(e,a){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Xn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=a[e.map]||null),e.matcap!==void 0&&(this.matcap=a[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=a[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=a[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=a[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new et().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=a[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=a[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=a[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=a[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=a[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=a[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=a[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=a[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=a[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=a[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=a[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=a[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=a[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=a[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new et().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=a[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=a[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=a[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=a[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=a[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=a[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=a[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=a[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let a=e.clippingPlanes,n=null;if(a!==null){let i=a.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=a[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Xi=new z,Bx=new z,Af=new z,wf=new z,th=class{constructor(e=new z,a=new z(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);let n=a.dot(this.direction);return n<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let a=Xi.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,a),Xi.distanceToSquared(e))}distanceSqToSegment(e,a,n,i){Bx.copy(e).add(a).multiplyScalar(.5),Af.copy(a).sub(e).normalize(),wf.copy(this.origin).sub(Bx);let s=e.distanceTo(a)*.5,r=-this.direction.dot(Af),o=wf.dot(this.direction),l=-wf.dot(Af),u=wf.lengthSq(),f=Math.abs(1-r*r),p,c,h,S;if(f>0)if(p=r*l-o,c=r*o-l,S=s*f,p>=0)if(c>=-S)if(c<=S){let b=1/f;p*=b,c*=b,h=p*(p+r*c+2*o)+c*(r*p+c+2*l)+u}else c=s,p=Math.max(0,-(r*c+o)),h=-p*p+c*(c+2*l)+u;else c=-s,p=Math.max(0,-(r*c+o)),h=-p*p+c*(c+2*l)+u;else c<=-S?(p=Math.max(0,-(-r*s+o)),c=p>0?-s:Math.min(Math.max(-s,-l),s),h=-p*p+c*(c+2*l)+u):c<=S?(p=0,c=Math.min(Math.max(-s,-l),s),h=c*(c+2*l)+u):(p=Math.max(0,-(r*s+o)),c=p>0?s:Math.min(Math.max(-s,-l),s),h=-p*p+c*(c+2*l)+u);else c=r>0?-s:s,p=Math.max(0,-(r*c+o)),h=-p*p+c*(c+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(Bx).addScaledVector(Af,c),h}intersectSphere(e,a){if(e.radius<0)return null;Xi.subVectors(e.center,this.origin);let n=Xi.dot(this.direction),i=Xi.dot(Xi)-n*n,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,a):this.at(o,a)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/a;return n>=0?n:null}intersectPlane(e,a){let n=this.distanceToPlane(e);return n===null?null:this.at(n,a)}intersectsPlane(e){let a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let n,i,s,r,o,l,u=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,c=this.origin;return u>=0?(n=(e.min.x-c.x)*u,i=(e.max.x-c.x)*u):(n=(e.max.x-c.x)*u,i=(e.min.x-c.x)*u),f>=0?(s=(e.min.y-c.y)*f,r=(e.max.y-c.y)*f):(s=(e.max.y-c.y)*f,r=(e.min.y-c.y)*f),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),p>=0?(o=(e.min.z-c.z)*p,l=(e.max.z-c.z)*p):(o=(e.max.z-c.z)*p,l=(e.min.z-c.z)*p),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,a)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,a,n,i,s){let r=this.origin,o=this.direction,l=o.x,u=o.y,f=o.z,p=e.x-r.x,c=e.y-r.y,h=e.z-r.z,S=a.x-r.x,b=a.y-r.y,g=a.z-r.z,d=n.x-r.x,m=n.y-r.y,y=n.z-r.z,_=Math.abs(l),A=Math.abs(u),w=Math.abs(f),x,L,P,E,U,H,Z,N,X,Y,V,se;if(_>=A&&_>=w?(P=l,H=p,X=S,se=d,l>=0?(x=u,L=f,E=c,U=h,Z=b,N=g,Y=m,V=y):(x=f,L=u,E=h,U=c,Z=g,N=b,Y=y,V=m)):A>=w?(P=u,H=c,X=b,se=m,u>=0?(x=f,L=l,E=h,U=p,Z=g,N=S,Y=y,V=d):(x=l,L=f,E=p,U=h,Z=S,N=g,Y=d,V=y)):(P=f,H=h,X=g,se=y,f>=0?(x=l,L=u,E=p,U=c,Z=S,N=b,Y=d,V=m):(x=u,L=l,E=c,U=p,Z=b,N=S,Y=m,V=d)),P===0)return null;let q=x/P,ae=L/P,ie=1/P,Te=E-q*H,He=U-ae*H,j=Z-q*X,ve=N-ae*X,be=Y-q*se,Oe=V-ae*se,me=be*ve-Oe*j,qe=Te*Oe-He*be,Wt=j*He-ve*Te;if(i){if(me<0||qe<0||Wt<0)return null}else if((me<0||qe<0||Wt<0)&&(me>0||qe>0||Wt>0))return null;let Ne=me+qe+Wt;if(Ne===0)return null;let tt=ie*(me*H+qe*X+Wt*se);return(Ne>0?tt<0:tt>0)?null:this.at(tt/Ne,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ah=class extends Hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=$x,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Mb=new Ft,Ir=new th,Tf=new ol,bb=new z,If=new z,Ef=new z,Rf=new z,Fx=new z,Df=new z,Lb=new z,Nf=new z,Pn=class extends Xa{constructor(e=new vi,a=new ah){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let a=this.geometry.morphAttributes,n=Object.keys(a);if(n.length>0){let i=a[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,a){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;a.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Df.set(0,0,0);for(let l=0,u=s.length;l<u;l++){let f=o[l],p=s[l];f!==0&&(Fx.fromBufferAttribute(p,e),r?Df.addScaledVector(Fx,f):Df.addScaledVector(Fx.sub(a),f))}a.add(Df)}return a}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,a){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tf.copy(n.boundingSphere),Tf.applyMatrix4(s),Ir.copy(e.ray).recast(e.near),!(Tf.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(Tf,bb)===null||Ir.origin.distanceToSquared(bb)>(e.far-e.near)**2))&&(Mb.copy(s).invert(),Ir.copy(e.ray).applyMatrix4(Mb),!(n.boundingBox!==null&&Ir.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,a,Ir)))}_computeIntersections(e,a,n){let i,s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,c=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(r))for(let S=0,b=c.length;S<b;S++){let g=c[S],d=r[g.materialIndex],m=Math.max(g.start,h.start),y=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let _=m,A=y;_<A;_+=3){let w=o.getX(_),x=o.getX(_+1),L=o.getX(_+2);i=Pf(this,d,e,n,u,f,p,w,x,L),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,a.push(i))}}else{let S=Math.max(0,h.start),b=Math.min(o.count,h.start+h.count);for(let g=S,d=b;g<d;g+=3){let m=o.getX(g),y=o.getX(g+1),_=o.getX(g+2);i=Pf(this,r,e,n,u,f,p,m,y,_),i&&(i.faceIndex=Math.floor(g/3),a.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let S=0,b=c.length;S<b;S++){let g=c[S],d=r[g.materialIndex],m=Math.max(g.start,h.start),y=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let _=m,A=y;_<A;_+=3){let w=_,x=_+1,L=_+2;i=Pf(this,d,e,n,u,f,p,w,x,L),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,a.push(i))}}else{let S=Math.max(0,h.start),b=Math.min(l.count,h.start+h.count);for(let g=S,d=b;g<d;g+=3){let m=g,y=g+1,_=g+2;i=Pf(this,r,e,n,u,f,p,m,y,_),i&&(i.faceIndex=Math.floor(g/3),a.push(i))}}}};nh=class extends an{constructor(e=null,a=1,n=1,i,s,r,o,l,u=xa,f=xa,p,c){super(null,r,o,l,u,f,i,s,p,c),this.isDataTexture=!0,this.image={data:e,width:a,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Er=new ol,PI=new et(.5,.5),Uf=new z,Gs=class{constructor(e=new Xn,a=new Xn,n=new Xn,i=new Xn,s=new Xn,r=new Xn){this.planes=[e,a,n,i,s,r]}set(e,a,n,i,s,r){let o=this.planes;return o[0].copy(e),o[1].copy(a),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){let a=this.planes;for(let n=0;n<6;n++)a[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,a=Nn,n=!1){let i=this.planes,s=e.elements,r=s[0],o=s[1],l=s[2],u=s[3],f=s[4],p=s[5],c=s[6],h=s[7],S=s[8],b=s[9],g=s[10],d=s[11],m=s[12],y=s[13],_=s[14],A=s[15];if(i[0].setComponents(u-r,h-f,d-S,A-m).normalize(),i[1].setComponents(u+r,h+f,d+S,A+m).normalize(),i[2].setComponents(u+o,h+p,d+b,A+y).normalize(),i[3].setComponents(u-o,h-p,d-b,A-y).normalize(),n)i[4].setComponents(l,c,g,_).normalize(),i[5].setComponents(u-l,h-c,d-g,A-_).normalize();else if(i[4].setComponents(u-l,h-c,d-g,A-_).normalize(),a===Nn)i[5].setComponents(u+l,h+c,d+g,A+_).normalize();else if(a===nl)i[5].setComponents(l,c,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let a=e.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Er.copy(a.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);let a=PI.distanceTo(e.center);return Er.radius=.7071067811865476+a,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){let a=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(a[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let a=this.planes;for(let n=0;n<6;n++){let i=a[n];if(Uf.x=i.normal.x>0?e.max.x:e.min.x,Uf.y=i.normal.y>0?e.max.y:e.min.y,Uf.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Uf)<0)return!1}return!0}containsPoint(e){let a=this.planes;for(let n=0;n<6;n++)if(a[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Cb=new Ft,ih=class t{constructor(){this.coordinateSystem=Nn,this._frustums=[],this._count=0}setFromArrayCamera(e){let a=e.cameras,n=this._frustums;for(let i=0;i<a.length;i++){let s=a[i];Cb.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new Gs),n[i].setFromProjectionMatrix(Cb,s.coordinateSystem,s.reversedDepth)}return this._count=a.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let a=this._frustums;for(let n=0;n<this._count;n++)if(a[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let a=this._frustums;for(let n=0;n<this._count;n++)if(a[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let a=this._frustums;for(let n=0;n<this._count;n++)if(a[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let a=this._frustums;for(let n=0;n<this._count;n++)if(a[n].intersectsBox(e))return!0;return!1}containsPoint(e){let a=this._frustums;for(let n=0;n<this._count;n++)if(a[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let a=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)a[i]===void 0&&(a[i]=new Gs),a[i].copy(n[i]);return this._count=e._count,this}clone(){return new t().copy(this)}},Fu=class extends an{constructor(e=[],a=Ur,n,i,s,r,o,l,u,f){super(e,a,n,i,s,r,o,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ji=class extends an{constructor(e,a,n=Yn,i,s,r,o=xa,l=xa,u,f=Zi,p=1){if(f!==Zi&&f!==ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let c={width:e,height:a,depth:p};super(c,i,s,r,o,l,f,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let a=super.toJSON(e);return a.compareFunction=this.compareFunction,a}},ku=class extends Ji{constructor(e,a=Yn,n=Ur,i,s,r=xa,o=xa,l,u=Zi){let f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,a,n,i,s,r,o,l,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},zu=class extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vs=class t extends vi{constructor(e=1,a=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:a,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let l=[],u=[],f=[],p=[],c=0,h=0;S("z","y","x",-1,-1,n,a,e,r,s,0),S("z","y","x",1,-1,n,a,-e,r,s,1),S("x","z","y",1,1,e,n,a,i,r,2),S("x","z","y",1,-1,e,n,-a,i,r,3),S("x","y","z",1,-1,e,a,n,i,s,4),S("x","y","z",-1,-1,e,a,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ga(u,3)),this.setAttribute("normal",new ga(f,3)),this.setAttribute("uv",new ga(p,2));function S(b,g,d,m,y,_,A,w,x,L,P){let E=_/x,U=A/L,H=_/2,Z=A/2,N=w/2,X=x+1,Y=L+1,V=0,se=0,q=new z;for(let ae=0;ae<Y;ae++){let ie=ae*U-Z;for(let Te=0;Te<X;Te++){let He=Te*E-H;q[b]=He*m,q[g]=ie*y,q[d]=N,u.push(q.x,q.y,q.z),q[b]=0,q[g]=0,q[d]=w>0?1:-1,f.push(q.x,q.y,q.z),p.push(Te/x),p.push(1-ae/L),V+=1}}for(let ae=0;ae<L;ae++)for(let ie=0;ie<x;ie++){let Te=c+ie+X*ae,He=c+ie+X*(ae+1),j=c+(ie+1)+X*(ae+1),ve=c+(ie+1)+X*ae;l.push(Te,He,ve),l.push(He,j,ve),se+=6}o.addGroup(h,se,P),h+=se,c+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},sh=class t extends vi{constructor(e=[],a=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:a,radius:n,detail:i};let s=[],r=[];o(i),u(n),f(),this.setAttribute("position",new ga(s,3)),this.setAttribute("normal",new ga(s.slice(),3)),this.setAttribute("uv",new ga(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(m){let y=new z,_=new z,A=new z;for(let w=0;w<a.length;w+=3)h(a[w+0],y),h(a[w+1],_),h(a[w+2],A),l(y,_,A,m)}function l(m,y,_,A){let w=A+1,x=[];for(let L=0;L<=w;L++){x[L]=[];let P=m.clone().lerp(_,L/w),E=y.clone().lerp(_,L/w),U=w-L;for(let H=0;H<=U;H++)H===0&&L===w?x[L][H]=P:x[L][H]=P.clone().lerp(E,H/U)}for(let L=0;L<w;L++)for(let P=0;P<2*(w-L)-1;P++){let E=Math.floor(P/2);P%2===0?(c(x[L][E+1]),c(x[L+1][E]),c(x[L][E])):(c(x[L][E+1]),c(x[L+1][E+1]),c(x[L+1][E]))}}function u(m){let y=new z;for(let _=0;_<s.length;_+=3)y.x=s[_+0],y.y=s[_+1],y.z=s[_+2],y.normalize().multiplyScalar(m),s[_+0]=y.x,s[_+1]=y.y,s[_+2]=y.z}function f(){let m=new z;for(let y=0;y<s.length;y+=3){m.x=s[y+0],m.y=s[y+1],m.z=s[y+2];let _=g(m)/2/Math.PI+.5,A=d(m)/Math.PI+.5;r.push(_,1-A)}S(),p()}function p(){for(let m=0;m<r.length;m+=6){let y=r[m+0],_=r[m+2],A=r[m+4],w=Math.max(y,_,A),x=Math.min(y,_,A);w>.9&&x<.1&&(y<.2&&(r[m+0]+=1),_<.2&&(r[m+2]+=1),A<.2&&(r[m+4]+=1))}}function c(m){s.push(m.x,m.y,m.z)}function h(m,y){let _=m*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function S(){let m=new z,y=new z,_=new z,A=new z,w=new et,x=new et,L=new et;for(let P=0,E=0;P<s.length;P+=9,E+=6){m.set(s[P+0],s[P+1],s[P+2]),y.set(s[P+3],s[P+4],s[P+5]),_.set(s[P+6],s[P+7],s[P+8]),w.set(r[E+0],r[E+1]),x.set(r[E+2],r[E+3]),L.set(r[E+4],r[E+5]),A.copy(m).add(y).add(_).divideScalar(3);let U=g(A);b(w,E+0,m,U),b(x,E+2,y,U),b(L,E+4,_,U)}}function b(m,y,_,A){A<0&&m.x===1&&(r[y]=m.x-1),_.x===0&&_.z===0&&(r[y]=A/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function d(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.vertices,e.indices,e.radius,e.detail)}},Hu=class t extends sh{constructor(e=1,a=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,a),this.type="OctahedronGeometry",this.parameters={radius:e,detail:a}}static fromJSON(e){return new t(e.radius,e.detail)}},Gu=class t extends vi{constructor(e=1,a=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:a,widthSegments:n,heightSegments:i};let s=e/2,r=a/2,o=Math.floor(n),l=Math.floor(i),u=o+1,f=l+1,p=e/o,c=a/l,h=[],S=[],b=[],g=[];for(let d=0;d<f;d++){let m=d*c-r;for(let y=0;y<u;y++){let _=y*p-s;S.push(_,-m,0),b.push(0,0,1),g.push(y/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let m=0;m<o;m++){let y=m+u*d,_=m+u*(d+1),A=m+1+u*(d+1),w=m+1+u*d;h.push(y,_,w),h.push(_,A,w)}this.setIndex(h),this.setAttribute("position",new ga(S,3)),this.setAttribute("normal",new ga(b,3)),this.setAttribute("uv",new ga(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},Vu=class t extends vi{constructor(e=1,a=.4,n=64,i=8,s=2,r=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:a,tubularSegments:n,radialSegments:i,p:s,q:r},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],u=[],f=[],p=new z,c=new z,h=new z,S=new z,b=new z,g=new z,d=new z;for(let y=0;y<=n;++y){let _=y/n*s*Math.PI*2;m(_,s,r,e,h),m(_+.01,s,r,e,S),g.subVectors(S,h),d.addVectors(S,h),b.crossVectors(g,d),d.crossVectors(b,g),b.normalize(),d.normalize();for(let A=0;A<=i;++A){let w=A/i*Math.PI*2,x=-a*Math.cos(w),L=a*Math.sin(w);p.x=h.x+(x*d.x+L*b.x),p.y=h.y+(x*d.y+L*b.y),p.z=h.z+(x*d.z+L*b.z),l.push(p.x,p.y,p.z),c.subVectors(p,h).normalize(),u.push(c.x,c.y,c.z),f.push(y/n),f.push(A/i)}}for(let y=1;y<=n;y++)for(let _=1;_<=i;_++){let A=(i+1)*(y-1)+(_-1),w=(i+1)*y+(_-1),x=(i+1)*y+_,L=(i+1)*(y-1)+_;o.push(A,w,L),o.push(w,x,L)}this.setIndex(o),this.setAttribute("position",new ga(l,3)),this.setAttribute("normal",new ga(u,3)),this.setAttribute("uv",new ga(f,2));function m(y,_,A,w,x){let L=Math.cos(y),P=Math.sin(y),E=A/_*y,U=Math.cos(E);x.x=w*(2+U)*.5*L,x.y=w*(2+U)*P*.5,x.z=w*Math.sin(E)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}};vL={clone:Br,merge:Ba},OI=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BI=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Si=class extends Hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OI,this.fragmentShader=BI,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Br(e.uniforms),this.uniformsGroups=UI(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let a=super.toJSON(e);a.glslVersion=this.glslVersion,a.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?a.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?a.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?a.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?a.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?a.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?a.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?a.uniforms[i]={type:"m4",value:r.toArray()}:a.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(a.extensions=n),a}fromJSON(e,a){if(super.fromJSON(e,a),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=a[i.value]||null;break;case"c":this.uniforms[n].value=new lt().setHex(i.value);break;case"v2":this.uniforms[n].value=new et().fromArray(i.value);break;case"v3":this.uniforms[n].value=new z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new kt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new We().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ft().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},rh=class extends Si{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Dr=class extends Hs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rp,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},oh=class extends Hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nL,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},lh=class extends Hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};qs=class{constructor(e,a,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new a.constructor(n),this.sampleValues=a,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let a=this.parameterPositions,n=this._cachedIndex,i=a[n],s=a[n-1];e:{t:{let r;a:{n:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break n;return n=a.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=a[++n],e<i)break t}r=a.length;break a}if(!(e>=s)){let o=a[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=a[--n-1],e>=s)break t}r=n,n=0;break a}break e}for(;n<r;){let o=n+r>>>1;e<a[o]?r=o:n=o+1}if(i=a[n],s=a[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=a.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let a=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)a[r]=n[s+r];return a}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},uh=class extends qs{constructor(e,a,n,i){super(e,a,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hx,endingEnd:Hx}}intervalChanged_(e,a,n){let i=this.parameterPositions,s=e-2,r=e+1,o=i[s],l=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case Gx:s=e,o=2*a-n;break;case Vx:s=i.length-2,o=a+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gx:r=e,l=2*n-a;break;case Vx:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=a}let u=(n-a)*.5,f=this.valueSize;this._weightPrev=u/(a-o),this._weightNext=u/(l-n),this._offsetPrev=s*f,this._offsetNext=r*f}interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,f=this._offsetPrev,p=this._offsetNext,c=this._weightPrev,h=this._weightNext,S=(n-a)/(i-a),b=S*S,g=b*S,d=-c*g+2*c*b-c*S,m=(1+c)*g+(-1.5-2*c)*b+(-.5+c)*S+1,y=(-1-h)*g+(1.5+h)*b+.5*S,_=h*g-h*b;for(let A=0;A!==o;++A)s[A]=d*r[f+A]+m*r[u+A]+y*r[l+A]+_*r[p+A];return s}},ch=class extends qs{constructor(e,a,n,i){super(e,a,n,i)}interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,f=(n-a)/(i-a),p=1-f;for(let c=0;c!==o;++c)s[c]=r[u+c]*p+r[l+c]*f;return s}},dh=class extends qs{constructor(e,a,n,i){super(e,a,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},fh=class extends qs{interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,f=this.inTangents,p=this.outTangents;if(!f||!p){let S=(n-a)/(i-a),b=1-S;for(let g=0;g!==o;++g)s[g]=r[u+g]*b+r[l+g]*S;return s}let c=o*2,h=e-1;for(let S=0;S!==o;++S){let b=r[u+S],g=r[l+S],d=h*c+S*2,m=p[d],y=p[d+1],_=e*c+S*2,A=f[_],w=f[_+1],x=kI(n,a,m,A,i);s[S]=SL(x,b,y,w,g)}return s}};yn=class{constructor(e,a,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(a===void 0||a.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=jo(a,this.TimeBufferType),this.values=jo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let a=e.constructor,n;if(a.toJSON!==this.toJSON)n=a.toJSON(e);else{n={name:e.name,times:jo(e.times,Array),values:jo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Of(e.settings)&&(n.settings={inTangents:jo(e.settings.inTangents,Array),outTangents:jo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new dh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ch(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let a=new fh(this.times,this.values,this.getValueSize(),e);return this.settings&&(a.inTangents=this.settings.inTangents,a.outTangents=this.settings.outTangents),a}setInterpolation(e){let a;switch(e){case Iu:a=this.InterpolantFactoryMethodDiscrete;break;case Jf:a=this.InterpolantFactoryMethodLinear;break;case kf:a=this.InterpolantFactoryMethodSmooth;break;case zx:a=this.InterpolantFactoryMethodBezier;break}if(a===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Fe("KeyframeTrack:",n),this}return this.createInterpolant=a,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Iu;case this.InterpolantFactoryMethodLinear:return Jf;case this.InterpolantFactoryMethodSmooth:return kf;case this.InterpolantFactoryMethodBezier:return zx}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let a=this.times;for(let n=0,i=a.length;n!==i;++n)a[n]+=e;Of(this.settings)&&(wb(this.settings.inTangents,e),wb(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let a=this.times;for(let n=0,i=a.length;n!==i;++n)a[n]*=e;Of(this.settings)&&(Tb(this.settings.inTangents,e),Tb(this.settings.outTangents,e))}return this}trim(e,a){let n=this.times,i=n.length,s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>a;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0,a=this.getValueSize();a-Math.floor(a)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){Ve("KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(i!==void 0&&hI(i))for(let o=0,l=i.length;o!==l;++o){let u=i[o];if(isNaN(u)){Ve("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),a=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===kf,s=e.length-1,r=1;for(let o=1;o<s;++o){let l=!1,u=e[o],f=e[o+1];if(u!==f&&(o!==1||u!==e[0]))if(i)l=!0;else{let p=o*n,c=p-n,h=p+n;for(let S=0;S!==n;++S){let b=a[p+S];if(b!==a[c+S]||b!==a[h+S]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];let p=o*n,c=r*n;for(let h=0;h!==n;++h)a[c+h]=a[p+h]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,l=r*n,u=0;u!==n;++u)a[l+u]=a[o+u];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=a.slice(0,r*n)):(this.times=e,this.values=a),this}clone(){let e=this.times.slice(),a=this.values.slice(),n=this.constructor,i=new n(this.name,e,a);return i.createInterpolant=this.createInterpolant,Of(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Jf;Ws=class extends yn{constructor(e,a,n){super(e,a,n)}};Ws.prototype.ValueTypeName="bool";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=Iu;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;hh=class extends yn{constructor(e,a,n,i){super(e,a,n,i)}};hh.prototype.ValueTypeName="color";ph=class extends yn{constructor(e,a,n,i){super(e,a,n,i)}};ph.prototype.ValueTypeName="number";mh=class extends qs{constructor(e,a,n,i){super(e,a,n,i)}interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-a)/(i-a),u=e*o;for(let f=u+o;u!==f;u+=4)xi.slerpFlat(s,0,r,u-o,r,u,l);return s}},qu=class extends yn{constructor(e,a,n,i){super(e,a,n,i)}InterpolantFactoryMethodLinear(e){return new mh(this.times,this.values,this.getValueSize(),e)}};qu.prototype.ValueTypeName="quaternion";qu.prototype.InterpolantFactoryMethodSmooth=void 0;Xs=class extends yn{constructor(e,a,n){super(e,a,n)}};Xs.prototype.ValueTypeName="string";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=Iu;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;gh=class extends yn{constructor(e,a,n,i){super(e,a,n,i)}};gh.prototype.ValueTypeName="vector";xh=class{constructor(e,a,n){let i=this,s=!1,r=0,o=0,l,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=a,this.onError=n,this._abortController=null,this.itemStart=function(f){o++,s===!1&&i.onStart!==void 0&&i.onStart(f,r,o),s=!0},this.itemEnd=function(f){r++,i.onProgress!==void 0&&i.onProgress(f,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return u.push(f,p),this},this.removeHandler=function(f){let p=u.indexOf(f);return p!==-1&&u.splice(p,2),this},this.getHandler=function(f){for(let p=0,c=u.length;p<c;p+=2){let h=u[p],S=u[p+1];if(h.global&&(h.lastIndex=0),h.test(f))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yL=new xh,vh=class{constructor(e){this.manager=e!==void 0?e:yL,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,a){let n=this;return new Promise(function(i,s){n.load(e,i,a,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};vh.DEFAULT_MATERIAL_NAME="__DEFAULT";Wu=class extends Xa{static registerNode(e){this.prototype._lightNode=e}constructor(e,a=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=a}copy(e,a){return super.copy(e,a),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let a=super.toJSON(e);return a.object.color=this.color.getHex(),a.object.intensity=this.intensity,a}},kx=new Ft,Ib=new z,Eb=new z,Sh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gs,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let a=this.camera;Ib.setFromMatrixPosition(e.matrixWorld),a.position.copy(Ib),Eb.setFromMatrixPosition(e.target.matrixWorld),a.lookAt(Eb),a.updateMatrixWorld(),this._updateMatrix(a,this.matrix,this._frustum)}_updateMatrix(e,a,n,i){kx.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(kx,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,u=i?i.y/s.y:0;e.coordinateSystem===nl||e.reversedDepth?a.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):a.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),a.multiply(kx)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Bf=new z,Ff=new xi,hi=new z,Xu=class extends Xa{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,a){return super.copy(e,a),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bf,Ff,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bf,Ff,hi.set(1,1,1)).invert()}updateWorldMatrix(e,a,n=!1){super.updateWorldMatrix(e,a,n),this.matrixWorld.decompose(Bf,Ff,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bf,Ff,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fs=new z,Rb=new et,Db=new et,qa=class extends Xu{constructor(e=50,a=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let a=.5*this.getFilmHeight()/e;this.fov=Qf*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vx*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qf*2*Math.atan(Math.tan(vx*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,a,n){Fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z),Fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z)}getViewSize(e,a){return this.getViewBounds(e,Rb,Db),a.subVectors(Db,Rb)}setViewOffset(e,a,n,i,s,r){this.aspect=e/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,a=e*Math.tan(vx*.5*this.fov)/this.zoom,n=2*a,i=this.aspect*n,s=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,u=r.fullHeight;s+=r.offsetX*i/l,a-=r.offsetY*n/u,i*=r.width/l,n*=r.height/u}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,a,a-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}},Yu=class extends Xu{constructor(e=-1,a=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=a,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,a,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,r=n+e,o=i+a,l=i-a;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,r=s+u*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}},qx=class extends Sh{constructor(){super(new Yu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zu=class extends Wu{constructor(e,a){super(e,a),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xa.DEFAULT_UP),this.updateMatrix(),this.target=new Xa,this.shadow=new qx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let a=super.toJSON(e);return a.object.shadow=this.shadow.toJSON(),a.object.target=this.target.uuid,a}},Ku=class extends Wu{constructor(e,a){super(e,a),this.isAmbientLight=!0,this.type="AmbientLight"}},$o=-90,el=1,ll=class extends Xa{constructor(e,a,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new qa($o,el,e,a);i.layers=this.layers,this.add(i);let s=new qa($o,el,e,a);s.layers=this.layers,this.add(s);let r=new qa($o,el,e,a);r.layers=this.layers,this.add(r);let o=new qa($o,el,e,a);o.layers=this.layers,this.add(o);let l=new qa($o,el,e,a);l.layers=this.layers,this.add(l);let u=new qa($o,el,e,a);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,a=this.children.concat(),[n,i,s,r,o,l]=a;for(let u of a)this.remove(u);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of a)this.add(u),u.updateMatrixWorld()}update(e,a){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,l,u,f]=this.children,p=e.getRenderTarget(),c=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(a,s),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(a,r),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(a,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(a,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(a,u),n.texture.mipmapsAutoUpdate=b,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(a,f),e.setRenderTarget(p,c,h),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}},yh=class extends qa{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},M0="\\[\\]\\.:\\/",zI=new RegExp("["+M0+"]","g"),b0="[^"+M0+"]",HI="[^"+M0.replace("\\.","")+"]",GI=/((?:WC+[\/:])*)/.source.replace("WC",b0),VI=/(WCOD+)?/.source.replace("WCOD",HI),qI=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",b0),WI=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",b0),XI=new RegExp("^"+GI+VI+qI+WI+"$"),YI=["material","materials","bones","map"],Wx=class{constructor(e,a,n){let i=n||Pt.parseTrackName(a);this._targetGroup=e,this._bindings=e.subscribe_(a,i)}getValue(e,a){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,a)}setValue(e,a){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,a)}bind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,n=e.length;a!==n;++a)e[a].bind()}unbind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,n=e.length;a!==n;++a)e[a].unbind()}},Pt=class t{constructor(e,a,n){this.path=a,this.parsedPath=n||t.parseTrackName(a),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,a,n){return e&&e.isAnimationObjectGroup?new t.Composite(e,a,n):new t(e,a,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zI,"")}static parseTrackName(e){let a=XI.exec(e);if(a===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:a[2],objectName:a[3],objectIndex:a[4],propertyName:a[5],propertyIndex:a[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);YI.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,a){if(a===void 0||a===""||a==="."||a===-1||a===e.name||a===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(a);if(n!==void 0)return n}if(e.children){let n=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===a||o.uuid===a)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,a){e[a]=this.targetObject[this.propertyName]}_getValue_array(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[a++]=n[i]}_getValue_arrayElement(e,a){e[a]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,a){this.resolvedProperty.toArray(e,a)}_setValue_direct(e,a){this.targetObject[this.propertyName]=e[a]}_setValue_direct_setNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[a++]}_setValue_array_setNeedsUpdate(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[a++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[a++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,a){this.resolvedProperty[this.propertyIndex]=e[a]}_setValue_arrayElement_setNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,a){this.resolvedProperty.fromArray(e,a)}_setValue_fromArray_setNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,a){this.bind(),this.getValue(e,a)}_setValue_unbound(e,a){this.bind(),this.setValue(e,a)}bind(){let e=this.node,a=this.parsedPath,n=a.objectName,i=a.propertyName,s=a.propertyIndex;if(e||(e=t.findNode(this.rootNode,a.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=a.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===u){u=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let r=e[i];if(r===void 0){let u=a.nodeName;Ve("PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=Wx;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];KD=new Float32Array(1),Xx=class{static{this.prototype.isMatrix2=!0}constructor(e,a,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,a,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,a=0){for(let n=0;n<4;n++)this.elements[n]=e[n+a];return this}set(e,a,n,i){let s=this.elements;return s[0]=e,s[2]=a,s[1]=n,s[3]=i,this}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function GL(){let t=null,e=!1,a=null,n=null;function i(s,r){n=t.requestAnimationFrame(i),a(s,r)}return{start:function(){e!==!0&&a!==null&&t!==null&&(n=t.requestAnimationFrame(i),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){a=s},setContext:function(s){t=s}}}function JI(t){let e=new WeakMap;function a(o,l){let u=o.array,f=o.usage,p=u.byteLength,c=t.createBuffer();t.bindBuffer(l,c),t.bufferData(l,u,f),o.onUploadCallback();let h;if(u instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=t.SHORT;else if(u instanceof Uint32Array)h=t.UNSIGNED_INT;else if(u instanceof Int32Array)h=t.INT;else if(u instanceof Int8Array)h=t.BYTE;else if(u instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:c,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,u){let f=l.array,p=l.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,f);else{p.sort((h,S)=>h.start-S.start);let c=0;for(let h=1;h<p.length;h++){let S=p[c],b=p[h];b.start<=S.start+S.count+1?S.count=Math.max(S.count,b.start+b.count-S.start):(++c,p[c]=b)}p.length=c+1;for(let h=0,S=p.length;h<S;h++){let b=p[h];t.bufferSubData(u,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,a(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,l),u.version=o.version}}return{get:i,remove:s,update:r}}function RR(t,e,a,n,i,s){let r=new lt(0),o=i===!0?0:1,l,u,f=null,p=0,c=null;function h(m){let y=m.isScene===!0?m.background:null;if(y&&y.isTexture){let _=m.backgroundBlurriness>0;y=e.get(y,_)}return y}function S(m){let y=!1,_=h(m);_===null?g(r,o):_&&_.isColor&&(g(_,1),y=!0);let A=t.xr.getEnvironmentBlendMode();A==="additive"?a.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function b(m,y){let _=h(y);_&&_.isCubeTexture?(u===void 0&&(u=new Pn(new Vs(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:Br(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ER.makeRotationFromEuler(y.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(VL),u.material.toneMapped=ot.getTransfer(_.colorSpace)!==St,(f!==_||p!==_.version||c!==t.toneMapping)&&(u.material.needsUpdate=!0,f=_,p=_.version,c=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Pn(new Gu(2,2),new Si({name:"BackgroundMaterial",uniforms:Br(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ot.getTransfer(_.colorSpace)!==St,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||p!==_.version||c!==t.toneMapping)&&(l.material.needsUpdate=!0,f=_,p=_.version,c=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,y){m.getRGB(op,_0(t)),a.buffers.color.setClear(op.r,op.g,op.b,y,s)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,y=1){r.set(m),o=y,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:S,addToRenderList:b,dispose:d}}function DR(t,e){let a=t.getParameter(t.MAX_VERTEX_ATTRIBS),n={},i=c(null),s=i,r=!1;function o(U,H,Z,N,X){let Y=!1,V=p(U,N,Z,H);s!==V&&(s=V,u(s.object)),Y=h(U,N,Z,X),Y&&S(U,N,Z,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(Y||r)&&(r=!1,_(U,H,Z,N),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function u(U){return t.bindVertexArray(U)}function f(U){return t.deleteVertexArray(U)}function p(U,H,Z,N){let X=N.wireframe===!0,Y=n[H.id];Y===void 0&&(Y={},n[H.id]=Y);let V=U.isInstancedMesh===!0?U.id:0,se=Y[V];se===void 0&&(se={},Y[V]=se);let q=se[Z.id];q===void 0&&(q={},se[Z.id]=q);let ae=q[X];return ae===void 0&&(ae=c(l()),q[X]=ae),ae}function c(U){let H=[],Z=[],N=[];for(let X=0;X<a;X++)H[X]=0,Z[X]=0,N[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Z,attributeDivisors:N,object:U,attributes:{},index:null}}function h(U,H,Z,N){let X=s.attributes,Y=H.attributes,V=0,se=Z.getAttributes();for(let q in se)if(se[q].location>=0){let ie=X[q],Te=Y[q];if(Te===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(Te=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(Te=U.instanceColor)),ie===void 0||ie.attribute!==Te||Te&&ie.data!==Te.data)return!0;V++}return s.attributesNum!==V||s.index!==N}function S(U,H,Z,N){let X={},Y=H.attributes,V=0,se=Z.getAttributes();for(let q in se)if(se[q].location>=0){let ie=Y[q];ie===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(ie=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(ie=U.instanceColor));let Te={};Te.attribute=ie,ie&&ie.data&&(Te.data=ie.data),X[q]=Te,V++}s.attributes=X,s.attributesNum=V,s.index=N}function b(){let U=s.newAttributes;for(let H=0,Z=U.length;H<Z;H++)U[H]=0}function g(U){d(U,0)}function d(U,H){let Z=s.newAttributes,N=s.enabledAttributes,X=s.attributeDivisors;Z[U]=1,N[U]===0&&(t.enableVertexAttribArray(U),N[U]=1),X[U]!==H&&(t.vertexAttribDivisor(U,H),X[U]=H)}function m(){let U=s.newAttributes,H=s.enabledAttributes;for(let Z=0,N=H.length;Z<N;Z++)H[Z]!==U[Z]&&(t.disableVertexAttribArray(Z),H[Z]=0)}function y(U,H,Z,N,X,Y,V){V===!0?t.vertexAttribIPointer(U,H,Z,X,Y):t.vertexAttribPointer(U,H,Z,N,X,Y)}function _(U,H,Z,N){b();let X=N.attributes,Y=Z.getAttributes(),V=H.defaultAttributeValues;for(let se in Y){let q=Y[se];if(q.location>=0){let ae=X[se];if(ae===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(ae=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(ae=U.instanceColor)),ae!==void 0){let ie=ae.normalized,Te=ae.itemSize,He=e.get(ae);if(He===void 0)continue;let j=He.buffer,ve=He.type,be=He.bytesPerElement,Oe=ve===t.INT||ve===t.UNSIGNED_INT||ae.gpuType===Lh;if(ae.isInterleavedBufferAttribute){let me=ae.data,qe=me.isInterleavedBuffer===!0?me.stride:me.itemSize,Wt=ae.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Ne=0;Ne<q.locationSize;Ne++)d(q.location+Ne,me.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ne=0;Ne<q.locationSize;Ne++)g(q.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,j);for(let Ne=0;Ne<q.locationSize;Ne++)y(q.location+Ne,Te/q.locationSize,ve,ie,qe*be,(Wt+Te/q.locationSize*Ne)*be,Oe)}else{if(ae.isInstancedBufferAttribute){for(let me=0;me<q.locationSize;me++)d(q.location+me,ae.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let me=0;me<q.locationSize;me++)g(q.location+me);t.bindBuffer(t.ARRAY_BUFFER,j);for(let me=0;me<q.locationSize;me++)y(q.location+me,Te/q.locationSize,ve,ie,Te*be,Te/q.locationSize*me*be,Oe)}}else if(V!==void 0){let ie=V[se];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(q.location,ie);break;case 3:t.vertexAttrib3fv(q.location,ie);break;case 4:t.vertexAttrib4fv(q.location,ie);break;default:t.vertexAttrib1fv(q.location,ie)}}}}m()}function A(){P();for(let U in n){let H=n[U];for(let Z in H){let N=H[Z];for(let X in N){let Y=N[X];for(let V in Y)f(Y[V].object),delete Y[V];delete N[X]}}delete n[U]}}function w(U){if(n[U.id]===void 0)return;let H=n[U.id];for(let Z in H){let N=H[Z];for(let X in N){let Y=N[X];for(let V in Y)f(Y[V].object),delete Y[V];delete N[X]}}delete n[U.id]}function x(U){for(let H in n){let Z=n[H];for(let N in Z){let X=Z[N];if(X[U.id]===void 0)continue;let Y=X[U.id];for(let V in Y)f(Y[V].object),delete Y[V];delete X[U.id]}}}function L(U){for(let H in n){let Z=n[H],N=U.isInstancedMesh===!0?U.id:0,X=Z[N];if(X!==void 0){for(let Y in X){let V=X[Y];for(let se in V)f(V[se].object),delete V[se];delete X[Y]}delete Z[N],Object.keys(Z).length===0&&delete n[H]}}}function P(){E(),r=!0,s!==i&&(s=i,u(s.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:L,releaseStatesOfProgram:x,initAttributes:b,enableAttribute:g,disableUnusedAttributes:m}}function NR(t,e,a){let n;function i(l){n=l}function s(l,u){t.drawArrays(n,l,u),a.update(u,n,1)}function r(l,u,f){f!==0&&(t.drawArraysInstanced(n,l,u,f),a.update(u,n,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let c=0;for(let h=0;h<f;h++)c+=u[h];a.update(c,n,1)}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function PR(t,e,a,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(x){return!(x!==Jn&&n.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let L=x===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==nn&&x!==Zn&&!L&&n.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=a.precision!==void 0?a.precision:"highp",f=l(u);f!==u&&(Fe("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);let p=a.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),c=a.logarithmicDepthBuffer===!0&&p===!1;a.reversedDepthBuffer===!0&&p===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),a.logarithmicDepthBuffer===!0&&p===!0&&Fe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:c,reversedDepthBuffer:p,maxTextures:h,maxVertexTextures:S,maxTextureSize:b,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:_,maxSamples:A,samples:w}}function UR(t){let e=this,a=null,n=0,i=!1,s=!1,r=new Xn,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,c){let h=p.length!==0||c||n!==0||i;return i=c,n=p.length,h},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,c){a=f(p,c,0)},this.setState=function(p,c,h){let S=p.clippingPlanes,b=p.clipIntersection,g=p.clipShadows,d=t.get(p);if(!i||S===null||S.length===0||s&&!g)s?f(null):u();else{let m=s?0:n,y=m*4,_=d.clippingState||null;l.value=_,_=f(S,c,y,h);for(let A=0;A!==y;++A)_[A]=a[A];d.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==a&&(l.value=a,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,c,h,S){let b=p!==null?p.length:0,g=null;if(b!==0){if(g=l.value,S!==!0||g===null){let d=h+b*4,m=c.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<d)&&(g=new Float32Array(d));for(let y=0,_=h;y!==b;++y,_+=4)r.copy(p[y]).applyMatrix4(m,o),r.normal.toArray(g,_),g[_+3]=r.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}function ML(t,e,a){return new oc(t,{minFilter:Qi,generateMipmaps:e,type:Kn,colorSpace:Eu,depthBuffer:a})}function lc(t,e,a){return new Si({name:t,uniforms:e,vertexShader:je.cube_vert,fragmentShader:a,side:Ya,blending:Nr,depthTest:!1,depthWrite:!1})}function HR(){return lc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${qL}u

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
	`)}function GR(){return lc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:WL}},`

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
	`)}function VR(){return lc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${BR}
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
	`)}function bL(){return lc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function LL(){return lc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function qR(t){let e=new WeakMap,a=new WeakMap,n=null;function i(c,h=!1){return c==null?null:h?r(c):s(c)}function s(c){if(c&&c.isTexture){let h=c.mapping;if(h===_h||h===Mh)if(e.has(c)){let S=e.get(c).texture;return o(S,c.mapping)}else{let S=c.image;if(S&&S.height>0){let b=new oc(S.height);return b.fromEquirectangularTexture(t,c),e.set(c,b),c.addEventListener("dispose",u),o(b.texture,c.mapping)}else return null}}return c}function r(c){if(c&&c.isTexture&&c.isPMREMTexture!==!0){let h=c.mapping,S=h===_h||h===Mh,b=h===Ur||h===dl;if(S||b){let g=a.get(c),d=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==d)return n===null&&(n=new up(t)),g=S?n.fromEquirectangular(c,g):n.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,a.set(c,g),g.texture;if(g!==void 0)return g.texture;{let m=c.image;return S&&m&&m.height>0||b&&m&&l(m)?(n===null&&(n=new up(t)),g=S?n.fromEquirectangular(c):n.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,a.set(c,g),c.addEventListener("dispose",f),g.texture):null}}}return c}function o(c,h){return h===_h?c.mapping=Ur:h===Mh&&(c.mapping=dl),c}function l(c){let h=0,S=6;for(let b=0;b<S;b++)c[b]!==void 0&&h++;return h===S}function u(c){let h=c.target;h.removeEventListener("dispose",u);let S=e.get(h);S!==void 0&&(e.delete(h),S.dispose())}function f(c){let h=c.target;h.removeEventListener("dispose",f);let S=a.get(h);S!==void 0&&(a.delete(h),S.dispose())}function p(){e=new WeakMap,a=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:p}}function WR(t){let e={};function a(n){if(e[n]!==void 0)return e[n];let i=t.getExtension(n);return e[n]=i,i}return{has:function(n){return a(n)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(n){let i=a(n);return i===null&&Tu("WebGLRenderer: "+n+" extension not supported."),i}}}function XR(t,e,a,n){let i={},s=new WeakMap,r=new FinalizationRegistry(S=>delete i[S]);function o(S){l(S.target)}function l(S){S.index!==null&&e.remove(S.index);for(let g in S.attributes)e.remove(S.attributes[g]);S.removeEventListener("dispose",o),delete i[S.id],r.unregister(S);let b=s.get(S);b&&(e.remove(b),s.delete(S)),n.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,a.memory.geometries--}function u(S,b){return i[b.id]!==void 0||(b.addEventListener("dispose",o),i[b.id]=new WeakRef(b),r.register(b,b.id,b),a.memory.geometries++),b}function f(S){let b=S.attributes;for(let g in b)e.update(b[g],t.ARRAY_BUFFER)}function p(S){let b=S.index,g=S.attributes.position,d=0;if(g===void 0)return;let m=b!==null?b.array.length:g.array.length/3-1,y=g.count>=65535?Bu:Ou,_=new y(Math.ceil(m/3)*6,1),A=_.array;if(b!==null){let x=b.array;d=b.version;for(let L=0,P=0;L<m;L+=3){let E=x[L+0],U=x[L+1],H=x[L+2];A[P++]=E,A[P++]=U,A[P++]=U,A[P++]=H,A[P++]=H,A[P++]=E}}else{d=g.version;for(let x=0,L=0;x<m;x+=3){let P=x+0,E=x+1,U=x+2;A[L++]=P,A[L++]=E,A[L++]=E,A[L++]=U,A[L++]=U,A[L++]=P}}_.version=d;let w=s.get(S);w&&e.remove(w),s.set(S,_)}function c(S){let b=s.get(S);if(b){let g=S.index;g!==null&&b.version<g.version&&p(S)}else p(S);return s.get(S)}function h(){for(let S in i){let b=i[S].deref();b!==void 0&&l(b)}}return{get:u,update:f,getWireframeAttribute:c,dispose:h}}function YR(t,e,a){let n;function i(p){n=p}let s,r;function o(p){s=p.type,r=p.bytesPerElement}function l(p,c){t.drawElements(n,c,s,p*r),a.update(c,n,1)}function u(p,c,h){h!==0&&(t.drawElementsInstanced(n,c,s,p*r,h),a.update(c,n,h))}function f(p,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,s,p,0,h);let b=0;for(let g=0;g<h;g++)b+=c[g];a.update(b,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function ZR(t){let e={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(a.calls++,r){case t.TRIANGLES:a.triangles+=o*(s/3);break;case t.LINES:a.lines+=o*(s/2);break;case t.LINE_STRIP:a.lines+=o*(s-1);break;case t.LINE_LOOP:a.lines+=o*s;break;case t.POINTS:a.points+=o*s;break;default:Ve("WebGLInfo: Unknown draw mode:",r);break}}function i(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:e,render:a,programs:null,autoReset:!0,reset:i,update:n}}function KR(t,e,a){let n=new WeakMap,i=new kt;function s(r,o,l){let u=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0,c=n.get(o);if(c===void 0||c.count!==p){let P=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",P)};c!==void 0&&c.texture.dispose();let h=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],y=0;h===!0&&(y=1),S===!0&&(y=2),b===!0&&(y=3);let _=o.attributes.position.count*y,A=1;_>e.maxTextureSize&&(A=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let w=new Float32Array(_*A*4*p),x=new Nu(w,_,A,p);x.type=Zn,x.needsUpdate=!0;let L=y*4;for(let E=0;E<p;E++){let U=g[E],H=d[E],Z=m[E],N=_*A*4*E;for(let X=0;X<U.count;X++){let Y=X*L;h===!0&&(i.fromBufferAttribute(U,X),w[N+Y+0]=i.x,w[N+Y+1]=i.y,w[N+Y+2]=i.z,w[N+Y+3]=0),S===!0&&(i.fromBufferAttribute(H,X),w[N+Y+4]=i.x,w[N+Y+5]=i.y,w[N+Y+6]=i.z,w[N+Y+7]=0),b===!0&&(i.fromBufferAttribute(Z,X),w[N+Y+8]=i.x,w[N+Y+9]=i.y,w[N+Y+10]=i.z,w[N+Y+11]=Z.itemSize===4?i.w:1)}}c={count:p,texture:x,size:new et(_,A)},n.set(o,c),o.addEventListener("dispose",P)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",r.morphTexture,a);else{let h=0;for(let b=0;b<u.length;b++)h+=u[b];let S=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",c.texture,a),l.getUniforms().setValue(t,"morphTargetsTextureSize",c.size)}return{update:s}}function JR(t,e,a,n,i){let s=new WeakMap;function r(u){let f=i.render.frame,p=u.geometry,c=e.get(u,p);if(s.get(c)!==f&&(e.update(c),s.set(c,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==f&&(a.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&a.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,f))),u.isSkinnedMesh){let h=u.skeleton;s.get(h)!==f&&(h.update(),s.set(h,f))}return c}function o(){s=new WeakMap}function l(u){let f=u.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),a.remove(f.instanceMatrix),f.instanceColor!==null&&a.remove(f.instanceColor)}return{update:r,dispose:o}}function jR(t,e,a,n,i,s){let r=new Sn(e,a,{type:t,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,u=null,f=new vi;f.setAttribute("position",new ga([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new ga([0,2,0,0,2,0],2));let p=new rh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Pn(f,p),h=new Yu(-1,1,1,-1,0,1),S=null,b=null,g=!1,d,m=null,y=[],_=!1;this.setSize=function(A,w){r.setSize(A,w),o!==null&&o.setSize(A,w),l!==null&&l.setSize(A,w);for(let x=0;x<y.length;x++){let L=y[x];L.setSize&&L.setSize(A,w)}},this.setEffects=function(A){y=A,_=y.length>0&&y[0].isRenderPass===!0;let w=r.width,x=r.height;y.length>0&&o===null&&(o=new Sn(w,x,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),l=new Sn(w,x,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));let L=i===!0&&y.some(P=>P.needsDepthTexture===!0);L!==(r.depthTexture!==null)&&(L===!0&&u===null&&(u=new Ji(w,x),s===!0&&(u.format=ji,u.type=Or)),r.dispose(),r.depthTexture=L?u:null,r.resolveDepthBuffer=L,r.storeMultisampledDepthBuffer=L);for(let P=0;P<y.length;P++){let E=y[P];E.setSize&&E.setSize(w,x),L&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(u)}},this.begin=function(A,w){if(g||A.toneMapping===_i&&y.length===0)return!1;if(m=w,w!==null){let x=w.width,L=w.height;(r.width!==x||r.height!==L)&&this.setSize(x,L)}return _===!1&&A.setRenderTarget(r),d=A.toneMapping,A.toneMapping=_i,!0},this.hasRenderPass=function(){return _},this.end=function(A,w){A.toneMapping=d,g=!0;let x=r,L=o;for(let P=0;P<y.length;P++){let E=y[P];E.enabled!==!1&&(E.render(A,L,x,w),E.needsSwap!==!1&&(x=L,L=L===o?l:o))}if(S!==A.outputColorSpace||b!==A.toneMapping){S=A.outputColorSpace,b=A.toneMapping,p.defines={},ot.getTransfer(S)===St&&(p.defines.SRGB_TRANSFER="");let P=QR[b];P&&(p.defines[P]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(m),A.render(c,h),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),f.dispose(),p.dispose()}}function pl(t,e,a){let n=t[0];if(n<=0||n>0)return t;let i=e*a,s=CL[i];if(s===void 0&&(s=new Float32Array(i),CL[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=a,t[r].toArray(s,o)}return s}function la(t,e){if(t.length!==e.length)return!1;for(let a=0,n=t.length;a<n;a++)if(t[a]!==e[a])return!1;return!0}function ua(t,e){for(let a=0,n=e.length;a<n;a++)t[a]=e[a]}function dp(t,e){let a=AL[e];a===void 0&&(a=new Int32Array(e),AL[e]=a);for(let n=0;n!==e;++n)a[n]=t.allocateTextureUnit();return a}function $R(t,e){let a=this.cache;a[0]!==e&&(t.uniform1f(this.addr,e),a[0]=e)}function e3(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(la(a,e))return;t.uniform2fv(this.addr,e),ua(a,e)}}function t3(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else if(e.r!==void 0)(a[0]!==e.r||a[1]!==e.g||a[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),a[0]=e.r,a[1]=e.g,a[2]=e.b);else{if(la(a,e))return;t.uniform3fv(this.addr,e),ua(a,e)}}function a3(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(la(a,e))return;t.uniform4fv(this.addr,e),ua(a,e)}}function n3(t,e){let a=this.cache,n=e.elements;if(n===void 0){if(la(a,e))return;t.uniformMatrix2fv(this.addr,!1,e),ua(a,e)}else{if(la(a,n))return;IL.set(n),t.uniformMatrix2fv(this.addr,!1,IL),ua(a,n)}}function i3(t,e){let a=this.cache,n=e.elements;if(n===void 0){if(la(a,e))return;t.uniformMatrix3fv(this.addr,!1,e),ua(a,e)}else{if(la(a,n))return;TL.set(n),t.uniformMatrix3fv(this.addr,!1,TL),ua(a,n)}}function s3(t,e){let a=this.cache,n=e.elements;if(n===void 0){if(la(a,e))return;t.uniformMatrix4fv(this.addr,!1,e),ua(a,e)}else{if(la(a,n))return;wL.set(n),t.uniformMatrix4fv(this.addr,!1,wL),ua(a,n)}}function r3(t,e){let a=this.cache;a[0]!==e&&(t.uniform1i(this.addr,e),a[0]=e)}function o3(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(la(a,e))return;t.uniform2iv(this.addr,e),ua(a,e)}}function l3(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(la(a,e))return;t.uniform3iv(this.addr,e),ua(a,e)}}function u3(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(la(a,e))return;t.uniform4iv(this.addr,e),ua(a,e)}}function c3(t,e){let a=this.cache;a[0]!==e&&(t.uniform1ui(this.addr,e),a[0]=e)}function d3(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(la(a,e))return;t.uniform2uiv(this.addr,e),ua(a,e)}}function f3(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(la(a,e))return;t.uniform3uiv(this.addr,e),ua(a,e)}}function h3(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(la(a,e))return;t.uniform4uiv(this.addr,e),ua(a,e)}}function fp(t){return t.version===0&&(t.compareFunction=x0,t.needsUpdate=!0),t}function p3(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i);let s;this.type===t.SAMPLER_2D_SHADOW?s=fp(YL):s=XL,a.setTexture2D(e||s,i)}function m3(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i),a.setTexture3D(e||JL,i)}function g3(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=fp(ZL):s=QL,a.setTextureCube(e||s,i)}function x3(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i),a.setTexture2DArray(e||KL,i)}function v3(t){switch(t){case 5126:return $R;case 35664:return e3;case 35665:return t3;case 35666:return a3;case 35674:return n3;case 35675:return i3;case 35676:return s3;case 5124:case 35670:return r3;case 35667:case 35671:return o3;case 35668:case 35672:return l3;case 35669:case 35673:return u3;case 5125:return c3;case 36294:return d3;case 36295:return f3;case 36296:return h3;case 35678:case 36198:case 36298:case 36306:case 35682:return p3;case 35679:case 36299:case 36307:return m3;case 35680:case 36300:case 36308:case 36293:return g3;case 36289:case 36303:case 36311:case 36292:return x3}}function S3(t,e){t.uniform1fv(this.addr,e)}function y3(t,e){let a=pl(e,this.size,2);t.uniform2fv(this.addr,a)}function _3(t,e){let a=pl(e,this.size,3);t.uniform3fv(this.addr,a)}function M3(t,e){let a=pl(e,this.size,4);t.uniform4fv(this.addr,a)}function b3(t,e){let a=pl(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,a)}function L3(t,e){let a=pl(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,a)}function C3(t,e){let a=pl(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,a)}function A3(t,e){t.uniform1iv(this.addr,e)}function w3(t,e){t.uniform2iv(this.addr,e)}function T3(t,e){t.uniform3iv(this.addr,e)}function I3(t,e){t.uniform4iv(this.addr,e)}function E3(t,e){t.uniform1uiv(this.addr,e)}function R3(t,e){t.uniform2uiv(this.addr,e)}function D3(t,e){t.uniform3uiv(this.addr,e)}function N3(t,e){t.uniform4uiv(this.addr,e)}function P3(t,e,a){let n=this.cache,i=e.length,s=dp(a,i);la(n,s)||(t.uniform1iv(this.addr,s),ua(n,s));let r;this.type===t.SAMPLER_2D_SHADOW?r=fp(YL):r=XL;for(let o=0;o!==i;++o)a.setTexture2D(e[o]||r,s[o])}function U3(t,e,a){let n=this.cache,i=e.length,s=dp(a,i);la(n,s)||(t.uniform1iv(this.addr,s),ua(n,s));for(let r=0;r!==i;++r)a.setTexture3D(e[r]||JL,s[r])}function O3(t,e,a){let n=this.cache,i=e.length,s=dp(a,i);la(n,s)||(t.uniform1iv(this.addr,s),ua(n,s));let r;this.type===t.SAMPLER_CUBE_SHADOW?r=fp(ZL):r=QL;for(let o=0;o!==i;++o)a.setTextureCube(e[o]||r,s[o])}function B3(t,e,a){let n=this.cache,i=e.length,s=dp(a,i);la(n,s)||(t.uniform1iv(this.addr,s),ua(n,s));for(let r=0;r!==i;++r)a.setTexture2DArray(e[r]||KL,s[r])}function F3(t){switch(t){case 5126:return S3;case 35664:return y3;case 35665:return _3;case 35666:return M3;case 35674:return b3;case 35675:return L3;case 35676:return C3;case 5124:case 35670:return A3;case 35667:case 35671:return w3;case 35668:case 35672:return T3;case 35669:case 35673:return I3;case 5125:return E3;case 36294:return R3;case 36295:return D3;case 36296:return N3;case 35678:case 36198:case 36298:case 36306:case 35682:return P3;case 35679:case 36299:case 36307:return U3;case 35680:case 36300:case 36308:case 36293:return O3;case 36289:case 36303:case 36311:case 36292:return B3}}function EL(t,e){t.seq.push(e),t.map[e.id]=e}function k3(t,e,a){let n=t.name,i=n.length;for(A0.lastIndex=0;;){let s=A0.exec(n),r=A0.lastIndex,o=s[1],l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&r+2===i){EL(a,u===void 0?new T0(o,t,e):new I0(o,t,e));break}else{let p=a.map[o];p===void 0&&(p=new E0(o),EL(a,p)),a=p}}}function RL(t,e,a){let n=t.createShader(e);return t.shaderSource(n,a),t.compileShader(n),n}function G3(t,e){let a=t.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,a.length);for(let r=i;r<s;r++){let o=r+1;n.push(`${o===e?">":" "} ${o}: ${a[r]}`)}return n.join(`
`)}function V3(t){ot._getMatrix(DL,ot.workingColorSpace,t);let e=`mat3( ${DL.elements.map(a=>a.toFixed(4))} )`;switch(ot.getTransfer(t)){case Ru:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function NL(t,e,a){let n=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return a.toUpperCase()+`

`+s+`

`+G3(t.getShaderSource(e),o)}else return s}function q3(t,e){let a=V3(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${a[1]}( vec4( ${a[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function X3(t,e){let a=W3[e];return a===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}function Y3(){ot.getLuminanceCoefficients(lp);let t=lp.x.toFixed(4),e=lp.y.toFixed(4),a=lp.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z3(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rc).join(`
`)}function K3(t){let e=[];for(let a in t){let n=t[a];n!==!1&&e.push("#define "+a+" "+n)}return e.join(`
`)}function J3(t,e){let a={},n=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=t.getActiveAttrib(e,i),r=s.name,o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),a[r]={type:s.type,location:t.getAttribLocation(e,r),locationSize:o}}return a}function rc(t){return t!==""}function PL(t,e){let a=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function UL(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function R0(t){return t.replace(Q3,j3)}function j3(t,e){let a=je[e];if(a===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return R0(a)}function OL(t){return t.replace($3,eD)}function eD(t,e,a,n){let i="";for(let s=parseInt(e);s<parseInt(a);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function BL(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function aD(t){return tD[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function iD(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":nD[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}function rD(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":sD[t.combine]||"ENVMAP_BLENDING_NONE"}function oD(t,e,a,n){let i=t.getContext(),s=a.defines,r=a.vertexShader,o=a.fragmentShader,l=aD(a),u=a.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=iD(a),p=rD(a),c=Z3(a),h=K3(s),S=i.createProgram(),b,g,d=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(b=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,h].filter(rc).join(`
`),b.length>0&&(b+=`
`),g=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,h].filter(rc).join(`
`),g.length>0&&(g+=`
`)):(b=[BL(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,h,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+f:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+a.diffuseRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexNormals?"#define HAS_NORMAL":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rc).join(`
`),g=[BL(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,h,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+u:"",a.envMap?"#define "+f:"",a.envMap?"#define "+p:"",a.envMapPMREM?"#define ENVMAP_MAX_LOD "+a.envMapMaxLod+".0":"",a.envMapPMREM?"#define ENVMAP_SIZE "+a.envMapSize+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",a.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.retroreflection?"#define USE_RETROREFLECTION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor?"#define USE_COLOR":"",a.vertexAlphas||a.batchingColor?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==_i?"#define TONE_MAPPING":"",a.toneMapping!==_i?je.tonemapping_pars_fragment:"",a.toneMapping!==_i?X3("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,q3("linearToOutputTexel",a.outputColorSpace),Y3(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(rc).join(`
`)),r=R0(r),r=PL(r,a),r=UL(r,a),o=R0(o),o=PL(o,a),o=UL(o,a),r=OL(r),o=OL(o),a.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,b=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,g=["#define varying in",a.glslVersion===v0?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===v0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let m=d+b+r,y=d+g+o,_=RL(i,i.VERTEX_SHADER,m),A=RL(i,i.FRAGMENT_SHADER,y);i.attachShader(S,_),i.attachShader(S,A),a.index0AttributeName!==void 0?i.bindAttribLocation(S,0,a.index0AttributeName):a.hasPositionAttribute===!0&&i.bindAttribLocation(S,0,"position"),i.linkProgram(S);function w(E){if(t.debug.checkShaderErrors){let U=i.getProgramInfoLog(S)||"",H=i.getShaderInfoLog(_)||"",Z=i.getShaderInfoLog(A)||"",N=U.trim(),X=H.trim(),Y=Z.trim(),V=!0,se=!0;if(i.getProgramParameter(S,i.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,S,_,A);else{let q=NL(i,_,"vertex"),ae=NL(i,A,"fragment");Ve("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(S,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+N+`
`+q+`
`+ae)}else N!==""?Fe("WebGLProgram: Program Info Log:",N):(X===""||Y==="")&&(se=!1);se&&(E.diagnostics={runnable:V,programLog:N,vertexShader:{log:X,prefix:b},fragmentShader:{log:Y,prefix:g}})}i.deleteShader(_),i.deleteShader(A),x=new hl(i,S),L=J3(i,S)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let L;this.getAttributes=function(){return L===void 0&&w(this),L};let P=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(S,z3)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(S),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=H3++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=_,this.fragmentShader=A,this}function uD(t){return t===Zs||t===ac||t===nc}function cD(t,e,a,n,i,s){let r=new Pu,o=new D0,l=new Set,u=[],f=new Map,p=n.logarithmicDepthBuffer,c={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,L,P,E,U,H){let Z=E.fog,N=U.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?E.environment:null,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,V=e.get(x.envMap||X,Y),se=c[x.type],q=n.precision;x.precision!==null&&(q=n.getMaxPrecision(x.precision),q!==x.precision&&Fe("WebGLProgram.getParameters:",x.precision,"not supported, using",q,"instead."));let ae=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ie=ae!==void 0?ae.length:0,Te=0;N.morphAttributes.position!==void 0&&(Te=1),N.morphAttributes.normal!==void 0&&(Te=2),N.morphAttributes.color!==void 0&&(Te=3);let He,j,ve,be;if(se){let Se=bi[se];He=Se.vertexShader,j=Se.fragmentShader}else{He=x.vertexShader,j=x.fragmentShader;let Se=o.getVertexShaderStage(x),I=o.getFragmentShaderStage(x);o.update(x,Se,I),ve=Se.id,be=I.id}let Oe=t.getRenderTarget(),me=t.state.buffers.depth.getReversed(),qe=U.isInstancedMesh===!0,Wt=U.isBatchedMesh===!0,Ne=!!x.map,tt=!!x.matcap,xt=!!V,Qe=xt&&V.isPMREMTexture===!0,Ut=!!x.aoMap,zt=!!x.lightMap,ia=!!x.bumpMap&&x.wireframe===!1,Je=!!x.normalMap,yt=!!x.displacementMap,Kt=!!x.emissiveMap,Ta=!!x.metalnessMap,Ht=!!x.roughnessMap,va=x.anisotropy>0,O=x.clearcoat>0,Za=x.diffuseRoughness>0,dt=x.dispersion>0,Lt=x.retroreflectivity>0,ge=x.iridescence>0,Xt=x.sheen>0,Le=x.transmission>0,Be=va&&!!x.anisotropyMap,T=O&&!!x.clearcoatMap,M=O&&!!x.clearcoatNormalMap,B=O&&!!x.clearcoatRoughnessMap,ne=Za&&!!x.diffuseRoughnessMap,ee=ge&&!!x.iridescenceMap,de=ge&&!!x.iridescenceThicknessMap,he=Xt&&!!x.sheenColorMap,K=Xt&&!!x.sheenRoughnessMap,Q=!!x.specularMap,oe=!!x.specularColorMap,R=!!x.specularIntensityMap,$=Le&&!!x.transmissionMap,W=Le&&!!x.thicknessMap,fe=!!x.gradientMap,ue=!!x.alphaMap,ce=x.alphaTest>0,Re=!!x.alphaHash,Pe=!!x.extensions,le=_i;x.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(le=t.toneMapping);let De=Qe?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Ze={shaderID:se,shaderType:x.type,shaderName:x.name,vertexShader:He,fragmentShader:j,defines:x.defines,customVertexShaderID:ve,customFragmentShaderID:be,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:q,batching:Wt,batchingColor:Wt&&U._colorsTexture!==null,instancing:qe,instancingColor:qe&&U.instanceColor!==null,instancingMorph:qe&&U.morphTexture!==null,outputColorSpace:Oe===null?t.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ne,matcap:tt,envMap:xt,envMapMode:xt&&V.mapping,envMapPMREM:Qe,envMapMaxLod:Qe?De.length-1:null,envMapSize:Qe?De[0].width:null,aoMap:Ut,lightMap:zt,bumpMap:ia,normalMap:Je,displacementMap:yt,emissiveMap:Kt,normalMapObjectSpace:Je&&x.normalMapType===iL,normalMapTangentSpace:Je&&x.normalMapType===rp,packedNormalMap:Je&&x.normalMapType===rp&&uD(x.normalMap.format),metalnessMap:Ta,roughnessMap:Ht,anisotropy:va,anisotropyMap:Be,clearcoat:O,clearcoatMap:T,clearcoatNormalMap:M,clearcoatRoughnessMap:B,diffuseRoughness:Za,diffuseRoughnessMap:ne,dispersion:dt,retroreflection:Lt,iridescence:ge,iridescenceMap:ee,iridescenceThicknessMap:de,sheen:Xt,sheenColorMap:he,sheenRoughnessMap:K,specularMap:Q,specularColorMap:oe,specularIntensityMap:R,transmission:Le,transmissionMap:$,thicknessMap:W,gradientMap:fe,opaque:x.transparent===!1&&x.blending===cl&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:ce,alphaHash:Re,combine:x.combine,mapUv:Ne&&h(x.map.channel),aoMapUv:Ut&&h(x.aoMap.channel),lightMapUv:zt&&h(x.lightMap.channel),bumpMapUv:ia&&h(x.bumpMap.channel),normalMapUv:Je&&h(x.normalMap.channel),displacementMapUv:yt&&h(x.displacementMap.channel),emissiveMapUv:Kt&&h(x.emissiveMap.channel),metalnessMapUv:Ta&&h(x.metalnessMap.channel),roughnessMapUv:Ht&&h(x.roughnessMap.channel),anisotropyMapUv:Be&&h(x.anisotropyMap.channel),clearcoatMapUv:T&&h(x.clearcoatMap.channel),clearcoatNormalMapUv:M&&h(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&h(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ne&&h(x.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&h(x.iridescenceMap.channel),iridescenceThicknessMapUv:de&&h(x.iridescenceThicknessMap.channel),sheenColorMapUv:he&&h(x.sheenColorMap.channel),sheenRoughnessMapUv:K&&h(x.sheenRoughnessMap.channel),specularMapUv:Q&&h(x.specularMap.channel),specularColorMapUv:oe&&h(x.specularColorMap.channel),specularIntensityMapUv:R&&h(x.specularIntensityMap.channel),transmissionMapUv:$&&h(x.transmissionMap.channel),thicknessMapUv:W&&h(x.thicknessMap.channel),alphaMapUv:ue&&h(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Je||va),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!N.attributes.uv&&(Ne||ue),fog:!!Z,useFog:x.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&Je===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:me,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Te,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:H.filter(Se=>Se.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:le,decodeVideoTexture:Ne&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===St,decodeVideoTextureEmissive:Kt&&x.emissiveMap.isVideoTexture===!0&&ot.getTransfer(x.emissiveMap.colorSpace)===St,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===yi,flipSided:x.side===Ya,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Pe&&x.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&x.extensions.multiDraw===!0||Wt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ze.vertexUv1s=l.has(1),Ze.vertexUv2s=l.has(2),Ze.vertexUv3s=l.has(3),l.clear(),Ze}function b(x){let L=[];if(x.shaderID?L.push(x.shaderID):(L.push(x.customVertexShaderID),L.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)L.push(P),L.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(g(L,x),d(L,x),L.push(t.outputColorSpace)),L.push(x.customProgramCacheKey),L.join()}function g(x,L){x.push(L.precision),x.push(L.outputColorSpace),x.push(L.envMapMode),x.push(L.envMapPMREM),x.push(L.envMapMaxLod),x.push(L.envMapSize),x.push(L.mapUv),x.push(L.alphaMapUv),x.push(L.lightMapUv),x.push(L.aoMapUv),x.push(L.bumpMapUv),x.push(L.normalMapUv),x.push(L.displacementMapUv),x.push(L.emissiveMapUv),x.push(L.metalnessMapUv),x.push(L.roughnessMapUv),x.push(L.anisotropyMapUv),x.push(L.clearcoatMapUv),x.push(L.clearcoatNormalMapUv),x.push(L.clearcoatRoughnessMapUv),x.push(L.diffuseRoughnessMapUv),x.push(L.iridescenceMapUv),x.push(L.iridescenceThicknessMapUv),x.push(L.sheenColorMapUv),x.push(L.sheenRoughnessMapUv),x.push(L.specularMapUv),x.push(L.specularColorMapUv),x.push(L.specularIntensityMapUv),x.push(L.transmissionMapUv),x.push(L.thicknessMapUv),x.push(L.combine),x.push(L.fogExp2),x.push(L.sizeAttenuation),x.push(L.morphTargetsCount),x.push(L.numSunLights),x.push(L.numDirLights),x.push(L.numPointLights),x.push(L.numSpotLights),x.push(L.numSpotLightMaps),x.push(L.numHemiLights),x.push(L.numRectAreaLights),x.push(L.numSunLightShadows),x.push(L.numDirLightShadows),x.push(L.numPointLightShadows),x.push(L.numSpotLightShadows),x.push(L.numSpotLightShadowsWithMaps),x.push(L.numLightProbes),x.push(L.numLightProbeGrids),x.push(L.shadowMapType),x.push(L.toneMapping),x.push(L.numClippingPlanes),x.push(L.numClipIntersection),x.push(L.depthPacking)}function d(x,L){r.disableAll(),L.instancing&&r.enable(0),L.instancingColor&&r.enable(1),L.instancingMorph&&r.enable(2),L.matcap&&r.enable(3),L.envMap&&r.enable(4),L.normalMapObjectSpace&&r.enable(5),L.normalMapTangentSpace&&r.enable(6),L.clearcoat&&r.enable(7),L.iridescence&&r.enable(8),L.alphaTest&&r.enable(9),L.vertexColors&&r.enable(10),L.vertexAlphas&&r.enable(11),L.vertexUv1s&&r.enable(12),L.vertexUv2s&&r.enable(13),L.vertexUv3s&&r.enable(14),L.vertexTangents&&r.enable(15),L.anisotropy&&r.enable(16),L.alphaHash&&r.enable(17),L.batching&&r.enable(18),L.dispersion&&r.enable(19),L.retroreflection&&r.enable(24),L.diffuseRoughness&&r.enable(25),L.batchingColor&&r.enable(20),L.gradientMap&&r.enable(21),L.packedNormalMap&&r.enable(22),L.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),L.fog&&r.enable(0),L.useFog&&r.enable(1),L.flatShading&&r.enable(2),L.logarithmicDepthBuffer&&r.enable(3),L.reversedDepthBuffer&&r.enable(4),L.skinning&&r.enable(5),L.morphTargets&&r.enable(6),L.morphNormals&&r.enable(7),L.morphColors&&r.enable(8),L.premultipliedAlpha&&r.enable(9),L.shadowMapEnabled&&r.enable(10),L.doubleSided&&r.enable(11),L.flipSided&&r.enable(12),L.useDepthPacking&&r.enable(13),L.dithering&&r.enable(14),L.transmission&&r.enable(15),L.sheen&&r.enable(16),L.opaque&&r.enable(17),L.pointsUvs&&r.enable(18),L.decodeVideoTexture&&r.enable(19),L.decodeVideoTextureEmissive&&r.enable(20),L.alphaToCoverage&&r.enable(21),L.numLightProbeGrids>0&&r.enable(22),L.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function m(x){let L=c[x.type],P;if(L){let E=bi[L];P=vL.clone(E.uniforms)}else P=x.uniforms;return P}function y(x,L){let P=f.get(L);return P!==void 0?++P.usedTimes:(P=new oD(t,L,x,i),u.push(P),f.set(L,P)),P}function _(x){if(--x.usedTimes===0){let L=u.indexOf(x);u[L]=u[u.length-1],u.pop(),f.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function w(){o.dispose()}return{getParameters:S,getProgramCacheKey:b,getUniforms:m,acquireProgram:y,releaseProgram:_,releaseShaderCache:A,programs:u,dispose:w}}function dD(){let t=new WeakMap;function e(r){return t.has(r)}function a(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function n(r){t.delete(r)}function i(r,o,l){t.get(r)[o]=l}function s(){t=new WeakMap}return{has:e,get:a,remove:n,update:i,dispose:s}}function fD(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function FL(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function kL(){let t=[],e=0,a=[],n=[],i=[];function s(){e=0,a.length=0,n.length=0,i.length=0}function r(c){let h=0;return c.isInstancedMesh&&(h+=2),c.isSkinnedMesh&&(h+=1),h}function o(c,h,S,b,g,d){let m=t[e];return m===void 0?(m={id:c.id,object:c,geometry:h,material:S,materialVariant:r(c),groupOrder:b,renderOrder:c.renderOrder,z:g,group:d},t[e]=m):(m.id=c.id,m.object=c,m.geometry=h,m.material=S,m.materialVariant=r(c),m.groupOrder=b,m.renderOrder=c.renderOrder,m.z=g,m.group=d),e++,m}function l(c,h,S,b,g,d,m){m.reversedDepth===!0&&(g=-g);let y=o(c,h,S,b,g,d);S.transmission>0?n.push(y):S.transparent===!0?i.push(y):a.push(y)}function u(c,h,S,b,g,d){let m=o(c,h,S,b,g,d);S.transmission>0?n.unshift(m):S.transparent===!0?i.unshift(m):a.unshift(m)}function f(c,h){a.length>1&&a.sort(c||fD),n.length>1&&n.sort(h||FL),i.length>1&&i.sort(h||FL)}function p(){for(let c=e,h=t.length;c<h;c++){let S=t[c];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:a,transmissive:n,transparent:i,init:s,push:l,unshift:u,finish:p,sort:f}}function hD(){let t=new WeakMap;function e(n,i){let s=t.get(n),r;return s===void 0?(r=new kL,t.set(n,[r])):i>=s.length?(r=new kL,s.push(r)):r=s[i],r}function a(){t=new WeakMap}return{get:e,dispose:a}}function pD(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"SunLight":case"DirectionalLight":a={direction:new z,color:new lt};break;case"SpotLight":a={position:new z,direction:new z,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new z,color:new lt,distance:0,decay:0};break;case"HemisphereLight":a={direction:new z,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":a={color:new lt,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=a,a}}}function mD(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"SunLight":case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=a,a}}}function xD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function vD(t){let e=new pD,a=mD(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new z);let i=new z,s=new Ft,r=new Ft;function o(u){let f=0,p=0,c=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let h=0,S=0,b=0,g=0,d=0,m=0,y=0,_=0,A=0,w=0,x=0,L=0,P=0,E=0;u.sort(xD);for(let H=0,Z=u.length;H<Z;H++){let N=u[H],X=N.color,Y=N.intensity,V=N.distance,se=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Zs?se=N.shadow.map.texture:se=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)f+=X.r*Y,p+=X.g*Y,c+=X.b*Y;else if(N.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(N.sh.coefficients[q],Y);E++}else if(N.isSunLight){let q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ae=N.shadow,ie=a.get(N);ie.shadowIntensity=ae.intensity,ie.shadowBias=ae.bias,ie.shadowNormalBias=ae.normalBias,ie.shadowRadius=ae.radius,ie.shadowMapSize.copy(ae.mapSize).multiply(ae.getFrameExtents()),n.sunShadow[S]=ie,n.sunShadowMap[S]=se;let Te=ae.getViewportCount();for(let He=0;He<Te;He++)n.sunShadowMatrix[b+He]=ae.getMatrix(He),n.sunShadowCascade[b+He]=ae._cascadeData[He];b+=Te,S++}n.sun[h]=q,h++}else if(N.isDirectionalLight){let q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ae=N.shadow,ie=a.get(N);ie.shadowIntensity=ae.intensity,ie.shadowBias=ae.bias,ie.shadowNormalBias=ae.normalBias,ie.shadowRadius=ae.radius,ie.shadowMapSize=ae.mapSize,n.directionalShadow[g]=ie,n.directionalShadowMap[g]=se,n.directionalShadowMatrix[g]=N.shadow.matrix,A++}n.directional[g]=q,g++}else if(N.isSpotLight){let q=e.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(X).multiplyScalar(Y),q.distance=V,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,n.spot[m]=q;let ae=N.shadow;if(N.map&&(n.spotLightMap[L]=N.map,L++,ae.updateMatrices(N),N.castShadow&&P++),n.spotLightMatrix[m]=ae.matrix,N.castShadow){let ie=a.get(N);ie.shadowIntensity=ae.intensity,ie.shadowBias=ae.bias,ie.shadowNormalBias=ae.normalBias,ie.shadowRadius=ae.radius,ie.shadowMapSize=ae.mapSize,n.spotShadow[m]=ie,n.spotShadowMap[m]=se,x++}m++}else if(N.isRectAreaLight){let q=e.get(N);q.color.copy(X).multiplyScalar(Y),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),n.rectArea[y]=q,y++}else if(N.isPointLight){let q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){let ae=N.shadow,ie=a.get(N);ie.shadowIntensity=ae.intensity,ie.shadowBias=ae.bias,ie.shadowNormalBias=ae.normalBias,ie.shadowRadius=ae.radius,ie.shadowMapSize=ae.mapSize,ie.shadowCameraNear=ae.camera.near,ie.shadowCameraFar=ae.camera.far,n.pointShadow[d]=ie,n.pointShadowMap[d]=se,n.pointShadowMatrix[d]=N.shadow.matrix,w++}n.point[d]=q,d++}else if(N.isHemisphereLight){let q=e.get(N);q.skyColor.copy(N.color).multiplyScalar(Y),q.groundColor.copy(N.groundColor).multiplyScalar(Y),n.hemi[_]=q,_++}}y>0&&(t.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=c;let U=n.hash;(U.sunLength!==h||U.directionalLength!==g||U.pointLength!==d||U.spotLength!==m||U.rectAreaLength!==y||U.hemiLength!==_||U.numSunShadows!==S||U.numDirectionalShadows!==A||U.numPointShadows!==w||U.numSpotShadows!==x||U.numSpotMaps!==L||U.numLightProbes!==E)&&(n.sun.length=h,n.directional.length=g,n.spot.length=m,n.rectArea.length=y,n.point.length=d,n.hemi.length=_,n.sunShadow.length=S,n.sunShadowMap.length=S,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+L-P,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=E,U.sunLength=h,U.directionalLength=g,U.pointLength=d,U.spotLength=m,U.rectAreaLength=y,U.hemiLength=_,U.numSunShadows=S,U.numDirectionalShadows=A,U.numPointShadows=w,U.numSpotShadows=x,U.numSpotMaps=L,U.numLightProbes=E,n.version=gD++)}function l(u,f){let p=0,c=0,h=0,S=0,b=0,g=0,d=f.matrixWorldInverse;for(let m=0,y=u.length;m<y;m++){let _=u[m];if(_.isSunLight){let A=n.sun[p];A.direction.setFromMatrixPosition(_.matrixWorld),A.direction.transformDirection(d),p++}else if(_.isDirectionalLight){let A=n.directional[c];A.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(d),c++}else if(_.isSpotLight){let A=n.spot[S];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(d),S++}else if(_.isRectAreaLight){let A=n.rectArea[b];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(d),r.identity(),s.copy(_.matrixWorld),s.premultiply(d),r.extractRotation(s),A.halfWidth.set(_.width*.5,0,0),A.halfHeight.set(0,_.height*.5,0),A.halfWidth.applyMatrix4(r),A.halfHeight.applyMatrix4(r),b++}else if(_.isPointLight){let A=n.point[h];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(d),h++}else if(_.isHemisphereLight){let A=n.hemi[g];A.direction.setFromMatrixPosition(_.matrixWorld),A.direction.transformDirection(d),g++}}}return{setup:o,setupView:l,state:n}}function zL(t){let e=new vD(t),a=[],n=[],i=[];function s(p){f.camera=p,a.length=0,n.length=0,i.length=0}function r(p){p.isLightProbeGrid?i.push(p):a.push(p)}function o(p){n.push(p)}function l(){e.setup(a),i.sort((p,c)=>p.priority-c.priority||p.id-c.id)}function u(p){e.setupView(a,p)}let f={lightsArray:a,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:u,pushLight:r,pushShadow:o}}function SD(t){let e=new WeakMap;function a(i,s=0){let r=e.get(i),o;return r===void 0?(o=new zL(t),e.set(i,[o])):s>=r.length?(o=new zL(t),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:a,dispose:n}}function LD(t,e,a){let n=new Gs,i=new et,s=new et,r=new kt,o=new oh,l=new lh,u={},f=a.maxTextureSize,p={[Ys]:Ya,[Ya]:Ys,[yi]:yi},c=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:yD,fragmentShader:_D}),h=c.clone();h.defines.HORIZONTAL_PASS=1;let S=new vi;S.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Pn(S,c),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ju;let d=this.type;this.render=function(w,x,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Ub&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ju);let P=t.getRenderTarget(),E=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Nr),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let Z=d!==this.type;Z&&x.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(X=>X.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,X=w.length;N<X;N++){let Y=w[N],V=Y.shadow;if(V===void 0){Fe("WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let se=V.getFrameExtents();i.multiply(se),s.copy(V.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/se.x),i.x=s.x*se.x,V.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/se.y),i.y=s.y*se.y,V.mapSize.y=s.y));let q=t.state.buffers.depth.getReversed();if(V.camera._reversedDepth=q,V.map===null||Z===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ul){if(Y.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Sn(i.x,i.y,{format:Zs,type:Kn,minFilter:Wa,magFilter:Wa,generateMipmaps:!1}),V.map.texture.name=Y.name+".shadowMap",V.map.depthTexture=new Ji(i.x,i.y,Zn),V.map.depthTexture.name=Y.name+".shadowMapDepth",V.map.depthTexture.format=Zi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=xa,V.map.depthTexture.magFilter=xa}else Y.isPointLight?(V.map=new oc(i.x),V.map.depthTexture=new ku(i.x,Yn)):(V.map=new Sn(i.x,i.y),V.map.depthTexture=new Ji(i.x,i.y,Yn)),V.map.depthTexture.name=Y.name+".shadowMap",V.map.depthTexture.format=Zi,this.type===Ju?(V.map.depthTexture.compareFunction=q?g0:m0,V.map.depthTexture.minFilter=Wa,V.map.depthTexture.magFilter=Wa):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=xa,V.map.depthTexture.magFilter=xa);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==i.x||V.map.height!==i.y)&&V.map.setSize(i.x,i.y);let ae=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Y.isPointLight!==!0&&V.updateMatrices(Y,L);let ie=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:L.layers;for(let Te=0;Te<ae;Te++){let He=V.getCamera(Te);if(Y.isPointLight){let j=V.camera,ve=V.matrix,be=Y.distance||j.far;be!==j.far&&(j.far=be,j.updateProjectionMatrix()),sc.setFromMatrixPosition(Y.matrixWorld),j.position.copy(sc),w0.copy(j.position),w0.add(MD[Te]),j.up.copy(bD[Te]),j.lookAt(w0),j.updateMatrixWorld(),ve.makeTranslation(-sc.x,-sc.y,-sc.z),HL.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),V._frustum.setFromProjectionMatrix(HL,j.coordinateSystem,j.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,Te),t.clear();else{Te===0&&(t.setRenderTarget(V.map),t.clear());let j=V.getViewport(Te);r.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),H.viewport(r)}n=V.getFrustum(Te),_(x,L,He,Y,ie,this.type)}V.isPointLightShadow!==!0&&this.type===ul&&m(V,L),V.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(P,E,U)};function m(w,x){let L=e.update(b);c.defines.VSM_SAMPLES!==w.blurSamples&&(c.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,c.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null?w.mapPass=new Sn(i.x,i.y,{format:Zs,type:Kn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),c.uniforms.shadow_pass.value=w.map.depthTexture,c.uniforms.resolution.value.set(w.map.width,w.map.height),c.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(x,null,L,c,b,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(x,null,L,h,b,null)}function y(w,x,L,P){let E=null,U=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)E=U;else if(E=L.isPointLight===!0?l:o,t.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let H=E.uuid,Z=x.uuid,N=u[H];N===void 0&&(N={},u[H]=N);let X=N[Z];X===void 0&&(X=E.clone(),N[Z]=X,x.addEventListener("dispose",A)),E=X}if(E.visible=x.visible,E.wireframe=x.wireframe,P===ul?E.side=x.shadowSide!==null?x.shadowSide:x.side:E.side=x.shadowSide!==null?x.shadowSide:p[x.side],E.alphaMap=x.alphaMap,E.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,E.map=x.map,E.clipShadows=x.clipShadows,E.clippingPlanes=x.clippingPlanes,E.clipIntersection=x.clipIntersection,E.displacementMap=x.displacementMap,E.displacementScale=x.displacementScale,E.displacementBias=x.displacementBias,E.wireframeLinewidth=x.wireframeLinewidth,E.linewidth=x.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let H=t.properties.get(E);H.light=L}return E}function _(w,x,L,P,E,U){if(w.visible===!1)return;if(w.layers.test(E)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===ul)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);let N=e.update(w),X=w.material;if(Array.isArray(X)){let Y=N.groups;for(let V=0,se=Y.length;V<se;V++){let q=Y[V],ae=X[q.materialIndex];if(ae&&ae.visible){let ie=y(w,ae,P,U);w.onBeforeShadow(t,w,x,L,N,ie,q),t.renderBufferDirect(L,null,N,ie,w,q),w.onAfterShadow(t,w,x,L,N,ie,q)}}}else if(X.visible){let Y=y(w,X,P,U);w.onBeforeShadow(t,w,x,L,N,Y,null),t.renderBufferDirect(L,null,N,Y,w,null),w.onAfterShadow(t,w,x,L,N,Y,null)}}let Z=w.children;for(let N=0,X=Z.length;N<X;N++)_(Z[N],x,L,P,E,U)}function A(w){w.target.removeEventListener("dispose",A);for(let L in u){let P=u[L],E=w.target.uuid;E in P&&(P[E].dispose(),delete P[E])}}}function CD(t,e){function a(){let R=!1,$=new kt,W=null,fe=new kt(0,0,0,0);return{setMask:function(ue){W!==ue&&!R&&(t.colorMask(ue,ue,ue,ue),W=ue)},setLocked:function(ue){R=ue},setClear:function(ue,ce,Re,Pe,le){le===!0&&(ue*=Pe,ce*=Pe,Re*=Pe),$.set(ue,ce,Re,Pe),fe.equals($)===!1&&(t.clearColor(ue,ce,Re,Pe),fe.copy($))},reset:function(){R=!1,W=null,fe.set(-1,0,0,0)}}}function n(){let R=!1,$=!1,W=null,fe=null,ue=null;return{setReversed:function(ce){if($!==ce){let Re=e.get("EXT_clip_control");ce?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),$=ce;let Pe=ue;ue=null,this.setClear(Pe)}},getReversed:function(){return $},setTest:function(ce){ce?me(t.DEPTH_TEST):qe(t.DEPTH_TEST)},setMask:function(ce){W!==ce&&!R&&(t.depthMask(ce),W=ce)},setFunc:function(ce){if($&&(ce=mL[ce]),fe!==ce){switch(ce){case Hf:t.depthFunc(t.NEVER);break;case Gf:t.depthFunc(t.ALWAYS);break;case Vf:t.depthFunc(t.LESS);break;case al:t.depthFunc(t.LEQUAL);break;case qf:t.depthFunc(t.EQUAL);break;case Wf:t.depthFunc(t.GEQUAL);break;case Xf:t.depthFunc(t.GREATER);break;case Yf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=ce}},setLocked:function(ce){R=ce},setClear:function(ce){ue!==ce&&(ue=ce,$&&(ce=1-ce),t.clearDepth(ce))},reset:function(){R=!1,W=null,fe=null,ue=null,$=!1}}}function i(){let R=!1,$=null,W=null,fe=null,ue=null,ce=null,Re=null,Pe=null,le=null;return{setTest:function(De){R||(De?me(t.STENCIL_TEST):qe(t.STENCIL_TEST))},setMask:function(De){$!==De&&!R&&(t.stencilMask(De),$=De)},setFunc:function(De,Ze,Se){(W!==De||fe!==Ze||ue!==Se)&&(t.stencilFunc(De,Ze,Se),W=De,fe=Ze,ue=Se)},setOp:function(De,Ze,Se){(ce!==De||Re!==Ze||Pe!==Se)&&(t.stencilOp(De,Ze,Se),ce=De,Re=Ze,Pe=Se)},setLocked:function(De){R=De},setClear:function(De){le!==De&&(t.clearStencil(De),le=De)},reset:function(){R=!1,$=null,W=null,fe=null,ue=null,ce=null,Re=null,Pe=null,le=null}}}let s=new a,r=new n,o=new i,l={},u=new WeakMap,f={},p={},c={},h=new WeakMap,S=[],b=null,g=!1,d=null,m=null,y=null,_=null,A=null,w=null,x=null,L=new lt(0,0,0),P=0,E=!1,U=null,H=null,Z=null,N=null,X=null,Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,se=0,q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=se>=1):q.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=se>=2);let ae=null,ie={},Te=t.getParameter(t.SCISSOR_BOX),He=t.getParameter(t.VIEWPORT),j=new kt().fromArray(Te),ve=new kt().fromArray(He);function be(R,$,W,fe){let ue=new Uint8Array(4),ce=t.createTexture();t.bindTexture(R,ce),t.texParameteri(R,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(R,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Re=0;Re<W;Re++)R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY?t.texImage3D($,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D($+Re,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return ce}let Oe={};Oe[t.TEXTURE_2D]=be(t.TEXTURE_2D,t.TEXTURE_2D,1),Oe[t.TEXTURE_CUBE_MAP]=be(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[t.TEXTURE_2D_ARRAY]=be(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Oe[t.TEXTURE_3D]=be(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),me(t.DEPTH_TEST),r.setFunc(al),ia(!1),Je(Yx),me(t.CULL_FACE),Ut(Nr);function me(R){f[R]!==!0&&(t.enable(R),f[R]=!0)}function qe(R){f[R]!==!1&&(t.disable(R),f[R]=!1)}function Wt(R,$){return c[R]!==$?(t.bindFramebuffer(R,$),c[R]=$,R===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=$),R===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=$),!0):!1}function Ne(R,$){let W=S,fe=!1;if(R){W=h.get($),W===void 0&&(W=[],h.set($,W));let ue=R.textures;if(W.length!==ue.length||W[0]!==t.COLOR_ATTACHMENT0){for(let ce=0,Re=ue.length;ce<Re;ce++)W[ce]=t.COLOR_ATTACHMENT0+ce;W.length=ue.length,fe=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,fe=!0);fe&&t.drawBuffers(W)}function tt(R){return b!==R?(t.useProgram(R),b=R,!0):!1}let xt={[Pr]:t.FUNC_ADD,[Bb]:t.FUNC_SUBTRACT,[Fb]:t.FUNC_REVERSE_SUBTRACT};xt[kb]=t.MIN,xt[zb]=t.MAX;let Qe={[Hb]:t.ZERO,[Gb]:t.ONE,[Vb]:t.SRC_COLOR,[Qx]:t.SRC_ALPHA,[Kb]:t.SRC_ALPHA_SATURATE,[Yb]:t.DST_COLOR,[Wb]:t.DST_ALPHA,[qb]:t.ONE_MINUS_SRC_COLOR,[jx]:t.ONE_MINUS_SRC_ALPHA,[Zb]:t.ONE_MINUS_DST_COLOR,[Xb]:t.ONE_MINUS_DST_ALPHA,[Jb]:t.CONSTANT_COLOR,[Qb]:t.ONE_MINUS_CONSTANT_COLOR,[jb]:t.CONSTANT_ALPHA,[$b]:t.ONE_MINUS_CONSTANT_ALPHA};function Ut(R,$,W,fe,ue,ce,Re,Pe,le,De){if(R===Nr){g===!0&&(qe(t.BLEND),g=!1);return}if(g===!1&&(me(t.BLEND),g=!0),R!==Ob){if(R!==d||De!==E){if((m!==Pr||A!==Pr)&&(t.blendEquation(t.FUNC_ADD),m=Pr,A=Pr),De)switch(R){case cl:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Zx:t.blendFunc(t.ONE,t.ONE);break;case Kx:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Jx:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ve("WebGLState: Invalid blending: ",R);break}else switch(R){case cl:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Zx:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Kx:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jx:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",R);break}y=null,_=null,w=null,x=null,L.set(0,0,0),P=0,d=R,E=De}return}ue=ue||$,ce=ce||W,Re=Re||fe,($!==m||ue!==A)&&(t.blendEquationSeparate(xt[$],xt[ue]),m=$,A=ue),(W!==y||fe!==_||ce!==w||Re!==x)&&(t.blendFuncSeparate(Qe[W],Qe[fe],Qe[ce],Qe[Re]),y=W,_=fe,w=ce,x=Re),(Pe.equals(L)===!1||le!==P)&&(t.blendColor(Pe.r,Pe.g,Pe.b,le),L.copy(Pe),P=le),d=R,E=!1}function zt(R,$){R.side===yi?qe(t.CULL_FACE):me(t.CULL_FACE);let W=R.side===Ya;$&&(W=!W),ia(W),R.blending===cl&&R.transparent===!1?Ut(Nr):Ut(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),r.setFunc(R.depthFunc),r.setTest(R.depthTest),r.setMask(R.depthWrite),s.setMask(R.colorWrite);let fe=R.stencilWrite;o.setTest(fe),fe&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Kt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?me(t.SAMPLE_ALPHA_TO_COVERAGE):qe(t.SAMPLE_ALPHA_TO_COVERAGE)}function ia(R){U!==R&&(R?t.frontFace(t.CW):t.frontFace(t.CCW),U=R)}function Je(R){R!==Nb?(me(t.CULL_FACE),R!==H&&(R===Yx?t.cullFace(t.BACK):R===Pb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):qe(t.CULL_FACE),H=R}function yt(R){R!==Z&&(V&&t.lineWidth(R),Z=R)}function Kt(R,$,W){R?(me(t.POLYGON_OFFSET_FILL),(N!==$||X!==W)&&(N=$,X=W,r.getReversed()&&($=-$,W=-W),t.polygonOffset($,W))):qe(t.POLYGON_OFFSET_FILL)}function Ta(R){R?me(t.SCISSOR_TEST):qe(t.SCISSOR_TEST)}function Ht(R){R===void 0&&(R=t.TEXTURE0+Y-1),ae!==R&&(t.activeTexture(R),ae=R)}function va(R,$,W){W===void 0&&(ae===null?W=t.TEXTURE0+Y-1:W=ae);let fe=ie[W];fe===void 0&&(fe={type:void 0,texture:void 0},ie[W]=fe),(fe.type!==R||fe.texture!==$)&&(ae!==W&&(t.activeTexture(W),ae=W),t.bindTexture(R,$||Oe[R]),fe.type=R,fe.texture=$)}function O(){let R=ie[ae];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Za(){try{t.compressedTexImage2D(...arguments)}catch(R){Ve("WebGLState:",R)}}function dt(){try{t.compressedTexImage3D(...arguments)}catch(R){Ve("WebGLState:",R)}}function Lt(){try{t.texSubImage2D(...arguments)}catch(R){Ve("WebGLState:",R)}}function ge(){try{t.texSubImage3D(...arguments)}catch(R){Ve("WebGLState:",R)}}function Xt(){try{t.compressedTexSubImage2D(...arguments)}catch(R){Ve("WebGLState:",R)}}function Le(){try{t.compressedTexSubImage3D(...arguments)}catch(R){Ve("WebGLState:",R)}}function Be(){try{t.texStorage2D(...arguments)}catch(R){Ve("WebGLState:",R)}}function T(){try{t.texStorage3D(...arguments)}catch(R){Ve("WebGLState:",R)}}function M(){try{t.texImage2D(...arguments)}catch(R){Ve("WebGLState:",R)}}function B(){try{t.texImage3D(...arguments)}catch(R){Ve("WebGLState:",R)}}function ne(R){return p[R]!==void 0?p[R]:t.getParameter(R)}function ee(R,$){p[R]!==$&&(t.pixelStorei(R,$),p[R]=$)}function de(R){j.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),j.copy(R))}function he(R){ve.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),ve.copy(R))}function K(R,$){let W=u.get($);W===void 0&&(W=new WeakMap,u.set($,W));let fe=W.get(R);fe===void 0&&(fe=t.getUniformBlockIndex($,R.name),t.uniformBlockBinding($,fe,fe),W.set(R,fe))}function Q(R,$,W){let ue=u.get($).get(R);l[ue]!==W&&(t.bindBufferBase(t.UNIFORM_BUFFER,ue,W),l[ue]=W)}function oe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),r.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},p={},ae=null,ie={},c={},l={},h=new WeakMap,S=[],b=null,g=!1,d=null,m=null,y=null,_=null,A=null,w=null,x=null,L=new lt(0,0,0),P=0,E=!1,U=null,H=null,Z=null,N=null,X=null,j.set(0,0,t.canvas.width,t.canvas.height),ve.set(0,0,t.canvas.width,t.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:me,disable:qe,bindFramebuffer:Wt,drawBuffers:Ne,useProgram:tt,setBlending:Ut,setMaterial:zt,setFlipSided:ia,setCullFace:Je,setLineWidth:yt,setPolygonOffset:Kt,setScissorTest:Ta,activeTexture:Ht,bindTexture:va,unbindTexture:O,compressedTexImage2D:Za,compressedTexImage3D:dt,texImage2D:M,texImage3D:B,pixelStorei:ee,getParameter:ne,updateUBOMapping:K,uniformBlockBinding:Q,texStorage2D:Be,texStorage3D:T,texSubImage2D:Lt,texSubImage3D:ge,compressedTexSubImage2D:Xt,compressedTexSubImage3D:Le,scissor:de,viewport:he,reset:oe}}function AD(t,e,a,n,i,s,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new et,f=new WeakMap,p=new Set,c,h=new WeakMap,S=new Set,b=new FinalizationRegistry(T=>S.delete(T)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(T,M){return g?new OffscreenCanvas(T,M):Du("canvas")}function m(T,M,B){let ne=1,ee=Be(T);if((ee.width>B||ee.height>B)&&(ne=B/Math.max(ee.width,ee.height)),ne<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let de=Math.floor(ne*ee.width),he=Math.floor(ne*ee.height);c===void 0&&(c=d(de,he));let K=M?d(de,he):c;return K.width=de,K.height=he,K.getContext("2d").drawImage(T,0,0,de,he),Fe("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+de+"x"+he+")."),K}else return"data"in T&&Fe("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),T;return T}function y(T){return T.generateMipmaps}function _(T){t.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function w(T,M,B,ne,ee,de=!1){if(T!==null){if(t[T]!==void 0)return t[T];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let he;ne&&(he=e.get("EXT_texture_norm16"),he||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=M;if(M===t.RED&&(B===t.FLOAT&&(K=t.R32F),B===t.HALF_FLOAT&&(K=t.R16F),B===t.UNSIGNED_BYTE&&(K=t.R8),B===t.UNSIGNED_SHORT&&he&&(K=he.R16_EXT),B===t.SHORT&&he&&(K=he.R16_SNORM_EXT)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.R8UI),B===t.UNSIGNED_SHORT&&(K=t.R16UI),B===t.UNSIGNED_INT&&(K=t.R32UI),B===t.BYTE&&(K=t.R8I),B===t.SHORT&&(K=t.R16I),B===t.INT&&(K=t.R32I)),M===t.RG&&(B===t.FLOAT&&(K=t.RG32F),B===t.HALF_FLOAT&&(K=t.RG16F),B===t.UNSIGNED_BYTE&&(K=t.RG8),B===t.UNSIGNED_SHORT&&he&&(K=he.RG16_EXT),B===t.SHORT&&he&&(K=he.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.RG8UI),B===t.UNSIGNED_SHORT&&(K=t.RG16UI),B===t.UNSIGNED_INT&&(K=t.RG32UI),B===t.BYTE&&(K=t.RG8I),B===t.SHORT&&(K=t.RG16I),B===t.INT&&(K=t.RG32I)),M===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.RGB8UI),B===t.UNSIGNED_SHORT&&(K=t.RGB16UI),B===t.UNSIGNED_INT&&(K=t.RGB32UI),B===t.BYTE&&(K=t.RGB8I),B===t.SHORT&&(K=t.RGB16I),B===t.INT&&(K=t.RGB32I)),M===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),B===t.UNSIGNED_INT&&(K=t.RGBA32UI),B===t.BYTE&&(K=t.RGBA8I),B===t.SHORT&&(K=t.RGBA16I),B===t.INT&&(K=t.RGBA32I)),M===t.RGB&&(B===t.UNSIGNED_SHORT&&he&&(K=he.RGB16_EXT),B===t.SHORT&&he&&(K=he.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(K=t.R11F_G11F_B10F)),M===t.RGBA){let Q=de?Ru:ot.getTransfer(ee);B===t.FLOAT&&(K=t.RGBA32F),B===t.HALF_FLOAT&&(K=t.RGBA16F),B===t.UNSIGNED_BYTE&&(K=Q===St?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&he&&(K=he.RGBA16_EXT),B===t.SHORT&&he&&(K=he.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(T,M){let B;return T?M===null||M===Yn||M===Or?B=t.DEPTH24_STENCIL8:M===Zn?B=t.DEPTH32F_STENCIL8:M===fl&&(B=t.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Yn||M===Or?B=t.DEPTH_COMPONENT24:M===Zn?B=t.DEPTH_COMPONENT32F:M===fl&&(B=t.DEPTH_COMPONENT16),B}function L(T,M){return y(T)===!0||T.isFramebufferTexture&&T.minFilter!==xa&&T.minFilter!==Wa?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function P(T){let M=new WeakRef(T);n.get(T).__ref=M,S.add(M),b.register(T,M,M)}function E(T){let M=n.get(T).__ref;M!==void 0&&(S.delete(M),b.unregister(M))}function U(T){Z(T.target)}function H(T){N(T.target)}function Z(T){T.removeEventListener("dispose",U),E(T),Y(T),T.isVideoTexture&&f.delete(T),T.isHTMLTexture&&p.delete(T)}function N(T){T.removeEventListener("dispose",H),E(T),se(T)}function X(){for(let T of S){let M=T.deref();M!==void 0&&(M.isRenderTarget===!0?N(M):Z(M))}S.clear(),p.clear()}function Y(T){let M=n.get(T);if(M.__webglInit===void 0)return;let B=T.source,ne=h.get(B);if(ne){let ee=ne[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&V(T),Object.keys(ne).length===0&&h.delete(B)}n.remove(T)}function V(T){let M=n.get(T);t.deleteTexture(M.__webglTexture);let B=T.source,ne=h.get(B);delete ne[M.__cacheKey],r.memory.textures--}function se(T){let M=n.get(T);M.__depthDisposeCallback&&M.__depthDisposeCallback();let B=T.depthTexture;if(B&&B.renderTarget===T&&Z(B),T.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let de=0;de<M.__webglFramebuffer[ee].length;de++)t.deleteFramebuffer(M.__webglFramebuffer[ee][de]);else t.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[ee]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let ne=T.textures;for(let ee=0,de=ne.length;ee<de;ee++){let he=n.get(ne[ee]);he.__webglTexture&&(t.deleteTexture(he.__webglTexture),r.memory.textures--),n.remove(ne[ee])}n.remove(T)}let q=0;function ae(){q=0}function ie(){return q}function Te(T){q=T}function He(){let T=q;return T>=i.maxTextures&&Fe("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+i.maxTextures),q+=1,T}function j(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.mipmapsAutoUpdate),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function ve(T,M){let B=n.get(T);if(T.isVideoTexture&&Xt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){let ne=T.image;if(ne===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{zt(B,T,M);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);a.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function be(T,M){let B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){zt(B,T,M);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);a.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function Oe(T,M){let B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){zt(B,T,M);return}a.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function me(T,M){let B=n.get(T);if(T.version>0&&B.__version!==T.version){ia(B,T,M);return}a.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}let qe={[Zf]:t.REPEAT,[pi]:t.CLAMP_TO_EDGE,[Kf]:t.MIRRORED_REPEAT},Wt={[xa]:t.NEAREST,[aL]:t.NEAREST_MIPMAP_NEAREST,[Qu]:t.NEAREST_MIPMAP_LINEAR,[Wa]:t.LINEAR,[bh]:t.LINEAR_MIPMAP_NEAREST,[Qi]:t.LINEAR_MIPMAP_LINEAR},Ne={[rL]:t.NEVER,[x0]:t.ALWAYS,[oL]:t.LESS,[m0]:t.LEQUAL,[lL]:t.EQUAL,[g0]:t.GEQUAL,[uL]:t.GREATER,[cL]:t.NOTEQUAL};function tt(T,M){if(M.type===Zn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Wa||M.magFilter===bh||M.magFilter===Qu||M.magFilter===Qi||M.minFilter===Wa||M.minFilter===bh||M.minFilter===Qu||M.minFilter===Qi)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,qe[M.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,qe[M.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,qe[M.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,Wt[M.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,Wt[M.minFilter]),M.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,Ne[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===xa||M.minFilter!==Qu&&M.minFilter!==Qi||M.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function xt(T,M){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",U),P(M));let ne=M.source,ee=h.get(ne);ee===void 0&&(ee={},h.set(ne,ee));let de=j(M);if(de!==T.__cacheKey){ee[de]===void 0&&(ee[de]={texture:t.createTexture(),usedTimes:0},r.memory.textures++,B=!0),ee[de].usedTimes++;let he=ee[T.__cacheKey];he!==void 0&&(ee[T.__cacheKey].usedTimes--,he.usedTimes===0&&V(M)),T.__cacheKey=de,T.__webglTexture=ee[de].texture}return B}function Qe(T,M,B){return Math.floor(Math.floor(T/B)/M)}function Ut(T,M,B,ne){let de=T.updateRanges;if(de.length===0)a.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,B,ne,M.data);else{de.sort((R,$)=>R.start-$.start);let he=0;for(let R=1;R<de.length;R++){let $=de[he],W=de[R],fe=$.start+$.count,ue=Qe(W.start,M.width,4),ce=Qe($.start,M.width,4);W.start<=fe+1&&ue===ce&&Qe(W.start+W.count-1,M.width,4)===ue?$.count=Math.max($.count,W.start+W.count-$.start):(++he,de[he]=W)}de.length=he+1;let K=a.getParameter(t.UNPACK_ROW_LENGTH),Q=a.getParameter(t.UNPACK_SKIP_PIXELS),oe=a.getParameter(t.UNPACK_SKIP_ROWS);a.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let R=0,$=de.length;R<$;R++){let W=de[R],fe=Math.floor(W.start/4),ue=Math.ceil(W.count/4),ce=fe%M.width,Re=Math.floor(fe/M.width),Pe=ue,le=1;a.pixelStorei(t.UNPACK_SKIP_PIXELS,ce),a.pixelStorei(t.UNPACK_SKIP_ROWS,Re),a.texSubImage2D(t.TEXTURE_2D,0,ce,Re,Pe,le,B,ne,M.data)}T.clearUpdateRanges(),a.pixelStorei(t.UNPACK_ROW_LENGTH,K),a.pixelStorei(t.UNPACK_SKIP_PIXELS,Q),a.pixelStorei(t.UNPACK_SKIP_ROWS,oe)}}function zt(T,M,B){let ne=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ne=t.TEXTURE_3D);let ee=xt(T,M),de=M.source;a.bindTexture(ne,T.__webglTexture,t.TEXTURE0+B);let he=n.get(de);if(de.version!==he.__version||ee===!0){if(a.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let le=ot.getPrimaries(ot.workingColorSpace),De=M.colorSpace===$i?null:ot.getPrimaries(M.colorSpace),Ze=M.colorSpace===$i||le===De?t.NONE:t.BROWSER_DEFAULT_WEBGL;a.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),a.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),a.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze)}a.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let Q=m(M.image,!1,i.maxTextureSize);Q=Le(M,Q);let oe=s.convert(M.format,M.colorSpace),R=s.convert(M.type),$=w(M.internalFormat,oe,R,M.normalized,M.colorSpace,M.isVideoTexture);tt(ne,M);let W,fe=M.mipmaps,ue=M.isVideoTexture!==!0,ce=he.__version===void 0||ee===!0,Re=de.dataReady,Pe=L(M,Q);if(M.isDepthTexture)$=x(M.format===ji,M.type),ce&&(ue?a.texStorage2D(t.TEXTURE_2D,1,$,Q.width,Q.height):a.texImage2D(t.TEXTURE_2D,0,$,Q.width,Q.height,0,oe,R,null));else if(M.isDataTexture)if(fe.length>0){ue&&ce&&a.texStorage2D(t.TEXTURE_2D,Pe,$,fe[0].width,fe[0].height);for(let le=0,De=fe.length;le<De;le++)W=fe[le],ue?Re&&a.texSubImage2D(t.TEXTURE_2D,le,0,0,W.width,W.height,oe,R,W.data):a.texImage2D(t.TEXTURE_2D,le,$,W.width,W.height,0,oe,R,W.data);M.generateMipmaps=!1}else ue?(ce&&a.texStorage2D(t.TEXTURE_2D,Pe,$,Q.width,Q.height),Re&&Ut(M,Q,oe,R)):a.texImage2D(t.TEXTURE_2D,0,$,Q.width,Q.height,0,oe,R,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ue&&ce&&a.texStorage3D(t.TEXTURE_2D_ARRAY,Pe,$,fe[0].width,fe[0].height,Q.depth);for(let le=0,De=fe.length;le<De;le++)if(W=fe[le],M.format!==Jn)if(oe!==null)if(ue){if(Re)if(M.layerUpdates.size>0){let Ze=L0(W.width,W.height,M.format,M.type);for(let Se of M.layerUpdates){let I=W.data.subarray(Se*Ze/W.data.BYTES_PER_ELEMENT,(Se+1)*Ze/W.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,Se,W.width,W.height,1,oe,I)}}else a.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,W.width,W.height,Q.depth,oe,W.data)}else a.compressedTexImage3D(t.TEXTURE_2D_ARRAY,le,$,W.width,W.height,Q.depth,0,W.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?Re&&a.texSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,W.width,W.height,Q.depth,oe,R,W.data):a.texImage3D(t.TEXTURE_2D_ARRAY,le,$,W.width,W.height,Q.depth,0,oe,R,W.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ue&&ce&&a.texStorage2D(t.TEXTURE_2D,Pe,$,fe[0].width,fe[0].height);for(let le=0,De=fe.length;le<De;le++)W=fe[le],M.format!==Jn?oe!==null?ue?Re&&a.compressedTexSubImage2D(t.TEXTURE_2D,le,0,0,W.width,W.height,oe,W.data):a.compressedTexImage2D(t.TEXTURE_2D,le,$,W.width,W.height,0,W.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?Re&&a.texSubImage2D(t.TEXTURE_2D,le,0,0,W.width,W.height,oe,R,W.data):a.texImage2D(t.TEXTURE_2D,le,$,W.width,W.height,0,oe,R,W.data)}else if(M.isDataArrayTexture)if(ue){if(ce&&a.texStorage3D(t.TEXTURE_2D_ARRAY,Pe,$,Q.width,Q.height,Q.depth),Re)if(M.layerUpdates.size>0){let le=L0(Q.width,Q.height,M.format,M.type);for(let De of M.layerUpdates){let Ze=Q.data.subarray(De*le/Q.data.BYTES_PER_ELEMENT,(De+1)*le/Q.data.BYTES_PER_ELEMENT);a.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,De,Q.width,Q.height,1,oe,R,Ze)}M.clearLayerUpdates()}else a.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,oe,R,Q.data)}else a.texImage3D(t.TEXTURE_2D_ARRAY,0,$,Q.width,Q.height,Q.depth,0,oe,R,Q.data);else if(M.isData3DTexture)ue?(ce&&a.texStorage3D(t.TEXTURE_3D,Pe,$,Q.width,Q.height,Q.depth),Re&&a.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,oe,R,Q.data)):a.texImage3D(t.TEXTURE_3D,0,$,Q.width,Q.height,Q.depth,0,oe,R,Q.data);else if(M.isFramebufferTexture){if(ce)if(ue)a.texStorage2D(t.TEXTURE_2D,Pe,$,Q.width,Q.height);else{let le=Q.width,De=Q.height;for(let Ze=0;Ze<Pe;Ze++)a.texImage2D(t.TEXTURE_2D,Ze,$,le,De,0,oe,R,null),le>>=1,De>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){let le=t.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),Q.parentNode!==le){le.appendChild(Q),p.add(M),le.onpaint=De=>{let Ze=De.changedElements;for(let Se of p)Ze.includes(Se.image)&&(Se.needsUpdate=!0)},le.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Q);else{let Ze=t.RGBA,Se=t.RGBA,I=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ze,Se,I,Q)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(fe.length>0){if(ue&&ce){let le=Be(fe[0]);a.texStorage2D(t.TEXTURE_2D,Pe,$,le.width,le.height)}for(let le=0,De=fe.length;le<De;le++)W=fe[le],ue?Re&&a.texSubImage2D(t.TEXTURE_2D,le,0,0,oe,R,W):a.texImage2D(t.TEXTURE_2D,le,$,oe,R,W);M.generateMipmaps=!1}else if(ue){if(ce){let le=Be(Q);a.texStorage2D(t.TEXTURE_2D,Pe,$,le.width,le.height)}Re&&a.texSubImage2D(t.TEXTURE_2D,0,0,0,oe,R,Q)}else a.texImage2D(t.TEXTURE_2D,0,$,oe,R,Q);y(M)&&M.mipmapsAutoUpdate===!0&&_(ne),he.__version=de.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ia(T,M,B){if(M.image.length!==6)return;let ne=xt(T,M),ee=M.source;a.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+B);let de=n.get(ee);if(ee.version!==de.__version||ne===!0){a.activeTexture(t.TEXTURE0+B);let he=ot.getPrimaries(ot.workingColorSpace),K=M.colorSpace===$i?null:ot.getPrimaries(M.colorSpace),Q=M.colorSpace===$i||he===K?t.NONE:t.BROWSER_DEFAULT_WEBGL;a.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),a.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),a.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),a.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let oe=M.isCompressedTexture||M.image[0].isCompressedTexture,R=M.image[0]&&M.image[0].isDataTexture,$=[];for(let Se=0;Se<6;Se++)!oe&&!R?$[Se]=m(M.image[Se],!0,i.maxCubemapSize):$[Se]=R?M.image[Se].image:M.image[Se],$[Se]=Le(M,$[Se]);let W=$[0],fe=s.convert(M.format,M.colorSpace),ue=s.convert(M.type),ce=w(M.internalFormat,fe,ue,M.normalized,M.colorSpace),Re=M.isVideoTexture!==!0,Pe=de.__version===void 0||ne===!0,le=ee.dataReady,De=L(M,W);tt(t.TEXTURE_CUBE_MAP,M);let Ze;if(M.isDepthTexture){if(ce=x(M.format===ji,M.type),Pe)if(Re)a.texStorage2D(t.TEXTURE_CUBE_MAP,1,ce,W.width,W.height);else for(let Se=0;Se<6;Se++)a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ce,W.width,W.height,0,fe,ue,null)}else if(oe){Re&&Pe&&a.texStorage2D(t.TEXTURE_CUBE_MAP,De,ce,W.width,W.height);for(let Se=0;Se<6;Se++){Ze=$[Se].mipmaps;for(let I=0;I<Ze.length;I++){let J=Ze[I];M.format!==Jn?fe!==null?Re?le&&a.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,I,0,0,J.width,J.height,fe,J.data):a.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,I,ce,J.width,J.height,0,J.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?le&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,I,0,0,J.width,J.height,fe,ue,J.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,I,ce,J.width,J.height,0,fe,ue,J.data)}}}else{if(Ze=M.mipmaps,Re&&Pe){Ze.length>0&&De++;let Se=Be($[0]);a.texStorage2D(t.TEXTURE_CUBE_MAP,De,ce,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(R){Re?le&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,$[Se].width,$[Se].height,fe,ue,$[Se].data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ce,$[Se].width,$[Se].height,0,fe,ue,$[Se].data);for(let I=0;I<Ze.length;I++){let re=Ze[I].image[Se].image;Re?le&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,I+1,0,0,re.width,re.height,fe,ue,re.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,I+1,ce,re.width,re.height,0,fe,ue,re.data)}}else{Re?le&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,fe,ue,$[Se]):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ce,fe,ue,$[Se]);for(let I=0;I<Ze.length;I++){let J=Ze[I];Re?le&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,I+1,0,0,fe,ue,J.image[Se]):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,I+1,ce,fe,ue,J.image[Se])}}}y(M)&&M.mipmapsAutoUpdate===!0&&_(t.TEXTURE_CUBE_MAP),de.__version=ee.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Je(T,M,B,ne,ee,de){let he=s.convert(B.format,B.colorSpace),K=s.convert(B.type),Q=w(B.internalFormat,he,K,B.normalized,B.colorSpace),oe=n.get(M),R=n.get(B);if(R.__renderTarget=M,!oe.__hasExternalTextures){let $=Math.max(1,M.width>>de),W=Math.max(1,M.height>>de);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?a.texImage3D(ee,de,Q,$,W,M.depth,0,he,K,null):a.texImage2D(ee,de,Q,$,W,0,he,K,null)}a.bindFramebuffer(t.FRAMEBUFFER,T),ge(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ee,R.__webglTexture,0,Lt(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,ee,R.__webglTexture,de),a.bindFramebuffer(t.FRAMEBUFFER,null)}function yt(T,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,T),M.depthBuffer){let ne=M.depthTexture,ee=ne&&ne.isDepthTexture?ne.type:null,de=x(M.stencilBuffer,ee),he=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ge(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Lt(M),de,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,Lt(M),de,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,de,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,he,t.RENDERBUFFER,T)}else{let ne=M.textures;for(let ee=0;ee<ne.length;ee++){let de=ne[ee],he=s.convert(de.format,de.colorSpace),K=s.convert(de.type),Q=w(de.internalFormat,he,K,de.normalized,de.colorSpace);ge(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Lt(M),Q,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,Lt(M),Q,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Q,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Kt(T,M,B){let ne=M.isWebGLCubeRenderTarget===!0;if(a.bindFramebuffer(t.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=n.get(M.depthTexture);ee.__renderTarget=M;let de=ne?M.depthTexture.image[0]:M.depthTexture.image;(!ee.__webglTexture||de.width!==M.width||de.height!==M.height)&&(de.width=M.width,de.height=M.height,M.depthTexture.needsUpdate=!0),ne?me(M.depthTexture,0):ve(M.depthTexture,0);let he=ee.__webglTexture,K=Lt(M),Q=ne?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,oe=M.depthTexture.format===ji?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===Zi)ge(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,oe,Q,he,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,oe,Q,he,0);else if(M.depthTexture.format===ji)ge(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,oe,Q,he,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,oe,Q,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ta(T){let M=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){let ne=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ne){let ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ne.removeEventListener("dispose",ee)};ne.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=ne}if(T.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let ne=0;ne<6;ne++)Kt(M.__webglFramebuffer[ne],T,ne);else T.texture.mipmaps.length>0?Kt(M.__webglFramebuffer[0],T,0):Kt(M.__webglFramebuffer,T,0);else if(B){M.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(a.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ne]),M.__webglDepthbuffer[ne]===void 0)M.__webglDepthbuffer[ne]=t.createRenderbuffer(),yt(M.__webglDepthbuffer[ne],T,!1);else{let ee=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=M.__webglDepthbuffer[ne];t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,de)}}else if(T.texture.mipmaps.length>0?a.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):a.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),yt(M.__webglDepthbuffer,T,!1);else{let ee=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,de)}a.bindFramebuffer(t.FRAMEBUFFER,null)}function Ht(T,M,B){let ne=n.get(T);M!==void 0&&Je(ne.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Ta(T)}function va(T){let M=T.texture,B=n.get(T),ne=n.get(M);T.addEventListener("dispose",H),P(T);let ee=T.textures,de=T.isWebGLCubeRenderTarget===!0,he=ee.length>1;if(he||(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=M.version,r.memory.textures++),de){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(M.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let Q=0;Q<M.mipmaps.length;Q++)B.__webglFramebuffer[K][Q]=t.createFramebuffer()}else B.__webglFramebuffer[K]=t.createFramebuffer()}else{if(M.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<M.mipmaps.length;K++)B.__webglFramebuffer[K]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(he)for(let K=0,Q=ee.length;K<Q;K++){let oe=n.get(ee[K]);oe.__webglTexture===void 0&&(oe.__webglTexture=t.createTexture(),r.memory.textures++)}if(T.samples>0&&ge(T)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],a.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<ee.length;K++){let Q=ee[K];B.__webglColorRenderbuffer[K]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[K]);let oe=s.convert(Q.format,Q.colorSpace),R=s.convert(Q.type),$=w(Q.internalFormat,oe,R,Q.normalized,Q.colorSpace,T.isXRRenderTarget===!0),W=Lt(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,W,$,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+K,t.RENDERBUFFER,B.__webglColorRenderbuffer[K])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),yt(B.__webglDepthRenderbuffer,T,!0)),a.bindFramebuffer(t.FRAMEBUFFER,null)}}if(de){a.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),tt(t.TEXTURE_CUBE_MAP,M);for(let K=0;K<6;K++)if(M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)Je(B.__webglFramebuffer[K][Q],T,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else Je(B.__webglFramebuffer[K],T,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);y(M)?_(t.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),a.unbindTexture()}else if(he){for(let K=0,Q=ee.length;K<Q;K++){let oe=ee[K],R=n.get(oe),$=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&($=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),a.bindTexture($,R.__webglTexture),tt($,oe),Je(B.__webglFramebuffer,T,oe,t.COLOR_ATTACHMENT0+K,$,0),y(oe)&&_($)}a.unbindTexture()}else{let K=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(K=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),a.bindTexture(K,ne.__webglTexture),tt(K,M),M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)Je(B.__webglFramebuffer[Q],T,M,t.COLOR_ATTACHMENT0,K,Q);else Je(B.__webglFramebuffer,T,M,t.COLOR_ATTACHMENT0,K,0);y(M)?_(K):M.mipmaps.length>0&&t.texParameteri(K,t.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),a.unbindTexture()}T.depthBuffer&&Ta(T)}function O(T){let M=T.textures;for(let B=0,ne=M.length;B<ne;B++){let ee=M[B];if(y(ee)&&ee.mipmapsAutoUpdate===!0){let de=A(T),he=n.get(ee).__webglTexture;a.bindTexture(de,he),_(de),a.unbindTexture()}}}let Za=[];function dt(T){if(T.samples>0){if(ge(T)===!1){let M=T.textures,B=T.width,ne=T.height,ee=t.COLOR_BUFFER_BIT,de=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=n.get(T),K=M.length>1;if(K)for(let oe=0;oe<M.length;oe++)a.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,null),a.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,null,0);a.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?a.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):a.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let oe=0;oe<M.length;oe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),K){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[oe]);let R=n.get(M[oe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,R,0)}t.blitFramebuffer(0,0,B,ne,0,0,B,ne,ee,t.NEAREST),l===!0&&(Za.length=0,Za.push(t.COLOR_ATTACHMENT0+oe),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&Za.push(de),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Za))}if(a.bindFramebuffer(t.READ_FRAMEBUFFER,null),a.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),K)for(let oe=0;oe<M.length;oe++){a.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,he.__webglColorRenderbuffer[oe]);let R=n.get(M[oe]).__webglTexture;a.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,R,0)}a.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let M=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Lt(T){return Math.min(i.maxSamples,T.samples)}function ge(T){let M=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Xt(T){let M=r.render.frame;f.get(T)!==M&&(f.set(T,M),T.update())}function Le(T,M){let B=T.colorSpace,ne=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Eu&&B!==$i&&(ot.getTransfer(B)===St?(ne!==Jn||ee!==nn)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",B)),M}function Be(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}this.allocateTextureUnit=He,this.resetTextureUnits=ae,this.getTextureUnits=ie,this.setTextureUnits=Te,this.setTexture2D=ve,this.setTexture2DArray=be,this.setTexture3D=Oe,this.setTextureCube=me,this.rebindTextures=Ht,this.setupRenderTarget=va,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Ta,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=ge,this.dispose=X}function wD(t,e){function a(n,i=$i){let s,r=ot.getTransfer(i);if(n===nn)return t.UNSIGNED_BYTE;if(n===Ch)return t.UNSIGNED_SHORT_4_4_4_4;if(n===Ah)return t.UNSIGNED_SHORT_5_5_5_1;if(n===c0)return t.UNSIGNED_INT_5_9_9_9_REV;if(n===d0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(n===l0)return t.BYTE;if(n===u0)return t.SHORT;if(n===fl)return t.UNSIGNED_SHORT;if(n===Lh)return t.INT;if(n===Yn)return t.UNSIGNED_INT;if(n===Zn)return t.FLOAT;if(n===Kn)return t.HALF_FLOAT;if(n===f0)return t.ALPHA;if(n===h0)return t.RGB;if(n===Jn)return t.RGBA;if(n===Zi)return t.DEPTH_COMPONENT;if(n===ji)return t.DEPTH_STENCIL;if(n===p0)return t.RED;if(n===wh)return t.RED_INTEGER;if(n===Zs)return t.RG;if(n===Th)return t.RG_INTEGER;if(n===Ih)return t.RGBA_INTEGER;if(n===ju||n===$u||n===ec||n===tc)if(r===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ju)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$u)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ju)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$u)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ec)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Eh||n===Rh||n===Dh||n===Nh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Eh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ph||n===Uh||n===Oh||n===Bh||n===Fh||n===ac||n===kh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ph||n===Uh)return r===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Oh)return r===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Bh)return s.COMPRESSED_R11_EAC;if(n===Fh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ac)return s.COMPRESSED_RG11_EAC;if(n===kh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===zh||n===Hh||n===Gh||n===Vh||n===qh||n===Wh||n===Xh||n===Yh||n===Zh||n===Kh||n===Jh||n===Qh||n===jh||n===$h)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===zh)return r===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hh)return r===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gh)return r===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vh)return r===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qh)return r===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wh)return r===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xh)return r===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yh)return r===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zh)return r===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kh)return r===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jh)return r===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qh)return r===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jh)return r===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$h)return r===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ep||n===tp||n===ap)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ep)return r===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ap)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===np||n===ip||n===nc||n===sp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===np)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ip)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Or?t.UNSIGNED_INT_24_8:t[n]!==void 0?t[n]:null}return{convert:a}}function RD(t,e){function a(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,_0(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function i(g,d,m,y,_){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(g,d):d.isMeshLambertMaterial?(s(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(g,d),p(g,d)):d.isMeshPhongMaterial?(s(g,d),f(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(g,d),c(g,d),d.isMeshPhysicalMaterial&&h(g,d,_)):d.isMeshMatcapMaterial?(s(g,d),S(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),b(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(r(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,m,y):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,a(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,a(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,a(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Ya&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,a(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Ya&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,a(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,a(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,a(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let m=e.get(d),y=m.envMap,_=m.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(ED.makeRotationFromEuler(_)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(jL),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,a(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,a(d.aoMap,g.aoMapTransform))}function r(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,a(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,m,y){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*m,g.scale.value=y*.5,d.map&&(g.map.value=d.map,a(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,a(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,a(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,a(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function f(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function c(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,a(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,a(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function h(g,d,m){g.ior.value=d.ior,d.diffuseRoughness>0&&(g.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=d.diffuseRoughnessMap,a(d.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,a(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,a(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,a(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,a(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,a(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ya&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,a(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,a(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,a(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,a(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,a(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,a(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,a(d.specularIntensityMap,g.specularIntensityMapTransform))}function S(g,d){d.matcap&&(g.matcap.value=d.matcap)}function b(g,d){let m=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function DD(t,e,a,n){let i={},s={};function r(m,y){let _=y.program;n.uniformBlockBinding(m,_,i[m.id])}function o(m,y){let _=i[m.id];_===void 0&&(S(m),_=l(m),i[m.id]=_,m.addEventListener("dispose",g));let A=y.program;n.updateUBOMapping(m,A);let w=e.render.frame;s[m.id]!==w&&(u(m),s[m.id]=w)}function l(m){let y=t.createBuffer(),_=m.__size,A=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,_,A),t.bindBuffer(t.UNIFORM_BUFFER,null),y}function u(m){let y=i[m.id],_=m.uniforms,A=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let w=0,x=_.length;w<x;w++){let L=_[w];if(Array.isArray(L))for(let P=0,E=L.length;P<E;P++)f(L[P],w,P,A);else f(L,w,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(m,y,_,A){if(c(m,y,_,A)===!0){let w=m.__offset,x=m.value;if(Array.isArray(x)){let L=0;for(let P=0;P<x.length;P++){let E=x[P],U=b(E,!0);p(E,m.__data,L),L+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else p(x,m.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,w,m.__data)}}function p(m,y,_){typeof m=="number"||typeof m=="boolean"?y[_]=m:m.isMatrix3?(y[_]=m.elements[0],y[_+1]=m.elements[1],y[_+2]=m.elements[2],y[_+3]=0,y[_+4]=m.elements[3],y[_+5]=m.elements[4],y[_+6]=m.elements[5],y[_+7]=0,y[_+8]=m.elements[6],y[_+9]=m.elements[7],y[_+10]=m.elements[8],y[_+11]=0):ArrayBuffer.isView(m)?y.set(m.subarray(0,y.length-_),_):m.toArray(y,_)}function c(m,y,_,A){let w=m.value,x=y+"_"+_;if(Array.isArray(w)){A[x]===void 0&&(A[x]=[]);let L=A[x],P=!1;for(let E=0;E<w.length;E++)h(w[E],L,E)===!0&&(P=!0);return P}return h(w,A,x)}function h(m,y,_){if(y[_]===void 0)return typeof m=="number"||typeof m=="boolean"?y[_]=m:ArrayBuffer.isView(m)?y[_]=m.slice():y[_]=m.clone(),!0;{let A=y[_];if(typeof m=="number"||typeof m=="boolean"){if(A!==m)return y[_]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(A.equals(m)===!1)return A.copy(m),!0}}return!1}function S(m){let y=m.uniforms,_=0,A=16;for(let x=0,L=y.length;x<L;x++){let P=Array.isArray(y[x])?y[x]:[y[x]];for(let E=0,U=P.length;E<U;E++){let H=P[E],Z=Array.isArray(H.value)?H.value:[H.value],N=Array.isArray(y[x])||Array.isArray(H.value),X=_;for(let V=0,se=Z.length;V<se;V++){let q=Z[V],ae=b(q,N),ie=_%A,Te=ie%ae.boundary,He=ie+Te;_+=Te,He!==0&&A-He<ae.storage&&(_+=A-He),V===0&&(X=_),_+=ae.storage}let Y=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new Y((_-X)/Float32Array.BYTES_PER_ELEMENT),H.__offset=X}}let w=_%A;return w>0&&(_+=A-w),m.__size=_,m.__cache={},this}function b(m,y){let _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=16,_.storage=48):m.isMatrix4?(_.boundary=16,_.storage=64):m.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(_.boundary=16,_.storage=m.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",m),y===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function g(m){let y=m.target;y.removeEventListener("dispose",g),t.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function d(){for(let m in i)t.deleteBuffer(i[m]);i={},s={}}return{bind:r,update:o,dispose:d}}function PD(){return Mi===null&&(Mi=new nh(ND,16,16,Zs,Kn),Mi.name="DFG_LUT",Mi.minFilter=Wa,Mi.magFilter=Wa,Mi.wrapS=pi,Mi.wrapT=pi,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}var QI,jI,$I,eE,tE,aE,nE,iE,sE,rE,oE,lE,uE,cE,dE,fE,hE,pE,mE,gE,xE,vE,SE,yE,_E,ME,bE,LE,CE,AE,wE,TE,IE,EE,RE,DE,NE,PE,UE,OE,BE,FE,kE,zE,HE,GE,VE,qE,WE,XE,YE,ZE,KE,JE,QE,jE,$E,e2,t2,a2,n2,i2,s2,r2,o2,l2,u2,c2,d2,f2,h2,p2,m2,g2,x2,v2,S2,y2,_2,M2,b2,L2,C2,A2,w2,T2,I2,E2,R2,D2,N2,P2,U2,O2,B2,F2,k2,z2,H2,G2,V2,q2,W2,X2,Y2,Z2,K2,J2,Q2,j2,$2,eR,tR,aR,nR,iR,sR,rR,oR,lR,uR,cR,dR,fR,hR,pR,mR,gR,xR,vR,SR,yR,_R,MR,bR,LR,CR,AR,wR,TR,IR,je,ye,bi,op,ER,VL,oc,_L,OR,BR,qL,WL,FR,kR,zR,up,QR,XL,YL,ZL,KL,JL,QL,CL,AL,wL,TL,IL,T0,I0,E0,A0,hl,z3,H3,DL,W3,lp,Q3,$3,tD,nD,sD,lD,D0,N0,gD,yD,_D,MD,bD,HL,sc,w0,TD,ID,P0,U0,ED,jL,ND,Mi,cp,$L=Ge(()=>{C0();C0();QI=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jI=`#ifdef USE_ALPHAHASH
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
#endif`,$I=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nE=`#ifdef USE_AOMAP
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
#endif`,iE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sE=`#ifdef USE_BATCHING
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
#endif`,rE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cE=`#ifdef USE_IRIDESCENCE
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
#endif`,dE=`#ifdef USE_BUMPMAP
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
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,SE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,yE=`#define PI 3.141592653589793
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
} // validated`,_E=`vec3 transformedNormal = objectNormal;
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
#endif`,ME=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AE="gl_FragColor = linearToOutputTexel( gl_FragColor );",wE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TE=`#ifdef USE_ENVMAP
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
#endif`,IE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,EE=`#ifdef USE_ENVMAP
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
#endif`,RE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DE=`#ifdef USE_ENVMAP
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
#endif`,NE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BE=`#ifdef USE_GRADIENTMAP
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
}`,FE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,GE=`#ifdef USE_ENVMAP
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
#endif`,VE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YE=`PhysicalMaterial material;
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
#endif`,ZE=`uniform sampler2D dfgLUT;
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
}`,KE=`
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
#endif`,JE=`#if defined( RE_IndirectDiffuse )
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
#endif`,QE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jE=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,$E=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,r2=`#if defined( USE_POINTS_UV )
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
#endif`,o2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c2=`#if defined( USE_MORPHCOLORS )
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
#endif`,d2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f2=`#ifdef USE_MORPHTARGETS
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
#endif`,h2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,m2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,S2=`#ifdef USE_NORMALMAP
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
#endif`,y2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,A2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,I2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U2=`float getShadowMask() {
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
}`,O2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B2=`#ifdef USE_SKINNING
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
#endif`,F2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k2=`#ifdef USE_SKINNING
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
#endif`,z2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,q2=`#ifdef USE_TRANSMISSION
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
#endif`,W2=`#ifdef USE_TRANSMISSION
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
#endif`,X2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,J2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q2=`uniform sampler2D t2D;
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
}`,j2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$2=`uniform float backgroundBlurriness;
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
}`,eR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aR=`#include <common>
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
}`,nR=`#if DEPTH_PACKING == 3200
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
}`,iR=`#define DISTANCE
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
}`,sR=`#define DISTANCE
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
}`,rR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lR=`uniform float scale;
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
}`,uR=`uniform vec3 diffuse;
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
}`,cR=`#include <common>
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
}`,dR=`uniform vec3 diffuse;
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
}`,fR=`#define LAMBERT
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
}`,hR=`#define LAMBERT
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
}`,pR=`#define MATCAP
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
}`,mR=`#define MATCAP
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
}`,gR=`#define NORMAL
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
}`,xR=`#define NORMAL
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
}`,vR=`#define PHONG
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
}`,SR=`#define PHONG
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
}`,yR=`#define STANDARD
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
}`,_R=`#define STANDARD
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
}`,MR=`#define TOON
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
}`,bR=`#define TOON
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
}`,LR=`uniform float size;
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
}`,CR=`uniform vec3 diffuse;
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
}`,AR=`#include <common>
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
}`,wR=`uniform vec3 color;
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
}`,TR=`uniform float rotation;
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
}`,IR=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:QI,alphahash_pars_fragment:jI,alphamap_fragment:$I,alphamap_pars_fragment:eE,alphatest_fragment:tE,alphatest_pars_fragment:aE,aomap_fragment:nE,aomap_pars_fragment:iE,batching_pars_vertex:sE,batching_vertex:rE,begin_vertex:oE,beginnormal_vertex:lE,bsdfs:uE,iridescence_fragment:cE,bumpmap_pars_fragment:dE,clipping_planes_fragment:fE,clipping_planes_pars_fragment:hE,clipping_planes_pars_vertex:pE,clipping_planes_vertex:mE,color_fragment:gE,color_pars_fragment:xE,color_pars_vertex:vE,color_vertex:SE,common:yE,defaultnormal_vertex:_E,displacementmap_pars_vertex:ME,displacementmap_vertex:bE,emissivemap_fragment:LE,emissivemap_pars_fragment:CE,colorspace_fragment:AE,colorspace_pars_fragment:wE,envmap_fragment:TE,envmap_common_pars_fragment:IE,envmap_pars_fragment:EE,envmap_pars_vertex:RE,envmap_physical_pars_fragment:GE,envmap_vertex:DE,fog_vertex:NE,fog_pars_vertex:PE,fog_fragment:UE,fog_pars_fragment:OE,gradientmap_pars_fragment:BE,lightmap_pars_fragment:FE,lights_lambert_fragment:kE,lights_lambert_pars_fragment:zE,lights_pars_begin:HE,lights_toon_fragment:VE,lights_toon_pars_fragment:qE,lights_phong_fragment:WE,lights_phong_pars_fragment:XE,lights_physical_fragment:YE,lights_physical_pars_fragment:ZE,lights_fragment_begin:KE,lights_fragment_maps:JE,lights_fragment_end:QE,lightprobes_pars_fragment:jE,logdepthbuf_fragment:$E,logdepthbuf_pars_fragment:e2,logdepthbuf_pars_vertex:t2,logdepthbuf_vertex:a2,map_fragment:n2,map_pars_fragment:i2,map_particle_fragment:s2,map_particle_pars_fragment:r2,metalnessmap_fragment:o2,metalnessmap_pars_fragment:l2,morphinstance_vertex:u2,morphcolor_vertex:c2,morphnormal_vertex:d2,morphtarget_pars_vertex:f2,morphtarget_vertex:h2,normal_fragment_begin:p2,normal_fragment_maps:m2,normal_pars_fragment:g2,normal_pars_vertex:x2,normal_vertex:v2,normalmap_pars_fragment:S2,clearcoat_normal_fragment_begin:y2,clearcoat_normal_fragment_maps:_2,clearcoat_pars_fragment:M2,iridescence_pars_fragment:b2,opaque_fragment:L2,packing:C2,premultiplied_alpha_fragment:A2,project_vertex:w2,dithering_fragment:T2,dithering_pars_fragment:I2,roughnessmap_fragment:E2,roughnessmap_pars_fragment:R2,shadowmap_pars_fragment:D2,shadowmap_pars_vertex:N2,shadowmap_vertex:P2,shadowmask_pars_fragment:U2,skinbase_vertex:O2,skinning_pars_vertex:B2,skinning_vertex:F2,skinnormal_vertex:k2,specularmap_fragment:z2,specularmap_pars_fragment:H2,tonemapping_fragment:G2,tonemapping_pars_fragment:V2,transmission_fragment:q2,transmission_pars_fragment:W2,uv_pars_fragment:X2,uv_pars_vertex:Y2,uv_vertex:Z2,worldpos_vertex:K2,background_vert:J2,background_frag:Q2,backgroundCube_vert:j2,backgroundCube_frag:$2,cube_vert:eR,cube_frag:tR,depth_vert:aR,depth_frag:nR,distance_vert:iR,distance_frag:sR,equirect_vert:rR,equirect_frag:oR,linedashed_vert:lR,linedashed_frag:uR,meshbasic_vert:cR,meshbasic_frag:dR,meshlambert_vert:fR,meshlambert_frag:hR,meshmatcap_vert:pR,meshmatcap_frag:mR,meshnormal_vert:gR,meshnormal_frag:xR,meshphong_vert:vR,meshphong_frag:SR,meshphysical_vert:yR,meshphysical_frag:_R,meshtoon_vert:MR,meshtoon_frag:bR,points_vert:LR,points_frag:CR,shadow_vert:AR,shadow_frag:wR,sprite_vert:TR,sprite_frag:IR},ye={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},bi={basic:{uniforms:Ba([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Ba([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Ba([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Ba([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Ba([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new lt(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Ba([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Ba([ye.points,ye.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Ba([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Ba([ye.common,ye.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Ba([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Ba([ye.sprite,ye.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:Ba([ye.common,ye.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:Ba([ye.lights,ye.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};bi.physical={uniforms:Ba([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};op={r:0,b:0,g:0},ER=new Ft,VL=new We;VL.set(-1,0,0,0,1,0,0,0,1);oc=class extends Sn{constructor(e=1,a={}){super(e,e,a),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Fu(i),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Vs(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:Br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ya,blending:Nr});s.uniforms.tEquirect.value=a;let r=new Pn(i,s),o=a.minFilter;return a.minFilter===Qi&&(a.minFilter=Wa),new ll(1,10,this).update(e,r),a.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,a=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(a,n,i);e.setRenderTarget(s)}},_L=256,OR=3,BR=20,qL=256,WL=16,FR=3,kR=new z,zR=new lt,up=class t{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ll(1,10,null),this._boxMesh=new Pn(new Vs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,a=0,n=.1,i=100,s={}){let{size:r=256,position:o=kR}=s,l=this._renderer;this._setSize(r);let u=this._allocateTarget(),f=this._getSourceTarget(!0);a>0&&(f.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,c=l.autoClearColor,h=l.autoClearDepth,S=l.autoClearStencil,b=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(e.background=l.getClearColor(zR));let g=new ll(n,i,f);return g.position.copy(o),g.update(l,e),l.autoClear=p,l.autoClearColor=c,l.autoClearDepth=h,l.autoClearStencil=S,e.background=b,a>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(u,a)),this._applyPMREM(u),u}fromEquirectangular(e,a=null){return this._fromTexture(e,a)}fromCubemap(e,a=null){return this._fromTexture(e,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=LL(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bL(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,a){return a>0?1-Math.sqrt(1-e/a):0}_setSize(e){this._cubeSize=Math.max(_L,gL(e))}_fromTexture(e,a){e.mapping===Ur||e.mapping===dl?this._setSize(e.image.length===0?_L:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=a||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,a=ML(e,!1,!1),n=Math.log2(e)-OR;for(let i=0;i<=n;i++)a.texture.mipmaps.push({width:e>>i,height:e>>i});return a.texture.name="PMREM",a.texture.isPMREMTexture=!0,a}_getSourceTarget(e=!1){let a=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==a||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ML(a,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,a,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=a;let r=e.width>>a;e.viewport.set(0,0,r,r),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let a;e.mapping===Ur||e.mapping===dl?(this._cubemapMaterial===null&&(this._cubemapMaterial=LL()),a=this._cubemapMaterial,a.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=bL()),a=this._equirectMaterial),a.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,a)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=HR(),this._integrationMaterial=GR());let a=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(a/WL);for(let r=0;r<=n;r++){let o=t.lodToRoughness(r,n);if(r>n-FR)s.roughness.value=o,this._renderCube(e,r,this._integrationMaterial);else{let l=o>0?Math.log2(a)+.5*Math.log2(6/(qL*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,a){this._blurMaterial===null&&(this._blurMaterial=VR());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(a,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}};QR={[e0]:"LINEAR_TONE_MAPPING",[t0]:"REINHARD_TONE_MAPPING",[a0]:"CINEON_TONE_MAPPING",[n0]:"ACES_FILMIC_TONE_MAPPING",[s0]:"AGX_TONE_MAPPING",[r0]:"NEUTRAL_TONE_MAPPING",[i0]:"CUSTOM_TONE_MAPPING"};XL=new an,YL=new Ji(1,1),ZL=new ku(1),KL=new Nu,JL=new eh,QL=new Fu,CL=[],AL=[],wL=new Float32Array(16),TL=new Float32Array(9),IL=new Float32Array(4);T0=class{constructor(e,a,n){this.id=e,this.addr=n,this.cache=[],this.type=a.type,this.setValue=v3(a.type)}},I0=class{constructor(e,a,n){this.id=e,this.addr=n,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=F3(a.type)}},E0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,a,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let o=i[s];o.setValue(e,a[o.id],n)}}},A0=/(\w+)(\])?(\[|\.)?/g;hl=class{constructor(e,a){this.seq=[],this.map={};let n=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let o=e.getActiveUniform(a,r),l=e.getUniformLocation(a,o.name);k3(o,l,this)}let i=[],s=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(r):s.push(r);i.length>0&&(this.seq=i.concat(s))}setValue(e,a,n,i){let s=this.map[a];s!==void 0&&s.setValue(e,n,i)}setOptional(e,a,n){let i=a[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,a,n,i){for(let s=0,r=a.length;s!==r;++s){let o=a[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,a){let n=[];for(let i=0,s=e.length;i!==s;++i){let r=e[i];r.id in a&&n.push(r)}return n}};z3=37297,H3=0;DL=new We;W3={[e0]:"Linear",[t0]:"Reinhard",[a0]:"Cineon",[n0]:"ACESFilmic",[s0]:"AgX",[r0]:"Neutral",[i0]:"Custom"};lp=new z;Q3=/^[ \t]*#include +<([\w\d./]+)>/gm;$3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;tD={[Ju]:"SHADOWMAP_TYPE_PCF",[ul]:"SHADOWMAP_TYPE_VSM"};nD={[dl]:"ENVMAP_MODE_REFRACTION"};sD={[$x]:"ENVMAP_BLENDING_MULTIPLY",[eL]:"ENVMAP_BLENDING_MIX",[tL]:"ENVMAP_BLENDING_ADD"};lD=0,D0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,a,n){let i=this._getShaderCacheForMaterial(e);return i.has(a)===!1&&(i.add(a),a.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let a=this.materialCache.get(e);for(let n of a)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let a=this.materialCache,n=a.get(e);return n===void 0&&(n=new Set,a.set(e,n)),n}_getShaderStage(e){let a=this.shaderCache,n=a.get(e);return n===void 0&&(n=new N0(e),a.set(e,n)),n}},N0=class{constructor(e){this.id=lD++,this.code=e,this.usedTimes=0}};gD=0;yD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_D=`uniform sampler2D shadow_pass;
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
}`,MD=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],bD=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],HL=new Ft,sc=new z,w0=new z;TD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ID=`
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

}`,P0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,a){if(this.texture===null){let n=new zu(e.texture);(e.depthNear!==a.depthNear||e.depthFar!==a.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let a=e.cameras[0].viewport,n=new Si({vertexShader:TD,fragmentShader:ID,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new Pn(new Gu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},U0=class extends gi{constructor(e,a){super();let n=this,i=null,s=1,r=null,o="local-floor",l=1,u=null,f=null,p=null,c=null,h=null,S=null,b=typeof XRWebGLBinding<"u",g=new P0,d={},m=a.getContextAttributes(),y=null,_=null,A=[],w=[],x=new et,L=null,P=null,E=new qa;E.viewport=new kt;let U=new qa;U.viewport=new kt;let H=[E,U],Z=new yh,N=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ve=A[j];return ve===void 0&&(ve=new rl,A[j]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(j){let ve=A[j];return ve===void 0&&(ve=new rl,A[j]=ve),ve.getGripSpace()},this.getHand=function(j){let ve=A[j];return ve===void 0&&(ve=new rl,A[j]=ve),ve.getHandSpace()};function Y(j){let ve=w.indexOf(j.inputSource);if(ve===-1)return;let be=A[ve];be!==void 0&&(be.update(j.inputSource,j.frame,u||r),be.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",se);for(let j=0;j<A.length;j++){let ve=w[j];ve!==null&&(w[j]=null,A[j].disconnect(ve))}N=null,X=null,g.reset();for(let j in d)delete d[j];if(e.setRenderTarget(y),h=null,c=null,p=null,i=null,_=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(x.width,x.height,!1),P!==null){let j=P.camera;j.fov=P.fov,j.zoom=P.zoom,j.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||r},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return c!==null?c:h},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(i,a)),p},this.getFrame=function(){return S},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",V),i.addEventListener("inputsourceschange",se),m.xrCompatible!==!0&&await a.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(x),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Oe=null,me=null;m.depth&&(me=m.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,be=m.stencil?ji:Zi,Oe=m.stencil?Or:Yn);let qe={colorFormat:a.RGBA8,depthFormat:me,scaleFactor:s};p=this.getBinding(),c=p.createProjectionLayer(qe),i.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),_=new Sn(c.textureWidth,c.textureHeight,{format:Jn,type:nn,depthTexture:new Ji(c.textureWidth,c.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}else{let be={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,a,be),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),_=new Sn(h.framebufferWidth,h.framebufferHeight,{format:Jn,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,r=await i.requestReferenceSpace(o),He.setContext(i),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function se(j){for(let ve=0;ve<j.removed.length;ve++){let be=j.removed[ve],Oe=w.indexOf(be);Oe>=0&&(w[Oe]=null,A[Oe].disconnect(be))}for(let ve=0;ve<j.added.length;ve++){let be=j.added[ve],Oe=w.indexOf(be);if(Oe===-1){for(let qe=0;qe<A.length;qe++)if(qe>=w.length){w.push(be),Oe=qe;break}else if(w[qe]===null){w[qe]=be,Oe=qe;break}if(Oe===-1)break}let me=A[Oe];me&&me.connect(be)}}function q(j,ve){ve===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ve.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ve=j.near,be=j.far;g.texture!==null&&(g.depthNear>0&&(ve=g.depthNear),g.depthFar>0&&(be=g.depthFar)),Z.near=U.near=E.near=ve,Z.far=U.far=E.far=be,(N!==Z.near||X!==Z.far)&&(i.updateRenderState({depthNear:Z.near,depthFar:Z.far}),N=Z.near,X=Z.far),Z.layers.mask=j.layers.mask|6,E.layers.mask=Z.layers.mask&-5,U.layers.mask=Z.layers.mask&-3;let Oe=j.parent,me=Z.cameras;q(Z,Oe);for(let qe=0;qe<me.length;qe++)q(me[qe],Oe);Z.projectionMatrix.copy(E.projectionMatrix),Z.projectionMatrixInverse.copy(E.projectionMatrixInverse),P===null&&j.isPerspectiveCamera&&(P={camera:j,fov:j.fov,zoom:j.zoom}),ae(j,Z,Oe)};function ae(j,ve,be){be===null?j.matrix.copy(ve.matrixWorld):(j.matrix.copy(be.matrixWorld),j.matrix.invert(),j.matrix.multiply(ve.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ve.projectionMatrix),j.projectionMatrixInverse.copy(ve.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Qf*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(c===null&&h===null))return l},this.setFoveation=function(j){l=j,c!==null&&(c.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(Z)},this.getCameraTexture=function(j){return d[j]};let ie=null;function Te(j,ve){if(f=ve.getViewerPose(u||r),S=ve,f!==null){let be=f.views;h!==null&&(e.setRenderTargetFramebuffer(_,h.framebuffer),e.setRenderTarget(_));let Oe=!1;be.length!==Z.cameras.length&&(Z.cameras.length=0,Oe=!0);for(let Ne=0;Ne<be.length;Ne++){let tt=be[Ne],xt=null;if(h!==null)xt=h.getViewport(tt);else{let Ut=p.getViewSubImage(c,tt);xt=Ut.viewport,Ne===0&&(e.setRenderTargetTextures(_,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(_))}let Qe=H[Ne];Qe===void 0&&(Qe=new qa,Qe.layers.enable(Ne),Qe.viewport=new kt,H[Ne]=Qe),Qe.matrix.fromArray(tt.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(tt.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(xt.x,xt.y,xt.width,xt.height),Ne===0&&(Z.matrix.copy(Qe.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Oe===!0&&Z.cameras.push(Qe)}let me=i.enabledFeatures;if(me&&me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){p=n.getBinding();let Ne=p.getDepthInformation(be[0]);Ne&&Ne.isValid&&Ne.texture&&g.init(Ne,i.renderState)}if(me&&me.includes("camera-access")&&b){e.state.unbindTexture(),p=n.getBinding();for(let Ne=0;Ne<be.length;Ne++){let tt=be[Ne].camera;if(tt){let xt=d[tt];xt||(xt=new zu,d[tt]=xt);let Qe=p.getCameraImage(tt);xt.sourceTexture=Qe}}}}for(let be=0;be<A.length;be++){let Oe=w[be],me=A[be];Oe!==null&&me!==void 0&&me.update(Oe,ve,u||r)}ie&&ie(j,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),S=null}let He=new GL;He.setAnimationLoop(Te),this.setAnimationLoop=function(j){ie=j},this.dispose=function(){}}},ED=new Ft,jL=new We;jL.set(-1,0,0,0,1,0,0,0,1);ND=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Mi=null;cp=class{constructor(e={}){let{canvas:a=fL(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:c=!1,outputBufferType:h=nn}=e;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=r;let b=h,g=new Set([Ih,Th,wh]),d=new Set([nn,Yn,fl,Or,Ch,Ah]),m=new Uint32Array(4),y=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},A=null,w=null,x=[],L=[],P=null;this.domElement=a,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,U=!1,H=null,Z=null,N=null,X=null;this._outputColorSpace=vn;let Y=0,V=0,se=null,q=-1,ae=null,ie=new kt,Te=new kt,He=null,j=new lt(0),ve=0,be=a.width,Oe=a.height,me=1,qe=null,Wt=null,Ne=new kt(0,0,be,Oe),tt=new kt(0,0,be,Oe),xt=!1,Qe=new Gs,Ut=new ih,zt=!1,ia=!1,Je=new Ft,yt=new z,Kt=new kt,Ta={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function va(){return se===null?me:1}let O=n;function Za(C,D){return a.getContext(C,D)}let dt,Lt,ge,Xt,Le,Be,T,M,B,ne,ee,de,he,K,Q,oe,R,$,W,fe,ue,ce,Re;try{let C={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${"187"}`),a.addEventListener("webglcontextlost",De,!1),a.addEventListener("webglcontextrestored",Ze,!1),a.addEventListener("webglcontextcreationerror",Se,!1),O===null){let D="webgl2";if(O=Za(D,C),O===null)throw Za(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(C){throw a.removeEventListener("webglcontextlost",De,!1),a.removeEventListener("webglcontextrestored",Ze,!1),a.removeEventListener("webglcontextcreationerror",Se,!1),Ve("WebGLRenderer: "+C.message),C}function Pe(){dt=new WR(O),dt.init(),ue=new wD(O,dt),Lt=new PR(O,dt,e,ue),ge=new CD(O,dt),Lt.reversedDepthBuffer&&c&&ge.buffers.depth.setReversed(!0),Z=O.createFramebuffer(),N=O.createFramebuffer(),X=O.createFramebuffer(),Xt=new ZR(O),Le=new dD,Be=new AD(O,dt,ge,Le,Lt,ue,Xt),T=new qR(E),M=new JI(O),ce=new DR(O,M),B=new XR(O,M,Xt,ce),ne=new JR(O,B,M,ce,Xt),$=new KR(O,Lt,Be),Q=new UR(Le),ee=new cD(E,T,dt,Lt,ce,Q),de=new RD(E,Le),he=new hD,K=new SD(dt),R=new RR(E,T,ge,ne,S,l),oe=new LD(E,ne,Lt),Re=new DD(O,Xt,Lt,ge),W=new NR(O,dt,Xt),fe=new YR(O,dt,Xt),Xt.programs=ee.programs,E.capabilities=Lt,E.extensions=dt,E.properties=Le,E.renderLists=he,E.shadowMap=oe,E.state=ge,E.info=Xt}b!==nn&&(P=new jR(b,a.width,a.height,o,i,s));let le=new U0(E,O);this.xr=le,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let C=dt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=dt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(C){C!==void 0&&(me=C,this.setSize(be,Oe,!1))},this.getSize=function(C){return C.set(be,Oe)},this.setSize=function(C,D,G=!0){if(le.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}be=C,Oe=D,a.width=Math.floor(C*me),a.height=Math.floor(D*me),G===!0&&(a.style.width=C+"px",a.style.height=D+"px"),P!==null&&P.setSize(a.width,a.height),this.setViewport(0,0,C,D)},this.getDrawingBufferSize=function(C){return C.set(be*me,Oe*me).floor()},this.setDrawingBufferSize=function(C,D,G){be=C,Oe=D,me=G,a.width=Math.floor(C*G),a.height=Math.floor(D*G),this.setViewport(0,0,C,D)},this.setEffects=function(C){if(b===nn){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let D=0;D<C.length;D++)if(C[D].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(ie)},this.getViewport=function(C){return C.copy(Ne)},this.setViewport=function(C,D,G,F){C.isVector4?Ne.set(C.x,C.y,C.z,C.w):Ne.set(C,D,G,F),ge.viewport(ie.copy(Ne).multiplyScalar(va()).round())},this.getScissor=function(C){return C.copy(tt)},this.setScissor=function(C,D,G,F){C.isVector4?tt.set(C.x,C.y,C.z,C.w):tt.set(C,D,G,F),ge.scissor(Te.copy(tt).multiplyScalar(va()).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(C){ge.setScissorTest(xt=C)},this.setOpaqueSort=function(C){qe=C},this.setTransparentSort=function(C){Wt=C},this.getClearColor=function(C){return C.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(C=!0,D=!0,G=!0){let F=0;if(C){let k=!1;if(se!==null){let xe=se.texture.format;k=g.has(xe)}if(k){let xe=se.texture.type,Ce=d.has(xe),pe=R.getClearColor(),Me=R.getClearAlpha(),Ee=pe.r,Ye=pe.g,it=pe.b;Ce?(m[0]=Ee,m[1]=Ye,m[2]=it,m[3]=Me,O.clearBufferuiv(O.COLOR,0,m)):(y[0]=Ee,y[1]=Ye,y[2]=it,y[3]=Me,O.clearBufferiv(O.COLOR,0,y))}else F|=O.COLOR_BUFFER_BIT}D&&(F|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(F|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&O.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),H=C},this.dispose=function(){a.removeEventListener("webglcontextlost",De,!1),a.removeEventListener("webglcontextrestored",Ze,!1),a.removeEventListener("webglcontextcreationerror",Se,!1),R.dispose(),he.dispose(),K.dispose(),Be.dispose(),Le.dispose(),T.dispose(),ne.dispose(),B.dispose(),ce.dispose(),Re.dispose(),ee.dispose(),le.dispose(),le.removeEventListener("sessionstart",jt),le.removeEventListener("sessionend",Un),Qn.stop()};function De(C){C.preventDefault(),S0("WebGLRenderer: Context Lost."),U=!0}function Ze(){S0("WebGLRenderer: Context Restored."),U=!1;let C=Xt.autoReset,D=oe.enabled,G=oe.autoUpdate,F=oe.needsUpdate,k=oe.type;Pe(),Xt.autoReset=C,oe.enabled=D,oe.autoUpdate=G,oe.needsUpdate=F,oe.type=k}function Se(C){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function I(C){let D=C.target;D.removeEventListener("dispose",I),J(D)}function J(C){re(C),Le.remove(C)}function re(C){let D=Le.get(C).programs;D!==void 0&&(D.forEach(function(G){ee.releaseProgram(G)}),C.isShaderMaterial&&ee.releaseShaderCache(C))}this.renderBufferDirect=function(C,D,G,F,k,xe){D===null&&(D=Ta);let Ce=k.isMesh&&k.matrixWorld.determinantAffine()<0,pe=N1(C,D,G,F,k);ge.setMaterial(F,Ce);let Me=G.index,Ee=1;if(F.wireframe===!0){if(Me=B.getWireframeAttribute(G),Me===void 0)return;Ee=2}let Ye=G.drawRange,it=G.attributes.position,Ae=Ye.start*Ee,st=(Ye.start+Ye.count)*Ee;xe!==null&&(Ae=Math.max(Ae,xe.start*Ee),st=Math.min(st,(xe.start+xe.count)*Ee)),Me!==null?(Ae=Math.max(Ae,0),st=Math.min(st,Me.count)):it!=null&&(Ae=Math.max(Ae,0),st=Math.min(st,it.count));let $t=st-Ae;if($t<0||$t===1/0)return;ce.setup(k,F,pe,G,Me);let It,At=W;if(Me!==null&&(It=M.get(Me),At=fe,At.setIndex(It)),k.isMesh)F.wireframe===!0?(ge.setLineWidth(F.wireframeLinewidth*va()),At.setMode(O.LINES)):At.setMode(O.TRIANGLES);else if(k.isLine){let Ea=F.linewidth;Ea===void 0&&(Ea=1),ge.setLineWidth(Ea*va()),k.isLineSegments?At.setMode(O.LINES):k.isLineLoop?At.setMode(O.LINE_LOOP):At.setMode(O.LINE_STRIP)}else k.isPoints?At.setMode(O.POINTS):k.isSprite&&At.setMode(O.TRIANGLES);if(k.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))At.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ea=k._multiDrawStarts,we=k._multiDrawCounts,Fa=k._multiDrawCount,pt=Me?M.get(Me).bytesPerElement:1,er=Le.get(F).currentProgram.getUniforms();for(let Ra=0;Ra<Fa;Ra++)er.setValue(O,"_gl_DrawID",Ra),At.render(Ea[Ra]/pt,we[Ra])}else if(k.isInstancedMesh)At.renderInstances(Ae,$t,k.count);else if(G.isInstancedBufferGeometry){let Ea=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,we=Math.min(G.instanceCount,Ea);At.renderInstances(Ae,$t,we)}else At.render(Ae,$t)};function Ue(C,D,G,F){H!==null&&C.isNodeMaterial&&H.setObject(F,C),zt===!0&&Q.setState(C,G,!1),C.transparent===!0&&C.side===yi&&C.forceSinglePass===!1?(C.side=Ya,C.needsUpdate=!0,$s(C,D,F),C.side=Ys,C.needsUpdate=!0,$s(C,D,F),C.side=yi):$s(C,D,F)}this.compile=function(C,D,G=null){G===null&&(G=C),H!==null&&H.renderStart(C,D,G),w=K.get(G),w.init(D),L.push(w),G.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),C!==G&&C.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),w.setupLights(),H!==null&&H.updateLights(w.state.lightsArray),ia=this.localClippingEnabled,zt=Q.init(this.clippingPlanes,ia),zt===!0&&Q.setGlobalState(this.clippingPlanes,D),H!==null&&oe.render(w.state.shadowsArray,G,D);let F=new Set;return C.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let xe=k.material;if(xe)if(Array.isArray(xe))for(let Ce=0;Ce<xe.length;Ce++){let pe=xe[Ce];Ue(pe,G,D,k),F.add(pe)}else Ue(xe,G,D,k),F.add(xe)}),w=L.pop(),H!==null&&H.renderEnd(),F},this.compileAsync=function(C,D,G=null){let F=this.compile(C,D,G);return new Promise(k=>{function xe(){if(F.forEach(function(Ce){let Me=Le.get(Ce).currentProgram;(Me===void 0||Me.isReady())&&F.delete(Ce)}),F.size===0){k(C);return}setTimeout(xe,10)}dt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let _e=null;function ke(C){_e&&_e(C)}function jt(){Qn.stop()}function Un(){Qn.start()}let Qn=new GL;Qn.setAnimationLoop(ke),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(C){_e=C,le.setAnimationLoop(C),C===null?Qn.stop():Qn.start()},le.addEventListener("sessionstart",jt),le.addEventListener("sessionend",Un),this.render=function(C,D){if(D!==void 0&&D.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;H!==null&&H.renderStart(C,D);let G=le.enabled===!0&&le.isPresenting===!0,F=P!==null&&(se===null||G)&&P.begin(E,se);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(D),D=le.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,D,se),w=K.get(C,L.length),w.init(D),w.state.textureUnits=Be.getTextureUnits(),L.push(w),Je.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?Ut.setFromArrayCamera(D):Qe.setFromProjectionMatrix(Je,Nn,D.reversedDepth),ia=this.localClippingEnabled,zt=Q.init(this.clippingPlanes,ia),A=he.get(C,x.length),A.init(),x.push(A),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){let Ce=E.xr.getDepthSensingMesh();Ce!==null&&Gt(Ce,D,-1/0,E.sortObjects)}Gt(C,D,0,E.sortObjects),A.finish(),H!==null&&H.updateLights(w.state.lightsArray),E.sortObjects===!0&&A.sort(qe,Wt),Ht=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Ht&&R.addToRenderList(A,C),this.info.autoReset===!0&&this.info.reset(),zt===!0&&Q.beginShadows();let k=w.state.shadowsArray;if(oe.render(k,C,D),zt===!0&&Q.endShadows(),(F&&P.hasRenderPass())===!1){let Ce=A.opaque,pe=A.transmissive;if(w.setupLights(),D.isArrayCamera){let Me=D.cameras;if(pe.length>0)for(let Ee=0,Ye=Me.length;Ee<Ye;Ee++){let it=Me[Ee];Sa(Ce,pe,C,it)}Ht&&R.render(C);for(let Ee=0,Ye=Me.length;Ee<Ye;Ee++){let it=Me[Ee];yl(A,C,it,it.viewport)}}else pe.length>0&&Sa(Ce,pe,C,D),Ht&&R.render(C),yl(A,C,D)}se!==null&&V===0&&(Be.updateMultisampleRenderTarget(se),Be.updateRenderTargetMipmap(se)),F&&P.end(E),C.isScene===!0&&C.onAfterRender(E,C,D),ce.resetDefaultState(),q=-1,ae=null,L.pop(),L.length>0?(w=L[L.length-1],Be.setTextureUnits(w.state.textureUnits),zt===!0&&Q.setGlobalState(E.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,H!==null&&H.renderEnd()};function Gt(C,D,G,F){if(C.visible===!1)return;if(C.layers.test(D.layers)){if(C.isGroup)G=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(D);else if(C.isLight)w.pushLight(C),C.castShadow&&w.pushShadow(C);else if(C.isSprite){let Ce=D.isArrayCamera?Ut:Qe;if(!C.frustumCulled||C.intersectsFrustum(Ce)){F&&Kt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Je);let pe=ne.update(C),Me=C.material;Me.visible&&A.push(C,pe,Me,G,Kt.z,null,D)}}else if(C.isMesh||C.isLine||C.isPoints){let Ce=D.isArrayCamera?Ut:Qe;if(!C.frustumCulled||C.intersectsFrustum(Ce)){let pe=ne.update(C),Me=C.material;if(F&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Kt.copy(C.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Kt.copy(pe.boundingSphere.center)),Kt.applyMatrix4(C.matrixWorld).applyMatrix4(Je)),Array.isArray(Me)){let Ee=pe.groups;for(let Ye=0,it=Ee.length;Ye<it;Ye++){let Ae=Ee[Ye],st=Me[Ae.materialIndex];st&&st.visible&&A.push(C,pe,st,G,Kt.z,Ae,D)}}else Me.visible&&A.push(C,pe,Me,G,Kt.z,null,D)}}}let xe=C.children;for(let Ce=0,pe=xe.length;Ce<pe;Ce++)Gt(xe[Ce],D,G,F)}function yl(C,D,G,F){let{opaque:k,transmissive:xe,transparent:Ce}=C;w.setupLightsView(G),zt===!0&&Q.setGlobalState(E.clippingPlanes,G),F&&ge.viewport(ie.copy(F)),k.length>0&&Ia(k,D,G),xe.length>0&&Ia(xe,D,G),Ce.length>0&&Ia(Ce,D,G),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Sa(C,D,G,F){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[F.id]===void 0){let Ae=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[F.id]=new Sn(1,1,{generateMipmaps:!0,type:Ae?Kn:nn,minFilter:Qi,samples:Math.max(4,Lt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let xe=w.state.transmissionRenderTarget[F.id],Ce=F.viewport||ie;xe.setSize(Ce.z*E.transmissionResolutionScale,Ce.w*E.transmissionResolutionScale);let pe=E.getRenderTarget(),Me=E.getActiveCubeFace(),Ee=E.getActiveMipmapLevel();E.setRenderTarget(xe),E.getClearColor(j),ve=E.getClearAlpha(),ve<1&&E.setClearColor(16777215,.5),E.clear(),Ht&&R.render(G);let Ye=E.toneMapping;E.toneMapping=_i;let it=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),w.setupLightsView(F),zt===!0&&Q.setGlobalState(E.clippingPlanes,F),Ia(C,G,F),Be.updateMultisampleRenderTarget(xe),Be.updateRenderTargetMipmap(xe),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let st=0,$t=D.length;st<$t;st++){let It=D[st],{object:At,geometry:Ea,material:we,group:Fa}=It;if(we.side===yi&&At.layers.test(F.layers)){let pt=we.side;we.side=Ya,we.needsUpdate=!0,Jt(At,G,F,Ea,we,Fa),we.side=pt,we.needsUpdate=!0,Ae=!0}}Ae===!0&&(Be.updateMultisampleRenderTarget(xe),Be.updateRenderTargetMipmap(xe))}E.setRenderTarget(pe,Me,Ee),E.setClearColor(j,ve),it!==void 0&&(F.viewport=it),E.toneMapping=Ye}function Ia(C,D,G){let F=D.isScene===!0?D.overrideMaterial:null;for(let k=0,xe=C.length;k<xe;k++){let Ce=C[k],{object:pe,geometry:Me,group:Ee}=Ce,Ye=Ce.material;Ye.allowOverride===!0&&F!==null&&(Ye=F),pe.layers.test(G.layers)&&Jt(pe,D,G,Me,Ye,Ee)}}function Jt(C,D,G,F,k,xe){H!==null&&k.isNodeMaterial&&H.setObject(C,k),C.onBeforeRender(E,D,G,F,k,xe),C.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),k.onBeforeRender(E,D,G,F,C,xe),k.transparent===!0&&k.side===yi&&k.forceSinglePass===!1?(k.side=Ya,k.needsUpdate=!0,E.renderBufferDirect(G,D,F,k,C,xe),k.side=Ys,k.needsUpdate=!0,E.renderBufferDirect(G,D,F,k,C,xe),k.side=yi):E.renderBufferDirect(G,D,F,k,C,xe),C.onAfterRender(E,D,G,F,k,xe)}function _n(C){let D=0;for(let G of C)G.texture!==null&&D++;return D}function $s(C,D,G){D.isScene!==!0&&(D=Ta);let F=Le.get(C),k=w.state.lights,xe=w.state.shadowsArray,Ce=k.state.version,pe=ee.getParameters(C,k.state,xe,D,G,w.state.lightProbeGridArray),Me=ee.getProgramCacheKey(pe),Ee=F.programs;F.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?D.environment:null,F.fog=D.fog;let Ye=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;F.envMap=T.get(C.envMap||F.environment,Ye),F.envMapRotation=F.environment!==null&&C.envMap===null?D.environmentRotation:C.envMapRotation,Ee===void 0&&(C.addEventListener("dispose",I),Ee=new Map,F.programs=Ee,F.programVariants=new Map);let it=Ee.get(Me);if(it!==void 0){if(F.currentProgram===it&&F.lightsStateVersion===Ce)return k0(C,pe),it}else pe.uniforms=ee.getUniforms(C),H!==null&&C.isNodeMaterial&&H.build(C,G,pe),C.onBeforeCompile(pe,E),it=ee.acquireProgram(pe,Me),Ee.set(Me,it),F.uniforms=pe.uniforms;let Ae=F.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ae.clippingPlanes=Q.uniform),k0(C,pe),F.needsLights=U1(C),F.lightsStateVersion=Ce,F.needsLights&&(Ae.ambientLightColor.value=k.state.ambient,Ae.lightProbe.value=k.state.probe,Ae.sunLights.value=k.state.sun,Ae.sunLightShadows.value=k.state.sunShadow,Ae.directionalLights.value=k.state.directional,Ae.directionalLightShadows.value=k.state.directionalShadow,Ae.spotLights.value=k.state.spot,Ae.spotLightShadows.value=k.state.spotShadow,Ae.rectAreaLights.value=k.state.rectArea,Ae.ltc_1.value=k.state.rectAreaLTC1,Ae.ltc_2.value=k.state.rectAreaLTC2,Ae.pointLights.value=k.state.point,Ae.pointLightShadows.value=k.state.pointShadow,Ae.hemisphereLights.value=k.state.hemi,Ae.sunShadowMatrix.value=k.state.sunShadowMatrix,Ae.sunShadowCascade.value=k.state.sunShadowCascade,Ae.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ae.spotLightMatrix.value=k.state.spotLightMatrix,Ae.spotLightMap.value=k.state.spotLightMap,Ae.pointShadowMatrix.value=k.state.pointShadowMatrix),F.numLightProbeGrids=_n(w.state.lightProbeGridArray),F.currentProgram=it,F.uniformsList=null,it}function es(C,D,G,F,k){let xe=Le.get(C),Ce=xe.currentProgram.id+","+F+","+k,pe=xe.programVariants.get(Ce);return pe===void 0?(pe=$s(C,D,G),xe.programVariants.set(Ce,pe)):(xe.currentProgram=pe,xe.uniformsList=null,xe.outputColorSpace=F,xe.toneMapping=k),pe}function _l(C){if(C.uniformsList===null){let D=C.currentProgram.getUniforms();C.uniformsList=hl.seqWithValue(D.seq,C.uniforms)}return C.uniformsList}function k0(C,D){let G=Le.get(C);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function N1(C,D,G,F,k){D.isScene!==!0&&(D=Ta),Be.resetTextureUnits();let xe=D.fog,Ce=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?D.environment:null,pe=se===null?E.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ot.workingColorSpace,Me=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Ee=T.get(F.envMap||Ce,Me),Ye=F.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,it=!!G.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Ae=!!G.morphAttributes.position,st=!!G.morphAttributes.normal,$t=!!G.morphAttributes.color,It=_i;F.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(It=E.toneMapping);let At=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ea=At!==void 0?At.length:0,we=Le.get(F),Fa=w.state.lights;if(zt===!0&&(ia===!0||C!==ae)){let Vt=C===ae&&F.id===q;Q.setState(F,C,Vt)}let pt=!1,er=!1;F.version===we.__version?we.needsLights&&we.lightsStateVersion!==Fa.state.version||k.isBatchedMesh&&we.batching===!1||!k.isBatchedMesh&&we.batching===!0||k.isBatchedMesh&&we.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&we.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&we.instancing===!1||!k.isInstancedMesh&&we.instancing===!0||k.isSkinnedMesh&&we.skinning===!1||!k.isSkinnedMesh&&we.skinning===!0||k.isInstancedMesh&&we.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&we.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&we.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&we.instancingMorph===!1&&k.morphTexture!==null||we.envMap!==Ee||F.fog===!0&&we.fog!==xe||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Q.numPlanes||we.numIntersection!==Q.numIntersection)||we.vertexAlphas!==Ye||we.vertexTangents!==it||we.morphTargets!==Ae||we.morphNormals!==st||we.morphColors!==$t||we.morphTargetsCount!==Ea||we.numLightProbeGrids!==_n(w.state.lightProbeGridArray)?pt=!0:(we.outputColorSpace!==pe||we.toneMapping!==It)&&(er=!0):(pt=!0,we.__version=F.version);let Ra=we.currentProgram;(pt===!0||er===!0)&&(Ra=er===!0?es(F,D,k,pe,It):$s(F,D,k),H&&F.isNodeMaterial&&H.onUpdateProgram(F,Ra,we));let Rc=!1,ts=!1,tr=!1,ct=Ra.getUniforms(),ya=we.uniforms;if(ge.useProgram(Ra.program)&&(Rc=!0,ts=!0,tr=!0),F.id!==q&&(q=F.id,ts=!0),Rc||ae!==C){ge.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ct.setValue(O,"projectionMatrix",C.projectionMatrix),ct.setValue(O,"viewMatrix",C.matrixWorldInverse);let ca=ct.map.cameraPosition;ca!==void 0&&ca.setValue(O,yt.setFromMatrixPosition(C.matrixWorld)),Lt.logarithmicDepthBuffer&&ct.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ct.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),ae!==C&&(ae=C,ts=!0,tr=!0)}if(we.needsLights&&(Fa.state.sunShadowMap.length>0&&ct.setValue(O,"sunShadowMap",Fa.state.sunShadowMap,Be),Fa.state.directionalShadowMap.length>0&&ct.setValue(O,"directionalShadowMap",Fa.state.directionalShadowMap,Be),Fa.state.spotShadowMap.length>0&&ct.setValue(O,"spotShadowMap",Fa.state.spotShadowMap,Be),Fa.state.pointShadowMap.length>0&&ct.setValue(O,"pointShadowMap",Fa.state.pointShadowMap,Be)),k.isSkinnedMesh){ct.setOptional(O,k,"bindMatrix"),ct.setOptional(O,k,"bindMatrixInverse");let Vt=k.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),ct.setValue(O,"boneTexture",Vt.boneTexture,Be))}k.isBatchedMesh&&(ct.setOptional(O,k,"batchingTexture"),ct.setValue(O,"batchingTexture",k._matricesTexture,Be),ct.setOptional(O,k,"batchingIdTexture"),ct.setValue(O,"batchingIdTexture",k._indirectTexture,Be),ct.setOptional(O,k,"batchingColorTexture"),k._colorsTexture!==null&&ct.setValue(O,"batchingColorTexture",k._colorsTexture,Be));let On=G.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&$.update(k,G,Ra),(ts||we.receiveShadow!==k.receiveShadow)&&(we.receiveShadow=k.receiveShadow,ct.setValue(O,"receiveShadow",k.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&D.environment!==null&&(ya.envMapIntensity.value=D.environmentIntensity),ya.dfgLUT!==void 0&&(ya.dfgLUT.value=PD()),ts){if(ct.setValue(O,"toneMappingExposure",E.toneMappingExposure),we.needsLights&&P1(ya,tr),xe&&F.fog===!0&&de.refreshFogUniforms(ya,xe),de.refreshMaterialUniforms(ya,F,me,Oe,w.state.transmissionRenderTarget[C.id]),we.needsLights&&we.numLightProbeGrids>0){let Vt=_,ca=0;for(let Li of w.state.lightProbeGridArray)Li.texture!==null&&(Vt.textures[ca]=Li.texture,Vt.min[ca]=Li.boundingBox.min,Vt.max[ca]=Li.boundingBox.max,Vt.resolution[ca]=Li.resolution,ca++);for(let Li in Vt)Vt[Li].length=ca;ya.probesSH.value=Vt.textures,ya.probesMin.value=Vt.min,ya.probesMax.value=Vt.max,ya.probesResolution.value=Vt.resolution}hl.upload(O,_l(we),ya,Be)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(hl.upload(O,_l(we),ya,Be),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ct.setValue(O,"center",k.center),ct.setValue(O,"modelViewMatrix",k.modelViewMatrix),ct.setValue(O,"normalMatrix",k.normalMatrix),ct.setValue(O,"modelMatrix",k.matrixWorld),F.uniformsGroups!==void 0){let Vt=F.uniformsGroups;for(let ca=0,Li=Vt.length;ca<Li;ca++){let H0=Vt[ca];Re.update(H0,Ra),Re.bind(H0,Ra)}}return Ra}function P1(C,D){C.ambientLightColor.needsUpdate=D,C.lightProbe.needsUpdate=D,C.sunLights.needsUpdate=D,C.sunLightShadows.needsUpdate=D,C.directionalLights.needsUpdate=D,C.directionalLightShadows.needsUpdate=D,C.pointLights.needsUpdate=D,C.pointLightShadows.needsUpdate=D,C.spotLights.needsUpdate=D,C.spotLightShadows.needsUpdate=D,C.rectAreaLights.needsUpdate=D,C.hemisphereLights.needsUpdate=D}function U1(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(C,D,G){let F=Le.get(C);F.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),Le.get(C.texture).__webglTexture=D,Le.get(C.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:G,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,D){let G=Le.get(C);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(C,D=0,G=0){se=C,Y=D,V=G;let F=null,k=!1,xe=!1;if(C){let pe=Le.get(C);if(pe.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(O.FRAMEBUFFER,pe.__webglFramebuffer),ie.copy(C.viewport),Te.copy(C.scissor),He=C.scissorTest,ge.viewport(ie),ge.scissor(Te),ge.setScissorTest(He),q=-1;return}else if(pe.__webglFramebuffer===void 0)Be.setupRenderTarget(C);else if(pe.__hasExternalTextures)Be.rebindTextures(C,Le.get(C.texture).__webglTexture,Le.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Ye=C.depthTexture;if(pe.__boundDepthTexture!==Ye){if(Ye!==null&&Le.has(Ye)&&(C.width!==Ye.image.width||C.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(C)}}let Me=C.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(xe=!0);let Ee=Le.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ee[D])?F=Ee[D][G]:F=Ee[D],k=!0):C.samples>0&&Be.useMultisampledRTT(C)===!1?F=Le.get(C).__webglMultisampledFramebuffer:Array.isArray(Ee)?F=Ee[G]:F=Ee,ie.copy(C.viewport),Te.copy(C.scissor),He=C.scissorTest}else ie.copy(Ne).multiplyScalar(me).floor(),Te.copy(tt).multiplyScalar(me).floor(),He=xt;if(G!==0&&(F=Z),ge.bindFramebuffer(O.FRAMEBUFFER,F)&&ge.drawBuffers(C,F),ge.viewport(ie),ge.scissor(Te),ge.setScissorTest(He),k){let pe=Le.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,pe.__webglTexture,G)}else if(xe){let pe=D;for(let Me=0;Me<C.textures.length;Me++){let Ee=Le.get(C.textures[Me]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Me,Ee.__webglTexture,G,pe)}}else if(C!==null&&G!==0){let pe=Le.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,pe.__webglTexture,G)}q=-1};function z0(C){let D=Le.get(C);return(D.__readFormat!==C.format||D.__readType!==C.type)&&(D.__readFormat=C.format,D.__readType=C.type,D.__formatReadable=Lt.textureFormatReadable(C.format),D.__typeReadable=Lt.textureTypeReadable(C.type)),D}this.readRenderTargetPixels=function(C,D,G,F,k,xe,Ce,pe=0){if(!(C&&C.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ce!==void 0&&(Me=Me[Ce],Array.isArray(Me)&&(Me=Me[0])),Me){ge.bindFramebuffer(O.FRAMEBUFFER,Me);try{let Ee=C.textures[pe],Ye=Ee.format,it=Ee.type;C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+pe);let Ae=z0(Ee);if(Ae.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=C.width-F&&G>=0&&G<=C.height-k&&O.readPixels(D,G,F,k,ue.convert(Ye),ue.convert(it),xe)}finally{let Ee=se!==null?Le.get(se).__webglFramebuffer:null;ge.bindFramebuffer(O.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(C,D,G,F,k,xe,Ce,pe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ce!==void 0&&(Me=Me[Ce],Array.isArray(Me)&&(Me=Me[0])),Me)if(D>=0&&D<=C.width-F&&G>=0&&G<=C.height-k){ge.bindFramebuffer(O.FRAMEBUFFER,Me);let Ee=C.textures[pe],Ye=Ee.format,it=Ee.type;C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+pe);let Ae=z0(Ee);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let st=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,st),O.bufferData(O.PIXEL_PACK_BUFFER,xe.byteLength,O.STREAM_READ),O.readPixels(D,G,F,k,ue.convert(Ye),ue.convert(it),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let $t=se!==null?Le.get(se).__webglFramebuffer:null;ge.bindFramebuffer(O.FRAMEBUFFER,$t);let It=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await pL(O,It,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,st),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,xe),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(st),O.deleteSync(It),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,D=null,G=0){let F=Math.pow(2,-G),k=Math.floor(C.image.width*F),xe=Math.floor(C.image.height*F),Ce=D!==null?D.x:0,pe=D!==null?D.y:0;Be.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,G,0,0,Ce,pe,k,xe),ge.unbindTexture()},this.copyTextureToTexture=function(C,D,G=null,F=null,k=0,xe=0){let Ce,pe,Me,Ee,Ye,it,Ae,st,$t,It=C.isCompressedTexture?C.mipmaps[xe]:C.image;if(G!==null)Ce=G.max.x-G.min.x,pe=G.max.y-G.min.y,Me=G.isBox3?G.max.z-G.min.z:1,Ee=G.min.x,Ye=G.min.y,it=G.isBox3?G.min.z:0;else{let ct=Math.pow(2,-k);Ce=Math.floor(It.width*ct),pe=Math.floor(It.height*ct),C.isDataArrayTexture?Me=It.depth:C.isData3DTexture?Me=Math.floor(It.depth*ct):Me=1,Ee=0,Ye=0,it=0}F!==null?(Ae=F.x,st=F.y,$t=F.z):(Ae=0,st=0,$t=0);let At=ue.convert(D.format),Ea=ue.convert(D.type),we;D.isData3DTexture?(Be.setTexture3D(D,0),we=O.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Be.setTexture2DArray(D,0),we=O.TEXTURE_2D_ARRAY):(Be.setTexture2D(D,0),we=O.TEXTURE_2D),ge.activeTexture(O.TEXTURE0),ge.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,D.flipY),ge.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),ge.pixelStorei(O.UNPACK_ALIGNMENT,D.unpackAlignment);let Fa=ge.getParameter(O.UNPACK_ROW_LENGTH),pt=ge.getParameter(O.UNPACK_IMAGE_HEIGHT),er=ge.getParameter(O.UNPACK_SKIP_PIXELS),Ra=ge.getParameter(O.UNPACK_SKIP_ROWS),Rc=ge.getParameter(O.UNPACK_SKIP_IMAGES);ge.pixelStorei(O.UNPACK_ROW_LENGTH,It.width),ge.pixelStorei(O.UNPACK_IMAGE_HEIGHT,It.height),ge.pixelStorei(O.UNPACK_SKIP_PIXELS,Ee),ge.pixelStorei(O.UNPACK_SKIP_ROWS,Ye),ge.pixelStorei(O.UNPACK_SKIP_IMAGES,it);let ts=C.isDataArrayTexture||C.isData3DTexture,tr=D.isDataArrayTexture||D.isData3DTexture;if(C.isDepthTexture){let ct=Le.get(C),ya=Le.get(D),On=Le.get(ct.__renderTarget),Vt=Le.get(ya.__renderTarget);ge.bindFramebuffer(O.READ_FRAMEBUFFER,On.__webglFramebuffer),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let ca=0;ca<Me;ca++)ts&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Le.get(C).__webglTexture,k,it+ca),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Le.get(D).__webglTexture,xe,$t+ca)),O.blitFramebuffer(Ee,Ye,Ee+Ce,Ye+pe,Ae,st,Ae+Ce,st+pe,O.DEPTH_BUFFER_BIT,O.NEAREST);ge.bindFramebuffer(O.READ_FRAMEBUFFER,null),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(k!==0||C.isRenderTargetTexture||Le.has(C)){let ct=Le.get(C),ya=Le.get(D);ge.bindFramebuffer(O.READ_FRAMEBUFFER,N),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,X);for(let On=0;On<Me;On++)ts?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ct.__webglTexture,k,it+On):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ct.__webglTexture,k),tr?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ya.__webglTexture,xe,$t+On):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ya.__webglTexture,xe),k!==0?O.blitFramebuffer(Ee,Ye,Ee+Ce,Ye+pe,Ae,st,Ae+Ce,st+pe,O.COLOR_BUFFER_BIT,O.NEAREST):tr?O.copyTexSubImage3D(we,xe,Ae,st,$t+On,Ee,Ye,Ce,pe):O.copyTexSubImage2D(we,xe,Ae,st,Ee,Ye,Ce,pe);ge.bindFramebuffer(O.READ_FRAMEBUFFER,null),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else tr?C.isDataTexture||C.isData3DTexture?O.texSubImage3D(we,xe,Ae,st,$t,Ce,pe,Me,At,Ea,It.data):D.isCompressedArrayTexture?O.compressedTexSubImage3D(we,xe,Ae,st,$t,Ce,pe,Me,At,It.data):O.texSubImage3D(we,xe,Ae,st,$t,Ce,pe,Me,At,Ea,It):C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,xe,Ae,st,Ce,pe,At,Ea,It.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,xe,Ae,st,It.width,It.height,At,It.data):O.texSubImage2D(O.TEXTURE_2D,xe,Ae,st,Ce,pe,At,Ea,It);ge.pixelStorei(O.UNPACK_ROW_LENGTH,Fa),ge.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pt),ge.pixelStorei(O.UNPACK_SKIP_PIXELS,er),ge.pixelStorei(O.UNPACK_SKIP_ROWS,Ra),ge.pixelStorei(O.UNPACK_SKIP_IMAGES,Rc),xe===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&O.generateMipmap(we),ge.unbindTexture()},this.initRenderTarget=function(C){Le.get(C).__webglFramebuffer===void 0&&Be.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Be.setTextureCube(C,0):C.isData3DTexture?Be.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Be.setTexture2DArray(C,0):Be.setTexture2D(C,0),ge.unbindTexture()},this.resetState=function(){Y=0,V=0,se=null,ge.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let a=this.getContext();a.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),a.unpackColorSpace=ot._getUnpackColorSpace()}}});var eC,tC=Ge(()=>{eC=t=>(t.match(/\d+[xX]\d+|[A-Z]?[a-z]+|[A-Z]|\d+/g)??[]).join("-").toLowerCase()});function aC(t,e,a=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:eC(t),size:24,node:e,...a.length>0?{aliases:a}:{}}}var nC=Ge(()=>{tC();});var iC,sC=Ge(()=>{iC=t=>{let e="",a=!1;for(let n of t){if(n==="-"||n==="_"||n<=" "){a=e.length>0;continue}e.length===0?e+=n.toLowerCase():e+=a?n.toUpperCase():n,a=!1}return e}});var rC,oC=Ge(()=>{sC();rC=t=>{let e=iC(t);return e.charAt(0).toUpperCase()+e.slice(1)}});var uc,O0=Ge(()=>{uc=(...t)=>{let e=new Set;for(let a of t)if(typeof a=="string")for(let n of a.split(/\s+/))n&&e.add(n);return[...e].join(" ")}});var Ks,lC=Ge(()=>{Ks={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"}});function B0(t){return t!=null}function uC(t,e={}){let a=e.attributeNames??{},n=c=>a[c]??c,i=t.size??t.width??Ks.width,s=t.size??t.height??Ks.height,r=t.aliases?.filter(c=>typeof c=="string"&&c.trim()!=="").map(c=>`lucide-${c}`)??[],o=[...t.name?[`lucide-${t.name}`]:[],...r],l=e.className?.split(" ").filter(Boolean)??[],u=e.includeDefaultClasses===!1?uc(...l):uc("lucide",...o,...l),f=e.absoluteStrokeWidth?Number(e.strokeWidth??Ks["stroke-width"])*Number(t.size??t.width??Ks.width)/Number(e.size??e.width??Ks.width):e.strokeWidth??Ks["stroke-width"];return["svg",{...Object.entries(Ks).reduce((c,[h,S])=>(c[n(h)]=S,c),{}),..."color"in e&&e.color&&{[n("stroke")]:e.color},..."size"in e&&B0(e.size)&&{[n("width")]:e.size,[n("height")]:e.size},..."width"in e&&B0(e.width)&&{[n("width")]:e.width},..."height"in e&&B0(e.height)&&{[n("height")]:e.height},[n("stroke-width")]:f,...u&&{[n("class")]:u},[n("viewBox")]:`0 0 ${i} ${s}`,...e.hasA11yProp===!1?{[n("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(c=>{let[h,S,b]=c,g=e.nonScalingStroke?{[n("vector-effect")]:"non-scaling-stroke",...S}:S;return b?[h,g,b]:[h,g]})]}var cC=Ge(()=>{lC();O0();});function dC(t,e={}){return uC(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}var fC=Ge(()=>{cC();});var hC,pC=Ge(()=>{hC=t=>{if(t==null||typeof t!="object")return!1;for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&(e.startsWith("aria-")||e==="role"||e==="title")&&t[e]!=null)return!0;return!1}});var ml,OD,mC,gC=Ge(()=>{"use strict";"use client";ml=Gr(as(),1);OD=(0,ml.createContext)({}),mC=()=>(0,ml.useContext)(OD)});var cc,xC,vC=Ge(()=>{"use strict";"use client";cc=Gr(as(),1);O0();fC();pC();gC();xC=(0,cc.forwardRef)(({color:t,size:e,width:a,height:n,strokeWidth:i,absoluteStrokeWidth:s,nonScalingStroke:r,className:o="",children:l,iconNode:u=[],icon:f={node:u,aliases:[],size:24},...p},c)=>{let{size:h=24,strokeWidth:S=2,absoluteStrokeWidth:b=!1,nonScalingStroke:g=!1,color:d="currentColor",className:m=""}=mC()??{},y=!!l||hC(p),[_,A,w=[]]=dC(f,{color:t??d,width:a??e??h,height:n??e??h,strokeWidth:i??S,absoluteStrokeWidth:s??b,nonScalingStroke:r??g,className:uc(m,o),hasA11yProp:y,attributes:p});return(0,cc.createElement)(_,{ref:c,...A},[...w.map(([x,L])=>(0,cc.createElement)(x,L)),...Array.isArray(l)?l:[l]])})});function Ie(t,e=[],a=[]){let n=typeof t=="string"?aC(t,e,a):t,i=(0,hp.forwardRef)(({className:s,...r},o)=>(0,hp.createElement)(xC,{ref:o,icon:n,className:s,...r}));return n.name&&(i.displayName=rC(n.name)),i}var hp,ht=Ge(()=>{hp=Gr(as(),1);nC();oC();vC();});var SC,dc,yC=Ge(()=>{ht();SC={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]};SC.node;dc=Ie(SC)});var _C,fc,MC=Ge(()=>{ht();_C={name:"bell",size:24,node:[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]};_C.node;fc=Ie(_C)});var bC,Fr,LC=Ge(()=>{ht();bC={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};bC.node;Fr=Ie(bC)});var CC,gl,AC=Ge(()=>{ht();CC={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};CC.node;gl=Ie(CC)});var wC,Js,TC=Ge(()=>{ht();wC={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]};wC.node;Js=Ie(wC)});var IC,xl,EC=Ge(()=>{ht();IC={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};IC.node;xl=Ie(IC)});var RC,hc,DC=Ge(()=>{ht();RC={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};RC.node;hc=Ie(RC)});var NC,pc,PC=Ge(()=>{ht();NC={name:"coins",size:24,node:[["path",{d:"M13.744 17.736a6 6 0 1 1-7.48-7.48",key:"bq4yh3"}],["path",{d:"M15 6h1v4",key:"11y1tn"}],["path",{d:"m6.134 14.768.866-.5 2 3.464",key:"17snzx"}],["circle",{cx:"16",cy:"8",r:"6",key:"14bfc9"}]]};NC.node;pc=Ie(NC)});var UC,kr,OC=Ge(()=>{ht();UC={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};UC.node;kr=Ie(UC)});var BC,mc,FC=Ge(()=>{ht();BC={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};BC.node;mc=Ie(BC)});var kC,zr,zC=Ge(()=>{ht();kC={name:"dumbbell",size:24,node:[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]]};kC.node;zr=Ie(kC)});var HC,gc,GC=Ge(()=>{ht();HC={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};HC.node;gc=Ie(HC)});var VC,xc,qC=Ge(()=>{ht();VC={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};VC.node;xc=Ie(VC)});var WC,vc,XC=Ge(()=>{ht();WC={name:"folder-plus",size:24,node:[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]};WC.node;vc=Ie(WC)});var YC,Sc,ZC=Ge(()=>{ht();YC={name:"gift",size:24,node:[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"1sqzm4"}],["path",{d:"M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5",key:"kc0143"}],["rect",{x:"3",y:"7",width:"18",height:"4",rx:"1",key:"1hberx"}]]};YC.node;Sc=Ie(YC)});var KC,yc,JC=Ge(()=>{ht();KC={name:"graduation-cap",size:24,node:[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]};KC.node;yc=Ie(KC)});var QC,_c,jC=Ge(()=>{ht();QC={name:"heart",size:24,node:[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]};QC.node;_c=Ie(QC)});var $C,Mc,e1=Ge(()=>{ht();$C={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]};$C.node;Mc=Ie($C)});var t1,bc,a1=Ge(()=>{ht();t1={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]};t1.node;bc=Ie(t1)});var n1,vl,i1=Ge(()=>{ht();n1={name:"mic",size:24,node:[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]]};n1.node;vl=Ie(n1)});var s1,Lc,r1=Ge(()=>{ht();s1={name:"minimize-2",size:24,node:[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]};s1.node;Lc=Ie(s1)});var o1,Cc,l1=Ge(()=>{ht();o1={name:"piggy-bank",size:24,node:[["path",{d:"M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z",key:"1piglc"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M2 8v1a2 2 0 0 0 2 2h1",key:"1env43"}]]};o1.node;Cc=Ie(o1)});var u1,Ac,c1=Ge(()=>{ht();u1={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};u1.node;Ac=Ie(u1)});var d1,wc,f1=Ge(()=>{ht();d1={name:"scale",size:24,node:[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]]};d1.node;wc=Ie(d1)});var h1,Tc,p1=Ge(()=>{ht();h1={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};h1.node;Tc=Ie(h1)});var m1,Qs,g1=Ge(()=>{ht();m1={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};m1.node;Qs=Ie(m1)});var x1,js,v1=Ge(()=>{ht();x1={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};x1.node;js=Ie(x1)});var S1,Ic,y1=Ge(()=>{ht();S1={name:"trophy",size:24,node:[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",key:"pwuv1l"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",key:"1y54w1"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",key:"e30mpu"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",key:"i0yafy"}]]};S1.node;Ic=Ie(S1)});var _1,Ec,M1=Ge(()=>{ht();_1={name:"upload",size:24,node:[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]};_1.node;Ec=Ie(_1)});var b1,Sl,L1=Ge(()=>{ht();b1={name:"wallet",size:24,node:[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]};b1.node;Sl=Ie(b1)});var C1,Hr,A1=Ge(()=>{ht();C1={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};C1.node;Hr=Ie(C1)});var w1=Ge(()=>{"use strict";g1();v1();yC();MC();LC();AC();TC();EC();DC();PC();OC();FC();zC();GC();qC();XC();ZC();JC();jC();e1();a1();i1();r1();l1();c1();f1();p1();y1();M1();L1();A1();});function I1(t){let e=Array.isArray(t)&&t.length?t:["\u6682\u65E0\u6B63\u6587\u5185\u5BB9"],a=typeof window<"u"?window.innerWidth:390,n=typeof window<"u"?window.innerHeight:844,i=Math.max(240,Math.min(720,a-48)),s=Math.max(260,n-175),r=Math.max(12,Math.floor(i/16)),o=Math.max(6,Math.floor(s/31)),l=[],u=[],f=0,p=(c,h)=>{let S=c.trim();if(!S)return;let b=Math.max(1,Math.ceil((S.length+(h?2:0))/r))+.45;f+b>o&&u.length>0&&(l.push(u),u=[],f=0),u.push(S),f+=b};return e.forEach(c=>{let h=String(c).trim();if(!h)return;/^(第[零一二三四五六七八九十百千\d]+[章节回篇部分]|Chapter\s*\d+|Section\s*\d+|序言|前言|后记)/i.test(h)&&u.length>0&&(l.push(u),u=[],f=0);let b=h,g=!0;for(;b.length>0;){let d=Math.max(2,Math.floor(o-f-.5)),m=Math.max(r*2,d*r-(g?2:0));if(b.length<=m){p(b,g);break}else{let y=m,_=b.slice(Math.floor(m*.75),m).search(/[。！？；，、”」\n]/);_!==-1&&(y=Math.floor(m*.75)+_+1),p(b.slice(0,y),g),b=b.slice(y),g=!1,f>=o-1.5&&(l.push(u),u=[],f=0)}}}),u.length>0&&l.push(u),l.length?l:[["\u6682\u65E0\u6B63\u6587\u5185\u5BB9"]]}function BD(t){let e=[];return t.forEach((a,n)=>{let i=a[0]||"";/^(第[零一二三四五六七八九十百千\d]+[章节回篇部分]|Chapter\s*\d+|Section\s*\d+|序言|前言|后记)/i.test(i)?e.push({title:i.slice(0,32),page:n}):(n===0||n%4===0)&&e.push({title:`\u7B2C ${n+1} \u9875 \xB7 ${i.slice(0,18)}...`,page:n})}),e.length?e:[{title:"\u7B2C 1 \u9875 \xB7 \u6B63\u6587\u5F00\u59CB",page:0}]}function FD(){let t=(0,v.useRef)(null),[e,a]=(0,v.useState)("crystal"),n=(0,v.useRef)(null),i=(0,v.useRef)(null);return(0,v.useEffect)(()=>{let s=t.current;if(!s)return;let r=new Uu;i.current=r;let o=new qa(45,s.clientWidth/s.clientHeight,.1,100);o.position.z=4.2;let l=new cp({antialias:!0,alpha:!0});l.setSize(s.clientWidth,s.clientHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.innerHTML="",s.appendChild(l.domElement),r.add(new Ku(16777215,.85));let u=new Zu(3718648,1.3);u.position.set(5,5,5),r.add(u),(y=>{n.current&&r.remove(n.current);let _,A;y==="crystal"?(_=new Hu(1.25,0),A=new Dr({color:1096065,roughness:.2,metalness:.35,flatShading:!0})):y==="ammonite"?(_=new Vu(.85,.28,100,16),A=new Dr({color:16096779,roughness:.3,metalness:.45})):(_=new Vs(1.75,.85,1.75,3,2,3),A=new Dr({color:8490232,wireframe:!0}));let w=new Pn(_,A);n.current=w,r.add(w)})(e);let p=!1,c={x:0,y:0},h=y=>{p=!0;let _=y.touches?y.touches[0].clientX:y.clientX,A=y.touches?y.touches[0].clientY:y.clientY;c={x:_,y:A}},S=y=>{if(!p||!n.current)return;let _=y.touches?y.touches[0].clientX:y.clientX,A=y.touches?y.touches[0].clientY:y.clientY;n.current.rotation.y+=(_-c.x)*.012,n.current.rotation.x+=(A-c.y)*.012,c={x:_,y:A}},b=()=>{p=!1};s.addEventListener("mousedown",h),s.addEventListener("touchstart",h,{passive:!0}),window.addEventListener("mousemove",S),window.addEventListener("touchmove",S,{passive:!0}),window.addEventListener("mouseup",b),window.addEventListener("touchend",b);let g,d=()=>{g=requestAnimationFrame(d),n.current&&!p&&(n.current.rotation.y+=.008,n.current.rotation.x+=.003),l.render(r,o)};d();let m=()=>{s&&(o.aspect=s.clientWidth/s.clientHeight,o.updateProjectionMatrix(),l.setSize(s.clientWidth,s.clientHeight))};return window.addEventListener("resize",m),()=>{cancelAnimationFrame(g),window.removeEventListener("mousemove",S),window.removeEventListener("touchmove",S),window.removeEventListener("mouseup",b),window.removeEventListener("touchend",b),window.removeEventListener("resize",m),l.dispose()}},[e]),v.default.createElement("div",{className:"bg-slate-900 text-white rounded-3xl p-5 flex flex-col justify-between shadow-md"},v.default.createElement("div",null,v.default.createElement("div",{className:"flex items-center justify-between mb-2"},v.default.createElement("span",{className:"text-xs font-bold text-teal-400 bg-teal-950 px-2.5 py-1 rounded-xl border border-teal-800"},"React + Three.js 3D \u5B9E\u9A8C\u5BA4"),v.default.createElement("span",{className:"text-[11px] text-slate-400"},"\u652F\u6301\u9F20\u6807/\u89E6\u63A7\u65CB\u8F6C")),v.default.createElement("div",{ref:t,className:"w-full h-60 rounded-2xl bg-slate-950 overflow-hidden relative cursor-grab border border-slate-800 mt-2"})),v.default.createElement("div",{className:"mt-4 grid grid-cols-3 gap-2"},[{id:"crystal",label:"\u77FF\u7269\u6676\u4F53"},{id:"ammonite",label:"\u83CA\u77F3\u87BA\u65CB"},{id:"terrain",label:"\u7A7A\u95F4\u88C5\u7F6E"}].map(s=>v.default.createElement("button",{key:s.id,onClick:()=>a(s.id),className:`py-2 rounded-xl text-xs font-semibold transition ${e===s.id?"bg-teal-600 text-white":"bg-white/10 hover:bg-white/20 text-slate-200"}`},s.label))))}function F0(){let[t,e]=(0,v.useState)(()=>{try{let I=localStorage.getItem(T1);return I?{...pp,...JSON.parse(I)}:pp}catch{return pp}}),[a,n]=(0,v.useState)("dashboard"),[i,s]=(0,v.useState)([]),[r,o]=(0,v.useState)(new Date),[l,u]=(0,v.useState)({temp:14,desc:"\u591A\u4E91\u8F6C\u6674",icon:"\u{1F324}\uFE0F",loc:"\u6B66\u6C49\xB7\u6B66\u79D1\u5927\u9EC4\u5BB6\u6E56\u6821\u533A"}),[f,p]=(0,v.useState)(""),[c,h]=(0,v.useState)(""),[S,b]=(0,v.useState)("\u9EC4\u5BB6\u6E56\u4E8C\u98DF\u5802\uFF1A\u6742\u7CAE\u996D + \u53BB\u76AE\u5364\u9E21\u817F + \u6E05\u7092\u897F\u5170\u82B1"),[g,d]=(0,v.useState)(580),[m,y]=(0,v.useState)(26),[_,A]=(0,v.useState)(150),[w,x]=(0,v.useState)("\u5348\u9910 (12:30)"),[L,P]=(0,v.useState)(""),[E,U]=(0,v.useState)("week13"),[H,Z]=(0,v.useState)("all"),[N,X]=(0,v.useState)(""),[Y,V]=(0,v.useState)(null),[se,q]=(0,v.useState)(0),[ae,ie]=(0,v.useState)("paper"),[Te,He]=(0,v.useState)(16),[j,ve]=(0,v.useState)(""),[be,Oe]=(0,v.useState)(0),[me,qe]=(0,v.useState)("page"),[Wt,Ne]=(0,v.useState)(!1),[tt,xt]=(0,v.useState)(!0),[Qe,Ut]=(0,v.useState)(!1),zt=(0,v.useRef)(null),ia=(0,v.useRef)(null),[Je,yt]=(0,v.useState)(null),[Kt,Ta]=(0,v.useState)(""),[Ht,va]=(0,v.useState)({title:"",amount:"15.0",category:"\u5065\u5EB7\u9910\u996E"}),[O,Za]=(0,v.useState)(String(t.wallet.budget)),[dt,Lt]=(0,v.useState)({title:"",cost:"120",icon:"\u{1F381}"}),[ge,Xt]=(0,v.useState)(""),[Le,Be]=(0,v.useState)({title:"",author:"",category:"\u5730\u5927\u4E13\u4E1A",content:""}),[T,M]=(0,v.useState)({title:"",due:"\u672C\u5468\u4E94 22:00"});(0,v.useEffect)(()=>{try{localStorage.setItem(T1,JSON.stringify(t))}catch{}},[t]),(0,v.useEffect)(()=>{let I=setInterval(()=>o(new Date),1e3);return()=>clearInterval(I)},[]),(0,v.useEffect)(()=>{fetch("https://api.open-meteo.com/v1/forecast?latitude=30.4408&longitude=114.2654&current_weather=true").then(I=>I.json()).then(I=>{if(I?.current_weather){let J=Math.round(I.current_weather.temperature),re=I.current_weather.weathercode;u({temp:J,desc:re<=3?"\u591A\u4E91\u6674\u6717":re<=67?"\u5C0F\u96E8\u5FAE\u51C9":"\u964D\u6E29\u6CE8\u610F\u4FDD\u6696",icon:re<=1?"\u2600\uFE0F":re<=3?"\u{1F324}\uFE0F":"\u{1F327}\uFE0F",loc:"\u6B66\u6C49\xB7\u6B66\u79D1\u5927\u9EC4\u5BB6\u6E56\u6821\u533A"})}}).catch(()=>{})},[]),(0,v.useEffect)(()=>{if(!Y)return;let I=setInterval(()=>q(J=>J+1),1e3);return()=>clearInterval(I)},[Y]);let B=(I,J="success")=>{let re=Date.now()+Math.random();s(Ue=>[...Ue,{id:re,msg:I,type:J}]),setTimeout(()=>s(Ue=>Ue.filter(_e=>_e.id!==re)),3e3)},ne=(I,J,re,Ue=0)=>{e(_e=>{let ke=_e.pet.exp+J,jt=_e.pet.level,Un=_e.pet.maxExp;return ke>=Un&&(jt+=1,ke-=Un,Un=Math.round(Un*1.2)),{..._e,coins:_e.coins+I,pet:{..._e.pet,level:jt,exp:ke,maxExp:Un,food:_e.pet.food+Ue}}}),re&&B(re,"success")},ee=(I,J)=>{let re=I.target.files?.[0];if(!re)return;let Ue=new FileReader;Ue.onload=_e=>{if(J==="pre"){p(_e.target.result);let ke=Math.floor(540+Math.random()*160);d(ke),A(Math.round(ke*(m/100))),B(`\u9910\u524D\u8BC6\u522B\u5B8C\u6210\uFF1A\u7EA6 ${ke} kcal`,"info")}else{h(_e.target.result);let ke=Math.floor(18+Math.random()*22);y(ke),A(Math.round(g*(ke/100))),B(`\u9910\u540E\u5BF9\u6BD4\u5B8C\u6210\uFF1A\u5269\u4F59 ${ke}%\uFF0C\u5DF2\u6263\u9664\u6B8B\u4F59\u70ED\u91CF\uFF01`,"success")}},Ue.readAsDataURL(re)},de=()=>{let I=Math.max(0,Number(g)-Number(_)),J=`${String(r.getHours()).padStart(2,"0")}:${String(r.getMinutes()).padStart(2,"0")}`;e(re=>({...re,calories:{...re.calories,meals:[{id:Date.now(),type:w,desc:S,preCal:Number(g),leftoverCal:Number(_),netCal:I,time:J},...re.calories.meals]}})),ne(20,20,`\u51C0\u6444\u5165 ${I} kcal \u5DF2\u5165\u8D26\uFF0C\u83B7\u5F97 +20 \u81EA\u5F8B\u91D1\u5E01\uFF01`)},he=I=>{U(I);let J={week13:[{day:"\u5468\u4E00 (11.23)",classes:["14:00-17:40 \u591A\u5A92\u4F53\u8BBE\u8BA12 (\u6559\u4E00\u4E8C\u533A603)","\u6BD5\u4E1A\u8BBE\u8BA1(\u8BBA\u6587) (\u6559\u4E00\u4E8C\u533A507\xB7\u81EA\u4E3B)"],workout:"18:10 \u4E0B\u8BFE\u987A\u8DEF\uFF1A\u7F8E\u80CC\u76F4\u89D2\u80A9 + \u722C\u576125m",isWorkout:!0,done:!1},{day:"\u5468\u4E8C (11.24)",classes:["\u5168\u5929\u65E0\u5750\u73ED\u8BFE \xB7 \u6BD5\u4E1A\u8BBE\u8BA1\u81EA\u4E3B\u63A8\u8FDB"],workout:"\u79D1\u7814\u6587\u732E + \u96C5\u601D\u7CBE\u542C\u8BAD\u7EC3",isWorkout:!1,done:!1},{day:"\u5468\u4E09 (11.25)",classes:["14:00-17:40 \u591A\u5A92\u4F53\u8BBE\u8BA12 (\u6559\u4E00\u4E8C\u533A603)","\u6BD5\u4E1A\u8BBE\u8BA1(\u8BBA\u6587) (\u6559\u4E00\u4E8C\u533A507\xB7\u81EA\u4E3B)"],workout:"18:10 \u4E0B\u8BFE\u987A\u8DEF\uFF1A\u871C\u6843\u81C0\u817F\u5851\u5F62 + \u692D\u5706\u673A",isWorkout:!0,done:!1},{day:"\u5468\u56DB (11.26)",classes:["\u5168\u5929\u65E0\u5750\u73ED\u8BFE \xB7 \u6BD5\u4E1A\u8BBE\u8BA1\u81EA\u4E3B\u63A8\u8FDB"],workout:"\u65E5\u8BED\u8DDF\u8BFB + 3D\u5EFA\u6A21\u5DE5\u4F5C\u53F0",isWorkout:!1,done:!1},{day:"\u5468\u4E94 (11.27)",classes:["14:00-17:40 \u591A\u5A92\u4F53\u8BBE\u8BA12 (\u6559\u4E00\u4E8C\u533A603)","\u6BD5\u4E1A\u8BBE\u8BA1(\u8BBA\u6587) (\u6559\u4E00\u4E8C\u533A507\xB7\u81EA\u4E3B)"],workout:"18:10 \u4E0B\u8BFE\u987A\u8DEF\uFF1A\u6838\u5FC3\u9A6C\u7532\u7EBF + \u62C9\u4F38\u653E\u677E",isWorkout:!0,done:!1},{day:"\u5468\u516D (11.28)",classes:[],workout:"\u5468\u672B\u6237\u5916\u6563\u6B65 / \u6B3A\u9A97\u9910\u5FAE\u8C03",isWorkout:!1,done:!1},{day:"\u5468\u65E5 (11.29)",classes:["20:30-22:10 \u6B4C\u58F0\u4E2D\u7684\u515A\u53F2Z (\u667A\u6167\u6811)"],workout:"\u5468\u4F53\u91CD\u590D\u76D8 + \u7761\u524D\u6C89\u6D78\u9605\u8BFB",isWorkout:!1,done:!1}],week14_15:[{day:"\u5468\u4E00",classes:["14:00-17:40 \u591A\u5A92\u4F53\u8BBE\u8BA12 (\u6559\u4E00\u4E8C\u533A603)"],workout:"18:10 \u7F8E\u80CC\u76F4\u89D2\u80A9 + \u722C\u576125m",isWorkout:!0,done:!1},{day:"\u5468\u4E8C",classes:["14:00-17:40 \u5B66\u79D1\u7EFC\u5408\u8BBE\u8BA1(\u4E8C) (\u6559\u4E00\u4E8C\u533A603)"],workout:"\u79D1\u7814\u6587\u732E + \u96C5\u601D\u7CBE\u542C\u8BAD\u7EC3",isWorkout:!1,done:!1},{day:"\u5468\u4E09",classes:["08:20-12:00 \u5B66\u79D1\u7EFC\u5408\u8BBE\u8BA1(\u4E8C)","14:00-17:40 \u591A\u5A92\u4F53\u8BBE\u8BA12"],workout:"18:10 \u871C\u6843\u81C0\u817F\u5851\u5F62 + \u692D\u5706\u673A",isWorkout:!0,done:!1},{day:"\u5468\u56DB",classes:["14:00-17:40 \u5B66\u79D1\u7EFC\u5408\u8BBE\u8BA1(\u4E8C) (\u6559\u4E00\u4E8C\u533A603)"],workout:"\u65E5\u8BED\u8DDF\u8BFB + 3D\u5EFA\u6A21\u5DE5\u4F5C\u53F0",isWorkout:!1,done:!1},{day:"\u5468\u4E94",classes:["14:00-17:40 \u591A\u5A92\u4F53\u8BBE\u8BA12 (\u6559\u4E00\u4E8C\u533A603)"],workout:"18:10 \u6838\u5FC3\u9A6C\u7532\u7EBF + \u62C9\u4F38\u653E\u677E",isWorkout:!0,done:!1},{day:"\u5468\u516D",classes:[],workout:"\u5468\u672B\u6237\u5916\u6563\u6B65 / \u6B3A\u9A97\u9910\u5FAE\u8C03",isWorkout:!1,done:!1},{day:"\u5468\u65E5",classes:["20:30-22:10 \u6B4C\u58F0\u4E2D\u7684\u515A\u53F2Z (\u667A\u6167\u6811)"],workout:"\u5468\u4F53\u91CD\u590D\u76D8 + \u7761\u524D\u6C89\u6D78\u9605\u8BFB",isWorkout:!1,done:!1}],week16_19:[{day:"\u5468\u4E00",classes:["08:20-12:00 \u516C\u5171\u7A7A\u95F4\u8425\u9020 (\u88F4\u78CA\xB7\u6559\u4E00\u4E8C\u533A603)"],workout:"16:30 \u7F8E\u80CC\u76F4\u89D2\u80A9 + \u722C\u576125m",isWorkout:!0,done:!1},{day:"\u5468\u4E8C",classes:["14:00-17:40 \u5B66\u79D1\u7EFC\u5408\u8BBE\u8BA1(\u4E8C) (16\u5468)"],workout:"\u79D1\u7814\u6587\u732E + \u96C5\u601D\u7CBE\u542C\u8BAD\u7EC3",isWorkout:!1,done:!1},{day:"\u5468\u4E09",classes:["08:20-12:00 \u516C\u5171\u7A7A\u95F4\u8425\u9020 (\u88F4\u78CA\xB7\u6559\u4E00\u4E8C\u533A603)"],workout:"16:30 \u871C\u6843\u81C0\u817F\u5851\u5F62 + \u692D\u5706\u673A",isWorkout:!0,done:!1},{day:"\u5468\u56DB",classes:["14:00-17:40 \u5B66\u79D1\u7EFC\u5408\u8BBE\u8BA1(\u4E8C) (16\u5468)"],workout:"\u65E5\u8BED\u8DDF\u8BFB + 3D\u5EFA\u6A21\u5DE5\u4F5C\u53F0",isWorkout:!1,done:!1},{day:"\u5468\u4E94",classes:["08:20-12:00 \u516C\u5171\u7A7A\u95F4\u8425\u9020 (\u88F4\u78CA\xB7\u6559\u4E00\u4E8C\u533A603)"],workout:"16:30 \u6838\u5FC3\u9A6C\u7532\u7EBF + \u62C9\u4F38\u653E\u677E",isWorkout:!0,done:!1},{day:"\u5468\u516D",classes:[],workout:"\u5468\u672B\u6237\u5916\u6563\u6B65 / \u6B3A\u9A97\u9910\u5FAE\u8C03",isWorkout:!1,done:!1},{day:"\u5468\u65E5",classes:[],workout:"\u5468\u4F53\u91CD\u590D\u76D8 + \u7761\u524D\u6C89\u6D78\u9605\u8BFB",isWorkout:!1,done:!1}]};J[I]&&(e(re=>({...re,weekPlan:J[I]})),B("\u5DF2\u540C\u6B65\u5207\u6362\u6559\u5B66\u5468\u8BFE\u8868\uFF0808:20-12:00 / 14:00-17:40 \u8FDE\u5802\u5236\uFF09","info"))},K=()=>{let I=Kt.trim();if(!I)return;let J=I.split(/[，,。；;！!？?\n]+/).map(_e=>_e.trim()).filter(Boolean),re=["\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D","\u5468\u65E5"],Ue=[];e(_e=>{let ke=[..._e.schedules],jt=_e.weekPlan.map(Gt=>({...Gt})),Un=[..._e.ddls],Qn=[..._e.wallet.expenses];return J.forEach(Gt=>{if(/取消|删掉|删除|不去|不看/.test(Gt)){let Sa=Gt.replace(/.*?(取消|删掉|删除|不去|不看)(了|掉)?/,"").trim(),Ia=ke.length;if(ke=ke.filter(Jt=>!(Sa&&Jt.title.includes(Sa)||/阅读|看书/.test(Gt)&&Jt.tag.includes("\u9605\u8BFB")||/健身|练背|练腿|核心/.test(Gt)&&Jt.tag.includes("\u51CF\u8102")||/雅思/.test(Gt)&&Jt.title.includes("\u96C5\u601D"))),ke.length<Ia){Ue.push(`\u5DF2\u53D6\u6D88\u300C${Sa||"\u76F8\u5173\u8BA1\u5212"}\u300D`);return}}if(/健身|练背|臀腿|马甲线/.test(Gt)&&/调到|改到|移到|换到|顺延/.test(Gt)){let Sa=re.filter(Ia=>Gt.includes(Ia));if(Sa.length>=2){let Ia=re.indexOf(Sa[0]),Jt=re.indexOf(Sa[1]),_n=jt[Ia].workout;jt[Ia].workout="\u8BED\u97F3\u5DF2\u8C03\u51FA \xB7 \u81EA\u4E3B\u5B66\u4E60/\u4F11\u606F",jt[Ia].isWorkout=!1,jt[Jt].workout=`\u3010\u8BED\u97F3\u8C03\u5165\u3011${_n.replace(/^18:10 下课顺路：/,"")}`,jt[Jt].isWorkout=!0,Ue.push(`\u5DF2\u5C06${Sa[0]}\u5065\u8EAB\u8C03\u81F3${Sa[1]}`);return}}if(/改到|调到|推迟到|挪到|换到/.test(Gt)){let Sa=["\u96C5\u601D","\u65E5\u8BED","\u6587\u732E","\u6BD5\u8BBE","\u591A\u5A92\u4F53","\u9605\u8BFB","\u770B\u4E66","\u5065\u8EAB"],Ia=ke.find(Jt=>Sa.some(_n=>Gt.includes(_n)&&(Jt.title.includes(_n)||Jt.tag.includes(_n))));if(Ia){let Jt=Gt.match(/(早上|上午|中午|下午|晚上|今晚|明晚)?\s*([零一二两三四五六七八九十\d]{1,2})\s*(?:点|:|：)\s*(半|\d{1,2})?/),_n="\u5DF2\u8C03\u6574\u65F6\u6BB5";if(Jt){let $s={\u96F6:0,\u4E00:1,\u4E8C:2,\u4E24:2,\u4E09:3,\u56DB:4,\u4E94:5,\u516D:6,\u4E03:7,\u516B:8,\u4E5D:9,\u5341:10,\u5341\u4E00:11,\u5341\u4E8C:12},es=parseInt(Jt[2],10);isNaN(es)&&(es=$s[Jt[2]]||20),/下午|晚上|今晚|明晚/.test(Jt[1]||"")&&es<12&&(es+=12);let _l=Jt[3]==="\u534A"?"30":Jt[3]?String(Jt[3]).padStart(2,"0"):"00";_n=`${String(es).padStart(2,"0")}:${_l} - ${String((es+1)%24).padStart(2,"0")}:${_l}`}Ia.time=_n,Ue.push(`\u5DF2\u8C03\u6574\u300C${Ia.title.slice(0,10)}...\u300D\u81F3 ${_n}`);return}}let yl=Gt.match(/(\d+(?:\.\d+)?)\s*(?:元|块)/);if(yl){let Sa=parseFloat(yl[1]);Qn.unshift({id:Date.now()+Math.random(),title:`\u8BED\u97F3\u8BB0\u8D26\uFF1A${Gt.slice(0,15)}`,amount:Sa,category:"\u5065\u5EB7\u9910\u996E",date:"\u521A\u521A"}),Ue.push(`\u5DF2\u8BB0\u8D26 \xA5${Sa}`);return}if(/提醒|DDL|交作业|初稿/.test(Gt)){Un.unshift({id:Date.now()+Math.random(),title:Gt,due:"\u8BED\u97F3\u63D0\u9192",urgent:!0}),Ue.push("\u5DF2\u65B0\u589E\u63D0\u9192");return}ke.push({id:Date.now()+Math.random(),time:/睡前|今晚|晚上/.test(Gt)?"23:30 - 00:15":"19:30 - 20:30",title:`\u8BED\u97F3\u6392\u671F\uFF1A${Gt}`,tag:"\u8BED\u97F3\u65B0\u589E",color:"indigo",done:!1}),Ue.push("\u5DF2\u52A0\u5165\u65E5\u7A0B")}),{..._e,schedules:ke,weekPlan:jt,ddls:Un,wallet:{..._e.wallet,expenses:Qn}}}),Ta(""),yt(null),ne(15,15,`\u8BED\u97F3\u8C03\u8BA1\u5212\u5B8C\u6210\uFF1A${Ue.join("\uFF1B")}`)},Q=I=>{V(I.id),Oe(I.currentPage||0),Ne(!1),Ut(!1),q(0)},oe=(I,J,re)=>{let Ue=Math.max(0,Math.min(re-1,J)),_e=re<=1?100:Math.round((Ue+1)/re*100);Oe(Ue),zt.current&&(zt.current.scrollTop=0),e(ke=>({...ke,books:ke.books.map(jt=>jt.id===I?{...jt,currentPage:Ue,progress:Math.max(jt.progress||0,_e)}:jt)}))},R=()=>{if(Y&&se>=5){let I=Math.max(1,Math.round(se/60)),J=new Date().getHours(),re=J>=6&&J<14?"morning":J>=14&&J<22?"evening":"night",Ue=new Date().toISOString().slice(0,10);e(_e=>({..._e,books:_e.books.map(ke=>ke.id===Y?{...ke,readMins:ke.readMins+I}:ke),readingStats:{totalSeconds:_e.readingStats.totalSeconds+se,streakDays:_e.readingStats.lastReadDate===Ue?_e.readingStats.streakDays:_e.readingStats.streakDays+1,lastReadDate:Ue,periods:{..._e.readingStats.periods,[re]:(_e.readingStats.periods[re]||0)+se}}})),ne(15,15,`\u672C\u6B21\u771F\u5B9E\u9605\u8BFB ${se} \u79D2\uFF0C\u8FDB\u5EA6\u4E0E\u65F6\u957F\u5DF2\u81EA\u52A8\u4FDD\u5B58\uFF01`)}V(null),Ne(!1),Ut(!1),q(0)},$=async I=>{let J=I.target.files?.[0];if(!J)return;Le.title||Be(ke=>({...ke,title:J.name.replace(/\.(txt|md|epub|pdf)$/i,"")}));let re=await J.arrayBuffer(),Ue="";try{Ue=new TextDecoder("utf-8",{fatal:!0}).decode(re)}catch{Ue=new TextDecoder("gb18030").decode(re)}let _e=Ue.replace(/<[^>]+>/g,`
`).replace(/\r\n/g,`
`);Be(ke=>({...ke,content:_e})),B(`\u5DF2\u5B8C\u6574\u5BFC\u5165\u300A${J.name}\u300B\uFF08\u5171 ${_e.length} \u5B57\uFF09\uFF0C\u652F\u6301\u81EA\u52A8\u5206\u7AE0\u4E0E\u7FFB\u9875\u9605\u8BFB\uFF01`,"success")};(0,v.useEffect)(()=>{if(!Y)return;let I=t.books.find(Ue=>Ue.id===Y);if(!I)return;let J=I1(I.content),re=Ue=>{if(!(Ue.target.tagName==="INPUT"||Ue.target.tagName==="TEXTAREA")){if(Ue.key==="Escape"&&tt){xt(!1),Ut(!1);return}me==="page"&&(Ue.key==="ArrowRight"||Ue.key==="PageDown"?oe(Y,be+1,J.length):(Ue.key==="ArrowLeft"||Ue.key==="PageUp")&&oe(Y,be-1,J.length))}};return window.addEventListener("keydown",re),()=>window.removeEventListener("keydown",re)},[Y,me,be,t.books,tt]);let W=t.calories.meals.reduce((I,J)=>I+J.netCal,0),fe=t.calories.meals.reduce((I,J)=>I+J.leftoverCal,0),ue=t.weights[t.weights.length-1]?.val||61,ce=t.wallet.expenses.reduce((I,J)=>I+J.amount,0),Re=Math.max(0,t.wallet.budget-ce),Pe=t.books.find(I=>I.id===Y),le=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],De=`${String(r.getHours()).padStart(2,"0")}:${String(r.getMinutes()).padStart(2,"0")}`,Ze=`${String(r.getSeconds()).padStart(2,"0")}s`;return v.default.createElement("div",{className:"min-h-screen bg-slate-50 text-slate-800 pb-24 lg:pb-10 font-sans"},v.default.createElement("div",{className:"fixed top-4 right-4 left-4 sm:left-auto z-50 flex flex-col gap-2 pointer-events-none"},i.map(I=>v.default.createElement("div",{key:I.id,className:`px-4 py-3 rounded-2xl shadow-lg text-xs font-bold flex items-center gap-2 ${I.type==="warning"?"bg-amber-500 text-slate-950":I.type==="info"?"bg-slate-900 text-white":"bg-emerald-600 text-white"}`},v.default.createElement(Qs,{className:"w-4 h-4 shrink-0"}),v.default.createElement("span",null,I.msg)))),v.default.createElement("header",{className:"sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80"},v.default.createElement("div",{className:"max-w-7xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2"},v.default.createElement("div",{className:"flex items-center gap-2.5 min-w-0"},v.default.createElement("div",{className:"w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center shadow-sm shrink-0"},v.default.createElement(kr,{className:"w-5 h-5"})),v.default.createElement("div",{className:"min-w-0"},v.default.createElement("div",{className:"flex items-center gap-1.5"},v.default.createElement("h1",{className:"font-bold text-slate-900 text-sm sm:text-base tracking-tight truncate"},"GapYear OS \xB7 \u80E1\u79CB\u610F"),v.default.createElement("button",{onClick:()=>yt("backup"),className:"text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1 shrink-0"},v.default.createElement("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"}),v.default.createElement("span",null,"React+3D\u72EC\u7ACB\u5B58\u6863"))),v.default.createElement("p",{className:"text-[11px] text-slate-500 truncate"},"\u6B66\u79D1\u5927 $\\rightarrow$ \u5730\u5927\u9EC4\u7231\u6B66\u7EC4 \xB7 168cm/61kg \xB7 09:00\u8D77-01:30\u7761"))),v.default.createElement("nav",{className:"hidden lg:flex items-center gap-1 bg-slate-100/90 p-1 rounded-2xl"},[{id:"dashboard",label:"\u4ECA\u65E5\u603B\u89C8",icon:kr},{id:"diet",label:"\u9910\u524D\u9910\u540E",icon:Js},{id:"fitness",label:"\u8BFE\u8868\u4E0E\u5065\u8EAB",icon:zr},{id:"wallet",label:"\u6D88\u8D39\u4E0E\u5956\u52B1",icon:Sl},{id:"bookshelf",label:"\u79C1\u4EBA\u4E66\u67B6",icon:Fr},{id:"academic",label:"\u79D1\u7814\u4E0E3D",icon:gl}].map(I=>{let J=I.icon,re=a===I.id;return v.default.createElement("button",{key:I.id,onClick:()=>n(I.id),className:`px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5 transition ${re?"bg-white text-slate-900 font-semibold shadow-sm":"text-slate-600 hover:text-slate-900 font-medium"}`},v.default.createElement(J,{className:"w-3.5 h-3.5"}),v.default.createElement("span",null,I.label))})),v.default.createElement("div",{className:"flex items-center gap-2 shrink-0"},v.default.createElement("button",{onClick:()=>n("wallet"),className:"flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold"},v.default.createElement(pc,{className:"w-3.5 h-3.5 text-amber-500"}),v.default.createElement("span",null,t.coins)),v.default.createElement("button",{onClick:()=>yt("voice"),className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold shadow-sm"},v.default.createElement(vl,{className:"w-3.5 h-3.5"}),v.default.createElement("span",{className:"hidden sm:inline"},"\u8BED\u97F3\u6392\u671F"))))),v.default.createElement("main",{className:"max-w-7xl mx-auto px-3 sm:px-6 pt-4 sm:pt-6"},a==="dashboard"&&v.default.createElement("div",{className:"space-y-5"},v.default.createElement("div",{className:"bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white rounded-3xl p-4 sm:p-5 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4"},v.default.createElement("div",{className:"flex items-center gap-3.5"},v.default.createElement("div",{className:"w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex flex-col items-center justify-center shrink-0"},v.default.createElement("span",{className:"text-lg font-extrabold tracking-tight text-amber-300"},De),v.default.createElement("span",{className:"text-[10px] text-slate-300 font-mono"},Ze)),v.default.createElement("div",null,v.default.createElement("div",{className:"flex flex-wrap items-center gap-2"},v.default.createElement("span",{className:"text-sm sm:text-base font-bold"},"2026\u5E7411\u670823\u65E5 \u661F\u671F\u4E00"),v.default.createElement("span",{className:"text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950"},"\u7B2C13\u5468 \xB7 \u9996\u65E5")),v.default.createElement("p",{className:"text-xs text-slate-300 mt-1"},"\u4ECA\u65E5 14:00-17:40\u300A\u591A\u5A92\u4F53\u8BBE\u8BA12\u300B\uFF08\u6559\u4E00\u4E8C\u533A603\uFF09\uFF0C18:10 \u4E0B\u8BFE\u987A\u8DEF\u7EC3\u80CC\u80A9\uFF01"))),v.default.createElement("div",{className:"bg-white/10 border border-white/15 rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 shrink-0"},v.default.createElement("span",{className:"text-2xl"},l.icon),v.default.createElement("div",null,v.default.createElement("div",{className:"flex items-center gap-1.5"},v.default.createElement("span",{className:"text-sm font-extrabold"},l.temp,"\xB0C"),v.default.createElement("span",{className:"text-xs text-slate-200"},l.desc)),v.default.createElement("div",{className:"text-[10px] text-slate-300 flex items-center gap-1 mt-0.5"},v.default.createElement(Mc,{className:"w-3 h-3 text-rose-400"}),v.default.createElement("span",null,l.loc))))),v.default.createElement("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"},v.default.createElement("div",{className:"bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/70 shadow-sm"},v.default.createElement("div",{className:"flex items-center justify-between mb-2"},v.default.createElement("span",{className:"text-[11px] font-semibold text-slate-500"},"\u51CF\u8102\u51C0\u70ED\u91CF (168cm)"),v.default.createElement(xc,{className:"w-4 h-4 text-amber-500"})),v.default.createElement("div",{className:"flex items-baseline gap-1"},v.default.createElement("span",{className:"text-2xl font-bold text-slate-900"},W),v.default.createElement("span",{className:"text-[11px] text-slate-400"},"/ ",t.calories.target," kcal")),v.default.createElement("div",{className:"w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden"},v.default.createElement("div",{className:"bg-amber-500 h-full rounded-full",style:{width:`${Math.min(100,W/t.calories.target*100)}%`}})),v.default.createElement("p",{className:"text-[11px] text-emerald-600 mt-1.5 font-medium"},"\u5269\u996D\u5DF2\u6263 ",fe," kcal")),v.default.createElement("div",{className:"bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/70 shadow-sm"},v.default.createElement("div",{className:"flex items-center justify-between mb-2"},v.default.createElement("span",{className:"text-[11px] font-semibold text-slate-500"},"\u4F53\u91CD\u7BA1\u7406 (BMI 21.6)"),v.default.createElement(wc,{className:"w-4 h-4 text-emerald-600"})),v.default.createElement("div",{className:"flex items-baseline gap-1"},v.default.createElement("span",{className:"text-2xl font-bold text-slate-900"},ue.toFixed(1)),v.default.createElement("span",{className:"text-[11px] text-slate-400"},"kg $\\rightarrow$ 56.0kg")),v.default.createElement("div",{className:"mt-2 flex items-center gap-1.5"},v.default.createElement("input",{type:"number",step:"0.1",value:L,onChange:I=>P(I.target.value),placeholder:"60.8",className:"w-16 text-xs px-2 py-1 rounded-xl border border-slate-200"}),v.default.createElement("button",{onClick:()=>{let I=parseFloat(L);!I||I<35||I>120||(e(J=>({...J,weights:[...J.weights.slice(-7),{date:"\u4ECA\u65E5",val:I}]})),P(""),ne(15,15,`\u4F53\u91CD ${I}kg \u5DF2\u4FDD\u5B58\uFF01`))},className:"text-[11px] px-2.5 py-1 rounded-xl bg-emerald-600 text-white font-semibold"},"\u8BB0\u5F55"))),v.default.createElement("div",{className:"bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/70 shadow-sm"},v.default.createElement("div",{className:"flex items-center justify-between mb-2"},v.default.createElement("span",{className:"text-[11px] font-semibold text-slate-500"},"\u672C\u5468 1/3/5 \u5065\u8EAB\u6392\u671F"),v.default.createElement(zr,{className:"w-4 h-4 text-rose-600"})),v.default.createElement("div",{className:"text-sm sm:text-base font-bold text-slate-900"},"18:10 \u4E0B\u8BFE\u987A\u8DEF\u7EC3"),v.default.createElement("p",{className:"text-[11px] text-slate-500 mt-1"},"\u907F\u5F00 14:00-17:40 \u4E0B\u5348\u8FDE\u5802\u8BFE"),v.default.createElement("button",{onClick:()=>n("fitness"),className:"mt-2 text-[11px] font-semibold text-rose-600 hover:underline"},"\u67E5\u770B\u5468\u8BFE\u8868\u4E0E\u8DDF\u7EC3 $\\rightarrow$")),v.default.createElement("div",{className:"bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/70 shadow-sm"},v.default.createElement("div",{className:"flex items-center justify-between mb-2"},v.default.createElement("span",{className:"text-[11px] font-semibold text-slate-500"},"\u672C\u6708\u7701\u94B1\u8BA1\u5212\u7ED3\u4F59"),v.default.createElement(Cc,{className:"w-4 h-4 text-purple-600"})),v.default.createElement("div",{className:"flex items-baseline gap-1"},v.default.createElement("span",{className:"text-2xl font-bold text-slate-900"},"\xA5",Math.round(ce)),v.default.createElement("span",{className:"text-[11px] text-slate-400"},"/ \u9884\u7B97 \xA5",t.wallet.budget)),v.default.createElement("button",{onClick:()=>n("wallet"),className:"mt-2 text-[11px] font-semibold text-purple-600 hover:underline"},"\u8BB0\u4E00\u7B14 / \u5151\u6362\u5956\u52B1 $\\rightarrow$"))),v.default.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-5"},v.default.createElement("div",{className:"lg:col-span-2 bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/70 shadow-sm"},v.default.createElement("div",{className:"flex items-center justify-between mb-4"},v.default.createElement("div",null,v.default.createElement("h2",{className:"text-base sm:text-lg font-bold text-slate-900"},"\u7B2C13\u5468\u8054\u52A8\u65E5\u7A0B\u65F6\u95F4\u8F74"),v.default.createElement("p",{className:"text-xs text-slate-500 mt-0.5"},"\u9002\u914D 09:00\u8D77 - 01:30\u7761\u4F5C\u606F\u4E0E\u8FDE\u5802\u8BFE\u7A0B\u65F6\u6BB5")),v.default.createElement("button",{onClick:()=>yt("voice"),className:"text-xs px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 font-semibold flex items-center gap-1"},v.default.createElement(vl,{className:"w-3.5 h-3.5"}),"\u8BED\u97F3\u8C03\u8BA1\u5212")),v.default.createElement("div",{className:"space-y-2.5"},t.schedules.map(I=>v.default.createElement("div",{key:I.id,onClick:()=>{e(J=>({...J,schedules:J.schedules.map(re=>re.id===I.id?{...re,done:!re.done}:re)})),I.done||ne(15,15,`\u5B8C\u6210\u300C${I.title}\u300D\uFF01`)},className:`p-3 rounded-2xl border flex items-center justify-between gap-2.5 cursor-pointer transition ${I.done?"bg-slate-50/70 border-slate-200/60 opacity-70":"bg-white border-slate-200 hover:border-blue-300"}`},v.default.createElement("div",{className:"flex items-center gap-2.5 min-w-0"},v.default.createElement("div",{className:`w-5 h-5 rounded-lg border-2 flex items-center justify-center shrink-0 ${I.done?"bg-emerald-500 border-emerald-500 text-white":"border-slate-300"}`},I.done&&v.default.createElement(xl,{className:"w-3 h-3"})),v.default.createElement("div",{className:"min-w-0"},v.default.createElement("div",{className:"text-[11px] font-semibold text-slate-400"},I.time),v.default.createElement("div",{className:`text-xs sm:text-sm font-bold truncate ${I.done?"line-through text-slate-400":"text-slate-800"}`},I.title))),v.default.createElement("span",{className:"px-2 py-0.5 rounded-lg text-[10px] font-bold bg-slate-100 text-slate-700 shrink-0"},I.tag))))),v.default.createElement("div",{className:"space-y-5"},v.default.createElement("div",{className:"bg-gradient-to-br from-amber-50 via-orange-50/70 to-yellow-50/60 rounded-3xl p-5 border border-amber-200/80 shadow-sm"},v.default.createElement("div",{className:"flex items-center justify-between mb-3"},v.default.createElement("span",{className:"text-xs font-bold text-amber-800 bg-amber-100/90 px-2.5 py-1 rounded-xl"},"\u966A\u4F34\u6FC0\u52B1\u5BA0\u7269"),v.default.createElement("div",{className:"flex items-center gap-1 bg-white/80 p-1 rounded-xl border border-amber-200/70"},[{id:"trilobite",name:"\u4E09\u53F6\u866B\xB7\u56E2\u5B50",emoji:"\u{1FAB2}"},{id:"ammonite",name:"\u83CA\u77F3\xB7\u87BA\u87BA",emoji:"\u{1F41A}"},{id:"star",name:"\u661F\u661F\xB7\u5CA9\u7075",emoji:"\u2B50"}].map(I=>v.default.createElement("button",{key:I.id,onClick:()=>e(J=>({...J,pet:{...J.pet,species:I.id,name:I.name,emoji:I.emoji}})),className:"w-6 h-6 rounded-lg text-sm hover:bg-amber-100"},I.emoji)))),v.default.createElement("div",{className:"flex items-center gap-4"},v.default.createElement("div",{className:"w-20 h-20 rounded-3xl bg-white shadow-sm border-2 border-amber-200 flex items-center justify-center text-4xl shrink-0"},t.pet.emoji),v.default.createElement("div",{className:"flex-1 min-w-0"},v.default.createElement("div",{className:"flex items-center gap-2 flex-wrap"},v.default.createElement("h3",{className:"font-bold text-slate-900 text-base"},t.pet.name),v.default.createElement("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500 text-white"},"Lv.",t.pet.level)),v.default.createElement("div",{className:"mt-2"},v.default.createElement("div",{className:"flex justify-between text-[10px] font-semibold text-amber-800 mb-0.5"},v.default.createElement("span",null,"\u6210\u957F\u7ECF\u9A8C"),v.default.createElement("span",null,t.pet.exp," / ",t.pet.maxExp," EXP")),v.default.createElement("div",{className:"w-full bg-amber-200/70 h-1.5 rounded-full overflow-hidden"},v.default.createElement("div",{className:"bg-amber-500 h-full rounded-full",style:{width:`${Math.min(100,t.pet.exp/t.pet.maxExp*100)}%`}}))))),v.default.createElement("div",{className:"grid grid-cols-3 gap-2 mt-4"},v.default.createElement("button",{onClick:()=>B("\u201C168cm/61kg \u5DF2\u7ECF\u662F\u8D85\u68D2\u7684\u5E95\u5B50\u5566\uFF0118:10 \u4E0B\u8BFE\u540E\u51B2\u5440\uFF01\u201D","success"),className:"py-2 rounded-xl bg-white hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold flex items-center justify-center gap-1"},v.default.createElement(_c,{className:"w-3.5 h-3.5 text-rose-500"}),"\u6C42\u5938\u5938"),v.default.createElement("button",{onClick:()=>{if(t.pet.food<=0)return B("\u77FF\u77F3\u4E0D\u8DB3\uFF0C\u5B8C\u6210\u6253\u5361\u6389\u843D\u54E6\uFF01","warning");ne(5,45,`\u6295\u5582\u77FF\u77F3\u6210\u529F\uFF01${t.pet.name} +45 EXP`,-1)},className:"py-2 rounded-xl bg-amber-500 text-white text-xs font-bold"},"\u5582\u77FF\u77F3(",t.pet.food,")"),v.default.createElement("button",{onClick:()=>ne(10,10,"\u9886\u53D6\u6BCF\u65E5\u966A\u4F34\u793C\u5305\uFF1A+10\u91D1\u5E01 & +1\u77FF\u77F3\uFF01",1),className:"py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-1"},v.default.createElement(Sc,{className:"w-3.5 h-3.5"}),"\u9886\u793C\u5305"))),v.default.createElement("div",{className:"bg-white rounded-3xl p-5 border border-slate-200/70 shadow-sm"},v.default.createElement("div",{className:"flex items-center justify-between mb-3"},v.default.createElement("h3",{className:"font-bold text-slate-900 text-sm flex items-center gap-1.5"},v.default.createElement(fc,{className:"w-4 h-4 text-rose-500"}),v.default.createElement("span",null,"\u8BFE\u4E1A\u4E0E\u6BD5\u8BBE\u5F3A\u63D0\u9192")),v.default.createElement("button",{onClick:()=>yt("ddl"),className:"text-xs px-2.5 py-1 rounded-xl bg-slate-100 font-semibold"},"+ \u65B0\u589E")),v.default.createElement("div",{className:"space-y-2"},t.ddls.map(I=>v.default.createElement("div",{key:I.id,className:"p-2.5 rounded-2xl bg-rose-50/70 border border-rose-200 flex items-center justify-between gap-2"},v.default.createElement("div",{className:"min-w-0"},v.default.createElement("div",{className:"text-xs font-bold text-rose-900 truncate"},I.title),v.default.createElement("div",{className:"text-[10px] text-rose-600 mt-0.5"},I.due)),v.default.createElement("button",{onClick:()=>{e(J=>({...J,ddls:J.ddls.filter(re=>re.id!==I.id)})),ne(20,20,"\u641E\u5B9A\u4E00\u9879\u63D0\u9192\uFF01\u5956\u52B1 +20 \u91D1\u5E01\uFF01")},className:"p-1.5 rounded-lg bg-white border border-slate-200 text-emerald-600"},v.default.createElement(xl,{className:"w-3.5 h-3.5"}))))))))),a==="diet"&&v.default.createElement("div",{className:"space-y-5"},v.default.createElement("div",{className:"bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/70 shadow-sm"},v.default.createElement("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-5"},v.default.createElement("div",null,v.default.createElement("h2",{className:"text-lg font-bold text-slate-900"},"\u9910\u524D\u9910\u540E\u53CC\u56FE\u70ED\u91CF\u5DEE\u503C\u8BC6\u522B\uFF08168cm/61kg \u7CBE\u51C6\u51CF\u8102\uFF09"),v.default.createElement("p",{className:"text-xs text-slate-500"},"\u9910\u524D\u62CD\u4E00\u5F20\u4F30\u7B97\u603B\u70ED\u91CF\uFF0C\u9910\u540E\u62CD\u4E00\u5F20\u6263\u9664\u5269\u996D\u70ED\u91CF")),v.default.createElement("span",{className:"px-3 py-1 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-bold"},"\u4ECA\u65E5\u5269\u996D\u5DF2\u6263\u9664 ",fe," kcal")),v.default.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-5"},v.default.createElement("div",{className:"bg-slate-50 rounded-3xl p-4 border border-slate-200/80 space-y-3"},v.default.createElement("div",{className:"flex justify-between text-xs font-bold"},v.default.createElement("span",null,"STEP 1 \xB7 \u9910\u524D\u62CD\u7167"),v.default.createElement("span",{className:"text-amber-700"},g," kcal")),v.default.createElement("label",{className:"block h-40 rounded-2xl border-2 border-dashed border-slate-300 bg-white overflow-hidden cursor-pointer"},f?v.default.createElement("img",{src:f,alt:"\u9910\u524D",className:"w-full h-full object-cover"}):v.default.createElement("div",{className:"w-full h-full flex flex-col items-center justify-center text-slate-400 text-xs"},v.default.createElement(Js,{className:"w-6 h-6 mb-1"}),"\u70B9\u51FB\u62CD\u6444/\u4E0A\u4F20\u9910\u524D\u7167\u7247"),v.default.createElement("input",{type:"file",accept:"image/*",className:"hidden",onChange:I=>ee(I,"pre")})),v.default.createElement("input",{type:"text",value:S,onChange:I=>b(I.target.value),className:"w-full text-xs px-3 py-2 rounded-xl border border-slate-200 bg-white"}),v.default.createElement("div",{className:"flex items-center justify-between text-xs"},v.default.createElement("span",null,"\u9910\u524D\u70ED\u91CF (kcal):"),v.default.createElement("input",{type:"number",value:g,onChange:I=>{let J=Number(I.target.value)||0;d(J),A(Math.round(J*(m/100)))},className:"w-24 font-bold text-right px-2.5 py-1.5 rounded-xl border border-slate-200 bg-white"}))),v.default.createElement("div",{className:"bg-slate-50 rounded-3xl p-4 border border-slate-200/80 space-y-3"},v.default.createElement("div",{className:"flex justify-between text-xs font-bold"},v.default.createElement("span",null,"STEP 2 \xB7 \u9910\u540E\u6B8B\u4F59\u5BF9\u6BD4"),v.default.createElement("span",{className:"text-emerald-700"},"-",_," kcal")),v.default.createElement("label",{className:"block h-40 rounded-2xl border-2 border-dashed border-slate-300 bg-white overflow-hidden cursor-pointer"},c?v.default.createElement("img",{src:c,alt:"\u9910\u540E",className:"w-full h-full object-cover"}):v.default.createElement("div",{className:"w-full h-full flex flex-col items-center justify-center text-slate-400 text-xs"},v.default.createElement(Js,{className:"w-6 h-6 mb-1"}),"\u70B9\u51FB\u62CD\u6444/\u4E0A\u4F20\u9910\u540E\u9910\u76D8"),v.default.createElement("input",{type:"file",accept:"image/*",className:"hidden",onChange:I=>ee(I,"post")})),v.default.createElement("div",{className:"flex items-center gap-2 text-xs"},v.default.createElement("span",null,"\u5269\u4F59\u6BD4\u4F8B:"),v.default.createElement("input",{type:"range",min:"0",max:"80",value:m,onChange:I=>{let J=Number(I.target.value);y(J),A(Math.round(g*(J/100)))},className:"flex-1 accent-emerald-600"}),v.default.createElement("span",{className:"font-bold text-emerald-700"},m,"%")),v.default.createElement("div",{className:"flex items-center justify-between text-xs"},v.default.createElement("span",null,"\u6263\u9664\u70ED\u91CF (kcal):"),v.default.createElement("input",{type:"number",value:_,onChange:I=>A(Number(I.target.value)||0),className:"w-24 font-bold text-right px-2.5 py-1.5 rounded-xl border border-slate-200 bg-white text-emerald-700"}))),v.default.createElement("div",{className:"bg-slate-900 text-white rounded-3xl p-5 flex flex-col justify-between"},v.default.createElement("div",null,v.default.createElement("span",{className:"text-xs font-bold text-amber-400"},"STEP 3 \xB7 \u51C0\u6444\u5165\u7ED3\u7B97"),v.default.createElement("div",{className:"mt-3 flex items-baseline gap-2"},v.default.createElement("span",{className:"text-4xl font-extrabold"},Math.max(0,g-_)),v.default.createElement("span",{className:"text-xs text-slate-300"},"kcal \u5B9E\u9645\u6444\u5165")),v.default.createElement("p",{className:"text-xs text-slate-300 mt-3 bg-white/10 p-3 rounded-2xl"},"\u6263\u9664\u5269\u996D\u70ED\u91CF\u540E\u5199\u5165\u8D26\u672C\uFF0C\u6BCF\u6B21\u8BB0\u5F55\u81EA\u52A8\u5956\u52B1 ",v.default.createElement("strong",null,"+20 \u81EA\u5F8B\u91D1\u5E01"),"\uFF01")),v.default.createElement("div",{className:"mt-4 space-y-2"},v.default.createElement("select",{value:w,onChange:I=>x(I.target.value),className:"w-full text-xs bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white"},v.default.createElement("option",{value:"\u5348\u9910 (12:30)",className:"text-slate-900"},"\u5348\u9910 (12:30)"),v.default.createElement("option",{value:"\u665A\u9910 (18:30)",className:"text-slate-900"},"\u665A\u9910 (18:30)"),v.default.createElement("option",{value:"\u65E9\u5348\u9910 (09:30)",className:"text-slate-900"},"\u65E9\u5348\u9910 (09:30)")),v.default.createElement("button",{onClick:de,className:"w-full py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs"},"\u5199\u5165\u70ED\u91CF\u8D26\u672C (+20\u91D1\u5E01)")))))),a==="fitness"&&v.default.createElement("div",{className:"bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/70 shadow-sm space-y-4"},v.default.createElement("div",{className:"flex flex-wrap items-center justify-between gap-3"},v.default.createElement("div",null,v.default.createElement("h2",{className:"text-lg font-bold text-slate-900"},"\u6BCF\u5468\u8BFE\u8868\u540C\u6B65 (202319203061) & 1/3/5 \u5065\u8EAB\u8054\u52A8"),v.default.createElement("p",{className:"text-xs text-slate-500"},"\u4E0A\u5348 08:20-12:00 / \u4E0B\u5348 14:00-17:40 \u8FDE\u5802\u5236\uFF0C\u4E0B\u8BFE\u540E 18:10 \u987A\u8DEF\u51CF\u8102")),v.default.createElement("select",{value:E,onChange:I=>he(I.target.value),className:"text-xs px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 font-semibold"},v.default.createElement("option",{value:"week13"},"\u7B2C13\u5468 (11.23\u5468\u4E00\u8D77 \xB7 \u591A\u5A92\u4F53\u8BBE\u8BA12 + \u6BD5\u8BBE)"),v.default.createElement("option",{value:"week14_15"},"\u7B2C14-15\u5468 (\u5B66\u79D1\u7EFC\u5408\u8BBE\u8BA1\u4E8C + \u591A\u5A92\u4F53\u8BBE\u8BA12)"),v.default.createElement("option",{value:"week16_19"},"\u7B2C16-19\u5468 (\u516C\u5171\u7A7A\u95F4\u8425\u9020 \xB7 \u88F4\u78CA)"))),v.default.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3"},t.weekPlan.map((I,J)=>v.default.createElement("div",{key:I.day,className:`p-3.5 rounded-2xl border flex flex-col justify-between ${I.isWorkout?"bg-rose-50/50 border-rose-200":"bg-slate-50/70 border-slate-200/70"}`},v.default.createElement("div",null,v.default.createElement("div",{className:"flex items-center justify-between mb-2"},v.default.createElement("span",{className:"font-bold text-sm text-slate-900"},I.day),v.default.createElement("span",{className:`px-2 py-0.5 rounded-lg text-[10px] font-bold ${I.isWorkout?"bg-rose-500 text-white":"bg-slate-200 text-slate-600"}`},I.isWorkout?"\u8BAD\u7EC3\u65E5":"\u81EA\u7531")),v.default.createElement("div",{className:"space-y-1 mb-2.5"},I.classes.length?I.classes.map((re,Ue)=>v.default.createElement("div",{key:Ue,className:"text-[11px] bg-white px-2 py-1 rounded-lg border border-slate-200 text-slate-700"},v.default.createElement(yc,{className:"w-3 h-3 inline mr-1 text-blue-500"}),re)):v.default.createElement("div",{className:"text-[11px] text-emerald-600 font-medium"},"\u5168\u5929\u65E0\u8BFE"))),v.default.createElement("div",{className:"pt-2 border-t border-slate-200/60"},v.default.createElement("div",{className:`text-xs font-bold mb-2 ${I.isWorkout?"text-rose-700":"text-slate-600"}`},I.workout),v.default.createElement("button",{onClick:()=>{let re=t.weekPlan.map((Ue,_e)=>_e===J?{...Ue,done:!Ue.done}:Ue);e(Ue=>({...Ue,weekPlan:re})),I.done||ne(35,30,`\u5B8C\u6210${I.day}\u8BAD\u7EC3\u6253\u5361\uFF01+35\u91D1\u5E01 & +1\u77FF\u77F3`,1)},className:`w-full py-1.5 rounded-xl text-[11px] font-bold ${I.done?"bg-emerald-600 text-white":"bg-white border border-slate-200 text-slate-700"}`},I.done?"\u5DF2\u6253\u5361 (+35\u91D1\u5E01)":"\u5B8C\u6210\u6253\u5361")))))),a==="wallet"&&v.default.createElement("div",{className:"space-y-5"},v.default.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4"},v.default.createElement("div",{className:"bg-white p-5 rounded-3xl border border-slate-200/70 shadow-sm"},v.default.createElement("div",{className:"flex justify-between text-xs text-slate-500 mb-1"},v.default.createElement("span",null,"\u672C\u6708\u652F\u51FA / \u9884\u7B97"),v.default.createElement("button",{onClick:()=>yt("budget"),className:"text-purple-600 font-semibold hover:underline"},"\u4FEE\u6539\u9884\u7B97")),v.default.createElement("div",{className:"text-2xl font-extrabold text-slate-900"},"\xA5",ce.toFixed(1)," ",v.default.createElement("span",{className:"text-xs font-normal text-slate-400"},"/ \xA5",t.wallet.budget)),v.default.createElement("div",{className:"w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden"},v.default.createElement("div",{className:"bg-purple-600 h-full rounded-full",style:{width:`${Math.min(100,ce/t.wallet.budget*100)}%`}}))),v.default.createElement("div",{className:"bg-emerald-50/70 p-5 rounded-3xl border border-emerald-200/80"},v.default.createElement("div",{className:"text-xs text-emerald-800 font-semibold mb-1"},"\u672C\u6708\u7701\u94B1\u51C0\u7ED3\u4F59"),v.default.createElement("div",{className:"text-2xl font-extrabold text-emerald-700"},"\xA5",Re.toFixed(1)),v.default.createElement("button",{onClick:()=>ne(30,20,"\u5FCD\u4F4F\u51B2\u52A8\u6D88\u8D39\uFF01\u5956\u52B1 +30 \u81EA\u5F8B\u91D1\u5E01\uFF01"),className:"mt-3 w-full py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold"},"+ \u6211\u5FCD\u4F4F\u6CA1\u4E70\u5976\u8336/\u76F2\u76D2 (+30\u91D1\u5E01)")),v.default.createElement("div",{className:"bg-gradient-to-br from-amber-500 to-orange-500 text-white p-5 rounded-3xl shadow-sm"},v.default.createElement("div",{className:"flex justify-between text-xs text-amber-100 mb-1"},v.default.createElement("span",null,"\u6211\u7684\u81EA\u5F8B\u5956\u52B1\u91D1\u5E93"),v.default.createElement(Ic,{className:"w-4 h-4"})),v.default.createElement("div",{className:"text-3xl font-extrabold"},t.coins," ",v.default.createElement("span",{className:"text-xs font-normal"},"\u91D1\u5E01")),v.default.createElement("p",{className:"text-[11px] text-amber-50 mt-2"},"\u8FBE\u6807\u5C31\u7406\u76F4\u6C14\u58EE\u5151\u6362\u4E0B\u9762\u7684\u81EA\u6211\u5956\u52B1\uFF01"))),v.default.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-5"},v.default.createElement("div",{className:"bg-white rounded-3xl p-5 border border-slate-200/70 shadow-sm"},v.default.createElement("div",{className:"flex items-center justify-between mb-4"},v.default.createElement("h3",{className:"font-bold text-slate-900"},"\u6D88\u8D39\u6D41\u6C34\u660E\u7EC6"),v.default.createElement("button",{onClick:()=>yt("expense"),className:"text-xs px-3 py-1.5 rounded-xl bg-purple-600 text-white font-bold"},"+ \u8BB0\u4E00\u7B14")),v.default.createElement("div",{className:"space-y-2 max-h-72 overflow-y-auto"},t.wallet.expenses.map(I=>v.default.createElement("div",{key:I.id,className:"p-3 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center justify-between text-xs"},v.default.createElement("div",null,v.default.createElement("div",{className:"font-bold text-slate-800"},I.title),v.default.createElement("div",{className:"text-[10px] text-slate-400"},I.category," \xB7 ",I.date)),v.default.createElement("div",{className:"font-extrabold text-slate-900"},"-\xA5",I.amount.toFixed(1)))))),v.default.createElement("div",{className:"bg-white rounded-3xl p-5 border border-slate-200/70 shadow-sm"},v.default.createElement("div",{className:"flex items-center justify-between mb-4"},v.default.createElement("h3",{className:"font-bold text-slate-900"},"\u81EA\u6211\u5956\u52B1\u5151\u6362\u5546\u5E97"),v.default.createElement("button",{onClick:()=>yt("reward"),className:"text-xs px-3 py-1.5 rounded-xl bg-amber-100 text-amber-900 font-bold"},"+ \u81EA\u5B9A\u4E49\u5956\u52B1")),v.default.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3"},t.wallet.rewards.map(I=>v.default.createElement("div",{key:I.id,className:"p-3.5 rounded-2xl border border-amber-200 bg-amber-50/50 flex flex-col justify-between"},v.default.createElement("div",null,v.default.createElement("div",{className:"flex justify-between items-center mb-1"},v.default.createElement("span",{className:"text-2xl"},I.icon),v.default.createElement("span",{className:"text-[10px] text-slate-400"},"\u5DF2\u5151 ",I.redeemed," \u6B21")),v.default.createElement("div",{className:"text-xs font-bold text-slate-900"},I.title)),v.default.createElement("button",{onClick:()=>{if(t.coins<I.cost)return B(`\u91D1\u5E01\u8FD8\u5DEE ${I.cost-t.coins} \u679A\u54E6\uFF01`,"warning");e(J=>({...J,coins:J.coins-I.cost,wallet:{...J.wallet,rewards:J.wallet.rewards.map(re=>re.id===I.id?{...re,redeemed:re.redeemed+1}:re)}})),B(`\u{1F389} \u6210\u529F\u5151\u6362\u300C${I.title}\u300D\uFF01`,"success")},className:"mt-3 w-full py-1.5 rounded-xl bg-amber-500 text-white text-xs font-bold"},I.cost," \u91D1\u5E01\u5151\u6362"))))))),a==="bookshelf"&&v.default.createElement("div",{className:"space-y-5"},v.default.createElement("div",{className:"bg-white rounded-3xl p-5 border border-slate-200/70 shadow-sm flex flex-wrap items-center justify-between gap-4"},v.default.createElement("div",null,v.default.createElement("span",{className:"text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-xl"},"\u771F\u5B9E\u9605\u8BFB\u65F6\u957F\u7EDF\u8BA1\uFF08\u5DF2\u6E05\u96F6\u865A\u6784\u6570\u636E\uFF09"),v.default.createElement("div",{className:"mt-2 flex items-baseline gap-4"},v.default.createElement("div",{className:"text-2xl font-extrabold text-slate-900"},(t.readingStats.totalSeconds/3600).toFixed(1)," ",v.default.createElement("span",{className:"text-xs font-normal text-slate-500"},"\u5C0F\u65F6")),v.default.createElement("div",{className:"text-sm font-bold text-emerald-600"},"\u8FDE\u7EED\u6253\u5361 ",t.readingStats.streakDays," \u5929"))),v.default.createElement("div",{className:"flex items-center gap-2"},v.default.createElement("div",{className:"relative"},v.default.createElement(Tc,{className:"w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400"}),v.default.createElement("input",{type:"text",value:N,onChange:I=>X(I.target.value),placeholder:"\u641C\u7D22\u6216\u65B0\u5EFA\u4E66\u76EE...",className:"pl-8 pr-3 py-2 rounded-xl border border-slate-200 text-xs w-44"})),v.default.createElement("button",{onClick:()=>yt("addBook"),className:"px-3.5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold flex items-center gap-1"},v.default.createElement(Ac,{className:"w-3.5 h-3.5"}),"\u5F55\u5165\u65B0\u4E66"))),v.default.createElement("div",{className:"bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/70 shadow-sm"},v.default.createElement("div",{className:"flex items-center gap-2 overflow-x-auto pb-3 mb-4 border-b border-slate-100"},v.default.createElement("button",{onClick:()=>Z("all"),className:`px-3 py-1.5 rounded-xl text-xs whitespace-nowrap ${H==="all"?"bg-indigo-600 text-white font-semibold":"bg-slate-100 text-slate-600"}`},"\u5168\u90E8\u85CF\u4E66 (",t.books.length,")"),t.bookCategories.map(I=>v.default.createElement("div",{key:I,className:`inline-flex items-center rounded-xl overflow-hidden shrink-0 ${H===I?"bg-indigo-600 text-white":"bg-slate-100 text-slate-700"}`},v.default.createElement("button",{onClick:()=>Z(I),className:"px-3 py-1.5 text-xs font-medium"},I),v.default.createElement("button",{onClick:()=>{e(J=>({...J,bookCategories:J.bookCategories.filter(re=>re!==I),books:J.books.map(re=>re.category===I?{...re,category:"\u672A\u5206\u7C7B"}:re)})),H===I&&Z("all"),B(`\u5DF2\u5220\u9664\u5206\u7C7B\u300C${I}\u300D`,"info")},className:"pr-2 pl-1 py-1.5 text-[10px] opacity-60 hover:opacity-100"},v.default.createElement(Hr,{className:"w-3 h-3"})))),v.default.createElement("button",{onClick:()=>yt("newCat"),className:"px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 flex items-center gap-1 shrink-0"},v.default.createElement(vc,{className:"w-3.5 h-3.5"}),"\u65B0\u5EFA\u5206\u7C7B")),v.default.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"},t.books.filter(I=>(H==="all"||I.category===H)&&(I.title.toLowerCase().includes(N.toLowerCase())||I.author.toLowerCase().includes(N.toLowerCase()))).map(I=>v.default.createElement("div",{key:I.id,onClick:()=>Q(I),className:"bg-slate-50 hover:bg-white rounded-3xl p-4 border border-slate-200/80 hover:border-indigo-300 transition cursor-pointer flex flex-col justify-between"},v.default.createElement("div",null,v.default.createElement("div",{className:`h-32 rounded-2xl bg-gradient-to-br ${I.coverBg} p-3.5 text-white flex flex-col justify-between shadow-sm`},v.default.createElement("div",{className:"flex items-center justify-between"},v.default.createElement("span",{className:"text-[10px] font-bold bg-black/25 px-2 py-0.5 rounded-lg"},I.category),v.default.createElement("button",{onClick:J=>{J.stopPropagation(),e(re=>({...re,books:re.books.filter(Ue=>Ue.id!==I.id)})),B(`\u5DF2\u5220\u9664\u300A${I.title}\u300B`,"info")},className:"w-6 h-6 rounded-lg bg-black/25 hover:bg-rose-600 flex items-center justify-center"},v.default.createElement(js,{className:"w-3 h-3"}))),v.default.createElement("h4",{className:"font-bold text-xs sm:text-sm line-clamp-2"},I.title)),v.default.createElement("div",{className:"mt-2.5 text-[11px] text-slate-500"},v.default.createElement("div",null,I.author),v.default.createElement("div",{className:"flex justify-between mt-1.5"},v.default.createElement("span",null,"\u5DF2\u8BFB ",I.readMins,"m"),v.default.createElement("span",{className:"font-bold text-indigo-600"},I.progress,"%")),v.default.createElement("div",{className:"w-full bg-slate-200 h-1.5 rounded-full mt-1 overflow-hidden"},v.default.createElement("div",{className:"bg-indigo-600 h-full rounded-full",style:{width:`${I.progress}%`}})))),v.default.createElement("div",{className:"mt-2.5 pt-2 border-t border-slate-200/60 text-xs font-bold text-indigo-600"},"\u6253\u5F00\u5185\u7F6E\u5168\u5C4F\u9605\u8BFB\u5668 $\\rightarrow$")))))),a==="academic"&&v.default.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-5"},v.default.createElement("div",{className:"lg:col-span-2 space-y-5"},v.default.createElement("div",{className:"bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/70 shadow-sm"},v.default.createElement("h2",{className:"text-lg font-bold text-slate-900 mb-4"},"\u591A\u7EBF\u5B66\u4E60\u6253\u5361\uFF08\u96C5\u601D / \u65E5\u8BED / \u5730\u5927\u9EC4\u7231\u6B66\u8001\u5E08\u65B9\u5411\uFF09"),v.default.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3.5"},[{title:"\u96C5\u601D\u82F1\u8BED IELTS",desc:"\u6838\u5FC3\u8BCD 50 \u4E2A + \u771F\u9898\u7CBE\u542C",coins:25,bg:"bg-sky-50 border-sky-200 text-sky-800",btn:"bg-sky-600"},{title:"\u65E5\u8BED\u8FDB\u9636 Japanese",desc:"\u65B0\u6807\u65E5 1 \u8BFE + \u751F\u8089\u8DDF\u8BFB",coins:25,bg:"bg-rose-50 border-rose-200 text-rose-800",btn:"bg-rose-600"},{title:"\u5730\u5927\u9884\u7814 & \u53E4\u751F\u7269",desc:"\u5DE5\u7A0B\u5730\u8D28\u6587\u732E + \u79D1\u666E\u7B14\u8BB0",coins:35,bg:"bg-emerald-50 border-emerald-200 text-emerald-800",btn:"bg-emerald-600"}].map(I=>v.default.createElement("div",{key:I.title,className:`p-4 rounded-2xl border ${I.bg}`},v.default.createElement("div",{className:"text-xs font-bold mb-1"},I.title),v.default.createElement("p",{className:"text-xs text-slate-600 mb-3"},I.desc),v.default.createElement("button",{onClick:()=>ne(I.coins,I.coins,`\u5B8C\u6210\u300C${I.title}\u300D\u6253\u5361\uFF01+${I.coins}\u91D1\u5E01`,1),className:`w-full py-2 rounded-xl ${I.btn} text-white text-xs font-bold`},"\u6253\u5361 (+",I.coins,"\u91D1\u5E01)")))))),v.default.createElement(FD,null))),v.default.createElement("nav",{className:"lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 px-1 py-1.5 flex items-center justify-around"},[{id:"dashboard",label:"\u603B\u89C8",icon:kr},{id:"diet",label:"\u996E\u98DF",icon:Js},{id:"fitness",label:"\u8BFE\u8868\u5065\u8EAB",icon:zr},{id:"wallet",label:"\u7701\u94B1\u5956\u52B1",icon:Sl},{id:"bookshelf",label:"\u4E66\u67B6",icon:Fr},{id:"academic",label:"\u79D1\u78143D",icon:gl}].map(I=>{let J=I.icon,re=a===I.id;return v.default.createElement("button",{key:I.id,onClick:()=>n(I.id),className:`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl ${re?"text-blue-600 font-bold":"text-slate-500"}`},v.default.createElement(J,{className:"w-4 h-4"}),v.default.createElement("span",{className:"text-[10px]"},I.label))})),Je&&v.default.createElement("div",{className:"fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4"},v.default.createElement("div",{className:"bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4"},v.default.createElement("div",{className:"flex items-center justify-between"},v.default.createElement("h3",{className:"text-base font-bold text-slate-900"},Je==="voice"&&"\u8BED\u97F3\u4E00\u53E5\u8BDD\u8C03\u8BA1\u5212\u4E0E\u8BB0\u8D26",Je==="expense"&&"\u8BB0\u4E00\u7B14\u6D88\u8D39\u82B1\u9500",Je==="budget"&&"\u4FEE\u6539\u672C\u6708\u9884\u7B97\u76EE\u6807",Je==="reward"&&"\u4E0A\u67B6\u4E13\u5C5E\u81EA\u6211\u5956\u52B1",Je==="newCat"&&"\u65B0\u5EFA\u79C1\u4EBA\u4E66\u67B6\u5206\u7C7B",Je==="addBook"&&"\u5F55\u5165\u65B0\u4E66\u6216\u5BFC\u5165\u5B8C\u6574\u7535\u5B50\u4E66",Je==="ddl"&&"\u65B0\u589E\u8BFE\u4E1A\u5F3A\u63D0\u9192",Je==="backup"&&"React + Three.js \u72EC\u7ACB\u5B58\u6863\u5907\u4EFD"),v.default.createElement("button",{onClick:()=>yt(null),className:"w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"},v.default.createElement(Hr,{className:"w-4 h-4"}))),Je==="voice"&&v.default.createElement("div",{className:"space-y-3 text-xs"},v.default.createElement("textarea",{rows:3,value:Kt,onChange:I=>Ta(I.target.value),placeholder:"\u4F8B\u5982\uFF1A\u628A\u4ECA\u5929\u96C5\u601D\u6539\u5230\u665A\u4E0A\u4E5D\u70B9\uFF0C\u5468\u4E00\u5065\u8EAB\u8C03\u5230\u5468\u4E8C\uFF0C\u53D6\u6D88\u7761\u524D\u9605\u8BFB\uFF0C\u98DF\u5802\u82B1\u4E8614.5\u5143...",className:"w-full p-3 rounded-2xl border border-slate-200"}),v.default.createElement("button",{onClick:()=>Ta("\u628A\u4ECA\u5929\u7684\u96C5\u601D\u5B66\u4E60\u6539\u5230\u665A\u4E0A\u4E5D\u70B9\uFF0C\u628A\u5468\u4E00\u7684\u5065\u8EAB\u8C03\u5230\u5468\u4E8C\uFF0C\u53E6\u5916\u53D6\u6D88\u7761\u524D\u9605\u8BFB\uFF0C\u98DF\u5802\u82B1\u4E8614.5\u5143"),className:"text-[11px] px-2.5 py-1.5 rounded-xl bg-blue-50 text-blue-700 text-left"},"\u70B9\u51FB\u586B\u5165\u793A\u4F8B\u8BED\u97F3\u6307\u4EE4"),v.default.createElement("button",{onClick:K,className:"w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold"},"AI \u81EA\u52A8\u8C03\u8BA1\u5212\u5E76\u6267\u884C")),Je==="expense"&&v.default.createElement("div",{className:"space-y-3 text-xs"},v.default.createElement("input",{type:"text",placeholder:"\u6D88\u8D39\u9879\u76EE\uFF08\u5982\uFF1A\u9EC4\u5BB6\u6E56\u4E8C\u98DF\u5802\u665A\u9910\uFF09",value:Ht.title,onChange:I=>va({...Ht,title:I.target.value}),className:"w-full px-3 py-2.5 rounded-xl border border-slate-200"}),v.default.createElement("input",{type:"number",step:"0.1",placeholder:"\u91D1\u989D\uFF08\u5143\uFF09",value:Ht.amount,onChange:I=>va({...Ht,amount:I.target.value}),className:"w-full px-3 py-2.5 rounded-xl border border-slate-200"}),v.default.createElement("select",{value:Ht.category,onChange:I=>va({...Ht,category:I.target.value}),className:"w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white"},["\u5065\u5EB7\u9910\u996E","\u4E66\u7C4D\u5B66\u4E60","\u5065\u8EAB\u8FD0\u52A8","\u65E5\u7528\u670D\u9970","\u96F6\u98DF\u996E\u6599"].map(I=>v.default.createElement("option",{key:I,value:I},I))),v.default.createElement("button",{onClick:()=>{let I=parseFloat(Ht.amount);!Ht.title.trim()||!I||(e(J=>({...J,wallet:{...J.wallet,expenses:[{id:Date.now(),title:Ht.title.trim(),amount:I,category:Ht.category,date:"\u521A\u521A"},...J.wallet.expenses]}})),va({title:"",amount:"15.0",category:"\u5065\u5EB7\u9910\u996E"}),yt(null),B(`\u5DF2\u8BB0\u5F55\u6D88\u8D39 \xA5${I.toFixed(1)}`,"success"))},className:"w-full py-2.5 rounded-xl bg-purple-600 text-white font-bold"},"\u786E\u8BA4\u4FDD\u5B58")),Je==="budget"&&v.default.createElement("div",{className:"space-y-3 text-xs"},v.default.createElement("input",{type:"number",value:O,onChange:I=>Za(I.target.value),className:"w-full px-3 py-2.5 rounded-xl border border-slate-200"}),v.default.createElement("button",{onClick:()=>{let I=parseFloat(O);!I||I<=0||(e(J=>({...J,wallet:{...J.wallet,budget:I}})),yt(null),B(`\u672C\u6708\u9884\u7B97\u5DF2\u66F4\u65B0\u4E3A \xA5${I}`,"success"))},className:"w-full py-2.5 rounded-xl bg-purple-600 text-white font-bold"},"\u4FDD\u5B58\u9884\u7B97")),Je==="reward"&&v.default.createElement("div",{className:"space-y-3 text-xs"},v.default.createElement("input",{type:"text",placeholder:"\u5956\u52B1\u540D\u79F0\uFF08\u5982\uFF1A\u4E70\u4E00\u672C\u65B0\u753B\u518C\uFF09",value:dt.title,onChange:I=>Lt({...dt,title:I.target.value}),className:"w-full px-3 py-2.5 rounded-xl border border-slate-200"}),v.default.createElement("input",{type:"number",placeholder:"\u6240\u9700\u91D1\u5E01",value:dt.cost,onChange:I=>Lt({...dt,cost:I.target.value}),className:"w-full px-3 py-2.5 rounded-xl border border-slate-200"}),v.default.createElement("button",{onClick:()=>{dt.title.trim()&&(e(I=>({...I,wallet:{...I.wallet,rewards:[...I.wallet.rewards,{id:Date.now(),title:dt.title.trim(),cost:parseInt(dt.cost,10)||120,icon:"\u{1F381}",redeemed:0}]}})),Lt({title:"",cost:"120",icon:"\u{1F381}"}),yt(null),B("\u5DF2\u4E0A\u67B6\u65B0\u5956\u52B1\uFF01","success"))},className:"w-full py-2.5 rounded-xl bg-amber-500 text-white font-bold"},"\u4E0A\u67B6\u5956\u52B1")),Je==="newCat"&&v.default.createElement("div",{className:"space-y-3 text-xs"},v.default.createElement("input",{type:"text",placeholder:"\u8F93\u5165\u65B0\u5206\u7C7B\u540D\u79F0\uFF08\u5982\uFF1A\u6BD5\u8BBE\u53C2\u8003\uFF09",value:ge,onChange:I=>Xt(I.target.value),className:"w-full px-3 py-2.5 rounded-xl border border-slate-200"}),v.default.createElement("button",{onClick:()=>{let I=ge.trim();!I||t.bookCategories.includes(I)||(e(J=>({...J,bookCategories:[...J.bookCategories,I]})),Z(I),Xt(""),yt(null),B(`\u5DF2\u521B\u5EFA\u5206\u7C7B\u300C${I}\u300D`,"success"))},className:"w-full py-2.5 rounded-xl bg-indigo-600 text-white font-bold"},"\u521B\u5EFA\u5206\u7C7B")),Je==="addBook"&&v.default.createElement("div",{className:"space-y-3 text-xs"},v.default.createElement("input",{type:"text",placeholder:"\u4E66\u540D",value:Le.title,onChange:I=>Be({...Le,title:I.target.value}),className:"w-full px-3 py-2.5 rounded-xl border border-slate-200"}),v.default.createElement("div",{className:"grid grid-cols-2 gap-2"},v.default.createElement("input",{type:"text",placeholder:"\u4F5C\u8005",value:Le.author,onChange:I=>Be({...Le,author:I.target.value}),className:"px-3 py-2 rounded-xl border border-slate-200"}),v.default.createElement("select",{value:Le.category,onChange:I=>Be({...Le,category:I.target.value}),className:"px-3 py-2 rounded-xl border border-slate-200 bg-white"},t.bookCategories.map(I=>v.default.createElement("option",{key:I,value:I},I)))),v.default.createElement("textarea",{rows:4,placeholder:"\u7C98\u8D34\u6B63\u6587\u5185\u5BB9\uFF0C\u6216\u70B9\u51FB\u4E0B\u65B9\u5BFC\u5165\u672C\u5730\u5B8C\u6574\u7535\u5B50\u4E66...",value:Le.content,onChange:I=>Be({...Le,content:I.target.value}),className:"w-full p-3 rounded-xl border border-slate-200"}),v.default.createElement("label",{className:"inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold cursor-pointer"},v.default.createElement(gc,{className:"w-3.5 h-3.5"}),v.default.createElement("span",null,"\u5BFC\u5165\u672C\u5730\u7535\u5B50\u4E66 (.txt / .md / .epub)"),v.default.createElement("input",{type:"file",accept:".txt,.md,.epub,.html",className:"hidden",onChange:$})),v.default.createElement("button",{onClick:()=>{if(!Le.title.trim())return;let I=Le.content.trim()?Le.content.split(/\n+/).map(J=>J.trim()).filter(Boolean):[`\u300A${Le.title}\u300B\u5DF2\u52A0\u5165\u4E66\u67B6\u3002`];e(J=>({...J,books:[{id:Date.now(),title:Le.title.trim(),author:Le.author.trim()||"\u79C1\u4EBA\u85CF\u4E66",category:Le.category,progress:0,currentPage:0,readMins:0,coverBg:"from-indigo-600 to-purple-800",content:I},...J.books]})),Be({title:"",author:"",category:t.bookCategories[0]||"\u5730\u5927\u4E13\u4E1A",content:""}),yt(null),B("\u65B0\u4E66\u5DF2\u6210\u529F\u5165\u67B6\uFF0C\u652F\u6301\u7FFB\u9875\u4E0E\u76EE\u5F55\u8DF3\u8F6C\uFF01","success")},className:"w-full py-2.5 rounded-xl bg-indigo-600 text-white font-bold"},"\u52A0\u5165\u4E66\u67B6")),Je==="ddl"&&v.default.createElement("div",{className:"space-y-3 text-xs"},v.default.createElement("input",{type:"text",placeholder:"\u63D0\u9192\u4E8B\u9879",value:T.title,onChange:I=>M({...T,title:I.target.value}),className:"w-full px-3 py-2.5 rounded-xl border border-slate-200"}),v.default.createElement("input",{type:"text",placeholder:"\u622A\u6B62\u65F6\u95F4",value:T.due,onChange:I=>M({...T,due:I.target.value}),className:"w-full px-3 py-2.5 rounded-xl border border-slate-200"}),v.default.createElement("button",{onClick:()=>{T.title.trim()&&(e(I=>({...I,ddls:[{id:Date.now(),title:T.title.trim(),due:T.due,urgent:!0},...I.ddls]})),yt(null),B("\u63D0\u9192\u5DF2\u6DFB\u52A0\uFF01","success"))},className:"w-full py-2.5 rounded-xl bg-rose-600 text-white font-bold"},"\u6DFB\u52A0\u63D0\u9192")),Je==="backup"&&v.default.createElement("div",{className:"space-y-3 text-xs"},v.default.createElement("p",{className:"text-slate-500"},"\u6240\u6709\u8BB0\u5F55\u81EA\u52A8\u4FDD\u5B58\u5728\u6D4F\u89C8\u5668\u672C\u5730\u5B58\u50A8\u4E2D\uFF0C\u4E5F\u53EF\u5BFC\u51FA JSON \u6587\u4EF6\u8DE8\u8BBE\u5907\u6062\u590D\u3002"),v.default.createElement("div",{className:"grid grid-cols-2 gap-2"},v.default.createElement("button",{onClick:()=>{let I=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),J=URL.createObjectURL(I),re=document.createElement("a");re.href=J,re.download=`GapYearOS_React\u5907\u4EFD_${new Date().toISOString().slice(0,10)}.json`,re.click(),URL.revokeObjectURL(J),B("\u5907\u4EFD\u5DF2\u5BFC\u51FA\uFF01","success")},className:"py-2.5 px-3 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center gap-1"},v.default.createElement(mc,{className:"w-3.5 h-3.5"}),"\u5BFC\u51FA\u5907\u4EFD"),v.default.createElement("label",{className:"py-2.5 px-3 rounded-xl bg-slate-100 text-slate-800 font-bold flex items-center justify-center gap-1 cursor-pointer"},v.default.createElement(Ec,{className:"w-3.5 h-3.5"}),"\u6062\u590D\u5907\u4EFD",v.default.createElement("input",{type:"file",accept:".json",className:"hidden",onChange:I=>{let J=I.target.files?.[0];if(!J)return;let re=new FileReader;re.onload=Ue=>{try{e({...pp,...JSON.parse(Ue.target.result)}),yt(null),B("\u6570\u636E\u5DF2\u6062\u590D\uFF01","success")}catch{}},re.readAsText(J)}})))))),Pe&&(()=>{let I=I1(Pe.content),J=I.length,re=Math.max(0,Math.min(J-1,be)),Ue=BD(I);return v.default.createElement("div",{className:`fixed inset-0 z-50 bg-slate-900/85 backdrop-blur-sm flex items-center justify-center ${tt?"p-0":"p-2 sm:p-5"}`},v.default.createElement("div",{className:`flex flex-col shadow-2xl overflow-hidden relative transition-all duration-200 ${tt?"w-screen h-screen rounded-none":"rounded-3xl max-w-4xl w-full h-[92vh]"} ${ae==="paper"?"bg-[#faf6ed] text-[#2c2825]":ae==="mint"?"bg-[#e8f3ec] text-[#1f3328]":"bg-[#181a1f] text-slate-200"}`},!Qe&&v.default.createElement("div",{className:"px-4 pt-[max(12px,env(safe-area-inset-top))] pb-3 border-b border-black/10 flex flex-wrap items-center justify-between gap-2 shrink-0"},v.default.createElement("div",{className:"flex items-center gap-2"},v.default.createElement("button",{onClick:R,className:"px-3 py-1.5 rounded-xl bg-black/5 hover:bg-black/10 text-xs font-bold flex items-center gap-1 transition"},v.default.createElement(dc,{className:"w-3.5 h-3.5"}),"\u4FDD\u5B58\u9000\u51FA"),v.default.createElement("button",{onClick:()=>Ne(_e=>!_e),className:"px-3 py-1.5 rounded-xl bg-indigo-600/15 text-indigo-800 text-xs font-bold flex items-center gap-1 hover:bg-indigo-600/25 transition"},v.default.createElement(Fr,{className:"w-3.5 h-3.5"}),"\u76EE\u5F55 (",Ue.length,")"),v.default.createElement("h3",{className:"font-bold text-sm truncate max-w-[120px] sm:max-w-xs"},Pe.title)),v.default.createElement("div",{className:"flex items-center gap-1.5"},v.default.createElement("button",{onClick:()=>{xt(_e=>!_e),Ut(!1)},className:"px-2.5 py-1 rounded-xl bg-indigo-600 text-white text-[11px] font-bold flex items-center gap-1 shadow-sm"},tt?v.default.createElement(Lc,{className:"w-3 h-3"}):v.default.createElement(bc,{className:"w-3 h-3"}),v.default.createElement("span",null,tt?"\u7A97\u53E3\u6A21\u5F0F":"\u5168\u5C4F\u6A21\u5F0F")),v.default.createElement("button",{onClick:()=>qe(_e=>_e==="page"?"scroll":"page"),className:"px-2.5 py-1 rounded-xl bg-black/5 text-[11px] font-bold"},me==="page"?"\u{1F4D6} \u7FFB\u9875":"\u{1F4DC} \u6EDA\u52A8"),v.default.createElement("div",{className:"px-2.5 py-1 rounded-xl bg-emerald-600/15 text-emerald-800 text-xs font-bold flex items-center gap-1"},v.default.createElement(hc,{className:"w-3.5 h-3.5"}),v.default.createElement("span",null,String(Math.floor(se/60)).padStart(2,"0"),":",String(se%60).padStart(2,"0"))),v.default.createElement("button",{onClick:()=>ie("paper"),className:"w-6 h-6 rounded-lg bg-[#faf6ed] border border-slate-300"}),v.default.createElement("button",{onClick:()=>ie("mint"),className:"w-6 h-6 rounded-lg bg-[#e8f3ec] border border-slate-300"}),v.default.createElement("button",{onClick:()=>ie("dark"),className:"w-6 h-6 rounded-lg bg-[#181a1f] border border-slate-600"}),v.default.createElement("button",{onClick:()=>He(_e=>Math.max(13,_e-1)),className:"w-6 h-6 rounded-lg bg-black/5 text-xs font-bold"},"A-"),v.default.createElement("button",{onClick:()=>He(_e=>Math.min(24,_e+1)),className:"w-6 h-6 rounded-lg bg-black/5 text-xs font-bold"},"A+"))),Qe&&v.default.createElement("button",{onClick:()=>Ut(!1),className:"fixed top-3 right-3 z-30 px-3 py-1.5 rounded-full bg-black/20 hover:bg-black/35 backdrop-blur-md text-xs font-bold transition"},"\u663E\u793A\u83DC\u5355 \xB7 \u7B2C ",re+1,"/",J," \u9875"),Wt&&v.default.createElement("div",{className:"absolute top-14 left-3 bottom-16 w-64 sm:w-72 bg-white/95 backdrop-blur-md text-slate-800 rounded-2xl shadow-2xl border border-slate-200 z-20 flex flex-col overflow-hidden"},v.default.createElement("div",{className:"p-3 border-b border-slate-100 flex items-center justify-between"},v.default.createElement("span",{className:"text-xs font-bold text-slate-900"},"\u7AE0\u8282\u76EE\u5F55 \xB7 \u70B9\u51FB\u8DF3\u8F6C"),v.default.createElement("button",{onClick:()=>Ne(!1),className:"text-slate-400 hover:text-slate-600"},v.default.createElement(Hr,{className:"w-4 h-4"}))),v.default.createElement("div",{className:"flex-1 overflow-y-auto p-2 space-y-1"},Ue.map((_e,ke)=>v.default.createElement("button",{key:ke,onClick:()=>{oe(Pe.id,_e.page,J),qe("page"),Ne(!1),B(`\u5DF2\u8DF3\u8F6C\u81F3\uFF1A${_e.title}`,"info")},className:`w-full text-left px-3 py-2 rounded-xl text-xs transition flex items-center justify-between gap-2 ${re>=_e.page?"bg-indigo-50 text-indigo-800 font-bold":"hover:bg-slate-100 text-slate-700"}`},v.default.createElement("span",{className:"truncate"},_e.title),v.default.createElement("span",{className:"text-[10px] text-slate-400 shrink-0"},"\u7B2C",_e.page+1,"\u9875"))))),v.default.createElement("div",{ref:zt,onTouchStart:_e=>{ia.current=_e.touches[0].clientX},onTouchEnd:_e=>{if(ia.current===null||me!=="page")return;let ke=_e.changedTouches[0].clientX-ia.current;ia.current=null,Math.abs(ke)>45&&(ke<0?oe(Pe.id,re+1,J):oe(Pe.id,re-1,J))},onClick:_e=>{if(!(_e.target.closest("button")||_e.target.closest("input"))){if(me==="page"){let ke=_e.currentTarget.getBoundingClientRect(),jt=(_e.clientX-ke.left)/ke.width;if(jt<.28){oe(Pe.id,re-1,J);return}if(jt>.72){oe(Pe.id,re+1,J);return}}tt&&Ut(ke=>!ke)}},className:`flex-1 ${me==="page"?"overflow-hidden":"overflow-y-auto"} px-5 sm:px-14 pt-[max(20px,env(safe-area-inset-top))] pb-4 sm:py-8 leading-loose relative select-none flex flex-col justify-between`,style:{fontSize:`${Te}px`}},v.default.createElement("div",{className:"max-w-3xl w-full mx-auto flex-1 flex flex-col justify-between"},me==="page"?v.default.createElement(v.default.Fragment,null,v.default.createElement("div",{className:"space-y-3 text-justify overflow-hidden"},I[re].map((_e,ke)=>v.default.createElement("p",{key:ke,className:"indent-8"},_e))),v.default.createElement("div",{className:"pt-3 mt-2 border-t border-black/10 flex items-center justify-between gap-2 text-xs shrink-0"},v.default.createElement("button",{disabled:re<=0,onClick:()=>oe(Pe.id,re-1,J),className:"px-3 py-2 rounded-xl bg-black/10 hover:bg-black/15 disabled:opacity-30 font-bold transition whitespace-nowrap shrink-0"},"\u2190 \u4E0A\u4E00\u9875"),v.default.createElement("div",{className:"flex-1 min-w-0 max-w-xs flex items-center gap-1.5"},v.default.createElement("input",{type:"range",min:0,max:Math.max(0,J-1),value:re,onChange:_e=>oe(Pe.id,Number(_e.target.value),J),className:"flex-1 min-w-0 accent-indigo-600"}),v.default.createElement("span",{className:"font-bold whitespace-nowrap text-[11px] shrink-0"},re+1,"/",J)),v.default.createElement("button",{disabled:re>=J-1,onClick:()=>oe(Pe.id,re+1,J),className:"px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-30 text-white font-bold transition whitespace-nowrap shrink-0"},"\u4E0B\u4E00\u9875 \u2192"))):v.default.createElement("div",{className:"space-y-5 text-justify"},Pe.content.map((_e,ke)=>v.default.createElement("p",{key:ke,className:"indent-8"},_e))))),!Qe&&v.default.createElement("div",{className:"px-4 py-3 border-t border-black/10 flex flex-wrap items-center justify-between gap-2 text-xs shrink-0"},v.default.createElement("div",{className:"flex items-center gap-2"},v.default.createElement("span",null,"\u5DF2\u81EA\u52A8\u4FDD\u5B58\u8FDB\u5EA6\uFF1A",v.default.createElement("strong",null,Pe.progress,"%")),v.default.createElement("button",{onClick:()=>{oe(Pe.id,Math.min(J-1,re+1),J),ne(25,25,"\u9605\u8BFB\u8FDB\u5EA6\u5DF2\u4FDD\u5B58\uFF0C\u83B7\u5F97 +25 \u91D1\u5E01\u4E0E 1 \u9897\u77FF\u77F3\uFF01",1)},className:"px-3 py-1.5 rounded-xl bg-indigo-600 text-white font-bold"},"\u5B8C\u6210\u672C\u8282\u6253\u5361 (+25\u91D1\u5E01)")),v.default.createElement("div",{className:"flex items-center gap-2 flex-1 max-w-sm"},v.default.createElement("input",{type:"text",value:j,onChange:_e=>ve(_e.target.value),placeholder:"\u8BB0\u4E00\u53E5\u6279\u6CE8...",className:"flex-1 px-3 py-1.5 rounded-xl bg-white/80 border border-black/15 text-slate-800"}),v.default.createElement("button",{onClick:()=>{j.trim()&&(ve(""),B("\u8BFB\u4E66\u6279\u6CE8\u5DF2\u4FDD\u5B58\uFF01","success"))},className:"px-3 py-1.5 rounded-xl bg-amber-600 text-white font-bold"},"\u5B58\u7B14\u8BB0")))))})())}var v,T1,pp,E1=Ge(()=>{v=Gr(as());$L();w1();T1="gapyear_os_react_huqiuyi_v2",pp={coins:120,calories:{target:1550,meals:[{id:1,type:"\u65E9\u5348\u9910 (09:30)",desc:"\u5168\u9EA6\u6B27\u53051\u4E2A + \u6C34\u716E\u86CB2\u4E2A + \u65E0\u7CD6\u9ED1\u5496\u5561",preCal:390,leftoverCal:0,netCal:390,time:"09:35"},{id:2,type:"\u5348\u9910 (12:40)",desc:"\u9EC4\u5BB6\u6E56\u98DF\u5802\uFF1A\u6742\u7CAE\u996D + \u53BB\u76AE\u5364\u9E21\u817F + \u6E05\u7092\u897F\u5170\u82B1",preCal:770,leftoverCal:180,netCal:590,time:"12:45"}]},weights:[{date:"11-17",val:61.8},{date:"11-18",val:61.6},{date:"11-19",val:61.5},{date:"11-20",val:61.3},{date:"11-21",val:61.2},{date:"11-22",val:61.1},{date:"11-23",val:61}],schedules:[{id:1,time:"09:00 - 09:40",title:"\u6668\u8D77\u7A7A\u8179\u79F0\u91CD + \u6E29\u6C34\u5524\u9192 + \u9AD8\u86CB\u767D\u65E9\u5348\u9910",tag:"\u4F5C\u606F\u4E0E\u51CF\u8102",color:"emerald",done:!0},{id:2,time:"10:00 - 11:50",title:"\u96C5\u601D\u6838\u5FC3\u8BCD 50\u4E2A + \u5730\u5927\u9EC4\u7231\u6B66\u8001\u5E08\u8BFE\u9898\u7EC4\u6587\u732E\u7CBE\u8BFB",tag:"\u79D1\u7814\u4E0E\u96C5\u601D",color:"sky",done:!0},{id:3,time:"14:00 - 17:40",title:"\u3010\u7B2C13\u5468\u5468\u4E00\u3011\u300A\u591A\u5A92\u4F53\u8BBE\u8BA12\u300B\u8FDE\u5802\uFF08\u6559\u4E00\u697C\u4E8C\u533A603\uFF09",tag:"\u7B2C13\u5468\u8BFE\u8868",color:"indigo",done:!1},{id:4,time:"18:10 - 19:10",title:"\u3010\u7B2C13\u5468\u5468\u4E00\u3011\u4E0B\u8BFE\u987A\u8DEF\u7EC3\u80CC\u80A9 + \u722C\u576125\u5206\u949F",tag:"61kg\u51CF\u8102",color:"rose",done:!1},{id:5,time:"23:30 - 00:45",title:"\u7761\u524D\u6C89\u6D78\u9605\u8BFB\uFF1A\u300A\u4E09\u53F6\u866B\u6F14\u5316\u53F2\u300B\uFF0801:30\u524D\u51C6\u5907\u5165\u7761\uFF09",tag:"\u9605\u8BFB\u4E60\u60EF",color:"amber",done:!1}],ddls:[{id:1,title:"\u7B2C13\u5468\u8D77\uFF1A\u5468\u4E00/\u4E09/\u4E94 14:00-17:40\u300A\u591A\u5A92\u4F53\u8BBE\u8BA12\u300B",due:"\u6559\u4E00\u697C\u4E8C\u533A 603",urgent:!0},{id:2,title:"\u6BD5\u4E1A\u8BBE\u8BA1(\u8BBA\u6587)\u63A8\u8FDB\uFF08\u6559\u4E00\u697C\u4E8C\u533A507\uFF09",due:"\u7B2C13-15\u5468\u91CD\u70B9",urgent:!1}],weekPlan:[{day:"\u5468\u4E00 (11.23)",classes:["14:00-17:40 \u591A\u5A92\u4F53\u8BBE\u8BA12 (\u6559\u4E00\u4E8C\u533A603)","\u6BD5\u4E1A\u8BBE\u8BA1(\u8BBA\u6587) (\u6559\u4E00\u4E8C\u533A507\xB7\u81EA\u4E3B)"],workout:"18:10 \u4E0B\u8BFE\u987A\u8DEF\uFF1A\u7F8E\u80CC\u76F4\u89D2\u80A9 + \u722C\u576125m",isWorkout:!0,done:!1},{day:"\u5468\u4E8C (11.24)",classes:["\u5168\u5929\u65E0\u5750\u73ED\u8BFE \xB7 \u6BD5\u4E1A\u8BBE\u8BA1\u81EA\u4E3B\u63A8\u8FDB"],workout:"\u79D1\u7814\u6587\u732E + \u96C5\u601D\u7CBE\u542C\u8BAD\u7EC3",isWorkout:!1,done:!1},{day:"\u5468\u4E09 (11.25)",classes:["14:00-17:40 \u591A\u5A92\u4F53\u8BBE\u8BA12 (\u6559\u4E00\u4E8C\u533A603)","\u6BD5\u4E1A\u8BBE\u8BA1(\u8BBA\u6587) (\u6559\u4E00\u4E8C\u533A507\xB7\u81EA\u4E3B)"],workout:"18:10 \u4E0B\u8BFE\u987A\u8DEF\uFF1A\u871C\u6843\u81C0\u817F\u5851\u5F62 + \u692D\u5706\u673A",isWorkout:!0,done:!1},{day:"\u5468\u56DB (11.26)",classes:["\u5168\u5929\u65E0\u5750\u73ED\u8BFE \xB7 \u6BD5\u4E1A\u8BBE\u8BA1\u81EA\u4E3B\u63A8\u8FDB"],workout:"\u65E5\u8BED\u8DDF\u8BFB + 3D\u5EFA\u6A21\u5DE5\u4F5C\u53F0",isWorkout:!1,done:!1},{day:"\u5468\u4E94 (11.27)",classes:["14:00-17:40 \u591A\u5A92\u4F53\u8BBE\u8BA12 (\u6559\u4E00\u4E8C\u533A603)","\u6BD5\u4E1A\u8BBE\u8BA1(\u8BBA\u6587) (\u6559\u4E00\u4E8C\u533A507\xB7\u81EA\u4E3B)"],workout:"18:10 \u4E0B\u8BFE\u987A\u8DEF\uFF1A\u6838\u5FC3\u9A6C\u7532\u7EBF + \u62C9\u4F38\u653E\u677E",isWorkout:!0,done:!1},{day:"\u5468\u516D (11.28)",classes:[],workout:"\u5468\u672B\u6237\u5916\u6563\u6B65 / \u6B3A\u9A97\u9910\u5FAE\u8C03",isWorkout:!1,done:!1},{day:"\u5468\u65E5 (11.29)",classes:["20:30-22:10 \u6B4C\u58F0\u4E2D\u7684\u515A\u53F2Z (\u667A\u6167\u6811)"],workout:"\u5468\u4F53\u91CD\u590D\u76D8 + \u7761\u524D\u6C89\u6D78\u9605\u8BFB",isWorkout:!1,done:!1}],wallet:{budget:1500,expenses:[{id:1,title:"\u6B66\u79D1\u5927\u9EC4\u5BB6\u6E56\u98DF\u5802\u9910\u996E\u6C47\u603B",amount:412.5,category:"\u5065\u5EB7\u9910\u996E",date:"\u672C\u6708\u7D2F\u8BA1"},{id:2,title:"\u8D2D\u4E70\u300A\u4E09\u53F6\u866B\u6F14\u5316\u53F2\u300B\u53CA\u5730\u8D28\u4E13\u4E1A\u4E66",amount:148,category:"\u4E66\u7C4D\u5B66\u4E60",date:"11-18"},{id:3,title:"\u5065\u8EAB\u8865\u5242\u4E0E\u65E0\u7CD6\u9ED1\u5496\u5561",amount:126,category:"\u5065\u8EAB\u8FD0\u52A8",date:"11-15"},{id:4,title:"\u65E5\u5E38\u62A4\u80A4\u4E0E\u751F\u6D3B\u7528\u54C1",amount:118,category:"\u65E5\u7528\u670D\u9970",date:"11-12"},{id:5,title:"\u4F4E\u5361\u96F6\u98DF\u4E0E\u4EE3\u7CD6\u996E\u54C1",amount:38,category:"\u96F6\u98DF\u996E\u6599",date:"11-20"}],rewards:[{id:1,title:"\u65E0\u7F6A\u6076\u611F\u5468\u672B\u653E\u7EB5\u7F8E\u98DF\u4E00\u987F",cost:150,icon:"\u{1F35C}",redeemed:0},{id:2,title:"\u5165\u624B\u4E00\u672C\u5FC3\u4EEA\u7684\u53E4\u751F\u7269/\u8BBE\u8BA1\u753B\u518C",cost:200,icon:"\u{1F4DA}",redeemed:0},{id:3,title:"\u6E05\u7A7A\u8D2D\u7269\u8F66\u4E00\u4EF6\u5FC3\u613F\u597D\u7269 (\u2264150\u5143)",cost:350,icon:"\u{1F6CD}\uFE0F",redeemed:0},{id:4,title:"\u61D2\u89C9\u8C41\u514D\u5238\uFF08\u5468\u672B\u7761\u5230\u81EA\u7136\u9192\uFF09",cost:80,icon:"\u{1F6CC}",redeemed:0}]},bookCategories:["\u5730\u5927\u4E13\u4E1A","\u53E4\u751F\u7269\u79D1\u666E","\u96C5\u601D\u65E5\u8BED","3D\u4E0E\u5F00\u53D1","\u827A\u672F\u8BBE\u8BA1"],readingStats:{totalSeconds:0,streakDays:0,lastReadDate:"",periods:{morning:0,evening:0,night:0}},books:[{id:1,title:"\u5DE5\u7A0B\u5730\u8D28\u5B66\u539F\u7406\uFF08\u5730\u5927\u9EC4\u7231\u6B66\u7EC4\u8854\u63A5\uFF09",author:"\u4E2D\u56FD\u5730\u8D28\u5927\u5B66\u51FA\u7248\u793E",category:"\u5730\u5927\u4E13\u4E1A",progress:0,currentPage:0,readMins:0,coverBg:"from-emerald-600 to-teal-800",content:["\u7B2C\u4E00\u7AE0 \u5DE5\u7A0B\u5730\u8D28\u5B66\u7684\u7814\u7A76\u5BF9\u8C61\u4E0E\u4EFB\u52A1","\u5DE5\u7A0B\u5730\u8D28\u5B66\u662F\u7814\u7A76\u4E0E\u4EBA\u7C7B\u5DE5\u7A0B\u5EFA\u7B51\u6D3B\u52A8\u6709\u5173\u7684\u5730\u8D28\u95EE\u9898\u7684\u5B66\u79D1\u3002\u5BF9\u4E8E\u5373\u5C06\u8FDB\u5165\u4E2D\u56FD\u5730\u8D28\u5927\u5B66\uFF08\u6B66\u6C49\uFF09\u9EC4\u7231\u6B66\u8001\u5E08\u8BFE\u9898\u7EC4\u5F00\u5C55\u7814\u7A76\u751F\u5B66\u4E60\u7684\u4F60\u800C\u8A00\uFF0C\u638C\u63E1\u5CA9\u571F\u4F53\u7269\u7406\u529B\u5B66\u6027\u8D28\u4E0E\u5730\u8D28\u707E\u5BB3\u9632\u6CBB\u662F\u6838\u5FC3\u57FA\u77F3\u3002","\u7B2C\u4E8C\u7AE0 \u5CA9\u571F\u4F53\u7684\u5DE5\u7A0B\u5730\u8D28\u6027\u8D28","\u5CA9\u77F3\u7684\u7269\u7406\u6027\u8D28\u5305\u62EC\u5BC6\u5EA6\u3001\u5B54\u9699\u7387\u3001\u5438\u6C34\u6027\u4E0E\u8F6F\u5316\u6027\u3002\u5728\u91CE\u5916\u5730\u8D28\u52D8\u5BDF\u4E2D\uFF0C\u7ED3\u6784\u9762\u7684\u53D1\u80B2\u7A0B\u5EA6\u5F80\u5F80\u51B3\u5B9A\u4E86\u8FB9\u5761\u4E0E\u5730\u4E0B\u5DE5\u7A0B\u7684\u7A33\u5B9A\u6027\u3002\u5229\u7528\u5927\u56DB\u4FDD\u7814\u540E\u7684\u7A7A\u6863\u671F\uFF0C\u6BCF\u5929\u82B1 40 \u5206\u949F\u7CBE\u8BFB\u57FA\u7840\u6982\u5FF5\uFF0C\u660E\u5E74\u4E5D\u6708\u5165\u5B66\u5373\u53EF\u76F4\u63A5\u4E0A\u624B\u8BFE\u9898\u5B9E\u9A8C\uFF01"]},{id:2,title:"\u4E09\u53F6\u866B\uFF01\u6F14\u5316\u53F2\u4E0A\u7684\u8FDC\u53E4\u76D4\u7532\u6B66\u58EB",author:"\u7406\u67E5\u5FB7\xB7\u798F\u8482",category:"\u53E4\u751F\u7269\u79D1\u666E",progress:0,currentPage:0,readMins:0,coverBg:"from-amber-600 to-orange-800",content:["\u7B2C\u4E00\u7AE0 \u5BD2\u6B66\u7EAA\u6D77\u6D0B\u7684\u9738\u4E3B","\u5728\u8DDD\u4ECA\u7EA65.21\u4EBF\u5E74\u524D\u7684\u5BD2\u6B66\u7EAA\u751F\u547D\u5927\u7206\u53D1\u65F6\u671F\uFF0C\u4E09\u53F6\u866B\u5C31\u5DF2\u7ECF\u62AB\u7740\u65B9\u89E3\u77F3\u6784\u6210\u7684\u590D\u773C\u548C\u575A\u786C\u80CC\u7532\uFF0C\u5728\u8FDC\u53E4\u6D77\u6D0B\u4E2D\u7E41\u884D\u751F\u606F\u4E86\u3002","\u7B2C\u4E8C\u7AE0 \u65B9\u89E3\u77F3\u6676\u4F53\u590D\u773C\u7684\u5965\u79D8","\u6700\u4EE4\u4EBA\u60CA\u53F9\u7684\u662F\u4E09\u53F6\u866B\u7684\u65B9\u89E3\u77F3\u6676\u4F53\u590D\u773C\u2014\u2014\u8FD9\u662F\u5730\u7403\u751F\u547D\u53F2\u4E0A\u6700\u65E9\u6F14\u5316\u51FA\u7684\u7CBE\u5BC6\u5149\u5B66\u7CFB\u7EDF\u4E4B\u4E00\uFF0C\u80FD\u591F\u6D88\u9664\u6C34\u4E0B\u7684\u7403\u9762\u50CF\u5DEE\u3002"]},{id:3,title:"\u5251\u6865\u96C5\u601D\u771F\u9898 18 \u5B66\u672F\u7C7B\u7CBE\u8BB2",author:"Cambridge Press",category:"\u96C5\u601D\u65E5\u8BED",progress:0,currentPage:0,readMins:0,coverBg:"from-sky-600 to-blue-800",content:["Chapter 1 \u5730\u8D28\u4E0E\u73AF\u5883\u9AD8\u9891\u5B66\u672F\u8BCD\u6C47","Section 4 \u5B66\u672F\u8BB2\u5EA7\u9AD8\u9891\u573A\u666F\u8BCD\u6C47\uFF1Ageological formation\uFF08\u5730\u8D28\u6784\u9020\uFF09\u3001sedimentation\uFF08\u6C89\u79EF\u4F5C\u7528\uFF09\u3001fossil record\uFF08\u5316\u77F3\u8BB0\u5F55\uFF09\u2014\u2014\u8FD9\u4E9B\u8BCD\u6C47\u4E0E\u4F60\u7684\u5730\u5B66\u80CC\u666F\u5929\u7136\u5951\u5408\uFF01"]},{id:4,title:"\u516C\u5171\u7A7A\u95F4\u8425\u9020\u4E0E\u53C2\u6570\u5316\u4E09\u7EF4\u88C5\u7F6E\u8BBE\u8BA1",author:"\u73AF\u5883\u827A\u672F\u8BBE\u8BA1\u6559\u7814\u5BA4",category:"\u827A\u672F\u8BBE\u8BA1",progress:0,currentPage:0,readMins:0,coverBg:"from-purple-600 to-indigo-800",content:["\u7B2C1\u8282 \u6821\u56ED\u516C\u5171\u7A7A\u95F4\u53D9\u4E8B\u4E0E\u4E92\u52A8\u88C5\u7F6E","\u7ED3\u5408\u4F60\u7B2C16\u5468\u5373\u5C06\u5F00\u59CB\u7684\u300A\u516C\u5171\u7A7A\u95F4\u8425\u9020\u300B\u8BFE\u7A0B\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u5728 Blender \u4E2D\u642D\u5EFA\u53EF\u4EA4\u4E92\u7684\u6821\u56ED\u516C\u5171\u827A\u672F\u88C5\u7F6E\u6A21\u578B\uFF0C\u5E76\u901A\u8FC7 Three.js \u5D4C\u5165\u7F51\u9875\u8FDB\u884C\u591A\u89D2\u5EA6\u5C55\u793A\u3002"]}],pet:{species:"trilobite",name:"\u4E09\u53F6\u866B\xB7\u56E2\u5B50",emoji:"\u{1FAB2}",level:5,exp:410,maxExp:500,food:4}}});var kD=Ci(()=>{var R1=Gr(as()),D1=Gr(ub());E1();(0,D1.createRoot)(document.getElementById("root")).render(R1.default.createElement(F0,null))});export default kD();
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
