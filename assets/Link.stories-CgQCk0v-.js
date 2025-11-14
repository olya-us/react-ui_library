import{j as y}from"./jsx-runtime-j_jdvEMj.js";import{r as U}from"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const L="_link_zi9bg_1",o={link:L,"underline-none":"_underline-none_zi9bg_12","underline-hover":"_underline-hover_zi9bg_16","underline-always":"_underline-always_zi9bg_20"},s=U.forwardRef(({underline:x="hover",className:k,children:w,...N},b)=>y.jsx("a",{ref:b,className:[o.link,o[`underline-${x}`],k].join(" "),...N,children:w}));s.displayName="Link";s.__docgenInfo={description:"",methods:[],displayName:"Link",props:{underline:{defaultValue:{value:"'hover'",computed:!1},required:!1}}};const j={title:"Components/Link",component:s,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{href:"https://example.com",children:"Visit Example"}},r={args:{href:"https://example.com",underline:"always",children:"Underlined Link"}},n={args:{href:"https://example.com",underline:"none",children:"No Underline"}},a={args:{href:"https://example.com",target:"_blank",rel:"noopener noreferrer",children:"Open in New Tab"}};var t,l,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    children: 'Visit Example'
  }
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,d,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    underline: 'always',
    children: 'Underlined Link'
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    underline: 'none',
    children: 'No Underline'
  }
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,g,_;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: 'Open in New Tab'
  }
}`,...(_=(g=a.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};const z=["Default","UnderlineAlways","UnderlineNone","OpenInNewTab"];export{e as Default,a as OpenInNewTab,r as UnderlineAlways,n as UnderlineNone,z as __namedExportsOrder,j as default};
