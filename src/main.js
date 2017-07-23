import Vue from 'vue'
import App from './App.vue'
import Frontpage from './FrontPage.vue'
import About from './About.vue'

import Router from 'vue-router'
import ScrollTo from 'vue-scrollto'
import LazyImg from 'v-lazy-img'

Vue.use(Router)
Vue.use(ScrollTo, {
  duration: 400,
  easing: 'ease-out'
})
Vue.use(LazyImg)

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
      return !savedPos ? { selector: '#container' } : savedPos
    }
  })
})

document.addEventListener('DOMContentLoaded', () => app.$mount('#app'))
