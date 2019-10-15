import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/miste/Msite.vue'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/msite',
      name: "misite",
      component: Msite
    }
  ]
})
