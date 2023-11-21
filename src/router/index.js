import { createRouter, createWebHistory } from 'vue-router'
import News from '../views/News.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'news',
      component: News 
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/post-details/:id',
      name: 'PostDetails',
      component: () => import('../views/PostDetails.vue')
    }
  ]
})

export default router
