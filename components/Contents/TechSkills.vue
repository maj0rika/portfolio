<script setup lang="ts">
const html = [
  `
  <div> C, Javascript, Vue, Nuxt, React, HTML, Css, Scss 등을 다룰 수
      있습니다. 대학 생활부터
      <strong>C언어를 이용한 프로그래밍</strong>
      을 시작하였고, 관련 텀 프로젝트를 진행했었습니다. 졸업 후, 개발 첫 경험은
      <strong>
      C언어를 이용한 임베디드 소프트웨어</strong> 개발이었습니다. 3년 동안 임베드디 관련
      업무에 종사하였습니다.
      </br>
      </br>`,
  `
      그 후 지인을 통해 웹 개발을 시작하게 되었고, 현재는
      웹 개발자로 활동하고 있습니다. 웹 개발을 시작하면서
      <strong>Javascript와 Vue, Nodejs</strong>
      를 학습하였고, 첫 회사에 입사하여
      <strong>Vue를 이용한 프론트엔드 개발</strong>
      을 하였습니다. 현재는
      <strong>Vue, Nuxt, React를 이용한 프론트엔드</strong>
      개발을 할 수 있습니다.
      </br>
      </br>`,
  `
    최근엔 개인 프로젝트로
      <strong>React를 이용한 블로그와 nuxt를 이용한 포트폴리오 사이트</strong>
      를 만들었습니다. 먼저 블로그는
      <strong>React와 Redux, Firebase, TailwindCss</strong>
      를 이용하여 구현했습니다. 포트폴리오 사이트는
      <strong>Nuxt와 Scss</strong>
      를 이용하여 구현했습니다. 두 프로젝트 모두
      <strong>AWS EC2</strong>
      를 이용하여 배포하였습니다.
      <strong>Nginx</strong>
      를 이용하여 블로그와 포트폴리오 사이트를 하나의 도메인으로 연결하여
      https를 적용하였습니다.
      또한
      <strong>GitHub를 통해 소스코드</strong>
      를 관리하고 있습니다.</div>`,
]
</script>

<template>
  <ContentsContainer>
    <template v-slot:title>Skills</template>
    <template v-slot:subTitle>나는 이런걸 할줄 알아요</template>

    <template v-slot:body>
      <ClientOnly>
        <FadeIn :mode="'right'" v-for="(input, i) in html" :key="i">
          <article class="text-box" v-html="input" />
        </FadeIn>
      </ClientOnly>
      <ContentsSkillList />
    </template>

  </ContentsContainer>
</template>

<style scoped lang="scss">
@import '@/assets/styles/index.scss';

.text-box {
  @include mobile {
    font-size: 1.6rem;
  }

  strong {
    font-weight: 600;
  }
}
</style>
