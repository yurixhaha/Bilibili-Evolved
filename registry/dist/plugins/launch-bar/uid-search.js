!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["launch-bar/uid-search"]=t():e["launch-bar/uid-search"]=t()}(globalThis,(()=>(()=>{var e,t,r={272:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=272,e.exports=t},321:e=>{"use strict";e.exports="在输入 UID (用户 ID) 时, 提供对应的跳转选项.\n"}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}};return r[e](i,i.exports,o),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var i=Object.create(null);o.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var c=2&n&&r;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,o.d(i,a),i},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";o.d(i,{plugin:()=>r});const e=coreApis.ajax,t=e=>{const{name:t,displayName:r,description:n,indexer:o,link:i}=e;return{name:t||o,displayName:r,icon:"mdi-open-in-new",indexer:o,description:n,action:()=>{window.open(i,"_blank")},order:0}},r={name:"launchBar.actions.uidSearch",displayName:"搜索栏 - UID 跳转",async setup(r){let{addData:n}=r;n("launchBar.actions",(r=>{r.push({name:"uidSearchProvider",getActions:async r=>{const{match:n,id:o,indexer:i}=((e,t)=>{const r=e.match(t);if(!r)return{};const n=r[1],o=r[2];return{match:r,type:n,id:o,indexer:`${n}${o}`}})(r,/^(uid)(\d+)$/);if(!n)return[];const a=await(0,e.getJson)(`https://api.bilibili.com/x/space/wbi/acc/info?mid=${o}`),{name:c}=lodash.get(a,"data",{});return[t({name:c,description:"用户跳转",link:`https://space.bilibili.com/${o}`,indexer:i})]}})}))},commitHash:"7c8d2d25a7584936f8d774de7ffd253124adf620",coreVersion:"2.9.4",description:(()=>{const e=o(272);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(o.t.bind(o,321,17)).then((e=>e.default))}})()}})(),i=i.plugin})()));