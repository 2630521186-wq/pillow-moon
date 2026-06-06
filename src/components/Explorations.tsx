/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, X, Sparkles, Compass, Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

interface ExplorationItem {
  id: string;
  title: string;
  category: string;
  image: string;
  rotation: string;
  description: string;
}

const EXPLORATIONS: ExplorationItem[] = [
  {
    id: "exp-1",
    title: "温润极光之乡 (Auroral Haven)",
    category: "WebGL / Fragment shader",
    image: "https://images.unsplash.com/photo-1511289081367-6a1a4af13d9f?q=80&w=600&auto=format&fit=crop",
    rotation: "-rotate-3",
    description: "自适应 WebGL 动态柔光夜幕渲染器。利用非线性分形噪声模拟极光波浪，动态调节发光能级以配合人体入睡前的心率周期。",
  },
  {
    id: "exp-2",
    title: "蓝紫色潮汐周期 (Celestial Tide)",
    category: "3D Fluid / Flow Simulation",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=600&auto=format&fit=crop",
    rotation: "rotate-2",
    description: "3D 海洋潮汐涨落周期流体算法。深度关联人体自主神经系统活动，实现声能、画面与呼吸机制的完全生物反馈联动。",
  },
  {
    id: "exp-3",
    title: "枕头太空悬浮 (Fluffy Antigravity)",
    category: "C4D / Softbody Design",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop",
    rotation: "-rotate-2",
    description: "C4D 软体慢回弹材质微重力解压建模。模拟包裹在云团深处的重力沉降感，将骨骼支撑压力全面分散，重塑物理包裹安抚感。",
  },
  {
    id: "exp-4",
    title: "微重力睡眠舱 (Microgravity Pod)",
    category: "Space Aesthetics / Concepts",
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=600&auto=format&fit=crop",
    rotation: "rotate-3",
    description: "隔音降噪微型睡眠舱概念模型。内附星环扩散香氛发生器与双极耳侧差频调音系统，构建独立于日常烦扰的胶囊避风岛。",
  },
  {
    id: "exp-5",
    title: "正念脉冲星呐 (Mindful Pulses)",
    category: "Audio Reactive / SVGs",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=600&auto=format&fit=crop",
    rotation: "-rotate-1",
    description: "音频共鸣声呐可视化图形。将脑电 Alpha 波活性（8-12Hz）同步映射到曼陀罗同心光环，引导目光焦点进入舒缓休眠。",
  },
  {
    id: "exp-6",
    title: "梦境意识重构 (Dreamscape Remap)",
    category: "AI Emotion / Illustrations",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    rotation: "rotate-2",
    description: "多维生成式情绪梦境剧本插画集。利用 Sleep-LLM 抓取心理暗示中的‘月光、温水、轻羽’等安全特征，并生成温润治愈艺术插图。",
  },
];

export default function Explorations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<ExplorationItem | null>(null);

  useEffect(() => {
    const col1 = col1Ref.current;
    const col2 = col2Ref.current;
    const container = containerRef.current;
    if (!col1 || !col2 || !container) return;

    // Create GSAP Scroll parallax
    const col1Tween = gsap.fromTo(
      col1,
      { y: "10%" },
      {
        y: "-15%",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.0,
        },
      }
    );

    const col2Tween = gsap.fromTo(
      col2,
      { y: "-10%" },
      {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.4,
        },
      }
    );

    return () => {
      col1Tween.scrollTrigger?.kill();
      col2Tween.scrollTrigger?.kill();
      col1Tween.kill();
      col2Tween.kill();
    };
  }, []);

  return (
    <section
      id="explorations"
      ref={containerRef}
      className="relative w-full min-h-[180vh] md:min-h-[280vh] bg-transparent overflow-x-hidden border-t border-stroke/30 pt-20"
    >
      {/* Layer 1: Sticky/Pinned Center Content */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center px-6 z-10 text-center select-none pointer-events-none">
        <div className="max-w-xl pointer-events-auto bg-[#10072b]/70 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-stroke/40 shadow-2xl relative">
          
          {/* Celestial glowing dots */}
          <div className="absolute top-1/2 left-4 w-12 h-12 rounded-full bg-pajama-yellow/10 blur-xl animate-pulse" />
          <div className="absolute bottom-4 right-6 w-16 h-16 rounded-full bg-[#FFA3CC]/10 blur-xl animate-pulse" />

          <div className="flex items-center gap-2.5 justify-center mb-4">
            <span className="text-[#FFA3CC] text-xs">★</span>
            <Sparkles className="w-4 h-4 text-[#cca3f0] animate-pulse" />
            <span className="text-xs text-[#9d8ecd] uppercase tracking-[0.3em] font-mono font-semibold">
              Dream Gallery / 梦境视觉画廊
            </span>
            <span className="text-pajama-yellow animate-pulse">🌙</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-text-primary tracking-tight leading-[1.05] mb-6">
            星光治愈<span className="italic font-light text-pajama-yellow block sm:inline">梦境画廊</span>
          </h2>

          <p className="text-muted/90 text-xs sm:text-sm max-w-md mx-auto mb-8 leading-relaxed font-light">
            展示治愈系梦境场景插画、产品视觉设计与功能演示视觉素材。下滑即可观看左右两翼流彩闪耀！
          </p>

          <button
            id="explorations-popup-btn"
            onClick={() => {
              const contactSec = document.getElementById("contact");
              if (contactSec) {
                contactSec.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group relative inline-flex items-center justify-center rounded-full text-xs font-semibold overflow-hidden transition-all duration-300 p-[1.2px] cursor-pointer"
          >
            <span className="absolute inset-0 rounded-full accent-gradient opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <span className="relative bg-[#0d071d] group-hover:bg-[#070114] rounded-full px-5 py-2.5 flex items-center gap-1.5 text-text-primary transition-all duration-300 font-mono tracking-wide">
              申请原创梦境授权 <ArrowUpRight className="w-3.5 h-3.5 text-muted transition-colors duration-300 group-hover:text-pajama-yellow" />
            </span>
          </button>
        </div>
      </div>

      {/* Layer 2: Parallax Columns Grid */}
      <div className="absolute inset-0 z-20 flex justify-center items-start pt-[20vh] md:pt-[35vh] pointer-events-none">
        <div className="w-full max-w-[1240px] px-6 mx-auto grid grid-cols-2 gap-8 md:gap-24 lg:gap-36 relative">
          
          {/* Column 1 - Left Column parallaxing UP */}
          <div
            ref={col1Ref}
            className="flex flex-col gap-12 sm:gap-20 md:gap-32 pointer-events-auto"
          >
            {EXPLORATIONS.filter((_, idx) => idx % 2 === 0).map((item) => (
              <motion.div
                key={item.id}
                id={item.id}
                whileHover={{ scale: 1.04, zIndex: 30 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                onClick={() => setSelectedItem(item)}
                className={`w-full max-w-[280px] sm:max-w-[320px] mx-auto aspect-square bg-[#10072b]/40 border border-stroke p-3 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl cursor-pointer ${item.rotation} transform transition-shadow hover:shadow-indigo-950/40`}
              >
                {/* Image and Halftone Layer */}
                <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden group">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover brightness-[0.75] hover:brightness-[0.88] transition-all duration-500"
                  />
                  
                  {/* Subtle shader layout overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-65" />
                  
                  {/* Halftone layout */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
                    style={{
                      backgroundImage: "radial-gradient(circle, #fdeb7b 1.2px, transparent 1.2px)",
                      backgroundSize: "8px 8px",
                    }}
                  />

                  {/* Absolute text label */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-[9px] font-mono text-[#9d8ecd] uppercase tracking-widest">{item.category}</p>
                    <p className="text-xs text-text-primary font-medium truncate mt-0.5">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Column 2 - Right Column parallaxing DOWN */}
          <div
            ref={col2Ref}
            className="flex flex-col gap-12 sm:gap-20 md:gap-32 pt-20 sm:pt-32 md:pt-48 pointer-events-auto"
          >
            {EXPLORATIONS.filter((_, idx) => idx % 2 !== 0).map((item) => (
              <motion.div
                key={item.id}
                id={item.id}
                whileHover={{ scale: 1.04, zIndex: 30 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                onClick={() => setSelectedItem(item)}
                className={`w-full max-w-[280px] sm:max-w-[320px] mx-auto aspect-square bg-[#10072b]/40 border border-stroke p-3 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl cursor-pointer ${item.rotation} transform transition-shadow hover:shadow-indigo-950/40`}
              >
                {/* Image Avatar */}
                <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden group">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover brightness-[0.75] hover:brightness-[0.88] transition-all duration-500"
                  />
                  
                  {/* Shades overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-65" />
                  
                  {/* Halftone Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
                    style={{
                      backgroundImage: "radial-gradient(circle, #fdeb7b 1.2px, transparent 1.2px)",
                      backgroundSize: "8px 8px",
                    }}
                  />

                  {/* Absolute metadata label */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-[9px] font-mono text-[#9d8ecd] uppercase tracking-widest">{item.category}</p>
                    <p className="text-xs text-text-primary font-medium truncate mt-0.5">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div
            id="exploration-lightbox-overlay"
            className="fixed inset-0 z-[10000] bg-black/94 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              id="exploration-lightbox"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-lg w-full bg-[#110729] border border-stroke/70 p-4 rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                id="exploration-lightbox-close"
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-50 p-2 rounded-full bg-black/50 border border-stroke text-muted hover:text-text-primary transition-all duration-300"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Big Image Content */}
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover brightness-[0.88]"
                />
                
                {/* Halftone layout context */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-15 mix-blend-overlay"
                  style={{
                    backgroundImage: "radial-gradient(circle, #fdeb7b 1px, transparent 1px)",
                    backgroundSize: "5px 5px",
                  }}
                />
              </div>

              {/* Information footer */}
              <div className="p-4 pt-5 space-y-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono text-pajama-yellow bg-[#1d123d] border border-stroke/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider block">
                    {selectedItem.category}
                  </span>
                  <span className="text-xs text-[#FFA3CC]">★</span>
                </div>
                <h4 className="text-lg font-semibold text-text-primary">
                  {selectedItem.title}
                </h4>
                <p className="text-xs text-muted/90 leading-relaxed font-light">
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
