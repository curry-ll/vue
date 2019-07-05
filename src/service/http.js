import http from 'axios'
import store from '../store'
import Vue from 'vue'
import qs from 'qs'
// import { login } from '../store/actions';
let unwantedToken = ['/user/PhoneLogin', '/user/PhoneRegister', '/user/VerifyCode', '/user/NewPassword', '/common/About']
http.defaults.baseURL = process.env.baseAPI
http.defaults.timeout = 5000
http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// cache-control: "max-age=0, private, must-revalidate"
// http.defaults.headers.post['Cache-control'] = 'max-age=5'

// Add a request interceptor 解决ie下url带中文参数乱码问题
http.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (store.state.token && unwantedToken.indexOf(config.url) === -1) {
    // config.headers.common['token'] = localStorage.getItem('token')
    if (config.method === 'get') {
      config.url = encodeURI(config.url)
      config.params = {
        token: store.state.token,
        ...config.params
      }
    } else {
      if (config.url === '/user/Image') {
        config.data = config.data
      } else {
        let data = qs.parse(config.data)
        config.data = qs.stringify({
          token: store.state.token,
          ...data
        })
      }
    }
  } else {
    if (config.method === 'get') {
      config.url = encodeURI(config.url)
    } else {
      if (config.url === '/user/Image') {
        config.data = config.data
      } else {
        let data = qs.parse(config.data)
        config.data = qs.stringify({
          ...data
        })
      }
    }
  }
  //  config.data = qs.stringify(config.data)
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
http.interceptors.response.use(function (response) {
  // Do something with response data
  if (response.data.flag === -1) {
    Vue.prototype.router.replace('login')
  }
  return response
}, function (error) {
  // Do something with response error
  if (error.response) {
    if (error.response.status !== 200) {
      alert('数据错误！')
    }
  }
  return Promise.reject(error)
})

export default http
