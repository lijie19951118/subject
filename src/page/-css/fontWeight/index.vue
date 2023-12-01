<script setup>
</script>

<template>
	<div class="font-weight">
		<div style="font-weight: 300;">字重:300</div>
		<div style="font-weight: 400;">字重:400</div>
		<div style="font-weight: 500;">字重:500</div>
		<div style="font-weight: 600;">字重:600</div>
		<div style="font-weight: 700;">字重:700</div>
		<div style="font-weight: 800;">字重:800</div>
		<div style="font-weight: 900;">字重:900</div>
		<div style="font-weight: bold;">字重:bold</div>
		<div class="">自定义字体</div>
		<div class="family">自定义字体</div>
	</div>
</template>

<style scoped lang="scss">
.font-weight {
	font-size: 20px;
}
@font-face {
	font-family: '45_W9'; /* 自定义字体的名称 */
	src: url('./fonts/45_W9.ttf') format('truetype'); /* 字体文件的路径和格式 */
	font-weight: normal; /* 字体的权重 */
  font-style: normal; /* 字体的样式 */
	// font-display: block;
}
.family {
	font-family: '45_W9';
	// font-weight: 500;
}
</style>