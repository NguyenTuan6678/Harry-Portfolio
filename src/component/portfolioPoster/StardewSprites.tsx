"use client";

import React from "react";
import { motion } from "motion/react";

interface SpriteProps {
  className?: string;
  size?: number;
  color?: string;
}

// 1. Junimo Sprite (Animated GIF from game assets)
export function Junimo({ className = "", size = 48 }: SpriteProps) {
  return (
    <img
      src="/svpack/Junimo.gif"
      alt="Junimo"
      width={size}
      height={size}
      className={`${className} pointer-events-none select-none pixelated`}
      style={{ imageRendering: "pixelated" }}
    />
  );
}

// 2. Stardew Chicken Sprite (Animated peck loop)
export function StardewChicken({ className = "", size = 48, type = "white" }: SpriteProps & { type?: "white" | "brown" }) {
  if (type === "brown") {
    return (
      <img
        src="/svpack/Brown_Chicken.png"
        alt="Brown Chicken"
        width={size}
        height={size}
        className={`${className} pointer-events-none select-none pixelated`}
        style={{ imageRendering: "pixelated" }}
      />
    );
  }

  const isWhite = type === "white";
  const bodyColor = isWhite ? "#ffffff" : "#bd8e68";
  const shadowColor = isWhite ? "#d3d3d3" : "#9c6c44";
  const combColor = "#bd7a6a"; // Red comb
  const beakColor = "#e3a857"; // Yellow beak

  return (
    <motion.svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`${className} overflow-visible`}
      animate={{
        rotate: [0, 8, 0, 0, -5, 0],
        y: [0, 0.5, 0, 0, 0, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Red Comb */}
      <rect x="11" y="4" width="3" height="2" fill={combColor} stroke="#2d231e" strokeWidth="1" />
      <rect x="13" y="3" width="2" height="2" fill={combColor} />
      
      {/* Chicken Body */}
      <path
        d="M10,6 H15 V7 H16 V8 H17 V12 H18 V15 H16 V16 H14 V17 H9 V16 H8 V12 H9 V8 H10 Z"
        fill={bodyColor}
        stroke="#2d231e"
        strokeWidth="1.2"
      />

      {/* Body shadow and wing details */}
      <path d="M8,12 H12 V15 H14 V16 H9 V15 H8 Z" fill={shadowColor} />
      {/* Wing overlay */}
      <rect x="11" y="11" width="4" height="3" fill={isWhite ? "#e0e0e0" : "#a67049"} stroke="#2d231e" strokeWidth="1" />

      {/* Eye */}
      <rect x="15" y="8" width="1.5" height="1.5" fill="#2d231e" />

      {/* Beak */}
      <rect x="17" y="9" width="3" height="2" fill={beakColor} stroke="#2d231e" strokeWidth="1" />

      {/* Wattles (Red throat) */}
      <rect x="16" y="11" width="1.5" height="2" fill={combColor} />

      {/* Legs & Feet */}
      <rect x="11" y="17" width="1.5" height="3" fill={beakColor} stroke="#2d231e" strokeWidth="0.8" />
      <rect x="14" y="17" width="1.5" height="3" fill={beakColor} stroke="#2d231e" strokeWidth="0.8" />
      
      {/* Grass pixel patch under feet */}
      <path d="M5,21 H19 V22 H5 Z" fill="#708a5b" opacity="0.3" />
    </motion.svg>
  );
}

// 3. Stardew Farmhouse SVG
export function StardewHouse({ className = "", size = 120 }: SpriteProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size * 0.9 }}>
      {/* SVG drawing the iconic pixel cottage */}
      <svg
        viewBox="0 0 80 72"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Chimney */}
        <rect x="12" y="10" width="8" height="18" fill="#42383f" stroke="#2d231e" strokeWidth="2" />
        <rect x="10" y="8" width="12" height="4" fill="#b85b46" stroke="#2d231e" strokeWidth="2" />
        
        {/* Animated Smoke particle */}
        <motion.g
          animate={{
            y: [0, -16, -26],
            x: [0, -4, 2],
            opacity: [0, 0.7, 0],
            scale: [0.8, 1.2, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          {/* Cloud of smoke */}
          <circle cx="16" cy="3" r="3" fill="#cfb895" opacity="0.5" />
          <circle cx="13" cy="5" r="2.5" fill="#ebd9b4" opacity="0.4" />
        </motion.g>

        {/* Roof (Red Terracotta clay tiles) */}
        <polygon points="40,6 6,32 74,32" fill="#b85b46" stroke="#2d231e" strokeWidth="2" />
        {/* Roof tiles pattern lines */}
        <line x1="23" y1="20" x2="57" y2="20" stroke="#8c3e2b" strokeWidth="2" />
        <line x1="15" y1="26" x2="65" y2="26" stroke="#8c3e2b" strokeWidth="2" />

        {/* Main Log Wall House Body */}
        <rect x="12" y="32" width="56" height="34" fill="#cfb088" stroke="#2d231e" strokeWidth="2" />
        {/* Log Lines (Horizontal panel styling) */}
        <line x1="12" y1="38" x2="68" y2="38" stroke="#a6865f" strokeWidth="2" />
        <line x1="12" y1="45" x2="68" y2="45" stroke="#a6865f" strokeWidth="2" />
        <line x1="12" y1="52" x2="68" y2="52" stroke="#a6865f" strokeWidth="2" />
        <line x1="12" y1="59" x2="68" y2="59" stroke="#a6865f" strokeWidth="2" />

        {/* Wooden Door */}
        <rect x="46" y="44" width="14" height="22" fill="#5c3e29" stroke="#2d231e" strokeWidth="2" />
        <circle cx="49" cy="55" r="1.5" fill="#d9a04b" /> {/* Doorknob */}
        <rect x="46" y="42" width="14" height="2" fill="#cfb088" /> {/* Door frame top */}

        {/* Window with light */}
        <rect x="20" y="42" width="16" height="14" fill="#fcf3d9" stroke="#2d231e" strokeWidth="2" />
        <line x1="28" y1="42" x2="28" y2="56" stroke="#2d231e" strokeWidth="1" />
        <line x1="20" y1="49" x2="36" y2="49" stroke="#2d231e" strokeWidth="1" />
        {/* Warm window glow */}
        <rect x="21" y="43" width="7" height="6" fill="#d9a04b" opacity="0.6" />
        
        {/* Stone foundation at bottom */}
        <rect x="10" y="66" width="60" height="2" fill="#393e41" />
      </svg>
    </div>
  );
}

// 4. Stardew Crops SVG Badge (Strawberry and Pumpkin crops)
export function StardewCrop({ className = "", size = 32, type = "strawberry" }: SpriteProps & { type?: "strawberry" | "pumpkin" }) {
  const isStrawberry = type === "strawberry";
  const mainColor = isStrawberry ? "#b85b46" : "#d9a04b"; // Red or Orange
  const leafColor = "#708a5b"; // Earthy Green
  
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Green leaves stem */}
      <rect x="7" y="2" width="2" height="4" fill={leafColor} />
      <rect x="5" y="3" width="6" height="2" fill={leafColor} />
      
      {/* Crop shape */}
      {isStrawberry ? (
        // Strawberry shape (Pointy bottom)
        <path d="M5,6 H11 V9 H10 V11 H9 V13 H7 V11 H6 V9 H5 Z" fill={mainColor} stroke="#2d231e" strokeWidth="1" />
      ) : (
        // Pumpkin shape (Round)
        <path d="M4,6 H12 V7 H13 V11 H12 V12 H4 V11 H3 V7 H4 Z" fill={mainColor} stroke="#2d231e" strokeWidth="1" />
      )}
      
      {/* Detail dots */}
      {isStrawberry ? (
        // Seeds
        <>
          <rect x="7" y="8" width="1" height="1" fill="#ebd9b4" />
          <rect x="9" y="9" width="1" height="1" fill="#ebd9b4" />
          <rect x="6" y="10" width="1" height="1" fill="#ebd9b4" />
        </>
      ) : (
        // Pumpkin rib lines
        <>
          <line x1="6" y1="6" x2="6" y2="12" stroke="#b07e56" strokeWidth="1" />
          <line x1="10" y1="6" x2="10" y2="12" stroke="#b07e56" strokeWidth="1" />
        </>
      )}
    </svg>
  );
}

// 5. Stardew Style Logo Bracket with Junimos (Title Board mimicking official Stardew logo)
export function StardewTitleLogo({ lang }: { lang: "vi" | "en" }) {
  return (
    <div className="relative flex flex-col items-center select-none font-pixel mt-4 w-[280px] sm:w-[440px] md:w-[560px] aspect-[3.2/1]">
      
      {/* Left peeking Junimo */}
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 z-20">
        <Junimo size={42} color="#bd7a6a" />
      </div>

      {/* Right peeking Junimo */}
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 z-20">
        <Junimo size={42} color="#e3a857" />
      </div>

      <svg
        viewBox="0 0 320 100"
        className="w-full h-full filter drop-shadow-[5px_6px_0px_rgba(0,0,0,0.15)] overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Board Frame */}
        {/* Outline border */}
        <rect x="2" y="2" width="316" height="96" fill="#8c746a" stroke="#4a3a35" strokeWidth="3" rx="4" />
        
        {/* Internal wood background (weathered light cream paint) */}
        <rect x="7" y="7" width="306" height="86" fill="#f0e5dd" rx="2" />
        
        {/* Wood planks lines (Horizontal planks details) */}
        <line x1="8" y1="28" x2="312" y2="28" stroke="#baa198" strokeWidth="1.5" />
        <line x1="8" y1="50" x2="312" y2="50" stroke="#baa198" strokeWidth="1.5" />
        <line x1="8" y1="72" x2="312" y2="72" stroke="#baa198" strokeWidth="1.5" />
        
        {/* Nails in corners */}
        <circle cx="12" cy="12" r="1.5" fill="#4a3a35" />
        <circle cx="308" cy="12" r="1.5" fill="#4a3a35" />
        <circle cx="12" cy="88" r="1.5" fill="#4a3a35" />
        <circle cx="308" cy="88" r="1.5" fill="#4a3a35" />

        {/* Rope wrapping on corners */}
        {/* Top-Left */}
        <line x1="2" y1="12" x2="12" y2="2" stroke="#ebdcd0" strokeWidth="2.5" />
        <line x1="2" y1="12" x2="12" y2="2" stroke="#4a3a35" strokeWidth="0.8" />
        {/* Top-Right */}
        <line x1="318" y1="12" x2="308" y2="2" stroke="#ebdcd0" strokeWidth="2.5" />
        <line x1="318" y1="12" x2="308" y2="2" stroke="#4a3a35" strokeWidth="0.8" />
        {/* Bottom-Left */}
        <line x1="2" y1="88" x2="12" y2="98" stroke="#ebdcd0" strokeWidth="2.5" />
        <line x1="2" y1="88" x2="12" y2="98" stroke="#4a3a35" strokeWidth="0.8" />
        {/* Bottom-Right */}
        <line x1="318" y1="88" x2="308" y2="98" stroke="#ebdcd0" strokeWidth="2.5" />
        <line x1="318" y1="88" x2="308" y2="98" stroke="#4a3a35" strokeWidth="0.8" />

        {/* Dây leo Ivy bám leo quanh bảng (SVG Paths) */}
        {/* Top left leaves */}
        <path d="M8,12 Q30,6 60,18" fill="none" stroke="#5a6e52" strokeWidth="1.5" />
        <circle cx="20" cy="8" r="2.5" fill="#7e9475" />
        <circle cx="42" cy="11" r="3" fill="#7e9475" />
        <circle cx="55" cy="16" r="2" fill="#7e9475" />
        
        {/* Right side leaves */}
        <path d="M312,20 Q290,40 310,65" fill="none" stroke="#5a6e52" strokeWidth="1.5" />
        <circle cx="300" cy="30" r="3" fill="#7e9475" />
        <circle cx="302" cy="50" r="2.5" fill="#7e9475" />

        {/* Flower arrangements in corners (Lavender & white daisies) */}
        {/* Bottom Left Flowers */}
        <g transform="translate(10, 68)">
          {/* Lavender stalks */}
          <rect x="6" y="4" width="1.5" height="20" fill="#5a6e52" />
          <rect x="12" y="10" width="1.5" height="14" fill="#5a6e52" />
          {/* Lavender blooms (Purple) */}
          <circle cx="6" cy="4" r="2" fill="#9b8cb3" />
          <circle cx="4" cy="7" r="1.8" fill="#9b8cb3" />
          <circle cx="8" cy="9" r="1.8" fill="#9b8cb3" />
          <circle cx="6" cy="12" r="2" fill="#9b8cb3" />
          {/* White daisies */}
          <circle cx="14" cy="18" r="2.5" fill="#ffffff" stroke="#2d231e" strokeWidth="0.5" />
          <circle cx="14" cy="18" r="1" fill="#e3a857" />
          <circle cx="21" cy="22" r="2" fill="#8b9da2" stroke="#2d231e" strokeWidth="0.5" /> {/* Blue flower */}
          <circle cx="21" cy="22" r="0.8" fill="#e3a857" />
        </g>

        {/* Bottom Right Flowers */}
        <g transform="translate(285, 68)">
          {/* Lavender */}
          <rect x="12" y="4" width="1.5" height="20" fill="#5a6e52" />
          <circle cx="12" cy="4" r="2" fill="#9b8cb3" />
          <circle cx="10" cy="7" r="1.8" fill="#9b8cb3" />
          <circle cx="14" cy="9" r="1.8" fill="#9b8cb3" />
          {/* Yellow Daisy */}
          <circle cx="4" cy="18" r="2.5" fill="#ebdcd0" stroke="#2d231e" strokeWidth="0.5" />
          <circle cx="4" cy="18" r="1" fill="#e3a857" />
          <circle cx="9" cy="21" r="2" fill="#e3a857" stroke="#2d231e" strokeWidth="0.5" />
          <circle cx="9" cy="21" r="0.8" fill="#ffffff" />
        </g>

        {/* Wooden-styled Text HARRY FARMING */}
        {/* Draw 3D drop shadow text manually using text layers */}
        <text
          x="160"
          y="56"
          textAnchor="middle"
          fill="#4a3a35"
          fontFamily="'VT323', monospace"
          fontSize="44"
          fontWeight="900"
          letterSpacing="2"
        >
          HARRY FARMING
        </text>
        <text
          x="160"
          y="53"
          textAnchor="middle"
          fill="#c5b0a7"
          stroke="#4a3a35"
          strokeWidth="1.5"
          fontFamily="'VT323', monospace"
          fontSize="44"
          fontWeight="900"
          letterSpacing="2"
        >
          HARRY FARMING
        </text>

        {/* Under text subtitle */}
        <text
          x="160"
          y="78"
          textAnchor="middle"
          fill="#5c413c"
          fontFamily="'Pixelify Sans', sans-serif"
          fontSize="9"
          fontWeight="bold"
          letterSpacing="1"
        >
          {lang === "vi" ? "● PHIÊN BẢN NÔNG TRẠI ●" : "● PORTFOLIO FARM EDITION ●"}
        </text>
      </svg>
    </div>
  );
}

// 6. Tech Icon SVG Pixel Art Mapper
export function TechIcon({ name, size = 20 }: { name: string; size?: number }) {
  const normName = name.toLowerCase().replace(/[\.\s-]/g, "");

  switch (normName) {
    case "react":
      return (
        <svg viewBox="0 0 16 16" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* React Atom Symbol pixel art */}
          <ellipse cx="8" cy="8" rx="7" ry="2.5" stroke="#708a5b" strokeWidth="1.2" transform="rotate(30 8 8)" />
          <ellipse cx="8" cy="8" rx="7" ry="2.5" stroke="#708a5b" strokeWidth="1.2" transform="rotate(90 8 8)" />
          <ellipse cx="8" cy="8" rx="7" ry="2.5" stroke="#708a5b" strokeWidth="1.2" transform="rotate(150 8 8)" />
          <circle cx="8" cy="8" r="1.5" fill="#d9a04b" />
        </svg>
      );
    case "nextjs":
      return (
        <svg viewBox="0 0 16 16" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Next.js N Logo */}
          <rect x="2" y="2" width="12" height="12" rx="1" fill="#2d231e" stroke="#5c3e29" strokeWidth="1" />
          <path d="M4 12V4L10 11.5V4H12V12L6 4.5V12H4Z" fill="#ebd9b4" />
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 16 16" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* TS Logo */}
          <rect x="2" y="2" width="12" height="12" fill="#7e999c" stroke="#2d231e" strokeWidth="1.2" />
          {/* Letters T and S in pixel style */}
          <path d="M4 4H8V5H6V11H5V5H4V4Z" fill="#fcf3d9" />
          <path d="M9 4H12V5H9V7H12V11H9V10H11V8H9V4Z" fill="#fcf3d9" />
        </svg>
      );
    case "nestjs":
      return (
        <svg viewBox="0 0 16 16" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* NestJS Red Cat/Falcon Logo */}
          <path d="M8,1 L14,7 L12,13 L8,15 L4,13 L2,7 Z" fill="#b85b46" stroke="#2d231e" strokeWidth="1" />
          <path d="M8,4 L11,7 L10,11 L8,12 L6,11 L5,7 Z" fill="#ebd9b4" />
        </svg>
      );
    case "springboot":
      return (
        <svg viewBox="0 0 16 16" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Spring Leaf */}
          <path d="M8,1 C12,1 15,4 15,8 C15,12 12,15 8,15 C4,15 1,12 1,8 C1,4 4,1 8,1 Z" fill="#708a5b" stroke="#2d231e" strokeWidth="1" />
          <path d="M8,2 C10,2 13,5 13,8 C13,11 10,13 8,13" stroke="#ebd9b4" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="8" y1="15" x2="8" y2="11" stroke="#2d231e" strokeWidth="1" />
        </svg>
      );
    case "mongodb":
      return (
        <svg viewBox="0 0 16 16" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Leaf/Bud shape */}
          <path d="M8,1 C8,1 12,5 12,9 C12,12 10,14 8,15 C6,14 4,12 4,9 C4,5 8,1 8,1 Z" fill="#4e5d42" stroke="#2d231e" strokeWidth="1" />
          <path d="M8,2 C8,2 10.5,5.5 10.5,9" stroke="#708a5b" strokeWidth="1.2" />
          <line x1="8" y1="1" x2="8" y2="15" stroke="#2d231e" strokeWidth="1" />
        </svg>
      );
    case "postgresql":
      return (
        <svg viewBox="0 0 16 16" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Elephant head */}
          <path d="M3,4 H11 V8 H13 V11 H9 V9 H7 V12 H3 Z" fill="#7e999c" stroke="#2d231e" strokeWidth="1.2" />
          <rect x="5" y="6" width="2" height="2" fill="#2d231e" />
          <path d="M11,8 H12 V11 H11 Z" fill="#ffffff" /> {/* Tusk */}
        </svg>
      );
    default:
      return (
        // Fallback default crop seed icon
        <svg viewBox="0 0 16 16" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="6" width="4" height="4" fill="#d9a04b" stroke="#2d231e" strokeWidth="1" />
          <rect x="7" y="3" width="2" height="3" fill="#708a5b" />
        </svg>
      );
  }
}

// 7. Grey/Black Stardew Cat Sprite (Animated GIF from game assets)
export function StardewCat({ className = "", size = 32 }: SpriteProps) {
  return (
    <img
      src="/svpack/Cat.gif"
      alt="Stardew Cat"
      width={size}
      height={size}
      className={`${className} pointer-events-none select-none pixelated`}
      style={{ imageRendering: "pixelated" }}
    />
  );
}

// 8. Stardew Dog Sprite (Animated GIF)
export function StardewDog({ className = "", size = 36 }: SpriteProps) {
  return (
    <img
      src="/svpack/Dog.gif"
      alt="Stardew Dog"
      width={size}
      height={size}
      className={`${className} pointer-events-none select-none pixelated`}
      style={{ imageRendering: "pixelated" }}
    />
  );
}

// 9. Stardew Cow Sprite
export function StardewCow({ className = "", size = 52 }: SpriteProps) {
  return (
    <img
      src="/svpack/Brown_Cow.png"
      alt="Stardew Cow"
      width={size}
      height={size}
      className={`${className} pointer-events-none select-none pixelated`}
      style={{ imageRendering: "pixelated" }}
    />
  );
}

// 10. Stardew Goat Sprite
export function StardewGoat({ className = "", size = 44 }: SpriteProps) {
  return (
    <img
      src="/svpack/Goat.png"
      alt="Stardew Goat"
      width={size}
      height={size}
      className={`${className} pointer-events-none select-none pixelated`}
      style={{ imageRendering: "pixelated" }}
    />
  );
}

// 11. Stardew Horse Sprite
export function StardewHorse({ className = "", size = 56 }: SpriteProps) {
  return (
    <img
      src="/svpack/Horse.png"
      alt="Stardew Horse"
      width={size}
      height={size}
      className={`${className} pointer-events-none select-none pixelated`}
      style={{ imageRendering: "pixelated" }}
    />
  );
}

// 12. Stardew Duck Sprite
export function StardewDuck({ className = "", size = 36 }: SpriteProps) {
  return (
    <img
      src="/svpack/Duck.png"
      alt="Stardew Duck"
      width={size}
      height={size}
      className={`${className} pointer-events-none select-none pixelated`}
      style={{ imageRendering: "pixelated" }}
    />
  );
}

// 13. Stardrop Animated GIF
export function StardropGif({ className = "", size = 32 }: SpriteProps) {
  return (
    <img
      src="/svpack/Stardrop_Animated_JP.gif"
      alt="Stardrop"
      width={size}
      height={size}
      className={`${className} pointer-events-none select-none pixelated`}
      style={{ imageRendering: "pixelated" }}
    />
  );
}
