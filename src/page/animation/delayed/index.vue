<script setup>
import {ref} from 'vue';
const value = ref(0);
</script>

<template>
	<div class="main">
		<div class="item">球</div>
	</div>
</template>

<style scoped lang="scss">
.item {
	--w: 50px;
	width: var(--w);
	height: var(--w);
	line-height: var(--w);
	background: #ccc;
	border-radius: 50%;
	text-align: center;

	animation-name: movekey;
	animation-duration: 1s;
	animation-timing-function: linear;

	animation-delay: -0.5s;

	animation-fill-mode: forwards;
	animation-play-state: paused;
}
@keyframes movekey {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(300px);
	}
}
.main {
	padding: 100px;
}
.slider {
	width: 350px;
	margin-bottom: 100px;
}
</style>