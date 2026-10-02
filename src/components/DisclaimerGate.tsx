"use client";

import { useCallback, useId, useState, useSyncExternalStore, type ReactNode } from "react";

const noopSubscribe = () => () => {};

/**
 * Regulatory acknowledgement before offer documents or the public-issue track
 * record are shown. Acceptance lasts for the browser session only. Storage can
 * be unavailable (private mode, blocked site data), so every access is guarded
 * and the gate simply asks again.
 */
export function DisclaimerGate({
  storageKey,
  title,
  paragraphs,
  confirmations,
  children,
}: {
  storageKey: string;
  title: string;
  paragraphs: readonly string[];
  confirmations: readonly string[];
  children: ReactNode;
}) {
  const id = useId();
  const [acceptedNow, setAcceptedNow] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(() => confirmations.map(() => false));
  const [declined, setDeclined] = useState(false);

  // Session storage is an external store: read it through the store API so the
  // server renders the gate and the client reconciles after hydration.
  const getStored = useCallback(() => {
    try {
      return sessionStorage.getItem(storageKey) === "accepted";
    } catch {
      return false; // storage unavailable — the gate stays up
    }
  }, [storageKey]);
  const storedAccepted = useSyncExternalStore(noopSubscribe, getStored, () => false);
  const accepted = acceptedNow || storedAccepted;

  const allChecked = checked.every(Boolean);

  function accept() {
    if (!allChecked) return;
    try {
      sessionStorage.setItem(storageKey, "accepted");
    } catch {
      /* acceptance still applies for this page view */
    }
    setAcceptedNow(true);
  }

  if (accepted) return <>{children}</>;

  return (
    <div className="border border-line bg-white p-7 md:p-10" role="region" aria-labelledby={`${id}-t`}>
      <h2 id={`${id}-t`} className="text-[1.5rem] font-medium">
        {title}
      </h2>
      <div className="mt-6 max-h-[340px] space-y-4 overflow-y-auto pr-3 text-[14px] leading-[1.75] text-grey" tabIndex={0}>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {declined ? (
        <p role="status" className="mt-8 border-l-2 border-brand pl-5 text-[14px] text-ink">
          You have chosen not to proceed. This material is only available to visitors who confirm the statements above.
        </p>
      ) : null}

      <fieldset className="mt-8 border-t border-line pt-6">
        <legend className="eyebrow text-brand">Please confirm</legend>
        <div className="mt-4 space-y-3">
          {confirmations.map((c, i) => (
            <label key={c} className="flex cursor-pointer items-start gap-3 text-[14.5px]">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-brand)]"
                checked={checked[i]}
                onChange={(e) => {
                  setDeclined(false);
                  setChecked((prev) => prev.map((v, j) => (j === i ? e.target.checked : v)));
                }}
              />
              <span>{c}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={accept}
          disabled={!allChecked}
          className="rounded-full bg-brand px-6 py-3 font-display text-[14px] font-medium text-warm transition-colors duration-200 hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-45"
        >
          I confirm — proceed
        </button>
        <button
          type="button"
          onClick={() => setDeclined(true)}
          className="px-2 py-3 font-display text-[14px] text-grey underline-offset-4 hover:underline"
        >
          I do not agree
        </button>
      </div>
    </div>
  );
}
