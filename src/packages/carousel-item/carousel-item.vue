<template>
  <transition name="carousel">
    <div class="pan-carousel-item" v-if="isVisible" :class="classs">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import { computed, inject } from 'vue'

export default {
  name: 'PanCarouselItem',
  setup() {
    let { state, changeIndex } = inject('current')

    let currentIndex = state.currentIndex

    let isVisible = computed(() => {
      return state.currentSelected === currentIndex
    })

    let classs = computed(() => [state.reverse ? 'reverse' : ''])

    changeIndex()

    return {
      isVisible,
      classs
    }
  }
}
</script>
