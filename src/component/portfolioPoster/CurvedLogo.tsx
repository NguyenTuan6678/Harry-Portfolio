"use client";

import { motion } from "motion/react";

const letters = [
  { text: "P", rotate: "-8deg", x: 0, y: 18 },
  { text: "O", rotate: "2deg", x: -8, y: 45 },
  { text: "R", rotate: "-18deg", x: 6, y: 8 },
  { text: "T", rotate: "2deg", x: 0, y: -15 },
  { text: "F", rotate: "14deg", x: -4, y: 8 },
  { text: "O", rotate: "-8deg", x: 8, y: 35 },
  { text: "L", rotate: "-14deg", x: 0, y: 25 },
  { text: "I", rotate: "8deg", x: -6, y: 8 },
  { text: "O", rotate: "10deg", x: 4, y: 38 },
];

const waveTransition = {
  duration: 2.6,
  repeat: Infinity,
  repeatType: "mirror" as const,
  ease: "easeInOut" as const,
};

const bounceTransition = {
  type: "spring" as const,
  stiffness: 180,
  damping: 22,
  mass: 0.8,
};

export default function CurvedLogo() {
  return (
    <motion.div 
      className="relative z-20 flex w-full justify-center"
      initial={{ opacity: 0, y: -120, scale: 1.15 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 180, damping: 10, delay: 0.1 }}
    >
      <div className="font-retro flex w-full max-w-7xl items-start justify-between text-[17vw] font-black uppercase leading-none text-gold drop-shadow-[4px_4px_0px_#744146] md:text-[10vw]">
        {letters.map((letter, index) => (
          <motion.span
            key={`${letter.text}-${index}`}
            className="inline-block cursor-default select-none"
            style={{
              rotate: letter.rotate,
            }}
            animate={{
              x: letter.x,
              y: [letter.y, letter.y - 10, letter.y],
            }}
            transition={{
              x: {
                duration: 0.4,
                ease: [0.76, 0, 0.24, 1],
              },
              y: {
                ...waveTransition,
                delay: index * 0.08,
              },
            }}
          >
            <motion.span
              className="inline-block"
              whileHover={{
                y: -28,
              }}
              transition={bounceTransition}
            >
              {letter.text}
            </motion.span>
          </motion.span>
        ))}

        <motion.span
          className="ml-10 inline-block cursor-default select-none text-[6vw] font-black text-terracotta drop-shadow-[2px_2px_0px_#744146] md:text-[3.5vw]"
          animate={{
            y: [28, 18, 28],
          }}
          transition={{
            y: {
              ...waveTransition,
              delay: letters.length * 0.08,
            },
          }}
        >
          <motion.span className="inline-block">’26</motion.span>
        </motion.span>
      </div>
    </motion.div>
  );
}
