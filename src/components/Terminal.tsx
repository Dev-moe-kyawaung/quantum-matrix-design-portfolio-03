import { useEffect, useRef, useState, type ReactNode } from "react";
import { Terminal as TerminalIcon } from "lucide-react";
import { profile, apps, socials, techGroups } from "../data";
import { toast, openResume, openCall, openSnake } from "./ui";

/* ============================================================
   MKA INTERACTIVE TERMINAL — real command line in the hero
   ============================================================ */

type Log = { kind: "in" | "out"; jsx: ReactNode; key: number };

const BOOT: ReactNode[] = [
  <div key="b0" className="text-zinc-500">MKA-OS v2.6 — Interactive Portfolio Terminal</div>,
  <div key="b1" className="text-zinc-400">▸ loading profile … <span className="text-emerald-400">OK</span></div>,
  <div key="b2" className="text-zinc-400">▸ indexing 82+ certificates … <span className="text-emerald-400">OK</span></div>,
  <div key="b3" className="text-zinc-400">▸ mounting 16 signature apps … <span className="text-emerald-400">OK</span></div>,
  <div key="b4" className="text-zinc-400">▸ linking Bangkok ↔ Tachileik … <span className="text-emerald-400">OK</span></div>,
  <div key="b5" className="text-zinc-400">
    Type <span className="text-[#3DDC84] font-bold">help</span> to explore. Happy hacking 👨‍💻
  </div>,
];

const ACCENT_LIST = ["emerald", "ocean", "royal", "sunset", "rose"];

export default function InteractiveTerminal({
  accent,
  onAccentChange,
  onModeChange,
}: {
  accent: string;
  onAccentChange: (a: string) => void;
  onModeChange: (m: "dark" | "light") => void;
}) {
  const [logs, setLogs] = useState<Log[]>([]);
  const [input, setInput] = useState("");
  const [booted, setBooted] = useState(false);
  const [histIdx, setHistIdx] = useState(-1);
  const historyRef = useRef<string[]>([]);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const keyRef = useRef(0);

  /* Boot sequence */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setBooted(true);
      return;
    }
    const timers: ReturnType<typeof setTimeout>[] = [];
    BOOT.forEach((line, i) => {
      timers.push(
        setTimeout(() => {
          setLogs((l) => [...l, { kind: "out", jsx: line, key: ++keyRef.current }]);
          if (i === BOOT.length - 1) setBooted(true);
        }, 220 + i * 170)
      );
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  /* Auto-scroll */
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [logs]);

  const push = (kind: Log["kind"], jsx: ReactNode) =>
    setLogs((l) => [...l, { kind, jsx, key: ++keyRef.current }]);

  const out = (s: ReactNode, cls = "text-zinc-300") => (
    <div className={cls} key={++keyRef.current}>{s}</div>
  );

  const exec = (c: string, args: string[]): ReactNode[] => {
    switch (c) {
      case "help":
        return [
          <div key="h" className="grid gap-x-8 gap-y-1 sm:grid-cols-2 text-[11px] font-mono">
            {[
              ["help", "Show this menu"],
              ["about / whoami", "Who is Moe Kyaw Aung"],
              ["skills", "Core skill stack"],
              ["apps", "List all 16 signature apps"],
              ["socials", "Social accounts"],
              ["contact", "Phone & email"],
              ["certs", "82+ certificates"],
              ["philosophy", "Life motto"],
              ["theme <name>", "emerald ocean royal sunset rose"],
              ["dark / light", "Switch display mode"],
              ["resume", "Download resume"],
              ["hire", "Book a strategy call"],
              ["snake", "Play classic Snake 🐍"],
              ["clear", "Clear terminal"],
            ].map(([k, d]) => (
              <div key={k}>
                <span className="text-[#3DDC84]">{k}</span>
                <span className="text-zinc-500"> — {d}</span>
              </div>
            ))}
          </div>,
        ];
      case "about":
      case "whoami":
        return [
          out(`${profile.name} · ${profile.nameMM} — ${profile.role}`),
          out(profile.summary),
          out(`📍 ${profile.location}`, "text-zinc-500"),
        ];
      case "skills":
        return techGroups.map((g) => (
          <div key={g.name} className="text-[11.5px] font-mono">
            <span className="text-cyan-400">{g.name}</span>
            <span className="text-zinc-400"> — {g.items.map((t) => t.name).join(" · ")}</span>
          </div>
        ));
      case "apps":
        return apps.map((a) => (
          <div key={a.name} className="text-[11.5px] font-mono">
            <span>{a.emoji}</span> <span className="text-zinc-100">{a.name}</span>
            <span className="text-zinc-500"> — {a.tag}</span>
          </div>
        ));
      case "socials":
        return socials.map((s) => (
          <div key={s.name} className="text-[11.5px] font-mono">
            <span>{s.emoji}</span> <span className="text-cyan-400">{s.name}</span>
            <span className="text-zinc-500"> {s.url}</span>
          </div>
        ));
      case "contact":
        return [
          out(`📞 ${profile.phones.join("  ·  ")}`),
          out(`✉️ ${profile.email}`),
          out(`📍 ${profile.location}`, "text-zinc-500"),
        ];
      case "certs":
        return [
          out("🎓 82+ verified certificates — Programming Hub × Google Developers Launchpad"),
          out("Verify: gravatar.com/moekyawaung2026", "text-zinc-500"),
        ];
      case "philosophy":
        return [out(`“${profile.philosophy}”`, "text-[#3DDC84] italic")];
      case "location":
        return [out(`📍 ${profile.location}`)];
      case "theme": {
        const want = (args[0] || "").toLowerCase();
        if (!ACCENT_LIST.includes(want)) {
          return [
            out(`Current theme: ${accent}. Usage: theme <emerald|ocean|royal|sunset|rose>`, "text-yellow-400"),
          ];
        }
        onAccentChange(want);
        return [out(`✓ Theme set to ${want} — the whole page just re-skinned.`, "text-emerald-400")];
      }
      case "dark":
        onModeChange("dark");
        return [out("🌙 Display mode → Dark")];
      case "light":
        onModeChange("light");
        return [out("☀️ Display mode → Light")];
      case "resume":
        openResume();
        return [out("📄 Resume window opened — download / print to PDF.")];
      case "hire":
      case "call":
        openCall();
        return [out("📞 Opening strategy call booking…")];
      case "github":
        window.open(profile.github, "_blank");
        return [out("🐙 Opening github.com/Dev-moe-kyawaung…")];
      case "email": {
        navigator.clipboard?.writeText(profile.email).catch(() => undefined);
        toast(`📋 Copied ${profile.email}`);
        return [out("📋 Primary email copied to clipboard.")];
      }
      case "snake":
        openSnake();
        return [out("🐍 Launching Snake — use arrow keys! (high score saved locally)")];
      case "clear":
        return [];
      default:
        if (c === "sudo" && args.join(" ").toLowerCase().startsWith("hire")) {
          openCall();
          return [
            <div key="sudo" className="text-emerald-400 font-mono text-[11px]">
              <div>┌─────────────────────────────────────┐</div>
              <div>│ ⚡ ACCESS GRANTED — HIRING PROTOCOL  │</div>
              <div>│  Moe Kyaw Aung is ready to build. 🚀 │</div>
              <div>└─────────────────────────────────────┘</div>
              <div className="mt-1 text-zinc-400">Opening booking window…</div>
            </div>,
          ];
        }
        return [
          <div key="err" className="text-red-400">
            command not found: {c} — type <span className="text-[#3DDC84]">help</span>
          </div>,
        ];
    }
  };

  const run = (raw: string) => {
    const cmd = raw.trim();
    if (!cmd) return;
    if (cmd.toLowerCase() === "clear") {
      setLogs([]);
      setInput("");
      return;
    }
    historyRef.current.push(cmd);
    setHistIdx(-1);
    push(
      "in",
      <div className="text-zinc-200">
        <span className="text-[#3DDC84] font-bold">➜</span>{" "}
        <span className="text-sky-400">~/portfolio</span> {cmd}
      </div>
    );
    const [c, ...args] = cmd.split(/\s+/);
    exec(c.toLowerCase(), args).forEach((jsx) => push("out", jsx));
    setInput("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const h = historyRef.current;
    if (e.key === "Enter") {
      run(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (h.length) {
        const ni = histIdx === -1 ? h.length - 1 : Math.max(0, histIdx - 1);
        setHistIdx(ni);
        setInput(h[ni]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx >= 0 && histIdx < h.length - 1) {
        const ni = histIdx + 1;
        setHistIdx(ni);
        setInput(h[ni]);
      } else {
        setHistIdx(-1);
        setInput("");
      }
    }
  };

  return (
    <div
      className="gradient-border shine bg-[#050811] rounded-2xl shadow-[var(--shadow)] text-left flex flex-col"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0a0f1e] rounded-t-2xl shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="ml-2 text-[10px] font-mono text-zinc-400 hidden sm:block">
            mka@bangkok: ~/portfolio
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-zinc-500 hidden sm:flex items-center gap-1">
            <TerminalIcon className="w-3 h-3" /> bash
          </span>
          <span className="text-[10px] font-mono text-[#3DDC84] bg-[#3DDC84]/10 px-2 py-0.5 rounded flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3DDC84] animate-pulse" />
            LIVE
          </span>
        </div>
      </div>

      {/* Terminal body */}
      <div
        ref={bodyRef}
        className="terminal-scroll px-4 py-3.5 text-[11px] sm:text-[11.5px] leading-[1.7] font-mono overflow-y-auto h-[300px] sm:h-[330px]"
        aria-live="polite"
      >
        {logs.map((l) => (
          <div key={l.key}>{l.jsx}</div>
        ))}

        {/* Prompt line */}
        <div className="flex items-center gap-1.5">
          <span className="text-[#3DDC84] font-bold shrink-0">➜</span>
          <span className="text-sky-400 shrink-0">~/portfolio</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            aria-label="Terminal input — type help for commands"
            autoComplete="off"
            spellCheck={false}
            className="terminal-input flex-1 bg-transparent border-none outline-none text-zinc-100 placeholder:text-zinc-600 min-w-0"
            placeholder={booted ? "type help…" : ""}
          />
          {booted && (
            <span className="text-[10px] text-zinc-600 font-mono hidden sm:inline shrink-0">↑↓ history</span>
          )}
        </div>
      </div>

      {/* Terminal footer hints */}
      <div className="px-4 py-2.5 border-t border-white/5 bg-[#0a0f1e] rounded-b-2xl flex items-center justify-between gap-2 shrink-0">
        <span className="text-[9.5px] font-mono text-zinc-500 truncate">
          Try: help · skills · apps · theme sunset · snake · sudo hire me
        </span>
        <span className="text-[9.5px] font-mono text-zinc-600 shrink-0">MKA-OS</span>
      </div>
    </div>
  );
}
