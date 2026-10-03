export type EnquiryField = "name" | "organisation" | "email" | "phone" | "subject" | "message";

export const enquirySubjects = [
  "Transaction Advisory",
  "Equity Capital Markets",
  "Stressed Asset Resolution Advisory",
  "Investor query",
  "Careers",
  "Something else",
] as const;
