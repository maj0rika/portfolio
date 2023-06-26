<script setup lang="ts">

</script>

<template>
  <div :style="{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '.4rem',
  }
    ">
    <img v-for="logo in $badgeEnum" :key="logo" :src="logo" alt="logo" />

  </div>
</template>

<style scoped lang="scss">
img {
  width: auto;
  height: 2.8rem;
  display: flex;
  object-fit: contain;
}
</style>