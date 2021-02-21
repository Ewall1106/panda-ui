import ButtonGroup from './button-group'
import './index.scss'

ButtonGroup.install = app => {
  app.component(ButtonGroup.name, ButtonGroup)
}

export default ButtonGroup
