import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Diary from '@/components/Diary'
// import DiaryDetails from '@/components/DiaryDetails'
// import Publish from '@/components/Publish'
import Publish from '@/components/Publish'

// const DiaryList = (resolve) => {
//   import('@/components/DiaryList').then((module) => {
//     resolve(module)
//   })
// }

const DiaryDetails = (resolve) => {
  import('@/components/DiaryDetails').then((module) => {
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
      path: '/diary/:id',
      name: 'Diary',
      component: Diary
    },
    {
      path: '/detail/:id',
      name: 'DiaryDetail',
      component: DiaryDetails
    },
    {
      path: '/publish',
      name: 'Publish',
      component: Publish
    }
  ]
})
