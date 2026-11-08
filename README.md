# CFMPL website

The website for Chartered Finance Management Private Limited (cfml.in), built as a sibling of
cfmarc.in — same type system, same section grammar, same voice, one different hue.

## Running it locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site written to ./out
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
- `src/components/` — one job each. `Section` + `SectionHeading` give every section the same shape:
  a small label that names the section, a short statement heading, then the content.
- `src/app/` — one folder per route, all pre-rendered at build time.

## The rules this build follows

- **Type:** Figtree (display) over Spline Sans 300 (body). No serif.
- **Colour:** one hue, `#636555`, sampled from the wordmark, plus tints and shades. Nothing else.
- **Mandala:** the logo, the home hero and the favicon. Nowhere else.
- **Photography:** symbolic images (public domain / CC0) are printed in the house hue with `Plate`;
  photographs of the team stay in natural colour. Local images live in `public/images` as
  `name-640/1080/1920.webp` — see `src/content/imagery.ts`.
- **Moved addresses** (`/careers`, `/how-we-work`, `/services/<practice>`) serve small forwarding pages,
  because GitHub Pages cannot send redirects.
- **Numbers:** always carry their basis and period.
- **CFMPL advises** on stressed-asset resolution. CFM ARC resolves. Never collapse the two.

## Motion

Three layers only, following the taste skill (`design-taste-frontend`):

- **Entrance, once on load.** Each hero's heading rises out of a mask, the lede and buttons fade up
  and the photograph settles (`.intro-mask`, `.intro`, `.intro-settle` in `globals.css`). Pure CSS.
- **One dealt moment per page**, from the kit in `public/assets/moments/` (served unchanged; do not
  edit those files), mounted by `src/components/Moments.tsx`:
  - Home: `photo-chapters` (the history, Kolkata 1991 to four cities today)
  - Services: `pinned-chapters` (the three practices)
  - About and Leadership: `word-highlight` (one statement lights up word by word)
  - Life at CFM: `picture-develops` (the team photograph develops like a print)

  A moment's section must be a direct child of `<main>` and keep the kit's class names.
- **Hover and press.** Buttons (`.btn`) lift 1px and press on click, links draw an underline
  (`.link-draw`), arrows move 3px (`.m-arrow`), linked cards lift 2px (`.m-card`), photographs zoom
  1.03 inside their frame (`.m-zoom`) and symbolic photographs take some colour back.

No scroll fades, parallax, tickers, count-ups or progress lines. Everything is visible without
JavaScript and all motion switches off under `prefers-reduced-motion`.
