<template>
  <div class="" style="padding: 50px">
    <input type="file" @change="changeInput" />
    <img :src="imgBase64" alt="" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const imgBase64 = ref("");

function changeInput(e) {
  // 获取文件file对象
  const file = e.target.files[0];

  // file转成Blod对象
  // const fileBlob = new Blob([file]);
  // console.log(fileBlob);

  // 剪切blob对象
  // const _fileBlob = fileBlob.slice(0, 10000);
  toBase64(file).then((result) => {
    imgBase64.value = result;
  });
  // 接口上传
  // 创建formData对象
  const _formData = new FormData();
  _formData.append("name", "lijie");
  _formData.append("password", 111111);
  _formData.append("file", file);
  fetch("xxxx.xxx", {
    method: "post",
    body: _formData,
  });
}

function toBase64(file) {
  // blod转成base64
  return new Promise((resolve) => {
    const fr = new FileReader();
    fr.onload = (e) => {
      // console.log(e.target.result);
      resolve(e.target.result);
    };
    fr.readAsDataURL(file);
  });
}
</script>

<style scoped lang="scss"></style>
