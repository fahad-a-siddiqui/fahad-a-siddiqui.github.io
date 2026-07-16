# public/images

Local static assets served from the site root.

- **Hero photo** — lives at `src/assets/fahad.jpg` (not here) so Astro can
  optimize it. It's already wired into `src/components/Hero.astro`. To replace
  it, overwrite that file (keep the name) or update the import in Hero.astro.
- Project **screenshots** are best placed *next to their content entry* in
  `src/content/projects/` so Astro can optimize them — see `_template.md`.
  Only put images here if you need them referenced by a raw `/images/...` URL.
