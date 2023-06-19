<script setup lang="ts">
  const route = useRoute()

  watch(
    () => route.fullPath,
    (o, v) => {
      if (o != v) {
        window.scrollTo(0, 0)
      }
    },
    { deep: true },
  )
</script>

<template>
  <NuxtLayout>
    <Loading />
    <NuxtPage :page-key="route.fullPath" />
  </NuxtLayout>
</template>

<style lang="scss">
  @import 'assets/styles/index.scss';

  .mobile {
    @include mobile {
      display: flex !important;
    }
    @include mobile-over {
      display: none !important;
    }
  }

  @font-face {
    font-family: 'bmjua';
    src: url(@/assets/fonts/BMJUA_ttf.ttf) format('truetype');
  }
  input[type='password'] {
    font-family: 'roboto';
  }

  ::placeholder {
    font-family: 'bmjua';
  }

  $w: 1px;

  html,
  body {
    font-size: 62.5% !important;
    line-height: 1.5 !important;
    vertical-align: middle !important;
    font-family: 'bmjua';

    // width: 100vw;
    // height: 100vh;

    // ::-webkit-scrollbar {
    //   display: none !important;
    // }

    // -ms-overflow-style: none; /* 인터넷 익스플로러 */
    // scrollbar-width: none; /* 파이어폭스 */

    p {
      margin: 0;
    }

    scroll-behavior: smooth;
  }

  body {
    margin: 0;
  }
</style>
