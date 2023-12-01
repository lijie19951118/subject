<script setup>
import animation from './animation.js';
import {ref} from 'vue';

const price = ref(2999);

function play() {
	animation(1000, 2999, 1000, (val) => {
		price.value = val.toFixed(2);
	});
}
function move() {
	animation(1000, 0, 400, (value) => {
		document.querySelector('.box').style.transform = `translateX(${value}px)`;
	})
	animation(1000, 0, 200, (value) => {
		document.querySelector('.box2').style.transform = `translateY(${value}px)`;
	})
}
</script>

<template>
	<p>价格：<span class="price">{{price}}</span></p>
	<el-button type="primary" @click="play">打折</el-button>

	<div class="box">
		<div class="box2"></div>
	</div>
	<el-button type="primary" @click="move">向右移动400px</el-button>
</template>

<style scoped lang="scss">
p {
	font-size: 20px;
}
.box {
	width: 50px;
	height: 50px;
	border-radius: 50%;
	.box2 {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: goldenrod;
	}
}
</style>