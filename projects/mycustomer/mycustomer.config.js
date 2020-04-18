import {createNuxtConfig} from '../../core/util/create-nuxt-config.util.js';

export default createNuxtConfig({
  customConfig: {
    env: {
      exampleVar: 'This comes from project configuration',
    },
    plugins: [
      '~/projects/mycustomer/plugins/myplugin/myplugin.plugin.js'
    ]
  }
});
