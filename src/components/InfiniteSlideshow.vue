<template>
  <body>
    <div class="slideshow">
      <div class="slide" style="--i: 0">
        <h2>01<span>cat1</span></h2>
        <img src="../assets/InfiniteSlideshow/1.jpg" />
      </div>
      <div class="slide" style="--i: 1">
        <h2>02<span>cat2</span></h2>
        <img src="../assets/InfiniteSlideshow/2.jpg" />
      </div>
      <div class="slide" style="--i: 2">
        <h2>03<span>cat3</span></h2>
        <img src="../assets/InfiniteSlideshow/3.jpg" />
      </div>
      <div class="slide" style="--i: 3">
        <h2>04<span>cat4</span></h2>
        <img src="../assets/InfiniteSlideshow/4.jpg" />
      </div>
      <div class="slide" style="--i: 4">
        <h2>05<span>cat5</span></h2>
        <img src="../assets/InfiniteSlideshow/5.jpg" />
      </div>
    </div>
  </body>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    // You can add your reactive properties and methods here.
    return {};
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:200;300;400;500;600;700;800;900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif; /* 하나 이상의 글꼴 계열 이름 및 일반 계열 이름의 우선순위 목록 지정 */
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #111;
}
.slideshow {
  position: relative;
  width: 400px;
  height: 400px;
  transform-style: preserve-3d; /* 요소의 하위 항목이 3D공간에 배치되는지 or 요소 평면에서 평면화되는지 여부 설정 */
  /* flat : 요소의 하위 항목이 요소 자체의 평면에 있음 */
  /* preserve-3d : 요소의 하위 항목이 3D 공간에 배치되어야 함 */
  perspective: 1000px; /* 3D 위치의 요소에 원근감을 주기 위해 z=0 평면과 사용자 사이의 거리 결정 */
}
.slideshow .slide {
  position: absolute;
  inset: 0; /* 속성에 해당하는 약어로  top, right, bottom and/or left 속성들과 동일 */
  display: flex;
  justify-content: start;
  align-items: start;
  transform: rotateY(270deg);
  /* 요소에 회전, 크기 조절, 기울이기, 이동효과 부여 */
  /* rotateY : 요소를 변경하지 않고 y축(세로)을 중심으로 회전하는 변환 */
  /* deg : 각도 단위. 완전한 원은 360deg */
  transform-style: preserve-3d;
  animation: animate 20s linear infinite; /* 스타일에 애니메이션 적용 */
  animation-delay: calc(
    var(--i) * 2s
  ); /* clac : CSS 속성 값을 지정할 때 계산을 수행할 수 있음 */
}
@keyframes animate {
  /* @keyframes : 애니메이션 시퀀스를 따라 키프레임(또는 웨이포인트)에 대한 스타일을 정의하여 CSS 애니메이션 시퀀스의 중간 단계를 제어 */
  0% {
    transform: rotateY(270deg);
  }
  10%,
  100% {
    transform: rotateY(90deg);
  }
}
.slideshow .slide img {
  position: absolute;
  top: 0; /* 위치가 지정된 요소의 수직 위치를 지정 */
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* <img>나 <video>요소와 같은 대체 요소의 콘텐츠 크기를 조절 */
  /* contain : 대체 콘텐츠의 가로세로비를 유지하면서, 요소의 콘텐츠 박스 내부에 들어가도록 크기를 맞춤 조절 */
  /* cover : 대체 콘텐츠의 가로세로비를 유지하면서, 요소 콘텐츠 박스를 가득 채움 */
  /* fill : 요소 콘텐츠 박스 크기에 맞춰 대체 콘텐츠의 크기를 조절 */
  /* none : 대체 콘텐츠의 크기를 조절하지 않음 */
  /* scale-down : none과 contain 중 대체 콘텐츠의 크기가 더 작아지는 값을 선택 */
  border-radius: 20px;
}
.slideshow .slide h2 {
  position: relative;
  z-index: 1000; /* 위치 지정 요소와 그 자손 또는 하위 플렉스 아이템의 Z축 순서를 지정. 더 큰 z-index 값을 가진 요소가 작은 값의 요소 위를 덮음 */
  color: #fff; /* 글씨와 글씨 장식의 전경색의 값 설정 */
  font-size: 10em; /* 폰트의 크기 지정 */
  transform: rotateY(180deg) translateY(100px) translateZ(50px);
  /* translateY : 2D 평면에서 요소의 위치를 수직으로 변경 */
  /* translateZ : 3D 공간에서 Z축을 따라 요소의 위치 변경 */
  transform-style: preserve-3d;
  backface-visibility: hidden; /* 요소의 뒷면이 사용자를 향할 때 보여야 하는지 지정 */
  font-weight: 900; /* 폰트의 가중치나 굵기를 명시 */
  -webkit-text-stroke: 1px #000; /* 텍스트 문자의 획 너비와 색상 지정 */
}
.slideshow .slide h2 span {
  position: absolute;
  top: 50%;
  left: 0;
  font-size: 0.5em;
  font-weight: 500;
  transform: translate(0, 50%) translateZ(50px); /* translate : 요소의 위치를 수평 또는 수직 방향을 변경 */
  backface-visibility: hidden;
}
</style>
