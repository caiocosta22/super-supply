<script setup>
import { ref } from "vue";
const slide = ref(0);
</script>

<template lang="pug">
div.banner
  div.container
    div(
      style="margin-bottom: 102px;"
    )
      img(
        src="images/HOMEM.png"
        style="height: 740px;"
      )
    div(
      style="width: 30%; margin-left: 160px;"
    )
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
</style>
