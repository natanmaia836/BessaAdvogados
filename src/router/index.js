import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/OEscritorio',
    name: 'OEscritorio',
    component: () => import(/* webpackChunkName: "OEscritorio" */ '../views/OEscritorio.vue')
  },
  {
    path: '/Equipe',
    name: 'Equipe',
    component: () => import(/* webpackChunkName: "Equipe" */ '../views/Equipe.vue')
  },
  {
  path: '/AreasDeAtuacao',
  name: 'AreasDeAtuacao',
  component: () => import(/* webpackChunkName: "AreasDeAtuacao" */ '../views/AreasDeAtuacao.vue')
  },
  {
    path: '/Contato',
    name: 'Contato',
    component: () => import(/* webpackChunkName: "AreasDeAtuacao" */ '../views/Contato.vue')
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
