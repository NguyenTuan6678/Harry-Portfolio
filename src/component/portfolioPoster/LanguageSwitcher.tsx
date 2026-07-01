"use client";

type LanguageSwitcherProps = {
  lang: "vi" | "en";
  onChange: (lang: "vi" | "en") => void;
};

export default function LanguageSwitcher({ lang, onChange }: LanguageSwitcherProps) {
  return (
    <div className="fixed top-6 right-6 z-[90] flex items-center gap-1.5 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-md backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/70">
      <button
        onClick={() => onChange("en")}
        className={`cursor-pointer transition-colors ${
          lang === "en"
            ? "text-black dark:text-white font-extrabold"
            : "text-black/35 dark:text-white/35 hover:text-black/70 dark:hover:text-white/70"
        }`}
      >
        EN
      </button>
      <span className="text-black/20 dark:text-white/20 select-none">|</span>
      <button
        onClick={() => onChange("vi")}
        className={`cursor-pointer transition-colors ${
          lang === "vi"
            ? "text-black dark:text-white font-extrabold"
            : "text-black/35 dark:text-white/35 hover:text-black/70 dark:hover:text-white/70"
        }`}
      >
        VI
      </button>
    </div>
  );
}
