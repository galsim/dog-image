<template lang="pug">
  .breed-page.page
    listControl(
      hide-sort-checkbox
    )
    grid-list(
      :items="dogList"
    )
    infinity-scroll(@updateList="setDogByBreedImageList" :loading="loading")
</template>

<script>
import listControl from '@/components/blocks/listControl'
import gridList from '@/components/blocks/gridList'
import infinityScroll from '@/components/blocks/infinityScroll'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    listControl,
    infinityScroll,
    gridList
  },
  data: () => ({
    loading: true
  }),
  computed: {
    currentBreed () {
      return this.$route.params.breed
    },
    ...mapGetters({
      dogList: 'getDogByBreedImageList'
    })
  },
  watch: {
    $route: {
      async handler () {
        this.clearDogByBreedImageList()
        await this.setDogByBreedImageList(this.currentBreed)
      }
    }
  },
  methods: {
    ...mapMutations([
      'clearDogByBreedImageList'
    ]),
    async setDogByBreedImageList () {
      this.loading = true
      await this.$store.dispatch('setDogByBreedImageList', this.currentBreed)
      this.loading = false
    }
  },
  async created () {
    this.clearDogByBreedImageList()
    await this.setDogByBreedImageList(this.currentBreed)
  }
}
</script>

<style scoped>

</style>
