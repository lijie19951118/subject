import{_ as S}from"./index-64dbbdc2.js";import{e as l,g as $,o,c as s,F as u,l as p,m as _,k as m,a as y,n as x,x as f,t as v,q as h,av as I,aw as q}from"./myVue-f9a41b77.js";const w=c=>(I("data-v-7adeaded"),c=c(),q(),c),B={class:"mine"},E=w(()=>y("div",null,"------------------------",-1)),L={class:"add"},z=["onClick"],N={__name:"index",setup(c){const i=l([1,2,3,4]);async function g(){const n={};for(const t of i.value){const e=document.querySelector(`.box${t}`).getBoundingClientRect();n[t]=e}i.value.reverse(),await x();for(const t of i.value){const a=document.querySelector(`.box${t}`),e=a.getBoundingClientRect(),r=n[t].top-e.top;a.animate([{transform:`translateY(${r}px)`},{transform:"translateY(0)"}],{duration:300,easing:"ease"}).addEventListener("finish",()=>{console.log("动画结束")})}}const d=l([1,2,3,4]);async function b(){const n=Math.random();d.value.splice(2,0,n),await x();const t=document.querySelector(`.addbox${n}`);t.style.zIndex=-1,t.animate([{height:0,transform:"translate(10px,10px)",opacity:0},{height:"26px",transform:"translate(0)",opacity:1}],{duration:300,easing:"ease"}).addEventListener("finish",()=>{t.style.zIndex=0})}function k(n,t){const a=document.querySelector(`.addbox${n}`);console.log(a,999),a.animate([{height:"26px",transform:"translate(0)",opacity:1},{height:0,transform:"translate(10px,10px)",opacity:0}],{duration:300,easing:"ease"}).addEventListener("finish",()=>{d.value.splice(t,1)})}return(n,t)=>{const a=$("el-button");return o(),s("div",B,[(o(!0),s(u,null,p(i.value,e=>(o(),s("div",{class:f(["box",`box${e}`]),key:e},v(e),3))),128)),_(a,{onClick:g},{default:m(()=>[h("排序")]),_:1}),E,y("div",L,[(o(!0),s(u,null,p(d.value,(e,r)=>(o(),s("div",{class:f(["box",`addbox${e}`]),key:e,onClick:C=>k(e,r)},v(e)+" x",11,z))),128))]),_(a,{onClick:b},{default:m(()=>[h("插入")]),_:1})])}}},F=S(N,[["__scopeId","data-v-7adeaded"]]);export{F as default};
