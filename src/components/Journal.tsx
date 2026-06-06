/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Clock, Calendar, X, Star } from "lucide-react";

interface JournalEntry {
  id: string;
  title: string;
  date: string;
  readTime: string;
  description: string;
  contentMarkdown: string;
  image: string;
}

const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: "journal-1",
    title: "梦境与睡眠质量的深层关联科普",
    date: "2026年06月01日",
    readTime: "8 分钟阅读",
    description: "揭示眼动睡眠期（REM）与神经毒素清除、长期记忆强化及日间情绪复原的脑科学关联。",
    contentMarkdown: "睡眠医学研究表明，梦境并非无意义的感官噪点，而是大脑（主要在快速眼动波段，即REM阶段）进行心理排毒与记忆整理的底层机制。在REM周期，杏仁核被高度激活，以一种无去甲肾上腺素压力状态温和处理白天的情绪创伤；与此同时，胶状脑脊液流速增加二十倍，清洗累积的类淀粉样蛋白。缺乏深度梦境，人体将面临情绪易怒、短时工作记忆衰退及自律神经失调的直接风险。",
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=320&auto=format&fit=crop",
  },
  {
    id: "journal-2",
    title: "科学睡前引导，告别焦虑失眠",
    date: "2026年05月18日",
    readTime: "6 分钟阅读",
    description: "如何利用 Lunar 4-7-8 声共振呼吸节律与渐进式肌肉缓速脱敏（PMR）重建机能睡眠底色。",
    contentMarkdown: "现代都市失眠的主要成因是‘日间高频压力残留’。过度亢奋的交感神经无法顺利将指挥权交还给副交感系统。科学的睡前引导重点在于降频。通过模拟月亮潮汐的 4s 吸气、7s 憋气、8s 呼气声呐（即4-7-8呼吸法），能强效降减血液皮质醇浓度。配合渐进式肌群紧张——舒张练习（PMR），能在 10 分钟内建立起条件反射式的安全睡意，帮焦虑的灵魂寻找宁静避风港。",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=320&auto=format&fit=crop",
  },
  {
    id: "journal-3",
    title: "AI 赋能新式心理睡眠愈疗方案解析",
    date: "2026年04月29日",
    readTime: "10 分钟阅读",
    description: "探究自适应自然生成发声和梦境剧本定向改写技术，在重建深层潜意识秩序中的核心作用。",
    contentMarkdown: "Pillow Moon 的多维 AI 机制结合了认知行为疗法（CBT-I）。传统的睡眠音律是静态、机械重复的，而自适应 AI 引导系统依托实时手传感器及床头睡眠微动态追踪。当模型判明用户由于高活跃梦境正进入焦虑觉醒态（Micro-Arousal）时，AI 能在微秒内生成温和的缓释引导流和高频音阶。通过声能神经重构（Neural Remapping），将激荡噩梦消解在轻盈舒适的安全氛围中，显著延长深睡眠周期。",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=320&auto=format&fit=crop",
  },
];

export default function Journal() {
  const [activeArticle, setActiveArticle] = useState<JournalEntry | null>(null);

  return (
    <section
      id="journal"
      className="bg-transparent py-16 md:py-24 border-t border-stroke/30 relative"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header Block following standard header pattern */}
        <motion.div
          id="journal-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6"
        >
          {/* Headlines */}
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="text-[#93c5fd] text-xs">★</span>
              <div className="w-8 h-[1px] bg-stroke/60" />
              <span className="text-xs text-[#9e8fcd] uppercase tracking-[0.3em] font-medium font-mono">
                Sleep Journal / 睡眠疗愈简报
              </span>
              <span className="text-pajama-yellow animate-pulse">🌙</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-display text-text-primary tracking-tight font-light leading-tight">
              睡梦科学<span className="italic font-normal text-[#FFA3CC]">疗愈简报</span>
            </h2>
            
            <p className="text-muted/90 text-sm leading-relaxed max-w-xl">
              探索脑神经生理科学、正念心理引导与生成式 AI 在重塑高品质睡眠中的前沿应用实践。
            </p>
          </div>
        </motion.div>

        {/* Horizontal entries list designed perfectly to match exact layout requested */}
        <div id="journal-entries-container" className="space-y-5 max-w-5xl mx-auto">
          {JOURNAL_ENTRIES.map((entry, index) => (
            <motion.div
              key={entry.id}
              id={entry.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.008 }}
              onClick={() => setActiveArticle(entry)}
              className="group flex flex-col md:flex-row md:items-center justify-between gap-5 p-5 md:p-6 bg-[#12082b]/35 hover:bg-[#190d3b]/65 border border-stroke/40 hover:border-pajama-yellow/40 rounded-[28px] sm:rounded-full transition-all duration-300 cursor-pointer shadow-xl"
            >
              {/* Image & Title Block */}
              <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
                {/* Image Avatar */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 border border-stroke/45">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Text Context */}
                <div className="min-w-0 flex-1 pr-4">
                  <h3 className="text-base sm:text-lg font-medium text-text-primary group-hover:text-pajama-yellow transition-colors duration-300 leading-snug truncate">
                    {entry.title}
                  </h3>
                  
                  {/* Small intro describing entry */}
                  <p className="text-muted text-xs leading-relaxed mt-1 hidden sm:block truncate max-w-2xl font-light">
                    {entry.description}
                  </p>

                  {/* Row Metadata */}
                  <div className="flex items-center gap-4 mt-2 text-xs text-muted/60 font-light font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#9e8fcd]" /> {entry.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-pajama-yellow" /> {entry.readTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Arrow link block with custom bouncy motion inside */}
              <div className="flex items-center justify-end md:justify-start">
                <div className="w-11 h-11 rounded-full bg-stroke/20 border border-stroke/40 flex items-center justify-center text-muted group-hover:text-pajama-yellow group-hover:border-pajama-yellow/50 group-hover:bg-[#090314] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Article reading popup drawer logic */}
      <AnimatePresence>
        {activeArticle && (
          <div
            id="article-lightbox"
            className="fixed inset-0 z-[10000] bg-black/94 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative max-w-2xl w-full bg-[#110729] border border-stroke rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-bg/60 border border-stroke/75 text-muted hover:text-text-primary transition-all duration-300"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-6 pt-4">
                {/* Header info */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-pajama-yellow font-mono">
                    <Star className="w-3 h-3 fill-current" />
                    <span>疗愈学术专栏 • SLEEP SCIENCE</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-display text-text-primary leading-tight">
                    {activeArticle.title}
                  </h4>
                  <div className="flex items-center gap-4 text-xs text-muted/60 font-mono pt-1">
                    <span>{activeArticle.date}</span>
                    <span>•</span>
                    <span>{activeArticle.readTime}</span>
                  </div>
                </div>

                <div className="w-full h-[180px] rounded-2xl overflow-hidden">
                  <img src={activeArticle.image} className="w-full h-full object-cover contrast-[1.05]" alt="sleep science header" />
                </div>

                {/* Decriptive Paragraph */}
                <div className="space-y-4">
                  <p className="text-text-primary/95 text-sm leading-relaxed font-light bg-[#190d3d]/30 border border-stroke/20 p-4 rounded-xl italic">
                    导读：{activeArticle.description}
                  </p>
                  <p className="text-sm text-muted/95 leading-relaxed font-light whitespace-pre-wrap">
                    {activeArticle.contentMarkdown}
                  </p>
                </div>

                {/* Footer block */}
                <div className="pt-5 border-t border-stroke/45 flex justify-between items-center text-xs text-muted/65 font-mono">
                  <span>© Pillow Moon 研究室</span>
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="py-2.5 px-5 rounded-lg bg-text-primary text-[#0d071c] font-bold text-xs"
                  >
                    深悉梦境并在梦中相见
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
