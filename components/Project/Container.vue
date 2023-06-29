<script setup lang="ts"></script>

<template>
  <section class="wrapper">
    <h1 class="name">
      <slot name="name" />
    </h1>
    <h3 class="introduction"><slot name="introduction" /></h3>
    <h4 class="features">
      <slot name="features" />
    </h4>
    <h5 class="contemnt-wrapper">
      <slot name="contents" />
    </h5>
  </section>
</template>

<style scoped lang="scss">
  .wrapper {
    display: flex;

    flex-flow: column;
    align-items: center;
    width: fit-content;
    height: 100%;
    gap: 3rem;

    .name {
    }

    .introduction {
      padding: 0 10rem;
      display: flex;

      flex-flow: column;
      width: 100%;
    }

    .features {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
  }

  .contemnt-wrapper {
    display: flex;
    flex-flow: column;
    // justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    gap: 2rem;
  }

  // h1 {
  //   color: #888;
  //   font-size: 3rem;
  //   font-weight: 700;
  //   // margin: 0px !important;
  // }
  // h2 {
  //   color: #888;
  //   font-size: 2rem;
  //   font-weight: 700;
  //   // margin: 0px !important;
  // }
</style>
