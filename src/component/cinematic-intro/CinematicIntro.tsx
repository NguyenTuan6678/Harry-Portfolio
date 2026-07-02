"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { translations } from "../portfolioPoster/translations";
import {
  StardewTitleLogo,
  Junimo,
  StardewChicken,
  StardewHouse,
  StardewCat,
} from "../portfolioPoster/StardewSprites";
import FallingLeaves from "../portfolioPoster/FallingLeaves";

type CinematicIntroProps = {
  onComplete?: () => void;
  lang: "vi" | "en";
};

// SVG cloud paths
const CloudSVG = ({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 64 24"
    width="180"
    height="70"
    fill="#ffffff"
    opacity="0.3"
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Pixelated cloud shape */}
    <path d="M16,8 H48 V10 H52 V12 H56 V16 H52 V18 H12 V16 H8 V12 H12 V10 H16 Z M24,4 H40 V8 H24 Z" />
  </svg>
);

// Stardew Static cloud cluster (Mimicking the fluffy layered clouds in the reference image)
const StaticCloudCluster = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 120 60"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Shadow layer (Pastel pink/purple sky shading) */}
    <path
      d="M20,25 H100 V40 H110 V50 H10 V40 H20 Z M30,15 H90 V25 H30 Z M45,5 H75 V15 H45 Z"
      fill="#c4afb2"
      opacity="0.6"
    />
    {/* Cloud Body (Light milk cream) */}
    <path
      d="M15,20 H95 V30 H105 V40 H5 V30 H15 Z M25,10 H85 V20 H25 Z M40,2 H70 V10 H40 Z"
      fill="#e8ece9"
    />
  </svg>
);

// Pixel Star
const PixelStar = ({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 8 8"
    width="8"
    height="8"
    fill="#ffffff"
    className={`${className} animate-pulse`}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4,0 L5,3 L8,4 L5,5 L4,8 L3,5 L0,4 L3,3 Z" />
  </svg>
);

// Music pixel icon on top left
const PixelMusicIcon = () => (
  <div className="absolute left-6 top-6 z-25 flex items-center justify-center p-2 bg-[#f0e5dd]/30 border-2 border-[#8c746a] outline-1 outline-[#4a3a35] shadow-[2px_2.5px_0px_rgba(0,0,0,0.15)] hover:scale-105 transition-all cursor-pointer">
    <svg viewBox="0 0 16 16" width="16" height="16" fill="#4a3a35">
      <path d="M4,10 H6 V14 H4 Z M10,8 H12 V12 H10 Z M6,10 L12,8 V3 L6,5 Z" />
    </svg>
  </div>
);

// Top Right Stardew button (Setting icon style)
const PixelRightButton = () => (
  <div className="absolute right-6 top-6 z-25 flex items-center justify-center p-2 bg-[#f0e5dd]/30 border-2 border-[#8c746a] outline-1 outline-[#4a3a35] shadow-[2px_2.5px_0px_rgba(0,0,0,0.15)] hover:scale-105 transition-all cursor-pointer">
    <svg viewBox="0 0 16 16" width="16" height="16" fill="#4a3a35">
      <rect
        x="3"
        y="3"
        width="10"
        height="10"
        stroke="#4a3a35"
        strokeWidth="1.5"
        fill="transparent"
      />
      <rect x="5" y="5" width="6" height="6" fill="#4a3a35" />
    </svg>
  </div>
);

export default function CinematicIntro({
  onComplete,
  lang,
}: CinematicIntroProps) {
  const [progress, setProgress] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const t = translations[lang];

  // Simulated loading logs formatted to fit Stardew theme
  const [logs, setLogs] = useState<string[]>([]);
  const progressRef = useRef(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    progressRef.current = 0;

    const logMessages = [
      { prg: 10, text: t.introLogSeeds },
      { prg: 22, text: t.introLogSoil },
      { prg: 40, text: t.introLogDb },
      { prg: 58, text: t.introLogUi },
      { prg: 75, text: t.introLogAssets },
      { prg: 90, text: t.introLogJunimo },
      { prg: 98, text: t.introLogReady },
    ];

    const interval = setInterval(() => {
      const prev = progressRef.current;
      const increment = Math.floor(Math.random() * 5 + 3);
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
    }, 80);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, [lang]);

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
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center stardew-sky-sunset text-charcoal select-none font-pixel overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Falling Leaves Effect */}
          <FallingLeaves />

          {/* CRT Scanline Overlay filter */}
          <div className="absolute inset-0 pointer-events-none z-50 crt-scanlines opacity-45" />

          {/* Floating Clouds Background */}
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            {/* Stars mimicking the night sky in the reference */}
            <PixelStar className="absolute top-[8%] left-[12%]" />
            <PixelStar
              className="absolute top-[18%] left-[24%]"
              style={{ animationDelay: "1s" }}
            />
            <PixelStar
              className="absolute top-[5%] right-[28%]"
              style={{ animationDelay: "2.5s" }}
            />
            <PixelStar
              className="absolute top-[15%] right-[38%]"
              style={{ animationDelay: "1.5s" }}
            />

            {/* Static clouds mimicking the reference image corner patches */}
            <StaticCloudCluster className="absolute top-0 right-0 w-[240px] md:w-[360px] opacity-80" />
            <StaticCloudCluster className="absolute top-10 left-0 w-[160px] md:w-[240px] opacity-65 scale-x-[-1]" />
            <StaticCloudCluster className="absolute bottom-[20%] right-[-50px] w-[180px] md:w-[280px] opacity-50" />

            {/* Floating Clouds */}
            <CloudSVG className="absolute top-20 cloud-anim-slow" />
            <CloudSVG
              className="absolute top-44 cloud-anim-fast opacity-40"
              style={{ animationDelay: "-15s" }}
            />
            <CloudSVG
              className="absolute top-32 cloud-anim-slow opacity-30"
              style={{ animationDelay: "-30s" }}
            />
          </div>

          {/* Top Corner Interactive HUD icons (Music on left, settings-like on right) */}
          <PixelMusicIcon />
          <PixelRightButton />

          <div className="flex flex-col items-center justify-center w-full max-w-xl px-6 text-center z-20">
            {/* House Logo Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-2"
            >
              <StardewHouse size={110} />
            </motion.div>

            {/* Wooden Farming Title Logo */}
            <StardewTitleLogo lang={lang} />

            {/* Loader Dialogue panel (Wooden panel style) */}
            <div className="w-full h-40 mt-8 panel-stardew p-4 text-left font-mono text-[12px] md:text-[13px] text-charcoal overflow-y-auto leading-relaxed shadow-lg">
              <div className="stardew-corners absolute inset-0 pointer-events-none" />
              {logs.map((log, i) => (
                <div key={i} className="font-mono text-charcoal font-semibold">
                  {log}
                </div>
              ))}
              {progress < 100 && (
                <div className="flex items-center gap-1 text-terracotta font-mono font-bold">
                  <span className="animate-pulse">
                    &gt;{" "}
                    {lang === "vi" ? "ĐANG CANH TÁC..." : "GROWING CROPS..."}{" "}
                    {progress}%
                  </span>
                </div>
              )}
            </div>

            {/* Custom Energy Bar as Progress Bar */}
            <div className="w-full bg-[#3a2213] h-6 border-4 border-charcoal p-0.5 mt-5 rounded shadow-lg relative flex items-center">
              <div
                className="h-full bg-gradient-to-r from-sage to-[#a7f070] transition-all duration-100 ease-out rounded-sm"
                style={{ width: `${progress}%` }}
              />
              <span className="absolute inset-0 flex items-center justify-center font-retro text-[14px] text-[#faf0d2] font-black tracking-wider">
                {lang === "vi" ? "ĐỘ TƯƠI TỐT:" : "FERTILITY:"} {progress}%
              </span>
            </div>

            {/* Interactive START Button (Stardew Wooden Board style) */}
            <div className="h-20 mt-6 flex items-center justify-center font-pixel">
              {isReady && !hasStarted && (
                <motion.button
                  onClick={handleStartGame}
                  className="px-8 py-3 stardew-btn text-base uppercase select-none cursor-pointer"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: [0.95, 1.03, 0.95] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  {lang === "vi" ? "[ VÀO NÔNG TRẠI ]" : "[ ENTER FARM ]"}
                </motion.button>
              )}
              {hasStarted && (
                <span className="text-terracotta font-retro text-xl font-bold tracking-widest animate-ping">
                  {lang === "vi"
                    ? "ĐANG VÀO PHÂN KHU..."
                    : "ENTERING FARM SECTION..."}
                </span>
              )}
            </div>
          </div>

          {/* Bottom Grass Ground strip with wandering chicken */}
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-sage/40 border-t-4 border-wood-dark z-25 flex items-end px-12 overflow-visible">
            <motion.div
              className="absolute bottom-2"
              animate={{
                x: ["-10vw", "110vw"],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <StardewChicken size={34} type="white" />
            </motion.div>

            <motion.div
              className="absolute bottom-2"
              animate={{
                x: ["-20vw", "120vw"],
              }}
              transition={{
                duration: 27,
                repeat: Infinity,
                ease: "linear",
                delay: 3,
              }}
            >
              <StardewCat size={32} />
            </motion.div>

            <motion.div
              className="absolute bottom-2"
              animate={{
                x: ["110vw", "-10vw"],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <StardewChicken size={34} type="brown" className="scale-x-[-1]" />
            </motion.div>
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
