<template>
  <div class="">懒加载</div>
  <button @click="lazy">点击记载组件</button>
  <List v-if="show" />
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";
import LoadingComponent from "./LoadingComponent.vue";
import ErrorComponent from "./ErrorComponent.vue";

let List = defineAsyncComponent({
  loader: () => import("./List.vue"),
  loadingComponent: LoadingComponent,
  delay: 200,
  errorComponent: ErrorComponent,
  timeout: 400,
});

const show = ref(false);

function lazy() {
  show.value = !show.value;
}
</script>

<style scoped lang="scss"></style>
