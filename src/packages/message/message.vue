<template>
  <div :class="classs">{{ message }}</div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    type: {
      type: String,
      default: 'success'
    },
    message: String
  },
  setup(props) {
    let classs = computed(() => [`pan-message-${props.type}`])
    return {
      classs
    }
  }
}
</script>
