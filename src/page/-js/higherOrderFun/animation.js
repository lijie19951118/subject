export default function (interval, from, to, callback) {
	const distance = to - from;	// （距离）
	const speed = distance / interval; // （速度）每毫秒移动的距离
	let startTime;
	let value = from; // 新的值
	callback(value);
	function _run(timestamp) {
		if (startTime === undefined) {
			startTime = timestamp
		};
		const time = timestamp - startTime;
		if (time >= interval) {
			value = to;
			callback(value);
			return;
		}
		const d = time * speed;
		value = from + d;
		callback(value);
		requestAnimationFrame(_run);
	}
	requestAnimationFrame(_run);
}