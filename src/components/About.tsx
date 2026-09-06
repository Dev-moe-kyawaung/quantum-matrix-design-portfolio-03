import { ExternalLink, Award, GraduationCap, Quote, Phone, Mail, MapPin, Globe } from "lucide-react";
import { profile, focusAreas, techGroups, certCategories, featuredCerts } from "../data";
import { Reveal, SectionHeading } from "./ui";
import { SpotlightCard, TiltCard, AnimatedCounter, GradientText } from "./effects";
import { useT } from "../i18n";

const FOCUS_KEYS = ["fa.mobile", "fa.backend", "fa.security", "fa.ai"];

/* ============================================================
   ABOUT + FOCUS AREAS
   ============================================================ */
export function About() {
  const t = useT();

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-soft)] border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Portrait */}
        <Reveal className="lg:col-span-5">
          <TiltCard max={7}>
            <div className="relative max-w-sm mx-auto">
              <div className="absolute -inset-4 bg-[var(--glow)] rounded-[2rem] blur-2xl opacity-70" />
              <div className="gradient-border relative rounded-3xl overflow-hidden shadow-[var(--shadow)]">
                <img
                  src={profile.portrait}
                  alt="Moe Kyaw Aung — Senior Android Developer"
                  className="w-full h-[420px] sm:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="text-white font-extrabold text-sm drop-shadow">{profile.name}</p>
                  <p className="text-white/80 text-[11px] font-mono">{profile.role}</p>
                </div>
              </div>
              {/* Floating info chips */}
              <div className="absolute -right-3 top-8 animate-float bg-[var(--surface)] border border-[var(--border)] rounded-2xl px-4 py-3 shadow-[var(--shadow)]">
                <div className="text-lg">👨‍💻</div>
                <div className="text-xs font-bold text-[var(--text)]">{profile.role}</div>
              </div>
              <div className="absolute -left-3 bottom-10 animate-float-slow bg-[var(--surface)] border border-[var(--border)] rounded-2xl px-4 py-3 shadow-[var(--shadow)]">
                <div className="text-lg">🏆</div>
                <div className="text-xs font-bold text-[var(--text)]">
                  <AnimatedCounter to={82} suffix="+ Certs" />
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 bg-[var(--accent)] text-[var(--inverse)] rounded-full px-4 py-1.5 text-[11px] font-black tracking-wide shadow-lg">
                {profile.status}
              </div>
            </div>
          </TiltCard>
        </Reveal>

        {/* Text */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 bg-[var(--accent-soft)] border border-[var(--accent)]/25 text-[var(--accent)] px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase">
              {t("about.eyebrow")}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text)]">
              {t("about.t1")} <GradientText>{t("about.t2")}</GradientText>,
              <br />
              {t("about.t3")}.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-sm sm:text-base text-[var(--muted)] leading-relaxed font-light">{profile.summary}</p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed font-light">{profile.summary2}</p>
          </Reveal>

          {/* Philosophy quote */}
          <Reveal delay={260}>
            <blockquote className="mt-6 bg-[var(--surface)] border-l-4 border-[var(--accent)] border-y border-r border-y-[var(--border)] border-r-[var(--border)] rounded-r-2xl p-5 text-left">
              <Quote className="w-5 h-5 text-[var(--accent)] mb-2" />
              <p className="text-base font-bold text-[var(--text)] italic">"{profile.philosophy}"</p>
            </blockquote>
          </Reveal>

          {/* Focus grid with spotlight */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focusAreas.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <SpotlightCard className="h-full bg-[var(--surface)] border border-[var(--border)] rounded-2xl">
                  <div className="p-5 text-left">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform origin-left">{f.emoji}</div>
                    <h3 className="text-sm font-bold text-[var(--text)]">{t(FOCUS_KEYS[i] ?? "fa.mobile")}</h3>
                    <p className="text-xs text-[var(--muted)] mt-1 leading-relaxed">{f.desc}</p>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          {/* Quick facts */}
          <Reveal delay={340}>
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-xs text-[var(--muted)]">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--accent)]" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Globe className="w-4 h-4 text-[var(--accent)]" />
                {profile.languages.join(" · ")}
              </span>
              <a href={`tel:${profile.phones[0].replace(/[^+\d]/g, "")}`} className="inline-flex items-center gap-2 hover:text-[var(--accent)] transition-colors">
                <Phone className="w-4 h-4 text-[var(--accent)]" />
                {profile.phones[0]}
              </a>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-[var(--accent)] transition-colors">
                <Mail className="w-4 h-4 text-[var(--accent)]" />
                {profile.email}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TECH STACK
   ============================================================ */
export function TechStack() {
  const t = useT();

  return (
    <section id="tech" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow={t("tech.eyebrow")} title={t("tech.title")} sub={t("tech.sub")} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techGroups.map((g, gi) => (
            <Reveal key={g.name} delay={gi * 70}>
              <SpotlightCard className="h-full bg-[var(--surface)] border border-[var(--border)] rounded-2xl">
                <div className="p-6">
                  <h3 className="text-sm font-bold text-[var(--text)] mb-4">{g.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((t) => (
                      <span
                        key={t.name}
                        className="inline-flex items-center gap-1.5 bg-[var(--card)] border border-[var(--border)] text-[var(--text)] text-xs font-semibold px-3 py-1.5 rounded-lg hover:scale-105 transition-transform cursor-default"
                      >
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: t.color }} />
                        {t.name}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CERTIFICATIONS
   ============================================================ */
export function Certifications() {
  const t = useT();

  return (
    <section id="certs" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-soft)] border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow={t("certs.eyebrow")} title={t("certs.title")} sub={t("certs.sub")} />

        {/* Featured cert cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {featuredCerts.map((c, i) => (
            <Reveal key={c.name} delay={i * 50}>
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col h-full bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-4 hover:border-[var(--accent)]/50 hover:-translate-y-1 transition-all duration-300 shine overflow-hidden relative"
              >
                <Award className="w-6 h-6 text-[var(--accent)] mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-xs font-bold text-[var(--text)] leading-snug">{c.name}</h4>
                <span className="mt-auto pt-3 inline-flex items-center gap-1 text-[10px] font-mono text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
                  Verify ↗
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Category counts */}
        <Reveal>
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 shine overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              <h3 className="text-lg font-bold text-[var(--text)] flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[var(--accent)]" />
                {t("certs.totalPrefix")}{" "}
                <AnimatedCounter to={82} className="text-[var(--accent)]" /> {t("certs.totalSuffix")}
              </h3>
              <a
                href={profile.gravatar}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[var(--accent)] hover:underline"
              >
                {t("certs.full")}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {certCategories.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center justify-between bg-[var(--card)] border border-[var(--border)] rounded-xl px-4 py-3 hover:border-[var(--accent)]/40 hover:translate-x-1 transition-all"
                >
                  <span className="text-xs font-semibold text-[var(--text)]">
                    {c.emoji} {c.name}
                  </span>
                  <span className="text-xs font-black text-[var(--accent)] font-mono">{c.count}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
