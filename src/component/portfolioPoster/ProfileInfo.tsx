import { skills } from "./data";
import { translations } from "./translations";

export default function ProfileInfo({ lang }: { lang: "vi" | "en" }) {
  const t = translations[lang];

  return (
    <div className="space-y-8 font-retro text-charcoal dark:text-sand">
      {/* RPG Profile Header */}
      <div>
        <span className="text-base font-bold uppercase tracking-[0.2em] text-terracotta font-pixel">
          [ {lang === "vi" ? "THÔNG TIN NHÂN VẬT" : "CHARACTER STATUS"} ]
        </span>
        <h1 className="text-3xl font-extrabold tracking-wider uppercase text-terracotta dark:text-gold mt-1 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.15)] font-pixel md:text-4xl">
          HARRY NGUYEN (LVL 24)
        </h1>
        <p className="text-[16px] uppercase tracking-[0.1em] text-sage font-bold font-pixel mt-1">
          {lang === "vi" ? "Lớp nhân vật: Lập trình viên Sáng tạo" : "Class: Creative Developer"}
        </p>

        {/* Bio Dialogue Box */}
        <div className="mt-4 border-retro-double border-ochre bg-[#D3CAAC]/40 dark:bg-[#53464C]/30 p-4 font-pixel text-[16px] leading-relaxed rounded shadow-retro-pixel-sm text-black/85 dark:text-white/85">
          {t.aboutDesc}
        </div>
      </div>

      {/* Main Attributes Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

        {/* Col 1: Attributes/Stats */}
        <div className="border-retro-double border-ochre/50 bg-[#D3CAAC]/10 dark:bg-[#53464C]/10 p-5 rounded">
          <h2 className="mb-4 text-lg font-bold uppercase tracking-wider text-terracotta border-b border-ochre/30 pb-1.5 font-pixel">
            ⚡ {lang === "vi" ? "THÔNG SỐ / KỸ NĂNG" : "ATTRIBUTES / STATS"}
          </h2>

          <div className="space-y-4 text-[15px]">
            {/* STR */}
            <div>
              <div className="flex justify-between font-bold mb-1">
                <span>STR [TS / NESTJS]</span>
                <span className="text-terracotta dark:text-gold">80/100</span>
              </div>
              <div className="h-4 w-full border border-charcoal dark:border-sand p-0.5 bg-charcoal/20">
                <div className="h-full bg-muted-olive w-[80%]" />
              </div>
            </div>

            {/* AGI */}
            <div>
              <div className="flex justify-between font-bold mb-1">
                <span>AGI [REACT / NEXT]</span>
                <span className="text-terracotta dark:text-gold">70/100</span>
              </div>
              <div className="h-4 w-full border border-charcoal dark:border-sand p-0.5 bg-charcoal/20">
                <div className="h-full bg-sage w-[70%]" />
              </div>
            </div>

            {/* INT */}
            <div>
              <div className="flex justify-between font-bold mb-1">
                <span>INT [SPRING BOOT]</span>
                <span className="text-terracotta dark:text-gold">80/100</span>
              </div>
              <div className="h-4 w-full border border-charcoal dark:border-sand p-0.5 bg-charcoal/20">
                <div className="h-full bg-ochre w-[80%]" />
              </div>
            </div>

            {/* LUK */}
            <div>
              <div className="flex justify-between font-bold mb-1">
                <span>LUK [SWIFT / IOS]</span>
                <span className="text-terracotta dark:text-gold">60/100</span>
              </div>
              <div className="h-4 w-full border border-charcoal dark:border-sand p-0.5 bg-charcoal/20">
                <div className="h-full bg-terracotta w-[60%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Col 2: Quest Log (Journey) */}
        <div className="border-retro-double border-ochre/50 bg-[#D3CAAC]/10 dark:bg-[#53464C]/10 p-5 rounded">
          <h2 className="mb-4 text-lg font-bold uppercase tracking-wider text-terracotta border-b border-ochre/30 pb-1.5 font-pixel">
            📜 {lang === "vi" ? "NHẬT KÝ NHIỆM VỤ" : "QUEST LOG / JOURNEY"}
          </h2>

          <div className="space-y-4 text-[14px] font-pixel">
            <div>
              <h3 className="font-retro text-[16px] font-bold text-terracotta dark:text-gold">2024 - JAVA APPRENTICE</h3>
              <p className="text-black/70 dark:text-white/70 mt-1 leading-5">
                {lang === "vi" ? "Java, Spring Boot, thiết kế cơ sở dữ liệu" : "Java, Spring Boot, database design"}
              </p>
            </div>

            <div>
              <h3 className="font-retro text-[16px] font-bold text-terracotta dark:text-gold">2025 - FULLSTACK JOURNEYMAN</h3>
              <p className="text-black/70 dark:text-white/70 mt-1 leading-5">
                {lang === "vi" ? "React, Redux, PostgreSQL, ứng dụng fullstack" : "React, Redux, PostgreSQL, fullstack apps"}
              </p>
            </div>

            <div>
              <h3 className="font-retro text-[16px] font-bold text-terracotta dark:text-gold">2026 - CREATIVE ARTISAN</h3>
              <p className="text-black/70 dark:text-white/70 mt-1 leading-5">
                {lang === "vi" ? "Next.js, NestJS, MongoDB, portfolio sáng tạo" : "Next.js, NestJS, MongoDB, creative portfolio"}
              </p>
            </div>
          </div>
        </div>

        {/* Col 3: Inventory & Equipment (Skills / Contact) */}
        <div className="border-retro-double border-ochre/50 bg-[#D3CAAC]/10 dark:bg-[#53464C]/10 p-5 rounded">
          <h2 className="mb-4 text-lg font-bold uppercase tracking-wider text-terracotta border-b border-ochre/30 pb-1.5 font-pixel">
            🎒 {lang === "vi" ? "HÀNH TRANG & LIÊN HỆ" : "INVENTORY / CONTACT"}
          </h2>

          <div className="space-y-3 text-[14px] leading-5">
            <p>
              <span className="text-terracotta dark:text-gold font-bold">GITHUB:</span>{" "}
              <a
                href="https://github.com/NguyenTuan6678"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline font-pixel font-bold"
              >
                NguyenTuan6678
              </a>
            </p>
            <p>
              <span className="text-terracotta dark:text-gold font-bold">EMAIL:</span>{" "}
              <span className="font-pixel">canhdongtuyet39@gmail.com</span>
            </p>
            <p>
              <span className="text-terracotta dark:text-gold font-bold">MAP:</span>{" "}
              <span className="font-pixel">{lang === "vi" ? "Việt Nam" : "Vietnam"}</span>
            </p>
          </div>

          <h3 className="mb-2 mt-4 text-[13px] font-bold uppercase tracking-wider text-sage">
            ⚔️ {lang === "vi" ? "TRANG BỊ PHỤ TRỢ" : "EQUIPPED SKILLS"}
          </h3>

          <div className="flex flex-wrap gap-1.5 font-pixel text-[12px]">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded border border-ochre bg-charcoal/10 dark:bg-white/10 px-2 py-0.5 font-bold text-black/85 dark:text-white/85 shadow-retro-pixel-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
