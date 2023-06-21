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
  <Modal />
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

    .flex-box {
      display: flex;
      flex-flow: column;
      width: 100%;
      height: 100%;
      gap: 3rem;

      &.center {
        @include mobile-over {
          align-items: center;
        }
      }
    }

    p {
      @include mobile {
        font-size: 1.4rem;
        font-weight: 400;
      }

      @include mobile-over {
        font-size: 1.6rem;
        font-weight: 400;
      }

      margin: 0;
    }
    h1 {
      @include mobile {
        font-size: 2.4rem;
        font-weight: 400;
      }

      @include mobile-over {
        font-size: 3.2rem;
        font-weight: 400;
      }
      margin: 0;
    }
    h2 {
      @include mobile {
        font-size: 2.4rem;
        font-weight: 400;
      }

      @include mobile-over {
        font-size: 3.2rem;
        font-weight: 400;
      }
      margin: 0;
    }
    h3 {
      @include mobile {
        font-size: 1.8rem;
        font-weight: 400;
      }

      @include mobile-over {
        font-size: 2.4rem;
        font-weight: 400;
      }
      margin: 0;
    }
    h4 {
      @include mobile {
        font-size: 1.6rem;
        font-weight: 400;
      }

      @include mobile-over {
        font-size: 2rem;
        font-weight: 400;
      }
      margin: 0;
    }
    h5 {
      @include mobile {
        font-size: 1.4rem;
        font-weight: 400;
      }

      @include mobile-over {
        font-size: 1.8rem;
        font-weight: 400;
      }
      margin: 0;
    }
    h6 {
      @include mobile {
        font-size: 1.2rem;
        font-weight: 400;
      }

      @include mobile-over {
        font-size: 1.6rem;
        font-weight: 400;
      }
      margin: 0;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    li {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    button {
      border: none;
      outline: none;
      background: none;
      cursor: pointer;
    }
    input {
      border: none;
      outline: none;
      background: none;
      cursor: pointer;
    }
    textarea {
      border: none;
      outline: none;
      background: none;
      cursor: pointer;
    }
    select {
      border: none;
      outline: none;
      background: none;
      cursor: pointer;
    }
    img {
      border: none;
      outline: none;
      background: none;
      cursor: pointer;
    }
    svg {
      border: none;
      outline: none;
    }
    scroll-behavior: smooth;
  }

  body {
    margin: 0;

    img {
      max-width: 100%;
      height: auto;
    }
  }
</style>
