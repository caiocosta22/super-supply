<script setup>
import { ref, onMounted } from "vue";
const show = ref(true);
const banners = ref([
  {
    fundo: "/images/fadebanner/banner_top_descartaveis.jpg",
    persona: "/images/fadebanner/descartaveis.png",
    chamada: "/images/fadebanner/tudo_descartaveis.png"
  },
  {
    fundo: "/images/fadebanner/banner_top_escritorio.jpg",
    persona: "/images/fadebanner/escritorio.png",
    chamada: "/images/fadebanner/tudo_escritorio.png"
  },
  {
    fundo: "/images/fadebanner/banner_top_epi.jpg",
    persona: "/images/fadebanner/epi.png",
    chamada: "/images/fadebanner/tudo_epi.png"
  },
  {
    fundo: "/images/fadebanner/banner_top_limpeza.jpg",
    persona: "/images/fadebanner/limpeza.png",
    chamada: "/images/fadebanner/tudo_limpeza.png"
  }
]);

const currentIndex = ref(0);

const currentBanner = ref(banners.value[currentIndex.value]);

const startBannerRotation = () => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % banners.value.length;
    currentBanner.value = banners.value[currentIndex.value];
  }, 5000);
};

onMounted(() => {
  startBannerRotation();
});
</script>

<template lang="pug">
div.banner
  transition(
    name="fade"
    mode="out-in"
  )
    div.banner(
      v-show="show"
    )
      div.banner(
        style="display: flex;"
      )
        img(
          :key="currentIndex"
          :src="currentBanner.fundo"
        )
      div.persona
        img(
          :key="currentIndex"
          :src="currentBanner.persona"
        )
      div.chamada
        img(
          :key="currentIndex"
          :src="currentBanner.chamada"
        )
      div.titulo
        img(
          src="/images/fadebanner/logo.png"
        )
</template>

<style scoped>
.banner{
  display:flex;
  flex-direction: column;
  box-sizing: border-box;
  aspect-ratio: auto 1920/668;
  position: relative;
  height: auto;
  width: 100%;
  overflow: hidden;
}
.persona {
  position: absolute;
  width: 59%;
  display: flex;
  justify-content: end;
  z-index: 1;
}
.chamada {
  position: absolute;
  width: 90%;
  display: flex;
  z-index: 2;
  justify-content: end;
  align-items: center;
  margin-top: 170px
}
.titulo {
  position: absolute;
  display: flex;
  z-index: 3;
  width: 73%;
  margin-top: 230px;
  justify-content: end;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
