/** Life at CFM and careers, from the event gallery and careers sections of cfml.in. Photographs are in imagery.ts. */

export const culture = {
  intro:
    "A close-knit team working on corporate finance transactions across India, from Mumbai, New Delhi, Chennai and Ahmedabad.",
  values: [
    { title: "Every deal teaches something.", body: "We make time to pass on what each transaction teaches." },
    { title: "Ask why.", body: "We expect people to question a structure and look for a better one." },
    { title: "No one closes a deal alone.", body: "Transactions involve the whole team, so we rely on one another." },
    { title: "Careers are built here.", body: "We invest in the people who join us and help them grow." },
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
  { title: "AVP / VP — Debt Syndication", location: "Mumbai — Ballard Estate", practice: "Transaction Advisory" },
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
