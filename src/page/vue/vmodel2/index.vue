<template>
	<div class="">
		<input v-model="item.a" type="text">
		{{item}}
	</div>
</template>

<script>
import {delayed} from '@/utils/index.js'
export default {
	name: '',
	components: {},
	props: {},
	data() {
		// let obj = {};
		// Object.defineProperty(obj, 'a', {
		// 	get(val) {
		// 		// console.log(this)
		// 		return val
		// 	},
		// 	set(value) {
		// 		console.log(value)
		// 		// this.a = value
		// 		// obj.a = value;
		// 	}
		// })
		// console.log(obj.a)
		// obj.a = 111
		// console.log(obj.a)
		const obj2 = new Proxy({a: ''}, {
			get: function(target, key, proxy) {
				console.log('获取数据', key);
				return Reflect.get(target, key, proxy);
			},
			set: async function(target, key, value, proxy) {
				console.log('设置属性', key)
				
				// await delayed();
				console.log(99999999999)
				return Reflect.set(target, key, value, proxy)
				
			}
		});

		return {
			item: obj2
		}
	},
	computed: {},
	watch: {},
	created() {},
	mounted() {
		
	},
	methods: {
		
	}
}
</script>

<style scoped lang="scss">

</style>