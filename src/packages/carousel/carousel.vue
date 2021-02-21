<template>
  <div class="pan-carousel" :style="styles">
    <div class="view-port">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, provide, reactive, toRefs } from 'vue'

export default {
  name: 'PanCarousel',
  props: {
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    delay: {
      type: Number,
      default: 3000
    },
    initialIndex: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const state = reactive({
      currentIndex: 0,
      len: 0, // item个数
      currentSelected: props.initialIndex
    })

    const changeIndex = () => {
      state.currentIndex++
    }

    provide('current', { state, changeIndex })

    let styles = computed(() => {
      return {
        width: props.width,
        height: props.height
      }
    })

    const methods = {
      run() {
        if (props.autoplay) {
          setInterval(() => {
            let index = state.currentSelected
            let newIndex = index + 1
            methods.go(newIndex)
          }, props.delay)
        }
      },
      go(newIndex) {
        if (newIndex === state.len) newIndex = 0
        if (newIndex === -1) newIndex = state.len - 1

        state.currentSelected = newIndex
      }
    }

    onMounted(() => {
      state.len = state.currentIndex
      methods.run()
    })

    return {
      styles,
      ...toRefs(state)
    }
  }
}
</script>
