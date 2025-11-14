import{j as r}from"./jsx-runtime-j_jdvEMj.js";import{r as p}from"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const h="_wrapper_1sgvj_1",v="_tooltip_1sgvj_6",f="_top_1sgvj_17",j="_bottom_1sgvj_24",y="_left_1sgvj_31",w="_right_1sgvj_38",e={wrapper:h,tooltip:v,top:f,bottom:j,left:y,right:w},n=p.forwardRef(({title:u,children:g,position:b="top"},_)=>{const[x,s]=p.useState(!1);return r.jsxs("div",{ref:_,className:e.wrapper,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[g,x&&r.jsx("div",{className:[e.tooltip,e[b]].join(" "),children:u})]})});n.displayName="Tooltip";n.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{position:{defaultValue:{value:"'top'",computed:!1},required:!1}}};const E={title:"Components/Tooltip",component:n,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{title:"Tooltip on top",children:r.jsx("button",{style:{background:"var(--color-primary-gradient)",color:"white",padding:"10px 20px",borderRadius:"5px",border:"none",cursor:"pointer"},children:"Hover me"}),position:"top"}},t={args:{title:"Tooltip on bottom",children:r.jsx("button",{style:{background:"var(--color-primary-gradient)",color:"white",padding:"10px 20px",borderRadius:"5px",border:"none",cursor:"pointer"},children:"Hover me"}),position:"bottom"}};var a,i,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: 'Tooltip on top',
    children: <button style={{
      background: 'var(--color-primary-gradient)',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer'
    }}>Hover me</button>,
    position: 'top'
  }
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,l,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Tooltip on bottom',
    children: <button style={{
      background: 'var(--color-primary-gradient)',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer'
    }}>Hover me</button>,
    position: 'bottom'
  }
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const H=["Top","Bottom"];export{t as Bottom,o as Top,H as __namedExportsOrder,E as default};
