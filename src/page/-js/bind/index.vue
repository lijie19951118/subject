<script setup>
const obj = {
	name: 'hehe'
}
function fn(a,b,c,d) {
	console.log(this,a,b,c,d);
	return '返回值'
}
// const newFn = fn.bind(obj, 'aa', 'bb');
// newFn('cc','dd','c','d');

// 手写bind
Function.prototype.myBind = function(ctx) {
	const args = Array.prototype.slice.call(arguments, 1);
	// console.log('这里是调用的入参', arg);
	const fn = this;
	return function A() {
		console.log(this)
		const arr = Array.prototype.slice.call(arguments);
		const allArgs = args.concat(arr);
		if (this && Object.getPrototypeOf(this) === A.prototype) {
			return new fn(...allArgs)
		} else {
			return fn.apply(ctx, allArgs);
		}
	}
}
const newFn = fn.myBind(obj, 'aa', 'bb');
const result = new newFn('cc', 'dd', 'eee');
console.log(result);
const str = Function.prototype.myBind.toString()

</script>

<template>
	<div class="">手写bind</div>
	<div style="white-space: pre;">{{ str }}</div>
</template>

<style scoped lang="scss">

</style>