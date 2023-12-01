<script setup>
import {ref, onMounted} from 'vue';

const number = ref(0);
let footerDom;

function click(e) {
	const eDom = e.target.getBoundingClientRect()
	const crosswise = document.createElement('div');
	const lengthways = document.createElement('div');
	crosswise.appendChild(lengthways);
	e.target.appendChild(crosswise);
	crosswise.classList.add('crosswise');
	lengthways.classList.add('lengthways');
	setTimeout(() => {
		crosswise.style.transform = `translateX(${footerDom.left - eDom.left}px)`;
		lengthways.style.transform = `translateY(${footerDom.bottom - eDom.bottom}px)`;
	}, 10)
	
	setTimeout(() => {
		e.target.removeChild(e.target.querySelector('.crosswise'));
	}, 1000)
}
onMounted(() => {
	footerDom = document.querySelector('.footer-number').getBoundingClientRect();
})
</script>

<template>
	<div class="parabola">
		<div class="main">
			<div class="number item item1" @click.capture="click">+</div>
			<div class="number item item2" @click.capture="click">+</div>
			<div class="number item item3" @click.capture="click">+</div>
			<div class="number item item4" @click.capture="click">+</div>
			<div class="number item item5" @click.capture="click">+</div>
			<div class="number item item6" @click.capture="click">+</div>
			<div class="number item item7" @click.capture="click">+</div>
		</div>
		<div class="footer">
			<div class="number footer-number">
				{{number}}
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.parabola {
	--number-width: 30px;
	.number {
		position: absolute;
		border-radius: 50%;
		width: var(--number-width);
		height: var(--number-width);
		line-height: var(--number-width);
		text-align: center;
		background: #ccc;
		cursor: pointer;
	}
	.main {
		position: relative;
		.item {
			left: 500px;
			top: 100px;
			.crosswise {
				position: absolute;
				left: 0;
				top: 0;
				width: 30px;
				height: 30px;
				transition: transform 1s;
				z-index: 9999;
				.lengthways {
					background: #000;
					width: 100%;
					height: 100%;
					transition-property: transform;
					transition-duration: 1s;
					transition-timing-function: cubic-bezier(0.4,-0.5, 1, 1);
				}
			}
		}
		@for $i from 1 through 7 {
			.item#{$i} {
				left: #{random(1000)}px;
				top: #{random(1000)}px;
			}
		}
	}
	.footer {
		position: fixed;
		width: 100%;
		height: 50px;
		left: 0;
		bottom: 0;
		border-top: 1px solid #ccc;
		.footer-number {
			left: 50%;
			top: 10px;
		}
	}
}
</style>