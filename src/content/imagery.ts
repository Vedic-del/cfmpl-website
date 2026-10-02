/**
 * Photography.
 *
 * Three kinds, each with its own rule:
 *
 * - The home hero: Mumbai's coastal road under construction and complete
 *   (Unsplash licence). Something unfinished becomes whole.
 * - Symbolic plates, one per idea, printed in the house hue (see `.plate` in
 *   globals.css). All are public domain / CC0, from the WordPress Photo
 *   Directory (wordpress.org/photos) and rawpixel's public-domain collection:
 *     spiral staircase — raising capital, one step on another
 *     cable-stayed pylon — many lenders carrying one load
 *     kintsugi bowl — a break repaired so the object is whole again
 *     banyan tree, Pune — a firm that put down roots and kept spreading
 *     expressway at night — the highway financings in Selected Transactions
 *     compass rose — direction, which is what a board sets
 * - The firm's own photographs of its people, from the event gallery on
 *   cfml.in. Shown in natural colour.
 *
 * Local files live in public/images as name-640/1080/1920.webp; reference them
 * here as /images/name.webp and the image loader picks the size.
 */

const u = (id: string) => `https://images.unsplash.com/photo-${id}`;

export type Photo = { src: string; alt: string };

export const imagery = {
  heroBefore: {
    src: u("1710582309002-3a677a2cbded"),
    alt: "Mumbai's coastal road under construction along the shoreline, the city skyline behind it",
  },
  heroAfter: {
    src: u("1708357997379-e55c1636e0d7"),
    alt: "A completed interchange curving along the Mumbai coast, with the city skyline beyond",
  },
  contact: {
    src: u("1710582308944-95126b0558ed"),
    alt: "An aerial view of Mumbai and the Arabian Sea",
  },
  regulatory: {
    src: u("1710582307610-089a2bd505ef"),
    alt: "An aerial view of Mumbai and its coastline",
  },

  investmentBanking: { src: "/images/ib.webp", alt: "A spiral staircase seen from above, turning upward floor by floor" },
  corporateAdvisory: {
    src: "/images/debt.webp",
    alt: "The pylon of a cable-stayed bridge, its cables fanning out against the sky",
  },
  stressedAssets: {
    src: "/images/stressed.webp",
    alt: "A ceramic bowl repaired with gold along its cracks, in the Japanese kintsugi tradition",
  },
  history: { src: "/images/history.webp", alt: "A banyan tree in Pune, its aerial roots grown into new trunks" },
  transactions: { src: "/images/transactions.webp", alt: "An expressway and interchange seen from above at night" },
  governance: { src: "/images/governance.webp", alt: "A compass rose set into a wooden deck" },

  team: { src: "/images/retreat-2024.webp", alt: "The CFM team in matching green shirts at the 2024 Team Synergy Retreat" },
  offsite: { src: "/images/offsite-2026.webp", alt: "The CFM team together at the 2026 off-site" },
} as const satisfies Record<string, Photo>;

/** The firm's own photographs, from the event gallery on cfml.in. */
export const moments: readonly (Photo & { title: string; year: string })[] = [
  {
    title: "Team Synergy Retreat",
    year: "2024",
    src: "/images/retreat-2024.webp",
    alt: "The CFM team in matching green shirts at the 2024 retreat",
  },
  {
    title: "Our First Town Hall",
    year: "2022",
    src: "/images/townhall-2022.webp",
    alt: "Colleagues smiling around a table at the firm's first town hall",
  },
  {
    title: "International Women's Day",
    year: "",
    src: "/images/womens-day.webp",
    alt: "The women of CFM together at the office on International Women's Day",
  },
  {
    title: "Christmas and New Year",
    year: "2023",
    src: "/images/christmas-2023.webp",
    alt: "Colleagues gathered on the office staircase for the Christmas celebration",
  },
  {
    title: "Lunch Celebrations",
    year: "",
    src: "/images/lunch.webp",
    alt: "Colleagues at lunch together in a restaurant",
  },
];
