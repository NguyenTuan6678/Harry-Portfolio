"use client";

import Image from "next/image";
import { motion } from "motion/react";
import CurvedLogo from "./CurvedLogo";

export default function ProfileHero() {
  return (
    <div className="relative flex min-h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden px-6">
      <CurvedLogo />

      <motion.p 
        className="absolute left-1/2 top-[45%] z-20 -translate-x-1/2 text-center text-xl font-bold uppercase tracking-[0.2em] text-gold drop-shadow-[2px_2px_0px_#744146] font-retro md:text-2xl"
        initial={{ opacity: 0, scale: 0.5, y: -20, x: "-50%" }}
        animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
        transition={{ type: "spring", stiffness: 220, damping: 10, delay: 0.85 }}
      >
        Harry Nguyen
      </motion.p>

      <motion.div 
        className="relative z-10 -mt-5 h-105 w-[320px] md:h-140 md:w-107.5 lg:h-155 lg:w-125"
        initial={{ opacity: 0, y: 150, scale: 0.85 }}
        animate={{ 
          opacity: [0, 1, 0.4, 1, 0.7, 1], // CRT flicker
          y: 0, 
          scale: 1 
        }}
        transition={{ 
          opacity: { duration: 0.4, times: [0, 0.15, 0.3, 0.45, 0.6, 1], delay: 0.35 },
          y: { type: "spring", stiffness: 120, damping: 14, delay: 0.35 },
          scale: { type: "spring", stiffness: 120, damping: 14, delay: 0.35 }
        }}
      >
        <Image
          src="/animeavatar.png"
          alt="Harry avatar"
          fill
          priority
          sizes="(min-width: 1024px) 500px, (min-width: 768px) 430px, 320px"
          className="object-contain pointer-events-none"
        />
      </motion.div>
    </div>
  );
}

