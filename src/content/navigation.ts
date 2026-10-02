export type NavItem = { href: string; label: string };

/**
 * CFM has no investors of its own, so there is no "Investors" section. The
 * SEBI-mandated disclosures live in one Regulatory section reached from the
 * footer — which is all the November 2021 circulars require ("on their
 * websites"), no dedicated page per disclosure.
 */
export const primaryNav: readonly NavItem[] = [
  { href: "/about", label: "About Us" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/leadership", label: "Leadership" },
  { href: "/life-at-cfm", label: "Life at CFM" },
  { href: "/insights", label: "Insights" },
];

export const primaryAction: NavItem = { href: "/contact", label: "Discuss a Mandate" };

export const footerNav = {
  firm: [
    { href: "/about", label: "About Us" },
    { href: "/what-we-do", label: "What We Do" },
    { href: "/how-we-work", label: "How We Work" },
    { href: "/leadership", label: "Leadership" },
    { href: "/life-at-cfm", label: "Life at CFM" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ],
  regulatory: [
    { href: "/regulatory", label: "Regulatory Information" },
    { href: "/regulatory/offer-documents", label: "Offer Documents" },
    { href: "/regulatory/public-issues-track-record", label: "Track Record of Public Issues" },
    { href: "/disclaimer", label: "Disclaimer" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
} as const;
