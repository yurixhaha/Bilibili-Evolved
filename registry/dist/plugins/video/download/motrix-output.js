!function(o,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/download/motrix-output"]=t():o["video/download/motrix-output"]=t()}(globalThis,(()=>(()=>{"use strict";var o={d:(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o:(o,t)=>Object.prototype.hasOwnProperty.call(o,t)},t={};o.d(t,{plugin:()=>r});const e=coreApis.toast,r={name:"downloadVideo.outputs.motrix",displayName:"下载视频 - Motrix 输出支持",description:"为下载视频增加 Motrix 输出支持.",setup:o=>{let{addData:t}=o;t("downloadVideo.outputs",(o=>{o.push({name:"motrix",displayName:"Motrix",description:"调用 Motrix 下载.",runAction:async o=>{const t=o.infos.flatMap((o=>o.titledFragments));try{const o=new URLSearchParams({uris:t.map((o=>o.url)).join("\n"),referer:document.URL.replace(window.location.search,"")});window.open(`motrix://new-task?${o.toString()}`,"_self")}catch(o){e.Toast.error(String(o),"发生错误")}}})}))},commitHash:"7c8d2d25a7584936f8d774de7ffd253124adf620",coreVersion:"2.9.4"};return t=t.plugin})()));