import{_ as l}from"./index-3248ed05.js";import{l as s,m as o,p as d,P as n,u as a,S as i,F as p,av as m,aw as u}from"./myVue-ccd9a49f.js";const v=150,h=1e3,c=new IntersectionObserver(t=>{console.log(t);for(let e of t)e.isIntersecting&&(r.get(e.target).play(),c.unobserve(e.target))}),r=new WeakMap;function f(t){return t.getBoundingClientRect().top>window.innerHeight}const g={mounted(t){if(!f(t))return;console.log(t);const e=t.animate([{transform:`translateY(${v}px)`,opacity:.5},{transform:"translateY(0)",opacity:1}],{duration:h,easing:"ease"});r.set(t,e),console.log(r,"WeakMap"),e.pause(),c.observe(t)},unmounted(t){c.unobserve(t)}};const _=t=>(m("data-v-36d74467"),t=t(),u(),t),I=_(()=>d("div",null,"header",-1)),x={class:"smooth"},w={class:"item"},b={class:"item"},y={class:"item"},B={class:"item"},S={class:"item"},k={class:"item"},N={class:"item"},D=_(()=>d("div",null,"footer",-1)),E={__name:"index",setup(t){const e=g;return(M,T)=>(s(),o(p,null,[I,d("div",x,[n((s(),o("div",w,[i("1")])),[[a(e)]]),n((s(),o("div",b,[i("2")])),[[a(e)]]),n((s(),o("div",y,[i("3")])),[[a(e)]]),n((s(),o("div",B,[i("4")])),[[a(e)]]),n((s(),o("div",S,[i("5")])),[[a(e)]]),n((s(),o("div",k,[i("6")])),[[a(e)]]),n((s(),o("div",N,[i("7")])),[[a(e)]])]),D],64))}},F=l(E,[["__scopeId","data-v-36d74467"]]);export{F as default};
