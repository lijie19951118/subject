<script setup>
import {ref} from 'vue';
const value = ref(0);
</script>

<template>
	<div class="main">
		<input class="slider" type="range" v-model="value" :min="0" :max="1" :step="0.01">{{ value }}
		<div class="item" :style="{'--delay': `-${value}s`}">3</div>
	</div>
</template>

<style scoped lang="scss">
.item {
	--delay: 0;
	--w: 50px;
	width: var(--w);
	height: var(--w);
	line-height: var(--w);
	text-align: center;

	animation-name: movekey;
	animation-duration: 1s;
	animation-timing-function: linear;
	animation-delay: var(--delay);
	animation-fill-mode: forwards;
	animation-play-state: paused;
}
@keyframes move {
	0% {
		transform: translateX(0) scale(100%) rotate(0);
		background: grey;
		color: #fff;
		border-radius: 50%;
	}
	50% {
		transform: translate(150px, 100px) scale(200%) rotate(180deg);
		background: green;
		color: goldenrod;
		border-radius: 2%;
	}
	100% {
		transform: translateX(300px) scale(100%) rotate(360deg);
		background: goldenrod;
		color: grey;
		border-radius: 50%;
	}
}
.main {
	padding: 100px;
}
.slider {
	width: 300px;
	margin-bottom: 100px;
}
</style>