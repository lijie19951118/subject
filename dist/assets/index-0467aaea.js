import{_ as r}from"./index-e118b9b0.js";import{m as u,_,o as m,c as p,ax as x}from"./myVue-6b61aabf.js";const f={class:"main"},g=x('<div class="box" data-v-534a06ad></div><div class="gap" data-v-534a06ad></div><div class="box" data-v-534a06ad></div><div class="gap" data-v-534a06ad></div><div class="box" data-v-534a06ad></div><div class="gap" data-v-534a06ad></div><div class="box" data-v-534a06ad></div><div class="gap" data-v-534a06ad></div><div class="box" data-v-534a06ad></div><div class="gap" data-v-534a06ad></div><div class="box" data-v-534a06ad></div><div class="gap" data-v-534a06ad></div><div class="box" data-v-534a06ad></div><div class="gap" data-v-534a06ad></div><div class="box" data-v-534a06ad></div><div class="gap" data-v-534a06ad></div><div class="box" data-v-534a06ad></div><div class="gap" data-v-534a06ad></div><div class="box" data-v-534a06ad></div><div class="gap" data-v-534a06ad></div><div class="box" data-v-534a06ad></div><div class="gap" data-v-534a06ad></div><div class="box" data-v-534a06ad></div>',23),b=[g],y=300,h=.8,E={__name:"index",setup(P){function c(a,t,o){return function(s){const d=Math.PI/a,n=-(t-a/2)*d,i=o*Math.sin(s*d+n)+1;return s>t+a/2||s<t-a/2?1:i}}function e(a,t){const o=c(y,a.x,h),s=document.querySelector(".main");for(let d of s.childNodes){t==="out"?d.style.setProperty("transition","all 0.3s"):d.style.setProperty("transition","all 0s");const i=d.getBoundingClientRect().x+d.offsetWidth/2,l=o(i);d.style.setProperty("--d",l)}}function v(a){a.stopPropagation(),e({x:-100},"out")}return u(()=>{const a=document.querySelector(".main");a.addEventListener("mousemove",e),a.addEventListener("mouseleave",v)}),_(()=>{const a=document.querySelector(".main");a.removeEventListener("mousemove",e),a.removeEventListener("mouseleave",v)}),(a,t)=>(m(),p("div",f,b))}},S=r(E,[["__scopeId","data-v-534a06ad"]]);export{S as default};