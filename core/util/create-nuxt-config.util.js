import deepmerge from 'deepmerge';
import NUXT_DEFAULT_CONFIG from '../config/nuxt-default-config';

/**
 *
 * generates nuxt config for single project
 *
 * @param config
 * @returns {{}}
 */
export function createNuxtConfig({ customConfig }) {
  return deepmerge(NUXT_DEFAULT_CONFIG, customConfig);
}
