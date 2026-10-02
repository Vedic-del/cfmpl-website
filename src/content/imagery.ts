/**
 * Photography. All images are on Unsplash's free licence (commercial use
 * permitted, attribution not required), and all are Mumbai — the same aerial
 * set, so the art direction holds across the site. Every one is toned to the
 * brand hue at the point of use.
 *
 * The hero pairs the same stretch of coastline under construction and complete:
 * CFMPL's counterpart to CFM ARC's parched-field-to-green.
 */

const u = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const imagery = {
  heroBefore: {
    src: u("1710582309002-3a677a2cbded"),
    alt: "Mumbai's coastal road under construction along the shoreline, the city skyline behind it",
  },
  heroAfter: {
    src: u("1708357997379-e55c1636e0d7"),
    alt: "A completed interchange curving along the Mumbai coast, with the city skyline beyond",
  },
  about: {
    src: u("1710582308944-95126b0558ed"),
    alt: "An aerial view of Mumbai and the Arabian Sea",
  },
  whatWeDo: {
    src: u("1708358131361-93680cf7b4cf"),
    alt: "Elevated road interchanges over the sea at Mumbai",
  },
  trackRecord: {
    src: u("1710582307458-f1328c2a7839"),
    alt: "A new carriageway taking shape along the Mumbai waterfront",
  },
  leadership: {
    src: u("1710582999228-bf5a133c4573"),
    alt: "The towers of Mumbai's financial district seen from the air",
  },
  lifeAtCfm: {
    src: u("1710582307426-30a7448a8bbf"),
    alt: "A view across Mumbai from high in a tower",
  },
  howWeWork: {
    src: u("1708064235942-03d8a4fbbeef"),
    alt: "Mumbai's seafront and the city beyond it",
  },
  regulatory: {
    src: u("1710582307610-089a2bd505ef"),
    alt: "An aerial view of Mumbai and its coastline",
  },
} as const;

export type Photo = { src: string; alt: string };
