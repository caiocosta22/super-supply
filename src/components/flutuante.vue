<script setup>
</script>

<template lang="pug">
div.container
  div.interno
    div
      span.texto1 Tudo o que você precisa em suprimentos corporativos está aqui.&nbsp
      span.texto2 Papelaria, limpeza, descartáveis, EPI, equipamentos e muito mais.
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
  justify-content: space-between;
}
.interno > div {
  width: 45%;
}
span {
  color: #18264c;
}
.texto1 {
  font-size:28px;
  font-weight:400;
  text-align:left;
}
.texto2 {
  font-size:28px;
  font-weight:bold;
  text-align:left;
}
@media screen and (max-width: 1024px) {
  .texto1 {
  font-size:24px;
}
  .texto2 {
  font-size:24px;
}
}
@media screen and (max-width: 769px) {
  .texto1 {
  font-size:24px;
}
 .texto2 {
  font-size:24px;
}
.interno > div {
  width: 100%;
  text-align: center;
}
}
@media screen and (max-width: 480px) {
  .texto1 {
  font-size:20px;
}
 .texto2 {
  font-size:20px;
}
}

</style>
