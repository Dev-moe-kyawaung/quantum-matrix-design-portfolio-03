// ============================================================
//  MOE KYAW AUNG · မိုးကျော်အောင် — REAL PROFILE DATA
// ============================================================

export const profile = {
  name: "Moe Kyaw Aung",
  nameMM: "မိုးကျော်အောင်",
  role: "Senior Android Developer",
  titles: [
    "Senior Android Developer",
    "Kotlin · Jetpack Compose Expert",
    "Ethical Hacker · Cybersecurity",
    "AI / ML App Builder",
    "Creator of MoekyawTranslator",
  ],
  location: "Tachileik, Myanmar 🇲🇲 ↔ Bangkok, Thailand 🇹🇭",
  email: "moekyawaung@programmer.net",
  phones: ["+95 9 889 000 889", "+959 666 000 050"],
  languages: ["Burmese 🇲🇲", "English 🌐", "Kotlin ☕"],
  status: "Open to Work 🟢",
  avatar:
    "https://0.gravatar.com/avatar/e50de5056fb346df6f6352326b64ced361105d41552d65f7a9ffd473c48e2b0a?size=512&d=initials",
  portrait:
    "https://res.cloudinary.com/dye5qpwii/image/upload/v1778527878/IMG_20260430_053105_uef0yr.png",
  portraitAlt:
    "https://res.cloudinary.com/dye5qpwii/image/upload/v1778763535/MKA_25_lbx6fb.webp",
  fireworks:
    "https://res.cloudinary.com/dye5qpwii/image/upload/v1779052645/2153-fireworks-composer_gm3e0h.jpg",
  github: "https://github.com/Dev-moe-kyawaung/",
  gravatar: "https://gravatar.com/moekyawaung2026",
  gravatar2: "https://gravatar.com/moekyawaung13721",
  philosophy: "Code with culture. Build with purpose.",
  currentlyBuilding: "MoekyawTranslator — AI Translation App",
  summary:
    "Senior Android Engineer with strong experience designing and delivering high-performance mobile applications using Kotlin, Jetpack, MVVM/MVI, and Clean Architecture. Proven expertise integrating Firebase (Auth, Firestore, Cloud Messaging, Crashlytics) and RESTful APIs, with CI/CD pipelines built on GitHub Actions and Azure DevOps. Passionate about clean, testable code — and mentoring the next generation of developers.",
  summary2:
    "From web platforms to mobile apps, databases to AI — I consistently expand my skill set across the full technology spectrum. My certification portfolio from Programming Hub (with Google Developers Launchpad) demonstrates practical, structured learning across 9 major domains and 82+ technical subjects, from programming languages to machine learning, blockchain and cybersecurity.",
};

export const stats = [
  { n: "82+", l: "Certificates" },
  { n: "40+", l: "Projects Built" },
  { n: "9", l: "Skill Categories" },
  { n: "16", l: "Signature Apps" },
];

export const focusAreas = [
  {
    emoji: "📱",
    title: "Mobile",
    desc: "Kotlin · Jetpack Compose · MVVM · Clean Architecture",
  },
  {
    emoji: "☁️",
    title: "Backend",
    desc: "Firebase · REST APIs · Python · Room DB",
  },
  {
    emoji: "🔐",
    title: "Security",
    desc: "Ethical Hacking · Cybersecurity · Kali Linux",
  },
  {
    emoji: "🤖",
    title: "AI / ML",
    desc: "Claude API · TensorFlow Lite · On-Device ML",
  },
];

export const techGroups = [
  {
    name: "📱 Android / Mobile",
    items: [
      { name: "Kotlin", color: "#7F52FF" },
      { name: "Jetpack Compose", color: "#4285F4" },
      { name: "Android Studio", color: "#3DDC84" },
      { name: "Flutter", color: "#46BEF2" },
      { name: "React Native", color: "#61DAFB" },
    ],
  },
  {
    name: "🏗️ Architecture & Patterns",
    items: [
      { name: "MVVM", color: "#C9A84C" },
      { name: "MVI", color: "#E0A82E" },
      { name: "Clean Architecture", color: "#8B9DC3" },
      { name: "Coroutines", color: "#7F52FF" },
      { name: "Kotlin Flow", color: "#A26BFF" },
    ],
  },
  {
    name: "☁️ Backend & Cloud",
    items: [
      { name: "Firebase", color: "#FFCA28" },
      { name: "REST APIs", color: "#48B983" },
      { name: "Retrofit", color: "#16A085" },
      { name: "Room DB", color: "#3DDC84" },
      { name: "AWS", color: "#FF9900" },
    ],
  },
  {
    name: "🤖 AI / ML",
    items: [
      { name: "Claude API", color: "#C9A84C" },
      { name: "Python", color: "#3776AB" },
      { name: "TensorFlow Lite", color: "#FF6F00" },
      { name: "ChatGPT API", color: "#10A37F" },
      { name: "Computer Vision", color: "#E34F26" },
    ],
  },
  {
    name: "🔐 Cybersecurity",
    items: [
      { name: "Ethical Hacking", color: "#9FEF00" },
      { name: "Kali Linux", color: "#557C94" },
      { name: "Linux", color: "#FCC624" },
      { name: "Cryptography", color: "#A8B2D1" },
      { name: "Digital Forensics", color: "#EF5B25" },
    ],
  },
  {
    name: "🛠️ Dev Tools",
    items: [
      { name: "Git", color: "#F05032" },
      { name: "GitHub Actions", color: "#2088FF" },
      { name: "VS Code", color: "#007ACC" },
      { name: "Figma", color: "#F24E1E" },
      { name: "Jira / Agile", color: "#0052CC" },
    ],
  },
];

export interface AppItem {
  emoji: string;
  name: string;
  desc: string;
  tag: string;
  url: string;
  isNew?: boolean;
  gradient: string;
}

export const apps: AppItem[] = [
  {
    emoji: "📱",
    name: "Social Dashboard",
    desc: "Modern social analytics dashboard with live data panels & premium UI.",
    tag: "React · Web",
    url: "https://github.com/moekyawaung-tech/social-dashboard",
    isNew: true,
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/15",
  },
  {
    emoji: "📱",
    name: "PWA App",
    desc: "Installable progressive web app with offline-first caching.",
    tag: "PWA · Web",
    url: "https://github.com/moekyawaung-tech/pwa-app",
    gradient: "from-cyan-500/20 via-sky-500/10 to-blue-500/15",
  },
  {
    emoji: "📊",
    name: "Admin Dashboard",
    desc: "Enterprise POS control center with analytics and management tools.",
    tag: "Kotlin · Android",
    url: "https://github.com/moekyawaung-tech/POS-Ultimate-Pro-Max",
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/15",
  },
  {
    emoji: "📈",
    name: "Stock Market",
    desc: "Market tracking tool with live quotes and portfolio insights.",
    tag: "Web · API",
    url: "https://github.com/moekyawaung-tech",
    gradient: "from-lime-500/20 via-emerald-500/10 to-green-500/15",
  },
  {
    emoji: "🎮",
    name: "Game Collection",
    desc: "Curated game library with launch screen, filters & favorites.",
    tag: "React · Web",
    url: "https://github.com/moekyawaung-tech/game-collection",
    gradient: "from-rose-500/20 via-pink-500/10 to-red-500/15",
  },
  {
    emoji: "🎵",
    name: "Music Player",
    desc: "Sleek audio player with playlists and background playback.",
    tag: "Android · Media",
    url: "https://github.com/moekyawaung-tech",
    gradient: "from-orange-500/20 via-amber-500/10 to-yellow-500/15",
  },
  {
    emoji: "💬",
    name: "Chat App",
    desc: "Real-time messaging experience built on Firebase Realtime DB.",
    tag: "Firebase · Chat",
    url: "https://github.com/moekyawaung-tech",
    gradient: "from-sky-500/20 via-blue-500/10 to-indigo-500/15",
  },
  {
    emoji: "⚽",
    name: "World Cup",
    desc: "Live match hub with fixtures, scores and tournament brackets.",
    tag: "Web · Sports",
    url: "https://github.com/moekyawaung-tech",
    gradient: "from-emerald-500/20 via-green-500/10 to-lime-500/15",
  },
  {
    emoji: "🛒",
    name: "E-commerce",
    desc: "Full-featured POS shop flow with cart, checkout & inventory.",
    tag: "POS · Commerce",
    url: "https://github.com/moekyawaung-tech/POS-Full-Version",
    gradient: "from-amber-500/20 via-orange-500/10 to-red-500/15",
  },
  {
    emoji: "💼",
    name: "Portfolio",
    desc: "Personal developer portfolio with project showcase & contact.",
    tag: "Portfolio · Web",
    url: "https://moekyawaung.github.io/",
    gradient: "from-indigo-500/20 via-violet-500/10 to-purple-500/15",
  },
  {
    emoji: "💰",
    name: "Money Tracker",
    desc: "Ultimate POS accounting suite with reports and daily totals.",
    tag: "POS · Finance",
    url: "https://github.com/moekyawaung-tech/POS-Ultimate-Version",
    gradient: "from-yellow-500/20 via-amber-500/10 to-orange-500/15",
  },
  {
    emoji: "🌤️",
    name: "Weather",
    desc: "Location-based forecast with animated conditions and hourly data.",
    tag: "API · Weather",
    url: "https://github.com/moekyawaung-tech/Weather-app",
    gradient: "from-cyan-500/20 via-teal-500/10 to-emerald-500/15",
  },
  {
    emoji: "💸",
    name: "Crypto",
    desc: "Digital currency tracker with live rates and portfolio charts.",
    tag: "Web · Fintech",
    url: "https://github.com/moekyawaung-tech",
    gradient: "from-fuchsia-500/20 via-purple-500/10 to-violet-500/15",
  },
  {
    emoji: "📝",
    name: "Todo",
    desc: "Minimal, elegant task manager with local persistence.",
    tag: "JavaScript · PWA",
    url: "https://github.com/moekyawaung-tech/javascript-todo",
    gradient: "from-teal-500/20 via-emerald-500/10 to-green-500/15",
  },
  {
    emoji: "🎯",
    name: "Video Player",
    desc: "High-performance media player with playlists and gestures.",
    tag: "Android · Media",
    url: "https://github.com/moekyawaung-tech/video-player",
    gradient: "from-red-500/20 via-rose-500/10 to-pink-500/15",
  },
  {
    emoji: "🏆",
    name: "LEGEND!",
    desc: "The flagship engineering profile — every build, one hub.",
    tag: "Flagship · Hub",
    url: "https://github.com/Dev-moe-kyawaung/",
    gradient: "from-[#3DDC84]/25 via-emerald-500/10 to-cyan-500/20",
  },
];

export const moreRepos = [
  { name: "Job-Portal-App", url: "https://github.com/moekyawaung-tech/Job-Portal-App" },
  { name: "thailand-travel", url: "https://github.com/moekyawaung-tech/thailand-travel" },
  { name: "casino-app", url: "https://github.com/moekyawaung-tech/casino-app" },
  { name: "Snake-Game-App", url: "https://github.com/moekyawaung-tech/Snake-Game-App" },
  { name: "Advance-POS-Version", url: "https://github.com/moekyawaung-tech/Advance-POS-Version" },
  { name: "POS-Ultimate-Version", url: "https://github.com/moekyawaung-tech/POS-Ultimate-Version" },
  { name: "Daily-planner-app", url: "https://github.com/moekyawaung-tech/Daily-planner-app" },
  { name: "Lens-lite", url: "https://github.com/moekyawaung-tech/Lens-lite" },
  { name: "My_postcode · My_web_project", url: "https://github.com/Moekyawaung-cyber/My_postcode-My_web_project" },
  { name: "Hospital-Lists", url: "https://github.com/Moekyawaung-cyber/Hospital-Lists" },
  { name: "PulseSync (Featured)", url: "https://github.com/Dev-moe-kyawaung/pulsesync-android" },
];

export const githubAccounts = [
  "moekyawaung",
  "moekyawaung-tech",
  "moekyawaung-china",
  "moekyawaung-developer",
  "moekyawaungvivov30pro-design",
  "moekyaw-aung-mm",
  "moekyawaung-mk",
  "moekyawaung-microsoft",
  "moekyawaung-cyber",
  "moekyawaung-bangkok",
  "moekyawaung-micro",
  "moekyawaungmka2032-boop",
  "moekyawaung-dev-mm",
  "moekyaw-developer",
  "Moekyawaung-mm",
  "moekyawaung-hack",
  "moekyawaung-graduate",
  "Moekyawaung-Linux",
  "Moekyawaung-coder",
  "moekyawaung-designer",
  "Moekyawaung2026",
  "moekyawaungmka2034-coder",
  "moekyawaung-web",
  "Moekyawaung-dev",
  "MoeKyawAung-code",
  "moekyawaung-creator",
  "moekyawaung-webdeveloper",
  "Moekyawaung-co",
  "moekyawaung-edu",
  "moekyawaung-senior",
  "Moekyawaung-Development",
  "moekyawaung-google",
  "Moe-KyawAung",
].map((u) => ({ user: u, url: `https://${u.toLowerCase()}.github.io/` }));

export const lovableLinks = [
  "happy-cv-creator.lovable.app",
  "moekyawaung.lovable.app",
  "moekyawaungmybio.lovable.app",
  "the-cv-palette.lovable.app",
  "moekyaw-url.lovable.app",
  "moekyawaung-dev.lovable.app",
  "moe-kyaw-aung.lovable.app",
  "moekyawaungmka.lovable.app",
  "moekyaw.lovable.app",
  "m-moekyaw.lovable.app",
  "dev-moekyawaung.lovable.app",
  "dev-moekyaw.lovable.app",
  "cv-beacon.lovable.app",
  "moekyawaungmkamka.lovable.app",
  "pixel-perfect-snap-39.lovable.app",
  "devmoekyaw.lovable.app",
  "profile-persuasion-hub.lovable.app",
  "friendly-haven-io.lovable.app",
  "moekyawaung-github.lovable.app",
  "moekyawgithub.lovable.app",
  "joy-codify-life.lovable.app",
  "mmoekyaw.lovable.app",
  "color-code-chronicles.lovable.app",
  "moekyawaung-free.lovable.app",
  "app-skill-gallery.lovable.app",
  "spark-coach-create.lovable.app",
  "moekyaw-mk.lovable.app",
  "moekyawaung-myanmar.lovable.app",
  "mmoe.lovable.app",
  "moekyaw-dev.lovable.app",
].map((d) => ({ domain: d, url: `https://${d}` }));

export const emails = [
  "moekyawaung@programmer.net",
  "moekyawaung@collector.org",
  "moekyawaung@technologist.com",
  "moekyawaung@techie.com",
  "moekyawaung@graphic-designer.com",
  "moekyawaung@cybergal.com",
  "moekyawaung@webname.com",
  "moekyawaung@hackermail.com",
  "moekyawaung@graduate.org",
  "moekyawaung@engineer.com",
  "moekyawaung@asia.com",
  "moekyawaung@contractor.net",
  "moekyawaung@linuxmail.org",
  "moekyawaung@usa.com",
  "moekyawaung@europe.com",
  "moekyawaung@mail.com",
  "moekyawaung@iname.com",
  "moekyawaung@socialogist.com",
  "moekyawaung@secretary.net",
  "moekyawaung@publicist.com",
];

export const socials = [
  { name: "GitHub", emoji: "🐙", url: "https://github.com/Moekyawaung", handle: "@Moekyawaung" },
  { name: "LinkedIn", emoji: "💼", url: "https://www.linkedin.com/in/moe-kyaw-aung-2653093a1", handle: "Moe Kyaw Aung" },
  { name: "YouTube", emoji: "▶️", url: "https://www.youtube.com/channel/UCuTXUguZb4xjeL2nX8WJGew", handle: "Moe Kyaw Aung" },
  { name: "TikTok", emoji: "🎵", url: "https://tiktok.com/@moelay262411", handle: "@moelay262411" },
  { name: "Reddit", emoji: "👽", url: "https://www.reddit.com/user/Mobile-Chemistry4675", handle: "u/Mobile-Chemistry4675" },
  { name: "Pinterest", emoji: "📌", url: "https://www.pinterest.com/moekyawaung13721", handle: "@moekyawaung13721" },
  { name: "Tumblr", emoji: "💬", url: "https://www.tumblr.com/moekyawaung", handle: "@moekyawaung" },
  { name: "Flickr", emoji: "📷", url: "https://www.flickr.com/people/204037451@N06", handle: "@moekyawaung" },
  { name: "Twitch", emoji: "🎮", url: "https://gravatar.com/moekyawaung13721", handle: "Via Gravatar" },
  { name: "Vimeo", emoji: "🎬", url: "https://vimeo.com/user252414232", handle: "user252414232" },
  { name: "Bluesky", emoji: "🦋", url: "https://bsky.app/profile/moekyawaung96.bsky.social", handle: "@moekyawaung96" },
  { name: "WordPress", emoji: "📝", url: "https://moekyawaung.business.blog", handle: "moekyawaung.blog" },
  { name: "GitLab", emoji: "🦊", url: "https://gitlab.com/Moekyawaung", handle: "@Moekyawaung" },
  { name: "Telegram", emoji: "✈️", url: "https://t.me/Moekyawaung", handle: "@Moekyawaung" },
  { name: "Gravatar", emoji: "🟣", url: "https://gravatar.com/moekyawaung13721", handle: "Verified Profile" },
  { name: "Slack", emoji: "💠", url: "https://moekyawaung.slack.com/", handle: "moekyawaung.slack.com" },
  { name: "PayPal", emoji: "💰", url: "https://www.paypal.com/paypalme/my/profile", handle: "PayPal Me" },
  { name: "Strikingly", emoji: "🌟", url: "http://moekyawaung2026.strikingly.com", handle: "moekyawaung2026" },
];

export const certCategories = [
  { emoji: "⌨️", name: "Programming Languages", count: 13 },
  { emoji: "🌐", name: "Web Development", count: 13 },
  { emoji: "📱", name: "Mobile & App Dev", count: 7 },
  { emoji: "🗄️", name: "Databases", count: 6 },
  { emoji: "🤖", name: "AI & Data Science", count: 11 },
  { emoji: "🔐", name: "Security & DevOps", count: 10 },
  { emoji: "⛓️", name: "Blockchain", count: 4 },
  { emoji: "🛠️", name: "Software Engineering", count: 7 },
  { emoji: "📈", name: "Marketing & Business", count: 11 },
];

export const featuredCerts = [
  { name: "Kotlin for Android", url: "https://storage.googleapis.com/programminghub/certificate%2F1739833075958.jpg" },
  { name: "React Development", url: "https://storage.googleapis.com/programminghub/certificate%2F1739836044174.jpg" },
  { name: "Firebase", url: "https://storage.googleapis.com/programminghub/certificate%2F1739832041295.jpg" },
  { name: "Flutter", url: "https://storage.googleapis.com/programminghub/certificate%2F1739833967447.jpg" },
  { name: "Ethical Hacking", url: "https://storage.googleapis.com/programminghub/certificate%2F1739837560681.jpg" },
  { name: "Machine Learning", url: "https://storage.googleapis.com/programminghub/certificate%2F1739898444003.jpg" },
  { name: "DevOps", url: "https://storage.googleapis.com/programminghub/certificate%2F1736964408824.jpg" },
  { name: "AWS Cloud Computing", url: "https://storage.googleapis.com/programminghub/certificate%2F1739872219283.jpg" },
  { name: "iOS App Development", url: "https://storage.googleapis.com/programminghub/certificate%2F1736963166388.jpg" },
  { name: "Cyber Security", url: "https://storage.googleapis.com/programminghub/certificate%2F1719559807330.jpg" },
];

export interface RoadmapNode {
  id: string;
  title: string;
  duration: string;
  level: string;
  description: string;
  skills: string[];
  question: string;
  tooling: string[];
}

export const roadmapNodes: RoadmapNode[] = [
  {
    id: "arch",
    title: "Clean Architecture & Reactive Streams",
    duration: "Weeks 1 – 3",
    level: "Advanced",
    description: "Master unidirectional data flow (MVI/MVVM), cold vs hot Flows, and enterprise dependency injection with Hilt — the exact patterns senior interviews probe.",
    skills: [
      "Unidirectional Data Flow with stable UI states",
      "StateFlow vs SharedFlow & backpressure",
      "Custom Coroutine Dispatchers & thread safety",
      "Hilt multi-module scopes & multi-binding",
    ],
    question: "How do you prevent memory leaks in cold flow collection during configuration changes?",
    tooling: ["Kotlin Coroutines", "Dagger Hilt", "Flow APIs", "Arch Components"],
  },
  {
    id: "perf",
    title: "Memory & Render Profiling",
    duration: "Weeks 4 – 6",
    level: "Expert",
    description: "Diagnose stutters, heap churn and leaks with surgical precision using Android Studio Profiler, Perfetto and Macrobenchmark.",
    skills: [
      "Heap dump analysis with LeakCanary",
      "Baseline Profiles for 40% faster startup",
      "Perfetto / Systrace deep tracing",
      "Compose recomposition elimination",
    ],
    question: "How do Baseline Profiles and ART compilation states affect app startup latency?",
    tooling: ["Perfetto", "Macrobenchmark", "LeakCanary", "Android Profiler"],
  },
  {
    id: "compose",
    title: "Jetpack Compose Internals",
    duration: "Weeks 7 – 9",
    level: "Architect",
    description: "Understand the Compose compiler, snapshot state system and the Composition–Layout–Drawing phases to build buttery-smooth UI.",
    skills: [
      "@Stable / @Immutable & skipping rules",
      "Lambda-modifiers for Layout & Draw",
      "derivedStateOf scroll optimization",
      "Custom Canvas rendering engines",
    ],
    question: "Why does passing a non-stable List trigger endless recompositions, and how do you fix it?",
    tooling: ["Compose Compiler", "Layout Inspector", "SnapshotStateList", "DerivedStateOf"],
  },
  {
    id: "offline",
    title: "Offline-First & Security",
    duration: "Weeks 10 – 12",
    level: "Architect",
    description: "Build apps that work flawlessly offline — Room sync engines, WorkManager, Keystore cryptography and secure storage.",
    skills: [
      "Room-backed sync with conflict resolution",
      "WorkManager + Paging 3 pipelines",
      "Android Keystore & biometric auth",
      "ProtoBuf payload optimization",
    ],
    question: "Design an offline sync engine that keeps transaction integrity across network dropouts.",
    tooling: ["Room DB", "WorkManager", "ProtoBuf", "Android Keystore"],
  },
  {
    id: "kmp",
    title: "Kotlin Multiplatform (KMP)",
    duration: "Weeks 13 – 15",
    level: "Expert",
    description: "Share architecture cores across Android & iOS while keeping native performance — the future-ready skill top startups hire for.",
    skills: [
      "KMP common engines (SQLDelight, Ktor)",
      "expect / actual platform bridging",
      "Coroutines & Swift async/await mapping",
      "Multi-module Gradle for KMP",
    ],
    question: "How do you map cold Kotlin Flows into Swift concurrency in a shared KMP library?",
    tooling: ["KMP", "SQLDelight", "Ktor Client", "SKIE"],
  },
  {
    id: "devops",
    title: "Enterprise DevOps & Builds",
    duration: "Weeks 16 – 18",
    level: "Architect",
    description: "Ship like a tech lead — custom Gradle plugins, configuration caching, screenshot testing and high-throughput CI/CD.",
    skills: [
      "Custom Gradle tasks in Kotlin DSL",
      "Configuration caching mastery",
      "Paparazzi screenshot testing",
      "Canary rollouts via Play APIs",
    ],
    question: "How does Gradle Configuration Cache work, and how do you resolve cache misses in multi-module builds?",
    tooling: ["Gradle Kotlin DSL", "GitHub Actions", "Paparazzi", "Firebase"],
  },
];

export const services = [
  {
    icon: "🔍",
    name: "Senior Code Review",
    price: "$49",
    unit: "per review",
    desc: "Deep architectural audit of your Android codebase with a recorded video walkthrough.",
    features: [
      "Architecture & memory-leak report",
      "Compose recomposition analysis",
      "Prioritized refactor checklist",
      "48-hour turnaround",
    ],
    featured: false,
  },
  {
    icon: "🧭",
    name: "Roadmap Mentorship",
    price: "$149",
    unit: "lifetime access",
    desc: "The complete Senior Android roadmap — 6 pillars, templates, and mock interview training.",
    features: [
      "42+ production code templates",
      "Weekly live whiteboard sessions",
      "Discord community access",
      "Lifetime free updates",
    ],
    featured: true,
  },
  {
    icon: "🚀",
    name: "Build Your App",
    price: "Custom",
    unit: "let's talk",
    desc: "Bring your product idea to life — end-to-end Android development with Firebase backend.",
    features: [
      "Play Store release included",
      "Firebase + CI/CD setup",
      "Post-launch support",
      "Start in 1 week",
    ],
    featured: false,
  },
];

export const faqs = [
  {
    q: "Are you open to full-time roles or freelance projects?",
    a: "Yes — I'm currently Open to Work 🟢. Based between Tachileik (Myanmar) and Bangkok (Thailand), I'm available for remote senior Android roles, contract work, and long-term freelance collaborations worldwide.",
  },
  {
    q: "What kind of apps have you actually shipped?",
    a: "I've built 40+ projects across the full spectrum — POS systems (Full / Ultimate / Pro Max versions), video players, social dashboards, PWAs, games, weather apps, job portals, travel guides and AI-powered tools like MoekyawTranslator. You can explore all 16 signature apps in the collection above.",
  },
  {
    q: "Which tech stack do you specialize in?",
    a: "Kotlin + Jetpack Compose on Android with MVVM/MVI and Clean Architecture, Firebase and REST APIs on the backend, plus Python for AI/ML work. I also hold certifications in Flutter, React Native, iOS/Swift and web technologies.",
  },
  {
    q: "How can I verify your certificates?",
    a: "Every certificate is issued by Programming Hub in association with Google Developers Launchpad and is publicly verifiable via the certificate ID link. Browse the featured certificates above or my Gravatar profile at gravatar.com/moekyawaung2026.",
  },
  {
    q: "Do you offer mentorship for junior developers?",
    a: "Absolutely — my Roadmap Mentorship tier is built exactly for that. You get the 18-week Senior Android roadmap, code reviews, mock whiteboard interviews, and direct access to me for questions. Code with culture, build with purpose.",
  },
];
