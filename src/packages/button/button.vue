<template>
  <button :class="classs">PanButton</button>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'PanButton',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator(value) {
        if (
          !['primary', 'success', 'info', 'danger', 'warning'].includes(value)
        ) {
          throw new Error('Props type error')
        }
        return true
      }
    }
  },
  setup(props) {
    const classs = computed(() => ['pan-button', `pan-button-${props.type}`])
    return {
      classs
    }
  }
}
</script>
