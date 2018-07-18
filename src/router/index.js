import Vue from 'vue'
import Router from 'vue-router'
import Publish from '@/pages/Publish/Publish'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/publish',
      name: 'Publish',
      component: Publish
    }
  ]
})
