export type NavItem = { href: string; label: string };

/**
 * Primary navigation. CFM has no investors of its own, so there is no
 * Investors section; the SEBI-mandated disclosures live on one Regulatory page
 * reached from the footer.
 */
export const primaryNav: readonly NavItem[] = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/leadership", label: "Leadership & Governance" },
  { href: "/life-at-cfm", label: "Life at CFM" },
];

export const primaryAction: NavItem = { href: "/contact", label: "Contact Us" };

export const footerNav = {
  firm: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/services#transactions", label: "Selected Transactions" },
    { href: "/leadership", label: "Leadership & Governance" },
    { href: "/life-at-cfm", label: "Life at CFM" },
    { href: "/life-at-cfm#careers", label: "Careers" },
    { href: "/contact", label: "Contact Us" },
  ],
  regulatory: [
    { href: "/regulatory", label: "Regulatory Information" },
    { href: "/regulatory/offer-documents", label: "Offer Documents" },
    { href: "/regulatory/public-issues-track-record", label: "Track Record of Public Issues" },
    { href: "/disclaimer", label: "Disclaimer" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
} as const;
