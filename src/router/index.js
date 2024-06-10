import { createRouter, createWebHistory } from 'vue-router';

const pages = import.meta.glob('../../src/**/page.js', {
	eager: true,
	import: 'default'
});
const indexPages = import.meta.glob('../../src/**/index.vue');

export const routes = Object.entries(pages).map(([path, meta]) => {
	const pageJSPath = path;
	path = path.replace('../page', '').replace('/page.js', '') || '/';
	const name = path.split('/').filter(Boolean).join('-') || 'index';
	const compPath = pageJSPath.replace('page.js', 'index.vue');

	return {
		path,
		name,
		component: indexPages[compPath],
		meta
	}
});

routes.push({ path: '/:pathMatch(.*)*', redirect: '/recreation/chat', },)

// console.log(pages)
// console.log(indexPages)
// console.log(routes)

export const router = createRouter({
	history: createWebHistory(),
	routes
})