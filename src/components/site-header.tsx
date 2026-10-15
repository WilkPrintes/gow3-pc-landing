import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { buttonVariants } from "@/components/ui/button";
import { DownloadIcon, GithubIcon } from "@/components/icons";
import { HeaderFrame } from "@/components/header-frame";
import { MobileMenu, type NavLink } from "@/components/mobile-menu";
import { PORT_REPO_URL } from "@/content/site";
import { formatStars } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { ReleaseData } from "@/lib/release";

const links: NavLink[] = [
  { href: "/#download", label: "Download" },
  { href: "/#desempenho", label: "Desempenho" },
  { href: "/#recursos", label: "Recursos" },
  { href: "/#compatibilidade", label: "Compatibilidade" },
  { href: "/tutoriais", label: "Tutoriais" },
];

export function SiteHeader({ release, current }: { release: ReleaseData; current?: "/tutoriais" }) {
  const stars = formatStars(release.stars);

  return (
    <HeaderFrame solid={current !== undefined}>
      <div className="mx-auto flex h-[72px] w-full max-w-[1360px] items-center gap-3 px-4 sm:gap-6 sm:px-8 lg:px-14">
        <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label="God of War III para PC, início">
          <Image src={logo} alt="" width={38} height={38} className="rounded-lg ring-1 ring-white/10" priority />
          <span className="flex flex-col gap-1 leading-none">
            <span className="text-[15px] font-extrabold tracking-[0.02em] uppercase [font-stretch:125%]">God of War III</span>
            <span className="font-mono text-[10.5px] tracking-[0.08em] text-steel uppercase group-hover:text-gold-hi">Port nativo · PC</span>
          </span>
        </Link>

        <nav aria-label="Seções" className="mx-auto hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={current === l.href ? "page" : undefined}
              className="relative px-3 py-2 text-[13.5px] font-semibold text-foreground/75 transition-colors after:absolute after:inset-x-3 after:-bottom-px after:h-0.5 after:origin-left after:scale-x-0 after:bg-gold-hi after:transition-transform after:duration-300 hover:text-foreground hover:after:scale-x-100 aria-[current=page]:text-foreground aria-[current=page]:after:scale-x-100"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3 lg:ml-0">
          <a
            href={release.notesUrl}
            className="hidden h-9 items-center gap-2 rounded-full border border-white/12 bg-black/25 px-3 font-mono text-xs text-soft transition-colors hover:border-gold/60 hover:text-foreground xl:flex"
            title="Notas da versão mais recente"
          >
            <i className="size-[7px] rounded-full bg-ok shadow-[0_0_0_3px_rgb(127_207_152/0.18)]" />v{release.version}
          </a>
          <a
            href={PORT_REPO_URL}
            className="hidden h-9 items-center gap-2 rounded-full border border-white/12 bg-black/25 px-3 font-mono text-xs text-soft transition-colors hover:border-foreground/50 hover:text-foreground md:flex"
            aria-label={`Repositório do port no GitHub, ${stars} estrelas`}
          >
            <GithubIcon className="size-4" />★ {stars}
          </a>
          <Link href="/#download" className={cn(buttonVariants({ size: "cta-sm" }), "max-sm:w-10 max-sm:px-0")} aria-label="Baixar">
            <DownloadIcon className="size-4" />
            <span className="hidden sm:inline">Baixar</span>
          </Link>
          <MobileMenu links={links} current={current} version={release.version} notesUrl={release.notesUrl} repoUrl={PORT_REPO_URL} stars={stars} />
        </div>
      </div>
    </HeaderFrame>
  );
}
