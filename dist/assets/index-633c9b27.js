import{r as g,f as u,g as f,j as o,t as s}from"./vendor-52091f21.js";const n=["red","green","yellow"];function k(c=1e3){return new Promise(e=>{setTimeout(e,c)})}class p{get nextColor(){return n[(n.indexOf(this.color)+1)%n.length]}get remaine(){let e=this.endTime-Date.now();return e<0&&(e=0),e/1e3}constructor({color:e,timeList:t}){this.color=e,this.timeList=t,this.eventMap=new Map,this.eventMap.set("change",new Set),this.eventMap.set("tick",new Set),this.setTime(),this.exchang()}on(e,t){this.eventMap.get(e).add(t)}off(e,t){this.eventMap.get(e).delete(t)}emit(e){this.eventMap.get(e).forEach(t=>{t&&t.call(this,{color:this.color,remaine:this.remaine})})}setTime(){this.startTime=Date.now();const e=n.indexOf(this.color);this.endTime=this.startTime+this.timeList[e]*1e3}async exchang(){await 1,this.remaine>0?(this.emit("tick"),await k(1e3)):(this.color=this.nextColor,this.emit("change"),this.setTime()),this.exchang()}}const v={class:""},x=o("div",null,s(["red","green","yellow"]),-1),y={__name:"index",setup(c){const e=[3,5,2],t=new p({color:"red",timeList:e});t.on("change",i=>{console.log("颜色改变了===")});const r=i=>{a.value=i},l=i=>{console.log(`22222剩余时间：${i.remaine}，当前颜色${i.color}`)},h=i=>{console.log(`3333333剩余时间：${i.remaine}，当前颜色${i.color}`)};t.on("tick",r),t.on("tick",l),console.log(t);const m=()=>{t.off("tick",l)},d=()=>{t.on("tick",h)},a=g({remaine:0,color:""});return(i,_)=>(u(),f("div",v,[o("button",{onClick:m},"清除事件tickPlay2"),o("button",{onClick:d},"添加事件tickPlay3"),o("div",null,s(e)),x,o("div",null,"剩余时间："+s(a.value.remaine.toFixed()),1),o("div",null,"当前颜色："+s(a.value.color),1)]))}};export{y as default};
