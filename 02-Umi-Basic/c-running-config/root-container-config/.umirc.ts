import { defineConfig } from 'umi';
import { theme } from './src/theme/index';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  theme,
});
