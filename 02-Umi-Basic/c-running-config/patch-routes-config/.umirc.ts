import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: '/hello',
      component: '@/pages/Hello/index',
      name: 'hello',
      icon: 'smile',
    },
  ],
  fastRefresh: {},
  layout: {
    title: 'UMI APP',
    layout: 'top',
  }, // 使用ant-pro-layout
});
