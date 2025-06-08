import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  { path: "/", component: Home },
  {
    path: "/number-theory",
    component: () => import("../views/NumberTheory.vue"),
  },
  {
    path: "/cryptography",
    component: () => import("../views/Cryptography.vue"),
  },
  { path: "/concepts", component: () => import("../views/Concepts.vue") },
  { path: "/demos", component: () => import("../views/Demo.vue") },
  { path: "/about", component: () => import("../views/About.vue") },
  // {
  //   path: "/demos/:basePath/:hash",
  //   component: () => import("../views/Result.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
