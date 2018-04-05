import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/views/Search.vue'
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
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
