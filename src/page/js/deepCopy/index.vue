<script setup>
const a = {
	a: 1,
	b: {
		c: 1
	},
	d: [1,2,3]
}
a.e = a;
console.log('目标对象',a)


// function deepCopy(a) {
// 	const weakMap = new WeakMap();
// 	function recursionFn(a) {
// 		if (a === null || typeof a !== 'object') {
// 			return a;
// 		}
// 		if (weakMap.has(a)) {
// 			return weakMap.get(a);
// 		}
// 		const result = Array.isArray(a) ? [] : {};
// 		weakMap.set(a, result);
// 		for(const key in a) {	// 注意：for in会循环原型上的属性，所以需要用过hasOwnProperty判断是否自身属性
// 			console.log(key)
// 			if (a.hasOwnProperty(key)) {
// 				result[key] = recursionFn(a[key]);
// 			}
// 		}
// 		return result;
// 	}
// 	return recursionFn(a);
// }

function deepCopy(obj, hash = new WeakMap()) {
	// 排除特殊情况
	if (obj === null || typeof obj !== 'object') return obj;
	// 判断缓存中是否存在
	if (hash.has(obj)) return hash.get(obj);
	// 新建一个对象或数组，通过原型上的constructor属性找到构造函数
	const result = new obj.constructor();
	// 设置缓存
	hash.set(obj, result);
	// 递归拷贝对象
	for(const key in obj) {
		// 判断是否自身属性
		if (obj.hasOwnProperty(key)) {
			result[key] = deepCopy(obj[key], hash);
		}
	}
	return result;
}



const newobj = deepCopy(a);
console.log('结果', newobj)
console.log(newobj.b === a.b)
console.log(newobj.e === a.e)
</script>

<template>
	<div class=""></div>
</template>

<style scoped lang="scss">

</style>