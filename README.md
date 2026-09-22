# Ratio — brand website

The marketing site for Ratio, the LLB learning game. Next.js 16 (App Router), React 19, Motion, GSAP (ScrollTrigger + SplitText) and Lenis. Every page is statically prerendered.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Deploy to Vercel

1. Push this folder to a Git repository (GitHub, GitLab or Bitbucket).
2. In Vercel: **Add New → Project**, import the repo. Framework preset: Next.js. No build settings to change.
3. Environment variables (Project → Settings → Environment Variables):
   - `NEXT_PUBLIC_SITE_URL` — your real domain, e.g. `https://ratio.app` (used in metadata, sitemap and social cards).
   - `NEXT_PUBLIC_ANALYTICS=1` — only after you enable **Web Analytics** in the Vercel project. It is cookie-free, so no banner is needed.
4. Add your domain under Project → Settings → Domains.

## Before going live

- **Email:** `lib/site.ts` → `email` is a placeholder (`hello@ratio.app`). Every form and mailto link reads from it.
- **Founder portrait:** `app/about/page.tsx` has a monogram placeholder. Drop a photo into `public/` and swap the `.founder-frame` for an `<img>`.
- **Privacy and terms:** `/privacy` and `/terms` are marked drafts and set to `noindex`. Replace them with reviewed text before collecting any data.
- **Legal demo content:** the in-line games and the practice duel use items adapted from the Crime lesson drafts (v0.1.0). They are labelled "pending lawyer review" on the page. Remove that label only once the source lessons have `reviewedBy` set.
- **Domain and trade mark:** the PRD still lists the UKIPO and App Store checks for "Ratio" as open.

## Where things live

| Path | What |
| --- | --- |
| `lib/site.ts` | Name, URL, email, nav, analytics switch, `pageMeta()` helper |
| `lib/content.ts` | All copy that is data: references (verified DOIs), mechanics, principles, modules, demo items, duel questions |
| `styles/tokens.css` | Colour tokens (light, dark, and "moment" sections that stay dark in both) |
| `components/motion/` | Lenis smooth scroll, SplitText reveals, cursor, magnetic and tilt, page-curtain transitions |
| `components/screens/` | The app's screens rebuilt in HTML inside an iPhone frame |
| `components/demos/` | Five playable in-line games and the three-round practice duel |
| `components/home/` | Home page sections |
| `public/press/` | Icon PNGs, SVGs and the zip offered on the press page |
| `public/og/` | Social cards (1200×630) |

## Motion and accessibility

- Honours **Reduce Motion** everywhere: GSAP work runs inside `gsap.matchMedia("(prefers-reduced-motion: no-preference)")`, Motion uses `reducedMotion="user"`, Lenis and the custom cursor switch off, and the horizontal lesson scroll becomes a vertical stack.
- Theme follows the system, with a three-way toggle (Auto, Light, Dark) stored in `localStorage`.
- The custom cursor only appears on fine pointers. Touch devices keep native behaviour.
- Forms are plain mailto links: nothing is stored by the site.
