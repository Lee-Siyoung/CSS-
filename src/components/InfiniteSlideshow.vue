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
@import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
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
  transform-style: preserve-3d;
  perspective: 1000px;
}
.slideshow .slide {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: start;
  align-items: start;
  transform: rotateY(270deg);
  transform-style: preserve-3d;
  animation: animate 20s linear infinite;
  animation-delay: calc(var(--i) * 2s);
}
@keyframes animate {
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}
.slideshow .slide h2 {
  position: relative;
  z-index: 1000;
  color: #fff;
  font-size: 10em;
  transform: rotateY(180deg) translateY(100px) translateZ(50px);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  font-weight: 900;
  -webkit-text-stroke: 1px #000;
}
.slideshow .slide h2 span {
  position: absolute;
  top: 50%;
  left: 0;
  font-size: 0.5em;
  font-weight: 500;
  transform: translate(0, 50%) translateZ(50px);
  backface-visibility: hidden;
}
</style>
