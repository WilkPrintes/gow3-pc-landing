import Link from "next/link";
import { DownloadIcon } from "@/components/icons";
import { fill } from "@/i18n/config";
import { getI18n } from "@/i18n/get-dictionary";

/** Persistent download button, like the RE Requiem "À venda agora" and GTA VI "Pre-order". */
export async function FloatingDownload({ version }: { version: string }) {
  const { locale, t } = await getI18n();
  return (
    <Link
      href={`/${locale}#download`}
      data-gsap="float"
      className="fixed right-4 bottom-4 z-60 flex h-14 items-center justify-between gap-3 rounded-md bg-foreground pr-1.5 pl-4 sm:right-6 sm:bottom-6 sm:h-[60px] sm:gap-3.5 sm:pr-2 sm:pl-5 text-background shadow-[0_18px_40px_rgb(0_0_0/0.45)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring"
    >
      <span className="flex flex-col gap-1">
        <b className="text-[15px] leading-none font-black font-display">{t.common.downloadNow}</b>
        <span className="hidden font-mono text-[11px] text-[#4b545e] sm:block">{fill(t.common.floatingMeta, { version })}</span>
      </span>
      <i className="flex size-11 shrink-0 items-center justify-center rounded-[3px] bg-primary text-primary-foreground">
        <DownloadIcon className="size-[18px]" />
      </i>
    </Link>
  );
}
