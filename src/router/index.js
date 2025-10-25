import { createRouter, createWebHistory } from 'vue-router'

import MainView from '@/views/MainView.vue'
import DownloadView from '@/views/DownloadView.vue'
import FaqView from '@/views/FaqView.vue'

const routes = [
  { path: '/', name: 'Main', component: MainView },
  { path: '/download', name: 'Download', component: DownloadView },
  { path: '/faq', name: 'FAQ', component: FaqView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router