/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

interface LoadingScreenProps {
  onComplete: () => void;
}

const WORDS = ["Breathe呼吸", "Dream梦境", "Heal治愈", "Awake醒来"];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Counting logic using GSAP
    const countObj = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out overlay beautifully
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => {
            onComplete();
          }
        });
      }
    });

    // Count 0 to 100 over 3 seconds
    tl.to(countObj, {
      val: 100,
      duration: 3.0,
      ease: "power1.inOut",
      onUpdate: () => {
        setCount(Math.floor(countObj.val));
      }
    });

    // 2. Animate cycling words sequentially in synch with the loading
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => {
        const next = (prev + 1) % WORDS.length;
        // Animating the word element with GSAP flip-fade vertical transition
        if (wordRef.current) {
          gsap.fromTo(wordRef.current, 
            { y: 15, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
          );
        }
        return next;
      });
    }, 750);

    return () => {
      clearInterval(wordInterval);
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      id="loading-screen"
      className="fixed inset-0 z-[9999] bg-[#090314] flex flex-col justify-between p-6 md:p-12 lg:p-16 select-none"
    >
      {/* Top Left: Logo / Label */}
      <div className="flex items-center justify-between">
        <div
          id="loading-eyebrow"
          className="text-sm font-semibold text-color-accent uppercase tracking-[0.4em] flex items-center gap-1.5"
        >
          <span className="text-pajama-yellow animate-pulse text-[13px]">✦</span>
          <span>PILLOW MOON</span>
        </div>
        <div className="text-xs text-muted/30 font-mono">
          ©2026 SLEEP IP
        </div>
      </div>

      {/* Center: Cycling Words with Vertical Fade */}
      <div className="flex items-center justify-center py-20">
        <div
          ref={wordRef}
          id="loading-center-word"
          className="text-4xl md:text-6xl lg:text-7xl font-display italic text-pajama-yellow text-center drop-shadow-[0_0_15px_rgba(253,235,123,0.35)]"
        >
          {WORDS[wordIndex]}
        </div>
      </div>

      {/* Bottom controls & Progress indicator */}
      <div className="flex flex-col gap-6 md:gap-8">
        <div className="flex justify-between items-baseline">
          <div className="text-xs text-muted font-mono tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
            <span>Aligning Lunar Frequencies...</span>
          </div>
          <div
            id="loading-counter"
            className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums select-none"
          >
            {String(count).padStart(3, "0")}
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="relative w-full h-[4px] bg-stroke/50 overflow-hidden rounded-full">
          <div
            id="loading-progress-bar"
            className="accent-gradient h-full origin-left transition-transform duration-75 ease-out rounded-full"
            style={{
              transform: `scaleX(${count / 100})`,
              boxShadow: "0 0 16px rgba(204, 163, 240, 0.6)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
