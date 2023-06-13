<script setup lang="ts">
  const route = useRoute()

  watch(
    () => route.fullPath,
    (o, v) => {
      if (o != v) {
        window.scrollTo(0, 0)
      }
    },
    { deep: true },
  )
</script>

<template>
  <NuxtLayout>
    <NuxtPage :page-key="route.fullPath" />
  </NuxtLayout>
</template>

<style lang="scss">
  @import 'assets/styles/index.scss';

  .mobile {
    @include mobile {
      display: flex !important;
    }
    @include mobile-over {
      display: none !important;
    }
  }

  $w: 1px;

  html,
  body {
    font-size: 62.5% !important;
    line-height: 1.5 !important;
    vertical-align: middle !important;

    width: 100vw;
    p {
      margin: 0;
    }

    scroll-behavior: smooth;
  }

  body {
    margin: 0;
  }
</style>
