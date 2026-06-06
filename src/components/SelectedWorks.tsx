/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Eye, Sparkles, Brain, Moon, Stars, BarChart2, X, Activity } from "lucide-react";

interface BentoCard {
  id: string;
  title: string;
  category: string;
  description: string;
  detailText: string;
  image: string;
  icon: React.ReactNode;
  aspect: string;
  colSpan: string;
  techs: string[];
}

const CARDS: BentoCard[] = [
  {
    id: "bento-1",
    title: "定向造梦睡前引导",
    category: "Guided Dream Induction",
    description: "AI 针对潜意识情绪特点，动态编织专属意象情境，实现柔性睡前减压与深度沉浸式意境造梦。",
    detailText: "基于认知行为疗法（CBT-I）和超低频声学生成。系统检测到用户心率和脑电活跃度后，在半醒半睡的催眠过渡状态中（Hypnagogia），自动生成具有缓释舒压效果的语言向导与微噪音乐，帮助使用者自主把握梦境方向，远离日常精神内耗。",
    image: "https://images.unsplash.com/photo-1511289081367-6a1a4af13d9f?q=80&w=1200&auto=format&fit=crop",
    icon: <Moon className="w-5 h-5 text-pajama-yellow" />,
    aspect: "aspect-[16/10]",
    colSpan: "md:col-span-7",
    techs: ["AI 声学生成", "潜意识诱导", "Delta波共振", "非线性语言流"],
  },
  {
    id: "bento-2",
    title: "AI 多维梦境解析",
    category: "Multidimensional Dream Interpretation",
    description: "应用大语言解梦模型与睡眠心理声特征学，还原并解构睡眠中深层脑波与意象的秘密。",
    detailText: "无需携带粗重的接触电极。利用非接触式超宽带雷达波（UWB）及麦克风捕捉睡眠周期内的细微生理参数。醒来后，内置的大型情感释意模型（Sleep-LLM）能完美串联你的梦话词频、梦醒情绪反应，深度解构隐藏在暗色梦幕之下的隐性焦虑与深层渴求。",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200&auto=format&fit=crop",
    icon: <Brain className="w-5 h-5 text-[#93c5fd]" />,
    aspect: "aspect-[4/3] sm:aspect-auto sm:h-full",
    colSpan: "md:col-span-5",
    techs: ["Sleep-LLM 模型", "生理感官追踪", "情绪特征映射", "数字意象生成"],
  },
  {
    id: "bento-3",
    title: "噩梦情绪愈疗改写",
    category: "Nightmare Cognitive Reframing",
    description: "特创的认知心理改写算法，自动识别噩梦中的高张力场景并进行温和转意化解，重塑情绪弹性。",
    detailText: "利用前沿的图像交互脱敏机制（IRTs）。当检测到睡眠阶段心率爆发出异常变异性并伴随极速呼吸指数（伴随噩梦警报）时，枕骨传导共鸣器会注入低于听阈的安全微颤，在极不打扰睡眠质量的前提下，柔性改写噩梦剧本，将其反转为带有解压性质的安全虚空梦境。",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop",
    icon: <Sparkles className="w-5 h-5 text-[#FFA3CC]" />,
    aspect: "aspect-[4/3] sm:aspect-auto sm:h-full",
    colSpan: "md:col-span-5",
    techs: ["骨传导共鸣", "IRT 逆转算法", "微心率差追踪", "舒适度缓释域"],
  },
  {
    id: "bento-4",
    title: "梦睡联动数据看板",
    category: "Dream & Sleep Sync Dashboard",
    description: "打破传统监测局限，首创梦境脑波活性与睡眠深度周期的联动数字看板，揭示睡梦质量奥秘。",
    detailText: "我们首款把高阶梦境多导图（REM Active Profile）带入消费级智能分析的产品。直观的三维雷达波展示、浅睡与深睡期间的大脑电活性、高维眼动关联度，及不同造梦情境下的舒缓频率，为你呈现一份绝无仅有的睡梦数据图谱，让睡眠质量清晰可见。",
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=1200&auto=format&fit=crop",
    icon: <BarChart2 className="w-5 h-5 text-[#c084fc]" />,
    aspect: "aspect-[16/10]",
    colSpan: "md:col-span-7",
    techs: ["脑波活性扫描", "3D 多维图表", "睡眠振幅谱分析", "全维生理联动"],
  },
];

export default function SelectedWorks() {
  const [activeCard, setActiveCard] = useState<BentoCard | null>(null);

  return (
    <section
      id="work"
      className="bg-transparent py-16 md:py-24 border-t border-stroke/30 relative"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header Block with Framer Motion and Scroll triggering */}
        <motion.div
          id="work-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6"
        >
          {/* Headline & Subtext */}
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="text-[#FEE05B] animate-pulse text-[11px]">✦</span>
              <div className="w-8 h-[1px] bg-stroke/60" />
              <span className="text-xs text-[#9e8fcd] uppercase tracking-[0.3em] font-medium font-mono">
                Selected Works
              </span>
              <span className="text-[#FFA3CC] text-[10px]">★</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-display text-text-primary tracking-tight font-light leading-tight">
              核心梦境<span className="italic font-normal text-pajama-yellow">疗愈功能</span>
            </h2>
            
            <p className="text-muted/90 text-sm sm:text-base leading-relaxed max-w-xl">
              结合 AI 智能技术与睡眠心理学，打造差异化梦境睡眠愈疗全新体验。
            </p>
          </div>

          {/* Sparkly interactive counter to show quality sleep statistics */}
          <div className="hidden lg:flex items-center gap-3 bg-[#130b2e]/60 border border-stroke/40 rounded-2xl px-5 py-3 font-mono text-[11px] text-[#93c5fd]">
            <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>Lunar Core Status: OPTIMAL COZY ✦</span>
          </div>
        </motion.div>

        {/* Bento Grid layout matching the requested exact specifications */}
        <div id="project-bento-grid" className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {CARDS.map((card, index) => (
            <motion.div
              key={card.id}
              id={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={() => setActiveCard(card)}
              className={`group relative rounded-3xl overflow-hidden bg-[#110926]/40 hover:bg-[#150c2f]/70 border border-stroke/40 cursor-pointer ${card.colSpan} flex flex-col justify-between transition-all duration-300 shadow-2xl hover:shadow-indigo-950/20`}
            >
              {/* Image Container with precise aspect and zooms */}
              <div className={`relative w-full ${card.aspect} overflow-hidden pointer-events-none`}>
                <img
                  src={card.image}
                  alt={card.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-[0.75]"
                />

                {/* Halftone Cozy Ambient Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
                  style={{
                    backgroundImage: "radial-gradient(circle, #fdeb7b 1px, transparent 1px)",
                    backgroundSize: "8px 8px",
                  }}
                />

                {/* Star Overlay Layer for celestial feel */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border border-white/10 rounded-full p-2 text-text-primary">
                  {card.icon}
                </div>

                {/* Subtle visual help cue */}
                <div className="absolute bottom-3 right-3 bg-[#0d071d]/85 text-pajama-yellow text-[9px] font-mono tracking-widest px-3 py-1 rounded-full border border-stroke/30 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  点击探索 ↗
                </div>
              </div>

              {/* Detail section */}
              <div className="p-6 sm:p-8 space-y-3 bg-[#090314]/80 border-t border-stroke/20">
                <div className="flex items-center justify-between pointer-events-none">
                  <span className="text-[10px] sm:text-xs text-pajama-yellow font-mono tracking-widest uppercase">
                    {card.category}
                  </span>
                  <div className="text-[#FFA3CC] text-xs">★</div>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-text-primary tracking-tight transition-colors group-hover:text-pajama-yellow">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted/80 leading-relaxed font-light">
                  {card.description}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs text-muted/50 font-mono">
                  <div className="flex gap-2">
                    {card.techs.slice(0, 2).map((tech, i) => (
                      <span key={i} className="text-[10px] text-[#9e8fcd] bg-[#120a26] px-2.5 py-0.5 rounded-full border border-stroke/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-stroke/20 border border-stroke/40 flex items-center justify-center text-muted group-hover:text-pajama-yellow group-hover:border-pajama-yellow/50 transition-all pointer-events-none">
                    <ArrowRight className="w-4 h-4 transform group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* High Fidelity Pillow Moon Modal Lightbox Details */}
      <AnimatePresence>
        {activeCard && (
          <div
            id="lightbox-overlay"
            className="fixed inset-0 z-[10000] bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveCard(null)}
          >
            <motion.div
              id="lightbox-content"
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative max-w-4xl w-full bg-[#110729] border border-stroke rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[0_0_80px_rgba(253,235,123,0.08)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Media Container */}
              <div className="w-full md:w-1/2 aspect-video md:aspect-auto md:min-h-[500px] relative">
                <img
                  src={activeCard.image}
                  alt={activeCard.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover brightness-[0.8]"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#110729] via-transparent to-transparent opacity-80" />

                {/* Floating Badge */}
                <div className="absolute top-4 left-4 bg-black/55 backdrop-blur-md border border-white/10 rounded-xl px-3 py-1.5 flex items-center gap-2 text-xs font-mono text-pajama-yellow">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                  <span>Interactive Sync Active</span>
                </div>
              </div>

              {/* Full copy write-ups */}
              <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-between bg-[#110729] relative">
                {/* Close absolute */}
                <button
                  id="lightbox-close-btn"
                  onClick={() => setActiveCard(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-bg/60 border border-stroke/70 text-muted hover:text-text-primary transition-all duration-300"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="space-y-6 pt-4">
                  <div>
                    <span className="text-xs text-[#9d8ecd] tracking-widest font-mono uppercase block mb-1">
                      {activeCard.category}
                    </span>
                    <h4 className="text-3xl font-display text-text-primary">
                      {activeCard.title}
                    </h4>
                  </div>

                  <p className="text-sm text-text-primary/95 leading-relaxed font-light">
                    {activeCard.description}
                  </p>

                  <div className="space-y-2 max-h-[160px] overflow-y-auto pr-2 no-scrollbar">
                    <span className="text-[11px] text-pajama-yellow font-mono uppercase tracking-widest font-semibold block">科普机制 Mechanism</span>
                    <p className="text-xs text-muted/95 leading-relaxed leading-relaxed font-light">
                      {activeCard.detailText}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[11px] text-muted uppercase tracking-widest font-mono block font-semibold">支持技术 Technologies</span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeCard.techs.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded bg-[#1b1035] text-pajama-yellow font-mono border border-stroke/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-stroke/40 mt-8 flex justify-end gap-3">
                  <button
                    id="lightbox-close-btn-bottom"
                    onClick={() => setActiveCard(null)}
                    className="inline-flex items-center gap-1.5 py-3 px-5 rounded-xl border border-stroke text-xs text-text-primary hover:bg-[#1a0f3d] transition-all cursor-pointer"
                  >
                    返回列表
                  </button>
                  <button
                    id="lightbox-start-healing"
                    onClick={() => {
                      setActiveCard(null);
                      const contactForm = document.getElementById("contact");
                      if (contactForm) {
                        contactForm.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="inline-flex items-center gap-1.5 py-3 px-5 rounded-xl bg-text-primary text-[#0d071c] font-bold text-xs hover:opacity-95 transition-all"
                  >
                    立即体验此功能 ↗
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
