<script setup lang="ts">
  import imageUpload from '@/composables/signedUrl'

  const modal = useModal()

  const imgurl = ref('')

  const fileHandler = async (e: any) => {
    imgurl.value = await imageUpload(e.target.files[0])
  }
</script>

<template>
  <ProjectContainer>
    <template v-slot:name>QNN24</template>
    <template v-slot:introduction>
      <InputIconText
        :icon="{ name: 'heroicons:calendar-days', color: '#862ddf' }"
      >
        22.02. - 22.10.
      </InputIconText>
      <InputIconText
        :icon="{
          name: 'heroicons:chat-bubble-bottom-center-text',
          color: '#862ddf',
        }"
      >
        언어 전환 및 기능 추가, 유지보수
      </InputIconText>
      <InputIconText
        :icon="{
          name: 'heroicons:chart-pie',
          color: '#862ddf',
        }"
      >
        서비스페이지 프론트엔드 참여율 100%
      </InputIconText>
    </template>
    <template v-slot:features>
      <InputIconText :icon="{ name: 'logos:vue', color: '#862ddf' }">
        Vue3
      </InputIconText>
      <InputIconText :icon="{ name: 'logos:nuxt-icon', color: '#862ddf' }">
        Nuxt3
      </InputIconText>
      <InputIconText :icon="{ name: 'logos:daisyui', color: '#862ddf' }">
        daisyUI
      </InputIconText>
      <InputIconText :icon="{ name: 'devicon:tailwindcss', color: '#862ddf' }">
        TailwindCss
      </InputIconText>
      <InputIconText :icon="{ name: 'logos:pinia', color: '#862ddf' }">
        Pinia
      </InputIconText>
    </template>
    <template v-slot:contents>
      <div class="flex-box" style="gap: 0px">
        <InputIconText :icon="{ name: 'logos:pinia', color: '#862ddf' }">
          기존 PHP로 작업된 오래된 서비스를 Vue 기반 Nuxt로 전환
        </InputIconText>
        <InputIconText
          :icon="{
            name: 'heroicons:check-20-solid',
          }"
        >
          <p>
            재사용 가능한 컴포넌트 설계, Composition API를 통한 가독성 높은 코드
            구현, Pinia를 통한 상태관리
          </p>
        </InputIconText>
        <InputIconText
          :icon="{
            name: 'heroicons:check-20-solid',
          }"
        >
          <p>PG연동, 본인인증, Google Adsense, AWS 경험</p>
        </InputIconText>
        <InputIconText
          :icon="{
            name: 'heroicons:check-20-solid',
          }"
        >
          <p>
            AWS S3 이미지 업로드 방식 lambda를 통한 방식에서 Signed Url 방식으로
            개선
            <br />
            &nbsp; 이미지 용량 제한 3Mb 에서 제한없음으로 개선
          </p>
        </InputIconText>
      </div>
      <div class="flex-box center">
        <ProjectCard
          :flow="'row'"
          @modalOpen="
            modal.open('COMMENT', {
              img: 'https://qnn24.s3.ap-northeast-2.amazonaws.com/1687421862566_s3.gif',
            })
          "
        >
          <template v-slot:title>
            <h2>이미지 S3 Signed_Url 적용</h2>
          </template>
          <template v-slot:content="{ isShow }">
            <div
              class="flex-box"
              :class="{
                show: isShow,
                hide: !isShow,
              }"
            >
              <p>기존 이미지 업로드 방식의 용량제한 존재</p>
              <p>이미지 옹량을 증가시키기 위해 리서치</p>
              <p>
                signed_url 방식을 채택하여 용량제한 이슈를 해결했습니다.
                <br />
                3Mb -&gt; 제한없음
              </p>
              <p>
                TOAST UI에 연동하여 텍스트 편집과 이미지 업로드 용이하게 구현
              </p>
              <p>관리자 페이지에도 동일 기술 적용</p>
              <input
                type="file"
                @change="fileHandler"
                :style="{
                  height: '100%',
                }"
              />
              <!-- <a v-if="imgurl" :href="imgurl" target="_blank">
                <InputWaveText :text="'이미지 링크!'" :style="{
                  fontSize: '1.6rem',
                }" />
              </a>
              {{ imgurl }} -->
              <img :src="imgurl" alt="" v-if="imgurl" />
            </div>
          </template>
        </ProjectCard>
        <ProjectCard
          :flow="'row'"
          @modalOpen="
            modal.open('COMMENT', {
              img: 'https://qnn24.s3.ap-northeast-2.amazonaws.com/1687422014103_%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8C%E1%85%B3%E1%86%BC.gif',
            })
          "
        >
          <template v-slot:title>
            <h2>본인인증 연동</h2>
          </template>
          <template v-slot:content="{ isShow }">
            <div
              class="flex-box"
              :class="{
                show: isShow,
                hide: !isShow,
              }"
            >
              <p>nice 본인인증으로 성인인증 적용</p>
              <p>웹툰, 전문가 매칭 서비스 구현과 함께 적용</p>
            </div>
          </template>
        </ProjectCard>
        <ProjectCard
          :flow="'row'"
          @modalOpen="
            modal.open('COMMENT', {
              img: 'https://qnn24.s3.ap-northeast-2.amazonaws.com/1687422052188_pg.gif',
            })
          "
        >
          <template v-slot:title>
            <h2>쇼핑몰 구현</h2>
          </template>
          <template v-slot:content="{ isShow }">
            <div
              class="flex-box"
              :class="{
                show: isShow,
                hide: !isShow,
              }"
            >
              <p>자사 쇼핑 및 서드파티 쇼핑몰(farmiwel) 연동</p>
              <p>헥토파이넨셜 PG 연동</p>
              <p>장바구니 구현 및 실시간 재고 체크</p>
            </div>
          </template>
        </ProjectCard>
        <ProjectCard
          :flow="'row'"
          @modalOpen="
            modal.open('COMMENT', {
              img: 'https://qnn24.s3.ap-northeast-2.amazonaws.com/1687506002284_2023-06-23%2016.39.31.gif',
            })
          "
        >
          <template v-slot:title>
            <h2>pinia 상태관리</h2>
          </template>
          <template v-slot:content="{ isShow }">
            <div
              class="flex-box"
              :class="{
                show: isShow,
                hide: !isShow,
              }"
            >
              <img
                src="https://qnn24.s3.ap-northeast-2.amazonaws.com/1687422107216_pinia2.png"
              />
              <p>유저의 사용성을 고려하여 스켈레톤 UI와 pinia를 활용</p>
              <p>재방문시 로딩시간을 줄이기위해 데이터 pinia에서 관리</p>
              <p>불필요한 반복적인 API 통신 감소시킴</p>
            </div>
          </template>
        </ProjectCard>

        <!-- <div class="flex-box">
          <p style="font-size: 3.2rem">배운점</p>
        </div> -->
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
    transition: all 0.3s ease-in-out;

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

  // .clickable {
  //   transition: all 0.3s ease-in-out;
  //   cursor: pointer;

  //   &:hover {
  //     color: $primary;
  //     font-weight: bold;
  //   }
  // }

  p {
    word-break: normal;
    overflow-wrap: normal;
  }
</style>
