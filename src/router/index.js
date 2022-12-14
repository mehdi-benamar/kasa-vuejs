import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogementView from '../views/LogementView.vue'
import Error from "../views/Error.vue"
import About from "../views/About.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/logement/:id([a-z0-9]{8})',
      name: 'logement',
      component: LogementView,
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/error-404',
      name: 'error',
      component: Error
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: "error-404"
    }
  ]
})

export default router
