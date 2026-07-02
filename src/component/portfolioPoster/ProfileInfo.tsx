"use client";

import { skills } from "./data";
import { translations } from "./translations";
import { StardewCrop, Junimo, TechIcon, StardropGif } from "./StardewSprites";

export default function ProfileInfo({ lang }: { lang: "vi" | "en" }) {
  const t = translations[lang];

  return (
    <div className="space-y-8 font-retro text-charcoal">
      {/* RPG Profile Header */}
      <div>
        <span className="text-base font-bold uppercase tracking-[0.2em] text-terracotta font-pixel">
          [ {lang === "vi" ? "THÔNG TIN NGHỆ NHÂN" : "ARTISAN STATUS"} ]
        </span>
        <h1 className="text-3xl font-extrabold tracking-wider uppercase text-charcoal mt-1.5 drop-shadow-[2px_2px_0px_rgba(255,255,255,0.4)] font-pixel md:text-4xl">
          HARRY NGUYEN (YEAR 02)
        </h1>
        <p className="text-[15px] uppercase tracking-[0.1em] text-sage font-bold font-pixel mt-1">
          {lang === "vi" ? "Lớp nhân vật: Nghệ nhân Lập trình Sáng tạo" : "Class: Creative Software Artisan"}
        </p>

        {/* Bio Dialogue Box (Stardew style conversation box) */}
        <div className="mt-5 panel-stardew p-5 font-pixel text-[15px] leading-relaxed shadow-lg text-charcoal select-text relative">
          <div className="stardew-corners absolute inset-0 pointer-events-none" />
          
          {/* Decorative Little Junimo inside dialogue box */}
          <div className="absolute -top-3.5 -right-3.5 z-25 scale-90">
            <Junimo size={34} color="#b85b46" />
          </div>

          <div className="flex gap-4 items-start">
            {/* Dialogue Portrait Frame */}
            <div className="hidden sm:block shrink-0 w-16 h-16 bg-[#ebd9b4] border-2 border-[#5c3e29] outline-2 outline-charcoal overflow-hidden shadow-inner relative">
              <img
                src="/animeavatar.png"
                alt="Harry Portrait"
                className="object-cover w-full h-full scale-105 pointer-events-none"
              />
            </div>
            
            {/* Conversation text */}
            <div className="flex-1">
              <p className="font-bold text-charcoal/90">
                {t.aboutDesc}
              </p>
              
              {/* Dialogue flashing pointer arrow */}
              <div className="absolute bottom-2.5 right-4 w-3 h-2 bg-[#d9a04b] animate-bounce" style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Attributes Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 font-pixel">

        {/* Col 1: Attributes/Stats (Farming Skills) */}
        <div className="panel-stardew p-5 shadow-md">
          <div className="stardew-corners absolute inset-0 pointer-events-none" />
          <h2 className="mb-4 text-base font-bold uppercase tracking-wider text-charcoal border-b-2 border-charcoal/10 pb-1.5 font-pixel flex items-center gap-1.5">
            <StardropGif size={20} /> {lang === "vi" ? "CẤP ĐỘ KỸ NĂNG" : "SKILL LEVELS"}
          </h2>

          <div className="space-y-4 text-[13px] font-bold">
            {/* Farming (React / Next.js) */}
            <div>
              <div className="flex justify-between mb-1">
                <span>{lang === "vi" ? "TRỒNG TRỌT" : "FARMING"} (REACT/NEXT)</span>
                <span className="text-sage">8/10</span>
              </div>
              <div className="h-4 w-full border-2 border-charcoal p-0.5 bg-[#ebd9b4]/50 shadow-inner">
                <div className="h-full bg-sage w-[80%]" />
              </div>
            </div>

            {/* Mining (Spring Boot) */}
            <div>
              <div className="flex justify-between mb-1">
                <span>{lang === "vi" ? "KHAI MỎ" : "MINING"} (SPRING BOOT)</span>
                <span className="text-gold">8/10</span>
              </div>
              <div className="h-4 w-full border-2 border-charcoal p-0.5 bg-[#ebd9b4]/50 shadow-inner">
                <div className="h-full bg-gold w-[80%]" />
              </div>
            </div>

            {/* Foraging (NestJS / TS) */}
            <div>
              <div className="flex justify-between mb-1">
                <span>{lang === "vi" ? "HÁI LƯỢM" : "FORAGING"} (NESTJS/TS)</span>
                <span className="text-ochre">8/10</span>
              </div>
              <div className="h-4 w-full border-2 border-charcoal p-0.5 bg-[#ebd9b4]/50 shadow-inner">
                <div className="h-full bg-ochre w-[80%]" />
              </div>
            </div>

            {/* Fishing (Swift / iOS) */}
            <div>
              <div className="flex justify-between mb-1">
                <span>{lang === "vi" ? "CÂU CÁ" : "FISHING"} (SWIFT/IOS)</span>
                <span className="text-terracotta">6/10</span>
              </div>
              <div className="h-4 w-full border-2 border-charcoal p-0.5 bg-[#ebd9b4]/50 shadow-inner">
                <div className="h-full bg-terracotta w-[60%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Col 2: Quest Log (Farm Journal) */}
        <div className="panel-stardew p-5 shadow-md">
          <div className="stardew-corners absolute inset-0 pointer-events-none" />
          <h2 className="mb-4 text-base font-bold uppercase tracking-wider text-charcoal border-b-2 border-charcoal/10 pb-1.5 font-pixel flex items-center gap-1.5">
            <span>📜</span> {t.journey}
          </h2>

          <div className="space-y-4 text-[13px] font-pixel">
            <div>
              <h3 className="font-retro text-[15px] font-black text-terracotta">
                2024 - {lang === "vi" ? "NHẬP MÔN CANH TÁC" : "FARMING INITIATION"}
              </h3>
              <p className="text-charcoal/80 mt-1 leading-relaxed">
                {lang === "vi" ? "Gieo hạt mầm Java, Spring Boot và khai khoáng cơ sở dữ liệu." : "Planted Java, Spring Boot and database design seeds."}
              </p>
            </div>

            <div>
              <h3 className="font-retro text-[15px] font-black text-terracotta">
                2025 - {lang === "vi" ? "THU HOẠCH FULLSTACK" : "FULLSTACK HARVEST"}
              </h3>
              <p className="text-charcoal/80 mt-1 leading-relaxed">
                {lang === "vi" ? "Chăm bón cho các cây trồng React, Redux, PostgreSQL và xây lắp hệ thống." : "Cultivated React, Redux, PostgreSQL and built enterprise tools."}
              </p>
            </div>

            <div>
              <h3 className="font-retro text-[15px] font-black text-terracotta">
                2026 - {lang === "vi" ? "NGHỆ NHÂN CÀI ĐẶT" : "ARTISAN COMPILER"}
              </h3>
              <p className="text-charcoal/80 mt-1 leading-relaxed">
                {lang === "vi" ? "Thiết kế Next.js, NestJS, MongoDB và lai tạo website sáng tạo." : "Designed Next.js, NestJS, MongoDB and bred creative portfolios."}
              </p>
            </div>
          </div>
        </div>

        {/* Col 3: Inventory & Equipment (Stardew Inventory Grid style) */}
        <div className="panel-stardew p-5 shadow-md">
          <div className="stardew-corners absolute inset-0 pointer-events-none" />
          <h2 className="mb-4 text-base font-bold uppercase tracking-wider text-charcoal border-b-2 border-charcoal/10 pb-1.5 font-pixel flex items-center gap-1.5">
            <span>🎒</span> {lang === "vi" ? "RƯƠNG HÀNH TRANG" : "STORAGE CHEST"}
          </h2>

          {/* Contact coordinates list */}
          <div className="space-y-2.5 text-[13px] leading-relaxed mb-4">
            <p>
              <span className="text-terracotta font-black">GITHUB:</span>{" "}
              <a
                href="https://github.com/NguyenTuan6678"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline font-pixel font-bold text-sage"
              >
                NguyenTuan6678
              </a>
            </p>
            <p>
              <span className="text-terracotta font-black">EMAIL:</span>{" "}
              <span className="font-bold">canhdongtuyet39@gmail.com</span>
            </p>
            <p>
              <span className="text-terracotta font-black">MAP:</span>{" "}
              <span className="font-bold">{lang === "vi" ? "Việt Nam" : "Vietnam"}</span>
            </p>
          </div>

          <h3 className="mb-2 mt-4 text-[12px] font-black uppercase tracking-wider text-sage border-t border-charcoal/10 pt-2.5 flex items-center gap-1">
            <span>🎒</span> {lang === "vi" ? "VẬT PHẨM TRANG BỊ" : "EQUIPPED ITEMS"}
          </h3>

          {/* Stardew Valley 12-Slot Inventory Grid Layout (Showing tech logo pixel art instead of long text) */}
          <div className="grid grid-cols-4 gap-1.5">
            {skills.map((skill) => (
              <div
                key={skill}
                className="aspect-square bg-[#ebd9b4]/50 border-2 border-[#5c3e29] hover:bg-[#cfb088]/40 hover:border-charcoal transition-all rounded-sm flex items-center justify-center p-1.5 text-center shadow-inner relative group cursor-pointer"
              >
                {/* Logo SVG Pixel Art */}
                <TechIcon name={skill} size={26} />
                
                {/* Floating tooltip on hover (Parchment Paper style) */}
                <span className="pointer-events-none absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 bg-charcoal text-[#fcf3d9] text-[9.5px] px-2.5 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap border border-wood-light font-bold font-pixel">
                  {skill}
                </span>
              </div>
            ))}
            
            {/* Empty inventory slots to make up the 12 slots typical of first row in Stardew */}
            {Array.from({ length: Math.max(0, 12 - skills.length) }).map((_, i) => (
              <div
                key={`empty-${i}`}
                className="aspect-square bg-[#ebd9b4]/25 border-2 border-[#5c3e29]/40 rounded-sm shadow-inner"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
