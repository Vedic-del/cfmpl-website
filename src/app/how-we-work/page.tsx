import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { ProcessDiagram } from "@/components/ProcessDiagram";
import { ProcessExplorer } from "@/components/ProcessExplorer";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { imagery } from "@/content/imagery";
import { processPrinciples, processSteps } from "@/content/process";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "The nine steps of a typical CFM debt or equity fundraising mandate, from the first conversation to the release of funds, including when our fee becomes payable.",
  alternates: { canonical: "/how-we-work/" },
};

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        title="How We Work"
        lede="The steps we follow on a typical debt or equity fundraising mandate, from the first conversation to the release of funds."
        photo={imagery.howWeWork}
      />

      <Section tone="light" labelledBy="terms-h">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            id="terms-h"
            title="Mandate and Fees"
            lede="Two terms that matter to any company considering a mandate with us."
          />
          <ul className="grid gap-px self-start bg-line" data-reveal>
            {processPrinciples.map((p) => (
              <li key={p.title} className="bg-white px-7 py-8">
                <h3 className="font-display text-[1.2rem] font-medium leading-snug">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-grey">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="dark" labelledBy="steps-h">
        <div className="grid gap-12 lg:grid-cols-[1.45fr_1fr] lg:items-start lg:gap-20">
          <div>
            <SectionHeading
              id="steps-h"
              dark
              title="The Nine Steps"
              lede="Select a step to read what happens at that stage."
            />
            <ProcessExplorer steps={processSteps} highlight={["06", "07", "09"]} />
          </div>
          <div className="hidden lg:sticky lg:top-32 lg:block">
            <ProcessDiagram className="mx-auto w-full max-w-[320px]" />
          </div>
        </div>
      </Section>

      <CtaBand
        title="Start a Conversation"
        body="A mandate begins when a company tells us what it needs — directly, or through someone who knows us."
      />
    </>
  );
}
