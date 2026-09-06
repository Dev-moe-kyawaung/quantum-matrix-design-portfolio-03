import { useRef, ReactNode } from "react";

/* ============================================================
   QUANTUM NODE CARD — floating node with animated connection lines
   ============================================================ */
export default function QuantumNode({
  children,
  lines = true,
  depth = 0,
  className = "",
}: {
  children: ReactNode;
  lines?: boolean;
  depth?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={`relative bg-[var(--surface)]/60 backdrop-blur-md border border-[var(--border)]/60 rounded-2xl p-5 overflow-hidden shadow-[var(--shadow)] hover:border-[var(--accent)]/40 transition-all duration-500 ${className}`}
    >
      {/* Animated connection lines */}
      {lines && (
        <>
          <div
            className="data-cascade"
            style={{ left: "25%", height: "120%", animationDelay: "0.3s", animationDuration: `${3 + depth}s` }}
          />
          <div
            className="data-cascade"
            style={{ left: "75%", height: "120%", animationDelay: "1.1s", animationDuration: `${2.7 + depth}s` }}
          />
        </>
      )}
      {/* Subtle inner glow */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${45 + depth * 8}% ${55 + depth * 5}%, color-mix(in srgb, var(--accent) 6%, transparent), transparent 60%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
