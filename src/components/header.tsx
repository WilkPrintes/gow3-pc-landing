import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import logo from "@/assets/logo.png";
import { HeaderFrame } from "@/components/header-frame";

/**
 * Site header, composed per page:
 *
 *   <Header.Root solid>
 *     <Header.Brand href="/pt" label="…" tagline="…" />
 *     <Header.Nav label="Seções" links={…} current="/pt/tutorials" />
 *     <Header.Actions>…</Header.Actions>
 *   </Header.Root>
 */

export type HeaderLink = { href: string; label: string };

function Root({ solid, children }: { solid?: boolean; children: ReactNode }) {
  return (
    <HeaderFrame solid={solid}>
      <div className="mx-auto flex h-[72px] w-full max-w-[1360px] items-center gap-3 px-4 sm:gap-6 sm:px-8 lg:px-14">{children}</div>
    </HeaderFrame>
  );
}

function Brand({ href, label, tagline }: { href: string; label: string; tagline: string }) {
  return (
    <Link href={href} className="group flex shrink-0 items-center gap-3" aria-label={label}>
      <Image src={logo} alt="" width={38} height={38} className="rounded-lg ring-1 ring-white/10" priority />
      <span className="flex flex-col gap-1 leading-none">
        <span className="text-[15px] font-extrabold tracking-[0.02em] uppercase [font-stretch:125%]">God of War III</span>
        <span className="font-mono text-[10.5px] tracking-[0.08em] text-steel uppercase group-hover:text-gold-hi">{tagline}</span>
      </span>
    </Link>
  );
}

function Nav({ label, links, current }: { label: string; links: HeaderLink[]; current?: string }) {
  return (
    <nav aria-label={label} className="mx-auto hidden items-center gap-1 lg:flex">
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
  );
}

function Actions({ children }: { children: ReactNode }) {
  return <div className="ml-auto flex items-center gap-2 sm:gap-3 lg:ml-0">{children}</div>;
}

/** Pill-shaped link used for the release chip and the GitHub stars */
function Chip({ href, title, label, className, children }: { href: string; title?: string; label?: string; className?: string; children: ReactNode }) {
  return (
    <a
      href={href}
      title={title}
      aria-label={label}
      className={
        "h-9 items-center gap-2 rounded-full border border-white/12 bg-black/25 px-3 font-mono text-xs text-soft transition-colors hover:border-gold/60 hover:text-foreground " +
        (className ?? "flex")
      }
    >
      {children}
    </a>
  );
}

export const Header = { Root, Brand, Nav, Actions, Chip };
