<template>
  <transition name="carousel">
    <div class="pan-carousel-item" v-if="isVisible">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import { computed, inject } from 'vue'

export default {
  name: 'PanCarouselItem',
  props: {
    // type: {
    //   type: String,
    //   default: 'primary',
    //   validator(value) {
    //     if (
    //       !['primary', 'success', 'info', 'danger', 'warning'].includes(value)
    //     ) {
    //       throw new Error('Props type error')
    //     }
    //     return true
    //   }
    // },
    // icon: String,
    // loading: {
    //   type: Boolean,
    //   default: false
    // }
  },
  setup() {
    let { state, changeIndex } = inject('current')

    let currentIndex = state.currentIndex

    let isVisible = computed(() => {
      return state.currentSelected === currentIndex
    })

    changeIndex()

    return {
      isVisible
    }
  }
}
</script>
