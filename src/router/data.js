import { routes } from './index.js';
import { House, VideoPlay, Link, View, DataAnalysis, Monitor } from "@element-plus/icons-vue";

console.log(routes)
const list = [
	{
		title: '首页',
		path: '/',
		children: [],
		icon: House
	},
	{
		title: '动画',
		path: '/animation',
		children: [],
		icon: VideoPlay
	},
	{
		title: 'VUE',
		path: '/vue',
		children: [],
		icon: View

	},
	{
		title: 'JS',
		path: '/js',
		children: [],
		icon: Monitor

	},
	{
		title: 'CSS',
		path: '/css',
		children: [],
		icon: DataAnalysis

	},
	{
		title: 'NodeJs',
		path: '/nodejs',
		children: [],
		icon: Link

	},
];
list.forEach(item => {
	routes.forEach(value => {
		if ('/' + value.path.split('/')[1] === item.path) {
			item.children.push({
				title: value.meta?.title,
				path: value.path
			})
		}
	})
})

export default list