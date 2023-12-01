import { createRouter, createWebHistory } from 'vue-router';

const pages = import.meta.glob('../src/**/page.js', {
	eager: true,
	import: 'default'
});
const indexPages = import.meta.glob('../src/**/index.vue');

const routes = Object.entries(pages).map(([path, meta]) => {
	const pageJSPath = path;
	path = path.replace('./page', '').replace('/page.js', '').replace('-', '') || '/';
	const name = path.split('/').filter(Boolean).join('-') || 'index';
	const compPath = pageJSPath.replace('page.js', 'index.vue');

	return {
		path,
		name,
		component: indexPages[compPath],
		meta
	}
});

export const router = createRouter({
	history: createWebHistory(),
	routes
})