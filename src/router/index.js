import { createRouter, createWebHashHistory } from 'vue-router'
import Beers from '../components/beers/Beers.vue'

const routes = [
  { path:'/', redirect: '/beers'},
  {
    path: '/beers',
    name: 'Beers',
    component: Beers
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: () => import('../components/calculator/Calculator')
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: () => import('../components/heroes/Heroes')
  },
  {
    path: '/apod',
    name: 'Apod',
    component: () => import('../components/apod/Apod')
  }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
