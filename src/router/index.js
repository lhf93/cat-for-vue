import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import HelloWorld from '@/components/HelloWorld'
import Diary from '@/components/Diary'
import Publish from '@/components/Publish'
=======
import Publish from '@/pages/Publish/Publish'

import HelloWorld from '@/components/HelloWorld'
import Diary from '@/components/Diary'
// import Publish from '@/components/Publish'
>>>>>>> b0ac87ccfbdd22eb18a3e5d4c8397df4901b8747
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
