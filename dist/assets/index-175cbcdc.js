import{o as y,c as d,e as r,t as m,u as _,F as f}from"./index-d393446e.js";const g=r("div",{class:""},"手写bind",-1),h={style:{"white-space":"pre"}},F={__name:"index",setup(B){const c={name:"hehe"};function a(t,e,n,o){return console.log(this,t,e,n,o),"返回值"}Function.prototype.myBind=function(t){const e=Array.prototype.slice.call(arguments,1),n=this;return function o(){console.log(this);const u=Array.prototype.slice.call(arguments),s=e.concat(u);return this&&Object.getPrototypeOf(this)===o.prototype?new n(...s):n.apply(t,s)}};const i=a.myBind(c,"aa","bb"),l=new i("cc","dd","eee");console.log(l);const p=Function.prototype.myBind.toString();return(t,e)=>(y(),d(f,null,[g,r("div",h,m(_(p)),1)],64))}};export{F as default};
