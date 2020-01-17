import axios from 'axios';
import Vue from 'vue';

const Axios = axios.create({
  baseURL: globals.serverUrl
})

export async function get(url, data) {
  try {
    let res = await Axios.get(url, {
      params: data
    });
    res = res.data;
    return new Promise((resolve, reject) => {
      if (res.code === '1') {
        resolve(res.data);
      } else {
        Vue.prototype.$notify({
          showClose: true,
          duration: 2000, // 弹框显示时间，毫秒
          message: res.message,
          type: 'error',
        });
      }
    });
  } catch (err) {
    console.error(err);
    Vue.prototype.$notify({
      showClose: true,
      duration: 2000, // 弹框显示时间，毫秒
      message: '服务器错误',
      type: 'error',
    });
  }
}
export async function post(url, data) {
  try {
    let res = await Axios.post(url, JSON.stringify(data));
    res = res.data;
    return new Promise((resolve, reject) => {
      if (res.code === '1') {
        resolve(res.data);
      } else {
        Vue.prototype.$notify({
          showClose: true,
          duration: 2000, // 弹框显示时间，毫秒
          message: res.message,
          type: 'error',
        });
      }
    });
  } catch (err) {
    console.error(err);
    Vue.prototype.$notify({
      showClose: true,
      duration: 2000, // 弹框显示时间，毫秒
      message: '服务器错误',
      type: 'error',
    });
  }
}
