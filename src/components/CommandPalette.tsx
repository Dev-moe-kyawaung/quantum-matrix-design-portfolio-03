import { useEffect, useMemo, useRef, useState } from "react";
import { Search, CornerDownLeft } from "lucide-react";
import { apps, socials, profile } from "../data";
import { ACCENTS } from "./Navbar";
import { openResume, openCall, openSnake, toast } from "./ui";

/* ============================================================
   COMMAND PALETTE — ⌘K / Ctrl+K quick navigation & actions
   ============================================================ */

interface Item {
  id: string;
  group: string;
  icon: string;
  label: string;
  hint: string;
  keywords: string;
  action: () => void;
}

export default function CommandPalette({
  open,
  onClose,
  mode,
  accent,
  onModeChange,
  onAccentChange,
}: {
  open: boolean;
  onClose: () => void;
  mode: "dark" | "light";
  accent: string;
  onModeChange: (m: "dark" | "light") => void;
  onAccentChange: (a: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [idx, setIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const items = useMemo<Item[]>(() => {
    const nav: Item[] = [
      { id: "about", label: "About Me", icon: "👨‍💻" },
      { id: "tech", label: "Tech Stack", icon: "🛠️" },
      { id: "metrics", label: "Developer Metrics", icon: "📊" },
      { id: "apps", label: "App Collection", icon: "📱" },
      { id: "roadmap", label: "Senior Roadmap", icon: "🗺️" },
      { id: "certs", label: "Certificates", icon: "🎓" },
      { id: "vaults", label: "Digital Vaults", icon: "🗄️" },
      { id: "services", label: "Work With Me", icon: "💼" },
      { id: "faq", label: "FAQ", icon: "❓" },
      { id: "contact", label: "Contact", icon: "✉️" },
    ].map((s) => ({
      id: "nav-" + s.id,
      group: "Navigate",
      icon: s.icon,
      label: s.label,
      hint: `#${s.id}`,
      keywords: s.label,
      action: () => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" }),
    }));

    const actions: Item[] = [
      {
        id: "resume",
        group: "Actions",
        icon: "📄",
        label: "Download Resume",
        hint: "Markdown + PDF",
        keywords: "cv pdf print",
        action: openResume,
      },
      {
        id: "call",
        group: "Actions",
        icon: "📞",
        label: "Book a Free Strategy Call",
        hint: "15 min with Moe",
        keywords: "meeting zoom booking",
        action: openCall,
      },
      {
        id: "email",
        group: "Actions",
        icon: "📋",
        label: "Copy Primary Email",
        hint: profile.email,
        keywords: "mail contact copy",
        action: () => {
          navigator.clipboard?.writeText(profile.email).catch(() => undefined);
          toast(`📋 Copied ${profile.email}`);
        },
      },
      {
        id: "github",
        group: "Actions",
        icon: "🐙",
        label: "Open GitHub Profile",
        hint: "github.com/Dev-moe-kyawaung",
        keywords: "code repos",
        action: () => window.open(profile.github, "_blank"),
      },
      {
        id: "gravatar",
        group: "Actions",
        icon: "🟣",
        label: "Open Gravatar",
        hint: "Verified certificates",
        keywords: "avatar verify",
        action: () => window.open(profile.gravatar, "_blank"),
      },
      {
        id: "snake",
        group: "Fun",
        icon: "🐍",
        label: "Play Snake",
        hint: "Classic easter egg",
        keywords: "game retro fun arcade",
        action: openSnake,
      },
      {
        id: "toggle-mode",
        group: "Actions",
        icon: mode === "dark" ? "☀️" : "🌙",
        label: mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode",
        hint: "Display theme",
        keywords: "theme dark light",
        action: () => onModeChange(mode === "dark" ? "light" : "dark"),
      },
    ];

    const themeItems: Item[] = ACCENTS.map((a) => ({
      id: "accent-" + a.id,
      group: "Theme",
      icon: accent === a.id ? "✓" : "🎨",
      label: `Theme: ${a.label}`,
      hint: "Accent color",
      keywords: a.label,
      action: () => onAccentChange(a.id),
    }));

    const appItems: Item[] = apps.map((a) => ({
      id: "app-" + a.name,
      group: "Apps",
      icon: a.emoji,
      label: a.name,
      hint: a.tag,
      keywords: a.name + " " + a.tag,
      action: () => window.open(a.url, "_blank"),
    }));

    const socialItems: Item[] = socials.map((s) => ({
      id: "social-" + s.name,
      group: "Socials",
      icon: s.emoji,
      label: s.name,
      hint: s.handle,
      keywords: s.name + " " + s.handle,
      action: () => window.open(s.url, "_blank"),
    }));

    return [...nav, ...actions, ...themeItems, ...appItems, ...socialItems];
  }, [mode, accent, onModeChange, onAccentChange]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) => (i.label + " " + i.keywords + " " + i.group).toLowerCase().includes(q));
  }, [query, items]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setIdx(0);
      setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [open]);

  useEffect(() => setIdx(0), [query]);

  useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setIdx((i) => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setIdx((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        const it = filtered[idx];
        if (it) {
          it.action();
          onClose();
        }
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, filtered, idx, onClose]);

  useEffect(() => {
    listRef.current?.querySelector(`[data-idx="${idx}"]`)?.scrollIntoView({ block: "nearest" });
  }, [idx]);

  if (!open) return null;

  let lastGroup = "";

  return (
    <div
      className="fixed inset-0 z-[85] bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 pt-[9vh]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="w-full max-w-xl bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-[var(--shadow)] overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--border)]">
          <Search className="w-5 h-5 text-[var(--accent)] shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search… (apps, theme, resume, contact…)"
            aria-label="Search commands"
            className="flex-1 bg-transparent border-none outline-none text-sm text-[var(--text)] placeholder:text-[var(--faint)]"
          />
          <kbd className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-[var(--faint)] bg-[var(--card)] border border-[var(--border)] px-2 py-1 rounded-md">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div ref={listRef} className="max-h-[48vh] overflow-y-auto p-2">
          {filtered.length === 0 && (
            <p className="text-center text-sm text-[var(--muted)] py-10">
              No results for "<span className="text-[var(--text)] font-bold">{query}</span>"
            </p>
          )}

          {filtered.map((item, i) => {
            const showGroup = item.group !== lastGroup;
            lastGroup = item.group;
            const active = i === idx;
            return (
              <div key={item.id}>
                {showGroup && (
                  <p className="px-3 pt-3 pb-1 text-[9px] font-mono uppercase tracking-[0.2em] text-[var(--faint)]">
                    {item.group}
                  </p>
                )}
                <button
                  data-idx={i}
                  onClick={() => {
                    item.action();
                    onClose();
                  }}
                  onMouseEnter={() => setIdx(i)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                    active ? "bg-[var(--accent-soft)]" : "hover:bg-[var(--card)]"
                  }`}
                >
                  <span className="text-lg w-6 text-center shrink-0">{item.icon}</span>
                  <span className={`flex-1 min-w-0 text-sm font-semibold truncate ${active ? "text-[var(--accent)]" : "text-[var(--text)]"}`}>
                    {item.label}
                  </span>
                  <span className="text-[10px] font-mono text-[var(--faint)] truncate max-w-[40%]">{item.hint}</span>
                  {active && <CornerDownLeft className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />}
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer hints */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-[var(--border)] text-[10px] font-mono text-[var(--faint)]">
          <span>
            <kbd className="bg-[var(--card)] border border-[var(--border)] px-1.5 py-0.5 rounded">↑↓</kbd> Navigate
          </span>
          <span>
            <kbd className="bg-[var(--card)] border border-[var(--border)] px-1.5 py-0.5 rounded">↵</kbd> Select
          </span>
          <span className="hidden sm:block">Press "/" anywhere to open</span>
        </div>
      </div>
    </div>
  );
}
