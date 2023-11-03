<script setup>
</script>

<template lang="pug">
div.container
  div.interno
    div(
      style="width:40%;"
    )
      span(
        style="font-size:28px; font-weight:400;text-align:left;"
      ) Tudo o que você precisa em suprimentos corporativos está aqui.&nbsp
      span(
        style="font-size:28px; font-weight:bold;text-align:left;"
      ) Papelaria, limpeza, descartáveis, EPI, equipamentos e muito mais.
    div(
      style="width:40%; margin-bottom: 60px; margin-left: 300px; position: absolute;"
    )
      img(
        src="/images/caixas.png"
      )
</template>

<style scoped>
.container {
  background-color: #fff;
  height: 317px;
  flex-direction: column;
  display: flex;
}
.interno {
  height: 317px;
  flex-direction: row;
  display: flex;
  margin: 0 auto;
  position: relative;
  width: 85%;
  align-items: center;
  overflow:visible;
  z-index: 1;
  justify-content: space-between;
}
span {
  color: #18264c;
}
</style>
