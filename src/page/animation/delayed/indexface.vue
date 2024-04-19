<script setup>
import {ref} from 'vue';
const value = ref(0);
</script>

<template>
	<div class="main">
		<input class="slider" type="range" v-model="value" :min="0" :max="1" :step="0.01">{{ value }}
		<div class="face" :style="{'--delay': `-${value}s`}">
			<div class="eye left"></div>
			<div class="eye right"></div>

			<div class="mouth"></div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.face {
	--delay: 0s;

	--face: 150px;
	position: relative;
	border-radius: 50%;
	width: var(--face);
	height: var(--face);
	animation: facekey 1s linear var(--delay) forwards paused;
	.eye {
		--eye: 30px;
		position: absolute;
		top: 40px;
		width: var(--eye);
		height: var(--eye);
		border-radius: 50%;
		background: #fff;
	}
	
	.left {
		left: 35px;
		animation: eyeleft 1s linear var(--delay) forwards paused;
	}
	.right {
		right: 35px;
		animation: eyeright 1s linear var(--delay) forwards paused;
	}
	.mouth {
		position: absolute;
		bottom: 20px;
		left: 50%;
		margin-left: -20px;
		width: 40px;
		height: 20px;
		background: #fff;
		animation: mouthkey 1s linear var(--delay) forwards paused;
	}
	@keyframes facekey {
		0% {
			background: red;
			transform: scale(100%, 100%);
		}
		100% {
			background: greenyellow;
			transform: scale(140%, 140%);
		}
	}
	@keyframes eyeleft {
		0% {
			clip-path: polygon(0 70%, 100% 0, 100% 100%, 0 100%);
		}
		100% {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
		}
	}
	@keyframes eyeright {
		0% {
			clip-path: polygon(0% 0%, 100% 70%, 100% 100%, 0 100%);
		}
		100% {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
		}
	}
	@keyframes mouthkey {
		0% {
			border-radius: 40px 40px 0 0;
		}
		100% {
			border-radius:  0 0 40px 40px;
		}
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