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
</script>

<template lang="pug">
q-page-container
  topo
  regua
  apresentacao
  beneficios
  flutuante
  suprimentos
  carousel
  chamada
  clientes
</template>

<style scoped>
</style>
