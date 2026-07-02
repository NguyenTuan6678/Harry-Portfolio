"use client";

import React from "react";
import { motion } from "motion/react";
import { StardewDog, StardewCow, StardewGoat, StardewHorse, StardewDuck, Junimo } from "./StardewSprites";

// 1. Pixel Fence SVG component
const PixelFence = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 32 24"
    width="64"
    height="48"
    className={`${className} select-none`}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Post 1 */}
    <rect x="4" y="2" width="4" height="20" fill="#8c746a" stroke="#4a3a35" strokeWidth="1" />
    <polygon points="4,2 6,0 8,2" fill="#baa198" />
    <rect x="5" y="3" width="1" height="18" fill="#baa198" opacity="0.3" />

    {/* Post 2 */}
    <rect x="22" y="4" width="4" height="18" fill="#8c746a" stroke="#4a3a35" strokeWidth="1" />
    <polygon points="22,4 24,2 26,4" fill="#baa198" />
    <rect x="23" y="5" width="1" height="16" fill="#baa198" opacity="0.3" />

    {/* Rails */}
    <rect x="0" y="6" width="32" height="3" fill="#8c746a" stroke="#4a3a35" strokeWidth="1" />
    <rect x="0" y="7" width="32" height="1" fill="#baa198" opacity="0.25" />
    <rect x="0" y="14" width="32" height="3" fill="#8c746a" stroke="#4a3a35" strokeWidth="1" />
    <rect x="0" y="15" width="32" height="1" fill="#baa198" opacity="0.25" />
  </svg>
);

// 2. Wild Grass SVG component
const WildGrass = ({ className = "", color = "#7e9475" }: { className?: string; color?: string }) => (
  <svg
    viewBox="0 0 16 16"
    width="32"
    height="32"
    className={`${className} select-none`}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Blade 1 (Left) */}
    <path d="M2,14 L5,4 L7,14 Z" fill={color} />
    <path d="M3,14 L5,5 L6,14 Z" fill="#5a6e52" opacity="0.4" />
    
    {/* Blade 2 (Center) */}
    <path d="M7,14 L8,2 L10,14 Z" fill={color} />
    <path d="M8,14 L8,3 L9,14 Z" fill="#5a6e52" opacity="0.3" />
    
    {/* Blade 3 (Right) */}
    <path d="M10,14 L12,6 L14,14 Z" fill={color} />
    {/* Grass highlight */}
    <rect x="8" y="5" width="1" height="6" fill="#f0e5dd" opacity="0.2" />
  </svg>
);

// 3. Flower SVG component
const WildFlower = ({ className = "", color = "#bd7a6a" }: { className?: string; color?: string }) => (
  <svg
    viewBox="0 0 16 16"
    width="24"
    height="24"
    className={`${className} select-none`}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Green stem */}
    <rect x="7" y="9" width="2" height="7" fill="#7e9475" />
    <rect x="5" y="11" width="2" height="2" fill="#7e9475" />
    <rect x="9" y="10" width="2" height="2" fill="#7e9475" />
    
    {/* Petals */}
    <rect x="7" y="4" width="2" height="2" fill={color} stroke="#4a3a35" strokeWidth="0.8" />
    <rect x="7" y="8" width="2" height="2" fill={color} stroke="#4a3a35" strokeWidth="0.8" />
    <rect x="5" y="6" width="2" height="2" fill={color} stroke="#4a3a35" strokeWidth="0.8" />
    <rect x="9" y="6" width="2" height="2" fill={color} stroke="#4a3a35" strokeWidth="0.8" />
    
    {/* Flower center */}
    <rect x="7" y="6" width="2" height="2" fill="#e3a857" />
  </svg>
);

// 4. Rock Ores SVG component
const PebbleRock = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 16 12"
    width="32"
    height="24"
    className={`${className} select-none`}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Rock base */}
    <path d="M2,10 H14 V7 H12 V4 H8 V3 H5 V5 H3 V8 H2 Z" fill="#8b9da2" stroke="#4a3a35" strokeWidth="1" />
    {/* Shading */}
    <path d="M2,10 H14 V8 H11 V6 H8 V5 H5 V7 H3 V10 Z" fill="#525a5e" opacity="0.3" />
    {/* Highlight */}
    <rect x="5" y="4" width="3" height="1" fill="#ffffff" opacity="0.25" />
  </svg>
);

// 5. Fluttering Butterfly
const Butterfly = ({ className = "", color = "#ebdcd0" }: { className?: string; color?: string }) => (
  <motion.svg
    viewBox="0 0 12 12"
    width="16"
    height="16"
    className={`${className} select-none`}
    xmlns="http://www.w3.org/2000/svg"
    animate={{
      y: [0, -12, 0],
      x: [0, 4, -4, 0],
      rotate: [0, -15, 15, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {/* Left wings */}
    <rect x="1" y="2" width="4" height="4" fill={color} stroke="#4a3a35" strokeWidth="0.8" />
    <rect x="2" y="6" width="3" height="3" fill={color} stroke="#4a3a35" strokeWidth="0.8" />
    {/* Body */}
    <rect x="5" y="3" width="2" height="6" fill="#4a3a35" />
    {/* Right wings */}
    <rect x="7" y="2" width="4" height="4" fill={color} stroke="#4a3a35" strokeWidth="0.8" />
    <rect x="7" y="6" width="3" height="3" fill={color} stroke="#4a3a35" strokeWidth="0.8" />
  </motion.svg>
);

// 6. NEW: Background Floating Cloud (slow translation)
const BackgroundCloud = ({ className = "", speed = 70, delay = 0, top = "10vh" }: { className?: string; speed?: number; delay?: number; top?: string }) => (
  <motion.svg
    viewBox="0 0 64 24"
    width="130"
    height="50"
    fill="#e8ece9"
    opacity="0.18"
    className={`absolute pointer-events-none select-none z-10 ${className}`}
    style={{ top }}
    initial={{ x: "-20vw" }}
    animate={{
      x: "110vw",
    }}
    transition={{
      duration: speed,
      repeat: Infinity,
      ease: "linear",
      delay: delay,
    }}
  >
    <path d="M16,8 H48 V10 H52 V12 H56 V16 H52 V18 H12 V16 H8 V12 H12 V10 H16 Z M24,4 H40 V8 H24 Z" />
  </motion.svg>
);

// 7. NEW: Pine Tree (Cây thông pixel)
const PixelPineTree = ({ className = "", size = 70 }: { className?: string; size?: number }) => (
  <svg
    viewBox="0 0 32 48"
    width={size}
    height={size * 1.5}
    className={`${className} select-none`}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Trunk */}
    <rect x="14" y="36" width="4" height="12" fill="#8c746a" stroke="#4a3a35" strokeWidth="1" />
    {/* Tier 3 (Bottom leaves) */}
    <polygon points="16,16 4,36 28,36" fill="#5a6e52" stroke="#4a3a35" strokeWidth="1.2" />
    {/* Tier 2 (Middle leaves) */}
    <polygon points="16,8 8,26 24,26" fill="#7e9475" stroke="#4a3a35" strokeWidth="1.2" />
    {/* Tier 1 (Top leaves) */}
    <polygon points="16,1 11,15 21,15" fill="#f0e5dd" stroke="#4a3a35" strokeWidth="1" opacity="0.8" />
  </svg>
);

// 8. NEW: Oak Tree (Cây sồi vòm lá tròn pixel)
const PixelOakTree = ({ className = "", size = 75 }: { className?: string; size?: number }) => (
  <svg
    viewBox="0 0 32 48"
    width={size}
    height={size * 1.35}
    className={`${className} select-none`}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Trunk */}
    <rect x="13" y="32" width="6" height="16" fill="#8c746a" stroke="#4a3a35" strokeWidth="1.2" />
    {/* Rounded Crown leaves */}
    <path d="M8,14 Q2,20 8,28 Q16,33 24,28 Q30,20 24,14 Q16,8 8,14 Z" fill="#7e9475" stroke="#4a3a35" strokeWidth="1.3" />
    {/* Light shading highlight inside */}
    <circle cx="16" cy="18" r="7" fill="#f0e5dd" opacity="0.25" />
    <circle cx="12" cy="16" r="3.5" fill="#f0e5dd" opacity="0.3" />
  </svg>
);

// 9. NEW: Mini Cabin/House (Ngôi nhà gỗ nhỏ pixel art)
const PixelMiniHouse = ({ className = "", size = 90 }: { className?: string; size?: number }) => (
  <svg
    viewBox="0 0 48 40"
    width={size}
    height={size * 0.83}
    className={`${className} select-none`}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Chimney */}
    <rect x="8" y="4" width="6" height="12" fill="#5c413c" stroke="#4a3a35" strokeWidth="1.2" />
    <rect x="7" y="2" width="8" height="3" fill="#bd7a6a" stroke="#4a3a35" strokeWidth="1" />
    
    {/* Roof (NGói đất nung) */}
    <polygon points="24,2 2,20 46,20" fill="#bd7a6a" stroke="#4a3a35" strokeWidth="1.3" />
    
    {/* Main Cabin body (Weathered Logs) */}
    <rect x="6" y="20" width="36" height="18" fill="#f0e5dd" stroke="#4a3a35" strokeWidth="1.3" />
    <line x1="6" y1="26" x2="42" y2="26" stroke="#baa198" strokeWidth="1" />
    <line x1="6" y1="32" x2="42" y2="32" stroke="#baa198" strokeWidth="1" />
    
    {/* Door */}
    <rect x="28" y="26" width="9" height="12" fill="#8c746a" stroke="#4a3a35" strokeWidth="1.2" />
    <circle cx="30" cy="32" r="0.6" fill="#e3a857" />
    
    {/* Window with warm glow */}
    <rect x="12" y="25" width="10" height="8" fill="#ebdcd0" stroke="#4a3a35" strokeWidth="1.2" />
    <rect x="13" y="26" width="4" height="3" fill="#e3a857" opacity="0.65" />
  </svg>
);

export default function StardewDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      
      {/* ================= BACKGROUND SLOW FLOATING CLOUDS ================= */}
      <BackgroundCloud top="8vh" speed={85} delay={0} />
      <BackgroundCloud top="24vh" speed={110} delay={15} />
      <BackgroundCloud top="42vh" speed={95} delay={35} />
      <BackgroundCloud top="65vh" speed={125} delay={5} />

      {/* ================= HERO SECTION BACKGROUND DECORATIONS (Top 100vh) ================= */}
      {/* Left Forest Border (Cabin & Pine Trees) */}
      <div className="absolute top-[40vh] left-[-20px] hidden lg:flex items-end gap-1 scale-90 origin-bottom-left">
        <PixelPineTree size={85} />
        <PixelMiniHouse className="-ml-8 mb-1 relative z-10" size={95} />
        <StardewGoat className="ml-2 mb-1 z-20 scale-x-[-1]" size={38} />
        <PixelOakTree className="-ml-6" size={80} />
        <div className="flex flex-col gap-0.5 -ml-4 z-20">
          <PixelFence />
          <WildGrass className="ml-2" />
        </div>
      </div>

      {/* Right Forest Border */}
      <div className="absolute top-[45vh] right-[-25px] hidden lg:flex items-end gap-1 scale-90 origin-bottom-right">
        <div className="flex flex-col gap-0.5 mr-2">
          <Butterfly className="mb-8" color="#e3a857" />
          <PixelFence className="scale-x-[-1]" />
        </div>
        <StardewHorse className="mr-2 mb-1 z-20 scale-x-[-1]" size={52} />
        <PixelOakTree size={90} />
        <PixelPineTree className="-ml-8" size={80} />
      </div>

      {/* Hero center garden patches */}
      <div className="absolute top-[25vh] left-[3%] hidden xl:flex flex-col items-start gap-1">
        <div className="flex items-end">
          <PixelFence />
          <PixelFence className="-ml-1" />
        </div>
        <div className="flex gap-2 items-end ml-2">
          <WildGrass color="#7e9475" />
          <WildFlower color="#bd7a6a" className="-ml-1" />
          <PebbleRock className="-ml-1" />
        </div>
      </div>

      <div className="absolute top-[35vh] right-[4%] hidden xl:flex flex-col items-end gap-1">
        <div className="flex gap-1 items-end mr-4">
          <Butterfly color="#e3a857" />
          <WildGrass color="#5a6e52" />
          <WildFlower color="#ebdcd0" />
        </div>
        <div className="flex items-end">
          <PixelFence className="scale-x-[-1]" />
          <PixelFence className="-ml-1 scale-x-[-1]" />
        </div>
      </div>

      {/* ================= ABOUT SECTION BACKGROUND DECORATIONS (Section 2) ================= */}
      {/* Left side decorations (Cabin & Trees & Junimo) */}
      <div className="absolute top-[120vh] left-[-15px] hidden xl:flex items-end gap-1 scale-95 origin-bottom-left">
        <PixelPineTree size={90} />
        <PixelMiniHouse className="-ml-10 mb-1 z-10" size={80} />
        <StardewCow className="ml-2 mb-1 z-20" size={48} />
        
        {/* Naughty Junimo hiding near the cabin */}
        <motion.div
          className="ml-2 mb-2 relative flex items-center z-25"
          animate={{ x: [-8, 2, -8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Junimo size={36} />
          <span className="text-[9px] font-bold text-charcoal/50 uppercase bg-[#ebdcd0] border border-[#8c746a] px-1 py-0.5 rounded ml-1 select-none">
            Hehe!
          </span>
        </motion.div>
      </div>

      {/* Right side decorations (Forest patch) */}
      <div className="absolute top-[125vh] right-[-15px] hidden xl:flex items-end gap-1 scale-95 origin-bottom-right">
        <div className="flex items-end gap-1.5 mr-4 mb-2">
          <Butterfly color="#8b9da2" className="mb-12" />
          <StardewDuck className="mb-1" size={32} />
          <WildFlower color="#e3a857" />
          <WildGrass color="#7e9475" className="-ml-2" />
        </div>
        <PixelOakTree size={95} />
        <PixelPineTree className="-ml-8" size={75} />
      </div>

      {/* ================= PROJECTS SECTION BACKGROUND DECORATIONS (Section 3) ================= */}
      {/* Left side board stand support detail (Forest background backing) */}
      <div className="absolute top-[220vh] left-[0.5%] hidden lg:flex flex-col items-center">
        {/* Support wood logs */}
        <div className="w-4 h-64 bg-[#8c746a] border-2 border-charcoal shadow-md" />
        <div className="flex gap-1 items-end -mt-2">
          <PixelPineTree size={50} className="-mr-4 relative -z-10" />
          <WildGrass color="#7e9475" />
          <PebbleRock className="-ml-2" />
        </div>
      </div>
      
      {/* Right side board stand support detail */}
      <div className="absolute top-[220vh] right-[0.5%] hidden lg:flex flex-col items-center">
        <div className="w-4 h-64 bg-[#8c746a] border-2 border-charcoal shadow-md" />
        <div className="flex gap-1 items-end -mt-2">
          <PixelOakTree size={55} className="-ml-4 relative -z-10" />
          <WildFlower color="#bd7a6a" />
          <WildGrass color="#5a6e52" className="-ml-2" />
        </div>
      </div>

      {/* ================= INTERACTIVE CONSOLE DECORATIONS (Section 4) ================= */}
      {/* Underneath the console - Garden patch */}
      <div className="absolute bottom-[4vh] left-[6%] hidden xl:flex items-end gap-2">
        <PixelFence />
        <WildGrass color="#7e9475" className="-ml-1" />
        <StardewDog size={38} className="ml-1" />
        <WildFlower color="#e3a857" />
        <PebbleRock />
      </div>

      <div className="absolute bottom-[10vh] right-[8%] hidden xl:flex items-end gap-2">
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center animate-bounce"
        >
          <Junimo size={34} />
        </motion.div>
        <WildGrass color="#7e9475" />
        <PixelFence className="scale-x-[-1]" />
      </div>

    </div>
  );
}
