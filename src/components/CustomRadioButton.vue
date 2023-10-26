<template>
  <body>
    <label><input type="radio" name="btn" /></label>
    <label><input type="radio" name="btn" /></label>
  </body>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #111;
  flex-direction: column;
}
input[type="radio"] {
  position: relative;
  width: 120px;
  height: 40px;
  margin: 10px;
  outline: none; /* 모든 외각선 속성을 한꺼번에 지정 */
  background: #111;
  appearance: none; /* 운영체제테마에 따라 플랫폼별 스타일로 UI 요소를 표시 */
  cursor: pointer;
  border-radius: 20px;
  box-shadow: -5px -5px 20px rgba(255, 255, 255, 0.1),
    5px 5px 10px rgba(0, 0, 0, 1), inset -2px -2px 5px rgba(255, 255, 255, 0.1),
    inset 2px 2px 5px rgba(0, 0, 0, 0.5), 0 0 0 2px #1f1f1f;
  transition: 0.5s;
}
input[type="radio"]:checked {
  /* :checked : 선택했거나 on 상태인 라디오, 체크박스, 옵션 요소를 나타남 */
  /* 사용자가 요소를 체크했거나 선택한 경우 활성화되고, 체크나 선택을 해제하는 경우 비활성화 */
  background: #20b7ff;
}
input[type="radio"]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 40px;
  background: linear-gradient(to top, #000, #555);
  border-radius: 20px;
  box-shadow: 0 0 0 1px #232323;
  transform: scale(0.98, 0.96);
  transition: 0.5s;
}
input[type="radio"]:checked::before {
  left: 40px;
}
input[type="radio"]::after {
  content: "";
  position: absolute;
  left: 65px;
  top: 50%;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #555;
  transition: 0.5s;
}
input[type="radio"]:checked::after {
  left: calc(65px + 40px);
  background: #63cdff;
  box-shadow: 0 0 5px #63cdff, 0 0 15px #63cdff, 0 0 30px #63cdff;
}
</style>
