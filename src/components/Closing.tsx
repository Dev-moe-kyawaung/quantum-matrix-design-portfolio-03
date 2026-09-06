import { useState } from "react";
import { ChevronDown, CheckCircle2, ArrowRight, Phone, Mail, MapPin, Send, Calendar } from "lucide-react";
import { services, faqs, profile, socials, apps } from "../data";
import { Reveal, SectionHeading, toast, openCall, GitHubIcon, LinkedInIcon, YouTubeIcon } from "./ui";
import { useT } from "../i18n";

const SVC_KEYS = ["review", "mentor", "build"];

/* ============================================================
   WORK WITH ME — SERVICES / PRICING
   ============================================================ */
export function Services() {
  const t = useT();

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-soft)] border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow={t("svc.eyebrow")} title={t("svc.title")} sub={t("svc.sub")} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
          {services.map((s, i) => {
            const sk = SVC_KEYS[i] ?? "review";
            return (
              <Reveal key={s.name} delay={i * 90}>
                <div
                  className={`relative flex flex-col h-full rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 shine overflow-hidden ${
                    s.featured
                      ? "bg-[var(--surface)] gradient-border shadow-[var(--glow)]"
                      : "bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/40"
                  }`}
                >
                  {s.featured && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--accent)] text-[var(--inverse)] text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap">
                      ⭐ Most Popular
                    </span>
                  )}
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="text-lg font-extrabold text-[var(--text)]">{t(`svc.${sk}.name`)}</h3>
                  <p className="mt-1.5 text-xs text-[var(--muted)] leading-relaxed font-light">{t(`svc.${sk}.desc`)}</p>
                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="text-3xl font-black text-[var(--text)]">{s.price}</span>
                    <span className="text-[11px] text-[var(--faint)]">{s.unit}</span>
                  </div>
                  <ul className="mt-6 space-y-2.5 flex-1">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-xs text-[var(--muted)]">
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => {
                      toast(`${s.name} — let's talk!`);
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`mt-7 w-full py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer active:scale-95 ${
                      s.featured
                        ? "bg-[var(--accent)] text-[var(--inverse)] hover:brightness-110"
                        : "bg-[var(--card)] border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
                    }`}
                  >
                    {s.featured ? t("svc.cta.roadmap") : t("svc.cta.other")}
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ
   ============================================================ */
export function FAQ() {
  const t = useT();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <SectionHeading eyebrow={t("faq.eyebrow")} title={t("faq.title")} sub={t("faq.sub")} />

        <div className="space-y-4">
          {faqs.map((_, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 60}>
                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[var(--card)] transition-colors"
                  >
                    <span className="text-sm font-bold text-[var(--text)]">{t(`faq.${i}.q`)}</span>
                    <ChevronDown className={`w-5 h-5 text-[var(--accent)] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] border-t border-[var(--border)]" : "max-h-0 overflow-hidden"}`}>
                    <p className="p-5 text-sm text-[var(--muted)] leading-relaxed font-light">{t(`faq.${i}.a`)}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FINAL CTA — fireworks background
   ============================================================ */
export function FinalCTA() {
  const t = useT();

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${profile.fireworks})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-transparent to-[var(--bg)]" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 bg-[var(--accent-soft)] border border-[var(--accent)]/30 text-[var(--accent)] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
            {t("final.eyebrow")}
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text)]">
            {t("final.t1")}
            <span className="block animate-gradient-text">{t("final.t2")}</span>
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-5 text-sm sm:text-base text-[var(--muted)] font-light max-w-2xl mx-auto leading-relaxed">
            {t("final.sub")} "{profile.philosophy}"
          </p>
        </Reveal>
        <Reveal delay={260}>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[var(--accent)] text-[var(--inverse)] font-bold px-8 py-4 rounded-xl text-sm hover:brightness-110 hover:scale-[1.02] active:scale-95 transition-all shadow-[var(--glow)]"
            >
              {t("final.cta1")}
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => {
                openCall();
                toast("Booking a free consultation…");
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] font-semibold px-8 py-4 rounded-xl text-sm hover:border-[var(--accent)]/50 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[var(--accent)]" />
              {t("final.cta2")}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT
   ============================================================ */
export function Contact() {
  const t = useT();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast("Please fill in all fields!");
      return;
    }
    setSent(true);
    toast("📨 Message sent! Moe will reply within 24 hours.");
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-soft)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 bg-[var(--accent-soft)] border border-[var(--accent)]/25 text-[var(--accent)] px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase">
              {t("contact.eyebrow")}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text)]">{t("contact.title")}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-sm text-[var(--muted)] font-light leading-relaxed max-w-lg">{t("contact.sub")}</p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 space-y-4">
              <a
                href={`tel:${profile.phones[0].replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-4 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-4 hover:border-[var(--accent)]/50 transition-all group"
              >
                <span className="bg-[var(--accent-soft)] text-[var(--accent)] p-3 rounded-xl"><Phone className="w-5 h-5" /></span>
                <span>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-[var(--faint)]">Primary Mobile</span>
                  <span className="text-sm font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">{profile.phones[0]}</span>
                </span>
              </a>
              <a
                href={`tel:${profile.phones[1].replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-4 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-4 hover:border-[var(--accent)]/50 transition-all group"
              >
                <span className="bg-[var(--accent-soft)] text-[var(--accent)] p-3 rounded-xl"><Phone className="w-5 h-5" /></span>
                <span>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-[var(--faint)]">Secondary Mobile</span>
                  <span className="text-sm font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">{profile.phones[1]}</span>
                </span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-4 hover:border-[var(--accent)]/50 transition-all group"
              >
                <span className="bg-[var(--accent-soft)] text-[var(--accent)] p-3 rounded-xl"><Mail className="w-5 h-5" /></span>
                <span className="min-w-0">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-[var(--faint)]">Primary Email</span>
                  <span className="text-sm font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors truncate">{profile.email}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-4">
                <span className="bg-[var(--accent-soft)] text-[var(--accent)] p-3 rounded-xl"><MapPin className="w-5 h-5" /></span>
                <span>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-[var(--faint)]">Base of Operations</span>
                  <span className="text-sm font-bold text-[var(--text)]">{profile.location}</span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 flex items-center gap-3 flex-wrap">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--faint)]">Find me on:</span>
              <a href="https://github.com/Moekyawaung" target="_blank" rel="noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/50 transition-all">
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/moe-kyaw-aung-2653093a1" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/50 transition-all">
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/channel/UCuTXUguZb4xjeL2nX8WJGew" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/50 transition-all">
                <YouTubeIcon className="w-4 h-4" />
              </a>
              {socials.slice(0, 4).map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name} title={s.name} className="w-9 h-9 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-base hover:border-[var(--accent)]/50 hover:scale-110 transition-all">
                  {s.emoji}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={150}>
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-7 sm:p-9 shadow-[var(--shadow)] h-full">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 animate-fadeIn">
                <div className="w-16 h-16 bg-[var(--accent-soft)] text-[var(--accent)] rounded-full flex items-center justify-center mb-5">
                  <Send className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold text-[var(--text)]">Message Received! 🎉</h3>
                <p className="mt-3 text-sm text-[var(--muted)] max-w-sm leading-relaxed font-light">
                  Thanks, <strong className="text-[var(--text)]">{form.name}</strong>! I'll reply to{" "}
                  <strong className="text-[var(--accent)]">{form.email}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="mt-7 text-xs font-bold text-[var(--accent)] hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <h3 className="text-lg font-extrabold text-[var(--text)]">{t("contact.sendTitle")}</h3>
                <div>
                  <label htmlFor="c-name" className="block text-[10px] font-mono uppercase tracking-wider text-[var(--muted)] mb-1.5">{t("contact.name")}</label>
                  <input
                    id="c-name"
                    type="text"
                    required
                    placeholder={t("contact.namePh")}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--faint)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="c-email" className="block text-[10px] font-mono uppercase tracking-wider text-[var(--muted)] mb-1.5">{t("contact.email")}</label>
                  <input
                    id="c-email"
                    type="email"
                    required
                    placeholder={t("contact.emailPh")}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--faint)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="c-msg" className="block text-[10px] font-mono uppercase tracking-wider text-[var(--muted)] mb-1.5">{t("contact.msg")}</label>
                  <textarea
                    id="c-msg"
                    required
                    rows={5}
                    placeholder={t("contact.msgPh")}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--faint)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[var(--accent)] text-[var(--inverse)] font-bold py-3.5 rounded-xl text-sm hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  {t("contact.send")}
                </button>
                <p className="text-[10px] text-[var(--faint)] text-center">{t("contact.secure")}</p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
export function Footer() {
  const t = useT();

  return (
    <footer className="bg-[var(--bg)] border-t border-[var(--border)] pt-14 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-[var(--border)]">
          {/* Brand */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img src={profile.avatar} alt="Moe Kyaw Aung" className="w-11 h-11 rounded-xl ring-2 ring-[var(--accent)]/50 object-cover" />
              <div className="leading-tight">
                <div className="font-extrabold text-[var(--text)] text-sm tracking-tight">MOE KYAW AUNG</div>
                <div className="text-[10px] font-mono text-[var(--accent)] uppercase tracking-[0.2em]">{profile.role}</div>
              </div>
            </div>
            <p className="text-xs text-[var(--muted)] leading-relaxed font-light">
              Empowering businesses and developers across Myanmar 🇲🇲, Thailand 🇹🇭 and beyond with production-grade Android
              engineering. {profile.philosophy}
            </p>
            <div className="flex items-center gap-2 pt-1">
              {socials.slice(0, 6).map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name} title={s.name} className="w-8 h-8 rounded-lg bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-sm hover:border-[var(--accent)]/50 hover:scale-110 transition-all">
                  {s.emoji}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)] mb-4">{t("footer.nav")}</h4>
            <ul className="space-y-2.5 text-xs">
              {[
                ["About", "#about"],
                ["Tech Stack", "#tech"],
                ["Metrics", "#metrics"],
                ["App Collection", "#apps"],
                ["Roadmap", "#roadmap"],
                ["Vaults", "#vaults"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={h}><a href={h} className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Top apps */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)] mb-4">{t("footer.apps")}</h4>
            <ul className="space-y-2.5 text-xs">
              {apps.slice(0, 6).map((a) => (
                <li key={a.name}>
                  <a href={a.url} target="_blank" rel="noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5">
                    {a.emoji} {a.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)] mb-4">{t("footer.touch")}</h4>
            <ul className="space-y-3 text-xs text-[var(--muted)]">
              {profile.phones.map((p) => (
                <li key={p}>
                  <a href={`tel:${p.replace(/[^+\d]/g, "")}`} className="inline-flex items-center gap-2 hover:text-[var(--accent)] transition-colors">
                    <Phone className="w-3.5 h-3.5 text-[var(--accent)]" /> {p}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-[var(--accent)] transition-colors break-all">
                  <Mail className="w-3.5 h-3.5 text-[var(--accent)]" /> {profile.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" /> {profile.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 text-center space-y-3">
          <p className="text-[11px] text-[var(--faint)]">
            © 2026 Moe Kyaw Aung · မိုးကျော်အောင်. All rights reserved. Built with ❤️ in Tachileik & Bangkok.
          </p>
          <p className="text-[10px] text-[var(--faint)]">
            Android, Kotlin, Google Play & Google Developers Launchpad are trademarks of Google LLC. Certificates are issued by
            Programming Hub. This site is an independent portfolio. 🐍 P.S. — type "snake" in the hero terminal.
          </p>
        </div>
      </div>
    </footer>
  );
}
