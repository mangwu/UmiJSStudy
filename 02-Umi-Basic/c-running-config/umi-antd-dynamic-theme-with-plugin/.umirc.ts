import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  layout: {},
  alias: {
    src: `${__dirname}/src/`,
    helper: `${__dirname}/src/helper.js`,
    config: `${__dirname}/src/config.js`,
    models: `${__dirname}/src/models/`,
    services: `${__dirname}/src/services/`,
    utils: `${__dirname}/src/utils/`,
    assets: `${__dirname}/src/assets/`,
    components: `${__dirname}/src/components/`,
    theme: `${__dirname}/src/theme/`,
  },
});
