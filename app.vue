<script setup lang="ts">
  const route = useRoute()
  const head = ref<any>()

  watch(
    () => route.fullPath,
    (o, v) => {
      if (o != v) {
        window.scrollTo(0, 0)
      }
    },
    { deep: true },
  )

  const structuredData = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: 'maj0rika',
    url: 'https://maj0rika.com',
    description: 'maj0rika portfolio',
  }

  head.value = {
    title: 'maj0rika',
    link: [
      {
        rel: 'canonical',
        href: 'https://maj0rika.com',
      },
      {
        rel: 'icon',
        href: '/favicon.png',
      },
    ],
    meta: [
      {
        name: 'title',
        content: 'maj0rika',
      },
      {
        name: 'author',
        content: 'maj0rika',
      },
      {
        name: 'description',
        content: 'maj0rika portfolio',
      },
      {
        name: 'keywords',
        content:
          '프론트엔드, frontend, front-end, 프론트엔드 포트폴리오, 포트폴리오, 개발자, 개발자 포폴, 프론트엔드 개발자, 프론트엔드 개발자 포트폴리오',
      },
      {
        property: 'og:site_name',
        content: 'maj0rika',
      },
      {
        property: 'og:title',
        content: 'maj0rika',
      },
      {
        property: 'og:description',
        content: 'maj0rika portfolio',
      },
      {
        property: 'og:url',
        content: 'https://maj0rika.com',
      },
      {
        property: 'og:image',
        content: '/favicon.png',
      },
      {
        property: 'og:image:width',
        content: '500',
      },
      {
        property: 'og:image:height',
        content: '500',
      },
    ],

    __dangerouslyDisableSanitizersByTagID: {
      structuredData: ['innerHTML'],
    },
  }

  const addStructuredData = () => {
    head.value.script = [
      {
        innerHTML: JSON.stringify(structuredData),
        type: 'application/ld+json',
        id: 'structuredData',
      },
    ]
  }

  onMounted(addStructuredData)
</script>

<template>
  <Html :lang="'ko-KR'" dir="ltr">
    <Head>
      <Title>{{ head.title }}</Title>
      <template v-for="link in head.link" :key="link.rel">
        <Link :rel="link.rel" :href="link.href" />
      </template>
      <Meta charset="utf-8" />
      <Meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <Meta
        name="naver-site-verification"
        content="e5d652aeb0b036ede997f6b978fe609fe83cab75"
      />

      <template v-for="meta in head.meta" :key="meta.name || meta.property">
        <Meta v-if="meta.name" :name="meta.name" :content="meta.content" />
        <Meta
          v-if="meta.property"
          :property="meta.property"
          :content="meta.content"
        />
      </template>
    </Head>

    <Body>
      <NuxtLayout repo="nuxt/content">
        <NuxtPage :page-key="route.fullPath" />
      </NuxtLayout>
      <Modal />
      <MouseEffect />
    </Body>
  </Html>
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
    font-family: 'LotteMartDream';
    font-style: normal;
    font-weight: 400;
    src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamMedium.woff2')
        format('woff2'),
      url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamMedium.woff')
        format('woff');
  }

  @font-face {
    font-family: 'LotteMartDream';
    font-style: normal;
    font-weight: 700;
    src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamBold.woff2')
        format('woff2'),
      url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamBold.woff')
        format('woff');
  }

  @font-face {
    font-family: 'LotteMartDream';
    font-style: normal;
    font-weight: 300;
    src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamLight.woff2')
        format('woff2'),
      url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamLight.woff')
        format('woff');
  }

  .lottemartdream * {
    font-family: 'LotteMartDream', sans-serif;
  }

  @font-face {
    font-family: 'Quicksand';
    src: url(@/assets/fonts/Quicksand.ttf) format('truetype');
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
    font-family: 'LotteMartDream', 'Quicksand', Arial, sans-serif !important;

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
