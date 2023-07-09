<script setup lang="ts">
  const isFlipped = ref(false)
</script>

<template>
  <ContentsContainer>
    <template v-slot:title>About</template>

    <template v-slot:subTitle>나는 이런 사람이에요</template>

    <template v-slot:body>
      <!-- <FadeIn :mode="'right'"> -->
      <div
        class="me"
        @mouseover="isFlipped = true"
        @mouseleave="isFlipped = false"
      >
        <div class="flip-card" style="height: 200px; width: auto">
          <div
            class="flip-card-inner"
            :style="{
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }"
          >
            <div class="flip-card-front">
              <img src="~/assets/images/me.jpeg" alt="logo" />
            </div>
            <div class="flip-card-back">
              <img src="~/assets/images/logo.png" alt="logo" />
            </div>
          </div>
        </div>

        <div class="me-content">
          <div class="flex">
            <p class="contents">이름</p>
            <span class="substance">이태희</span>
          </div>
          <div class="flex">
            <p class="contents">닉네임</p>
            <span class="substance">
              <InputWaveText
                class="substance"
                style="font-size: 1.6rem"
                text="maj0rika"
              />
            </span>
          </div>
          <div class="flex">
            <p class="contents">직무</p>
            <span class="substance">Frontend Developer</span>
          </div>
          <div class="flex">
            <p class="contents">총 경력</p>
            <span class="substance">1년2개월</span>
          </div>
        </div>
      </div>
      <!-- </FadeIn> -->
      <article>
        <FadeIn :mode="'right'">
          <h2>UI/UX를 항상 생각합니다.</h2>
          <p>
            아무리 기능이 좋아도 사용자가 사용하기 어렵다면 그 가치를 떨어뜨릴
            수 있습니다.
            <br />
            기능을 구현하는 것 뿐만 아니라 사용자가 편리하게 사용할 수 있는
            UI/UX를 항상 생각하며 개발합니다.
          </p>
        </FadeIn>
        <FadeIn :mode="'right'">
          <h2>소통을 중요시합니다.</h2>
          <p>
            개발자는 혼자서 일하는 것이 아닙니다.
            <br />
            그저 생각에만 머무르지 않고 생각을 표현하고, 팀원들과의 소통을 통해
            더 나은 서비스를 만들어 나갑니다.
          </p>
        </FadeIn>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap">
          <ContentsSkillCard
            color="red"
            icon="heroicons:user-group"
            wording="Communication"
            content="
          소통을 좋아합니다.
          "
          />
          <ContentsSkillCard
            color="green"
            icon="heroicons:device-phone-mobile"
            wording="UI/UX"
            content="
          유저의 편의성을 추구합니다.
          "
          />

          <ContentsSkillCard
            color=" blue"
            icon="heroicons:cube"
            wording="Components"
            content="
          재사용성을 추구합니다"
          />
          <ContentsSkillCard
            color="#FFD700"
            icon="heroicons:code-bracket"
            wording="Code"
            content="
            코딩을 즐깁니다."
          />
        </div>
      </article>
    </template>
  </ContentsContainer>
</template>

<style scoped lang="scss">
  @import 'assets/styles/index.scss';

  .flex {
    display: flex;
    flex-wrap: wrap;

    .contents {
      display: flex;
      flex: 1 1 1rem;
    }

    .substance {
      display: flex;

      @include mobile {
        justify-content: flex-end;
      }

      justify-content: flex-start;

      flex: 1 1 1rem;
      word-break: keep-all;
    }
  }

  .me {
    @include mobile {
      grid-column-gap: 0;
      grid-template-columns: repeat(1, 1fr);
    }

    display: grid;

    grid-gap: 2rem;
    grid-template-columns: repeat(3, 1fr);

    img {
      width: 100%;
      height: auto;
    }

    .me-content {
      display: flex;
      flex-flow: column;

      grid-column: span 2 / span 2;

      div {
        display: flex;
        align-items: center;
      }

      p {
        // width: 20rem;
        display: flex;
        padding-right: 1rem;
        font-weight: 700;
        white-space: nowrap;
      }

      span {
        display: flex;
        font-size: 1.6rem;
      }
    }
  }

  article {
    display: flex;
    flex-flow: column;

    gap: 3rem;

    h2 {
      font-size: 2rem;
      font-weight: 700;
    }

    p {
      margin-top: 1rem;
      font-size: 1.5rem;
    }
  }

  .flip-card {
    @include mobile {
      display: none;
    }
  }
</style>
