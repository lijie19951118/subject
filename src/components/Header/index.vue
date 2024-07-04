<template>
  <div class="header">
    <div class="title">
      <span>您好，{{ user.user_name }}</span>
    </div>
    <div class="right">
      <el-button type="primary" link @click="editPassword"> 修改密码 </el-button>
      <el-button type="primary" link @click="toLoginOut"> 退出登录 </el-button>

      <div class="count-time">
        <TimeCountDown :count="timeCount" @over="loginOut" />后token过期
      </div>
    </div>
  </div>

  <el-dialog v-model="show" title="修改密码" width="500" @closed="closed">
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon label-width="auto">
      <el-form-item
        label="新密码"
        prop="password"
        :rules="[
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { min: 4, message: '请输入至少4位字符', trigger: 'blur' },
        ]"
      >
        <el-input
          v-model.trim="ruleForm.password"
          type="password"
          placeholder="请输入新密码"
          show-password
        />
      </el-form-item>
      <el-form-item
        label="确认密码"
        prop="passworAffirm"
        required
        :rules="[{ validator: validatePassAffirm, trigger: 'blur' }]"
      >
        <el-input
          v-model.trim="ruleForm.passworAffirm"
          type="password"
          placeholder="请确认密码"
          show-password
        />
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="show = false">取消</el-button>
        <el-button type="primary" @click="submitEditPassword"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import request from "@/utils/request";
import TimeCountDown from "@/components/TimeCountDown.vue";

// 确认密码校验
const validatePassAffirm = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请再次输入密码"));
  } else if (value !== ruleForm.password) {
    callback(new Error("再次输入密码不正确"));
  } else {
    callback();
  }
};

const router = useRouter();
const user = ref({
  user_name: "",
});

const ruleFormRef = ref(null);
const ruleForm = reactive({
  password: "",
  passworAffirm: "",
});
const show = ref(false);

const timeCount = computed(() => {
  if (user.value.exp) {
    return user.value.exp - Date.now().toString().slice(0, -3);
  } else {
    return 0;
  }
});

const getUser = () => {
  request({
    url: "/users",
    method: "get",
    data: {},
  }).then((res) => {
    if (res.code !== 0) {
      return;
    }
    user.value = res.result;
    localStorage.setItem("userName", res.result.user_name);
  });
};

const loginOut = () => {
  localStorage.removeItem("token");
  router.push("/user/login");
};
const toLoginOut = async () => {
  try {
    await ElMessageBox.confirm("是否确认退出登陆？", {
      type: "warning",
    });
    loginOut();
  } catch (err) {
    console.log(err);
  }
};
// 修改密码
const editPassword = () => {
  show.value = true;
};
const submitEditPassword = () => {
  ruleFormRef.value.validate(async (valid) => {
    if (!valid) return;
    await ElMessageBox.confirm("是否确认修改密码？", {
      type: "warning",
    });
    const res = await request({
      url: "/users/edit_password",
      method: "post",
      data: {
        password: ruleForm.password,
      },
    });
    if (res.code !== 0) {
      return;
    }
    ElMessage.success("修改成功！");
    loginOut();
  });
};
const closed = () => {
  ruleFormRef.value.resetFields();
};
// 校验登录
getUser();
</script>

<style scoped lang="scss">
.header {
  position: sticky;
  background: #fff;
  top: 0px;
  width: 100%;
  // padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #ccc;
  z-index: 1;
  box-shadow: 3px 0 3px 3px #ccc;
  .title {
    margin: 0 5px;
  }
}
.count-time {
  font-size: 14px;
  min-width: 200px;
}
.right {
  display: flex;
  margin: 0 5px 0 0;
  text-align: center;
}
</style>
