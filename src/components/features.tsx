import { SectionHeader } from "@/components/section-header";
import { Shot } from "@/components/shot";
import { GlyphSwitcher } from "@/components/glyph-switcher";
import { moreFeatures, portMenu } from "@/content/site";
import glyphs from "@/assets/shots/nintendo-glyphs.webp";
import portMenuShot from "@/assets/shots/port-menu.webp";
import cutscene from "@/assets/shots/cutscene.webp";
import launcher from "@/assets/shots/launcher.png";

function Kbd({ children }: { children: string }) {
  return (
    <kbd className="inline-flex h-6 items-center rounded-[5px] border border-b-[3px] border-[#3a444f] bg-muted px-[7px] font-mono text-xs">
      {children}
    </kbd>
  );
}

function Block({ flip, media, children }: { flip?: boolean; media: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="grid items-center gap-10 border-t py-14 first:border-t-0 first:pt-0 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-14" data-gsap="reveal">
      <div className={flip ? "lg:order-2" : undefined}>{media}</div>
      <div className="flex flex-col gap-5">{children}</div>
    </div>
  );
}

const h3 = "display-x text-[clamp(20px,1.8vw,27px)] leading-[1.1]";
const lead = "text-[16.5px] text-soft";

export function Features({ index, total }: { index: number; total: number }) {
  return (
    <section id="recursos" className="scroll-mt-16">
      <SectionHeader word="Recursos" index={index} total={total} tape="O que o port já faz hoje" />
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-14">
        <Block
          media={
            <Shot
              src={glyphs}
              alt="Menu Fortalecer das Lâminas do Exílio com os comandos B, X, Y e A no estilo Nintendo"
              hud="120 FPS · 8,3 ms · Native"
              caption="Menu Fortalecer com ícones Nintendo"
              meta="B · X · Y · A"
            />
          }
        >
          <span className="caption">Controle</span>
          <h3 className={h3}>Os botões do seu controle no jogo</h3>
          <p className={lead}>
            QTEs, tutoriais e a lista de golpes mostram ícones de Xbox ou Nintendo, em qualquer idioma. DualSense, Xbox e teclado funcionam juntos, com remapeamento.
          </p>
          <GlyphSwitcher />
          <p className="text-sm text-steel">
            Launcher → Jogo → Controles → Ícones no jogo. Os ícones são gerados em cópias de dois arquivos, cerca de 70 MB, fora da pasta do jogo.
          </p>
        </Block>

        <Block flip media={<Shot src={portMenuShot} alt="Menu do port aberto durante o jogo, aba Game, com cheats e multiplicadores" />}>
          <span className="caption">Menu do port</span>
          <h3 className={h3}>Cheats e ajustes sem sair do jogo</h3>
          <p className={lead}>
            Abra com <Kbd>Insert</Kbd> ou <Kbd>R3</Kbd> + <Kbd>L2</Kbd>. Tudo fica salvo em{" "}
            <code className="rounded border bg-muted px-1.5 py-px font-mono text-[0.86em]">gow3.ini</code>.
          </p>
          <ul className="m-0 list-none p-0">
            {portMenu.map(([item, tag]) => (
              <li key={item} className="flex justify-between gap-4 border-b py-3 text-[15px]">
                <span>{item}</span>
                <span className="text-right font-mono text-[12.5px] whitespace-nowrap text-steel">{tag}</span>
              </li>
            ))}
          </ul>
        </Block>

        <Block media={<Shot src={cutscene} alt="Cutscene com Kratos e legenda em português" />}>
          <span className="caption">Cutscenes e áudio</span>
          <h3 className={h3}>Vídeos, vozes e legendas funcionando</h3>
          <p className={lead}>Cutscenes em H.264, música, vozes e efeitos em ATRAC9 e MP3. As legendas e menus aparecem no idioma do seu dump.</p>
        </Block>

        <div className="grid gap-4 border-t pt-14 sm:grid-cols-2 lg:grid-cols-4" data-gsap="reveal">
          {moreFeatures.map((f) => (
            <div key={f.title} className="flex flex-col gap-2.5 rounded-md border bg-card p-6">
              <h4 className="m-0 text-[17px] leading-tight font-extrabold uppercase [font-stretch:125%]">{f.title}</h4>
              <p className="text-[14.5px] text-steel">{f.text}</p>
            </div>
          ))}
        </div>
        <Shot
          className="mt-4"
          src={launcher}
          contain
          alt="Página Início do launcher do port, com ajustes rápidos de modo de exibição, resolução, limite de quadros e taxa do motor, e o botão Jogar"
          caption="Launcher · página Início"
          meta="Nativa (1080p) · motor a 120 FPS · 2 patches"
          sizes="(min-width: 1360px) 1248px, 100vw"
        />
      </div>
    </section>
  );
}
