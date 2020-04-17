import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Detail from '../views/detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details/:Pid',
    name: 'detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
