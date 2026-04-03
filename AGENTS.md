# jdbrinton.com — Personal Website of Joel D. Brinton

Personal website and blog for Joel D. Brinton, a physicist and engineer. The site showcases research interests, open-source hardware/software projects, organizations, blog posts, and contact information.

**Live site:** https://jdbrinton.com

## Tech Stack

- **Framework:** SvelteKit 2 with Svelte 5 (runes mode enforced for all project files)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite`, with `@tailwindcss/forms` and `@tailwindcss/typography` plugins
- **Fonts:** Google Fonts — Sora (display/headings) and Source Sans 3 (body). Material Symbols Outlined for icons.
- **Build:** Vite 7, fully static output via `@sveltejs/adapter-static` (prerender = true globally)
- **Deployment:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`), deploys from `master` branch
- **Domain:** `jdbrinton.com` (configured via `CNAME` and `static/CNAME`)
- **Formatter:** Prettier with `prettier-plugin-svelte` and `prettier-plugin-tailwindcss`

## Project Structure

```
src/
├── app.html              # HTML shell: Google Fonts, Material Symbols, dark mode init script
├── app.d.ts              # SvelteKit type stubs
├── lib/
│   ├── index.ts          # $lib entry (currently empty)
│   ├── assets/
│   │   └── favicon.svg
│   └── components/
│       ├── NavBar.svelte       # Top nav with desktop/mobile menu and dark mode toggle
│       ├── Footer.svelte       # Copyright + privacy/terms links
│       └── SidebarLayout.svelte # Reusable sidebar + main content layout (used by section layouts)
└── routes/
    ├── +layout.svelte    # Root layout: imports CSS, renders NavBar/Footer, favicon links
    ├── +layout.ts        # Sets prerender = true for all routes
    ├── layout.css        # Tailwind v4 config: theme tokens, base styles, dark mode variant
    ├── +page.svelte      # Home page: hero, site organization flow, philosophy, placeholders
    ├── blog/             # Blog section (SidebarLayout)
    ├── contact/          # Contact: social links, FormSubmit form, email puzzle, OnlyFans joke
    ├── cv/               # CV (placeholder)
    ├── history/          # History (placeholder)
    ├── organizations/    # Organizations: JDBC, Benchmigo, OSPW, QGIL
    ├── privacy/          # Privacy policy (prose)
    ├── projects/         # Projects section (SidebarLayout)
    ├── research/         # Research section (SidebarLayout)
    ├── resources/        # Resources section (SidebarLayout)
    └── terms/            # Terms of service (prose)
static/
├── CNAME               # GitHub Pages custom domain
├── robots.txt          # Allow all crawlers
├── site.webmanifest    # PWA manifest
└── assets/             # Social media SVG icons (LinkedIn, GitHub, YouTube, Bluesky, etc.)
```

## Routing & Layouts

All pages are static (no `+server` routes). Four sections use `SidebarLayout` with their own `+layout.svelte`:

| Section | Sidebar items | Subpages |
|---------|--------------|----------|
| `/blog` | All Posts, Rocks and Feathers | `rocks-and-feathers` |
| `/research` | Overview + 4 topics | `electric-hypersonic-spaceplane`, `skyhook`, `personal-mri`, `optical-lattice-clock` |
| `/projects` | Overview + 6 projects | `terminate-logic`, `bigpine-remote-camera`, `shhiii-found-it`, `bumper-to-bumper`, `dalibor-display`, `be-done-with-it-passives` |
| `/resources` | Overview, Page 1, Page 2 | `page1`, `page2` |

Top-level pages without sidebar: `/`, `/contact`, `/organizations`, `/cv`, `/history`, `/privacy`, `/terms`

The NavBar links are defined in `NavBar.svelte` as a `links` array: Home, Resources, Research, Projects, Organizations, History, CV, Blog, Contact.

## Styling Conventions

- **Accent color palette:** Indigo-based, defined as `--color-accent-50` through `--color-accent-700` in `layout.css`
- **Dark mode:** Class-based (`.dark` on `<html>`), toggled via NavBar button, persisted in `localStorage`. Flash-prevention script in `app.html`.
- **Typography:** Headings use `font-display` (Sora), body uses `font-body` (Source Sans 3). Long-form content pages use Tailwind `prose` class.
- **Card pattern:** Bordered cards (`rounded-lg border border-gray-200 p-5`) with hover accent transition, used consistently for link lists across the site.
- **Icons:** Material Symbols Outlined (`<span class="material-symbols-outlined">`) on the home page; inline SVGs elsewhere (NavBar, Footer, Contact).
- **Layout widths:** `max-w-6xl` for nav/footer/sidebar sections, `max-w-4xl` for full-width content pages.
- **All styling is utility-class-based** — no separate component CSS files.

## External Integrations

- **FormSubmit.co** — Contact form POSTs to `https://formsubmit.co/ajax/...` with JSON payload
- **YouTube embed** — iframe on `shhiii-found-it` project page
- **GitHub repos** — Multiple project pages link to `github.com/jdbrinton/*`
- **Social profiles** — LinkedIn, GitHub, YouTube, Bluesky, Threads, Instagram, X, Facebook (on Contact page)
- **External orgs** — jdbrinton.consulting, benchmigo.com, ospw.org, qgil.org (Organizations page)

No analytics, cookies, or tracking (stated in privacy policy). Only client-side storage is `localStorage` for dark mode theme preference.

## Component Architecture

- `NavBar.svelte` — Uses `$app/stores` `page` for active link highlighting; Svelte 5 `$state` for `mobileOpen` and `dark`; `$effect` for dark mode init
- `SidebarLayout.svelte` — Accepts `items: NavItem[]` via `$props()`, uses `$page.url.pathname` for active state, renders `{@render children()}`
- `Footer.svelte` — Static, no props or state
- All page components use Svelte 5 runes (`$state`, `$props`, `$effect`) — not legacy Svelte 4 syntax

## Content Status

Many pages are still placeholders or "coming soon":
- **Placeholder pages:** `/cv`, `/history`, `/resources/page1`, `/resources/page2`
- **Coming soon content:** Research subpages (skyhook, personal-mri, optical-lattice-clock), Topics of Interest on home page, Book and Show List, Investing section
- **Complete content:** Home page structure, Contact page, Organizations page, all 6 project subpages, blog post (rocks-and-feathers), Privacy policy, Terms of service, electric-hypersonic-spaceplane (draft)

## Build & Dev Commands

```sh
npm run dev        # Start dev server
npm run build      # Production build to build/
npm run preview    # Preview production build
npm run check      # TypeScript + Svelte type checking
npm run lint       # Prettier check
npm run format     # Prettier write
```

## Deployment

GitHub Actions workflow triggers on push to `master` or manual dispatch. Uses Node 22, runs `npm ci && npm run build`, then deploys `build/` to GitHub Pages. The current working branch is `rev2` — merges to `master` trigger deployment.

## Conventions for AI Agents

- Use **Svelte 5 runes** syntax (`$state`, `$props`, `$effect`, `$derived`) — never Svelte 4 `export let`, `$:`, etc.
- Use **Tailwind utility classes** inline — no external CSS files per component.
- Follow the established **card pattern** for new link lists and navigable items.
- New section pages with subpages should use `SidebarLayout` with a section `+layout.svelte`.
- Keep `prerender = true` — this is a fully static site with no server-side logic.
- Image assets go in `static/assets/`. Component-imported assets go in `src/lib/assets/`.
- Page titles follow the pattern `"Page Name - Joel D. Brinton"` (set via `<svelte:head>`).
- Respect dark mode: always include `dark:` variants for colors and backgrounds.
- The accent color is accessed via `accent-*` utilities (e.g., `text-accent-600`, `bg-accent-50`).
