import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element.js';
import directive from 'src/directive'; // 引入自定义指令
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';
Vue.use(VueApollo);
const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');
Vue.use(directive);
