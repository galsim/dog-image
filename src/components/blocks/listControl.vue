<template lang="pug">
  .list-control
    .flex.ai-center.jc-between.wrap
      .list-control__left.flex.ai-center
        .list-control__left__breed-select.flex.ai-center.jc-between(
          @click="showList = !showList"
          :class="{'open': showList}"
        )
          | Породы
          icon-base
            icon-arrow
        router-link.list-control__breed.active.flex.ai-center(v-if="!!currentBreed" to="/")
          icon-base(width="14" height="14")
            icon-cross
          span {{ currentBreed | firstUpperCase }}
      custom-checkbox(v-model="test" label="Сортировка по алфавиту" )
    .list-control__breed-list(v-if="showList")
      .list-control__breed.active(v-if="isHomePage") Все песели
      .list-control__alphabet
        .flex.ai-center.jc-between
          .list-control__alphabet__word(
            v-for="word in breedAlphabet"
            @click="activeWord = word"
            :key="word"
            :class="{'active': word === activeWord}") {{ word | firstUpperCase }}
      .list-control__alphabet__breeds.flex.ai-center.wrap
        router-link.list-control__breed(v-for="breed in filterList" :to="`/${breed}`" :key="breed") {{ breed | firstUpperCase}}
</template>

<script>
import customCheckbox from '@/components/ui/customCheckbox'
import IconBase from '@/components/icons/IconBase'
import IconArrow from '@/components/icons/IconArrow'
import IconCross from '@/components/icons/IconCross'
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    test: false,
    showList: false,
    activeWord: 'a'
  }),
  components: {
    customCheckbox,
    IconBase,
    IconArrow,
    IconCross
  },
  methods: {
    ...mapActions([
      'setBreedList'
    ])
  },
  computed: {
    ...mapGetters({
      breedList: 'getBreedList'
    }),
    breedAlphabet () {
      const alphabet = []

      this.breedList.forEach(el => {
        if (!alphabet.includes(el[0])) {
          alphabet.push(el[0])
        }
      })

      return alphabet
    },
    filterList () {
      return this.breedList.filter(el => el[0] === this.activeWord)
    },
    isHomePage () {
      return this.$route.name === 'Home'
    },
    currentBreed () {
      return this.$route.params.breed
    }
  },
  created () {
    this.setBreedList()
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/variables.scss';

.list-control {
  min-height: 120px;
  padding: 50px 0;

  &__left {
    &__breed-select {
      color: $white;
      position: relative;
      cursor: pointer;
      margin-right: 20px;

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

  &__breed-list {
    margin-top: 30px;
    flex-basis: 100%;
  }

  &__breed {
    display: inline-block;
    border: 1px solid $main-grey;
    border-radius: 20px;
    line-height: 16px;
    letter-spacing: 0.01em;
    padding: 4px 12px;
    vertical-align: top;

    &.active {
      border-color: $active-blue;
      color: $active-blue;

      & + .list-control__alphabet {
        margin-top: 20px;
      }
    }
  }

  &__alphabet {
    .flex {
      overflow-x: auto;
      max-width: 100%;

      & + .flex {
        margin-top: 10px;
      }
    }
    &__word {
      font-size: 20px;
      line-height: 28px;
      cursor: pointer;

      &.active {
        color: $white;
        opacity: 0.8
      }

      &:not(:last-child) {
        margin-right: 10px;
      }
    }

    &__breeds {
      margin-top: 10px;

      .list-control__breed {
        margin-right: 15px;
        margin-bottom: 17px;
      }
    }
  }
}
</style>
