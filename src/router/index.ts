import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { topPadding: true },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: { topPadding: true },
    },
    {
      path: '/special-orders',
      name: 'special',
      component: () => import('../views/SpecialOrder.vue'),
      meta: { topPadding: true },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue'),
      meta: { topPadding: false },
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue'),
      meta: { topPadding: false },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFund',
      component: () => import('../views/NotFound.vue'),
      meta: { topPadding: true },
    },
  ],
})

export default router
