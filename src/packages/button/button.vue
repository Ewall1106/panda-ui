<template>
  <button :class="classs" :disabled="loading">
    <pan-icon v-if="icon" :icon="icon" />
    <pan-icon v-if="loading" icon="loading" />
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
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
    },
    icon: String,
    loading: {
      type: Boolean,
      default: false
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
