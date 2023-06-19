<script setup>
  const loading = ref(false)

  const props = defineProps({
    text: {
      type: String,
      default: 'Hello, World!',
    },
    repeat: {
      type: Number,
      default: 2,
    },
  })

  onMounted(() => {
    loading.value = true
  })
</script>

<template>
  <div class="wave-text" v-bind="$attrs">
    <span
      v-for="(char, index) in text"
      :key="index"
      :style="{
        animationDelay: `${index * 0.2}s`,
        animationIterationCount: repeat,
      }"
      class="wave-animation"
    >
      {{ char }}
      <template v-if="char == ' '">&nbsp;</template>
    </span>
  </div>
</template>

<style scoped lang="scss">
  @keyframes wave {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-50%);
    }
    100% {
      transform: translateY(0);
    }
  }

  .wave-text {
    z-index: 10;
    display: flex;

    height: fit-content;
  }

  .wave-animation {
    display: flex;
    flex-flow: row;
    animation: wave 2s;
  }
</style>
