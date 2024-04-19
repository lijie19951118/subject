<script setup>
import {ref, nextTick} from 'vue';
const list = ref([1,2,3,4]);


async function reverse() {
	const firstObj = {};
	// const lastObj = {};
	for(const item of list.value) {
		const dom = document.querySelector(`.box${item}`);
		const first = dom.getBoundingClientRect();
		firstObj[item] = first;
	}
	list.value.reverse();
	await nextTick();
	for(const item of list.value) {
		const dom = document.querySelector(`.box${item}`);
		const laset = dom.getBoundingClientRect();
		const invert = firstObj[item].top - laset.top;
		const animate = dom.animate([
			{transform: `translateY(${invert}px)`},
			{transform: `translateY(0)`},
		], {
			duration: 300,
			easing: 'ease'
		})
		animate.addEventListener('finish', () => {
			console.log('动画结束')
		})
	}
}





const listAdd = ref([1,2,3,4]);
async function playAdd() {
	const index = Math.random();
	listAdd.value.splice(2, 0, index);
	await nextTick();
	const dom = document.querySelector(`.addbox${index}`);
	dom.style.zIndex = -1;

	const animate = dom.animate([
		{height: 0, transform: `translate(10px,10px)`, opacity: 0},
		{height: '26px', transform: `translate(0)`, opacity: 1}
	], {
		duration: 300,
		easing: 'ease'
	})
	animate.addEventListener('finish', () => {
		dom.style.zIndex = 0;
	})
}
function ondelete(item, i) {
	const dom = document.querySelector(`.addbox${item}`);
	console.log(dom,999)
	const animate = dom.animate([
		{height: '26px', transform: `translate(0)`, opacity: 1},
		{height: 0, transform: `translate(10px,10px)`, opacity: 0},
	], {
		duration: 300,
		easing: 'ease'
	})
	animate.addEventListener('finish', () => {
		listAdd.value.splice(i, 1);
	})
}
</script>

<template>
	<div class="mine">
		<div :class="['box', `box${item}`]" v-for="item in list" :key="item">{{ item }}</div>
		<el-button @click="reverse">排序</el-button>
		<div>------------------------</div>
		<div class="add">
			<div :class="['box', `addbox${item}`]" v-for="(item, i) in listAdd" :key="item" @click="ondelete(item,i)">{{ item }} x</div>
		</div>
		<el-button @click="playAdd">插入</el-button>
	</div>
</template>

<style scoped lang="scss">
.mine {
	padding: 20px;
}
.box {
	border: 1px solid #ccc;
	width: 500px;
	background: #fff;
}
.add {
	.box {
		position: relative;
		overflow: hidden;
	}
}
</style>