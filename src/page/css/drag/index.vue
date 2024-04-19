<script setup>
import {ref, onMounted} from 'vue';
import {Flip} from '@/page/-animation/FLIP/flip.js'

let sourceNode;
let flip;

onMounted(() => {
	const list = document.querySelector('.content');
	list.addEventListener('dragstart', (e) => {
		e.stopPropagation();
		sourceNode = e.target;
		setTimeout(() => {
			e.target.classList.add('moving');
		}, 0)
		flip = new Flip(list.childNodes, 200);
	})
	list.addEventListener('dragover', (e) => {
		e.stopPropagation();
	})
	list.addEventListener('dragend', (e) => {
		console.log('拖拽结束')
		e.target.classList.remove('moving');
	})
	list.addEventListener('dragenter', (e) => {
		if (e.target === list || e.target === sourceNode) {
			return
		}
		const dragList = Array.from(list.childNodes);
		const dragIndex = dragList.indexOf(sourceNode);
		const dragenterIndex = dragList.indexOf(e.target);
		if (dragIndex > dragenterIndex) {
			console.log('向上拖动')
			list.insertBefore(sourceNode, e.target);
		} else if (dragIndex < dragenterIndex){
			console.log('向下拖动')
			list.insertBefore(sourceNode, e.target.nextElementSibling);
		}
		flip.play();
	})
})
</script>

<template>
	<div class="content">
		<div draggable="true" class="item">1</div>
		<div draggable="true" class="item">2</div>
		<div draggable="true" class="item">3</div>
		<div draggable="true" class="item">4</div>
		<div draggable="true" class="item">5</div>
		<div draggable="true" class="item">6</div>
	</div>
</template>

<style scoped lang="scss">
.content {
	padding: 0px;
	.item {
		width: 500px;
		height: 50px;
		background: #85bbf1;
		border-radius: 5px;
		margin-bottom: 10px;
		opacity: 1!important;
	}
	.moving {
		border: 1px solid #ccc;
		background: transparent;
		color: transparent;
		opacity: 1!important;
	}
}
</style>