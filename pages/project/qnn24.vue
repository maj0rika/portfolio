<script setup lang="ts">
  const modal = useModal()
</script>

<template>
  <ProjectContainer>
    <template v-slot:name>QNN24 리뉴얼 22.02. - 22.10.</template>
    <template v-slot:introduction>
      뉴스 플랫폼 서비스 PHP에서 Nuxt 마이그레이션 작업 및 리뉴얼 작업
    </template>
    <template v-slot:features>
      vue3, nuxt3, daisyUI, tailwindCss, pinia
    </template>
    <template v-slot:contents>
      <div class="flex-box" style="gap: 0px">
        <p>- 기존 PHP로 작업된 오래된 서비스를 Vue 기반 Nuxt로 전환</p>
        <p>
          - 재사용 가능한 컴포넌트 설계, Composition API를 통한 가독성 높은 코드
          구현, Pinia를 통한 상태관리
        </p>
        <p>- PG연동, 본인인증, Google Adsense, AWS 경험</p>
        <p>
          - 클라이언트 니즈로부터 AWS S3 이미지 업로드 방식 lambda를 통한
          방식에서 Signed Url 방식으로 개선, 이미지 용량 제한 3Mb 에서
          제한없음으로 개선
        </p>
      </div>
      <div class="flex-box center">
        <ProjectCard :flow="'row'">
          <template v-slot:img>
            <img
              @click="
                modal.open('COMMENT', {
                  content: '/_nuxt/assets/images/logipasta/미리보기.gif',
                })
              "
              src="~/assets/images/logipasta/미리보기.png"
              alt="image"
            />
          </template>
          <template v-slot:content>
            <div class="flex-box">
              <h2>스킨</h2>
              <p>스킨 변경사항을 미리보기 할수있는 편의성 제공</p>
              <p>클릭으로 해당 부분 이미지 변경이 바로 가능하도록 적용</p>
              <p>
                변경사항이 실시간으로 반영되어 고객이 변경된 부분을 바로
                인식할수 있도록 제공
              </p>
              <p>기존 대비 고객문의 50%이상 감소</p>
            </div>
          </template>
        </ProjectCard>
        <ProjectCard :flow="'row'">
          <template v-slot:img>
            <img
              @click="
                modal.open('COMMENT', {
                  content: '/_nuxt/assets/images/logipasta/팝업.gif',
                })
              "
              src="~/assets/images/logipasta/팝업.png"
              alt="image"
            />
          </template>
          <template v-slot:content>
            <div class="flex-box">
              <h2>커스텀 팝업기능</h2>
              <p>관리자가 직접 공지사항 팝업을 작성 할수있는 기능</p>
              <p>색상, 이미지, 링크, 여백등 다양한 커스텀 기능 제공</p>
              <p>미리보기를 제공하여 공지사항 작성에 용이하게 제작</p>
              <p>api와 toastUi editor를 활용하여 서비스페이지에 전달</p>
            </div>
          </template>
        </ProjectCard>
        <ProjectCard :flow="'row'">
          <template v-slot:img>
            <img
              @click="
                modal.open('COMMENT', {
                  content: '/_nuxt/assets/images/logipasta/주문UI.gif',
                })
              "
              src="~/assets/images/logipasta/주문UI.png"
              alt="image"
            />
          </template>
          <template v-slot:content>
            <div class="flex-box">
              <h2>주문내역 UI 리뉴얼</h2>
              <p>기존에 없던 자세히 기능 추가</p>
              <p>토글을 통해 자세히 보기와 간단히 보기 변경</p>
              <p>주문내역에서 거래처 등록 가능하게 기능 추가</p>
            </div>
          </template>
        </ProjectCard>
        <ProjectCard :flow="'row'">
          <template v-slot:img>
            <img
              @click="
                modal.open('COMMENT', {
                  content: '/_nuxt/assets/images/logipasta/요금계산.gif',
                })
              "
              src="~/assets/images/logipasta/요금계산.png"
              alt="image"
            />
          </template>
          <template v-slot:content>
            <div class="flex-box">
              <div class="flex-box">
                <h2>요금 테스트 기능 추가</h2>
                <p>
                  관리자가 설정한 요금체계로 동작하는지 확인할 수 있는 테스트
                  페이지
                </p>
                <p>다양한 설정들이 설정되었는지 궁금한 니즈에서 시작</p>
                <!-- <p>주문내역에서 거래처 등록 가능하게 기능 추가</p> -->
              </div>
            </div>
          </template>
        </ProjectCard>
        <div class="flex-box"><p style="font-size: 3.2rem">배운점</p></div>
      </div>
    </template>
  </ProjectContainer>
</template>

<style scoped lang="scss">
  @import 'assets/styles/index.scss';

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

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>
