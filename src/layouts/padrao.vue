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
  a(
    href="https://wa.me/558533001818?text=Ol%C3%A1%2C+venho+atr%C3%A1ves+do+Site+da+Super+Supply.+Gostaria+de+mais+informa%C3%A7%C3%B5es"
    target="_blank"
    style="color:#fff"
  )
    q-btn.floating-button(
      color="green"
      fab
      position="bottom-right"
      align="right"
    )
      q-icon(
        name="fa-brands fa-whatsapp"
      )
  q-btn.floating-button2(
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
  z-index: 999;
}
.floating-button2 {
  position: fixed;
  bottom: 90px;
  right: 20px;
  z-index: 9999;
}
</style>
