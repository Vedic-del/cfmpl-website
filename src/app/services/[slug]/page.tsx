import type { Metadata } from "next";
import { Redirect } from "@/components/Redirect";
import { practices } from "@/content/services";

// Each service used to have its own page; they are now sections of /services.
export const dynamicParams = false;

export function generateStaticParams() {
  return practices.map((p) => ({ slug: p.slug }));
}

export const metadata: Metadata = { title: "Our Services", robots: { index: false } };

export default async function MovedServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const practice = practices.find((p) => p.slug === slug);
  return <Redirect to={`/services/#${slug}`} label={practice ? `Our Services — ${practice.name}` : "Our Services"} />;
}
