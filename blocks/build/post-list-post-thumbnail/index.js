(()=>{"use strict";var e,t={575:()=>{const e=window.wp.blocks;function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},t.apply(this,arguments)}const l=window.wp.element,a=(window.React,window.wp.blockEditor),r=window.wp.components,n=e=>{let{attributes:t,setAttributes:n}=e;const{aspectRatio:o,objectFit:i}=t;return(0,l.createElement)(a.InspectorControls,null,(0,l.createElement)(r.PanelBody,null,(0,l.createElement)(r.SelectControl,{label:"縦横比",value:o,options:[{label:"16:9",value:"16:9"},{label:"3:2",value:"3:2"},{label:"4:3",value:"4:3"},{label:"1:1",value:"1:1"},{label:"3:4",value:"3:4"},{label:"2:3",value:"2:3"},{label:"9:16",value:"9:16"},{label:"オリジナル",value:"auto"}],onChange:e=>n({aspectRatio:e})}),(0,l.createElement)(r.__experimentalToggleGroupControl,{label:"縮小表示",value:i,onChange:e=>n({objectFit:e}),isBlock:!0},(0,l.createElement)(r.__experimentalToggleGroupControlOption,{value:"cover",label:"cover"}),(0,l.createElement)(r.__experimentalToggleGroupControlOption,{value:"contain",label:"contain"}))))};(0,e.registerBlockType)("qms4/post-list-post-thumbnail",{edit:function(e){let{attributes:r,setAttributes:o}=e;const{aspectRatio:i,objectFit:s}=r,c=(0,a.useBlockProps)({className:"qms4__post-list__post-thumbnail qms4__post-list__post-thumbnail--edit"});return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(n,{attributes:r,setAttributes:o}),(0,l.createElement)("div",t({},c,{"data-aspect-ratio":i,"data-object-fit":s}),(0,l.createElement)("img",{src:"https://picsum.photos/id/905/400/300/",alt:""})))},save:function(e){let{attributes:t}=e;return(0,l.createElement)(l.Fragment,null,JSON.stringify({name:"post-thumbnail",attributes:t}))}})}},l={};function a(e){var r=l[e];if(void 0!==r)return r.exports;var n=l[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,e=[],a.O=(t,l,r,n)=>{if(!l){var o=1/0;for(u=0;u<e.length;u++){l=e[u][0],r=e[u][1],n=e[u][2];for(var i=!0,s=0;s<l.length;s++)(!1&n||o>=n)&&Object.keys(a.O).every((e=>a.O[e](l[s])))?l.splice(s--,1):(i=!1,n<o&&(o=n));if(i){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[l,r,n]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={8476:0,4906:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var r,n,o=l[0],i=l[1],s=l[2],c=0;if(o.some((t=>0!==e[t]))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(s)var u=s(a)}for(t&&t(l);c<o.length;c++)n=o[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},l=self.webpackChunkqms4=self.webpackChunkqms4||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var r=a.O(void 0,[4906],(()=>a(575)));r=a.O(r)})();