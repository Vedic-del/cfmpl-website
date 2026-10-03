import type { Metadata } from "next";
import { Redirect } from "@/components/Redirect";
import { movedPracticeSlugs } from "@/content/services";

// Each service used to have its own page; they are now sections of /services.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(movedPracticeSlugs).map((slug) => ({ slug }));
}

export const metadata: Metadata = { title: "Our Services", robots: { index: false } };

export default async function MovedServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <Redirect to={`/services/#${movedPracticeSlugs[slug]}`} label="Our Services" />;
}
