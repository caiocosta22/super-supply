<script setup>
import { ref } from "vue";
const menus = ref([
  { titulo: "Quem somos", sessao: "apresentacao" },
  { titulo: "Benefícios e Soluções", sessao: "beneficios" },
  { titulo: "Suprimentos", sessao: "suprimentos" },
  { titulo: "Fornecedores", sessao: "fornecedores" },
  { titulo: "Clientes", sessao: "clientes" },
  { titulo: "Contato", sessao: "contato" }
]);
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);

  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth"
    });
  }
};
</script>

<template lang="pug">
div.container
  q-toolbar.cabecalho
    div.logo
      q-img.imagem(
        src="/images/logo.png"
        spinner-colow="white"
      )
    div.row.col.justify-evenly
      template(
        v-for="menu in menus"
        :key="menu.titulo"
      )
        p.titulo.row(
          @click="scrollToSection(menu.sessao)"
        ) {{ menu.titulo }}
    div.row.q-gutter-sm
      a(
        target="_blank"
        href="https://br.linkedin.com/company/supersupply"
      )
        q-icon(
          size="md"
          name="img:/icons/03.png"
          color="white"
        )
      a(
        target="_blank"
        href="https://www.instagram.com/supersupplyoficial/"
        style="padding-top: 3px;"
      )
        q-icon(
          size="sm"
          name="img:/icons/02.png"
          color="white"
        )
      a(
        target="_blank"
        href="https://www.facebook.com/"
      )
        q-icon(
          size="md"
          name="img:/icons/01.png"
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
.navegacao {
  display: flex;
  justify-content: space-between;
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
  font-weight: bold;
  margin: 0;
  cursor:pointer
}
p:hover {
  color: yellow;
  transition: 0.5s
}
</style>
