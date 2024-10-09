import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{r as j}from"./index-DJO9vBfz.js";const p=({items:f,allowMultiple:g=!1})=>{const[x,r]=j.useState([]),I=t=>{r(g?e=>e.includes(t)?e.filter(h=>h!==t):[...e,t]:e=>e.includes(t)?[]:[t])};return o.jsx("div",{className:"accordion",children:f.map((t,e)=>o.jsxs("div",{className:"accordion-item",children:[o.jsx("div",{className:"accordion-title",onClick:()=>I(e),children:t.title}),x.includes(e)&&o.jsx("div",{className:"accordion-content",children:t.content})]},e))})};p.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AccordionItem"}],raw:"AccordionItem[]"},description:""},allowMultiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const v={title:"Components/Accordion",component:p,parameters:{layout:"centered"},tags:["autodocs"]},u=[{title:"Item 1",content:o.jsx("div",{children:"Content for Item 1"})},{title:"Item 2",content:o.jsx("div",{children:"Content for Item 2"})},{title:"Item 3",content:o.jsx("div",{children:"Content for Item 3"})}],s={args:{items:u,allowMultiple:!1}},n={args:{items:u,allowMultiple:!0}};var a,c,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    items,
    allowMultiple: false
  }
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var i,d,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    items,
    allowMultiple: true
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const w=["SingleExpand","MultipleExpand"];export{n as MultipleExpand,s as SingleExpand,w as __namedExportsOrder,v as default};
