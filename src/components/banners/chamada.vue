<script setup>
import { ref } from "vue";
const slide = ref(0);
</script>

<template lang="pug">
div.banner
  div.container
    div.containerimage
      img(
        src="images/HOMEM.png"
      )
    div.texto
      div
        p SEJA QUAL FOR O SEU NEGÓCIO
      div
        span ...temos um mix <br> pensado para você!
</template>

<style scoped>
.banner{
  display:flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  aspect-ratio: auto 1920/633;
  position: relative;
  height: auto;
  width:100%;
  padding-top: 40px;
  background-image: url("/images/banner2.png");
}
.container {
  width:85%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 633px;
  margin: 0 auto;
  align-items: center;
}
.containerimage {
  margin-bottom: 102px;
}
img {
  height: 740px;
}
p {
  color: #feee00;
  font-size: 60px;
  font-weight: 700;
  margin: 0;
  line-height: 1;
  letter-spacing: 2px;
}
span {
  font-weight: 700;
  color:#fff;
 font-size: 30px;
}
.texto {
  width: 30%;
  margin-left: 160px;
}
@media (max-width: 1024px) {
  .texto {
    width: 50%;
    margin-left: 80px;
  }
  p {
    font-size: 38px;
  }
  span {
    font-size: 28px;
  }
}
@media (max-width: 769px) {
  .texto {
    position: absolute;
    width: 100%;
    text-align: center;
    margin: 0;
  }
  img {
    height: 640px;
  }
  .containerimage {
    margin-bottom: 0
  }
}
@media (max-width: 480px) {
  p {
    font-size: 24px;
  }
  span {
    font-size: 20px;
  }
}

</style>
