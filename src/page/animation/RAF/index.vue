<script setup>
import { onMounted, ref } from 'vue';

const str = ref('');

onMounted(() => {
	// setInterval(() => {
	// 	str.value = str.value + Math.random();
	// }, 50)

	const element = document.querySelector('.animation2');
	const endTime = 4000;
	const startX = 0;
	const endX = 500;
	const speed = (endX - startX) / endTime;	// 0.25px每毫秒

	// 计时器
	let value = startX;
	let interval = 1000 / 60; 
	// const startTime = Date.now();
	const timer = setInterval(() => {
		const d = interval * speed;
		value = value + startX + d;
		if (value >= endX) {
			clearInterval(timer);
			return;
		}
		document.querySelector('.animation1').style.transform = `translateX(${value}px)`;
	}, interval);

	// raf
	let startTime;
	function animate(timestamp) { // timestamp停留在当前页面的时间，单位毫秒
		if (!startTime) startTime = timestamp;
		const time = timestamp - startTime;
		const d = time * speed;
		const value = startX + d;
		element.style.transform = `translateX(${value}px)`;
		if (time >= endTime) {
			return;
		}
		requestAnimationFrame(animate);
	}
	requestAnimationFrame(animate);

})


</script>

<template>
	<div class="item animation1">计时器</div>
	<div class="item animation2">RAF</div>

	<div style="word-wrap: break-word">{{ str }}</div>
</template>

<style scoped lang="scss">
.item {
	--w: 50px;
	width: var(--w);
	height: var(--w);
	border-radius: 50%;
	line-height: var(--w);
	text-align: center;
	margin-bottom: 20px;
}
.animation1 {
	background: goldenrod;
}
.animation2 {
	background: gray;
}
</style>