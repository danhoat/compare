(()=>{"use strict";var e,t={496:()=>{const e=window.wp.blocks;function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},t.apply(this,arguments)}const n=window.wp.element,l=(window.React,window.wp.blockEditor),r=window.wp.components,o=e=>{let{attributes:t,setAttributes:o}=e;const{numLinesPc:a,numLinesSp:i}=t;return(0,n.createElement)(l.InspectorControls,null,(0,n.createElement)(r.PanelBody,null,(0,n.createElement)(r.__experimentalToggleGroupControl,{label:"PC 表示行数",value:a,onChange:e=>o({numLinesPc:e}),isBlock:!0},(0,n.createElement)(r.__experimentalToggleGroupControlOption,{value:1,label:"1行"}),(0,n.createElement)(r.__experimentalToggleGroupControlOption,{value:2,label:"2行"}),(0,n.createElement)(r.__experimentalToggleGroupControlOption,{value:3,label:"3行"}),(0,n.createElement)(r.__experimentalToggleGroupControlOption,{value:-1,label:"全行"})),(0,n.createElement)(r.__experimentalToggleGroupControl,{label:"SP 表示行数",value:i,onChange:e=>o({numLinesSp:e}),isBlock:!0},(0,n.createElement)(r.__experimentalToggleGroupControlOption,{value:1,label:"1行"}),(0,n.createElement)(r.__experimentalToggleGroupControlOption,{value:2,label:"2行"}),(0,n.createElement)(r.__experimentalToggleGroupControlOption,{value:3,label:"3行"}),(0,n.createElement)(r.__experimentalToggleGroupControlOption,{value:-1,label:"全行"}))))};(0,e.registerBlockType)("qms4/post-list-post-excerpt",{edit:function(e){let{attributes:r,setAttributes:a}=e;const{numLinesPc:i,numLinesSp:s}=r,p=(0,l.useBlockProps)({className:"qms4__post-list__post-excerpt"});return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(o,{attributes:r,setAttributes:a}),(0,n.createElement)("p",t({},p,{"data-num-lines-pc":i,"data-num-lines-sp":s}),"ダミー抜粋文_あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。"))},save:function(e){let{attributes:t}=e;return(0,n.createElement)(n.Fragment,null,JSON.stringify({name:"post-excerpt",attributes:t}))}})}},n={};function l(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,l),o.exports}l.m=t,e=[],l.O=(t,n,r,o)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],o=e[u][2];for(var i=!0,s=0;s<n.length;s++)(!1&o||a>=o)&&Object.keys(l.O).every((e=>l.O[e](n[s])))?n.splice(s--,1):(i=!1,o<a&&(a=o));if(i){e.splice(u--,1);var p=r();void 0!==p&&(t=p)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,r,o]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={2318:0,8327:0};l.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,a=n[0],i=n[1],s=n[2],p=0;if(a.some((t=>0!==e[t]))){for(r in i)l.o(i,r)&&(l.m[r]=i[r]);if(s)var u=s(l)}for(t&&t(n);p<a.length;p++)o=a[p],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(u)},n=self.webpackChunkqms4=self.webpackChunkqms4||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=l.O(void 0,[8327],(()=>l(496)));r=l.O(r)})();