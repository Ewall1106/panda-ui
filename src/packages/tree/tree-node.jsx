import { computed } from 'vue'

export default {
  name: 'PanTreeNode',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    const showArrow = computed(() => {
      return props.data.children && props.data.children.length
    })
    const classs = computed(() => [
      'pan-tree-node',
      !showArrow.value && 'pan-tree-no-expand'
    ])

    return () => {
      let { data } = props
      return (
        <div class={classs.value}>
          <div class="pan-tree-label">
            <pan-icon icon="xianxingbaozhu" />
            <span>{data.name}</span>
          </div>
          <div class="pan-tree-list">
            {data.children &&
              data.children.map(child => <pan-tree-node data={child} />)}
          </div>
        </div>
      )
    }
  }
}
