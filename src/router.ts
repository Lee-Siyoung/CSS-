import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ColorPicker from "./components/ColorPicker.vue";
import HomeView from "./components/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: HomeView },
  { path: "/ColorPicker", component: ColorPicker },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
