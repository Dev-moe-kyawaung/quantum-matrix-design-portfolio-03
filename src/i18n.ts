import { useSyncExternalStore, useCallback } from "react";

/* ============================================================
   MKA i18n — English / Burmese (မြန်မာ) bilingual store
   ============================================================ */
export type Lang = "en" | "mm";

const DICT: Record<Lang, Record<string, string>> = {
  en: {},
  mm: {},
};

/* -------- ENGLISH -------- */
Object.assign(DICT.en, {
  "nav.about": "About",
  "nav.tech": "Tech Stack",
  "nav.apps": "Apps",
  "nav.roadmap": "Roadmap",
  "nav.vaults": "Vaults",
  "nav.contact": "Contact",
  "nav.hire": "Hire Me",
  "nav.hireMobile": "Hire Me — Open to Work 🟢",
  "nav.quickNav": "Quick Nav",

  "hero.badge": "Mingalaba · {greet}",
  "hero.ctaApps": "Explore My 16 Apps",
  "hero.ctaResume": "Download Resume",
  "hero.trust.google": "Google Developers Launchpad",
  "hero.trust.building": "Building: {app}",
  "hero.call": "Book a Free Call",
  "hero.snake": "Play Snake",
  "hero.verified": "Verified via Gravatar",
  "hero.stats.cert": "Certificates",
  "hero.stats.proj": "Projects Built",
  "hero.stats.cat": "Skill Categories",
  "hero.stats.apps": "Signature Apps",
  "hero.explore": "Explore",
  "hero.nowBuilding": "Now Building",
  "hero.t1": "Senior Android Developer",
  "hero.t2": "Kotlin · Jetpack Compose Expert",
  "hero.t3": "Ethical Hacker · Cybersecurity",
  "hero.t4": "AI / ML App Builder",
  "hero.t5": "Creator of MoekyawTranslator",

  "greet.morning": "Good Morning ☀️",
  "greet.afternoon": "Good Afternoon 🌤️",
  "greet.evening": "Good Evening 🌇",
  "greet.night": "Good Night 🌙",

  "about.eyebrow": "About Moe Kyaw Aung",
  "about.t1": "Developer by",
  "about.t2": "passion",
  "about.t3": "learner by nature",
  "fa.mobile": "Mobile",
  "fa.backend": "Backend",
  "fa.security": "Security",
  "fa.ai": "AI / ML",

  "tech.eyebrow": "Tech Stack · နည်းပညာများ",
  "tech.title": "Skills & Technologies",
  "tech.sub":
    "A full-spectrum toolkit spanning Android engineering, backend services, AI/ML and cybersecurity — validated by 82+ certified courses.",

  "metrics.eyebrow": "Live Developer Metrics",
  "metrics.title": "Engineering Pulse — Live",
  "metrics.sub": "Real GitHub data and skill proficiency — measured across the full stack.",
  "metrics.skills": "Skill Proficiency Radar",
  "metrics.github": "GitHub — Live Data",
  "metrics.followers": "Followers",
  "metrics.repos": "Public Repos",
  "metrics.languages": "Top Languages",
  "metrics.live": "LIVE · GitHub API",
  "metrics.cached": "CACHED · Offline",

  "apps.eyebrow": "App Collection · အက်ပ် စုစည်းမှု",
  "apps.title": "16 Signature Builds. One Developer.",
  "apps.sub":
    "From POS suites to video players, games to AI tools — every app is production-minded, cleanly architected, and open for you to explore on GitHub.",
  "apps.search": "Search apps… (weather, POS, game…)",
  "apps.more.title": "More Repositories & Builds",
  "apps.more.sub": "The full engineering catalogue — click any to open on GitHub.",

  "roadmap.eyebrow": "The Senior Roadmap · လမ်းညွှန်ချက်",
  "roadmap.title": "The 18-Week Android Architect Path",
  "roadmap.sub":
    "The exact curriculum I follow and teach — click through the six pillars, then tap skills to simulate your own readiness level in real time.",
  "roadmap.ready": "Your simulated readiness:",
  "roadmap.acquired": "{n} skills acquired",
  "roadmap.goal": "Goal: 24 premium skills",
  "roadmap.master": "Click skills to master them:",
  "roadmap.mock": "MOCK WHITEBOARD QUESTION",
  "roadmap.rubric": "💡 Taught with the exact 5-point grading rubric senior interviewers use.",
  "roadmap.tools": "Core tooling:",
  "roadmap.cta": "Want this roadmap personalized to you? Book a free strategy call",

  "certs.eyebrow": "Credentials · Google Developers Launchpad",
  "certs.title": "82+ Verified Certificates",
  "certs.sub":
    "Programming Hub certification portfolio across 9 domains — programming, web, mobile, databases, AI, security, blockchain and more. View featured certificates or the full verified collection on Gravatar.",
  "certs.totalPrefix": "Certificate Categories —",
  "certs.totalSuffix": "Total",
  "certs.full": "Full collection on Gravatar",

  "vaults.eyebrow": "Digital Vault · စုစည်းမှု စင်တာ",
  "vaults.title": "The Complete MKA Universe",
  "vaults.sub":
    "40+ GitHub pages, 30+ deployed Lovable apps, 20 professional emails and 18 verified social profiles — all organized in one digital hub.",
  "vaults.github": "GitHub Pages Collection",
  "vaults.sites": "{n} sites",
  "vaults.lovable": "Lovable WPA Links",
  "vaults.appsCount": "{n} apps",
  "vaults.emails": "Email Collection",
  "vaults.addresses": "{n} addresses",
  "vaults.emailsHint": "Click any email to copy it instantly.",
  "vaults.socials": "Social Media Accounts",
  "vaults.profiles": "{n} profiles",
  "vaults.socialsSub":
    "All 16+ verified accounts synced from Gravatar — moekyawaung13721 and official channels.",

  "svc.eyebrow": "Work With Me",
  "svc.title": "Three Ways We Can Build Together",
  "svc.sub":
    "Whether you need your code reviewed, your career accelerated, or your product shipped — there's a clear path.",
  "svc.review.name": "Senior Code Review",
  "svc.review.desc": "Deep architectural audit of your Android codebase with a recorded video walkthrough.",
  "svc.mentor.name": "Roadmap Mentorship",
  "svc.mentor.desc": "The complete Senior Android roadmap — 6 pillars, templates, and mock interview training.",
  "svc.build.name": "Build Your App",
  "svc.build.desc": "Bring your product idea to life — end-to-end Android development with Firebase backend.",
  "svc.cta.roadmap": "Get the Roadmap",
  "svc.cta.other": "Enquire Now",

  "faq.eyebrow": "FAQ",
  "faq.title": "Frequently Asked Questions",
  "faq.sub": "The quick answers developers, recruiters and partners ask most.",
  "faq.0.q": "Are you open to full-time roles or freelance projects?",
  "faq.0.a":
    "Yes — I'm currently Open to Work 🟢. Based between Tachileik (Myanmar) and Bangkok (Thailand), I'm available for remote senior Android roles, contract work, and long-term freelance collaborations worldwide.",
  "faq.1.q": "What kind of apps have you actually shipped?",
  "faq.1.a":
    "I've built 40+ projects across the full spectrum — POS systems (Full / Ultimate / Pro Max versions), video players, social dashboards, PWAs, games, weather apps, job portals, travel guides and AI-powered tools like MoekyawTranslator. You can explore all 16 signature apps in the collection above.",
  "faq.2.q": "Which tech stack do you specialize in?",
  "faq.2.a":
    "Kotlin + Jetpack Compose on Android with MVVM/MVI and Clean Architecture, Firebase and REST APIs on the backend, plus Python for AI/ML work. I also hold certifications in Flutter, React Native, iOS/Swift and web technologies.",
  "faq.3.q": "How can I verify your certificates?",
  "faq.3.a":
    "Every certificate is issued by Programming Hub in association with Google Developers Launchpad and is publicly verifiable via the certificate ID link. Browse the featured certificates above or my Gravatar profile at gravatar.com/moekyawaung2026.",
  "faq.4.q": "Do you offer mentorship for junior developers?",
  "faq.4.a":
    "Absolutely — my Roadmap Mentorship tier is built exactly for that. You get the 18-week Senior Android roadmap, code reviews, mock whiteboard interviews, and direct access to me for questions. Code with culture, build with purpose.",

  "final.eyebrow": "🎆 Ready When You Are",
  "final.t1": "Let's Build Something",
  "final.t2": "Legendary Together.",
  "final.sub":
    "Senior Android engineering, AI-powered apps, secure systems — if you can imagine it, I can architect it.",
  "final.cta1": "Start a Project",
  "final.cta2": "Book a Free Call",

  "contact.eyebrow": "Contact · ဆက်သွယ်ရန်",
  "contact.title": "Let's Talk About Your Project",
  "contact.sub":
    "Available for remote senior Android roles, freelance builds and mentorship. Reach out on any channel — I reply fast, usually within a day.",
  "contact.sendTitle": "Send a Message",
  "contact.name": "Your Name",
  "contact.namePh": "e.g. Min Thaw",
  "contact.email": "Your Email",
  "contact.emailPh": "e.g. minthaw@developer.com",
  "contact.msg": "Project Details",
  "contact.msgPh": "Tell me about your app idea, team, or roadmap goals…",
  "contact.send": "Send Message",
  "contact.secure": "🔒 Secure contact — no spam, ever.",

  "footer.nav": "Navigate",
  "footer.apps": "Signature Apps",
  "footer.touch": "Get In Touch",
});

/* -------- BURMESE (မြန်မာ) -------- */
Object.assign(DICT.mm, {
  "nav.about": "အကြောင်း",
  "nav.tech": "နည်းပညာများ",
  "nav.apps": "အက်ပ်များ",
  "nav.roadmap": "လမ်းပြမြေပုံ",
  "nav.vaults": "စုစည်းမှုများ",
  "nav.contact": "ဆက်သွယ်ရန်",
  "nav.hire": "အလုပ်ခန့်ပါ",
  "nav.hireMobile": "အလုပ်ခန့်ပါ — Open to Work 🟢",
  "nav.quickNav": "အမြန်သွား",

  "hero.badge": "မင်္ဂလာပါ · {greet}",
  "hero.ctaApps": "အက်ပ် ၁၆ ခု ကြည့်ရှုပါ",
  "hero.ctaResume": "CV ဒေါင်းလုဒ်လုပ်ပါ",
  "hero.trust.google": "Google Developers Launchpad",
  "hero.trust.building": "တည်ဆောက်နေသည်: {app}",
  "hero.call": "အခမဲ့ တိုင်ပင်ချက် ရယူပါ",
  "hero.snake": "မြွေဂိမ်း ကစားပါ",
  "hero.verified": "Gravatar ဖြင့် အတည်ပြုပြီး",
  "hero.stats.cert": "လက်မှတ်များ",
  "hero.stats.proj": "တည်ဆောက်ထားသော ပရောဂျက်",
  "hero.stats.cat": "ကျွမ်းကျင်မှု အမျိုးအစား",
  "hero.stats.apps": "ထင်ရှားသော အက်ပ်များ",
  "hero.explore": "စူးစမ်းပါ",
  "hero.nowBuilding": "လက်ရှိ တည်ဆောက်နေသည်",
  "hero.t1": "အကြီးတန်း Android ဆော့ဖ်ဝဲအင်ဂျင်နီယာ",
  "hero.t2": "Kotlin · Jetpack Compose ကျွမ်းကျင်သူ",
  "hero.t3": "Ethical Hacker · ဆိုက်ဘာလုံခြုံရေး",
  "hero.t4": "AI / ML အက်ပ် ထုတ်လုပ်သူ",
  "hero.t5": "MoekyawTranslator ဖန်တီးသူ",

  "greet.morning": "မင်္ဂလာနံနက်ခင်းပါ ☀️",
  "greet.afternoon": "မင်္ဂလာနေ့လည်ခင်းပါ 🌤️",
  "greet.evening": "မင်္ဂလာညနေခင်းပါ 🌇",
  "greet.night": "ကောင်းသောညပါ 🌙",

  "about.eyebrow": "Moe Kyaw Aung အကြောင်း",
  "about.t1": "စိတ်အားထက်သန်သော",
  "about.t2": "ဆော့ဖ်ဝဲရေးသူ",
  "about.t3": "အမြဲလေ့လာနေသူ",
  "fa.mobile": "မိုဘိုင်း",
  "fa.backend": "နောက်ခံစနစ်",
  "fa.security": "လုံခြုံရေး",
  "fa.ai": "AI / ML",

  "tech.eyebrow": "Tech Stack · နည်းပညာများ",
  "tech.title": "ကျွမ်းကျင်မှုနှင့် နည်းပညာများ",
  "tech.sub":
    "Android အင်ဂျင်နီယာမှ backend, AI/ML နှင့် ဆိုက်ဘာလုံခြုံရေးအထိ — လက်မှတ် ၈၂+ ဖြင့် အတည်ပြုထားသည်။",

  "metrics.eyebrow": "Live Developer စာရင်းအင်း",
  "metrics.title": "အင်ဂျင်နီယာ သွေးခုန်နှုန်း",
  "metrics.sub": "GitHub အချက်အလက် အစစ်အမှန်များနှင့် ကျွမ်းကျင်မှု တိုင်းတာချက်များ — stack တစ်ခုလုံးကို တိုင်းတာထားသည်။",
  "metrics.skills": "ကျွမ်းကျင်မှု Radar",
  "metrics.github": "GitHub — Live အချက်အလက်",
  "metrics.followers": "Followers",
  "metrics.repos": "Public Repos",
  "metrics.languages": "ထိပ်တန်း ဘာသာစကားများ",
  "metrics.live": "LIVE · GitHub API",
  "metrics.cached": "CACHED · Offline",

  "apps.eyebrow": "App Collection · အက်ပ် စုစည်းမှု",
  "apps.title": "ထင်ရှားသော အက်ပ် ၁၆ ခု။ ဆော့ဖ်ဝဲရေးသူ တစ်ဦး။",
  "apps.sub":
    "POS စနစ်များမှ video player များ၊ ဂိမ်းများမှ AI tools အထိ — အက်ပ်တိုင်းကို GitHub တွင် ကြည့်ရှုနိုင်ပါသည်။",
  "apps.search": "အက်ပ်ရှာရန်… (weather, POS, game…)",
  "apps.more.title": "အခြား Repositories နှင့် Builds များ",
  "apps.more.sub": "အင်ဂျင်နီယာ စာရင်းအပြည့်အစုံ — နှိပ်လိုက်ရုံဖြင့် GitHub တွင် ဖွင့်မည်။",

  "roadmap.eyebrow": "The Senior Roadmap · လမ်းညွှန်ချက်",
  "roadmap.title": "၁၈ ပတ် Android Architect ခရီးစဉ်",
  "roadmap.sub":
    "ကျွန်တော် လိုက်နာပြီး သင်ကြားပေးနေသော သင်ရိုး — အပိုင်း ၆ ခုကို လေ့လာပြီး ကျွမ်းကျင်မှုများကို နှိပ်၍ ကိုယ့်အဆင်သင့်ဖြစ်မှုကို စမ်းသပ်ကြည့်ပါ။",
  "roadmap.ready": "သင်၏ အဆင်သင့်ဖြစ်မှု:",
  "roadmap.acquired": "{n} ခု ကျွမ်းကျင်ပြီး",
  "roadmap.goal": "ပန်းတိုင်: ကျွမ်းကျင်မှု ၂၄ ခု",
  "roadmap.master": "ကျွမ်းကျင်မှုများကို နှိပ်၍ မှတ်တမ်းတင်ပါ:",
  "roadmap.mock": "အင်တာဗျူး လေ့ကျင့်မေးခွန်း",
  "roadmap.rubric": "💡 အကြီးတန်း အင်တာဗျူးမှူးများ အသုံးပြုသော ၅-မှတ် အမှတ်ပေးစနစ်ဖြင့် သင်ကြားသည်။",
  "roadmap.tools": "အဓိက tools:",
  "roadmap.cta": "ဤလမ်းပြမြေပုံကို သင့်အတွက် စိတ်ကြိုက်လိုချင်ပါသလား။ အခမဲ့ တိုင်ပင်ချက် ရယူပါ",

  "certs.eyebrow": "အရည်အချင်း · Google Developers Launchpad",
  "certs.title": "အတည်ပြုပြီး လက်မှတ် ၈၂+",
  "certs.sub":
    "Programming Hub လက်မှတ်များ — နယ်ပယ် ၉ ခု (programming, web, mobile, databases, AI, security, blockchain နှင့် အခြား)။ Gravatar တွင် အပြည့်အစုံ ကြည့်ပါ။",
  "certs.totalPrefix": "လက်မှတ် အမျိုးအစားများ —",
  "certs.totalSuffix": "စုစုပေါင်း",
  "certs.full": "Gravatar တွင် အပြည့်အစုံ ကြည့်ပါ",

  "vaults.eyebrow": "Digital Vault · စုစည်းမှု စင်တာ",
  "vaults.title": "MKA ကမ္ဘာ အပြည့်အစုံ",
  "vaults.sub":
    "GitHub pages ၄၀+၊ Lovable အက်ပ် ၃၀+၊ အီးမေးလ် ၂၀ နှင့် လူမှုကွန်ရက် ၁၈ ခု — တစ်နေရာတည်းတွင် စုစည်းထားသည်။",
  "vaults.github": "GitHub Pages စုစည်းမှု",
  "vaults.sites": "{n} ခု",
  "vaults.lovable": "Lovable WPA လင့်များ",
  "vaults.appsCount": "{n} အက်ပ်",
  "vaults.emails": "အီးမေးလ် စုစည်းမှု",
  "vaults.addresses": "{n} ခု",
  "vaults.emailsHint": "အီးမေးလ်ကို နှိပ်၍ ချက်ချင်း ကူးယူနိုင်ပါသည်။",
  "vaults.socials": "လူမှုကွန်ရက် အကောင့်များ",
  "vaults.profiles": "{n} အကောင့်",
  "vaults.socialsSub": "Gravatar — moekyawaung13721 နှင့် တရားဝင်ချန်နယ်များမှ အတည်ပြုထားသော အကောင့် ၁၆+ ခု။",

  "svc.eyebrow": "ကျွန်တော်နှင့် လက်တွဲပါ",
  "svc.title": "အတူတကွ တည်ဆောက်နိုင်သော နည်းလမ်း သုံးခု",
  "svc.sub":
    "ကုဒ်ပြန်လည်စစ်ဆေးခြင်း၊ အသက်မွေးဝမ်းကျောင်း အရှိန်မြှင့်ခြင်း သို့မဟုတ် ထုတ်ကုန်ထုတ်လုပ်ခြင်း — ရှင်းလင်းသော လမ်းကြောင်း ရှိပါသည်။",
  "svc.review.name": "Senior Code စစ်ဆေးမှု",
  "svc.review.desc": "သင့် Android codebase ကို နက်နက်ရှိုင်းရှိုင်း စစ်ဆေးပြီး video ရှင်းလင်းချက်ဖြင့် ပြန်လည်တင်ပြသည်။",
  "svc.mentor.name": "လမ်းပြမြေပုံ Mentorship",
  "svc.mentor.desc": "အပြည့်အစုံ Senior Android လမ်းပြမြေပုံ — အပိုင်း ၆ ခု၊ templates နှင့် mock interview သင်တန်း။",
  "svc.build.name": "အက်ပ် တည်ဆောက်ရန်",
  "svc.build.desc": "သင့်စိတ်ကူးကို လက်တွေ့ဖြစ်လာစေပါ — Firebase backend ပါဝင်သော Android အက်ပ် အပြည့်အစုံ။",
  "svc.cta.roadmap": "လမ်းပြမြေပုံ ရယူပါ",
  "svc.cta.other": "စုံစမ်းပါ",

  "faq.eyebrow": "FAQ",
  "faq.title": "အမေးများသော မေးခွန်းများ",
  "faq.sub": "Developer များ၊ recruiter များနှင့် မိတ်ဖက်များ အမေးအများဆုံး အဖြေများ။",
  "faq.0.q": "အချိန်ပြည့် အလုပ် သို့မဟုတ် freelance ပရောဂျက်များကို ရရှိနိုင်ပါသလား။",
  "faq.0.a":
    "ရပါသည် — လက်ရှိ Open to Work 🟢 ဖြစ်ပါသည်။ Tachileik (မြန်မာ) နှင့် Bangkok (ထိုင်း) ကြားတွင် ရှိနေပြီး remote senior Android အလုပ်များ၊ contract လုပ်ငန်းများနှင့် ရေရှည် freelance ပူးပေါင်းမှုများကို ဆောင်ရွက်နိုင်ပါသည်။",
  "faq.1.q": "အမှန်တကယ် ထုတ်လုပ်ထားသော အက်ပ်များက ဘာတွေလဲ။",
  "faq.1.a":
    "ပရောဂျက် ၄၀+ တည်ဆောက်ထားပါသည် — POS စနစ်များ (Full / Ultimate / Pro Max), video player, social dashboard, PWA, ဂိမ်းများ, weather အက်ပ်, job portal, travel guide နှင့် MoekyawTranslator ကဲ့သို့ AI အက်ပ်များ ပါဝင်သည်။ ထင်ရှားသော အက်ပ် ၁၆ ခုကို အထက်တွင် ကြည့်ရှုနိုင်သည်။",
  "faq.2.q": "ဘယ် tech stack ကို အထူးပြုသလဲ။",
  "faq.2.a":
    "Android တွင် Kotlin + Jetpack Compose (MVVM/MVI, Clean Architecture)၊ backend တွင် Firebase နှင့် REST APIs၊ AI/ML အတွက် Python ကို အသုံးပြုသည်။ Flutter, React Native, iOS/Swift နှင့် web နည်းပညာများတွင်လည်း လက်မှတ်များ ရှိသည်။",
  "faq.3.q": "လက်မှတ်များကို ဘယ်လို စစ်ဆေးနိုင်မလဲ။",
  "faq.3.a":
    "လက်မှတ်တိုင်းသည် Programming Hub (Google Developers Launchpad နှင့် ပူးပေါင်း) မှ ထုတ်ပေးပြီး certificate ID ဖြင့် အများပြည်သူသို့ စစ်ဆေးနိုင်သည်။ Gravatar: gravatar.com/moekyawaung2026 တွင် ကြည့်ပါ။",
  "faq.4.q": "Junior developer များအတွက် mentorship ရှိပါသလား။",
  "faq.4.a":
    "ရှိပါသည် — Roadmap Mentorship tier သည် ထိုအတွက် ဖြစ်သည်။ ၁၈ ပတ် Senior Android လမ်းပြမြေပုံ၊ code review၊ mock interview များနှင့် ကျွန်တော့်ထံ တိုက်ရိုက် မေးမြန်းခွင့် ရရှိသည်။",

  "final.eyebrow": "🎆 အဆင်သင့်ဖြစ်ပြီလား",
  "final.t1": "အတူတကွ တည်ဆောက်ကြပါစို့",
  "final.t2": "ဒဏ္ဍာရီဆန်ဆန် ဖန်တီးကြပါစို့။",
  "final.sub":
    "Senior Android အင်ဂျင်နီယာ၊ AI အက်ပ်များ၊ လုံခြုံသော စနစ်များ — စိတ်ကူးနိုင်သမျှကို တည်ဆောက်ပေးနိုင်ပါသည်။",
  "final.cta1": "ပရောဂျက် စတင်ပါ",
  "final.cta2": "အခမဲ့ တိုင်ပင်ချက် ရယူပါ",

  "contact.eyebrow": "Contact · ဆက်သွယ်ရန်",
  "contact.title": "သင့်ပရောဂျက်အကြောင်း ဆွေးနွေးကြပါစို့",
  "contact.sub":
    "Remote Senior Android အလုပ်များ၊ freelance ပရောဂျက်များနှင့် mentorship အတွက် ရရှိနိုင်ပါသည်။ မည်သည့်နည်းလမ်းဖြင့်မဆို ဆက်သွယ်ပါ — များသောအားဖြင့် တစ်ရက်အတွင်း ပြန်ကြားပါသည်။",
  "contact.sendTitle": "မက်ဆေ့ချ် ပို့ပါ",
  "contact.name": "သင့်အမည်",
  "contact.namePh": "ဥပမာ — မင်းသော်",
  "contact.email": "သင့်အီးမေးလ်",
  "contact.emailPh": "ဥပမာ — minthaw@developer.com",
  "contact.msg": "ပရောဂျက် အသေးစိတ်",
  "contact.msgPh": "သင့်အက်ပ် စိတ်ကူး၊ အဖွဲ့ သို့မဟုတ် လမ်းပြမြေပုံ ပန်းတိုင်များအကြောင်း ရေးပါ…",
  "contact.send": "မက်ဆေ့ချ် ပို့ပါ",
  "contact.secure": "🔒 လုံခြုံသော ဆက်သွယ်မှု — spam မရှိပါ။",

  "footer.nav": "လမ်းညွှန်",
  "footer.apps": "ထင်ရှားသော အက်ပ်များ",
  "footer.touch": "ဆက်သွယ်ရန်",
});

/* -------- STORE -------- */
let current: Lang = "en";
if (typeof window !== "undefined") {
  const saved = localStorage.getItem("mka-lang");
  if (saved === "mm") current = "mm";
}
if (typeof document !== "undefined") {
  document.documentElement.lang = current === "mm" ? "my" : "en";
}

const listeners = new Set<() => void>();

export function getLang(): Lang {
  return current;
}

export function setLang(l: Lang) {
  current = l;
  if (typeof window !== "undefined") localStorage.setItem("mka-lang", l);
  if (typeof document !== "undefined") document.documentElement.lang = l === "mm" ? "my" : "en";
  listeners.forEach((f) => f());
}

export function useLang(): Lang {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => {
        listeners.delete(cb);
      };
    },
    getLang
  );
}

function translate(lang: Lang, key: string, vars?: Record<string, string | number>): string {
  let s = DICT[lang][key] ?? DICT.en[key] ?? key;
  if (vars) {
    for (const k of Object.keys(vars)) {
      s = s.split(`{${k}}`).join(String(vars[k]));
    }
  }
  return s;
}

export function useT() {
  const lang = useLang();
  return useCallback(
    (key: string, vars?: Record<string, string | number>) => translate(lang, key, vars),
    [lang]
  );
}
