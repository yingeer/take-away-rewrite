import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/miste/Msite.vue'
import Search from '../pages/search/Search.vue'
import Order from '../pages/order/Order.vue'
import Profile from '../pages/profile/Profile.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/msite',
      name: 'msite',
      component: Msite
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
