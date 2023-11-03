<script setup>
</script>

<template lang="pug">
div.container
  div.justify-center.q-pt-lg
    p(style="font-weight:700; font-size: 34px; text-align:center") QUEM SOMOS
  div.interno.q-pt-xl
    div(style="width:40%")
      p(style="font-size:32px; font-weight:700;") Descubra uma abordagem moderna e inovadora, criada  especialmente para empresas como a sua.
    div(style="width:20%")
      q-separator(
        color="yellow"
        vertical
        style="width:12px; height:310px; margin: 0 auto"
      )
    div(style="width:40%")
      p(style="font-size:19px; font-weight:600; text-align:left") A Super Supply é uma distribuidora de suprimentos empresariais com foco em contratos corporativos. Independentemente do tipo do seu negócio, nosso mix de produtos foi pensado para atender às suas necessidades. Simplificamos suas compras de suprimentos corporativos para que você possa se concentrar no que faz de melhor. Estamos prontos para servi-lo de maneira eficaz e confiável.
</template>

<style scoped>
.container {
  height: 550px;
  background-color: #fff;
  flex-direction: column;
  display: flex;
  overflow: hidden;
}
.interno {
  max-height: 490px;
  overflow: hidden;
  flex-direction: row;
  display: flex;
  margin: 0 auto;
  align-items: center;
  position: relative;
  width: 85%;
  justify-content: space-between;
}
p {
  margin: 0 auto;
  color: #18264c;
}
</style>
