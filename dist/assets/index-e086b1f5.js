import{d as y,r as d,i as k,U as _,e as v,f as V,k as g,af as x,G as R,l,ag as S,ah as $,s as b,m as s,t as j,F as I}from"./vendor-e9a737b2.js";const U=Object.assign({inheritAttrs:!1},{__name:"self",props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(f,{expose:t,emit:a}){const i=f,n=y({get(){return i.modelValue},set(e){a("update:modelValue",e)}}),o=d(null),u=k({});return t(u),_(()=>{const e=Object.entries(o.value);for(const[r,p]of e)p&&(u[r]=p)}),(e,r)=>{const p=b;return v(),V("div",null,[g(p,$({ref_key:"inputRef",ref:o,modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=c=>n.value=c)},e.$attrs),x({_:2},[R(e.$slots,(c,m)=>({name:m,fn:l(()=>[S(e.$slots,m)])}))]),1040,["modelValue"])])}}}),B={__name:"index",setup(f){const t=d(""),a=d();function i(n){console.log("透传事件",n)}return _(()=>{console.log(a.value),a.value.focus()}),(n,o)=>(v(),V(I,null,[g(U,{ref_key:"inputRef",ref:a,modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=u=>t.value=u),placeholder:"请输入",onInput:i},{prefix:l(()=>[s("11111")]),suffix:l(()=>[s("22222")]),prepend:l(()=>[s("333333")]),append:l(()=>[s("44444")]),_:1},8,["modelValue"]),s(" "+j(t.value),1)],64))}};export{B as default};
