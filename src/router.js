import Vue from 'vue'
import Router from 'vue-router'
import About from '@/views/About.vue'
import Welcome from '@/views/Welcome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
