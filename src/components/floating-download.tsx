import Link from "next/link";
import { DownloadIcon } from "@/components/icons";

/** Persistent download button, like the RE Requiem "À venda agora" and GTA VI "Pre-order". */
export function FloatingDownload({ version }: { version: string }) {
  return (
    <Link
      href="/#download"
      data-gsap="float"
      className="fixed right-4 bottom-4 left-4 z-60 flex h-[60px] items-center justify-between gap-3.5 rounded-md bg-foreground pr-2 pl-5 text-background shadow-[0_18px_40px_rgb(0_0_0/0.45)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring sm:right-6 sm:bottom-6 sm:left-auto"
    >
      <span className="flex flex-col gap-1">
        <b className="text-[15px] leading-none font-black uppercase [font-stretch:125%]">Baixar agora</b>
        <span className="font-mono text-[11px] text-[#4b545e]">v{version} · Windows · Linux</span>
      </span>
      <i className="flex size-11 items-center justify-center rounded-[3px] bg-primary text-primary-foreground">
        <DownloadIcon className="size-[18px]" />
      </i>
    </Link>
  );
}
