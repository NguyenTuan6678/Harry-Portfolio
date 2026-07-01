"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useRef } from "react";
import { translations } from "./translations";

export default function LanyardCard({ lang }: { lang: "vi" | "en" }) {
  const t = translations[lang];
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for cursor position relative to card center
  const rotateXVal = useMotionValue(0);
  const rotateYVal = useMotionValue(0);

  // Smooth springs for rotation
  const rotateX = useSpring(rotateXVal, { stiffness: 100, damping: 20 });
  const rotateY = useSpring(rotateYVal, { stiffness: 100, damping: 20 });

  // Glare effect values
  const glareX = useMotionValue(0);
  const glareY = useMotionValue(0);
  const glareOpacityVal = useMotionValue(0);
  const glareOpacity = useSpring(glareOpacityVal, { stiffness: 150, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Relative coordinates within the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Center offset normalized (-1 to 1)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const normalizedX = (x - centerX) / centerX;
    const normalizedY = (y - centerY) / centerY;
    
    // Max tilt angles
    const maxTilt = 15;
    rotateXVal.set(-normalizedY * maxTilt);
    rotateYVal.set(normalizedX * maxTilt);

    // Glare coordinates
    glareX.set(x);
    glareY.set(y);
    glareOpacityVal.set(0.6); // slight opacity for holographic shine
  };

  const handleMouseLeave = () => {
    rotateXVal.set(0);
    rotateYVal.set(0);
    glareOpacityVal.set(0);
  };

  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]) => `radial-gradient(circle 180px at ${gx}px ${gy}px, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 80%)`
  );

  return (
    <>
      {/* Desktop Card (with 3D tilt, glare & hanger string) */}
      <div className="relative hidden min-h-[550px] md:block [perspective:1000px]">
        {/* Lanyard hanger ring and string background */}
        <div className="absolute left-[165px] top-0 h-40 w-10 rotate-[-15deg] rounded-full border-[10px] border-[#e8e8e8] dark:border-[#53464C]" />

        <motion.div
          ref={cardRef}
          className="absolute left-0 top-24 w-[365px] rotate-[-10deg] cursor-pointer [transform-style:preserve-3d]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1000,
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative w-full h-[510px] overflow-hidden rounded bg-[#8B827F] dark:bg-[#53464C] p-5 flex flex-col items-center justify-between border-retro-thick border-charcoal dark:border-sand shadow-retro-pixel [transform:translateZ(10px)] select-none">
            
            {/* Cartridge top ridge & grip notch */}
            <div className="w-full flex items-center justify-between px-1 mb-3">
              <div className="flex gap-2">
                <div className="w-2.5 h-5 bg-black/20 dark:bg-black/35 rounded-sm" />
                <div className="w-2.5 h-5 bg-black/20 dark:bg-black/35 rounded-sm" />
                <div className="w-2.5 h-5 bg-black/20 dark:bg-black/35 rounded-sm" />
              </div>
              <span className="text-[14px] font-retro uppercase tracking-widest text-black/50 dark:text-sand/50 font-bold">
                {lang === "vi" ? "BĂNG TRÒ CHƠI" : "GAME CARTRIDGE"}
              </span>
              <div className="w-6 h-4 rounded bg-black/30 dark:bg-black/40" />
            </div>

            {/* Indented Label Box */}
            <div className="w-full flex-1 flex flex-col items-center justify-between bg-[#faf8f1] dark:bg-[#42383F] p-5 border-2 border-retro-thick border-charcoal dark:border-sand rounded-sm">
              
              {/* Label Header */}
              <div className="w-full flex items-center justify-between border-b-2 border-charcoal/15 dark:border-sand/15 pb-2 text-[12px] uppercase font-retro tracking-wider text-terracotta font-bold">
                <span>{t.introRoleTitle}</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold animate-pulse text-[12px]">
                  ● {lang === "vi" ? "Trực tuyến" : "Live"}
                </span>
              </div>

              {/* Avatar Photo (Square sticker layout) */}
              <div className="relative h-48 w-48 overflow-hidden border-2 border-retro-thick border-charcoal dark:border-sand shadow-retro-pixel-sm my-3 bg-charcoal/5">
                <Image
                  src="/animeavatar.png"
                  alt="Harry avatar"
                  fill
                  priority
                  sizes="192px"
                  className="object-cover pointer-events-none"
                />
              </div>

              {/* Title / Version */}
              <div className="text-center w-full">
                <h3 className="text-xl font-retro font-black uppercase tracking-wider text-black dark:text-sand">
                  HARRY NGUYEN
                </h3>
                
                {/* Quality Seal logo */}
                <div className="mt-2 flex items-center justify-center gap-2">
                  <span className="inline-block text-[11px] bg-gold text-charcoal font-retro font-bold px-3 py-0.5 rounded-sm shadow-retro-pixel-sm border border-charcoal">
                    ★ HARRY SEAL ★
                  </span>
                  <span className="text-[10px] font-mono text-black/45 dark:text-white/45">
                    REV-01
                  </span>
                </div>
              </div>
            </div>

            {/* Exposed Game cartridge contact pins at the bottom */}
            <div className="w-full flex flex-col items-center mt-4 pt-1 border-t border-black/10">
              <div className="w-full bg-slate-900 h-6 flex justify-around items-end px-4 rounded-b-sm border border-black/25">
                <div className="h-5 w-2 bg-yellow-500/80 rounded-t-sm" />
                <div className="h-5 w-2 bg-yellow-500/80 rounded-t-sm" />
                <div className="h-5 w-2 bg-yellow-500/80 rounded-t-sm" />
                <div className="h-5 w-2 bg-yellow-500/80 rounded-t-sm" />
                <div className="h-5 w-2 bg-yellow-500/80 rounded-t-sm" />
                <div className="h-5 w-2 bg-yellow-500/80 rounded-t-sm" />
                <div className="h-5 w-2 bg-yellow-500/80 rounded-t-sm" />
                <div className="h-5 w-2 bg-yellow-500/80 rounded-t-sm" />
                <div className="h-5 w-2 bg-yellow-500/80 rounded-t-sm" />
                <div className="h-5 w-2 bg-yellow-500/80 rounded-t-sm" />
                <div className="h-5 w-2 bg-yellow-500/80 rounded-t-sm" />
                <div className="h-5 w-2 bg-yellow-500/80 rounded-t-sm" />
              </div>
            </div>

            {/* Interactive glare layer */}
            <motion.div
              className="pointer-events-none absolute inset-0 z-10 mix-blend-overlay"
              style={{
                background: glareBackground,
                opacity: glareOpacity,
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Mobile Card (Static cartridge layout with desktop hover notice) */}
      <div className="block md:hidden w-full max-w-[340px] mx-auto font-pixel">
        <div className="relative w-full h-[510px] overflow-hidden rounded bg-[#8B827F] dark:bg-[#53464C] p-5 flex flex-col items-center justify-between border-retro-thick border-charcoal dark:border-sand shadow-retro-pixel select-none">
          
          {/* Cartridge top ridge & grip notch */}
          <div className="w-full flex items-center justify-between px-1 mb-3">
            <div className="flex gap-2">
              <div className="w-2.5 h-5 bg-black/20 dark:bg-black/35 rounded-sm" />
              <div className="w-2.5 h-5 bg-black/20 dark:bg-black/35 rounded-sm" />
              <div className="w-2.5 h-5 bg-black/20 dark:bg-black/35 rounded-sm" />
            </div>
            <span className="text-[14px] font-retro uppercase tracking-widest text-black/50 dark:text-sand/50 font-bold">
              {lang === "vi" ? "BĂNG TRÒ CHƠI" : "GAME CARTRIDGE"}
            </span>
            <div className="w-6 h-4 rounded bg-black/30 dark:bg-black/40" />
          </div>

          {/* Indented Label Box */}
          <div className="w-full flex-1 flex flex-col items-center justify-between bg-[#faf8f1] dark:bg-[#42383F] p-5 border-2 border-retro-thick border-charcoal dark:border-sand rounded-sm">
            
            {/* Label Header */}
            <div className="w-full flex items-center justify-between border-b-2 border-charcoal/15 dark:border-sand/15 pb-2 text-[12px] uppercase font-retro tracking-wider text-terracotta font-bold">
              <span>{t.introRoleTitle}</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold animate-pulse text-[12px]">
                ● {lang === "vi" ? "Trực tuyến" : "Live"}
              </span>
            </div>

            {/* Avatar Photo (Square sticker layout) */}
            <div className="relative h-48 w-48 overflow-hidden border-2 border-retro-thick border-charcoal dark:border-sand shadow-retro-pixel-sm my-3 bg-charcoal/5">
              <Image
                src="/animeavatar.png"
                alt="Harry avatar"
                fill
                priority
                sizes="192px"
                className="object-cover pointer-events-none"
              />
            </div>

            {/* Title / Version */}
            <div className="text-center w-full">
              <h3 className="text-xl font-retro font-black uppercase tracking-wider text-black dark:text-sand">
                HARRY NGUYEN
              </h3>
              
              {/* Quality Seal logo */}
              <div className="mt-2 flex items-center justify-center gap-2">
                <span className="inline-block text-[11px] bg-gold text-charcoal font-retro font-bold px-3 py-0.5 rounded-sm shadow-retro-pixel-sm border border-charcoal">
                  ★ HARRY SEAL ★
                </span>
                <span className="text-[10px] font-mono text-black/45 dark:text-white/45">
                  REV-01
                </span>
              </div>
            </div>
          </div>

          {/* Exposed Game cartridge contact pins at the bottom */}
          <div className="w-full flex flex-col items-center mt-4 pt-1 border-t border-black/10">
            <div className="w-full bg-slate-900 h-6 flex justify-around items-end px-4 rounded-b-sm border border-black/25">
              <div className="h-5 w-2 bg-yellow-500/80 rounded-t-sm" />
              <div className="h-5 w-2 bg-yellow-500/80 rounded-t-sm" />
              <div className="h-5 w-2 bg-yellow-500/80 rounded-t-sm" />
              <div className="h-5 w-2 bg-yellow-500/80 rounded-t-sm" />
              <div className="h-5 w-2 bg-yellow-500/80 rounded-t-sm" />
              <div className="h-5 w-2 bg-yellow-500/80 rounded-t-sm" />
              <div className="h-5 w-2 bg-yellow-500/80 rounded-t-sm" />
              <div className="h-5 w-2 bg-yellow-500/80 rounded-t-sm" />
              <div className="h-5 w-2 bg-yellow-500/80 rounded-t-sm" />
              <div className="h-5 w-2 bg-yellow-500/80 rounded-t-sm" />
              <div className="h-5 w-2 bg-yellow-500/80 rounded-t-sm" />
              <div className="h-5 w-2 bg-yellow-500/80 rounded-t-sm" />
            </div>
          </div>
        </div>

        {/* Hover warning notice for mobile */}
        <p className="mt-4 text-center text-[11px] font-bold text-terracotta uppercase tracking-widest animate-pulse px-2">
          {lang === "vi" 
            ? "💡 Xem bằng máy tính (hover chuột) để trải nghiệm Hologram 3D!" 
            : "💡 View on desktop (mouse hover) to experience 3D Hologram!"}
        </p>
      </div>
    </>
  );
}
