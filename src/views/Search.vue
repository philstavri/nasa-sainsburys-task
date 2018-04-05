<template>
  <floating-page size="large" title="NASA Search">
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
