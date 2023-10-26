<template>
  <body>
    <a href="#" style="--clr: #1e9bff"><span>Button</span> <i></i></a>
    <a href="#" style="--clr: #6eff3e"><span>Button</span> <i></i></a>
    <a href="#" style="--clr: #ff1867"><span>Button</span> <i></i></a>
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
  font-family: "Poppins", sans-serif;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #27282c;
  flex-direction: column;
  gap: 50px;
}
a {
  position: relative;
  background: #fff;
  color: #fff;
  text-decoration: none; /* 텍스트 장식용 선을 추가. none는 선 삭제 */
  text-transform: uppercase; /* 요소의 텍스트의 문자들을 표시하는 방법 */
  /* uppercase : 모든 문자를 대문자로 변환 */
  /* lowercase : 모든 문자를 소문자로 변환 */
  /* none : 모든 문자의 대소문자가 변경되는 것을 방지 */
  /* full-width : 문자(주로 표의 문자 및 라틴 문자)를 정사각형 안에 강제로 작성하여 일반적인 동아시아 문자(예: 중국어 또는 일본어)로 정렬 */
  font-size: 1.5em;
  letter-spacing: 0.1em; /* 글자 사이의 간격 조절 */
  font-weight: 400;
  padding: 10px 30px;
  transition: 0.5s;
}
a:hover {
  background: var(--clr);
  color: var(--clr);
  box-shadow: 0 0 35px var(--clr);
  letter-spacing: 0.25em;
}
a:before {
  content: "";
  position: absolute;
  inset: 2px;
  background: #27282c;
}
a span {
  position: relative;
  z-index: 1;
}
a i {
  position: absolute;
  inset: 0;
  display: block; /* block : 블록 상자를 생성하여 일반 흐름에 있을 때 요소 앞뒤에 줄 바꿈을 생성 */
}
a i::before {
  content: "";
  position: absolute;
  top: 0;
  left: 80%;
  width: 10px;
  height: 4px;
  background: #27282c;
  transform: translateX(-50%) skewX(325deg); /* skew() : 평면에서 요소를 기울이는 변환 */
  /* skewX() : 2D 평면에서 요소를 수평 방향으로 기울이는 변환 */
  /* skewY() : 2D 평면에서 요소를 수직 방향으로 기울이는 변환 */
  transition: 0.5s;
}
a:hover i::before {
  width: 20px;
  left: 20%;
}
a i::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 20%;
  width: 10px;
  height: 4px;
  background: #27282c;
  transform: translateX(-50%) skewX(325deg);
  transition: 0.5s;
}
a:hover i::after {
  width: 20px;
  left: 80%;
}
</style>
