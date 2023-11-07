<script setup>
</script>

<template lang="pug">
div.column.q-px-lg.q-pt-lg(
  style="background-color: #fff; display: flex; justify-content: center; margin: 0 auto; align-items: center; text-align: center;"
)
  p.justify-center(
    style="font-size:20px; color:#18264c; margin: 0 auto; font-weight: bold;"
  ) Copyright © 2023 Super Supply. Todos os direitos reservados.
  p(
    style="color:#18264c; font-size: 16px; font-weight: 500;"
  ) SUPER SUPPLY DISTRIBUIDORA LTDA CNPJ: 45.141.688/0001-68
  div.copyright
    a.row(
      href="https://www.instagram.com/agenciaalastrar/"
      cursor-pointer
      target="_blank"
      style="text-align: center; align-items: center;"
    )
      p(
        style="font-size: 16px;color:#18264c;font-weight: 500;"
      ) Desenvolvido por:
      img(
        src="/images/alastar.png"
        style="display: block; width: 100px;  height:100px; padding-bottom: 12px;"
      )
</template>

<style scoped>
.container {
  background-color: #18264c;
  display: flex;
  flex-direction: row;
  height: 500px;
  align-items: center;
}
.interno {
  width: 85%;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
}
.logo {
  height: 40px;
  width: 186px;
  cursor: pointer;
}
.titulo {
  font-size: 14px;
  color:#fff;
  font-weight: 600;
  margin: 0 auto;
  margin-left: 60px;
  cursor:pointer;
  line-height: 30px;
}
p.titulo:hover {
  color: yellow;
  transition: 0.5s
}
a {
  text-decoration: none;
  color: #fff
}
.copyright {
  align-items: center;
  overflow: hidden;
  justify-content: center;
  margin: 0 auto;
}
@media screen and (max-width: 769px) {
}
</style>
