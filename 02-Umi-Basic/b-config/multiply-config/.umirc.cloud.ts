import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/hello', component: '@/pages/hello/index', exact: false },
  ],
  fastRefresh: {},
});
