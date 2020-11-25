import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Secret from '@/components/Secret'
import Mypage from '@/components/Mypage'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '',
      name: 'secretpage',
      component: Secret,
      children: [
        {
          path: '/mypage',
          name: 'mypage',
          component: Mypage
        }
      ]
    }
  ]
})
