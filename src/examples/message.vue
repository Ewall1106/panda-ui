<template>
  <div>
    <button @click="show">Message</button>
  </div>
</template>

<script>
import { Message } from '../packages/index'

export default {
  setup() {
    const show = () => {
      Message.success({ message: 'hello world' })
    }
    return {
      show
    }
  }
}
</script>
