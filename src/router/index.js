import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/mall/home",
    name: "MallHome",
    component: () => import("../views/mall/home.vue"),
  },
  {
    path: "/mall/shop",
    name: "MallShop",
    component: () => import("../views/mall/shop.vue"),
  },
  {
    path: "/promotion/fast-buy",
    name: "PromotionFastBuy",
    component: () => import("../views/promotion/fast-buy.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
