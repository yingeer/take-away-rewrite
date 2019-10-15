// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import FastClick from 'fastclick'

Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.prototype.$axios = axios
FastClick.attach(document.body)

// new Vue(内部的this已经指向vm)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => {
    return h(App)
  }
})
