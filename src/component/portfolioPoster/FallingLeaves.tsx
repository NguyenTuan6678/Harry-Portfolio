"use client";

import React, { useEffect, useState } from "react";

interface Leaf {
  id: number;
  left: string;
  delay: string;
  duration: string;
  size: number;
  color: string;
  rotateStart: number;
}

export default function FallingLeaves() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    // Stardew Valley Earthy Recolor leaf colors (autumn vibe: red-clay, orange-gold, sage-green)
    const leafColors = [
      "#708a5b", // Sage Green
      "#b85b46", // Terracotta / Red Clay
      "#d9a04b", // Harvest Gold
      "#4e5d42", // Deep Olive
      "#b07e56", // Warm Wood
    ];

    const generateLeaves = (): Leaf[] => {
      return Array.from({ length: 15 }).map((_, i) => {
        const size = Math.floor(Math.random() * 12) + 8; // 8px to 20px
        const left = `${Math.random() * 95}%`;
        const delay = `${Math.random() * 8}s`;
        const duration = `${Math.random() * 10 + 8}s`; // 8s to 18s (nice slow float)
        const color = leafColors[Math.floor(Math.random() * leafColors.length)];
        const rotateStart = Math.floor(Math.random() * 360);

        return {
          id: i,
          left,
          delay,
          duration,
          size,
          color,
          rotateStart,
        };
      });
    };

    setLeaves(generateLeaves());
  }, []);

  if (leaves.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
      {leaves.map((leaf) => (
        <svg
          key={leaf.id}
          className="absolute opacity-80"
          style={{
            left: leaf.left,
            top: "-20px",
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
            fill: leaf.color,
            animationName: "leafFall",
            animationDuration: leaf.duration,
            animationDelay: leaf.delay,
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
            transform: `rotate(${leaf.rotateStart}deg)`,
          }}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* A simple pixelated leaf shape */}
          <path d="M8,1 H10 V3 H12 V5 H10 V7 H8 V9 H6 V7 H4 V5 H6 V3 H8 Z" />
          {/* Leaf stem line */}
          <rect x="7" y="3" width="1" height="8" fill="rgba(0, 0, 0, 0.25)" />
        </svg>
      ))}
    </div>
  );
}
