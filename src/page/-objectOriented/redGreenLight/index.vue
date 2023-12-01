<script setup>
import {RedGreenLight} from './RedGreenLight.js';
import {ref, reactive} from 'vue';

const timeList = [3, 5, 2];
const a = new RedGreenLight({
	color: 'red',
	timeList
});

a.on('change', (row) => {
	console.log('颜色改变了===')
})
const tickPlay = (row) => {
	// console.log(`剩余时间：${row.remaine}，当前颜色${row.color}`)
	obj.value = row;
}
const tickPlay2 = (row) => {
	console.log(`22222剩余时间：${row.remaine}，当前颜色${row.color}`)
}
const tickPlay3 = (row) => {
	console.log(`3333333剩余时间：${row.remaine}，当前颜色${row.color}`)
}
a.on('tick', tickPlay)
a.on('tick', tickPlay2)
console.log(a)

const clear = () => {
	a.off('tick', tickPlay2)
}
const add = () => {
	a.on('tick', tickPlay3)
}

const obj = ref({
	remaine: 0,
	color: ''
});
</script>

<template>
	<div class="">
		<button @click="clear">清除事件tickPlay2</button>
		<button @click="add">添加事件tickPlay3</button>
		<div>{{timeList}}</div>
		<div>{{['red', 'green', 'yellow']}}</div>
		<div>剩余时间：{{obj.remaine.toFixed()}}</div>
		<div>当前颜色：{{obj.color}}</div>
	</div>
</template>

<style scoped lang="scss">

</style>