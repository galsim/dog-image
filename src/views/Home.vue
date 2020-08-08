<template lang="pug">
  .home-page.page
    list-control
    grid-list(
      :items="dogList"
      )
    infinity-scroll(@updateList="setDogImageListLoading" :loading="loading")
</template>

<script>
import listControl from '@/components/blocks/listControl'
import gridList from '@/components/blocks/gridList'
import { mapGetters, mapActions } from 'vuex'
import infinityScroll from '@/components/blocks/infinityScroll'

export default {
  data: () => ({
    loading: true
  }),
  components: {
    listControl,
    gridList,
    infinityScroll
  },
  computed: {
    ...mapGetters({
      dogList: 'getDogImageList'
    })
  },
  methods: {
    ...mapActions([
      'setDogImageList'
    ]),
    async setDogImageListLoading () {
      this.loading = true
      await this.setDogImageList()
      this.loading = false
    }
  },
  async created () {
    await this.setDogImageListLoading()
    this.loading = false
  }
}
</script>
