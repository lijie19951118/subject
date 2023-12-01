export class Flip {
	_map = new WeakMap();
	_animate = new WeakMap();
	constructor(list, duration) {
		this.list = list;
		this.duration = duration;
		this.intMap(list);
	}
	intMap(list) {
		const nodeList = Array.from(list);
		for(let el of nodeList) {
			const obj = el.getBoundingClientRect();
			this._map.set(el, obj);
		}
	}
	async play() {
		const newList = Array.from(this.list);
		for(let el of newList) {
			this._animate.get(el)?.finish();
			const elObj = el.getBoundingClientRect();
			console.log(elObj.top, el)
			const invert = this._map.get(el).top - elObj.top;
			this._map.set(el, elObj);
			const animate = el.animate([
				{transform: `translateY(${invert}px)`},
				{transform: `translateY(0)`},
			], {
				duration: this.duration,
				easing: 'ease'
			})
			this._animate.set(el, animate);
		}
	}
}
