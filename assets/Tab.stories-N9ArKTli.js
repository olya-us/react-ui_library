import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as f}from"./index-DJO9vBfz.js";const u=({tabs:s,orientation:n="horizontal"})=>{const[c,x]=f.useState(0),v=o=>{x(o)};return e.jsxs("div",{className:`tabs ${n}`,children:[e.jsx("ul",{className:`tab-list ${n}`,children:s.map((o,r)=>e.jsx("li",{className:`tab-item ${r===c?"active":""}`,onClick:()=>v(r),children:o.label},r))}),e.jsx("div",{className:"tab-content",children:s[c].content})]})};u.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{orientation:{defaultValue:{value:"'horizontal'",computed:!1},required:!1}}};const g={title:"Components/Tabs",component:u,parameters:{layout:"centered"},tags:["autodocs"]},h=[{label:"Tab 1",content:e.jsx("div",{children:"Content for Tab 1"})},{label:"Tab 2",content:e.jsx("div",{children:"Content for Tab 2"})},{label:"Tab 3",content:e.jsx("div",{children:"Content for Tab 3"})}],a={args:{tabs:h,orientation:"horizontal"}},t={args:{tabs:h,orientation:"vertical"}};var i,l,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    tabs,
    orientation: 'horizontal'
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,p,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    tabs,
    orientation: 'vertical'
  }
}`,...(b=(p=t.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const z=["Horizontal","Vertical"];export{a as Horizontal,t as Vertical,z as __namedExportsOrder,g as default};
