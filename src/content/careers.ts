/** Life at CFM and careers, from the event gallery and careers sections of cfml.in. Photographs are in imagery.ts. */

export const culture = {
  intro:
    "A close-knit team working on corporate finance transactions across India, from Mumbai, New Delhi, Chennai and Ahmedabad.",
  values: [
    { title: "Learning", body: "Every transaction teaches something new, and we make time to pass that knowledge on." },
    { title: "Asking questions", body: "We expect people to ask why, and to look for a better way of structuring a deal." },
    { title: "Working together", body: "Transactions involve the whole team, so we rely on one another." },
    { title: "Developing people", body: "We invest in the people who join us and help them build their careers." },
  ],
} as const;

export const qualities = [
  "Drive and ambition",
  "Integrity and commitment",
  "Attention to detail",
  "Independent thinking",
  "Teamwork",
  "Strong domain knowledge",
  "A focus on the client",
  "A focus on results",
] as const;

export type Role = { title: string; location: string; practice: string };

// Open positions. An empty list shows a "no open positions" message.
export const openRoles: readonly Role[] = [
  { title: "AVP / VP — Debt Syndication", location: "Mumbai — Ballard Estate", practice: "Corporate Advisory" },
  { title: "Accounts Manager", location: "Mumbai — Fort", practice: "Finance" },
];

export const howToApply = {
  email: "hr@cfml.in",
  asks: [
    "Your CV",
    "Your academic qualifications",
    "Your work experience",
    "A short note on why you would be a good fit",
  ],
} as const;
