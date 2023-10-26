import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ColorPicker from "./components/ColorPicker.vue";
import HomeView from "./components/HomeView.vue";
import InfiniteSlideshow from "./components/InfiniteSlideshow.vue";
import GlowingButton from "./components/GlowingButton.vue";
import CustomRadioButton from "./components/CustomRadioButton.vue";
import TransformiconsRadio from "./components/TransformiconsRadio.vue";
import DropdownMenu from "./components/DropdownMenu.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: HomeView },
  { path: "/ColorPicker", component: ColorPicker },
  { path: "/InfiniteSlideshow", component: InfiniteSlideshow },
  { path: "/GlowingButton", component: GlowingButton },
  { path: "/CustomRadioButton", component: CustomRadioButton },
  { path: "/TransformiconsRadio", component: TransformiconsRadio },
  { path: "/DropdownMenu", component: DropdownMenu },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
