<template>
  <div class="main">
    <img class="login-img" src="/login-image.svg" alt="" />

    <div class="login">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        label-width="auto"
        class="demo-ruleForm"
        status-icon
      >
        <div class="title">
          {{ loginType === "login" ? "欢迎登录Li-Admin" : "注册账号" }}
        </div>
        <el-form-item
          prop="username"
          :rules="[{ validator: validateUsername, trigger: 'blur' }]"
        >
          <el-input
            v-model.trim="ruleForm.username"
            clearable
            placeholder="账号"
            :prefix-icon="UserFilled"
            size="large"
          />
        </el-form-item>
        <el-form-item
          prop="password"
          :rules="[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 4, message: '请输入至少4位字符', trigger: 'blur' },
          ]"
        >
          <el-input
            v-model.trim="ruleForm.password"
            clearable
            show-password
            placeholder="密码"
            :prefix-icon="Lock"
            size="large"
          />
        </el-form-item>
        <el-form-item
          prop="code"
          :rules="[{ required: true, message: '请输入验证码', trigger: 'blur' }]"
        >
          <div class="code-content">
            <el-input
              class="code-input"
              v-model.trim="ruleForm.code"
              clearable
              placeholder="验证码"
              :prefix-icon="CreditCard"
              size="large"
            />
            <div v-html="codeImg" @click="getLoginCode"></div>
          </div>
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
            type="success"
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
import { Lock, UserFilled, CreditCard } from "@element-plus/icons-vue";
import { ref, reactive, getCurrentInstance } from "vue";
import request from "@/utils/request";
import { useRouter, useRoute } from "vue-router";

const validateUsername = (rule, value, callback) => {
  console.log(rule);
  if (!value) {
    return callback(new Error("请输入用户名"));
  }
  const reg = /^[a-z]{4,}$/i;
  if (!reg.test(value)) {
    return callback(new Error("请输入4位以上，英文字母"));
  }
  callback();
};

const route = useRoute();
const router = useRouter();

const { proxy } = getCurrentInstance();

const codeImg = ref("");
const loginType = ref("login");
const ruleFormRef = ref();
const ruleForm = reactive({
  username: "",
  password: "",
  code: "",
});

const change = (type) => {
  loginType.value = type;
  ruleFormRef.value.resetFields();
};

const getLoginCode = async () => {
  const { result } = await request({
    url: "/users/login/code",
    method: "get",
  });
  codeImg.value = result;
};

// 登陆
const login = () => {
  if (!ruleFormRef.value) return;
  ruleFormRef.value.validate(async (valid) => {
    if (!valid) return;
    const { code, message, result } = await request({
      url: "/users/login",
      method: "post",
      data: {
        user_name: ruleForm.username,
        password: ruleForm.password,
        code: ruleForm.code,
      },
    });
    if (code === 0) {
      localStorage.setItem("token", result.token);
      ElMessage.success("登录成功！");
      router.push("/");
    } else {
      getLoginCode();
    }
  });
};
// 注册
const register = () => {
  if (!ruleFormRef.value) return;
  ruleFormRef.value.validate(async (valid) => {
    if (!valid) return;
    await ElMessageBox.confirm("是否确认注册账号？", {
      type: "warning",
    });
    const { code, message, result } = await request({
      url: "/users/register",
      method: "post",
      data: {
        user_name: ruleForm.username,
        password: ruleForm.password,
        code: ruleForm.code,
      },
    });

    if (code !== 0) {
      getLoginCode();
      return;
    }
    ElMessage.success("注册成功！");
    change("login");
    ruleForm.username = result.user_name;
  });
};

getLoginCode();
</script>

<style scoped lang="scss">
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  // padding: 0 100px
  width: 100vw;
  height: 100vh;
  background-image: url("/bg-login.png");
  background-size: 100% 100%;
  .login-img {
    width: 500px;
    height: 350px;
    margin-right: 150px;
  }
  .login {
    // position: absolute;
    // left: 50%;
    // top: 50%;
    min-width: 360px;
    // transform: translate(-50%, -50%);
    margin-left: 150px;
    .title {
      text-align: center;
      margin-bottom: 15px;
      font-size: 22px;
    }
    .login-btn {
      width: 100%;
    }
    .code-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .code-input {
        width: 220px;
      }
    }
  }
  .register {
    float: right;
  }
}
</style>
