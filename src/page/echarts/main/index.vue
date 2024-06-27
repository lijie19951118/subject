<template>
  <div class="main">
    <div ref="dom" id="echart" width="900" height="500"></div>
    <div class="option">
      <div class="slider-demo-block">
        <el-button @click="changeData" type="primary">修改数据</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import macarons from "./macarons.json";

echarts.registerTheme("macarons", macarons);

const dom = ref(null);
let myecharts;

function changeData() {
  const options = {
    series: [],
  };
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 7; j++) {
      if (!options.series[i]) {
        options.series[i] = {
          data: [],
        };
      }
      options.series[i].data[j] = parseInt(1000 * Math.random());
    }
  }
  myecharts.setOption(options);
}

onMounted(() => {
  myecharts = echarts.init(dom.value, "macarons");
  const options = {
    grid: [
      {
        width: "30%",
      },
      {
        left: "50%",
        width: "30%",
      },
    ],
    axisPointer: {
      link: [
        {
          xAxisIndex: "all",
        },
        {
          yAxisIndex: "all",
        },
      ],
    },
    xAxis: [
      {
        gridIndex: 0,
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        name: "日期",
      },
      {
        gridIndex: 1,
        name: "日期",
        type: "category",
        data: [
          "2024-1-1",
          "2024-1-2",
          "2024-1-3",
          "2024-1-4",
          "2024-1-5",
          "2024-1-6",
          "2024-1-7",
        ],
      },
    ],
    yAxis: [
      {
        gridIndex: 0,
        name: "元",
        splitLine: {
          show: true,
        },
      },
      {
        gridIndex: 1,
        name: "件",
        // data: [1, 3, 43, 4, 5, 435, 31],
      },
    ],
    legend: {
      show: true,
      lineStyle: {
        cap: "round",
      },
    },
    tooltip: {
      axisPointer: {
        type: "cross",
      },
      renderMode: "html",
      trigger: "axis",
      className: "toolBox",
      textStyle: {
        fontSize: 18,
      },
      formatter: (params) => {
        let _params = params
          .filter((item) => item.axisIndex === 0)
          .sort((pre, now) => {
            return now.data - pre.data;
          });
        return `<div>
						<h6>销售排行：${params[0].axisValue}</h6>
						<div class="toolrow" style="color: ${_params[0].color}">
							<img src="/first.png" >	
							<span>${_params[0].seriesName}</span>
							<span>${_params[0].data} ${_params[0].axisIndex === 0 ? "元" : "件"}</span>
						</div>
						<div class="toolrow" style="color: ${_params[1].color}">
							<img src="/second.png">	
							<span>${_params[1].seriesName}</span>
							<span>${_params[1].data}  ${_params[0].axisIndex === 0 ? "元" : "件"}</span>
						</div>
					</div>`;
      },
    },
    series: [
      {
        id: 1,
        yAxisIndex: 0,
        xAxisIndex: 0,
        type: "line",
        name: "Maria",
        data: [40, 50, 55, 54, 43, 31, 23],
      },
      {
        id: 2,
        yAxisIndex: 1,
        xAxisIndex: 1,
        type: "bar",
        name: "Maria",
        data: [50, 40, 50, 40, 50, 30, 40],
      },
      {
        id: 3,
        yAxisIndex: 0,
        xAxisIndex: 0,
        type: "line",
        name: "Jake",
        data: [30, 20, 25, 10, 30, 10, 11],
      },
      {
        id: 4,
        yAxisIndex: 1,
        xAxisIndex: 1,
        type: "bar",
        name: "Jake",
        data: [30, 20, 10, 20, 30, 10, 11],
      },
    ],
  };
  myecharts.setOption(options);
});
</script>

<style scoped lang="scss">
.main {
  padding: 40px;
}
#echart {
  width: 1400px;
  height: 400px;
  :deep(.toolBox) {
    // background: red !important;
    h6 {
      // font-weight: bold;
      font-size: 20px;
    }
    img {
      width: 30px;
    }
  }
}
.option {
  width: 400px;
}
</style>
