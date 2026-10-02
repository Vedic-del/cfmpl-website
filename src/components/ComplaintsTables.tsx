import type { ComplaintsData } from "@/content/investors";

/**
 * Investor complaints disclosure in the three-table form SEBI's November 2021
 * circulars require of merchant bankers: the month's data, the trend of monthly
 * disposal, and the trend of annual disposal. Updated by the 7th of the
 * following month.
 *
 * Figures have not been supplied, so the tables render their structure with the
 * cells marked as awaiting data rather than showing invented zeros.
 */

const PENDING = "—";

function Cell({ v }: { v: number | null }) {
  return <td className="num border-b border-line px-3 py-3 text-right tabular-nums">{v ?? PENDING}</td>;
}

function Head({ cols }: { cols: readonly string[] }) {
  return (
    <thead>
      <tr>
        {cols.map((c, i) => (
          <th
            key={c}
            scope="col"
            className={`border-b-2 border-brand/30 px-3 py-3 font-display text-[12.5px] font-semibold ${
              i === 0 ? "text-left" : "text-right"
            }`}
          >
            {c}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export function ComplaintsTables({ data }: { data: ComplaintsData }) {
  return (
    <div className="mt-10 space-y-14">
      <section data-reveal>
        <h3 className="font-display text-[1.15rem] font-medium">
          Data for the month ending {data.monthLabel}
        </h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse text-[14px]">
            <caption className="sr-only">
              Investor complaints received and resolved in the month ending {data.monthLabel}
            </caption>
            <Head cols={["Received from", "Pending at the end of last month", "Received", "Resolved*", "Total pending†"]} />
            <tbody>
              {data.monthly.map((r) => (
                <tr key={r.source} className={r.source === "Grand Total" ? "font-medium" : ""}>
                  <th scope="row" className="border-b border-line px-3 py-3 text-left font-normal">
                    {r.source}
                  </th>
                  <Cell v={r.broughtForward} />
                  <Cell v={r.received} />
                  <Cell v={r.resolved} />
                  <Cell v={r.pending} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[12.5px] leading-relaxed text-grey">
          * Inclusive of complaints of previous months resolved in the current month.
          <br />† Inclusive of complaints pending as at the last day of the month.
        </p>
      </section>

      <section data-reveal>
        <h3 className="font-display text-[1.15rem] font-medium">Trend of monthly disposal of complaints</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse text-[14px]">
            <Head cols={["Month", "Carried forward from previous month", "Received", "Resolved*", "Pending†"]} />
            <tbody>
              {data.monthlyTrend.map((r) => (
                <tr key={r.period}>
                  <th scope="row" className="border-b border-line px-3 py-3 text-left font-normal">
                    {r.period}
                  </th>
                  <Cell v={r.broughtForward} />
                  <Cell v={r.received} />
                  <Cell v={r.resolved} />
                  <Cell v={r.pending} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section data-reveal>
        <h3 className="font-display text-[1.15rem] font-medium">Trend of annual disposal of complaints</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse text-[14px]">
            <Head cols={["Year", "Carried forward from previous year", "Received", "Resolved*", "Pending†"]} />
            <tbody>
              {data.annualTrend.map((r) => (
                <tr key={r.period}>
                  <th scope="row" className="border-b border-line px-3 py-3 text-left font-normal">
                    {r.period}
                  </th>
                  <Cell v={r.broughtForward} />
                  <Cell v={r.received} />
                  <Cell v={r.resolved} />
                  <Cell v={r.pending} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
