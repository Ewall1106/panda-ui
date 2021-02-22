<template>
  <div>
    <button @click="show">click</button>
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
