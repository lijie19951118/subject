<script setup>
import {ref} from 'vue';
const left = ref(null);
const right = ref(null);
const list = ['a','b','c','d','e'];

function scrollInto(name) {
	document.querySelector(`.${name}`).scrollIntoView({
		behavior: 'smooth',
		block: 'start',
	});
}
function scrollInline(name) {
	const obj = name === 'left' ? left : right;
	obj.value.scrollIntoView({
		behavior: 'smooth',
		block: 'nearest',
		inline: 'nearest'
	});
}
</script>

<template>
	<div class="">
		<div class="content">
			<div class="box">123</div>
		</div>
		<div class="header">
			<button v-for="item in list" :key="item" @click="scrollInto(item)">{{item}}</button>
			<button @click="scrollInline('left')">left</button>
			<button @click="scrollInline('right')">right</button>
		</div>
		<div class="top">
			<div class="top-item"></div>
			<div class="top-item" ref="left"></div>
			<div class="top-item"></div>
			<div class="top-item"></div>
			<div class="top-item"></div>
			<div class="top-item" ref="right"></div>
			<div class="top-item"></div>
		</div>
		<div :class="[item, 'item']" v-for="item in list" :key="item">{{item}}</div>
	</div>
</template>

<style scoped lang="scss">
.content {
	background: #ccc;
	padding: 20px;
	width: fit-content;
	.box {
		width: 50px;
		background: #000;
	}
}
.header {
	position: fixed;
	top: 0;
	left: 30%;
}
.top {
	display: flex;
	height: 300px;
	margin:200px;
	overflow: auto;
	.top-item {
		height: 100%;
		min-width: 300px;
		border: 1px solid #333;
	}
}
.item {
	padding: 100px;
	height: 400px;
	border: 1px solid #333;
}
</style>