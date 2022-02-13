import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/hello', component: '@/pages/hello/index', exact: false },
  ],
  fastRefresh: {},
});
