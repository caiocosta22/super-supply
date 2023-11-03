<script setup>
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const icons = ref([
  { icone: "/images/fornecedores/1.png", tag: "Escolar" },
  { icone: "/images/fornecedores/2.png", tag: "Escritório" },
  { icone: "/images/fornecedores/3.png", tag: "Papelaria" },
  { icone: "/images/fornecedores/4.png", tag: "Limpeza" },
  { icone: "/images/fornecedores/5.png", tag: "Descartáveis" },
  { icone: "/images/fornecedores/6.png", tag: "EPI" },
  { icone: "/images/fornecedores/7.png", tag: "Ferramentas" },
  { icone: "/images/fornecedores/8.png", tag: "Informática" },
  { icone: "/images/fornecedores/9.png", tag: "Eletroportáteis" },
  { icone: "/images/fornecedores/10.png", tag: "Eletroportáteis" }
]);

const settings = ref({
  snapAlign: "start",
  autoplay: 2500,
  wrapAround: true
});

const breakpoints = ref({
  368: {
    itemsToShow: 3.0
  },
  768: {
    itemsToShow: 6.0
  },
  1024: {
    itemsToShow: 6.0
  },
  1280: {
    itemsToShow: 8.0
  }
});

</script>

<template lang="pug">
div.q-py-xl(style="background-color:#ececec")
  p(style="font-weight:700; font-size: 34px; text-align:CENTER; margin: 0") PRINCIPAIS FORNECEDORES
.container
  Carousel(
      v-bind="settings"
      :breakpoints="breakpoints"
      style="width: 85%; background-color: #ececec;"
    )
    Slide(
      v-for="(icon,index) in icons"
      :key="index"
    )
      div.column.justify-center(
        @click="openCategoryPage(categoria)"
      )
        img.cursor-pointer(
          :src="icon.icone"
          spinner="white"
          style="max-width:100%;display:block"
        )
</template>

<style scoped>

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
}

.carousel__slide img {
  height: 90%;
  width: 90%;
}

.container{
  display:flex;
  flex-wrap:nowrap;
  justify-content: center;
  position: relative;
  width: 100%;
  padding-bottom: 80px;
  background-color: #ececec;
}
p {
  color: #18264c;
  font-weight: bold;
}
span {
  color: #18264c;
}
</style>
