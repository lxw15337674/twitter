import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
let layout = () => import('src/views/layout/layout.vue')
const routes = [{
  path: '/',
  component: layout,
  redirect: '/home',
  name: '',
  children: [{
    path: 'home',
    component: () => import('src/views/home/home.vue'),
    name: 'home'
  }, {
    path: 'hot',
    component: () => import('src/views/hot/hot.vue'),
    name: 'hot'
  }, {
    path: 'new',
    component: () => import('src/views/new/new.vue'),
    name: 'new'
  }]
}];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
