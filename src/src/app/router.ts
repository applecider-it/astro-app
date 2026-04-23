import { createRouter, createWebHashHistory } from 'vue-router'

export function createMyRouter() {
  return createRouter({
    history: createWebHashHistory(),
    routes: [
      { path: '/', component: () => import('./pages/Home.vue') },
      { path: '/auth', component: () => import('./pages/Auth.vue') },
      { path: '/tweet', component: () => import('./pages/Tweet.vue') },
      { path: '/comment', component: () => import('./pages/Comment.vue') },
      { path: '/development', component: () => import('./pages/Development.vue') },
    ],
  })
}