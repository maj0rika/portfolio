<script setup lang="ts">
  const isLocked = ref(false)
</script>

<template>
  <div class="container" ref="el" :style="{}">
    <div class="layout">
      <Icon
        name="heroicons:bars-3"
        size="36"
        color="#252530"
        class="mobile"
        @click="isLocked = !isLocked"
      />
      <SideNav class="side" v-model:isShow="isLocked" />

      <main><slot /></main>
      <Footer />
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import 'assets/styles/index.scss';
  .container {
    display: flex;
    flex-flow: column;
    justify-content: center;
    overflow: scroll;
    width: calc(100% - 6rem);
    height: calc(100% - 6rem);
    min-height: 100vh;
    padding: 3rem;
    background-color: #f5f5f5;

    touch-action: auto;
  }
  .layout {
    @include mobile-over {
      position: relative;
      display: grid;
      width: 100%;
      max-width: 102.4rem;

      grid-gap: 1rem;
      grid-template-areas:
        'side main'
        'side footer';
      grid-template-columns: 30rem 1fr;
      grid-template-rows: 1fr auto;
    }
    @include mobile {
    }
  }

  .side {
    @include mobile-over {
      position: sticky;
      top: 0;
      align-self: start;
    }
  }
</style>
