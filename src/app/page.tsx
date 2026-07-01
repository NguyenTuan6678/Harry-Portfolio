"use client";
import CinematicIntro from "@/component/cinematic-intro/CinematicIntro";
import PortfolioPoster from "@/component/portfolioPoster/PortfolioPoster";
import ThemeSwitcher from "@/component/portfolioPoster/ThemeSwitcher";
import LanguageSwitcher from "@/component/portfolioPoster/LanguageSwitcher";
import { useState, useEffect } from "react";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const [lang, setLang] = useState<"vi" | "en">("en");
  const [errorLog, setErrorLog] = useState<string | null>(null);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setErrorLog(`${event.message} at ${event.filename}:${event.lineno}:${event.colno}`);
    };
    const handleRejection = (event: PromiseRejectionEvent) => {
      setErrorLog(`Unhandled Promise: ${String(event.reason?.message || event.reason)}`);
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);

  const handleIntroComplete = () => {
    document.documentElement.classList.remove("dark");
    setIntroDone(true);
  };

  return (
    <main className={`bg-sand text-charcoal dark:bg-charcoal dark:text-sand min-h-screen transition-colors duration-300 lang-${lang}`}>
      {errorLog && (
        <div className="fixed top-0 left-0 right-0 z-[10000] bg-red-600 text-white p-4 font-mono text-[11px] break-all shadow-lg border-b-2 border-black">
          ⚠️ JS ERROR: {errorLog}
          <button 
            onClick={() => setErrorLog(null)} 
            className="absolute right-2 top-2 bg-black/30 px-2 py-0.5 rounded text-[10px] cursor-pointer"
          >
            Close
          </button>
        </div>
      )}

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
