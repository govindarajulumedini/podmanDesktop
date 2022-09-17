/*! For license information please see 8894e90f.5d8cc981.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[505],{544:function(e,t,r){var n=r(7378),o=r(161);t.Z=function(){function e(){var e;if(document&&document.documentElement){var t=document.documentElement;"dark"===(null==(e=t.dataset)?void 0:e.theme)?(t.classList.add("dark"),setTimeout((function(){t.classList.add("dark")}),100)):(t.classList.remove("dark"),setTimeout((function(){t.classList.remove("dark")}),100))}}return(0,n.useEffect)((function(){o.Z.canUseDOM&&e()}),[o.Z.canUseDOM]),(0,n.useEffect)((function(){if(o.Z.canUseDOM){var t=new MutationObserver((function(t){t.forEach((function(t){("data-rh"===t.attributeName&&"attributes"==t.type||"data-theme"===t.attributeName&&"attributes"==t.type)&&e()}))}));return t.observe(document.documentElement,{attributes:!0,childList:!1,subtree:!1}),function(){t.disconnect()}}}),[o.Z.canUseDOM]),n.createElement("div",null)}},919:function(e,t,r){r.r(t),r.d(t,{MacOSDownloads:function(){return d},default:function(){return p}});var n=r(4305),o=r(3127),i=r(353),a=r(9821),c=r(7378),l=r(544),s=r(1884),u=r(6443),f=r(1417),h=r(1436);function m(){return(m=(0,o.Z)((0,n.Z)().mark((function e(t){var r,o,i,a,c,l,s,u,f,h;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/containers/podman-desktop/releases/latest");case 2:return r=e.sent,e.next=5,r.json();case 5:if(o=e.sent,i=o.assets,1===(a=i.filter((function(e){return e.name.endsWith("-arm64.dmg")}))).length){e.next=10;break}throw new Error("Unable to grab arm64 dmg");case 10:if(c=a[0],1===(l=i.filter((function(e){return e.name.endsWith("-x64.dmg")}))).length){e.next=14;break}throw new Error("Unable to grab x64 dmg");case 14:if(s=l[0],1===(u=i.filter((function(e){return e.name.endsWith(".dmg")&&e.name!==c.name&&e.name!==s.name}))).length){e.next=18;break}throw new Error("Unable to grab unified dmg");case 18:f=u[0],h={version:o.name,universal:f.browser_download_url,x64:s.browser_download_url,arm64:c.browser_download_url},t(h);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){var e=(0,c.useState)({version:"",universal:"",x64:"",arm64:""}),t=e[0],r=e[1];return(0,c.useEffect)((function(){!function(e){m.apply(this,arguments)}(r)}),[]),c.createElement("section",{className:" dark:bg-zinc-900 bg-zinc-100 py-24 dark:text-gray-300 text-gray-700"},c.createElement("div",{className:"w-5/6 mx-auto"},c.createElement("div",{className:"flex rounded-lg bg-zinc-300 dark:bg-zinc-700 bg-opacity-60 p-8 flex-col md:flex-row  "},c.createElement("div",{className:"flex align-middle items-center mb-3 flex-col "},c.createElement(u.G,{size:"8x",icon:f.Av$}),c.createElement("div",{className:"inline-flex items-center justify-center rounded-full  flex-shrink-0"}),c.createElement("h2",{className:" text-lg title-font font-medium"},"macOS")),c.createElement("div",{className:"h-full flex w-full flex-col align-middle items-center"},c.createElement("div",{className:"flex flex-col align-middle items-center"},c.createElement("div",{className:"items-center text-center"},c.createElement("p",{className:"text-base "},c.createElement(u.G,{size:"4x",icon:h.v8y,className:"ml-2"})),c.createElement("p",{className:"text-base "},"Using Brew ?"),c.createElement("p",{className:"text-base dark:text-purple-300 text-purple-700"},c.createElement(u.G,{size:"1x",icon:h.Jw3,className:"mr-2"}),"brew install podman-desktop",c.createElement("button",{title:"Copy To Clipboard",className:"mr-5"}," ",c.createElement(u.G,{size:"xs",icon:h.O4,className:"ml-3  cursor-pointer text-3xl  text-white-500",onClick:function(){navigator.clipboard.writeText("brew install podman-desktop")}})))),c.createElement("div",{className:"pt-8 space-x-4"},c.createElement(s.Z,{className:"no-underline hover:no-underline inline-flex text-white hover:text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-sm",to:t.universal},c.createElement(u.G,{size:"1x",icon:h.q7m,className:"mr-2"}),"universal"),c.createElement(s.Z,{className:"no-underline hover:no-underline inline-flex text-white hover:text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-sm",to:t.x64},c.createElement(u.G,{size:"1x",icon:h.q7m,className:"mr-2"}),"Intel"),c.createElement(s.Z,{className:"no-underline hover:no-underline inline-flex text-white hover:text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-sm",to:t.arm64},c.createElement(u.G,{size:"1x",icon:h.q7m,className:"mr-2"}),"Arm")),c.createElement("div",{className:"font-light mt-4"},"Version ",t.version))))))}function p(){var e=(0,i.Z)().siteConfig;return c.createElement(a.Z,{title:e.title,description:"Downloads for macOS"},c.createElement(l.Z,null),c.createElement("main",{className:"h-screen"},c.createElement(d,null)))}},3127:function(e,t,r){function n(e,t,r,n,o,i,a){try{var c=e[i](a),l=c.value}catch(s){return void r(s)}c.done?t(l):Promise.resolve(l).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function c(e){n(a,o,i,c,l,"next",e)}function l(e){n(a,o,i,c,l,"throw",e)}c(void 0)}))}}r.d(t,{Z:function(){return o}})},4305:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(4923);function o(){o=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(Z){s=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=f(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,a),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(Z){return{type:"throw",arg:Z}}}e.wrap=u;var h={};function m(){}function d(){}function p(){}var v={};s(v,a,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(O([])));g&&g!==t&&r.call(g,a)&&(v=g);var x=p.prototype=m.prototype=Object.create(v);function w(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function o(i,a,c,l){var s=f(e[i],e,a);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==(0,n.Z)(h)&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){o("next",e,c,l)}),(function(e){o("throw",e,c,l)})):t.resolve(h).then((function(e){u.value=e,c(u)}),(function(e){return o("throw",e,c,l)}))}l(s.arg)}var i;this._invoke=function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return i=i?i.then(n,n):n()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=p,s(x,"constructor",p),s(p,"constructor",d),d.displayName=s(p,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,s(e,l,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},w(b.prototype),s(b.prototype,c,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new b(u(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},w(x),s(x,l,"Generator"),s(x,a,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}}}]);