"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Junimo, StardewCrop } from "./StardewSprites";

export default function ProfileHero() {
  return (
    <div className="relative flex min-h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-12 font-pixel">
      <motion.div
        className="relative z-20 flex w-full max-w-[860px] flex-col items-center gap-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="relative w-full rounded-[26px] border-4 border-wood-dark bg-[#8c746a] p-5 shadow-[8px_8px_0_rgba(0,0,0,0.16)]">
          <div className="absolute left-5 top-5 h-4 w-4 rounded-full bg-[#d5b19a] shadow-inner" />
          <div className="absolute right-5 top-5 h-4 w-4 rounded-full bg-[#d5b19a] shadow-inner" />
          <div className="rounded-[20px] border-4 border-wood-light bg-[#fbf5f0] px-7 py-6 text-center shadow-inner">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#5c413c] opacity-90">
              Welcome to Pelican Town
            </p>
            <h1 className="mt-4 text-4xl font-retro uppercase tracking-[0.22em] text-charcoal drop-shadow-[2px_2px_0_rgba(0,0,0,0.25)] md:text-5xl">
              Harry Portfolio
            </h1>
            <p className="mt-3 max-w-[640px] text-sm leading-6 text-charcoal/90 md:text-base">
              A Stardew-inspired developer showcase with pixel-perfect charm,
              warm wooden panels, and honest codecraft.
            </p>
          </div>
        </div>

        <div className="relative w-full rounded-[28px] border-4 border-wood-dark bg-[#fbf5f0] p-5 shadow-[10px_10px_0_rgba(0,0,0,0.16)] md:p-6">
          <div className="absolute -left-6 top-10 z-10">
            <Junimo size={48} color="#7e999c" />
          </div>
          <div className="absolute -right-6 top-16 z-10">
            <StardewCrop type="strawberry" size={40} />
          </div>
          <div className="absolute left-8 bottom-6 z-10">
            <StardewCrop type="pumpkin" size={40} />
          </div>

          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="order-2 mt-3 md:order-1 md:mt-0">
              <div className="rounded-[22px] border-4 border-wood-light bg-[#f7efe4] p-4 shadow-inner">
                <div className="relative overflow-hidden rounded-[18px] border-4 border-wood-dark bg-charcoal/10 aspect-[4/5]">
                  <Image
                    src="/animeavatar.png"
                    alt="Harry avatar"
                    fill
                    priority
                    sizes="(min-width: 512px) 210px, (min-width: 384px) 280px, 140px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="rounded-[22px] border-4 border-wood-light bg-[#f7efe4] p-5 shadow-inner">
                <p className="text-sm leading-7 text-charcoal md:text-base">
                  I craft interfaces with warm color palettes, playful details,
                  and a grounded layout so content reads clearly at every step.
                </p>
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  <div className="stardew-quest-paper rounded-[14px] px-4 py-3 text-[11px] uppercase tracking-[0.27em] text-charcoal">
                    Stardew style
                  </div>
                  <div className="stardew-quest-paper rounded-[14px] px-4 py-3 text-[11px] uppercase tracking-[0.27em] text-charcoal">
                    Clean layout
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
