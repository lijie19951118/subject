<script setup></script>

<template>
  <div class="main">
    <h1>鼠标悬浮👇</h1>
    <div class="item">
      <div class="item1"></div>
      <img class="img1" src="@/assets/image/4.png" alt="" />
      <img class="img2" src="@/assets/image/5.png" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  padding: 50px;
}
.item {
  width: 300px;
  height: 400px;
  position: relative;
  margin: 50px;
  .item1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("@/assets/image/3.jpg");
    background-position: top center;
    background-size: auto 100%;
    transition: 0.3s;
  }
  .img1 {
    position: absolute;
    left: 0;
    top: 10px;
    width: 80%;
    opacity: 0;
    transition: 0.3s;
  }
  .img2 {
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    transition: 0.3s;
  }
}
.item:hover {
  .item1 {
    transform: perspective(500px) rotateX(40deg);
    box-shadow: 0 30px 30px -20px rgba(0, 0, 0, 0.7);
  }
  .img1 {
    opacity: 1;
    transform: perspective(500px) translate3d(0, -20px, 30px);
  }
  .img2 {
    transform: perspective(500px) translate3d(0, -20px, 10px);
  }
}
</style>
