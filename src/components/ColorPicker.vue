<template>
  <body>
    <div class="colors">
      <span
        @click="changeColor('#1dd1a1')"
        style="--clr: #1dd1a1"
        :class="{ active: state.selectColor === '#1dd1a1' }"
      ></span>
      <span
        @click="changeColor('#ff6b6b')"
        style="--clr: #ff6b6b"
        :class="{ active: state.selectColor === '#ff6b6b' }"
      ></span>
      <span
        @click="changeColor('#2e86de')"
        style="--clr: #2e86de"
        :class="{ active: state.selectColor === '#2e86de' }"
      ></span>
      <span
        @click="changeColor('#f368e0')"
        style="--clr: #f368e0"
        :class="{ active: state.selectColor === '#f368e0' }"
      ></span>
      <span
        @click="changeColor('#ff9f43')"
        style="--clr: #ff9f43"
        :class="{ active: state.selectColor === '#ff9f43' }"
      ></span>
    </div>
    <div class="box" :style="{ background: state.selectColor }"></div>
  </body>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      selectColor: "",
    });

    const changeColor = (color: string) => {
      state.selectColor = color;
    };
    return { state, changeColor };
  },
});
</script>

<style scoped>
* {
  margin: 0; /* 요소의 바깥 여백 영역 */
  padding: 0; /* 요소의 안쪽 여백 영역 */
  box-sizing: border-box; /* 요소의 너비와 높이를 계산하는 방법 지정 */
  /* content-box : CSS 표준이 정의한 초기 기본값. width와 height 속성이 콘텐츠 영역만 포함하고 안팎 여백과 테두리는 포함하지 않음 */
  /* border-box : width 와 height 속성이 안쪽 여백과 테두리는 포함하고, 바깥 여백은 포함하지 않음 */
}
body {
  display: flex;
  /* flex : 열로 정렬하는 일차원 레이아웃 */
  /* grid :  행과 열로 정렬하는 이차원 레이아웃 */
  justify-content: center;
  /* 브라우저가 콘텐츠 항목 사이와 주변의 공간을 플렉스 컨테이너에서는 주축, 그리드 컨테이너에서는 인라인축을 기준으로 정렬 */
  align-items: center;
  /* 직계 하위 항목에 대한 값을 그룹으로 설정, 플렉스 컨테이너에서는 교차축(주축에 수직), 그리드 컨테이너에서는 그리드 영역 내 블록 축의 항목을 정렬 */
  min-height: 100vh; /* 요소의 최소 높이 설정 */
  background: #1f1f1f; /* 색상, 이미지, 원점 및 크기, 반복 방법 등 모든 배경 스타일 속성을 한 번에 설정 */
  gap: 100px; /* 행과 열 사이의 간격 설정 */
}
.colors {
  position: relative; /* 문서에서 요소가 배치되는 방식 설정 */
  /* static : 기본값 */
  /* relative : 요소를 원래 위치에서 벗어나게 배치  */
  /* absolute : 문서상에서 독립되어 앞뒤에 나온 요소와 상호작용 안함 */
  /* fixed : 배치기준이 부모나 자신이 아닌 뷰포트, 즉 브라우저 전체화면 */
  /* sticky : 브라우저 화면을 스크롤링할 때 좋음 */
  padding: 30px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* 플렉스 컨테이너 내의 아이템을 배치할 때 사용 */
  background: #28292b;
  box-sizing: 0 10px 30px rgba(0, 0, 0, 0.25);
  border-radius: 10px; /* 요소 테두리 경계의 꼭짓점을 둥글게 만듬 */
}
.colors span {
  position: relative;
  width: 50px; /* 요소의 너비 */
  height: 20px; /* 요소의 높이 */
  border-radius: 20px;
  background: #1f1f1f;
  margin: 20px;
  cursor: pointer; /* 요소 위에 마우스 커서가 올라갔을 때 보여줄 모양을 지정 */
}
.colors span::before {
  /* ::before : 가상요소(선택자에 추가되며 존재하지 않는 요소를 존재하는 것처럼 부여) */
  /* ::before : 요소의 컨텐츠 시작 부분에 생성된 콘텐츠를 추가 */
  content: ""; /* ::before, ::after와 꼭 함께 쓰이는 가짜 속성, HTML 문서에 정보로 포함되지 않은 요소를 CSS에서 새롭게 생성시켜줌 */
  position: absolute;
  left: 0; /* 위치가 지정된 요소의 가로 위치를 지정 */
  width: 20px;
  height: 20px;
  background: var(
    --clr
  ); /* var() : 사용자 지정 속성 또는 css 변수의 값을 다른 속성의 값으로 지정할 때 */
  border-radius: 20px;
  transition: 0.5s; /* 상태 변화에 동반하여 변경되는 CSS 프로퍼티 값에 의한 표시의 변화를 부드럽게 하기 위해 애니메이션 속도를 조절 */
  /* :hover와 같은 가상 클래스 선택자(Pseudo-Classes) 또는 JavaScript의 부수적인 액션에 의해 발동 */
  scale: 0.8; /* 2d 평면에서 요소의 크기를 조정하는 변환 */
  opacity: 0.25; /* 요소의 불투명도 설정, 1일수록 불투명 */
}
.colors span:hover::before {
  /* :hover : 의사 클래스(선택자에 추가하는 키워드로, 선택한 요소가 특별한 상태여야 만족) */
  /* :hover : 사용자의 커서(마우스 포인터)가 요소 위에 올라가 있을때 */
  left: 10px;
  opacity: 1;
  scale: 1;
}
.box {
  position: relative;
  width: 200px;
  height: 200px;
  background: #28292b;
  border-radius: 10px;
  transition: 0.5s;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25); /* 요소의 프레임 주위에 그림자 효과 추가 */
  /* 2개 값 제공 : 해당 값은 <offset-x>및 <offset-y>값으로 해석 */
  /* 3개 값 제공 :  <blur-radius> */
  /* 4개 값 제공 : <spread-radius> */
}
.colors span.active::before {
  left: 30px;
  opacity: 1;
  scale: 1.25;
  box-shadow: 0 0 10px var(--clr), 0 0 20px var(--clr), 0 0 50px var(--clr);
}
</style>
