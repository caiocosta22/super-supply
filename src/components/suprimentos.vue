<script setup>
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
const icons = ref([
  { icone: "/images/suprimentos/1.png", tag: "Escolar" },
  { icone: "/images/suprimentos/2.png", tag: "Escritório" },
  { icone: "/images/suprimentos/3.png", tag: "Papelaria" },
  { icone: "/images/suprimentos/4.png", tag: "Limpeza" },
  { icone: "/images/suprimentos/5.png", tag: "Descartáveis" },
  { icone: "/images/suprimentos/6.png", tag: "EPI" },
  { icone: "/images/suprimentos/7.png", tag: "Ferramentas" },
  { icone: "/images/suprimentos/8.png", tag: "Informática" },
  { icone: "/images/suprimentos/9.png", tag: "Eletroportáteis" }
]);
const settings = ref({
  snapAlign: "start",
  wrapAround: true,
  autoplay: 2500
});
const breakpoints = ref({
  368: {
    itemsToShow: 2.0
  },
  558: {
    itemsToShow: 2.0
  },
  768: {
    itemsToShow: 3.0
  },
  1024: {
    itemsToShow: 4.0
  },
  1280: {
    itemsToShow: 6.0
  }
});
</script>

<template lang="pug">
div.container
  div.interno.q-pt-xl
    p.q-pb-md.titulo TUDO EM SUPRIMENTOS PARA O SEU NEGÓCIO
  Carousel(
    v-bind="settings"
    :breakpoints="breakpoints"
    style="width: 85%; margin: 0 auto;"
  )
    Slide(
    v-for="(icon,index) in icons"
    :key="index"
    )
      div.column(
        style="height: 100%;"
      )
        div(
          style="height: 80%;"
        )
          img.carrossel(
          :src="icon.icone"
          spinner="white"
          style="width: 160px; margin:0 auto;"
          )
        div.q-pb-lg(
          style="height: 20%;"
        )
          p(
          style="margin: 0 auto;"
          ) {{ icon.tag }}
</template>

<style scoped>
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
}
.carousel__slide p {
  height: 10%
}
.titulo {
  font-weight:700;
  font-size: 34px;
  text-align:center
}
.container {
  background-color: #ffed00;
  height: 560px;
  flex-direction: column;
  overflow: hidden;
  display: flex;
}
.interno {
  max-height: 500px;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  margin: 0 auto;
  position: relative;
  width: 85%;
}
p {
  color: #18264c;
  font-weight: bold;
}
span {
  color: #18264c;
}@media (max-width: 1024px) {
  .titulo {
    font-size: 30px;
  }
}
@media (max-width: 480px) {
  .titulo {
    font-size: 24px;
  }
}
</style>
