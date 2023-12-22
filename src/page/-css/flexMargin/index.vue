<script setup>
</script>

<template>
	<div class="">
		上下左右居中
		<div class="item item1">
			<div class="box box1"></div>
		</div>
		右1靠右
		<div class="item">
			<div class="box box2"></div>
			<div class="box"></div>
		</div>
		右2居中
		<div class="item">
			<div class="box"></div>
			<div class="box"></div>
			<div class="box "></div>
			<div class="box box3"></div>
		</div>
		均匀分布
		<div class="item item4">
			<div class="box box4"></div>
			<div class="box box4"></div>
			<div class="box box4"></div>
			<div class="box box4"></div>
			<div class="box box4"></div>
			<div class="box box4"></div>
			<div class="box box4"></div>
			<div class="box box4"></div>
			<div class="box box4"></div>
			<div class="box box4"></div>
			<div class="box box4"></div>
			<div class="box box4"></div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.item {
	width: 800px;
	margin: 30px;
	border: 5px solid #ccc;
	display: flex;
	flex-wrap: wrap;

	// justify-content: space-between;
	// align-items: center;
	
	.box1 {
		margin: auto;
	}
	.box2 {
		margin-right: auto;
	}
	.box3 {
// margin: auto;
margin-left: auto;
	}
	.box {
		width: 50px;
		height: 50px;
	}
	.box:nth-of-type(2n+1) {
		background: gray;
	}
	.box:nth-of-type(2n) {
		background: brown;
	}
	.box:nth-of-type(1) {
		background: gray;
	}
	.box:nth-of-type(2) {
		background: orange;
	}
	.box:nth-of-type(3) {
		background: red;
	}
	.box:nth-of-type(4) {
		background: darkgreen;
	}
}
.item1 {
	height: 500px;
}
.item4 {
	.box4 {
		// --num: 5;
		// --gap: calc((100% - 50px * var(--num)) / var(--num) / 2);
		// margin: 0 var(--gap) 10px;
		margin: 0 calc((100% - 50px * 5) / 5 / 2) 10px;
	}
}
</style>