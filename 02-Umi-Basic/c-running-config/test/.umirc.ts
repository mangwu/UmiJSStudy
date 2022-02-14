import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    /**
     * document: ./src/pages/documents/404.ejs
     */
  ],
  exportStatic: { htmlSuffix: false },
  fastRefresh: {},
});
