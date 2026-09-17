// axios基础的封装

import axios from "axios";

const httpInstance = axios.create({
  baseURL: "https://pcapi-xiaotuxian-front-devtest.itheima.net/",
  timeout: 5000,
});

// axios请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // console.log("请求拦截器", config);
    return config;
  },
  (e) => Promise.reject(e),
);

// axios响应拦截器
httpInstance.interceptors.response.use(
  (res) => {
    // 对响应数据做点什么
    // console.log("响应拦截器", res);
    return res.data;
  },
  (e) => Promise.reject(e),
);

export default httpInstance;
