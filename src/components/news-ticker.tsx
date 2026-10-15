export function NewsTicker({ label, aria, items }: { label: string; aria: string; items: { version: string; text: string }[] }) {
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)] border-b bg-deep">
      <div className="flex h-[52px] items-center border-r px-4 sm:px-6">
        <span className="caption text-foreground">{label}</span>
      </div>
      <div className="overflow-hidden" aria-label={aria} role="region">
        {/* the list is rendered twice so the marquee can loop seamlessly */}
        <div className="flex h-[52px] w-max items-center gap-12 pl-6 text-sm whitespace-nowrap" data-gsap="marquee">
          {[...items, ...items].map((item, i) => (
            <span key={i} aria-hidden={i >= items.length ? true : undefined}>
              <span className="mr-2.5 font-mono text-xs text-gold-hi">{item.version}</span>
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
