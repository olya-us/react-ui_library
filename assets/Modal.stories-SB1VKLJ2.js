import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{r as d}from"./index-B-o1Wr-g.js";import{r as x}from"./index-lcPQr1BL.js";import"./_commonjsHelpers-Cpj98o6Y.js";const y="_overlay_8ssh2_1",b="_modal_8ssh2_14",g="_close_8ssh2_29",l={overlay:y,modal:b,close:g},t=d.forwardRef(({isOpen:r,onClose:o,children:a,ariaLabel:u="Modal"},m)=>(d.useEffect(()=>{const n=f=>{f.key==="Escape"&&o()};if(r)return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[r,o]),r?x.createPortal(e.jsx("div",{className:l.overlay,onClick:o,children:e.jsxs("div",{ref:m,className:l.modal,role:"dialog","aria-modal":"true","aria-label":u,onClick:n=>n.stopPropagation(),children:[a,e.jsx("button",{className:l.close,onClick:o,"aria-label":"Close",children:"×"})]})}),document.body):null));t.displayName="Modal";t.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{ariaLabel:{defaultValue:{value:"'Modal'",computed:!1},required:!1}}};const k={title:"Components/Modal",component:t,tags:["autodocs"]},s={render:r=>{const[o,a]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{style:{background:"var(--color-primary-gradient)",color:"white",padding:"10px 20px",borderRadius:"5px",border:"none",cursor:"pointer"},onClick:()=>a(!0),children:"Open Modal"}),e.jsx(t,{...r,isOpen:o,onClose:()=>a(!1),children:"Modal Content"})]})}};var c,i,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <button style={{
        background: 'var(--color-primary-gradient)',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
      }} onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          Modal Content
        </Modal>
      </>;
  }
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const E=["Default"];export{s as Default,E as __namedExportsOrder,k as default};
