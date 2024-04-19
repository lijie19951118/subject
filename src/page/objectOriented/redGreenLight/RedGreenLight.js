const colorList = ['red', 'green', 'yellow'];

function delayed(time = 1000) {
	return new Promise(resolve => {
		setTimeout(resolve, time)
	})
}

export class RedGreenLight {
	get nextColor() {
		return colorList[(colorList.indexOf(this.color) + 1) % colorList.length];
	}
	get remaine() {
		let time = this.endTime - Date.now();
		if (time < 0) {
			time = 0
		}
		return time /1000;
	}
	constructor({color, timeList}) {
		this.color = color;
		this.timeList = timeList;
		// 事件队列
		this.eventMap = new Map();
		this.eventMap.set('change', new Set());
		this.eventMap.set('tick', new Set());

		this.setTime();
		this.exchang();
	}
	on(name, fn) {
		this.eventMap.get(name).add(fn);
	}
	off(name, fn) {
		this.eventMap.get(name).delete(fn);
	}
	emit(name) {
		this.eventMap.get(name).forEach(item => {
			item && item.call(this, {
				color: this.color,
				remaine: this.remaine
			})
		})
	}
	setTime() {
		this.startTime = Date.now();
		const index = colorList.indexOf(this.color);
		this.endTime = this.startTime + this.timeList[index] * 1000;
	}
	async exchang() {
		await 1;
		if(this.remaine > 0) {
			this.emit('tick');
			await delayed(1000);
		} 
		else {
			this.color = this.nextColor;
			this.emit('change');
			this.setTime();
		}
		this.exchang()
	}
}