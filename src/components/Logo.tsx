import Image from "next/image";
import Link from "next/link";
import { firm } from "@/content/firm";

/** The CFM lockup. Transparent PNGs generated from the supplied logo (604×232). */
export function Logo({ light = false, className = "h-11 w-auto" }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" aria-label={`${firm.legalName} — home`} className="inline-block shrink-0">
      <Image
        src={light ? "/brand/cfm-logo-light.png" : "/brand/cfm-logo.png"}
        alt={`${firm.shortName} — ${firm.tagline}`}
        width={604}
        height={232}
        loading="eager"
        className={className}
      />
    </Link>
  );
}
