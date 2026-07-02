"use client";

type LanguageSwitcherProps = {
  lang: "vi" | "en";
  onChange: (lang: "vi" | "en") => void;
};

export default function LanguageSwitcher({ lang, onChange }: LanguageSwitcherProps) {
  return (
    <div className="fixed top-6 right-6 z-[90] flex items-center gap-2 border-3 border-[#5c3e29] outline-1 outline-[#2d231e] bg-[#cfb088] px-3 py-1.5 font-pixel text-[11px] font-bold shadow-[3px_3px_0px_rgba(0,0,0,0.15)] text-[#2d231e]">
      <button
        onClick={() => onChange("en")}
        className={`cursor-pointer transition-colors ${
          lang === "en"
            ? "text-terracotta font-extrabold underline decoration-2 underline-offset-4"
            : "text-[#2d231e]/55 hover:text-[#2d231e]"
        }`}
      >
        EN
      </button>
      <span className="text-[#2d231e]/30 select-none">|</span>
      <button
        onClick={() => onChange("vi")}
        className={`cursor-pointer transition-colors ${
          lang === "vi"
            ? "text-terracotta font-extrabold underline decoration-2 underline-offset-4"
            : "text-[#2d231e]/55 hover:text-[#2d231e]"
        }`}
      >
        VI
      </button>
    </div>
  );
}
