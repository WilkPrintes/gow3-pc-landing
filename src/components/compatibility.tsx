import { SectionHeader } from "@/components/section-header";
import { gpus, NOTES_VERSION, type GpuStatus } from "@/content/site";
import { cn } from "@/lib/utils";

const tone: Record<GpuStatus, string> = {
  ok: "text-ok [&>i]:bg-ok",
  warn: "text-warn [&>i]:bg-warn",
  bad: "text-bad [&>i]:bg-bad",
};

export function Compatibility({ index, total }: { index: number; total: number }) {
  return (
    <section id="compatibilidade" className="scroll-mt-20">
      <SectionHeader word="Compatível?" index={index} total={total} tape="Veja sua placa antes de baixar">
        Tirado das notas da {NOTES_VERSION}. Se a sua placa tem um problema conhecido, acompanhe a issue em vez de abrir outra.
      </SectionHeader>
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-14">
        <ul className="m-0 list-none border-t border-t-line-strong p-0" data-gsap="reveal">
          {gpus.map((g) => (
            <li
              key={g.name}
              className="grid items-baseline gap-x-5 gap-y-2 border-b py-[18px] grid-cols-[minmax(0,1fr)_auto] lg:grid-cols-[minmax(0,1.1fr)_200px_minmax(0,1.6fr)_110px]"
            >
              <span className="text-base leading-snug font-bold [font-stretch:112%]">{g.name}</span>
              <span className={cn("inline-flex items-center gap-2 text-[11.5px] font-bold tracking-[0.12em] uppercase [font-stretch:112%]", tone[g.status])}>
                <i className="inline-block size-2 rounded-full" />
                {g.label}
              </span>
              <span className="col-span-2 text-[14.5px] text-steel lg:col-span-1">{g.detail}</span>
              <span className="hidden text-right font-mono text-xs text-steel lg:block">{g.issues ?? "—"}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
