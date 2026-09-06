import { useRef, useState, useEffect } from "react";

/* ============================================================
   FLOATING AI ORB — system-level assistant with particle burst
   ============================================================ */
export default function AIOrb() {
  const [hover, setHover] = useState(false);
  const [burst, setBurst] = useState(false);
  const [tip, setTip] = useState("I'm analyzing the architecture...");
  const ref = useRef<HTMLDivElement>(null);

  const tips = [
    "Architecture decision mapped: Clean Arch + MVI",
    "Memory profile: zero heap leaks detected",
    "Offline sync engine: 42 transactions secured",
    "Performance budget: 40% faster startup",
    "Security scan: AES-GCM encryption verified",
    "Kotlin Coroutines: thread-safe flow completed",
    "Multiplatform bridge: iOS ↔ Android mapped",
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setTip(tips[Math.floor(Math.random() * tips.length)]);
    }, 4200);
    return () => clearInterval(t);
  }, []);

  const triggerBurst = () => {
    setBurst(true);
    setTimeout(() => setBurst(false), 900);
  };

  return (
    <div
      ref={ref}
      className="fixed bottom-6 right-6 z-[70] flex items-end gap-3 group"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={triggerBurst}
      style={{ pointerEvents: "auto" }}
      role="button"
      aria-label="AI architecture assistant"
      tabIndex={0}
    >
      {/* Tooltip */}
      <div
        className={`max-w-[220px] bg-[var(--surface)] border border-[var(--border)] text-xs text-[var(--text)] px-3.5 py-2 rounded-xl shadow-[var(--shadow)] text-left transition-all duration-300 pointer-events-none ${
          hover ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"
        }`}
      >
        <span className="font-mono text-[10px] text-[var(--accent)] font-bold">AI ORB · SYSTEM</span>
        <p className="mt-0.5 text-[11px] leading-relaxed">{tip}</p>
      </div>

      {/* The orb */}
      <div className="relative w-14 h-14 rounded-full bg-[var(--surface)] border-2 border-[var(--accent)] shadow-[0_0_25px_var(--glow)] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
        {/* Orbit ring */}
        <div className="orbit-ring" />
        <div className="absolute -inset-1.5 rounded-full border border-[var(--accent-2)]/30 animate-pulse" />
        <div className="text-xl z-10 relative group-hover:scale-110 transition-transform">🤖</div>
        {/* Burst particles */}
        {burst && (
          <>
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="absolute w-1 h-1 rounded-full bg-[var(--accent)] animate-pulse"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${i * 45}deg) translateY(-18px)`,
                  animationDelay: `${i * 60}ms`,
                  animationDuration: "700ms",
                  animationIterationCount: 1,
                }}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
