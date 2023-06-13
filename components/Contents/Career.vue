<script setup lang="ts"></script>

<template>
  <ContentsContainer>
    <template v-slot:title>경력</template>
    <template v-slot:subTitle>나는 이런곳에서 일했어요</template>

    <template v-slot:body>
      <article class="career-box">
        <div class="img-box">
          <img src="@/assets/images/coderecipe-logo.png" alt="" />
        </div>
        <div class="career-info">
          <p>
            <strong>코드레시피</strong>
          </p>
          <p>2022.02 ~ 2023.04</p>
          <p>Frontend Developer</p>
        </div>
      </article>

      <p class="other-career">그 외 경력</p>

      <article class="career-box">
        <div class="img-box">
          <img src="@/assets/images/sera-logo.png" alt="" />
        </div>
        <div class="career-info">
          <p>
            <strong>seraSE</strong>
          </p>
          <p>2019.01 ~ 2022.02</p>
          <p>H/W and F/W Developer</p>
        </div>
      </article>
    </template>
  </ContentsContainer>
</template>

<style scoped lang="scss">
  @import 'assets/styles/index.scss';

  .other-career {
    color: #888888;
    display: flex;
    font-size: 1.5rem;
    font-weight: 700;
    @include mobile {
      margin-top: 10rem;
    }
  }

  .career-box {
    @include mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    @include mobile-over {
      display: grid;
      margin: 1rem;

      grid-gap: 2rem;
      grid-template-columns: repeat(3, 1fr);
    }

    .img-box {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      aspect-ratio: 2 / 1;

      @include mobile-over {
        border: 1px solid #eaeaea;
        aspect-ratio: 1 / 1;
      }
    }

    .career-info {
      display: flex;

      gap: 1rem;
      @include mobile-over {
        flex-direction: column;

        justify-content: center;
      }
    }

    img {
      display: flex;
      width: 100%;
    }

    p {
      white-space: nowrap;
      display: flex;

      @include mobile {
        font-size: 1.2rem;
      }
    }
  }
</style>
