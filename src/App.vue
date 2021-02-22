<template>
  <Button></Button>
  <br />
  <Icon></Icon>
  <br />
  <ButtonGroup></ButtonGroup>
  <br />
  <Carousel />
  <br />
  <Message />
  <br />
  <Tree />
</template>

<script>
import Button from './examples/button'
import Icon from './examples/icon'
import ButtonGroup from './examples/button-group'
import Carousel from './examples/carousel'
import Message from './examples/message'
import Tree from './examples/tree'

export default {
  name: 'App',
  components: { Button, Icon, ButtonGroup, Carousel, Message, Tree }
}
</script>
