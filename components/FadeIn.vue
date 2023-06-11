<script setup>
  import { useIntersectionObserver } from '@vueuse/core'

  const fadeElement = ref(null)
  useIntersectionObserver(fadeElement, ([{ isIntersecting }]) => {
    console.log(isIntersecting)
    if (isIntersecting) {
      fadeElement.value.classList.add('show')
    } else {
      fadeElement.value.classList.remove('show')
    }
  })
</script>

<template>
  <div>
    <div ref="fadeElement" class="fade-in">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .fade-in {
    opacity: 0;
    transition: opacity 0.5s ease-in;
  }

  .fade-in.show {
    opacity: 1;
  }
</style>
