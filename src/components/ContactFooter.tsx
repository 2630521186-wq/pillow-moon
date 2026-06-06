/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState, FormEvent } from "react";
import Hls from "hls.js";
import gsap from "gsap";
import { Mail, MessageSquare, Send, Check, Moon, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface ContactFooterProps {
  onBackToTop: () => void;
}

export default function ContactFooter({ onBackToTop }: ContactFooterProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Initialize background video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoUrl = "https://github.com/yu2845399005-dot/Image-for-Ai/raw/main/jimeng-2026-04-06-5558-%E5%B0%8F%E7%8C%AB%E5%92%AA%E5%81%B7%E5%90%83%E8%A5%BF%E7%93%9C%EF%BC%8C%E7%84%B6%E5%90%8E%E8%A2%AB%E4%BA%BA%E5%8F%91%E7%8E%B0%EF%BC%8C%E7%84%B6%E5%90%8E%E9%9D%9E%E5%B8%B8%E7%9A%84%E6%87%B5%EF%BC%8C%E7%84%B6%E5%90%8E%E7%AB%99%E8%B5%B7%E6%9D%A5%E4%B8%80%E8%BE%B9%E6%8B%9B%E6%89%8B%EF%BC%8C%E4%B8%80%E8%BE%B9%E5%81%87%E7%AC%91%E4%BA%86%E4%B8%80%E4%B8%8B%EF%BC%8C....mp4";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoUrl;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    } else {
      video.src = videoUrl;
    }
  }, []);

  // Continuous GSAP translation marquee
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const tween = gsap.to(marquee, {
      xPercent: -50,
      duration: 35,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("pillowmoon@sleephealing.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmitMsg = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4500);
  };

  return (
    <footer
      id="contact"
      className="relative w-screen pt-20 pb-8 md:pb-12 bg-transparent border-t border-stroke/30 overflow-hidden"
    >
      {/* Background Video blended to stars */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-0">
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover brightness-[0.12] opacity-15 contrast-[1.1] mix-blend-screen"
          style={{ transform: "scaleY(-1) translate(-50%, 50%)" }}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Gentle overlay gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#090314] to-transparent z-0" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col justify-between h-full space-y-16">
        
        {/* GSAP Continuous Marquee Strip */}
        <div className="w-full overflow-hidden border-y border-stroke/20 py-4 relative">
          <div
            ref={marqueeRef}
            className="flex whitespace-nowrap text-xs text-muted/60 font-mono tracking-[0.25em] uppercase w-[200%] select-none lowercase-none"
          >
            {Array.from({ length: 15 }).map((_, idx) => (
              <span key={idx} className="inline-flex items-center gap-2.5 px-3 select-none text-[#9d8ecd]">
                <span>PILLOW MOON LUNAR COZY ADVISORY</span>
                <span className="text-pajama-yellow animate-pulse">🌙</span>
                <span>SLEEP PSYCHOLOGY RESEARCH</span>
                <span className="text-[#FFA3CC]">★</span>
                <span>DEEP HEALING SOUNDSCAPES</span>
                <span className="text-pajama-yellow font-bold">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Action Grid (Email CTA + Contact Form mini portal) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start pt-6">
          
          {/* Left Block: Email Button Invitation */}
          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl font-display text-text-primary tracking-tight font-light leading-snug">
              与 Pillow Moon <span className="italic font-normal text-pajama-yellow">一同开启</span> 温热安抚的造梦之旅。
            </h3>
            
            <p className="text-muted/80 text-sm leading-relaxed max-w-sm font-light">
              我们目前全面升级了首批“智能睡梦”顾问调优服务。如果您面临失眠困扰、多梦易醒或高焦虑情绪残留，请通过以下方式与我们共创治愈底色。
            </p>

            {/* Huge Email button with custom hover */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                id="footer-email-btn"
                href="mailto:pillowmoon@sleephealing.com"
                className="group relative rounded-full p-[1.5px] inline-flex items-center justify-center font-semibold overflow-hidden transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                {/* Gradient ring */}
                <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative bg-[#120a2e] group-hover:bg-[#070114] rounded-full px-6 py-4 flex items-center gap-2 text-sm text-text-primary transition-colors">
                  <Mail className="w-4 h-4 text-[#9d8ecd] group-hover:text-pajama-yellow" /> pillowmoon@sleephealing.com
                </span>
              </a>

              {/* Clipboard copy helper */}
              <button
                id="footer-copy-btn"
                onClick={handleCopyEmail}
                className="rounded-full px-5 py-4 border border-stroke/75 bg-bg/30 text-xs font-mono tracking-wider hover:border-pajama-yellow hover:text-pajama-yellow transition-colors cursor-pointer"
              >
                {copied ? (
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> 复制地址成功！
                  </span>
                ) : (
                  "一键复制顾问邮箱"
                )}
              </button>
            </div>
          </div>

          {/* Right Block: Miniature message portal */}
          <div className="bg-[#110729]/45 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-stroke/40 space-y-4">
            <h4 className="text-sm font-semibold text-text-primary flex items-center gap-1.5 font-mono">
              <MessageSquare className="w-4 h-4 text-pajama-yellow animate-pulse" /> 留下您的梦境诉求 Brief
            </h4>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#12082b]/60 border border-stroke/70 rounded-2xl p-6 text-center space-y-2 py-10"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
                  <Check className="w-6 h-6 animate-pulse" />
                </div>
                <h5 className="font-semibold text-text-primary text-sm mt-3">睡梦咨询方案已安全接收</h5>
                <p className="text-xs text-muted/95 max-w-[280px] mx-auto leading-relaxed">
                  睡梦专家会尽快与您取得联系，祝您今晚得享无忧星梦 🌙
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmitMsg} className="space-y-3 font-body">
                <div>
                  <input
                    type="text"
                    required
                    id="contact-name"
                    placeholder="您的称呼 / Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs bg-[#090314]/50 border border-stroke rounded-xl px-4 py-3 text-text-primary placeholder:text-muted/60 focus:outline-none focus:border-pajama-yellow transition-colors font-mono"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    id="contact-email"
                    placeholder="电子邮箱 / Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs bg-[#090314]/50 border border-stroke rounded-xl px-4 py-3 text-text-primary placeholder:text-muted/60 focus:outline-none focus:border-pajama-yellow transition-colors font-mono"
                  />
                </div>
                <div>
                  <textarea
                    rows={3}
                    placeholder="谈谈您的主要睡眠困扰、心率多梦情况及疗愈诉求..."
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs bg-[#090314]/50 border border-stroke rounded-xl px-4 py-3 text-text-primary placeholder:text-muted/60 focus:outline-none focus:border-pajama-yellow transition-colors font-mono resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  id="contact-submit"
                  className="w-full py-4 rounded-xl bg-text-primary text-[#0d071c] font-bold text-xs transition-opacity hover:opacity-90 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" /> 提交睡梦顾问咨询 ↗
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar containing standard context details */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-stroke/20 text-xs text-muted/60 gap-4">
          
          {/* Status Label (green pulsing dot) */}
          <div className="flex items-center gap-2 bg-stroke/10 border border-stroke/30 rounded-full px-3 py-1 font-mono text-[10px]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available For Lunar Advisories 通道已开启
          </div>

          <div className="flex items-center gap-2 text-pajama-yellow text-[10px] font-mono">
            <span>© Pillow Moon Sleep Inst.</span>
            <span>★</span>
            <span>星澜睡眠心理研究中心</span>
          </div>

          {/* Back to top helper */}
          <button
            id="back-to-top-btn"
            onClick={onBackToTop}
            className="hover:text-pajama-yellow font-mono text-[10px] tracking-widest uppercase cursor-pointer py-1 transition-colors duration-300"
          >
            返回梦顶 Back to top ↑
          </button>
        </div>

      </div>
    </footer>
  );
}
