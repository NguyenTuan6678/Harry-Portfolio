import { motion } from "motion/react";
import ProfileHero from "./ProfileHero";
import LanyardCard from "./LanyardCard";
import ProfileInfo from "./ProfileInfo";
import ProjectContent from "./ProjectContent";
import DeveloperConsole from "./DeveloperConsole";
import { translations } from "./translations";

export default function PortfolioPoster({ lang }: { lang: "vi" | "en" }) {
  const t = translations[lang];

  return (
    <div className="bg-transparent text-charcoal transition-colors duration-300">
      {/* Section 1: Hero Poster */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 border-b-4 border-dashed border-[#5c3e29]/15">
        <ProfileHero />
      </section>

      {/* Section 2: Profile Info */}
      <section
        id="about"
        className="relative flex min-h-screen items-center justify-center px-6 py-20 border-b-4 border-dashed border-[#5c3e29]/15"
      >
        <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-[450px_1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: -50 }}
            whileInView={{ 
              opacity: 1,
              scale: 1, 
              x: 0 
            }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ 
              type: "spring",
              stiffness: 150,
              damping: 15
            }}
          >
            <LanyardCard lang={lang} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 50 }}
            whileInView={{ 
              opacity: 1,
              scale: 1, 
              x: 0 
            }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ 
              type: "spring",
              stiffness: 150,
              damping: 15,
              delay: 0.1
            }}
          >
            <ProfileInfo lang={lang} />
          </motion.div>
        </div>
      </section>

      {/* Section 3: Projects */}
      <section
        id="projects"
        className="relative flex min-h-screen items-center justify-center px-6 py-20 border-b-4 border-dashed border-[#5c3e29]/15"
      >
        <ProjectContent lang={lang} />
      </section>

      {/* Section 4: Interactive Playground */}
      <section
        id="playground"
        className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20"
      >
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
          className="mb-10 text-center font-retro"
        >
          <h2 className="font-pixel text-4xl font-extrabold uppercase tracking-wider text-gold drop-shadow-[3px_3px_0px_var(--color-charcoal)] md:text-6xl">
            {t.consoleTitle}
          </h2>
          <p className="mt-4 text-xs font-pixel font-bold uppercase tracking-[0.2em] text-terracotta animate-pulse bg-[#5c3e29]/10 px-4 py-1.5 rounded">
            [ {t.consoleSubtitle} ]
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ 
            opacity: 1,
            scale: 1,
            y: 0
          }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ 
            type: "spring",
            stiffness: 160,
            damping: 15,
            delay: 0.1
          }}
          className="w-full flex justify-center"
        >
          <DeveloperConsole lang={lang} />
        </motion.div>
      </section>
    </div>
  );
}
