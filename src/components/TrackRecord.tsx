import { formatUsdMn, keyTransactions, trackRecord } from "@/content/clients";

/** Every key transaction from the firm's Corporate Profile, largest first. */
export function TrackRecord() {
  return (
    <div>
      <dl className="grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-3">
        {[
          { figure: trackRecord.totalLabel, label: "Arranged across these mandates" },
          { figure: String(trackRecord.count), label: "Key transaction advisory mandates" },
          { figure: formatUsdMn(trackRecord.largestMn), label: "Largest single mandate" },
        ].map((f, i) => (
          <div key={f.label} className={`bg-white px-5 py-6 md:px-7 md:py-8 ${i === 2 ? "col-span-2 md:col-span-1" : ""}`}>
            <dt className="sr-only">{f.label}</dt>
            <dd>
              <span className="num block font-display text-[1.75rem] leading-none tracking-[-0.02em] text-brand-deep md:text-[2.25rem]">
                {f.figure}
              </span>
              <span aria-hidden="true" className="mt-3 block text-[14px] text-grey">
                {f.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-[14.5px]">
          <caption className="sr-only">Key transactions, largest first. {trackRecord.note}</caption>
          <thead>
            <tr className="border-b border-ink">
              <th scope="col" className="py-3 pr-6 font-display text-[14px] font-medium">Client</th>
              <th scope="col" className="py-3 pr-6 font-display text-[14px] font-medium">Transaction</th>
              <th scope="col" className="py-3 text-right font-display text-[14px] font-medium">Deal size</th>
            </tr>
          </thead>
          <tbody>
            {keyTransactions.map((t, i) => (
              <tr key={`${t.client}-${t.nature}-${i}`} className="border-b border-line align-top">
                <td className="py-3.5 pr-6 text-ink">{t.client}</td>
                <td className="py-3.5 pr-6 text-grey">{t.nature}</td>
                <td className="num py-3.5 text-right whitespace-nowrap text-ink">{formatUsdMn(t.usdMn)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-[13px] text-grey">{trackRecord.note}</p>
    </div>
  );
}
