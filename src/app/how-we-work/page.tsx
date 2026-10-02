import type { Metadata } from "next";
import { Redirect } from "@/components/Redirect";

// How We Work was retired; its subject is covered on Our Services.
export const metadata: Metadata = { title: "Our Services", robots: { index: false } };

export default function MovedHowWeWorkPage() {
  return <Redirect to="/services/" label="Our Services" />;
}
