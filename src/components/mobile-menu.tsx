import Link from "next/link";
import type { ReactElement, ReactNode } from "react";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import type { HeaderLink } from "@/components/header";

/**
 * Slide-in menu for phones, composed from the shadcn Sheet:
 *
 *   <MobileMenu.Root openLabel="…" title="…" subtitle="…">
 *     <MobileMenu.Links label="…" links={…} current="…" />
 *     <MobileMenu.Footer>
 *       …
 *       <MobileMenu.Close render={<Link href="…" />}>…</MobileMenu.Close>
 *     </MobileMenu.Footer>
 *   </MobileMenu.Root>
 */

function Root({ openLabel, title, subtitle, children }: { openLabel: string; title: string; subtitle: string; children: ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger
        aria-label={openLabel}
        className="flex size-10 items-center justify-center rounded-md border border-line-strong text-foreground hover:border-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:hidden"
      >
        <MenuIcon className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[86%] max-w-sm gap-0 border-l-line-strong bg-background p-0">
        <div className="border-b px-6 pt-6 pb-5">
          <SheetTitle className="text-sm font-extrabold tracking-wide uppercase font-display">{title}</SheetTitle>
          <SheetDescription className="mt-1 font-mono text-xs text-steel">{subtitle}</SheetDescription>
        </div>
        {children}
      </SheetContent>
    </Sheet>
  );
}

function Links({ label, links, current }: { label: string; links: HeaderLink[]; current?: string }) {
  return (
    <nav aria-label={label} className="flex flex-col px-3 py-4">
      {links.map((l) => (
        <SheetClose
          key={l.href}
          nativeButton={false}
          render={
            <Link
              href={l.href}
              aria-current={current === l.href ? "page" : undefined}
              className="flex h-12 items-center rounded-md px-3 text-[17px] font-bold uppercase font-display hover:bg-card aria-[current=page]:text-gold-hi"
            />
          }
        >
          {l.label}
        </SheetClose>
      ))}
    </nav>
  );
}

function Footer({ children }: { children: ReactNode }) {
  return <div className="mt-auto flex flex-col gap-3 border-t px-6 py-6">{children}</div>;
}

/** Closes the sheet when activated; pass the element to render (usually a Link). */
function Close({ render, children }: { render: ReactElement; children: ReactNode }) {
  return (
    <SheetClose nativeButton={false} render={render}>
      {children}
    </SheetClose>
  );
}

export const MobileMenu = { Root, Links, Footer, Close };
