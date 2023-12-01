<script setup>
import { initCustomFormatter, onMounted, ref } from 'vue';
import OpenAI from "openai";

const response = ref('');

async function init() {
	const openai = new OpenAI({
		apiKey: '',
		dangerouslyAllowBrowser: true
	});
	
	const stream = await openai.chat.completions.create({
		model: "gpt-3.5-turbo",
		messages: [{"role": "user", "content": "Hello!"}],
		stream: true,
	});
	for await (const part of stream) {
		console.log(part.choices[0].delta);
	}

}

function postApi() {
	const headers = new Headers();
	headers.append('Authorization', response.value)
	fetch('https://api.openai.com/v1/chat/completions', {
		method: 'post',
		headers,
	})
}

onMounted(() => {
	init()
})
</script>

<template>
	<div class="">
		<button @click="postApi">发送</button>
	</div>
</template>

<style scoped lang="scss">

</style>