<template lang="pug">
  .home-page.page
    list-control(@sort="e => alphabetSort = e")
    grid-list(
      :items="dogList"
      )
    infinity-scroll(@updateList="setDogImageListLoading" :loading="loading")
</template>

<script>
import listControl from '@/components/blocks/listControl'
import gridList from '@/components/blocks/gridList'
import infinityScroll from '@/components/blocks/infinityScroll'
import { mapMutations } from 'vuex'
export default {
  data: () => ({
    loading: true,
    alphabetSort: false
  }),
  components: {
    listControl,
    gridList,
    infinityScroll
  },
  computed: {
    dogList () {
      if (this.alphabetSort) {
        return this.$store.getters.getDogImageList.slice().sort()
      }
      return this.$store.getters.getDogImageList
    }
  },
  methods: {
    ...mapMutations([
      'clearDogImageList'
    ]),
    async setDogImageListLoading () {
      this.loading = true
      await this.$store.dispatch('setDogImageList')
      this.loading = false
    }
  },
  async created () {
    this.clearDogImageList()
    await this.setDogImageListLoading()
  }
}
</script>
