/** Life at CFM and careers, from the event gallery / careers page of cfml.in. */

export const culture = {
  eyebrow: "Life at CFM",
  headline: ["A Firm Small Enough", "to Learn In."],
  lede:
    "A small firm on transactions of a few hundred crore, which means no layer between you and the work. People here sit in the room when a credit is argued, and are expected to ask why. The firm is close-knit by design, with one ambition: to be the best at financial advisory in India.",
  values: [
    { title: "Learning", body: "Every mandate teaches something. We make time to pass it on." },
    { title: "Asking questions", body: "The obvious structure is rarely the right one. Asking why is part of the job." },
    { title: "Mutual support", body: "A small firm working on large transactions only works if everyone backs everyone." },
    { title: "Developing talent", body: "We invest in the people who join us, and in what they can become." },
  ],
} as const;

export const events = [
  "Off-Site 2026",
  "Team Synergy Retreat 2024",
  "International Women's Day",
  "Christmas and New Year 2023",
  "Children's Day",
  "Ahmedabad Office Inauguration",
  "First Town Hall, 5 March 2022",
] as const;

export const qualities = [
  "Drive and ambition",
  "Integrity and commitment",
  "Focus and attention to detail",
  "Creativity and independent thinking",
  "Teamwork",
  "Strong domain knowledge",
  "A client-first approach",
  "Orientation to results",
] as const;

export type Role = { title: string; location: string; practice: string };

// FLAG: roles carried from the current careers page. Confirm they are still open before launch.
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
    "A short note on why you would be the right fit",
  ],
} as const;
