<!-- 使用拓展运算符 -->
<script>
		Function.prototype.myCall = function(ctx, ...arg) {
			// 第一步：参数归一化
			ctx = ctx === null || ctx === undefined ? globalThis : Object(ctx);

			// 第二步：往对象中添加函数
			const key = Symbol('key');
			const fn = this;
			// Object.defineProperty(ctx, key, {
			// 	value: fn,
			// 	// writable: false,
			// 	enumerable: false,	// 不可枚举
			// 	configurable: true	// 可删除
			// })
			ctx[key] = fn;

			// 第三步：运行对象中的函数 且 储存函数返回值
			const result = ctx[key](...arg);
			console.log(ctx)
			
			// 第四步： 删除对象中的函数
			delete ctx[key];
			console.log(ctx)

			// 第五步： 返回函数返回值
			return result;
		}

		const obj = {a: 1, qqq: 1111}
		//obj.method
		function method(a, b) {
			console.log(this, a, b)
			return a + b
		}
		const result = method.myCall(obj, 1, 2);
		console.log(result)
	</script>




<!-- 不使用拓展运算符，使用 eval -->
<!-- <script setup>
const obj = {
	name: 'aaa'
}
function fn(a,b) {
	console.log(this,a,b);
	return '返回值'
}
Function.prototype.myCall = function(ctx) {
	ctx = ctx || window;
	const arr = [];
	for(let i = 1; i < arguments.length; i++) {
		arr.push('arguments[' + i + ']');
	}
	ctx.fn = this;
	const expr = "ctx.fn(" + arr.join(',') + ")";
	const result = eval(expr);
	delete ctx.fn;
	return result
}
const result = fn.myCall(obj, 'a', 'b');
console.log(result)

const str = Function.prototype.myCall.toString();
</script> -->

<template>
	<div>手写call</div>
	<div style="white-space: pre">{{ str }}</div>
</template>
