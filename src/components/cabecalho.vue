<script setup>
import { ref } from "vue";
const menus = ref([
  { titulo: "Quem somos" },
  { titulo: "Benefícios e Soluções" },
  { titulo: "Suprimentos" },
  { titulo: "Fornecedores" },
  { titulo: "Clientes" },
  { titulo: "Contato" }
]);

</script>

<template lang="pug">
div.container
  q-toolbar.cabecalho
    div.logo
      q-img.imagem(
        src="/images/logo.png"
        spinner-colow="white"
      )
    div.navegacao.row
      template(
        v-for="menu in menus"
        :key="menu.titulo"
      )
        p.titulo(
        ) {{ menu.titulo }}
    div.row.q-gutter-sm
      a(
        target="_blank"
        href="https://br.linkedin.com/company/supersupply"
      )
        q-icon(
          size="md"
          name="fa-brands fa-linkedin"
          color="white"
        )
      a(
        target="_blank"
        href="https://www.instagram.com/supersupplyoficial/"
      )
        q-icon(
          size="md"
          name="fa-brands fa-square-instagram"
          color="white"
        )
      a(
        target="_blank"
        href="https://www.facebook.com/"
      )
        q-icon(
          size="md"
          name="fa-brands fa-facebook"
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
  background-color: #18264c;
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
  background-color: #18264c;
  max-height: 80px;
}
.logo {
  height: 40px;
  width: 186px;
  cursor: pointer;
}
.titulo {
  font-size: 14px;
  color:#fff;
  font-weight: bold;
  margin: 0 auto;
  margin-left: 60px;
  cursor:pointer
}
p:hover {
  color: yellow;
  transition: 0.5s
}
</style>
