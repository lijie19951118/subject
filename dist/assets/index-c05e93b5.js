import{z as i,r as l,f as p,g as d,j as o}from"./vendor-d9749800.js";const f={class:"",style:{padding:"50px"}},u=["src"],x=i({__name:"index",setup(m){const s=l("");function r(n){const t=n.target.files[0];c(t).then(a=>{s.value=a});const e=new FormData;e.append("name","lijie"),e.append("password",111111),e.append("file",t),fetch("xxxx.xxx",{method:"post",body:e})}function c(n){return new Promise(t=>{const e=new FileReader;e.onload=a=>{t(a.target.result)},e.readAsDataURL(n)})}return(n,t)=>(p(),d("div",f,[o("input",{type:"file",onChange:r},null,32),o("img",{src:s.value,alt:""},null,8,u)]))}});export{x as default};
