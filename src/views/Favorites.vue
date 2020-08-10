<template lang="pug">
    .favorite-page.page
      grid-list(:items="dogList" :mainImage="false")

</template>

<script>
import gridList from '@/components/blocks/gridList'
import { eventBus } from '@/main'
export default {
  components: {
    gridList
  },
  data: () => ({
    dogList: []
  }),
  methods: {
    getStorageList () {
      this.dogList = Object.keys(window.localStorage).filter(el => el.includes('images.dog.ceo'))
    }
  },
  created () {
    this.getStorageList()

    eventBus.$on('updateLocalStorage', this.getStorageList)
  },
  beforeDestroy () {
    eventBus.$off('updateLocalStorage', this.getStorageList)
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/mixins.scss';
.favorite-page {
  padding-top: 122px;
  @include sm {
    padding-top: 75px;
  }
}
</style>
