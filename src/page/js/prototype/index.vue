<script setup>
// function Cat(name, color) {
// 	this.name = name;
// 	this.color = color;
// }

// Cat.prototype = {
// 	constructor: Cat,
// 	type: 'top',
// 	sayName() {
// 		console.log(`我的名字是${this.name}`);
// 	}
// };
class Cat {
	_type = 'top';

	constructor(name, color, age) {
		this.name = name;
		this.color = color;

		this.#age = age;
	}

	sayName() {
		console.log(`我的名字是${this.name}`);
	}
	// 静态属性
	static value1 = 1;
	// 静态方法
	static method1() {
		console.log(1)
	}
	// 私有属性
	#value2 = 2;
	// 私有方法
	#metchod2() {
		console.log(2)
	}

	#age = 0;
	get age() {
		return `我的年龄是${this.#age}岁`
	}
	set age(val) {
		this.#age = val * 2;
	}
}

const cat1 = new Cat('miaomiao', 'red');
console.log(cat1)
cat1.sayName();
console.log(cat1._type)

const cat2 = new Cat('wangwang', 'yellow', 20);
console.log(cat2)
cat2.sayName()
console.log(cat2.age)
cat2.age = 100;
console.log(cat2)


const aaa = (num) => {
	console.log(num)
}
aaa('123')
</script>

<template>
	<div class="">123</div>
</template>

<style scoped lang="scss">

</style>