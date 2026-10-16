import { Section } from "@/components/section";
import { Shot } from "@/components/shot";
import { VideoEmbed } from "@/components/video-embed";
import { PERFORMANCE_VIDEO_ID, benchmark } from "@/content/site";
import { getI18n } from "@/i18n/get-dictionary";
import tartarus from "@/assets/shots/tartarus.webp";
import cestus from "@/assets/shots/cestus.webp";

export async function PerformanceSection({ index, total }: { index: number; total: number }) {
  const { t } = await getI18n();
  const p = t.performance;
  const capture = t.common.capture;

  const stats = [
    { value: "120", unit: ".", text: p.stats[0] },
    { value: "240", unit: ".", text: p.stats[1] },
    { value: p.frametime, unit: "ms", text: p.stats[2] },
    { value: "4K", unit: ".", text: p.stats[3] },
  ];
  const bench = [
    { label: p.bench.min, value: benchmark.min, color: "var(--line-strong)", strong: false },
    { label: p.bench.avg, value: benchmark.avg, color: "var(--gold)", strong: true },
    { label: p.bench.max, value: benchmark.max, color: "var(--steel)", strong: false },
  ];

  return (
    <Section.Root id="performance">
      <Section.Header word={p.word} index={index} total={total}>
        <Section.Tape>{p.tape}</Section.Tape>
        <Section.Lead>{p.lead}</Section.Lead>
        <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 self-start rounded-md border border-line-strong bg-card px-4 py-3 text-sm leading-snug text-soft">
          <span className="caption text-gold-hi">{p.recordedOn}</span>
          <span>
            <b className="font-semibold text-foreground">GeForce RTX 3060</b> · {p.rig}
          </span>
        </p>
      </Section.Header>

      <Section.Body className="flex flex-col gap-10">
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
              <b className="text-[clamp(28px,2.6vw,40px)] leading-none font-extrabold tabular-nums font-display">
                {s.value}
                <em className="text-gold not-italic">{s.unit}</em>
              </b>
              <p className="text-sm text-steel">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-2" data-gsap="reveal">
          {/* The port video lives on YouTube (youtube-nocookie.com), never on this host */}
          <Shot.Root className="md:col-span-2">
            <VideoEmbed id={PERFORMANCE_VIDEO_ID} title={p.video.title} pending={p.video.pending} />
            <Shot.Caption meta="YouTube">{capture}</Shot.Caption>
          </Shot.Root>
          <Shot.Root>
            <Shot.Image src={tartarus} alt={p.shots.tartarus.alt} />
            <Shot.Hud>118 FPS · 8,5 ms · Native</Shot.Hud>
            <Shot.Caption meta={p.shots.tartarus.caption}>{capture}</Shot.Caption>
          </Shot.Root>
          <Shot.Root>
            <Shot.Image src={cestus} alt={p.shots.cestus.alt} />
            <Shot.Hud>120 FPS · 8,3 ms</Shot.Hud>
            <Shot.Caption meta={p.shots.cestus.caption}>{capture}</Shot.Caption>
          </Shot.Root>
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-x-14 gap-y-6 md:grid-cols-2">
          <div className="flex flex-col gap-3.5">
            <span className="caption">{p.bench.label}</span>
            {bench.map((b) => (
              <div key={b.label} className="grid grid-cols-[90px_minmax(0,1fr)_72px] items-center gap-4 font-mono text-[13px]">
                <span className={b.strong ? "" : "text-steel"}>{b.label}</span>
                <span className="relative h-1.5 overflow-hidden rounded-full bg-muted">
                  <b
                    className="absolute inset-y-0 left-0 origin-left rounded-full"
                    style={{ width: `${(b.value / benchmark.max) * 100}%`, background: b.color }}
                    data-gsap="bar"
                  />
                </span>
                <span className="text-right tabular-nums">{b.value}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-steel">{p.bench.note}</p>
        </div>
      </Section.Body>
    </Section.Root>
  );
}
