# CFMPL website

The website for Chartered Finance Management Private Limited (cfml.in), built as a sibling of
cfmarc.in — same type system, same section grammar, same voice, one different hue.

## Running it locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site written to ./out — 21 routes
npm run lint
npm run typecheck
```

## How it is published

The site is built as plain static files and published to **GitHub Pages** by the workflow in
`.github/workflows/deploy.yml`. Every push to `main` rebuilds and republishes it automatically,
usually within two minutes. Hosting is free: GitHub Pages and Actions cost nothing for a public
repository, and no payment method is attached.

**It is published as a preview.** Every page carries a `noindex` instruction, so the preview cannot
be indexed by search engines or compete with the live site. To go live, change
`NEXT_PUBLIC_SITE_STAGE` in the workflow from `preview` to `production` — see `src/lib/site.ts`.

Because there is no server, the enquiry form does not send mail itself: it validates the enquiry
and opens the visitor's own email application, addressed to the firm, with a one-click copy for
people on webmail.

## How it is organised

- `src/content/` — **all copy and every fact.** Pages never hard-code text. If a number, name or
  address is wrong, it is wrong in exactly one file here.
- `src/components/` — one job each. `Section` + `SectionHeading` enforce the house grammar
  (eyebrow → display heading broken across lines → light body → arrow link).
- `src/app/` — one folder per route, all pre-rendered at build time.

## The rules this build follows

- **Type:** Figtree (display) over Spline Sans 300 (body). No serif.
- **Colour:** one hue, `#636555`, sampled from the wordmark, plus tints and shades. Nothing else.
- **Mandala:** the logo, the home hero, the process diagram, the favicon, the 404. Nowhere else.
- **Numbers:** always carry their basis and period.
- **CFMPL advises** on stressed-asset resolution. CFM ARC resolves. Never collapse the two.

## Motion

Scroll reveals, metric count-ups, the hero sequence and the process diagram run on
`transform`/`opacity` only, and every one of them is disabled under `prefers-reduced-motion`.
