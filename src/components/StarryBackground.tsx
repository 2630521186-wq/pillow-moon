/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from "react";

interface YellowStar {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: string;
  duration: string;
  color: string;
  shapeType: "5point" | "4point" | "sparkle-char" | "star-char";
}

// Reusable Star SVGs for crisp and precise vectors
const YellowFivePointStar = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current drop-shadow-[0_0_5px_rgba(253,235,123,0.7)]">
    <path d="M12 1.5l3.09 6.3 6.91 1-5 4.87 1.18 6.88-6.18-3.25L5.82 20.55 7 13.67l-5-4.87 6.91-1z" />
  </svg>
);

const YellowFourPointSparkle = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current drop-shadow-[0_0_6px_rgba(254,224,91,0.8)]">
    <path d="M12 2c0 5.52-4.48 10-10 10 5.52 0 10 4.48 10 10 0-5.52 4.48-10 10-10-5.52 0-10-4.48-10-10z" />
  </svg>
);

export default function StarryBackground() {
  // Generate a list of yellow stars with stable randomized properties
  const starsArray = useMemo(() => {
    const list: YellowStar[] = [];
    
    // Cozy warm pajama yellow palettes from image_0.png
    const yellowPalette = [
      "#fdeb7b", // Golden Pastel Yellow
      "#fee05b", // Bright Yellow
      "#ffeaa7", // Soft cream yellow
      "#ffd54f", // Sunrise Yellow
    ];

    const types: ("5point" | "4point" | "sparkle-char" | "star-char")[] = [
      "5point",
      "4point",
      "sparkle-char",
      "star-char",
    ];

    for (let i = 0; i < 90; i++) {
      // Choose sizes between 6px and 16px to feel balanced, not too cluttered
      const isCharacter = i % 3 === 0;
      const sizeValue = isCharacter 
        ? Math.random() * 6 + 10  // Unicode characters render slightly smaller
        : Math.random() * 8 + 8;  // SVG sizes

      list.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: sizeValue,
        delay: `${(Math.random() * 7.5).toFixed(2)}s`,
        duration: `${(Math.random() * 4.5 + 3.5).toFixed(2)}s`,
        color: yellowPalette[Math.floor(Math.random() * yellowPalette.length)],
        shapeType: types[Math.floor(Math.random() * types.length)],
      });
    }
    return list;
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none select-none overflow-hidden bg-[#090314] dreamy-night-sky">
      {/* 1. Deep Gradient Layers (Lavender to Deep Mystical Purple) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07020d] via-[#120624] via-[#211142] via-[#40266e] via-[#6a539b] via-[#9e8fcd] to-[#c2b5e2] opacity-100" />

      {/* 2. Interactive / Soft Breathing Nebulae (Diffused Glows) */}
      <div 
        className="absolute top-[20%] left-[10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full filter blur-[100px] bg-[#6d4da2]/15 animate-soft-pulse"
        style={{ "--pulse-duration": "14s" } as React.CSSProperties}
      />
      <div 
        className="absolute bottom-[25%] right-[5%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full filter blur-[120px] bg-[#e1a5ff]/8 animate-soft-pulse"
        style={{ "--pulse-duration": "19s" } as React.CSSProperties}
      />
      <div 
        className="absolute top-[60%] left-[45%] w-[300px] h-[300px] rounded-full filter blur-[90px] bg-[#89a2e6]/10 animate-soft-pulse"
        style={{ "--pulse-duration": "11s" } as React.CSSProperties}
      />

      {/* 3. Faint, Hazy Textured Full Moon (Top Right Horizon) */}
      <div className="absolute top-[12%] right-[8%] sm:right-[15%] w-[160px] h-[160px] md:w-[260px] md:h-[260px] rounded-full bg-gradient-to-tr from-[#9e8ec5]/25 via-[#ecdfe8]/35 to-[#fefcf8]/45 backdrop-blur-[0.5px] shadow-[0_0_80px_20px_rgba(253,251,245,0.18),0_0_20px_2px_rgba(253,251,245,0.1)] pointer-events-none select-none overflow-hidden animate-pulse" style={{ animationDuration: "8s" }}>
        {/* Crater textures */}
        <div className="absolute inset-0 opacity-[0.14] mix-blend-multiply bg-[radial-gradient(circle_at_25%_25%,#3a2c5a_20%,transparent_60%),radial-gradient(circle_at_65%_48%,#3a2c5a_15%,transparent_50%),radial-gradient(circle_at_45%_75%,#3a2c5a_18%,transparent_55%),radial-gradient(circle_at_80%_80%,#3a2c5a_12%,transparent_45%)]" />
        <div className="absolute inset-0 rounded-full border border-white/20" />
      </div>

      {/* 4. Soft hazy clouds drifting */}
      <div 
        className="absolute top-[22%] right-[2%] w-[260px] h-[80px] rounded-full bg-gradient-to-r from-purple-200/5 via-violet-300/10 to-transparent blur-[25px] animate-cloud-drift pointer-events-none"
        style={{ "--drift-duration": "28s" } as React.CSSProperties}
      />
      <div 
        className="absolute top-[8%] left-[5%] w-[320px] h-[100px] rounded-full bg-gradient-to-r from-indigo-200/5 via-fuchsia-200/8 to-transparent blur-[30px] animate-cloud-drift pointer-events-none"
        style={{ "--drift-duration": "35s" } as React.CSSProperties}
      />
      <div 
        className="absolute bottom-[18%] left-[8%] w-[420px] h-[140px] rounded-full bg-gradient-to-r from-[#9e8fcd]/8 via-purple-300/5 to-transparent blur-[40px] animate-cloud-drift pointer-events-none"
        style={{ "--drift-duration": "42s" } as React.CSSProperties}
      />

      {/* 5. Delicate Mapping of Twinkling Yellow Star Icons */}
      <div className="absolute inset-0 w-full h-full">
        {starsArray.map((star) => {
          const style = {
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            "--duration": star.duration,
            animationDelay: star.delay,
            color: star.color,
          } as React.CSSProperties;

          return (
            <div
              key={star.id}
              style={style}
              className="absolute flex items-center justify-center animate-twinkle pointer-events-none"
            >
              {star.shapeType === "5point" && <YellowFivePointStar />}
              {star.shapeType === "4point" && <YellowFourPointSparkle />}
              {star.shapeType === "sparkle-char" && (
                <span 
                  className="font-bold leading-none select-none drop-shadow-[0_0_4px_rgba(253,235,123,0.7)]" 
                  style={{ fontSize: `${star.size}px`, color: star.color }}
                >
                  ✦
                </span>
              )}
              {star.shapeType === "star-char" && (
                <span 
                  className="leading-none select-none drop-shadow-[0_0_4px_rgba(253,235,123,0.6)]" 
                  style={{ fontSize: `${star.size}px`, color: star.color }}
                >
                  ★
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

