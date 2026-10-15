"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "lucide-react";

export function CopyButton({ value, labels }: { value: string; labels: { copy: string; copied: string; failed: string } }) {
  const [state, setState] = useState<"idle" | "done" | "failed">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setState("done");
    } catch {
      setState("failed");
    }
    setTimeout(() => setState("idle"), 1800);
  }

  const Icon = state === "done" ? CheckIcon : CopyIcon;

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-sm sm:h-8 border border-line-strong px-2.5 text-[11px] font-bold tracking-widest uppercase transition-colors hover:border-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring data-[state=done]:border-ok/60 data-[state=done]:text-ok"
      data-state={state}
    >
      <Icon className="size-3.5" aria-hidden="true" />
      <span aria-live="polite">{state === "done" ? labels.copied : state === "failed" ? labels.failed : labels.copy}</span>
    </button>
  );
}
