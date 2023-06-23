

<script setup lang="ts">
const modal = useModal()
</script>

<template>
  <ProjectContainer>
    <template v-slot:name>로지파스타 </template>
    <template v-slot:introduction>기간 : 22.02. - 22.10.
      <br />내용 :물류,퀵 접수 온라인 전환 솔류션
      <br />참여비율 : 서비스 프론트엔드 30%, 어드민 프론트엔드 30%
    </template>
    <template v-slot:features>
      <Icon name="logos:vue" class="icon" />
      vue2, vue3
      <Icon name="logos:nuxt-icon" class="icon" />
      nuxt3
      <Icon name="devicon:vuetify" class="icon" />
      vuetify
      <Icon name="devicon:tailwindcss" class="icon" />
      tailwindCss
      <Icon name="logos:pinia" class="icon" />
      pinia
      <Icon name="vscode-icons:file-type-scss" class="icon" />
      scss
    </template>
    <template v-slot:contents>
      <div class="flex-box" style="gap: 0px; margin-top: 4rem;">
        <p>- 툴팁 및 card 형태 재사용 가능한 컴포넌트 설계 및 기능 추가</p>
        <p>- 커스텀 스킨 제작 및 기존 서비스와 연동</p>
        <p>
          - ADMIN 페이지 커스텀 스킨 설정 UIUX 개편으로 스킨 설정 관련 고객 문의
          50% 감소
        </p>
      </div>
      <div class="flex-box center">
        <ProjectCard :flow="'row'" @modalOpen="
          modal.open('COMMENT', {
            img: 'https://qnn24.s3.ap-northeast-2.amazonaws.com/1687422153961_%E1%84%86%E1%85%B5%E1%84%85%E1%85%B5%E1%84%87%E1%85%A9%E1%84%80%E1%85%B5.gif',
          })
          ">
          <template v-slot:title>
            <h2 class="clickable">커스텀 스킨 UIUX 개선 </h2>
          </template>
          <template v-slot:content="{ isShow }">
            <div class="flex-box" :class="{
              'show': isShow,
              'hide': !isShow,
            }">
              <p>- 스킨 변경사항을 미리보기 할수있는 편의성 제공</p>
              <p>- 클릭으로 해당 부분 이미지 변경이 바로 가능하도록 적용</p>
              <p>
                - 변경사항이 실시간으로 반영되어 고객이 변경된 부분을 바로
                인식할수 있도록 제공
              </p>
              <p>- 기존 대비 고객문의 50%이상 감소</p>
            </div>
          </template>
        </ProjectCard>
        <ProjectCard :flow="'row'" @modalOpen="
          modal.open('COMMENT', {
            img: 'https://qnn24.s3.ap-northeast-2.amazonaws.com/1687422173589_%E1%84%91%E1%85%A1%E1%86%B8%E1%84%8B%E1%85%A5%E1%86%B8.gif',
          })
          ">
          <template v-slot:title>
            <h2 class="clickable"> 커스텀 팝업 기능 추가</h2>
          </template>
          <template v-slot:content="{ isShow }">
            <div class="flex-box" :class="{
              'show': isShow,
              'hide': !isShow,
            }">
              <p>- api와 toastUi editor를 활용하여 서비스페이지에 전달</p>
              <p>- 관리자가 직접 공지사항 팝업을 작성 할수있는 기능</p>
              <p>- 색상, 이미지, 링크, 여백등 다양한 커스텀 기능 제공</p>
              <p>- 미리보기를 제공하여 공지사항 작성에 용이하게 제작</p>
            </div>
          </template>
        </ProjectCard>
        <ProjectCard :flow="'row'" @modalOpen="
          modal.open('COMMENT', {
            img: ' https://qnn24.s3.ap-northeast-2.amazonaws.com/1687422203409_%E1%84%8C%E1%85%AE%E1%84%86%E1%85%AE%E1%86%ABUI.gif',
          })
          ">
          <template v-slot:title>
            <h2 class="clickable">주문내역 UI 리뉴얼</h2>
          </template>
          <template v-slot:content="{ isShow }">
            <div class="flex-box" :class="{
              'show': isShow,
              'hide': !isShow,
            }">
              <p>- 기존에 없던 자세히 기능 추가</p>
              <p>- 토글을 통해 자세히 보기와 간단히 보기 변경</p>
              <p>- 주문내역에서 거래처 등록 가능하게 기능 추가</p>
            </div>
          </template>
        </ProjectCard>
        <ProjectCard :flow="'row'" @modalOpen="
          modal.open('COMMENT', {
            img: 'https://qnn24.s3.ap-northeast-2.amazonaws.com/1687422233065_%E1%84%8B%E1%85%AD%E1%84%80%E1%85%B3%E1%86%B7%E1%84%80%E1%85%A8%E1%84%89%E1%85%A1%E1%86%AB.gif',
          })
          ">
          <template v-slot:title>
            <h2>요금 테스트 기능 추가</h2>
          </template>
          <template v-slot:content="{ isShow }">
            <div class="flex-box" :class="{
              'show': isShow,
              'hide': !isShow,
            }">
              <p>
                - 관리자가 설정한 요금체계로 동작하는지 확인할 수 있는 테스트
                페이지
              </p>
              <p>- 다양한 설정들이 설정되었는지 궁금한 니즈에서 시작</p>
              <!-- <p>주문내역에서 거래처 등록 가능하게 기능 추가</p> -->

            </div>
          </template>
        </ProjectCard>
        <div class="flex-box">
          <p style="font-size: 3.2rem">배운점</p>
        </div>
      </div>
    </template>
  </ProjectContainer>
</template>

<style scoped lang="scss">
.flex-box {
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  transition: all .3s ease-in-out;

  gap: 1rem;

  &.center {
    mobile-over {
      align-items: center;
    }
  }

  & .show {
    // transform: translateY(0);
    max-height: 100vh;
    opacity: 1;
  }

  & .hide {
    overflow: hidden;
    // transform: translateY(100px);
    max-height: 0;
    opacity: 0;
  }
}

img {
  width: 100%;
  height: 100%;

  object-fit: contain;
}

.icon {
  pointer-events: none;
}

.clickable {
  transition: all .3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: $primary;
    font-weight: bold;
  }
}
</style>
