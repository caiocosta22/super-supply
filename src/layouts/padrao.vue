<template lang="pug">
q-layout(view="lHh Lpr lFf")
  q-header
    cabecalho
  router-view
  rodape
  copyright
</template>

<script setup>
import cabecalho from "src/components/cabecalho.vue";
import copyright from "src/components/copyright.vue";
import rodape from "src/components/rodape.vue";
</script>
