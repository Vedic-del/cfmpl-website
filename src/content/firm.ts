/**
 * Firm-level facts and the firm's history, from cfml.in and facts confirmed by
 * the firm. Public copy describes the firm as having begun in 1991 ("since
 * 1991"); it does not state an incorporation date.
 */

export const firm = {
  legalName: "Chartered Finance Management Private Limited",
  formerName: "Chartered Finance Management Limited",
  shortName: "CFM",
  tagline: "thoughtful innovation",
  cin: "U99999MH1999PTC122702",
  // Shown in the top bar once added.
  sebiRegistrationNo: null as string | null,
  sebiCategory: "Category I Merchant Banker",
  foundedYear: 1991,
  url: "https://www.cfml.in",

  phone: { display: "+91 22 4783 6944", href: "tel:+912247836944" },
  // Used for the grievance-contact extensions.
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
      role: "Head Office",
      city: "Mumbai",
      lines: ["2nd Floor, Wakefield House", "Sprott Road, Ballard Estate", "Mumbai 400 038"],
    },
    { role: "Office", city: "New Delhi", lines: [] as string[] },
    { role: "Office", city: "Chennai", lines: [] as string[] },
    { role: "Office", city: "Ahmedabad", lines: [] as string[] },
  ],

  arc: {
    name: "CFM Asset Reconstruction Private Limited",
    short: "CFM ARC",
    url: "https://www.cfmarc.in/",
    display: "cfmarc.in",
  },
} as const;

/** Home page figures. Each carries its basis; none is rounded up. */
export const metrics = [
  { figure: "1991", unit: "Founded", label: "Advising Indian companies", qualifier: "began operations in Kolkata" },
  { figure: "USD 40", unit: "Billion+", label: "Transactions arranged", qualifier: "arranged and executed over three decades" },
  { figure: "SEBI", unit: "Category I", label: "Merchant banker", qualifier: "registered in 2013" },
  { figure: "4", unit: "Offices", label: "Mumbai, New Delhi, Chennai, Ahmedabad", qualifier: "head office at Ballard Estate, Mumbai" },
] as const;

/**
 * The firm's history, told chronologically.
 */
export const history = [
  "CFM began in 1991 in a small office in Kolkata, arranging loans for companies. Its founding commitment was simple: be available to clients whenever they need us, even at short notice.",
  "Arranging single loans led to syndicating them across banks and institutions, and from there to wider financial advisory. The head office moved to Mumbai, offices opened in three more cities, the firm registered with SEBI as a Category I Merchant Banker, and it sponsored an asset reconstruction company.",
  "The firm is larger than it was in 1991. The way it works has not changed: we stay available, we stay with a mandate until it is done, and we treat relationships as the foundation of the business.",
] as const;

export const timeline = [
  { year: "1991", event: "CFM begins operations in Kolkata, arranging loans for companies." },
  { year: "1999", event: "Head office moves to Mumbai. The New Delhi office opens." },
  { year: "2009", event: "The Chennai office opens." },
  { year: "2013", event: "CFM registers with SEBI as a Category I Merchant Banker." },
  { year: "2016", event: "CFM sponsors CFM Asset Reconstruction Private Limited, which receives its RBI licence in August." },
] as const;

/**
 * The founder's message, from cfml.in, edited for clarity without changing
 * its meaning.
 */
export const founderMessage = {
  paragraphs: [
    "Every problem carries an opportunity. That idea has guided CFM since I started it.",
    "I founded the firm with one aim: to be among the very best in Indian finance. We began by arranging loans. Technical knowledge and single-minded effort took CFM from there to being a leading loan syndicator, and then a full financial advisory firm. Through CFM Asset Reconstruction, which we sponsor, we are also part of India's market for stressed assets.",
    "Our management philosophy is short: time is money, so we do not waste it. We put trust, empathy and innovation first, and we rely on relationships built over more than three decades to help the companies we advise to grow.",
  ],
  name: "Om Porwal",
  title: "Founder and Director",
} as const;

/** How the firm works with clients. Drawn from cfml.in's "Strengths". */
export const approach = [
  {
    title: "Knowledge of the market",
    body: "We understand how banks, financial institutions and investors assess a proposal, and how this differs from one sector to another.",
  },
  {
    title: "Relationships built over time",
    body: "Our working relationships with lenders and investors go back more than three decades, and they are a large part of what we bring to a mandate.",
  },
  {
    title: "Professional standards",
    body: "We hold ourselves to high professional and ethical standards, and to transparency in the way we work.",
  },
  {
    title: "Staying until the work is done",
    body: "Once we accept a mandate, we stay with the client through each stage until the transaction is complete.",
  },
] as const;

export const clientTypes = [
  "Government undertakings",
  "Large corporates",
  "Mid-size companies",
  "Manufacturers",
  "Banks",
  "SMEs",
] as const;
