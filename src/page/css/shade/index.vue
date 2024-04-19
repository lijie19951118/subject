<script setup>
</script>

<template>
	<div class="main">
		<span v-for="(item,i) in 5000" :key="i">哈</span>
	</div>
</template>

<style scoped lang="scss">
.main {
	--w: calc((100vw - 298px) / 2);
	--h: calc((100vh - 530px) / 2);
	background: #ccc;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	-webkit-mask-image:
	linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 0) var(--w), rgba(0, 0, 0, 0) var(--w)), 
	linear-gradient(to left, rgb(0,0,0), rgb(0,0,0) var(--w), rgba(0,0,0,0) var(--w)),
	linear-gradient(to bottom, rgb(0, 0, 0), rgb(0, 0, 0) var(--h), rgba(0, 0, 0, 0) var(--h)), 
	linear-gradient(to top, rgb(0,0,0), rgb(0,0,0) var(--h), rgba(0,0,0,0) var(--h)),
	url('./1.svg');
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;

}
</style>