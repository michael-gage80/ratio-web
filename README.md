# Ratio

**Think like a lawyer. Learn like a game.**

Ratio is a learning game for LLB students in England and Wales. It teaches the law in short lessons, then asks you to apply it to facts you have never seen. Lessons are AI-drafted and signed off by qualified lawyers. Coming soon to iPhone.

This repository is the website. The app lives elsewhere.

## What’s here

- **Five playable games**, inline on the home page: recall first, quick check, threshold, tap the fact, and the trap.
- **A practice duel.** Three rounds against a sparring partner. The bot is labelled, and it never counts on the boards.
- **The method, with sources.** Every claim about how people learn cites a peer-reviewed study with a DOI.
- **Pages for universities, pricing, the founder and the press**, including logos, colours and boilerplate.

The demo questions come from the Crime lesson drafts. Until a lawyer has signed them off, the site labels them “pending lawyer review”.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run lint       # Biome
```

You need Node 20.9 or later. Every page is prerendered as static HTML.

Two optional environment variables go in `.env.local` (see `.env.example`):

| Variable | What it does |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | The canonical domain, used in metadata, the sitemap and social cards. |
| `NEXT_PUBLIC_ANALYTICS` | Set to `1` to turn on Vercel Web Analytics. It is cookie-free, so no banner is needed. |

## How it’s built

Next.js 16 (App Router), React 19 and TypeScript. The motion comes from Motion, GSAP (ScrollTrigger and SplitText) and Lenis. The styles are plain CSS on shared design tokens, with no framework. The type is Newsreader and IBM Plex Mono.

| Path | What |
| --- | --- |
| `lib/site.ts` | Name, URL, email, nav, and the metadata helper |
| `lib/content.ts` | Copy that is data: references, mechanics, principles, modules, demos and duel questions |
| `components/demos/` | The five games and the practice duel |
| `components/screens/` | The app’s screens, rebuilt in HTML inside an iPhone frame |
| `components/motion/` | Smooth scroll, text reveals, cursor, page transitions |
| `styles/tokens.css` | Colour tokens for light, dark, and the sections that stay dark in both |
| `public/press/` | Icons and the press kit |

To change the words, start in `lib/content.ts`.

## Principles, in code

- **Reduce Motion is honoured everywhere.** GSAP only animates when motion is allowed, Lenis and the custom cursor switch off, and the horizontal lesson scroll becomes a vertical stack.
- **Theme follows your system.** You can override it with Auto, Light or Dark.
- **Nothing is stored.** Both forms open your email app with the message filled in. The site sets no cookies.
- **Educational, not legal advice.**

## Deploy

The site is built for Vercel. Import the repository and keep the Next.js preset; there are no build settings to change. Then set the environment variables above.

Launch tasks that are still open are listed in [`docs/launch-checklist.md`](docs/launch-checklist.md).
