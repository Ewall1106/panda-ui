<template>
  <div class="pan-button-group">
    <slot></slot>
  </div>
</template>

<script>
import { onMounted, getCurrentInstance } from 'vue'
export default {
  name: 'PanButtonGroup',
  setup() {
    onMounted(() => {
      let context = getCurrentInstance()
      let ele = context.ctx.$el
      let children = ele.children
      for (let i = 0; i < children.length; i++) {
        console.assert(
          children[i].tagName === 'BUTTON',
          'Wrapped element must be button'
        )
      }
    })
  }
}
</script>
