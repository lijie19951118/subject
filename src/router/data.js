import { routes } from './index.js';
import { House, VideoPlay, Link, View, DataAnalysis, Monitor } from "@element-plus/icons-vue";

// console.log(routes)
const list = [
	{
		title: '娱乐',
		path: '/recreation',
		children: [
			{
				title: '聊天室',
				path: '/recreation/chat'
			}
		],
		icon: VideoPlay
	},
	{
		title: '其他',
		path: '/example',
		children: [
			{
				title: 'sticky',
				path: '/css/sticky'
			},
			{
				title: 'smooth',
				path: '/vue/smoothEntry'
			},
			{
				title: '3D',
				path: '/css/3d'
			},
			{
				title: '图表',
				path: '/echarts/main'
			},
		],
		icon: House
	},
	// {
	// 	title: '动画',
	// 	path: '/animation',
	// 	children: [],
	// 	icon: VideoPlay
	// },
	// {
	// 	title: 'VUE',
	// 	path: '/vue',
	// 	children: [],
	// 	icon: View

	// },
	// {
	// 	title: 'JS',
	// 	path: '/js',
	// 	children: [],
	// 	icon: Monitor

	// },
	// {
	// 	title: 'CSS',
	// 	path: '/css',
	// 	children: [],
	// 	icon: DataAnalysis

	// },
	// {
	// 	title: 'NodeJs',
	// 	path: '/nodejs',
	// 	children: [],
	// 	icon: Link

	// },
];

// routes.forEach(value => {
// 	if ('/' + value.path.split('/')[1] === '/css') {
// 		list[1].children.push({
// 			title: value.meta?.title,
// 			path: value.path
// 		})
// 	}
// })

// list.forEach(item => {
// 	routes.forEach(value => {
// 		if ('/' + value.path.split('/')[1] === item.path) {
// 			item.children.push({
// 				title: value.meta?.title,
// 				path: value.path
// 			})
// 		}
// 	})
// })

export default list