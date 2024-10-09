import{v as P}from"./v4-CQkTLCs1.js";import{j as A}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const{addons:V}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:L}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:g}=__STORYBOOK_MODULE_GLOBAL__;var B="storybook/actions",M=`${B}/action-event`,q={depth:10,clearOnStoryChange:!0,limit:50},I=(e,t)=>{let n=Object.getPrototypeOf(e);return!n||t(n)?n:I(n,t)},K=e=>!!(typeof e=="object"&&e&&I(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),N=e=>{if(K(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let n=Object.getOwnPropertyDescriptor(t,"view"),r=n==null?void 0:n.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...n,value:Object.create(r.constructor.prototype)}),t}return e},W=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?P():Date.now().toString(36)+Math.random().toString(36).substring(2);function T(e,t={}){let n={...q,...t},r=function(...c){var d,l;if(t.implicit){let u=(d="__STORYBOOK_PREVIEW__"in g?g.__STORYBOOK_PREVIEW__:void 0)==null?void 0:d.storyRenders.find(o=>o.phase==="playing"||o.phase==="rendering");if(u){let o=!((l=window==null?void 0:window.FEATURES)!=null&&l.disallowImplicitActionsInRenderV8),m=new L({phase:u.phase,name:e,deprecated:o});if(o)console.warn(m);else throw m}}let D=V.getChannel(),S=W(),x=5,p=c.map(N),j=c.length>1?p:p[0],C={id:S,count:0,data:{name:e,args:j},options:{...n,maxDepth:x+(n.depth||3),allowFunction:n.allowFunction||!1}};D.emit(M,C)};return r.isAction=!0,r.implicit=t.implicit,r}const v=({disabled:e=!1,...t})=>{const n=e?"disabled":"";return A.jsx("input",{type:"button",className:n,...t})};v.__docgenInfo={description:"",methods:[],displayName:"Input",props:{type:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const F={title:"Components/Input",component:v,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{type:"text",placeholder:"Enter text",onChange:T("changed")}},s={args:{type:"password",placeholder:"Enter password",onChange:T("changed")}},i={args:{type:"text",placeholder:"Disabled input",disabled:!0}};var y,_,h;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: 'text',
    placeholder: 'Enter text',
    onChange: action('changed')
  }
}`,...(h=(_=a.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var E,O,f;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Enter password',
    onChange: action('changed')
  }
}`,...(f=(O=s.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};var R,b,w;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: 'text',
    placeholder: 'Disabled input',
    disabled: true
  }
}`,...(w=(b=i.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const H=["Text","Password","Disabled"];export{i as Disabled,s as Password,a as Text,H as __namedExportsOrder,F as default};
