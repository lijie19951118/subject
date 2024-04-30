<template>
	<div class="">
		<input type="file" @change="upload">
		<hr>
		<el-button type="primary" @click="download">下载图片（download）</el-button>
		<hr>
		<el-button type="primary" @click="downStream">下载图片（文件流 stream）</el-button>
	</div>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

// 上传图片
const upload = async (event) => {
	const file = event.target.files[0];
	const fileData = new FormData();
	fileData.append('file', file);
	fileData.append('name', 'xiaoli');
	fileData.append('age', 18);
	console.log(file,fileData)
	const res = await fetch('/api/upload/album', {
		method: 'POST',
		body: fileData
	});
	const data = await res.json();
	console.log(data)
}
// 下载图片
const download = () => {
	window.open('/api/upload/export');
}

// axios responseType >>>> ArrayBuffer Blob 
const useFetch = async (url:string) => {
	// 获取返回数据
	const res = await fetch(url);
	// 解析成stream
	const stream = await res.arrayBuffer();
	// 解析成blob
	const blob = new Blob([stream]);
	// 解析成url
	const blobUrl = URL.createObjectURL(blob);
	// 创建a标签
	const a = document.createElement('a');
	// 设置链接
	a.href = blobUrl;
	// 设置下载名字（zip）
	a.download = 'xiaoli.zip'
	// 下载
	a.click();
}
// 文件流下载
const downStream = () => {
	useFetch('/api/upload/stream');
}
</script>

<style scoped lang="scss">
</style>