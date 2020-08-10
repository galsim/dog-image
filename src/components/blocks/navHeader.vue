<template lang="pug">
  .header
    .container.flex.ai-center.jc-between
      router-link.header__title(to="/")
      router-link.header__favorite-link.flex.ai-center(to="/favorites")
        span Избранные пёсели
        icon-base
          icon-heart
</template>

<script>
import IconBase from '@/components/icons/IconBase'
import IconHeart from '@/components/icons/IconHeart'

export default {
  components: {
    IconBase,
    IconHeart
  }
}
</script>

<style lang="scss">
@import '@/assets/style/variables.scss';
@import '@/assets/style/mixins.scss';

.header {
  background: #151419;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.55);

  .container {
    height: 100px;
  }

  &__title {
    width: 120px;
    height: 30px;
    background: url('~@/assets/img/dog-title.png') no-repeat center;
    background-size: contain;
  }

  &__favorite-link {
    &.router-link-exact-active {
      color: $white;
    }
    .svg-icon {
      margin-left: 10px;
      @include sm {
        width: 35px;
        height: 35px;
      }
    }

    span {
      @include sm {
        display: none
      }
    }
  }
}
</style>
