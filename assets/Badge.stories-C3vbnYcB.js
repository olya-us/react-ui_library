import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{r as S}from"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const j="_badge_xtt6a_1",R="_badgeContent_xtt6a_7",w="_dot_xtt6a_23",C="_primary_xtt6a_29",k="_secondary_xtt6a_33",z="_success_xtt6a_37",A="_error_xtt6a_41",r={badge:j,badgeContent:R,dot:w,primary:C,secondary:k,success:z,error:A},o=S.forwardRef(({content:m,children:_,variant:d="standard",color:b="primary",className:f,...y},v)=>e.jsxs("div",{ref:v,className:[r.badge,f].join(" "),...y,children:[_,e.jsx("span",{className:[r.badgeContent,r[d],r[b]].join(" "),children:d==="dot"?null:m})]}));o.displayName="Badge";o.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{defaultValue:{value:"'standard'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1}}};const N={title:"Components/Badge",component:o,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{content:5,children:e.jsx("div",{style:{fontSize:"25px",width:50,height:50,background:"#ececec",padding:"10px",borderRadius:"50%",lineHeight:"30px",textAlign:"center"},children:"✉️"})}},t={args:{variant:"dot",children:e.jsx("div",{style:{fontSize:"25px",width:50,height:50,background:"#ececec",padding:"10px",borderRadius:"50%",lineHeight:"30px",textAlign:"center"},children:"✉️"})}},a={args:{content:"!",color:"error",children:e.jsx("div",{style:{fontSize:"25px",width:50,height:50,background:"#ececec",padding:"10px",borderRadius:"50%",lineHeight:"30px",textAlign:"center"},children:"✉️"})}};var s,c,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    content: 5,
    children: <div style={{
      fontSize: '25px',
      width: 50,
      height: 50,
      background: '#ececec',
      padding: '10px',
      borderRadius: '50%',
      lineHeight: '30px',
      textAlign: 'center'
    }}>✉️</div>
  }
}`,...(i=(c=n.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,l,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'dot',
    children: <div style={{
      fontSize: '25px',
      width: 50,
      height: 50,
      background: '#ececec',
      padding: '10px',
      borderRadius: '50%',
      lineHeight: '30px',
      textAlign: 'center'
    }}>✉️</div>
  }
}`,...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var x,u,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    content: '!',
    color: 'error',
    children: <div style={{
      fontSize: '25px',
      width: 50,
      height: 50,
      background: '#ececec',
      padding: '10px',
      borderRadius: '50%',
      lineHeight: '30px',
      textAlign: 'center'
    }}>✉️</div>
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const q=["Standard","Dot","ErrorColor"];export{t as Dot,a as ErrorColor,n as Standard,q as __namedExportsOrder,N as default};
