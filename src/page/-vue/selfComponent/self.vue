<script setup>
import {ref, reactive, computed, onMounted} from 'vue';

defineOptions({
	inheritAttrs: false
})

const props = defineProps({
	modelValue: {
		type: String,
		default: ''
	}
})

const emit = defineEmits(['update:modelValue']);

const myInput = computed({
	get() {
		return props.modelValue
	},
	set(val) {
		emit('update:modelValue', val);
	}
})

const inputRef = ref(null);
const obj = reactive({});
defineExpose(obj);

onMounted(() => {
	const entries = Object.entries(inputRef.value);
	for(const [key, value] of entries) {
		if (!value) continue;
		obj[key] = value;
	}
})

</script>

<template>
	<div>
		<el-input
			ref="inputRef"
			v-model="myInput"
			v-bind="$attrs"
		>
			<template v-for="(value, name) in $slots" :key="name" #[name]>
				<slot :name="name"></slot>
			</template>
		</el-input>
	</div>
</template>

<style scoped lang="scss">

</style>