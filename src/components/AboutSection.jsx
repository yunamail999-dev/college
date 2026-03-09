import React, { useRef } from 'react';
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
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, type: 'spring', bounce: 0.3 } }
};

export default function AboutSection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    const yImage = useTransform(scrollYProgress, [0, 1], [40, -40]);

    return (
        <section id="about" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden bg-surface-secondary">

            {/* 裝飾圓形 — 使用統一的 muted 色系 */}
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-muted-sand/50 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-muted-rose/30 rounded-full blur-3xl pointer-events-none transform translate-x-1/3"></div>
            <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-muted-lavender/30 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* 作者介紹 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-32 items-center">

                    {/* 左側：照片 */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="lg:col-span-5 relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-md aspect-[4/5] rounded-[2rem]">
                            <motion.div
                                style={{ y: yImage, willChange: 'transform' }}
                                className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-card border-4 border-surface-primary bg-dark-900"
                            >
                                <img
                                    src={`${import.meta.env.BASE_URL}author-profile.jpg`}
                                    alt="李虹禛老師"
                                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                                    loading="lazy"
                                />
                            </motion.div>

                            {/* 浮動裝飾 */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                                className="absolute -bottom-5 -right-5 lg:-right-10 bg-surface-primary p-3.5 rounded-full shadow-card border border-primary-200 flex items-center justify-center animate-[float_4s_ease-in-out_infinite]"
                            >
                                <div className="w-14 h-14 rounded-full border border-dashed border-accent/50 flex items-center justify-center bg-surface-warm">
                                    <Sparkles className="w-7 h-7 text-accent" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* 右側：文字 */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
                    >
                        <div className="inline-flex items-center justify-center lg:justify-start space-x-2 mb-5">
                            <span className="w-8 h-px bg-accent"></span>
                            <span className="text-accent tracking-[0.3em] text-xs font-semibold uppercase">About the Founder</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-dark-900 mb-4 md:mb-5 leading-tight">
                            李虹禛 <span className="text-2xl sm:text-3xl text-dark-600 font-medium">老師</span>
                        </h2>

                        <h3 className="text-lg sm:text-xl md:text-2xl text-accent font-bold mb-6 md:mb-8 tracking-wide">
                            生命能量覺醒領航師
                        </h3>

                        <div className="space-y-5 text-lg text-dark-700 leading-relaxed font-light mb-10 max-w-2xl mx-auto lg:mx-0">
                            <p>
                                身為<strong className="text-dark-900 font-semibold mx-1">臺灣禛好文化學院</strong>創辦人暨心靈易經研究者，李虹禛老師致力於將深奧的古典智慧，轉化為現代人能夠輕鬆理解並應用的生活法則。
                            </p>
                            <p className="bg-surface-primary/80 p-5 rounded-xl border-l-4 border-accent italic text-dark-800 shadow-soft">
                                「將易經 × 數字能量 × 心靈療癒，整合為一套可落地的生命系統，引導每個人找回內在平靜，喚醒靈魂深處的潛能。」
                            </p>
                        </div>

                        <div className="flex justify-center lg:justify-start">
                            <span className="inline-flex items-center text-xs font-semibold text-dark-700 tracking-widest uppercase pb-1 border-b-2 border-accent/60">
                                Scroll for detailed resume
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* 分隔線 */}
                <div className="flex items-center justify-center mb-24 opacity-40">
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent"></div>
                    <Award className="w-5 h-5 text-accent mx-4" />
                    <div className="w-24 h-px bg-gradient-to-r from-dark-700 via-dark-700 to-transparent"></div>
                </div>

                {/* 資歷卡片 */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                >
                    {qualifications.map((group, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative bg-surface-primary p-6 md:p-10 rounded-2xl border border-primary-200 shadow-card hover:shadow-card-hover hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        >
                            <div className="relative z-10">
                                <div className="flex items-center mb-6">
                                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-accent-light to-accent flex items-center justify-center shadow-sm mr-4 border border-accent/20 transform group-hover:rotate-6 transition-transform duration-300 flex-shrink-0">
                                        <span className="text-white font-serif font-bold text-base md:text-lg">{index + 1}</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl md:text-2xl font-serif font-bold text-dark-900 tracking-wide">
                                        {group.title}
                                    </h3>
                                </div>

                                <ul className="space-y-4">
                                    {group.items.map((item, i) => (
                                        <li key={i} className="flex items-start group/item">
                                            <div className="mt-2 mr-3.5 flex-shrink-0 w-2 h-2 rounded-full bg-accent/60 group-hover/item:bg-accent transition-colors"></div>
                                            <span className="text-dark-700 font-medium text-base sm:text-lg leading-relaxed group-hover/item:text-dark-900 transition-colors">{item}</span>
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
          50% { transform: translateY(-10px); }
        }
      `}} />
        </section>
    );
}
