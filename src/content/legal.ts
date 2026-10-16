/**
 * Legal and regulatory facts the website must publish, in one place.
 *
 * Sources for each requirement:
 * - Grievance Officer, privacy policy: IT (Reasonable Security Practices and
 *   Procedures and Sensitive Personal Data or Information) Rules, 2011,
 *   rules 4 and 5(9); Digital Personal Data Protection Act, 2023, sections
 *   5, 8(9), 8(10) and 13, and DPDP Rules, 2025 (rules 3 and 14).
 * - Contact person for queries on the home page: Companies Act, 2013,
 *   section 12 read with rule 26 of the Companies (Incorporation) Rules, 2014.
 * - SMART ODR link on the home page: SEBI master circular on online dispute
 *   resolution (31 July 2023, as updated).
 * - Activities not regulated by SEBI: SEBI circular of 2 January 2026 under
 *   the SEBI (Merchant Bankers) Amendment Regulations, 2025.
 * - Accessibility: SEBI circular of 31 July 2025 under the Rights of Persons
 *   with Disabilities Act, 2016, and later clarifications.
 */

export const grievanceOfficer = {
  name: "Ms. Nikita Somaiya",
  designation: "Compliance Officer and Grievance Officer",
  email: "compliance@cfml.in",
  phone: "+91 22 2269 6944",
  ext: "219",
  address: "Chartered Finance Management Private Limited, 2nd Floor, Wakefield House, Sprott Road, Ballard Estate, Mumbai 400 038",
} as const;

/** SEBI's investor complaint and online dispute resolution portals. */
export const sebiPortals = {
  scores: { label: "SEBI SCORES", href: "https://scores.sebi.gov.in/" },
  odr: { label: "SMART ODR", href: "https://smartodr.in/" },
} as const;

/**
 * Activities the firm undertakes that are not regulated by SEBI, in the
 * firm's own words from its regulatory notice on cfml.in.
 */
export const nonSebiActivities = [
  "Corporate advisory services",
  "Loan syndication",
  "Investment banking",
  "Stressed asset resolution services",
  "Private placement and related advisory services",
  "M&A transactions",
] as const;

/**
 * The firm's notice on activities outside SEBI's regulation, as published on
 * cfml.in. Legal wording: reproduce, do not edit, without compliance sign-off.
 */
export const nonSebiNotice = {
  statement:
    "Our clients, beneficiaries, stakeholders and other relevant counterparties are hereby informed that, with respect to the activities that are not regulated by SEBI or any other financial sector regulator, i.e., corporate advisory services, loan syndication, investment banking, stressed asset resolution services, private placement and related advisory services, M&A transactions and such other non-SEBI regulated activities which we may undertake, none of the SEBI investor protection mechanism will be available for any grievances or disputes arising out of or pertaining to such non-SEBI regulated activities.",
  basis:
    "This disclosure is made in terms of Clause 11.2.6 and 11.2.10 of SEBI Circular No. HO/49/11/11(106)2025-CFD-RAC-DIL3/I/1796/2026 dated January 2, 2026 on the subject of “Specification of the consequential requirements with respect to Amendment of Securities and Exchange Board of India (Merchant Bankers) Regulations, 1992” read with SEBI (Merchant Bankers) (Amendment) Regulations, 2025 dated December 3, 2025 notified on December 05, 2025.",
  note: "None of the SEBI investor protection mechanism will be available for any grievances or disputes arising out of or pertaining to non-SEBI regulated activities.",
} as const;

/** Mailbox for complaints about merchant banking (SEBI-regulated) activities. */
export const sebiGrievanceEmail = "investor.grievance@cfml.in";

export const nonSebiGrievanceEmail = "customer.care@cfml.in";

// The Board's complaint channel is not yet confirmed on an official gov.in
// site, so the Board is named without a link until it is.
export const dataProtectionBoard = "Data Protection Board of India";
