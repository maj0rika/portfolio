<script setup lang="ts">
  const modal = useModal()

  watch(
    () => modal.show,
    show => {
      if (show) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },
  )
const img = ref()
watchEffect(async () => {
  if (!modal.img) return
  img.value = (
    await import(/* @vite-ignore */ `../assets/images/${modal.img}`)
  ).default
})
</script>

<template>
  <div @click.self="modal.close()" class="modal-container" :class="{ 'modal-open': modal.show }">
    <div class="modal-content" v-if="img">
      <img loading="lazy" :src="img" alt="Dynamically imported image" />
    </div>
  </div>
</template>
<style scoped lang="scss">
  .modal-container {
    pointer-events: none;
    visibility: hidden;
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    opacity: 0;
    z-index: 999;
    background-color: hsla(0, 0%, 0%, 0.4);
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: transform, opacity, visibility;
    overflow-y: hidden;
    overscroll-behavior: contain;
    align-items: center;
  }

  .modal-open {
    pointer-events: auto;
    visibility: visible;
    opacity: 1;
  }

  .modal-content {
    max-height: calc(100vh - 5em);
    background-color: hsla(0, 0%, 100%, 1);
    padding: 1.5rem;
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke, opacity, box-shadow, transform,
      filter, backdrop-filter;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    width: 91.666667%;
    // max-width: 32rem;
    transform: scale(0.9);
    border-radius: 1rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    overflow-y: auto;
    overscroll-behavior: contain;
  }
</style>
