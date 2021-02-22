import PanTreeNode from './tree-node'

export default {
  name: 'PanTree',
  components: {
    PanTreeNode
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    function renderNode(data) {
      if (!data || !data.length) {
        return <div>nothing</div>
      }
      return data.map(item => <pan-tree-node data={item} />)
    }

    // function renderChild(item) {
    //   return (
    //     <div class="pan-tree-node">
    //       <div class="pan-tree-label">{item.name}</div>
    //       {item.children && item.children.map(child => renderChild(child))}
    //     </div>
    //   )
    // }

    return () => {
      const { data } = props
      return <div class="pan-tree">{renderNode(data)}</div>
    }
  }
}
