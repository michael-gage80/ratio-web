# Launch checklist

Internal notes, moved from the README. Clear each before going live.

- **Email:** `lib/site.ts` → `email` is a placeholder (`hello@ratio.app`). Every form and mailto link reads from it.
- **Founder portrait:** `app/about/page.tsx` has a monogram placeholder. Drop a photo into `public/` and swap the `.founder-frame` for an `<img>`.
- **Privacy and terms:** `/privacy` and `/terms` are marked drafts and set to `noindex`. Replace them with reviewed text before collecting any data.
- **Legal demo content:** the in-line games and the practice duel use items adapted from the Crime lesson drafts (v0.1.0). They are labelled "pending lawyer review" on the page. Remove that label only once the source lessons have `reviewedBy` set.
- **Domain and trade mark:** the PRD still lists the UKIPO and App Store checks for "Ratio" as open.
- **Vercel:** set `NEXT_PUBLIC_SITE_URL` to the real domain, and `NEXT_PUBLIC_ANALYTICS=1` only after enabling Web Analytics in the project.
