import{$ as d,r as n,U as b,a0 as y,f as x,g as m,j as l,k as h,l as p,p as S,m as u}from"./vendor-d9749800.js";import{_ as g}from"./index-03982bc1.js";const f=["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],C="rgba(0,0,0,0)",w={},_={textStyle:{color:"#008acd"},subtextStyle:{color:"#aaaaaa"}},k={itemStyle:{borderWidth:1},lineStyle:{width:2},symbolSize:3,symbol:"emptyCircle",smooth:!0},A={itemStyle:{borderWidth:1},lineStyle:{width:2},symbolSize:3,symbol:"emptyCircle",smooth:!0},I={itemStyle:{barBorderWidth:0,barBorderColor:"#ccc"}},W={itemStyle:{borderWidth:0,borderColor:"#ccc"}},v={itemStyle:{borderWidth:0,borderColor:"#ccc"}},L={itemStyle:{borderWidth:0,borderColor:"#ccc"}},$={itemStyle:{borderWidth:0,borderColor:"#ccc"}},B={itemStyle:{borderWidth:0,borderColor:"#ccc"}},M={itemStyle:{borderWidth:0,borderColor:"#ccc"}},N={itemStyle:{borderWidth:0,borderColor:"#ccc"}},T={itemStyle:{color:"#d87a80",color0:"#2ec7c9",borderColor:"#d87a80",borderColor0:"#2ec7c9",borderWidth:1}},z={itemStyle:{borderWidth:0,borderColor:"#ccc"},lineStyle:{width:1,color:"#aaaaaa"},symbolSize:3,symbol:"emptyCircle",smooth:!0,color:["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],label:{color:"#eeeeee"}},P={itemStyle:{areaColor:"#dddddd",borderColor:"#eeeeee",borderWidth:.5},label:{color:"#d87a80"},emphasis:{itemStyle:{areaColor:"rgba(254,153,78,1)",borderColor:"#444",borderWidth:1},label:{color:"rgb(100,0,0)"}}},V={itemStyle:{areaColor:"#dddddd",borderColor:"#eeeeee",borderWidth:.5},label:{color:"#d87a80"},emphasis:{itemStyle:{areaColor:"rgba(254,153,78,1)",borderColor:"#444",borderWidth:1},label:{color:"rgb(100,0,0)"}}},j={axisLine:{show:!0,lineStyle:{color:"#008acd"}},axisTick:{show:!0,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#333"},splitLine:{show:!1,lineStyle:{color:["#eee"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},E={axisLine:{show:!0,lineStyle:{color:"#008acd"}},axisTick:{show:!0,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#333"},splitLine:{show:!0,lineStyle:{color:["#eee"]}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},J={axisLine:{show:!0,lineStyle:{color:"#008acd"}},axisTick:{show:!0,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#333"},splitLine:{show:!0,lineStyle:{color:["#eee"]}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},O={axisLine:{show:!0,lineStyle:{color:"#008acd"}},axisTick:{show:!0,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#333"},splitLine:{show:!0,lineStyle:{color:["#eee"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},Z={iconStyle:{borderColor:"#2ec7c9"},emphasis:{iconStyle:{borderColor:"#18a4a6"}}},D={textStyle:{color:"#333333"}},U={axisPointer:{lineStyle:{color:"#008acd",width:"1"},crossStyle:{color:"#008acd",width:"1"}}},q={lineStyle:{color:"#008acd",width:1},itemStyle:{color:"#008acd",borderWidth:1},controlStyle:{color:"#008acd",borderColor:"#008acd",borderWidth:.5},checkpointStyle:{color:"#2ec7c9",borderColor:"#2ec7c9"},label:{color:"#008acd"},emphasis:{itemStyle:{color:"#a9334c"},controlStyle:{color:"#008acd",borderColor:"#008acd",borderWidth:.5},label:{color:"#008acd"}}},F={color:["#5ab1ef","#e0ffff"]},G={backgroundColor:"rgba(47,69,84,0)",dataBackgroundColor:"#efefff",fillerColor:"rgba(182,162,222,0.2)",handleColor:"#008acd",handleSize:"100%",textStyle:{color:"#333333"}},H={label:{color:"#eeeeee"},emphasis:{label:{color:"#eeeeee"}}},K={color:f,backgroundColor:C,textStyle:w,title:_,line:k,radar:A,bar:I,pie:W,scatter:v,boxplot:L,parallel:$,sankey:B,funnel:M,gauge:N,candlestick:T,graph:z,map:P,geo:V,categoryAxis:j,valueAxis:E,logAxis:J,timeAxis:O,toolbox:Z,legend:D,tooltip:U,timeline:q,visualMap:F,dataZoom:G,markPoint:H};const Q={class:"main"},R={class:"option"},X={class:"slider-demo-block"},Y={__name:"index",setup(ee){d("macarons",K);const i=n(null);let r;function c(){const t={series:[]};for(let o=0;o<4;o++)for(let e=0;e<7;e++)t.series[o]||(t.series[o]={data:[]}),t.series[o].data[e]=parseInt(1e3*Math.random());r.setOption(t)}return b(()=>{r=y(i.value,"macarons");const t={grid:[{width:"30%"},{left:"50%",width:"30%"}],axisPointer:{link:[{xAxisIndex:"all"},{yAxisIndex:"all"}]},xAxis:[{gridIndex:0,data:["周一","周二","周三","周四","周五","周六","周日"],name:"日期"},{gridIndex:1,name:"日期",type:"category",data:["2024-1-1","2024-1-2","2024-1-3","2024-1-4","2024-1-5","2024-1-6","2024-1-7"]}],yAxis:[{gridIndex:0,name:"元",splitLine:{show:!0}},{gridIndex:1,name:"件"}],legend:{show:!0,lineStyle:{cap:"round"}},tooltip:{axisPointer:{type:"cross"},renderMode:"html",trigger:"axis",className:"toolBox",textStyle:{fontSize:18},formatter:o=>{let e=o.filter(a=>a.axisIndex===0).sort((a,s)=>s.data-a.data);return`<div>
						<h6>销售排行：${o[0].axisValue}</h6>
						<div class="toolrow" style="color: ${e[0].color}">
							<img src="/first.png" >	
							<span>${e[0].seriesName}</span>
							<span>${e[0].data} ${e[0].axisIndex===0?"元":"件"}</span>
						</div>
						<div class="toolrow" style="color: ${e[1].color}">
							<img src="/second.png">	
							<span>${e[1].seriesName}</span>
							<span>${e[1].data}  ${e[0].axisIndex===0?"元":"件"}</span>
						</div>
					</div>`}},series:[{id:1,yAxisIndex:0,xAxisIndex:0,type:"line",name:"Maria",data:[40,50,55,54,43,31,23]},{id:2,yAxisIndex:1,xAxisIndex:1,type:"bar",name:"Maria",data:[50,40,50,40,50,30,40]},{id:3,yAxisIndex:0,xAxisIndex:0,type:"line",name:"Jake",data:[30,20,25,10,30,10,11]},{id:4,yAxisIndex:1,xAxisIndex:1,type:"bar",name:"Jake",data:[30,20,10,20,30,10,11]}]};r.setOption(t)}),(t,o)=>{const e=S;return x(),m("div",Q,[l("div",{ref_key:"dom",ref:i,id:"echart",width:"900",height:"500"},null,512),l("div",R,[l("div",X,[h(e,{onClick:c,type:"primary"},{default:p(()=>[u("修改数据")]),_:1})])])])}}},re=g(Y,[["__scopeId","data-v-241e3c98"]]);export{re as default};