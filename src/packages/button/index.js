import Button from './button.vue'
import './index.scss'

Button.install = app => {
  app.component(Button.name, Button)
}

export default Button
