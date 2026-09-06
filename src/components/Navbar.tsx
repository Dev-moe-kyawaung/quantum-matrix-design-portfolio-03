import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X, ArrowRight, Palette, Check, Search, Languages } from "lucide-react";
import { profile } from "../data";
import { useT, useLang, setLang } from "../i18n";

const links = [
  { id: "about", key: "nav.about" },
  { id: "tech", key: "nav.tech" },
  { id: "apps", key: "nav.apps" },
  { id: "roadmap", key: "nav.roadmap" },
  { id: "vaults", key: "nav.vaults" },
  { id: "contact", key: "nav.contact" },
];

export const ACCENTS = [
  { id: "emerald", label: "Android Emerald", c1: "#34e38a", c2: "#22d3ee" },
  { id: "ocean", label: "Ocean Blue", c1: "#38bdf8", c2: "#818cf8" },
  { id: "royal", label: "Royal Violet", c1: "#a78bfa", c2: "#f472b6" },
  { id: "sunset", label: "Sunset Gold", c1: "#fbbf24", c2: "#fb7185" },
  { id: "rose", label: "Rose Neon", c1: "#fb7185", c2: "#f472b6" },
];

export default function Navbar({
  mode,
  accent,
  onModeChange,
  onAccentChange,
  onOpenPalette,
}: {
  mode: "dark" | "light";
  accent: string;
  onModeChange: (m: "dark" | "light") => void;
  onAccentChange: (a: string) => void;
  onOpenPalette: () => void;
}) {
  const t = useT();
  const lang = useLang();
  const [open, setOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  /* Smart auto-hide: hides on scroll down, reveals on scroll up */
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y > 280 && y - lastY > 6 && !open && !themeOpen) {
        setHidden(true);
      } else if (lastY - y > 6 || y <= 280) {
        setHidden(false);
      }
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open, themeOpen]);

  const currentAccent = ACCENTS.find((a) => a.id === accent) ?? ACCENTS[0];

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled ? "bg-[var(--nav-bg)] border-[var(--border)] shadow-[var(--shadow)]" : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 group" aria-label="Moe Kyaw Aung — Home">
          <div className="relative">
            <img
              src={profile.avatar}
              alt="Moe Kyaw Aung profile"
              className="w-10 h-10 rounded-xl object-cover ring-2 ring-[var(--accent)]/60 group-hover:ring-[var(--accent)] transition-all group-hover:scale-105"
            />
            <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-[var(--accent)] border-2 border-[var(--bg)] animate-pulse" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[var(--text)] font-extrabold tracking-tight text-sm">MOE KYAW AUNG</span>
            <span className="text-[10px] text-[var(--accent)] font-mono tracking-[0.2em] uppercase mt-1">{profile.role}</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px]" aria-label="Main navigation">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="animated-underline text-[var(--muted)] hover:text-[var(--accent)] font-medium transition-colors"
            >
              {t(l.key)}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "mm" : "en")}
            aria-label={lang === "en" ? "Switch to Burmese (မြန်မာ)" : "Switch to English"}
            className="w-10 h-10 rounded-xl bg-[var(--card)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 flex items-center justify-center transition-all cursor-pointer hover:scale-105"
            title={lang === "en" ? "မြန်မာလို ပြောင်းပါ" : "Switch to English"}
          >
            <Languages className="w-4.5 h-4.5" />
          </button>
          <span className="hidden sm:block text-[10px] font-mono font-bold text-[var(--faint)] -ml-1">
            {lang === "en" ? "EN" : "မြန်မာ"}
          </span>

          {/* Command palette trigger */}
          <button
            onClick={onOpenPalette}
            aria-label="Open command palette"
            className="hidden xl:flex items-center gap-2 h-10 px-3 rounded-xl bg-[var(--card)] border border-[var(--border)] text-[var(--faint)] hover:text-[var(--text)] hover:border-[var(--accent)]/40 transition-all cursor-pointer"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="text-[11px] font-mono">{t("nav.quickNav")}</span>
            <kbd className="bg-[var(--bg)] border border-[var(--border)] rounded-md px-1.5 py-0.5 text-[9px] font-mono">⌘K</kbd>
          </button>

          {/* Theme studio */}
          <div className="relative">
            <button
              onClick={() => setThemeOpen(!themeOpen)}
              aria-label="Open theme settings"
              aria-expanded={themeOpen}
              className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all cursor-pointer hover:scale-105 ${
                themeOpen
                  ? "bg-[var(--accent-soft)] border-[var(--accent)] text-[var(--accent)]"
                  : "bg-[var(--card)] border-[var(--border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40"
              }`}
            >
              <Palette className="w-4.5 h-4.5" />
            </button>

            {themeOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setThemeOpen(false)} aria-hidden="true" />
                <div className="absolute right-0 top-full mt-3 w-64 z-50 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-4 shadow-[var(--shadow)] animate-fadeIn">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--faint)] mb-2">Display Mode</p>
                  <div className="grid grid-cols-2 gap-1 p-1 bg-[var(--bg)] border border-[var(--border)] rounded-xl mb-4">
                    <button
                      onClick={() => onModeChange("dark")}
                      className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        mode === "dark" ? "bg-[var(--accent)] text-[var(--inverse)] shadow" : "text-[var(--muted)] hover:text-[var(--text)]"
                      }`}
                    >
                      <Moon className="w-3.5 h-3.5" /> Dark
                    </button>
                    <button
                      onClick={() => onModeChange("light")}
                      className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        mode === "light" ? "bg-[var(--accent)] text-[var(--inverse)] shadow" : "text-[var(--muted)] hover:text-[var(--text)]"
                      }`}
                    >
                      <Sun className="w-3.5 h-3.5" /> Light
                    </button>
                  </div>

                  <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--faint)] mb-2">Accent Theme</p>
                  <div className="grid grid-cols-5 gap-2">
                    {ACCENTS.map((a) => (
                      <button
                        key={a.id}
                        onClick={() => onAccentChange(a.id)}
                        title={a.label}
                        aria-label={`${a.label} theme`}
                        className={`relative h-10 rounded-xl border-2 transition-all duration-300 cursor-pointer hover:scale-110 ${
                          accent === a.id ? "border-[var(--text)] scale-110 shadow-lg" : "border-transparent"
                        }`}
                        style={{ background: `linear-gradient(135deg, ${a.c1}, ${a.c2})` }}
                      >
                        {accent === a.id && (
                          <Check className="absolute inset-0 m-auto w-4 h-4 text-white drop-shadow" strokeWidth={3} />
                        )}
                      </button>
                    ))}
                  </div>
                  <p className="mt-3 text-center text-[10px] font-mono text-[var(--faint)]">{currentAccent.label}</p>
                </div>
              </>
            )}
          </div>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-[13px] font-bold text-[var(--inverse)] bg-[var(--accent)] hover:brightness-110 hover:scale-[1.03] active:scale-95 transition-all px-5 py-2.5 rounded-xl shadow-[var(--glow)]"
          >
            {t("nav.hire")}
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="lg:hidden w-10 h-10 rounded-xl bg-[var(--card)] border border-[var(--border)] text-[var(--text)] flex items-center justify-center cursor-pointer"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[var(--bg)]/95 backdrop-blur-xl border-t border-[var(--border)] px-4 py-5 animate-fadeIn">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-[var(--text)] hover:bg-[var(--accent-soft)] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                {t(l.key)}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onOpenPalette();
              }}
              className="mt-1 flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-[var(--muted)] hover:bg-[var(--accent-soft)] transition-colors cursor-pointer text-left"
            >
              <Search className="w-4 h-4 text-[var(--accent)]" />
              {t("nav.quickNav")} (⌘K)
            </button>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 text-sm font-bold text-[var(--inverse)] bg-[var(--accent)] px-5 py-3 rounded-xl"
            >
              {t("nav.hireMobile")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
