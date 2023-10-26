<template>
  <body>
    <div class="container">
      <p>Are you Like This?</p>
      <label>
        <input type="radio" name="yesNo" />
        <span class="check"></span>Yes
      </label>
      <label>
        <input type="radio" name="yesNo" />
        <span class="cross"></span>No
      </label>
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
@import url("https://fonts.googleapis.com/css?family=Ubuntu:300;400;500;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #382f45;
}
.container {
  position: relative;
  display: flex;
  flex-direction: column;
}
p {
  color: #fff;
  font-size: 2em;
  margin-bottom: 10px; /* 요소의 아래쪽에 바깥 여백 영역을 설정 양수값은 인접 요소와 거리를 넓히고 음수 값은 거리를 좁힌다 */
}
label {
  position: relative;
  margin: 5px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 2em; /* 폰트 크기 지정 */
  color: #fff;
}
label input {
  appearance: none;
  display: none;
}
label span {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 15px; /* 요소의 오른쪽에 바깥 여백 영역을 설정 양수값은 인접 요소와 거리를 넓히고 음수 값은 거리를 좁힌다 */
  transition: 0.5s;
}
label span::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #fff;
  box-shadow: 0 -27px 0 #fff;
  transition: 0.5s;
}
label input:checked ~ span.check::before {
  background: #0f0;
  box-shadow: 0 0 0 transparent;
}
label input:checked ~ span.cross::before {
  background: #f00;
  box-shadow: 0 0 0 transparent;
  transform: rotate(-45deg) translate(10px, -9px);
}
label span::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: #fff;
  box-shadow: 27px 0 0 #fff;
  transition: 0.5s;
}
label input:checked ~ span.check::after {
  height: 50%;
  background: #0f0;
  box-shadow: 0 0 0 transparent;
}
label input:checked ~ span.check {
  transform: rotate(-45deg) translate(7px, -7px);
}
label input:checked ~ span.cross::after {
  background: #f00;
  box-shadow: 0 0 0 transparent;
  transform: rotate(-45deg) translate(10px, 10px);
}
</style>
