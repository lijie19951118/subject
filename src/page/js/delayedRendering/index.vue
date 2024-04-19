<script setup>
import {ref} from 'vue';
// const list = ref(1);
// setInterval(() => {
// 	list.value ++ 
// }, 1000)
import ViewModel from './ViewModel.vue';
import {useDelay} from './useDelay.js';

let isDelay;
const num = 500;
const show = ref(false);

// setTimeout(() => {
	isDelay = useDelay(num);
	show.value = true;
// }, 1000)
</script>

<template>
	<div class="main" v-if="show">
		<template v-for="item in num" :key="item" >
			<ViewModel v-if="isDelay(item)" />
		</template>
	</div>
</template>

<style scoped lang="scss">
.main {
	display: flex;
	flex-wrap: wrap;
}
</style>