import{r as c,U as r,f as i,g as p,j as l,aa as u}from"./vendor-d9749800.js";const d={class:""},h={__name:"index",setup(m){const t=c("");async function a(){const o=await new u({apiKey:"",dangerouslyAllowBrowser:!0}).chat.completions.create({model:"gpt-3.5-turbo",messages:[{role:"user",content:"Hello!"}],stream:!0});for await(const n of o)console.log(n.choices[0].delta)}function s(){const e=new Headers;e.append("Authorization",t.value),fetch("https://api.openai.com/v1/chat/completions",{method:"post",headers:e})}return r(()=>{a()}),(e,o)=>(i(),p("div",d,[l("button",{onClick:s},"发送")]))}};export{h as default};