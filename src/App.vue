<template lang="pug">
  #app
    navHeader
    .container
      router-view
  </div>
</template>

<script>
import navHeader from '@/components/navHeader'

export default {
  components: {
    navHeader
  }
}
</script>
