<script setup>
function myFn() {
	// console.log(this)
	// console.log(myFn)
	if (this && Object.getPrototypeOf(this) === myFn.prototype) {
		console.log('new调用')
	} else {
		console.log('普通调用')
	}
}
new myFn();
console.log('=====================')
myFn();
</script>

<template>
	<div class="" style="white-space: pre;">{{ myFn }}</div>
</template>

<style scoped lang="scss">

</style>