"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { translations } from "../portfolioPoster/translations";

type CinematicIntroProps = {
  onComplete?: () => void;
  lang: "vi" | "en";
};

export default function CinematicIntro({ onComplete, lang }: CinematicIntroProps) {
  const [progress, setProgress] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const t = translations[lang];

  // Simulated loading logs
  const [logs, setLogs] = useState<string[]>([]);
  const progressRef = useRef(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    progressRef.current = 0;

    const logMessages = [
      { prg: 8, text: "> SYSTEM: BOOTING HARRY_ARCADE v2.6..." },
      { prg: 20, text: "> CPU: EMULATION CORE DETECTED... SUCCESS!" },
      { prg: 35, text: "> RAM: 640KB MEMORY INITIALIZED... OK!" },
      { prg: 50, text: "> VRAM: MOUNTING SWEETIE-16 PALETTE... SUCCESS!" },
      { prg: 65, text: "> LEVEL: LOADING STAGES 01-05 ASSETS... OK!" },
      { prg: 80, text: "> AUDIO: SYNTHESIZING 8-BIT BGM TRACKS... ACTIVE!" },
      { prg: 90, text: "> PROFILE: LOADING HARRY STATUS ATTRIBUTES... OK!" },
      { prg: 98, text: "> BOOT COMPLETED! READY TO LOAD." },
    ];

    const interval = setInterval(() => {
      const prev = progressRef.current;
      const increment = Math.floor(Math.random() * 4 + 2);
      const next = Math.min(prev + increment, 100);
      
      progressRef.current = next;
      setProgress(next);

      // Add logs dynamically as progress matches thresholds
      const added = logMessages
        .filter((m) => m.prg > prev && m.prg <= next)
        .map((m) => m.text);
      
      if (added.length > 0) {
        setLogs((prevLogs) => [...prevLogs, ...added]);
      }

      if (next >= 100) {
        clearInterval(interval);
        setIsReady(true);
      }
    }, 70);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  const handleStartGame = () => {
    setHasStarted(true);
    // Trigger bright white flash and close the intro
    setTimeout(() => {
      setShowIntro(false);
      document.body.style.overflow = "";
      onComplete?.();
    }, 600);
  };

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.section
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#ffebd6] text-[#5e3f43] select-none font-pixel overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.15 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* CRT Scanline Overlay filter */}
          <div className="absolute inset-0 pointer-events-none z-50 crt-scanlines opacity-85" />
          
          {/* Subtle CRT Flicker */}
          <div className="absolute inset-0 pointer-events-none z-45 bg-[#ffa29e]/[0.02] animate-pulse" />

          {/* Top BIOS Metadata - Symmetrical Left/Right */}
          <div className="absolute left-6 top-6 font-retro text-xs tracking-widest text-[#3aa9bc] md:left-12 md:top-12">
            <p>HARRYSOFT BIOS SYSTEM v2.6</p>
            <p>ROM SHIELD VERSION 4.1</p>
          </div>
          <div className="absolute right-6 top-6 text-right font-retro text-xs tracking-widest text-[#3aa9bc] md:right-12 md:top-12">
            <p>RAM SYSTEM: 640KB</p>
            <p>PALETTE: RETRO POP</p>
          </div>

          <div className="flex flex-col items-center justify-center w-full max-w-xl px-6 text-center z-20">
            {/* Spinning Coin / Shield Indicator */}
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
              className="mb-6 w-16 h-16 bg-[#f06275] border-4 border-[#5e3f43] flex items-center justify-center shadow-retro-pixel relative"
            >
              <span className="text-[#ffd877] font-retro text-4xl font-extrabold select-none">H</span>
            </motion.div>

            {/* Game Title */}
            <h1 className="font-pixel text-4xl font-extrabold uppercase tracking-wide text-[#f06275] drop-shadow-[4px_4px_0px_#5e3f43] md:text-5xl">
              HARRY ARCADE
            </h1>
            <p className="mt-2 text-xs font-pixel font-bold uppercase tracking-[0.2em] text-[#3aa9bc] animate-pulse">
              [ STAGE LEVEL SELECT PORTFOLIO ]
            </p>

            {/* Boot System Logs Terminal Console */}
            <div className="w-full h-44 mt-8 bg-[#fbf0e3] border-2 border-[#5e3f43] rounded-sm p-4 text-left font-mono text-[12px] md:text-[14px] text-[#5e3f43] overflow-y-auto leading-relaxed shadow-inner">
              {logs.map((log, i) => (
                <div key={i} className="font-mono">
                  {log}
                </div>
              ))}
              {progress < 100 && (
                <div className="flex items-center gap-1 text-[#f06275] font-mono">
                  <span className="animate-pulse">&gt; LOADING STAGE ASSETS... {progress}%</span>
                </div>
              )}
            </div>

            {/* Custom Pixel Progress Bar */}
            <div className="w-full bg-[#fbf0e3] h-6 border-2 border-[#5e3f43] p-1 mt-6 rounded shadow-retro-pixel-sm relative">
              <div
                className="h-full bg-gradient-to-r from-[#f06275] to-[#ffd877] transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              />
              <span className="absolute inset-0 flex items-center justify-center font-retro text-xs text-[#5e3f43] font-bold drop-shadow">
                {progress}%
              </span>
            </div>

            {/* Interactive [ PRESS START ] Blinking arcade Button */}
            <div className="h-20 mt-6 flex items-center justify-center font-pixel">
              {isReady && !hasStarted && (
                <motion.button
                  onClick={handleStartGame}
                  className="px-8 py-3 border-4 border-[#5e3f43] bg-[#f06275] text-[#ffebd6] font-pixel text-lg font-bold uppercase shadow-retro-pixel hover:bg-[#f06275]/90 active:scale-95 cursor-pointer select-none"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: [1, 1.05, 1], opacity: 1 }}
                  transition={{ repeat: Infinity, duration: 1.2, repeatType: "reverse" }}
                >
                  [ {lang === "vi" ? "BẮT ĐẦU CHƠI" : "PRESS START"} ]
                </motion.button>
              )}
              {hasStarted && (
                <span className="text-[#f06275] font-retro text-xl font-bold tracking-widest animate-ping">
                  BOOTING STAGE 01...
                </span>
              )}
            </div>
          </div>

          {/* Strobe Flash white (CRT Flash transition on start) */}
          {hasStarted && (
            <motion.div
              className="absolute inset-0 bg-white z-50 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.55 }}
            />
          )}
        </motion.section>
      )}
    </AnimatePresence>
  );
}
