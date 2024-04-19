<script setup>
import MyInput from './self.vue';
import {ref, onMounted} from 'vue';

const input = ref('');

const inputRef = ref();

function play(e) {
	console.log('透传事件',e)
}

onMounted(() => {
	console.log(inputRef.value)
	inputRef.value.focus();
})
</script>

<template>
	<My-Input
		ref="inputRef"
		v-model="input"
		placeholder="请输入"
		@input="play"
	>
		<template #prefix>11111</template>
		<template #suffix>22222</template>
		<template #prepend>333333</template>
		<template #append>44444</template>
	</My-Input>
	{{input}}
</template>

<style scoped lang="scss">

</style>