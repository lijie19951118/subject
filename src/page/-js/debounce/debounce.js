/**
 * 防抖函数
 * @param {func} func - 第一个函数
 * @param {number} turation - 第二个数字
 * @returns {func} - 返回一个函数
 */
export function debounce(func, turation = 500) {
	let timerId;
	return function (...ager) {
		clearTimeout(timerId);
		timerId = setTimeout(() => {
			func.apply(this, ager)
		}, turation)
	}
} 
