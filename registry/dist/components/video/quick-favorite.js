!function(A,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/quick-favorite"]=t():A["video/quick-favorite"]=t()}(globalThis,(()=>(()=>{var A={289:(A,t,e)=>{"use strict";e.d(t,{Y:()=>o,d:()=>n});var i=e(952);let n=function(A){return A.Auto="自动",A.Icon="图标",A.IconAndText="图标 + 文字",A}({});const o=(0,i.defineOptionsMetadata)({favoriteFolderID:{defaultValue:0,displayName:"快速收藏夹ID",hidden:!0},showInFavoritePages:{defaultValue:!1,displayName:"在收藏夹播放页面仍然显示"},displayMode:{defaultValue:n.Auto,displayName:"显示方式",dropdownEnum:n}})},589:(A,t,e)=>{var i=e(218)((function(A){return A[1]}));i.push([A.id,'@font-face {\n  font-family: "quick-favorite";\n  src: url("data:application/x-font-ttf;base64,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");\n}\n.quick-favorite[data-v-2e043480] {\n  margin-right: 28px !important;\n  position: relative;\n  font-size: 14px;\n  width: auto !important;\n}\n.quick-favorite .text[data-v-2e043480] {\n  display: inline;\n}\n.quick-favorite.icon-only[data-v-2e043480] {\n  margin-right: max(min(11vw, 11vh) - 117.2px, 6px) !important;\n}\n.quick-favorite.icon-only .text[data-v-2e043480] {\n  display: none;\n}\n@media screen and (max-width: 1340px), (max-height: 750px) {\n.quick-favorite[data-v-2e043480]:not(.icon-and-text) {\n    margin-right: max(min(11vw, 11vh) - 117.2px, 6px) !important;\n}\n.quick-favorite:not(.icon-and-text) .text[data-v-2e043480] {\n    display: none;\n}\n}\n.quick-favorite-icon[data-v-2e043480] {\n  font-family: "quick-favorite" !important;\n  font-size: 28px;\n  display: inline-block;\n  font-style: normal;\n  text-align: center;\n  text-transform: none;\n  line-height: 1;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n}\n@media (min-width: 1681px) {\n.quick-favorite-icon[data-v-2e043480] {\n    font-size: 36px;\n}\n}\n.quick-favorite-icon[data-v-2e043480]:after {\n  content: "\\ea01";\n}\n.video-toolbar-v1 .quick-favorite-icon[data-v-2e043480] {\n  transform: translateY(1px);\n}\n.video-toolbar-left .quick-favorite-icon[data-v-2e043480] {\n  margin-right: 8px;\n}\n.quick-favorite .tip[data-v-2e043480],\n.quick-favorite .select-list[data-v-2e043480] {\n  line-height: normal;\n  position: absolute;\n  top: calc(100% + 8px);\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 1000;\n  background: rgba(0, 0, 0, 0.8666666667);\n  padding: 8px;\n  border-radius: 4px;\n  color: #eee;\n  transition: all 0.2s ease-out;\n  opacity: 0;\n  pointer-events: none;\n}\n.quick-favorite .tip.show[data-v-2e043480],\n.quick-favorite .select-list.show[data-v-2e043480] {\n  opacity: 1;\n  pointer-events: initial;\n}\n.quick-favorite .select-list[data-v-2e043480] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 8px;\n}\n.quick-favorite .select-list > *[data-v-2e043480] {\n  white-space: nowrap;\n}\n.quick-favorite .select-list .lists-loading[data-v-2e043480] {\n  padding: 4px 32px;\n}\n.quick-favorite .select-list .lists[data-v-2e043480] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.quick-favorite .select-list .lists-tip[data-v-2e043480] {\n  color: #aaa;\n  font-size: 12px;\n}',""]),A.exports=i},218:A=>{"use strict";
// eslint-disable-next-line func-names
A.exports=function(A){var t=[];return t.toString=function(){return this.map((function(t){var e=A(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},
// eslint-disable-next-line func-names
t.i=function(A,e,i){"string"==typeof A&&(
// eslint-disable-next-line no-param-reassign
A=[[null,A,""]]);var n={};if(i)for(var o=0;o<this.length;o++){
// eslint-disable-next-line prefer-destructuring
var a=this[o][0];null!=a&&(n[a]=!0)}for(var r=0;r<A.length;r++){var s=[].concat(A[r]);i&&n[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),t.push(s))}},t}},332:(A,t,e)=>{"use strict";var i,n=function(){return void 0===i&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var A={};return function(t){if(void 0===A[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(A){e=null}A[t]=e}return A[t]}}(),a=[];function r(A){for(var t=-1,e=0;e<a.length;e++)if(a[e].identifier===A){t=e;break}return t}function s(A,t){for(var e={},i=[],n=0;n<A.length;n++){var o=A[n],s=t.base?o[0]+t.base:o[0],l=e[s]||0,c="".concat(s," ").concat(l);e[s]=l+1;var d=r(c),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(u)):a.push({identifier:c,updater:g(u,t),references:1}),i.push(c)}return i}function l(A){var t=document.createElement("style"),i=A.attributes||{};if(void 0===i.nonce){var n=e.nc;n&&(i.nonce=n)}if(Object.keys(i).forEach((function(A){t.setAttribute(A,i[A])})),"function"==typeof A.insert)A.insert(t);else{var a=o(A.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,d=(c=[],function(A,t){return c[A]=t,c.filter(Boolean).join("\n")});function u(A,t,e,i){var n=e?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(A.styleSheet)A.styleSheet.cssText=d(t,n);else{var o=document.createTextNode(n),a=A.childNodes;a[t]&&A.removeChild(a[t]),a.length?A.insertBefore(o,a[t]):A.appendChild(o)}}function p(A,t,e){var i=e.css,n=e.media,o=e.sourceMap;if(n?A.setAttribute("media",n):A.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),A.styleSheet)A.styleSheet.cssText=i;else{for(;A.firstChild;)A.removeChild(A.firstChild);A.appendChild(document.createTextNode(i))}}var f=null,v=0;function g(A,t){var e,i,n;if(t.singleton){var o=v++;e=f||(f=l(t)),i=u.bind(null,e,o,!1),n=u.bind(null,e,o,!0)}else e=l(t),i=p.bind(null,e,t),n=function(){!function(A){if(null===A.parentNode)return!1;A.parentNode.removeChild(A)}(e)};return i(A),function(t){if(t){if(t.css===A.css&&t.media===A.media&&t.sourceMap===A.sourceMap)return;i(A=t)}else n()}}A.exports=function(A,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=n());var e=s(A=A||[],t);return function(A){if(A=A||[],"[object Array]"===Object.prototype.toString.call(A)){for(var i=0;i<e.length;i++){var n=r(e[i]);a[n].references--}for(var o=s(A,t),l=0;l<e.length;l++){var c=r(e[l]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}e=o}}}},565:(A,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var i=function(){var A=this,t=A._self._c;A._self._setupProxy;return t("span",{staticClass:"quick-favorite be-quick-favorite video-toolbar-left-item",class:{on:A.isFavorite,...A.displayModeClass},attrs:{title:"快速收藏"},on:{click:function(t){return!t.type.indexOf("key")&&A._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button||t.target!==t.currentTarget?null:A.toggle()},contextmenu:function(t){if(t.preventDefault(),t.target!==t.currentTarget)return null;A.listShowing=!A.listShowing}}},[t("i",{staticClass:"quick-favorite-icon icon",on:{click:function(t){return!t.type.indexOf("key")&&A._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:A.toggle()},contextmenu:function(t){t.preventDefault(),A.listShowing=!A.listShowing}}}),A._v(" "),t("div",{staticClass:"text",on:{click:function(t){return!t.type.indexOf("key")&&A._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:A.toggle()},contextmenu:function(t){t.preventDefault(),A.listShowing=!A.listShowing}}},[A._v("\n    快速收藏\n  ")]),A._v(" "),t("div",{ref:"selectList",staticClass:"select-list",class:{show:A.listShowing}},[t("div",{staticClass:"lists"},[A._v("\n      选择快速收藏夹:\n      "),t("VDropdown",{attrs:{items:A.lists.map((A=>A.title)),"key-mapper":A=>A},scopedSlots:A._u([{key:"item",fn:function({item:t}){return[A._v("\n          "+A._s(t)+"\n        ")]}}]),model:{value:A.selectedFavorite,callback:function(t){A.selectedFavorite=t},expression:"selectedFavorite"}})],1),A._v(" "),t("div",{staticClass:"lists-tip",class:{show:A.listShowing}},[A._v("右键点击快速收藏可再次打开")])]),A._v(" "),t("div",{staticClass:"tip",class:{show:A.tipShowing}},[A._v(A._s(A.tipText))])])};i._withStripped=!0;const n=coreApis.settings,o=coreApis.ajax;var a=e(605);const r=coreApis.utils.log,s=coreApis.toast,l=coreApis.ui;var c=e(289);const{options:d}=(0,n.getComponentSettings)("quickFavorite"),u=Vue.extend({components:{VDropdown:l.VDropdown},data(){const{displayMode:A}=(0,n.getComponentSettings)("outerWatchlater").options;return{aid:unsafeWindow.aid,favoriteTitle:"",isFavorite:!1,tipText:"",tipShowing:!1,tipHandle:0,lists:[],selectedFavorite:"<未选择>",listShowing:!1,displayMode:A}},computed:{displayModeClass(){return{"icon-only":this.displayMode===c.d.Icon,"icon-and-text":this.displayMode===c.d.IconAndText}}},watch:{selectedFavorite(A){if(0===this.lists.length)return;const{lists:t}=this,e=t.find((t=>t.title===A));e?(d.favoriteFolderID=e.id,this.syncFavoriteState()):console.error("list not found in selectedFavorite(value)")},async listShowing(A){if(A&&(document.addEventListener("click",(A=>{const t=this.$el,e=A.target;e===t||t.contains(e)||(this.listShowing=!1)})),0===this.lists.length))try{const A=await(0,o.getJsonWithCredentials)(`https://api.bilibili.com/medialist/gateway/base/created?pn=1&ps=100&up_mid=${(0,a.getUID)()}&is_space=0`);if(0!==A.code)throw new Error(`获取收藏夹列表失败: ${A.message}`);this.lists=lodash.get(A,"data.list",[])}catch(A){(0,r.logError)(A)}}},created(){this.syncFavoriteState(),(0,n.addComponentListener)("quickFavorite.displayMode",(A=>{this.displayMode=A}))},methods:{async syncFavoriteState(){if(0!==d.favoriteFolderID&&this.aid)try{const A=await(0,o.getJsonWithCredentials)(`https://api.bilibili.com/x/v3/fav/folder/created/list-all?type=2&rid=${this.aid}&up_mid=${(0,a.getUID)()}`);if(0!==A.code)throw new Error(`获取收藏状态失败: ${A.message}`);const t=lodash.get(A,"data.list",[]).find((A=>A.id===d.favoriteFolderID));if(void 0===t)return void(d.favoriteFolderID=0);this.isFavorite=Boolean(t.fav_state),this.favoriteTitle=t.title,this.selectedFavorite=t.title}catch(A){(0,r.logError)(A)}},showTip(A){this.tipText=A,this.tipShowing=!0,this.tipHandle&&clearTimeout(this.tipHandle),this.tipHandle=setTimeout((()=>{this.tipShowing=!1}),2e3)},async toggle(){if(0===d.favoriteFolderID)return void(this.listShowing=!0);const A={rid:this.aid,type:2,add_media_ids:"",del_media_ids:"",csrf:(0,a.getCsrf)()};A[this.isFavorite?"del_media_ids":"add_media_ids"]=d.favoriteFolderID.toString();try{await(0,o.postTextWithCredentials)("https://api.bilibili.com/x/v3/fav/resource/deal",Object.entries(A).map((A=>{let[t,e]=A;return`${t}=${e}`})).join("&")),this.isFavorite=!this.isFavorite,this.showTip(this.isFavorite?`已添加至收藏夹: ${this.favoriteTitle}`:`已移出收藏夹: ${this.favoriteTitle}`)}catch(A){s.Toast.error(`快速收藏失败: ${A.message}`,"快速收藏"),console.error(A)}}}});var p=e(332),f=e.n(p),v=e(589),g=e.n(v),h={insert:"head",singleton:!1};f()(g(),h);g().locals;var m=function(A,t,e,i,n,o,a,r){var s,l="function"==typeof A?A.options:A;if(t&&(l.render=t,l.staticRenderFns=e,l._compiled=!0),i&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),a?(s=function(A){(A=A||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(A=__VUE_SSR_CONTEXT__),n&&n.call(this,A),A&&A._registeredComponents&&A._registeredComponents.add(a)},l._ssrRegister=s):n&&(s=r?function(){n.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:n),s)if(l.functional){l._injectStyles=s;var c=l.render;l.render=function(A,t){return s.call(t),c(A,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,s):[s]}return{exports:A,options:l}}(u,i,[],!1,null,"2e043480",null);const y=m.exports},952:A=>{"use strict";A.exports=coreApis.componentApis.define},605:A=>{"use strict";A.exports=coreApis.utils}},t={};function e(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={id:i,exports:{}};return A[i](o,o.exports,e),o.exports}e.n=A=>{var t=A&&A.__esModule?()=>A.default:()=>A;return e.d(t,{a:t}),t},e.d=(A,t)=>{for(var i in t)e.o(t,i)&&!e.o(A,i)&&Object.defineProperty(A,i,{enumerable:!0,get:t[i]})},e.o=(A,t)=>Object.prototype.hasOwnProperty.call(A,t),e.r=A=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})};var i={};return(()=>{"use strict";e.d(i,{component:()=>s});var A=e(952),t=e(605);const n=coreApis.utils.urls,o=coreApis.componentApis.video.videoActions,a=coreApis.observer;var r=e(289);const s=(0,A.defineComponentMetadata)({name:"quickFavorite",displayName:"启用快速收藏",description:{"zh-CN":"启用快速收藏, 在视频页面可以一键收藏到设定的某个收藏夹. 首次启动时或者右键点击快速收藏图标可以配置快速收藏夹. 请注意如果在在收藏夹播放页面仍然显示, 是不会实时同步右侧的播放列表的."},entry:async A=>{let{settings:i}=A;if(n.favoriteListUrls.some(t.matchUrlPattern)&&!i.options.showInFavoritePages)return;if(!(0,t.getUID)())return;const r=await Promise.resolve().then(e.bind(e,565)),s=(0,t.mountVueComponent)(r);await(0,o.addVideoActionButton)((()=>s.$el)),(0,a.videoChange)((()=>{s.aid=unsafeWindow.aid,s.syncFavoriteState()}))},unload:()=>{dqa(".be-quick-favorite").forEach((A=>A.style.display=""))},reload:()=>{dqa(".be-quick-favorite").forEach((A=>A.style.display="inline-block"))},urlInclude:n.videoUrls,tags:[componentsTags.video],options:r.Y,plugin:{displayName:"快速收藏 - 快捷键支持",setup:A=>{let{addData:t}=A;t("keymap.actions",(A=>{A.quickFavorite={displayName:"快速收藏",run:A=>{const{clickElement:t}=A;return t(".be-quick-favorite",A)}}})),t("keymap.presets",(A=>{A.quickFavorite="shift s"}))}},commitHash:"7c8d2d25a7584936f8d774de7ffd253124adf620",coreVersion:"2.9.4"})})(),i=i.component})()));