import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{path: '/',
	name: 'main',
	component: () => import('@/components/pages/MainPage.vue')},
	{path: '/instruction',
	name: 'instruction',
	component: () => import('@/components/pages/InstructionPage.vue')},
	{path: '/game',
	name: 'game',
	component: () => import('@/components/pages/GamePage.vue')},
	{path: '/profile',
	name: 'profile',
	component: () => import('@/components/pages/ProfilePage.vue')},	
	{path: '/users',
	name: 'users',
	component: () => import('@/components/pages/UsersPage.vue')},
	{path: '/chat',
	name: 'chat',
	component: () => import('@/components/pages/ChatPage.vue')},
	{path: '/records',
	name: 'records',
	component: () => import('@/components/pages/RecordsPage.vue')},
]

const router = createRouter ({
	history: createWebHistory(process.env.BASE_URL),
	routes
})
	
export default router