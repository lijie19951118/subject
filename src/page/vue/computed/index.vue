<template>
  <!-- <input type="text" v-model="count" />
  <div class="">{{ result }}</div>

  <input type="text" v-model="result" /> -->
  <input type="text" v-model="obj.happer" />
  <input type="text" v-model="obj.item.age" />
  <div ref="box">{{ obj }}</div>
</template>

<script setup>
import { ref, computed, reactive, watch } from "vue";

// const count = ref(10);

// const result = computed({
//   get() {
//     return count.value * 2;
//   },
//   set(value) {
//     count.value = value / 10;
//   },
// });
// console.log(result);

const box = ref(null);

let obj2 = {
  name: "lisi",
};
setTimeout(() => {
  obj2.name = "wangwu";
  // console.log(obj2);
}, 1000);
const name = ref("Jie");
const obj = reactive({
  happer: "游戏",
  item: {
    age: 10,
  },
});
const stop = watch(
  obj,
  (nVal, oVal, cleanUp) => {
    // cleanUp(() => {
    //   console.log("清除副作用");
    // });
    // console.log(box.value.innerHTML);
    console.log(nVal, oVal);
    // if (nVal.item.age == 1) {
    //   stop();
    // }
  },
  {
    deep: true,
    // flush: "post",
  }
);
</script>

<style scoped lang="scss"></style>
