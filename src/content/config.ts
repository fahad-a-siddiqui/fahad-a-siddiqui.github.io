import { defineCollection, z } from 'astro:content';

/**
 * Projects collection — one entry per project (see CLAUDE.md §4).
 *
 * Adding a project = drop a new `.md` file in `src/content/projects/`.
 * No template edits needed: the grid on the landing page and the detail
 * page at `/projects/<slug>` are both generated from these entries.
 *
 * The markdown body (below the frontmatter) becomes the long-form writeup
 * on the detail page. Everything above renders in the tile + detail header.
 */
const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // One-liner shown on the grid tile.
      summary: z.string(),
      // Your role on the project.
      role: z.string().optional(),
      // The problem or goal the project addressed.
      problem: z.string().optional(),
      // Outcome / result — prefer concrete numbers.
      outcome: z.string().optional(),
      // Tech used, rendered as chips.
      tech: z.array(z.string()).default([]),
      // Optional external links.
      liveUrl: z.string().url().optional(),
      repoUrl: z.string().url().optional(),
      // Screenshots. Place files in src/content/projects/ (or a subfolder)
      // and reference them relative to the entry, e.g. "./screenshot.png".
      cover: image().optional(),
      // Shown on the card's placeholder tile when there's no `cover` image
      // (e.g. initiatives without screenshots). Falls back to the title.
      coverLabel: z.string().optional(),
      // By default the cover only appears on the grid card. Set true to also
      // show it as a hero image at the top of the detail page.
      showCoverOnDetail: z.boolean().default(false),
      screenshots: z
        .array(z.object({ src: image(), alt: z.string() }))
        .default([]),
      // Group this card under the "AI-Native Workflows" sub-section instead of
      // the main apps grid.
      aiNative: z.boolean().default(false),
      // Lower numbers sort first on the grid.
      order: z.number().default(99),
      // Set true to hide from the grid without deleting the entry.
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
