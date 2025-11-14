import{j as o}from"./jsx-runtime-j_jdvEMj.js";import{r as j}from"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const y="_accordion_1g91i_1",E="_item_1g91i_7",M="_title_1g91i_15",w="_content_1g91i_27",s={accordion:y,item:E,title:M,content:w},u=({items:f,allowMultiple:_=!1})=>{const[I,x]=j.useState([]),h=t=>{x(e=>e.includes(t)?e.filter(n=>n!==t):_?[...e,t]:[t])};return o.jsx("div",{className:s.accordion,children:f.map((t,e)=>{const n=I.includes(e);return o.jsxs("div",{className:s.item,children:[o.jsx("button",{className:s.title,onClick:()=>h(e),"aria-expanded":n,"aria-controls":`content-${e}`,id:`title-${e}`,children:t.title}),n&&o.jsx("div",{id:`content-${e}`,role:"region","aria-labelledby":`title-${e}`,className:s.content,children:t.content})]},e)})})};u.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AccordionItem"}],raw:"AccordionItem[]"},description:""},allowMultiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const N={title:"Components/Accordion",component:u,parameters:{layout:"centered"},tags:["autodocs"]},g=[{title:"Item 1",content:o.jsx("div",{children:"Content for Item 1"})},{title:"Item 2",content:o.jsx("div",{children:"Content for Item 2"})},{title:"Item 3",content:o.jsx("div",{children:"Content for Item 3"})}],r={args:{items:g,allowMultiple:!1}},a={args:{items:g,allowMultiple:!0}};var c,l,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    items,
    allowMultiple: false
  }
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    items,
    allowMultiple: true
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const S=["SingleExpand","MultipleExpand"];export{a as MultipleExpand,r as SingleExpand,S as __namedExportsOrder,N as default};
