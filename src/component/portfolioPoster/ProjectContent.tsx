"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projects as baseProjects } from "./data";
import { translations } from "./translations";
import ProjectModal from "./ProjectModal";
import ProjectGraphic from "./ProjectGraphic";
import { Junimo } from "./StardewSprites";

type Project = {
  id: string;
  title: string;
  desc: string;
  longDesc: string;
  image: string;
  bg: string;
  github: string;
  tech: string[];
  features: string[];
  demo?: string;
};

export default function ProjectContent({ lang }: { lang: "vi" | "en" }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const t = translations[lang];

  // Combine localized text data with base asset details
  const localizedProjects: Project[] = t.projects.map((proj) => {
    const base = baseProjects.find((p) => p.id === proj.id);
    return {
      ...proj,
      image: base?.image || "",
      bg: base?.bg || "bg-zinc-500",
      github: base?.github || "",
      demo: base?.demo,
    };
  });

  return (
    <div className="w-full max-w-7xl font-retro relative">
      
      {/* Wooden Board roof decoration */}
      <div className="absolute -top-6 left-6 right-6 h-6 bg-[#4a3020] border-4 border-charcoal rounded-t-md shadow-md z-25 flex justify-around">
        {/* Moss pixel patches on roof */}
        <div className="w-20 h-4 bg-sage/60 rounded-b-md" />
        <div className="w-32 h-3 bg-sage/50 rounded-b-md" />
        <div className="w-16 h-5 bg-sage/70 rounded-b-md" />
      </div>

      {/* Main Wooden Board "Help Wanted Board" Container */}
      <div className="stardew-board p-8 md:p-12 rounded-md">
        
        {/* Cute Green Junimo standing next to the board header */}
        <div className="absolute -top-12 right-12 z-30">
          <Junimo size={46} color="#708a5b" />
        </div>

        {/* Retro Stage Select Header */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 1.05 }}
          whileInView={{ 
            opacity: 1,
            y: 0,
            scale: 1 
          }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ 
            type: "spring",
            stiffness: 180,
            damping: 14
          }}
          className="relative mb-12 text-center"
        >
          {/* Header Title resembling Stardew Pelican Town board title */}
          <h2 className="font-pixel text-4xl font-black uppercase tracking-wider text-[#bd5d38] drop-shadow-[2px_2px_0px_#fcf3d9] md:text-6xl">
            {t.projectsTitle}
          </h2>
          <span className="text-sm text-[#fcf3d9] font-bold tracking-[0.18em] uppercase mt-2.5 inline-block animate-pulse font-pixel bg-[#5c3e29]/35 px-4 py-1 rounded">
            {lang === "vi" ? "● BẢNG NHẬN NHIỆM VỤ NÔNG TRẠI ●" : "● PELICAN TOWN HELP WANTED ●"}
          </span>
        </motion.div>

        {/* Board grid of Quest Papers */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 font-pixel">
          {localizedProjects.map((project, idx) => {
            // Slight random rotation for paper effect
            const rotateDeg = idx % 2 === 0 ? (idx % 3 === 0 ? 1.5 : -1) : 2;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0 
                }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: idx * 0.08 
                }}
              >
                <motion.article
                  layoutId={`project-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="stardew-quest-paper cursor-pointer p-5 flex flex-col justify-between min-h-[360px]"
                  style={{ transform: `rotate(${rotateDeg}deg)` }}
                  whileHover={{ 
                    y: -8, 
                    rotate: 0,
                    scale: 1.03
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                >
                  {/* Push Pin (Đinh ghim giấy màu đỏ) */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-terracotta border-2 border-charcoal rounded-full shadow-md z-30 flex items-center justify-center">
                    {/* Highlight dot on push pin */}
                    <div className="w-1 h-1 bg-white rounded-full absolute top-0.5 left-0.5" />
                  </div>

                  {/* Top stamp mark */}
                  <div className="w-full flex justify-between items-center text-[10px] font-bold text-charcoal/40 uppercase tracking-widest border-b border-dashed border-charcoal/10 pb-2">
                    <span>PELICAN TOWN</span>
                    <span>Q0{project.id}</span>
                  </div>

                  {/* Level graphic illustration */}
                  <div className="relative mx-auto mt-4 h-32 w-full flex items-center justify-center border border-charcoal/15 bg-[#ebd9b4]/30 rounded-sm p-1">
                    <ProjectGraphic id={project.id} className="max-h-full max-w-full" />
                  </div>

                  {/* Bottom details */}
                  <div className="mt-4 flex flex-col items-start font-pixel">
                    <span className="text-[11px] font-black uppercase tracking-wider text-terracotta">
                      {lang === "vi" ? `NHIỆM VỤ 0${project.id}` : `QUEST 0${project.id}`}
                    </span>

                    <h3 className="mt-1 text-[17px] font-black uppercase tracking-wide text-charcoal leading-tight">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-[12.5px] leading-relaxed text-charcoal/80 font-medium">
                      {project.desc}
                    </p>

                    <span className="mt-4 inline-block text-[12px] font-black tracking-wider text-sage hover:text-terracotta border-b-2 border-dashed border-sage/60 pb-0.5 transition-colors cursor-pointer">
                      {t.viewDetail}
                    </span>
                  </div>
                </motion.article>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Shared Layout Modal Detail */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            lang={lang}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
