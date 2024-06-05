<template>
  <div class="chat">
    <!-- <div class="room-list">
      <div class="">1号聊天室</div>
      <el-button type="primary">加入聊天室</el-button>
    </div> -->

    <div class="room">
      <div class="header">多人聊天室（聊天记录保留1小时）</div>
      <div class="body">
        <div class="member-content">
          <div class="view" ref="viewRef">
            <div v-for="(item, i) in megList" :key="i">
              <div
                v-if="item.mode === 'MESSAGE' || item.mode === 'IMAGE'"
                :class="['talk', userName === item.userName && 'talk-me']"
              >
                <div class="name">{{ item.userName }}</div>
                <div class="bubble" v-if="item.mode === 'MESSAGE'">
                  {{ item.message }}
                </div>
                <img
                  class="image-message"
                  v-if="item.mode === 'IMAGE'"
                  :src="item.message"
                  alt=""
                />
                <div class="time">
                  {{ dayjs(item.time).format("YYYY-MM-DD HH:mm:ss") }}
                </div>
              </div>
              <div
                v-if="item.mode === 'INTO' || item.mode === 'OUT'"
                class="system-message"
              >
                {{ item.message }}
              </div>
            </div>
          </div>
          <div class="input">
            <el-input
              class="message"
              v-model="message"
              :rows="10"
              type="textarea"
              placeholder="输入信息..."
              resize="none"
              input-style="border: none"
              @keydown="onkeydown"
            />
            <div class="tools">
              <el-link :underline="false" @click="imageRef.click()"
                ><el-icon size="30" color="#bababa"><Picture /></el-icon
              ></el-link>
            </div>
            <div class="btn-box">
              <span class="tag">shift + 回车键 换行</span>
              <el-button type="primary" @click="postMessage">发送</el-button>
              <!-- 上传按钮 -->
              <input
                style="display: none"
                ref="imageRef"
                type="file"
                accept="image/*"
                @change="changeImage"
              />
            </div>
          </div>
        </div>
        <div class="member-list">
          <p>当前在线人数：{{ userList.length }} 人</p>
          <div v-for="(item, i) in userList" :key="i">
            <el-icon><Avatar /></el-icon> {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import { Avatar, Picture } from "@element-plus/icons-vue";
import dayjs from "dayjs";
import { useWebSocket } from "@/hook";
import request from "@/utils/request";

let userName;
let ws;

const viewRef = ref(null);
const imageRef = ref(null);
const message = ref("");
// const num = ref(0);
const userList = ref([]);
const megList = ref([
  // {
  //   mode: "MESSAGE",
  //   userName: "里斯",
  //   message: "你好",
  // },
]);

function openHandler() {
  console.log("————————连接成功——————");
  const data = {
    time: new Date().getTime(),
    userName,
    message: `${userName}进入聊天室`,
    mode: "INTO",
  };
  ws.send(JSON.stringify(data));
}
async function onMessage(data) {
  data = JSON.parse(data.data);
  if (data.mode === "ROOM") {
    // num.value = data.num;
    userList.value = data.userList;
  } else {
    megList.value.push(data);
    message.value = "";
    await nextTick();
    scrollToDown();
  }
}

function postMessage() {
  if (message.value === "") {
    return;
  }
  const data = {
    time: new Date().getTime(),
    userName,
    message: message.value,
    mode: "MESSAGE",
  };
  ws.send(JSON.stringify(data));
}

function onkeydown(e) {
  if (e.keyCode == 13 && !e.shiftKey) {
    e.preventDefault();
    postMessage();
  }
}

function scrollToDown() {
  viewRef.value.scrollTo({
    top: viewRef.value.scrollHeight,
    left: 0,
    behavior: "smooth",
  });
}

function changeImage(file) {
  file = file.target.files[0];
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const data = {
      time: new Date().getTime(),
      userName,
      message: reader.result,
      mode: "IMAGE",
    };
    ws.send(JSON.stringify(data));

    console.log((imageRef.value.value = null));
  });
  reader.readAsDataURL(file);
}

async function getMessageList() {
  const res = await request({
    url: "/chat/list",
    method: "get",
    data: {},
  });
  if (res.code !== 0) {
    return;
  }
  megList.value = res.result;

  userName = localStorage.getItem("userName");
  ws = useWebSocket(onMessage, openHandler);
}

// 获取数据
getMessageList();

onMounted(() => {});
onBeforeUnmount(() => {
  const data = {
    time: new Date().getTime(),
    userName,
    message: `${userName}退出了聊天室`,
    mode: "OUT",
  };
  ws.send(JSON.stringify(data));
  ws.close();
});
</script>

<style scoped lang="scss" src="./css.scss"></style>
