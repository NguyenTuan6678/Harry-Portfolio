"use client";

import { motion } from "motion/react";
import { useEffect } from "react";
import ProjectGraphic from "./ProjectGraphic";
import { translations } from "./translations";

type Project = {
  id: string;
  title: string;
  desc: string;
  longDesc: string;
  image: string;
  bg: string;
  github: string;
  demo?: string;
  tech: string[];
  features: string[];
};

type ProjectModalProps = {
  project: Project;
  lang: "vi" | "en";
  onClose: () => void;
};

export default function ProjectModal({ project, lang, onClose }: ProjectModalProps) {
  const t = translations[lang];

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 font-retro">
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal Container (RPG Dialog Box) */}
      <motion.div
        layoutId={`project-${project.id}`}
        className="relative z-10 grid h-full max-h-[85vh] w-full max-w-5xl overflow-hidden border-retro-double border-ochre bg-[#faf8f1] text-[#111111] dark:bg-[#42383F] dark:text-[#f5f5f7] md:grid-cols-2 shadow-retro-pixel rounded-sm"
        transition={{ type: "spring", stiffness: 350, damping: 30 }}
      >
        {/* Left Side: Art & Image */}
        <div className="relative flex items-center justify-center p-8 bg-charcoal/5 dark:bg-black/25 overflow-hidden border-b-4 md:border-b-0 md:border-r-4 border-charcoal dark:border-sand">
          {/* Retro numbers watermark */}
          <span className="absolute -left-10 -top-10 select-none text-[20rem] font-black leading-none text-charcoal/5 dark:text-sand/5">
            {project.id}
          </span>

          <motion.div
            className="relative h-64 w-full max-w-sm md:h-80 flex items-center justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            <ProjectGraphic id={project.id} className="max-h-full max-w-full" />
          </motion.div>
        </div>

        {/* Right Side: Content Details */}
        <div className="flex flex-col overflow-y-auto p-6 md:p-10 font-pixel">
          {/* Close button (Square Retro Button) */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center border-2 border-retro-thick border-charcoal bg-terracotta text-white font-retro font-bold text-sm shadow-retro-pixel-sm transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none cursor-pointer"
            aria-label="Close modal"
          >
            &times;
          </button>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ 
              opacity: [0, 1, 0.5, 1], // quick neon/CRT blink
              y: 0, 
              scale: 1 
            }}
            transition={{ 
              opacity: { duration: 0.3, times: [0, 0.15, 0.3, 1], delay: 0.15 },
              y: { type: "spring", stiffness: 300, damping: 18, delay: 0.15 },
              scale: { type: "spring", stiffness: 300, damping: 18, delay: 0.15 }
            }}
            className="space-y-6"
          >
            <div>
              <span className="font-pixel text-[13px] font-bold uppercase tracking-widest text-terracotta">
                {t.projectNo} 0{project.id}
              </span>
              <h2 className="font-pixel text-24px md:text-[30px] font-bold uppercase tracking-tight text-black dark:text-sand mt-1.5">
                {project.title}
              </h2>
            </div>

            <p className="text-[16px] leading-relaxed text-black/75 dark:text-white/75 font-pixel">
              {project.longDesc}
            </p>

            {/* Tech Tags */}
            <div>
              <h3 className="font-pixel mb-2.5 text-[15px] font-bold uppercase tracking-wider text-terracotta border-b border-ochre/20 pb-1">
                ⚡ {t.technologies}
              </h3>
              <div className="flex flex-wrap gap-1.5 font-pixel text-[13px]">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-ochre bg-charcoal/10 dark:bg-white/10 px-2 py-0.5 font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-pixel mb-2.5 text-[15px] font-bold uppercase tracking-wider text-terracotta border-b border-ochre/20 pb-1">
                ⚔️ {t.keyFeatures}
              </h3>
              <ul className="space-y-2 text-[15px] text-black/70 dark:text-white/70 font-pixel">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-terracotta font-pixel font-bold">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links (Retro Clickable Buttons) */}
            <div className="flex flex-wrap gap-3 pt-4 font-pixel">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-retro-thick border-charcoal bg-gold px-6 py-3 text-[14px] font-bold text-charcoal hover:bg-gold/85 hover:translate-y-0.5 active:translate-y-1 dark:border-sand dark:text-charcoal shadow-retro-pixel-sm cursor-pointer"
              >
                {t.viewCode}
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-2 border-retro-thick border-charcoal bg-sage px-6 py-3 text-[14px] font-bold text-charcoal hover:bg-sage/85 hover:translate-y-0.5 active:translate-y-1 dark:border-sand dark:text-charcoal shadow-retro-pixel-sm cursor-pointer"
                >
                  {t.tryDemo}
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
