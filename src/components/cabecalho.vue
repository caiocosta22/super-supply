<script setup>
import { ref } from "vue";
const menus = ref([
  { titulo: "Quem somos", sessao: "apresentacao" },
  { titulo: "Benefícios e Soluções", sessao: "beneficios" },
  { titulo: "Suprimentos", sessao: "suprimentos" },
  { titulo: "Fornecedores", sessao: "carousel1" },
  { titulo: "Clientes", sessao: "carousel2" },
  { titulo: "Contato", sessao: "formulario" }
]);

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 140,
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
    div#navegacao.row.col.justify-evenly
      template(
        v-for="menu in menus"
        :key="menu.titulo"
      )
        p.titulo.row(
          @click="scrollToSection(menu.sessao)"
        ) {{ menu.titulo }}
    div.row.q-gutter-sm(
      style="flex-wrap: nowrap;"
    )
      a.q-pt-sm(
        target="_blank"
        href="https://br.linkedin.com/company/supersupply"
      )
        q-icon(
          size="lg"
          name="img:/icons/03.png"
          color="white"
        )
      a.q-pt-sm(
        target="_blank"
        href="https://www.instagram.com/supersupplyoficial/"
        style="padding-top: 10px;"
      )
        q-icon(
          size="md"
          name="img:/icons/02.png"
          color="white"
        )
      a.q-pt-sm(
        target="_blank"
        href="https://www.facebook.com/"
      )
        q-icon(
          size="lg"
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
  height: 140px;
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
  max-height: 140px;
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
.titulodrawer {
  font-size: 18px;
  color:#fff;
  font-weight: bold;
  margin: 0;
  cursor:pointer
}
p:hover {
  color: yellow;
  transition: 0.5s
}
@media (max-width: 1280px) {
  .titulo {
    font-size: 12px;
  }
}
@media (max-width: 1024px) {
  #navegacao {
    display: none;
  }
  .cabecalho {
    max-height: 140px;
  }
  .container {
    height: 140px;
  }
}
@media screen and (min-width: 1024px) {
  .drawermenu {
    display: none;
  }
  .botaomenu {
    display: none;
  }
}
@media screen and (max-width: 360px) {
  .logo {
    height: 30px;
  }
}

</style>
