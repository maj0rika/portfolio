<script setup lang="ts">
  const route = useRoute()
  const toggleSidebar = ref(false)
  const toggleProfileImage = ref(false)
</script>

<template>
  <div class="container" ref="el" :style="{}">
    <div class="layout">
      <div class="icon-box">
        <Icon
          name="heroicons:bars-3"
          size="36"
          color="#252530"
          class="mobile"
          :style="{
            display: 'flex',
          }"
          @click="toggleSidebar = !toggleSidebar"
        />
      </div>
      <SideNav class="side" v-model:isShow="toggleSidebar" />

      <main class="main">
        <NuxtPage :page-key="route.fullPath" />
      </main>
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
    align-items: center;
    // overflow: hidden;
    width: calc(100vw - 6rem);
    height: calc(100% - 6rem); // sticky 적용하려면 height 필요
    min-height: 100vh;
    padding: 3rem;
    background-color: #f5f5f5;

    touch-action: auto;
  }
  .layout {
    @include mobile-over {
      display: grid;
      width: 100%;
      max-width: 102.4rem;
      height: 100%;
      grid-gap: 1rem;
      grid-template-areas:
        'side main'
        'side footer';
      grid-template-columns: 30rem 1fr;
      grid-template-rows: 1fr auto;
    }

    @include mobile {
      display: flex;
      flex-flow: column;
      width: 100%;
      height: 100%;
    }
  }

  .side {
    @include mobile-over {
      position: sticky;
      top: 0;
      align-self: start;
    }
  }

  .icon-box {
    @include mobile-over {
      display: none;
    }
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    padding: 0.5rem;
    background-color: #f5f5f5;
    border: 0.1rem solid #252530;
    border-radius: 20%;
  }
</style>
