"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { firm } from "@/content/firm";
import { enquirySubjects, type EnquiryField } from "@/lib/enquiry";

/**
 * Enquiry form for a static site.
 *
 * The site is published as plain files with no server, so the form does not
 * send mail itself. It validates the enquiry, composes it, and opens the
 * visitor's own email application addressed to the firm. Because many office
 * machines use webmail rather than a desktop mail client, the composed message
 * can also be copied with one click. Nothing is sent to any third party.
 */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Values = Record<EnquiryField, string>;
type Errors = Partial<Record<EnquiryField, string>>;

const inputCls =
  "mt-2 block w-full border border-line bg-white px-4 py-3.5 text-[15px] font-light text-ink transition-colors duration-200 placeholder:text-grey-light focus:border-brand focus:outline-none aria-[invalid=true]:border-2 aria-[invalid=true]:border-brand-deep";

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Please tell us your name.";
  if (!v.email.trim()) e.email = "Please give an email address we can reply to.";
  else if (!EMAIL.test(v.email.trim())) e.email = "That email address doesn't look complete — please check it.";
  if (!enquirySubjects.includes(v.subject as (typeof enquirySubjects)[number]))
    e.subject = "Please choose what your enquiry is about.";
  if (v.message.trim().length < 20) e.message = "Please give us a little more detail — at least a sentence or two.";
  if (v.message.length > 5000) e.message = "Please keep your message under 5,000 characters.";
  return e;
}

function compose(v: Values) {
  const subject = `Website enquiry — ${v.subject} — ${v.name.trim()}`;
  const body = [
    v.message.trim(),
    "",
    "—",
    `Name: ${v.name.trim()}`,
    `Organisation: ${v.organisation.trim() || "—"}`,
    `Email: ${v.email.trim()}`,
    `Phone: ${v.phone.trim() || "—"}`,
  ].join("\n");
  return { subject, body };
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [composed, setComposed] = useState<{ subject: string; body: string } | null>(null);
  const [copied, setCopied] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const values = Object.fromEntries(
      (["name", "organisation", "email", "phone", "subject", "message"] as const).map((k) => [k, String(data.get(k) ?? "")]),
    ) as Values;

    const found = validate(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    const message = compose(values);
    setComposed(message);
    setCopied(false);
    window.location.href = `mailto:${firm.email.general}?subject=${encodeURIComponent(message.subject)}&body=${encodeURIComponent(message.body)}`;
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  async function copy() {
    if (!composed) return;
    const text = `To: ${firm.email.general}\nSubject: ${composed.subject}\n\n${composed.body}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  const field = (name: EnquiryField) => ({
    id: `f-${name}`,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `e-${name}` : undefined,
  });

  const err = (name: EnquiryField) =>
    errors[name] ? (
      <p id={`e-${name}`} className="mt-2 text-[13px] font-normal text-brand-deep">
        {errors[name]}
      </p>
    ) : null;

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-6">
      {composed ? (
        <div ref={statusRef} tabIndex={-1} role="status" className="border-l-2 border-brand bg-white py-5 pl-5 pr-4">
          <p className="font-display text-[1.05rem] font-medium">Your message is ready to send.</p>
          <p className="mt-2 text-[14.5px] leading-relaxed text-grey">
            Your email application should now be open with the enquiry addressed to{" "}
            <a className="text-brand-deep underline underline-offset-4" href={`mailto:${firm.email.general}`}>
              {firm.email.general}
            </a>
            . If nothing opened — common with webmail — copy the message and paste it into a new email.
          </p>
          <button
            type="button"
            onClick={copy}
            className="mt-4 rounded-full border border-brand px-5 py-2.5 font-display text-[14px] text-brand-deep transition-colors duration-200 hover:bg-brand hover:text-warm"
          >
            {copied ? "Copied" : "Copy the message"}
          </button>
          <span aria-live="polite" className="sr-only">
            {copied ? "Message copied to clipboard." : ""}
          </span>
        </div>
      ) : null}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="f-name" className="font-display text-[14px] font-medium">
            Name <span aria-hidden="true" className="text-brand">*</span>
          </label>
          <input {...field("name")} type="text" autoComplete="name" required className={inputCls} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="f-organisation" className="font-display text-[14px] font-medium">
            Organisation
          </label>
          <input {...field("organisation")} type="text" autoComplete="organization" className={inputCls} />
        </div>
        <div>
          <label htmlFor="f-email" className="font-display text-[14px] font-medium">
            Email <span aria-hidden="true" className="text-brand">*</span>
          </label>
          <input {...field("email")} type="email" autoComplete="email" inputMode="email" required className={inputCls} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="f-phone" className="font-display text-[14px] font-medium">
            Phone
          </label>
          <input {...field("phone")} type="tel" autoComplete="tel" inputMode="tel" className={inputCls} />
        </div>
      </div>

      <div>
        <label htmlFor="f-subject" className="font-display text-[14px] font-medium">
          What is it about? <span aria-hidden="true" className="text-brand">*</span>
        </label>
        <select
          {...field("subject")}
          required
          defaultValue=""
          className={`${inputCls} appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%23636555' stroke-width='1.5'/%3E%3C/svg%3E\")",
          }}
        >
          <option value="" disabled>
            Choose one
          </option>
          {enquirySubjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {err("subject")}
      </div>

      <div>
        <label htmlFor="f-message" className="font-display text-[14px] font-medium">
          Tell us where the business stands <span aria-hidden="true" className="text-brand">*</span>
        </label>
        <p id="h-message" className="mt-1 text-[13px] text-grey">
          What the company does, what it needs, and roughly how much. A few lines is enough.
        </p>
        <textarea
          {...field("message")}
          aria-describedby={errors.message ? "e-message h-message" : "h-message"}
          rows={6}
          required
          className={`${inputCls} resize-y`}
        />
        {err("message")}
      </div>

      <div className="flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[46ch] text-[12.5px] leading-relaxed text-grey">
          Your enquiry goes from your own email to ours — this website stores nothing. See our{" "}
          <Link href="/privacy" className="underline underline-offset-4">
            privacy policy
          </Link>
          .
        </p>
        <button
          type="submit"
          className="shrink-0 rounded-full bg-brand px-7 py-3.5 font-display text-[15px] font-medium text-warm transition-colors duration-200 hover:bg-brand-deep"
        >
          Prepare my enquiry
        </button>
      </div>
    </form>
  );
}
