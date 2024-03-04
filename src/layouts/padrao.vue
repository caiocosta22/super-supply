<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import cabecalho from "src/components/cabecalho.vue";
import rodape from "src/components/rodape.vue";
import copyright from "src/components/copyright.vue";

const isButtonVisible = ref(false);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  isButtonVisible.value = window.scrollY !== 0;
};

const scrollTop = () => {
  window.scrollTo(
    {
      top: 0,
      behavior: "smooth"
    })
  ;
};
</script>

<template lang="pug">
q-layout(view="lHh Lpr lFf")
  q-header
    cabecalho
  router-view
  q-btn.floating-button(
    color="primary"
    fab
    position="bottom-right"
    @click="scrollTop"
    align="right"
    v-if="isButtonVisible"
  )
    q-icon(
      name="arrow_upward"
    )
  div#rodape
  rodape
  copyright
</template>

<style scoped>
.floating-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
}
</style>
