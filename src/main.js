import Vue from 'vue'
import App from './App.vue'
import Frontpage from './FrontPage.vue'
import About from './About.vue'

import LazyImg from 'v-lazy-img'
Vue.use(LazyImg)

import Router from 'vue-router'
Vue.use(Router)

const routes = [
  { name: 'root', path: '/', component: Frontpage },
  { name: 'about', path: '/about', component: About }
]

const app = new Vue({
  render: h => h(App),
  router: new Router({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPos) {
      return savedPos ? savedPos : { selector: '#container' }
    }
  })
})

document.addEventListener('DOMContentLoaded', () =>  app.$mount('#app'))
