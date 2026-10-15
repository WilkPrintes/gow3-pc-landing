import { fill } from "@/i18n/config";
import { getI18n } from "@/i18n/get-dictionary";
import { formatDay } from "@/lib/format";
import type { ReleaseData } from "@/lib/release";
import { cn } from "@/lib/utils";

/** Latest releases on a time axis: tall gold ticks for stable builds, short ones for test builds. */
export async function ReleaseTimeline({ recent }: { recent: ReleaseData["recent"] }) {
  const { tag, t } = await getI18n();
  if (recent.length < 2) return null;

  const times = recent.map((r) => Date.parse(r.publishedAt));
  const start = Math.min(...times);
  const end = Math.max(...times);
  const span = Math.max(end - start, 1);
  const stable = times.filter((_, i) => !recent[i].prerelease);
  const hours = Math.round((Math.max(...stable) - Math.min(...stable)) / 36e5);

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-x-14 gap-y-6 lg:grid-cols-[280px_minmax(0,1fr)]">
      <div className="flex flex-col gap-2">
        <span className="caption">{t.downloads.cadence.label}</span>
        <p className="text-[19px] leading-tight font-bold uppercase [font-stretch:125%]">{fill(t.downloads.cadence.summary, { count: stable.length, hours })}</p>
      </div>
      <div className="min-w-0" data-gsap="timeline">
        <div className="relative h-[58px]" role="img" aria-label={fill(t.downloads.cadence.aria, { count: recent.length })}>
          <div className="absolute inset-x-0 top-[30px] h-px bg-line-strong" />
          {recent.map((r, i) => (
            <div
              key={r.tag + i}
              className="absolute top-0 flex -translate-x-1/2 flex-col items-center gap-1"
              style={{ left: `${(((times[i] - start) / span) * 96 + 2).toFixed(2)}%` }}
            >
              <span className={cn("hidden font-mono text-[11px] whitespace-nowrap sm:block", r.prerelease && "text-steel")}>{r.tag}</span>
              <b className={cn("w-0.5", r.prerelease ? "mt-[18px] h-3 bg-steel" : "mt-1 h-[26px] bg-gold")} data-gsap="tick" />
            </div>
          ))}
        </div>
        <div className="flex justify-between font-mono text-[11px] text-steel uppercase">
          <span>{formatDay(tag, start)}</span>
          <span>{formatDay(tag, end)}</span>
        </div>
      </div>
    </div>
  );
}
