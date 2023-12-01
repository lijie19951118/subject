<script setup>
</script>

<template>
	<div>
		<div class="">子类聚焦选择器</div>
		<div class="focus">
			<input type="text">
		</div>
	</div>
	<div>
		<div>属性存在选择器/选中文案选择器</div>
		<div class="required">
			<span>名字</span>
			<input required type="text">
		</div>
		<div class="required">
			<span>年龄</span>
			<input type="text">
		</div>
	</div>
	<div>
		<div>首字母选择器</div>
		<div class="text">qrgdshdhgfhrwgfdhc ghdfgh trghdfgh trh dghdf fg hdter  fgh rth  fdhffshdhgfhrwgfdhc ghdfgh trh dghdf fg hdter  fgh rtshdhgfhrwgfdhc ghdfgh trh dghdf fg hdter  fgh rtshdhgfhrwgfdhc ghdfgh trh dghdf fg hdteghdfgh trh dghdf fg hdter  fgh rth  fdhffshdhgfhrwgfdhc ghdfgh trh dghdf fg hdter  fgh rtshdhgfhrwgfdhc ghdfgh trh dghdf fg hdter  fgh rtshdhgfhrwgfdhc ghdfgh trh dghdf fg hdteghdfgh trh dghdf fg hdter  fgh rth  fdhffshdhgfhrwgfdhc ghdfgh trh dghdf fg hdter  fgh rtshdhgfhrwgfdhc ghdfgh trh dghdf fg hdter  fgh rtshdhgfhrwgfdhc ghdfgh trh dghdf fg hdteh dghdf fg hdter  fgh rth  fdhffshdhgfhrwgfdhc ghdfgh trh dghdf fg hdter  fgh rtshdhgfhrwgfdhc ghdfgh trh dghdf fg hdter  fgh rtshdhgfhrwgfdhc ghdfgh trh dghdf fg hdter  fgh rt</div>
	</div>
</template>

<style scoped lang="scss">
.focus {
	padding: 40px;
	transition: all 1s;
	input:focus  {
		background: red;
	}
}
.focus:focus-within {
	background: blue;
}
// --------------------------------------------------
// .required span::after {
// 	content: '*';
// 	color: red;
// }
.required span:has(+input[required])::after {
	content: '*';
	color: red;
}
// --------------------------------------------------
.text {
	width: 300px;
}
.text::first-letter {
	font-weight: bold;
	font-size: 100px;
	text-transform: uppercase;
	float: left;
	line-height: 1;
	margin-right: 10px;
}
// 选中文案选择器-----------------------------
.text::selection {
	background: #333;
	color: #fff;
	text-decoration: underline dotted red;
}
</style>