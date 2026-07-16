/**
 * Central site data — single source of truth for identity, contact and socials.
 * Update here; every component reads from this.
 */

export const site = {
  name: 'Fahad Ahmad Siddiqui',
  role: 'Senior Software Engineer',
  location: 'Islamabad, Pakistan',
  // Used for <title>, meta description and Open Graph.
  tagline:
    'A software engineer at heart — I build and ship real products end to end, from mobile apps to the backends and business systems behind them.',
  description:
    'Portfolio of Fahad Ahmad Siddiqui — a software engineer who builds and ships products end to end across mobile, backend and business systems, with a distinctive edge in AI-native engineering.',
  // Set to your deployed URL for correct canonical/OG links.
  url: 'https://fahad-a-siddiqui.github.io',
  // IANA timezone for the live clock (PKT, UTC+5, no DST).
  timezone: 'Asia/Karachi',
  cvPath: '/cv.pdf',
} as const;

export const contact = {
  email: 'fasiddiqui00@gmail.com',
  phone: '+92 344 0518986',
  phoneHref: '+923440518986',
} as const;

/**
 * Socials. `icon` is a Simple Icons name (via astro-icon: `simple-icons:*`).
 * Add GitHub / X / others when the owner provides them (CLAUDE.md §7).
 */
export const socials = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/fahad-a-siddiqui/',
    icon: 'simple-icons:linkedin',
  },
  // { label: 'GitHub', href: 'https://github.com/…', icon: 'simple-icons:github' },
  // { label: 'X', href: 'https://x.com/…', icon: 'simple-icons:x' },
] as const;
