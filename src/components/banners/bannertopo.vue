<script setup>
import { ref } from "vue";

const slide = ref(0);
const autoplay = ref(true);

const bannersCarousel = ref([
  {
    fotoWebp: "/images/banner.png",
    id: 0,
    image: "",
    ordem: 0,
    posicionamento: "topo"
  },
  {
    fotoWebp: "/images/banner.png",
    id: 1,
    image: "",
    ordem: 0,
    posicionamento: "topo"
  },
  {
    fotoWebp: "/images/banner.png",
    id: 2,
    image: "",
    ordem: 0,
    posicionamento: "topo"
  }
]);
</script>

<template lang="pug">
div.banner
  q-carousel.cursor-pointer.col(
    v-model="slide"
    animated
    infinite
    swipeable
    :autoplay="autoplay"
    transition-prev="slide-right"
    transition-next="slide-left"
  )
    template(
      v-for="(banner, index) in bannersCarousel"
      :key="index"
    )
      q-carousel-slide.slide.col(
        :name="index"
        :img-src="banner.fotoWebp"
        spinner="white"
      )
</template>

<style scoped>
.banner{
  display:flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  aspect-ratio: auto 1920/668;
  position: relative;
  height: auto;
  width:100%;
}
.slide{
  max-width: 100%;
  display:block;
}
</style>
