<script setup>
import directives from "./directives.js";
const vEnterIn = directives;
</script>

<template>
  <!-- <div>请下滑...</div> -->
  <div class="smooth">
    <img v-enter-in class="item" src="@/assets/image/smooth-1.jpg" />
    <img v-enter-in class="item" src="@/assets/image/smooth-2.jpg" />
    <img v-enter-in class="item" src="@/assets/image/smooth-3.jpg" />
    <img v-enter-in class="item" src="@/assets/image/smooth-4.jpg" />
    <img v-enter-in class="item" src="@/assets/image/smooth-1.jpg" />
    <img v-enter-in class="item" src="@/assets/image/smooth-2.jpg" />
    <img v-enter-in class="item" src="@/assets/image/smooth-3.jpg" />
    <img v-enter-in class="item" src="@/assets/image/smooth-4.jpg" />
  </div>
  <div>footer</div>
</template>

<style scoped lang="scss">
.smooth {
  .item {
    display: block;
    width: 800px;
    height: 500px;
    border-radius: 10px;
    border: 1px solid #ccc;
    margin: 0 auto 30px;
    text-align: center;
    background: #ccc;
  }
}
</style>
