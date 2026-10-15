import Image from "next/image";
import logo from "@/assets/logo.png";
import { PORT_REPO_URL } from "@/content/site";

export function SiteFooter() {
  const link = "caption hover:text-foreground";
  return (
    <footer className="border-t bg-deep pt-9 pb-28">
      <div className="mx-auto flex w-full max-w-[1360px] flex-wrap items-center justify-between gap-6 px-4 sm:px-8 lg:px-14">
        <div className="flex items-center gap-3.5">
          <Image src={logo} alt="" width={28} height={28} className="rounded-md" />
          <p className="max-w-[640px] text-[12.5px] text-steel">
            Projeto de fãs, sem afiliação com a Sony Interactive Entertainment ou a Santa Monica Studio. God of War é marca registrada da Sony Interactive
            Entertainment. Nenhum arquivo do jogo é distribuído.
          </p>
        </div>
        <nav className="flex gap-5" aria-label="Links do projeto">
          <a className={link} href={PORT_REPO_URL}>
            Repositório
          </a>
          <a className={link} href={`${PORT_REPO_URL}/issues`}>
            Issues
          </a>
          <a className={link} href="https://ko-fi.com/S7O428PBCC">
            Ko-fi
          </a>
        </nav>
      </div>
    </footer>
  );
}
