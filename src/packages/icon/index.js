import Icon from './icon'
import './index.scss'

Icon.install = app => {
  app.component(Icon.name, Icon)
}

export default Icon
