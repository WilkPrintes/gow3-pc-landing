import { buttonVariants } from "@/components/ui/button";
import { DownloadIcon } from "@/components/icons";
import { LinuxIcon, WindowsIcon } from "@/components/brand-icons";
import { PlatformCard } from "@/components/platform-card";
import { ReleaseTimeline } from "@/components/release-timeline";
import { Section } from "@/components/section";
import { getI18n } from "@/i18n/get-dictionary";
import { formatMiB } from "@/lib/format";
import type { ReleaseData } from "@/lib/release";
import { cn } from "@/lib/utils";

/** Each button fills its column, so both cards show the same two button widths */
const action = "w-full px-4";

export async function DownloadsSection({ release, index, total }: { release: ReleaseData; index: number; total: number }) {
  const { tag, t } = await getI18n();
  const d = t.downloads;
  const { windows, linux } = release;
  const copyLabels = { copy: t.common.copy, copied: t.common.copied, failed: t.common.copyFailed };

  return (
    <Section.Root id="download">
      <Section.Header word={d.word} index={index} total={total}>
        <Section.Tape>{d.tape}</Section.Tape>
        <Section.Lead>{d.lead}</Section.Lead>
      </Section.Header>
      <Section.Body className="flex flex-col gap-10">
        <p className="-mb-4 max-w-[860px] rounded-md border border-l-2 border-line-strong border-l-gold bg-card px-4 py-3.5 text-[15px] leading-relaxed text-soft">
          {d.requires}
        </p>
        <div className="grid grid-cols-[minmax(0,1fr)] gap-4 lg:grid-cols-2" data-gsap="reveal">
          {windows && (
            <PlatformCard.Root featured>
              <PlatformCard.Flag>{d.recommended}</PlatformCard.Flag>
              <PlatformCard.Title icon={<WindowsIcon />}>Windows</PlatformCard.Title>
              <PlatformCard.Specs
                rows={[
                  [d.labels.file, `${windows.name} · ${formatMiB(tag, windows.bytes)}`],
                  [d.labels.system, d.windows.system],
                  [d.labels.gpu, d.windows.gpu],
                  [d.labels.cpu, d.windows.cpu],
                ]}
              />
              <PlatformCard.Actions>
                <a href={windows.url} className={cn(buttonVariants({ size: "cta" }), action)}>
                  <DownloadIcon />
                  {d.zip}
                </a>
                <a href={release.notesUrl} className={cn(buttonVariants({ size: "cta", variant: "outline" }), action)}>
                  {t.common.releaseNotes}
                </a>
              </PlatformCard.Actions>
              <PlatformCard.Checksum value={windows.sha256} labels={copyLabels} />
            </PlatformCard.Root>
          )}
          {linux && (
            <PlatformCard.Root>
              <PlatformCard.Flag muted>{d.experimental}</PlatformCard.Flag>
              <PlatformCard.Title icon={<LinuxIcon />}>Linux</PlatformCard.Title>
              <PlatformCard.Specs
                rows={[
                  [d.labels.file, `${linux.name} · ${formatMiB(tag, linux.bytes)}`],
                  [d.labels.system, d.linux.system],
                  [d.labels.tested, d.linux.tested],
                  [d.labels.note, d.linux.note],
                ]}
              />
              <PlatformCard.Actions>
                <a href={linux.url} className={cn(buttonVariants({ size: "cta", variant: "outline" }), action)}>
                  <DownloadIcon />
                  {d.appimage}
                </a>
                <a href={release.notesUrl} className={cn(buttonVariants({ size: "cta", variant: "outline" }), action)}>
                  {t.common.releaseNotes}
                </a>
              </PlatformCard.Actions>
              <PlatformCard.Checksum value={linux.sha256} labels={copyLabels} />
            </PlatformCard.Root>
          )}
        </div>
        <ReleaseTimeline recent={release.recent} />
      </Section.Body>
    </Section.Root>
  );
}
