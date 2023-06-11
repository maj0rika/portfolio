<script setup lang="ts"></script>

<template>
  <div class="layout">
    <SideNav />
    <main><slot /></main>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
  .layout {
    display: grid;
    grid-template-columns: 30rem 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      'side main'
      'side footer';
    height: 100vh;
  }
</style>
