<script setup>
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
const icons = ref([
  { icone: "/images/beneficios/1.png", tag: "Mix de produtos" },
  { icone: "/images/beneficios/2.png", tag: "Logística 24h" },
  { icone: "/images/beneficios/3.png", tag: "Frota Própria " },
  { icone: "/images/beneficios/4.png", tag: "Treinamentos" },
  { icone: "/images/beneficios/5.png", tag: "Atendimentos Personalizados" },
  { icone: "/images/beneficios/6.png", tag: "Integração com seu ERP" }
]);
const settings = ref({
  snapAlign: "start",
  wrapAround: true
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
  div.justify-center.q-pb-xl.q-mb-sm.q-pt-lg
    p.beneficios BENEFÍCIOS E SOLUÇÕES
  Carousel(
    v-bind="settings"
    :breakpoints="breakpoints"
    style="width: 85%; background-color: #ececec; margin: 0 auto;"
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
  div.interno.q-pt-xl
    div.titulo
      span.texto1 A compra de suprimentos corporativos nunca foi tão  simples.<br>
      span.texto2 Estamos prontos para atendê-lo.
</template>

<style scoped>
.texto1 {
  font-size:38px;
  text-align:left;
  font-weight:400
}
.texto2 {
  font-size:40px;
  text-align:left;
  font-weight:bold
}
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
}
.carousel__slide p {
  height: 10%
}

.container {
  background-color: #ececec;
  height: 800px;
  flex-direction: column;
  overflow: hidden;
  display: flex;
}
.titulo {
  width: 50%;
}
.interno {
  max-height: 740px;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  margin: 0 auto;
  width: 85%;
}
p {
  color: #18264c;
  font-weight: bold;
}
span {
  color: #18264c;
}
.beneficios {
  font-weight:700;
  font-size: 34px;
  text-align:center
}
@media (max-width: 1024px) {
  .beneficios{
    font-size: 30px;
  }
  .titulo {
    width: 70%;
  }
  .texto1 {
    font-size: 30px;
  }
  .texto2 {
    font-size: 32px;
  }
}
@media (max-width: 769px) {
  .titulo {
    width: 100%;
    text-align: center;
  }
  .texto1 {
    font-size: 24px;
  }
  .texto2 {
    font-size: 28px;
  }
}
@media (max-width: 480px) {
  .beneficios{
    font-size: 24px;
  }
  .texto1 {
    font-size: 18px;
  }
  .texto2 {
    font-size: 22px;
  }
}
</style>
