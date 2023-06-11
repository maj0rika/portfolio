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

<style scoped lang="scss">
  $w: 1px;
</style>
