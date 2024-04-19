<template>
	<div class="ball"></div>
</template>

<script setup>
</script>

<style scoped lang="scss">
@property --x {
	syntax: '<length>';
	initial-value: 0px;
	inherits: false;
}
// @property --y {
// 	syntax: '<length>';
// 	initial-value: 0px;
// 	inherits: false;
// }
@property --r {
	syntax: '<angle>';
	initial-value: 0deg;
	inherits: false;
}

$w: 30px;
.ball {
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	border-radius: 50%;
	width: $w;
	height: $w;
	background-color: #ccc;

	// transform: translate(var(--x), var(--y));
	transform: rotate(var(--r)) translate(var(--x));
	animation: x 2s, r 8s;
	animation-timing-function: cubic-bezier(0.5, -800, 0.5, 800);
	animation-iteration-count: infinite;
}
@keyframes x {
	to {
		--x: 1px;
	};
}
// @keyframes y {
// 	to {
// 		--y: 0.1px;
// 	}
// }
@keyframes r {
	to {
		--r: 1deg;
	}
}
</style>