<template>
	<div class="home">
		<div>js</div>
		<div><router-link to="/js/operator/add">操作符：+</router-link></div>
		<div><router-link to="/js/dataType">数据类型</router-link></div>
		<div>
			<router-link to="/js/dataType/number">数据类型：Number</router-link>
			<router-link to="/js/dataType/string"> / String</router-link>
		</div>
		<div><router-link to="/js/debounce">防抖函数debounce</router-link></div>
		<div><router-link to="/js/isNewCall">判断函数是否new调用</router-link></div>
		<div><router-link to="/js/bind">手写bind</router-link></div>
		<div><router-link to="/js/call">手写call</router-link></div>
		<div><router-link to="/js/apply">手写apply</router-link></div>
		<div><router-link to="/js/higherOrderFun">高阶函数（动画）</router-link></div>
		<div><router-link to="/js/class">class（类）</router-link></div>
		<div><router-link to="/js/delayedRendering">延迟渲染</router-link></div>
		<div><router-link to="/js/deepCopy">深拷贝</router-link></div>
		<div><router-link to="/js/iterator">迭代器</router-link></div>
		<div><router-link to="/js/prototype">原型</router-link></div>
		<div>动画</div>
		<div><router-link to="/animation/api">API</router-link></div>
		<div><router-link to="/animation/bezierCurve">贝塞尔曲线</router-link></div>
		<div><router-link to="/animation/parabola">多动画组合</router-link></div>
		<div><router-link to="/animation/RAF">RAF动画</router-link></div>
		<div><router-link to="/animation/delayed">动画延时技巧</router-link></div>
		<div><router-link to="/animation/FLIP">FLIP技巧</router-link></div>
		<div><router-link to="/animation/SVG">SVG动画</router-link></div>
		<div><router-link to="/animation/dingding">钉钉官网</router-link></div>
		<div><router-link to="/animation/mac">mac</router-link></div>
		<div>vue</div>
		<div><router-link to="/vue/smoothEntry">平滑移入指令</router-link></div>
		<div><router-link to="/vue/imperative">命令式组件</router-link></div>
		<div><router-link to="/vue/useVModel">useVModel</router-link></div>
		<div><router-link to="/vue/chatGPT">chatGPT</router-link></div>
		<div><router-link to="/vue/jurisdiction">权限管理</router-link></div>
		<div><router-link to="/vue/selfComponent">二次封装组件</router-link></div>
		<div><router-link to="/vue/customRef">Ref的拦截</router-link></div>
		<div><router-link to="/vue/vmodel2">v-demol数据拦截</router-link></div>
		<div>CSS</div>
		<div><router-link to="/css/sticky">粘性布局</router-link></div>
		<div><router-link to="/css/fontWeight">字重</router-link></div>
		<div><router-link to="/css/shade">遮罩</router-link></div>
		<div><router-link to="/css/waterfallFlow">瀑布流（纯css）</router-link></div>
		<div><router-link to="/css/drag">拖拽</router-link></div>
		<div><router-link to="/css/scrollBar">滚动条</router-link></div>
		<div><router-link to="/css/scrollIntoView">滚动到指定位置</router-link></div>
		<div><router-link to="/css/selector">样式选择器</router-link></div>	
		<div><router-link to="/css/3d">3d</router-link></div>	
		<div><router-link to="/css/flexMargin">flex + margin</router-link></div>	
		<div><router-link to="/css/floatSurround">文字环绕（float）</router-link></div>	
		<div>工程化</div>
		<div><router-link to="/engineering/picture">打包和图片路径问题</router-link></div>
		<div>面向对象</div>
		<div><router-link to="/objectOriented/redGreenLight">红绿灯</router-link></div>
		<div>npm本地组件</div>
		<div><router-link to="/lijie/main">lijie</router-link></div>
	</div>
</template>

<script setup>
import {ref} from 'vue';
const num = ref('')
</script>

<style scoped lang="scss">
.home {
	padding: 20px;
}
</style>