import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#2a3441] border-t border-white/10 text-white/70 py-16 relative overflow-hidden">

            {/* Subtle top gradient line & Background noise */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
            <div
                className="absolute inset-0 opacity-30 z-0"
                style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E\")"
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">

                    <div className="md:col-span-12 lg:col-span-5 pr-0 lg:pr-12 block">
                        <h3 className="text-2xl font-serif text-white font-bold mb-6 flex items-center drop-shadow-sm">
                            <span className="w-8 h-px bg-accent mr-4 hidden sm:block"></span>
                            臺灣禛好<span className="font-editorial italic font-normal text-accent-light px-1">Culture</span>學院
                        </h3>
                        <p className="text-base leading-relaxed text-white/80 text-justify font-light drop-shadow-sm">
                            結合易經、數字能量與心靈療癒，為生命能量覺醒導航。我們致力於打造一套可落地的生命系統，幫助每一個靈魂找到平衡與平靜。
                        </p>
                    </div>

                    <div className="md:col-span-6 lg:col-span-3 lg:col-start-7">
                        <h3 className="text-lg font-bold text-white mb-6 tracking-wider font-display uppercase tracking-[0.2em] text-sm text-accent-light">Quick Links</h3>
                        <ul className="space-y-4 font-light">
                            <li>
                                <a href="#about" className="text-white/70 hover:text-white hover:text-shadow-glow transition-all duration-300 flex items-center group">
                                    <span className="w-0 h-px bg-accent mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                                    關於老師
                                </a>
                            </li>
                            <li>
                                <a href="#academy" className="text-white/70 hover:text-white hover:text-shadow-glow transition-all duration-300 flex items-center group">
                                    <span className="w-0 h-px bg-accent mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                                    學院理念
                                </a>
                            </li>
                            <li>
                                <a href="#works" className="text-white/70 hover:text-white hover:text-shadow-glow transition-all duration-300 flex items-center group">
                                    <span className="w-0 h-px bg-accent mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                                    著作與成果
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-6 lg:col-span-3">
                        <h3 className="text-lg font-bold text-white mb-6 tracking-wider font-display uppercase tracking-[0.2em] text-sm text-accent-light">Contact</h3>
                        <ul className="space-y-5 font-light text-white/70">
                            <li className="flex items-start group cursor-pointer hover:text-white transition-colors">
                                <div className="p-2 rounded-full bg-[#2a313b] border border-white/10 group-hover:border-accent/40 group-hover:bg-accent/10 mr-4 transition-all">
                                    <Mail className="w-4 h-4 text-accent" />
                                </div>
                                <span className="mt-1">contact@example.com <span className="text-xs opacity-50 block">(示意)</span></span>
                            </li>
                            <li className="flex items-start group cursor-pointer hover:text-white transition-colors">
                                <div className="p-2 rounded-full bg-[#2a313b] border border-white/10 group-hover:border-accent/40 group-hover:bg-accent/10 mr-4 transition-all">
                                    <Phone className="w-4 h-4 text-accent" />
                                </div>
                                <span className="mt-1">+886 2 2345 6789 <span className="text-xs opacity-50 block">(示意)</span></span>
                            </li>
                            <li className="flex items-start group cursor-pointer hover:text-white transition-colors">
                                <div className="p-2 rounded-full bg-[#2a313b] border border-white/10 group-hover:border-accent/40 group-hover:bg-accent/10 mr-4 transition-all">
                                    <MapPin className="w-4 h-4 text-accent" />
                                </div>
                                <span className="mt-1">台北市信義區信義路五段 <span className="text-xs opacity-50 block">(示意)</span></span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-sm text-white/60 font-light font-display">
                    <p>&copy; {new Date().getFullYear()} 臺灣禛好文化學院. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
