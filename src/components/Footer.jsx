import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-dark-900 border-t border-primary-900/30 text-primary-300 py-16 relative overflow-hidden">

            {/* 頂部金色線條 */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">

                    {/* 學院簡介 */}
                    <div className="md:col-span-12 lg:col-span-5 pr-0 lg:pr-12">
                        <h3 className="text-2xl font-serif text-surface-primary font-bold mb-5 flex items-center">
                            <span className="w-6 h-px bg-accent mr-3 hidden sm:block"></span>
                            臺灣禛好<span className="font-editorial italic font-normal text-accent-light px-1">Culture</span>學院
                        </h3>
                        <p className="text-base leading-relaxed text-primary-400 text-justify font-light">
                            結合易經、數字能量與心靈療癒，為生命能量覺醒導航。我們致力於打造一套可落地的生命系統，幫助每一個靈魂找到平衡與平靜。
                        </p>
                    </div>

                    {/* 快速連結 */}
                    <div className="md:col-span-6 lg:col-span-3 lg:col-start-7">
                        <h3 className="text-xs font-bold mb-5 tracking-[0.2em] uppercase text-accent-muted font-display">Quick Links</h3>
                        <ul className="space-y-3.5 font-light">
                            {[
                                { name: '關於老師', href: '#about' },
                                { name: '學院理念', href: '#academy' },
                                { name: '著作與成果', href: '#works' },
                            ].map(link => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-primary-400 hover:text-surface-primary transition-colors duration-200 flex items-center group cursor-pointer">
                                        <span className="w-0 h-px bg-accent mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 聯絡資訊 */}
                    <div className="md:col-span-6 lg:col-span-3">
                        <h3 className="text-xs font-bold mb-5 tracking-[0.2em] uppercase text-accent-muted font-display">Contact</h3>
                        <ul className="space-y-4 font-light text-primary-400">
                            {[
                                { icon: Mail, text: 'contact@example.com', note: '(示意)' },
                                { icon: Phone, text: '+886 2 2345 6789', note: '(示意)' },
                                { icon: MapPin, text: '台北市信義區信義路五段', note: '(示意)' },
                            ].map(({ icon: Icon, text, note }, i) => (
                                <li key={i} className="flex items-start group cursor-pointer hover:text-surface-primary transition-colors">
                                    <div className="p-1.5 rounded-lg bg-dark-800 border border-primary-900/40 group-hover:border-accent/40 group-hover:bg-accent/10 mr-3 transition-all">
                                        <Icon className="w-3.5 h-3.5 text-accent" />
                                    </div>
                                    <span className="mt-0.5 text-sm">{text} <span className="text-xs opacity-40 block">{note}</span></span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 版權 */}
                <div className="mt-14 pt-6 border-t border-primary-900/30 flex flex-col md:flex-row justify-between items-center text-xs text-primary-500 font-light font-display">
                    <p>&copy; {new Date().getFullYear()} 臺灣禛好文化學院. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
