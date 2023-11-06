<script setup>
import { ref } from "vue";
const menus = ref([
  { titulo: "Quem somos", sessao: "apresentacao" },
  { titulo: "Benefícios e Soluções", sessao: "beneficios" },
  { titulo: "Suprimentos", sessao: "suprimentos" },
  { titulo: "Fornecedores", sessao: "carousel1" },
  { titulo: "Clientes", sessao: "carousel2" },
  { titulo: "Contato", sessao: "rodape" }
]);
const drawer = ref(false);
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
    div#navegacao.row.col.justify-evenly
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
      div.botaomenu.row
        q-btn(
          flat
          @click="drawer = !drawer"
          round
          dense
          icon="menu"
          color="white"
        )
div.drawermenu
  q-drawer(
    behavior="mobile"
    v-model="drawer"
    :width="200"
    :breakpoint="1025"
    bordered
    side="right"
    class="bg-primary"
  )
    q-scroll-area(class="fit")
      q-list
        template(
          v-for="menu in menus"
          :key="menu.titulo"
        )
          q-item(
            clickable :active="menu.titulo === 'Outbox'" v-ripple
            @click="scrollToSection(menu.sessao)"
          )
            q-item-section
              p.titulodrawer {{ menu.titulo }}
          q-separator
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
}
@media screen and (min-width: 1024px) {
  .drawermenu {
    display: none;
  }
  .botaomenu {
    display: none;
  }
}

</style>
