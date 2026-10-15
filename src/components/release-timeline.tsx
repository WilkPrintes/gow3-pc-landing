import { fill } from "@/i18n/config";
import { getI18n } from "@/i18n/get-dictionary";
import { formatDay } from "@/lib/format";
import type { ReleaseData } from "@/lib/release";
import { cn } from "@/lib/utils";

/** Labels closer than this (in % of the track) go to the row below the axis */
const MIN_GAP = 8;

/**
 * Latest releases on a time axis. Stable releases get a tall gold tick and a
 * label; test builds get a short tick under the axis and only a tooltip, since
 * their tags are long and tend to land next to a stable release.
 */
export async function ReleaseTimeline({ recent }: { recent: ReleaseData["recent"] }) {
  const { tag, t } = await getI18n();
  const c = t.downloads.cadence;
  if (recent.length < 2) return null;

  const items = recent
    .map((r) => ({ ...r, time: Date.parse(r.publishedAt) }))
    .sort((a, b) => a.time - b.time);
  const start = items[0].time;
  const end = items[items.length - 1].time;
  const span = Math.max(end - start, 1);
  const pos = (time: number) => ((time - start) / span) * 96 + 2;

  const stable = items.filter((r) => !r.prerelease);
  const tests = items.filter((r) => r.prerelease);
  const hours = stable.length > 1 ? Math.round((stable[stable.length - 1].time - stable[0].time) / 36e5) : 0;

  // Alternate label rows when two stable releases sit close together
  const lastInRow = [-Infinity, -Infinity];
  const labels = stable.map((r) => {
    const left = pos(r.time);
    const row = left - lastInRow[0] >= MIN_GAP || left - lastInRow[1] < MIN_GAP ? 0 : 1;
    lastInRow[row] = left;
    return { ...r, left, row };
  });
  const align = (left: number) => (left < 6 ? "translate-x-0" : left > 94 ? "-translate-x-full" : "-translate-x-1/2");

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-x-14 gap-y-6 lg:grid-cols-[280px_minmax(0,1fr)]">
      <div className="flex flex-col gap-2">
        <span className="caption">{c.label}</span>
        <p className="text-[19px] leading-tight font-bold uppercase [font-stretch:125%]">{fill(c.summary, { count: stable.length, hours })}</p>
      </div>

      <div className="min-w-0" data-gsap="timeline">
        <div className="relative h-[86px]" role="img" aria-label={fill(c.aria, { count: items.length })}>
          <div className="absolute inset-x-0 top-[42px] h-px bg-line-strong" />

          {labels.map((r) => (
            <div key={r.tag} className="absolute top-0 h-full" style={{ left: `${r.left.toFixed(2)}%` }}>
              <b className="absolute top-[18px] left-0 h-6 w-0.5 -translate-x-1/2 bg-gold" data-gsap="tick" />
              {r.row === 1 && <i className="absolute top-[43px] left-0 h-[22px] w-px -translate-x-1/2 bg-gold/40" />}
              <span
                className={cn(
                  "absolute hidden font-mono text-[11px] whitespace-nowrap text-foreground sm:block",
                  r.row === 0 ? "top-0" : "top-[66px]",
                  align(r.left),
                )}
              >
                {r.tag}
              </span>
            </div>
          ))}

          {tests.map((r) => (
            <b
              key={r.tag}
              title={`${r.tag} · ${formatDay(tag, r.time)}`}
              className="absolute top-[43px] h-3 w-0.5 -translate-x-1/2 bg-steel"
              style={{ left: `${pos(r.time).toFixed(2)}%` }}
              data-gsap="tick"
            />
          ))}
        </div>

        <div className="mt-1 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 font-mono text-[11px] text-steel">
          <span className="uppercase">{formatDay(tag, start)}</span>
          <span className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <b className="inline-block h-3 w-0.5 bg-gold" />
              {c.stable}
            </span>
            {tests.length > 0 && (
              <span className="flex items-center gap-1.5">
                <b className="inline-block h-2 w-0.5 bg-steel" />
                {fill(c.tests, { count: tests.length })}
              </span>
            )}
          </span>
          <span className="uppercase">{formatDay(tag, end)}</span>
        </div>
      </div>
    </div>
  );
}
