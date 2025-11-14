import{j as r}from"./jsx-runtime-j_jdvEMj.js";import{r as s}from"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const x="_wrapper_5vrvh_1",g="_menu_5vrvh_6",o={wrapper:x,menu:g,"bottom-left":"_bottom-left_5vrvh_16","bottom-right":"_bottom-right_5vrvh_22"},t=s.forwardRef(({trigger:p,children:d,position:c="bottom-left"},m)=>{const[n,u]=s.useState(!1);return r.jsxs("div",{ref:m,className:o.wrapper,children:[r.jsx("div",{onClick:()=>u(!n),children:p}),n&&r.jsx("div",{className:[o.menu,o[c]].join(" "),children:d})]})});t.displayName="Dropdown";t.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{position:{defaultValue:{value:"'bottom-left'",computed:!1},required:!1}}};const b={title:"Components/Dropdown",component:t,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{trigger:r.jsx("button",{style:{background:"var(--color-primary-gradient)",color:"white",padding:"10px 20px",borderRadius:"5px",border:"none",cursor:"pointer"},children:"Click me"}),children:r.jsxs("ul",{children:[r.jsx("li",{children:"Item 1"}),r.jsx("li",{children:"Item 2"})]})}};var a,i,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    trigger: <button style={{
      background: 'var(--color-primary-gradient)',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer'
    }}>Click me</button>,
    children: <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,b as default};
