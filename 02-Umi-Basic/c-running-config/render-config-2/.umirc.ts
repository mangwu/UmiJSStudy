import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/post', component: '@/pages/post/index', name: '文章' },
  ],
  fastRefresh: {},
  // 使用ant-layout
  layout: {
    
  },
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:3000/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
