<template>
  <pan-carousel
    width="400px"
    height="300px"
    :autoplay="true"
    :delay="3000"
    :initialIndex="1"
    :loop="true"
  >
    <pan-carousel-item style="background:yellow">1</pan-carousel-item>
    <pan-carousel-item style="background:pink">2</pan-carousel-item>
  </pan-carousel>
</template>
