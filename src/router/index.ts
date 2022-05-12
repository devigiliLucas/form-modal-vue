import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Sign_upView from '../views/Sign_upView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sign_up',
    name: 'sing-_up',
    component: Sign_upView
  }
]

const router = new VueRouter({
  routes
})

export default router
