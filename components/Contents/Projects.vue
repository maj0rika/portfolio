<script setup lang="ts">
  const projectImages = computed(() => {
    return ['~/assets/images/logipasta.png', '~/assets/images/QNN24.png']
  })
</script>

<template>
  <ContentsContainer>
    <template v-slot:title>프로젝트 경험</template>
    <template v-slot:subTitle>나는 이런 프로젝트를 해왔어요</template>

    <template v-slot:body>
      <FadeIn :mode="'right'">
        <NuxtLink to="/project/quick">
          <div
            :style="{
              backgroundImage:
                'url(https://qnn24.s3.ap-northeast-2.amazonaws.com/1687704726117_logipasta.png)',
              minHeight: '20rem',
            }"
            class="flex w-full h-full back-img wrapper"
          >
            <div class="content">
              <h2>물류 온라인 전환 솔류션</h2>
              <p></p>
            </div>
          </div>
        </NuxtLink>
      </FadeIn>
      <FadeIn :mode="'right'">
        <NuxtLink to="/project/qnn24">
          <div
            :style="{
              backgroundImage:
                'url(https://qnn24.s3.ap-northeast-2.amazonaws.com/1687704757814_QNN24.png)',
              minHeight: '20rem',
            }"
            class="flex w-full h-full back-img wrapper"
          >
            <div class="content">
              <h2>뉴스</h2>
              <p></p>
            </div>
          </div>
        </NuxtLink>
      </FadeIn>
      <!-- <FadeIn :mode="'right'">
        <NuxtLink to="/project/qnn24">
          <div class="logo-wrapper">
            <img src="https://qnn24.s3.ap-northeast-2.amazonaws.com/1687704757814_QNN24.png" alt="image" />
          </div>
        </NuxtLink>
      </FadeIn>
      <FadeIn :mode="'right'">
        <div>
          그외 경력으로는 C 언어를 이용한 임베디드 소프트웨어 개발 경험이
          있습니다.
        </div>
      </FadeIn> -->
    </template>
  </ContentsContainer>
</template>

<style scoped lang="scss">
  .back-img {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;

      object-fit: contain;
    }
  }

  .content {
    position: absolute;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0);
    transition: all 0.3s ease;
    opacity: 0;
  }

  .wrapper:hover .content {
    color: white;
    background-color: $primary;
    opacity: 1;
  }
</style>
