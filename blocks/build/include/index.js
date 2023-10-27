(()=>{"use strict";var e={n:t=>{var l=t&&t.__esModule?()=>t.default:()=>t;return e.d(l,{a:l}),l},d:(t,l)=>{for(var n in l)e.o(l,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:l[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.blocks,l=window.wp.element,n=(window.React,window.wp.blockEditor),r=window.wp.serverSideRender;var i=e.n(r);const a=window.wp.components,o=e=>{let{attributes:t,setAttributes:r}=e;const{filepath:i}=t;return(0,l.createElement)(n.InspectorControls,null,(0,l.createElement)(a.PanelBody,null,(0,l.createElement)(a.TextControl,{label:"インクルードファイル",value:i,onChange:e=>r({filepath:e,initialized:!0}),placeholder:"path/to/file.php"})))},s=e=>{let{attributes:t,setAttributes:n,children:r}=e;const{initialized:i}=t,[o,s]=(0,l.useState)(t.filepath);return(0,l.useEffect)((()=>{t.filepath||(s(""),n({initialized:!1}))}),[t.filepath]),i?(0,l.createElement)(l.Fragment,null,r):(0,l.createElement)(a.Placeholder,{label:"インクルードブロック",instructions:"指定したファイルをインクルードして表示します"},(0,l.createElement)(a.Flex,{justify:"flex-start"},(0,l.createElement)(a.FlexItem,null,(0,l.createElement)(a.TextControl,{hideLabelFromVision:!0,value:o,onChange:e=>s(e),placeholder:"path/to/file.php"})),(0,l.createElement)(a.FlexItem,null,(0,l.createElement)(a.Button,{variant:"primary",onClick:()=>n({filepath:o,initialized:!0})},"選択"))))};(0,t.registerBlockType)("qms4/include",{edit:function(e){let{name:t,attributes:r,setAttributes:a}=e;return(0,l.createElement)("div",(0,n.useBlockProps)(),(0,l.createElement)(o,{attributes:r,setAttributes:a}),(0,l.createElement)(s,{attributes:r,setAttributes:a},(0,l.createElement)(i(),{block:t,attributes:r})))},save:function(){return null}})})();