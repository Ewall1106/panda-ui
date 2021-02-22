import Tree from './tree.jsx'
import './index.scss'

Tree.install = app => {
  app.component(Tree.name, Tree)
}

export default Tree
