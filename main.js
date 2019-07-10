import fastclick from 'fastclick'
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/index.css'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'lib-flexible'
import '@/base/filters'
Vue.config.productionTip = false
fastclick.attach(document.body)// body内所有click 300毫秒延迟都将去掉
Vue.prototype.$http = axios
Vue.prototype.$qs = qs
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

