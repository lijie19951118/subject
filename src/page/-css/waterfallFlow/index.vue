<script setup>
const list = [100, 200, 300, 233, 122, 555, 666, 222, 444, 555, 666]
</script>

<template>
	<div class="conteiner">
		<div class="item" v-for="(item,i) in list" :key="i" :style="{height: `${item}px`}">{{i}}</div>
	</div>
</template>

<style scoped lang="scss">
.conteiner {
	img {
		width: 100px;
	}
	display: flex;
	// flex: 1;
	flex-direction: column;
	.item {
		// flex: 1;
		// grid-column: 3;
		// grid-row: 1;
		background: #ccc;
		// width: 300px;
	}
}
</style>