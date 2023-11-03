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
const nome = ref("");
const telefone = ref("");
const email = ref("");
</script>

<template lang="pug">
div.container
  div.interno
    div.logo
      q-img(
        src="/images/logo.png"
      )
    div.column.flex
      template(
        v-for="menu in menus"
        :key="menu.titulo"
      )
        p.titulo(
        ) {{ menu.titulo }}
    div.column(
      style="width: 25%;"
    )
      div(
        style="margin-bottom: 20px;"
      )
        p.titulo Contato
      div(
        style="margin-bottom: 10px;"
      )
        p.titulo Nome:
          q-input(
            rounded
            outlined
            v-model="nome"
            bg-color="white"
            placeholder="Ex: Super Supply"
            dense
          )
      div(
        style="margin-bottom: 10px;"
      )
        p.titulo E-mail:
          q-input(
            rounded
            outlined
            v-model="email"
            placeholder="Ex: exemplo@supersupply.com"
            bg-color="white"
            dense
          )
      div(
        style="margin-bottom: 10px;"
      )
        p.titulo Telefone:
          q-input(
            rounded
            outlined
            v-model="telefone"
            mask="(##)#####-####"
            placeholder="Ex: (85) 91234-5678"
            bg-color="white"
            dense
          )
    div.column.justify-start.align-center
      div.row.q-gutter-sm(
        style="margin-bottom:10px"
      )
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
            name="fa-brands fa-square-facebook"
            color="white"
          )
      div
        p.titulo(
          style="margin: 0; margin-bottom: 10px ;"
        ) Solicite seu orçamento agora mesmo!
      div(
        style="align-items:center"
      )
        q-btn(
          no-caps
          color="green"
          icon="fa-brands fa-whatsapp"
          style="border-radius:20px"
        )
          a(
            href="https://api.whatsapp.com/send?  phone=5585997250181&text=Ol%C3%A1,  %20gostaria%20de%20fazer%20um%20or%C3%A7amento..."
            style="text-decoration:none"
          )
            span Fale com um de nossos consultores
div.column.q-pt-lg(
  style="background-color: #fff; display: flex; justify-content: center; margin: 0 auto; align-items: center; text-align: center;"
)
  p.justify-center(
    style="font-size:20px; color:#18264c; margin: 0 auto; font-weight: bold;"
  ) Copyright 2023 Super Supply. Todos os direitos reservados.
  div.row(style="width: 500px; height: 100px; align-items: center; overflow: hidden; justify-content: center; margin: 0 auto;")
    p(style="font-size: 16px;color:#18264c;font-weight: 500;") Desenvolvido por:
    img(
      src="/images/alastar.png"
      style="display: block; width: 100px; height: 100px; padding-bottom: 15px;"
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
</style>
