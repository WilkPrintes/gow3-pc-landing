import { SectionHeader } from "@/components/section-header";
import { Shot } from "@/components/shot";
import tartarus from "@/assets/shots/tartarus.webp";
import titan from "@/assets/shots/titan.webp";
import cestus from "@/assets/shots/cestus.webp";

const stats = [
  { value: "120", unit: ".", text: "FPS no motor, ligado por padrão" },
  { value: "240", unit: ".", text: "FPS com o patch opcional" },
  { value: "4,2", unit: "ms", text: "tempo de quadro a 240 FPS" },
  { value: "4K", unit: ".", text: "resolução máxima de render, a partir de 480p" },
];

const bench = [
  { label: "mínimo", value: 55, color: "var(--line-strong)" },
  { label: "média", value: 144, color: "var(--gold)" },
  { label: "máximo", value: 240, color: "var(--steel)" },
];

export function Performance({ index, total }: { index: number; total: number }) {
  return (
    <section id="desempenho" className="scroll-mt-20">
      <SectionHeader word="Desempenho" index={index} total={total} tape="120 FPS por padrão. 240 se você quiser.">
        O código do jogo roda direto na CPU, sem emulação. Os números abaixo são do overlay do próprio port, em resolução nativa.
      </SectionHeader>
      <div className="mx-auto -mt-4 mb-10 w-full max-w-[1360px] px-4 sm:px-8 lg:px-14">
        <p className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-md border border-line-strong bg-card px-4 py-2.5 text-sm text-soft">
          <span className="caption text-gold-hi">Gravado em</span>
          <span>
            <b className="font-semibold text-foreground">GeForce RTX 3060</b> · 1080p nativo · motor a 120 FPS · NVIDIA App
          </span>
        </p>
      </div>
      <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-10 px-4 sm:px-8 lg:px-14">
        <div className="grid grid-cols-2 border-y border-t-line-strong lg:grid-cols-4" data-gsap="reveal">
          {stats.map((s, i) => (
            <div
              key={s.text}
              className={
                "flex flex-col gap-2.5 py-7 pr-6 " +
                (i % 2 === 1 ? "border-l pl-6 " : "") +
                (i >= 2 ? "border-t lg:border-t-0 " : "") +
                (i === 2 ? "lg:border-l lg:pl-6" : "")
              }
            >
              <b className="text-[clamp(28px,2.6vw,40px)] leading-none font-extrabold tabular-nums [font-stretch:125%]">
                {s.value}
                <em className="not-italic text-gold">{s.unit}</em>
              </b>
              <p className="text-sm text-steel">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-2" data-gsap="reveal">
          <Shot
            className="md:col-span-2"
            src={tartarus}
            alt="Kratos chegando à Caverna do Tártaro"
            hud="118 FPS · 8,5 ms · Native"
            caption="Caverna do Tártaro"
            meta="overlay do port"
            sizes="(min-width: 1360px) 1248px, 100vw"
          />
          <Shot src={titan} alt="Kratos sobre uma plataforma diante de um titã, com lava abaixo" hud="120 FPS · 8,3 ms" caption="Gameplay" meta="Native" />
          <Shot src={cestus} alt="Kratos com o Cestus de Nemeia entre pilares de gelo" hud="120 FPS · 8,3 ms" caption="Gameplay" meta="Native" />
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-x-14 gap-y-6 md:grid-cols-2">
          <div className="flex flex-col gap-3.5">
            <span className="caption">Referência · 1080p · motor a 240</span>
            {bench.map((b) => (
              <div key={b.label} className="grid grid-cols-[90px_minmax(0,1fr)_72px] items-center gap-4 font-mono text-[13px]">
                <span className={b.label === "média" ? "" : "text-steel"}>{b.label}</span>
                <span className="relative h-1.5 overflow-hidden rounded-full bg-muted">
                  <b
                    className="absolute inset-y-0 left-0 origin-left rounded-full"
                    style={{ width: `${(b.value / 240) * 100}%`, background: b.color }}
                    data-gsap="bar"
                  />
                </span>
                <span className="text-right tabular-nums">{b.value}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-steel">
            RX 6700 XT, Ryzen 5 5600X e 32 GB. É um resultado de referência, não garantia para outras máquinas. Em notebooks com NVIDIA, Stream buffer memory em
            System RAM pode render mais FPS.
          </p>
        </div>
      </div>
    </section>
  );
}
