<template lang="pug">
  .card(
    :class="{'card__big': big}"
    :style="{'background-image': `url(${image})`}"
    )
    .card__gradient
    icon-base(width="30" height="30" @click="addToFavorites")
      icon-heart-fill(v-if="isFavorite")
      icon-heart(v-else)
    .card__breed {{ breed | firstUpperCase }}
</template>

<script>
import IconBase from '@/components/icons/IconBase'
import IconHeart from '@/components/icons/IconHeart'
import IconHeartFill from '@/components/icons/IconHeartFill'
import { eventBus } from '@/main'

export default {
  components: {
    IconBase, IconHeart, IconHeartFill
  },
  data: () => ({
    isFavorite: false
  }),
  props: {
    image: {
      type: String
    },
    big: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    breed () {
      if (this.$route.params.breed) return this.$route.params.breed

      const image = this.image
      const startIndex = image.lastIndexOf('breeds/') + 'breeds/'.length
      const lastIndex = image.lastIndexOf('/')

      return image.slice(startIndex, lastIndex)
    }
  },
  methods: {
    addToFavorites () {
      if (this.isFavorite) {
        window.localStorage.removeItem(this.image)
        this.isFavorite = false
      } else {
        window.localStorage.setItem(this.image, this.image)
        this.isFavorite = true
      }

      eventBus.$emit('updateLocalStorage')
    }
  },
  created () {
    this.isFavorite = !!window.localStorage.getItem(this.image)
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/variables.scss';
@import '@/assets/style/mixins.scss';

.card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-size: cover;
  background-position-x: center;
  background-position-y: top;

  &__big {
    .card__breed {
      font-size: 30px;
    }
    .svg-icon {
      top: 35px !important;
      left: 35px !important;
    }
  }
  &__gradient {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(3.21deg, #000000 -15.62%, rgba(0, 0, 0, 0) 45.69%);
  }
  &__breed {
    z-index: 2;
    position: absolute;
    right: 50px;
    bottom: 50px;
    font-weight: 600;
    font-size: 25px;
    line-height: 28px;
    color: $white;

    @include sm {
      font-size: 20px;
      right: 20px;
      bottom: 20px;
    }
  }

  .svg-icon {
    z-index: 2;
    color: $white;
    cursor: pointer;
    position: absolute;
    left: 25px;
    top: 25px;

    @include sm {
      left: 15px;
      top: 15px;
    }
  }
}
</style>
