import{e as c,C as l,o as m,c as d,a as e,t as u}from"./myVue-f9a41b77.js";const _={class:"parabola"},p={class:"main"},C={class:"footer"},v={class:"number footer-number"},g={__name:"index",setup(b){const r=c(0);let n;function t(s){const i=s.target.getBoundingClientRect(),o=document.createElement("div"),a=document.createElement("div");o.appendChild(a),s.target.appendChild(o),o.classList.add("crosswise"),a.classList.add("lengthways"),setTimeout(()=>{o.style.transform=`translateX(${n.left-i.left}px)`,a.style.transform=`translateY(${n.bottom-i.bottom}px)`},10),setTimeout(()=>{s.target.removeChild(s.target.querySelector(".crosswise"))},1e3)}return l(()=>{n=document.querySelector(".footer-number").getBoundingClientRect()}),(s,i)=>(m(),d("div",_,[e("div",p,[e("div",{class:"number item item1",onClickCapture:t},"+",32),e("div",{class:"number item item2",onClickCapture:t},"+",32),e("div",{class:"number item item3",onClickCapture:t},"+",32),e("div",{class:"number item item4",onClickCapture:t},"+",32),e("div",{class:"number item item5",onClickCapture:t},"+",32),e("div",{class:"number item item6",onClickCapture:t},"+",32),e("div",{class:"number item item7",onClickCapture:t},"+",32)]),e("div",C,[e("div",v,u(r.value),1)])]))}};export{g as default};
