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
  $w: 1px;

  html,
  body {
    font-size: 62.5% !important;
    line-height: 1.5 !important;
    vertical-align: middle !important;

    p {
      margin: 0 !important;
    }
  }

  body {
    margin: 0 !important;
  }
</style>
