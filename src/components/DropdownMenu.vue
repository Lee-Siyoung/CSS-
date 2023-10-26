<template>
  <body>
    <div class="action">
      <div class="profile" @click="menuToggle">
        <img src="../assets/DropdownMenu/cat.jpg" />
      </div>
      <div class="menu" :class="{ active: state.isActive }">
        <h3>Someone Famous<br /><span>Website Designer</span></h3>
        <ul>
          <li v-for="item in menuItems" :key="item.text">
            <img :src="item.icon" /><a href="#"> {{ item.text }} </a>
          </li>
        </ul>
      </div>
    </div>
  </body>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      isActive: false,
    });

    const menuItems = [
      { icon: "../assets/DropdownMenu/account.png", text: "My Profile" },
      { icon: "../assets/DropdownMenu/edit.png", text: "Edit Profile" },
      { icon: "../assets/DropdownMenu/email.png", text: "Inbox" },
      { icon: "../assets/DropdownMenu/setting.png", text: "Settings" },
      { icon: "../assets/DropdownMenu/help.png", text: "Help" },
      { icon: "../assets/DropdownMenu/logout.png", text: "Logout" },
    ];

    const menuToggle = () => {
      state.isActive = !state.isActive;
    };

    return { state, menuItems, menuToggle };
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900");
* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}
body {
  background: #ffccbc;
  height: 723px;
}
.action {
  position: fixed;
  top: 20px;
  right: 30px;
}
.action .profile {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden; /* 요소의 콘텐츠가 너무 커서 요소의 블록 서식 맥락에 맞출 수 없을 때의 처리법 지정 */
  /* visible : 콘텐츠를 자르지 않으며 안쪽 여백 상자 밖에도 그릴 수 있음 */
  /* hidden : 콘텐츠를 안쪽 여백 상자에 맞추기 위해 잘라냄. 스크롤바를 제공하지 않고, 스크롤할 방법(드래그, 마우스 휠 등)도 지원하지 않지만 코드를 사용해 스크롤 할 수 있음 */
  /* clip : hidden과 마찬가지로, 콘텐츠를 안쪽 여백 상자에 맞춰 자름. 그러나 clip은 코드를 사용한 스크롤링도 방지하므로 어떠한 스크롤도 불가능 */
  /* scroll : 콘텐츠를 실제로 잘라냈는지 여부를 따지지 않고 항상 스크롤바를 노출하므로 내용의 변화에 따라 스크롤바가 생기거나 사라지지 않음 */
  /* auto : 사용자 에이전트가 결정. 콘텐츠가 안쪽 여백 상자에 들어간다면 visible과 동일하게 보이나, 새로운 블록 서식 문맥을 생성. 데스크톱 브라우저의 경우 콘텐츠가 넘칠 때 스크롤바를 노출 */
  /* overlay : auto와 동일하게 동작하지만, 스크롤바가 공간을 차지하는 대신 콘텐츠 위에 위치 */
  cursor: pointer;
}
.action .profile img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.action .menu {
  position: absolute;
  top: 80px;
  right: -10px;
  padding: 10px 20px;
  background: #fff;
  width: 200px;
  box-sizing: 0 5px 25px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  transition: 0.5s;
  visibility: hidden;
  opacity: 0;
}
.action .menu.active {
  top: 80px;
  visibility: visible;
  opacity: 1;
}
.action .menu::before {
  content: "";
  position: absolute;
  top: -5px;
  right: 28px;
  width: 20px;
  height: 20px;
  background: #fff;
  transform: rotate(45deg);
}
.action .menu h3 {
  width: 100%;
  text-align: center;
  padding: 20px 0;
  font-weight: 500;
  font-size: 18px;
  color: #555;
  line-height: 1.2em; /* 선 상자의 높이 설정. 일반적으로 텍스트 줄 사이의 거리를 설정하는 데 사용 */
}
.action .menu h3 span {
  font-size: 14px;
  color: #cecece;
  font-weight: 400;
}
.action .menu ul li {
  list-style: none; /* 모든 목록 스타일 속성을 한번에 설정 */
  padding: 10px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05); /* 요소의 위쪽 테두리 설정 */
  display: flex;
  align-items: center;
}
.action .menu ul li img {
  max-width: 20px; /* 요소의 최대 너비 설정 */
  margin-right: 10px;
  opacity: 0.5;
  transition: 0.5s;
}
.action .menu ul li:hover img {
  opacity: 1;
}
.action .menu ul li a {
  display: inline-block; /* inline-block : 요소는 마치 단일 인라인 상자인 것처럼 주변 콘텐츠와 함께 흐르는 블록 상자를 생성 */
  text-decoration: none;
  color: #555;
  font-weight: 500;
  transition: 0.5s;
}
.action .menu ul li:hover a {
  color: #ff5d94;
}
</style>
