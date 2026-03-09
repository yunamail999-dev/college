import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: '首頁', href: '#home' },
    { name: '關於老師', href: '#about' },
    { name: '學院理念', href: '#academy' },
    { name: '著作與成果', href: '#works' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        const shouldBeScrolled = window.scrollY > 50;
        setScrolled(prev => prev !== shouldBeScrolled ? shouldBeScrolled : prev);
    }, []);

    useEffect(() => {
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [handleScroll]);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#home" className="text-xl md:text-2xl font-serif font-bold text-dark-900 tracking-wide hover:text-accent transition-colors">
                            臺灣禛好文化學院
                        </a>
                    </div>
                    {/* 桌面導航 */}
                    <div className="hidden md:flex space-x-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-dark-700 hover:text-accent font-medium transition-colors duration-200 relative group cursor-pointer"
                            >
                                {link.name}
                                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>
                    {/* 手機選單按鈕 */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-dark-800 hover:text-accent focus:outline-none p-2 -mr-2 cursor-pointer"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* 手機選單 */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surface-primary/98 shadow-soft border-t border-primary-200/40 overflow-hidden"
                    >
                        <div className="px-4 pt-3 pb-4 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block px-4 py-3.5 rounded-xl text-lg font-medium text-dark-800 hover:text-accent hover:bg-surface-secondary active:bg-surface-tertiary transition-colors cursor-pointer"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
