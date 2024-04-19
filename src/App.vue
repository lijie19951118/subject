<template>
  <div class="main">
    <el-menu
      class="el-menu-vertical"
			active-text-color="#ffd04b"
			background-color="#545c64"
			text-color="#fff"
			router
			:default-active="activeMenu"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu v-for="item in menuList" :key="item.path" :index="item.path">
        <template #title>
          <el-icon><icon-menu /></el-icon>
          <span>{{item.title}}</span>
        </template>
				<el-menu-item v-for="child in item.children" :key="child.path" :route="{path: child.path}" :index="child.path">
					{{child.title}}
				</el-menu-item>
      </el-sub-menu>
    </el-menu>

		<div class="content">
			<router-view></router-view>
		</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watchEffect } from 'vue';
import { Document, Menu as IconMenu, Location, Setting } from "@element-plus/icons-vue";
import { useRouter } from 'vue-router';
import routeList from './router/data.js';
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const menuList = routeList;

const activeMenu = ref('');
const router = useRouter();

watchEffect(() => {
	activeMenu.value = router.currentRoute.value.path;
})
</script>

<style scoped>
.main {
	position: relative;
	display: flex;
	flex-wrap: nowrap;
	padding-left: 144px;
}
.main .el-menu-vertical {
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
}
.main .content {
		position: relative;
	}
</style>
