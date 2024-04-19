<script setup>
import {ref} from 'vue';
const activeName = ref('transform');

</script>

<template>
	<div class="mine">
		<el-tabs v-model="activeName">
			<el-tab-pane label="transform " name="transform">
				<div class="content">
					常用的变换函数包括：<br/>

						<b>translate(x, y)</b>：对元素进行平移，其中 x 和 y 分别指定水平和垂直方向上的平移距离。<br/>
						<b>scale(x, y)</b>：对元素进行缩放，其中 x 和 y 分别指定水平和垂直方向上的缩放比例。<br/>
<b>rotate(angle)</b>：对元素进行旋转，其中 angle 指定旋转角度，单位为度。<br/>
	<b>skew(x-angle, y-angle)</b>：对元素进行倾斜，其中 x-angle 和 y-angle 分别指定水平和垂直方向上的倾斜角度，单位为度。
	可以组合多个变换函数来实现复合的变换效果，例如：<br/>

	element.style.transform = "translate(100px, 50px) rotate(45deg)";<br/>
	这将对元素进行平移和旋转操作。

	注意，使用 transform 属性时需要考虑兼容性，不同浏览器可能对一些变换函数的支持存在差异。可以使用浏览器前缀来确保兼容性，例如 -webkit-transform、-moz-transform 等。此外，还可以通过 JavaScript 库（如 jQuery、GSAP 等）来简化对元素变换的操作和管理。
				</div>
			</el-tab-pane>

			<el-tab-pane label="transation" name="transation">
				transition 属性用于定义元素过渡效果，使元素在改变属性值时平滑过渡到新的状态。<br/>

transition 属性是一个简写属性，可以通过设置多个子属性来控制过渡的各个方面，包括过渡属性、过渡持续时间、过渡延迟、过渡时间函数等。<br/>

transition 属性的语法如下：<br/>
transition: property duration timing-function delay;<br/>
各个子属性的含义如下：<br/>

<b>property</b>：指定要过渡的 CSS 属性名称，可以是单个属性，也可以是多个属性以逗号分隔。例如 width、opacity、transform 等。<br/>
<b>duration</b>：指定过渡的持续时间，可以是以秒（s）或毫秒（ms）为单位的数值，例如 1s、500ms。<br/>
<b>timing-function</b>：指定过渡的时间函数，控制过渡的速度变化。常用的时间函数有 ease、linear、ease-in、ease-out、ease-in-out 等。<br/>
<b>delay</b>：指定过渡开始之前的延迟时间，可以是以秒（s）或毫秒（ms）为单位的数值。<br/>
以下是一个示例，展示了如何使用 transition 属性实现元素的宽度过渡效果：<br/>
.element {<br/>
  width: 100px;<br/>
  transition: width 1s ease-in-out 0.5s;<br/>
}<br/>

.element:hover {<br/>
  width: 200px;<br/>
}<br/>
上述示例中，.element 元素在鼠标悬停时宽度从 100px 过渡到 200px，过渡持续时间为 1 秒，采用缓动函数 ease-in-out，延迟时间为 0.5 秒。这样，元素的宽度改变时会以平滑的过渡效果进行动画。
			</el-tab-pane>

			<el-tab-pane label="animationCSS" name="animationCSS">
				<div>
					在 CSS 中，animation 属性用于定义动画效果。它是一个复合属性，可以通过设置多个子属性来控制动画的各个方面，包括动画名称、持续时间、延迟、重复次数、播放方向等。

animation 属性的语法如下：<br/>
animation: name duration timing-function delay iteration-count direction fill-mode play-state;<br/>
各个子属性的含义如下：<br/>

<b>animation-name</b>：指定要应用的动画名称，可以是通过 @keyframes 规则定义的动画名称，也可以是使用 animation-name 属性定义的动画名称。<br/>
<b>animation-duration</b>：指定动画的持续时间，可以是以秒（s）或毫秒（ms）为单位的数值，例如 1s、500ms。<br/>
<b>animation-timing-function</b>：指定动画的时间函数，控制动画的速度变化。常用的时间函数有 ease、linear、ease-in、ease-out、ease-in-out 等。<br/>
<b>animation-delay</b>：指定动画开始之前的延迟时间，可以是以秒（s）或毫秒（ms）为单位的数值。<br/>
<b>animation-iteration-count</b>：指定动画的重复次数，可以是具体的数值，也可以是 infinite 表示无限循环。<br/>
<b>animation-direction</b>：指定动画的播放方向，可以是 normal（正向播放）、reverse（反向播放）或 alternate（交替播放）。<br/>
<b>animation-fill-mode</b>：指定动画在不播放时的状态样式。常用的值有 none（动画结束时回到初始状态）、forwards（动画结束时保持最后一个关键帧的样式）、backwards（动画延迟期间应用第一个关键帧的样式）等。<br/>
<b>animation-play-state</b>：指定动画的播放状态，可以是 running（运行中）或 paused（暂停）。<br/>


				</div>

			</el-tab-pane>

			<el-tab-pane label="animationJS" name="animationJS">
				<div>
					1.Element.animate()：<br/>
					该方法用于为指定的元素创建一个新的动画效果。它接受两个参数：keyframes 和 options。keyframes 是一个描述动画关键帧的数组，options 是一个对象，用于指定动画的各种选项，如持续时间、延迟、重复次数等。
				</div>
				<div>
					const element = document.querySelector('.my-element');<br/>
	const keyframes = [<br/>
		{ transform: 'translateX(0)' },<br/>
		{ transform: 'translateX(100px)' }<br/>
	];<br/>
	const options = {<br/>
		duration: 1000,<br/>
		iterations: Infinity<br/>
	};<br/>

	element.animate(keyframes, options);
				</div>
				<div><b>Animation.play()</b>：该方法用于播放动画效果。调用该方法后，动画将开始执行。</div>
				<div><b>Animation.pause()</b>：该方法用于暂停动画效果。调用该方法后，动画将暂停执行。</div>
				<div><b>Animation.cancel()</b>：该方法用于取消动画效果。调用该方法后，动画将立即停止并被移除。</div>
				<div><b>Animation.finished</b>：该属性是一个 Promise，当动画播放完成时，该 Promise 将被解析。</div>
				<div>const animation = element.animate(keyframes, options);
	animation.finished.then(() => {
		console.log('Animation finished');
	});</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<style scoped lang="scss">
b {
	font-weight: bold;
}
.mine {
	padding: 20px;
}
</style>