import { useEffect, useState } from "react";
import { MapPin, Download, ExternalLink, ArrowRight, Sparkles, Calendar, Award } from "lucide-react";
import { profile } from "../data";
import { Reveal, TypeWriter, Particles, openResume, openCall, openSnake, toast, GitHubIcon } from "./ui";
import {
  Aurora,
  TiltCard,
  PulseRings,
  Magnetic,
  AnimatedCounter,
  ScrollIndicator,
  GradientText,
  ParallaxLayer,
} from "./effects";
import InteractiveTerminal from "./Terminal";
import { useT, useLang } from "../i18n";

/* Time-aware greeting (Tachileik / Bangkok) */
function greetKey(): string {
  const h = new Date().getHours();
  if (h < 5) return "greet.night";
  if (h < 12) return "greet.morning";
  if (h < 17) return "greet.afternoon";
  if (h < 21) return "greet.evening";
  return "greet.night";
}

/* Live clock — Asia/Yangon (GMT+6:30) */
function LiveClock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const fmt = () =>
      setT(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Yangon",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    fmt();
    const id = setInterval(fmt, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="font-mono tabular-nums">{t}</span>;
}

const STATS = [
  { to: 82, suffix: "+", key: "hero.stats.cert" },
  { to: 40, suffix: "+", key: "hero.stats.proj" },
  { to: 9, suffix: "", key: "hero.stats.cat" },
  { to: 16, suffix: "", key: "hero.stats.apps" },
];

export default function Hero({
  accent,
  onModeChange,
  onAccentChange,
}: {
  accent: string;
  onModeChange: (m: "dark" | "light") => void;
  onAccentChange: (a: string) => void;
}) {
  const t = useT();
  const lang = useLang();

  const titles = ["hero.t1", "hero.t2", "hero.t3", "hero.t4", "hero.t5"].map((k) => t(k));

  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 lg:pt-20 lg:pb-28 px-4 sm:px-6 lg:px-8">
      {/* Ambient background layers */}
      <Aurora />
      <Particles />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        {/* ================= LEFT — INTRO ================= */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 bg-[var(--accent-soft)] border border-[var(--accent)]/25 text-[var(--accent)] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              {t("hero.badge", { greet: t(greetKey()) })}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-[var(--text)]">
              <GradientText>{profile.name}</GradientText>
              <span className="block text-xl sm:text-2xl mt-2 text-[var(--muted)] font-semibold">{profile.nameMM}</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-4 text-lg sm:text-2xl font-bold text-[var(--text)] min-h-[2.5rem]" lang={lang === "mm" ? "my" : "en"}>
              <TypeWriter phrases={titles} />
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm text-[var(--muted)]">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--accent)] shrink-0" />
                {profile.location}
              </span>
              <span className="text-[var(--faint)]">·</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                <LiveClock />
              </span>
            </p>
          </Reveal>

          <Reveal delay={260}>
            <p className="mt-6 text-sm sm:text-base text-[var(--muted)] leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
              {profile.summary}
            </p>
          </Reveal>

          {/* Animated stats */}
          <Reveal delay={320}>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0">
              {STATS.map((s) => (
                <div
                  key={s.key}
                  className="group bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-4 text-center hover:border-[var(--accent)]/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-2xl font-black text-[var(--accent)] tabular-nums">
                    <AnimatedCounter to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="text-[11px] text-[var(--muted)] mt-1 font-medium">{t(s.key)}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={380}>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <Magnetic className="w-full sm:w-auto">
                <a
                  href="#apps"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[var(--accent)] text-[var(--inverse)] font-bold px-7 py-3.5 rounded-xl text-sm hover:brightness-110 hover:scale-[1.02] active:scale-95 transition-all shadow-[var(--glow)]"
                >
                  {t("hero.ctaApps")}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Magnetic>
              <button
                onClick={() => {
                  openResume();
                  toast("Opening Moe Kyaw Aung's resume…");
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[var(--card)] border border-[var(--border)] text-[var(--text)] font-semibold px-7 py-3.5 rounded-xl text-sm hover:border-[var(--accent)]/50 hover:text-[var(--accent)] transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                {t("hero.ctaResume")}
              </button>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[var(--card)] border border-[var(--border)] text-[var(--text)] font-semibold px-7 py-3.5 rounded-xl text-sm hover:border-[var(--accent)]/50 hover:text-[var(--accent)] transition-all"
              >
                <GitHubIcon className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </Reveal>

          {/* Micro trust row */}
          <Reveal delay={440}>
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-[11px]">
              <span className="inline-flex items-center gap-1.5 bg-[var(--card)] border border-[var(--border)] px-3 py-1.5 rounded-full text-[var(--muted)]">
                <Award className="w-3.5 h-3.5 text-[var(--accent)]" />
                {t("hero.trust.google")}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[var(--card)] border border-[var(--border)] px-3 py-1.5 rounded-full text-[var(--muted)]">
                🚧 {t("hero.trust.building", { app: profile.currentlyBuilding })}
              </span>
              <button
                onClick={() => {
                  openSnake();
                  toast("🐍 Launching Snake — use arrow keys!");
                }}
                className="inline-flex items-center gap-1.5 bg-[var(--card)] border border-[var(--border)] px-3 py-1.5 rounded-full text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-all cursor-pointer"
              >
                🐍 {t("hero.snake")}
              </button>
              <button
                onClick={() => {
                  openCall();
                  toast("Booking a free strategy call…");
                }}
                className="inline-flex items-center gap-1.5 bg-[var(--card)] border border-[var(--border)] px-3 py-1.5 rounded-full text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-all cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
                {t("hero.call")}
              </button>
            </div>
          </Reveal>
        </div>

        {/* ================= RIGHT — INTERACTIVE TERMINAL ================= */}
        <div className="lg:col-span-5">
          <Reveal delay={200}>
            <TiltCard max={6}>
              <div className="relative max-w-lg mx-auto lg:ml-auto">
                <div className="absolute inset-0 bg-[var(--glow)] rounded-3xl blur-3xl opacity-60 -z-10" />

                {/* Floating avatar with pulse rings (deep parallax) */}
                <ParallaxLayer depth={14} className="absolute -top-8 -right-4 sm:-right-8 z-20">
                  <div className="animate-float">
                    <PulseRings className="rounded-2xl">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-[3px] bg-[var(--grad)] shadow-[var(--shadow)]">
                        <img
                          src={profile.avatar}
                          alt="Moe Kyaw Aung"
                          className="w-full h-full object-cover rounded-[13px] bg-[var(--bg)]"
                        />
                      </div>
                    </PulseRings>
                  </div>
                </ParallaxLayer>

                {/* Floating badge (counter parallax) */}
                <ParallaxLayer depth={-10} className="absolute -bottom-5 -left-3 z-20">
                  <div className="animate-float-slow bg-[var(--surface)] border border-[var(--border)] rounded-xl px-3.5 py-2.5 shadow-[var(--shadow)] flex items-center gap-2">
                    <span className="text-lg">🚧</span>
                    <div className="leading-tight">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--muted)]">
                        {t("hero.nowBuilding")}
                      </div>
                      <div className="text-xs font-bold text-[var(--text)]">MoekyawTranslator</div>
                    </div>
                  </div>
                </ParallaxLayer>

                {/* The interactive terminal (shallow parallax) */}
                <ParallaxLayer depth={5}>
                  <InteractiveTerminal
                    accent={accent}
                    onAccentChange={onAccentChange}
                    onModeChange={onModeChange}
                  />
                </ParallaxLayer>

                <div className="mt-4 flex justify-end">
                  <a
                    href={profile.gravatar}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {t("hero.verified")}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <ScrollIndicator label={t("hero.explore")} />
      </div>
    </section>
  );
}
