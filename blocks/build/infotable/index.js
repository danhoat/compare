(()=>{var e,t={426:(e,t,r)=>{"use strict";const n=window.wp.blocks,o=window.wp.element,l=(window.React,window.wp.blockEditor);var a=r(184),s=r.n(a);const i=window.wp.components,u=e=>{let{attributes:t,setAttributes:r}=e;const{numColumns:n}=t;return(0,o.createElement)(l.InspectorControls,null,(0,o.createElement)(i.PanelBody,null,(0,o.createElement)(i.RadioControl,{label:"カラム数",options:[{label:"2カラム",value:"2"},{label:"4カラム",value:"4"}],selected:""+n,onChange:e=>e&&r({numColumns:+e})})))};(0,n.registerBlockType)("qms4/infotable",{edit:function(e){let{clientId:t,attributes:r,setAttributes:n}=e;const{numColumns:a}=r,i=(0,l.useBlockProps)({className:s()("qms4__infotable",`qms4__infotable--num-columns-${a}`)});return(0,o.createElement)("div",i,(0,o.createElement)(u,{attributes:r,setAttributes:n}),(0,o.createElement)(l.InnerBlocks,{allowedBlocks:["qms4/infotable-row"],template:[["qms4/infotable-row",{},[["core/paragraph",{placeholder:"ここにテキストを入力"}]]],["qms4/infotable-row",{},[["core/paragraph",{placeholder:"ここにテキストを入力"}]]],["qms4/infotable-row",{},[["core/paragraph",{placeholder:"ここにテキストを入力"}]]]],renderAppender:()=>(0,o.createElement)(l.ButtonBlockAppender,{rootClientId:t}),orientation:4===a?"horizontal":""}))},save:function(e){let{attributes:t}=e;const{numColumns:r}=t,n=l.useBlockProps.save({className:s()("qms4__infotable",`qms4__infotable--num-columns-${r}`)});return(0,o.createElement)("div",n,(0,o.createElement)(l.InnerBlocks.Content,null))}})},184:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===l)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=(t,r,o,l)=>{if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],l=e[c][2];for(var s=!0,i=0;i<r.length;i++)(!1&l||a>=l)&&Object.keys(n.O).every((e=>n.O[e](r[i])))?r.splice(i--,1):(s=!1,l<a&&(a=l));if(s){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[r,o,l]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={1140:0,5365:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,l,a=r[0],s=r[1],i=r[2],u=0;if(a.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(i)var c=i(n)}for(t&&t(r);u<a.length;u++)l=a[u],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},r=self.webpackChunkqms4=self.webpackChunkqms4||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[5365],(()=>n(426)));o=n.O(o)})();