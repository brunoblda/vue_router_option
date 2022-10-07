import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostsView from '@/views/PostsView.vue'
import PostView from '@/views/PostView.vue' 

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/hello',
    name: 'Hello',
    component: () => import('@/views/HelloView.vue')
  },
  {
    path: '/posts',
    name: 'Posts',
    component: PostsView, 
    children: [
      {
      path: 'new',
      name: 'NewPost',
      component: () => import('@/views/NewPost.vue')
      },
      {
      path: ':id',
      name: 'Post',
      component: PostView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
