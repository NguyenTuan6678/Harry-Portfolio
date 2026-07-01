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
      {/* Floating Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 z-[90] flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white/70 text-lg shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:bg-white dark:border-white/10 dark:bg-zinc-900/70 dark:hover:bg-zinc-900"
        aria-label="Toggle cinematic theme"
        title="Đổi giao diện điện ảnh"
      >
        <motion.span
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {isDark ? "☀️" : "🌙"}
        </motion.span>
      </button>

      {/* Full-Screen Camera Shutter Transition */}
      <AnimatePresence>
        {isAnimating && (
          <div className="fixed inset-0 z-[1000] pointer-events-none flex flex-col justify-between">
            {/* Top Shutter Panel */}
            <motion.div
              className="w-full bg-[#111111] dark:bg-[#faf8f1]"
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
            {/* Bottom Shutter Panel */}
            <motion.div
              className="w-full bg-[#111111] dark:bg-[#faf8f1]"
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
