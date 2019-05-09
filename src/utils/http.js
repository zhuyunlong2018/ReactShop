import axios from 'axios'
import { Toast } from 'antd-mobile';
import store from 'SRC/store'


// baseURL: process.env.BASE_API, 
const baseURL = "mock" // api 的 base_url

// 创建axios实例
const service = axios.create({
  baseURL: baseURL,
  timeout: 5000 // 请求超时时间
})
const state = store.getState()
// request拦截器
service.interceptors.request.use(
  config => {
    if (state.userInfo.token) {
      config.headers['token'] = state.userInfo.token // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    if(state.commonInfo.hasLoading){
        Toast.loading('', 3);
    }
    return config
  },
  error => {
    Toast.hide();
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    Toast.hide();
    if (response.status == 200) {
      const data = response.data
      return data;
    }
    return response
  },
  error => {
    console.log('err' + error) // for debug
    Toast.hide();
    return Promise.reject(error)
  }
)


/**
 * 使用es6中的类，进行简单封装
 */
class http {
  // 使用async ... await
  static async get(url, params) {
    // console.log(params)
    if (baseURL == 'mock') {
      url += '.json'
    }
    return await service.get(url, {params}) 
  }
  static async post(url, params) {
    // console.log(params)
    if (baseURL == 'mock') {
      url += '.json'
      return await service.get(url, {params})
    }
    return await service.post(url, params);
  }
}


export default http;