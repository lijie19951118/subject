<script setup>
import { onMounted, onUnmounted } from 'vue';
function getFun(width, center, power) {
	return function (x) {
		const b = Math.PI / width;
		const c = - (center - (width / 2)) * b
		const y = power * Math.sin(x * b + c) + 1;
		if (x > center + (width / 2) || x < center - (width / 2)) {
			return 1
		} else {
			return y;
		}
	}
}

const widrh = 300; // 宽度
const power = 0.8; // 1-5 倍之间

function int(e, type) {
	const setBox = getFun(widrh, e.x, power);
	const main = document.querySelector('.main');
	for(let dom of main.childNodes) {
		if (type === 'out') {
			dom.style.setProperty('transition', 'all 0.3s');
		} else {
			dom.style.setProperty('transition', 'all 0s');
		}
		const obj = dom.getBoundingClientRect();
		const left = obj.x + dom.offsetWidth / 2;
		const x = setBox(left);
		dom.style.setProperty('--d', x);
	}
}
function inout(e) {
	e.stopPropagation();
	int({x: -100}, 'out');
}
onMounted(() => {
	const main = document.querySelector('.main');
	main.addEventListener('mousemove', int);
	main.addEventListener('mouseleave', inout)
})
onUnmounted(() => {
	const main = document.querySelector('.main');
	main.removeEventListener('mousemove', int);
	main.removeEventListener('mouseleave', inout);
})
</script>

<template>
	<div class="main">
		<div class="box"></div>
		<div class="gap"></div>
		<div class="box"></div>
		<div class="gap"></div>
		<div class="box"></div>
		<div class="gap"></div>
		<div class="box"></div>
		<div class="gap"></div>
		<div class="box"></div>
		<div class="gap"></div>
		<div class="box"></div>
		<div class="gap"></div>
		<div class="box"></div>
		<div class="gap"></div>
		<div class="box"></div>
		<div class="gap"></div>
		<div class="box"></div>
		<div class="gap"></div>
		<div class="box"></div>
		<div class="gap"></div>
		<div class="box"></div>
		<div class="gap"></div>
		<div class="box"></div>
	</div>
</template>

<style scoped lang="scss">
.main {
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	bottom: 50px;
	display: flex;
	align-items: flex-end;
	border: 1px solid #ccc;
	backdrop-filter: blur(10px);
	border-radius: 6px;
	padding: 0 10px;
	height: 70px;
	div {
		--d: 1;
		margin-bottom: calc(10px * var(--d));
		transition: all 0s;
	}
	.box {
		--w: 50px;
		width: calc(var(--w) * var(--d));
		height: calc(var(--w) * var(--d));
		border-radius: 8px;
		background-color: #ccc;
	}
	.gap {
		width: calc(10px * var(--d));
	}
}
</style>