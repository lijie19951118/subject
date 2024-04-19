<script setup>
</script>

<template>
	<div class="main">
		<span v-for="item in 1000" :key="item">*</span>
	</div>
</template>

<style scoped lang="scss">
.main {
	display: flex;
	flex-wrap: wrap;
	width: 400px;
	border: 1px solid #333;
	color: #000;
}
</style>