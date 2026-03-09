import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Activity, Heart, Star } from 'lucide-react';

const pillars = [
    {
        icon: <Star className="w-10 h-10 text-white" strokeWidth={1.5} />,
        color: 'from-accent-light to-accent-dark',
        title: '易經哲學',
        description: '傳承千年智慧，剖析宇宙萬物運行的規律，引導我們順應自然，趨吉避凶。'
    },
    {
        icon: <Activity className="w-10 h-10 text-white" strokeWidth={1.5} />,
        color: 'from-primary-500 to-primary-700',
        title: '數字能量',
        description: '解析生命靈數與周遭數字磁場，揭示潛藏的天賦與人生軌跡，掌握命運的鑰匙。'
    },
    {
        icon: <Heart className="w-10 h-10 text-white" strokeWidth={1.5} />,
        color: 'from-[#C08B8B] to-[#8B5E5E]',
        title: '心靈療癒',
        description: '結合心理學與自然療法，深入潛意識釋放創傷，回歸內在平衡，實現真正的身心靈健康。'
    }
];

export default function AcademySection() {
    return (
        <section id="academy" className="py-28 md:py-36 relative overflow-hidden bg-surface-primary">
            {/* 點狀紋理 */}
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#1C1917 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* 標題區 */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative inline-block"
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-dark-900 mb-6 md:mb-8 leading-tight">
                            臺灣禛好文化學院
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-20 h-0.5 bg-accent mx-auto mb-8"
                    ></motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg sm:text-xl md:text-2xl text-dark-600 leading-relaxed font-light px-4"
                    >
                        本學院致力於將深奧的東方智慧與現代心理學結合，為現代人提供一套<br className="hidden md:block" />
                        <span className="font-semibold text-accent relative mx-1">
                            可落地的生命系統
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent/30 rounded"></span>
                        </span>
                    </motion.p>
                </div>

                {/* 三大核心支柱 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
                            className="group bg-surface-primary rounded-2xl p-7 sm:p-8 md:p-10 shadow-card hover:shadow-card-hover transition-all duration-300 relative flex flex-col items-center border border-primary-200 hover:-translate-y-2 cursor-pointer"
                        >
                            {/* Hover 時的微妙背景 */}
                            <div className={`absolute inset-0 bg-gradient-to-b ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10`}></div>

                            <div className={`w-20 h-20 mb-8 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-glow transition-all duration-300`}>
                                {pillar.icon}
                            </div>

                            <h3 className="text-2xl md:text-2xl font-bold tracking-wide text-dark-900 mb-4 group-hover:text-white transition-colors duration-300">
                                {pillar.title}
                            </h3>
                            <p className="text-base md:text-lg text-dark-600 leading-relaxed text-center group-hover:text-white/90 transition-colors duration-300">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* 底部橫幅 — 統一用暗色主調 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-28 relative overflow-hidden rounded-3xl shadow-card"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900"></div>
                    {/* 微妙的金色光暈 */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4"></div>

                    <div className="relative p-8 sm:p-12 md:p-16 text-center">
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-surface-primary mb-5 md:mb-6 leading-tight">喚醒生命能量，找回最真實的自己</h3>
                        <p className="text-lg sm:text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed md:leading-loose font-light">
                            透過這套獨步全球的生命系統，李虹禛老師將與您一起<br className="hidden md:block" />
                            解開命運的密碼，療癒昔日的創傷，開啟充滿豐盛與喜悅的未來。
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
