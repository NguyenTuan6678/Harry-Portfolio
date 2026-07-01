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
    <main className="bg-sand text-charcoal dark:bg-charcoal dark:text-sand transition-colors duration-300">
      {/* Section 1: Hero Poster */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 border-b border-dashed border-ochre/20">
        <ProfileHero />
      </section>

      {/* Section 2: Profile Info */}
      <section
        id="about"
        className="relative flex min-h-screen items-center justify-center px-6 py-20 border-b border-dashed border-ochre/20"
      >
        <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-[450px_1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -60 }}
            whileInView={{ 
              opacity: [0, 1, 0.4, 1, 0.8, 1], // CRT flicker
              scale: 1, 
              x: 0 
            }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ 
              opacity: { duration: 0.4, times: [0, 0.15, 0.3, 0.45, 0.6, 1] },
              scale: { type: "spring", stiffness: 220, damping: 15 },
              x: { type: "spring", stiffness: 220, damping: 15 }
            }}
          >
            <LanyardCard lang={lang} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            whileInView={{ 
              opacity: [0, 1, 0.4, 1, 0.8, 1], // CRT flicker
              scale: 1, 
              x: 0 
            }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ 
              opacity: { duration: 0.4, times: [0, 0.15, 0.3, 0.45, 0.6, 1], delay: 0.15 },
              scale: { type: "spring", stiffness: 220, damping: 15, delay: 0.15 },
              x: { type: "spring", stiffness: 220, damping: 15, delay: 0.15 }
            }}
          >
            <ProfileInfo lang={lang} />
          </motion.div>
        </div>
      </section>

      {/* Section 3: Projects */}
      <section
        id="projects"
        className="relative flex min-h-screen items-center justify-center px-6 py-20 border-b border-dashed border-ochre/20"
      >
        <ProjectContent lang={lang} />
      </section>

      {/* Section 4: Interactive Playground */}
      <section
        id="playground"
        className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: -40, scale: 1.1 }}
          whileInView={{ 
            opacity: [0, 1, 0.3, 1, 0.7, 1], // CRT flicker
            y: 0,
            scale: 1 
          }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ 
            opacity: { duration: 0.4, times: [0, 0.1, 0.2, 0.3, 0.4, 1] },
            y: { type: "spring", stiffness: 220, damping: 12 },
            scale: { type: "spring", stiffness: 220, damping: 12 }
          }}
          className="mb-10 text-center font-retro"
        >
          <h2 className="font-pixel text-4xl font-extrabold uppercase tracking-wider text-gold drop-shadow-[3px_3px_0px_#3c2428] md:text-6xl">
            {t.consoleTitle}
          </h2>
          <p className="mt-4 text-xs font-pixel font-bold uppercase tracking-[0.2em] text-terracotta animate-pulse">
            [ {t.consoleSubtitle} ]
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ 
            opacity: [0, 1, 0.4, 1, 0.8, 1], // CRT flicker
            scale: 1,
            y: 0
          }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ 
            opacity: { duration: 0.4, times: [0, 0.15, 0.3, 0.45, 0.6, 1], delay: 0.15 },
            scale: { type: "spring", stiffness: 200, damping: 16, delay: 0.15 },
            y: { type: "spring", stiffness: 200, damping: 16, delay: 0.15 }
          }}
          className="w-full flex justify-center"
        >
          <DeveloperConsole lang={lang} />
        </motion.div>
      </section>
    </main>
  );
}
