import { useState } from "react";
import { Copy, Check, Globe, Mail, Heart, ExternalLink, Link2 } from "lucide-react";
import { githubAccounts, lovableLinks, emails, socials, profile } from "../data";
import { Reveal, SectionHeading, toast, GitHubIcon } from "./ui";
import { SpotlightCard } from "./effects";
import { useT } from "../i18n";

/* ============================================================
   LINK VAULTS — GitHub pages, Lovable apps, Emails, Socials
   ============================================================ */
export default function Vaults() {
  const t = useT();
  const [copied, setCopied] = useState<string | null>(null);
  const [showAllGithub, setShowAllGithub] = useState(false);
  const [showAllLovable, setShowAllLovable] = useState(false);

  const copyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(email);
      toast(`📋 Copied ${email} to clipboard!`);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      toast(`Email: ${email}`);
    }
  };

  const gh = showAllGithub ? githubAccounts : githubAccounts.slice(0, 12);
  const lv = showAllLovable ? lovableLinks : lovableLinks.slice(0, 12);

  return (
    <section id="vaults" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-soft)] border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow={t("vaults.eyebrow")} title={t("vaults.title")} sub={t("vaults.sub")} />

        <div className="space-y-10">
          {/* ---------- GITHUB ACCOUNTS ---------- */}
          <Reveal>
            <SpotlightCard className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl">
              <div className="p-7 sm:p-9">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <h3 className="text-base font-bold text-[var(--text)] flex items-center gap-3">
                    <span className="bg-[var(--accent-soft)] text-[var(--accent)] p-2.5 rounded-xl">
                      <GitHubIcon className="w-5 h-5" />
                    </span>
                    {t("vaults.github")}
                    <span className="text-[10px] font-mono bg-[var(--accent-soft)] text-[var(--accent)] px-2 py-0.5 rounded-full">
                      {t("vaults.sites", { n: githubAccounts.length })}
                    </span>
                  </h3>
                  <button
                    onClick={() => setShowAllGithub(!showAllGithub)}
                    className="text-xs font-bold text-[var(--accent)] hover:underline cursor-pointer"
                  >
                    {showAllGithub ? "Show less ↑" : `Show all ${githubAccounts.length} ↓`}
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {gh.map((g) => (
                    <a
                      key={g.user}
                      href={g.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between bg-[var(--card)] border border-[var(--border)] rounded-xl px-4 py-3 hover:border-[var(--accent)]/50 hover:translate-x-0.5 transition-all"
                    >
                      <span className="flex items-center gap-2.5 text-xs font-semibold text-[var(--text)] truncate">
                        <Globe className="w-3.5 h-3.5 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors shrink-0" />
                        {g.user}.github.io
                      </span>
                      <ExternalLink className="w-3 h-3 text-[var(--faint)] group-hover:text-[var(--accent)] shrink-0 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* ---------- LOVABLE LINKS ---------- */}
          <Reveal>
            <SpotlightCard className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl">
              <div className="p-7 sm:p-9">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <h3 className="text-base font-bold text-[var(--text)] flex items-center gap-3">
                    <span className="bg-purple-500/10 text-purple-400 p-2.5 rounded-xl">
                      <Heart className="w-5 h-5" />
                    </span>
                    {t("vaults.lovable")}
                    <span className="text-[10px] font-mono bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded-full">
                      {t("vaults.appsCount", { n: lovableLinks.length })}
                    </span>
                  </h3>
                  <button
                    onClick={() => setShowAllLovable(!showAllLovable)}
                    className="text-xs font-bold text-purple-400 hover:underline cursor-pointer"
                  >
                    {showAllLovable ? "Show less ↑" : `Show all ${lovableLinks.length} ↓`}
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {lv.map((l) => (
                    <a
                      key={l.domain}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between bg-[var(--card)] border border-[var(--border)] rounded-xl px-4 py-3 hover:border-purple-400/50 hover:translate-x-0.5 transition-all"
                    >
                      <span className="flex items-center gap-2.5 text-xs font-semibold text-[var(--text)] truncate">
                        <Link2 className="w-3.5 h-3.5 text-[var(--muted)] group-hover:text-purple-400 transition-colors shrink-0" />
                        {l.domain}
                      </span>
                      <ExternalLink className="w-3 h-3 text-[var(--faint)] group-hover:text-purple-400 shrink-0 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* ---------- EMAILS ---------- */}
          <Reveal>
            <SpotlightCard className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl">
              <div className="p-7 sm:p-9">
                <h3 className="text-base font-bold text-[var(--text)] flex items-center gap-3 mb-2">
                  <span className="bg-cyan-500/10 text-cyan-400 p-2.5 rounded-xl">
                    <Mail className="w-5 h-5" />
                  </span>
                  {t("vaults.emails")}
                  <span className="text-[10px] font-mono bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded-full">
                    {t("vaults.addresses", { n: emails.length })}
                  </span>
                </h3>
                <p className="text-xs text-[var(--muted)] mb-6">{t("vaults.emailsHint")}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {emails.map((e) => (
                    <button
                      key={e}
                      onClick={() => copyEmail(e)}
                      className={`group flex items-center justify-between gap-2 bg-[var(--card)] border rounded-xl px-3.5 py-3 text-left transition-all cursor-pointer ${
                        copied === e ? "border-[var(--accent)] bg-[var(--accent-soft)]" : "border-[var(--border)] hover:border-cyan-400/50"
                      }`}
                    >
                      <span className={`text-[11px] font-mono truncate ${copied === e ? "text-[var(--accent)]" : "text-[var(--text)]"}`}>
                        {e}
                      </span>
                      {copied === e ? (
                        <Check className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-[var(--faint)] group-hover:text-cyan-400 shrink-0 transition-colors" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* ---------- SOCIALS ---------- */}
          <Reveal>
            <SpotlightCard className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl">
              <div className="p-7 sm:p-9">
                <h3 className="text-base font-bold text-[var(--text)] flex items-center gap-3 mb-2">
                  <span className="bg-amber-500/10 text-amber-400 p-2.5 rounded-xl">
                    <Globe className="w-5 h-5" />
                  </span>
                  {t("vaults.socials")}
                  <span className="text-[10px] font-mono bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-full">
                    {t("vaults.profiles", { n: socials.length })}
                  </span>
                </h3>
                <p className="text-xs text-[var(--muted)] mb-6">
                  {t("vaults.socialsSub")}{" "}
                  <a href={profile.gravatar2} target="_blank" rel="noreferrer" className="text-[var(--accent)] font-semibold hover:underline">
                    Gravatar
                  </a>
                  .
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group bg-[var(--card)] border border-[var(--border)] rounded-2xl p-4 text-center hover:border-[var(--accent)]/50 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">{s.emoji}</div>
                      <div className="text-xs font-bold text-[var(--text)]">{s.name}</div>
                      <div className="text-[9px] text-[var(--faint)] mt-0.5 truncate">{s.handle}</div>
                    </a>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
