import Carousel from './carousel.vue'
import './index.scss'

Carousel.install = app => {
  app.component(Carousel.name, Carousel)
}

export default Carousel
