/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowUpRight, Play, Pause, Compass, Sparkles } from "lucide-react";

interface HeroProps {
  onSeeWorkClick: () => void;
  onContactClick: () => void;
}

const ROLES = ["Breathe呼吸", "Dream梦境", "Heal治愈", "Awake醒来"];

export default function Hero({ onSeeWorkClick, onContactClick }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // Rotate roles every 2.2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  // GSAP Entrance
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // .name-reveal: opacity 0->1, y 50->0, duration 1.2s
    tl.fromTo(
      ".name-reveal",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2 },
      0.1
    );

    // .blur-in: opacity 0->1, filter blur(10px)->blur(0px), y 20->0, duration 1s, stagger 0.1
    tl.fromTo(
      ".blur-in",
      { opacity: 0, filter: "blur(8px)", y: 25 },
      { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.0, stagger: 0.15 },
      0.3
    );
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-screen h-screen overflow-hidden bg-transparent"
    >
      {/* Background Video placeholder ready for standard source URL with darker overlay requested */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-0 bg-[#0d071d]/20">
        <video
          id="hero-placeholder-video"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 brightness-[0.25] opacity-25 contrast-[1.1]"
          autoPlay
          muted
          loop
          playsInline
          // To add custom video background later, insert src="YOUR_VIDEO_URL" here
        />
        {/* Exact bg-black/40 dark overlay as requested */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-1" />
      </div>

      {/* Gentle gradient bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#090314] via-[#090314]/80 to-transparent z-1" />

      {/* Magazine Editorial Layout positioned in bottom-left */}
      <div className="absolute bottom-12 md:bottom-16 left-8 md:left-16 max-w-2xl sm:max-w-3xl z-10 flex flex-col items-start text-left">
        {/* Eyebrow: SLEEP HELPER */}
        <p
          id="hero-eyebrow"
          className="blur-in text-[11px] text-muted tracking-[0.35em] uppercase font-semibold flex items-center gap-2 mb-4 font-mono text-[#9e8fcd]"
        >
          <span className="text-pajama-yellow animate-pulse">✦</span>
          <span>SLEEP HELPER</span>
          <span className="text-pajama-yellow">★</span>
        </p>

        {/* Role Line: A sleeper lives in... */}
        <div
          id="hero-role-line"
          className="blur-in text-base sm:text-lg text-text-primary/85 font-normal tracking-wide mb-3 flex items-center gap-2 justify-start h-8"
        >
          <span>A sleeper lives in...</span>
          <span
            key={roleIndex}
            className="animate-role-fade-in font-display italic text-[#cca3f0] underline decoration-[#fee05b]/40 underline-offset-4 font-semibold"
          >
            {ROLES[roleIndex]}
          </span>
          <span className="text-[#93c5fd] text-xs">✦</span>
        </div>

        {/* Description */}
        <p
          id="hero-description"
          className="blur-in text-sm sm:text-base text-muted/90 max-w-lg mb-6 leading-relaxed font-sans font-light"
        >
          探索深层潜意识，开启专属你的治愈之夜。
        </p>

        {/* Main Title: "Pillow Moon 枕月兔" stacked in display Serif style */}
        <div className="name-reveal flex flex-col items-start gap-1 mb-8">
          <h1
            id="hero-title-en"
            className="text-5xl sm:text-7xl md:text-8xl font-display italic tracking-tight text-text-primary leading-[0.95] drop-shadow-[0_0_35px_rgba(253,235,123,0.06)]"
          >
            Pillow Moon
          </h1>
          <h1
            id="hero-title-zh"
            className="text-3xl sm:text-5xl md:text-6xl font-display text-text-primary tracking-wide leading-[1.0] drop-shadow-[0_0_35px_rgba(253,235,123,0.06)] mt-1"
          >
            枕月兔
          </h1>
        </div>

        {/* CTA Actions */}
        <div id="hero-actions" className="blur-in flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
          <button
            id="hero-works-btn"
            onClick={onSeeWorkClick}
            className="group relative rounded-full text-xs sm:text-sm font-semibold select-none bg-text-primary text-[#0d071c] overflow-hidden transition-all duration-300 transform hover:scale-105 w-44 h-12 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 relative z-10 text-[#0d071c]" />
            <span className="relative z-10 font-bold">核心探索功能</span>
            <span className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-5" />
          </button>

          <button
            id="hero-contact-btn"
            onClick={onContactClick}
            className="group relative rounded-full text-xs sm:text-sm font-semibold text-text-primary border-2 border-stroke/70 bg-[#090314]/50 backdrop-blur-md overflow-hidden transition-all duration-300 transform hover:scale-105 hover:border-text-primary w-44 h-12 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>关于我们</span>
            <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-pajama-yellow transition-colors duration-300" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        id="scroll-indicator"
        className="absolute bottom-12 right-8 md:right-16 hidden md:flex flex-col items-center gap-2 z-10 cursor-pointer"
        onClick={onSeeWorkClick}
      >
        <span className="text-[10px] text-muted uppercase tracking-[0.25em] font-medium font-mono select-none">
          下滑入梦
        </span>
        <div className="w-[1.5px] h-12 bg-stroke/50 relative overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 w-full h-1/2 accent-gradient animate-scroll-down rounded-full" />
        </div>
      </div>
    </section>
  );
}
