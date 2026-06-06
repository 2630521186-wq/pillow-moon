/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Sparkles, Moon, Volume2, ShieldAlert } from "lucide-react";

interface NavbarProps {
  onSayHiClick: () => void;
}

export default function Navbar({ onSayHiClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [logoHovered, setLogoHovered] = useState(false);
  const [isGuidesOpen, setIsGuidesOpen] = useState(false);

  // Monitor scroll height
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      // Simple active section check
      const sections = ["home", "work", "journal", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string, e: MouseEvent) => {
    e.preventDefault();
    if (sectionId === "guides") {
      setIsGuidesOpen(true);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        id="main-navbar"
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4"
      >
        <div
          id="navbar-pill"
          className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/85 px-2 py-2 transition-all duration-300 ${
            isScrolled ? "shadow-lg shadow-black/45 scale-95 bg-surface/95" : ""
          }`}
        >
          {/* 1. Logo Circle */}
          <motion.div
            id="navbar-logo"
            className="w-9 h-9 rounded-full accent-gradient p-[1.5px] cursor-pointer"
            onHoverStart={() => setLogoHovered(true)}
            onHoverEnd={() => setLogoHovered(false)}
            whileHover={{ scale: 1.1 }}
            animate={{ rotate: logoHovered ? -180 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            onClick={(e) => handleNavClick("home", e)}
          >
            <div className="w-full h-full rounded-full bg-[#0d071c] flex items-center justify-center">
              <span className="font-display italic text-pajama-yellow text-[14px] font-semibold leading-none select-none">
                🌙
              </span>
            </div>
          </motion.div>

          {/* 2. Divider (hidden on mobile) */}
          <div className="hidden sm:block w-px h-5 bg-stroke mx-2" />

          {/* 3. Nav Links (Chinese localized for Pillow Moon IP) */}
          <div className="flex items-center gap-1">
            {[
              { label: "首页", id: "home" },
              { label: "产品功能", id: "work" },
              { label: "疗愈科普", id: "journal" },
              { label: "关于我们", id: "guides" },
            ].map((link) => {
              const isActive =
                link.id === "guides" ? isGuidesOpen : activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={(e) => handleNavClick(link.id, e)}
                  className={`text-xs sm:text-sm rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 transition-all duration-300 font-medium ${
                    isActive
                      ? "text-pajama-yellow bg-stroke/60"
                      : "text-muted hover:text-text-primary hover:bg-stroke/30"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* 4. Divider */}
          <div className="w-px h-5 bg-stroke mx-2" />

          {/* 5. "进入梦境" Button */}
          <button
            id="nav-enter-dream-btn"
            onClick={onSayHiClick}
            className="relative overflow-hidden rounded-full p-[1px] text-xs sm:text-sm font-medium transition-all group cursor-pointer"
          >
            {/* Hover border glow backdrop */}
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ margin: "-20%" }} />
            
            {/* Inner Content */}
            <span className="relative flex items-center gap-1.5 bg-surface group-hover:bg-[#070114] rounded-full px-3.5 sm:px-4.5 py-1.5 sm:py-2 text-text-primary transition-colors duration-300">
              <span className="text-pajama-yellow animate-pulse font-bold text-[10px] leading-none">✦</span>
              <span>进入梦境</span>
              <span className="text-[#FFA3CC] text-[9px] leading-none">★</span>
              <ArrowUpRight className="w-3 h-3 text-color-accent group-hover:text-pajama-yellow transition-colors duration-300" />
            </span>
          </button>
        </div>
      </nav>

      {/* Sleep Guide Advisory Drawer Info */}
      <AnimatePresence>
        {isGuidesOpen && (
          <div
            id="guides-drawer-overlay"
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setIsGuidesOpen(false)}
          >
            <motion.div
              id="guides-drawer"
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-[#120a26] border border-stroke rounded-3xl p-6 md:p-8 max-h-[85vh] overflow-y-auto no-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-start border-b border-stroke pb-6 mb-6">
                <div>
                  <h3 className="text-3xl font-display text-text-primary flex items-center gap-2">
                    <span className="font-light italic text-[#cca3f0]">Pillow Moon</span>
                    <span className="inline-flex items-center gap-1">
                      <span className="text-pajama-yellow text-lg animate-pulse">🌙</span>
                      <span className="text-[#FFA3CC] text-xs">★</span>
                    </span>
                  </h3>
                  <p className="text-xs text-muted tracking-widest uppercase mt-1">
                    Sleep Healing IP — 开启探索深层潜意识的治愈之夜
                  </p>
                </div>
                <button
                  id="close-guides-btn"
                  onClick={() => setIsGuidesOpen(false)}
                  className="p-2 rounded-full border border-stroke bg-bg/50 text-muted hover:text-text-primary hover:border-text-primary transition-all duration-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="space-y-6 text-sm">
                <div>
                  <h4 className="text-xs text-pajama-yellow uppercase tracking-[0.2em] font-mono mb-2 flex items-center gap-1.5 font-semibold">
                    <Moon className="w-3.5 h-3.5" /> IP 治愈愿景
                  </h4>
                  <p className="text-text-primary/80 italic leading-relaxed">
                    "在快节奏的现代都市中，Pillow Moon（枕头月亮）致力于将前沿的 AI 智能语音算法与正念声学完美结合，重新定义睡前仪式的疗愈底色。我们协助数以万计的失眠旅人进入极度平稳的潜意识层，抚平焦虑、改写恶梦、拥抱温热无暇的婴儿般深度睡眠。"
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs text-pajama-yellow uppercase tracking-[0.2em] font-mono flex items-center gap-1.5 border-b border-stroke/70 pb-1 font-semibold">
                    <Volume2 className="w-3.5 h-3.5" /> 核心声波技术体系
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-semibold text-text-primary">Lunar 颅内微动双耳差频声 (Binaural Beats)</h5>
                        <p className="text-xs text-muted mt-0.5">自动诱导大脑神经元同步，平稳过渡到极低频 Delta 慢波状态。</p>
                      </div>
                      <span className="text-xs text-[#93c5fd] font-mono bg-indigo-950/40 px-2 py-0.5 rounded-full">Delta Wave</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-semibold text-text-primary">AI 情绪实时造梦引导系统</h5>
                        <p className="text-xs text-muted mt-0.5">通过非线性自然语言编织，在不打扰睡意的状态下重构用户的积极潜意识意象。</p>
                      </div>
                      <span className="text-xs text-color-accent font-mono bg-[#481c60]/40 px-2 py-0.5 rounded-full">Intelligent</span>
                    </div>
                  </div>
                </div>

                {/* Info block */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-stroke">
                  <div>
                    <h4 className="text-xs text-[#93c5fd] uppercase tracking-[0.2em] font-mono mb-2 font-semibold">技术构成 Stack</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {["Generative Audio", "Intelligent Remapping", "ASMR Engine", "Delta Acoustic Sync", "Aesthetic Science"].map((tech) => (
                        <span key={tech} className="text-xs px-2.5 py-1 rounded-md bg-[#1d123b] text-text-primary/95 font-mono border border-stroke/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs text-[#FFA3CC] uppercase tracking-[0.2em] font-mono mb-2 font-semibold">美学调性 Style</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {["星际暗香", "舒适睡衣治愈", "梦境多维叙事", "太空舱微重力", "睡前触觉通感"].map((style) => (
                        <span key={style} className="text-xs px-2.5 py-1 rounded-md bg-[#241334] text-text-primary/95 border border-stroke/30">
                          {style}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 mt-8 pt-6 border-t border-stroke">
                <button
                  id="guide-scroll-action"
                  onClick={() => {
                    setIsGuidesOpen(false);
                    onSayHiClick();
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-text-primary text-[#0d071c] font-semibold text-xs sm:text-sm hover:opacity-95 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" /> 开启深度契合咨询
                </button>
                <button
                  id="guide-close-button-bottom"
                  onClick={() => setIsGuidesOpen(false)}
                  className="flex-1 py-3 rounded-xl border border-stroke hover:bg-[#1d113c] text-text-primary font-medium text-xs sm:text-sm transition-all"
                >
                  返回主页梦境
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
