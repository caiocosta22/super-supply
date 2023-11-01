<script setup>
</script>

<template lang="pug">
div.container
  q-toolbar.cabecalho
    div.logo
      q-img.imagem(
        src="/images/logo.png"
        spinner-colow="white"
      )
    div.row.q-gutter-sm
      a(
        target="_blank"
        href="https://www.instagram.com/banbancalcados/"
      )
        q-icon(
          size="md"
          name="fa-brands fa-square-instagram"
          color="white"
        )
      a(
        target="_blank"
        href="https://www.facebook.com/banbancalcadosperfil/"
      )
        q-icon(
          size="md"
          name="fa-brands fa-square-facebook"
          color="white"
        )
</template>

<style scoped>
.container {
  display:flex;
  flex-wrap:nowrap;
  flex-direction: row;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  background-color: #242e49;
  height: 80px;
}
.cabecalho {
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  flex-grow: 1;
  max-width: 85%;
  margin: 0 auto;
  justify-content:space-between;
  background-color: #242e49;
  max-height: 80px;
}
.logo {
  height: 40px;
  width: 186px;
  cursor: pointer;
}
</style>
