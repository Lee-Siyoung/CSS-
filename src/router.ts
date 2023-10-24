import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ColorPicker from "./components/ColorPicker.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/ColorPicker", component: ColorPicker },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
