import { useEffect, useState } from "react";
import { GradientText, PulseRings } from "./effects";

/* ============================================================
   BRANDED BOOT PRELOADER — MKA monogram + progress sequence
   ============================================================ */
export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGone(true);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const D = 1250;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / D, 1);
      const eased = 1 - Math.pow(1 - p, 2);
      setProgress(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setFading(true);
        setTimeout(() => setGone(true), 600);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (gone) return null;

  const status =
    progress < 30
      ? "Compiling Kotlin…"
      : progress < 60
        ? "Inflating Compose UI…"
        : progress < 85
          ? "Syncing Firebase…"
          : "Launching Portfolio…";

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[var(--bg)] flex flex-col items-center justify-center transition-all duration-500 ${
        fading ? "opacity-0 scale-[1.04]" : "opacity-100"
      }`}
      aria-hidden={fading}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="aurora-blob w-[380px] h-[380px] top-1/4 left-1/4" style={{ background: "var(--accent)" }} />
        <div className="aurora-blob w-[320px] h-[320px] bottom-1/4 right-1/4" style={{ background: "var(--accent-2)", animationDelay: "-7s" }} />
      </div>

      {/* MKA Monogram */}
      <div className="relative">
        <PulseRings className="rounded-3xl">
          <div className="gradient-border rounded-3xl bg-[var(--surface)] px-10 py-7 shadow-[var(--shadow)]">
            <span className="text-4xl sm:text-5xl font-black tracking-tight">
              <GradientText>MKA</GradientText>
            </span>
            <p className="mt-2 text-[10px] font-mono uppercase tracking-[0.35em] text-[var(--muted)]">
              Moe Kyaw Aung
            </p>
          </div>
        </PulseRings>
      </div>

      {/* Progress bar */}
      <div className="mt-10 w-60 h-1 bg-[var(--card)] rounded-full overflow-hidden">
        <div className="preload-bar h-full rounded-full transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Status row */}
      <div className="mt-4 flex items-center gap-3 text-[11px] font-mono text-[var(--faint)]">
        <span className="text-[var(--accent)] tabular-nums w-9 text-right">{progress}%</span>
        <span>{status}</span>
      </div>
    </div>
  );
}
