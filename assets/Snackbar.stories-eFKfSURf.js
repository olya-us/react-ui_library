import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{r as c}from"./index-B-o1Wr-g.js";import{r as k}from"./index-lcPQr1BL.js";import"./_commonjsHelpers-Cpj98o6Y.js";const _="_snackbar_5wz5i_1",h="_info_5wz5i_16",w="_success_5wz5i_20",y="_error_5wz5i_24",j="_close_5wz5i_28",u={snackbar:_,info:h,success:w,error:y,close:j},a=c.forwardRef(({message:o,open:s,autoHideDuration:r=3e3,onClose:i,variant:g="info"},x)=>(c.useEffect(()=>{if(s){const S=setTimeout(i,r);return()=>clearTimeout(S)}},[s,r,i]),s?k.createPortal(e.jsxs("div",{ref:x,className:[u.snackbar,u[g]].join(" "),children:[o,e.jsx("button",{onClick:i,className:u.close,children:"×"})]}),document.body):null));a.displayName="Snackbar";a.__docgenInfo={description:"",methods:[],displayName:"Snackbar",props:{autoHideDuration:{defaultValue:{value:"3000",computed:!1},required:!1},variant:{defaultValue:{value:"'info'",computed:!1},required:!1}}};const z={title:"Components/Snackbar",component:a,tags:["autodocs"]},t={render:o=>{const[s,r]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{style:{background:"var(--color-primary-gradient)",color:"white",padding:"10px 20px",borderRadius:"5px",border:"none",cursor:"pointer"},onClick:()=>r(!0),children:"Show Snackbar"}),e.jsx(a,{...o,open:s,onClose:()=>r(!1),message:"This is a message"})]})}},n={render:o=>{const[s,r]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{style:{background:"var(--color-primary-gradient)",color:"white",padding:"10px 20px",borderRadius:"5px",border:"none",cursor:"pointer"},onClick:()=>r(!0),children:"Show Success"}),e.jsx(a,{...o,open:s,onClose:()=>r(!1),message:"Success!",variant:"success"})]})}};var p,d,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <button style={{
        background: 'var(--color-primary-gradient)',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
      }} onClick={() => setOpen(true)}>Show Snackbar</button>
        <Snackbar {...args} open={open} onClose={() => setOpen(false)} message="This is a message" />
      </>;
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,b,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <button style={{
        background: 'var(--color-primary-gradient)',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
      }} onClick={() => setOpen(true)}>Show Success</button>
        <Snackbar {...args} open={open} onClose={() => setOpen(false)} message="Success!" variant="success" />
      </>;
  }
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const E=["Default","Success"];export{t as Default,n as Success,E as __namedExportsOrder,z as default};
