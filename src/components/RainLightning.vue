<template>
  <body>
    <div class="container">
      <div class="cloud" ref="cloud"></div>
    </div>
  </body>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  setup() {
    const cloud = ref<HTMLDivElement | null>(null);
    const rain = () => {
      if (cloud.value) {
        const drop = document.createElement("div");
        drop.classList.add("drop");
        cloud.value.appendChild(drop);
        setTimeout(() => {
          if (cloud.value) {
            cloud.value.removeChild(drop);
          }
        }, 2000);
      }
    };
    let intervalId: number;
    onMounted(() => {
      intervalId = setInterval(rain, 20);
    });
    onUnmounted(() => {
      clearInterval(intervalId);
    });
    return { cloud };
  },
});
</script>

<style scoped>
* {
  margin: -8px;
  box-sizing: border-box;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 723px;
  background: #1b1b1b;
}
.container {
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.container .cloud {
  position: relative;
  width: 320px;
  height: 100px;
  border-radius: 100px;
  filter: drop-shadow(8px 8px 0 #0005);
  animation: animateCloud 2s steps(1) infinite;
}
@keyframes animateCloud {
  0% {
    filter: drop-shadow(8px 8px 0 #0001) drop-shadow(0 0 0 #fff) brightness(1);
  }
  95% {
    filter: drop-shadow(8px 8px 0 #0001) drop-shadow(0 0 50px #fff)
      brightness(10);
  }
}
.container .cloud::before {
  content: "";
  position: absolute;
  top: -50px;
  left: 40px;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: #484f59;
  box-shadow: 90px -10px 0 30px #484f59;
}
.container .cloud::after {
  content: "";
  position: absolute;
  inset: 0;
  background: #484f59;
  border-radius: 100px;
}
.container .cloud .drop {
  position: absolute;
  top: 0;
  background: #05a2eb;
  width: 2px;
  height: 10px;
  transform-origin: bottom;
  animation: animate 2s linear infinite;
}
@keyframes animate {
  0% {
    transform: translateY(0) scaleY(1);
  }
  70% {
    transform: translateY(360px) scaleY(1);
  }
  80% {
    transform: translateY(360px) scaleY(0.2);
  }
  100% {
    transform: translateY(360px) scaleY(0.2);
  }
}
</style>
