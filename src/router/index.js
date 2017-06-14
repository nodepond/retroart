import Vue from 'vue'
import Router from 'vue-router'
import Drawmode from '@/components/Drawmode'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Drawmode',
      component: Drawmode
    }
  ]
})
