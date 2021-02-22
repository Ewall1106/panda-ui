<template>
  <svg class="pan-icon" aria-hidden="true">
    <use :xlink:href="`#icon${icon}`"></use>
  </svg>
</template>

<script>
import './iconfont'
export default {
  name: 'PanIcon',
  props: {
    icon: String
  }
}
</script>
