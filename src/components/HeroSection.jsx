import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
    return (
        <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">

            {/* Vibrant Background Image with Cinematic Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(/hero-bg-vibrant.png)',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-dark-900/10 via-transparent to-dark-800/20"></div>
                {/* Colorful energetic bloom */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/30 mix-blend-screen blur-[120px] rounded-full pointer-events-none"></div>
            </div>

            <div className="relative z-10 text-center px-4 mt-16 md:mt-0 flex flex-col items-center w-full max-w-5xl mx-auto">

                {/* Glow Tag */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8 inline-flex items-center space-x-3 bg-white/40 backdrop-blur-xl px-8 py-3 rounded-full border border-white/60 shadow-[0_0_20px_rgba(243,156,18,0.3)]"
                >
                    <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-glow animate-pulse"></span>
                    <span className="font-editorial italic pr-2 text-accent-dark font-bold text-lg opacity-80">The Life System</span>
                    <span className="w-1 h-4 bg-light-700 mx-2"></span>
                    <span className="text-dark-800 tracking-[0.25em] text-sm md:text-base font-bold uppercase drop-shadow-sm">生命能量覺醒領航師</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-glow animate-pulse"></span>
                </motion.div>

                {/* Huge Cinematic Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] leading-none font-serif font-bold text-dark-900 mb-8 drop-shadow-xl text-shadow-glow"
                >
                    李虹禛 <span className="text-3xl sm:text-4xl md:text-6xl text-accent font-medium -ml-1 md:-ml-2 drop-shadow-md">老師</span>
                </motion.h1>

                {/* Dynamic Glass Panel Description */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="w-full"
                >
                    <div className="p-[2px] bg-gradient-to-r from-transparent via-accent to-transparent rounded-2xl mx-auto max-w-3xl w-full">
                        <div className="bg-white/50 backdrop-blur-2xl rounded-2xl py-4 px-4 md:py-6 md:px-8 shadow-2xl border border-white/50 relative overflow-hidden">
                            {/* Internal moving highlight */}
                            <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] animate-[shine_5s_ease-in-out_infinite]"></div>

                            <p className="tracking-[0.1em] md:tracking-[0.2em] text-dark-800 font-bold mb-4 uppercase text-xs md:text-base relative z-10 w-full flex items-center justify-center">
                                <span className="font-editorial text-accent-dark italic text-lg mr-2">est.</span> 臺灣禛好文化學院 <span className="font-editorial text-accent-dark italic text-lg ml-2">Founder</span>
                            </p>
                            <p className="text-accent-dark font-black text-lg md:text-2xl leading-relaxed relative z-10 text-shadow-glow">
                                「將易經 × 數字能量 × 心靈療癒<br className="block md:hidden" />整合為一套可落地的生命系統」
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Primary CTA Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 z-20"
                >
                    <a href="#about" className="group relative px-8 py-4 bg-dark-900 text-white rounded-full font-bold tracking-widest text-lg overflow-hidden flex items-center shadow-[0_10px_40px_-10px_rgba(243,156,18,0.5)] hover:shadow-[0_10px_50px_-5px_rgba(243,156,18,0.8)] transition-all duration-300 transform hover:-translate-y-1">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent via-accent-dark to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                        <span>預約生命導航諮詢</span>
                        <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>

                    <a href="#academy" className="px-8 py-4 text-dark-800 font-bold tracking-widest hover:text-accent transition-colors flex items-center group">
                        <span>探索能量系統</span>
                        <div className="w-0 h-0.5 bg-accent leading-none ml-2 group-hover:w-6 transition-all duration-300"></div>
                    </a>
                </motion.div>

            </div>

            {/* Subtle Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            >
                <span className="text-xs text-dark-800 tracking-[0.3em] font-bold mb-3 uppercase opacity-70">進入能量系統</span>
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <a href="#about" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/40 backdrop-blur-xl border border-white/50 text-accent hover:bg-white/70 hover:shadow-glow transition-all duration-300">
                        <ChevronDown size={28} strokeWidth={2.5} />
                    </a>
                </motion.div>
            </motion.div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes shine {
          0% { left: -100% }
          20% { left: 200% }
          100% { left: 200% }
        }
      `}} />
        </section>
    );
}
