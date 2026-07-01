# 🎮 Harry Portfolio - Retro Game Style Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Motion](https://img.shields.io/badge/Motion-Framer_Motion-FF69B4?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)

A unique developer portfolio web application designed in a **Retro Game (8-bit / Pixel Art)** aesthetic, featuring simulated classic game boot screens, interactive command-line interfaces, and game-inspired components.

---

## ✨ Key Features

- 🎬 **Cinematic Intro**: Recreates a nostalgic console booting experience (retro BIOS boot screen) complete with a progress bar, booting logs, and strobe flash transitions on start.
- 📟 **Interactive Developer Console**: A fully functional virtual CLI terminal that allows users to interact via command lines. Supported commands:
  - `help` - Lists all available commands.
  - `about` - Displays background info.
  - `projects` - Lists levels/projects.
  - `skills` - Displays programming skills with level points.
  - `clear` - Clears the console.
  - `neofetch` - Shows retro system hardware information.
- 🪪 **Lanyard Card**: An 8-bit style profile card resembling a retro RPG character sheet or game ID card.
- 📂 **Project Showcase & Stage Select**: Displays projects as retro game level posters. Includes dynamic entrance animations that pop in with a staggered CRT monitor flicker. Clicking a level opens a detailed RPG-style Modal.
- 🌐 **Multilingual Support**: Supports both English and Vietnamese, pre-integrated throughout the portfolio's content.
- 🎨 **Theme Switcher**: Offers customization between multiple classic retro color palettes (Retro Sand, Charcoal, Terracotta, Deep Wine, Gold, etc.).
- 📱 **Responsive Design**: Optimized for a seamless experience across desktop, tablet, and mobile layouts.

---

## 🛠️ Built With

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [PostCSS](https://postcss.org/)
- **Animations**: [Motion (Framer Motion 12)](https://motion.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Typography**: Google Fonts (`Pixelify Sans`, `VT323`) & JetBrains Mono Nerd Font for terminal and programming icons.

---

## 📂 Core Folder Structure

```text
harryportfolio/
├── .vscode/               # IDE configuration (ignores Tailwind v4 custom linting rules)
├── public/                # Static assets (avatar, images, icons)
├── src/
│   ├── app/               # Next.js App Router (Layouts, Pages, Globals)
│   │   ├── globals.css    # Tailwind v4 theme, fonts, custom utility borders
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── component/         # Reusable UI components
│       ├── cinematic-intro/
│       │   └── CinematicIntro.tsx    # Cinematic game booting overlay
│       └── portfolioPoster/
│           ├── CurvedLogo.tsx        # Curved pixel-art retro game logo
│           ├── DeveloperConsole.tsx  # Interactive terminal sandbox
│           ├── PortfolioPoster.tsx   # Dashboard poster layout container
│           ├── ProjectGraphic.tsx    # Custom project level graphics
│           ├── ProjectModal.tsx      # Level detail dialog box
│           ├── LanyardCard.tsx       # RPG-style character ID card
│           ├── data.ts               # Core project metadata and assets info
│           └── translations.ts       # English & Vietnamese translation database
```

---

## 🚀 Installation & Local Development

### System Requirements
- **Node.js**: Version 18.x or higher
- **npm**, **yarn**, or **pnpm** package manager

### Steps to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/NguyenTuan6678/Harry-Portfolio.git
   cd Harry-Portfolio/harryportfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   *Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.*

4. **Build for production**:
   ```bash
   npm run build
   # Start the production server
   npm start
   ```

---

## 📝 Commit Guidelines

The project strictly follows the **Conventional Commits** specification:
- `feat`: A new feature (e.g., adding a new component).
- `fix`: A bug fix.
- `style`: Changes that do not affect the meaning of the code (CSS, spacing, themes).
- `refactor`: A code change that neither fixes a bug nor adds a feature (e.g., removing unused files).
- `chore`: Project configuration adjustments, dependencies updates, IDE files.

---

## 📄 License

Developed by **Harry Nguyen**.
Please do not copy or replicate the code without proper attribution or consent.
