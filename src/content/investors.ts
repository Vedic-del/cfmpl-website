/**
 * The SEBI investor and regulatory layer. For investor-facing material,
 * statutory and regulatory documents take precedence over marketing copy.
 * Where a document URL is not known it is null, and the page says so plainly.
 */

export type Doc = { title: string; detail?: string; href: string | null };

const CFML_FILES = "https://www.cfml.in/_files/ugd/";

export const regulatorySections = [
  { id: "charter", title: "Investor Charter" },
  { id: "complaints", title: "Investor Complaints Data" },
  { id: "grievances", title: "Grievance Redressal" },
  { id: "documents", title: "Offer Documents & Track Record" },
  { id: "policies", title: "Policies" },
  { id: "filings", title: "Statutory Filings" },
] as const;

export const charterCategories = [
  "Initial and follow-on public offers, including offers for sale",
  "Rights issues",
  "Qualified institutional placements",
  "Preferential issues",
  "SME initial and follow-on public offers, including offers for sale",
  "Buyback of securities",
  "Delisting of equity shares",
  "Substantial acquisition of shares and takeovers",
  "Public issue of debt securities",
  "Private placement of non-convertible securities",
  "Issue of non-convertible redeemable preference shares",
] as const;

// FLAG: the charter PDF URL is not in the source pack.
export const charterDocument: Doc = { title: "Investor Charter — Merchant Bankers", href: null };

export const grievance = {
  document: {
    title: "Investor Grievance Redressal — Merchant Banking Activities",
    href: `${CFML_FILES}d5c8f1_1d9c751cfa7f4fd8bb86f416dc887dab.pdf`,
  } satisfies Doc,
  // FLAG: spelling reproduced exactly as it appears on the grievance PDF. Confirm the mailbox exists.
  grievanceEmail: "investor.grivenace@cfml.in",
  customerCareEmail: "customer.care@cfml.in",
  address: "2nd Floor, Wakefield House, Sprott Road, Ballard Estate, Mumbai 400 038",
  contacts: [
    {
      level: "First point of contact",
      name: "Ms. Nikita Somaiya",
      title: "Compliance Officer",
      email: "compliance@cfml.in",
      phone: "+91 22 2269 6944",
      ext: "219",
    },
    {
      level: "Escalation",
      name: "Mr. R. Ramnath",
      title: "President, Investment Banking & Equity Capital Markets",
      email: "r.ramnath@cfml.in",
      phone: "+91 22 2269 6944",
      ext: "221",
    },
  ],
  sebi: {
    scores: { label: "SEBI SCORES", href: "https://scores.sebi.gov.in/" },
    // FLAG: SEBI's Online Dispute Resolution portal is a standard intermediary disclosure; compliance to confirm.
    odr: { label: "SMART ODR", href: "https://smartodr.in/" },
  },
} as const;

export type ComplaintRow = {
  source: string;
  broughtForward: number | null;
  received: number | null;
  resolved: number | null;
  pending: number | null;
};
export type ComplaintPeriodRow = Omit<ComplaintRow, "source"> & { period: string };
export type ComplaintsData = {
  monthLabel: string;
  monthly: readonly ComplaintRow[];
  monthlyTrend: readonly ComplaintPeriodRow[];
  annualTrend: readonly ComplaintPeriodRow[];
};

const blank = { broughtForward: null, received: null, resolved: null, pending: null };

/**
 * FLAG: figures not supplied. The structure is the one SEBI's November 2021
 * circulars prescribe for merchant bankers; the cells render as em-dashes until
 * the compliance officer provides the numbers. Must be updated by the 7th of
 * the following month.
 */
export const complaintsData: ComplaintsData = {
  monthLabel: "August 2026",
  monthly: [
    { source: "Directly from investors", ...blank },
    { source: "SEBI (SCORES)", ...blank },
    { source: "Other sources, if any", ...blank },
    { source: "Grand Total", ...blank },
  ],
  monthlyTrend: [
    "August 2026",
    "July 2026",
    "June 2026",
    "May 2026",
    "April 2026",
    "March 2026",
  ].map((period) => ({ period, ...blank })),
  annualTrend: ["2025–26", "2024–25", "2023–24", "2022–23", "2021–22"].map((period) => ({
    period,
    ...blank,
  })),
};

// FLAG: offer documents currently hosted are not enumerated in the source pack.
export const offerDocuments: readonly Doc[] = [];

// FLAG: track-record file URLs are not in the source pack. Titles are as listed on cfml.in.
export const publicIssueTrackRecord: readonly Doc[] = [
  { title: "Track Record — SME IPO: AAA Technologies Limited", href: null },
  { title: "Track Record of Public Issues — II", href: null },
  { title: "Track Record of Public Issues — III", href: null },
];

// FLAG: policy PDF URLs are not in the source pack.
export const policies: readonly Doc[] = [
  { title: "Related Party Transaction Policy", href: null },
  { title: "Terms and Conditions for Appointment of Independent Directors", href: null },
];

// FLAG: MGT-7 URLs for 2021 and 2022 are not in the source pack.
export const statutoryFilings: readonly Doc[] = [
  { title: "Annual Return — FY 2024–25", detail: "Form MGT-7A", href: `${CFML_FILES}d5c8f1_59bf665f462c45a089ed1fec95a64433.pdf` },
  { title: "Annual Return — FY 2023–24", detail: "Form MGT-7A", href: `${CFML_FILES}d5c8f1_e1e552a0bda440d1ba21e5a4e50b21d6.pdf` },
  { title: "Annual Return — FY 2022–23", detail: "Form MGT-7A", href: `${CFML_FILES}d5c8f1_e3a6547c585849ce8138cb4bf68899d4.pdf` },
  { title: "Annual Return — FY 2021–22", detail: "Form MGT-7", href: null },
  { title: "Annual Return — FY 2020–21", detail: "Form MGT-7", href: null },
];

export const offerDocumentsDisclaimer = [
  "This section hosts offer documents of companies for whose issues CFM, or its affiliates, act or have acted as Lead Manager or Book Running Lead Manager. They are hosted to comply with Regulation 26(1) of the SEBI (Issue of Capital and Disclosure Requirements) Regulations, 2018, as amended.",
  "The material is for information only. It may not be copied, redistributed or forwarded, and in particular may not be forwarded to any person in the United States or to any US address. It is not an offer to sell, or a solicitation of an offer to buy, any securities.",
  "This section is intended only for residents of India. Access may be restricted by law in other jurisdictions. The securities have not been and will not be registered under the US Securities Act of 1933 and may not be offered or sold in the United States absent registration or an applicable exemption.",
  "CFM does not represent that the material is complete or current. Potential investors should read the prospectus or red herring prospectus, including its risk factors, before making an investment decision, and should not rely on any draft red herring prospectus for that purpose.",
  "Documents transmitted electronically may be altered in transmission. CFM accepts no liability for any such alteration, for the accuracy, timeliness or completeness of the material, or for any disruption to this website. Applications made contrary to this disclaimer may be rejected.",
] as const;

export const offerDocumentsConfirmation = [
  "I am a resident of India.",
  "I have read and understood the disclaimer above.",
  "I am entitled to receive this information under the laws of my jurisdiction.",
] as const;

export const trackRecordDisclaimer = [
  "This information is published pursuant to SEBI Circular No. CIR/MIRSD/1/2012 dated 10 January 2012. It is not a recommendation, an offer or a solicitation, and is not legal, regulatory, accounting or tax advice. It is not an advertisement and is not an indicator of future performance.",
  "The data is drawn from several sources, including BSE, NSE, issuer websites, annual reports and databases such as Capital Market. CFM has not independently verified it, and users should verify its adequacy, accuracy and completeness for themselves. CFM does not undertake to update it except where required by law or regulation.",
] as const;

export const investorCareNote =
  "The interests of investors are paramount to us. Any complaint can be sent to customer.care@cfml.in, and we will work to resolve it.";
