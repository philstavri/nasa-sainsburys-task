<template>
  <div class="floating-page">
    <div :class="contentClasses">
      <h1>{{title}}</h1>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component()
export default class FloatingPage extends Vue {
  @Prop(String)
  size

  @Prop({
    type: String,
    required: true
  })
  title

  get contentClasses () {
    let sizeModifier = this.size ? `floating-page__content--size-${this.size}` : ''
    return `floating-page__content ${sizeModifier}`
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.floating-page {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.floating-page__content{
  width: 40%;
  min-width: 320px;
  background-color: rgba(200,200,200, 0.7);
  color: #444;
  border-radius: 5px;
  padding: 20px;
}
.floating-page__content--size-large{
  width: 70%
}
</style>
