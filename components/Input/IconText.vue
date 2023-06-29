<script setup lang="ts">
  const props = defineProps<{
    icon: {
      name: string
      size?: string
      color?: string
    }
  }>()
</script>

<template>
  <div class="wrapper">
    <Icon
      :name="icon.name"
      class="icon"
      :size="icon.size"
      :color="icon.color"
    />
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    flex-wrap: nowrap;
    gap: 0.5rem;
  }
  .icon {
    pointer-events: none;
    display: flex;
    margin-top: 0.2rem;
    margin-bottom: auto;
    flex-shrink: 0;
  }
</style>
