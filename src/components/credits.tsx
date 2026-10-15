import { SectionHeader } from "@/components/section-header";
import { credits } from "@/content/site";

export function Credits({ index, total }: { index: number; total: number }) {
  return (
    <section id="creditos" className="scroll-mt-16 pb-28">
      <SectionHeader word="Créditos" index={index} total={total} tape="Feito pela comunidade, código aberto sob GPL-2.0" />
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-14">
        <div className="grid border-t border-t-line-strong sm:grid-cols-2 lg:grid-cols-3" data-gsap="reveal">
          {credits.map((c) => (
            <a key={c.name} href={c.href} className="group flex flex-col gap-1.5 border-b py-6 pr-6">
              <h4 className="m-0 text-[17px] leading-tight font-extrabold uppercase [font-stretch:125%] group-hover:text-gold-hi">{c.name}</h4>
              <p className="text-sm text-steel">{c.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
