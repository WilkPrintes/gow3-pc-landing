import { buttonVariants } from "@/components/ui/button";
import { DownloadIcon } from "@/components/icons";
import { Hero } from "@/components/hero";
import { NewsTicker } from "@/components/news-ticker";
import { Telemetry } from "@/components/telemetry";
import { getI18n } from "@/i18n/get-dictionary";
import { formatDate, formatInt, formatMiB } from "@/lib/format";
import type { ReleaseData } from "@/lib/release";

export async function HeroSection({ release }: { release: ReleaseData }) {
  const { tag, t } = await getI18n();
  const win = release.windows;

  return (
    <section id="top">
      <Hero.Root>
        <Hero.Copy>
          <Hero.Eyebrow>{t.hero.eyebrow}</Hero.Eyebrow>
          <Hero.Title subtitle={t.hero.subtitle}>{t.hero.title}</Hero.Title>
          <Hero.Lede>{t.hero.lede}</Hero.Lede>
          <Hero.Actions>
            {win && (
              <a href={win.url} className={buttonVariants({ size: "cta" })} data-gsap="magnetic">
                <DownloadIcon />
                {t.common.downloadWindows}
              </a>
            )}
            {release.linux && (
              <a href={release.linux.url} className={buttonVariants({ size: "cta", variant: "outline" })}>
                Linux
              </a>
            )}
          </Hero.Actions>
          <Hero.Note>{t.hero.notice}</Hero.Note>
          <Hero.Meta>
            <span>
              v<b className="font-medium text-foreground">{release.version}</b>
            </span>
            {win && <b className="font-medium text-foreground">{formatMiB(tag, win.bytes)}</b>}
            <span>{formatDate(tag, release.publishedAt)}</span>
            {win && (
              <span>
                <b className="font-medium text-foreground tabular-nums" data-gsap="counter" data-value={win.downloads} data-locale={tag}>
                  {formatInt(tag, win.downloads)}
                </b>{" "}
                {t.hero.downloads}
              </span>
            )}
          </Hero.Meta>
        </Hero.Copy>
        <Hero.Aside>
          <Telemetry />
        </Hero.Aside>
      </Hero.Root>
      <NewsTicker label={t.hero.newsLabel} aria={t.hero.newsAria} items={t.hero.news} />
    </section>
  );
}
