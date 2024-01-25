<script setup>
</script>

<template lang="pug">
q-page-container
  div.container
    div.interno
      p(
        style="font-weight: 600;font-size: 22px;"
      ) Trabalhe Conosco
      p Olá! Seja bem-vindo(a). Ficamos felizes em receber você aqui.
      p Realize o seu cadastro, bem detalhado, inserindo todas as informações solicitadas! Lembrando que ele será o seu Currículo e somente assim poderemos lhe conhecer melhor!
      p Para realizar seu cadastro em nosso Portal, clique aqui.
      p Para conferir nossas vagas abertas, clique aqui.
      p Aguarde o nosso contato para futuros processos que encaixarem-se com o seu perfil.
      p Ficaremos felizes em ter você no time! Boa sorte!
</template>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
}
.interno {
  width: 90%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  text-align: left;
  height: 60vh;
  margin-top: 60px;
}
p {
  font-size:18px;
  font-weight:400;
  text-align:left;
  color: #18264c;
}
@media screen and (max-width: 768px) {
  p {
    font-size: 18px;
  }
  .interno {
    height: 80vh;
  }
}
</style>
