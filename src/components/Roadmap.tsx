import { useState } from "react";
import { ChevronRight, Check, MessageSquare, Cpu, Layers, Smartphone, Lock, Code, Zap, ArrowRight } from "lucide-react";
import { roadmapNodes } from "../data";
import { Reveal, SectionHeading, toast, openCall } from "./ui";
import { useT } from "../i18n";

const NODE_ICONS: Record<string, typeof Cpu> = {
  arch: Layers,
  perf: Cpu,
  compose: Smartphone,
  offline: Lock,
  kmp: Code,
  devops: Zap,
};

export default function Roadmap() {
  const t = useT();
  const [activeId, setActiveId] = useState("arch");
  const [checked, setChecked] = useState<string[]>([]);

  const node = roadmapNodes.find((n) => n.id === activeId) ?? roadmapNodes[0];
  const Icon = NODE_ICONS[node.id] ?? Cpu;
  const progress = Math.min(Math.round((checked.length / 24) * 100), 100);

  const toggle = (skill: string) => {
    setChecked((c) => {
      const has = c.includes(skill);
      if (!has) toast(`✅ Mastered: ${skill.slice(0, 36)}…`);
      return has ? c.filter((s) => s !== skill) : [...c, skill];
    });
  };

  return (
    <section id="roadmap" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--glow)] rounded-full blur-[160px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow={t("roadmap.eyebrow")} title={t("roadmap.title")} sub={t("roadmap.sub")} />

        {/* Progress */}
        <Reveal className="max-w-xl mx-auto mb-12">
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-5">
            <div className="flex justify-between items-center text-xs mb-2">
              <span className="text-[var(--muted)] font-medium">{t("roadmap.ready")}</span>
              <span className="text-[var(--accent)] font-mono font-black text-sm">{progress}%</span>
            </div>
            <div className="w-full bg-[var(--bg)] h-3 rounded-full overflow-hidden p-[1.5px]">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${progress}%`, background: "var(--grad)", backgroundSize: "200% 200%" }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-[var(--faint)] mt-2 font-mono">
              <span>{t("roadmap.acquired", { n: checked.length })}</span>
              <span>{t("roadmap.goal")}</span>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tabs */}
          <div className="lg:col-span-4 space-y-2.5">
            {roadmapNodes.map((n, i) => {
              const NIcon = NODE_ICONS[n.id] ?? Cpu;
              const active = n.id === activeId;
              return (
                <Reveal key={n.id} delay={i * 60}>
                  <button
                    onClick={() => setActiveId(n.id)}
                    aria-pressed={active}
                    className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                      active
                        ? "bg-[var(--accent-soft)] border-[var(--accent)]/50 shadow-[var(--glow)]"
                        : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)]/30"
                    }`}
                  >
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${active ? "bg-[var(--accent)] text-[var(--inverse)]" : "bg-[var(--card)] text-[var(--muted)]"}`}>
                      <NIcon className="w-5 h-5" />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-[var(--faint)]">{n.duration} · {n.level}</span>
                      <span className="block text-[13px] font-bold text-[var(--text)] truncate">{n.title}</span>
                    </span>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${active ? "text-[var(--accent)] translate-x-0.5" : "text-[var(--faint)]"}`} />
                  </button>
                </Reveal>
              );
            })}
          </div>

          {/* Detail panel */}
          <Reveal delay={120} className="lg:col-span-8">
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 sm:p-9 shadow-[var(--shadow)]">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="bg-[var(--accent)] text-[var(--inverse)] p-2.5 rounded-xl">
                  <Icon className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] font-bold">
                    {node.duration} — Level: {node.level}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[var(--text)]">{node.title}</h3>
                </div>
              </div>

              <p className="text-sm text-[var(--muted)] leading-relaxed font-light mb-7">{node.description}</p>

              <h4 className="text-[11px] font-mono uppercase tracking-widest text-[var(--muted)] mb-3">
                {t("roadmap.master")}
              </h4>
              <div className="space-y-2.5 mb-7">
                {node.skills.map((skill) => {
                  const isChecked = checked.includes(skill);
                  return (
                    <button
                      key={skill}
                      onClick={() => toggle(skill)}
                      className={`w-full flex items-center gap-3 p-3.5 rounded-xl border text-left text-[13px] transition-all cursor-pointer ${
                        isChecked
                          ? "bg-[var(--accent-soft)] border-[var(--accent)]/50 text-[var(--text)]"
                          : "bg-[var(--card)] border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)]/30 hover:text-[var(--text)]"
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border transition-colors ${isChecked ? "bg-[var(--accent)] border-[var(--accent)] text-[var(--inverse)]" : "border-[var(--faint)]"}`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </span>
                      {skill}
                    </button>
                  );
                })}
              </div>

              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-5 mb-7">
                <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[var(--accent)] font-bold">
                  <MessageSquare className="w-4 h-4" />
                  {t("roadmap.mock")}
                </div>
                <p className="text-sm font-semibold text-[var(--text)] leading-relaxed">{node.question}</p>
                <p className="text-[11px] text-[var(--faint)] mt-2 italic">{t("roadmap.rubric")}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--faint)] mr-1">{t("roadmap.tools")}</span>
                {node.tooling.map((tool) => (
                  <span key={tool} className="text-[11px] font-mono bg-[var(--card)] border border-[var(--border)] text-[var(--muted)] px-2.5 py-1 rounded">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12 text-center">
          <button
            onClick={() => {
              openCall();
              toast("Let's map your personal roadmap together!");
            }}
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:text-[var(--text)] transition-colors cursor-pointer"
          >
            {t("roadmap.cta")}
            <ArrowRight className="w-4 h-4" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
