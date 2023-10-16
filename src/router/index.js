import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'inicio',
        component: () => import('../views/InicioView.vue')
    },
    {
        path: '/galeria',
        name: 'galeria',
        component: () => import('../views/ErrView.vue')
    },
    {
        path: '/contato',
        name: 'contato',
        component: () => import('../views/ErrView.vue')
    },
    {
        path: '/faq',
        name: 'faq',
      component: () => import('../views/ErrView.vue')
    },
  {
    path: '/politica_de_privacidade',
    name: 'politica',
    component: () => import('../views/ErrView.vue')
  },
  {
    path: '/termos_de_servico',
    name: 'termos',
    component: () => import('../views/ErrView.vue')
  }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
