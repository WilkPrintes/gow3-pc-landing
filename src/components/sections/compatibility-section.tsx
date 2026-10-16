import type { ComponentType, CSSProperties, SVGProps } from "react";
import { Section } from "@/components/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AmdIcon, IntelIcon, NvidiaIcon, SteamDeckIcon, brandColors } from "@/components/brand-icons";
import { NOTES_VERSION } from "@/content/site";
import { fill } from "@/i18n/config";
import { getI18n } from "@/i18n/get-dictionary";
import type { Tone, Vendor } from "@/i18n/types";
import { cn } from "@/lib/utils";

const tone: Record<Tone, string> = {
  ok: "text-ok [&>i]:bg-ok",
  warn: "text-warn [&>i]:bg-warn",
  bad: "text-bad [&>i]:bg-bad",
};

// Wordmark logos (AMD, Intel) need a larger box than the symbol logos to read at the same weight
const vendors: { id: Vendor; name: string; Icon: ComponentType<SVGProps<SVGSVGElement>>; size: string }[] = [
  { id: "nvidia", name: "NVIDIA", Icon: NvidiaIcon, size: "size-[18px]" },
  { id: "amd", name: "AMD", Icon: AmdIcon, size: "size-7" },
  { id: "intel", name: "Intel", Icon: IntelIcon, size: "size-7" },
  { id: "steamdeck", name: "Steam Deck", Icon: SteamDeckIcon, size: "size-[18px]" },
];

export async function CompatibilitySection({ index, total }: { index: number; total: number }) {
  const { t } = await getI18n();
  const c = t.compatibility;

  return (
    <Section.Root id="compatibility">
      <Section.Header word={c.word} index={index} total={total}>
        <Section.Tape>{c.tape}</Section.Tape>
        <Section.Lead>{fill(c.lead, { version: NOTES_VERSION })}</Section.Lead>
      </Section.Header>
      <Section.Body>
        {/* Tabs are client components; each vendor's list is rendered on the server */}
        <Tabs defaultValue="nvidia" className="gap-0" data-gsap="reveal">
          <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
            <TabsList aria-label={c.vendorsAria} className="h-auto! w-max gap-1 rounded-none border-b border-line-strong bg-transparent p-0">
              {vendors.map(({ id, name, Icon, size }) => {
                const count = c.gpus.filter((g) => g.vendor === id).length;
                return (
                  <TabsTrigger
                    key={id}
                    value={id}
                    style={{ "--brand": brandColors[id] } as CSSProperties}
                    className="h-12! flex-none gap-2.5 rounded-none border-0 border-b-2 border-b-transparent px-4 text-sm font-bold text-foreground/60 after:hidden hover:text-foreground data-active:border-b-(--brand) data-active:bg-transparent! data-active:text-foreground sm:px-5"
                  >
                    <Icon className={cn(size, "shrink-0 text-(--brand)")} />
                    {name}
                    <span className="rounded-full bg-muted px-1.5 font-mono text-[11px] font-medium text-steel">{count}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {vendors.map(({ id }) => {
            const rows = c.gpus.filter((g) => g.vendor === id);
            const ok = rows.filter((g) => g.status === "ok").length;
            return (
              <TabsContent key={id} value={id}>
                <p className="py-4 font-mono text-xs text-steel">{fill(c.summary, { ok, bad: rows.length - ok })}</p>
                <ul className="m-0 list-none border-t p-0">
                  {rows.map((g) => (
                    <li
                      key={g.name}
                      className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-5 gap-y-1.5 border-b py-4 sm:py-[18px] lg:grid-cols-[minmax(0,1.1fr)_200px_minmax(0,1.6fr)_110px]"
                    >
                      <span className="text-[15px] leading-snug font-bold font-display sm:text-base">{g.name}</span>
                      <span
                        className={cn(
                          "inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] whitespace-nowrap font-display sm:text-[11.5px]",
                          tone[g.status],
                        )}
                      >
                        <i className="inline-block size-2 rounded-full" />
                        {g.label}
                      </span>
                      <span className="col-span-2 text-sm text-steel sm:text-[14.5px] lg:col-span-1">
                        {g.detail}
                        {g.issues && <span className="ml-2 font-mono text-xs lg:hidden">{g.issues}</span>}
                      </span>
                      <span className="hidden text-right font-mono text-xs text-steel lg:block">{g.issues ?? "—"}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            );
          })}
        </Tabs>
      </Section.Body>
    </Section.Root>
  );
}
