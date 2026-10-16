import type { ReactNode } from "react";
import type { Tone } from "@/i18n/types";
import { cn } from "@/lib/utils";

/**
 * One troubleshooting guide, composed from the parts it needs:
 *
 *   <Tutorial.Root>
 *     <Tutorial.Header tone="bad" badge="…" title="…">intro</Tutorial.Header>
 *     <Tutorial.Note label="Causa">…</Tutorial.Note>
 *     <Tutorial.Log label="…" lines={[…]} />
 *     <Tutorial.Table headers={[…]} rows={[…]} />
 *     <Tutorial.Steps steps={[…]} />
 *     <Tutorial.Checklist title="…" items={[…]}>…</Tutorial.Checklist>
 *   </Tutorial.Root>
 */

const tones: Record<Tone, string> = {
  ok: "border-ok/40 text-ok [&>i]:bg-ok",
  warn: "border-warn/40 text-warn [&>i]:bg-warn",
  bad: "border-bad/40 text-bad [&>i]:bg-bad",
};

function Root({ children }: { children: ReactNode }) {
  return <div className="flex min-w-0 flex-col gap-7 text-[15.5px]">{children}</div>;
}

function Header({ tone, badge, title, children }: { tone: Tone; badge: string; title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2.5">
      <span className={cn("inline-flex h-[22px] items-center gap-1.5 self-start border px-2 text-[11px] font-semibold tracking-[0.14em] uppercase", tones[tone])}>
        <i className="inline-block size-1.5 rounded-full" />
        {badge}
      </span>
      <h2 className="display-x text-[clamp(22px,2.2vw,28px)] leading-[1.05]">{title}</h2>
      <p className="max-w-[680px] text-steel">{children}</p>
    </div>
  );
}

function Note({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex gap-3 rounded-lg border border-line-strong bg-card px-4 py-3.5 text-sm text-soft">
      <span className="caption shrink-0 pt-1 text-gold-hi">{label}</span>
      <span>{children}</span>
    </div>
  );
}

/** Terminal block; lines starting with "!" are highlighted */
function Log({ label, lines }: { label: string; lines: string[] }) {
  return (
    <div className="overflow-hidden rounded-xl border bg-[#090707]">
      <div className="flex h-9 items-center border-b px-3.5 font-mono text-xs text-steel">{label}</div>
      <pre className="m-0 overflow-x-auto px-4 py-3.5 font-mono text-[12.5px] leading-[1.75] text-soft">
        {lines.map((line, i) =>
          line.startsWith("!") ? (
            <span key={i} className="-mx-4 block border-l-2 border-primary bg-primary/15 px-4 text-[#f08a84]">
              {line.slice(1)}
            </span>
          ) : (
            <span key={i} className="block">
              {line}
            </span>
          ),
        )}
      </pre>
    </div>
  );
}

function Table({ headers, rows }: { headers: [string, string, string]; rows: { line: string; cause: string; fix: string }[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="w-full min-w-[760px] border-collapse text-sm">
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h} className="h-10 border-b bg-card px-3.5 text-left font-mono text-[11px] font-medium tracking-[0.08em] text-steel uppercase">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.line} className="border-b last:border-b-0">
              <td className="max-w-[300px] px-3.5 py-3 align-top font-mono text-xs text-[#f08a84]">{r.line}</td>
              <td className="px-3.5 py-3 align-top">{r.cause}</td>
              <td className="px-3.5 py-3 align-top text-steel">{r.fix}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Steps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="m-0 flex list-none flex-col gap-7 p-0">
      {steps.map((s, i) => (
        <li key={s.title} className="grid grid-cols-[32px_minmax(0,1fr)] gap-3.5">
          <span className="flex size-7 items-center justify-center rounded-full border border-line-strong bg-muted font-mono text-xs">{i + 1}</span>
          <div>
            <h3 className="mb-1.5 text-[17px] font-bold uppercase font-display">{s.title}</h3>
            <p className="text-steel">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function Checklist({ title, items, children }: { title: string; items: string[]; children?: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[17px] font-bold uppercase font-display">{title}</h3>
      <ul className="m-0 flex list-none flex-col gap-2 p-0">
        {items.map((c) => (
          <li key={c} className="flex gap-2.5 text-soft">
            <span className="mt-[3px] size-4 shrink-0 rounded border border-line-strong bg-muted" aria-hidden="true" />
            {c}
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}

export const Tutorial = { Root, Header, Note, Log, Table, Steps, Checklist };
