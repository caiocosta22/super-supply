<script setup>

</script>

<template lang="pug">
div.container
  div.interno
    div
      p.chamada Solicite seu orçamento agora mesmo!
    div(
      style="margin-left:40px;height:40px; max-width:400px;align-items:center"
    )
      q-btn(
        no-caps
        color="green"
        icon="fa-brands fa-whatsapp"
        style="border-radius:20px"
      )
        span.textobotao Fale com um de nossos consultores
</template>

<style scoped>
.container {
  height: 80px;
  background-color: #ececec;
}
.interno {
  max-height: 80px;
  overflow: hidden;
  flex-direction: row;
  display: flex;
  margin: 0 auto;
  align-items: center;
  position: relative;
}
.chamada {
  font-size: 20px;
  color: #18264c;
  font-weight: bold;
  margin: 0 auto;
}
.textobotao {
  font-size:16px;
  color:#fff;
  font-weight: bold;
  margin: 0 auto;
  margin-left:8px
}
</style>
