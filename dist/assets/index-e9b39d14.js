import{y as m,o as p,c as f,z as d,A as g,u as a,e as u,B as x,g as _,t as k,F as B}from"./index-d393446e.js";const y={__name:"index",setup(T){const e=l(1111);function l(t,o=500){let n;return m((c,i)=>({get(){return console.log("触发了get=====",t),c(),t},set(s){console.log(s),clearTimeout(n),n=setTimeout(()=>{t=s,i()},o)}}))}function r(){e.value=e.value+9999}return(t,o)=>(p(),f(B,null,[d(u("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=n=>x(e)?e.value=n:null)},null,512),[[g,a(e)]]),_(" "+k(a(e))+" ",1),u("button",{onClick:r},"点击")],64))}};export{y as default};