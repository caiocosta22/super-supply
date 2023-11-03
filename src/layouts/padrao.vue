<template lang="pug">
q-layout(view="lHh Lpr lFf")
  q-header
    cabecalho
  router-view
  rodape#contato
</template>

<script setup>
import cabecalho from "src/components/cabecalho.vue";
import rodape from "src/components/rodape.vue";
</script>
