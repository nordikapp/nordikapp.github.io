import { defineConfig } from 'astro/config';
import { site } from './src/site.config.ts';

export default defineConfig({
  site: `https://${site.domain}`,
  trailingSlash: 'ignore',
});
