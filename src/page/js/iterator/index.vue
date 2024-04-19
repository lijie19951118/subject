<script setup>
Object.prototype[Symbol.iterator] = function() {
	return Object.values(this)[Symbol.iterator]();
}
const [a, b] = {a: 2, b: 3};

/**
 * [][Symbol.iterator]().next()
 * 调用[Symbol.iterator]函数得到迭代器
 */
console.log(a, b);

</script>

<template>
	<div class=""></div>
</template>

<style scoped lang="scss">

</style>