import { Section } from "@/components/section";
import { creditLinks } from "@/content/site";
import { getI18n } from "@/i18n/get-dictionary";

export async function CreditsSection({ index, total }: { index: number; total: number }) {
  const { t } = await getI18n();

  return (
    <Section.Root id="credits" className="pb-28">
      <Section.Header word={t.credits.word} index={index} total={total}>
        <Section.Tape>{t.credits.tape}</Section.Tape>
      </Section.Header>
      <Section.Body>
        <div className="grid grid-cols-[minmax(0,1fr)] border-t border-t-line-strong sm:grid-cols-2 lg:grid-cols-3" data-gsap="reveal">
          {creditLinks.map((c) => (
            <a key={c.key} href={c.href} className="group flex flex-col gap-1.5 border-b py-6 pr-6">
              <h4 className="m-0 text-[17px] leading-tight font-extrabold uppercase [font-stretch:125%] group-hover:text-gold-hi">{c.name}</h4>
              <p className="text-sm text-steel">{t.credits.items[c.key]}</p>
            </a>
          ))}
        </div>
      </Section.Body>
    </Section.Root>
  );
}
