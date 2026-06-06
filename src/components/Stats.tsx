/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2, Heart, Moon, Smile, Sparkles, Activity } from "lucide-react";

interface Stat {
  id: string;
  value: string;
  label: string;
  desc: string;
}

const STATS_DATA: Stat[] = [
  {
    id: "stat-1",
    value: "98.4%",
    label: "睡眠质量显著提升率",
    desc: "超过九成长期失眠体验者反馈入睡时间减半，且深睡比例增加 35% 以上。",
  },
  {
    id: "stat-2",
    value: "2,400+ 万",
    label: "累积深度治愈造梦时数",
    desc: "支持失眠个体在平稳、舒适的音疗中渡过，重塑高频脑部神经元健康状态。",
  },
  {
    id: "stat-3",
    value: "200%",
    label: "日间工作心理减压增幅",
    desc: "全方位提升潜意识自我调节修复弹性，有效抵御日间高度精神磨损与焦虑。",
  },
];

const ICONS = [
  <Smile className="w-5 h-5 text-pajama-yellow animate-bounce" />,
  <Moon className="w-5 h-5 text-[#93c5fd] animate-pulse" />,
  <Activity className="w-5 h-5 text-[#FFA3CC]" />,
];

// Marquee words loop
const MARQUEE_ITEMS = [
  "定向造梦", "颅内双耳差频音疗", "Sleep-LLM 大模型解析", "主副交感神经自主调谐", "噩梦认知阻断改写",
  "非接触式雷达睡眠监测", "Delta 慢波诱导", "极光睡眠舒适舱", "潜意识舒活仪轨", "枕头月亮声学生态",
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="bg-transparent py-20 md:py-28 border-t border-stroke/30 relative overflow-hidden"
    >
      {/* Background ambient spotlight circles with pajama hues */}
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full filter blur-[120px] bg-indigo-900/10 pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full filter blur-[120px] bg-purple-900/10 pointer-events-none -translate-y-1/2" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        
        {/* Simple Section Intro */}
        <div className="text-center max-w-lg mx-auto mb-16 space-y-3">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#9d8ecd] flex items-center justify-center gap-1.5">
            <span className="text-[#FFA3CC] text-[9px]">★</span>
            <span>Sleep Healing Performance</span>
            <span className="text-pajama-yellow animate-pulse text-[11px]">🌙</span>
          </span>
          <h3 className="text-2xl md:text-3xl font-display text-text-primary/95 font-light leading-snug">
            用科学实证与疗愈数据，<span className="italic text-pajama-yellow">守护每一个舒适之夜</span>。
          </h3>
        </div>

        {/* 3-Column Grid */}
        <div id="stats-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:divide-x md:divide-stroke/30 mb-20">
          {STATS_DATA.map((stat, index) => (
            <motion.div
              key={stat.id}
              id={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: "easeOut" }}
              className="flex flex-col items-center p-6 space-y-4"
            >
              {/* Icon Marker */}
              <div className="w-12 h-12 rounded-full border border-stroke/50 flex items-center justify-center bg-[#130b2e]/60 shadow-lg">
                {ICONS[index] || <Award className="w-5 h-5 text-muted" />}
              </div>

              {/* Stat Big Figure */}
              <div
                id={`stat-value-${index}`}
                className="text-5xl sm:text-6xl md:text-7xl font-display text-text-primary tracking-tight font-semibold text-pajama-yellow drop-shadow-[0_0_15px_rgba(253,235,123,0.15)]"
              >
                {stat.value}
              </div>

              {/* Title / Description */}
              <div className="text-sm font-semibold text-text-primary tracking-wide">
                {stat.label}
              </div>

              <p className="text-xs text-muted/80 leading-relaxed font-light max-w-[240px]">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* GSAP / CSS Infinite Moving Marquee as requested in blueprint */}
        <div className="relative w-full overflow-hidden border-y border-stroke/30 py-4 py-5 bg-[#120a2e]/25">
          {/* Faders overlay gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#090314] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#090314] to-transparent z-10 pointer-events-none" />

          {/* Marquee Inner moving animation */}
          <div className="flex whitespace-nowrap animate-marquee-loop">
            {/* Double list for smooth endless wrap-around */}
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((word, idx) => (
              <div key={idx} className="inline-flex items-center gap-3 mx-6 sm:mx-10 text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#9d8ecd]/75 hover:text-pajama-yellow transition-colors duration-300">
                <span className="text-pajama-yellow animate-pulse text-[11px]">✦</span>
                <span className="font-light">{word}</span>
                <span className="text-[#FFA3CC] text-[10px] select-none">★</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
