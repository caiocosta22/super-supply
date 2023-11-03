<script setup>
import { ref } from "vue";
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
</script>

<template lang="pug">
div.container
  div.interno.q-pt-xl
    p.q-pb-md(style="font-weight:700; font-size: 34px; text-align:left") TUDO EM SUPRIMENTOS PARA O SEU NEGÓCIO
    div.row.flex.justify-between(style="width:100%;")
      div(
        v-for="(icon,index) in icons"
        :key="index"
      )
        img(
          :src="icon.icone"
          spinner="white"
          style="max-width:100%;display:block;height:150px"
        )
        p.q-pt-sm(style="text-align:center; max-width:200px; font-size:18px") {{ icon.tag }}.
</template>

<style scoped>
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
}
</style>
