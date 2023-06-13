<script setup lang="ts">
  const toggleSidebar = ref(false)
</script>

<template>
  <div class="layout">
    <Icon
      name="heroicons:bars-3"
      size="36"
      color="#252530"
      class="mobile"
      @click="toggleSidebar = !toggleSidebar"
    />
    <SideNav class="side" v-model:isShow="toggleSidebar" />

    <main class="main">
      <NuxtPage :page-key="route.fullPath" />
    </main>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
  @import 'assets/styles/index.scss';

  .layout {
    padding: 3rem;
    background-color: #f5f5f5;
    width: calc(100% - 6rem);
    height: calc(100% - 6rem); // sticky 적용하려면 height 필요
    min-height: 100vh;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
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

  .main {
    display: flex;
    width: 100%;
  }

  .side {
    @include mobile-over {
      position: sticky;
      top: 0;
      align-self: start;
    }
  }
</style>
