// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//fastclick js引入
import FastClick from 'fastclick'
FastClick.attach(document.body);
//reset.css引入
import 'css/reset.css'
// iconfont.css
import 'css/iconfont.css'
/* eslint-disable no-new */
//swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style (<= Swiper 5.x)
import 'swiper/swiper.css'
Vue.use(VueAwesomeSwiper)
//axios
import axios from 'axios'
Vue.prototype.$http = axios
//vuex
import store from './store'
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
