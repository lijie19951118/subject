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
        <div class="title">{{ loginType === "login" ? "欢迎登录" : "注册" }}</div>
        <el-form-item
          prop="username"
          :rules="[{ required: true, message: '请输入账号', trigger: 'blur' }]"
        >
          <el-input
            v-model="ruleForm.username"
            clearable
            placeholder="账号"
            :prefix-icon="UserFilled"
          />
        </el-form-item>
        <el-form-item
          prop="password"
          :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
        >
          <el-input
            v-model="ruleForm.password"
            clearable
            show-password
            placeholder="密码"
            :prefix-icon="Lock"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            v-if="loginType === 'login'"
            class="login-btn"
            type="primary"
            @click="login"
            >登录</el-button
          >
          <el-button
            v-if="loginType === 'register'"
            class="login-btn"
            type="success"
            @click="register"
            >注册</el-button
          >
          <!-- <el-button class="login-btn" type="primary" @click="getUser">改密</el-button> -->
        </el-form-item>
        <div>
          <el-button
            v-if="loginType === 'login'"
            class="register"
            type="primary"
            link
            @click="change('register')"
          >
            立即注册
          </el-button>
          <el-button
            v-if="loginType === 'register'"
            class="register"
            type="primary"
            link
            @click="change('login')"
          >
            去登陆
          </el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { Lock, UserFilled } from "@element-plus/icons-vue";
import { ref, reactive, getCurrentInstance } from "vue";
import request from "@/utils/request";
import { ElMessage } from "element-plus";
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const router = useRouter();

const { proxy } = getCurrentInstance();

const loginType = ref("login");
const ruleFormRef = ref();
const ruleForm = reactive({
  username: "",
  password: "",
});

const change = (type) => {
  loginType.value = type;
  ruleFormRef.value.resetFields();
};
// 登陆
const login = () => {
  if (!ruleFormRef.value) return;
  ruleFormRef.value.validate((valid) => {
    if (!valid) return;
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
      router.push("/");
    });
  });
};
// 注册
const register = () => {
  if (!ruleFormRef.value) return;
  ruleFormRef.value.validate((valid) => {
    if (!valid) return;
    request({
      url: "/users/register",
      method: "post",
      data: {
        user_name: ruleForm.username,
        password: ruleForm.password,
      },
    }).then((res) => {
      if (res.code !== 0) {
        return;
      }
      ElMessage.success("注册成功！");
      change("login");
      ruleForm.username = res.result.user_name;
    });
  });
};
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
  .register {
    float: right;
  }
}
</style>
