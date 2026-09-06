import { useEffect, useRef, useState } from "react";

/* ============================================================
   SECTION DOT NAVIGATION — right-side progress indicator
   ============================================================ */
const SECTIONS = [
  { id: "about", label: "About" },
  { id: "tech", label: "Tech" },
  { id: "metrics", label: "Metrics" },
  { id: "apps", label: "Apps" },
  { id: "roadmap", label: "Roadmap" },
  { id: "certs", label: "Certificates" },
  { id: "vaults", label: "Vaults" },
  { id: "services", label: "Work With Me" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export default function SectionDots() {
  const [active, setActive] = useState("about");
  const raf = useRef(0);

  useEffect(() => {
    const compute = () => {
      raf.current = 0;
      const vh = window.innerHeight;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= vh * 0.45 && r.bottom >= vh * 0.45) {
          setActive(s.id);
          break;
        }
      }
    };
    const onScroll = () => {
      if (!raf.current) raf.current = requestAnimationFrame(compute);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    compute();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3.5"
    >
      {SECTIONS.map((s) => {
        const on = active === s.id;
        return (
          <button
            key={s.id}
            onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })}
            aria-label={s.label}
            aria-current={on ? "true" : undefined}
            className="group flex items-center gap-2.5 cursor-pointer"
          >
            <span
              className={`text-[10px] font-mono uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
                on
                  ? "text-[var(--accent)] opacity-100 translate-x-0"
                  : "opacity-0 translate-x-2 text-[var(--muted)] group-hover:opacity-100 group-hover:translate-x-0"
              }`}
            >
              {s.label}
            </span>
            <span
              className={`rounded-full transition-all duration-300 ${
                on
                  ? "w-3 h-6 bg-[var(--accent)] shadow-[var(--glow)]"
                  : "w-2 h-2 bg-[var(--faint)] group-hover:scale-125 group-hover:bg-[var(--muted)]"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
