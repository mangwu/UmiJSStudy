import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index', name: '主页' },
    { path: '/hello', component: '@/pages/Hello/index', name: '你好' },
    { path: '/posts', component: '@/pages/Posts/index', name: '文章' },
    { path: '/foo', component: '@/pages/Foo/index', name: 'Foo' },
  ],
  fastRefresh: {},
  layout: {
    title: 'UMI APP',
  },
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:3000/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
