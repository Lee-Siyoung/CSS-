<template>
  <div class="asdf">
    <li @click="ColorPicker">ColorPicker</li>
    <li @click="InfiniteSlideshow">InfiniteSlideshow</li>
    <li @click="GlowingButton">GlowingButton</li>
    <li @click="CustomRadioButton">CustomRadioButton</li>
    <li @click="TransformiconsRadio">TransformiconsRadio</li>
    <li @click="DropdownMenu">DropdownMenu</li>
    <li @click="RainLightning">RainLightning</li>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();

    const ColorPicker = () => {
      router.push("/ColorPicker");
    };
    const InfiniteSlideshow = () => {
      router.push("/InfiniteSlideshow");
    };
    const GlowingButton = () => {
      router.push("/GlowingButton");
    };
    const CustomRadioButton = () => {
      router.push("/CustomRadioButton");
    };
    const TransformiconsRadio = () => {
      router.push("/TransformiconsRadio");
    };
    const DropdownMenu = () => {
      router.push("/DropdownMenu");
    };
    const RainLightning = () => {
      router.push("/RainLightning");
    };

    return {
      ColorPicker,
      InfiniteSlideshow,
      GlowingButton,
      CustomRadioButton,
      TransformiconsRadio,
      DropdownMenu,
      RainLightning,
    };
  },
});
</script>
<style scoped>
.asdf {
  height: 100vh;
}
</style>
