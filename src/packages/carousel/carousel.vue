<template>
  <div class="pan-carousel" :style="styles">
    <div class="view-port">
      <slot></slot>
    </div>
    <div class="view-dots">
      <span
        v-for="(item, idx) in len"
        :key="idx"
        :class="{ active: item - 1 === currentSelected }"
        @click="go(item - 1)"
        >{{ item }}{{ item }}{{ item }}</span
      >
    </div>
  </div>
</template>

<script>
import { computed, nextTick, onMounted, provide, reactive, toRefs } from 'vue'

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
    let timer
    const state = reactive({
      currentIndex: 0,
      len: 0, // item个数
      currentSelected: props.initialIndex,
      reverse: false
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
          timer = setInterval(() => {
            let index = state.currentSelected
            let newIndex = index + 1
            methods.go(newIndex)
          }, props.delay)
        }
      },
      go(newIndex) {
        let index = state.currentSelected
        if (newIndex === state.len) newIndex = 0
        if (newIndex === -1) newIndex = state.len - 1
        state.reverse = newIndex > index ? false : true

        if (timer && props.loop) {
          if (index === 0 && newIndex === state.len - 1) {
            state.reverse = true
          }
          if (index === state.len - 1 && newIndex === 0) {
            state.reverse = false
          }
        }

        nextTick(() => {
          state.currentSelected = newIndex
        })
      }
    }

    onMounted(() => {
      state.len = state.currentIndex
      methods.run()
    })

    return {
      styles,
      ...toRefs(state),
      ...methods
    }
  }
}
</script>
