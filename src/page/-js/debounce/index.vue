<script setup>
import {ref} from 'vue';
import { debounce } from './debounce.js';

const str = ref('');
const time = 500;

const d_input = debounce(input, time);
function input(e) {
	console.log(e,888)
	console.log(this,888)
	// console.log(e.target.value);
	str.value = e.target.value;
}
</script>

<template>
	<div class="">
		<input type="text" @input="d_input" />
		<div>{{time}}毫秒后输出：{{ str }}</div>
	</div>
</template>

<style scoped lang="scss">

</style>