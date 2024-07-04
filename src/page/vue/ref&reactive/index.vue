<template>
  <div class="">
    <!-- <div>{{ obj.a.b.c }}</div>
    <div>{{ obj.b }}</div>
    <button @click="setShallow">修改c和b</button> -->
  </div>
</template>

<script setup>
import { ref, isRef, toRef, toRefs, unref, toRaw, reactive, shallowReactive } from "vue";

// isRef
// const a = ref(123);
// console.log(a);
// console.log(isRef(a));

// toRef toRefs unref
// const obj = reactive({ a: 1, b: 2, c: 3 });
// console.log(obj);
// const newref = toRef(obj, "a");
// const { a, b, c } = toRefs(obj);
// console.log(a, b, c);
// a.value = 11111;
// console.log(obj);
// const una = unref(a);
// console.log(una);

//toRaw
// const obj = reactive({ a: 1, b: 2, c: 3 });
// const raw = toRaw(obj);
// console.log(raw);
// raw.a = 111;
// console.log(obj);

//shallowRef
// shallowReactive
// const obj = shallowReactive({
//   a: {
//     b: {
//       c: 1111,
//     },
//   },
//   b: 2222,
// });
// function setShallow() {
//   obj.a.b.c = 33333;
//   obj.b = 44444;
//   console.log(obj);
// }

// setup	---- create
// onActived ---- actived
// onBeforeMounted --- beforeMounted
// onMounted ---- mounted
// onUpdated ---- updated
// onBeforeUnMounted ---- beforeDestroy
// onUnMounted ---- destroy
</script>

<style scoped lang="scss"></style>
