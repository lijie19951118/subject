// 进行axios二次封装：使用请求与响应拦截器
import axios from "axios";
import { ElMessage } from "element-plus";
import { router } from '@/router'
//1. create创建实例（基础路径，超时时间）
let request = axios.create({
  // 基础路径
  baseURL: "http://127.0.0.1:8000", //import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});

//2. 实例添加请求与响应拦截器
request.interceptors.request.use((config) => {
  // config配置对象，headers请求头，携带公共参数
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = "Bearer " + token;
  // 返回配置对象
  return config;
});

//3. 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 成功回调
    const data = response.data;
    if (data.code === "2000") {
      // 去登录页面
      ElMessage({
        type: "error",
        message: "token过期，请重新登录",
      });
			router.push('/user/login')
      return Promise.reject("token过期，请重新登录");
    }
    if (data.code !== 0) {
      ElMessage({
        type: "error",
        message: data.message,
      });
      return Promise.reject();
    }
    // 简化数据
    return response.data;
  },
  (error) => {
    console.log(error);
    // 失败回调：处理网络错误
    let message = "";
    let status = error.response.status;
    switch (status) {
      case 401:
        message = "TOKEN过期";
        break;
      case 403:
        message = "无权访问";
      case 404:
        message = "请求地址错误";
      case 500:
        message = "服务器错误";
      default:
        message = "网络错误";
    }
    // 提示错误信息
    ElMessage({
      type: "error",
      message,
    });

    return Promise.reject(error);
  }
);

export default request;
