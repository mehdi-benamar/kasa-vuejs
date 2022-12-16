import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogementView from '../views/LogementView.vue'
import Error from "../views/Error.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/logement/:id',
      name: 'logement',
      component: LogementView
    },
    {
      path: '/error-404',
      name: 'error',
      component: Error
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
