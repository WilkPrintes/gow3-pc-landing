import { Section } from "@/components/section";
import { NOTES_VERSION } from "@/content/site";
import { fill } from "@/i18n/config";
import { getI18n } from "@/i18n/get-dictionary";
import type { Tone } from "@/i18n/types";
import { cn } from "@/lib/utils";

const tone: Record<Tone, string> = {
  ok: "text-ok [&>i]:bg-ok",
  warn: "text-warn [&>i]:bg-warn",
  bad: "text-bad [&>i]:bg-bad",
};

export async function CompatibilitySection({ index, total }: { index: number; total: number }) {
  const { t } = await getI18n();
  const c = t.compatibility;

  return (
    <Section.Root id="compatibility">
      <Section.Header word={c.word} index={index} total={total}>
        <Section.Tape>{c.tape}</Section.Tape>
        <Section.Lead>{fill(c.lead, { version: NOTES_VERSION })}</Section.Lead>
      </Section.Header>
      <Section.Body>
        <ul className="m-0 list-none border-t border-t-line-strong p-0" data-gsap="reveal">
          {c.gpus.map((g) => (
            <li
              key={g.name}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-5 gap-y-2 border-b py-[18px] lg:grid-cols-[minmax(0,1.1fr)_200px_minmax(0,1.6fr)_110px]"
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
      </Section.Body>
    </Section.Root>
  );
}
