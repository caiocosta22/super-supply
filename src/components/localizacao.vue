<script setup>
</script>

<template lang="pug">
div.container
  div.interno
    .titulo NOSSA LOJA
    iframe(
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.8343726477356!2d-38.50497892502561!3d-3.845707096128084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7511e24716cc1%3A0x5f87038ea67a5450!2sSuper%20Supply!5e0!3m2!1spt-BR!2sbr!4v1709593384901!5m2!1spt-BR!2sbr"
      style="border:0; width:100%; height:100%"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    )
</template>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  height: 70vh;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  margin-top:40px
}
.interno{
  width: 85%;
  display: flex;
  height: 100%;
  flex-direction: column;
  margin: 0 auto;
}
.titulo {
  font-weight:700;
  font-size: 34px;
  color: #18264c;
  text-align:CENTER;
  margin-bottom: 40px;
}
</style>
