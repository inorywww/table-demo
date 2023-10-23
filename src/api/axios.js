import axios from 'axios'
import { ElMessage } from 'element-plus'

const baseUrl = 'http://localhost:8000'

const __DEFAULT_PARAMS__ = {}

// 创建axios实例
const service = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  },
  responseType: "json"
});

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    ElMessage.error(error.message);
    return Promise.reject(error);
  }
);

export function axiosGetHandler (url, args = {}) {
  let params = Object.assign(__DEFAULT_PARAMS__, args);
  return httpRequest(url, params);
}

function httpRequest (url, args) {
  return service.get(url, {
    params: args
  });
}
