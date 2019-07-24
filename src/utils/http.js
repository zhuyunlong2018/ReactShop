import axios from 'axios'
import { Toast } from 'antd-mobile';
import store from 'SRC/store'
import { toggleLoading } from 'SRC/store/common/action'

// api 的 base_url
const baseURL = process.env.REACT_APP_API

// 创建axios实例
const service = axios.create({
  baseURL: baseURL,
  timeout: 5000 // 请求超时时间
})

//获取redux
let state = store.getState()
store.subscribe(() => {
  //使用subscribe，当数据更改时会重新获取
  state = store.getState();
});

// request拦截器
service.interceptors.request.use(
  config => {
    if (state.userInfo.token) {
      // 让每个请求携带自定义token 请根据实际情况自行修改
      config.headers['token'] = state.userInfo.token
    }
    if (!state.commonInfo.hasLoading) {
      //显示加载动画
      Toast.loading('', 3);
      store.dispatch(toggleLoading(true))
    }
    return config
  },
  error => {
    if (state.commonInfo.hasLoading) {
      Toast.hide();
      store.dispatch(toggleLoading(false))
    }
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    console.log(response)
    if (state.commonInfo.hasLoading) {
      Toast.hide();
      store.dispatch(toggleLoading(false))
    }
    if (response.status === 200) {
      const data = response.data
      switch (data.code) {
        case 200:
          return data.data
        case 100:
          //TODO 登录token失效，进行logout清除本地用户信息操作
          break;
        default:
        //其他，及为失败的各种错误信息，可以进行各种全局弹窗提示
      }
    }
    return Promise.reject(response)
  },
  error => {
    console.log('err' + error) // for debug
    if (state.commonInfo.hasLoading) {
      Toast.hide();
      store.dispatch(toggleLoading(false))
    }
    return Promise.reject(error)
  }
)


/**
 * 使用es6中的类，进行简单封装
 * 地址为mock时请求本地json文件，全部使用get方式
 */
class http {
  // 使用async ... await
  static async get(url, params) {
    // console.log(params)
    if (baseURL === 'mock') {
      url += '.json'
    }
    return await service.get(url, { params })
  }
  static async post(url, params) {
    // console.log(params)
    if (baseURL === 'mock') {
      url += '.json'
      return await service.get(url, { params })
    }
    return await service.post(url, params);
  }
}

export default http;