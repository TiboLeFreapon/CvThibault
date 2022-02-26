import { createRouter, createWebHashHistory } from 'vue-router'
import Presentation from '../view/Presentation.vue'

const routes = [
  {
    path: '/',
    name: 'Presentation',
    component: Presentation
  },
  {
    path: '/Competence',
    name: 'Competence',
    // route level code-splitting
    // this generates a separate chunk (Competence.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Competence" */ '../view/Competence.vue')
  }, 
  {
    path: '/Experience',
    name: 'Experience',
    // route level code-splitting
    // this generates a separate chunk (Experience.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Experience" */ '../view/Experience.vue')
  }, 
  {
    path: '/Formation',
    name: 'Formation',
    // route level code-splitting
    // this generates a separate chunk (Formation.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Formation" */ '../view/Formation.vue')
  },
  {
    path: '/Loisir',
    name: 'Loisir',
    // route level code-splitting
    // this generates a separate chunk (Loisir.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Loisir" */ '../view/Loisir.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
