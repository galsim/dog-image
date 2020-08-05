<template lang="pug">
  <div class="home">
      p Hello, world!
      p {{ getCount }}
      button(@click="increment") Увеличить
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  mounted () {
    console.log(this.$store)
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    }
  },
  computed: {
    ...mapGetters([
      'getCount'
    ])
  }
}
</script>

<style lang="scss">
  @import '@/assets/style/breakpoints.scss';
  @import '@/assets/style/mixins.scss';
  h1 {
    font-size: 46px;
    @include lg {
      font-size: 16px;
    }
  }
</style>
