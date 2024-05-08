<script setup>
import { debounce } from '@/page/js/debounce/debounce.js';
import { onMounted, onUnmounted, ref } from 'vue';

const elementMap = new Map();
let boxElement = null;
let showElement = null;
let maskElement = null;
let imgEls = null;

// 循环集合,修改样式
function setDomStyle() {
	const scrollTop = window.scrollY;
	for(const [el, styleObj] of Array.from(elementMap)) {
		for(const key in styleObj) {
			el.style[key] = styleObj[key](scrollTop);
		}
	}
}

// 获取计算样式函数
function getSetStyleFun(startScroll, endScroll, startVal, endVal) {
	return function (scrollTop) {
		if (scrollTop <= startScroll) {
			return startVal;
		} else if (scrollTop >= endScroll) {
			return endVal
		} else {
			return startVal + ((scrollTop - startScroll) / (endScroll - startScroll) * (endVal - startVal));
		}
	}
}

// 获取动画对象
function getAnimateData(startScroll, endScroll, el) {
	const opacityFun = getSetStyleFun(startScroll, endScroll, 0, 1);
	const opacity = function (scrollY) {
		return opacityFun(scrollY);
	};
	const scaleFun = getSetStyleFun(startScroll, endScroll, 0.5, 1);
	const translateX = boxElement.clientWidth / 2 -  el.getBoundingClientRect().x - el.clientWidth / 2;
	const translateY = maskElement.getBoundingClientRect().top + maskElement.clientHeight / 2 - el.getBoundingClientRect().top - el.clientWidth / 2;
	console.log(translateX,888)
	const translateXFun = getSetStyleFun(startScroll, endScroll, translateX, 0);
	const translateYFun = getSetStyleFun(startScroll, endScroll, translateY, 0);
	const transform = function (scrollY) {
		const scale = scaleFun(scrollY);
		const x = translateXFun(scrollY);
		const y = translateYFun(scrollY);
		return `translate(${x}px, ${y}px) scale(${scale})`;
	}

	return {
		opacity,
		transform
	}
}

// 初始化位置
function init() {
	console.log('初始化');
	elementMap.clear();
	boxElement = document.querySelector('.box2');
	showElement = document.querySelector('.show');
	imgEls = document.getElementsByTagName('img');
	maskElement = document.querySelector('.mask');
	let startScroll = boxElement.offsetTop;
	let endScroll = boxElement.clientHeight - showElement.clientHeight + startScroll;
	for(const el of imgEls) {
		el.style.transform = 'translate(0) scale(1)';
		el.style.opacity = 0;
		const sort = el.dataset.sort;
		elementMap.set(el, getAnimateData(startScroll + sort * 300, endScroll, el))
	}
	// 执行
	setDomStyle();
}

const debounceInit = debounce(init, 200);

function onResize() {
	debounceInit();
}

onMounted(() => {
	// 初始化集合
	init();
	// 监听滚动条
	window.addEventListener('scroll', setDomStyle);
	// 监听视口变化
	window.addEventListener('resize', onResize);
})
onUnmounted(() => {
	window.removeEventListener('scroll', setDomStyle);
	window.removeEventListener('resize', onResize);
})
</script>

<template>
	<div class="main">
		<div class="box1">往下拉</div>
		<div class="box2">
			<div class="show">
				<div></div>
				<div class="mask media-wiath">
					<img data-sort="0" src="https://img.alicdn.com/imgextra/i3/O1CN01TVWH501KYCEaUxPgv_!!6000000001175-0-tps-480-480.jpg" alt="">
					<img data-sort="1" src="https://img.alicdn.com/imgextra/i1/O1CN01vqBxIP1L5d98G9xJD_!!6000000001248-0-tps-480-480.jpg" alt="">
					<img data-sort="2" src="https://img.alicdn.com/imgextra/i3/O1CN01AKJU3T1tSi2NAFHFP_!!6000000005901-0-tps-480-480.jpg" alt="">
					<img data-sort="3" src="https://img.alicdn.com/imgextra/i1/O1CN01E0GR9h1ZXwFI8dRl1_!!6000000003205-0-tps-480-480.jpg" alt="">
					<img data-sort="2" src="https://img.alicdn.com/imgextra/i1/O1CN01sphiAp1Fj7bOKEppz_!!6000000000522-2-tps-480-480.png" alt="">
					<img data-sort="1" src="https://img.alicdn.com/imgextra/i2/O1CN015T9BdZ28Ns5n1A82W_!!6000000007921-0-tps-480-480.jpg" alt="">
					<img data-sort="0" src="https://img.alicdn.com/imgextra/i3/O1CN01bc6FKX1OCuHkDC2J7_!!6000000001670-0-tps-480-480.jpg" alt="">
					<img data-sort="0" src="https://img.alicdn.com/imgextra/i1/O1CN01Y936lS1whluhvos2E_!!6000000006340-0-tps-480-480.jpg" alt="">
					<img data-sort="1" src="https://img.alicdn.com/imgextra/i3/O1CN017Wk2Cp1lp8VaSd22U_!!6000000004867-0-tps-480-480.jpg" alt="">
					<img data-sort="2" src="https://img.alicdn.com/imgextra/i4/O1CN016JIoXg1lMHYbmErdR_!!6000000004804-0-tps-240-240.jpg" alt="">
					<img data-sort="3" src="https://img.alicdn.com/imgextra/i3/O1CN011GyvMe1of0bAveV4u_!!6000000005251-0-tps-480-480.jpg" alt="">
					<img data-sort="2" src="https://img.alicdn.com/imgextra/i2/O1CN01zFSNcP26wYrM09A4S_!!6000000007726-0-tps-480-480.jpg" alt="">
					<img data-sort="1" src="https://img.alicdn.com/imgextra/i2/O1CN0142F9wc23s261dItxf_!!6000000007310-0-tps-480-480.jpg" alt="">
					<img data-sort="0" src="https://img.alicdn.com/imgextra/i4/O1CN012wi8vZ1xt3HbO0ttd_!!6000000006500-0-tps-480-480.jpg" alt="">
				</div>
			</div>
		</div>
		<div class="box3"></div>
	</div>
</template>

<style scoped lang="scss">
.main {
	.box1 {
		line-height: 500px;
		text-align: center;
		font-weight: bold;
	}
	.box3 {
		height: 2000px;
	}
	.box2 {
		height: 2000px;
	}
	.show {
		--delay: 0s;
		position: sticky;
		top: 0;
		height: 100vh;
		padding: 100px 0;
		// border: 1px solid #333;
		.mask {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			background-color: rgba(23, 26, 29, .9);
			border-radius: 16px;
			margin: auto;
			padding: 30px 60px;
			img {
				width: 64px;
				height: 64px;
				border-radius: 10px;
				margin: 40px 20px;
			}
		}
		.media-wiath {
			width: 80%;
		}
		@media screen and (max-width: 1079px) {
			.media-wiath {
				width: 730px;
			}
		}
		@media screen and (min-width: 1080px) {
			.media-wiath {
				width: 80%;
			}
		}
		@media screen and (min-width: 1200px) {
			.media-wiath {
				width: 950px;
			}
		}
	}
}
</style>
