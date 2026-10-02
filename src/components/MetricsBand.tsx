import { CountUp } from "./CountUp";

type Metric = { figure: string; unit: string; label: string; qualifier: string };

/** House metrics format: figure → unit on its own line → label → qualifier. The qualifier is never omitted. */
export function MetricsBand({ metrics, note }: { metrics: readonly Metric[]; note?: string }) {
  return (
    <section aria-label="The firm in figures" className="border-b border-line bg-white">
      <div className="container-house">
        <dl className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              className="bg-white py-10 pr-4 md:py-12 [&:nth-child(even)]:pl-6 lg:px-8 lg:first:pl-0"
            >
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <CountUp value={m.figure} className="block font-display text-[2.5rem] leading-none tracking-[-0.02em] md:text-[2.75rem]" />
                <span className="mt-1.5 block font-display text-[17px] text-brand">{m.unit}</span>
                <span aria-hidden="true" className="mt-4 block font-display text-[14px] font-medium">{m.label}</span>
                <span className="mt-1.5 block text-[12.5px] leading-snug text-grey-light">{m.qualifier}</span>
              </dd>
            </div>
          ))}
        </dl>
        {note ? <p className="border-t border-line py-4 text-[12px] italic text-grey-light">{note}</p> : null}
      </div>
    </section>
  );
}
