<template lang="pug">
  .breed-page
    listControl
</template>

<script>
import listControl from '@/components/blocks/listControl'

export default {
  components: {
    listControl
  },
  computed: {
    currentBreed () {
      return this.$route.params.breed
    }
  }
}
</script>

<style scoped>

</style>
