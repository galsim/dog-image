<template lang="pug">
  #app
    nav-header
    .container
      router-view
  </div>
</template>

<script>
import navHeader from '@/components/blocks/navHeader'

export default {
  components: {
    navHeader
  }
}
</script>
