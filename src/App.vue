<template>
  <div :class="showMenu && 'app-main'">
    <el-menu
      v-if="showMenu"
      class="el-menu-vertical"
      router
      :default-active="activeMenu"
      active-text-color="#ffffff"
      unique-opened
      @open="handleOpen"
      @close="handleClose"
    >
      <div class="login">Li-Admin</div>
      <el-sub-menu v-for="item in menuList" :key="item.path" :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.icon" />
          </el-icon>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item
          v-for="child in item.children"
          :key="child.path"
          :route="{ path: child.path }"
          :index="child.path"
        >
          {{ child.title }}
        </el-menu-item>
      </el-sub-menu>
    </el-menu>

    <Header v-if="showMenu" />

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watchEffect, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import routeList from "./router/data.js";
import Header from "@/components/Header/index.vue";

const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};
const menuList = routeList;

const activeMenu = ref("");
const showMenu = ref(true);

const route = useRoute();
const router = useRouter();

watchEffect(() => {
  // console.log("监听路由-----", route.path);
  activeMenu.value = route.path;
  showMenu.value = route.path !== "/user/login";
});
</script>

<style scoped>
.app-main {
  position: relative;
  padding-left: 180px;
}
.app-main .el-menu-vertical {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 180px;
  overflow: auto;
  /* box-shadow: 0 0 3px 3px #ccc; */
}
.app-main .el-menu-vertical .login {
  font-size: 18px;
  font-weight: 600;
  line-height: 45px;
  text-align: center;
}
.app-main .content {
  position: relative;
  width: 100%;
  filter: saturate();
}
/* .app-main .el-menu-vertical :deep(.el-menu) .is-active::before {
  background: #409eff;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 154px;
  height: 42px;
  border-radius: 3px;
} */
.app-main .el-menu-vertical :deep(.el-menu) .is-active {
  background: #409eff;
}
</style>
