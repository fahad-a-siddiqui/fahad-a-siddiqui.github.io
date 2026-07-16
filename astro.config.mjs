// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages user site (served at the domain root), so `site` is the full
  // URL and no `base` path is needed. If you ever move to a project site under
  // a subpath, add e.g. `base: '/repo-name'`.
  site: 'https://fahad-a-siddiqui.github.io',
  integrations: [icon()],
});
