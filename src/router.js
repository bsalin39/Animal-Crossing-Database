import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import FishiesPage from '@/views/FishiesPage.vue'
import FreshwaterFish from '@/views/FreshwaterFish.vue'
import SaltwaterFish from '@/views/SaltwaterFish.vue'
import BugsPage from '@/views/BugsPage.vue'
import ArtPage from '@/views/ArtPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/fish', name: 'Fish', component: FishiesPage  },
  { path: '/saltwater', name: 'Saltwater Fish', component: SaltwaterFish  },
  { path: '/freshwater', name: 'Freshwater Fish', component: FreshwaterFish  },
  { path: '/bugs', name: 'Critters', component: BugsPage  },
  { path: '/art', name: 'Art', component: ArtPage  },
  
 // { path: '/other', name: 'Fish', component: (Fish) => import('@/views/FishiesPage.vue') },
  //{ path: '/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
  //{ path: '/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
