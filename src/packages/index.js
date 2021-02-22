import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'
import Carousel from './carousel'
import CarouselItem from './carousel-item'
import Message from './message'

const plugins = [Button, ButtonGroup, Icon, Carousel, CarouselItem]

const install = app => {
  plugins.forEach(plugin => app.use(plugin))
}

export default install

export { Button, ButtonGroup, Icon, Carousel, CarouselItem, Message }
