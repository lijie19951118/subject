<script setup>
const obj = {
	name: 'aaa',
}
function fn(a, b) {
	console.log(this, a+b)
}

Function.prototype.myApply = function (ctx, agrs) {
	// const agrs = Array.prtottype.slice.call(arguments, 1);
	ctx = (ctx && typeof ctx === 'object') ? ctx : window;
	const key = Symbol();
	ctx[key] = this;
	const result = ctx[key](...agrs);
	delete ctx[key];
	return result;
}

const str = Function.prototype.myApply.toString();

fn.myApply(obj, ['a', 'b'])
</script>

<template>
	<div>手写apply</div>

	<div style="white-space: pre">{{ str }}</div>
</template>