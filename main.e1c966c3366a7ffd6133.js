!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=123)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(62))},function(t,e,n){var r=n(0),o=n(13),i=n(36),c=n(58),a=r.Symbol,u=o("wks");t.exports=function(t){return u[t]||(u[t]=c&&a[t]||(c?a:i)("Symbol."+t))}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(8),o=n(40),i=n(5),c=n(18),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(0),o=n(22).f,i=n(9),c=n(16),a=n(23),u=n(54),s=n(48);t.exports=function(t,e){var n,f,l,p,v,d=t.target,h=t.global,y=t.stat;if(n=h?r:y?r[d]||a(d,{}):(r[d]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(v=o(n,f))&&v.value:n[f],!s(h?f:d+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(n,f,p,t)}}},function(t,e,n){var r=n(2);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(8),o=n(6),i=n(17);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"f",(function(){return o})),n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u}));var r="5ec581f3ec334307ac4c68f31dfcca51",o="https://praktikum.tk/news/v2/everything",i=7,c="Eparfenova",a="news-analytics",u="https://api.github.com"},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(37),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(28),o=n(63);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.4.1",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(32),o=n(27);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(55),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){var r=n(0),o=n(13),i=n(9),c=n(4),a=n(23),u=n(41),s=n(34),f=s.get,l=s.enforce,p=String(u).split("toString");o("inspectSource",(function(t){return u.call(t)})),(t.exports=function(t,e,n,o){var u=!!o&&!!o.unsafe,s=!!o&&!!o.enumerable,f=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof e||c(n,"name")||i(n,"name",e),l(n).source=p.join("string"==typeof e?e:"")),t!==r?(u?!f&&t[e]&&(s=!0):delete t[e],s?t[e]=n:i(t,e,n)):s?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u.call(this)}))},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(3);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(11);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(27);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(8),o=n(53),i=n(17),c=n(14),a=n(18),u=n(4),s=n(40),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=c(t),e=a(e,!0),s)try{return f(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(0),o=n(9);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e){t.exports={}},function(t,e,n){var r=n(2),o=n(1),i=n(30),c=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[];return(e.constructor={})[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(50),n(74);var r=n(10);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,i;return e=t,i=[{key:"formatDate",value:function(){var t=new Date;return t.setDate(t.getDate()-r.d),"".concat(t.toISOString().slice(0,10))}},{key:"sliceDate",value:function(t){return new Date(t).toLocaleString("ru-ru",{year:"numeric",month:"long",day:"numeric"})}},{key:"getAnalyticsDate",value:function(t){var e=new Date(t),n=e.getDay(),r=e.getDate();return"".concat(r,", ").concat(["вс","пн","вт","ср","чт","пт","сб"][n])}}],(n=null)&&o(e.prototype,n),i&&o(e,i),t}()},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e){t.exports=!1},function(t,e,n){var r=n(21);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r,o,i=n(0),c=n(51),a=i.process,u=a&&a.versions,s=u&&u.v8;s?o=(r=s.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e){t.exports={}},function(t,e,n){var r=n(2),o=n(11),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(0),o=n(3),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e,n){var r,o,i,c=n(64),a=n(0),u=n(3),s=n(9),f=n(4),l=n(35),p=n(24),v=a.WeakMap;if(c){var d=new v,h=d.get,y=d.has,g=d.set;r=function(t,e){return g.call(d,t,e),e},o=function(t){return h.call(d,t)||{}},i=function(t){return y.call(d,t)}}else{var m=l("state");p[m]=!0,r=function(t,e){return s(t,m,e),e},o=function(t){return f(t,m)?t[m]:{}},i=function(t){return f(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(13),o=n(36),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){"use strict";var r=n(18),o=n(6),i=n(17);t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,i(0,n)):t[c]=n}},function(t,e,n){var r=n(8),o=n(2),i=n(33);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(13);t.exports=r("native-function-to-string",Function.toString)},function(t,e,n){var r=n(37),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e,n){var r=n(29),o=n(32),i=n(20),c=n(12),a=n(44),u=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,f=4==t,l=6==t,p=5==t||l;return function(v,d,h,y){for(var g,m,b=i(v),x=o(b),w=r(d,h,3),S=c(x.length),j=0,O=y||a,E=e?O(v,S):n?O(v,0):void 0;S>j;j++)if((p||j in x)&&(m=w(g=x[j],j,b),t))if(e)E[j]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return j;case 2:u.call(E,g)}else if(f)return!1;return l?-1:s||f?f:E}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,e,n){var r=n(3),o=n(19),i=n(1)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.d(e,"a",(function(){return o}));var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.storage=window.localStorage}var e,n,o;return e=t,(n=[{key:"setData",value:function(t,e){this.storage.setItem(t,JSON.stringify(e))}},{key:"getData",value:function(t){return JSON.parse(this.storage.getItem(t))}},{key:"removeData",value:function(t){this.storage.removeItem(t)}},{key:"clearData",value:function(){this.storage.clear()}}])&&r(e.prototype,n),o&&r(e,o),t}()},function(t,e,n){var r=n(47),o=n(38).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(4),o=n(14),i=n(56).indexOf,c=n(24);t.exports=function(t,e){var n,a=o(t),u=0,s=[];for(n in a)!r(c,n)&&r(a,n)&&s.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){var r=n(2),o=/#|\.prototype\./,i=function(t,e){var n=a[c(t)];return n==s||n!=u&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,e,n){var r=n(6).f,o=n(4),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){"use strict";var r=n(7),o=n(2),i=n(19),c=n(3),a=n(20),u=n(12),s=n(39),f=n(44),l=n(25),p=n(1),v=n(30),d=p("isConcatSpreadable"),h=v>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),y=l("concat"),g=function(t){if(!c(t))return!1;var e=t[d];return void 0!==e?!!e:i(t)};r({target:"Array",proto:!0,forced:!h||!y},{concat:function(t){var e,n,r,o,i,c=a(this),l=f(c,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?c:arguments[e],g(i)){if(p+(o=u(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in i&&s(l,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(l,p++,i)}return l.length=p,l}})},function(t,e,n){var r=n(15);t.exports=r("navigator","userAgent")||""},function(t,e,n){var r=n(11),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(4),o=n(65),i=n(22),c=n(6);t.exports=function(t,e){for(var n=o(e),a=c.f,u=i.f,s=0;s<n.length;s++){var f=n[s];r(t,f)||a(t,f,u(e,f))}}},function(t,e,n){t.exports=n(0)},function(t,e,n){var r=n(14),o=n(12),i=n(42),c=function(t){return function(e,n,c){var a,u=r(e),s=o(u.length),f=i(c,s);if(t&&n!=n){for(;s>f;)if((a=u[f++])!=a)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(2);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r=n(15);t.exports=r("document","documentElement")},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e){var n=[][t];return!n||!r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(0),o=n(23),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(0),o=n(41),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,e,n){var r=n(15),o=n(46),i=n(57),c=n(5);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(8),o=n(6).f,i=Function.prototype,c=i.toString,a=/^\s*function ([^ (]*)/;r&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},function(t,e,n){var r=n(1),o=n(31),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,e,n){var r=n(52),o=n(31),i=n(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(5);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},function(t,e,n){var r,o,i,c=n(0),a=n(2),u=n(11),s=n(29),f=n(59),l=n(33),p=n(72),v=c.location,d=c.setImmediate,h=c.clearImmediate,y=c.process,g=c.MessageChannel,m=c.Dispatch,b=0,x={},w=function(t){if(x.hasOwnProperty(t)){var e=x[t];delete x[t],e()}},S=function(t){return function(){w(t)}},j=function(t){w(t.data)},O=function(t){c.postMessage(t+"",v.protocol+"//"+v.host)};d&&h||(d=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return x[++b]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},r(b),b},h=function(t){delete x[t]},"process"==u(y)?r=function(t){y.nextTick(S(t))}:m&&m.now?r=function(t){m.now(S(t))}:g&&!p?(i=(o=new g).port2,o.port1.onmessage=j,r=s(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||a(O)?r="onreadystatechange"in l("script")?function(t){f.appendChild(l("script")).onreadystatechange=function(){f.removeChild(this),w(t)}}:function(t){setTimeout(S(t),0)}:(r=O,c.addEventListener("message",j,!1))),t.exports={set:d,clear:h}},function(t,e,n){var r=n(51);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,e,n){"use strict";var r=n(21),o=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},function(t,e,n){"use strict";var r=n(7),o=n(3),i=n(19),c=n(42),a=n(12),u=n(14),s=n(39),f=n(25),l=n(1)("species"),p=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!f("slice")},{slice:function(t,e){var n,r,f,d=u(this),h=a(d.length),y=c(t,h),g=c(void 0===e?h:e,h);if(i(d)&&("function"!=typeof(n=d.constructor)||n!==Array&&!i(n.prototype)?o(n)&&null===(n=n[l])&&(n=void 0):n=void 0,n===Array||void 0===n))return p.call(d,y,g);for(r=new(void 0===n?Array:n)(v(g-y,0)),f=0;y<g;y++,f++)y in d&&s(r,f,d[y]);return r.length=f,r}})},function(t,e,n){"use strict";var r=n(43).forEach,o=n(60);t.exports=o("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,e,n){var r=n(47),o=n(38);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(5),o=n(78),i=n(38),c=n(24),a=n(59),u=n(33),s=n(35)("IE_PROTO"),f=function(){},l=function(){var t,e=u("iframe"),n=i.length;for(e.style.display="none",a.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;n--;)delete l.prototype[i[n]];return l()};t.exports=Object.create||function(t,e){var n;return null!==t?(f.prototype=r(t),n=new f,f.prototype=null,n[s]=t):n=l(),void 0===e?n:o(n,e)},c[s]=!0},function(t,e,n){var r=n(8),o=n(6),i=n(5),c=n(76);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=c(e),a=r.length,u=0;a>u;)o.f(t,n=r[u++],e[n]);return t}},function(t,e,n){"use strict";var r=n(7),o=n(43).map;r({target:"Array",proto:!0,forced:!n(25)("map")},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var r=n(16),o=n(81),i=Object.prototype;o!==i.toString&&r(i,"toString",o,{unsafe:!0})},function(t,e,n){"use strict";var r=n(52),o={};o[n(1)("toStringTag")]="z",t.exports="[object z]"!==String(o)?function(){return"[object "+r(this)+"]"}:o.toString},function(t,e,n){"use strict";var r,o,i,c,a=n(7),u=n(28),s=n(0),f=n(15),l=n(83),p=n(16),v=n(84),d=n(13),h=n(49),y=n(85),g=n(3),m=n(21),b=n(86),x=n(11),w=n(87),S=n(70),j=n(88),O=n(71).set,E=n(89),C=n(90),T=n(91),P=n(73),L=n(92),k=n(34),_=n(48),A=n(1),D=n(30),M=A("species"),I="Promise",F=k.get,N=k.set,q=k.getterFor(I),R=l,V=s.TypeError,B=s.document,G=s.process,z=d("inspectSource"),H=f("fetch"),K=P.f,W=K,J="process"==x(G),U=!!(B&&B.createEvent&&s.dispatchEvent),$=_(I,(function(){var t=z(R)!==String(R);if(66===D)return!0;if(!t&&!J&&"function"!=typeof PromiseRejectionEvent)return!0;if(u&&!R.prototype.finally)return!0;if(D>=51&&/native code/.test(R))return!1;var e=R.resolve(1),n=function(t){t((function(){}),(function(){}))};return(e.constructor={})[M]=n,!(e.then((function(){}))instanceof n)})),Q=$||!S((function(t){R.all(t).catch((function(){}))})),Y=function(t){var e;return!(!g(t)||"function"!=typeof(e=t.then))&&e},X=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;E((function(){for(var o=e.value,i=1==e.state,c=0;r.length>c;){var a,u,s,f=r[c++],l=i?f.ok:f.fail,p=f.resolve,v=f.reject,d=f.domain;try{l?(i||(2===e.rejection&&nt(t,e),e.rejection=1),!0===l?a=o:(d&&d.enter(),a=l(o),d&&(d.exit(),s=!0)),a===f.promise?v(V("Promise-chain cycle")):(u=Y(a))?u.call(a,p,v):p(a)):v(o)}catch(t){d&&!s&&d.exit(),v(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&tt(t,e)}))}},Z=function(t,e,n){var r,o;U?((r=B.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),s.dispatchEvent(r)):r={promise:e,reason:n},(o=s["on"+t])?o(r):"unhandledrejection"===t&&T("Unhandled promise rejection",n)},tt=function(t,e){O.call(s,(function(){var n,r=e.value;if(et(e)&&(n=L((function(){J?G.emit("unhandledRejection",r,t):Z("unhandledrejection",t,r)})),e.rejection=J||et(e)?2:1,n.error))throw n.value}))},et=function(t){return 1!==t.rejection&&!t.parent},nt=function(t,e){O.call(s,(function(){J?G.emit("rejectionHandled",t):Z("rejectionhandled",t,e.value)}))},rt=function(t,e,n,r){return function(o){t(e,n,o,r)}},ot=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,X(t,e,!0))},it=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw V("Promise can't be resolved itself");var o=Y(n);o?E((function(){var r={done:!1};try{o.call(n,rt(it,t,r,e),rt(ot,t,r,e))}catch(n){ot(t,r,n,e)}})):(e.value=n,e.state=1,X(t,e,!1))}catch(n){ot(t,{done:!1},n,e)}}};$&&(R=function(t){b(this,R,I),m(t),r.call(this);var e=F(this);try{t(rt(it,this,e),rt(ot,this,e))}catch(t){ot(this,e,t)}},(r=function(t){N(this,{type:I,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(R.prototype,{then:function(t,e){var n=q(this),r=K(j(this,R));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=J?G.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&X(this,n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,e=F(t);this.promise=t,this.resolve=rt(it,t,e),this.reject=rt(ot,t,e)},P.f=K=function(t){return t===R||t===i?new o(t):W(t)},u||"function"!=typeof l||(c=l.prototype.then,p(l.prototype,"then",(function(t,e){var n=this;return new R((function(t,e){c.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof H&&a({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return C(R,H.apply(s,arguments))}}))),a({global:!0,wrap:!0,forced:$},{Promise:R}),h(R,I,!1,!0),y(I),i=f(I),a({target:I,stat:!0,forced:$},{reject:function(t){var e=K(this);return e.reject.call(void 0,t),e.promise}}),a({target:I,stat:!0,forced:u||$},{resolve:function(t){return C(u&&this===i?R:this,t)}}),a({target:I,stat:!0,forced:Q},{all:function(t){var e=this,n=K(e),r=n.resolve,o=n.reject,i=L((function(){var n=m(e.resolve),i=[],c=0,a=1;w(t,(function(t){var u=c++,s=!1;i.push(void 0),a++,n.call(e,t).then((function(t){s||(s=!0,i[u]=t,--a||r(i))}),o)})),--a||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=K(e),r=n.reject,o=L((function(){var o=m(e.resolve);w(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},function(t,e,n){var r=n(0);t.exports=r.Promise},function(t,e,n){var r=n(16);t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},function(t,e,n){"use strict";var r=n(15),o=n(6),i=n(1),c=n(8),a=i("species");t.exports=function(t){var e=r(t),n=o.f;c&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},function(t,e,n){var r=n(5),o=n(67),i=n(12),c=n(29),a=n(68),u=n(69),s=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,e,n,f,l){var p,v,d,h,y,g,m,b=c(e,n,f?2:1);if(l)p=t;else{if("function"!=typeof(v=a(t)))throw TypeError("Target is not iterable");if(o(v)){for(d=0,h=i(t.length);h>d;d++)if((y=f?b(r(m=t[d])[0],m[1]):b(t[d]))&&y instanceof s)return y;return new s(!1)}p=v.call(t)}for(g=p.next;!(m=g.call(p)).done;)if("object"==typeof(y=u(p,b,m.value,f))&&y&&y instanceof s)return y;return new s(!1)}).stop=function(t){return new s(!0,t)}},function(t,e,n){var r=n(5),o=n(21),i=n(1)("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||null==(n=r(c)[i])?e:o(n)}},function(t,e,n){var r,o,i,c,a,u,s,f,l=n(0),p=n(22).f,v=n(11),d=n(71).set,h=n(72),y=l.MutationObserver||l.WebKitMutationObserver,g=l.process,m=l.Promise,b="process"==v(g),x=p(l,"queueMicrotask"),w=x&&x.value;w||(r=function(){var t,e;for(b&&(t=g.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},b?c=function(){g.nextTick(r)}:y&&!h?(a=!0,u=document.createTextNode(""),new y(r).observe(u,{characterData:!0}),c=function(){u.data=a=!a}):m&&m.resolve?(s=m.resolve(void 0),f=s.then,c=function(){f.call(s,r)}):c=function(){d.call(l,r)}),t.exports=w||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,c()),i=e}},function(t,e,n){var r=n(5),o=n(3),i=n(73);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){var r=n(0);t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,e,n){"use strict";var r=n(7),o=n(75);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,e,n){var r=n(0),o=n(95),i=n(75),c=n(9);for(var a in o){var u=r[a],s=u&&u.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(t){s.forEach=i}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){"use strict";var r,o,i=n(105),c=RegExp.prototype.exec,a=String.prototype.replace,u=c,s=(r=/a/,o=/b*/g,c.call(r,"a"),c.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),f=void 0!==/()??/.exec("")[1];(s||f)&&(u=function(t){var e,n,r,o,u=this;return f&&(n=new RegExp("^"+u.source+"$(?!\\s)",i.call(u))),s&&(e=u.lastIndex),r=c.call(u,t),s&&r&&(u.lastIndex=u.global?r.index+r[0].length:e),f&&r&&r.length>1&&a.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=u},function(t,e,n){"use strict";var r=n(7),o=n(0),i=n(15),c=n(28),a=n(8),u=n(58),s=n(2),f=n(4),l=n(19),p=n(3),v=n(5),d=n(20),h=n(14),y=n(18),g=n(17),m=n(77),b=n(76),x=n(46),w=n(102),S=n(57),j=n(22),O=n(6),E=n(53),C=n(9),T=n(16),P=n(13),L=n(35),k=n(24),_=n(36),A=n(1),D=n(98),M=n(103),I=n(49),F=n(34),N=n(43).forEach,q=L("hidden"),R=A("toPrimitive"),V=F.set,B=F.getterFor("Symbol"),G=Object.prototype,z=o.Symbol,H=i("JSON","stringify"),K=j.f,W=O.f,J=w.f,U=E.f,$=P("symbols"),Q=P("op-symbols"),Y=P("string-to-symbol-registry"),X=P("symbol-to-string-registry"),Z=P("wks"),tt=o.QObject,et=!tt||!tt.prototype||!tt.prototype.findChild,nt=a&&s((function(){return 7!=m(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=K(G,e);r&&delete G[e],W(t,e,n),r&&t!==G&&W(G,e,r)}:W,rt=function(t,e){var n=$[t]=m(z.prototype);return V(n,{type:"Symbol",tag:t,description:e}),a||(n.description=e),n},ot=u&&"symbol"==typeof z.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},it=function(t,e,n){t===G&&it(Q,e,n),v(t);var r=y(e,!0);return v(n),f($,r)?(n.enumerable?(f(t,q)&&t[q][r]&&(t[q][r]=!1),n=m(n,{enumerable:g(0,!1)})):(f(t,q)||W(t,q,g(1,{})),t[q][r]=!0),nt(t,r,n)):W(t,r,n)},ct=function(t,e){v(t);var n=h(e),r=b(n).concat(ft(n));return N(r,(function(e){a&&!at.call(n,e)||it(t,e,n[e])})),t},at=function(t){var e=y(t,!0),n=U.call(this,e);return!(this===G&&f($,e)&&!f(Q,e))&&(!(n||!f(this,e)||!f($,e)||f(this,q)&&this[q][e])||n)},ut=function(t,e){var n=h(t),r=y(e,!0);if(n!==G||!f($,r)||f(Q,r)){var o=K(n,r);return!o||!f($,r)||f(n,q)&&n[q][r]||(o.enumerable=!0),o}},st=function(t){var e=J(h(t)),n=[];return N(e,(function(t){f($,t)||f(k,t)||n.push(t)})),n},ft=function(t){var e=t===G,n=J(e?Q:h(t)),r=[];return N(n,(function(t){!f($,t)||e&&!f(G,t)||r.push($[t])})),r};(u||(T((z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=_(t),n=function(t){this===G&&n.call(Q,t),f(this,q)&&f(this[q],e)&&(this[q][e]=!1),nt(this,e,g(1,t))};return a&&et&&nt(G,e,{configurable:!0,set:n}),rt(e,t)}).prototype,"toString",(function(){return B(this).tag})),E.f=at,O.f=it,j.f=ut,x.f=w.f=st,S.f=ft,a&&(W(z.prototype,"description",{configurable:!0,get:function(){return B(this).description}}),c||T(G,"propertyIsEnumerable",at,{unsafe:!0})),D.f=function(t){return rt(A(t),t)}),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:z}),N(b(Z),(function(t){M(t)})),r({target:"Symbol",stat:!0,forced:!u},{for:function(t){var e=String(t);if(f(Y,e))return Y[e];var n=z(e);return Y[e]=n,X[n]=e,n},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(f(X,t))return X[t]},useSetter:function(){et=!0},useSimple:function(){et=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!a},{create:function(t,e){return void 0===e?m(t):ct(m(t),e)},defineProperty:it,defineProperties:ct,getOwnPropertyDescriptor:ut}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:st,getOwnPropertySymbols:ft}),r({target:"Object",stat:!0,forced:s((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(d(t))}}),H)&&r({target:"JSON",stat:!0,forced:!u||s((function(){var t=z();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}))},{stringify:function(t,e,n){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=e,(p(e)||void 0!==t)&&!ot(t))return l(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ot(e))return e}),o[1]=e,H.apply(null,o)}});z.prototype[R]||C(z.prototype,R,z.prototype.valueOf),I(z,"Symbol"),k[q]=!0},function(t,e,n){e.f=n(1)},function(t,e,n){"use strict";var r=n(7),o=n(8),i=n(0),c=n(4),a=n(3),u=n(6).f,s=n(54),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};s(p,f);var v=p.prototype=f.prototype;v.constructor=p;var d=v.toString,h="Symbol(test)"==String(f("test")),y=/^Symbol\((.*)\)[^)]+$/;u(v,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=d.call(t);if(c(l,t))return"";var n=h?e.slice(7,-1):e.replace(y,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},,,function(t,e,n){var r=n(14),o=n(46).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(r(t))}},function(t,e,n){var r=n(55),o=n(4),i=n(98),c=n(6).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},function(t,e,n){"use strict";var r=n(7),o=n(96);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,e,n){"use strict";var r=n(5);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";var r=n(107),o=n(5),i=n(27),c=n(108),a=n(109);r("search",1,(function(t,e,n){return[function(e){var n=i(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var i=o(t),u=String(this),s=i.lastIndex;c(s,0)||(i.lastIndex=0);var f=a(i,u);return c(i.lastIndex,s)||(i.lastIndex=s),null===f?-1:f.index}]}))},function(t,e,n){"use strict";var r=n(9),o=n(16),i=n(2),c=n(1),a=n(96),u=c("species"),s=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,l){var p=c(t),v=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),d=v&&!i((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[u]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!v||!d||"replace"===t&&!s||"split"===t&&!f){var h=/./[p],y=n(p,""[t],(function(t,e,n,r,o){return e.exec===a?v&&!o?{done:!0,value:h.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),g=y[0],m=y[1];o(String.prototype,t,g),o(RegExp.prototype,p,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)}),l&&r(RegExp.prototype[p],"sham",!0)}}},function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},function(t,e,n){var r=n(11),o=n(96);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);n(61),n(97),n(99),n(50),n(79),n(66),n(80),n(82);var r=n(26);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.config=e}var e,n,i;return e=t,(n=[{key:"getNews",value:function(t){if(t)return fetch("".concat(this.config.url,"?q=").concat(t,"&from=").concat(r.a.formatDate(),"&sortBy=publishedAt&apiKey=").concat(this.config.apiKey)).then((function(t){return 200!==t.status?Promise.reject("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."):t})).then((function(t){return t.json()})).then((function(t){var e=t.articles;return[].map.call(e,(function(t){return{title:t.title,name:t.source.name,date:r.a.sliceDate(t.publishedAt),description:t.description,imageUrl:t.urlToImage}}))})).catch((function(t){console.log(t)}))}}])&&o(e.prototype,n),i&&o(e,i),t}(),c=n(10);function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=n,this.dataCard=e}var e,n,r;return e=t,(n=[{key:"create",value:function(){var t=document.createElement("div");t.classList.add("result__card");var e=document.createElement("img");e.classList.add("result__img"),e.setAttribute("src","".concat(this.dataCard.imageUrl)),e.setAttribute("alt","Изображение не найдено");var n=document.createElement("div");n.classList.add("result__paragraph");var r=document.createElement("p");r.classList.add("result__date"),r.textContent=this.dataCard.date;var o=document.createElement("h3");o.classList.add("result__subtitle"),o.textContent=this.dataCard.title;var i=document.createElement("p");i.classList.add("result__description"),i.textContent=this.dataCard.description;var c=document.createElement("p");c.classList.add("result__source"),c.textContent=this.dataCard.name,t.appendChild(e),n.appendChild(r),n.appendChild(o),n.appendChild(i),n.appendChild(c),t.appendChild(n),this.card=t}},{key:"getCard",value:function(){return this.card}}])&&a(e.prototype,n),r&&a(e,r),t}();n(93),n(94);function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var f=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=e,this.createCard=n,this.dataStorage=r,this.cardsCount=0}var e,n,r;return e=t,(n=[{key:"addCard",value:function(t){var e=this.createCard(t,this.container);this.container.appendChild(e.getCard())}},{key:"render",value:function(t){this.addCard(t)}},{key:"getCards",value:function(){for(var t=this.cardsCount,e=this.cardsCount+3,n=this.dataStorage.getData("newsData"),r=t;r<e;r++)n&&r<n.length&&this.render(n[r]);this.cardsCount+=3}},{key:"clear",value:function(){this.cardsCount=0,this.container.querySelectorAll(".result__card").forEach((function(t){return t.remove()}))}}])&&s(e.prototype,n),r&&s(e,r),t}(),l=n(45);n(104),n(106);function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var v=function(){function t(e,n,r,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dataStorage=r,this.page=e;var i=this.page.querySelector(".search-content");this.newsApi=n;var c=i.querySelector(".search");this.searchForm=c.querySelector(".search__form"),this.searchInput=this.searchForm.querySelector(".search__input"),this.searchButton=this.searchForm.querySelector(".search__button"),this.preloader=this.page.querySelector(".preloader"),this.notFound=this.page.querySelector(".not-found"),this.result=this.page.querySelector(".result"),this.resultButton=this.result.querySelector(".result__button"),this.cardList=o}var e,n,r;return e=t,(n=[{key:"search",value:function(t){var e=this;t.preventDefault();var n=this.searchInput.value;this.preloader.removeAttribute("style","display: none"),this.result.setAttribute("style","display: none"),this.notFound.setAttribute("style","display: none"),this.cardList.clear(),this.dataStorage.setData("searchText",n),this.newsApi.getNews(n).then((function(t){t&&(0===t.length?(e.notFound.removeAttribute("style","display: none"),e.preloader.setAttribute("style","display: none"),e.result.setAttribute("style","display: none")):(e.dataStorage.setData("newsData",t),e.cardList.getCards(),e.notFound.setAttribute("style","display: none"),e.preloader.setAttribute("style","display: none"),e.result.removeAttribute("style","display: none")))}))}},{key:"getCards",value:function(){this.cardList.getCards()}},{key:"searchInputValidity",value:function(t){t.preventDefault();var e=this.searchForm.querySelector(".search__error");this.searchInput.validity.valid?(this.search(t),e.textContent=""):e.textContent="Это обязательное поле"}},{key:"setEvenListeners",value:function(){var t=this.searchInputValidity.bind(this),e=this.getCards.bind(this);this.searchButton.addEventListener("click",(function(e){t(e)})),this.resultButton.addEventListener("click",e)}}])&&p(e.prototype,n),r&&p(e,r),t}(),d=new i({url:c.f,apiKey:c.e}),h=document.querySelector("#main"),y=new l.a,g=h.querySelector(".result").querySelector(".result__content").querySelector(".result__cards");new v(h,d,y,new f(g,(function(t,e){var n=new u(t,e);return n.create(),n}),y)).setEvenListeners()}]);