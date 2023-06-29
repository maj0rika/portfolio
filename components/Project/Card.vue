import { Base } from '../../.nuxt/components';
<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      flow: 'row' | 'column'
    }>(),
    {
      flow: 'row',
    },
  )

  const isShow = ref(false)
</script>

<template>
  <div
    :class="{
      // 'wrapper-column': props.flow === 'column',
      // 'wrapper-row': props.flow === 'row',
      wrapper: true,
    }"
  >
    <div
      class="content"
      :style="{
        border: isShow ? '0.3rem solid #862ddf' : '0.2rem solid #adc344',
      }"
    >
      <div class="icon-box">
        <ClientOnly>
          <Icon
            name="heroicons:gif"
            size="24"
            class="icon"
            @click="$emit('modalOpen')"
          />

          <Icon
            name="heroicons:arrow-down-20-solid"
            size="24"
            class="icon"
            @click="isShow = !isShow"
            :style="{
              transform: `rotateX(${isShow ? 180 : 0}deg)`,
            }"
          />
        </ClientOnly>
      </div>
      <slot name="title" />
      <slot name="content" :isShow="isShow" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import 'assets/styles/index.scss';

  .wrapper {
    @include mobile {
      display: flex;
      flex-flow: column;
      align-items: center;
      flex: 1 1;
      width: 100%;
      height: 100%;
    }

    @include mobile-over {
      display: flex;
      flex: 1;
      width: 100%;
      height: 100%;
    }

    position: relative;

    gap: 0.5rem;
  }

  .icon-box {
    display: flex;
    position: absolute;
    top: 0.5rem;
    right: 2rem;
    gap: 1rem;

    .icon {
      transition: all 0.3s ease-in-out;

      display: flex;
      cursor: pointer;
    }
  }

  .content {
    display: flex;
    flex-flow: column;
    flex: 1;
    gap: 2rem;
    width: calc(100% - 5rem);
    padding: 2rem;
    word-break: break-all;
    border: 0.2rem solid #adc344;
    border-radius: 1rem;
  }
</style>
