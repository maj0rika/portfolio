<script setup lang="ts">
  const route = useRoute()
  const toggleSidebar = ref(false)
  const toggleProfileImage = ref(false)
</script>

<template>
  <div class="container">
    <div
      :style="{
        display: 'flex',

        alignItems: 'center',
        justifyContent: 'center',
        // width: '100%',
        height: '100%',
        margin: '0',
        padding: '3rem',
        maxWidth: '102.4rem',
      }"
    >
      <div class="icon-box">
        <Icon
          name="heroicons:bars-3"
          size="36"
          color="#252530"
          class="mobile"
          :style="{
            display: 'flex',
          }"
          @click="toggleSidebar = !toggleSidebar"
        />
      </div>
      <SideNav class="side" v-model:isShow="toggleSidebar" />

      <div class="layout">
        <slot :key="route.fullPath" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import 'assets/styles/index.scss';

  .container {
    // overflow-y: hidden;
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0;
  }

  .layout {
    @include mobile {
      flex-direction: column;
    }
    @include mobile-over {
      flex-direction: row;
    }
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    // overflow: hidden;

    gap: 2rem;
  }

  .icon-box {
    display: none;

    @include mobile {
      z-index: 101;
      display: flex;
      position: fixed;
      top: 1rem;
      left: 1rem;
    }
  }
</style>
