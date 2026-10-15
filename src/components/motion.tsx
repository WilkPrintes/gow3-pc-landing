"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

/**
 * All page motion in one place. Wrap a page in <Motion>; server components only
 * mark elements with data-gsap="…" and this finds them inside the wrapper.
 *
 * Lookups are scoped to the wrapper on purpose: Next 16 keeps the previous page
 * mounted but hidden after a client navigation (e.g. switching language), so a
 * document-wide query would also pick up that hidden copy.
 * With prefers-reduced-motion nothing runs and the page stays as rendered.
 */
export function Motion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const all = (sel: string) => Array.from(root.querySelectorAll<HTMLElement>(`[data-gsap="${sel}"]`));
        const one = (sel: string) => root.querySelector<HTMLElement>(`[data-gsap="${sel}"]`);
        const cleanups: (() => void)[] = [];

        // Hero: headline lines rise out of a mask, then copy, telemetry and the FPS trace
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
        const heading = one("split");
        if (heading) {
          const split = SplitText.create(heading, { type: "lines", mask: "lines" });
          intro.from(split.lines, { yPercent: 110, duration: 0.9, stagger: 0.12 }, 0.15);
          cleanups.push(() => split.revert());
        }
        const copy = one("hero-copy");
        if (copy) {
          const rest = Array.from(copy.children).filter((c) => c !== heading);
          intro.from(rest, { y: 18, autoAlpha: 0, duration: 0.7, stagger: 0.07 }, 0.35);
        }
        const tele = one("tele");
        if (tele) intro.from(tele, { x: 28, autoAlpha: 0, duration: 0.8 }, 0.55);

        const trace = root.querySelector<SVGPolylineElement>('polyline[data-gsap="draw"]');
        if (trace) {
          const len = trace.getTotalLength();
          intro.fromTo(trace, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, duration: 1.6, ease: "power2.inOut" }, 0.7);
        }
        const fps = one("fps");
        if (fps) {
          const o = { n: 0 };
          intro.to(o, { n: 120, duration: 1.2, ease: "power2.out", onUpdate: () => (fps.textContent = String(Math.round(o.n))) }, 0.7);
        }
        all("counter").forEach((el) => {
          const target = Number(el.dataset.value);
          if (!Number.isFinite(target)) return;
          const o = { n: 0 };
          intro.to(
            o,
            {
              n: target,
              duration: 1.4,
              ease: "power2.out",
              onUpdate: () => (el.textContent = new Intl.NumberFormat(el.dataset.locale).format(Math.round(o.n))),
            },
            0.6,
          );
        });

        // News ticker: the list is rendered twice, so -50% loops seamlessly
        const marquee = one("marquee");
        if (marquee) gsap.to(marquee, { xPercent: -50, duration: 38, ease: "none", repeat: -1 });

        // Play each entrance once, but keep the trigger alive. `once: true` kills a trigger
        // during the refresh of another one when the page loads already scrolled past it
        // (hash links, reloads), and ScrollTrigger then reads a missing entry ("reading 'end'").
        const playOnce = (trigger: Element | null, start: string) => ({ trigger, start, toggleActions: "play none none none" });

        // Section headers (RE Requiem style): hairline draws, word rises, tape wipes in
        all("section").forEach((sec) => {
          const tl = gsap.timeline({ scrollTrigger: playOnce(sec, "top 80%") });
          const line = sec.querySelector('[data-gsap="hairline"]');
          const word = sec.querySelector('[data-gsap="section-word"]');
          const tape = sec.querySelector('[data-gsap="tape"]');
          if (line) tl.from(line, { scaleX: 0, duration: 0.9, ease: "power3.inOut" }, 0);
          if (word) tl.from(word, { yPercent: 40, autoAlpha: 0, duration: 0.6, ease: "power3.out" }, 0.1);
          if (tape) tl.from(tape, { clipPath: "inset(0 100% 0 0)", duration: 0.7, ease: "power3.inOut" }, 0.35);
        });

        // Content blocks fade up as they enter
        all("reveal").forEach((el) => {
          gsap.fromTo(el, { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out", scrollTrigger: playOnce(el, "top 88%") });
        });

        // Release timeline ticks and benchmark bars grow in
        const ticks = all("tick");
        if (ticks.length) {
          gsap.from(ticks, {
            scaleY: 0,
            transformOrigin: "bottom",
            duration: 0.5,
            stagger: 0.06,
            ease: "back.out(2)",
            scrollTrigger: playOnce(one("timeline"), "top 85%"),
          });
        }
        all("bar").forEach((bar) => {
          gsap.from(bar, { scaleX: 0, duration: 1, ease: "power3.out", scrollTrigger: playOnce(bar, "top 90%") });
        });

        // Floating download button shows up once the hero download buttons are out of view
        const float = one("float");
        const hero = root.querySelector<HTMLElement>("#top");
        if (float && hero) {
          gsap.set(float, { yPercent: 160, autoAlpha: 0 });
          ScrollTrigger.create({
            trigger: hero,
            start: "bottom 75%",
            onEnter: () => gsap.to(float, { yPercent: 0, autoAlpha: 1, duration: 0.5, ease: "power3.out" }),
            onLeaveBack: () => gsap.to(float, { yPercent: 160, autoAlpha: 0, duration: 0.35, ease: "power2.in" }),
          });
        }

        // Main download button leans toward the pointer
        all("magnetic").forEach((el) => {
          const x = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
          const y = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });
          const move = (e: PointerEvent) => {
            const r = el.getBoundingClientRect();
            x((e.clientX - (r.left + r.width / 2)) * 0.18);
            y((e.clientY - (r.top + r.height / 2)) * 0.3);
          };
          const reset = () => {
            x(0);
            y(0);
          };
          el.addEventListener("pointermove", move);
          el.addEventListener("pointerleave", reset);
          cleanups.push(() => {
            el.removeEventListener("pointermove", move);
            el.removeEventListener("pointerleave", reset);
          });
        });

        return () => cleanups.forEach((fn) => fn());
      });
    },
    { scope },
  );

  return (
    <div ref={scope} className="contents">
      {children}
    </div>
  );
}
