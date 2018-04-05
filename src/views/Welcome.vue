<template>
  <floating-page title="Welcome to NASA Search">
      <p>You can use this tool to search and view NASA's images and videos</p>
      <router-link to="/search">Go to search</router-link>
  </floating-page>
</template>
<script>
import Vue from 'vue'
import Component from 'vue-class-component'

// @ is an alias to /src
import FloatingPage from '@/components/FloatingPage.vue'

@Component({
  components: {
    FloatingPage
  }
})
export default class Welcome extends Vue {}
</script>
