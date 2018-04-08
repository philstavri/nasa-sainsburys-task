<template>
  <floating-page size="large" title="NASA Search">
    <form name="search" v-on:submit.prevent="search">
      <div class="search-bar">
        <input type="text" class="search-bar__query" placeholder="Search" aria-label="Enter query to search NASA"
               v-model="query" />
        <button type="submit" class="search-bar__search-button u-margin-left">Search</button>
      </div>
    </form>
    <div class="results-list">
      <result-item class="results-list__item" v-for="(result, index) of results.items" :key="index" :result="result"/>
    </div>
  </floating-page>
</template>
<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import SearchService from '@/services/SearchService.js'
import FloatingPage from '@/components/FloatingPage.vue'
import ResultItem from '@/components/ResultItem.vue'

@Component({
  components: {
    FloatingPage,
    ResultItem
  }
})
export default class Search extends Vue {
  query = null
  results = []

  created () {
    this.searchService = new SearchService()
  }

  search () {
    if (this.query) {
      this.searchService.search(this.query)
        .then((response) => {
          this.results = response
        })
        .catch(function (err) {
          console.error('Error requesting search', err)
        })
    }
  }
}
</script>
<style lang="scss">

.search-bar {
  display: flex;
  align-items: center;

  &__query {
    flex-grow: 1;
  }
  &__search-button {
    background-color: #666;
    border: none;
    color: #ddd;
    padding: 10px;
    border-radius: 5px;
  }
}
.results-list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
