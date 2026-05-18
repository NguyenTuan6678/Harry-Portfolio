"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const logoText = "HARRYNGUYEN";

type NavbarProps = {
  isHero: boolean;
  logoVisible: boolean;
};

type NavItemProps = {
  href?: string;
  children: ReactNode;
  asButton?: boolean;
  target?: string;
  rel?: string;
};

function NavItem({
  href,
  children,
  asButton = false,
  target,
  rel,
}: NavItemProps) {
  const content = (
    <motion.span
      className="inline-flex items-center gap-2"
      initial="initial"
      whileHover="hover"
    >
      <motion.span
        className="flex h-5 w-5 items-center justify-center text-[13px] leading-none"
        variants={{
          initial: {
            rotate: 0,
            backgroundColor: "rgba(0,0,0,0)",
            color: "#000000",
          },
          hover: {
            rotate: 360,
            backgroundColor: "#000000",
            color: "#ffffff",
          },
        }}
        transition={{
          duration: 0.5,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        +
      </motion.span>

      <motion.span
        className="inline-block whitespace-nowrap"
        variants={{
          initial: {
            x: 0,
          },
          hover: {
            x: 8,
          },
        }}
        transition={{
          duration: 0.35,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );

  if (asButton) {
    return (
      <button type="button" className="uppercase">
        {content}
      </button>
    );
  }

  return (
    <a href={href} target={target} rel={rel} className="uppercase">
      {content}
    </a>
  );
}

export default function Navbar({ isHero, logoVisible }: NavbarProps) {
  return (
    <motion.header
      className="absolute left-0 top-0 z-50 w-full px-4 pt-4 md:px-5"
      animate={{
        color: isHero ? "#ffffff" : "#09090b",
      }}
      transition={{ duration: 0.45 }}
    >
      <h1 className="flex w-full select-none justify-between overflow-hidden whitespace-nowrap text-[14vw] font-black uppercase leading-[0.72] tracking-normal md:text-[9.6vw]">
        {logoText.split("").map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            className="inline-block overflow-hidden"
          >
            <motion.span
              className="inline-block"
              initial={{ y: "115%" }}
              animate={{ y: logoVisible ? "0%" : "115%" }}
              transition={{
                delay: 0.03 * index,
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              {letter}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.div
        className="mt-3 h-px w-full bg-current opacity-20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: logoVisible ? 1 : 0 }}
        transition={{
          delay: 0.25,
          duration: 0.9,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{ transformOrigin: "left" }}
      />

      <motion.nav
        className="mt-4 hidden items-center justify-between text-sm font-semibold md:flex"
        initial={{ opacity: 0, y: 12 }}
        animate={{
          opacity: isHero ? 1 : 0,
          y: isHero ? 0 : 12,
        }}
        transition={{
          delay: 0.25,
          duration: 0.55,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <div className="flex items-center gap-12">
          <NavItem href="#about">About me</NavItem>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#journey">Journey</NavItem>
        </div>

        <div className="flex items-center gap-8">
          <NavItem href="#contact">Contact</NavItem>
          <NavItem asButton>VI</NavItem>
          <NavItem href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </NavItem>
        </div>
      </motion.nav>
    </motion.header>
  );
}
