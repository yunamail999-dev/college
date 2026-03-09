import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
    return (
        <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">

            {/* 背景圖片 + 統一疊層 */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${import.meta.env.BASE_URL}hero-bg-vibrant.png)`,
                }}
            >
                {/* 半透明暖白疊層 — 統一色調，壓低背景圖的色彩混亂感 */}
                <div className="absolute inset-0 bg-gradient-to-b from-surface-primary/40 via-surface-primary/20 to-surface-primary/50"></div>
            </div>

            <div className="relative z-10 text-center px-4 mt-16 md:mt-0 flex flex-col items-center w-full max-w-5xl mx-auto">

                {/* 品牌標籤 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8 inline-flex items-center space-x-3 bg-surface-primary/80 px-8 py-3 rounded-full border border-primary-200 shadow-soft"
                >
                    <span className="w-2 h-2 rounded-full bg-accent shadow-glow animate-pulse"></span>
                    <span className="font-editorial italic pr-2 text-accent font-semibold text-lg">The Life System</span>
                    <span className="w-px h-4 bg-primary-300 mx-2"></span>
                    <span className="text-dark-700 tracking-[0.2em] text-sm md:text-base font-medium uppercase">生命能量覺醒領航師</span>
                    <span className="w-2 h-2 rounded-full bg-accent shadow-glow animate-pulse"></span>
                </motion.div>

                {/* 主標題 */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] leading-none font-serif font-bold text-dark-900 mb-8"
                >
                    李虹禛 <span className="text-3xl sm:text-4xl md:text-6xl text-accent font-medium -ml-1 md:-ml-2">老師</span>
                </motion.h1>

                {/* 描述面板 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="w-full"
                >
                    <div className="p-[1.5px] bg-gradient-to-r from-transparent via-accent/60 to-transparent rounded-2xl mx-auto max-w-3xl w-full">
                        <div className="bg-surface-primary/75 backdrop-blur-md rounded-2xl py-5 px-5 md:py-7 md:px-10 shadow-card border border-primary-200/50 relative overflow-hidden">
                            {/* 光效掃描 */}
                            <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] animate-[shine_6s_ease-in-out_infinite] will-change-transform"></div>

                            <p className="tracking-[0.1em] md:tracking-[0.2em] text-dark-600 font-medium mb-3 uppercase text-xs md:text-sm relative z-10 w-full flex items-center justify-center">
                                <span className="font-editorial text-accent italic text-base mr-2">est.</span> 臺灣禛好文化學院 <span className="font-editorial text-accent italic text-base ml-2">Founder</span>
                            </p>
                            <p className="text-dark-900 font-bold text-lg md:text-2xl leading-relaxed relative z-10">
                                「將易經 × 數字能量 × 心靈療癒<br className="block md:hidden" />整合為一套可落地的生命系統」
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* CTA 按鈕 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 z-20"
                >
                    <a href="#about" className="group relative px-8 py-4 bg-dark-900 text-white rounded-full font-bold tracking-widest text-lg overflow-hidden flex items-center shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent via-accent-dark to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                        <span>預約生命導航諮詢</span>
                        <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>

                    <a href="#academy" className="px-8 py-4 text-dark-700 font-bold tracking-widest hover:text-accent transition-colors flex items-center group cursor-pointer">
                        <span>探索能量系統</span>
                        <div className="w-0 h-0.5 bg-accent ml-2 group-hover:w-6 transition-all duration-300"></div>
                    </a>
                </motion.div>

            </div>

            {/* 滾動指示器 */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            >
                <span className="text-xs text-dark-600 tracking-[0.3em] font-medium mb-3 uppercase opacity-70">探索更多</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <a href="#about" className="flex items-center justify-center w-11 h-11 rounded-full bg-surface-primary/70 border border-primary-200 text-accent hover:bg-surface-primary hover:shadow-soft transition-all duration-300 cursor-pointer">
                        <ChevronDown size={24} strokeWidth={2} />
                    </a>
                </motion.div>
            </motion.div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes shine {
          0% { transform: translateX(0); }
          20% { transform: translateX(400%); }
          100% { transform: translateX(400%); }
        }
      `}} />
        </section>
    );
}
