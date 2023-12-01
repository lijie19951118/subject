import {computed} from 'vue';

const mapList = new WeakMap();

export function useVModel(props, propsName, emit) {
	return computed({
		get: () => {
			if (mapList.has(props[propsName])) {
				return mapList.get(props[propsName]);
			}
			const proxy = new Proxy(props[propsName], {
				get: (target, propKey) => {
					return Reflect.get(target, propKey);
				},
				set: (obj, prop, value) => {
					console.log('触发set')
					emit('update:' + propsName, {
						...obj,
						[prop]: value
					});
					return true;
				}
			});
			mapList.set(props[propsName], proxy);
			return proxy;
		},
		set: (val) => {
			emit('update:' + propsName, val)
		}
	})
}