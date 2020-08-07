<template lang="pug">
  label.custom-checkbox.flex.ai-center
    .custom-checkbox__label(v-if="!!label") {{ label }}
    .custom-checkbox__input(:class="{'checked': model}")
    input(
      type="checkbox"
      :name="name"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      v-model="model"
      @change="$emit('change', $event.target.checked)")
</template>

<script>
export default {
  props: [
    'name',
    'value',
    'checked',
    'label',
    'disabled'
  ],
  computed: {
    model: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables.scss';

.custom-checkbox {
  cursor: pointer;
  input {
    display: none;
  }

  &__label {
    line-height: 27px;
    & + .custom-checkbox__input {
      margin-left: 15px;
    }
  }

  &__input {
    width: 30px;
    height: 16px;
    position: relative;
    mix-blend-mode: normal;
    border: 1px solid $main-grey;
    border-radius: 9px;

    &::before {
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 3px;
      transform: translateY(-50%);
      background-color: $main-grey;
      transition: all .2s;
    }
    &.checked {
      &::before {
        left: calc(100% - 10px - 3px);
      }
    }
  }
}
</style>
