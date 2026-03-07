import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Sparkles } from 'lucide-react';

const qualifications = [
    { title: '學歷背景', items: ['輔仁大學宗教系 碩士', '華梵大學東方人文思想研究所 博士'] },
    { title: '核心經歷', items: ['臺灣禛好文化學院 創辦人', '心靈易經研究者'] },
    {
        title: '協會/組織職務', items: [
            '中華婦女黨 中執委',
            '中華宗教生命關懷協會 籌備執行長暨常務理事',
            '中華人口文化促進會 理事',
            '海峽兩岸心理諮詢協會 副理事長',
        ]
    },
    {
        title: '專業認證與醫師', items: [
            '中國心理諮詢師 二級技師',
            '世界針灸聯合學會 中醫師',
            '中國公共營養師 一級技師',
            '香港自然療法學院 自然療法醫師',
        ]
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, type: 'spring', bounce: 0.4 } }
};

export default function AboutSection() {
    const { scrollYProgress } = useScroll();
    const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-aura-peach/30 via-transparent to-aura-cyan/30">

            {/* Background Orbs */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-[100px] mix-blend-multiply pointer-events-none"></div>
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-aura-pink/40 rounded-full blur-[120px] mix-blend-multiply pointer-events-none transform translate-x-1/2"></div>
            <div className="absolute -bottom-20 left-1/3 w-[400px] h-[400px] bg-aura-lavender/50 rounded-full blur-[100px] mix-blend-multiply pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Author Profile Highlight Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-32 items-center">

                    {/* Left: Author Profile Image with Clean Frame */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="lg:col-span-5 relative flex justify-center lg:justify-end perspective-1000"
                    >
                        <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem]">
                            {/* Clean Image Container with solid frame */}
                            <motion.div
                                style={{ y: yImage }}
                                className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.2)] border-8 border-white bg-dark-900"
                            >
                                <img
                                    src="/author-profile.jpg"
                                    alt="李虹禛老師"
                                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                                />
                            </motion.div>

                            {/* Decorative floating badge */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                                className="absolute -bottom-6 -right-6 lg:-right-12 bg-white/90 backdrop-blur-md p-4 rounded-full shadow-2xl border border-light-700 flex items-center justify-center animate-[float_4s_ease-in-out_infinite]"
                            >
                                <div className="w-16 h-16 rounded-full border border-dashed border-accent flex items-center justify-center relative bg-accent/5">
                                    <Sparkles className="w-8 h-8 text-accent-dark absolute" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: Author Core Intro Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
                    >
                        <div className="inline-flex items-center justify-center lg:justify-start space-x-2 mb-6">
                            <span className="w-8 h-px bg-accent"></span>
                            <span className="text-accent-dark tracking-[0.3em] text-sm font-bold uppercase">About the Founder</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-dark-900 mb-4 md:mb-6 drop-shadow-sm leading-tight">
                            李虹禛 <span className="text-2xl sm:text-3xl text-dark-800/70 font-medium">老師</span>
                        </h2>

                        <h3 className="text-lg sm:text-xl md:text-2xl text-accent-dark font-bold mb-6 md:mb-8 tracking-wide">
                            生命能量覺醒領航師
                        </h3>

                        <div className="space-y-6 text-lg text-dark-800/80 leading-relaxed font-light mb-10 max-w-2xl mx-auto lg:mx-0">
                            <p>
                                身為<strong className="text-dark-900 font-bold mx-1">臺灣禛好文化學院</strong>創辦人暨心靈易經研究者，李虹禛老師致力於將深奧的古典智慧，轉化為現代人能夠輕鬆理解並應用的生活法則。
                            </p>
                            <p className="bg-white/40 p-5 rounded-2xl border-l-4 border-accent italic text-dark-900 shadow-sm backdrop-blur-sm">
                                「將易經 × 數字能量 × 心靈療癒，整合為一套可落地的生命系統，引導每個人找回內在平靜，喚醒靈魂深處的潛能。」
                            </p>
                        </div>

                        <div className="flex justify-center lg:justify-start">
                            <span className="inline-flex items-center text-sm font-bold text-dark-900 tracking-widest uppercase pb-1 border-b-2 border-accent">
                                Scroll for detailed resume
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Separator */}
                <div className="flex items-center justify-center mb-24 opacity-50">
                    <div className="w-32 h-px bg-gradient-to-r from-transparent via-dark-800 to-transparent"></div>
                    <Award className="w-6 h-6 text-dark-800 mx-4" />
                    <div className="w-32 h-px bg-gradient-to-r from-dark-800 via-dark-800 to-transparent"></div>
                </div>

                {/* Qualifications Grid with Premium Glass UI */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
                >
                    {qualifications.map((group, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative bg-white/60 backdrop-blur-2xl p-6 md:p-12 rounded-[2rem] border border-white/80 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-10px_rgba(243,156,18,0.2)] hover:border-accent/40 hover:-translate-y-2 transition-all duration-500 overflow-hidden active:scale-[0.98]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-transparent z-0 pointer-events-none"></div>

                            {/* Colorful gradient border on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-accent via-aura-pink to-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0"></div>

                            <div className="relative z-10">
                                <div className="flex items-center mb-8">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-accent-light to-accent flex items-center justify-center shadow-lg mr-4 md:mr-5 border border-white/40 transform group-hover:rotate-12 transition-transform duration-500 flex-shrink-0">
                                        <span className="text-white font-serif font-bold text-lg md:text-xl">{index + 1}</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-extrabold text-dark-900 tracking-wide">
                                        {group.title}
                                    </h3>
                                </div>

                                <ul className="space-y-5">
                                    {group.items.map((item, i) => (
                                        <li key={i} className="flex items-start group/item">
                                            <div className="mt-1.5 mr-4 flex-shrink-0 w-6 h-6 rounded-full bg-white shadow flex items-center justify-center border border-accent/20 group-hover/item:border-accent group-hover/item:scale-110 transition-all">
                                                <div className="w-2 h-2 rounded-full bg-accent group-hover/item:bg-accent-dark group-hover/item:shadow-glow transition-colors"></div>
                                            </div>
                                            <span className="text-dark-800 font-medium text-base sm:text-lg md:text-xl leading-relaxed group-hover/item:text-dark-900 transition-colors">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}} />
        </section>
    );
}
