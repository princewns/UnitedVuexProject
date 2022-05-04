import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/MemoList.vue'
import PageView from '../views/PageView.vue'
import WriteForm from '../views/WriteForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/list',
    name: 'list',
    component: ListView
  },
  {
    path: '/list/:id',
    name : 'pageview',
    component: PageView
  },
  {
    path: '/writeform',
    name : 'writeform',
    component: WriteForm
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
