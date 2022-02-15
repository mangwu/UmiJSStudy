import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/login', component: '@/pages/Login/index' },
  ],
  fastRefresh: {},
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:3000/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
