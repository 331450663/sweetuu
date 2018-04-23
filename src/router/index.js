import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HiWord from '@/components/HiWord'
import one from '@/components/one'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HiWord',
      name: 'HiWord',
      component: HiWord
    },
    {
      path:'/one',
      name:'one',
      component:one
    }
  ]
})
