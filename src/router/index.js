import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Diary from '@/components/Diary'
import Publish from '@/components/Publish'
import 'assets/js/fit.js'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/diary',
      name: 'Diary',
      component: Diary
    },
    {
      path: '/publish',
      name: 'Publish',
      component: Publish
    }
  ]
})
