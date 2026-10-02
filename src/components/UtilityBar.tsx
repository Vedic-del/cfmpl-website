import { firm } from "@/content/firm";

export function UtilityBar() {
  return (
    <div className="hidden bg-deep text-[11.5px] tracking-[0.03em] text-warm/65 md:block">
      <div className="container-house flex items-center justify-between gap-6 py-2">
        <p>
          {firm.legalName}
          <span className="mx-2 text-warm/55">·</span>
          SEBI {firm.sebiCategory}
          <span className="mx-2 text-warm/55">·</span>
          Registration No.{" "}
          {/* FLAG: registration number to be supplied */}
          <span className="text-brand-light">{firm.sebiRegistrationNo ?? "to be confirmed"}</span>
        </p>
        <p className="hidden lg:block">Mumbai · New Delhi · Chennai · Ahmedabad</p>
      </div>
    </div>
  );
}
