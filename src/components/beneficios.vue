<script setup>
import { ref } from "vue";
const icons = ref([
  { icone: "/images/beneficios/1.png", tag: "Mix de produtos" },
  { icone: "/images/beneficios/2.png", tag: "Logística 24h" },
  { icone: "/images/beneficios/3.png", tag: "Frota Própria " },
  { icone: "/images/beneficios/4.png", tag: "Treinamentos com Especialistas" },
  { icone: "/images/beneficios/5.png", tag: "Atendimentos Personalizados" },
  { icone: "/images/beneficios/6.png", tag: "Integração com seu ERP" }
]);
const settings = ref({
  snapAlign: "start",
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
    itemsToShow: 6.0
  }
});
</script>

<template lang="pug">
div.container
  div.justify-center
    p(style="font-weight:700; font-size: 34px; text-align:center") BENEFÍCIOS E SOLUÇÕES
  div.interno.q-pt-xl
    div.row.flex.justify-between(style="width:100%;")
      div(
        v-for="(icon,index) in icons"
        :key="index"
      )
        img(
          :src="icon.icone"
          spinner="white"
          style="max-width:100%;display:block;height:200px"
        )
        p.q-pt-sm(style="text-align:center; max-width:200px; font-size:18px") {{ icon.tag }}
    div.q-pt-xl(style="width:50%")
      span(style="font-size:38px; text-align:left; font-weight:400") A compra de suprimentos corporativos nunca foi tão simples.<br>
      span(style="font-size:40px; text-align:left;font-weight:bold") Estamos prontos para atendê-lo.
</template>

<style scoped>
.container {
  background-color: #ececec;
  height: 800px;
  flex-direction: column;
  overflow: hidden;
  display: flex;
}
.interno {
  max-height: 740px;
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
}
</style>
