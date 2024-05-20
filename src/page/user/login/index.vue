<template>
  <div class="main">
    <div class="login">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        label-width="auto"
        class="demo-ruleForm"
        status-icon
      >
        <div class="title">欢迎登录</div>
        <el-form-item prop="name">
          <el-input
            v-model="ruleForm.username"
            clearable
            placeholder="账号"
            :prefix-icon="UserFilled"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="ruleForm.password"
            clearable
            show-password
            placeholder="密码"
            :prefix-icon="Lock"
          />
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" type="primary" @click="login">登录</el-button>
          <!-- <el-button class="login-btn" type="primary" @click="getUser">改密</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { Lock, UserFilled } from "@element-plus/icons-vue";
import { ref, reactive, getCurrentInstance } from "vue";
import request from "@/utils/request";
import { ElMessage } from "element-plus";
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()

const { proxy } = getCurrentInstance();

const ruleFormRef = ref();
const ruleForm = reactive({
  name: "",
  password: "",
});

function login() {
  request({
    url: "/users/login",
    method: "post",
    data: {
      user_name: ruleForm.username,
      password: ruleForm.password,
    },
  }).then((res) => {
    if (res.code !== 0) {
      return;
    }
    localStorage.setItem("token", res.result.token);
    ElMessage.success("登录成功！");
		router.push('/')
  });
}

function getUser() {
  request({
    url: "/users",
    method: "get",
    data: {
      // user_name: ruleForm.username,
      // password: ruleForm.password,
    },
  }).then((res) => {
    if (res.code !== 0) {
      return;
    }
  });
}
</script>

<style scoped lang="scss">
.main {
  position: relative;
  width: 100vw;
  height: 100vh;
  .login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 360px;
    transform: translate(-50%, -50%);
    .title {
      text-align: center;
      margin-bottom: 15px;
      font-size: 22px;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
