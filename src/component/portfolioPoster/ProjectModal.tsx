"use client";

import { motion } from "motion/react";
import { useEffect } from "react";
import ProjectGraphic from "./ProjectGraphic";
import { translations } from "./translations";
import { StardewCrop } from "./StardewSprites";

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

      {/* Modal Container (Stardew Scroll Panel style) */}
      <motion.div
        layoutId={`project-${project.id}`}
        className="relative z-10 grid h-full max-h-[85vh] w-full max-w-5xl overflow-hidden panel-stardew text-charcoal md:grid-cols-2 shadow-2xl rounded-sm"
        transition={{ type: "spring", stiffness: 350, damping: 30 }}
      >
        {/* Corners decorations */}
        <div className="stardew-corners absolute inset-0 pointer-events-none z-30" />

        {/* Left Side: Art & Image */}
        <div className="relative flex items-center justify-center p-8 bg-[#cfb088]/15 overflow-hidden border-b-4 md:border-b-0 md:border-r-4 border-[#5c3e29]">
          {/* Watermark crop decoration */}
          <div className="absolute top-4 left-4 z-20 opacity-30">
            <StardewCrop type="pumpkin" size={48} />
          </div>

          <span className="absolute -left-10 -top-10 select-none text-[20rem] font-black leading-none text-[#5c3e29]/5">
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
        <div className="flex flex-col overflow-y-auto p-6 md:p-10 font-pixel bg-[#fcf3d9]">
          {/* Close button (Stardew Style Red button) */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center border-2 border-[#5c3e29] bg-terracotta text-[#fcf3d9] font-retro font-bold text-lg shadow-[2px_2px_0px_rgba(0,0,0,0.15)] hover:scale-105 active:scale-95 cursor-pointer z-50"
            aria-label="Close modal"
          >
            &times;
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ 
              opacity: 1,
              y: 0, 
              scale: 1 
            }}
            transition={{ 
              type: "spring",
              stiffness: 280,
              damping: 18,
              delay: 0.1
            }}
            className="space-y-6"
          >
            <div>
              <span className="font-pixel text-[12px] font-black uppercase tracking-widest text-terracotta">
                {t.projectNo} 0{project.id}
              </span>
              <h2 className="font-pixel text-2xl md:text-[28px] font-black uppercase tracking-tight text-charcoal mt-1 leading-tight">
                {project.title}
              </h2>
            </div>

            <p className="text-[14.5px] leading-relaxed text-charcoal/90 font-medium">
              {project.longDesc}
            </p>

            {/* Tech Tags */}
            <div>
              <h3 className="font-pixel mb-2 text-[14px] font-black uppercase tracking-wider text-terracotta border-b-2 border-charcoal/10 pb-1 flex items-center gap-1">
                <span>⚡</span> {t.technologies}
              </h3>
              <div className="flex flex-wrap gap-1.5 font-pixel text-[12px] pt-1">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-[#5c3e29] bg-[#ebd9b4] px-2 py-0.5 font-bold text-charcoal shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-pixel mb-2 text-[14px] font-black uppercase tracking-wider text-terracotta border-b-2 border-charcoal/10 pb-1 flex items-center gap-1">
                <span>⚔️</span> {t.keyFeatures}
              </h3>
              <ul className="space-y-1.5 text-[14px] text-charcoal/80 font-medium pt-1">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-terracotta font-bold">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links (Stardew Style Wooden Buttons) */}
            <div className="flex flex-wrap gap-4 pt-3 font-pixel">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="stardew-btn px-6 py-2 text-[13px] tracking-wider uppercase flex items-center justify-center"
              >
                {t.viewCode}
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stardew-btn px-6 py-2 text-[13px] tracking-wider uppercase flex items-center justify-center !bg-sage border-[#4e5d42]"
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
