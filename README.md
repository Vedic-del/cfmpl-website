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

One rhythm across the site (a slow, decelerating ease), animating only `transform`, `opacity` and
`clip-path`:

- **Page heroes** load in with CSS keyframes: the heading rises from behind a mask and the photograph
  opens like a curtain. No JavaScript is needed, and the end state is the normal page.
- **Scroll reveals** (`MotionProvider`): blocks rise in, headings unmask, photographs unveil upward,
  the milestone rail draws across, and figures count up.
- **Parallax** on the large photographs (`<Plate parallax={0.1}>`).
- **Ticker** of the firm's services on the home page; it pauses on hover.
- **Hover:** symbolic photographs take their colour back.
- **Reading progress** line under the header (CSS scroll timeline, where the browser supports it).
- **Page transitions** between routes (React `ViewTransition`, in `app/template.tsx`).

Everything is visible without JavaScript and all of it switches off under `prefers-reduced-motion`.
