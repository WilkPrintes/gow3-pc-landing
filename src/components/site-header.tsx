import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons";
import { PORT_REPO_URL } from "@/content/site";
import { formatStars } from "@/lib/format";

const links = [
  { href: "/#download", label: "Download" },
  { href: "/#desempenho", label: "Desempenho" },
  { href: "/#recursos", label: "Recursos" },
  { href: "/#compatibilidade", label: "Compatibilidade" },
  { href: "/tutoriais", label: "Tutoriais" },
];

export function SiteHeader({ stars, current }: { stars: number; current?: "/tutoriais" }) {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] w-full max-w-[1360px] items-center gap-7 px-4 sm:px-8 lg:px-14">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} alt="" width={34} height={34} className="rounded-[7px]" priority />
          <span className="text-sm font-bold tracking-wide uppercase [font-stretch:125%]">
            GOW III <span className="font-medium text-steel">PC</span>
          </span>
        </Link>
        <nav aria-label="Seções" className="hidden gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={current === l.href ? "page" : undefined}
              className="text-[12.5px] font-bold tracking-[0.12em] text-steel uppercase [font-stretch:112%] hover:text-foreground aria-[current=page]:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <a
            href={PORT_REPO_URL}
            className="hidden items-center gap-2 font-mono text-xs text-steel hover:text-foreground sm:flex"
            aria-label={`Repositório do port no GitHub, ${formatStars(stars)} estrelas`}
          >
            <GithubIcon className="size-4" />★ {formatStars(stars)}
          </a>
          <Link href="/#download" className={buttonVariants({ size: "cta-sm" })}>
            Baixar
          </Link>
        </div>
      </div>
    </header>
  );
}
