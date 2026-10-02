import type { Metadata } from "next";
import { Redirect } from "@/components/Redirect";

// Careers is now a section of Life at CFM.
export const metadata: Metadata = { title: "Careers", robots: { index: false } };

export default function MovedCareersPage() {
  return <Redirect to="/life-at-cfm/#careers" label="Life at CFM — Careers" />;
}
