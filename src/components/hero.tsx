import { buttonVariants } from "@/components/ui/button";
import { DownloadIcon } from "@/components/icons";
import { Telemetry } from "@/components/telemetry";
import { news } from "@/content/site";
import { formatDate, formatInt, formatMiB } from "@/lib/format";
import type { ReleaseData } from "@/lib/release";

export function Hero({ release }: { release: ReleaseData }) {
  const win = release.windows;
  return (
    <section id="topo">
      <div className="relative overflow-hidden border-b bg-black">
        {/* 18 s loop, 1080p60, cut only from stretches where the port's overlay read 120 FPS */}
        <video
          className="absolute inset-0 size-full object-cover"
          poster="/media/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Gameplay de God of War III no port a 120 FPS: Caverna do Tártaro, a câmara giratória de Dédalo, as Lâminas em combate e um QTE com ícone Nintendo"
          data-gsap="hero-video"
        >
          <source src="/media/hero.webm" type="video/webm" />
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgb(14_17_20/0.96)_0%,rgb(14_17_20/0.8)_55%,rgb(14_17_20/0.35)_100%)] lg:bg-[linear-gradient(90deg,rgb(14_17_20/0.94)_0%,rgb(14_17_20/0.78)_32%,rgb(14_17_20/0.15)_62%,transparent_100%),linear-gradient(0deg,rgb(14_17_20/0.85)_0%,transparent_26%)]" />

        <div className="relative mx-auto grid w-full max-w-[1360px] items-end gap-8 px-4 pt-14 pb-10 sm:px-8 lg:min-h-[780px] lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:px-14 lg:pt-[72px] lg:pb-14">
          <div className="flex flex-col gap-[22px] self-center" data-gsap="hero-copy">
            <span className="caption text-gold-hi">Port nativo do PS4 · Windows e Linux</span>
            <h1 className="display-x text-[clamp(32px,3.6vw,54px)]" data-gsap="split">
              God of War III
              <span className="mt-2.5 block text-[0.62em] font-bold tracking-[0.04em] text-steel">Remastered no PC</span>
            </h1>
            <p className="max-w-[470px] text-lg leading-relaxed text-soft">
              O código original do jogo rodando direto no seu processador, a 120 FPS por padrão e até 240.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <a href={win?.url} className={buttonVariants({ size: "cta" })} data-gsap="magnetic">
                <DownloadIcon />
                Baixar para Windows
              </a>
              {release.linux && (
                <a href={release.linux.url} className={buttonVariants({ size: "cta", variant: "outline" })}>
                  Linux
                </a>
              )}
            </div>
            <div className="flex flex-wrap gap-x-[18px] gap-y-1.5 font-mono text-[12.5px] text-soft">
              <span>
                v<b className="font-medium text-foreground">{release.version}</b>
              </span>
              {win && (
                <span>
                  <b className="font-medium text-foreground">{formatMiB(win.bytes)}</b>
                </span>
              )}
              <span>{formatDate(release.publishedAt)}</span>
              {win && (
                <span>
                  <b className="font-medium text-foreground tabular-nums" data-gsap="counter" data-value={win.downloads}>
                    {formatInt(win.downloads)}
                  </b>{" "}
                  downloads
                </span>
              )}
            </div>
            <p className="max-w-[470px] text-[13px] text-steel">
              Requer o dump do seu PS4 (CUSA01623 ou CUSA01715), GPU com Vulkan 1.3 e CPU com AVX.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <Telemetry />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[auto_minmax(0,1fr)] border-b bg-deep">
        <div className="flex h-[52px] items-center border-r px-4 sm:px-6">
          <span className="caption text-foreground">Novidades</span>
        </div>
        <div className="overflow-hidden" aria-label="Novidades da versão" role="region">
          {/* the list is rendered twice so the marquee can loop seamlessly */}
          <div className="flex h-[52px] w-max items-center gap-12 pl-6 text-sm whitespace-nowrap" data-gsap="marquee">
            {[...news, ...news].map((item, i) => (
              <span key={i} aria-hidden={i >= news.length ? true : undefined}>
                <span className="mr-2.5 font-mono text-xs text-gold-hi">{item.version}</span>
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
