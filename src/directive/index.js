import {
  get,
  post
} from './axios.js';
export default {
  install(Vue) {
    Vue.prototype.$login = function () {
      vue.$store.commit('beforeLoginRoute/setRouteName', vue.$route.name);
      window.location.href = globals.ssoLoginUrl;
    };
    Vue.prototype.$get = get;
    Vue.prototype.$post = post;
  },
};
