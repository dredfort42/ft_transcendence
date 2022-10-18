import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainPage from '@/components/pages/MainPage.vue'

const routes: Array<RouteRecordRaw> = [
	{path: '/',
	name: 'main',
	component: MainPage},
	{path: '/posts',
	name: 'Posts',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	component: () => import(/* webpackChunkName: "about" */ '@/components/pages/PostsPage.vue')},
	{path: '/posts/:id',
	name: 'PostsID',
	component: () => import(/* webpackChunkName: "about" */ '@/components/pages/AboutPostPage.vue')},
	{path: '/store',
	name: 'Store',
	component: () => import(/* webpackChunkName: "about" */ '@/components/pages/StoreTestPage.vue')},
	{path: '/composition',
	name: 'Composition',
	component: () => import(/* webpackChunkName: "about" */ '@/components/pages/CompositionTestPage.vue')},
	{path: '/bootstrap',
	name: 'bootstrap',
	component: () => import(/* webpackChunkName: "about" */ '@/components/pages/BootstrapPage.vue')},
]

const router = createRouter ({
	history: createWebHistory(process.env.BASE_URL),
	routes
})
	
export default router