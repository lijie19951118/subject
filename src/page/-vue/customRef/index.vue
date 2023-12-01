<script setup>
import {ref,customRef } from 'vue';
// import {getCustomRef} from './debouncedRef';

const a = useCustomRef(1111);

function useCustomRef(value, delay = 500) {
	let timeout;
	return customRef((track, trigger) => {
		return {
			get() {
				console.log('触发了get=====', value)
				track()
				return value
			},
			set(newValue) {
				console.log(newValue)
				clearTimeout(timeout)
				timeout = setTimeout(() => {
					value = newValue;
					trigger()
				}, delay)
			}
		}
	})
}

function onClick() {
	a.value = a.value + 9999;
}
</script>

<template>
	<!-- <el-input v-model="input" /> -->
	<input type="text" v-model="a">
	{{a}}

	<button @click="onClick">点击</button>
</template>

<style scoped lang="scss">

</style>