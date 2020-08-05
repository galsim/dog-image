<template>
  <div class="home">
      <h1>Hello, world!</h1>
      <p>{{ getCount }}</p>
      <button @click="increment">Увеличить</button>
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
