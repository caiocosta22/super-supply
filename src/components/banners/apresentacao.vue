<script setup>
</script>

<template lang="pug">
div.container
  div.justify-center.q-pt-lg
    p.titulo QUEM SOMOS
  div.interno.q-pt-xl
    div.coluna
      p.texto1 Descubra uma abordagem moderna e inovadora, criada  especialmente para empresas como a sua.
    div.barras
      q-separator#barra1(
        color="yellow"
        vertical
        style="width:12px; height:310px; margin: 0 auto"
      )
      q-separator#barra2(
        color="yellow"
        style="height:10px; margin: 0 auto"
      )
    div.coluna
      p.texto2 A Super Supply é uma distribuidora de suprimentos empresariais com foco em contratos corporativos. Independentemente do tipo do seu negócio, nosso mix de produtos foi pensado para atender às suas necessidades. Simplificamos suas compras de suprimentos corporativos para que você possa se concentrar no que faz de melhor. Estamos prontos para servi-lo de maneira eficaz e confiável.
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
.texto1{
  font-size:32px;
  font-weight:700;
}
.coluna {
  width:40%
}
.barras {
  width:20%
}
.texto2{
  font-size:19px;
  font-weight:600;
  text-align:left
}
p {
  margin: 0 auto;
  color: #18264c;
}
.titulo {
  font-weight:700;
  font-size: 34px;
  text-align:center
}
@media screen and (max-width: 1024px) {
  .texto1 {
    font-size: 28px;
  }
  .texto2 {
    font-size: 16px;
  }
}
@media screen and (max-width: 768px) {
  #barra1 {
    display: none;
  }
  .interno {
    flex-direction: column-reverse;
  }
  .coluna {
    width: 85%;
  }
  .interno {
    padding-top: 20px;
  }
  .barras {
    width: 85%;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .titulo {
    font-size: 30px
  }
  .texto1 {
    font-size: 26px;
  }
  .texto2 {
    font-size: 14px;
  }
}
@media screen and (min-width: 768px) {
  #barra2 {
    display: none;
  }

}
@media screen and (max-width: 480px) {
  .titulo {
    font-size: 28px
  }
  .texto1 {
    font-size: 24px;
  }
  .texto2 {
    font-size: 14px;
  }
}
</style>
