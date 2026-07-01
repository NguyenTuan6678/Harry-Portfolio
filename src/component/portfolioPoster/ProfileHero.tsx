"use client";

import Image from "next/image";
import { motion } from "motion/react";
import CurvedLogo from "./CurvedLogo";

export default function ProfileHero() {
  return (
    <div className="relative flex min-h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden px-6">
      <CurvedLogo />

      <motion.div
        className="relative z-10 -mt-5 w-full max-w-[320px] h-[380px] md:max-w-[480px] md:h-[540px] lg:max-w-[550px] lg:h-[620px]"
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
          sizes="(min-width: 1024px) 550px, (min-width: 768px) 480px, 320px"
          className="object-contain pointer-events-none"
        />
      </motion.div>
    </div>
  );
}

