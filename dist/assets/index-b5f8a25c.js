import{d as y}from"./index-11a9d463.js";import{e as x,a as i,Z as k,d as _,l as v,m as V,U as g,a9 as S,a7 as R,O as s,H as $,K as b,S as l,T as j,F as I}from"./myVue-ccd9a49f.js";const O=Object.assign({inheritAttrs:!1},{__name:"self",props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(f,{expose:t,emit:o}){const d=f,a=x({get(){return d.modelValue},set(e){o("update:modelValue",e)}}),n=i(null),u=k({});return t(u),_(()=>{const e=Object.entries(n.value);for(const[r,p]of e)p&&(u[r]=p)}),(e,r)=>{const p=y;return v(),V("div",null,[g(p,b({ref_key:"inputRef",ref:n,modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=m=>a.value=m)},e.$attrs),S({_:2},[R(e.$slots,(m,c)=>({name:c,fn:s(()=>[$(e.$slots,c)])}))]),1040,["modelValue"])])}}}),E={__name:"index",setup(f){const t=i(""),o=i();function d(a){console.log("透传事件",a)}return _(()=>{console.log(o.value),o.value.focus()}),(a,n)=>(v(),V(I,null,[g(O,{ref_key:"inputRef",ref:o,modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=u=>t.value=u),placeholder:"请输入",onInput:d},{prefix:s(()=>[l("11111")]),suffix:s(()=>[l("22222")]),prepend:s(()=>[l("333333")]),append:s(()=>[l("44444")]),_:1},8,["modelValue"]),l(" "+j(t.value),1)],64))}};export{E as default};
