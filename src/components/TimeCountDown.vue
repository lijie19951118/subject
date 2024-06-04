<template>
  <span>
    <span v-if="days > 0">{{ days }}天</span>
    <span v-if="hours > 0">{{ hours }}小时</span>
    <span v-if="minutes">{{ minutes }}分钟</span>
    <span v-if="seconds">{{ seconds }}秒</span></span
  >
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";

const props = defineProps({
  count: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["over"]);

const remainingTime = ref(0);
const intervalId = ref(null);

const days = computed(() => Math.floor(remainingTime.value / (24 * 3600)));
const hours = computed(() => Math.floor((remainingTime.value % (24 * 3600)) / 3600));
const minutes = computed(() => Math.floor((remainingTime.value % 3600) / 60));
const seconds = computed(() => remainingTime.value % 60);

const startCountdown = () => {
  clearInterval(intervalId.value);
  intervalId.value = setInterval(() => {
    // console.log("计时器++++++");
    if (remainingTime.value > 0) {
      remainingTime.value -= 1;
    } else {
      clearInterval(intervalId.value);
      emit("over");
    }
  }, 1000);
};

watch(
  () => props.count,
  (time) => {
    if (time) {
      remainingTime.value = time;
      startCountdown();
    }
  },
  {
    immediate: true,
  }
);

onBeforeUnmount(() => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
  }
});
</script>
