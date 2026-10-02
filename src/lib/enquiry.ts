export type EnquiryField = "name" | "organisation" | "email" | "phone" | "subject" | "message";

export const enquirySubjects = [
  "Investment Banking",
  "Corporate Advisory",
  "Stressed Asset Resolution Advisory",
  "Investor query",
  "Careers",
  "Something else",
] as const;
