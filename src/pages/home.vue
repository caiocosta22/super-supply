<script setup>
import topo from "src/components/banners/topo.vue";
import regua from "src/components/banners/regua.vue";
import apresentacao from "src/components/banners/apresentacao.vue";
import beneficios from "src/components/beneficios.vue";
import flutuante from "src/components/flutuante.vue";
import suprimentos from "src/components/suprimentos.vue";
import carousel from "src/components/carousel.fornecedores.vue";
import clientes from "src/components/carousel.clientes.vue";
import chamada from "src/components/banners/chamada.vue";
import localizacao from "src/components/localizacao.vue";
</script>

<template lang="pug">
q-page-container
  topo
  regua
  apresentacao#apresentacao
  beneficios#beneficios
  flutuante
  suprimentos#suprimentos
  span#carousel1
  carousel
  chamada
  span#carousel2
  clientes
  div#localizacao
  localizacao
</template>

<style scoped>
#carousel1 {
  padding-top: 100px;
}
#carousel2 {
  padding-top: 100px;
}
.titulo {
  font-weight:700;
  font-size: 34px;
  color: #18264c;
  text-align:CENTER
}

@media screen and (max-width: 1024px) {
  .drawermenu {
    display: none;
  }
  .botaomenu {
    display: none;
  }
  .titulo {
    font-size: 28px
  }
}
@media screen and (max-width: 768px) {
  .titulo {
    font-size: 24px
  }
}
</style>
