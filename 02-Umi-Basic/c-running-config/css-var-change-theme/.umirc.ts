import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  antd: {
    disableBabelPluginImport: true,
  },
  theme: {
    'root-entry-name': 'variable',
  },
});
