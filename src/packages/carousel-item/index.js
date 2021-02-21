import CarouselItem from './carousel-item.vue'
import './index.scss'

CarouselItem.install = app => {
  app.component(CarouselItem.name, CarouselItem)
}

export default CarouselItem
