import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X, Image as ImageIcon } from 'lucide-react';

const totalImages = 44;
const images = Array.from({ length: totalImages }, (_, i) => {
    const num = String(i + 1).padStart(4, '0');
    return `${import.meta.env.BASE_URL}works/心靈佛學傳家寶 - 改_page-${num}.jpg`;
});

export default function WorksGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const openModal = (index) => {
        setCurrentIndex(index);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="works" className="py-24 md:py-32 relative overflow-hidden bg-dark-900">
            {/* 簡潔紋理 */}
            <div
                className="absolute inset-0 z-0 opacity-5"
                style={{
                    backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="inline-flex items-center justify-center p-5 bg-dark-800 border border-primary-900/30 rounded-2xl mb-8 shadow-card"
                    >
                        <ImageIcon className="w-9 h-9 text-accent" strokeWidth={1.5} />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-surface-primary mb-5 tracking-wide"
                    >
                        出版著作與成果
                    </motion.h2>
                    <div className="w-20 h-0.5 bg-accent mx-auto rounded-full mb-8"></div>
                    <p className="text-lg md:text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed font-light">
                        《心靈佛學傳家寶》——<br className="block sm:hidden" /> <span className="font-editorial italic text-accent-light text-xl md:text-2xl">Masterpiece</span> <br className="hidden sm:block" />
                        老師匯聚多年心法與研究精華，帶您透過文字與編排，觸碰內心深處的祥和與智慧。
                    </p>
                </div>

                {/* 圖片網格 */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 mb-20 px-2 sm:px-0">
                    {images.slice(0, 12).map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.04 + 0.1, duration: 0.4 }}
                            className="relative aspect-[3/4] rounded-xl cursor-pointer group bg-dark-800 p-1.5 shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden border border-primary-900/20 hover:border-accent/60"
                            onClick={() => openModal(index)}
                        >
                            <div className="w-full h-full relative overflow-hidden rounded-lg">
                                <img
                                    src={img}
                                    alt={`心靈佛學傳家寶 內頁 ${index + 1}`}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-dark-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="bg-surface-primary text-accent p-3 rounded-full shadow-soft transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 delay-100">
                                        <Maximize2 className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => openModal(0)}
                        className="inline-flex items-center px-10 py-4 text-lg font-bold tracking-widest rounded-full text-dark-900 bg-gradient-to-r from-accent-light via-accent to-accent-light shadow-glow border border-accent-light/50 hover:shadow-glow-hover transition-all duration-300 relative overflow-hidden group cursor-pointer"
                    >
                        <span className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] group-hover:animate-[shine_1.5s_ease-in-out_infinite] will-change-transform"></span>
                        <span className="relative z-10">完整閱覽電子書</span>
                        <span className="ml-3 px-2.5 py-0.5 rounded-full bg-dark-900/20 text-dark-900 text-sm font-bold relative z-10">44 頁</span>
                    </motion.button>
                </div>

            </div>

            {/* Modal 燈箱 */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-900/98"
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 md:top-6 md:right-6 text-primary-400 hover:text-surface-primary bg-dark-800 hover:bg-accent rounded-full p-3 md:p-4 transition-all border border-primary-800/30 shadow-lg z-50 active:scale-95 cursor-pointer"
                            aria-label="Close"
                        >
                            <X size={24} />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                            className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 text-primary-400 hover:text-surface-primary bg-dark-800 hover:bg-accent p-2 md:p-3 rounded-full transition-all border border-primary-800/30 shadow-lg z-50 active:scale-95 cursor-pointer"
                            aria-label="Previous"
                        >
                            <ChevronLeft size={32} />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                            className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 text-primary-400 hover:text-surface-primary bg-dark-800 hover:bg-accent p-2 md:p-3 rounded-full transition-all border border-primary-800/30 shadow-lg z-50 active:scale-95 cursor-pointer"
                            aria-label="Next"
                        >
                            <ChevronRight size={32} />
                        </button>

                        <div className="max-w-5xl max-h-[95vh] w-full px-14 flex flex-col items-center justify-center h-full z-10">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="relative bg-surface-primary rounded-xl shadow-card flex-1 max-h-[85vh] w-full flex items-center justify-center border-2 border-surface-tertiary"
                            >
                                <img
                                    src={images[currentIndex]}
                                    alt={`心靈佛學傳家寶 內頁 ${currentIndex + 1}`}
                                    className="h-full w-auto object-contain select-none"
                                    style={{ maxHeight: '100%', maxWidth: '100%' }}
                                    draggable="false"
                                />
                            </motion.div>

                            <div className="mt-6 bg-dark-800 border border-primary-800/30 px-6 py-2.5 rounded-full text-accent font-semibold tracking-[0.15em] text-base font-display">
                                PAGE {currentIndex + 1} / {totalImages}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

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
