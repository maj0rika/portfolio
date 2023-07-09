<script setup lang="ts">
  const projectImages = computed(() => {
    return ['~/assets/images/logipasta.png', '~/assets/images/QNN24.png']
  })
</script>

<template>
  <ContentsContainer>
    <template v-slot:title>Projects</template>
    <template v-slot:subTitle>프로젝트를 클릭해주세요</template>

    <template v-slot:body>
      <FadeIn :mode="'right'">
        <NuxtLink to="/project/quick">
          <div
            :style="{
              backgroundImage:
                'url(https://qnn24.s3.ap-northeast-2.amazonaws.com/1687704726117_logipasta.png)',
              minHeight: '20rem',
            }"
            class="flex w-full h-full back-img"
          >
            <!-- <div class="content">
              <h2>물류 온라인 전환 솔류션</h2>
              <p>
                기존 물류 주선사들이 전화를 통해서만 물류 업무를 처리하던 것을
                온라인으로 전환을 도와주는 솔루션을 제공하는 서비스입니다.
              </p>
              <p>
                어떻게하면 이미 전화로 짧은 은어로 간단하게 주문을 주고받았던
                기존 물류 업무를 온라인으로 전환할 수 있을까 항상
                고민하였습니다.
              </p>
            </div> -->
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
            class="flex w-full h-full back-img"
          >
            <!-- <div class="content">
              <h2>뉴스 및 멀티 플랫폼</h2>
              <p>
                대표적으로 여러 뉴스 매체를 한번에 볼 수 있는 서비스를
                제공하였습니다.
              </p>
              <p>
                그 외에도 웹툰, 쇼핑몰, 전문가 매칭서비스 등 다양한 서비스를
                개발했습니다.
              </p>
            </div> -->
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
    background-size: contain;
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
    background-color: $secondary;
    opacity: 1;
  }
</style>
