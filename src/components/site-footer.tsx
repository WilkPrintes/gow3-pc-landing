import Image from "next/image";
import logo from "@/assets/logo.png";
import { PORT_REPO_URL } from "@/content/site";

export function SiteFooter() {
  const link = "caption hover:text-foreground";
  const name = "font-semibold text-foreground underline decoration-line-strong underline-offset-4 hover:decoration-gold-hi";
  return (
    <footer className="border-t bg-deep pt-9 pb-28">
      <div className="mx-auto mb-8 grid w-full max-w-[1360px] grid-cols-[minmax(0,1fr)] gap-4 border-b px-4 pb-8 sm:grid-cols-2 sm:px-8 lg:px-14">
        <p className="text-sm text-soft">
          <span className="caption mb-2 block text-gold-hi">O port</span>
          O gow3_pc é um projeto de{" "}
          <a className={name} href="https://github.com/FelipePrado0">
            Felipe Prado
          </a>
          , que cria e mantém o port. Downloads, issues e código ficam no{" "}
          <a className={name} href={PORT_REPO_URL}>
            repositório oficial
          </a>
          .
        </p>
        <p className="text-sm text-soft">
          <span className="caption mb-2 block text-gold-hi">Esta página</span>
          Página feita por{" "}
          <a className={name} href="https://github.com/WilkPrintes">
            Wilk Printes
          </a>
          . O código está aberto em{" "}
          <a className={name} href="https://github.com/WilkPrintes/gow3-pc-landing">
            WilkPrintes/gow3-pc-landing
          </a>
          .
        </p>
      </div>
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
