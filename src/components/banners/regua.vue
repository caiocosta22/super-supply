<script setup>

</script>

<template lang="pug">
div.container
  div.interno
    div
      p.chamada Solicite seu orçamento agora mesmo!
    div.containerbotao
      q-btn.botao(
        no-caps
        color="green"
        icon="fa-brands fa-whatsapp"
        style="border-radius:20px"
      )
        a(
          href="https://wa.me/558533001818?text=Ol%C3%A1%2C+venho+atr%C3%A1ves+do+Site+da+Super+Supply.+Gostaria+de+mais+informa%C3%A7%C3%B5es"
          target="_blank"
          style="text-decoration:none"
        )
          span.textobotao Fale com um de nossos consultores
</template>

<style scoped>
.container {
  height: 80px;
  background-color: #ececec;
}
.interno {
  max-height: 80px;
  overflow: hidden;
  flex-direction: row;
  display: flex;
  margin: 0 auto;
  align-items: center;
  position: relative;
}
.chamada {
  font-size: 20px;
  color: #18264c;
  font-weight: bold;
  margin: 0 auto;
}
.textobotao {
  font-size:16px;
  color:#fff;
  font-weight: bold;
  margin: 0 auto;
  margin-left:8px
}
.containerbotao {
  margin-left:40px;
  height:40px;
  max-width:400px;
  align-items:center;
}

@media screen and (max-width: 1024px) {
  .chamada {
    font-size: 16px;
  }
}
@media screen and (max-width: 769px) {
  .chamada {
    display: none;
  }
  .containerbotao {
    margin-left: 0px;
  }
  .botao {
    height: 20px;
  }
  .textobotao {
    font-size: 12px;
  }
}
@media screen and (max-width: 480px) {
  .textobotao {
    font-size: 12px;
  }
}
</style>
