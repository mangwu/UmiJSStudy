import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      name: '主页',
      icon: 'smile',
      title: '主页',
    },
    {
      path: '/hello',
      component: '@/pages/Hello/index',
      name: 'Hello',
      icon: 'smile',
      title: '你好',
    },
    {
      path: '/foo',
      component: '@/pages/Foo/index',
      name: 'Foo',
      icon: 'smile',
      title: 'Foo页面',
    },
  ],
  fastRefresh: {},
  layout: {
    title: 'UMI APP',
  },
});
