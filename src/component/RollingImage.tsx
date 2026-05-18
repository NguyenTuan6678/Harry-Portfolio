"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type ImageSnapshot = {
  src: string;
  objectPosition: string;
  scale: number;
};

type RollingImageProps = {
  src: string;
  alt: string;
  objectPosition?: string;
  scale?: number;
  sizes?: string;
  duration?: number;
  onClick?: () => void;
  hoverZoomOut?: boolean;
};

const ease = [0.83, 0, 0.17, 1] as const;

export default function RollingImage({
  src,
  alt,
  objectPosition = "center",
  scale = 1,
  sizes = "100vw",
  duration = 1.25,
  onClick,
  hoverZoomOut = false,
}: RollingImageProps) {
  const [currentImage, setCurrentImage] = useState<ImageSnapshot>(() => ({
    src,
    objectPosition,
    scale,
  }));

  const [previousImage, setPreviousImage] = useState<ImageSnapshot | null>(
    null,
  );

  const [isHovering, setIsHovering] = useState(false);

  const currentRef = useRef(currentImage);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    currentRef.current = currentImage;
  }, [currentImage]);

  useEffect(() => {
    if (currentRef.current.src === src) return;

    const nextImage: ImageSnapshot = {
      src,
      objectPosition,
      scale,
    };

    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      setPreviousImage(currentRef.current);
      setCurrentImage(nextImage);
      currentRef.current = nextImage;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(
        () => {
          setPreviousImage(null);
        },
        duration * 1000 + 250,
      );
    });

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [src, objectPosition, scale, duration]);

  const displayScale =
    hoverZoomOut && isHovering
      ? Math.max(1.01, currentImage.scale - 0.07)
      : currentImage.scale;

  return (
    <div
      className={`absolute inset-0 overflow-hidden bg-[#e7ddcf] perspective-[1600px] ${
        onClick ? "cursor-pointer" : ""
      }`}
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* New image behind */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        initial={false}
        animate={{
          scale: displayScale,
        }}
        transition={{
          duration: hoverZoomOut ? 0.55 : duration,
          ease,
        }}
      >
        <Image
          src={currentImage.src}
          alt={alt}
          fill
          priority
          sizes={sizes}
          className="object-cover"
          style={{
            objectPosition: currentImage.objectPosition,
            transform: "translateZ(0)",
          }}
        />
      </motion.div>

      {/* Old image rolls away */}
      {previousImage && (
        <motion.div
          className="absolute inset-0 z-10 overflow-hidden will-change-transform"
          style={{
            transformOrigin: "center bottom",
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
          }}
          initial={{
            y: "0%",
            rotateX: 0,
            scale: previousImage.scale,
            opacity: 1,
            filter: "brightness(1)",
          }}
          animate={{
            y: "-104%",
            rotateX: 18,
            scale: previousImage.scale + 0.015,
            opacity: 1,
            filter: "brightness(0.86)",
          }}
          transition={{
            duration,
            ease,
          }}
        >
          <Image
            src={previousImage.src}
            alt={alt}
            fill
            priority
            sizes={sizes}
            className="object-cover"
            style={{
              objectPosition: previousImage.objectPosition,
              transform: "translateZ(0)",
            }}
          />

          <motion.div
            className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-linear-to-t from-black/35 via-black/10 to-transparent"
            initial={{
              opacity: 0,
              y: "40%",
            }}
            animate={{
              opacity: [0, 0.55, 0],
              y: ["40%", "-280%", "-520%"],
            }}
            transition={{
              duration,
              ease,
            }}
          />
        </motion.div>
      )}
    </div>
  );
}
