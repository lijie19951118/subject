import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		// proxy: {
		// 	'/api': {
		// 		target: 'http://localhost:5173/',
		// 		changeOrigin: true,
		// 		rewrite: path => path.replace(/^\/api/, '')
		// 	}
		// }
	},
	plugins: [
		vue(),
		vueJsx(),
	],
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		},
	},
	build: {
		rollupOptions: {
			// https://rollupjs.org/guide/en/#outputmanualchunks
			output: {
				manualChunks: {
					'myVue': [
						'./src/page/vue/chatGPT/index.vue',
					],
				},
			},
		},
	},
})
