<template>
  <div>
    <el-form class="main" :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="账号">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item label="验证码">
        <el-input v-model="form.code" />
        <img @click="resetCode" :src="codeUrl" alt="" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, getCurrentInstance } from "vue";

const { proxy } = getCurrentInstance();

const codeUrl = ref<string>("/api/user/code");

const form = reactive({
  name: "",
  password: "",
  code: "",
});

async function onSubmit() {
  try {
    const res = await fetch("/api/user/create", {
      method: "post",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });
		console.log(res)
    const data = await res.json();
		if (data.code !== 0) {
			return
		}
    if (data.data.code === 0) {
      alert(data.data.message + "√");
    } else {
      alert(data.data.message + "×");
    }
  } catch (err) {
    console.log(err);
  }
}

function resetCode() {
  codeUrl.value = codeUrl.value + "?" + Math.random();
}
</script>

<style scoped lang="scss">
.main {
  margin: 50px auto 0;
}
</style>
