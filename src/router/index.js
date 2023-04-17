import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('@/views/home'),
    hidden:true
  },
  {
    path: '/search',
    name: 'search',
    component: ()=>import('@/views/search'),
    hidden:true
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import('@/views/login'),
    hidden:true
  }
]

const router = new VueRouter({
  routes
})

export default router
