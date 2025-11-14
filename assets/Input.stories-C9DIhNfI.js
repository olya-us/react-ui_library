import{v as B}from"./v4-CQkTLCs1.js";import{j as i}from"./jsx-runtime-j_jdvEMj.js";import{r as U}from"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const{addons:K}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:L}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:f}=__STORYBOOK_MODULE_GLOBAL__;var Y="storybook/actions",F=`${Y}/action-event`,z={depth:10,clearOnStoryChange:!0,limit:50},N=(r,e)=>{let t=Object.getPrototypeOf(r);return!t||e(t)?t:N(t,e)},H=r=>!!(typeof r=="object"&&r&&N(r,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof r.persist=="function"),$=r=>{if(H(r)){let e=Object.create(r.constructor.prototype,Object.getOwnPropertyDescriptors(r));e.persist();let t=Object.getOwnPropertyDescriptor(e,"view"),a=t==null?void 0:t.value;return typeof a=="object"&&(a==null?void 0:a.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...t,value:Object.create(a.constructor.prototype)}),e}return r},G=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?B():Date.now().toString(36)+Math.random().toString(36).substring(2);function u(r,e={}){let t={...z,...e},a=function(...o){var E,b;if(e.implicit){let O=(E="__STORYBOOK_PREVIEW__"in f?f.__STORYBOOK_PREVIEW__:void 0)==null?void 0:E.storyRenders.find(s=>s.phase==="playing"||s.phase==="rendering");if(O){let s=!((b=window==null?void 0:window.FEATURES)!=null&&b.disallowImplicitActionsInRenderV8),y=new L({phase:O.phase,name:r,deprecated:s});if(s)console.warn(y);else throw y}}let l=K.getChannel(),_=G(),T=5,g=o.map($),M=o.length>1?g:g[0],V={id:_,count:0,data:{name:r,args:M},options:{...t,maxDepth:T+(t.depth||3),allowFunction:t.allowFunction||!1}};l.emit(F,V)};return a.isAction=!0,a.implicit=e.implicit,a}const k="_wrapper_1p490_1",q="_label_1p490_7",J="_input_1p490_13",Q="_disabled_1p490_28",X="_error_1p490_33",Z="_helper_1p490_38",ee="_errorMessage_1p490_43",n={wrapper:k,label:q,input:J,disabled:Q,error:X,helper:Z,errorMessage:ee},h=U.forwardRef(({label:r,error:e,helperText:t,className:a,disabled:o,...l},_)=>i.jsxs("div",{className:n.wrapper,children:[r&&i.jsx("label",{className:n.label,htmlFor:l.id,children:r}),i.jsx("input",{ref:_,className:[n.input,e?n.error:"",o?n.disabled:"",a].join(" "),disabled:o,"aria-invalid":!!e,"aria-describedby":e?"error-message":void 0,...l}),t&&i.jsx("span",{className:n.helper,children:t}),e&&i.jsx("span",{id:"error-message",className:n.errorMessage,children:e})]}));h.displayName="Input";h.__docgenInfo={description:"",methods:[],displayName:"Input"};const oe={title:"Components/Input",component:h,parameters:{layout:"centered"},tags:["autodocs"]},c={args:{label:"Username",placeholder:"Enter username",onChange:u("changed")}},p={args:{label:"Email",placeholder:"Enter email",helperText:"We'll never share your email.",onChange:u("changed")}},d={args:{label:"Password",type:"password",placeholder:"Enter password",error:"Invalid password",onChange:u("changed")}},m={args:{label:"Disabled Input",placeholder:"Cannot edit",disabled:!0}};var w,R,I;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    onChange: action('changed')
  }
}`,...(I=(R=c.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var D,v,j;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter email',
    helperText: "We'll never share your email.",
    onChange: action('changed')
  }
}`,...(j=(v=p.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var S,x,C;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    error: 'Invalid password',
    onChange: action('changed')
  }
}`,...(C=(x=d.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var P,W,A;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit',
    disabled: true
  }
}`,...(A=(W=m.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};const se=["Default","WithHelper","WithError","Disabled"];export{c as Default,m as Disabled,d as WithError,p as WithHelper,se as __namedExportsOrder,oe as default};
