import type { ReactNode } from "react";

export type Tone = "light" | "paper" | "warm" | "dark";

const tones: Record<Tone, string> = {
  light: "bg-white text-ink",
  paper: "bg-paper text-ink",
  warm: "bg-warm text-ink",
  dark: "bg-deep text-warm grain relative isolate",
};

export function Section({
  tone = "light",
  id,
  className = "",
  children,
  labelledBy,
}: {
  tone?: Tone;
  id?: string;
  className?: string;
  children: ReactNode;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} data-tone={tone} className={`${tones[tone]} py-18 md:py-24 ${className}`}>
      <div className="container-house">{children}</div>
    </section>
  );
}
