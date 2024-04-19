<script setup>
const emit = defineEmits('clear');
const props = defineProps({
	title: {
		type: String,
		default: ''
	}
})
</script>

<template>
	<div class="imperative">
		<div class="message">
			<div class="title">{{title}}</div>
			<button class="submit" @click="emit('clear')">确 定</button>
		</div>
	</div>
</template>

<style scoped lang="scss">
.imperative {
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	z-index: 9999999;
	background: rgba(0,0,0,.5);
	.message {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		background: #fff;
		border-radius: 4px;
		width: 400px;
		text-align: center;
		padding: 30px 0;
		.title {
			margin-bottom: 20px;
			font-size: 18px;
		}
	}
	button {
		background: #409eff;
		border: none;
		color: #fff;
		padding: 8px 20px;
		border-radius: 4px;
		cursor: pointer;
		
	}
	button:active {
		background: #79bbff;
	}
}
</style>