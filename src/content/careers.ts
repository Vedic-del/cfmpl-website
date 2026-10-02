/** Careers, from the event gallery and careers sections of cfml.in. */

export const culture = {
  intro:
    "We are a close-knit team working on corporate finance transactions across India, from offices in Mumbai, New Delhi, Chennai and Ahmedabad. We value learning, asking questions and working together, and we want people who will take responsibility for their work.",
  values: [
    { title: "Learning", body: "Every transaction teaches something new, and we make time to pass that knowledge on." },
    { title: "Asking questions", body: "We expect people to ask why, and to look for a better way of structuring a deal." },
    { title: "Working together", body: "Transactions involve the whole team, so we rely on one another." },
    { title: "Developing people", body: "We invest in the people who join us and help them build their careers." },
  ],
} as const;

export const events = [
  "Off-Site 2026",
  "Team Synergy Retreat 2024",
  "International Women's Day",
  "Christmas and New Year 2023",
  "Children's Day",
  "Ahmedabad office opening",
  "First Town Hall, 5 March 2022",
] as const;

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
