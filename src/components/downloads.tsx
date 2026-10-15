import { buttonVariants } from "@/components/ui/button";
import { CopyButton } from "@/components/copy-button";
import { SectionHeader } from "@/components/section-header";
import { formatMiB } from "@/lib/format";
import type { Asset, ReleaseData } from "@/lib/release";
import { cn } from "@/lib/utils";

function Spec({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="m-0 grid grid-cols-[minmax(0,1fr)] gap-x-[18px] gap-y-2.5 text-[15px] sm:grid-cols-[120px_minmax(0,1fr)]">
      {rows.map(([k, v]) => (
        <div key={k} className="contents">
          <dt className="text-[11.5px] leading-[1.8] font-semibold tracking-[0.16em] text-steel uppercase">{k}</dt>
          <dd className="m-0 min-w-0">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function Sha({ asset }: { asset: Asset }) {
  if (!asset.sha256) return null;
  return (
    <div className="flex min-w-0 items-center gap-2.5 border-t pt-3.5 font-mono text-xs text-steel">
      <span>SHA-256</span>
      <code className="min-w-0 flex-1 truncate text-soft">{asset.sha256}</code>
      <CopyButton value={asset.sha256} />
    </div>
  );
}

function Flag({ children, muted }: { children: string; muted?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex h-[26px] items-center self-start rounded-sm px-2.5 text-[11px] font-bold tracking-[0.14em] uppercase [font-stretch:112%]",
        muted ? "bg-steel/15 text-soft" : "bg-gold/15 text-gold-hi",
      )}
    >
      {children}
    </span>
  );
}

function Timeline({ recent }: { recent: ReleaseData["recent"] }) {
  if (recent.length < 2) return null;
  const times = recent.map((r) => Date.parse(r.publishedAt));
  const start = Math.min(...times);
  const end = Math.max(...times);
  const span = Math.max(end - start, 1);
  const stable = recent.filter((r) => !r.prerelease);
  const stableTimes = stable.map((r) => Date.parse(r.publishedAt));
  const hours = Math.round((Math.max(...stableTimes) - Math.min(...stableTimes)) / 36e5);
  const day = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short", timeZone: "UTC" });

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-x-14 gap-y-6 lg:grid-cols-[280px_minmax(0,1fr)]">
      <div className="flex flex-col gap-2">
        <span className="caption">Ritmo de atualização</span>
        <p className="text-[19px] leading-tight font-bold uppercase [font-stretch:125%]">
          {stable.length} versões em {hours} horas
        </p>
      </div>
      <div className="min-w-0" data-gsap="timeline">
        <div className="relative h-[58px]" role="img" aria-label={`Últimas ${recent.length} releases do port`}>
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
          <span>{day.format(start).replace(".", "")}</span>
          <span>{day.format(end).replace(".", "")}</span>
        </div>
      </div>
    </div>
  );
}

export function Downloads({ release, index, total }: { release: ReleaseData; index: number; total: number }) {
  const { windows, linux } = release;
  return (
    <section id="download" className="scroll-mt-20">
      <SectionHeader word="Download" index={index} total={total} tape="Sempre a versão mais recente, direto do GitHub">
        Escolha a plataforma. O launcher também se atualiza sozinho em Avançado → Verificar atualizações, mantendo saves e ajustes.
      </SectionHeader>
      <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-10 px-4 sm:px-8 lg:px-14">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-4 lg:grid-cols-2" data-gsap="reveal">
          {windows && (
            <article className="flex flex-col gap-[22px] rounded-md border border-gold/50 bg-card p-6 shadow-[inset_0_3px_0_var(--primary)] sm:p-8">
              <Flag>Recomendado</Flag>
              <h3 className="display-x text-[clamp(22px,2vw,30px)]">Windows</h3>
              <Spec
                rows={[
                  ["Arquivo", `${windows.name} · ${formatMiB(windows.bytes)}`],
                  ["Sistema", "Windows 10 (1903+) ou 11, 64 bits"],
                  ["Placa", "Vulkan 1.3 com driver atualizado"],
                  ["Processador", "x86-64 com AVX: Intel Sandy Bridge ou AMD FX em diante"],
                ]}
              />
              <div className="flex flex-wrap gap-3">
                <a href={windows.url} className={buttonVariants({ size: "cta" })}>
                  Baixar .zip
                </a>
                <a href={release.notesUrl} className={buttonVariants({ size: "cta", variant: "outline" })}>
                  Notas da versão
                </a>
              </div>
              <Sha asset={windows} />
            </article>
          )}
          {linux && (
            <article className="flex flex-col gap-[22px] rounded-md border bg-card p-6 sm:p-8">
              <Flag muted>Experimental</Flag>
              <h3 className="display-x text-[clamp(22px,2vw,30px)]">Linux</h3>
              <Spec
                rows={[
                  ["Arquivo", `${linux.name} · ${formatMiB(linux.bytes)}`],
                  ["Sistema", "x86-64 com glibc 2.39 ou mais nova"],
                  ["Testado", "Ubuntu 24.04, Debian 13, Fedora 42, Arch, openSUSE, Bazzite"],
                  ["Atenção", "Filtro anisotrópico, vibração e F12 ainda não foram testados no Linux"],
                ]}
              />
              <div className="flex flex-wrap gap-3">
                <a href={linux.url} className={buttonVariants({ size: "cta", variant: "outline" })}>
                  Baixar AppImage
                </a>
              </div>
              <Sha asset={linux} />
            </article>
          )}
        </div>
        <Timeline recent={release.recent} />
      </div>
    </section>
  );
}
