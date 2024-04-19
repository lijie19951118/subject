import { onUnmounted } from "vue";

const DISTANCE = 150;
const DURATION = 1000;
const ob = new IntersectionObserver((entries) => {
	console.log(entries);
	for(let entr of entries) {
		if (entr.isIntersecting) {
			animationMaps.get(entr.target).play();
			ob.unobserve(entr.target);
		}
	}
})
const animationMaps = new WeakMap();

function isIntersectingBelow(el) {
	const rect = el.getBoundingClientRect();
	return rect.top > window.innerHeight;
}

export default {
	mounted(el) {
		if (!isIntersectingBelow(el)) {
			return;
		}
		console.log(el)
		const animation = el.animate([
			{
				transform: `translateY(${DISTANCE}px)`,
				opacity: 0.5
			},
			{
				transform: `translateY(0)`,
				opacity: 1
			}
		], {
			duration: DURATION,
			easing: 'ease'
		})
		animationMaps.set(el, animation);
		console.log(animationMaps, 'WeakMap')
		animation.pause();
		ob.observe(el);
	},
	unmounted(el) {
		ob.unobserve(el);
	}
}