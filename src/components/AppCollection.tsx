import { useState } from "react";
import { Search, ExternalLink, Flame, ArrowRight, FolderGit2 } from "lucide-react";
import { apps, moreRepos } from "../data";
import { Reveal, SectionHeading, GitHubIcon, toast } from "./ui";
import { TiltCard } from "./effects";
import QuantumNode from "./QuantumNode";
import { useT } from "../i18n";

export default function AppCollection() {
  const t = useT();
  const [query, setQuery] = useState("");

  const filtered = apps.filter((a) =>
    (a.name + a.desc + a.tag).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="apps" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow={t("apps.eyebrow")} title={t("apps.title")} sub={t("apps.sub")} />

        {/* ============ FEATURED: PulseSync ============ */}
        <Reveal>
          <a
            href="https://github.com/Dev-moe-kyawaung/pulsesync-android"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden flex flex-col md:flex-row items-center gap-6 bg-[var(--surface)] gradient-border shine rounded-3xl p-7 sm:p-9 mb-14 transition-all duration-300 hover:-translate-y-1 shadow-[var(--shadow)]"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--glow)] rounded-full blur-[90px] pointer-events-none" />
            <div className="w-20 h-20 shrink-0 rounded-2xl bg-[var(--grad)] flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
              🔥
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 bg-red-500/10 text-red-400 border border-red-500/20 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-2">
                <Flame className="w-3 h-3" />
                Featured Project — Senior Level
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text)]">PulseSync — Real-Time Sync Platform</h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed font-light">
                Advanced multi-module Android application demonstrating senior-level architecture — Firebase backend,
                offline-first design, MVI state engine, and a full CI/CD pipeline with GitHub Actions.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                {["Kotlin", "Jetpack Compose", "Firebase", "MVI", "CI/CD", "Multi-module"].map((x) => (
                  <span key={x} className="text-[10px] font-mono bg-[var(--card)] border border-[var(--border)] text-[var(--muted)] px-2.5 py-1 rounded">
                    {x}
                  </span>
                ))}
              </div>
            </div>
            <span className="shrink-0 inline-flex items-center gap-2 text-xs font-bold text-[var(--accent)] bg-[var(--accent-soft)] border border-[var(--accent)]/30 px-5 py-3 rounded-xl group-hover:bg-[var(--accent)] group-hover:text-[var(--inverse)] transition-all">
              View Repository
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </Reveal>

        {/* ============ SEARCH ============ */}
        <Reveal className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("apps.search")}
              aria-label="Search apps"
              className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-2xl pl-11 pr-4 py-3.5 text-sm text-[var(--text)] placeholder:text-[var(--faint)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all"
            />
          </div>
        </Reveal>

        {/* ============ APP GRID ============ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((app, i) => (
            <Reveal key={app.name} delay={(i % 4) * 70}>
              <TiltCard max={7} className="h-full">
                <QuantumNode lines depth={i % 3} className="h-full">
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`group relative flex flex-col h-full bg-gradient-to-br ${app.gradient} bg-[var(--surface)] rounded-2xl p-5 overflow-hidden hover:border-[var(--accent)]/50 transition-all duration-300`}
                  >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                      {app.emoji}
                    </span>
                    {app.isNew && (
                      <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-widest bg-[var(--accent)] text-[var(--inverse)] px-2 py-1 rounded-full">
                        <span className="w-1 h-1 rounded-full bg-[var(--inverse)] animate-ping" />
                        New
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-extrabold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                    {app.name}
                  </h3>
                  <p className="mt-1.5 text-[11px] text-[var(--muted)] leading-relaxed font-light flex-1">{app.desc}</p>
                  <div className="mt-4 pt-4 border-t border-[var(--border)] flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[var(--faint)]">{app.tag}</span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
                      View <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </a>
                </QuantumNode>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-sm text-[var(--muted)] mt-10">
            No apps match "<span className="font-bold text-[var(--text)]">{query}</span>" — try "weather" or "POS".
          </p>
        )}

        {/* ============ MORE REPOS ============ */}
        <Reveal className="mt-16">
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-7 sm:p-9">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-[var(--accent-soft)] text-[var(--accent)] p-2.5 rounded-xl">
                <FolderGit2 className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-base font-bold text-[var(--text)]">{t("apps.more.title")}</h3>
                <p className="text-xs text-[var(--muted)]">{t("apps.more.sub")}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {moreRepos.map((r) => (
                <a
                  key={r.name}
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => toast(`Opening ${r.name}…`)}
                  className="inline-flex items-center gap-2 bg-[var(--card)] border border-[var(--border)] text-xs font-semibold text-[var(--text)] px-3.5 py-2 rounded-xl hover:border-[var(--accent)]/50 hover:text-[var(--accent)] hover:scale-105 transition-all"
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                  {r.name}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
