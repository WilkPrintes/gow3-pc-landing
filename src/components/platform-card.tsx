import type { ReactNode } from "react";
import { CopyButton } from "@/components/copy-button";
import { cn } from "@/lib/utils";

/**
 * Download card for one platform.
 *
 *   <PlatformCard.Root featured>
 *     <PlatformCard.Flag>Recomendado</PlatformCard.Flag>
 *     <PlatformCard.Title>Windows</PlatformCard.Title>
 *     <PlatformCard.Specs rows={[["Arquivo", "…"]]} />
 *     <PlatformCard.Actions>…</PlatformCard.Actions>
 *     <PlatformCard.Checksum value="…" labels={…} />
 *   </PlatformCard.Root>
 */

function Root({ featured, children }: { featured?: boolean; children: ReactNode }) {
  return (
    <article
      className={cn(
        "flex flex-col gap-5 rounded-md border bg-card p-5 sm:gap-[22px] sm:p-8",
        featured && "border-gold/50",
      )}
    >
      {children}
    </article>
  );
}

function Flag({ muted, children }: { muted?: boolean; children: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex h-[26px] items-center self-start rounded-sm px-2.5 text-[11px] font-bold tracking-[0.14em] font-display",
        muted ? "bg-steel/15 text-soft" : "bg-gold/15 text-gold-hi",
      )}
    >
      {children}
    </span>
  );
}

function Title({ icon, children }: { icon?: ReactNode; children: ReactNode }) {
  return (
    <h3 className="display-x flex items-center gap-3 text-[clamp(22px,2vw,30px)]">
      {icon && <span className="flex size-[1em] shrink-0 items-center text-steel [&>svg]:size-full">{icon}</span>}
      {children}
    </h3>
  );
}

function Specs({ rows }: { rows: [string, ReactNode][] }) {
  return (
    <dl className="m-0 grid grid-cols-[minmax(0,1fr)] gap-x-[18px] gap-y-2.5 text-[15px] sm:grid-cols-[120px_minmax(0,1fr)]">
      {rows.map(([label, value]) => (
        <div key={label} className="contents">
          <dt className="text-[11.5px] leading-[1.8] font-semibold tracking-[0.16em] text-steel uppercase">{label}</dt>
          <dd className="m-0 min-w-0">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Actions({ children }: { children: ReactNode }) {
  // mt-auto pins the buttons and the checksum to the bottom, so side-by-side cards line up
  return <div className="mt-auto flex flex-wrap gap-3">{children}</div>;
}

function Checksum({ value, labels }: { value: string | null; labels: { copy: string; copied: string; failed: string } }) {
  if (!value) return null;
  return (
    <div className="flex min-w-0 items-center gap-2.5 border-t pt-3.5 font-mono text-xs text-steel">
      <span>SHA-256</span>
      <code className="min-w-0 flex-1 truncate text-soft">{value}</code>
      <CopyButton value={value} labels={labels} />
    </div>
  );
}

export const PlatformCard = { Root, Flag, Title, Specs, Actions, Checksum };
