"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useRef } from "react";
import { translations } from "./translations";
import { StardewCrop, TechIcon, Junimo, StardropGif } from "./StardewSprites";

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
    const maxTilt = 12;
    rotateXVal.set(-normalizedY * maxTilt);
    rotateYVal.set(normalizedX * maxTilt);

    // Glare coordinates
    glareX.set(x);
    glareY.set(y);
    glareOpacityVal.set(0.3); // slight opacity for warm shine
  };

  const handleMouseLeave = () => {
    rotateXVal.set(0);
    rotateYVal.set(0);
    glareOpacityVal.set(0);
  };

  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]) => `radial-gradient(circle 180px at ${gx}px ${gy}px, rgba(255, 235, 180, 0.25) 0%, rgba(255, 255, 255, 0) 80%)`
  );

  const cardContent = (
    <div className="relative w-full h-[510px] overflow-hidden rounded bg-[#b07e56] p-5 flex flex-col justify-between border-4 border-[#5c3e29] outline-4 outline-[#2d231e] shadow-[inset_0_0_0_2px_#cfb088,5px_5px_0px_0px_rgba(0,0,0,0.15)] select-none">
      
      {/* Small hanging ivy leaves decor */}
      <div className="absolute top-1 left-2 flex gap-1 z-25">
        <span className="w-2.5 h-2 bg-sage rounded-full" />
        <span className="w-1.5 h-1.5 bg-muted-olive rounded-full" />
      </div>
      <div className="absolute top-1 right-2 flex gap-1 z-25">
        <span className="w-1.5 h-1.5 bg-muted-olive rounded-full" />
        <span className="w-2.5 h-2 bg-sage rounded-full" />
      </div>

      {/* Title Bar (Character Status Menu Board) */}
      <div className="w-full flex items-center justify-between px-1 mb-2 z-20">
        <div className="flex gap-2">
          <div className="w-2.5 h-5 bg-[#5c3e29] rounded-sm shadow-[inset_1px_1px_0px_rgba(0,0,0,0.3)]" />
          <div className="w-2.5 h-5 bg-[#5c3e29] rounded-sm shadow-[inset_1px_1px_0px_rgba(0,0,0,0.3)]" />
        </div>
        <span className="text-[13px] font-retro uppercase tracking-widest text-[#fcf3d9]/85 font-black">
          {lang === "vi" ? "DANH MỤC THÔNG TIN" : "CHARACTER INVENTORY"}
        </span>
        <div className="w-6 h-4 rounded bg-[#5c3e29] flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
        </div>
      </div>

      {/* Main Content Area (Parchment Paper Panel) */}
      <div className="w-full flex-1 flex flex-col justify-between bg-[#fcf3d9] p-4 border-2 border-[#5c3e29] rounded-sm relative shadow-[inset_2px_2px_4px_rgba(0,0,0,0.08)]">
        <div className="stardew-corners absolute inset-0 pointer-events-none" />

        {/* Small crops decoration */}
        <div className="absolute -top-1.5 -left-1.5 z-25 scale-75">
          <StardewCrop type="strawberry" size={24} />
        </div>

        {/* Section 1: Portrait & Profile Details */}
        <div className="grid grid-cols-[110px_1fr] gap-3.5 items-start mt-1.5 z-20">
          
          {/* Portrait wooden frame */}
          <div className="relative h-28 w-24 overflow-hidden border-2 border-[#5c3e29] bg-[#ebd9b4] shadow-[2px_2px_0px_rgba(0,0,0,0.08)]">
            <Image
              src="/animeavatar.png"
              alt="Harry avatar"
              fill
              priority
              sizes="96px"
              className="object-cover pointer-events-none scale-105"
            />
            {/* Tiny decoration crop */}
            <div className="absolute -bottom-1 -left-1 opacity-70 scale-50 origin-bottom-left">
              <StardewCrop type="strawberry" size={16} />
            </div>
          </div>

          {/* Character attributes */}
          <div className="space-y-1.5 font-pixel text-[12px] text-charcoal">
            <div>
              <span className="text-terracotta font-black uppercase tracking-wider">{lang === "vi" ? "TÊN:" : "NAME:"}</span>
              <p className="font-black text-[13.5px] uppercase">Harry Nguyen</p>
            </div>
            <div>
              <span className="text-terracotta font-black uppercase tracking-wider">{lang === "vi" ? "NÔNG TRẠI:" : "FARM:"}</span>
              <p className="font-bold">{lang === "vi" ? "Cánh Đồng Tuyết" : "Snow Field Farm"}</p>
            </div>
            <div>
              <span className="text-terracotta font-black uppercase tracking-wider">{lang === "vi" ? "DANH HIỆU:" : "TITLE:"}</span>
              <p className="font-bold">{lang === "vi" ? "Nghệ nhân gieo hạt" : "Artisan Sower"}</p>
            </div>
          </div>
        </div>

        {/* Section 2: Wealth & Health (Stardew Style Gold & Energy box) */}
        <div className="border-t border-b border-charcoal/10 py-3 my-2.5 space-y-2.5 z-20 font-pixel text-[12px] text-charcoal">
          {/* Gold Funds */}
          <div className="flex justify-between items-center bg-[#ebd9b4]/30 px-3 py-1.5 border border-[#5c3e29]/20 rounded-sm">
            <span className="font-bold flex items-center gap-1">
              {lang === "vi" ? "💰 TÀI SẢN:" : "💰 CURRENT FUNDS:"}
            </span>
            <span className="font-black text-[13.5px] text-charcoal flex items-center gap-0.5">
              9,999,999 <span className="text-gold font-retro font-black drop-shadow-[1px_1px_0px_#2d231e] text-[15px]">g</span>
            </span>
          </div>

          {/* Energy bar */}
          <div className="bg-[#ebd9b4]/30 px-3 py-1.5 border border-[#5c3e29]/20 rounded-sm">
            <div className="flex justify-between items-center mb-1 font-bold">
              <span className="flex items-center gap-1">
                <StardropGif size={18} />
                <span>{lang === "vi" ? "THỂ LỰC:" : "ENERGY:"}</span>
              </span>
              <span>270 / 270</span>
            </div>
            <div className="h-3 w-full border-2 border-charcoal p-0.5 bg-[#2d231e]/10 rounded-sm shadow-inner flex items-center">
              <div className="h-full bg-gradient-to-r from-sage to-[#a7f070] w-full rounded-sm" />
            </div>
          </div>
        </div>

        {/* Section 3: Equipped Gear (Stardew-style active gear slots with SVG logo icons) */}
        <div className="z-20 font-pixel mt-1">
          <span className="text-[11px] font-black uppercase tracking-wider text-terracotta block mb-2 border-b border-charcoal/10 pb-1">
            🛡️ {lang === "vi" ? "TRANG BỊ CHIẾN ĐẤU" : "ACTIVE EQUIPMENT GEAR"}
          </span>

          <div className="grid grid-cols-4 gap-2">
            {/* Slot 1: React */}
            <div className="aspect-square bg-[#ebd9b4]/50 border-2 border-[#5c3e29] rounded-sm flex flex-col items-center justify-center p-1.5 relative group cursor-pointer hover:bg-[#cfb088]/40">
              <TechIcon name="react" size={24} />
              <span className="text-[8px] font-black leading-none text-charcoal/70 mt-1 uppercase text-center">React</span>
              <span className="pointer-events-none absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 bg-charcoal text-[#fcf3d9] text-[9.5px] px-2.5 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap border border-wood-light font-bold font-pixel">
                {lang === "vi" ? "Mũ Lập trình viên React (+3 STR)" : "React Developer Hat (+3 STR)"}
              </span>
            </div>

            {/* Slot 2: Spring Boot */}
            <div className="aspect-square bg-[#ebd9b4]/50 border-2 border-[#5c3e29] rounded-sm flex flex-col items-center justify-center p-1.5 relative group cursor-pointer hover:bg-[#cfb088]/40">
              <TechIcon name="springboot" size={24} />
              <span className="text-[8px] font-black leading-none text-charcoal/70 mt-1 uppercase text-center">Spring</span>
              <span className="pointer-events-none absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 bg-charcoal text-[#fcf3d9] text-[9.5px] px-2.5 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap border border-wood-light font-bold font-pixel">
                {lang === "vi" ? "Nhẫn Spring Boot (+4 INT)" : "Spring Boot Ring (+4 INT)"}
              </span>
            </div>

            {/* Slot 3: TypeScript */}
            <div className="aspect-square bg-[#ebd9b4]/50 border-2 border-[#5c3e29] rounded-sm flex flex-col items-center justify-center p-1.5 relative group cursor-pointer hover:bg-[#cfb088]/40">
              <TechIcon name="typescript" size={24} />
              <span className="text-[8px] font-black leading-none text-charcoal/70 mt-1 uppercase text-center">TS</span>
              <span className="pointer-events-none absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 bg-charcoal text-[#fcf3d9] text-[9.5px] px-2.5 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap border border-wood-light font-bold font-pixel">
                {lang === "vi" ? "Bốt TypeScript (+3 AGI)" : "TypeScript Speed Boots (+3 AGI)"}
              </span>
            </div>

            {/* Slot 4: NestJS */}
            <div className="aspect-square bg-[#ebd9b4]/50 border-2 border-[#5c3e29] rounded-sm flex flex-col items-center justify-center p-1.5 relative group cursor-pointer hover:bg-[#cfb088]/40">
              <TechIcon name="nestjs" size={24} />
              <span className="text-[8px] font-black leading-none text-charcoal/70 mt-1 uppercase text-center">NestJS</span>
              <span className="pointer-events-none absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 bg-charcoal text-[#fcf3d9] text-[9.5px] px-2.5 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap border border-wood-light font-bold font-pixel">
                {lang === "vi" ? "Rìu Khai thác NestJS/API" : "NestJS API Harvesting Axe"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Golden Star on card bottom */}
      <div className="absolute -bottom-1 left-6 z-20">
        <Junimo size={36} color="#d9a04b" />
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Card (with 3D tilt, glare & hanging rope) */}
      <div className="relative hidden min-h-[550px] md:block [perspective:1000px] font-pixel">
        {/* Rope structure hanging the Status Board */}
        <div className="absolute left-[165px] top-0 h-40 w-10 rotate-[-15deg] rounded-full border-[10px] border-[#5c3e29] opacity-90 shadow-md" />

        <motion.div
          ref={cardRef}
          className="absolute left-0 top-24 w-[365px] rotate-[-5deg] cursor-pointer [transform-style:preserve-3d]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1000,
          }}
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {cardContent}
          
          {/* Interactive glare layer */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-10 mix-blend-overlay"
            style={{
              background: glareBackground,
              opacity: glareOpacity,
            }}
          />
        </motion.div>
      </div>

      {/* Mobile Card (Static character stats board) */}
      <div className="block md:hidden w-full max-w-[340px] mx-auto font-pixel">
        {cardContent}
        
        {/* Hover warning notice for mobile */}
        <p className="mt-4 text-center text-[11px] font-bold text-terracotta uppercase tracking-widest animate-pulse px-2">
          {lang === "vi" 
            ? "💡 Xem trên máy tính (di chuột) để xoay Menu Nhân Vật 3D!" 
            : "💡 View on desktop (mouse hover) to rotate 3D Status Menu!"}
        </p>
      </div>
    </>
  );
}
