<template>
  <div class="result-item">
    <div class="result-item__title">{{title}}</div>
    <img :src="getPreviewUrl()" class="result-item__preview" :title="title"/>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component()
export default class ResultItem extends Vue {
  @Prop({
    type: Object,
    required: true
  })
  result

  get title () {
    console.log('abcde', this.result.data)
    return this.result.data[0].title
  }

  getPreviewUrl () {
    let previewUrl = ''
    if (this.result.links && this.result.links[0]) {
      previewUrl = this.result.links[0].href
    } else {
      console.log('no url found for', this.result)
    }
    return previewUrl
  }
}
</script>

<style scoped lang="scss">
.result-item {
  max-width: 20%;
  max-height: 200px;
  padding: 10px 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1 0 20%;

  &__preview {
    width: 100%;
    height: 100%;
    flex: 0 1 auto;
  }

  &__title {
    flex: 1 0 auto;
    background-color: rgba(0,0,0,0.7);
    color: #fff;
  }
}
</style>
