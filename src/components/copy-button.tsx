"use client";

import { useState } from "react";

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

  return (
    <button
      type="button"
      onClick={copy}
      className="h-7 shrink-0 rounded-sm border border-line-strong px-2.5 text-[11px] font-bold tracking-widest uppercase hover:border-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <span aria-live="polite">{state === "done" ? labels.copied : state === "failed" ? labels.failed : labels.copy}</span>
    </button>
  );
}
