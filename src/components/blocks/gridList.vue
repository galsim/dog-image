<template lang="pug">
  .grid-list
    card(
      v-for="(item, i) in items"
      :class="{'big-size' : mainImage && i === 0}"
      :big="mainImage && i === 0"
      :key="item + i"
      :image="item"
      )
</template>

<script>
import card from '@/components/cards/card'

export default {
  components: {
    card
  },
  props: {
    items: {
      type: Array
    },
    mainImage: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/mixins.scss';

  .grid-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    padding-bottom: 85px;

    @include lg {
      grid-template-columns: repeat(2, 1fr);
    }

    @include sm {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 15px;
    }

    & > * {
      height: 290px;
    }

    .big-size {
      grid-column-start: 1;
      grid-column-end: 4;
      height: 510px;

      @include lg {
        grid-template-columns: repeat(2, 1fr);
        grid-column-end: 3;
      }
      @include sm {
        height: auto;
        grid-column-end: 2;
      }
    }
  }
</style>
