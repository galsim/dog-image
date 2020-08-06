<template lang="pug">
  .list-control.flex.ai-center.jc-between.wrap
    .breed-select.flex.ai-center.jc-between(
      @click="showList = !showList"
      :class="{'open': showList}"
    )
      | Породы
      icon-base
        icon-arrow
    custom-checkbox(v-model="test" label="Сортировка по алфавиту" )
</template>

<script>
import customCheckbox from '@/components/ui/customCheckbox'
import IconBase from '@/components/icons/IconBase'
import IconArrow from '@/components/icons/IconArrow'

export default {
  data: () => ({
    test: false,
    showList: false
  }),
  components: {
    customCheckbox,
    IconBase,
    IconArrow
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/variables.scss';

.list-control {
  min-height: 120px;
  padding: 50px 0;

  .breed-select {
    color: $white;
    position: relative;
    cursor: pointer;

    &.open {
      .svg-icon {
        transform: rotate(180deg);
      }
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      border: 0.5px dashed $white;
    }

    .svg-icon {
      margin-left: 10px;
      transform: rotate(0deg);
      transition: all .2s;
    }
  }
}
</style>
