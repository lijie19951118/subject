<script setup>
</script>

<template>
	<div class="min">
		<div class="box">
			<div class="item">123</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.min {
	height: 2000px;
	width: 2000px;
	.box {
		height: 300px;
		width: 300px;
		overflow-y: auto;
		.item {
			height: 500px;
			width: 300px;
			background: #ccc;
		}
	}
}
</style>