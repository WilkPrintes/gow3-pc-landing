import { FeatureBlock } from "@/components/feature-block";
import { GlyphSwitcher } from "@/components/glyph-switcher";
import { Section } from "@/components/section";
import { Shot } from "@/components/shot";
import { getI18n } from "@/i18n/get-dictionary";
import glyphs from "@/assets/shots/nintendo-glyphs.webp";
import portMenuShot from "@/assets/shots/port-menu.webp";
import cutscene from "@/assets/shots/cutscene.webp";
import launcher from "@/assets/shots/launcher.png";

function Kbd({ children }: { children: string }) {
  return <kbd className="inline-flex h-6 items-center rounded-[5px] border border-b-[3px] border-[#3a444f] bg-muted px-[7px] font-mono text-xs">{children}</kbd>;
}

export async function FeaturesSection({ index, total }: { index: number; total: number }) {
  const { t } = await getI18n();
  const f = t.features;

  return (
    <Section.Root id="features">
      <Section.Header word={f.word} index={index} total={total}>
        <Section.Tape>{f.tape}</Section.Tape>
      </Section.Header>
      <Section.Body>
        <FeatureBlock.Root>
          <FeatureBlock.Media>
            <Shot.Root>
              <Shot.Image src={glyphs} alt={f.controller.shot.alt} />
              <Shot.Hud>120 FPS · 8,3 ms · Native</Shot.Hud>
              <Shot.Caption meta={f.controller.shot.meta}>{f.controller.shot.caption}</Shot.Caption>
            </Shot.Root>
          </FeatureBlock.Media>
          <FeatureBlock.Content>
            <FeatureBlock.Eyebrow>{f.controller.eyebrow}</FeatureBlock.Eyebrow>
            <FeatureBlock.Title>{f.controller.title}</FeatureBlock.Title>
            <FeatureBlock.Text>{f.controller.text}</FeatureBlock.Text>
            <GlyphSwitcher labels={{ switcher: f.controller.switcherAria, styles: f.controller.styles }} />
            <FeatureBlock.Text muted>{f.controller.note}</FeatureBlock.Text>
          </FeatureBlock.Content>
        </FeatureBlock.Root>

        <FeatureBlock.Root flip>
          <FeatureBlock.Media>
            <Shot.Root>
              <Shot.Image src={portMenuShot} alt={f.menu.shotAlt} />
            </Shot.Root>
          </FeatureBlock.Media>
          <FeatureBlock.Content>
            <FeatureBlock.Eyebrow>{f.menu.eyebrow}</FeatureBlock.Eyebrow>
            <FeatureBlock.Title>{f.menu.title}</FeatureBlock.Title>
            <FeatureBlock.Text>
              {f.menu.open} <Kbd>Insert</Kbd> {f.menu.or} <Kbd>R3</Kbd> + <Kbd>L2</Kbd>. {f.menu.saved}{" "}
              <code className="rounded border bg-muted px-1.5 py-px font-mono text-[0.86em]">gow3.ini</code>.
            </FeatureBlock.Text>
            <ul className="m-0 list-none p-0">
              {f.menu.items.map(([item, tagLabel]) => (
                <li key={item} className="flex justify-between gap-4 border-b py-3 text-[15px]">
                  <span>{item}</span>
                  <span className="text-right font-mono text-[12.5px] whitespace-nowrap text-steel">{tagLabel}</span>
                </li>
              ))}
            </ul>
          </FeatureBlock.Content>
        </FeatureBlock.Root>

        <FeatureBlock.Root>
          <FeatureBlock.Media>
            <Shot.Root>
              <Shot.Image src={cutscene} alt={f.cutscenes.shotAlt} />
            </Shot.Root>
          </FeatureBlock.Media>
          <FeatureBlock.Content>
            <FeatureBlock.Eyebrow>{f.cutscenes.eyebrow}</FeatureBlock.Eyebrow>
            <FeatureBlock.Title>{f.cutscenes.title}</FeatureBlock.Title>
            <FeatureBlock.Text>{f.cutscenes.text}</FeatureBlock.Text>
          </FeatureBlock.Content>
        </FeatureBlock.Root>

        <div className="grid grid-cols-[minmax(0,1fr)] gap-4 border-t pt-14 sm:grid-cols-2 lg:grid-cols-4" data-gsap="reveal">
          {f.more.map((item) => (
            <div key={item.title} className="flex flex-col gap-2.5 rounded-md border bg-card p-6">
              <h4 className="m-0 text-[17px] leading-tight font-extrabold uppercase [font-stretch:125%]">{item.title}</h4>
              <p className="text-[14.5px] text-steel">{item.text}</p>
            </div>
          ))}
        </div>

        <Shot.Root className="mt-4">
          <Shot.Image src={launcher} alt={f.launcher.alt} contain sizes="(min-width: 1360px) 1248px, 100vw" />
          <Shot.Caption meta={f.launcher.meta}>{f.launcher.caption}</Shot.Caption>
        </Shot.Root>
      </Section.Body>
    </Section.Root>
  );
}
