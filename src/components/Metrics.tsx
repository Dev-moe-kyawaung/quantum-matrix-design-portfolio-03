import { useEffect, useRef, useState } from "react";
import { Radar } from "lucide-react";
import { Reveal, SectionHeading, GitHubIcon } from "./ui";
import { AnimatedCounter } from "./effects";
import { useT } from "../i18n";

/* ============================================================
   LIVE DEVELOPER METRICS — GitHub API + skill radar + languages
   ============================================================ */

const SKILLS = [
  { label: "Android", value: 95 },
  { label: "Kotlin", value: 92 },
  { label: "Architecture", value: 90 },
  { label: "Backend", value: 86 },
  { label: "AI / ML", value: 80 },
  { label: "Security", value: 75 },
];

const FALLBACK_LANGS: [string, number][] = [
  ["Kotlin", 46],
  ["JavaScript", 22],
  ["Python", 14],
  ["Dart", 8],
  ["HTML", 6],
  ["Other", 4],
];

const CX = 150;
const CY = 150;
const R = 92;

function pt(i: number, f: number) {
  const ang = (-90 + i * 60) * (Math.PI / 180);
  return [CX + R * f * Math.cos(ang), CY + R * f * Math.sin(ang)] as const;
}
function poly(f: number) {
  return SKILLS.map((_, i) => pt(i, f).join(",")).join(" ");
}

export default function Metrics() {
  const t = useT();
  const [on, setOn] = useState(false);
  const [barsIn, setBarsIn] = useState(false);
  const radarRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);

  const [gh, setGh] = useState({ followers: 12, repos: 40, live: false });
  const [langs, setLangs] = useState<[string, number][]>(FALLBACK_LANGS);

  /* Radar + bars reveal on scroll */
  useEffect(() => {
    const targets = [radarRef.current, barsRef.current].filter(Boolean) as Element[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (e.target === radarRef.current) setOn(true);
            if (e.target === barsRef.current) setBarsIn(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    targets.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* Live GitHub data (graceful offline fallback) */
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [u, r] = await Promise.all([
          fetch("https://api.github.com/users/Dev-moe-kyawaung"),
          fetch("https://api.github.com/users/Dev-moe-kyawaung/repos?per_page=100"),
        ]);
        if (cancelled || !u.ok || !r.ok) return;
        const ud = await u.json();
        const rd = await r.json();

        const counts: Record<string, number> = {};
        (rd as { language: string | null }[]).forEach((x) => {
          if (x.language) counts[x.language] = (counts[x.language] || 0) + 1;
        });
        const total = Object.values(counts).reduce((a, b) => a + b, 0);
        if (total > 0) {
          const entries = Object.entries(counts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([k, v]) => [k, Math.round((v / total) * 100)] as [string, number]);
          const rest = 100 - entries.reduce((a, b) => a + b[1], 0);
          if (rest > 0) entries.push(["Other", rest]);
          setLangs(entries);
        }
        setGh({ followers: ud.followers ?? 0, repos: ud.public_repos ?? 0, live: true });
      } catch {
        /* offline — keep cached values */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const COLORS = ["var(--accent)", "var(--accent-2)", "var(--accent-3)", "var(--accent)", "var(--accent-2)", "var(--accent-3)"];

  return (
    <section id="metrics" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-soft)] border-y border-[var(--border)] relative overflow-hidden">
      <div className="absolute -top-20 right-10 w-[360px] h-[360px] bg-[var(--glow)] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow={t("metrics.eyebrow")}
          title={t("metrics.title")}
          sub={t("metrics.sub")}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* ---------- RADAR CHART ---------- */}
          <Reveal className="lg:col-span-5">
            <div ref={radarRef} className="gradient-border h-full bg-[var(--surface)] rounded-3xl p-6 sm:p-8">
              <h3 className="text-sm font-bold text-[var(--text)] flex items-center gap-2 mb-2">
                <Radar className="w-4.5 h-4.5 text-[var(--accent)]" />
                {t("metrics.skills")}
              </h3>
              <p className="text-[11px] text-[var(--muted)] mb-4 font-light">0–100 proficiency scale</p>

              <svg viewBox="0 0 300 300" className="w-full max-w-[340px] mx-auto" role="img" aria-label="Skill radar chart">
                {/* Grid rings */}
                {[0.25, 0.5, 0.75, 1].map((f) => (
                  <polygon
                    key={f}
                    points={poly(f)}
                    fill="none"
                    stroke="var(--border)"
                    strokeWidth="1"
                    opacity={f === 1 ? 1 : 0.5}
                  />
                ))}
                {/* Axis lines */}
                {SKILLS.map((_, i) => {
                  const [x, y] = pt(i, 1);
                  return <line key={i} x1={CX} y1={CY} x2={x} y2={y} stroke="var(--border)" strokeWidth="1" opacity="0.5" />;
                })}
                {/* Value polygon */}
                <g
                  style={{
                    transformOrigin: "150px 150px",
                    transform: on ? "scale(1)" : "scale(0)",
                    transition: "transform 1.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <polygon
                    points={SKILLS.map((s, i) => pt(i, s.value / 100).join(",")).join(" ")}
                    fill="var(--accent-soft)"
                    stroke="var(--accent)"
                    strokeWidth="2"
                  />
                  {SKILLS.map((s, i) => {
                    const [x, y] = pt(i, s.value / 100);
                    return <circle key={i} cx={x} cy={y} r="3.5" fill="var(--accent)" />;
                  })}
                </g>
                {/* Labels */}
                {SKILLS.map((s, i) => {
                  const [x, y] = pt(i, 1.24);
                  return (
                    <text
                      key={s.label}
                      x={x}
                      y={y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="var(--muted)"
                      fontSize="11"
                      fontWeight="700"
                      fontFamily="JetBrains Mono, monospace"
                    >
                      {s.label}
                    </text>
                  );
                })}
              </svg>
            </div>
          </Reveal>

          {/* ---------- GITHUB + LANGUAGES ---------- */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Reveal delay={100}>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <h3 className="text-sm font-bold text-[var(--text)] flex items-center gap-2.5">
                    <span className="bg-[var(--accent-soft)] text-[var(--accent)] p-2 rounded-xl">
                      <GitHubIcon className="w-4.5 h-4.5" />
                    </span>
                    {t("metrics.github")}
                  </h3>
                  <span
                    className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full ${
                      gh.live
                        ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                        : "bg-[var(--card)] text-[var(--muted)]"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${gh.live ? "bg-[var(--accent)]" : "bg-[var(--faint)]"}`} />
                    {gh.live ? t("metrics.live") : t("metrics.cached")}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-4 text-center hover:border-[var(--accent)]/40 transition-colors">
                    <div className="text-2xl font-black text-[var(--accent)] tabular-nums">
                      <AnimatedCounter to={gh.followers} />
                    </div>
                    <div className="text-[11px] text-[var(--muted)] mt-1">{t("metrics.followers")}</div>
                  </div>
                  <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-4 text-center hover:border-[var(--accent)]/40 transition-colors">
                    <div className="text-2xl font-black text-[var(--accent-2)] tabular-nums">
                      <AnimatedCounter to={gh.repos} />
                    </div>
                    <div className="text-[11px] text-[var(--muted)] mt-1">{t("metrics.repos")}</div>
                  </div>
                  <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-4 text-center hover:border-[var(--accent)]/40 transition-colors col-span-2 sm:col-span-1">
                    <div className="text-2xl font-black text-[var(--accent-3)] tabular-nums">
                      <AnimatedCounter to={82} suffix="+" />
                    </div>
                    <div className="text-[11px] text-[var(--muted)] mt-1">{t("hero.stats.cert")}</div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Languages bars */}
            <Reveal delay={160}>
              <div ref={barsRef} className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 sm:p-7 flex-1">
                <h3 className="text-sm font-bold text-[var(--text)] mb-5">{t("metrics.languages")}</h3>
                <div className="space-y-4">
                  {langs.map(([name, pct], i) => (
                    <div key={name}>
                      <div className="flex justify-between items-center text-xs mb-1.5">
                        <span className="font-mono font-semibold text-[var(--text)]">{name}</span>
                        <span className="font-mono text-[var(--muted)] tabular-nums">{pct}%</span>
                      </div>
                      <div className="w-full bg-[var(--bg)] h-2.5 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: barsIn ? `${pct}%` : "0%",
                            transitionDelay: `${i * 120}ms`,
                            background: `linear-gradient(90deg, ${COLORS[i % COLORS.length]}, var(--accent-2))`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-[10px] font-mono text-[var(--faint)]">
                  data: api.github.com · repos language distribution
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
