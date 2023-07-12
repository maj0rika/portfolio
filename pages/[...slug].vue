<script setup lang="ts">
  const route = useRoute()
  const router = useRouter()

  if (route.fullPath != '/sitemap.xml') {
    router.push('/')
  }
</script>

<template></template>

<style scoped lang="scss"></style>
