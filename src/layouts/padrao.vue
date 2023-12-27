<template lang="pug">
q-layout(view="lHh Lpr lFf")
  q-header
    cabecalho
  router-view
  copyright
</template>

<script setup>
import cabecalho from "src/components/cabecalho.vue";
import copyright from "src/components/copyright.vue";
</script>
