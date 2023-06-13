<script setup lang="ts"></script>

<template>
  <ContentsContainer>
    <!-- <template v-slot:title>
      <p>Home</p>
    </template> -->

    <template v-slot:body>
      <img src="~/assets/images/logo.png" alt="logo" />
      <InputWaveText
        :style="{
          fontSize: '10rem',
          fontWeight: 'bold',
          color: '#252530',
          'justify-content': 'center',
        }"
        text="maj0rika"
      />
    </template>
  </ContentsContainer>
</template>

<style scoped lang="scss"></style>
