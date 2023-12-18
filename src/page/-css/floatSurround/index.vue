<template>
	<div class="main">
		<img class="float-img" src="https://wsnbh.oss-cn-hangzhou.aliyuncs.com/default/1698478442736.jpg" alt="">
		Sometimes a web page's text content appears to be funneling your attention towards a spot on the page to drive you to follow a particular link.Sometimes you don't notice.Sometimes a web page's text content appears to be funneling your attention towards a spot on the page to drive you to follow a particular link.Sometimes you don't notice.Sometimes a web page's text content appears to be funneling your attention towards a spot on the page to drive you to follow a particular link.Sometimes you don't notice.Sometimes a web page's text content appears to be funneling your attention towards a spot on the page to drive you to follow a particular link.Sometimes you don't notice.
		Sometimes a web page's text content appears to be funneling your attention towards a spot on the page to drive you to follow a particular link.Sometimes you don't notice.Sometimes a web page's text content appears to be funneling your attention towards a spot on the page to drive you to follow a particular link.Sometimes you don't notice.Sometimes a web page's text content appears to be funneling your attention towards a spot on the page to drive you to follow a particular link.Sometimes you don't notice.Sometimes a web page's text content appears to be funneling your attention towards a spot on the page to drive you to follow a particular link.Sometimes you don't notice.
		Sometimes a web page's text content appears to be funneling your attention towards a spot on the page to drive you to follow a particular link.Sometimes you don't notice.Sometimes a web page's text content appears to be funneling your attention towards a spot on the page to drive you to follow a particular link.Sometimes you don't notice.Sometimes a web page's text content appears to be funneling your attention towards a spot on the page to drive you to follow a particular link.Sometimes you don't notice.Sometimes a web page's text content appears to be funneling your attention towards a spot on the page to drive you to follow a particular link.Sometimes you don't notice.
		Sometimes a web page's text content appears to be funneling your attention towards a spot on the page to drive you to follow a particular link.Sometimes you don't notice.Sometimes a web page's text content appears to be funneling your attention towards a spot on the page to drive you to follow a particular link.Sometimes you don't notice.Sometimes a web page's text content appears to be funneling your attention towards a spot on the page to drive you to follow a particular link.Sometimes you don't notice.Sometimes a web page's text content appears to be funneling your attention towards a spot on the page to drive you to follow a particular link.Sometimes you don't notice.
		<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/shape-outside" target="_blank">https://developer.mozilla.org/zh-CN/docs/Web/CSS/shape-outside</a>
		<div>
			-----------------------分割线--------------------
		</div>

		<div class="tag">
			<img src="https://wsnbh.oss-cn-hangzhou.aliyuncs.com/default/1698478442736.jpg" alt="">
			<div>呃呃呃呃呃呃呃呃呃呃呃呃</div>
		</div>

	</div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance();

</script>

<style scoped lang="scss">
.main {
	padding: 10px;
}
.float-img {
	width: 200px;
	height: 200px;
	float: left;
	border-radius: 50%;
	margin-right: 10px;
	shape-outside: circle(50% at 50% 50%);
}

// -------------------
.tag {
	--h: 30px;
	display: flex;
	height: var(--h);
	background: orange;
	border-radius: 6px;
	line-height: var(--h);
	color: #fff;
	padding: 6px 8px;
	width: fit-content;
	img {
		height: 100%;
		border-radius: 4px;
		margin-right: 10px;
	}
}
</style>