<script setup>
// error
// const image1 = '../../../assets/3.jpg';

// success
import image2 from '../../../assets/3.jpg';
</script>

<template>
	<div class="">
		<img src="@/assets/image/2.jpeg" alt="">
		<img src="@/assets/3.jpg" alt="">
		<!-- 线上有问题 -->
		<img src="./image/1.png" alt="">
		<!-- 本地和线上有问题 -->
		<img :src="image2" alt="">
		<!-- <img :src="require(image1)" alt=""> -->
	</div>
</template>

<style scoped lang="scss">
img {
	width: 100px;
}
</style>