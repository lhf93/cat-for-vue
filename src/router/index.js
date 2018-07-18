import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Publish from '@/pages/Publish/Publish'

=======
import HelloWorld from '@/components/HelloWorld'
import Diary from '@/components/Diary'
import Publish from '@/components/Publish'
>>>>>>> 5bae3ee285ca3df92f027b3fa5d6dd4dc7a1a639
Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
=======
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
>>>>>>> 5bae3ee285ca3df92f027b3fa5d6dd4dc7a1a639
      path: '/publish',
      name: 'Publish',
      component: Publish
    }
  ]
})
