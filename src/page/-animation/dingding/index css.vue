<script setup>
import { onMounted, ref } from 'vue';
const allHeight = ref(0);

function play(e) {
	const elBox2 = document.querySelector('.box2').getBoundingClientRect();
	let delay = 0;
	if (elBox2.top > 0) {
		delay = 0;
	} else if (-elBox2.top > allHeight.value) {
		delay = allHeight.value
	} else {
		delay = -elBox2.top;
	}
	const ratio = delay / allHeight.value;
	const elShow = document.querySelector('.show');
	elShow.style.setProperty('--delay', `-${ratio}s`);
}

onMounted(() => {
	const elBox2 = document.querySelector('.box2').offsetHeight;
	const elShow = document.querySelector('.show').offsetHeight;
	allHeight.value = elBox2 - elShow;
	console.log(allHeight.value)

	document.addEventListener('scroll', play)
})
</script>

<template>
	<div class="main">
		<div class="box1"></div>
		<div class="box2">
			<div class="show">
				<div></div>
				<div class="mask">
					<img class="img1"
						src="https://img.alicdn.com/imgextra/i3/O1CN01TVWH501KYCEaUxPgv_!!6000000001175-0-tps-480-480.jpg" alt="">
					<img class="img2"
						src="https://img.alicdn.com/imgextra/i1/O1CN01vqBxIP1L5d98G9xJD_!!6000000001248-0-tps-480-480.jpg" alt="">
					<img class="img3"
						src="https://img.alicdn.com/imgextra/i3/O1CN01AKJU3T1tSi2NAFHFP_!!6000000005901-0-tps-480-480.jpg" alt="">
					<img class="img4"
						src="https://img.alicdn.com/imgextra/i1/O1CN01E0GR9h1ZXwFI8dRl1_!!6000000003205-0-tps-480-480.jpg" alt="">
					<img class="img5"
						src="https://img.alicdn.com/imgextra/i1/O1CN01sphiAp1Fj7bOKEppz_!!6000000000522-2-tps-480-480.png" alt="">
					<img class="img6"
						src="https://img.alicdn.com/imgextra/i2/O1CN015T9BdZ28Ns5n1A82W_!!6000000007921-0-tps-480-480.jpg" alt="">
					<img class="img7"
						src="https://img.alicdn.com/imgextra/i3/O1CN01bc6FKX1OCuHkDC2J7_!!6000000001670-0-tps-480-480.jpg" alt="">


					<img class="img11"
						src="https://img.alicdn.com/imgextra/i1/O1CN01Y936lS1whluhvos2E_!!6000000006340-0-tps-480-480.jpg" alt="">
					<img class="img22"
						src="https://img.alicdn.com/imgextra/i3/O1CN017Wk2Cp1lp8VaSd22U_!!6000000004867-0-tps-480-480.jpg" alt="">
					<img class="img33"
						src="https://img.alicdn.com/imgextra/i4/O1CN016JIoXg1lMHYbmErdR_!!6000000004804-0-tps-240-240.jpg" alt="">
					<img class="img44"
						src="https://img.alicdn.com/imgextra/i3/O1CN011GyvMe1of0bAveV4u_!!6000000005251-0-tps-480-480.jpg" alt="">
					<img class="img55"
						src="https://img.alicdn.com/imgextra/i2/O1CN01zFSNcP26wYrM09A4S_!!6000000007726-0-tps-480-480.jpg" alt="">
					<img class="img66"
						src="https://img.alicdn.com/imgextra/i2/O1CN0142F9wc23s261dItxf_!!6000000007310-0-tps-480-480.jpg" alt="">
					<img class="img77"
						src="https://img.alicdn.com/imgextra/i4/O1CN012wi8vZ1xt3HbO0ttd_!!6000000006500-0-tps-480-480.jpg" alt="">
				</div>
			</div>
		</div>
		<div class="box3"></div>
	</div>
</template>

<style scoped lang="scss">
.main {
	.box1 {
		height: 500px;
	}

	.box3 {
		height: 2000px;
	}

	.box2 {
		height: 1500px;
	}

	.show {
		--delay: 0s;
		position: sticky;
		top: 0;
		height: 100vh;
		border: 1px solid #333;

		// line-height: 100px;
		// text-align: center;
		// font-size: 20px;


		animation: identifier 1s linear var(--delay) forwards paused;

		.mask {
			position: relative;
			background-color: rgba(23, 26, 29, .9);
			border-radius: 16px;
			height: 400px;
			width: 900px;
			margin: 200px auto;

			img {
				position: absolute;
				left: 50%;
				top: 50%;
				margin-left: -32px;
				margin-top: -32px;
				width: 64px;
				height: 64px;
				border-radius: 10px;
			}

			.img1 {
				animation: img1 1s linear var(--delay) forwards paused;
			}

			@keyframes img1 {
				0% {
					transform: translate(0, 0);
					opacity: 0;
				}

				100% {
					transform: translate(-560%, -150%);
					opacity: 1;
				}
			}

			.img2 {
				animation: img2 1s linear var(--delay) forwards paused;
			}

			@keyframes img2 {
				0% {
					transform: translate(0, 0);
					opacity: 0;
				}

				20% {
					transform: translate(0, 0);
					opacity: 0;
				}

				100% {
					transform: translate(-372%, -150%);
					opacity: 1;
				}
			}

			.img3 {
				animation: img3 1s linear var(--delay) forwards paused;
			}

			@keyframes img3 {
				0% {
					transform: translate(0, 0);
					opacity: 0;
				}

				40% {
					transform: translate(0, 0);
					opacity: 0;
				}

				100% {
					transform: translate(-186%, -150%);
					opacity: 1;
				}
			}

			.img4 {
				animation: img4 1s linear var(--delay) forwards paused;
			}

			@keyframes img4 {
				0% {
					transform: translate(0, 0);
					opacity: 0;
				}

				60% {
					transform: translate(0, 0);
					opacity: 0;
				}

				100% {
					transform: translate(0, -150%);
					opacity: 1;
				}
			}

			.img5 {
				animation: img5 1s linear var(--delay) forwards paused;
			}

			@keyframes img5 {
				0% {
					transform: translate(0, 0);
					opacity: 0;
				}

				40% {
					transform: translate(0, 0);
					opacity: 0;
				}

				100% {
					transform: translate(186%, -150%);
					opacity: 1;
				}
			}

			.img6 {
				animation: img6 1s linear var(--delay) forwards paused;
			}

			@keyframes img6 {
				0% {
					transform: translate(0, 0);
					opacity: 0;
				}

				20% {
					transform: translate(0, 0);
					opacity: 0;
				}

				100% {
					transform: translate(372%, -150%);
					opacity: 1;
				}
			}

			.img7 {
				animation: img7 1s linear var(--delay) forwards paused;
			}

			@keyframes img7 {
				0% {
					transform: translate(0, 0);
					opacity: 0;
				}

				0% {
					transform: translate(0, 0);
					opacity: 0;
				}

				100% {
					transform: translate(560%, -150%);
					opacity: 1;
				}
			}

			.img11 {
				animation: img11 1s linear var(--delay) forwards paused;
			}

			@keyframes img11 {
				0% {
					transform: translate(0, 0);
					opacity: 0;
				}

				100% {
					transform: translate(-560%, 150%);
					opacity: 1;
				}
			}

			.img22 {
				animation: img22 1s linear var(--delay) forwards paused;
			}

			@keyframes img22 {
				0% {
					transform: translate(0, 0);
					opacity: 0;
				}

				20% {
					transform: translate(0, 0);
					opacity: 0;
				}

				100% {
					transform: translate(-372%, 150%);
					opacity: 1;
				}
			}

			.img33 {
				animation: img33 1s linear var(--delay) forwards paused;
			}

			@keyframes img33 {
				0% {
					transform: translate(0, 0);
					opacity: 0;
				}

				40% {
					transform: translate(0, 0);
					opacity: 0;
				}

				100% {
					transform: translate(-186%, 150%);
					opacity: 1;
				}
			}

			.img44 {
				animation: img44 1s linear var(--delay) forwards paused;
			}

			@keyframes img44 {
				0% {
					transform: translate(0, 0);
					opacity: 0;
				}

				60% {
					transform: translate(0, 0);
					opacity: 0;
				}

				100% {
					transform: translate(0, 150%);
					opacity: 1;
				}
			}

			.img55 {
				animation: img55 1s linear var(--delay) forwards paused;
			}

			@keyframes img55 {
				0% {
					transform: translate(0, 0);
					opacity: 0;
				}

				40% {
					transform: translate(0, 0);
					opacity: 0;
				}

				100% {
					transform: translate(186%, 150%);
					opacity: 1;
				}
			}

			.img66 {
				animation: img66 1s linear var(--delay) forwards paused;
			}

			@keyframes img66 {
				0% {
					transform: translate(0, 0);
					opacity: 0;
				}

				20% {
					transform: translate(0, 0);
					opacity: 0;
				}

				100% {
					transform: translate(372%, 150%);
					opacity: 1;
				}
			}

			.img77 {
				animation: img77 1s linear var(--delay) forwards paused;
			}

			@keyframes img77 {
				0% {
					transform: translate(0, 0);
					opacity: 0;
				}

				0% {
					transform: translate(0, 0);
					opacity: 0;
				}

				100% {
					transform: translate(560%, 150%);
					opacity: 1;
				}
			}
		}
	}

	@keyframes identifier {
		from {
			font-size: 20px;
		}

		to {
			font-size: 50px;
		}
	}
}
</style>