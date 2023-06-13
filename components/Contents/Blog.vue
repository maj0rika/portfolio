<script setup lang="ts"></script>

<template>
  <ContentsContainer>
    <template v-slot:title>BLOG</template>
    <template v-slot:subTitle></template>

    <template v-slot:body>
      <NuxtLink to="https://maj0rika.com/react">REACT 블로그로 이동</NuxtLink>
      <NuxtLink to="https://velog.io/@neu5563">Velog로 이동</NuxtLink>
    </template>
  </ContentsContainer>
</template>

<style scoped lang="scss"></style>
