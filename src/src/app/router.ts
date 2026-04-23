import { createRouter, createWebHashHistory } from 'vue-router'

export function createMyRouter() {
  return createRouter({
    history: createWebHashHistory(),
    routes: [
      { path: '/', component: () => import('./pages/Home.vue') },
      { path: '/development', component: () => import('./pages/Development.vue') },
    ],
  })
}