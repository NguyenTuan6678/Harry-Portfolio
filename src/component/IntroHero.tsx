"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import RollingImage from "@/component/RollingImage";
import Navbar from "@/component/Navbar";

const mainImages = [
  {
    src: "/animesence1.jpg",
    position: "center 42%",
    scale: 1.03,
  },
  {
    src: "/animesence2.jpg",
    position: "center 50%",
    scale: 1.04,
  },
  {
    src: "/animesence3.jpg",
    position: "center 35%",
    scale: 1.02,
  },
  {
    src: "/animesence4.jpg",
    position: "center 60%",
    scale: 1.05,
  },
  {
    src: "/animesence5.jpg",
    position: "center 45%",
    scale: 1.03,
  },
];

const previewImages = [
  "/animesence1.jpg",
  "/animesence2.jpg",
  "/animesence3.jpg",
  "/animesence4.jpg",
  "/animesence5.jpg",
];

type Phase = "blank" | "loading" | "expand" | "ready";

export default function IntroHero() {
  const [phase, setPhase] = useState<Phase>("blank");
  const [activeImage, setActiveImage] = useState(0);
  const [logoVisible, setLogoVisible] = useState(false);

  const isHero = phase === "expand" || phase === "ready";
  const isReady = phase === "ready";

  const previewImage = useMemo(() => {
    return previewImages[(activeImage + 1) % previewImages.length];
  }, [activeImage]);

  const handleNextImage = () => {
    setActiveImage((prev) => (prev + 1) % mainImages.length);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const imageStep = 700;
    const imageStart = 760;
    const expandAt = imageStart + mainImages.length * imageStep + 260;
    const readyAt = expandAt + 1150;

    const timers: ReturnType<typeof setTimeout>[] = [];

    const popupStart = 320;
    const logoDelayAfterPopup = 600;

    timers.push(setTimeout(() => setPhase("loading"), popupStart));

    timers.push(
      setTimeout(() => {
        setLogoVisible(true);
      }, popupStart + logoDelayAfterPopup),
    );

    mainImages.forEach((_, index) => {
      timers.push(
        setTimeout(
          () => {
            setActiveImage(index);
          },
          imageStart + index * imageStep,
        ),
      );
    });

    timers.push(setTimeout(() => setPhase("expand"), expandAt));

    timers.push(
      setTimeout(() => {
        setPhase("ready");
        document.body.style.overflow = "";
      }, readyAt),
    );

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (phase !== "ready") return;

    const slider = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % mainImages.length);
    }, 7000);

    return () => clearInterval(slider);
  }, [phase]);

  useEffect(() => {
    const imagePaths = [
      ...mainImages.map((image) => image.src),
      ...previewImages,
    ];

    imagePaths.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fffaf2] text-[#09090b]">
      <Navbar isHero={isHero} logoVisible={logoVisible} />
      {/* Main image */}
      <div
        className={`absolute inset-x-0 z-10 flex justify-center px-0 ${
          isHero ? "top-0 items-start" : "inset-y-0 items-center"
        }`}
      >
        <motion.div
          layout
          className={`relative overflow-hidden bg-[#e7ddcf] ${
            isHero ? "h-[86vh] w-full" : "h-32.5 w-57.5 md:h-41.25 md:w-75"
          }`}
          initial={{
            opacity: 0,
            y: 160,
            scale: 0.75,
          }}
          animate={{
            opacity: phase === "blank" ? 0 : 1,
            y: phase === "loading" ? 160 : 0,
            scale: 1,
          }}
          transition={{
            layout: {
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
            },
            opacity: { duration: 0.45 },
            y: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1],
            },
            scale: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          {/* Image layer */}
          {isReady ? (
            <RollingImage
              src={mainImages[activeImage].src}
              alt="Dreamy portfolio hero"
              objectPosition={mainImages[activeImage].position}
              scale={mainImages[activeImage].scale}
              sizes="90vw"
              duration={1.25}
            />
          ) : (
            <AnimatePresence initial={false}>
              <motion.div
                key={mainImages[activeImage].src}
                className="absolute inset-0"
                initial={{
                  opacity: 0,
                  y: phase === "loading" ? 60 : 0,
                  scale: phase === "loading" ? 1.08 : 1.04,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: isHero ? mainImages[activeImage].scale : 1,
                }}
                exit={{
                  opacity: 0,
                  y: phase === "loading" ? -24 : 0,
                  scale: 0.98,
                }}
                transition={{
                  duration: phase === "loading" ? 0.28 : 0.9,
                  ease: [0.76, 0, 0.24, 1],
                }}
              >
                <Image
                  src={mainImages[activeImage].src}
                  alt="Dreamy portfolio hero"
                  fill
                  priority
                  sizes={isHero ? "100vw" : "(min-width: 768px) 300px, 230px"}
                  className="object-cover"
                  style={{
                    objectPosition: mainImages[activeImage].position,
                  }}
                />
              </motion.div>
            </AnimatePresence>
          )}

          {/* Overlay layer */}
          <motion.div
            className="absolute inset-0 z-10 bg-linear-to-r from-black/55 via-black/25 to-black/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHero ? 1 : 0 }}
            transition={{ duration: 0.55 }}
          />

          {/* Text layer */}
          <motion.div
            className="absolute bottom-10 left-6 z-20 max-w-3xl text-white md:bottom-12 md:left-8 lg:left-10"
            initial={{ opacity: 0, y: 35 }}
            animate={{
              opacity: isHero ? 1 : 0,
              y: isHero ? 0 : 35,
            }}
            transition={{
              delay: 0.35,
              duration: 0.75,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/75">
              Creative Developer
            </p>

            <h2 className="max-w-180 text-4xl font-black leading-[0.95] tracking-[-0.06em] md:text-6xl lg:text-7xl">
              I build soft, clean,
              <br />
              dreamy web experiences.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-white/75 md:text-base">
              A personal one-page portfolio inspired by calm visuals, smooth
              motion, and meaningful digital products.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Right preview image */}
      <AnimatePresence>
        {isHero && (
          <motion.div
            className="absolute right-[12vw] top-[72vh] z-40 hidden h-60 w-95 overflow-hidden bg-[#e7ddcf] shadow-2xl md:block"
            initial={{ opacity: 0, y: 120, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{
              delay: 0.35,
              duration: 0.75,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            {isReady ? (
              <RollingImage
                src={previewImage}
                alt="Dreamy preview"
                objectPosition="center"
                scale={1.08}
                sizes="380px"
                duration={1.25}
                hoverZoomOut
                onClick={handleNextImage}
              />
            ) : (
              <Image
                src={previewImage}
                alt="Dreamy preview"
                fill
                sizes="380px"
                className="object-cover object-center"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading label */}
      <AnimatePresence>
        {phase !== "ready" && (
          <motion.p
            className="absolute bottom-5 left-1/2 z-50 -translate-x-1/2 text-[10px] uppercase tracking-[0.45em] text-black/50"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: phase === "loading" ? 1 : 0, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.45 }}
          >
            Hello
          </motion.p>
        )}
      </AnimatePresence>
    </section>
  );
}
