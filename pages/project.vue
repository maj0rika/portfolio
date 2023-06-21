<script setup lang="ts"></script>

<template>
  <article>
    <NuxtPage :page-key="$route.fullPath" />
  </article>
</template>

<style scoped lang="scss">
  article {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    // align-items: center;
    min-height: 100vh;
  }
</style>
