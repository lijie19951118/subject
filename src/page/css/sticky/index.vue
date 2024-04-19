<script setup>
const imgList = [
	'https://wsnbh-img.hzanchu.com/h5/guanwang/image/11.jpg',
	'https://wsnbh-img.hzanchu.com/h5/guanwang/image/lQDPJxmFqJTXbxbNDl_NHnawMKy6eHWkRBkEWi0MbcDTAg_7798_3679.jpg',
	'',
	'https://wsnbh-img.hzanchu.com/h5/guanwang/image/lQDPJxnFUrjIohbNCm7ND6CwoqEY6t3F2nEEWi0MbcDQAA_4000_2670.jpg',
	'https://wsnbh-img.hzanchu.com/h5/guanwang/image/lQDPJyDOH0LPBtbNBP3NC7iwq7NIxOtlmi8EWi0MbcDQAQ_3000_1277.jpg',
	'',
	'https://wsnbh-img.hzanchu.com/h5/guanwang/image/lQLPJx8QeFpYtBbNBKXNCDew4xggwM2F6SgEWi0MbcDTAw_2103_1189.png',
	'',
]
/** */
</script>

<!-- 
包含快
最近可滚动视口
-->
<template>
	<div class="box1">
		<div class="line">
			<div class="header">A</div>
			<div>aaa</div>
			<div>aaaddd</div>
			<div>aaadasd</div>
			<div>aaadasddasda</div>
			<div>aaadasd</div>
			<div>aaada</div>
			<div>aaada</div>
		</div>
		<div class="line">
			<div class="header">B</div>
			<div>bbbbaa</div>
			<div>bbbbdddd</div>
			<div>bbbbddasd</div>
			<div>bbbbddasddasda</div>
			<div>bbbbddasd</div>
			<div>bbbbdda</div>
			<div>bbbbdda</div>
		</div>
		<div class="line">
			<div class="header">C</div>
			<div>ccccaa</div>
			<div>ccccdddd</div>
			<div>ccccddasd</div>
			<div>ccccddasddasda</div>
			<div>ccccddasd</div>
			<div>ccccdda</div>
			<div>ccccdda</div>
		</div>
		<div class="line">
			<div class="header">D</div>
			<div>dddddaa</div>
			<div>ddddddddd</div>
			<div>dddddddasd</div>
			<div>dddddddasddasda</div>
			<div>dddddddasd</div>
			<div>ddddddda</div>
			<div>ddddddda</div>
		</div>
	</div>

	<div class="box2">
		<template v-for="img in imgList" :key="img">
			<img v-if="img" :src="img" alt="" />
			<div v-else class="black"></div>
		</template>
	</div>
</template>

<style scoped lang="scss">
.box1 {
	position: fixed;
	left: 50px;
	top: 50px;
	width: 300px;
	height: 500px;
	border: 1px solid #ccc;
	overflow: scroll;
	.line {
		> div {
			line-height: 40px;
			font-weight: bold;
			font-size: 20px;
			border-bottom: 1px solid #ccc;
			padding-left: 20px;
		}
		.header {
			background: #ccc;

			position: sticky;
			top: 0;
		}
	}
}

.box2 {
	position: fixed;
	top: 50px;
	right: 50px;
	display: flex;
	flex-wrap: wrap;
	background: #000;
	width: 700px;
	height: 500px;
	overflow: scroll;
	img {
		width: 50%;
		height: 100%;
		box-shadow: -5px -5px 10px rgba(0,0,0,.5);

		position: sticky;
		top: 0;
	}
	.black {
		width: 50%;
		height: 100%;
	}
}
</style>