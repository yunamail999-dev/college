import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Activity, Heart, Star } from 'lucide-react';

const pillars = [
    {
        icon: <Star className="w-12 h-12 text-white" strokeWidth={1.5} />,
        color: 'from-amber-400 to-accent',
        title: '易經哲學',
        description: '傳承千年智慧，剖析宇宙萬物運行的規律，引導我們順應自然，趨吉避凶。'
    },
    {
        icon: <Activity className="w-12 h-12 text-white" strokeWidth={1.5} />,
        color: 'from-blue-400 to-indigo-500',
        title: '數字能量',
        description: '解析生命靈數與周遭數字磁場，揭示潛藏的天賦與人生軌跡，掌握命運的鑰匙。'
    },
    {
        icon: <Heart className="w-12 h-12 text-white" strokeWidth={1.5} />,
        color: 'from-rose-400 to-pink-500',
        title: '心靈療癒',
        description: '結合心理學與自然療法，深入潛意識釋放創傷，回歸內在平衡，實現真正的身心靈健康。'
    }
];

export default function AcademySection() {
    return (
        <section id="academy" className="py-32 relative overflow-hidden bg-white">
            {/* Eye-catching background patterns */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute top-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-radial from-aura-lavender/60 to-transparent opacity-70 blur-3xl rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-radial from-aura-cyan/60 to-transparent opacity-70 blur-3xl rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Dynamic Header */}
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative inline-block"
                    >
                        <Sparkles className="absolute -top-10 -left-10 w-12 h-12 text-accent animate-spin-slow opacity-80" />
                        <Sparkles className="absolute -bottom-6 -right-8 w-8 h-8 text-aura-pink animate-pulse opacity-80" />

                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-accent via-dark-800 to-accent mb-6 md:mb-8 leading-tight">
                            臺灣禛好文化學院
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-xl md:text-2xl text-dark-800/80 leading-relaxed font-light px-4"
                    >
                        本學院致力於將深奧的東方智慧與現代心理學結合，為現代人提供一套<br className="hidden md:block" />
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-dark to-accent relative mx-2">
                            可落地的生命系統
                            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-accent/40 rounded"></span>
                        </span>
                    </motion.p>
                </div>

                {/* Highly Vibrant Core Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.2, type: "spring" }}
                            className="group bg-white rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] hover:shadow-2xl transition-all duration-500 relative flex flex-col items-center border border-light-700 hover:-translate-y-3 active:scale-[0.98] z-10 mx-2 sm:mx-0"
                        >
                            {/* Vibrant Gradient Background that activates on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-b ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] -z-10`}></div>

                            <div className={`w-24 h-24 mb-10 rounded-full bg-gradient-to-br ${pillar.color} flex items-center justify-center p-1 shadow-lg group-hover:scale-110 group-hover:shadow-glow transition-all duration-500 ring-8 ring-white/50`}>
                                <div className="w-full h-full rounded-full border-2 border-white/40 flex items-center justify-center backdrop-blur-sm">
                                    {pillar.icon}
                                </div>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-extrabold tracking-wide text-dark-800 mb-4 md:mb-6 group-hover:text-white transition-colors duration-500">
                                {pillar.title}
                            </h3>
                            <p className="text-base md:text-lg text-dark-800/70 leading-relaxed text-center group-hover:text-white/90 transition-colors duration-500">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Powerful Bottom Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-32 relative overflow-hidden rounded-[3rem] shadow-2xl"
                >
                    {/* Intense colorful banner background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-rose-400 to-indigo-400 animate-[gradientBG_10s_ease_infinite] bg-[length:200%_200%]"></div>

                    <div className="relative p-8 sm:p-10 md:p-20 text-center backdrop-blur bg-white/10 border border-white/40 rounded-[3rem]">
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6 md:mb-8 drop-shadow-md leading-tight">喚醒生命能量，找回最真實的自己</h3>
                        <p className="text-lg sm:text-xl text-white/95 max-w-4xl mx-auto leading-relaxed md:leading-loose drop-shadow-sm font-medium">
                            透過這套獨步全球的生命系統，李虹禛老師將與您一起<br className="hidden md:block" />
                            解開命運的密碼，療癒昔日的創傷，開啟充滿豐盛與喜悅的未來。
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
