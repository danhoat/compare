(()=>{"use strict";var e,n={117:()=>{const e=window.wp.blocks,n=window.wp.element,t=(window.React,window.wp.blockEditor),l=window.wp.components,s=e=>{let{attributes:s,setAttributes:a}=e;return(0,n.createElement)(t.InspectorControls,null,(0,n.createElement)(l.PanelBody,null))},a=window.wp.data;(0,e.registerBlockType)("qms4/panel-menu",{edit:function(e){let{clientId:l,isSelected:m,attributes:r,setAttributes:u}=e;const o=function(e){const[t,l]=(0,n.useState)(!1);return(0,a.subscribe)((()=>{const n=(0,a.select)("core/block-editor").hasSelectedInnerBlock(e,!0);t!=n&&l(n)})),t}(l),i=m||o,c=(0,t.useBlockProps)({className:"qms4__panel-menu"});return(0,n.createElement)("div",c,(0,n.createElement)(s,{attributes:r,setAttributes:u}),(0,n.createElement)(t.InnerBlocks,{allowedBlocks:["qms4/panel-menu-item"],template:[["qms4/panel-menu-item",{label:"ラベル1"},[["qms4/panel-menu-subitem",{label:"メニュー1-1"}],["qms4/panel-menu-subitem",{label:"メニュー1-2"}],["qms4/panel-menu-subitem",{label:"メニュー1-3"}]]],["qms4/panel-menu-item",{label:"ラベル2"},[["qms4/panel-menu-subitem",{label:"メニュー2-1"}],["qms4/panel-menu-subitem",{label:"メニュー2-2"}],["qms4/panel-menu-subitem",{label:"メニュー2-3"}]]],["qms4/panel-menu-item",{label:"ラベル3"},[["qms4/panel-menu-subitem",{label:"メニュー3-1"}],["qms4/panel-menu-subitem",{label:"メニュー3-2"}],["qms4/panel-menu-subitem",{label:"メニュー3-3"}]]]],renderAppender:()=>i&&(0,n.createElement)(t.InnerBlocks.ButtonBlockAppender,null)}))},save:function(){const e=t.useBlockProps.save({className:"qms4__panel-menu qms4__panel-menu__front js__qms4__panel-menu"});return(0,n.createElement)("div",e,(0,n.createElement)("div",{className:"qms4__panel-menu__item-list"},(0,n.createElement)(t.InnerBlocks.Content,null)),(0,n.createElement)("div",{className:"qms4__panel-menu__subitem-list js__qms4__panel-menu__subitem-list"}))}})}},t={};function l(e){var s=t[e];if(void 0!==s)return s.exports;var a=t[e]={exports:{}};return n[e](a,a.exports,l),a.exports}l.m=n,e=[],l.O=(n,t,s,a)=>{if(!t){var m=1/0;for(i=0;i<e.length;i++){t=e[i][0],s=e[i][1],a=e[i][2];for(var r=!0,u=0;u<t.length;u++)(!1&a||m>=a)&&Object.keys(l.O).every((e=>l.O[e](t[u])))?t.splice(u--,1):(r=!1,a<m&&(m=a));if(r){e.splice(i--,1);var o=s();void 0!==o&&(n=o)}}return n}a=a||0;for(var i=e.length;i>0&&e[i-1][2]>a;i--)e[i]=e[i-1];e[i]=[t,s,a]},l.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={1035:0,234:0};l.O.j=n=>0===e[n];var n=(n,t)=>{var s,a,m=t[0],r=t[1],u=t[2],o=0;if(m.some((n=>0!==e[n]))){for(s in r)l.o(r,s)&&(l.m[s]=r[s]);if(u)var i=u(l)}for(n&&n(t);o<m.length;o++)a=m[o],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(i)},t=self.webpackChunkqms4=self.webpackChunkqms4||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var s=l.O(void 0,[234],(()=>l(117)));s=l.O(s)})();