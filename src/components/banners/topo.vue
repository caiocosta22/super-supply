<script setup>
import { ref, onMounted } from "vue";
const show = ref(true);
const banners = ref([
  {
    fundo: "/images/banneratt/1.png",
    persona: "/images/fadebanner/descartaveis.png",
    chamada: "/images/fadebanner/tudo_descartaveis.png",
    mobile: "/images/bannermobile/1.png"
  },
  {
    fundo: "/images/banneratt/2.png",
    persona: "/images/fadebanner/escritorio.png",
    mobile: "/images/bannermobile/2.png"
  },
  {
    fundo: "/images/banneratt/3.png",
    persona: "/images/fadebanner/epi.png",
    mobile: "/images/bannermobile/3.png"
  },
  {
    fundo: "/images/banneratt/4.png",
    persona: "/images/fadebanner/limpeza.png",
    mobile: "/images/bannermobile/4.png"
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
        img#full(
          :key="currentIndex"
          :src="currentBanner.fundo"
        )
        img#mini(
          :key="currentIndex"
          :src="currentBanner.mobile"
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
@media (max-width: 768px) {
  #full {
    display: none;
  }
  .banner {
    aspect-ratio: auto 769/700;
  }
}
@media screen and (min-width: 769px) {
  #mini {
    display: none;
  }
}
</style>
