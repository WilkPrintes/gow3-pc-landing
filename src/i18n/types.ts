export type Tone = "ok" | "warn" | "bad";

export type TutorialContent = {
  id: string;
  title: string;
  hint: string;
  tone: Tone;
  badge: string;
  intro: string;
  /** Terminal block: lines starting with "!" are highlighted */
  log?: { label: string; lines: string[] };
  note?: { label: string; text: string };
  table?: { line: string; cause: string; fix: string }[];
  steps: { title: string; text: string }[];
  checklist?: string[];
};

export type Vendor = "amd" | "nvidia" | "intel" | "steamdeck";

export type GpuRow = { vendor: Vendor; name: string; status: Tone; label: string; detail: string; issues?: string };

export type ShotCopy = { alt: string; caption?: string; meta?: string };
