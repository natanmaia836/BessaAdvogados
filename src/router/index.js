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
    {
      path: '/Civel',
      name: 'Civel',
      component: () => import(/* webpackChunkName: "Civel" */ '../views/Civel.vue')
      },
      {
        path: '/Contratual',
        name: 'Contratual',
        component: () => import(/* webpackChunkName: "Contratual" */ '../views/Contratual.vue')
        },
        {
          path: '/Imobiliario',
          name: 'Imobiliario',
          component: () => import(/* webpackChunkName: "Imobiliario" */ '../views/Imobiliario.vue')
          },
          {
            path: '/Familia',
            name: 'Familia',
            component: () => import(/* webpackChunkName: "Familia" */ '../views/Familia.vue')
            },
    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
