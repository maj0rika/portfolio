<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="layout">
      <SideNav class="side" />
      <!-- TODO:스티키 적용해야함!!!  -->
      <main><slot /></main>
      <Footer />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .container {
    overflow: scroll;
    display: flex;
    justify-content: center;
    width: 100%;

    background-color: #f5f5f5;
    padding: 3rem 0;
  }
  .layout {
    display: grid;
    width: 100%;
    max-width: 102.4rem;

    grid-template-areas:
      'side main'
      'side footer';
    grid-template-columns: 30rem 1fr;
    grid-template-rows: 1fr auto;
    grid-gap: 1rem;
  }

  .side {
    position: sticky;
    // height: 60rem;
    background-color: blueviolet;
    align-self: start;
    top: 0;
  }
</style>
