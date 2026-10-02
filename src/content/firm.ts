/**
 * Firm-level facts. Values marked FLAG are carried from the current cfml.in copy
 * at the client's instruction but conflict with, or are absent from, statutory
 * sources. Every FLAG is listed in CONTENT-FLAGS.md.
 */

export const firm = {
  legalName: "Chartered Finance Management Private Limited",
  formerName: "Chartered Finance Management Limited",
  shortName: "CFM",
  tagline: "thoughtful innovation",
  cin: "U99999MH1999PTC122702",
  // FLAG: registration number not in source pack. Rendered as "to be confirmed" until supplied.
  sebiRegistrationNo: null as string | null,
  sebiCategory: "Category I Merchant Banker",
  // Operations began in 1991 (confirmed by the client). The present company was
  // incorporated on 18/11/1999 per the FY23 MGT-7A — a later re-incorporation,
  // not the start of the business. Copy therefore says "since 1991" and
  // "operating since", never "incorporated in 1991".
  foundedYear: 1991,
  foundingPrinciple: "Problems carry opportunities inside them.",
  url: "https://www.cfml.in",

  phone: { display: "+91 22 4783 6944", href: "tel:+912247836944" },
  // FLAG: a second board line appears on the services and investor pages.
  phoneAlt: { display: "+91 22 2269 6944", href: "tel:+912222696944" },
  email: {
    general: "info@cfml.in",
    careers: "hr@cfml.in",
    compliance: "compliance@cfml.in",
    customerCare: "customer.care@cfml.in",
  },
  hours: [
    { days: "Monday to Friday", time: "10:00 am – 6:30 pm" },
    { days: "Banking Saturdays", time: "10:00 am – 6:30 pm" },
    { days: "Sunday", time: "Closed" },
  ],

  offices: [
    {
      role: "Registered & Corporate Office",
      city: "Mumbai",
      lines: ["2nd Floor, Wakefield House", "Sprott Road, Ballard Estate", "Mumbai 400 038, India"],
    },
    // FLAG: street addresses for the three branch offices are not in the source pack.
    { role: "Branch Office", city: "New Delhi", lines: [] as string[] },
    { role: "Branch Office", city: "Chennai", lines: [] as string[] },
    { role: "Branch Office", city: "Ahmedabad", lines: [] as string[] },
  ],

  arc: {
    name: "CFM Asset Reconstruction Private Limited",
    short: "CFM ARC",
    url: "https://www.cfmarc.in/",
    display: "cfmarc.in",
  },
} as const;

export const metrics = [
  { figure: "35+", unit: "Years", label: "In Indian corporate finance", qualifier: "operating since 1991" },
  { figure: "USD 40", unit: "Billion+", label: "Transactions arranged", qualifier: "arranged and executed over three decades" },
  { figure: "SEBI", unit: "Category I", label: "Registered merchant banker", qualifier: "licence obtained 2013" },
  { figure: "4", unit: "Offices", label: "Mumbai, Delhi, Chennai, Ahmedabad", qualifier: "headquartered at Ballard Estate, Mumbai" },
] as const;

export const timeline = [
  { year: "1991", event: "Chartered Finance Management begins operations in Kolkata." },
  { year: "1999", event: "Headquarters move to Mumbai. The New Delhi office opens." },
  { year: "2009", event: "The Chennai office opens." },
  { year: "2013", event: "CFM is registered with SEBI as a Category I Merchant Banker." },
  { year: "2016", event: "CFM sponsors CFM Asset Reconstruction, which receives its RBI licence in August." },
  // FLAG: Ahmedabad office opening appears in the events gallery without a date.
  { year: "Today", event: "Four offices, advising corporates across every major sector of the Indian economy." },
] as const;

/** How the firm's history is usually told — loan arranger to full advisory house. */
export const evolution = [
  "Loan arranger",
  "Syndicator",
  "Full-service financial advisory",
  "Sponsor of an asset reconstruction company",
] as const;

export const strengths = [
  {
    title: "Depth of knowledge",
    body: "An understanding of the finance industry and of the sector verticals our clients operate in, sharpened by research and predictive analysis.",
  },
  {
    title: "A growth mindset",
    body: "Advice aimed at putting a client's capital to work sooner, and a willingness to structure beyond the obvious answer.",
  },
  {
    title: "Relationships built over three decades",
    body: "Working relationships with banks, financial institutions and investors, built up across thirty-five years of transactions.",
  },
  {
    title: "Staying with the mandate",
    body: "Once we take a mandate, we stay with the client through the growth cycle, to conclusion.",
  },
] as const;

export const clientTypes = [
  "Government undertakings",
  "Large corporates",
  "Mid-size corporates",
  "Manufacturers",
  "Banks",
  "SMEs",
] as const;
