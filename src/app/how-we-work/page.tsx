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
    "The nine steps of a CFM transaction, published in full — from the first meeting to the point our fee is collected, which is on sanction or first disbursal.",
  alternates: { canonical: "/how-we-work/" },
};

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Work"
        lines={["What Actually Happens", "Between the First Meeting", "and Disbursal."]}
        lede="We publish the whole sequence, because the order of the steps is the argument."
        photo={imagery.howWeWork}
      />

      <Section tone="light" labelledBy="why-h">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            id="why-h"
            eyebrow="Why Publish It"
            lines={["Two Things Here", "Are Unusual."]}
            lede="A first-time borrower has two questions that websites rarely answer: what happens next, and when does this start costing me money? Both are answered here."
          />
          <ul className="grid gap-px self-start bg-line" data-reveal>
            {processPrinciples.map((p) => (
              <li key={p.title} className="bg-white px-7 py-8">
                <h3 className="font-display text-[1.2rem] font-medium leading-snug">{p.title}</h3>
                <p className="mt-3 text-[14.5px] leading-[1.75] text-grey">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="dark" labelledBy="steps-h">
        <div className="grid gap-12 lg:grid-cols-[1.45fr_1fr] lg:items-start lg:gap-20">
          <div>
            <SectionHeading id="steps-h" dark eyebrow="The Process" lines={["Nine Steps,", "Origination", "to Disbursal."]} />
            <ProcessExplorer steps={processSteps} highlight={["06", "07", "09"]} />
          </div>
          <div className="lg:sticky lg:top-32">
            <ProcessDiagram className="mx-auto w-full max-w-[320px]" />
            <p className="mx-auto mt-8 max-w-[34ch] text-center text-[13.5px] leading-relaxed text-warm/55">
              Our mark: six lines meeting at a centre. A transaction works the same way — lenders, promoters, advisers
              and regulators, brought to one point.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand
        eyebrow="Start at Step One"
        lines={["A Funding Requirement", "Has to Reach Us Somehow."]}
        body="Most do, through a market reference or directly. Either way, the first step is a conversation."
      />
    </>
  );
}
