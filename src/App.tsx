import { useEffect, useState } from "react";
import { X, Download, Copy, Check, ArrowUp, Phone, Send } from "lucide-react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { profile } from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { About, TechStack, Certifications } from "./components/About";
import AppCollection from "./components/AppCollection";
import Roadmap from "./components/Roadmap";
import Vaults from "./components/Vaults";
import { Services, FAQ, FinalCTA, Contact, Footer } from "./components/Closing";
import { Toaster, CursorGlow, toast } from "./components/ui";
import Preloader from "./components/Preloader";
import CommandPalette from "./components/CommandPalette";
import SectionDots from "./components/SectionDots";
import Metrics from "./components/Metrics";
import SnakeGame from "./components/SnakeGame";

/* Cinematic film-grain noise texture */
const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")";

/* ============================================================
   RESUME CONTENT (downloadable)
   ============================================================ */
const RESUME_MD = `# MOE KYAW AUNG (မိုးကျော်အောင်) — Senior Android Developer
Tachileik, Myanmar 🇲🇲 ↔ Bangkok, Thailand 🇹🇭
📞 +95 9 889 000 889 · +959 666 000 050
✉️ ${profile.email} · 🐙 github.com/Dev-moe-kyawaung

## Professional Summary
Senior Android Engineer with strong experience designing and delivering
high-performance mobile applications using Kotlin, Jetpack, MVVM/MVI,
and Clean Architecture. Proven expertise integrating Firebase (Auth,
Firestore, Cloud Messaging, Crashlytics) and RESTful APIs. Experienced
in CI/CD pipelines with GitHub Actions and Azure DevOps. Passionate
about clean, testable code and mentoring junior developers.

## Core Skills
- Android: Kotlin, Jetpack (Compose, ViewModel, Navigation, Room, Paging), Material 3
- Architecture: Clean Architecture, MVVM, MVI, Multi-module applications
- Backend & Cloud: Firebase Suite, REST APIs, Retrofit, OkHttp, JSON, AWS
- DevOps: GitHub Actions, Azure DevOps, Fastlane, automated testing & deployment
- Testing: JUnit, Espresso, MockK, UI & Integration tests
- Security: Ethical Hacking, Cybersecurity, Android Keystore
- AI/ML: Claude API, TensorFlow Lite, On-Device ML
- Other: SOLID, OOP, Agile/Scrum, Jira, Kotlin Multiplatform

## Featured Project
🔥 PulseSync – Real-Time Sync Platform
github.com/Dev-moe-kyawaung/pulsesync-android
Advanced multi-module Android application demonstrating senior-level
architecture, Firebase backend, offline-first design, and full CI/CD
pipeline with GitHub Actions.

## Signature Apps (16)
Social Dashboard · PWA App · Admin Dashboard · Stock Market · Game Collection
Music Player · Chat App · World Cup · E-commerce · Portfolio · Money Tracker
Weather · Crypto · Todo · Video Player · LEGEND!

## Experience
Android Developer — Freelance / Self-Projects — 2023 – Present
- Developed and maintained 40+ Android applications with focus on performance
- Implemented clean UI designs and smooth user experiences
- Debugged and optimized apps to improve stability and efficiency
- Worked with APIs and integrated third-party libraries
- Followed best practices for secure and scalable Android development

## Certifications
82+ verified certificates — Programming Hub × Google Developers Launchpad
9 categories: Programming, Web, Mobile, Databases, AI/ML, Security,
Blockchain, Software Engineering, Marketing & Business.
Verify: gravatar.com/moekyawaung2026

## Philosophy
"Code with culture. Build with purpose."`;

function downloadResume() {
  const blob = new Blob([RESUME_MD], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Moe-Kyaw-Aung-Senior-Android-Developer-Resume.md";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function printResume() {
  try {
    const win = window.open("", "_blank", "width=820,height=1000");
    if (!win) {
      toast("Popup blocked — use Download instead.");
      return;
    }
    win.document.write(
      `<!doctype html><html><head><title>Moe Kyaw Aung — Resume</title><style>
        body{font-family:'Segoe UI',Arial,sans-serif;max-width:760px;margin:40px auto;padding:0 24px;color:#111;line-height:1.55}
        h1{margin:0;font-size:26px} h2{font-size:15px;border-bottom:2px solid #0bbf6b;padding-bottom:4px;margin-top:26px;color:#0a7c47}
        .sub{color:#555;font-size:13px;margin-top:2px} p,li{font-size:12.5px} pre{white-space:pre-wrap;font-family:'Segoe UI',Arial,sans-serif;font-size:12.5px;margin:0}
        .badge{display:inline-block;background:#e8f8f0;color:#0a7c47;padding:2px 8px;border-radius:6px;font-size:11px;font-weight:600;margin:2px}
        </style></head><body>
        <h1>MOE KYAW AUNG</h1>
        <div class="sub">Senior Android Developer · Tachileik, Myanmar 🇲🇲 ↔ Bangkok, Thailand 🇹🇭</div>
        <div class="sub">📞 +95 9 889 000 889 · +959 666 000 050 · ✉️ moekyawaung@programmer.net · 🐙 github.com/Dev-moe-kyawaung</div>
        <h2>Professional Summary</h2>
        <p>Senior Android Engineer with strong experience designing and delivering high-performance mobile applications using Kotlin, Jetpack, MVVM/MVI, and Clean Architecture. Proven expertise integrating Firebase and RESTful APIs, with CI/CD pipelines on GitHub Actions and Azure DevOps. Passionate about clean, testable code and mentoring developers.</p>
        <h2>Core Skills</h2>
        <p><span class="badge">Kotlin</span><span class="badge">Jetpack Compose</span><span class="badge">MVVM</span><span class="badge">MVI</span><span class="badge">Clean Architecture</span><span class="badge">Firebase</span><span class="badge">REST APIs</span><span class="badge">Room DB</span><span class="badge">Coroutines</span><span class="badge">Flow</span><span class="badge">GitHub Actions</span><span class="badge">JUnit / Espresso / MockK</span><span class="badge">Claude API</span><span class="badge">TFLite</span><span class="badge">Cybersecurity</span></p>
        <h2>Featured Project</h2>
        <p><strong>🔥 PulseSync — Real-Time Sync Platform</strong><br/>Multi-module Android app with senior-level architecture, Firebase backend, offline-first design and full CI/CD with GitHub Actions.</p>
        <h2>Experience</h2>
        <p><strong>Android Developer — Freelance / Self-Projects — 2023 – Present</strong></p>
        <ul><li>Developed 40+ Android applications with a focus on performance and usability</li><li>Implemented clean UI and smooth UX; debugged and optimized for stability</li><li>Integrated APIs and third-party libraries with secure coding practices</li></ul>
        <h2>Certifications</h2>
        <p>82+ verified certificates — Programming Hub × Google Developers Launchpad (9 categories). Verify: gravatar.com/moekyawaung2026</p>
        <p><em>"Code with culture. Build with purpose."</em></p>
        <script>window.onload=function(){window.print();}<\/script>
        </body></html>`
    );
    win.document.close();
    win.focus();
    toast("🖨️ Print dialog opened — choose 'Save as PDF'.");
  } catch {
    toast("Printing unavailable here — use Download instead.");
  }
}

/* ============================================================
   RESUME MODAL
   ============================================================ */
function ResumeModal({ onClose }: { onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  const copyResume = async () => {
    try {
      await navigator.clipboard.writeText(RESUME_MD);
      setCopied(true);
      toast("📋 Resume copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast("Could not copy — download instead.");
    }
  };

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl max-w-2xl w-full overflow-hidden shadow-[var(--shadow)] animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 p-6 sm:p-8 pb-0">
          <div className="flex items-center gap-4">
            <img src={profile.avatar} alt="Moe Kyaw Aung" className="w-14 h-14 rounded-2xl ring-2 ring-[var(--accent)]/50 object-cover" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] font-bold">Resume · 2026</span>
              <h3 className="text-lg font-extrabold text-[var(--text)]">{profile.name}</h3>
              <p className="text-xs text-[var(--muted)]">{profile.role} — {profile.location}</p>
            </div>
          </div>
          <button onClick={onClose} aria-label="Close resume" className="w-9 h-9 rounded-xl bg-[var(--card)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)] flex items-center justify-center cursor-pointer shrink-0">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <pre className="bg-[var(--code-bg)] text-zinc-300 rounded-2xl p-5 text-[11px] leading-relaxed font-mono max-h-72 overflow-y-auto whitespace-pre-wrap">
            {RESUME_MD}
          </pre>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => {
                downloadResume();
                toast("⬇️ Resume download started!");
              }}
              className="inline-flex items-center justify-center gap-2.5 bg-[var(--accent)] text-[var(--inverse)] font-bold py-3.5 rounded-xl text-sm hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
            <button
              onClick={printResume}
              className="inline-flex items-center justify-center gap-2.5 bg-[var(--card)] border border-[var(--border)] text-[var(--text)] font-semibold py-3.5 rounded-xl text-sm hover:border-[var(--accent)]/50 transition-all cursor-pointer"
            >
              🖨️ Save as PDF
            </button>
            <button
              onClick={copyResume}
              className="inline-flex items-center justify-center gap-2.5 bg-[var(--card)] border border-[var(--border)] text-[var(--text)] font-semibold py-3.5 rounded-xl text-sm hover:border-[var(--accent)]/50 transition-all cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-[var(--accent)]" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
          <p className="mt-4 text-center text-[10px] text-[var(--faint)]">
            Markdown file · print-ready PDF · or copy straight into LinkedIn / Upwork profiles.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   BOOKING MODAL
   ============================================================ */
function CallModal({ onClose }: { onClose: () => void }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time || !name || !email) {
      toast("Please complete all booking details!");
      return;
    }
    setDone(true);
    toast("🗓️ Call reserved! Confirmation sent to " + email);
  };

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl max-w-md w-full overflow-hidden shadow-[var(--shadow)] animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 p-6 pb-4 border-b border-[var(--border)]">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] font-bold">Free 15-Min Strategy Call</span>
            <h3 className="text-lg font-extrabold text-[var(--text)] mt-1">Book with Moe Kyaw Aung</h3>
          </div>
          <button onClick={onClose} aria-label="Close booking" className="w-9 h-9 rounded-xl bg-[var(--card)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)] flex items-center justify-center cursor-pointer shrink-0">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6">
          {done ? (
            <div className="text-center py-8 animate-fadeIn">
              <div className="w-14 h-14 bg-[var(--accent-soft)] text-[var(--accent)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="text-base font-extrabold text-[var(--text)]">Your Call Is Reserved!</h4>
              <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
                Slot locked for <strong className="text-[var(--text)]">{date}</strong> at{" "}
                <strong className="text-[var(--text)]">{time}</strong>. A confirmation link was sent to{" "}
                <strong className="text-[var(--accent)]">{email}</strong>.
              </p>
              <p className="mt-3 text-[11px] text-[var(--muted)]">
                In a hurry? Call directly: <a href={`tel:${profile.phones[0].replace(/[^+\d]/g, "")}`} className="text-[var(--accent)] font-bold">{profile.phones[0]}</a>
              </p>
              <button onClick={onClose} className="mt-6 bg-[var(--accent)] text-[var(--inverse)] px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider cursor-pointer">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--muted)] mb-2">Pick a Day</label>
                <div className="grid grid-cols-2 gap-2">
                  {["Monday, Apr 13", "Wednesday, Apr 15"].map((d) => (
                    <button key={d} type="button" onClick={() => setDate(d)} className={`p-2.5 rounded-xl border text-[11px] font-bold transition-all cursor-pointer ${date === d ? "bg-[var(--accent-soft)] border-[var(--accent)] text-[var(--text)]" : "bg-[var(--card)] border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)]/40"}`}>
                      {d}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--muted)] mb-2">Pick a Time</label>
                <div className="grid grid-cols-3 gap-2">
                  {["10:00 AM", "2:00 PM", "4:30 PM"].map((t) => (
                    <button key={t} type="button" onClick={() => setTime(t)} className={`p-2.5 rounded-xl border text-[11px] font-bold transition-all cursor-pointer ${time === t ? "bg-[var(--accent-soft)] border-[var(--accent)] text-[var(--text)]" : "bg-[var(--card)] border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)]/40"}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="b-name" className="block text-[10px] font-mono uppercase tracking-wider text-[var(--muted)] mb-1.5">Name</label>
                  <input id="b-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-xl px-3.5 py-2.5 text-xs text-[var(--text)] focus:outline-none focus:border-[var(--accent)]" />
                </div>
                <div>
                  <label htmlFor="b-email" className="block text-[10px] font-mono uppercase tracking-wider text-[var(--muted)] mb-1.5">Email</label>
                  <input id="b-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-xl px-3.5 py-2.5 text-xs text-[var(--text)] focus:outline-none focus:border-[var(--accent)]" />
                </div>
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2.5 bg-[var(--accent)] text-[var(--inverse)] font-bold py-3.5 rounded-xl text-sm hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer">
                <Send className="w-4 h-4" />
                Lock In My Call
              </button>
              <p className="text-center text-[10px] text-[var(--faint)] flex items-center justify-center gap-1.5">
                <Phone className="w-3 h-3" /> or call {profile.phones[0]}
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   TECH MARQUEE
   ============================================================ */
const MARQUEE = [
  "Kotlin", "Jetpack Compose", "MVVM", "Clean Architecture", "Firebase", "REST APIs",
  "Coroutines", "Flow", "Room DB", "Retrofit", "GitHub Actions", "Claude API", "TensorFlow Lite",
  "Ethical Hacking", "Kali Linux", "Python", "Flutter", "React Native", "Git", "Figma",
];

function TechMarquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="relative py-5 bg-[var(--surface)] border-y border-[var(--border)] overflow-hidden" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-3">
        {items.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[var(--muted)] bg-[var(--card)] border border-[var(--border)] px-4 py-2 rounded-full whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   APP
   ============================================================ */
export default function App() {
  const [mode, setMode] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("mka-theme");
      if (saved === "light" || saved === "dark") return saved;
    }
    return "dark";
  });
  const [accent, setAccent] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("mka-accent") || "emerald";
    }
    return "emerald";
  });
  const [showResume, setShowResume] = useState(false);
  const [showCall, setShowCall] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [showSnake, setShowSnake] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    document.documentElement.setAttribute("data-accent", accent);
    localStorage.setItem("mka-theme", mode);
    localStorage.setItem("mka-accent", accent);
  }, [mode, accent]);

  /* ⌘K / Ctrl+K / "/" — command palette hotkeys */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((o) => !o);
        return;
      }
      if (e.key === "/") {
        const t = document.activeElement as HTMLElement | null;
        if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
        e.preventDefault();
        setPaletteOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
      setShowTop(window.scrollY > 700);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResume = () => setShowResume(true);
    const onCall = () => setShowCall(true);
    const onSnake = () => setShowSnake(true);
    window.addEventListener("app:resume", onResume);
    window.addEventListener("app:call", onCall);
    window.addEventListener("app:snake", onSnake);
    return () => {
      window.removeEventListener("app:resume", onResume);
      window.removeEventListener("app:call", onCall);
      window.removeEventListener("app:snake", onSnake);
    };
  }, []);


  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] overflow-x-hidden">
      {/* Boot preloader */}
      <Preloader />

      {/* Cinematic noise grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[2] opacity-[0.045]"
        style={{ backgroundImage: NOISE, backgroundSize: "160px 160px" }}
      />

      {/* Scroll progress */}
      <div
        className="fixed top-0 left-0 h-[3px] z-[95] transition-all duration-150"
        style={{ width: `${progress}%`, background: "var(--grad)" }}
      />

      <Navbar
        mode={mode}
        accent={accent}
        onModeChange={setMode}
        onAccentChange={setAccent}
        onOpenPalette={() => setPaletteOpen(true)}
      />

      <main>
        <Hero accent={accent} onModeChange={setMode} onAccentChange={setAccent} />
        <TechMarquee />
        <About />
        <TechStack />
        <Metrics />
        <AppCollection />
        <Roadmap />
        <Certifications />
        <Vaults />
        <Services />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>

      <Footer />

      {/* Section dot navigation */}
      <SectionDots />

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 left-6 z-[60] w-11 h-11 rounded-xl bg-[var(--accent)] text-[var(--inverse)] shadow-[var(--shadow)] flex items-center justify-center hover:brightness-110 active:scale-90 transition-all cursor-pointer animate-fadeIn"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Overlays */}
      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
      {showCall && <CallModal onClose={() => setShowCall(false)} />}
      {showSnake && <SnakeGame onClose={() => setShowSnake(false)} />}

      {/* Command palette */}
      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        mode={mode}
        accent={accent}
        onModeChange={setMode}
        onAccentChange={setAccent}
      />

      <Toaster />
      <CursorGlow />
      <SpeedInsights />

      {/* Keyboard accessibility: ESC closes modals */}
      <A11yEsc onClose={() => { setShowResume(false); setShowCall(false); }} />
    </div>
  );
}

function A11yEsc({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);
  return null;
}
