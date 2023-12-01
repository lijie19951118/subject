<script setup>
import message from './message.jsx';

function click() {
	message('是否确认提交', (clear) => {
		clear();
	})
}
</script>

<template>
	<el-button @click="click">打开弹窗</el-button>
</template>

<style scoped lang="scss">

</style>