import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Diary from '@/components/Diary'
import Publish from '@/components/Publish'

const DiaryList = (resolve) => {
  import('@/components/DiaryList').then((module) => {
    resolve(module)
  })
}

const DiaryDetail = (resolve) => {
  import('@/components/DiaryDetail').then((module) => {
    resolve(module)
  })
}

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
      component: Diary,
      children: [
        {
          path: '/diary/list',
          name: 'DiaryList',
          component: DiaryList
        },
        {
          path: '/diary/detail',
          name: 'DiaryDetail',
          component: DiaryDetail
        }
      ]
    },
    {
      path: '/publish',
      name: 'Publish',
      component: Publish
    }
  ]
})
