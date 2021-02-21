<template>
  <Button></Button>
  <br />
  <Icon></Icon>
  <br />
  <ButtonGroup></ButtonGroup>
  <br />
  <Carousel />
</template>

<script>
import Button from './examples/button'
import Icon from './examples/icon'
import ButtonGroup from './examples/button-group'
import Carousel from './examples/carousel'

export default {
  name: 'App',
  components: { Button, Icon, ButtonGroup, Carousel }
}
</script>
