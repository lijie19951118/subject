import { ref, onUnmounted } from 'vue';

/**
 * 设置当前帧是否显示
 * @param {number} max
 * @returns {boolean}
 */
export function useDelay(max = 100) {
	const frame = ref(0);
	let refId;
	function requset() {
		refId = requestAnimationFrame(() => {
			console.log(111);
			frame.value++;
			if (frame.value > max) {
				return;
			}
			requset();
		});
	}
	requset();
	onUnmounted(() => {
		cancelAnimationFrame(refId);
	})
	return function (n) {
		return frame.value >= n;
	}
};


