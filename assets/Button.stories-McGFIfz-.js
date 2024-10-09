import{j as q}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const c=({primary:p=!1,disabled:b=!1,size:f="medium",label:y,...g})=>{const B=p?"primary":"secondary",v=b?"disabled":"";return q.jsx("button",{type:"button",className:[`button--${f}`,B,v].join(" "),...g,children:y})};c.__docgenInfo={description:"",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const T={title:"Components/Button",component:c,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{primary:!0,label:"Button",disabled:!1}},a={args:{label:"Button",disabled:!1}},r={args:{primary:!0,label:"Button",disabled:!0}};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button',
    disabled: false
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var o,l,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    disabled: false
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var i,u,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button',
    disabled: true
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const j=["Primary","Secondary","Disabled"];export{r as Disabled,e as Primary,a as Secondary,j as __namedExportsOrder,T as default};
