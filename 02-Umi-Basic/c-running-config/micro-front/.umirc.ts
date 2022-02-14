import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    // 通过路由方式配置添加
    { name: 'app-1', icon: 'smile', path: '/app-1', microApp: 'app-1' },
    { name: 'app-2', icon: 'smile', path: '/app-2', microApp: 'app-2' },
  ],
  fastRefresh: {},
  // 注册子应用
  qiankun: {
    master: {
      apps: [
        {
          name: 'app-1',
          entry: '//localhost:8001',
        },
        {
          name: 'app-2',
          entry: '//localhost:8002',
        },
        // 通过组件方式导入
        {
          name: 'app-3',
          entry: '//localhost:8003',
        }
      ],
    },
  },
  layout: {},
});
