<script setup>
let getX;

class Soldier {
	/**
	 * 私有属性/方法
	 */
	#name = '士兵';
	#getName() {
		console.log(this.#name);
	}
	/**
	 * 静态属性
	 */
	static classHand = 1;
	static classFoot = 1;
	/**
	 * 静态块
	 */
	static {
		getX = obj => obj.#name;
	}
	/**
	 * 类属性
	 */
	hands = 2;
	foots = 2;
	constructor() {
		this.hand = 2;
		this.foot = 2;
	}
	/**
	 * getter 和 setter
	 */
	get color() {
		console.log('获取颜色');
		return 'getter';
	}
	set color(e) {
		console.log('设置颜色:' + e);
	}

	/**
	 * 静态方法
	 */
	static classMethod() {
		return 'classMethod';
	}
	static bar() {
		this.baz();
	}
	static baz() {
		console.log('baz');
	}
	/**
	 * 原型上的方法
	 */
	baz() {
		console.log('class-baz');
	}
	sayHai() {
		console.log('hai!')
	}
}
/**
 * 实例化
 */
const soldier1 = new Soldier();
/**
 * 获取实例属性
 */
console.log(soldier1);
console.log(soldier1.hand);
console.log(soldier1.foot);
soldier1.sayHai();
/**
 * setter 和 getter
 */
soldier1.color;
soldier1.color = 'green';
/**
 * 静态方法
 */
Soldier.classMethod();
// soldier1.classMethod();
Soldier.bar();
/**
 * 获取私有属性
 */
console.log(getX(new Soldier()));
/**
 * 承继
 */
class Bar extends Soldier {
	static classMethod() {
		console.log(super.classMethod() + ', too');
	}
}
Bar.bar();
Bar.classMethod();
</script>

<template>
	<div class="">123</div>
</template>

<style scoped lang="scss">

</style>