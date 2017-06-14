import Vue from 'vue'
import App from './App.vue'

import LazyImg from 'v-lazy-img'
Vue.use(LazyImg)

new Vue({
  el: '#app',
  render: h => h(App)
})
