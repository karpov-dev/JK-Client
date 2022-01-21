import { createRouter, createWebHistory } from "vue-router";
import { middlewares } from './middlewares';
import { routes } from "./routes";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

middlewares.forEach(middleware => router.beforeEach(middleware));

export default router;
