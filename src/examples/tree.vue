<template>
  <pan-tree :data="treeData" ref="root">primary</pan-tree>
</template>

<script>
import { reactive, toRefs, ref, onMounted } from 'vue'

export default {
  setup() {
    const root = ref(null)
    const state = reactive({
      treeData: [
        {
          id: '1',
          name: '菜单1',
          children: [
            {
              id: '1-1',
              name: '菜单1-1',
              children: [{ id: '1-1-1', name: '菜单1-1-1' }]
            }
          ]
        },
        {
          id: '2',
          name: '菜单2',
          children: [
            {
              id: '2-1',
              name: '菜单2-1',
              children: [{ id: '2-1-1', name: '菜单2-1-1' }]
            },
            {
              id: '2-2',
              name: '菜单2-2',
              children: [{ id: '2-2-1', name: '菜单2-2-1' }]
            }
          ]
        }
      ]
    })

    onMounted(() => {
      // DOM元素将在初始渲染后分配给ref
      console.log(root.value.onMyCustomMethod()) // <div>这是根元素</div>
    })
    return {
      ...toRefs(state),
      root
    }
  }
}
</script>
