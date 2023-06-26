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
        width: '100%',
        height: '100%',
        margin: '0',
        maxWidth: '102.4rem',
        // overflowX: 'hidden',
      }"
    >
      <div class="icon-box">
        <ClientOnly>
          <Icon
            name="heroicons:bars-3"
            size="36"
            color="#252530"
            class="mobile"
            :style="{
              display: 'flex',
              cursor: 'pointer',
            }"
            @click="toggleSidebar = !toggleSidebar"
          />
        </ClientOnly>
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
    display: flex;
    flex-flow: column;
    align-items: center;
    // overflow: hidden;
    // width: calc(100% - 6rem);
    width: 100%;
    height: 100%;
    margin: 0;
    // padding: 3rem;
  }

  .layout {
    @include mobile {
      flex-direction: column;
    }

    @include mobile-over {
      flex-direction: row;
    }

    width: 100%;
    height: 100%;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    padding: 3rem;
    gap: 2rem;
  }

  .icon-box {
    @include mobile {
      position: fixed;
      top: 1rem;
      left: 1rem;
      z-index: 101;
      display: flex;
    }

    display: none;
  }
</style>
