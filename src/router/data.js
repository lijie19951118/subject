export default [
	{
		title: '首页',
		path: '/',
		children: [
			{
				title: '首页',
				path: '/'
			},
		]
	},
	{
		title: 'JS',
		path: '/js',
		children: [
			{
				title: '操作符：+',
				path: '/js/operator/add'
			},
			{
				title: '数据类型',
				path: '/js/dataType'
			},
		]
	},
	{
		title: '动画',
		path: '/animation',
		children: [
			{
				title: 'API',
				path: '/animation/api'
			},
			{
				title: '贝塞尔曲线',
				path: '/animation/bezierCurve'
			},
		]
	},
	{
		title: 'VUE',
		path: '/vue',
		children: [
			{
				title: '平滑移入指令',
				path: '/vue/smoothEntry'
			},
			{
				title: '命令式组件',
				path: '/vue/imperative'
			},
		]
	},
	{
		title: 'CSS',
		path: '/css',
		children: [
			{
				title: '粘性布局',
				path: '/css/sticky'
			},
			{
				title: '字重',
				path: '/css/fontWeight'
			},
		]
	},
	{
		title: 'NodeJs',
		path: '/nodejs',
		children: [
			{
				title: '验证码登录',
				path: '/nodejs/loginCaptcha'
			},
			{
				title: '文件上传/下载',
				path: '/nodejs/upload'
			},
		]
	},
]