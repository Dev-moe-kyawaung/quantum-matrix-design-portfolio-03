# Moe Kyaw Aung's Quantum Matrix Design Portfolio 🚀

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/Vite-64BAFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)

## ✨ Description

This project is a highly interactive and visually rich personal portfolio website for Moe Kyaw Aung, a Senior Android Developer. It showcases his expertise, projects, skills, and certifications through a modern, dynamic, and engaging user interface. Built with React and Vite, the portfolio features a unique 'Quantum Matrix' design aesthetic with subtle animations, a command palette for quick navigation, and a terminal-like interface in the hero section.

## 📑 Table of Contents

- [Project Title & Badges](#moe-kyaw-aung-s-quantum-matrix-design-portfolio-🚀)
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Features](#features-✨)
- [Tech Stack](#tech-stack-🛠️)
- [Installation](#installation--requirements--️)
- [Usage](#usage--how-to-use-💡)
- [Project Structure](#project-structure-📁)
- [Contributing](#contributing--️)
- [License](#license-⚖️)
- [Important Links](#important-links-🔗)
- [Footer](#footer--)

## Features ✨

- **Interactive Hero Section:** Features a type-writer effect for titles, live clock, dynamic greetings, and an embedded interactive terminal.
- **Command Palette (⌘K / Ctrl+K):** Quickly navigate sections, change themes, and access actions like downloading the resume or booking a call.
- **Dynamic Theming:** Supports dark and light modes with multiple accent color options.
- **Animated UI Elements:** Utilizes subtle animations for scrolling effects, card tilts, and button hovers.
- **Skill Radar Chart:** Visually represents proficiency across key skill areas.
- **Live GitHub Metrics:** Displays real-time follower and repository counts (with offline fallback).
- **Multiple Language Support:** Offers content in both English and Burmese (မြန်မာ).
- **Playable Snake Game:** An easter egg accessible via the terminal or command palette.
- **Scroll-Based Animations:** Elements fade and slide into view as the user scrolls.
- **Responsive Design:** Adapts seamlessly across various screen sizes.
- **Quantum Matrix Aesthetic:** Unique design elements with fractal noise and shifting matrix grids.

## Tech Stack 🛠️

- **Frontend:** React, TypeScript, Vite, Tailwind CSS, clsx, tailwind-merge, lucide-react
- **State Management:** React Context (for theme/language), `useState`, `useRef`
- **Build Tools:** Vite
- **Styling:** CSS, Tailwind CSS, Custom CSS animations (`quantum.css`, `index.css`)
- **Languages:** TypeScript, HTML, CSS, JSON
- **Other Libraries:** `vite-plugin-singlefile`, `@tailwindcss/vite`

## Installation & Requirements ⚙️

This project is a frontend-only portfolio and does not require a complex backend setup for local development. It utilizes Vite for building.

**Prerequisites:**

- **Node.js:** Version 18.x or higher is recommended.
- **npm** or **yarn** (package manager)

**Development Setup:**

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Dev-moe-kyawaung/quantum-matrix-design-portfolio-03.git
    cd quantum-matrix-design-portfolio-03
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    or
    ```bash
    yarn dev
    ```
    This will start the Vite development server, usually accessible at `http://localhost:5173` (or another port if that one is occupied).

**Build for Production:**

To create a production-ready build (a single HTML file due to `vite-plugin-singlefile`):

```bash
  npm run build
  ```
  or
  ```bash
  yarn build
  ```

This command compiles and bundles the application into optimized static assets, typically found in a `dist` folder.

## Usage & How to Use 💡

This project is a personal portfolio website designed to showcase Moe Kyaw Aung's skills, projects, and experience as a Senior Android Developer.

**Key interaction points:**

-   **Navigation:** Use the `Navbar` for site navigation (About, Tech Stack, Apps, etc.) or the `SectionDots` on the right side for quick scrolling to sections.
-   **Hero Section Terminal:** Interact with the embedded terminal by typing commands like `help`, `skills`, `apps`, `theme <name>`, `resume`, `hire`, or `snake` to explore different aspects of the portfolio.
-   **Command Palette (⌘K / Ctrl+K):** Press `⌘K` (or `Ctrl+K` on Windows/Linux) or `/` anywhere on the page to open a quick command palette for navigation and actions.
-   **Theme Customization:** Access the theme settings via the palette icon in the navbar to switch between dark/light modes and choose accent colors.
-   **Download Resume:** Click the 'Download Resume' button in the hero section or use the `resume` command in the terminal/palette.
-   **Book a Call:** Use the 'Book a Free Call' button or the `hire` command to schedule a consultation.
-   **Interactive Elements:** Hovering over cards and buttons provides visual feedback and subtle animations.

This portfolio serves as a dynamic showcase of a developer's capabilities, demonstrating technical skill through its own implementation.

## Project Structure 📁

```
quantum-matrix-design-portfolio-03/
├── public/
│   └── index.html  <-- Entry point
├── src/
│   ├── components/
│   │   ├── AIOrb.tsx
│   │   ├── About.tsx
│   │   ├── AppCollection.tsx
│   │   ├── Closing.tsx
│   │   ├── CommandPalette.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Preloader.tsx
│   │   ├── QuantumNode.tsx
│   │   ├── Roadmap.tsx
│   │   ├── SectionDots.tsx
│   │   ├── SnakeGame.tsx
│   │   ├── Terminal.tsx
│   │   ├── Vaults.tsx
│   │   └── ui.tsx       <-- Reusable UI components and hooks
│   ├── effects.tsx    <-- Animation and visual effects components
│   ├── i18n.ts        <-- Internationalization (language support)
│   ├── App.tsx        <-- Main application component
│   ├── data.ts        <-- Profile data and content configuration
│   ├── main.tsx       <-- Application entry point
│   └── index.css      <-- Global styles and Tailwind CSS imports
├── vite.config.ts     <-- Vite build configuration
├── tsconfig.json      <-- TypeScript configuration
├── package.json       <-- Project metadata and dependencies
└── README.md          <-- Project documentation
```

## Tech Stack Details 💻

-   **Frontend Framework:** React with Vite for a fast development experience.
-   **Language:** TypeScript for type safety and modern JavaScript features.
-   **Styling:** Tailwind CSS for utility-first styling, with custom CSS in `index.css` and `quantum.css` for unique effects.
-   **State Management:** Primarily React's built-in hooks (`useState`, `useRef`) and Context API for theme/language.
-   **UI Components:** `lucide-react` for icons, custom-built components for modals, command palette, and interactive elements.
-   **Animations & Effects:** Custom CSS keyframes and JavaScript-driven animations for a polished feel.
-   **Build:** Vite with `vite-plugin-singlefile` for a single-file production build.
-   **Internationalization:** Support for English and Burmese (`i18n.ts`).
-   **Dependencies:** `clsx`, `tailwind-merge` for utility class handling.

## Installation & Requirements ⚙️

This project is a frontend-only portfolio and does not require a complex backend setup for local development. It utilizes Vite for building.

**Prerequisites:**

-   **Node.js:** Version 18.x or higher is recommended.
-   **npm** or **yarn** (package manager)

**Development Setup:**

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Dev-moe-kyawaung/quantum-matrix-design-portfolio-03.git
    cd quantum-matrix-design-portfolio-03
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    or
    ```bash
    yarn dev
    ```
    This will start the Vite development server, usually accessible at `http://localhost:5173` (or another port if that one is occupied).

**Build for Production:**

To create a production-ready build (a single HTML file due to `vite-plugin-singlefile`):

```bash
  npm run build
  ```
  or
  ```bash
  yarn build
  ```

This command compiles and bundles the application into optimized static assets, typically found in a `dist` folder.

## Usage & How to Use 💡

This project is a personal portfolio website designed to showcase Moe Kyaw Aung's skills, projects, and experience as a Senior Android Developer.

**Key interaction points:**

-   **Navigation:** Use the `Navbar` for site navigation (About, Tech Stack, Apps, etc.) or the `SectionDots` on the right side for quick scrolling to sections.
-   **Hero Section Terminal:** Interact with the embedded terminal by typing commands like `help`, `skills`, `apps`, `theme <name>`, `resume`, `hire`, or `snake` to explore different aspects of the portfolio.
-   **Command Palette (⌘K / Ctrl+K):** Press `⌘K` (or `Ctrl+K` on Windows/Linux) or `/` anywhere on the page to open a quick command palette for navigation and actions.
-   **Theme Customization:** Access the theme settings via the palette icon in the navbar to switch between dark/light modes and choose accent colors.
-   **Download Resume:** Click the 'Download Resume' button in the hero section or use the `resume` command in the terminal/palette.
-   **Book a Call:** Use the 'Book a Free Call' button or the `hire` command to schedule a consultation.
-   **Interactive Elements:** Hovering over cards and buttons provides visual feedback and subtle animations.

This portfolio serves as a dynamic showcase of a developer's capabilities, demonstrating technical skill through its own implementation.

## Project Structure 📁

```
quantum-matrix-design-portfolio-03/
├── public/
│   └── index.html  <-- Entry point
├── src/
│   ├── components/
│   │   ├── AIOrb.tsx
│   │   ├── About.tsx
│   │   ├── AppCollection.tsx
│   │   ├── Closing.tsx
│   │   ├── CommandPalette.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Preloader.tsx
│   │   ├── QuantumNode.tsx
│   │   ├── Roadmap.tsx
│   │   ├── SectionDots.tsx
│   │   ├── SnakeGame.tsx
│   │   ├── Terminal.tsx
│   │   ├── Vaults.tsx
│   │   └── ui.tsx       <-- Reusable UI components and hooks
│   ├── effects.tsx    <-- Animation and visual effects components
│   ├── i18n.ts        <-- Internationalization (language support)
│   ├── App.tsx        <-- Main application component
│   ├── data.ts        <-- Profile data and content configuration
│   ├── main.tsx       <-- Application entry point
│   └── index.css      <-- Global styles and Tailwind CSS imports
├── vite.config.ts     <-- Vite build configuration
├── tsconfig.json      <-- TypeScript configuration
├── package.json       <-- Project metadata and dependencies
└── README.md          <-- Project documentation
```

## Contributing -- <0xF0><0x9F><0xAA><0xA8>

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests and documentation as appropriate.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License ⚖️

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details. (Note: No LICENSE file was found in the repository).

## Important Links 🔗

-   **Live Demo:** The portfolio is directly accessible via the GitHub Pages URL (if deployed and configured).
-   **Author Profile:** [Moe Kyaw Aung](https://github.com/Dev-moe-kyawaung/)

## Footer ☕

---

© 2026 Moe Kyaw Aung · မိုးကျော်အောင်. All rights reserved.

Built with ❤️ in Tachileik & Bangkok.

[quantum-matrix-design-portfolio-03](https://github.com/Dev-moe-kyawaung/quantum-matrix-design-portfolio-03)

[![Stars](https://img.shields.io/github/stars/Dev-moe-kyawaung/quantum-matrix-design-portfolio-03?style=social)](https://github.com/Dev-moe-kyawaung/quantum-matrix-design-portfolio-03/stargazers)
[![Forks](https://img.shields.io/github/forks/Dev-moe-kyawaung/quantum-matrix-design-portfolio-03?style=social)](https://github.com/Dev-moe-kyawaung/quantum-matrix-design-portfolio-03/forks)

Questions? Suggestions? [Open an issue](https://github.com/Dev-moe-kyawaung/quantum-matrix-design-portfolio-03/issues) or [contact the author](mailto:moekyawaung@programmer.net).


---
**<p align="center">Generated by [ReadmeCodeGen](https://www.readmecodegen.com/)</p>**