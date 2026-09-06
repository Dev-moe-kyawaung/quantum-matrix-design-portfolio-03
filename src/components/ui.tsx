import { useEffect, useRef, useState, type ReactNode } from "react";
import { Sparkles } from "lucide-react";

/* ============================================================
   GLOBAL EVENT BUS (toast + modals)
   ============================================================ */
export function toast(msg: string) {
  window.dispatchEvent(new CustomEvent("app:toast", { detail: msg }));
}
export function openResume() {
  window.dispatchEvent(new CustomEvent("app:resume"));
}
export function openCall() {
  window.dispatchEvent(new CustomEvent("app:call"));
}
export function openSnake() {
  window.dispatchEvent(new CustomEvent("app:snake"));
}

/* ============================================================
   TOASTER
   ============================================================ */
export function Toaster() {
  const [msgs, setMsgs] = useState<{ id: number; text: string }[]>([]);

  useEffect(() => {
    const handler = (e: Event) => {
      const text = (e as CustomEvent).detail as string;
      const id = Date.now() + Math.random();
      setMsgs((m) => [...m.slice(-2), { id, text }]);
      setTimeout(() => setMsgs((m) => m.filter((x) => x.id !== id)), 4200);
    };
    window.addEventListener("app:toast", handler);
    return () => window.removeEventListener("app:toast", handler);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 items-end pointer-events-none">
      {msgs.map((m) => (
        <div
          key={m.id}
          className="animate-fadeIn pointer-events-auto flex items-center gap-3 bg-[var(--surface)] border border-[var(--accent)]/40 text-[var(--text)] pl-4 pr-5 py-3 rounded-2xl shadow-[var(--shadow)] backdrop-blur-md max-w-sm"
        >
          <span className="bg-[var(--accent-soft)] text-[var(--accent)] p-1.5 rounded-lg shrink-0">
            <Sparkles className="w-4 h-4" />
          </span>
          <span className="text-xs font-semibold leading-snug">{m.text}</span>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   SCROLL REVEAL WRAPPER
   ============================================================ */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("revealed");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ============================================================
   TYPEWRITER — typing animation for hero
   ============================================================ */
export function TypeWriter({
  phrases,
  typeSpeed = 65,
  deleteSpeed = 30,
  pause = 1800,
}: {
  phrases: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
}) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[i % phrases.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setI((v) => v + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
        },
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, i, phrases, typeSpeed, deleteSpeed, pause]);

  return (
    <span className="inline-flex items-baseline">
      <span>{text}</span>
      <span className="typing-caret ml-1 inline-block h-[1.1em] w-[3px] translate-y-[3px] rounded-full bg-[var(--accent)]" />
    </span>
  );
}

/* ============================================================
   PARTICLES — ambient canvas background (Particle.js style)
   ============================================================ */
export function Particles({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const COUNT = 55;
    const isLight = () => document.documentElement.getAttribute("data-theme") === "light";

    interface P {
      x: number; y: number; vx: number; vy: number; r: number; a: number;
    }
    let parts: P[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    const init = () => {
      parts = Array.from({ length: COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.6,
        a: Math.random() * 0.5 + 0.15,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const light = isLight();
      const dot = light ? "11,191,107" : "61,220,132";
      const line = light ? "15,23,42" : "148,163,184";

      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dot},${p.a})`;
        ctx.fill();
      }

      for (let a = 0; a < parts.length; a++) {
        for (let b = a + 1; b < parts.length; b++) {
          const dx = parts[a].x - parts[b].x;
          const dy = parts[a].y - parts[b].y;
          const d = Math.hypot(dx, dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(parts[a].x, parts[a].y);
            ctx.lineTo(parts[b].x, parts[b].y);
            ctx.strokeStyle = `rgba(${line},${(1 - d / 110) * 0.14})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    const ro = new ResizeObserver(() => {
      resize();
      init();
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={ref} className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} aria-hidden="true" />;
}

/* ============================================================
   CURSOR GLOW — animated cursor effect (desktop only)
   ============================================================ */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let mx = -200, my = -200;
    let x = -200, y = -200;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px)`;
      }
    };

    const loop = () => {
      x += (mx - x) * 0.12;
      y += (my - y) * 0.12;
      if (ref.current) {
        ref.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden md:block"
        aria-hidden="true"
      >
        <div className="h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] opacity-60" />
      </div>
      <div ref={ref} className="pointer-events-none fixed left-0 top-0 z-[90] hidden md:block" aria-hidden="true">
        <div className="h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--accent)]/25 transition-none" />
      </div>
    </>
  );
}

/* ============================================================
   BRAND ICONS (lucide removed brand icons)
   ============================================================ */
export function GitHubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-1.93c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.51 3.55 12 3.55 12 3.55s-7.51 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.87.5 9.38.5 9.38.5s7.51 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
    </svg>
  );
}

/* ============================================================
   SECTION HEADING
   ============================================================ */
export function SectionHeading({
  eyebrow,
  title,
  sub,
  center = true,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
  center?: boolean;
}) {
  return (
    <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : "text-left"} mb-14`}>
      <span className="inline-flex items-center gap-2 bg-[var(--accent-soft)] border border-[var(--accent)]/25 text-[var(--accent)] px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text)]">{title}</h2>
      {sub && <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--muted)] font-light">{sub}</p>}
    </Reveal>
  );
}
