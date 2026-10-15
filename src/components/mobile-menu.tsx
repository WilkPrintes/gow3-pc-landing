"use client";

import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { DownloadIcon, GithubIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export type NavLink = { href: string; label: string };

export function MobileMenu({
  links,
  current,
  version,
  notesUrl,
  repoUrl,
  stars,
}: {
  links: NavLink[];
  current?: string;
  version: string;
  notesUrl: string;
  repoUrl: string;
  stars: string;
}) {
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Abrir menu"
        className="flex size-10 items-center justify-center rounded-md border border-line-strong text-foreground hover:border-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:hidden"
      >
        <MenuIcon className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[86%] max-w-sm gap-0 border-l-line-strong bg-background p-0">
        <div className="border-b px-6 pt-6 pb-5">
          <SheetTitle className="text-sm font-extrabold tracking-wide uppercase [font-stretch:125%]">God of War III · PC</SheetTitle>
          <SheetDescription className="mt-1 font-mono text-xs text-steel">Port nativo · gow3_pc</SheetDescription>
        </div>
        <nav aria-label="Seções" className="flex flex-col px-3 py-4">
          {links.map((l) => (
            <SheetClose
              key={l.href}
              nativeButton={false}
              render={
                <Link
                  href={l.href}
                  aria-current={current === l.href ? "page" : undefined}
                  className="flex h-12 items-center rounded-md px-3 text-[17px] font-bold uppercase [font-stretch:112%] hover:bg-card aria-[current=page]:text-gold-hi"
                />
              }
            >
              {l.label}
            </SheetClose>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-3 border-t px-6 py-6">
          <a href={notesUrl} className="flex items-center gap-2 font-mono text-xs text-soft">
            <i className="size-[7px] rounded-full bg-ok" />
            Versão {version} · notas da versão
          </a>
          <a href={repoUrl} className="flex items-center gap-2 font-mono text-xs text-soft">
            <GithubIcon className="size-4" />
            FelipePrado0/gow3_pc · ★ {stars}
          </a>
          <SheetClose
            nativeButton={false}
            render={<Link href="/#download" className={cn(buttonVariants({ size: "cta" }), "mt-2 w-full")} />}
          >
            <DownloadIcon />
            Baixar v{version}
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
