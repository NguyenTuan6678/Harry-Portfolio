"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projects as baseProjects } from "./data";
import { translations } from "./translations";
import ProjectModal from "./ProjectModal";
import ProjectGraphic from "./ProjectGraphic";

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
    <div className="w-full max-w-7xl font-retro">
      {/* Retro Stage Select Header */}
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 1.1 }}
        whileInView={{ 
          opacity: [0, 1, 0.3, 1, 0.7, 1], // CRT flicker
          y: 0,
          scale: 1 
        }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ 
          opacity: { duration: 0.4, times: [0, 0.1, 0.2, 0.3, 0.4, 1] },
          y: { type: "spring", stiffness: 240, damping: 12 },
          scale: { type: "spring", stiffness: 240, damping: 12 }
        }}
        className="relative mb-14 text-center"
      >
        <h2 className="font-pixel text-5xl font-extrabold uppercase tracking-wider text-gold drop-shadow-[3px_3px_0px_#3c2428] md:text-7xl">
          {lang === "vi" ? "CHỌN MÀN CHƠI" : "STAGE SELECT"}
        </h2>
        <span className="text-base text-terracotta font-bold tracking-[0.15em] uppercase mt-4 inline-block animate-pulse font-pixel">
          [ {lang === "vi" ? "LỰA CHỌN DỰ ÁN ĐỂ XEM CHI TIẾT" : "SELECT A LEVEL TO EXPLORE"} ]
        </span>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-5 font-pixel">
        {localizedProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.7, y: 50 }}
            whileInView={{ 
              opacity: [0, 1, 0.4, 1, 0.8, 1], // CRT flicker
              scale: 1, 
              y: 0 
            }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ 
              opacity: { duration: 0.4, times: [0, 0.15, 0.3, 0.45, 0.6, 1], delay: idx * 0.07 },
              scale: { type: "spring", stiffness: 260, damping: 14, delay: idx * 0.07 },
              y: { type: "spring", stiffness: 260, damping: 14, delay: idx * 0.07 }
            }}
          >
            <motion.article
              layoutId={`project-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="group relative min-h-130 cursor-pointer overflow-hidden p-5 bg-[#faf8f1] dark:bg-[#42383F] text-charcoal dark:text-sand border-retro-thick border-charcoal dark:border-sand shadow-retro-pixel transition-all"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Background watermarked level ID */}
              <span className="absolute right-4 top-2 select-none text-[8rem] font-retro font-black leading-none text-charcoal/5 dark:text-sand/5">
                0{project.id}
              </span>

              {/* Level graphic illustration */}
              <div className="relative mx-auto mt-6 h-52 w-full transition-transform duration-500 group-hover:scale-105 flex items-center justify-center border border-retro-thick border-charcoal/10 dark:border-sand/10 bg-black/5 dark:bg-white/5 rounded-sm p-2">
                <ProjectGraphic id={project.id} className="max-h-full max-w-full" />
              </div>

              {/* Bottom details */}
              <div className="mt-6 flex flex-col items-start font-pixel">
                <span className="text-[13px] font-bold uppercase tracking-wider text-terracotta">
                  LEVEL 0{project.id}
                </span>

                <h3 className="mt-1.5 text-[20px] font-bold uppercase tracking-wide text-black dark:text-sand leading-tight">
                  {project.title}
                </h3>

                <p className="mt-2.5 text-[15px] leading-relaxed text-black/75 dark:text-sand/75">
                  {project.desc}
                </p>

                <span className="mt-4 inline-block text-[14px] font-bold tracking-wider text-terracotta dark:text-gold group-hover:text-gold dark:group-hover:text-terracotta border-b border-dashed border-terracotta dark:border-gold pb-0.5 transition-colors cursor-pointer">
                  [ {t.viewDetail.replace(" →", "")} ]
                </span>
              </div>
            </motion.article>
          </motion.div>
        ))}
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
