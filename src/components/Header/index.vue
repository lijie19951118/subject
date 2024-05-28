<template>
  <div class="header">
    <div class="title">您好，{{ user.user_name }}</div>
    <div>
      <span class="count-time"
        ><TimeCountDown :count="timeCount" @over="loginOut" />后token过期</span
      >
      <el-button type="primary" link @click="toLoginOut"> 退出登录 </el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import request from "@/utils/request";
import TimeCountDown from "@/components/TimeCountDown.vue";
import { ElMessage, ElMessageBox } from "element-plus";

const router = useRouter();
const user = ref({
  user_name: "",
});

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
  });
};

const loginOut = () => {
  localStorage.removeItem("token");
  router.push("/user/login");
};
const toLoginOut = async () => {
  try {
    await ElMessageBox.confirm("是否确认退出登陆？", {
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      type: "warning",
    });
    loginOut();
  } catch (err) {
    console.log(err);
  }
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
  .title {
    margin: 0 5px;
  }
}
.count-time {
  font-size: 14px;
}
</style>
