import{_ as r,o as a,c as i,z as l,A as p,e as d,g as m,t as u}from"./index-d393446e.js";const f={name:"",components:{},props:{},data(){return{item:new Proxy({a:""},{get:function(e,t,n){return console.log("获取数据",t),Reflect.get(e,t,n)},set:async function(e,t,n,o){return console.log("设置属性",t),console.log(99999999999),Reflect.set(e,t,n,o)}})}},computed:{},watch:{},created(){},mounted(){},methods:{}},_={class:""};function x(s,e,t,n,o,g){return a(),i("div",_,[l(d("input",{"onUpdate:modelValue":e[0]||(e[0]=c=>o.item.a=c),type:"text"},null,512),[[p,o.item.a]]),m(" "+u(o.item),1)])}const v=r(f,[["render",x]]);export{v as default};