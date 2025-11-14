import{j}from"./jsx-runtime-j_jdvEMj.js";import{r as D}from"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const P="_button_1xmsd_1",q="_primary_1xmsd_13",E="_secondary_1xmsd_23",N="_text_1xmsd_34",V="_small_1xmsd_44",z="_medium_1xmsd_49",R="_large_1xmsd_53",w="_disabled_1xmsd_58",e={button:P,primary:q,secondary:E,text:N,small:V,medium:z,large:R,disabled:w},n=D.forwardRef(({variant:f="primary",size:v="medium",disabled:o=!1,children:B,className:h,...S},T)=>j.jsx("button",{ref:T,className:[e.button,e[f],e[v],o?e.disabled:"",h].join(" "),disabled:o,"aria-disabled":o,...S,children:B}));n.displayName="Button";n.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const k={title:"Components/Button",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","text"]},size:{control:"select",options:["small","medium","large"]},disabled:{control:"boolean"}}},r={args:{variant:"primary",children:"Primary Button"}},a={args:{variant:"secondary",children:"Secondary Button"}},t={args:{variant:"text",children:"Text Button"}},s={args:{variant:"primary",children:"Disabled Button",disabled:!0}};var d,i,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,l,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,y,_;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    children: 'Text Button'
  }
}`,...(_=(y=t.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var x,g,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Disabled Button',
    disabled: true
  }
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const A=["Primary","Secondary","Text","Disabled"];export{s as Disabled,r as Primary,a as Secondary,t as Text,A as __namedExportsOrder,k as default};
