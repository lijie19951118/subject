<script setup>
const obj = {
	show: '0b0001',
	add:'0b0010',
	edit: '0b0100',
	del:'0b1000',
}
const {show , add , edit , del} = obj;
/**
 * 按位或 & 同时位1时返回1，其他返回0
 * 按位与 |	只要有一边位1时就返回1
 */

// 查看 + 添加 + 编辑 + 删除
const a = show | add | edit | del;
console.log("🚀 ~ file: index.vue:14 ~ a:", '保存的值=' + a)
// 查看 + 添加 + 编辑
const b = show | add | edit;
console.log("🚀 ~ file: index.vue:14 ~ a:", '保存的值=' + b)
// 查看 + 编辑
const c = show | edit;
console.log("🚀 ~ file: index.vue:14 ~ a:", '保存的值=' + c)

const d = add | edit;
console.log("🚀 ~ file: index.vue:14 ~ a:", '保存的值=' + d)

// ----------------------------------------
// const data = 15;
// const data = 7;
const data = 6;

const typeList = [];
for(let item of Object.keys(obj)) {
	if ((data & obj[item]) > 0) {
		typeList.push(item)
	}
}
console.log(typeList)

</script>

<template>
	<div class=""></div>
</template>

<style scoped lang="scss">

</style>