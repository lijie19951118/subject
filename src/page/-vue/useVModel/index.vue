<script setup>
import {ref} from 'vue';
import Child from './components/child.vue';
const obj = ref({
	a: '1',
	b: '2',
	c: '3',
	obj: {
		a: 4
	}
});
</script>

<template>
	<div class="">
		<Child v-model="obj" />
	</div>
</template>

<style scoped lang="scss">

</style>