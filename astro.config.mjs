// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Site estático: o Cloudflare Pages serve a pasta `dist` gerada por `npm run build`.
export default defineConfig({
  // TODO: trocar pelo domínio final (ex.: https://japagarage.com.br)
  site: 'https://japa-garage-suspensoes.pages.dev',
});
