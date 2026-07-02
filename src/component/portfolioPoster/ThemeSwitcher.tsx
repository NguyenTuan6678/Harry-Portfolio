"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Initialize theme from document class
  useEffect(() => {
    const isDarkClass = document.documentElement.classList.contains("dark");
    setIsDark(isDarkClass);
  }, []);

  const toggleTheme = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Wait until the screen is fully covered by the shutter (midpoint of animation)
    setTimeout(() => {
      const nextDark = !isDark;
      setIsDark(nextDark);
      
      if (nextDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, 450); // matches the duration of the closing transition

    // End animation after opening panels are done
    setTimeout(() => {
      setIsAnimating(false);
    }, 900);
  };

  return (
    <>
      {/* Floating Toggle Button (Stardew Wood Circle style) */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 z-[90] flex h-12 w-12 cursor-pointer items-center justify-center border-4 border-[#5c3e29] outline-2 outline-[#2d231e] bg-[#cfb088] text-lg shadow-[3px_3px_0px_rgba(0,0,0,0.15)] hover:scale-105 hover:bg-[#dfb784] active:scale-95 transition-all text-[#2d231e]"
        aria-label="Toggle cinematic theme"
        title="Đổi giao diện nông trại"
      >
        <motion.span
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="font-pixel text-[17px] font-bold"
        >
          {isDark ? "☀️" : "🌙"}
        </motion.span>
      </button>

      {/* Full-Screen Camera Shutter Transition (Stardew Style Wooden sliding gates) */}
      <AnimatePresence>
        {isAnimating && (
          <div className="fixed inset-0 z-[1000] pointer-events-none flex flex-col justify-between">
            {/* Top Shutter Panel (Wooden color) */}
            <motion.div
              className="w-full bg-[#5c3e29] border-b-8 border-[#2d231e]"
              style={{ height: "50vh" }}
              initial={{ y: "-100%" }}
              animate={{
                y: ["-100%", "0%", "0%", "-100%"],
              }}
              transition={{
                duration: 0.9,
                times: [0, 0.45, 0.55, 1],
                ease: [0.76, 0, 0.24, 1],
              }}
            />
            {/* Bottom Shutter Panel (Wooden color) */}
            <motion.div
              className="w-full bg-[#5c3e29] border-t-8 border-[#2d231e]"
              style={{ height: "50vh" }}
              initial={{ y: "100%" }}
              animate={{
                y: ["100%", "0%", "0%", "100%"],
              }}
              transition={{
                duration: 0.9,
                times: [0, 0.45, 0.55, 1],
                ease: [0.76, 0, 0.24, 1],
              }}
            />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
