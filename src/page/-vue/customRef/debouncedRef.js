import {customRef} from 'vue';

export function getCustomRef (value, delay = 1000) {
	let timeout
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
};