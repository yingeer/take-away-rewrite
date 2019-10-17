// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import FastClick from 'fastclick'
import './assets/iconfont/css/iconfont.css'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import { Button } from 'element-ui'

Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.prototype.$axios = axios
FastClick.attach(document.body)
// Vue.use(ElementUI)
Vue.use(Button)
// new Vue(内部的this已经指向vm)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
