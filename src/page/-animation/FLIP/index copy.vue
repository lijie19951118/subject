<script setup>
import {ref, nextTick} from 'vue';
const list = ref([1,2,3,4]);


function reverse() {
	const firstObj = {};
	// const lastObj = {};
	for(const item of list.value) {
		const dom = document.querySelector(`.box${item}`);
		dom.style.transition = null;
		const first = dom.getBoundingClientRect();
		firstObj[item] = first;
	}
	console.log(firstObj)
	list.value.reverse();
	requestAnimationFrame(() => {
		for(const item of list.value) {
			const dom = document.querySelector(`.box${item}`);
			const laset = dom.getBoundingClientRect();
			const invert = firstObj[item].top - laset.top;
			dom.style.transform = `translateY(${invert}px)`;
		}
		requestAnimationFrame(() => {
			for(const item of list.value) {
				const dom = document.querySelector(`.box${item}`);
				dom.removeEventListener('transitionend', removeAnimation);
				dom.style.transition = `all 1s`;
				dom.style.transform = '';
				dom.addEventListener('transitionend', removeAnimation)
			}
		})	
	})
}
function removeAnimation () {
	console.log('动画结束了')
}

function play() {
	const dom = document.querySelector('.first');
	const first = dom.getBoundingClientRect();
	dom.remove();
	document.querySelector('.boxs').appendChild(dom);
	const last = dom.getBoundingClientRect();
	console.log(first.top, last.top)
	const invert = first.top - last.top;
	dom.style.transform = `translateY(${invert}px)`;
	requestAnimationFrame(() => {
		dom.style.transition = 'all 1s';
		dom.style.transform = '';
	})
	dom.addEventListener('transitionend', () => {
		console.log('动画结束了')
	})
}
</script>

<template>
	<div class="">
		<div :class="['box', `box${item}`]" v-for="item in list" :key="item">{{ item }}</div>
		<el-button @click="reverse">排序</el-button>
		<div>
			---------------------
		</div>
		<div class="boxs">
			<div class="box first">1</div>
			<div class="box">2</div>
			<div class="box">3</div>
			<div class="box">4</div>
			<div class="box">5</div>
		</div>
		
		<el-button @click="play">单个</el-button>
	</div>
</template>

<style scoped lang="scss">
.box {
	border: 1px solid #ccc;
}
</style>