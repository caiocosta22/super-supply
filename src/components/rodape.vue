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
    div.inputs
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
            placeholder="Ex: Seu Nome"
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
            placeholder="Ex: exemplo@exemplo.com"
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
      div(
        style="margin: 20px auto 10px"
      )
        q-btn(
          no-caps
          color="white"
          style="border-radius:20px; width: 100%;"
        )
          span(
            style="font-size: 16px; color: black;"
          ) Enviar
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
          style="border-radius:20px;"
        )
          a(
            href="https://api.whatsapp.com/send?phone=5585997250181&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento..."
            style="text-decoration:none"
          )
            span.textobotao Fale com um de nossos consultores
  div.interno2
    div.logo
      q-img(
        src="/images/logo.png"
      )
    div.inputs
      div
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
            placeholder="Ex: Seu Nome"
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
            placeholder="Ex: exemplo@exemplo.com"
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
    div(
      style="margin: 20px auto 10px"
    )
      q-btn(
        no-caps
        color="white"
        style="border-radius:20px"
      )
        span(
          style="font-size: 16px; color: black;"
        ) Enviar
    div.column.justify-start.align-center
      div(
        style="margin: 0 auto;"
      )
        p.titulo(
          style="margin: 0 auto; margin-bottom: 10px ;"
        ) Solicite seu orçamento agora mesmo!
      div(
        style="align-items:center; margin: 0 auto"
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
            span.textobotao Fale com um de nossos consultores
      div.row.q-gutter-sm(
        style="margin: 10px auto"
      )
        a(
          target="_blank"
          href="https://br.linkedin.com/  company/supersupply"
        )
          q-icon(
            size="md"
            name="img:/icons/03.png"
            color="white"
          )
        a(
          target="_blank"
          href="https://www.instagram.com/  supersupplyoficial/"
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
.interno2 {
  width: 85%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
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
.inputs {
  flex-direction: column;
  width: 25%;
}
@media (max-width: 1280px) {
  .logo {
    width: 150px;
  }
}
@media (max-width: 1024px) {
  .interno {
    display: none;
  }
  .inputs {
    width: 100%;
  }
  .logo {
    margin: 0 auto;
    width: 180px;
  }
  .container{
    height: 550px;
  }
}
@media (min-width: 1024px) {
  .interno2 {
    display: none;
  }
}
@media (max-width: 480px) {
  .textobotao {
    font-size: 10px;
  }
  .titulo {
    font-size: 12px;
  }
}
</style>
