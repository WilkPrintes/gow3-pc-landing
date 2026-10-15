import { fpsSamples } from "@/content/site";

const W = 300;
const H = 64;
const TOP = 8; // y of the 120 FPS line
const RANGE = 70; // FPS shown below 120

/** Overlay-style card with the real per-second FPS trace from the hero recording. */
export function Telemetry() {
  const n = fpsSamples.length;
  const points = fpsSamples
    .map((fps, i) => `${((i / (n - 1)) * W).toFixed(1)},${(TOP + ((120 - fps) / RANGE) * (H - 12)).toFixed(1)}`)
    .join(" ");
  const at120 = fpsSamples.filter((f) => f >= 119).length;
  const share = Math.round((at120 / n) * 100);
  const min = Math.min(...fpsSamples);

  return (
    <div
      className="flex w-full flex-col gap-3 rounded-lg border border-white/12 bg-deep/75 p-[18px] backdrop-blur-md sm:w-[380px]"
      data-gsap="tele"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-soft uppercase [font-stretch:112%]">
          <i className="size-[7px] rounded-full bg-ok shadow-[0_0_0_3px_rgb(127_207_152/0.2)]" />
          Overlay do port
        </span>
        <span className="font-mono text-[11px] text-steel">Native · 1080p</span>
      </div>
      <div className="flex items-baseline gap-2.5">
        <b className="text-[44px] leading-none font-extrabold tabular-nums [font-stretch:125%]" data-gsap="fps">
          120
        </b>
        <span className="font-mono text-[13px] text-soft">FPS · 8,3 ms</span>
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        className="block h-16 w-full"
        role="img"
        aria-label={`FPS por segundo em ${n} segundos de gameplay na Caverna do Tártaro: ${share}% do tempo a 120, mínimo de ${min}`}
      >
        <line x1="0" y1={TOP} x2={W} y2={TOP} stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="3 4" />
        <polyline points={`0,${H} ${points} ${W},${H}`} fill="rgb(201 160 82 / 0.16)" stroke="none" />
        <polyline points={points} fill="none" stroke="var(--gold-hi)" strokeWidth="1.6" strokeLinejoin="round" data-gsap="draw" />
      </svg>
      <div className="flex justify-between font-mono text-[11px] text-steel">
        <span>Caverna do Tártaro · {n} s</span>
        <span>{share}% do tempo a 120</span>
      </div>
    </div>
  );
}
