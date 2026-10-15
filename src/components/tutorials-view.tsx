"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { buttonVariants } from "@/components/ui/button";
import { tutorials, type Tone } from "@/content/tutorials";
import { PORT_REPO_URL } from "@/content/site";
import { cn } from "@/lib/utils";

const tone: Record<Tone, string> = {
  ok: "border-ok/40 text-ok [&>i]:bg-ok",
  warn: "border-warn/40 text-warn [&>i]:bg-warn",
  bad: "border-bad/40 text-bad [&>i]:bg-bad",
};

export function TutorialsView() {
  return (
    <Tabs defaultValue={tutorials[0].id} orientation="vertical" className="flex-col items-start gap-10 lg:flex-row!">
      <TabsList
        aria-label="Guias"
        className="h-fit! w-full flex-col items-stretch gap-1 rounded-none bg-transparent p-0 lg:sticky lg:top-24 lg:w-[300px] lg:shrink-0"
      >
        <span className="caption px-3.5 pb-2 text-gold-hi">Guias</span>
        {tutorials.map((t) => (
          <TabsTrigger
            key={t.id}
            value={t.id}
            className="h-auto! flex-col items-start! gap-1 rounded-none border-0 border-l-2 border-l-transparent px-3.5 py-3 text-left text-[15px] font-semibold whitespace-normal text-foreground/80 after:hidden data-active:border-l-primary data-active:bg-card! data-active:text-foreground"
          >
            {t.title}
            <small className="font-mono text-[11px] font-normal text-steel">{t.hint}</small>
          </TabsTrigger>
        ))}
      </TabsList>

      {tutorials.map((t) => (
        <TabsContent key={t.id} value={t.id} className="flex min-w-0 flex-col gap-7 text-[15.5px]">
          <div className="flex flex-col gap-2.5">
            <span
              className={cn(
                "inline-flex h-[22px] items-center gap-1.5 self-start border px-2 text-[11px] font-semibold tracking-[0.14em] uppercase",
                tone[t.tone],
              )}
            >
              <i className="inline-block size-1.5 rounded-full" />
              {t.badge}
            </span>
            <h2 className="display-x text-[clamp(22px,2.2vw,28px)] leading-[1.05]">{t.title}</h2>
            <p className="max-w-[680px] text-steel">{t.intro}</p>
          </div>

          {t.note && (
            <div className="flex gap-3 rounded-lg border border-line-strong bg-card px-4 py-3.5 text-sm text-soft">
              <span className="caption shrink-0 pt-1 text-gold-hi">{t.note.label}</span>
              <span>{t.note.text}</span>
            </div>
          )}

          {t.log && (
            <div className="overflow-hidden rounded-xl border bg-[#090707]">
              <div className="flex h-9 items-center border-b px-3.5 font-mono text-xs text-steel">{t.log.label}</div>
              <pre className="m-0 overflow-x-auto px-4 py-3.5 font-mono text-[12.5px] leading-[1.75] text-soft">
                {t.log.lines.map((line, i) =>
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
          )}

          {t.table && (
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full min-w-[760px] border-collapse text-sm">
                <thead>
                  <tr>
                    {["Linha no log", "Causa provável", "O que fazer"].map((h) => (
                      <th key={h} className="h-10 border-b bg-card px-3.5 text-left font-mono text-[11px] font-medium tracking-[0.08em] text-steel uppercase">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.table.map((r) => (
                    <tr key={r.line} className="border-b last:border-b-0">
                      <td className="max-w-[300px] px-3.5 py-3 align-top font-mono text-xs text-[#f08a84]">{r.line}</td>
                      <td className="px-3.5 py-3 align-top">{r.cause}</td>
                      <td className="px-3.5 py-3 align-top text-steel">{r.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <ol className="m-0 flex list-none flex-col gap-7 p-0">
            {t.steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[32px_minmax(0,1fr)] gap-3.5">
                <span className="flex size-7 items-center justify-center rounded-full border border-line-strong bg-muted font-mono text-xs">{i + 1}</span>
                <div>
                  <h3 className="mb-1.5 text-[17px] font-bold uppercase [font-stretch:112%]">{s.title}</h3>
                  <p className="text-steel">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          {t.checklist && (
            <div className="flex flex-col gap-3">
              <h3 className="text-[17px] font-bold uppercase [font-stretch:112%]">Nada bateu? Confira o básico</h3>
              <ul className="m-0 flex list-none flex-col gap-2 p-0">
                {t.checklist.map((c) => (
                  <li key={c} className="flex gap-2.5 text-soft">
                    <span className="mt-[3px] size-4 shrink-0 rounded border border-line-strong bg-muted" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
              <a href={`${PORT_REPO_URL}/issues/new`} className={cn(buttonVariants({ size: "cta-sm" }), "mt-2 self-start")}>
                Abrir issue no GitHub
              </a>
            </div>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
}
