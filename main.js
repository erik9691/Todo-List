(()=>{"use strict";var e={56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var m=n(l),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(h);else{var f=o(h,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},208:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([e.id,"*\n{\n    margin: 0;\n    padding: 0;\n    font-family: Roboto, Verdana, Geneva, Tahoma, sans-serif;\n}\n\na\n{\n    text-decoration: none;\n    color: inherit;\n}\nbutton\n{\n    border: none;\n    cursor: pointer;\n}\nbody\n{\n    display: grid;\n    grid-template: 1fr / 1fr 4fr;\n}\ndialog\n{\n    margin: auto;\n    padding: auto;\n}\n\n.sidebar\n{\n    box-sizing: border-box;\n    background-color: #FCF9F7;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    top: 0;\n    position: sticky;\n    z-index: 11;\n    padding: 6% 8% 2% 4%;\n    overflow: scroll;\n    gap: 1rem;\n\n    .header\n    {\n        font-size: 35px;\n        font-weight: 600;\n        margin-top: 1rem;\n    }\n}\n.logo\n{\n    font-size: 40px;\n    font-weight: 600;\n    text-align: center;\n}\n.general-links,.project-links\n{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    padding: 0 1rem 0 0.5rem;\n}\n.sidebar-link\n{\n    font-size: 22px;\n    display: flex;\n    width: 100%;\n    height: 4rem;\n    gap: 5%;\n    align-items: center;\n    background-color: #FCF9F7;\n    border-radius: 8px;\n    padding: 0 1rem;\n\n    img,svg\n    {\n        height: 1.7em;\n        width: 1.7em;\n        pointer-events: none;\n    }\n    p\n    {\n        pointer-events: none;\n    }\n    .remove-project\n    {\n        margin-left: auto;\n    }\n}\n.sidebar-link:hover:not(.selected)\n{\n    filter: brightness(95%);\n}\n.selected\n{\n    background-color: rgb(255, 227, 227);\n}\n.add-project\n{\n    .link-title\n    {\n        font-size: 23px;\n        font-weight: 600;\n        color: rgb(214, 16, 16);\n    }\n}\n\n.content\n{\n    display: flex;\n    flex-direction: column;\n}\n\n.todo-grid\n{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n    gap: 30px;\n    padding: 2% 2%;\n}\n.todo-item\n{\n    border: 2px solid rgb(224, 224, 224);\n    border-radius: 15px;\n    padding: 4% 2%;\n    position: relative;\n    display: flex;\n    align-items: baseline;\n    gap: 1rem;\n\n    .title\n    {\n        font-weight: 500;\n        font-size: 20px;\n        margin-bottom: 0.3rem;\n    }\n    .description\n    {\n        color: rgb(92, 92, 92);\n    }\n    .duedate\n    {\n        color: rgb(214, 16, 16);\n        margin-top: 1rem;\n    }\n    .edit img\n    {\n        position: absolute;\n        bottom: 20px;\n        right: 3%;\n        width: 2em;\n        height: 2em;\n    }\n    .remove img\n    {\n        position: absolute;\n        top: 20px;\n        right: 3.3%;\n        width: 1.6em;\n        height: 1.6em;\n    }\n    .todo-checkbox \n    {\n        min-width: 18px;\n        min-height: 18px;\n        cursor: pointer;\n        appearance: none;\n        border-radius: 50%;\n        border: 1px solid black;\n    }\n    .todo-checkbox:checked\n    {\n        appearance: auto;\n        clip-path: circle(50% at 50% 50%);\n        accent-color: rgb(214, 16, 16);\n    }\n    .text-container \n    {\n        display: flex;\n        flex-direction: column;\n        gap: 5px;\n    }\n}\n\n.sort\n{\n    align-self: flex-end;\n    margin: 2% 6% 2% 0;\n    font-size: 25px;\n    display: flex;\n    align-items: center;\n    gap: 0.5em;\n    cursor: pointer;\n    pointer-events:none;\n\n    img\n    {\n        width: 2em;\n        height: 2em;\n        pointer-events:all;\n    }\n    select\n    {\n        all: unset;\n        font-size: inherit;\n        user-select: none;\n        text-align: right;\n        pointer-events:all;\n    }\n}\n\n.add-icon\n{\n    color: white;\n    background-color: rgb(214, 16, 16);\n    font-size: 30px;\n    width: 1.3em;\n    height: 1.3em;\n    border-radius: 50%;\n    text-align: center;\n    font-weight: 400;    \n}\n.add-todo-button\n{\n    font-size: 60px;\n    position: fixed;\n    bottom: 8%;\n    right: 5%;\n}\n\n.modal\n{\n    padding: 2%;\n    border: 2px solid rgb(175, 175, 175);\n    border-radius: 15px;\n\n    .close-modal-button\n    {\n        position: absolute;\n        top: 2%;\n        right: 3%;\n        color: red;\n        background-color: white;\n        font-weight: 600;\n        font-size: 20px;\n    }\n    form\n    {\n        display: flex;\n        flex-direction: column;\n        input,textarea\n        {\n            margin: 0 0 1em 0;\n            font-size: 20px;\n        }\n        button\n        {\n            color: white;\n            font-weight: 600;\n            font-size: 25px;\n            border-radius: 20px;\n            margin-top: 20px;\n            padding: 0.3em 0;\n            width: 50%;\n            align-self: center;\n            background-color: rgb(214, 16, 16);;\n        }\n    }\n}",""]);const c=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},601:e=>{e.exports=function(e){return e[1]}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0;var r=n(72),o=n.n(r),a=n(825),i=n.n(a),c=n(659),s=n.n(c),d=n(56),u=n.n(d),l=n(540),m=n.n(l),h=n(113),f=n.n(h),p=n(208),g={};g.styleTagTransform=f(),g.setAttributes=u(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=m(),o()(p.A,g),p.A&&p.A.locals&&p.A.locals;let b=[],y=-1,v=-1;class w{static#e=y;index;completed=!1;constructor(e,t,n){this.title=e,this.description=t,this.dueDate=n,this.index=++w.#e}}class x{todos=[];static#e=v;index;color="rgb("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")";constructor(e){this.title=e,this.index=++x.#e}}function S(e){let t;switch(ke){case"added":t="ascending"===we?e.toSorted(((e,t)=>e.index-t.index)):e.toSorted(((e,t)=>t.index-e.index));break;case"date":t="ascending"===we?e.toSorted(((e,t)=>e.dueDate-t.dueDate)):e.toSorted(((e,t)=>t.dueDate-e.dueDate));break;case"completed":t="ascending"===we?e.toSorted(((e,t)=>e.completed-t.completed)):e.toSorted(((e,t)=>t.completed-e.completed))}return t}function k(){localStorage.setItem("storedProject",JSON.stringify(b)),localStorage.setItem("projectIndex",JSON.stringify(y)),localStorage.setItem("todoIndex",JSON.stringify(v))}const M=n.p+"a7fdb5982db167037205.svg",E=n.p+"bef65ca9d35ecb280872.svg",L=n.p+"6b05ab57c12a9113f47e.svg",q=n.p+"130031dcb0ee8a80a89b.svg",D={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function P(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const C={date:P({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:P({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:P({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},T={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function j(e){return(t,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth,o=n?.width?String(n.width):t;r=e.formattingValues[o]||e.formattingValues[t]}else{const t=e.defaultWidth,o=n?.width?String(n.width):e.defaultWidth;r=e.values[o]||e.values[t]}return r[e.argumentCallback?e.argumentCallback(t):t]}}const W={ordinalNumber:(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:j({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:j({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:j({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:j({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:j({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function H(e){return(t,n={})=>{const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(o);if(!a)return null;const i=a[0],c=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(c)?function(e){for(let t=0;t<e.length;t++)if(e[t].test(i))return t}(c):function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&e[t].test(i))return t}(c);let d;return d=e.valueCallback?e.valueCallback(s):s,d=n.valueCallback?n.valueCallback(d):d,{value:d,rest:t.slice(i.length)}}}const N={ordinalNumber:(O={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)},(e,t={})=>{const n=e.match(O.matchPattern);if(!n)return null;const r=n[0],o=e.match(O.parsePattern);if(!o)return null;let a=O.valueCallback?O.valueCallback(o[0]):o[0];return a=t.valueCallback?t.valueCallback(a):a,{value:a,rest:e.slice(r.length)}}),era:H({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:H({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:H({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:H({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:H({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var O;const A={code:"en-US",formatDistance:(e,t,n)=>{let r;const o=D[e];return r="string"==typeof o?o:1===t?o.one:o.other.replace("{{count}}",t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:C,formatRelative:(e,t,n,r)=>T[e],localize:W,match:N,options:{weekStartsOn:0,firstWeekContainsDate:1}};let F={};function Y(){return F}Math.pow(10,8);const z=6048e5,I=Symbol.for("constructDateFrom");function Q(e,t){return"function"==typeof e?e(t):e&&"object"==typeof e&&I in e?e[I](t):e instanceof Date?new e.constructor(t):new Date(t)}function B(e,t){return Q(t||e,e)}function G(e){const t=B(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function J(e,t){const n=B(e,t?.in);return n.setHours(0,0,0,0),n}function X(e,t,n){const[r,o]=function(e,...t){const n=Q.bind(null,e||t.find((e=>"object"==typeof e)));return t.map(n)}(n?.in,e,t),a=J(r),i=J(o),c=+a-G(a),s=+i-G(i);return Math.round((c-s)/864e5)}function $(e,t){const n=B(e,t?.in);return X(n,function(e,t){const n=B(e,t?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}(n))+1}function R(e,t){const n=Y(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,o=B(e,t?.in),a=o.getDay(),i=(a<r?7:0)+a-r;return o.setDate(o.getDate()-i),o.setHours(0,0,0,0),o}function U(e,t){return R(e,{...t,weekStartsOn:1})}function V(e,t){const n=B(e,t?.in),r=n.getFullYear(),o=Q(n,0);o.setFullYear(r+1,0,4),o.setHours(0,0,0,0);const a=U(o),i=Q(n,0);i.setFullYear(r,0,4),i.setHours(0,0,0,0);const c=U(i);return n.getTime()>=a.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function K(e,t){const n=B(e,t?.in),r=+U(n)-+function(e,t){const n=V(e,t),r=Q(t?.in||e,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),U(r)}(n);return Math.round(r/z)+1}function Z(e,t){const n=B(e,t?.in),r=n.getFullYear(),o=Y(),a=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,i=Q(t?.in||e,0);i.setFullYear(r+1,0,a),i.setHours(0,0,0,0);const c=R(i,t),s=Q(t?.in||e,0);s.setFullYear(r,0,a),s.setHours(0,0,0,0);const d=R(s,t);return+n>=+c?r+1:+n>=+d?r:r-1}function _(e,t){const n=B(e,t?.in),r=+R(n,t)-+function(e,t){const n=Y(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,o=Z(e,t),a=Q(t?.in||e,0);return a.setFullYear(o,0,r),a.setHours(0,0,0,0),R(a,t)}(n,t);return Math.round(r/z)+1}function ee(e,t){return(e<0?"-":"")+Math.abs(e).toString().padStart(t,"0")}const te={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return ee("yy"===t?r%100:r,t.length)},M(e,t){const n=e.getMonth();return"M"===t?String(n+1):ee(n+1,2)},d:(e,t)=>ee(e.getDate(),t.length),a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(e,t)=>ee(e.getHours()%12||12,t.length),H:(e,t)=>ee(e.getHours(),t.length),m:(e,t)=>ee(e.getMinutes(),t.length),s:(e,t)=>ee(e.getSeconds(),t.length),S(e,t){const n=t.length,r=e.getMilliseconds();return ee(Math.trunc(r*Math.pow(10,n-3)),t.length)}},ne={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){const t=e.getFullYear(),r=t>0?t:1-t;return n.ordinalNumber(r,{unit:"year"})}return te.y(e,t)},Y:function(e,t,n,r){const o=Z(e,r),a=o>0?o:1-o;return"YY"===t?ee(a%100,2):"Yo"===t?n.ordinalNumber(a,{unit:"year"}):ee(a,t.length)},R:function(e,t){return ee(V(e),t.length)},u:function(e,t){return ee(e.getFullYear(),t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return ee(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return ee(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return te.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return ee(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const o=_(e,r);return"wo"===t?n.ordinalNumber(o,{unit:"week"}):ee(o,t.length)},I:function(e,t,n){const r=K(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):ee(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getDate(),{unit:"date"}):te.d(e,t)},D:function(e,t,n){const r=$(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):ee(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const o=e.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return ee(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const o=e.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return ee(a,t.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),o=0===r?7:r;switch(t){case"i":return String(o);case"ii":return ee(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let o;switch(o=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let o;switch(o=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){let t=e.getHours()%12;return 0===t&&(t=12),n.ordinalNumber(t,{unit:"hour"})}return te.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getHours(),{unit:"hour"}):te.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):ee(r,t.length)},k:function(e,t,n){let r=e.getHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):ee(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):te.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getSeconds(),{unit:"second"}):te.s(e,t)},S:function(e,t){return te.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return oe(r);case"XXXX":case"XX":return ae(r);default:return ae(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return oe(r);case"xxxx":case"xx":return ae(r);default:return ae(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+re(r,":");default:return"GMT"+ae(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+re(r,":");default:return"GMT"+ae(r,":")}},t:function(e,t,n){return ee(Math.trunc(+e/1e3),t.length)},T:function(e,t,n){return ee(+e,t.length)}};function re(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=Math.trunc(r/60),a=r%60;return 0===a?n+String(o):n+String(o)+t+ee(a,2)}function oe(e,t){return e%60==0?(e>0?"-":"+")+ee(Math.abs(e)/60,2):ae(e,t)}function ae(e,t=""){const n=e>0?"-":"+",r=Math.abs(e);return n+ee(Math.trunc(r/60),2)+t+ee(r%60,2)}const ie=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},ce=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},se={p:ce,P:(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return ie(e,t);let a;switch(r){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;default:a=t.dateTime({width:"full"})}return a.replace("{{date}}",ie(r,t)).replace("{{time}}",ce(o,t))}},de=/^D+$/,ue=/^Y+$/,le=["D","DD","YY","YYYY"];function me(e){return!(!((t=e)instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t))&&"number"!=typeof e||isNaN(+B(e)));var t}const he=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,fe=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,pe=/^'([^]*?)'?$/,ge=/''/g,be=/[a-zA-Z]/;function ye(e){const t=e.match(pe);return t?t[1].replace(ge,"'"):e}let ve="project",we="ascending",xe=0,Se=0,ke="added";const Me=document.querySelector(".add-todo-button"),Ee=document.querySelector(".add-todo-modal"),Le=document.querySelector(".close-todo-button"),qe=document.querySelector(".add-todo-form"),De=document.querySelector(".add-project"),Pe=document.querySelector(".add-project-modal"),Ce=document.querySelector(".close-project-button"),Te=document.querySelector(".add-project-form"),je=document.querySelector(".edit-todo-modal"),We=document.querySelector(".close-edit-button"),He=document.querySelector(".edit-todo-form"),Ne=document.querySelectorAll(".sidebar-link"),Oe=document.querySelector(".all-todos"),Ae=document.querySelector(".completed-todos"),Fe=document.querySelector(".today-todos"),Ye=document.querySelector(".upcoming-todos"),ze=document.querySelector("select[name='sortSelect']"),Ie=document.querySelector(".sort-order");function Qe(){Array.from(document.querySelector(".todo-grid").childNodes).forEach((e=>{e.remove()}))}function Be(e){e.addEventListener("click",(function(e){e.preventDefault(),document.querySelectorAll(".sidebar-link").forEach((e=>{e.classList.remove("selected")})),e.target.classList.add("selected")}))}function Ge(){Array.from(document.querySelectorAll(".project-link")).forEach((e=>{e.parentNode.remove()})),b.forEach((e=>{const t=function(e){const t=document.createElement("a"),n=document.createElement("div"),r=document.createElement("p"),o=function(e="black"){const t="http://www.w3.org/2000/svg",n=document.createElementNS(t,"svg");n.setAttribute("xmlns",t),n.setAttribute("viewBox","0 0 24 24");const r=document.createElementNS(t,"title");r.textContent="pound",n.appendChild(r);const o=document.createElementNS(t,"path");return o.setAttribute("d","M5.41,21L6.12,17H2.12L2.47,15H6.47L7.53,9H3.53L3.88,7H7.88L8.59,3H10.59L9.88,7H15.88L16.59,3H18.59L17.88,7H21.88L21.53,9H17.53L16.47,15H20.47L20.12,17H16.12L15.41,21H13.41L14.12,17H8.12L7.41,21H5.41M9.53,9L8.47,15H14.47L15.53,9H9.53Z"),o.setAttribute("fill",e),n.appendChild(o),n}(e.color),a=document.createElement("img"),i=document.createElement("a");return r.innerText=e.title,a.src=M,i.classList.add("remove-project"),i.appendChild(a),n.classList.add("sidebar-link","project-link"),n.appendChild(o),n.appendChild(r),n.appendChild(i),n.id=e.index,t.href="",t.appendChild(n),document.querySelector(".project-links").appendChild(t),function(e){e.querySelector(".remove-project").style.visibility="hidden";const t=document.querySelectorAll(".project-link"),n=function(e){e.target.closest(".project-link").querySelector(".remove-project").style.visibility="visible"},r=function(e){e.target.closest(".project-link").querySelector(".remove-project").style.visibility="hidden"};e.addEventListener("mouseover",n),e.addEventListener("mouseout",r),1===t.length?(e.removeEventListener("mouseover",n),e.removeEventListener("mouseout",r)):2===t.length&&(t[0].addEventListener("mouseover",n),t[0].addEventListener("mouseout",r))}(n),n}(e);Be(t.closest(".sidebar-link")),t.addEventListener("click",(function(e){e.preventDefault(),b.forEach(((t,n)=>{t.index===parseInt(e.target.closest("div").id)&&(xe=n)})),$e()})),t.querySelector(".remove-project").addEventListener("click",(function(e){e.preventDefault(),b.forEach((t=>{var n;t.index===parseInt(e.target.closest("div").id)&&(n=t,b.forEach(((e,t)=>{e.index===n.index&&(b.splice(t,1),Ge())})),k())})),parseInt(e.target.parentElement.id)}))}))}function Je(e){const t=function(e){const t=document.createElement("p"),n=document.createElement("p"),r=document.createElement("p"),o=document.createElement("img"),a=document.createElement("a"),i=document.createElement("img"),c=document.createElement("a"),s=document.createElement("input");t.classList.add("title"),n.classList.add("description"),r.classList.add("duedate"),a.classList.add("edit"),c.classList.add("remove"),s.type="checkbox",s.classList.add("todo-checkbox"),t.innerText=e.title,n.innerText=e.description,r.innerText=function(e,t,n){const r=Y(),o=n?.locale??r.locale??A,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,c=B(e,n?.in);if(!me(c))throw new RangeError("Invalid time value");let s=t.match(fe).map((e=>{const t=e[0];return"p"===t||"P"===t?(0,se[t])(e,o.formatLong):e})).join("").match(he).map((e=>{if("''"===e)return{isToken:!1,value:"'"};const t=e[0];if("'"===t)return{isToken:!1,value:ye(e)};if(ne[t])return{isToken:!0,value:e};if(t.match(be))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}}));o.localize.preprocessor&&(s=o.localize.preprocessor(c,s));const d={firstWeekContainsDate:a,weekStartsOn:i,locale:o};return s.map((r=>{if(!r.isToken)return r.value;const a=r.value;return(!n?.useAdditionalWeekYearTokens&&function(e){return ue.test(e)}(a)||!n?.useAdditionalDayOfYearTokens&&function(e){return de.test(e)}(a))&&function(e,t,n){const r=function(e,t,n){const r="Y"===e[0]?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(e,t,n);if(console.warn(r),le.includes(e))throw new RangeError(r)}(a,t,String(e)),(0,ne[a[0]])(c,a,o.localize,d)})).join("")}(e.dueDate,"d MMM y p"),o.src=E,a.href="",i.src=M,c.href="",s.checked=e.completed;const d=document.createElement("div");d.classList.add("text-container"),d.appendChild(t),d.appendChild(n),d.appendChild(r);const u=document.createElement("div");return u.classList.add("todo-item"),u.appendChild(s),u.appendChild(d),a.appendChild(o),u.appendChild(a),c.appendChild(i),u.appendChild(c),u.id=e.index,document.querySelector(".todo-grid").appendChild(u),function(e){e.querySelector(".edit").style.visibility="hidden",e.querySelector(".remove").style.visibility="hidden",e.addEventListener("mouseover",(function(t){e.querySelector(".edit").style.visibility="visible",e.querySelector(".remove").style.visibility="visible"})),e.addEventListener("mouseout",(function(t){e.querySelector(".edit").style.visibility="hidden",e.querySelector(".remove").style.visibility="hidden"}))}(u),u}(e);t.querySelector(".edit").addEventListener("click",(function(t){t.preventDefault(),je.showModal(),document.querySelector('input[name="editTitle"]').value=e.title,document.querySelector('textarea[name="editDescription"]').value=e.description,document.querySelector('input[name="editDueDate"]').value=e.date,Se=e.id})),t.querySelector(".remove").addEventListener("click",(function(t){var n;t.preventDefault(),n=e,b[xe].todos.forEach(((e,t)=>{e===n&&b[xe].todos.splice(t,1)})),Xe(),k()})),t.querySelector(".todo-checkbox").addEventListener("click",(function(t){var n,r;n=e,r=t.target.checked,b[xe].todos.forEach(((e,t)=>{e===n&&(b[xe].todos[t].completed=r)})),k()}))}function Xe(){switch(ve){case"all":Re();break;case"completed":Ue();break;case"today":Ve();break;case"upcoming":Ke();break;case"project":$e()}}function $e(){ve="project",Qe();const e=[];b[xe].todos.forEach((t=>{e.push(t)})),S(e).forEach((e=>{Je(e)})),Me.style.visibility="visible"}function Re(){ve="all",Qe();const e=[];b.forEach((t=>{t.todos.forEach((t=>{e.push(t)}))})),S(e).forEach((e=>{Je(e)})),Me.style.visibility="hidden"}function Ue(){ve="completed",Qe();const e=[];b.forEach((t=>{t.todos.forEach((t=>{t.completed&&e.push(t)}))})),S(e).forEach((e=>{Je(e)})),Me.style.visibility="hidden"}function Ve(){ve="today",Qe();const e=[];b.forEach((t=>{t.todos.forEach((t=>{0===X(t.dueDate,new Date)&&e.push(t)}))})),S(e).forEach((e=>{Je(e)})),Me.style.visibility="hidden"}function Ke(){ve="upcoming",Qe();const e=[];b.forEach((t=>{t.todos.forEach((t=>{X(t.dueDate,new Date)<7&&X(t.dueDate,new Date)>=0&&e.push(t)}))})),S(e).forEach((e=>{Je(e)})),Me.style.visibility="hidden"}null!==localStorage.getItem("storedProject")&&(b=JSON.parse(localStorage.getItem("storedProject")),Ge()),null!==localStorage.getItem("projectIndex")&&(y=JSON.parse(localStorage.getItem("projectIndex"))),null!==localStorage.getItem("todoIndex")&&(v=JSON.parse(localStorage.getItem("todoIndex"))),Ne.forEach((e=>{e.classList.contains("add-project")||Be(e)})),Me.addEventListener("click",(function(e){Ee.showModal()})),Le.addEventListener("click",(function(e){Ee.close()})),qe.addEventListener("submit",(function(e){e.preventDefault();var t,n,r;t=document.querySelector('input[name="todoTitle"]').value,n=document.querySelector('textarea[name="todoDescription"]').value,r=document.querySelector('input[name="todoDueDate"]').value,b[xe].todos.push(new w(t,n,r)),Xe(),console.log(b),k(),Ee.close(),qe.reset()})),De.addEventListener("click",(function(e){e.preventDefault(),Pe.showModal()})),Ce.addEventListener("click",(function(e){Pe.close()})),Te.addEventListener("submit",(function(e){e.preventDefault();var t;t=document.querySelector('input[name="projectTitle"]').value,b.push(new x(t)),Ge(),k(),Pe.close(),Te.reset()})),We.addEventListener("click",(function(e){je.close()})),He.addEventListener("submit",(function(e){e.preventDefault();const t=document.querySelector('input[name="editTitle"]').value,n=document.querySelector('textarea[name="editDescription"]').value,r=document.querySelector('input[name="editDueDate"]').value;b[xe].todos.forEach((e=>{e.id===Se&&function(e,t,n,r){e.title=t,e.description=n,e.dueDate=r,Xe(),k()}(e,t,n,r)})),je.close(),He.reset()})),Oe.addEventListener("click",(function(e){Re()})),Ae.addEventListener("click",(function(e){Ue()})),Fe.addEventListener("click",(function(e){Ve()})),Ye.addEventListener("click",(function(e){Ke()})),ze.addEventListener("change",(function(e){ke=e.target.value,Xe()})),Ie.addEventListener("click",(function(e){"ascending"===e.target.value?(e.target.value="descending",we=e.target.value,e.target.src=q):(e.target.value="ascending",we=e.target.value,e.target.src=L),Xe()}))})();