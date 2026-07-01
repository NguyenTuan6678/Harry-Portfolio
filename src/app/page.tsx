"use client";
import CinematicIntro from "@/component/cinematic-intro/CinematicIntro";
import PortfolioPoster from "@/component/portfolioPoster/PortfolioPoster";
import ThemeSwitcher from "@/component/portfolioPoster/ThemeSwitcher";
import LanguageSwitcher from "@/component/portfolioPoster/LanguageSwitcher";
import { useState } from "react";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const [lang, setLang] = useState<"vi" | "en">("en");

  const handleIntroComplete = () => {
    document.documentElement.classList.remove("dark");
    setIntroDone(true);
  };

  return (
    <main className={`bg-sand text-charcoal dark:bg-charcoal dark:text-sand min-h-screen transition-colors duration-300 lang-${lang}`}>
      <LanguageSwitcher lang={lang} onChange={setLang} />
      
      <CinematicIntro onComplete={handleIntroComplete} lang="en" />

      {introDone && (
        <>
          <PortfolioPoster lang={lang} />
          <ThemeSwitcher />
        </>
      )}
    </main>
  );
}
