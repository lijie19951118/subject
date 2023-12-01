<script setup>
import {ref, defineProps, defineEmits, computed} from 'vue';

const props = defineProps({
	modelValue: {
		type: Object,
		default: () => ({})
	}
})

const emit = defineEmits(['update:modelValue']);

const useVModel = computed({
	get() {
		console.log('读取计算属性')
		return new Proxy(props.modelValue, {
			get(target, property, receiver) {
				// console.log('代理-获取属性');
				return Reflect.get(target, property, receiver);
			},
			set(target, property, value, receiver) {
				console.log('代理-修改属性===');
				emit('update:modelValue', {
					...props.modelValue,
					[property]: value
				});
				return Reflect.set(target, property, value, receiver);
			}
		})
	},
	set(value) {
		console.log('修改了计算属性')
		emit('update:modelValue', value)
	}
})


</script>

<template>
	<el-input v-model="useVModel.a" placeholder="请输入内容"></el-input>
	<el-input v-model="useVModel.b" placeholder="请输入内容"></el-input>
	<el-input v-model="useVModel.obj.a" placeholder="请输入内容"></el-input>
	<el-button @click="useVModel = 1">修改计算属性</el-button>
	{{ props }}
</template>

<style scoped lang="scss">

</style>