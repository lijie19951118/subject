<script setup>
import directives from "./directives.js";
const vEnterIn = directives;
</script>

<template>
  <div>请下滑...</div>
  <div class="smooth">
    <div v-enter-in class="item">1</div>
    <div v-enter-in class="item">2</div>
    <div v-enter-in class="item">3</div>
    <div v-enter-in class="item">4</div>
    <div v-enter-in class="item">5</div>
    <div v-enter-in class="item">6</div>
    <div v-enter-in class="item">7</div>
  </div>
  <div>footer</div>
</template>

<style scoped lang="scss">
.smooth {
  .item {
    width: 50%;
    height: 400px;
    border-radius: 10px;
    border: 1px solid #ccc;
    margin: 0 auto 30px;
    text-align: center;
    background: #ccc;
  }
}
</style>
