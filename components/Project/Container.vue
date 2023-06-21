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
    <div class="contemnt-wrapper">
      <slot name="contents" />
    </div>
  </section>
</template>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 1rem;

    // .name {
    //   font-size: 3rem;
    //   font-weight: 700;
    // }

    // .introduction {
    //   font-size: 2rem;
    //   font-weight: 700;
    // }

    // .features {
    //   font-size: 2rem;
    //   font-weight: 700;
    // }
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
