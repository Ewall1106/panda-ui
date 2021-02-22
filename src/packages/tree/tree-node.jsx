export default {
  name: 'PanTreeNode',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    return () => {
      let { data } = props
      return (
        <div class="pan-tree-node">
          <div class="pan-tree-label">{data.name}</div>
          <div class="pan-tree-list">
            {data.children &&
              data.children.map(child => <pan-tree-node data={child} />)}
          </div>
        </div>
      )
    }
  }
}
