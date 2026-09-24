# Launch checklist

Internal notes, moved from the README. Clear each before going live.

- **Email:** `lib/site.ts` → `email` is a placeholder (`hello@ratio.app`). Every form and mailto link reads from it.
- **Founder portrait:** `app/about/page.tsx` has a monogram placeholder. Drop a photo into `public/` and swap the `.founder-frame` for an `<img>`.
- **Privacy notice and terms:** `/privacy` and `/terms` hold the full documents. Every company-specific fact (company name and number, registered office, contact emails, ICO registration number, effective date) comes from `lib/legal.ts`. Anything still `null` shows on the page as a highlighted placeholder. While `legal.ready` is `false`, both pages carry a "not yet in force" banner and are kept out of search engines and the sitemap. Fill in every field, have a solicitor review both documents, then set `ready: true`.
- **Legal demo content:** the in-line games and the practice duel use items adapted from the Crime lesson drafts (v0.1.0). They are labelled "pending lawyer review" on the page. Remove that label only once the source lessons have `reviewedBy` set.
- **Domain and trade mark:** the PRD still lists the UKIPO and App Store checks for "Ratio" as open.
- **Vercel:** set `NEXT_PUBLIC_SITE_URL` to the real domain, and `NEXT_PUBLIC_ANALYTICS=1` only after enabling Web Analytics in the project.
